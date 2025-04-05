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
    "5L1dsiS1r82iZ5GSHe5WxPMHQJ65akt8MgzbEKDdyHYbcoBxpkLBJUBeAh57YYgccdiS9tC3LGJWAapAjkhEAewk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQ8LZz2WZxq3zooPuRtYZhNv4pkQRQFiQd9y5TqyN2ML36ggfT8BiqLsHQ1zSzpbz5YRaxPivJdvQMUSDTRUpBN",
  "key1": "3qQA5xEeYuggcAB2uTNYiejyKuNAbGBx7XZ7Uw6opLdeAp6KCsZrwxnZZky8Dx6AmEXgHSEPMmQvLYHYRt2SwFSJ",
  "key2": "YQATUjTDjsJL957w8ZexEFmdZzGY3uc1oWvnLWHD99CZ4rD19vT9JeZTNzs5sDDzN5XSqk6jYinAjWd4Vp2ePGK",
  "key3": "2ZLnQSYb1n5Czk4Q2MVF6h9i1QHhoMhGwmudhfyn1SwRFuH27wgtGNE9kSRrdwSDDGEYsgcqgfM3mmZ3KCs8mKir",
  "key4": "4jGQDNcRkfWSFKhLC6fFcK2PJaovRajctXEHrCULuLNG9Zr2tegPswGGfYpmVVH3QtqDZ7nHKv8yjWicgTGvT7eY",
  "key5": "33RBAfeYa4PnfK2XHMTeWenjAtj862UvojViVoJhsGwaXejQG2ZizS96Hyb5yrU4Fc8DkGr7cARwRmsf5a1gWEvJ",
  "key6": "53CYAKwHRBWnmWKF9qE8ui7F9ymehxqQbnugjprb7G1HAbL2dTERHSTsqADPULGYUVmA6N2j72fWLRhsATQNQc1e",
  "key7": "3uRKmRXUgaGmFRD6SQ8MP98c5PWfhcBWUUnSKbLq5RWVUQ6h5X85XXdqhv9Me5cknaxu2gEVYw6Lp1WfD58KobNu",
  "key8": "33gxCKGtxuKjNJR4s8sq4j4S5K8cF8xkwjYvi59NFNe8Y2HvWFcdimneqTe9pmi71mRfqmktjynnuj12buv7vDSu",
  "key9": "4MEwRtCHTg14yj4JvsyF11kHBKMsZD6qz7yXBaGbHKcVC6CZCsDyZbx6PSZF8XkAxYJ1yCmD4fFR759WPNyUMKCd",
  "key10": "HJHnkLXJ9nyRQXNQXJD3rak5vY6MN5YDLQhPATASzre2XxHvA4DHW7wrKBw3viVZjE7onmX4SfEuTLHewygMkPn",
  "key11": "3iPG3WTvqyDCKw6E8vJcWgm49nPQ2a2zJgfZCVHhaXgxxEz3tgS9ejm9CnxTNFHA5W2av1CnYnsmjRozLkavr4S9",
  "key12": "28XCz4Z2iaiRyzY42raPRc1Apeoj623FoPnAg1sVTBwFBh3GGuhRu9pLumdzdwgDLPBciDiSjoq8mK3wfJW87qyZ",
  "key13": "b9TWavQwq92CHETyjCbd17dYgNdanF69539G9jEyoZYerHUYwNVBzHJDKBgxUbVz9ikuR1f1m3VWMM3H9b9dQ64",
  "key14": "4jPMYvzd7RqNmhmr7X1z3w3tvheiGZP5yVnSkgvYK4SCeMSLwMMm7tY37p6K4tp4AU7hAGiDeannkTKV7s7axGds",
  "key15": "3fTTQ2QZt18RrTjyJ9EZj8ZdbkSiWspFtWfWNyJ6QL4y67rP2Xw4U2f9tNaM2rzUK7rhGMY8cGJKiubyyEy2zGM2",
  "key16": "or2WCdfNwoamuToVt5jNXCXSLEb7XYChqdgfF9ttnbWJ2Kyq91uk6yHFUoZfjgwJSZTB9o2PCzP5SRf4UssSkEt",
  "key17": "wT65kMwuVcHQeif86mqXES2WWV8CScjhVx4ghsXoryWq8p4V9AsAfpurvCTdhGvNLquJT3YMakxa1qWboSNYNuQ",
  "key18": "3UUYQPxBP7Vt8tMEysoWVpLLoHgRh9qewCxSJwwEfuChU7DSuze693drNimWc7TKYCCAjH6s4tqttQrMMMt7ZiDM",
  "key19": "2uNVahwPJ1WgXZP9YeyrUGe7ZccKZwaf8qYGxhbXHfNu7CFBpSK8bbtX8YB3688gEu6X8sZiNLMDhYwh4eSgMUdq",
  "key20": "495ui83Mn2ERnFkjyzvHuFMPV3iXtrBN41iqRXot91YcFXDdQQ5Pe2Y34tELEHpXfpXte5xwYiq5dvU5vvD5bj6J",
  "key21": "5dstvjsMU4HqMNKC5RgEKzSrhHQ938jJnNkmPhjhcREPFNgev3MbvJz1evD4bYiLPiRahsL3CtZxTd9mXHR3dzK5",
  "key22": "5sqXmJqe3ZfjViUNAkSA8uBnfLwFSTfWCQYndLuAxtJdjpAdQ1dTKNteXw5DQFNEnxLgtpbTdg7CKhQQqFUeNCex",
  "key23": "2aKvKK1t6ncCy56tLB5ouKXnx9sebTXVgcAMFqQHXtYPvkzxvzmgDXhRovA7FJ5i8DF8p5iNdqnyzfgU8g5qVutF",
  "key24": "5fXbXY5mzyV9kLFg3wbetfiu8nAcHELEixPMvwzPwHtT3rBE2wMemfWg3H4ogcE2rje4cMZbwA7LxPTUWHSmJmUN",
  "key25": "2wZJU9FfSCQzo7EPxR2tgr4xE9L2J6yzjKiG3SYrTgcdATcv7GNZjDBexn3RBV3AKQJJuEq6m7WtqnLBbfTjMii7",
  "key26": "42peTRzwKpuqps9wmhdsU17AGckjqSVZGPgSqb3qNZUU3Jq6UP7FrzVN8HsPraxkhjDBVKS7jpeyekJZVVfVg2bg",
  "key27": "4xBhoBzkiAgE9PVvZ3eLGyzRLYugp8C9rzKW3P8ne3THunAXg4hJr1AzBjjVoXgqLV7NuPWWC5LyKo6ro8do2eDR",
  "key28": "qcmwj5mirnUPCmcAtYy9NnrPNYpx7qi9heJ5Moz7rhSZyYrkWwZ3VYhKx4vpDqEJs1iutPfJ55L2fCWrdwYKvpt",
  "key29": "CtWC5tbFSYYM9XpW6bnkjKxkcgNf8UXL2hdPC8JW8d25oKYpjwTgSdQvsbUaSRdzo4Y5Kb9kEgqkqAZF3TmCCT9",
  "key30": "2vKRpmtvaj6wiTM63U9srL5vCAryvBY1td4s6CuS7XawHjznE268hRdTWZb1yQq2V5YwPGMpMj2WBcBWypC9X2ty",
  "key31": "42Z6SUfHGbbpSbKzM8sZndGJTJws1w596ot5sTPagkCRR7Pt1pj5PL9yFUk7epiG9Uv2itcuUCVkCnfiP4p2UsFY",
  "key32": "5A3P6J1Gv8v2Uv7mag5ACsoHQS6waeRwMKTjEa8VCp8vPc3vgvCN7zt6aPbAbuZSnPWtxFZR7nbaNoeTr9xTfLBb",
  "key33": "5rkxyn7ibxTyfkMt6z7T8rpqDYJ6jLVEZQFUPZei2t915GPbXGe4oU3ot8FE64Ah79JG4QAdH1ZkZAZxX7o61QyN",
  "key34": "2nmTgFU16aWjMeAZLLDNrn5zYseLVUUghrdYTUvz73kr7dKH2LNKnLtkcoNpiBZKXnUVjL72qimQ8mTocVLegrZJ",
  "key35": "umjMbYCU8gNHpQqWukaE8p4REYcWfa1hpW13xpcPvDhioYJTkDW2qg1Jcc6fw495hMGf3HvwZYe9Sy82fAGsf8y",
  "key36": "37CLw3kJTf5FVHpoxHVhbUEeV8HYBocNsk5597zk8uQfkRnEBd6tr9rj3FKArcgcZTJ5v5GAd48iAZJd1usYehvV",
  "key37": "5DN5ivriMVaBRcQzCZWmemmrkJte7FyM6Ygcu2qsWThxrLZTjv3ryvB4Fcb1ECUaf5B3wSLb8RKboEzw3rjA4KRy",
  "key38": "5NTcqzNNQZAuaRaGeNMiTvYfnohJsxLBdK2Uv57YXe66zDbyzH9dRM3NQxqa7PvDfnGjPGEGbLjqx29Bo6g6fS4n",
  "key39": "67JZJ2YXRDhgKarqLXZG5SkZbwxWcYGZeZMSngpLVTuvaCqHkGpLDbp7XNRohQPMPuAicmikV1PtJACf5Gdj4QrX"
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
