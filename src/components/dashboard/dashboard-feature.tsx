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
    "2ghrBZTY3Ux1ecec4yb9h1XCdwwvgBHZu49RdRLxFnGrJuzttD4kZPPip1Fg1UiMpzweCDTSTiY9Z4XAcGF1LzbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3dCv3433GVEMunPje1wj1V9wyPCVFCHWrxUQEFh4fbRC1NKPmX8VV6fgocTg8E5DtA5vEbn6AdjppcuynRvV1V",
  "key1": "5kdmMy1C3Z94VYQEVHZE6SYBM3CdyJKPpjJTnyGSAwZQx2jq7uApYWCrTcBBTgsjRJzfj9wiyL3b4bYRAjTfRheg",
  "key2": "54ty1Bah4K4s8U3xDQ19xMtuCinjfiNjdjYYrhnaB4Wd8LS8ZY4kfGobWW8Hp7ZB5dTQijudL4fsRh5sbKTKxE4e",
  "key3": "4CUX7DAddAq469khVJoKriEyemq1LmiiRCEPhWBqjqHi9Lov8oUrZe6tsVrCk84qUERWWbsiirNqQYASKJmhMKUD",
  "key4": "2HHyULjKNrtHe9GDgzHR8JKY4NAiRQqHXoeLTPZepTqceMFoJ151UDkyroXyrvbe2qNZrY9F2ptRoQw5Sb4izH7U",
  "key5": "8g73r44djWXDUJEJA5kFX3AFQmXkKCMGQvgJQWXqiAuXNq6cuP5upWeRqCWAcmKdHw8KuNc4F88VzHwkrmWDGq5",
  "key6": "2RNofg9amokerJqvi4Jeu3UDeigFZ3AJNqbVK6QDTN9UdGrpUC4A7LoAFGWnyovF2La4SQkCTkFtM7NQtGasLwJe",
  "key7": "3f2Xsk9A6Nanp9gAc733rYqEjWvdYhe8wtLrv5Xmb5McdcH5hPcvtK7t8WDot1vYhtQcuYMnPo7cEQNY5o2AsSuv",
  "key8": "3HYPrx1X93FHrb94xKfANmNpg9AiSEPBJGMmhi7n79JySJN5fXVyLd7Jm25YrtDd9hGBLYL43Y4eNu8LE2N4q6ak",
  "key9": "4w9RRLzVP5eWsPvDCwBZnYBEhR7duFBv6ZwQRkW9yMcjUjUQJ7mx5WH2bDhfrUd11HZi8hicEpdHgqF2UjKCDQfN",
  "key10": "4PqrmaiCiKnzt2t4jvpE6XpVKKAdiFhsPRKayoAqHLoYkcBhd8SXt4QNEx7KME8ahrXRQ489JX4xLqqCYBNSy4TU",
  "key11": "Q7v3ygCSJ3ykHwbqCiuSzqNL8Bj1L7UCWSA9vzrPLMFbK4iiL7xB8YcRf8eQkSDaXXaa1YeYrt8iren69NmaJqd",
  "key12": "4oP6DX49rDQz22dgagXFdf5p6WmKCNd24UAzzV5iybDYPURccnYuVCDY1HKvpsq1kDvzuwwr16pwMnV37XWEqzGH",
  "key13": "51uwXu48g4AzpYxMm64WLDmTWJeZ4h1HHF3QH46mFWpft2949t5Nk5vaLJ8x9XmJaZgq9P52Ho4wyRFE2BGXbQ8Y",
  "key14": "58VQ4KFGYSdgNYFJuQDjcrCCgvnGZjAGTFm6Q2LpZW2fNbPKWeF1tyEuRjpzEEhzqMMCsGz9PusRtTYUCNLGGkkM",
  "key15": "4vK8R2y2xq9Uc5iZwyvgyBGHae4NQqjaWYu2ddiJthoGGdcaQMoNdyCSW8Ughi6yFvM1eJrM9FsC7LFwJ4bLUTx6",
  "key16": "3ZinduX6ZUAJRo9ko8qQpg9CX6MtdP15fE3v3uVqUxGHQZ1SrGN6Mi8Wodq9fURJFrUDZABR59SVvBjFiRHTBbyG",
  "key17": "4sijx6S7E5cJhymLwmLm1aWFAq4SEtuZNceks8v2pLXhE4uoSnKuu76QbjPCFqocc7NbbGC8pckL9EpK1CQcWXoH",
  "key18": "3MadFveC7XzyoFmoUUmLbD6FcjwTnUdG6U48yjU5xTkEBM5o17kVN7YwHWphqJUpnVRdLLUtgVh9fqTHUzH212QR",
  "key19": "5b3ceS1FVRaKJN92kpvM8N2HvQq9NweEy67t1PfaYXVHUp7X6CLruFhsPeCxxrhpKx3spf6a1rYKZUoiiRY9CKp6",
  "key20": "4gq5EPCRv2SSj2YCTAL1X8ZYvexFiiiztjZDs6sgKzkRFgF2RPeg5HtnEYXgRs2JiufqZNtLbUAdvBUF98eVox2y",
  "key21": "3ihGCqs4kSVieZ7ed58Szk7rqUQLRDqAQ1E6XThbrd7KKvfaLAg54GpUSxT8pUYFHgZjcAJYG9Q4eDtRCxT6HpJ8",
  "key22": "B6RF3UJ4Rkn6cPE3uq9BcbTppN5as649giBb8rh1kiZwyzfArN6rxYGDReckrTBYeqAyLdZFhgb3tsxFPkZZ7kU",
  "key23": "3TGA9pR5LMZ6kqEHMFAUuiN1aRvEzPrTMrLydscogb3yi8d5AVc9LoEGVzFXA9q1iRhRFueasvqBzuDVXH9RLCp4",
  "key24": "4LtEeAfp3RKP1a4m9S8co1jwiccqJ1acoGxHL8koFGqch8HrjTQRhQeCJUUwaKefLfkGkq2W89qekFJNMXHHvGiE",
  "key25": "5mUbybVjk6zhG78hgykh6veFkPPAViMKu6B2MEviwkuiPEzKQV1X1m8vprP7MRZF4u4CP7KDjXVyW5ThuVWXpBrP",
  "key26": "4fN7uKD92uyj8LjMFGwdLeoFDw96fMx6zZQKVgSdKzS6XCnNXQKzxbE6mXnaw8ei3wV7WdMKT1ruUydXf1LQetRV",
  "key27": "4JhLD5RYUZpCL8J5iVjH45VwrydHiQueS4jA5PJPxbw46XKUNckKj8NV1UJ2xSxvUUKUuDeEmMsxKQp4KjKRA9m6",
  "key28": "51BQm2zAZJeRW1wJJCXY8gPcbUWMLNV8JFjyf7RxtW8FkwDScYD6oq6GB4ynSXc3uJbM3QCCAYmyk5f9Z3JNcdYG",
  "key29": "24LrFrVUP2cr6dZGERyPDyT3bk9N6KL2uV6Y9wxULh4uo7hw4nG1NUgMcpTaCUQWV1QXYFpp9VR6HmecXXRj9HDe",
  "key30": "4hNnXmQ5cNncNk36Df421Hex6WaQSRmdt5pMQiBNDp11ymm79H48m8u9KV3xrkD6gLSikDPJJs9dVcoZXiL9Ah5",
  "key31": "hjA3bhK7CoY7EJBwUNoBc4jEANyLtEkjLj9tq6GXUuT91zhQp3WsghqY3Qum6Yr9SidrFuSAcUpPyVb23ksbb59",
  "key32": "2U1yQeGqvh7nq249PneAzkNtSTq4baEYS2zGe9ByrmHxgttxZuCCnUDJydKJ6aGrKwpVXW788jtvvhb49MLM62h7",
  "key33": "2CP6YkeLcpsT49vtaAKbzAmM7CUamJ6DFTPGa3ET4KgVJvR4zya1PXwXvhuESv4j4d9MW3hpBALQLkUTbC5fJeDW",
  "key34": "3NzUyPBpjszgXWjpCtQbVQf6RLkJtyGanH2utUTAPQtReEWwMDVJsn79CH5NsNqieFYXnuAHhFbPak359En2eAh6",
  "key35": "2novXM3o9rFpcFTiAhW4D5yqUsnHfYns4yCyZGJDSGMyPrE38DE8U1SqCQaL79YDMGEP9qPDJ7VqA1DTBx56F3KD",
  "key36": "2XY9k9sjDzB7urdGQ48P3TKxcgmR2JPiwUweFTAHbseR6obsjo2Jq5MZUErMTbZEp3mwC9iVEDWMmVYksqu18ij1",
  "key37": "5hFGtP6eNmVNHdzCFVFQVPVuVDwQVteaYNeT8MUU4Bz7cAqfovGCE8AixF5XdoMncLWddxwZSmaFaywK2qyTfQp8",
  "key38": "2Y6piC9LMuJRUDZ8uEaPFYqskzt8fJsdcNd5NiK3tuewkeL7RQSaz9TBmvQLLamMQzNcXwmm4x3X2YJzbMTrGafA",
  "key39": "T414jFWPvzZXVnLHRfDJgwe6JDR7LwTwxKjR62QkUM44EMcBXJ4PNfL8UG8AyqrP8fLrt5PUSM2c2nGAeHbGhiE",
  "key40": "x4FGBZiotcSzofVoXgH7ZBJ54QQnaX6q31cDPVgbYchaLK78Yd66q8HrTU4HCPz6KCtfdgZYRHKoFxf6n8epVkG",
  "key41": "Ab65EmemiSqiwTMNV7d8Lg8LRF1YDXn8yGsYHJ2yuctYNopiV8KeqqxaKocCcyzYPhjee73MnL8aD7Q3yFgyzE2",
  "key42": "bWAms6Wd8HPYKP2KFaBVLpLvJm4HqJbR7aPxs3L1A2Yo5RXKwqcwBbzgEXNStio8Kg58nsDdTeRL3Y7YEg7zVPP",
  "key43": "62mKeQRJjaSVCbLoMubmLenF1ckX18X5dL9goFGsQ4RCfgysmh7zbtVhvXRQTBpZGczQ1a1ifoWMrVhf82Fyk76H",
  "key44": "2jrXTW6LJXsrBeY2M8YgVXNnvith7a1WrRu5x4gswRLstiMkkBQg1yzTpVaJh2ziTqH9KVwhFfnwXfCASCPUCgEr",
  "key45": "4Y59u38qzc1VAiDWt6dQRQqKqYNqBRNzCN7foFqqXWjJGteo7tGBebRckzgwfkEAQbHk84zoQSik6TnGMdxRgQJn",
  "key46": "2Rtvo9hFnoopPAQHERURAk23YQHK96ZxTmAsNvyF8kjRry7HenHgMo5nRN3FUHDJZsTqoWQXFcT7padckYWf58d8",
  "key47": "2pqBx1uArKJ3d3u12ehgSMMh71n2D3nQKpzNxBdmzRe3BkGNHwHLzwbwoNaaFr6svXuLZS84ZqTAQ9cJXGZub8FX",
  "key48": "Q2ytQXP4jSJqUhDcf9hjRgjDwFWqiKpfr3EfLugZuDGknzziWoQrHVpdhYyTqXuBJXqU4nPFCXcZzUaFnZUXKDa",
  "key49": "47aPq2cW8iK3RNDAL5yDfN27pyCZd7LenHGU3517g85NJpjocHsq3Df3fPyGveAitJB5eCDUvcUJVkG7A6YaXG6c"
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
