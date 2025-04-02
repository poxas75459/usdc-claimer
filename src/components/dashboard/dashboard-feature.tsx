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
    "4oB3dXe2sWGpDynwPaXGqYku6XDbx95odsy5yDKiTnR23BVXCcyWqHAbCrgzrHj7hjE4PgSU9hjuzVN4FZwXevf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYgzopmmMF91QugL7xWSbL2TJmFnsezbqf7sAXPHZ6PfoCiqJjBkB4Z9SNwL1bduAcPiWLCi8scHzHmQFY1qxMc",
  "key1": "39ykcZ3ZVXHa4q93JeALTSBou3UNHJr6YXXnMz5AFqcoenLzKqvGcFhHEMxsjoazVfUfKoV8wuVzZYkqzBWgGySH",
  "key2": "5GS9EPcrmRijU4EAQ1K8AMF8T8aYwDPuCyE1VFXaWF9HXigNVEBHYvPoNqbNQRrouLtmGtHQxbE8GUvMVxUuK8oR",
  "key3": "4QPpapjTtWh1Gwv3DLyHioLGuh8uPoZPsVHYU6QSoWnAixWuo37tjW1FdFH6c2o58J5WdmY4JTvv7WHcH1sU2kwf",
  "key4": "w5m95Em8VNjbxSqxptBnkPaePBpux3ymopTBYDd1yedtyHCN7EMawEHnuN3kxEXoynCdbqJBVkV9KH3k6WG5z7Y",
  "key5": "2h1vEsNCMvTUJSpLziWaf2LEqsybwyoAjJSWHz8mwvoxtooJorWZBG9ek3LKHguycwSN7xPdRsgfC9QjhrbbGzay",
  "key6": "5vzUioanbJUFAU8G3pKzFPfwUPpKJLwpiF1RZjyrBWFAcrgC2qPHUuMFET5eqkfqCoqTAAhGU8m3QrxPnNQQTqHD",
  "key7": "2oMpCVAV3qFvQ7wh3T3PrS9tfcTom1ysjLj5kFQVjjTYiSieg14CHR7LLQsg3scYnrs86SAZ7Go7vEkJnVKiHisk",
  "key8": "3Yj1ZtEtDTWchM2hRSXTW68t5UjgGTZstNwQVSZ9FPC4noYPA1NRGepGQ49P7wTEPunNFzdDZZprAiaYwnaPygqQ",
  "key9": "53TqtwdF6afut4CegMjpPZ4bHVfb4msgcY7AfX61N3KrD8919MphD1GHCB1dW9mzn98tAMmhKZWtuJgrMQzKUgHV",
  "key10": "jvDy18tG7Qgn8ynaybPat1yALcZEPPx23RGK46kPL1XhcNvjmC7eGsfD85L52cFbchnezRJSAusvv7Vf5BjsrJK",
  "key11": "3Ng4RFrmFmdpZ4xcDokb3DAg71dUn9KDoXRWRYNh8bQnoHL68MQPzLBuuHCDLqKj88SE58gsYYtePdpBo5xX9tsF",
  "key12": "4HcjPYyHrqsWatLA4ra4DYdNV9Ct3GT2T762ecgc9J1CHzTWrDDzETTkJW1J71Bq4Q2jhMeE7n6qXC7D1u6ouFC3",
  "key13": "3ghSkokJBT1KgkrBRY6VQCsVVUB3WuBm9jejBLQHBgK7zdEcz7cEtnaje1SD5cV1joGnzTiyQRKadTdM1cVYE8DY",
  "key14": "5KDZ3KD6wb5mpUuiMPrhMC3bQ3HbQePyjTKgXztX5SU7edh23wYYmrpTyw7JHUVUSfydz6ihcopUdAdFB8heczFo",
  "key15": "2H4mLhp57WBYzKFXAoHrxWghb3sTW5v7vjWSQG4tAfSic1EFbpBZ1YuTQ7z87HwKMFf6ydTpR6TLwRbEcBYWnzkF",
  "key16": "edQeLVrx2LmhxfMdyqkkWrqNXviXjRUBDBFHbJDb2p33Y86ruRgWKBFrzd8ia22A9CRWJJAMjJ5vDwWVqYBnt74",
  "key17": "3jEQsUt1BWCPkm25491AHMXGMfPJUNvofyRH9Pqi57bnTeXJ9xracPpbWF1BFNbK26ACZiQBGJFUeVE1NPyT2RJY",
  "key18": "3jv6JDGrJjxzniYzvUyLFBkm37jhXBw1UtCVmxhJjwkYc295Mguwbsdz4EkFWqeyVYutrE8dYmNCUkv9DziW3us4",
  "key19": "3efKnSoBSVNkhPEjp5o2RP36Lf8kvdij2bsQSc8UvmpnbHzhGykZxi2KbV42CJ3vhvXJy8WBd9kovu7bwf6MXoVM",
  "key20": "2rAyCxNW9Gsv66wFY9kGJ4VENRx7rUunA2bbTbEExZt2U1CBfQttJXnRY81Aq1CAQNC9upHccetyeNApknF8qbUV",
  "key21": "2eMixDgpM7XjM1CsXDT2dWPidiPfSpmJSQYhMZGuaveGyhYwG7TkDQGZvECPcDdqyWPuBmw4jbQGqSbWwjAG4onW",
  "key22": "2uwKvpywmVYuju5gPv4omaqCzKbHeQiKmfWaSxvB9pmLjERGQ5TecVjpg5uEHGG4LZdYpo2s7hZkab2H6UzszVAj",
  "key23": "2xpsPhSj1VKg9qKtTUBQy53HHAutB7VVnZSG8v94QuSdJTXViLyvCxtEQGKf9y8GCZ6PuCYVqxiHnSJ7v58F6HC6",
  "key24": "2egcQM2ZceCsHQh8AjqPXMvLZLkMAQN7aHH9qQuugEEAcSFQcUZG5jYm9hU3sSep3Hb3QniLFHMamDprmp4Futuz",
  "key25": "5yxuPc5cdTmdDjyoRW4e9FPpKiynELG4wtYVeks43zAkPeHXwqoe1Bc25EgcDFoXrqxa6s8djs5rboXghUCRPhpb",
  "key26": "2K93H7EoBrFiE8JboaARQ7PA2rajp5FxQ2NRQZEBwoBW4YvHDDZ9vBXuq28dXS99RJXnpjgmGNBnhEGCDejfrNEP",
  "key27": "52BpWs9QVyoFiRDnjLtgGB9r2JpPKXFZLXQNotKus8Fn5NsPACmymDahnivrrVUfVHcNztK2fVmXAYY2AiZtLqKC",
  "key28": "8tR1tF8QNAQyVybmpDov1S7ioQB6GYgG2bucPLGyRtsAyyQTVCt1H2Wh5bdgXrmsjEkASefGYMSFHTquL4EAKS1",
  "key29": "2VpFuTBqHP3iEa41XArqsVsQCNo3LQJhtCEWeHspp2hrLgTdp6KETrYcyrpEr4nBJ78PuGa6GT1U2UeJNYjJuEnD",
  "key30": "4dTzk3ha4LJ8DrP1k8c4SLYpbiq99HGptS8RBX26b4aAeekgZtGZaUgibSYcHA57bcLYTRMYnXgPF5fQxA8PDr23",
  "key31": "3doKAF2ndLcgBuqwoXqDLhedKCSiYUABiG3WHuFMBYJLnic9TRBeDzTAi6QZXkX1Ba6w6cmUKVMMwR2X5Ya4vg7g"
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
