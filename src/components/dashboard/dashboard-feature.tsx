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
    "3Cnk6mAkepW7E36Do9wUwAEt6uFXh1aHESEyKLPEqTcMuVzFgn9BN5y5T8YW8SU1eGQKX2pZWTBRk3BrkxBREbbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbqxgKyXMuYFcLRoszwV51J7jXuaByo27RcPFbz7mc9aB7z9orwjUQZ1imNiShCVCCj6nZhi83XcvyNxRFK2cnJ",
  "key1": "3pnvFyuJaSrr9wPjUSH86JoHdPkbvXoiYQK9YzgJbskE4BPcaAMGZuuHXvhiUmvPAUzJafAP6HWRc4JAtFP7rxd",
  "key2": "79cTLSEgxXMza1WMUNdBBGfa4wKaTqdpjtzqraAumkaQXZRCBTS2jpTWZMdYE3DrHjqWqUxCtJajDiqJaWAcqZ9",
  "key3": "65G5Nr8vdMAEZ3ut5t9RuvRzhME98zkyvX55qthCLv9UGxxAnxjct2J8ZGTuFDQXGkEjqgPU8f5VoQuCDNzYS7WY",
  "key4": "76TifCvANbU1XGGnUKWzZcgLMQPZz3HJRPquHED4UgFG21AiZvMvjChFCvX1JMK9UPukngfv8gYeEHbeZCt12HY",
  "key5": "2quFDi8GKS8LKFYA3wLUWy8K6rrmMyJTeKLeRRcYUDei4wWKw8CPgmQ5Q2cT61FWvW2orJ49ZLYw9QxqqRDtCkGE",
  "key6": "274NoKh57fQhtNPQT1fX1h1TaBUEyNAzXftpgxBgwyRtvdqtfm5CdFjqtY5YKik5VMxWhJ9LWnH1sYL4Rh1jSBos",
  "key7": "5MvB1KutPW5YFuD3iTwKyfNrhiSP3fkoBau6RjoTx1fmzDr4CKBnUtcVBCj9gZEt1tEsTUxGcVAngopd6TgFmEvE",
  "key8": "3wRNWTTMoQ2sqojVbyyRskeqqVXX6S59RnMAqpNvemFH7ntMZVRJvDthPmrr9Zfr78hgbRzmf1BeaTT2L5dk7xGy",
  "key9": "3cRmnGARQrNUhj4otp5SPrAAJ69dAv5pFLuFuDJuVX1qJ9JZnPsKCThitzSU76WF8PzFpficPr6QbxLefHCjqJz5",
  "key10": "2y54BvBGHU6SxSdVmhu1BVJHGQSp7GFC4X7ueduJKdZoXKJvM3e5eXTeW1vWuqpoJeQX9TY3ueLYmq4umbjnmcHR",
  "key11": "4fAioXKA9VGWqAJjJcYUttFE8zjtcEYhTyh1mT4ULYGH3TZmh7iYxJkyYqV5Q8M8JhN9ULxUhTKsezR7nAZfsGCr",
  "key12": "A6StzjfVn3uuPrnM7U1qDLzpnk9dV3WFKW13yBhxdmqKKvJeoyckk7fgd3hLJJSQ6FypmEQWEhf51EKJ9UiPg7P",
  "key13": "v4Nw9TRZgyv1UVXFQAY12NqkoWz8US4JHGESo6ZDX3Dx5na5b898NMsnRCZstyPufZ7h3vq7rPWTykpHcEsQ9kK",
  "key14": "23DNGnCrnNuxbz65oMT9YAA8YabCngqTzSXny3xX18xVvqmRabC7gEkudrgeKgQqUPfp6rs99CNf6jUxuVi2TY6S",
  "key15": "79jttxt2w3HZZDdcZoZKr4Y1uCRntY7a21739w9P13CCt5FmUQLRiNCVJ4Ftnb95UP68sNdVnQQFAQvoFQDjCzt",
  "key16": "56cF5b3CU7ccKhqP9YRnygENyJyhkmC9y4b88hu6i7kQef5HSk6kZcj8aZwPjrQcpJaFbs8UmNteZc552mVYZaC2",
  "key17": "47gHnpjaGs3GVnto33Ny73p1iBTY859ETPpvgrB7GD3VGXvB1hz4AyY5L8NPtivAqHmPoydMKJ3Mq9d5bdYn8B73",
  "key18": "3DbX6gJYbEAgoMpEo2o8gBGh6hNKKUDLs2RFPajY7CQnM4GZpm4FHhoYh4PZ7RL8eWHgtXWQMzLxb7yxCdN7fepW",
  "key19": "2y8hkbZWk3dDTt5yUMgwtNV9hBeN3tCjXDtg336iMF448BbLqWzJVS3jocNuSkKVYcb2bMDRDaqqHVnqGaZDP1a8",
  "key20": "4FXU2M1owxLD6fdQSzcrHX6nAowqSYJwNCCATCaMJQKwces6HEXxrd6KQweCbb5XBMyANdfm3pK4BqQZR3e7STAQ",
  "key21": "3mwdjiTVBtqYy1wHEwNuGtUYvKSEa7vZaK3bUH1cnyr1FMX8J9bkm1gEXjBrCsrhXXqjwQ83JCZU5YUupNSCTtjL",
  "key22": "56VXmd1bJYdBXyMWw5wLHUfU9YHG4CF29kwUB4qDuP4bCTqEwjL1kuPoLcnmLkkCb2TFQ5UtaqKa3XzU8TCZYVWy",
  "key23": "5RqWDvd1SNjPsMg5Kta67fPduH3F6wmH9Rfp3H1PczouHLzGquXfJfZEBwh5EkTMpVJW3t8TSqEGiAb26hYemfdE",
  "key24": "2RUNRHQfiDRFfF1ke3G7c1BVTNbyJDyNB3QfDG2qhaStshMpetoGqTfK4XUqMBysGUz4EBgMwYF3Fp7DzqsmdA69",
  "key25": "3Da31zKEHzRiCPCYzSumax5XDsrLnvVCYEHHZJ86iavq67FBPh9UEpsfzXQ6Y2vwnwLZN4FXaj2sFqqJF73XBf5r",
  "key26": "24tMqdVEgMfasgsR4fje3MgxHimuFUpYaEcb6j5gsmnQy5uzdSvzQWdxBDfrxZxB6SL3sTnhJVM3Ko9qUJvLKKgj",
  "key27": "35ARasD4sCuvK3aTbV64D5xunvLkvAGtTeWmWcE11sR3x1rAtyWNu9nWnqjykjwa2umrNvc8Gcfbbpp5nR8CSGyh",
  "key28": "2tUr7VCpnvVyMfKWdkuqmbdDMZMuvdfSunpp31ngZfSe8Hf2BQgtmwQk4F6HEc7StZfsQAajeKdEEtE5ARL86qdB",
  "key29": "4PjXZnanKtCvwdixoDBSAHovqMYTBL2RHGQ2zBLBDwgsJhgi3ahvHpvNNPSnKMiJaJBnxAM5E6nXyt4tK72URE7F",
  "key30": "4kD4iQ31GnRDJP5Q6pytEWcpcvJEYCegnQ95uFPp5v3KskxLS8XM469imREbigCC1vZ7YRv3RqB3TQ53xbWAZWRC",
  "key31": "5wdavr2ucmZWzg8ZvywKAsM19NdLfEeuS8raBETqC2WQR53GC6ZhMGy17hPjW6ajxQZCBXjd81JzvVmEsgcgiiYB",
  "key32": "4a1Vjao5gjFYLXA9hC4zk9dxaVq9VynpgVbhhjXGyGYQb7rQUuzzzaNih5CU1ms5c5g5xNqMQ7jRv5WqMKR4NeLu",
  "key33": "27vWGSKnMSu3akm488Y873SwEpQgdPwWQRxT35ZzuwkyZPJ5t5qreNfju9aV8Brd712GozcVT71Y99wgicvfrbXr",
  "key34": "3Q5PqUpShjKMn1Hf57TS7AoDim5a7jdAHLx4YMzjWq9HQfNm72inyLcY5oqVYVH4PD1qh2yfYxX1Dhwa5WF9SdBk"
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
