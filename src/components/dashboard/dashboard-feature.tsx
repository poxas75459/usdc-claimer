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
    "yWiqcAz4pLx7KaEj8K8PcmKHD4a2NJSsmbHnRdCqbn8QGdzEjWH5CLawMLCCvCnaADaz4w2DX718cCLVmXEiqQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SvmJM57mo2PALsDLdqYAEbsEyeonqQcS9F96qG3fMKiY8aroNURBzzTiri7JUdGHP91uRMe4BHGfVYTUjor76h4",
  "key1": "26Ya5cC4fg6UaKwtvpJpHfshpYD5w2y1pD9Hk2faEDLW3SXx5KU5CxYehfits9ZYA4isbbFwMyY8zCdDNhHqgLsV",
  "key2": "4irRtfgPoG8fpKKypgqHZUudtMj5Uk6oPdkKZd8tJXQ83QpfYxoKnK8hdE1QZQ39GCthbr9DeR6QZmTsoCDBsFYz",
  "key3": "243DsQYa9r53px9zJ317wA4E76VReVEdFKYrGHXTQcn1c6VMdmTfDirUSNbUTKgLCUUs4X3t1mhqBUfhCSzyQXzA",
  "key4": "299oe2dq7SPSmv1sZJTPsVimzNvMRpHrZrnF4JDWdzymj1citwCzgF7S9EYehzQ2ZZmhhA8nqfHvqnAZWrQuJcBu",
  "key5": "3noj79PEpV9AjphV3i4dSxGPEFgH9UMnHiAZobFiy4mXtzEakpW8Zs5JS8Cm3fJFo9MdDA94P7LitdyQvu92yFkg",
  "key6": "5kKC9zR4xqWpce1gLBkAFYXDTiS6yN2CGqwjNQU9V1xZ3XLGYRQFEHbVghR8nMy8mSRYGx7ZS198eJBUbbm6tmh5",
  "key7": "2BpKEwEdgsRQd9wd7d1VM1UA8kMcLN236dvmqTCU9ekLy6n12ekxCuz18dN5VePuy4ukGTmdxbQEwotAnN33B3ZF",
  "key8": "5FZT8gwFchKqh4WcZiQBPsthdwPQtba2PVVWPcK4X5Bp5bocMavwS26Sk2LrWEfWHpGpTmCsZci9fpeLN8FSxHDc",
  "key9": "4e4W9Hfafm1UJFLDzoGmvMjqzXjNqAuviZiW1CFCqf7pzbacCFHJpynRpGcygs7UW4KYNQMwUquMwMqQ4bF55XDL",
  "key10": "49N9mBEhR765Y9rdGHKxeGocNXE6HdoGyeLREXtq6fSyw6LMvXEALRGZeuyBrMzXXE8WazyYmBrox6Fs2Nrrigx1",
  "key11": "z83yPVS3CTME7dwr2LHWDCbJiM6X4yd9tsj8SzbPbB2JUM1UgCEXuMEzrnRLrUYSQ14e7ih6kZSbosq3AnnJYHp",
  "key12": "25k4DLjMwYNqn7S4tivZwDTGCd4nsg4tsyyZw5rijqXG1VDLU4Y7XK2y17zzhezZLmGNtffYDxQhTeCG2LweBhqS",
  "key13": "QUG1HFSu4gDW36PXbxxFLNvtMin8tTYCFWGZTTejA1uo9epHNsnSEBdGumRj8cnF1AqP9udBS8E9GpDFpkrukA7",
  "key14": "2UdNT4f3tP5JiQfUn257mfAwvt57SnW8WmgWhib9rFT4uQbFBDhqc5BEiPiEGCe68D5KJDckHrQmBD7GxBZcJkFA",
  "key15": "53qn11HW9pSzA5VXD8DZBuffHzrVZsQEEo1dgWbiudCiNEFNy4sVb2FrEiWLJJPNRSy2mNRtRgW8gtMUWfzkNPAa",
  "key16": "3X8s9UZcfJRjecgHop98rVnhvHNXGRTQytB4LLVwqRSCKfJmjeaTbPqqccmwLRSd6wkp8giB85gSUGzaoqh4Kp1B",
  "key17": "3MPwbhKwscFjf1C8apTNQue3swFrCiQ9pPyiKdairRdfZbXB4qgTJ8eopgmcKdDbLMYNtjvstadG68vcUBnTFpbA",
  "key18": "25JMg8Vqktx3WcDU4wY1rBPGAw6Uvb9GEiGngQwwp3343LRF5GzMTwMA2kWb1A1jnWGUDerRkjzDS9hHoDM2ayz3",
  "key19": "ffGc9CS5jw5oedryj1bjXV8VoCNeZG88NubzUaRZXG4sM4unZpj3DWKowZqTRp4PWcJ5VFnTkE9RLKFM6pSLBBu",
  "key20": "UfEkTCRtdoUdhDefwYYXJzjR6bZ1qRYZcmpbSfF1ZYMq1VZuDSNauJsuT4dJeWtbwmuqkm4brhERWR21rptueNS",
  "key21": "64gyz9TFHEb1ExLB9QvyA1pB2ziYoeWvkujV84w6gh8WYThviwPe4Gwtswj88V8kTFEN1Zxhagm8GBzK99WZyR4p",
  "key22": "3vtYQ2cyGTAcWDA3ayHKMTbk4Af1u5Ru37XMJzazGS8ttahwzcpXQpnwi9Y9atPLZAkUreWXbNDbtXdYuwsaCXS9",
  "key23": "5HWpnqM4AjMuL9LvEgJuaXxUReiwrPKi1bdpfo8govEcaMvwWzop7dLNMXhvem8GEKntWLE1dSKAagycFvb9mQRd",
  "key24": "pGBWsRTX3JzzyKphDfPwoCnJ1YauzmLUNg5wj7n9avhMMCu7n57zTFvivqPdWiCsnPgJkhHELgJFTJLM4KqMaFd",
  "key25": "5QcjL93nSCKDL52TiEQZgM1c256K5AG44i1D8h3wDNDRawwXRuz9QGUt4NNxn7MRyy3oE3aJjWUSbRvwkn1tWT3u",
  "key26": "WMCTQknfPZc3h6Hi79PPSgU71htAfFJGQ1s8AGiEUshZGrevUbcAtgnWKXvPE8JJ9Sv5mA2Qqaxk7cL6EXCQtKd",
  "key27": "5woNdma7eHHwgvv2WAmjVELSAcjCe8zEV7avhadCL1Y6Hb9Frye3678fYrcLoHxfjXYh2AUjsCRoyYJ5mmW5Vuke",
  "key28": "4WSjm8dEdtgWcTa3cNmGnKfh4yhVDDGdbyauXFsgDXeDLQrjqC21RjzWy6sekFYnTQZ63xPSMqaeUh9pAqFNWwFf",
  "key29": "5KAafCHRpRsn2GfL9Kjnjkin2g2Bom6KJWTuyfAbSYP684bp5TEyGLVE82DRgdbwsJA31j6ehQz3A6d6sp59qAHb",
  "key30": "3nzYhaVJPMF343MtZ5gHx6qeoN6qGgNjAzF6cK9eaX5rSfz8WANdEh2dw4aB6ffAfYJPCECLRkF436hbZHSSMuGa"
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
