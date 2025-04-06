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
    "4BqsD9Fo1RbFZxYtbNT7tYy8w95xeB1WnXPMgBF4b4CGqpoNkY9eRyYGW1zt7HZ7wQ1EZtYbsTfj3oTjZsUjxJ6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgKNiVFmXbZ63VkuZ5GyLGdmGo54zXT5xb4ssZiyqG6rp3pb8EmetwFgcePYyVLovHq3kJUuqfMAJPsgYwyZVeM",
  "key1": "fHEHXuJAXPxmPGAv1n6emPJRr8RwfwfaEnZR37mm9Www55EbjZcX4gBUaz3Vv1B4Ac3JAxTGr11ZN7schokdPWk",
  "key2": "3vEEycT7QaCULpBmbJ96vYX2rEdEKgSFevjSSGirca1rtfPm3w5A9UEGyNgs2cEZNpZL53g1V5N3VZTNGwagtJiU",
  "key3": "2jHFu5dYCZV9jmGc7ZjqboDb22w3FLy6BvCfFdAi4f1KvDNXonezzPD3qqRXpkWzf8BM2bTg5U9TMB7Wx5KrZDgR",
  "key4": "3fdZc3Yy6WBNjt9PfD3hfseH3gZow6fJC7iNN3SLV5LRqf2fpZT7p1dScE6GnH1w9aPxpei1NJv1mwEA9x4v4kD4",
  "key5": "4gQ3rVKh4NRUZniUVBLs5rBJijVwXWUodt3GRG76EUhCKMQd7Cj3MxBfJ9YsngNUa8yTd1LnuSkmSa15jwtcC45m",
  "key6": "48bgaKa8H5gevxEiYW5iPpYJQ7tfu7NZ4Q8uPK3QGgq4JcK4Mra9Nha6mFHwGEUPE1VaeWgQTF6EcFALXhxs4gFJ",
  "key7": "3fNgm61gaVRuKNkPfpk4xMCzsopixrAhFHg7mfpqb8T2iVU2RzkQoc2bD84txGKioSWdJCPa6xRxQJATmmPpYcsF",
  "key8": "F4yoFhoNxG4x2uVf336AyCL8NGSCJ6Vx8QfwpLEYgcP77177hNnNNP2BJuVFEpe4mLovD8LtUPyhRLJj1DCPVkr",
  "key9": "4TuLM12eZ3JHyvV2N82vJYaMgu9pBD3TPnY9Xkf3g1D4i9NQGmqHHbiK9UWgqpZZAJ9J4HUrSWr7eho1dBFM38Ku",
  "key10": "2oTtivghw1jSLuU6pfn2DKazXnYohP8PvXcvnw2An25R6VFXdux5Ut1iKtFQHa99g9JszKC865UU6cfvsbRhSs1f",
  "key11": "4Dw9qEf6C6NtEaQohCNFpLUykdzaLHiGjDEr3FVVx3udxnGGHRer98t1sFRCYSNr5E2ZK2eArv7cwm8LmHedpF5Q",
  "key12": "5M7Qd4PUw9VYGUepTnMPAACWb3mbdEw8GYeAjBmpz6ajUmh6LriDH2WYiHchJFm9xMbbq5dFYMy7xwkM1cZU3foJ",
  "key13": "2s72vkaRZKeE6efLcxXH2Duonjbf5gbb9uuJBfzvYCgLJBLLBrGa1d4veq2SxVZSQTojcAMYEaR4NHMoBVHtApTN",
  "key14": "2aftUHCVfpyhe1UdW1jKTVNASrwX8ChQpy4rbQraZheisxXcdV3k7Wd4CdXXQd9pwXz59uNAWuu2w42ADX7RGs89",
  "key15": "3h9HfCGVkUj4ZJiVF8c8r99MAC8i9a58uA5TdcFCBPLiG73cBZ4rxC8dVss4N5KhKtQtk2Z5disBw3vyARH9FCyu",
  "key16": "29yjJYfwYytDY4SY2vwptgepTnDi7g7k8o39tLo1adZfhV7wQjaCZAxD3x8nHFCn6hcTQoQbtTnV7ufmcPsH5inq",
  "key17": "4dQRrswy9oMu3zs99NXifBnfxvYrQLCuFgUKv3Hkydv4PN2ELPDtiCULRhuNif4ffeiswd4uLVYp2mz8V2GMZA8w",
  "key18": "3YGaKi4N3XoXHxMXnWaqaD7784Z8kyjWcPkzDcZ1sce6ystXpLeVp7fHxZTHdD4j64TUzcJhYcU79RnMUVnQRhj3",
  "key19": "FVw3VWAp3Dwz23jg3rM4qDggeVwat4RemdyJLN1oL3XpdXBTzumoAhn6eJorYrdjKNHkm7A2rQMGdcLjR6Phj8q",
  "key20": "53sK4yPbifXH7wxd9J8B6dhuXZtgVP5H6w6S4RfBNLCmUt6seQH5hwpJ8aPMLm6ykC5K2g5BDk8P7xWGo9LBbcrq",
  "key21": "27aMUz7Ruas9CdZcZ1nBewith2X5jaw5FZ1iiosbLaAaCsba2vEEXTwxbVUjTPo3ZuE9p41J6otAM8vRqDAKrDu8",
  "key22": "5KtvBR9vqCFoTmiYs5SHfLK16mBgCqT6N7aGihqFGpgwPyijwLckvNXDX4kUooA2zCewTiYXEZFxAkHF4FTjzNB3",
  "key23": "2qEqgw6jHEyhRVwJJNBY2NuBAc3Y1L3v8dNHGPcKES1KRNHu5dcVJP1sXrdcWvNYc6j791D9PHbSnzGxm95d2wDN",
  "key24": "4537Mg9YZo6i4JsM5yepiQSXNLkbZFZUQMZCSDRbbpNDHgDuiaJUR6xfBNPMxhayL8b42rpbyFKoXB1K895enqXB",
  "key25": "2U9ecEHFLaEZGJE5MzFnu7FjX28MAW4mtKbnVD3rXucN3kvRsPBk5EhZ3UWHWVpgs8e8nDjPDpYSKk32ARgwnnzq",
  "key26": "2gXc8TpWKDSupA7uJKBExd83brrJVLEFE3K9UGXKZ6tnSyLDAHty7D5oGZo7xsYLbk16sHeivAFM18LgRD9Ub6QZ",
  "key27": "2FoC5Ej6qwb7ZT1hzHqRryetd4vDRzTCdf7eNLZ9AdzeRWysgpWiR3xSZjAZGRMBmUKKBbUQ1gRVurwRqTfXg6Pt",
  "key28": "S8We8bU24ucvrvvFqGYBqvk25sd1XtuPZmfdep271NzYpjrHKaTvj6ayqVPBWj8hqJUvTATAEUZcM7KZJ1bKMuK",
  "key29": "2D6HVwXBQYF6NdhFKo9aj8RDiYKNsFGZ721icYQoFUsYa3dbZhM3bMwb1qcdWnGdnXjvJdzCwRd81mBLnWUcbAt4",
  "key30": "29hE7esSABR8bEhCHd2u4VpzjCLo45PwS1sYRkBrgZaZMyJRM5UJ3vzNDuRT8DDjRgkDq1R72gdxLg4jpFpSb2PH",
  "key31": "4mWyTVmxTQqBp9QMbAQ8edB9agH6W4wcsC62Cgmtozcd5XbK8JpWvuomkunDC73WPjcj36TmyNfNcvCQETGrLZ3C",
  "key32": "5g3XhjvyasumTECsGikaex3dcCni1RWaZAUAr2icVVVe8WZJgzFczKLQbdRC2Xq57nKBzKwd91X2DiLsZSe2zkQt",
  "key33": "2TdFnhtMg9mv1tat6QFoxxx6DJxBS4sK41rTsXx7oTYC5B664495kijqzrQhn2aGqYcj6bDE4yT5MZxM4wrQtuy2",
  "key34": "53zY4KbTMZ7ffDtGNoDRqUZ5XJjjZhX1Dq8vpomMdsLXdyCqABYfPUhAxngVDAHkSFQvCzyPeGohmC6QM3Y22J1D",
  "key35": "4vEsXJYZrA5izYxX3sSGeSGjtTsDL9ZK2xCzomLjCqV5co6iSRS7zkJ2scLCGZdAZweYdCJVhi8fuq3vHhEnjRZb",
  "key36": "53TLvuXJSKjvr1fusybDYeZTDceP1E9ymjWNsiJdegTW83CTKLP5JBnHMsNZD2LNjVdGW8GiBaw6aPHHhSPzLjUQ",
  "key37": "4EN93kEDUAidecrLkpdrZFz65Ktq83Kjh32sEcdpnBfz23XaqGBBb8K19oaJ2E7NHDU84jE3hGQBp1G79vbXzbXp",
  "key38": "pwQDD6ftBweLUDMqenUyMHhbWC2dVHHwpztZb5pVx2eyi6DVvfAGarw9MJ6p2NBE7SCNUSHYtvUTQEpjhmnTBKm",
  "key39": "5PTKcHywzRhe7EwES3aQMReoXqcixjMhLcLMLEWMcyJmAV7NKgreg3sW3STngcfThshmwsHxaNRRdQLoCjZvr866",
  "key40": "x8LmDe3CGCbSTJrwfSQZr2hcoHRrSRbNHNX2w61gASMtn6HpNjT4ANV1wUQkZusjuGhtQDjQPyJ3rgm4dQbUmzH",
  "key41": "42Lw49iHCqWoU7Jd3FtgafJzcrVsKkBNXWJDBgQ88pGhFGvoM95dcUypC4MT2NeHUroeYftmdw7tyMKMo6L5Lj9Z",
  "key42": "5kRXTk69bq8fJdUeg889nCUCvLoocTLTu5XQ1PM8643wZ2mXBQunF8qaBiXvTvAqam895t8XshVuwAPxPiXuw2Ce",
  "key43": "647BViabBSzMhkcHtawMVubX972g6fhJi5fEYKJSvtgkkjbBTbTBcwJq1Q8wxdBNWyosoeBvPSey5Dq67rHaN6SY",
  "key44": "4YyiwxZwXNyftetHArjGFpvBfhJ8jYcEQaooLhhNwcVByzGGsfpQs7NYdu1CT2Rbzpqaucf8bxKQGVq98X5LDGGa",
  "key45": "5EJEb5PGfaD9yDyq6HfDte3R25eV3PTpvQZXix3D6HHCbg1quTKkKT6rqnp8gzYsnDq5BKpMnYbcxgu6bHEq24eK"
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
