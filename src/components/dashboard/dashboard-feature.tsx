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
    "5uhYumNKSy291133xAgDoGB4bU1W1F5aRTnKzA83krq3t7p6YSqymzFTk9TBRasvXomujWkSNJ2SGT1C2A3pVcAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j81LNmW4Q12guk9GWcfWneW6boQqmGSShCZuGzfazRev2AehD5i4J6QNSj83JRPXUHHPHZFDdsienDDPi7pLc4A",
  "key1": "FdQPFJDC78d5nZNbSfxjjtbyaLCexJ6otUtLNYNU5q2wzbkiCqcPFgEbx7DsfPn4CBVwaGxKoPKVLXzCq14CHqq",
  "key2": "393BmW2ARiUAQtquUin5XTfaPvpWaNoLyKVpfFr9EwxM57zqMz9JbhefpEY4m2NmqWFZdyS4PsywgV7c4dHoQtNk",
  "key3": "2Lvfki5MgcXwFEWkxX69KyuX4KbNEtLkzN1YGnmMi19gwNKmcaQAWputqaAnyWpSgyLhRgq3WdJGFph9bgBbRbVc",
  "key4": "DcAJQiidegAJmrHq1Njvgvw9ZR2BFPtAsw4US33QsUymMqtJWd7MXSSeF9T4KbVBkTycQxef9mg1FvPB9pFbK7m",
  "key5": "kSfvAQxop8C1BXnv9mpUdmRZLBKm6bKs6BPLUQ4VGFes8uRZfCgphZ39RGDfjB8Y9uj1HVdm8Hh5JW5YtZha8Y5",
  "key6": "4CdbG4H8W1FCXthtmMWCUXfrXxFLH36NBx6ooSmY7yETGaC4r9yhPMVPn83CdXQCJEvUcx9p2JVWmYdFc7d3ZDBt",
  "key7": "5XSinrYxh7aH2jXc8rJTRxh9DyH2iCWD5gQHTDL8HgJkxzhYk3Z13uLSXQYLMhhdCS3t6PNKHszhaY2KFgrEVHnp",
  "key8": "5D1Cvzzz1h8bYKMS23uKfX2CfZBrQhbEogegxLpvtcHU2YVWXRARLQBxmHNMZakrjzSgAT6ETdPVBVXsDsekNGe1",
  "key9": "4ExhrPV96LmVrd2TnjsCNtdqzwge5oH45qf2CugGgo5jvuyQKYsSoodjjYJDsWXiA3hWVbNsn39p7gJS8N4tyYGL",
  "key10": "5Bckt7jqyMLJ1sAS4pcVThDEHeF2zpaqj3GPEREFpMsDzfrZw3vMdek8XUxHd77Q1oWHUuDFUFb9wdAWwK1dY9je",
  "key11": "21iC5zvZY9d2WnCmfgZZiwNpRsEt1U1W8fSDWxUKd5DqEKLv2R9MeJUq2yGmsKkg6iHsMoRXrXxvny3gtM1rKZzA",
  "key12": "3NABPMX27TELjg1ioFjBwEYASucTbWZX1j7AKAZD88av91S5Paejf24V6wWzHDVMEmhEJAnQ2rhTaU5GfNAQ4Wij",
  "key13": "3DvzLTixqdXdudaJjTANVG6Se7g7fLXV6gArxwBiRn8Xmve3iup6wjW3QhFTdC8SPnuWCkraQeSVC76eXnP8LyV9",
  "key14": "51CUfknQ2f5wqZAzPv3EZpNY4AQPQMgCE5qrT4WdkLe9PEc1woFgkLbaRDHCMZmvaUGJE5pEWQyiprxZ3pByWW59",
  "key15": "puAwoWe7imqYsXTEGeCdYm7TLymZNqe2QY3jrRgvCZuphNGNNL9Y1M8woGfSfS4WPeaVPgQYPHdG4HEVyyTtv1u",
  "key16": "4FzLRvzmjxmmyDuTm38pBbuFz9aLttXZui3r9Pz9CKZrfxiFJLNCgVnXoidY9KWTgVrHBhsj2trNZLMgN9HqKBpP",
  "key17": "4HRqN365uwXzSCw5Ttt5TPGo6LCBQk99KHvMYKrMGz3K8c5EZQbKHMh2xgP2y36qDzvTxCRshW3AHjeLmjk7uEv8",
  "key18": "5VuLJAmhwyczj33JVr6KeMkkcYDSYtpi1Wz1TsG66kZVzrVDmF1BEmgR5xWDHvyhdU6jXpvVmxdU21uLfc5xkHur",
  "key19": "5GSdXyn75KHVDByUXG2TXm9cRDmD56jbsTsvFdPUJTmD7uiBvwvfjwvcnYeVprZ6eV7VriCT6HFaX6qorevC6Exy",
  "key20": "HNuFHmwjc8J1KJM2nJQmWXSMuUCzB8T7rNyQ85BsGD25nw1k9TEurmUSXtekM4ovxARH5X8LqXtr5wxsxSa3xHo",
  "key21": "5jA9Lg4o3xdVjQsbUuqbcbepvV6MZ4FB5fewY5YHx9m7fpBoAMLg3c36yyq6hfrJyFFcgWVEsCWPaDdbhnD5ZNeG",
  "key22": "zsZTVUVxkuFTy3KuaqUBfvgUQrMPg1LEA7eoESy5htXw2xKEELnGXdXdoryUZBmJW4YBJRD3qP2w39J94EiZZSQ",
  "key23": "3kzQmxmJgpx3kEi2tdQoXxcJ7CLG1xgAq66dtSPhzu8HQahzDJVvSnukMsZonevBY8EryFDc5asctimrRNkUcf1B",
  "key24": "bECAAbo12b4jS8U8V5qTt57UXpaQkwqiauAPhE5NJp8C4j8YiosW22oDdaotkyK7TaiHead1hTPz8USymSmSnn5",
  "key25": "5KoFibz8Yxy6amRBxi8MqzRbBYV1HXeUBhHs56eKSHRp4BVz1GD3NVCai9nf6jCZb5Eq4TzCa3hDS3F8WJErrMd9",
  "key26": "3RocS6rEw7vPYpNcWm45kDLkAGAhvxxqB23odkgXSwZVJJMZgWBFbhaPZQasaHBiNNc7xm9s9iGuTwdcVuPDeQTe",
  "key27": "4pYn6NCbwQjRzhyVMYePiGkfQBkJuS58XzFMUrwr1vKriHj2igNPvVuocRVqVGUQXuX857bkejbo2d1nbqijdu5P",
  "key28": "54X8yQgBBxAYR64j3JojpciVMiuLyMo4JLJ63PQFfGtDxzHsanzYHJv361dcY6zC4cpo1fuo9ESADd1xnPTuWX1g",
  "key29": "2bhi7Y493xVaQUGFuQ3UNQb2WriJ814xR8VbHSfWj8U7dvtE2ePnPdUCvd4YUebYP6TAMAEwfu3SRL7hEPc33vp",
  "key30": "2Mkvovrm4anQiwu3ZUeGFHnvUEtQ3hHxro2HQdqLWt7CEdVdKkFGPWmFLNyRsfpXjeHtKb49ZNiAyKp3t3knSC49",
  "key31": "3xVxZTEBu9hAD37XVmiftikWmad35uckU6viCXawU4rSQRMQridyFtGUGW2SaK6F4i8RZDRMKBd36PZihfShRZXR"
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
