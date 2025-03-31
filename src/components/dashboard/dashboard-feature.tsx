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
    "4RH7eGzVTwGyvVqkojfhB17vZZi1Rd2hXTNiqVhot9JgccEPC4h7PQCtoKQNE7zPhgoxdp42vHQsFxpvbu6UKjG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVMNuxnfWccvGdQzLAcH9XVHgnhzi6DNvxGuqXRukCeJCxDpX3ToMf9CSXa3XS4L46d9FnetEDjbjtYJJv1NSFo",
  "key1": "4tnGVMKYVdaGe3KkLSW7qei6zGph1xVhGN4AFeDy2MmyCnDU5CgLizFMFhYqVJyqgtEoD6dP2QiGMZahw7dGD2dE",
  "key2": "365Jf8dWCQRtk2ifhKjPhErHXoPuq4hbsVFtX1nqt18k1DoS1TbJTUthDAC4aMwMTAazrhnKu9psTwW3FW6V1jc1",
  "key3": "4PyPpgkk9Y4mcmRrUpjM2i7xktZmpm5o6Z7XeR2ifMUqeaGix2UF9xeHjSu1V7Buy9FjQZZxaE2uk9qsnzxkWZfm",
  "key4": "TZbsgx1oX7imY84SeM8ZDHRX5q99xwXweeCEDG8PSUnkya5xUH151krh2GdKMf8ePfKQxQDVHzDMj8FgQ4q2zJo",
  "key5": "3Z9qXdLSCgkn6qSBHtUTapfuS4zCjJY1rgr31G1e4UfDx31uUVk85cDZUmKLLRRM5X8CH93PmfopSAV96JgZuT7t",
  "key6": "cQtJ2CsiN6YpCwDRa3WetXTwDTB6H7F455GGqTxbDB6dGD55MU6NXQQAX7ddg9oRcdGcrWNR4bTNDTkekD8cXiF",
  "key7": "3SLpZtF2uo33cs46rieeefuuiha4Lbf1tvj6bDiuuam2Rauf31Au7xsGTRP7jTHyeYviyRdtbSE2sWo2B5yHnvKv",
  "key8": "36xShrdiSBMT2JKq2jpB7o8uLniJitvjVBFBXJz117KiZ7g8mriXNPbLXGDb7MdUXs8DA4Y23Enkrk2DpW3EPY8A",
  "key9": "4qXEvycbK6DUMVWvfDpwHmf2rTmfFjdrt3BapyVdY8ScMAvsJ2waCJQGtVVtjDKjyiYx8BQnKhXsAQwgLMWXCHSt",
  "key10": "5guA7aUNukQ7P36P9n6xxpusZ3sebt18cm7u211sC71JXJD6UfccbB4S5dQHZ14VdzC8Exq3FDmHsVHYkSHz4dWa",
  "key11": "4uRaAdtAUknRpkXomyUGhKMzxYHXCnSjNc5MTWaMHc7uD7L4RRYRvtr1jfkyHUy4Pn6PgYqVVgRKPHhxSdgbBQvJ",
  "key12": "56bb1Q7eqpQhm9WBQM7KmcRuNJLQUZYrFTyF3SfTPnRfanLj28HsqJiWDEhSogYcf3d4rcKJwKJJNanNsrjHApXL",
  "key13": "3hZvG6HAcmrYd2aA1gFRJv6vzi6ouFNQjitk1JLXvvCncHYCgrs9LbDBfmMG8BBDi5pzsUeH9ULUKTfSrt5M32t3",
  "key14": "4zNUxEKLWi4ZJWLX3eP1sWyhmKxoJ3jMQimzopGhPXrG5kR8XYjLkwahctPfKuUTSuKDwBTaU39A8dYceRePZtHD",
  "key15": "2Z841TnT6wtfitjHWUnapWHpf43hhcribQTYZjsFhJ5WGFdYV5VPUmDkPVMeW3NBCKbZJnaJL4XzqHHqkKRkk1g9",
  "key16": "3jrZcwPLEVwayoSzGBPyvk1YaQJqbH3ER2kWN9xzay5wqxK2fqdWdEbfSbLc1u6EpmitysMm3rE3xLSwBC4A8pbj",
  "key17": "3EazdQrisREsfX5WGCvzWnxUisaebbxKVpx4jAosKD4qWfiydxFSCSHHMrGGGcwy3DWdcrjkhocAthdNiZBgNjcj",
  "key18": "46HWX9xDW9mAN3C7Y3v3iSKnX1CFDMpDrF4CL9c1YAmNXrskVSus61mYnVHdDtYThsBpFsjpUdc3a9v5GVjM6szX",
  "key19": "2DxMyV2FzxZNrdR24pKketbk3YrB9hpEfuHczM8U6DHsoviE9xyYrW78NuJkKwh98SdrszUPNqpapc2uVQqgRwPW",
  "key20": "5mgvxeiESXcTPP4tPM2Kt5xCqmh7nwGfEnGLhmGg1ZYqiLssdiTJbaK2GZCeCTECXk3azKNXRd1auBTkzzc9hHmC",
  "key21": "4bubMpbor95yp9w7mzFryVfXMMQFa6B6M6Jb8w9X3YZ8wideuhy7HMM6CfNq3C567L5LpoxpMKeFgYhNRjHPETVg",
  "key22": "5VwRmG4Q1ZXG3bnyuRmNkrot4db7wf9QZNpLRczP9HSF1s8kJKTNhu1hbhP6bDgRAi7xcX6DMhHEAZTeMy468uiF",
  "key23": "JfFEEnJpHWh67ukt8DA9haKypuWQWC7JJwvSu9SccA7Gcutd5z7tUEXneSwxSh6ZxzmiWZwB7buTCxmVVX4kbrn",
  "key24": "5jd2ovvipa421U9kzfGc7hGFdZnc59wnTfDdy2vKQZj4rpYNXGSP35kjdxZZQV2ojy1PurQxvSK7LKWpUmWTT3Hx",
  "key25": "sUjD9hBAFjKWKVsz9d5ogEc65FSj4nmsqJBBhhdw4GcUF3yMA5BYqJn2JWdVpotV28BRHVY4Kbh4SNspbEMWoSa",
  "key26": "5xnQBqm6cJBFDNNq7cu5Vd7KR7cCdzWNDFCmHTwtsyfUhMDWi3pZuNwNKcCfwAsEVLCq8XANRXgBx4uGLkiMF2oy",
  "key27": "7K1DcA1PLevpv82GQvDbqw7SnDeReL8wjetoHG6hPj3ocvNgs1RDFqG6zVDJs5Kh4nraSC1iJoSgoXRCC8Xy9kn",
  "key28": "23WhvAo484RtCCDMM4o6YyVvJz4CG2iTc1ciRuN6Kn3UAqspwuiwvKAaH4uff95kCotS3EC8C1R2mjPizNjHWtFu",
  "key29": "bG1fEbq3qhRzs5UMJXDqqzLyKZuFbAenciSbVe5fi65TAzq7Lqf9ANG1AXKw8VfS49Gn5s1pQPwV9qRS8WKZ1HY"
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
