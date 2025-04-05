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
    "5PimtRx7a2EU2KhGVhwFHszs8HUgUhqkefgKqRk5kTgXakTms9jh7TFyEzbFpBBnpkAWCVdhtFiaQa3osHs2jrg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1sBSct8AZfqEjtdn7z2FjQ3nFkTrQnPkhuQPBM1K62c2ddW1EUPvjLhyPH8eAnn2LJcwT9npauwJV76o6ZkQj7",
  "key1": "2kzFoCezhz3yc6LhZ5P3b9qJWsvXWrFLGLLHauHRW2pHNr8QBE8WWmSwnLQvmXXFy8GpcwgeX1LGq4uLryHFX4oi",
  "key2": "gdsGCRELuGB5oc7UgoiMdB1NbKWh5yq5JzMqM3zEva7kxz529ucasraBwHXgzYhZAFxeiVZg66GfZSZkPSaPwvp",
  "key3": "4MsBTW3FqRDs5QFkaCKkc9jNTfksra95f7UxFKSmgBhADSz3xVjZVKkeE3bVmvMWDw1JgEEXPBYuXt8p8Vjdc95Q",
  "key4": "3s8BoSW8YDLBaPEUs6u6oNMA11D5m4GuM4wGpaQ6zpAb6McE9GfenzpcvPGHsokm1GtdAjbyhF4PoJtuti3EwWNm",
  "key5": "3EQnJAmhD39H2NiWrXevkKbWRciHSyF8irq582nE467tMc1QjcutaF99Wd34t2UhvdzYuRgLt6Qf46GgDoEHkSAQ",
  "key6": "5KPPCPMtDMbfozRLgUGZJ72xo8rqRE9buAAjeShFhunwsau3jQpsM8NrW8jTcbtaZXGUaw4nDeAoJQ1iKmFAr7pu",
  "key7": "g81667DBhJVUJo4trbKcnAkdH2Y6YhofR6RUNa9b4khG9wU9i5h1FKbjCA4c5CQwD71HfqTWPjYRau2wrwBiFDw",
  "key8": "jB75PwVPqgJaafPTsbTCjGLeNagk66nDyXB3syJrvJYGfEvSvSiEBxBDdwtpd6s1BJ6ibsBmE5EvuGanhCS6hZi",
  "key9": "5fkw8KGvbzVF9KpfNf6NVUQefTmBBYWdtZsDEkHrPw2DNkbN9WThbfxrgHHX9BwKQU8sWB3X16Dd8NFxWTH5KmxL",
  "key10": "ZnV6VCv6yheJSe9KW2zCJDEfqqykFzuuSncfwERKwWY7JYvFFg9JwqGMGdLN7T43nEDgSLVhYsnejyCdz2s6MzK",
  "key11": "rFp2qSS3nWJ2d2jJPvfY1FsoiUPs4zthzJzj9PS1GJXCEAAkA7PQnFchdv4mE8eQDdSBtTdUYi3ZbqLZHAZTkDv",
  "key12": "3tKd2jNFSLNdv6GnKHVgDjhCBmwFEGjJb8QJyLMHTCQJLTCKNFcqZq4XuDCoYZ4genQ1g6CjUqHe5XaAobv4be6D",
  "key13": "47PPXTm5jeHa2p4akqV7j428DQdLX8AwXhoKZ6zX34ek787eWAfdm1qUoQP8yFvRmDBvuZNnSYpmuDMNtYmhFn9L",
  "key14": "1yp8XtFdPhvBY9p9MtcwrDMptfcr6AGF8ipAQfgApbht7Bxh5dTadZ24mFTNdEKAk7kzWeTmHJqUxUeHp7u7Bjp",
  "key15": "2ndD5GH1gJiXtvPRiZghWY6J5Hh3gPuoLZSBeyM1d6YyB7bk7jVCQG5QudpMQH9i9mrVh3MzK4KdAd89itGWHLBS",
  "key16": "2siQYTHQH3geXLkXvKDgRJFq7SMzUqaPHm3N71SWsW7cXBpMtHfodWQA5AmZbAZRdhzh5XV1XA26Tu8ZNCEpztf6",
  "key17": "tKULWAAA1ZgccDtAoBJt2FfDRSrym625ZfprxG7wscYLpXb52ejdSqCmn48y6jkAS9gfBmU8SScfES8v2hebx4c",
  "key18": "4STtSb4JxtnhrKvPrsS9bZpQgrDqCbiDWmThoCVu2iGdvwR74bLD9KS651jS33wxCdXPyry3gPdinao9hGMAMHjZ",
  "key19": "2R8kE7WJPEaVDguUmZ5gjvHN9KZL7tRq4825xRRkigix7pxdsEDKnypm7Q4eMdkou7JZQGxeLuTK7qToxyg531Qm",
  "key20": "42cqXDPJDfULf6HJDSLs99eivUYsQ2T8AV4dAciaAXcPd2kkWJMnquJKMWccEvCMTkYaZ472Ke114EpEVuAeUpwT",
  "key21": "3tLNMtUQyLgfdquuGAtE321KWkppLMH3AhBDfKasPG135DW859cPkDhzqVsfNPSDNLfdfEHV9ufqiY6RW3jrNNhV",
  "key22": "3eV5tk4aZPjm7LQx1AbeumvwPyy8XczAkpFGS1zZJJA6y7EVeSAvGkNnm3taUBHYaSgib7cNkMSbhrCf9tfUcspZ",
  "key23": "fCGWKTw742Pd6oXGQTDcYaR2oqR8PbnWeRY4UnrHgv7pSKMPJjqMeCMYKy4uafgFwXPJLQHjD1eaavZiZcjt9AE",
  "key24": "5YRV9FRag6xrszt9E1a7a4hbr5VX75wU7cAER7ZtkVkqyXCmjF65rtNomgEqw7aA1D4eoMNuBgbjMbB9cBZD39R8",
  "key25": "5k9GybPkMhWxUw1CbBsgPpF4169kHxfG36NNPdKBMZexjW38MFp5B6VkBQatvWP9tHzMrB1cu3UqVJh9cLpdfGew",
  "key26": "KwWwSVAfDLC9aaQukMsn9LqC2nNmdEVVBJv7DgbsgmMTovcZvrSstnvQQLb5pZx6rBJVLjHMwJHgRPCJUM6cxY7",
  "key27": "4r1YPVJRYPSvJ3VetUSVuGTo5dqtWGg2acbFNerBLZwex3juxphALJahoMhsC441zraAoFFQfXMk785kRLXKiFc3",
  "key28": "2zq8YQRCjHYjyYeJXknan84PaKsu3XmQCVemVRNqp7HMF1HjFfKZFiB5a7YxYJcFSRZNwSAL7Gy4Aer2LqDhoKpc",
  "key29": "4fUz2yS5gtJE45LsoYajg81KaCZDGbSH2iwmnDghN2AiJ7e2P6MA27cxwkKyc3mW3GYoh5VBagGFW9owU7xNRgo7",
  "key30": "9MnGb9EUeCcPHRcLVLqZfkKVMwS4tfUbPQ2h76oPrh8fVD3pDrEaDrDWTocdCHRrF1HWqy2hT3wQNaMJhJvp9qn",
  "key31": "3eZo7XSxi6gqDjDQ8hFNtjvT76ZndbTcnmeJTfWqkrPm3dvq4VgWz2iw5ZQUkSNHH5W5t9pox8RBB8ZDwRufbwjS",
  "key32": "3tezPufTT5eGisUVsFnT3RYUrojJ32BJyC4wNdSpWBsAwufAfmAtJRhyeEUHePbjFs6M3ERbvX93U41kGNJ6Kjns",
  "key33": "4ksTJFPUEJSsNMmR8nD5HvF1FWGvEjDooSuGmiieoHkcbKqQaw53P9ZKqa24kA3YrPHVYP5nk6qbSiigcqQkkZFi",
  "key34": "4xKvAxUoF43NWhQHBXur7LctjpW18D7DNBMWVnehnzpGKKfvyHpRbsUDNmGkwPybiFtJi9uhmm7z5oLgwsiFnxi5",
  "key35": "4CrfXHUR13woACdg8HHiDrLaGgsN2iKgpocM5TBY1be7Xp1QGPkn9z5queU8VCdTf7ZmLVU6BTcxRFdgpiDwFcLF",
  "key36": "EGHxaLnjuKMecewmsT3jbPKfxhQK38MVMnhtvHFVnxjAmUTnjZNy6Ui1jBSWxxBmjoKBHTRXuK6yU1coFozKrXt",
  "key37": "pEecGnSnjxqWV5UFuwsE6Jst93mT8Z1Y8TbxtinYKrgfUPUcf1e8fhZrtpfXFbbJTgbvYuf8YCiYB4vZfdrbG3e",
  "key38": "5NHs5vXA1ar3iYZHhSjU4HT2edN66UfgjF5HmjdqmbuikS3Kf24yNgYx6beGNbamM5QXjR1Lpx26A8ZDF6SUKX91",
  "key39": "2ng8DcNTUtGgRUdZkDMbiwuzVHUwYJPpdY2vTFESruwW5LKRVcaKZEyV5mSsAJptcJ6woa4Z9N1tUujhCQidY8N1",
  "key40": "2JKqEB34rcUYHW4ssjMUXR5xJuAj8nnPsc522gTDm1dAs5JjV5trCxNyf7svBiKParZ5HZNyFUywtuuUvrRKQnTG"
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
