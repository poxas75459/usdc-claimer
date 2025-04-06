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
    "5nQUnZ4ghsNcc9hyxKQECvU7pZ6kYwDJ4GWWZkvXzuGJQHNGGKoM5dy5TEjHb6StDhR3vbKjFkbeLRbKXpcVgF4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fw54RteAEFvJZcw3ZQtCUPJeN8QPUTeYGKgbSnQqcvDuk92nWEC7BhYqiLe3PFrAboYG9DrE6Zc7N5WzwkrVRbb",
  "key1": "3ZobHCT59HcdvYKTEq2ydMa4dhy6FZNsLCrc1ANgowQxTcouc3kY23zTR1MQxaY8vyMDdyxuTCTXa2zDA5J4JJLs",
  "key2": "3hXPSTGBbJ54pbZq9yUfdVHhfxEXcuYmiKyUsNLT82JRVbAHoiMmvR2nCYJGzCzPdo1qoNnpJBhqZLoLxamzUGYq",
  "key3": "2E35BwPjVXik7MEVNBGchmHejXkKqo9wF14xKCDTdFFdDnFnki4uagcPVsY62jEUdmuwS6NkjqZTfLhEVnq6bfcL",
  "key4": "4gjhpbdorSXc1C5ejbxxfjNri3o9RTMxXbhunsnTC1jknx6zU8j9NcYcYzpnwk3gmrzgt1FMVoiW21yTS9r7ynan",
  "key5": "3cM4YLaWmVKwRfBaeZe5aggMTzfdsDxH28vmVQy9vMKzKxNr7jDEkGWAgkXXZCp8myFx5NiS4yVotVcQrqDhPEuz",
  "key6": "5zjQDX23ytMnzBQcGz5kfFD6iu3MtarMn8nAMsZRyuHURTBBMM8JaS5cXV2KMf5Qppywxj1mSea1zkHFuNyR8uvN",
  "key7": "4W4do5zmR5ziyNUoyAUkiYNzG77DDuAsRfNcEXXLRkFmEwrBAt74nwcscdgjRNo8bvdQnfgASxd34X9qbGnSxqKb",
  "key8": "527egxkERMbj9GbybviiuxCqHGNjCHBoKaP8ueKcm5ff2K7bFPZ7k5UNpCabQPRts5cmUPVq3UhLbfipwyWs9W9Y",
  "key9": "qrBwgSnv4fNC953ZNDod3LgR5nNnDqMFXXB9wPBnvydkX8LL3PJSNR3axJfKiGCrXYy8geTM8wMthpj329b6ksW",
  "key10": "3W671ozHEBbQvqMpyzS8ud1KQ7Y9CPaY6XGRF1c4gtoJBeacx7iJXhcwPFG4ouC4Zka4eJtUWX5sKzK94UgoDEyo",
  "key11": "3tpose6RXzNbpnXkdz8hoogyeH1AroujznCCKJ8mNEmAbzTp814sdRLGij1G4xtvktnxswnK7sZXpzdD6exdYZDg",
  "key12": "JmqXD6wGconzD9Jp6PBE72VqUuqpVN87qHemJc2mTmGQzUvFnLa48b3xs2cSVPTNjeSPF45M9jbKrwjARJj6ouX",
  "key13": "3ektrRRApaG8gMmXZ68jpWhr93PsQDT8bdxPALs2mLPHkqTwCsbkVkYjjrYiD7Vbz5dNRAWWe32Zr7ZRrPFTdP2u",
  "key14": "4MMy8tGWHqGtcKkQiNrdDKL56fY1vHnsLaVSBaxi1rSTY1WPWrJTQ3ZiQ5vMeQWXVp8m3uAf5Vvk3D6vii4RSdZY",
  "key15": "5g8Am8Rg2yFFuK8HDMow7AusNcxKeCP4eRLiqYCCnT9nHDkX5s1sG54jxra8dCtKhJunjXdioR6VPpkkpz3euLS7",
  "key16": "p3nFawRAyNxBhZWLJi6KtPNRora9XFMtbAjVbt1pUyFT5eSvhNTjcEHeFVXGnoyCBfEzLUR3QTbVW2bTZo4cWDy",
  "key17": "5cX93gS3SxPajtEUuXMrVQqtGkC6WBzsgVFYeeUcjvPxf9KGYeWBTZocRQqxzsBikhQ8zUtRb1BYJhujSReuS4L5",
  "key18": "23NGrqiYkpkEHZp6ys8NmzbVGY8zeH8gYbMQyTcUCZHHzPYugqmi5CEKi2PX3psvdbFJCv6bA161NkwYxEVTTq2i",
  "key19": "3pAoVPNy82HDiaa7cmQJ7JgWJWQAv7BD8RuYP5iZSkHRML5ijZDbFEVVq7t3PZfQuWTnDVLHveQVkc7Hp33UXV3H",
  "key20": "2BWWZNP66SB6rPANGzaZjcd9x4sorw5kvggC8ND1hcn5tLhpWQQuVt9cKcovm3baWKfn8J3RN54RWvqYoTZTLdFh",
  "key21": "5RQw5HzZgeZcDNiLWrc37mBqXDPasTm8YCh5P5RyNWRUzNUcNprVoNunrJ45K322AGbGPJeQn6UALmNkoEs8ykDX",
  "key22": "5x3jAHS5G9tghQtPFwrFgJ5e2gs3LbJTUTqLBJrVkrhr3FE734L1APuvATKNnhuFUcBt9nQLDWQqeCg4AeAKo9dw",
  "key23": "2wfBF9MdazFoVETUTjPhCS2T7Tp6zAV4TAhfUrsHdguaqExyWmRyZqp7t54sX4Ndj5WmVeaSmYZsVYr4FZMQucnK",
  "key24": "53gJLNrSWg7XFcj2c28C4VhnmHvdkpNj1uTiWc5XN5iCctizwer7j2x9RjtWLmpiK7Haf43Guzdu44jRKFMrvh7c",
  "key25": "2YrBCJ7iKp4MRR6R6JEWAR4Gsqmt4CHgPzRbP9NXxPk36fxq3jNeamovRe5zpR8uib8CdzrFiekFPPYrBKTGZLS9",
  "key26": "37D85tfqaS5bAU1QEj1WuDTQftwyB1fVjocHKKhYHLFU4s8xpkMz4DuAFsFWrQaYrP7wL8zyXd7Vkp59ekz9QRe8",
  "key27": "4QmLDMGAh114ZyuPA6DPYy4Mqw2pXom9KWC7A3g9eZzS18DE3kDNrqCnELv7rEowCiEHG3sUEubGnS47bzLKE4Qa",
  "key28": "5b16Yiwmdjba3cqKK7A6PEC7FoyP6Ya6RMV5FuHWJF11KF6WnWYZL4h2VwkEKdfXjiVFgWwr69HFJKxmN1ggjv4N",
  "key29": "2BRzXsBk5QqpdjcJMm2MnaviprNiRVRDvEvzgLP2jtEZ8Kqaf9ZLmfXtGcfx8mM9ubdZ2csbTpyAMaMMpZPt1uaZ",
  "key30": "63hy1qbz263du81kVh9LVXsJSdztMKEmdxjCRvvaaj64afYgCWjCojvoLGLG2Afq85sDqWRJmDuaEWZ2BAXaSHuE",
  "key31": "4E3RTuwDy6dMUnJLw5ZheuPwXM9s46i67yeVaxavv6gSu77ShdbbBicLfohG3Nzo9SaqKmLtZtRcxDPcjGNEftcv",
  "key32": "3F54zY5sR2TECk9JaMG17wgYcNV7QFY8J5XU6rCkhuYYsmjvCuaq3uGXPV3AuD9Uj1axFdZbAZAfvVmg2mLDfWH4",
  "key33": "4c7xHoaPfpzeE8yhDtHZTgNvrm8cWDTLTtE22T2idq7e3Tr3hDsSgNATFLnHPCZTGViS7CJa2A8yeXee9iVzqrUQ",
  "key34": "2TahNrobkYgLoGQEo1xzn2hz388pHSxiCj22V9iEPQfDVhrqMrmnRQ8ZZKKzLkB33tKeQGrsrWBfavyFJQTkRYFR",
  "key35": "3kQHoCnnGc29uEoP6GV1nVw1xyLzogJ6phEHzHKKgZbFNBQzo8yuZ1riBW2ApVGJhxfJv1pEm2p1sAWLvWTF9gBs",
  "key36": "5u65rVSEUhRbZ2Ru6WiPCbXRdZw6d8Ke8Yu3ce26WrCR1TWwgn6F4AWwrbLQBqaqq7Ny1NUmvvBvJu2VGhLR6SKn",
  "key37": "aVMqGRLwQJLVJUH3jfz4cAxFwBGvFKnZfZqpNefCzgLkRaCYVsGkNcmncvzrQuDXfRicCKqcPP7tKBPHPp6owg8",
  "key38": "P3LQLPVveHHRLfyvMtBtLjw6TUSCTiA8h46agtxRgN6YhN8hzTCGqNMNoDkpyy6BmNmeRRtXAkga4Me5SBT1wsi",
  "key39": "VcXQ9N4P26HXQ8ThnyS6PKC8gsesQRzs5XyHHaZHrazZeQ53gdbm5GZuRe1b82F5WDx9YMPhA1qMhTXtbzf1nbw"
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
