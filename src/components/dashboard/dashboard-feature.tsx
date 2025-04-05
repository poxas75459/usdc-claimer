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
    "aWEmnYvLUMDqdWH1vyZwPZDjhm8wxoz9uviLg5XktcY4aucHeTPr79tnN1qSNFP7SBDJrtbXswK2Uwv6D5EG87e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3frJUQkGhhUAA6gkvEVuwYrmPydtqaQS9ZxrCXCopEYwY5bPFMoR51nzuLbc8TgL7vZco5tGBQpcGUN12cDMKK",
  "key1": "K9MXaysh1h67fGT6hhsrLr6n6suY3deGE7oRpBV7qxFvvbakXGHZjsaKGERdd61BnrWs6XezXM9hXtFLsofzgGq",
  "key2": "4JK8CkEzpg31ruEUSv8iBSZQ9bLdG1xbxqWytieFhYezjMmaDML6ZfHLTTVfnFw4dAY6hggTumFnJvJedSf7Zsqy",
  "key3": "4sTMd7kGUQf5AZPvk2d7ysh7NXP8mai8sbXm3YEG1AUhQDXYwPLmRKAXASRWinCmwCjxbxG1fxCJh6CgSq3sYZeL",
  "key4": "dcoHcsxgNDVWKc7c1mECJvk8Hspd3ndPsDbx5iz9ATzCU5ud28s6eFjLKUUKYxkRQtQ12xQ7sef6BUJiSV5xq7b",
  "key5": "ydpMcdw5e2GHA5GLBUCPXohwL6UBwzQtcGpRvHv3i9L9b3fZ8LCwrwmc16P5XSpfL7VBDPmtf7QmkJa5Wx9JtZZ",
  "key6": "2pTdJ4ye9ovRaySuip5Jcpg9EopY6AbeGe2mXh9aKZ8jtNviCdC5TGGEUzFUimSH7cVfyai7eWfUyTESbjQb5bqz",
  "key7": "42RLHvikWgFhF14roFsefYGGCp8fKR6zS6E5qmURZpNEXsCrAxGzs8ktGP56wwiPJCwFPKTfMCnaCA4U2sa6KZMK",
  "key8": "QMSMdL5BmAGe1XCpzjCDYfwWaqd5xZt3SNH6jzMdJRKtmneYbhHjcHvuP5NoEea23ygyutC4paz5EgJBP97ADWd",
  "key9": "5GpdjTQ7iyE28tGaMcpnR7zXgJJXXK2Mzz9jZTXxL6wcwQVFNMnsvpRGFiPmyR3ZiGPxhStS9oxFEM1h5VGy6Huj",
  "key10": "3XMTVRSjjryJN8E5DujW7Mf7LEfyc4c6ch4L1XneooBuKT9eYvm37QquSgESuBoZtdk9gJhEdK7GXq6YyUkgrdsK",
  "key11": "2tUSYcHhuhiqC2fQ8ArD8gTxV1qthTBED4t1oi1NGhgiEf9BKx5XjGzt4h4LpdqQ85m8JjKRRzeqzKkYC5ZC4b8Y",
  "key12": "4HKAstrQAsspS4KaZc9kRBU4qYTaEYbJQcniKR6m3Kr3HGVdKqJGrTEq3jyy5Jp9dWQuW2KqGFr1h3yofSTHUfTn",
  "key13": "5ttcAgp3CAeQpqFGhgu6rC2VfePKPn69tGUbCyUDJg97QYBTjrX3d9Py8DHWuJ6hiVu83vsV9yr8Cea5hjajZWUN",
  "key14": "5ZGoVPPDqCSuafbxiRraw5SDZYBSqrqxDyhFw1Tu2nBUedyMdxjAR1nwc46DSFHc1ucksnAAfr4eCzAPCcUTfAD3",
  "key15": "2hjmf9njx2aP6BdZun6xTfKvHeA4wJcPLPEamzQTrHcbhkpt5YKiriqGhykWPZZL8Nbnv4cCkqiiXAyrMFwWo8BT",
  "key16": "3JHPcG6jLQF2tYt7adWBY75TjV1J6ci7CF4LJpBGgYYWioXXXHag3oRT5MFH13YcGoWeUWUQUSNeH1DsN8YeSHHB",
  "key17": "2Js8vHZdagdp9gjQQEZrk5KDfVvKT4ZcxkgMNyCmsJMFWbXqc8oTCHokE3zVs1qaEL2Rqpo1yd9N2P51dTnx3xkX",
  "key18": "3cnF9s6BUSzGBwSi8sVFNgsbV73AiuUWiszs2KkpzzJDTkNCQQC1sC5uCZUxFFQa5SspaLzksq3ZtGTyRVnet2XZ",
  "key19": "3ggY1Jpvt6DzD7weuj5gDtiXczyovRQRKMdz4fJRPywtFpuuLd3BWXj4AyatJv5n8KpegE9ZA9jkHScxHudJyafv",
  "key20": "3bMVRUaQs7ABVMEEwQUCXvViKVuRinzUJxF38DsdqwdU5AC4vXAmE5pGAHr71sQQhk6eggdiJrTzh6Bv8qatvsUp",
  "key21": "2f3jY5QrDgyq6smxaKdc89Bq5ABer5mxtszHGUhG8afNLkcd5jTwU1HtWD5jT3WMu9we6vnBXXucSM5TtMhEjmdC",
  "key22": "3sVMYByCcNti7eL45yaS36pwiWqNioCrAbwPgGL9tpGaJXs4bdQDT5vjzBwkJTS2s31FQiBw35j3uE34kx9kmsse",
  "key23": "BM8SwAgcSR5bLLZiCuvRb5rJ4GjMZaTPRHShdWx3GEW7beQc73Bawmkuiisra1vdhCnMaPVQPy61X1qK7jXH377",
  "key24": "2vx3Nvfp7nSfvmyug1YcPZBovjWB2863RMpE3HGWCWMacJsneV3Zy1yuEcNCrpaLDTjFCMdu4cFYL2RGuaFRJV2R",
  "key25": "3jyjrfMPc5B254HAUXkHnNvwurzH8ifma4C26xrFvNMhnPEAxoe7F5PLtaxkB2onCiv4P1rcrMk4SE6zakbPvHxc",
  "key26": "3Hwv8rQ6THziPpZVHTsgpD7aAYcUm6M4btohVs68V1y4t1rebVaZN2T7QThockx2dxdWCwC4CosU6ZcHjUwQ9HM5",
  "key27": "3WbwnbSLU8Mhi1SYjUTk8gvjRJ5Mq4xNf2HGPqSQFGetafkZB1mLZ5nVNTmnpK5rrPry75yWV5m7KzKjnaFUcveb",
  "key28": "MkcMAGFscdrT7jeFUFymohERQDBhURBEAefzhyc7qSGEDcVTH1WKH7YtepcQowxdtW4oHCHmVxPkU6qYhyFHjQG",
  "key29": "3cVcXfWLst8eZJWVEBNZnzYGvgeb4M5aDYA9qjLSbmcVKcdf94m2AK7S1wYHNJwk3WGhkdNL7ccGKQhCzi3AXt5Q",
  "key30": "2ox88gDww9bGAR1mBfSspmBsadhKWsjawe29ApMiNFDMi6CB5qxSWNPtPQaWASxS2teVXcDKJHPdrbViDpLYGYr2",
  "key31": "NxBnHo9aeqbxs1WBzZrxrdHjzQKoK7fbkt1xYfXU28hD1BcKkFqfY1MGUH3dD69P4bS7yxywk2jYpZ2reaSapcp",
  "key32": "mBjjrdB6zszZxw4cyqbvxGhgxGtBC3MQMTMyUwdiKDkmJGypWGsbAcxoW6cg8wV8FpyyAF1ikLbfsEFosz9a5Sz"
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
