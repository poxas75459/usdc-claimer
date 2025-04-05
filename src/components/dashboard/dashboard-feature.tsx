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
    "4tGdsxajiGJRarkvcYyPAY7FtbB9QzchxYkietRDXFrnJUTW6ZoTiMezTpK8Rv75oHFHJ9YB2WJ43qmzRSpcd8mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk4Mo3dccPqJXuCo9L2k4oVPJ96F18TekVKkz7FM2eXEzWN6JG9XLsXcepZnyMKuk5PCdQuM3SkJHhycze7qom5",
  "key1": "6XMyGxRCdomr51pYdHjtiKWMQuGK4WaVULc4bRyVLL9e2DGn7k512B3CnwCxWRE67bq6Q5dMs8CqSYNmWnvpdnE",
  "key2": "3RBdVbTqe8yWWxXrsr8SGrxoX5rWczHDm7hmr882wpzQk38xHnuy5zb6Pd47hZyMHUFUsKUjFqcj7vPmm3hXmPtJ",
  "key3": "28iyx5FDJ6xF4BxuFs5wB5xVxwqwcGkqohj3efpKnTxPzPVvEM62jHBHC7AN55moswWbGUYcQvvk3btYxZXCeU9Y",
  "key4": "jhxzTidYzWe59d8kBGm8SjcBaAfTUHGhqNyVtcd7c1KpLXKZYaeQyVichqhG8bhYzALs5JWafEasruACdVpCAqT",
  "key5": "3s9jJBhk4PtrQtfdVyP28rvGvVL4nCXbxJArLa2MzmPaFXSfimz5fYkzmXxNEiQ6S84sthb9dCoMTEu5EXVBG3hU",
  "key6": "246GGVrbSrVQ1GECr6NCB3eADrB9JXkHPaZ6P9ZkoHLmTvZxHGVynJRU24ikGWWPbJ6S5pqTht5FRizwALCS48vG",
  "key7": "388dKY7vdEAQPcJ7kMPfbR46AvGpnAJfZxJ17RFWNAZRjfCvNRHeU5s8cSc6qKEJRg4raKCzSGUuSdKeWosqmdCB",
  "key8": "2F87dxE1fZTy9QDesGzLc1aCJHdRe9dxLnk86Dv8tWWmxTug3nMFch9hVQTSUZGUXjk1FH4p9yoigHLckdoADuNY",
  "key9": "qvCjKJm8jFgtcBe9cTo5EAUXTS67DSWsdMn69wNDxeLz98W5eJotDL92UorQ9F4BXjVBL26EsuScFXNVKmJkGAB",
  "key10": "57XXqjpz97QW2EQNxXwXfpZP9jCKwLmKYitMuAoyTd5dYHuTer7mQvNrvvAZ4txMjN5wBWmWMRAo5VCGeH5PcYEN",
  "key11": "61CMFmx2AQEDFBK79Z6fT69d3ZxynGLUjabftToWHf6B6XkjvxAT3GrvSCCdasUrCbrmrz9qdqrm9h8FF9V1rQBn",
  "key12": "4zodxWcCN8p3KQVcfAteZ6HNTdndCr7jT3inSxSDXrB3uiYerc2bETPS6xa7Ue69dLEsrQS2iJEg7BtrRKsdXUJB",
  "key13": "62Ws7L7yppeRdS6gAFQwVYqfMBHmw68rCwARrpvYTyNFhtiD8CzgoDHvjZr459QA2Z94TvLar2sZHT7GHpQ8KpJR",
  "key14": "4PHk5Vmie61Ze6ShWMDF7rTkKDDiHvxobCTZeDEDEZymCmC7X4Dzz2Zy7s4Fry3F8QNPqkVuK1S2tMgnpK7sGHuQ",
  "key15": "3MhVWW9k1esuxgektZTfSUdUXsBD7ax1ZcL6NJ8PDjnq6owcakrPEbwtf1Wf7efMdV1qPMgb9jNSpUosd1tbveda",
  "key16": "5rjX8QqdWaoLLxNXdqRPkYv3HEEPKu99ftfPGuZJqxwwMutFLV8vqyTwdSd4GcYhJjpFZEZZ6bZhVrw8HMThERmW",
  "key17": "5XJ2N6tPpUw49iKAbkLm7owNUbFBTi8f3rTv7pFtxA6BCeyeekLYjWD2HWdZMWMiCUpshaCkT35JiWWg5ZZmWvQ5",
  "key18": "4pnZPArForreVHV3UoMfMgz8dx85ExwuVCHcnUJHyVew33c9pSKH3mSxCMbF9pf6TCNzbPLofprBifEPGdnYzMnZ",
  "key19": "5eScByRM5J6EQUt5bSWD2bHMHL3x1Z8Ch5CYP6UgvmjQcRuDFPAsxHcfG5FMShbEG5nmy1ARJkg59x7ZsD9a3mv4",
  "key20": "3rg2ybcLnTgxm34nXMQMKfDrPUBCZrBPRMs8JihkyuHkuH7wNbFbR53UVKyzh9q4DNe9cU2riCDj6Cua3bBNMBRx",
  "key21": "5xxeSSRJ8qg1LPWCfXM4EmR5tYqX6TetM4yTduiY2du9Txqkx6Kq39zY3nPrS7ZtFMHHZW4qC7mD4Y8f4rKsHAna",
  "key22": "XxH4Fa86SqQA1JUpjvCCD2oF4KTWr54u58GALMccQ1yXYfGYrZwEjzGiTnUKkeH9vQq1HK7sa6JDDAC5cyWv8Gj",
  "key23": "HbdpKcxYwQxeNaDoHM85isp3i1kfFXKs4ZL8ZyosWSvFab9JxnJan4kLnHsHTSuKj4rVi1P8pbqJNH2eGtWk9Ng",
  "key24": "3quc422Ju6DahFHKNTwtTSRCMh7qnWR29REvGmqNUYUAHYNdgTLGUdJwDQYpeUankQdhxHeUxnx4nAVW2Qsnf2tu",
  "key25": "52kKMe3XgDvreRrDLa2tTs8axDxtHyyG4oyR2vVWitj28VdUDxSoHE9P5DokJYpQw4gm5cq546ECqdoMFYumV3Vg",
  "key26": "4Ey5Vp93ibte6UvdnUjQZSgf3GAsi99v34Kz7oACV45CRbcFYZvDnF9295a6UE54EX5dEB6wAf3eUn1bXQT4Wszp",
  "key27": "iAQuk9Pbh8mwwtum86YFgvqXWBfC9ubnPNWb53bSTBELcKewzUmSqBmCPtHJv518pYc212UxBYnbEJwqwGqwN81",
  "key28": "2QDAeCZrTY3fJdG23Xap717Zyhumu3wVwmDE1JYtR6BXeX28U5q4dpjKkKwAp88gg3xnWcgcBP4EckUnFDAqK9QK",
  "key29": "5THSShtSVWedHtpyuyQCBb1eBbyFGXEYxhP2S3HpZYiurCQuaxGmXkv7mcRz14yrSByLoDs6aXo6HkDxt5vv19LD",
  "key30": "2S53ffy2LFgghYwARkm9vfADzTNaL4sLzfdLPDppZB5XUyjCkxBtPHRdc84pPNmZ9bEDznujAFXWbBTbjpJBUFcw",
  "key31": "kp7ZxrZeYHDv2StRqjSyE3ARLY4mfAfxA5b45AQdRmjtCeiX8sADw9wyh6M4nz2sSc5r3P2rD5diW2tT3tPZTRh"
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
