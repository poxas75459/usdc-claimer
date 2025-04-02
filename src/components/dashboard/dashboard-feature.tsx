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
    "53FBswYKmpMg8bNkkqDMDoMNHfEm3Js8M9FFKGqNEs9q2MDBiNbRaCqpjGC4dQyBp9FUomMzVUtNm7Ad1WAere5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2yr9ZzFnjazWmnSHJmR2XwTEkipnEU74VEfUoASJcSVGTcsWs1zYbdFLxPGWwBnUq1XhvLJVChEsZSGh3by8bo",
  "key1": "zLdDzZyxQSeL6ejJ8kHgWpNgEDiTXcroehppiSShFp1QaQ5XtZ2Mv47r59HNCesq3cjtygajPN9aZVfnJY1KxDv",
  "key2": "Vc11QLmxk7p2KKrA7GA9wNt44o2WKJJfu3fgEkU86B6tPA1HBGqSMr278PdKJuFrLhweGxBqfGotvWBDe2FLL6d",
  "key3": "2AbFfqUxVbQcgjJp8S69xNSU8Wgd7b2eK5pKXgXFtb22L2BfbCzQoygQxcA3BA49kCmbW3sdS78AuhKDdd6p4qJ6",
  "key4": "3QhVUUAHBautWTv4sAYJ2qbnPU8wCsYcknP2Zw8sJwX9446GgA8HvrGugB6BU8wZssPHkvYwV7EWingRP1Dquz43",
  "key5": "123oBxh4LEBsTsRFmSm5YF4YCmz6W1gkaMwaHFzBzhBrWAS4jyRZoHvKwaegVJMgF3A78bUHCyjh6GYNXjjeUfzE",
  "key6": "jFcL9WhUowYLYxksNjMeaiXT2Eex9ZewxQiejaPjpH8JhAQZB2nYuU4GmZcBjaF5sEHWLJ1TDzsv8UENvGm9rTb",
  "key7": "5hcUjAR6mZPcDWRvhKXMbXdMSQqQYYRTvG5aXMUaL1NTg7498wCtUd78jgT4qE7TpTXVYzC1jNV2BbBzNZt16RH3",
  "key8": "3Wn3bRd1CNNnWWJ3fuxiwqHS3ahNHBKKFjVJZNar5bZdL4h8fRCsBJeu37yWmLHGtgb1fX93K8QrhpWMutGKa5XG",
  "key9": "4ywHFZ1TByQMQ1M7pv6DZhyV2ChhyNizAsskMzV5EnqtgyXdCqVz8XX7oDhHyZsuDNoXtzbV9UM9Xh7fSuvMa7Bh",
  "key10": "5RCbsT2uKBxg5qt87JEkm2FrxDfhBQBh84qKq6PBUKFoNvWGzc1yeu6fXP5RWxt8d27VrmMdjPkUguFa9FtFVmYq",
  "key11": "4AGFwNMWEcQiGsKarkay2nyQurojY4a34V7a7JBYdpMZq2J9pV57Pbkheesf2qn2wjLVfBQHhTNM5U5776SRHvWV",
  "key12": "4ajXyTqnNbVUeSWt1tAGPpzikZ2eM6nBw1AYuRft2rHqTpJwEeYudQgv6wVXyrrSoyqpnqh7dMX6heQPsqG3BPeo",
  "key13": "2fGdmKQF4rR5MhNPgLfypyWx3JfpUJ2ibVCVU5bzsm3rAZGMrQzDSjJMevfxHyqpq6BkXgRsNMRS5RYzXNaopNpf",
  "key14": "462fEgHMDCjLGUn67zMGDxr8NsvkdEWirKvcurmzQYctQrfR79UmVkkVJFtWd26twvJN7rK5QG7LGjGDYcs3NAWb",
  "key15": "2PNDnPsnGKsPAADi5mRg7Bpd6bWsumyt1vCo1tk9x8zgvNCQpnZZnJbBLMsShVFqr9WJjMrapcGsVawwhZkfVHnv",
  "key16": "3uGUCk356E1XRuvU6yGKo8uuFFAQfYFfxej9NnfeVBBrJyuqekFbkukiodqjcKNUmSHCgC3gnaoJdJibZLemvz5X",
  "key17": "2Haot1dkJsZycg5nMUsiB6wpzqkk5uFA6nm4kJ6euVvqQPU7Py8AkTD7YeoJzcuYHU3wBakgBMXKmWEqqqVqxuQ7",
  "key18": "3DiCp1xYBseKVcVzbYDjt6PxNt21MB7GSurRwbeoeDJaodWNY393oSsPjTcwKAdxeAvX5cVp4WzPyBdivEbzfeYR",
  "key19": "2bWcCntMsQGGkzKKgc9akKV7a2ncEU9nRRcQLtLr8CdWDcezruCvHfdrLeqvgZUYWmAyqXjLaLoJx8edjfFq1QiZ",
  "key20": "AEnmb2i5LN6H6aMNiGnaa7SHvzU5dUwbSVEpajhRaACeAnbuvtd6m9rUELuMSJbb8hhN5zFYm3toeuHdzqRx8AE",
  "key21": "4XnSKi6tjhgiHzs7LQze1Xzf9mebjUNY7nK1Emyrvtn6EDgUDWUvEeRTsEKXV674wbEKot9E1ebCknPVwCmpg8aV",
  "key22": "72UghNJbvoZEQS5X259NWy6XeDuTtGiqFW3SQawtnvzPktUAeQtg7cfiYMA6YgoZYE162SkHd7P1bPXMfM2WNy9",
  "key23": "iL8hbNjU8NzL7efxPBVkL1rG8Vss8pMCoBUzCVCYqpVF9dg2BhpW3jfJSWjhjigEhAQvbCbwVq98wrRDZDLUULA",
  "key24": "427X7P8uiyyptVGZpZaaQXrmDHhgaZaz1FH94qy6QoJGzwRN8mkkWNkNWLixePiYZEfKUzQ5NnEzrYduwRu2rbPL",
  "key25": "3YUBEF8SvkqRdB9g8fPLrEEybVU9XcAKcQJMY9x6ZsQ5iKbygzcPL6FD8PrN1eM4DA5aULzDbdABNUVNfq41woto",
  "key26": "3cYJ4PKPmAseet8qs93Yh5fK3pK5pB6HTa2RvawMYz5uBg8uup5NU1ggT3RWTzzsLd2MdzyYXtMhqNDffT9pwEfp",
  "key27": "56CpjnAhTSYcKqcmeSLwQHM75ZxnmRBUw8LsJzLNCZeZcjsvLq1uLj3a6rgcReSqZtnjNsqjDL4TGNSU2zcZVmLc",
  "key28": "5MDQK9dr8ZPP5ShAB6mFZNpNC9PbRbbwrf8B2LS3HPd9L1Mk1pkQRCyvVWDRRTLkE2Xvc9BCQuYNvpfbRJ7b4HFE",
  "key29": "5bw24sVdKQcFvgx9RHb1qrYTsJTu7zZ8vKrpGFeshynwJfeZmkZqSxA5ftZ5G2yV1pxY1DnwuUS6Dt4qUMHCcjbH",
  "key30": "HX8DMg412PUpQGaEVUjfwLZRWUXtHdDsQPU1Yb18tGJJa2DxyUcSVMZzZ9DZMwcAhAcocjXhp7rakwFcPN5Lm5H",
  "key31": "aGP8Fu45ZToC7MLkUcdq1g9t4DQv4tqHApjJXVeF3HKeRLvYtnEg1P1qjWcJPEqPeThyFbcQfCxFicnevEu8FEc",
  "key32": "3kCQeyjFhGQVRUM2CPNytpdF5Rzvd9CCTtjHMDpTzYYZpdGw1P3Y8eXRT7SHo79ATrgNDyJA813jBP5RJq8gf8Xw",
  "key33": "3Fb5WGmaBNg4wWk71Tnd6LGPA6JeBNMathHgppgTjpRTW5VGk1Vku3TAvtUAPf9tTfTru8MNG26Y9R4YyAqv5fc1",
  "key34": "2dvMHUw2TQX8e7f5T8VkTpycRJh5N2fbPLCUiqnx5rgbW8cxXHyqopGiMM1viAgQtnmBjH83prvemvZt6hFg88uR",
  "key35": "2qBGtyUWT9SYrPQ3ZeFLGLsathJRSf9XVoRAQHD7VwAXR3evzgS4hgGkG6ucSXdVYrwAfhLqpX4pJcgChepN78LR"
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
