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
    "3BassFQB593SuCAkqgDbAFuScdVMMnvY7bUR1p6bmzskxfA3RF2uLzC5pkjv5gWbLM4nBaAJBp8Nwgv5ELAq9KdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WQYA7EHtzV83Y97vXsFfFd8X9EaqRy3oZNG3zG5wrzrHFjLZEmEmj6ErSkdGngymurdNYm2m3zCUgZ4L7unFNW",
  "key1": "48268kXWbXtXh4pHKr5Eq3fAWf7AAm37m3oicaDaZzs64mQGfov1dxrb94c1ov2ZBDew2e9BvXbrDtSTwARVCJNZ",
  "key2": "2nNC1BLF9KXbYXXNrGjPTqmeQPAMW3LJUA9iW1WiC9cLujkX4fKpHUHC3RPfTh14ysToccSyZg6XBmtHASZ2dXVX",
  "key3": "2vNcueKgDdL5vz31QCBsFXfreeZPUtiFGbUVqSEGYp6aQ7hJiCZN1NBMStFeVfL5WZ4bX8gu3yGDBmPpx4tPYoXt",
  "key4": "64UYXG1FAC4Wwz7hUBUXegZvxGk2aRrcSZRZfM7itkFLU27eQ2aMYMLXQJFAtSe41zgV57435vwLV8nRRu3Gq8JJ",
  "key5": "3x8xSrcwqViXz7mJMppsYqYiYPJgBMXbxGrHiGwkE6fVbmXpx3N9wyZsCF5AF1ECMhnaj7WuWmK62ApiSXpLhuga",
  "key6": "37j6qVVzAKsX9fqymdq6HQNo4f9V1rabTy1vsv59gRwsPj3UN7SiwUAGTVW2up83YHAsRsb7CyWLTixdKWQrzMAH",
  "key7": "41nqHWTY4zE6iWRvHZ8tRj6Jtm2PA5xsLP9qKLF1hhwpgCTafDuZmdpf7FCLWjhQ9a8xEbiyba7efjb3rLYy1gnm",
  "key8": "4g9jYTNKf3PjPda8CuSyGpX233nnHYRh46A4yNs3YFyyyoCw4F2DK3k27uKLqxPrdyCVQ51FoTvNtr5CHFFG1srv",
  "key9": "2jmUeg7e3rYKLJqtMRDoKd62WMvut3nEHZthz7R8Vpg81TGppyMBb2mpJGFeN1KuoArLmCrNrrDin5sSweVjuaQs",
  "key10": "61tPGS9V3xb35eR9i9tYMrT9do3EUnK8KtCdwWS6acvR6sEzqp2ERcJsmhWMf5jpJYavbw35cSGcMn8Gsefr3hRa",
  "key11": "TZRNnvT843g9dboKat7e5duWQ7MgnZuA3Lvp1SgSeSs9Cd45V22LPyFHN2qjDA9MAmZWhf9DBqmPb2ADy72iS1j",
  "key12": "53vxLeDpPpJAat9XXhPQAYq3BB21yyWdqpgTeds6crVeoZRmNzhfdBzqEVRRT2UbwQLoNMyMMzqBAa48fHqHxJHA",
  "key13": "2emoA8et6RHwv71cBKbamJfhp4mjydLsUCLGB7Zw3DHz1fY9dKzyQJYEwfTSw7XZdcg5mytKwbQaKaJEfYmDwiu8",
  "key14": "3Pv6bFYcfrpooJ4kVyApzcqBiJxaaLfj3sJMCeJxaeXTZC3S4pCU3TZoB8y43S7EqBYffUzZDE3yKutDq8huX1hH",
  "key15": "3CNBiSqQRz3Huu8yznMRcbgvWZ2V2ARAJf1tct4QM7sDK2DhmFMtxLAVYjtWqfc3AhFcqVhB5HdgCNh65tYg78xC",
  "key16": "StPXyUGKaC9gTagq8Jse6NjeVmYDxCF4ZDFzjKUDvgaWo6S3E3a4Ai61DvngUBYANp7jBH5642RTpn1eNLgcaQ3",
  "key17": "nLo3u7N3pAMcjUWhMbS84Q2wPZxfD6hbu1owa6ZaANMeHc68RER2VgicmF2vVhzNSKBzUKJ8HQL8uHX89hYdiKU",
  "key18": "4FCcmrk3XXpDHg2ra1Lk9Z5rFPAcycHmE9VYFonZH7h8caVjhr1aNqjRwSoRUGJsTM5ChPpsSK5Kvro69eSDT8US",
  "key19": "3axqnbS3kiiiQRtd1aWKYe3rKkGPPodk1E9NcH8wv7uNQ5pbQDxMn6wRZK4RXSxSQmZB3A9Bk2yDgKS5K2sCGXba",
  "key20": "5NXqUKAtju8qj9h11RVBjbqy4G459kwdZWEygQhVmHaXKYdm2Y2mMjxb3GaQRTmzu2RmvHRxZ1snDvgnAjtgLTyJ",
  "key21": "2qV8WW1buFPhQsKJ95gJpJhTBvd8xMNsxCEyGNAZJ3wSyQSoNFaydyH3kGkn1NSkQrBvhgLArzyfbd1n8jMYPg9q",
  "key22": "xhwqKJJA7WRnRb9pvWTZYdAWMX8jcVYftEjJmkcFDBDK1jYFhGp2xfZ31wmSkPGbUQMfK3fKn5B476csdfBAWTH",
  "key23": "4yaS7jDrKi72GG8UfQJSWUcEhj6WXHazmvw3ds48J6Y5ASBxyH9z8tA8AoWc5XbjBDsZAhkqBxrC3PQiVQVSqTY8",
  "key24": "5VGKWyxCpHTqDyhcWQ2DRK1Qw7H3tdiAL5WXnWGSzgdVhPARs7d1fT27U1rQE8TCkKNrmLWrrHLNv1yZAP2PfZB9",
  "key25": "5hah95SA4qGJ9a8WiTAicXycQhGrhhiAQpN7eRtUQ8eUeDMpvugsaC2Crdc3NJyJqZYuUYUv7czKw4xt635a9VcF",
  "key26": "6386WjwRjFgnWtzUAinRteHq3EXC8GMijxAnWzstX3v8aM5SaoU73VFyWwkBfQ72ZBq84U88gECPLR62eqZYwaYY",
  "key27": "MoDpA4NMHtXuqks912JCa8ZxpqMBRJQygVFERmXnsbdVSmtCZU5ijaNe9Ag3uezHsQN71SaVkQEWxvdnLZFMoVx",
  "key28": "4r3Vqa9j2EaocS2sjBR5RwT8iMj8nR4M9q6bj2dpFoyg7TqUJv6KqAxDqmzb97ZjyMhbZJmfZ5WWqHXoxXzWEXma",
  "key29": "5rtgJ1E3b3Z6iyG5YRuJvnFwCAXb64CeYQ1wxGPjYGb4AWnaVifeY2V7vtFWnfZZnEa6Usx2fxZLSrxMwz1GDafU",
  "key30": "56UxCgzLUypc8H9oKZzbRCjdpiHbtweU1uhnVNuLqSja3uUW1hpVBz214rdRGrMSNeczeGwi1fvbnGiGFFN7GqbH",
  "key31": "2Ke3MLtaYdjiqzKYaeZ9cKAdzeZ1G8XFhqK9KEXYAnz2qZL3637BBRzxuRP9YkRqE7QtGMDis54PVSFs2PKpPbPF",
  "key32": "2jkNPiWvBStoQPtuXi56Vx9YmhN7xJmWCKbScrMkfXhYHtrGpCV8tUwYRAgx1uLxqjAW3gVDNC1Kb28DdKv73Cvr",
  "key33": "29KX1ir1oJyBzPZUmCxTMsjGpxBctqBS4YyeJkN1iQArddPqbvVzKJZxMPVUpswtTJiT8nyRA655NvdoUy96mB4x",
  "key34": "2UAP6wa4EtwG5HJJ1jJjutUtnM5kPT8Vbu7wLPFgPoEBiD6UksLdcX7o9UknQqB42RKPR12KSVh9TpgXH4V1M1sk",
  "key35": "2hppNy1sVnLWaxhxWecMt5CgQrcJTcyQ45ij36CwbrnkipVTZqfZfdz5iswCTYTvEzTGRBCxqs64QtK4ZVZM4o5j",
  "key36": "sPJ25GhgyRCfp8HqxjNxhF65DTasP3LUuBENq8RBqPpfaWL24cAKeH7S6N59w1DbqQf7cgZLdQkmeUVmsAJgXwZ",
  "key37": "3pxUnskkgMMtQBsQxQB53eSbmnyWcpQtA1mithmXWZNtqXCWJvZM96aYUDyjVDthfPxU82j2p7jAbuN6L6eZ7GVg",
  "key38": "5Szph5M1bQ9sVjMg8MvEdRBWkBMsJvRLb8WrmmMzj5S9jXrqRcZRq6cwiSYdjzo2w46bCpDQMYsCHWqh8W42qYim"
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
