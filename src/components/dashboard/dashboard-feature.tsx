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
    "FM5bM26znVsaS7yEGNemj7u342u9r2K9BabATCZn24rsPCwaFU2EkybHiX2HbED72g5wBVjbVQHsaPgt3jD8CBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1ecQhhyKqYUCAS6CsG9vMHXwLCoULsJaFhRNoPDEPovNGQkXguSAy8Fizcm51JBsJBpDYQf2Vf8ycDPBmV8Q3G",
  "key1": "3mLUXzDDYEVrPX7TZUuprjX71S8ErjaUroWcXMX1cKVbfgJ6mD6NbaGAGPCLvovTx7cU5PPcL4FAepcceNkWCRvv",
  "key2": "CbKA2SJZyiNwx33Y7yDdoQssZdDEw2u8qkpVTBzX2onc5zWA7rnpuWbyTMr7MKtMTfJD2bUWbW9f4xyug9jfuMt",
  "key3": "5q5S3UFRyHVuooXj3h1ukfanasEbnKxJ4J9Gnb3AQHZh9pbWMBnLHsChjDXhrQ9oRz963MmDJZ3KuwqxqLjBu3kg",
  "key4": "2wbM8HocH1rXSZHoHCJdF1SVK1uHxExERwQxXenhhYKZMmNvw3Zz9vwMKvweoQVbnMhpWbCayiv3qzjJC7r75n3r",
  "key5": "4j9aB29auo2Xtv18soDFWp41P8rodHDPbbKwpmycRAjY4D5E8sKpJbR9Z8efxvQjm3H4jJ19dvWZphK9XQAhXHpz",
  "key6": "2tFENky1LFqRqboqN87kCkHVJog62dPBPGNjH8Cz3LvxvJ3fZLoXxe3JyFppdjmVpsAgf8ci8azrJY4urFQM7u5b",
  "key7": "4w4rQtefEbVWanVTm5okVTaP1SNhC8oL37vfXZgUA9vTVBGUYjuqpMHUmifvzGRbfK7oPQFYRQEppqwaUfBmbtdo",
  "key8": "36t4GuddHe9V7M44YkThFfhf4PwW2noZhAhKrZx5hVUTwm9tkWLqV7ose9i7sm2qoDenT3N8X4CKGyK2ssENBxrB",
  "key9": "27qnaLAmBJ1SLStauZQf4ffP4vo9WfNffyk9MJ5yqQvHKcCczLByjQFpQngfuSr2Z1ibGctjpKUq7r8e2ooRMSgM",
  "key10": "4a63ahmXd3q1fP8ist7jCkknkdYr3dU1MKgJw9CwQ2MBxkVQhfAkzNQF5zmoLbgARqjPAWRmo729K1HCZ6qUER1G",
  "key11": "5qEB59E3xc8Jow6vHh8f31LsGZW3cbFciuFir4GF2RJ25iZwH2BVDPzkujdXC4Tyr9x7TJmBw6Ta6LchU1CbUQSR",
  "key12": "5aHZVgdtqqdMo5rD4vSDmyzH2YSzipELb8CyoQuX6tRfT5NJoGgcHWphsM1gRkceAsoUm541vynsMVnrP38huPdY",
  "key13": "e7dQSJS75s1TvzWkpNrBjjB9oRtkfK14VQz2y2Urrn9Zd3qzc82ZbT4nH3VzVkTjvC6aRmHCQ6RXhP7FsRuPJKw",
  "key14": "2reQriQsMABKPGUHWMbWSg5a7JcGf2QwBF5UopMMtHSVpN2mD86jyg83M6ais74Arcy95X687ofvobNb5JqTTy2B",
  "key15": "5Yqc3KWX3UMyYtxJSQ56fhwpc4u2BUpp2S6TP3U4vniyRfvASYueK4Py7izaeGZt8TrdRcu3uRkdum19MTqBeM2o",
  "key16": "4Mup3PpYZaAThA6Zy36auZnqNGwzATW3m3xim3K6cpcYeFEjDsRsRhT93E8qsrTCGfet7GxPYd64W43C4zkuQn5j",
  "key17": "63rNcTBtb1FKCpngFh4oPiVj5iQ1fmZMspPCcntwa8K68P5v97WGBVGkXgXp7o9NyqwN9nrPb2zREmNCzsDvaYxz",
  "key18": "3hv8PvsYgXx9pA1a9wLnbAvfjBML5iaHtQgTK3LwAVinL574wbeYsePiaCE6Cht76wQAHBqxbYabha5TB9RaneEq",
  "key19": "LWFaF8JzqhQ2GYA8fghYzvo4eSGLkTQGUDMCkMvbHh56PyFxJAcjEtfk3zxa3tsicKTBkxw1259nz469juQp6DV",
  "key20": "5XRxH5fNCkVTueC4RkSHy7v1qFvuFykJFopFPqtzxkX8NrtkGQEYpbePUghihT3WtjoL21xdB26zGmLPwYrdvqTp",
  "key21": "5tJjqZerb2Mybx2ckwU6bG151RxTjzSYd3i5s3r3k1jzQGbKMfvVwQB8zYWo7qUkthkUC1yGVDGjoiQXSabR2sFT",
  "key22": "5DYoKF2kCGBnHPZaSdu3oijRiyFXSuHUXHe862KbeB333QBgSqZz8tf5m1G96KkJorBVDgwejrijKaZURRQFcWx2",
  "key23": "66ScKY8Nq2Y391mnnjKfM8hM8rF7spQJvF9Xo32B8Mf4BgQZgUM78XNM7hK5eDWTbCjHxh7etwMjatxS4QFuHkmE",
  "key24": "3NNZNCj6J6VfGxb71RPaWFykWhCHoVyLzYzHocJFrBpNFnfWgCAoBRohHXpThu7xFtgXEFL5ZqRFs14SCjrDye1P",
  "key25": "8C2YEgbw3xTyJYc1nTT1L2wCKD7t2zmEx56gxZu9CJbTmNDdBBD6H6zwT8RNhquyYkpUihDREWgHfQ9ERbGirqq",
  "key26": "43UFJ17boMHFaZR4E3i8xW6q4Fnbz4dKBCM8E6A6zPEDPQpnJXc81aEgq7yfvAj1ZavkrZXpaSuVnd5qpc8SS5s3",
  "key27": "4UD86avcDM38Ttyd7gKHG3ZncHhfT5SZ11Wjaw1J5cTi3VzXyfoyTUj4TZwE29vZmgPB4FEaGoti7bfXpDuKZAdu"
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
