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
    "3xynsBmm1uucBUBMBv27rC6Vi33ZCy5Nc3XHhtP9UsTuYohBFBBPN3iJ51CGHkHkV8yi9KUQWKXFzRrewwYK9o7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwgJ9qGgvbVCCfWRsyjJ3oZ5wmPc8FTkvtRJhYhhduA59ntF25Vc71jrSEodsBT8MAgE6TuT2sSSgJdqbKtwvbj",
  "key1": "Nj2kgJuhPu58Wf5Lyqj3brFPCG73bTHnRjgpSEojJWQVbFgZ2VrAXjzFCVCHykYs5XTq3qnD9Xu6bUrYJsHVF1A",
  "key2": "sHzqBau2qKQRer6bNpAVSygJo1HVRmLYyJw2GetsWVD1HuYYbAXA6FnM1HbuHoT61363oJpe143MnLbXKib8BEg",
  "key3": "2YHVLd8QgG54e6qLSgJtzQk2asanPqhgCapJnJKerHZAHPE2n8AVU3nyW7iCEvxMMXd3EXfJohzrhH6U18VSeHgW",
  "key4": "4p2utLehaiQqQi7n4mXnnFe623j54QYaHMPhNB6kFwf4P8fTpVqcVjgND9HZ7nrcPFfG4T5MJdyeZVfHrMLKFbUy",
  "key5": "3mN1FVqin2Ex6sGZo34GygBL9byS3kSb36Cbk2mRYksjNPbjaE5QiRwGcaXaDovdRqH73daryVBzB6ZhDm5TAdw7",
  "key6": "r9XsSYMjHm8RdxavfRDhiLiZK3EiEfPLg8PoGWho5TgA1S6gCycfqifMm1gaMMDuoPYYaQYFywHN4s4cH4YJHW5",
  "key7": "2f7f2QcSAktDdmBoePFvxUB2ac3w3mfX4gVBQnZwYgFcrwP6gu2aXN9gNDAYi3V6fAHHX9NEKihfow19WmufL3X3",
  "key8": "3JNJuj586TyZgvnGDespE5VbouMnudHzuW7kRZq5qgLiwBPTqudYhdccAs8fySwfGd77K2o7YTttxLXhnYxDBiWx",
  "key9": "4nu5MbmuUZiR7fAiv65SkGWnkQyBd1Jnv2J4Mqo5PRyeuWVAQafDR9STdmcjCbEyTLjTqancrndYm4qtZGRPiRfr",
  "key10": "2kBmScwfnBDyMLWo8PpmFvfC7jRyF7iEU4xqdds1n4Jr38mPmcHidy8GUdG85Gs1wf1CAKE6AidZpAJgJ9zUWrwS",
  "key11": "9h2nLy8bLnHtvq6PKMsgk2V8k3p9kc7UsgbXJE4edAhyjyUG2s9p2rnYJfLhjQBP9gW4pQgA68gPEQntnAqyoxU",
  "key12": "57F4nF5xoTtAdEsyfxzKYuA8bBxhL5CKx9ygNTQYwrdNYTmq6n41RKDtM7aeDjTP5NbpAon6T4tZoaaKov4eYYpb",
  "key13": "4FzZYgpMSam3i789j5yt31BYwN3mELdjybw3GyxNWNXwWkpr4styYoBype2iCJ4JzQjRfRAgNz812zUst3gu6V2g",
  "key14": "4wUSB1GTrTy5MfXDfoLDzbWba41a4eS9E5CB5FT1kems9Rt5e8A1gyptM3rkwjHYnUkJFib4B8V7VM6WXYrW8bor",
  "key15": "2Fof47qWT7CU9vaD6jLbNENAkaAw5v72Hzwc1oSVmH7buf5C8ehgxn5BMgCn3gYAy2E6iVHNc2uoskPNn5b3c6Vi",
  "key16": "5x7xkYEyqW5nptT1xJ3hH7qUbaWiC78GKWBa972CGWwK49BFia7ybmF6dzLwyXBFnj2ho55LbCr4zjfddWJzAgXY",
  "key17": "5kez6XzFoG2uH4HHKLwPs4uZ8dfmy7e38j84bqpEHVXuYKMhVVtC6mxzvLE2KGRaRXsVnYdgnrRoyBvQGK1EqJXz",
  "key18": "4VSNmYHwG3qa7aDGmZGcLSk1c225CiGy8ZkJSmTicDEJcejNk5FvBe4NoRHLo8pU38VWt5E2bwucDiKeFjRLaNzF",
  "key19": "HbvcXUidCkrNVudYtEcSoFSmD6QbLisptuqL1CTNp9G8Hyf4diUVtxRJTwAKk7iBGSgY187MjUePhAbAU3e1hTq",
  "key20": "4NuBjuWA6WSVdGinEvfXibdkAB2PyG2X6pePgGvVsCrcW6SjYMBCsDKPvGwoMsxBM6oXyAdx8riTwU4PZXwHaC7g",
  "key21": "3hVHhVgNuXab87SiqNC4JZAeyK7vAY2zffjLG7o6YUiUmNzL2UuFKrJgqTL8UKqpZTrp7ANqAawod4pF92VyCpPT",
  "key22": "2cNkW2CkHzcvTEXsjX9TjaS7VyMDuw1YpHE8ea2qHYssgCzDVFP7BxJkissdyJzVsUw6bfngSiybnis1EwievBaw",
  "key23": "vFWHX5MpwpBw7NzSY7HCZN3DgV5Bt5nHHUaXyr5RHNhLy5RvfkDjUTQYgjokvQuxUmcfiuwJb9DbTxoRuFngTGh",
  "key24": "4DELxDrzAeMN29mKX9TvH9QAriqLG1JDYn3ZN1GFZxwNd2SJtYSfyegF3smTfdhYFGzeBgcAmXjimdiJDr3byzjn",
  "key25": "UGjEx5YWGzwexKZ848MEh86jc4FAWMTJEpHvdMKa1VhfxfQWtDpZ2azD9E7N7gbvMYG232RNkgpMrWyzP5supW7",
  "key26": "22b9mxgNNFF2RQhqKyAqze4RJxk8bKsguqYhhBCaZ7Da3KpuTBunTcuE1e9tdUEFojG8FYaAGbLZnWmYjQFbwQWQ",
  "key27": "3vDWam3uoGqeSpPWNYr5rP5LoPvdgTS2DD6svVADtzLxyDiLMrKsQJetLFkGBpMt3HWaFTZoXcQdd4rRpaiFsSru",
  "key28": "3HkJM4Rp7uEcjrhzezykZV1CdK1t2QXNwEauCEyYsQEY3E1gdsFgHT2C2Lg6Y3iviU97SV9AVQ1eNR9vvsvJpT4C",
  "key29": "5Qb3x1zJwMehihqMczGbJza3LwqmK2pCzrmGEpePhjemfZEZ4y8fZWZFCq2PoZoJjAz82PD28CaLxjp7azstrBcn",
  "key30": "4gC4eJ9YFDZYgpxmviTGfTQevYDeccC2x5i3iGncEMmPrpaiT45vLSxrykoFBmHLZgzrWr7tbRFLQRWaQhE6BAXK",
  "key31": "5v8M8cwcm6Lj8tgd4upgvYUXBTUaQLXZwC7rwBd8DcuPTfW4k2m1pMwG2vghAZhF9nwkLFiz5Kh5G9hBmAbJHVyL",
  "key32": "4gYjSZCyRg8u5NRtmBgonCSDWZaeg9DUwdSewNVjJYEUh85zMPVFEwtrPQ8MSKJM8Pik4xb12qQobFCdVX5JtW9X",
  "key33": "PYZRJi7w8UPi7tL1FvE7AHMnoDguabwbNCpFFgxXQh3Z1GahJ7ft1CJT8qTKVmVhkfoYRiujyrBkDBLbkYGQ62N",
  "key34": "4jf8t4cJubn3uAghQJvjfqX1XToyp3rTHAWQiMNxiZE5KRGNfYQfCWr6VyTErWKVpNTzaN3GPkoJoS2JpGs9ou9D",
  "key35": "3DsGmmbdi2LDMb8FMggbnK9yKckQ2P1RH5yuY8z1tNf62wLntBRo7sz3XqJmg7kHpYuC8SQhEAADkFds81RTWcRN",
  "key36": "2pZjEPocnYVYLpjatVroKpULtLyKsoXnozDapZ1Udr14s6BBXUvmTJm7JyWinvjQPsjK7oRxKRnW9U9gkJYSR9EM",
  "key37": "LznesnRZ6a76zK9mCQtk8c2uQ5dCyPgmKPeRHDs9pD1ggQRhKs8VhV7zRDJFZcmbSUsnY86wrxzUVR86Tc7FEw5",
  "key38": "kqo4KhJfKSVXmJxZuTY25VbCYmSXJMj6g2UarF7e9qzJojFPo5Y76MJUMquuksDboia3C8peAPYy4vzanXdtcsC",
  "key39": "64pYsWdDeA3j23SoViFckuJ3URoVRxrFJGNcwG6uqHSjyuvWN1UHUpTec7Yqa8P16nzHWKfFskYzNwBnJ9Mzpnsx",
  "key40": "2wyHon7TkfAhqBhdLfWjbwWobJni6BSizn5SqCFoqAzyEuLdsjtMJMWQ6PoXLnpTQNxxXJuiZoCUnoBRiybXQR9U",
  "key41": "5ScvpYFU42ttQ8XbrR87zCFohVBp9LQZ6as2GTksTo7X9zfBBUnSXRiFWEP44Zwe66rcHU1CdvBULarNBSTyFTZ6",
  "key42": "5racpuLZ6dF96862BudLgJqrZc6Fyy34KqC14WSu2W9EptA4NbX62EGGCPHXynQbGMgPixxqaZFiwBEMn48h4Ab5",
  "key43": "315Zw23Gmqmekur6ovuhxbNN4bn8Jg7QXMPrLQd8hgQaZLbuuTzFkhSSvbvNiUE1TzTeCkJeo7vSZiyVTRAJvZZD",
  "key44": "2qnDmQY9DmeBo2fEAWCYkpHygLb7EVCCUyRUMPa5qtQsdFQkEB4fYYsgfrF3Ztit31dKhRCXdzeXSM3btWxvTnRm",
  "key45": "41tnAvu9JT3Nv3QwthVS4QT42GWdzTnYLF19hYUzPyPXJnWzGNmWYWKkRabRD1E6wXqU9Gtv6F4NUCcJhDFogYkX",
  "key46": "21j1zzELQ1BUUsy5PcKXhh1a9Qh3wGcNaSE6Xqp9UNAERhjGZKxjrooGXwbXJo6uWfPuh1ruWd64Ye78ZnkaXto9",
  "key47": "2MFGaU4oSdAigMmV1HQyXMQKqeCtSbYs6TLBT4sVEyVRtGroorhYv5H7rfrkw5TSE77Kvsxv4pEEe1E1qMPzM141"
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
