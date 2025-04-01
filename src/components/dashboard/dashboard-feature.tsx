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
    "5KfnGntfxxESmzyfBSyarbNd3MwtNwaFevuaikXunTo57Q7jxQaV8Y4VdvEH7KcxGySoUab63q3yMinhbkaX6Rf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMWXMFQ86pZvmJRvMe99hDnXQFcgxFRw2vhvi9eARGgrGRHcFYZ2hoAGMnSixLPH2pHZn721j2Z5CApMTTsVh7Q",
  "key1": "2rZiLKvm6CqqUPPW4TTwrtPWPaT5YY4586YvFBNSwvhBCn1gaTftUPWW4bgM48HrX32njQVDFjg2139HJ9ZN974q",
  "key2": "hKVLm8vSfBH4WNAKmXRxJXFoSXzUFM5htDV4KSmq1RT3Uo4zDYWzFXVYuUcJSTbVsRT134b72eJ7zWrEpAWrYKZ",
  "key3": "2kxHMr1pTuaQR2Phh2MPEPgP2pnMiP15RJoC7KH34ymDnYjjhg6hAMpAbDcigPjMjVpir9qGFiZPwsihS4syR9ow",
  "key4": "bDX5Mc4szqb5nbTZZkdDqCQSKEtAxUed8i7ZfXkCqYvfwhQXxTasQDahau1c6v1QE27Nc8k59x3HNLZ57R2kxgh",
  "key5": "4FBXcLF6hYzGWcfswiSEDg8BJLBDJTjbZt2w1NFJY1iKHuMi2WaCBm9oA94U2sDRWw2EW1iFozaFhbdbAAv1W7rG",
  "key6": "4jGyTxzy8yiXYPHd4ENvx5CDPcpTjNiK8gHTZwcASqMcgfdZAchLtVLKfMAhT7EuvxqKDuC2JDrsTwLpqrXHtmDf",
  "key7": "4uhqVLLExTyn2qBFLrL6uFZhj4DdkmzAbg8dySwEFoTEbsenQfpWJdCRSo9HvUrYBWxHDZZWfGaZQ4wpJc2AdGW",
  "key8": "5Mb7FVKg2ysrtRkgDXEureqTTM7KXZEn4AubsX7M2MTNxsWb3AM7GeLGBjga2MNvDv7Ziqiv79CGEo7xSZrnADFM",
  "key9": "4cJ7KSmedBbMKattfUf7CxnkGFwAbcccKtDWVUP6XHFVCupbFQY8xcYa9MeLF5MZPsCDPqMWVVvisikrKxQ5S6sg",
  "key10": "3zy56W6LyWmNMdam3QWn21QqAWQwQCXVD8Co22fFuSTj9KdDDMxhxCRTfYJrgaYoxwq6zArPG7F3LP48K6MdjbPD",
  "key11": "3NJwWMv1uNqsusZBFH9MtS9z3NjW1roNLUpUUyB9CBVij4FWTgPsZTTQBf2nrgcW5p1a4zAyEZQtdVjZbz1Bn8gy",
  "key12": "4gzZEKfLxz8xYeyeE7aQxGLjRZ75fCjaXHipWPJBRMTMraWS1N8zty2y6CUGXxH4h9Gx8emLNW4thQ2PWq1Spfnj",
  "key13": "3ntsG4Rq3Bx1Ln3LZ6RyAvXsiWSCqgEjXYawPvW5nDFBhypyTLX5Dk9L7PEt3jvjbTrq6GtbM3d867e3bSyiQLyz",
  "key14": "3qgpmEummvnJWFV75ZxgmEGjdASZveoJvkCy14fkzYyLLRK5EBZ3ECN1KBPi3wcYUA7q8uFeUuoFqhsUQXkGAWaH",
  "key15": "2gQxhZLeJ7ayW5YU3S1HVX5uv8ondQi7AMNtpPF8FtqBNxw8DsqJggFaLCLMDiduvo8UgJDBioeqd4d2BfeVWf2g",
  "key16": "2MsyyH8ttpUXB8qj6nfKuXN1QeLyGFn5cRW5zDp79S3M9A4QUXZWoJ9T1xWptnPaYFSoKwnvzQ9tK59xB14o6GQe",
  "key17": "3DJUNDr9AHUdcazuNEBHA1WqAGAztwLvVFwCfNHwGRwebYTA34wEuD9nxA1tgpNGzmSnmmstACZP9GMRn89zpfkp",
  "key18": "4WE2TWLmZQJLbmdXwG7n1VMVrNUX9BtnwHCKXtHB6Vh6QnkT4e4bPpPMg5tdbqAZCyr698TrVmw6XMyYJsMKV3WM",
  "key19": "3hSpL7G988pQ4JiPZ4vC6fSz1HEsu6fupzZS1TjVGSLfA8MZBeeJSURUNeuu9B2kFftNt6zZaBMuQpFAJeVMCmh",
  "key20": "37qjXmVxaUF3pNbNMhzqC4VcWjGYZANzsAh5FfWbtiAjWhXBdJrXRJjXMwGHPnZCnv7KfUzXeEeryPRJ1knemZ1T",
  "key21": "3wsChpyN1ggtoAoNMJAi4jyecQnX1ykYzD52yzimuqYAKh8kK6AbU9pFy3insGDdDBoEGxPR7BA2SoH5o6FSD5dJ",
  "key22": "2SnEfmN2dC4C1Uo7h1QpB3QeRUNh9SftJ85ZchKAKJgXBoT5Es3VYg9ohAYC31cJmAhiAcQ15BdYmwmu2az1STgf",
  "key23": "4rWpncWDLiKcHBhUDjexo5J8BxHSnvVNf67hTWVaKXdnxDyQwG1ouKbeEwD2JB2nW6g2win3HWnAtx1jeVqARgoG",
  "key24": "2kzqDmvzRaL9cKpNvhveqJ6JK7DmsUgfm6czQTybm56EKCTfLNhxosg1CM9tLvH2tYph5gxNztzPn5jDqjRJ39zB",
  "key25": "4drRMkCoxBWATBfTkhQTzTLobsGQp5Ta3nk6t3A9K5MAHYdaSSpbSgu7KNiAW7vqFvmfxEC496bYCizdfREYEogF",
  "key26": "3SCePthvZUFZVwU9dpNzD2iRiwkUyqgkdJjBEPr78vwwjNDQ3tDZqAMZxNeHpZBQJGCWc1pQ2xoXHvEqRqvCPeS2",
  "key27": "gtEw8EL3b3rMExHQQgpN4obm3WFXhC8aB2SdpwLEcgpk7e4c9ZBxkJ2HiHRvwTmjEnDBLP8LhAiHjL4SYsiBBmX",
  "key28": "5knyieCYppyQKNc1nK1hpRLZYLMSs1pSaDDPepc7K6ND5F6CPdaqBscgdcWE5wYiwKCCkZdPWTKVcuLEjvw2mMdW",
  "key29": "5hREuVz88d3nPKiUdRFXvek564dHdfU6PesGjNDocDBZbvr5GCDPq1wQGGRHdYEhYLKTePC51VnG2gSfmc45GwzA",
  "key30": "3VJZaYCZhpWBeKqv5oK2YikN6spCKdrGVN7f6t3Cr9cewTyfsgLJzPCi3XqtAY4HGZ6bxcjEebQeDUdFS7TygTNJ",
  "key31": "2jDuF3aUk7dFw1NvDcQYZsMGYHMDQ6H8Roc56nxVvCQPtcsuqP5AAsMSX9Wgciq55FgKHFMViB22bRf8fxN9TSZ2",
  "key32": "48zyn1mJyoTcCKTqGmTJq8SnSAPhhLgUfKZ1hn2hpxvM7j5bh9JrUtipDGzzmfyQbC8VQU2DadMn1SSAFnT9qHsw",
  "key33": "3YCp37CcqZTMUmWm2EP7kPQPJBdMYKtNz3f38xbPxTjPfg61jK3Xq9EZEbR9dyEqNpie5PhkqyHthoz6Y3v7raKS"
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
