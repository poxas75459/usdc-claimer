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
    "2J3n9Li1VkQLM4HUZGPPAz9PAhcKeGi6FuAdTmnhGRwtiUWTvaL2X1yTK4ZwKrcy4FHEpFS5mrhkTip431VTJQyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9BrtprJ2DKu9wkhioFdL9e96cCR6S4g4DWqePgHnwMAqekwEogVss7UMuGd9z6dw5mn7r37Gq4YsSVTyxa1BVP",
  "key1": "2qacpe9CjuFRe5jzzKRRpy7BZfmU2jwtohYnV7yen6ekidrDbmF3dLoEsKdivNEJB34opf4FJTScmjusqVUVZhko",
  "key2": "34kTMubaJUUb47e8HyGcKaW3fEGxrVuVHX8URRSqNgSn3F4fn9pJYfdFEfzGCDm9CrVQy8eicAF2syuQDTx42jmd",
  "key3": "2t9dmmvn9wDq8ugCUMv7ioJPyPwkEoqaMjuzD3xjtsbTRw9k2LGC7pG8P76vc47Bc7v9C2HdUu6w146dFFUAqr2Z",
  "key4": "28jRjbUYVnSpYVVQ8Fi9G48iXwRs7NM7z7gzhWrPfUuBZWDAVeZDnarwhxVXRdUJkx2FkWCjzUFngKFHETXZTBhe",
  "key5": "XgEM9pT8Cu37sqGGcv3AmNX4VJZ1oeWooytsAFyuSKSKNp2Q8NAg4XNR93WaugrC8q6HCKi9iTfoqgh6B3gw7VC",
  "key6": "4Stb2en9aZxyFzuBihRdzVmpSD4MBfCL4vKEQJGoRis4wNCaDrPX7UJucfJ6J2pp1wwUKgUTrLoqPC36Rm1viSNj",
  "key7": "27FiPrFhRaYrpLC4SZS5qG4fSoULi4gJg8fXTf5ygkzH6EZi43V9VMAZaPnTURLVU2mmgXnVvZAUix1dfiXKZUQe",
  "key8": "2fnxDsqeEGhJGAfDGHH9EcxW3Vmb5B2SgLfCqwzafMhZEQTsPXTLWnigcK6n72avkh8M9W8aJoeJDN7QR4rriDwX",
  "key9": "1YhSqy9GAEHFeMk9H3wwMfbqXt62wQYrZ8TFYLb61uTq39RNDfRdC6F5Mo99rN426iaFTXbocFCiowDEGrf51PB",
  "key10": "3fvFgDRF3iWRNA4r97wsxDTwXcK9YZAUJJcMcMzWz4t8wmDESfQPqX96tek92qUiY82QBSnQ7bxX72D6rU2Zyxvp",
  "key11": "3zHRdMt7GwTCUJxTygGr3EeKERmntUAqwBfX2mUPuurevWpvwwE33rhU3CH5CKqeQim6w3z8dfP4j1okoJ8fHYcs",
  "key12": "Y9j4ocFQNFHt9VEgDGvXaWLH8s9vY7WUfme5eaSrumCTQV4s6qhCQph3mFzNKKYG37fbtz2PM4FNZthV34n6iaJ",
  "key13": "3UUEfN3Ax2jiE3JEWJEy5kLLtyZQdQMVFBYSQWi4rFMhvdjEvoYtSihHVdd6d74NsAfxLeZcvHnFpaAwAxCsvUUD",
  "key14": "2MrqyqcjRwtCyuWLYq7MLhZHMD51ujW1PwBroBy2oq7hCLCUNvxyBekrqv1ZSwjXXgbR6AMAQAu1yMueuKwzf9Hz",
  "key15": "5Tii2Ly1TiDT6gjpJ8VKvMGWNSF8nmkMzP5pVTQi5mxTit59dtPTLWpC1N1eQ5gQb3P51W1Fq1BZLGn974r5Xytx",
  "key16": "4zJHXQEJZFLojwzKr8nYBz7C8NhjxSAaAdzv79aqyHC1vR7hMTMSpWWEMzuro21RXdFaGgHT3rYUo6odq6SK3K3A",
  "key17": "4oHv58A7NRp9iBsJ8zWpAqhdhygppkNx6984oTAzJfhvD4Rw9mzwjTFSqDfqsPZvivGfrkVc7ZWAXW1QPyYzBUr",
  "key18": "2BBcem8P8eGG5aAA5ybTxRVsSxnKCSVpF6GM35dB8YUKFHni3EKa2o8dEFi7y5iqWjLp8orvxN3ZKSATNJGMXL3b",
  "key19": "62Fzn4EonuKJBBp3Lf6AeGMKbAYDD5aTzmkULQ6vg24u3LkYQLjb6Q1CGw58aUJVemSN8cty86ve9rxux3vHQhse",
  "key20": "2Ayu8ZWV28HJuh1smNzJZJ4s9XqTMDTNDRKB9EeaA6wS6CQCaFhzSUqkLqsHSBcA3JRLaiiWbHZwcdSVcV9XdVES",
  "key21": "56iPJKig5hEYQtcfpF9w4mJ87MPmX59qRKNEKvHWufU1bUZWL4DY2GvNJCgnU4L8tkNfaYPMQpXi1ktCTSd5LsxU",
  "key22": "4h6evw6tDGmGw5cn8EkRZo9xj8LCUsQT2ZuX4xUB1UeZJ8fqhQ45dFWnDZWCJDv6KTewnW1fM3JXRZ5fNwASyogX",
  "key23": "2m9kQC1GGFGGZTCtKAyZY1x7Whfs7ssBCFHE3ZzYqqbC9CAY76NREND7PaFHvUWy8GajMgDDCuZw67uVYuDT2Fem",
  "key24": "2N5GBkLBtdP3HwQaw22DYEJnZMvS7XJZpzyPVnDxwLfKKWa1njCureyM4HpWcivL7UnU7JHsQK3XvLSDFTVmsM5c",
  "key25": "3kYE45RZrt2EvTjU323Lermhvt5idJdvR4Jow72UGVoguu2tdSYp3CmoayyHgQaCTb7C4LTUw72J884LAMWvWW5C",
  "key26": "31gvvLz2L4uZJxaer8TyNxtoasyyBZe6U2iwfhTzST46aQeba7BDDsGCeMdSh2Jid22XQ4qQKNUXH2NRYWkzHN4Y",
  "key27": "25E6HUFD7ZVevHzB2KR3PAid4UHFMXVNTJKPu3YTuchK55KGx8kzS96yxpN2jQucQLpP362ZPpeXiYJPhetzu3q5",
  "key28": "67asL8satHL8uNfRdLjx8FswVGHMocFV8LiLZudiRARZgxHXvMbvWawPcJL9KLCN8M4PJJsrkG2SWGtASWH8Vvnd",
  "key29": "53ycb4fcSm3ABUS8mySeVb98CzNfnM2YkyYzxzjpd4LFT4vvqQVHKUBpDBHWezuSgQFVhqvKFPdD1A4QZpZbfBja",
  "key30": "1RxqD19n95ZxSiPrTwqqB76ahyn5oPZg9S1icuFxBNRTeMEph34iTVTsaqz1M7q2kXvZvu1hS2evHaRHFC5Mvke",
  "key31": "8z4suh4kmrE8uKLXVRJQDZAUZfiEk9f1u7RLXU2GSG5a6oB6DFZztr8m96ePjaJmf8GgfyokdSJNaB1MZjvNkcp",
  "key32": "M36Q9vm1cjbZpApZjB9q2ojNnWHUqu1Z4bpAUN5NV7wHX6nz43kTcFAEQajvbWJhdsjFdNn2VFeBWCb4hreW6PZ",
  "key33": "3Rfwxq1sRVoC8N3s6iDPAr8tpeWJGbVUbv4vQgpKGEoBHFGgDKmgcuWCAs9UVXwnp8YbZf7PUyqkoARPkNyn5eyc",
  "key34": "3Uhry7siSwqVXEpj8UTYM2VgFnZtpu7NDS722aAdAKSFkhhAfwrS13aEWoa3iQd8ZpWytAVRfBLEXCeijkhZy6RV",
  "key35": "2V9Sc6ugwL5dcXxWsLwPbxJ5gZR4P93qR2fw5T4kwNcu3egYrSf2WJN4R58qNdH2T3H9tr8jAf1ps1RNfLrT7smz",
  "key36": "53yNpJbVTo5gLQXH7E855RungLk1tjs4XZ9gaQN4rS78tqSBNRvH1XsmbTw92eCAZ9KdJcbaRRkmgYutxALjzMtZ",
  "key37": "HLypBoWe9bnrVWvkFRm1QWprLtwouNMB1xQ9fByvijc1WcNwrw6GSSxmup7cSyj1hNscg1PpxrmogmpUx5cXM33",
  "key38": "QGmU47yVSPCRa2huZNqZ1mTDb6JbDxDsZtRD4d4A258eeKZTw5YEVaFnbX7p2DzQGFMWCHXHzobbB2RhzHRkmwh",
  "key39": "2nTk9UUvKdDMfV2DvB9eNAVGscUNHcpz29NPkRU6WYHDr3xMYht7pPSr2SwGfkDEsykgxwmQWtouf3LN8tJoULpA",
  "key40": "5LEH5t4ptnFjqiUvtZ22nN4aKTj53ti4YP4saKjMmgU8We9tvsLCttYPuyT4hTWmZ2pzywnRWT34QgvDQLAy8aJZ",
  "key41": "43LQftAQYwot8b8toebcE9quX8cNAK1MEvA9uz8xbvtkuF2mFL9FDnRmRF2EdJ1TsKJFx9fAXNY9GSBQ17rmHU65",
  "key42": "9yLypbZPE3vcHN26xLUdsWmjFJ1VyspyzhWX7MZNbZ9YTzChvmFxG31FXPuzuX7xVcbQ7kiFMA5uMSFHTADeVY9",
  "key43": "2nvaiPqa8ECHRftVQjm77uEYBS7aBtxXoNNFeHpreidwSP2uaDZhtKEi5gqneEYESBiYtfbjTLdZQdz3kZG9UNid",
  "key44": "5ixCG5wjdBQ6nfgbXGSQVBoy4TW7yoKYBF4ach61EiHDRhXSZAHMqg7cFfYkL34DYWZ6ZfNjvQGAp6TEpdb8DJvT"
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
