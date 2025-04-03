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
    "2JjxXjRmFcF6YK6Z5v1kCEn21NaaZzLELRafh6ddjr2cE1W6XDRDbdT6o7AznYFyV8MQrEgfsrL71UsEnLa9jJV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4moadtPob1wvmJ8Pent1VBAMyfiUmyFtdRj1tyKcsVbcvo6wbNvahQnwJb6eAxX52LbEvd25YY68XzvyrKouYdXo",
  "key1": "uYVpsTBwmaMgdHAPsGEtfyMDwir4QtwDDtz9ak86Yva6cfF9BP2XHSnjVk2z731vonZv2daALTx8qqLPwXLZsKs",
  "key2": "2T8No2dRUA6oijdHkPYW4c5tvo3rc5qpTw18y6fcs6DKx3G2JdpbatqtAPeRdSfMKfw7yrRNEWX1brwUANfXWxkv",
  "key3": "2xZKxoUxGjdZmai9Fm9ETmZncTZYXDmFEQMoPK5fcCTxauNsDfdBKYcEJphfCeKSJQTiXhEU8Z1nngQxsdd14ZPo",
  "key4": "21rDL3e7jTDUJf5MkwMZcJ3oocQbhumj4KQG7CwaA7NeW1azoXxhJai5zGuPZof43uA97mVocNtEP3uqCLVN7pQr",
  "key5": "21wXS4J4mTPWr6h1GByYGVv8i4s92DiYwWnmjPxPg3WGWfMxngjYpfjBM3kCqgj6jXSq1wFVnCWSncqULSpXrUo9",
  "key6": "4Sp6yGiqbzvXMiH7fHHPPALwfUHwgB59bCJWmNiW8H2yV4mf1sUnKS72D8u3RNzoxGnYSdYjH4AmC1wsW1yF2YxK",
  "key7": "4uUYsDegyHfskvFEjP1EHDMGwfkCe7FjtcP7XM8XtUCJLPgGqbjEMeeieskCdfp1NQZt3vC4jpGpn2vw4wW5EZ49",
  "key8": "65gPoZtGiVnFTP9nr11DXn8svQwMdfmhcG8cAtfcHMBt2PKoWRy4uh9RJVuvsv8yYecPEhU5vw9opwxeUoRNrwp3",
  "key9": "61j54FDEhk8xwEVFeLJJtxsFsq3zT39cFMXM8Arw28qHZqzYqWdTrfrN8FXXQRsYQJYGMQS9ziWgod5e1Xqcnw4q",
  "key10": "5T4LExxwWBzsBUQqjtcezA8W3EqF7D4ncgWB5JAX3tzp26D9Khym4mgKaBKyQTfbR6mXje7NsyAaGwBnCUr7Z7aY",
  "key11": "PvrzeQYEcmNGxchXWUdox7xH6VnMqhBCBLFmykHLJNv2ZWNCNEJnMikJuTriBbMT57XE854u3QAGAiqNHLDwzHi",
  "key12": "5cEouXXAxyygDdVrFSPqcYjWogMYpHiRZHbTg5pnPCtcpeeNgWDJ9ezQ94kqRpXZzhp72xQWjQXpKvMv6UdndXow",
  "key13": "2BhQkghkGZbgUfBHeKyJEWrEJ6F5Rd2zaVo9NystKAqUdZniz6nmWi6WCkTVDtauSKgnPxB9iLCnp86cd68Fq7k2",
  "key14": "5MToBjaMpfDtd7nrB9ReWMAaXuTqh3RPHo9xyu94P8LJUvoXbEMB843mwiKi4rdTQe5ChB8a6dfXeUvGG6aK3Bry",
  "key15": "547N3WSjQBgz7728o7J5C5JbQvJhueg3XAKtG8yumxYRDVPCRDW2enK1gEJGKfb2cSBEoVAgo3eG6igVViAYA9Lm",
  "key16": "57n9SRAzxYtqUTKssoQb6uDzhRaKn2JE2Y2TuWGTtJYgHjEheofB14w8eGtpRH1ChxCQK8LSwdZkm1K7gbbBrBLN",
  "key17": "5siczdMkQVHgqHFSFgyUcmsksNkJKpZTaVEYjp6e9hT9SgCX72bXBpoTS7T4owwMjR6XKnMX5mEKzBeF8y6hspEA",
  "key18": "2kbTF8zGvwqSg8Xe3Gc58k9hoMMqVffE4Btqb12TZfLZnmrR6mVhuGdQJyvFMyKZUHbFnXJUZ6hhD8PkoZiCDzXe",
  "key19": "44ELuXkC6gjLyQca6RPRYyEWM118WUzriBjX5GA3Vwrhf3gx5h9E891pnzxs4sVVEc7DYowZYQLgWQ6MR3Afd8KB",
  "key20": "4abAnPpNpZFKr4WLMbwYK6vZc8q3RM2M7baexqvrmB3QDxwMCsVGEHJM7dSwjiAKSR7UzDgnF9Vsefv55W6QW8GU",
  "key21": "4ZGjzjMmYQo4jDhEKBf8hv6rHDMjPvfFS2Mxe8rZWvhT9TxvUgc26YAZkkSamqPVWtwHQAgUnWs5egt2Gm1kfYR",
  "key22": "5kDqEJgmndVbeSnaJ1SdsZHt6NzQVvseshVQCmjPssMtbKCZ2aUMCTy6dMjxyfkv8iq99sE6Ab5G3AgCYSBqp6RM",
  "key23": "3df2PaCfpF6qLm4PTFpf4dGEa2Cv6Ubj8Cr9rFcRcJuuCogmDCrsYvWFmxW9S7Xd6yseyyEjs8oW7vs8XAHHNqgw",
  "key24": "3WvJtGYCd6LyVvNxLvBpTk9RgAzMucE7mUXo5wJX6TopGK17RY6S3ra5oBaiWgEbWuRFAXm9QWpFu3hFVhCp2Aob",
  "key25": "YmSVKFu2SwAqDST5H5HxYeP79F3B1zLovBNXXEaENXLMvTwRGezpXqcQwBFFAtttmK78ErEgSWyYR38eAG2feur",
  "key26": "zdiAE2Ee3Xx5vaAUCGDtWd9qDg3jBPbpnx6nAEPaVbgdjq3kqU311Mh6ajGH7aBpegMiqUmN5DrRFYS5qsCjVsq",
  "key27": "4a4xXgeuPRMHufawyDJZRoM4iWQBeChb3HF5YavxkiHvir8C1ARQuxx4cjriZoBuiAHaoLKYYrPMS6u1Tcxk8XbD",
  "key28": "45Dg3HDKScHgiQwhGjHyA4if1u7RnPBD5CZN5NnhNfkzsXTSA8HnThD1r46nYatjJc1BD3AuNpDvXCcR2zTDjRR8",
  "key29": "22cXmqinXhyMKyrxZirionzwPASS4JpdcDqHhUKHvMiQFNMhPwuFP29wbYbhEKezESDPpgdCBNBUJULs2Yw86ENy",
  "key30": "3sdbXAjtFbz7eefzuPaSWRGsgPechQyuCAfy4udMz2DCF1vpoKHPifyjgkYijqNVgNNsyUFA4iz2WKzzJaCaewkR",
  "key31": "5yWuAm3g6LzSZMtPVDkczk8H22hV9QmcwvgtCHPMfWY9xcoP8S4NvYjz8t1N222Wr79JzDzrDPfhywyKj4hKnF2N",
  "key32": "55G5V2hUKVkg9AH1Fo7D9XUEQ3cBCnB843ozA7VC6nF9MBayeaPYwQsoKyV7DwsfEbHr8ino2TGiV29suP7ME9bx",
  "key33": "4FuSQUQzMNZuYGPv1XBDSeYHW2eeB7wzeDertC9nQhtQLvDvAgptAdgDTm6x92gG2AYvx58CfvoEqR3Uu1Snpvfr",
  "key34": "2bL9FD9HmxyQkhSWo7xZe1EHGeAUUmmhsb3sQsTrvhF1sGB7LF8x78WmmWHDij1yPEjTKCVW3QaSDrjFphYfEm3k",
  "key35": "5qAsB8LjxAgyxE6pt5NSmJYxQcVnhCthy4nfCjXWGHqd9EunbwiMmiNnjXyFow9S2C7jGVL19vKpQWiAcRgmXPti",
  "key36": "3Ax8moBV7khXpXE4DTY3nAH2YDirM1QzfcfRbevH2UEPcKsPXqGEMcGTs5AjeCjS4jKu4tknqUSrkyTAPgRgigh6",
  "key37": "5CapM87U8iM9CgAhvojUxmqBaAf3RsdnaEoZ9H8hZg7unecvqwKrdujcY4tvRDGBWSHgnVsGN6kcNnWsq4Vf1mR9",
  "key38": "2TnHCus3oZdLHsriwfk3dJ1JgJkBxCWDo8DxUndE4awJcyeVUXiNBv9Qfw2mGwZxBUBJx2F8swiPmSJispnB6XRZ",
  "key39": "2WPZGLFbxArYmKxocSWZNBvZFzLPkSjCS2S9sBag3MdHVm5q7gi4udnPqXHfqrHPKj8aCPW7Y2VVeh4M25Vf4Xz7",
  "key40": "2hmyDQFmD3p3tudvLAb7bEGEFX7RkTfihoxD2dBHiRVcJBdbZYiMhikaZnkcSCSeKSUGCYghqnw2okfXJqbeN2WE",
  "key41": "3ZN2dNX4wbiJcGDMztwt7XwX3VFCEUpcEfMWEyK9Eq2zzHyhS28Ab6mUAX4yvxWeuFpDBCmgKF57gr9KrAnt1J23",
  "key42": "2RntJgEtMppRmymFXgTBdDUegjAmno28WMTPRRqVCKg2DgWc9ia3g5QT8b6RBKJVHoeTnZnFcQgzqFZ4PTHaV4cK",
  "key43": "WB6qzjCtnMJHe9kVWJrXX1n1NResLUANy8T1FXNndMcgxwfoVjHea6dWhe4TzfXdFXi2NsKCRbJYpKTZq2wDZSu",
  "key44": "4TdQ51RrMfppJQzATS8AokQTDVZcSDdPd6u99WZQVmzuTSFBwMChCudQ39LwduqWCViG7jcYpyZswLWpGAWXMpTJ",
  "key45": "4i4rz69qfFbzsFQxHHE4eksfGDujHKsfGQwLNDGCGb7nGKk4RfadQT66yCTJTFkf1VoJaRsPMD42RJWC1Q37HsrV",
  "key46": "5PSxQaipxDR3rDVXQsaZQuc5VQ88hWHbMQeuCMBAR4GXZEaMrDH2c7tBNQrD2uTESNx6MY1VWLCsyFkD1ubUuVDU",
  "key47": "Zfec21CJZg7pXfn4punSWU46P9MFiv1cSyUnc4ucBLcha7ajzrydzQfida9KJjzmuKVqrdFJHKTnMSybggfWxS5"
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
