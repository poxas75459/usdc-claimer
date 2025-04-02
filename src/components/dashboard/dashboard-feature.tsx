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
    "BPXxUoWjwWpqCGUvpGtozhbRTe9NLvKUgxyiSp7Li7UMGgbxjaVYYb9StFKedaTomBzQi9ASmLPrgz16oQgvumS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EAB1B1YUpnN5TLpfzrWPYiu5wVtvnjixuf7qfFCZabfYHx2tjekSYxrkAV7xaa5DJeJEL4FuQmsGC6gYpTXBpE4",
  "key1": "5eSikHgnwRi4SaypWDaigPukJMPej19oSCRrLJ33EU4JyUM6yXPNhNDCTTCyPfpG9UBwfmaQGV7dsNQrL13ubGqh",
  "key2": "3ogn2FouCXjbhfQp96B2SNQ9E6Npmm2cqcxUuKzdgKqV95YvBCDpJFcnzLmr9Drn1qoVMg6K1VX9UXPVQukpD6Rf",
  "key3": "3b7ZZGcBk6aNHTjaNgadtTSCQ8tb4ibCHPbCKTQ4WoeSKwVB1fHoAmV4WzXezNFCSzrkyhzRrjqXKbR7qt6YEm6y",
  "key4": "666e7ykayvRoWFNrMKmvPaHAo9Y1Re53ZCCXPeW7PcDWP6jz4c9qZiidpaFN6b2dPN2cptFrctKfo5JKhBHJtqJ7",
  "key5": "4RF2M5ciEYAemuPjy7MLnbBYnddByzqv66iPYLS2KTgEo8Xq5n9WVWacRhYYvyPapzv1im53WbnnKQLP7rm3HPyQ",
  "key6": "B3zCkyPxv8CjDKhd8PnRoe31aeUX7BbENLbe7R2AFX3JnqTJjJAoDg5vUn96mEcyW9Qd4JgVujhPzk6b5QixAKZ",
  "key7": "4E9XRDiFRkZuhiLok9cRA4z3H1eKKLtkDpwb9M5tWCqmfKAr44gCZLekmcN1LrFfHxg9syhEaV2ALZgA7aLzYrJH",
  "key8": "dReSmPHw77WHswbVvjY8XtciR4znWWxhPueDxVRN3jbwbTB4XpkaVwwHEpNzJv3vfBLrLPSLw5Lur2FSpxCtzZL",
  "key9": "3BeDgy7rykvVZAt7t6S7nbHP1gPge5GqcW3FWUHgvMSZmSTMbKEMaR6khJtZ7JJzcXnz72RiEhC7vBziQS1Me2VR",
  "key10": "4eyW7aEf5x6KqaLfdaz8bww6CkG8VyJYMqfLNM8oVSg9TbxFMHULTjz8XpQpgCoK1qmK9CioHjiAve6SiHx9W49n",
  "key11": "3HfvUjbndF51UjNNDr4EmiPUFsGPo9awFArxSkVdmPnefw6ErEvoA15NoVcrBsDUi681qtCtddUJAs8R7YWkHdck",
  "key12": "2PLHhZq1bntYQ74kM3t4P5P37A7a9WpCZ3ugSNKo119sp4kGZdJaEhXNo9FAhAwHzT6advQN1RYiGMyLiwz33gbJ",
  "key13": "5krC9zADKjVBSnDUAXKkdezQf6hQkRAWNZ5Kkc96ihBAd5BWuVweFYbSYnNLgvf41tBVHPJSybb8xKqVhXGH36dH",
  "key14": "22kS5jCQtLS7sdHZ2LsQ8GAT84yWgwNsTitJDLBVcfZWboLNBkmb9Dj1vn56MtKVy8muNDwgaDmFiNEyE37FAZAJ",
  "key15": "5qmbVZ4JtX6JshN6vFZovVMUqJ3aya1xDcwzFg4iVQofa3TsuCxiyuNQdHERKUkDwa3PMMgzVJgvWqSKPPAHa8ZH",
  "key16": "MvbaXCSqfZzmEf9zQp9uBXwGHoZ3R41e7u62WBHRpjz4k6fAS7vUSDMbvG1E7N5Raj3ALm8eWQbsJ2aJ6eS6E67",
  "key17": "2RqMQGbtnVsvdiYbfzTe9oc41N4ETi7xfs3uCAtj7BhLMTMzm4ChkgVeogFYE1S1h7EjKsKzPkWEUUzGt74PkhTA",
  "key18": "4XMFrT6JxAahGrBjpRZgZnBvyu5AnfmHmCybezXJ7LbV3GUAX5hW44B1XJeZx5ZFT73ogekZE7v9dTS4jAcHSvmM",
  "key19": "2pptJ2D31MbEGRi5Z5MAoMmChAhuaoHMyensy9AG5xU3wcGEbBazYamr9j7dtoDnLbpEhyx1jJXHfzsNpHS1rsuq",
  "key20": "2Rj7k8nKrVwpH4RmTXc39vXeRGgeGpeiK25BeqwasaYuJBxJ83D7dJjfwMYfBvFjEj8d42Lv4ZQjYg6y6PDNhiyE",
  "key21": "46FDeu6z6AQ8uxNkVEC26zh2juA6GEWvBjZmWbr8NpbA1YgU3wbHKBHfGu5cGPpBUNq2jtxfy34WnbJjYB1Yj8dM",
  "key22": "5ugA6vCT2XeU3cQhQeTWVRMp5sxJfcaGBDFsk8UVQcHtdkT3SkxoqpBLsRxoQvJM8ziqTnHiwL5VSPijvwLcQaUi",
  "key23": "rosrr7iX7r6TPYQhVZ1aostQ6VGEsJLxf2MhHcbiuiSzkjT6vEvo2iBYCgRMGHKZYsL6RawyDXCXB8svjesmyHi",
  "key24": "3whWhmyVHBDtagmUniCSz5syWswq4LxGb8xBxqhNP4MQ2WzTvNZhHtzMB3BXjG3HE4SCyCRLKo8kPAy8nUWsDL5p",
  "key25": "4M9e2ZL8XwmDrx8Ps21kwfX4fmjkg63Ygty1CyLeF3nQiBat8Ep8HnZLGtVfmuGry7eNrLjKVzZ31yZzfLmu3R3V",
  "key26": "4Pvxs2QGf8mNgRb3ouurUm9GY26JwNAd9NS9wehff5edxa6HaZ9KJYteq9t8duQJtJMMVDXxRupjt2d4A5c5znqX",
  "key27": "4fXUyRumphTzhcUZoFNpaCjowvi8XvunGSzfzmsv4giitZbfb8cBryCYvkGkQZjeQjDPz53JM6N1QZKK9pcD2Mvy",
  "key28": "46Ued3x3UhBae9BgFA2RKr18g7HpWSFoe4Vu9E2aM9p2VbtHnLutjZNEzKnbfPdB8P9TGvjtheKZGjDwKuVkKHQv",
  "key29": "2CZeGRAvyYvNW3tFj8ofLkYwyN4NQekXaH6twKFQZq2ykkSaiVhJpJbHxZogieeYvmL8HhNjvYRGEoie2qy9WhvA",
  "key30": "myGntAYuUpD5fD14KifrUqspYVvSgMBqGuEMDuxDFUMr1VEUYzfmitpDc5zs7MQRq1bjgcEJ4gfB2u3thPPk8mp",
  "key31": "4eoUPMP82aer5hKigiN44Xv9bJzPWei1fiwReMY6wWFch9761iZNQTiMWoK6KriMWnHGm3qZish66YLdkFJfkBB7",
  "key32": "3uBua2WdimUBWArGVe7T18baJp2u5oQ61js1WeRghHV1qHeemuCAuDuuYr28MtcKFaxVHrXvxkStp9r2mjvJy7Kc",
  "key33": "5LR48HPVX2LxE3j69tJPgg7cFw97ZMsjnPhwrUGKCThhWgCxXqZnTuHasyaVfVTVL5cT4cHeqagZHZAaKPyv7Gtt",
  "key34": "3EZHQo6vPWiFWvU1nBjsSX7NsgZcm72Q71wHdmbcCLrEUEsYh214h6JrfEEVKziz4LKMseY48sbKz87Y8yUaCMRn",
  "key35": "66Nm7YJeBvdYNqkFskxzQa3VxqjzV7tNj9bVpvGhX1gepc8adpbkqDQ8edqZ9MWg8ZUH8gvPG4dnVZmGBhWm6Bej"
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
