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
    "36wLxUhD4TJjMvJ2ou4U4cJz96hdH7aERpN31Xxr22AmebNSHga65u8CfgFKgbwsLS5B5FQ2zfwr88Hpd8nBj98t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596NXnK4FfKM7PvcCuZEMd6MQ5WgfJMJ4a1FG5kzcoXgopcj4Uu7j3ZUytETRGcmsrGofrde6C1Jqo4xeaaBRh9w",
  "key1": "2fcAcLwAwWHrRRQPvLGxBEPYEFiJKqgzSK4qGXFsFddb6mp4y1aSwu1VJjNfiLiv3JwSShxtLFiTvLYnn8QJFckG",
  "key2": "2kZbZMWcnd3Ysa2f4H5tsFJBgqimzKpEZorKu8117sxz4hb69T7ChanUhgUWq191Y92adVoK757j9x4sppppUyW7",
  "key3": "2JUdajtrZMTL69vERLm3HWKFbw23Wuqm2oBocqivFfZrHnVZxHtAoBic2CHx8q5Hy6Ch3T42eMMJmmd3tbeH4xQs",
  "key4": "5QcwhgxUucRWc5HxMsr55H99LmqUrHqPApV1vr6LzXiQbeSL2o1HW2fJrcfXL1ntE5GqaUHW1sd3sWkRcuRrxf2T",
  "key5": "4tjH6AHzVJZvJC5czK3EAwDjnMdk9XoGKivQpXTPJShex1YheYpLiqAb5PZB2ZJsown9R6gNPKeSUCLv4uUTGR2g",
  "key6": "4wMcFmoGoUS9h5rESLyMPtRFDJJBFHEFbVCVZuqUVstDkHtHGKdWhGjVdNEKEKfcLoDki66zzGdMu7NdJwzAU1Qi",
  "key7": "3SpM2MxodCxrQMQwypKxme9AvQjxgRkbqDybySa2zFmZa7sdTL2tUn3X3x4PBV6AtuRkQoBbt1KXSSXCFxixU39N",
  "key8": "3aogrjW4NDTBuE232HrmuryDAVmmigtmQNnnEqYLbvH1EbGVS5sxySpK6fickuVeDLPZszebWF7ZzvXEdU1MA95a",
  "key9": "24DFuG1BVWmbJZbA349qnAf2GgPEcALCw4Qp8JvtVM8nBcJ9R53VhAFg5yGWtj9Bo3XFcXNDMcKUeBWNUfTzfN68",
  "key10": "3tcgjw7wi2T5vBmKVhxww8yigykfiQLvTH1RhbGLedDAyiw16ZBU1mzWjU1ivpWG7AzQkZMQcUydrkN86TcmY5N4",
  "key11": "5QEk7x1n4WJVoxovNjkgPEKeBJyPjFEUsYasBRwgCKxr9DQSsqiPvUnkx86AbWgFE4ypopjaUxDK1ydFdgucbYsd",
  "key12": "4DKshRZXds1BLYEgcAAfHKrapTtPXUM1L6PFzoo4Jzww1o5LDx1fALLTTZv8s1qZVHAsiQvJKmcKSr8xFPEsMass",
  "key13": "2STLh9zj1ECBshXrGTx1iK5vFQsvnhcuydR6fg8uxVR8D4DM91ft8U9ENh7F9Yk78ioG5turd4xffyURiaFrNJEy",
  "key14": "3kF8Ei6Yggj5EL4DUoSzueUBVCGYDLqmfao6ZRMNx1XqpGggodPqjDgwBR1bNVsVVMZbVcFHbZFU3x3TQ7G8GmXK",
  "key15": "PPZtgUCnwuHAPGuJ6Q31xY8kwakU81zRt9AvCJiyPmx8uDNoSumbV5sUHttWxkVsXzZoexxGjp5pT59AJkZrnb9",
  "key16": "4d32bm1DgBG8LBoTTeup99E69izH2evgwrLKnDPGt3DS99BCwmY9GgLgAWikKvYptPzLbUmUukKB3Jxk8CLgfKmE",
  "key17": "3HNGowucmTcdcN77CL19k3ibLA63VNocSNgYrxFKNcQdyqQAnnoGDXJ2GzptDeNpwL5Y9gZm2cZddDSJc5dBnPfg",
  "key18": "4hPjsQqkFiYYt1BFqrhrSajhGDqp3J9TBQjsyzdFWRgKjCbooqBpuHaa6aSHucWPUQc9hNSUX8xneb7w1T2sZfHj",
  "key19": "RjNqMNXGL52Z6S6whQFZj2Ph2W5iYb5Bns3n7n8zeBN2MyDazG3bpZp8pY7DWp9Wyiu5kwqSg8XoJV62kbbLm5N",
  "key20": "QLvjHurHhmFaS1QNwAPQHvRF9TwCisDy9xQnEwm1Mv8ntjKHjFWS7y43p6GbDgv3DhVsbqgfcQM5QJ9BttNkiYM",
  "key21": "3qpymuHQxW8y8vccTj7TouYDaXWggBPsreAiy5oa1ov4FZQLE512GJoKjeujrVLKvDQJ8zEyDmmaoa6KiEVaRTQt",
  "key22": "3tkY9zuJMbo49gF7xicEP4oUC7PnP5wsWnv9uRPBy4MFRqh3BEhFfNZcNaRobkzyfpsne4GW13qqTYqS25brDpaU",
  "key23": "4nyeibC5AbrzFXjWv89JHjJqV3NxCNxQkLzs2PPmWa5XYdKgbXdRseqYMt1er3Xh7o3LctYxijw2xiB6AgSx22WT",
  "key24": "2ohY16VYA4iasCmT47Tf8SFrH6u9PqKiZfrsAMbUCkNHMQxfJbWHgpe2WK6zBa7CFGXBnq6temh6v8DB3KEMzPir",
  "key25": "k3nMUooP7pYY5VVfRh6BuWQf8DAHRr36cfqDNNUcManQFcyLqxarvmvqR2KSzUfoRb6etfcLurpY7pHMtromKDW",
  "key26": "2HHaAD81Dk5LFXV2ex8VoEnhaxsaPJVj8YKW8hDrZvu6uGP4NSRBSy9nCE8ywqo7hmMMJhRS3cqjnCQ4AnjFAs9U",
  "key27": "3HSXcwon2LhYr65LPbaX1GDorYwE7f2QyFYDrCMSJhezqowQfYvpaWucM1wzQz41kP1bEw6iWgmY63efWtFi14QV",
  "key28": "2yicd6Ucb1QCUC79iB3J9At5ui1n9ovGFVhQTYp9sSPUHwnbHk24S5d3HadjfmLbaTFirXkZjYAFVqvL5yQ8mcAd",
  "key29": "5EBpVKStCUmn8teVBdWtsCVDNuqcwGK6roadunsXo33TxNyP2TxKt9aF3e3irx5rXtJZU4tMoNoejHwzWVRdYo7P",
  "key30": "2GxVPFJ7NAvGwxP98utPQZBmZRiwiMGiqtBo97GnccW4itwh62qKqHisemzM15DHrhpR7aDySKQKjDUk999s4vUV",
  "key31": "3CftmR6PThrvuwUeawqfs82EwzR8NcPzUGPuqAAxYedjqH7ZvE3MM4T6HH27LmcgtzGYFegRhMBh6UQpxHSJij9J",
  "key32": "3ikBzueyT7wisY797WjBZjW5tsiHGNBFEWrKAKGPiabPMiMiAjzu35KgYPKV7YW3sXCu3Q5NJXcs1AQyPW42E3UW",
  "key33": "2hJWky8C6bP2jDGNwZ4UB27JQfPkiraAddNFQkwG3JaXJxDGu6vQAnnxmJB2LH1AU2qc3uJ6iUGCmx7YSudxZq7D",
  "key34": "3F2nVGnSxqbTMy2NXibWFNSEhYjGzNwNE2M7mBA79EEyPjpSQTCn7p6envE8wspVjdgU6gdBbQbgFDy6aQg9t3i4"
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
