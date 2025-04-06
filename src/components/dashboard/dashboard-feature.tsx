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
    "dUpWp2gyF488hx6PEWhtxke3aExQzMwyF1mvxRJPQ3HyAbii9pyxaVu3T3Qzpb9q4mBkwzsNRDzQzVhhf17HjH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxBTM72WHNVQnMqpLDHThtoYnCg1xJvVYJNwYkucGjVbPfJife9gu3xxogKCj227EVwkmxFkrznjyiW3XQQzrAU",
  "key1": "61UWbjGQrLrEXRc77m1Zc8G2sXUSES1RKYCenRNY48c8qXNaJSZGXPf2J48HcPhS4dcc8PccAb8oCstb5uiPdDri",
  "key2": "5Lpw8bWe38DBzkAjR7wqwAyDyC83DHL9SYZhwrtNbQSsW4pJsK7fxJhcpdY8ithFNhNpwWngxGstWHcKnmRgyYXB",
  "key3": "65hHsGeAXdb7zRFgzbsYFMyiebFuc47HpGBux29gPBRsvJSeyztRoWX1cum7eXAH9Ysisaf1ccoUXkMnLv3yHm9z",
  "key4": "5YeJtZ5hcwH1itDgMYEVSDDa3fykbZ4WXzjH11zNMHkCX59HvefBmRwvaLMttYjv42F55QV7PiyJ1aEQ2vuuRJox",
  "key5": "4PMt1AwkyNAZ1GEQC1A6m7LtSmHXcxvRQz4N4Gk22EwCnDnReWhoGCZcjtFUJHvbe6Q5egMnXLcLyuKJpxMGWGM6",
  "key6": "zLquRBZHr4KGUQhBS6jZJV4R8ZQHNiWxuCb7R8Q6F86febsRdvoiabybxQ5MP1ZocDKvmV46phaqeT6MhFpgSNn",
  "key7": "2P5Fz1nT2g8kaC98GPU6ANuyEUqA491jKJpatSodNz7eGVK8Lf6ZskqJoYFAsEDngNbKDFHCpmXzitMJ9YJgtNqv",
  "key8": "46nAnTEFT7srp9f8AXCdFLADPVh9wR2sydjTKxSg5vjmSEQkAjScQdgCqEASomPJAGtgAgqnHYEvjbKMnfoWwN4w",
  "key9": "4MqiLwAT8cYPCh4YW1Hpejt7Qhv6KEaoAFV2uBmk5cGxXYwn5n26NRU1H49v4SLN5Fn4Yod6vVGJWxra8gtXCwPk",
  "key10": "5z84g4bP1CYrn1EsxFgLjo3BRLv5LSqf5FQF9pJ6pLPWgHiaPP378q6g71TWqYeEcdEZ2NmyvLXTaDHGFYkTFpen",
  "key11": "5E3ms1eJYSUsExFWVsrFqjYTH3hNJCfhdwkoNfRzcFMmnNVDSpvMgkM122m11xS5JXMFqjrHAF7D2qdUTb2JnPVJ",
  "key12": "3BZxJnLgR1zBZCXVUTq4aU1rWvb84Ryc6DZ2Y7S6wiociD1KbPtjsfs1qhrhkJ95ryBG4R8fak1X7ZC3AVcX1vCL",
  "key13": "5MCo98FzwvcY8hsxW6pmy68b8EmQ6WZUaLXbSFtQf5e6chy7DLccBmqvUZCa681vsRD8S8Cg4QfV4sPDrhjJ6VeS",
  "key14": "2PktNjj1D1eT9VxQJDpYQ2J9GJTna9w7mYNvApAMx5mg8YYCKEm8Mn4BjPxr6vzcECjyLgMNQ8hHvgGvBzwcjdEM",
  "key15": "oBQV1UPPexJZB8EUP6ZeguytxmKSuCNXDNLqZe4ymASUDqjPSnfvfa4tpytouGco8SGoaqTuMYDZ2QEXroScunv",
  "key16": "4pPYmrY5qHkiQCAgiziV4CS3vkMWEG7LoZHmy8s7BnLXXqUcffKDT1RPo7LsVkPMwwEJrfXtZdyFmcnZAzMLvVfg",
  "key17": "3qTjxdkDycczpAXsVmHZF19nEhAendrTnesr6DRb4WnC5HJputMdM4HaN3Rk11XZ8aYji4qddutYXGBS9afJotaE",
  "key18": "2zzJn6yz9r6ZrQiFnoEmfA6wBuT2jW9MA1ywMr118K2TR6HSnxvdxjjvWWHQfyXdNtxwo4zZP14d5U2tXZkG2omL",
  "key19": "3jsvMhwGkaUe97e6V4jBNCs12Zwyea761iHFsAAKjcU8Hd8A2R2x91vzd6XGqxUqDdePmqg4hKepE5kFbZ6SrrV",
  "key20": "vrLsd4NH1Sc8bxCnxeLxnXdrBHNJhKShhtV9CYBdxV2qiWpeqDvG1mSmnxPiGDEeJNx4JADu7kdHGmEjg4dMg6g",
  "key21": "2baM6ifjhfpeLjXde4k5rqcTKn6amQTuPTpY6BwH6bfDALcAtzXParkbhePRUvVXbJk1ARcCJnVPQuz7JGBnDmNz",
  "key22": "253BmYJEMTffyH6YDyVxDTHnzAjUituKQW2WpC1xdtXaMSRjQKcUA9aWs61jBTAFCtwf343minkamqWYtNZ3h2kj",
  "key23": "36M9geAsGPEJLriekJfZTnK1sbjW7G1J5atjjrEwZEke3ibjr3pxxKfgNxVbKAUvgSqhqR7zj9KFJcZbbufCQV3f",
  "key24": "5nuFvVC8nQ5aNyXYUGtBmjf5FWZYQLDH2dXk25gzWh6iFn4VSE1g5HcDGjUd7pyYX8mBn132UyQzFZ7SUj3KV8EJ",
  "key25": "3MSzqWixbzErkre6hpS9SSeHBfk7WegbYs6tBoL4vu4XDTvJYzGoGbmE9NV56NSmHdDuhXT6t42VfPHhtzgazrym",
  "key26": "481JgbRXTueStPdBZFL2MjkY9dypeDnFEipqWFiaEwbTKTCUF8Vyk5x6TEZ9NzLEYBhag4ytBAszWiXiA89aPj2g",
  "key27": "5YJCK8iFWoEyY5KWLBi65a8VpzmcBnPcnvdpo9McGoouAmevmXWUcgPrUFyFQX1nknsszE983HMki1rSCVnksTdF",
  "key28": "5KbxfxHcPMtwgNP1ajXgjW3rt35Mp79iyvWpYgvL9edVRv4jFvTA8sCWBj9Mihxa9S9kqt3Dwu5SpyuDGWWJ2ULy",
  "key29": "67PKXt4ZP2WrUjpTgfV8LMa3o3xhGDW4SvrB1p8zXJDJbooNmgzSEjobWXqEUngNoqfGoVhEcbwXaRfi4oay1Gwp",
  "key30": "55zGaaGYJ675r2Tz79pR25Y5ZNjMaHA4VaZp8PQ7dX2wbG91rDbn9DXSehiEkJEh8XH6qhLtr6wsBkZtqJkXd5eT",
  "key31": "37qMAGssaQXmeU632cNc9Ayhqxxj6ercuYnpRCT2pC34EHHbhpEtB13kxSuZ8ugXc8kayA53vUGzu4MDKFUoSWgX",
  "key32": "RNM8Q1Ga3HhhWkLf8S43qhnBoSmLJ4zr8kPQT2BpwVHoAYPYPPnpW8yq4z4BFY2hrRgCMxyyKzadcYxMHetLdPG",
  "key33": "mPQqwJQMZEhYR3W3fyFgHryGwLpwAB4pRekeFJqWV7Tj3UrS7yFPzYeb3MokGFaPSEoQ4KSuFYxwYrh2UbN8twL",
  "key34": "4KzYoWLqEZK5rYfZxs5RDsm12socqShbNzFEbz7o3TLJsh9X2akBxTobYdBsyR7oqHL3vXzxY7PMRuCBEWHU2eoj",
  "key35": "2gwFLxgLdWyYZqLpjySvqTGxyZrqygRqhrwH37YaxDbsxdbrG1B9RLRF7AtxLaedhvH8hRMwC5CCvzQTcSAdR8Gj",
  "key36": "3YSPQMUcRKYZLGdb4vPMzRcrBcWnFfJVhGSesc4ioMmV8iyjj1UwedCZeTjzpmPv7ucHkSuJGAYEaM6YgrM11AxZ",
  "key37": "ZJ146YSZGNt5fAdASHQdHZG6T3rh1m7kusZk63QziHMfUgZR1ndejySybswQNSdeCsoGaZE6MXPvvsDb8R8ZLpk",
  "key38": "3c4nnQouwaZ34KqWRseaGGBEazXy3P3ohGUHCxafkffa2mLPjRaxbSynhhG7AU3HzKHYWa2zVVGwHiQ9kJpEPYoj",
  "key39": "2Qk3QwRum8JZALo1CHSyFWMUMd6amK6e4fz8Z3TC4JCTognRo9vdpmtwrZEN2RwkFG3WRyXYqHWhjUv9kFd8mAcB",
  "key40": "4KVZHDJ8z1Sszj6w1v8ZwYqEoDb7yefaTjfpJKsBTJwgS3xCteHjivrQBCSpqAgdJtWSJRhtnpKc5iLf9TXcfJkR",
  "key41": "2KxMBrThgujvcYer2bG9wWTFK8K1WCGDiKyXLr4R5YQZQsGCbJQCuoMjNJBP5Vs2x2CDwy39SUMkgYXdmaqQtFb9",
  "key42": "5hLwrQ5cyi1Rafjagydb8MMxKgUmA64w6z8CnxXSnxt6w3C4iQHj3AicX6fUdBWeeUAFNqFBThqDN6zvs5aAsQxW",
  "key43": "5hbXoFKtNS8vQj5TGHU5sNNR5UQ3Z735Lf1YqxcHrsATjHYcFZuy54BVAdQX5qbjfzXVhziH6QcUA1ApKtNrYzH2",
  "key44": "66YcwvJMhGQYhHscDbjymof1CT1qq4NN6TfUj2Fm1qCixEFzqEYoTXCnkWWvGHBwdup5gkGgtDEU9Ki5inAeAhG",
  "key45": "4VwK78BjQQTx1GGbe5tmjm5q3HWv3QCysWSB9TEiX8hWNBuFMqnAApMdbnz5JQid1w5oKGyt8t8VLsVc5J1R7Lz6"
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
