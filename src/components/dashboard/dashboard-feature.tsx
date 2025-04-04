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
    "5f7QSwmuW6Cwz1MQoZ5PY85qWE7WHXp3pjJt8VS9F7F7EzMKdnnfquc2ft67DbbK56Fumr3y6friqqz8ZXmDpU3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcoHCFnPJAAGHGHwUQwNyktWeBxMmPsWbLQ89Ry2xyHp95Ta7ayvJyvhNJSfaiAzANRZEqmyRnRmHgyqURaW5Zf",
  "key1": "5ZvJGrKqxpzAvAQaw18cfgPmG9ozt3gcrJ7LM5YhmkQYD1P5dDD6mg51QQK9xwEB3w1oyLByDKPq79KLUBsTiBJN",
  "key2": "GMGkR8VmhS9wU4a7ZNxTKPnnMvhznMjwYfTsQYv8sEwG3Amf52neno7A6cTpXb5gmuRHcZGp3KvzhXfnmuSgaau",
  "key3": "zs2v4zTgaEEtRUq7t9Nj5LctcWZiGoehZduhRkv4NpWUmF94nXgVi6cbbL5EyQ655tu3pgkVF3uyLdPHn1r3GT2",
  "key4": "4Xbf1YCb2wRoTbot4M8uZJutCTXCYCW5yMqD2wBdJXDmzMNZsTtrBdqCcWZpwd5gme3LjbjQrEvpdnRbfzmBQGbZ",
  "key5": "67Gp4etwmvRw8YB7TCs1oLtuuUuFQSXYCzGmWTBA2CYhCwZp7yZUGLLNp2xVvszK9Xnt676PrvcLnvWECJk62Tjq",
  "key6": "25iimkXESojsPAANKnK4dNgdHEaWNeE4gsvgEp7pNUg41jNTSnkc4fKssLQpVFFiEQU5psTJH22JwHPZpv53oX9k",
  "key7": "4e9TMcMsRbj34WMgm9FWu71kDicE8e6DFyz3QNd9466bAjT9WY2kwKRynRAVVgHiqP84EXE8AXGCv9i38dvpjKpw",
  "key8": "3yioT5wgWDuggegjVsdRv1JDaVkXCLC6KRiRznZ5nGe5CQF7ZWZqq62JkzBjU9c1oT9AUgjgF1qUFgaoyLXpcAdJ",
  "key9": "4grq2uvNYhvBWLiMEirqLKin3KSKN1nimksYydu4ySGRsJKMZYBUhN8zL3ZCKszUndnw63TbWmaAMLMPUb6j31Hj",
  "key10": "5FhEBeSpxQXwmQVCLeA6jztmQjns59HPoYU4C25jckur9xTeWPDt5pfjgE35YT2jEq6uCgEgYfp7mctLhYkgU474",
  "key11": "5umaCjZNyxXC4qS9GDw8ZWJXCTk6UYropXXgjVttLbaCpiz6wVhzbujUrToiS9YyxgJGzMuLgSF8Vr24axTMwRSN",
  "key12": "33pJyXfnyqbG74ksHupUbBXGZCBU8BRguHtmktGCkcuFHi4nfAuqFfpJ3ikCDZ7Q7UUac37inDamAaQtX8s2pyFP",
  "key13": "3LYbmks1vGCuUy7nK2M7qji66bdaDzJKo7NH4PcEVH1SwLjxoZWKtxo6FvikrW58yjFUTDRtmFJYT2hxtvkm5qLz",
  "key14": "58RJqH4hrm3j8ThGzLPQWESNRddMAPP36aDkoypjLVkdgjtep2CoFdP9XQu3aJiShSX62MS5qWzofwy1n2NgaGvW",
  "key15": "3fyS7ixawacQCg61saP2FkkB776ENHfYQqkfrdqnqQwTVVZmZ8xjLon2Gvp47tKMjWitF35FHxucC48ZZ8wwsr9d",
  "key16": "5LinSmevXzAGYwCXnVXADaxSexda3MnbcMQTVtTs6ZVMJchGKtQ4w3WzSLWXf7LRe5ENBwou1K5VKHWs815RdSUT",
  "key17": "Umu6fybMbv3qTiwJry25ogquF9sXUQTFpmws49ghkmJUwWcsMaXzJGs1bL9GSGy5bnUR343Zs1QsZJDdR1DaWt9",
  "key18": "4xQTGazvr9rvFJD6U2Wgd5ySpxnKGg4FgYXfHw9zU8JJUPwDhykZND4n5cfD6JdnDVeMxbjWQ1BgExWfFUTGqih1",
  "key19": "fJKArZdq4u5rMHowG9krBbQMvVdqcSQjCjv4PcERTAuoerSMRNWGaxxcUQR4kfEfQrfU31huT6F4dDAqWDta792",
  "key20": "5Nh69AsB1WVMkDUdzjfNutdnzyFY8Diogw4KiNkzFivXSPxtreKFhUCY7V2GYYWUzwTxi1mRE58qCiRaV3UNpH6b",
  "key21": "DP1dh7oszUssj9vihMyypebCYtdtoxSsv5PR5dQ94nDVsSY9KCCyGSFhWJrDNf82Nqejh4RhoYEj57vvQswhTZ7",
  "key22": "5wHnqHKHRgiy7RX2Y82HdwiPqqzdDQGuxVPMCzVXdCm74ShCkYYz6xSvzBvdeJNbunfVzjqHMvp171B9bctyCBf7",
  "key23": "4ENjWBnAb39dnWxzkzAQdwoYL6qjXx8xwHsahuFMFiH7JeJbnG33ZbuM5nY6NgJb1XekAYhCGFUo9wnLqBp4Sb3p",
  "key24": "McxzrqdE6ePZGKkcTM3Sk9ztj8vGiWqd9X5mmThxSNVNuhJeWvQbNz3JmTY2WAHkHJqF7FziNa5xHvZ2kH5AS74",
  "key25": "6faTEsYJbt3d4kGeK85rkqUrjizJcgo8V8a72QTkjnPsB6XuLTVFQX2mtYmbdHeX2Q9c2qEkz82z9vXv5hqnts8",
  "key26": "2J9J158fQcF5N3PVGni8ryRdsYRHmv9vxeACPEdWHjb6sttyQ7faPDSTN9QJKZoemE2Vw34DXC3uyPeWdFfLB5Es"
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
