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
    "2BStkt8PKBaoxGBFQSUmx4LeBRNvWJ9WSursTDB21Go6qGrCiH98E25u3Pjy6m6aKUUjjnpGYguq5wi92eq5pT8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rYfCEeWxGFjh1RJoLh7nzpNhdUUmwwJeCveHf7KW6gSDcm3YxAsafFbySVCpWvt3CcJsegVbrRwuGQcXm16MEiK",
  "key1": "4A91gTMPCvwKi79TTH4hu1VJuzWV68CsqYiNfLmQiRjNM2ge8bwtvGkXv5jkHnCDSwBuXqUkRXtY6ez2yxFBi8nH",
  "key2": "57KzZRjqaCXo2pddMMn6qzAiuUsrP4u387gXEu6qnSWyRXQWsFqP8zbYMJG7JToFs7WBZUkW5TsWHn1C4vTas4aK",
  "key3": "2Se8E1fdUhktfx6N8kzw4vvz8WewVajBg7BEjCyBsGx7ZfiyHT8mFo79NeAB7Rt8soQm45pUTxbTjqHmgDeENZZC",
  "key4": "4KSgekpy3M1cS9a6ko5nVVKQ8gDHtz3TpUCAUQ6ZkGEpcRywq17xfdS8QBj9U8aTjuLxBRRujcitmYKsPmGZbf9T",
  "key5": "32bmw86c7bVWEK2fB8cpZLJSHWmcZb5rUnet5ZUUSoNU6gCHL4xKnYuQ7Tj1GZ4nd2LCcwwdzsQ1BscwkHUXHC4H",
  "key6": "4NjfUAKnbN6wrXkXD6PywYXNDU6yu5BNhZjs8BRGkgN5vUNyotzz8qLDF8zWEeawKvPp3J8cZcydydFdBDLddC9b",
  "key7": "3RQyYf5LAUVkvGhgDL8ZiydFcYswcRAbg7FBWt2vsrYJdrfGHomdctKzT46HgihUVQQ9dXs8xpjYKeuAqkvYddhf",
  "key8": "28JJB2vfSGtRtwyvxmLbbreEmpmoKRUSk6yg92ownwxECE917osC2Z6rD1WqeDED83sJemUtGt2XWUSzdYzVRSwd",
  "key9": "58tPPCw81VRmqFH5ApAXa2mHLr81fYzGboNzHiYqvWZj3tqq5GVje7Som5tKXVCsVgmN5eAfiS8HPgg5EjsRWZ5L",
  "key10": "2MGJLxzqcXkYrfcfWCQEor8cL98SSR5Kdfgs9x2vHF2UCGUtmRMcWEYomhimfKadZNedvwZjwJoqGedEFz1bzFn1",
  "key11": "66yCZVjjh9mwj4zcGE2w5hax71ycwDyw9Ftw5ULUGfCGiFcASiMvrAxnxQCnXyvPiFCQmhnK5NcxzHkuvZksnXSm",
  "key12": "4KZmRPAPq6sbeNzZ7R13jxCSvHL7pF1um1gXg8f6pBv748rTbJnbRVVaKbgEzMpPZ9x5rAtSWM9NPa9pqbwZPVMc",
  "key13": "51hDCXCXS3jopDMoq3s9vbnUvn5Q5w1rVp9CC5s76ei61asqEkDg6K9Y3dvRXLT9CW7b4VNAUUj9uAE9gCpqTVcR",
  "key14": "33vpQgeJH2qamPnnccZsZCcHBiRtZkqx4PgqjXSZccX4eZWai2nPuV675nEwdPb8XPmUuRv3NLPQoNzc9K3okUXC",
  "key15": "kcgfWgpppckWBSUvVVr1YFmgDUnHiNd3L7964JnmYgHc7p2yYxwHx7kSEGU9bE4ZZHNZTWeRaKenJMbFWbcRWzk",
  "key16": "2wF5H4ktYtvm9hC6kpJKc6pkamkSi31iJHfepwTe714YvdPpJAYA5SXHNrS6sXz71qGzhmW96g88MCnGemtQoy2k",
  "key17": "xztvUSr95yRDF9VcByGhQnAhhiaUuqjGh6qCKan3WTeuhXP3sRg8BRM686Z8LBhfYG7Rn8iCz7yrwzTX75Lg31i",
  "key18": "37BUK7pi2k4QBGkB4aSMoDZUowqNmpgsP2s9RP3HEsJnHtZBXsW8dbMy1Ax4TasbKiuoi9Pq6x5Qc1DH6nsJaEmC",
  "key19": "673ZpExFGXgHJXDu4dRwUg5jz4FKf9xiitLnCMWK71ff3gPjjB7daVq3nwjfatgkzWogLwT1PxcruqGTv5zRLgBJ",
  "key20": "4jc9DbZM8ubx3Rjq2Vu8mzQvxWdhTmCJQMHunKE6tnwWXrqFfrHeoeiSTJ48w4yJvrrxNdMJUFuUELEVv9csuWmT",
  "key21": "2WYVyzzxH4LxBWJjisV8XkGHtqjadL1c7x3tugkGYGjTdeL4VuWgJoxg7ydbFbzGsJiMexQyQ5ckiAdB8SrZVDXT",
  "key22": "hDYNeFSPRj97TeVNUbaAYPEr2gbbYo5KVG81nBpsB2dcXaM7tSa5thn7yi8QC4ZTUTnKiyvwb5p4MrvNokaVMwJ",
  "key23": "2gVfSnGJoatfWjs55wU6LLZcEdFHj3b779CWEeyfDqMcXZDdQ4pSo8dSu8HQtX1BhoVuJzGQBDKar58QzTTd5HHV",
  "key24": "42AWWopyzZW4qkYz8jwj8feD7NYnMzv6cRMFakhXwnfvRY6WJxNPNNCf1dQX87pFoVbepPu7S5i17AdyugyKqt7Z",
  "key25": "5FbmkameCBt745qeroJsyGvzfY1qgTkBd68kjmkLCvFayUvo67ur8Vaq4HSGJBY6Tb1QH54g7TDWmKnTucBSAC3E",
  "key26": "3GkLYFuvyyRtkxnqxdBPtVKzxhJCYjXZFbWAPtogi18dETt1xmr1sfQaYage1mDPYEy6t6V6CYyMFNQYVt2Pmje4",
  "key27": "4qfAongPzz1igfw986TkvQDYjaRaZaMytJNBRVfZU4TrmEY9EPBTcz2BBz2Y1SV3EE89vSYd5gU2g4b3aWcJqSS2",
  "key28": "2E9KnALN1577qBbJRASuz7sAo5EaeBiDC2yRbfz4NexLy7dnSuQE3AK56EwkCayswv6bj1Es2MGbtiKLg8MDsvwZ"
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
