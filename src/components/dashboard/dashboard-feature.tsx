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
    "5YZUnbxihfpbqrgF7D3DUHVgYgvUa9wRh7mbsfzdPa7CexgreLzhyvs5cX6KkhXWFCPeEvXSMQsdkoekRE9446nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9V7PpVb1FFA3uFSDwX8hnxwZJdjeztUsygBBjUGdSiwkRiQwrkGMm3CCCQPTZspEB222DYMTtYxaBZLUJkQKMR",
  "key1": "2ZDThJAAB1HEnSbwX72Niwb55uYEfwcooKizEKud98TVPiWgfhuRXgk9kSfUCxeZYKt8F84rgThZQ3wsXgpHfgGC",
  "key2": "54EKvL2egpBRe5K1BDTRn7FMmd3YBy29mERbsfRxWM7H1S3yWXS7ZFQQ1RPgW3a3xHPC6irQck78qb1BhdPxHGaZ",
  "key3": "3TrbwV9Tu34VJMrUwno72ZCxrNs8Q3QhtTKemAamAmczzRMeGDbvXL555uP7kJ7NFXDpw7ciD7GhSADkwK6o7smw",
  "key4": "5La4oEYQa7kQToJvgAWSbuS2NBtR43oJQPwVvimFv3nhRzZT2qCHqRaM5yeU6RnQpcD3mzw1WLPRt9sTozmCjzkg",
  "key5": "e8iw9yCF1WdYGsnrABNHJsNzB5gjEJrBwtD1xLynxYhW3Be2mURZg8oFdjPr4S559QHEV1DN9CK7aTEWvCTzBiY",
  "key6": "53bzfLqTKocQSyHSXMq9aef8xVkrKpd7SgxP6NDDxjSDgpoviC1ZbJiwu3XWSyeSWMgrTuvEvVtfJHjTKrbu2aiP",
  "key7": "29JEu5LZzQaXeU7pSvFpeJFouaBy8q7BY9uvSbaLHT484ebSw4bFhiFKDQigjQSGSZ2MWF8KhPjafDav61G2FPqz",
  "key8": "5FsZ2ez82ueKqi1but2qe68fjx8ueQQo1QRHsuCecd2Y2xaH8MJkwLCaVauHE7kUBdUNMPBAe5sAXN7eXVjzZJcm",
  "key9": "329Ji7CC6P7myokJj1qWYEFjcqiFTYcDUbC5tiaCvM1PjPzPSA4x2Sate1k5Yv4LLHCDkbWRuuVfCYXDs3ybbwKm",
  "key10": "gLcCJwpVFNZoLTGqTP7XmvZJPvyGmp48b8FGV5fBqdEcwtXJyoYvN5tHdUeG82RqHppyyhMLjv1AZCn3TDxqexg",
  "key11": "4vjCcXQP3ygMeEigBPWKCftpJVPsr2XALYNkL1QSjaXNwGzhBuoVYcRarquJ65ndc9oUVpjV4986FC9QJEW29b2t",
  "key12": "3DFmGmGZoiErJc3gMTWxoRNgMaBzDakDEdYdVqUNiziTrhq97gCbxFrmgoXaV5WAbjQFUouTfLSTSqH5okFNZhe2",
  "key13": "3SYg6yVpGNM7nTT4oEmWv6pPSQNDcQQKf3QEPEvGcZAcCZhg49yQCNQCt22mM8yxQ6C2NJYazsjA7NBUsht3vbCP",
  "key14": "3arr6Ust3ihXLz77moB6uyU7gKD9h7rKaMEWtvZcRRUVHc8g6D4oSGsjKUXhNzHvJS6SyxgEBsNbmsVwSFoCayF9",
  "key15": "s8Jryqke92G87SV4q4zHJmL46wSHGFhgWjYjTyKA6u4SDR76zufU8NH8vuy6qfSbtcGBpWyg2iR7ATHrGX2wcWC",
  "key16": "5NRVMLdREHo84RejNVLRk1463eKjNzhpTPFREQzwQgd8jwWvV51WzZ8LsPCWf2oHLt8jBPkohezkR37CmRyWGcUF",
  "key17": "3KC6Vq7Y5WtmY44DwC8dTPFNQyUUbbYPwSznK4RPCXz4AzWWLEvCAvMGXJE65ECmA6axkAqcTVbajBaRbWaSA1aY",
  "key18": "2TNyAPyY7pY9iPcdbryHuWQ58HmGYp1xSDrZmF9USTjsskW57ces2sUnFzFXQjZDuqEvV3tyft8NrvywM3Jo1Ypr",
  "key19": "3vq26xbo9rWSXEXqAGkfq8aWjU4QWEhysH2LPAZbBxk2a5vdQ1h7qFs6swhJvV5gvGJpczBWJWJCwET4KNF7zJom",
  "key20": "3JURQ39JiYuVr4iYwgr8of8RNxUL1K9cskPp9YJU7SbezzHbDbzea82vn9MSNn5DwJ8uzNCKakoDcwpL1Rg3advG",
  "key21": "2ejCCKkTA8rdPGSP9d3SW34AucCh1Y1hsMg7WQFUuKy81a5jW17SFMUfhskuUUewgRAqXAYbpDAb7L5688fFbXTc",
  "key22": "5sN5ZJwGMKobLrG6kYE1xRuu1H2zn48QtdTQuYwSTyVz59Esxxax6odPF6xXn2pcL3z1EyyhP8pz55EjAMFc2jHG",
  "key23": "5L7C2sapwwgAFgGbktUeojiPRsGXyjWzQJA9taipd4Nwp8Xibhnp4jPMdbLzAs38pH1NCNbFyV8LCyXYa4f87Krd",
  "key24": "5YF8jfYkZEAjFvSKAz2BkFuvXkuwMcAzijoWb2QkQARssmuDmcvC6dfJZsetewmcLZgzAWW8hE5M5WkoiBwRGfzb",
  "key25": "5vNhQ3rK9FbRUYJARzpkdZhJukpsU7nx8CqpEuXqM4MQbfunsSYfouwPXv8UbJTgcqqD1TexLXCB3PZ476JTsquC",
  "key26": "2WQtYyU7u1qAtfZrhVdjhUxMpKWdmV39wFDLou5jZSLc557hNCfo9pWH8n6QiWYTVNSuXszPVqEbuy6E7a8YaXNq",
  "key27": "3JcNSHbkK9Qd3cP3stTrmigz9ME5tMmtsckYaGQ4StZTLQEcoRei2KaPkDPfy1v7KkNW3UrFEYq9buG6ayJpG3tx",
  "key28": "2cZv7rWsxd4u5i1V7yjejmE2byRQpQdXUta3kbko9A7jkSdRAVXfBZkmV4Ej9FTRjDzYfF69cZVUVEFAvoxEbd16",
  "key29": "4kUpnaYyShtHvaKYrCKvriWB9QaXxbYq4YPGUFBx42UijkEMJ7jDWf8GqYkNW6fQCQ6iG2nZggTDipVXwJMG2Wkx",
  "key30": "xQcLmMWAnYPGsbUbgECHGC2ifs4hzcZUKPyvjGzj2ZwmpQk7z5BDooE5hGwtRx67wLQejgDmXLn3bPD2BKdvqet",
  "key31": "2UDp3SJJnqGHk4XjHf4iafqptN1ymPjseUa3cgREHzuMf6urhjQJdoHkRE2zPEF7pTURv7UXcHfP56wTdFzht5SA",
  "key32": "27qyE4gfa2mh83CSaFQ49S9kXbhk96M1BtSW2ThNk8DcG64a3XmnJ6R5mb2X1JKHWCdZXqHy5fQPPq66qvMHMxLh",
  "key33": "5bgGbDyh6cDKtB1XRQEv9HzyLgyiEbiBrg6uopRKdVVZX8fBtroD4YcyLjq1RRrBjEcZLYVyA6KeUcxzHgByZPJo",
  "key34": "VgnWbcEFB6zFDqviVvHR6gPYR4NigPZWyLA7wL8Xraynn5ijP2xKfCE4EaQWw8oMeHvkECJNMT9Qgc7Lszdhiv5",
  "key35": "4pKcq9XF7B7S4Fd8FwX35XwBrg93JuGgDD4WUKaYnW83j5hTxv7utC5g9zW96K5829pvxGnZaazAMois5hN9Cpvz",
  "key36": "2ThwvLMyBGtHabazF6mN2KcsjXyFhZd3UXwxwQyCqJobfFnaVviwfvEG8U6fSXiJL32S6m1o8j9BGsRcwUggiFk3",
  "key37": "67f3YgmHiLxWrRPexBpx8JeepsUfoqhmEjMVoB2NMphcnoHes9PPfc8JegcpgDSGN22xUpUEAMbkHptA92ojFq2E"
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
