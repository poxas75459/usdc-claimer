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
    "46RLArwgfUsjYeZ3Z6tVtrunVSVbLuRG8sj5z91eAzK6KYucAM8VZbbkpUFtGn9DhF5xPctYa3VDVeWynnLaLsRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLXXrc5G7iQrcisfjs9rYoV6beVP4eHT2x7uZuiTBG3yfq9TnfpgvoNCMRRjURUeJXangUw5mWU6ZBdvnqcxrXd",
  "key1": "5Fv2Ro4vj34Z6cZSEuX2fvtqHobmbJQu1AvnExUZyGyXd4XWVFCGd1C97dcbougzABwL1LCtDkBXnCD3BLHhzZXh",
  "key2": "wFDCkf2mdGTuvd7vKxpLcAruuoBrHxiWqezkCmUoYdtedLmkE7JRTDoU25f2HDihzuVPAKUwVtQw7XmqRPGpQHC",
  "key3": "4eRCKdDDf643uK9xJjTJ6b4A1gSWDE4ov3hLrYyT5vLAAjHXj7p6m9y2heGd72cSCh9fmzG34bQBUJnnfQkgPYid",
  "key4": "3Yg8ArQXFhwLiwF7p4DzC5ryVH3jAMdRXonM1ngePT3Yhf1giBb7GqnxisgAE4kH2doqMvXK3uUdbFA9VLBsiZok",
  "key5": "JigkA8it2p4dk9SeTz8B5G5ATicomVcZYiL14oXKWwxxVyVZSjq3zcf5d6CWZhTjSf5f4VjJbP54jQPPuoGA1UY",
  "key6": "2fFvLJ1JhBq91ydAcgkmqsGLp4SXc4GgGAyQRv7SVJxWZVcCvZzBCjZyDGzH3vK6s8dtdw7teSNe8DpQiX6d8xR9",
  "key7": "Ed4cEu4SVhSSp6F52BvpiY7S4YmgnzrqZQTTKuQUVpydWzGdYjuXWtvqh1jz9BvnBjKrDktNrGMj1w6D6e1NZ3U",
  "key8": "2szYyqt8fvJDVVUJiFrBhtxjVsEhh4oweVKfdhFpKC7M7pWCfQbArwZ1pAmnuYyGFh7x3VRwh741TUQYptHSC1XA",
  "key9": "3PVRyQBB3hMBYSBFZfvYR48ZuwZVdSUFokuGgEoNjEnPDkAhedfNfBqFbNggGFnuJZzwWAffpEspS9X8qVzTejSu",
  "key10": "WaGYFC95eMJVVWPtCDMcpyLZN47frsCRFXfiEpv5AcTTosdiBxx9GmAuRFappY13hcDiGMg44tJzw3Csbn2hXYh",
  "key11": "4WJg7Xp9PrziBVQLx2eet8opHMLt7tFVH1APh4nPfs7pvhzmKR8ezy7k68qDNjNGwmtmxci3iYiP4mzZnNzESPzV",
  "key12": "58DrG6WAApvVHcPLwJLEv6ScvVGRC98Vo59cpETXXvoVtZvXLon6MTdYqRoceNbzZMWQToSDw9rcnQmorfkrbwPb",
  "key13": "3vU6Zp2wstADrPBn7hPveV74pMKS7Sv5wsMpizSbqiVZ1B6ukRMRb2Ugwtdy5QbHqPDuxmyv3irXF2Fr3LCptQ23",
  "key14": "3By14HTgSEXHqatugczrKUBDtxN2EdQoMUxQmKjFZ8wjP5PW294aJodWGW3vSqf3xfMFvDhc7qg5JUWCLt1CUxJ7",
  "key15": "2b3qWWjSp266dTomir6bCANatXaYjSZRBugEG2Awte2RdMdKYNF1yBosSXvkftESFVpYNucmSLad6X5NgktUeRzh",
  "key16": "48QnEDRoEGSusbMY8kp4UXzhNajZub2PoEG5Kzz8RGsmX1obEdHbfBc2wftwizt5eZMncJAMAAjxYC1skLw7Codf",
  "key17": "2Q4LFU9ZCMMYWmgvEWknMewVdZVv8WbySEUL5MHpYeYDb7U6HbqKotK51Z4Csd2Vzqa5ZdGKgVv5dZ9SCHXjbsQV",
  "key18": "s4y1VjvcgJs52TY6HBRQNiYjKWNXzX3VjERvMsWwU94NrfoahaDcp4j4KTxfkrKeRyav7JqctTrm1CYBePSeaqH",
  "key19": "3pZnMnyym9vRHeinp8RnehmAprnqjGYt3Kb2R62nrUERvneoGyMdLKA6TkP4EpwetS7gkKUXJ4GW4tAULKV4a2GC",
  "key20": "4swgGsg8S2mMGoazyUxPtpHK3MF8G916xHS1KXrAD6md7MF27bcEqYFM6MtRms9wgrhvVxoZrcoBnbsCL2sVRgxz",
  "key21": "3s2omVatZg64xcADitB2CzTy5GgUSw2q1yAtcpgF2MjmJDycJmb8cjeB7YrVkgRkapyLMkcSvcCFmxaYaJvKPsAP",
  "key22": "22EwpBpVKq4oVtb2FsnTZVb8Dx3GyrCg2P8uALDCfQPBkqFEJqBkpDMNceuYgminPYvG4Uipu56HyLHAopePWUcW",
  "key23": "4c5BpwDmx6U8ZyhAFyCqN5UGHVH2X4iieddS6m4x97TmMXVjDA2RYPkPNQPm77ymHS8fVvittKhAoj8h2ZbcYhGC",
  "key24": "5Ht87prX3V8oaoaB285K7ZooPVv1rKsLwVLZNuKJ5k6uZ2wdHysympeLHtgbLwi6QQeYvFVaHEetphtzKUQuXxon",
  "key25": "ary4ipxuxWXRB3HrjuFeiiFGXupKtzuAdZMf8XGXHEze7NgiPsuaKiAzgTLg3K5MkbzSEPWsct7tL4t5wrNY4RB",
  "key26": "4AfTfNg5g458RsQCs7irZJ6nV7roMiSy4x2MhEbDUj4gFompBU9av3WgyUKJRn3aTSPKVukPTEMkDsvbjKUARbNm",
  "key27": "VXZrHUZN51EYS2y4qaSokkPJjWxzow8rmMHtYuSWpdiezEnRuSu8hzodN9TJnBJFVdxYA3bLXoADC4hw5ScJUz8",
  "key28": "XMZ6mhSaJs3kLKXXYhvJdDKe4EH3tEWkSVMrXR8p2AkbpNB8ndXy3ZQzDmk2zvdrYV4TQWSdFK4w4P4fGQMqUKV",
  "key29": "5X5L1nasDxTp5pTcK3UznvyvX7T5Zy21q3M8PR9BdNyLnzQWiMipLNoGyCbGkU4RkFqPkS1V4WAoeCUoxJNMA5BA",
  "key30": "62mEH1jkTxy5hCHRWe8htGK3qwNysgzaebAf8QZRkT8jLawG9e1m1TZJDJrv9L5HvCmVHWjgjAJA5Ki5aq3nPvPL",
  "key31": "4xphh8Hf3kcNRdtWj9CEEAnYGgUbpDv8dZ5cCUHHW2S8J4ZX6tMAJ59NHw2FcVECiJFjEc8HBD1oqSELrDcSUhuX",
  "key32": "5fxiJr8YoxovNH76HTYscSfi2ezQkMZdFmc7vxaBXbgcbDAwwxJbS2QwPiaZac8Pzr5RbqXRQ6J8ktGqD3dAhaRu",
  "key33": "4bN87P2Mkx5T8XTCKTYfFLXzzbo7kfV3WR6os8JZnGU4wcvt3gha8QxT62edDVBjMZA8dJBKv8R5aYRVvG7rYstT",
  "key34": "4rXFSXaL1QejXDmruynuHZzCXwiwEhniGRaN7fH68hQSxa1HMhcT16f2fWoEXdoVTH1FoTpyHaWwv9vqd2Ruwy8u",
  "key35": "2dbHp7xU5rJ79a1LtPp1d6N1hbisFFNHnJ8Dpu2Jvv5GukMXTU5ahNCM45rbnuUqXKhQ9MzfjYPhEDHDfaUdqhS7",
  "key36": "5aRjct77V59btuvuLZ8Qvkjjj8Yxzbk7GJYUHqAKqRG5eqFWQ8neZxdJBZEDsLsNEYDE3fMRR5cYwuVQr5JzAtt5",
  "key37": "58SM1u3jx59jY3f77cc5jKEsWSx61QzidWNyBUJRxHe6T4UZ9tppe46dXFNfeBCjiCh7Se16gnwCaGWnso3ipLQ6",
  "key38": "Hiy9jT2F6GK5efTxuJZw8GCSZEovcHRFuYGTPwpgwA2cuaH5x9QMjD9bCMB3qDjHtfgNnPuf5x2XX1wrarguyoe",
  "key39": "4zcefMTbhUiS52LDxjbDuuYkq4XgmWxZtioyH6FZ8vCJRhjbRWJcM1XMHeRmQVR7Wfw6jmnq3zoiJTstP9z69aQk",
  "key40": "3nbGnYgqeXNc7kLyCfuRajJvNgmo7CTfUuigERbzUjRH5JHEyt6VzuLKZh7ER4zGzDpCXd4p6xHJPKfXyBEgoYxX",
  "key41": "66KHhxExdr1TiXkwLiYsfAgaQ6GxRYe9Zq1wfo2ZF3gkZaCMutQrNJfvbcPWmeFVUngjaX7zfGuwisDgJTpD7ZNc",
  "key42": "syMzT4suY9QtP93YpN6MuzyMUtRvjL2mLniCK85227VV4wwzVC4ipxhA6dBNhQporRtdrFAppn4xaukWwCuSzrQ"
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
