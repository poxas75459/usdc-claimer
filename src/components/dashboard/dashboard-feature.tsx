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
    "2sLeWwFMhMXCv3e7eqTABoTJ1noGZ429oVYySrtJZARNgtrc247cfgy5eXWjksM4WaV46a2wkuY7PQ2dQ1zr5yC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgU1pgQthQTxQaSejLF11zfjiAPVFq9HdMZSTp2MdFk1oWsBTJhyYuG2FML1sh7Rg9YVe6omEor1cm8b1eJbd3b",
  "key1": "53Q8Mxjd8D4xPGidWEwsbRethjtAPuKkYY9Ngp2knom4kULgR3nYaU88yUyp3hzK7uWBecdJitfXDqNbg75GGfFz",
  "key2": "2N2GPDJ9542pA9ct5uCJUVJPQTLUboeWMs3CKiUZuWdvZg3PaKm6XRbEcXEVC5zsGULpDf18HwVqsoGdxBvGtyd6",
  "key3": "45o8ESxes2AwtmgYnKHsmfmBtPfhhyLnw7FPgn6HzvkBs6YrBdwjQq243G2qPZxfadd8UceU2xHKUBogQzachGcG",
  "key4": "3SAih9e4HRzyLCihtKVvrwXfxFm5v59PgGvEF9ChJSBFvUWzumfNkZnC7LFyfdYZifeRyN38wXAFp7JBciJemqhE",
  "key5": "Hs7Hs2a5dNoQxtvNRkNLs9QukUGgUa9i72yfoAShoed8bM6yryocBth4LYSYVNhjUoZQsR3mbRpD9VgivseqN74",
  "key6": "WFaqbPdN2VBFb4gNbqcGnFApmgA7rAjW4Ee56kyoP6L9CMZNPvKFfeeFoCKacYyg5Cwd48FsotKch6tLiUhn4H2",
  "key7": "3GTNGxDH5Wheq9nXEaZBqp1gjVVwpZXQRymfPF7mxcZPNth8PuXghfzGFeDy12skEFnkq9Q9re1bMRw8FvYSDk5M",
  "key8": "5huwMJ16p9qu1BFkoPuZRa35asJTr6y2pX8Fprv9fW3ThouGaSWwuEDxxhoe5GmE4mda4YLXgRYXK4JV4QqW7AtS",
  "key9": "5KeSNoju513kTHTLaFGH39WsFkAMbUoBSAJkfkfV48BLsWyM7cMyUj5KxYrPGzg49yrZJPVDvTQpvSY1rfC4whAt",
  "key10": "5QrXt3cC1quB39ixTiKoJrJtbt3jeESZ5WRX3rLNXZAP8i24tXHaVafk84BWtnSGXnyHDVXXLAqK7LsnQjacHWya",
  "key11": "3CrP4ZAM6rF1qdT1Znmu4oWJm4uZEFMcapz4y7uF5HJZ8u8ZWu2qnWcmWxTtzteRmRaCzEsNUuPPK9anhKSFtxaY",
  "key12": "53naQqYMwR5VGWanCxdqeHvGKg7A6rvDkk2ybFmRrMz5RSVV8cKt5WNt1Gq8cfWvZq99Xz8JS7E3BJnnGDsvVWiB",
  "key13": "GbKhMVAB8pisuzFPABZ3ajGXm4tiWKfawggvYZ11D9nfv9dq13Q2ux6t2TyT8vcAEByxXzsv75hyWRKmSQ8vUXn",
  "key14": "43U1t6ru91aKJ7r1YcB5Ayz11isLrdd9Vr2uuYujV3LNUQAK7S9N3ZjksA8GT6HwviPfkJVZKzBCZvfC69thacX1",
  "key15": "4V7jY71v912ih5xvnzXGpD2fQgBwgidCCNp16tu3GrXBQn1S8EdfGe2wZogw9JFzvj42gAtupV2cSBj2SjqBgz2t",
  "key16": "4n3o8QjWnfTjPknu8BZkMXwgkyHvK6kNkyHB8UJ9ccoznwdJbS4QtVAuinz3DCEqwYbgUf7ndojgSUKB97cZgoyS",
  "key17": "62eKRQDQJcPL39bN3rdXTxF769my8GpZ1X85tJghfoXLk8wLBwboBJg8eHuvvoLbGQbeEuDKF8yEjE9AgE1aqxjQ",
  "key18": "39QSpCtmzBQh639KMKuo7BFzXpygWPcG8WL5bixKYm6dFfcjCZHByk2tjKeQRTmTfYMbV8XgJ589fi4eQydZkmCJ",
  "key19": "3jB2C6DPm43PY66QPrjBRcEUdrRLJMs5HXexHvALjsZkNxaNdKKgu3quowdyVqLq3XfNjdNWPQYwr3NPgubZPHk",
  "key20": "4ckQHRsSGwP58AaPRA65zk9mM84UbF5Joem1wH6S82E7Kig6k6Di1iNtHwciRWBjpyJJtdDmyGNVHvzzb52GFQVy",
  "key21": "4ZntAPt6Cib2bAQQcJPtrMfVcUzEAULpYWFzS2cQz7ASRFbpU37ai5LW2Tco4mC2L6as1ywYnZYJPp1u1CMW9TNv",
  "key22": "41R65P1TbfiWSNrkEmCd7MFUKS5BGbVjPPz5BQkeiamdxKEUxPrxUiwBvgwkTW7nXa2aMoBB6J96AYHq3xWgCVqd",
  "key23": "2PxLBSRCqfev7smGSVRcEpbwQfxbw68TLnjwSqL1BGaDKkzKqxqqWe8zjCnCGMTbhxPL2has9jEJnfwMGKrMfxNW",
  "key24": "3M4UZsrwzvTGJmUDAk4zTp9KPDwFo9Cr8zidW4bxWkT56zntZd3pBYdWDXW2dHfKUgbhQuevuMSqApaNRfHtqHw6",
  "key25": "5rbrjk478TMMG2s1ivsUzrghcgN5SoqUZo7bMUCWmeWyfiQfkXMcafHMR978jvMSPvz3PtTNqPWm5hk4T2zo7Rrd",
  "key26": "4E8GdZbwCzfG291LXHJjauqZKQqu2xfsr6YWwARKptc9ZNc9eg5jmta8h8dTwmMFj2gz7XM9fmou9yg5JripU14Y",
  "key27": "Q8JApDJwSugh5ULsg9h5v92Athf4DhWRdbc1gYkkEEVhurtaXx52fgpfyB6vkuSc9bZaM9G524Y4suY8fRLq8TE",
  "key28": "xo7SwTwQabS3Npjjbm4DdMvomjzmxk9gtVUQGNQCpUmk9NeP3BhnLgBp9To26NGL55w26Ft3dD77NptiXaeEqs6",
  "key29": "5feazbHHYSanjEmKRyuPb5ASE5Qns35YjWRMWPYBDWZ3f91hyWZpgYQ6YcnnxXEjWUj8wDscmourhQb1ZWmehaD9",
  "key30": "21mCuSgPSvYtpE3EV5FV82Umkm5kRvT87qYCUZCyy5gAXVup9Kg8BVABKgPPqM6ajtCAqyL1S8xqEabjGZRMvytU",
  "key31": "3wDSWN9Nw1YH3W1qto5pt2dMWvysoC72wLia6nbdddKpBZ5dWkKBXRLp7DaMQN6AQch2ZCVohtkis1w9tco9UPRg",
  "key32": "WKtRQRKQJtPeQKvDGXiv4KSxGvwHyHNeYytH1VNbicKUyy1WjKfC2thUTN5QHriJ8EAjzkmnVqY8CtGLnYNKEsU",
  "key33": "pj8RmXX6n41Ss1zivxiMBSZmYWh5hSPK9L3t4xX9RvkcT2uCTkg3JCWb8aquoQqXyXQuG9BPZjsh4QfcFJJkHN5",
  "key34": "4rUxgJaPfhaTVaHdWLHwfZVxzx5QChj2jjbQGKMuAVWVABsxaeM7LnY7FwTjTs5JgDU37PWo8WdeTPmPLV1kva5G",
  "key35": "FR1en8BU6ZZf6tvSaJtRJyre45TLUEDp52GMFBHJ1Cc4bucZkvoJmdk741av5F8kMj4PSFW2Bp1k5Aqj37qy5TW"
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
