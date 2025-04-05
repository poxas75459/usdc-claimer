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
    "5cQc9vHtQ67Qb8uCMwn2h6vJffsPPEXTyfA4iN7JxdJVZv2ifRoLbAzm4Msd8PkbSvmU7cZ811Wn2geYtXb8UsGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKvHnhb4vPjHrM9H3FXuhP2mM7a7Sb94Aqg151QesNtp7HWMrdwzhMQHXK6EHQ7biuj1WLZxpxzDHs4kUDt7Hjh",
  "key1": "5JUBEfsBajq2WZavGoCMm3qod94URv5qksCzCc82bVVk2RXrSp7mybF5vCspX6eQmZjbsGYDSW3nRtTMPksSp7D9",
  "key2": "4xsnhWGFUeYHTtGfXFFagMySoU7j9749Cnmqf1fLPH2pqDA6vEWei9yMdXuwQJ3E6eorkkVEDHDk4A7CDK8HLniF",
  "key3": "4f4bqBhTRWgE78ypkQt8L2zehRG9P4TkdBXbzVcbdT9UeNrrvw2nQfLUw3bqrbBTXqKqDMwfr3LVMjaeg2yFK51w",
  "key4": "okwKsqE81JiZoeqvfCGG6N3QhVzepwHxcbWgM84rk7QR7FjQKVdV4qcrdCz8e3DJ5o7meV6L3B5giKNgtkmPJkD",
  "key5": "4XuRi7HzB1FFmcSpSLnbLo3fPyVs8vtNjZtoX5NZPUr4tyTpFu13Fep5Jz4EwzmQRrb4RHQCtBrwVtjpKqVZT4nQ",
  "key6": "5EvSjPtwSvBuJue3eJw3kc2Qs3mxK3E1vPJ9TckX3WNDaWnA3nAFbP2eUL8KWH3wUFQ7uYUUJNA1xv48j7HPCUzS",
  "key7": "3sf8j77NXkErQAZMWb7qXsxCBXN3qzQCQdmv1X4HFaw5FjgqVVFzm9cTnVTwMnBfs6D79BPEb4txqbc69Xjpeuus",
  "key8": "4AfmxZTNcEnpajexZkD1MZJwSmgPwRbQNn67xxAvLTE7AdDacM2yT3cgqeqo3op8L6Qiua4RUzjcNZHFda7gPAqE",
  "key9": "4DobcRc7HrVNrd7qefoCJAPNSAtxpnQKachXpQ2R32ffmACqkqGAYyjvGBcsbD3sJrbWWWzSpQfbg3aujmSSLidc",
  "key10": "3mBAnqfDSBn1B2988tXPWqTSa1crESnAB1iCxZjBojWke8WhSimMYNti3BtUH2rk1wjprLSVdyvJD3hCzCCXWdcL",
  "key11": "G6TMRwVsvukv5aBXsWMtWijaqYRkoHWFtSoXKEQKefmjDzr65TZ1SRa469D5kxs6oLNd8romNAdFpj2aJyKUzsL",
  "key12": "28TMPgGvMeWcQUuUYzLqj1e8u528anqZRPbd9fMbkfDqqKDcRWALFaQiBQLMeDdN6HsTxyBH5XDHShvyQpf1MBSq",
  "key13": "5RPEqqs6yyBt29rbDydjsMaP4ZckA5BGrpp2BwzK5xy7PAqTjDeRhCAMJSgBgLCnhdZEoodw4swHhxnsDHfafDti",
  "key14": "21EkepJTsaW3aMPo6T9KpA6HZF8U9ka3x65RZVnSkrZoApVYr3uFUZmBvguQcUaMfrN4NzoaAyTJaGJKbMiozXTL",
  "key15": "4aHJk4JHVYMf2jeQ5cUxoqxRxY6CL9gviuQmAzWwhpUaQkJEmNG15Dbvukw9eMSwKTcGZRCAJgPjdq2JrtjsmSdW",
  "key16": "3GyAKQ72u33CHja18JBNvQqTTa2b8bLYiY8aLoWZLnPTJJWqCaKeofNyGd1kQ2kECPCFTBKAB4p5wyRbmw9R1uWN",
  "key17": "3sxRwHjZ8C62HvgQr8BZK29bDFpEf8PByWvJk1ZaYPChKWAxituyqJubGsVEdRftabVMuqXDivqb2AeTJFNaH2XZ",
  "key18": "N6xKeer1qtgNwJxqbeZYAc6dEem4Z5iB5MpMWouTAqCiHTA56U2YMmfpx97JpLdb3sbDKia6t98XJH2CCRzhf35",
  "key19": "5skeEE35VifGBktbpyGPjRPwBjjxFHtR3TaoKHZQyHyW5VLDZSJPq1gwLUVCK4DbagK5uWbEPG12aa3Fj7h4L6GZ",
  "key20": "3cZ3KniEJwF9vrX7D1WL2rrxEKSuuKgy77BiFH9HvosDTqo5aWVvbvdD2jNWjqCkK8xMhkVhitdwvivBNoDAeVBT",
  "key21": "5rde9p79NgX1drD6K9AcynBVVdARik9f91K3JYLacQ5kdokGgZv3nJhj2QnVJj4XdESzQibhP1DYhQrqzg15Q11s",
  "key22": "2tKvzib8eKZWTobvHf4DtZ8acYbCcK4eSh1LmxoZXTnjoBPE7r3ouWCSTghktrdjgSpcdiNxaf4VqPMvNzfZUVXE",
  "key23": "eUdsn1KdMXxwvmMLdA8WwDCnrEmPgGjWmKVPedShwSqMpvvz4yspvRmX6neKZbuKVimzeABX34Tr2RBsgqGwdWZ",
  "key24": "kBQRpLf22MNEPxe3dgBMBJWpGMmHeT9boTw8srjX7fkHVThiQnFu2nVv8QKg5GoLSdbLeZDHLc41VZdF3Siwg6V",
  "key25": "5YJfJAHBCwCQ3gXvnjyujuWQiofg2CN6rh2mknqyto7xESdB8eXJ5v8ZLexsSaA3QyyYmNPHzAMuhxopKrmTTmww"
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
