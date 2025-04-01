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
    "2qmbU3MtVzEq2TQPg9pBi9eLsqmvF68ZtsRyCDatV6SXZ8PQ1TX9wrVU8NwreQb8abgahHpzZBsynQdUEkufKLWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNkGDW1PmnHFeErZaqTPMMA5kN1kK5NauuhAj3sgSfxANfXYPrj5ykV3xTAGJffmG6uthz9G38fbLGBWWZhS1fg",
  "key1": "5pMsr4uvhsW7RCvk5idSAfzyg4TeqKb8JkEckCGqSXVu6eNZn51hh9BNSQKHz5HbSZ4eEk9cjXwVQ7coBHE55f6T",
  "key2": "39nq7SqSygp1HtCBC4w7Yyayta5iHT5U2zMtnDbYHD4U4mRtq5bYRmNPCzsF33fT1g4bTiaKTL7Y4P3deecwuRiC",
  "key3": "4EE1wKh7fsfopAk7oVmCNjSB3YnC65Kc8AvdVjmKrTtdfn2DCN9yYLmdJXdMFT9Xqo1ihi2wakT2NNAf48kw6MvC",
  "key4": "5QNUjeT2BvupHWatFd6NLe1pWkWHUiKVmp4fRijBBPhKycDVVCxxXHYiPcSqPH4uGHuqtK6qBpXXVXaSMgotBtdu",
  "key5": "5h3Mvb4g1EyasGXoz3pf4T7PWC6om3rMPafnH1GWjHMQHfNxjRew545eeQkAbMQKMeRAVkhwswbER8AZdfkZzucP",
  "key6": "2w4dYXoisY3kdwsWNViuBJWWT5dRhUNdhgsDd9EnPXTAmzV1vGkjtFE7TzmmyiKjyqh3QbxTT3qgY6DRcK8ArEBH",
  "key7": "2MQ6ZLCFfd2ST2QoEzWMt7x9o4jcbr1XpBByEDkk96EkcUkP4CzyAwsTWuZeVttYtS5LsRjun8c8y8FfnUZs3mt9",
  "key8": "4d4dtdDhZbPfrmEvTfRKqnkrAbJ4LWtoMczUbwsgQQuhtTM9wEhDWLwTdUpwA6pvYABF4JrvMGE1qHkZZn9w2wr9",
  "key9": "ZyfpT3i2dV1RpfDSfCn8UJ4LFhAPWyTjH3XqYtrY2F9HLFMWkqs1JbVzfBSuygMSyJNmfK3m33uStf8nhgZb12j",
  "key10": "42vYY4ttHoJTFzzWo5UgxnTdhDuC5n13WfecbX38VLG1kYrNNeTRg7LmFfcfSL8Zf1hY9Q8V7rRGUMUj6Z6ZcJ7B",
  "key11": "4LvnFAwEcg2rKTLKjcp4TKi3u1TVRPnMeewXWtd8MsRR7NhXCvariSSZ3cPNeatkrNr3FRD5Kwa5gCJ1Cm39SaVB",
  "key12": "4neoWd3jw7c2nY7nF7KgawP2j4VMMUN3RnX4YgKpWjQyQujGDtQu18yYAfnKSxgDYuyUQSZZfYk95BEdUfcm11g3",
  "key13": "2JD6dpGpQx6cDyQvn1uQgavHC5Kdr7H8BB1aofmfSUcu4VJDkPDkQ4bVAmXjk4MQajXauDLK4bYjHrTBAdCZ7f9w",
  "key14": "5RmzvezPkiGLevx9mPnce6Z8THANMLviB8Qw1mqm4s2FDffyuGQ1gerSuvHSzeXUJHL4YY5EicP654BDR18rk9cf",
  "key15": "65nnrNZe5ty1rLgZNPbCvQKhjae8R4wsZM5dN8ug1uVbry46f9nTofT2etj1wwASYuhXNXtm18WRUYAc6G2axdii",
  "key16": "v8Yz2ikrYg5zyUUDMadpto2ALKSZWJbq6FETU8R6jVYc3zgXqNu1Hm8TcSgZ7YhUPySbKnv8jrAvgppNtto6MtK",
  "key17": "64zLfs1zJxGzKBkKgBnyinRPiNXFWnbbAXHhiR2CJqrfc6xyQtWvAG7DEurJiFFzh5wY1jP8BepuBMWsGTKBv6R3",
  "key18": "Dsa6XjjSDfR2z3v3hY5FX6tifU14goRJsz2azh1hLvCtZkJKs6AHG5rDzsUoAsCuawkNu7zKajhVPJmHxsV4nk8",
  "key19": "2zTzCrAZUZvmu5B5uJDPjNXtV7YNUvCedeVqhJUYT6DNRZ3Ehm1pszHyCvdw1pqDKJYFBaQrDHgqarBvExWdDSCb",
  "key20": "4eTpvtT7iXrF11YbUsvTgEXUsbjeV6Z84xEQiLHTjZ7u2s2mUF1KdSAznh98h7X6iEWFHhS5wATdeyw748sMF8yB",
  "key21": "uGH177an1pjZ7ohwzPKYzdYkZt7v2WCS3wNVTt4RSxx1wbRgtSXLux51hjfSk3QnBH4vURv5VrHRtsTTAR3opcU",
  "key22": "5hVWnoZSJFWpczLUQJMHZhraBaPZE8Jm1PbcLWEgsNEapwjoNrHnxa1XhecnR6SCYt7yXV4QP9mhDGddYeocauYS",
  "key23": "BjGoM5fkUrfzNgkg2SJAepuRKLTV4CEKAbHo2qYQpPCKq17LEZdkv21WokjPJcdccLxNWB24i47j84yFafUUSEN",
  "key24": "27hEaMxxSATT5kqssbVbBggUu7nTn4KCKUwAuvmc5GjUy2rMuKW7mUJeQJDEuo5Botc1EuBN4esNGneqyV4nVV97",
  "key25": "53xovqEBDzZEjZf5FDBaeJ12svr9839icZgziUzXXQvX74K6hutQGhForPuuByWLm3vriu2esiaCd1PSM9Pxh1yu",
  "key26": "4wF7kd8DWuL8biHx3c2WPBbACHLZQkgkuUcegitYhvKbx8X32PRVb5Wvjh83YnBu2UaA4PcTbCuxtUEvxekHPk6S"
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
