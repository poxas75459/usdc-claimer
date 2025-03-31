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
    "5wb3kmv4ewYjJEbVdHRLELKsZ7bY7UbRnqPFuLFeHD7tuBtU166DgoPgrNLjGnH9h9AXAje5hRAqzKJiUEKBXb7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUX28SsU9G1ADDvSseTzfmZKntzHdxk8rqebH8sATW4mPsYJEVkYHumBhe32peK4DcdZjGUhnMtwz7GvstsjMGK",
  "key1": "4MywT7uq6h7Wn3fraoSsNqeexMcKTHyX9GuUK3FCaHKKCtAmArNKhTK8qQQ3teHHFGzXdDXWNvYMZpZdrZo5kDqw",
  "key2": "65NinQn1oZmSMmXzk2AGS7Fah3kQ4pne9bjNKpGxn27Lp37djmkY8RN88EbvqTBqUVmQBFDrNP63h3MmXxUP5a8K",
  "key3": "52fthouD8yhp1HfwCEcrUmH9GXDLas1xgVVdxUrY13mv1ax75vAQC8YfnVGY8mp9sAz1GaLgvciU6tQ1idWvyGZr",
  "key4": "25o2X3qhtpojScFWYNC19BMCZph5w9o4FFfHDgvJMZSVHSq1NVq2sQrx37D4i1BTASeXWWRjfgKkFjghJ5MZfyzQ",
  "key5": "5ouhq1GwxLK24sxQ85KELiNry9PngihR6EHuP4vy9z6HnuT1bi398bxtmcax5vcoMhf7pzQtKThKAFzdhrWbdRKd",
  "key6": "5Zs1q9cLyD94FzWFP3UQoRqkAp8qBsHVvYnMNCumvuBHmz4TzJVDcLTgAto7UoPEbjmTxRcX7qdM6EKXCt7SbAch",
  "key7": "2fuwBHpJ3GcbFhXTouasQgURMDuTfAbrjziUymzLN9jSMmScArXFCuQoCx6CshFNGV1Bq8TDffKf5xUPuLwVZqXN",
  "key8": "56xgRVcxy1Knu2ow8NGPteUwebQr8aX4Z1T8aFRXkt7svvVsv2M7esnGqZ2WWUeHrYT1avxHqzryQz1KtRfmi9D5",
  "key9": "4VqfpfyhY7DGZ1NrajJ4sFaQGbgyomWymVBgxW3haWYsnzH3oSrXNkoMqvtPH4G9UYQdN2vEhWuCDnYFknxxATcw",
  "key10": "3B5WqRojUgnR8wVBj8NiCN3Y6QwBAwyKLeUczLnHwTNbTwahtxqkmDuWAen2KSP6EJf2d6hCy6L3CWd7LoiGdA9h",
  "key11": "4Ey45Uieb8SpxgsG5zqqJNc9LsXduWmjGPihZiKNYapy9azJ6Ejbw3VBtX6767cwcLXeKD7UzYLznMqEfDuPTCJK",
  "key12": "4qAVVxm19bQdjm6wN4ZrroN5FR9NNxR1skAyi3W75bndRQRGNFXpcbKhVfAtdf71JHsJy7ReZX3nWmTvnztqqX9",
  "key13": "4Bemuooke5AmazDdgCubghC4R5KjrMRrpwVQgNiF4NNLDEvY1m9Bvj9JQuY3TSNvoXZ5a7Li84UR22RJFDLhAJ2K",
  "key14": "5SY7hE6E6hgxj2brrSFhpnh3QtbtguMGpGfWxRgeh1tEf4j4mnXKc2sAimWSwgwJAJ78fu2yDyMYzRySbw9xrnMQ",
  "key15": "BKXLZiHUEukKZuwT3NctXSsLbNKz9SfGReSdLzHMAeYs3GJx8YPjG5Lni2EdTB8SecYfZPxjYVYQLoWpKPi8Jv2",
  "key16": "2FC481Pyw5LZLHWUjR31oaKYsLsJ8RgvrtcBM6Sn67irsTumWhessEGdftDxQDkhPzhAmFw8dD6KxSLzhbTevdWH",
  "key17": "3LY8roQBrcUCWxzZvJx77wuFfgr1BYdbCDdwn6pejaioK8mXV5gsN2aQ2SamKJJjasAHNvf8KSUoa3TRFPight6r",
  "key18": "4zMyZL8SvK5p7fyX1DckSBmjWJMreyALiiDK4feZMo1xF1LH3r892CY6pocdz3AVRZ8WsMZ2tNSgvkHgriiHUeVw",
  "key19": "2R6LbuveH2ZMHHfrYewwGSYiwPYf45GkhEEFKN7MsTQ1qKAyZBfe8nhMHmLGHSyMXkSefBN46F9kDVxBtJchuEx4",
  "key20": "61H2BtGEnivqCZxR5tAs3GEWtC5mWSkoriWecMAjXS92UFSW8sUzjQ1tVPjKv2k3wUW7vK96a3WQedMPTzoTttN2",
  "key21": "22fze9tbjpWPF78ySuuQu2MfRg1btjS47XrrbzgpExPB1FoyKehSvqRyAyGjVn7KuHgJdHkZk2nNPtTF5K19pLt7",
  "key22": "3TjCSUbSk86AYUT5wkgAxm61SLvzSoiWnWWEL7k2MQZGvzLVkk8qBXAQPktQvykgVt7sU93PgSjHX3PdwSE5HmPo",
  "key23": "4uwKTcY4CLMV7Z69VxQBtbP93w4k5Rh1MdCpVwb2MEosf24DaRuj7pDvS5VnxuHyeNYm97cbyTyRzJjkpYPSsiRn",
  "key24": "24vkn1sg9pC44hPudxZnFfZjcDwusCsyYU7rYnsLmwdgEzvTQMqXt7CyVswcBJsYkk57USc215ZJnoWkhTgQi4xG",
  "key25": "3aUmK97vA2A9d8ufKY7nah8NRSnZTnHtWK4kSTyPC9GiedDUhdDQqz9phmapqyrcAnPaPi5qL2ddTjjhzRXErJRA",
  "key26": "4ziimj1ZxD76gSBfHTQoCqhzbXVgmvSar2EGPy8YREWYnTLvzVB6iwCjv4rb9EZC6tKD8ig9gvVpfR9wu1snJUJb",
  "key27": "3vkUKX3vPmhdmEg2UwRpiQYLM7iw71nKNVk8Uaq9JTGpCWAohRjR6LzjQGcnnTMYp1AtBSbo7uTyAimphJHdjQ6S",
  "key28": "AC8V2xeJ6ivfdGK3gA8Npbn65QasgWKWECYVuk1vtdZZ461jDUrBXpNiwrgPGdA1t9okfwcsyz68CZaU5b7PLGy",
  "key29": "123EsZP8bPKamkTtAHvKmZ3hnYjF6zbu78Mid1RXFE2hgYkjffxhg5NRscA2oo8xCNjsWYdkaHc8KxKgPYnkkuMK",
  "key30": "3EK1NGshPuJvgCNnd9P84hQjX719WPFapQmwFQjJYg7WgDG3tqbfpFab8RnwSKkKVixKmUoNuLXhM97HjybX9YrM",
  "key31": "5JZTUgxyQvnQKPUTu5FyN1kRjNMwU559BVqrGN7oSRPfwLoyejnre2WdQdJ1ECdKhGZdv6tf6jJZbXGjbxxDamd",
  "key32": "5H3hqLngXBVmiHch2g5AjD9ktemQL9kLfNZAKPpBuUSV5GNDa4eew9pdRvFEBLQNG5k7czatvGqaiVt9AaiiJVCz",
  "key33": "1rqzuJeVf34BAqojUGQAcTJZYadkLhGytzCjR4gwj3QBfBM8tCdKSkWCN4bsgr3hDYJpWhLr6kF7rf6aFKpjzgr",
  "key34": "3pvSNqrnSyhvEt7hXUdKi7B6jA3qvs6norx819KvLSYZr9rkmMqEc3i5iGy4RAgo2aB8PV2cEHGj9dzqAwv1VzEY",
  "key35": "4foEYcQpgZqhpMYsRQtSuPrZv5xPU4FgVa6aNPxNB3erbFeebcUoxWC8s2gJXTn7ABCUCPDoSdQNPYvEhF6BWcDS",
  "key36": "296oaSGyjGKH34XzUr6XXVKGFrdNdQt9x6RfTuGtkn3htpMVfw8UgtAzmBPYVa93G6RsPXAQFK9nC9tLDZkbeVjK",
  "key37": "4LEGDWyCAPriVFurdvUZYQ7ovhDVsbDtyyNhL2kM5aF7xQWSB4KsKxz4nykaHywKSrFWQ9cnHX3ze4TD9DsqKjiJ",
  "key38": "4UQooqHjpYFhXqs1xD7Gz657CJXH3vwCgeyvRKqj84zEb3GvTMar9TCnrfjcj9BUoVgpFy7A7eL3GM4MZDPRmCji",
  "key39": "3AEZPGJojWDoQ7D9mwVXn96BV3rMD79Myou6Z7LG6TJLLpZK4MZZS7KqJ9WGQwsjNcsqWppYucx1NpouHvmryy7f",
  "key40": "4BoooMPvBij79atDrvxFCV7rM9BL61J6nV91hpGMuctw2GJTACapJjzGh6sPTPfhTDffskAhM34pALBYZwuRJFz7",
  "key41": "2xLQd3oqmThkcSdso884Mo7VZpKAL7HdMeQ9tY7g45paNmWayjVtHHqQ4P411WiabQudkDWHAE3iTjTRETcTaPuQ",
  "key42": "3zxBLCS1cgQzsSeNou7ybbLRHnDREWCe1nHGxmzvRkaDP4nYE2QnTgY3XdLwnaHxTU6JTWHmNLcpzCXeEnoWjybR",
  "key43": "WZ3i87ZGrNwxf1jrsr8qAHBX3cET4ykaRvdmw8uBwdt1cjkcbV2zPjhGWa2PNQB2pThrzJBQVKarP5ZZ7HeEQ2W",
  "key44": "216wuKb7L5SgoH4dPMjjSpKFRMeCk1SSRarfPUPo2qaWgudJXHVZqMfzejVsDnHQXFCqpwx9zm6atUPQR2rwJbPK",
  "key45": "224wm7L7D5i8HYLHwfsNduLZnnEeT1EMBhwi7LrKWjUDGX33tz5bbmkoCQooepEpT1G6aTGS8VNLgLpjS7RSToMj",
  "key46": "5gFQbevqPRGgyns9vdLc1e31x2tEq7YhZ7diPzwH6FHTnf5QwppnncFQ6ELQsJ96Zzn8X23vwQkG2yxSDHzxGDSD",
  "key47": "2n7vkFCAzwnj8BtJs1dqa6SP1XDjpvp4Ky5bRAS5xsn1NZeMdGH66jkTZuyaswKSe2KAfhnHgBw7ezR9cHKNa4Nt",
  "key48": "3PwJr4roybBXnLbe4DTYUdZ9F9JPnSNymApNeR9nRnK7d9S38zt97QMvJ42xAFPqKmzPn5oQmFjRdmerS1R1m2Cg"
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
