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
    "uPHSjbceDnej1gSQ1f4Y6qQaJmv7DxPYhDAjZaj2f53WjidsLp5g6295WaUgGamW8HAtKesPVdASf7Ett8EZpP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuNVSCBoiDbF9h9SYcF9hehNxySWci8iwTSxZ9HYJ72TwwDP8RXXCjdmWDzXxCdjcU6S5rmUXr5QXeYKo2fvH7U",
  "key1": "28d2WLCmzJdWjyFqkbSSfwgKhRpmmWt9YbUBnhv4qLsJgMYf5PyBMGhCWASpRcrZ7gG1Y2Bim3jFV4UrTcDpskcR",
  "key2": "CLWbGys1ds3zoWhag7oVoNDcGroRjko9GChPiWXEgyMBoM9cXf5CsaZvVax153TpYLHGqQv4eetgH8gjFmxfzqh",
  "key3": "3S2W5TzrLBj3A7L38noaLnibLCmb6SsrUVywfVoXgbjHrZJZk7bvy93soG4j93HVGqAaWTXR9jqY48VNH7HqLm5m",
  "key4": "Uxd9RRbhVFyqpuzRfNC2rcZWpBoBKVbYi9pteaYgMQK9zgcauPW3rzWxnEM4cHZtiCNjuJv4YG1sf8PPrsenm3g",
  "key5": "61FgQVB5ZjKkoTaBGZP1Sig4pjXvm4MnmomX9s2AorVGpb4wbkq9EUu7p3ct84Vq2PbH5PKR8acKsaM6WSQsv7tb",
  "key6": "3bVTqEScu4nCErRThWNzGoSzz4wb2W8h56WhrzTLwjorXqscpPyL3Pr6qR6KV16ZajX3we6kq2gKekevwgmWw3Hv",
  "key7": "4pKYH8XfpCWz44xZHcT72fZ6voWuJVoCLJJUGWadwVb6qCD5px5SciQYBwCkinYKxKzB9EwS24zdiC5NH2BRL2EP",
  "key8": "4JGL9dFQ8Dp5Cab2fPGKevuLqHJsZs7pepHBUYeNNhGyqHYuW4YstdcUHLrTUacZbMAAE5WVsxAjFnLVxb6r7hpj",
  "key9": "3xezNNacwDdQr17JvANrLQyLZ5vkXpjJGq3z5Fefvt6UpfxdTr8LQZhWRX73a2kizDUM4CHQFK7BQKkGT66Xwu4n",
  "key10": "4Jrk6gEdeUfHpiCt1WPgsxxGRXA8JWrzUpKnuMKeCKfwJpRA6iS6QSw4d8UB26iooSqBDaVPPQtsZc1oeKXM8ei9",
  "key11": "2p82mHarb7K4iPzWY3uuhXpkCzgxKa9w7eUViUazhdGjgu3QTxuqkkQT6zDQ9JdBd5VTYzws3ZES5dvjTAZvzwse",
  "key12": "6pPcKchcUwtfBC2Bue6jcgtJinJzs2wxWfnLherVp3Qq8JTth3zwHGtP6YrDStxC4fiw7oJ9TsdenTFbmD38pW1",
  "key13": "QMK4LgqDBqXvBGuaKpstyJru17W46Q1sw4wna4mAbkFfqzW9b3pZ3BHhCKb9N33Aa4W2RAviG4asbyoNYCbBvyn",
  "key14": "8Tk2iEVRKP6hQv2JorfbciLZ7qsFqRS8MqjMpDssaBERb3jfGH7iwEVJMVFKnEQjAx436uEDyout6NkFPBY3ghU",
  "key15": "jsmPHJzcMRGLT1bHtKF2QLGHbTb4Dh8jjCTWcT9SVCpB7oVre1YFBQZf9H1p15Q9vJ9bcCS4FQo8a5KgYgMjbMT",
  "key16": "Yivypq4dD11prvK6LgbFD2pyZYSsCmuBqSyVKPMqUiAmipLn3oAJkyeTsVvw9CBhVaD2hnByx9mvyKDe4wCURTr",
  "key17": "29HHjBkkzZvKJo85t1FYmCufrVMr2ezjQrnFtXy856b6QNXSQXK8Kyn5LjUZMivvFvFVjcLCC5K64v6Xs5yTNzoJ",
  "key18": "5RdDDxnzdNR5EnqsaAZWhazvEj7uPQwpJ6FzURaReFw9v8XX695hDeTyQWza4ftS2CjDGKRnqf6uWXGAoC4aitLq",
  "key19": "3dHgpqa3oRoP7TZYdeaW9ugYBYxWKSiTxwxQPkatDALF9tLMtK6TfeNHr4W331j1oc68zwb1aVz4crTcyMEtgP9Y",
  "key20": "4Yo3w7iMiQyFSvM5GvZjnjobeJZHg4AgvRvkvZKaTKqqKcdbd2wrGCmM69eQcyH7rfJoqK5ekY1o7ULZnPV14yCb",
  "key21": "47b2hgaZAQSXYzdChYToQSUHB5JbG7Ko1XFuqDkycMpZoJbXUa1cwHdjGba1UyKxB3b1dcEoVR8Ps3jc1uz7WAti",
  "key22": "3gKq1TWrhsHLdMqQhAHzenjhTvR1yeDYuDvtCbiRAeUKkBm8Gks1Tn8JtScDNR2hCZWLCMpvXk62rykECehvXJLR",
  "key23": "MoaqimAYY1oipiu7Z42rG3vhreAZ3yP5MUzR3fbYXkxhnqBstSieuZKRNJVXcNgy1DwjwKz93jueiPvBoti1RBY",
  "key24": "2nXLJ4hGTBuvbC7jG9qkP6AvVHrijMvTKrk2WuxGvDpu5CBLsaW3H6FZf3c2uyjiUTxgqfbqourc9mssEJXNf2Pu",
  "key25": "3XVCrA4Y7AmNFb4kBsTD8Ahi2ZdJ4kMwauPAY9r92kepSE4sWwXyzjua9j7N5oypiEPfm2UpKw96KA4uYe1Q8Uvd",
  "key26": "4Y3nYWL4HZbdcwjHe9kYQrwSfdgp4GaToRGaPLn4q6YhrDjPVfZKhi1HqWwTdE2HSTWKgtgbCCKphgh7BbE48GkA",
  "key27": "WowyydEZq4ELcf2rmvYB7snSuRGY9jKNza3EgXt8Qt7xiocbhfQ9vugBY3NrLGqao6LLwLzne5YsgM38XhgP4vo",
  "key28": "4TLmBu3js3C9n2kq9u2zqSNK5k5agBv4Xn8fhKguginCu4dVShGNi8Wok4GG3CGRSNrksd7ZRvLegidAxM3ELsEH",
  "key29": "55qec76LEkWcPKgWqyD2n4Fh3verpCktaCwrfSRC1P8noXCZjtxtRyWYcYr5KkF2918LG8McaKHRZhuRVogasw4G",
  "key30": "4mRPiB7JCwRJaUV6hUzAbcEtP4GAxRr7QUtt7vEFMHRfmYF6VzUeUHbeq2AfxQHNNZf9e4GqmLhiBQ7Lhzowovqd",
  "key31": "5o5U2aNGEitUgRsQ9tybgQTSDpmeoqJ8aVApvESaVr7pU7mEmTBJGLfJH5JpNtyRjG3Nrrpnou8ZdvprQtdp4N5F",
  "key32": "3a5UGj5HtZPuVTrtaabTBbJCeY161iMbATGNZTRswGSHodANSqndKoKv2W59BNBkaWkkFxdqk6dTm7fdDUNgF2mQ",
  "key33": "jiBbtUA1C7C46dEU9TLFhnTtw3hvYRR2JoGQvJ2oHtV6hk7abe7wJoURG3cB49NsZjUK7FF6uauxfaCeCV6w7ZY",
  "key34": "3wMPxkzb65eMLv3zNwiaJYv2fFKeEzwuiWHvnRixowEpqRdE3JxBk1LP2si8zR4aiawmxV8emcswAH2f2jbgA1Fv",
  "key35": "a5VmrfhikKvyLHMKUjrPSghWajfVaM5BLiTS72NP3BqyzKUpE6VpLQHFTkRGzxwHG4p21XZbHJcWi2w6KAX2voB",
  "key36": "3YcrCkUGwGqKPEPJ9oiwB1QWB2RY2ooioCn3GVtzyKMfD5RYBVRYJWnYLDHmFZnmxd7wEErnPQTLtmRxwFhYWy6C",
  "key37": "3CqZPSPTqzBWJZ2roVeQQ3aLXLkxSYtASkz6ZpQjj9AGFfdzmnLWa4oAUnt5M9RPvBh2LoBT5dXv53Pgj2yD3pQA",
  "key38": "2vWBsK1nQxuUQwYJ1JysWUdA5WKRYVnA7bfK6QSnxxM6FNywtHpsbKThTFc5ZPnkGrtH2XrGww27RAHJsHiZEs7B",
  "key39": "63UojU3wx7SdjSduT4ccSapiQt3JMA9Hrx4U21swjeRgEzAeMVzXjHazshLfrrmxiErzWGJgpnyM3RZCWqdswvuL",
  "key40": "E5QfXJzRc7g8AQ871Bbgqg4VmwkKzre1EwFE6fdh7yxmSqVd295PzRGyUjPWLA188pFwFoWWFX1efPsg2yEY3wF",
  "key41": "2HcKhQoykQyKPoVNQjySwD2zqBYspr6m8HkypASbLdAHS2rEpEtanfKX34naSFb225MK3gL4ZRq3CjeLC3EnuChu",
  "key42": "6cKcqqDjmkFb1utD27BocDzEk6Yn7VJ6GyWLrwYUkCeX4QA1o1zaJgLNaQEhZaQahdf7zSmkcd7ZCiMQBQuhkWL",
  "key43": "Ra6mUcyEDM7P6BjL4QaWcv4iUyWGkyZdUhc6BkY9vqgo7coKzmYDcTm4Coq5A4hdi2jAkCeCAvEJfvQJ1Na2Smr",
  "key44": "4Mbb5HfpV3aCQSxHTKem16BBEY3eWPPPD3Fv9tjab6jPisLkNYvM5jbBD5b5XfAQDyiRKsSneCF6fVffMsqSQKXk",
  "key45": "AwDYq4VoT21hFZMRyTFUtrN7YJwd7fVqk9VtFGDw3dhx26qvEYXm7J1Y887v9L8nRPRouUT7dyXQQkVbv3DuDRZ",
  "key46": "3n5FqmJMFchLcZrv8EDtk7qc7VmPhUzEiKdMxfDohDHC7YQYckYWtiXVHDrjDLJSJkijB4Y9fJg8iPNakXWinEbY"
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
