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
    "3qNCZDy42DB9TkNkPUEHRPf3HARtedXQoonwF3npyJibTapEjtJmdGDgrWfQ8odDYSELQzo2bAcFR8K5qfCEyJvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yR3uBnCFChDVUBVXhQPkEbSoUa7uMDMzNJREyXW5wndXDygHw9pnUd7sCvkQkgF1mjscCoLWAHcHtJcsyeo2CzN",
  "key1": "5fLxsw1Vda7CwGDy8Rmv2Tpf4HXxyw4ida1VqDMhhCUQdzCrdcPskX8QXzYD1bJH3EK7jJP9c15AHPasmYXgc5VJ",
  "key2": "234aAR2rWm1VaxmB8utTgaWB4TqdzE2T2Gig9Up4QFeVfT6Fb4dNwVXSqRtai835y6KcRgHye1pTBrRLJPqLH8Ad",
  "key3": "5oQ529qC2p6g8uKMuFzAFSaWwE7HKW7UBz1DuU1f5EBQHpNTxm7jRqh8nDRK1eWyyJQiJUurq8i84WHEY1eBT7is",
  "key4": "XQ1r7upodWGYSjmd4ERy6Ukr16SkG17cc9HpuHi1ruLuzmBL7wzYPfAQHMcyrQafvavgZAppoejTKxUtBnJtJP2",
  "key5": "2ngguiJnafupwwfmZ4vDrgKfuA2Vu6sfyWtQRtMXGkeAEbkCMQsBQL1LgXA8FKM2g9zVYEL7QcA8Z2XPuq7do3EL",
  "key6": "33Hj2DoSGxgVngcELQmDZFgVMNn87UbcB2ev6jQXLmhcEAajg9npTYd59FNF7nhHby5Tqy9cQhaGwVzYCN7eznmy",
  "key7": "4ni73iZSExWksM9YkPgnCaWJg2qoTxqKzq6cXnFk96CmGpq4humoY4WxwNhBF2eZvEJTAsCjZYborJ4VavC1SFcP",
  "key8": "4RRawZR9LkXYBWwGZyMNmVWuxXq89W1Lg5p8SoEbSiwhaFZbNVRbDd17M2tTdqFugRRUw3gfeF4mrkEVqSBSNwbi",
  "key9": "5YSiifTXQcTiJXYTRTt6iFxo8TfKcGuGkVS26NN1NWMU2x7WaV12MKZLjQVnHwTiJhNTAWpGxwihAQktrFe3J4NX",
  "key10": "29Ynew6aybhqEpe63SRrNFKswbjjTke8adtiE9gpu1nMCUkifFZP5LCpzXcAyULibksfqQAo9LACD2X5uJCzHXzr",
  "key11": "f3hWmJFvAjseomZdabKz3ZjW6A5hVgVS2L97c2oskRZYiRTY8iEic6x7dEPDjy4misVCAk2F5Tox1sfgcXin3oe",
  "key12": "4mgYgPRWcdtcEZf9V6fjxJ3PpJcECfSWeyTsN9rtrmyM1d5PBL3BUeNq6WVViLxEyZU7yfPJAbWUyhv1HZmXcpXe",
  "key13": "52itkGwfZe95dznbUVuCCZEwcKx4FL2q3wtPUb7VBtatb98vV6f1noNm2LJsL3iuwT1c1iUWQ737pb5FBkycc91N",
  "key14": "2AFS5efn5W6aQ4jdEjiXAbofuGButhtkwX5quveHdprjAhex6kUreJzYWFu7NN4oxofTrvCEsTsNYysJMrbX3d2y",
  "key15": "4rT9xXs7ejP5CsT4wFAydLMEPUra6tsj9PrUHsVoH5WCtEJEFJRn2vDRpGxb88jvhaFo1benVcTCmBMcAYjLc21j",
  "key16": "37TXzGTvCBup3J6ZE9U4rLurQzLwGZFV5kw1VGc2TidFjEbcgLNU21Zj26buyYWud9n1ALo6qvVcGrD12C4EYkhu",
  "key17": "5X86sKpGcMaH862QzWrGvYZ3uTrUQFKFzXKyLmbw4Nm6fTu9LtKZ1aCfLTUwcdm4kAWqHHQKoxJoTSA4PyfEVdd",
  "key18": "4W7eTLW6VGcJCEd3RXqFYfk5sWCc4EkKiBTjJigGNvZXBRj3pvdJX3A1toWDbfzbTTFzCNujUzoJqWnMpasvEkJw",
  "key19": "4vuuhqnqrzphsWWsxvBi1kqZ6CVSVsErXG7B3xo7tFYHr5yu3A2wR5VceH4QoothQhRfRQpr8eHqQf5yApBpwbjF",
  "key20": "xfcZocqyiTUajtpYr9f7pAePWWWakHZjmxm7rKiiGRLA7FhDgVskoJpMtqw3s2X3WvnSF2SpjieVEUiwgtLZSRA",
  "key21": "2serwMNZCPEW3oZ99aAg6ByBcBFAt2YLMuAGVMopdFUpwUCfBNgeMZMMjH3a53zQYREgWpjDc3yR3ZA1oCeiReS1",
  "key22": "37esTvG6KatiNgWzREYgN81rT4Thrddc41qXKAvpKgB5VPp3iKWVPYBgLfHjJRZRwL8HMrNLY68PsAQ3gD4z7zN1",
  "key23": "3pg3efKDkAobsKiYTSUA8k9NL9ueoxquT1XhTsnb2FTyRLJm8ntn4rJZ9Gz9qxmVq9kEsD41856iyyv4gfzQRrwn",
  "key24": "4RzU5otC2NdSsL5cqpgbS8FZejQsr88k9UhkKPpjpurdwy2SzXEtsk6KMYyPhDHxdifMvspoVnBfcbPB8dVSKcZV",
  "key25": "2pfcyFSAvFcf4vHXmLp4XFM2fVwJ65j7cqaeWqQ2HAVvdGEaveXVywgt7AG6txpQ5L3XA6RCax4qrygAfWvZFF5A",
  "key26": "5zhoh6hW9awL9vWVTzDQrhY9eQzfdQXxGjAZrcza2eioaTnWcuRkRbMvDWhmedu1eemnUigNEx8dUCTRFSzxssMu",
  "key27": "3tXgoJcJpEaHHaxWnX21czEp7RYi8G7Qe3iXXVNjnKfdpMoxoxZMcvJB1tVMifPATdXdUJnvygTxK33CKBHfgEjE"
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
