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
    "4JmPqPuNMnvMVWQPnuaJ3hLxSBzeWtsrzPoBYTxkZm8G4iAUKFjPfrERtyj3JfNDco6wBrNrM6srWHLgGNvm34p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnXQmmSitVoic4aCJLsGfQKSbyiNYMXGBqRhuraRsr4GajYvSBCS8BGrhHW7tWwUzCahkbPrDRPxorkeuwjuRSH",
  "key1": "xkKbrHaaunYCxrxMSXRxHyakP9eKVhsY6x4KVCcGHJcZRKJg3jpB8a5mvV7dejzyHdpEKoCGFQ1CGpJCfjaLEu6",
  "key2": "3nNaWftsfkw2h3M62zFSnhWLkgLkqUuZi75jgRvieZwx9dne9YaZEPcu6yEwY6wkpZocoB914bca9AHQm6SQnMV8",
  "key3": "3Vv77VddScFwovB6yGLjGqU777q5wjqwuSoYAwhzKGETFtr4buifBazkDi6Z82bGaepbe6Lufqk1aHKMYTmUQ9vc",
  "key4": "5y8xgtisjjRJuQQwMz4bGEPReHyM9yjdJF38eaZChAiUm4Nsz2MpA6PGQUuQ5UrSfWFNDg46jDHVr7fNAnybJMNa",
  "key5": "655Kuy1Rnuh6nXtPRsR6AvJyXbU1opA19JxWogaeoPZoGxBwWfcUJ3urinwH9sWKAY7ZfUoUgSzdbCDFJ1UzxmWq",
  "key6": "5bMiTVpdWdq31hVKf5YhT9euxtxnrtn2wa47iiMAadpAD8yAGmMdBMg3nbE2i92KqGadeo5nCyUyEpptmCx7zqix",
  "key7": "58qqidxijxPpzDfAnSzvd6D7cKn1JAsCzSU9TgKsKyqx4BzzfqBVVdumSWn3fC5waE35g2w9v6MyPoEYehTM2JSm",
  "key8": "r5UDJ4t625FyG4rDMyaV55r7gvGTJGj15cEqcRnZrQVgDCePLFpBvhwvDReoU9RqTgUUrvgA7tCqroxTnCUcDk8",
  "key9": "3DfhfwxSNyZq3rgn8p1eEaRsmJbx7rpQ1TTJZU3KpuTQycHDvrtqgd5w4AjB1hQ8fseQr3TYzJkKpsMzNZgcjWvj",
  "key10": "5DxkToJG3TMEBnrASARSWkZdCM24Ukict21xmMSXCYVcLmWv79B7aAEVGrb1oJYYXr31sP6BnaRB5jW8uSYUhuZD",
  "key11": "3knUoFoEkzmLGXBDSZmPaHWSmc3voW6EKgbeZeUGbgHDB1CCrwQQ957VhRSzVo7S1U5a8hqg1X3amTy45R4MSEtK",
  "key12": "46VickMbJeYjSyqpFdoZc8qDbjJ5LvK1VUabkZQqEYW27qCyQp6C3xJtz7cFB9GvqL8KW1zjdAceFnqdzTwWNtr3",
  "key13": "3R4bM3mfWrQ7XaRLsr4RJXfMFEVyiad2C135bFwegRWjsRfWHsiA6qYPY8zwTzDxxfhzoRQZfY112CJpQhyv4t93",
  "key14": "AxvLMYyKLd6g63L7jBtzfZEfq3Um2xBRHbJvKYaL7YccEak9tZzEeEHtj1gVJPrm4uBGZR6pHH7wz2GLUNDvQEz",
  "key15": "4RemErPKaGU7bR5e3rxDPsUPAft6cWmjGGs9tjApFdse8fDBqijktpgTXKFHSVHEu6fw7dQzcuxs5rr1yXCA6HCn",
  "key16": "5sNUHKhD7YHTaqJwk1dRXxS76fknecUwv54pe97HSerRJ1a4kvC9nXHeZRS9vMKRiAt9BGgxKyis7fucSEH2x29x",
  "key17": "5wiweFwS8UQbCGpgqc4V2JAGgXUc2vkAqJ2HoJX3M354SqjEwjEyDC4XWmmT46UVorM8bbkYdcQZLiSjgjLjTu3X",
  "key18": "3tvZMaUxpRYjkavzRRRajfwsT5yTFbgfZrKenvWcL1ZETbs3QiTnPv6xgcB3kpfmiWYyaaewmDKDhk4cqNQfwEP5",
  "key19": "3oUhCh2ZMwzGAj8HH7RS5tz1q6wQ5KszwhdDnVnJwDkbjK6DTtG5tFgbm4oA2D1y1Pq3BNgphgXRCsEajDjZG26Z",
  "key20": "5HVAdqufLuKzNCYMeghARLGqMaVxkKrezjewqvehEovwRcfYNsy6pBT6AmfSS8Mp1y8R3k8uU9mWKWzAgAyFreZf",
  "key21": "4z6wnYipzM2TCANif5jwfvX7edkfSqkGDmEdcaLxN8EMYMHpvVWPDxmG9QB1ccGwYxqSESAoGAtzG3pVZcHjVYFw",
  "key22": "3v6m71cDuco6QEbvdWCWuYim6GJLGs5odSzvfn2ZY2K8TRCR1v5CATBK4353JN8KpAYMX87QdPvpmuxxSxwXBERS",
  "key23": "4ZoJ61dEpwj4AQCKi9wpJVT8k6KgEJRU4KqG1FaWxckkfm64pW7zAH96oLda3WhPXvrxRox9hQZ92aYX3WEHNHJ1",
  "key24": "5ZvpDRbQ6M8toqg2n3P5vo6ixA2mkdkixZH3EUhSQqZx3JxP5xu77h11ETsZb3yX8kM85eQkmuTgQQhqUchaogHC",
  "key25": "FiVG99Je3em4TztiTKHTKRuSZYkwb29mePNqJv1PGXm1kFexysjiTdtFh7JszUDMcdZbzwU2it4Do9ec73vGVCu",
  "key26": "4cBsw4yFAoiDFhZJwGddQ9PZFgnZq836VGvWSCf3SBMJLEccEuXipUxyg1WhAMwE7bdhvskUgB3xiHprXatbCrUb",
  "key27": "dBgnYJV8W2UTc2EjbuKLhJUdCjT4ZGorVrNJUPsWBD9sad7ykn7SPi436KNTLzUQ7af2gJNYQwbj62SUCMT14GD",
  "key28": "5nFWKnZDK9RBED1qVTDEhRuE2QRX9iMDgAp1iKA1gCLg2Xbda6q9naPSXMcTtzAWmQhmLtFCRGo5D3ktb5P425Jb",
  "key29": "53gCeeGC58a4DLrYt5s5LcBEX742Dn4GZdwG7cEk3ENX2eQJu5ZfpMpLgebDDrC65oXTk82TtUCatEarVG2wfR6L",
  "key30": "33afRrCn8hicNMEDTLG6RurM5U1KvUXphMubQ3gkbTtEzyQK2GmWrPCrgEyzU55XTuBBAdWwiBsi74hLEG6Xxag2",
  "key31": "52Hx8hFJWgYRwaBJXYLbHCZQWWkr65cux6YzT4fYeUq9gEvmJ3XKENpUeLFMNivrMHepNRHVKWoHPRw3Mu4umbpW",
  "key32": "4qgRVL6ZFxxCXidnS9K1raHE5f4LEVk8MbkjuCV6th2HBo8opMuRRNB26UxmREMvdYpVSe7oEcb5D25MvHbEh7dK"
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
