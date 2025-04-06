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
    "2W3vTm2ngAw37oJj3aGHUGUfsbCQ2pHxYVsi6f21bqYoARJs3hsmLJiMjuHUh3E9Dh5TtaUxen8mvDNYwLEPtWJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4fRjuod1yPbzUowmX2Ffq2qNirTvadeZ7r6Tz4QjQnJo8b5yU3EHVz8zfMm7mDsSSu4v8CMc9gsiTf9Xbnm7RZ",
  "key1": "4bHT92hZVFrhg9kt6GSuFPQ5fjL6HeJiGE6ysshxzovpyLqgxrXZQ6RPHcvmJurCLtAqfpF3Jcpt5u3Rtjm3QZbF",
  "key2": "25KbyqVHq7AtACB1Tx5g1NUyP975W3dDdKjW2ugudd8stoRyqLTP7Bc12cZT4oT4DnaALiWGVGXvxcG7Pbzor7eL",
  "key3": "2nUGQdeHFdnMjFbRFC2v5vaqeecAqvsYcKZYzbhgSd2Jc7kaq3YRtYBSgaBiDH4rjhNVeVqYpS9xwrHEw4JuJQQf",
  "key4": "2CwwtbSWvhT3hudN1ghN6tffFFQyRjgdtk12sCc91ehEngrsWGtXtuAJptuUeeZyWgPmyTaGnQMmYQjWZgbqL7W1",
  "key5": "txaSGR9WWenypBE2ezuCk8WZ5rzprQvQTCfHeU5qSJ5kxss6oiCU6Wr2wyCS3z17nUAD8KepDqr6oaFoD8Us7rS",
  "key6": "4qvCb7vvT8nNahwc8hoGcdjhR5dcaRvoetrm1cXBppwE2kHQiVxBuS2mjwMX6uPKfEttxY1qFCpeSTBTjaVdJVbL",
  "key7": "2LJmwi3r8FapNQ3BBhixvBePLmn5VythcrzLu8NFVk7abMhCB4cvnozbQzN7zzLbNdnzxFo8wswKLVjnMMvSCHR",
  "key8": "35TYAX63EEbHvbgrLiRC1zxz1j6aGwFD8zLiqjhFvfDbBXPHNMhaTPiEHsRiznxRz6F7bD7G5yvuQ6HF15Za98k7",
  "key9": "oiBQ45vpSrZHNmL2fz1y29Wg9wUMJ4bJJnVX2ZwyPF1Xg6P74K6x644cHfBdCZTovr7JSFoe9uiTdCh4Gsyi9wY",
  "key10": "43bLJzUdHKh71H5Gwc4Xxxu1hSwUeMU3kbE1hbAneoK7SvL8apXo13HcPAkA9scgyoKVEXGGCgr6ZcHpWPiE5tDP",
  "key11": "2UYVacKq4Y43YJH9QXowd3mNRixPxHoU5SVaTkevb4muVCqNYAQd3RAaw5KgNSZnBnD5EndzDiztXugkCEnNU56e",
  "key12": "5cwtc131WG7RS9e8QcdgEC4r8rvyJvFnZGqNLWfVDPXjhSs8PiHHNZWb2Ma6CVU5aWoHpskSLjh1B27VVZofRkd",
  "key13": "2SMn8shsAz7tAYaEXuS9LcfrzJ7kCvvJf5d3sEzP295fKmRzXyPZEfgrrsc73VL4NLLtC1UebrJ9zNF2zh6kf86C",
  "key14": "5eaxE24LVCCouzEQaUxcEmV51iriqTd7gFyZVKbsGKq32xnbqaza9BNj7ApXw3T7kgHMfn68TADHFc6VBMXXDek4",
  "key15": "5zKTSxwBTHK8QHTaNLzcP8Rm5KokXqhYFXxAz2vvMUmBUbJzNXEmxxna4vRK6AySrqj5UzpfbPgFp6MSpkZn1Tar",
  "key16": "5soWdH9Nyb3vpjVK5q66FCtd7rDzSYpVsKA3ZyiugwNkdLJ5b3eoNj5gg8hq3B6ZVC7xn5D98iSJCKURRME3Npka",
  "key17": "2FvZEXXPPuycmiEdXi88NVH3g5DQTCMJR5meMBzMKvLbKuZfJKUuAPx9oSy26PPPjNSv3uJ2FBndLUdZJQn9wBeA",
  "key18": "3RaBxpM74vJ1hrQ1UKayMrnJQGJXdQtQpbastjZM3bDwu7zLX7jUuDHoaGZBmS3VsqpnxJBcZMutm4nfiF2Mne2f",
  "key19": "5zfFBbwjniYhNJGRxtS9TTc6AptCuQzaXX6JhsRmxjSTRi4EYTqGSoFGqzqkRUUsXP3mSfqHdCV1KNB7EWTveAgw",
  "key20": "4y19u3LpkD7oMw9mpyvWgoN8gGKnMhWpYV7qVBVPJNSq5CwHeb8r5UTDVJRqAnCeFpEY7irEdCe7Ai9seVCzDJWx",
  "key21": "28hqMuceDLwuchRGznfMyDKNpgaTNPz95AE6Y5eph8g6tV9rvjUjSYCZdVTBAYGmVAvve5nZ8gKfx1osqzxJJARx",
  "key22": "4K9UABUAycTSZUfrkQf1eifqhjCeaNcE2MopDAYg9wjiUYog2UPMMJk4DGPQDMKc1sFZUG4VWsWuM1ozLDyjwa8o",
  "key23": "U7qQS19xjj4mw6qSXKz1pj5ugXuutkYHgvbtMggEH5AzvwWJXnWDZumTzMHs8d4CWdLHbMNFRePcz7UCskU4EPX",
  "key24": "58tuG3QC1JC7wmYr4NsAsWwYnPQEZqSU73sMdvm8dSw8SCrBaUyTK4zUnhFtY3zbH77wgXNxiZXCGTgZzAa9GWxn",
  "key25": "2jvzs2vpykdvzvUHzAimsnvEH72dhTjwPwdHPkmnHoABpyRRgSWdQHMKzWFu146r17BJUNj3HBsDQGWT27h1FWby",
  "key26": "4tB2bQ7t3dL8SwQiMNMAyqRqT7rG11eD2kYCjHneszVdwcTc3guQaYeyWi4dBKjcPjqFsXJLBvBDqmVrU1yDUDCL",
  "key27": "3eB24jkiWoudNyUTdQ1oG1juysWUjhMcbZq2Mn8expw8ESobYHTu7XMLQLHvRB5q6g2sezxiaf3LxQE7RoHw9q4a",
  "key28": "4oKnM3MFvNmXLMWkTjABAcD6z9xAVnJTLhD12kA5eQnayfJEVEW1hPRSADLFo27GYhVZsRSdyVjoeAVT1AAGZYbd",
  "key29": "jhCQCa6A8puzN9qdKpBMszkNCM1GAdxGEQCxVL7Q9reSo3F3GZzzCUrstekUVfvfpoJdaTRCd7Y7TV5AbEyCmJr",
  "key30": "6xbwFb89iFYyYjSTHC1MWoezjSj8MUNLxLRhSLYFvmn4SHeeZgGF5SsjBtMQR43LxFbX5u6EmMvbFPX1ciKyFqj",
  "key31": "R6xvp4gWw9g58zMYdAKtbd2n782yE9fpV5rue3YQgGA6fbwPg1ks2NgGW7ehwCTu99eSgCxFiFx3LZ4subDkmxq"
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
