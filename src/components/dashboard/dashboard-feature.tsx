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
    "2CWvcTxP8vkDZCZpm1egrY5gqAjF4LZEci5ZyBzcDuagG5T94gXDuSdCBKYaDePs4ryQc8B3qCEibk4rYZvPLX4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GoS2HijftXh2qHAvHPpPSCemMLVS11NrQjcEvDNtWL6Adj4n1MC2kTosn3SZLfW74fjezdSrHvukrUKYD4vsbP5",
  "key1": "4YtRzjcza71LbJGfENWZaZTM6RXyrNAQHbjNLLLYDFmqRA99yj4fRzqaqKGHKa2RqMn2NgZrNVR7GxxAg64dDANi",
  "key2": "DYusu2EgozkpAasu8XQptpHu5QVPBiGGv3zKzmDDiehQjTKkWGTZinVgTAXXQLudsUkui3ZzbCvQWRikChUvFK8",
  "key3": "kNMqoYh9qkJYezhZBtznXPxhj5mNvhhPV6djMz7mC6HuArRiT8Cn4s6btjKSnM8krWa1b9XFwrSKTnXkE7enykP",
  "key4": "427dq8cbhLvtZj12b4Lv3FEBcPUDKeDA2CmftzGtWXDqeaWy8yULbpkdfkS71TMKeqe5vUcH4N4x4mEFyCfseedS",
  "key5": "4iQfE2ohddgTzbnhcy5KmBF95xcZKg5jKUqsb989kGQ2if88zdWUjWk23vCb8nTLsrkZRRi4s7R8CtwS7nXS9e3x",
  "key6": "3sCeHxScVsSQFkxvhQ4FPt1y3Ssv9nYEeeDUXVZoy67h4pXU65R8ko9uco45aRtEB7e4L7wAUQPiNpJQXQNoYVA1",
  "key7": "5SDcbh8cNWwPLAJfAF4BtN4fLiSHc2Ei2oRGNMLCZ7srxCr6qCfMuXYb4SARMwjA84dE5SyACJpcKKzCf17AyVrr",
  "key8": "3GrLd9RAYXztDi9Tyn9fe2Fp8XFid5rJTsMvt7ML3M466gVRozm5W6Z9Sj1YaXamjDr7tsMoNEKnPJdXYVVMuAdR",
  "key9": "4t6ZsJ9vMmiEoJ5Tvmu2jTD1qd35QYshvxKHjkH3HeihjDim21n6vUbTrZM6A26PDMFMjSFo8nyNtG3G6qVWfwgp",
  "key10": "5cb3RpawFWVr8AgNFnvJiiYjkiijmdPuQ7tUBVyKncjpSTSgSE9qRJKcNxtKD7nrWtro1b4TtXiLswSbrrt635u3",
  "key11": "4TnDwLgUuCyjcYowCDuvtPgfTHr9TW1QQ6vRc9xC6W98LngwyhYtY9aEwLTzXxiWf84fjb5PqJ7niGBD7S9arYqK",
  "key12": "59SMaLXZywFx2J7i1iyrej89rZ8BTDto2qhfBupxYQMLR5kBgn92qCoNZoSMo9hdMDhbZKfcBqJRhLYk5newFpi9",
  "key13": "2q5Efm7QCQnp6HEPtfvzCs7PxWw5Wf1qypuAHKuzmXHdP3z7rqD8WD2TUrJEJ6vx1dovTFKJRHi7Aa82Q6brncbi",
  "key14": "2PKeSxg2divGRZCUryMssxLPgMpVPG9eTrgdb355gKd97rvhTBiUtiY2PyEHHQ7xivwzftmikAAU1zqnVCuWwZnJ",
  "key15": "3977uN6xvvALFksLC4e4XdDa7pyYc3EqvGGPq6XnDJCJLoKx5n14DfajMjvryeEisqvJNEhzyWz2p69KZfFEC5Hm",
  "key16": "49x1SCeSqWHhmh59RAqrVHhxFFCSVgvgW6Uo2WGXKZrD6rnjB8M6sBs4uNsGgr2xR4djVjcpjy7QoPWVKNHCxxX5",
  "key17": "2XyQiCp6dBKyCS4iRN742dNcUsVdgz4ENpkznCSBVvuM5c3VZtnnUZVbrxYtnZS47jJB3CJBaY7JEDhm3xeHrdBZ",
  "key18": "5Z8MWcs44K5SXyPSTGxcGYMHeDvDqWuGoEw9o9d9vTHFTwXqx2aSN6EcrzY7baUxoesK2Erem4wgBzE31CnTmVkH",
  "key19": "2pfhDSz2jzLjZV87iqwXcNR543T7wYedbhQYtBzjtDdQ8CBNamQcX9aAWja6CPKjDWAEYNMSUS24NWVpYV4DybKu",
  "key20": "2DXUNozoZqe1BbPiSv4k6817i1JPLeW3S98iv2tMTJYcSkhYSEfTkRegdAsuGUinoYPGVFS7YJekGrae1m1QLYDL",
  "key21": "5fgLMb3ndBpqSd9DBYBWoL6mimpYQDra6H9v8Q786hE69bVo9bS4HNGw6EspFG4E4h4TbxLHGwMHzHfEdmWu1wCf",
  "key22": "5A7JayzAMyTEhB4GQvFNWrGJe8uTFJvJpEJkX5H1MztrVbGMnGQSGcvsWXz9mUu5WwPMkzujGzaoqoo2NptX8hre",
  "key23": "4RQUhmLw88PKof5KavFPP46KKRbqD6s67ZDo32QuCECHB4UdosKGQQaFaC6qRgB4saMTQ5F9E6RZaapPkpt3sRuk",
  "key24": "5Rn4L1RJpe98mdLZn56GYiURRjdUMnDhjZGVPkwLWiL7HFPPra3pUwM7xXk4WiHjDKTYxJUZYgPrtz3FhNEy1AFx",
  "key25": "21U3VzHLHDiH8PGgt6bwh9YdEs3mBKhM7umUqfEcne659PT74Z61mWaVnP85tibd2c5TP3zMNE741TBt8AcFBeyD",
  "key26": "61Uy2bGNVibVPw6gN56j3eWtXChe4d9KKq4cWeGaKr3tui3aNRBcmxUBWv1coyh2ibFt5fPvDxQoW5SuKEBuJLvE",
  "key27": "4AZDEhUSh8VvVG9D75dps8k14eWQ2y7XeDBjBjBnJYGHYtNL5MoxiQxjZo7ozxSZYziL8QLrMBAzc12K7FjR4kMq",
  "key28": "4y68LggAJpDM99jX6ekaEv9v9C5sgCeMfAow2BznSTouk6S5swSvExBVvuBFYxxucGusrTTbCiLkETTEpo9XGaUh",
  "key29": "4fa21LmhBiFSuYg9itKwdxDhhznq9SBaSNg6FrEL32ssU1yR7AeNcEuGehMbrUg99DAEEykAohtE22o67xvQG3jY",
  "key30": "2hK8kNfzwGR1S4spiYCbTYXKQtP7ZjdzkVA5Tk77vVA2L9SkM5HJ1xcRk6gSrpkqY1wYmCaSEjc5pwDnZ6ie4dqC",
  "key31": "NyMQM9Nkj7fPbPS1a6iPpXHggQJjLDqys6rwyX5ZUw8JahvXSCP48QMoWmXFTU688wtGapcyNzw18BtLXDLDDT2",
  "key32": "24EkFM7ke9ceBWcssEShxbCXRLbDEPeANd7VwrutGx7ms77ahxSqGP1ohCmMwh7EUxf3fhVMB2Yh6PW3wLm5DwP5",
  "key33": "31B7Jo8qxKvQ46t1Jawwci79a3mgtYJixGCbGywHRTyGuBjRpypCdHitfkLWLXf9v6jyVWM8pxLjVXKjECJEe2RP"
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
