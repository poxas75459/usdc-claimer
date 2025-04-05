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
    "5dgYEFXDjccpfzpgtVi44hiz8uDaBPwRM8hmf8G6tGf2jNnsxHHZW5tf7ZcbA7XreFJ8jeRFGQnMBa62QsyYVos3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdggJb81WP78ufb67Rjyn4LNympkHpRnXRPSpeSZta6VbZi5FGreHNi4xNiHkuHL8c8fpCjju68i8pAoxogw8Po",
  "key1": "4oPnpbtby6KaDbjMvYYDLHMAqMd4MnzD9g87cE5x12x1J4G4AXHLn38eVUNfjMmNfQ4SBvM6VnpqFGwh3PJqSKGW",
  "key2": "3jviY47LEnPy2QMZorJAc9u8QFFtuSeY9C5nYiDeU1YmtFcDSqj5Gq5PCMJePQN1LHMsKs21JdTTBfnpbg5JyVve",
  "key3": "4xDPvnXNiqasSee4S7opiwF6jRFx9AHLj5REreiyQeb7X9HoBYxpwEgQdrg4HbR9WmLe8ADWmTFqEpVVYLSjzXVD",
  "key4": "5gQMxTFbrNaepPy83WBrNwWb9ysSPwDK1F14ube95CiZSPkSEJG7XVUxZKeEiAWcqfYRuw8Ter1rhhLq6UUnCtx3",
  "key5": "2dDTrvPUJHgQdM4LH6fmQgLTzJETPoi4iuhX95gyXSfCfGwhPL9SQyThLgJR5Tpkqqi4qhCVKe6A6KfB2SGgzLD",
  "key6": "3YEoeh3R6GUKWPEL3Fpboj1nKQju3UXitfZEgD8Jh5XZxYtyP1FpWC87pjR7KRUQq5CV7CLLPo7dsm2fNJQmBr4W",
  "key7": "4G7zZeKv3jmf9faeU5DQsxPfkE7ADv9XCDa8TnB38xKkswcbPR4RggwbwWefHQsHMWmiKdE9zHnL7s5F25SA95nR",
  "key8": "66PwxUxrrkadioQqnc996R6GoGQNnWXYbxVLjfeBeAfVxSZV7UQrzRnbfB13PedCCSrjt6mEYPAWMY2CBPTfFur6",
  "key9": "2gHr6xuf2ZdzQ7T5UCaRkW34xbyDFvP2yA1JSbH6R3ot4MQR72aq4yFDLd4K9wsS7BiEBUcsJSToWxsWabBET7pa",
  "key10": "22Hw34DHvHnVGj1ujVjPZSEquivPykFE6V6XHapAmJn8BiAbWSLfesqMBGY9fukF19JCVxAgqxzMhYPjJ5RSre2H",
  "key11": "55i3vZFogoyo7VAGWAiNfKkxsvyvDnJguZebbq4fJXdqt4PiWt9yLm8AarPPbfGSkQXEgZBgg1EmuY4NS3P946a3",
  "key12": "ZXEvm8b9seaAKwdtZY5rqi2Zzfv3sgPQ7tBxmrAcsa6smEm4yU47NLgxhNYP86RGQqse2j7EszbaKHKApTbN8EG",
  "key13": "4arWMQdwmopExt3TgBMbcGRXAfRe24siPK1Ywpe4CupCDAbnY1Evi3KnykmEpsf5t8ViYcoCt7hHpmpV9uKC8TR2",
  "key14": "61FSzc7LrHJLsJ2VZ9aisZWhxdExbpYVHHpBpJAdsTyagAYwMZNCehpR4XNzuKx5Htzr5tpqaU1jqEfZfDZb6coJ",
  "key15": "3Pm7pUVnVN4y22LqYpi7wgumyQ2B9C2wBvT2zkZmZnoUGK2zgN9Mn4kmQM5DV6fVKc6jMADdYh9YizoDMbYdTF9m",
  "key16": "5LdwDrb6uSp3wyqtKmeW31j15ztXsA31ouPP1fJH1VxqSoBNj8oR1wykvm8fuL3ArbBSK37o1ECHgrdM52a5V6WK",
  "key17": "2xhzh8rHqZB5u9HgEQhx1T8SB3hETK86cZuAd8W9m8cHKmEVGVCUx2UWs4w4LdUStRVDLmN83w3TkdtMs4SidnqS",
  "key18": "5B6zPZVtdTqs9ztaTRXB5FQwY1SCrTybW8B6anK5YUfhec5749iRRX48KBpwxke1SAc8AVahrchMEWuTBRPJa8Bv",
  "key19": "tJomVJRcFNyj3AZYNbmuQ9r8ApVF2sjJEwb7mZFGekz3Tt3VyhrDVbLCxw7scxF4xMLD2JofBZaa9iWkjK4ZsBu",
  "key20": "zbqsHToYDHfmfyA2GYdNrGNauKJek1jxCtuL6xHSfVTnP6LsPPxTjRpg6CFV9LFf32Nxg2QfodWZv5Wv59RhNva",
  "key21": "4FTZSdn6fVjFsxjcZjBT1KhspzZZJusj9NX5AJtnUNLfjKHiFAWDNSDLwwZf3VqwaR8vH944SrHq2st6EFyYG2So",
  "key22": "5MkmxN2bQm4BQF6B8F56J3sTUQtGtKaBNMAMCSvD6EP9bZgPxdcQ7oyMxYS4HCpLLyvXsAw5m27ZmGeBjLVCWuMd",
  "key23": "4sG5S3BR8UiFbBdxJr9z52dJsGAAvyrTFpHwMn3wX3u6HG1KB6FhoZZ7S5GxXRBj99TNzVuRJMAGKbZzxi6TzHgU",
  "key24": "sPScgritB97jNzhKfEs9he7SZ4eh3zcdHJKA2EmDb912PDgiNRv2mwnav9du7HY9uZ2q4djACdSo9weYx4Yh4U7",
  "key25": "SZZ8NfzNHsNcqyR6bThGWLBg7AAijFr7XKMX5hwNHEMttmW8zHFNvJtioAhpZQ5NqvcQtzvoNLfFwHCbuV9TC2q",
  "key26": "spLyw3vTrFBAY8Y9szED3aVc61eeakfBdDCbALVFor21zsPzNnKGcEk7tGig1TetSD4xw4sw8LQ8J9Ai3cWFj66",
  "key27": "2B4VCyNRqca5TFRBzQzPwfPYsLHGcTrmiwEBtxHgXdZUBZW8hiTTt8dUq1WostUSp7dKUATZiJrQmV8oNWpjDtEv",
  "key28": "38MQVKDrhYAHreeaoDLfjicVjgwSrRMstsFsZVxFmcCumiYY4txG3RvfmSPf1viZBDidXR3Bi5WtHLpCotN6Ug85",
  "key29": "2RD7teW7xqqRSfd2r8dqXgXrVZLn3o5DmWLK4M1N99Cj55c2tEAtDoNYRCTb6ErBUZWhEA3eG94DyPNf1cwa1kqa",
  "key30": "4xW5nHeXHAUQzexsHjeTTnr1FduxiXNLhEo1DSBRiEVQPRhyRvz1qYGQAevZC8b3Doeffiki7GJd6mAVyChNEW5n",
  "key31": "3UYWyNCVwPQvEyUfQow6aiUC8JpXYmf71BAf9wd3ookyZ3rKC3vo7A9BgLALQ2BaWXUJaXdEk6uffsujkCRKPng2"
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
