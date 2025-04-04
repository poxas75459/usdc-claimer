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
    "DSfJKQYJVT17syBJqqKYVvQkEj8GE7XJF4LHc4jYgYiu3NzdqBjZCP7wpV3oE9nN5U95nuVNx74nNHo4zKsbyC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41NXTJGHe3Svok1V2dkZNpw643TfLZte4hWUeSgkda3gPddPEnx8SmDfGZqm9WvD2jzKUSCRVT2UoYUHmAAp1pFV",
  "key1": "35VPq3V5LFhKSWr2nSPVNkrUigP6AqMewR5ctMRhnKCbt12oUssQrtDV9TKT9Zq58kYKKL97pDcvssA79tNwCFQi",
  "key2": "4h88m1DFQQoqB1cob87ewidd4Rq5QuDPJ4XoFpGZ4fPKaw4u4P3BRrEKKv96eWPVbrjXpzCvXbrmn8AdJL6D8gwR",
  "key3": "4jYQtNDEN6BUEaP8ppUEoME77LFJFgfp4rhXoTJY8kq1Y44gEQJzL6BYGPXmi2f3AcVBCxhH6Eihp53ZMEVkvMvB",
  "key4": "K9nRJ9wR2Hn4PV8ahFWnLLrK5ZFy6zisbVTQHAGXx4zbgqKECdvarPHARDbQoYL1bHK7w956Tho1LHq3LkV8QzJ",
  "key5": "2XkabSTZpGu6wzY4Z1NZkd88TUy5x3sFADFVceqdMnQRDxs7HJgtxyVUntc9xCU4GnandZAVJh9WaSCfibmE7jGP",
  "key6": "5H8kHj2hmN1g4rnDvvzRsUPuXMF37Ax7f9oKduykHBsoNF2hFJVqwk9MDbaSrPFwbDpvmWA1qURZVGCuSH8FfBnk",
  "key7": "2N3BhiRCPJSQMDrZVnFN5yCFY54FSFhhP6e3EK98CmoTLQXnEWynDQjnqdV15M52x5rNymvGVbNvr2JePTV5fDqh",
  "key8": "47eZ8GHagtvDEu99vtK9iisNy9cGHao1HnUUt367EKSCQBQTjCgEABvHVNbTaWs2ZGcBMeWovwduLfgKiYaoPyYQ",
  "key9": "2HKg8PkZjrhfcGdrAwqz33uM1qWcQ7aSwTny3dYgEEXMLFkhK7LVQsgKwS6BD9DZZBHEbFSWJ1sprXvyN5PmUtkX",
  "key10": "5Rgw6LELgkmkLVX3oDeQSAEAPRqiBnGSD1nZeyPswDKKHXGFk6NKvYpQCTn2SXWTe9pVPqbiGaa7ofGebcW5ttT7",
  "key11": "NsmkzF99xmbVtbhWMQY8e1qFx1bWesv8FVd9JMt8qKjK8CYsGExVfw5b785zCYgNgvDfr8sGptj5Vpqfni8L4Ui",
  "key12": "2oc6e5tCmHHkFZP1Jb3wSM5mVonqEoZ7Vfh2ymsb9uLEHh1ZJaTi1vB67fsdmcoXGtLQk4Qsi3W3UwftG6723yLZ",
  "key13": "56VfwGc1NMJhgn6Wpu4rwCGrFXg14hTVEVUNShioGGNSbEANcHaDKpebgnYK1vgqqQG3R68Q1RKH4Jh5QuteMkZx",
  "key14": "2DTw7LuanQG3vZbvzbKxmJD7cuV3scLRryg6htqJ4mctxJhSHEFmJ57EyHfH4VsMiYQVERWTPj2doq7zRt76iyDx",
  "key15": "3nMsksZ1zghoEB6Y82HMLYJk3SbVUXq8ph2z8UfRBM5BifZQhKJceMyfTQonqMehWQPTcDgULfS5CmL5cU4pzaVu",
  "key16": "4RXjQ6aTeNjC6cgfJG7m4dmNqEm8yh6Q87NXc2FgZeShjLf7bdRQtJMZZ9Deyn9FFUyt5uL7YFBvNGfe7TtVcntK",
  "key17": "3GDAQbrjswmPpqtUjxrz9vWjAF5wBzVBqkndTqf2cchhpZYi5otAnB2isXkiaakrb9kkQbfHmWqccbtPoK3qaSn",
  "key18": "4qw5MAwXTqnBTbCyRrfSk1Z25SXsqGWDkRCqWwUzT2YWsRtRYtmB7u2VSHpog85YKcNWtc8bCZ8YSBMLLt6RjMBX",
  "key19": "2NofsAZNXzUgwL9DLJ2Hou1Rc7AeZgFfWheZBqXkfxmztpoDXY3nWij1sFVf9zNM5uk74RrA27nXaSHocMehyxmi",
  "key20": "5fkFLWH99PiSzAe4zhcFK17sSPzXSKLw7HJRMetQ37Ft4Q7y5Y9iezQJuwDKf6M6n2GdYDvBQXHY7EJiqaLJk8A2",
  "key21": "4W4GJedwQKC8uyrWqVDYQv7ZDkAzKvWtRPh2Wk2qjQ2DL6edQzaKaZKHK63NB3nUBW1EQTQjZhHLACtv4NzDzSE6",
  "key22": "4fNZ2y1ePwtNUD4GSz7pGyR4j2f4Q6WumYqBfrgY8wEyBWTMQhETfzQScGGM2eYeVuSfQGAcorksbit34s8eVXnd",
  "key23": "3tFm6BDnG5Hw1LWKgMN7bGH8HGx1M9ZEsjAMJuGS2rGU6grEK4BiYVyZbhj7G2qeeuiFhq379qNPawBmm9GmrrbC",
  "key24": "4QVRWCkGasrJx7KLu8DBVVR9KWh6VHjkkQEE2tpwjrwCGzaj1NycLFAmbPvs2uezv16gUb9jcgXZCi6CVk6keW3K",
  "key25": "5VnJ6AW7Ji7Jv9NCQcrcJp7KtmibXjEQUo8eTrDcYDN9GNRmGmrj9kErZSEH2vVGnnwDb7w9XMFx4QfhzdBMJWvH",
  "key26": "3jdku2e3vRH6zdyjMhYqB4b2CGW6JbCd2vigAuWfMXXuYRq76gEecf7S2Xo1HHuXZ13FKANMHdaYdJYhTQruW8oy",
  "key27": "6RnpSy3sYQi7xRv5sJbLdoCZDyCGjjzBBfvAxXva7TMd3e7QSrqWXTqPSyNSocHycZTRMRf6Rbg9uQJ4dfRgGUr",
  "key28": "23YWP3TxkNxGdX74JQt7MP1SkmBzDU36T8BELiziGrWd36h3gazCFmABQnTKY3oUbkdxX2iHrrodpNBnjGxuDBA1",
  "key29": "41uTkgHnQ5FA7z8LZLpakT5egciJBh3CKY4vD6aCy68A8zNHBPY31PgEfPKQNkB1NaNPQrTFe3ma5DTmYuVeEaJc",
  "key30": "3pYLct6Qu34Bq7GPHp5iYWyvvc9RExiwahTiuoz53nV7YqbKgYmQfburMYQZpypkMCLqzZJiaJfYVktuFCyxT4Lo",
  "key31": "4kujT2Qj73tJwLtph5iNb5rpbtz49j2GFsgAMtnbPu6yz34bArjBaEmm8aWJQmgEh2kMTiTodP1Bxp6Zkzp9UcZd",
  "key32": "DznwTKtEZzfLbCRMHFRHhzFWcbQ3TVuma75D524hCg7LebCH73KZMofhDH6mCmdyZ3ErBE2Sk1GJ77wxo5Zez3t",
  "key33": "5Bxuh5bUEixz5eL5wQTBFev39aJMNsezVGbbDx2yA3TzP4bNajdq5KhmckDeCgCmfjYmLPYJKYQEeJ9MBuPjazpC",
  "key34": "wsbcTpUZFzC28d682xPby8gtUeiWAeAqJxMD6JcXE9VVLTcw7zN4Sr97cULCfcmnixj8m4FFKSNW3MmpNHrweRH",
  "key35": "Y5QbZtzPFZnZEYSRVJ3ykzwEW3bNCkdUEMwEDsiDjEnP5nv7AVX8eQoLEM7yHk4grv5wfQYkMLHJhrs6UeonzEG",
  "key36": "91v2T13eKeJmnmeLKeDmVpFBDFx3LEwjJP3tjzBbz7uJepmKz1AH5zApJzxojUsiqPGJCTs8Gm8y49nYHPa62Fk",
  "key37": "5aeavDco6U1es1L2GCJ8P11AGs8t7uykWUCka9FuYZ1AB6wNsZUV3bXusLeic8xnL3bZ37MyJzDH982366yBtxyJ"
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
