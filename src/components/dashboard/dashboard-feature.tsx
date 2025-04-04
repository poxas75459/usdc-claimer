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
    "3eoehJskSPz2qmgcMN1UsmhAFNaQw1r3jTz9RY3icmxC4mcKq2z4joj1nfZaL4fJuetnwx3PUmfJQQX9AUhc4sUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBKWzQvUxPK1p5HAC7NAGMEX4n4P1WuiRX7gzr7hM6fZoRMuPcwpnzp3SRCM5zaBhBFUT9m7jvwxGgSdiRFWva3",
  "key1": "2VY7FcqwryBDXoHi3FSvmrCUZ5ToDpm9Uc4yaKik8zpcBb6RAbq9ox5VrvTjcGjecFBVVhp4NPoWtSkD3nTwFs75",
  "key2": "2CAZ5g9AMZQQGgWkKSkZguZfsQyQ2ZXhTPEB4RsnSwhmmKA6Tvz7QwvWU2rxMjh37wdyWQPBVN8rSrNkrDLCc5me",
  "key3": "3SGkHRpGfKxHPWftkkjQjnvc8JpN7p28MMQvkjvKUa7BCiZEoqybefjygrWbnJDgyjVnyq7NKxC9bApPrbitkQ3B",
  "key4": "4wrV5jjWN5Rs1PUvTFHPRBTdzcBS7gDEfxsN7J6CFqmg9UGFibQCrivL3u6QKBj8sM4qghg2KtVeFCfbgt3m1Cer",
  "key5": "25pjGkS15Dqyo6JEWVmbUSdDtezUaJvH92eBxekT2gtoUwNkoifWGra7XYVAtoUgBKJpmECyKZrivT6GeKRSN9kA",
  "key6": "2ZBB3Nh171qpUM7BR4ztUfhgax6JywBFu8Xb6jB2yC22LpXr6ehg4zSk1AQXVxCyAusxW4r9Xbf8HcwQu1dSGeex",
  "key7": "24xGhMZ45qnRryyRjnzQbg7w7Qs3Roo7EDdoBPdKn5wJJbXjypoKVRGH4SaTycP5wrHFPev5yTvAb3wLBp48PhtL",
  "key8": "3xh8ZNcoceeEy3CixxQkvN4RWirNJkdoo7riTHfHooPZUxSUW2XRpbUZCbCeZ65fuhJQo3VcNa34ruAUWLv2sCos",
  "key9": "4Zaj56GrHpC6Yy7DWvKg2iUaNCJy1XhcoRbSQNnd2mHiwR4gGrxpoE8THwTi8QpwE6mKpuQ1hoEyxwzrPydvmCq6",
  "key10": "53WDRK6jky3MWiGwnEnMtDZrftGo57uJ8nmDsHXfC44sT2TDkQATAtfcL2znDQ6w6KNoTHoCzTrh2eb4ymFNm83L",
  "key11": "375dwxLrCLtEvtnS45goCapBms1VJC3MoERvcAMg9jUEEggFdyPGW6jWHc3dDGKsnNJXcL3EdNtxn4auw7sdNR8T",
  "key12": "4U53Ln9w1NENUf4So6y4TMYjgxeyutmLvLZnvuHHk9VHy3rz1r5UeWscPyy8pjXx5S1KjdYmUkgZFiLrC6UE4jzp",
  "key13": "2jRXoDRaC7Q4wwWrSEcVaBWbbw6aMuPximsHgon3QV3EKz9qxRvmYWjr8JUebR27wHs6VVwiytVgwM1stdVswjZw",
  "key14": "4x64adVkogPT7hcXZcL6WauVfEbg71YC2MvaqLEvJbf1okhMX3J8PjVjdk5o4urvgEwyFuAK4RMvUTTYzagjm8BR",
  "key15": "WWqackKHWoWutZppFNnfgaTnA8n7hRHApv2sckoCmThhsAA3yYxrLYWYswYNkXfQdtAHFNXrx6mxdFK9GM9Sm5P",
  "key16": "3Pew4DuTYdVz9NBv2MMbq9SYvH6GHvd4g1HSXDyre7M16K2efKtQ3qaNNLngkhEqWZgskmNoEbkRwEzHeSbwu5in",
  "key17": "5aijq3issuHR7QKwVhFtrCUzbvFS44E6SzXTtVJ2eVqP4BCyTzKDhdgGJs9qa1JQzMzEMvedPNiRQEMndowZjDSv",
  "key18": "4VJJo2RTLJ7CnCPHEFBRqxqyMTjpcPSFMqZw1StSbhFACRMsrHS1ncvDqsgUjrykVrVufebt4YuyhrURbBsQdzpN",
  "key19": "3es1eUy9b316hmFV5kgLzvge6q77zQ2jUvd8XjdgkFwdtvbKUvEXMcCy4wbxtwDqUmAnP2sMfCtnhLH5TvMATg5h",
  "key20": "3XNTAcTQTCoGMNUH7WZDRw2UeYd6DwysMev2ieLzhYbQk3UpVeGRJcz7yUtHx3gULGgE8hAo6gbwCxPuJ18n4LR6",
  "key21": "3exbV2MfRdRbZgjdWgR6Jr995gqgRK9tg4xriQ1UApf1tXyutT8eJiXqqkynYtv1tw91cWtoVrJyJ4xhHs1cC2hg",
  "key22": "3AVg4goAorYLbZaJ2vjum2Yyt768WzcYm9aNcE13JwomysvRKWpZAaDdaQr8yDpyEQeaDzjSwM1c3ZdCVNS16qXF",
  "key23": "4Yi6NzphFpFSwjWZ6pZyrrynnd86F1kpSX3a1ZE5hBZstKr4Can1vmHZrgKWMRbH8HKCAVXxJ9Fj3aZxKMvw8bGk",
  "key24": "29RcQ65WT5crunRBVmvw1xgQ4CgxdHsYJtVXNKrd3eLX9eiS3yhLF8P2b2DbBTJqh3h8ws2uUJGxeL7UPJkABTsN",
  "key25": "4qWLLgCrNfoJ6yVkXX4X2CE2xPuQJa5tBRAXE5C4yhxJYx7KQKtNbsdCtKeLsmb83HzhwkbvN22m46ChHVXkbrsc",
  "key26": "3Zr2mzbxUe5FwkN95hGzaBUAgsZ95nLrYU62bx5USb8dMPPKLafBaRs3XrbttibsXcMsEKL3SACUjQwyZF42hft2",
  "key27": "3ksUKqqicdfCgzR37zh41yx7mznbELpU91vokxFeLZGNopWBe3wVafXK5jfxcS6xmdDcaSyDdCFk42J4bjffmXqY",
  "key28": "2jFeombZc1VdRELPE82M9HVPAjAKBNAoQcbatSmVVsa7xGuN7QC8qpsTwBm8BFP2ddMCdySYPqFxLmZf54qMFsNz",
  "key29": "3dJRTJ6doSh2MxehbLSQAEcwXLx381UUS8PNVvku3Mf7e2S1euTcnGmSgxJFFgiRPkFgW2VMohwe3rGRZP9hUwwk",
  "key30": "PNxpVi9GEUBHTY85LVYNMuC72cBVNHuFBsMoUubkk7m4Bmh4sbgiNQqCFj5LbawNKL4xp6TmFFvBXA5rAHuUs8v",
  "key31": "5q2PxUi7gSKcrbGuENa26CJG87zqCdX8goCkyfMMJHBu2cy8MzrS6dTCYon9WE6hCdKERidrPZhzaogh2h8oa211",
  "key32": "3qPUAmoUDUo2JYmapGR2SP6VLqv1aavCdjWFs5SLYWyzyET9Li4jLdD2qPtTFpzaGbFQWiVA1X2aFYQmXkp9ARPq",
  "key33": "4XHTJrpREaske1pkKHx6oxapzk27LHJAepa1wCT4qYspzNSQFujp33aGLdcxAf629xnkia2eftf9ZEATujPCG3SM",
  "key34": "kjGGGDWgLkUCK5SJqZmZkJ7rbegU4vc46VtegtT8N1PgppMFWQ1pW1NZbFAeSttTHPT1bYAg9A85cTEDcJ3TCwW",
  "key35": "znr54MJHfBXMYCxWokiergpg4YY7dnkSMA7PCVJJmmeZLbWCNaRntyRQe7MGZrsX1ik2gBYLEzTb82X8cSfCZJy",
  "key36": "4LrgqQ9QTJhsh7jqFuq93PhMoL567sVAxAc6HYMBry6sgzEGqEpT7kgHYWmqJ49mDebXxgmEYpaRhxxsTxADzYCA",
  "key37": "4cmKT57z1EBaKb4HLnAFsnT8oH2qokkPMUw8Gk5X1GtFsocqQaa51JEtJR7gEmGpcpbBsv65CpBfKd7syhuhcQx4",
  "key38": "4nw9kHjByNvEDWrtbJ9XsvkDWMwk8dXSkGJAP57fY5PBZRgxPzyDNPrPWNwTwLoYAWL6WujjLacFYW9eSuqTH7DM",
  "key39": "2HB5cqUzo7pzaV34foF5qV2zHG7zpGFhNgZZcARXx4uZXQgWLTWRPPoiw8HfZUydrLjSYikx2ULAojW9FQjznNjc",
  "key40": "3FwDU5W1h5vptSYhKwH7vtxpa1JRTXxuBicAEd7fZorCkLzKpgatj3ixv3yr489yAD2qwFVCq6d5AULwyr9hMaDi",
  "key41": "raKVXjkZB43Pv6uYEGhWDBA1Y4xMe6qtwqfnS6mvLkUMHXhzqtY3QtBtRZD5Shi814oqYo8wSzzX4z2f2zncR97",
  "key42": "2cw8TAsKTvcYTZjzsy9db3gk9ifR1QMrTmKyGwqLYVSntfB4jJg2Td8shi8KdL7KJer3wNJya3BBNSdqP4zNmzSM",
  "key43": "3qpdwyg4g3avJqJiUwFsoNhCAy6YTfB1bAbFRqXLqfgrp7H2xj5JzsdUiviPRLXvJWnQkoMavq5uJ5SRVXMRLPwZ"
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
