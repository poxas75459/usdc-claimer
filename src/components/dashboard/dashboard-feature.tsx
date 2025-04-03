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
    "3piD3rXtGxSLULktyN6eo6iuNve6SkArWJr1NcVuxZZKzXnREheEbiaBBWu5usDZVGLNCkECE9dvdovV8GFFPs6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPQdPBgMfAquPdeZvEo1etWhYihdZ344cKWzy4BioVNVjh9jur2Mbf3a5zLZ9z5nng3frGva7X9saY1RWXXVDsg",
  "key1": "4PEFuvtTNno9tU887zV6R7vfmgVvsPnJiYYy3K3gyb1NDM5Tj8zQsietMBBDgTW1SHNTMko2iVaeAhn7PhQvFHNp",
  "key2": "2kNvQXmU8KobFXvHaSFdTWFrrUeUSCv53KAjHRMpBa4ZAFE9AUcmSzK8A1YAQDmSsy9aZP1EBM82DVWkkes1hMxL",
  "key3": "49jFBWU4nHD5qFMBFKpReQzYSUJdYpfbTZoZzbJq6Jvjtr58FzT7rJ1ojQGUmjQzqQSRBR1GsiRr4Nc96Z26kta7",
  "key4": "hu48RQx5LJTr4rLGpQ5PuSpNESjHr8M8ayqEQXiBSoMUiYabbk3n3NiAyA9Dr3pEZGhrrXVag2Bi8vsZPP76j5k",
  "key5": "5PB2den1u4RnsSvFwNXboica9igiUL5RzJ6WrFFVVuJ8hLcPxDjdpyo7zDDKPfsVrYe52fuzbW6WRZw6kFnEpbZc",
  "key6": "2oRMAPrttdUE9nstGRV8qT8tCvu9XJZ8LXMmaC7cwdvdJYBUzWuhB7d5bdk3Jot3nTYtYwhU9GTaoJtUz4ozA3Wx",
  "key7": "23WN2Dn3fPmyC14VWj8x8DA4obzfN4w1MGEvwSSeYRJfYXCVrAE5uhYC9SEbyvkacm9tHk8p5Y5h7SY1gBPCgnMT",
  "key8": "3KGvqy3psPYxZ1PozeEZhqUwYx5NrFmfgCSgNUGkYtk7HnwS8hLgfPd25XLcSa3RV2J2opkSPzuR3nLh6q7e77yW",
  "key9": "Ebxd1mT4B6R2Pqj8PJeyswJhvLQ5A2adKwhMmsnHHgs4py7wkiLK8sdA6aGT6medi7remaC39iqe5mvowLUj5K2",
  "key10": "4qmF9baGHLujP4nLmBAPhA7JctKjgC4bSxfFim8tVU4tiw5bxSijPgZZn1xzQQjfz1yempHqYFYfQngFVefYNeN3",
  "key11": "5STGU3amGSzoBta9pAaVbotr8v3Aqxbwhgjg82YapMPdcsGAibZLQoJCsW6X63YTVYJcmcmFcZPrbAkDmUXZXRsD",
  "key12": "3BxFQJtCCKmoW5hSuUAd2YaJJVKRcKi4G7GSRQ8uRgXTqkpfNsLzqstC1rZSzk8E9Sc2XoTK3xag457KejDKqmQr",
  "key13": "3Tz3e7rb3EdvRotnL7LsG1opZxWXyZg9dZHedMUDXmZVJgnXnC8cWJCSJjEqsziW4rRPJfjNF4a5Q6Vsrkf9Q5DT",
  "key14": "4UcZEi8XDjasXF2Bc5LUXdwnjrDfD28G4sZrvQJjYPG7gKFE4x39bqguBQBdfGVqPJn26ogx74i2mVSwyX6YSGUH",
  "key15": "5ecrZGMCJ73Xntzr4KdkDAcfheYJxgJJJPU4dzKudx9NrD9cdb2eZRBvpeX43GDs1Wai4efCP8X2zXpfD7F4gDQW",
  "key16": "5p1zYKsdQdC5oemriUbjyzm9ZbW6BN1HyFwzp8dQVCBVRCedFSFaDZHwM4VSKek3bknJvAPzx9aiZ8LYuCSNyPY3",
  "key17": "5mAKZ5eKrXVwCZXGyjudGpcUJzNVZfGeSUnhoDKQKAsp4gFFBcwiRrnDFiGt5nncZut6ULmBoZXJef9ZPBbG1xv3",
  "key18": "VXxjmzsNq52UvRZPMbEATGvKgn5ywXR6x8s7qyCLQGFMJ2WC7Nf8ondkCWc2VVBuGgoCG12Njr8FFid9Ps5mhir",
  "key19": "25ztgBP42SW7jDjFHMKJbpFramimUsY2tJDVN4q9i1wXvTcpLDnLRmSgAgievrdAosWqB2Mm6WGWQEBxhszVx7vM",
  "key20": "5cE6Eo2TpnJB7MCPXD2CoBZ4DD8Tg71TQxW3vZ5bVDV654yCmGk6zCkG1gGHBKF4wqBi4PwbeT6v8duAdiup1PXx",
  "key21": "5U5hV13SJp4DY7t2PE5hh5CKijic89dCMEWfcLL614AjVJhzdfQiJmAhCEtykYh69Ez9b6oULqnNGQVujViQVrTZ",
  "key22": "2Uo3Fh8tJiZXU4gGFAjd7uJpPwtmiZdmaPFG3YRY7QPhG58UQBqJLub75H25JZqR5CWFALh4PWLrPn6xmqr9uuAJ",
  "key23": "3J823NM1kmFLWRZVydS4xrr1e2gvg3xSTaUEgkHQ9pNQmQQ2JC85HKWifP3L52nPG1mGXWDEzJ3Z7CMHw4psFcbU",
  "key24": "5DzdXUh7tuAANGrpAFDcTFAznBycAsjNjkCFVXDvyVaeHcBzg5azkvyzDdEMFS726VxXMqg4d9mZJrL8tRGqiBWL",
  "key25": "2zqZbtpoRtiz4cYHNSor4uCPEHBysBHP2D49XTVRTs5FiC8fx3PY8BvAyP4gRQxYGr8DRtnc42tW9DzA9vkhemRa"
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
