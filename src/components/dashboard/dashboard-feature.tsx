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
    "9WRdpBcwKeGUPDAieLkz66uibivMLVHff8aDLVpWMjPAK4Jbu4uL5M8d25W8i6xPw7KeCLpiXVmBFpLJ3xKruJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AtxPeHdGtL1kUoex2PFPkcM7dXvMQZRnawjs5cE4k5hJKzJYG7k5zBQXZkoVAejEFku7S4nZpjZFruY5EQrWbL",
  "key1": "k9fQdp5h5jJiE8fEzcuo3JZY61zDfuPQMGvJtCPyGjGZBJv79DA9YuKxhCXXS4NY3cZ3Dh5H3MtGooytzmv1adC",
  "key2": "3yu2G4UWBMoNzssPnXPSc7AxSJxC29GhrdLGJF9Sx2qmpM4VZS5GYqNqGJx5zyYWWuvLRHy4rTo1iQN1AwZVovDf",
  "key3": "3JRrJH7cZ5GM1o96pD114GyKMiCKf3fZJs9uYeQQhwqjM8spEDdvLThAt9ds3fpAfAPzuJDhNAVCXpHB7YfDD7mF",
  "key4": "5yHF1R4RaRRdq1t1Jf4sVVz7pXBGgJwn6bzuV5gd21HbmxWreij21Eqv5YvVyPvJYFi2xqwfJqddjQRNKma9oUdD",
  "key5": "nMFDVLAMvDBibNg36WnZaxtTA5GmpE2sRPUJzeshbHKqYv1pvy42DMbpd8s8ep3me4rEShSvbXMcM9kGatjhpRB",
  "key6": "2hbybcvT9DhgDmMVcmZpMCChSmkoqMMSc4MFY8L7enumLFYyjCvTXt48A1wMwjcCHPYiTGugSawNRkpr8cGjorob",
  "key7": "3C2uuLDmCSZdrjLNgFv6HenT8uwTKj78t2kcsDBKREZ45V4mNZzK3VDZj26ppNMkcRQZfyGhVPLTCLeK893h3N6F",
  "key8": "2KY9e9vQnaGWF2sTk9RJxh63YUjcZgwHc3MmiS3TwmmHYuuFkUKEnEBHKj93oWpv33EfYnTKLJoVR3WvLQCwEZCu",
  "key9": "4pZ3hLSpWQt8EvbmqgxYwQSYazD8VejrvxdVgWuYRWVLVa99DFATgqZJDWJ1PC9e3odt2wo8QQF9PGPFAzit3ihh",
  "key10": "hs7vV3hvvmtQrNhDdDUeyvUwpCH3jdWtV9BndZgcu5wyRU9ZhcmeXDHdigLWrjZBDtYijtPipSEt1TmqLqmYXAP",
  "key11": "2q7sMASk4rusrcLETfuY4CBfjaDh29GgiRMhR3X18oMkZgyK3tCWJXNdHYiJZ5yncSLqcQ4dc6PcpBAEb5cgnusX",
  "key12": "5pXDWUkPxDsjVJvrvE2ZDsV9jnX6fUgLbAaxuhs41aeKuiE9QxjDm71PzQaMVVpyN8UtVG87me7veUAS6Av2dbyB",
  "key13": "5UADweUJA6uqwWUME54AC6FzHaM9k2SRjC46h3WnifCwi6bjyMZLHjvRwQrXhHZa1aTn2VBS3vz14iEWAMzp3CxE",
  "key14": "rxkchyNiBWe2iuwtT5ZMqxwgMyrVn3n2N6hooG875qiBVHeVJr8M1LWvv2Z18oEJ3J3qtxt8KLQCbqzV9NvwUPZ",
  "key15": "uQrkURxUvj4EDoWQFdeY8FVNccEVU1CuMqHgwLzVWvHbU1eAJN3GHLeFVu6yVh2Rg1a7cyV2YgcMtHAJdJypN99",
  "key16": "47Ms7w97cMQYnJkifyku74gpdshRKD1ZaHSei9y4YASAXFzoeh1n7YcUjJmmrHPabpmtjwUd3gpSznYzK6xgttQ3",
  "key17": "3Y8VnDr8Pjj8EkZBmVVJanGmZnt4QeXye3yT8RY3CMNss3y1Q2fdQFfiT1BCcfx72ENb773QoDSLK5ZTPPuKxAmf",
  "key18": "2fo2oXW6113aY8kkPzp9xsfPsxifXqF2NusqxVa6nD4yuCNxk3SRW32nLFQN9ksrtyd6eNAvpd2ya3Yhb171bTwg",
  "key19": "3oEfL6KWtAqQTFbha119Z4Uq3S41nSm19YRXs4VWryvyMMKjFEtQYrRHFdgK93vecmBNKXTxg4Hx316pMQT3Be8a",
  "key20": "2VweFbhSdgoEctZf4ADiyJV5jDJn51f69Ni6f9YwP7kJUApNp1MzF3paQfYwd8oR2ypKZP8DYp3d2R6BgWJbMjqW",
  "key21": "3QrrSrCCZjDAMP7BGy5igWzhMsZpLuA6QSMem3VDrPbsYrNHoux2Ho4aVfdEh9jDXtfsSX7prxGfgeWqbGTXDQ8P",
  "key22": "4Z4yg87BBvbxrnfJmbdYN9Ab2hMYNMvFk5AT4k7sBqQuanZ5g67qyJrRMEsKPoUNPydUQTE2VGEJTaMejqYnTKH9",
  "key23": "3zFWcSBjz5oyGbvdh7iXQNz7RJZSvnxxDZtEzxvkF5nEcTJG4R8Y44WbZKx6nnhzNq15eVYLqyB1aibEXp7vJ3ik",
  "key24": "nRa1hT5eC4vhUDqJ8E8d1Un8BoBhF4DvZTeo4LRQQN4buQVboZz6vgKEgTW1Hb6r1ytDt2uy93rAfGbDvXDZiyG",
  "key25": "4o7tzmJRdEmVffF1NTgvb743m9pX82aBhagbYoPEfpDN35qW4y5bVxvMspUhqxDjrrVFoes5wSXqh7Ujko4WYnnd",
  "key26": "53SSU43QKF35PVM7vdz3eTB8WrpDYxpW83zv3LgBzoiumPNFKZepnyAqAuSYBZP2vHqn3cF9ohBPyvahxXZ95Lip",
  "key27": "5nyMR6P5cn3DLxG6aQfDsAucrf4E9aXXK7tv2Whzadheabra9KfxNdabKjAwcs8ScQU5uo5CR8sZjUBkv6RdgjZi",
  "key28": "4RpGxXhFtHSwaihk4mG8Y3pZKqGH6EjEGfVVRhUvHJko2g7iPtmdNUZKuuFKR76nKpor3PqZ3DUqYczpxcBfT5Yk",
  "key29": "2fM39GBdGGkZzz7G4MWgbDe9GrAjF7LtmoKz9ZXmtua9kGGUGMc5MBKnZWQHqxJXSt8XspDoCqj19SZoJyrNJrtt",
  "key30": "4pWw6ff3ciM5VyvXLb4gMeeuMwHYkjGHAwMfcMHHGRzwYESGtJADnpUYgaTKoJ6w9H8gAF3rq9FDKZzgZuRA5r5d",
  "key31": "j8vBRzfY3cGNoNAe5VRo1eNbzs1h7FXCZreD6QAFzZaqeJ5GcZT498LBjUMVfjMR7SEMTBqascMtbgKu2NkkL65",
  "key32": "2FBXDbSHEGoQNZxmyAai4HjVEQCiYh2KWkyVteCHszKA54NaYBp3pj9AmXAH5JDoppjtqEPqdyLCSCgBJmTFUdcq",
  "key33": "3XVcMVv9KnXLRJU35ZNcUrrSQjq9BytSkRSLu9HzvJf1PSWvJXkHQd5JBefpUs9gMRFkK6nU7j6J7v3zprkrt4sZ",
  "key34": "xGx51ijxYPm5mnz4HvAE2UbfbDHUVHf7XRS5ybWZhDfVcDaXPKXgHe8kS4uRwYgNAjGFYKYJGfo6CxhpZiQ1GDK",
  "key35": "2rBN1mzYCAdiS44F3EgA4vE8WYntGsdV3BEkWxAYmS8hdnnF4tFFoXnBFEfmaWat3RWPZ8BzJwKgsVcrsrSBM9Qn",
  "key36": "2ycuPDTsLwHijuYz9DNqUWRPmdDin5r9naWVbSCSKqLARHsxaEk7QMP3BZ3iGzZXfMdxrUBJiiVFyygpb9t2xfK4",
  "key37": "xjQgL3fPF6rErJiUvq7pNVihtK9pddn8tKvxUUREdByqoC4eWM8VWSS44pJZFijMD9MFgTsiXMqcHAHVKdwQzCG",
  "key38": "37XJg3imM2dT2tJBTyBqHyzyCmgjiBDZM9MXP1XaVLCD1XxzL8woKsKZuwr6Z6L3NqG8gLquNwFercr6wZnCZz54",
  "key39": "2MhrhtMKUvXnELpMZJZwzXjCdD6a9YvRkBU3oiSgAeUmQFibsPTxAhcUVquX8vvttnUHW9SW2y7dzGqjRGAgEs8s",
  "key40": "38fz29FthymCMidVMirUviJsVFwXhPCGQxSrKQFE9gixFdnvKgkQZgYVHuc7kHBqF5x5khPrsGpMLVTJ9w8pVeF3"
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
