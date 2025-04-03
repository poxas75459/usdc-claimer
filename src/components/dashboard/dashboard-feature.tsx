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
    "3Dwd4CnpBuDEdJBtsWdY1boKB57BYXVoc5Z4cEyNR3wPood4Hg1W6CWwXuDLtB4A8a2kqrhcqTDWiMEk6dtq9oid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NgM2RrFcjXb31TcVixx8pbFTxbgkZ9bcR6k81sW29pCc7Za5aNVEvp1UQf8a3kyeV6saN9UnFn5KpdDJpH9KHz",
  "key1": "47fpxhTDyLQhHC5yQdU19EzGhgRTndqb5igLjyNNgF5WyxFkNRssVHJwU82TDG7CTTarXJX5aDHQ5ShQqpdrELdr",
  "key2": "5QS1pmzaJ2vJyE1NsFjzxx2WFB8k2zWkvnZEftRvMQ4EfWRviaJWMY3UChECE4mVziz6FRko428gt76fypjkWea4",
  "key3": "5ip6uajVJdMbU35CiXJvcHL5YCxfjJrfgVM8j1ekGVb792bBoh8uT5me4NkXmxZcQwwEG5MJCf7Ubo7RBMmfD6xS",
  "key4": "3GBTQQZrSG7BAK9f7QcSVRVNts6zThe6aPGA3YtKRtw7tkjRbAyEx5w7ocRXRahe2f8heze5YmrC95Kzpyszp9ph",
  "key5": "3Ktopviek3673EuizNtB7xCBWrV91Lf9VTRjJJYM4b49BCJCGBTWeYiivu1MJfhN3RJgSsnDmDGHtCsWCCm581Zy",
  "key6": "2ZzDL1sm1rq9bNBSr7n1vBhB8URsLeNRu8gwAehojkrU5t8aCpLi8JtAdkyw9rHS4aQ8tx2JE4HFG8Rf1MNqL9ve",
  "key7": "LRKqYcNuYwqZspLxsHy5YqVHezoKfvMotkgR66JLhS2yqinsWJxfhnRjBVLggeEssodyriLESBHmDj7ADqHrefB",
  "key8": "65m2bneNd1bhhtvzucjTG9k9P5F2gycsJFujgnG75S7K4XTfADTgV9kmubc5sMo97r1sd9yTvGg9LNN7RT5gSnBr",
  "key9": "3d3g7zjbvqmye8nPeyar6LYsR5n1VhUYjwLz4khKZtSRxqMgxxSXuvcPMTeJtVVPLXSbk3djd6sTqiwVrSjA5M4z",
  "key10": "5jez3wz3pA5jzeYdL3c8SE4SHvBLmAyJuzRS9MRGRJzqTz8dgMHVL2fkDMznKxR7MhvUP1c3d7nf3VzqjSEzF4y1",
  "key11": "33KREjMek6G81gGCsJ7bnZmaXdz2jUQJPrjSRT8HfTdBG8xW2UDDYqoK6D8YQwpQnoCsmuaJpGjzDg9cajfLXd8Y",
  "key12": "HiBK7A2T2CnhixE1vFNK9XCMKu3AsLLqyHZfxXwfVwDYogWdwHTsxX8tXzmpBeKTk6aXAGBevgh2R4caLQ9eQYe",
  "key13": "24G7TJ4DSoLLYjCXjXLxbQbyJYvN496dCccwo87JvS5v2V45gXXzihGF4GVtQSXivZoG2YGDKPoEfQ5huir2TBYG",
  "key14": "3wikZthENrC2VdkC2HwN2KhNhjH2oeTkeuBjGe8V31vHX4mDrGwUtUks9WjUsiCrdQEZmVL9SuGnbn5cBH6VPH6U",
  "key15": "4pEL6Dxqa9qjRdEUBLn9yjPev3wEYfVWbwTuXLVAAXGcastGaE6f88NJuXiqUbVTn66rqUJetPWZpPQw5RR6ddwM",
  "key16": "2VncaYvpN26iZE2PHYyKRi65kcUc6LTJ86vQDWXgF1KLUKm7ukbr6enRA7cMYhsMiDqkimwszJPvE1wpWhLcYs5h",
  "key17": "3wCiDLRZp53mn8jQ7twEHP8YAjxEdTq7GBnJACvA1AjANMmUv94FtKAF5J3Pn1aycvm9wXwehcKye5c6DH4tnD5G",
  "key18": "3uX6yRTp6mby19R1kFQfvJbWUwaiowvLfhaAipENDzbxWdL6rFL77EifrfJvHoqtLvPJz7dmR3mW3efUtUtbgRi4",
  "key19": "4jDsdWD1mj6W9AYQCcGCavE88iLkrh8PDim4jfBhapWG3yTJH18iio2WNjDABD3UdN3D3PJiSrMS8xgkKvSRXh5h",
  "key20": "3BfEV2v8dR775ttPkYdSeX4L43TARkDRafJLYFgWYHfd3mRvFhTn5hZ7X8E9SFSJbMALwLncjLcDzC55RbxFKWAi",
  "key21": "5m6ps3HTaBFdL74UHQLz2u8A3byKKDcK5ZZwJQBaQarjfFLf7f8MAoBVTC7rP8fLYyJVhfree2gJdmVa6p7TTKbS",
  "key22": "52VWvw8A9Wb87nWPkrFg1wyEBT77cFes4qzAPRM3V4k3NNL6jgGyJVXAAKDjseWtHt3v9ox9YM5bvfbGp9CiQoMu",
  "key23": "5XkqAPXFAhFRFjowecD8AjFmY1c1xwxR9LdGNXR2GmN9RKAL9Yu4MpLSGvTLzRskKa16Yv6d3wVAkfDHN1kajAjU",
  "key24": "ian1z9RL27VVc2qAdCbuwgqQGejLRDeR9boQKS6LU9h2PXHJrohLszoJvuwJCP2AjJKEBFnkaJsSiBfEZuQSUBU",
  "key25": "5sLQuLijsqRz9eq1LrLM5MMFvKmzWWE7Nr1vQsCcWL6Po9Jqusqu5gsjTphEZk3hwZjedXcSWsiSMEoEZqashP2s"
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
