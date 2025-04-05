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
    "GVPYY3dneYpX5fo9tX3cUXUowMa65baQbiA2XgoiVTxGhNkbEofUHJzTWcZb5sDXoNLRGZD7ZYKCRRcQ2Ei84BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mDRDy2NaRB3MkptUrbCh2cVHVmQZRJEfywqSLWHvy9AeCyF9x3RLtjFhLv1Tu66Gy8K9PCh2WQ5k7419BrBo7s",
  "key1": "3ad73m8XcsQiLcx2TFjWervRMcceZaXmv6vDvVXXCZMvcKmJPHVkhBoMX2sGpQiiPbThTViJdueVRK4P9d7eXkfN",
  "key2": "65LArn3H8Eq1YLjZgiyqhSAJwVJYDoiyyHWZnbmhnDo34uQEKSrAMmC9sreUEerHBesLyoC2VMXT1SKQX2y6Tb7r",
  "key3": "3L9Rpbn9FiKeVDdKBxKTo1DZvrXUG2737ep8Qr2D965RDvYwq8DqGHJJahpeaGCVN4iAxiPLcYxZN8L9eyQu1s3P",
  "key4": "3JFarwBrS2He62GDckLPsysdzWjFD73ccCNRN8JKEgquBBKawxUJ3nJKq3jyotRcLqnKAorob35iy4NGSRa2rf5z",
  "key5": "pErjpnZ665UxSYYjiAiPapz9vtVav1LRYmrj928uwcPm9PsGjanKXGbHNXZyDADUMAtqix8BoskZ1o1gTh7Tn4d",
  "key6": "5BuKWnvDUtuha6jf3AV8KaJ3q2gga3DTyX6k6HYd76oPP8ryuRxLoD9mqY8Ty9ZEgkPQZmYGVPrLjMxgSk7hFfXt",
  "key7": "DiHREnYk1kg85c7zPbXKUk9NJT5WBDWNQpuMZr8i2QVsjgVkud8iuMgucXi3YCRTngzHWeENkkcURmvkrfmSQ8a",
  "key8": "4hx2SZN9wHss7HnifxUPFkqk5utZbS8WFdL66hmaviZycn28LUHLDpWN1avSVT56ynhfLYG6gjJXY8TzXJMMTV9d",
  "key9": "5LoKprWf9oXKvwUq2d7qXsjvGqZmHWj3eGWxbW89MFRgkZNEPmJeP6Pb5cJfTee6howj7PEnXG2qEdnq1rtavHM",
  "key10": "5ciDiaoKb9wDjhXP9ER6vG5NaJXHZ36knjWZRVtn5tMi8f9C4oRH8Z7DFm3kUPr1FARZCxyauu5Jf6yxaFSZRg2U",
  "key11": "5wdTPaGsZDVp9gYTHNdVRdhqbVAHdRsn31RY91CbipEE5WtgUw1jQxT5J3AbhmAf7aPYP8Fx7HYzZ8wPFGYAupod",
  "key12": "hj8RF8N733ctAoP4ob7qwm2wkYBfZaXdVrdRst33QtzKRBMS4e6rkYL5vHR3dkUUxk9rif9LQNdKFTtsSk8Ybcg",
  "key13": "4pJPYE33XfQb79W94o2uM9zHWDwqLJfWpGwBRCbdcR7mTb9ZNhrGE6wCiaXu7NGordG4YfCoWdxtpZbmaH894HYe",
  "key14": "2dP83P5qjxEgTpsWztcuThkh2DpKkUeVLh32DP2hDbRR6aDCCjCG43dPUPYXoPTgxWdV2dPJH5BeoSjTK84EaXFy",
  "key15": "2qdr7Q1TNhka58hsAjXy4B2FNTZRwdVrPmUs1f16kaKZRaFLKS719j8srmEPstYMswFKzFjnh7Meuc7jR3M4gxPn",
  "key16": "4k38z5imtDuWnH6mBz5eTPTRQgXUuv7bQZhTDbZ6L2B134NRd8DSjZoSgcc2qZQhNdsmYXfkCudbatSQTquuemdB",
  "key17": "3TfWiDCCfBzWrjdHZtQFjvER5TfqAMjFbBspYPnZL8vNJ3D6YR1mSJ3M38Q8WrMFG6U4av2kDmYBV1ujeyJLQKx5",
  "key18": "AK7cLgnhttXXogxpbRgcGuaovLo2chsVTHkSZtMYbmi4r6H8fP6NYvQ2cNNf7pZPqy5ukUpdVYKAMnrUHvw94hw",
  "key19": "58tmLbSGq6VmZEUykU8uA2q1RgJ5vrWxDqURgzRHcF7jcUx7fCp4ibmWhkWVCn39BFpWKzXDoEjnZiMrrUHXekZk",
  "key20": "4NGmtNSkhchtvjm8p4PTbxcVhwXaoYog9ftc2nsgwrH2uAALnD4Uexi8KfJ8aeWaPad1jRui5ujdQvNk5yDZFYbf",
  "key21": "3xiNbauoRz6cK3REAKFVTyjNzPKDhvVpgGiXPmwKmHdCceQXE9HmxZjAy6EQmi5bxB9fxzrLDckZFrMGS9GtQxrv",
  "key22": "2TF5Wz11wcGoAs3N4S22676NLGt8xYPmESiDtjUHpSJFjtHnRpVUydqs1tcwrVoEoyxJ2QBJNUsJQXCwPiXb8GAW",
  "key23": "Fc7tXte3BnzMDXLd7ReCZkxq7tCNGtMw8XMVsfeYeAXyXwDtw4AjxL91HgzsrWkRdiUwciCkx6HRy5aiUggz7NY",
  "key24": "3BHsCMp1H9HFkTwFj9GaVuuGowQCLodZseoKS7kx98kN4bTKYfztsYSP5xkm3KMRVpbZzdECbdQ6pCy3WQEk2wJM",
  "key25": "4mYJXJetP6xJVa9jbbcPHeTKp1pHn52CMv2b5Y7MATmQSGqVckAK4qfnzMUMmeBPnTrRaaQJrWZ3db9ZPETd7APu",
  "key26": "2iYrqyMvTGfMZJ3Ba1VPzJDP8ZSJkMJedfty6xfu1zqZd1AWLMzwPeTBaw86vEUrQsDb2BSwuBVSz5KphMRLJoRH",
  "key27": "56o5wVK6zjYzS7pXYjkAzdPjH4VKUTeVR4RUvRn3zaBLQ3uHS5Yfvj889jztv5zu5RizamJN8yaEkA5ZbBdenhhe"
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
