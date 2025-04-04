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
    "hAomc3Q5q2NC87mp4ohWw1xr8uGZY14bGXtyr6eQNUDVS4x3B7rp1SHWagAEFsgG3VwSMTB65ok1QAn3Y7yEsVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATYJB5xRwF3DxrZ3Bdsg8NAWapR9eVAVLFKhsxrQHkURHjvYMTVTUMZFpaNgwjHrRmYNHLPUDhcYNzCdqBvRCDK",
  "key1": "2baSiiMrJ5umk36kXjwFHEtRpZbetbXGmBM7zmGqdQsf9NVmbY1ztReFrsx8dgZzY7oTfJgAsNSjGi9LyTWKRAqS",
  "key2": "4uPRCBiNwduqhQ4SVhnsQ1zGScddrLb9pW1zt1HimmKY2n9WUcM7qy662mCeLa6uzjQC2u6JohpqtBd2Av7Y6W62",
  "key3": "2SECSNPiYJcryTHWPUYJDMPjLqctZhj1V6qYeFAm9L73Mn3XkYBoyUGk59Thodq4SBobBNfDLHRQV2xMQujtfNDv",
  "key4": "3AKkhvTwa985tsuX29wybUnfWsQfB6rtcU3YjvG77LW6KETa1H7tPGfdewm4ekN9m9smbSnUDjSScP3uSCHxSvj",
  "key5": "5RBMPDJ6GXR6dQL4819Ts9T8sGXpBQ67G81v5gzesQ4DDiJ5Yev5Kew7VphNDtww9wTzbSNZbNjQAjEpmtdvkfb8",
  "key6": "Tf3mtrMc1zVrM4KSS2L1XRHyjwNSCpNKTAj4NVfgbUYGJ4n4yjULYVm3C7ZjkbssLCyE4EyhTYVfGTTrtQ5qmMt",
  "key7": "46AMS6FRwYoJdSQM1p4qwnk59mfHjnqHxjzqEGnZBkd4TUQetAxNFepCQqE89eUeyoHDxgxBQKVtcEWpsM2xYKXD",
  "key8": "39hzFH8b5r9vezBXNR848YV4UY7YHHy8nwX7gmyoJw46RGAeHHmTejfnBUiqictYfjy8GeGkqeoQgcjWtisteHD6",
  "key9": "TYq8RH3hGuZuAdURP9asNd7qiXXWU7w4VLg4u4Wjc2JS2XNsiERL3Sk7F6kJzeFuBpKktrrE46HK8q7kBUqpcGE",
  "key10": "2R6cmvKxWb6U1Hh4oFQxJdFCgTMug63wNWRKaTQSpXKPMqc3Bd4APKymcGgofHkFfa1xehPYbHK31mGRsBt6p7e4",
  "key11": "4H8E8XMrtUzwVrpyedJBeXHRbw66Gby6eHTdk4MS9f666Ffpww7mbvUdKHdzNorHn8b1mpyYADu1uAQCP3QVoRGr",
  "key12": "KAhgzGZSTBJXRc5yV9HwXcyzBWjHLws8aPGLqgT3RWpbhdDC4VqyXGYm5io2EWPipZUqumt59BgwCVLrZind81u",
  "key13": "5qvPm33bVuNKqxnR8nkMdTUvyXGc7ZHHjRHFuTUK7L1af2Vouk71zrFuyANPcwRj76qzoyPeLbW6kBRMDteM6tHv",
  "key14": "5LMax39cYwwgz7a7yBLeR319tynt8wJxSZXcXsFkN29zXh4BiNE8SLGDroPnNzsc35Wdhf7csWtzdZVrsDj6fC9A",
  "key15": "4jUwfcy5bZBynM4qSH4ANUujKWuAVBHEnzjuuRmf1QN6NLAwHkqwKCwT2wxDmAHDoqva82V45bUNvq5WZoeQpjFN",
  "key16": "5ZY3KGkt2rFaSe9AVobjfpvNcu3nHqn3DKymvSw63cQNkWQXjFZAn9R7tY14kJ3SoACtsNFb8Hzfirh6Hm4gvnGa",
  "key17": "67YLqe3pH688o3rEYkR3bZG6XRvyHCUpGDpKkUKKPjsYoqHmHP2NYo4xaPZrcMvdqULvCu4PZ2vVMxEhVpgrsADz",
  "key18": "zYBZKRxQjaxeQxxcroCBy7XS7g4UK9cfvjGjqfQJKMpANikQYt7JyfzkcGjnpCMWaV9j4C4W1qJHk2VrgJ8aY52",
  "key19": "4Btz3YefoTxoQeXrxM9sgiY8tfSkTenKBA2pu8EQSyLbyavourviejVDnEPbwFPSwoZxWxj4At1gj1xh5DE3p5Ff",
  "key20": "2fkfeH1da9hLYq2VSgpn5UDngYo1WnN3JpycEnGBhMVpcT32xyupyAH7GikqiGMDTvhHHdoT84YiJthnPM5MWFQs",
  "key21": "4WPVzE7ypsqRBnDV3Uhe2EZasNoK1KFYwVtieR9prBjbe3f2RnSJZszabPnxKdnf4q7edrxzu3kFgkCPGWFxQaxU",
  "key22": "3PsQetQX1cbEEEivaPhk1r1ZQLjnAfie8zDMDcKEVZ6qju8KqfwWDf74XZyZi2CuCz2VhsDUHrUPjD5kxSH28uDz",
  "key23": "5TyZn4TkMXaMzC4gS9naNoJQs5JLkMBcKyZTLFgKkKCicCgeZhwCB3zZXsTdGCpd33k6KnBg8iYVreGCoFekTa8G",
  "key24": "m3gFyRx6i6dXvZzHGV74mTeaiFvccRNqWqVcd9M2pMhNRzP7ccJnfttfBF3VkHSPKjos9HvA6tTRupc4nXSSGvd",
  "key25": "3NQXhetEEuPcjedehoEsyYgemYR3WTZPUXyXSF7Vm6Mkiytfd9XJpGBzRYwP3hswsJ3ABxchuTVYGPRXDPs5xf5H",
  "key26": "2L4eBzYgfVzNUDd3xJVgirFAYEMxWDnydsDDZ3X5s7fiaoDY1UEciWFVYz2GQ3UkSyTumN1cs4E5kzQ2puowQnjh",
  "key27": "4n4T366v6mWVt8Eb6NtNrt5niBsNq8VKDBLcC4BPkcYbk8bTNahsgxzqkauSjCkN3UwF7GMbTvvdNJMUfkiSq8Ri",
  "key28": "7cLT3danQk7oLaaaV669aDnABfGZdqiePNaDC28UDtTyK8T3eYrUAZp9riLf3yi5VSxRV6sq4DLQ9vGn4noDpWj",
  "key29": "64iwLEe1WQ4THDWhdaU5vWbt2tp7rddpxqoq5Da2aWd5X9PdSAoraBAv1q7Djgpz65KNfXxx5KNkw6tFLt2YEXkS",
  "key30": "3eb9K2JRbKy9dZR23eWu4oH5VNmGXjJmzQpwB4wQi545qC67XdXjyMKRgD4t9NGvnp6iuMYJZBZrswVwd5poPoh4",
  "key31": "88tWYPgfV3LQVtj791b7EW1Yo67msQjgPgaQLUeQZZ4cfSHQttT5Wr7DMpM5EBj27GPbGWSEwyfpuD22cY3VVap",
  "key32": "5kdZ5wqovXyeF3rsFYmtUYnhsY4BVvsL3PysCxH8aSSiSjiLYSc4wqD4ew2jfWxsCHjwitpUdGaz6mymZLc2wqBP",
  "key33": "4xHi4B9d8ExhzGEyeMG3ajvQNLsVn9Yg5HmDzsc83zjpERGUBGzjGWQFmeE2WsM2cwqENCgqFwijAP32bpmv9wQp",
  "key34": "4vDZSxHbuYJBUdJ5nwzyCU8e5RAoEXanS51uhfHX4knWLsfoYFa1AwsVQSTDtZc5Y1av45H3kARrTUX69VQHUhfT",
  "key35": "2Xy9ZmFESPuDNZsRunm5QgjEZ3ZbDZwYRx5HaHcFmgGZj56kTdLrDhQUMzX3WztD7TZAU7UQPCveA5hn2p6PNiJX",
  "key36": "39ayx4vfoqJuY5J4hHaCapM1AbnjzYi4tEuf1XN6aKPm741tLzX3fUGmjbLipCQodYsFfH89CFmqZmTrmhHevgeX",
  "key37": "3ER67xDg4xwLpzayQU9YacVQ5gR2EWCtWB3t76z5g7kLcbyHbvk8bz39JcqZ8r82LyvjiqAT2CwFdkGdhC6KZ9Px",
  "key38": "3uBnzbKPE3azvNi6RzLBxUEWm227X6d9WJsvY1oRDMzowC4n5AqVPgAMWFgVcCysobQejGJvwbSspYGqaFR7XViZ",
  "key39": "aBYa5pJR9gdEgJRXR3U9c65gcgVx8HnkeXoz5JFHVp2mUFbYkP2AtrPQxVtpu7bNsy5sqTx97Zr1dPb1BdxsXJE"
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
