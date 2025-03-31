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
    "3PsmiCsWrgCFxPXwzqzkUQ6r9aaXYuY9dHabgU9zcTGWBmLa7jhJ8cX8MBRknAJJ2Zshpfk6sg958yK557RbKfRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHZzqFhttxTCUM496x87xBkJWva3QAQx16AJw1QsWuKHAebuCMYt7iWY1PrghciRDynjomdf7FfeBQUE6otsfQs",
  "key1": "5S4xxPKoamrwsDnUvVr6aYhWXWweD2uuYRqruuyHcG9f8GCnPPWKMNz6YMewm77dctKfGxfV3pe8QPFgypvCH54z",
  "key2": "g9gK7wtK9GdFTpWiGu7ZMWTatSdkP5cUZuKtiCWdKmsTMiD3QLezv8WFmnBrocZQoM95RQLc2cbGdD97LLyupAZ",
  "key3": "5Yk9AQ1Ht2WmuB3fe8TknWEBJTBPt16TACrozQueRyj2PPSLNt5BJZPdPcMWS1gx1FMP31zpn9DvNCTMAP1RVEb6",
  "key4": "2VWnUbL2VkxhX7eLt5YchCjAZ5f1naXnkxch1SXLtZpRrohwDKGiyfSh5hhRrZV55vsmY95u2DJFo3TAPyaPcq2P",
  "key5": "45DjgnNSqFat7cmFnkoKeX5xnjx5aU12cp5R22FSwPXoy7Ro46FU4tVtZTvS89rSnBcg1m3a1W5dVnpV58w7kzT2",
  "key6": "64rMMVwQsda5n6955iC1nGsxofp9fMFd294zCUyFh3ERDQcuLC4TJD1MEj8cMKUuFjPtBG62qtopMTqbRuvpHyUy",
  "key7": "2K2AkrJ72MCRQWQ9s3oYPycH6WADu4ZSk67uarCLT9ThxUcC3dscbygdARA6Gy9iRn6ZjyKA6G7dy8Ecp2XwfqzC",
  "key8": "4keaayrUDQih44o8SpXv1hWzbo4yvQ4NS45g6JgG9xHL6Ap6fMfQQyVzEnCexyReV9Pt3dcUjJGcMxkg6VRVxynr",
  "key9": "V9ST19BETxZDSU3wA7tVbsG3TuEN9kfEsXqMP5dh3JWEVVPhtagxjuWqW6oGFZpnR7wSUH9Zwe5WpCnRBQWGeC2",
  "key10": "3dkzY9BVJ3qjJiaKqgT1vy3o44gNgZB7QDQNfcvSA4XC7JcvNjrA5s9v4yp7eXVLHuHjak9oB3GhXxWTREMKJTbN",
  "key11": "3pVZZ5jADN1CwpBznc69xPatoXLQNdeg6YwukXknck27dqwKXqNi3e771PtaGugSxistQLy7SCjGpQZEAotGWGMG",
  "key12": "2oiw66WggB4TnesVbzsaJB2PE1PUAmuYChk4iufcNMzj1cvA2siVXYbe67Ro2tpjesXtsdfxjw6QqrKiABZp1MvB",
  "key13": "4uG7mfK2mKgra6qPgpK5UzQFPDH3F6rEcSBdHA8zHxRGmNPkzC369Exi3yKtwZcZGxoxbqgk1Fd9iUYUiRxsxh5M",
  "key14": "4fBwDmKfvDMqjfVK9JFN4bs23tRx6gpxsNLYBZ4XFBNGU4oix8MnxtAF5skG8qym1P4n7Nm8HYZdsqfeR1qQAaz8",
  "key15": "5uyG4iWaTBnr1HcRarstrc1vGoRDfPzkzRbHoeKPhxXiiBf5vjAVYiNfhztditymuFxcpCoeEnaRfuPa2CXnxBRL",
  "key16": "5gPDLp5dV3K4SQ5QUQ16ad8wBxT5U757cy1eo9cePUog68cQjihZDf7eRZ4Q63w8S4peuWSp48RWUiSzcY4ecBQD",
  "key17": "5dED7fLEn9zLzb4c9sDcE71xnHD5vhMgGxjVHiCKnSi1wcg5iyohTyfLzTLZvGJUJbcRj1nCD8JFSGYAyAhM4vVD",
  "key18": "ipdYysRNmmyLzFWPvWLSzBUMF3jaJWjwv5dw4DzrVtXrSY9WKKP4KSUHqQyXZSTYrY157hZjkk7rCcEqL1hEuXf",
  "key19": "3udjGLwGaJVe3LvxSeDkcmkxeik8k1M6t6Tcs2yxQNDLkd73BNeuJTKnnL8oohtK5FQETNXdhjTURWcHdBKCtD6v",
  "key20": "cmPruHDAQmxHGwQioXxMLHNbL7c9qdTDGRidrtPYwC9yKkyCfhXHfP8j6SJitpNRWRCFYg6XjbzWDtHnjzgvSuf",
  "key21": "6sSvT91KoSiqFauqm16ivTvBdzXoWKoSKcJSPSzsgn2QijLvYTLuPNHwKGU1p6ri1SFf99zGHpbzJGA9f5PxtUL",
  "key22": "23JJxZpGCwN6RT8pHSUZWzt1CaivfPmQ2CdkpSeM3ZqE8h8UQ3yW7Da9xLcnutxKaNfEb7rYUqvMXje5J5VkVLhZ",
  "key23": "fPmaDRsoH6C9h94RdUNW8h5RsYaxQCa3jpPsaLHgnciFipSHp6Ro8cxk5BfA4cWjJxm4xLtSLzGmq2qAS4k4BRp",
  "key24": "5Lr8hMkUPyf1qxJn4SHNdULM6RfGAaMcPoZ6YLKRq2g3V41VViB92jAqd8D1hB8JZHmqTbJu4hD5FncRJPTcxhup",
  "key25": "2rq9DQD2jfH9GxXwJ1wHecuLVGpntS2zfa3HAWAWvpy1fzM5NQUAcARrfu5nybC1qjFaLiXPzLDq6V17XXwTtJec",
  "key26": "4LauVuWArQedkSMvpiXJCj6wNMMJ88oWroSB6GiNZdR9pfdfPaVA2isJVAdsGKt7reqvCJvzx5VEz2j4vNyZqBKw",
  "key27": "fhec9qcb8meHmg4DgUY4xrHpwzNNskmES7mZqcWL4eY52kVidyo4EWJGBLruL8E9d7hw5jTcMx44xA4Lfyhniys",
  "key28": "4mJS3uvHCyS72Go73V17nij2d7XX1TGja39XRZPoU3goHQ8buJFXMsPiJsMLB5jLxRmGT1q2BHiLkB4pbsiJra6A",
  "key29": "FYwExwSCSjC3dxQS168kP1rBeyjgkGkXBs5Tr47fdw6ZN9wniiyYemDpkTij4goGEyA2Z8LSxpsqbdoPvNP7SYc"
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
