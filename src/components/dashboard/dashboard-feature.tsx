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
    "3LneeuPFRpjsXQTjcULRavtgrBBe8ArV3ytRqnLgqHkTjZFazzMCSF4HeMe8HdKrGLQkst3QXiBXDmPi3yue7YxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwQP2XwRzCxvnRdC2aU2w3MQbdtK1JKqwaci7GbZdm7oiFXkdRtn89HYpCHZuwyBUrNVfynWhPpqUbSyynaEetu",
  "key1": "3CjbmoBsvifamQFXY37cbs5T2ZuPhHboYLzhuEX7inhu5x2ShChZngikenDhhcQgCJUzUq6dVhhgU5u7MCVCeYUw",
  "key2": "mjcVhhTitfFwhgvQU4RhEeeCumCJLpkf1YsbhGqiG5gFKmNxC1AVhGauG3heZTB1X42iHNYYDV2jVGVDwPi5Jpu",
  "key3": "4TF248FBjFzv6WPiZMYxEjyAA8NAZjW4hZX34DAm8FrAnsqsqNW3Yxt8WWHMvrCkSqpexzR4zvLYCo2KcqF8ngrE",
  "key4": "45EMs4qLmmivQvAxWhaE6K9rjvdJ88iHZytRbLHpdb6D7VWQwZ26GYxL4qZLqPJxMANC8QPjtfCLsKeMmrNQBMTc",
  "key5": "3rcPbe2QtqB4XHTfKfKuPDdmQMVSN2w1RfYKCCVPYJg8oU46pf5mmfXHHgCyBaNPMGNdiA6PpqMUGdfDRa3hh5Je",
  "key6": "4m3GbmVqZBXSQrmDzvR8iHcF9U8cyDLYaonkthH6zsnRxwqEdnHQbArJHZZEL4T9pHWF7h62tFef8J4GwZvq2FmS",
  "key7": "5ULjJL85sjYw2o18aGuWVzZLXHZmRRvKZnvsi8A3JwC3AHY7DT1Rc5oT8arHKTMmhU9rX4aYuvEBmhdKe2we9sH7",
  "key8": "3RhmVwbUuJFCbWVLS3q5xN4XDgzDPG1dKw8bm3fpFfyvTKMC3e8u5ibRQHrkTeRibTCXayRiTZoW1KgSTvURdZmV",
  "key9": "5L43bjXQ6jowA4sxbqVeVUMC7FfADHdZfwZznLnbur8Aom4kobSy8ETTok1be8fCLsoATVhqnHyTdgEHoFqVY8oF",
  "key10": "3ZB51mzAix8bJL6KPuzwSsbHNvetsLDBLDmZPjZC7A67xXhnA6eB2vgVmd4U2Xdn2Vi7pzpYPhdGNH4fxefgbSev",
  "key11": "3GQ7esxoeMcEYsAx881aLiV3V58WJjF3LZjxrxyS63pgbKYRG8bnz7tRGi8AR99D4RGkgwQb5TZE8jYAtezXWaCu",
  "key12": "4Vtk6oXpXtevG7n5RhsBaEANtHiCBvyM43WJNpeoKX2XJKiqczYXnDniSHmqTuzRSxtu3c3VzLUoQPJqCvZFvTQc",
  "key13": "3yzfLgJjjsPmj17Dos4rKnjBizeyhd2SyrLwQbNDivHcCafi2HXuNaJeHN9CA6TshU6ULNrwSYckWfsod4fXkHCg",
  "key14": "VUjtgxZbHCScKkxc3sjDf7fwSsEvXQkEnVTYDrtJAuQkTtonDAi3cYwoZpFbwaFRV7QriaxxYmhUEfR91UMZ5WD",
  "key15": "4JDTWtNDkZ5Q5KKKPpK5dDtt7FzNkpcHH2PgzwvreT2SS1JULD1Ce4QWZ4mBJKCiPh6EJPGgjc8Hu6cXxmcaZuyy",
  "key16": "2ckAB6mEgcFz8i1oG7kNrFAcGJNUioQVfUqoVXk3ResDDAJA7A2Riw33T4cPcB1mEYY3zGbZZW5jdD7D4s8RqqtC",
  "key17": "64MB6EpHRdycPX2auWKFA65PNstzinaNnUwNySyLj1YQsamAbx6qm8gnbEwgofHUjALSLixo2K9Zg2VZeJMne6b3",
  "key18": "qzSmqRQJDi82h6m3iBZYYkLSckLNkRXAdPJcekTxB9bJj7X9qffFMqLtSJEZajcmAzK9gPvKmuL1ZCh7QcCfxoa",
  "key19": "36bSTr8N5MgPcZfpfk3NnkksaPdDwFneGheXtnMSECcvs4wdLCJfLzF7MBggSEifmwaz3U5647mNXSnBA7wpA7Rn",
  "key20": "3ZRRB573XSmFZ4XRbEMsNXfhXpoSMw6gJ2JyzaVjxofiv3cKqgELWBBgnoxRXN4yoU1C9T6HrmbzMU84JB1PSHz",
  "key21": "4yAnmBHdDngPsiFavX4zKJPNY9YZG115zN4bQbvx38mm2XWxoRXg9hL1RhNoTBCy6rSWjjNRweb8vaZaqfvJWim6",
  "key22": "4uFs1qjffsVBNQZt6JbtyYzRnUwAgvvBRiELvqwntnSxxEcDNUCHYEPQ5LP7hLNwaYVHeLdCChGditi9qfDmXytf",
  "key23": "ULeH9KJjkxv95LkUJi2upxHkhxXC9DGNDf3J36LWgke85j4Y7yGSEJeYoqMrtyJewCTsH91FoGtbhvgSx2xMKuA",
  "key24": "5p5H1DJP4vYZuxAY8hKifB2fBJxYzKh9mKh35PoLrLqfJeAN58dmduVc3FLi2U6Tz6QspE7wcRahT5kKeV2vX4oE",
  "key25": "4piaBLS88tvyP6RE4CmK4GymK5unrq71rr7989EN6G5Anwe7LFmQUHtAbConCL4BuWBDDWcHw939i11qwnyu1sG8",
  "key26": "3ZamsvzLwFgXfySYjtv2cPb6Q3xNshpFwBojta94UJEXWwpin5QRJeqcV7HxQqtGRPgDskwBoz4SzBhcgDH24Dn5",
  "key27": "2iYEo91mxy19ykyFwuwG3XNokUFfuV3QbTLLRUNbAmSmKfijr4h3NbUMFsmjSbmTLGS4Bm8gqJqnsyBgVP26yBjA",
  "key28": "3UALARhV8WpbjNPf3B5FA3AXXmMCD2tKEtmmxZLBJsQkGDzLN55BstpFE1XshNTx6hzchAiJMvurvwvNFYKhrRhG",
  "key29": "3NZ1ngJ66TrzUEsLDnbsSneMAceLecMx64xSTiHMLtmBpCFCEojr2UXJpQB3HAaYdhYMZ33yyN93CB5MBr4mNM3A",
  "key30": "41cA8qUNpme37odzxuDNRZxSxYtAVu6LyKcHq1Gv7WdsrZ7rDRhYc76K5wPEkmvLNFMMEyEbHYff1g8uUJbqJX9f",
  "key31": "2Uzju3N5WnabLYSg7g4UTkjPyWamDiAuxVgi9BiCR8tQr57MFMqwvzL8oJoJpR8Zyr3rwTDXSjUHPfJBD48wMi4",
  "key32": "K7ojU8N8L5nSXNmzCGtxhswByk8gGS2rrEeQzdW3FKSa6Ubo2RXcicgbgWBkNbw9jRABKPXo1wxxtjfp5ftekjw",
  "key33": "2fEv2C62qTmXqetpkZKCxvT5st5qKtwYV3d53i2hcGJXK756pJUWrnaUipJkTurpskc65esCHjBwv7nepnYtdusv",
  "key34": "4cdYznB7mFMZ8JKvWtmDzKo3vwwKUMZRMRE21LJEJf3gm3jjZ9QeFTPLpjJ5nSFTgzxZ8Dd4WfJHC3MtUpvR8RrY",
  "key35": "bgxLX3C1bm2gdNNGKAmVrQAZbBjG2F99gTmNiLjJLJnTqEBdTsC6QNxYJiJ1bbV6QTCGLzngQTxDPSohB2ouD1q",
  "key36": "4nNzkQ91XBZWhGRsvMQ5ewAT8kWezzboFatuz78cqyGip4mH6wY4YwHvjtarHtwwxu9EADq3BFBTN6FzNJLSLX3R",
  "key37": "3L6pTPRF6tm9JyTRr5c2WeNv6fwUxJmpdfqoEw4sBhQKSUHCoAtTrtpPwEXsXYWoxhuqRAPoH1R9rFYWoryD2dx",
  "key38": "3Xjf3WnXarAuiFUmr4mznRsUtkzc6nHGEsTSXRyMUanmnMm6UR6WVyceRs8b3mPTF8p5x2RQorTVtriXRabaVEF9",
  "key39": "2wMuceRtUwZko19hVppw8npPr1SQD5t3V5Q59Xk4sSKjBogTcqaQkZJfiHHo5nRniRHMxQFH4Cbo7GbHhkJGqFnd",
  "key40": "5DPY4N5MbzEPj4Tf6oyR68QtMRMCNrMfdSfNQCMHRip8yGfSKHuwPQfbNXj8FE1DSg1ND8tDhnVfup7qAvbwKqsx"
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
