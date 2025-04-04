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
    "dKmKA1Z8p2uPfPFtAwGgVmvcdEYKoWHMehvNHMwRxTNe2RmsY73cziZE87JCQPm6wf49KAJkf2FVh8a3Lvf9Nbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPFG1hu1WjEGvXDSVVMiSKmAAdW7fzRSdusq5xbEcQdPPyZDQqUTosqQNjjyoDYqExm6rvKArkZxe5TnpXij41D",
  "key1": "2u27RcqHzMJBB8VBMfNwgXPehEFow7n7dvnvBXzJZUhSQjfXgu6DzxgCknknyDpEdNzPpWTbnJxoGNwzA3cnSTgP",
  "key2": "4T5b4Z9QTv228xCjsGv1XqD2TJtDVZ2SWZ6aD9BkpbKYTR5jihAbLmJyx5dTmgq8LbCvDL4eLFDHhPZuZvx2wrpn",
  "key3": "5L64tQvTizg6LNia2kHZTohqr4Hij7An1ccuRV5JTdSkXhxBpD3CAJLQvJpw12bN5YorfySFbKyEKA39ker2eWd",
  "key4": "33cfHD8nLBwV87bCvjzquGtSya4a1vGxNUBseFonRhjQLYAcnxDCKXnJTcKwPjbwTETjNnSFTmFt7LVeehFXRP1A",
  "key5": "jayNVTLiQHzw4kqpHwYffU9idZnTsEF53xeea79Qd1u4Wk96VaNpjdttNJS7M3vpvUwVWcfhCXw7u719C61bok1",
  "key6": "4oaaXDA3siVN7hhCe9Vat7fsDK6AHGvjDBnU45nHd64RzUhyoQHuQ2AS243ppuoEhAVhNdNEN8ay7sMVUpwC4c1L",
  "key7": "2mnjSFEK1aCkhjfA351rYgcfuJuKsshK1KauNJk2r3T7YPobVq4ssHGWHAkw3hvtH6GFqiiyv9Cu14Yq5QmM8kcW",
  "key8": "2CPcSKhcJiypz1m9DQh4andeggCmEkxEPXWs5KsWsDvYEYXJJgjZw7uWrXjXqGnb6EU3aRRyuY6Wrbg3VYz7adsb",
  "key9": "3DNgzUKu9Z1L9G1FEbUKwYNxxCShiqjJe1WmJyGPA98FQtyto2RR5tvJHPBgHtXH4YwsQ9YBrgnTHoMs5mxoYxMz",
  "key10": "2wrmB3WuDB18bxdLVkSYbApdFGDHXXxCmszat2mVQTJFBX6GW4Y5QPJgWNZGmLo3xcNUXq26oMaioqdTUPDvcyn4",
  "key11": "6V17os3keuo5fzeV8UJsu9ubzHC5PuSUuPtkLyQYzt9zcevz7ETTK55yxrRYXcC9wHsjxzMMiMPpcFp5hsponnW",
  "key12": "4tNBBzcnFkdsuWYjPcMBtzUK7qFdt3UqRM9hva4mbdM8v2dLSq7g4ChbQDK3FZYCeJWXNYayYxFAX4V3938PLecZ",
  "key13": "3JGHx6uEvkiM8q9GCe5Jn8atWkbpsCdfqRw4ktgxwN3BZ4YeB1uasWqyzihEViaVYz7uRuX8awQBSLME6s4Zd3hS",
  "key14": "3DHdjbypdirJxSPSvQLHahFCW71bubuWesWwDCuyyhg2ZvEyrGEPdVWjaz4z5L2JNCL5fiAisn7WfFCUZed1XftK",
  "key15": "3qSn21Zq9JtjQpwDLqGGwwCrygtSPA9p161jZGTf1uAgH5kDfWKt2CRgRUDo8SkujtJSeXRkb82pmaa8MNbRnE7k",
  "key16": "4qzuBoo7xGYqCsn6v2yw9whUyCrQ6ZMwqyYCRBWQochmkBDkpnMe63KHqmJkgHu3tR7STZRMg7JUzKBFR52Rgfp8",
  "key17": "5QXyRRQzy4KMpm1noVN4fgeVFujF8ATEHg53PNH8KfoKhFRV5PrMsPUKCPgsciTKYkw9JVeH5vpCrqjHGuvyrFod",
  "key18": "2i5pb1y8NfVwDCENVz8MpCM8bL6qampXUXqwxtZBcAZsDAgJb6UBaxTRa3HJfBdDqRdPmmvtkJECV96Wp3JTENLf",
  "key19": "7SkJQDuhPrQxd92veBZyWRsHVxQQmGZsfWFqs7VbY4o3rteNcbA5PuMiDx8eCjMhwMsUe6zFEZXtqYUivCUbxfd",
  "key20": "2CZqLbMM19qZTEawVAdE6ut8sMuDDKp1uTwGsDPwDkoyBk8CBevc7SP3WFKrGXJH9NaZA92XtimeNV1dk3EfXeKC",
  "key21": "4sC2Tz9ZZ1z9qW86igD69jkoQBWD4MqK7yZuYPXb9A6YqHroEQ1TzD8V1CyG1VDBysjXMTBJ38xsXGkaLjcrevAK",
  "key22": "2PdnrawebZCkhKdnAgYcs7YmLiK7AFTHDZaDcjLhhenJny1QFgHBUM7sEobAfDE1gcfs5LxfgFQBrkKpVxfw8YbN",
  "key23": "3bXqBtX122vMimXNCB5Y7qsHgW1iGo4V4yKPYs851965Bzzx1T7cSs1J5qFzjcx542hePnksVTPafteVrGan5W4x",
  "key24": "4QoYjZFwNz14x3bbaFmRCWubf3crsb5upDpqkkBGoXXH2e4j4T2JbopqSZSF6DhqGXxK2T5xivxou6UQzMSycecb",
  "key25": "48wEW9qwkUDJX2ZMW67DpWx3KwSVjT7YWKHq4biJxnc5WqDmj2abL1ZdTTiemKLG7nGVcUqxFbizWtwtwFPuheu5",
  "key26": "3JsHfpKivQKPevWsAWhqZWPeHDvG6Pq5CqT42GmkiphGmScAL4SdTob9Cqcgy2WaHcDfHCSpijWcUBC15e1G1szH",
  "key27": "2n8ZCuzqCs6AaVBqd3n6LHTJvZfTNqSMJLWHLJmyPXF7NxESwAMHomVwBYTYqyNwQdxBmHMvKPrNWW2JezmRCr7z",
  "key28": "4GRQBdGNzPryzCdt1K1ruTCrAX7RqZQcsFE46N4Ua7tYqrXhC7wEeBWJMSPLXAUn6VVYHhQAAFfyibcdqPAPxShg",
  "key29": "2xm1VEcvYbA3rKFXtTYUdeGfJLRfMe762JNh9JeuhRMNWgQWxm15b6Q9UTRw2NmhbjjbRRnV8eVuiJ5gtvRJ7QaL",
  "key30": "2wryrd5C1bQ5kabhwTDjcXCGgwKmjreRHcCLzZcSgciz8NqnvWnCjjknXLjUfQFW5GScKm9SVA1617KWgvsonb7V",
  "key31": "HQtEYo1RBpK4HPHNV69C4m3EunxeBWodHzzDutCVQKHbk6G62vEL2y3ViiJPpWnZyrW4UvS66yCEC1CWRv3nmg7",
  "key32": "5siqABPwjKfunJ9rBbm33PwE6cA6jPvcHqrzbt4JqsP9Gxi99ywUGsmD9RTf9GnVet1Unckh5uZmx5UyXCSrenCC",
  "key33": "2JWomyFNcEN52owVaoJ6zEZnNKXs6WyKCAgLoznGDHrh4rmiRf5S7PPpSWnFGWdDq135XNevN1cUSxTUZ61vWCxb",
  "key34": "UNGNh2atPgqCTfGssbAQsK2ZCFKXSoDfM3VomMjgPinivAA1bZJQTZbJ5KRcVcBZks5drEK67iYDyjDTZEgzLYX",
  "key35": "5p8pVP36wSzkw7Petru99oB8vtKbGD2BEsmXryXyTiqhRo5cwQc7eFWhsH7SgocWVm2a9dXVPFYghhyweUd8yL5w",
  "key36": "42UKJ3WgtKcLD6fdcn6VWKLbVSHzf1UMgazN6frwHweg3WzyV8jmRxvmpkqGiK9TzN3LhLgkdpkTPt4zwt7YBcvx",
  "key37": "5Evz8XdziLQsJmjDsBeXp3f174r122g6LbivM27DGZ4vNmQ3XNByfFgJqa77vE7rcAo29z2LwtDvij5AY4Vwri3W",
  "key38": "4AnWTkhSTuzNayfQtiMD7XWS2phnFDSUomWduqxk54pmY52EeU1QxJAwduJJGcfi4S7PuV7JumkBCccQfDn8aATa",
  "key39": "5ayKExnE3MPCSUZkh1o2dZNpTAUDjzXcke4MyzubwVjxb4VFgRmF7Q1u6uTvXjmtj5M2rMR6JbqbFpDcjc5u823P",
  "key40": "3pJdjhh8si1PkRDXDYpHsgG4PjTQqDCR3uhNUNAjNE2DUwtui4iWR6j28JhEfZ5i5gsXwroA9fcGoqb81yuYCE8X",
  "key41": "5v2nBTXpcDC7ztb8y9AcDN9FgGuZHNToJNuHTgZiEU1Z4y8UQATkGpjD6YNspB5grgo6E5noJCaEg8TKoKLx5LS3",
  "key42": "4pgyj3StqoSEC1kWNwNbtVVJsWZdtmioo9wf4SeCdjVrYVRuxpMXYMNg1rS5RtppiL1i9Jw75aj9AZNE93n1Mf6q",
  "key43": "5GncbwgnygA5kKrLrq53zmSCPrWggR1Bb2bPdPJVua5kUPeUE58wwWaw3pzzMsqphniKmF1cxTM5gJyYmpbCn2aP",
  "key44": "5rxdeSobewUEkTbESh5jrkwC4fRhQPvPcxw4FMJ3iAuDpiRgqkJNULFzfJhwEQmay69zEfG5pYQVMwM7WAqPynyn",
  "key45": "3XGZy1mogFq1c91uZyMmvjebQFahpWGSeM5vBQHdH77buuuGSLsVZAm8RkMy57bARUFc2c4TpQtEKb3VnVyEWe5S",
  "key46": "5StE1xwmKPWgpcTqzj4tYdu1w4g6n878zno7YFCRAFFp64x1TR8wmyAZ1hshyq27o6KdBFJE8sLCv1uiCCb16C2"
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
