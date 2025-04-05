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
    "5kovxmyLDFaJcLG3A6bUyctQBKfg5YxhENJvBhAywuNtRVDq2wkkAJdh78AbzkwnkL28Q6E7hu5jKTcwQQsF6TRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUWzWD5oV1ZLGRqvHnF8bKcNF14Edek1ktaTvZQT94CvLunVJFPAbQviVQAoEpqPG3WaG6VncM1MCtummx5E2qp",
  "key1": "2oqTo7nJDmr9aJPS3vbA1apgqSkKKBzQ9xShdSkrmPZRDDumtkzZSjj6nsd7Cwm81jqCUvK1bL5LcEs1eh2uUDrc",
  "key2": "4qiZtGqrZar1VHqdRtbaz3TrPXWU4EucKRPKPoVFrwPcZxrfR2R3DJfpVq1WwP7kuaz1HuMsE1MJQ3M8KKC9Wxor",
  "key3": "3s6RyU5fJSRbzfip7VPWpCVwCp9aJtfmzuPi5nasRnJ4VCbjKwhipLmnkmYRR3uB3Yp9pVzcT1azsv5n1ceejsW4",
  "key4": "3nmbLaYmhVtC8KbXXf9rvCXb4gWf5TDMQvrnwFwBYhQCyt3xVYEFvsciPU1YNPdLgUPxwxnK2YTuZtDQkmNb5wSs",
  "key5": "4uEXk3m6MobfDvaSPstk4HkX9ormbLGskB8USm17kGMjZ5os7JBxNHuYuJCRHBLm19KEDGzajFoaLawYtra1eaRk",
  "key6": "2bzit78moxWaeVbhQCZwzrDiM53p6weGoVfyDcAL3yvPaigjo6NP4F3gZf1qT277fh4F7NpPMgt1UzC3D8BVHk8N",
  "key7": "3bYWtj7GPvHtzRsAbGGJJxHaH4ocxhmLkGwFZ98LnvqkQreJV2zUHYdej3QBqjoTHu34hGb3z3hHTfQXiHtN7BDQ",
  "key8": "4GeVMv9qs8yFVy35gw3Cq81Kx9784DCrtnjjKGTN2B1GLn5WFbZY7QCnHRceborr7Tg6sWZEf8C25JNZG6dxrVia",
  "key9": "5Y2mrjn2PbWpAuqahdZ6ByuyDp5JThN5RsupcMKRtUH6ZwwhknN8KNjhWBwTXiTh3vq76R5Tm436BJej764QRChh",
  "key10": "3LiFmPDC3c1TY1Q9zyq6LaLBepnHQKsY2ZMKi3mLouvzCcExL5BeJZDYnvQjPzdGR758kHvVDPn3jciHT59H1DKW",
  "key11": "QiK71HbbiCmDiqL7nTQZzYWd2dW8LvqkkH2fpysSV4dwXuskozLd8GQTzQPkgbmacPcMnKDWzAq23oWkop1T4dH",
  "key12": "5KAc7TT6zu7p5JeqWMcwYeLKdyyw3mad7ovMdMu7PujptjcEP2oNbhb4qhRTdXb7gvvMSDeswzo5N5C6SBp1JguD",
  "key13": "5bnAPeXyGZdHu3TSbrzwBG8BRSeg5B7J87BrReT4gkXm5rWmctLoe65MyjzigNnxnbht7N1BNHzCxE74BPASBNMh",
  "key14": "2cf8R2h5m3rf5otDVUQF3gW4w85vwSgKmwcya2NZn1QXiyrXWhTxfzpoBsScf4EpjfCyJyrA9JpxDUC7gw45GCRs",
  "key15": "4Wias1APHob47UETqeW24veh3CokUv9vd4ozufEukMuWZ4XLk9paiwJBHScnok82xDLGNCdAw5YqjdWueMtFhJkW",
  "key16": "2cfojzX4rUHGrVcuWFDdHV8cwCdx44sjQwAHbiSkEvkQHNxCvTNRR9hfQ1y8bJ4uHdAozQk1CH2rnTXR5FDyeUfp",
  "key17": "3Dizono4ruCvwX6uEmwnErDy7fNdHdMprqNqJHuSiPr3C5bXhm6TpxdtJB3SnxCoZxtu2UB7KK4rnJdRCfdLcjdk",
  "key18": "5kJ1Jy6hGsVLTFjinY2iiCcBf59TSt2f3JV9nQxHtJKaBbmroCVggVwXPMHWnDj5utxEpUSwG3S8yCM386A6GoaF",
  "key19": "5KsGyvty4chmoSxtATgRi89W4vRMrYbdPUHJT3tevBd2c9CbNobaeTAnZEbRV8VWPbNPXGj1zDqUTXQu6jHyZKug",
  "key20": "3yoeqmNMEe4Fyto15jsXmWJgpwb2LWy4iMP3p2JRTGMytvewgagSLVhhfhkDsZM3R9gC2zHKiDF1sLKZersv5NmY",
  "key21": "5qUjXcmQLjh1DkWsWy6hF5DyJmJBeVZyGxqBwdx77RtKqVLjkkF6VCXwQiCAQpvBnsR1GW1hMzjdF1pvyEKhjozm",
  "key22": "2CUBmTAvifd5uqZhdGVDUgoGenqEfhxLcqcamCX8r9Y3XYr8Wty6wHpfJFQVh1p6YHPbZHbV8Aij3P8bjiAkiewh",
  "key23": "2m6Qi9EdmM1nhavTKiU1WekkiuGQ8vqbDQAnsYFUjwktbNhNxDyHdorobNHgC5qRno5WBFN8S9oBD42c4vvxquv3",
  "key24": "4gDp5yrN9vib7TTo6mizyhr7f5i5CrQp384ZgjuN4RSJEsHdZarQco7oApZLNaXoBhr6WNnJhbNcSmkju1SJGLLU",
  "key25": "64hxq8VZbbSFFa5EjMx1RAHGuicDNacy73h2twvM4tgi9JhkJk9ni93t2o7AX7pLxVscmzLWFQnnVqnoz8tis59K",
  "key26": "3tNwJ8wEbdt1F6uNMN5LG54UvvmAKZBb1ZV8KFuxWvMYKYyRmR6HggmPZfo7PSSWw48BSbyRZTWm8yNV9GC6N7Nt",
  "key27": "2NGqYNw98KnK3b6MMAGz1T13xeWSnAyorAhKcWP1ums5xL2gyJ5T3W12CDQ2ptZxLmUXcGEZiv7STqnjksSUp2PL",
  "key28": "4njCZ39H2pkjaxzNU2ZLFMsujtWGwfpeDFDpkDvuHE2wdDjLBHdkFEvy7Bspa3MqTBGNUfPztavryEteuFXKeepr",
  "key29": "22kiRLTnjVzcTkmvXEM23SqVfX2rcbp5guSGxpH3wxKN5yphUTgJFiwfwLntmLqkPH8enujiUvXky9ThVBh7Qr6i",
  "key30": "2qr9qHb9vSfwU1rHNwJx11mFnq8oyHnZyx141wxXDKrae4MkFBATbfHfRpYfVAWVZx3en23Q1e55FAs9KkzeAYch",
  "key31": "5DLQsYLqXvVAC3kfuxu7NrZhdKz2JcoSvExKjWgMHyjbAabjqdcVcUuh72P9xviAyroG7mVKTfLeybDQYgP9fTa6",
  "key32": "5jPVdxVFRsfc89r9p9R2AEJ8zb7ehD4Rck3LnXCjLUmGg7hSzxASUhHv3wQGXAkDw51wK5Mjbm5tNexK5NeEwj2n",
  "key33": "2kTKWRDULbaViJNe1LQWJa6otPr9y7GaBwhF8kaqWV8P4SzDyz6H6cNCPSVwBrB47EG3SDaZNPtEpPsQHxJKvk9W",
  "key34": "4rzxmewJANi4UGCQf1t2XBktM8bwaByiSxNM2bbJuYmT5JQkmzQosydPCQ79aVe4Cc1dPxB5H52nq1BYHpLnLXAa",
  "key35": "xUvzCacQ8bSLQM1REXVw59vVJcw6eC3RcHQp7mqJQ2k6wADf26uwrXtRf9WpbScNHpWJaJNGmiSh5GPtjv2Y7NN",
  "key36": "4SK7ubjbZCWwzKTfMKMQrbrbcXJ1SaegP4sanFGpmdceCuMSb5PQLegroBAdjqVeQosPUcxCPEskx2xhSbbLwxNG",
  "key37": "276nZbM2ggUe3e5fgXdQLsdMcqAex9QPCs52LXVLBPcZsW2RX4Ee79yphx6veiYSus9KRR9TzJTAxo2Smm2CZsNJ",
  "key38": "HWTSKu8TPzuwKBTWAxtq39wnXDZLJb6PLXqkBmUZ133FMdGQpgxvxHaA9VsxaGj2Wy8Dn9SSENKDAun3LNpa4a8",
  "key39": "28pYajKea9anEnRDvgdW6rVcyTp2QuRADEfQgpqFFHvsVWxXzpxMDxPReonjYxjxSxyeFYdLEGA9aHREh4Lt4zPP",
  "key40": "pByxXnhsVk4nJV383mWKHM6LnxQCEL2E3mPCZ5aDpjTTjeV7yUR4NxuzctoD1cTykScyyvTtM2RWrgfSUoBHPhR",
  "key41": "3pk3rbn2qX3hmrB2cGmB2yzvfVEp5bCq8rW58i5UfvJHGczPSquWCe2rzPqqNBHXZ6v5bZ9BoCDutu4H3M5R8Fzu",
  "key42": "2S3vphmgnLny18Mr2XGkFXe7EXo5Ezz3Dmo1E5krnBVYDQiBy5bmTNczbsT6ygdGiXM1dxXYjY6ZBPD92mYNEs1Z"
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
