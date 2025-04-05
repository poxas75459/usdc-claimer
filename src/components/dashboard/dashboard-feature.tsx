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
    "4SuhJsgeLyfV2PkTqAHmh2fYNGBsPAWaqffmncYzU6gkZxMjE1Z5XgWYpwWkijNLbnQuGqLzdkBdoEKViwMDAx9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jy93A2FDfQ4M59CjTPyrE3JA7oqvxtbaZJJxM2aBiE7J7nGykiL2cQAxrG4o5Q27yFzjuhfJr6mRJTGHSmoMPu8",
  "key1": "2G9BiAA6JDm3b2FnhHTznpm7Babc8bnHBXF5kY9UtFzZ4YNqUecfVRMWzr4zkNCPHjGm5qGW7hxnoCAuFnnRqggS",
  "key2": "CHC3ysKCZo91Go1tptka4sDCYxo7KTN1mdWmEKmZMAB74NotEG1bnTLVRjvnwunaU3dXeoK8UAv1cg1SoJ49u6S",
  "key3": "2Pz2sbx6MuPabBHf6MnNUjqvBykJcTUVycWKGZoBNyPvhYeFcHPSzCaaXumsPnMtBDUQFwWn4JR6vNtynDc6M8k8",
  "key4": "2GGqMnpjWKAxFB8zYk9vvCGpo5nYR6URNU1TNJHqWEwADAtFd8kgxnZ1aYtnWmCsThzTjjfQDB1JjjQyhYykcSf1",
  "key5": "5t6CiBN5xGG691N7HfsLc8aBjDghiWrLx5nfCr9x6QUeKm6bzwWMV3daJKUQYH8JcgnJYNU2BFfA1R2izsTtksFQ",
  "key6": "3MBkVrH7CWi7nm4iJePrvobyG1QC7a5Qg4Tk5FC8Yes4SDAGsgakhR3T9cQTfbMYfn6jrSMtqvct2YjLAMdvLuvT",
  "key7": "JB8jN3zdoP1aQxsN57nxwq1SsY8okVNLyDsVRRbagvs6D2TZseqfkZFZTp2rYdr8aSret8MGEWV6iE7HW8YG7Sz",
  "key8": "5jr5GjkJ8sG21sJcrrJicSq2LEHG5HU6RKhSoufs9MPkmNs68xqzCHXCiqHm3WtCPFxhtAQVKtuvgLRKWeN4Si7t",
  "key9": "3iy334KiHy2gTL9k1UWSB5TtZmMpY1TxBdXYWfzEMv5QN1ULhSfHFE8PFS1zc8s1o3hGqbuFLmKZqYML5hoh8yzf",
  "key10": "2KXpzzM6qWqqkv5YujjKjUW5RSPGEQGeLTC6r4FLUavRLvp1vcGCzpy3YphbMnx9YMLR5M5sUhYzapXVmMWPxNZF",
  "key11": "4hy3yEuzSTvMP5KfycP7HJeA2avZN3UxceckxXnYCu6XWrutAgpiW7NscfisBcMbzNyabyxFznAUwXGX5NZr8vQm",
  "key12": "5h9RS4XYX5J2MyQVr94K5dV5auFz4qjQtKTk8A6sTztstz1f6o77XBrWfFTvgHRfzKTK44QGP1xTpiDetYT7yF4B",
  "key13": "5UNPcPPT6Kd6faZKYbCpC8AAnz8CVVBHrbDYVr3a5GH1cGgMxjuc8HAziRwTx89TdJQ2qbpdyuGwnbmMaZjHRbKQ",
  "key14": "KbtCKhXR7uUT6VXrggxCAoTvVFnEQVSqVtS6decpuQYPPDtTb5Z4FLKnwkT7oUroUWwiKb8i5gZoxPFHZdxECNg",
  "key15": "4XV15hq2pz5CDJsLd2sz1YKHo4mrhnyk97PS9sF6CCpPZ4GWFogqRZNi4noHiVDmRZKkaEgM4Kjg6PDnHqrnd917",
  "key16": "4eUqYw2eSh5T86ftcV1w4MXrswyiBQMYricsoaBN2k3Nv85hpLLie5JzcZRxQoUAiazjdzL11zFGhPpStLVoCCQW",
  "key17": "4SczbNcymLCAFWxRcZrw4RTpK13LyT1sK1fb5DTDZW4NpsXcUtdsTi7cNR2MQFurYGDbvvBMVkVp1h1sVFUGUDLj",
  "key18": "3MLm8sNPjZTLpCA98BFbJjYMpkGrRAB5HS3XyigZUDKDUkjGmuTQMcGAgiYtdAPYGWb8GyBjS14R8tEm5GEackrW",
  "key19": "nKHjPTQq3WeResq48oBjbtj4anfiSZKSstfv2vmoKzb9PYRwmJpsi1kNGKGst7xChry3A2bwoN212PQAXrLSLxY",
  "key20": "3ozxqHUjATSCzuBQRmFL7udSnficfKUK2TdWPFoGPZvF35zqWdw3ySFEExwKAL8eFyFQssnX5EmW34mcmzznGdUb",
  "key21": "8WMmdrXfYhaX29owFrLBVBmDYBcSXWCkdM5YG7RrVgmbsNyvW3RhC68T4QEPnL6iTDLEzXw3pjtufCQuL2czPAE",
  "key22": "2pQZrkBLiyRdR87LBnJ8wJBqRTka576AUJVpyEmmuYqyYu5RpNM2F9nAAo4KEzE5AUUyeCtXuAqzEbFw1bzeHdK6",
  "key23": "2gDWu41HDsMpDLhkTwyno9pAgt9GRTi4sqoB66oUtzufkHw5SD2AAT6AgMDbPhcy6yd5cvwuaBMp3idqHFNq86XR",
  "key24": "b63DuU7Fd5V9g8QWEwdHQxedSygAHTBVRbF8JMpk8Tjq5PmD7GcQuZQvUmScU8NTZpPUYSfxhq7Hr9vSMLST1du",
  "key25": "2wKpX3diyCi8YfABi2BWit1MRRAF8efDTNxRJVjeJhqjz9zxGcr26qXon1pmav9iE56ps5QBEHFvJWsdy3Si1FDi",
  "key26": "5HKSX3eBRV5UXvfSz2V4HNiNyN6CpXYfMFDDSQAjNoXCkXxiNj2ZgiDE4qsSWwhkwX5BtcdSSVKH5esYGw4XHAjp",
  "key27": "5AMadmGQXq5zUbV7onrD58NDFpvbQ3MeMYLKr2aPkubYFhdD5xgLw4eissMpJcZom9uxWRG7mVZEnPKArxiPRp3B",
  "key28": "fHcrqvr9uD7Gkjh1HAb8cE2h1dHiyGNWDUp2jQ7DKnYrPayh5KQwbp8hUdwXBgcJrkfmLQEUg31MCEpGCZMFqaM",
  "key29": "4iGmVY8g2N7WxqRSwTAjshpbuBpGNPeGoWnfC4E1cdPvRvEXW27HHxNgs2XmryYSq1XbSganfXDHn3XAA6mtW4Ar",
  "key30": "buqCG28v7ijx8WVoA9ZnzVgLy781PP9QEjvDj9LDADvCeHuuHuNd4WHMBJuh8342DLrqmRZ4u1tB2xXtsH5K3MF"
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
