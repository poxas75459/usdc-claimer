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
    "4WpNWgvnAQYxM3KTKYDRdQi1XUMR6Jqi8kybwjjg3qJs3gYz9sfnvywFfFUWn71wYoVXswVKTfmo6KjE2Ud8Wnj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65YRpxSRRr6SwdPfRnCR93fVX13bLTcqD8RU51g5KAhFZ6cRZvUAtV5YFpf3rDHdRJ2q3gC51tWjrotf1dboYsyg",
  "key1": "3kh8dWyrHdqVQT2uWuaePePyMnuM4Kpn5MvcorqDPh4dquZifyRMGyZi75td6wopgtofxcF2SWdCHMQNtMSvRvBd",
  "key2": "5PY8kWafbLm4wMMMzMybuw6rCR1hu6xeL4wh8nzdM7C88SY5wGFJgRkCZSqiHmXzzG1AaV2JyicdhEVqSKhL4vnK",
  "key3": "7FfrzWKUbjJV9KrqZsKcofvgDbPPAv5Urccc8hcnyuEp3VEPwfFAer9Wx672wNY1zhRj5QGdSKjLFyHqGTwx9MU",
  "key4": "3ofEhfcKKLtET2V6HFku16sa6tz5LBTbvfvYgTnSnxZoRdzTfXpDxVhUQ5DbjBJ6WS3HLDBEHLYJJZqfnJhDfWDq",
  "key5": "4XW4AtVZz4tJng6H5Pyryw1R8LoarTGDwhymWQhPtrPihoJREqUBqpDKiMg76BSm7KPVgHYo2pRUZSSjtV8ka77C",
  "key6": "2gTtSkCXTVbznbfqkzicT5YtLLRs1TZWbrS2nSxW3EEMNJfRnhLHkEKxzX9o7Sg937XbjjtaHC5bEyvC9xDeaGM3",
  "key7": "364Mqy9ZfmgmPwyrJDK93BJddLieRV8QCee7tFxYmxdKzN9AMUHqCf33UFcvNZk5qMpJbLQSdqpm72Z1Ga2NpUGM",
  "key8": "3HTbjeYjixHZooTNHaeP53R3MVxZKFc4mvTUERTzr1B2GonYdGUVtnkS7qnbhZbbmvjnu1yFdrP37Je3zTgucT3S",
  "key9": "4mhWtBGGae4erBJeqYaFgfm7d8dX3o9Dq16xzk5vf9tFFrzadZ9XsUfQaeunLjmEcDhprwbVPV7HFdYDav7ivvxo",
  "key10": "2fmZPXmtR378iKGzBozrt2xUGhjVjF8z9rMx3JrWVe4KNZmztprE9d1A1xWf3pkXUzuHbF8sbtkb18tRfWHgqHW",
  "key11": "3y3Z1ZVrtNXFg2DtRSdoGb2pHTz3tbnkZ4nXsz92DkS9zLpaZbRmMUEmnCtre1GNZgWryWhzhDwp75pKVRQ97Mik",
  "key12": "2DvcksGwKavtp7FMfrjVnFjVCf9eHfTEG1wYFAbDqChSvMbw54dkB1nAxo8LAot5aymk5KmmVD9vrWpxdFNJ9C5j",
  "key13": "5zBRwE7LjgYkbPMhh2xWQhhksJxj7WHUo4Mf84bF2jPDspSzsNNbsJChx16j62npUqXgVRiHYoaLr5rMhV133XTg",
  "key14": "5aqgM1ZiFWv1MHTo64e89BWK4TS919GH2Pk3bj8GEdciPHmKQzCySJSRGpxPK64fC1ZLn5odnQ7QLhr7bMH8tT2A",
  "key15": "5hbQUNm87DSDkne35PySBm3FBVJhPnsp4JYjom3ZJcm7QN2ZkwQ3Jp7PxMoxveSjKqd862dpCgTe7nt6364mbKNE",
  "key16": "3QjaRa4gAoFZuSt3afJ9h1mThD1pPjW1i4ZiMctDjEL9AKtV8fhndaw8CiSx4pJDtPxQvbae1WGpd5KhD48gCobr",
  "key17": "3r6NUdf92RthGpao745Wd6mdBVKXs3obCF8jn8BNFBrTETUvqHAnCaxiDz1osuDgnNYY1vg8K3YExcREVfC7y9UV",
  "key18": "64aFdcNofHGYuHJKPXGmtg7SMMmqKJmpsGbjXquYns134446dviTx5LUf6v3Zcp41LCKxuV5EAoUXC2MBpdfDrzD",
  "key19": "5sKBmuKFrZJ9nrw89RoQYbEcoHhvdnZeXd63qevWdCnQaBKtL57f9rvwh5x8gCALt1tWUhRYkq6BqgEFBuD12rXQ",
  "key20": "5s9WB7xJwPXNmZk5EJCToRCf3DpivWNJXyVkwRuN5WJXY78VWbSuGri1bFugAWrdEU4hr1DNy9ZstxGBEEVssCes",
  "key21": "5MF9Kp86tw8e32E6sFpS8W9vXgj2Dc2iad4F6d87B9HoXuD7ipn5VbPoGvDrvTxtbqnkiEaHEG8mJKjkZwybAkGk",
  "key22": "4S8k1fMYQ7q3yqp1ZxyHwKpGG9qaD4pqq81uVszaK4nY1dWjsepB6TiE8ZmAXSia6N35AVWpvfaPr3y3xjtc2ehH",
  "key23": "3KUziauJvmXpzEV1Nq3peUMz7jjboD1AKprfX6UeyJ6of8zGgnVRqeyZAEYqse1zYh4YuUPAK8htTTUyb86siPiF",
  "key24": "XYYxzopTkjGN7ywkCAAc8TnHiSb5jxRpA8G4TRcWTH6MG43o4Bv2ZZFZSxA7bdr11H56MvnoRugJHKP4SY8gkE1",
  "key25": "5Re5vmeXTbzQD64o3eSyUMzC26MKxD4Sh8jaZAxM6z9QsFNbRb8hTJgWDDtuMxBCZYqL91CR71fcT5YmDuXZRr8g",
  "key26": "5E6nLKEJhmAUTfGDYs5uHg22VzNdCizjGJrRXNhiBwmeWJhKVaHeyQLDqZ1NmfqtCGBH7VbjHBJNTRnNh84nPnw9",
  "key27": "3JqwZ9y9grnY3RZQBfMgVjJyN34Rd8MxbW4rV2Sn7VNk4UDwEpLsbS2EgVLyQT9GmCA55f7L6DDR9PvYGUuy9R1h",
  "key28": "4crVtkZoiqyYfDD6VygFjCK3AYfzkhc8qZhy4jngL7d2ynqKdmg5EapC1qrWgrRXBtmNWPymmgUgjhtBR9w1QW9i",
  "key29": "3jw563ymeDRfNDNeJGcACxUnpS6ZJZw3WSddeckKvnQq5mz3nvxAX3vUh81VVKRWd7nCQnHDAXSLikNk4wkimVnr",
  "key30": "2xTTAsecysbYfECyiW2L8mWnsPE3bspnw32mBTFKXV4F9gYmQSVoFuxcy1zUvnZmgZqnbb3s55oNEEjaSjuyPCxg"
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
