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
    "4BxyS6nY2bXHykzZkwy6rAA9h6D7FJog3ckbVrkZ2B6X6pZSLLWEouM2VSpf3k1UkUBwR3aDn7fcnLccshgyKPDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8FfdWM1m2aJFaAqQWQYFrDAjt8f8ZC7JnpTnDaPpNpNfD9JJtsUn6AEYAWnLz1JioEc5nMMVFHskGsCCYwo42o",
  "key1": "4RFnSnUXoVEi5qoNqXMTmbc7PrghVYRzqNdYudoC466QNJeU6yAWuwaMG6kZSjY1L6t45xLXYuuQhNfP2Pocdep6",
  "key2": "wd7djevx3wg12WQ1ABuW8kagHJkbRC2eAVzqvhzrww9aNPm9NqWuYTX1Pfa77vk5LSCRdaJZDT8oLoLgV2vzu92",
  "key3": "2u2TrYE3HQLz4aTsc1eXDaSVVaaMmZQHB7B5dUU8p6cSVySBp4nanwqLJdEk5T3wCexcRRwTmfXm99Rrfei8NbFn",
  "key4": "2Pppcx43WpuDvSEafKakGpQ6WxgMV2wuYJXqENgEXn6qF3zKdFqb3MF5LMcVkCPa6ueKBbVgYCYjemnBnKKriATa",
  "key5": "SpGWsjaQieos2YbWgSHKAUqeW29WXpR3h4xznKMe9U1yTRdPyDr1HeC6mFABLgaFSfKDDd7WzVZZKsDpyJUvunC",
  "key6": "4zBsXditFNp4YDwzgwZWmPsqUrKRim8NaXcye75nRZKthmXqLMhUmGTQxZYFshu6wY6Vx6N4kUftCQs9zuArt2m4",
  "key7": "5tNMPdTqMeVrgLATEF5SC8DFBj7YjzrcX1wjRRdWJJdvUbja8wx8W9a1GfqoFYcr797Nv76F1BaVNB1etwuJvfU6",
  "key8": "HxC8vRE2ynD6R34U9WJQXnancCEcrQXBDBBDjCn6cjhCgswUtciewC6MzK41o2rqzUo2JAZkHx7LXx98KFaHzLP",
  "key9": "23XM3GwirnSETREFRduCrgXSuXHknZEXf7vAtw5WwS1uEVFKPdscixmkWwg3cqsrbjafHeCLbyhAB3xYUaftjrWB",
  "key10": "Tz68RdQFSniewgnWMzyCmcvW75QJiSZcmWTLqfFXk8tHsp9VUhm9dnRhmcVpgniUA9qiqXskxPDQKKJvFZ6CFP1",
  "key11": "nNLmSAu9VNuhLn7F7wEgwZvcRhMfoizMbA5MePX8amKMQfXgyGZNtUuGiDLg5yEug9Wh2idFzito1mi3NauZyTb",
  "key12": "BhrDTdvUdABiz87zbnuGEpj1z93eRKLsHFog3ZQUvg3zctCEv6D8cWWLaHeWPntDPTJq8Mh1SJErbDgoYaEncjD",
  "key13": "2CZDuZ9gjF9dNh1NXWoGKJpTT9DQtyso9EyLszzWVzaUtuDjYGv5y5M9jFJSLdLoA4kNwKibfqnTiSGpS56wrPfo",
  "key14": "5kziPfki3DToUk5VxHJpyYPYU4a99BTN2gQzDWFdBK99SshsGhBtFHgBGXms1y7hDJ7Ebep5zSVeuYBcLXiTZGxN",
  "key15": "4cNJonAyq9poMJxPkjAcjDrQJWQXP94pB3CJHRsqRZw5HDHdyKhoTiShMMAtnjBUiVZ8hJes5HqjrMXPqvjDYFdR",
  "key16": "4YiKE2xoH5H4YEZsRZRrauZqYg4PPA3u48ZGd1v7rBRPCGBj8GQo2eAaMVRhvyvsmUVzAbe22rNiv1dVwNTgz1pw",
  "key17": "74L2cRqqCVfP6ZdwLxgDVyQM77RgEsdMzaYYtrGt5hXqXtShXPTVBoAKDUZkddcEa6ekdAMcYU1vnYD5EL8sKrg",
  "key18": "42uzPxALindKmDrqCNjpvLH4fcCDvyRfotebN3cAM1ZyWSGKFG8iAzLGPG4237ab1NdyrFT8G1hPfGz1HQeRciUH",
  "key19": "5yt7gqEn49d9ys52SbA6HpBZnvwFfqvHf85uYKnCNkREzqmeaD99qu4KotxWSfv1vaPteRboTVf4VoVy6hyfy3L9",
  "key20": "2MzcAyMYCR781oP2K91Ej3yUmEAbP87RZE4w8Ascx5N6ZkZYAEePsn4pBb7cPUAvpuzk7pXg8WouFKFPsA4rPyXt",
  "key21": "3Dx7pYGWM9LmjcU2SggBQLTRTzeUmRQk3HY7nyDi9FBr1DKXTATDWGvQwfM5Z1DhsWN88M4H67CRJJTq7S6kKfg1",
  "key22": "4eJaFb9cmWSUC3fnPkB8S97i5w62eJC14dKxRvezV3FzYtPLoLP8KYXjNi3fppFY4BMr5GLNpdrpgiZAVcDhFneb",
  "key23": "21NaQvjj5WugLw3czt28M14DVPDZCTpcftjR742c3cGeRnsZCwfRRqHBdEYG4b61SPLdnJQBQh7LZoHnoXF7wp3y",
  "key24": "4DUiDZninV6tGfzLna36Qe5eMXNueYR5KvD73XxoLiTUsxN8Dmv3gPeLAXpAyCWabeqzKkTiLyrLekz5DGhDKkCN",
  "key25": "V5HRT14r164RiAK289w6waqU2bVKUtJNQDYTWhyHW2577aWqS2Cu8SgtLJvWb4hycm2FWLt5vKtKN87pboSMcpv",
  "key26": "2zzu5smARD2iAqi3t541iWSPuGF5XSiqb2kCU95DyDFAkEKYm6RiLjyb6UGQUQ3axwyY8EGdU6aGX5zVvuFJJ7CZ",
  "key27": "2U4aDaWgDMeGswpK7fGBvb9z4YFcb75mzhbgp2i8z8p85mLAAsiXKUoDZBed2GqrwXF26eGxBNnBE9x717YGH2gR",
  "key28": "2ieCuRrhmXnjUeuwpgTtM1kKSmwhdG7HPFG8jRQifDCnBzhj8vKkDw9Cmhfycofe3WSQTAM9aQ67mQ9nSM3LtMSW",
  "key29": "5xPhYuwhdBqMXQtCDtEqg9tZ1d7tsNfBMLFpVTvSFU5NRgLCVfn3K69y1pzXkwhdbmpHC9sB1jJUAeYT2jcTxstS",
  "key30": "5c7TKAsAaN9y3gBWowU128mD8KLEYgJH9ERUPLNAuTnFecjDBgDRTzBYzfqHeZxRW2GJaS1z6rSP2zCCtyC2G9di",
  "key31": "DB4TcAbQ8g5rmQZFDjanpnavCawhzAZQ6fu3xV3679e8DjEXYXKQKjTMrh9Ht2MnPwUouYSLVPib2mFMAtuedEz",
  "key32": "2YNzPeg3wuyZsYS9bQm88WFqa4YfmFf5dGC5J7mjCHoGkCoULY5MA4RrwAeqrUxHP9XPWdB7tVVpwQbqAQXMHjjD",
  "key33": "5tQyXgfzkAVxm7gKjNLaUcbeHSrTXgPKqxmhK5w3doCVLUvz3kM3VPUGRtdUPuUMsSnByg5SGoHkKjJVTwbpKqyJ",
  "key34": "64gR3Bee7Z7vN4UXSYVRHYsAdynczrwpigiusWeRZud382uELhzsKMh1TeUgzia1XGtAvNWgb5kBpqGAp6jheBxJ",
  "key35": "3zhPX3dPRZGLyZ36VvvkGiqfUgN6RdSwxd6qwnNNmgW8Ar7L3XqabsAWW222DKAYiWAZPPS6dy8YD84y6WaDQ9jD",
  "key36": "41iN1eJwHtDtvmvCq7sxwG7AU3xV9qiiXz1LCvJAdukWqdDKXY3LUwukSXKKabtknGAKXGBeYQXGXorsuhen7ezV"
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
