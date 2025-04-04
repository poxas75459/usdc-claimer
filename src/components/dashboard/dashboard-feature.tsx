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
    "5kPhxiAsdSDnT2pjpBQ1mVaBsWcFdLFi3Fn7CVe7ALAL1PcZiqU8Ag9TMe8JkvWgmstxx3TLpQ5xitwwYB66WLQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rPGZAscDLMWvifVB65bPG3Khcw3dpLkwygDc5LX2efKgTfT8h1sXx2mXiA7ptDVRdb7Docr36tQkvzGmAWcZ1K",
  "key1": "3KfkgSA1yD6pFm1mR6CqAjkctN11PBdV2dr6rFcV2fm1AMvGPbtMXM6MuAQjfC1b72usLWMkv9gZyLb5Uq9xFY3T",
  "key2": "38oSDjtetbTXu2KUmQof6v8vPK9Um4vkpDYda5jJfmusLJwjsfUBtaCghYdHPWrKoUMR54cwtEXBdmGHAm254JDA",
  "key3": "uE6MEWnAQjnfGKc2vdcDV7GHZC373HhHXHK67piqTqvaFo66yQQV6roLGYvriUWbEga1MZL8DZ8x4RKSB1gEtDo",
  "key4": "647tTPPEnGQffuAvfGUo8jP8Z4EnQUnVKsV4ydesC22aLEFvAr4AweMyHuDXjxspMmrN1v56BdSxWPbUjX58bLHT",
  "key5": "5zkZwATjcxnmxLkEkyPsBBDksRizdZ3mNd5fDtdUCt8f3XbTyoRbqziyjgyUESyMnQTwB6VZX2dotY9JSpXvJgTc",
  "key6": "2CdVEwzHJq4wmV7dMJkg7Tux8ximJAsVy7XnBNh143nM2Y1NioqciGXhubE1rDw5rZnM6YD5BJQ3y3vofXC3EX9G",
  "key7": "a9t66fqAFc9nAtsZYgTHvpVQSAJDMsDpZjk7GMScPfvJtphouBUpWXbfYYtDWhD25qhXsQEGDT4xjbipnkXdhKn",
  "key8": "34kYUz6gXgb3HqkJXWLH3mizPa82WrREcyZzNgj2cHVL6u3uc9Hb6gZrVHh9C88ZdxucQZuk7JrQNDUFVt77eJrn",
  "key9": "2ftwrdqdDSKUQoN1mqbfhfZAfz7BTWs9j68ZYztjc77XFXmv471nXFSbVbsUEjLVzzUSSq9evAWmXfkN6zXDgXve",
  "key10": "45W7Ud1hMjpH1oUmyPjUnCYTs4uiL6Fd5KHD9FtE5p2eutagbWnwhkQkVBPAnzc9fF99hRLeDwX46TyEdCyjd8nu",
  "key11": "2bsNRbncoAsuQ5pVrN3AzoKar6CaCtAib3KuR6an6YZuKHsi5H3UJKoSiTHhYPhDbzr64cY2PNvYMREyD7aVxE6C",
  "key12": "12s7mmQEJJH3a826PHi2m4vc8jYZTm1K7p4iRnsv7vTi6upQhEGCqdfFvG18V1XQkMfWXwtPan3rXHHh4enbrJ2",
  "key13": "3f4bVU7zTxXad6bADW2wziFhANuSFwP1ndKEDjxmUCpYn59fs965Rk2cX9Q5RpB6tbpFAi8G47maeRrsFpCx9nbM",
  "key14": "3BESszkD5eoNk6rr7fH6ZRfLrovpBwn1sQ3PtvA39ezv1LijiPsYZZcBC2DBcppnzfs6BUhStSvMJ3o6568D6y3p",
  "key15": "5LTmy4AFWfv7R8fKFnYhbNrPXBAyMpssTgM1yyVg4V78FSqrHS1v3TKYLWbdnXPjzjK4SHKbcUWhTJSoryePMbQ1",
  "key16": "2uqrNKp1kqrvF5Hu7D1UqaKTXG4fZuu6GtbSc8K7zwujFG6utn5Xhzvpq3sAcxustp7CveGyP1uFZGumdui12oWB",
  "key17": "4rbGRzeWqcMYX8MkF7wXujS8pN4UGCXmka75Ucvby6p3XL8pF4ok9PuExPAsRz5gEfGv8GQJPS5AE7NLoY1qjYtK",
  "key18": "5BPanJTXhuDKbHap3adPJFmZPZBwLvcEYMiQAS4jEatGTKrmCQrHnppmoDeFboHAB6dVLzmRtizBG5pFBiuVnRFo",
  "key19": "4gNvQpxBKofUx7PUqKiGdv3gEDZf42TEgoSrjSZcBn3hqipgHenqoe22CujjchD53RsxSoYohQ4Fvy4Fjmn9je9r",
  "key20": "2odDVRpXzCsZiTQM3zVZAdViwER2BH9fq27ncrJ6RxaHMZAC5FrdupBC1QCJw3jERzt2fx9PyFB65rCKj4XjF4s2",
  "key21": "Zmfg7VuLgKtcwz9QWoR2q6urGZKA9iZBvmThv8WNyMqAnWpNK5Rh33vCyXXG2DP9aLdSGu8RMFJy4XdFSMm84PC",
  "key22": "2poU1Z2BZkogUsyr1QfJgBK9rjEKBjkjZgbVecnTFcfJoKoUU9UFyFP5txVXYgmH6KMyjFvHoTKkPAou6uWXjkz9",
  "key23": "2qN8GtCgUKGiDZKYPczUrtmhXw6fhKFUwqpfF9NX4bmRvg8oWM5Qj1YkSBJhu9zCgXGxRhi5ikp7xqpBWLfDZ4RF",
  "key24": "2MGzxXbzEy7ewzast8fYAGDSq5DwkqUr4Xb7jyU2SDHvuR1Z6SGV7Xp9qJbNvXBsszNsw1b7ERYtHzDLffqz9akw",
  "key25": "2LE4Qj3hNEzNxBRFjdERjuQyWvkbzukJEesK3t22TytMJqEpVBrZNCJrQqKp3ixzFnB7LSCdJypKQ5RDQPJpZN5H",
  "key26": "3c25y2Zx7AhWePRBQjMzYx6QKqX74pJoBHTzT8wSFkprYrM5ZPf8JByKKTc37ut8CrDu2nveteBH3P6EdNE2vEit",
  "key27": "28H3o6ziTTZ4TprGeJCfDyJSPD2zhyMjD2bCo5oYRzBR7BZmfDZc8JrpaNsE22tSBcnXK6NiAgKX8cB2eR18xB1b",
  "key28": "5VyeBcS2ua8FN63CKwKRVHuBX827zNUcovJc6DQ2onowuHaZw9DkmqZ4iBTd6i9dTboJPRdrpx9fDbkmhXhhXUbf",
  "key29": "5XkNbbN5zbDZqKCi7tZ6FnFpcEmStePV5HF9RyWB9bEau8Terq37CXvM15cUZ2BCC9XGK76wy9bTUBGLtnoga8np",
  "key30": "4kpS8KqdLx4Ud8UKJsAXThXz3C3ssvcKsjNbaJDapNadEYkpWm6LRR4uM5E2yAyg6mzJ3bqEoN2DUGsPy7b3qCNT",
  "key31": "3T9CVPgCUDXE2HufbXQxwi6Yt4Yk4fDCYmP4mHAw9H9sQgHN87efhrg7rCSfDkWL3VbgpEEY5T2tZNuoRqHe4x4V",
  "key32": "4o35ub5p14jayAD55gt9CNktxK7FWW3y7SmHiDhGrHionPRcZs5eprSXSwgkyTnJrQiCBBRtzuDHR3tv1qTDWJXz",
  "key33": "4u1xLYHtzCsNDTrQaXg8pUejHKRphDiBCYv84ZtisrrKFuejD2X9r9qxM167VqBMX35VtB5gsnkSmnj41AuSfc1Y",
  "key34": "4agehLagyzvJPKsYKkeVfhzXUYzNgVnqSoz6etbL7LCsvFs2HgWTZZQktS2vUwYLBDkpL8JsTXHbnzJ1Z4h3UPfy"
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
