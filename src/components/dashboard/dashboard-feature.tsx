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
    "ZWMytE5BrFjyj2TEtLtCLWddD1rRvEWuz8w89Nk4AJQ6qxWTMMo2qkmD5aL7uuWM5FCyAKGjvdmf195HQBhYLim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dhpwLoXHvLu9FhJzghf3K3hg2k1ZxzirYJByeyS37sw5g4CHrxf3ic4UUDRbUhqpuNPG9MHZoU6sCHGeRBiK9X",
  "key1": "3kAUq3ERRGDsU13HU6bb1W1bgEzb9XJxx2YtFs1j2eZzfgyAibq3tDDmebP7sZGSfuzZKUtqw3UbsQL5guGbASbN",
  "key2": "t69amG6pqCdNLaWc3ciVAEwiMtJr6KnPTdCsbDGyPAA6u9X5Yr4jX1Q2F5UCdTdivKR7QWbHPSsTantkfWZnxCc",
  "key3": "2Xa9iBcY8z9QPfpzpbV4B5eEvHEPGiWpw7KLkhpw1j6MmqUF2CrcicLTPMHHPL5HPcoHoisYnuAuaprPpq5vbKJd",
  "key4": "ZuxZnWhSEq5SKsEeyQdriKxYMsm1i8gBk5u3a2UEJBdPfHn7WmoQH8MAC4jt61BsWwZpWCfAUMyMPQ1zKtsZcS5",
  "key5": "4aokeqGfYz3EmH2fK7jxFpTLR3RqZvUcMkt8AdunSxbemNNrXz6VBf1BrKDHmEUC8uhVhU8wqo2YiUo14jkXgWFw",
  "key6": "2SW4Xqhhs9fBNJh9YcTWF26zMvZavdt9KZdoqSvASsXHvPtVLE5LgjqPhxeM2rjsKiP91CebDY7Dw2dtGTSEmHF",
  "key7": "2eT2AxM3MC69JzQXYZgH9UYDAhe3FBgtWnyDrwvzGzHiNxDy3eHSTVWz2jjyBPmxKrms4HcLaeKvjZXzwt5bM49D",
  "key8": "4hNyKVxPjxpc8hPfX4c7mEnj1dST44GhEBbWHeaPzSx2EeGixgNJ3xY37TouzSDeoqiT8oYaBk32zG7qTDRjCPsQ",
  "key9": "3XxDDRSE5VURanZiE1PePFj2cjf3McYuY5519bB3VNCYYP32Zf9kFG4zQVjVHoYfWo9HDHWD7M893AboYUYHesB",
  "key10": "5T9yQZiyxzH6GJahrzPewxQDhmqQAzU8Hf4Ms5eSJpP9ZJMVZGMvtSkPsg8UULa8aHYakE9LvcRmCd6zn7WrhLuW",
  "key11": "491BddmX48NP88e13rKdFyceUjkGBYS4S6xb5KDdwsyFxjVyZpecHh3i9fruTeoCmJkjgzyuGKeEH9tFCFcT2XDN",
  "key12": "5xUtMWAKQV2ykurwFLSjMB27jEhGmW6JqimirfUju1hhqNRphBq7z8HE1txt4v4EYM2Cc9gojqPXWGRYjgALXeyJ",
  "key13": "35e2Cm3F6v7KquYeFpCSXMGYSFMa5bp9uBH1E9on8t8rFQ4g2RNzyg4S3uzM8qGxB9CZ8wU4UHe6yWha69p3GDVi",
  "key14": "XVR5f9fStgBjVo6VH1CZtvS7EUoP9eqGgPo4cvRnFJo84iaDCQRQR8XTrFXBwrN6jzp9rYT4jW4aMeDjRqiNoJW",
  "key15": "5WwRycqVeVMZGAhLsqYZnEp8VBavcxVpXszjWSUeJkBPKSinya4qmyuBJpPuM5Co7QDYmeEeUnEuWegoVgKQy9rF",
  "key16": "5wcCkXKJQjDJv51JfUQ1JF9woNCNe829oSxfGjiKqx8SHxjpJMAhsRM8tfhHmsXkoXWjZXYSKFMgkcixLPcJMrv7",
  "key17": "3zMEhM8t2rdBEGBER3yjsi9cpB8fAksV1ZFb8JgAy5dczCsTd3pesJMrqWukhYRCpuz9Ghxi3LMj39cbrvsoquQX",
  "key18": "2i6EhsD8BvM1ijt4Q4S4tBiYTNNFVEr8MSNj3SGXdP6e4ow63HWch7pAkLQuYN5PqCGprfBaD4FJrpRr77NF8zm6",
  "key19": "5UJFfSYkDKnmE9XuGh93f8fx7BWw9PPgY1oKRdDdThRSCd6Appg1gFUNvL5gthNgvf4Bxb9mdsqsfCRCFwDjLA6U",
  "key20": "23oeKJJMqNajyhtojwECHAoyVaWnxJwmEPhBQP6xc59UMqpqnw1kFkKiULsfznYJxBm5UY2Ndtc6Rkwuv8CvQjbb",
  "key21": "HgQQNG5hjg66XVKXAsbq2Xiu69SwGFjqLEgbjRqLyym28kzDKAcNGVodUdZrLnaF6NmVgyKoCeGfCm9qLfLdrjk",
  "key22": "3gCSFV1974Wb2HpZcTc3YVQ86CNwc6DQn8K42NbHoWPN816n9G4JwFbQbC8UkeB2PpTtnD5fZhtiWaeVCqfWcyaE",
  "key23": "j78TkASks9HaVecCchevVT7fTCW9pv4SBHCyLyhpgwxVSQ4j1Ea6uim6hLQFKZNpuYRhp8zttgYXn2CXVw7aVEu",
  "key24": "Tg5YsrQCiXAXHRToX4RAA82FvWUNgKeskCG1TszL7ZFq54P6KF4K6no8zttUa5UdJRRwz3Ma7vRPrLFaPcVQmS1",
  "key25": "5RgXYrtnKeoM9qwDykM4G5NA4PzRbiphDErq45ZjhenBijVuoJfatSivU3fUJNeJrWqwC2qS2Ek4f7eM8wF4vvn3",
  "key26": "2h8Xo9NiX3Zhz8UxjgmRqtTqMttNgzWBSViBGE3jyqLio1UHkYDr7EnCqacFMAUBhaY9Bvs8LxTFuVDewpNr2cbX",
  "key27": "2AWKP6jDf5iS4gd5Z71eKSuvKHfKLjoL2Jq25oQTdopyF1HUnG1EysRwNnQn6tM9gSspL5xYyQJ4bpn4WDafqXed",
  "key28": "37gJw2LB8JFpNKSuR234z64RYBgrSmpbNCWd1gsxWSqffiNF9mGCYiPqgM3SrdjKQWHmPR3L2vNecBXdRZGV9Gn5",
  "key29": "3GuwmdnRxUBbjbYMJTv9PmiQuZwqfszVrGpbpjVz4QpJ5SztTpTWMrAijV5yk9JRgaZEVZkkR8uwR5HYyt7miExJ",
  "key30": "3E6c5uty6v4L31tvr6gn91m9QUaDEU9o6aewTScRRcdFGZAhD8rNkDTYHU7wFqeypt8KFvK43qiPV3NtWmwHxs3Y",
  "key31": "5Qft4DsVpx8U2cTyxRCWLWZVpQVWF6Lsuknr73qSXtUedpLj3PvVaVpe4mrnDfEg4GGzCim988GtcpVsNf3GaH5C",
  "key32": "2zQjRoKYUaS1awiU1AixD4bgeyqiu8a7rf4tVCJqaDUdRytjrTFmjsM36tYaB6me5qsZKX3UiPfNFTyGmes2N397"
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
