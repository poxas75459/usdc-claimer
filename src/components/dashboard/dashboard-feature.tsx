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
    "5fKadb3ok3vtfWgEw529sL7bkQk3NadS9H39Kik9Nwre2PqFMPH6Y4fVjB5HhYJhzWTa7kK42Tnu5yQXW1JLFpV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28kGtZS17eJJkmgc8v5q1pJCKt5v7azbBpEZzqd4sCwSqU22xsBLaErY88JagxS2u99vg6YKbA8seGDtQAaoZJz4",
  "key1": "iGRXac1dRWaBh2DQ5oy9TAS8u1r8wQBgXJ5GSrtGjCQKfEfNSNyXCxLRWo6wZ2sB3pCGRcDWnVZRjDyDCrsGYnt",
  "key2": "4ZdzvQ9kZ3WZe7efKmtRKnxkynpyUVXJjUWpgoKE6niZLzMs4GTfUpqVsDz1aDPh9EThD98XnbpGi2WXhurbNzZa",
  "key3": "5y9o9DWMdQkhEU4TZKW256HLKBkwuS36eJ2M3pShWZBMoAB6JrovDuGyxsDFr3yXaRkYoK7qRbGpKyGBpNi3B6qL",
  "key4": "4baTWgknZ6zQ2QFVhyJpDB3VbFUvhFMofXoHGRkJ1h9b4rJQddFHNUWtGWdB3gKXX3dkKcsaoW3B6LUbPMBnF2TW",
  "key5": "64cjNgEkLNKUnfRyrM9XLdxBej2HPmnjyLE7uURviqw6M95D9TZjD6vvFEMAgcqwHGmbsMnMMcdKeMKQza7ENeNh",
  "key6": "4ewNagzdXfS2G7a7uWfmHnVxm3x6jm4EXPTcwV2VngTXbyvc1drxTM6G2YMcxZK2X1kdK6qJCuE3J2LdoDzS4Lia",
  "key7": "t4ijzNHfTpXc9bsAeA1Jx631jrkv8cjaQjcXeUQ3v2pMDEsTxXuHUKFH6mut98KAsBwWNinHQ9iZJTn1x5edD9P",
  "key8": "MbrU2yrnhRYg7ZhTPA6o7kCCmvJ5j2VDYQKG7sZtXQzAN7L4nnYr1dwGv17UshH3Fn4p44k7yK2fxPQowcCgHJT",
  "key9": "3v4inedUiBi1Sm7m6YwmqHPShAdmK8GJDTba6W96UMD5i47MYd8Mqedo4XqPjffoFBgpqadhfSyNixSmyAdG4ozi",
  "key10": "3TwjW4CMsTKai5d2vNChP2e5WCqGrXnYrssZEGrDyf357whkMTTruCBcF9HsjM2av8iDooW5AHA3gngTSRBLAtcV",
  "key11": "9T7rMfHjMPh5ewuGyPiDVx8RLuDfPcjwNqfc1hJ1pHhJEbYtRVTKjAPmx1TwAPmRrCuffWmck7SzBtNZvu8kQQv",
  "key12": "3nWVv937CUxiw3SmdURjGSM98EiVuKbvzD4dxTQUdMW6mong2tjHP6riLVvJkUwFJKcNvW2LSqyQBsVcWtz2xTYR",
  "key13": "5EUtP7LrF4Kr65vyn8gjRou1CB7fjW7oXEnwiMz95dtQjWXvZYaUNzPPvudHwL3sHGpiAZ1qzudfF6VxxKSiuqyc",
  "key14": "4bFwhyZR7Q8GZZQDQgWrZiZbhnfjfbFS1WUEjh8RcmQPeN5KcY5kTqiyymBYcj2Nd4bdmUzMT795WdXHWadSzpyr",
  "key15": "5Jxb2J1AiKLRVA5fgeXutbDCtRP2URzUYp3ypvN1rSjnwNZs5Pgm5A8QnYKLBuLpuTQL8aePr95a4yLpinpLVXTD",
  "key16": "ZTJUKKwhbtQxbA9So8NZ87Lrv4ZsTvX7jiZyS4SWgRmCN7FkzCfqAhaDKKqChzxqTxBPvErWUuQ3YkqVR4tixq6",
  "key17": "3wGxr27ZJu9BCKbTotEM5q8bz1QNQVtMeuW8XfeBYGaHEu7B8qYDv5EE5BjV924jA7RK7o25coUTektWth58W4Nb",
  "key18": "5xVHDrBzmN2SSL48Upd4o3CvhmiE3dNeXzCBYAtMTapWCj9maJHdunbxCtmffC1wSakfxwT8Q9FGHb319TU2yzZF",
  "key19": "5Q49YomsTyJBz8n6gqFRn4dCr5aN9CXfhsU3egQNztCo5UxAweNNQ8jyPKGfPMvFGLbwJvFLf41xcvhRw1PLbdhA",
  "key20": "2A3AbiLYFa9T9VfhiKgwbEULz4SZ6JMnSDp5KFJXm6VozQSEB5kECG1tmq3T3gXt5gzJsVsj8MD4US8ExvNPq9hg",
  "key21": "4mog4AgzorpeCB47omuhMxEjrN7YXw515tS6ycZdip2dr5rzV8Vjh5DviZZ6DwkJgGjCR7a2Av9NovG3A2QQ41nL",
  "key22": "33wp7GDYMKvrd1mSubbM34rnaNF3mSXvEqMpqzFPhuqkQxRWyityjyD662Uzfkui1SN5d9RRCVY64cfJJoHrDL2Z",
  "key23": "5irQEbkrXqw8V9dmXip58cgCjpNMrPJwhaAExKY9Rns97k15XHgjVKGrSdjeWz4SsiWEc2xTh38FZSNtkhpjPosP",
  "key24": "2E87huddw1Ln31nJEBQZ9cmpQFEx3xn41VxjpcgUFyG2mJ3zoqezH6X9R9znXyywazazhLXsPmVCdhZSgWaM96qV",
  "key25": "2dK8EC3BpXYtXdZto63CGJXAmzyTsMK6UKNtwVmyacgAxuyvnXXhsL5viEZfjfUmJTkRwLtTzAyBXsEjS9nXKEpd",
  "key26": "4aLSY9XNhNXpk7it4zAxt3QydT28vUK4BHkVdUqRAguRmmAGy1HdPhy3uJXMtCkTSSYB82ZnBuAp2jXcpGJEt7uD",
  "key27": "4KoYdBMMrn4zhgkzQC9iGBLNbYuuw9iYP8zyLKmuDM27iCS8puhegjnLrBM4CehbKKUefkgab8DjuJVLjJCpmaGu",
  "key28": "5FBsxZH66KgdZUBiP8joRh7XsHa4SjDRhSeCMFL1rdpzLfHr5ErG2yATRU2KqGP79qMKtmtRLucrkywsHN9by4FV",
  "key29": "3YnUWcknhF1eyV9ej5Q32JPK3aMuCzfJs4FvqNX8MUBuJya5FiS1y6DcPjvqe6hA9ph5d1e7fEk59Dpg6xkwGgUJ",
  "key30": "5BXWTzExgAZRj9rU3cBwX9Nu4D8tyybnxgCXRHSp27nk51DRKbffjT5M3VeETwmfbg6Hse8Q6bvNRM21on718ypq",
  "key31": "2nxJ5FC4kNtso8EVSmguPCM4mXTzicq5iN3GsA33MNELJmK44dac3Sq6aJhfgsqy3EMVq5KGJFiDrfzanod266Us",
  "key32": "57X3UTP4jw5ns5fAEgPvnih1dfeCfQPNREHcRLCGTPYwAVVXhi4oCTzwCFi4YomsSQMQfJiNcqvTASmgDwt3JZuM",
  "key33": "2LZyq8TgrK2iL9bR8dJkTo3LGstSjm1RGj5XgyRCx9UpLS3nQgjKQj6w2FGYDHjmcfVhRDKZuc977u9eD1YEfi9c",
  "key34": "2dVXUqfJ8NLYPD12Kz19hsdqxaW5r9CLjMEpp9aK3iEx212r9vEAYHPUpDh1zx4TAbJRv4EHjDVs9V4KcYptuuSd",
  "key35": "4BENPLLBPSJo3uK8wt7cqFBJgExb2JRDdroXRWhDGRnVvrk1aggBZkZuH3AZbvUts6SfeAeG4tYo2K6wiEsNYkcS",
  "key36": "25oPwJVx7THpJQa7mq2f86pdcyT9L7EVLNyJE2DbwfHMUuKacanSqQLKCzuJ6qgAdN44V7WzFS5LvDHTZccavmjd"
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
