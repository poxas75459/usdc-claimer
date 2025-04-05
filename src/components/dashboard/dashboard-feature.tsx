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
    "4U4eWQZkuChSArEhnrLwXpPWvkDpGNZdJYCLiDd3CUE8WrHxiz5QiV4tMuCGY2RPLHbW96jnihKyHdz3coC2q9Z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CtGk76XxbApU5BXv9K6SW1wF4wahVw8TyNTvviRUFR5wa5LDr3cRJ2mcMULcguMEHSDHA9iSTuZNKorNg8oF5g",
  "key1": "Lfv89ne6Wob9L4ToqXbtK4M27TNuh5KGybKDcqwPMVodxXvSLjEZWYeufiicRbKPwmZ7ma1a988oQWGxaMsGXJS",
  "key2": "2t7iny1g4ewc4vSzt6NkCRHKxj4e3wBj5LGUyFS1YbJFmfMjAQaHvZnw8Xr2FsMK6ahUpNtzLDwDyD9AWDwc3Ewc",
  "key3": "JeGxRoUySEY2cMGERpSP8sFrrA4PswEASsrTdYfusMTAnG1L61zULVBxJ9kRLu7DhcjUAqBy7s1FP3eTriF5tfv",
  "key4": "3CgfL7MNUomuZKTUzFG8swDqdxsSfphZAY5ySm63ecuVrQc3u84p9GbJhPHWZ2ipCtGuJZ8j6dMLAdDyQKx4qSLi",
  "key5": "3FAF2wq2ba5ZKrRN5vyYfgRi4tKFj5HaWYHFenfnXnwqUs4L1QfPaZmSoiT7cKSjpAuszMStggnS9JHwmhSS1HY2",
  "key6": "2sbs6HRmcRYXqa94jXcDLWp9JqRZZrMRrRX5HQg4NsnYgo8CYFgUVC7z8boEnHuyYQDLTgv4XkoR5bzCRdnJsrLv",
  "key7": "5FfadkqJ7PyRZgQVKLGCjJUz4Bv4Y7iV7uEdeB8HK46okAyVaJNd1YYRsv6SCeSDsSWsBnWdxGyzh5xJqZCHMfy5",
  "key8": "53DdXzoEerGHwBbCZEZGAUT9qUDJB5dnZem19DbTMnCDBfpiVy7c7WbSZSbgA1Jwwq53DFYEMwRdhFYfQ4817zmS",
  "key9": "2cqKLj4Ks7GxDPvDgSGFTv9LKLgmMvBKesiTrQAgcNQM1Z4AsvkrPykLzT3wLEbztJFM4h33byFoRDwLtQZnzSBu",
  "key10": "3SKCEWhxdhEZG1ATS69ahAE54h1eg2DURWWDyakq7Y38zJv5ddht5mc2B6PeZJeuzfLuxyvmYMvV9GpmeHBzQ74L",
  "key11": "4gW5XZfHtae3bti17aL7Yo8tA3vRABUgpWsLmHBeEEXRigacDUXVMyvdxppRkcBW8DWN5dCSizN2QkVfFcAfbavM",
  "key12": "3RDqJp8ytuCFjJ862ouDGWkDFAaEuqhR8uEzukFKDbUYwjrUhNmT2PFDKU9TVDZtXMQAgCtF1VHu6H7PdBLTCf3Y",
  "key13": "L1qYzNvRUwPkykoUGaVw3pUVXyPfHFARY8EGsmehqNrT2SLTM3A1YfmnxNY8qDtRs9mGGMEFR1e336eQapkbFNz",
  "key14": "3ZdQCAKAx9UBGGPMZgpgAJGtbXn4hbdK24jGQHQJVk81XZuYTRsMHqbzWokG58XHqkDSQE3QT8rVEGFRePGCuU8M",
  "key15": "5B9y2qkpt1EYa6d8NHymCAqf4vaT92PXA3NYhQcbbrD1PiFDvwMaU64HM6QyifEV4aXbfuKnunqMGuJDffC2QxCC",
  "key16": "yddhzLCtRmsPQRR5GkDuRFwEDUbchCgsKRxkSbvUivK7digJiT2y7ES7yLzc7xq5nEReukivswgZkdDfMSYka6x",
  "key17": "2a3xNCpgMDoPrkcmqYT9m9ixrTGAZ3qxuDyjCL3y3QZHGgFdy6Wa24SmNxEbKdHL4c7iy6RASVLuCAGXJRJeddfG",
  "key18": "2JngFsU41UEtMTKhF9SUp8bpagoet2D4dTdviBds1qTQThFKUEGEmzaLdFPMKXVorjK22XJAn6PiiXfTjgKbDPgz",
  "key19": "ats1PZQx73LKgMf4LGvxnvwExkUxPxThn3dCchB4DofusGtwAyPzE5gpoMCMw3Ydyr4Bt4U1hiTDkrH3AhFu8V5",
  "key20": "3xfxBz7sY3voU1NufcxfJLQWxqYukbjTqmWhdkL5odaMfC7mtprNtMYSPDAn3a4XsktWaWJmLGD7c3TCbEP4jmUY",
  "key21": "62byEV1URNQmvj4VcES9n7oeVzY9QMqeNQA1LAWhtiP9VmGWLkMmMJdko578pq5S4P9TAgUPn2592gucX9hr8CmF",
  "key22": "5zLmfDVMA2ZH65a7653Ss6RggSPgpqYbJwLdDoM9N2EHp4VSPSv5c5W9P5sta7kGjBRy9cA8vUpKJQQ3q3QfB2WQ",
  "key23": "5zoPS3P6UcWvCY7jJYJMkQHtFdqqvxP5CrNw1Kc2nGvhYLk1BRUb8od3FLDyZoD6jW494DR4oWoW8sTiF8metAUp",
  "key24": "36Nb4afmmya5Q16jHQ4FoQhXT8dFdcXz4kETQQL6EoPi5MAG3p92Ztuid6EQJ2o7vWtxceLznLpQxgp2t76eB5c1",
  "key25": "4CVUD4xji4CrnTEsLXPFKCMAeZ3QCLK1v7pa6vEyi9YkGotMFRcV7Vzq4tey4r2hqyjL11E9qZzbM4nNhuwRihAQ",
  "key26": "2hXaoVukYMrFF4ALZPPhAmXu8dRcK4iQTiFFXNQE3ogGhxqEACQZ1cQuxQZDUeTrurhy54xmAP9LF8QwqS4Mhq19",
  "key27": "ShgUWnPrXGSZ1WeE2CoeWSzzrLtUiaqb31sA6UZb5XtYg3RpCRUnupfG85xRq918ynpjimps4sjz636m18JHhsw",
  "key28": "JpWZSKqgeBVg849WgWu3PXJFiFpG1KcXYsLfFs6Btz9u7Qh6tHfbFvnNMcmB74U8mY2ZwCavjTBf34iXb5rDsB7",
  "key29": "4M1YEtV4GLoLx9UuFqpVVcNdSUf97CJ8XNLLpK6bSHMx82PaSWbrbQTsDfJ8VBXHkqPWjgZFWpLTyMymGqj9nrGq",
  "key30": "s3Q7m2XC7xPzGEGc1icEKxWC1BgHN1vJPchReWfZEURd3SjRY4ZdrU2tiduQaYGow9URFkaBq9XzeR9a81xjGbb"
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
