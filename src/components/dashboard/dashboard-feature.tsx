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
    "38Sr1VpMXBi9HooFDp3dp9czuKTQebcvz1WSSpovFzoLZv1jgH5ddVNtquaAEKnLnJtsCh31hV5HmqSFz1uf4abW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LRcWp2yfzqCqkrN7Uuy1NpRcxm8fJziR7hi6Lkj6eanktb6Ppvx9mtnUZz8oJ43AvGmGns36RjZENwPG3RouCHY",
  "key1": "595nHNZL2xSRrC99zxQDRgqV8zt19ejZmXNz1FWmBeYLZJipFcwqJ4X6ofJ131yBc88UfCQeXLHfMZRQjnjZfSin",
  "key2": "RJCMmvCXKuvFBjpm2Vg7V6yexk1jHjA52bqnmNii9QeoEJcBks87SEtecnff3AgyCQscf6krMyzX9N37dotpAgz",
  "key3": "1tYXokUEVAxRz3mzrUDghWdphs4KUwwjzVN8DCMbgJ4gyZXwpBcKBHh23zDTvoRxMj9qJsxWj1VE78nrBh6JW2K",
  "key4": "2V9RdNRy4x9yjC1F9Z77hVenUUS9bDXfJy2WHm1RdtwtLvP8TpoezyZ9tm87YUNb6EKPfpjbZQoQ7BTPVKytccbV",
  "key5": "4Hy3tKyQaFBnQfytFoVyR7CnSQZBT8M7VKMPExPVu66KhVtAQ2DpjRR7MtnnMWHhLehDgWN1NwFeNRgdHHvivN3h",
  "key6": "5Q7H8q4JbSZoYSfKBQsbxnXLLnMFSt35ZMNsdvfi3TV3Es3q3zRs5UA9gVHxYEi2pvmYfrp5vJ52e6SaTKq98Rdd",
  "key7": "8nGBzgw5ojAv5rCzPD1foRG7JEvA2nkDJmBMT3buxEc5H4n7ALKviHmfPrTfaUixiv9PQB8neCieUR6LgRJBQwR",
  "key8": "2Jubk5dnxmJnxJSwE3tjG3sS3c3kr2bHgzL8K5Js5Gm6SaNAGvwnx5gbve8CmAZkUrBMr92jjKnu8fn66ZVNW6Bc",
  "key9": "61aa51ihLpvWD13N5fher6sq75TALmS3rXr9ueHgixvP5gVeJmkziiaeR81961KLXy2oeZX46LjVbHoPV1h7uWMR",
  "key10": "4vhjsE58tFMmqNrSSNAAAD7XogfpT5TuN2BMdDEX3NUPJ1fDwEDUBWeziw3yQyDekv6TK9jXE93XS3atbh16zYLY",
  "key11": "4f1faxpBwvJgMPAukH46eZBqZbKYevbYXcsEUcCVk75GWimmei8DSTc6DMeydPuAeUYfszGJgNRJxHAYBjdxF3SM",
  "key12": "3SJJyRTt1M5Z6xozX9xquj4Dirv1XMxTaZxcw8dujtMMvYrCBQ6N6bbabQ2vgYCZ9QNiP1YgroAJUggyUVkM3gxp",
  "key13": "4PL554GcCnGsXs45FS47mu9WrQFqWcVj8k4izP8Mx2NQVw14dmEVXnSSGmxd9rayaEAPsRfRwv6EofJWWB6dFP8T",
  "key14": "22vEx63SqYq4i42bFRwJjVYsCPVa4k5XJutMqZJfCJh5UBgeqwVgDN3trYHa591ywMbArSLxjGWh6jHy94ZdQanb",
  "key15": "ExH7aaYccXXoerCsu142qgtR3dkzw8i8Drawx6eJT3zALg3ZRiunq23ag99zvE6fRLB5iyD9LcbcpRk4PEqaC5a",
  "key16": "4jku9LSb1PkXxBAKvtmtPggT47ud1oVQifWcLUwH6VrcZAfp3f54nxWSwa2ZcZWCLRbeRAWhLRa1AjhZSWVSYsKu",
  "key17": "26igcKHax4eEnP9SQBDv5cGUb9TtUegBiVoRuvLidSjFnvbU5DpN7UQsrd79f9domxELE1waiVbnZLgK4HG3KG3V",
  "key18": "4sKqVWcPdDMtNauxhXkfJGFRfVRV7z7Njy8ZA184Ez6avcXwzDs2sZMcBpoFJqD1fvGYaRi1biwqn7BJ8sty6JLH",
  "key19": "3ZhNbX5mfYTBVnLqDiDhV5G64ggSWZRsxQku1syscvm6PeH8DFAeHpqiq26XkzzCnBJVs863R5GgtEzBnqvq31os",
  "key20": "4i581xJDCBrxiVc6f48HK9cFHRpBw8NtXiaNH25tV74ruj3aS8Ny8M7YKM5rLYhSee5CyJhvWkAZtP2fhCqWKpJY",
  "key21": "3stT4woHkjqMytPZj7bH2YbiF2VMkj5UwBiSj9kwCw5u8vsxPZBNU3F25dMDmXH4GrN6nVZWXv5wh6GCR7x7mDKK",
  "key22": "3gAa2iDHyKcPjcc7rhLev6JfaMNREvC3f9KV22vcn4iFKcRVT7FUMQPkcji1AKSUEionoUaaLA6orw3Y9j9H3rtk",
  "key23": "2oun1Ftgjzyv9awwSRko2Unpemx3bndRvYuRJimXZa7DMy1ptMMrifSus3na31o7XCf1of8wYifjsTuS2dKYBnVr",
  "key24": "3CDq5BHMYcQaHhjVs6t3KJtahW2FuDbmV6HADjqxqpfYp9zpoeFw1iCFz6qKYXfhEemMvttZMwuD2fcwNc1cXCSX",
  "key25": "252CDjkKh6PRn4MwQtjd2Z2o1Ef38kgWPR9xNbkrsNTChgtHYoRGeGrnk7UtgxtdbaNUR39R1NADPeZocFWiomA2",
  "key26": "52i9VccC5bKacBkEYs8mLGDfqUxeft6gJme6FHY62sRYvkYpFgNSkhdUXSSFvzohvEuoHToXThRaXpkmJgofPn7S",
  "key27": "65DfeZDN4UHmobQAwbp16oqM1HwdwPxtwUsnVdfMwx4fM5LHZ8jADw6N8gu9fZ4vvk2BaZCbz4KjLUgcGGpiruJL",
  "key28": "5AewPXv6VbMDTS2HWNkEDw7gTAYGoGzvy2HENurCa3xVeWucEkrBt8vzvTGsoqxiwHFN4tftFSioPh12vCiY9jLJ",
  "key29": "4nvGa68rgbiFsbpGUmuV7zCvx5omPJN9S7dhMzNGvUjY7qXQvfsPS4eZn6D7zqkkUyWwG3zN54VJSVLzUucujvdn",
  "key30": "3SohYTiXr1GxfV9L1zgkR79Nb7813a4Z55V6oDBRxzB6ALraMwptJnvUn65dpUT91wn5hi6eRccCwaCqay9bdEhd",
  "key31": "4jxPDShmKdCMLydBL9huPFVKUm1vWWcRAzjx6qKGp1vyvUdaP3jKjiywTk6KmjwoJRNbgMZoyFxX1QTFazajp7MG",
  "key32": "66oaytd9yUdNS8Rb2o3w4qihKdnfD6dxgYuc9NkoJCjuEFLb4XQ8qua1XoEXzYEoQV4h9n6nfJFZgi3QUpuhhJP5",
  "key33": "5GCCyMFsUVQaaZRQqhpXTSwkgF6a5UDQTzU7hCHqSyEV9CKqx5i2jE1Z8uMF3YXqYqQHhcGbgsqXUWbJLTTCBbD8",
  "key34": "2KwMRiCqZsXYWgA9HCwXkaej2qtucE7oRzbABkWPUPvUBprDDypHARh2DERGUgzvtP2vJmnFSNXnsrdiAJBDnr31",
  "key35": "3BWnhH1jyjdPjAyZn8rbCGnsD8jdnmzGKR2BQneTW3u7zXYZyNL6uwmuAYTH1YB7KaV1NnKUD5y5A9aFpEHdJQLD",
  "key36": "3u2LuVoAsao3i4eoXKLSiF9f7LbCB36To6wMjwmDY5zTUaXzWhZha4gbjTcWpLkf7c7vvBB8WnTrdxJT2sJYdG8r",
  "key37": "5aA9iaGgQwN745KUzDCPCUdVQrA2u66cG59TdCM5WW67twmUHYJ9ToHEA5JGoLFPq3gsvoiecxNcg3ng9uq14UCu",
  "key38": "5zmg179gR86mR7zmqJ8U9uL2k7HAmADCQF767dZkSGidn6ULvPqu4dtuUVAMpNAwruFqHkCcNLPYz7Pxtv8T1C4n",
  "key39": "66zYnjrTdTSUoo3Em7Lo7Shi4jiNzfCzo5uFmi6z44j5GUEWKEkqhbG8MNMj558fmJdFLRp1NKQzPV79o6icz6qu",
  "key40": "3fTv5ucwZT6do1fbHJeFZxqqHjATr8SXNW5brBZ4ey6CVL89yv5AW9UmWZtwu5cFJGyNRt8m8kLwGGdVKVzPwcLW"
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
