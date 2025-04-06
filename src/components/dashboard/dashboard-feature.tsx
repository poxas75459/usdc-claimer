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
    "64nJ9nJmaa58aqsL5y9sVQmKYe81zHGcg1wviVGAhB9Lo3MVFTGuVRUNrrdDd4FaeoxciwSRhNnpSzqEPxr9DfC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kveWiKmddhtjPhrG1f35JxFiZZFJkmJq7m5AA3B5XyP2gFjBzoeJFT2vtWd4MYo3YjWo4eSuCSu1N7bz2QUe5s",
  "key1": "G1LFrd3fjtx1yDjECaE8KzQuBjnX8E8yir6ubGS3MZuW2i3uFF5ca4La5ytxn8RV5p9sccRvbpeqxfE4oGn5hvm",
  "key2": "5vYcnHVTs89DyaCvXoouuennP4Tvii18fBYvEnsztcLQRLFw5z5aSuKphTyK7EQMKGXBWwiVdypZmkL2hvXbzWEj",
  "key3": "ZXZ9y3WUiP5bosFHbZS1g4UVNWTbibKMu9WzjyxB2VS7DdGU8CRLMmyX65t1FBrF5qVZ44S3TAmgUY3jfvQAxfG",
  "key4": "3ibrB35Faw9e8JMJcRtubFTfWH5S1aAX7Q8ZWmKvjsxrNwEmnP5PyBYjAs22CxnBMVBaUt3ETapjrL9fSdRUsdFg",
  "key5": "4tLVZbohkahmhLt9KUMDRjqakoeW3PUX3RWUqsv9WooYo6282ChUpdZWUiWwwsAo6vDvV8h67ZYr4amji7kM2X69",
  "key6": "4ZhCeYnf4TjwkVrN75FaoqqZBjbfCXEwkKe4NVEn1NgzcvipPQ7v4dhAdF3kfyBv8yAMT6wyha9FPzqsjUkQtLLb",
  "key7": "4GMzHzQmFjSrQdUUhvcrb56y4mMA7DNqGEzwxJKKRz97HDHM4S7PrNLJChXTfzdSMWErHKSAbKpGmgyppSCmuSLi",
  "key8": "31VGm9uKby4RMycoLuzSrE7AZ6m5JAAuqbU8jU6Joi99RBcAZZhyqemdth4CgFqrWh5JpmEQt6UdVNeGTFatAmoQ",
  "key9": "59AC9XMR7N1GH3AmuQDRMbEZtmpUmsHCSH9aJoDuL7fsmbqGvEvEhRBhR4YhGDhfD749EjC3tuzXJu4JV8jqZUyK",
  "key10": "3cKPiJ5zuka4VpjfDJUpCKZ6sHh41xbGFADWz8mHRnaueLKUqaT98uq3RZfpXbSuoMFbJsGzNcsKqgTTRmmLyZ9a",
  "key11": "3Z2ogjg9nUCsZmGfahqcn7kFAaZj84PchZwrLNHmNamd1d7xcG991CwDapuMqi725Nn6KF3XZpQdbkGSqySJRabV",
  "key12": "5qWPNmawpZzHT6ygiVvEyLr3UbwYU3kNpgBZG5Sdi5nznqEVLeTNgeTyJtC8SDFLiwjKUN8hQQg3z1fnwREVfW73",
  "key13": "5tmSJ1Xc2kcd6yiBh8T72UtKgGJ49epJRXxpUyWermR2oLEdTHvgHv46s9j1zHKtDwkntGVtmVMV9DPWRvkkSoMX",
  "key14": "VYUXuQbp2QEWGxwrXyLM9s7p6DqSobuTRJ1EYZPcmeNB7B41ZE9MaNjNKkKDqSs84qg8rExsBVify2eK5uYQo8C",
  "key15": "5ehC5CX83JxCCiME6bjuMdGzjPFqQwcSaJujpjqij351BRyUfG6Yy1VdRCcwxpowT72GoDXF7PqAcruLsMVpkuQo",
  "key16": "Ab8zndJtmCemtKem4enf3WBWBkjKvb9N771hNKHAh1FfHZoQDgXEz5mCi8eUjXCPawaqLafdKWgGkaxXHYd4PXt",
  "key17": "2xmLcPkLdbVTwqBF5PBC5PMfC383zQL2kvabaSmNc8r7fTHdpzwXJ6Rjj5yFNd5vLDpUbMdcVq93p7ABjSJ23W1G",
  "key18": "3pZELCXxxH42qk7nhLJrLnz4cr4jKe84yxpseZw1p2mAEWcoMyVJwvqvWfn9D7WC1TK9zkBbFEy1ydMvkB5Qyo54",
  "key19": "Q6k3YBEDFfPfTruiYurFguumnvdu3NrfezJk4iv6L4ZNrdvWCQQMYRsYM9wzJHJxktzdiC7HSETEzNyAmYGdE2m",
  "key20": "4rxmuivxfCewz6dNfutDf46RSvLU2ERWr3uXQKfggpgwAo6TYq4FeZ24bdhCzMMbbaFdqEkDjXseQNUngkKVvBVC",
  "key21": "29sLSYKb8GQp6xpaKrWjZ5P9Mtxw8Sf6sYdBNjWLeAJdmvxU77SDAodhsVxKctMhNjJir3yEKgxmEmK7McZz2cEc",
  "key22": "rCgERYhHJi35HAg28kgFX2ddufDVi1dyAtUismyaYQa8FAFPCTFpkq5EYkHvdXeKWKTAmEywkHNPTXtd8oHVq5X",
  "key23": "4jMXXfc2EgfoXxBrt6nt2WyPqNAB6GRy53zJc3Bwx2xksUHFqJJXBoLRzXP9amzQm8QiWsLvaf9orxBo4DtUAVa",
  "key24": "2ACsXejgQZVhDxvG74dmYVeoXZj93Mt7idarEPV5kN614mcAiNyosb7jPXFzofKrMD7mrPbuqpvQAzNt262dHpZM",
  "key25": "4MpZ2wqwHXqsf7NmhYxaM2pQLNxeJjydA6wz3QJqvMq9hfJ7vTrHkbAYooGfyi2LqfUrEapXowodz1b3yzkAevy5",
  "key26": "4SHWkC7ZCFdq39U7gcz6ZTt7FxJNskp4Pme63NEJEQmXVmSn7Hk8xAzyKgbuEkHubs4n5BUXzTZHQikssoNx4sps",
  "key27": "4fuYiaqHhkRvPUpdW9X9WpyrPmQmDcHaxzUWSyEUtpWaW9a1GzFDbf1H2VqCbuyjDszZ2u6VEZqBWe5ZNBQK8EkE",
  "key28": "3RAiz1tRhLHEGNiQ2mrDXwtW1SxWQj7ufzCUnHykTG5WbTASK4GwvP8FrwPe6UchmiQWvq8mtJUWqLJEYqKnzk51",
  "key29": "rwxxnfH78KpxGerdwBqQuX5wjTGyn36K1SUAZ5z5UiWt6cQu1GdJKRNmDQun6tKugnuBVfu8qUr5N1p6j3HnA8r",
  "key30": "43qwdJJ2o3eeGGj7NzFBYoEbHtdqWvmLqgSabr6zEUYG9qYioukrP4Xfd6G1rFvqAaHd69aXd9XkzNBHT1yw2t8Y",
  "key31": "5ehGmSDnkmUbBJgPzTr6zmX4NWU16YsgKq5wyDHEZ8VMajAGjQwUwzCyTrEAQiqyU7GSPQGdceXVeogmZncDv9jh",
  "key32": "5RGZEcbR5iDS9pV6KdteNX9NfYnXgxtJeSj399mcbrvjPDwubLqRh4ePY99eC5hwRGiLMurb5euB3CFDPSjQKYwQ",
  "key33": "FTKARYz67bv9RTnEAzkjbCmtT6yLAZVTNYjZ2MWpoEkEMUF3csksjjX87LVAmQaVyssigrXM5kgfCTBFubK4kUP",
  "key34": "5BSG81UGW9PpRZPtRoHbJjJ5RngDZAR9zesqZorP3TSHHYNA2f5X8YKbpCyR7kwmgWqwCyueThgLAUTjkc3qruFs",
  "key35": "5qbMKjNXJ9hwM7NzMJdAA1CBxmAQLvTBBSTeG3bp2q9VRZFPh2Cmg7qTsT3W7Rmc6u8gtmThZ3y7dxhgsy6zakyw",
  "key36": "RGiKgNJapZzyH5LyBS1WBe5qd5F6EF2HTXns8TCwcUQr1S7Sp4ykZmXpbeSaNZvBT63mv4GqbcWKEEHVXw2npS9",
  "key37": "4AYpRk4TN7GSPq22p1AnYsCwLP5u12N3L1LHkX6aHumMmoxazMHaA9M9G8YwCozzTjADQZygEFrW2bEZe1PMDocE",
  "key38": "2F3VS8cp5hdsBP8vFQnBTUACw5wQ1tuQUAzSJg6x4JM4cRdA2iMeavzUGPyGRzEw6vh4WZcKYNcd41ePgYMfnx9X",
  "key39": "2uYG2VLjsXHRpVNoPA4SfMdsSc1CFeLnRrZrUxFJAR6JC3A4dy9Dpa9hXh2G6fGPrhdavFQVGikLHDzxyQ9H3j3j",
  "key40": "3cF3ZWokgDk53PkQnJbJpWUcRBhqvwpRqWtbwZjkep4GCnkgVi1YAFdZnyjVwuogD8XiWNNwEtK1qXrJzzTGAz8N",
  "key41": "3jDw9PBy1mF1ppYXfpkPMTDuR2PCCxgRyJNGshgViPZdHWjeQB1yMzyNsRky8KEeAVySQH3J6sHFta17nZUYuFYn",
  "key42": "5zWT6JGR4WcCiQVaPSEf414mTKiPbrzsNJ4mUXq8w7CgaWq62BrQgPviS9rR7z1HcVXqVdw7vseN5g1Du7UPZyHm",
  "key43": "2dxz6W5heKjaAr33q6PN6nzw3342Zj8AhnSyXV1crdBofVzqKmrYRyyotxtDzVhGjJGAC4tQ58rvL1y1AyGUTouN"
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
