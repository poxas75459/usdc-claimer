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
    "5CMyAJp2RuXTGgHd4Luoj3PviRdm1EtPk2i2vjCPeZsWU7RktSe33yrMfeyfZ5EYXz8q4V8BwvAWKjnUFvQP76WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "629SZUAw2CB99kLGMBkWQ78nhNQShzange1KkgUDXSf9hVPE7pgLNkN5GQd3riHUQtRt6NnD2gLpEMWgNySQgytK",
  "key1": "y3ALD5Xgx4Wh9DHfmGXFspRRacfXcRwJaUSFcGXPNH4CGE2Enwe7sxbyiFVTq8Vwq9m6SnCy8JfLD42KT2fVqDC",
  "key2": "vte9rczTyV288YWv9PnBC9ceKsK1Kcni8BHsahmLXUzPSJFF7FUBsmi5Q66pcUesRFvQ2p9JBxLivLYHDpJAri7",
  "key3": "4CQtpPYYqt2jA6eLYrvFmWYdrC3KnPGDwSVZsCxSMt5wECe3ykwUJ9vZMGs6crWjg7N2qV7WmBjUeT24sD5UMEqv",
  "key4": "3u6C9dk13AZ8kguhXCVXkTuPFyhTefL8H2scugdsshZvuUCUwB52SjwF4bY5kyRnAQnBZzAqj8yKkdqQXYNsMoKa",
  "key5": "53fP8KBPntDv8Whf2BzBJrFqJ1QY2xPcrxSQBaZTwirZG2zdnXxew8JnY7Y8tKPtjhNuSg7njCf695W83T8HxMbG",
  "key6": "3Ht7wtXHznsz8M8yEvZbPfRYUfqTcNr5kTKvnAcr32BgYcctncvPkrWnPASMF9753hpUPfZgPZAaGRH278xbGoku",
  "key7": "35tVVurx2pmUTr7KjytVYeLRZDHeuNLVTRGb5AgWowFU7TYXko5mKVWVkz75GiQnM6KsbimSfB8JWzFXc93XVUrK",
  "key8": "SPXJsFuyM5evFUraSJWcPMdmz4bwXaSPg5A1GP6WCbrwRnTzYN2sY1EaLUYGPtT6AqDKyUJWeb8ryx4QVcbZNcm",
  "key9": "5gdDmGzRsovbpksd7SuGzWkQ2VMPmNU5XstLXv5gY5DgrKnER1eKJi6hpMqGoFbRjC1bvdGjt6QazdYvKvPTEjNd",
  "key10": "E5CcFeGRSZGkiwafGVDkjiTBnoLqyJ2WbPYu5Vo3cLwChjdaZG4H6DbcJVw7e5t65oDMQcNXEmeJXaFfjiAPP5o",
  "key11": "54c5zrydAVCMQPuwoKbReQjTRDKs5k5qYQVBrW6PUv7VCAekqDYt8cDszjb4vkiHizZwUNDi9biS2jMGWXBZGDzd",
  "key12": "3GjuavjqZAj3fji7YVCg72e8j9papSFeoFeiNYkMQioLNBHxZufoHUoxLrXQ5R17bJjQEgcY9xcbAM4fuHqGgHM7",
  "key13": "eMtbutxe48daDj9dvfARLkNvTAxyopAC9jY7pucAKWMfv2CqosSmUCRXnwixuuQXHiW1xYGjxZhXBADtmcagPdE",
  "key14": "3FpVZmaWwR6eQXWJePdnMF6qTA9FrQ1c4y4fU5aRPoSxpAinvFTEXoMLpmNeZdsouLNVPubmKzdCQJxBQVEcAeYD",
  "key15": "acBGfauo1BFzZmEnm2Pe9Hc96HXGXBpwiztYSMMokfvNoUQzJJmgzKRV6Fa5f4VDwoda8ng2a14n8xDiSiRRUan",
  "key16": "vZ4atcvi6ZkBbHGFKR1r81kK9d4wdZLSBr3WnKqtCqNz6eV4shw44kZrcA24zDDTrJr2LFYi2chphKou7Hyd8rE",
  "key17": "42YEtqG3S7Mf4C7FVXNotLrxbS62mgMGqVyuAhvnu4HLpMRCLu49LKyq7xGKuXUz3t51q6nhZ6hhwEYDBnYLtvgn",
  "key18": "21rjPY9268msEmsh3RmTQbLkUmGKcJKCsqXc4Anw2Uq3QkP4BHCohcjM4ug3QvoZC81Nfg4G2g62uzJYCnuGyVW4",
  "key19": "2RK44o7fiUhnqNZfW2btwiJiTRo4nsQ67cFgQmkd9HfVZiYKx5CuNaCeR1mfmERYGMWM3YdcV5ygp2LCjw3MLVJa",
  "key20": "2ZLzQczq2UyfLj6XtzByVF654GGHREiFqKxdgNQvg7CJ96xfRVva4aqzaPsgGi5oa7gw54Mv9StE733efSAe1QzT",
  "key21": "4fECzoP1GdDbSDn2hRxkLQNTfcbjWEsM1pqNiPNtMPKFkTKP51EHHBjtewFYHkG8vth2VEJEaxzKDTYPhK122NeM",
  "key22": "4kzm5PV9HKTdFjonzpi5YcREJ5hMmEUfffoWKtRVUA7JuUrzBX6ZK7WaXVAm47Yf21XBrc1nJw6m4GAxMSicRCVD",
  "key23": "2dGwxT7dDvg6aj9Z2g95nEPBcEEgDjx5yrVidxxsyPCxnrNoJsdPtn41UQSQYXfUnya4t1QvMCJSWpT2oMDG2z8H",
  "key24": "625ceEdSPNSFBLiaHRBBkwzcQdFsDQN8ug695LEQqJEM5SXV6pwnc9cQMsHf7pssErwsoGtLx9N9bKpizQ4TeRMM",
  "key25": "3ikbnnkvx5kpmdSq9nsHECCc9Ex3tCHkXQs7qgnqr73s8y1w3hzE57XntRLf2XLqVXzH9yE8VJHZds31cNjhQHar"
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
