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
    "5Rs5JwR8k3BwnHk64ZPmFMiqAUvnuDP5jMcG8fKcRRafAdFrric4kWSjjg9sLozUaAVPaZXMvCbusVNDeUijQYva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rP16uFgRx3ChLSz953kAw9tSpCao8yMzY898nDHz6CPThSLxoeDf7eFSspniHa8DSAsgoT6ubLWwWEWNKrwkLSR",
  "key1": "Vo2UuV4uDgajoZxweQQg1idvdfHb6MkCGbPmh3HUWtPvXSS4P4rtUS17fhSSf25bif6PHPcnh5cXCL1mSEs1QWA",
  "key2": "66xYJksXnnUuZBQTZRGjtExHZApuk8Lo8sbtEpKdnMfUC39pdt2JDibcUzioizVjy81Q6r3smYMhC9pLzvUQuhfk",
  "key3": "5MNi9EwRf2XSxU9Nsp3U7ByHZAYdYcrUR9h3WLDTNXxgR5jk2dNrT6cYb9XAc6hMYosJP91b4Gg1Lvwyq9xDRYHz",
  "key4": "5hvRXtBDcG5uHFe6JJhMRrACg1HwzopukBiHmSXiMjZRTWux3YhzhB1D8efk3JRusgcWNZdygrUACqSFBud93WFM",
  "key5": "33dwGavo89zT8X6b523LZC9j3KfbHjpJX5HkE5oboGNiugmngYAG1B48ugc4nJAspc52suWz4cDASb4iKSyDvBWJ",
  "key6": "5BoZiEBGv6hS3Ejqp89U29W9dKHHvDL8QzWkEUyXEr6J5bv993uFi5SrDzaH1gTvy3yrPECgcTfGXsNNRrATwRZe",
  "key7": "2TuTvMjcLcQKCeojwY35j759bsvb7SPtSqYznxds9BFqPUt2rT5eziiBgwzBn3y45qiAmdp3z6vCd7gsoTX5nsDg",
  "key8": "5BFEu1PGgMwQwRMNkKaHj3qmR56RtW93kCiX5UA3Zbn81RkzsaDWUxLcTBvcGmRA1tBVCVoAPcVQcVaNLusaC7Ym",
  "key9": "ynv3Mh7ViZxpV47DtojK9uyd5SXd7T4o1mK4HQqJrnquhpEBb6GCgLBKDmo6jMpdC3jBCtsqHTdK243UGcCxSzW",
  "key10": "4GBhZbhBhdkyKX7YjxCBeuZgNF4LjHZe1WShDspYySV17XhEMaXnRgiDFD4BLsRN2aSfosE3RcCLmZAdXEJXVEwf",
  "key11": "ewupMEFg2SCJjv8VMGYHbZUpLbEt9z62hoD1pR9sAr8FVrbGwEMtGSEGVL2cKatYgJ7jv8mwuqVef5NLrddn4Xi",
  "key12": "5J3tygGnBQxEMBggkZRscvebrZjz4gu4pwVQkqedpm7v4J8yYbY47SLQ8jL7Q46fuA25B62evYJddwxHigEHGD9K",
  "key13": "4Y4eHVFcYKmUJm3vAnhiroiYpcz9wLY7dyQuJZfwzm4WxSc2Ra1eFJaUudyCUC1QEutSJMB3n6fMjy6H2zfAejAa",
  "key14": "3oZaGukQu98nZw9ThEJ2hRkp9Av1t2pQa9BrNx3d7KS7AvxftJqJyu8sMxSnWrYqBfAsgzFpFgKpfaFemcps4rAn",
  "key15": "3zvnuVWHgkCCmicMtYGxaucJfi8FB9e4iaMBQi1sKm1zaDu3edTvURcXVZjcyC2DnLpvQ42dJYaHZ1enuZQbFQZx",
  "key16": "2HvZQmmXcHPjTEVziGTycRTBUDoBDigDCSc8mCYEjc4DVEHyGXDUJAKmimwdofB5zQGvukfFF9yqcwJVWE5H71gb",
  "key17": "3wwDHPsXenYzndGmBR5BAFndyhYLQVCDDCeHEkriBB6moU5AJgsrj5MLDNAAxRuruFD5kFTFbN3HPhar7qchyMi3",
  "key18": "5kjY9ZtnUcNvWzg51zYhs4Rd6YU1uNHzUZ1xYpoTLqfecaBrjwgtfCPDnoBn3KansTDtWm45i4H21FnuSiB44ZLw",
  "key19": "5gT3r79JUMgLYvVfvAgUy9ZmaD4Y3JFTuFwcqM7BGkKgraoQuqEwv4TV3Q7hVCVWvJcZsrAGuEbk2Zz9mzS32u3V",
  "key20": "4NEDwysBRxxEFWeKhtYYDj5HdAc4uxyjxnYDho3kMUPtzxEYFGkX2N5ahmBDNo4dwdzHS7ssZ2mDdsrGiSAGKgqu",
  "key21": "5jvp4FNZYQXHijgjVapJMFc4tJFgmcFtVDd4vpE4ynrMvYjjGFfh27YeWtnSPaq2SduQupVJ3xifuyj2hVQnFqXh",
  "key22": "4xm4oXXnuTer5tpyjNVAv3csrQvK3hF5ndgTPbyZAMCFdpNMW5D2aTXQ8VAgRRYNFwa3GqwMChoutNL2wquJGBdW",
  "key23": "4uYkhzYQWJ6FnzYZ3o6ZsRVgZumSr61MNQmXA2ssY1BrrZpqyb9KhRM6oAUEGuThEY3596tRa2QhyCCPNTYvvX2h",
  "key24": "3QcBBRBC1XjCWzVYTnrENTdW2iNhrCixm67jDunYd4jZYatYhMkxgKjfJxo6eMbd1aZnWM5kpmF3EsmZTzxVqUik",
  "key25": "4borQv8w3aEX9G5G3nnUyeur97C8tuhkDzwHcxjBTC3FR8emDoakq4WGjFbvxBwVT8GVpBkVG9vHJhirP2TfHstJ",
  "key26": "66CcUC64SR3hEpZc1xWg8EzJqtFm5XpHoMeAcPTZWkTe1iRDPUjuECaPVGfxGhMJL4qc9yPYDC9CrCbCryS94w3g",
  "key27": "5nhvuWFr9A2zZQK54G5XLeT4SNr1hRV5Ef2SJarSR8fgRPRoNdjyqUPcNAyC3FJzXmt1dEv72caDEepgx2BrALFx",
  "key28": "w5WhJFGxTNdD16GpdS1trDY7wTYL6eEKwDyqctxr7WavuGZ4kWayy7nohNE8hYEKJUTCrf9pWRt4vuCWUzqeDjm",
  "key29": "5k3eYEt7eFKDTK6EqWJxgEJZY7A4XWh2gXU1ERwLtuuMR4XcKfb7ojf5yHsusx7bYS6vvAkg7C5c4xBMdqstb6D6",
  "key30": "636NcRuTJTTNHDuoe9ZAbFUxnrmuQHxg5JsVBRXT8PwbVGicGMh5hYdKXS4HQWR3izj7xMyBeXxhD8bdeoHiHvpb",
  "key31": "52fDRKpmb5RwZnJGKDxNKu6ncFiMDQzrVyedHSBKNduMmA5BFx5qyJ3bMf87ykXzebqN1uneBQy464QuwNiU6L8y",
  "key32": "5hTP6GFMq6TQpJ4ELw8jQm1tS2ejrkxBtoXgRj8y51ysnWPYYuc6uiY67bLWyotCvtTcyoUE8HrVzDE1eyAHt6P3",
  "key33": "4hVpaD3tSpQMUZ1HUvkqeaAdBQDsBjPfU44Skq7svhh3g9TcByAf99vBmP2YgERixnWvUgAWEhE8tuSGtgFe9aMd",
  "key34": "MEbxv3J9tuDix2JidbBLsN1kHqZMtKx6xZZ15FAe8ShwtJiJ1Khap1iLQef87FeVDfpPwJaHFiGz9QPzqD33kMf",
  "key35": "4jTAqzZd69pXwKLND997z5qpBQ9ZfdeiUEUrmVpG9Le3ExxyGAELQ2pEpGpUTYJ897Jiztc71nzTGQUBp8pgKE3f",
  "key36": "2y2tSSaYxqVJeBpxNtwuN3zoLj7PUVzgWM4jLbkDHfXo672b7XJF5L4MqZYMwkBEKJxyVndFHAeY19FUfw7xPVCy",
  "key37": "4wmfXNFXLTfEJbR9KTWsB8MVafyzxUCrkjQYerTAmWWt3bmXvmX73b7J9eZsV7anV8fK5qoJZembiCV8BXEAgur1",
  "key38": "622eEnakfU2a53mFaytLboxGMkCJLyGNkD6SqWxYbV7qNrXDBJRfDbM7nRdX9iLjAVxDdpNgDJnj7STBfJbX7Et4"
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
