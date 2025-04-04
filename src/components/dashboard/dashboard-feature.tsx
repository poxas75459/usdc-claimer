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
    "2EoyLJdrTnFB4gmwwMWeSsSiHghDJFpoMut3eEKZqLWdUUq587MswZ9bhLyBYiUviAf3zH7NgRUTtssrGQmwBZgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RQWhXKjwcfpmPjDxKqdncWsC455B91Su5h3cBuBBXEe9vE9YWSkERATJhfYCpYfrPHfPcW67WSSVkHYcwmAiFa",
  "key1": "2uYktAuMey3AJe4PQ1Y8vRYS1xtKFpi4u9pA2jrCcbG8dDs5J4ZNRjCELqrgmwbFH274EkVr6EiWJofNn9pbbeHt",
  "key2": "3BeSx5G4nPFoeBnZjaGWaxwCatoYDZzEixDXSmGg7FuD2itAkjFCY99EuiFcy5NMr2zzmtdagJx3VuhRyRvz3kBV",
  "key3": "Y6ZVpJzXBCSd1yu2ri9hdqXJNyD5JG68p7KVbX1U2CRXapQsb2fHzY4awWx8Wn3gyH1d6iFcZgDptX8SZdePznh",
  "key4": "5S7uL8Hr4HiTf9RfkqYExwiNATxeixWQ9jGJB5a81n7ZndSSXJVmySLjHSrnsix8sWqiBcS3VV9Gbb4noN6PV41N",
  "key5": "62AUsQNEjTofAHhw3QFhMpiUFRSMrNmHwsc4ZvatJBFGwDdisaMNncztFMaM3cyRCMZTLKQbvYHuZPXEsKmWQFT8",
  "key6": "4m2eBHGYJr8ZE3LqfL7FyZfmhRUMUXQWsS55u9jY2JDQJUgeG5QFzErUQnR5J7pVYtjNvCtNis5FSte3RcRBgn9f",
  "key7": "4r3HAtYGiSRJYhrKuYrkLCUyF8WBa2RicaBW8dVinpx8dFdkVHn8ZXDG1Rtq5BRT7PcLy64w5LQpoUPcb2izttNA",
  "key8": "3WQGqBsoG49PAx77Y2Xb2fvSrf2vGPGPL45J9QCtFSXwMBEipqQxzst2XeHN6NnU3EicU2fSGVwFfg1aE4dLKwEM",
  "key9": "2jJmVcw3yrF5k5AsRNGQM4VNKrpk7aM3NFgDSqj5KQzDtSTyN5op6HJWfkQR4rXWviwP3tvwmpUMFcB5J3JPSXge",
  "key10": "UWtJMvWshiYMiuVxLnsStTKW4VtTToDJFyAPQShskGDMHWTmeHjnDJkuRvNn9QwRjDB4xpAbiLY7fwhvuTZwoM3",
  "key11": "5Ex57G1pbrEWYpFN2SuhwTQ4ptWNnLug899VSzkFj2TUKCjsmbqTTfVRJsoktjamT4DMB7LHGmtQ5TqjhXkBvphq",
  "key12": "3gPcJ7zdSSF2QhXkB3j2xAdV9Yhu1iXNsk7zuYK3eH85VcMa6cb85iiCRnCVWT11w3SCHhutZP3CsqryPLS2a8dE",
  "key13": "542aXQ3ZxtNb6o9p6EpLdDc3Qubwt7zfuJwnYbqV2VsvuQQf1CeLvb6erGesJNBhUt3nvF3Qaz9Y56XLRQAR5n9E",
  "key14": "zDgBsL6KhsSoqiLiLcrLHXqNoFNBvwGrejKcqhvkrzKcgNiuZ9Gf42dh1179hgZjZxHVgXWW9AQZko4qkpjjad9",
  "key15": "bNubxfEij4jsPZzmes9gBLFfufQSxtBDZoCQdwWc2SWDy4Z2RYM1UJ81dx8oXSgjv7Y8mLL95636MgxQ6JSiWGE",
  "key16": "34UPjkVbqfFMo8CYFpDC4GE1jGYztcC2eLxanYL531oudsqCM2qJjumKnQYKgNwuKuSE5EquvG3N5dCiV5vcF5ux",
  "key17": "4XjHj5oJxet5WQvEw1qJMF8b112rx429P76pzTFt2wEebyr6CQT294SDUzJNRxyCRV8KzJUaPb3trQ1soPfWa2Gw",
  "key18": "5924BszwTTVnfsrg4BVzk4iVXayt8NtK1oKZuktmVUDAeJSftUVWga5SNntyF9iTPzB7vbUAwdsCXDn5WzqraDbz",
  "key19": "55cLqZdBNmt2qkGPA4344W69RE8xmrrQTHS5xTrt46H7iPpgLeRJofXaTJga6FQ62ZY8yypVQnjFXxRPRyBSZy9Y",
  "key20": "39XNzt3MzfWiHkTRsYWN7A4xE4rSLNLiYD3h2Yz2qAixKCXFjETEfoApBbNfTcBs6d19sXFEY6FyGQRu9nf7h5EW",
  "key21": "wPhLVAU2Pg5Qw7kH36oJVCKxjMSicdZQQZypQF35eMSG8tAaf8NXUYbuCQvn5Qp9B8KM9f5GjMdDKBi1xNHcp6J",
  "key22": "4wQBEn5fCHHPjXLaPFNtuxnksFMWDf7CJg2AZjCQESh9K1saSkfFC3FfGkvvdEtbEgNHzWz1dZZnUoyiyku6UGQa",
  "key23": "3X1XHJCUmPhozGHxVEcsG7jvp3GPUbk2YgjSwJRx5aPosJLgSw2iFANX8SgjydhTJh2GwWQWPxiZtqtLJRq4k5QD",
  "key24": "5sBPHrtGfAiWw2WexZvUZRDozQZWxYwRdUxPy641LmNvKm8ZaxrdtbsndmHmJcooSeRfQhJivqUPv8wNH2oWbDBB",
  "key25": "3dkx4DQvgW9G3AQmx9NCtGB7xryEJiBRK1Y7pbfpWCqCXFUkadDbxQmXwit7QBZMS2JW9W2QXtxPnHMYxzH3UqKQ"
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
