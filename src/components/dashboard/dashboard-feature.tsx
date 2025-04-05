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
    "4NZLQJ9WEBRDTCJiXb2F2Qpi1yZHaER3SKGxMsgs9zaNzVV9PN4gSmKbX7g4pYy2uvuFoVGZ86sbTyjKfXd9ZSUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64uTajdmEYnv68euqTUBbyA3ALK6Cs5iMDzWSceFWYQnXwCit4MFmVyC7j3k3Xs7KfT7AGrR8HNQbYU16SuGs4mb",
  "key1": "5c9zi3MrhaGo28L8pT9vTqyEM9BT2jjd2h3URYMPeYsTSg2PEUKSUxMEFQARky1uPhyFA33fCxJ8iC4P865829t",
  "key2": "2s5kWWRvPtagJsfLxWW4Xx5J7z9vnvTMK6sz9FAsHhkDfwhCotYwXRo4yL1414x1PrHrwiTc1rrR9yY4cvxUTcZg",
  "key3": "9pnKgCvRuco8XmF2zhjoyJZ3uphQVWYpFZDTDt7KjUH9xc6jyw6GpBiAydGq8vU8MfRcUWjzFBjHFe9CEqGi8bd",
  "key4": "4KeafagYdku26L4LiA5QPnv8GcrXMti5c6kaWVzZyjUUSjQnbRrKYKKbNrnVp4XWcvjdu4Bo2XRjvrKQkPmcsxAY",
  "key5": "KrrSebjxqcJ2f8NXvBVMy83rXKjcysSwu8zMqRV7PCorzXgUt4YzGD1vBJuehLPaQP1YvjXnjqZfNfAPQrUejcP",
  "key6": "5bugBXj4D1vFrQL2m9QqDLVvNnC2d3CGy1Xk5GttXK69fyHLSP76cWK7tm86oKtNDN4BSR4LFYLqc3mFb4C893GM",
  "key7": "3616dDBRVgWCktufwXSQdj7w1DEYSqCQQSaidbEkNRznLWua5RvWe4WJzxVQ8SL5Do8J7zEahwD6hB9GizLkpnbb",
  "key8": "31q2T9BfXqjDjT8uN4XW6NrPABC7yAp79A9F3kR5JkKqkuVKqK5K51hN7P4BFHbVZYUMxcPJnZYPdonbk8SWzz4k",
  "key9": "2BbCQzaoaJVBqmhiW2N9idJtSe5cBj1jwLBcvQpanNBSiG9cR4TJdfmaWCc5PKPMtcYW1UhhEeQQWJJ5XRjYrCog",
  "key10": "56LALM9YbKub6TwPASkrKZzfuLg3xwU5nSAWqYMMwskYSB2dhKASbXfULQ49e2V1zFcwb7WXcXAyBH5Wkyyq2ucq",
  "key11": "3dqEUB1rrqhmh4RhChg9sty5QNBWF5BAE2Z1YYtWZL8vKPEWg7uQwGtu2uBbHxK6Sd9HWLHU5UvwxfyCdm147uTk",
  "key12": "5u32rvRvC2yEN4Rf5k2S3Ww3Je1uGRJkucdvTFYhkwLgXEPvSiZ1eVFpJL3JgEb7brhu1rfcwEb4nZNA28mqBnE",
  "key13": "3bmsgvytf9vxWTtoPuj9vaAdCBfZhNwrZULZDRASkF8ts7SdaZTdXbhL9g9uFBMHSfb3FupXMk9xJiPECbj58YZH",
  "key14": "378zhWKDmFRQzR2cPfT47j8TamzcMRN7y24r8uZDCYVC5QxeReLzHyNeoRSGoutfrzxbDpBReAHXKLBd5PpxW4tQ",
  "key15": "4b24RVExN5m9fjsLfXpxfJvF7okp31jnoybfoApVDfRe1Jgj8F6rxSt2fqQ2oJLeLVxnTAFowXgWbCqaBaYVZ8u6",
  "key16": "4qymg7efSXTBcdA5JJWPkdjRN6yb5WoBsgtHPiM3b8YeXi2qejKopj8YUNQVh8E8DJszKfeDuLkf64qefV2MweXC",
  "key17": "2D5WpkZCKfqLUUxiFzAm3rouqHMSdEegvgvwqwMD3UAchn1wgjhX2utMqLXtvsWPeWEDbWav7SjVYrDrYzyEwrTd",
  "key18": "5SvpeigvvrC62LaSYEkcGksu74zs4gL9gcdd9fPkWSKA7huMUa7R5fmWXun3NP7MN8yn9doHPxPeNUbrUue8XLrQ",
  "key19": "4WHBnX1pG6gEz1E7b4YwHbAbZQnjg3sVXmXZEW5qQrx4D93Yoc4k1qmeQZgYmu2UvHek7ZWWU9p6cNW7d9ae7WGv",
  "key20": "39b5BbrxPhuEZ7wvELgBqXL2PX9f4UxGdMzr8NRArtjNXjFuYp9KhREM2mn87a7Ln9Tj57zZ3rjb7pLNS6WjALxV",
  "key21": "2u8nhF136DokQFXQkb7yu6BWTMwEFm2kwBEbrw39Xq9mAxmzz3PpSJVU3wgSpgQsE51uJ6Ts5dStV931AA143j6M",
  "key22": "4TfEE7iGooFYp4GJwUcxLz7PbBRjdpxUYVJ9rM2uKgkN2n9Ds7FuJMMdWZTFj43vmB3sAW2p472Uu4pLazTDUmRT",
  "key23": "3Kq35ST9ZAdvih2ggU5xt5VBmkoHcffPKGxEfjvFrTvJ6YygJ2hSCvJGdaQxJPKn46ScmzC9miobm82BUPYXAExp",
  "key24": "2hGWa3ZX5XPH3yorSRhHPfZSv2VaY51pgDiTyVRrH8NP3dCeKZwbprE5rofUmgPCUPcktaSL1eg9fQjjqWg5Fmm"
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
