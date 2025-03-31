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
    "5bNN8ywuU6dNChwZ477dkGbWNDUDQ7h46jWBDQhJ2fuq3vtD88FkFLCjBobdougYGwLxeqfs7AwpqiJ6hSAAEbjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vH9cRdyTCTziD2LTSGWYsAc9ikhKBZxXMJ6rBRHbzRDL9zBvgRK2E7PpkPcvvEgbJ6qfFvhDPooxDxS8yVatupY",
  "key1": "2Mu9M1YrLHmsxZfkK7YdRNyhqBhyp5uz9Q93LknScpJMvRaot8JQWBzxcVaAq1v1Sgm8PQtyTTJXdecQUvUNLGu5",
  "key2": "4LjKwKvQRMAbECzoFpsWbJskpMc7kDfTs4DjQS3avj4naAJ9oHquZoLxt3FPX44bLtZcFA2WuUYRjY2tUMHZsoBm",
  "key3": "zvuZNjWhRwozEZdYQyHWkaqfumC62UtPC9rA7Anxd7Zg9ox32GEfYptAEc6AyQAoyEhxFnA2S3MdpWDLKYc5YwM",
  "key4": "2LSjmTCpDMQm6kTPKkAFWwRn9r2wB1JBCvyF9WScdiidQZhMkS4sk1xNaizAUPM9S2KQNnSdgFMffKeszbumFP39",
  "key5": "4WXCmxZfMxZjm8jcDmm36g2xDCfX2AMBKEacBGCm9wEFygVwTEgKwSYn94pcyJ8yrDwiCXhPyMT9YqDzRqSXfup7",
  "key6": "fFQsCCHAdYrVa3pSeK3YSgoKWAvbsdKSZb7uJrN1WJCjBVYgVPTAAmWxaUMUfjGVB5rzQxQSjYzmqAcHn8XbNYb",
  "key7": "2ESu5VYvjs64xtMVY5t1jaJ1s8gAFfgTgJcg83XCXNyZm4hcneJyxvZhUh15rdY3Ux5AWkp7ctiB71sYwaoaJtd3",
  "key8": "4dBAbK5pKqzqekpcnjbaTzKyx99Jo5V4sMyAC7cFmuJTeVCTs4aQzSwXusBjSbefpbxHpGHAcg9UkguTtnNuK1p8",
  "key9": "4z9VDfRYejXtyu3wmKQpdfcG7geC3xFzVTUZXiGJc88kU3jDNs9MDsAbexbhSiuCQr4Wf1NekLSX3CLwbvryJgXo",
  "key10": "4Ckc3kq7LMfLCT1ahqzz41gqA9eQvCcyfKcz7UWnNtiwqRDSFCwqHuFxaz34c28CNUk11S56Xkf4iZWPwMJBqGen",
  "key11": "45s3q2WStyTYAwpksxxFhTNatuwZqbXkU7vENgJUm2EUggSx5WfRmzL66qdsm8caNnCQkBLyy6CbHrbWgUf7gSVH",
  "key12": "2cEMbbzB4KiKEnRV2ZgU4PEyQGMFS9evifo3TTJRTPMpZGZTc5AHgqytS4ApXTgGFV5DhUKEqiRjYZH7b2QWtUfc",
  "key13": "4m9bjp6BYDjHMJi3C1iaHENYKeCsdznud7fCVZ82p5U57qxRgrXmTwwUtxxa81qzEXP7TxUVkR9PVXyWxjJ9mPk9",
  "key14": "66RPNMHLrQvCAC7ZqURdk7MHCLcxFfve34vUd11je8oTafgu5SUi1KveSMa5WuCbwB1qbBDXpr7YFeruzoCaW9fT",
  "key15": "y1g74u7Z6ZQFwiwGaFYKevgaXxDd7GcYusbSaCMrJEZDp8DsBJQTY46FcreCAbcgMoVtjKAN63khxoBKeAxkGce",
  "key16": "2UkFcpRnGBs9XdKVgcDrmqSFiQki1sACMQejjLZDB89j3jUaYk9GFvGXzduZdZgJiwGBqj5WSFtmhBU2mkm4kmmr",
  "key17": "gjWrfgrjzoT5q4FxR6evP4DtH4cHQ5ijWgQCMQDukjmAxKhPfKbGhfAbc7NRKMpDeS4m9QPUgw7v6PBUz36eX48",
  "key18": "g32HqcDAH3ErEsKEbgNahHaoSBS8fm8wUTJhhPXUCxHR4tb67Hk9TUpi7rPkzPLjgjgJCF3Qr4ss3ipZzjtDa66",
  "key19": "5LsaPEfUnsTGHXoBB3JiZmHCMm3HuLwkU9oWMTYgYxtEQARz3M1ihrUHzFjYXP5jkncN9jMKZuh5t2v7qBVMkX28",
  "key20": "3QYemTqnemt26385JtL5hy12VBMHW9CMcZsRy7VnsAJMTUTUB5sgyJndEf7LUqVrCjUf3HM68CCg5omNSfHWEb1n",
  "key21": "4d4n8Sddf4hEbQdqgZq7nEtYPhHRJKhuFkXhzt8S1MW9nsN8ZqkoneieSveBhuyghi1o9CLXr3Lm6mKfs5RLUZY5",
  "key22": "5ane4Ud6i9KmCmsVQbmz5ANhZsTwFPKsKXACxPphqAgDckGGq8BrkxWeydeUwHfkRb77W85DEZwF9HCWkXyvw9Gc",
  "key23": "3vEbpdP8sWTwfQ5SidkVPxxpdv24oSdYQM3fqyNECiuaQVwnqXnkMjP6kPKVW5qeLZFw94dGzNwfoKFZbYGPEEYR",
  "key24": "VnRVqzB19ntASjLrNsGNYaNy5KzM53mf6SH6kJ2df9jqxSGND832kMS3HMJhhMWgAGPy6DgEMe9P9yJY4nxvT9T",
  "key25": "2rqbbDcE8R9FCRmj1LBemN52CQDXA5azshLQM2Rdgzdk1wD3mQJfbsjhE41JDQaEfEWA3xWgnn3UTJtN43EWmytZ",
  "key26": "3heL2YWqvRyFVFshRaS2ZxNmsNGSqB5Y9JWGKE3C2d95SBXjjyjvUmV8kyxyrJqxNgr8BSeShrKsUTqVAGjaop2U",
  "key27": "3NRaotM9UPGtLyaj21qnwqvBHLsKSvTG4QSswcF9zQNZu3THPgCwAffXR7XrMwUUQ8PCuhxha6nxHNogCnXu9dk9",
  "key28": "3xoJjoXgaPeEBmny8cajvZv2w8LY6xnuJRDACVmQ6m4TJgdGDC283CLDBdio2fGictWMQhkGCthpCJr23QgFqBbU",
  "key29": "41U1b2W1Rdnk9Bk44HYZEdKGQkYw1Az4c7oq8XbnHWnSAqgRQrU7G6ZECFYxtpy16eKh64otzJYorm4PPXRok9E8",
  "key30": "i5RB3CKDJeuqNVdPMZSchnEWKcKJayHXtUAH2w1higz7dFWDWPTU56dDJGpx7baJoH3JHdyyUjw43TThiygHV53",
  "key31": "5aVdZfA1sFnxseDrD78BYktuXt6FXvowFFs7VsEkiZDQTmFsaGZcWDD2q4WuchvmEGoeqVRMweWgKHcTvzDk1t93",
  "key32": "3Z7gpHpDwnD9XnF5sUeybnamZN3KNwaoUucZbYwwRiw8at3CTJP1hasRhHBKYx8wVDibKTAoV25cD8LLiPczzHkA",
  "key33": "2HteKpsNbbbdMJagYB9e33ytT2YPaUmfqKyGwzRggmNdnm4qPWtYPM5Npbn8A8qkUFfuZ5xBSRnpXmvCFpjWfgKu",
  "key34": "3YC92Ae3qYTWazA2HWiXWexXMoN9nPgZ11jdctYwai6FPwfXmDs1nKJf88ECT9NdpawrWWn3MCSufUjtnAK5HEVg",
  "key35": "3dypMMPd2oivPVBft3THhXS6zyNFz3jUY2eg2FubMfF6FLZcGqSQABDoLWjaWpybYr8gKBDd1iBSz4vWVSXm5FmU",
  "key36": "58dyLjB7ZoaRUtMhU8f1p22gN9SxZYJa3QeTThteTM8Eo9Ux2z3CbJr8hfs6UTv7EtsKPA5yevUTenkmJmFZ91Cw",
  "key37": "FxVB9HVfj7vyQHBqV7vFVs6xbeBsqTQnmXTPMYbUdnZyKEJdMvJpifMyAN1sHHLMjtEUMdeo3TqKGKW9wzakLHN",
  "key38": "62xfxXvjZ7kMx34pLjN4N2RZDQSCq8zxqceFniZoLBoK3MLTMehSfrmq7GmPQR1GV8QJnhzLZwCZKaWwZFeKX6Cj"
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
