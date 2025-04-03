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
    "2Emg49UqvVJM39szZGajT4YieyPtkAufM7iKYrE4TdGeCXnnpdbFWgHNuZfCKZySWFHdhMmbeH2fmqciWhZJGufL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39VQ1V34veoc9PPET42RKmYMrYPo2GDVbsXfnMZmhxbKH57sQezVjYc1BNJyQ3XAFSo9zst9dydjJHeRrdWQvrod",
  "key1": "49erHagbiyPUfFC1vxZSBT1LvRkPxDmw6U54c4dkTb2WiyFGyzxH5T7bJ8kDq7MjaWU22KLwLH5bZmPA3LaJRbFQ",
  "key2": "o3FCQHetJQzKtC4FSrqDZZpxqZghrWky2JmYDBaHLYVqGSnkNaAYpNf6HEWCU4EQDFA5QJ88UZ1eJTkXhWKkYHW",
  "key3": "3zd4pEvd1kwkSsPne86sUa8f5d9zUDgRb3RSgMyWbkrxeYudu3UNLRFcWPtUENBiDQcqBanKxHqwFBBFet5dTUoS",
  "key4": "4q2maJAXwC8Qqd1B4gCnxEbYEQcTyESSR73YF3xMP8WvP6YLHd9CUmCVmbmTtQHjDnEUt9ha38nKP93QjHz8K5nU",
  "key5": "9BQtzP6B5cEe7Jqkk8zv5DzwgeqEksijGfwVBwd2os8WcqrGVcFWn1gQJwVgg7RE8KJ9PY1kySSJ2E3SyynFS9G",
  "key6": "5N5XcAJRavmhkLtY1eMkD8RYotYmiguug4ZDvrjUriie9b1jXGYiwnLqdpQYPCzLMSFhCgRaaVWHVbicFZZ6FhRg",
  "key7": "44qKGA1j3Le6EwsuHHgPw8d5QFCvj2CTPpF4Du4TtTe4MVGFEDQeokKoHqvzpS44zF3X6ettkohVMfbyc7RHppqD",
  "key8": "4qkzuFn8rYmagvxGdwPWUGjihya7oDufCTUWfdb3WfrQCUu6HkSjByRfhDTqqg2XMCjFpgcw4KDxP8sxMRGoguqM",
  "key9": "4nL74aayZFQocF7f4uJwfWeYbLajVZwrxfS7HHXCpht4pmmCY7C2wHUvu4CDzDK8NoL7MT9CSyafAxY45e8PWU3c",
  "key10": "5kYtP6JMCT81qeQoi86gBbGPyWUZA9tPY4NZbUFY3meUT2FRscj2Szo39eHejimd7Gv1pkh8odhuc2tgoR9D6jxS",
  "key11": "5rtH38xuFyJXH4sjmY17P7cgJFxaQsc28xEaE6TgrjJVoq9A3VNeReB6Hp25nDb15YAeaa2xeGvdKbrNjLGVizGm",
  "key12": "kCzEcVTHZcDeXY3pD8QArtxjPvWXPGzgJS2ha9CdGQxzHTZS17PUUqJekQ1kMBCrkmCKVkfbTDJKPs4uRZtFPhe",
  "key13": "5jrDL1hRfE6mWPq9ZEofB44jBvggtDpRAFe8fnBZSKU71ufT649pAVJT6DWuCPgvtDDYeNCAR7HrQ9QrNsC7KRYW",
  "key14": "y1ERLYm9ufcUbTf1boMKkm72qJ2xPbEADVP8yNCUBYntYQUg7G8LLDxZ9nGaEFoonumPwHUd7qvY3wEZbZ3odgo",
  "key15": "49i8M1QRYUP3KKP4LpArgLctruZKYctwomvzZ4sbW42tranzrPQnpxo19QTAZqRPXwFK7Zb2aY741zkpNvd7M7LV",
  "key16": "4apXceD8UFDCDrommbVcUn1AbAw2XE6kUj839MtF1jtFfXAtX2HhoUv9Az7iF1vGUgnRrTCfkRygFqfZTVqoZz34",
  "key17": "4NH1z3LSyUvDSY7ycFXSoF3trPqUbLid3eiSUrvbWrqM6ZrWBnXYL7j5n5uzWP11MxgiU5MsDX3fRFisSKnndfTz",
  "key18": "5vmGw6nMY5FpQ1Y44nbeLwf4k6iQFhf58wMFEthTWrQRnxojhfBf16vWBXUCpptPtoP4gtUCxKCuRx84eVti8xeE",
  "key19": "5hvdwbjowj8ut47zRkwP9JTFo82X7MXJKrW12Dzj7tz3NauNpT3de9ms4thAJsykgFzYedN8uGDfLnJiFoqNCU7z",
  "key20": "5TRVVxt78YHAQcLKMdYgvQFMP3rVaSUHL3CGfCKHUnAiXoVo5h4oJjwaNZqeZmqqZ5q8AtB8DNanPqmuX8AhbLPX",
  "key21": "Yz6iEjgAPy35ZsnYRQPdRNp5R7T3GzfuW5ybWX7zUeVE55E2k7csF8qi9udvJWiN521HF5ps5m5uMYS5EteJaoA",
  "key22": "4KVvaNHxXaD3gmFXAfm4LKGCGaQcTSFmjVbNousRrE88WYXW15BZ6FDy1vBfATJWdn72MQFKRcF27utbiFpp7GTG",
  "key23": "3bnnuXj6KiB7U96gfXAGQ2E9dNYqEBmWeeE49TrHJfdUPekLieC7nsSfENj2wVWDG5roR2njXckYa8w7RtyjZD1B",
  "key24": "5oo1YgojcPJq64TKj5rujdrNFECATAhjMigEUpDt6iaJRto1h446fbytUR6Xyi95PDBhRzHPXSzL8T14itUoUzHM",
  "key25": "5tip5orDJLeoyZgHv1mRyYujtyJ7hpFT7MD3aBkmycjV1PVMqUhgwdkwsBSK4kCdzeafaSoS5RyRwUAzZuVNMJT1",
  "key26": "4zf6EQpnfcYX9U4WESoXiksaBrgJvoNoyVaJpZrgGJEEkTrqnYygGydcsLUmcyVWjPJv5gCDZUHDBpjXqvkH79PA",
  "key27": "2iyjn6Qw9YRVGiSKFVPmn4kBiuovRihjvvEHK6juuGoseAh2EiLtShYZUpRWYM1dj8vnJRF8626FcqqXochofjBh",
  "key28": "62Ccpqak7vK9Q4urGtMrfmZ9rgrektmjSh6pg8qNru1RrhQEcC66b3XnV495K93vmkkY6YopdCuJtR3R7s7nx14M",
  "key29": "58HSSdjZm3gxHCF7JLC4U2cw7QzBZ8BYk9v2rqcoyxsz2hECXoe3nGmkSvDWw3GcTcj4Cjd7dMH4vvoqoSrrhDYQ",
  "key30": "3DtvvKvLDaxd77emPrUgRFTWTPShydQxNexnYgqQmQpxhVuNGCy9bAU11LmqrfP8YpmyrEpzGgn1kwLNrogcTjQy",
  "key31": "3zXSvbpNpx9RvtMfKYM7kYQBKNtiseN9qXopnz76uw1r9FyCCxgPosmRcLNWpu98ErSnentwC4Yx98KvmcNCCkZW",
  "key32": "2X4GYcoUF3fc7F2yZB9xWeS3yMRyxT1fMjmWzsyW1kZKfddkeNHefyHMqwfBSdDzDo2z5jWXHNQruZK3NEb9bJMm",
  "key33": "hqapQjmPxuTz1BpthNSUDzXpQXPmPTjPf5KWNszGtZuf4BhRUTkghpLazG9trKNRj8TMdvXSv7tNbR1JY1S6T2u",
  "key34": "2RYjD1ZCHn9ap5YsH1XWWkZUiWYjY1GSs7cqdBBMfhUeKG5BdHSqNcKa7p9FephhTKExWtD3QVqqXn6wsKkTotHy",
  "key35": "5Q7s13Kaw7mtjMYo2pFbE7iQLDrQEXAUwoCz8PqmY9fbpz9nowjenk2XZSWTEJtKmpniWkirdQcPSttwomBWvxPp",
  "key36": "42gaYZFzZuFyDiCf1uF8g6nwToxjaPbJMPKT1uQBaSzD1Pd2R1AMoAwM17ZbUkY8yx2CApB5RVEr9LYvgSEi9PHN",
  "key37": "53AemsNBAdMfWfjYAKGfxe45yi5Su4ptUyWSyYov5yZzCHwKcsgdzVVJ9WAgrbjhMXSBEjuMb2jefoicU8jZUU42",
  "key38": "5XU61i2PNStE1vF1mBF34RRgLw8d9eKJHyLyE3EF8Hu8dHPPKfs8sGrNEAJfgx1EyQU5ByGaUKL6UC9FSJcnJAy3"
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
