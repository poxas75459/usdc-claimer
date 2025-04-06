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
    "RxbSRzo3xd7mUow1Eanb9iZAnQy2Lq2GcqGHRc8cyGKoCGu7mijr22appFdYeJmb4XW21RB49DanHox96kFKJLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxdNpvPSsEgdHqCTG5nXnRg4Pyhzz6KEfgqMtR3gahBtAzFLMq7jWje88itJv5uLSHwJiN4eq2df3bkJGRbYvQk",
  "key1": "2XykXFZgKPJ2mcCJmY5YVyPuSpSoqhkryzKfmiRRZYc6gfvDULXjh3JRJ1cRNFZuRvo6cXZBa7PqqdztWJAuT2Ki",
  "key2": "4JEiTrAg7UMGFghVK1JFJda5TTN4mKUDb3uwNwwF3WRFmaf5HyAKqdo889iZhWCwY1gEwhZu3TSjma6ysQkk5iv8",
  "key3": "45XzioZggXVYbProuvbnuZKCySWeH41jhvdzs3nFs8sdaVgaH98cdZiwUPYhCRqSUY3eeCFKarRUv1d7XXirKF4Z",
  "key4": "4qWF9jePn6seXv2F1EyL13bHJMtJVjLwHPjDMz6jCHvETMHBH27ina8fEmcApq2C8jwjBKECvnqQSRM5hHT1cTSz",
  "key5": "4XYwHiLydBhgU4oks9AVqW7GaDmmN4tfWfir6RaKgveXGZ6VfRyyP9U2pwctb5k1Hym7CwuuqRL4TQtUEPtyKYwg",
  "key6": "2yQjeVWFQrjc9nMPH9DuEKkY5uWkTiLSemPB6w7bzUR7xQP3PcNZdtmgrNBCpbsJh6v9QV23k1W3JoQBTr9dQNKM",
  "key7": "3Xp7tZxFbemoaYMhxR9WEGMDa4XqccohUh47HQn5Ap47j28qcQLSnemGgdT382VVkby7GkGZ1ogWCMArPiRodSod",
  "key8": "5Kvn5XhNrzxehdxjWKi5Er7L2mg2XoUPkXCmhf6ddSuusDwo91yyGyLcem5X3fRHssJTsM57b5tV9qiwGDZivfMy",
  "key9": "49ZQJSZv6436XSBhYR8JYwTzBpbdngguUdLSCYTKs28Na5Swyn7KrLQZ63JRsW8GEUCCBkEtgyUxVYqkSh4rNXU8",
  "key10": "gDBoU83svZTsEfws71RzDYET5MkvXN6PqGMxfQYdxhvGwVdRd9tAHy2bzuCSuq8CQSmnEpqRgoksjn11rxdfVKX",
  "key11": "29FgpUywsZXP4DixT6iQ8b1DzLUUr6U6XVvyDB1uE85kX5DomsV2iebZutDvuLvsKA89rtznsyZbDcUbZG4AsK9V",
  "key12": "3ChhYFhHxxn9eeKAiN36nxGz5mLEbDAMiun2CL4VweGaH3VAoXANkJhVXUtiympbpuRt6V21g6JabFe2hxAMSLRV",
  "key13": "4zYsWjakSrCgTP832RyCQYHppFMuEbGAWGc3dzXdWMD1P7PGNm3uAzZPhYc1bRJGzUcyxRDfWfxsxjxmoybtxaEY",
  "key14": "5pHPNCJ22bLzvo7HnWWAcvBGLbWcMPtApFdMygWyNQSUt5kbshFkSGBLsv15xXCE4zX7JtbNxd1Z4K8PyzKg6wUE",
  "key15": "2oZFeEBpPRVNzC1tVgf8Mp5Lg7tNsSREHtVZFjwx4jU3uGrC56F9ZpXHTFPbbZGFKtNVqCAXpXVkZFqRo7eXVsZf",
  "key16": "5ngJagAShZG6abZRyjjX4kLoNksCifnnR2KqcYLJTgp1cEc4575YUfyuQKDGSAvXgCXejQFHjDx3Tga5QpLmUHeV",
  "key17": "5KcTHWVw6irN5j7qmcVkVhZ49FkdwXxFDppU9Nxejs7ot8LXGxcBQXt6MSgz3KkM7rABYeoJHD934WTgWwsNWfqJ",
  "key18": "23jS7AczJPAYTNvDJH2TURbTHu7kj4UHBAM4f6X3Uarbq91jtCPgndjk6e6ea3YwZdZM8rCFxnrbJBJ3zsu5jTsp",
  "key19": "4mfb86A78FvBwASRWQnkHKV6ua7vu6iWY6jWstqriN9fnWiN2pehj5pE59bLQc6ntq8BSobcV12GUsAYKc8T4dr5",
  "key20": "41LaV7GTEnXdRGHFBRM9AtYhgp2ZPTxNniUB7VhbKyLjh9MKs5DDs6pg9HX8QwY5yXSAVsMNiyEPvxCWZi86HJRH",
  "key21": "2FxxiXU5kjQ1wCTMqA831FrwLCTw5hzQH3f5WRwWz9FZzw8f8NSaS7zfrLfuDR2UkcdT8QtTZiS6dmtiAAKa1gF",
  "key22": "4oMeyEqYff4T2js9YRZUzw1rYrTTf2Lvyu8vaS2p6UmhUsGiYbYvrtv3CBsVaVQYEmBnrzk5VBrxjMJkLYSnbUw3",
  "key23": "4o4RX9iqpUckxMioMDdBgUJgHbZXvPakx5LMpy9AdTnTkeagA27qZ6XTJY7NUEtrjbEoQ6TcVAe7HufwkXvkSsDg",
  "key24": "4kTjTsBDvfBVpjqAiBzSuQtqf9gqcwoZR3dkdySEKdMaiBAraogHrmuRU7YEuBXuL9vdFMAMejsTd4aiKcKWMUw1",
  "key25": "262zsFjnqkmWvn6MSiSwHmM5YviEovLXm9MXLHJg7WcgyMaQjoAgJAZUtva13SVM1ibD8cN3Ytb764SykpnH8dQp",
  "key26": "DDvQRwzVbtCgNRwDqs4oGs7j9Yud7P6DU5eseXTft8EqTbG3afWQTn6JGj2iC7exNwH1C6MJxbnsiSpWLtBoxVN",
  "key27": "3njBNTAx6fgXXgamGcDtCeFZau9b3pw4qQFwZtrj6dMqU1WxTT72fqu1NgPh5QrgQSLCo4Cp5WSBL26nZGEPadti",
  "key28": "4AjgAzsJ178gtKjBfYjbzFG91uNpvgWcdbe46G5DRMSSz8m5xCr7UiMFeX78jfdt6KgT2vUuSxdhxvMBHSUuwjhq",
  "key29": "17ZMtTiRPgxLA3Y4Rq7v9A4QgRfaKZGXmoxi2iXdWf64fnpK7YBRretsFUK3Wj4LRJjsH5T3kL6sNRBBbZC4QMX",
  "key30": "2j2cFeepoJpLgRKy7m6FQzUkgCdfgvC4GmKxvMBVWPbzbsVvttHJzdJV8gG37mUareNEyCLqrf8zr6D7dL6DrGF1",
  "key31": "5BMBw9Tq32WG7ZboyHH9EFheAzheAraDZRazzxwNUqyuK1K5qfAnFY9tv64wdhsvj2wgDLppY2kATcfSNf2EZtWv",
  "key32": "4rRMhKNbqLyiCi1j5JuPPDtpnynWoJBtaDE1gMnufjHfNNC2jVgBhr3gpX93ntTpXuT5aZm8vV7Zpj8wmX4ghqLw",
  "key33": "4yZSxXKen9XAkfeDz3RTkdV7PwD1rbe63myGtU6YTrinfR5RAZwT91jgaR3ytjtNv5cpprjo3PPT1DyeVvga4WKi",
  "key34": "4ptfd55uGPjaA97F33ehCW8CqxhqjJURirbXMLen5nV4JcXxewsKeA44k6uMb4NEBfZC21t522ogmtXaEZmmTBV1",
  "key35": "3nwrtC5aeVnYnUvWDEXrdiSwVkCk5A8ficT8usVvGF2qJsxBUaokUZnZGMps481fCxucaLj9tsrqb6t6zqMwjR9A",
  "key36": "3LWUMGQjiY7XyQSYbHKx3zZq63kxC1VjTjsb87T48CaHRGPSKHzE1rTaTn1pFtR1dbxuPrKSadouwYBy6qPreHG5",
  "key37": "42XqkcVbV5snJXkBPpEpyiUu3sY3TYn4x5yKUrDvmwDDaK2r7CsCThf8Cj39qr19WabAUShJDgW6z2pU1s3GMStf",
  "key38": "hu7coHtR7ZkiW81LvXfQCapSkYC44pkEyT86gyaSARde8CGUffLtPG65pTa1Ff4oAVFqt4tEspRxeeNWaXvYo5v",
  "key39": "5taFjZrUjWgeRQ3iYmbRZj85R6CXkhMaPiV6sb5QGhQ8VefF3Sz2WMFYnmGn4mhD5CAE3JARhQ1JE5YFQytN65kU",
  "key40": "2Ji6tcU3TBx8Yj1ao9Md6mhgGoQ3XVMhMd1X8UvobHyA7uJv2NJyeDYzLWWwxoEk5KQRQRKJgdHffqAAEmAT8etZ",
  "key41": "5nerDY92WKVrQx2rCLccF6MESq8C7u4QdpkjZp3GTeMzdjHphv9RksipHhDqaBBP6TkpnTd2wTJTgt2C3KJKftiM",
  "key42": "4GTwYhc8JhyxYzvXAQLbWAfvfaGvT14VuTdBuYbxk1VWvqMX3nxPMu2cwhRpfDmjHy2wE4u7eDi9Ce5ptowaZG5q",
  "key43": "3riBBc39Q1bUWwZNsProDWV7hkCuiTZ2mPVTbQb2KPrSb8T1MkSGZxkLynfvgBAMmMBWKKgFQi4VYtsHLeUsJMRB",
  "key44": "2bZBCmRCxEJ36ZfmxHgpPHsTCHzLqnYfUJeQuXnT2jWyd4UX9NEwu3ZPNYzocq1Nrdvmo2smG22S2YzQbNqYvzc3",
  "key45": "3y5apMxA9WysNRDtY3GZehqJMNLQXLGvUU51N6TrizpkkS6osYryKYmz4N1UTr77jvRent7ed8QCGyb2Ap2Cmabr",
  "key46": "4hPKoiSJLsmxprgH5qimkumKasuqnjHctZpqWRvwk8dRqw6xZRNearGegziaGbcga8c8WSNqEFZzatW4NvKrnigC"
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
