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
    "4nsCGBV1HYXnrBJJ6n7bZ5xc1KVM1ztTS1Rfw52Y95t5tu62KZNyiBnAZThV6sYHzb184tS86d5rVcw6gYycLfGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAEgCME6eDghM25Cu4RtveimoajCQEMtLWaNTAFWo4MJSoLAohUFNTxgTUYnfwmRGfdKDr8ypRBTfZURKiB5eV3",
  "key1": "59fWtn8YCuMPs3BXagvghUjgqkp69pCRE2zG1L4m63NnqjaGNCvU2EvCoXbwTerdyDtXLXmByDQ2NZEs8daRST2D",
  "key2": "5aZarRbn4WNZBG349FNw6SACbyCRKxvChYm5TUf97ASb6z5fifnjofke15hP2TfxZeePJcHeDfEhvScYmP9uDwcG",
  "key3": "21bsFC9GKzrrWXBiivYbxXWuJt5DPuU6B9WgLo65vqLhCkc4oGszEbMpVrVKbSnEbsTLq94GFtizdqZV6Bvocp6p",
  "key4": "5TKJmpUHw2EH8MBoXdjR4weFFATTseV3BQXQP38WSdtsA5Kb16jMGrAxiiXQo3pY7XFS1gRs2ao5LnMm77kKtW8U",
  "key5": "32vtToLdXRS6DqBxg5PK7huGhSGQwuWTaMBjYy7sLnqACgtKe6bUzkAEUNYtMn7dUqJ35Ypbven7dEg19UnnCVvr",
  "key6": "5LbnjxGU6QVqaw8FcRVkoMBPHS2vXjaru6CekZGTX1vbHBorn1xm9vKjctJ5hXpRrm8zYEP8D2dGmdmg558VuacA",
  "key7": "2D5VEEAyztQTS898cXZSeHdo7YXfiHc68ohbEm1FypjX5Hj6Bx8eF7UQ2JTPM5fr6d31Xoar1TEjn7ouB6vPMq4f",
  "key8": "2XD1iKdz1wFYWK8i6KiYTbqTk4YWn88FsvPkAaju6yRNuMDWnHRjiEi3z7Bh4RkbtJw6Y7qGWV33mU44eBYmn5VL",
  "key9": "5t923ifVUmM1qrVG93b14djPFKfRNM53aGej8T6aWdTUvaVTeK9ge8xbXzhZn66iJThW5yEdW5cKS51jy2ZvLeom",
  "key10": "3om6eJXaeP4c2yWs3e5L7hT3adKd8tFvkFr2CVDu8vq5TNojRwqUa55KggnU1R8QJh21F9M9jZzVTb8KjqvhHQLB",
  "key11": "26XJoKTnnfmMT2Rvi6ZDk93jZhSANjw32vsuiZFAEvRDXetyPgHo2UM2tLcd5wuy4mzG6DmdTsiRgn58Rg5NkeAw",
  "key12": "uwFNHJEbsGEcWY7qtXHgH7Jv3EPHNByAErDFiPay2i6NX5Es24BUod9y82h7RuuScWe9ja7CoHayj1qkpyGQgR3",
  "key13": "5D61i9jPg2JdCQ9Jbzr9aw3v6RK1Qt2DsuZYJs13V629hzaH4SM5HFsDASwevAn3a7fpQZjcmSjnfiu2bynPczX2",
  "key14": "4FAcS9SsLgHL7jeZaKZtJUwWnCBU9fXkizG1RpUA5qxN4XSGfEL6n8rJFKVVh4nXrNNpxkKE2zSxeRhTXy54yH5Y",
  "key15": "4vEC3bLzWyd2iFoFec8hSJCpvtQWhESFcv5gt4Ah2qAb7UdcLYNyiyLZBhJqfnQnPfQZahFYEssFcD5mGyHrSZg2",
  "key16": "tC45T3ccWEk6aDrJE6rh1ANJTqKxDBMJzHjRrNTzzfVsUf6NysXLarJgJN6NqwV9yGUgJWF1ThLtHnzgAzQoUbj",
  "key17": "4JPETKTGMQmCmF4Dd9Z3hvsPXVUrrkapQNYyxKBf2XnJthiM9Yex65cUGsUoZ6c2CjkJHaeT8cPgMATLRR6cy8GU",
  "key18": "qvtZpuc1oA8jBAgAe7uWCtPXKm6PjzbXbc2t6ovVsUeHNC9GcruyFwwP5t2wz8xmZDeEVks4hcKoUTFt317Pzto",
  "key19": "5mHVJ3EphbLD4NUu6cdTv99G77wvwk2QE4QcYdXmQoRtqFquQBJS4KC6NBRzUnLLaQuLCmw9ZddYJ8S1FRPiFkkN",
  "key20": "4KSXTK5gVYV2yncWXK82cmmeGncPNe31FSU5BJYpiGRCEVnA93Apcb6YMXzjR7it3AjQBZkjq1chtEktUsBaRoPc",
  "key21": "55yER8vdPck3uYq9KmLjiTJzcWbpdo2UQVYPHzz4DDc7BEyY7C9jkyFDT11qtqG2HBjwgTaDxmKcz3U7X77JP3Eb",
  "key22": "HxWyFd3JTBuCkhRQxF2hwC3QSrFPjFYRPcTNXSZA33asgyzUDfRtbSJvWHh8ugzwHotugvtuVefTGSZvYe3TN5C",
  "key23": "4DWGZudb6LEhM2PeBZUJhfHmn17ZXpK3hp4Bd14sr8kJ69696x6Umq43KnkMaDM4ggmdrrspnqwgXtNTHRQbzoQX",
  "key24": "2xPvCDj9sf6PA6ECnBEkhxu63TLv5mREoRfwF2xBnuXRTYtfUPB4VbpSG627md3Mpf78jz5RvfRjbu9Xa4TYZw2N",
  "key25": "5Vsb7XeJ8BmMVVQyoNWfACmBcaSZVaYddkJ2WHzYuuJ8nCm6GuUcBfkqL2f59ghAwXDcqGSma9f3v2mRQnJP92Hv",
  "key26": "4Rj9GhNpJrCZ2oEko7Cn58abQwbP1s5JDCrphorpiQ6qqHRgPhovnuSTN7oqpM1aH9VWFC2yz9gwS54gyzkdujuK",
  "key27": "3KRnb12sbEFsgFXSoSSRx6m2vemnh6Sr9DWHtnnmPuxRXthRsqmigW2smrc7SxMTMDHdb1nPR4Vp26x5YMLpQX1e",
  "key28": "2VH9j9e7MszKhRZKM4FVV1RXmVbLmQb56V7DQ5v9QHwb884gLyefxvjLnzHZgYrxSXBHy6W4pqpLh4XVYzHvA6D5",
  "key29": "5SDBeU8ugj8G9E2Lxy2Hea883x483id5VkhVFmE3ARD17CT4ybWNeVgocXCHz8dR12hSuRpGiJfVLx4V5S6yqqiR",
  "key30": "3fdRd24ZoozfW3QsLYXdmY2QFQwxPbATdBrWEg3QLqLEQZeZcKDR3WqAV2TagPeewckh1ADK44VRiNrbKw7MrEHc",
  "key31": "332ebYGLks43tU66W7JcyKuUdViePQyL5VYtYpmtDDJZcDNib4UqWexwqPriQodwtBBDD5Zn18ohR7Lm3FojGCnj",
  "key32": "2urL6fSpKx64HcZeq7gxsdtp1h5ZWmmcA49rni9aoE2uv6hkmRE6xeGysGpM3CK8ypsQZ3GjvKaJwQZBuiE6SdqX",
  "key33": "5RGYjpKRMUgRpVTqhvZXpmovmpSZuWuSeD4P73pBhkY7Zz96euMrvYfouPMh7uF8QtvHkm8Vmo1SNix35pQ6Q4N9",
  "key34": "3DGuvpbCJMuVNdBBimj8kHTBWNBYsgc8pJcqn9Hx5p3s6aabntUR4iQ4APSDvaBfzVUGGLxDBciatEh5X8X9MLnB",
  "key35": "3mFEmHFsLfUoGs7agaZpc8eT5cXZ6cuKG8L4VCHTvpsBfsXMFDK2SoTZ1qgzRtYtpBd2mTGxJEX6S2R1sWgkd3kh",
  "key36": "4x4ZrPg2Egzy8eBMbhZaWU4M7jGAacdqf7S3Rd7KdRJ8QqreFSkay59LpQfqqKSrn6bKVSj5LJvYPKc4fpDhGzeb",
  "key37": "CGGLTq3DXsJ6neGj2zGRyvfTPofQ5TZq6PAumHUayeV7rYgYyo9EEAD8TZKER4XEzeU55FAzERLrnwyiwqVeede"
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
