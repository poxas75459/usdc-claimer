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
    "jBRhmMNbJoNash13CA5xHujzr498TvT5QqeVN6Ytwx46ewWMB9HqHor25b2tNPjEPnFnr8RiPNEEkqYif4s1wA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaBsq4vw9an9e5F5S7yUm1Bzov9icaNUX64wc5p4eY6S5NtDpDAdgG5uuYfCJoRLNH1ZGdnvQdSLUUcpLjyXbYj",
  "key1": "4DWvJYBS2BWXKi5toetPnSQTsDY4fFMZs5zpweFCVRAsmWkH6mQ42D7JLtR7kkFwwc6iDcoTRFh7h58gVi5wZ4no",
  "key2": "2sEXec3SRp5D2CNKKPzqZ7UyFbisMT9W3t85oo2bnrmUYosnXRmykMxYkk2x17wxqoHduG712qrphYfLvuGmQTCb",
  "key3": "5uWU3oXCULPWJqeW84kzeMuC1RZe1Df4uCGxB6JyYtTSVtR9aixcEpoKvxfPtMeWX9amDWZxP8nmhEUhNsAZHZWg",
  "key4": "4i9GVPCWgiS69oQc1HJHF4Zp894sAagp477SFcAT6ZCP5PemnbpH4Rv83qqZfZi6QDZn8NMb7EPhna6XPZXeZNMH",
  "key5": "5VjJ6r8UjsuV2hh8gbACQfHtFMCgo3SARz8oee6q2cSaJXMf6q3ghpD9SL7DEchAHmZfiL8YVapk2312ChrUqjtK",
  "key6": "vTyvMymgT5LCPm3Rei64izhtYfY3Mdoewx5DAjCFSr4fWd9UqvroHWguzYidHoUbaLWWzsKyUFVvqys3SNgaMnH",
  "key7": "3qG8kdFMJPVVNFPk1oWPveqXqB5Et5dHmEuVibd7xtdVPk5ztW4gsKkRwzms9Ja77waWrVkKazPkW6JEpkXgbuzH",
  "key8": "3Vvr5S1cVqvzQudYtVCNQnQyhiLaZZVjjB6DTpLCQW11ckboyeDpTniXgiZ69YxPj1LL5yEYxPrcZppCehH312Ay",
  "key9": "5X5ENWbhRbrecj5VL1AT4tXZ5wKmPGiawFAvcxXhbpBstvJJVFfSoY7WUhVpML9audNyoZ78XAv1iunYiJHxYxHo",
  "key10": "2911WgMHitYdsnQ46XjioEohq3BWZMc4AQwWTxMZBKgSyBakoNiYfo27wWWroX9zYa6XiFLG5KVJh9TmNzxoudzf",
  "key11": "wG6kWCHwf3W36v9XUTq4AaKqoUEyGzoEQhYQhzhN8c7fcMajbE961bx79tZ6RwPJWpdxXjmMw2BLK8UpzpYKi35",
  "key12": "2ndA1tqj1jhExBYy1vLvNdktLLycT9bDzm7MnVScstRh8fo2bdAG99omgmFdFmCsaDSZgBg9hyKErEJLoUe79Jd1",
  "key13": "4kZjwjsYeUUJMrEmvbv4gudryvm3LnEMGVtCuAJgmNkAA2neT5pnny7XoVPQSVYLETE2441drJU7MGbDCLqB4WyB",
  "key14": "44fszQWC5Y7FwxhSHCbRNNkeCzydKZLpqGn3RUNy2GxWGMugcsG4wMZF6RrbKV23Rwu8xvwaepKpTDYxtm9fsmzJ",
  "key15": "2uaiTWMUA3kCSTVh8bzS5DksW3mPmnK5iKzgbkPPiXPn9BrmfwRMBqrwN3fcWsm6edS7oF8JEnWiXS3yUHyixu67",
  "key16": "3QA9EYjKtZTZDPrbSn4DbKe6D1MgunKDH2QPiKzyD7ktShAdEsguygZKZdfcqeVL5ZR3ddZrauk7E5VeZXFVVNsE",
  "key17": "4upCZ4YZq1wQw8meL4DbejQ2Qm7mBAG19UzXzbAWeHMpipWg6EWs57K161F9TsiKpGph6um4mQc7PvpWRDepCbKw",
  "key18": "4eF1qwuUn5jd2cTrZ3E9upRuSz38mVBSZAhxGeV1q9jegA8absY58dtAZ8oGi7VC8U5VnJtgsPLsDNr9DrVHMC1h",
  "key19": "3BWWHSsk9oSq6S7dtfEjNjNMYfXEAR6ZwPV77JTQeLdRhKWCuUe5YJ4yma9AfXmCgLTmudBMdSKLWTSXJE36pJrY",
  "key20": "3mTQ7aGjKFEX1tsoYHMEFgaRVGcfqWeSBmvrS94CADrNoe46tE46VKGWwrUpCJtqQ1eDc8Da66eHe8cWdbknhzUf",
  "key21": "4yZJGD9kV5T3GHzJZMsy5u6AvEA42ysHKaqK8YB9amkjxEwr6m5BhB63dnKC1w3wjhBTDTgmNYG9V3a2RJ4PpkV",
  "key22": "2dQzNFu4rpANVKcr787GHHFP1mMEHvvPeykPvpJwCCtHN3sFPAr2qdsb8LvXGFUoYr1dXrZ8HPckqj1iwvQdUfSd",
  "key23": "4LaKsD6RNxSCJpbMSxGhgCC28YTZR7daz6LYdXhZMCc8HJ29nqn8FfeMA1zaU9hSuBN8j5BuxSstAuZavhGu8SQ7",
  "key24": "2KjfMJq21ndaiBeb3Qt25oEQiXBvKjCjqq8CCcwdNLHBU7Ubgx9cFoQ5VFaJfBDQwhVyttUz4F9hqdXwwfAG3H6b",
  "key25": "4DJGDUSRsVJb3gBHtUQWDfyUyQWiKc55vqsWxr8F47mJrMjW5A8rwZUZWgKbDeHMmFCrbGBRE8BZgbbU4Na5NhTF",
  "key26": "3PubXS9QHWjLTMxjP3JQNeJM5fKFJuZLUNvfSkFnmDxwRVQSoq7ppMtKHN4tz62svNVAodxiFGG3BJRN6NpUF2HR",
  "key27": "3JX7VD2tTz4D1FgUZacXEZEAzXhMRVT5sxyFaWeFnHka6LBxzgxwfxa7xbbEeozrZRsCJM9LSWk7whBDgF1BFszv",
  "key28": "2AYNzwctDGsAbkV5dEZ91L7HDm7HXbqnBYCjCraNsXbwk8jkt55mCSHDk3DwgznJ5QCvjoiZXcLEPGsujuz1wXV7",
  "key29": "21zWXXpo3TNy9t3pszDNrjYm4GpQAXdaRE9jd5LJgQe3X2xii1EimpTLA6116w9qEE5s2pAFvKyrBfjbR2fwzJQU",
  "key30": "4R2a7aQPmkkhz5p5A83bLhRfDQ7G8y9yRNKBidLm1svgh9yNKbSkH8Dn86LeNBtvWfG7USMgF9BqA9WGWgJHmmS6",
  "key31": "3YM6u8V7i19hv4vekSvghRCuKXW9MXC6p5wN17K8nZCB9uWUwD7hk4222wfRycoMNBKvEaTwuyGtP65FmoDitvJc",
  "key32": "2YN99LDJY8DyqWQH9T9YxgB2KDyL13cwdTn6NzWYg1Xs6GD6sKLtkFFExH3JZoVBUyCkjKbtbHviuY1PT6sBZ7YD",
  "key33": "48fBWn6BKJLVudoC9cevm4oxK1hY4VV2VDsoXm37CxXioEVhRY86pa8AgEmtJ2DnXw4WNEHNpwZGqgdgk2evPU5N",
  "key34": "47BLRLiY37UmXe6WE2JrMUfz3PMgy1c7jN2hvNsXfihERYo48AqWWyn9fthrSnxvibCWRjLKum5uxc4yYDLHEysc",
  "key35": "2PK7n4GYBjLfv1KHHYZ5UY5AsA7FL7Cq69fGc5qDECN4oix4xD4Rey1Cc1Db6ZtGEu7qgyKUoGCM3yDinta6jrLh",
  "key36": "57r4VcGTKBxMMyyVtKWTs9HTBFdMU7R8c6CD6ME6C3GREf3vtrkKbiMGvP15dDamZUuuNvZr47eDBVxjcAUZASBt",
  "key37": "RPbkxRhZR5QQ4PEuJDQcxGFhw1rct8XB46WCrRFdA3nuBEPWADBnLMmsQJLjKiYz6BNXz9B5ZD2wouHnzFwBGU5",
  "key38": "3MTtFWxrgEiJXFQgcF3tzPgkdFK6vNnYKGk9ZBgwKK2ktTy3WZJmPSb8YnbEV19Qd6VDbno4jTQgQAVbBwuMa9Jh"
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
