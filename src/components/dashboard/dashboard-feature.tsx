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
    "5qLWB3SD4j28CwA1pFjTZySeX3266ae2kBRwbHx5VV7zV69LuBoMD3GUjd71DF5gJ1kez2A8GoyaTfuhRXmsP8pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVtdfo16u6tNmFbBSgqLG765BiGywfsKA3wpM66kmbuNtZEJFDbAAgUJQaduSiDkYKQPS2MBaYXS9DD184tFHvH",
  "key1": "2B9P8LF3AvRcbQnK95yo132FM1XabmvtKy3SB7KDSEvqUezgQrXkXc73fKRoFtQvckmf3MCsUCnxKqHQTxAudW1G",
  "key2": "AbQ7yKtDpxkG8QfPDX3J8rcucFuXM7gNBXCwDyC4uAUzz2F3h8aj1tnNM5sU7XQuNhExvQM7vbi9LcXCGqDJPgM",
  "key3": "4mBg8VBHMFyPd4hKDaWHsP4E3FP8kv17LU6gFwkw6euuXSc7S4Pk4UwvNt93qpNWPfuvvmJj7s5MDZc8oDKwQicL",
  "key4": "29gPsQqcq6mF1fTLQ7UyHU52fKX5zowL9yNSAVL35cNp7sx3Vzcm66c3JEUHzEKPP3KzFh9dr7oKFgjMAE87h5zf",
  "key5": "2CwYUdfHjH5PEbHeBjKYSiS35kY5T1hB69g1TKcXK5DVE81vygHLbT7S6QLutdoK9kDS1KDynVWTHuNrXG5jULSb",
  "key6": "kHvLoS1xSAUW5otSX3uNETRBkgWxg7VUeLzXVDWzm8gmuna78Er4g2TeRTaApfTCLJAvDHhptRQ9Rg6cVQZ1bBQ",
  "key7": "3wt93Q1dqnZUMJc9a45Djgb33dz9HUPQ3kHvP5is8VNeJFE4ZJDcCNt9bjahhhFk9X6NcLjDTuUunxxcVev3nJUt",
  "key8": "3Q544jTA4mXJ9mGpPPxm3mWKiSXZW2wpVyjoTmBuK37VS2hKoXypqnGSPVqjBeWZfQXwKXCJWKAARWjcwaPNt4fd",
  "key9": "4pBWLkhKa6ssbTYonmPv9J78aoxmG3w834UWKSV4bP7XFKYrh4WuPB2SH2dH67NWSfyMsTrHmsmeNdkpgBUbBNkB",
  "key10": "5oCtWnhbVFMecHu3bRcE5KytAAqiJTnMG1UwGpTYrP6Z4CCqNiu5aZSJPYL3LKFMP1diVyLoPxg1nEWJYGYw4fu2",
  "key11": "63d8axot61CcJzEpGb4PSiwC5oDk5XNEuNjyFozuHLMF7murwDu3779DAqos7WiNF7UHzpwNWUgfi65h1E6i9y5Q",
  "key12": "5xj7jP5h697giQFcHzf93zCr5b6XsvLXmordyY1To7T8AJLubHqwPEjsspzGi3j2HHveJiuG7Vn5LACc7yh7rBYp",
  "key13": "pLveCXMLRriknhLJFj8GpZSNtCySAAsJWjaN5gcC324r7ULYe1JktEG57SgPd2JqfhqWz1Kp8sgQHGMFat6JuyM",
  "key14": "61MTWbxBsxexZh9YXuvC4ySqFocmNokasaDzBVLhwsbXCZCPCmB2XBeRy9tQHnQPfgC9ZgpqThWC2LSdKTmCfs7x",
  "key15": "2CgaBbaUKBeeBeghkrg8jcbsX48xU51Y5DSv67ZMn4txhjPThktp8PyyGeoMfcJS8h3QJDqUMrfkvRxmXq2QWQ7r",
  "key16": "2yJznv1H9uLXVDCAMqL7HBRm6pDfBijeyf6wKeh8qQ3qbWEXkvvZquMo8RgtAMZFYJJZCF1TSwDmQFV9Ee9gmR7P",
  "key17": "3WDqf7Mn8oeooC26gBRTfPmKoWAE4V4gA7ztT3UDkMsV6qXkSsYRVLXRXmEEGVqMDsoCXzJpiE59pwQdbNjsuvAf",
  "key18": "4HLdN5tja1fwFF9TgAbxLm2J8aDoEcLz4RGUqmcr2NT8KTceywYS8tNo94MWozDQR78j8Mp6jTsLjEvZGee4JgYU",
  "key19": "4wn9RuZek44ZFbnp2m1tjFgp68yiod1Tq2XPhWSUnW8cW6zihJFRa34GnWK8mGRBvQzyVq7SR94RyrtbgqW5P7dK",
  "key20": "48MMnFvQ7YW34GQaf13Nm4RHrQjb3GouugNcW6Q1H1Mt9ZVMF3GySqn9WNLSRj7dpLBnvUW2b3guaKe2QXwNyQCY",
  "key21": "4isMjRsHy2o64GXiuBsmxKjmVLcTyaSU31CJBbAcPuWkBGMFZhiWwEEJTwydKGPUTB1T27F17YyebqHffZEC17Gw",
  "key22": "3miiQWJJ7qvHjpbGs2GQSK9cKiAFtDwwfcsWki1T2L84RntujLQv7RYTqRcmXNsS92Bw7b5XRtV8XSYGgid9jWRA",
  "key23": "3cLzGvuCMwCvJzuVrZtnzMM7xKCEybFWnvsPADM9WUeRqLQCJFQbSeE2ThfYQkw6tq9GFFKgwZUBDeNUmzJmFLfn",
  "key24": "2bvDoZ5Sqa4jzsWgHtK8cHnBaaUXxBvi1V8CiJZDevbeWpFbjkFf86mPf6FPmg1zYeZPH8D4xEKGydfqKTVywTuq",
  "key25": "5zRUev8mhUBhGX6hBuQ69M9ds63CqdweAjPcuYkexvEhvTtot28TUNt4dRrMpDsYw7sAeYTjZHsK5FqDRB9yPvL3",
  "key26": "E7nZTk4pH6EUyhNr1ZWSZRq4megLG97vRCkuVwmaEFpf4Zez1zPLYzSg72z4nFKne5S3XUZb6tw8pnHu4iUViUz",
  "key27": "451Gei3nFQw6Rme1qkjuxEtfj3QRbUa1pS4tEgWgQjrF4nDCf3KBLUwCWtT2WGQfrVwLRntN1XPkATPSAaXZY4J6",
  "key28": "3Mk6V55om9t9fbynHQX4SDFAB2imFcT5ScinqWFHoep3mJUek9YYwZun5dbFFvjRu3xUyXyWoyGDwUDrHhtEXzyn",
  "key29": "5FEiraYVT4wqeLSvs37yAs2HWdfmRHH5STSihbhT1b7wbvqDN7y3ivR3Ufxh2ysGRgiRPHN4oDKiriUJ3fAh1Nq9",
  "key30": "3bt5Q3N9GhbByJupBosfMk25nkBfW4WamD54XNUaDEXkyWgSeF9wzAYU91WX8AgrmdQttstdB7oi2gCJkze9WCed",
  "key31": "2mRb1gzNBwYcabEGSD9U8aWBAb35djSLoxYbzLFnSNamYKkWFVUfPgqpHx4mG5MXxyASfh7gefPrAFA799bUMjYS",
  "key32": "2AHA8X61p5c1EAa9dorVtgnXXWg5jNcomoBAXngaGkbSkkm1rb2USFcQa1rASaGNWMrUAfAoKGw99FPB2gBcrmhu",
  "key33": "62he5gNdFhEEaQiwi5PyhWkzaf6C9LwRRHhufPaQKQoi35isebi6YrAkWNZNiUL58oJYPvUGhdxLPChsuQZ172dQ",
  "key34": "5fVf4jdfN1Ae8FUiBag9BouA84vJNMV8rxsS77VAjDuxZYPNoP4XmTDAVb1F7aMDMdRxZUoUnRMyk7sADPctgb2Y",
  "key35": "2F4meB6WL2V9Gpm9WkzUs9MA5885hZWQR7rivUtz3LF64UuCBfjBNSSr8y9nFZXZi7zfoswPtbmS7xytaSn7UpGD",
  "key36": "4F9S77AajmrKdz5e21fuyRb6FW3Tv2UXUo6ABYgCn35snTFESLjNrpF8T6t24s3wLMgSQXb2CfZUgANK1qBNzN8G"
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
