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
    "3w4bn2FpZAm9d3NJrhFAyH8mRCrGfThy9GyaQHNC96iQmFAjkLzSyq2guAcSCkLvNKQV9WQXqZE9MDqsguEiG59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBzhMXufHMxta49qazWVf64m4MJMAMCmEV1iicqcXLPN3Nchkm9tDxtbjpAMhLt3ncvjjPW96ivVjVjDwmsgF3t",
  "key1": "35Pn7iZVDPmZHsv2cLc4g8TAnEp4mr8e4nBEJDCXdxZQXHotdhKkzXKT7NjmkdG6GKZZPU72azwHTcaDwCYGHCof",
  "key2": "5HVJabU7Mh2yJ5hq4R7PdNpaRJzb2mnihSAVCUagA1s5iiTeTZTVsTxoc3v8eFCq19g8vx5YYcoUhR13acuZp3YH",
  "key3": "4UNAh6RR2ujigY9TKdoaFDmP8FymgNwQhXRtxcxccekmD9iNeogminGy5ZWJ1Tj63couDz4ytizoMbnuSMQDky7P",
  "key4": "3HNGhAkG1JWFhkWxm9Bf1mpZUCYUeX3z8E7DiX79gm5S6ZdEy85o3ZCWvyZve4iKAGgD7P5x49nBDbXk99geZrcJ",
  "key5": "m4xKi984r4HmCt6M1wUinNPWjDBZC2QUVk6s7VntNhyTd6NngDj6xmjqC3ZTAUUXzp92ThKpPvNYmu8m5JfWsAw",
  "key6": "5jdCNRzVAwZXokDRqLP13xZPMcHPVscWhPn3yUkwyUqqEWopqnn31V1arm9GYZzsja8M1rciKbZa4tdsaMErnZGg",
  "key7": "jQwrmXQokQJ85dg5xTm9JZMbP8pg4rDY87ybmziShhtCcefMHE4PL2XsaSURuJHkQ4KfAUFZT6t9huuN5qvLcVM",
  "key8": "59CKtTFcec6DfPfgkzkGjidn51gWu2ALpWAL4d7rrRiaT9RPRFwYyjvDnME1TbFjXrDdsLDiTeZULFDwm6oJZc54",
  "key9": "4qw1RyRpWq8sy3RE7gXWuwBBjbrNkSvWngfCDvX9oRSiFUFLp4Fr3RpnkDsygAo9cDRU3U21TBezAqC7pnjSrz4r",
  "key10": "4rg3EarCFgUQiJ5ngt91FY1N396URy1gsqDSnFzhKmsrUKUr57Y7MdPDwCszXkXRUXwEK52RQPtz3sUpAiHaLvca",
  "key11": "s62joq5JGbRfQMixH3HjFipjBAp6dh9DaLzmLiW3PybKfSPtMFjQFfakXqzhA4iy2Y1ut76doJRJndmRPQFsMWe",
  "key12": "3JZnzvS6kg9QU1d7WaDVjjjGRhpXQNM4t3cXaZwvEPbKvVRzkeKBK15QAg6USEM642uyDgi969xPrXJeG7opebYD",
  "key13": "3cLKLHKytZCszYZWr63HWPDeuexxwa4iaf3VrcQEGwtokLLz7gCo7d4pgqTstXrqVMEyca34roqD7Jnms65dF4Xe",
  "key14": "42qrgKCHi5orQPp75xvtPhezhgJPGS2nF8xEJXNapDUX5jD4uNStoHDgfBFqrPn1Li76mnyWCJBA4SXkJMmFCVqN",
  "key15": "3irnB1W6DdRGWARvN2DMAQAmXwQEuWF9gxxLp8K5mrkzG3QnQCokkaJZwqBLYxRUwhKXNu27EFpxswirFx7yiJcN",
  "key16": "24m4NitS2g2qEiTfHqcJc2uGr1nUrXY2qUo3LDHwxBgZJRspSgjxJbYRK3rRjwoAX9rU9URsoghxowce3VXSymxG",
  "key17": "5sBnChcCKUTGtmt4NXT6Lg4i1ME2azW57rEqYPusE3LCRWJBFVqioqvb5ozrYxBnTZLNS2WUEbHnFLYaSD4XsBoH",
  "key18": "5G5esncyN7AW8dCcf9mkcyjGcPfXpa5E3UG21aCW96t2K2AWhd8hinRrbk17auph2Kh7god2ivHAjFCKCPg6ixE6",
  "key19": "YC2CdXk22fwp63K98v5t8g2a5Gdy6fAJoujcMmvbzMMk7dEUTzuoYEvgy2BS5GqzGfY9DPJnsT7QFKJBjBXf9S4",
  "key20": "5N8xngQYvbGD9ViXJFLvQwsGSykKYhodydHzegmgT8eXgnTqZBeWjvWHJPv9TvoZ4fRJQzFjJzk51EVvSVBcPiJ7",
  "key21": "5V2aCM6GL88HYvBB9aHyyv2KyTpY56Do6Prf2ZupuqAiD7Z56yyuULzhGEej6ueS41oq3kABsnQV3FmmDv44qvtx",
  "key22": "43uqDYNqC54RV7pt3FVHb5hzN4GZQEu6v4eWnebnnBzGVD3gB5M8P3SgUQoV65jjFUaiJVryStXh1w1rDJfjiCPb",
  "key23": "4o8Ak2B9zChjQ5gwxR4DrSoYQHUB4NPjG5VR12Hbsb1ppWw6xLWmsaV44AY92u5sG3EBr1FTQ1rqb1Ud1wHvkpjL",
  "key24": "3PGDqpDXyFQ7qCuwWocXZRHxwuinFdAPdMiasMfN6iwenunwKV8akeRWBe3JgGAxhMsNsrXRfcH6SkDmUcFFB5qU",
  "key25": "3vKKXKCKLPqChDhAfBkZqHqgncKPM6smo5ju4ZNWnHFui83CFBsmMTYjxZRBvTz7GZHJC7cktxNyLfkweYCbukVx",
  "key26": "3LNR8SpL9NfeRkBujjAXP6s7BMZu2WATkW4HhFeoH1gbPneeYTVMNNSU1twgmL4pjCjUpBuawKuu1aBscgFJsxUk",
  "key27": "5Nsdkoyvn6HLFNMvThqRrzes5dHfbn1fsDDFkc9du4N6GkXeZTw2Whi2AMAT17LjoqzWbk4ykQkm5iunHFo5miHy",
  "key28": "2tPiNWzzqBb4nR2rF5UiWMb1YX7utD9YpPhDcSscoMGohCjvPmq7z56JcHCX7hJgqnNfB3xk25cMkmEg2LTr5wiS",
  "key29": "2m7xmZkzXJYrnhmbTKSscE9MPXuo8e5yXA1kxC9hxeNcGwgeHDBtTKog2A6wjgZjDGh2YQpVKSBZEirNoozZrtTC",
  "key30": "5UaareaY4YmoEbJaS27SUJWqRxL9jPtifbzig7XXJwQZxdQ67cmnKm9Ggme7yzrduz5drCUUEBkfhG7Yxnoe3sb6",
  "key31": "3zTdMGUx6kssKP7pRR1xDwLPPpwCUjCboFHCtreiSyQhkx1kzUuymtqVnXv4iMXKBuWuSb37Qqz4drzSYNrwpS9h",
  "key32": "4NEUBaNkD8BvJDdN2tRQy7VJM87fyqWUE8DzJ3hXJniZbf68E1jEaEb9vB4MvwkJCM1Dd7boBbxNF1NeMVadrofp",
  "key33": "4o7RTpP2rsKfwAZzZgXz3yuLicRNeDKub1DaGsLYxpn2Fr5F4LagSEpivhMo1NXS3R9dsYQmbBdj7ByJSZXaNvFt",
  "key34": "5oGpNMkxHvfCJW56R3s1yHnivnj7XkqGKXwejjpjADjzPvp2pSddPWvqg1u9reDx3VVnNzbTTRKC4RG23pjox9e9",
  "key35": "exXrWgywmeu8hzSRPWZr2Hr2vfv15KS2VyvD5zxu4rJSxAy7ACZU6uFV2Wry4SVXKEdhuyvSVgVuMdDfNqpc1TE"
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
