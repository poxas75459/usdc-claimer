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
    "4GPHahSaqLaejSmgW76UXAVbE2efQXDGbySb7951ZdDaMBRYbcgetr8Rb2AxYDKgX2vT5Vi4SMmn5sCdMgZYxt2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYWVx7v5xTKPLe8UKvCmxihejeowxKzZoTnLek9BwVn58CrSvWb7diZiqaGaCXDQVCPoTUvzbzxvWXHuBNU6bBD",
  "key1": "nxU4stTkc2vKkqgj9FYyiDs1Xst293LQPyGhzBLvvQcjWL9brhgcorKE2bXhTUbi3j4Njwyw83h1mkR5c2EW6xr",
  "key2": "5W6GvFXsJgRrxTKu2eUGJToj4n5NU15pbPkydgQNj6Ncq9p8y6n4pFf4fYP6NjeY3UW5UxAVGzWH5Vk3fHEkkr8U",
  "key3": "5agPWhvRWzJSkroFCX4uMrwkjt1DeqPh3yahyjvoSFrjyiG9wnbG2v8ETRaW4dViRWcXJkkcZVBCUpTzmfb5oTWX",
  "key4": "RmBsbNdPiEaQBkPRbCPiA9PZNr8V6PfCFPjw5zq3uPHXenMT1KPeddCSLcScoTQ2YnRgodTZ2uLySaNsaejMS4A",
  "key5": "2VtbGcBMffjo43aM68cHRwrpg3bHuuW4GVw35HEAPaEX5vi3FWC4Bgh9dLUAu8Fzpa5BrgRehQ1jEQrChgyZD2Jq",
  "key6": "4ktGPJmbwKkGe7BNF7b5P2vQ6QtEyzDoU26op3U1kjorste9aX64Dy5F3xr6zvNrWrfq7kz9wkecJxNpj9nVB5JM",
  "key7": "5g5SsLpAeuisyPZN6wE198CNwqXsx3kp7ox5pM9V3Xca9pxHrAU7g7AHwDeTywUnqyxKZG8rsQe7735tC89UYUN8",
  "key8": "4qdbsSLe7mpXVhyCgwqrdvvCCL7FJ174AzAe2nXyfB834ya6BY3uscLp3xZZNUfbPCbNJ6SMmo5NLCugkRuzBVZG",
  "key9": "3Et47WNT9tC5iV9mDXB7RcDAk2qsDmSAzyABLiMKDgh9Kouqs4GsVebwottmgLKHhNUJPG6Jozjb4qAYQeWT3jo7",
  "key10": "4pHKqZgHgWEJVJix3XKeQzV2ukwwypvLTVwerAxa3W3bjtFgjHKmZ41Q6V9s4yjApcdayn9PE1gwV5aT6Ytvp2Nz",
  "key11": "4at51eJPgVRU5a1ZMP7t9WPeNshqFTMSZPY7hUwByAHyww8zs4o3VwpyQA1ewnMbWMpkdE53xZx9UanC53kKxWAX",
  "key12": "3K17wppBjimXpFBgyTsopiFzpe4riMWzyGoGN4vToizZ124mA31cN4bS3hmqSyrzUJV9wRAcaLWTXjei83MaPQ8Y",
  "key13": "2N4eSJu7kvzNh9WhPmYk9RE5MxEezN5iuL4VpFJbhQEiMQK6uMQ5V8fQwW6kTb4Zt966b4xWdfr19x4pt7uoG3su",
  "key14": "3XMVAfD4CTcbEuxjd1JUd7rYRKEY25Wuz9u8zhWKopDRkZ2oTWcMvLdxFSnGFGe6tXbSdxt8EVYvogZZb4tKxJV5",
  "key15": "5KTr2h3ZNP8rDroDG1ZQW5ehLtzEARfXLz7ZpassAwxbqWLsQVkTchxFrPAd5b7QfJr4HKp19s81E8zMArfceVy8",
  "key16": "5X9DzcHZgBpHBUsqUhvz9EZYC4fSHqTQZ2DXjpW9coNz3NYiYnpLG4RdtJE3MenNizRm8gXJokDkwn2b4NUpwqAu",
  "key17": "56GqKTR7VovJtwvjWXN1FaLyePBRgeCFVBckzej8k1ewDnZgNdqErf4wfTNa4sMk6nzquXeGqTJ1dsq2zFu4ZEYR",
  "key18": "2Xy5SeB4VrijLkWDWrunTAQWTfMcm2fsBUNJrdi8beYG5UACjdye7ZHy66LP18bierEuoKT4AYLY6zfWSSSLyrMV",
  "key19": "2UhZPCueWVuvoHr1BmW8PPUNZETAChfgiJ6z9qRBM1N4sszurNBZoS4zktYEpXCqyFtbKAcFspW96VoRLnAyGFgn",
  "key20": "5ciWe3W429y9GoYqvUfFCBqciXnrHMgbhwB2pv9BTTB2K5CmwvHx6ftDot7dXaubn9CXyuMmoxdPg1aybbTqkAhT",
  "key21": "3XEZiPvFCw6KhAqzUPHsTnuNdZbCfEyyX8M8dD58qMx4fX91oyDMMu6SY8XmUKFox7HZtgJErDMFLdC8VkbnX5Mo",
  "key22": "2QG63frfcoLqfbamoG8qZbU1TjueGZ4PLRbBdrtB4MMC6FPUt9MSTG1NSmdMrFgNWH31j2bCkkC9jDPJzBX7xWug",
  "key23": "65FPgrja48VYiyyUazVHaZvuY5ZpPNvvV8NQoUYocvYFfS1utTXKfE2zmNxDeZmnejERuVQ1iwyxLn2sdLjrdQo7",
  "key24": "4A84DYPbqi3jYF5K8RzYAN6VCt7P6Shsd6wUjMyJYBNjteyeXFBHQUSbZB5j21DM97mLyhYEzrYKByj7KMBmAVnq",
  "key25": "1MyKsvK6cV9qbZHtXZHZ5j7SSgnkRucuJe97hpaL2y5RvgxArBzgw2qf2yJq7YhPMQEdYStNmUTmHQZacmJtSh9",
  "key26": "wWB1JFmhtgftNDzR5rN9jz5h4CeSZZduQaCxuwhFTBViZnpfa4V8cy5ZnW9KL4wYUYUc8Wv2vySWHmvZ95a4JBv",
  "key27": "Fja35F3PegunKiQtioXVmzfR7sT8XNebo7gcCEpFzuDSpjF5gVMcjYFjW9zKvh6eSkUBeZiakWaob6srNCrt2rT",
  "key28": "5pgYvdQiWE1DCmneXJp3k2WXnUgiUKxqnvkUfcbj8fCTYvLefiahqWincMoy7yH3behS9gEnnSmjn6FMJwND3Hrm",
  "key29": "32mpHSWhm69XPcAnTCe1gXDQTEkTa5dw1g6YTk32W2jo5kLfmmWmdcr56ZPhfyKD8nJHVHAZi7D63fXqYXAUcood",
  "key30": "2iKxifW2Z9f8mTypiv5AqrYCHGA7tLo2WxDo51Rvw4biTDCSkp6utcV4uUQaGWN21sMwNMaZRwtcLrGxmFoWSkg6",
  "key31": "4JtEgmpVSdE9DvtAJTXCstrsWDNHAWNi8wU69Rnt1hN1Fb7ZiqvUb2bVzfvvhrt6ZTVKdLehZcVZVbZh6p9JnaLg",
  "key32": "3yZiJXevYfSgRspkn5NRQnb33nsnfLfabiVxYveYcoDxG36gZ37NrqQ7Y3BjxuwYtPT4NKfAwdKqHYhn12KUFJHu",
  "key33": "3ZQXmu5UCvMEDrCsvqKzn93FHBXL8tYscaAvwVPdcbvv5zu9ZNSjgobor9C8QDWfmBNiRbN21x9cRQjtrCH6QM32",
  "key34": "3PQTkKS3PJKotYtFCQV29371moJi4FL2Kzid8MiXLW4PKMbo6aLSRTG9WYzAaabnyaJhTvUEfns2mrekXtRHrMBF",
  "key35": "3REYYbH97NFFQyhfS4RZ142bNkos9juAzp1gZQoNM9nwi5QHKebX2DbkFGTBJLsaZZdKUBdfXD3s1TfddUjhZkr9",
  "key36": "24AyYsGxuKoX9KF5zZQZ28RSCAxbWih2HdoNvucdWPvvehLHGmaY7zH4YpnLfC5rzFk83z6KcN1gvZFVUd4LRecu",
  "key37": "4VR53BQ3AX8LQV9mgb9rXXsL5LtGxJhjA4FeJh9LRiNc3aYFpH8yKLXcRes18tbFonQYxEV8f2unaXQq1xNufj5D",
  "key38": "sLubQLMzzV78xidpSFcbmwG7rbReSvadNQJNevwpsPNQoKverZW2MsiNQpDbLihwatAFrNAf8UKxN2TebZw89Ma",
  "key39": "Db6Xq2YSZ7XUVvNHB3V964HngiE8cBFmSCnyYzXqvNPwcdYmPGCyf8wWuWNmCr2UgDyF8rcdC3ncmYQBm2oyi2R",
  "key40": "35JvZae7vMvRasGB8do39wqqo5K3rVNy6gwLhijvTHcqmgvgiqJyGtMXnrwwerhaWtn7WKiEMLmyhimaozsGt4x6",
  "key41": "4Tfeqn8CY4QjA4pkHmG7MgBp6daihG3FYjPNLtu4CzpKCjtTLf1P1TaQG3vaYY91i4SBYoj8zFEpmZs2seCszpnV",
  "key42": "zykXShHLuqadF1TFiTBFHEGgfB1yRe5Fxn1KkPVkn7EVD9SuFDjqBbcSC46gmd5v4YMeTb2TxE1uyAubRmX6Nsh",
  "key43": "2vrD7wzZmABy97YpCCHJYA3LQ2omdm9mn5A7h1LxqmxjxAqdw8TTsreMdzA584MnMuWCrW5MUDQ75YsvqQoAAQH7",
  "key44": "27AgXGjpzrx6WWUVkdNBbLCvsouKj9CeSYvTtao1mCo12Qmb1FxbjfwaUYLzjHsY6ZjsSfsVn2uDBSEYP3sUZdUw",
  "key45": "2SgmnTgr9cur55Chvp2knei3xwgbeQCiFmVNdMypkUJ4nFRGw75GgE5k4qiLg9PR41rw2mwtDU7tqkj2Xogg2ZJY",
  "key46": "2xnSSBFir2DzUoFuqjTJsMeKEoM4JUUKvrgZRoJkWJVA4aLZqUzPuSVgtVtp3JeKDvL9JrkkFb8ef8jCc9s16Fwa",
  "key47": "KFvXooF6VXeamgV8vE5DX1kNSgmZVXFxVFgY3dfTQEgoVGehRXvn9gfQZRW7BAgqYQuir6hgRWxYH9zUdpMgFt4",
  "key48": "4oPoZ67dWn7KBAAdqA22LU4MkWitAkmmM88p5boxJoXRJQ3AC7yjNkiVsjGfTj8AzBHACMZtUtgBMV573LUiDurm",
  "key49": "3dPNKSGgtXq6FJTrAgDD5B96HS3WQwd2idW81MMPmdQVk8trE1ALfy48mtBFHsBp3WAeXozVsZutxKTSG1coBfB8"
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
