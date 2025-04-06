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
    "WmfHR53YqJ6sWd1g2CYZWSHesXgWqR3T3AY3j3v6utTLHZ7okHRQb69oah28wt4PaUniG1QedJVuhSpBFSkHxC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuWDjXvhCzi9qVwnDyvdtD8VtJYviNAmNExk4p5nSpesVscMVoTQz6wUyupeGcsVH3URPQc5SexZwQnsUxCZvym",
  "key1": "36qN25n1hD3LMsY8syDo6T497gVheuhhK3exGu9zek4UbFEXc3wcg3LJGGJBu2BnMAQtQgtWsidRuMQxDDL5hbJo",
  "key2": "TBGD21K5PQXbmHNa3QSYLwnKhrnWzZafc7xWPghuYmUvtHHgQodTHP16Ye8nhjXpcj1BfHV51RJpyVkCpHjrT8H",
  "key3": "5NaZMEqpUPiYjEkwcegh4CoPVQYe3hptumjGFs3NrHxNnK4ddW2Zrbqr1DCz6w9iCAysNqDyh6kXHEhYFCDjdGzB",
  "key4": "4ddDdzTsXhnQKRadrHpsF21BkjbNgwZtCpG7WVik9GkSRnGkZH46S53ALAMweAaWAS7pjDnaHHikMPhV5P4fnKA",
  "key5": "2qtyEiaAdEcT4osk7YhQcS4npRY8rCVPxWeBkbCcEHif99Kzi85ZvKb5q66yFJB84W5eV5SCBqw48cCUennKxZdz",
  "key6": "24HCHVvcm33jpxnJBDLzJs7t6vK6vYUJRMfsbmcacZ9FUXrK7jiAzyjSWTzZ4a2hAqVoMAA9UpEGW6SAPukBqC31",
  "key7": "42cmPWyJkwJ74AyygD9A4fCY1q2GK76Y7TCzWdTxeF2UhSYRFeZs9m9WEVA2RBKA14adcVXJVU22KNDeWncVdanU",
  "key8": "44Mt4tSFMMmy8PZL9R5S9tF2C1PuHidxc1vjQFEZV1BpPo6x3U2cjm11dKKZaBvJPwZ53aHtR9F2mXo5V9jcvj7z",
  "key9": "5EiqX9TeCWQSt4uCzvnguHvJnxUcd9i2jTJPMCLAwW9niQ2uR389TW3VpJ77HtJzNjQhWcUNoyvcyEFPcAjw4WK5",
  "key10": "3Vx55LUU9uk5zuXANF9znSy7KdoEL8ANKQpfU4uNcxgC15EEpM5xvzLVcM4YzXwan1dK5tas7HiCEVGYbhove1un",
  "key11": "4MXqspLVbpnsZRVm8Mn1Zi6u3e7spTVaXWPx3Vef9xEpMSQXL5jbTumbof1DxJYZGktRwmvFGw8vmGpCZG9ebZsZ",
  "key12": "56CWK11ybTtRL5k1pMuyNXip5ppBMLze3jjWt1C3h2y7FjqtcDCeCq75zt5rXMmNZwjjkfkFZYCgtqYHkm5YD2WX",
  "key13": "58ybKk5yNxzT2L3EsxMjb9DY3a2QncSDgUhYathLdQz6TBgZ817qoDDgoB2xMNnBRPn3e2NaNbbrUe1yMHUoUTD2",
  "key14": "2dhy1ZipFM3yq3ruzuVDKzMpYw8GVtgMDcMb5xpzQbLzVJVRpfvAuJ1RpnxY4ByZe8jDiejKPrn2qY81YQNYo9rs",
  "key15": "39CD4mctRr3ZVdu4HFE7FWvuc4k83BzCRfSzYvBFCiXa2AnyyKJ6Sw2mWgL2bWAaec3E97io1Lf27nnFA2LfrSXE",
  "key16": "NfRiKygUk7n641KWkJ4Q5pLTCJ2YTySz5jkZzq1bi5My2JYESE1vUMV7PFaHm7hDS4qqs65TCeZ3v7JJU2WdkFQ",
  "key17": "3Y3WSxu31iypTma73Z3qe4XXmghheiu28kkoPU3PhFcDFGBtKkGfKXZ9JBpnExePTHK4cQETkHgFifYhoFiZEH9",
  "key18": "3nzBAuzeJBBDQ486mMqtk4DZCE5KPppqdTQ3TeJdcZYUuxfGgMCn6mKiVw2yAXyvpftNyH5ziGZ2smPcphKic9ne",
  "key19": "51Kp1fRLF4ejJc8YJMctk8MSX8n7AWGSiK4owURKBHrksarmMNgbzmo4goHDnrBocrpq33Waqeo7p21f3HrTBv53",
  "key20": "Ve4sDWja8kph2vWNs71eUquetvFqWukatckQZGRfhVKfev8zg1h2fjzZeTdDDHPStVQe5hQ4RxUcjyu5E1FyrsY",
  "key21": "3p9Ym3Amb1Yggszrx6yxnmEWm4uohSKnHogafLYcpfWmSiNq3CJv5KR7HjM4w7Z9smwemkHzTSvd8a23eL69dmfo",
  "key22": "4mj7BHG4nGJBdYpfhtJjgqauBzzDh5v6hUBqNn5y5uXRUh3nERz1AisY34EUJx1gSQfXh7A2YCS4h6qXsw17Y3YM",
  "key23": "3UScbg53kbJuB3BgXDsPyCZW6hzb4M6MNiC21rcWC3SqA4bo3nFijAGfxx8VrivazBNLEHgvYLSDPLcbhwsc2fia",
  "key24": "2XtL7vNqQHNAvXMYktHpXAsq8WgZ8j3nfdq9wpMnJanKJhiVoGCFjAmNnnbzEX5KW6UyRKLcGg3vQ6MPDhGsmPUN",
  "key25": "246UvEU5cpFKAAriYp22rmLo4PapjszDtQXYPSXKgiAkWZs8xupU8sw5ocqM2LcRNrTBLh28ASCf69ACeZJq2hZT",
  "key26": "4HsqEGpzDSF7FJ8oZDpwvwv3HbaykJfKsShncM1EbFPxWfcgkmHjnsQF49dNyv1caeMsxMZ2C6o2ojiyYQaQq5x1",
  "key27": "23gZkBDYestX7pkn85oW2qsJDxvVrzLxZcJkJKwzRu2u1eWnZZxbif2Bou7iTr6ffPSEvVFA1qxESXTQZuKNFgSp",
  "key28": "4EegN676uFy2s5cwSqTNJJiXMZKu1dwv4PikyXWkWGv6Fe3RJXSppWMPX85CEyvUVPiBzmrZLsSEYHRksbeMPEBQ",
  "key29": "3goVUCXnKjis38mt4iVVSAknGW5CTnwqHZDR8j2bt3kP5kUVromLZdJQ4Eyu7jmZsAkfGBwzPvZ85pEoP9vmYgnL",
  "key30": "5uZTDs7JtSazP8t7WreUGJr646ucBNghyZq84zbfx1oWxkCwni3Q7GnvPYMFVBTR6CdMbzSgE6VuXHa1xNjSiY3M",
  "key31": "3kS8WFJxbkmFE4UAJA2Mi1cx5aFtS5NPFMU2s8U9vwTDhVcBznZAnMa6g5gNE2rPjXhYcdJDzZMDNScDNXkHR4t8",
  "key32": "4Mb77ixR9DaWjypwf2p7Hst68QHqguhFCS3jvbxSWGLWEFaSfuqf4qsmbUgfzAdCiFaRmRDpW9UCrfYkC4YvsjRD",
  "key33": "mWjQhUKDiArNzYiFmaPmCi6zrNW8mXzCrctxCLosRZEvWEG4m93rkmxFhKhFdPN65cPZinbqxGAiDhuD2zTULMu",
  "key34": "3sVq9hC2sHZzCnkr9Yk1eXR1cjHx1ddKFPurqBPadKCBHe3fdS1eUjcb7BhTMZZxh1TEWwkfs8vVaBoUEAjaCLSC",
  "key35": "GbEkD1NKfcTEAiXbAQqFTfgoDSTBz5TwCgPN4hX8XRFQy7ys3ABoNcd7ypJByVogUMxRd4idRDSkhbYGPRRT6jW",
  "key36": "3Rz1HrFxUfrmVhKYcAArzpcvjLhrmR4ZJUA7q1mQ7tLc6TDBAxcZDT8YM75zZujtLzt9CaxFipbmMh2ohLpEPF28",
  "key37": "F29fhynQME4cgXDF7SmQJTbVvnkULZbkzFqQkix5XyeuinNAUk7AC5thYgV1xMDm5fZF9JZuNBHzWwDxkF4HUbQ",
  "key38": "5a6DCJLJo6dn82Qb5QWWmx2PUExrJwr3bgHJ7nzYEnz6Ba34f12YcgqNLta6qduRJP5KPNGN23xT5n4JGbZcjv9A",
  "key39": "zViAQGbSqQEaRDBLhZDJuD9bWt4gvrL5hw9gc5qFGAyhhypC8mubun8uhPJcx1NsFiKFfAyAiBPsX7yAEYFyjxL"
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
