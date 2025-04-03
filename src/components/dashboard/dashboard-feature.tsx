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
    "PyehFWX8K1UtMVFFUMrT2x8pR4zY32rXxb9brCUbiLn4TepuLhqbFByuyZVD2SHVe1WkvGV7zVguSfdimHciJoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nCsEAhTNfa4zDjChAS9QaVvwrksFpKT5pjpg1t1HaJrh8EehDjSTUUhKP3tzDMd3qPwZdhqiiQYn2oePb96Mse",
  "key1": "DHJXhb5JRHRb2U7G2ohET8HRCXwG45pkKowqWvxS3aSV9C14G2RvBq8LEwSfZjmmHB4TRcgGfQTtQGDhyMdXL2t",
  "key2": "hmWJG6ErRjAfGRyyzaSv79C69AGiHo1wzfv2EmmxAhdhU4Q4xY6HxXn7vPx81BR4N4xyhoWVemh3mpkGPfvR4VT",
  "key3": "34vSKEMC5aNff5unnW2nKcy9CpdUbpTFUmdNVa3D2N8g9xhTv3m2WcYuARfKfUaBknF3VptDseC4Tp4yuDDyv4a6",
  "key4": "zBHDh5ZAQMaiiB562hhzubYDGnn6mL63adyCdt6xrTf5ygaa1fWxF6ZnYYSaMbtyM1HSWNyRZEHdX3ZWML7AWMz",
  "key5": "iQciALTQ9Wk6cWkd6n75VckoVEcsLEcMtx9oGComimSuH9ygKUXLoteTwz6jLAR18wzAv4Wy5s9kZXieUMfphwd",
  "key6": "4Ku3mmgvwqApfNvuh8xtY9jCDrLi31J8SsFqpQwMSMhFUMprjpjEWBKUra4a6BtiVhoKTsB9qi3PMUr8WBThKZyZ",
  "key7": "4UG5QG8968jp2guY5CaVh4TbanW444jjxc6wi5qYqS3jxQf1JKEawrKLRzgy5JWYWJSuiXayAJ5cQVWSbgX2ibhQ",
  "key8": "4oRvynQnjMMvECead3aBig9wHU7HLS63r3fgC3CRaKYVxXxVJsj3YdQQ5deavtDBPsRnYiY3eKNsLVrD26uc5eZj",
  "key9": "2wURSGstpgLKT2KxAsU3Ai5eraiqu3EZvJ5Uqg73tHYRtJpkWLqC6vj3pPdVgLvG8vEWj5PxWJugiU4tCDdTZrtX",
  "key10": "2GKghUi8NBGVT2GKj6ccn44Zby2qUQ4rW6G7RX6ot7TfuLRXMDznfEzNjaugPMATgbNupTHdarsx7rw5AqQFCGHs",
  "key11": "J8C4jALrgcBDkcMMBAjJwEK2W2wZ5GdaM5KAXXp9bXjL6WXWFXCnxvEfpkaeYQdssDkKi4qtZwEQ5jVxbp1DroU",
  "key12": "4Edc2nnkVNB42FhDcLQXPqteD32qYMmLK3YdQ34U5nmr8S8CHPnJCFi2cEfDQrJbs91rMMMiRCsL4QZsAXREPL6E",
  "key13": "FFnHkT2tatS7YBnfkGrPA8ptU8s2pL6AKeMnLSKEEAi5JZLcUnifa5nMmpxwFJSyZKWAykovX5G8eCsSBeWuh6J",
  "key14": "2ofLJKzChrd7kVQVmj735ErFfsotwLD8zErF974QaN6UkK9AqPd86iUqqxX9VWGRU299t9HMc4girKNBKg46F2ga",
  "key15": "5qGkHLuGJGxFfLy2vYH3wkt6zWx9gWh24AYk9KwfzJGZpcthC7AgFwvE5Q9HNoaQ67tYfujKybKdE2V8XRyuZoxy",
  "key16": "44HLsGxKkQvEuyW8w7F54JxHWm3QR9MwqQ1HKQfdPC8LHus5b7m6rHJwDMB9EjR2QoSmJwe6twNdnAw2FdbdJrmc",
  "key17": "3EZEhiqJf2Nn2M7QDTxcF8g2WTQTesX5rTkHkHUrg1E1tkhe6WDVhfo4nmvdnaawM4rLrtEBj2PKzZFLAvUSXmji",
  "key18": "2RfVuQMMeWDtmaWpb9iiSc2ewNtgWaMUJ7exWx4nr9RRaT3m91ti8ZKLfrnmsWFBUCLXEgUAYPv1XE2rhn5Bu89",
  "key19": "59EtofeffTVLstV4GjvaoxE9C91UVT9psVs1ZxksLmXrFLSMGrEDC9YEXdYRX7F1C84pYMhMGFQ4DVdooZRc9nZN",
  "key20": "29dBi71YVDtVZms4GXqzciybTC4UUGzA6jFeBqFA5mTVdDFPdRWLPQoj2Gob1UjWp4EKvm23vbQeMN5dkE9BL8qe",
  "key21": "2JGR8UH4Pr4EH3ePeWw5EGgnxHhVgD8WXSWS18Jco56gsewBRLnSv4W1tW3tyL7PxYnGKKbprB31ZKs5HmRbfE1B",
  "key22": "4QTzhJSrtBRsoLhPXpDCTA56GASyHT3kELsmcXwFnLogqm1FNfVqpqGpMWhTm9tcD72HDbMz6VJLcFcumroJcGD1",
  "key23": "8d685XRe3PE3STid62uv1CMJVN1YYJVz3G6Mqo8iBnnHCZBqX4yrAgKk6ZLX4xo2LNHegstc6HtvWTudnWdiXHT",
  "key24": "5KQyZYmh85vx65p9FU1hTimEt2zpFyrSSxg5tzkRUBD2D3NXS696ojif9AfNg2PQKLnmAQ29ZBrdVRKJrQkDMUo2",
  "key25": "2sGaNboDm9qX86sdXGwZsfvLcxi9kMm1UXSSxBjMYx4ycu9UkELNZ8LNg6wD1ExA7VhmtJ2S9MZ23f9VAubhKUtU",
  "key26": "PERFMHTjVb6SGnqfYjamnCQ8o1LHDXAsSUNXPmtcuZUZ9c5bfaBuvdwVLdRsg4pv3Yuv6uMELsgKCMy174mg7qh",
  "key27": "2orFPUs26bJRc95y2nfJMfe3an4gnBio9yb2gRT7uNkukFj44KDAdoECXyCQzMj7Hi8uyuMXNAmJ2ZUM6yYETk8s",
  "key28": "ZPhoK7cocr4KZxzahBEYoaRJ19D53vTxxkKPeUG2QA2pkx2G7Se7S12HJNouYLCFvWGJkjWviJar7kz9hGxrGPg",
  "key29": "3tuyQJzFkTwbGwQmRcRc5XfErAwx3Q6WB5nNqBSMQDwRno68mNwa2WC2nWph56WN5ijTgZkHcrexspD1RyKh7rKi",
  "key30": "2y6Lv3Nj9E5Z9Lwm7ZWGP2VFCs7cpUewU14tJJ9zfdogFMKVTTHLSbACzDLBiH3gxQnaqYSgPDaDLQVd3F8vuyyC",
  "key31": "5cZeun1zrGoosUcj2iPZhDzUNG38KdHnoQygUfUKEBJh9vnxg7ZqMVXk2P9uoh6R6Z17w6wEfzW7pNhmeq8wYX9e",
  "key32": "56am1UpCro3s55xgQ31L5DmjqgZMuF9GZdq1M17Cmzs2saX3vkuiybqbvmXM8yXrtS7U7bVw8xpRS2XrbVmWBkmD"
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
