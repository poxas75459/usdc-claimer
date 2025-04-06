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
    "3ciqwtdUuyajo3wXbwHYiKHebjD6pJWJFTjG16E9UPru4tSA4TgQrsHhj9tPhmxtgAiijB3nrBjYh4qwThxfXwfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CM7x6iojBWjXgFhTfta39tKFnijQNsUb7eLPgawVz3pNHaFQQXq9Krr8je9gJ54s6uxNZ8qxWxaAs7vLAXmduYj",
  "key1": "2Wjqtt7gd9GrBoRp2fmytMLuLUK8ny3wjM21GQttAHY4qhKwQHKhr7dSiNVoqrdH8fQr5wgWBqWzk1e7a3uZKGWj",
  "key2": "4C9E7XZnvWwqCC8zBaAygJrNrfjBe2YwFNHJUhtzTxDrJZ1u3PGdJxtVJs8ZjBnosfzbedaSpJ8UdjPLRhMg5LMU",
  "key3": "Ji3QAES5WAPDUTfZLfMeAUDiMkLWK49ZRhrW6LLfUuby2HWYPZYG5dKcA3hmJA27Axd7ZdRrvYpwfmzkrenX93d",
  "key4": "5JBiPRFQnSKXW54vYiuH4xnHE2vTTKnr5aoeQfve9bqHLtpy2jpxMozKNhHkTfuKxhhtQNhnkf6BULWRGD2MqQ5",
  "key5": "5d97MkLQB9ETTHHtE2GQdpnpFjy5Xq32PV8cT4WBa3D5kQoopoqmSngmqyPq6Kva3uxSwkDj6NLDjRdvgs83jadS",
  "key6": "4c2C1QZbjbLF5TxB4TS3WfUWSM6ZsuGvKtYYweK6T1exsX2zAkNt9fosdndX4dN3tRn8G8ffw2B3a9unPpyb7gYN",
  "key7": "2hEwe3xFdhtR3asfwoAUhhLBkkYYabd1TfBVv9Jzj9CBMgvpAMkvtTrdcSnsyfmEy2dzqJnCezwg79RhPAPkgRWe",
  "key8": "43VUcSCEQQnibLrjo34Ti7a5oL9E3zU5J35Lqp5sfystkXpmD8V3pkH2AenzZcVQDMp7AtB3dntZiqeBsopMJ4X2",
  "key9": "DUcMb3cJ6w5q1LVhJDFVvxg9Z6G1oR9od4SQxVUVWFkuVq12Wk9DQBuwQ64naGPMz6SVG8ntvfwYkUKtoCtNMQ4",
  "key10": "4nStz32ST62qf9Ck1AUc7SA5nrLcnCTLPFuMBbJnwHhDfn3muQXBQ54EgMfFr39E54uVhnJmvu2EGx4UbGyfCgfh",
  "key11": "586wbhtMn72swgXLuNuqabcuA5CZgqPNMT8S3kWe77F7zGezzrTLqE9fTwuYi5QLHdcQuEfCZewTyiRdDHtqfXkQ",
  "key12": "5LNzfDLEyxTyWhJjp8fGeuhfn4wcEJp9XvTaZPTTLnMutHMtAfRNFjBwAjZyKdkhjGp1QaUxU51NFXbyCnaoVVNE",
  "key13": "3DN7CGffyR9KyAPS2pgnNg8BAiZtrKZTihm8srigTt33Lm3N9Dim54qhh3fQDvZjjHzauKppSNZBkgLCG6pmtPsq",
  "key14": "4DhTkuuvptUZkLTA1WPMDRfYN87rad2SMmrZ2GJLbagCMdEAHat6aZGLiYzwYryUsNEgZLzC5Deo8TEBpBqWWsg2",
  "key15": "26u79k2UuFhvYWRgYysZjhsbmokVU8VUQLGUBaDZeRsF1ZpC1NnBVWDfTSriaXrp27SVpCdYC9X36d5tUVEQUdtd",
  "key16": "2joWPW8ewEqkiELHCu1jTCJwTqV4QNmxx24rUdtXZpf9cw1mKx5DEXEJ8QFXyjHrRZbRBxpLMoCEDAroKNmtbfW4",
  "key17": "4Se1ty29f1jfcfuYei5QDHp7eaG3NTmSjkJR253nyULtA8ok6VTBKQCd9SbdSPr1pWtfvtijKGTxA5f4yaSW7Mm2",
  "key18": "23MHUQvhfPgyu5noYk3KQLnVP1XYosAmUSyYwKo1aeCfUwHYHF4YtQ9j3G443qW1ERaTLeDZxtGYBPFoX19vdRga",
  "key19": "jLddQg2ss6aKxSBNqj6hsCJzYG1N6ijDmcAhjQU1WD5E2uWDFsJ9Liz83AqCDoMxLiTTNcwMZqD4rc7Y1a3uZZ6",
  "key20": "5px2SETtZ5QRp7eKxhJ9ruMftSPPPDTDfKmo6YxZnXJsYhi88BgazND8M8AUzNEy7Nd5ww5CvRikrxvqYXa84qhE",
  "key21": "K2DWsBZohgNriTKeFUfs62KLaHtRsoDPni5r759Aarr75a5vFwAgqbW9nEZgtKETtBNVWAmKzqjHkn7Ah9M6pzb",
  "key22": "5BBD5cKhTdnE7ao8UNK4z17fYSSoFedpHvkS8JrXh1GG3mnhfxQ55d5YYBNC3TiHhhpc6dTtWDFh61ufGXXMU6Q7",
  "key23": "3jzASqSv37cmmwLG3fHBZ8HoUVEuutWVyzwXBCCVJVE58wJQahHj86ymodSsTTdRKRMMHY7nb5MBTXjDpm9fhjwi",
  "key24": "Dc6fbq55ufV7puzwMfRkxjBTXog2cyhvN5EvRuVY3mwhV9Z9QcJTEdBu7T5mGVYBucUFb7KdpQhJPy4VpjEefbQ"
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
