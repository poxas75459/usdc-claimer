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
    "38f4h2jYMoqhuJHAMVEYAsAshiBoTJ29jj4GkQN8pXqhArHn5ZMtKkQ32tqVZenUzLHvAadJucuwNXhsqKJCPfUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjRrvQCUJPpJpUAC3x9reU6FHoCEoLoVuZDWg7GQEQ6mGoJP9fqiF6nL9kC3aC2NqheP26aQScSVKA2o1d1XTQN",
  "key1": "z7xXGs7S7WkganLDTpJX8wVPTtJ8geaoAMHJK5QDgwsvEMXU14KwawNcCgEeX89rHMXAhHJh5wBiiTkmZ4rxkHP",
  "key2": "kdQ6bvA1LrWsDtL1qsHqcEgk8xj82kYL4hQqZx4tyAzvcRBdEmwgyK9LYRevu7Dvs2CBbnyTC7btYNoDSsy68yA",
  "key3": "2FqCxj8mahMEfVPJHuag4g8HemQX7q68BG63E9PVTH3KNRbiCgMHnmHkrndTxYd4XDWiGQVGqkftBVWedihJ6hWA",
  "key4": "63ALHhwGAmegKX9i51rfrnFpN4GvokTt7ie29y4innecrGWNycLnSyWQSFfPAA7h2148YhHiZNhdnMGV6PUuZ7Yh",
  "key5": "2HyXyHDUdWNLnjqdEqDgyJw24uT7g4WLAgtuX2YLLjonByXCrRUJFMbRfcTytbgCwYCDYHNTZVh4rDsm8qDYsRYf",
  "key6": "28dnLExojrMP8T76KNtjGCdU5uxDCzat47HVUqADwaudkaHTdBJEzDG7vBGXvhFLNPAufvqptTX9yWpEg3AaTknT",
  "key7": "ZTwZpPRgjtNoJ2eRoMT41n17nUGDcYDULynoqfGKcqpWS1yARbPPDdwd4K45ytMr4MaRNzMwpohgn9SxGphMsAe",
  "key8": "5z2Mv29h5nNLLsaNw9EiR9WEGYT5CPWsTmkGK3Bsoq5xtJmTbMHsWmvRaCptovpGNPoGEZ2om5jXDKkkymtf7WvP",
  "key9": "3g28rTZov4xmpDGtSktRqZguK2zJp3FUYfK8i8aqpNuoNeTHXFycsGJyo6o1uGZ2s4sBJ7bSynzaQbL23B327EGd",
  "key10": "3jvsfhX6A3vqhnqq1tKBQo8CYsgi6C6aDMGohUMErgbGaZrCMefqpewx1ifhwqPtEu2AuSqJdRQmfVmD2JnyHNFp",
  "key11": "2DH4nXH9sTm5NFYJKwVvhRWjsJiHmjh2HpxB69Kt3JzSGj7vR8tY1hE2nedoGcraFydUcfHYwpqe5dDYZ25DxuYc",
  "key12": "6YBvKvjz52tmNwByJ4Z8E7UANCxnDiWTGuyrU5AxRpZiSU2qu1j7yHzUXjv5ErRUmQamv4MQpsPsLYEi4sAcRvB",
  "key13": "2tbiE1Z3EBAYBKDzfFGiw4KHgaD97hnQEnixPeDZrbKgrHQM5eZoQBdvtCnGFXUzkn8FgWd4xqh4bXyNiQp75X7S",
  "key14": "55JPycydRbN68yWogDrBcJpfBxMjA7GarowJhN4Y99TAHRfWKuJsH5kwLfnj7QaeWEeZAqZgq9GWcTRYhUsWVERS",
  "key15": "3Xq3DTrKRNSCEqaR188KhqAaJyHuRVdTVNcWTsyAkfMeJjXtcg5hPpdPWqk5aApEFWv8Pnr2FNZfXpC1hwr93Gao",
  "key16": "G62wYmyin3QRwdXcrdiiG5WgEHzDRk7Q9uF6UdFb46RBgSx2ooWo4pu1W2GdyAxhin5H2dC4bRAXBg21EgQENJZ",
  "key17": "AdsBQm7pzcvLyC9ZNZtdsZjiZzFCmxp22RdxzGxQkLjKyByBdMm8VRSiH179MSVYuAn95UJsUqnGcmLkGHKRdQz",
  "key18": "3PgBbuewkKZbK5d1xW8cq6aKXpCC7pyBNck4P99pGu6aMpK6CBYRTQhP3zHWj55RxZcZtYMZ2foP4yHzBqKZ8bif",
  "key19": "12L3brt6XvptJZJN3dAEeZBvjkdKgniaRMAMzaJHn3p8nTV9NE2QKvEWXVhgDqjN8bt7PYFP4p84KyE5WAxYYH3",
  "key20": "YBrYtYYGfvgm1hqEyufF43r7LF4J4tL1BUmDwfKuhNPwRPhsSnE27b7Q9bTd3hW3gReUGHZK56rMq9Hqch2CYRH",
  "key21": "4kJr9jxaQS9zDWJkYrrp3KL5SU3mqpm3kLKGpdVxpxs8EYFoNgZiVGd87J1qEbiJeTGsFouSptSw4kf7KVaccnq6",
  "key22": "28XW8jqX4jAhDnUD9tVLnqF8VmFU697cYzyY1sNWnQkLFxXAYgrBkdeaopZDdZKS1qzSWbiKtfxQSCbftqCuDpkF",
  "key23": "4kxo5VBzA1Zd5KUzwYQbF9KRqViwxtFRyFTFeL8zSH9cPoAhTUbW32VZRXoJXzYHq1tan3YrTSSon58FFFhW1jmD",
  "key24": "3DwhN8Qz6w55ceb1pAkR9D2aLvofG343K3z7SQtA3mG57dX4CWpET4V8Krhzqsx58p2N4a3UCGr4AXLpfEoez5SS",
  "key25": "5xq1XYvNWkx2E2TXuSUQVrYSjfZVEbi8Lh5n99CS9dCZCk7vZ1nkz3TVgV9m4a3u3zMh8RoUhB3DXtD5Ad6nrbU1",
  "key26": "47BLdxKLCzZWhrJxDZ9NE2j7sYd99vbyNUyUeLVj7oMvPQ9JP1NjsoeSgKNPBCzFCZU17xWLNBUC1X9jzpDx5Rnj",
  "key27": "3Cb4b2yEJkUMhtAZ5QSyNk1RCHMp5qCghqgrz42HX6QYuR1ZViNhZxSG4n2Mcx3LWks1LQG5pmBMnvQsgBGNWW5",
  "key28": "4ovBg4RHFFB5h6Nv8RLUcR4zcTsCFWTCngiUU6i27YPz57K34W62XN5cM7RC1M8NMNZk2uYQfn9nBKy3ar4UzrMS",
  "key29": "5tuiTod1Jv3QzLVspp5gvym2NQ6tHJArkSCyCp1WZd5xmgv9Ls1NohWqeumuPLQSbW9m9ZYEZrziKHAucCzcEEme",
  "key30": "29DWvCeqUp48vxCj891kQWz1vMj9Gu43CYFcrzGiovpEvwB5gCmRCfZnRJwPb6Dan4hyZtJaaZCEAdNcLf2Yai8c",
  "key31": "5eKzs2UKdsgn9yVpuaJV875FMwjsZwpZo5bhJNBX6RvXoUXeB92KY2xTqqnp6DaPjT8ZnHbsdZGktp8RVUG55X1t",
  "key32": "4rmmGrVHVDVXXYnnLoRMxX3Wn1db5U2e8jAMneDywEZfVZ6fmmrYznpSgTRpd8nbXfKKQPLN68qhvzZ3Pj33noMj",
  "key33": "2mZKqzb7zrvJFiihA39qWiFPCJ4kYB7aU3mqjPgPhmA9BmV2oDFdQRTCVtZwR3wvGFFsVEfJtQPxhozgyA7cKiRB",
  "key34": "pQAUL5MuTk8DVTKKRrz2CrCssxaNi27Tcfp7178Hfner97fhgvE4QAPPLe7Yu4CAuBZKhhtVrnAJWBW4wk6Ykf2",
  "key35": "2Ps3GxNaKEk1o86mxpic3roTJfXAu3pND3EjC8CNUGYR2GzRUoSwSc87YggP1CcFRiyioZn3aSTaTME6U4KQZspz",
  "key36": "4u9AczW5c4EJi76t99qmoYaaU8U7jE9ALmhqLhQ2CeoU7eeBVvcDCFyEipCqcTqbfNu5ZckA3qUiwaHTbSUs5FnS",
  "key37": "dLoBxAoznxaJcJZ2KCh8xUb2KFfx627AiugK18dLenRnF7bV8HeGR3QBnMPvdVRawNjddwnkbvhxyC7Ti3buxEG",
  "key38": "3yP2mQXUpWcVsrh68mbtkSL4twngGWczMh8ocCahoekeFxjMsiBXxGKujBikjnxnhG6trbFUZ5MqWGPetBBndNQ6",
  "key39": "tR5HH43CoguuEWiLARsMscovB9yv1RugYUBaK17YJs9x6XqoYiMu6h92YPnd57zEHVkpmXf6VEVyFpuWdfiQUZw",
  "key40": "5GRTk7Rcxe9GaXByRBN5vZe1PHt8F7Q5Gvy7znZ9ujKGHwz7hJdv9juwVe8qrE8qceMBjTbKYNCHSpKeKD8Q5mKM",
  "key41": "4USq55R5vrh2UyTPiyZftVrePhWYQmRvTcAXWgRquyYHDMiiT5sQENL9MZHTbqkAxpax6e24qwN4WGMxkGHWJJB1",
  "key42": "3DKot3e62H52exwTnPkhCUSGpDCCSMYTg3yu1gvPcAB2KLNq745LwUzY8SA1DMXVhW947KybNFmjsr8oCQHsbUxg",
  "key43": "Gd3623BUjDpfhDsKB5s5EyfZExTS7rcXbre617Qb5UBwDM7n4iJNQYaoNJk6NW5ixqvqPXddbzEdgvbP1rLeprP",
  "key44": "3143xefiJdNcoYJ5v84PH3uo67ifu3jyg1Z5X7fQiNBoFqo5BVEYsU6rSBdSS49KaCJD8yKKKzogSRFPVxLbshX7",
  "key45": "4eUFB2giPEEFMGxxHFQyC5mcHkRW3W71us1wrrcjeGs6bAVSoGmahhvGMz6nUMNzWeTuGfmNdNUQHZibXzk7LZAB",
  "key46": "3BBUrSiLy4mWTN7QA8opwTXaBfjzMvxxbWQ1WZvVCRZ2A6doTzzSV4bzz1fPCuSTKK3n5v71q4PsZeWxXYDCDpMt",
  "key47": "2C4qbPbEcZpJpU4xqHFHtaCrMHTRGt2eCpGTrCkyKwnBXsq2h9jyrE5JGdCKLZNaDJG5jCdTqQC3svyHupodFTGL",
  "key48": "35KGr2angjuTpdEeVZUG9k524aXZREKkGoA5CH2sx12JKUvRjg1YFKRiaxbZYvSJtZZMGKKGSHwhiNnxcR2oyHK4"
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
