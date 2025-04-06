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
    "2KahQBRfXdMagHvMUXuAU6uzAR9nJAz2xHuVKGeB4c2BwQze9jKqKFvDTcqdbLxLPQMxGRXNmpFxUh4x48isRg2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXb3HWCfUxYD9NCSSy6PTxAm5ZrbcXvaE9ESEKL2kMdqDxizEeR5dkSCXL4syLziJ89q8zu5jim5DGW2afs59VM",
  "key1": "4V7LXf4B6rDQGNV3oa2wU7Az5RjJZz8dyoSLWhfxvhwswhyrfbwwg6u83PtKv5G6HXhxHL7r6GM8Gi77vKytRp6L",
  "key2": "5RcpCbVzW32ibffendemSaEj2qTUy29yRHNEzeQQPy3UEDgCnHjzGmVKr7QSWXqU3AhjXDzyM9xYncPBzxEZJjbS",
  "key3": "4krcGhrbtqiCr8QdbgHPs3ojHL9RCijpaux3GvREqaWe3mTo64hk6UK9K3h2cdKNJSXhKXJK2yFn6p7pCrKATX9a",
  "key4": "5Jmk4bwqW9MDLBTU3L4sQnRHMSodZkWZaGJKAGtuzPNYLKJicorp6fKVkQKXXQb2xXdY3nCSJXWm5iAcmuQcksuh",
  "key5": "3TcHJV1vtbYwfRyUV1nv17i7JK87awnSbTQCy7td4FLdDkwoBAgULG2BQcuTXVJTeZ1PdmYAgbtwc1pMmXbHhNyA",
  "key6": "25tksog1UteA1kG4yv7rfK2FVvVV8EmG6pfaSDAEwM9joEsCQNmFDwZ8dE1p9U29BbJ2aoQinCKCwUDs7xfsh17q",
  "key7": "2HrzHZrE68Uqnk8gm56wV4xhNLY7ZcVqQE933bYihjXDoSrVVKRaSUUKjaBCwRHHHH6m6VrKfCUuYuf7fEsgTmBs",
  "key8": "3Kj51cMTtZj4RbbEFmu9S3L9gDFUPJFoGwXhCcSHqdGvZEtgMHDPU3Ssv6ypzTRszPNmaDtbom7YawNmKJ7cag7W",
  "key9": "34e1pAZtdnSRnRiiX4SQNX7bvX4Jd8f6BeL93Sywy3tuxJXdyDSxALCV3R9wsGTrbcEXCbkDR4ze5pijJVohqDL7",
  "key10": "3jtAG65puMFaP4CiveGnyF5Ju4cZPLRkVqQ6vUDrbdn7tu4v1mAdX3L16w4qNiEWJV5tfPA8EPfdZk4gVoB1LDR9",
  "key11": "3KDpztoUbpKbR72ka28nPwviRuomGtufwzAHUt3PN4Mv58Qr9XQycYrnMfEzseewygGhmcaHeGhpyGuquXthwXRW",
  "key12": "66NM8taCnxgat6Dw15V2EafedP7geucJkVBsCzYbN63SZdsuvencntSfAvuYJu3FWTprjgMpnDSBXvwHQ2XNn24E",
  "key13": "2vBYtMjZD14bUiGVVEZ8JYBQJuACY3RhZhSyV6gR94XD9UBqk2WZuiVHqQM9fmTbwGGkC7pCFkgP6LXNpAACGhrt",
  "key14": "WdCgS9RNet7MS18deeuWKkCxzsAPwNknLHNBP9VARi7wEv1ZqPcTYg2sXGeWQSBUTY3tbLQyYxMB5D2dyF1HHf7",
  "key15": "5XtByxR1qe1iLqUtcMKipvQRffx9oYgfDodgFT5EZNnpoK15qEjF4Ny1X5zUfT66gKKp67TkqrBTQdaxG3Qtk1F5",
  "key16": "3C6W6LfrhHFUUbTDUjR27sjyvSdGT8MsYHPCZHZ2Ea4BKqVVSRn2nkupiTkZ6rQ6Q1fjR7HqnGcb3EyCZWSr8mZR",
  "key17": "4HBwh2qR1K37AkBGNBXuEQtUnFsLmBAEFuPtmx47fuFt3NR8cnDb4vnNMLK8R7av67ZgYkz9U1zj2q2GbucDnsX1",
  "key18": "2xsdF93FimvtdCkNd3a4JnLwgL48cwDQCagdEwWAJsEfNYzP6AgcqDoXZSkjKKMtpFhvJtJfAbBLEoCg8uxXY3of",
  "key19": "3oboNvW7svNubgAKU5Ub4y5apwXmu44qy8qKDMupSLzbCEM8fsSPmNw2a1tYBGMk3zQY6cangfzqBWYCu3z3jU4c",
  "key20": "FcJURGVvD7sQG6AQPY3xwL3vnSwVMHn7XSAJXC7g29RXqtAbBvku1QvutcGsN6NExiXixNWJsT7cT6JYMkbcwL6",
  "key21": "2RnhLa2DNLmEbwBWvNcfRfobBFvhNmu6VYF142M1uDPudeyUpLnL16KkMobH4KsZJTnJduQ3ukeaEe6qt2jR6bnL",
  "key22": "4x1pC9d1ziFUaCqqmC4beZpJcoAErG7PWnYU9Pbf6CyMq85PxLPwfFiXg12VDNia5PAbX1dVyNTwgEF9FiVgf2C6",
  "key23": "2hAxPWnqEsZpc22kP8iAmeFDaWQY8Wbb3MxWsu7iMD7ix3eksAjLACm6jttDfutnrCFn2G4QkuSLCvJgTCW7EdeV",
  "key24": "5zQDf9ky63nmbtnTZX6YdPeTXNTbqKFerAeKUrfYe7n78mbUA4t1pXWqMZD1BTGAjYwkM8hTin9VejD9xMEZAXMK",
  "key25": "5Rtk7Z5M7jkc119JcjvmwMRp582J7TKEgGMEvy9rxkZ1M9TH7Qtmf4KkXrHKC1s4Sx939eJeb2A4nX7S3AVTZ9YD",
  "key26": "3APkZ2UHNEB8V4a921jurgdp1sjqFQxWxaKe1cXdWFaEynsXv6UnwfE6ogpY54eBBNbtmXDvbkdZPbJYaADAZEBC",
  "key27": "65imLFvVede8qBzqYALte29xg9DvUNYSvhsWPzGJJratRGkzH3vK2Kkw1bGqNMG9cZxcL9sn4rpJEYyxXhL93ou2",
  "key28": "5KisQZGoswYDUEc1CzoB2QsXjGRJksbh7odJhr8EG6Sp7sJ5vfaAyGDLa26gLUoMmptizjo7ZpCS5CCgjPJ1u59u",
  "key29": "F4aC7rLj6fqCe5vWrdFdbnGyan9LKPuJAsmFXATYVJpRRZ3bmTnidxzzjym9nSu2LbuBFwJ43TrQAqeXBJsrHQe",
  "key30": "QQT8jVf7Pgc5xpeHDX8ekxJAvRLiVFYassCJ442oHm4gixqt4GAtYKVfV2yHDer3vqHkG5bqUrTw5NezZnpeFJB",
  "key31": "5MsEHG1h8Q4stwZWoC9zEKeq4sY3tCwWKXrFcSJD75qVQEJSP8rBjgoGjY1wTtBpDoeiRaa1m9kyHUsuQzp4SEco",
  "key32": "x3St5WmQjwZdxLbhzsyMWrQWHRuMSvBJtgDPwtK2e98r62GygD2HH89zNhLFuuQdQ6joUVoNYz3JkjkPcrhM5Ts",
  "key33": "2AkAuttqNFGLNdWjiabDuydXShGb8BzKx9hC1ZvzKaYr6cj9teaft8VuNPaikbJvZsptmFxWLTSXshvBpZDiD91Z",
  "key34": "CR975yMo8bqcNtjmXa1ZfQ21ueag9shXmw8ZrS7Uzvy5uy54qSiYWtCdtHjwjRzhpLWnqLkYrePHRxHMWeWRknc",
  "key35": "4NBFicszUGDL5EuzcWZSitw8VFjnQVeEdjWXiXm2iXcymHbLTALSeZBbT5KY9zGKMfUTHnYmANMC3gsswhS6EuVT",
  "key36": "oEYpVsMkTbRxkbffdaxVRQcFevesMxA1YMHag81TrdHnVxZHTgAiSjoUqCDG5jEBfeagBrmTdYFJpMvETFJBEix",
  "key37": "3WAx6axAbFr36dfNgcw67ukdtDmDtQWajFXtPTAFisE3EGbeHChseqHv2jzcw77UGM2GjQ1ZWourP8tnPZQYUYdH",
  "key38": "2gjbBoE28rhSUSwWJo3HDpPzg7uCE6GQVQZbBsQY4HtmRQdKVmRFL4Kw7omVsq2RvFmDRFGYhxBzM6iXyRs8xjaH",
  "key39": "58EVsv718rd497H5M9CczH7w6NbNht3CqGyxHfnWFmGVEc8VY9PdUXCuK7B2GuaekpJRGXsAWvGAiBFNMtrLSjfZ",
  "key40": "29X44ucnygdXFPjPPEaSYLzyDBRPwghJMuP5gZrZ7myT9zKCWmWWVgAzrbJ67n3qJZkNr5YbigjyAhSi9WsE4SHx",
  "key41": "57JDZhxbaNnTsVJSv9WfCHruiN1dgLzgyYfTPe75rxyERTkLq4kwdWgtkdnfXqYoRr93QGdMXTmzGkuf4MsoMb9o",
  "key42": "4eP7iBGrRcNoz1yGwt3MSzar9YTTEsNbWazKp2seinB22LBKL7BzrLpZq1mCphBMtPkWCy4w3YFbH2ycUXnxMd2P",
  "key43": "3x3WuVEQTfFYABR35NazfMsYsa76p1eDBxx5NcUzv86apbJF8xW3EhyYZ5z1s3XqPQm5Ffzfa7bFP42XokAiMgD",
  "key44": "znF5Jd1kHQaY2dwi4PnVNb2YC1rfnj6v4d7T6VyXVXKxyW8euAYdp6xSiFFDtVENeufDa2uK6qCHTW9aVKDMwtU"
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
