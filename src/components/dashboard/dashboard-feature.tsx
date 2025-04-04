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
    "gJmt3v4jtY7KyRnE4bJBbJdFkrpzxrc8SQJU8Kab1p2GJwToJqbnVVHTX4fp27376tLG8bhEaaBkqXCV36Tz6kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqzCuBMTTZp37QLK6ymLmVqneADsuPTiPaNyjkAzyhzAR9XvqtszPmccY9DXbM6gSkfs5vhL8AtzhRRt1JiT8dd",
  "key1": "5HiJG6hJ3jbZ63zatzErxRCmyGwe8fUmSKydgdxbDNTtyyhsVx5CpDkg3aF2jjdHHXVkxdhiALbiAqmzKwbd6nU7",
  "key2": "oh6F7ZcnGsxKH6RFrqhog7RNu7XzgRFE8bTGzpVzhQBEj9anVvY3qQo2NTCgTVpYjXhavL89RzH1ZmZYhAmmrrE",
  "key3": "4CXt7BawmaQXHF4e3HdcNpUEaSp2GLVrKbESnJmqwx7GikNNimc6gEF5SicsM4m8JygCgErmWLUSdiE9sZdKNboC",
  "key4": "4xKZmmkg3U5F4BwN24a5YbusfbE6i3yttZyNN387VPZXMDwUe3CM4C6piNb9bVFVqSmTs6Gez1xoohS6jB2pXfAH",
  "key5": "3fiVLNdkAfKvVnMUd21dHAzJhvQfM94XYjh3jxhcenJdSRL5AMBa46gsBJQwCrdXHCu2Ej9hMjExPYko9ZwqJJya",
  "key6": "52uEpiXot1c41bcuV4oYejfitXzTZHKNL1ZdpjCxRjSmWZD9oNGFoc1aCViDrrHtParjMPFFvKvgXrybXf2grbLS",
  "key7": "5EDAW1v3cfS4KGAH22wVkxVPvyeYH3aasj3CbsDXYpnLkwFiHMKvFpymEzkx8j6x7Vd36DdFjh66eLhKUdUnspY9",
  "key8": "2TC4rfys7idrCgd7hvMEYNJddu6K5NcFUQBEwcdJ3bKJ2PxuJWKtaw3BaVQBpt8az8fPiwaLdPcXbgH8uK7RLMvi",
  "key9": "2xFv86pQkmLRGYKKjXKHM4BMe1MxTrQcd9rLp2WYsaxJkdwuW8qDYsoReNjwdEyi5z7Df87ugYTKa2E7fsMxJ8s",
  "key10": "DQFWRWUd5wetTBPmwM1rH3F9Z7LjRFwuEEtYFH2PV8dTPJkFH6tnHPBWFjgoSbKnYptSeZawVmkJK7xmfPH26Z5",
  "key11": "4cs2pWm5McU68CjuDHAY8AaFgmRqrXqbFQtDoRqTsqkVxq3ZcAdSnqz5S7x7VAVPhQD5MCTURx8WiWzsH6D1Ppe2",
  "key12": "31tgwADuJNVNXXyZhnUJv19uwwU7B44HefA8JZ1vUwkE22R6G26Wmcd1LawbHXB63UzkpnodJ8Vvv786A4sfnh41",
  "key13": "45yFzvvs5wVLbEXKQjJXMWYhLppX3kwXSMKJnsJ3JQMiZE3tAX4Sy7urGdEoqYf9ViBB78wRQRMUqSXWSqu84ozR",
  "key14": "5RM4U6cc4z53ZhvjHcb1xLpD6GFduThsY59YKsHwjXtoqNAs1CDgYXVm1To1P9k6KmuKBFXDJE1D2LkFFFWzc9pU",
  "key15": "46WFx1E68RgnYNJ6UircWNd7awwuvZ6Cwcq1z477SqrSZ6f7Xzo4L3ecVRurgtyEVmSedgfFou9T4UE2Sasj3zid",
  "key16": "2WVR3CBdV782MYwBnYCvdnHtrUdeC7ug4Hhqw466DdBkvTHburvxae5X3aWNfHKBcexWijQeCfVWMyqiqqWjHgvL",
  "key17": "2Lx6z5aP2frrUZ6bKv32kZ8ZNVBV5YB78GLSC3Ud1U3hvcCKrZvr7ookEF9TbscSocDb95jK62vPHimwSj98QFM5",
  "key18": "vmPnrpdF9N9dPiU2Uz4M6XACuXntEw1E7aet97XUGudncwbYf1XgVbwuSqR14b3M53wbLfhstHHKA3QP5nJgHYj",
  "key19": "3SfDbHchedFjqX2WeWy8gJeqnB6TNhBMm9KCU25rRChdTwAB4T7ks9XexUcDDxSFd7jGdt2NQ6477siDdhBHNiXR",
  "key20": "4PVtoGzmkUVE22ewFCpDngWrA4ENSTWEWLqUEqmHmroxiekzt8t6Tz3Az4q3ByK72k4NSmHXVdoFnfVcsBixypG6",
  "key21": "TAhbD54m71TkLbesRuLDHaejHUMZXrJSiK2Z8PtMawCE2gqoX7aTsAo6sX11kLYVfE17MeP6v3zSX1rCeJfNu4h",
  "key22": "8BiKXaJHrumH7SGTdFaLzu8h2xLusG4ZQWB63HEHkWgRWFN9yspfVFYMbbkCNzia5UDvjRNwx9qwosJtzHu5W8U",
  "key23": "4DGByLjEZk1Y1BoU3EaC8zrjoHhS9iTEZKuZ1agUCEw9PyEYbBExBTuK8jQwaV6X34KGyggZGZF6ejtVewXcBVy2",
  "key24": "5os1B5DK8zLFqCibmBWA6xikdfPChZmwBUJcusBti2muGhyLMDmWBormFhot7qYvXUSBu1XhBkQ5XpirAsfJ73gW",
  "key25": "2JmzKWvYMbsa3VyFMeeJ5J5ftDvKH7D1zrLHeXaticGZqwznQEXghW75BjMjtxNRJgnukxa83QPqn7c8pbcQf3p7",
  "key26": "4byUsSMoj5AjmJrJhRWQSsXdVmHhpQSRsNbwHJNJTrMfMuzuW673JnzBGMGYsJTSH29FndYAByca5yn2Wg6aQyCp",
  "key27": "2HMizBToyE1oBiEGhwD2C2cT5pa5SQWNiwAP6MJ4gztK91nUK6m3NRBUbYjGHtwTPd3KSG9aChi1oqqYmjdh9NKW",
  "key28": "AKzudPUbgRDhuSaMnra6fGSxdA8FZMkWUuLbbWbkTiRKQViE5paipmV9RfKbvTpJv14XfsqnnbzSBk1FvpnnDYB",
  "key29": "5RztnfvxA77BpsWPcracnGMnbCNRy7HSmCucmT7RmZHxbd9uFGL78XWJ3ozznAZmbQBXr6dwamwFZX1Um2sGCS7F",
  "key30": "4yt2uCh3ytQP66fJhAMii8icqAFY2mPMfG5VrpLFatRanBWidmJqLCZ2XBUw7Nej9QskQtGZb7N5EWffi5xeHvJR",
  "key31": "5hQncG2bTiguCY9ThdQn12bGVYPJcFs3d3jYapgsYfvddE8nDnYfwPUQEfGMwYUxfMbxmp6vi2qJyiNVgFhJdj4P",
  "key32": "4xNCS43bk7edhqeZkXhANovryMGvrVt2fhbj2BMqxRKC4tdVJKm2KcA4n1jD2UwGaBi7G3paeek221ePHmgpVwqs",
  "key33": "2ANuW7axSeH937zfgBhsMdMVxzH5pYKryz5tcKJVnbxLj7jBdspBmFbARNRZFaGxioGceGCYW8rFjuNSnMJuuXD8",
  "key34": "JP8GvvpWd4WyY1SDuBzTKJ2bjVrNpdQzm2iwTeTrBDfi6X3azBg7cKTeRG4HtVYG51od2P5aMe3PLhCZ9UYHjSA"
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
