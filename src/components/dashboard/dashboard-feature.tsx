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
    "4A6QAVCmiiuyGNdKCTHriaGHFnshw7FuxC7HXTdpDUDGRQLud2vuLJFFEkJQjyLMcqBe95MUgFw9U5W6ukCqGhAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MuHPnuiVw6hmFwPvJMHV4zzK7QA1SWHC3jHUb8NhpeuDJZRZecDUK943wugXSD6ZL695a3PdVQBhSSf8DhUYRRJ",
  "key1": "311bdDRrjt87F957BsWEXTHpo5cCwixyjkf37DEu9j7tQQYsTKbay7suUQfxescLsR26ZeUdkzDoT7bb1pJSMTSD",
  "key2": "4U2YkkkPSm6KNbg4YAuuQryGw9GvyS5CX5hh9xfEwy96LFeZNDVS25awmjwdnEwxDyfpABGjXNLqtgaMoXwDRf5q",
  "key3": "3EYfSTtGPAevXAPWyXN6Qj8WGZvbiZHKSQAwhMusjQNoieBgzprdrq391czc6eRNua5gRjv4Kgq1Fq17J5BJtbyi",
  "key4": "5JsE7KDzjsDAcPidG2yS6xTFohDUSMp3nGwr91pdHynJcTixq7GmoxvoUrLZ2sJxZeo9GttQnXgwTmJNLyVzwjBz",
  "key5": "5S56WBmruDfVtr3Np4r7bLTKSvmc1pXdMfta95f5QJVGWGDvpj6UB7bQdcorLXvwRvpLU3YT15iMcCNeSfWKNC3a",
  "key6": "2fjz6fGnmZmL58sgohS2xjoZpWTdej98r4QLhSGNnbXaWS2wM8sARh5EjnHpDtd47TBFSrdvV9yCAD8HLNieYLrT",
  "key7": "MzvFU9Gt8zyWqpc3L1wbc2JrotjqAhjnFYRv1mXDWXNzLBejz45vnpajwtxhFZG1Dj9EXoBjD4a7wHe3KiMexG7",
  "key8": "4ksZV8QE6dXaDAgitt2ba1uVaB1F4LY3sMEi7b39muaapENcpKWVXMoJcZ5zb97hLXcwEcRKQeMifBk9xxykdgnV",
  "key9": "5HJwurkqkMCECHb7w7EEz2d7Q76GH1AoQRMykmQv6meim9QVhJ8gTdyRS7pVwMSxPXp5H3XTb91XQqeUvPSNpFG4",
  "key10": "4J945taQgvKnB98dw3YgrDeAS5GnS81YkZh8kuzw4NiAzNXw56xJNUustuWUSArwqLYq2L9W5Qhh7x5wVLjYM8Cx",
  "key11": "5ejbh6ZF5qL9AVqxW4AzJyH8nnTBbgUjja1aofi3X4yUnykfTejSYCRmQuxyHGhWsuA9nxuXwxXjPZjDhqbiZBfT",
  "key12": "3pTnuUWoj2gqTj25BPu8EzGzx8ayttv1MJMwpD6SowKznsjG49W3EXWypXJxsvpsTjguBVTHssQ38nLvbohSgdb",
  "key13": "3X4RMJzEup8zpvbYJjnmP2EMPjN2Lon1tvMDmm5MWkhb7ma574BWq8xJBUZ4UsZ1ERZg8sVmwyoFjMG1estvP3SC",
  "key14": "2mprP9Ex5moDoJ8xRPXo8B2aUWzANDMqsNNzkz3Pagyih4dr4FL283D2CWzU3o5HLB2bYgvPjpAYy9YzsTcMq8Br",
  "key15": "rwMnDuhyiJUy77AvqKufrxzwzA1xtfp2LHya7LDcvSJAbAoFJjiKYyvpCcgTevS2wjRXnt8r8F6UCNPkQrAkNTh",
  "key16": "3Zur3RJaWsDtcG2WuJNBjtsu7MrPrk8KSn6BxCVkVZPQ5uH2Sd7HWRdYK1YXtqhBfK53AJXmhH8v1knu3s31icaJ",
  "key17": "3k7D8UdRWXGsB3gJitsCW36ygPK5xUgBzyogFVR56PYfJb4Pp3GzpVr4ioTGPSbnGMosq7DYvNmrbrUVUtLLZ2XT",
  "key18": "39voSauAwtj8WeWDpMaav4t1t9FDxi8FwR7b8WKD8xN6zNoCpjtpCXTvupXzgPwyXkjLzYfzpGxbxZYNJKuaRbzb",
  "key19": "5gNBKCxjJCQ6hzHTbBKgTp1bgEjqbGp924uKTJjWdQ7t9WbfBcE9ZoDT1xhvY6HSxp3h1r7w1rzLUjMHtUuDqhtM",
  "key20": "3FDxDm1k9bx2yjSSckdiWMtNrRYoqBb4trWpuN3vmNpeh8LSAwrgELzikzhRgdVQmPFTMaw9upS38thacSfD3GVY",
  "key21": "2c6U46UvjBJvJg8bJ5uutLEmXxDYYVZED8zTFsox6dj5TermbJJFj2BbNBQwSaMrSz1pJ2Z5NER1CPdQ4ciJHVnb",
  "key22": "3W1hEEEgseWi17568doNJ3jBtTyrETVFGECPpPNrFWEqjsL9yHuSnYmEpouk4vNB9PLGhotufZ5c3FVqHztqb6sG",
  "key23": "5pqpTXk7aQMC2ts1UPrV6YgRp7bUPscRdUH8SJnFtwLMQ4rctZefW6xWARVLFFuWkvMD3k39YncmKHwBFgdbQYrD",
  "key24": "22tmQVk5KwF7yHD4W6ZumxM7rDFt5gZV4juR73Rf5dN3zPYcdZ1T8Gi3ZgZaywZxa3XWXwdRUJ7QDGWAptM2r1ew",
  "key25": "3RzZS2zfdG9J9P8DkWZrjtspoTLpNgkRMGD7AzfLrXFPipuskD92fBFtuGGnpc1UgxheccZ7xPgqJGq8oBDTxB9U",
  "key26": "kVrupkNkm1te66NZ1bcDm1zmFnV66z6XY3BG2RsTnnF7t5y2CqVA5fdShGANiFYjv4DvZQnooJks7jddNrqHSbg",
  "key27": "mkynNHREZMsq1o7he1an5U1gbKwX587zfj5QtJtveqS4TCAZnNdSHfqPZihJUs4rEJR4EqEz4yuFfJUcUnei8df",
  "key28": "3SqRgYbyxPo8Jsys1Gu6wBg7risxoDjWXDvxWN1kckviktyVvNXWNS7eUuBYExXzRxmN2bgrVaqYmSpti5RXYzvC",
  "key29": "3vUZqeyv8mPyoErrqaMPd71MN23K7WFmSxU69xwG1ZQXAjCCRhNn994rBMC12x32qGNMas8XssHqAkTYLhUbg78Z",
  "key30": "2nePfg9rT5dqRcE5Td4nSDRmnNqxEaYa8CwnarxuUx34QQqFkoK1AahWq7pVfAe8LCK9UmTUMtpioSvA62oKPfzY",
  "key31": "Rb7AdyioqpUQBbJs664xeKDe6EjcEz8hAft35wa5gyn1zip6HVs9r22LpEmE1nz6GKVFaexNrmF2i6f3VXZjqAQ",
  "key32": "jNt1cjJAdFvwxaafvkP6yA4JVJguVRVJHqLpRcm2nTHbjveP7Sa4okbWAJzB36hXmZk1k5oZGDQhuJ5MeXALvMy",
  "key33": "kuWiSFw9b4jEHAsw7HKPaD8h4UdXfTH97zoFrwyRVyZzvd3Nj575tXdEUQ1kwNK2FAUfoE5YtQqPUZAMxKj3FZm",
  "key34": "41soNA6GPAn2dD7HTh5M78ofwGP5a82QBUA6ksUtGGwasTDL6BzNXd6RnguLMk96kzmfu2ELU2odWxXhA6PiqMVG",
  "key35": "2t9byjRTrPtDJFRWDT7DFwp9X3toRZ7umQNadxV4hj9qi6tRuFoPX2azPQdAaLysshDjPtQUBQ9w4inCT7B7DbT1",
  "key36": "x8zDRZkzUvGER888cBviWpjuDQ7r8MhsRFg4FhzJZvJatrGwm85o8n5ExonzS8c8ydnBFyxiBGyQCryn5mDoNAW",
  "key37": "4utcFq6YTi3mvcTKFW1uEKYNSjSgrqad64dz4B2pzBA5M1ZV4SKDh6wKg5BxNCfXVvatjNy4NvWrrF3Y5XvoAAT9",
  "key38": "V6bJLafkqvjB5SAdZbUvVr1MHf15EwnCHzH3GQci8Pg6WtMbQ7TyZudwMnCTnNkhzDvnJuhquUvP3AynfZSThdJ"
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
