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
    "4saox65hR797wHDBjn4zAGQVn8sC2vGUsSAdawcRDmi6CbMYauyxodXGSfuY6f1pk1RJ86RVVx4uQbWQu2V2VubM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oj59uXzU3x5KYGJVAqcWsQ9bVeLLBbTVkrjZyxBmmq4oGyYFq8cP4ZzQK4usL8aubUTgbBsxY76UVohdqNXgXNV",
  "key1": "2ehQUsyr5FkoQKFhrhztFzmMMXfzFUHsh5uMSuDrqGH1nacZewpVB8CattDLciwHJxKJb5nzQdFDQ324DMmWUtJR",
  "key2": "5c1LVKjGV8QDVCJPAbcWXb3ZZZXuACXajiHj6U7UXibF4uccSwjYyhppMeDmrTTJQe4FgYQf79Gt639w2xPsLbSz",
  "key3": "4P9hGf9ZETUFWkPbL8YfyxHYYWvV8NUJsfdf52zc5F7gQLDhhjT8TjN8HuaXobBJMLnmZRyzrwQXc4DkN42LaQCE",
  "key4": "4WN2zXfdMLWBnPc4w8RCXG35RejP5BXgZRAoVHfhEC1U4bBVunXpkj3paYcMuxyc564qKTQpX4QPvnHiZGuWWqid",
  "key5": "4Rgu7AjeqaGna3qXsJE8vQvCiwiBYkgGUZGUDMCbjh4uVjabwomM84D9egeS1TeFAUbFgut6ti2FFqhCqjfD2nuC",
  "key6": "3u9ipy2xagNf92kkMPtm2aNohZzYguEqQvbkU7Njw576Hzbz5265W7EUwhCd9HXaMgSWi71HMWKDT3d9GjkAVxyX",
  "key7": "3wGbmAWX5W3emz5mKX5dzXWmMzLtyEKjstJd9jeUeuEFbfWsgHJDRGrEdgntB1Y7V5zEFEDE3fcyAXYveiMr8G6L",
  "key8": "5jWvzaqSUW8GkNovdVgzxKiEBPMhoj4mzC2DY2C6t4ebwBdNGR7VBhqs7M1JGmKXTWjebAkKxvjsHy3bQtktpLLh",
  "key9": "2YyKa3tsvZgQJ7HqfJn7mx6F1F2jPuSTvcB8vV6hZsLf74EcftcRm5rXBAbHs93Kji6rDfFzhMbCHkX6ZpEKuHQ",
  "key10": "2EqTdiCiZQJF8J47sD8unQhArwVGMGGP4aZ8EkuuEwnC2Mqy8g1bR63SKEP8jWs1tBdFepUGugWWzkuRbBS7Qkbk",
  "key11": "mTS61PYTGCDHvE4zm5SNN8DZWZg2i121WPxYur5H1sWxWSwvefXVV9dhDcWuy8qPiNCWmC5ahWWKupfMBLURdCL",
  "key12": "2EV6toyabDKAGMT8E8F5Wp1amXkgVAxqFBBt2JaY7gpQnQ7Cf8Zsy33CJCoAbdjmvxMsqVVBSpBwBQGhZvChhs53",
  "key13": "54Jaby1n4ZTdH9MCCrcHKthA8bQRR3fjq6pHjBYGNfyjL7VubwuANaUFTgyLGYnAouqTsNaPZMjaNuYShn1X5Vy5",
  "key14": "3rMUFkuwiUaxYDGHFyifuHSyrasMBm8LhfRmmAeBV7aEPhqL6rgx8VoADHjWYbqmapuHEBk7gmpiaWCpdyPucREA",
  "key15": "3yoqYRCPYSwyvfrz166nhe26hnPmmqn9TqURBB52f1UcWkZ9sTjWwZkdNGbocQ1wVy2WaVkeH43f5vMnfZDZ6Q6y",
  "key16": "4wkJH6chJ6VoMbwLv2KqmMVPZ9Yz9rpVUKHPWWtoVtuMAbiyW49hhF9fom7x38xcWYk2g7FNUZytX5Qsr1fsLrFL",
  "key17": "2CNejWj2qNAcsqQEeR36dk8RvpRc58BTrLPHAXN1bgJyx6GQu4cNEQHPA7kDSAQAhpHQ3pvVSgH1Tq2c53jEG9Sb",
  "key18": "57NpUzSHkbrPoaWo61QFH7QU2pWruSguLwbgrxcFsKkrFEwFbQiv7gGSB28W4WqhYrzNwHqAPjxZeTrzuMv6NSTn",
  "key19": "4p7EjFL7THziVxcbHDSzkDxFj4Aczue7bHgka31Bw5NxRCHK6SB8JW6WQJpEfuuS2BofKWsVrGq4k69ntF5ZbVtQ",
  "key20": "4XLY1qRJrE8n6KHq575N5SratzfgK5h7s7FC8baMAAg4TKo4V1qtBjEZCQ1LvEyo2nDxGf35H1HFivYrgParkS3k",
  "key21": "4q5keResbTu3NKusNSjKUxS4Cmmj16fgMUUSumvVg3XWeTbLr5tTA7zySie14Rsekp9g24qTJZ1n9vLozPn7wPNY",
  "key22": "2HG52ZEVYHwtNmnaRtXUpg3ijJ9kNDXras7vcHKu78D1K5pNAMFu5cEnWNhGJjHRpKNYWGyM64xfkmZbNe5G8GWi",
  "key23": "3NAT2c18zNjTohyHJcjwvGUB8EaH3L46NDPrqrnCXSP7yf5QX2irFG5oLWB6Jf4LTaZKFZtUbPK8ks4jWQZPUqgY",
  "key24": "2sUFtBadBX7nYLEHsofYFesTxDbJMeKjQ4gxgfLnq9XKJvLN29xEq7bWymGgj8osFNuMUFBCBgedTDFNi5igWQB1",
  "key25": "7jX8moY3iBxxnSpw9Hi4J2kEC4jeT4apbRGUBDMT7SSgfUSYqFy6bvF64bZjTaE5yo8eW8cPFS6a4NAJbXb6srH",
  "key26": "2a97ToEAvDFrSbEfybL4rYiN1UEYjTAaaH6QKF6U6YmekXPWHb6wN6L5nnW7f4FogdDNVNzzsZZyZ1yLkhU5cJX7",
  "key27": "253BeJrfr1N43ssPN4Azz3xrLFjyfZdzMQ3bvqD4a8sj72Ts6MDCBh9VeosG9ueqtZUi8hGzogG8wxzgYbjTApBz",
  "key28": "cFMGd11g8g2RwZ4jwhKmbEg7hFbKn6ZebLDKRS36RPfc5GVsde5mZ6SBjLjVMxruVc9KEBh5zRD2LwAscmRHyY8",
  "key29": "2FZCynQdrPasNeGHDK61nZxPZehUgEtV9YuCfo5Nre8WeJdfKWYAgXoddu1XwAvAVTceJRvbQZ59QEcPvNWQcCxa",
  "key30": "5sdXXEhzS93i9rvrR3cdraMthVwcDvWsWaYFkSozWY5B3n5c1dVnSmAu9LUELrgfE5FMkK1D88pV6VNLpHy8LcPE",
  "key31": "4yZBSEx7TF93Mozefm28hm7feTujuJBALwxTg27GsKXoVvzMrxmGrKiGhCbsdB3Q3wTFgEgh6A7CRcJzc9JhaLyQ",
  "key32": "52SMsr8EeDrdis5cGGBKm53sjVqDoUofCdkXiLSQ4CuxUikFdzZ1uYxQQVoWvdAzL1TK8cfN9meMrgjs7hRgHTQa",
  "key33": "MMXVZVn2UYVtS6JE7eod73uZNeevDstC7sWSDabVtCcpTkUbfs2i3UmLqEen6mVDcVti6Lf7g1W257cc5FAoFoB",
  "key34": "4HEwXGeCSuD5oqikjvrMjHS8vuAWoh3DzGAaUg8JqMgWhLAbjg2EDVDrrBVpVAQfB9dJSFKpx2mNMBLtUJ1Lie1q",
  "key35": "4WSsmiRkoieNGSvaWvTmKAyZNB1PNenQhXSyPeLzM9Pbjpozgqy39VwqgMPtdtdqsLW9osSbvxXVnZc5CnmBXhkW"
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
