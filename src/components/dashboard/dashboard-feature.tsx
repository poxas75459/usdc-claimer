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
    "k9afsKTTSZ8asfhqzfx1dnNVH3hx42Z2TDcgFaXVmcifYpmbHqY3CgNkbMvUqLuvoyf2fo5oivPjACjuYDSyA6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uniJDYPWu3X4nKzFak76wnR9BZHBqs8jmnX6a5awvVLeoo9xhgir11tfbApeUNwDkgUwFwHXfieXytQq9ZvWHRg",
  "key1": "2koBMKGFCktVbH1RjXmGEPPvX78cbNJU1gp6Mnxko5n4uDr2hYJ2tWCNQR4CLDZ4uNha5TkK4631ugam8iYD8SV7",
  "key2": "2Z2PLWqiC5jxq8w6LbhCakFnyuLRJpWD3KJtGQikeggrJFvhW1e9PGXZHEagCDCQX4szuHgUpHegVgK19A9Q9hkw",
  "key3": "iLfC8RHLGT3kqu6RjkjKpDidYJjSW9WNHBYFAbQkceiG9a8VnyEsnEuiMeu2gHAFY3GxtYrGkPnAbkZVXKi6rE1",
  "key4": "3hkXerSbNRgVQpLNQQBCP86X1bTmHq1vxnQ9DYxeJKkC6SasBxUEKegzQKwH9LYRyYzjNXaHGk8WEJiKEgn5gPYm",
  "key5": "2iWRfPro5WZTx7znXR9M91zJVdEvFyTRXUFJ583keoq7HMaDmUGctts9LAWSgSzFCp6M2aNTgjcvgAo6AnS2MSSz",
  "key6": "5LbyhjsAFZ8hHJPTbWJgFPLRa5YXzfncc8fQAh8VGkk4bdt7zuDqTv2DRaWox2FLrWaA1GYRi8JtfiTneXHN5HE5",
  "key7": "3H2hoHF35KG4icCLfuhb22vJF9kVGqENmHrgDXuSJakS9ai7nZ36WBZ3yCm5g13msxWbZZ3FVjAafFVqXcGmLFfV",
  "key8": "3ySBpzLitpZibeF8wJtjB48c8qgmsNSQkssX6gXfUnmwaeqyfc2drtHDCtGt6WPZmG8aphFqzLDYjzZHZJyq6pRK",
  "key9": "3qGnxmgvbuWprnfaf4g6sH16kw5Ko4hM8bGJsojCMZXQur7Ebj3yHZoqxYX4iX73JF3oiJAxwsFD98j3Mxeeqed1",
  "key10": "5W392vasQpCY3NMByhW9gLaxvwnmJ1onfAihPY4hg8v46kP7Tjo412gjhJqHygTm8KECHXUtugMmvi9eNTNCPqP3",
  "key11": "4fLqtcJQWUMsmMZ8zRNCdDN2nGPprw6NLoXm3oMnqxtZoHxSFcDLqk4s6AdHzG7aLYBcJAxYsiNRApfcRvrRfpcN",
  "key12": "4joZAGZihnaJ82GYqEnKZJvX54j7DDT9Voqk1FdHcLaf7HBdb8SFbt1bQBbPdgaNSRoGaCpvizRDBtLLVDNnQSqE",
  "key13": "5xT5oaNWqtJRqBvstiUr7X8FctN9M3LKmKBKktHf66iuf76QtYoyREAacpLpcwK3wMAbJfYepiDsiWTpCTNfJKVF",
  "key14": "4jwAdNqZQ5M8ojmLw5xJ81stCb8MHwEbwd6RKroL6jCWYVfrnCoTACU4UvQ5YojaqjKbu1cCEvXm9kU4upbSGn7r",
  "key15": "2h3yoF4ByuGmiu7kmEYrjGamXkH2hwEkiGrunC1rgneLoH4nYPx4zk1Y5AgrqncKynfiybWo9RuU9DrnLkN88F8t",
  "key16": "2VE7oj76M6RjMxaVpHzWjroSPBRG7n5hZrhwzHvMYkm6Reepy6yjL2zuJKw5NoWRRFHkHcHakS4bLNumgduTHtva",
  "key17": "4iKKNbfX1bsarCnCuKw7iYGYdPU48EcT45dc2kXqz7EKG8zxw6c1hNGtFTYW2VstqWrd2AarkNyoLJx4yvh8aqjd",
  "key18": "FQXkhtGFt7oWyC9pnUG5FbqnTPaBb9pw9pg46ZZdBqPZSy2S9e66WzMnrgNa9h3sXKWXNL4omYZmGugQe7uuRGb",
  "key19": "2Cyi7RNzpBPWB9fCHUmxkcrjsFdyXXgoDhjidEf2da2VKfYMLpQS6RBvA7Zt8gE31TuyGWvhAJkXopkTku4xgX9G",
  "key20": "5ChqbGfH8pWv13h9GcQciEMHMH44fJC9NyvHoFbipRxqvL5JDs6qsskJRZ6o5Xa8Nqv6YRfv8ZNmgj5CjJfttK7h",
  "key21": "4gawFnfjEZFUNfMobCNw3YKDmJDpw8y2oFnrRPWxsmmz8cHwToZsSgVVqaUXsHxJA5uMBZRW7yDXBLLz6JM6dgdt",
  "key22": "Jw2WRVCyeWWhaXZ3XxCiqFU36wEugFKrpkKfmV3oN9yWBDCKNjEL9HhSHebzCxMv5wmYzFQU1yne1Fm3GsaXWQT",
  "key23": "6QB2umDWvNNxbDRwtDW1tFJEcJ8uGwnBiiXHM5hz6S7YV8wrRi8kizeFovrgx3rXEwxbafZpM6sTayJZqQqCCwn",
  "key24": "5p6w5DHVPSqRkP36BQVx4uaN9LdSR4JBnuVYz39zpDqCM6pHSVCMDJy4pAen9uxxLdEobcc8aoosCLaSSGDWnGzd",
  "key25": "2s3mbZ2vCqV4oTH5hHWuisKV6nywrupFVWFVKjLmGDopvhyxj88b1kuk2TCmWXZxnhBiTHPCuhWDR6zbzcAtuKmA",
  "key26": "yWMVYJwzxdXf2eQVxnrjeui8vyahoQ7w4hx5NXg2HNbbmu4p35bxj5kjZrfjHy5uKwWNRhGdMqnr1B1kvtrePka",
  "key27": "2E5TV8o3i7YfmjkC9GHrsk6ZxmVhsoWFtuRrNCwtaEPSV8NSciKGbg9zdXAyhWaiijvrZG1zQt2FRZYuo3CqWAo9",
  "key28": "Jd5qo3FCThu9vBnShjhYoNSCPfyykDLTG1KxQPEBimetG3BMzCjtR5cwU4pPKivdd1NonCUFRkvN2qL7UXefNGr",
  "key29": "3Ca6Y5unU49yV9QAyAVudmmmEXZPL9tD7tFnKeJrbjELn9AufDJddgjyK9mJSGHQ9LBxEJgyrHawhqoYrkkpUsyF",
  "key30": "3tNAWHDNWwEENd3LWvB6ucDEVYAvqgGVG6DvtCvfMXK8jB3doSpji18mXEwoQnxTZdtw58isvaJV67xEdKVFeqwF",
  "key31": "2P5hzR26SENV4MugqS3zpUDV1RSnkLV6ZBNjfHVwNbqATqNRUbo3RidvV8yWVPK9q9Ueo3PXaPUb5vh4zkAaNT88",
  "key32": "3hfLkGoW4BJ4qv1jY46YaGcdiLxezHweHd9osLzuz4kVFSbyVLhPAztdrYav1nd6TJNz8e4g7t6ww6wKPeyRiJGp",
  "key33": "2C5iRR8GAdqS9xZpqVZ9jt1Aq7rdssnRUxjNY2A8BEN4Z9HqzXw8h3jTbdQNRTombyYxmKbmPpfffYmrAzt1Rbbt",
  "key34": "Ls4GPS5QnFJBExp2f1oUMLzTwixPDaVXUSM3CnWF6puZwmiw3RpghbwooM91pBxT2tNgmWpHDGYRJvAG5Xi6QQx",
  "key35": "29EQtDoQZPbBaEyjp9KVd8hm1p5bGk3hWuztPbTiADEDK6ECMiyLDaaqFspQQCoGjfT6ksh9TaaotajQXsZ1P9z2",
  "key36": "5fAp8wS6UGWFEFcgMcnGysPV3p3hDf25UH63Bvw9v5tNRTpTb8bFyGRDjsGXmwHyy6eKRcnBiioAMgX8Jhes3gYR",
  "key37": "4x7v9r5kUSLa3exaydbVezCyuSGYhU3Z4rza6yEdqmVqZUdzM1UhztSanidS2ZqJJQKC2G19BXTiokJaZRxWw21k",
  "key38": "2R6GKYXyNXf36i9STWzXocANBiFu5JAFDFDtTAGr5Jtwfe2KS8F61c622Kr3UBk2hKYQpxztBFog7GAPQWZVNmS2",
  "key39": "4XVWeQk13PQiboMjZB8tvJWzQVaBnUeDogLh4RRet8zP9qYSWCBMfCrsdy5X3VpKzyEqz4QPN4EPg5sesWx2W54v",
  "key40": "3zoJhFjUkVdmzFxgBjeX2r9ZUPnqWLDPqdQkVVXgthVKWFLr1vtkAzFDqkwRjBh8qz5D4K13ybwxL16DuBxaSvtS",
  "key41": "HtxP4wcmmJZzKDG5xj4DW6V3vrcSN9pppXTXMPbYsyFY9cPMCiYyP3Mj8fgDZNi4uzaLNTvm273S6hQG7zR7nMw",
  "key42": "NrrDarXya6sfM6aQqRMQYHiBL5zQPRSwZAk6txCVFFXUiobBLpbm8SLtvmUkJBN9yhhkBxGEGhJ1kxXntyuVn1J",
  "key43": "5njtTtibQwnSuCG2juN6QnevRNmjKGp9RBahHb2DDHYuajvcSQ2jF9TEqaSbHnanzPE7mVkr4bGYJTcZRtviDDef"
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
