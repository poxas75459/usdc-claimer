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
    "294myBEcPNqFc8w65pmUzFzT8i1EtXkTRu2K36pAHorbUGEqfVmHCJxKBwEghVEK9Qyjy43r3kpKSC5LG8y7Qz2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XfLzhpxvkJi2pRHxJ8jtYYLbaUAndatdaMswmA7ExcpTCRcgESoAE34hUJ8cV51wdcPMwiSSooNtLYw3vY46FQV",
  "key1": "5H5M4Gik38yQAkiaXnABFK3ioKd947woSTvR5kYfk2AJ16hQWX9r61mjztqRBJpfNbrvS4GSCmB8RYH4LPFwyToH",
  "key2": "3kpVyUETuw8NYdCQWi1kyMA6po6vJ6o2TnnjPaLdHMfN8tjzBXkbZFBtgqpXUEbP9uBFLDLX5d9z49ibAjHD6NUf",
  "key3": "DtCn9xG63u38vwRaSosF3T4SUSzb2t1QB4ZQeQnhuNhEYDCn9VpFDH8LgMPLo9Fwj8foJLsx2bEwmBwoWgP6Xfj",
  "key4": "3LY6fUbFiZE2dAF9oRw4zCV52GjuqAdSSvUcHSJ3tZeEk8oK7NNrCkZefzyf8dRvaMqzTx7UST4kHmgSSH3EED3c",
  "key5": "3grMHRxCQEArzR9u2He5dG2S39NunLp1q762FqbndERsMtcgdkSvxuQ12WXHfTBz9gdxJAhrv93TeannZyjV39pm",
  "key6": "4TpKjyt9t9ZbWHxgERiMos5RG6MQCRVjGnS9jUKajq9wKHpAkJZPVhoU7rxf9vT9bpw21QLbuEp9DPbYnvQjiAjC",
  "key7": "4DqwU3arEoJHAEc9bGgXGPXzEFUGX3maZGvCbaJdLjdBs2g9o6c1jyrGXRhm9LcXHW6aS4b6PmbixqLiJJyJYG3R",
  "key8": "3pJiez1hm2hcEFWVbbAp1pmWNcWDnbrAFpsTfo9nJc3qBdhfpJs3xLRzx3oAkjL7igRGjSUWCsSdkWu8Ts6Hfric",
  "key9": "3viNbyYPDEXz7339kscs9EEfcLod5gYFSX8tWG4u9cAhcmN9uuttqmYoBNGqB2DoMvARn9yfUqtpznjh6kzu8P8Y",
  "key10": "3e226FgcwdxV7kn7ZFd4fjMMhk3NRjU3m653SxFcupT9denBLRqbdcAU8sbiA3ejt3qyiGHbTMqJCiEMEA7QNE1P",
  "key11": "5kktJhnJPyPixnn3Wk2P1Cp4QFUgQczrCy7WqHFkjsw51i9gJG9BMfNidNv1T3kJR5XdnHC9crZk83c9kd7RevYv",
  "key12": "4TLZQYtSo7c6GcAsAHumFPQQYsdrMRCKVzjhreFxiG2y4LLQYwMe9ZfQ428nPkaGHWk2mUX6KeyWmopZ4FBeKbQ7",
  "key13": "358Q5mfdGvF42PXaBwS3omk1ZWXXoYhszHvD46As6dUwjmh9KH2JsF6fX2mqBGbYk2xAMPWr6pt9pZjUoyQxjsrc",
  "key14": "3GU5NyZm7eoTif8aHMtDai2BgNiJxQL3VV1B8pH4H55RJyBsNU7yHtwhppURTiFJ3BCADvKA1MbSFrXdcLVWjGVS",
  "key15": "28ooB6rdjJsE3tynyqTddJuYHMeUdm1gi7JeLmKCbg6mWYmQm6sBFUDPmBnvk9Pqn1p4J5urEwzm6Gn8jH6Gp2wn",
  "key16": "q4b1rpNL6iSeqYBqqdTwVQpds8jH5WenCqbLzxDT1qrfxWxjzoWy6fTTzenZmQb7bzXRaWyqJvMuzsGVvuTw1Yb",
  "key17": "2KEisY2a8hZKVxh8sd3EtuqA7VrRKaPVKJjkmtGDevAynNTkKHjDix7cpoFHfa8DH8FL7b5cFqJK4j4KWJCeHNzf",
  "key18": "2yPr6DHUiGvnPfBsUzmxhVzV7dLS5T35yQH2T9gAv57XobhHrjX7xqUtsJayWQjn9VENycxCEvRcx4UfenLJhqL2",
  "key19": "4oJreXSzhW9fpm8Fp9RUjgpRNDgtrs7BeSDmcEgrY1aAgbiog4udvv1SCFhcMWa2CEjrpiVFEyR2bjD8N9ag395H",
  "key20": "3qnRtWFgkhHqKKQAc7XkuCjVguHBUgEpUBPJFiUFYZFApT2yM57oYRzeN6EZUbm7wF2kQcHU5NYvNAKv8e8fJT1N",
  "key21": "22nUX5GZQVoB5kTNX9hGjHGYWh2VVJ15YuRkpNjytsCNx2kJCgdPduqENuEhaztv6gau3PZzukiQC21Jth3abTdJ",
  "key22": "3uJ5vCDdYXUPF9cLXnwZTEPxKDAv8q8z3joPNBUbNUki4BapwijiB28yy6sGPBY3bLXZCRhNzA5JjjyvqiVg3p7i",
  "key23": "62L5whyuw98Z7Kjxt3fSQ9HK1zdjF9GWY7WJ89fSAcF5Ga1f3Ta8RCMth5muEKWDgncE8G1FKBShfnrRgMmCXtNV",
  "key24": "37GmMQmSwFDKue9DFec2kDMSJxekTny5g1MgmUALkz21m6vyf2bGEbeqADgNDrVR9EyLC1oVdLiY2L5vLr3CETPD",
  "key25": "3Ra6QEKYJmcFGhzUvJ866n2RZxpYZ1ov9fTfMxsEo7kwJ16Y8utpnzkpYXZVvJaRHDU2WgTFENGfByofvc57kRVn",
  "key26": "5xrJFNpyDk8LGrFi1Y2kzEwLKg5rwCVhigo4CgCvPx4tMXyoRsvDr88Axse5n8v1n9ScGPhcobBox6mkhQErYni4",
  "key27": "2fz1BxSpthG1r9tUS7RNv4p9fpgKLoXbmKeSCqePesNsJGgUC8U8CLqNp9PrENZt71iCX2MBHK6e3DBR64K2iRNm",
  "key28": "4bs9We5JTuPBxqo4d25M8aVEZ6MRkCYCH6XXHmwLU3bqiEnE7Z5xQ8nyKEbcwZ7F59Hkqwk9a9z2Q6ZfiD31uxU5",
  "key29": "NpvDhK99yQFXVRuze9je1jVetLsRJ2ETcmGjeyLpEN8nKxVrWx2fVJNqYzbtX5hvuNeW1sH3PpLLri7qkAfxL4t",
  "key30": "4u3v3PJMp1EQmsfGmuzZjmXtJUJXYQo41hEoWEbZXEuhkV5JJ4RF7RaGTRi1Uqh8QXcDbtShjFDUcsb54A8ayCoE",
  "key31": "3duWGcXwxjUD9dmxhgFMBSzvVvZhGSnFUq2b5aqTzMEUHkUbLebn4Vi9eh8S61iRjcZ6Q2e9naMP4MwZSYUbuvHL",
  "key32": "5zKjEVL9MMbGvWrTcLaoN3diN6dW38ntE4jFGzbKvvBQFhbitRTuWg7Q1zQ7f8DS9qaWAdqGz6BoTNfs7UaYrN1t",
  "key33": "27VWfqaCa8sQn8d92hMjCkCjEDxyF57pC9a3rzRswn7d9gsCePfQz87U6QEWDZJ5DK3axG9Vgx9tPHmeTSQ3Rwqi",
  "key34": "5D12zRbMe5ujPZr8iFFHYRTat8zDuDXA7B5ewfD8c91cgdcgvw9hnjSVqFsr3cnXYk4xMFsbNe6HSpK4pWMcqybR",
  "key35": "34TDiAe7G1vACnPxNiwkSeA58vhjJxawKNrxKUiU2MsEkf5qB3qQCjQ2Z7NCGunEdBURfp71SMfASfiuGLnSoE1o",
  "key36": "KcgMSxaC7by3ymqMYQmH75zCBkirnW5187X3FCfSRhTYN3hdcBU4XPYYBdxpz1HQwva2ZzriPQT8aGoYdRVFXXR",
  "key37": "4iHPAMc5BFYZekNaRBHsnXhJYoAkcxUR9rYEbYHB2u1yQqqiZkvwtCHp1c84UCXkLaD2HeMaA95URPunkiP9HZ8",
  "key38": "2ZAkbpMv9JB6jSxX5UP1NMQUs6CYdXf5r938XgsJHQn3kgKRjiD7e6Acyppp2ZHXd7LKYtuAh86hEPt1tCf2bMBX",
  "key39": "3eAREceAMLtqYVhR9cJdg6MPu1q1P8Hqzm55iP9RjxFPfSmaddtV43W7qG9iMwfh2HyQjpvJSopeiHWTYkyAzS1D",
  "key40": "4CAjJjQBw5M46xjt15Fduqh2DwT7gLJysS6eJ3bX4rDpTU6CHEJr7j9uSBuPYXfdKVD9eiC3Pntwq6AL5qphbrw5",
  "key41": "SLtURwHcdK53m3NpZLMgMjxTWSsbX2EpppoRXyr8Rmpqawg7rPdxTskrQQzHDTvMCphUnjJsgoWwmbpUosTLdN5",
  "key42": "2PoHq35zyh9hTzQXZ8tniAtP9vN19ZkxBJNJF5PpEwwKToDcnYA2NMHMYFXyymKyo3Wb8FqbNp1eGv3SDQgJbkfP",
  "key43": "4RvGR3GT7JKrNK5GCbQj1RGgn4s7cUyM7ZAzh54xs6wQFt7WRaikUN2e9Uc1GwU1f64C6iNSnsggFmpZjD4hEz5q",
  "key44": "2ZvcvT8mwZJ3KLgzc2FVDE3UasS5nfu9rWftyfVQnpv8N2Jjy6nzoYTJMBRBZoandraxTJptoKHKL1PT8Rgdq6gj",
  "key45": "45G565vDdfJN6mBtpA3WYfwXERsct2gNgsc1dVdMS7nf6DrtfdXC3uaccHeBunVGKZzpg8C8Jx55KzCDVm7XtXiK"
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
