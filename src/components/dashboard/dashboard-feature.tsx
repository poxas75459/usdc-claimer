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
    "QoLpJnHMEGj6L9uYjhgjCEnFFV6nihh4L7AgYeYzPRK5y6MZQoA9yKasau8FbCP6iCCjzBA288uadaYeTwjrWTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BTiFtUQmsLU3ytbDi4SqkGVQy46vs1DpPnyWpFRbGA8PRemA7Cgr2jpuhp3GzK3k47jHkV8T7BWFauwLo5W8Lk",
  "key1": "4piHTXDanZMnKdLbrt1BWRo4GYPpLRcgYWVxQNzZGMhCWrocFiwzE3B3u37qg2LoRLLd4AQZBoxz2hXetfj9JmPN",
  "key2": "3HmCAPKKP7QE1q8QpWoTKRW9hV7aZMswP5AivQozeHkRegkFJ69W3zD8oqLjKASAFpkdTR3EQmv4npYXXd9D4QiF",
  "key3": "4629NG27Z48hDZ6vQz2ZEDGmeo8qDHnRqVXLvRCr1N6TGSoVfMujNmUhVizU4iyTygE4uFEa9Zes18AznThJsHXX",
  "key4": "3skF65od8Qy24GMaK4UEiScjfYMTiNSgJcmoBvhFquVbGrWDgFMyHhS9xLiev4saSsFHtwKP3cZitYspPEv7xxEK",
  "key5": "4HXGT77xeeRnZoVGeKMwAyrZARxDhkp5FfUMDmqsjFzukLyN12C5pL2keAEhJ8BWf46HXu7qGqG5pnEAsP4feCan",
  "key6": "VcLrLeHHJfbR66A3w6ooj1p9L6DPdQyWE3m2odGAmcVmDRr5hSqRvVqNRq66NZgmDZL8o5ivRurFCnuETaTbNEt",
  "key7": "iAxbEG9ET2W6mHSjsUnYaGD1UB26iRWUzyD2wspxEYXMKcZjBxxYmz8YzFU25qhbfphxJBd5bZ6UJD5pEzVHtL8",
  "key8": "2kigMG6FLPYadSh6GsWP9CYHJbH88nV6tmorNjxfvGp8i226zVhYBUK3Tz4CFTXNVg6hgR2PGmC44pdqoMJADxSP",
  "key9": "bfnTbSSvGVhX1Eg9n6nNnxafrKugcUQy8dsmCDSgFcxtyzJQQ47FFE93pj8P3GnWPy7tRKBz2fSiNG5SzBczMW7",
  "key10": "2see5gKuGKe9dHLuzwfyjuQadDgazR1qCBhhEHBVe4ZUKVS15KthHxoDiSsLQmNN7iBE7VTdDQBuiRyQMEKEu22E",
  "key11": "4TW7TZBikpAuQ1UoaCUXK4FbtsLfAgVx68t8rMy62iGdhi3DNqG2rYiBD4pzZWvLMP9pXSo13o7eFhvmRVhZ13q9",
  "key12": "3EJVKJdgaLGJ65XKJiiy6en2v6BrKk8hFFssLT2fXzeKTBFYc274b2DpriACiPQnhf4u9LrCmvGy7ZtXfyg3etc4",
  "key13": "3iJXvpXkVkYaahMnnJNUkiFztavDTEn11YQSCvA4nZos9JBnznbbn8FZv4fz8JCAkDvhybdet5hLc36MA9B3LwPw",
  "key14": "5SXkw95Adi2Usq2iPfteBJtMZtpkATZA2ZkDwvB9pHGboLXiHW5DjXqJQHFJYRt8XqDLumBEaji5MZs6ojeuQMxC",
  "key15": "4LXKX3UMqqevrFi6ti4d8wgy9yZDMH6pK5TqDbwJz7iPMpFUjTp5Dtp1mugiFo8zdPphSfoUPhvd2W2SzB4hcbR1",
  "key16": "4crdbb47GrcfVjMvn7wNUaNqqjMVPwLekaA2qJuEZggPj5pjsn4pXdkUj5B3hY9SwjgVGFASauPBbQy2KTrDnKNH",
  "key17": "28uz3tYH1ejWvgN1C9ACyTi91QZNCxLnVr5FtWWGPxQcNBGdGC3SmxQoWGKFEunHbRDHovXDvpxVUPVv2bUaFTNU",
  "key18": "wWt8V9bFATSVyEyejYQkeEwcn5cgwttaPRuGJ8APqnpvNJh9gTFwf3ND3UvzCykbC1hnYUXwXdJLuhWQgqbM4DL",
  "key19": "5tSCrRKQS2ENRRSeDx7kEhnCKR4Wiva9NnP5dEZ3xKpD1booQFdvk2wujrd2d24CfLhaTCtizskoow1yBBFQn8pS",
  "key20": "2zpSy4R2NLPntgerxDtrTHzJiKxnrswRGFVw2CuiVViNEEesTctmjFMCeh2uJ96zyiw8GHJoYgKYK73hDiJMuamp",
  "key21": "3aoZ79U7NPXvaBr1LMX7SXDpFgjP6jYgFm4UUuVp29xDWRyFkLM1TH6KdYqXDBMDH3r4Wwc1RuL4LZkCpDFgyqbK",
  "key22": "rc9XrRKx3WdBVaVgMwVKbmX54xYT7HSZymMUBCCLNBPNr5owguqyxE9aVvrh6k95AM7GzcMaf13KrvH7mqBfAZJ",
  "key23": "3Hb5yBC6gkccF9S4M7HZogSvmoFMXYKAnEBt8WfXvbaYcKpTrQzH4KP9KY9RYdekaySA9nUYT2zgDjWhAQkEPt8f",
  "key24": "4kQeFmno8QACxyfvJ3MD9Xd5SLkCGybGF2yJDgM1zeydUAjXHLz8fQ1UQLBfCcd1ikCiHRXux9n9o3P3hMH1UMU4"
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
