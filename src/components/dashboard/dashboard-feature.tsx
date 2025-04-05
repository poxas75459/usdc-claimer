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
    "3KSDnvn9D1wa7fj6ZrzzzJQ6jbtnxuwwKd3B25NEZNzXw9zQVKZdLP58NiLCDj8XbkUvzPUxLTaidUTTy4ezd3Z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aup4z7GYDPiV53qqS6ZbGZ2SVCowJzbTgYCY2NkVFfXiMn9wqzW9BUwmLQXaLDe9bLLaRrA4L3cxTBbacm7FFWz",
  "key1": "2huKrhrAm6L6uRSBqg5UiMFQXR8CyMqXb8d5S9egTz4cnZrAwPmfdM8q8SGSqRu5kjzeYK2sKmwFLMLhyHfKaGyZ",
  "key2": "4mDRg1AagkZb2ihsZcodFTgzTawoWtAcp59gq5NaPcwVfAj8JnbyNFAHWWM6CLGYi8rLnfiqwtAb1enXA4vY52qs",
  "key3": "3tsLyYDf8KdXvMJChoZ7daPvMzSWfG6Wy462PRYbHycmpdGLFfUkbAv8SxHUhnFAnqzpvSP3RRJ5BLTfeGx9Sk7E",
  "key4": "3VcUeudSUNfccRodmf5G4JP5kakqqJcmS5Bz7Y7rdVrBz1dxtjzByo4wUDoihyS6FjuAXsSoNt6HTazDPd14Bdaw",
  "key5": "MCzTe92wZ3g22ZdJpFHjrPFg9NHKqFBLk3PLCtBAro8zcn4TpjVirCUR9bEkZPfVw1aXfY5LMmh3MAeFhBhRegj",
  "key6": "2XmQuxytgLAEqwQy8XqMxL84W6EByKAaNU5sTdAGirEW7Vo79nxdcbEzHrPnXvPDorKAF2HycdDHR2qzUf1oxyE1",
  "key7": "4jLmXVxppocHBWn2MGH5Rx6R2pPyk7dem61nWcmbXej2Dheyds1VRjfzhsbkPw7BtJcpU79D6o3fvQzTLdmPaHQZ",
  "key8": "3bLs6ipa4KKtjk6vRJZ83oPtQgyK4ibKHC2HcSJ8wfZEsvy565fNRQU1L7oNo6hYJ2GFaPeTWuvTYCQLrJu5iXiL",
  "key9": "4z7nmNjoU4EyWktyK8K6BCLumNLfysfufJedfgygNh3xZwz5qnKyTqSStZdRWjTvJg9HCyduLLUHdm9TxYyi623W",
  "key10": "34iaV9gPUAsVxwGT3hKEqkFHsA7E5ZBdZno6szVfquTEduWAFckwNgMTKhbatL5L8Nc2gsm9KPV8qckhQBkwR7Ef",
  "key11": "zEmHcKBBi2TajPbTvYGaNywRVp7FuWFPA253feX4ikMzuEDYw9D2y9bxD9F2h4HNNmsnELA7finJBUf64ueFgdw",
  "key12": "22AxCkGZYa4jjtyEZd8opSHv6LRxexrJmEQU1SrEZCP7wBFFhcqbZCUmHjLs8UYLP4Lz2APRqV7JzWEnhab3P7NR",
  "key13": "2FWntZeDuSYNPZsEfYE5DKvFHXSvuxpckiSFXYFiBicvYLTzk3y67rNLr9rTTm3KvZnoWUhAe7BpEpu78pTREq7K",
  "key14": "4Dhieu97BoDaGhH4sqeCcSShgFjL6kYJDfrC2jrerBpBFzMD3uHmmycRBdNXSQwH21uTuRxD4QVEQx598oM9ePGk",
  "key15": "4uTbArzt3zTLJjRdZncHYrmoDYCS2UQ1dTtk5ZTQ2QanKmrYUDM34hj6ngC6pHmgASAxqN8yqh4L6LB8zattzJKi",
  "key16": "5KVMpYyeGjMvB5YFnYqekDKkkr65kRBodJZAsXAHtt4hySUDYYFTJc6VzYuhA5UP23bhRr9RouEDmnZXFWpGZqiq",
  "key17": "3QRasFvR24wtH9GRVzS6pECAhPjw1Np8d1iTYScBVg7euQzxDSaVUamoxJTUE2cNpSzRXz5oi25WdXAWEnRETEMw",
  "key18": "26yLc2KvwMVxDHsVy8qGwf6rUSeepKJQyjCf4E6jgsEyv9i4R6WghHMFemeGYTy11CvugTEajR2EAnkBXenFiNkf",
  "key19": "389LwBf2oMRtBcU69Q5CN2CfDpPLmjEcGD9rUSWnRUkJvh5P9iCUiwFXhYySPCYQZgnACQEGwxZVqs66UHbJbiUC",
  "key20": "2fBVFT8yaHddRq3jpL5tKHBYGiL6dHbofmR7hSMisLXYmU2dZXxVVSLGyXiYuQPQtkQu8hWPf5BkvD2SmoQc3EHA",
  "key21": "STVDsNgZjWJE6EZhCyyvnr8mSejTvYEC9ecdCCfVJj48V2qwt72dzA9LTDSwFT4YofhKeAfTWUFTRJBWZsTD29m",
  "key22": "3ZSKFSnc3PNSMf3imwkDsaH5Bd87j2EnJ9Fbb5APGDWiu83NzXqfHUQ3H257MTnM7xvxoDzKxMtLhSwMgX9AD77g",
  "key23": "3SR9kB7CZdP8c46Dn6rk78SxKBjvcwUWXDbQ4XUN7RcPutCoQ4xGhac2e8KKy5NPr8Qh8zGDSLbXEB9xSy65WcNK",
  "key24": "27DuKc1q9aj3xPn8BUZxECorj3EcgFeSoqXjToY7a4uro9XRnqPWUSt7bgfXi3sfdGxBJb4JLaujL9J4ViwwPVLP",
  "key25": "5ZJb3jfQtDc2s69ibF7E7iD6xf8mT3Lj7BZW7HFj5ft7bV2h58PzZrFFjQUwK4EV2de8VJTDT38ooFxaVzBobPmH",
  "key26": "4H3AXWQq38ZH7NyjZ2YfjzEcorCG9Um6cdsrZnfyG4QDG9iH74hh437VdxxnHzPpt675FdmMWJwjqVevAatjcyPr",
  "key27": "45ZZdPawbwf9uXzdy2VNb6NJWUo6gEQhufU6xxYsaN2pfWfjChMrsryb13o5mEfNEuADSVs85BfSBLdWSWo9sq6z",
  "key28": "2YB4wL5QKdcDghko9GaijiqfQZ8dyqgsD1ZEeC71C4i547vVa1QD5tfvx69FGspgBTExkSTf2cZJ2Q6bRvmdUfmK"
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
