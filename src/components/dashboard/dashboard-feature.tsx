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
    "5gpLCZZx5dFNdpP3NDqrzUrE3kNGw1WqSMqZtYuLiZbDpgG6rm5EBs3ZkXsig57j5Fkh8ux1SfJbo5pT1HvE7GfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NygqRLUuHCG63GoFZYkh7MjRzAF2H7ZjTr9YCLBQWxQimvTiS8PXzsiQEGQNZv5T1E6CbC6JJhGU3DmuFFcpecd",
  "key1": "BxKx9pSszaf6Ut8cjjVCaJ7JW3hnsnMQ525QF2nyqEKSgR7fW63NpEpzmwQDB51ER5VFBYYHr8yh98mq73EWZJG",
  "key2": "3CKkhKtjxWYkVD6HBNqETDoqujbmGH3kKe3owbtGNQ7urJxbmDM5oPBfS8ygvDsGRGyDcGCtnvnJLSp2pCfRhEo8",
  "key3": "22G9wAqvpGh9nznuqFHDJfTTJgbToYzgrdeP4dBocJZf6KsDutHhHgDKrZ5TPRszJ96Bv1HrgZucjoqULoBbsxPo",
  "key4": "o42tL3eBLWEs1iNZ5F9rYiNgGnM63CKhgjDU637JHB6cc2Zcca9gswqVxM8XvVmUNt1jPbgvFn9i4SKLNYMPHTk",
  "key5": "2J9SZEnAMFNpnt5EVtKYbZJeLb5hz2bV4AbgjPthWRsrRtc8J8R1jgUvXGi6zY3Gdo5hngmyuoDZB3J4wMSF2o46",
  "key6": "2A4CDWrTK9ZNCtsG9RiK3ABNEy6K2iYyZjisKnfvpiA4aBaiQhyCkERou1Fr6FS5wmEVmAtTWjoZ9MF5pS44N21z",
  "key7": "2bXzQA7eCDHUHBuUTR3cYETtED5Dn17d4SbTyrhACyH3SdEueiMjDWRKQQcJQNyZeiL2THowpDrkyQKfeCxvneCc",
  "key8": "36T9fUsNLmCUM642NqhF4vDTspmiS3yVDFCUoYTfddrJ2u4a8kDrHMrHjUn3kjSSS6bYgcXGEHcMwh6Aq8Y87Re3",
  "key9": "27oi2tExYsn27Lu3HY3SurLUNoXCK9xWi5kpDWSGc4UabnVkYDwVdtejx3qYch9ynYm6JGAP3qt3Bz4gY9rEHivv",
  "key10": "V4BMqahgntqpRejgJgh3wJVxYfiMga42Rvnj4h9qndADf4gHhQxZCvVpBpYrrESqvM7DgvJj2uTBWQ4FoaThiVc",
  "key11": "52WUnXqS43895pxyL1zYwxx8TAH8MLzChbp82c3FRWrreYTLDp3E4rABPXyqBKXXmS41YMe7KcDe39iroYQjwcmi",
  "key12": "5ymL9sLy5fHgevbhm1wZ5pxCZpVP52Npn3vFhn3kUWfcRs4gdTwmCHZ7CUetJuXu9Phjn8oSYKPwV8ex43Dgy2YK",
  "key13": "66yPCBWbBeXdRMDpavkuFnGZyZWa3aEbhrFt9vNb5JuCkdMaDXghtvhZaFGGTh2qsKamrPok1mtYTzHgJnUEhPrw",
  "key14": "NiyPWTQs66vmG4piWQid4dzGJeajREJaQP5nnD36nyL6X9VjXSFyCa1ecN7RxD97MQkf5wU7vksCokV3b1Vsegj",
  "key15": "3ZJHXypHP7U2Byz3qLufLmBE1ac3LgfFSe6SL6BN5aaHNZzCRyoEMRj3NtpuN4MzgwUDgRovB4TWNH8vUFMwKWmA",
  "key16": "5kMCogTzzB7ZSwvb4rMQYXxb8MPNsBUdhwc2v1BFt3Vg7GWKK1KDZAvWxEfYPHJWJiy1L7uZCpTXdFZ5FoKXNptm",
  "key17": "XeWCfqK4cXei5cZoyjkQPqhkGXSZyyPFpqsaKrYdjBJLw9GfUU9uhBTTBP3YEhXMyK2oFt3E7iZJrhRF9MGJ3AC",
  "key18": "231RWYLPn5JoxfXx3pFiCZ6RgEy4V3zfSoCCxt368jRWejeBq61kAoGyiTFa6Y9L8kgYevXnCXLTkjwuSopXfnsg",
  "key19": "3TkbRYM2SdF18Xtvcjiu1KpFbKL5rxuYANUbQYhm8rndgJBMkbganEky1edCLuSb6fEbJqHiZQDfR5ZTrfNt6V1U",
  "key20": "45BHTARa1nPhzPxj45f8re4pjCYyLe21DvHDwKTg9CTSSQaNG4XWJEaER3nbecRbtcqQWio2iDmimnRh7ofaG8YU",
  "key21": "5bP8FX7sDMk9TWeKAGAUvPX2k729Pgrtt7yVRx2AFbhYj2tDmyBUJsoDTNdMPgC1vUANEsheGxHQyYNVUjPAguoX",
  "key22": "23tDfVfKEosjSBtXxEGbGpdUehXKcHFo7jCoqo8opWTrqEBBvL4PWwtv6nUSmnrGaC5vPX5kz932nFs37VTuFWTz",
  "key23": "3XM9SCF5o5yVoqEirCqd9VTRKxzi8WJ55UoJiQij8zGrYeaJzhMCtYpGvnzYdCnev3AioKvnmmLqoVAfv6nzKJsQ",
  "key24": "4PZWJMsRcWwFjzZG563jibiaQgrix5D2zUci5S6Z3fYMmTTvCXfFBaXJBhkdoVYmdTbYYtqSExR3d5qSFGjFQwb6",
  "key25": "2a8enUjYccGP4jFQnZcDBnbZ84QSEjHYZZgqbBuzWJNfebwAKgJMqbpcg5TBpS4V9yNnxzxsw2tMX9wWmhN8sjfU",
  "key26": "rYNngQWqySi3KizeJZKWLJWYHjsa6kzJQ35GjDru5fj3sPRfky5uTs3w6UUE5ornF9Dqyv2zH62ZLLNgBAbABLW",
  "key27": "f94SQtsc57YTuwc9F2VS1G8qGmUsmngEE36fjdgXsoLQ6C4rVmRtPEWyQCL1TJDYUBPo4XUa6qWyFcoEQbJ3qNA",
  "key28": "2dcwFGHm5fPTQaU6TWrHZiHf4pkDgff3YPqPxNQQ41Ph5fjzc8VPxdiFx72XKbQvSXfAmscH958ndnifUf8WgZdm",
  "key29": "mu1w9pUGR4kNu4bHXHR6aTuxz7idnF6R5U9qNxeHXvM4KLA5irFuUZHFM5CYM9i4igH6PGMfdL6y53XrhzbdFkp",
  "key30": "2LZEQWTXc8mi1qFvGTqDPTkaMtPpavBNHz2CKp2hsFAueCdeqgQRW7GCeMY4DwmLaLFXtNkUMbR6dGwLUovVVNqM"
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
