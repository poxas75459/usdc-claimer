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
    "VCHkhQSzckVvoTGvnU366dYYmtrozVDsDAR8MJMra9BsQtgsdjHSJ2NmwddwHJ2izXno3EYEr53Hw8C7P4UHxUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EV5gNjgbpBJm9yeP19dCE2f3ws3howiJusQg1ZFavuA5LxdHymRax8UFhLnMigHswri1QYk2gzegwKG232DKnXC",
  "key1": "u37hLciSyu3cbE68EBMmrMkJqrVRPYtsf2jh7g1NsmF74KhFNfABAPQ3xEPJpp2fQmKQjmPZKMkS9LysbW8F96s",
  "key2": "5Uy1PjzGopYGvE1EfkrGUCCtVPn9T2nBZkVVimpjyz4VgzWDL9RA1AuB8ZZgPu7rgzF9DVezxxSMPKgQMH8ijDVY",
  "key3": "2PZm3fw2usLUaNjopfybaTtnBMR5dCdofco8KspKAT6yKrajCfhPYgNNHFibpW8gsP5bGAcddP68ae1z19MfjbQG",
  "key4": "mQzzX9515EmymmADbfAeR3ntrVna1WaAsHHh2Y1HGoHufVjYq5Tbu7daPWiorQfXq4Cuu8vvy8RuyzS8jCp5ZLJ",
  "key5": "5bmMWqt9tGLF2f1eYNF6ZwECki21ePQ1cg62t2hH6CT5EgLRxRzSYzuz5tMfhYveE28TZPUh5He4pGPfwJFu7fAU",
  "key6": "67aquC5fTJZ9REzR85JMMLCWLEo5vrNSEcAGRspXLFx39EMB3yUPFs9ok8wtDXF35q2UoMZ7Y9e6X5a36aoL62tP",
  "key7": "57H9grep5nwKMovHrHFnrPG3KM5nWL2mFYF8gLdEo4EyGRrVi8cKQa3zoFUvNQ7zWZS3wyoLL7M5MqT4wd3tRhWe",
  "key8": "5QnCbcT4jFuj4uG2iWdn2dh5ugPLyS1QS8EZZ7wMHLkkJ6GBUCxP2BQyhg7EfB3GN6EnYA6rDf8Gvzje8La2PpRv",
  "key9": "2fPitLoLxK3RSfZDT8M27PZvRTCDdjnDcWewr27iz8NHQT5wmxhqbWTukgk64azxaW8cDN5XEahr2riwGKaTX2cQ",
  "key10": "5gdCBzbioKJpoeQGo1nwEJrwdMKxfYx5ef1pkLgJnYsWYoTdMaRow6PTLT7YUVg1PnsStjXGDnCmLQq1dzXN3zGU",
  "key11": "RG9d9bgrFKrB1F72HBYtujD9A8ubr9HVMRfdHNY9wmpnxXkNbXqDtGymbNJ87Q6UJMxheHruDhzHn6SwkgCgidt",
  "key12": "2TFbcKz6QwtzL3cSJ8sfKemcZU7p7aU3dg7vj3dhrR8BufjskgGfGvSCWFfhvMUeiBdBsNRMRZ5QKMK8jUoWnG8p",
  "key13": "56AHLMC2KaWhpSWgZrf7AMS1MFskHidXxnheUZUbTWSnJxs5znkd9yg1t6Yivux5tSnJXQJrWrVJowLxA8Zy3CGT",
  "key14": "21QGutLuTdZfBWZDoZxckCdo6f8fnf5T3kv9fCFtsY8VCQChe2cY6jHV3hhXmaMZYUdT9FAvyAy2gTaJiiEppYMX",
  "key15": "2Yhi4RtuDqD9Y9RLncsEmpmqjpCtADcv8uZ7DnqKjDRGhFTZBQpNrZpj2JuPstQyrrBhtRbBr7nNiwhp6utbiEHB",
  "key16": "3z61grna1QRHSySSy8duH9y6pbwPzcfmndz8DnFD8gAL8RmXfwcNX2yDQpoTTG5NGZ7afLvL44jN4941p3jqxnXi",
  "key17": "5LfJg47p1kBrUbH9EfANW3bhPwmXoeyo2hgmZa4TGY5LBpFLkPb29Grbdrq45c93hm7ztXDiyNjGJYnGwDsg8vp8",
  "key18": "2P1DEwkSpBkBVZPcaXrT5gCM5pYnjYzBk7JxLw4csA2agPTqEnw3UhYBBHKwZDoxk5ZfqHhJZPQYJv2srBcmZzSN",
  "key19": "53HdkmxS9waBCZs5bm3r8mstRtYhWJGPSKnbxKbChfQXHYxdxxTDcd9h2Mn5eqm2sNVdzbvcjXruKS94AnrPPZFk",
  "key20": "3rDKxdfeCdCBKkJM8WyeFfMyxeVr23eAvx3yGPAbWgkn7128L3Btx8hyy4pcHfe5TQxszJTZArax7WzMDVyDfCbE",
  "key21": "3i7TKvw53iFKoQBniHhRJRcuKguqiaB691mLGEtsU1C7eY7CsPcrDU8amhunPHvivaFzyNe7uzYqMZvjMMhzVpBE",
  "key22": "3DfcFTg2eHoXWrS7Wie62QuS43vyyAMqKfdQzcUURP1DCFATru6NngGgLWgtxTmMvDTkUyDHtjHdQSe3tWMWHBBC",
  "key23": "5PjS7dKZLehFUohYtKPD9NniQBFxZKN7xRZ2ss4SWsGE7vVB3DgjmAkPrnaUyFD9WF8G2Jg2h9B49GpAwPkxyh5p",
  "key24": "5NPz2vjEgu7bmP13nEsMyyjq7RmVegqHN2rfzYyyjXVKJewHnogrrPBaRSsMVpHrN5nmV8ei9JkVJKVcMn53L3MT",
  "key25": "3kxtFegfs2zWzMwppocF4JmqXXpvUK6nJk4xPLsseHSRGYaGytWjpwp7pA2T4726czTskhrhxae7U5uFYpTHkZkG"
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
