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
    "4VTgXwQXWXg8aANpnAn9U52wSomH7s4M9HwnK9Muos5jnsByggzZgtccyYHsBjk7gJ9CAzK3qM6piCXExX7zzpEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a38yW85LpwhHb6BgQddWtPxSsmnPjLtZbgvxWCt7MALZFXcPN7PKsLsEzeNkEc69ZtwxXvKZY9BKBmxiN8h715u",
  "key1": "2XWKFeATvvPg62G14wMM5DzqbJSwP656cVey7WmX7Zq12vjLD942VZN3FeVgz5Y7hwD9mSKBgQqs5QYwR2C5LMJH",
  "key2": "65ArPm3YUMDqkbHxo23Ai5qFnMUeqBrz75xPKCzNG2Ehax4GJbFt1Wg4bsnzv1uGWW4vRHmc9dj99xrx67YeGHnY",
  "key3": "3ZHadwKYtaZxA7DirbbKXq1rHo1kpB1zR6LaGXWsPSRhUv3epT9dHyY5XNAR9Ru9ytN1hnrxffV949hwjUsm7r4F",
  "key4": "3qmjotVn6c3qbKeWhLnBJfmhMAexWcDDdopGqeUe46SjCHHEJd6nB3f6BwaKzyezZczjAYF8mmH2MEXT4Xn9V3A7",
  "key5": "5biXd6cnDYg2yqJJJYNYa6ijvXUkbMKGibetk1uCvxGRLfmUmsU51uGWP33e7z1xVpFppmffmfCwzwiSVBM49E9W",
  "key6": "zPqbc1MeEziDX1SCF1gCSLrKxPFqzvQMtbuMmtrN7XZ7MJVfLqXst7TPZ4F8uYL1b1evBNV9Um3QgJcxGDpzbos",
  "key7": "4m2pjJMHTZfaaqPJHAZTuPZqokCr9pitARC8ZznPp6wGTfS3M8X6HVWMmaAhN2ib3qnGrBq2woBFukz6HEhLntBM",
  "key8": "Y5fgtJpbCKR8QfUmQVjnadT7gadP1ZbVBKMXeiLgrDT3iqLkF4t8cxkkhXE58hSUs42A7sPQ8feZsYFEUpvq8UV",
  "key9": "7WGNGJ4T7r6dJFedYjHE3dBNxfhf1bfrpVa4b41JbzBh2a8XbkWkyJe3iyfdASjsM2VvLVgRXbgrhkLPSvnQHYW",
  "key10": "5qsXrqM65ag8RDbUnLztqBLQGY27VWN792yDufYXb6c92XwkpTu7ZRXSJ8pvUp3Z6kqHqt15T8HYmE5jTX5pLgF",
  "key11": "NdDbcMkoQVQosK1Wmm3ewWx1wzMJdjCAJhMxX3eFDTuChjKEqUcJQF7yJT8p2x7ipn4sJhqtaUXiXvbbBn55GGu",
  "key12": "59EDwUiahSGQ6WK1cRPXE9ic33KkbsWcsjEyzBF77oc9BTq9h5xkVLcoKQ7vG4wLwLVSdY7X8FX4YkLaREy29FcL",
  "key13": "5zNbDxBLEWXUFv7q9VE8AXrunjsAJNEjQNDAwzRYjsQZDNwx1AWFatQMWnxMKahPX5XnHHd7LGKGSEF3wLkR2P4Y",
  "key14": "578bEFkk9QDauLEzR4wtUwk3LLndSyqnvoZUePbeUC4pZS8Z5cM6rSs9HwPPCnD6DuPyxyV5MFo8h9HovmAESQHD",
  "key15": "4iLZejzqiCthnk8LP4PR8Qiv8Yo24uz5qYvM4EYWmCv7qk7rgjxZ4GhfeMs6igogEUVbAm2krYUv7T9AfgiEymC8",
  "key16": "3XgfUSGBsceknTGTpuHFde9viRuVB9HZdCrm9uwP3PMVmdG4Yq2rUmrxyYRduoNMQuW2Ji9gXipBERPb5a7YGnYm",
  "key17": "DWeYSzPHYmfoCZxaKTAXHGrvcymgxzdGkF81w4XGg9VwPFXnVkanRr6YCNqbXbZZ8gVGr2UTeVD9CnbVRUyYVCu",
  "key18": "4YArvjQCywTvSYa2wRjzEuYUbLYysnxgtf8oxiMp6dq8wHnfwafBwcVojUT453rYPB1XQJjgBAfqC4szTFYJQmrp",
  "key19": "4JRSU6PHvRSLGPQCRjaF6qPibcdUUeKsZGtGzXVBK4gUZQoVCJ1Ybh5jxUphzLV41eR7znw5Kz3RbMeE3Uui41tP",
  "key20": "GkKXZLeB9vVg5RTr9ZeUdUiJNupAGe3NgrP5poVgZtCJahkemmAnNtRUiMyn9f7pxyon4AKs4dvvwr4S7CYjnnj",
  "key21": "4413FCE66BUiGRh7EATqvaKcQt1zvqmwqr2LRHvEc24HaiLJa5hzxqoz3fcgAGZZ4g6fYt4PP6BSm9m99Vi1WKXC",
  "key22": "PGEL9mjU4m7jNXLVwmKgmdhBuiMNoEsKQXywpjq8NFniS1PscN3v5L6zm8ZJcWfssyr7AigxroBeZdRtKFUqY3T",
  "key23": "2rVsLs5ng3LLYdyA4Yw2yoMCWQ79FmnQzBNSGRjRST2T41M429ZWSNSB7pW2RSugwjNWAVFyr6YCpbB3Ciuga9qk",
  "key24": "54i4qkFyTMmVD8Ydstcyu2NhV9uygswC4Zr1fSYEVKt8Zo5trk9fmXruQZcEEYTEMAmgiRbGTdZVmEeBhhbe92wv",
  "key25": "i6VAgEkCVfmbXvGvh9WQEj9bxMQJFutcuD2ZRK6TjCWEsorgixVGEoBRnoPy5e4NPHpveQYeXDNqSW5L1rFQJHd",
  "key26": "EG57UsZ8CyejAzFexLhhUFNkwcT6H6tcXmr4HwZg4vack6ce6Nm7HpkKv87sKAECqS1AqDK5LK4xa2hxmm6pZ75",
  "key27": "3LYQ2okBxzqH8VXhoPSNczGnst118r8PFCAgwvdZjkwa1vw1FdNckwj6rr8Uq6zPmHHLQL1prtG16juXrSSC7Rft"
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
