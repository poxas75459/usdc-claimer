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
    "3ARXkDUE3T3W97pgK6DVxLLFeDimAgsZ5BrLTSSNKDsyPbQfwzkECoVFCN1PGNeehzVnC77oTfEKDoLr4YCvQ8vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669MPnfUybE7okDhfHUwcFhckcXk6CjUYJZot6VganQxaLnFYRL9zwb97rSX9U5PockAyKZzC3Gv6tsaatuKuGwA",
  "key1": "3F36EmueNG6njJeZDTsagahYQuTvjn6NUN523q3s3EXrq9aTXjxfPoJAKGQeCs5WeVQMR7hpvJtTUU9P4Ehtr1B1",
  "key2": "3axRE5RLkSTfJ64o4XFtHJGFiPfWLkHVU18ScP4cAfLGvQYrZvqn82D7Na6KgYdKUkizisKrikeJ2GLoSijKGyv6",
  "key3": "5Sfm5CkeB4PtAVFSGofZtKKCQamSMWXto9792ythTDiwhDSzBk5ozhFjz3fpHMUmxtPgC4THDVTqENxGnGwZ3BDE",
  "key4": "4jbShNzoi4HpsmosqW1TaN3P65UFsuwf7TnpeanjqGskXUdpaVyPQTrJTqTwogc25M7J7Hh3uZvB4FWcDAeJLXEt",
  "key5": "4YoUKD7bwoSc359ck1FSVsFyYNHwHcZTrh9nBSXcM2QqiCJM1DVqe87UFsYidAdQZvGRWGZyQswQd7NRYEvNhQFT",
  "key6": "41PiqdnoFvHFwEudHtQdbyc5bHSQVUNYqzgpvyyzqZ4XPZ6kHkEn7czPTEfQeMcQKBAAE1mhhHfuJVsgAHVMhyFs",
  "key7": "5XHcmHSCbQsV8g7CMpYdJXSSgqHa6g42jdhzp4ZSDt78uzJCBdBhBhFJRhzgpMTgsjpcr9y9U17mSwNo57sZidp4",
  "key8": "6X4QhMmZjmMtjFaiqhy1rmKpCE7weJpYcDjZL4kRiEsM3PszNCcsXXCoHGAprmkpoGNq4A5FQG4itKQCD7bG1or",
  "key9": "9WbxrN3rHtsAdPmjQmu3Px4Hf3r87EusZrNkVifvrDvYX2ZeCxRKZvijnQiWQWYR7B51syafThWY9muDyPj2U1Y",
  "key10": "5SexnjBJxdiHwgTHsfTbt8gByJ7aL1q2LAwfGwitwUAQwABYDv81hnGYwNJH1p5Q2WdKLNJ5FXWbUfdQKXDizcYt",
  "key11": "2LBhKM77SiAKP5MarumMbkrbgQUCGu7hQhkbvzGV5oCBoWdWugtkaMWXFb9srjHS55bHZhWbELTJJA7jFD2ooTvj",
  "key12": "rriYPjrDur4WYbxiAGBBMWdsHQs9KbDSc8wLUj9mSfLqzGfPwYDDkU9ywuUYoSjafywB5gPkzVTAR3S4QZY5Txq",
  "key13": "5YCYLYymCzGKvuE7SLv87bA8HMfZkdxUMs3DpqknvdqgRpk7ji3HKX3XnfdeitZ9JJpDuRjDFCs9JQbUVcdnSidC",
  "key14": "3QF9wKhsJoVWvvJevj6Mw2KnxXqXgTE88GykXnDiW65WkkFbWayoJY3ecd1ZbLckcBqanRVDH3GaCEjJ1Utp8hZS",
  "key15": "2j1gKPB4fK7h3cM63QmRokt4NbYBRSQ5VUoqv1L2JDZ1UzVCjZgKTfe21WHKdQQj3xSKMeGtCYWwUVsGcTNmJ5a6",
  "key16": "5RjfjDwF3ZtZCpCWVFQPt9zajEjjJ33Xr6qKTzmD4FN8HWm4RmQvtbyoFqKFMqoeP1dsZ8uKk6rFWDxqh7Q6VnLs",
  "key17": "5hXBdiMjD7dACR9s9Cvc8jKNCTcRA9kfH2hD4877qNJ66JsdczpqQ83XdsdDc4dgKhKhPL7diaMzdddyG4L2hh2P",
  "key18": "zVDrxNADxhfVG1NXH7iBcRt58LmkEmePuRjzCMNBQRPcAkvNw6Ro6ufRprFWRzTdVmDYKE29u1jTavcqNyZhgd4",
  "key19": "JK3JLkEhkZAyXvS7xPpr4o5f5jSCWS3m4YBWcJBcGJ821otx1aXjwVpEZADFQ6PFFQxdB7eUEaAbub3uhw2hMa9",
  "key20": "2gVT4esB8U1FD5UeAFQgFoqpAnN4YLHp4iRMn7Evz7Y7i2DFnQZMbvNzit2BGaLNfF1MyLU5CxsX6FKZWq7UvG1E",
  "key21": "5HLKiti3r2ZKNq1yhquoRiBrfKnhgw1z2d6TNCYueyTDkZHppqtXo1Ky3NNHrv4YQxf1UF589KZrmopL9wxT3BkZ",
  "key22": "2wtYQs8yPcYJpMcqMPBpBzz8D298GuFWwfZCNWyFHYi293tMq53Zt2NU9JPbj8x9CysqJ83nH9g34pf7uEVMr94K",
  "key23": "2BguPRoHvSFsAXWra4fbSThp2qv4t4qf6B34BM95hLxg4rbxgH5cL7N3WfoFkkg9pzCvTdwuTfxnsXv2xtd9N7Gs",
  "key24": "2hzdzdqXqdHR6gMLwE9qHDbvBWQqAJwfv5gfubJQ6RhymKXsue7VmAy1nxsZWwcSi4SnP7d4AUjUPMRf1s7eeNwa",
  "key25": "2ZMoEwh2ecXbECq2dmnToWYsbK9UNw3qrTYrq52jHQbkXdRMk47WZSiEYTtWozcjx9nR97SPMRLm7QRhrXZukL6Q",
  "key26": "2kz7VbtCVdQ476cty7pQMT43PjCC9GV6ke5UCDY9xbTkmVqds9KuHnWmvW9JXFwvpuP9QeZq1Ksr4hz37Vm12ifc",
  "key27": "3kyD8xeRhhbbkBXnYR7TtMfQ5FaZ3bXXTQqPQ8t8ncPmaCbXrApoN4QoSTezntgr8XTafWQZoDeTYMt5ink7VPJV",
  "key28": "57nFjjrncagNRB9orBCGebba7NxEMtfzj1tS86GAFZRwK3GaF96cwv29u3LvsPqeEEdD9saU5Gtw22f6ndowecZn",
  "key29": "4j1GN2fqeTDEaCBHj1ZRWLvYr3XJurs6V8Wfp7PoDEmnGYu2htF2sDJJWfKVVt1JazBLFVbHG8TWvvEj6iGcfVAe",
  "key30": "3nA2Fa3DLwTR9b2EqBQLtQLfRWfYikuF6gSXYXuAH1Du5FXDrQsqtB15sn7DorQ5RCBXKeq3PeWCskM6BsxKpr8B",
  "key31": "2DNmv7aaSQzoJmzCmhf425eKfRzQwR73Bda1XNrcDLC2g1AYeFxBGKL6T5bF8464kQ8q1SfGTDUSehmKqoyjXvvy"
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
