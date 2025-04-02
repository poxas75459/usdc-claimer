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
    "5iW34N2RdQCsgRQxosH4jLfE3Rraz78g8fY3bxKB96mPr17g5xfz6xz83ua7FCNdFcA18TAGhkWxMD3snDHNJtih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azLhi2eKzSJM4ppZc8HvvpjLgVFwbZHNbfpQ7m6RzX38CnadvRFguNyqRu5K8cn2HjQqgBxgF6sEDhmxC8nDQpb",
  "key1": "5cVmKM4vN8imTHagZQmkSmCznSCcLzZvNKFhjBN5bDQVn5hSSBoJqNrPc5SfMmLW4dZCXKpZ7WjGTtrxXg1QnhRF",
  "key2": "66uVPvXWX8j6TVKc9VuorSCPFJdxH333K7DxFxTKSFQhoGrX5MvMdD1QnhvRvWQGBZJ16m7vS1uSuga9Rkmu3K65",
  "key3": "2c3PfryFUcxZ34KF175qu1rud8juD4d3Te7pL8C6WL8HtM4qJ7od13coCaa3HrGgwGsUZ2R8ebvUbSMqAA74kZ5f",
  "key4": "56ZkKYp5nXiCGxhZ6PXY9G2gHbaFwdKJAPSAqew75Uiw3FN7W5o613iBnmkmJ2BdMTg6uBh62oSXrtZ5WJBB2hF",
  "key5": "4NL5BGH7EB78ikeLU7eTvSABJyBgdabKVGuAbz1y88wFbVLxSbkxQ3MGXU7KyTwfFM2iZk4XbSPViw33spDaMAEh",
  "key6": "65UQfZ7qMctZLSaE3qVNM55umK1wbd213W2qePNzcNAF9eS9xQdEYxjPm6o2vQ7BjnExiMKHyjBqgtA4LpyL9SzT",
  "key7": "5Y42aMk7aTx463wG14FoLGyth8uKSdg9F6VUP1GQ7uLicpjWuSUrajwckEhASHWa9RkCVfLPajTDmxLaYnW4rAiN",
  "key8": "43qfa4hBZjxwQFCK471QyTrR2fvY9DTdR8w1XjAHGePpm2yUBQQ6dx7pgcEV5Eou3z9RHvCJ6XGGS9RGeFHvYKkM",
  "key9": "KNJK1oKqBGuS6GtsuWiNHSHzUdVrKv3DD36HMpiQVaqRx8WK3JknEAR9TYavb56Dw2y6do6X8WxNMy3htHTjkk3",
  "key10": "rP5A4Ge7sH5txpD7K4P1ccNEKvor6ULybkwMqQhviECS4JwTBXyZDEaoYyrTSFtrZfraYf89Uih6H3EzFe4ScDr",
  "key11": "3qSD54RhrwiEuzixL4XTbhpvmg1f3peN86zJfhTBrRheiNTuic887BqCeBHg1oudYaNDMuFPv9QrKnsQNx41yxAA",
  "key12": "4CK98SZSqYyG9BhwyUfoMPxfdXXoLnkCwfMQD6HwJJW4Z5C8fNy1a7KFxM4n7GrmhMpwFFqn5thE87pzb95d6nmq",
  "key13": "2y4ZhyN13oQiHCkoP8q4TsFBAyTfWifsz8V9zTdEpCmh6qFHn6dRnWRZmdLUcWjXPTZWKYMpcqw1oYS4nJ2MyCgx",
  "key14": "2nkitJeJgj84BgZDSmFDh1rDH67X6KCGko568fFThWep9HG8NrbdtfhTwXd6vUQ8x1UjofhPA36tFaWJ62MrL2VH",
  "key15": "5RuudXAdTCkXeQ1pqMN885L4Br3gHt5mejK9B7PA4Sg9eursnUJyu29p6WZVSh8rLW6kKU1v6fQyNec8JEoRuWtp",
  "key16": "4KVJDhasknyDbyzPADpBvCfLFwLiL9EmbEPrRz1X74EyVYquWBZTPtm9PPfQvuQhiG35C93ckiV9D5LUsLedDvEg",
  "key17": "5MtSqC1fCCB8RuUSH9D5FjwrPiKhKW9d5x77zybNWVtwjjAnJuuqfdGxhXUMzGQDoUshBRSmp27JWQR3gczx1LgK",
  "key18": "5DFXtiL1yPYm91Tb9hfKUuWMERbnW7oaanCHZWxgg4myxQJUxNwmumwvyzKWkk29bDVB94AayHReaBxP6UeyTipj",
  "key19": "5f797ccKAHGEUcuFVqQgyK9ujLS7xrE7Ab5ewwLvbTqDF7m3rVyfV4etyTAzfbhW9KZtwevDLE3c5XH99u6Lzt3M",
  "key20": "55DHWMDkdGRNYbyts1JQ9Ax2AM3x3Qus7gNSeFRaD1F2DyfN5BGrUguYeE5a7uG5ST8jcviJuEzCtdpty5vx7jso",
  "key21": "LjYoUUgrPnpk6FTgCSsqB5emVgx4ua6htM4DUj2ua27fcFcbnDpv16iydr4o2PU7E8VtNzCLUfjx3b33a4bn8UV",
  "key22": "3tSoLpJCxP1oLeWvr29KzE7tV6sc3BbrWWJBPXDxb5VZ6pzWpVCsm6WN9UpdVxRBvDnzXirAY17wBsdn6RHVy1xC",
  "key23": "WcxRqJMQJ1SqdrMuJVGmzqZ75xKUC2HzAjmaQ34g8m6L7XYJQXYmsHm8yxdXLufYpwD1hi82ELVg3y8KCXtb2s6",
  "key24": "cU9MVv4pEBkQC1WXoH4XYrcL6Ak8KZGgBR5EnKK8xutcGB8F5Zd133D4LU6jk2hJuGqTpfe5AEmw5gHNmAaeQ6r",
  "key25": "3zLkR4xfCeCtDWViiRAeZhkmQpgiLPTCuYFRx6LQ2BCk2UbE4xAAE9uQJrqutiqSrFLgN2qskgFHYSy61Do1ZF1t",
  "key26": "23CJ4hq5vByedHHkU1oRhcWZ16YTxJh6d2HBWQKUhMJ1a5WnfzspA1NpZ88t9LvtkHdRSoouUsWBCRyPQkwh8B1o",
  "key27": "5AN9mtuCzARtzAspEKPQhnyfW6BStixskKwGbaSReanqHiDTQAteKSMgfZSE5vBMPV4pHnw8oKyi6FXGKUV9vhpa",
  "key28": "3MpEuSNKbRumS2HvcrNuPmDVShpP61oBFwKZny4B3yEcRybtUg9Nj9ct9GWFda2S4SEh5nniPgDSkujdyuAosb5B",
  "key29": "3TjmVBN6S7ch8TgfMrr8L3o3CzbPShGukTH4MHmfqPqzhNffgXLKaQqQVtCcC7YVPCy7aTYBcUxLty3Kdrj9x4an",
  "key30": "5Vqc5meHGy9wo9m4PCybCfYqyZzcwRKkvBb629YvPvmeJAKesYkoTXstTmKqLxCpzTi45bBZw8MNPFHoGdCLbfoQ",
  "key31": "5NCYoFpMrZ4K4EMaGFJzaPPGj8gw6MGKrfq1m8qTASutQNVameESR1ffPkG34MTZndNSG7hLeStbPtdZqKocNC91",
  "key32": "2ms7GebyhQmjCmcofMjcDnzU2rqAAnd17GoeSpm3Pe1jtf8MVgRbaS9WVVVtxwFPYRXuM2h1X3LxAFH5a2iBiX49",
  "key33": "3HtZJ7HNJLJZz13uaa9dpeihdMt1gbJoXV4BwhjuJx2rDxitVCjsqDfng51mBTS7a2ZtM1ga4E4hi8CvNnQFbDhW",
  "key34": "2nRfqjsLX5aEpmxDjTZ6oeUNh33EECRaXAEyFvnXjvgUz9r28UFWsMKofZdgHHZyn2zyXKjy27n9GVtHR5WUktCL"
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
