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
    "5gkwS9tiw56jrErEckvfpGFjjSmJUFh6CikE3kWj35y3Bvd57Fv916BvRjKXqe3ah4ouFrmvwk9CPx3RyqmJTxoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38FcuDkbmedi17QLgTeU4LMsJTFUReUuWWnkFoU6hq3kc3wq9MQsMa393BNmtHMKkm6znLZfQwmtnLYfbURVRuSk",
  "key1": "2GVFPdLxSgnvgYxi1JB71n5J639RqMXLG71LLy5yZNCw6V7tMAqtTeUKsvPAaxmPoHCkHwLUhNfdu81LYaiDRju5",
  "key2": "56mqE9RpJm19HYHMKr6MjxUqgz7WDQGTx194iFDSSVhe3KmR17oiRzRbHWaZWxS2Sraqivatr9KqanCkGz6KfcwJ",
  "key3": "2sHan7fQRmrBRXRqShrv8CQE76BeuPQWiu9W5VenLkqj4XWyumQgwmDPzCSQELBoR2FPqJno9GjfEoaj1unE28cB",
  "key4": "9NwZ8fYEQGENVGk7HrKMikpSL6c4HFouU5xbpvAMkMcEiWC5vbQcBtzpy7fzqcD3JtQxgsPbbazXdgnx9NEu5gB",
  "key5": "2Si61nkqDuMS7PuxMyhmoUenJS7VH6FwvYxcxrSadBgP2ghcwvGu5P66JgrgB1TKLZT2BjYP6xcc2ctmBxG6ZU14",
  "key6": "26A51cdRWNdQdkbhw8BAiGt56trPHDrwofAqgpZGzoqhpYj4FgVhaT5hHErJm6BhPM6UePgenDAvzHj51vojLpRC",
  "key7": "4jLBnRwtAkFDmndR1BPEnkgR8gJAZeenYSCg7qe3n1FUgq4KNXGiuWSb7FpAcmFTEiUePCjyPerPHkS6mBe5TLeN",
  "key8": "vTM1dcDSbCEVAjw7hMFGga7RbKRSZTy9294SuDneN9oEZM5KiFd8y3XJvYshwfd3fVzjTBhH4gBDj6Cd4cZBJur",
  "key9": "4krxcFNjaekp1abEc37o6ybUMmVdiZsp3bqVVhmd3eUaFiEAwhpvWZBnuGzoXf3ygwxcp69iinXgQDrYwsH373Q8",
  "key10": "45vEqnFn1wLCTWtGRE1o1tyxYmDPSGrmWttAjQYcg9Hmkq69ypUpWbk387WSkHA2ussTvkPoBSVMzRevrhujsuct",
  "key11": "4wEy4C8Ay6BqmScFUr71sR6TW9xEHVo7XYmLHdtudvxMcBdiycWG2MN2c8iUGvB8cLkmECfXxiwSdgv5z96Zh5qR",
  "key12": "2oJ6s7npE4NY1DHUjfLZ8tXUUiaojSD35x35gwE572Eys9oKUusTjn9x7vt8fm826h2zfmtWyeVycxo9id2PobGA",
  "key13": "aFSEe6ERwgT4hLw6PXkrJgy3ZgSJW4guv5PnfobfcmHkydQQktBQ9AvxWbzuvbnweo1EYvew38sw5oBG3TyWSgS",
  "key14": "59pcxFFA7yLd7Hzot33g454pEwn7kusYvh7ypYcDSCP98bUTYssQRsUVgTN9PBMN8nNJ5Ttdt4fEBA3XYp75uW8x",
  "key15": "3QZ1WYLHNTCZuwWrPHzQBdsCY2NZQTZgkSMYogz2osjC5NasvAQ26maQFPJJKM3ZkWt7Y1uKeGXV51rf4KuUKXte",
  "key16": "3TYm3594VNHXXcyaB8rdNSfkJ675S3enb8662Z3BoHZmNxAmDS4NsZwFfzbTSgoztXxVhqkuoT3T6XxNPjdWosVj",
  "key17": "uGtR9UkjBvQWxLiYviSpfk1oSQu2VdmzfKZNxaziXyhjkKE1YEFtoNh4JNNJ4bAPhJudzyiviTPM1kVSqQDJSH5",
  "key18": "4isRies3DJ3DvbZfqXGgmEAZkqeEMM2kn3uqH8nNTDRxoSTe3JCH8JrYaMAJRQqpgea12j9aeBoMYjapxGCs78aB",
  "key19": "3UGcQZgRtTo1mJPnjAYbKmtvYNGGZtQYAPt4itT1DALUdGvtFQhvf77sss9A9TjW9eCaCUh9LBKoL7mrZXRMFpXa",
  "key20": "yU6WdqFknJyyvEqZSNhbJLBBocGCBoAtwtfJHGhGQzkeBjDefu1F7DLypW71qoAwNT5RRZvY3RGUUMa8ReT3MnE",
  "key21": "4S7kuwyTvey6hTnRHJTw4MMY1h1Xhfa9mjdkJkKRNQspTxxiz6Cpok5B2ivsrCpxFbXusgrbnuTqTMJd9SC49VYv",
  "key22": "5H9JdBCzEGJjNxsvA8mNErua5ukFfrKEVaf7sVJ6dYYKAnhr4jAhipTbSWuKrqipbWvEMCDCrd84o3tAxMU1Vwer",
  "key23": "5bmMjPjF9FY5xhPjJAW1RoMPgGiXhDGyrkmuFHtv1HT3ayhSpPJnCXhJi7NnHMSsyKCfjPY2R5CSVXiErTT3beEU",
  "key24": "ZGG2vikFy5VgC3HyAvsWue3GrCAFXZsqntaA4odm7cxJAYE51ASCPjjg6DeHvdmv5N3RJBPNTkLjedVPWJecAvf",
  "key25": "3y9d8CKBvibHfZD84aXS4vYCLngiH3zEe8KUKreGTSJ3KtqE6KKEiXRi5mfpwKLSjeVwbKiVzJbA5ZXAaJHkxjTn",
  "key26": "4h1u3fWCuHQzW8Vw8H6xi68VYUfmRnjDAzboBaJsdLhPsgTfiK4HokzwjpEZVGaUxsxA35bQhibVfQk1bTtJefGV",
  "key27": "5uSFERSwgLLHzM3iqWi355YU9Bh2ML1PzGVoH5QCyL25dE9Rn9afSSmGF9R2aNfHJoUa9Z9r85Bk66CJrV617YYU",
  "key28": "3qgTmEzH8GibYvknF6BHZU1zDsfRT9fsKHMy7X13MTWJHfPEMmKJJFA1v7GpPt27mnvH4J68Q1KHRpdnCgJcG7tf",
  "key29": "2MynWvJird4DCSSCo8mcPgDkoQ2eJMCGzMSRxRpp6SymMfWeKwp4bNC7NU9RK1cxP8JsfooGpid9zEw5D5DSv3JL",
  "key30": "oXGpGkBrRhGKsKQs6RUBrSh7BAQDkW819TdXXN85YBRbfpUvP82V8YLbtwBAMtxAwD1FBqCYPG8Px7soMtoQA9C",
  "key31": "3axk8avWMXYyiqzuQfGtrm3arJNGMP2gZkeckYA5VFWCGjasM6CkmVS5vCVN57QXFsWjeacPimk2Jok94y58Z6uB",
  "key32": "5dvDchpY9ycaSG6nsmsvKmGhHb4YskTaQsFgnXbTkwvazPGDjPPcQeWGF21yqgeoyCEVHDJqAbBQj3zEjAtYzGkp"
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
