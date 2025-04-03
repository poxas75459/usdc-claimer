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
    "4xDte6m7B9b6oLPUe9Fb6sXZDZS4BBr6HV7ma13ZzW9n7m3Cuesm1MDwc7vsWyQmzzXsBnMGktUBsowpaDkHf2qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KhKUr3o45NgTJFk7a68r6cVymprYTfZrB2s6ePVF6ttRsc1KZRdyUFKayCxGmNpCTFzDkozsZFthiX3peWAVy6U",
  "key1": "zVrE86zX4kUwZfhFph4YKgrSmexVi98NsK83PBbhshHV1pTAu37auLy6dpAtHQ8sotxuz66mSjHMkMNrYRVyz85",
  "key2": "444MXS3gWTSjbUvyUfRm1F3aLiSU8AsFfoYkSqYcSSbUB6MHiZYzcJSJow6dkmQ8z4tdvReJ4GeE7soKEnQPmCfk",
  "key3": "4fkSdfgx1wVBms9GD53QEBiAR9ua39TiNnCCKTCLGtrG392P66yKnvYo8FRk39ATPaxS3RtbjDukUSUKsokMfRuX",
  "key4": "5vYpCbffv6njfjH26DTSGYzzWmquTspbqs98vP4fjq8tfLpNdkATP4YieuvvccptFARyDRPSqaBSVFgonzecZDZM",
  "key5": "21me8LibmRiQMerMeHK58xnTtWvZcVE6EbeuAuusL75G166Eh6gkbpoZdqfoxui8gbZq3t7j4uB35zSAhKn91Ufe",
  "key6": "5fUKkNaUXFUyh8paawgdqJiKjmXXLiqmzBDraaLhsCTSYh9m4HT564fC8eXPcwcqnAixXJB8Qf8zBNkoM1AVXNAk",
  "key7": "3EnbtE2KWo6cyhmui7XUj3VZe28uHjuLiUPoe1Y5vGGHQrdWXEWWoe19eYCRcrYPoViTfe1SLX9Q7VDKg9KJ7Bbk",
  "key8": "scfQQ94tnD2sqCJ7Kk6CeBPdnKCwdPEWy1evesemcNxFeoqdW5vWhKJgAizgN65cWtosnuZNMqVaoSdtVUrVfP8",
  "key9": "4PMYX5r6pkFXb5UbfqBDooWweo6xUUoXfxwo6A7bKuV5QmRgaTPz4DfqM1QBRsYEHcuamkr3z8Sa7ZsrYcGXgYhU",
  "key10": "51DGJ6DZLLKtwZmGDTt9zNtL4YZW53L5ZmBGAuamFwfYa2J1RGC46uBedkfrUxCeuFa9BG7LyXn7fUiBX4zANLTk",
  "key11": "2wtnsixK18JWjnnrYU1UFY6ZpNb3PaY6SBo6JQbEQazjpei3SNWDpm2YarvFnHNNs28wG2Uycep7VxcknnVR7ujD",
  "key12": "oGGv2VEb41PATRf6rb6ECywD8rPFiwMtagGTT2rVmZ3j52fZWCtkbGrDwkJe5DFcjRF7c1FAfMcNjWsy95GLpcv",
  "key13": "35Lc84yfcd5rvZR6SqzMn8FbvfA4zBYrvS1JTHyCjEXZooHoSxp933ndvECQcbGRhKWrYxkY21Ck8BUehD8yPxAt",
  "key14": "zotAk8ZNQLP3gC7xKV2Vmofo94KnuWxwDTnAVjKuRbmLw9nyhvBEjSNMTpA4EvXDdvUvKum8dbjqPH5Zzu7XYQ2",
  "key15": "3sntnhHP5YKfP9Wzq93Ssvj1wawWd7hMzmJDqobVZN7ZuM7a4t91VGb3FQPp7AZY2xBtcd6FzZ8B6AcmgM7wHcpb",
  "key16": "4N19NLoQvTWMwSs2XwdYUKqN2HysQpjj6baWK1mEqNZcSBtrdTYnc7ER3sjkNi6MV9EUHDHM4s9yKQfQXC7ytHrS",
  "key17": "3bXQofXQ8ZvHVq8gX3uMGKwfK7Bweddqf1QbfwZr89pp4QTzkM7gWCCNjRpdcZvQmA4rPu1wZQHyTSeyTuQJfZQz",
  "key18": "4Lv7UzxnPv1zyc4iu2SGEq5MJYQ9W93hmut1zdCsAFvZkEcsnh4u9nmyKZ6vnuzBTVsQCvnCZEPe5yNxvRaWjVHE",
  "key19": "2gbLdFjXzkkdqfmXxR4TKDPi4xZcDcR2YGK9hV8YSWSA8bUGveyyc9Q7gDgiWoETYjbmvfBUbhN3HtN23QDekjnK",
  "key20": "XcuiPrLCrDuWmKwoK4LJAenhHwc4RyY84RLHAyjAzJzkSaVDpiVcZoVSsYCH9nSTg8NE5mrGvpH8eHcaDxqWP5o",
  "key21": "4An5jGrSinEaBgwMkrnZJhi7cA4sXdj6a7zgwfL8BMqQ4P7rGh2sUf8x2RPsPgMvLi2rCKUQMPWEKsmffCDGmUB7",
  "key22": "VWsDnFjAMtfHyPvN6XUa1n3cKXs8bfm7BhdGWPHLGbeZBbY5kBxm61mzddLQ3xvUnMz4SSzpudHCALsYwqXudh9",
  "key23": "5syLS8cuMaAiJzz9nF5rs6xxxR7hkwH5NCJNjhszm1PWpEsKwHMofVB133TUjrGRXekwuBJzWi96kMv9nLkVeXPM",
  "key24": "4UXPLbyMshQPGgRPutJdo6JaQjWuiZaBxDWBhCJroJhwnkPh4uCM8bhuZnJJorcTFEfE8b21Fxjb7UTeUJH94Upc",
  "key25": "3G7BfTsnhxK7kU6ammynqRyrmzbpbQnGzP6RzpxWHV93XFxDxC4q43k2UuDJP8YH9CA42Q259UsS8XDWzSSDwsyA",
  "key26": "5wdbthGPPbkXQZvL6GUmZuGDU9MaJq4QNRdndZEB4qTAansdaEX1zrc9RZ4PU7RkodQD5ksZXuEzHvpAY86HxvtS",
  "key27": "5ktKp7ZH8XD4UkUfuT6xJzyr1YwpB1RKwXGvHbp8Xaw9hwj3nnaagdpN5qU8w2MpFs12QFHqdS1ivDTs7iSkXa3j"
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
