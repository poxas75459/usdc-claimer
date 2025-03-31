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
    "gWCWT1jNLJziTYr7JUSRDXKvApo1st1ySF5Qg2fArMwMpPwqXxgzHK5gs6yqi1qjTNVpqmRDWrnoMmhCgoNSzLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AyewFHBAvKNdHxyBAfiHxCsezYdkoJ62oHuCh42psztnSEhKAqbgeuYm6JWx7emCWRSGMPzUPB2C5f9frdXnVUQ",
  "key1": "5b5fGyNCKap5g1f1tsXRggaBUYPKqFJyKkbqaWpKYfFwfv82oBoTscJSeqpx9e9M3RqqXbktgMKggiiPMCy2KbPM",
  "key2": "3Fi17fX4pN57BdDmb3MkvB8rq1KaA8eCTkyqaCsEJJyMqA4fXYRK7AzoeZBErNCUbj7QSUoTrp7QjVSDgWv8FEmQ",
  "key3": "4biZRvcM3aS7xiJmWEbx6v5MdcRJ8GU9YD14LjsKiZSdhRL2srPiTQAscvQc112dx4FGJKKoWrGyh3eJzmB77fXN",
  "key4": "sdzDg8jZx6diZ5pLY7YYE4pcJjeMwnQY5fQFomb3TQhAKvMc8p9UDZwJGSA9RYTdeiGZJb9PZ13J8gkb7mLrTbJ",
  "key5": "36Pp8hZ9LWwcdBcswR4BfXdo8dWsW2nu6dus2ThTsNirrEc9Y1BHsUuANiWgLpgMovKMHUSnbAkfN6hrjMdvNTW9",
  "key6": "5byAA2xCjZJx5JA9nVd8YZicyo7W9FwTjw4ewBZrNWtj5m4Et6yeDS94CGzHZr1n9VrADnpAHXQKGjFidWiU2PE2",
  "key7": "4oi2jdKiPqkjMnhHiBqLgtmmQCkM1q1B7Xbzk3S7xYBDhrZWAdtjFdQD9qgkLgBDWCd8svYhfhNFzb5u8NA9QaKD",
  "key8": "23xGR2MWYKAZcdNkJhnNt1uuS4WkrsUW5Va3v3pJQvgYTGVoTC32zxyotncQjywav5zywfyUSkhuBr1Z5nM2FY3A",
  "key9": "64nbCeUhULuDEvsrQodMjmyKkzAd1ARrEWEB7xbXTMg4Y9SBYLrZqUATgqq4kdDN9CRy41ZRw5JdTGxwEcigfYp8",
  "key10": "5Z1BxKqdDynEgVNLsY69ExgRL1eeaDAevxU9VuhK1Dhj57NaheUQWPGkyTPptJJRsEQi2sjxgdLAxUx7LMwEVWKp",
  "key11": "5ppPkPcKzM2sgTnk2vv1rwtEP66yoZGuVjqeZcN9Hdby9QrzUcnqikBo1Umu4GViYzS2hGFCaMAPf1osywkDGMZU",
  "key12": "5QTF7hZcrwHNQijcfEgg4DW6TMhn7fMpU2sAmJr78avJyBmJsN6h22umhLkxUbZHUZKDtpsqZTfgYbXX8dXYNjgi",
  "key13": "2h76DTPz9qUb9VgigoGYsMQPU6XimgGHH4GPSyd7LqxKGoarNkP5CkwESqbvuACUESSAYwFJWTuRExe5QifetNZs",
  "key14": "3azEg4FU5DPnmGdn39STC5xA5hpBhMifxR5yyHCFwn5wKJD9dwQCPR9YKasLkeopLsqMqGQiGsLYAU71tn7X8QiV",
  "key15": "3QXpN1kTeBXDZSfnKNS3Z8fVn62ChADRsdxezMn7iz2ePAFTe2FpCLK5nVeaJo6kFDCVth1io9botrhMFyKL4pdg",
  "key16": "4DoqvQ2TtLfrmitB8B9Xu8PPh2Tar6uZTA8sddCwoAtVFpqgNhg14LhqJmCEW2wNSRg5ABsTKR72EC2snjNp5QGe",
  "key17": "584772mFv3ypi5Doy5VSjtfuLsczGdPCSpUGCEx6hM4yLsGFGXsr87RFpwTTdVsJxNcRJbtmCZXmxTjHP1j3xw94",
  "key18": "4nZ3GU72NNxu5epugvLheZRBT9LxY5oXDHT3T3YDHmzySRjydTARuhfxx7yWd9JdjiHRJbKcjHRRWSF8Ennf2As3",
  "key19": "2Pv3ca3n8iE2QsYXjneBfe1bkuqph5ts9RsdDWE87F55RPPXNzr9bj4KUVdaLH18TRVcqsUmzkisDTcD3GhL8mqp",
  "key20": "3HFHvGuRGB9AsBxAz75hDY8hzi3cc2Utk88J8DAqAmHgrUqCHexriNmmZ4KTf3vohSGHDAqUSz7XJFAiQiQYsiPY",
  "key21": "vteUd2FmvbH8fCJaxH693ZuxNFTDa38vv8CeziTVqoKMv29yBwmc9Va1LUN4nVL9Tywb5sWmp2KXKW1pJFkBpUp",
  "key22": "2xQe9df2wQDD5iMXZoKfs1Ysw112kqXzknRxZ9GXHeiyH56E3GfSfxTvhdGHHtzJ3dXwKah48ARZRirFmqjTTEYc",
  "key23": "J3N5myRUDvLMMNHmX4exyC5Z2XFTkUvf7m7eNC2Jf4BjR9ASx5aNpTf1s9c6YSkNABtZbC7gwXDfU8AeFcN9QwT",
  "key24": "2L5oBYRfedmqeCfZCzNPeTt6R75XqU9YaxFzKyFGzmx8siQDbyuXZwEQFGvwwiK33TeCT92qSvESkcnw5foUvAm4",
  "key25": "5nCjMyqfTe1KsAyfP5pLqUnrJBDcHRCAnos4Xwf64XHbGoDJerzX2okxyWPLaYmvckvwtPqQc2BMGKjLzTiWtcvS",
  "key26": "2HfdCtMLRQbitgQrZwvp1yrT5r43TYixfXgPRXqzUUHTvATUnfRmfnWUXJHFPtnpfV8vGfkwmJE7BCTQm78FudjZ",
  "key27": "UEpkL3rphbgA8vtNdy6BQscAJJeuPwGk4aCfgGq4CqzR1yqkPFSxMqZGH86Aw95eP9kYJfLjJTEfYaP7T6QmAbE",
  "key28": "5pqzt4zNYatN6xSrfkuesMkhJX5AQNPHyfrC45SuzE6E37QAFoWmFAhfYRiWvxMUahYJLSwfxg8Acaqn7zUuo9wt",
  "key29": "5fHG5knRwJvQw85C93X2QhQ4uUKiEXtYWkgpeAz6DCEfXM87Y8qbR1tuhjgTin7Q79YiY3Lc1ffBouNgmN5qkeQo",
  "key30": "2ipywtgZTXRxPBXL4CHnHJ9r7yqCFvTs15QYck2rDgKkwHV9rBMiK8p3p7dXoHiSFgXPHPzBz7KisPudCuHYRATG"
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
