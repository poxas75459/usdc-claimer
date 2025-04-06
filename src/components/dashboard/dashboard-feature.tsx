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
    "5yx19Yr9f1k4Mdh8fYkAWSeaxgfMVXy5Umk1EXP5UiizNyhqZ5WWN6FBHEbhnGCLqXubPQr98FXeZfhNyLiG1bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTcDenvu2Re1STy2FSvNhQ9xcaMxTFe8ubQYub28VURLip2a28wUF15Rwd2tSwq7B9PyfJw2NfaBWU7L7XfhsHr",
  "key1": "3pDCDEhcrtrxsRSdirjZucdkgH9jzfQAu1Rjtax235Wmz1KQ6fNsWwyBGV2E3zFJRfBdEZrUmFonJxo5TGCLxTNV",
  "key2": "5nd5jyPMbkD6Z9uBPr5pqqNWZXHkGRAWFXCQnaV1bnN5aTqHcKurhhqJhP96B1KYuuwULX6UUZWPi54Uo1xCtLtL",
  "key3": "2d59ibEYEqf3S13uncq3RFm6eKPTjdgebtYJYTdZmGmuVggF7K9mDYDarbXmyCyWR1Cjo7TapR8UgQKkHKA25Zp2",
  "key4": "3Apq2a7Sfxtqh1QaSeXBq556HpnW3v9RYSyFirc9w6sgeLhsXj1FHofa3fZZQm4hns6QcZtwDFU2PqjjB5gNER4i",
  "key5": "335Hv2XjD7CUBAvntFrjrDJiC6aYKGbKfv2LLqrXnk6fkQbFo7CpBHii1v7BB6JwD8WLg9wdrJFoFiXHqdPKKQnT",
  "key6": "4b17HZepdBWhdTTqfoszP2gJ9RJk3z3YuLinEccAfyVSTjy1BB1YJMzWoxKzzK1QMRvT4eRuoWRptve2pqDE4F3N",
  "key7": "57gD4rcy7xfCzcd78agHuYrR93U64UeUSiV9kQA2U19XUUz4frALGTQgBnpxnVTgQ4ZBubNxBtPHBcNRRbtLkfmS",
  "key8": "ssfgULeFPnwGqsP5LJFsxjZBzU88iiVkUQjRBmXu8FDRfa3rWRzCWH26894xkBdCKHYwUszUfZCVJwfvpZ1wyDb",
  "key9": "4BJ5hJFijr39dWQtt4nf6gR4crbWyF3F8zmMByo6xj7BsQwSddSCCyWXfSDkFRpPLa5SbZAKZBDcBjbH7miyVh82",
  "key10": "4t27FtFb3kwHLkubCB8TKWjjxrzJjhEapSxKhFqVsHGU4CeTxjdFReL3EmXhSBHuBC9f8bDj6TqMR2FtqmM47ce1",
  "key11": "3Pn8KLP52MyDmswCR5fhVDQ7wavhenGtHgjh1PjqNjWDU4ron189aVGUDUApkiBUAC2mRtpQiyyQtvp1dG478KkR",
  "key12": "4u2X8dLCfNciNTuP3wEGbJ5YKRNgFCjm8GKKFca9etsAENJ2HYarfkLtQQwGar1ohkKCQ5mpBV49MX9FWmohzQPM",
  "key13": "5ibas2siVx63YREbjX4mJQCqFWw6XRe38XyVAae74wRghj64TFs7UXtnWQytoZhmXdwUVM2YhQAD7wsKDJyC8utP",
  "key14": "42jWJK5UDPBLFFqXLjqBfpbEnzbbySjLmx3utJskdUSFN14sLuCYH2fihu5f7tMnJorSZ3Soz3HZT5gjWgZZWhtL",
  "key15": "5cvAgHrby8Y3D2nsQ9AKQT7ZuMNqEvjJtniBiePLyUgWoyNk2qhv7gUvpyou3T8tSGPuL15FbFreNT3fs1rrV2L3",
  "key16": "58rYTr4aQB99TEsVuTz7o5QwREhB1mpq4ydTs88kqYC8bqbgiY9qoaeRHgnwiMdZysETtSnkxjph6ytV3wCgK6wN",
  "key17": "5QSEeXBWtutRjqebefNXVUaA1LgfNAZah5uU5tZ8aA3wDRSMmLcjZGXKFC9mDnRsFAwX866UfcwuCEPCKucpGPgz",
  "key18": "2jPBzcChiuQtTmTugP9bDVugoYaZ4ex1DsG7hYgkNYjHiMZ1mSqGRKnjoqPaf7audm2GiuJHBTs7pVNz3v1kZjE",
  "key19": "fbknzMd23CXVt4bCq8wJhQ9yAeFj1UJwU5zKPsDXGrz8Gs2h9oHNujkAurxtQYodETHiCP59LhMyGjY6YpjJfuX",
  "key20": "52tFUeDcVC8tgQodX8pbNQHfYgfVpTDiBjU43FnR12p6Z1HEGC7UCLCj3GYrRayJk4HfDxvgCTBLVYo7pAUQF3PX",
  "key21": "4VSwjJ3YDFDPumS5wUViyPUcw4cQNotAwLhaSQJcNxb1k2WkweYcRyER69bnefnLHdbA3HJ6sEQzZFQurhVeqhG7",
  "key22": "VppWm55RF27o5CxNCNJjYegKDwnVVpsygy8WgEqCHxWyViR5BzM8LgoeE6ZDUAZz5pkSRKhkoRTzrP32BQS1gTu",
  "key23": "5ovpXDsCSd9Mv5kNjSQtD6iqKiDQp5rbhKToSoazBVbmVLFD2ZpVUjCwdrkMayTCh11ieXQwCGUFn42Evf4juu6Z",
  "key24": "pfvQ7SfVcCMhfiRcvFzqDuFvy5Bff1v2GTL9GH6FdEXsYdiwQFPtiNZ8N8bjj7g4tsXSggM7KZMRk41pQwEtPLp",
  "key25": "349vdyqhnuC8sEEVxA4wMoM73wgpxejd8vvyQiv8YQcaQNfSX7mbmBv4F8gRw4sMdYnHm9UeL1zYDAbpeVuUVmjE",
  "key26": "42UNx1HMFy4Y8V2wNcMerGDFxcyWpwiGt1ZUvzy6ayLdVYnqGiDE7WNPsWyWH7pcR3anqQZSwHfWFrPubx9ViTFJ",
  "key27": "2UapbSUdY85tinAZacRzPKtW4PJGEBrnH6RSJ1zEBvLRNZQ2JDcJtDsXbw8WU5tE8AfbpZYnFzGK7rcKMBowzPaG",
  "key28": "3LBeQU7N7YLRQu4wjG9TL3gQpPCMzfwPz5K3SXJeCYuWyPBnH6CtnH95UHyRDToDnHKDbmtGU86TGEnRU1sPzhPD",
  "key29": "2a1zxGXtYrzC5K3tDc6nraZGz88xDETyE2caBFYNFBMuV8tBk93oJyp4sAwkaPKupwgboZjMt8P9ab37w9rCPZGx",
  "key30": "3ttrnyPm27VrMbp4b3fsqiEnrs6Lto5ShuRQx2btK6GXf1EHvbqATRgigxcJytqDAk1VGJuCembmxzvj7XyBAXFW",
  "key31": "5ZYZc4nZUzWDYvCvKxSvWzGowudP5ZupaBVhQ3zSxDgBHky5jKsaFxaGL6enqPqiVVERK76PAyFsawqmWcEaVPhj",
  "key32": "MjR2YksPv1kWTT7tTCFUy2QjMbLNZMUeFGQJKaZLHrwgiC5YHDGhfbN9QBeJjZ2yzVuBKMet3rF6GbqZnNhv4Yh",
  "key33": "5YbxxARZLAdUmF4NPNYeTQRKJDTp8cY2VjLrLPrSvMcSneu46BhkctKZNVqu87BchdtPkeQXgWBDqDD9VMshPXHj",
  "key34": "2sxL69LSwSvVwzqDqBM6phhHDT4E57KzGZWukGSDGY3Tb9BLyXt8LypDcgdfTyssaN53NxpefhRSMK4UmSXzeGDr",
  "key35": "paErpyVT6x1F3VGuwGPZFeMug4NzeBUgGZfp1KbZRePtVRxn5eqM6Rj9iHZYwVvwNq5BonCshg12vQAiXGzXkko",
  "key36": "yj67aodNY7ovsKGYYFXx5N7uV7rhCZ9WKrFaSpumCs6HukcKXhAR1Ct7BTk6BfFQmjGTqPENZT8muKt9PQHjL5q",
  "key37": "28D2LGqjZEueN8i8wEw98Qis7uLTX7cN6aFEnBTp8RPUSskKuwTniqdVEjkQ2LvyfvrAdNkQ4Kq6oNkQfgAhdPrL",
  "key38": "2c4nEBMMxgULiy26F7xiQZn5PECvjaY3iVC5L6Gt3M9XsUX95PkqhXbVD5KYov1a3QYmPjWet1d6XiJojsmNCAL9",
  "key39": "5GQSgVAkTzpqBksfTgBsKX1F9QpFDcagCzjjLFDbCUbygdDUsx2PKjgS3QBajkV9ngVaMfDKj1p3mTAtqVdNFTrs",
  "key40": "yKZdNuitkesAziUkfL6LcPYWpEoCndRF1b3S8qLZ3t4aj5ccC1x4gbuhae4KuDaj6xvpCkJgHrdssLcM2bhimo6",
  "key41": "2kJiCZ98TK7DJgRgTfZqhFVUhoQM4eUSe2WQ8oYhguYb8q7kYamynFJtJPEo1WTv96wE5rVF4TvE7HdEfEhWbzCT",
  "key42": "2rL7QnAW74Bjc4N1kS5L6s4iQvWZ7oPzLLezZ5FyawgZAFUBfNa1KansHpZkS7iSnQ6r2xuripFu5no9ESfjcAEA"
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
