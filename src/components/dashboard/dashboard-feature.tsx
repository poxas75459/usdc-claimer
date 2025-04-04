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
    "3R6KbyVcBDo9CTBfzX6emV5T1MFSLKAZFbqRM6dv5et1mHCs6ovuQRBnGWhz4myXzCFjpGcKb8NxxohUnDvpjcYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HCeFfCxRdBATpEyrYVnQcb1dgkkZ51CmSAQ2JoS6VXbKi9hh4ZDd9JWvjBELgvu55vMyKQ1ryk6BtcYCKjheWH",
  "key1": "3uKU92NoWLCqx2U8KGXmVbWG3AriwtGQvSLv3Kq55cCjA248FPSYrrDoq9EEaDAPy65exDxXXHB6fZYCs6M3DmVw",
  "key2": "2GfgfFDcQgX91ZtABqhRPoPEt1dfZboEWXFSSLrduQKo2k3Dqt7xsm4V7TCUgk89RcTJrhEJoNPJUakTpMRECUnF",
  "key3": "5T8GYsLnN4cnV4fw4NyNo7FAFtZRpRYvvJdPV8oUjJAPpkc7wjHHv2XTVUbSs4yXb3hFo24qyGyEemo5rpfuTt39",
  "key4": "4zDUTf1LbLEkQoNzdVXFGdeWj1FQzD6zTpZ2uQ2egjRvjCpj7sYjx5zcKqPo8pD6CkU24Xer81TmMMjFH4G1wxah",
  "key5": "4j6B75YsGQaXpT7YKvcDCU9ERbNby4CCT59uvu6brKZxbn8oLtqXN1uLm5UEuRcSKRYKxdB5yHFM31t9ik7CYwH1",
  "key6": "4xAdRzRmv7un6DtKj9jFBWng7d4PxTf78VQ6XMcvYAjE4qNRYGcKQPwAj13oQV4pwFGFZtQ2Y7gXqCBm8D18GtZJ",
  "key7": "4g3wPAKaRHSqbjuDNXW16BUGnbmJZ5Nfp2pZMaB7LABPPh8jXPqKiuFzoxacBrnKnQSL2Q3AyM3wuVWLq33GxAwz",
  "key8": "2MZL5xVJywVxfnta1maW8HGHjp9ubgAyqGvHQNK8J4YGhGQJJ6Z7BvwdsAjm9jbCJhEsDJoycBLXeKYAUp6kJupt",
  "key9": "4mpLim7cTTHdBa8VmafZctBfpmiZWzC3Gc6wuqg85tppdr6fbuPJJoFQUzghVLSA8Xbrhn89fpGZLNgvHgVSU6WR",
  "key10": "5jhKhscWMPRZ4mN6Z2R82BfDQ6jeN9vSMxmyZ12YW635dUbtErtAwZUQ91CraF9QYsXUnrKqJmQrareNG4tu57N2",
  "key11": "ExCRECjQCS6ge4bXQztwMZnt7MCnPnkytoyHFF8G4ATuPEnYet7YvB2wFvGn193w44PVXv4fuNtZyWU3ivDBjWd",
  "key12": "2Zyk2i1m3aKryMgfY3ZPxjSKCq3WeM7b59gdLjw63tGzCioiieaSp9Xg7M9itGbSwKei7wBBRAgA9KHfW7Gaqbrn",
  "key13": "YBBw2uMu4gvvvSqQgB8KV476GTeLKRRP3guLdKED1hUJHDj7x6B723av8MZnjTH1yyskaB4B4dQEC81KxZBFHaJ",
  "key14": "K9P7Ui2Ww2oHEZtXajBbpYTkQen6rbazTez6d36JG3R2D935xej7Vj3Mac3x16veZUypnZq3m3r4UKZMfdaQnPX",
  "key15": "5ggdFBZSaTG6mNhazboSQj3Mxb9s6SvuQ8yyjXHHf2QXNVdUfz5YrJxhty3bSpHbhoqYrUhMcSnEeGSv9V3MbfL7",
  "key16": "5wdVxQpG44duRGMrdFVGettYxhHJmBP4s84P3BcSZmwrZmhLRcgmEoyKCAcHR5nxeC1z5TEJUJDRxdCT5ywaQRf9",
  "key17": "25zuFunQL7eC6osKiNxJ3pupuECvufqMpEkxtrJ7oLN4nhir9Q5hxCmtKqWTJ9cQgkUioiPGfWnxEnSdYGYMtZzF",
  "key18": "3iHaH6KPXDnTyrnyWYTmucn5wPSGkftggthPWH3uh3z4oVNaJZFmooGKpJgLoqr2FMY3bxEsBYemaYwDnPmepNKk",
  "key19": "3qZ1G9vFMAQwcpKswnSnPFKhdgrgt2FDKfrvTt8KYg5sGLT8HLgza3FeuTwqhWu8ewZp4WbB3wEDUzwzpDBnQkMb",
  "key20": "626oonaXfo5vUBCiip5xKR2ZWx7dNCSwZWeyamHasLhz8Pt38q1U3Zpp9cHTxbXeMeGmoR1uqpLbW4sb1orzduiH",
  "key21": "3AMdfgsWc3YNu7xoiMXtEThZJQ4WtpmdgwVMMCtJSG82AXD7DyJK8PoxVTLJ4N6oLtf8VrscpS4KVJANF6tiTvw7",
  "key22": "5AfKyFFV4P7PSCVEDJHBHdyG6B5uDf2UXAVWTJFT3bFyoXXKaPU6W3YNhZQVmhnHk64rxp1SJSu8mnFY5no8GRo8",
  "key23": "4Wk6Akx2ZV4JNKzKquoVGDLtvXBt3DFR8qJtNseArFCGTimm3AsqomKteTrK87zdM2mumb4YAvqdhTpyEJmNdb9o",
  "key24": "d4qd8s8o1k2cpoW9443SQwFrqtfw1mNxfoRMGKJtdQAgWfcRtWoSURYDHB94SnMYPebWSNqoptvLWi3XkAXk3Tc",
  "key25": "K2VT6smv2f2LbggDcpt5ZcXAy4TGmpueWjMcx9N46wAqdzwd97h5T1LqL1tdVo6JzvcC6B4yVnmkH4p24wj4GKr",
  "key26": "5BLSAowzavXUiK5D6wBjaxNVCkvWUCETrV892tCDBae2NAfsNcfJ9AAi5m8bSiQcbUMEn5nspwAuWcP54GcidzNP",
  "key27": "45nofW1Ts1HdpGHP5LgDHLbGcu5dSHiaggMZrdZ6rBwn2rgxGPTWDrPWrtM8UfCxqHyo6PNneqy8inaSCFgw5zeR",
  "key28": "4gTBnJcVxAEHpuqfmo7hAYLdDKDtovHahhUpZLeMUmYg1V18Nr4aezi1rDVHWWhWK37cEng88UNQXHADAWArmuYS",
  "key29": "4Qc6TxD1cptS6Jz8xcZnB1tyDmtStmcsS5up7sRqzhzknyKvXLFCGg8S5rs5ciehgnKHTVQLNqaLwUiWnFCqBcBh",
  "key30": "3zA6PyyeQpK3DLF4Sc1KoTkmoPKkwyjgXMjbjvDkjztMYZcANdKyJ8eAqz5xCw6KUN3neg5632XSMzjbGMk4iKQA",
  "key31": "51xYYHxKjnKZwwGqyRk7cf36M4PWe8V62pSxN9s99WyYssohCh2gPCYzmSZvk4rCDA1sPzQPQdVW6QzBVkBMpAzv",
  "key32": "2JWctDU33sjXVk8JwLtHjqTrf8uCrg7a499x7FrsyMWnsV6ynEDiAWBpNmZqMseE37dCHd56fUPbZLrgyEBpLR9F",
  "key33": "3VdqTS3s1heDBh44iVDtvYroF9vAGKy4AuuvUTh6aLVCdU95P3ivhhWe6BptpUDwNu1FVqHBEELKUJvpez6ujGMB",
  "key34": "5JaENUiu9xZoKVgcPvYcE2u9QPub7Xw9RLHaa2C7tE7RUmvhvvVDKX3o1BhBYBUrFFjSx5G3qT71kd7GXUgN2EJk",
  "key35": "2TV8gKtdnQ7VKiDxrTQNhHqh4UquKmz2RJ8HJ6sWq8pirdm8mN1HTAhprP8ANQd1Kn7iYqMi1Erp8KEMJyAQvfPY",
  "key36": "9tmFAPULwPtKvkkXVRgG9KBfZYN1KbCsKvjAhBBEPa5Bo9MH6iEPjCFMJQcNoCnjm47fiouLgQPEf55hQ1JjDKJ",
  "key37": "5GJFpFbJJDqHXUTBjHxDeBF8Ra9n8TjrAW79UGGCkaipqvhMxfhnbMjkSGEjPmHPnwxfjr9e4cvmcYEB9KEZAKLw",
  "key38": "3jVAoiAmntiib4sL7KY3DmWj7ykRC2pDBfAARgMkPSGFSggeZdUFcbLRAcvwY4qfmBxJCjb1feR49xMqMicKarRM",
  "key39": "4YanM15EKbroWrUb2J7mCyTj3PcPgsnfusKnz2mxr4P3rTR9ydNN6my5G7MfNQrGp7T5a6eCdRYaWv5iEYV7noWj",
  "key40": "5b6pFHuonkS55A5fatDvAgN214cdau1DUJFhswBiBVoFxkuNwPu32NTu5bKDEt96bsGiQFa58KyydNNQJa1hKdvu",
  "key41": "tsPPkExVXVpYC8xPK5jCwNJ5j8gck9dvXMkcGyGqyqpVqr6YcEjuHKJKsUt1UhLCSi4FBsYnudcpbbVrjTMdzKs",
  "key42": "2DJj5jf5oFAqhfNUoznBsXGYsC4Ly7xiTbN4MRgTbJWZY7iRN5ui2b9thQReAynNC1YkGhprbFqnBscFQoJrPzVz",
  "key43": "5crB7VAEFKEL471TLrz6jCLnQdCuW2MmqGiqvajpLSwZ8Sc26HNtZAfWVKpEcp7TWJ2eNQMEwr6uFiR5uWCch8cA",
  "key44": "4QNAvt6PAaJiw9Kr8cfBoaceBPEifQAWezLnuZMa85ErCwmA4jXtewrFjqZtaCk7xmt4haNXxuJ2Bf1Z1PTJaPPy",
  "key45": "2s3MT6Y2UfKxKw4RqeGw1cut36dAZ5ZddAm6f2jY6K1tesi4HAPsCxCB8mR4QfRo6greBnaTbPxaUmFHsFfYtuXw",
  "key46": "3GH9uuGAL9sitWCfaYJQjE9jFMQQyfxjttVq2rNH4UskUUj6L9Y11MiL4krcYVBUwv2i8WWvKhyV112kbo46uWpD"
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
