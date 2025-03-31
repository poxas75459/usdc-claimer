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
    "33KWD7KAGoW7ez8HGAhAjSQyUqUX8Rf1h6GU2pHz3hPY21h1f4qUDh2ionD9epg4yQsaJCMQTXPLptAvVMQFEuSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JXSoq5ZZBeMAd87o5C8Tvgj4tGkM2XZsy6BXQMHc6vBywtFtRfUd1xx19CFLo2BoU3uqkGyN6yrq4a55Zz8S91",
  "key1": "4nghSakHmUVnEf7jfAA2YxKtGcH3gccXSsKczYMUwiyFU1DPX2pj4stzq9araDPp3G473CzYvLpNXd5R4GVJiQL5",
  "key2": "4VSss7RF7uWHmgySwPHEytPGx1oCRwoBbQQTGA1dcJU3hZPXfekV4hGE3etM7L1RHAWERUpuRaBK6iPMnWZx37pC",
  "key3": "25ZtJo3Q5at6PLZtBfDUqUrddGhp6oUPoVDyuAWupfEr6kwDxEF2hfB9DhiFyiKdKT8CACEb9pTcm9jiiJD6x8Xp",
  "key4": "3KKP4izXtfLCnp9DB1gkrzmAZTRrLiQm64z1XoSwMrCDGTCHXKf4qWYRqmDMafaUWLx1nG23jKn7pjab2zFMrRLY",
  "key5": "rCZcDgEKsnXv6cZdw1rMdAvAtxHVpY6ZFRSbBbj2wX6wU9coYyYCYJ7MHujSZqmBu63YQoevP4EvJqN7scMPz7f",
  "key6": "4uHHkr1nv5KxVs3SaGVVtnv2hgvzPpu6wtYmHmJFhneR58uGb1iAUf7AN9Kz4P2ojQ8a4jeTt3vJkmHELBeQngF6",
  "key7": "5M5WVS4ZN7cmc4T6eKWYndhbr2SzSjkgz8JMLrTSA6uRQ6fbMAVXdjXyn2nHkSwj8yR95e2hFHYU8GnyXfPkHUzw",
  "key8": "sSFLWCd6BeQtMaa76aomGLxc6W2bUtd8A88j7V5Ysq44BDQtq54r7iTAGtVy3hMM543xmc9L6PfjGMaXXpxssaB",
  "key9": "2hZHfNUKeph7HWXS1MauGDXcCHKHtwErg9kEEbutwbGPZ7ZAstfq11Ucu8KMpAbN3LMv7RBoDKjqcrao48egoGiv",
  "key10": "2vTcw8ZK8wRBmEVmc2ozhDn5SNmAyyyqkppPCjYQwELhsmQ8LYjoBqi3YA1bi9cV9PPCehTPVxRgiSeyi9wmD5pc",
  "key11": "EimEdYjMvDDA2v7NEy1yp8GDyt5UwrE6jNhJWehpQmhRfoYxQanNCNTpQ4497qMeyFwdESdwqQ3BSgi4uU42zTJ",
  "key12": "3go1dijh9z9ByAFABDEKWzkYStnhGZfmzSspS7nyDW2sfaEng5yxAPV8F5mCTzXqA4USBCSbYRgfq8XZApUCp3Vw",
  "key13": "3YCZpqe6H9siNZYsqgaHvfG6xTCTqDjGp69d5oXPmzK5NBzSwbTqJcSr2uhcReb7ZXzVLiHMboryNZ47ZTBN8TCL",
  "key14": "4X1v2Z3WcFikmbAEVAxi4NKmAxnvcYDPFkHK4JBTQtSnzNePygPiCXoQZe3sxfBuiGdUVEyf8xF7r1HfwqztVCGv",
  "key15": "44yDv8a2rwSJ46cxceV6tnchYtDqtFVFsGsEbBLRU6batTgJ2NFmq7VkepQ8arxenRVmNiMsDtVEod1gbbdWDf82",
  "key16": "5x4zzcCUtMBkpYpAnFTeioirs345ncx5NAS8P4R6StGhoYaR8Po2jYdtujLviSeV5iALYwEG9NShDgrzrqKbmxkg",
  "key17": "5K6HBvuVxSk59gkBGFSkMsDgfN9rwdUVBUCpJiVAJo2Zc9ig7UmsCZWjT6Xd2unTUW2crvrtQZZnWGJnLcfcgsQd",
  "key18": "32qneHY3SbU1KDwhHmwFULYJCR47SAmht8PK9ukd8gPKShkvR3s9J2dZKyAC6yTCBpgbawci5kzN9J4TiXqCose8",
  "key19": "2QCqC4f2uihXayqH5N2xTma57cwxtQcitoaXu2JxSGgLfB9iV1CBTvYsN4C5bKkNP85muzhGox5pWvjpWNEEigvt",
  "key20": "65ANQzT5RKucaH5juRSP9BGYC7GN9eza2qZh5EmWbhQ7xTmgDcF4eJhNV7BkPfvuZz6oyY7J8pJPcxqFD31MaYsU",
  "key21": "4nwhBPyN9Zafy3fGuKoh4Mo3UNkZ7qFWsAXGbPeDMTPetwhGxrMvUEDxRvS46gtz92LTZJjfnMiHGnnnaDZb1aqk",
  "key22": "4BMY38XrtgYM6dAG34iyWaJg2sE4sLQSmvftBg3WL3uXJERF5qMnAJDRfqEamNL9yFGF5AwBLZYqrDM3JMKkvvHM",
  "key23": "4cThoFqBFmwNesa46B28ik4yK2CDGQ31PtA9XgsNeKFv4ycwPGoH3Qgioqfo6rmtwtUigYR93vjSavnCK1YmzW8p",
  "key24": "g1DRf5YBqaYnu9Yt72wbqJD2X1fFL75Y6FTFgRkqx7z9rPXscWn3qkac7UCXgj5GiWX7g4qDYBDghqELHE6MUzF",
  "key25": "4v53YqBPWZdcPN4td4RzZNhfDjgx1R4YZoAXCnsdKFMGARrKr8rekz3Wj79p1XcUgXgMgS5XMHDkMsno3aHHghKY",
  "key26": "43DZhZacXAHuVv2u2JaetpLDYhpFL4LrbAgG6ERRpzWgYEkVQBzXX6APcjX7kG3rXR3oa8VPYy8TTEUFDUmx4Pm"
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
