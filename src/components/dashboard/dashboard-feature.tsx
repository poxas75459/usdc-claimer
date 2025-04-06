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
    "2ukYyeVeS7bc6ZrS4EQFVBzbhrteP1mShkpNKcj1B84gXvtFPubnjAo4Zg6EujR6XiKmeeg27RGBHALniX2f3CCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3njEupsvh64J6xGEts4TNs8AZ1vtNSsubUuBuS74cR8y978VeH4h8RBzTqoyZQf2k4wgHPsNg8fKnqUYePAtuxM6",
  "key1": "mTyi2rzgSLyPqLXzWUV2X8sTcMmPz4RfCm6okYoDcQUtDBTZLPRU4JLrfT6dC7M6N5dTbuYNoTDDKYgtBHuiNLG",
  "key2": "Jv4o5gjmc4WVg5kneC9cxVEihqBpNBXR9oCWC2to3UXwxPkvHmHv6e2ZV29vbpyKkPY54dK372u1t5Bb4JUEQHY",
  "key3": "4iviQmdorU2oVPBxVWA5c7JgEu5ruCJx81n8EjgtkR541U1BTt2KpQjjBDsDJGbBctdy1tESkYpepRmdAJDh1uVU",
  "key4": "4GAvBy7BeqKqdFzDzbSzQWFuJsrgEtM9US6Kcf97fRpdYtYLWznhfcEsLLqCGfM15Gk4HsqBCCu597oYdkPNaXdQ",
  "key5": "5rKYWPgyg8gkufi5JoZ8nZuHLRqp7mErZybgBCpdZQWicudg7g9MTCGChqXJZQ3RDnUS7y9CKiQBYYsCEiV9iTC6",
  "key6": "9srWgQLiLN2FyefaQKbbfDfkMpk3DiKH5fsdShie2dhvbJWd155zKGMLPjBRAkX7WXwe2juVvb6uEhESUmx4DZz",
  "key7": "4Kg8GAcq2ps3hbQhdqVh8CKRYANQXFzm72R8kenJaXyAx74gByua6akTxGYY23RiZEArnW4W8dLRFskTaLpE2FDa",
  "key8": "5HcM7uKsR6CQHywAT8BpCuimNcN3nPk21smFaKmdKqaZF1ibgvnviKeKiuXJLLhcBqvuDCptzfin6DVnuiM2zx6f",
  "key9": "2yStWyYiP5BfbHczQ2v8apWhTtqTbXBCBCwL4TRVfgz23aFdekcNQx9wKczGKqEwex6EgwJ1MUjuWMXMsfRUEbk4",
  "key10": "3BzkNFHosYggwJSwCsnRyi6mHQp7sj7A8zBkJmZUPqvjkBv2bAWHBfYDztv94yQJxfw4Y4PcseiJEC9WnQ3VPaFJ",
  "key11": "2vWXHReFdniojjxcupGwMUsZxhT1TnJuoUvGYo5HQUyRYNjTAEZwTAtF1Ly4KjULx82SoT7Pg6eHSGKUBdRPb41C",
  "key12": "VoYT3bHrfTKfkVA4KxwvHX2tE8d3ZimnSeRboHbNABWAiPPRx8ezyjorF42W5NarfxbncE2hELQ2iKESVZC765j",
  "key13": "5riQEpqpcDwhkZU6n2rBWf668cGQ5TFcL7LDjCaKKpFYr1hF6QTaHayo6G7Lku3WoqrDNYnJG5d6vRoNaFur2v9",
  "key14": "4Vw69cJYWdHrtBTJ3fxa5FTD6WFE7Ni7izMtBiLn3aonHkmVymDiYDtYWTPPASanZDKUwWkKczBjESvm933eJcLw",
  "key15": "5fTMiydGrWVavguNqjAKULN6YwkT25yr6ARdEFo66V8efuPEV6dgL6akBtBfFBJDJg9xrYkt3mm7Bc5MQfHgoS58",
  "key16": "5ocwV1jtc2UBGywSMwi7qF855mDTBKMJQVrFCaE58mxhMzXboYa51UmsJ4KBtPTKjZ6xbhWTg5Jf7U3H8FEJ6RHw",
  "key17": "511BZ9RybAfvTqz4dCy1dQGy4FxF9XDwGvdL93AW1C1HUv7tVn4YqG9LQkD16RiZrL26tmpZwGqnukrEH14MZFL3",
  "key18": "4PS7tqWNNSWB7xvVLYy75SQv94ukme2KwBFbASNq9FYNzWSmuks2rjiELTHLBvAPrMk5xumF5agDVJdg1wa9r4tQ",
  "key19": "GLejEQuBFK9FWSCoQm6QWd55kLzATv65wTYHgRJHELMoQ36Hft4hmf5vLaiHVwriNqtcpdUWtJ9BADtKAwo5VpR",
  "key20": "4dUcJZGDMRyG9CxZV6s66xTNc4iNQKvpbHoBEgHzqwtqHWbj97zcb3WDvA8iXGLV3am1PCFY42yUj3zX1DBp8Fsa",
  "key21": "4B9SxsTVA7s8beSf1gBgScrUdyLcNniHzKEhv4BcnyjA6TPb8fjnJTwyjNtfMXiR4HZ7VAPjfeE9JA2GQm7Vp8Wv",
  "key22": "3SnAS2uXJbmMKKyN7gLenh279aGdPAZE2hbgbVGgyn8AApPK6moDbj9iq35MB33naYMgzkD8VB3SLY7cKi1VnPJj",
  "key23": "5KA9PVomY5DfXcSK1MEyoarc1evvzdjkn6XezyVsaHEXFeko2sHrkZ5pRi8GdzF2YhPenZhMyMyRRr7rbfS1PWjb",
  "key24": "3baZcP899EZD7z9LiRGHCarPGa7r8cTsQMtEKgMwsNcimBvLk8FNcRNQ6tMdZpUUtFDA7G22a8EfKoyxDJu5QCir",
  "key25": "2KV7hV3GsRJazt2gKj14uNpCWSn3rTsKT9JNa3LEyytptPLH3U8pE8F4iHYygW1VBeiTD1rgZ9uibQenv6UyeQWN",
  "key26": "5ro16p1Qdg8obYNKPMniXpfAn2Y3zne9oUhtEJfPNrJ7Ait38YawKmiSpGE85gQ28oziyo6Xw7kFkVwzFJSLUM4m",
  "key27": "3pwQYoVRXxd5nmsifNqC5tWpQESA9fEPxKVfwTySepmjhvmSFeGmNiiFcWNw6UeMSkvAg79r3ifiKivocSiM6qmP",
  "key28": "4rCJeukWA57GBfBCDATWtXGYupSsJxRgKtc27vCWVV9ryiv7UGgayvXB1s137sLcChC4EV4LDZm9DtwCTcvaSKJL",
  "key29": "3JqCwGNnpNBw9uvjEyJJ4ZGy1UGSJmn6YezGuCGPFEh9QFSZWtPebvcXSddZyYnpMyaL1WTmEea74uq75u3R2uuD",
  "key30": "5JvnEohJaneFbFLsvSzcUcvnFPJVXjzAEq7ybaigmdhQZzUZCNvPdaSPWXHfZjBue3FWbPT8WHeuS4yMUghFUFYQ",
  "key31": "58g1k7JMV7xg1nZ7P5kND5nR84UXe9iEsMJ2cUoQUjMxhnyHYrT1jg9uUj7zy3HSqF8DgUiGi1q2hCmyWZh4LsJC",
  "key32": "3ZTVDKrx65ccv7RoGh2iS9hmWh8gY5jPgettyUNNs5K94eHpe5qDsnrztoo8bsaLbxkc5V1sv8DmtRj5g9XfZbeP",
  "key33": "ErUVEqgGqctozFQcnY7ZbTeUT3aLkaKdiY77xBVjaxKYjLbcseKEQbUaCasgf8hWBcgaotoPmcdV3SeZjWkE8cu",
  "key34": "3pcHinFmvW5T2gnfGhHByEYtMATiARyobb2K7bUP66nqxARsX1tV4p9ausA2yHMxTkYJkaExQWegqgG47AGU4XK3",
  "key35": "nM6bHtsWvsCPqyv6FGPtcr3M2wEHY4MLTtWgiVYJ9pmGjuvCJrMo2BbdfUPVN6TDjGipHrjR8qZF4Xz9UReCwLS",
  "key36": "4bZhYcdAYVuJGQWscm3uuVBmFiEuG6k5xG5B1McVLTD3fi977bZf7ih2qq9bC9CuR6eErjgsnxDvdPshAjS2jLxm",
  "key37": "2pg6hwTCit1eZqFPNQ3xdZghXQRr1C9ayyYeRrrL8Q2RAayCqU3aphQL11pNDpBM4w13R8z3YKnbfVZK1nURbmki",
  "key38": "62gNAP62Vq57MwjbPirpeg8withhWENsKEamfZiqjDX2SqE3yBZfrAtYUpoLWEEMZH1BHq8dts38fxY2RinXnGBV",
  "key39": "ofKy3Kth35ppHTKem97P9MK1ExxE5hFTnbZwuVisvzrVvzZgFxNH7LQaBHn3VvB2NWQaueVfzynatKV5y8aFF4C"
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
