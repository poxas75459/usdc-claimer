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
    "4qMcyzFqSqD96kTgqGJCC7R7rQnb9xyUrZquQF5XUaBurtMhYfecHyg3irWRcBufseSjwgRywqQSZnSGTnJ42Vq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PkHg6jiGLcerWD9ytmSEhQUJZa9MQyB9XEh9FmiNbVj4yUzQr8rQ3ifrmbFAHJNKLCjGVUHhQmQ8sWpGVjwigYP",
  "key1": "3g3VpQVsiBViWqVUqx1gXEAeS1sn4bPme5ztxEiMwEoMyyzzmN6raHstZt8PgT28mcLeHFbAyeXF1oTaQ5mTS9Xu",
  "key2": "3tcWBuyyGsCVne7W7USoTV146YJxt5wosxCasXkLPoaCbGNUQTJJkA1PA5PjrMMhRVbWpFqCTkncqgT25y2UnazD",
  "key3": "n93jsoPm95f4YjH8QKVE1B3mEbeDgajNUmC2iggQnppKgFFqfLAfqeNRCuMdEtGaG5omrYcjLJyaWw82NQg3vhH",
  "key4": "26nPYCAgYhxKomRDm3z4heAHHEvxPyd4Lvg4hMG2XuMnQonw1iU5Xpcy4GXrGkCraakLvid4zDft7dkbJBW7RxKT",
  "key5": "3qfCgn5w8C97ApZ6dF4XbBASWTqJDdG4T7tT9YbdrgTWeTFkvZ4Pu4VG8BVHU7xD3j33mxD3kSSYVBbU3j9m4vYf",
  "key6": "3f5WxXH4ts4LrbQyPFoFXP8yDzWSXtK4pBvTUG1Y1q4sGnyGDzzh6AnHrnM2Dxr2D7dfuboeSN3dE19d3Dr5dPvA",
  "key7": "2P823V7hm9dZu8NQVcxmXEEq9KSi2GojzmoAPJ3Xn5qXkyj9exsJLTbVS8NHhh1ocY4HBqR38BQUMVGYBPeof1As",
  "key8": "31PPhnHrWGEioQgjv95P65b4vMXiqhD4vzNK1eXYUWH4zTVqinBJxsVUhHxbeZMg67eC45RTAPcV4AUkmxoPPvcU",
  "key9": "iwNiK1WMCQHXrg1R7yFQsm4cobU3fpc1vg4yjmHrgqYa9KUgthUnK3D2MtN5rgCHKKVFgZFaBJi2Vi4aqxsVQBt",
  "key10": "3141i3uMao96XSvTx731qtjZz8Hk4ZahPZMGwFUgieUEurFUkoTBPM5dHN2qpatntFckTpin6joFNzWCve2iTs3J",
  "key11": "4adh5Z19TjmCgjSpUUiGGJz1ApWKVqa9o2t2Ubq955b8NuVsGDp8fQYBDd9DEMtsxwx5NP2zwGs2CgdVmCaGv9Zf",
  "key12": "4emUoSMfTdjDjHet7hbTtcucAnYvzRxuezmsUqAXUUaqNd5cZh4SJLxtjV94xFiQN8uUX5PEFgeH93wqp4oaLFwA",
  "key13": "2VM66xCheNoLLrTAVN2mMsEHZvNUrfS8ZFe2Jd72Mjy1N6eLHdctxr7snjjmFKknsotBD5k23CL85Cx3gg2i5Zjo",
  "key14": "3K3uMizatAJ3LVAGFfFsrRyhYbcTRUtEMDgbu1LMYXjz1DHtYG48WfBSRh6AbrPRYsbE6jw1csGFkiTqgqRHtK7d",
  "key15": "3gLi1ymamMvnGdtEtFAJUYMxaHWosSzRShCS4wrnwfFpWW9TyEeRXd2Uy2S9RCqohWyzRz1oB7rM3rCGt1A7a4nX",
  "key16": "4ouKDR9aoY7r8n1FTfzxKXphamis59XMLpj6TqkH9opYUQfQpi4pyXjUGyNfKLwNbfHcKWednXQYdw72bPVvkCbP",
  "key17": "4omUNkqcWWupRErH7ycUAz5pinakk1CtKuHW5pdPC6SrwEJbYPL7rMR7o72Bjehv54yQCi87bPwnRpf3MkFHHiJo",
  "key18": "bGCQEoyP2BCzpGJ81BAhcbCXBQCgU6PrmeGY4ju81Dyi4P7avdPHcCi8CqaRTr2B5Hkjahekf8KLSafzYQfMrS8",
  "key19": "35uK6rfWhpAJvVxaw42kzmBHg2QisrTEqmVSUMLqP9ycuufFfRZtSgFNtGfgF6igrzLd9zDyzAUrtC6imRu7fxMe",
  "key20": "2DhoFHZVqUpNTU4cJtDFkVHjgnxUJPNYJpVa4yyKdCHThCLjv5ynXb49XCvnCu5Midb8DZjzfyKZzYfoBNAr4bcB",
  "key21": "2yruhj1DF5XNSZmUnZ7BpPf94AQfvd9aPqUwkRfow7Ja6CpmSe5SRfQQaGWkyVez94v7fJpr36L6MDVsiwJeSRJT",
  "key22": "2c4TQ94MhPuLzb7SiupyDzVk8vReJNqUgUxAYqqvF9rf3WRkM5U9fGrHDjSwsiWG3cfNQcfaATpa9nmonNSbVZHA",
  "key23": "478ZNHzx6rfy1QGwJQ66UEpC2tLKMHSQewp6wQaQsh89wi5Cx3WdLn8JypXSBi9RyhmqdbyibqtXK42JXsWMjUic",
  "key24": "5G6uqW7xzUKcydyKXCeDi4MB67pP2RSY5VvUv81V6jUerkXBLu39X1ZHUxXvMvoxmyQw9BC9mGHrnUnyL4YcFDkU",
  "key25": "nQpKyQXNk4xNN1cEefBwPz9zKDXh4ToQs1LZHppParrwm1EvVc4d5u4No6rBKdpPJJ2VUNoU15wSL3ufhfPPEuS",
  "key26": "3uKFy4SVWLrFgsWyR2nvRKusP5yZMfiobbpkLtwJMmcRg9zDWjCJguRNVHbnLiF8jpvJ2BwhSeiHnTZHt5ZcRckN",
  "key27": "5FZv6gdwQGo1jd7CGjm9zji98YbAYHagzqHiXKvjTeoARct3bWA9aRT6jL96rAj6fy7MwDW6pP1KjXfNDLogNynE",
  "key28": "3RZ3gHSmeru3gD57DYnc8VH7RiD8TotNJhodnTh9ysGT2ntofoHEWCAN86ZyJUaRhEXZJU6tqV4XUmeRqp4fvVQQ",
  "key29": "6ZbUFmVmcU6FFby1TP3BU1XFjgDXncMtf2hhrW2jg8Zy862QFGG8YnaacfYSQ9CLF1xFUPHwiBRR75ybGrYYMP9",
  "key30": "5WA3aoeQozyndk7opUAzGC1YbtRUp4LdvqBGF2a4nYvLZJp4WoN4HayTcpXvWwZt4DX4CCziRqAhD1itngTS1KZD",
  "key31": "3Ep3ya5ZMTxPY3cYkuJK51t5FX77VTCYyD2jR2FY7cW4UVX7x6t3E1mP5hRNanmPM7MQkYznvDMBxTHd2tcmsKSi",
  "key32": "4QR4gCYt2PLjWHmtD8serktuaQhS2z89feHpf634baWzG9Yg9HDjMDWiUx2BbiyTTBcWJE35GtnFdK6Xzt8EPfCx",
  "key33": "3hjYQBZYpH2etDmuCEX6SYSTHvcZfwFJCsN1sUbXJpMzTs6xx6KeTM3u2X8ActGqDLMcELvUbo8DtDZMkPihavWB",
  "key34": "51JMKTvSaW84yxFQZWwKnghvAVywU7Mh1YVaDTLMKvTcdNYYqz8BTkBQ1Q8xUN9Wsb1FRdpUD94ioc5SQuPGhN74",
  "key35": "XQ7fsirbZdroYoFdQhnjJUdg9J3AAVD1EDnuWAzydstDqT4xM3ixtgGGa37qiR53tLHTduLGggAV5UBzrDQnFh2",
  "key36": "5unDfUsbwU3JP5ewGR4LX9mLaGhAU3B1F7Hqevi163HJftcRjjbr6xUZSk9n7k88Q7sVBCpkBnL9vtAbp1TPx9Nv",
  "key37": "25cA88Fs5s6mYXFCKyvAw5EBe3DZfrNJvYm6eZjgt97obq8WK9RpMGJV6GKbEjaZQNZyCgrpm8eBE65kZWa6XwiE",
  "key38": "2A7XFYf4DxC8FeVa5GuAv49SHDWUQGRrEYhBPpbPvqjLGzx4E1Va25Sy8MhwtPBRwwXiokTzdjmh2XTVtUmKFHcr"
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
