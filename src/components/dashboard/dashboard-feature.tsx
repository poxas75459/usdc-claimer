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
    "3BRuP8YA8q3gM3qnWQHTmVu3xwHn7WSPMHNMBXYjPEVQdfJGKKMcEGGX3uUc22PNqN4bDMszcLNemfL3rTSRptc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386jZBizhv77bfjNMm8LtFM6yyxBedL7akrmPt299tyrRQBVzrZNZrCL5i4wD6NcZjHdCQ2YrgX7BgTgbxh1deXe",
  "key1": "3S47Yo5ioz63BsvbotkhvhAWmMFH9A2awwoChyUeMC36TNzdTqsfQXmEWqNhpudPir1Mdkjz9F14TgsKFhmaMQqS",
  "key2": "5uR4RCJwiYiDTGrbiwxrA9wi4ZCkSWqyGxGJsnbshn6e8xFRscP6wN7eUhui1Ri5kLhz6RjJkseBGPDL15K4Ubu",
  "key3": "3uamVDhwaf6t7yfMxL25XxE4EaSCbhhynUteWzesKsSsZNNUjJm93wudDVDST799AE8PiDSMDBptLmhkZi7ZAety",
  "key4": "4LYAmsfz6RoWfvGM49pmAiZSdSVTRLbpkxEK8ZcFi6NKFP9RuwpHchHXBpaMJd4hh2hXcpcbX1nWjfGoAEgnY4dm",
  "key5": "2NEXHQginM7kzipXf615WbofU1A598JJfARbYAPx7tffjxVuBw3Akexhq4W117v61mnA6cEpih9zcahkYK7aDKnQ",
  "key6": "4rFaRduQLsnUMkzzhfG8qjodRccmXW4uPqA8A57d8AYQv5uCgE3Q72A9zdf7KYhdsREaw7Uhz2ENqU3wyzNFzZbw",
  "key7": "2zNJcjBsvHdmhN3E3tW6wEmLvz9xjoCzNDHsYtoykjhr5ctX1HiNdAezQx3XktAvMyr94XP4shmb8gxQJd5tf33L",
  "key8": "4rAG7gztugfzixrf2BLTWovBsUo1jCNR4si8soDQ11Z9tMC7tSfrqDkiwkf2f67hpGViCnBJuwyBtZxKibJ1tX6h",
  "key9": "61KTb4jR7o1xztYaboezZX9GX5KMFvJ8139MjqfQcLYY9tYjhWyGJGtFHES63MonN27R9wDidY16WhMHK4oppyMb",
  "key10": "3YLB9KnJ2732zhXZV6RBMfWRCMKS4Bvsx6o8tn7AYCtpjVvU9eTfASJrw3QPPFCwKVrq7Vxt3u7f5RJ37gctbUh1",
  "key11": "5gRPoyve6gwsiQ5Zk92QUBjuNep9d96nP3THDodiFhjxHPxyhMr7cZCvHXZEpZZsgxoAznUg3CwsGQU3nvYdAfD8",
  "key12": "4vxEYwT1YJhSQzeo7Z7d2YTmJsk8fcJaxKhDJ8TrkMahSM2EZkL24TfGQtR1YNb2nFLCbD99cE4x45wcunUzt8Gy",
  "key13": "4qkM4QQRZL2dAeJtF4BZPtfyfFYiA5XYkfJS84K4BMjdsnnGYPiKKzWcdaYAJKWQ41Aq9nwXi3uXmB6LNQ74dKRV",
  "key14": "3RojUR65qcXL1VFDdXRc9NCAiMUe6EbHvqq7CBhVK5J95NxcmWVzAMtJkus1CtvMH62Zv5rCX8W5HpumEWQuxWqn",
  "key15": "5icAf1xGbCfKFpBsXd6i4TFd6D95VuqKUY3r8LMcQYcJRJmwkLkYFr1fdP3D3M7PfSmZsM1mX7kjkBwhPsnBNaQv",
  "key16": "2SpX6moQmTekxHnLAkvMornhNCB5EuXEcrYhUz2VDYUEdrRHr1N3WZSpV1RC9HqPJ7u63Dw2kJSXVgzf5z3b3G68",
  "key17": "3CeHuJs1DT1iHrqkRR6m5FVFwkTeb5QtJDfUTGc1KJ3ZtEdkdwQoH8BTB7a3woVdWAcTLoGo8BqZnoBJYQRMvkYm",
  "key18": "2NRMLTYT8isMRnBW5CAke1KHGCdRU7qvmVpws3JgwLksFhSRyf34AtJa33N1MMPUmADEd16n3u66Pq5LGUvjEhdF",
  "key19": "3M3ogGuok1KcmKNYZCoE1cZXTyRvFqiA2Mq9FjUX5G93HYFqNXzrzpQRqG6b9XTGyL5sFrqme7BtTNVmAhBvyWV6",
  "key20": "3ckUiAxKLBeEfyo1pxmA3J4gX6uUcz3eJ8jFoTBmMosT4auE41c7t8auM9CdUiexyWUYt7YFf3ZRfwKxet98xHrS",
  "key21": "3gy8txghRLTndwqZxggsSeNc67YrLJqY3piSHeTbucutf62B6TMPhaXNSda2yNhTUroXD4hPY3cV6XkrSaFQvxJe",
  "key22": "3bxvCVrE4h2dtD8Gf5bMCdzdVyTkPLwgeqRbzbEf21ZucbXwmckx8miFo1Za7u7oxKvwnHjD6ZYeEodAbmhFZfq2",
  "key23": "4VacVGvvNgZwSxJxbg4jHhwRR9z14WmcZqGZvNvZoS6UocXYtMwcZiVNDEUmVXh5W88DKNo2D9HP8SCAGgvXdrbu",
  "key24": "jw71ssFeCZLh8Xiqekb1W7xSsrFzeGXpT9eDwUamBDDEeqdC3tBZC9Yc5jEtPmNWKTvfSYDfN5Ve83y4CrciQ9b",
  "key25": "aQEFtQmxWdNZbfWK3ADQ3beNi64wY26rQWHZohDHjB6C6dWmspfrdeFy9ARtzHhrRw7CKT71c2u7NCCEcwsQtys",
  "key26": "2ZEX1KjmAWtU4EajdEEmVs868henVyKFVQqfqvCoKx3DghMAjZzQsgpcXrSVYb6EF8ZwzJw6CokeivYFUdJs99FT",
  "key27": "12tqZY2uHDQiFgCcuzsPzwz7ri74ZPCy1w8HFGr4E6X9YWd7AF2Li225vCTjmMgdNwVQtSNsTW9AV7xiKATWAKA",
  "key28": "4MzzpFGWo8kbodrmJqYU4axP4NusxmFngTpLJXNXZdA4n1W4gnHGvwQwkdE4PbySizD8owsxRr3oZ16fv68M6F7D",
  "key29": "5YPNpjY4bhWtsiFVNtUBan2jXp5efwqCefGBA9Uv1z927zNubu4yvC1JADZ2fwvvAA1oHXRQRBZD9gBzDxvAiEhK",
  "key30": "5sc3d6WcqLKS3pkg5e5pNavs7VdpDZzaM7TbEhhkKYqKSiruHCjiWwQP1vebFH3HkSHhBSkPFJBzpaMF7UVz6Knt",
  "key31": "2MCPaeMjmQaEmPqxNYRtjDqFn8LbbG9Jwj5jqSpSB3aeEyhpni8WXBKkrdQPzoV6wpxAYzPdJ8qPbkbKFzMSCHYg",
  "key32": "4vvZbYMNNkJMbQc9NuBS6CQPF3sdPyy3trBX9GTtQFXBWghN5w3NefcNy1kDLaF9Koyj53E2S4BPK4j1gzW2vAyE",
  "key33": "2uNoEw84QpmR7yVUtxC25btpLBymop2U1zg9N9HMd35NY81NtpVgjncyG2mNQYxASUJ6dHN77PLBfuzex1ZVSFb9",
  "key34": "2y1kAGhDZVSb3UJbBcc7UdRnp3swDk94iLZ9zzd5HFQaAGfBobf6iny3YFe5nZzN3cGid77pQt5LJWFqnY7finqv",
  "key35": "3vfZbFsH4YSh72RDgAsYHLJQyNV74DGtKP579HYNvdhCqk2as8WjWsyY1CJLzVLXo5y9Ktg5E7s1skCf7hHUwoZM",
  "key36": "BNuC1WY4rHrmnCaKLsamkyM3zYM8HErz2nhJRRvnUYHu2kqGkPbqpTneNwZmDA5w7iWp4g8ShhBubhPU6DszKW1",
  "key37": "cZ6guwBwTJBhAu6uKUDmNxZUkXgh7uCwdUJTcbrNQrYf7cUSZQxyG9aR9KsysW1BVXR4QnemLMb8LvuGMEH42Kp",
  "key38": "343NuRrEbNRLVWUU5mtKPsoMZE6Feubf4Ak7zrDFPkULV1GHSG3r35HJCsksmSa4P18YgVHUajgCXnAnG6r6so4u",
  "key39": "59cuAvc7iky4GKZtZSU3Nn6g6qEJ5tkSS9VVbpKUU3FG2yjYQXf3Rhp7kAowYTu9Etk6LgwQm4UJnr8iyceYJ9pE",
  "key40": "kyT1VVMzeWGPZ9UGBBrqNECAykev13D5UnCGJdakYbzMRiSqHXcLQbZzztjhUccsVzLfNvKqjAt7KK37NAVxMYY",
  "key41": "LJPpo69Y1Uw1YjFzX66WmuqAicVQvvUZFeWKpBT3RNJnzF3k7t3Y6oheg2catRARTEf6P9g4WTZErv7YUtMhZgh",
  "key42": "RJyXCWCrndKNnJ9kBKbGRh9rTT5jUNF929vvYywSoeVTA1ZBMta87hq5xQmJk5g1fdLW21WTamrDyXxUwoUbNnu",
  "key43": "411AQmipBrqDKJYqsfLHprhysSMgMJSsxBpqpgfTEpTL48hin46gC3HVh3zaaTV6YT5eJLHpFyup9dKbVWB6ppvv",
  "key44": "5NjFvHio9y2vUe6whQiNNmsakvdrxtoujtgwHFzzisJ1hVUCyyDNuEdj1Pyj3JZUu1Yqx8qHXSfdYwrwpE79DNtj",
  "key45": "5btb3kWRHK755Uzg1XhUrWFAHQxop7KcmkYKGFLguvMEeDDAZAYiKZPQVfsQDRoQkMaK3GRgYfwcqAe9tJWamxpa",
  "key46": "34LMY6z3D4Uowe1hJvSGV16kDef3U5xJbYtttV9fGBsKHNQK6QS3q7rV3ARtzU1QdK6zHXp3KZHhqbk82afXrjo5",
  "key47": "5ofYM9URCHHJKUxWA25jPXP1G12vUhzGmnMpBTJyRnAY1UNJfMMRwFASh9afwhNW5fx48LtyT7iv4zNw8dPNQyTW"
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
