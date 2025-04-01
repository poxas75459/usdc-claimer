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
    "5jYq6ZEFrSTzihft72upSFF1ByLmjXjVkkFDdFLSUYd9PJZWB9ekzqri3tNtevwsazN9MUNvayHkAhr7za5uGGRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NkTuhj6kX99BTDLdfHDfoRgsHBepWxLPN1Ybc2cUMLwDFReFVKuqWRrMfV9WBW6y34pqgE2qYjn2Rz9jQ9PGWP",
  "key1": "2ZPndMghAdEYmp2jkn4heyMk4tdKg8CiMQchyDMkzTYnNH4rEqFpKn7UzmATGcygzTaZeYEEDvR4AWzTmUWwDxyt",
  "key2": "3kczSwfzzAwFmGSuYtLbM7dK9PH1ysyRQuAyW1mhKtPtWKUX3oPzzQHMmC8gR3ZhDNyuz9B9HncdZ425qL15Tz5p",
  "key3": "K8F7ndZEpYfaEFNoYH6vRMXbHVK9KFckPVWPGuYjaPhL87ekP8sty4DLKbhacuVVQVctHqi2ytJc7HA2aH6Pabg",
  "key4": "3EgJuGXffCEitw4nMPgif5S3YrFvBrBSA58ohgMBKMsLyMZnkdRZs3SsyVp5Eo9QeqhyVFK2xh7ke9ziMZuLEuu1",
  "key5": "3DiLVVvoJKsM6pgfZYqwPh2hURCtuP8yrQNh4USwo257xn4VM6ahfYuLo8PH6DmBkycgiNvkPAargkJP4787poyR",
  "key6": "9NaurDWJ1QKeRTsaJA1fkp9sfJ2BJMqj2JBXnis9CEhWTxPjfHiEwDBBfvBPUNp9g8agpcuB164C8Qi1GGHiEnG",
  "key7": "4TG5Qk38DN7zvWPKapnBetmPCSfDcJXpQrGQeV4XbqY4RNy2EgpjBRdKG8Mm8FsFm1kY8R5zJ3rNKCFENDXNTWJJ",
  "key8": "ZE4FDMGDriUS3f7kxguBRrfU8zEssVJbm9TwAX2JjAJu8uH7sAd97LrEuhpyKVmoj7LS6kRQ9PM1E5AV5Dr1GKF",
  "key9": "4wQHq3MhuG6unjdYU26SNFuAkFzjy3Wdmwne7TB7DGCVnH2azvXyC5DjgxUb9tNUvKcbb5uCSdboWSCV4aq5cEmV",
  "key10": "2aczK9NmUjamFqWtiwEpBxWJeXAsNGYRQdiM55Pkcszg6HxF6QXjA8WW97b4r41AyZkx5PL5dVEbkZieiex661oa",
  "key11": "58JYsbfggEnyqFLYHrFripZ5aXYNsiESiaL4ZkghUhm3KUjDTE8P4LVbFNHaFGZ1d5bzZHbMRuFsRRmntNmU1qr2",
  "key12": "4MVro586Vuqkx2ZdKN942xVekFVjwLPy4iqviPRW5Do9xjDoZ24oSVn7WAQGrBdRH849WaQHxQ67jnFqvfxVTxXd",
  "key13": "ZbHjxCHors6nEzn2Pq4dgGQgKsmiBDZvnFysCdx3BsZyzGw6iLKBy3oskaxw8WR98dwSodEdYMzht92RLV4qVQu",
  "key14": "3nBc3hurkSAR6ySKkpuesQ3GZgdGiw9WRcNFBYVmCxn7x6MKkRaTeALVYnGoYwQKTiATQBZuGHLYPUbWdGkMJ5cv",
  "key15": "2J2494ax7gTgLr8zYq4jwh4oguUsxxxx5bubvRR3rrLhT2sw3o7KzaanPpzomTGqMZdyC4kjQmYQzDAsSpdNaaeZ",
  "key16": "2KyzpdfG8V2bbw2cDBzGyXc56TeDSkc8aZHL4fK2d8fW4mbQxJvGd444G8THGhdHFAMqUjqJBSBinrRLPXuxHcoq",
  "key17": "4RbCK2UfMGbKZoz2X254oUK1sSb7aDMBRVBsJKrKQFrdo5QnNW63FL82j6GPKM1W4Yo4tMt3f1CiXmYReYcfPbnT",
  "key18": "2gyeNTgM9g9ABZo4xUkVmjp8C1zSmJeSZQHNt72jUfh5iZYG1Ux1YZeFQ4DGBYedJPAgBB9Q8mDeUX8JDhuYUkrB",
  "key19": "5Bgp3FPuT8aMTgyePFvzmkDZkdSDayiaabUbJjye3ch945X6Ka1sAW1bHfqCS5vZjLtwSQxnLJYexm7tfuzipCQy",
  "key20": "58DX6atLn5eBD3ZqGNfdVk3iq7wn7vx2CkfdyaDZ3v1gjXYKTnKJNhQeQFdmyPaQpGXofc4828bBkzrWmTTeCGh1",
  "key21": "31eirXNE85T2AJjKhtAS3FHfogUXfYNiU3YUZ3p7HH6mrs8i6upeSk8XGDF8ePpgspK5bdwTz73uRtW6qgNeKwbL",
  "key22": "5rAREnywyhivviAqeiTscGeB9igrEsKZwHjp3nLxcsWxQc6BsUJFsbVKjtLVHWiVS7DZxFPhq2xxxVFxURdGoeT9",
  "key23": "3QyHaZWM9Ly4ohu3kgpjxqUmorMGBMJrxktP2A264XGe4gWsof4fJy51z2feosLVEPuwtdKsCKZXmerJ26TyPWsL",
  "key24": "4ZC3VkyPL15kMDA2WYdi52zZfr5zKC9yNwCLVpeWPKNHhzwqa7kyWy9UF952LbCZ3RsmqzFq15gpBpxzfsjxWZsn",
  "key25": "3NkeZ43zRjXHBxR5kXnMr9eaSgcinphsPrLRMem9Qq7tFE4jqTYV5u5MBN6M9u4iJ9BjzgJ4mWGsJFHf3YxRR2py",
  "key26": "21utAWBorx9DyDCX1qoJxqyX9UXaPE2Tte2SNV88Hs9Lq25XjhkoRKFCUNrsWErU3iTeihTrSKg1X93ahvRvokKh",
  "key27": "Dtcynt5PXqis85yfXuarGRy49A7tgkrSgoW6aHUZsWeLwLoMkcykcpUjKG5DckwgkM4oqpquR7o5d34mr6csu7g",
  "key28": "5BVuZU9ZXe8AyCkMEVABSercrrbg16eShtiGuQJkaDphxfADm3YzMB5Cq6u17BfjTn6gzhuMXHhpJ3iRgJeNkJbW",
  "key29": "3wnig73CZSxnk3mN72xZTLRvZpAdKXjEB6rz3D5HZP26BC45Sx6WCTwyynkS3R5AUD28skvSA8oeAgZZGc7HnecZ",
  "key30": "3qjaKoMw13ZqQaecLcAK5mW8annxBaF976qifwGeRHgCbxRV7Gs1acTuxc2FEY24muZJD2QhPFwRbvia4JQZvCBe"
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
