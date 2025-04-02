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
    "2tp29iFZWNKsZDuKBQNy4iERzguUA5WzDC6ht2ea9bFbnEr6DS3ECa9y5RtXX859zofkvSTyUcpofyaL6Yk1ivWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UdYMf2NJ4xYk9vASKnqFiZkWdq5nKJsiWvo73hh3VGtdaHA5cLcbZkP3kXuswouLUEWUoYX2yJ8y5T1RsXiK4Rn",
  "key1": "4YtQdDyaXhf4fAreEXPj5FM1uWVUMThM3rMGZkUD49y8XyUBgzwZDwyaYdHpupAPx4a5hFxQsbS8rUjZXHbCYyZ5",
  "key2": "4ffyXvsnTmCDxX9TYkKYa7qPXVHH7k2gk2jaoE1zPTNuk5VnhuTmhmNPJLPeHuCyvNbJAirrtGhKL7XdpeA1xUX1",
  "key3": "5gxBK9JpnfGievQ1Jue6GmeREjAX8rf7j3ML4eiGt9XrWiHtTxehnUCFDnqrr7AbCSTkXTJgZr86FAaAWTck8uGb",
  "key4": "JoEfcRmaepEYz5jn3JdjGif6vd1G3j3BtT1BDd5sT27X1zHq7cdk9i6C2cXznVwVcCpnkc5k9vdy8BWd99xuXHY",
  "key5": "3gm7ZfrWnWfzCxTbLJoRMRCyX1oErjLzxD5dsp5mSvs5fqptU4iEG5StwfSMwuvf7WWyjswx1jZmPWqvqfe6PaZZ",
  "key6": "u6KHapL8rDHFtzQ7Mbj7k65yQVL8rX3d8ZUSFKQxTVSSEwppdmHmkHCbdf4NSGGKKSuNhybGRw4LjpqJf1KXbea",
  "key7": "2DHBMgCgRYNiuRe1Zf6s8pFDP8gWURoeerwnUddspxzfnKcHF635ScLuuXjCXygzmucZ55RpNAvzTyoZF2mM5XLn",
  "key8": "2fu8uFyvwbu958ndb3JTdL2zZGUP7EWDUFS5VzUadYxehzGsTLQriKPARK8vHXnrtDsqEyX8ik83KN27jM9ToBeh",
  "key9": "4UfweA7HUBvAdFVVtmjdJYk5tDaPL311EoiUs6TjVMzVtx9mo3GEKC2kuwegwDaq65ipKBZTjzXe2JRk1LEem1Lz",
  "key10": "2QChzLbcbKW2XxSQqPn3S5ThsYfhJ1U2dDhCeiNm9E7TutMKTX8yfyBTQzUSGzd59xfiwdYWy9RvTqqFf7uVdPxQ",
  "key11": "2JLm9Lfr2KLokFggGTXHEFBtMSFVSytQdZ8Z9vPFRkmWrcz6Rv3gdZz29FFJ2X7LULCmAa5bENqZAjroMFgUKQRr",
  "key12": "5K2hqeGHNaEHF8zGg7FqL5KCSWjBS5zU1dbbG1Pp9DtyWKBuLtBKUoYFXzNdkEikzbKuWiHrTKXhEd48xWUTT9Qd",
  "key13": "4A9rBykgiTSzgDgmWTeB3RuggrEp4KqZz6sEmXkn3HXmEnayK4Hbuzd4Ga5zk1b5HRsL1uWexGcVNqNgrZbf6hwo",
  "key14": "2oivvzBwbFQxvGZaa8kL2JhVASSq4PGdS5D3ANK8QLBLBC1TbRk43a96tLzvkvUsLJv1sxfmBH1XDCkfGpmVqLFE",
  "key15": "3fBgEzr9vLLTuL3aAPHfGT1GmkkhkPsD9TULdna72fZGrnKrVHYoSS6c2k3nWSbPFxkzDLFmc35FYhZn6WStAZvW",
  "key16": "4J47iMy3Yk9mnZ9iCG6BYsDbyYtQT74d4J588ZgxCbsCruqHkfKgpM3fZhbtLJRz44WjPkynHw5Eu4Ys7epu2k1R",
  "key17": "qLgDzQEV8bNrhXKVnfJtjAVYDXoEUfmhnu5uZygsHuoPpCfrY4zWexPt5RC3k31xeBcx4tZqR7noeJMjAiHnHad",
  "key18": "2J6hVJRfw6vXyRfsg83Dz1vcM9L5uudT7y7p4i7sHTnVsydEBoMuDRzoUsYCWyHuQQvwQ2ta6KXeWTbjfGPA26dV",
  "key19": "2MB4Zr9P1RiG64XCbRJgoQFij6RzQPoDre2FAS48NDoxNr6TMajMVYwv5r8x3nhtofhy1QAcDxFGRrcQhBK4ZL85",
  "key20": "4CqodMeVrH5TBUfUwG2kBg9XEjVsq8TdSr5MRbSYiBaSsv9mKsiBnSZYkDfzqzqwdwi986wrwy4jSrNuDPZyc6QY",
  "key21": "5YFUaDYC3uDHJzegNXmMiDzMa91vfZ5Z2DLY7jLnRMQeLbmLRaCfU1CZ1pvcPPkBsRkqtopUXZBZ3bymuTUaUcej",
  "key22": "3n6oSXdck3nf4f7eCG77hswc6YM1Cq7X7oJPTCzKSsdsvCbz9CwrQkhDMnVtwQv8RPM5Ukf8JxHUMijwWaWCThBz",
  "key23": "D9Fwaf3MAFfL3Yktcak9bubhDuhVnrJHoWABjP8GbPKLhRcm5YL4MAg4Ao74Sc5PpkAM6vz2tBTgEwTATSFq4Dz",
  "key24": "46gH4eMj7F5Bx2RvUu9byVe77KXiFfFVAjhYr4c5bx5VByDa36N6ah1MnkEtmWakE1DuXnPQWJay35EJocTXaER8",
  "key25": "o78h9faCwpbZT1xeHLJdyStf5NZfGkmU4fUVbjfKQbWzvNKbkXgYdKkAAnvvK6Cyqo66CT9SwvtxHpPbicLSVbb",
  "key26": "2K7r1123SQF5TSaDQT3XFUKrkhLSyHMndS1WT8aJ7PmW4CvxDzbBfTfP5yDRzWgc3JQJS3XjknrP1ZxAFQnJGcaa",
  "key27": "5kdzprozWCv1bubuCiJSf9VWCcHj7Qtstj5putquF8jJTvw6CxH2M69rqyeeG7deHiVtfS59CdVLPyWPLmZE69Ny",
  "key28": "21pWdV49hMTBC2XdtKhHzNCi9dBkS7c1uezBLmCPUJ7RwG9ZpC9o3ph59d2jxUocs4WDVvZPR2ho98gc7AYabisP",
  "key29": "RZcNjFZr4dMNr48WAuvPbL7qzuyQN3ZN4XLA25Myfu6K9TkFf6cnkmVf2sdJ8aun2KJPZmU5afeu2Po9QshSGda",
  "key30": "4Yq7VSoRwunCjRBjk2qhweoFEfvboPuJR8yjQ1dSWBcgfdijjSLojt7K3NeZaw9TwYZXve7u4zbuHeebFCjhhDMH",
  "key31": "28Ne5P5w9nCGNmRahdWvHM3UqN6XodenviERnyeKExGroUwNJa25Sve4TwK973VsrVGTPYQuQPYDfzM7aihbVG2t",
  "key32": "3AL4P5dSXkefwZax5bjeEwQL1T8Nd5BQxAg5tNt5PDKNzaKmeiDiUHRMKexThCsvW1gHGzUS3D2GNv38SMJKRfYU",
  "key33": "4XeVYS6QzJvtFCNrVerFEWedWQTGd1Ds6wFrTMfj3NYBC8f3BGAXm2yTZEQNgpNWRLXjuD8ZniaYc49GFLQEo2Dr",
  "key34": "36pi2WcgZ9UVH8ZDMPVqKnzDyJUuLVZoUEUuwVVZGqYUXukjGQgR16HPr2feB4U6RsfkLyXkFDJkDdGaY8d3EsYE",
  "key35": "5NhgSULAryPtW5EZXyU3TvaZjeUKQyXMU3DeYmaosNVvLd6tkJJzMimpgrt9KVXDA7qE9K212mYvXHAnCDHmCmse",
  "key36": "5ypVjHGpSk9dygfMFm6BGbpnRRLDxp7jgLVtNY5Y8XPXrojU9RqDwN2GTpbBJePPfPeSX9QJk4ns4vzHxqdcywm",
  "key37": "2VT8D7GwSgUEYuMn3KfqaBD6FNJFh7y3k6AQxeSc88dTWyPRi8QC7r9yfLXo7MSYYS1jHnNg4iLhZfCHqDjkShQY"
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
