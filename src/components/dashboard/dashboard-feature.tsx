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
    "222XoDjYxn9VuHtih4UWGRNnbmiY92CFnhGRXRYY288UK79xYNF3yDA3xrj7okHPR3hiTJrjMjnvzB5xNNjMC27q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdD8m3hKLYTAxyquoVXmSrUMvah3eeREQepRELK6beS3M9DWnJ4XUkDvsoXzPQnjcvN3mbdkECyqcyn8Tgv1nUv",
  "key1": "4YFS1GvumH45LmwRC3iHN4wyg1LDMTjktAe1obao4xfHs2sdwGTK9KwNYX3McQpKBft1nzQRXHNBvv5zy4ZoZzi8",
  "key2": "4H6JtaSVXTPRWUcAGhtvrQ6GhrddVJu84b9A6SpfZptyo5pkMwBw9J2G75LJxpeVn2uMGzRiAcLN9mEhhHYv1cZP",
  "key3": "3ci8dkLTbQ7E3wwYhEQh7g46MWJtK8pikT8HAU8PKPRiw6ubbTzHrcpZspTWosHeW1BJKbFpsZus5EepBmJgMGtj",
  "key4": "26CwGsZA8eEY5q9yj375RMFmpTzRXNi4ofQcRjxg4zZaFx8E1oMasWwhbufCMQDtCgF8sfQG5DkZ9ixV2pXDBbdS",
  "key5": "4dsq9yR5mSuEoLnD9fryoDrPt1HqLCYkyK78iPEEuVaE9Ja8vq9sCvdAnxr1TPYKYa3ciwxYUhTRpzenG5oxgYPL",
  "key6": "4oH8N8RoUzv8aMAhHwa6i959krG2myjcjmjXWEdYoxLfjUGjDJfQqJZWXnd2LmQZSqPzr4Fes94S8L9CdtM5uF7e",
  "key7": "4oybTuwhbsdsbxuR9mB9468S6RjffZp26rpyLv4wudYq9m4ppbRD7mgayQCzwQyJcvwsWi74WhSnUoi8tttEuRdC",
  "key8": "4PSqyvNaBoH6UjEgfAarm634FJWiHfCNmm3Po4GxzwQrEAF5YPxvUQoXNPWUsfbPAehQwBwfVuroFjpDshpdAmZs",
  "key9": "ugqHMG3aEMus8dLy4UmvQDfKWsMh5aQLhJVGqfGXSkjpaHTKd9M2YJ1zm6GR6rBmZBr3LuScZn5N31LJbbWtsYw",
  "key10": "4rZjggxcidCXrK8oysyJ4iozSNMhMThbRd5wA8JxYZxpwwHJq7iRtkBxrL1Lw6qi3yxnMX8eoqxidneEy5EpLrGS",
  "key11": "ekhuqkshrePohYfvLz2C3L684FBkChKRnsaV79NBUSGidyayxknNybiA9eFWMkNTWmeM2fexzoMp2QzC4dbS2Nz",
  "key12": "3R9ADBe7dD675kYCRCQAdhRf2AD3zdouD2ipzZnHNcGw2EYHGnyWH1nMt15HHryaZyHb5Sa2b2NVxbt7wFLqgWsE",
  "key13": "2quctYGcEWKxwKMSwcuY8ohNogY6VNdissaK7ARjSCbjPRw5rtVhRJ43TqtsQ7AkvJJzPWKaBnRUjGcE4cxoojR",
  "key14": "yPnQdBXDjFTpdfgzQHHxnYNJNx1t78f2kcNnTEukGUFAut5j9LX7Wu5pTBkStAbdtGVYd13wRsqu2ggQrvuaRPe",
  "key15": "5A6cnucj2Anap13FwRjXsBDNVivK8XNbtePe1GvRqz4KaUGyZgWUkfmNWwo2JXmXWdHCE5uco5HzWUGkgoEx89U9",
  "key16": "5UDXsbdLhqv6AcgaPHkex2ts3T5z5hHtquWhBBLoY55jtmgR7EDPGvmM7WwtogLuLvYo1wSj1743mvxaWvS7Ry5A",
  "key17": "24ZzkNsxBZ86QcrD1jdgqVpgUzVKP2ieLQTXph2YRhdqz2t7B4Kpo79LGqrcv5axL4bfqojB8pTfNtqrLhUHSSsT",
  "key18": "3VyLiPgdTW9rYFgKaTx6cDhhxuM8XURLUtSkUDrQeWGmGPerYLPSd2sABBZV1AFBJ81GcF6K5zBiBJtASrPRdu1E",
  "key19": "4uzC7TNT18y7NX33GKFaEdEAye5UvxgAN8664aZTRu9YveEsbEt6cSXWKEbsLqko3hwfhBcmctxPV1DyauHTWjJT",
  "key20": "2Mc399EiPFpw7kg4iWzKKbq8XmChtZtzmepCuNqkQBth9Tqyxyeb3QRVoeAUe2m9PgwU1ciCXfi4NWKLui2GuoGf",
  "key21": "26uF9zPmKvFtRSD99uqHdeXMvkbByB1ZG7piMLUuTKmrv8ngpHbrU6ehseznZejq36b2BS91XGXN546BrdTgX8gD",
  "key22": "TUeAjUi8XokUrJghBRVpFJ27dLSSmZC6w3nm2bRzdHG6puidrAa1u6MwY5nfPBmfbKydpoy5cGnLCorHoBG3EEb",
  "key23": "2oRQnkXenhk6fUSKSSc92dEfY16USXLTUoDgfm9PkEcuQ8BVJHSpAT9TtPH6cFbawUVShy7ANLxaGEsLbVBmTi2s",
  "key24": "2ud7rPFLxLbFMamGDjRE8tbTvYd16Z7F2vtmEfFqtPFr8jTrUkJRo2JzNgX5Z28YKfApkyVdzcWYyV1zK8azT34X"
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
