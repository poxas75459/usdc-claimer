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
    "2b7PC4o8n7mVEeSLDjthpAzCMUegh1LgK9e5NSKYWorhJ3G8vp5pHD6GeKGKoxuNtuJdynM3RU7Ykbf43yHqnWvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WMiSFTg2PttrmZJh23q6Gi1bgn7t5StSL87CmuS4cD7vgt2g9RDimWsWYE4SF5eoXMhYB5SL8VicJde94vt4dK",
  "key1": "4oxXYBRMNoK6Wtz2vkLxzg9hXLZ4ENQHteMm98PqS4wXYNf3KjxRFRVBNqvoYGuNxpfKUFoySPdikJWCBtCtZpt3",
  "key2": "ASg4Yc4yf7LDoJ89bQu8vCEBtVxUApM52kvnkaEWsfPPeEpSrwkNU1fBAhbyJxcnhagvkKs6R6TnGWswn2BqWfQ",
  "key3": "2DHvJMtXV4XmuQJyCCbi1k5PyHZqL2T4Q7Jh6qjhZsSeU4DrECRoxHwKZ17J4M1et52SfD88iGwEHUDd4AFffRxB",
  "key4": "BFu9LhsKnH5jjqZ6TW6YrhSfkwwvbZCsxySWgJCK34LeXbbtrCLpZkLnGrxyVVUbkC5HtHMkcn5TzZHv9Lcs7o6",
  "key5": "5JuE2UJvtWgkEXV6PfPx86mW4duQXnoExboGuaz45E9tAAV4dt8HKFJPjaoQ5KY7cx25BLk4jTpceX8DAoZtn5vu",
  "key6": "3151S9bbsYukcqkkoM1fFw3D5aUfuBvFHXYrxB4JsRLcSmX4uvMueuoYdUDzhHC1o2JTmTiBszBXWiTK1k1hVTqx",
  "key7": "4twkEknrTVnT3UbW8rENMBSjZeDDrwvYNXSExCPg4n1jCMkKfUDLK3ihVVtcPgAd2SC1isbkaBQQQzSuHHn4ZgCn",
  "key8": "3SxtxZayJ8Kzspy1DinLmGYKayfvjUL5v7KVUwymdfxWBhBjYbhbyemPm3oK5Rk4byZg2mRknHxJwakWDQ8j7K5J",
  "key9": "5bMQdkBZNmDGtkHf9hyWgXBvRKUv3xJqo9n3jDbBkahsqR2p6Pe3SvH4mh7ucD3rJGJpB7QnC7GZrLH5ULPNW1eD",
  "key10": "4pN6iXH4coFinwRLKna2ze1cfSuwmYF9W8SxKxUPYHgWj45KrKnrs5hFqZzqN5qE51HzLPguBc42u5x5cXa6VdWi",
  "key11": "4pMEMQJBkUdAiY7tjtpcNgEzvTBfKaRRWGMMVhbVt8BvvaVFo4yuSFLTh8gnRENVGk8JqkwFyETPmUx4uTazksLm",
  "key12": "37UuaraSuXNN9yfFFv1z7dxFDgcjKi5uG5Q4fNJeRXCkT16TyULhYpDVUQ24tc78g4ZG8imsrZQXxnWj3LN24Zxx",
  "key13": "2h1CAFoYYwK7wvQgqLG9ywB6XTvpzvGyQMi3g8YCTfoQUcG3ZBC8JVXWxb8fj8WMeETzB23hHwRBpZjFLpeVs11t",
  "key14": "45prWDehrdF4FDW5atTE9aCVJ6XA9pjH9HtPuYVJ1TF3dxBLvEGF19QeKakjM5smwrbyfN41gQu6ojk6gQ2Mt5Mi",
  "key15": "4veZwhPjqFQQBvD4mHANYeMKHfYhWFMGxGGkn7AU1E9Lg3y82BkVXsty2C98cmMVDeNBJHAdfujH5Q8Bt4UHyJCE",
  "key16": "3yMWgUHfkqWTnjqoYffRndzwuQiTUexLpcxVWnR14AB1jsYNy4LuXQpWJ6nY6khxzoB92voSqsp5G23yAW17PPmT",
  "key17": "5egB22LJDRTz4rG81RZPXz9bPmeUGFDRWtj6Y5Mh3SuNMSEu2AFyk1wQ1Md5bLfD8saEAt73L1JnJpXaTWTmg2Hz",
  "key18": "32GEUTbGST1LPh9N4WwaURraJWES1dpbc9hYmDqbnbu6T5QPeRJLodsed9w6ztT8Wxxqf273m2WnAUoC5qDspZsR",
  "key19": "f4wUXrDo95x77i1nWJCgJopWGETY3hBgoyb6KQU4wTjbVkrJ2bE5NBNvm3sNVMPk6BZdbUfoBUpr4xeAmCvW75e",
  "key20": "NNaPvhopzyBKh4ZZ6cymH3zX8bikLN2KVV4D9Q5jdgdgS9T53823C9mPgnz5bBJ7wxSqTiPYBfAcFHYx8zz3DGQ",
  "key21": "2e6SXhMBVjyfPArhFRMajsNjVQzS1T8D5onc8XUmwuCfj4v38946ZMuZkPyimhMpxsgfeuvdqr1bZouzPD1gpaib",
  "key22": "52N3CmNyQKgtdpejFgWedfPXHABWD8LkLgTzdNyKkz1wJnUsRBcVkqCMTEiXKZAQBiSQJeXDXNcPqX1sHq4F62Vi",
  "key23": "oCdffdPbw99DGGGUefda9pfL4Jxnv1qGS4xTNhqM6b4SytkvdkmWTryxDkeNavjqvBM48nXaxxc79wwJzbuwXdB",
  "key24": "5KADQoFFVgnxipjWGk5T9Yxy6PMtCADwSQGJxUHc21XVUz2UZkS5btUMVibGVWus5wgcZ64SLAbYVgKML6Py8Hzo",
  "key25": "LwxtZ3Rznxw3YFa5VkiGT7NcdraWmFbRWsUnBH49epWg4Qk4UACmUwjKtgTW9KModd9m8Gb3NurTTXZ1jZSTav3"
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
