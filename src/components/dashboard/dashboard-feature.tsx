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
    "4uFeAsfsuDtKPcbEH931N4WptcpUPDEsGTvuTendeC8PBrmiRKgVJR92YkWTdL1S2vNBYA9vtyCBCfsY9zDicFd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMHKgHgq3dQBmEDWF29jLF53tPQpX9QQykFvNqQKruwQMjRymFE4g1XrZhNibdugWqc7uVXuhYNNsVCHqmcgyX6",
  "key1": "3RfoQQkPsD4DraRn7vCTrsqWMtsL4vK7dtXgt6bvd7K9Ym8vU8DsztQmWzJCpD7EFABthCYikNT86BoaBFAgifkm",
  "key2": "5ZrLDUiFuBeEF9ZihNVSR1ENtQkQim9idwZxNK1Rvk4Q3xuUXmvGgZ8upsA932HmnAMZQTpCcNR46F9YxExoU2EB",
  "key3": "2Uwc6qhxqjqmz2bEckN5hfakcZycdoWjyzGzMnAfryp9chc1osGnvzSGqLSedGzaq8jCjHFqrMMZqFz1BeifJAyV",
  "key4": "3NbeFC6pJx826XsgJrF7o1pgveP8ux3yrUSsAqH8jbACpjZncogNfKrvAc4eBrFDfFuHsDYP6ZbAzv6QZytiJszR",
  "key5": "2U1X4eMA2eC9vnw7UPF4zARE5vJ4D9RcNRAnnVWs7SSCxPdjKRhUEcPdgnfgK5cQ3yVQK8QMHXh5fbhqKX8rzLFq",
  "key6": "5Gk5Ls7LTNJ79i6aTuNLRG7BL8gLyjNMSGqVTA2RKE5b1EebrGH1z2ZJBBKgMRTWmVgjADsjLsfrQLtyFVhEe6B6",
  "key7": "45u9BasSisY91mcxsTe6HNMrQE3iGLHM65AVPHND5ye1n5rbQAtKdkPJ23sVfbgJzD2Gng6D4NYkewCaUEL6WUh3",
  "key8": "2Ti2ngfgQwdXqhMQBw2uHJN4566HL8uvmmWM1wUG5qSGSaAMppS8DCobLJa8UkLXFFcPmh4ntQSve6Y49D4PiEWN",
  "key9": "1VYdrW5k6ySxdtgizofcVsJZ6e96Nw5zeLixVHcug1aLnWAhSrXggkizSj8Y8NAYuvLMdTit7gQTL8gWkWn74gp",
  "key10": "1jpr32DyP14PjK9eRWaqM4ESCkpe9KRrY9ZdfqEtQvSG2zthHUJYQcaXjU5MZEFKPAwo2WYnVQwWQePcFtPeDB4",
  "key11": "44DoS87C1Xv4fn3YzXTPSaeT9vA7zy8htTYrd8Mfi3ZnTWYsK72Y9CtQAunuJTPBanFtseAtgX1xeJyMcLCVkt18",
  "key12": "5aJ2GApdEJooXLUNTfqNrpRgh84tQR3svqkTvKvuKf9w3LudBKao66v5N4yiVVu7tYdvb2AKi6Qmgm29PeezL8jG",
  "key13": "5WnY6z2xRi6HQ9P9vdw58DKSbHHx4NwMtbNMhtAbxGfnNa9u4XgKXKXUCANo8mT4idNZV5Bi9gDXRL8aPHJEVDRx",
  "key14": "44yCNK67Wq3yUxjH3NfuHDYxdCU3Tt7zdohrN5G5fgpSd4Q2teKvzeu7dsiLSvYE5ueY68St9jSNgnsBvKzEFQCm",
  "key15": "5JfTpyFouWWsf9eu5k8zXY2xc96zjqggjzWTAfhveD1X5unT7RvWGVk73hdHgYdWMCRVMzFHEuLVFMou6EVL4yTz",
  "key16": "26uMXnXkRevNtGweYXiSd38chDF8LyfbZsuHKXWgE7RRjHgYPRr5Ee4TBVsAgEMuoQGuG6xVaj1dewH8KBXFGwHV",
  "key17": "21WNgTsPa4ba5tWYDDURriPtWWCNiFoXrZ74oRGgks2PrLvvQ89xeh1JXAWLSohhVDyN2tCG2Qn4UYQNUCuMi6Ed",
  "key18": "2oYMvvZ41pT8Zgdoqmu4kGcdPHmsZTFtPpkXeTcSBsJPtBEefDFCQi4UhbJAujhoFUhSp3BTWW2RLfaqBuET7FcH",
  "key19": "svVMB46n3P5kbWowSVMJzbECfM1HsdoJBpnnxAvjN6jLEZFq4E6oRyGSam67nVWbp5SmZb4kwkDsPESxUHgcKsw",
  "key20": "1VzdYLEusevoNPPu7jZV54nsgaEibqrAYhTbjrvw76KcazKBm7a5jgGhXQkQHUZb2vTSDnuqpzRg6Btmy6LJ5d7",
  "key21": "21J7eB5dmd54VaPkmsMW6MWXLdAQDDEGrHGrzXvS9chqE45ysCf7g6hzZJj2w43RSrgnaj6Tf5ctL5UBTTtzqJ4s",
  "key22": "2j9kCtYufEfkDnnH9KAS3M6L2Zgc4R8xLqQfJiwJ8ijH5MDcEPUW48W9GSKUPLpUssDW5daV4Cd2USaQNZh4vYGy",
  "key23": "44X1PbCiRqRFuymSxkvPKn9Ac6j2SoRsEm28SmJ6hp1oH26FYSu1bsGnMiUg49sRMbJuzwZt4dBQJcNg5R8hGnMs",
  "key24": "4T5hbeCjosLKg9Dcvab5qauizNEwZTvDk7Rp4tKAjQm9rRp5QLarL8cGhj6jUKbQNuffkpPYJAMnuGUsPbDdbg3",
  "key25": "5kxjRNTMJguZyewunLNqhCRjmZtF7j3aVUa5QBwWMAhouZEuTyK3nMcjFfW3mUnkmwXYPSQfMjban4upPnXiwBLG",
  "key26": "2Uob21TUfWByucNVqHW769qCnKQXyru38aYto4HD2pvngu3rmmZd4msep4EHs1SVh9DBzoyXfZUnLynCXLmtJTg4",
  "key27": "4rJfRfcvxN3bSr5t71AKiqGkfEBp4vGQKHEJytpDuYjY5oAVVDspbcUcwZ5C22whX7ujptEWc3waXEJpAhjfCuVM",
  "key28": "Ak8BChGgphNBYpcTHJ7bjwGnziFnE7xyG7Mwz5QPu9qVV5HkjsL5gKvVSUiSdwVcJproKYfCUok9hzhkzxnBECu",
  "key29": "3sdSinBfFbBAyyafYZZQPHj1prg69i1wdrk6F5nkxLFcbQx5VVXvZ4BhKVPN6eAWESYdPMu8kBp8jgvK1vwAUJxc",
  "key30": "5XGLuErh7To7Sb31fLWCpVGwMweS6K6CjUUvxXzcQ2GeKXW3yRCQQXQfYBNpsr1wzrrna2QtCYhnwBiXBpAwVHEo",
  "key31": "5RK3BdQJry1JreVm6X9mVZ2SeK2sHPWgKQ54PT2FMSRb9dQXnM6LMVSrSD37WoY2eVSDjoxqLt9oyg1PFCobHap1",
  "key32": "4t8DzNLCJSWoof2LbwJYeMuAjR46EfEKT6fsSkRey5M8PgN5NKbE3EFT4YfKeR5CfRcwn92RteQ6ByJJ7aTUdArq"
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
