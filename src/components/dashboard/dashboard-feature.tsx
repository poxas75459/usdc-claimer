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
    "GRHuC3z6ywK9aAWAtrsreXu66ime5viLK89z99HbVbdJG5XpvfXJo9Kw3bcr2GZvYFm5sys5BpaKB7GJ6qYDsDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJdWUmp3jgYt2WSsEDRCb6X8SbSA61PpJroYonNWd6RxJows38bsUr2bUa1N28q14oDnqtTdgY4JgpA27UugKQn",
  "key1": "36U9wQHuDc3wXywmeNxUUtcrrwkJyHcdERkascNyFbPaw5kp9dnLm7fGLeUv1EgQ9nPkaZH34LoZpwxMF6TVVd97",
  "key2": "W2HAwiiFyjNTrpr3G9J7wX9CDPXmTasvTqXnhGPvkwadhvV2uyusFXCMnY55zrY3Muo4VdjgeWqKZUUycxK1S2B",
  "key3": "539aebkBtxRfk2CUHXp48duCeBgWVB4QErzzcpmSYQzMCZH5EMWtpruR6wPdrGziLQcso6yokqRJJQfzGg2znmvk",
  "key4": "3xjNWjKDrch1y3rfwNLpANWTgjrnRKkchu4yNK9zceCwvghuteS3puUXWbxpbVFmCuRwNGRV1JhyGuWb8hcMkxWb",
  "key5": "23AeSTSC3zkcphP2NzSEzgGBtKb6D5M6SDt5vKLPd9iLavZifADeicqojPX5tZQLtHHN1Nb5GQxrepLWjyAkvXcB",
  "key6": "5oCpPFoLvYZMSLqXVAnchiX4VVzh4y9qE7uFqzyiBsnatYovu1uYBeenXKsBfGjp6PkY4ZuSMvVxJmK2As9cnMpL",
  "key7": "4ZovYNzBQTKsoFzM4B7HXxyp1hLL9oLpMBNZ5ciJYKSC99juesjJwrEHLyn8s3v1LQkqTb5x35F3np1g6VnMFUsD",
  "key8": "dkYW9TskS5zgmPMMe2yEu9aDW5V86L2QujAf68hyHd825WhFsAXPhtLfWSxD4SDx4Wn8rPLTAbznKaCwG4Q6vvz",
  "key9": "4Y4Yoxps4N5nuDjbw7r9jxUVbrqsASGeH5wXkQ523WVtdJ3J5GjyLnzbjv69PGdbgKiHQAJEkoqgehpcFHBHz88m",
  "key10": "4YdgR6FdUuNyT85XnA6fw6EtVA6mn5SwodzhFV2aAr8PvhGqphRZnbr5ZLyT9ge3miEX2dYvVpQkDnjkTpnRsdCj",
  "key11": "kb6VJEF36q4JGYKjk4EPAXeVyRqMnQ2jXXwCXfkosnXbfuhZgZnP44uysgmCoLCYdSFfpaW1rPbgBT3BasuPUvV",
  "key12": "eai2TfAGYWtwpfBUacryjwABSUofMZzkxPPAZbhzBGwsdFgvfixqe9WLfqHw252XUxJcmMLXGw2dUNAiu4hi9JQ",
  "key13": "5dg2qpPh21VneaXxb8yNSJFwXGy5TUPhfaoyF8BWtqETqRzuazDqb692pUbcquBNYuiim3aNLV5H7oxoFC6s3B2T",
  "key14": "3E9t8pmFxxVepgkGBizmKs2gp1Ub1Ljh4Qu17bezuArqndrAio6W4UcpJB4kcZgJHrduuZhh9mmARaeimw9KjyYb",
  "key15": "3jWzsTRnJCTq9nZfnTnpxb58cfA5CzFguAap1zX5gW5D8keSthXKWztEqDpYd1jx8ttz8uLN46dw7pfxCs4XF9ea",
  "key16": "4qV7pm2Np1YKmLfRGQaeREcaB8ES3H8Y1dL2zkwzmn1HeXyWUpA39RAgSrYdCEGtL21fLrMKSbGS5F29uNNu4FfA",
  "key17": "5DPK1VWq56QsQ841Tj9w1g3m7kkMnxPQEwyBYKhw759tQNn7UqiP1BxG21CzejqwXH3b7gFCrkw2qT7c8ptdGexS",
  "key18": "5KPHmHiA1qGiFc6NhkoRUBW2f1MkXKubzZRXQdLx4Etd5qX6BjTP8P685cMA8Hv1C3YGb3DALiTX2reDivnPqqir",
  "key19": "4MdkqN46c2mUqeuw8dFTzuVBUyiupeZ6GjFBwfN62j6CtpF3gPbtWuMFwGPFtcmTohiv84f6iiXZxnAheTRznGRF",
  "key20": "496nne9iW1U9wr2DXPzKXs24xm6WM1WkuB37AjqybnWQdMdxH8u5S9eSPMft6mxJv8qyurZqCAK8s6wziRtcZccV",
  "key21": "66MdE56imkGTBtfWXpyphftbnvBkpn7MJvdkwFBb2RCJVqAHwG2iYmx5bMHQ2JKe1P3QnhpDyKL1tF7uH6EG7yMG",
  "key22": "2Ee1qksYi9iBZSH4H5r5tiNwHVz5ukctx9rjT3FD1n3qYiPE1VW3YTZgpnSWM2U7tCYSCjxr9e2sAEDmJEFVZhh2",
  "key23": "5X2tYUin47oNsLdQ77mo5uLx5Wj4QpF31vVHBuxT95KYYKia37wmdcqZf64SG7NDNe9DgQZiMWuMntdU7QW4Ae9w",
  "key24": "76iZjJaTd9SyPpTPeeFpMiVJA7nj9qaesXqv8sVrVjECj56FR1Vpx4nuDKuz4e3ABwuE9Z1oJTx19EFsHBpC68G",
  "key25": "gw4QcpHnjN4n2vvcHXqg7ExAcFFQBNq7BToEcbhJwwCuoJvUAfBiMwiLwcqXevV9Ukj6x5A6NVXjbrkSrM2g4st",
  "key26": "JKvKNpxKcFKcH6jEsiKUDEcxJ6JANhsLh4bgRX1kVXg9iSKFeGP1yLjjmsTrxC87rQWGyFHQoiCyKhWR9guCwfG",
  "key27": "5HE6xoW53YwRypFFa9Dg59ktPdk5ojotknAx2oBSQTshYc63XWYT3UobZiMfXJPSd1hvhkAwbV2kvXBds2f8QhpK",
  "key28": "mD891Z1hoPEhRMmcwG5pgaEgiSAPtcLP4RAUcRkxT7dDjWdX3gzUmQyKbsVKZxpsX85U87RNfP4zGpJFRSMVh4V",
  "key29": "2fVfPK5eHAxAsfujAqWLgZ9wwjmnUnv19jL1APczYXLPw8hiLTwnM2JZFiBTV4BPCC5nQ1dQxFozFPB71f28pVCY",
  "key30": "DqxrX7wftUZHsiwa7sMojvVyrr5kogTCTaj2hhu3GDB6Vqgrujj9tukDtHoq4reiGZaxN8wBE3Bu3grN9g58cJC",
  "key31": "44NcLTBi74Z3tNUmjrnyMe4RfRWfc4EuEiQYRw1JHKxaTFVdHvLNjrDGq9zQXnGYs13JF4gYbgKdCCAFpYd8ZMPx",
  "key32": "sGLCKTmDyLc7eqe4HGxi1f3NdNBTfitRA98LZ3mfgqhVF4LL5e9zKXCjp5U8pxVd3bKPGZrCShWaUV7u9co2FYZ",
  "key33": "4ZD5yRMGzr5QsJEHX1W1TsXCYe5aBmQk3KZ9qiYd1BgWFtzSTj3SPChxmJLet94EAewGepNG2c9YyhGqG6y5YGNM",
  "key34": "cmFfMtE7Asbn2xXBJ5Q2wUpgiAJ1ivv3iPZoXPiQu1QVLVbugU3A8U9s1Th86v4W4vKrpK21pk4QSuA1Y4ogxru",
  "key35": "2w2JZiRhEfRoT2YdhbzPaUdUGzXQTvV4MhGjkEtEr3BKA5eXaKdh8McGZmgJqat72nyFsf4Y5pWsUQtpTxKqXhTh",
  "key36": "5e7r2mcRmXcVQevGTJQiUCUsLVPWfd1z98jwQWcMJT21oRFUen9KYXXvwJKb786yUPvoTD2rGKJJfPQB4dkW7GJ5",
  "key37": "5xA1zkYNV1hKoRthc4jVRMetxZ168txjSqrXuQG7GmMVCdsBJB8TWATgp6sGngNbP5GcCSoAvSF72kAusTdsEB1H",
  "key38": "2LZKyhzbKgqtLWV4WUQPyN6SWGvBDLTZnXENC1wStjQaQRAbB7vZnXiphFAJniaGBRB6Gbv9jVijauphGbwXrQst",
  "key39": "2FH6ieoiwtM69rMS7sA97aAHN7Vv75KcmwB5wi4BignQKRYJvqfFRK1Bjt7cFFfL4nmePDW3Zkw5YSQeqWJjFByH",
  "key40": "3yUPC9aWBWETqNxCygX99YdgDswTaf2peX24C8rrc2tLsRnv2tgJ35qAVLnFuf9cThJZUDNzUKc7M2LUfQiroxQB",
  "key41": "2da1P8X2rhSHTA3dh7JGfxtrLQ573DsCFQRhjy9K2bz4zWqvh4uTR4uzqRX1ARNBrAoyKurJH8KNd6noyRUEtEjW",
  "key42": "JUbHKnTS7DA1Gj7cxsZ1zeitdPfw3rPt1o3aJPxKp4AWbw4psBmE6s5DQL2EdD5uTPosgbJ1Q5K2vtJ8bWgw8bP",
  "key43": "3X4WLnXy8TWcZp82vCwrkCcB8JJtaSjyeqXBJWW4sPnNTvW6DcqQXLb9U6EQjJSqm7zYuNdbUcin8YBhxBKKHS72",
  "key44": "2MtosLSKGSqiBRzTZzzE15yagXWNX7tEzEi9RrvSkwbuCUZ3Did2KPkmmTqn3YsXSCGxNp3wBm56YKf4jcHJScYr"
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
