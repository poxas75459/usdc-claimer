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
    "39JKDz2wDJjVKNh8ruSrxuGdJk1j8igqRbG8LLKg2tiTGSJ3RF3CgA278oRas4KELfkqvrndb7sN6RkxhJzEi1H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TebJT8TuYrUUQPR8Q8txyjSAC8CXegAe6e54mJEqvdoRtjJZjxnpFuBsJ4Bg2QW9eQbVpnJjcpMZivyBqT9WiSh",
  "key1": "3yGM6v6AgbgizY2ArpmFdCw6dCCEMQraDLd1AWcj8YSzgTDe3ZGxtAEgJhqAyp4Y5n7KFp3tqTWARYr8GKBzJQh2",
  "key2": "59oqw6U72hvtZoUxEL3WQkh3Ayf2hbZHK3mJ5KycUbLHqzM84GWdUCQPv6A9Aany5s6ZfD5zhHtGMU9pJMk9AeyC",
  "key3": "VHf6cjBZkEQDbWknuJLxAzGCAeoqXiRJyW3nu6gRKVbtwNePQiwpcCR8zVmF37PoyTmyG59Z7ik5xJE6Sa3mRa8",
  "key4": "hcjUyZGo2yNssdVgU6i4uUbV2985UudsSbGYeA3bNkXg9LzxcQvQKbo3SbT4kneCaYQtSsMsYRLgaXmiKXBzTuD",
  "key5": "2XarC6J9cZ37NbkK65MbfAe8e2Pb6vPgRm4o3DUvKhrTDCsGfjmenU24PmQLTccuJKWQbyfb2WgU1V3XQjeLMgqN",
  "key6": "5Wnk8zuWkPDge9edp3dDZ9DVoHK61Jx43HSKgeYy7CfGWzgpqa2avLBc3NnK9vNVKkVS6Mz6YCrjUACy6qy12m7J",
  "key7": "41aYh1jrLbxA7nDu1fLyDxhoUFuRLkQievi6NQRvaeWGY5qP76eXvJtJQe4msVZQWeMQm3fLL88LyYoUaSXJgyUu",
  "key8": "5Eo7d9PX5F8PMaFTRPvJKHDdck3rbXWazeQfpcw4c3YRLnvpU5aKoXcGrC9SZr7hK4ftFMcwfUhadeUF68usve1M",
  "key9": "4ZNHW7NtP8rxLUhzTQ8pmhjMVwdCsEUpsnSZ823gBtvSuXK5eZSpYYsbLHy4n2moofvW71w9rNjgQih9tMGMeCym",
  "key10": "2Zr5YP6nhM4sTwV96BZ44FBuhGwmQ8uhL8ewJigbYhGhZZFGFAWEnWAkw6iTAJFmUzboDowy7TpWJ2KPNKTBM5Ne",
  "key11": "4b9KF6BCeCGYg7ySqtt99DhVRBTMnjku6fk35pGmEqz7ahQEHqDdcDczAB3we7LgVLBru2qwcW9JcscA3T4Pf7dN",
  "key12": "2EXqWTdpy5VXJsiLXArzkXhCEzrBScv4FhjSJtDtr2cxNkLuG2HXC6tBRQYH2C4qcDH1xAq6BKdzonKHHRKB3FuD",
  "key13": "5BRofnQX3zGmFZGCFDjxe2xhFf8WHeP2kG8keWPypuAxFfCo5xAUmvYXNBny3cfkdBM7KSwkkMgZLrjcFku7igwG",
  "key14": "5TUYk7uoTpNLBDh5DUrbxV6yxPc1BDcfUCQwXycovcbofxWgGpbsziMMoau7nKfhF9mxkR6EZwVAMdbWMWvGP54Z",
  "key15": "438tGW9V3ZRKcHvBSKSNaJuBhvqVQsnhsUfMeWi3Wy24sfstKruvWYUB8CzsUcuiV3nDACinK5K42JkRJ72Pxezd",
  "key16": "4mTQMQHzqAeJaSA6Udg22SBnkgwGC74cG7G7eMyiPHCmqGX1QT2MBaygtTV6fnkqbwUPU9VgNR4TjK1dYrPRv9sh",
  "key17": "3fiaZpug3agm3gHGrYiq13g55dPJZj7obuWMPqL6BTSRtyYCG2Pqkj8VjTtLv9dSU2mB54wmpxMP2JAkFwX35FnQ",
  "key18": "4qXTPU7SPfANnyzB1YqLawFTej4SutxwefJjG8tgweWw9QcmkDGorrSCG6gyyZkVpznwWTsc7Mc6vsQmzmaKYMHT",
  "key19": "ZWTVDTsq7hZ2UFzSsexZUQX2MY3PRHviD4XpjnTNSxeCMxcgRR4Biz4SC6mUrXv1buazzGK61GokRQ2Azzt3EQV",
  "key20": "2chrrXPJDYMFy2JRoe2WS5QTe6pdkpFzvkbWbW95w7n8fEQMYRNSSUes86ntLDu5UeuedBLB6nFfDUm8WFV62gKg",
  "key21": "2onJRTFLkkAzsvFpLfzieEzTWVaqUkHDvhFeVxXNksu7iQyaQYsd1HW14R6LRDvktUDBxoZFwz8UhgycJVAMgVY7",
  "key22": "4Zjaxqbb9Gqpk5rsEhwNfc9sGoNfUfsQKHDYhjwPngERGdsAhB44mPoE5ypp8zjffoSLaK4iSBrmV3dDjCQQQwus",
  "key23": "3vft9yNu5fvbA3J41kkGxHwE3Sp6bNK221g2XwXxB5d9Wr7umm5yJTQ5J2GUPYERTmYSr4TbhtovW5Yph8VnoY4k",
  "key24": "5yvsv8JSMmJa2riqY7Zotikg3qiLBpSoMoFPvsamD2kwqLYxbkXAn5tJaiNYvVgk1F1MgiPMqc1LoS4xyWLFNAeX",
  "key25": "5aNpVaxsvW5vpjF7zc738FiMSGvoDEs59EH8Lk7qkDp54yFqut2KENWgerwCTegDkysi5aciU7hJAe1yXDqbu5qK",
  "key26": "3se2VhMkwtKoAPCUsZqVxtwurTys7NK4HXQF7VNhRgAaY6ewatGifoaCYiK16eznoeSdHpH7gnVu58USHgSx9dMy",
  "key27": "2RJdLC8AffGGDALQpsvCSf5Gue2bU4BhrGGAjEXSPS2HCjQKRX8uoS2qzeKSGxdUsTswU5E8cqYMbcCyHjhtYL8i",
  "key28": "37Whn6PFz9tzVJh5xUUe66dhfHqTnU9tM2iczeHY4eWd2e3uk9Eb2eBPeCEkx7QH41XxgXaxwsbP5NSAg8BNRYqG",
  "key29": "DffV1sfeXexy7Gb7MEwa3WML8J1j6g1K8XsMtT9wPiq8BH54iQGBRpnQzFZAmvUENY2djSZ1WSu996rV6auaK5m",
  "key30": "5cfmV19agxK15BZ4jHpGHVZiGy5pD5xMH69Pfh5cATBQTSjQEw4pNJhGr6mXvDVQAoFBWB4Ub3idbLCM8dYrPAi1",
  "key31": "5AGJ7dQewhvpA29KjmNPojwKmE4VU6jXPLjT8FssQaGa3zsPDABjyhfWVWqnrDX5PgmQt3Tu9TQeS2P3cfChLVx",
  "key32": "Q5LAXiwkDBpQQzCVQ3FeMNkN6MqQTiMtuZpf8gMJfhEMrsmsNqMW8F1fnBrAikMVWmFCn2cownP7vQnuFfkSbsB",
  "key33": "fEoABZ1QK6Kzp9abuD1V5irDLdhwDMVium8qNgW4SmUbBHDthE7aqbbpyKuufrEa26UDBpy9aT4FEGpt5yAtVwY",
  "key34": "25k9S6D18tfg3CXRKT1QEX6thtyARCyyzgHy756TpPyrEdLe1DjFYjwWYCBBwdFsmQjj9cH9kkgQ13BWy34dbLTr",
  "key35": "3ZijrBsNqe56mLcJm6zWog148dP3GCCzN9bSccnzDUZCfZgW3sEaPNNuwLAJtxAoKHuCPFnUNjzWdoqT4Pnhf3sn",
  "key36": "4nYUAjdhccxWispEN8Hhi1V1PkxQcjqFHmNNWe9kyFZvmWNnMb8zEqZ25fDV9P4gFNNe6QpNqsiek3RYj4sT3jB9",
  "key37": "4rZVJXQwCTpzGK8yTyoTNjBLBpTbh7rwnLFZCJyDxq9EWe559V9N5eQdKVBMctZbz5CHX4BW8Tzt1jpF8XWDLgzb",
  "key38": "2RXiGBR4n3T9aJTG6r9ohxUm2bS3GdBoM6gJHzPdDFVozt5CwScKxAcmmZct4SwQp2wLP2VK5MAAsYWkbc5Lfz6S",
  "key39": "4zS2Z1FdUKK9JTCEdxGzuaDkCrQU1YEsvMf9DsKKwxgitqkwu6t5bSaRXWsA7f1iMNZQLh7poQt4XEhwx4eLDF3e"
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
