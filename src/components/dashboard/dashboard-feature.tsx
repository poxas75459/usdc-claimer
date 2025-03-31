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
    "3t1LfRNQ5b33VsEbWZUA8m2tkAnb6xcVTiWi7UVejdSTDAa2ePZrTi4HTmYKt1h3pCgguUQaGnbebG5R6cc1bq74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "457Nt7XE1W1zZ43Nv3UQBXPTkWCnavHwR83KjoAZa38rtK3daDiQM9qYD8XnfaxfLzDPtrbpuyNQbxSrkEMqeUpZ",
  "key1": "48UwKAvpwjt1mGPsTqQMsqu42qsvnZHCrKjWdhwWJftTgi5nFpRUBgkcshh5bf4xBMsA2qKTkWhB4cqEC59kyZu9",
  "key2": "2KZTgDsdVEFGD9jpqYXdbPtLcNMvuzaC7FAadgUAPb7kumBCkrbu272Lvdo9aq2gUgNEmyXjzgBC1LpAp5SxZB1R",
  "key3": "4jguYtwoN23afrmtzfEqqyJXaFnCFbuGQAW5jdpC1zyeM37juhaeGMQdG1G12JKiZAvQJobitb5UyRvS3suqCKiJ",
  "key4": "2GnAhC56Eyhh8kgDfsT5ZXdvTjU4tnnhmdnXPrxL9iFTkRFjCy3wPwjXgPLiv4fxmn6YMUsuKT4NjkZsjJLMBCJb",
  "key5": "3pU54XQNyuzDYpDFBpmnBSEBGvEemboUjy5hBca9UvBDMripNLRjq2PiUYURiXcF8c1wo4dRDdwaU1HwXas9DrEe",
  "key6": "5QMRGWPfPRdYr4r2FXWBMfyYyPxstBkv46bkeFM2F5uzPBEip8WLtq73oXaYTDPCp5Ek8J2NqnCbXDzojwyxdWJ3",
  "key7": "3pjbs5sZfG1ycjRmA9Xn14H729u2nKYJdtFWh54WWq5TmPPjTwSJf142mFZxbRux3ru9JvDBqEBfereA8c9McLKe",
  "key8": "4wX2LEFqtNBkwRzv1wwFkNhUUS7KCmLLMP3kefK5PvBYXw8qgbbuEDDwY7FAtbcc1Xce365H76EaxNyqrTpyTfnY",
  "key9": "34c8fd81ptYZree4yVUMf1eSDHH8tHGfRHQ6YaSBUfLE4mJq8dyHWkiM29wa7aJfD9UUh4rQqvPMYEukS4GYMgm5",
  "key10": "5Ybr53JcVEpC3KkTxa3EhWsUjiJpXQaGkQx8ovuypGNbTRh6oDZ5Rd218kZz9zoMstFc2jnm2dTXQt12Zhwv2NMu",
  "key11": "qbvqADGnbbEZbfkF2xW3mHg1pAMHnQvgag6cXWZaoBLaxA2rW58YbaM1paypxEydRdTpr8VEvsdwSPWhDU1Y4CM",
  "key12": "2NY8tjZ4RwATmKg9U5dL2M3FvPHQt32wya99AmfZrxwHsfEJRTCGgQz8yCPU5BztnFxSrMZHpMZiuH44bAGk3ATK",
  "key13": "3khjoJoaX93k5XAkA6uJb2jM8tpS8sYHEASBAtjtpixp8Lb1PZLrYkkuqv4wLDYcHwRja5H3Ai4BwDJPdZhqtZMU",
  "key14": "gN6P9ToVr9uenmPZbYQjUBz5qNuwSSJDpSi5o8b8TXqSdVVgMUtM2vVAWvC1y5PsxUGc6AQsNgFmiJfGKSTTuSL",
  "key15": "3iN6aYtqFyUULWaKiqeKCj2UsHw6EqPgLwSUJzsTUtWRXu8ehwnmPrtcbiHyxBMvUVQqWhquRy4dygos35A6HLAq",
  "key16": "3UigoTkVLtvQqEX5HEAyZt1sDWPKAuw7TuT7a46q3JcvxdcdhcgLpSnb8n3Z3hH3YYwxJYXuK2Y8gvJngTaPhqQK",
  "key17": "3phKskUvyGGqyCPMJGiJkm86RWexG8KdH5u8emxqJvxiXSQA5QsZc4B4qTRpUGV37t5q1HHPg7YeuyCGJS6JDHRR",
  "key18": "3NC9ZhxstQ9F9ztAtDnvoSMTpvGexpGSAHvPatEUD5yaCfgj5zFHttFibZExnSRAM3fxo4Sy3zWkK7XwvF4UYYAH",
  "key19": "2Yv5DDbC7S3zyrd2knaT1EQJqptTzEzEM3Ne7tv8ccfNwgZMPW9wRCvUtbUdAP8AJt985QuZfySQb3noKxj5qHBn",
  "key20": "2DptVKqNvot4Pco7EesYVqzyZkigm2e9PJjSxzNgZefya283JQYFCqTezL34EgJTuDQ6SzN4WpuFnxoyRXHV6FgK",
  "key21": "45imgo9qWo4E1necR2SPMgzzaCNo4RJoTSYvc8ghQGR3v21RRZjdTb5kmwahBRAPFYUYaBfPAEQ9iwPXcxo7vpdj",
  "key22": "425wGw4JuRPvbVXuKWgm7jfzWw7BRs98owsG9NGKMvnxvwVBVdjTpk1hZGqmFmU4njaGKvKZb6enQgEsLKhdbF2f",
  "key23": "3BaMWVwM4a2WSwft5NoB1T6vWStSSNWiqQZS4LvU8nKDyQRFmVRcvcKHoXpQyKN5RtdN6Ur8JS9EDXx3wJNYVHJf",
  "key24": "4a5YZogMRsehGS8ZEvKW2kQiQPhbRbpEn6HbLmxV9jxok3wNRKdd6KrNAu6i4wsUTPgFboBBJJqJ4vP2B1josnGW",
  "key25": "41sKHqv75qaEf78XfGWPA6Jkr9XUSkfTjrNjbxiL1FkLe5DgrwbSajDGQ7Hho2b2b4ZXYYF6HxNm6rUzoCVjjf1R",
  "key26": "2No7Yx4FZbA5h4XsmSCg8qfX7WzTTFTouENEp5pZLfm8Hq9SG4rBF7QTgYeBL431w8P1YAZfAQrynuRgamtxc6Hx",
  "key27": "VtWQZAwAbZRSY2mywM2q5FhtT7bNVZqok3WbasP5tPdrTKjwz2bLLEyaB19hch3F3pZ3R1ry6B8nXo1qZXDRqsY",
  "key28": "X9oeRhczbuwh4H3AWoTHCg3R29Jti6aDewf8Bfo9joyMEh7VkhVveBZVEcG9NWsp9PcvRKa3SCRMjwYai3anfvJ"
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
