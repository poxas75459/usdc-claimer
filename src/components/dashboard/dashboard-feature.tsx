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
    "2jNApy2LrbAzgDfXQwXRT4cT98Yg22qvpSBcSZg4o6zm4F7XFTJ99i7qGkM4nvLKuBPDqT9UsFJij62G2zQ6hWyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q64z8657UhN1o7MLHc7YHV3mzyEoTLPwb9BeBHubLJXPfjvPVJ47D4zz8fh4VJEsdqLp5ni5C4j7gy4M6RW9zaf",
  "key1": "2C4LBFtQ2qNaGQggjHtzvkWAsKQqCkMYQba8fnUaquYSKL5DfZbGcxQ2vWPrRzWL9yMWBN7nQsqAjEUBPGcdk3e7",
  "key2": "3uGcaZQBc3YVQM1K5DhHoHLbaLtcnWC1zNKKowFxH3mjVjCJBWekFQNZv9YyJvBaQhe1NyVs8vWkPytojeYN4qmr",
  "key3": "5Ao53o8ytcBER3JT8DKctzrC4MiJBxwPnh5PAts39mfb7CEFe42oLfJWsXC1cMaL3p1NM3GZKsvtrokzkf8qsLia",
  "key4": "6jB7tLZuznVEuJTYHpuLw5kEKeE2pZpHnVwzWoUGex6zdrjxpcQyhBdQHn63r5QbjZUTy8LstHnyV29dAvDnZVX",
  "key5": "5VJYyUhEExtT9u1JeB9VnAWELNj3E86xeW7vmQeoqJ7fEMtAFTGSo5TVcTPQA8hSHuvLwzLHEHMTmGoFonY5W9hS",
  "key6": "3zzGw97yEzjyENdvxjjY8nM3NEqhf1T59LWCerM3wP79HxYU41ZBjsgswpJvo1HfxQqajkMi7rNKvhtjqEbrrWPv",
  "key7": "HpjxqqJTwQeFLxGm6su8Zrx79ymLC9bXknKby7z3qb179f7xuBbjZ3Ejrm7MXySvFDcxjR1yRuNHe7iavqWuAxt",
  "key8": "67an8gdDod5GJ3gKejyfbiJt1zGxVVJvpuR8uLABxwiNiN1Zwx1VTyrM5cJFBMRiaaDLYXc4bEibXrXYUxxvKi6C",
  "key9": "2hde8Lz6hcaubQS3emzjpWA485EBf8hizj97rM3ECRDxfMMPzpN4VxMHWu3MYFAki8uajRZucfnThuvnTa46S8EH",
  "key10": "z3ynT87uCGbMLeg5iKEDgz8dNjApT7ZV4AgRTdYyg6rBSSE52mXpiCRoyXqUhjSZKeoTzdQqtqRJrbUPybgHF7F",
  "key11": "5vWnuekZsgi7qp7WtTBJpbtLrYCt5n6s4QWeviDtHLXEGGMAJc5zxooy1veeiqFmcEHXLnmuKApnvoVd8sWQqcHB",
  "key12": "3KxciEmRQ8xP9wZYBLbCGYBXyrwMUH2c3C6tKXyjZcomJewAjywoSvnAW5AFGRidXqmmp6Qjgi36FAfaNajS1vX5",
  "key13": "5LYL9F8YtPxeuLCtAwuxRQvGwievPyTXUZuYPy2AdtfziZKuw5WmmtiZz9oAkAU4CduwMmTwqFjcf1C5B2Ls38ww",
  "key14": "2iYkNqesnFGMSWegscZDRsdzab8cRtbMaqeZ6NyC8ZoVRrQzCDhRqB13JB4pbSvuc7ruVfkCQmb3RjGmGULtTFM1",
  "key15": "ELWvf3LBV6TGmhLZ5nabX7ueuZerp3983Uud2FsdYyukZYfKLqFcAthLM8SX4wbHJfDDUudLZiojFiYnZYVVoCj",
  "key16": "4C5XwwcaE4iPZjvPeuNammhDmY6D6sMVELA7c2RsHp366B6q26L1DkkYDtZxcug8vbvaBp3kFbxT9MdqG3ajC7Xg",
  "key17": "nXwgqQs6DgXcgKQrCdk5hXQUaNiBzgM4VYKFCE6dnUSQvECVP94VVtDKdYT3gqB82ssTRafDCZ8YpMPBvVCu8Cc",
  "key18": "4i7qes25VBegWegPKr56ksavojuGnnuTBZcGv248ZjX1uqeArT8YWo2zTT8ef4zfvkb8skJLsDSeLvJ2AgPjLWqs",
  "key19": "3UVZehUA6qbynbnQxsxG7GFiuGACNo6JRGX5CP3Ah3S54Q99q629GQ5xmCtiFmo3mSWWnftHWXUPibPVNmoLGa9m",
  "key20": "5DARAMAKADSbEXH7TZs7h1zXSMhU6S19sG8bjJPe6VL5rKo6M4jX3NNKH2yN544YTu43yxLdHYwHESt938HeE531",
  "key21": "67YLKAi9DQ8N1Z6SzqVFwaDCqkBrReNN1LYtaJQBpQbJdonFg2LJUpMVeRy1yBSVRAyHUaH6AvfFuLLMUhBQxQrt",
  "key22": "7wNSTanfHoksPszhNxJ3eagc15MEonfdSmYGA5r7A3yTEJhnym5M3pHVeoyoMGeRkmLt87G33pFwWEGxXgZmAuf",
  "key23": "k2trWqFyTUmrDiVy3xHyV3PUbeemuMYBWdeK1CMQpobKdtt8Mi6nwibyqdqEu8kbhixmbTbWHHmCWPafN77NjEu",
  "key24": "2aCPopRtYs9BWVjNWVB44hFTR19bW8Mp89Epdr632bMqPBXtiEpBQb8rg8dqvMfR2u8e87x6yiEaQQmAkpY5bZBP",
  "key25": "4g9iVF1tGJ6w5QmNidLZ2ebG74DnRcQbVHQFwF34KPmqewmcvaBxURw46tJZARvwmC1gExPxRaEsC3GPdiS7KHmn",
  "key26": "3K3KyrPnHs1vvFMzKySYme3qnaWD6MQPfUbqzoJv2UuQ6f6P5x9LX72TdHjzcB9FmizoMfuQtXAfLJC2eKo9C1F",
  "key27": "4stmuLgfuEnu2uUtzVgBrejW62ErgSm37M3Ko8cGxUxQMSaTEwWFsyQHrRNNKaL36MCfc5xhEtjCrCLYF66KPQdg",
  "key28": "3tNzsnXLeN53VRPSFAiXaS1K7tLLyyU2Y8MbLYx1RQTcSYwRczMmGWJqcj4tW9p1xADMPpCJ48m7o4B9TYF3B2k7",
  "key29": "4SsctJvsBNYQXkU7c1f4CZS3KJrgyuJtY7LHLQFgcfhTPNG4JNHzo1KujChHwywEdja6a3BojWExPvV6M2TGFFzf",
  "key30": "2LUmCCHcA3CKvtAK9kecQMRv1p15Ukk1YW5Ax1uVuQkGn7wApqtVB4V5Q4qFvvzVDkM5D3k7gzpru6KqBkMNrq34",
  "key31": "5VZ1q4XF9oJgMvpSm4scmgKoQbz6JdMJ6UvpRc1xWKnxMSBgv4SrqV5wyoLwumgeKi38LpChMnJya1An2j682jNU",
  "key32": "iNVDRodLrTsKAqsct6eyvh68Ez5fPBqmDPHrfxyTDp4Ud7L34dNLAVor1UmbK9mF8qmkNnov7XjBzEi2QuMr3Rn",
  "key33": "3CDEqxXGLv6hXwEMsUXmybJhdBZ7eZtQMMN1pA7gcpbKmt11sJAXRDGmPupJWEDfYB1bWRtGBmHT4RM719gJLYhY",
  "key34": "WNA4xyjzPZUzf9C2j5ggX51WA3kffPanJ7Hkdc1hVRJ6PHtm2RS7im7gTsDbhRfTFz8i3ypLgZ2zWpxdfyYsJvy",
  "key35": "2LEWTo5ZS7LAgA97gb9MbBjLpeXoYSjseZDYeHBS6YefNmSWQpSdUEGGr1T3GfAqaCYZud3dZV9qAa4CTdHSrdnU",
  "key36": "5PsDZWfZQv1craMKrBRgK9RgkhqJnpTTDSe5axRx1k3cNwzLhPXu1GvitMv7zzQhNDfpa1fjWDpR915DLiFMXb9D",
  "key37": "5nMZS5rrMersJmtzpRj8q398dytuurPWApZ1LBAiBnnRnZUTBGp3c36xevxBv82VxfttSuetd6yZimbrg9x5YKJx",
  "key38": "3zgABe7KSTSzPdPmQHW9CE9vAY6pui8TUX7mMYbuVr2YTRcbsi6Nfx5me8M21aoQnARH72t9xLt3xiLCFpsQqqUA",
  "key39": "vNszMv6TRwERneoVosKqGcpsXPLiqavoywmHSns3QdZNfUu9rJ6PQGjWCwT935xqDiJku2dN8oAdVg7mK9krPSj"
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
