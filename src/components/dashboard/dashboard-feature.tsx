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
    "ka53qP1os7hXZbtujpxET35kedTWTgTXgqtbQFfWhjJChAbutw9v2zSdPcW9ghDYhGNhkSHSgTPrsMC9Cidme6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gwoVzijLStfTxfYvNzf2fxS6JvD3mLqziduc2ALiKgQxmtAkdMhN7JbHoffomRXKA2V3qJWdYiqJqhKZFsVAbSz",
  "key1": "4WnHfyBJ9L6joch9M7rYxfAiN2JTaQztin6qzZvYg5QuJh1KZ8ZhniZRhJTAFZ6MN44bzf8ZzGoJHCtjCTCQq3Ck",
  "key2": "5qg9H84vVeqUC6oD5PTvtouNv3xQbSDBuXeUg9s8yFXbMD9mL3gm4J21vRw26MgHYRUKDMLj1t8s2xKZJxjjKfxQ",
  "key3": "FozDuD9U6knfoDGkeDgEy9jCK6T1RXaSTXq1sqsNpzm88esDWYELca2Aras3Tv4utd2JDQxkEN7BW6S9y6Cc8EQ",
  "key4": "5Be2b23iiMCMU9AdhCt6PNBzz7b9Sk7agSXdouC2PsZRH2GgRzTFNzV1Scpb37QToVkg46kB5vJ4LuvhXKxoW18Q",
  "key5": "3dh3sBVtzmSdoRMwVgKZ6voaZiBvbSBUK5NAKi7AiyGQ6GFSYgn21j1tkKRo5L6XjCdNKiYM7BRyZxhqNaZZ3JWc",
  "key6": "3pQbFzUckyYU3WoLC1mKb6ngKEEvtGaowaEVqd2Uv231W2cy5EsmTuxDKsj9hcVGP8ihhWDerwPmqEAnz6aiQVMS",
  "key7": "3CUeEhYALAk1TdF4tZRJynb1gd5F2rnrrqAZpFYdsSZ6m6BHsnTQsnNn87JmjrVB9hro6MMoyvWPbrKb6hFrP9fa",
  "key8": "4nNuGXAjQDRGDTL9H7WjAoLjZeae9x4hCMPx5ptZRtyYbrdx89hGNkKtzvjzynffckFiFfbtjn6VQ3feCCtYH786",
  "key9": "swxhgXaLq8SJJGnZMT1tE3HWjGQtst4vMpjFS9rhAbdkNDUDwubmuxF3NmjwPgGZppQ9uB4H463AUxSCaUmVdct",
  "key10": "1uYxrM8VnHgstDQ5aFRQNZA63tEjC9AKCwBASMVBNcGixrmp6NxDfSq4spQRL1DgKfWy89QeGbDgyydbPzwqU8i",
  "key11": "5je1aCQZ9fHiH4soAf2ztdo49jarKDqqFMH19Tj8DcsZkUh18yU5qg1h5mtyZRLs2QeQy2JDYKqMrutEdye8x179",
  "key12": "zC2gLAEb7wF8nNBeDbQbVkShcdZ73gyiUdhtMpdiUg2QFdH8pJGdCEfdSSd7AH59i7sxUSwAuyAEcEsiC1FXnxK",
  "key13": "4cXzPCiYwS9ACZxiEUewMtW3A2wotLuK7xr3Rq9MfRi8URBEJunbiFnCZFVAXccAMmkUFhBMQ5dy77VGyzS3cfjW",
  "key14": "ZRAeQmjXh1c3FM6bSnQkRF5AQXqU3CtjEjgJvT119asebnuob1MpEazTJj8hQsoRPTQ5ahTXHrFjUpzcYkkubMv",
  "key15": "4kYmgEJZj7u997c4FHcUrEZnmoM5rKHLpqHedFLeC5UVpL5QTbdSiwUshpC8Wp2pU2x4yQATPjM5Y7kWfY7SCEn6",
  "key16": "2wbCqwaT6QUJnYo2xFUwHAzY45BPekn4FXWMBXrn3WabGzHMVm3sGRT6fESgtFwmrBqd22jCfvC3rU8YnMFZjZ3V",
  "key17": "4ZjbcG1jWj19Sek9ciF7kcDxmZGJpGqBwdYejpvpcrJsfDzLSsUnDR1v1h6SRueXWabPGsqTqh2GXPfK87kTLrsm",
  "key18": "WJTTFou3DKAzdX7WfVPkGh6nffUQEQLYxt3TjLjwCbf3MnVM4pq8MPyiRu3ReLvuVc93vCJ7AV6sHkuY2v5TyxY",
  "key19": "46hUH6LCkD38JpUnrCSq47NeR3GKz88AXzCGmErfKiqB1PpgdihjEpHfaVXzzRLcL5XNLUJ984gL4XvJXSwXrC2a",
  "key20": "2fV9pPr1cSDD3BhyigYreFczVgLzdL2ykWQUwHdAeoXzVWejzEt6GYFaYahHhGowUGkz1GpUHn9aVeuUgxDNV42G",
  "key21": "pVkSjZ78rLWDvKcAnC4txeW8KC49PxphyTggqHawfFfwQ4uxKtU3pQzT6MwEGGVRv1e8JC8oSVXtdnM3qSTSd8Z",
  "key22": "sySDHiihoB5DGu3GX821FJRouvjao1gaeQXw9Bam3cNvvAyFwMBZMQcfWqdJC7qN4i3R5DBp8qi75aMWK2B9PmX",
  "key23": "4C7wN1Duxhaohzuqvq9rdmGTQryKyioVTvMCZHe8HfHWcNLNMp3fv4mKzNmHStXTGWACEbYUt7uyxyw2y5ZLDx3h",
  "key24": "3Fh5LKU8U9QM3QU7LRc7BUdvQh9x6Ss5KuLi58yVUhJggJPgfjD8tt16tZCmnsYG4qMAW2GWAHYr8rZMHUmFidjg"
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
