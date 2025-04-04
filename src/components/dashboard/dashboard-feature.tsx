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
    "BpX4DK2C7HNpdfzMjvF2PYL2raLRqojLG7evJZD8Pn5n9CwgpbeTQ8TRKDiimoh67f87WmBz3Yg5dbfAVYvP94C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTXtuec3ifZbt1f4bHyBvTsqoaWa7MNfEjYJP2u1GYyMn1qmLWYNBoikEvU9UaMaDAtXBhY7X1yu9sZZPTXHEdv",
  "key1": "GHEDzYq3iKvc4u3pfeSH5gczt1ujcsSJ4cMN5KNbq5zjyH6DQPrMupqCdtBn6fusyjDhUMSRDTd4pSDEbbnTnbX",
  "key2": "5NDD2VJtkfopP4LCsciu62RZZe8vce3RQ1KnJLGGUSzYa7adUQBPQS47AbCmxhnXyREBbjSwLgEgtQgSWYvp9WZY",
  "key3": "59HXUv7wwZnHPYYNSXEf3ouU9xVpdi7mhsCWAJbRV1gmvnh6YKobR1pvUwCGZkz2L95RQg3YgswNmkLXbu5WFWCq",
  "key4": "24rQuciqrpeYdCzeKKnNFwy18t7YRwkpKgRXBn2Qf3v2g2BPARupBUpmcNtr1GrNL6vesHcMv5T2tPRCgE8XdyTD",
  "key5": "5E9e7VfYHh6hpzGTMem9BG5PgN7CGJHJdPfifyWHd2BLUqr5oC4uVh7t1LzyfvvFZmwXtAqajGUa2dQmsBiC86eA",
  "key6": "TqMhfdbwuiQ7RY2KrmQpBvTcZCUem4ayJoS1inKF83qSReXwR2tPMuo8BrjabR9aTGsYRQUUBZubLkXwRNmbwWr",
  "key7": "2rnnANrrAApU6VmQ1CdHRdWk8YxAzm3vV75i7jFVVqtLU6jWRkN1fRkV9FDk9AGyhBeYDMqjCS1abCDG6Latxyct",
  "key8": "5WCSXvjJosWwsddnaSsWAFE43gnM1ocxoVcovxHnh8tac16jB4jeFVBCqeDAyqC7W3iK5JXGnAvjkDLaBbyajPhR",
  "key9": "4e1mCTvi1nxiKZH3bFv5YP9doFcpqjWu8C6DLQ9a1sfaKH32GvN11TLdS9Cf2owyAh1XwyAgvEZj4h1eyVj7ypGz",
  "key10": "4qfoduLiS4ieU7bjrH6uT9wEv1xrGMxwi1WAFE7xF7UQtLHbNShv9hBKHSbPnLSgejz2TkxmPEBYXUN6CyeuKyJQ",
  "key11": "ZyAyU1WjXUwKTKYxY534pPd4iHYyh2zvmQokmEqkmmWLZbTeS51BSBAYFWHaw3VpvDYhYJsccCtpCRNrms2WhN9",
  "key12": "5bfnEdbRzq8KCrz1w2p5bFsKr9AURJSSmszqtDyMnA8z6Ed58FGLtAwWdUmXd3wZUt5AzjiJvukP4MRSbYmsRjeu",
  "key13": "3VWmmki6km1hVEPuc8uSMRFyXGnQMeP3as8L6v5PRMioTbi9RM6Jrcd5brtKWkX1DaWN56YSy3kPyEPRT98d22VB",
  "key14": "3fXSWxZK6v1zS4Rz92GoUrJ46G3CVs4qVJrGkquwNoajZWdtagLZT4QEG2g3jYkfUFfAQtHPqqKLpHHfAtYuGt5G",
  "key15": "24YFuhJTADio4D1ZEfr3XactUQnPdHv74h9SwghKMc9CRdR3CH2Y2KWhC3CUPS8ZRn8CiSVnpdJ8AF39uZrdqAAh",
  "key16": "2WzUf8NdoKt3MCLQNbYyiAWrQyB9AF1jZTYry13dBAxozaUerxcuc6UaktzRkZC1PnFph1dAVLT4f2TGmHNnNBLj",
  "key17": "621WyNprCqpeQHyjwBEZkojYPP5v2CLTsF2c3xz2pcAWK8h6iiZDHcvH6qHWL2uvz8XQsqXua7BsJGDCU8xdWDXM",
  "key18": "uJbPRTHwScKgUFc9qLArQeqV6qfQD7sXTjjLiExenEFv7pwK2FsDYcCmYJcT7KWeyTzysgjeLkzZVT5XTUUEcPC",
  "key19": "4kb6mUwPB8sVj77p7YRtdYdLZVRfuKUDYcChULW9F7TpPZi6e5gRuEgasJSwstdAjdwvMYLKfzpJc96cC5GsLd7z",
  "key20": "7TFvPDE3EAEejx34CkkQHFAVWaPccrcsq5mSf1rLmhKWN3DbPTnsLL4wD88bC1bFajrpS4mb9ngFt4yzE8RFRTK",
  "key21": "4xpe8nXvYehJaWiGVnNXvzXZqotpM89qNxuHq3iSPn4cuFDcWmtLmLJsVbS6dJjfEJd7N8gCu85u5aHj19jdPRf3",
  "key22": "2F3xaHNJXMopmpoDDyJBgdG7TjtJVh8Kop3iGAGUNRSzjxPXo4Xs6DEZHZchygK7uBfyrcZnaF4abJdbpqea2eHh",
  "key23": "3NndE8JXBWHD2S9ZwmZg66JnW4R37Qio2qw3r2irotUNYo76zAnMbXRfSjrQRvho7L5ysRNtsrEsULo1UJgbkHWC",
  "key24": "5Gg7XQYT39C1F3JxZ1sPoDCfLTEimug6thBbajwbB8711tsk2kg81ZwLFYYB6LNL4YdGsVELQnxp4cxYQwnrGMS5",
  "key25": "2tHpgXPXbT4puo3bxxubwCsQeVR6RfZrpExyJ6Nfaps1pU8uTboNQqVqSFH8jmyvafPCAg2tnZoT1ZqPajjAD1Zw",
  "key26": "2a8NszPrXdejeEWMuoThNVUZR3ytvRHHbW7wFr61TAL6Bfaew896dd7JMqd5qSeaTWdUqdKJ98vsbsC6XXt4pXmw",
  "key27": "4daS13GNsbLJ1bBokfRQBoJ4FY4XJNcqFYxytcJhnd46jCqjjfQoTQAGuN1mY7nkfNnVkmxo4fWPG2MrnpA615qT",
  "key28": "58ZoeN9hFj2oPYXKmyJ7Hx6FkXxR1s8Lt7aRJ2ePdpHFzyoXv9USmRhmXUSfC1aRr5P7PoNsrhQ2JC5vkPeWqD87",
  "key29": "YkhfNS93Q7XGy94Wp8Vce2JSqW8ypn4gDjiDcLyab4vhFDtBftoTFEMbDRgb2RxdUnqcB5Xw1rgF4yBEhR29N7M",
  "key30": "3RrgfTW5x6k1p3553UHm3XwmbZ5vgtX3eZVhnMsHtiFSgwTWd1hZdoaFndtn3uVmZEYdtrRXqfJSnRioDYLfWz4D",
  "key31": "5uCbVXpwtTAiScvTuvdvhgk8sMUfMTf6bvJcU52SMCNb2tkr87564QeudDN8jasdUm5U5vieiRRdACcFm7JzGgAS",
  "key32": "2p5ScvQsVRDFoiL6PjdVJrSTuxMB3c8rM6rcS4dzBenSZi6dmLes7VrwAo5kCKJ85UhBjvA63hadENNAfo9RbcjY",
  "key33": "3FCVRwJ5291yAzAc82hvVftY9jxiZgrxJLRqiCnK9ymumQtuzGQeKGkAEr5zPUtqJkcmxtCqK5Ud6CcdRuYBz62Q",
  "key34": "4osvoq6SG9hdC2qaw8goYEEa6otufiXPMCvnqp5fPwHTjGJTFvsPSkjbx77Xe8QpKwa4TtzuoJioQEwbP5LQgDKZ",
  "key35": "4N3eifTaTtrmMAyrCg1bobCcAAQGbALpYedgouoCjJjEvgyxyQWa8xUGtp46bq6TGYok5NaXRwtqyjEmopifvZvE",
  "key36": "Z5f71wEpJZCC6eTPk6jed3JoBD5Ptk4un4xSmChRWRLoJVNB8oisVXyUZtroLPxhViC7LJ9qYK4wHaAjX2wuiWB",
  "key37": "2aRQaxg6NCLmpbo1xfUCqWKQSz3jMF2DU1n2bHz8sEJ7tJMvJALtzCAuEDpd29at4JT7yentLUqhfMnRASvyfFyF",
  "key38": "4P37r4QTuQWHJJrwraMmkgoqcuU6JVFCzaDES572p8oubastykjhkMxDVmHH8ages8YUBEH9J3ZDSWVX4gNYtE75",
  "key39": "2RzrNdzrLntWmcRmzD5ZNh22pb1V2sVAxrfPq7REWcYvaGvQsqVguG8xYBrqgMaVQVxSojbf9kT4cJJ9A2ezRiW",
  "key40": "UsFrxfodgrphFXRmbvrdu2XUJ3qkCkZApEdkPzdL9MUqK9Ukn4kER1xvFPfqFrZwgoEmvRLxC9pnKFMQUYwCH9z",
  "key41": "pDbAyiuPpxh8xQAAMPeDzEmTL4k4t7Pc3cCPfqdKu7PDCVUmG4iGZ9mp9NQ9u2mdDdqPCypFWJtoqqmN2abeDPT"
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
