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
    "JmKLhMskiWJ4JVqy4nk1rBhJwQNbtZKBgNJg2hJtCX9ECrXBCGRwnZhxxaT2U2HNrJQMj5VvkbmAF5mLrAooUHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3wELB5phvsCY5cpPMzyApqrfe8jT6jnP6siU71pYb934BmjHvcuPUd8Z19EVQ1xBkF1aMutVbyyuFK2TnWCPyY",
  "key1": "2e6rhK82bStTqUiMb2ZnZxdeBiNycjTqQkYzSwpAWSdQ6NHoZRUUERaFV2ZeuujeAWozDw8AhYKszJmGb7Hnu6U9",
  "key2": "23Yx4mw8myEq9p1xGNZwJHdbYgBXbqhzptF319F6t9swTGtJED6q62nhkyYmNfiRaiWs45dnCgfX3cnac5UsmRDm",
  "key3": "3ULFkJaY8TFcTjWRwkbfNgBkDdXTaBd9vmN4AP67QwYXFvEzRmn5zuRzEK2rcYsHk3JpVuYL3UThv5KVwAZ8zoRv",
  "key4": "2JsGBnJ3Np7gyR4PbxUERiqg86tdmuMRqvSE64vcGqjJvSHUMAG6L6daFTxSE8gaWSMXJsvy8yiJJ9TsdZACxr2f",
  "key5": "5S5jZuoDagfktJ66TtqSaPKhRS7Hi1Ctu7ia8xVWWVCySEPBL9n9gmdZunVMHpvPViHSQs7cDLPLVbkt9XCg4mnH",
  "key6": "dH8aRtFtmeDpiXp7viD7GNWYEK2wAyRdfsvZff6Dv7qMktSTac73kn9b3BnhhLgpzGFxZT6s6wLELZzhXF6DJru",
  "key7": "38fW8HACT4JbJdYnGSyQ9ATESpTPv9f8QtiNN4FT2WVAwYpGSRcDJ4UTaM1NYSHwXjdoAzptVCp285wnmBBS41w1",
  "key8": "3ZhULYED5AdZ36emLKyBsxvc5tMGeZcBnvufqzxEVgsS1418XjUV2UyKuiQ1CUmtHixFabdveFuUMfeAHbaBX6tx",
  "key9": "5kbLsosKQSgtYQuohVzpbhUTwZtm2RZcU94NoadCdnSf3Gf4yJNUErpirZC3e5FYxo2SYjzGVGvsBQkRv5PCqs7e",
  "key10": "5v42KyUQ6Ns3NrsnfAxcRXRi4CkyAUqqR6R2iGtUrkhYeVh5BGj2rdehVtnBqyfqQfm95iFUqeW28VuwfNWupQBA",
  "key11": "64JPhPkyCLfBPTo7SqFs9Jh46g98USrWCkKMCWGr1dHuayLh9xfxau23THWzycqYhE6JwSA8FJeJfRzJ6L8fjq3K",
  "key12": "2zJLgtMMmnf6Ca8YwKFEFdCusELixrTQPVYZ7CMkKTensJiFrjfrAzDqaqr4QuwqsQPRNC9fKGJsV8RfJKZZ394f",
  "key13": "5TkF6SmnmHnyjEqsh7caTs7b13w2ZEN72fhMhJkimb7AYCysk5fof9jdyqRbCE68gAF81bMNV296uMWBCavkDNX5",
  "key14": "4wdKK4ihjB4LTmbbLrmqgHQLfLFMG2x9Fr84G9KbxPraesapkXHxGhZ59RogUsrcxevfAAGGWYuTMBGsnmosdS4o",
  "key15": "4JbMW8m36A31ZNoKNyU4vy8L2ehcL3i8uqLiKTSUZihLGSXbmxqcMNbWnPBG8TgKR8phckuA1GK5niTajA8MEqDY",
  "key16": "259yRqeDwgYwNT5VYFCcLEmyJ9rvaeWygPDXneH3r6wUeEnn3tMjB58JnP77eYzeF8mcQX9rbQhJKubqwiByCpAm",
  "key17": "4ZMHvZby7cPvrsjCixAv3minxgrxtZQcc4gdPgGNivWFfQvnZ7ndXhgXHDHG39Z7yYgv7QUow3yqE2VihogZN8F7",
  "key18": "44Wp949smyavnpniUhupWtph4xpVNET4KenjaKmeZPqJsi4kZzAYsHJS5kK1ZpCs8sZtq2dRTHLhDv7WeJhnb74T",
  "key19": "54W7j7dwHgo8HjmeAHge6wfzXqT3ouavmKspKx9TAM19GntuCmXWyuG4W5tSSWP5deguaVy7ydkyo41JSnpHThwW",
  "key20": "5NPQ2P9v17bAd47kv4sDXBT2un9YGfUzsTRAG6HVrakFYWEmnfLuLyfEtivGiLZC2WsHeJ8Vi7dKL748sgXzSkN",
  "key21": "cBnM2KWe43aTkBiRhagqFCcHrMHVjxV3YVvXzwwKP2hSwEcjo3tWf8TvSW2Jm8d2sE7D6K2FsPuWX81MwYR31AB",
  "key22": "2AKBE2nGPiBP365HZVm4wZCaZ5N2CV5KsBvu5FKXUtEidqB3aFUXtHmjFbySJx4AwNaVPuG9yZewVT2NvcZyHaYv",
  "key23": "2HPCqTqi4b9XUzvJodZD3HELWFNbgQCUmrWa3db3LSx6eVzv3MjxwcwDk5MWtaZNNajGf5FQ9fm6rpZ7t5XDcbR2",
  "key24": "2PrJYYKuEZSfuSMbcpSjfgD1WhhHNB6rGSgXKteAY7MNBsqWWzRQqX7G8Z7VeTFDt13uK8FKz3jwpaEoP1m66uHM",
  "key25": "5a9jrnHMatmZbN4yL8QgtpBTbJfrLp5NfgMLyYEVM7RFoyUdqAdTuiyHmRBQZFJxC4PFHzp2nf8GqkjZT7vz1dYT",
  "key26": "3N5djp7jFvDg2ULLZBxERwH9ssy8nDMB81SAoK6ohjy6hfXrxRFMQGxzL6fDHBBhFGzBozBcKtDqJMA1NWz2X438",
  "key27": "5QssRTtfHZViJhmHPVGStgHLKY53Udp4nutETzajAprfk9PiUFUBVGpqJRB8zaZ9ysNcrW3sZT71cyknrJX6nABL",
  "key28": "4bdn3oKiFZnYFWRzHwwrz4MKPabyrFMsG2hxxAkqMnByZMrG4GzfhJZ47RgjC2UuEFoDQttns1Wex8RNp3PV8yru",
  "key29": "4a9AtVh3nKUU9ewQRzCTxQvW5XpbsovWRMABNeQDph35muF4FNZoNx4QLJ6Kc882TsXZw72WC6VRLocLZydvWTEq",
  "key30": "3Ce2SDhTGpowcL7jeb8HgrzdYUULB2wgsY7tmmmDKeCMtsYQWL2qDBYfPeZBrMau28nNakdtrPp4NyWNgXLWUpYU",
  "key31": "3nfTVbbyhuYK5sedZ45ukKsjswNKayDqkK7sLaEN4TeyHpgs2MswGgmhTgS3xnLDtsgwL9uEFbE6jnhzBLtuTh2E",
  "key32": "2bbEnjragZWnQXwPQDzRrJiWQJw5WSXKHhxtEtMk1EDurTeta5iGrph1AxTRKcZi86FDXrADcX3QorfLh6y1ANP",
  "key33": "5SPvmUDAtsJDMsR196JeeyNWidh97S8aSheWj3GkM8giuThzgapsyAg28A7NX71rw6LrBK46xGZKq9y95vETruub",
  "key34": "2Govbi3nTe4UGvB2J7Lo9eieqeVTkJXmUGZf2Y81sJZeLbHoXoUNckmD1pMe5oY3EyBwxaeciw7GkeqCHEcRvjhh",
  "key35": "Bqz2M9JDo4aYBUaNo2jvwAmEYxzCjFxFL5mCuAAjA9mEvvU2n8cbcVkULee9P1QAMKx76SfTQNLgmADzBZXBWPc",
  "key36": "3tVzabnJzBNRGkWYKdR4rKfwG4qjYb3NpXotY1TP2mfmtf6XdT132hwhgtaKFpjDHmkAHozFAm4YgkiKofUAJ8yt",
  "key37": "2B2vpuabWX8XDzf1Ro5oT8vPpDmFiXJBiodtmNWQf8L4E6zyM5t48wWvJuxoGVUKLVBMbzuW4YJh2fKCttrEQ2Ng",
  "key38": "2YLJD5irHv5Pvef4djjE3s7CF6196Bu1zYpfKuLixv6iF7SjjfFTARxu653Fupqru7tPsGek5hP9KCEpnDoHNJqo"
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
