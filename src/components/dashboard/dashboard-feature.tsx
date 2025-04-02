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
    "4S64eXiZzBK6GrsZ5J4SMJiAPBEbx5czRS5TGsxQ6uQAtCrz2Rvyb7GbtctqMfeqppXurpYcdfatszpa9kdhw9VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xg4rKdHzHBDK6pa2e9kavLzy93PGPYw3yvM2jS8aiCsFJPFtKm5u2HEsAzQwWZzwSguwhgobpJjzbdB8u2B4aV2",
  "key1": "ye2xRzKWMxFVZasYjDhbjFgMjYyoft12ea2qS2HFpApepPGqeiZnP6Wnm4BZ4G7BqJTPCwpDRBpoiCxRVGNzc2d",
  "key2": "22S7KbXoEBDoF3iPxoZr31aKatYHtQvnghNpEF7kWX2w1jk9LRur5prmtoP1LRBLE48T85MmbSLWTcetq7EzbRUw",
  "key3": "2kkGiVq2LoYuG1LB9kyyGywLMbw2xPWnV8pUWk81Gzz3LzMQkS3cYQ7Eqrun6v3v4WZPRnSEBhfoXsEAfCyFMi89",
  "key4": "2XHUwzyrVmXP7vEgJezk3q4383CRR5K9tYBuA7NbeAiRn3b9VXXn87JjG2ixCMb7q1mcCTeRdkDie5SY24RCppem",
  "key5": "47Qv2rPFfnBz7rC68RuVcMu4NC5CmTreuM9HCPRp57H63V4hb6rjufwvLK2SZpKT3KUb3mduMzRiakVsFpkqtsgb",
  "key6": "5rG2azHYrBj6kr1YUL88LDZdoeFgLE6xF6p8T2UfEp2RrRKURuREnSPA8xLGGpe7m5RYp2m5h6NDmRWsVcs8fKrm",
  "key7": "2uMfFQR53q1wwzNi1VapkR4ggnbDH2zWq9EJ4cJJBXzjkxqEAaBJb67C3Ni3NHgVtvRxU9t65ziLeBKcWBqWu9td",
  "key8": "24Gaq7j6dLa2rtnX7e3UVwmnExPeqLfpcCTVqeZhqyQG5iYw5PUVoQaPgEZdo6bhjnUPrABdKRW28v82NFwYTApy",
  "key9": "4KpYtYHCkvkmWMumjir1BhX7jpR13qaUrdNZDsQ9MNWC6j2jquZWoxHooX2c7uxwS4qs8KPaYrp9QFq9SaR9tK6x",
  "key10": "5LcheFXCZ2GpWEmpjSwhf4BarQGvkRSQr4qW9FQLsMXGkBymEntyUhVLeogL228saMSKAEhWa975sDKdGA9MASDQ",
  "key11": "5a2sCgyjmXw9H5d5ReyqmuNivAhVP81C2n8DgTANifbqfom2Y2NrFkCxXVUCSjJyycFtJmsvMTn2m4WcTf7qxk1z",
  "key12": "385VwFERT3m7CpxhetAH1sLcG2sVWorYaN7No3xffZWHWwCwqPQXTfpX8r8h4T29Qi495HBVmfhsDJpKQkAbSLaq",
  "key13": "3GpkWLSMcmLVGSemgCjTxJRafJPjpzVAQ31t2eksxZdpanFj4YrUpgiJpPcba6T4GBiLa6GbvwjmTkY341ATrxpA",
  "key14": "PQEMQU1g5rFRYsTnC4ejEPCCd2Zg4jnfWNfe3pbezft8WwgxS57zNShvpWbZS1WUXfJSwc9PmcXNKRGqRr9Z5un",
  "key15": "4XCNN2yAaSmAN1Pe4fYB6jvvpwnZAcmuwppqe5Ss3EbKEyKwx5ujG9jXbeGu4J5uoGPgYSbNqezttMM4kUMDzE7Z",
  "key16": "66xjA2iHTpV1WbKuNGuyvy79bYAd7zvJi6G8tZfPzgU27QbrCfVvojyEvyMU6pBdefSZXNdmvizVo63zWmtqMFHF",
  "key17": "36NCBpVtQejB4vg7zkGZWDCVxwJ3vcKZKFVDLzVwNRmqyWvVcfujd76TAQw9KUNM7ACNfqGTqsdtzf4rWnBNboz2",
  "key18": "36Ud3SLK1YpihGQZTgTKDg6NbKBbMybyDfboGEZ9SAtXwc32HTH5g7yv5YSGFLtyxTq8wDD4R9NbdWBhvNp6vmdW",
  "key19": "2hX5HFqJcZDbpdt12zCQEWvUGVQb9ZKtLT2RtUcVPyVqc7itXVnaeySYf5dZCvFhUAVsSk5zwCUvgZ1FFLCAcpRh",
  "key20": "4KMqfH2wJLyNYkZnnzA6wpGcg7A4d1P9m5CBGMV134LBG7cqq27WCcadYdcVqHu8bHjupfVeFevV9FLdaZA8DAiN",
  "key21": "63GKzbBbjirHtLeyoQgvRYmEk3yPRHaaTEP18ccfXumcZLFVoF7qWXrtcDEa6GpTUHN3amatSNwMcFhPNMUfpRYQ",
  "key22": "5BPcZBz9szNPjTAMnJR8TfFxNZt2t45qTNTUgo4VpKwVu8672D8aJBmbFTZS8ysG4dQCGMFKNBoJJ8SQnUqUkMA",
  "key23": "2TbHKT8iN91N6sNkKGRp6LJCBgnQ88fk8VQGFAKzG1Ys8qWVRqXj41ej8PC1KjB6T2YqT61Mdw34oZGUSTzoHoHY",
  "key24": "52m7KRVQohbEXmwFYJywneAg478yntGVZs1mNT3SyXhpai3vT3xx84oFVKoCtN4QU4SrNG2dgA98Jsnk71nQPQBD",
  "key25": "4BvTTnhKhumrx9h1nDZYYn6bxeiUxptNDLtxghqgzD9d91WQVjGWt4WmKpys1h5GPWMKGUBCCromQEKAQDazXs5e",
  "key26": "5cxL46MXAVa54JHr2iYWCj2sXss24GR4CZVK35UFHs7DTW6SJxBoebL3qjq4Ae4Dy7BNsH1WcPADC3CByyvSjnNN",
  "key27": "FijCqxxZqHUNAztjzas3BBHDkS7qrSyKLp8rYQFR74UM8LH1iCAS9xLKGe1znsHGpK6gAG5RMXg29nnqucefM6G",
  "key28": "4AP3qnbTVsjKtB5NAiSjz7xESW3F6nMFkwCJ8EQd9zLSJpeMHNQ4H5FLVehcnW5KYdvQjRHDhqURV8hsGPrpCYGm",
  "key29": "5VDbe7Thtf4Q5Q5eeKgc7a6Juawf7fALDe7pvFZoJ4uit7kBJbUUkU3rZxmkmXAw3fCnFbsMGDTjwv7HQKqFS17h",
  "key30": "7qGGMLAZsbfMRxiPEdNbKR52313UxQ2qNsujTuT91o4oKtQQu6nbj7SwEcAvguszQH7Ub4HnnnVukLHvZmZHPcW",
  "key31": "4rRKoHFKWpEd7yqYLrPMkFKQLXdGbiXfjnbY6Dz6jv9TuHh4o3WQB4YE3QwiV2ESGi1j6GkZGQq1GeR58iU1eVaH"
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
