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
    "3wY9Ngn3FDWdidDWSFsBbht8oMJDiqm79jzxmgp81hRmhFmLxgd9uouYai7f6bMyjH4Tf9gztyhpcpJ2YucTBaZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRgT9VeFc9WE5KLwa5BtSFXohrsnmZHTn4kddVyXw1YrnJbVtE2Js1fixQWqbsY785ANTPCGt7vawWnbujiEvvp",
  "key1": "4BRMUNxquEgGPt1bjLjXYtCxNHyE3wpZeCErxzbTAcwP9mpen85jP6ukx6yWB6jdNr9HZVJRkN6di1HSz3vUo4Wi",
  "key2": "3rxK5vNKcoKwUXAeAZsqQ9Zc8rd2Q1DjwGkceScwNwLpRj4NRXBd5fnp2nJR1cZtyhMJHikcwXDz4pjSSJYiXRiJ",
  "key3": "42nA74Upe9DMbbXKc2XPSF5r7ohQiGfaNKSwyyi5TqTQjHCgh8LFjgaohwkdtNDgfXNZY8JTYmjdQDq8StRPZisw",
  "key4": "268umyQtMQehfg5SZAp1NmyupiQpPfw3hbw2dvzUYBCPvK9zcYczcddm8thupJ5GhwHY6S6fbnaUnt1GUNb21Yrq",
  "key5": "4NFRAaSyxnFJhtQBPzKJKqy5gYeqH6xkm5mgiyvUPke1Ubf3ViFkhmvdAdFXRgxhGnG3uXehHLuGHC6WxZ9h9Vs9",
  "key6": "4fdYeBkmS5GA6tbYsTpdKeKcWn5ybT9sQU8KZ54DWfcTEwhfXZuhcD8rmpxaTr6hAoMu7svn3JcahnXfM5bfzRbK",
  "key7": "5jfhhsd8pwit5qj3Pz3DQbsr1f7FMyi5pMT48w19kpS5QEFQecS52zmjGFx3sTjSSVYz5awnej9wFf37csGtkpG8",
  "key8": "4sKBE5deXGMGE6rLbhfHpWe9pEzGDyfxJAyJRfj29gcGXfi6i4TFRzCQziafsWhDDM5c6kgeerh7WStA3HiLW88P",
  "key9": "4ysf1pSKUU4Jnpo2w53R7ijCpBEaKDsMbeKgK3PWrF8irjw1FCyCgtBby3YcqoxeU23njapSFUk4Bp5b5qmHiJBn",
  "key10": "4T7Gy5bhvXx2TQebQ2aiPxsbU7Hiws1JHKm92PY7WMWJpw1a4M1tP4scuC327N1b1YZJzpsbRGtWA71aMqp4YYA2",
  "key11": "oALTDdbuRTqk5ppPGSc5eTBfgYv1KfvhfVRPho3uzo6g3CqjEQ5cyY6VEM4B1y5qXth3QjvL86czhkssVuiaQJw",
  "key12": "4goZrxocKtVL5yCRb7YSBwZ4XeDyBG9ApynCcRGzxyT857vbwmX4N1nms9yAaqK759SaEdnrKCjidLA2DpMvqsYM",
  "key13": "2Zx7P9tiVuBpcd2ST3Wfd2gTTpW2eVb32Jdcrfj798i3qw958Z4rGMvqGZ2gKchQbXZg4842GP32yuRQum7ddswm",
  "key14": "FJW64ymAXwXbMDR5qzNTPYpgKeRz4euD6CjnbPao9T85BvHxjqeoocZnJKoS8KA2mQYW1JjAsgcVb9nczT1moGg",
  "key15": "APkJCLu2jvg7BLwHxb2s8N6XP5DZBdph1n5iguXrE6uFkXkmfR5ADWWTJ9a4gXCZghPhRZYddhDa4QKVJAX3X8X",
  "key16": "5QRJbts5zdkKDURbZN6i2vTxJ14sRbH8pW1JyA38e6PMmNg2sZhMbqzMJFCoroqqDTJAbhTjE98aj2EkyrMxwTAG",
  "key17": "V2bwQraCJy86gXez3d81q714FKtJu6EMovDRgUxYUShkkv6Bu9z7FY9Z56x3JmmAjGHh1ib2QXiM6M753WTrWhR",
  "key18": "39WBJ5di5RXpQXdejSWnxherFtrWh564m6iy3hAPg3a9PLwJ8gLZrbtmxyqprUPYM2hSetosEAjLpZGsZrSJ2mi2",
  "key19": "2EaXcZgQEyfR72XUnVtU8qE3Z4gHTNyCbRogReBvt9n8yoiBAdswFFdhtmxinx1fH7KNcmMtamJTs8DATEMbEQUE",
  "key20": "46vbA3jngUMXfeKX1LrSk6MFMBRvtFgeRax2jbx7e6BwuaPjaWa6en1vM4nzrGEGYkEXdtVkMRWCNb1UwAuDsWyW",
  "key21": "3cbNNDgjbGNRYQcFRQjCLuSXGa8hxWqv8fu9K3UHqeLz1chggcjvJQSumFgNS4u2oujf5rgUBWkcmNyVHNrLKKdu",
  "key22": "5uEEKkWV23opdskP7JbqYgKfiCZ4LeyjFSoTVWNDWxPXjyLeXc2KpWYDKEnoB5WgdYwjnoyUt1gqhNNRsQKE7ymv",
  "key23": "5ZvGDJGdfHMH75mHywTzrSkqeBdzPnWiQ2GrgYYokFCUrPsHDswNjiBhDs43Xd8tuhUE12u6fztPDBpVpLC5jFqg",
  "key24": "52qp5tXo9vqDMz4kFGkn29wDUdFEqkw8eQiH2Bktn92MovcNVZEr5uBmB7GfFCE5BCN4ty6VqMQW3poPAqi78TDi",
  "key25": "2e4odNb2QT4oqgngkhudmLw88xPGmpmGd9dgLnK7Def2NZhPchFsru4i2FsJ7VSnfpmLJLzXX36qDgKrZMWmJGiV",
  "key26": "5LZHcJrB2nSreyFmTAnw6rQmC8Wb6KyG7Hs115wNcZyti9hj2y3dYqR2qvZngncfznG4eUZddHbZRtD5597L2Pu4",
  "key27": "4NW84YENuknELWTumTrhJL3Za2AznJuKkuFEJMSEwAg59NUG3kVmTqmqiM2wCQ8g2trWYAk7QGNHaodv3D3bjnJi"
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
