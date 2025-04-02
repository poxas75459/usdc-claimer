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
    "S6TD1eTSNejbPcUzvD1ve38DFZBVmW9dBSJjZwKdrCskM3J1j5G3vakHDYgQc3soByPyEV8TjwfTY6nSJ2AhafF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGoRc52HH39j1UchnccmKXsc9aYqLhsA3SF2JZmHGUZbbDwc2zhQX6upiey3w8artpzwNbGyPmkoLLWwvpMv6A1",
  "key1": "4mDGEw9ACTaghuVn62ZfupXteur5YDb8gi4svut8MkLdCSZnBbwzxJdDpZDxQYJjfU5kjAud1RXSHbFDVhLnjefd",
  "key2": "2M2fCVEgMpjyS95N7CwY2jYB7coiiDgM1duu3BXMkvTVMkvnqdWLawmL2zeavLgqvaBS4ZYmChhN8opUntT82jy4",
  "key3": "3sL61Sz4RCBpg627EeD7iw5BnFzzfRaBibDMeGfqXCWnXbCQvySw7jFihbKCKvo9CSH2dHH9thvnfLwkFPPRERyD",
  "key4": "2uznEFX4K1PUfNcTUZTxp99xQZaTgmpXiykfQrD5YDJx5Pz7SqxBaTQZL44zofwf4c94dJGfy9aSGsEC86prm7y3",
  "key5": "JpnxPRsQiZL1zwBprTyPGaVWm6udgr2cnQcHxVwtCPM97HGRPqGBy3etGAJXAhnUZydf51UkXFL4tpiJDC4AwXm",
  "key6": "26VGKUetyinqac5tFaHWKDKTkf5331uhjRyD9shJHVfHogJPfsNkpQyuntnwCV6BPiaFhFftoZ5P9eyY4GVA83q7",
  "key7": "5L86RHZujKWEabW6JcmA9CMZxX9RffZSw6kaUyksf32wCtsTPbLD2Gp4pA3qWmzP7YGCEL23PP1KXP9nbebtmDmL",
  "key8": "64mgUcTFM2iH1zyNBUrGB1qoFq3ume3XEEVpXvfCwAo4RGMBoAkfDsJwrASMzQ4vPZ4emzB6X5yxVuuJiFXEZjTY",
  "key9": "MVxBJuHvtWayHrgsoLKNyFL2mwjSKEp3fajUdCmuaKJ9mG9tw5MC5zwmKV32TwPbyEUj1U1Q8DttAxdgsYKCRdH",
  "key10": "39L6KD9xWn2AKyjiqZFmT4DCPx6GhddXDPmUUs18xRhXRZw8E61qYXdwDhiXxCgCqQzBExByt2K4QNMQzVdUSmzs",
  "key11": "5wCxMZPvM6pKBfBv6pqHtY5TNcancdCBJgCPuk79YgT9tW717JMvsGsCeF3YwJVh1Zcmh4T8d8381WUyj7nurme3",
  "key12": "4PasXEXUgMcZaqnS7tUQGiexucyNbDfrK5njGjDAa6GWkhqwhT8iYBb23yii4ihd3iru9Ddm4JX3JxbwTGRs1ZZ6",
  "key13": "HLuH3yrg1r83Rm8ofi6Tx4vZ8SA5SZwX4priCQ7jG4V5RfeEGmQ9qmZpWteBRrvpi3nCqWzFdVArPoNc92VXnkd",
  "key14": "TznLN1w6weL62oPkLweQM1azWWivtfSpKqu5D9Td8JuRcTojdWbAtYhpxcS7gx3PfmdJ5Xo3jZaY31qsfVjX2Ec",
  "key15": "38wVKb2P7d38WUoSvxpwjLYY1demB2ozw3YA2SCSyAZ7iV5PN7dtdG2jT8L8k4EcjcthGyqFwVsdk1LeyybG5JjD",
  "key16": "3FyTLHmwD39Ya9vxyKxRDCpBmRFm1fEDiprKExrQGoyiZNBFtRdRssF3t2wEkdTSp6peDaV3geiDhGHqsAp964iA",
  "key17": "2aRMTBTWTSD4a8zvpS85EjdkidaYAatfnmDZpEqATX1Mkm6wCuNjcc379Fa2orpXRqvJU1oYSqhaCMERAq51YG3G",
  "key18": "FiRqqHasScWAEqppq5FvU8weUpGVMzxcz7uCLszQpxZq4a5W1gPj4rXBNAm1FejRgedqPwJ84DN4SQ4sGqCNPdJ",
  "key19": "2cnF88Gd73SAGU3b8oZihdJnfddNUWbsv1Pk6h2YnJWft1Nnsjg6DomV54BrisLWCHTam4o5aMCVF75RJcG5eDd9",
  "key20": "ZuMXWKBYnvsvQgZPgmM5oaUeGH25jaaYJPWAhccBo8kZ3SP9bLo4dPcbmEH7BSoHVz1ukcfuJyg52EnQMMmKeVN",
  "key21": "2tLVJo973fHEjTpXYp3GkJzYuo58qM8UZxV92EcPWVG7gLDtZ2qxcmjfX7FpybRuLnFQbQhd7rAkNhVX33TkctC8",
  "key22": "2Vzk4xwtx17zXcY5Wmty7uRgECinL4TVqoMjwUfERyTHeDc5nLD1ikireGDJx8FSw1o4xspVRNhzn4jwAKxavkMF",
  "key23": "3JKCiRxZr7BmChBzQ71MQ1JDBhAX4Gzb7XYfG91ALPTpRJKmbcZXFjfXvVAxgpfVbVERx5Q2oocqGZgQLfrH8HzA",
  "key24": "5agHJcioMgZDVpfRsyj8sDZmBUXuH2UpsKAyG3xXjHQfZPo5QSiJ7HtB6hQmsCuo72prcgoMbJN3nYWAQ9X1Yv7o",
  "key25": "2NxVismQzWQmoe9TDZ9RpDBEz9php5zhhNBF4E5D1ufPndwS4WeicuFU7aAjWERaWZncBZXbUaqDrVqjP27wdbre",
  "key26": "W8gyzEphTfg7cDahtgRfuhGKTbwb7hc1uAbPmDEnJv4WWwrxo5ZLXMZaYGgSKr3Q2qSeKTU6jPV8m721FhqXuCW",
  "key27": "3Z2AguwWybLB3XwgxdpoPLN1PM7Cuwi2CY4KM9VRdNezBPrRg7ofrC2yefby99oPq7XWTSLHRqaeybu25sxvQpdd",
  "key28": "2GS4JtNksA3Uh2bzPVKU7xYuYgFcin18FiiSUqAWosLq1MrekVjmt6auzki72QcmqafSUkTquhe8XzxU53B4Nm2Y",
  "key29": "5QbhakLhsfPdtWpykBTjXGWvbKYT6iz16D6R1bzSCT582nX91CaGVGauAH1aiZtJJP2bSUGe8kdbq9nxMb8FnpTW",
  "key30": "3etBJQcdoQ91dGtYdXHogA8NNB6uh58dsEEpybFPyaXJkTrTvpwfW6jyFD5kBMin9HSWH8QzfNaAPxse2UzdUtKz"
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
