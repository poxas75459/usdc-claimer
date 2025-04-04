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
    "5P14QJW4QbvKeYQ35Zm5VgeLY9oDQLhhEZnEA8aZ5hcPH2rSQruc4ceX77fAjnLkN3ia8dqvY4QojzndXCqvkY91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NG59ZEDi4N9FvF2JPzxsCjsLnQqMarkVXQtJU644vXoNDewi9V9RXgzmFUzAE46YkeM9DFB78aXe6kvfAzw2Ah",
  "key1": "34BTZLHS57Mtx2axH22BSLCsMugXTrE6LJKYVWLLjXiwzhdL2wa12dtvYu3go561uW5CEaBnxyYpUL7wZcV76bXF",
  "key2": "kHCyPTsjjoeCfa1Z8k6UMkQ9XEx8Dy4zoZPBdd31ARxg71MH7PNKwgbBCAQFC5x5DPz8kKMx8cbP8tiQoWZ8r5t",
  "key3": "34ih37mBYQAePgBijoF6p5DL9s1WDJKE2zXKqwqBCDLApSxsHRX5UfDH5DqChYczuPHzPw3PXWs8Mxep6ULsVNDH",
  "key4": "3KLTFmXggKFjQ8znHEVHipma4EZh3hUsCWWc1Ajhpkb1W1RdcteVFz6tHnbtzoAPRrLZU9eoHxXi2PURPaAvjAaX",
  "key5": "3oWyFok8yJBqs3ENd71Jv8h8UovSn5GhSJUMoF66f9ht6KZqHBcZWd5MakNAiEg24SxPjZRDL8ZFzk6xJVqzRsTo",
  "key6": "4Msxvzn8VKT766Bk4qx2NMcNp53yamzWwNoAnG4k1CBLBAvSdYgimbd5BoerLVNuzWTdUp7D7oSeuryN7mh3GfEm",
  "key7": "4G7D7kP5oNvh67Xi8Vi9w7XtK1n6Yn9Utkt7j728s8kxwgrBXzYMy1DbnJJDGTSosNYiHGmyT2c3ztZ1RaQB1mHt",
  "key8": "tKjrEM5dKRmuGBwDq5dr2kfiCpbH5m6a5Af2dYCnhHcManhcaPcLgQAt7vRoYkvG7P5tUgZtD29Hxrbtdb7Yrme",
  "key9": "7Xe68XJgfpoEFxNetkGotpvFvueei3CRSe1z4857RQCSc48LhAPZkoUwbWE3Z9aLcHA9gZTBZResPR1LNiLKfGJ",
  "key10": "5gGwtBvKK3bijcwLPj5isjQrwi6AAUoXXAaifYwAyygSLHGGXisZXLbjygggRqgCgdGXdbcHYuMEfU4y6uf44jVy",
  "key11": "jf5miGeKezj21tJ5nYFpQ2EkeRjYDteJ8P1t41uGNFp44Pdxt5ufDrYQsEWyUSDWRT9yEE2Z8um2CmRGMbC4YgM",
  "key12": "QiXobNuToqZaMweQtVfd5CMN4CD7i2zxurqfUPfx4Gd8LVt3yqf84hz5ConGKAWNrRNEXf2mHDLNBBXHmUBnNz4",
  "key13": "4P9tHPKJ5MAEDS2xry1GUwxeiRBdrjMHWwpLXg2qGAe9t165axdZ3pd4Kqtt9UM7A42zEDrtmwdBPeGjPjX9AnRj",
  "key14": "4hgrkV6RiyeMWPbNdfUviZuk7vd9CDvX7gU8ZDCh74BWuBS6Mi1tQ2TTHgaqa3gSHg1q7Ro1SkodSJxtoHAqeyUz",
  "key15": "2BS448gA736Gb1PruBcYhNjEd7RovRz2HyyiJSSUiioJXdj8wMLCRGruhcWNvCCXxW9zgMo73tX99HJnyRFDmzz7",
  "key16": "WuJdWT5Vdtv5qVDNP5cmYWjCEVF6tBKKDXYwnsuCBA5jTsn14fYcN1aGAsJb4atxKx6qCekigvNsrRazhiKjqSX",
  "key17": "2cCMquPwnfxs9k3zaWcXcmcAHRrLz5KymP9hkBxeBVv1WYYJGm7YpxePsoDRUwn9V2ZQsYYibz8dY7tG67kWtxbm",
  "key18": "2NiTNPDVuKQTEVsEsXu5wydpbf9GheRTf6zt1YgMgxxqgPXsZixuJ4jfZkE3vvEo5eXer7MeJTx53mHDZiJcA6hQ",
  "key19": "4gnJ9RWDBk8uVEn1qGSguVQfVVcXg3TAit2BQiNcowZUDdbgMQRMHBAKsTQFWmtfxx3jy8TmqVWtvdJXsNPZHfy",
  "key20": "5aHQu6drR21fFsZAuW18aUpJWzEHf3CtGoaM1jorPnEHB7ocXisZDHwvnKENu3xxLrGYcDXvbixfYPUeFo8HbAmb",
  "key21": "4NYnrcMg1C3bZdKw3ae1TDnHhAwjb9mPUWmBkRCGPuXWCYvh2iw9CQ4oYTMH1KvemKE5XSbQasJ8mJpQeaYK1rtz",
  "key22": "4hiT4R2hj5RRxMKCkVoZ54bS5G3qPQhHx62qzBvRhcfyWmHpWsJw3RbdYhP7XUKM1pPZuzd6XNy9fbjp4Ffin12z",
  "key23": "3hczKehBcNE2CCyy6pYsYUWBJSLC8WjzY4p7cXPwgC7gU9eHWCGDfqRjKWx526C23zNjCsHsTQqP3yorhVija7Jk",
  "key24": "3gEhos68fERot5wFxXf8yWLtrFuFNgUrWknXX2Qu9u6nuyeeCVMW3PvPu6JFmvPMSmoKdQ6hjGhryj7BkpxGM3ud",
  "key25": "dGXgj7EHE21pibd5zVxF4MSivDJuwqSecr3HuM34S72UBek1EAXGkoVUyhvzsyXySoDtDQWyBe7PZWWb6tCt5A4",
  "key26": "7QCd8C9LZ5bTtm7LPvQs5bqXaUT8ZnYQTLupQX5k5yzDjpc5uZRUm1UNEPSgR6e3rCzBexegANNXSDYM9CG8XT2",
  "key27": "5adH2TvejgGL4JQ8XN6FjKqzhskpPh2vbPnjKFFPrWsCiyot5eTJM3AYwBS92Fq3KHrG4W75cuvEpQg5sHjeAr7Z",
  "key28": "4JgPaGc55Ev2By3re3DBJNpriFktquDdw73rrgWYYwunTN322ToZ7ydkZYoF1W47JWgpF4jepXPcL5xwjGqCzmqd",
  "key29": "3BLaLkjwKZeifgKZQjEf9DxgWrqdzfC2vJBLMtQMjcCeyYjQHjiVP8TENNi5ANYkDYCcyZn4Py43xHQMWU5RVuwR",
  "key30": "4NZKj69PvCfCfnCUGEBWcGJtXy3HBZzr49yZYcWxfv2sHwc11zu4p1RZ4DZcix28aPYFE1fdSGo5CqPz2qb5kULu",
  "key31": "5DBrbXpwutxGA3VvEjV1EAJLbZwnpJtuMYmcP6KLw45dyXsr1fBECaYxoT9GY5faWuAcgVkmia6Zpz8WtQFZHtin",
  "key32": "5ueQsh86WupiLcodynujUar8zF82TYDQKa58zUfZEFhKk5F1jtqFdK5rAaD4LVc1jCXdWrTUJM9Pd3jvSq8tNuba",
  "key33": "5Q9qyXZHsCn7f51RQWgecAj6f3rGWZQ1EqCELAxESAzNXYHEPW5MLf87soWoRtozx8JZvJkuJhLAKLN5stbnsXQK"
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
