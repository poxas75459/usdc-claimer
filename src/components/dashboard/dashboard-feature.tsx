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
    "2NBVp4CPr9AfNggU8WuFvAbjXXQEpMz7vvUp5NmH7KUPvkX5WN64Fq1QfWFTRvUZGkDcrJdQf29oHWLHGb1hijs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zKMHf5bGUdgrTfTBih9T345AcQqD2TAxKbgM9cABwAYVrDfURKKmDwVh98o8ic7eHeEGK2Ex7Z29tLAjKnWq61",
  "key1": "3HVy4gBCSebsBF5nQrADBpvErdKYJ7kEgbG8EpPSoRnFzCAWgSVagcYmTJ5eJrmyahehudcodnvukkf7gSpwxtrC",
  "key2": "5Mjddhxb5XtKfLL5eEKYE4oQ4QD2YJGsXG8cEgqTJLwAPLT2uMk7BH1psShQr4nD47TNTuiSyQiL61M4h7cAChPb",
  "key3": "9Zpc3Sc5x3fjB4YQ2u62JQLej88LESRoyy62scx6mY9zyQCxVckk5y68RhE5i16xSLXNBWUHR5ZxU5mtUHRJzVa",
  "key4": "49cAJnpmrQyfa7o3Xe8JMxrwKoYFLaFMUYoGWwJajpdUAbyGkwwzKrZYq9EQjq58TG7VqHrTktjPLA27FcasE5wB",
  "key5": "4KFGpiomdvGzX59grE5GMcmAdwAVHhXFUiJqLU11AbxUnastohcg4uFqA9KB4akhnMg9KXQNQdBgdroSQQJi2EKN",
  "key6": "2FtcXuK9vmTimHNYTHZor1KF9NqNwEDtVAnQ2AdK75k4Jx11YVRcX2R2Mmy3p66DLdKDZuqskcWxYn1aEJ2b27Kg",
  "key7": "2vKJAyFMM7qKSkTDd8RPPd9jKejTaspxLdTJzCb1ksxGNsKb5XaaznAWHbPTXPY4r6JMTkVvaFkSBZAU7B4vtWe6",
  "key8": "jbTk3ZTKfAN6XSxQmoj45afhxQ1c41RnBzmHL53GhBeziwcQwKoWvjeJfxi6PwQ7XTLj6DJRyiudhzmBGhg8f4R",
  "key9": "GQWPTdYDMAFw5ZidxMxZoAoi3z98qiA4381Cn1A2n98W3sobUWUj4zv1jc9HkvNx1cuXuUkyCEQhaZH2wmAVYNu",
  "key10": "4KGutMgLtjvZLty62HS67Ap2hE1HRXPJYoZcZirXRc7PQGA2ddqJBtP1pczELxeCmSh2HBvYGJERmph8Q58mSK7g",
  "key11": "2zGzhR4eYwJ29HfLzLMCFBS8cmQHPhQrf3i9FMELHWYnRCAW2YNSgs4DZ9FJPqqunu4Y417Tf2kFNfZY8J9eCcUc",
  "key12": "43toQFw6Qef5B8QsGsseTeHjLqzMCWiWm8oqPihHzWeKzfzP7cML9ciTovoAAGbf4A5w7U6ofQd6y1k7DXwNVrq7",
  "key13": "3GeJzKBkWGUysgkDZKbrcdPjsPu4fXJysX99czWFrcp6gVtsPFZwisugVx15Qqp4UCy3MET5oBsDw3U5nnWrAexU",
  "key14": "5fYeh1txGGGDgzjyMGvpyHE4KJXJr2SXBSMAp3krrmTe4XxcrY7gQXTKiskrDrSc4LCXsS2voJ6x6VqxNSb2CvM",
  "key15": "3RNfoVcoCo2zfCXocDpYFYZvBNjW7eP6EzRT6b4ymYi4Ba5t1soAoqo457FTivn7zuxRwQLupz9wfjkHCDJmNdMp",
  "key16": "5A4BFSwwNqXPXQ4TWgZ25Rotj4QNpyZ4ofHxUcqgPSU35HAmn7tqCL9hzGLDBMdqCQBVyd1dtTgQAMtKiNVEgjw6",
  "key17": "2kUiKBVkrYe4EcGTX657x6qMjQMvyQ8hkDZ56f9moRv1yhiS4hkWEPmbduwYzALyFtYHrRnnkXqxPTQeLUbCYmUz",
  "key18": "3QoFXmpkTCVSCLyTnUDFWzyHr3Hc6qppRzPDmrZHV2qg81kZYNs7e4PMECFscZG14BMq1pSbwMmYaZT3T3dQ9FaR",
  "key19": "5fBXEq5pc73ELuxxdGr6BYijCgpRLreub2RWrMNPi8e93qUfTi85LzC2b3ZzYnPXUNTReunZiv9iS969jRQLVEBM",
  "key20": "kjK8BAfocALF5Rzat3hnS41V7FVfqiVxr5Zeez3aUsCMMWLBAFtsDi6krK5hKP7UUp6aXa8pkwbkkDGmxi8DtNw",
  "key21": "FJEjZcGCRirC1WXLJb5rwc3UKWgyVeX2BmuB4Sen3nVSEwgPZgS6q2aPW3gaNV5hfNvqoYL1erdjywxUNi6QbQg",
  "key22": "8BjZTuw8MiWNq8chonwfhaBqrdt55t6oqNxDzJ4J6cMpTBQTcqPZ3Ck4qNFeXT1KEZ79LKx3PcxoH7w4Y2hyV5K",
  "key23": "4LbMErqqPcquqXa3BZTQvJ1Qxc2TwDiFoEXWD4ygMFWzVRM3qQch9MKBd9tguZK1URoR39q1vXeH1S69ku6R7w3E",
  "key24": "4p7YeHbeJV5EYJPpcgLrSBem7mdGWF89ZWyTxpAoczDVnknPVeKALDntdDLLvqxy9nidLjbTtwKkexAjWpaCESQx",
  "key25": "3GhwuzKhhzDNd66ZioE8W8wBZnzjgMgCyEBSDBatHFjYHTkHfL5rqgRUyQ5ze7aZX6EwXyMUDcdm9MmJAnHKZERW",
  "key26": "w4Bui28Zos2FPm9CyuiFsPuEx9Z1FkX2BRrNG2wwot8d4z12NYDkhdKfPxiL2o2zYMBS6iSCFFZtM2UKxX1T31R",
  "key27": "4XREviPo2smsHbnE3yVRPQkioy54PuQ7DscsRfG31U1Sh4AWdZ36smiYPZXFFMDha7BRqVXNjiBU6WwdJr1eC4H8",
  "key28": "2AfASgXuw6f2KcJzkw8TJn98PB2yJojFddg9MtijeqVYG5EMdnXHsofNC8e1UBxowsq9PXmeA8dNpq3vCwrRVWjD",
  "key29": "5V96r8WbBj964WoHtjb1HAuiSAfP6GDvqCv7xoNsVdBtghK83aCezqZuDFQ9wA15iPdyMxr4qcxBxx3B5V9WdZyi",
  "key30": "5JRjteGY7CdFuBPiEiE4B5zMxtaZVQyEW67Uo5ueVww7DXWRGsJi967EWYzpkrx9Ncj7yo3SL4C2weUrdto495Es",
  "key31": "GCsSfwkoHeCAHZYhFxvJHHwyCwyWLH2ypC7LYzH6C7hAjDZjz4GxNz6UFS6wzACF6rVEJnLxQGQ3QZQ6bfFsAvw",
  "key32": "mAiwXoJSt6cKS1GFZrgVAYtUchHpWp55KH2Smh95Pa8sB5xRknukf9NdwVni86MhC2Y3PBddkoUUDZEtuLxQKRN",
  "key33": "3FqJn75GVM3Gzz1D3iodPjxqqjnCF6rUN3vmgQ9TccM6rJdd4Jvznfen2XqnxWFQk66LhJMX1CuTXYuuXUaJGkGQ",
  "key34": "4hsvNKj8CZBWbJxC9i9kEiQWPUU8NBd25WmvaUQYAeGnCUG9cdx7yDoZH1bYYC8GmZX1GJeZN7A4BuJH5YHRdfar",
  "key35": "4LCht6ZytuNUtYSQutHcsj7kYDHVy1qVZGsKiRkvu4zJFNAEpvHV9w9eXonCrVmDqjS1sx1FJSfbT9gCzGsAXaUm"
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
