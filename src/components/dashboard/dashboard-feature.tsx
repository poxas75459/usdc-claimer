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
    "2WhWAFSJpGAMyJtBaFAuYxssL8q3ayQ8DWrfLn7iqjC8shB5SKdSq1LdRULi6iCzbpaFH7QhUe3qhRcWGfLshMMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YExXVdVnHqCG9AVChQEN6FmaUuiMsQr2Wdonr2GbFa25NHxcfzMHdGVdqU2e5DpKzT97Jd3F9hVXiiPcaMZPo4Y",
  "key1": "DL4UnEAPxkbc95SAi3utwKydgWg5jVW7HT7Vxo4iLhWaNahqw8kRxpe1SgJtPiZK9KofVBxrL2Pqv9f7XoZBrh4",
  "key2": "4Gsbbt7JUFUsUKuqEnxWFUxjgJWBV5Uyv7g57ujXH45SfAFQixWKTwNPg7d6Uy6qLymKQPiNWzcXFSDm8xrcsxMJ",
  "key3": "3nmLBVR73GyCxuTtGWx4dWMQSSpmF1QG7zeGVtM8HogRQtE95zpG3u4k84pA6quhKt6kqkEfCXgAhLd8yfMRetnj",
  "key4": "26Y7JZX9CuBaGLhyQx9HdZHZjiXASrpDumiwNcj9gxwHa9XAE4MesgneH95pVeViUh9pcUK26E9AQoKyM31Avj77",
  "key5": "22qbdM3x9aWYkuS5QmPQFyStzMKPAVHsD3BintJtom6SCEc5jtJNSk46nz1MCN4VdogocRxZrVdUoPas1i5Zbixe",
  "key6": "2FzFwsb8Ctsc3DntfBqUcEtfJAoExKBKaJUuBF5tEbtv2GLn3tAE7xCfWVo5JA7VyZvWVkVmPYBpguMCdkFFoWC",
  "key7": "44PygWvCHzt6yYoFnR6Rx4zVWiwJRrCq2W6RmkBkowbB9mwGZGEarvibpr9CUmKcuDAUjsXKUyp3Vb1K6zSsg8ao",
  "key8": "2XoNia9e98bHJLQxdDfWSYx5zWJeJGMfTc5iZJKoKJEtQ8cQHv2dhs2KgxUsrezGqSM77aumpEieHkjkQ2ufjdyC",
  "key9": "4pi4WbfwFdnHjtp2g3NDR3q4FNo97HtYCabZMt1i1fW7FzXWMhwjCAQpXJM7Kxsr7qzd74BoZGsUiYnDkHPvktkK",
  "key10": "5kMkMhH5Y35yHRZmQkwKeQLtH5k9tskoiHxaWJefA9jr78h6EV5xikJ2BJGehVkUPtjr85fqyGVHXCNGRRnq8ZRd",
  "key11": "5eYnZavaUi8v9sB1iDnGGkoPxFxvEpKeuyfQHg4hdAmFu85282MxhQ8wFPeaFEx1YV3eznMpd839beSbhHcbt1zs",
  "key12": "3rYSEaWJV25BJrSgErFK7ZKFJ7PgWnyuiu7Sa2i3L1ZHHwWmo5PssuMy8R6TmtbLKznEzdKMKVyi5za8GysSDBg",
  "key13": "3jvdBSNX1WM99tdghqJ5EZeCguCRjYLVm79kAJG2EXTJ6oBxgPf3pM7JzrudX4zDK1aAvut1tKu8qcLGRveDV3iG",
  "key14": "42PmzvK5Y3GuFYGacD7gUXtkJ1DPMbYZsm6AQwZrkrkcqEvX3orDWmrxZNSmNxRxBPVbbpNYydZ3SGmbYZDhx7mL",
  "key15": "4KDL4rd3Mw4Ya7NwDcsBgznX35rAsopB3XaN7acwBaS4jCmECayCHoRWBSGELiw1kRejEdnMxniQyMU9hRTUH63i",
  "key16": "3VY5i7kwymRxSUokrM8gbN45DPFT5dizktaZiBQMAzRuXj2q7WaoU5Ri7gCiZsDQAzVatyZpxpG2VMzcuBEPjXYi",
  "key17": "4ASZU3gDVrH4BEXcdjHWrBDygQd4Gh7NAaiKwkLRz3BfvFFPCt7QvqUnGmnSmGMyExHE4NY83iYSaaPNRCzNpQ2n",
  "key18": "31ELFMnHm8yvEcpcagFwoA3mkzJyEPSDUMcS8kKnZYMF3RAoP4JRyrK4c9zKGRcZrd8cxUxPi5QvnXLWDjpp77BS",
  "key19": "3v1eaQhqGYFMjFaU2rwtVTWexKAfBU784nkJBsJZcDRSnXgur1YXDBtaJuCiX32sVB2TmHbwfdyQPZgjuEs5AVT7",
  "key20": "2pgQE1pM77Do8EYfXq6gUdjfFFseuFFFG15beVkPn8GWTNdLcqW8JgGymd6Xo7no4DfUVWRpb9VEyKh3qwVLmqfz",
  "key21": "5k1S8EPVVZ3Lv1S43vZBMUZn7Aia7eYqzrwWb1z1QnPbHdAQoWn1AGuSVdgnjhRRuuZzowX7q5QXS7y9jKkPuoT7",
  "key22": "5mW3cxCGU9mE6LVB6TP8mBSfeZEcZCUZAK2G649sZPbtk3mBiZYwv769W5An2amT5gZdL1x8G1T53Wpz8PyMFrE9",
  "key23": "3NiMLcyhxfSdvtDkM3LaqoswmHQdnB6hRBPVfqPTpRZRqc2RBEgB3TQMdeKKkRCtCB1JP7aRdg7FHjUHM9CpzCZt",
  "key24": "RzQUSJLH5JaiooSAynDwhqV91ULQa2nU1HGVT1JPAtJU5tDq2iZ9WYGFGaDJ6yhr31oZWc8XgWNF3jQ7znjL6yZ",
  "key25": "3hGARuMGQCDnJHzFpW1btPZk83HgJhktbWjaR582JkB1iNU8xTbKTjS6T4WDzZTgjZ1WgG6cgUYJib38pxs9LFjC",
  "key26": "4iwq9Hyrwo698f7bkdncZHiXMVaykijh97Gk8cdmEoKmaR12o6VxZuSxwrekaWiionXVUoff6URBnRYixzkTsp6Y",
  "key27": "5jtGbkp9Esirz4jCqabyztby1DY8qqnvmwzuFRJtfgYntZEBGVfWGK64nadfGXpnWYRPML1fUgtU2LA6fACMs7qy",
  "key28": "5jB2atkMK2SeTF4Rqd4SVqxWFBKV36hRLXwp359D2oLsU1wfZ5HqCX9kD1F4LAWx9ryz6Y5supzmvFo8bqkKPbva",
  "key29": "24ZuRaqotDengsXL12ofE7ejzRgp3STXVypDdxbd36w7Xdy61GMiyJ8htn9r5SZrHnWxHNHJfkcmc6ebZfGcGGT8",
  "key30": "4M4J6x1DTyn4ossB1p62nS5F21pgBg2x6iXJYYaZk7pvFAeaELYT1hPPccACP9zLSJKkK4xJsZUpAZfZD1TkqEmo",
  "key31": "331MMm3LffjceuQtZwp3BGuF5ovX979RTaVTDtk4D7iaUDMm6mJDxQDFgqngAMpVPR4Zu2KufFdo7qPw1r9WUCbv",
  "key32": "MFVxej3GMUHAC4poPxZjX1JQ2XxQ4zi8Z5bVBKwzd6jCF4si8z46R1eJ2skb4YXMNuGBCZYY9cMiU13Lpa5mhJu",
  "key33": "5kXfaUuGBMTPoGx8XGbV4aTYgaTfDtC7zx45k27Pm5P8eXU8c9mAVTozdJqaMvSrtbgaorXfPhJQSRByXoDhWsYM",
  "key34": "3QhQW5v9dVH4z3SYVr2ou2RCZUrmscBbMAqn81S1dDHgpiyudaN3MbrX7UzpEyQxvtvPUUyow43UKyQDai4rtMbL",
  "key35": "2r1uMSMBXgkQoxYtJxfPkwCzKMFRqUCY4mXddJvN8321wQwWUYFHqJoCMgA9tfwtVf1iihWtJVi3Md76HnjxpJzS",
  "key36": "25ALm74AyWqnREvHZNVfum9N1azk8yF34aRPTXmL4fCNLWhzHcZm6PSd54MSnrtbDe4tCKGTopRhVTqkymTw2zCa",
  "key37": "CYo6EzQyVNxEAyET6w2ZW6SoxgvbmyCqGpno3DM9EEyzkj2Waijx9ihaEmc2PsDZ2MSAecUCxMM3y7NeEP2cZvw",
  "key38": "28o6VeSFi1qu5vHa9jb5LuTmVyRQuWJRtpgXWbS4akYKyFbCW3uZ7TZCyQoX1HVXqx5eA4jhj8RMfK5NVRmGQ19z",
  "key39": "HrhgHXZMe7vHyQ7sNjJqLi69sd2QQ7vxfyS6v6LByjvEjTQWMZtk9mDYMr6Ver1WmQDoB4WoNcPLg1EKLDukjBn",
  "key40": "33zW1xXy9pz9Qq8x1BQB34HHzvsNRoBmbqmZdT6jVD3mwFEMU9nbCVK22xUcWJbKtfJFQu8M4vcKr6WCFPAjTd3y",
  "key41": "5TqJSoR34fnown3AUjNRRANCHftretzAWv1FSZRDCHDEtCi9pKPEFFRWya2v2BiFVgN8hz3EjU3KqiSZ3aZV6XCN"
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
