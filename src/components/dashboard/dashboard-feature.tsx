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
    "4Hr8ozkZkkStQdFXkKQqoZzg2mTJLwA7DDwDLt47m6a8eW6TEocQtk1za6tTn1mEjv5PuJDyAEbCUEGAkVLsJSU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJWqHauaC3dyGSmv86xhiAC7pBvvcPctjEoqRoqeBxyrv1vSxhrmnXFs2J7mgJqUjiGXQK7y6HJKP1d4uUEKEni",
  "key1": "5LmeW2TNUYJrbpFdVQrKUA4Hqe2EyxhKJvVrE6vGEgV75GxaDgZSZCAucQdNQfDuN31uBhZPv1j5zmLJ2dhTbA3K",
  "key2": "3nKcwi54THp4xksyxx56mhgMXx2hHnv9eJNcXegiFeqyqwWeJkznFpNeEXxF8ALJX6w8M7KMkc9wwpVioMc87T7K",
  "key3": "43cSZJ9f2TYZN4BVvF9nvoz1DJDd2g6kCyw5jQfdo3iG1TQEKQoQ7hhrw2yHtndUzHPAHSzQJyaHr3W5sBv1oWSg",
  "key4": "4h4QCFsZiCANzoBbWyFdVh6aRQdQFN6as6S8wBBHdWeVqXzRAis91aB6HEp1NmqRsZHqNmY7U8YzmvTBdAU6YPKz",
  "key5": "geYxE5DFEyZmkyPyEnwH21jMiXzKeNYJrxV9r2DZypy6h3cfV7HbuaBES7LcejmnJQ4dWqLT3xurr25LgN3bs3P",
  "key6": "278sSAGXH9GichDvS1ZHUdNFinRV2S5bNxNs5Ph1b1c6vaVqP3g6mb99W9k9ipq1qrxGmArgLZokK8GnrEn8uhfd",
  "key7": "491cVTva6AFB5rZvQ6wZtgKmeUJNJb2t1GvUdTz4QjW8Vu1an8DhknK2D1bdzGWJVk6eGvXsT6vRr1ERfZ453kMu",
  "key8": "4MAvAbcJ73G8ZDJqnFVpsjyYhoz1JHHtWPXPQ8jhnbroGEbhe3BLTEwiTmUdcALJPPYs5VrYNJQ3dQkAgZfkMUfY",
  "key9": "47KGQaXRxHgMD1Nee4irYvUcAsATkN1aUM9pv9ukx7EbFwPD51aA2uDXMZpYvc1ai42rUnZ4s4kGwSCers5GAaCM",
  "key10": "qvHhUjm73eBvwpa8TBfShHAGSQXAkzZCkLp9eApZ218BNDSqsrVhpwaEPSR43RiqnWQQAiNwVnkvMTYWNMuVvT2",
  "key11": "e7RMgnqW6e3ZvTLEajVJEEw9ktfKM2fvTtg2WzLUcwnMHBmDQg1Fod7hXyHGj4LmhpL3Q3QUVR6mcHVJcducCqj",
  "key12": "QTqJj5BGzHBgzXHXbyHDz8rjNQ3M2VwNq1dZYhQ5SMRVxDpvynUsxtQPWQ6Gj58FKYD6FvYZk6WRHZ8Q3tufzo6",
  "key13": "2KUoVr4nmgWh8NRcQwXvEiSiv9MaBcJt6pvaAfAegW2JCTJjKQdLS754XrhBWpKsBStbjTHxY8S6mqwPGR4XGMS7",
  "key14": "5Q6nzSSwexoV99ggs3vZXboDkPFqP1cmgaM4k6HZXvkmHN9cJAtmykxMSgcEbcQnFy9evpXMpuF2jtLUUWmWhybt",
  "key15": "3dsuG5mEXHo5CB8j51ZtqoHshWS4tAYpmGiLbdjMrj6Yu339Gr3hyrh83BBMaciBLEkKkeCXmKDmQx6U7X55iDMg",
  "key16": "3xYudsYdZpDeY465EnijyJsuzxde39hdLUhnPGuXEpSzbDyqgPWykUXf5VJcmCv6WLXzqJoxPZzKWBKpQahpmjXx",
  "key17": "2VZAwz4rnpMjmP1snuLWZd1BCmHRZnBtkAnimpYpKkZNWdhTxxojw5YoJgwjeotQ7JZNrAfRcfCBzaBTDZJXEzND",
  "key18": "5QhxWgrfL3i87kzWMNoczk6gbKkGyXbZuMd2JJHiHMuQgsPWVcKVkENjWDsrVfZ3nLmJvyNEpAs37yFY3yJgkAeL",
  "key19": "5bQ81xCMrcY2kuWQSKSNmmHU7WJdSktRHRhhs8Ptuvsz53zK9ntSnsGDgxKSRkY9mkCEZdMgP9VTAKcfZ3Km2Tci",
  "key20": "42ngqyEidHwhLuBoWdPfNmRQ3HfAgAGYgBdPdPNqE3eKjSDptCSF3hgdbRsC7rACX1uS4BCVDQcwKAdNVZdhWF5s",
  "key21": "5joqTU9H8QcaeCAUUtCVgdyMrMyBApvwx3vYgxJPCbNB2gsTeFFyCmpXAPhn1d5Nf82d6in53LpJGPTJRqhBwLxk",
  "key22": "2UiiHn7DmtSeuLN9cptCufLPWk9hxTZTsCsWopCDKtVwfKEDctp3GbsWkTXCpGp1FQCq6FXB5pg6tufTTWuRbHdf",
  "key23": "5JBfp2Jjm8Uxfyn79dN3YChFGcH8zxyjxeNqHW2Xp52dfYq9mQnhahFinb76iZhrK3Ue3DdLXaK3ndkoCjKdAw15",
  "key24": "2st9iu2Xwa4LB1TRYiR2QmyRBchRM9R9cqH6Yfca1RsSWTvFCsFAvoQyWMWdLJQfP4Rm6xnaVqt8wYoLjwdeU7ep",
  "key25": "5jUMtxf7WLvxhpWUddhcHK5UuNUAktKZQ63bJVBsJBj8My5qYqZFRaCKm3bfKMvy3ch4URAGCXjGJTmS1GBz4Pmp",
  "key26": "2A4BSEghFJTB77cSqHmx4PdMKhxWXXNDP1VEcoA7SGf91DYFgdpF1Ut7BH9SicFr8rZ9j7dtz3jeL7QxTbJWutcR",
  "key27": "2ruMs9mTdn9oiPrmJeHCYqXxG3z4RJ9UtV35a4yEnR5JvFYNPgHsNsstotR1zea6P1M2k4keDkPUqh4KA854mo9U",
  "key28": "2ayaiFJ83hNPWT1xK7kyj4xHJ3nuJzjHmiET9iwc6giJBHQZfgWW3bmQaS6Qq6Zj1PYV35B9uXUfWqjTAm6kqYrK",
  "key29": "3oATM32uDqLzUSsrxhcH3V24qsatGvstk5byKqsKAEXPSrf82Te8J17CrTtiFj35Pdj8nPUVq8r7ZGwEZPShWV26",
  "key30": "2tY4cMuhV3dbEisUjiiNXR2Y2U6xYa8dTFnb9FMhZfwFbrXKq4MCpSjbGCVSYffWygtpBWNAxi7uopVUtPoEHDqk",
  "key31": "3tZpuBnbt8tLrq2XwVbz5Shb4Q8eCiArbrPFMMVhjbrAVY7yHeGkY6gdw7widVqhAEQNZrmRojVs6huLoDdKW1BJ",
  "key32": "2LhM1ZrQSWaQMFzPiUVMbXsrKRS2wwPxKur6WzkHxzE4tWRkoSvP9mCJ5gqBeYoQ2kdrcMFiVmboWoDAKVXxbL6w",
  "key33": "2KUdyU6PLjx7S3NWKiigCqCDMB2cuLd9H6azBhgJ1K5L9sgqF5Ut29KrU9F8cyLLoaJovJxWBv6g4fmuLQ8a7vLJ",
  "key34": "3yEZzU6VhoMfM8P5va7gr7rEAXqTSJQkxSa2p4zcz9nZsrep5XPe9g85C6qadgmKTZrT5s2Eqp8DDwo42uRdMt47",
  "key35": "2QiFqe9NP8bk37T7Z4MDjj3YBA1ahpV5RFS1sJqSJ7487x6EoCAfgBmiokQr72s2yohEYvYr6GFwtZeMEVSKFR3X",
  "key36": "64M1oPokhmCVTcF9v7jXig5wsczVwoorjuCJcGcYEMrjuE7p2DfwZq8gU9bffz7oDxeHYnasUUFtnw3gnZZiUmp9",
  "key37": "3n8ZaiXsgopAfBkMKAmURZHjQCSMnuBppnkGJCrj2UEciKfZ9EZ8txqdYCgXuUq5EAZZopuraLVzuP8sSuNGW729",
  "key38": "4wP6vCqNnqMxYQExtiX1v21xbKfVsGGRXhtb96VeSt6YXaoELSC9k1D61MVUrVLDi7kxcG93v2SWU3Wtu6zVUa4",
  "key39": "gLfitKgY45ez2UyYn5cHjKZm3sX2NAXjv7xX1dxE7Fbo7PwpZN8yoztYEEu6ZeGoQF9reHVWywRJ3vedyinqKgx",
  "key40": "5Kdm62xpY2Bqysnq8bafDR6nv4rYGYzPSteVVnCJHdfhkZuSiaPFy344BRaxzeziVy4hhS5DoZjdTLp1Q8nQSFxz",
  "key41": "u7badneNh8MPdeXhst5MXYKiMavhyEcQVBNzpDbmZmWuHRDkK8FpWCKJqjBwqb3eBFCGCbyTRy9T3ZRkzLTSUmK",
  "key42": "4uRDCfPfRE83ACMiVRh7VaPqckc4BnJA5ECyBY3ABpZWN8w2Kv9KFvZ3wPTSM6dZqYeNoGokhaJfZbauCuzCfbf9",
  "key43": "4U3jaheh1SySz9ggoqKpShZC73SFxvHaF8ZgHCttvxYXv58vYrGb5Hf3ZQk34y9SGk66wtAHERFMf5S2z3WtYphp",
  "key44": "Zhz18SEJXzUE2QgFhCNZrx8jqAnFgUMu38Mr31MSpsc649tfhpPE9kbCXgYkDEZxyLbe2fsER3draUuRahucfcH",
  "key45": "5BXd3jgbR9VQGf61dGjt19o5AFFFHrbzhHY98gxoE96ymp2sVAUvdAuDtvoq8nSa2xVMFGaz3U8QTCX6wePsAsLC"
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
