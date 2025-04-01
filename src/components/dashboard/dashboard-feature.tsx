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
    "1TQMdQhPjExC7avuJK5bZrif7pT6sRvAuEJYnJa9Q4KVB9k7ReswSzVfsXaqjVBqSLBqDbbBxSxSJA55bqfWABG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nEcpWbUxbxKqfKNDe44wFyDvk5aVHn9uBdNFvSPpEoNca43ZoMG7eGjVehTm6AKcW3aCQucGQ32L7zwQe4LdPo",
  "key1": "4fQQMNiDyZ2VdZeXYrTvkVvfMTdbKXRNb5vJny9f1MbKygku2EmdHBVcGyhqbwbQ6jkLfCvdkdrJgwgwYUN77LXp",
  "key2": "53UzjZEo7bymBQCUsc9x7nkwdFP8EEBuWEmy4WPju6My6hP2L9ZXGmnE6oJ6Luk92D7zqXMFxEY9nQYyYRFqA2mH",
  "key3": "vPNEPEMig9o5TSfXf7SVQxMx5w5Ne8piL5mRSCghxFPUGBcBozLo5hh4J88gpPPNo56fWSxYcJt1qLWqUwA8Jkc",
  "key4": "248BRUUBKdsT6Jf74fuk6THo37HQRDTshupKMvY88SMfRPGp26CKXj7sFMJTTGYzCFT1u3mYH2NwyVzinv2sotgx",
  "key5": "4vrtH5Jd3a6siDAKGvm6SBN3JcPUsHdtenBTw83ZqbSUKQQz2RcHQ2ef8rpUbNhTgzphYoMLH2XGxhG9Yw3mCuaQ",
  "key6": "4Ce7sa79rvJhWJEqsprJPs1QupcbzJxqww83GzXJkLLjSGYyXsmcohJKKe1pFiNGo8UhxNFkhAnq9LFJYigMe5FW",
  "key7": "4gVUZx5xqjKspHBxhiaL4cz63XWXU8RFYYHiWGEPXqswaDHo1w7dkivin6HhcS1mDnHAuXNtynxXLtDivTBTwCQh",
  "key8": "4gVYY36T1KvNdNKM6bahxUhuwHLrNs3DAsdjtUJdcTtvPM32veqsQHf9FZ1Coc2PV1vCSJywf3RLvM37UhiuF7Do",
  "key9": "hBB24AzbcUnSfpP1nxGm9FHgzTPFiGpbxL2RG2EpzE2WeGJN4CKSddJTUWD1N2V6HDSk7Gz5zMHVxzppTpgAKHa",
  "key10": "4TRMLVVfZVnir86TGK3eYT7bCxwR5N1EYE1ddZ68g3VLNHAJ32o8sAjrCGSQbqPtWY7oBm48B9CEEU44DpVEATh7",
  "key11": "sHmHdouqFddWKHR1SmQAxbPUs1BXrzH2wNuaPrWY3wETHxKidHt52JWZHQ5krFp5PhfN4R7EF9zQjJqyGj59hrd",
  "key12": "9JL5VmhbgFT8ZWbb2c5MQCe9sTduXvphWfcHvPfRYpVUjcycPCoPwoYRK8bxDF8GinZpxMTGXerMsoB6nrGRoDJ",
  "key13": "3eYg9qCBQgtAdx5FazWgB8ZRrzAXAyRHnDCH3vrweEKhxASuNXbn3aDgDqBtmiB9c1fhmVGFFU7eFWLNniQQWgBE",
  "key14": "2chuQd49vm1p28hcFGHx9HM1sQ4nUtvuz1ic8fTGTNmh8qtasawa1kZwv58CcYHFfdRSpbmfUYPLKRNJPZGNreuY",
  "key15": "3eJqhDgtKQS2mheE8HDHBHHbgwqf31friFg1qqUAKLGbmAe9rEmrdnm8cHo3WgV7ZdpE6Qfd2iXcGBvcJrp935Y2",
  "key16": "4thyo9PQ1eNAmpzTYcBx3XJTcYLoSiXpf4TNh2xsuzXpCJVoPy3mV93uQdeGpKafUHQfs8r5Fea53BQUNqRv5Krd",
  "key17": "2rFBb77jzSjNBaY7NCTWGdn7YR5KKtE9AhnTn7ZbvWzwp6oQPU3oWxKhv1kKR1sZXg3pjLETxGnbFtd46V8AyukC",
  "key18": "47sscA5Fik1js2EfEnbDEJiVsUvyvu6JHBNM6NMNfihxYKn1YKgtfxpyNypoKhUoAWKhiadfakRYVqs99zoaYvQ9",
  "key19": "33xLejNAsbKwqYEPnLaEQcAAM5WhNVQ67PNgjDRM9G1mKQbVbaaboC9BdgihhZ7PmRYfmzoSdN6QE2ytHrdSCgsd",
  "key20": "21heQWT4XA9WSEpux55nPnTG5rQmiayjTTqFif4ANrrhS4y7XwCsbEJnbvdPaqDszfKmqtHGaVaZskyw1mvA1e2F",
  "key21": "5TBh8YcWc8vRA5PUzWQkXHVgPrhxdvhvNFKktWK1417HyPUaQoLi2JUCAvDCnxkcCeeyBSgJtD3LKH5cZ5GL9r3S",
  "key22": "3wR2SehWfw4ZnMxZQK1NFGkZzLSJATTzpYNn1ACxC5QVrftjcyPXS9rYMD1K1akYx4aRRyYL1axZQxNLG2j8MGd6",
  "key23": "4CPVA3CjDf5RqMQxc9PTcGuGWRWMMV3PzAtS6DTX3QohisaQJpceA2rdxpFvBNar765spjYbPLopNJpp4UANYz31",
  "key24": "2EgX4bpMd3HRtLEGNZi7feJnxTfsigRc6puYCuDww26EjkictaJdakykQX45QhZyTz4yZTzncDojkziEnvkg4XMR",
  "key25": "3Tk6E543vAPHpT4Q56dhhvRGko1DW8C2crYrq2Sb6Fq8mGNKqdbHHYJSmXyBuhJnKdgt82Whs6KGvXKZNoAeUSea",
  "key26": "SKdjRb4cA25QoUSC2NGDxPCREXRYfKE7az6WE2cBQD2AT4YN1ewgnYuzhQwc64zBeiEgU6zkREoZQX9gLb9YG6i",
  "key27": "4xLQmrN4q4T2D5oa5cv4NRgYDu8HH1AcZMfizYDZabxYYeSqJAfvHuUT5D3oYfCGs6d77mzwBcyGDr4YUv84odDE",
  "key28": "5fcKFERAD3uQRrLHqcBSPknp5wHQ3KnMfHG8SogtDiXqYszb84RDXkTTh1gmcaWmKD4Yrrn5nmKAL2Y7obk4YaH4"
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
