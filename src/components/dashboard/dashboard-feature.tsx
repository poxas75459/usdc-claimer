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
    "zvEZX9SXaPzLiH5fiMqX1vbuPQYKWfqCYgw28zKPd9yJNmasqE8GSHYP3rkTZQbGitk27VBeeY2m7s6Ynybyekr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9TZ2MDY8MPpwkm1bvimDMbkMphC7a74Jcik4PDantnj4GyLPA9f84rVAUFdW3zkAhiUPN7dHGfUbtrAiAzT5g",
  "key1": "31R3Ajxvm7rU11smk2C7PAD54cY8rm615zbrFZXujDUPnxm6XjWqYYPBTZvXDg5JURpzQjenwjq5JowauJbQwu3E",
  "key2": "5kGS6TpF29J8NqpEe5pui2q6KA6YrcJf8n4NzQsZZWGuoFkmdLV6RRYG7M7X69H1xxWhz4a1VENR6JB6DKy4rN8D",
  "key3": "N42wirM7cYcBW5Kixtqp8EAkyzXwiYwMzGxB3bvBSeqUAnnCggeUndaCZ8hnEte2CSHdAERnnzKdJ6YHtZ6Teeo",
  "key4": "3H2i15BVnc6gBMvpmjmZELAPCEm6ZBhnqeg3kAuJsCGtpTjEWL79doWudsbdZytQp4eS37FbeQaX6R19BkS7ArL2",
  "key5": "29XfVNkkbG4QxDhXMrj6ZkznpJWqckdVMh5efc7tp35jRzhSmaaaJXmAdLRKFX8Q86L9WsDPE4jAxrBmcX2mz6xT",
  "key6": "2zWvXnAfWTmEtwkCT4oKwC9DGh6Rb4QDpYCwoxXnmgT4WGRf9uqcWocbxEpvzyBvXqdnq2AidxhLe1zQENniTMEm",
  "key7": "2baPKYfXyhWRXbYxdNhMB15B7EEo22EW5bPLFuYur3XehfpmEviSPJoMvxrrijGBkS44rAiM6Jom2hbcotvEuHez",
  "key8": "3TR3pgng6LepMSiowikS45YXQmRLjeW4hBCFogx5MM43yzNbXtfGWgHBZJ3rW6abHJJVEuuQbyub9jdPxS6u7TDS",
  "key9": "dGkdY5seL2VDvkNmjVCWjXFZaZZigSBdmshNxU2GfAy4azs24GQuHASThBCeeRj6CnFBcCvcsCyDerC3C43g5KW",
  "key10": "HzQsRDgTTN62RkczYF6krMSnD4S1pQixvKpRPu1z1BJzmekvAsUheFyFp5K45xgVNLgWGXjRyBG5y7QN4n2zdmQ",
  "key11": "4DabJzBN5W1J44F4Y6i3Mc8FiAqKi7eCU121E47SvxoYffdMsSHoqHR7KcXfzgQwCKDWuEZHQQr86u5Y4cwH1VW4",
  "key12": "3a4P2EF7WWiHJE3K2fzLb9gtu12h4rKHtawYwiCsLeG4ir7wLm98Ef64tJfZDo5Sj3Sgk9comyfA7LrpSsgqCKfN",
  "key13": "xxKXcKA5QU7yifqiAqNnYeNsGVvzMEMuP3ZeSjfphyhWhtQbeAx5FWo8CsiQoJh9SQiaTvLFHU2NiVK2oBNRK1u",
  "key14": "5gduLsChe8W2uygyzMGMa2oJ77tutbU2WGYiTjKDTm6H6MfY87WTDcsXkKiTLPQdz7QFtySTiXn89Jj4UQGzH18e",
  "key15": "3tFkXncyMk5L2J6DLgfKsw2p9u1wHrKtKn1mVLHb38T71qhRPxrNbQtC6z6ftgca6P27dryjzGKw2xTKND5h12es",
  "key16": "5x73DcvyBwmQGoh4sGi3e2bocmssGb5mBFaPvwfUpa3XF2JNFdMFY43rChBJdhijmRypHvMTWgN1ZJc6z56aJBDD",
  "key17": "26zvNH6nbQ8jfCZzC4Jsw3MkEckifNZDHcjpaPdSiwx3tWqpLn9B5XewnhhRMiS8LsxV8sikaJtSkY4eYr7xHZdH",
  "key18": "396eysF7x3fceLpQdNqc4vDXubAHBew9uJXey3e3UvwAsdqj2Qc8sPtQ5hUmSsw82E6rJSoW96xHNPH5bP7y6rFA",
  "key19": "4WKpyFYJAM7C1A3dB955tBdZ6FKR8skjCi3v8qFEqJWQUD5eDq1kGfs6m1R4mafMD7wLgYXTThcm4wA8XTgUAwFQ",
  "key20": "3H8Bapfm4cuAkcWrDvCDdCEXDoi6C2kwNYwk5xuegKNGcjxwNQzy3cRSzqB7VXGNByUBgrwFGyBFaC7jvRd8NsL2",
  "key21": "23LqDWoL9xCPbhD6BJrfszxAXY61LzfnJJkShYSyFfeZuNRrXdV69u6nwfwwKWPZe9CQyuY3Li9FfxX6nFVPyASc",
  "key22": "5ZompDBHFiGZJWCsuaYRuAfxeoQMXrsysP6P8tLehsHZoUrx7E6anVRbAtaNnjBAcu5sJ24SW5wiF392Eg2DTMBd",
  "key23": "2AtKVwxvDqMw8ZKwkWYks93NiErDRyo2ueU5StK9d8TNPyt5vVYKJPDC59P3XM1n7Q4h7Vrw7JrPQMm9V3pimFJZ",
  "key24": "5w5HNPk5UiX2WDTGxCit4RbNsaLm5BvpjGKxue7oq6FhK88NS5MNnQ5s7MgDPiyjG7mHe4m8PxMtzcEAQdrse839",
  "key25": "4XNLbWtCFrxnwPxBkWDEkkzh3xpJBEZyHAEHHTtvKkECDzxL4D6dMsFap174djXKcQyXRsnfwbtRPnqKtuCj1yWS",
  "key26": "64h18xaoQbJ8nD5ZVEswyiHrnATSECRRk6XEmJDpCXUrGArfmLeVm9YBZU7d8Sp2hueSPFJHU8WBtKYRbKfBYnd2",
  "key27": "3pmUDPoQA4UU6bfbYzzw1JBL5pXmVAAS8oEv3vN8icJcSeQ7FruGGC7YFSjZfKisKwwiJYvec74B34hdL1vVSqKC",
  "key28": "5Sr7F2hLpo5buRLWx4o4EdV1mSHhw8ooYr9GJGppUiCwEHRwX7g2hDyP1tjQsBgudnYEixVkygfrUmPMCaeWLbLK",
  "key29": "Jt29NRGhTxTcggSpHr8JJPTotWLDd4cDn579838sHFhV3Uby2iV3YgEBEiLmNqxjj4nRs8iWRYGY5P9Wsbzj65U",
  "key30": "f4Qbo3k22dkK4kw7zPvjHAGd7rzpjw8NvwzJvKH8JQ7W7S5j9EfGe22K96BqmvpnhJyfCoZs6nb5iUQKHyyGqad",
  "key31": "2YrWDeYh8ucg69hFmkV4q1FPBQadyLJXxFgYtkxGNFvTF3jsWAHCnPXwLJbEQ7P4UHssd4mzefJ8cYeeCQ9apa6T",
  "key32": "DyCKpaHWQ6xBZi93ScrmvaGWwp7yfT3MkmP2vN4Hnc8FJ5B2KYsZtzqMK5YHL8enixLCanxM8XiAwfFXeY8Tfgn",
  "key33": "2nd5MgnDxk2TLvXpy9R9oWCn4e3m6N8V6TqNS8bFAnZdxYAjefnG2ETHFCZcuzZ2GydqZonpGpgfAEeJ6eJN5vZS",
  "key34": "4MKe8qguUWCeFUAz5BTbLeCzrwMRg3jumGURAwiz2QQ2rWnqaFcR7294nrYs28j2zfo5bAwFyMLHGRUxdeyx5Uvf",
  "key35": "3JZTBZwUC1Ns7dtorsZXkJp7n6BMPyviHBxV79CrCgB4fGfwWU7ScunTzCyWpSk9GdNJBqCGac3op2Yvy5ut6GGc",
  "key36": "5pbZK5TsvJYpscZtcEHfwMNvRm5UnWPeyyTb5BxZcZiX1r3bTbg25onBhnNLmyXCSWEYLikGMbrrwJMY6nzjG3Dt",
  "key37": "3bUCo81BxcNfh8M9THm1iCdBmbms6RBELYz8TT27uRr5WV9g6iTBVvjboX5JbGW1yD16C9vUTpcm7VvVT4xz46mb",
  "key38": "33tgYXnPtGCTSCHXFL7GWQ6mh8YGZhLyZmMxCLfsW5NH69B5U6pQ3MaS3NWHPK8z8Arqq87PypVJNVY8mFv2sSvK",
  "key39": "z7AsidTjFxokcs3Jd2zEkQsiTpdugujqXqDSvTxA5aaNL8HwswhctxkQTN7PUAqCi4qHg1eNk7z8QsimgmcG8Yu",
  "key40": "DhkAotesLSFt2x3tqCSKVv6ttLy1rAiwQhdZr3RC2DUWpBjoCMuJUawhfFoU6B4YAdo1CXT8TLjsBT1Go29XWaU",
  "key41": "3cvKqy8VxupR3zozAHn47btzaZSjvmwZthNNiJBVnGsvKiWmo47tykwDXRAGEuwTprnJLBbCocUVaJuAa4ivkbTv",
  "key42": "5qWiNfJECnW8STpV9JmBE6Gs5zScXgUZpyqGrZ6Myf1cWwLje4DoHkyGj6BFcx3EP2a1bWeaggzZ9YhcXFpgSbep",
  "key43": "2YcVwKD2dnYwWZhNRxFCDYBneAwG3eQejtD3Dk5WB9RPHsVExCH1Cuouu4F4eWunmQsREkAztUWRGUGETGjAFfnG"
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
