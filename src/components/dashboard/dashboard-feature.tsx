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
    "5YEdN6ugHJzifgBEZyRpw4jvaG17j5c7WKfNrSNMwW56soyoXW2RQpsa18HiCagDRFXRH1SdmqWmWVTBu7ayH8MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YddyMsMs31svh3XK26LpudMn2mEShtxBrDxWYt2f8FeTCjtXjmW5KqzkMY8FFJFRK9e3VBDDhbY28Q7pYVoQmU",
  "key1": "5GJGgP6HTtRyTBmCRVCkvfgZBDDo2XmfBuBmU25WQUvb34caVEHcQUGi6znm2UnqniTHeoRPKb7BF8LTURtmrT4W",
  "key2": "2632mPbyArkvbU2G6BoKszjvmGt1Cy9q4HyRZ9hnBYgPVp2QEUmTzcXFMuVfzo1FCwiCVKf1S6ef7gvVGgvSJdq8",
  "key3": "5CUqycpavmxSKuf2ciJd78tVVMPJbRAPa7t1wom9i7LvE6kVQTrR3eFXZoy2ue7mgQg5iLm7GfSpwVZhjtDvUxBU",
  "key4": "5QsTnqNb4jaJgswZPRtbkvo23QAfP9YtPgv8N2MjSQWApZ8ZHgn4i37txTFKiffFnAXTsb3t25CFw7ykNcTnyWh5",
  "key5": "2NMUaeq6k4mZ14jEofUVMc1Z7XZH4Bvj1J2nJiZag845w5DCZAsgXekfcPJyHyjcBAZzkaSxFWqd4gwGs4m4zMCi",
  "key6": "4kw4RiPVhMw9v5XgxNac7vrzNRwnp6sB1XnRSR1xx5Ksr2YqEfGxdq6czYPk2bHDq8keqQ9nzNYj2mXbYPmhJojK",
  "key7": "4unf1bQzsZuZrSwaRkoduCKPFLHPoRvdcUDxzfF4zG7uq8kegD7AzFy3K6siz8e2ZEeYYzEdR9tU5Fy2wE1FJtXG",
  "key8": "5yeNe1R2TV811iS56nwSUA6VSKfZhkb7z27TUjVDsMk6rjdcyeKTJS5m1eGWrQCG6KMZKEBAuUDfHXDjquN8EgMx",
  "key9": "f292aTzJZUPxpSx4fyMuX7Av7yA1C2brUSrMNC25hBNL4Gfeo5e13p3EiBSZmjDegKutrc4QqdEjbivbk1HfCMp",
  "key10": "jTTHXC9MPg4vffzfhtzaVKmrGtfqv6nSgkXs5f9aZdi2g4UrwietaNVEcq69vBhyFS3UWYPtERbB7DpkbabCnw7",
  "key11": "3zheLEkXrxKqooE8LtYtArGkfTnVQNenesFSVhJXK4jdbWVbDa52X7jSMJ8A8NWv8YsALqf2WE184LeG68GWgxzL",
  "key12": "2K8Kbr6PqV7gNn6r6NBYBnDKKW73uMi7oEsJZvt2bRbBQ7h4QaF8xhuJhgfsc8cu4tiN7THBq889uKUZPC3owCbz",
  "key13": "4YVFwgvA15rniMzwxBAVLLDdGKZT5bD9yREiNKEVSkW7ZYipVU9XFko25mGPudd978PP4UzQntKDJTSEcannF8se",
  "key14": "45KsPiXvgi4LzoQUHDtZqpCnXbqbZVexL1NaatiMBbhZPdVdsn69utZD9LQTDv7Jq3YvEK3WLGV6g9Scb6CboC5s",
  "key15": "3KZZmB22WWmDa8bPfKUntjGPpUYPmAdXGfu15zQiVjt4bUV2TJGiAAJoEJxmPaw3WAXgD7UAHBvkQHdZjhEKG6LK",
  "key16": "64YeVQn5Q2jbpMsWds8vy3eZLTu8LKKtCpJaXSwUatuRUMS42mjiDr8JtASfRDBg31TuvX1Uzq4s9dp63yScrLSZ",
  "key17": "3rSy53ERGPtG1PYfo5fGR1HDi6GRNdpztHFc3FPKnyW99UkYn1Vf2FEy3xTpYQvsL6a7wbpi8GrtmCwujcQCYzVn",
  "key18": "4L5eYMdtw2LKtAjAKkjxJppjJoca27WfxmzVCxjtNvPNNxyuNkyccrMXPkPLSHf4YeB59ahTwr2Cp4VBfwAcUxYs",
  "key19": "5r6p2j8juaX1PzgfLM2FwzSGjXnB9cr5srEqhqkpaMekq2utuDuCZA32r8DpXyZMm8VHA71PirvkebYDcTVjTfse",
  "key20": "2jf1rGLYRKC9RczFjfqzJYFoPV8rqzmBmMwC2zGY9VUSvDZkgkLmAGrCPjD5mL8z9fhQ9u7ZnLwH4vnU1ZAcMNoH",
  "key21": "4wP94zUBoesm3QXJSbMW5aKapGJULDs3L4n7EFVkRGUuNU1EVRsf3P8MzJKnReH4k1Bb4xYATZrqbdCLBPWJpVn5",
  "key22": "3Y1y8cbavi7pFvNmH6VqZuvKiyPbahH253eb4hxF5WSemrQkmhjvvYfCNnn1jhFyXr1VGrZ3cuN87umeZ92pTE4N",
  "key23": "5ZgpPceoKkwW3UtZihkgbeAARB86fdDuXMgnWCo1mbecePYnhHJ1snoFjZRjq5mUi4ZZEjS2r1QxjQNDn4H1BHYv",
  "key24": "2TUyibm39g21oyiRuFm4DHVas4uRat6gjHVstFnqrLrkPpD7An7qpbRAuPJ8tMdnjTwiicyDb4xHqXRkbEn7hkYS",
  "key25": "5GtDBfusHeVXEiYJRC3cbxw24huG6d1SyfnJmbVQzcZDakVQcHaCuWZYjJWWpMi49Cd2eJ9EKMCcsxRfhF3VxiJK",
  "key26": "33JWwKsKWBpNraCcd35WnY4Scvq1WZ1K2nzTHCikjTdPEkBNJHbmouGq3mXC977HZEd4BhmNReQLruT4mWSP2Qm3",
  "key27": "5d94nWNyWwBHNTcLGWi11a2qtsHtcBkixBh4qpGjDTery99ckTRZ6k61miAY6n6W9D4szHY9sTMJ3KFvKve82sDq",
  "key28": "5ySkd9wyBvdRvqKZjSimYMTfyGL6Bgk8dcqNGCssyop9pX66DmBvRQwZmMR28RhWFGxg7osoWjEYUL7ZLkFUt8Xm",
  "key29": "4gE4ewn74t9tr8by4Uc5bRDscZLVpwqDyMa1vQdvAERjXrRHHAkPUMb3ntJdunDsDE9o4dU5xGtFbQVsyeJzVzBG",
  "key30": "3Wiiqrh59C2aQxMPiDYJeZZZfmVyqnJLDMEhtQEEH1qK7ovcKxkfy8LYt427NXvmCMr1eM21FA7XHu9XkZfjX7CF",
  "key31": "2hCA2akbQnUpa3cqcJRpVPSrTqDhE1xFxt5aRJ6asRpouZHkm3K2UeFshY5UxByEVgAz7ZffXfZsn7mo2LPpyH37",
  "key32": "3BAfU11o3GgLTaYFxuvf5PDUh3dC12iuzAX5i4m4fScBRpZnjLLd6mzX31QhoWvhWTQbDKrevp6Y4fk26tsAabe4",
  "key33": "eoJ9UPQWBZ2C8h4uDnopHDGJGJxhAL5oK518skjP3yhfVVTddnWBMmJStee13f435hNiQsqYnGf2qpwpA9wmaXz",
  "key34": "LWTCG8sRKzDAW3dp1pMTFZm4hhJUdejPCjHdneADRbX3sRvofaj6arJuLvfhvcXqd57Gh5V3nPeFjNrAgSvUr6V",
  "key35": "44nPBrLvccg9vBT6m8czMcCUEtYkKj4wryF72mjmGskuVAA6T1T6acFzAnKXkximxwe1sx8HTm3mHcN1xCGbSVMa",
  "key36": "25BL1fzvzN5Vwkqz8hhYsgtjq1WQwAnpheKmTWws9gg5d6W8M7Cb12NwMv5YFVBWFiCDZy554t4dbmgMtmaQv2TD",
  "key37": "wmfD1fpmQqzgqKKXQem9RP4H5NS6MRwQv9gtB9cYtBa3shRBFspoBjTJQYwSSU7oyeZPkU5d2E9VmBohdxPu4CQ"
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
