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
    "3cy9H3UTgmVBhPeomE6c4VP6yjnXxym6aboHFRa8NkvUV2imSmYMjd3CtXaLRKfyx6dZcmAPXVmcq5egx7TRyA67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWX9pAeYve8WnDddnt9z2zCMXoiaLENCsXZhx5Ahj4gkxNPuJcD576T1BMVUAF5s2dPzADAeJARxrsE2HMwt7rf",
  "key1": "5f9wY3XvegXUJToy4cj3dtttSjoNaDuxhn5NjjJzZuB5p7CDxmXBtERMNaEFYF4dwi43Amq4gg7k6mgoP4M26ERJ",
  "key2": "3Gy8qYWYVEprT94dg7cUU8RRc1gJAAgYMQwiruZPcYzKhkSzHKQWJWTVxYu8UdXjnYC9sstS3VMA2cznZcZufvEJ",
  "key3": "4EtTRGcSTY2RbJydBS7TVrN1ZPPaaAJV4k1CESdHmARRBkLACrcL7VQK3BmCdqRYwXbZ3t6ZXU1gjKHearU1qAHE",
  "key4": "gDb5j1kWFPmK4e6Na3W83MHrYV1Vy1jeN87xLiRtxes1pjXHNvA9EX7bp6c5e4wdsEVy1JbAi7xZ6LPqXCggrYB",
  "key5": "4ibMbfxkbbHQtELQqZjzQo4TGpJtUvYzMTMh9xyarA17AXTpjSP3V3CXgBcbXNsqvXL3yNKBq75PeD2bRuvbTG1Z",
  "key6": "3b2LVq6PegsMvJ8ggPWw7Rc4CCzNh3CQYMtipDHc4tbK6PTCbguQeEHnVR5pf9KULsX8xGpQVwQZG7WMMox5u1b7",
  "key7": "5SceeWSG1AL3DWdbJQQcEhitSVmen4Xp9o6NAHdX1YUZYQ5qvo21jxzGNfyK2MzHPp1xjzpyadDFN4zEPAr7AcTP",
  "key8": "5HJfdKBcT53YYz7wEbgxqxCCoDmc92fH3RUht5JjmefJzV8wUkJ4nJ3KVZkjgc7aSs2S4v4XBr62iFvwQHC9gNQK",
  "key9": "5BGkP9fPFCvM35Z5RCkJScV7qXvkJLA8ZTDfK4M7E1MpMw3mME88iMM9Gm8PMhdmD45wMVqyam9vPvZMfYMzCJFd",
  "key10": "46ke32ZoT9367ZXncVXq5sHvZv74DR4ZFmv3sAhrshqxAoHJps9BaVCTZKA15PTFWwHMLFFBvDGdWdYxANUicS6c",
  "key11": "2w4TrcKkzvDCApbYi7HcqAMfG8SqPpUr1Kg5zsXBzcu2iao3Kj7tQKycjegrqjdwyr4y3iVyC7Ftghpd38gMyvXq",
  "key12": "3TzjcivSeQ19nCd4vcpyQecue1UHQxTLuVvcw23KS54xCjVcTYFJqNWFnHg8SWfhd9TzkQTHk6EfMKdyWRwky22L",
  "key13": "5vfPVLFioS3XtGWug3XALPDG9xERnEjXAm2UEv94PCR2q7TbHWbywqx6t3gGUv6oVtgr6p9FquH1qVMnXFcMaP5W",
  "key14": "2wR4QtV1QtXhecakoBTbZJ9TqcjLKE3HHc59fWBay7snFNSrpt1R6aPTTjgErvxvrg8ABoML4acVk2EWeXh36RFs",
  "key15": "JcrXVRszer53XHZnAutizEVJ1Vo5xAudtUbTorTazGpWwTwzP2DBmFAMsggCX8KvTnxgAqufL6XREUhvRr7M8o5",
  "key16": "6348pbKZ7PLoNDpcEAu2eVTNjsEFcSCJENNPHsHmy64H2EFMPfyy7Y9oQgyKEYGmjaKzuKymSkew4uqxqrcMot9g",
  "key17": "52EKow518q4KzfadaQSxwHirE4difxw1ULHZLRgMt7WNADiqTeJQ55MF7C63c1FhusSSUiLHaaa2ZuJncq2uZvaL",
  "key18": "2dvLjnm2zRF7KzWtMRwyxPq4E3WUEmD1pjmkMKuD5wg9MJTnGnHxEYUGUaB2e4LqVy3i9B6Dq1BEAYfkBdT83cXU",
  "key19": "5KMvCnYtBqCNmjQbaGAzcXtD6mJt1avNKfg7vjQmrf12B5wJYsr8EjnqWYE7dEBJWB5CdMmXQheZiSjPCcud3fgs",
  "key20": "3n6rdpFZ9vqkXeRSUsyWV5H9ywPd7QPVddb3cGjFgSJA4Z7X2NBj67GvyiwLPVzrUiBwyUcMrovXPWYtGXdGZSJu",
  "key21": "2VY3TJLjU5teCshpohMz9m1RoTBokxa6zd4h9oPEgnKxigyvjcLMDCaDCqGwGerS1LWUY2HPm4ysh8j4nby7uQBG",
  "key22": "5GRS9depj8mTBsPLo3djkMz3A3kKqTFdStXX8adbbXTsZAPKRJnaCRhXqtH5Y71WxRUt3aFJ3xojbHJvqVoz4N6j",
  "key23": "4GcSwT3wUDj5nZh9V1fVyZ1yfDsMCFS3F84bvfGnTtWKMRPkW7Ghk8cj4bC9qe27NdMWoHoqxo11PhXPvNg9vAtX",
  "key24": "2iUHSJdmdkDqFo2wybR7PX3okzBSKJqLFPcX8DQGs6DDGbRxj3c22qWkGC6pzyWSEKechKtSXnVvfDL5aTShemA2",
  "key25": "3oTuJCcWkn9aMDVMg8urV2vgnHZekCKcoTccyx6KS7Mn5eY9wSZL8XAxta3cbppxArZ63ogtSveg2JoxoKyjHBWd",
  "key26": "5ozcW6JpKBwKyBvcw8vrTkeHheaHRk2ksf6Cboes3xbm7iMFM7zM6mrwWuczRPbtKvaQSvrHPJPL9MceKWvQ8dS5"
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
