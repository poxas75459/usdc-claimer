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
    "4kzCDkkAhD2gtXySJjjBWQyrcR7oEaPVPdroV8cRb93L5R2Z1ajVx1G5vH5pMTcghRC3dq6jHrYPguf74MjCvsTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwHbb3fVryTcDGdpk3shUTnBWGh5ikBFSWMS7EMbjJpCwA1EV6fqZ2k2xo9hoxPqxMFFMUTRpG2akAm85CqwDwp",
  "key1": "2Rwyht4ds4QNTJSUsuYrc8hZkj1Q7ZcbdMqEqcN8wCnxRnyWVLSf4j5Ysh3krNCGzFBftTyLNtGq5vzowuczzGpU",
  "key2": "9QZu5FL73fs1fKN6q353wJQ1jcAyQ4AoaF3acRWARQ8gkrqpYJh57wUwwiHcDQ2JCxo5UsnxphrGGna4r9XQgFB",
  "key3": "5usL4xfbxcizHeqS5wqqoSyokxJ7qkYgCPLL6FsXyqKp1i4kSM4xVpUMDiK4H4UKckWZEaPhmjkVRwk9bnekUzmH",
  "key4": "4H6j91zhunYPhfXya2SCzWBFrTr9k1DYQKMF2DE4rKvyiFwHba7JJLCGNLnZjpte1C14nzGCr6aAi4JvB3osNzFu",
  "key5": "3ww8bWAwYH2G9VyVz1MxyT7ufFXGktauNnKzmdNU3WCbmynxFxSbxb5guJA91JJajzAPdS7yigNoRz4HcTyR9rLK",
  "key6": "Jf9VctQCqvZiaGBaJ9Uw4v3NSCpeFtPGfUnQ1kvCdnd9uHFjTrsVoaepgFTPJJVZsKm816keDPttxkBTCmwX8je",
  "key7": "3i8dMtdF8PJK13RZgiQRxeyB6vtoCupNEAarraFytvoac7yvjbDkEg1tVtgjNE3tgbQ7UKMeYTaeczx8KG1oCQNT",
  "key8": "4fMBBom8aENq8BQ2A6rL8GvyVgbJJVPQvJsJd9sBu7VRYLBYdJj91DzZ2snN7LmL2Bx92GhXPLaAiFbBKEV3DaPW",
  "key9": "3WeowwmShuRGK6epdXW1vnk7QRL4oHaX8rCvsD542pYXPCPiGQgU7czqmimrqRJgSR8B781SU3Y38jQ1iKh1hgWc",
  "key10": "3ZLk4g7LGGj2t9tdREV3hmnr6MdgZS2ERpRSW7TkazEhUvE3Wf99nDJUwXHF2ae4DWsSv3SjrYhGdUKtf9ZroyBb",
  "key11": "jo5FJPiUwVv247ojHLUt85GGPEv4WGcmMsMYZftuekGXp7FemHTUoZ3ECFYQurAAYg7M9G8m8yNx2dhGTLqN2cw",
  "key12": "3yTfTeDo4oqvXuEQ8GyYREvJGjEd1CS3rbAgGudb8x7PcQk7SaQ5b2h6hy95szaEuz46qi4YjiTgKThc5tY4QebA",
  "key13": "4KhCpkmDQMG5xPEaDcQzCqDf4df4QuHBwJmfaLnbEaPVHX4Mjkp6EjZ8WpVNdzikiRxY7J9Y8K1K9YZ6pXma1krb",
  "key14": "3RnXxwCuebMQuNzBXJvkQmqjPn77Wib5Tqwiv1THMrrMAhZu8Zk9NpTbxfgeKNjc2dp4ojxfATL4rS1Bydkzwg7p",
  "key15": "4bg8zBDrtCBZjNdbVsWXpAtCqAyEMMQebig6r3LyuSutVEKziGsnrh5wi8XqB855dvfvfYD1mAnUeA8NYtipmo3R",
  "key16": "nGaTYsoGzhfeHfSXbDVMkgUJuqaq5C4SzWZh6sYSTGwmsibMDak7Pu6UegYED7Rp862WvSm9bocHcnro9TKXaeG",
  "key17": "4x1dLpmUMgWFpTwnZR6kELNHDDVF6zfkuSakFQREqwQs99XdXz1cHTn7GftnemZ19VRjuUxxTEnPvEnnU46dtD9i",
  "key18": "qLtAgbWZQLpnPVvq2JGMtkEguBVx7SdLiKPV2aZQsjyHpDpCVFUQ5XmZo8Dh1Y1MUbcRiSPu7h8naFkNcETgEUY",
  "key19": "4fKXkex2zEt1po53fD3opKQKTvP6dKj46hoEAa3MPhi2Ao1aTS4gZSBARV1AJLmjFCnGPn4m6YbaGBGA7ztd5GnM",
  "key20": "559bmKJ4zpzJEAycsqiBGNo3TjR8x7eZQfPE2Vd6zRq8DMziDHM5EKyZz4sgveyznrR8CX5C75th4hn7vg4JDgrs",
  "key21": "63FLrQViqNQ19S1hK6QpvRdJZ6THQLkdnykL11MgUn2RBZk8eZ3Gd7ino1QTz2ZYkRKHBuHXp9sxwFjQKP2nxMRu",
  "key22": "5eT1kbKfHRmv5xhKaUNeNoiAd5qxmjWYQMLv5pBq1pJDdGKahEgF4yUwWfTcoywDf63ABAw4VT5aD9w9B2zGjVka",
  "key23": "63Vx86Pz7jbwoqZx8Ef8KAUXNQepLKaVysGM7n787Wtba2MTys9YXnGcvCVpGvNo9YvRTw3g5giuHsMYxeEbBJpZ",
  "key24": "9SP6m5F1K7cuY2BJcph9pJgLzPDGPBByKj2S9aLTjdHt9HzvRGwRDnve3mGqdauXcBPu63f73AtoaJFh72ign6K",
  "key25": "rkUE2LZBE2LJjxe3dVQtB4nayT6Bth7EzZ293tt3RBM6JbYQPuYUCXAHvu7GYdEY3Hm157YeX13FKFmvLP9FCkE",
  "key26": "3B3YFSJP1PYNnNSQXHKtuMXSn5J5qJNFfXMTDDRZoY8yPRoDE4c5fgN5XsMjtj3jp5yUvt5QYZdKzsobZYpHCE99",
  "key27": "39hVCmWCJGoyYDTT9gLkbQPW4N7mnMXSC4SKKPxMyrtJhQQmgyjE336xhj3HPSCcfdFvxKB8TCoAAwWc9LPZi7pf",
  "key28": "4Tt5DwsW2SCQjtuxbmDP59CenUJVSFvTcqwiSokTFEsZbs7kwuQgPJf7rkSz5MZv6sLGmqurBvjf4MgFJt8Eo8cy",
  "key29": "LevEBC2uD6SSNrWFD8HCYdnBRZUF9g8zTomb2m5pkv7kEMyKkM8YQD8433T6D1VWYQSW2dxJXr4wx4iypvSnn1i",
  "key30": "3aAAw3aRVf8NeSJ1oaryLJVN2tFEV82JZGhZSD1THpztB7ojpAWCvaJwV5Nb7LnNNbhWg2Vw9QxkCbVoqYy7wbcq"
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
