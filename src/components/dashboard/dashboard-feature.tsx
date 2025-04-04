/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "67R7TcawsKWrcSLz6rHvjg68PvFLhT77k6JoQ16qnTTm2mV4gtrJSVYGqz43EEC4iFxjTZ44zdnjUxrFWam5k7nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqZrBxsByp1p51aHhaNpB3NVPq4RvoVKJKxi2EX11SodiFHSWnAoyFGNHAP3iQpqkw63QNfBRhbrnui3rHF7YHo",
  "key1": "4qhPti8ejxpCb4ey4HpmAAEisLXe5AoD9kudmWRGVpe6zK4XqU7WzT5teoUUromwSTQQjvf1JkyymrkY8uvXXfT",
  "key2": "3uZZjvhDFHbLV2xLVauynU1aJydkXShgw7dj5SVdtr9b9vgKvbmAh131Z7GtccL8dUAQpjNv8TmP2KVpu1tscadj",
  "key3": "3kSH8PoD7xgxdzpFwaHgwckDxhQMHaNFsFvMTqCi2FaHXbfTew6hJcdiZGgUtJJRFmndGhfAftZ15NiYTGgsWos7",
  "key4": "3s6QdJFf28NVvuLsSk1icRxJw77XuAeUdhJfhrqUKHxxqTzZBdeeRZJbdGdU95qrSg9yuaTeRvYtirSDUhNhg9N1",
  "key5": "25yu2Y8kgTtrsfLhdBejQd6WF9mL27TDUa1s6v1JaY6nRMdvy19K4Mabg6nbEsdvBjkZKXXkTizvuc8LCvoaiUEw",
  "key6": "4mJhrG8EizDpX7KaFLk3hYFYA976qH84UvMCRjJNgEhkRT43yLX7xpVRuE47KADxHvi2jcWYDiBxAFMjmhFeSkRC",
  "key7": "3FHcucGC9rd1K3m3H5HetX9zW1ZNPKzreq6kVnm9vcmvMh8QPaTjt5nC2RX4GHgzGsei79J8WBKNkS93FV1SCps8",
  "key8": "3xKumzzgdSSnYprQq774bBVh445PQ4fLJfo4TfZDmMRYVTJQ4r1UK2QphG4WSdfC8RcqFqaZSofts5WLNeQsMqBt",
  "key9": "CdndmEyhnewZGxM5cjvMtJkJkkXKMXUKhULQaBQkBkYKUgphbKrFVtEWg4ZmPVyyv6n2ZHYRuShxNnPSKmszxjo",
  "key10": "n9HF7oYHAyTEVAS1sUWSFdctARpv5seDre15wAP7MuqQ1Hhk2j4XjCGhma5s6rC2pFdHJD2hQ62rzR6h4W7pABo",
  "key11": "2h5Gjc8n37thrwd1xa96SUc7EiGEmr4aUfXEE9g8DGDMryusVRHmrrt59u75cchiVGZUkEFJbviCe15nngqPrBLV",
  "key12": "3jSr9HVPyVBcHMAFBwoZwxDjuGPJJL99FGgTZ6kVoP8omUnVX8VK6RbA5rpHVsnXS68Ux8YbE11otHhaNJTTzxkV",
  "key13": "3bQ9sCN4wgeHxqP1DA7QxxuHUYDJ1AC3RtTrbJHGBgBv3tzaCfDuPCfiYLzjYbMTo1v4ZMQhJiCP7ADhhyrsx2y2",
  "key14": "3m2ha4YbBQWEW3bzM85ZrQm5M1qgnCqnxNyeMEmdd2cB98T5MWvAEnryc8SwSQNDhfofpiVVfgoUewVqN9kjg9dj",
  "key15": "3JurWBw2Lq9VG2kBHLtof6jxW1fUwrAGfb7UvmGgBY4LVanDatJJRxKyZdN4gHSG6Qrexsqh6ZV2Gw7RiKy2Takx",
  "key16": "2Pt4X8MVKYj3rBaH9ViKqqAUgG2PLU6ZFcQA3Qr5kpJZ2eSmqhxwVP2fbzgKJ8f7vtUqJG4sLexyJee1SKNYkJ4q",
  "key17": "DYM2pmkKF8ESVy9hngVNnJJa5TXEZeN7Xehq56a1RfyNYnb8LhDFqqPpyMPdmisVShx3ANWSgLypo9iHvwnY9t5",
  "key18": "4j2isBsRucySjTDN7ErVMdqomwPWXXkvtAFdiUatS7NWdm38j96Z6g5v3MikVUtkbF5ke2aTZjTYXrCsPjHuvUBT",
  "key19": "3VHCfrsohwH2GjvBHkDLL8NPs1wPe5ot5RVxCz6KQWdy6nxQ9NDjk6tTW8pNBduRbu8KSCxXzu3kLHLUNJA38Fgv",
  "key20": "ATuCyxEUdDHingiFFaFHp3Amv3WJ39j4JUmjuYkeUp6CZ7qefTEAVFNwv6hU4kncJiEweV1ZDfuhTwgxXfgGdXZ",
  "key21": "5reaK9Lxi1WRVhKnfXeH8ZXetRmdrfZjQ6ysGLrrB4mVJjn4Vojowvid1FjmFtseM1MetEzw1kaoqUBpVrD5KSMt",
  "key22": "3YsHxyekS3haFHunyA7dtQf96B7gB74ya92mZssLbhcaaw2Tmjgow6sEZyWUR2JMrFLALuS1cqx8Hs3ztaboXQKm",
  "key23": "rt6N4WQ8Q2Jc4AwgW5GjWz5D3LuTaTT5xFVARDVdwDwh8vJrA4YHWLgE56PcKgsDh8NDb1ffP1bTEwXFqgHkyVT",
  "key24": "4dYqu13VGiyuxdxn7QxjWf8SdB2LwxpYAL2kycW1ZK2mrPRYbqLbm7XT1HQecAh5b81Drec1B4UBUu6fsLDZKgLB",
  "key25": "rRcVL1BH9tsDqXC9anuAHyWe64tTQM8T2U7BEo796dmzi7uznN2rSWoVyq6uPvPZXjwtqeJQmqbewvC8i11Gkgc",
  "key26": "5fwZn4CWMgzvfe2reqoudrJgKWLf7vyLkAjgfh99NR3Pox2JSnrh426QeF74Ryhr9GiKSm2uw4cLrZDZwXdozHwK",
  "key27": "5x41XKRzak44QmqF5yy4QKn3iRErkxGKEi5dYBW68gwheuHVXunUVuHvMEYkJbkj91Wfprnr9Y9xWpRjNLvxoPMC",
  "key28": "4L5uj6UnF69NaAoChMptwhXdQ4vCNp9AW8THqxh2kvYDknoKdZxMWUU8qHZci6rv5cw5FZ6SWMjfAVf9FJLidioK",
  "key29": "5BSkrKaRKMHRd4LkYpgwgzkcLXTt1mshJgZ9ivRfvUpyu4ybSQovXHwPrDcjUL3E4wXdPGdDrfti8hmLqhBDmgmm",
  "key30": "tcbuGuaCgMPLx1GxvVkD1eDbRBZNuCVNDzW29R6uLfTThkRHWZsswG8MhVtdKuB3jkqkFwWASU4ky3AGZjyTLBS",
  "key31": "28TBQSu2Qk5vqTFr5WZ4MSJ4WxLxnn9NCMCXac49zKoU4fuCY7nJdMKCVsaYopSXRBGmgV7iwe2W5HfJaLC9bfGk",
  "key32": "5UYBWjRnggwFXqo7S1KiDpXFgfAAuzRCchXvvFKK3AMxMmqeP74xNfk3Y7wYFBifVrdPKLVbcVp6zfuyNwpp82L",
  "key33": "rFXwBXayN4M8EF8nD1J7cySMYfoNZqnCVEDaGTMJJe4Hku9UqG4zQcYKRWcALGpwxtYNV4n7yDWMegAgThH1hWb",
  "key34": "5rTLcVXek5AaMTaM3aty8sTXDS6neicZgsb2V9oPEY5JY7xcXN13BGZdzTgyQJ3zSvPm8iJV6nKM1achc5QEKH6K",
  "key35": "31yRputFiAfomZ9PSP4MtQvwmsYCKfyuybMVkBLsihCUjFSqycJVxjs7MUsRjrS9Sdfmc5HGSCUfJw87hJ5GKusN",
  "key36": "2mtgFHPcSeoAorDn46FYGaQQ97KWguMQm3tLpoqZtGm8K9RarfzfDetZfPzHNB32KuJU8MaupxxDpt6R6qbjxucP",
  "key37": "5pfgk1YAzLMyH6NbJhJFVpWST7hzGSCYdPRXje2JXBxgyv1vN4M7k1bqQkiYWdmJuXUir2GjnovAg78e6Gsf9HRU",
  "key38": "GZBMtHhq7DbuA3yYag2u3BkEowPXtMafJqae2uiSDvqhnjk5b3gR6mZjq2KK6dt7o5t63X56WkUHzxUDtzKz6pp",
  "key39": "2iyJhvyFTRXQxLiMntUsP2ve9eXRppPAnZ1H7aEQYUnYcJZb53pu2v3mfrAG3Dq79kR7yYvZ1a5vcuoZAjfQ8Etf",
  "key40": "5zE33y8YpizZ6kuaLY78LqAnFECVKkBtAhFp321iqd2gR6MUh1fh9qW1xBh3uxGQ5no4MmHMNzn8jp2zsYpCuy6a",
  "key41": "25GaN5D24tQqjPXt6RXeT1N1TxV6HHAQnpBsgNRd8JYFQDWr4jwKXRFH9ApBg4NwkaKQ34JNfv9qT9P9Ykq8NpVY",
  "key42": "3m1rMcELKjD6Ar5yzVWNQV1n5J8qPDzSS2CgYxEhEsg9MRzqgWmh3fR9mvzLdJvwjf7KLTMpG4fczdWFQkqVExsK",
  "key43": "4k6JA2GABQyoJRr2UJk8fXhPwMfFrN2ci7uJP1Air2wnMXuSoySaHwnVK6ZamqrJWEewPYhsvir19RWz1zjnNovc",
  "key44": "2znzbhRYw74hduYNPXAxv5dx1vcGussrHfFPtBK6q3SBCwG27oQkoAFJTf56PJEW1ZsN9XZjuVd68KmzeZe7oBbT",
  "key45": "3x1TYkYzEkVFh8UCiskDBk368aKj7LNhgVHiELKGyrbCsacWeFNcjxZsDaeHJpByF1VNinR1n7A6fxYGYuCiJVJU",
  "key46": "33uajR87avRRvu7rB1EUVqu4s4TdnVd3jgrjrjTBWwrxCihz3thivksrvKiqwzk5yMqP8WAobGnhkZ3wUDRLxzf6",
  "key47": "54gorUUHmq2wHDa43rTeGJaxFrhi98fkUUkJ7urp2ERZMn3r3Jby8napdBz6j729eiKPJtEyzB3UjtG3QiZJWkG5",
  "key48": "4363ehwCPLRTN1y1Y2MVbaJLGtFWJMj5sbsRQ2H91yv4RvZ7fcKVxCrDYdK23NSTrTb2cEkVc3bneoZuEghBX51Q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
