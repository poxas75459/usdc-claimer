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
    "3mKhSYWUDB3dEGhnUA9omn9e11xb26J6pm2WfVyXedhopdCa7rsSRBeoDSujXZD8U4YvKwR1uw7QwbX3v2kN5og8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xaiac4icF4pTJKjVERgQHjxdMdXtK8RLGdirPX6KaARXTEmc4fAr15qLoLZ8i9wgzk1v9aDjExziAURKcN5z5s6",
  "key1": "4T8VA44H8ToaqfEJFrF2XKyrdcA18HKP8xSwS3jFRSdyUCGmX8kJwQaDdXWoYFwpmiFmqFTGfi3wkc1pnhCXorvd",
  "key2": "2obawiEjJ9WAMnMwEZa6Z3rWgiN9QUYaYgpeZgUsjqZgp9HA1EwkKxJkNE4uw145TEsH7ktiaD1gKRei1htwhnrW",
  "key3": "5TEpDPLVuR929K5KLtRtk6iLQMYPnwAXbLEXbPAEV7MnVPFdkwGsZWV67wm6rhkyXQm9cHVhAiHH251AaonaVg8T",
  "key4": "5dTJpvxvchYNGv31hyENiNGddm6TH8g1SynbaCGJnX5FE44xaH9DxhpCUenHt2iVyeLuFuxjoP8z9xBLh99G8TH7",
  "key5": "2ea8XR9kchWNSu7TfsXLhrUJzoqs9q3dt9CUVaFfR4WzFbE4QznEDizsB2ekR8pLEhSsyWmrK3MfnrTZmg14NZtm",
  "key6": "4RxiRZxTmUUHvTpGFrxVWFguKtSmEWrgf3z1rSXhuAQFpJbfCH4jo8AdMeqwbUXekPJNfwtFNoNvihdV7QYSHG8U",
  "key7": "4NL8fuNLg76Tecwy4cp1AnMZB3cD11Y5KULmHkUASeUUy6pUwGQo2FAR44NBSUeftsx3aALCSenejMB51xGGYkYy",
  "key8": "2i7KSb3RV2UkDu38CwEU9zcCwWVhREpF3QDUufZkkUW8crXVTWn6NGEMnnnCkxq7RuevFvXJQhRKLPXZ6vZ9GFyv",
  "key9": "g5B3SGfKYhqewMArtzLmx2R3Rntx5dK3nEMAoQBbTDmcB6jRFgCfMRfvy2SNCfU382dxWwyP7nk4CWJa6RZA5sT",
  "key10": "pUbtw3NvGxLcx4Mqxg89bknRwAb6W1YaBS3WUaRSqm7WkX2ZEm2vRpvWK974T5Hs7q4JdL1WHxMtH6avcarS2pL",
  "key11": "3TSAvwFPNppPGKob5TwQA7JjJCyrUnbhWWmp6kixQ7imHp278RdkD97V3T93hjh6F9AWqhBHMFaaEek9L9PSwDLL",
  "key12": "4F2XFi3SWgp5RgUa3wceG8sKJmUbV3t2aE3V4RvYviCvWRkTirNTdxZFr2VYwMkYu11ovWkk6QVPidxoHGSKdwAX",
  "key13": "3sBCe8D72nGdinf3M9HNuHeXHXHfFsQs1BTyXxb2C8PrvwbJTQbhDMNgxzf31RGFnaThVH27U3JLBsgGKG5qBjLn",
  "key14": "5tQPVqB8bsrnVj2ZynSko1hbPaVPUnJGXGJKu9mX5re6KRtUNQ3WkHYzT7VMzho4bnGtm7gGz8TMX3YzZkHQdJcY",
  "key15": "3iBUsJnWgznKaXx6LidKeueBqTUWRAS6kP2g9hrxuvV6NjZkPQ6tCLFnXg4hWUAqZuJC7mMXzfUrAetkajtYMno8",
  "key16": "ByUooe32AVyekMSg388DbgYwzs6AerwYLWq8FpR7koSWKQggMLsSUb2GyK5sb97bkU1tFRkYxVJmQX3twBWdRgk",
  "key17": "64pV1dg3tj91YDgHq6rKaaYYHTWWKBFaSamKte3Rd3RDBK7bSjEfTGi5W5EsQWLmq7FVUFSyh5McnkVGAyE8b13B",
  "key18": "279BTMEShNTsS5X5rkCM3nhaSp7CAU9DroAtck8g3pfnjXZ36rt5Zh5ZNtoxQguRfCc1Cbdt9EEe8pnvumeojcGW",
  "key19": "2AQm3jhqP3DNv1NhWhLoCKd5XDXz4ze57bBetQgYLNQQVbZP1DLJij7wAHZocaBjfpPc94h3XyQggZNFXzg25Kui",
  "key20": "5dtobudf2YBhsM4dscaxi8xtePJQ3cwA8ghuwxLCbCwNC1quWy2BY3Ltq9ff2eFz4UKPDkdYZzGRfCs2KE1oQvUs",
  "key21": "B1ouqzaigXfV6BBTF2xtnMaD3gTij5zPGAteFBhRttQe71faiumyAuDvf3GJApGzLLDk4tAYUzcCCyV7TrA4JE2",
  "key22": "51YGb9v8tUBpWr4pCLeuv4NQhr1NV7gbYawH1syNBeRDVRJ9My98Rr9AmHDfQha4PHJ15JXykhH2EbEJZ3cQ27m1",
  "key23": "5MPQ19j3j7GWPjjgM78M49tDQMz3YbCtAFWBBA6bum1uU7cLSk1cnJ6gaA5UYVyjxyFd2fUNQpp1mJszjUXJaLu5",
  "key24": "2UEYasbsnpRUicn4aFJG7sJwtY6UagbxrBFGec8mUW8GMcx2NBaax4XbRLV94Rrq4SL9VMkt6WMDzY2Tw1Ho9qtg",
  "key25": "bmQ8kfW8uMDnEixEXkAPFV8BZW81iUSCSPWv9zvij8C1CPyTCuQjGpz8YyvJNX8JxQjugPf3njbsPUefUCRrw3f",
  "key26": "3aZVGKui2noiXmiZ2MdH2W9BnzNWno12gZqgj7AYNqUZtbYwWj2c1vNV56sS3oQVbCHA6ZvN2zTs4PzyeBiq7AWn",
  "key27": "3Ugwe1LcjJRjgTsdigZro7DjWqHUBMsCzH7HmzdHrcBmpqMKU1D6NAfKdpcP7msar1MQASREXwF6ca3GfEGFXmsz",
  "key28": "5Df9StefwSarFv3NmyH2QiiHYXCVYy3cBaA5ZXyrSfdofBkuseBEXaYsjQnHkNpKiQhv7cg3vX6geEv6CwHa7riM",
  "key29": "5u4L6KV9pz2PPyN6rDT9bnhX7TJj2JrQbpctVbhNTPmuEchTue7ShEeE2PyAPk42fySn9rq1xuy15MtUUDKnxWXB",
  "key30": "3AgWzjJj5xtoxb8e28yL6Aq1AsCDbqyGY4bUwyn6VYtCPVHrdUtSkYFsmKvtB7DFUg8YZkd1Teq5yuLM2oCUf383"
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
