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
    "4mMmFcvC1mqhU9MA3Yb8tN7EVYRN7VKFL3CKiV2AVkN8VKu6yG1K7cdprszXWyapSsTVq5MKkWJdc7w6UoZsXGGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWQ4x5tow1GXZZiKNqP2z2bBVCKH1GQHw5EFf5SwoBAyw9f4LjXkhqdr7xinw5xwM2awuCt3ppkfhpQCRbhmndt",
  "key1": "29WwVMrkSVRNDzvQrJSUr6fXC6EPZQqFjVdwcaW4QQ43WNVbJ281USEdU2gS1m6HWiovRyuhVwqfpVnwuVJtz5cz",
  "key2": "3nGQPcRneKjaUVRTVEwBvUpHz68W2yuU37XHATStFmNFmreThx6iVZUQmGhZYGaEy2DgdHdeztQBgY585m6SaWPN",
  "key3": "52ekpj2Sj18vZHH6QxYseQ5c94YSWD99yrYYjMu3CFtdyzAbMiayGvcR4meCqGQZJ9BNy4TxrVwzG3BKxdcvV1VS",
  "key4": "2srJVyTohSduXCQdFxdJffJYyz9Gjy2X7HkB634o19eouhmPL1z6Xgja2qbqc2q2DAEqHhn31BcfEBaPSmbTUpVE",
  "key5": "YZHDCJZNXoKnRwPELfYWw48wSwve7vLtb6sUrkUTzKEUMMc5Roc21ZRvGbmsvfYkxtem7WRt9VkU6rL7ikAut2F",
  "key6": "SDXsDLmDuT7M7qVDotJeiZY1jE4kPVMsr1HBhvRz94q7qhCJHhJrbSyHuRsnpcGzfP1Ykd2Ri3JFesPyoF2nSz3",
  "key7": "62XWtW6ApfCPRk5sBtdnYdw9P8TUwYb1i1WRjnoTyQyNyhArxKyeLEGJPPcE1zxYWBYmsGXiArhP3txyY843d82m",
  "key8": "uYTsDRs4NeaknUmsYyA74oKhxtGw95Hfim3vv2MCBDnrsrLdMiXFyHHheEu534T22fmp1f2cUasyQRS8Q5mqoEH",
  "key9": "44yKKwrFtPccNAjovF9SVrxDh5yizYvTsaVBasTJ9sqkN1VAMtrZbMccLL8iy7foHowsWWQeHNhsA7j5dc4mcHr1",
  "key10": "2i4XR7YW85LA5vg8Kxynp58qySGVvY9zFY7jVocjvVnaZSVs3AJ88qfFHJ3kGnWA5GeG4Y7VKAE9LkCtPrMeEGRr",
  "key11": "3EgPUsw7WoQA2kGpFC1od3SyrX6pgZyfxTHcsRLxv1nN9Hpb2qgCsMp5x6tFE42PVyNzYRpJhBrNHHYeGtSrvAw1",
  "key12": "2M21V4erLjdiS45EYcVkvBxkjU3JqB7YfCv3rc2F7ED1fhd8UgxwEHfdk38NCbaaYDbXcVPbVivw1xPbbaMjfwnd",
  "key13": "4C5hUf2dsqaEsMubF6d6SWmcEGM9YyEFFGD9Cp9NPWu7kNjgRokccwc3uwXE1V9MMrx5MjhrX1XbZmkJTZ12hTJQ",
  "key14": "JJGwccNaZQ83dWsx6cZFbQ9ProhF52RzwznAGHR4cnTC7ar97jZyD7AV4tZoJBnW42qLJRvmeB8U7YEpvjHcwFx",
  "key15": "5wYMPMZyv63RkXKv7xovQHA1XPbLteZrBYCF7WvAwHUafEpDCqUJC81VJhLiqXXnCihAWSb7WFeeE6mf4VbZbsy8",
  "key16": "5LnXpXX6hWBiw7XUmb6k6jD6XRs3TC9kjgEpDp7rvWREZd9covbHwSALpMjg9JHTcJnRg4kkc4fZpJWmJzGQQDwQ",
  "key17": "2N5HGPb7LTNfXJmuJL8cG2Feomis4dwPAtf6EL7stCpun2mHQ4a1WoFyGvf8aWen8SExo3QJfTe5Wy7c4FJ7vZVD",
  "key18": "516p9kpxPmvarjFw5mTB88RWe85Hcmy76q9ohzRtpyptU8kvCtdrChv4ScCttXtJh2Pf45PwxxMfECXffcmQoqHz",
  "key19": "4ZQeLpPJRCeQpYCyRWzvCYCWsKA6gGzXb8txX2b6fnXAEeiw4Vogv633pSoJC9RtdyjvfVEENHCqCA4XLR9xxSgE",
  "key20": "2yac5vXWCxPZLE76XkAP1By6nKMTnha1H34PiB7ShaNKvevuPTvoLFXMqYjUXwP7KaQWudotJ24RPZK6JnWLFpqd",
  "key21": "GSfFmJPjpYnTpxYhRjjyuevvyeeRMNLJVGL77JVbVLBnFSm2E2JZUp6R4eRDR8mL831Ywmw2SavxUCZ7URiaHVU",
  "key22": "59rxtuhbw7bqTTYnhceRbpAWmjSEdvJ9DctZgqaAiRGtNQsQ3koiPXg7o8yxnq8icAPs9MBTqgd3yiZmbN1Q84W9",
  "key23": "42tkyVDRZqQQ71oQWVGyTSpB38tqHnTEGJNrB4M5YCjPgt8YxSZAxw5sfX947xkPrmHQbQ6ooYGS7UBTNto563Ap",
  "key24": "2TMHogZ2aPufeGAA5QDim3G8RgRBdciHkkV29b8N5WTAr3fivyZvERYWUnt75kbjfG5L93Fx7GooMZ36tbnpz6sE",
  "key25": "33PWNyzgCaxuT2UPy5qdfeigdvLPkw5AYpqpxx6jYqzzdLkgHkpaNfvk9sUDxuyNoqNdk6AaSqkywVnRC6Dqc8Fi",
  "key26": "4mhkcJa9wfcAyhFhTsMCTcVzNBDrb9uu57AcFv6tYWGeYhBsj7FivSwUUquQuMtbgLeCmBfDR75U4XDxEPrZJjMU",
  "key27": "4Lb3Qr6xESRKbMhJfC8dLwMnrWjrnE45eFeYhtZtqWnzuwDaH4eDVq3yuxEKpZ3WCTxbcP4oAvs5Fn3Zmr2VGyY",
  "key28": "26YJHDBTo5FkE19QMdeDGpEJZSSwQa6qKk6LAQ4gKGwNbFmP25edUuZ7xCzAznJijtQrZtz7vhXM3uySFPUpmuiK",
  "key29": "RnfrroJCPqHRTD79a7vvtULnSN8NxSxaXJiGvSboS7R6FPNrWjxR3GDMh4W4JoJCDSQ7jff14ihptgTXq7y5Jbo",
  "key30": "bSokMufMkvnsYBRkUcyFoU7nbEGttzYCgoq4i5GZMBxahiZzdjgWtDmzwU8x9Te6spWSkf8szaBMfpBnNqDchB7",
  "key31": "4ryJHy9h5c4AfqCZLr35jnDCTepNbXy5M1mHXhTm7hSQHeAzHW9UoEi8uhBhsMKA88VXbpGX8aY5oabfDMKd8CHz",
  "key32": "4hv4uaQtWXJMQynqDQuW5P7CrTkddMJB7JxU3QkEvbZhZ9vT41UNaZ9X9L4uNQZ9Rj728T3Y7KBFHbiXKetqi7V1",
  "key33": "4V6wL7tWPfwkGXsp2bzAnsU6YuSvwqRUemj9iGQ85NooFvozoWxycWZ3DkcjqPBBfUuBZwQyLqZZmZByY5pC6nYj",
  "key34": "3ZyTAtFs2xLM4i679CgQsapFtpJZTHhJMMFAz7vcs51ri44m95JyhyBKrMHidTDmAQCANafapvhtSPLxSRgV8kwj",
  "key35": "44TkU2Fe5m99RArWDEpDRSCzCysope3pFhaiJUL7VnaMZkZ9rc3y5HaQVRi52iVuscN9ePczjqRjjgznkL6ULde9",
  "key36": "5S9fyE2oARDoeaxgtDQhJFaeVSdAGhwtE9u8sPjEH1imxJhS4r2smDCuDd3fp5TNyFP8DAivVyCH42goXSKAk1ef",
  "key37": "4myfMxQjc1sSpvBwRtbpYfFrPcfRMoku5HnvxfT6WFQJeFFdJLe7g8V8ddKgKkrbLzghbrv97sCG2MfkdPWd2yRn",
  "key38": "s97zcPmVqtwfLbvkgzyyDRLdKNcdPpdJa5E6ggw5UWRxVKJj5Qr1S75frqfVrQXxjgbKBrRpJauf5RapcX2Ti8D"
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
