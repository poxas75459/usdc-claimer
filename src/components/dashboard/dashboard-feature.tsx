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
    "LuVVsTwaXohKrBvxsyiy4QjvmSVzca5AJej9gnov3AnoeB2Yotxvs9fbbFx7KTnDLbmrjjFyJiKJYoAyWUFzCyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQRwikw2B2DBtsoMRPBp9dbW8jprbYV4TBCh9pLRVssYzS6d3o5USg1ZDjvW2X6JfHqytarft9f3iTkSwMrnn2e",
  "key1": "4Y9kVBNtYVETKwUjc9hSNr7UHkVwExmmqF9WasQVjTHcbKuSkxDNBwXqM7EBDBr9baxu9m5vmBkEdqXsRzPxbVW6",
  "key2": "51VdENC2VhvVxpKEbXoqPNC3vsX8vN5iZRuscMzi5cpj7bEsJPmdeMpvuURMubHL4VSWvxnZguZYQPzgxzWTdMDZ",
  "key3": "2WAHtPKwWUgg1kny17oAPbf1YEJbSnHvKLW4mJkgu9Djhi8WKWprHBKH2RkQTAZNB9QceH6fpTyg1VMqFDyo6g8F",
  "key4": "Mmd7eH4mfVA869fhfQsKfjsgJALYghghgysszNocTGmNo7HnP6rU3TdMjsQfE6dYvK3jr58hhyG9cyMnPK3tR9g",
  "key5": "2dKA3ebKSJGqB4FU7M2tStGnKxGcK8L2AVkVgNASRqZoK5CR1SD9oe9eZgGoVmgAwBkCKW7hmZYQsBsgLe8tjXpt",
  "key6": "66jkto9REF7Swdx3paKB21sVrSjQ5FAfATirAxL8Bf5wkSQ2v8FEsnJQjgqiQKLqYJ6GLJaYTa3iVag2oHRmX6rr",
  "key7": "53YQNGwTyZRmB9inLErkePipXNxEjpNY91FWZfM57A7vtXXZBrjCHkuGwpv2xkWxvf4T6Vvo1cq9ihCJjUbpd51W",
  "key8": "2tss3otLWCetHXr64VYPupd2vnrRDrVnm8WNbZXHK2PbXwqBairTuyWEABMxXZ5CnyC2D99kBrEvwHmD9uDLqXrF",
  "key9": "4WEo5quo2SsS8kZyQc4aepecbfxFxuy6pLdNntCXVg4QNGa85Hd4dMfJA2s8GxrtSfHiUeEupdCqCabiNBZciJCo",
  "key10": "5CU2YYKnYGkTk9yChT6X2nDP2wZAnzERrh9bAbd9mihQH9TWTpJPXt6WncqYedPQ8UecJXnxPgn1ufF4aRfY4Nqg",
  "key11": "YbBeJ9xRXCuL7nQYNUE3DH3z8dcton9DBAF93wzjfhhJpJn5sytEQn6ZbUisb9ZGSbcikG3c4vTHnwTAHEfnuCW",
  "key12": "5XdausEDSdGE4i8ZGVJvkaTKCKBE2XUknNHPf6iaFnicrw6e1dgRn2ckmGjNUJCDEA1Wk66YAcHZudLVHntUjvLu",
  "key13": "Qp7BEgYQG45vwX3tbEQXGS3kLRQcw92xsaeXv72Qs2CZgnsVUR1iknSDuw8kqzdwykoQiKLqiFrZobqxk3jpj4W",
  "key14": "23juxm1Kt5nL7nRG3riKYyAHBEsDqmpBy7fuYHfxvT435dJXTDHXnMZQFmDavwK1LNTM3sCTNYi7S5abYvoo1kph",
  "key15": "3XSwdLy6XQKgtXxTZiFs49ocUQYaX4xiQp7TEihpcrb1kKAJtntmiEKf3isMnRAXiK7zDqLgu9y3R3KgCXZn7HBz",
  "key16": "2AcXJ2cWavNCc9LCs2DNWadoKw84nuSkHwQbRGAzRBuU2dAnDCCXwKEeivkxemxbkGsMaH6AMtvx4WfoKxvmARKf",
  "key17": "4VeSgbYHTrXoiQAChu9xfhtwMeEyJEs8VSS69sSmZN1Sffsbv5XqGbfe8i3hYUZ8gKgxTDHK5z9QDDzsRuWeMgb2",
  "key18": "jhwKghXs6TP3eHK6UGCmSAjqg1MZBA7GdCWjKKDhbhVEbMGE41HZQfbJb7PoXh47KStHKkT1Wu4RcZdwsLpgB1q",
  "key19": "2DuF672fuTjjHvNAirVp3P66RHJW15iVrCdwL2wR77v2ZbrDbCnhCMUeiFZuuSdgWL9Y6tUg48tGg6ndwpFm8bam",
  "key20": "49GSm1YevxMwVMD3WUhmTenwUuTbQUa7sDbHitHRP698LW88XyLm46E4yiC9FHcrVYyxmPB8eHNMhuXmUSLBTLmK",
  "key21": "3nE26RmmBrz4tajfNWsRwkVhaGut2V4gs1tXNYSDDUYBz2qUE8cRJ7fWPR4sHxPzPC6YkuW6WQ981xzKMFLrvJwS",
  "key22": "39JfGD8PbWKqbFpjKVJCaSWR82eo12mgVRsjctYdLYe56bXbLZraDMvsTHgeQ5Gnk8jtMAXUiSFVRCQq2XEaexxy",
  "key23": "58a1vgjiRNETvLSNVdLrBhxuitYESnNwdSfzcq7wQtoVortroLj2xEm1UkAyx81yVeM9H9AJYbWUfaUNMXjdN3oP",
  "key24": "2MVBJbrv5kAChkwqfFi3pPrT1Qzrg57Wu4qUknztAh5xTy5iEbMmYyncmBXoGDRTbuzvM1aEBsEcKqYMW4CQdE4Z"
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
