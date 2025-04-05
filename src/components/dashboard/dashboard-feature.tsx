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
    "2bwiM5Ubz8Rf2LvwRbx3vTL7WrzqABUeJuBxRKfLKd8TqMpa2RNw9Q2ssPTYMNLmrLsvqdSL8U2Gqt6Uzs8r8EXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPR5QTEusLY3Pozx8hod9Rn4ybPMKJ4sdwarXZhwwe9msvghddjqiGT9quvbyjss7TPZWqjqyoKSZCzxVjBW7mG",
  "key1": "2USo3mGEjxP1JxzYa3boooazNDeXYwRW3ou19Gn5fvq9cwshPindu4Akawhjts9wRxXqnNQ6UzhnM79a5JJUyCow",
  "key2": "BpodJieMzEhZ1Nu5ciAxkT1tRxBcEvZwU6M3ktrueQBu5WEzkchsHmCE4f89cQRVfWcKjF89nYLiZP2csfnFAjt",
  "key3": "5NqAuxMSjb8Tdrx1uwATpjN2Ti3FdBLZnGQeoV3dN98ndSSVrsfQPiPbFxXLDyhxw39A8Wfm1BrstgouAXEXEzCh",
  "key4": "3QCyuhywziPBX4T5WcL1ucbZu4dTXZKYygZtciRe2rMkU57t8UYrnFwQKCfQFHLLC8co9taJvaxvHwBF4o4VN2TW",
  "key5": "57gdR9XKehhaRVKofLfYvPpjazzk8VB1hT4V2fM9SajYfE6G57szdPFLt2tBmShCEd7vJTbZXDV8fZqFfShdUwEK",
  "key6": "49b9wD4Ms618jb1dszjVZxvdhWaQhePeWMkt5h4SnwqM8qTQ9JTi3t8QG7bUoVn8BvEFMdUcATJcqYt1FecaR9Vq",
  "key7": "2yXwkcxar8P4DQUkTu46LLUM6JCD9rG7k1aT3h7LccP4iwx1pELgyg5GmZtQaDgvENk4xPuadHKvLPYhmV1tQpJ4",
  "key8": "KqdDxapDBmXiPVqApqAUBYMWCwD48VcghaQWLSj9xAjBb8r6yh5SJAbNsvHJ9LQH5Zu5fg6sL5zzVDrajjPH77G",
  "key9": "2cvUs72MV5WxE9RpFgT3frG4fPPxrpvHF5ug1XneTDghVM4HT67qU4ere2NCVPok6sgkXFDepAqXyzFVvKz3ewTN",
  "key10": "3DiwnqLSWoqTjd9UUPrjRhcUWJcbHMwCg6NZri21G9toHsKgLtCQzYbydcZQ8YmuL93Nj6Ybu3S3SqBiArYNmNpf",
  "key11": "MBQmU9z8rgEBmTXXgSdqxAzhsEf5uerW1K8a4yZDUcAv3vwfXfvrxrULhQK3qPX5EJ8XFWwRGGFuutd4KenxUeo",
  "key12": "5LpuPdNtKnxuz3FV4ZoyBjx8oyCVHrRRhYZ6GWRASSVo2gphULtQrtBf4rADHZf6q3jbHdHFxuSpkUUJFQZS2BZY",
  "key13": "2U2aLpQdY7PSvyC6Cfi4a7ENAddd2FqjuuTJwW25Wuppi3kdMtAvuPsCMbSSJo2zuM7BFd3acVZwVfVxCNmLUdmy",
  "key14": "34DzmbRqWgcfCf6QNoJ7nEyNdthXkMtfH8DiWXwd5YYo8PARd3s36mRjAZXTQpMaHFzRSxiitPySJu5Faj93n3cP",
  "key15": "59CqKmkpdQvEMpuTfEuJD48i6WDavN5UbhhNa784TM2rZx3eB7teZNPEFZUf9WeeymWYXqgTHrQ34igVN4rDz1qF",
  "key16": "5gxptNawvTptnKYVV9ZjiTCsLjs1KyA2Ag1vynD1xLtAXJzJjrBcAirt3snj3iL2b3scs4DKUjJ9CkUth1cPDz8h",
  "key17": "36GcG8xyyBTduXTTKfxzU6NKcAaKJMmpb3wL46ukFTE3tbv1DJJp4dvdvmui1KpEHetJt45pxA9cE4t9jXn1dw2h",
  "key18": "2bqUYrHjxkNGHjA5utnRins3pnVyWSiJyVWqEn8ehcdUqzDwiciYshSsTpkAF1BsXsMHngWRkNVSAQCuyU8Wwzc2",
  "key19": "3FB2kdmkEi42uZC4KkcsRDVKJddi7EGvvRZZkJLCQxJewQBMfLk4HgiDHWvkkZyzj4zZFhtpz82K6JKk9rJZPFd7",
  "key20": "rJKDue6H8iBg9QGuZ6CVkbpQtaC8kE4CGQdoJSek54tuGNgGuVbGNrz3QzLb64WX4GFE2dvubvjyLeBLQvNn11A",
  "key21": "3GHhYKRQwraSGiU8BLAQMttNUj1z6NMih9tJNR8D5tGRh1SGG6KnnGJYtsfLpA6XvJKDvYFm2synWvHMwnFo2Sjo",
  "key22": "2CpyoSykxM2Z8cZ7XUT2fysiFNkB4mD4HFXDPKG4xtSAg4Em7UsdzWFEaZ1XoqLjUHJq6JZesDrJoAWERudMECpW",
  "key23": "3zrG72DYmRq6uDupEbioaB3TcTK3HxfmfaZrXz7UcVZXomg8j14fADi9FDcww1vqiJq3TbbYcYSGwNRdrXugBtkc",
  "key24": "5GsjPm6URmFvHewuzJBNqPqHZ16rxqyEjBr3SMfch8WafnvwtGKW4RyeeZAkLbEFxgNQrjQHhhFoACYmWiFvLRV1",
  "key25": "3pJAffKuGyUWQpaCFPqiJADzSxRkHv1Vn54nAe8zEMnzzucJ2hntsyakchdzZwdyhf5KLymgMfhwkajxKgPcxWwB",
  "key26": "2NJPJDcifqnHteLLSUfbdd5pBsDFzW2VaHCh4nKry1TVr3ZhTkSGwAoK6mN2FPCcwu2zUFQ5JcqRgFqVBuHVPXic",
  "key27": "668J4db2aZFrmMB1rUNNfbtJP6JDm2rxAaFVHtLLQ2N7PfLzZqJS6eUUXkXVh3J8aRcqRqMKsq4GJTa46uNZD1Cw",
  "key28": "4mfP9HLyjxwNJvpVmMZAG9CVP8r6FJuEBBhRZMzpyTyhRPpwhhAxu7aDV9KMEJhLpR1tEQ5sJB34C36ysrpfrPvs",
  "key29": "6345dE7eNvpcincMAVJNDMmbxvvDSNKYfjhqsnwfm53JjHuoE8CxBdH3b8K2kAyRrQiZijM5pBHJaCSw3dgpqtQn",
  "key30": "2N2479nyKJUUabbRB2itvJFj22j8JHwtNQXDwB4e2Yrwyf7htkj6Efb7fFCzqq3QUavRTD5VJmLtzR9cd9wX7RYS",
  "key31": "2LcQVWgcMVuSkeJRnVgtoLdX94WhUyznWEquq4G5NttQuf7ry6CSzExJYMdV2V5Mg6GK25TKZuUEX5QGVBYJWQrB",
  "key32": "ipREzZSZy7ZfjGSo99826TP5URuYK7np8sdGTr6tR7LkXQRPsHCbxL4dtw6MZUkrTrhM7DSUs8LCSVZtcADVhg2",
  "key33": "4kQeP3jUyiH5JmHDxwvzV7mtGRx6ziE6dQZ41cSViMLFNML8D574AT1wWEit3tgPAS4QdDJ3Gq1K3fx5ZNnMPbss",
  "key34": "4XvaqJZA7n6DWXd7ahymbJFFWYsi2yFb1psqL8xeStfwS2JUvUgcy5cDce3eHh7wQAu5aCfiYftYEgS7wncomz4A",
  "key35": "3KchMWJdi2aGmEHrt2jWjkdPDrpowPjUdUEGyVqEcXMx3bgH6p6zvoZDGxhYEFHC8X468CfDimWPtVv3wxMDquFf",
  "key36": "2q93Q9UKp9DGDpHcGzX6ayAHsoFWNdkU5NfZNE1HBbqKhXukBFuHASP69tgQUpBNaEC6DzhGrVJgxWfeyzE6UgZD",
  "key37": "2Q76YLr4S6fJmd2vov3YnZvTW69aqpM6y3YNv5VmAkGKKSs5Ech93mjxof7Em1ikDb4ooejoeKHLbbXU84TR5X72",
  "key38": "4H62VqE6eccM4X14ybSLpcZwqBMHaSSKSRcewaHrJ8mq8rvW1XUea3LdSnqq7RSaxKfinA9xS5zZyMjjdrL5MNu8"
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
