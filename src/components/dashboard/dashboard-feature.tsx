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
    "PJH1JNGfpQSJ9jwxSJG5M5ZBEmuZZLyTPbWd77tmjLmswHh2bBL2wcUrk2AqxfePRXmJVHDxjy1r32pyBDNtLn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J89EbyZ6x849Kthuhc58AL3hPsCGx2qukJZmP1Q3HrBvLNT9LnXELNBdqQugUTGJTwHGxpcspKcG7agjeEoJWcU",
  "key1": "3Yh23JFvjVVrvW2fuVBmD3sVkYt7Kkw2ZrEfgDcWYqGax5XKzoYLhhGATEorRT6j39iXHw5FaHP2typW3iFqzyaU",
  "key2": "5STAjBqcerD2TN1KSybNQeFyZiSxefynSEAZe9dugwGNVk1zEbZFfymDBuYXvtU7bGFwjVuT544rbosE6ekHrrqg",
  "key3": "7SVC55Zm4Z6wDgsfBCxzSXj4n4J1VLoPfMaeC7jFSgW3Zo7M3QFSVub56x81oQjtYbEvLePUMyBCfdATrAq4xKd",
  "key4": "45nNq197K87F6EuCjtMKNTqUSWLk9ADF1GtmHmqVzAAtzzeKkdKwKrxXdM3NwhAqTmVzzeTZ351WaSCMFcN7Ft9b",
  "key5": "4zHqvaqYGYb9W6eEUqRpWiDNpnJEd8KGAai56jRPUs8PknCTk6i2cQtyxrcE1cdvMEtLM6LMUFkmqUQmWwX1xka3",
  "key6": "5ctt8UC3b5vSSaokEiJn1bmwSkoDT2orjpejcyZMgsSTAjzQdNuf8hWMQ4MrtjXm8xEfD6AYLBERUABUqzUPDqAn",
  "key7": "3VQ39iRHrNZPj9RJpc8DunEjrKLRtDY1AQ2E2bmzauMhLbnD73CpsXqnUSabEpMXaS5YDsnHowpsBbxWjVJGTK2T",
  "key8": "4xkFikgdx5AtqoZFgL2hobLqbHRhVxqv4uRPqXiTsSFaDyvkGahjF9YxwTsTXUfAMQErfp9iamjj56tddh7eZE2M",
  "key9": "2YRDuapqpA5ngNKDzht3wRa8BsEMaYEZgakLtWxvLuiqrKFronpvVhCi7dU1o7Wt3zvc1eZokVRLJs6scvmhBR8H",
  "key10": "2cTMjADaMRCdaPui5yKr2LzZS4HVLZtYLN3pUS1YsLgey9DMZ8R1GcjEiWUjSAF4JGobnq2JDcKiZt9stpEKf7u9",
  "key11": "i42jUWGVgeqpNWWV3ArxSZsWZHKejwdzTW9mAWrnDT7ZRxdnid6WwPwjgSsXbngrBCDNAaFZiUoS5J7ipNd4LyW",
  "key12": "3A9T8Qh8TQEEWeUZ4wXGGkTixV78fbzgpDNZ7FSJPNVhx6Pj7Ecgy9uNajdsboka6jwiDpUmQNCRrn5jctqWGvi3",
  "key13": "4GEjd6JFYfm4qnxLLMDpDpuPz4LQvSczYu5NMXqoyss2tQJtN7z65zQkcgpD7oVfVnJxJmm4GPy9AQUf3evR9JX",
  "key14": "5pLGuideeiL62M3BDiRvXmZsEwSgbN3nhHBDc5j44tXVzNCHK7A8JuzgM7heLAjsbne28QJ2W1RnLi2ZvPHa3cA5",
  "key15": "3T7Vjc7eSbtkKLpuvjZbSfsXWdLBgfYB8UFWCBLa9vVEhJmNknYZpTyUHcEomPCBGKerBx18cn7R3dnjFvVa6CLW",
  "key16": "2bMLA4prFMrK1mNqTSWh8GbujqjdYW4KmTEWL5ZokservCCukXrDfQJNAVwsEg7CkmBARgVQytVxZpk8hQYF6mc",
  "key17": "2ahAYKj9vPumoLN2RTpnP7Br4YGeP6j33jVGjSVEHo86SxRkjS7udfMZZYHGysKkV35HQrjE5eEvdJ7mCotYYVeq",
  "key18": "hMz4QUUDxVNMNtKb6b3nBYvtnMf3H9NdekykGoDpbCfGrJoseZfu4ypN6gVEmw9X3nssUaKJhPxAAdtZEMUKgKY",
  "key19": "3tDNZbhw1bx1T2sut44Uo4djsrjapvoLPzEWrQYRJ1ieJYYdWxh99e5Uk6EGAZnqUvdNvnYWVnqgeCEQ1go54Fhv",
  "key20": "2Gk6toBMBqNCZJ28NmH8qj6DuwtrnqfAeNFQaoEn7satnnr14rmhSqWhPT3tc6scPRZ4hCEdgXMqrYzzg9LU5En1",
  "key21": "wMKKeqSABMLG6gbXgCmcVbcYA8Rukch2hEED131PTWFE3rAargfqUBRx1T5XoTjaPhXZKJW5snBqrYMgT98E7Ly",
  "key22": "Qaesxn4hQJpvqVbhtQSiXeKh8wnop8627AkZJ9E8qikW4vsQCT6xLgVLtvSnTxJEGv4NC6WLzrXEMB1NUyEXAic",
  "key23": "4S16947ehrBkEf4T8tmrm147fGVLaVhDTsfvawA63sPM7zNVqNgCphi6mDtWbv61SigcipzmEEd7Vg4ZufCzdYxG",
  "key24": "5WswQkoEAbP9qgVu62DbUcCaordsDYRoiP27tyhGoYm4m8eKfxvaU2Pohndbx7L3r8qokKfZZsiSw4Zca2rSWx18",
  "key25": "AdaNcxbEaTJs5Mda1fsMcsd6emRYyAPzr1UBbuHy476QSjFD17mzR18xXWiwxsThgfRwZneFvDaf7Jmi8FLw9Wz"
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
