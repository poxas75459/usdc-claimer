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
    "2CG6Ehh7so3ASH4UfVCtaU8L3jv6JHTn6Qe2oPa7yDCyEsCKyyzVtifRtP4PLL176eYHsjh8jzwAWg9KfggNCdsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8niiKmHSGJSksEYThqqk7ZkKHBquQpatD1xCZepvuu1s3AZaAUocWJKmasXp2yffBW74hmjXshFsPvXeXGUwDd",
  "key1": "3CiTNDmhegudWhYeVBZKsnpxdxNRw7iTPnEV5Prqa2TbEWQgxnZAS82A7mqXrM6uncv1ZnawJ6pjn53idzAuTCmr",
  "key2": "5A7hFFZw2YrtzNUYwuwCTzm1nkZH39h1XVL5jzvJYNrYSgbFxUmQoYrzT8BCk9mioefQ1HUVMuzBYxnKMHk4Bso6",
  "key3": "65ZyyeLeod6qJLKq7wqRyeDqAM1uCajsTc83HyyE4UDdwA8Usrig3zt9gqBvPRgTTto2pqRHFdfBo7WyX8fpJYLx",
  "key4": "4Gn9rbBJNHPAacRJ8jvaecxUsXjvRW2wTGyDFoDofmUtWBgRLQwttikHahdHsi6qXjK9qJ5L59wxTomeHJuVeado",
  "key5": "4SCmKNLRpQ5aYNc5gc8ttQwZiWSizrikSTT5iBkT7QkZgfB2aiQWvtkbkWYxkpnQzXWJZBVZMcZPe2gRD11wYRJh",
  "key6": "2QnyHvsoriQgH5va7wC2r4v9Ybny2EgykDbSqxb6JsKKYnGc1P4qkf6K6fMWnKHLD2gpPKKxfsLd8vuhKt5jR27Z",
  "key7": "5hnMS84eBavDs27hBrrXgXGRFqsT7YL4swqQxJaJjU2vi2hDpZgZDosMan8M6hvrE2YZSDGu36zYwY4UuxypnYAw",
  "key8": "2T2e664fmTCQz3A544qJqNoBy7JodJfNm9bJnJRP8x9ZWu1RVouFq3Pu1kiZTfQ6u4afSXGPgHCw3nzLzq8Pv9He",
  "key9": "2xTuGcG5o9XnToLUispTh29rSqiEyoCPYhw2wGvZbdadK9UU7v2u1iyBKfpD9pJmifj6QQNYpag1WCmzEJD6ybBn",
  "key10": "43oJzgoLCC8caXNV5Ki27bDPDSd2a7UUaUAZgpzyHC2QsVtoTj2QyQjtx6HssKDFvWGeRKWQheAgxQsWNVdPipYG",
  "key11": "3RkGWTzBEX5SnewhJFpGdpUacZ4vaRFufiavMKQqkyTTZSG15WLk7kdNAxcFT47k5Cgjnrp6yoSmerXFKRrN6Hkg",
  "key12": "2kzJuzMzryMTbftwBZV8gmRVUwzoqHqVE9APvP1SvjmtZEvbaRAMawsYwDiKtL3hVZ3ki3mAP4CKNJMf8P8kMvDw",
  "key13": "to1meCPX76xVxyw4acNjDRVtt5exbdtowX83ZXZgWLdVmyYwxFzqPdNUM6MeCrxBuR92ntQg8CzxAtewuA8fDdD",
  "key14": "NnGnpPoLUUH8AMZqRaoxsehi3kTFicyFLUoyxxgY3gsnguUFTRoXm1V6yU7FLnbrTbUdL1WfEkJhrW6PzATJmmp",
  "key15": "5YtVtqmQz8yunToFFdHrz9orzy5c7Kwf8jMcRSzFXAXapfG6qwVuroDa8pcQsTxEw3dTK35q1HQZwjT7HAcTWDd6",
  "key16": "4kRu918qbUpvW2wVza4DgZNbS9t5UFMJy5RKw8eJahNSksLr2feFGpmwC4jtLDhV1m9H84KmZKJr1PnaCUreahev",
  "key17": "8gA1hb2VtRUAHTJCkpzus1HJGyub4JNuMJLuRzg35tNgsX6xALZDV6yc8Doi5x64BNaMEvSQGivVuRUE29TTJnU",
  "key18": "KH2jG6QcdyA3UkrfHmyAscqak5UxGiRB8rTnoW16U3HaUNE6mDXZHNi6La14hmwPmZ6N9N3Y4EX6AFRZXvV74N7",
  "key19": "49gouaA6zUwkujb5QyQXW9uTuzJVdfWyv5aVFBSF42EiJcR1mDDruMSNn9ML56jXzkw5Y1EmtHs7jQCQLQVzjpAn",
  "key20": "3SVwMdyff9QatZNuCwh5J9GzEu4JMYARC7smvNQSJLURgbuvUYYS8EphQ5AcJkPvZfrGTHWEGazG5KGbWpQj1DGR",
  "key21": "5yZbQDakUMDU2p14KwyWEPDeSZX8WE255xDScPVcFyRZhbRDU8JUkZAYgjTHQMpMo7x1TtCQWu1yK6gKupnhy1hg",
  "key22": "3xPnukR7hTFjerCYvzQ7hkaHCRXhZaNY3TcNTSueJhMfqFNKWe6Z3TzUgjavNDUkA5bjVHSWAD9iahewDepLeENU",
  "key23": "4WzTt2cBp76MxGpR84Yx6SshTKQCnG69J7BuaH6ZwtTyhs8Lf55QQtSVBgfNXvsFAEN7XL2jakrHM8aicwqDwx3",
  "key24": "2kVQK7vLRtzRWt1atk7giU4WWfHwdqaAvY1WgdgdW9yi2aSbVbgA6tDBGwN1BbaTqg4MShkbAsJucgi5GUUKTVjN",
  "key25": "2JZiVy843LeGLx8Zq23WG4a9NSeVMLD6qx4CcQUtLmqvstjbawSk1XwzmqL8ibdRc8rZmwS2VBarJfpYXZWtu3TY",
  "key26": "pExNvWWnBLrZzC7G1zFqaTqitthJ48Vqu58rXsVgiyH6XBy8nLBsjSyxwc6BaZZhtVSekrysxMngrYcPSvgijef",
  "key27": "4AwDN3ob1TRW5oeHga8ES6jb5avYddcpvm3P57nwKPSbVqdqJy4sHh2tnXDtofXes2imUS2yg6qzSFrDR8YqCWX6",
  "key28": "3inZ6yhqawMLvKU1qJPQozua2pFSNMEXmG1hjzjNvSjuNyPH8oSs3Bwohu5dVCo1XPKSp3Wg3JjaD3tCq4ESBLGG",
  "key29": "Db6LKsFk6wsMP1JLsvTjKnubTYU3oGquqZjMDzWTjYoUuNgUhGhGZUqC7SJWTDoyzn6g4uUZqhAjXNEbQDr5BhE",
  "key30": "2ZEL36Has4E6ht29sNYShR39fz37sfFaqSZ3pdBhq5jp9bxTXFnraHQvud1aVhYsZrbTtinedf5zZrKuwrKSeQdq",
  "key31": "4zfy7MTpsfA5uffeHfz6o6LqRhm2nJoxnSf5MfpqU4B9Z4wYwDC9ZxX939UQbemkyw89FRfod1LquE2JPi3kRWtv",
  "key32": "5v2kC6dHzXBV1AJ6gH223mTju15BHC6gy56EzUp1dKZR473WXdUA9yrEdMyPvAiT11Na35G2ue9fhDD5cx5SoDi4",
  "key33": "4f1efsKVBXZDNet4GZQGEQ9q5wbYVouxJmGDWRHGqzByz2A8CgJvY45erETckt9KT6n5wPQmpUZEtpRXmX3jGaJm",
  "key34": "5QBW77WyNn2L6SByJNSkhMhn2nR7nb7WMSZh4giRcFAeLeVH91WcHPP8VNTZbgzckGwVvdyAaWg3o4EbTG17MbZY",
  "key35": "4TW6BCry8h3bxvdxgeKETYL6zZwbkq3zrxacDaRXJJ83JRn8s3HFHTtxtyaYNHWbKB5F72CmLCK8FWQgzvbozFBw"
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
