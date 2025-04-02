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
    "3yUw6sBLwu2JyMgcX8e8p9wk8UDSjg88Y7pF7Cb6HzwJHb35yQGegQUUwNGH1SEDvECxxMYdcTV9tQAXmaF8GEEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iNjqeMgqDUdg8R5tRJ7SjBVSP6dXjVse5cCAVkiBR51ZAkLGafAJ5UFUHifeSCtm76gmhfnAq3WNiYn9SmcLyZ",
  "key1": "44FDGYn1bCqSkCL4jYP4qrQLXVfiFft2mw9K4iGaU3ZbeL4CrDyHbva1v5FjTW1qEEqcAdKVruaF5hm9umMiRLk7",
  "key2": "4ghJQ5AjoewJ1d7HBUXCP5njQD9GeQQ6vLUcFLJdoGrDES5aqdbBC7Kt5ED2UE21Kn9nZi5ymCXfNKnidFQksmLR",
  "key3": "2jPJyE4roqi1Wf9iCGHqAzXqLPEtrftXB9Wi4zev5S9YGgXyeobPtcUDHFmiQNyykqVURQaUp4pGLXcUghF7ya19",
  "key4": "26JXrnKVUvF8F5p7mj81VrseNwWNqTky9eo7WkRdJATry8iypwDLLLCeP4HXSdrwVKoH1bypLkeb4bJkzPuYGfQg",
  "key5": "2LYXGcDLK9YJ1JH9ZMRU3ZjiPM1TYYLUE8nu6ei88uniDnTuC4U84w85Vuti1hXthKCXMQAmHiB5Aj4SxPWPn1Zg",
  "key6": "2HiH7kt1CA1y9BpDoK2J16PWt5DWp3CSS8hqC96X4GFSzh8HcWbhya1HZAhXyYuFfhxDGaYDfKeCAaAkTosGN76S",
  "key7": "5FhtTYvBsWs29jMm6RWmkJLACFURHHbsvR1a45Mvp6pfnqczHiq2ijQu5w6YAXBbCUH1SkhJe7Y3cbtnU64yg1tb",
  "key8": "3hfGG7EZMcSxEBeH31k7Gh9VsLzbkpFyBtSbuptjgJiUbctXMm491xWuvkfASMSQT7tuANmbwjjQ3oJrp9zxuhVn",
  "key9": "36s1cKnGxcdYENKxd8417jR3B2e4a1qxjuBz5btxwM9dWvKrNbLP5ADjJKp3Md28XX9aBHUQ15CwCnuvetG1suhv",
  "key10": "1oFufJECcz1vfF4JBGc1o1Bgg61UX3ZQCxA8REUYvRQVvxPgBboh7MPw6ZpARWfd7WisJU1QerAqAVjf5Rz8ArJ",
  "key11": "44qmY8FekE8MJfzSAENfVzLMBfkqV36RshobzrwJ2iS2BmLLAbutjhRLRdK5ZKXgb9m4kurJ47BZUCT5VV2vUF3p",
  "key12": "3ozwZWPQyv4BZ2YKdeNPZZ5r3mzE7ff59tsbo8trXawf2iDSCedxs5Lc8vX6gDLRd97BUoaw9VNsR8t4K395Mv9r",
  "key13": "5NqeiAnuAagN5uPFBbm1DSdGbxv6roapzZ5STquEv6zQ8vSV8eQ59Zy6UZrev1s5nBgp2KAGnbc1RZXHhRmPgXPX",
  "key14": "4eCPBn9rueg4YZrFzx6GqSZCoPPP46VNpCKFaukgHGnQNhxZzuYz2dVSNR1yPUAnMNn38eYXqwmawLASzVDxtbLi",
  "key15": "4kLDkxWFTvTBUCncYksZyVRxqektzkkYjxpXdXYKm85G2dApws7DnpsKikcYF46rzi5bn2KeXY4tD5smpqKx3att",
  "key16": "M791Z5EXqnwyjAbQ7dSsaYrvS6dTwQBr78ovcozshKwnUSEWVAJtLdmy1xgv1TtMdhbmH6XYeofqvoxCCp23DH7",
  "key17": "2qHg8q3nJRz6QSwMWBUFiDTiJvHeoLwLVQDucXoYeqjemH2nqLv7djo7gRzFSTwhY6VtLfibGK3EqgbFgFgm7fdy",
  "key18": "pWkhQmpmberWiX3w4XtSAjNGnqgnjkXFDsikbJQxM5rT5worhQ6ygFaeii4BLCa7S9U8YRpbKzCF38nKGdaMj6E",
  "key19": "1ihjpyiiwbdBrGEaLQpUTq2R2uvutqYYcFzDVuZYR8gE1M2i8z8H5vaspeNbVrtE29HnpvFkoWhcjbCau5wwtJk",
  "key20": "3RyPdr3ZnSa1RMQzzcC31mkSwBorZnmKfsRiHQZ6h8x7Wf9FC8EJogRwG2FDnVko7aRHFhPL6VRpD2c9sqoPU3YA",
  "key21": "TxzAhW9Tq4aDRHhSxaYz6AJbbHosriMxDHuAtbdgctAk2SdAnk9ppcAynFSUVPk7hQrp3SGG9UFffvtCrzkKFsy",
  "key22": "VZTSigDkAqwdhnRcs7tf2CrR6DGjxKswB1bKuZ1pKFvj7NHuBdazRSEGednLTLHv8FRPwgeFWMK7e2VeQzGaj3A",
  "key23": "2WzFZREcfVkHrxhRRwZNrMHYhhkbFtomUekfAeWyEpaAHqVM4Usi6GwXS6nz3FqQ5yrjKNL1mLykPKy2Hc7J1AXm",
  "key24": "3pJf5yiPg7PG3GfMbaKo2vobZJrDj57Rm89WbUKFaLo7r8k94m5eHacp8f1UDsBmoCZSv5ZpQcDkEwRqUzchhk8F",
  "key25": "zbVVjjbysTuU88bEJbxTvc8Lyjpbp4YGxJ62xkeT2Ax66oqeWsKy22hv6gkn5kHWC1ZLSoVh7D9rBv5a6XYazuS",
  "key26": "2vraqi71LirAdDEmSfLB7s85TFpTXfKTDvRT9grNdfKdYug3UCaEcFdwz2t4Hu2eTTEadHx8uPTBNCqkvsjgzLwL",
  "key27": "2vuBFy355S34eL69aCS2Ypj9zVtpjeM1bHpYSAC2Aj7iiYNQh9zXBJKFGXo8ZgTs5Qt5kGyMojCqn1KFnmthF8hr",
  "key28": "2Po959VfSwLtEbp6AdfKCFoPUz91jVR9CHV2nqn9XKybzVYCNUVpapBWLrtHy425aKje6as6zaALxuNU6jgqm7uu",
  "key29": "3KaJKXYTjmtNxkGNpyLiWK18GLZxRV75jcS8beGDJYiRGafoYTLMAFadtTSUTFVMposNhgJUDpKJ53YJ5MwmNS9T",
  "key30": "5ughszoWeoDDxxrjZTJ3vi79QpHRBpKwa4DLGRmF85ggYWUAz3b9by2Z8nXQr2wakm8TjgZhYLw9pkyARY4mFUUW",
  "key31": "1Fn6JaJaXY5rn54z5cXoSpG9LUBkQSGyP9zSisJ48K2Pwk1rRrB58fxiwpicxcWVNag1aVuZSQ38Kt6C186NaKt",
  "key32": "4QstBGiBSVPF2KwwsZS2SkmuzbXUA55uD7RSAwQeZvn7pLEyEMWrvVAvD7mtXYTA6TLvq4goL4nfaFRPqarbu8Ka",
  "key33": "4qb4cjoEwfeuJGcF5LaP6HAMu73N5H12Hbds4N3hQfJ1m27p2dNU6SfAQpxapFhqzWEKCDCpLVq8HG2sie7QRU9n",
  "key34": "ehD86VPTRQBuT8Rk2uJnBxPFbrZjZGJxtCKkbsv6EiYyNJFha9YwaSwBatfYf6mWpU1yVEuuNTc79kuL5BMZ4zx",
  "key35": "4XdWgjse5JZMjyvFSTKEr1ZYEhjFAHVtEfHFL7kRT6zFwbFuAvP15K2345bipiECDro1YmYHb86xds51fKDCpGbS",
  "key36": "5Kyy36GsVtKoq3k4bFex2wF7kZnRsfZjJ5KVVnZdEVuVZUVgq4njwwGgqTtJGEPf32suyRXsNRV7DLveCXcscbnf",
  "key37": "PaaXJBRt417DeDg1whiFMi9JBUWJfusNfjBNgRTBU6KLBud5wpxvnzy7otjEFE3MBtWof7RtNt6HCrivLePAEDN",
  "key38": "524iUAaCNwSFcsLrLKbZa2AeVKfY8QLmCdFpxpSQ4fRo4GT1xd7SYhLYjgiqgSj6sP2ad2DvYoA3h4sWBaD2eucC",
  "key39": "5JP2b5QtfgkHLwE6ViiUQMaFJ3vn1zRHDQzSjFZvqEHwL5m1zntfVwF7YSo18mNSgFuD9VZ1Vz7k4khJLKPuhnZv",
  "key40": "3tV2qFwBymRr882qxdFos4UtdrSBijkhXK63qd5Mu5kCj3QGRaFu9JzYHcDRxYdVSWSioQVRssxfmkawpVHhUd4A",
  "key41": "5abA6chGC1i5AdPx5D1YbLz8PNvUKRLq98rXoDUpowL6q7FG7WgVnhJN3dpvR99KmZrqKJdNztsVE3iUcitSQtCV",
  "key42": "2fY81JrA3if6kj1mkxqx5TMiVVfU1dgwjN38aodVxs9wkTsn9Z6NshprXCAs1xjLEgMDWBUfSK7AbA3XYTuq7dqX",
  "key43": "5gGg5iq5t6Mo1bHvpFAzTFiU2v27Jjvf9BDqTsb8rduvmeJvmAy5osFdYPwbUnDrEoBPchNiPZU9ETkGABiwbmNR"
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
