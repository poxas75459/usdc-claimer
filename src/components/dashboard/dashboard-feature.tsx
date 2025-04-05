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
    "3m3ZMaxxgdirmHLK2jgPBNp8TaVxa2QF1kuDV4G5xLeoAiEg3HFoZRJsaMcSAmfthGCUxnWsL4P6Giwg6BWqWLch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25S6oCZQtAYYCL5ADTXATa6wEzvGEAbiTRHhGjUdUraSUiTNFxrfezHb98aPSEcii2p223xEk7bLW5snSABcbKoS",
  "key1": "54DgrjDgVc2b3UdRMqYPGJgFcB1e1dzE87tL6xLC8vDRD8KaTRmySrt3HUVBheJZyqmtG2pyfAnNrFRBofEESP2s",
  "key2": "78KfgkhTKkQrhhFFy9GNQnJHNdW2PSFMgUJWGSjLyN4DyzohC116FajdfSZ58oJCXqu1oGagKgaZpWW1Bt5svoK",
  "key3": "HBKJd9sFTgqChCMfnbT3uQxaM1PEapdFxfJadbkBBpsCpFv4gjVra2aB3r5vM21v1m5r3g989dqBi3VGHEKK8xd",
  "key4": "3CFyPKJMZQbPndJ7ufQJ74vcet8kHqScZmGa7pdbUGHAFbexbHDRAbpAyrF15U3wNoetWYB7NwkW7G4WCdqkDjjn",
  "key5": "3wj2yNQ6RFjDwQkFZx5Xnw9FVU9sZFY5k2M2dotLJCJRgYxiE1v7fADtZDhSBFvDh2Cjz1utN1RRenVaPUTqBH48",
  "key6": "2r2p1vE3qxgcZ3vpbyDBpRvsY5MGY5Q7BKN43tL44Zhqrzt5rttDfGDacNaV1iFCatE8b5yVXD55EPaLVZDW9Qwx",
  "key7": "4u7ZNjkAuNAwpL1epKB2N5kabJkbrDq9uLprPdyamUXoun5GBnq1U7nBnFarQKUk2yFP9hC8s9Kcui1m7tVCLMej",
  "key8": "53NXxK5LueKj7mUsVVmvmddPWvU38rJC2W7hBDdFv3szCozb3deg1CReqgzVk1nbZ1n83gG1ehMKQpGRh6JurKmm",
  "key9": "2tvw6EbGbpe29LmRSzj9q8fu2LWrSBb7szCYJiR2sFzuroe6zZ2YBoJVjm17etbNkQvQuqn2GSqen7vE8CWYHwLE",
  "key10": "eXZpGEWu7Go9drUxZ843XJHzgDUkoKGNpzKgJNbpMYj8g9VRKg6qBJryhwxJk7BtaBynM3gtqf7fxRk3ZeZj4vy",
  "key11": "2bmgW4u9gEreQAYxci6GTPj33Zv9ajydZh7L8frN7X7ceTuCCvbcooFXf9VvMLz5MFPYXPUNKvefYuieTH2Rt3kH",
  "key12": "3DDiRJSB1c6zpaMtuXoZKFz4rcq4cFqxU1C5S1K3DgArUkjzmHLsfb2KwjFEUHRLUQEnpoXX3s7bpYG9fTcfkby7",
  "key13": "5PWNr8SXHHZPRMsKQsXS4GJopFjjb8wnCezRBzffVLyWCtcVySndVuvo5rQKnWAjcFpTR1QLCcDC7XdS5bi6oaKo",
  "key14": "4RCVfqGh4HRCXT65HMN9ecV54Me1U6Js9RRJm3UvvMgPqiBm8efvmtVF8jCXaTcWtHVNsVP4Bn2Lh9FdZ4Q9NATE",
  "key15": "3DfEiDdbUcagN1hU3ZVA67Cq34gx7mzQ9bxCR3AmXYocaXDxYfQ185b8X6pyLxHkxFQ6vZCsaKmk2PGegdaB7rtS",
  "key16": "2PBTEAtZbZS4DPwE45agCmZXkGuWvmpjihpLykQk8MyizWUQErkrZUFKf6aX2jx5gSGvWAxgRJgXq3EepqkfD27o",
  "key17": "23PxRHMfdbVhiTLRvgimAHuagcXLEGkKENZ2bN8U1Q83tY8G8vSUuiVt9LHcRU6YBzTyzUesSwHCmEvaGTVBhKVD",
  "key18": "4YXHGVEvhG4bUYiPJcRPBXege1s8AwvUax58d6aGpEd1PezHK6QTBBpuowFobK5ErEeFda7xDaRauJMjgHyMFryB",
  "key19": "JEcSLtbMRHNJB8YonnbdyhqmtMPwUW93gbjNzoWKBBkT6d6ENr2Fk5WyskJpkMdRa6FFBT7ekDijTzzorubKwAv",
  "key20": "4XRTC2C1n7WPAHTZZd5mTZzZLZPHHvx3xYV5VRUXHyaYcFJncw9KekHPJya138vPbjkqzJJaSdavSpcBUfM1xWCu",
  "key21": "3n43iMwS59x8ruhVxwNzM1SrYXN2Z953rhsPAQQYqh8mReDDuP5hnFy4yS3ysUHHrNDax5c5HCYTaDfaykgFXL3q",
  "key22": "GtGv6MynV8dVyVHQvAaeTSXkY9o2AtfqhKD2z2iKcipVBZwbJtx2HiUNpXYcLtkx6HVNv1op42VQmGMHd2QESuu",
  "key23": "oRDcqxhHbPKSJ1rBci6VZtj3adnGseMKyHi9NDvFyQkix7oqmroB8Ct6dkmR7cseMDjhyA6MMXiB22Z2k638ALt",
  "key24": "4D5ffCt5GNWSawhYqriQGTL3FKaiZ88vDUp16JRQQCrqMK3ZsE5PmnctzpbgRUM695S2P4wBZUNJDNVm1q8oFGi9",
  "key25": "3oqY4g1GvCE2ATPyYfwu6RASSaWGxJouR5ojmU7EcsiMGA29hAmSHbCQ87RPAUTjtmcQvzomR4p9nwAKDpDPXzYJ",
  "key26": "2opeFDhVoQPPbpvtS4vg8TGg1ozs28L5QBQPdaJAU5ZnRGN6x1uMMqAHt8N8kQhD4zYYaV8obgFpzVSUWf2rhtup",
  "key27": "5JyUhXzHpFfmfMwaxSpttu2Brh6RGdi3uvg8DCEfqiym28gAjQ2TyZqNfUuLpXR6gkAQBp1MjMnGsJiktJibxhQa"
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
