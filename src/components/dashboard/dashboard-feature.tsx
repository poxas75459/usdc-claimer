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
    "64TSxcMMeMwAscuLM8SwJpRzd1wj3L365U94PF4E2p2NBrAkBQFkhhfSHuCPUehcyhzpoMLTJJZ62WrRz7CqaaJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uWKpV5qzEFadacAPVnQ62eixQiBxc28hF8EhuVCUPV9ajWacMFVUYCD6HPpczE1sq1EfKGTRgvPYR9ABPurp6W",
  "key1": "3DvJeTF7QRjjAUNHykHYj9BVuUjyh9XaUPjR7n3n222jfdwAfi5eUwzLJ9dSqx9TtS2NtGvJfg4Kie8kcoGbcAnE",
  "key2": "K7j2xYtQmMDm9TLkpPpPLVJvzHGvzKJCn91uuZvzmZcxuDY8tqXVAdHKrQDeUyB8UVD9tpa7T9Hme8wMVANNmsF",
  "key3": "2i7p8LJ6PCibngj3qwLSmdonm1GFna85oU3AcQt25HaazXK3GXY5KMs6PWxNvzHLpvFuTrcX2rzpfBuVQ4m4roD1",
  "key4": "Kd5xASqCQBjZBEh5KvQFHPBeNGPVitDUCqr6iomG5XrHkxJwsGMBjEQN8QVy7Y3bYsFmEfsLKv6bRnc8E5JhxtE",
  "key5": "qwfJ4F9yzwrJsy8rZPCdrLRzVNqNKUnMxSQVkje19qZphATGb4H5Kmj1CPtEnfzRuifgxSeYKakW6sYUeX8avWV",
  "key6": "5xAM7uGQA3FHUrsiH49ixDqJLThV6s1wa1vSN4xmj3hVhuFQ1q97qwLUj3fFoeDcCLGHFEbBKbb8FdoqZ85RKvU9",
  "key7": "VDTssUFUNaPub2KG5xfbWix2G3i5x3uSSjCMXit3rZHuMq4NXbcA3xRd5SjSqgfLDKbREAg26xYTEN9TfwTYSKU",
  "key8": "3Wc93rRuwHFb8cFqRUjDr52yC4XwYCwVwRXJ3aTgv3dLgBHg8UdzNZ5WgJ9Qmt15UCxCzGtsD2k4r27xnWf9Tr62",
  "key9": "5UjdCn3HML4hywrR2vBwMv2ReGZCzuCCKSuvUAuFkszT2XHD9ZRXGa7dyv534UMJea2R1jmdWk9g7KiG6QU1X4vR",
  "key10": "5ZfSNPvXnxUFmapZ119QDqWTMJjbRqYcRHCh5VcuRE6n2ogoK1jmgrhGqfTCmLAEekPbUJ5yFsXoia4nrpcTz5Nu",
  "key11": "dQyscRwrE9BdtmkBZwrBk8RajjANtoF69y2dB5Tt9hPs4j5S8Spnn29B4KjLJKdX8jn1RqW55mi2KXHAiYtkUg7",
  "key12": "jTd4QeMWdAZZUF7iVrNAFAMuyehqESosw2BwVgg58JijzQT2rdCZsk4Xz5APQdUHbzPNbqjqwRm72Fv1L4B7QW1",
  "key13": "tDGFvE42dPS6D66mjXb17m3KnoFhciPdQrJ6mQbUnds4hjxc4CiHgyT1Ruc1ji3X4saJ5vjtr1XeFnW5DqEt24v",
  "key14": "2N8FKdY7zLLCLaDHG1oDguF2poG7hQEeMbCN8b1mkE3sbhnDsK19uCvZ2xMfnyP1zkbCBbN3uA5ok3dMzB5FR4Hu",
  "key15": "5SV89eTPP3oFgHvzEdzTH3iUQfdTzWxFD7aQH5hBFUJgjnjRnuFSyDNMH3rdmZ7wYq4srToMKKuu822Jkrwg1J9q",
  "key16": "5a6o4KVmKwNzV7HQXEk6DgxTA68jdVPF2NVR5v39USSoEUiRJNURvtCMFVKAES2s8aMqUoRbtRqi6S7osXkPS212",
  "key17": "3iTAFCUraogXZgTDcj61Ga5md51EEaguEUiPUEFneBy5BFWELGh4GhMQhWYmHzALSHeKxCeYVWX6KBuSjn8xm1sF",
  "key18": "3X3EAdJ7qx6SPXZJpYxwVhDGvVQGVHTxo8fy9hkNyrRehPcJckVWVmY7erEHqo2EfxpUdEpTz8ThogxVEiuTuyX3",
  "key19": "4B5fFudDGCKGTreZvTojZa3uR9UgYCXSKhKNCkMQzDbYzFKzB6agZGqywfgAKSKtTRoMCGqE1ev2s1W9ssbDF6kE",
  "key20": "4F7kwhCesUn7kGvCcvZmQNPs2XHh7wLRibbd2nSETXp5s4s48634dmu2DvtHXgGZEyZch6BkjEuPvfjHdAnGmX6R",
  "key21": "4pSZp9nJcrXys1YZ5PA1vwMX7nQyHhQgiPLfH4TWdh9nUZQVwxvikhNNZT2Nwb4YtZNd9k9ga2GDmcPNC2RkPs2n",
  "key22": "3tbQQJ6e4hTyxTjLyFM53gg73x4ruiMQqxWMbQ4427kdbNeLoTWHkpeb3NAbJuFnVxoPZGKZHcPR21SLo91k6sRH",
  "key23": "4ZnK7FzNNauVJdhejwE41V4k8Fecr6QwQrqapNgxbAuyKfpFz87LGugzQS25xHR4uS8u6jX5gG3QrbGWK2D9xNid",
  "key24": "2q62y1FA91xetZNggSPjCRxFwzk6bFg4FSrqVmeP8dghc7T2UKgdztkK4Gty31BmwJCXwdTANcaefXpDw9xjgmnm"
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
