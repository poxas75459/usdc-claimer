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
    "3XLcECfhvkytXF8tZh8gQiiSDeEuG82C5C24jLyybtLq2xYnu2Ruauyj9faLvn1toWyz8V3bjshYWC5xoWf3pf2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5on8RQ3hPbHNJJuKAXCo7dbfXMPre3tC2TtvXBQMmvm3zSen9ncUwRicDvrLXHKMJGeHCBmKMPxxVUWJc46wDzex",
  "key1": "1BhTh2qpuYhY1F1RzR3FWHbfAvaiGqovve2it8hVbUcEFwUCQFXiXw7P5mnWfJQV4XPNahDJpbzQaYYz64hoxNY",
  "key2": "37EUjsT8S2Nmmu2RxoxDF72BDqg63iHwA4aUfeuiSJJSq4UQJdxFnz9kN2LQDga4PVVvfe7H4pbJBdySEnPx2uYH",
  "key3": "3N9fqbKGiXFBZAJLcTJByBmCM4B545J9X53bpKL2LXhUPwmFzTdjaCrSoAVdBtnMm7kt8WSHhJeC1TYShSfKbV74",
  "key4": "YobvMvAXb9LBjtZZpEYMZUV6oWwjciewnvdeQPdt9PYGazLGHdao2DtKFbaGoe1kYf7kQoAAEhaqqF51fBd5Han",
  "key5": "46vLmmnpe6c858ecv9bJwdNYGyvitsFkgxmJFxqMB36TFuJE2tWDjMzcBYKD5yJMyfc9tYUBfp8L3sfdEVLopJUH",
  "key6": "3jKobA4GLPmxgVWxVEYTyuZWhRwUCtstphsLpUH37bPnZHXEKmT6jPtqM3GzkgrVmrDvQ56rvKdAseoDPw7u7QtR",
  "key7": "2YWdoES8iSR8nS2UeUhbi5vVtLB4tMuhSs7pCpQJdaQYK2Tn4Kms2eRK4YgpeLvcU1bWNyg7xW8naGnHkGmeuvwR",
  "key8": "gcLR3KvrUMMLtQPQHR9tWVSvF8LorjVApc26Le839Z554vPL3RnGHNYKfHU76XRpXfs3WSBeJC7FkP8ps82rHP8",
  "key9": "3iNzzEPeS5rHNuQQmCuWZokd7Q163L1d7Lf4bPd44NEyWvecQmBcdwN8ZwA3gUxk75rAAHy8VaYpdiRSrYRGfjEz",
  "key10": "47PrUycpTjFH4Af39b2SWmDTkuVv4BaLtaqsWcXYa8hDcp6ZbVfNCemz3EXVjnHGqYTXf9TsWfmUuGuNNYVnJcV3",
  "key11": "UvpfB9FkAKoLpE54nwG46TjwDHySGEd1qk1Pv4dvqTAu797qzdGVkQgj8BN7BiTh5dvE29Zp8RiuQuFpSBmbeFZ",
  "key12": "55HDErzttUTvsE41KVd7fp6RvDWFF4dGuLR7rGAHaTwQfm6WRoD6q55RNEGqwYWpfidvBfbDBakvnu3wc18KGQZM",
  "key13": "KME64ssoZhs4qKtsTUvvaZe266Eou3UZSbSChdWh1WBS1Nj4FEZ688BNxztqqk4uziB7qNRE1QVDY5vWEpTFK8Z",
  "key14": "3zNNDEtebwEWbLVNbDMCKBCJkWfr1XEBnTrzDGZVF8JeGXKbGrED4pRJ5urWKZHWubTYXZ14uD5Rn3GhgscCwMXB",
  "key15": "2vvhr8R6ZAVAS6hVpJycV2ZJpzFe1xGYYCH2wywmzJTTYyjomxoPm6iepJcz9phrejU8wfYhmpGFapsswnmVpaEq",
  "key16": "5vvySD4oKAxV3aArWRGcKcuUtg73uqYiDVwtFCJXJ2ZCY2nFRfwfPeN3VLQV8JzDe28a8uLCfC8uuNxvEHqkTeSG",
  "key17": "2qT9D5NTkXtQQSKpR1ULXQTkq6WVjNEQD69aW9FKMKsm3w9npSd9jqw1FGiF4naJMqWMe7Q2Yd2fHaNxRPttkuA8",
  "key18": "2te5mvLna1QdRWe1wc2yRvMNWD2QDwsUkfXNoRSubkXx9dqCTdAfXXde1yxjwJmSvzaS4kZiR9EMQEa2vGwyKUb6",
  "key19": "63vpa3EkBsQWCCNq8Uu6RXTMTDvocpXCsG5ma5T5NRcu7pL9qRxSLMQSryHRL5TPCyg55tLWBURZQC3qbxTJBkSJ",
  "key20": "5d8vMfsNsPfNEoueE2aBQfPjZjo6BBXGmQcTgAkAmE7aHmYcPrb7CagmeteCHNJ3JAGvGTkiXZEPP98PJr8rYjuf",
  "key21": "5fZ3tLH69KgTSxfAqBwuJpr4mX1PpL6gYN8KDpi3vSJJSYkj883szqTMosuhMAadMYdz5338APuicvvM4uoWLq9e",
  "key22": "4NvoMosvXKH2C5Jipb7eq9QkGDYuGvX1eXdFThH8q4xftYr5ieLkCfHLrxbaCzFriVZc5Ku241H5N4byeSGxnQUD",
  "key23": "39UcfkyPYPGKyMFdPSQybTTSnJBZfwPQiSU9DGaaSzxJpnspBJGeoomJyiBVWqPeNtRywvE7NT7vi5hLqbqT3aUQ",
  "key24": "644Fxr28m7CghHojjCqtkZfqt6pfovXXTjnGao89DXgNV7buK5uaw3JfJzoXHKqJ9uWbYBsTgdG3gEUVxoTndWRK",
  "key25": "4EBpKg8PKmvJsc1JCGdix9uJWEgrYRw8M9WzM3by96DoWWRG43x67JBA4uzhZKeoEcFq854izZZF6p9nXSoCHoF4",
  "key26": "2wXTCuZoEY2xkQaqRk979KnFgDdTZLrv1ysvFxJmxZGohKBhfKJKGggM6GsmZFkG5sGcX9u38voZVWtimYNBu2Cw",
  "key27": "1ocptKV5C76rVk5WZSxFP8EAFN4qyAGkpTDLYVMBDJPWRAixbS2rZtGDR4GinKqkpPxy8piwd6kii9PU4rcnchg",
  "key28": "3j3K6zLEShg9j6hd8DRGhnmDkmmWY1MRmEhaBR6grQJu1g3H8cJSMqmnz8h7wukpU2jJUYAYHUPt6qAzsskCnp8N"
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
