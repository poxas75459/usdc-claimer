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
    "4qJ6DHtwsBfKb4Cm3An7953gLFRngrL7jkmqc6oq9uDjR2BeisoG9xzy9A5YaJ1ScFNtwgkoHLVVrTWykQ7DJ9bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MASgz46hFeWZyLf8ESyEjp4CPijXkNb8xUdX2HVxzGi8B5ovMbsxWCnkvV2H8ppXhRqJnGFC4eDvdhYnQCUvdSq",
  "key1": "5m7XMQXefT1Ni331tAnNGPBWMLPREo3k4GXixkXjXvrnBmw6xA3mBnF4oLipXPFtYDkygzfo6mU4PDcwbpYZy4yj",
  "key2": "4mSNmhJcU1yYhovS1ZNGcJ1Mt8PUjmibhQMnXc4knBDmEeBrNdJyoGZgdc4aeFZuQbZFefSsMtALpQhkgQLCFwBv",
  "key3": "jRNFS8AqT3tbvZ7gsZrC8Sa2W6eeEhh6WdPz5PUYaAKL64QPFFwcaDskwWShoNRfWP5FNUVGehBCnCRBRmL835s",
  "key4": "4Uby7gE325m9Q4Z8vof5yrjZN5bMUHoxvdvoq5pTmsiMRd1rwXYWCUKAGx9GYiyCgnzvyrCKBFrHBsCdinDdTPFn",
  "key5": "5DdNbxGrN1NfUHxueaV13uAiAr6vMQyLYwV6NxejSESh6zBLaJipX3ZMV2Z5AdfWquPL6scMh5pTSN14TBPiRyqL",
  "key6": "CbeCunx19DhLKv1fYRn8xEtoNetyoxyi8kZZF98NSGbkR2EeuMyB3KWK7yrqiiEc8dTsY3ZUH42851YQ3RiCZQR",
  "key7": "4VBJecPkofBnveohXUBaXtn8pbsVdQ5sn8DcePTVhx7qbFnmuVWyqwSNi77fRKP8cvLPTk3h4LuP3CkMH18reqjv",
  "key8": "5iQCDyBR3c6GAjmwfNbBu1341XWS9M5KfFX4DuTFv7mAahLwHEd7bkNjDRuAAeacJ9ze4xpKW6WMU17Xg93oAnG5",
  "key9": "459mhMkWEJT9U5NDn4YKmXANsU785g4Es2gDAhsHUjuyMWZGAFZZKfV1ChvR2WpCGDQBSePAgNouyctucDmxwkqV",
  "key10": "3vEvX5WzKyfHsvfXGqwB5qNUR6HhTQnmZ2B5sAjR6LsvPxhiEVbUFHs9qVrAwRFCQYky5XoMifntpy37EyhEywNu",
  "key11": "oKHczo7LgPDrzGHGUqVbvDSQ8j4aoH1xhGwg6eAfwBctdrdnxT8uJnKW9YvLEFuVoNEpSerKS14zMG8ovDbdB8y",
  "key12": "4jh6yWGzPcjVXnit4BJ69YbpM4cx3VoxMTjF2CRLSoURAtNMozJzfdMTEGzczEXvdVJsKBAPJZUUqKaSZbqmn6M9",
  "key13": "NG4hBF13YwArZPbBJ3EHqE6gyphQcectC1shoCZ55VcYsvrXRNmkSRnjzKJRrkQxqZjAEtsmohs8VeMQpKLigtR",
  "key14": "45oZu8nEYbdGy7n1KKR7nsKWvtGYsZuq1e6jbew5oBzy47yZVhm97AKskuH7GUh3W7wcbJTdq5HNoGccJBonsio2",
  "key15": "5fC9MzFXvfoMmo5fVeWT6tUF6bTpazA7FvYnGrYerLvZnpY7wC85XE8DAg3ygTvcDy2N2GgHBnHG6Zn6z6uFiMaD",
  "key16": "4JP1Ateeg2M97Ak3N2zFJnWXKzf5RAYiF5dXBEU3ec4uPPq67Sn7Hhe4dGqwkoA8ibugxBsZ1ECdQ5p4XhbhckUK",
  "key17": "ERE1UDYGJRA9Pw623r3xkt7hKWq7YXrmhd9pxzYCmFmAMnCgaqB2TQc7Joa3j6PH1EN6J6ja1f5RXprXYbgMqWr",
  "key18": "4xXKYKyiTaAYcVrL44CiQy5aqLAqBHBy15xLuUyQiD3yE4xEPUvvDPsqj1B1WmAJBG81dGCQauGyAwo43ZM8Yq14",
  "key19": "5Ho39ivsgZpS7kT2tPwdYzznz3HvwLErbzwvRi3etyo7hXyuFn2pEihVwAijud73msWyZRzzMwTp1McFLR4SEXVe",
  "key20": "421zzuMEuv1n1oMaHAAymCEMFpX5JMn8V8VmyG3j4wEpLSMVsjfF1GwcLWuHwN7m4X2cYbDF3X561e8Aks4r7XTQ",
  "key21": "2RWtWuimMKAhbXwsz2CXJKAgzN8pK6J5UndZ5QJ1HSeWNpscnVRsjBRNv1LYLxkHSTaoFaLZvAMuNTMjccHX8j9N",
  "key22": "2GbDyT1mEaCsLt51MuGKisRjw7gXEEMEn3gHRC43dMBUitR5vtZSP8f2qEnX2dTpX3G5LpKJdUEZKbTDodmJvVqb",
  "key23": "5YHQMpcqmaRa3TSqidat2rk3T1RQ5modkMZNRfpKuK4bNwSuP45EQXbCHo7yG26bHzUqyJ4U3vkNrLdGFC6i2dZk",
  "key24": "a9gj2ru8ZBuqz251dtNFXMAWciqaRvbogiW58fMxwEaEtpeC3uvvMaTLH3o5NhPE7wc2cordQDzy4MK5Lgtqo1L",
  "key25": "3XnsRB3h7rKLc9pZJGWSG35yrAaVdyDQHo13wwaSfR1gopZaGZUWeJbKPrxYUvChcPDu8P9vC1RvA87M4u3AhWAW",
  "key26": "3CZ5Fj1QA42qAqsset2UVfYGzpnwEq7fAZxLqhBT8fBcB6Y6cfAxtghBKo4AUBi8G3fSinXqXRyYG3A65oMVvQBy",
  "key27": "4VLxmazC2sCsFM26gsLB8rcd3EqzsTxCEFRxg1oqpoJBiSFTDkDUnpQNGaEAQWNGf4tqVm7Wi8k7UPW3nYri1YsZ"
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
