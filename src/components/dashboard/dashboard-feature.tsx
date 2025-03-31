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
    "2aQGyRtv4UGtou2ibTNevomPWnuzvgoMQwNpZwNK2HvM4WgtsefWogr2jfMih6MZvK8EamcnQ6paTSyK4FabmHdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMXbyD617ZjE6mtsXL56KFpR3GGNjg9RVP1nhB6VgMo4AdurRS4dCajhBy1v2rN7g7JuH5ZDfLQUx4LRo3uYLuK",
  "key1": "5m9m44u6iGwyTFEsXfubtcG8aUrQSpse7Kh8a61F7KQErHbH4VTG9tY6fHgHB3XsXG79TfAznE5rDwDCQMwSQBxp",
  "key2": "3ZAv3XkAdxMkyRAm1Vz7C5FCf7JzoLNJ2yZcUWc1GEdgvMsernLx719iLUwD4GqHSBw71XFU56PBS2oWM5WwzNeK",
  "key3": "5uiehC6AUnz4RKfZKzQN9cCqhmttrFxk9j4QmrD2oycYqZpFdRH4YLnJKf5Rq8HtYUxA5dhgafK4sqL9cgJ5Wfpw",
  "key4": "6xNxEkjxUc5iWTvpi8rZ5SajxaEwhcEBF2iUXtNF9t7tDwjctYnNaUJ13ensuyns19LETKGQLdHdnMzc1HTaxmj",
  "key5": "4iGEJcGTbZ4u1rcCFNHREXDCwLLuPU6CCrAkvYRmWorNDH9aDxxeLuiofLYZivLTnbQJKhJvTRg9cyLEao3nhP3R",
  "key6": "RDp37nN9PgywYj1tqGDz5WsJBHUdP5fuFikXxGfPgCPpftnTo4uxDAHVMunCQWWbLAAwX4BfNybfp2241TwhfhM",
  "key7": "62DtBVfjWkV1VperxgAhtUkmiUmdxxNHQ8tQiYrdaByrZc2viVFBBnzjvAbZYKPrxGmNad8cXCCyb5xbcbQYSXgR",
  "key8": "5J9mskSBjW97HgoPFg7LS8c17fQH1sgte46CUUjvcAhD7zfq9TA8TqLSTi4zNgXPhfAvJe2gHAYeqat4YpHZ3uFy",
  "key9": "TMTTDKA1WoGvwBdK7JwD4h6Frymsea3JzgFGerzVGfi5bM63jGRaJ4jexh7Wtv3kJ6T2VJcEvmhNUJS22ovUQth",
  "key10": "3nLiDDCSm7qDbxu8jNPhS8YHtw17c2BsQR3ZLATDsRZkgv6abbcnFrqkMYuL4tmpLyWJz7CztXxK2JF7geboypim",
  "key11": "5m98C4mMZUyERDPsbNaLmQdDvuP2V33LiqUYUtjCUpZhhH3MX4ugPwuz4G8ZuGpE6J4kgU9eT6SbtTtQE7VmXoGn",
  "key12": "4u1UgHt9JMm9GWm2cYSsBJ9bygKihZ5Ssk4z7AuwbqvZxzJUiS8ruhuFxUkqcWkPs36DxExptdqaGN3BzxZcq6Mt",
  "key13": "5q2YTd1wXDBQDeCFc1w3GRq9cmyS8X49FNWpHVdyFxTbZtKhW1ayU1KBe6X7yMVUZhGgvwuWNJJUyT6bRsyxn86B",
  "key14": "UU8ENdG4PCkYxT7mk5F1JXroAeau7Amm8X7YE4hU9uYTDR2WBZ4sCoRLfPyYUKMhpvLgMX5WSkLWAxcvkVUPx7a",
  "key15": "66QpGVDWKLQnaxJpqMXivWcwJFLKd3QTxk95w86qK6KQjFzYV9VmHXcGFb7kW2MhpnGEKvdYyf3TiBNYjXgMxXvH",
  "key16": "3ifrYj9eEK7RUpXwn1781mdX6y2fyg8JXdCuRvKVQHyq3cB2kWGwSZqsY4iNe7K3v9RNgsMqVr61PQEFHLJQe7Rk",
  "key17": "59nYvceXMb1fvmsSW5dK1wBsaBCW9oaX38Ymywt4WMVeC5EKdW2PCfdvNAZ3iTkGcCr5prTeqKE6A93je4DP1aK3",
  "key18": "5W41HuJxkroeKHNVVRQuuW3nEHeZKrDFSZtVkCgfeJsx4Bq251hjVLqGzFiZ3wj6sDuufQgxwooy3MWuBok7yiHC",
  "key19": "3KaEeuXUbN4y2gYi1tzPUstAsRE77WJwdu9S8TaBFBqBKh4zS3wRgmWeBtT5yFQrHk6By6HVqpHfjPfLbfgBrgaW",
  "key20": "5M3kCrym8TzfNSCvoGazYYULp9W9wo3TcW1toMK3tgzJBAQnQXZzAWc782p37m4cJAqFVMnYQhxJUHSsquivsCew",
  "key21": "5jTatASfHf3BQaj8Be471VThVsU5inhr36PYm2W6szM7fTgFgx5FMLgchoA8LPs4DhgKkWAg6hD7S1Torrmvf5cL",
  "key22": "4G1Uaw8o1nr8U97WgtcfARxpsLz36X4TU4D6dEH8QScmJDxmkUcmsw6inu8cNapNv2mc7ScAxnmwR22NoFtsCLQt",
  "key23": "4C6vEuK1z3e4hM74eSMy4iJxzQ1aQ124MtT3zSvP5WKJr8vUcs7CzErzaioFWFzEL6Fd28UnCwwPcNjtoEE6Wk5",
  "key24": "3yPhSsDYRSzVkz6sfUoAppYCKp6JHTSZFcwHZY2vUL4uXpHwJBSUPxtxtHdGBFuqeYRbjAfUTdcpVk2wSyrtAzZv",
  "key25": "2wNq7GDNAKK65fbMME5bnnDzZNPg2vXjHTg8brdas7MzXDESEGYYCEbfq3WDktdjhJnThc9u8CKQV8kmkkEx3XJQ",
  "key26": "3SVmYPdCYVsYb9UrPy3sjtZ5BEXTStH44S8pPzp26SUEyKBSYTUxpa57rcRhwkZSC2kXafeMUJ3VKTjFR1waY6kZ",
  "key27": "QUFkt2kEPaC9N6aRdR3JwFydEpwrujedauM59UVwDabcDgtEAonZ5djdvS8LFfvgytvaDH4syUABkDspi3eSQxG",
  "key28": "4KQMtqSrUEcwmg434frWFqnQmZGMumHfLRaUkP2HXi3NpeHn9GCXp5LwKkTRcMeKkamvKvnGNhU5A5EsSgpo9tQh",
  "key29": "4Qx1CyPuLx2PnHxaj5cXPhiWcNimRgXXMyQk57wvPQLptYQ974GUeLmvqmo51Da9pfNcmFQJxBwiaUpsLghMb7E1",
  "key30": "32CommY2KyPFUbFTh2Q6Z7UAnqVx81FTeiG4bEfKepwyzSPwK9gdxYvR99zHaMDcAQagTRfVtAdnZB6RSRMBgT2J",
  "key31": "4GXeMjjRguJLWXQPbeGxeQ3KZpJGEYBbhiDQckzCQQw1SoEzS475Ma4txw5ajegbf9icXe6kJFVgYx3ciDe5Y1Qx",
  "key32": "2AkkNXaDrBsNq5BXAXorx4KonPyAvF8mqZoNMTspxifKaevt28Eo3a2smTRm6NCXB9M6hHTzCZCEbGXoctTCf3yQ",
  "key33": "4tUZxjWP5RNkDUbPQ31YuiE2EUyQc6mqABDJ9jyQBWRm3JicJcvWwSXRhpcZHPQxRn4kS4XUAgeFSRQJ2x6yLuf5",
  "key34": "2riwYfAwzpr8Pkwg1diBieDLuk4T4S9qfQAY6QNqLKxGbU8CkYA8ewLvvermifqcMFRP4QbJuMV7EN7zgu7xdZHb",
  "key35": "2vAjh9uer2H11hP9uNiQBFzXYN7oxUv5q733FFrBUcQ9GATSEVQUbtGMwx1YCZhFh6rWEXgwpTwT2Ldn1WfbSN6n",
  "key36": "3ACjAgMD67hpfbgah1ch9QdCjLzPkZ16u2hnGqRjFZmrz8npgXLcmeiN7gQKWtJMECUWPEfoeHaQhZ2sj7rwRz9k",
  "key37": "3oCCd1JTX3YAEZgXFBcZ1dSKUnkAK28khxjpKqJqoDEiGP7UVo9ug24MmUufTy3fTxH8cjp2wkQmkwuq3kiemLM1",
  "key38": "4wmkALBN7S4k3vBm7DreG8hbTFZfVyUFFCry3HZdYs4MinxQSS84w3oCELQm35hJdJbaVtZdMo2VunmRPbXaMrRb",
  "key39": "4k8SdBiyLW1Bjhbb6PGxN3k9TWSQuWtgdX8TzTxy4BQuvohfMVgGsWQUCn4K9TN8H9NbgiENzVqGmdDSkdD6mbNg",
  "key40": "5p2BCYkhyUVep8cMqbK3raSHCcJPviUX2hFkaCquPNSMbB1fsXQu9v1wBWUxZRqJ6ETjyYEDQXJQRpeBj1wdWxLX",
  "key41": "nNEAQmJ8XZYrt8DDgTJAtQauapkGLouLsQ4upNEBYnFHXPQ5vMsqWRfJDfnWgYtCQ8grspceEHNkxFjRYCtiBmE",
  "key42": "3cEKMdDFQsb7sWcf55otv6RDz1H49rDN1ktAx3inPvN37C6LQF3eTR2QGmeTDQhcdDaMr5qMPEmiV5V5d3uATUd3",
  "key43": "SY1mPH8GWFTPyspc3ga1AtDSbU1V9vRRdcWWJ1HM4BqB1HcmhEtVwXUVvj2a1vZfp9FjvxkHiLvTcjBBWGPyP8h",
  "key44": "5Q58UC8ujsL4ZgMMBzaCvJX9ke3aNG6VQUpCo3kVfrE5B1LHzzNySmUVeSYuqJxaEbeqN69o68ss5oKYp8XjFccu",
  "key45": "28599ZdrHCwj614f4DWCeqSgiYmYiJcyiVm1GdyrUacfMXv6gikQEVyyT7545xQRzKN23ZiXJAx7jCiTJq49AMSn",
  "key46": "3DPPKeQWCA5Cqw3aCD3qydyF2CNePrEGKGQZTprHhncVApj5dapteWNkJTdk6MJHdTDNVW2X96BPRU1mXScVWz4s"
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
