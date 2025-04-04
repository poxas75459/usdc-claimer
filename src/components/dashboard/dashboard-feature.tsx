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
    "swcwbaanEHupeNofVJX3S4sgBWgBHxLEgHpvhuZJPpyDrBZ9h4FhcutmR5ZCK2PYcp9rnz5RpuMMGqTaSfXWBTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8HMruN7QUNG51VEawqCs3c6Fy3oBSKfi58fWQutQWfWWxKahbEt6b3iY1hrUSULcnUW5nhsW5TKbKukWppU2bG",
  "key1": "2rw8JKAUKmFagSnjAca36CTenmAr2cbTohGusvgMfij8quvSsDCoVcecTn1XNqrJn5EyjsmPELTt9uY9q7g161YX",
  "key2": "2Q8UzoJu6J7ox1bAZCXUo9ZiT6A9PMJ8xR81NcfdK5od8UPddosX2hPKiHG5pTDFna6k57ZL6tvN6MtdpbMtCBMD",
  "key3": "3WR7weS5gnXSdqCsXzTUvDty1axBRCtV9oSSxLkzwRvZPPs99vNMgrF4kAFHTA1DPxszfL4dXaHctvVKzTdUe5t",
  "key4": "3fxH6uLf283H92iD5JALAUGP7EgeBw6rw9AdUkxDrqjk6QukTGjWQFKw6WMrYdCZJhEixD6VSDGBp1jJRiSA8d49",
  "key5": "2TCCjhLxqoTYQa28DYEdAH86HiRPJGykmboCPKKM88i64qczNUucbNBU3JAhf31p2gFxGZjMUuiT3HY7ECmJuNhi",
  "key6": "5PDFYe6eBpkgVQng16bLDemJhVNFsV33bxxuHAuRzHjvDhSJJDLKEzqVLBHxRmTvEspifcpaFatx1wB7Y4nfWQfN",
  "key7": "Knza8mxrynytPKkbD2BTrbZH19Mih7TotVtbT4zinyXP2JCb6gvK5tJrsC37TLWs7zPDL4dUMbEAj4faE4YzyVL",
  "key8": "3MRZggVLSJZqgKbof8cwx2R4kPCS4tiAE3BLR8RANVui3rGDU9Li7BdPMut2DBZeN4fi91hcC1kkQoGAtgwLYq78",
  "key9": "D1xcixSJEMhHXyaht4LczrramwEf9gyZWibeMT98ApxptPgDAGXiFD7W6QZ4jbHBJEvP8thRXK3crotErDtwiF9",
  "key10": "3EPNkd4TvZnX8Jg6x6VRkdbJuTPzGgXFFZhsVAUsHx6p5N3vuENcY4F9quwCtJ5hJMncpiaKM7JNuiP5k5wR67db",
  "key11": "4ECknwADtxp31Tbnc7TzMAVQNHTpyyTsn8dHjQddMoXrEQ92JNjfRKLM4xNxzZvX4Mpo1YC9ZbeqSGi8CwahKtRh",
  "key12": "23WqGYY8uwsyeysZ3z9iAbVTwXfPHmdJ3Qe9t6cfJmUYfY9gzCqQrZevezB7YVE9PMcd4i2qkZF8GFqkfCWKnvr8",
  "key13": "2eCruRK91V3rPQUNeEBE1hDZCzFyPcVwyPnqwMeqw6EKfhhxqTdoeqUQtzedpy1cx6oKRsNb4drFDCNkUhH1WbfY",
  "key14": "2tagzWHSVZmnVh9pye3BAUW7mZ6w5K2KV4UK9ocK4cvdujdXyULt2F381yH4RnqtJDHkhrmShifKbXbhz9UtcUpn",
  "key15": "9F3t6LJyToJQXJkAaGXmxR6ecPQM1iWgECj6N4PyfRk4kL5AvGtrCTdnnMVrL62fvTKpJNehx2MQmQqvaUXRs3Y",
  "key16": "576sTzzBmku5dFovY8LUHGLJnSHYNnoJD6R46gfAq8jP2AVwnH68W6zRyCua48kd1qqb19DDn1Qp3NyJseDmvrXe",
  "key17": "5qKAzZfYV6ErxDhNuCnHrWg1vU93oJiTSFxuYenrc5fscM56L2xxYjqVQJWMZ6WevUd4HmSq1EyHJhM8WkNmtmxQ",
  "key18": "2ZjNhtgh8hmXtZGDzWgDjSG6gVRaqMHbA7nCnHTHizeRT77LBhW2vCkPm8X6WJzLpAXk39VBQEhBQCMP15Pa4ArV",
  "key19": "3y5chDCehPHAZHjk16A34x3ydJGUbTr3rykYQQELPqGLNeBWpdy8TQ31atKnchV4LhrdPUbEReCNNJYYgDgm6qHe",
  "key20": "2YnPiqtACCHVvtYj2Am3tnDqPMURkeX1tfbc9RhmFq3ttHEnxfYp5iE2enV7gdYZ6j8KCHsYe3K9XVwRGaDtp7k",
  "key21": "5xdp8XKMN4a9Q9X4J66sU9ruLiSAiV1oARgRUPj66xNTLqzXNCbnRG9XyEDsoX8Nf9EoyE1s8iyJNkdosGB3Jpj4",
  "key22": "5UmiPNwjBZyYDnBk8DRjSENZ5eAD4z5iN6dwGVPoqgzDUXoWCUvRGsptCisxjk46VR29rqiMUD31N1YBdNVndy7d",
  "key23": "tvs5nuMK7Sdn3iHKL7yMWZmzgnFoSbTyVUip89XYzbBZ8pyYvcwhMKd2jGCsNprWEUfY38oEQEK6bpbpoTBEmSL",
  "key24": "4gu4WmhHfF8Fd8qospnjM7WUuAxtFs4T991ULNWYe2jJJXvqtmNx9LnbwiUexoWVchb4x5vz7ikSz2rNteJVnejH",
  "key25": "3TQ1NSLVKwML6CKMDdjZPo3in2Q8hrTVNbGig1RQLWhnjjX1EHE4dXK6aRzZSz6UjZkHKPe9h3QJAtQ1trhyxFvz",
  "key26": "4ZahhHU2QABv85eH6GRc33ACNWNj1EuzMrEXbYkf11PvVLjquLG99f44MJy6Cqe6pCzcCSkeSafvCtrzmnncgFcG",
  "key27": "gXW5nu47AMcekMZNaYbaR6RJNAHjmc81XGbPLnx5tTCS6LHn2MFBDYHsPnDTeey9TtcV7q88xGbALu3UF3mswAY",
  "key28": "4TGYm5SXbRZwNBXL163HUveWf7WUsMrVKEXPAuhpenrLBm6wcjURia4PoyNA4N5ywZJ3gESZQJDKTXSF6eNKoLuZ",
  "key29": "5iQcV75a8Tteh63GbLmu8cYuEQFjKe6NtLx5ENHW4P1q4KVdQH8EURiNDxizeHtUi8zhxFUxeh1vkF8vaf2HQzu8",
  "key30": "5NWMqig3KR77rhdV9YbWsfJfz93nonLxWAYC3G2jfWyzNvX5Q5sYC3ua5q7xATwM1qXSwxUxKrrkvxCrhbEPUAiR",
  "key31": "Z4eV9w4wkyLwZf7TtUtB91duNZNeFHePApTQPHJuVY2NJ5Y2ysj4PS6VesmDBtbWP8JXYcS3bkkCM47yhMuA3yQ",
  "key32": "Do43f829ZEns1ApPiyPwhDD5euUd9BJ9sGWYQ92wgNPaJUkn1QGfuh9XRHxFFPoxNovb1hn241GQS43BGxhcKVZ",
  "key33": "5iLasDhzhCS18Uqwa5TgAtVxELtVhBGW3nDcBrNj7UmqcqMfJ7zdFEkD4segJuUv5pMLndv3dzkrnLrCMeG7zwg7",
  "key34": "3dbvsPzZm61mqFn5ZimS3872r8kjdnA3Tp19yvbtJvHuipEDGRnrJfXWX4MhwuRK3Vii2HUhi9kCAQ8PSbhhLjE4",
  "key35": "4VZo4x4bbvXE1H4YquuEDXncU6BWxHEhCEwoEmUEYQsE6P7uAhPuU6njRc4oEJDwctsWMxDsbH5hPfEiLWWypam8",
  "key36": "57eqd9YQfyKZeDsi4Ub8Wyftorj38eMPi4m65udizqzWLuNafJTvzJZYwcEvukKQKMDAEuip5A8yHL3yquEfKnRn"
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
