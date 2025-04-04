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
    "ktGyVMpgxbamzgYUkaZrK13Ci9cV2cT1sVLac51qyrXnaBgETqqPx8mj4FhqMD61LokNWwtcDkUzvV7anEMX3wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rRJM78grm5KB3ghLu8oiewcn8q9ZdaSEmvas4YSsRPECn5wkMR6N8wAy2BBDLxqpWanYTboBWRF4GEWWLYdtHx",
  "key1": "3r64hWVQiYawbNKXT9JvVvokAz12wnjYBPfvSLE5bmeiziQe5avDFncnSA37tZCDX3L5hygV4nNHpy8FswDgTpNd",
  "key2": "5oxtGWQpGpsMT7yhR1nzwHDhyxm86AkexRQKWagoqvbnZiEFKhJTiX9rd1urz86nz5Utr3V7SenneMcetHXkeZUx",
  "key3": "65pr61C72A5Li7GJF5hp6j8sRw2N2zhRDz66Qu8s3W9qGQLgAULMRQb2rx19vvMA4pn2KCqRGjrnDCBUJyK4C1fi",
  "key4": "eyMTvop6LoYce3MyyhMe2uKneWsrKMihWLh4nwmgY9kV13QgKhpHA3MiSHpZnqx7esqBDWgSMV9chGbRb5F7777",
  "key5": "K5CztsKZhqxS4gKQocpYCQMT36uKUWanyNf3Mk4QraVWDAxmDtfisi8P5nDZYFRWaHvY8Q4eH91GUTKLYjS7jKk",
  "key6": "264FLX8GcAvUPRdMNLWDJjrGnvxYHMJpYpoc9S8X9XPyymGnpqpkgTKVELgUJTUH1Nzggrrr92e8oXbSZSMmx9fz",
  "key7": "4f6bqmXvCGJkPwJ69kGfLJ9dwhPB8ctPDoq62Er1ByLMNrPkFYayLhCTRi9gzU7xgtTCxgBA9jP3boKH864V5Rmj",
  "key8": "2xRhzAsYSyDdi5C4VusEJz8YwMqN4KQWgHMcLW4oDfP5znt9m3yVcBtM9BPv7qAScHsdN4YzKT7usvwidAURpZnu",
  "key9": "R9fCxg5VUGMyntuXPvFB2cykrmHzGNg1NaveyLLokaKfiQEfqq8653c5oxHaXsCKvZ12EGqF32qZqUU4VGbehhf",
  "key10": "5ytqpG3ZUECXRrL7pHA4u4buMcK6wMNk6A3ziAsYfifcrdiAd2oVKFkMvkBs8Z6mNfgQRGjn45X88YYj8mtGU5h9",
  "key11": "5nnFkaGu8Kb8jESckMgN7vHWTf6KtG8VZpvY6nT9d7MwS9DAUsvHFATxsCZJS2bY8MTqBP92G7hQaFiLN9MzdPZ9",
  "key12": "2ZN12wHGa94GntBJGDgqbt5uQNspsCXQCuRqS7jvAUBigTRsiKjGVUiSf1RgDmc48EkU4oajiC95uDPJe3PEaSgq",
  "key13": "3EQjuedFusSrg9K4YsstRKZJ8Ygba9YCQckyCfGRntsDXuW7TeiXQJbFhwQQPc2WRMXcyVJB5dsG3KKTkLqSXSYs",
  "key14": "3JtiSe3uZGoRWW2nkNquEjHYdCRSaZNXzUDhoarijxPH8VGeitUvj6yXVXMDmSWGLKbA39Bm1pFe5GFUF744CVBj",
  "key15": "4mAiLLQ83NkFJyseu96aRmoovQrhte1zrak4kL9LiCQ5Y5WL96c2gNVQr1BtazFQP3J9V7yhfQgJwo1e7X1qsDpf",
  "key16": "2uRKeyg2VoHD4RhYJsaoV4xdXby5y9C96GKe4Fzu9AkmrZP8bBENADmHTNYozCiKL31ikVPUej89F3LB4waS4MTp",
  "key17": "4tGqBRALHxDYceXSpQRb3nduka1ahDDUE8adUYKcoyL9e9sRDMGFw7Nnmz6uuiKfBBcHrkbCVaCxHYqgkQ5EsisN",
  "key18": "4hbCw6EQzQr8zmTW5D9cq9eRoF5LMQuxTbtQBidwJdHDmgtz4UZANQHXh7G42wFt45k6VzLn81n9SEwxXcxGTieQ",
  "key19": "4emcLmHooMNmLtTNddoFTRw48mCBQusxzQdZjsPucgQeM96F6kN4pGqaK9wfweEmVxM9YAwA5uF4eCVW5rKJto55",
  "key20": "5vTrDbgyhwHatVZuEWpjhopMq7KaQLwZSE4VXrTEpTCrVPPBaDQpjQpGDBiQ7tqf9bKntrQq2B6ra2XXJYqNF4JG",
  "key21": "5njcFVsmPQj2zygSwf3kcpEzwntYQi2LTcNqQ6NvWRy8aDLJasNkSBdvEcdCEALxHWdGHMrqNqzY5xY9KdieJCPD",
  "key22": "4jNYnsQow7BiUSjnYU1hGD7G3QRc5byj76TNQV7TpkpvN64iKyFWp9tRqELXmPPKj69azHiqZmMY1miYgasQUhr4",
  "key23": "Nbk69bq9DFV5jv4qPimgsDEM6RDWm9wSTaDjMB3Ev6LEKnp7zKb1ixGhRugAAsM91yz4mhx2d9GvzQzBAnxLCCP",
  "key24": "4ov4kDVoya322c5PMKqWGngwMVJyDeGTQeVxUoNpETqHrxF4ED7i2KruCQi8BGkXiPwLpdcg2APTBENN7LtNSNpB",
  "key25": "49LYBaUb4njXTkoXeix6tMFKKBnUuDELZgykajZg3SEdZr6tnEFaDScSKEijRLsRubkSSZQYSh3YgeetJdEQaS5o",
  "key26": "5kNwCMKytTQGd2SJVtTrPqW3p4k4PBzxcDdCERFCUcnUxMxErxsLcAoSXmcmuu6XU1iiYb4dSSX8iPsBoHdD3gBZ",
  "key27": "2Z9p5ra8FhAZ3qRQeAkhC9Kp1dv8aLHTydcXMQPqXZGvpsGXtpy2A3SZjjmQ9BU2XkiM4eeKyv5q3VprEbnRELm1",
  "key28": "3GgTN2c6goripjGjh39kNsWVdegGaedVf8pTEhedGyNxgvrfJg6VZvrj8LBhYamnXwMcdr5R5iLVnRMR8PfJCuLV",
  "key29": "q3mgyQj2GSojqgYXuFJPjiTYjzPDNczFvT4tuEgTAgRbYotwciVaCwPgSvVpv41UwM3oEMnyxi4xHTxt7HC2WZL",
  "key30": "5qm5XP5bSwuPGPSTxQ9Vd7RexvXy5W1V32fWm8Ksfu7B1sWbsxHvBXYY3g5avvY1kyCGZFrEtsHBGknnijW2pDCt",
  "key31": "4uuD3KAdezpkgPJk4xzKepWbkjarabu5XUxuuVha286u15emR33CDdksdxGM58T4zC3ztT37pogKnGks4ipzMAfn",
  "key32": "4ZjfEdoxxpKGftLi4ecf6uMFDTYBs26qnNeEjBZ4NKdd81Twiqs3T4Y7kgyFgAiLVuiYHTgsYxvSGfYhaHnWUFcR",
  "key33": "4qS7n7seNLSLh8neY82nZWXW38WkdVGitWNtW1NmY8HBBUMXSMp2arhZAL9LPtFwc7PkE1aCBUoGBVcSJuuRd4eM",
  "key34": "6WYVSw1MTdMtfs4U9pKvbgwYuQEytqvjNDpmWhQMJBSXAhkLenVunaQ7h1Cx6g7ohjiLAXhGvA6pXTdF4xzxc55",
  "key35": "63GQednaaRyN3S5Xwfh9zpt2BLvhQTkfnTo98wFPrpWxCzKLYA4TMy3FLUDsj2ffS74Be9mSELVE7528JSWGRAEb",
  "key36": "eZbRn6Z1s87FqsvZGQnJnxiGNiYiKvBxE5Dh9JT1r1Z8nwBH4DJ9fzkzM8vVMFdj63na72sNbXCYPrDjwnWWETR"
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
