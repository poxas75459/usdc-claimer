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
    "4XXBZircgJjt9G6USUkMxF4k5HjBUXkow7Y7cYvAUB7LJc7VoCA1mtwtWaHJoV5kMoF4PWJgdUqF9aQPRv1XHgAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxWG4LvWkvKPYG8uodq1WyKmTwb8FWrazX6AeMVUsex6HVEZUXKyC7YEbyWM96W269rmhhQd9G3yJPiww3pqUja",
  "key1": "3pgBtn3k9A81kg5hQuwRq9oe35T5ThtcfzkXMW56ez9QNA3pUf11sde8Dju8Mh8SxunPfciXMm8i6FZGRHYxQMxt",
  "key2": "5hbksvNfT8UzcWu8jWGw2LVdPv7ean6rBHFuUYJNo1839MAiqh4UfJpcZeyYbtpbQNPSWHFLMhGbSh5aWjESHFHg",
  "key3": "42QM6KmAQzNRFE3CJNqDNJdbBoCL2gdMUYSYwcagi3Nx8YCZrVCxTCrU9Vakhxg7j8Y1hkNUVDGwKtYoYi69i5AX",
  "key4": "5HRYKmnv8dJf7ua7AP4q3zpKCfmd7aR98hWzMn9xkd6xTg5oYDzR97G14cT4e75VF5efU9rxWY4rdGzEJ2d4MomZ",
  "key5": "3ieAL6qTzetxdHs9SzH8ikUPyyn5SdEVvBz4v5AKVA2JYXceD2CBHeuaKbce2KKYh4YA7p9bxgve3BsAofFD42sP",
  "key6": "2T8Pq6KQsfnPMfKmvPG4z3brZBZ1B6Gt2QNA6CbJPT5Db3qPhTs4VuiYHD2yoM8Rv1GBq3SAF5rjnAagQNM3qZgk",
  "key7": "3aHYhon9pSEPAgBhD81ZUfrPNS5DhApUkRpjYmAzHYVgoRBJePPx9zL4EEAq4WgqajbPaT1BjAGP2d6t3EZ3ooH4",
  "key8": "3kh1DMKCQaDVZToNHj9LcagXshEq7ZYuZ5r5mQzp4Nt8uth6DrEmECepZvGXhf8isDTJcJqcF4rR6jqSno8ZgwRT",
  "key9": "4dqqj7xJ3D5wAPWaEgfVZ8ayng9tCNqvjquCKtqBrh834vg8DimUPUtMsXo1oTm4vJmJ2SsMc4GfN6Ld1Jp8KWyH",
  "key10": "2Z5jjTD3hLVVCokxCFMRvSxzg6L9skqWQqBwLpNiji28AvhxFSwzacT9vJEw92ZyS9tKJoNQgqTDo2u5BAJcZFjK",
  "key11": "2E5MkNaQGXUwrcNJMh2emMRt3TpnrFY7Jg9EUemjVu3ovMRa5ef2wo5jzRdwYRVzNaZX9JR2VCtCTq4wucXzvbTt",
  "key12": "67eefGS9hyoGKZAqdytgz3YYCJMUrqrXfciZQMH7hUMjWmGZshHFBYPKq947hMWpy2WQrMqBfRLSqQNX9fcaQKYG",
  "key13": "5pWNZ1tG9cvWpbaANbCW5VkjHVxuRenZM2mGqpveC4AZzg7StXWeGyqjjXbmTs89L6kAVXH8dcPWSGYCwR73LDGj",
  "key14": "2xg1tEhBKzaeFuApS9zH5WEvRcbojNpT6rKk3wAe1kjL6nqVypWbjy1JpNsYgDJUn9GVi3oKJmTUuNWNo9ikjAvM",
  "key15": "tECm4Q185LnwSkZnqWHXHpsticDNec4o62KskpGj97n9EjcoSkz8iRQaDVuJVBtQkdw4etBjBqLwriVJ3nYPD3V",
  "key16": "2fEii2hcG81g3jeYqELyjYabrzY9kbscunkd797mWwBeKYi4gDd9i4HjYZNBVk3Hx3gx5GET6YHZJdXUiurTko2h",
  "key17": "5eRvaqEgqHc8fuc7n5GVuHjQyg9vqtdGxvWjS7qFdr2EnUBxJBrnVjQC19VM99y53MzDKaq2G9thNTVv4Yi1ccg8",
  "key18": "5yL32MrcuPn6oSxPHFnCNaAgGmNd3Rw5qSmVknLDcBvtd9vNVarojnCRVXQAoHwJYor4TSReu4zg75fLW8LK9qtT",
  "key19": "5WMnNPEY1iHKyyiSiKYA1aB8AC8etiTNCKwRMDUMpfwYKmUQj6nUKo6XUTmvpUaKvc2N9AyGeGJhxHMNbV9NwQpb",
  "key20": "UFBq8Cp4TpS3tARY91hA6JKvLKW4EuRyMpeEZz1f5aqWxhXE6B1GujDieMD22jixW62jZVW6GKtzRYDYSx1Akwr",
  "key21": "5vJpDdffdCCDrKELbr7MyT7gV2rfNdyGswqVCYCZpJzdJqExrR7kTbPBP8Hq88efvRsSoMJSkRW9ihDrRupBWgp3",
  "key22": "u8upMKmS93ANSa3akHN97RSMwoSRUG1A5YbUy43nAS2kyu2pab2d46TYM2jrF8HnBKGtATYdMD6YT1METAPwK9K",
  "key23": "29URmwNmcrSGf27zGoGtyV4TJqBYnSpLpjtozBoEGR3gT6KF2Vh6iNwnedNUE699FZBcUEepH1qBeGNe8hGhciKX",
  "key24": "2M7qM2jiwmQ4DkVvxEajDi9PGnmWU1VDa6NtX9p4qN6Xef2Sa19HpYrubVF2kyujArH9JymWZreXSurZiozytowJ",
  "key25": "5sdX1Q25jh1FxE6Vbw6vWUWMYRv5VjSj8xkivyVCTNkqBbVPPsNUFcRkHqSwH66DdkB2dbNdKarbD7YWLPWkYvuu",
  "key26": "dSM4FazhUzErA3heuP7ZDKbyguBRAC9NFwtHz8voEfM1gKjzFAx7FM7zq9nsiG7AEfT82XrxSAtCKiJJFN8eqxx",
  "key27": "3GBV2tAv2xSCtE2EWzxtdKQmZfdxKqxXEF9fNQrffCEfnUSkEFigmzisEYS1N46JUd5VVeJUp9q223Ksj1HEPuYp",
  "key28": "3mf6M5mzGRpY6MU2Sf95XbQmg7VQdWteG71sniYtWj3QDbZ66QoZpf3qUiqxr38Ppx3NLywtxKaS6E8GXP9Mb437",
  "key29": "21kmp3dRG3XBuyMuTo1hgfP4wmnjEbPNTQjzxSQCC4BkmWRmUUUF8AQJgfFs4KcsKu39KVCepusXcp4QGtKfUvRC",
  "key30": "gWztJTQeciCfnM87o4trA6SsTiVhjomKo2R8PSckf2L2dsXHXvS97mVKwpmW78KM49sJC5XwFU1LHhnSjC3sNei",
  "key31": "5sYcUBLAie1HnjuwpGDhXRJ4X51mQbihaQ2mZNeLdLY7vZNadPD6mK8Gc1mMUAbEKukNxZFDZCZs32AbjKE4M6Z8",
  "key32": "4c9groXRUktVqzHZah15ppUdZPB7wnDDE8Hy5jMZC5ccxeNGU5SpLxMRZrJvoMapSqT5GnfFHrUzriXtJoyLH1ja",
  "key33": "A1VXcKupRFHMczkV8xq29dfDXYuKtfofU18NjCmTSgyNzMiyZfRHKoyC3AMt4NAwP4VrtRu4r2VJCbcoQSciRG8",
  "key34": "4QhDtzKHehua3n25Asq2EzgnskxWyMN9V25MYhh1BWPhQZChsTm53G1DxgpuF5xBTtzvoeh2Y392vpTrCqs7YN34",
  "key35": "jkCfQFAQLbjxfEXtH5Q99yKc2PcGVvrSEcVQ7rUPbkt9i3ZEZ9yQvJsbfhMtYL12kkTuPpt1imDv7YjvZRgYTPb",
  "key36": "494xBLiVxCXvEnSy59Tgf6hM8rw4JffTcMhBDRazvxuhG1nhbjUHME6gxR6noeGApyx91hHbL1FM79DiLLWcNzDH"
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
