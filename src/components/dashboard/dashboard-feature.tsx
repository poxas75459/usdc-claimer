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
    "2HFtANYCMZbZ8tq1eKbtA9aD4aQqK4FQdxDJpMF9m25t83rUyJ78SKP8sVZ4SNPBXt2pcYaMLQS7Siq9vCP369r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cb9VCmJZNx3ieA2a2w7zRbqwSNSWJacKjYVQYYBPcJPm8FTdXJMEdvjwbxgYmZkhzZHLtp12fYXzhDCTfyEtmgL",
  "key1": "56pvuka1A5QTGBkR8fbBZ1XFGv9FkWKMM9oDQmGTtmvMkatWoFKJKh3BSzaVKn52qX2wom3KJAFXJZxmDTE3hs4v",
  "key2": "4qeSprHK1H3CvyDY2s8g8Tq7cxAQ48xgmiQ1NuHX4JjreatC97tEET2CREr5Cto4Z77sfaFhLYaq466sZ2Uv2SVx",
  "key3": "121vSseG8z6R86PxHEnwV7ZwRyTT23CjRG2fN4Nd365CZFnSBcdcR39xRWmHaAJVaSkLFnz8mfyb53JTQ2ZYFqUM",
  "key4": "3w9y2TccT97tSav2ngVzDdJkXBGdTThrz1ReNc2x4GPFdJXiaTz3pykGtCmovPaWKGpCRBE4ZsPLyTGYncnEmisj",
  "key5": "5PvUhBgYiq3j4RDTJs8rfHf17F55NEjNKDnAd3UoUoxMq16BTtPAoUpiPfkevHMf1BkukNyn96qSAs3ZiJgMapeD",
  "key6": "3dN2UAfDgt5BohYhHvMswcQSkUvaxTbDVZNZcKMdWJAkXmAGHrZYQMgk2dLm27ZJG4f1ppTRrxcbFSWpW6pAkito",
  "key7": "33TNs9YaVyUyHaMMqemFSCPzC8Fax9bgymPkaqDhcAJoJJj43zLfthBmrYNCcYJbUp46TLS9773USphctz4hzoYz",
  "key8": "3tPvFf9NkhXH6tiyzjWtg2BWXTQmiZRj3LALYkonrrBifjqtFdJHYCdYRr3V1eA9R7B34GWVUrVkss2kYgF2q1QY",
  "key9": "3MmNogtWkwgeGJFoMMGwCr6SKhnpe3XLmiythhx2AGznLzXQNEXkoy9Nai6tx3KCyfJaVB41MFFNQSk6Vw5sNAHk",
  "key10": "2UQjfAkenmM7FSHoXUDaCgpMbUnFRHXz4Ct911ozBWD9xmfxGDyNrziD1y1AUHxtSAvd8jGH3uo4HY2xny8bDjs",
  "key11": "5mrZGAkh1hK64CZHrQp7eJY4agx2LM69LAgnnNHoZwz8P92K24TNch7qPqAvXUGcsWdLbsoSjcsqyidB7nYAYjKB",
  "key12": "c3K12aZHEzVq7dNYNuPG6Y5ptXqrGjMwbnusCVYeymiF3ivLgMXrc3hgW8C9izDMnSDWYdCYhjtBkebXaaiprrD",
  "key13": "4GugWKLNCZNwKyBStvVJWk1Q8BJT8dUbEU3XK926NvoRM41iEhaDJ9bqBpuhT3cSkCq6tfRW23RdBmoVWJ1L5tCU",
  "key14": "4J7jACprBrRiVS6vu6i1w3a7U2QKQYsLpDJ6yPUzkWN6meULXxY2Fhhpo3u2PcwP7eDAS2dhitht3zQF4qUhfLtE",
  "key15": "2hsw6s1scytFbH72vLychJJXMrP6Juc1ASuxH7X6smxa3qT6sjKx7QmANsjGfEduPZqszf9Nz4TaB9wgvisJXUQS",
  "key16": "2HLNV9N9gyUTsXA9h8HFQ1Dpbqwv8aA6z9WQSwxtqE9xqd1r7RDi3hdcWm1Nsf9BTr7TzHhXzm42fc8kzurUykSV",
  "key17": "4vTQdL7pWz7tqyN6wZ3ts5Lp1ZNpAoxEF7x4BKACwHBM8VK7Ti4NUr24bWmgzPt5EsLsKL4HfF4ikWKU6CMf3QUs",
  "key18": "35GGLzKUQ5LRYhrajteEThjc5JwQShPP3ZqXtpC2LtFaHHzVChqiUixkM7uPhGuhkSDesNLdiDcfpzMxuoFLFxwi",
  "key19": "dAyKi42R8N2A1d69o6vfD8rK4ebkMfSCwQduMjrEk9aL14knHLCse1oU7h4xezQYVaNPdZYsufQV3NZq9M1Ymbh",
  "key20": "33ekVKC6wCRYf2DpXjbZmvzKhqyWSAiJVhXoa2UqzEgeVVVYh7phiaS47dbdJNq8TznkJdX3hh8eKVQwXMg7Q1d8",
  "key21": "5T9eY528BqjSeKzPDVi34s2r5rnzxcRcTZwcWRrT2aWSYfWRGVouTnqyL61RvcgYHrxsnmQVzKtoArrBGRjZea2k",
  "key22": "5YRiodLQBnKVnFTNEMb6iV1Tbf3d43kxc6fthtzSHvN9UQT4aMmTwAwWEmqcrSK2ffkW33JHLVTuyhiVi4gPhVhY",
  "key23": "45XFvFAwGpiwH1rZ24KrmXFEyKE9sfoi159xCTs3VYFXFGngexhRnqZW1wsss73W8cXvWG6aXxzMAUqcgt7uPwC1",
  "key24": "5r69nSHtTjq65VGvUTQsRcCHtfkXnP9Va96t1FSsTSKGofsjpfs8itDLJMzafQBZwxj3VaeqpdjWYRUQTjRwiMZR",
  "key25": "2FaGRQCoLUBTJW18ca1FmC9fM9hmWnnYzco6LFGUPfFcwBZMzSn6Z7C5ZcZUyajayCKNHousbbFsHhoDygjzVmQD",
  "key26": "5VKj1wpnfWJApnkuJ2kQtbe58YnveQ7y6xeP3Yj4QhWjvedvkko2KsdgWrqCjh4tuiGiqW6Gyy1G3DK7CKMMPSin",
  "key27": "TJjFEGQaUc2rZ1D2QtL8xXob59sx12FuNuoqMY4aR5z365vcwqiWnCdi6eUV8WDmWj3iyAQTQRDPbMstfHt6AQH",
  "key28": "4XwQhnuXY5KUdt2vqY4n8g1hCkPTTVfpwTbXEXEdQoSm3Q2ynEeg458wKEt9FmgmmKrFdghH9wVdty8H7QAsxrE1",
  "key29": "3Uxz6LuMASCVWyujVq8PzweznfmQtMRksLQmZibdDEo7HwPYgfP3A5ePqJzHafQ5deL4kuUAhSYof7f4Ys1yf27N",
  "key30": "2hrw1dWTDvn8513b8t1XiQwvzotRcsH3xfJvEi74bCbiJuEn6HfW8wUaTQTNGKFr2kS4CNjM5cSnTmRxArHSagE1",
  "key31": "5wHFjRG8wPwPCp6fSoFDkg6QkYnyhpDRZCFpZzR3F15Yb4GZYDCHNVCD9LY98Ug3bdKQrpGDRmYPLxVx5VHBPZw9",
  "key32": "2pK4t5WbNMJ5wLUCrxS4HUEa7AU36sqTo4d7pk3KLDUEk35D2Ea1u8kVUcYroK9cHGuGDyp3R5xoP1nNCSMXa6CB",
  "key33": "4aqmdQ2a1b7zz1WAX99MaUfQbaqQ8tQpije9UdrtFnkc1YFR92V6ZQacGyMAURKSXHhVQLi6z6rRjX8P9iD7a4ft",
  "key34": "2XgDzN3MYdwwFeasqV4fNoyKpmxfEFi931qp2VTkUK8h9oqZ3LPKiMhBdRsUGn2PaPeKo6eFuHophA1Agce1VKVj"
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
