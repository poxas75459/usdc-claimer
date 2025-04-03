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
    "4hnzDJqgDEPCSBmXDFsMxqKW8LCqf4hTodLDZyBK5Kv7SoGWSq6ZsC1XjgcDJ7Q3MAHxM8gLk1bB534dWejBUTkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44gB1zEpYpnAbyeUfJGkQvJvLtiGaPWrVyGVfqevETjFPAJuQ166sTdWw6QvsUPtY4WysGbYJewziGC3CxTrM3Dy",
  "key1": "aGHJgoyZRxfZjAX7EtVwrTdnuLneJR4dp8JZTUyFRpzq8prf3koAs95wvHUm8k14NCVgJ1PL75bHojNwKscRDZy",
  "key2": "5PRE2mhRn6oXi5diRZXhKiZpVmQP1tGVzUm3oi5AisMSdRs4iPMu9RG88dvDmuXK1TDZBDSdnk5wHof8aq9s4nJF",
  "key3": "dPMGi6Ycgvn45bH9zax9UAjtJyoLGmmqcgVxpoM5fZMg3YmXmNAtE4GXn6xtKo7jnZsL5uUUqJqPEzGbGLmERTe",
  "key4": "4jxjyzQaKWRHhWbAJDYRjdkNiUdXsH9Spt2NFXcYo6cyZgEA4xw87bkqJpvdXtRungH9uDdvFswr2kPVYrj5MHq1",
  "key5": "5CDxhb8inSW6TdBreoWNNMMAgb9xenxzxEYYK25WGJSfWrv4fzxJ4d4rBVZLss1FECEnFHMVtryTQbFvgi9bx1sA",
  "key6": "5iT2veUXFavQfDa56dLfLnwpa5w31GfJ9BaSk18NKKWJHdXeTxL14phiFaAiJhUjkCA8xMYQrsRRrYuttquoZcqM",
  "key7": "aJK76STqBz8qaiQQ4JxJzbERqZTFDRzTM2F4FYbbathyM6Fc3mHvXfzwh69YQCHjvhLN33chcxRnWuR2H6grReo",
  "key8": "73wm4UzgKkf545H1LNUKDdoJhfz55A8AgWDcGM5t5bWvcL3689EEbYZZuBnomUUJJPzkCv3sWxTZwC85G3Pqvpc",
  "key9": "3U9kgugUEiKwH2tBezaG5MdN2Hv3tLv6K6npk9yHRCJ1g1J8kyqUeRGoGyiizQsRi6fAcZymQ7iDrREiRE5qmGdT",
  "key10": "42VjUt5tden7TijBvg9ghJQ66b4rgmpURtnSjo9ezUdjECNeBux7xs3CA51XptDcqmVEp5S6FQaA92dTJvF1cGpT",
  "key11": "4PSEm3yuwcDSGCj3j7wW9NYrfNmpSfkTmDgptiaJ9WTWM71DZoDfYYRtfBnQ5AdxjbkuEQkEgo1STzER1by4tYum",
  "key12": "3HAFSDRmVuKp4J4Tv6Q7LMQs1PLSReZjF8Ls1KKqgzrST3LGKnd9jVQ5HdUX4gqFWrhgxdRfkeWYdh9j44Ze5NjA",
  "key13": "4Vz3Msefm79d6G8EnAvJJyiDcG3Ua6UDFt2BSUZYyPobEP7AyJxFEAhcoxMLGPJgQHUsJNnwekEzfuxySiwhNs6F",
  "key14": "2P9cyxuGdjKi57ELTxETfMCCg3CWdi3GRMWCoGuoY8gKLVKK2GdJ2sMdQDsuF9gzxuKLxm8PmM2qEqqHPAcozkYs",
  "key15": "2Ha2JnY5RtGFNYr19BVJP874AmkAQ1wEJRWwjKnyeDrkp6r8YrCiQZrcYVUPjXhzKnhLAFX1wBa8UFLNyZxe6eRV",
  "key16": "3As6HSagpPXZwFVzeopa8JPsqn3g9UhxTh7EEy8j6wULmPFMWcxKhPNBay57JkFXycH9VupdYVC2yGeUGxmdFeL6",
  "key17": "34A91zu2EqLTCJTeriW8JtYwgDC3uDeabS1PZAKXeLTXvhbkd7L1jReoR9WtRV4RD8WeioXsC1XhmYvPHLroupm5",
  "key18": "4pEBjPcaUkHEjtLZKd2Bv7xuKML5ctXJr5QKA6DxXp4ZTnY7n1gt9v4v6dWhW24zpg4p2ZQ1XbS4a2ZRs2YZtNDP",
  "key19": "3jgxm1hXc54SpJ9AnoifUZn2mFLoWUwnbnDnhzMs16X4ok92FXK2E9au6DNChY8Szy21R4hjrXwJTJnUVym1nwx9",
  "key20": "3PzmVjvQ2x8H6fvBucgxoZyeULAPVjaqJaBb8jCskWD57wVnsQwsjj6UgBMorN6k78xUsCvYnkkAuVBqNnrPrMHB",
  "key21": "HN3UFjEqKqzxxFHhiVzxELGtc25hSGtsW1kLqYTJCnudFAvAGhHaMeUCuwdrZneWLZk5s9QcRfrsfZ6u8FyFnbR",
  "key22": "33vk2ip6sfrNgNxcXEMtQxTuhv44hWBk6P5DQKChPxgiycaeprJWsmBHYq7aL3hy5JFheLX9DHDYbVseoscSAQXR",
  "key23": "3zASswGo2LuB6Mj7cGt8ChhsiGBXdWZNQJMT8NkYCTdc6R7Es6XJ7cAEXUqqm2XgZJ7S8wGCuo9fQHNkHMFiGcco",
  "key24": "3BcwFWBDiodzFYkwmUtZb9tp82XbBYeE6twnWi6fCgvTxdk5K63C4ha4xsKVXzqpSAFGX5oMMRcotne8VhzT6Co6",
  "key25": "4zEXTTkV2CrVLVaQqRNd3DpJdvZHcrQ75uhAcYHFNMFZhfqQimyJmRYVV9cctwwoZ4ZdZWKqMMLBAGgduANqqtuC",
  "key26": "674MX6RNVg4gxnj6jcfMSHZLs8QMaaXSjvQasDrZCavxkGayCFSUHqYT8QtqNkSXpGvXm4rZpLhphVLD4JFmVBd8",
  "key27": "4bQEukSj2bHwqnPiBuHdMbkcjDaMA4vMKwD5BQCw8th5rK4AXPi8m3H9YPt2nwbY3HuV4gHow3eB9qCTkRMx6nAV",
  "key28": "w9Sy118nsqp1SiQAwyRzgk6fEFy8zqUqToZBkPa4No6SxutLSKMx5LNYyV7CNFqoq6MubfMVjyrzEtZPd28urrZ",
  "key29": "56GPPZcnKjN1Rquu5CssVdcNVpgSymT8t53opyWWeaYND59NwSHBCYF7wYR14GVWZxBU4yciUjQACr4BZejCwKQt",
  "key30": "4qF2veUjLWSxLAZc2hvp4zYi9ezoBHik7Tnk6b5PqdU8nNwx2x6aMz4BY3mBhduu4snsEk7LhU9sRXE1ssFFkEq7",
  "key31": "3haQDabFt2oALTLcYqzmQSuCUJKy9WizZSaTqU2xThseJUkYHXg8gNMoDzhytiAmx6jSgHtG6pKx6CnMr5z3GH8z",
  "key32": "3iXWDXWkyTbvQnFksReWXbMDyyMBUXK9yu6zwJFPCScpCbptJEsvJVQYKEdNorpT69PK3cuJ6JEZZnUHEuDJEWTB",
  "key33": "5aKagAo43DuTMTDcBfEZQSi44Z8ZiZCaUcDSTEjVNorx4BtM9yrmv6yVqtRmweYcdBaL515Nvx7h9zbora5a4SX4",
  "key34": "62qgyuWLFN2qh3EGV5uRzoC5zf6gt5QYcpx6QPco2bgsqhvR4y6Phife9NKbb7QgW4YeXbgeLKjF8e8ee1tMpMxp",
  "key35": "2D5ANXBJCmc3z4KfYBSdcpsRYybwbZfYQ3wGt89NtTW6Yy4BrAKqmNkRLDimASeNGDsSfZ3jETxs6ctTPSgXcBjf",
  "key36": "2EnZirBogHbEZ8GaUtReEqPfCuSoY8fWaaLMqf1hXAXgVrJb7K7RzkCVhupMFjthcBnLZcmD4VG3pjBYGxe9YGxu",
  "key37": "5HyuhQXrS5ZqcyQwMEZ2XR42SGtmJyUifRtN2P8NsF7jAc7n7W5aPGgt5BQDcWxbAYmBqAKberRQMkPqGZypTebR"
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
