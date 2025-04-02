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
    "5bEZ9SJvGMFJW3fXDDXSr5fNGNi1hX2LAZXzjckifc8pBJMZNmbZA7eaWNpn3eLEenhoN5Achmq1tcoDTVMsuJF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSLGA2VbsWeX1z2uwYBsKEDQd1TPao5qUUQxrKjVWrn1J1GyiGXZXTBn3R7n9ew25Ex1dncibG3ZakPu8yUtbYf",
  "key1": "3sF32FGPe92tP4qv7YADMcEMat2XuqZsfiKFghE9yd7LjEQyqvt82HAd7WH5D5uL7tXnMWoveKaLcRH1Go4YH6Fn",
  "key2": "5NDGM7PBbrDYiRrceVDeBzypJf5jGW6tQitdZvgvSgd47hyaeRx93pZUKdGbpsbet6DnhAMinoaBuumdm3hqk5kp",
  "key3": "66G1m1dE9oDjb72h2eHaN3g4VT5m6H4yTxJJjXttZHYNRSuqBHU3fee1Lmo8ATNfiRDMKPQf5QxWRhHkyS2VzRK7",
  "key4": "61RU2kQmbsr22UL839xhkhMhmegexGKzM3r76XEFz4ExSfoCPVdx5yJigYUyvudXh41BhCycccp8oCuBg686ZKet",
  "key5": "4QgT1uK3Mqf8ptjAMgFQs4uAqWw18hvMrpLEg1EPNhhSn9pkynRCnoqxjGxFHD4tuKewPXSZTmZVWpn3puYEGoz3",
  "key6": "Es2F9b3EHTFP9nFrEUXH5TyDUAdMb8D5AjXcyE5bkHqsLvdvQ2wRdcLDxkRBEjhsoW8ec4TxxqkAYtdeFx2doQa",
  "key7": "2e37or5FJYKQbj64UkxxUWHFyiVyGzBXaAKMN9oiUksYGgUKMzinUJGekfMA8kAYNVrd17cqWsdRVvfdNdfyXaft",
  "key8": "5QLAnoetisy5yT8rM31vDLwAs7wFt8muJTaooDZ5pfFMDTcJnzgYd42ouZZxWMYzUEcsL3XWSXK2j8pdahwWP8D5",
  "key9": "2EZK8gQSw8Lx6VAZRJfpxdn1RZCgXN6MKSrQWxhUm4yRpBvoUh6e7ZLQ6B5z9skLGimQ7xrAoaRbuTyDFMyexUk8",
  "key10": "qTkZpk8DofN8XsrhtKoVGUk9C9rRzYBANALj5UTFfbaFGbmucwjj7e3yK6AmtVH8Lhg9CFVDD8M9eQeVhS2FVuk",
  "key11": "4RDmwmRdbWvS9SB6TeoFaTr4P9EbLBVMjxuUNkcqa5e2VEcqM6F8vwwaSG7mQ9SwkksA7Pwzmc16qYKJ68SeyUVz",
  "key12": "2JLKpH7zv62T1geLQwqGMhPgW93J9UGzEaSnRYVM9xjvsMpR4RnBCoaxBJM7FxAY62KhQH9pRZJupRtuStjUCMi",
  "key13": "2VEENA81EGsQPomrQYqJRgCMdYYoU8xzif3DhwvALhGhMYoiTSqBM2v8ixT8waxi1PLG6eQMVRFmpq3cV6NGhqeP",
  "key14": "2yyftHWghY8krZNmVJX72zDMgZhvv2uFzrEetLrAzktaCCyjjePtNRUhseoNQbipeXNH6vNzZmXhiFtVK3Pd8DvD",
  "key15": "2xKTTaCHdKagttAG9cefxXP3pRm5oe2YxCHzhGsKg3B9x6USaQus2D2wMeu8VTj2E1AdY2N7zCcLnmtbNt4m8hjQ",
  "key16": "4QwKsVWzTHNmGeLfJCMDPbq8EevMTxZBHaSgCHrYKdaFwC9QHw25WUDcAywigMc6BfVq8XE8v24jW6iBwgFJmv2s",
  "key17": "5M5pQSthFLbaHovfbPpyyNu2gU8pcWDpdPvRbBjEmgigT6UnYv1R2b6iPK5GKge8U8F5MBJKhvRvgypd51SiiJGj",
  "key18": "48P79vLw7m9uvGWBgsmSUELSXx7byFc4BKSzU1w53MiRsMKmC1Je43vjspKJMXagTfBED12jMk7VseuYMhkVWdaM",
  "key19": "5U87VxqGkeHaYjx9p3nXFPd1nZwPFpW99v8AR6kDeZMCuQJtaaNUP4tkX3dG1HwQnCJrxAdb4d7ejdVRDTR8XY5p",
  "key20": "3VsCq2ptU5muK4UhuoqS3TQJ6sFNoo4mQ8pMWd2WHsLSSpUbj5kLULN3ArWjo4r3ouYJaGBwL7gWykCpH7rW8MM7",
  "key21": "2osKykL6bMZuRG8hZWeVz5GodYVz3UFYtfGtPptEHidzuzDMrvfYGqKGcAWpiKSs97ZupLqdicRqgVq2ow6sAb1h",
  "key22": "4eqK7oDwNh6iSRuR3RHBKGxqubTD6kTjS6DTRQADvZkbdCwbDQfnFCcqMWD2GuZsr9AxPiUX4T9gtio1DtKBkWfx",
  "key23": "4MVV2e352pjLhXyJhoLKA7Vhj8XituB6Pq9dBZUwLewJwa9m4ENx2QKMaxwL8TaygRY1oweYj73FzJXCzNT7hnDS",
  "key24": "4EdS7D681WFcMtEi84699BXKu4ansHy8vxP8HQ4wv52dBC9P1bGt1h1vPrUBAfnTz9rRATQA2BW4caunxLPVJVbK",
  "key25": "42eiQK8w7Mh55dLo7xFcoyAv6RESbeD2ow9bVee91yADzzfW7nprkwQJRV5iinZELaKef8x2DwaAHrLtqLYsMFFa",
  "key26": "5mpHtb2B6WFNEMa2ZQdAzoHW4ZafKuYBUCUZbRvaisooJDRvD8HaVWS5Px5sWXkf4S6XiecTmBTFskiHR5Bdhb4d",
  "key27": "3hd41shyZ6kGka6sBo6hK1vpDwUQCpEStyLoyLvYaosDEM7nrMmfkXXgmYTV7s9eraSRWTZCJWb5CX5BSkWueZyp",
  "key28": "3iAEmbnAL1JKCtqQiNEQ8rChFxhZJtQxe2kzXJwPNKuxy1xt3Na7jEyku2HJrScdynrwE5smCpYzJD5UK3onByem",
  "key29": "rpaXoTF7weWn4RiBEbfzdsq1jLDUG3TXgn5N9HpGv5aqRQ2aTdUtBt5DeJKqBXYXNMwK2VwSFzJV9HoEYVmNJ4x",
  "key30": "5p6t9JGyHrnqKaR3dgb3PSez2akWi6ZDEZHQWrbZ2DfpBJJmjyyVqnEeC7jATkUSPNMCgySd1o4ZbFxZeUjhx2N7",
  "key31": "fmDDBGmzwkkRFSeWm3fmZtQvxD81187wyfHUbJHnwM2TB5e52RiCxW4vRdSADEjA79jCbhfsNpPhxBPuzgEjPUy",
  "key32": "2RNTaGmuk5wePRZp8G41SFz3M9MW1v2Hv9okEAw4AdQ935e4maR8Yjp4ENonecF6RF3SuXFdMq42kLg78uBrcd68",
  "key33": "353baxmzJXP2mwH3nn5UDhbYw7EC3f5jVxwNwudgVQNtUbQYrmD1H1oVXXsiFQXHFk5Fjygs1RLLcS8XtfmPb7Vb",
  "key34": "5kjjwm4zipXtDfGRK2zA1fQE523SMLC51PAkGfqqJznQUMyCbEYiSZRocSC2pF6bfCbv5rCPXjCBtYV4vT4kzAQ1",
  "key35": "5SxXgKNHY66F6QXtQDo7JsJ13WSBp2GAcDiwZXiqVNg38Pfa8sbSuxKbvrApJv7qhFoybjtj2okVcFBQvqY73phT",
  "key36": "3Zva9S4JsyMY8nZkxV8gV1rQx1sjsHeAAjGcMCRPEk73PnYW5aQbthMUZhsoSby2HfRW4hMyGWyvuP5rAyWzc8U7",
  "key37": "XuiG6MMeENMf6TmsQd6bLRMMyyEkDp91gQ6NAb4zCVaScQRZgDxuPudZYGHAQZZZHMeApAmVbrS4S3U2PVbcgCo",
  "key38": "5Fi2Z7VLVYzUy9jEcfh5AKErEgg8RRZ7AgoyNL2deijXj4UNWdDLtxgNLSCwU5XGAKKWwrEqvfx5VYcfv8PZ4Xs7"
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
