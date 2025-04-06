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
    "2sWiFr1hm6z9BbMWYj5AVQU5WF1JN4TABLyepieqt5AJ8923AgSHTFsSUZTUHpiCHM9poFQSogkxcSkBLmFm3pJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLa5TAg7Mq5sj59uPcAK8USj3YYvjT33GUaqaXiZNwSrbGVzyeyH6RfpzFx8GC87cgXRbdRJvVt2zKbUaj4J8aG",
  "key1": "1SS4qBzhsBkNgxbmwvHbZ8rXJGSrBFRdXj7q3CTsc7uPFwPiGPaGUR3FbMYiXYh5vqXbDts3KGXdYmKePQUkNnJ",
  "key2": "62dA3BmcPFm6q9cx4kbcMjsP4jfoY8X5Xt4EXAthbZs9XmfRqQoJdMyakQKoSdmucSC5aW8XryozVwhkKjDFkMrp",
  "key3": "5mzvUkaqxbthZRoAadTUwXyKVhPATpwskVFCQ4vVBSJJBeq7DKBTike7E6zdtQsq87Fcym3z9vUqNMRmUdrcdsZk",
  "key4": "37Cwxvfq5seS8faVJRTwcUmcUG1ydsGvp93aJhCaAtnMYaPpXCkrwk5dSXw4PTBwFwqSc3WP6L98h84YT9Fo3ALG",
  "key5": "YrBxgz6Fntq31dpJQJJ4AUGvvWN4zD93jypRqLom2DXUfMZq6KeBzhp8Jy3LZeXDcZNvoLFJoE7DHtrEgfV2EqX",
  "key6": "56nUu1E7pCNtoy9mBbGVgQAGeBTgd4h1fGdzK9Hr2yCxiJTMVcKS2LNNjRvryctXtQDh7iDWBHZsaP35BfoXH6yF",
  "key7": "RV3gT7XZSnShVPAVZ5GkesMA5t9EXJUxrykZfCr2PopGRhuk3SXwjJjCPgXQsCZdnJZuM1mmc8R7UyLDdhHkhXR",
  "key8": "3eZo98bUNc2zs9QhvzwCNJdcsqPC84cBP9SHdtMuSJcYJaYEpMD47hgt3QigLG9qQoCeGA9baS6PDDxECN9ZM4TK",
  "key9": "3xcqKi6jxGtemGyzyqioS4xqvWRtWGhNZfQ4UwkGv7fohxCgcN1DtdkwREFTagvKKNTivVtrm8F9UQiUmhqQAqPW",
  "key10": "4LQps7zRtdgKDzD6o3bRD248fE81d6gtEU8kveHJXabwGnCFXtZDosLitGq3TX4jqX2F9bqYNqCqjDBx9enrWKZ",
  "key11": "3LTcjFbnZ42xdfod3CgW6cDRKRqQGT9vK5A3FVtiKSsTj1ffEkm2GKEVLgYSnPyHM5ZW16pTqbAcuzqBP63rqjBW",
  "key12": "5eQHbfRM4SHTuDWZNf2yhDso7ARVx3LYNP7qE2qdjAGeJnCJNYRXaycozWTJfpwwZ8mgu8xXEWfRuemNvUbZQH6h",
  "key13": "3xJxbhWu1fEqcZcbLH4Sq64PjZsSxAs72txdTkkDNyvPWXD2pVJWRtbLJnBBLXaVHiophagUdtwGqKfrj5qHgTZx",
  "key14": "37ffRYBHv8ZFNHsVDghcosycLowFFQJRcVzNH4Ut9RceLJLgditVMjsBeyTtbaeaxMvxr6bWuekPp5SswXEgNjTM",
  "key15": "2Yhg813kE4YyHbcoUM5LdUrPWUtz1kR8wGXefD99ZY1egn5UDudphHqURkpQkZMHk6SGaA2XprEuoc5faC3gvooQ",
  "key16": "2kC6TkaKb52ZkZmV6QWCNT1pxQCEzCuQDoHbQjRbkPyXiUcE9TRkHpYhnmCCJk3DictmsFDmDs98ZjiG6fN19tPv",
  "key17": "2wXaqZH5tBnCwkV5tN3V89UFTXWE44tgg8dNabhL6aKGoA4pReRqgSij5XPodrfCtgbZcums3G8hQXHM61aAPCFa",
  "key18": "5hyrYpszwUG4Zy8GUvmQVJTCaWk2HYgnGDqo7W6CKGraH864LopmV8q8oxw6Tr8CcJfZZykMk8XNeqkPyT4k8iQr",
  "key19": "5wdAHXku9RkWoDChavbwpL3AULRfLME49gkhXu6TJNLcZ5zPAgYaZGhAa2q9pfYD42zjAWp68djTgvKHPMknMgV5",
  "key20": "2Tae4dRCxaDQPthoUeA1GWpGawcmsLw5Ku1tehdE9AsfrTeB15tHeFtvswatkR3BJQTtAToJz59CemhFdmk9aZKb",
  "key21": "3b7SpZs4d9F4THiJwejBD9UgDiKTnCPV6gGbtQq54MvT9xSqE1MNCm5NknHmRQVGiffrqE2eUQu8DUKx9sqghzsQ",
  "key22": "3oFiDZBStjkYAuiMX27UkVT3zxtqe8j7eB9xKAtvJjJYg1mXPj9RJhYhKTMU4V4PsP6fp1cgeVAM9kEmwXcXt9gH",
  "key23": "4Q5hrxxN9HR8zddx98P3w5zUo3uf7nT9a3yQ1pLV4CuKDFh55fJpUoG9iyvzpgzkRMx7QJriiu3C19LjiPtdpgHr",
  "key24": "4Nat4Mb1aiuynPTTqHHNRYa6yspjMmG7nQihctddpeDdVRHQp7VznvJWwue5WhLHn1QQGfXA5hvQCSj2AQX7Gu4y",
  "key25": "2wbw6th1Fuco22iz3RCwPUDTBeE8yw3XCcaxjf2BLbKrLjUjAozR5Le9ZiPPbENi4xyGKuJH2VYgQ7oLsb4wVQ76",
  "key26": "nU8YshLSkrcsaNcPFZ2K981C9L7fv3H2SQjwn6sTJVgd7dKZ8pD5fwwxB3hXHTSvg2BnGoy8aRSGnbVEPmNQyzk",
  "key27": "4jz2TBFwx5yrJqE5eFLDf2CKoQTFRyc7BRmsBPGomYAZwBUe9rUrkj79sTrKgkZNWZH2TWDrL8tC2okAnJGrmq8o",
  "key28": "VfgcESbd8EjNK47nT1wuKzvRRGH8mgW77HMpVR7Pm78EhSWqfpvHedvDWvwChpMzNGnFzC994LVdxE7RNSvZmR3",
  "key29": "41hxvFAufaWdQJSF3zLUgs5ZzTsgTVTckoCJ655LzFfeEVDbxWY8Ud7TgXEXd3M4MTRkf86AYDCbaLZN1y5p4sqB",
  "key30": "2nieDe5BKP4c66gAv6DgzTTr9zaEZd2N37k242UmZkgjT25C6R3Dm9Sw2AqhdrqzwtEVV7WarQziUnkAj74GqBht",
  "key31": "4EYKVPoPBCJzgkgsTFNSzdkWqsxASXXfd9vp2Zie9RkSMd5gvfT2Q5KSAJ9YzigqbZCyt3MacbbxNPz7nW9d37s8",
  "key32": "jywtfKDU4RDQazGw9TqCbxb3bxqnLhYo1Nkf11WvmNy4W3XHm2eZod1PtGnyvL4N1isddWRLhc5y2W5oYJEpyqh",
  "key33": "4oAYm72EgFyyBbMeni6kjXSkoh9mxniGTfB5bgvFUEgxT2Wtxb8gS22Zg65gMaMtyumwiCP9Ds6XbqhsSrQf79v3",
  "key34": "27V97mnjkVWL466hfHmSP24h54aezdK4fENpua6RdX3wN72bciTHrguQpuy2Ro3mmqhffYNphdWL3koaqcHZ12k8",
  "key35": "zqfUAT6Myp5fbrfukGmAwAwSTHGtzhtdes6oegjHXrBbrSNqtWfY2S3D46sRBRZQTXdZ3bkdNu1w7be23H42xh9",
  "key36": "KuuXxx6MQd2FFaTh7oRidtPq4CrHpJekCqJDR4oZUj7A3nqgUf8xUCGCbgZEddz2d4msDQU2R2mz44RPVF52NGp",
  "key37": "bmQjfpXMXpfmTAhj2nFYdNrS24NzmHM6bPcX4fdEfLGPs6i5tW1zWZ2j5S34W1JBvMtBCFUPoYi37Zx2GVGYm39"
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
