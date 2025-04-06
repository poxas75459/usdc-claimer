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
    "2DsADQkqyhtSFYmCsqymPTGVarhRNKcc2XBf5YvwqfpNeLeDjkbtedbu4wXYsT2267DmWoujhMiUK1rzMgzELdRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QHAEp9H6djS36GyP9iccYWcGQvt7g7GFZWYiHGSmxxGWq4bzavKjm2nRuFXr61ForJmE6ne5zxGaLTJeTtKJ4xo",
  "key1": "66QtUgXAJQAeigB3qcz3Z3d5ydSS6o8kB1Xf1DaCCVCsf1uU3rbnbYAw9Kmd8Hmm94zfnzS2yZ2ZWWYNfqNsuxvL",
  "key2": "8qznCELzNYX7z998YcaKXj7K3CxMMzgYmQZFRQRLHTEfg6wWUxA1wR1ZSLYsDbyWardzTfYECqqitUpESdZB3Dp",
  "key3": "3UNBaUHqNuCAJ7UEeviuUXg7R5mpN7U5wz7LgSToxumowoZyqauEtTbkKnNiuz9MEKZeV8fx5iqHAj25aC8Wch56",
  "key4": "2mdGU8ydRgiezJw4mYiCJKv1jM395StHYinR9RbftPTbKi2nDvRcCRWGCeorgtuHjJAgeHTVBG6ZCdrPprxLQSYJ",
  "key5": "4pY9GY8yNCgMZLM9GgiJgxvpKoeWQS1gzHP9YJt51Qx27eUnbvR39RaDtwMnK6CMbpG3npM9Fg3K4tTWWgd5J6Nc",
  "key6": "4BvKo7FkbhEeqVNumrZCQ8jY9oz7gokkv1uupT4z87HxkrX4fmyNLkYsWb4BWna4w8xyFBxkwZ1KRHKMKffYC2pg",
  "key7": "4jhrMpNgM7hRv8eEXwPsSvAqsYSatqAieM8E6CReQiw3PUgg9QpKCLogZWK5Z6NFh2jRAWQMCmmwHCbshHHwQFjL",
  "key8": "4SkJheKkZ8kLqebXvCpT6C13yo2HMJt4JGrZpaXhymaEncEJQSzZ55vKsMv6hCMXDU8MtGtB4r6p7w4J56ThW7Wa",
  "key9": "5ynmo6c3ZXQoGw1HBfhPoKhd2ndvLVcqZuzRLZLFh9ztupj9qvxtQmszwdhWn8WY91iKZhk1weoVWA5Q5VttonSS",
  "key10": "HDahvDyUuwBuXTUzftxJT9yiGthm8ZBgNdECrs8GaubXGBnzucmitKZaWycaHiDvyFwmVZBv9cZ6mkqibShK5LK",
  "key11": "3HNYVNsLVWXTuEP8AAE4L81ZZh9CbGN1VqXAGhtSXqiWeZaQkweY7Em5rGQdcF4UwZC7ZBP7Z87mNoC1HC4zRVGo",
  "key12": "5AYUBnUqr4RrzEgGuRHiomHymDroutTHbRWYpCZffzVpFhFEbyj3UZjHTj7dpvvKo3tjMvshhFvmnM41z5PWFUqC",
  "key13": "j3rVbKFd64Ng3CBXLx1yLSu8cCShqoPNk25XFbQUYGBP53urGWLgLXmPqvw8gMFBdhWspLh7BDXGdBKtRyRLAnQ",
  "key14": "3ac1StUhubV7rzUsHwow7Prx7jKRy7osuiZHeCVXYQNxYzoJ49kQfDYbsEwcpKmzscYgXjU5K1yYdiDw2BDvppSw",
  "key15": "4YKsCKXznaAyVwWVBc4V3sbUq7cr8qsGCQcsDFV2DNPm7NdZcqPX6oU6UK8c4Ri7zpJizoCmg1JHd6wQJtzrUS7e",
  "key16": "5SV5QuWxWtnEqgmAs9rjaf4ys5McMpU2d5oR7QWp6psXAU8o5h7sasngYpV4MPHP4UppQcBPS3mMfBk4TonWsKti",
  "key17": "2gyMnVJFvDTLacto8mof8NNcLQ4LBux27aKemc9NGerjsNPXnYoBPwkfLMXRfmouTKRYWBqMLjn2JsdzGAkLpx3Q",
  "key18": "3qMs35TwqghrLWPXSJEJ1xsz8MS8pFDqNSkKrh4HApDYTQTMT5hzrXwGP5pcsq9SoUdfRRgsNd6WsPKq4FAMa3DZ",
  "key19": "4Jj5WCzdanXLtQEisGVpr4ZuR15Ms8yBb1ybFASh9BwDehbXmLQRdUp5mk1sUDTk63tJcAEWDSp3yJVzS8ffwioC",
  "key20": "4ghL9TsxrhMq3y7U6x3S1uFwGNZ11wfLusGKWcUsMfhjNWQBNGz3nRq9gHeafzDYNZF3vJE4HA71vs3ZJb4qgdg1",
  "key21": "5i8a6vAbbTyhrrDgZtc7EeH6xwzfWQPeXq7qqBWUhtF86HorHpbLPN84XjjegGoo74pEMmQwdQjWoAABSXrhVsNF",
  "key22": "4Eowk21tHCnvw9n8MB5NLeXYo2wNHd86bBuC1s9n79aeCdTRQFJbXY2t9A8i2GG34oWwXgsXszEXFU6DUxDQvpnL",
  "key23": "3hd5D3M11rNKfWwVkxi1s3GFiivfaQBedgVYi1SCYHPGHXVzjHRBN1XstfV61pfhzneeotPXqavCmfcETozcfs4Y",
  "key24": "31pexjVmyWDnqJR3zoCx9ZKTJ1ZU5t9gSCWjfGeBSJwGistm5BggwhAb2GVwsJk3YgqyaGKjvx5s3HtB43mgR4ER",
  "key25": "YynegFYSxNeXYsG5babNEZ7FDUX39fjVxGkdcVMQ2bZtoFNsTK8eaXtuidtRsRHMU88yYmACFwCwCgB4WyKPhmR",
  "key26": "5xs2Ex3Hi4sPf8GBJhrRb4XqngMj5vxXt77KVhNJ6b5QdTD3dTGk4firVmtksoZVKfhdjKJSvkKqYUKNgUJtUGbw",
  "key27": "CCqiJncsqSjjxQBwM974ekBwGwcgB3hhS2RTS5smDtaGWUJxearm4wadkoSJqqWFHaQP1tKWszzmCWbB8iZRJbc",
  "key28": "3b4YyxZnktjduAgmucxGmon2bTvJJAngZKDffyQTGdJ1gifvvYz2MXzAZkwF1q81jYySnhAowGV7P8gAgcstWZR2"
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
