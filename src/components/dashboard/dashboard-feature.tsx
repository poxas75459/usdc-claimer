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
    "44cSMVU1dSjRgBgwKbymNxAg8KrwABecnrAphdbthmAATYPXmXU6ED5zxme2Y2BiRBneSidc4N9qzUEsU8746hfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWooTBboYe9KBRP27KbiXhP51bT3R9PGERrJHM7JjyqHEyXwbHcwRdtrnoHXAKHRWEQWRcJQ8Gm7A8HsPicpPgu",
  "key1": "cAtK3taN6JEBA7CTLqAWcy7snvoAdGHRdmeN3cWcMXRf2fMSbTbsFm1SNJY9TPECqnBzYUtpq7MwcoukHjM5Myw",
  "key2": "44nnb1aL7Fpqc9RY2zsjXEYwqyjeBM1uK5SUwaJryci3W87bfoF1Ba5fqeH9xhM4ck5JCKudQtVp3k2fmhfz1VwF",
  "key3": "5TNnYoBawtE1f5UWEHVPHHv7H8wZ41Ykat9ZY56irBKox3bqJmLTGyFkbfCjToqhDHNpf8qCAqJVgCS3uAiXEh6W",
  "key4": "4HBCJDu5BJdAkPTSVwzdi4GfZkmu4gcT76LiDhFh7Ahc2CEwQpMpWJSw1znkZ4S783HFYTLgu9UKEJH8q9LEje1H",
  "key5": "5d4euYURdAwcS6tMASU48BoRWas1irb8gq7rpR7ZLXVajKCNSFzVt5998xrTGFYebncQtE4VEoFaySH2NdSxAWfP",
  "key6": "5o6EcKWrhYMFQZPQYYVTX5xA35CFRUybVm4dmyJm71mBPJixgQwn8wBHjyggTVsXjqo1nzAfg7LdYc7LBn2deGcd",
  "key7": "2AnbiRGUGmVkZHookLFnGbdzvisAY8QyhoE9cdEYBcb2mZBpJaVkmiFHHxLQfN97NKAXin5XCPa6GHVpd3cmxbth",
  "key8": "36Lu2C3XDxjaQNJcaX4sRTdxuCGhYZS4KYVfdW9p3gQ7kxYZgvVtQncFcx1uscvyP888fKhrRgJoFp6tPK6yTfDb",
  "key9": "2kDDy4SrZh86hk8HDjnPoWrYgMXp3pRJiw8n1sNgRA6Y3qgnWiMyoCLGg6WSBhRwzEoWesTuKVk4gMbQkeLaWbnb",
  "key10": "Cp3cgNz2FHSUdaQ87VWJJfR5tQLkKSME2yGq4VE2qwwtDxdUr4BJy4wu2Xa8a4t8wxgAWe8zMUMqh5YRyGnB8gG",
  "key11": "2iJcPNT6xTgt5rULY6w7Ct73MD7Qxh61E4wnCW8j5xU1TrdqrzUS53rvzEtugCuYGE1rEbhyjLa2iJc7RPFrYMsz",
  "key12": "2CGXb4ewHw3Mt28SzTxoj7D9533D21XyoriJzot6wCPgazC13ZwRm9p6TmWYJcDNEwUeRGzj4yPxSEcBQm1VKTyh",
  "key13": "5dhVtBkZmjRpWiq2jJ2JMduzTa7Xs9NEJ4K1f2EYYQYjdomok1WT6hQp2Cb359tF32FHAAHC9Xh4if9wkVjBanGx",
  "key14": "2A2MNdhBh2d75mEGzz6iX3TfihtycJLwcPxXpXXcoN9bvJMw4My63oDtvADs8FtBc7a8fB6s3bs4vGcKPqaDF5P6",
  "key15": "5g5MvUSxcddSqdJ2eVNXancYudsJB1H1TuuEjEoCcXrNkXNTkooJjDy2rsfWnieFjyaRYevoL56MSdRaLmrJPnih",
  "key16": "27DPDUD1vmZXsgCe9aBDSJmxnyimMbL77qekzzG2YEYM5vwDzaFsDYf3HM9szXk6i14Zy5CHhBinreVE7nwvwqd2",
  "key17": "5rD6Tw27vNKER8mXWTG5j8rNCM6yarJjeJ7cjTkmjhjRzHH7MLFHFmM5sGtjAGFsTZyRwz1jZFwbjgycvek35jhm",
  "key18": "2JJc6ZNUWExyJRieBnqoLz8brDWvib2Va8EWDJSH7LeALSEifbGK3jUp9nNEru5u39HaKQjWGJ5Xu2U2yqE8ABEf",
  "key19": "5EsL5om1xU6or7cE4JwSMZ5gAsb1SmyyeKTEQnSwHUePZqnt3QhyoAxvr2myLzaBFwL3eeQAXpBsMeKAVnoHZ8Bk",
  "key20": "3GJWQyu5ayb4aoWn3KetYQRf1sv9v75NRwfdcGTLNEBKAg3GVqty5HVshPF8jQkSaUej3rCEcc7p2uK6gU5PsnFM",
  "key21": "5p9euWrXmc8YtXzjXtfL3bUDwWfkb7eQN8tHUVaFufmK3RNE26g5jwQBEJ2BPZA1BRPNVb6Qd2JLv1AA2doVcERo",
  "key22": "3ZK49tQpyFMBgghTQ8GTSEwXcK8xhvcy7HRDcjFdj3BUEvdhK8z8ZFZbtzS8B6kdD4chGJ3da1e4fjLWdTBzRcTv",
  "key23": "618daT6qmeC7mZDfcVUUzF334pymVuBsxjxqhmbj1xuc4dhYA4brk9MmCREqHZ5R8fTVkto982w5SbCyxSNMTP5W",
  "key24": "5Gbqff8tzcqaVy6hjaeU34aAcVcwm79NdENbHAKQJxdqeJnN3WeRh1KsXBwgTEmsKMtoMM4XpexLFU3Krv2xH8CB",
  "key25": "5DN7ATV1T5ky17EYPba1gDvVDRdH6dG5HQbTWq4kvmqDAopdMSHbyQAiQ5XprfdXhUBruwtmt9WTzMDWC18sFcfB",
  "key26": "3eTEcHQ8mdn6g3U59LVo5yVvfmDAww1tJKpDkbn24n2viaWumCQFNU5pajUnZ8rx5TCCa6d7sWtZ1aRSzVqyS9rt",
  "key27": "2ePrAY7DFGdPnBJBBCMJGaPYebFdabQ1415gKQdnw51Q9BmFaJPGmZonKjUxBwQsQsSxBeprcRPy33Ccr7QvAUnE",
  "key28": "5Qos36hcUgSZLLsXvQQ23eKwYuWPXjM9uuJyHKDLrcNXmhSJUynFt8YLFcqKHLkSfbwUzryrt2hkL6iWsTaum2zu",
  "key29": "4ByUfPAxLkoy8MHZ5rdQ1g49acukiekc7fLPKQHnYM4BA2RG9FWgn5J9jEBHdQckXK4v2JHW82EysjWJjmGDF3K5",
  "key30": "3NwxXsn6L6nnGV3oKpWqRLnq4xZUApPyBKaVguq8xJgxKYzN1kGJ5TZeaerpGZg9Bz6aXPUAzkPxafhh6HMKsZvK",
  "key31": "2CbFjs4KiXQ3gBEA5CGuXuEdumMDDkcfagpL68stbRRa7ruHZW7vYXEkXGQmn8SxHfy5ssoMbUweWDotinNyQker",
  "key32": "hL4Cq4WbmL3gk4T3EEH77BJnsdLHfB6FeRXzZWZy39Wm1E9hKzwshYJFjN29pgtgsfbKaJsxQgTuqBqTrFjjrDe",
  "key33": "5qPRD2RvQ24Exgqguvyat5Rjdapg1UWkxD66rvGvsmiG9q6GBWfVJCVdhGSU9pMmak1CjFW3ecch6ikFYqToAiQw",
  "key34": "5eHktiiKA5KNjvpzAYqKgpreCqLMj93tUaRTBwd3x8isEbdLWDMGLV8CRRGph5wn8dKUw7xt7Kj5HGLnAYWj4d2o",
  "key35": "4hZaDQRhopoRKPEZS2UvuwP5L8dDF9XomX4onrEhrtnwjbKoyn5KNbAXdvTqYWHamYzCQjsiAVi2scZ39uMV8sXx",
  "key36": "4qPUBvLCy77RiJ9N4zBA59z6Ka8NyWfm589qvSsN1Y9ke1vw8zcRqxGJMdy4g5WsYE3Z9kRgGyNDXspk8iQ9Zm5R",
  "key37": "9vcjHTEH5gmkk2q9pz6gruGMFkm3GPShYTVdx8Y1Yko1KCTmjWVntmcMA5eXYDMNAfPDQEoQtD7JK4EU9K5hLTG",
  "key38": "4tYpdz4aPmoj1AwxqSq2TaVhiXDXSbVYVLjyd1CWnJRGWVJHKU5jzTLBwCJu9EZiqCmr7yNQaRy62fbqqLUA6sRG",
  "key39": "2B8RVVR5r6cvUNyf7VqrZvNdVboPYYAc2GPWNcQ26xEbQFqRBgrnprLMoXAm9GfWZesTkze2eWu3j2aCxmp6AQZu",
  "key40": "48MakUg8eHxZstUqeXYCofq6BpR4hxhUZZiADtZnXe3VAUxAuAL3mFwgEA84SxQrpKzUbiiyCAXhZqzANHRKh8Hx",
  "key41": "3LYwb6cukkVCUc9V1H84kYJSX8Vep6mZPuEPzBFjkR8dh69imKhVJgUnpuQbfqtpK6WxRTt4kUN4FQ6DzioibevE",
  "key42": "3RKxB2LrVCdZERfRnySqC23oXhqV8njo2Fvf1EaY1XUHVNZVJmajiX9b5kyXJoH3MbdakJG5VgcVSm3sWHT5eRBW"
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
