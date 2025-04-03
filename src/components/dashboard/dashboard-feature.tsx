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
    "tgE8VheJM3ihvd99kSpRPHcdBrwS1F39ty6jD1RGH62Zh5qC895dzZdijBmoW6GPZUUdcMYGiK48cPvbfHEnhdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5s8biGyFbb4HLAqibixBVWauBBp5eTvYPMxBEq824BNgsh42S4esRF7sQ4XayAu9G8tMWXP77BU6tK1bT2uQYW",
  "key1": "5AqpaA35QsZZ5HLawv6znC3daF4kYqbZkHFGTGCLcbuMcJwXQWooovstSSbotLrKVgRJK4JEyvpm36oKP1Qz1K4P",
  "key2": "4yk1dqnGweNAjQuhgWdaSh6dhvh5r8p6pdgZiJDcuUmSyHvfQKnxEZRY7v3wEL5m9GMcDLB5C5nT4d9ENyamjRfs",
  "key3": "46b92Js2R7q6BwzqrAnzfX58T2LeP3CbJL8MaEGUCeTT78Nn9Ke2Lo7S1nwU1VsoNx4aeXZ5cyhFvyP9SrEvCTZW",
  "key4": "2ddDefz5avA92ayjn9y6VQewc6WFDsL9Hcn6oYudfw92ARADNDxzbVTy25k2xgXhHzLH5dK39tHiAuUCJx4r2BJW",
  "key5": "2aFzkhyWLo91otTdwaLHuK58aoP7tw6oQ6Xujz4Aptp5R8A7TBTQ1trE9JawjSgkeAH5uB2G9JqcwEyrtXszwf4t",
  "key6": "4x3B1JTP4JvR3hXrkgFWEMrrJCCV5uTYVMYRhFJqYykqbdYphDDHs83vXnboa6ttuuKmpb5KocrbZUDzYWHbMoRL",
  "key7": "5e77XvkTCqChY7Tn1xYfNzdug1VjqqNVQ2K6JMrAMz3LGQemJfLuvxzpaosf7oDJXNE4jCKgtTrGBTHWsc8XuV7s",
  "key8": "5KWHYMjCZXfvvk2otz4nri5ZdH2EuUFmw8vwccC6agTorMtS7jpUWzCMuD5zboXXCGZG6g4pS2a3GuqNTAAeujKq",
  "key9": "4namzP7YheSh7zSwop4c7zpBngJ4Eot67N4Vfdj44zKqMQBiUnjos2i5e3KQMUmqSwtod4MHebjrEA3WotWXLVjW",
  "key10": "4zJUeBvGAvz2suUvPsGQc1qxNfabjihCu1EW8oxCUEakT2mxZ6gGa5TXwSPBeGeEAm8WoU6anN8KjiEgUgZjLA2q",
  "key11": "2CToAGGmwqP7icRCX2BBT4c9oGZuP3dHhJMVAEPLAfCNPYwAzYfE7s1RZbxHLg6CPQJuvaSWposY1usr15Qc4j7s",
  "key12": "2E3edHiPh1bXk1y46ewnxbcLkQF6P5E9wXfLTyW4NVSv3rzSnkhjYVegZsFHteXVDbg2T3GDpZZSMjpKskDeoW42",
  "key13": "29sPk1QTWB69FtmyKi9Gb7FxuwZCEaetMwYVGaCawqMcVnfhjdCoKwuRES2NvDeuChyJfYzcsnJmYEfKEPQTsAdS",
  "key14": "63RJfVpGDxfFDySbrAZiwrtEBvWeA3MWmuHXmkHBHxWc93ymFCi8pDej477DN2QndH9MLJypCuFsdf3AYJFaAo3f",
  "key15": "67nGPWy7yPrDWvS1srCi74dwwDPwAR1DkywtYmXpeY5mj8bjj1SunoY4zubcykU5QLiRobxtgesfX5EwfJKHX4hw",
  "key16": "4RCh4Wta3tvReQB7DLseaP7GezEFggVRN9KS2NfjuXjmtd9TGfqG8JQDECHZgxQzuAGHZcCfA4zmYFgBdn3U764m",
  "key17": "4Q8SNCXf4MDWZqFMFAyd5x2rTGgrmxJCBysttxLonx5sumA6YZoYAUKkFtfiYD2QKvmv66WQEPRoZ6zAGwf1Fi4U",
  "key18": "5hdGBdR5rQFAG4ymXkSkBk6GRpXSNg8qg9c7UFUjhCUfCKgQNHgyF4vyYCq3bQczZRHPuRS5f4YTt6pmAv7XAQaS",
  "key19": "2LbaGFMXrsf373GowKx8RD2ANWAXkxHewgTKGiAb4cUgHgxj3SBSRuTwU5vejzwWpM9Ta9E89WzdAjCFTkmiL6r5",
  "key20": "2fm7WCpPZ1iCv58w2ZruvKvZAgxkQXDsFai9VXJrVtNvm1KgHF6cL2kfMMbHGt8hh9pdz6nhYDWTbZJRrcpwnWwx",
  "key21": "KAc4zPiLZT93t8zPRgPzZPk9z6uksN5FaRYGkckNpStqFpahQXD1Vpzfk9c1tUimnLcVUTTfFu8pASdZu1jAEo3",
  "key22": "62Kt9ZcVeCzPrFvTTncqzEML2p3Ufi13kaiVknzBv6Zwrt5vnvScBnj1u6cK1kRpLwq6L2sxjPuyVzh3gNSFJJgK",
  "key23": "3Gef8NcTjDpdZB7GrV2JRXSoQcMJeuipJhiE5WQCSrG2na3fr7nFEz3xE8iQTfv1fE7m2yozu6xxp9MAvrZNGJjd",
  "key24": "2N1sVZMku7nAJS8CC6aF5p4EDK4qHqUajThE6trGqyV3j8pLp5cAYhJNTQTQJA8vunuCJ2Fv25bL7imJzr1n5nyS",
  "key25": "5zbDqef5ZuLJ7R6LkUqcom84FkmEouwBEpWBrAWWpycKpkzpQcA7Y1MB3yr3JPXBz2xhXjMmzpvL2ecQ4vKPqYec",
  "key26": "4QqfkJDyFTtrRktXVTQkz9yuqhopwbCdkJKmsqUDGVnhqzVXwPCZxDnY6UpFocRBqXSzWsDSvMBNL868yP9oiq9D",
  "key27": "3hUBpdtZeDWgnP2fYZCitFJCu1qTm5xkpDgVnk7aEKbqZwUeJB6BfkyZcLr5LLLCmbEekdzbarMcSULP4iMVj5FY",
  "key28": "3k5SoyQE91pX6phjWCEiybS8NyVmbX2QhfiCCmGPCXCURDKpyYExzCdEPTY7twsU9yb25C1ndsQCHknn81gBHE2Q",
  "key29": "3Hk9qXRJQZFHSberWMMXusexKD2f9EyZgU27t9pLrxQU8k9CGUnK8dqestGs7P2xWUj1Ti9mMF6g2ADaKLgEPaxQ"
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
