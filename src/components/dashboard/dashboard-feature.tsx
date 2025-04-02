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
    "2DNsuVzr4cvbobcH1HR8PzTS14cEtcx3YxUFQf2KZqDX1TcSETFw9vXGqnpTgWjUyE3kA5EvoauSGN813pwSgz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4MJ7uxsNSXknLZwxNGrqyYvB5w73B3Ngo46UWUWUz2VYyZnJxXVqHMCRq2azwsFzZSGAWrD8mnVo3oauU5L8go",
  "key1": "3X5nkFWR9D8UoWt36k4jnDSmtRZdxFRWzsCHrT18LVb1zcKf8vQY9PekzQJ2B4kRkDfngFRWVdtToVyxFni6rvQx",
  "key2": "5Dw7TzXBdxZSGG1NeXVP43xRpM1PpkXPMqZo6LUYYmtrdQ9xZkgB2aKuT15cq8zaU45zWsN3HKNaXyzftcVqu88d",
  "key3": "2Mm8k2doj5LE1vT9QzxcNsziUXr2inzEMpyjQaQC6QZfT77N7jz2jAKZmjXYVMU996cm3VDHe8hfs4q9TtYocDJz",
  "key4": "22WPMGa5nsGjwFaeS1X3ZhYHYXX5LERB2q5B4yyiRNkbc1USWeUyuZStFvh1PjMdd5yB21N5rxWCpNu7zUuU7yR5",
  "key5": "5a6NF7JhiZJY9rdTrFaZQ7XdRtBeLeoJAuhTanEGnKqFgmaQHHH4aUXKf3PQ27YikoLi7sVQmxSStjXVQJQcM8G4",
  "key6": "3YCReeUWFV3JrR6HzjgKRkMMg7jMfTxNcTVs3hkf7t71ASVmLvCY1mqU8xMpjxe1n6GZnhbiqSB5BrBmQz7sHQT1",
  "key7": "5jPRMsPD8QTBz3J9AfACYUf5iFDzkaFSgA1ZkTZdSXgN6wyYQamsqsjUjVcBRsx7nn6TpaUWAzrALaTCdL5Jmm27",
  "key8": "GCmDKUsbFon8djuJkSKv2sP2nRhLtdBkfqg6kPKUeFdsfZ9VYMM4VR7vFZBdEBiknqbSnKBDUoqiZikx1byBf9E",
  "key9": "48TALUDbvUPuMKYkNgZZXBqRza7TV23ZYepNq7U788ixooQUVtFd5moyBc1pWc1qrPmhgkvZR2ctnDwN5sroRGpS",
  "key10": "5evLeuqdJ2AkaXBU2kFe5V4RVZLPDifts1UsuZPM7ocVmSjsDm2fWZLkMnyYbSAVAxGMC5PmfY3696mNCQKbQf1v",
  "key11": "45jmroCviv6yM9MC7UpbTvi5yeVLr3jk73PJ71aqGFv6Bs5zWxaRaPZk1mb3JdWd9FZYFLjiYp8kt5GBTLwRP8sc",
  "key12": "3rDfDX7joB8UtsxrTtZaDrtTGD6JRaSuWRawBtrJX5zLz1JUQqyUB2snow3v7H4CKZsSUqDyVAYmkHTvtiZy9J5q",
  "key13": "nShED2uCEejC9bXr5fvVocxzByrdWAyDe1TRpeTdzYQgW46nzinvrvFA53iERSuN1ygnrMJYk6nLfYQzQW2ySgw",
  "key14": "5RHRjqKKePQKFgYMQdrsWyVEm1BYL8jPB91i6EG9pUFEoSctbp4rYZH5TCJdBubF3Snw1uze9XH9KuZd1mzbHKQq",
  "key15": "msD64t2NSEU5JGLWxacgrrQDVSAzguom1GH2N2p3c7rnzJ17FTx3oygffCJeBuwo5RzYvgPa1iCebDVvxLJm5wX",
  "key16": "2CxQv1UwjE9LcYq11dfv29RjjYJzw2M1yBfwVBw6hC2CeNEBg3KuFfguPfHDtbo7gA4dPq97bjhASpTgAyNs7iY3",
  "key17": "4toyvTwbiDoBpej22S7UWPs7kMZrudyYR9bXirqUDuzNYKXarbBJwAhJHembeq6LqAJsquBMH7BqmcMuKDt5bBLu",
  "key18": "5hDmNQWM7gLic4o7dgS1u8a1QA7mnuj1HVidGGC34Xzrfq4ciFnENvWGUxhH3cC1o5tKZvyQrY9f2jFEksWCqVhj",
  "key19": "2PLicHEk7KKtREtbiRKRtYmXDxDi7fHb74dX49iDHiHRoD8XTcLmLwiy91nNC9mcaaHz1Hiw2vUNga3LtP6t9sAL",
  "key20": "dvn94bKXtjNJ5ALat94Gi3uWopqtapVZH2crWLojPMEF6PrKzsgAB32vyqMXrR9XRLwn96dhEiVUfdCAYAuzMwa",
  "key21": "23uKL4ZK6WE8Fge1gWLjRRNMc7hwMUMFEuLo6wDRa2ZriGWbmEMWWv5RWySGiUxyw5RWv616pCtSV8mbrqBN2dYm",
  "key22": "29UwiFKHYUxnABrE1J779ZjzppsHxEifRi1tqFSU9eYijhDPeaKH21fcptnE4GTmsPmE9GRCgaQrjMTLFVDyxUKU",
  "key23": "4np1ibEj3JurGkbeiYGHSf5uBBY9RWPAXV5SqX72vhoV51vdfSrrrvJYrKD9nW6GjiXmjXrjHoBv5ParxeDxQPUb",
  "key24": "if8d5pPn5vVJeS4BDedzQ1PVVy9WhcEk7EKkzTtLsjVxhQer2ceWMncTYv3JranhFC7fdAZBwufnxrVtLe3RtSq",
  "key25": "5Gqv8sdFyk3MEdXBtFm5Su3dYw2YSw4U6rvwLW3Wwt2b6aFPtu9j33DDPT2LZDB9GeNob3wETSWfmuJVTAuLwNRi",
  "key26": "2C2TekRWCbD6o5274M9yN2dwnP2yNvkYSeV9pdWYAQj4qNXSBTXiWKivmuYNC8FLFSfMsWaV8thwD5EakHuWZTf8",
  "key27": "27kdXTKpAy1bVr6tpfiLjvJKGF3VZKC6j1tZMJk3SFNxdn1uuMyTafPhHEKbbSpgYfyXESwtqAc44pRiSbPVisEN",
  "key28": "CtwzLT62CwJXHunfrNHswy39ES7K6WSq7ogp6TQgkUSXLBAxG3mDxx7qYTnMCT6WhkSTmGLEqjonfyThni6QaSX"
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
