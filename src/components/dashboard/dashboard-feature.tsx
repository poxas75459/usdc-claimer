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
    "5dsgJc7xcDkK6AZTjnfFVmG5jGoT7yrcpBFY9VXK8MtTiY698nLUVn92cgFkArDaXCLiNoxMzPH5RF5GvzEXHHr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdTH2jkF2KSYSRtuNt6U4CfnR7e3nwuYNpePysrs4U9eUFJ4mgF8Pf2uJhD6i994reagG3jxhC7mVevA1SEakrK",
  "key1": "xkKjbwqvpFYJYspWxxWLVLAbFmCnQZtZ2GbRZZVGYQSB2Wyt1oe6AU9V6nnZWKTqYXSZqwAMso3ENT4pHWcs8j6",
  "key2": "5CnP1nwHAP9XVWgFFW6bq7Z1nj31AV3GFytEmAeNmfae1C74HVjtDh6JWgFz35d7TSdvRkRibhSWNvsgVE9ZeYem",
  "key3": "4fk7daJzBVGkDCCRyqmbRxqHua1qiU2LSZN82WmWpkx8AK4zeMKRyYT2UydgroRFwBoRYy8SA8vKBBen5o5DYpER",
  "key4": "xDxr4w5EuuuxMQiKM6ADgG45xKtC5b7ra6fj9K8Hprd47udu7wvoiSDbkrXX6yukGvV6pfGxUpTWKk9Z57YzbnB",
  "key5": "sDbqaeAuC5cTzo2FTTKTi2fcWoWpavC2HF8NEK4Mcpq1Z9f22M8t2G2JG57XRzxKYvyt3vRBHzRDyYJScEYtVJs",
  "key6": "5VMJJQnj4HrwSMZ3p3m2JNUpbvAaDF1S3cwiuGXjNXtRWyXzHUcpKGTmmR4o9RCep8Eahexoj914BK4VuyRkSYU9",
  "key7": "5pBtG6nBgRRjB2gT2xGMdZ8ujdRuN1LBA6MV9VtHtjYFzgyMHSijktAXmdt3GLUBxdeCezKXtMRKBLNZ9oQPR6eE",
  "key8": "4pieE9PgyZYyQo7GHF7UaYMpL6nB1N5C1kBDAeNkke7WTyNW3to3axempjznTW1UtvNT9JceaMzjihcMXAcuLyyz",
  "key9": "5KeKvZkBDB3THGj48hfLArkChyjzKFJdAa4UDNbVgMEr8uNBmpoEknAPkCYftDEqmxGs5nuicrgkBk3qtT8bQdtz",
  "key10": "59VFVSG9MizbiMiXG78sddy8hqWKMQ1YLmtuPSM2x2sB1ocEzQd9GbxCjGrf8ek4TTGobkKV79ZpHPmUSehLEe8S",
  "key11": "5SB6SdX3FBRhbv9D7LiWpwNCDWKDR5W3RTypW8Vk2Ajju2wtWydGu12N5dUQGk7qfBVSgm586phaf3DYv6v19GnH",
  "key12": "5qXyy99Kqfv2CqsqjU5TE6z8fWQo1jurGr6uEqWWbMB5FbYnEamAccC9EyzDyoz6yMzmKmJ9Nfh6QXbzsZaiNUX1",
  "key13": "46f4bczqVdEsAzo6ZEwUsX1v4aeWhStGZqqS2BvJRf5Zw1CwXDC5kMmUkVcR1vqRPwyMF94H7pDKBJ6tcnw9z6SE",
  "key14": "3PWBq93WW3b6j5Z5gAfR2TwdhTLbsx7P1Q3DvWzVbKpnre2vV52uaFecVzSfwF3PjxPw1j1oZpRXT3cDwP17wLHj",
  "key15": "4RkPArfsELXQbmFq4ywuQFbnZuCEvu8rQMbzRSEZShGba5mLmCByY8epUG5dy66GpB8FnS1eZgMdFphLFNYV4Mgs",
  "key16": "5vZTLAANTroi9un8DLdJzv3AkKVg347FqR8BSRask3iEipPGbdiNDAruRB6usKqMQxts6KihJdzLMKLYPd4poDCV",
  "key17": "3H6yEVNeKzb5eM7ENn1j5oA867CfDbn6QuFdJtEwi6oNp9pcabqEPT7kRYH1NWSKhgaexY2jjLxJJYkoC2QBBT6a",
  "key18": "sT2edyEkGpC9HSMeb5vaMTWLWLLHGkpaF3W2KmLrrG1VULHdjjPiXy3CNc2KZTFcmzSzioU79qkAoMgC4JPBCx4",
  "key19": "gPPnkxzsP5Bf5W3qDGaLLyqRmhoBAYG7fdUvHEteUGE14RLcgVnFrKD8wTP4zPLGuVj7Qavm3JgtJrQaVCAo6ib",
  "key20": "3LNsYzowBWMr3zYrQZfHZyRk8Dj7aoJn4JDjUVhxpSYC93cSujpskyxwYFuZKKSNkoCUKjDg7tNzC1nmHBfQdN1X",
  "key21": "2tvdfaCFccJ6gspNfdZxVeqEMq3q3DMGmqu4dbtTkUuU58EPmmse7eS4tVzyr2qyfnK5aKnmUeq8JzkLXQEeTM8Y",
  "key22": "44fH6SdFtgLoSECXSSMUZ6dBspHZPPp5P55fKvW5S3SMkndBdauTp6mVffM2aFpCWDbi9i7XWWxZoJmuHQCMaqhv",
  "key23": "5m7L2ndMsnKmtrv9BHFXK9RHJwmpiNYECCStRVCJpQZPeGaa2T7BEBrwYrPHQNjwudnKNoGrg5vb83k7SimQb6XT",
  "key24": "NxNk3wtDQhiVUnsD6qiASePuKnTJDskifgi9Mtqmo1J7qjstHEkVRhJKbsJ9PvXPyWRgEez4oVCKqqkeN5ZG6qo",
  "key25": "3wMPkeCbiJNE5dpUjb5k3qMzwgQ7JhrWkQi5hvM6cKAwRpW4StfwVkPgVsjHqST5rMQsiUC521KZoD3s2yurw4ch",
  "key26": "3TvXSvembqLtoT7xQgtmP5NpHBroCNQMBhrQ2vWZg6Q526SQCZfAo9Hk7ygBWJef67ZbSq6PaQj5PbsLNgc1b1qi",
  "key27": "isLGJ8rcBnGe5iHwAk8XFDrJbscQH2WMbAjb4zzqDD8fsV3UbgoA5FjtNADoZj7F1NAd5YuufkTpDXF96knFrZd",
  "key28": "2R1vJhojGb2TbeVyF1cWhos29ru49DydvFbLdZ4WQPKvzvqJ8vFNZash3REMN1zv4ntd6cVHXmQGBDYzRg29qo4o",
  "key29": "yLMzNPixWdXUiKtkxtaguZNPmHYUxdfk1jqgv8Gt54qNjb7TeskGEcpRV9atujyFxM2SBDWjPmxG6LgCKzyxB8c",
  "key30": "2mdJ32N3ATB5QPQYf5nnsWmBfCCfdayAeiWnpwnxsdwnCNrAKWcRmBKdWcppaagU5nRucBKMjmcKHjjeVpT7dat",
  "key31": "yTNzKkSWfz13hCvdfd996Y2MNA5PvhnRhuapX3DgC7ndSpkrsMTVycdovKkR43YyBseRk2WsbkxoBxqALED4NDB",
  "key32": "254vy3PVwKPpfUXyi7s57qitFQHxHNdSKgf4CsC6nGkcfvcLmSBtk53hm3RPPQQq6TD6EXaPpnNqiQVBv3e2efgJ",
  "key33": "5Ujh5yade2NuJrd96Fuz6ZTEahgc8iuW7JmGPVM1yVCcEA6fJQ9yrJvF7ARMZnFsc9mdvCLz4BxqMhjPrFndcjtB",
  "key34": "3baSWW16kKogpzrTr3a1Q94uWD9g3rUyyvioxFnGtokw6eWyuVPL8j81DU5bezLJpuTZUzHYaWYrJ1bzZcmnvhus",
  "key35": "276v1d1ZqUbQpXd5p7C5t7sf8SNZGwqppVFPXbwhSJA2tFo24uwoQBbZ7cEeMVLQZTao4C5cQsiNdikKow4A6qff",
  "key36": "5gg26kbJbvPp5N2ijF1GgBtoDHEbuRGtakbhP2fuUvMRWdNrYxTQuzhMSaNqyrJupSHiNpNC95U7JGYkA3NJW27p",
  "key37": "5b39h9xYnViaZD4YD5ATwo8XJNzd4dWFcrNtS6CKMB8qES6v69hmHrALU8ApT4Qg5bmT1jFyoQy66NTcrJAycYcW",
  "key38": "4BKqfbqbwKCyDBhWwdKbcmTozYmQMicpbKcFqpT8j4dtrCibGkTijTYrfc6PcfpfLhmGkXvD8rwtTBtmoLXsmEss"
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
