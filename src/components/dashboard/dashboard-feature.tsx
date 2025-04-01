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
    "45yBTRymLKcu37u21ep1qiEqwcLK9ydcbYiiCp5AzdoHxQM2kSFZ1Hncu1Xwj3y6muER2yySuy7TnGKRaga4rQty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wYJ6mXW4YGR92QLn3kb5FJsMoenJfbA7aijcjU43bkkcA4epoSy5p48mRiDTtEHFxAzbcVUTKYc8f6UafwTP35j",
  "key1": "36JUV5arEqeafR4WR1dSWFirbMqNk3kkWmcXtraeU5yreAi3kPYqiLrDkLAYg27qqSBebKPi1vRP2EJzdUgvUxH9",
  "key2": "4dwTb5Rtok29qFMKdJJRNVfJLV75B1joymosURmdeCy5VdNNqZxuL3to2CEucWjGS6EP5eZnegeaAbD6NmfJeLT5",
  "key3": "661Pouj9rk63EiFn8W5pQ5gx54FVsEeoa5AA5DL8PH3ad88G9maKaRwxBru8CBfna9GcjH9TxPP7ADvsFd8kiEah",
  "key4": "2TAJGrcrxsBzczqmoGb6xGQSNY6UMUDCFZQSsuoHnT46MQbhs3vK2PEaw3uvUwEnij6jTgQhVFJGp3osCy5c6xpy",
  "key5": "4gGZ1LNiak5D3UPcU4onNvmkG3SNbbMYsp6Hj6oga46zMKsx3E4CnNzULdUsChtkEXDGqXwhWkZ6w29ft6jkr37g",
  "key6": "bHnUWfjRmWgqCYFUyHKfEwAWZHPCQimmwVXdUzErEy8AiiTo49EFqdXbvG52xSvs6EHtLLphgwoPv4bpnkEJj5E",
  "key7": "3ma7RRAPCTCUNdoWq8dK6mzMtxqr1YEQnqjEoP1CCNRwxLoa4Z8TTs7DEwoaodWrnw9FEpFX8DRciwny7jczKDf8",
  "key8": "5ae3JnN3NWUHpQViHPBwXPvpS9SsJRZovkaHPbysxoPbSdvhVL4Sys7HxpbvETT7Gr311GEQn2tr1PnD1PsDvqpK",
  "key9": "sweWQMPrgCM5TdHuA5uuX1MmoWUmtYRkVakGoB4Yy9M3uWQBTDgyCHwcSPk48UhJ3zqFtkCHVWL9Fg2gHmk6iBG",
  "key10": "2oMhWTpGVWcU8NodVNcDdT1BhqokUGBM1kcvAFojXL5xZRinuM3ospp1VuZ7kZjYyA8oamcSqPxmJfR3GYWZPf1f",
  "key11": "3vi6yhqJAvsPFTszV2cpbffJf3g5FvvfWafx42bwKJdEJWxWRbdzYS1nZDUub4w4YpXYRG1GVXtAv8BJqWN3yyDm",
  "key12": "4CmuPphBy1XVTDhWjf8T6bY91NMawc7AYx8wiZLahYt4PKpVsKnzNz8JsPgchndVLBw9WrMnbacqK8rdnc3EWkSG",
  "key13": "3dLo9PpU4gk3QZo5UT7KWEqS1dBRU6H8yvBSUe9HCxk5L7eUDwSiUrKfH96a2rkGKuAGP14JLf8TwnnzM7jAMYJE",
  "key14": "3vN5fPvuhiZuQzHCfjvrWvZzx7TNNEekpaoyL8P5m6Co8fthXn7hVP9mhKZc1QmiJWP75czMQ1mg97JG3qb1BUho",
  "key15": "5AUThoqXUoJSf2cH1ZTJDkAW7JqP6onnrK1GDkybxNh4oR2RVzFQj9HpSdZL218cdSdSocEUpEeqRZzfPcf24Bxj",
  "key16": "3RXtTdYFWST4e7YcKg1K5YqjofCtgYc6yKuxe5ac1zyogFGFwrbJKN3FWoib8pragBpnQJPJ6tRU6Rcf6SGehXvq",
  "key17": "55qxT24sieNVR8rr6CFcfmMtnTdB9Ve1CSB3PV7rcBvdhCWT8oV6g65ARnVFh6AwhHmty5aJkS5JvxxpeiSuSfVq",
  "key18": "4bG3oKkZijCxeiqd51wC9pVRML21G86E2GLdnBaR7Pweip5fFvwT9c5919iM89SpaV7kCiTkgYAodnDmCVrGbLqb",
  "key19": "2nLnZ5FGAA2g9DjafEnjr9XgVvay4J5Jb4qUNudYCsZujyFxdcVWH9iSAsZsuSvaDLg6nTDCwf5uRsAjZZ9NCKFG",
  "key20": "JMcXj7HB4Y4zqwC6XPv94R2R6Yx55Ze81nVE96q61D7PSB1s5P6PUSDGVtfFVntGT2ERonJBJvtPNuj1GjboSbP",
  "key21": "2oy1eyWycibLAgpdtb6KmCZy3ip7WmEoc2zDbAk2381EmmcCZLCXuBprhK3Wxvo1xPR9fBFULJ5UTFKhc2c7QD2E",
  "key22": "5kzzpMt5stCG4FTT7As49cUqiejdQncbcpYeoTftG5Mo3Gccp9uWsYUbX3SYvL8aVNHw6QbW7X4hTLsyND7aSa1s",
  "key23": "2aAGRC5evjVqVhEhBb5i5JSstJF72eaogeZDxwwrr23ZUdLeJ5ZzT2o6rnjR1fFt5yow3BPkSDSsvLzn2KCLXj6o",
  "key24": "2muGSQ91Eop6wUPGDTAijGaBx7utx4zAxYdG6ySb99fB1zuW2AZmfy4ButEkhnHQTCLGv91u8hwUSYXZcEPEiEP7",
  "key25": "3hRXptEH5zwZpcEJLUMWQ523jRv4fon86rVYjUnGbek71A2u8UVGsGj1Sopz1Nr9qcEpFZQ8cP1uU1KNTNUojCk",
  "key26": "kfsK14FBAe4dX9LVbg2Qm41Si1avca6FEKrx8xYtvbDaeP3PiJHdP83LVMeKj8Szj78zxtxSRgbhdXQEd2fSbsv",
  "key27": "2QK6mYtK5BviPcitTtx4toKEhVc1PuQ6QAUfDASaHKjhdS5pguCtDWpbbMgHuogqCxYNmAbmdxQwU51e5BMVhL7G",
  "key28": "2Cy1v5XuFCLFPS9W3K5YjehbRhYMVXYedeKmXDDkCy7qpiSZHtY7xM88ErAPKQvDX6F1XM5bndbQGrULHMMFcqRi",
  "key29": "2YqidAvvpozGJ3rNtH9UokZxCGo3W6cwTJUcufkeLVtBjyuWQoRkzuuuA2dX9sLNy9XR7GDrnDjsLcMxFjMTKdaN",
  "key30": "3QYLr4ha8nvaMw41i8nHJRmXLwMqBNJYXzqJeLmLHfaB7B1KXcnWz4TDjPGzGXKKz3qMnqHE5tnuwiLvmQNVpNUo",
  "key31": "3WGvYFF156GTPctSnbHJb16YNhRVYPsQynW75bKuV6WUHfZae1cAGuGEMpDN6vGffxkg1JXUyexaNvuSU58kLDDb",
  "key32": "46eDtCMTuXEGNNr6xW6tPoaMXTw275cQYdKKTtpXBABhhby5LyAh5o5Nz7npQH2SaGfzid8ugeMZeTFEdEdmnbgp"
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
