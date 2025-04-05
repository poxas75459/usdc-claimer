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
    "afSR8qHMsu6vsqDHTdueh1iJyLiZHgMbnmXF9mtyQjmGSJEcBsAjadvFhADCvKdhieJ179FqmGgVa922AZ1NeAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Bs9WkvXxjxGSBmwgbpKnAm2Z7XRrGnQQvgisoNBHq5Tsb3UgMfCPspz1r3q6RYsAMVmfL91zaAENF2YnSry5Ye",
  "key1": "39Kjy1s685ZKiUK7n1cYYjfAbTBMa2wufLLTgcvqpnRdQbvbGK1kMpJohnU5jo3yiAtHaMqJfwVdRzAX9z8BHqF6",
  "key2": "2z9mtPJo5EdivkzmktWNQuXNqS12dSuLeH2thNwSWPtL1ZuLpsn8QVvMHggdNe93a1LHjocRdfRbfy82gF3v2VeP",
  "key3": "5GFkxQ6ZCFSGgxm26iUCCtgSeqo6xTfv6dx4nEcaGnfJgBLpEankQJWquGakgJKo8KUnwLU2u3d8KiaHs5PZ8qzo",
  "key4": "7VTKye4TgCvCYTayvGV6A66r5rPpoQSTB6nzeLMk1FBRWC4nYpAoY2owqvLU95HehrZHhGgFVdJ9tTCJ5AVrZmz",
  "key5": "51NTdg5LtAQ75zpUoW5gFGQ8MJabbZTpLsMiKt7z9eH3Mjk8aY6U7FHnhe72qmwQarvF3QVNcP3bXMisW4pyhUAJ",
  "key6": "5NP91wZEvczAfv6cPMrUQYWEbAc7sFFMJUciwNQnZR2oXvKnX5F7DzAQju4H3sydLuaCWkttxqsPxh55TzZbnQz5",
  "key7": "4SC6c9uzv5EqiWLzav8DeEoUzQTp1LxNE19JKs4ynfysWFrpYXjSjzouyCrLjzdPmje1dkhBGogYYzYHQtKjsjpa",
  "key8": "4i7yWzNw79nU17bnqwz8uKPRV3bq9e3U2ZWiTaWFGU4XVg7qxkz7xcv9LJMTfnYG4Wrz7dPfiFEkRrYb3QS16w1t",
  "key9": "xgXfCBgSoRDDheY3bMFh41uqnfwiJ8dBpFRCwS7WXPhmBtBtS6sBHEj6AQuUAxoxSmchEhtUoDfsCz7LTCcUDs9",
  "key10": "1hBPCrQdaKwpHxAPxpGb2iBgEjccqJDETqM8NxsZqfM8cSbcJCKbpn9r1AGtwZJ6bVwCBhTxdCiJAFdjV62j2cF",
  "key11": "euWvRPtXU1nyTQLScHrtXFkTgjEaVoXfNxba4VoeBH9RTfrNs1x2SP56XahD9BhETdPDJGT99ym8bFPmtHk5BYD",
  "key12": "3YYM1LkGCmVB3LSpdyAdAuVMn57pmPzPErqKdwDMezQZEaHRpPDrUk3UrKkGgfbKBSt4F7GjdNprRVswnVE89Xy5",
  "key13": "49woV22P1WhSRQ8SYtpkSJRYSuCKMQTMYcze6NCqAgsaHFB7jQM1u46TLJiF8SbNorubbcQfzYAMWtwU7xFKav2z",
  "key14": "5D2xjBrmBD8bHTNcwHuJbjYfYvYnvVZ4vQFpE3jQTqmEuuc8B4H2bgbByYETR4VFNujrUaW42Bjn21saEYHoaPmZ",
  "key15": "5N7XZoBUvTuc5TXp4pu6ZmpWv4dRZEAiBdY1266Run4Fo8CfAmqozBny29TZq6v2SK2zYV5QHh25VX51zPx2RYMo",
  "key16": "F6xusZyMA88wNA6KCPkKbq7Mza19f5aC1JxSATBj55gLnNCp7MkZfpeG3ESfzLnyBERmQ7UGUqDQiZoHcuw5q2W",
  "key17": "4FzdSJdHk1xSbvzAvFFjEDE7MGS7r1XAwmSJEvvNtNnJXiLdkbCBP9MtqHyF7vfD8xKL8SFoaW1xcbm7RbtB2UNk",
  "key18": "3yJgiJjc4gYG9pLAHQbE4qXkzbro2TzoLqpV5U33qPMXmbz8FWsx9MtEzvNBxV4uQZKNLe6G9Gcp2yEsuLy3QRQC",
  "key19": "3r19o7BTmC22pdWPxSstuovcNg4S7Q52MhsmWqzPvQWcxUNeJaTQiXWs8K35u9PrJpuvydxzSB3MZS3Tdm2AqN7s",
  "key20": "2goN2fus6YJprpNeer2r9i16vvYdLMECLGj8CFz1n3imR2HgPey2vtp5jmo28tWJNWhX6CwWjt7PqDgDxGNNpQwV",
  "key21": "27Uyi34oAAsYXkKyGy6DsAfs3dyzJaK5sgbcr9YVEAitGF2Q8JRYiJoBW886gWP9veJbT2357rs4rHmK2jdBg7Wg",
  "key22": "fDofQLfPHRHoL2cuBiaBorSRrymbkjQcedaZfVVWEKY4YPuCoEuGNUNtfSUPiXBwdKGj2NixFMsgmaqUkjvh8jj",
  "key23": "2v87mnaWrhLN39E3PQJ1yHRfGyzgEAQ253VE9G2Eny5vF5oBBZCEvqG5k3GcDcDJ2314yPxQM5HNCGgH6GFnZs5Y",
  "key24": "2qtZ6dKDnryoHJjfikMmfAyWun2GT7zJagveBoa3BKbV2nAVYr3r1EV46XgscwUw6e9JNvxuzkLgP8Sp4fWZwhAh",
  "key25": "5hNGNAWWEQchUkRUJ6ZDWaHapK4zTmtNH1e4YCrKRKYCo9868tAdeguofYHcREHWA237VwTfAnGDR1uhDjvxLmry"
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
