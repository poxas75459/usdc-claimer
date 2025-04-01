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
    "61gBi7wHtrzYt8KbbvCsxPZ2yeW8YB8wRV3CW2P2wwjSG32mHZm2YaWWBjakdAz4mmNsmcgQN7DB1owfmwNhb5U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmX7wGRieAbQGyS8GYNQBLSE4zZiRv65XFf1Cvuh2d5cheATiPijSUfDQhEu3vVCYZaYjwQFjxydW57zeGAzcWz",
  "key1": "FLebsnStescCxHHBFjZqJxEhPCjSYwjf5bEJfH1Mq23pxzsmoZeqUwD6vaL7PBqn3svwTiUP8vhBt91qbuGn8nL",
  "key2": "28tZGeeuWbF9sD6jCySMoV2gxgg7ta3cSX64xkE8V1AkjSC26p1NJMyn5t4xLdKM76soMyt6boG124JGP5685dVD",
  "key3": "53aMm4Arz7osM356cRX6gpSNJ3QiBy4GPtaKj4esZTRtXpVfFrPUDBv86x4VeuEApS2wZ5x72dKqH9gr5EN8jEoG",
  "key4": "21zt77NXAL7VJtoG3JSiQAxwJBbdqgypkrZgiENJHfzR1A6B5qsfjeT6PgoJ1rAEHwci4T1fQpqKZzeFsdgCxuDF",
  "key5": "5XaSf6DLNjGuXAocWXqPJQi94VgQRxEXKvzkUgnprdJRCraMJXpLJM8Hz6Bu5rM53QXcGaHUSARwzzy5D4aAA3gd",
  "key6": "2PLPiH1xyB2KdfXgNJLaG8ediB4uJz3xH8J6ZyvsBXQZsPLdW6LhDDZDjEQoMuXRrHJUisT377vew2TcJWKHnFrX",
  "key7": "3Jz2aWirUZn6ZAC2t3FCUkMFAshg4bDuG7kqgmHApyc8W9cov9kajwmxE8F6qAfEjpyN6D6vMMXyGyXZLUegQ6Wh",
  "key8": "saryPqBE6RTugsGuYoABgBXhGvEkQuu7atbU9BejBmZqT8Y4XXKZ1ELJi79fgV2Hohee9zZQy6ReUtBmzvHMLJx",
  "key9": "5nWqKJhFfXRdimpxFMB1dmswvymdcNWez99WShvqpPdFztz48Lju8bSFmfzhXARGpm6vy75Hrn1DRWy2JcyAUw9z",
  "key10": "4Y551HvXwYpkidekYmj5RZ7WynyUEKZWF5HthcHkfhVbCnUgPDKyhRdcxhYcvM6oySxUyFZrzXRmkmotCeUZgLES",
  "key11": "Ss1tS3AyN2vWBnotET1egYmGjR2dKFQW8pfDyZFX34x2C4rRCXr52f2V3UwDD9F8xndJV955bTn8z9rVXexXyha",
  "key12": "WiwJzjsjK1Ut7wyav7Tfx4gja8Zj5kAmNowuV9yG11CmKdYpCp3ZXsREAddu7VHAdgybexueqCJqEmvMBQDN1yu",
  "key13": "3UttR3g7bVWomPFMgy1L5N1ZXfQAKfFfDgT3MkrdF3DdftLQUKZYLnMSgY3MgdWH6bGjNVVRJr6QhmirzAT8efsS",
  "key14": "wWNPVnPCUgVTRpcAaQcdQkCj5k4hG93wGANbDLuyRJQ9V39bM1ZzzxSFkpSbVqJ34co5AyMWVfh24FLjZ58rXhR",
  "key15": "4gKs4ckqXtuafo2Ri1snCLJfNhWLBTUvxwE4HrDkHyAoRes6Hv1Hyg6p6RuXZhLz2XjJbNS8kZGCayFsC88HVaPQ",
  "key16": "3SLh34n97zjDRsRo2XeJ27ZHp1StCtQ5KewPpdcnQrqyhnL7T57QpYwGuHH2ragNkDQD8SKNTqShmKbejkYFCRcw",
  "key17": "3WHpJ7VtAs5UZKxE7NxZe4YijfdskkNYDho2XwaS5UTayY6nzndmyQ7sTB9U17MhM5KsShsDjRBPbJP9wZnvG5y7",
  "key18": "5bVBDRFGuryyVs9j9XRrjX71vi3JsKk8Eyjmfnugvirjti6dgiD9Ufm1yMzrr38E64UrpobHQDveR88hrdokbupz",
  "key19": "23y8zUAHetTHxMXfUBsWyymyNSBqN6kecUyngk81dcWbsQeGHNNVWkCLDV3fMffKfYZuufhvzoFjVHre7iQcML99",
  "key20": "3WZ1gNb675fbLMAcqsrbhxnsKvVxp8rKDU3nn7hLoyV443hdXs88fGMGY2W1WKRcDjcgcjeVEMgEDFJC8yrjyAB9",
  "key21": "4UDoFX8mAEWvvor4Y9GDUG37xXmoaMRpAkEzFPR38dP9LSHDF4MmFoMFHwxh88PQ7rkAvCP2LsuDwzAm9D8acMoE",
  "key22": "2e76aarimnacSNsrFwscwxtM5B5izS7ZWD5g7qNX6NRYcAQwbP1YWa1stXZeztmYDrSHvoz3Df4uTugga6eKLYha",
  "key23": "2Mfb7bRsm5RtxqNRD5SQWw8PKF3SxpsFuwhHoPRx5K41UFenECMN4W21VHnyg1B44zS3AVPeP1VYZfzA4xdkkFZH",
  "key24": "N1B9GDxN9DX6oivAbK3tTN46KJMHaky4bmGMqBXg9NBY8do98jtFogAHPQyHsLMar2tTLMH9fkpoog6M4tqc2iU",
  "key25": "3FsvuTSF9qWevkJkVUvfzVRBPT4nXsUyiES7Gnbbm5L1EiWGWtCHTjTfdqrDtF2E91pUsisddbk6rx8tKVCp2Mbk",
  "key26": "5yNuBBsUxxLPzB5qgtD93kpSat7kNMaf9jj6iLuwMVaNTfCgMkzMBLoSui2cr9KnsNBwGfKYVtyqwAccwSkj1tSn",
  "key27": "51QwGFMetsrb37sqBXtn5sxVwYCnEic2yQr49qwyiR9fZTb8TuNLFLHnd1mhSYwz21stJuuVoxWQDGifFxnhjdLL",
  "key28": "5tbj2MQcWEPYTUx9r4sYstNkhBchTnpEjG5aNm5oQsHmpJpCUzNYeC3BYVPVRgDPGmqgbzD5xeMbEYKbSqieSpRD",
  "key29": "32xesCeDweNxLThqzrbh95usEdSxYtxJbLoAuhp5cUFLsKY3CD7LNWJKr64w3ZqHaqU5qvYS4mhL1M9Jbxq5hWwk",
  "key30": "3dPzehAhvHnKkvepW988SsQ9aPBtZ2pZzMgkBAJFHRJmAgKCg32r8NvGPshtySnsPhbqkLEFHN4tripvNhbvNuJE",
  "key31": "5wnJWirLMyz5KpW2v2uvCPsbHeJuTxzNWPa21n4obQWWgiNgSybzt7TxeiavjYzqrHjWz2Zpn1GBzp6oiAVwcep7",
  "key32": "5bzCfsuvduWDTH5Z6TUNX1aGTg2chREEovW3prrPAi1zgTu3JHTFe3jEEyec6W4V9cam5oto1Gxy4DTLU6h57m7L",
  "key33": "Uz5ZN6gCRUesFexMbKQAU2VfnZiQTgZbLtQ5him2EoihcJif258M2axqWn13o5EjiC2jLQn6tyVqxyLhBesBVAN",
  "key34": "4Fto4SdCMjv9cP451oDnc6q5mMkvEwXNt5NizbD6f3CtdoujMf6njE5ZMnmzyfiNZ6tU652BKerfBgrp5dq9FFzL",
  "key35": "62U8UMAN4ZHkFYiYZhbNVTYw2ff31o6VEKcqFBNgJwbbg1NAocKoTBvbDXnLhjWVsPZpMutFKTkAenEfDnLDVVMk",
  "key36": "34sQNbLaT1bFcC6kdzekVJspNj6CqTvMxvstMFuFbiCDEsi5CXeo4huXQQUqBGy6sPX1J833Mvzmv4t4Kw7EDSr1",
  "key37": "4hNiWbFiHdDqU41hdvoZhJjcepwnyb62eBmz63xg4hoN3SjbjzFF3aF1n7AJgv93yhqMA4q2Nh4absyZvnC1YJwA",
  "key38": "R7bMNwRZnxKAvAz97WHBRmgXr735fENUgjhgYKebq9jYH69n9Lx3ktcVazSKSt7aFG1bsJchSUk4CkaE3eMtw24",
  "key39": "2PtSuL8nBUb8EEzpWxRpVFqDQKoCmrC3Mo6qC5x3d23kFYnE5s2AyZXUfxM1GZ3BJY3CBtdJg7xz9GhH4Lvx5w1z",
  "key40": "2JEzg4ofVJTK82HabqdZXNBxAu9oKPDg8t5SuS3qEZLNh4grVyxFYy4tne2y467diuAFn16Gi7PELbPHaWGBafwf"
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
