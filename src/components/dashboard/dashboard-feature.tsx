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
    "3kAhUBG7YGZ86mvwvNdkaavNNRfzw3P4Pac1fGD1CJohdq9QHAEzGreezUYxpXjzdJCyVTTNHr1t7q2Hj1TRTWaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qMCTPHyAWEgczUQgePdei3eZuDcaWXjsxZiGWwh6xSBY7f1uzc1PFXgRe7zH4u2pH33MmP3bruFhMyd6TptSg2",
  "key1": "5WpFCzrpWni5RPnvLjugwEfpVKDMtyK4oTRJMz3PU57bfbSti3ZGKbRSPidRe9tTauGsRvrVLY2LuGvac9EiRsAF",
  "key2": "47iVKQ33yk9NomYATvkVDWjqAB88utDxQeNURM5u2hbWJ3EvwjPrXgtNzipCSFsuw2acBM7QDSpMQY6qmXFvHxE6",
  "key3": "4owLdaiDBo3mpkbraAamWyQK9vpfXgAuqP6ZiuEtAgMuuuD9gxQYNpntHaz7z5uDWWjRSr84m6mnLuJowABC3cyk",
  "key4": "4b6NWonpqP8uH1NjUew47vwnj5TFhfS5FgRjaKVBc1qoef3qg2rxXJisXUzP9nwFQVoHHjLJZrA76pjcAb6VxWHj",
  "key5": "3FL29BR5rxxZv7R6F2c9WsKUMKoLDpCVuGm5pU1aAv2sDVktc7jr7QRppaJgPtSDtyrpFhgAVipUmkVFFHqrcmF",
  "key6": "3kDJG3wKxAU4DQDC3uPpZy4CxWBUVRaP9LCXsJv7HYqY8tyhxsKJN3gSqzk6K5xrbqVkRYhWLqvTG6SMgJwpj67u",
  "key7": "4b78EgZvAzKQgm7mpH1BVezR1PMJKpLUkjBnoidAXypvNB1SpCMEJ1NxztgNARTeVydE8hx4pDVto3uveLqMkTUk",
  "key8": "34Luhn7FkxBGBwnCD2yp7jQipYEEtvgr19WSnQQP4WeqvmwbtsssLtLwkeMbdCprycCzRJFFEe8JYBDMTPRsGZdG",
  "key9": "NyiiBRpUTuU9pTCfnHCw2sNCuuqZD3t4v8GtfFQqiFinjQhVoEvpFXzH2HF2pdZWB7HCcyrYNfCbWHHmB8XpmkF",
  "key10": "ZDha6JENgjVD5fncadQnGBJJBUmP69AW6qbhtzxNb4GUBCQrLZMkUpMNvLS7x9hxPvzbYkz2YZzJASboMxjnJDR",
  "key11": "RgpmX2Uj7nq4fZiPRFfph67ZNjrALxiCYaJtLfJEJGFM3VxsUe5j3FrG7MJjXyLR5gfmQzApEU3zLDLVHyiLTzz",
  "key12": "5EfV2aMwwCYd4J5r39ZAa3D9USvhmw1REq1YZCVjE8CbS4AoibpbEYwYYL3xLD9c4ShPcxvFEKNrjxg24Hk35XFo",
  "key13": "4sktJgVTnqe5BFBfExLK99Z1Twkr7kuacVPMeeJxuwkWZBEkzGqum3xFdvYpAPnncgxWNMBCeJ4UXwutBQuFGZsU",
  "key14": "5HJSArBw1Ru2ymyKWpJjvdGNZd6ZAfBQvhDiJRMFgMfhXupiYvsUHvVjEi91tGRNbA9RKByYKZFq3w9whGBqwbM2",
  "key15": "5xu2LhgMaNnL4kbRTPcX5jv2HU9WPKzi31bB3ZMkkxv1jMSejmxz3KeCL5D6RrSCCxPNkKWEzmucoSgDv7Aao2hf",
  "key16": "4VJjswSJ1vDBsXJyDXwGCotsHHyjDj5L9oYsK6YXhHhDh3KU9XZzaVj91cArkjYuDK8ySYvhzATXJjxJwdfMfbxA",
  "key17": "2HKcCt3TxGWpT5yVznHFatWNnEqDRRGX95hDM167Q9iXDYznkxHUQbYHnUMQKKqxLTL9abAG5qpdCTFSgnPo2DET",
  "key18": "Ch1BhYZp7fshLywgBzUuYLB6xTwHvfGgCrDzysC961QxrDE5ynH6bQHRbuHfe6yCR3rEBL9WGs9KGtnyVJRT5NV",
  "key19": "3D7fezwpaDfBGT2UGiqKag8KiF9yMRJeCHgb3Jh1wDDdBgKSb9R1LT8Q3nhU2fQA1b2wtqufZTNTHJbL66ygtwpc",
  "key20": "4eSsz3bgb8qsRGxP8s8bfHfuUxKCCfFYw9NRtkkSnfVorfQwUTyfTsnnBPFAUo9zkezvyGr4zwd4w9ebpwEWGRXN",
  "key21": "2hz66ViXqjXxp33GWUCznBJbvnWTPXWwB1wFYdMT2eNshL6hXy7gk2gV1bbiRgfjrqfGm7yYbSMAiTJM7tLv1ttJ",
  "key22": "4SjoK7F63hMumpYaj2rdu4dXBPYGZyq1Ru2YJzRZoRAkBjTSBDxv35x9cSJM9GobU7MMtRRt5CfDo5RmTVrkQNXH",
  "key23": "b6VucGFYrkpToCjW3aqjvDxDKQXq6dy6gaSGmgF3W1csfUmWTCLV9SJ2qv9tiSUc9kvM6tuhhb4W4nUqNTQCHqb",
  "key24": "5fWbRR59WZo3VAtyQgteZKz7f6x5qrCgrnWsA3TDp1mqArQtJ7EfuGpneT8S8s4RFMgC3XRtmXDLexQDxHUQ2tJz",
  "key25": "488T4pfhZThuVAje7n7Q4vpm3nkau9fjp3tPWDDHnXgLYMfJffVLHvXTKEEuzA6Pbu9CUYBj2wqWLeeTuek14ntZ"
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
