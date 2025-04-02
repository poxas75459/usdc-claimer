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
    "5R5CibZYfxDVn195je9irBaNaErDg6dwi81oBnBLLUfbF69DskqygA1EGsPvTHA7BKzQ6AKq1xG817GJ4pFhKgP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZQ6TVbZt22boE7hF8QEuQXSD3q5TRjv4ivBNZMd9GpzZExfaDpoyVpeWDXveT7YBz7VuNfNBuY6q8v98VrYLj7",
  "key1": "4eqAxwsk3GJvsrSqZo4JoYZwzBsmASDvVQt7RQqpTraTpSo8h6CmV86hrfiAwiJzyerPzj3qZuC6umXT9mdFPCmd",
  "key2": "2rAEydUADSfefcH467qZHc3sfTXtgUpejPPY3fbRzw3kCXCjB1wxucRXUdvL4GLFFwE2zVHoSf43AiyQY5XhskWH",
  "key3": "2mABrwNhwNdSLByisNF5Rq8hqKKtTLSjUuFt3weJM8tukQcsEwTnjRk8eVZY9T7FDL5unrfEoUXjuymYznUa3E5i",
  "key4": "5q1oq2Aaix3eiQEEJTfjUxmVCuZvWSqhJ2RnmB6WrobRWnrKs4e24XUpimfoCn9hfkhLUR9ayRncFUT4iqUZxicR",
  "key5": "2Zb3nQXUCR5uZbEAC3STGmBaWsk2up2YQY5em3BXf5Ssx1V46zJxYkjsNtjybE8NM9jM3SKkayN5r9NSXTpzcjgS",
  "key6": "CLgBi2HU4ab9fopZjZ5JaeatUxjUwK8SLAmuYgBEPS6Me4ch8RmM6mFjXrsEkCpvJBAwtSU7WdfhNmARbQXzdDN",
  "key7": "4fr7LqD6MLog11gxDpqebvq53UP9kPDQ4apUWgJnHiKNf5sqwamedmJvx7udV8XprZve1XWVZmuVceSnjv4yiSZm",
  "key8": "3SadQ5EDShzmEcbK4a4vuEnFrjAnKS32eX1DUwFjZxR6ovq8jYrg4dqcFm8RcdHxzhNUWNHB5PkmJoKuRacbs1Nz",
  "key9": "5Y9ePRjV1k4ouowXx7pS2vHx17uKXp2CJNkndGaHUhWajDH7KEihbwqTvLxpxCdxPDkRTxk1dowhmAmxhw1tRZjb",
  "key10": "54BXerHW5gAjtA2EHytAshbHoxr7rZeT87KiKcLJ3RM1ch1XE4c3tsz3ymh1TUuUEy5Sp7jbiaa9YNKo6Jg8uwUB",
  "key11": "5H8ucYwPoJEaazmRAF2dkeHcNqXAex7jpsz9sQPFwctKVGNGewPFhNBY12n8y5LPhhVHZXmpJazBrF5AgsBGF3ie",
  "key12": "2phLP9DmcSAaRgZTXQEMzAc6yvenLXJ9aJeGC3uqM3tJfM6aNXegt67pWoqFzMk6K9Cu9Mwn8yUcjqHk7E7XKeHu",
  "key13": "5BQxT7kV8NhN7v4SZ9TCNmRbKGLqqzc4zTPmhpeq2cNoRgYRf3oAVah4PEPym9omjkYyyqhmvwrFjjYN8L822Mca",
  "key14": "5q3ADX5aWp1x5VNiy4FD7cnJSeAhH5xD6Bq7GRzbGPqX5qFTwaAzLfDMQmfLuzNekTnnVvztJu8CovxLJg8i9vuR",
  "key15": "3SHtzwM9fn7rpAUHEvsYwKMamqxTEvBSpfJdGVj8c5iaBMjZDMa2aWQHzsXUgWhAjcAGkuUYVoR1NkysM99NdNtw",
  "key16": "2eNsPUn2EqoSZaVyr6G6Hz4dpmstGdRcqV8AUD9GJT1SdMLGMv8GbejGvX81WmGjDQLHALQvDG3DZSwzN2wEsZUx",
  "key17": "2cYG6FUzKUyPUVeMej5aMR1LbPzGUpenfhjgkWrHx3pAMNM8ZiFXoH4iYzZDaz71ipQscpjayXin93JBoqixbcui",
  "key18": "2uzvUe8ffCT9XtUYeDDtGYFWoGHTPTfCwboeRFwzRSAizib5tPp1L5yQGwk4nrzNdwpEXXFxzrnwXbnpEaxQkGgh",
  "key19": "4tG82dGtJRC6wmUkdaeaDpwU1LC2TPd3C5W5mpKcAvHSbbrvS6dqTVCn4xxdr2LKyR2ARyMkEcQYNAS4SU8koMKa",
  "key20": "2sXnajD3hffT8sfj6ZfvGtU5BTnJgwJk4hZricAwzQ8KuvYQBQXkosRyKxWFZ1zgWEhdN6GnfBcUikCuJ5yk6h49",
  "key21": "5Lxjw7PtC7yDqCo1Gu2NJgP9gWNpEFPMrVSgeo2V81Qa89W9ReWfuw5tQ6bHEWFVuusApaA38NXGwoCVWHBkgYzM",
  "key22": "5TofSZSp2bVhbEZ1DzQKkMDgBwjaS2pdbdTcrVL188Xkp7atuaNbErYUaboH8dKxSkZ3SGC3HpsQZc47pRz3c9Mp",
  "key23": "2kp9tZZGEr87JF2NKXdggQ4QrvaX1A7AgZNS7biEGQGre5h2gBYdyEmCBpMimp9xw6G3y8dSg6pXF59GLBbiYfDq",
  "key24": "4YY7qimoXW9KseFxHGiVZTqtE4A6d9Y5ayWgRsbhqCpcQH1a9UgGWTckrL5z8MhLT7t8hBQSnqHpQpVJJ9Z15uUh",
  "key25": "5P6EsqPWU5xd6aw1KjDYNXM691ZbHejDDTbPeuBdaYS6vBXkWHLqdyYHEnWBoTEiYXekcNY12MXdbu65BUu9XgtN",
  "key26": "3DkJsi9bwbYPVM2gqoKzcyvXusoqUijv4WM6XLz3NoTVmG82MZUAn1NFNVht2fTJDWbXooRevyCLynT1NoNadGK6",
  "key27": "637c99RgJsETwyCRqMHPJmxQanpCgk5LRPBK1NY76EdwMCmbuBKC2G8CpNqecSfKSUeAJhj66C4d1sEmciFJvqpu",
  "key28": "2CtaGnADq5YyA9jTNsypUaGvYRowfYtN6FZWoKiGR9hhXvW3YhaJRTw3LoT1VoKWSWJfsDwP3QxPywG4YcPHaaDJ",
  "key29": "3UnYAjhAhXhHDsgTtPFDivEvooqB2KjTzQ9eu73F5RZgfCuJVcCCDS2w6u14hTeofz5EfkXXndPWmPUjmJd6J3vv",
  "key30": "5vhS5xu1KHPEWii4GnGFgC9Mgd3MJsXEVhrtCCmTdjsrbi3qMryLbBRgsYFxEu1AxvZGthgYv7gaBP9MTrxm7k6z",
  "key31": "svNPYEYfaNwFaHteCxwTkHMwUgSxZ6mQhCZPvgEpNeJ7MrMSZrzuf3tJmNxkdKdWkvqdLX9cBFWNm2edXTFp2mM",
  "key32": "2qdGr8a1XkAfXYTGA7Z5iyYata7dPnAyaJL7GrEWsWAvFDVhfsafmM97T2UMWcQqhzgYoU4m2z8i16S1kGhf3SUq"
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
