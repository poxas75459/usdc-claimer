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
    "uVUiMQiSExgAq7NJQNCUSouXJLpsnbDnTgxvY8Hndak6LdR2Dv3pnAuGKyA9eqMpyBkwZjYdDQY9NEHbkoZU3jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzjT2dqsSXVKgFc53VAXGkoQx1REGhpPCJyQQVizgg37mEbJBXSXjrrya5eRa2jX4vbxsCNxnddP1wMw3HnHiwZ",
  "key1": "2PLzQFcpfdPkj5JY72xznEwzoYCaiCRFNvKqj8L3xgWaYruGxUYWTjYEQYeHGaJJZdYVPcNxgBSNeX2aUrcUYHQg",
  "key2": "gu8QVoJeLfhGyRwm1gi21PYHWXZjYSBrE7LnRE4Qsc9NyRxnciHmv6fhk6aha9GuyunZrbUQVYAD34eyZYvFsP4",
  "key3": "2auK4C7UiFbCZ8bJ5XcWXwdd1CwUcRyn32VxgjPXDQi3M8uki7bNZUkPmSQMAmCxGYvF4fe2R9GcwzMLjd8KkdDf",
  "key4": "35zTUCV6RB1eMJ5Uc7Vmb1As934DPcZpJxNGKMNUEx16quWyNkorxDroNP7MXiqPEWy2uTvB4tcYqWAHKTFr4Fx6",
  "key5": "pgR7gzCFnpPy4aP4DaKvF7Z4Hmv4pRfc53q2BoNDveWvQ2U3Pmd9tSyqFGNw3DQqWYdQ2ToyRvDCPJ2rZti67Ba",
  "key6": "5PEj5JNEvD4Ko7iob1TuPHAbhmJwowmAuNBjZaRHYM6CUAeUuqvge7bV69SQTNRvrnEs7oRac9x3CGN5XYdw7Fy1",
  "key7": "4MLtCUgQNHbtVRbWzgNb8CvcNHbuR4huXaFrdJMSmaJvcfnspCd1B1LtmBzau6mqG5EcSA6eNY8qSwjdHiF5pNyQ",
  "key8": "4DmAuRiJLTnUPoxmvSLBNmPmDy2T9U3eH4Jdsh2xP3T8CDwMAUNhmzLr29CGd4ZEzAW9Cgjt3vPJ4i3NqpC6tPab",
  "key9": "4YhRjgwUW7izw18nQR9XHPcCrWz2Ex3R2GC47XZ4VsoJYzpNPgE7rZ1UW37UAx7GtKqMxcxkNNmRRUR9a4jgz8aW",
  "key10": "4RocY78zFTPhAhzmGnhYb5RDf4sFmDRgaozgrRya6uiEpkGYZHPHmzwUreuXJ7sJMRPc2jPMV1igcoPbgD7ore5B",
  "key11": "4NgTDDeMYMyYAaYLw9NXB4WXWDkAyBE8zC5WNAaat6Jrd1p5idRBS7MnFp739sVRrgY8nn4qestT2Rja9wg5r95F",
  "key12": "33aWS6khExqYkgYjfoza3QXFzKMPXqFonn31JqGVZKrYqTzqoAnA19ZwArB4XWZSzTGUS4NMQyEop5oqDGvi9e6i",
  "key13": "5tWmZ7uDuAiRtSeESk4Lq91pdDij1nmL6U2bJTAs6CkJ6CfPex5zFPt7MawErqAvrDXXDUQVZKbeY7g3e8hZMqnS",
  "key14": "vZWiatPXDN7iMmtSRZmMrqso9h8pDWUokx5sqPprKSeqtHyB12xbH1xW3LPCJejSaPL3ssGoesfm6ZbqfT1vSPV",
  "key15": "5eWdgBFM7aLfMnZnrNry25jv6wNA8PiHBzLumWDELLUJAtdbtAjELXXT2EQgWzsp4q2dAEZRkrnvDzz1orPauiMo",
  "key16": "nKmd5c7a67UXzrDvv6XfFaysfhEaNkkbZo4vea8aNG7xQwyDTz9KNmprxTuSHGdTCT9tqt8ArAhwUKGMhwdZqNf",
  "key17": "47TRvpsfHGCqc8FzbkNsYAgFi4orxTUUeAH49mhdYB5Vu59jiiJ3Xm5vxhPw77YdtGyog9ZZc9sCBPP9oohmPc8e",
  "key18": "4rrmVkTUqFEAd5g825qytGEYmBwRCs4d2HsaHJ8V7pRsBfJFKh7iC1WggzNhHkpffnQ5Rqsj7wwyDjBHEth6TS9v",
  "key19": "VHJWueLPhH1LGM2gCZaqLB8JHdL5LWijJF9hmDqSqP6CSFwYZcYNvxFPGHcwiZXeeUh5NdCxdWJunKFKP4qR41s",
  "key20": "37d2fmMXYmkZdLVnZPuQCWzVkN32Eo6NNWrUrsnfyfKTWK4rtUsiiPWdf2Dq4s29A3rZsyKq5gRR2ysVKjPAWpwF",
  "key21": "4Er1haCAjaGL7CPRjxGNF1pdy73cMC7cUqfRJBh7f86z4AEWzrf2TP7UCAoycALBDi16vgNBWGUcAvBYS6iLHGRT",
  "key22": "5pKQyW7xqcLXyfX4A5bUBEFSWxvxnUaZ1yMcvHd3RBAbMms6FYyWzvVC6SBBioeFwPy9LjUS1Az8W9rpsq6byYyf",
  "key23": "4KmVrFJL43TXU5fKBLAR3uTzqh1KH9D53xeRh4pVWzEKucVKkkYwR9zH11D5kBzmufdh1SrQ77zMvayvE7vTM1Gf",
  "key24": "2BM8upC4rcVbA9VN6mwqsNKau6jSGt5z5aZDiwgU9KsPr6PsjAfShsEtYtHAv731FfRHEpautEXK1qsxUay485uk",
  "key25": "5cGNHNB94roaWNPtn7CjicpebTSYfwFxhDTcHcEnbttbiYKR9Do3QLCbKXMZfSRiBGSeTuLPp373Uhnhf6c5mhxZ",
  "key26": "25MQbGkEkbqUAypg87wtit6jaGtz4wa6PXP5wjs8MRyxKgPxYkCffYZKNhPAz9tDyXuZbdghCgJJwiVo2mgtRceX",
  "key27": "43nUiFhwvT1bGMAhcv9QUppfrFFo93x9StQfgngy7jAWq81c8orVB3UxPhSGiwTV644q91GUGDYCCDb93mJCyR3B"
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
