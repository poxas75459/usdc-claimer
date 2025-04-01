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
    "5ffbzFbx8oY2CZABnPYncQW2PRLAxy4LXHEUTfd1UGaocvcychvHDjrcrS1F7M7x2Qc4RzKyGQ3GVSaQCWuSPiLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzqrgMWrfVYfFM2aPYeMuxQNDYY8CUyNXb2qQt2astwDU4Ls4hyRoJrbZhHXkqSrM7DizMaRVDkcNEnH7EgrZtk",
  "key1": "25qbUKg8qt47hwSjHpkdpT9rRKvyXBTCpQxxaBgSDuS7NuoRF2TTqkLBvThhk55vhJocySCVQ7s4LKskEbfCsXQc",
  "key2": "3kJxwo9MhaA8dNAcyRA6NN3KuZiaNQf8MkJsV3zaWt3WNbQ6mtQQBxHQHaa6CawtTymouZNbJv7URG9hHRyjUKhW",
  "key3": "7ZswpmpemLAku7t2GujDXiBXszTaBqC4dFQdaUvLPW79kSzu1SypZVVa81r25xVhjjT7G6jNPbjJLiPm7GGeyDD",
  "key4": "yhH93CLcHnJyeUZdP5Ydmayp3iuiDSSZtwZZ9CN6FXxKZsEJUqk711pXstnJGEWbBj2LTdvuCkeYEibTmFWuJ9q",
  "key5": "4zHCWnwDD1ZjdaLXTS6L8BCTNBtjhvdjNxFvxRSGSXCKs5U5i2U7DyBUtGmwuY3urRW6cuLJN5XsFkoiHFizxPKN",
  "key6": "49uK9UDjdWvUpxHjM7DzfxDhezztVeFbJ73U3svUBjG7HkY1zY2gigtzndQKZehhBCcQun8d2ckHzX1gA8YK7yQa",
  "key7": "5Nr1bpEvE7kFhByXDpLjr7gR2DacNuidde8q2YwWH3BBfeTUp1jzYDypyUZvE1WzMUEj1wS2cPLjzDon65To3hRM",
  "key8": "4uLzvDeUaZDjdPFcU1qxABonqDtEfJvS3gK4uXp7HMGq6qLXEp67sRpHjv4wGaoFF5HR8eCSoeWSCJ1F53jayHP8",
  "key9": "31srWs1NLV2GT4eZwoFEaSbP6fabETaj8iTZH4CRiXTzvk1gKcQVYd9e6LuzCnsrk5TKg4gotkTHLTn4J1mhV14F",
  "key10": "4vKFHdn46mKrtxeq8aBnjU1eyHwnerziWe11QS9YnEHvj7PKu5M4797ZTyCkDFf6ULcP3RJKXf1wtnwgg8dzTArV",
  "key11": "4zW8jjrmiKQDtqc9TVNaSXzcSYEz56rmjzNrWJxP1meQKjWyv3ce9aVSuneVXP3q1EVLS5ffi2tXxNpbGxeqchie",
  "key12": "5qNt7RxKVQa8GrcwL2TZXMga41CettUmYzGAM9ysnTpgxYpk5KTg2EjneKsyAvofuup174gZPnzPgP8wwSHBvgff",
  "key13": "CzWCce8WCtC1zY2wfKd9CwY6zA9zPzfdCwZGRFydQs7HS3GL9M1wrC8k1fLBYeVRG24N2XFcTTBSfxyoVspwS9f",
  "key14": "33AejHa7zsvmKN6SeUMGoki6vSBuYCPJzrSyHRjxWMJJJfWUoFhXPeZmVnoeZrHnY5F2hm23F3v91jdTyaKvL5qL",
  "key15": "voeWad14jd56JX9KDtfweXimGDFzjSknTpBUFFGMUDZzzoqTnFSn9vXvRYEdNk5ZZK7N8g9oSQpr2XGKdvuGYAR",
  "key16": "3FMNjuLYP1oQTC2SniimqnPSoyH4KeBCy8Fn2qYKKJSUED2HMHah6Wu7VVJBo8GEXXrb7srXfDyWH5CfLNtiGVMm",
  "key17": "Yvw6qgycjNMANsUSL9oy2gCbQkqKkui8AEDJi9M6HPCjK8oaxLFWeDdMewTFGufkx1cetV8Sy4Uu6SyGPZizqD2",
  "key18": "5mC8Z5xoKZo2ocFiqVYofzQr3yziwcZszEP21DBxSf2yxRVTYxxQXyJiZ4Mgi6K2B961qe9CszB2ynXpSE1UUdJn",
  "key19": "55q35SiwLJKfMAsyQaaphjcvf3qXzKqcJW1F3dwA7aNmSTfL9KSjfTTeJNoguKtRDTrrmM1guV7U6XWNW1bPNxHJ",
  "key20": "2AxNaor2JUsv8FG3wgJaioRcwbaUMH2WdPgduS9MWNkD7hUBsaHBt5h3DzJsnMFvduJj7HvfeBwQK9NAjFioyMHQ",
  "key21": "37TL6ejnRKikQ4goGiWMxqtntYsHCbxSM6zqffpAvwVyRZaix71MQu75qN7qSgaejoxDxQB55gz3gASvfZwmQbk7",
  "key22": "44Aybwou67RtGAfyanjwYSybs76EdmAmxFVbz8QwVYfFezUA13qSCq1xGfvm5YP7PqA4ZfZ172nKvWEnjTg34L29",
  "key23": "4nWtDFvBasTnvbk5uDnt8X5KEMc7hEkxAzTRAyHaPNdatuJY7EWvTLZnwgJYZRLQo7CkfH8sCd5ro2mZA3kTVxTt",
  "key24": "4Fkwdoz84a8YnwfnHvQhL2dFCUJR18dGtwpSokLTW62WJ6ZUtyyvng1EuFQjvUd5wdeESnKHSFKAhnLZwh2Hoinu",
  "key25": "2Ex2avECsjj5p69NWrZz2veV4mVv3dPFZq4nz2NTKRjeUGeMkUAFbw2Lnrck5FdVY5cYaSzLYF73i6HEg4jPx1is",
  "key26": "3QrFBLhFdStHJrUHqF52WnYB1VH7JSvYThKcZPFyoTbPsFo92v8QCH3V2xSgPj2mQaaKGn9DdPzQAG53TAmW31cw",
  "key27": "3wXDhKeRrK3mhd9WPyEFeuuUrpg58jopytFX6U8Ev3WKRHn55RaN8Gnj9YHsQW4g7MCHaHAMemzA844uTiVZFi3e",
  "key28": "X3wC8TfbHxTykETJbC4dVbN1xLLBodJpymGZjbHhGw2Rs11GJPBhXgk3CcHyfaoGa3JdcDBWqAWBcgQJDSPoBQF",
  "key29": "ZnyBRpDVU1KSjPdgL5NxdNmAU9cZDkHMamobicgq7uSc2SM8f4h7Czf5prcRhY9KCZuFm7AhuheXsjUNc6kvwpu",
  "key30": "5ooG6jECdxLC6QbC9T9HXHaT2qhvwVERqvn2Kv3dPkgNz8XZN2dY4AsnJTnvBSRo5vDMKnGJY8WMDywpBck6KKnM",
  "key31": "2419kt8YfJxp8rbHHfpqf1AcxDkLvzQqxEFDrZH1TZwBGAc13zi3H9H8eqnGeHdnL4nty5mY3iUnHvm9FpfmkowZ",
  "key32": "5pJpHy1ix38yZMKjF8FTAcjKitWbdCeMYYyUsK4YDhHbisdE53Arc6kapcNbLsDodHSNoeaNsZr2N3hX3YVPo3fp"
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
