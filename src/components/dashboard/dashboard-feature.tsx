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
    "4JUpJPkqQsewxcW9WvLxbMLQY58mbG8b1axZ7bh8Xf1TbQXzEi3BUxcejdJKxKD7s4Z2GxuUYgRCxNSVh3cqAp44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X31FMcPbq87N1awCHDR9MvHji7pMDW6mrZy13DQLnc66tCssnFWirML5LscHpWiqsR3CUGcAvc2uCQSYMaDsrzB",
  "key1": "61FnU7vjqr8D2RMXEoK5ABhnjHTSLzi9prBpG5tUo86FPg1kyq7Ypb2Kjdphkgk1pzRcRF6vE3jWHZqcgDgLbtHQ",
  "key2": "3SVMKoJaqDDSNFjJDPL96xCfcHFtKeAwzHt4MkvcxUXXDhebQFnGup3Cn7mwCKfJkiGi78pJBkYozM7yuiFnFthe",
  "key3": "54317VXJWewQwf1rGgrAB2yoxf2ee4T5XnCGVQrMrndj5G5i553jj8MQ9TTidfy2jQPYEu5qDfuWuVpVH125uEk9",
  "key4": "5Qhf4Y9tNgzBtjxiMoXF9FawvHLvwqxLUQcoXF5zvMXo2AuT47VLcPpj7asQCCCjwbKhDyrBf3Kujo9CKZMpoYhZ",
  "key5": "BUkM45FKyeffy4bpUGEXVAKSUTUdUC5FRRGFeQxxmQGCmDJCzWkC6jaBr2AoqG5K9msXYU2i8ALm1EpYR5uXcYr",
  "key6": "2s4cmVmWf27dmoxE2vv1DMcBwbZSGTEgwd5b8AK4zuxZoA6TYR377DdTeWELeof5QXugyd8d7AJE7aW5VjnfrrGo",
  "key7": "5qcHYDevuJmM2C9Q9ueCQvgnxLgkvurFBfN5jrj1oedN3Rzzhzf2ijycTHrP848dye79d65Yf9VMKUbXxwmh5AoD",
  "key8": "4BHLAPbDJwqEz6x3thkmHzHRMLHLXZ8RFYK5UAwDaYAbg36oMd7wcHTcfz6fqNa1sbzbueC1a4a9oM1yuAponFsX",
  "key9": "3Vzdov2n9yjQ4PiE3bRXamqVf6y8pN3c6covj7uDUNohNDwsBWEFNHjR2z7hVXPNtzUja9foYiHZgoFCUaRv7orm",
  "key10": "2RZ3L8SuM1Qj3wrpDPm2EDEtMicug1WMJNgazgb6wEDAQT1oJ5gHDibQ5NjJxjxrALaSXSVdwWxiCMVm6PaFUra4",
  "key11": "jpsvsTnXt2kSpJdZp9kD5gSPiuFMoxP2vBdRv4mVY7PmemtEShThwZeeZ8rTprZEyeG7idw8CvsvQbFU3L6TDYa",
  "key12": "2XztddQXC51uJPECdEknr8vAC75fLXvzn7N7W3Bo19PeotBByzfsygTQe5vMdeaW1XLDSEB7ZvtHKTYcQMzX1tEF",
  "key13": "2cpPpvvCkdnkPSGbipk7tpDnEgwbBW6QeyZGXhNe1dcjSb5oCKASDuWTVTkDRgCsCJaB5oHKmXW2BXbgZzcwqffH",
  "key14": "9c1LPQ7tjWkA62fTTywAjb8AQGwBTog2txN9SZDY5cuPrngA8iJeerwEvnnRg6XgxcA19VotgwMQAWQUEJJ19WS",
  "key15": "2zsRMFT8ENDhyAwmib3k8BbF4zhSazqDgxFseYZFHTQQ8UonT8BtHX5UDFgtctVGd4ZkguidKRBnbkTzurmjyBCm",
  "key16": "5gM2YjBvK6nahcgUsFhAnuqkQS7uCeX6A5zgP1e4B3vB3ouG8wGXFkYgve7Bu7MW4Bbb3R17BVchcoHtwahsvXeR",
  "key17": "5UgkKnnbQ2xABfWFBNyVVev4w4vBZYun9d6Q85ySxrvk3FzVTsYo54BmAPHvtUwCcozKQATsCidN5kjBmRcQfmy2",
  "key18": "5Scst1uGaDjNzXH2W6yLKruDWeFNa7avm4ZsSbfFThayf8DoxKa22Q7Hz53yrGXfycjJVcWdzUoME6V7xZ3mgRW",
  "key19": "2SD2UNLc7UY8FF3JMjNMkKfrDTrBJRBcC4sDcPudtescuRWg66z1TeAC9HCs2YUowWgBgcKyq3qtiaHpFm2uxmc1",
  "key20": "5fGP4V1XPn8xyxZ8nY6fxZZXatgyLydiWSH2mzcZUYV8wrqku8teuMgxgtwpydsfuCBsz6HZ8LchJwdPP35g8oxo",
  "key21": "2LUwS8oqy8MUnPA6P8ftAANtzcppKNyoBiR3ych4RZpAn4NP4TgSJhhR9vMRpmzzBkXPRcjzBP127ALG4nbYCDth",
  "key22": "4zpXFHjLqZQp6RXXFkgMusvhfgY4qDjHikj7kBrB8tqE5Yd3L3LRGRcH1MJeJkKXsAkp8R1roMqvVsUmFTuQNQ4z",
  "key23": "2XVsGtdUGV8nrneExph1QSCUQ3TAhiSq818KBf4aftmwojEns6HrJZ6TPoAEgncKeGxoqJKvfnffPiVMMhhiG6E3",
  "key24": "3yfvFoPsUvaQmCPhm68HcnosKF68WLo7ZddCk6MYa7CHu1uZ7M5TqcT4eVhEVbyZHwzk4BHFXy2tFwU1tNonutv",
  "key25": "57r3sjVRKcePq73MQ8YHNws7Tb221ENnTMYt1oW51WmvDGai314NtDixYEadDR2pUTipU71k77h3figC91PKnqwX",
  "key26": "2n94tPLwe2ti52jba3tsqFQARAYXjD1aRCqZw45VC5SJ4qfTFYp1Sif2R6CZqkGRG7mTorFVdT9PVGTZL6wNpKBT",
  "key27": "2LG85VazYvefEFoBYpdQA3GKBir9iq4qChh6Z8UCm7tYSddr3VWU4ii7CmpfNsJqREJCzFy4oTzhB51jXeNfZsz8",
  "key28": "4GoSfxPVNdg8uTLHJ5zqThkCFBENsccPzGHqUSZStHk8kuXFcnF5KZarBddGVA73o4btvpCQpeoSXhgVTJax3Pu2",
  "key29": "46K33Xp93127DgHXMC8qbYmP3bpfPaqA8qVdGVmFgxMwP71tTZS5HL4LNnqULvkWr1LJCoL1ThX1SWPvYXGmVS55",
  "key30": "58EhzxANtJBQPN58EGD5ZEdrbJsd3KcMoPRLpbFK1QvBZ7hNPzrU8u2brWwuAPotVzgnbZ6XYgCxeqSEtRVpvdi4",
  "key31": "3Ra8eBvQ8kJEveA7HXU1ZUwisXtvvNfPxGiJMCMh66ZRwdcfPmYhA3X6CovMuZg5XtQzDn33GfNseppezzr5MGWV",
  "key32": "4SBdL497D95eLF5TmNgWTWhuPvDBj5rH5Ya4tWAXYeMwTxbqEVjxe7VWGJjkoaD3rf7PMBzxszRUbuFMhiu2Y61m"
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
