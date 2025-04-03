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
    "2cMQyJj5zFhFYMVgraGDwMo7QSufEx7AdJ2ZHwQJDhPtFJx2p4aFzuqU2HhTLxpD8c1CJvL7M9afnU4CqooosKDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZ2H5JrDEMceybUjsgLKjsXBauMBAuScumCUpMkwz62AYQ3CYS72urrxDdMJCC8UTjbF7pZfk8QYCf3aBmeKUQ8",
  "key1": "3DEpVeVe3YN1GNDfFFbwWktpdQxmQAkCHca5LSCEAw6wzWcC1qV85F4kxi1eomub5sevdzB5Tn2iLSCnACcqeKNd",
  "key2": "4jX8sYV4QPAwK65LgPuv5GGG1g5jqJGEDshyvqxBCHreeJVHZaS4tkzFgamLKFMaxavDCsYKBgT88t1FxdtaqkTW",
  "key3": "wm2Weu5fMc3oZwn1SS7fNuSNaqU8Ax3VSJhdGDoKV7CtEG68W5eLqgjV7Rk2uvgxKo9RD2jkZBCMgcitC4JxPMB",
  "key4": "Ytohy61Nn5sYvmhvyuYek7GjNA9djUVh5VofsjYEQBjFyDPacMrNsbpwNcW4mSMLDXF477txzYAVha5NnWnnqeB",
  "key5": "4CPu6Yb4oDJB1ri3pDaLyFsiGycKHscyBV1rxyog6dUBYa13byFmt2zrKNNa89kGezC3kcSRpxVkuEP4nLHMgnoT",
  "key6": "2LBaDcJoUAEurGMsLfdLX37cMY633yRpySUtPztjoDpx6KTnsWRUaufZoLqG7Un15jsdftaKZRASjJqhFyNe39gi",
  "key7": "2Hftd4mzKFbnYoRffGL3tGePRNurNHX2f7ixaREKDTspUbocDEfPnV9LGdona19vkB6xQCF1G8RNWMncSCd1J9g",
  "key8": "56NDQqDMi2gAJVPMt8QeQ9vtKpaSfSDvohr9CN4mKXQ5g5qLxYHWH2vppZkRNaXuTsH6yY8o7Xo2zpTdcUPqvVou",
  "key9": "frHSsBA3p9Qj55WDDpNMrJnLc2NGguXsjvynT4TNeQm5p163Wg8tH7TR7dvrGVwPjv13AwZHX7UAQkvMtdiQMBa",
  "key10": "55saGFmYtERoFkD9eCXMany4LDejoR7URKowzPSMxeZWWv7AuLpdZarh3j1d7ehfPeMjZ1iQhAGYU46UVWNXoJHb",
  "key11": "QyyykyiZqn9XB75SKebSBvYmMUwAUC6bMYRpVUTeDFsHNYdDhXspotWNwHVUdJvKEqai4Mat5Gnk7wf7pYTzFLK",
  "key12": "3EHZRGpqbzAkGyNAGRK45L9VsLm8hTo4fgnm2tWQeiJeHtLt7QCiUyaeUVhqLJEsMAV3oPzcNCyTAhmZ5FkxUPgz",
  "key13": "2vcrT4q3KQJ2NPRtKa4BNUTk44yNqLKd4PQVVg47W1g3iAtUVqA1Dgp94N8A9V1U255YsCNy4BGf4SV1UDabcQoL",
  "key14": "gQkRi3ZnA3uvd58BeozN2Qt29Ud7sTvfDKddq1jL9xg9pD1ndQFVugDP1UxyUkJEMaAvQBRpYnJt3r5igMrhwmU",
  "key15": "5iAeoEjnUQzjH7gQ7M8dYD9nQriTaZGUzS7twYMnGMWaV9kNbAZqUMqczVoZt9TF3vpUquKjbeRmxkQG41jrCYqA",
  "key16": "2S3Z72WcgfpBJ8wU6MUUzGDTo5BPdhw68HPqQWkyEDwWEKP5Yjs4vobD9itbvZWfkq6DgVuvK6iUSvVsUJvsLVFh",
  "key17": "3bSbmRxjNmP26RKyANiCaaZt2LeJNyaXAtTryaS1g42FqrfFigLrBmqj8U5ezZX5JmpKinXUMHATTaKnXF4XBNZN",
  "key18": "56uD434xbpeCd3jpYJMN4YRgFokSuJFxpxRLhZG965CwGYrNg3ixQ5rJ4KUEvNXsrXQegtwugnwNJN3JbPKf7Rny",
  "key19": "2zXD1dDc9B2HzBfrszJHo5iNH8kp7yYGoei5NfniizhUKVzpwqQCnApBLHWQ6PMJ32oHXZwnLQx4mN1dvw2ZwfEK",
  "key20": "4g2yxk5n7gCocEj17A4FMqYsg8yvVHS4gkGjLrcBHjzUj5JqWpTNoj9A9J5xKmjtSZSpGnjnS9LthXr7pyqTw2s7",
  "key21": "5qnrz6GPLwJuv53but4UM81XcS5PjrnpwLC9zF2rivzqJovLKwMNAbhuo62yeP8jX7Lu2sDzjSUxKXkFHfpoXF8S",
  "key22": "472jLxiWjiJegRkVqrFKcvPEGpEvLGSDNnGaBA2f49LnFQg1Gu8qzwtaiG92sM7sffLNwVU3QVP9tHqLFQt761s8",
  "key23": "32tdx4NhqoqoVkz2rNfTNZs6X9aQRvGkhUv8rmHGRpiTXFGKSngDKv2adMQdBqv4xNQ4vSpNkU7ZYkyKY8SWktpz",
  "key24": "ax3HMMNn4j45YB1UuCSG7ZEUEn1f2VW9cWXZinwKwL1mDYqPQguYLEgxXgddDJYyKPqba52ffvwfoTPGQutG23M",
  "key25": "BpQtZ4xtBsLN8u86kCPugqyo52W3Dr4CeURu8GMj48Yyu5f9HgVVscgp1Fn7S4tjfHcLEmotEt3zxmDzVwTA1Qr",
  "key26": "5MwZ53bkuVnyN1w7VKcxq4Lkn2DnqdbAW4xZSJscAtUYJKV6iKMC1vCKnNvXkiQnxKGgWqGnEfsQoJhgz81qHpo5",
  "key27": "29F6o1og3ckSLardb4Htu3eyPaKacWoGBSAw1PLmby5s7UXZ4DgXEUb1t8JfW33vHp1P3mh9mH4dDyHxN6WdEQD1",
  "key28": "2QMGMWGhymVVtkz46iiQv9zhNSwkLEaW9GuAwVdM7tRNqwA4uT9tTGR4E3hNprUaXYtJ5ExPde4c6emNtphCP39M",
  "key29": "3an5AXWuBTkcDFitFwss9QZu31sftowAsU6wdg2w4XB1u8GhjqvjJHa6T7fLRMMtGvX4GFPR5xd287QrH3nknCj9",
  "key30": "HiFhtQbMuduLqf44cA7EA2vYdmjEUscZaue1gS8DXjYw6nHtQxVJcdc27wCr8fGxPTVsZmgA6PgwT8Wz9VT719b",
  "key31": "ajojKA2XW9t4oxzi797is2zMpE2VbvJVRYJ1HAz2FxBy8RjmxUZNtbXLiFKZ6dFCR3aeR3h3Q5GxyAnbGNBKbTL",
  "key32": "3f892g6G3R6ZwNPn3RgNWUdjpV4UbkaJZjjh2eaJ37MVhECcN7yh1p8kAtjM168WPrYxRquZqnsEr6mpKGr1jy4P",
  "key33": "5QwDyCZEFx1mYfS7qfshfv5ypQPV77yKkJMYDNZ7HdHbrsreRiEQVNxyjQ83tPQNwe6Z9b3xnX6H3g4bkT5X9gZP",
  "key34": "3DFDUdiAQ7NycDMSEFFEZt8s17cCgNfKjUgB7pUfUpeHXUbt6stYr7Fe3ZT5hM2uWG2kCyEQnfjGKZUohNBhZ7QZ",
  "key35": "4uiM4jzC9D1NmwExwmB4Z9hpCmCK3ffkz3ATGc8uT4MXe7QyP6CRYv91anUaiUNbG9CNGMYxFSveruVK6oaTJgHA",
  "key36": "26Rj7XJAdqekoZHwYL5jUoaif52XHPai3RuZ5aTtTkG7Ygt97F7cYjRrVJdZ7gTGfdqxSfU62BmAXHjvLNCG5LKx",
  "key37": "3DyUxbn1bBNrEnp2t1tKtxE3C9mvtfXJpkjeT7gi4G8xX6W7bZ1TqvTDW8jWkaEsD4gRbhsNEKG2LJ34TC2ptotd",
  "key38": "5E8envYWjvjrqXQq9CwuHCt6nvq6pma8dRvjKkH5KXL3EaZR68cD83KnaKbw5GMxnPZEWKgEwyUUJaPpyev2JuCw"
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
