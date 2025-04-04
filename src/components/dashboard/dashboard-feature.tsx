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
    "4CfvRqGbpuUJS4CwVbcu4dmVvZqb43F14xhY1me5mnMrTEqaepHDe8Bb38Ha6APmmUcUevcEeRsXLSfpiKL7tgJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ZHmJ7LGA8zjMJYkyr1Zy8RhkFm2U5vSNyBkGyyRQZht5JfADE69dqeb5YqtsdpKuJ5Ugv1fMHFcG8tVfTY1Fnf",
  "key1": "2TtoDZoo2o8UZ8iNsqYG3SfffZaxpghs6qSBBjkTiNWoeXBTnBikHDDEpZ8J2bT5VLSnHkTU54drnerYrtmTfcWs",
  "key2": "48UhttdbNPmRyrxG7iisPNwjNC2vyjsHsP9Gbvp8tYVS8v6JWqHpEqaRfQcvq8a3TBwZCZoWEfk3CP5TmXNQJ4dC",
  "key3": "2ernYg3k8gUUnVRrSXmU4tttAPtmGoENwMKHpY4oGx7hMS1MMcpawrrKGaT6pQtbHzp9ML32R13yZBt9Rrv3PGvP",
  "key4": "3D7rrcBGKxyCWewoGWt4Cv2XxKoXZxoVh9kGUKihDaBvfgkiMtGzFM6dXoCwAMtZuzNuuBHKQVdPttBb53ujoZGD",
  "key5": "y3E8xwJSjo6JNJbE2MFjbkzSaRWSPD2d2Z4uNdSLX7LQynHWD97LmmXfGBSmCQNDm1QAB4X3kfdjiUDHa9Xx7gy",
  "key6": "3NPZSuqMExDsoWBo3werXhaEaHGRs67JQyFCNnkgdEjDDrBK5RdXtYLWuo157wMeVMqnYxx8rrRQUg244L1qCeo3",
  "key7": "3cy6ztPX1RS6HJYJnU66APvgE1t3MKbdNJEueaKs7KSSVZnQcFCiiYEDkg7QrMRuFQuQwbeQfZvdGvwXUfp2EwkE",
  "key8": "HWEcE5JhVQZT6yPHwQ12mmquChpq8FcsQqQzeUpBmYXQ6mVms8DuSCx8aAC6qRtk7XNsJL8ueQ13wVqCQjBfg23",
  "key9": "2fmJRBASiKbFQbXubZtm7gcAko9V1Er7w2CqJSi1okAFYE7E2hWmLS4MZz8v5Ab6NExgnX64H662GvShNa6MFx7K",
  "key10": "nGg5gtv2qUBX4Xr1TCDTETriDcgb711r9sbgwJoFmty2AmznrtuiCws3tsgHnTDHAtpvB4L5YCBC5RSsuG9kM23",
  "key11": "37XHjdpM4SbL5aS53mZnBS8ya8vv37NgoKVrkWqU4TpvGxuMZZ5q1tCnw6uwmHhwSa8aYmkAqUK8PAaWU4JpoPVG",
  "key12": "3VVhNQARFEZvjN1EvD4xUmX9aFR2Jtvp2rtyM4CGCCBg9tjikahVXNoQD1k5bN5U86yFPtqcWwy5pxu1Gkt51og7",
  "key13": "3tz4fRHxP9TpD7oZ6qYggbHYJR7g9oePwbB9pa3YnYsiN1SUiXEJnsMVtDrN4ka8WAkGfkSwnJVKjDEKYKpwq51f",
  "key14": "5Kt1sWqeu7Bju5bQEbXUuWYgnV1JB1X3BFvJ7NQ1G45rb1ZPc5AbtEowNt9yRRa1AXjuebGB9FWoENgPXvwM31n1",
  "key15": "63twDr6eA8KjUTL7YzpMVejwxjjhp4EvEXn4x8krtL4Davh48HARegVYYaaDLqE1KnN2hcFyibMaup99LUYZmX77",
  "key16": "3dXUimqBqWnxiYQxyuvA6tupvGMj4MtEKmpvtx2GFM56z2Exfr7Q93Was5cZYqzWDnKAWqUNKhM5MPX29uQ84JcY",
  "key17": "2HaY2WcprsiJJM24V3kgXQam14ZDoGhMJKYLbyaM41veNuo9YhPLP1ijCWWgPrxE1WzmDNMKWHGU7NKpHyjZs1xp",
  "key18": "21chToyr7qQNeehuCRdpnpQGPamoxwCWGt62K8G7FAkjKMSxryFs6cmpRAaEd9sdSX2opwpav8gMP13YuX5btquk",
  "key19": "2VHdndZoFMdE1xiDqLfsbfXsTL8wnPYVsJyqB9cYj3WzLDEdqkGnhUi5uDXiEhuqaFg1iWdJDMrxfawiM6yWHYTw",
  "key20": "5VAUsfymjDXgZkJ6VuXjdxpei9UE2zDBt1nrjLBBCdHtuorWxVGqXWTWC4PypnmCGnBcWNm5D7DrPEFgGtSUEcCS",
  "key21": "28EsoNcAQt3dHLaZ2i3V4exJU5oCzgD6qcaZEcDyaPWG2DLRjJNWJGnLAPSCghJ2sP5p7oLtL9BFbh4Q2oYxV73k",
  "key22": "afAjhBfE1o8cPGCKoLdg394LBGqU9VQEsG2QmHU2pBTApFGwTnBfom9LXTMaad9tajMDpwKZ2kgoafT6npvAC84",
  "key23": "5J183WZb44ZCnUJ1ChpcWmYsdxbbFqbPu742NVYr55MxQFaEfVkakGaFeJHzJTdN5SDyVhx7z14rQ8trYYpWxzs8",
  "key24": "Wi2st7vrJkhZvAekpFgzt6WFgDE49BZAA5ZkbY5s7vxU4rPMnPah8dcC4RekGdMxcUAm7pFWUuAZtPtobF6BYfK",
  "key25": "5UMKkLtzkh9Z5w9gKJpWwcQk7MTKHxZN1tJ1jtoB8xfSBzQ2D5drvbtVs1Fo4PVpfFiRqFcKYcyR9eWcz62rZQvk",
  "key26": "5FYjtXL9NK2M99i9ayt6N6ZekCj1yb15LQvqFFrkFArUdR55PDRt6Cr22cEA3anwQKCC8eeTjK3Ng9jcoYYxETV5",
  "key27": "2ixNurwPa84SDux7i2v113GxE3hbxGQpACNVToS56uqvVGgFC99NkPFbYt1RyUKYftXD21RkZygURRxnQXc8uWTk",
  "key28": "M5AimCf4UoERH4cv6kXSTDWfULV4VGnseRkqpU33MHm3VkkR7UkLdghpWwf9skcNt24jKnrCUyE9oqwumLbphCu",
  "key29": "2WFrfYNCKxFYACzBLVgMQE88BzvF9r53Bi8dWGRPsAcDL8Rno7jNGLucfgJFQCmp5yHrNe431fAmWizfShqwMEyp",
  "key30": "4UFkTeGnTVgVzS23yeXb6ujbEuoEYQdCLocb7VxvAJvQNXnNJo5bot8tW94MMsPqEqwsyeWQnfyvXym3EKgZjLWp",
  "key31": "K47eLdrMX9djbQKy2Hg15qvshxiCQ9XpoVdjpeMFCRUjcH5y8yv81ti33LTzQazFEQkRVC7G6g4ap1fPRhooAtb",
  "key32": "nnePd46zfJ2cKegWuirc2dt3jNsXFJ7XigHaHk3vkoHamAmXipmGTK1bkNgVy9w8BnnvUQC3K9qEAmo5mD5Eqiv"
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
