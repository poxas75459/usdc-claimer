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
    "3HAR2C6yThjesakK7ka4oZznsvquBUda84rk3gTqVe9DoiG6wPiHFZx8w4oBLqdd2GwHqAdqjVRBLbaoGeFJ1xCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrfPqqDGmfnwNAxMd8665fWGHg7X2P8w5CYbRqCgDrdyJB5WHTLE6QUHKBvHonXwcVX7i2aMkpzqe9iezZVCzgQ",
  "key1": "6fW85jKJ7FoNCb5HVghufG4L7hwWaBaYf8dwfZDpB3j9WM6G8EKnr6uQxiXRwFZHb7V5W2xgnTEGF7zBSxnS5Ln",
  "key2": "RrK4ue47JcmrDRZTY2YouZnWX8ok5LCrSCs6RLkkHqHchpQU9HE2TX9QgS1QBwFfwXzBAEVtLD41mq1KuRxLugq",
  "key3": "29nrETHqdVSjULaRwSGikC3HUxG7RisofJGNCopCXSkVUrJu9tBQEcCK6DkgZAXYGLnVoobf3WjsfLC1uiu5nmL2",
  "key4": "4DUNRiZKMQ1xeHEo2FN86QQLu2gRmVTAaWD6FsPH899KLfdVMRCUx4tGGuRUz8X9jQFJcDrcAjsQzbT8PRzg1cZM",
  "key5": "4fWre94hrrFEU7jyCN6wiTK4H2bSdowVXHvmyuGck5itK4cYtz39C4z3iDCVUhuMofUTVFGbN1B4jAkhF7nnFzDs",
  "key6": "3SU3ZFcvy9XLRVYYNAuj9cokkZaUMT1vPH1DsGhqadrb5kZQs8HiVnxpMAgiCvcfy2argN8ErnQwe9QMa5yQ2uED",
  "key7": "2qsqHVLtN1Q1LcnWLCxQYKGznbmNS5MRPmiKBDWvMtK9dXwYtevBp1NB3Vu2AAxX8i7KoHv9QLu7tkyPSdMB718",
  "key8": "5Tn3FMeeTs1suCeMz7wdsGvbZMbcXUY1A9dNdafdGnAb3Ntgfft7ZXAzzMpLfU84aGB2Mr6hRmaYptF71TtBdNNY",
  "key9": "3zCmvbjNoKDrY6WNih2JHYZapfD7d59W6SbZRiR16kXpdJrVY9UAm2pT3tFGxhu7znqNGfiq5ehycfeX1QwvAiWG",
  "key10": "38HK9t5DnKJ9snJZPRQpHVrPyE2auVicZ3Y1VV5keCzXWoyZwuWVfZ9SCyqjb7mwv4Xd2AzPMt5tnNQVjBzdqTHH",
  "key11": "36CagjRSgQbiLygDdeypi7ZWJzD974aNpLGmTEac4Qw58WhoKzh42GXjhAVvE3Rc9Xzn14trXzTiBYh3kyFUbNMe",
  "key12": "2yiu1EAh4YjnHewry8xsEPqqYsknqUxwJB9NVwVb8ntEx1uH5iRqTdtaoevpgyvZyhiT8bXykmNKaTyizmeK5MYd",
  "key13": "W86TgPUhzM951B11iaRR1ZiUfs9zVo79tMxc1a3Fy9NR7rpRLkECydLtuiRvcfJ5epsZru1zfTfxYbM3iPGGGou",
  "key14": "2cY6eDXYDAJzQ6dNccxHGA1Wdk9ytzDCnYW6LWj7inSY9T7Ve7x4BgbSoz8dknL9zKMMma8E6x8bSUYSfT43Gief",
  "key15": "3PsQwvGchvAcBfpUb1rM4h7ftpB7EmsZH8CMJUtVnSe82zvrwvz6aTAV3XxfwqeFgRGoWMi85nfFQK7dBbndhvJ8",
  "key16": "vW7PQ2MRhpF5NF1cdxfzMzanN4QTJGqrAokH6ZwbaGqw2onSmVTYhh6kaxG9ndKyEcbF8pkn8A5xUBx5jCWLF2g",
  "key17": "2SYtYyEo7G5Ppu7WwPCyokoyZT2gE3AsySGHLH5DLPp1c8qV7vwFafYkLGpqFTARjcM8WbkV3dHsUoeS5tDELrwm",
  "key18": "4oHNg34xc4tG3E1Q7nxuGwJKYh8RpweFP7ZhFrDSsXZmJmJdM8grwDAbeANeXCSySPRcZvVH4ooE33L1n6Bxb1eW",
  "key19": "4zCTmgHQTk7zASSR4NeWHzciHLFVneCbSVp2Yabq9yW95hvXzRjtZCbwcYoiFy8f9DFN3BZe8PuhMXHCeDCCLE5S",
  "key20": "eFUiqV3YHzXaemY3zAph34AoqMCDRwFHQrkziP72gjGNsov7QYaTjJaxPG6LKZdRE59vgU51Q5BBb7R5w5Fyh9D",
  "key21": "5Qn71aXag1VvjkaQ3x3CQEHxZeBa3kn6tX6sYEfbRQZwcBMTtTcBou33aVAfX8FxZEhXtGv6W4rWd8VPkuG4bPb8",
  "key22": "4XLMTikV7ajRgNFuvzf2L5PB8gY75iSj14hcSpPSXifgJW75AxBxvXH2TqqpAREh9ubTMMiGKwBdiBUAjAr4aQDN",
  "key23": "5MQyyFrpLfW9rcRdd2AxMJrFFcrhdByXRhwrs21vCiR9yfuunD2jhnMaBudgQ7TS9zQGZtPBCBbLkjayJ634u3Qj",
  "key24": "2ZqqHoL4vWAW5CEkQUNys9HbVvFk3w4m7qCENmZuG3npibkBRFFkw7aoCidaKoaGo6VZKn1W2QZx3GG9M5aFJdu5",
  "key25": "PCmWXuFz5oRs6nckGcHVBNezCQo8KZvDGJKJsBgP347DyhTwj7b1LzwYZkZ1hvAnnFeD6sTKqoSCPNPEonc9BK1",
  "key26": "4eJxvPejbts1gcoDK4P5zjPjc5qH2QAa6hxjt8fpQtF9QKSd3TQGYfTzRb8roedajfzof21bLeTxq3nQFBsAWHKd",
  "key27": "3yn54NVuxugPnM6FSMChn6fcgN1zPj26jkR2MaeUEzdgkNp7Na9oDMKd274MzJkYY1m2VxDWgY5YuhAF1LyQt592",
  "key28": "4cgnqKLY9j6PvawQSrkiH7nRvjWtooiMgo155B88TmU5oHQJAuirTHQjA4dT1mQcQMKsaFu9Z3pTb2a2hRqpXMgQ",
  "key29": "5WYxCQqTemVXvg2sbWFA4nvsHy7Hi96UpbyZVtA3YWZNceA18N3hdcodnsjefuna7Co4H7Vk8CrAEAdiY2H1r8pa",
  "key30": "5hRKgR9SZ3Y5kKFJ9GRKrn4nCnnQ6TQKy7tvdoiTtGCfDBJsSitgBRyPDYwDMr2yDJy8K7QSeB9Uoh69Wq8N9L8b",
  "key31": "54YDApQ1ajdLD79ZVRWNNp2D9j8BUyhpg42gcgtQrNytiixrTCJUxdxVojt3tQjZFSmguCviFS4WFVgzGJEW5BJy",
  "key32": "4TAgrofhHrxWtQLBeTdrVtof4oqy2a2PJqKnnkDXr6zNfHoca6VeYkoJQnCHuvoiqdMJZnawJGa8Ax5qUo9gzcUL",
  "key33": "3CxoQi3VMbpDNqCf9YmaBV2KZ5CRfhE9tNabfBzqwMHoB34iTafzwrr9Ug7TdeejHXy5Gun7Js326WiRdx2xskhZ",
  "key34": "3NHdSTZCzNgZi6CWNEpJ8gKnqoM5d7rSkAxAu368Ef2vhJa7aAm3nSoRW6yMjsct6BD6Va4xN3BGMNUBSj1jLepH",
  "key35": "4aXAMqhgPXVaodRwqYDmJ6e7ttfnCBF5EKjtJPCiAmA5i5iHLKnhB1gLwZQ2A2wXD1v4R6VbhjZH5o7iCyVt3PmM",
  "key36": "3gFGesMCrNaZzuFpgQwKzQ8tAqNE7osQeuyB3y7JcykfjpsrwWDPuRK8cninVYKcewKc841Uh9yDoArv2ka5SEjb",
  "key37": "62ZhnrpNVciSCBAvFbvU4EDPemJqQegfhkEu2i1xSf67yjp7WNhyqu3TiLNXicbzDCJ8DVMcxez2BjZ8jQdXNYs2",
  "key38": "3F2zTQhRyejuFxwaCTd9S2gnoUbBQTWvFQ5KMVkGGFcLu5D59Wkuon6bZgKn58oAQqXzboKVrT4HLE19DBjNjqWT",
  "key39": "3kzHm8kw9ckzuWe9ghBcXR3yA2PehJvX27yDMhqPnpEBg689iMaRqTfaTs6oN5j1oLh59GH28iJCWH7Z9kiwY8TF"
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
