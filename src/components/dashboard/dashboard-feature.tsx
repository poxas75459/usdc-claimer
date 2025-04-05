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
    "61zTzgDrpYdmdWP1zKxcbjPrTMEJzwq5nJWqRCx3JHxLjeAAQW1tDdkgujwaepFTvkvEHH9JYvXvk9gvH3iSMkYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rQvHGhuF7Z2ESxNNttHNds6dGdivQyn9zBoCvEuEJfP7rxMwY7ev5kEHHajfcBqN2GyJUDMioa2Kmts3LLTCMe",
  "key1": "3NLdx2byYsnwTGa1qRAtqexfXWTE1n3zxiJfxEVmhX1ji5ndawfDjGiFLrs67NFuJ2UWqGcmw1sAyEQma4mCQPuZ",
  "key2": "3G1tsQDkdrB2LeFKFGAFKGstBdewcV5ii4Z74ZC6vLvGqLVBEXVmm7PnFUUshgLwEhkMb1CFq6AAWB5ZBKS3fpe3",
  "key3": "35PxgCq3VfuqZUNsQ8tdvJS4P23pgyeG7ZBVYKw5UDuQAf2Zxu1pb1jDGHuoWj42jfTfFBQjQzMxJpxgwryvGsyz",
  "key4": "366yQVsSnaqnjwXUQasnZaGAMXWCtKvCMng5UrsjYAWuNoFA1R2Ruuw56z3ymRgTifvcMbjev6zb6dvFdazUL6Zb",
  "key5": "5YxzYBHGsJFcX4NesHndTESUZXsZrWxtZWTv1QPBW9GoyjRnZz7jyzjjtqCnLNaJJiwJr7RHTtsmfkxhAy4wZRv9",
  "key6": "4N1sZPD418M5w5uzRxgZcDNXMzUCrJSyg2JPegsu3NpC5P6tZbWgyCEHGn64HzGrAw11wrAwGomAPnMv14qYMmJ8",
  "key7": "APXjPtVJ4DoYrVHrFNdgB2YbZoFRtTSwN5rW1NeUYWyuvRXEYxVvKsqWhgex8hYhfkZWKdSsK8WSodXjGNURwbW",
  "key8": "2GLHatEUqHmyB24fscfBqRxC8Vr9HZ98WfHBgAcKK4G2RU7XByT8BEcYafezkEmFcFvgsURSTFVog6kv2xZFdWLz",
  "key9": "4JM5e2c7JmHokB4VWCEvscxkCUb4Vqf7R3qNcnBvP9rvtxJFqi2C97KoEvtoW1tzN7znayC6MBXbeDBMbdoqMieZ",
  "key10": "43LePR8DhLyquMo7VGP6uiLNNRM8HpMotganMviVDzNhmpJwXrnUQRiT7rbKdhyHfz9uup4SgR8k2C8qv9AENawD",
  "key11": "5GFwQEU3LTRbcG7Ncg2ekSzfgbXJtGQDhDHoBEPaBoGUDVWmYnJ2Xqax3d8Epbnn4xR7Jy9Z1wbJ3Ykq2VGttstd",
  "key12": "57E3Z6pnoHt6G1rBs3YiRujui2nXg7aVgNFceZGPyBnhCAh9H258vboHTvaSjT8aeCVZbfEndVYsvmTHQZ18ECoW",
  "key13": "3meHEDYDsBSMeZvJrpcJZcCm7tHpRUjXqzmyVmPWwFjj2LqwuniXbghzhEu3fxGTxaSo9tmaCqTWdedZE4YNJLAh",
  "key14": "2SV75gkW2p4veeznEv1JWTuRhcoDWLSc47jPA3GPDTmYXffkm31dDSxTYteypBV2poXzaB8kPmRUDMLmDD2mAZxu",
  "key15": "2zK1LtwYSATMtvzJxD9KCyLnpteaZBwYmu4wygv3YRgeCc1bkzGFCGMVXfMM41L1iDwi3eCQxsGAFNkiNYnoR4BR",
  "key16": "gy6U69q6MMauG4sMdbzi1VsfYgpQvnWbuFgQWjP8kYcUwkbwfSJtqUDheQrdNw6A9SY8mQf6uDm4nZ84MdG3TT9",
  "key17": "5zJjHrYa6yBuBubCZEyQHiKv4jVMkmWiTXgHBqf9Z9X2UUJsWQxFHbJsxPWc4WtrUddvYiR7L2TSeR23ZwRMXk2n",
  "key18": "4Zg8otRD6DZ4jA2prj1ei6ESbhUn1J6gGtdVxFBRwAE4TyGudNGWnAuEGFAoNMk713vy6oW4r1drZqkAdfqjvdTL",
  "key19": "2j9xWcAYdEsPuA5JmcRuVdNjAyYNKRcJmi6A9meXPrehbeo8g7Xymdq3za4votYHhjFuXyFKyVvKXyfapuTGEFzk",
  "key20": "4D7fQUPFMWc2FcAgJ7csb9Bx6tsHbZBvfYiwmMf1mDoSAXhd8Q4FRHtn9zJAu5HJuSgsKjwcuiBRQ7JgPB8swCUt",
  "key21": "rgjutcmxHpBo52ogCSBBRZoe4N3QHg17ScyjhaWRC61RyEPH9opbrUHBCEdvnJ4HgVBu64paVEdyRxzUcKRTTrc",
  "key22": "2ie414uWETDPE1dEto8CZcA5HWKPqtMksJpfM8no2N4HQgXCsLW6yRPPVFFsDcBL8Ai8QpUnDP1ZUxyxtJCUMLE1",
  "key23": "2NMUBU5W5EPRtE9BhB6aSTknK4c7yoDrB1zutggMuFyVnRb3Ap7LxMpSvcxYyBdUGpms3D7hCAcZM2SMxhM8wCYy",
  "key24": "5xTeKK2ozWrXLZgBmxCYAG6JaJRWrYTrW23tKqcZfv82R61rfNNrszLKKkS415mzGHQFQHbFedFvhSNMm4k8FqKW",
  "key25": "yNG53EQxf8d88Fv8xLH5TK8z8CwQspxjFnEqdgsSABdpqX3U95ir2DipA2rUBUmZ1pXy4RZDaEQb9oZJgestXKL",
  "key26": "4aZUAeczzTMT8VzEKsSa7NJR1XrjERN6fYUu8XuMmjgGj5hAkhoRFW6QmHu7ounXc2TBn7pFuYdM8j7ESnqKaMzt",
  "key27": "5oQVk1NH5bdEQXukhuGAdA1xMvmp96ExibEuL8fXkSSdashsxZJstw8RaTMxTvNu5PysncARe7xZNwEW5E5o1ewT",
  "key28": "2hg3cg6SJKoBGrsCkpJme51tSm5UtRvVkCdAsfaXjAneVhP6cz2TP63whtZZPGcFzo3Wa1wjRPjivQAkW2K9eoB4",
  "key29": "3oKaipLYZz3hkmmWtcdQqRWsRUHimqgBMPCjGQvvFotKRfSsygRbQDhu1xi1JxW39ShHAxi3cbkqsZMxGCL65Em2"
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
