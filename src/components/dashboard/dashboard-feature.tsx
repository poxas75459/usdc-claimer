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
    "thn6soxWsjAd7ytW9MhvFWpSMP2wvBmZ6BWEUdY8Nufqgfsk47kfAyznZnN9w3mnHi1oCkpg57MuAU6Fn6YFscx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnjUEiFjcVb9ecEviLMZJT7hwmxekaKzNDbEY9gKgXQAVHk5JLpCSEj9i3jveFjA8mMak5th9Sz3QbiwgKyxUCX",
  "key1": "2vvcyjxuKZhcZk3CUvmZCDpVHtJ7kDmfKCCx1beoCH4iRs6uifG1bLWQph9fDGJjaE63YUKVywbudEc2DNs4JbP",
  "key2": "44uxRWSo5zAXVoiq3QupLEkoFNqBzn9YRN3Cr1j46GoCPEvV8HavGvC8wFx19yu1nNfFMeWY9zhwx6PDAMDUB3oG",
  "key3": "3UmPjijMb41oNPu5JtTzw1jAiXY3JpmKX4QWozj9Pc1Qf5D7U4ma2tRwCdZj5LG8YNDBg2e6jSnUTQb9EsgQckEC",
  "key4": "tXQWCuk9kd4Z6WZQYNF4uuPQyVMY8NnAwKjYmWn36E4skhMCQcpxKjmpkDobfbYyaypFdsR8Hmt5VMCcWys9s3V",
  "key5": "2ECq2bc4Rrf47rys5iyx16Gp8KqUs7mH2X55baJkLPMusjmQUPYfbbTKtGd7LSuZcUZfkLgmpc5q23z7m83Hyq4E",
  "key6": "3jzZhMMK1SzCNhzYYr3DJf1do8WTGkhrovEMYMymqjUDDV1EUpoERFVB51R2rFkanV7UoJ7pSQMqxkaYcbKmtbg6",
  "key7": "3wQ5Mo5kiyr4kwsAxDTtYKzWAapCPudeDcSt58aSLhw1aZhmybn2q65CqUDL68X7a7N1aoc7Nk84f8iCrHnmAszb",
  "key8": "3WxKPX9yRHF5szVWMtcqZFkztny46CimxPaomBQsgeGAJunHWnAqmAcMtUhAHsGtok4o42fmURzqK5LSZxC49J9h",
  "key9": "5KcrkCd8oQ4r9mv6iK1SemrfxbuvCHyUqsg8127gigmHEGXgtG4o3R4GvgKAWzTzWT2wurBJ5mvZojbnPqUoCspr",
  "key10": "42uPNgVnwsKtjSypFmpgfjKpoeBwheMK5RABs1p4YbprPkRojrytgktP58zpXfBy2Twhzc6q4G9VDw1qaKdT2W5t",
  "key11": "2Yw8J7vtQ7JanPXCra8qAtJbT34XsGRX71o7r2YyhwMuFPHp1KeHy5CBhoCA9LjsBgntjFtH3QDPHrXK3SmigZbC",
  "key12": "2cU2TxxDzGU99T3Py54xMnPjMBUHJLTZwfh2KXEuVjHaNVzYZvK8sETPD6oCsBm4s2dsYQe9GC6AGfkPpq56qFea",
  "key13": "3ysLL3LShWgjTMxjWoPQt44WGm4KrUo7iNwVa7A7s5YgTSwTW2U1itqejvQBbh4zrcpZJ1bJLCf3HuukNrEkgnn9",
  "key14": "2pvp4tJdJ97VGJ2TzQjWHkCwDurq4czNvc9bWDVhm4AQRNxdKi1SYX195xDsaZ33KKNhHbEiYr5CzFVzLY6JuF9e",
  "key15": "4Dk73hjMHq2JQtYtdUhrUXSRS9kKEYNLEwG2akkY8cp1YhWuTK7JBTgNXXGnmcQwfskSuzpTCcW5aXfJB4fCiKwF",
  "key16": "5S4Ev5fDCSbS28ULawEaHfZqPpUbxUG7tP7K5pES2Kezvg37UQwifJ5Jr9zWrKkSnibMUQN6ipuSNzS4574hiuKZ",
  "key17": "fiWmkkj3H2W3wnuLHQEqjzGsq6Fe3LjGauv3S8ER7zFBD1uXh3LXLnQeV7d98Caa6xiFxQwE7NXGSCoCbobproN",
  "key18": "22VxvwbvYjhekvt7oqSZTEyAUhFjRM4kPVFrJ2rUpec1QzaACXMPZt8eku2r2Xv5R525GNzo82VMKn8rvVrhDE9Z",
  "key19": "iBfWsN9nTBGrQVAakdvBgbipN5VkVdXhnsZ2VT5oXBJg3JyJjaysNJbLrPYRRpY33bSokdkxyHTDZ3nfaHogY81",
  "key20": "2dk2zz5EYMFCNyv8fDmNhpFcg9Xih44JbSyPkPRyEVQ61SA2v6S1YNbwvPfvZZQ7xyXk98rwDafV7VUbfGqkfSr",
  "key21": "2cgxt8PnrYEhGTWs2eXwjTvoPRZSFgbqTAg1hq8vgP3wXYrkj53rBBKGGTJbJqSxefAv2nVcjkyeuQbH6mJwHbYN",
  "key22": "5v1Q9P8vcfK82WPEtSDRmpHvix3yMPiY9vzxALWPbwrnf2ZuuLyPLSAa5xRyaUFjUvaKwKPE4W2soX9BwXS4LSig",
  "key23": "K7VdmKLtwVHZXfSQB5pJoXAqQw3AwXx5Yzb8p5bxeGK7z3GCNXg5xMJNXdY9vPUSSk41KuQ7ReExG89AoxwNC1B",
  "key24": "3ycnEUnHS3RCyihC1k28wiztj5LeaSRHVQERTzmVSu6cKv6XNu59JsSaiet3Y59GoBABKxRAS8KSkXh8rDpvG3c1",
  "key25": "AyMPkpLotDHb3RkpxyHcBsRtPcMTnnz9foFKCCUb8GeRWXwv8BAvb91HkNWYivwf3zLsEjVYoCL81Cg1M8d4GDg",
  "key26": "2sFznh3x44jriHo1ja5AuDBKhYHGNPnnwBWYSUt7UYkv6orr1HJks4UiMTdsExDYWxHVUsJEarAsnnKf9ogRomn",
  "key27": "3eZxvKQMaXz69yr5qJEV6pYpS2aeJr4xet5pUjTK5LgnqioV1odmFagZqnqT35idzMQJdn5yQW696R86K3fKX1rA",
  "key28": "3CxV1LiirD9hDaTZBWvWEAbn3fgp7oAYRMPDDbRVkVgc2X3j6BD9EXm54bdaS8Fi8ScVvkX6s5nD9m5STjDC6cye",
  "key29": "QPguhvBXKPTzRz5t5dQRxBaraExcnCvbTpbSgjK65KW6xZBhKqYvdCyMEPzyfgaQN95MjYbUnznjDJeD8GVbGz6",
  "key30": "3STZDLwdUf5jcgKGyhVCSEakpitpnXtDoWjexBchmNsCVn7gBf8mxo3FwrnzqxbrgZ5RVFJiEnTNy5Cqf4xc8Ad7",
  "key31": "ypFAGHUhxmJo7Ra4Q1cc4qdBx9LWR1p1sn7VgNMgPUEQTJGLwDpBdNk1CZdV6qndJbnPXmq82rgwPAcCsiCdduC",
  "key32": "3tkupCAkkNYkxM19i8R68i5qbMyWmQuVb6TBWyRhUVDHSrMhc4Qv4wx7JUTM2BhyDFx9Vr8Z72vfaVbqymBW5eFQ",
  "key33": "4xrYHTy7rFstB2Mk5a4SvLJyN1VncTeiHiCxciub6sdQL2GPF5rgz6yD8zxuxsVopZN9LmCDXPBoTmSP9ZP5ZB9H",
  "key34": "4VmpGWCbD8g2RsV6TXDgDjMvu5KS2T4VTZvi3NHknRhngd3H7WtAAn8f42AXovXHSxrgVzFitoLcgSpnNjZNZGZ2",
  "key35": "4QrdA9v8STCbEKsnZdY5XGkNtt1ikjyDmUTkJ6TdzMWt5Yb9ufcAPPMiEyxWo8LsTngRZ2wv5m5p1Cu9y2EsyvY1",
  "key36": "4HnBYq7xhsvn1abJhmBEagc5FxzmTCyJmBySY1SXExzKPSzdkbkXJMF1ag8TJcPdKNNjS1dyi61chi2872kXiJpq",
  "key37": "3XupPQoJ4Cngkr9wR6vbpSa2wZSC5gEXecC5EcUp4tmeoHYhGHeySbovVUjvLgdjwGN81hz9HWRJhUR49YNyxngG",
  "key38": "4bKV1LbL5GQRGJhSJE3JFfukUuzAnbVNBPbCyhQXTWM9TYHKcaMgBV8U4hX3Dgi2HVeqQ42oQU7YpDsbpG7ajuny",
  "key39": "3MAQnYdt44wVyNqNPf5zy2emTRhSypZkg3y2yaCYfUqVfDDXmw1oHrGkbYMgsHytsARTDaWpGn6JehJjhGYNPZtj",
  "key40": "53kmH13hCwE46ThpY16ekuTG2TNZp1yNvAQSvnhoGkUHCNHE35U8JGumJtvMkfamCjv18taJt9iJBxLrrPyMr1Fx",
  "key41": "xm3TSfRzAXXuFpk583eaDj2zbqKZy8k2ptueyqjJb5NETkJD7hUGSa6agp2setscMD5Vu7KgHtBuzQa2oe8VhF7",
  "key42": "3rUrUisbZ4FsJ7khkNLnWpnRWjRt9wtc6Lu9JAdupRoF1BWuY5g5W5snUaXueyVUFH3BaT3Do6124ESvNSvkqMad",
  "key43": "3AeuySxUZMyAo1uSq7esA7gR5YPgZfdrhw7DVMCxmz2giWinFJyXgmzx2sA3dnNMZqHBzqiYVapb5KKdSLruagcH",
  "key44": "3jYDEgqMNW3wZYanX6JWooGnYct3bpPpM8gpMnnbH7zp6KoDMssJhjjkh5JBYrkUEa1zsLjGLAfhDLEBLEix7ofM",
  "key45": "2VbVFahX4KWLzA83tRAVHQKYp7wSZspyvag7aHxoGV39JVmEg9pVDvvCXZjLkrAmfiY33RQJoJcUo2cMGpdcwkUY",
  "key46": "3VncpM2pReGiCKNabDyWz113jCeLWg2uKx9G1co6J7t76ampcMitHKAw1m68L5RmSicM5d7j6C4CfwfUeGKCJB7y"
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
