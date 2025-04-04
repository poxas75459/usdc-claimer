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
    "3Rzqv5PhGcNKSH2LqomqLYUCqHUXWQp4bKmyEZp6EwuPAnnTBCzMDRy95XmSmhZNbPEFvJXm1CAhfmwrHaejHdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqDD3SGpJiNHhSiGBXTFDGuCFuNk9SrJehYuQqe9AbSuSUqh9ihL6XaSmAjmkBE4hESzTw6bkUu6FL5FvXoJWCg",
  "key1": "5JCrtggvcHwBhCSEtQsYLJHc99cVUboYux2Qeoaofu2SZFTCZi9QwjtubUN1wwY3pL2FcX2SCjUZti3S3Yrsd2mv",
  "key2": "5FRuXMFwjKQx7qgADuK9Q2YvCARThgBGKeTT4Xt9uCYXHYx1sDwbne6jk6x36VyDDYyFE3X83QV1PpdWxUKQdYj6",
  "key3": "5rqpYctp2Z3GQxbZgV5RCiSE4p5WFdBi5RYh8fU3oPtj6mv6UcFhauk7yH5w5TK1LXq3jbqnLJuAzp3jkq9wYZuZ",
  "key4": "4Bkg2nnVoa5mRnkoCU8p2mkTetmqWHqwybNkesVGUzdAuF2ixTb5qZzg6DobCWKEECKjH7sGpJY7xA9ShdErviJg",
  "key5": "36TDGAS5k8ELuGUDsE9oc5DydgGKgajy2yAABiMr3nUVK5UWkUqraRpcSKfxbbw4FkvbTqoZJkUU36wuo7rZZAkD",
  "key6": "61ibQSj7WpR5qokPm3gXq2exCJuVP1agVauZA3RjMjTD4yJDB33XbpxwSpmyxioXYEzs5M1Z7vQipJ8JoNWeRPM6",
  "key7": "2XrU4tAAtix7vkBR7LJmrA3XHDEtj87vEtiYywJ6KEvYXJqo65yA2tJF2wuQxitLpT4mMjUWPrduprz5VetN51KX",
  "key8": "2sqkr5sAfoYtrpP8FZDcfj2RnnDoFPqmS7uhhZt63vyD1eduEnuRBKiJnR73Y2wUrF18WE3PWB1xqnWvwQsTFm9g",
  "key9": "37XySH6wwBjpb3i3rMAMBmYGTK2dfswvDsrjuMjtkV1c7Fd1t5iGsxJPkLdW9NCswJPKkTod4vFxsZKNeLM7iDCN",
  "key10": "26iAwtuepxPkb7X9FT69o8hhhYAHT7ZKmTUBiVPs7AnnJNeMhCM4jShm6dWRbPyKRB6KyCQi8tJupj5su82XW4MA",
  "key11": "3o895kvzmMGFiixjHaxuWcwRWzERZv341tXPr8MUbz2YNttEpVaBfZu83MK4qPnUdiySKJyq8g3pyTWTBmFjXUGQ",
  "key12": "4cZWKmsUgHU5py87R4rJP4fFuGkAF7JAPAbyL3oD1jBgAHkAbcuCHbe6BPFrbkPYg3n3mQEB2pzQNETaF76LWkbp",
  "key13": "2YwurM8ZVeBZnSiCNTDxqQKFNsGcc1m3b3QY83oHrv459mRFSG6ok9eiotFByuXz4rtwLALYb1MtYSfoMZiMMUL4",
  "key14": "2VsbqX6bWuHmHwuGTwttuRMh77f6qkPjayQBtRYjt9UjiunqqmGUq84xDs3shgg2r6P4w7eXTA1enxcJPt8Ca4DH",
  "key15": "5ENKUq3uqf4oro1733FMtZ4DRkbquXB7KALRLH1exF4xVZ3qTZWjQcfc7JrWapRQfzhojHqBSYai9CnFDRGmE1w2",
  "key16": "5HbNxwjvu3U1H3Rr3bk8tPSEE3C3JGkXfn8m7QaCXVg6T11Mw2Ppm3BDbPXp2sAkoAuqkSs3nrib4DK5nS8dUKrP",
  "key17": "4ExfbHfsG68Lw2eHRd4aBtYzgGMqPSWUc6459Tpomip4SUD5fP6CYKTHPJgXxr2HfoDux978U2dcmQisLEws2uCd",
  "key18": "5TiYwnrrHYq5QYkANekeB2Jd3V2uPfqBtFk9kQyp6PJTrNvqzMkvrebbywzqEiBrgveBReaAAudtJrzqNo5Z6xe",
  "key19": "3GXKy8J5KdBQ8DhraV4qfNym4f8vXeNbvozyfgqvZbrn5LwEEkkk7bBuSFV7r6USQRzYKU53LHi7McUT7HduiSSz",
  "key20": "YsE39m5DtM6GnUmMwx9DkXG6XZaxPR2fUBe4TRXkTEtyDvQTx4MxEKiFv7fwPPjzksTXXJEMJvkiwey8ZwQqDJQ",
  "key21": "45TtXCDt4rs9Dc8xGn46PoGtN3Eu1x83ySkgYdtcRf17pKzgCpDUvc4S7bCcpmdWZU2yqb1ufJrU5vEsX79Cr9tK",
  "key22": "3VMnVFC3YyTKJ8Y5gdxozz1rrP6fwLoZbQBwapJTrFFpJu8muJeztLXT7PJSdGDrnt16rCgxfxqmEZZmFYmc21Wi",
  "key23": "3GzgxwVdS7ArmqDyRNfjVrXivstHEgpoVTsCMhtWEBs5cgcqAUBaDa1Lb21BE8Y9UuQLEFoPef3MgvkvzU5RRMbj",
  "key24": "3qKp59HzhHM7STzCQ3DrAABudRSbk9gtVSPFUCN4YTF61MruSiTEgK6pcZP1Y85EbRPq9CQdQBj8UXKu3uoTWRS8",
  "key25": "4UsohSGtiWsEHwVvi9q7ASoZfjm8DrCToiJWPvzSxrgCvLyrtnRD34pBjtR2vkDvf6VVqegEN33ABUpzhpoEr5h8",
  "key26": "384xpFkTtFZdKKPsNmc6hJbyQj4bxUbr8p5Z3jPLNgZYh3Lh1NfyrSLoLZd6pUgEHfoMfpv2XgfQdhfZwXNuwJqK",
  "key27": "2mMP8tKD6PNT26wJVRhWbjKtjH7Y55gzcV3bmsBAcX5VoARNw2khjgxNKGHx6YbXjxAd56p651vPXmWnCFPmNvxz",
  "key28": "Kfo8UpA1oW9tQkGdQHPcB5fYdy4gtj1dmzDRRQ6csVKfvC4hY8CbEGPsZfoJu21JmFMAaDTMf5YQZ2tdeextMXf",
  "key29": "3yJbPvXhu2g5BF8rwcJwGywiLEvAzLaMVfw5yTr6PjvFep8W6cijT5rLaYoW68X6dYWhLetXM3AMiWi2a8RM8NJ1",
  "key30": "4rL21WBRnwBpE5j9e6jHzjp9tbsv1LXd2HRCLd8zbPrMnkaezcA58kDb5rSYpSbDab2NUXFHPSSuKXuA9RAx7zGR",
  "key31": "tc8kr2Hmebmj3sDrYNDprKzCuQjFVqCMZv3jjZLKBBBxWjKu4FSffYGVN3pUZQTQkVguqPetYumWg8b1MNfQTkv",
  "key32": "5JnK7HNjMEocfDZpNbqjrPhNxmGX3jHb22pyCKARafsfLgfTvvnLimh3Wdw9b1Ys8zM9VCmYNmiNYM6GQRmQkFxe",
  "key33": "51EjyabMTRnDWdqXeHAfrBMuLBEsGReKFW6d1CqSdAhy5GStQD73aT5PbquxxvgwYMjVUEgY37U5Kz2D5ND3oNrS",
  "key34": "2TLKFhmPKFNvxmBE1pXomB4B9QeQxN6xZiLJ3U1PPHXDBjUqBeMDxxGn3fUPbFt3psmnd8eYy362iTsUmihfK47A",
  "key35": "4u1ZrGmgX5kwvpRJxQ72AYvvCYzCJVe1aizN5pk9Tq7xez31Gfcx97P2XPSkPRxLHWcTxxYdFNRaRLGkXcrHzuV",
  "key36": "2Yrf36rv4VTLP447VCkwxHSeuot4RcGu4fieV7qry3uYB6gy9C6Wwri3EL965rJbMM7DHU4rtF5kpqTgZge4fn1t",
  "key37": "52azSvys1d2tzVjEmCJtwoRdyChu7U3SvJtskhkE9uNsFYqzQHpXJZGQecPBZmyQWd92Y7xWrHLiEYZB9f6wGFL5",
  "key38": "2orgWhhHpw52ih3tqohGMk66xoY2BzYaqzRxYj32774benWjNm3r75BJUqGjPAvBhoDJZgmaVXpvJt8UdsLeeUrc",
  "key39": "2H6PNobVCf778ghnXwRzg3C17RLdkbY8K5qwsLgRZWtVbHASfCRR3ocTePuxX9EonRRHAoASAEMyNYLJwsaY7j3c",
  "key40": "4RBXCSYXYzTqRiZfq2Xoj6MMZSHvDf6BmfhEcho213UMzSLMa9nmV4Di2JjmM9gowVicCjmC3ZhHYNFreo1EaXdb",
  "key41": "3nSH7hAgVcmb5PRMGMWSWQ2vfUyKVJnM27XDTXW5zuXN21sH2LxAcjojAhJnTaamykYL5w7AV5d6i6RmRDcMqXUT",
  "key42": "FSNL6hvD89dwYREHn3uW6heYZQgYiuyiKFMnmrx26uPu6MJbsrMnDFJ4PzAhbqwNc9mcyr8gnbrd4zgjVfUBCkV",
  "key43": "3mvCFkEr5qf3HJr63k7LLgZS5746UBUkkaAAxvAdEEE6Ha7m9Fx16ZYchyniY8gcZqK4LCpTvANKZN2b4mXoTzWs",
  "key44": "2ofidqfEaGt1FG81M6kcQu2HuVWeCbG8bsij6VhYtVTJFzXnFCXPeawQadCSMxzWj1LBEAv8936jZUFW5F5aoebq"
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
