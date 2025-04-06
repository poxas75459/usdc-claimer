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
    "4t7tu13shfWmgrTq4BXT3tpMepY5sQgP9RnfyTHDt4PDJj6nmaDDvJxPVgJeyUiRCyRndAmdW7h9qBAGjecwrCdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Mk6fHSvn4E7VULVvC1dh16kRmS4zn3Qaa5sawT56VCcsYoKAihYFxFakaZvfdp2ZnHjVaDe6akCwn11kagydvz",
  "key1": "3ML7MH3U3czcgEwj5UijX3FDUXKjpfYTgYuprYHqc3UMgAXNgC7R4vLpeCCWjpUmKqueVZfFcKkxyiZBmz55ge5a",
  "key2": "4s9NSEs7aUzWAXusgSGgU2twh1dWQbU6pA2XStfEtHQG9YX5ddZPR6CMZ2YfWkNw8cE2WHVXrGBrkD7NcDY9LxTt",
  "key3": "3SeTBEJDF5dR23NHcz7J5FzqeXW4FQEfb1jCFtPsVpYXtUDTEPUwx6AWWQceCfCxn98jcxR7jjpikF6cS6soDsB1",
  "key4": "3hmoE9VLFo8oEHberS7gM2fEweaw71HFFn5w2ndUuWFvbUJqGewPboD4m7sw9zv3ax6YxSjkvL7jCX26JqsKtcsN",
  "key5": "cMxHVgYGP7mAoDKABSN1nQbw6kH6rV6rpNmcqSKpHfLGKX3HXnCbayQs3i93v6mT8GV5D8nAyQ2dzzNYYrcS1ZM",
  "key6": "5SKVAE34mYGgNhMbNrDoC8wuoKyKwhy3oRUCSCUfSDwPvVmJvJViWj5s4ZJdFsbYnF62NHn6tPijfPv6e7Cczi7x",
  "key7": "5Vo9utviP3AJxGWhTbdNVusVjKGupKDnAxhraSVc49HdPQLdqQUE8MRVj7zd3fvm5txJ5SMmndfPQ7YV3EtAZoHS",
  "key8": "2yC2dJFuRQcgd5QBcZq43pAh33Whb3kkJTLwgfaehUhcND77DJbWP2QLc7v6GPqR4yQMV7fQqDzqHrXXSabHVv9g",
  "key9": "2k8bmpDnm6HH49B5qaLzmjZ6PvBQqCmPAdJqgdUXeyJ7gcW5eKesDGteiNi6c2CMY4CgpXJARk6eFxmyB1DuPTEs",
  "key10": "YSH6CNMT1k2FAof2jKKD3fgKVopLQDRA4LTQYhHCYA3HHF7uN4rwwGo92gh6AN4CWRWvtmjBdzvWUqxzmb3AmKp",
  "key11": "4MxCG2JpKjy8QpfumzdzpTcxAZsUwrWjGhQgMVT4c184xuqq1dmwPo8ygeV9pnYewSRcDM8GXRNSZ5iMCQwd5eSB",
  "key12": "29csckt2LHvs18NEQZXUxqQY8K9JAMEa6PemFxpQKVzb6dvSWU1TAdeK2cJYgvUBs5SkKnF5PEmasCemp4PdUfs1",
  "key13": "4JBeGP6jMoFy5nRQtiLdQLsbPMTuAjEMZFuvocgWF8bZj56WoSo1tRxfRYUYLx8aWAEnm2tSpnBFV1eeRVyQa3pw",
  "key14": "3awg9oX54bDzAyNVGBuiGKiT4xcAsVRY3oZhE9nLXh58G2DiBuVn8gqTSnjazrYWtNqhgadYWBvhh2wmKegBpu77",
  "key15": "2rvKVERp2wpd8BsSL1EVHmJn6buNFMZT4AWdgGGsicdQh5VC53usDUEV6aavdWfRWSvSEe5BRfGi7FP2RjvtDW7v",
  "key16": "9xbMJEGqaVo3VqyCSwmgosZvzqPAHCQTkSsCEETwa6Wfcxpkacy3UdJuGogWBvHCP1XGWLeUxhjB3gpWjLWYQpb",
  "key17": "54N7PzMNArp5V5wRqUa9pgiknD41wrcXo26hGaTPcdprYueboLPqJkvL5sASZCQH4t7w3T9cpC9Be4B36M1iqRup",
  "key18": "5nMFbs13nfo8vSBVQ5c2CEeGUBegzcQtpdGsDGbhj7wMmR62fw5qXNZASAHZTqVmocFULssqUHsJhET9dRPUpomV",
  "key19": "3QV3zyA4KjnT58a3ByJWhW3YefbWoUHRrA1uBiPvug2XPNHTkRn9Rv5t2mBu2u39y8sCLreLWTarkge1GKBLTFnJ",
  "key20": "38F3JNBa4RhYN5HAjsf64mzdSLoudAsen2xLUvKTiG5TTvjPRnnTZGPzogfvUyL3pStycAy1vA6YBF89StT5eaZr",
  "key21": "4hy87NTHzDDEcujSivEhKVqNKibi3gwMzMgF28ZGLAbpPi8bgDqqwUdgvmheNZQCXkFvQathTxSnCLSqKbcTjJwF",
  "key22": "4cYTj83RrSoqziw75oW4jrdzFDYHb8LCaeinNM5hFmN2htnr2bT2JZaMrcbS6B2A3duUZ1MMPyjbAapv8PXQgfdz",
  "key23": "4XjQWQPxDjjXjxTDwz3YeJ4rVNswSZ2fTTZJ5kcQu4Ka4SCqZLEqRfnMfMZVBnQzdUXg3hv7BTZ3zHmoJSYDpXt3",
  "key24": "HUg3PPRo1GjHWZjva4PjT2UASkZAS2LS2giehhJfdkEJYDEyB3soU2PtDdig9bVCiX1Fe2A8RGESgBpwcdFZyYq",
  "key25": "5AkX3A7KExoSrAx7EGEjxybT2hwWqi9t68Wzohch36hC1ze4tZV3HZq3TrWyz7qhBAfgVP9HnMfQCR9Zn9Yz2AQQ",
  "key26": "2BwRmQHHapTY4as3GRTDDbpn5iDR9Zrnr5y3ed9CGUZAVbTcFHbDXMdVrSBkHtRo1yQvguHZZEQpip3pEoBuDkGV",
  "key27": "5G6jZjvt5mGNyz8vbXmj9a6Zj33V5Chh3kK4VgwwwMxQuYAnbqcCZTiq8LBNFWyqC8MCqsC93FA32qt7ZwTQhECT",
  "key28": "299iuPzQFKKN4nCgRQ56bLpRedw4M61He9SVBZE5uzBTi7HcNJnfGWdcbhZViuLnnhXknnwgK9jcWRCTomeAjXip",
  "key29": "3UztS6eiaRRd798jYGbUufrfNai75poSCrZuhhbpxgqgcvxP7rZi6fNfDMRsKa8VQiwHEhgjkBBzWTs8YYxUxo4A",
  "key30": "WAVnZdYd5He5bxd9fprHuqQeJGuUfJAXsxWHmE7HH8NtCxsHGUDYxXGUi6cVyWQh78oRdVgTnknhyMjSmYgEQLB"
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
