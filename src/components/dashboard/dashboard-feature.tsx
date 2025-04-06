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
    "P9x6rvqojbRnbPK8NCrN3DsZxiZMTRoDnzpw9gcw8vGqRRtTDF661aKWmresFxNQYwfg1E3zM7Fn6MC6bo27TF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjrGnuKc9CSpRqLbH7MTjV69BFzdmAnmT9ikCUmWazKtUMjc7JUqZ8HAJFwKhrX5rJduTu6TpdWfDhVAo7fPVJX",
  "key1": "3D2amzY4cWX6G2TiJJKUKiLweGHjrtrCYitWeDrC8PgcA6JbdZJ7j1N1zycB5ETu6Erjpsa491Q8REHpTpCc3Dki",
  "key2": "3BUhfDjrKHKAxTwMoNRDgGdto9ReGBpRyUYxz5ya8b9dKzsSqLU1keBYqE7prgNPqmoXQraQSZKFBt5Cwgwngy5W",
  "key3": "dc1oM1YgCh9dQRukzapmriQMAetasR688FMmvAj9Yk8onua8TcffnUZ36FQA9TJ74r38WLWPkxL4eYGW3LaFRuW",
  "key4": "4NLKo7ycPST84KAYq4j4haLrQUTF9muJrdUGZvoY7Ag86juoCiwtxaT9dgafSZsmvy3KADn7uFMe2QTsj9UtKehT",
  "key5": "66Un3ukdx3LNjTvaSLaFvoSTrHi25dS7izMy4PKpUGfp1kVr9ek9sfS8FxFfdMpDtszMnRkKP9KroAER5zb8YBeq",
  "key6": "4XS7opAzfgkRohNzPQ7uLCzY9TTP1HgxvBAxSvh9QN2FDJd7pUrgLSpnRKoGetJzFZQvtavcqfpsNZuLiF1STMVp",
  "key7": "3XpuqzFg5RQNApjeeyhyS3sh36WNn1LHfKfRGvJ8w4FbPLkPJxtxSsaGKa97VVb5G8GuGaNGoegYTHWJfpyDjevx",
  "key8": "5w1Cs6xf8v66trd4xeeJjvqjyDHukCzDJhE2nx5aQ5824HpsY8MXRnvfkpodS7pcHsk9gqSWkihJikEVJXcUuBNU",
  "key9": "59iAfBKnJaBP672PmcXVdoyXexxHQP4pZ4rHuMaXNnjDziUtMDBPp5e492MimdjsajGBv8YyfLUvxFQVwEmUaudy",
  "key10": "tqBKMePi4A4LAxW85BNgz5yrxesjnS3rG6W1RgCh6pSoc3C7oFYJZ8s3U85jMezergKrmcXsm2C3FRXznz3iytz",
  "key11": "5GW5wiGD7nsSH8cKd3m1KPaBYRyUE83hPAa5etYmRSpbK5R8PeyjMhKNMfdMwjY6mdTfGKbmqjsgDoyS2MR4MaGq",
  "key12": "61CvbFFRB5frvUQUibz8DYfXv97rTyHSFs6Ukt8V4xKtaUBbhSvMo2VukaQ9LuZBQXK9Md3KkeENpxtYRhnGfB2U",
  "key13": "3sHkFWhXQvaftN5J41rJ4SJ5BKcehj7BM1BfZbW9SdL2rs882fTwrJdUw7u5deoewfvUdL3QCGfayjaGTazMjTyH",
  "key14": "4sM7N1f6nvERE7f2e7KztxkFTpMUiqurPyngT1bNX1V36r1UrM3PzJZA6DxDY9UyVrjcJaPCUmh5SRR68Le7PKwg",
  "key15": "3SwE43M6WstwFz3A2YRVYyzpMEpFV4H293v5i364KhLXPvTkoq1qhvkMYf8aHEzPebExqupx1VUr9dRGJ3cMUZUu",
  "key16": "4UXQHUN2mEy2i46Qm9avJoFcQiAiZUuHC6hRZtVnoDeosjWuoFDeqqjq2dd19GcyY3ya6w9rsUKU6oijA3mzukhY",
  "key17": "656Uht3ezcgUerjogMP4SRvz3ZGdVpXP7Gc75VVU58yJcEkUrYffGrGwav4kqYAUovzF79Kzt3qCU3xz1ewEuUmN",
  "key18": "58NRWu8cA3tXBrJob61Ugz1zdRHXXbkQtQS3VQ4Dx48BjszE9XHWYh77T6nwWmjFH4SLabeVvZZGV5HRXMBiK3qG",
  "key19": "317M2pczYkGFmuLXjpfnr5v7cZNkywMC56N1WQLuyR4bV3JoYd3BBbfmQvpJ3vAAz2PgioU3gQwjxMsRCBP9XZjz",
  "key20": "3Rq3SGXTKYRK1nGaipWU1LJ2b1PGfxFhvPbdDHMgQeyLSqRqwWQjat7riYiRfxindKTmsi24dUUzcvdpj8skJmhk",
  "key21": "o5HeqMo8XXmodtfBiYoYyiNhLkJkBHqc8ofMF11mvfQaJkorf76x1eXZb4J6KgNhc6MccrH81fNdV3x6CRNb2XL",
  "key22": "5RszquBbdKpggrrKr4YSBkmzDg27e5V1ZyrkLt7Bo1QR8a1UNykQcnfmLojQo3Xm8c7ofXQw3ShH52oqiZB51125",
  "key23": "2KRDVLWtZuoAFZ6Z61cYxuKnQtGL46qzWqfiu753vUPuHvMXzRTzPrnvTiQDQFQMTRUyS7544QbRRuFqM67GTnow",
  "key24": "2X4fQravHsYb515k2JiM8Y8ebVqfa48vBaYs2VZXcPpct5F3S8jYGPCbtcG9Ty22n4E9bruDnC1FYKLLEbvUVAvJ"
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
