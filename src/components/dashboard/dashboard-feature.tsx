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
    "3YCNrf5Xcc9Lw73rnsKqT44aR8zuNGBEpDmScSw3nRxLy2fzU73yot2TQQq4nZXXeCCacfVZhQVPVMJAreF75bYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8aSWchjeE7nMXo15hRRwbrnQjJR75cfkwEz7jxNxEZ8QWhQK8PGGEvFDGf7sHahLMCQwYWBHzfexGtX2BZHMgV",
  "key1": "2GBb2CuZWVTLBeBz8kzRDu9ouxMDbf1duj8BVJ14M1aLdVkznEKeB5JCjtC3mRMbojA56S7Wd4Wk4ZCNsKSriaHX",
  "key2": "2K6irTZSapDBTCB4JCY9UEzzb3mDSYV6e4pUX8nCRzH2qGnsGd6kKrVkTR6izNH7vysfiPR3LYU622KRijv7WntU",
  "key3": "3sswvVAvFdGnXfTZ6gWFegm6kkfw9yfKfeiLBitafmzhnXvRy4KcpmVEimTURn8vebXMB5Cjd3voEpTbzBKAmm1R",
  "key4": "5dddkCamFAjp4NZh8Nd8f5amGmLHKehVKnBZBGzDeUih4CHAhJFHN7RWcW16JijxSLrL3tmtVfVvTSpimUkSuqfJ",
  "key5": "5RmZewtyxc4pgwed17WkHNAU47n29RPLENGs5JNYG5x9cp4sWZsfgc5zn9f3gfTG15TBFFu9zH5wTYHoadUfC86G",
  "key6": "5mUVKKisgvr2xaiSeNTvAQtrUe5DnjvaiCY1Aq8fD12ccHay54rEgL62FdSHrbiieraMjcpi3uB8RdHjzJGNd4xX",
  "key7": "4kEs1F2fRQAscjAP6b1LDmX5myVgF8MccggmtB9Hd2Rnn6kNBcmETANf6Xs4VyqLJo9paQmrbz9iuso1ne4kQfUq",
  "key8": "5TP7fD6wQ2spCmBzGMfGzu7WkdvLRxwJjAXZcGiGSBTdgJKkUJxTGtKcWdDDdXWFU1hA8897Ym5jNt8HLmwWg6JR",
  "key9": "53YeZ9jZbQ9dZs3mMwSWsrTyHfLiy1ybSKGWuNCLavCemnnxyLtbAZjNg6bmWt66wTc6aXQrqDbpqXgNuabniWFw",
  "key10": "5pMB4M1Afzzkupae7AztFLPCmkWr5oHLx2ucSVrqAbYCknDrrQ4n6HmV9bGZXB9YAjpAtzMhKzWinU4LqVRd6cQX",
  "key11": "5GgJLuy8rKBRywXGXk9bydvZwfa5rpPV2xmhbW5aCw82CZrT1BnNJYwn8nEZ3bCTxUPJMgpqH2XxAFwogCYu3BrY",
  "key12": "3daEYsXxpEwtwChXoSuwqtKwGBKMdUnihnuCwHZ4wr9tmvR8mr9RCytDYWsSvT2g4YUZv53WcboWFWwegAM4ut3q",
  "key13": "4R88TSH3FT8bqAhDTYmDxPbQTw3PJtiHYP5qbHrwd8PFkKTMA9CX6jWmthMbeUC72Qxz3PeDrG5B9ye34tmmvtYr",
  "key14": "tDqbdKTxrsU8udGJg7WwovbK5LcVkVbysNPVgdj64wb11WSwkjVwdk6xweru97LZD4qSRfrtce5BfdX5MqgRb5f",
  "key15": "2PLp7YEwadvTmV3S3FQ29oDfhSi7GhYD1T3hFWEwWVPN2vA7YJJ1N1WnLxAV3bGhEQyjrQsz69xMcSQYf6mDUkQh",
  "key16": "5duUrM45ZGbgUP8GpGRXaqAxgunqyjxqYYzCiizTuKrFo61FQarPKXrftpGtauJ7Bsq2EPtNVodh2kNHUwjVK7ch",
  "key17": "3Ekr582m259PkrZMpNcCwn1nCFJ4t47rUy7XGJNnFux1WYUzzVPNhEQSmcbMyfhpHT1E8RZQVifd25bwwbbKAhZs",
  "key18": "3tV11xuevxfrcJUzntkczmvF57T82YDKPLMa3qVrBDN9k13jmPRofCsxgtKGu85cFvAwLKZkmMaCVtxAqxjwhT1h",
  "key19": "3wEcFSwiUjpQjc3TCbV5QLPZu7syFoCwre4387zX6NLZ38KkrJjtpF8ozXY92yYLU2DBywAM8baV1yueTr8YGvfZ",
  "key20": "WSF7eyVRiZW7F9DKbiDGQvVvRyijowV3VsTymztEZNvbwoUuLseMT6W6FxqBv3CjYWFMuzsv4njefwYjY4Z8pZp",
  "key21": "4WqfVwCHJCaQ59yxu5irYis1notfMETmqEdBJ2JZ75MwZMQZLiFp8dnLTgTRzAAyTDhvRNs2Z6DKLeH7NbLT6bHz",
  "key22": "5fRZd2mJhV167AC1nD3o8xpmX3k4yqBsVro7CjWBWkWAK1iURoR8XjidDbyuLtPbBAxPZaoKVDanrJJ3bCb6VCQf",
  "key23": "r3Z6jxU5UTMZ2aLUQFBBz1RCDwKN2mRN9eeB1oTL4yzdQARWngQQoD9T7WreJzmgP9Y7yBbKW6r9yjm8m8ZD2cq",
  "key24": "QtzUa91Yr3DHD55yXBnGFuZi9dpsyqeF4En63P3idcMqWXcRyt9H7AKXKvSkdvoqJFukBjrT9MyR82pGbBXRvVJ",
  "key25": "4RbxCdkRQ1gDAUHtBDU215MP5s7NHW3S3W9BhicjJ4e12EajzWGKCwsfTXCgaWQCU2mrcoXwsDBGiF1b82uHxYzL",
  "key26": "2yUj8k1PKu2PZsaQSvNTDge5SETciey1APCWz4eERtdanBJcrcKQHaFKAJbYt4TcUsuSn64JadawHiD33uz27FUL",
  "key27": "3WRuMUMB9qcbRyPBtQCopfUtSiL7RC9vZPf5pdnuJaJqVvg2qCqme8BV5w16pKDc7wmAwSrwDVQsJVVHP34L9LEv",
  "key28": "5X85LNe9z38kF5kXfevpho4Z1jw1hFZgNUNeB4syULaXf5qUCTBWvTLDerN9ot7NqbzYPKTkzqK5CMScwQ63HZNf",
  "key29": "5dNv363bmMZZ7o4QtmUmRTmzrKDfgScWydNtYmPCnj8H5U1cpdb5zgWmzBeyXJ15ScndzjLNGMHEpH9S2jxkMjKc",
  "key30": "2v9ZfJvbVPoVvw9AoApNrhasLts4F75z7oXtKdTAYJDakC2jYCWWTpQ4qTGVAnoC1eEq1np8GurcvYVbESu4rDtr",
  "key31": "4aAqLV21pp4R62b1VDVtK8eDTr38aTfrCYuCCbLKSBLHXFZdQLADwaLATtEHUSAoGzzxq5uVbwJjpbHqTjiU5oqM",
  "key32": "2HQ2EAwS4ow9JpsWZWbjBnkAjUT27koG2Sa9yLdEk1rEmP9C4WdV5GoqrEFiMV6vsSdchh91fjsjrsLTqqouS7Sd",
  "key33": "2ksA1ptQNYYBW9CBS7ojnRWLeb6hWF6GTVaL799X9KM2gR7ws3ahpR9bpgmZ3Gvubb3hEs9h6z6KtBqQnq7CzBQj",
  "key34": "5hGvYRepuvtZcWJTFiQHscFQu3X1wXsrpRpM19YJ1j6ptuqBg3ksx8Uf15BX2zFWqPJZtvVbkCicyTbCRyAWGq1G",
  "key35": "42wYq8D1VUbpmVYYqyQDGkPPQctFw8QUwpAMJ6ekgimubiZqNtF1oCZypsunaZtppb2rKJB6ksJENHjcb3cHyu5s",
  "key36": "4vcx4VgNVxSK2gsuSaRRsJEwXFaa42tgZ3jYGDSQGBfPpfUVigpGDDExQQm4M2NirsAVMaCyDMC1QabnuCTPNQ6T",
  "key37": "7wqKtFGqNz2D5XZB648HE4daLMgti47Lx5aPnZW5msTdL2pTHZBC7Vnnv4gBz7WXYWoQyigwkdsH1bkbiVPaj6Y",
  "key38": "5FNppDu9MtSmN9mWent24LqAgDRLx6769X92FYEGfDJYTg8eLf1dnuwuRAZofk4vC5hnJD8NNXDDSPY8a8kzt5mx",
  "key39": "5ymyT1KgARyww9EpGSca7LCRy1mpBkxPJuqou6xVE2WQWkiihsSQ2fNTTK6bDjsiwsnPbAtV4nUf1UTDYy6a7okr",
  "key40": "srcphJM5QSetX7M2wxZ7eEGAhTgi3zKS5wMJe9cCpZhFEfByFBvpuFFJ2WBJ23wi9v4oTGAP3okmvUZ5AeTTpGg",
  "key41": "2wMk1Mc2Hbp13ykPzr7HpGCwpctD5GcMDasEpuMdRhvpYSz1E972HiV4hdVkeNSyzmHk7dtMQs2VZtdcXt2sHERZ",
  "key42": "dbrPxeDpzJSwaYwMQVfdsCQg2zm7G8AbCSKtyxggV2vDRr1XbzRgrVa2EMkBCN7Jam9E5yrT72yPHgYRk2qY5jg",
  "key43": "4bUNV8jqAhmBQ9ce2ZyBnJUVgTGtHsoXptFK9qo7cDkCgqeKUJPE2sWQdw6TAFkAovEc4CS12SMohhTkjt33GdD3"
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
