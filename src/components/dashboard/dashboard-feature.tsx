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
    "5VzjP8QfTsL4j9CJoLdZU17iC6zz4iNenc6gnCzMpU6mZEqGVaESduo7P1nbdpSGkKfk9NxRAcpVLo7NCguxdWdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7NSwJyvpuT7qQBgKPLse5Mr65r15hq6tYBaPue81EU8n19Yq3agzynT1mBwyy3Qs39Y1LqWrZYSxVXN9e3NJ9o",
  "key1": "2492uTcLc9D3uKnDD4EgQtVEbFHdUqzvPghiGR66nb26W4of11oW9Yqa8wK1Jh56VBmRBWKka4QLnjuNkHW5AXVN",
  "key2": "2A5Qax4e6RZEyanLNSqbudABZ9T6vS8iV6Q8gBiPg2Pu1dSDwJV9FFRfqBXc3Kxu9tLhti5yrwVbC1S57DEWhBx8",
  "key3": "4bFWREVVGBSJWA91W1JreQfcYnZcUE5LchCJ5auNT2XECENLgyEDak5Bj35hjEk1o8Kas5C1ommDeyFbaHQy1dri",
  "key4": "5fJgUhaDvaYRdWzP9FcHPJcykdG4MtTXPaNc3s6qiZj71rixGqij6q9BTdW8HPX4YTAhoxZtcnuSoNDfCUd8ZLZv",
  "key5": "2heGqEJsBSaZ71PdmsmxsSULDmFAShqS89nsPjAAbT4uCcYngtMKk8VgcFhS4eM9RNLn8t2FQdmZYzqghCvmtkkT",
  "key6": "2mpUH3xqqsdMtETotnLjPVceCAihRRQC4NEEL3adtC9rkMqv45qidExtqvS6GgJS9h9whL9QSZYNcccnY59Rr19J",
  "key7": "4TyMnRfoCopiKLXQBnmwXC2J6p9jbmsYHeYBBeutQoZaJy4TUXghrGmteQk3xwJWdqk2cZFaibpDCYR2Gn93QJen",
  "key8": "4RZXTqTGcHCXe68PLPKeSWSYULVDGV1SmNAZH3QF873hmmSx1dBUB79QzUB9MJZoJNSk4csXTK4ui1Bzs395PqSB",
  "key9": "3FN6dWLER2b2b9Dk5Bjuq1kRfauRTv2XNSzETR2Zpez3KASnN5xV2JA2FQERrLh6tZbHFJAqPMv5kERitZFT5yMr",
  "key10": "4UAKHCV5ErE6TfckipGjZJU4kxtn5WgNyoGU14Y4fmW369VSLNPg1vUKnuxqPW5SHXPifSW6tXSHir76vJpx6zH4",
  "key11": "2tU68NPnAbGvmToGLRshsTx4Ctjd4FQijdAJGpB44CrE6oHMxjkHqh3Cgizq5ES8hfJpQtmNYQAGLq8eptzq4aDw",
  "key12": "3PrrMA9Vzwv5Xut9EbodbJvXFjbuaP7jmvRNJfiojnPiyGzHSQp8wVAGEhgHFXTLSRxRWYRnBXLrt8mhfbcK8BBq",
  "key13": "2XsWRD9F2FJJa1db3Wd8MQnwTRdptMU1qMctuK4opXMiXgoLhK5GBsSPCLPpoTkwoeejH3ryZrVie83vS54iZTmQ",
  "key14": "2nGtg3MAvqYoHBgS4Jv9J8v2u6BHgFfYheAFZuMTD4435PHsVaR2rjXjHX3wc9DUHZ3BrGvuho7tY7hCdAkzeN1Z",
  "key15": "3jLsETjwS3mrTyFP7QRHqrpV49wKh2rA7KXA7v1kHPCuiCcNbUFMqEPMedQWfu2o6tLKmKgvQBz6Q5fukonwdPWw",
  "key16": "42xzpVh9K8qEqfsfkb1UwFKJY9hCr7q8unKPskH5c4mwh4DGP64XBd6rspem2Y9L5ENB3a8o5a8biWgNUwKnQr3r",
  "key17": "5r6rXwus5QHc71AjKsxZ6CKrB3PASfafYpTHGPN7aNrCfgFLPLqFSLPS7qCMh57d3YfLqH4kSnrSQ5a2LTZbd18q",
  "key18": "CjnEMcW5Ks7NAi3EDyQ2dyrwBHaKwhXKznkoRXxsZ8NxH3Qa8rT3iLHSiXdwuDSiXtYUyFFeWkrenUsLc1hm6LP",
  "key19": "keQ4CSi4QVMQm1goaRMebb2E2UGb1fDrRLY7ckKgjGCrsmrG1www58RGNZq1rGFv9be5cnsRUNyTonn3WTSm7Fb",
  "key20": "428ZXaQjjYAmgeYFy9KUjvfcBjUiUeCe9qLoivu5zwWWYu92P3egNBWoUCiNpqDP7obciLXKXtzyS4mKtAzBv3yx",
  "key21": "4udNZqDokpBskY6VUnkm5wU8XtKd3hre7GuauYDi6z2J76uShtz4Bz29WPTaP7v9XQJR9mSHPcs96kLtHYd1F2aH",
  "key22": "27PtwtDxGLgdGrhQj6TqavzkCDWvRTpW5LRmrTEUfvPf7DF8GyoKqqJPSk1z87VyGrtQ68L9dsJx6Bs7trKEmB7z",
  "key23": "66scrnUy7tAxioeYvD13iR69EsGToSMmAwft79Nd6vFeLqNw68RS3mky6ArBPJahdpx4jATzsEfz5ukzp1xS6GmW",
  "key24": "R6eg7x1pzqT7P1XBFoNZkcQfzJiPMeXpYwbu9mDCRkCgVbPy6HzB9LHTfLtRk51oBfZowHwUggQ7Xx8REtNeX5j",
  "key25": "bvuYYGPREei4wa9tEp81RMrd5NASwAbEj7DBN7B3tH6RLCHV6qJMBhfeYVWAMD1ERXnMAknCa4b1a1avZBgGfGJ",
  "key26": "5vtQgLEoMRzsmDCMK39izD6Rb3wtLAyNowMaizF7Ks6v3F1UbFTwAP2nVP9ZVhKjEeDxCmMQUULHTY4nGosoM3jk"
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
