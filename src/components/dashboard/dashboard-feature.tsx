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
    "2DGTXb1DG6Pa3iMwTaMw6Y32uSbwm4yFSpn46SYBgKfj4NTVuP1aCiCLECT4koQWtLw2JYLTFExtrCvExyMZpZWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kTKZvCiHSvcRoBYqorbjveA6Hf1LQAcou68ESfW5txUetE8QY9uRhCu49b1nxu6YWLBKyAjdTcdRuGZJPgGxom",
  "key1": "3umryeGS3LX5s3s9jK6iF98aQ5ooV3sqtsE8oeodmZaaGKCn8W1V5mGQvW8ZR3vZrpwgGTAPukW9vrLYK3NJMmxm",
  "key2": "5vKLPzamkp2AgZpmLFpESk8DGhSvDdrPUBbsXs7jAYdR1z24fDvp6nYJPAuY7L2q2tz2YabmhUXa2xQCv5nqPEQv",
  "key3": "4Ky3f7HTNnJhUgTsbshfsgQ3kXFx6dFcqFAVyZLJo5ZxUgk221Y2qLRiErn1dya4D8hJqVg7ygtzG6EUExoHUccF",
  "key4": "21yT67xoMZtPDZrqWEPWrWfRmutEGTc8GTC6uC4TdcXk9Bd5UHW61ribLeSQsDRD9bTTpYoMJ5tqcoJUKa8Z3uyH",
  "key5": "5GD3cSwDJFeeQy2jaUEsSKPcAedyDLN5TGgLfJRCJtSeDcRqHFBbsiAxjpTvnkcRvk6vXuxEqmkaNfmTSLBc19hJ",
  "key6": "3tjEDpD3p4Y2fFQnEgmAEEZ4QfzKPra2ZR93o9aBFeBVLHXS2xbMwbzePaggyjanbqideAjf8me9EckU2YjFABqU",
  "key7": "5aS1FSCGBfmwDLG8CxJBNbDAN5FsZBbqfnQqmxvzLsMnHcuCRzn1rZ656VLCdKdLzfB1bd8hZXiJoC9CAjqXn38W",
  "key8": "3mCD51gGyS3HQ16qtdJtqn4G5mqMPneijdGiCZg5VfeCKqgVXyRRjS5dsw3hASPG9Hkey3XQcRTvKeXc66oRdmfM",
  "key9": "362h5biLAzC4L7ndL5LEjb2Shjybz9pA2G8WZzRUYUaZqt8suZFuUHm1h949vcNVZyGATuFsB9rHWYrixPn1Zruc",
  "key10": "8hySigVKc923fSzzxd616XdNQY4BS2M9UidGRMjmrXCiPvxNAzDotYWKDvTSq9c4YjQbN7z17iNCsqDFH1MdFNz",
  "key11": "2QQrwvjE4V4cWMcrKdZGCp2E3sD1rJs7764a116JfjwEQbrZf794MNbgoDmV3eXYw4wSL1ETdhEjbi4guax3gFcn",
  "key12": "3sKpYMvxBjd27afxGH3wu6qyTqwP6NY6ioobXeEW6dqgxCaFPM7idphRT5RmD2mefBCQYrGrdYwE8hWDDYSJBQNi",
  "key13": "4vgFGEY7qi6MvX1BWmExovy46q4JyQKXB2S7anjempuXLZ3tKg4c7kJQCj9wB4RsZ5qxTaBiScRy2vjNWsvM1fQf",
  "key14": "fwv44tZXoXYotN47LvfjRiC278u4YFfJoqzfKhTcMtYqE5Dim8wFrjyZARjK1pmvj3s9CKKyA6bbhYnQYzxyZW6",
  "key15": "4KWgzcByq2AQVpUwxhkw8o3JJEmQfzgddNq1iDj9wB2u64WNUdLCwdPotw3v3xJvJVGyaqjsMyT18pg3QciPYcdY",
  "key16": "37uFhsw7sXXVRdJt2hxj47vNZWTBKHMfy8aeCE82WeRAPzQFDdVnPJNMUxHaLZbnTiw7pemLqJEygnw8fjGBpMM8",
  "key17": "2TjQbat1XKvPdBcns15EcwNCh6aaSWhvTTjci4yRe74maJaWEFcPcikG1Yw4mkr3YpWDFsPwX67xx71fN96SeBD5",
  "key18": "7VTCL7aAj3YC5M3BHGoL1pDsjFaxMkP5ieLUVRGYob8HSa3sC2GWy9eMVhd5heR6j37ZSHJrLXa1Y5A9iBydEWh",
  "key19": "4ceozTxKvFGZrPRpsNfAeAqDxxeyNy5t5PoSJtxYuZ4ukJGQw89phY7JytXih2dwzcH3cnmeK2HtJKtnkziEXMvM",
  "key20": "5KeeHTKisW7QrByS7fCb6msHeNK9RmWL7ji6riwhjTGRH4Av3Tdm8bphJNCJWchGMwPXd897mSn4A3Ecw1NE9YL5",
  "key21": "5PdF8FEqv1x3YN94oyPwugJfsgh2hfMfkyF59vPuV5rRb9HRb4fApE6EuuLqbidQEuVoKsNoKTZce5FYTXetH9mG",
  "key22": "4AKh3kNr6XPYfhZJXN4CDc7WTnCMGtd3yuCMqit2xFtdgb7rwUZzD6fwDmBUbC9EsetVofuvshMTa2fHCUYCVMRv",
  "key23": "5k3FNNTxtkQr8Jxq7f9GMDKp1igEAjix1fAiDqqHnDWXtArgD6wLhAsh2sqKZ9BiT6SyXdhv9MqPvazNoEJAA7Cp",
  "key24": "3XCMrFUxFUmYi4qAgZ14oAfdp2S7wU5aLwdd2tqFcRNy3KDwhcMG3fYscwqZbZzRwZcWgxTTFzbF3qqRETV8xqJr",
  "key25": "62abMeB3ayQLNKML2gxVV7ndEtM3M4qvUYQdJgeRSZyuAy3MDtgnZSvCKbrb1apRCr77ugm6Hn2nQxycNYJbAsSn",
  "key26": "35tgQRWAZ2bicmAEFR2Jqnzh43o6LBkoQc5PVsabhmw3z6Jbt9xtK4pVFyT17fGa9LrV5G8zBsqbTeWazWPMR82n",
  "key27": "5dxtHwDtoyhrQpJJVgZJNzhzh9syAY1QQN7PvoRS74Yaj1skq8P52NBCZC6mU86LAzrsaGRdto3c2nTHH8bLM3gp",
  "key28": "AMEF3ahRBSgd16YPDpSo2yt8iDpbBqxmauFG58jwm56T3MZX6N1aezGrME3taCAknSvn92NweLqaomd3PRpsn3f",
  "key29": "4hkxjU4NDwiDBLFUDkjNQjd6t5FJEnFrnBNDqCrJZcuaQ26ZpQPihsNaZFCyQ1g9BA3DBeu3LwBXS6M3huEj7woS",
  "key30": "TRftU25CAybDy76LcAf6N9rbnT4MvbKJDomrSQHMzAofW79qbuuC3xKXt8U1jNznjEC4MQKDwS8z9wJhjW16m6p",
  "key31": "jsaM53dYj6cdYCVhCEJyXK3ZheXjsrDxYMYG3uo4ib1rZ38knfHmu8J8tLhHgKCVMEKcQAcJyuGQWsvWYa2wRD8",
  "key32": "gwGv4oNXZujx994bivzjGtX148GNbhkip1c6Q28EMDbyP2FmLPSZwQmoi24y9LjUZ2xCbekc1vSqQdKz1PjqmMn",
  "key33": "JUQ6HNKkZCCwj1UUUzc2bZQua6s21pzxxTnLXb44GV7VSUTN3sGzKnE9c5g7brWqnAtioYr4zDhiB7SXvV8RQma",
  "key34": "5eYV4zCxqei2iQKfhYwrjvN5rdbi34kLqjx9KusNSdxPKWt6jvzMpxxaxPjPGjDc7ZKkLd3WTADSjVBiDmHNfXeT",
  "key35": "2cLJVWX5CeFXgXanyuRmjKXTn6jd7sytsqd39s72YxzRFsXLugJnJWa42QAYB3vsxsajsZzf25L5viiPgSMyhtKp",
  "key36": "4THYs47aMbj1GNVN2zPJyzQ1VjMN8CVfFpxAJ7tp1VzMr1hTSiQxYHFmD4QT9ZE15aYV7jvw928kKYdmUfvZ5sPR",
  "key37": "4Gf6J7KP2tocEqj92BQT2JVSZTyB9mpAWvf3st7jnSANw7gyv2Ycy2Y65KR8V1gQseHj1aSq7bdoE8YAYkJ6jee1",
  "key38": "dPVs8BJE6SANY4VBdB2Pe2o3uVLgbR7JPb6PM3fp4JCcofAcddHqNkionBZc4H92DhPFEiX4XjdvmEKEjDXqqtP",
  "key39": "EsweGj6pBitKUW8QA8V6mXGXgcgozFBc4YBFEbdsb1VKD9JkhEd86e8LRUPLMZmvcf8VNeRAaXLjtyS97e2mq5V",
  "key40": "3b8YGqSPmt1RsXbbkgvAEXm3jbVZy4R7h268mBCUYJSd2n65jRV1dg92FKy34kfpRGidZCstUChs9atvnGuaArFH",
  "key41": "47ES1SbgypbUbMFm5kj21bUfSqudDoVxbaJVXYmcgWCxcQBkGp5tfZ76jChRAiA73dvTcqzNsKqHcjyGcQEU8gzM",
  "key42": "zRgt41aib8hEDjV3b6B3G3o7DW2XtMBaaobvSmXDcBieaxon15azsdpicmUbuyd1dz8uwx8jLwjXR3FEgh4mj8a",
  "key43": "dvLt7Q2hV7KSkRUXS4o38w9gikJB2GppD4PP7pigNFDpJvEZG7u2KJjwjrgSS28SM7W6gN2MgEfinxxMyJUEqhh"
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
