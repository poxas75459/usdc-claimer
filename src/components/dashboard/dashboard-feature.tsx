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
    "ZJsVVAaLZ63pRdE8oWnsB8mkoUJfX4hzuuQCZk51LHNi3qu4dK72mvbY7WG6p8kUTELw2xm43Q3JPnHBLpj9ZN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UuF3yTxuZeNeFbCP1MkF7CKPNcBiW515t8AZUH2R2ckC9PYNtvmQ9wEiidhiau9i9sCy25VvhaNkCHrtRPDrRp",
  "key1": "3ABXKiQL3pyT7tMLHncjJaihs5mXCCxEffH43U2N8afUZh2VbixffDw4P4eNi49NMLRJi7mNsYBWpW8Agg7GyH9k",
  "key2": "3W4L8mLRkany76CA9CyWA4rPrNtckv9crtt5DXiRHQKS8CEwryDPsoKY3JMoNS5igXL4ZRuA1nNVbKzsiz56QJNR",
  "key3": "62n792UeQFDAJMzHdeVLZBYWEC2HTUskUmw2pjXN2nv3JZBYSuhwAiaUuvgp282bpWwsZ2nBjC4zKRARXWbVVHeb",
  "key4": "2M4DdwWwDkp2bDzhgBprAhSveMQihxwVV3aDnUAoaymtirjJubD5g29Ati7xHbTMmTFkvYeXVenASFxn3RCrsKuJ",
  "key5": "a5UZNWzAQzVF7PBkFQ3kLufv1oEnbLMkxRaWLfBE6b5LF8sYBXjgTfEcD8G1L5XqHCpqxmbgtRMg6KdpgZ5ANFS",
  "key6": "4e7ahjdpG6eVNf1GoPYB5BXQRUQV39jQYh6jjDTnc4tDByPw4vFUq4SiFqaBLtaWoBgamQz3QehxvJLNydRGhRMX",
  "key7": "42jPLbNrUmBnBq1dZsQ86jp3m3ZMXBw8s1zYpXywEKcv5knr1x1pRaqi8aGdyE7J5M17RvtAgZriHuN8j22YJv21",
  "key8": "47n4vPf3FZn1paSb1Jk2AWGzz1kMNpdrJQPrXthhenzVg6U7CErjQzWf7JDE6YkkK6s8yuc1V6CCme8gbib2P317",
  "key9": "4dsAUVNbzSZRGfikQDncQ2CFS42R55SKeaovYPgW9GJNvN5MjtN4wpBm8GfpxoNU4z3igCAyLVwYWZthdpsWTiGY",
  "key10": "31pCrfsT2nojFeV6zJsVkgeyym6FwRjn5k9kKfNPGbwhNDEVQ7u8um24duarYrM3zsJFjYDbx79xCGbihB8bSfFs",
  "key11": "jRXDoXZNzZJzT7FmgKabDHMAGps2FNtHtQdQA2By8ry8XJbApyjkBUFvuRP9qmzuKF1XqA7d7MupvCjc2rkSgCe",
  "key12": "4FWteCwf8xWGJpsKMnodUV6pK1LpDkaFTQKy7FRQ8JoPi67vce7ZpuBTBY2eU6viEd9innw9EYd2YE9KJvEoTQms",
  "key13": "2E4zAsuKPrfJ9fJmH4FHk5yLPuG1XhW76H14baUR3onbMqU6PsGTbSDXX9yUVWtsjvnVkVpRi52kmDCzV4G6cVa4",
  "key14": "5GPGf8MDsQ84MjXgXg8iHyZRUYht3zxxXqQkPHgrZAB6B9kWWDET89LtNHWeYLHWqUU1UR6CMRowAudbCzR7ToK4",
  "key15": "vDh1Hd1xckhpSXC2gYBQPPxXvy5WDLKncg4Wi2PyxmYkkF3xqbJSZMC5hxTuUXwwb1Py7K43goSFhY2MyqnWjff",
  "key16": "3hEyRB2j9nBBuaRj4mtFJxteKPxtEZHE6jmi9LmtBgH2WuyFKYbK2ZPeB8UXpPQaiTXnWKacct4rmBhMQkNnPBZY",
  "key17": "5fwoRPRrP29MZFVqaGXxovdvHBBs9nKLWV36SGTSPNyAeYaL1JH2rnd9QtNHpFcLMnTLzmNwtC7U8dxPELqnxTLK",
  "key18": "4TeW32xgjfNnE8vNLTY5TPDHjByyk9odGEomcFoUKSFXDeJVkYBx8vJtefHbdySKYkf43NtCU6EfukrPaMBvNqvc",
  "key19": "v3MKdh8xCtfR4dbczHZBeLt5RRS4Up542GZmCoqR2wQW372tUDDnCfjkYH1rzNXeymiAXoiNDui77dMUW8GYzoE",
  "key20": "5eYiqojf1DGBsXw56GsT1X72MuLbWow8TuEiWZKGB23KTqofGHqxrCTgzUG2jxKG36GL4gsvCzK8Ttq4me7v1YEa",
  "key21": "2WsgMoxH32YcqCp7ecyWb1ZXpPJoWHHCyCm2uyxgeZLeHGzq4CGCbMG55HnKnZq3dLXVGyy4fksR14kcPrRrYSsC",
  "key22": "3QjyYUvGzWkwobe3p9Voew9v2pvvGxpS6KAV4qpnFZm9FgeMsbUPqohzKmMfojrJVLi7E3DDfAeN3SnhbysUHav3",
  "key23": "384diUMajRxYY4LwEJ5DTUmi5DpHeqNFYUhwbssQ216Tozu2MAAqMhX5YUytXWZy6FK1iVGDjzBDZ4obtDs6mWJQ",
  "key24": "3RoNSErU7xuU7Jiqq2Sug2SEYL67domNN6RkzqeWy1NRvG8Yot5mGLesREi8PNr6dvM1w49Q7b8pHWkHvmJVgY1Z",
  "key25": "F5NhSFZysZvjDuUHttZywbG1MgidimygKc1F9De7GRxb4ZUSb5BiLf48VnX34hdENmgBHR2VtpH9ZVVeQxBkWEk",
  "key26": "5B354TykKx9bmcsjKdWLWKPiEaJe2tZna31THHtJ3WiSLFrTvEmPK2Vf7NpEeLNxCwCKZpWfjmpsvYL6tev7j2Jg",
  "key27": "5GX9aCa8HmK8TshNbvBwkvQ7DUmaRHmqSQ7L6Hds1inPC8L1KDgixnMCC5XRF25GKFqB3FcUpsEEP79pLTEaVy66",
  "key28": "4JVQuV2FaAraynvqfGPcUPVxgKoWMpMvTYVNfvxo1VkJPdZnHbDUTUCcj11EwgVah9dxymGwXmtjo8k3Q6ER3CfE",
  "key29": "41UYvCDgU7igBCuLB9zyPufWGZNmiscfZpgqgdWj2bfPKWHeZBDYq81CQZdAPkJSajzCmEN3itd2TBHsnFPMBQhS"
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
