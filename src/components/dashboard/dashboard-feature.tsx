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
    "4CLUhLJkJASi2VCn7CppJFi49xL9ybMngxXrHpN38uVFfzjVWr7YmKC6ryahkyaEptEkDkL5daiWK1AFgDkt1soj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oqiNTcB1oFhLQcU7ddVLV8meGMEncDayg698Ew7fSXr6QxhgAcg9NTg37WbWy4BbosReksyqQt2w821mkrkBQr",
  "key1": "4TYcTyMequHDQMKWyc3AS3qobTNVfVqT5iDoeEeNm7wY4WgGvYJNepHq7MWzRdKdD6n37tYpdU8vqGzuQjEk3LUx",
  "key2": "3cNawC8swB8YxxNBLiKv7p1CjRYQKKfKbwKMSBC1vWupyUEeVFArWehHUpunfdh4QbChMUzQ86SsCw4s1QryUXnz",
  "key3": "4rK77dtfXDnwp79AbpTEKYLUpQ5FEzxBP9w7qXi1sggpxQysESbJRHLH2ntTS9ZoCHgoSVzHdcwtvxiSmKtTznbM",
  "key4": "5ZkJYKRBwLwJ2rzHZyZiY8TiQ4XEdZXgHfUiM2L8i7naLzV5SmNoxGFGD9gpCZQUJv18z2goHcKjt56JEduNstZR",
  "key5": "4NQ1M3M523LwZez2M8pkKcnDy7xsMYr6gepJRQGZxQ25y675BmtZKbkKr4mbhBybz2hQANYPuZ21Ye52gyDhifWM",
  "key6": "2YGR52yonARZUy82mkTZSAGeBe8Rm1xHcmjr4jDpTfzsWqAZvDmXt5rDcRZ24NuhAz18rTExrZUXWkKzQk3TSN4i",
  "key7": "3gMFJkVR6Z18zELaSgYDieec4Ne2e2PPs2TQdSPQtGbhz7aSzDgvNTctUa1jwcHn9uUdAmrTnFkfhTzYpFX6JvU6",
  "key8": "5AS2qT2yTyZCVEkAb37FBMeCmSY7G531RUE6DaTq59pXzUxZnAEDenspLUh5bhNVHAXCRkDVUu8EzeQmUhoTRCiA",
  "key9": "5jUpG715C3aQ75531vo7FcbDYcMjUpBjuD4tDntviwRVmjPtd5N823JYrxH7ZScrd4M5gxRQDz1qTfuwv4tfSHm",
  "key10": "3cE7Xwq1iaehHcHoVtq6v6PVjtBvz7N6fzNWGBM6er2dc9GihY9vGRfm1pDNGKErQGshozKGNfoy3aTiLrkZW9xv",
  "key11": "56vPcTzC6bhT8nXg6wQYWZYAW7sti86GKxvNRaaJ19KSYKT49t2y94JKYsKCM8mBMHzgjJMz352orD9CtXbndDip",
  "key12": "2cDxKsjrhxTfrpFvP1fNxCskALW7Cc5dz4zFiAwMTDdD6CGS7XwK4LwBeEh4sqkhddCt3D1j1g2QA3KrscCcqdXg",
  "key13": "4Kda8bH1tiuFfT5iHXtAWZom7RnSugPZBoJTRiYLdNxq6BMpeRBwmCE5KARfZr3bTaseaa4tLv9ocxauN3y2iWXs",
  "key14": "3AFyxYpDQmzyQDBu1mjzzaP9tWKuTKPMXMP69NqHbsbqMB5AGTcEPaS1cst53yPS8X65NNLC5qPSkmBinuZUykoV",
  "key15": "2i5uPaqTJWCEwH86u3HoxK2ZzHML36KmYtMfJfFbpSoUh6uiHmuQZsciES88hr2HnAeVw3vni3Jmg4PhQ4cdbuv1",
  "key16": "2hMCoXqdyJ1zcW58zTGnMgVTDWiQy1QwKbvv8uFuGSwFey58QerP6wk9BaAa5gywkuE1SPeDb3z83nU7F4hbUhVE",
  "key17": "6dgXqsYS17CWsLjbnqUGta6GtW5EusVwGwbLZroQMXzNdPe3pUWrrK7pcdugLMFuHH53nG1PDwVh95GuPMcWAST",
  "key18": "4ahifMuw6YM6TDAGyVsjHW17BB6yqT2VuBfPNw6hmw3Psjb1SNZuMiKJGp7Mwz9S3hemzStZk4SaRT9VXbwXFPXs",
  "key19": "3AQZVBa9sQ7PNHLQ4qoFSvvEaRcrcGvN2JZK2pydyYXpxYXar7pGeurFCVuiBntG4bHYqRuPhrAMrgVqFc1FvQz",
  "key20": "4B9PxQx2nVYfXWBC8y3zXK6iTVRyQfr3bU3DZrMjDdn3WYz2LaAJBKqcGeHctftT9cVcU4r7kEubrvSo2LpVbEyd",
  "key21": "YqW8NqzPUnnuGPZGRJJ86jXmxGEJhvAuK9JeKdasbNvS3MNXdf66S1xeiFkfsHqCt3Y5pKx7NricoQ2ZPWEUC5a",
  "key22": "4xVrCCr5kvC19LQ6udmAzgFHgHXxMEqtFV8StbjsLcr4TdEedJYUXLgtEyCy7RNJwH63kYBkUTp4JTkh9vyQiKB3",
  "key23": "Jkgt79DEJYJovWYsatk4yPB6XfCB7yWvmb1RX8eqZSmhrDWgGkcVsSRTHMMbJ4j1KWScnVyaRbdkVC32m5y7ncE",
  "key24": "cNXKukZCn7bqjeAcr6Pgniiad6fvgUjyMQgSC1tUs2vNvebpePMu1HssiqtvkHWbkNkhXC4ujwzzWbvggf7WV5q",
  "key25": "2cp5wc7KPFDJfQsizsB3cDNCmrjm2CbnFtZm3spYTCpBKi5QVm1zAi9KxXiREoyQzkiyLd5bU692DjCAfPiJbmo8",
  "key26": "2P2WoGMGh7or91P1Zz7hbjRyPcn3QkvATA7s9Sc2EyWZ8ikCPWtxodJpGnwo2e5s4emxghyvyPsAvsFEws2pzGqc",
  "key27": "3WZh7vzWyi4jjD6zpSZMf7Aj9zHcTffciXzPatHovagjWhRfFhCzcm1bJNt7r4tkWJPVKsMytkf4djrYARyJjJQm",
  "key28": "5FRRD83r6Fnj88gi1vpgWUpKDianHzy7mR5wdDLQpghUBhSJUqYmf9DKCjCucZQZoMbQHe1WLsM8B5ohB5pQMmRU",
  "key29": "DMH6ZUGpN6WTBXcjxVHEnVZNmUaYXA9gJwBWvSJqinNsfNGwdB6kNDro4yxUCJcVeAaqD4oVUeBmG9rLkNMYvAE",
  "key30": "4fgC5pw9T6VCWqmsz87uLkSAKjHzuLe1BUDt7tZPJnuPVNQUcA5xDnmYFQsfqdm5ZP6TRXMTaEK5m7RcM4YCD4Wd",
  "key31": "5Us3naPYLJ8yLHAHeJE9UcvdD5SVNcGpeaLmWwTa8ZQDVWQvxV8YzUx5czXHcrchLQW3jSMhwfP9GUmhy4TeCpNm",
  "key32": "5b5V37vJFEA8fqvMVu1QXHc6SLFRd5AuZaU43ZxBNh4m6ZH7HTCboZqADx72P9dUeG1niiRLNt1Git3wLCZmpPoH",
  "key33": "5Ea65fACtPUNf4YUqPwm65xJyjyBsesZGoRgQraYm9wjByGt9HHzrtzLDhDdStacz7f8YsdHUbVkUayPC3iWs6wJ",
  "key34": "5yAaD7fF5acVnncArNL3ksPXoarx2hgNwVjvJ9S9TN8BrQoJQaUzr9JwvPZDvHvQPcskUMXkpzdTNpYoQzxm98PV",
  "key35": "3yQaSy2mGnDriBSqz5NcsNViDeyEgkCmgv3wnitdrMBCFAfLcgQdyLUqUQosHU7aEF3x2God3hEwFdwGAWoJXLqD",
  "key36": "Nuf4azVzB5voc3UXi64mhpRVBfqftFd9wVbFbPQq2APdUB9abKHUhwnh8MqA8A8hTtiXLGTaK3uupsvYoAXEygS",
  "key37": "2GAUCXbPDuip4h2fy3e2LwrnwUK3V3NJwhVMpTc7KuxG3ThFsk6MVSuc4BPgRNpbRz1kp2aiXrbTabC3gSKSi9bK",
  "key38": "5F4NsnHii3GpY17WWTQoMnkh8ivQ7iYEixgKGPai9rf4k55x4itev7WyW7RupDk8E7MPHzThxvjUstupAu17GkHf",
  "key39": "tFA4gV8uLGfxJHQ3bUPfibmBe4BAuxpvK8bYHPvUN6bUtE2wUFHwfzZXHdL6vjaidDrEtnfA2XEkNyBXpDaWShJ",
  "key40": "5qYEe4ptzRHRcCUdtc9s6rUzmLfmE88t13LphLfdfcBARmaxJEnEvSjS1m5hSqnvDscNkrcs6BMdFMy5pTRSX9eS",
  "key41": "NA4EcwqX4BX1rYTyjo4ecar8HhW5dwb2pRFZ1jMu9e3XZqn9ciNRzjXgFGk6txCUX5TBwhWrp91JAFXL48NhFhi",
  "key42": "3yh9THSgWCnWi3v33NadyK4bp2JPbpjUU53oiuRbcN4wDfaq2UNEguDYjazYbSH2RBLtDPNP8yuE1kpa7joVkC6j",
  "key43": "5UE37FCrThLqMZ6DgRa3ECYJU6BD8FJfLkW3e6ZNifC2bU2VWa1Ez2fYLHQTBtKHWXpozVj3uq3x9dS8mmrguoyA",
  "key44": "3G9M9vc8XW6rpaWK9r8QS6tUps9Wgk2bg4reJ8uoEXBfqLssfCbv9WuLocDSUq3MShQYZj7qY584dw6ED5UTRAHT",
  "key45": "5U744S4ehQCFH97aEzte8FfQbnRU58XD8KjewfExWr4uAaRhHpjac8zkJWBNYzU3WScUcChgwqr8988fsRHTUGsm"
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
