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
    "2EfUoAionzRdAj383PfBqf9VnKMD3vMxLR4VNoa4KNxZXbokqANUz78AUe17oNddCjeJW9B9HExT7jgCy7TC5txg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGcVM8ULR3LugawBxeDfuCC6TUY4Dx9WnZgZjaAqB4DhaFzbCWg4HEVqyw9gQCzV1czUZCUwNJUhm7Q9fi396ox",
  "key1": "rLciWhFq2Qy5cUQEW1B6fYo5kXYfuExEdgStQ8vmdByQGVQ5v4SskWZw5kSzJKuYWTDry3LTT2J6VdyuDXT3oE2",
  "key2": "4Bw9cSp4MUHoKDeF4NRULBX47E2NoSEFVwyUpm83BvtfzkUCZXhUyqyE2nSPo6VWardYAcGkE4Ap6EM4njUD1U1p",
  "key3": "4Zh2AhcS7KQEkbosu2KmQ4GXK8YWv2YhY59rDLyip5aud1U5pTxVukeyX6cDqpfy937tGAZ3nsEKrDnMHpftxcVY",
  "key4": "2W1kM2QuKiTegSRfGubj2nWKGS4d6fh39o3PczEGUbwpDzG9C2MDHnAMWFj5NHkSPngRraYqXzz13igEQWNeheBH",
  "key5": "4jV5icrHP3xKnxq6RVHGug6a6ikTcSigojtp7XtYinskPSovnKyq6VaxrGeRPAt3jgevzY7sT1nXLrybNpQKuSky",
  "key6": "Qg7AThXGyd1CQd8SfLPtkTK2DJeJuQmwTDZvWkJqjnKAuwivbU6rQmSCasjQXnafzdF276bmyTufy8V3CJCJ3sr",
  "key7": "2qhf57bqrtC1Lo8Q18YdZSh5rBSTy7TCYrQPp1U4SuLwfR7v1Uf7AbFPaeQYtLmHQujDfVwu6V46fZ2feaDqtwgw",
  "key8": "4rgzgCdPsV43nrq1pqVqaxg5jhsuNNEdvBV6a6W26PKcG6heZG78r4w8vUREHQhyzLw8umoguNCMQnFTk7omjtGv",
  "key9": "3u1x8arKGkbZbf4rbzFA9t4rt5yJaFkCaSd28rrpE1dPyufUhVRBqp2Z56JdAKSo8DACRrMeqJweo8wGy5P9ob88",
  "key10": "3MpQduKFwHUCXkPLS8CB9t3eSzD6Vpt8iZJvSLZgHZ29ZKa9D4xVgTZn1iTsuJLqkEgzczwkm5DJzm1uYCpBMqj4",
  "key11": "5TSpUpLicFfWdW8cMCJ2wv2GvTTcXRoKSnv6TybaAGHz7wjg3j3bD8ZNhrqkdL6Jwua1HNnsvXEREW6e4Dm2ZEKp",
  "key12": "5nWFfPsUZpoNgrFXfGXnsUN71avA2mQs1V6Jyha4mGCAMkWikE4NUVfDgaAWgmsiesYCJ8wPrDAj8SfhWhrLsg2y",
  "key13": "5cx6cqJVCTYN8kfUQGYPN6wfxp7fjQyaMZYCX1BqcC9sDGcWrorXXy5aj8rSSeLR5wKddca6tDkBDsiSskKGurpL",
  "key14": "4ASe3Xd4PcuJwQoZoYdGnUx2n6ykAo6wChn2JiLppEVUdoueTXwmBozMEAWaW3iRBTgjzBTuy94WLMVtGmEX2Mai",
  "key15": "3P1z9uS1DXhKd74cLkoZunqEnm7DkHRLA7r9bGrAoDb46EX9yr2DDZDyAPZBBZZ1MgdCxTPc9nSXSc8mTqmpdxe9",
  "key16": "3yQPuNvDxSrVNWbnQ3iQk16qLBtNXSAdwzApzt3B6M2xE6dg8MjSobtRzBswT1y1fMLwvMSd1rJ3Aa5in1YGoCEX",
  "key17": "3sQ2rHxbpNKv48ubyBTEpeidF6dyq8KmzzDA4A6eQPRvSokeQPwdP7rXUgpdqcEgTdAL8MyevdEbugYCdbzV86BN",
  "key18": "2EqJaBFwK6aWnDdPY7njCaWsi2fy8HQ9BU3f5rpYTKjUNPRNf3ce5wxdr8RKwzfcrSYSXXFtBqqTcujgt1zRWFTE",
  "key19": "5VDYeFg5jQPC3Gw3dpCKz1VKyQAm9PvnJyxtCrRZ8fnDaCpMxaXyfb8teM9PaRsnQyu7mrcZLWa4MM1aNJmyLdBg",
  "key20": "1bXzuPVRr3grSHCxG2kRd37G5GVLdr9gNNPtja64F9S8RXZjhE5KBqSXPYw1oFxM7PFrh2BWP3XGwQcetxJdatn",
  "key21": "zDaRc2A1WUZkJexpwWGhv4anBaDH6iCALe14Dm3U5C5oJ9Zc6vLTdnEyCUL65LHoHW4SbqQkc4WZiQVj6nE4xGL",
  "key22": "4qaUyRxuQBQVQuoLYyrxeppS7vdocULvgVywsH8gm7JDoJSjiWpue2cYpDPSz7nYU3TMdfJ4Q2FU6mAH64UuNXs5",
  "key23": "3MsAuZyQJYTPaPGBbSqZXCQ8SbeoLMxSypPEW4pfqRgjxUt8NaGfBovEr8mj6ua3hdy69srJyugJnvooWfqHVYZs",
  "key24": "fyXRkdrkneQuHtB41evb6i2fWjwHEAV7dLVxVqW8tDBBhpmbTbjpuL4kSkNJvGhZQKupifY6CB6Hk4zndgVaNqq",
  "key25": "3HGXeQLWfaG9rANkYWuD7U95hWuv4AWNdoiFHXxjBN4yDKRsQ7oqKmBd9ZVZ97Ym1WDLAFCFvHLBsFjpbVA2HGrT",
  "key26": "XG4T6wBzg1pJRcdX62CHA7wnJCQhdmoqdPdgyDqYMAZGn5iVJgnjFfe7ZAaudg6jHBJS2Rhv6UgeYZYZCouJMVm",
  "key27": "4D7Lm6NqP4Fsoc83RweQgzEbbUsXaATHFwznmjx4cTupSe5u4o5F4NN1f8NwSqg8thCsZytGEQe4e3AN7feaL6kv",
  "key28": "3xGCjqupsTEyw1ByxJiCkQ4tNbjnZ1yJcF5txBuXZ5J9CMKXiTHcbsWv2vkhLbZYdVXzoCSALW8UyE9fzynzuPDM",
  "key29": "51RT2GYeyyRXx3eFLyuYtBjLcTmgtyy4p6LTHJD8hgQ2Tv9kbtAnZ17BwMcj5Vv3cLur6FZRkXez61qyLTUT5z4k",
  "key30": "3wTubxGhQiqBNfpwi5eFXadoFiKGLe5DZXDcK2DMrDms4t3eLqUVDFJMtF4vdKX7MU4hAj7BTmr7M1SmFPYvndos",
  "key31": "4FMAuHkB4aV9NAtHXD4ZQcodbH2keFZoquYpNZ9a7D9v8rqNDXxLHu8yXPYqJszDPR7VWRxYKMjTdDjzhZSNLxTN",
  "key32": "4LvvKS9ATtzQFaxvWBgC2UbFcN5xhimmh6dLhVz59ojuznwzePtQVwRxRJJ8PGCy51mp6n6D5DnhHt8ze84JKdS5",
  "key33": "2ux2UB5x21yWQfznPYJL8QFsn3f9f6DeJWQHxZjWXpw785pv9UdWLLMGtsiSWn6RCV9pPRMPs3UTyDr9As1LjR3d",
  "key34": "5iYpicUPipT6mpguooB8Yioj51kBThAftBz6SLAXL6J4MvDwgKopDv15KiEMghjH4XDF92jH8hsqh4k4nsw14a4D",
  "key35": "3Me8xHbFRxjdxn7akbUMh5fBiDg7TT617hL1uP26dCD16MXUjvHN9KHFSh4J6YgDTVVP8vFgHEd6NU388D4wZSnX",
  "key36": "P1CsHHQ3wixe8va9dFLRug416S4mnLKwwiSQzBEcEbAxfyKeEid7CuhGSgqPd7V5FEHAtS2HdtyskpjWxDtP9Be",
  "key37": "A4xsbWMfMMkB4dWZhvr7XmpKgmXZUAxPmebe9Nh5sfVfYwEijew7j9RkXaXtKBov36GgpWiAKFnPkg3huX5qoWp",
  "key38": "5uobFMkXXr3dPfncVuoXkU7A6SbfAJ2WpjMNF3xKEc3F9iAPaG7KuzCh1ecmo91qX8EPuue2oBGMhETwTc6QsXsw",
  "key39": "2qK1ucQ1ncvJytobd5Fb3JNkr4rX7STQSGhwcjBRNjA4Pw9yXaspLMsSzJMsBB349LjNzawS9w8sXDeYPF71xvqx",
  "key40": "2gQGWu5RSnuC3xjSMJd238LSFyy5CevfzwfcDkz4zGaAwxZ3jNBjZmvL3P6y7nrGmEeEJ5dp83jGGWxQSTQ6bLuX",
  "key41": "55Tg3cmLLfcgZb7WqCr2E3YrwQv5usM2FYbSc4GigoZSXbvbergF8E57X9mzWuTZ3YfF9QtGD8wbgiMUEsX2NxVt",
  "key42": "2AVENBXjt6yytBEjRP4bvTCAeVxk7AYhqYH3GRsVuFJiPirgWt84xtdNAYHimYhgogBYXHBAWHf4Kg9JUu7MrDpo",
  "key43": "5qWchvcFHyWUdZ2W9cAfY1cQEtSLrkQhJTJBu1YFn3NLpcPKasWE7yAz8D5dELX7xENbKAxmFDyio7T3n7pKoMBf",
  "key44": "28aZw2Bbys6t844Ftqy2BNgfHBpkALwBNFZcTM1tW7nBgxRLSQ1MA98KjyYttF5yWP1jkqS8Y58aoc8GSAg6YyRi",
  "key45": "ipguR83ekQTNkusDMJJMisyDE7sHPhNsWtfhUb65cjMkj2n1qsnixhWTjsGadSdSG4D4myMmPFVRPDCqKoYAo4u",
  "key46": "3ZZiegnYCR2AYimC8WFpL69ZSjxWWsczNAaNXdMqhMM6oD3ePUMEaAWBCTcM4zhmcS5ypqc6ps2m6H8nwPoyMAqx",
  "key47": "cWeQeV8B8ycgKX8qPeCVq8D7iYFU2FKm7gBUhpY7XRnEzA4pTGLw8bHXtWy8zgdiqLCqHMWFZBcfA91qXFhx1hc"
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
