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
    "y1hicLsuXsY7smWRtDJEMuvix8C8zXbH4Fe288go9ZfKV6vKK2evZbjbsU5aKtkm2EyZZmupkzZh9fB23pxqTv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d3J4nqiCvVGZd7YvRYQDjmCyuR9dBm4Wf1N8TCiiLjsuThGNh9xwxTnoqqVkp6BZU2p43AGuFptf5HrzQ5AZSff",
  "key1": "3ruY48JShJAgJA1pm6pJmjzTYsWKYTWcCyTsrWUMjKUwkmTf1Cv6f6muG95GQkXoBCK8PhvQhsXDqhmQhhBDxKM8",
  "key2": "Vvwc691c5HYkbXw3y7SPvMQLZgzFLJh1iDYVwhWE7VWcrZ2FnVjQa7QhhumRZ3HNo9R6hq6kcxJwov9uK5vsp9V",
  "key3": "4QiQYTZyR4uJhL21sSnQijNC2tPGpDadA3qhQZs2kY27HJhRWWJoUYL8UjgPeQQwDYQybCTXpQLNmCnMAJsdHikc",
  "key4": "34Hum9QMYG9WuqCaEW7mm83LwAhF2NQyGnDBYEQ3P9GDvXgvYiCYnsNnfv6JcbkEL3NU4QCz8xeNFhqgVEyDkEsA",
  "key5": "4d8M5KTCnWtbX9iEEmpo7QTGPUfjuWCbig8iKDZBG5fU35Dv1eQmRY4vzDnkiH4U9JvZcF5m7sDYfmEFU7d7Kp4H",
  "key6": "2mhMcjAPxC3PFZqoMcSXH146LA3YALRs5XRArdrEfpL4F9nPzYiEbQ4zkBtS637cydgUMVjfLMNeAp2WKFQaC3YJ",
  "key7": "oJtaQ3BJes9DdDi14LaMk9fJpDGeeDnPcQC4YsaMWF93CfL7BXfQqGC71bBvZbEYnZSvvsMpJCgYF39vLQA8GMp",
  "key8": "45YXny5Vk4GBWuPSYGy26b82VnwXvbPQdm4GnH9g9WF6nn6XkfzxT55RSuLUJFQv86aDQX1aayBr9yZjWcSiqeg",
  "key9": "5Cf4PRpuUi5XZTWPmYq2yhafZvkZyd1wiKukVpWGeX2pVgrQUu98BcB4yk5qQfphy2mmavFQELzhJdebbRNCDCqm",
  "key10": "2vU8zzYyzkqmk9VhsfFu1JkfYhGtQPMCodndRSkiWwi1sKR669WJuguUowSr1GzzFxdkDWzk9pb2Cm5ZVwyAjFmG",
  "key11": "bvEj3uyg8ZDtWzRqEcYujzUhvjWoEw8NG4hW1oqDu18MnBV13JjkR9oJainLi3LV5PTMU2ioan3bFy9yjSskwjn",
  "key12": "3KDo1t49P1xBd6Q7d26wGTJJkKkjQRjJ5y1cusqc1pMPJM3XWdf9GP1AekEC8L5aYSoBVEBtMojD8E6EA51kZqHh",
  "key13": "3nFdNtWVVH5nJjP6WgqPG35n9Sfa1wgi8EZdNgrUa7DuYTN1dJo45RAkWYBFsa4XNuVTVcPmWvgw8TUieAePRHmZ",
  "key14": "GQabX2XLtMUHLWxqYZ7w7r4vJbU4aSkQxXXf4oyJMiVBLJJ6cCH3TJTvUQzZkxaLXgBsnywzL97PRmpv4qY8rbq",
  "key15": "2sRxpYZoKsSoipygQCuxXGrfpVXfhVW96nt1qvcNb93YhL7g3wkRFprZXYQEaC3vRkZRbU8zgAWVEXLWZxHTwfRb",
  "key16": "4xLFYgN1Y7ndHVyT7kALtaXnyHFANNWnRXbNoGY25cnvL6LKgfAEYeKwV4rMNkwBQt1WrGhSJ59AEAqrNQM78kzY",
  "key17": "5v4JFsoLjepUyWsmZq9bFivhHpWduF4JDkVgcqwCSZHVidiNovo3aNZ65exqM48YnUk9zfzn2ktBMa5rpCWWszFW",
  "key18": "2PLvZX3CVxsFFX5GtDSHHBUD8saQW75CkVYQzo43TMNF7vegVgbyFZC9SYeZibuN1q3k48zUU2cUUGYcoMMACyRJ",
  "key19": "4MPX6JLc1iKvdUGEaWywWkbA429x8p3UdFMYN7KHLLnvsaFiB4H2xKruJowJag7mNkeJwvCjwJ7a5EtVgaVFivHw",
  "key20": "ojcghrrGrZhcSzNjkkdnc65tBm1KAf1cFGagVipZVNaPD3SvkGr1nWmzVkUxvH4TpqZUFX6EHSFyFLPZsDVbd38",
  "key21": "4LVhgmFrQ9Ed5kw3Nd7ZDT1fof2UtdGxVDCZ8Tv6gh8QcLUAvUo9KpccKrhCyHr7SKFxfyhpBP9DF6dQHfA9zuKd",
  "key22": "3SujZzGtFarQ6Wc3xFjBHpzu3qKPk8jDVTzeZkQ1TzW1xpn4zJjLTJFnZRsFJKMDRTERcmRLnZCCjETWZ4mvH8k1",
  "key23": "AKnHZ3iG1x3Dwijd4HJHPuYC2dxigN1MiWy8NAJ6EMsgBrBPZKsyCEiPkrvqGJ81172F8eJo3EcgfJJsVwNz5wy",
  "key24": "EDEQziqo2wqRoigH9quvuexULKStZYU3FdU5WsBVZwyVtDaYsUZsZaFNQ9xmUY8WNKBad4oq3qyDNRSCBDix8Xr",
  "key25": "5hf9WAwFSmG6ngHymMFABCK6xfRoctsrMKgmSD3aRWurJwLncfN9tHTa6GckdBDGj4eQUwGE2kjx8fQUqn1jAqU5",
  "key26": "4v31cNJQmLXNwyBGDdcqtE9xSPEsS4vrWGXSLRVwjJzL6Bu7uZTPPdaP6f8HVWW82EdCRnBHCgfEukT53BB2VK9C",
  "key27": "4uMDtNYmD62kKHYWVruy1JkYmzP6JzXxvP7SpD9hoCoWiHEy8B271eybMkUqChvwcy7Cg5QFb6EVGLQpFYJvNvWU",
  "key28": "5P4bGpFaKNLCGF25ASftBvDAtWx1QNbpRpWv2fQAZj6yB7RKWkHzxcAY4Jniqr9LGrWYWXNTC2WPHo9sQhpHG1a4",
  "key29": "2uQYMKwguFquNfwWMPfVD2hdWy6a3ZxB8P2ymuAFZbdZoexXBGXsGJw1r3JdMXww7Y3tsTpLvs7fYs6LriTRVhp",
  "key30": "5rZpYBTjH87KwzvJDZ2WEhHpqX9sdB1FScnUHjtUzjhESk1zdnqHuVTiEmmq4LZSfiTyJDTHjJX4bTwUAwmGcvze",
  "key31": "3QstJjY4Srd236fiRKmcFq9BAaWCr2WV44Zn2Z2JCn2mSxUv6pb35JWBDi4xVq8bVTuVnQHjw1KmeeCCmiGuGpQS",
  "key32": "49a4CiYpuSRTsM73tFowU1J59SqFmW6ikHPB1e9CU94QggkmCezwix2gaZeSgUznc2HxjntjwDam9ayh1iutmMTQ",
  "key33": "3hvowEfQT1EaVgQpYSc4uUYci2JUpbfaPFznbDzYJKSku6BteCAuTAh3e83LJsSuN1V1udUWcLJzZWWvLp2hkb9g",
  "key34": "2TWxuUktgLqNo5yH2ayVJGmBVy4DevemXHBDZRGKB7PdCZw1RDVUHtGkLRiSkXZwBdyZfwQuB5pL18GmdkCFjrJq",
  "key35": "3HNMEWkFtTJ1shDiRoVFtXHL8aoiaudK7m1DM6Py1sPuSPFrHEBXRvuMJimjchiFadgtEFVb3de6x9VFVu7XUZJu",
  "key36": "5szjDVkh51GroESmyEcLk7cvZ1dsftmxFWSDCe6B7YktbeLMxW3rd7nSxKco22WcQKmYYxZzpQYRrPuTP7dMHZyx",
  "key37": "5xPMMc6dHSeGd7rutDgBXhVGLunTuAGzbLbKA1ta7XiphWHC35LHKEbDgmds86ttWgtcz1pMXr8n2BT6qiGtXoQX",
  "key38": "TTBHBBFW5zYidymN4yKE2dgDRvxTebhzrfEmPJ8rf9Gst1AjsuRbGJHB1vgphfBziNuyaHQAmCS6cmM3r32m47S",
  "key39": "22Tis2hM59kZPfQHDvRkfRZdK4HAFFR9VgZa9ukmcEzQz9oTjuPMmkAJ7XAMyXEE2kB7tYYsrxjxiaJMXbNvweqL",
  "key40": "43ubwfNaav3ojp8iEV4SDThFLNnXDFJJN8YKDspQU3zruYktpcieiqXV3qhjFWd6iiNX3WVhb1sHBNfYFNx7PyMz",
  "key41": "496gkFb8R16xfmC7TBfJgHbnqW36CCz399vZm1KHdVmUJaNELaSrsr9fMk15P8GuNSDpVjYnz6hgEVqTBGYLCNoW",
  "key42": "2ktmHjNZx7CU4Nu7RHHUY3EFtr7wDXWFhWYm4gHKwqk3A4CUQT4L47Shndgmwcn1bPcVLYQ7RSR8djUtAx3pk8yj",
  "key43": "nY27S74QDoEYbzLTWpC4vsodk3CzSBJtkWrm5SW22uQ7nY7Qqxdhum5MzL1EucGj8TTHhk5tkmZJzoPvHv8jreb",
  "key44": "qCPdPKAiVXevdnaam1ydw1w9L8VVcpYqC5jvskwpqXwapUBZtEqm5i4F42iVjzKby7awzFttfZ2ydfeu78GMV9a",
  "key45": "5gwGTjQk1EPky4nhqfZeDEUxjqFXoSbFs4E96ukgCFq84UMAkxk92C3Zmi8yyjLvxzNJpmWiCahVW3QSoRnvct6c",
  "key46": "4nDVLXByisq4A4hSrTQiy83PGBp5QzE1YMSz2Kc4Qnq9G1ypTtpEFMRVX1FtyxJ8jCEYbefA4yVk1pczGia1tURC",
  "key47": "2JdEEhx36qM6syPdNQKax74BNDLcQndHkZk9MGVRTRMAvZSjyh7L3DFZpybh1UdE5yhkPxJYrSMyg4fHBTGHzfRr",
  "key48": "4t68Lv1ikskrjE1ZhTgjBRv2ESY8skwtPgKdXwPuFADeo4BxXLbVW8m1PP4JW5xdaxdhWhGgxVX3ATzSaKyXtivx",
  "key49": "oCT8ZzmYrxupz5LFHdTmGymjBJDNsyuY4TvZhYvSXdTHKAAZzzNWSNU1wJkBF3jwFMMdxx2JRJcLo2MqpkA9uvm"
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
