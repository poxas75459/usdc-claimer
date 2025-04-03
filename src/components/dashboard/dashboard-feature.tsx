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
    "3g3tap6oBctFyF1xqonk91jiaeCWguhzDQFEEnsWVyYFQUZfTwS7QLa77U775wUWRevG8HnxZxHzFELKSwqtKpJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2Hm4EDTonGBG1LQXJ4SpKVTTfxU2MV11ejJBRmCSEyPbnkTBKz49izTZXP4roLZ7fxg318X7Utd7X6GFyN4XEh",
  "key1": "41u7f9AP6rVRNpmz3dzShygJfvBKU2qMRdkGfuJ9fdFdCT81gbbPE2vRTvgyjJz1nZp8ndnArtipEpmGgHEhRpUm",
  "key2": "5hjK6Cmb5WDYLGE6s1iZYCXRCh5u4rDCjk3nY9p14xVa2vVNB8AxzRK3FgMVxUVTZAc5b7HDgcbt5h2XR4yPhwox",
  "key3": "2PZMVzgavBRJ2vVPPhxkKSdYbBnFXbdKE1gwtDWbHhTVi826AddoJ9MXmsWkhe6WU6sTRmVtqt9SZsdxJzzkbcKi",
  "key4": "45ujioTMacKoRw1Es17oeTWGmjWgs5NKK8p4ufGCW2iCAC7eWq1dUkCsEG4KnFgQtAChbpYe7tJjFn2QV6h64Vmt",
  "key5": "51Wyyxx5eohJeM7hbeWpsyxt6z3Kz6mGanbWovAqEpG9r6CbY55ua87UendXKKibDNkjLRRJi895j2Fd4pRApa9N",
  "key6": "5JbLEFj9J68jz7i31mkYCLZBQvtsSdNAF1qS274w5R9Hf95Yoy5ZJXi5K7mVpBfhbSx7QDcEUE3bPEUVGwegwpKT",
  "key7": "2K2XMwQn7LapezmckfWF9m7G3HAsmNgvnEXtXpvRLGwn8KJf1kFNFUPqPDnrtxxH54taLjLLA9vHwrva7AoPZNcy",
  "key8": "35Ms76Da8tvtQh9ZXbk2jBP7ij75c7EtndtVfX2JH9EaafZA7ZKhfRRhkcvLA1SJiu9Pg8y2DuicJUivQtdfrs7h",
  "key9": "3kgLcx5PFGw8b4CzsJvX6CUo7BykaybJkFrtSDvQFEGJdoqyXsxe2A8sJeCeSBBEm82miZB9Ba1jH8nAD4u4rP6h",
  "key10": "64hxsmMVbqJkPvCNxMmuybgHBzdfXhv9y5n2gFFQK2A6nyQEEqHfo5s4vmE52GvLUrCDEeUd3b4TU83M4Cewr2oK",
  "key11": "uZLVY4o2od46SwPrR2339rL6zVVL5qTDCaAJ8v6rSD3CJXN998m3nky6MqD16sb7DzZo2Pqh8u2mjdcQx5PaSVk",
  "key12": "Fis2VPryqABbuk2QFaoqhBXYHjXGVdsJ6xq3xRVSRTHqKPx7LzFByfbHdfBfCx4eVVroi57xRTgQwqhYUuknA4X",
  "key13": "3rhnB4NNpaGXVbU5T3FssK8LE5X8D8PayfTXMWRKjoeMSctwhMcc2EcDCDU3f9iMvERDwc7WUp5EvVxSgQnEdHk3",
  "key14": "2Lhe295DYPXYmJPLq9eJvCs2bc5VkrRwJAFeyawJMg8zCKKjmxxkYK5PGgV3LKGrVfLW4htW8doTRcWLEaeNYojj",
  "key15": "42AoJoTxVGfsoZV9pWMvxLDnpvyZsUFuRU7qLoJAWhqtNrjfSx5cBvq4CfVMSJ7QMt96o5MDJ8iYTwU73UYRhRW3",
  "key16": "2dU3sLfq1YyKH29dhJVQkKzaxi4p4htY6ujE2tTvBWRGm8WRQ3gwkpF5L2voPGPszjhmFrA3iWjPAG3jkFAQjJ1d",
  "key17": "2epAauLwrVrGSqgW5TeoeeBd9Uav79RkswHMRQtxwxEgFVbd7Ph18v3iToMHkpUczCgttQLKP17We8xJjG8nC5Uh",
  "key18": "3sS4F9gCRzgSjmzuznQDYvwASzMnRuNEaNqqLU5d5qQw4Q4az2L4hpqJQXmsyvpxdx51NrArKond4x4Aio9sMnP2",
  "key19": "qLCqs7WmhDE6mVhw4CaXSVhtCACAoLzRQxGXQsZDCUDnokoUB4vGo7b27V47Jot24wj8T3NaX9EV9Jy2gq1auKa",
  "key20": "5m266JFjnBsNCFA5Ap6DujqdSkNjQWmpWrutH5PcZM62StuFrxRNwsW2rWPZNfugppoDL3ChMQRAchUXjkSv3CLF",
  "key21": "2ETLUw7zCqL9t4Uqj34c7JhQk29xiAvpkP3Y2mPw5QD5HAWnXL9uwE8hh1XNFfBawX82TrPBMd4WH8EuVH9a7BxU",
  "key22": "2nYeeu93dBw5FCeqesbY8VgD6Hcwp98YYqkKhi1MtA6S4cqw4zJrWYr7N7TboAyvmdLmU7Lib3HUTC4GFzLiKxwM",
  "key23": "2XYVLBCVyH6SbPoMnqjt5dKDKgWVPEzoGosybRMMu77Uvbs1QbCeBYYMdxsy4keUFZSYt5dEi4rRpSABYkKQ5mCS",
  "key24": "3bA7uFR9HAcQjCuXiSpXJdncAqAh5xoH7Yu8ZG4e3KkCNus6SPSuGozUsDhue9aWxGTmvMebD9qsnaM2y5w3JW7y",
  "key25": "37jUjRQcJSsgkYYJRttcBG9NZfPCoUFScKjqHMgp5gzKYyebX3JHwfdib9SuJFFNU4Ykew1DNHo19exQsGGzQ7sf",
  "key26": "5E1BRTEwVQww1Jt94ARL1iMi8voXSUb8YxeJ7a7pWhcTZX6JQouQX8ZZiBmx8LiRk2CX8gYJExYgisoAmwyzN6tM",
  "key27": "GA8HgMGRLTdyZDZaPkeYpqvvCn7Hoimz9WAQ1HEqNM2rWeuCcrhpRZEBxM9qvRVwvfUhQt3fo8WgTUk2AXJ4NEP",
  "key28": "4ktcLRHFftqSA8u68rb9TgS3hNXHgazuisr3puBMRG1SQi6wjRiUzfRh9NDfTeSMdEB4Jc6Yb7MR5mVaxpUq1nFu",
  "key29": "2rrp6qBVXxTYRrn2q6ht5JSUpwqCGy6UPA8TJgXbmB3UyoJz79CTeRaAAV9tyapzAouwLya6DTTs4Xm76WW8Pfcp",
  "key30": "3c3RhnKx27H9rveDRjjtW7dvQtzA2Ft8Wgz5HSf6B9Br3LkWctaa4kJ7FCeN16hks2VD8M6vKYLBwPqpRC3Jfmjf",
  "key31": "59NTxxrxjTxaHfpr2QeQnwKdcyC6Jo1cz7E9FG1h52AiMRqqqhstCanyfTwTqC5ksBP167tbNvevYohgvciitZn7",
  "key32": "2Qcs843jdYbgTdykFL4pFyijRtd19S9DQms746PsBDMBBv4GQMYuWNwt3P6NAz48v9bLQwCanjx4n7GbsPC4nf9V"
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
