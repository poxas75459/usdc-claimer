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
    "5pXDNthE387ArdMHBT2FhscaHMZSNNnihVJJ3pRFNpSvKM4P6ytvjN5U3nVHW8R7oPgezHebqwGocNj5BSpqc8Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUR82efjJumLQ6HC8v7rgx2jy6J47kC4fooPddifWtfQCRpCAxSCXp1yB2snuAJ67yK8d7dWqnZDca6QeBtJY53",
  "key1": "5BCv5HWRCWA8ryw4hFt2hwu13B6LTQHLS24smaBLF8ssbiHaiYFKkoCNNHN6QYd1hSTQhJ4PoxE3tjaWoJQVStbG",
  "key2": "pg5KCMf6tT1K89EKwzdhXydeazw3aLkw4PkTa7KyUE1ndJe3kBEXqBJT8Pziks8iNvBRKoJvmhtY7tSSzhSAy1o",
  "key3": "66pVHBm9BQh1G5MvGc648J5ucYWD6k2zRmuW8st3BHDT6ABWT8b7Fj1q3weTetxGS3nJTb9NhPg49qJKr3ed9eKC",
  "key4": "44EhQZpRS7vmoiZKiHrxRmfRokVaYtGuvPhztx9qwmei4LkKn6JmTufrfR7Yw8fhitJz95nZGmjff72Vvxg4icpR",
  "key5": "1u5Pu8MNGNmAtKUokcBRXvGoaEoaE6d2B6RyAxBnZTp27EqLsxBpoSBXFUvhzqiskt5ZA5JugwqciHeKo9v8syH",
  "key6": "3WvEjB5WGvjPsHmLQEJEngaFK8uEKHQKDk7q7C6hB3m1Mm4cZNvfbSTW2cdTALRykDVgSDQwHHRQ5GHXVrGvsu6L",
  "key7": "4xzstsfGgwY1njQSFdzAAk5xhvKSC9KhSCiCSuR57BYYNrtBqwoMfURVXQjteLU92AUUGTpdhrytmJmqfB39Au9T",
  "key8": "4QDNDovqBW3WAvLHTJo3Q6UaYFE8odc22bRt7FnuQ4qfWZo4H2uzAfjjRfbZFqeGneDx27SQLMKZVyej9MdtjbXF",
  "key9": "2KYvaNSWBoh2DPUT8DcAN7gDrFPM8tgQjCeQiApfZRziZZHVvmEtN2nTZCQjGmGgrHAmzpJyDuCtEzLdVEfM3C6c",
  "key10": "3cJzVFQX55TqwPDM5MyAK1kVH1ideAPUqjbziJZ65V5aVQSrWWN42WSbepMCxm8aikbUPKCrz2BUsoF9hk9fjz3h",
  "key11": "35v8YZjW2wjhc9kFDfwNuE8UT13RBMJyWzzTXxK8Avz6MPaE7ZA4m2RyoScTqVi5r1ZQ8QbJqzZuR1i1STVEBiq6",
  "key12": "UFREtGe5ZMFTkVNYDpJtcaTTSxCnukctTDztp6f4Gbg6bKYJPz2m6HbAqw9fGSzTgSY4ci1fWB8D7Rfd3DzQTay",
  "key13": "4sUuXGeQpcyubAvuQ8qKqSFb1k1wCjCarbQdBnJzZ4CEZp9JGKMyN4jgJb5m1YB1pp1ozU3PUFEJHtTAz9DvoSE7",
  "key14": "4QT2erz1BcTy7LFMPkxVCMMeH9sU7VZqrMcaur5PJVrs6KjYxXff912dTdbBp3vfw2RLdpWVdCVvReQHQhD4wy5X",
  "key15": "6DZ2poi8Te47D9KtHnsVPbF4yehc8jkEQPc9ZY6spXohfJ3Lc3uW1rDTZMfEWFfgbHj3tstpTE87FFipKsf6WXg",
  "key16": "3jmKQnFRJaSnEhv298FhB1EkYkuJd7oqj3AdBu7coZQoyyReGGvsJoxDN4buLDTq67xiNzPjaBBNpuqov8Z1esg3",
  "key17": "63VETTy96wTvssPnAqxGmeAkjsnJpURg5MfWsRNZc8gRnitEyQqcstHXRTzBjSd7WukTShaG7Ud2KYQmpLZFLz3g",
  "key18": "38uDVn5KG5W5exPqnvqT2FR5dXurLquqonHJRz4Lz2Qa9tziMuAoNHTUAcPBn7oFmYopWsHDA5UdM6cx4EEGAqpp",
  "key19": "4y7PKRAdkcZaKfL6hnTQAqnANpG67k3Y9Qcw747JH6NhRrkjieeLGLSfunknuCJBDa46BavAaMHrUujjFBGGDt9d",
  "key20": "2j37bLK1hfwJUT9ZHEQgzVQBFmae1PUjHSRav9U3sP5ySy2mAj5Fq1CftkXRMiqigodc8tTnubVtxbQxybexoBHs",
  "key21": "CW67Vse7sUXTmxhxTwtMzG6nPpSd9TzAKLcZ7yScDrM93MQb2ZkDMKJSx72k9zHewLZr8vNqXcSdPGTGPJgF91u",
  "key22": "2UfQ9qviJz5CLPW16Sy3mhBnGvp5bE6WB1d1eBA4ztu9J9z2FhNpRsayha4swHqK57kyFYow3LSHPEkAsKXo2uSo",
  "key23": "5JJq4bfftJoZiu7dKwXsiR7g38yVBCsZpc16BT2ykzXpYis9BLegQq9LoNbS7K7ndB1bKUqFxm6yHesmbj2pW3Sx",
  "key24": "24voYDu1nLcJ5VHAzJasKKrftxt91BTZb7PUDnbJ7myHgfGnFxmUe7UhVRyvgkiB2rtmw49kFVVJJbgEoFm5JEq8",
  "key25": "3DLqGfLPQrXRVJX2Lssv7FxT72hWiCedpd4SkhGrLmBg65JTVnquUCbdaf5ZrshFgSd7YU3gJheUVVWqnphR744e",
  "key26": "2fnzqb9A5oym5hPFcztr8QRHzWubhdTfDMutoXBjuE2xXBtKcFXZdPnYXdyyUHcNyf9KVtrawrY4VFvwP7cuwzDQ",
  "key27": "2eLHah48Nghxn6NfpgRqLNBuoYsk6XvYpNiQwfxC1HAW4MW7Rt5pfo3qh5dJatUMN2nw6Vbzn5hj86ToZwhAKkd1",
  "key28": "2k7wE3okBJQuzbW4L5bhp2RYj8fubdrvEy5LT3wcJCKpx6cUnT5Ur1zfMjMB3LwXmwYCz8PuRM38bZ6EeQW7te2x",
  "key29": "rD1XsFa9ZofKyQVDNNJTRckg8vgJNyhU8ZoLPZXjx5MtqwZ9HQ5tNPuCc6bYaNnePyfHqyy2eutLTTPRVKeCt3n",
  "key30": "57uK5aTuBgnPK6NTovdLwqF9potcQSJYFzkBYnGE3SE1BjnzFXYMozRfPmmFxmF8rscvKWbwEnAidawEWpa2eRgn",
  "key31": "2hKMJcgn45x5Hpx1F6Rj18GFeJCLyL5FniwXmQKANqwScsFNQcn3iUbwDXqCFiLsmbfkPiivyyX817g999in2nHX",
  "key32": "3Cy9v6xqY33qGvVFgsnwBWpWDi1xCTwoiLBRZ4bp8i8ELz4SYbZY7BTM5FXLynfgjfQxbpFKzmVB8NyhaU8jGfKD",
  "key33": "2i4ZyQVnfQEznwrgTNKcXLSP7vEnyDDpcvkXb5o8UL5NYaNY6bTVtNMFG7wPAk99JLSyPvQRRfcNHtdixtfkULAz",
  "key34": "doKckS8AkBHmBBzDTFWATyFpbrnidcMeX4R3qV63WytuPQfDmJvf2njKeby5CQUDbgbocmeT54CZZvMoLYekDFc",
  "key35": "5uGMppnwv5ADBzS7jvHmuGYViQMiZy1fD5mhLhcjUffENuJuE8nNHXKqJr62zoURkbH6CDEMLgHhPqM6mqHG8Hvv",
  "key36": "2rsTy8Hy3WgMCM8xgwuYQnyLjnMSoXnTQRjQ6ruChzzybJUPs4Fvw57qQc7k3Cuh3aarAkYXmZFraVd3sFgjxfFC",
  "key37": "54YFyfN8rgyk3sjWAUpui1dUNdVegM7u6DZ9JVudJcbsjVpqxD2n55mZxnXG29mVST8oAaNxCAZW4GVaGSX7PSw4",
  "key38": "4BkxXa7dUZ6fsyubLJF7bu5CvgDcBL7JW79rEytgxWonEeuzrNFJeUw2wdMtee88o7Xo2myFEnE68GYyzswAUWAT",
  "key39": "SHLxnRqv2oFcDimoBCx8hY7DQQNo9avguzRucyWZvrKZoNXnnAsTRMq2L6B3KpfeScowP8ZKUGpbzvbkbNEWbF3",
  "key40": "t3CkHMTJr1f8eVGoNqgJq2WjxHJqNrPuG7wdJZxwRTtGH4w463N8MZAu1e3JZhAhSKNsgGq94StZWdaPPiZ76rQ",
  "key41": "5VCPFeYTQqdwZekR5jqg5bzMJ98RMMaLixSCBeFPNRrwQrk4VSw3vZDQpGBu2aZQUUwsB6jmwZvHxzRYfH4HWeQA",
  "key42": "2BAJfFWzguk9ZvTqJfy8HMj2YqT8z69cEo8o4tEwW5qD6t49NTCKFZn6RKboAhy6Hn3CBg61X6uXKaoRkHAUutyr",
  "key43": "bpXW9Ycx6NuWno3ZbLBQaha4WJgB5CwXU8AEdQB2JoYjU6PqarfFPJvndgmghNkRCaew7PXvhPCfJ2d9ipkt1x3",
  "key44": "5o3oiYTLZzHGQpzs8DQDESfuWMjEwGETb64iPnmjavMdfgJCRcxPBJzkYRN1efaNpNA33SyUdJ4Jg128ZuuADXkP",
  "key45": "3XponKD39A7PdF4UmRA4mcMrznexYJdDqmndcGjidPN4gDczNUWQNemXgdBQxTEBE4VafGPCpn5DrnMmCnCfitWd",
  "key46": "CKot8ah8jnGDaKKoFwjvPh6Lg4Vhimbh49xPtFL2mG4XuNkb56o7G6muVWHJoaQi1Rt5befnKDjfuqFaaCx7haY",
  "key47": "4tg9vDBWDMfhPjQTDht5yJhebqrKnCeVkXRWcP6AzumkySDLma8pkPh6Q4Q76SY2uC2TiKuw4FPfChLaiapRaUQz",
  "key48": "2HxNsZmyuxEnGtcSS4vNE5eundzjjoZHHxko2H8mLNfA4uhmb8gbHoAsJ1Qfi62aKtrL5P25z8w2ZLLg7P5Qp99P"
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
