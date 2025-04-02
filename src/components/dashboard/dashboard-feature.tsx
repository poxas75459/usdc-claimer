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
    "4N3S2z9aXDJbk4iBsNvqfbkgZDEzXMvkzg6sSJDD84JXA8xUBANih454Kt1UBYN9dRshFR7dXVTLuvt3eVihb4Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQNXEHs5hrNHZCJaWjpXvzSpEjhu9fEHfxL1m1L2XsLovsEFZevJ8F5Jbh1ZKKguWmVP1pWvyPyvXUwxsmLF9hH",
  "key1": "2FEMR5Mpo1nqvQz4iRT7JEj3HFkiVinv2V4cE1RrFCEtWdfWUTPzdKYdzPgMPTwbaXaezNftogJD5vPUDC1Xdfoq",
  "key2": "3Dd8DDL818RPrHRfEmPSM7Ck68hoegKHYHYN3wbdFQzXshAogF4Ma4rgQ4JAC1rdVBTwQw7HoM6k9swWyyFav4C",
  "key3": "Nm6syiWwZH8o3cirJdWpb5ZD8g5hWegpuPZ7YgtGCMkJtKUqcektzz6Wq6rYQYZt657krXutFkzAFEbYbsWqd3Q",
  "key4": "3UsC7qLmFhni4fzDFphuNHTKTkkwWrJCgoNpvBqMmQY3B5B5TT3NbpVi4hth36itLpQqcKTh22aD5AH4Ryz9orsP",
  "key5": "7q3KzxYBFePgwA8jMDw4ucf8SKXdTdZzDjNSU9tdMd9CNCGSZ3SrNEVaPKEnCbmDAA1QPZes6QBwtPEj3kvbjjs",
  "key6": "5ehPtxTviz7fd1RT9GxDoj1gQrbVVvxLaVwVrRsYS68yG3jqPDvahu8hKeyptfoWYp3yhNqex5KyPQwCqxtakM5b",
  "key7": "2H6bxiEEC7ZtRzDHwoPHYGNS7yG4u2hXuAdKekc5NT9qaCcFWEDzxLqEKNYoLZT9v55LnoWzE88LbJr1VmuBbyML",
  "key8": "2yqy58XH9viFE8yH1ve9GRJUfS8ii1Bw4eaKjqs1zM3Fh26NPBamkUmLBoFAXJUhtjsrhN6L252AZn5d6vTjrfHJ",
  "key9": "4pmerr7C6c4NTPnwaC2gPGBxJAjKskdzvmufHHsasxZKTTR6B3MseSXzGXdCNHrPGBDuCxCuV8AfoTXpnwosF9qi",
  "key10": "2M5JRTSTwj3q72qUzbXsjqWFonBmvV7D5i2X6Bnhokq6xuqvCeYAju1cNvQ4m47i55wB5fTuCR9tHye881kPqaqp",
  "key11": "3VQ328QWKn3n73buyB6bdLQxiVDoB15q94FGu3MSSJfqt99jLYGFuoZwqcpb4RWhji1geyGSmZ5GtXMJmmBEHKek",
  "key12": "3fmiSJegGhJvGFGXf8Xvjfi9e5hsNdeN4n56vMy5T9UyCgdz7T1RaL8PTB4haERHkBY6haSJ13xY6BpE3ZErCwYr",
  "key13": "4bpBCuS3Sm9EPmJGqXwFKnrB5k2itsRYu3q4nyarjBLzmEBmctjxWgUFnAR34TEbeDuSzzH5JFtA5rxC8XkHS4P2",
  "key14": "2zMzRU2hfeGYKZ67njMwtpv5Xf1SrSQfxTaatbtAUxK4KkqPqFFSDF11nrusV1bzPSTvW5CKyxo53jkoSBVK4kLL",
  "key15": "5k6rmyt4CX2vEhbXFXXHy2iXmLcLe1dhTQomawsJaGL2tKWfFXUcxnLxihVeFpXgvjMwUam1tkP6L7AMYhE5phm1",
  "key16": "3Fm3aUJJiKjPCxUWYpaqBTYSGtbWV8L8h8MWNYa8Qn58wLJgSBW6isSJcon6hVyWeL8GctHFaXkr47veUYBBAEQB",
  "key17": "H2LFrCxd3ooFegJRsW1JjTJQzVSGzRf82tPpFgM5dr4975W9N2hjwZmvRupjszkAUy762XWxfJUM23ZdPh4fbJS",
  "key18": "2NCzWw8NswAE574JeDquJejjfQz6WBCefzEFn5TcJ92PATMhgfEc6RWjLJBAVVTpp44RujsHgD68qniWtMzW7Y69",
  "key19": "5oF42pKFY9obMLYgkn7yGUp7NXmnBRHg7CepaECfiGZRhdSDw67vsLuqShTBcAwxn97wvLHddPoqi3A84MwgApny",
  "key20": "q5rPHNiKgY85oEYKLyjzzwm8FRxKaT2Hss5MHGNK45Scuv14Qyoe93ngn7fV98e5RmLxM8WjxQ6775uwz2gHQhy",
  "key21": "2TzXVHNog2UA23G8VeJXH7TVQaHz53JL9xnTDqdF99H4a7nzNCo3wUw24mauXSjoQzc7ScvydckmP8PboXHoaADL",
  "key22": "2VLRBgtspmXkxaaj8axbQh53iNc7kixaWaWjgNKYywUbuj2CqPL4GoyZ6MBQjryHPnmaAYZ1C1jUgVvPXRDzHwLX",
  "key23": "3gwzrnFc5Bf9suGvDASaZJr2Qheb5Nyvx2ma6fxKYwZgupfZMamDpXpTwMFrgKGezD2guZpEpLi9TS8Qhh1D48MW",
  "key24": "4mbXudSbBGdaEdSrTdDLKqFFJEgvCT4H84RaLBYLy24vYXj2NMGNXYonzUae87ujjxRGv91QULEqpzAtotBAdF4c",
  "key25": "5wFXnrPRPgJFDr7kEWX4mnyLxv81Byp63AdxMmYd56km4mMWX33DaoPm7K45c3KyxHs4xyQw2FvmKZ2eCozeHjVn",
  "key26": "2zUfxNVknc1H4HSfHG8e29Stj93szTMwU7mx2MN7JFT9JcBjew6hsXK3Yi2qrVavW1WtwbbdEB1aJ1MqY8YBmcTq",
  "key27": "28jjJ5pNvd5nG614dbWXycdQq9tJuAx5RTiqBW24Vp6UnenFBG2NTDTVy6g7YFZuNrvp3ukEBM8sViHTdgfzjo93",
  "key28": "4vGCw8foYPNUHVX4YFtm8hmUkUrEx7emaeGNVk3oqjeMn1Fs3VxF1B4FR5rYJDjviB7F4TvRz1oSURGXUHFX8bb1",
  "key29": "4WcyYRrja1t6Zi14rtWaQaxdVxPEx5qDbiAp9Shzb5cvNNBtHFSiMVYhwAX6WZyfgZEEz5vJW1TjvU3LTKvkkfay",
  "key30": "4zUx2eBKHvtTyMHJsqJ8QMQyYC9vGBViJ8b1aPxRDYQ4tF3LgQ1XbP7cbUrqmtJkpNf5eqnE5SR4SUXfY6evvSL8",
  "key31": "2GMHxUb31CGmW9EiZGTybJXpbNxHLXaSks5w6XzZr84pTCXmMypE6c5JrKGJrup7Z9XK3xEvorPp8Xmrg2QhfLt5",
  "key32": "48doHXVjczAtuLhZRUmkwWyrBtMmJp8fnyXuPdmx1WTgf3HeMsVLgxZtxQabmbZcSX9MQEz2ySEjNacR6Q58uS7K",
  "key33": "3YkpV3RSbAaJM4nqwX6Vr79j4BCZcvRXh1h9sDL2Pq5geZBng1VHpcU7KAGtb2r65KFhYaEwXXge4ALxqTLJHqEJ",
  "key34": "2w4KMLsLwLY2jTVCbVgQ3xroTteAQvjD1h56AiW1zPfFXBpZTEComesNDbc6ZiSy1JMGHnGivRBjeti5WCdTwQn9",
  "key35": "QPRL6kpCXAkLvko8Rj4tr7BeknFerqGtYWXM8WxTvHFf3Tk1JLerXMQAYPuZDPdugLEU5bMyjqEHQVP5Hq6GLR9"
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
