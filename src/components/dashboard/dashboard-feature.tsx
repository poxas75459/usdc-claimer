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
    "3qUP8NUvGnH74mjAyx4sGn9HMRcHXPtfCmjLHJo23zRREwYvhPxxcbVp5nPd8tpxo1LxtQTKaknrPYPZ2kbTxcZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVdMJ8K7NA82vYzBBR3TG5AYxwvMbpPfUdpmeU93jNuN4q8poiJE79cVRsjSdPZFf6Uro5jTZWMufaRRUJy1b4o",
  "key1": "44XHWHMLHyc2b1Evj3xDUtfJ3wHyoujWwuMhgjh5rxu48DNUwmo6GyLUKLAyqdNU6Htx55zCXwmntk3RzsQRBexy",
  "key2": "3azBb2tr4xhK7EFvDEBNHhNNotxiiR3onqa8xiB3cZMkHeML6NCcVQqanQWFuLS47j2MUkZRbiRcFTpcnHfN9qFe",
  "key3": "V6JmjuTiu7Bj7v1Wn4JW7ejMoTuLzAsn7otwRhLkMkHFy7AEpcWLM1mV64qwypYrbadM839qLRX9BKkBwAWqJAy",
  "key4": "4xZ3ssXfLZo4UjUYg87CKhMk5xEtdvGivnETQ2hoC4oKho5G1y5DDKHA2BeHtocbJLRpwZGNSddDkoa5cBSHWTHD",
  "key5": "2Cxisd7ZhTfjeuyn2d75XrPzv8P9ietswozRAfoM2GYfTQgASaY9SbejTXxHktDYYSZHG3PN58JzJdxG7aSNrJ6N",
  "key6": "49Z4KCekgN2mcgtfDzefeCNDNQgkLxohMkLgkTDnw16RYaNmjkB2HBdjgLowLsU2eMn8pZx96YKh7sZiZz9yMSqE",
  "key7": "3KA4DzpKsWiNxTpvUxhJ3rYYabFFqJ9k2JVe57YPbAYbXDEZR6k9q2omis5u5iZ1CTpjK51vFHSwUsJLHL3qfp87",
  "key8": "4soKXpKGs5DQM9ZZBr9NVDQJQrTbYQD9yRNk2Fzfb9by7L9v2BxA1EHNnDuqVYZgX1f2HQeJsy26FKG1UtYSqSsH",
  "key9": "3ewPcueMDGvyKEKyFXmt4gKVLRSGvb3jnitTpB8fjJiC8dNpywSCBG5pyN6heoUj463pvRzxCSRs6AjFykFF63Wt",
  "key10": "4ZWtn6AG4Huru9TfhTrJbV3KoCXwXVaR84y65G2QViAbGv3c28vQ1V7wwD1EawLxjpRyA6DHsQLBXmz26tgYzUgK",
  "key11": "huvXB9vtna5ExnDWUzn6r3SZ3YCgJ53EPxAT92kn8c7bZ3G9Ufc4T5QDTZisD9PyQuabL9Ajp651bj7bCo8r9cn",
  "key12": "26qVzBkkmqj3cmHaANVBKVe98cfNXpE6hHvvPoF8uhje5ZYx13sAgtVP2qPxR6Uo4JmNbGNa46MjRgV3nw6eyLVu",
  "key13": "28DReaHsziB4dxtVxTTe9KbBaekYFinxJke6QVgFdWdaYJvkos4611HepyeNM4tvqia12QhNBdWcS1VNqjZuV9we",
  "key14": "HvsLb2MUAZ6MQ82kYvKoYLkRMjohbn1vCF1LL6fKyF5qMuT9heg4k3eKkejLpk32JRHmhwS3PGHmTJutHLyFmRT",
  "key15": "FNwKnYbGJr6PChv6uTQcrrRHgkSyyJjVe4FBrMP9bGj4FvSNh2qvj7n8uexauEXkF9eqD8eevQ2jsRFi6LHK2fj",
  "key16": "2hmRkDXjRzaSWiPdpVRmX3q7XymozzYEUttNLnS9aTBxFNdxiNqy1fY4kZ9w5aiAozcRsNGVrePHYmmx6oJfcdKB",
  "key17": "5Tv9mCSw1Z5yGKw5cQjK56AGxAYUxQFnej5yuRjRtB4a2RraAitZDyufA9ShDf2rZsrA6YtUUN9Zajm2bU2fWRSv",
  "key18": "5hPkuNX25buxsCV5SHRtCS5AKXSbFDjXnj5h1FWM4zvJoRk5cjdL87qVJWbQzhceyBWM1sWq1ed4SBFwjbRuUxmX",
  "key19": "4bTezYRVmtvxT4tC9BR1u12wzFa69TRTttmZjHCxT94KVcDpRuzTy4GMj5hBUhJAUQn1TGFixbdrCZNH94HdZLxJ",
  "key20": "4gqyQG1ujdvVdCPwCZ16AYtyPrimwG3AtMLv6f9JjyW6Ucirt2f7abWeLrQ28JPbpPpbEoJJxTDxYUq7tvUdYQXw",
  "key21": "4TKKTApxNStMJ1PB5kToASSHMNdcyK4mRzz4RJUjRUx2MFDmGq46dtTHX1VjLktxgR4XMeXD8KypzgQv5P81dK69",
  "key22": "4hLqDH9kPbQG83bFPRiL1k9ApjcTAV69jxdReLEb9xAvHHgaQ2CN8MT5qzEYkqTq4URGkhwNBDB6TpZXCZz2oA3m",
  "key23": "5CyH2tswYYgqG758rxZHBdvwYGFBRSVTuQ9Q7SLP3eeY6UHeEXipxf5PJ3cXqTDrsJixBnTnXfetmHUMnKPcJfWW",
  "key24": "2nSKhKL4AZXzRf5cpXm7a6gWmMUUcQfqw6TsaKKMxswpJ3Dh8wjsdqVLYNaX43VGEzAcHFNBhTkN6zxs9UE519yx",
  "key25": "41QiFrtbAVm9zMEF4eh9gRsVVyHgaAZPiYnkgZ1Z8srdPmxKiNWhBn7zc7F9V3pAHroT9UZRB3JTPoQbQfcioPVn",
  "key26": "45aRSTymXnmVnbtXJmzqZbbnpC6UJJbTzKTMoLiSJwiu8t82yd9PUcBxe1mE4WEdCFMypZraqHhhbMPuNBfhABfW",
  "key27": "2Yvm1z3CQQatwdN6ekAEVP8kEjy4W5GaGimUqZt167n65Uh1P2sdS1mtkpo8b9WPnFrbn5ypTmrAc1RxYR6f314P",
  "key28": "3Wj8xtw1KfnCw3S72ohbv6Wkk6M8QpkhGEpDPcj5BApgRhznhD1LLijrVtM1CScV15u2qT3RpayuS6ebnJ2LxuEx",
  "key29": "44ywVxLRXVmiuV5GxgZjJvKuH9m4uXRJXLDX8DHdCGhkh7tro5khdA5WmsdyQfsWF7cLEMsqXc2PMg7rftKDrGnT",
  "key30": "5ULBtTA1SQ4G34DyATsJTPt6Xw7DJvwV99JArYCteFh6MHg3ivqWbMSWuwFtRdF62zYkfhWTRJ7Bsrk92H57XYhU",
  "key31": "29QnpLHStNwJbx3bkWbBHsz7JSvTTz5urwGU5rkRL6eex5V5pZhjspjbdEp93phdA83y5fa2V2UNnG75woofAsLV",
  "key32": "NrdMUxdX5GAzYUJ4h3yvEoRAmDtdCFWaQmeLUjLcDL2j85eXuyV5mX56qZKzCpmgSJJv22N17PMH2oD658JxniQ",
  "key33": "x5oT3PXHPP6CsxZWEh8HPQjPM7AE6nmGPtWedaohsvmZgsymMKU6Nfg7g1wpJdKZSYg78zHuHW7foukQ5UXTzdM",
  "key34": "2QUiajXnynnThtwKbPMJ8UYtLG3Zup4xFwXrWZMmDHGpVLDoS5FZdhVJbYbkAUNjaeLFmUSg9iGZWzpPvbpdAS1w",
  "key35": "2mLU6RfXwqn6LdHsBxhfcb4j9HzGeYi9B7rsvGMwT8M2ayyiVSjsiiAfTMhBjjXqNaMHXkzbQAFcossaQ8e8hNBq",
  "key36": "CpLHKqBFHYEPX9CRt6cK69WYwKaK9orgCxvUWKwcryK6zEpK2htrfPWp4nZD3F3kPoszJKGoyZTcuJove5rtUxA",
  "key37": "5heBHpHF7QQrzxzR4zcwy6AF1h35jn6GHiqTEZbqF9fjssmexfy7Z7aQF5MXCBGHL3UPjNJp7gBiJmG6jBDoccrY",
  "key38": "29EbjJkF11WfcZicvaWEQYVxTwYiUEV21MdPHcsYkdzbY87xyDhaCVsUs3SsAYZ37aQCGHQ49cMs8NW6LdKNDEsY",
  "key39": "in1e4e3chHcEpVc6fnnzDngQms55W2EEfRo2G5Hf1zAbBqVtuhGiL2Gg752Kvc142wqt2A1bS1bSnRCfuXUh11H",
  "key40": "R2TtsR9J7TDt7JMacKFf1wYNDy54G4wESnf5cR4ETxoFPZUinNpgb24WcMkgK9y2ZYrA72NnX4kPqetr8yJFMzi",
  "key41": "42ygLrynZeEaCUX3543ZH3EKEruXbPAWpskL6vKzC72D4MhJdNDd2Rf4wqxBwtVg8pFEM7sEECJukRvRxMndP3oV",
  "key42": "3ubHjVRB7CzKCXf2WpVYC4fPw5icE3iKcHyhDQVpoHZ8UR3Ljf9pBRkA4kHSXGZi2yQZ8AeB7DEuwfCq1oJmT2ZK",
  "key43": "4o7MjGk5jGCg3HvuQTB7xDWygCuDrdTvrzQtVyRQR1i5RfhZWGbBwjXcckaCAu2xJNrD1uta3Q4Gfr4Y5uMK8sLj"
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
