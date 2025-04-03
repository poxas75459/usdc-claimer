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
    "2eQPhNKrmPXyzxPjy17S2ZqJy5REWTbd9ySydnYrZ5YwG7PFUjUEz8srrkiv1evZHWhhzauWUGarbR58LzSBHLmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaW23peV4Uki5DqDrgN9Zj5qA5evyiRnVGcQGdkGMy2FFDTH6CAy6tRcTDA9ZvYJ7o6YgGfaHNaFD2bsmvfAVke",
  "key1": "YZ6TDt9wFg98NbYFEWYqA4CbVz17YQTv8CEZtsNx8Senrrcx6EjKkxvSLfBDvTjaSacA59MumhfhGwJvdMbQa5Z",
  "key2": "7UZhtJPe2Fu57YjQu5mzxcGfKPEe1NZNmXWqSFMUPo1RpejNw3CzWoqPucSwkqA5x9UGxPab2Zq1EgvtJBnf19A",
  "key3": "57JxoQVit5EWGF7Xx3zTe6Z3TFZj6qysRpeJktnj18crqXBR9xjfkkAgfaDyAMNUzAcwXqsNuBHw3d4aR6pbV3ud",
  "key4": "23MsjsN5EFchnnxGcPnK9mMhhBbXpyJ1sCUCY6qpM88jfeLYV24tJWuPC3oiuLvqXQuswGshYYwes8VDZNEzEKFM",
  "key5": "5MKehJFZdVMDYFjV2aE7B2xusf6TtEWN5koDErWNQZwAfb18szMfsFDgLtvHzPp6YKZBiET8jZKtx8uZJJJzRNat",
  "key6": "FheDiVSAP36ZaLFLs6iSkWuPJGN6vC91ewcv5UvaJXdwJmXgRyvf3pawYRDW39CQwnXoDEco3L8MTCNroWBsLXY",
  "key7": "df9XeFDtqnNiPBbH7Xrn9nQneWAqaUpezjLu56VzdHYaTLnHm6CBPZB7jP5d5Ejzh23iqY8iWxHgVbJBYfFveUB",
  "key8": "2h7RcEyFcfcjV9PGUnkvyDAw1Lwn6FtCfhredmZuuCEc3yYs9YNYbtZsEhCHFzxNmrjP8qL1ag4A647jLByAcqet",
  "key9": "5tnrkhsTufk7VetJTbezvJiDWf3rxiXoZpvyfNaZFTfLq492AX8gS7Pn54KEgcZYhNgHycfPjKxq2zDVS8x3hrmm",
  "key10": "5gFjdUnnVoXHnb6tRQBiE5RPHx35Hy2K487fmRbKjnhf3yWRQ5UZ2SAb62DugX677hQQt7YZd733P5vJQxGCFPLa",
  "key11": "xPm54NmVo1rbYjTMXbzdt3annGXENeRVyefjKJnh5mQvNvf97S9qNVGrkZbNYyUWNhJbuqafnHza5nQQfYZHyDs",
  "key12": "2MxuBnQSRacUcE3jbRXBGQs1oqWoEdyqz9snicJPvrcMg2F1nkixiCx113rFARaKroCs39U84iK7eZZ7uKrpqZ7H",
  "key13": "5kSc3d46aCHjYmswkjHr1wuCdcrY8e1ng5pVPyGgSph2L414n6jzkLjaSrc8C7hTdd1PdDjzp1oq28DUb4iJUhza",
  "key14": "2mNcrXX1ZSU8c4gYLZTGzYqKd2Qnbo3F1Ze8qKaTzb2HrMD7fHdTcxLD9Nh3APnaWvx1YNiamyF5EZ76eZDiETH4",
  "key15": "3KMdLTeRsyTwvfUpGD6hdeJH9twHNez3ZuS2D6U8JPQV6g3kfZJcxJf7Kh5hmwhDhCsNKzSzwUp4JwcwzQKEM86q",
  "key16": "5YT8m3g3YQvJ3Tz2hEDvSg2uRZuJCDc4Qbk5PYAakz3hW12H8izL9CDNVAs7JicSjWjoe6qDdczT1ERwMALyKYQ7",
  "key17": "3vu9R3Xs6Ae7ozUpaYoTw3Qp1Z5dsjECWpSVFDxPwYDPT236JjuApDCpnPYixRJNEPTGVHemnMmgK9bjnQxXYSp4",
  "key18": "4fiUoCNXXkXL49TSwKXuVBEDnrDtBawFn177ahpLkUgjwCYxHuDJVftkvxHQbqpxXBunqStB8kQFrfiSzN63Lx2u",
  "key19": "4nCGdzzQzHkF8hABREoAHHYHmn6p9g9d3XApgHp9cHhoKZviDtqmckRewc5hFGV8s2C9jDxcF5unoVmqWQFdaYrd",
  "key20": "3NTP7y6WdXVv6ubdMBAkTSqFPzcgW6Q3U3iXtL9M3PooZAqAJ3gTeSnPvmWwfYAiU4ybwtNSFmUgdznZP36C8kY6",
  "key21": "2J8ZP5KXGeoM5URUcuSz1HgadV6jsEHDvrKK4M4efL5Ph45hKhXQ6a7Kk7oL9QCf8ETDStoNaFssv1RBb96r86f9",
  "key22": "3mPmBnijviZQSo1Ydvssp46o4Ugs76J78zNmcHejRQa31diANGqgMee2gZ2b8eKPa5kpcPutS4AWg2n2JAXEfhJE",
  "key23": "3E58rGaBkLHKBftPwswFNXs5ByjMuYv1uUSpNhaXJ4iHZWpWnXjFEi3z4q6ogM7YQ8grNM7BDGboBPZscMj7FTQB",
  "key24": "2W3s9HuUQBqgSaWaECYh3wjY1NkECXWeRGbJg4EFesvjTqhEWMAdWE3MNQs79gZZACXkYmy3jNnNQthoRNJpUnie"
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
