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
    "5GXUTqVq7eAzv83ZoiLUtyKmdM3egtEYQdzgWd8tPKWms8AryQ9BDLHkmCxotJZVjvT2TzhkNy6URMRhzPRt1fgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7oDxhxevmXNMpMLbj57Eo1dXQCQwbqN9xM8FHWEHow3HXYE11vMiWcKi6e47aosc9y41mn9gjjuiH6sj5T7nRP",
  "key1": "n73okmJw3MUbzUS8Xj7DNuHof4fYFgxk6QaDGMqPcG7jvXmoBYZcnywqzgWepHexSswXtsBYAnsUuqbtFZuoAy8",
  "key2": "58GAwQqdaCUS2jVkQfseBeyuQsLU1fwwNFWe199jPBsJrGewNdvj8o5HQru8S2ggu7Ma5aCdYWPhof7SbKkpKNRw",
  "key3": "LqYM16pPx4Q5y8VjM97nwQoiGCDuSMmeGF1knWTczWfyDW2w5q6N3rFkcFtMhTtRuzZT5x2ddmK9doGepaFzsnY",
  "key4": "53rqyvCrWHkrxKY5jqprN1Jtq5y4YF9TUch24SzMFbtk2i3mwrt2VHVuYFNZU28nLFU3A4wBhKd3gPyqS5bEhXLk",
  "key5": "39BzJHuPbQkF68M8zWyBUaCTPo59EN7BBecze92WAJn6tBE541U97Hcs1UivrHBjCqdSSjSimFFzz6KF5NNiamQw",
  "key6": "3BokMXCgKPt1BAnqkp7DZpeSr7GA6yQUNCRyKoRwk9Zr23M8P1aokVFuXC5qtqFoLGoDUMmtjt5L3F5YsJVzm4CD",
  "key7": "5DspLVcKjpfDAuhgm1c2NcxfQTjidwEuYgEuJkQP4jo9fqyDWYZM2BA4xZ5YULGzxqHbfjUwG2GAqs7qQXicTACy",
  "key8": "5vK6H7Pf8UaWjjBai4BDizkJLn5gvUxwjgNPkqi45XdSGeHrfL9rAY4pLwNJByRSbLoXar2F94QV8WiQGkdMtQEq",
  "key9": "usLcgM2EfBTxDoba5Mo4a3ixTirbb6nDcHwyAJ6Ptuems2Y1hJpShGU5nVpQT4xWz5TXxL2q4ebpYJZJdTekxYr",
  "key10": "4kZxgxsFzudCU21XkUwmGTrThS1Mvi9cFG5FE6te2C1PSGrPakSAeMicTeD6ni1qLyGqVYmHGBr6HfzPKCmqwG72",
  "key11": "abudW6GrBjanV4Cpnnx9HAf2nTfJZ7rCsfZ5vJpBWqzik61nc3pkRdgaxtXBjRtzrAw974ypts7reZ6L7vdePHG",
  "key12": "2uxdpTt3goWhErNL7BzoTSVUxaJedq9LSMySg6CzViVpZaHpQ8QUBwdhoNJvKmUyNVtSoSEWZNVDZsW5zSEXKoPL",
  "key13": "gLtjKeftRadEqrbXS8UzY31LETe3j47L9hvgQG2L9ignRBrbj4rRwyudykk9haWjJQteisGrSUhzvTFAq8NTyh2",
  "key14": "X8NP8ZTHS4QimXW6xXFVYm1c6foqK64dUR7VgHaYGpKbNzVhGxtaH53AjhwWAFeNMbvRmowkie4yvSRrB5gg7Fk",
  "key15": "if51jsBHiLvkuwSNRx3AZbNii6oUo6Xh94fR5Ubu3ouxnh9NDzf7GJrtohJSSgLHnpG7gLHDsaxwYTTm5BAnVbh",
  "key16": "3g3ff8KA1b8ZvFehEcuPWdQQTS2WHkB2EK4h9zE7L1ekbXVERtWKPdDqLTVfwMvwrbEGUBS8BZ1awGuM6KfgtHUx",
  "key17": "3GQXCzTNDH1Xo1FcUNjjhoumDJQA57AARifgzWCGmDAQR6Tam8TGRG7AG3LpoyeovMo9Tc4FoxGpbqavd3GxV1GW",
  "key18": "4xphrLRRdk1QWCBhMwRuuSmjXdBkh4UQgnDdyjznMZrPswsBHLuAERHikDCXXDCr5WH836qpKz5cjHBtREasvaVM",
  "key19": "3FJk6UbrX6QpjkDreUpEsXzg2J2Xs6Wz937yTtugaR7hVet4nsQ685dJdWiLqaNPNABVoqxMqsJJyZ1XnoSWb4Ys",
  "key20": "2Ra4e9Pd2QGmK3mdRPs5YNS9SfxyDxfMqomKedZpCHg58SccdEgM2YqaxmSU5bQdpkSGiZufAn2aL9zicBEkGUzd",
  "key21": "5CUknHKxaTQfwzwLsotZBB7zJQbS5JPGkAJn5vGnXtZ1m8TfA8poT51AGvjcLQVxb2C75G5Cduj2WsVLJCwrSVTY",
  "key22": "34HP422jR2CLi4QhNQtEYwhTwHjJHgUPX5iaTe5c6TkKLpvbpEpDP1vUZEwtgF9ADNcNhwgmxios67P3GDQkBmC",
  "key23": "Zvk3Ea3o3wKu4aXaatPdRP5CWsFkCA2a4R1P3pwiGVJrhpwRt4R2g598Aup2MkzXYpE1DCaJ2aeuCWmNJQs8v5Z",
  "key24": "5rVVp2wMdMkgQR1wfxdQX2B1Vh5uhyCwGDiicH2oSsJYvyYFfSB63LoiriWkEiw4MiwkxpvvZeV8vaBdw4p7paCd",
  "key25": "58JQb6yk5XFS7EDUC6fLQ7vrsD1DGq9vWGbZW58u58a2FVMnUn3FM9DwcVBcznjCQTCYS7tEXLLsjvgbayxDyLow",
  "key26": "5mYsUPiR47YrqHhdJfX1RFhHArbmiU14NFQfuCZ5m1yAMuQv2pGQi8N7drZYZGFKrjxdqUhwr5FcZ7NZhfG9ZUfV",
  "key27": "5Z3e7nDCD3UZXvYNqD7Q2x3km54wYNZurfbKvBrzeB5cj3TMZqBuXJb91CwqRz9hjDonjmNd3kCCXTVtw3LYHX4E",
  "key28": "5QfJ5NHkEzdHp5UhFgBY3kmkermmXwPzHmp7h9dirVpvV9u1rdmU4AuN1P4F7SfAxncv5CwiT4St2ZT8d3YWEwgc",
  "key29": "2bEoAeDSzZ1r53AnpTySgxaipiyYwBv4V5NScqvRyKtUKdJ4zT7yJ3z7Xxe1Fznj1Sr6k8k7UadjJ7qobKzENgY6",
  "key30": "4hF37GTWkkeKpopY92mxB8xndrYsdsU6Jr97V3K9F7MSieo6trSib4CzT9X8kLUfJDot4GhouhpVQNBit7rvpQwK",
  "key31": "67PFZbVxfRKm3EPr4cVHkbzVbzkeXjnBKSECqsQ7c8SSSos2JEd31YZys1MP72c2oocikCjM7tQtj3Wro1fssRTj",
  "key32": "2WBHb53GEw1pTh2FNMJgtJQaMFwrNzyR1YftwvkkaaUH65PPmj5fvA5b1eBNNJPh1FZgB7XRALJZ8ZG6qL7Tgsva",
  "key33": "2nmiapWpDSvPFF4pQ7DFseUQTcibeScoMnLaKkfnmxCXoDKmwQhbHUpYHWyN4VTxz9b6ZG8hf5hJtYq2CvbWTB9S",
  "key34": "hDxQHNGttUKk1F6ZMMCpxhVohRBi4G8QVx5bjPWeNcM3skuxxsCkbyfbgsS3HVanVcRVHmuCE67cgfiNucKtEZf",
  "key35": "3AMCQRMtc6WADuXK6K4swbjsg92VqCozhQ3ME22p759jqvxWJmxLLto5JXGECR9aPVHfh7cAbH2HBDpqynxx39ZH",
  "key36": "KKpMjKnuyGLRXYg4hk6zwhXhzvm84EXjhCY8SuXvHX71KjyFx28AmVvHpsBeMAqxFsbMwiY92dFyeUvF4CnKUFc",
  "key37": "2q987WCT4vQH8w95b1ubXn1DWzLR3eo2PGAFS2eSDEy4PmLBfYyKr2WXweXTzHFa77NMo8wmDQVD5Z2j4fWFY1V8",
  "key38": "yF74ruEiBJg4qYdMNZVQNwSXUGC42YvSRPQ1vsJTYtKL6xAcaAnuNDu82VhWV4TwiicPCcQ8urqTZkbQQXXci1p",
  "key39": "2GMausM7ieABB9Cz7xUDPqHPNSYXSKArzrRqW4ZuNFSkKp21pXKtDUYffympHmaGgUo2VEvS4tNddNtwdweerZUk",
  "key40": "4NRcVeAZDemXG9e8ymTrXHn3LD2KA6Maqmt4PKK7rdN1xGxPDrKAprMkmxbs9cPtghyKFDrsRmptso3zpa3WZT5W",
  "key41": "47Go1hAMocftZjaSkayNhjEu4BrFoBPDAVDTyhyW2gHDqAtXKphbWjESfQ5FWEdji2R45DkjqSVmKPx2DUUnCTcT",
  "key42": "4N6uznQYWH2WvVzzgww8h99GkFZPkwtpxfnrnMmZ4xuuf3Fa3VQsRYVvYZ8jPtpvHm3wD5ZFG3LHWGSb4tz8VZKU",
  "key43": "5TR9NGPFp8C14rpDucWNrGuHMmxdLbQPhkzbKu3tLr45m2xd7DYW8jT11qBcAzjbGzkR82BfwTTPpxn1YX1zMyj6",
  "key44": "wfCdbEGR82re696JXYnF7ZgqdzFE1trDgj5kKiUTt9cNSwh2F6XUGFcz7Gi3ocLu6xpMxxPETEDdeRsMGeUVcBK",
  "key45": "67cZVHZ29YJVU2kcK7mXyCPhCnDEKxtCSRe9dbwSgGcTtchExp3iWzfba9ckoEjmMBTzuSgmRv1LHQnMQw8i3QS5",
  "key46": "4gVS3RgX8qXEL2m7iCc1Pj2LorViJjCFN9ek1ZD3gHpFz5jBc46AUgq67oaMHLgahzyCTunms9vTW5Ee1SQUBjUf"
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
