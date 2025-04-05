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
    "4QpFxaWVd76vu3ouS5GpbXPePtivcNQC6sAx9CwyDYHwMSo7peBbc8TtgpnhxDGkULKvWqKeKGk5KZw2E7cS99f8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWCQVg4JbVyPtXzWYL7UzWPBpJ1fNQULuogF67s5S9mbpgA5GWVqQEcZ6asErG8D9yoNnJ618b9SqvUZf9m5Tmp",
  "key1": "3Z2YYUCv6mRwXAPkaMswyxkmFFGUJLHD1EySkVFhsfnv75ekx9M934hTdnvcfXCaLcoominGuiWEeTyMfuJi6KRw",
  "key2": "2MSFXpXetNPwKEtZJxrSnWFCa2nDaR8fnsFhudQe7NbWczHrvevaPXdMpCCJbwzPDzHC59BfVQTgt53jgPk23uiQ",
  "key3": "3HvUfTZ1ULRqbnUpfAxqy5VntRgWDjqQyDs4diHWgU8ZDPGFuxqCcuWwXvqTz48Kapt46wudX5WNL4GvGP2j5SyX",
  "key4": "4aWFukE91ZQyVhhMw9gQRrXYEAXTaDGBxTuoXzYVr2sdTiAtFaeCw5zUqzqKK6rRrKmu2yUk6FANiyaeiqaKhSbM",
  "key5": "4AhpvDWnz5UKMK234BqwJtjeiXFjfVGg8zXCcx1FtnG4Ndv9GXtc2BRE5mk9bNySF3dpzgkN6Beo4bb7K2dXR9Me",
  "key6": "2dzYxmzbY8NysTfcWpVzapqkaxGaNcQmo99T1UAN1zRX6AEFKPJc8oGXqpk4vWGCzZYzD33Ct6nKX1jPriny1Zji",
  "key7": "5uLndqhuem7McESkFGABnjAHCWKLKWmmBWNoN2qVdNpzSBaUpMCnmiJEe3dq84Jx7hGuirZcxeu1WAa2AJkdSoXa",
  "key8": "5Dtha71DhuvsE85AKvgnS3j29EBhS677YaNCLW3a6x9FUmJ32PiyW7Z4zfFUkq2CH3o6c7nN5bHfRv9hmLsDwi2T",
  "key9": "2DSg3LhvThUJmSDpeyKwmHm6teP9ee6EF1XwnyDcHHQmAY48yZLKBrXHkvrHwSTpqf2hF613GENAUbFWHg6c41DT",
  "key10": "3SrcuF2oroDYChbAhradQG4gmkRNVXirMRryHZhV65t1HxcxrdEPXqX28ZohrcGjZbHwnYJMQob4bNpCqFuwCqFX",
  "key11": "2s5ZJTgZm8WXjakD5NiVViS1BeyXv2sp4hdMCQHHn8VNyCPWR7fEv7XmRAoRX1i7gVxiTVCy6JzKRh7Fr6msAHoK",
  "key12": "5z7T4j3siVzcv6Lh5tsxJrTMEVrFZNX6oSSKxiqWP7SByQc1jTFbRMeeePGuoTxCpFjgChfsJsazZUQWa2ZQt8Zf",
  "key13": "K4LRJroKdorJzn7gXLGmSatYjJ41borzKQQ2vrG43X4mKgQqooHiwxSk74XC1YZmCgNZ7J2pXnGGevt5P7hxoPC",
  "key14": "5UwVDxQUZirz46F2YtwZV4qtEAJoJJ59hh1iAYxmWPGtx6BTuGJK6PFRqyv8mbYw8yyA3qVhMsLRt8dCjc8AZgYt",
  "key15": "3CSy2MAFpBKUa82vEXk7Jo69rDAT9QzNtoz4Dso6yWBPxoSwo9aiNWdSTvodAVvskNmWK1yRFiuJD3ANAtRukvAa",
  "key16": "5WvERSAhiRk1LdNfFTuUi5jL7fmvt5hwKXMaAbSW36MrM4xV8UCFDU7c2P2uoiENLnwQJRJ2QfCaayT5SyzSj6Jd",
  "key17": "2zHGDSEF8coJPFeyh7Fxh3cXPpb7SDvLpHhYBQg2hqYaYhXvVc1skiZ9RyNBkYJt1QQ4sHAGYJAtVEb5XnaAnxbL",
  "key18": "3W7xRC2zpLPKgeJHbdmes3fnt2dyv5uvGGHtUJCTNDQa7m2R4NeGALv56SdUvzpF4HaR21KcW8Ly1ynFEX2tDiWQ",
  "key19": "48deEejgPbzNB2ePeQ4fgxVNNRLccScCiAUvcLqoFzUBJ9ikfDPwUnXRFx2Ujwhv8gVruVsXihva35DJMYn86VxV",
  "key20": "2gVBG3ZMRaZmMQ2ZTf2qGepSvjmgqizntsGAuuBDCcuCUkAo2p2stStXPMEmV9DGpKkiSo6xV3j9Bo4GxTQBf64H",
  "key21": "a7dRjL2AvkAQxhWyoDHqdHBrrQxvjTsqjgP4v2kRETRWf2t9PK7VqoxSpqdACUh3uCWomxL8gYB9ngLYgMAkgJL",
  "key22": "4jqf1WVr7hzeavpEMo457Tqdd4gJcn31P6rmqNvD1WRjNNr49kBnzFf3ogiX1ZgLbdMX4QVt8GjwtV3Dy4GULmY",
  "key23": "9R3VyDpoYLjKH6TZ5H6QbEDjhCmUjXLXcBVUKhz4CNiAZ8yQ3oEzeZwuZnqqArLhhXQpVwk6h5WhN7MzQTA7FdT",
  "key24": "E1LeStFEf3MAp4a6xXNiT3oHmqUt6FRdkn63WAR9kJMVX7991XCZmToaUjXxAxwUHPCYE2EowMYF8GeJW7LKkWL",
  "key25": "3zEKNKTxNVWPuGpmAG1UaAM828MKosuDw87jayC1fha9S1qyxaMhwofGzQnkjwNbtVCJPRCxuLZg9BMRGN6yuMZd",
  "key26": "iz6CozoT42BASBKpRTiABveg87m1PUY463sFufBQoxNKPvZbfbMvsTMy45CFqige5wNWq17Upn3TWdXE4XFvLou",
  "key27": "2dVGZqXLHJ4cXFoCKh6fKbN7FJYDF8nQKvfaX22fbx5kWHTEGdBTWx3T9kn7fkhU8du5QWaCdr4ZkqSQUVxEJvqQ",
  "key28": "4LmZ4q3dE9zwRXktpoNNphyo8ef8NYJT3H6wwBvcb6gMumEyGth54iZdMdLWUi5iEqvU2nYV4qS2sefDziEF85ig",
  "key29": "2D6ZMH71ogL9SVUwVDA2BkSZbiRPCoKdwVtyjbpKNKJrGpMjw5Vjmk1i7Ws1pMSEoBjVSAeXddwhXcKna796UY5S",
  "key30": "4hoewBdvQFNXEK4hpZAm8UhHnf8sSHkzR4y5th3YToCq4vVBGyViRkK4dSxj3RBFGWHCVNaj1uLmpkXAo7L7Cgq9",
  "key31": "5oCz3fbh4h9ovcUfpQevazkxvSdyVcmGkQNxyUhGL59ocbzRahXjusK26oqNXs9gkon1gYTe2gebLZBdJ5YHrXpT",
  "key32": "eha8MQTsC1inmExj1c4Qd5NctzugSgpjn8MFyQTRUDaGdSpiu2MY9JcwV4yujnPdA7xVUUB8Bxc1aTn1CCTLo4x",
  "key33": "2fxiRxax5Tc3bqNLqBJD6bSXoYbHuSQkV9WnftTGUYf1ZrNGdbF1WoA4GkWDWD8PdDEVeEcUB8sFtxZ5c7CHBuig"
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
