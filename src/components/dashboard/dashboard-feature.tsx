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
    "3Aq3LNi7TFmbCtctqd77mosA79hCtXY89bwjF1jUxP4nMaCGFhaijLCXqFtWU9NJ8vZyXFAo4ufwJbiJ2NScmnn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQErNSBbCMR4NTmHjs236fGrPdYv666cg7Y31yfppQq3JRfeMDNdC9teV3MedfUfTwUrpEDAACqXroq4gosvT25",
  "key1": "4xZYHiB3NUrf8YmCYer7as3BnuZwCrQhacENp13F9gigt1FkcMnQMUAYnn1gvz8bjf1XcNjdf9M4yuKyzA75quTp",
  "key2": "J4vCx1wuvUt9HRyvUS2myhVMzNQgJ87KESmaNnMmzdkh7DqYuQJkD22MdGRhNEzZZbvsvDHEVEDEvL1MgWri7wv",
  "key3": "5wyF8x4anVSqgMxKTLRt2EXEB1oQhWXWxuKy8CdHKo9g3dNXgfAVXezWXuejRg9Q7ytjkXFqQ8MP1Goe2ywXepWm",
  "key4": "5CggKfnqY4VcVqw6wCyHFakTSBQ2yFYSRXKzDtbv59y6VJ3a3WFks5z7RToBRmh2cVi7PETTnWqTaDKba49CXsKC",
  "key5": "4AVpCSJBctZPXNagtSmD7ZJ7RMf82yPsPr163XcPKurmNW2qLn62yZUNjZJw32WpAMu7qFEQEVB2h3iuYDYNtkBe",
  "key6": "2w63KoStgpeRUx9xjtWdj8qAPSyEvjH6a15hZ9tfczs2scV5csGrLJpwBAAXkj7oJKz9vyL2ktC3Zz8pw8rDYoR",
  "key7": "3mSBPHK6AL3wkuK66xoCK6JmG49S81HFwSDjjuzdxLvKeua1vaqpu2xBMzghXQYBj2x7ZLdR6V9k1o8ytxz3yrf2",
  "key8": "23trwATH3vx9Q49kepuxDRkQzwvqZm3jQmMqXpyWpaXo47pkdwrgoUfdbXhhqTFLt6JZJUurXG34h1TMubdxpDuJ",
  "key9": "65zQjoWamB8A4uKiNH9ZbqNjvxj378WDpmrwScZqFWtUv67fnSgSuLjeHcPkPUUaqPh7sy37ZuMA1nfvLAE6K2g8",
  "key10": "4fJyKD2yLU7E7nAm4A6jQXDubLRccunZ2KAGZgWexUHuy3pRXJwU8xFkPSRS5KmJXixF5oE8XZrPLoNr2tJcKfGR",
  "key11": "4DhFLs2NJ2YcWCKgkwtp4PQQfFH6gNET6d3jLrXfKZgxkB5Am1mTRDHRzV2Mfp1YAZT2RQEY7ckXHzHewuVcjHmu",
  "key12": "3z1SZGwH4z5JyifGAY2nV4q6Vu8LVVp4Yf5HtWcc72unvLTC4gVsapzW6ynHTzgXrefhG5xmayzKUAsQaDxQirtV",
  "key13": "3y9WLVonGu4G1hHKQUJ1jjxQbTuE2Vyg9k5d7TEfQbqLDcuQZYM7ZFobugjYt9qGnD41XGPhFibriyeXs1t3NUKS",
  "key14": "EKFPCVMbuW3rdrcndzZQ1UcdEQfcMcFUtWz7Xqf8HDmH6th4gDGAefS2Xf6RzS6KMF3q57uQToVF7vgVpk1Eov9",
  "key15": "5YiohAZgUta79nB8TLsG17dv7Lxkh71wxbvn6DJbcz4UyXJZaejNkPwH2wrNd3kiJEVwtFZfZzWV3bgmGQQtZd8j",
  "key16": "5jZmBURWYLitWzcXMApPvaij2k1ZLsAYKjK5VYdwEbwW6HcHC9SPCH2Jqen5VMAJ88GmJ11fPDN4mSmHUFqESL1F",
  "key17": "4CLfCuCKSkTnqN394rdmEo1X1iCgMkBrF4sJMaXe3LD8FbYYnQWL4AKSwXdVKX1itECsp23a5pjB7VQH9mn8qjSQ",
  "key18": "52w52BC2JJt5tVUc5iRjS5HovmSDU2kqbmWFefpFc2VbGMyJRdbdK7Djp2v2NTLtEecC19EqLEiEETKSe8GfTYb",
  "key19": "5wPvgxRSoKXLat4a4xvxG7NfHHXYD1bmKzEUqF36Pq6DRu9BUMhFi33L8MA4eimaHqENYPW2SbcYAMCMLKXcYnsM",
  "key20": "4E3uy2Aybvmu8DPqXrT1fVgVWvgKUNsdnem7GsqyxHBef3upmQwyBDmsVVdWefZk7nZzajF4d6wZNf12nUxLyXkQ",
  "key21": "qzTpCG6c6fmYaLam2XnbgrsJ14iG8YMNHnZKAo6EQjX7JFzaA3QBMpeLMuUptyJciBoCDsLqjgnsqFA8UWqGie9",
  "key22": "3FWNAx9AMtPmkmcGan4pdyJucnrjBnQweYoT4Twk7XL3oomhaqWBWEty2wznPpow9MiE1gsTCG9Fcg22D72HSUEw",
  "key23": "4tBsBia6Qz2Ed9p4JRRhPXnyA2iMVPLggAVL6Do3i5GY7bNGP5D6LcrSJsatLKuTXbTNAKCXE6hS1nBGr296cQU3",
  "key24": "5cgtK8YiXPhHGSqp7j7r3cWqDnJwDXL1zrtqsMCB3JeerAeaxXaHaGjGsAhMXESnDRedgpb9vU79YtA96JtRBtDT",
  "key25": "2sr9qBMgdnrWWorMuoG1L4jBnrggkKVtbX7M3QmuFdxhbZARN8aRdM5gHJihyuQwwrq4MJRV6QE29rM7QuBKWdD1",
  "key26": "2w2YCpfCxX1JPqQhbVrbNsCCGiouthg3NfCTD1up8XhVWtMqW6byWor68AMRvoQ8hoGZmk6aXBaxQ1uEexGcGHHU",
  "key27": "2EPuCHgQg9vBSGx232ra9GktzderM1Ck3ZtAsfE6ZmdhDoJDFMtTxXU1HKimsArQhZpHrkspmez3yQ1PP76qnFqJ"
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
