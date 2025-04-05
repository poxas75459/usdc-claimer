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
    "3s1nxchuqqi93eZXP1oYfSYSxSA8SMas2jeKgrqhZ6nVjqqkQmT66WQ9TWN5uKCRoVvZg3T1UnsGdPLMftzrieht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybPcij5pkGuANTVK7pgQaXpQdQbhQNcvCoZz6ZbRtFYerBE23NZ6eQsqKMA4nLwEMfd9BUwuQvuZzbVhdUBfuck",
  "key1": "5U3TXojoPnzTjtpqMtmbx7rqNBVjUqPwLptrb5NBrbsw5LeQwQzrCQxa36QSW12nixEvf4qrjMXpcTmNLgsXhamo",
  "key2": "qj6LhthZ4ornGgmV83nwTMMLJbKyexZPYtrwyL6sMkqqwV7UsSiFgZ4u8EKwEui9wPYQ8LTCDW7aAxMPpSHVZjv",
  "key3": "2ajVswFG85vWoFEkzQ2XpB8yS28AUTnWzY7V7FQYqSsPNcD9j3tqySRzd8HBMKa9FbywgGihXyX7ER6gRyoCEsmJ",
  "key4": "4VWNa4u4mr25N3pKUjMWngHi2NH2QZn4jhNLTYGnPqWyY5QbdGHnbE6MHEYKsZAUVeDipsDSqYxdY2jRm5dGZ5PE",
  "key5": "3LqunFe7oX9jezyXec424Bose5XMVuVCR2suvMpFS6nmkx6vLgH2uB4EcNYuw9AuHcZMviSnsjbuiMnMmy3UQQHt",
  "key6": "3g5Y5pSCg56pV3mK6TDHNipXrZ5PFcpLAp2CWJZ95trAMpjC3txCPH8DaLuyr22dU5HyPFvrWzgYVtMVjXVP7kkk",
  "key7": "3MR7deBRnYcMSkbydZ2n5pQVat2x8Zv3aFUogBaJzEW5UgARDnk2h4532TdkZ6BvQzyyaUgC8XESpfmKLocknvLB",
  "key8": "5chGnv3Qr1UaWcaWq1DZR4KCaGPaqjsu5ePXBJq3ZrqtD8amLHKv19Yc8fBWayYdebFw9yG74isw7Tap7Vw4mrwA",
  "key9": "5icV5uuXEJdCQyi4xHPKfNrzoyVarkrLrsLUkmscejfwVX7tZk5CNHGdjgWduExHkNPgJYfDSuL9BxUkXEQEa8vD",
  "key10": "5jwmM4xQhJGG4eyvfMTs2xGa1zkFjFAFZoJAmtCKk8rYVtR2V8q2QREdKPr434DzW3wRqwk6aguFJiLppSvTEYGH",
  "key11": "fdfryYiNNn4cN6KvxRmQ8jZ6k2ZAhoY9Ef2kMPCqr3LuESf64ZYZbL6rrZEfmjdX5WP56vsm9kcdAH31NuPhx8U",
  "key12": "3yX8zGRn6ZvSTt6RunrGr49QjvJm34EXFdBKv1PZ3sfT9zsge4vs9NEjX1xZW2QDgG4M4e3A2B7d54n6wTxhTYst",
  "key13": "318xXeNXRLQCSRr7uY9tayvw8CZM84L5nwFrimMtTvu8PP3CEjyPcm9eZdLZfNrw7eBkQ4innLKsx9ZjhAoD6rW",
  "key14": "4ad3f8F7kekEJSFchQ6Wq5d8wjTaJzJGyy4ZDMkYTtpivAALDKqeEigJBqNiALtdaXxHVwbakyEL9D6oEeKXL7S9",
  "key15": "4jPtncMYM86jB4FxLTqBPFRHP8TzoWG5JzygNof1JWeDWyT98w8zAnrkyaXUoSWnS2X2PdP72wLEBiL8A9neN1Gb",
  "key16": "2ifhJgjHBH3VMV7JveGSwF1pdtQnWCD2oaz4ECCguHbWeWY85zgVssMuvEC1NMXSdqfqcrEenQtESPRFMVSuw1rc",
  "key17": "4Ukqxi9c8jUVoB6JLxSoE5f9AxqSrw3YionEJdGx229UigUPhzhNdxKpufXbZTUndyhw7ByiNcZgrxzFobkMYriM",
  "key18": "whArBFB5KbcsDXc1gHRpxso1NGd8feZqsrrcb1SrXkUizRcNSF84LY4fcsJ4PWXvMdmWy4A3vVqiaNWJ3nqHBdc",
  "key19": "5FRsoC8QQbwKUNwqrTi9g23VANKHcNMuV1nfJgh68FgDuiX1B3JfEEXqJzq9XNtsWL5neGgKnxAvT339cc1Ss47d",
  "key20": "3m42qVDgmwAFPAGzzTyjQW5gygPLENJGJPwe7zubfVwWcipfNkB27nUSJqVyMxehNZSMTzzDcS4JZqMQurdxP8Lo",
  "key21": "4E2nrD2MHoxJ6ziyNyuyDCBnPfNY4DcZDG1pdGUdJkXkbaAYbDsU7uouMavY9aBHP7KWf3cBZpKUJJv55Yr4agMQ",
  "key22": "3S4LJcFprmvuwbZGC4ENNUUCgnbTZv5CCSLu4imaM4XqpXZLSLB1dYfS8PG7v2Aq3frzQVreXe25hpoQPhtexMxa",
  "key23": "3tL7nuPsDK21mvy16xKBYuA65z7WqdBNPsfNfM8K6MjyNhmkxRW9t7SficYs7oFFjeQwYLvkKyscCyVd7GDAYEGq",
  "key24": "2GzEKLCA9z75z2K4bney841BCQmkNZf3Vosc2S13bYNAkU5DqVusU4MaYduHbNCCs4xpwGYrB6dHdZaswNhfUUjG",
  "key25": "5u6bZfYh5De2qJDUXhknhzHT41jZGkGDi23Q7AqqCBHSD5TNfQRnDg7P7bwKQXDZ2uYe2v8DbfzWJXmDiy3f9JNV",
  "key26": "4NZTHV1rXCqMyG5NYiMPMB2RpDSxZVeJDTsu4jFyyB25NCmNpU2XpmRLwbsF4zJEcsKWnVNyoy7zDmq6BhyvPe1C",
  "key27": "4r5JZh5RRJU3nGwmKz4hmAiCJqSC2zPUM4apxqGDYvTNw6bwuACWmzEPk4sUyAoXq4PQdkVvyuh81DoFh1rHTBCp",
  "key28": "53SpNQjoq2QE3GMoAszzSxBpkxek3XoPf7X6myGjDyriYFu5Mk2pYgbBzismSLAJG9rtMapYJkumeujfaMp1vj58",
  "key29": "5g9nPvhLNBUfvx7PXPHDgxg157rNjGLLj9BweZtDBPoBoZitgi6bPCxQxZTZ9t2J16btdhxDfK1owWW8aDnnAy9u",
  "key30": "2MkFeCZSB8ZUzs9a5Hr9QvBSvTgZiVatJwCEpEGbDPAxY9qzEZnevsvXxDLKjZEd5gBQEDs4n9pqvi5QJP7zWS7E",
  "key31": "3H8h8kxEprHQkJ6k2Qy5NGr2mzKi6vNGM3psw95HikBf72vcm5UoPd5pTkyuQYb66hEhabf7TFKKKQmewy93rxTA",
  "key32": "2yVhZJbiLH1UizwTgxSbT9JHBdvAKSGSMkcA82F67qBQXcFSz43ycZEUz2w7sQ3Y4V9p8LU2U3g9q8hB3uBirifc",
  "key33": "5EMLe4PHi19fnAi8SaEmQX7mTiaFRf9cBx4vHiR2HXU7wv5H2CefYo6cQr27RC59dhsgrye36nXyVJa8jvq5nc7k",
  "key34": "5gD739sFRvTKR7aDfAD2ZqyMbZoNa8nFdeFg5Xn9WYDgbQLiEkTd1pEBMyYoitdC9UsK7huLPBrKmbpg8uXozPit",
  "key35": "jVN4GrSxLwrC4a1bTgMkiu7XoeMcXs7NPzPTCkRJmBwjeQwUqnKecXBtjrUSm3hc3CWxmdqsPyofxdiB8EZk3Vh",
  "key36": "3aQ6Ub9gs6x73aipY1n2BDhjd953k4qJVXmmna1LAPLQGmWSFY8G79f56LC4fPJrinkZiMV38LmY82CTUfbuK1nS",
  "key37": "2sHAhAF1nfHvCstESdNjHooWqUxLHNF3RhMbGsCG3r1n2UUEEevqXiFgVBPBwaVuLpNv4EnTHJB5xYQMPe3aP8qN",
  "key38": "5JMKwvUXngQqxqVxotcrzYnVXCfidFXvHTQWdRvfN5xMScQYEf2EUGxhCBoC5bwqN51adDgad2wbY2Kfm3B16Gqq",
  "key39": "2rdi6nYWyQ55MRP8DqDFiseiA2L2XLxoF2F3JP1CHTfMDssBipwpWuUGuHPj8bJwUpz4ZaTBM2UWqaKsJMoSbWdA",
  "key40": "3SrDet6xkoR5pkvKdsiD6KdTccxVHWdhApcAvwfL8ixxF5jzkUNuL63hKizUianDMjRaEAYTu8PpS2hUkyX8Jad8",
  "key41": "4Ve34hHJCrBGCm9tLYFUQiiWkg6tnnhMzEz7mPxuWG4f9iTii3P5iVkYwVjURkksRwpGVFVFAQhmWcVRA3CZNW8U",
  "key42": "4VqeHT5RwQSPF3jq8DpABJFbMdX6KRhAtdGHWj5KYfozd4iHP5idmYF6JnzuDZFURh51FFdqJND7iFVH5AGk8cc6"
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
