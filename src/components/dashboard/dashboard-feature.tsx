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
    "38mjFisQkhk64mqEXUymseQbAqCcRzfrmsEsG5qXB3SPTrUgcuvU1ZTjLA2Wmbv4kQzYdQ6L4xZUgQUAdoEKEzVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fq2YuVoEt4zAVLksr6WB2qjZ1kZircFLdEvkb8xnuSfHvQssAiF1PooH6sUdR2DJy59BXc1rT8PDgsuV3nFjXvo",
  "key1": "2G8rRMWGPerECuyRusykUcTb27v5yR4M9apEvCE9kwCNCJ3dJ5ov9wBXJnrWn3RFeQoet1dRM7gmjvPXVShkU1cw",
  "key2": "3o3wyRPBp5egjsAfps1b4Azuxoj2xCmBR3g841koZyBNjaoKgqDeBmNt4wweTX2Twr4TR7JPNebXvYvHtr4zUhc6",
  "key3": "45gWq4hvYnKR7vSBz7H5QK1sdgaaLxWgS4MdoJz4izoQLD7njuEWwQPUpYeJczRChnN7f64njGGqF5H4tFHLyQFr",
  "key4": "HDaS8wcuTjYZPdzzkg9BnTgibi26H36UakidZrWJbskbyjS2NtYqKuibkwWxbtPLpu9pTWXqp2c2aCx91MMhu5n",
  "key5": "4uHd569e8zNRfuct2T3erpcnvd7D4VANtw7CNvdbNdb4sfmpE6oZxT2ued4UMVtKzzVPTotjDdh7i3ikXZZ6poP5",
  "key6": "3aSw4Gtfq1o956FKkXDbdGnbRq5JWfhRZUpMpw1LefBEjtFhNHtmm8myAKQWZZDF8VTfQVPWFX3uXYPK9fsHh2zH",
  "key7": "62ZrXooS5KDKxVN7LYJrZG6CRepBRVyzymobMp8pnppZcUoRBEo6dyHrtsDuMKnrHKzYe5S4VKyGNbsaC8QujTb1",
  "key8": "5UNJWWJf5yKEbaPHS3R7UNTeYJX3diMWZDGTXnPXXPVYavsy6YcWkxdwXL9JxuXfcjWicLCDGWcQWRivQhBRMgF7",
  "key9": "5ADDNngiU7sM8X3eaPRwswL37JsMJUUXgvB7nbYjbu9SLosckck9p3iTchZqCgghr8C1eM19QJdEHmcgytMVtSK9",
  "key10": "4wScrbois53P32yaWYEoE1DVRKzS3xsAw6uGtpqHEVsS122AhnMafc957BkkhoETRmfxzLMBonddikM2FpynCbFb",
  "key11": "2cqDdDK5GrM8cfx17LGNnaf6PE9UgYE83odBtfpGyugQVsUDAtM12ShUnWrRXJmeA7e3hU9YdP1b7vBHKi1WUBK6",
  "key12": "3wGkNjTUY1QgET294yoPkR4osF159gap52KKreAHG3YazBY5cnpmYJxkJtXQ3LY6BymJcWrxpaQ67NumQPiS4j9y",
  "key13": "4E2VvhGqAqLkWELxH1AE5jFFAhQdhs4uPH4QH2FbDvqgX8Byey4yRe2WrBsawhdQAU9ngEMmDDqoA6PyTdCvaJp1",
  "key14": "4z36eFMYhNo4nsJMxsmp8V1UjT7saCtYF5T6Ybpq9i53HZKAugkdDNB5pdDHVqpRXNkDegc4wwyVNdCbBXtFvhoz",
  "key15": "5h829eB3Vwbx9eS9MmaX7RWdsFtEn7f4o6yqTGihkvvUnpW3ydygeg2ohs5ss5FBMhx8BKQejWhDsAWCBJJQ2iKQ",
  "key16": "3QsChKMGj9GFwHjGaxaG1hSNt4Ny8aSKNzQCvdPMnYQQbixnSGGeYdZdPXA57BLA9wgL8yKzz1ZvqCwnQLHt5KhS",
  "key17": "5Xtq5oM4Npp826UMmL7zgX18VCzYVW8oRU23pauqdUEfC7nVxtqXnoXPrGVJwn2wTP64nwtWb3yUQRTHcpAmb7rt",
  "key18": "3twef17ydcvxU6jGnR8wD5FpYnN9cjnsb2pB9GDNTJEY3PZEjZJoniZfnR5EHpMMaoQ6EGoXbyKToBWjnHGfzpU6",
  "key19": "4hfbX8ubPTibgwE6hDJAbf1bCqm3pKiH6YAT3mSCK5ACLp3K9hjYqGUAVmG5NvcEqYS8umtG9Ws6MPEbZ7M6wFV3",
  "key20": "47fUgzipMsUfTXqFBQ3qPUi5o3AdNPWRxnFobgBm4BXcxQZYLnmxQPHSyWjfcjD7TGNgaEm1nMY5MFGkNGE92WCy",
  "key21": "5rSbRqetLqQmUGJNPBYehrshcdzPHPjMUrWBfJ2oSrtdrJEmMKcLavSFF25kL2ETDnuMqtEEzxyqsScq2pqczxc2",
  "key22": "4u1d74etEU8AwbvRca1DNSxoKYUnyE4kKTbJVPhta2tkJJ5XvQbyNxu6aWaA3ieh47ak2Rt55P81eLtMwRh6sBrN",
  "key23": "MkFq1ZX8pXiP46T3BQVPHHMH2jL5JpHq8mCiGDtZZsMNhf5y9P2BBzMGt6dK1Z6fDKcFewwVKqK889xEjpGRajw",
  "key24": "gLrPdcZkCcNRku3y6nwUQKYwM7iz5DxwZFHn3s9vFmGbXD4xsz1q4jBD1bcjWizadRY5JmsCAxhrWWh6G9T7BVi",
  "key25": "3YUwiTFoFxbizQZcuMTi6YactFDzo9Ji6yn9RStR5N3eSpKQjfy8oMNc7pBHDZfqvYPETrRgRLDmpaWzSjmqzNkN",
  "key26": "52ijaG6DBNCXzQoVMfDev3KhTeVwpFRf96mGhNgz9QyjZjmbzMjPQbR2eLUkTZvHwGxSrbaNBZZk66jaQ5LASfGF",
  "key27": "2BPLbpMipj5PuyiK7m1s8N91toKwTk822nd52wuzhgiUe2GVKy1gBGWP9YsKS61yxkRXVMXzMWmUHT5gEaH6vX55",
  "key28": "2W9Yap5CQtNkvqgxn2rj4RskZU8FF3UWMdPv9hC9FRWD9FjrURKmFcPDAPGW1V9XHsjFpaDHXYmAAnxRZed48fD7",
  "key29": "4We4YY16Fz84RhmLr5ibBa5v6LYbsG7ciDkogy9akbgZvTqoqrhe4JwPpRbZfFBaV9pmDfECQkGbCn5rtNDrk87y",
  "key30": "57j1UtEiWa8putD66iduXCexdksdfo2BUfTovgRqeXrotxWLJBWfsRunZZNwwYnD8bB69rcAzr2NT8VonKLnDetM",
  "key31": "5L2wYV68B4PtjPJ6rPrHMpTSr82c1y8AKYGqA6WNssyWVjjhP1h9MTQAsdB5eqDEKTuLT6FSzih9BpdvC6nAamxM",
  "key32": "4pUEMnSk39tWPtmxf6KFnH7RiXFbNZyf7VPyghxk1ercJV5qdQWGGbYTmTRvb2R5TfPU5dqw8qE8q7CnDmfBuuR8",
  "key33": "2dA3xP9Ko8hq26zbrh9sD2hf6sakEPXSVKqzieJPhnxVkgiD56GRageuCCgaNax9UpgSnkbm5nA1npAwRoQbGQMX",
  "key34": "zD8jVjFQHCzeKQbKYuMZB5mHvGAarPqumyETFwHP5SaAnGqgquPwXYjMkh8KZdZBrpbFckDtpTdDmMogZTCuiMS",
  "key35": "2MEBNG2V5vFbZKXJGqAFWdr1AcHAu7z78zcUFQuuCB4bibbJeFXzPmhJ4TvBurDtCh1cBAbnTYg4SprjZ8ZNtMM6",
  "key36": "4pVkrPubbeKh7xVJEqUAgcTXigrfA442NNKq8UQRUZ1epqd8qx79rg6feLLjDEXpyqN3k2d1uZpaRW2BpPFsz1kg",
  "key37": "33csSmMS1mKCWnfkXhnWChGPAEZrVKH4B7mT6JFbrNw6qDx9WapnACDkiSaw8fVTFE97LRuvASM2ksGX14c83Whp",
  "key38": "aKBmoo4gfL1RezgKppzSVVvJeTAJ5cK5hJcDv1RN8LJjd75xFyQ1mMZ7S23HTnv4mRdaNMB1SHZD5ceuA3XYXBV",
  "key39": "3Lpm7HsmvNB9nFAH1pVYuiozK41fYyEst2GkTTVDXW4aTBKr5VxBWUAhH65truPD6r122R7n7dW8PxchhicSYFNf",
  "key40": "2qkjwXY9zBFzgBLKKs2fgXD4LqVh6bWotnjWUn8sYPh4DkFeZ9z8xnbLKCxkJSEGD81nnVC9UyuaLPBehacYgfUY",
  "key41": "5oa6gecGd8dDatRNomV9XosLMWmEuxr4U3gdLZhSp3Q2aMb48NGCpYYjc3YwMQCsPu7GhcRMrCgYo64C9YtQbSsQ",
  "key42": "DP5rmj5jn72wukVVuewSB9HAdo6eUwnpWMp53tJufp7DKG4yrSpoiuyi3JqGA7USC849Sb4ZhPRfZAnE4tm2UYt"
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
