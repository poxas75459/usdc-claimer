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
    "BhcZipzgmPaq3pEzUXJc5MEscAbjTHJY41Tvmrv3Nbg9deVmP4GFjPdiVZYBnPGyrTY6BBRkf2TWcCx7y8DSA2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7GXegYyWYxYZFCZW3MPBb6wLMb7ynQPtiYXexzpnnsRsa11JKZFcfafCrTRs7xsfRT8kDmqfPn6LfpacKGaXo9",
  "key1": "2DMCQWek3ZnYspzAjnQNfA3oE2hJRYGgthvrYBiMrZqPdNgMBn42e7Z7tiN357pazrovWNKVg6msCoK4ifNibj25",
  "key2": "3dRQLhwwdw9pRhh4H8o5EiK1h3ovDQrdPkKLNKMJCkG6eLJBLCnzZJaXewE64iyNc75efwnurPdpj4S5uRqdR1Do",
  "key3": "3ccFfL8Sanw68ZS7CukCrtqo2BePWsnHq1XHhYcqCQ7h2DkEL9V5JcSZx3ovpxgDRWWNSXaqNcKnFUkEwgj7bKGE",
  "key4": "5NXD3jdpbcpHAgYDbgqGHjbfc7eKvh1U7w2ao9we5TXkSB33tgyEqyotMP5LWDiQWqFEckujg2jrhEzETEBea64t",
  "key5": "25aGWakouMiAAFJQzstomjvnZ5FJ4NC1REhMjwds4bMaz3KZotwGhz7ufJqMxjnxMoQq3v7WdTrMRDG49Q9Yeaaj",
  "key6": "4pYVTTjrmXKqHPV2no5CV4xueimprfuKgmEnMPsgd9Ln2QrzD835kGPo13wgLseFaq5xbiniGXBVxPJYsmWavc8p",
  "key7": "35Zjwam6bvY18ucsiEk6MJKqCiGCr79MXytWRFapfLPw8uoZ2Qgmc1Ktk746Rz7LK2G5dJ8En7s3KukGSA3zSjmW",
  "key8": "2hwEUxz3o4cEfb8yzZhnCp5FHYHMD9vXTx2JsDiQhPhJobAg4xxXbsBeqMmshHfRkGFJQsW6a4qbEA9aS7C4UUmn",
  "key9": "5WbbUjUULACnBjXcgV7LpVp27ZAY82n2EdLZuEyY7Yp5cYBLAdRSzur85K7Npg7SWTVDQfh8hkiNe4MetLdqAdMf",
  "key10": "2ADT8ht7G4USdf8USTe7MVwGWP5jaMa9whEH9Xj79U4ACnXrc8wnKRX4AFSW4HJKAJ13ECMzb1eGXRJwQWiCQsWz",
  "key11": "3bHyxtweuGhmzf7gWe7T81VoJekknPmKtsZ2rjHggTcLvtELf73TERPtnaVyAvZfbahnjyh2mgLMM29hVwQSSjzw",
  "key12": "uaUiRBKM9Kxc4zFb3xzyVMHFifdro3xPa6wzWXntBUXMidCU6YSJ4VWQ8WwwjTThhAvP1n2mhufoSVWF37mLGDN",
  "key13": "43S6nYX3Vw3DFzg5pa6hkdEokibqtYMVmGtQpcSRQMje2jafvavKyeZMCAZHvNbZ2SY4kbwpFW7sJ2unnpdWHEqh",
  "key14": "3BGfF4QLDC17xAFjc4M9yt3B6cEUtPNmLvE4FyuN4tBAhQxHGx7iAFz5LCojx27p7RuAwjtqimYUKEEqbgYTHHTS",
  "key15": "2sG9mmDZkZAyLSCCb3LnXC6KziiXwMkqjKjomWSkf4qoRenPbch7F4Wq95aCARieKcyVedw1M3jj2cjyH2t5bqig",
  "key16": "Nvv3sviGZJzk7XbnNjS9Tis7PCx73Mm3emipFPXpe1rstQQeVKNbUo5UH8DLeiQpxwSW4L9cqbr1JuyFxX2eWQV",
  "key17": "3ZwxP9g71HaayRMTYCfuATjsg36Bi5WjdMMEwPL8yQRKr1Apz6bKhrkVfcpF9PtsyJZsZVKoqspXq8GsPvBc7KPP",
  "key18": "2KDHJUNvoxcNSDyvcDRj8ArJLbjCpXaDQafy2BfkNnCw2eqLLjFJihBGUkK7Li28xPd9LPUbgAq5KeTMD8fq88ge",
  "key19": "5S7WEeP7CHoKKyarpuneUY8tpSKr1mLR89xx6EZkp8fJkXcg7n5AkF5Da66GNy4Aiirb2gKWKvjQ4zVRBk2CDmrq",
  "key20": "4Qcm4pJba6qgedfQjvDv3oAyU26DKQzgebqXCWyanyFCN4i1uApq2x7LvPccurcqMb43xGeD2pysYacPASnatakR",
  "key21": "3pVsXRurJQtoQA3h3FTmn3xdrrerHojsehZBhrmNTXZYkxFwtKJMWahPj9YJYmS2rch9JdekKMUaiVbM93LL2DcN",
  "key22": "3TK2CWTk9iqjXnHNCCfjk8kyhgk73nmvaNtDsHkbttHVNWEAXFyfeAJu43mYBYuJtKiVpCstYoBxvgs9pGXBzU6F",
  "key23": "YXvUPDQ3JsMf78rMRwp7QFrqurXPaBKPLivjP5r6ZE668prTjeNUtBZVrnYHAfTJTX6nNHoEj4PtU1DKcfkQVR7",
  "key24": "tfniffDYMrQmuRGTuHB4xdqD7Vqm3SoCiSvZoapQdA7p6ou31jtNNepYZPird8xchpBaZsLQN4dxQu5zu9Pf1p1",
  "key25": "4z6oHzufJof1GyFujzujcj8mKmn6Pk7Sy1MsMFJGUHvpDpeXy6ugCttakrhon3MsH1tspHTaCyVmDKTyiw3MkUQU",
  "key26": "3za5L8Luu9oo1cHQ3rVKQUHJdMJaPYWDX5FxEpFsEqWr1SVXWPUmCftSeC399JvFpH1AdfWp7Ki8pkDhcHnhirFR",
  "key27": "6b1xHHrXZqP9cGM9t1nEgynit5BBUC9b6yUCy2wBSBbrk5de43oVVRt8QMMLmeKu4tbZrdJjGZdgoWfUGk8mksq"
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
