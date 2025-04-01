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
    "2aWBAXEitJthFt35ExmaYc1P6Qwzp1KaL993fHKg2RH9WXbbK12zL5h9igEBetgErZfRKMGA3gGQaAFnUhPJPbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3XVPxgFc3ZegpmZoebjvFvTetLpemZXDD3XLXqHKU4dXy8AFGbA1oqkrZJF5rkusMMkHAFgxwL3GrMDgPG2SyU",
  "key1": "39SVUPjXPzQ93T26g5FmvApm9pABdn5mqfHTrr7UF4gb9ghub6wQDHnnu8ALLxzRUbQVD4Yu2GZxQ4kUsVs36jMP",
  "key2": "34UHE6c4DbSD11NMBqeaBrVmfVKgGaXVkCiXFZ9M2yJztT3oA6X6j432cSpKKjceRf3fEZBYVJ2BqvezF3r1gPvL",
  "key3": "3QQoCkEnZAk8h4gJrQGHu3dep8x6yfsUQe8KoN4Kbjgf6rw6VyMU59E1qF7DFBK5DJhaNV9nZU3UV3YYc8gVmk9g",
  "key4": "2qZButRsZHDzbpaeekPBS6ociaf6SMNHRNpwpg2ZFKtwAuTDUV7YnAhHtQHL21hp7KdYo3tTDAynaFZBzQ53QXQJ",
  "key5": "3iiqvYC8Emy4dBuhHqv9dScSnfe2v5rReVCmY8HBqSgqeEA7nNgv5rwK6JpQprieo5ZSxsfDPLnoGexKNMj2n8KV",
  "key6": "2eae5mnFzxqEZexcEjxprU7fF24uGPr4LXxGt2xCJaL74egsAazpfiPoitzP6Um1WJopcxVZ8n8nudHtY7FqCn3b",
  "key7": "5bK4hZ6FkyudyGKsfxojzWjxqLEwfxmNT2RZXSiSH3cv2TrCjetjkRRKrmHHvGK4BHinDXBRJqReDH6MLLAijwoM",
  "key8": "5D7BqtckrjvURFzVtRNfDHrytuDgLENEyCQxgWuqwitJSbhNYPvVhdbwXq6wmHtS8vW8DxQyAHUW3gskohdTLgkt",
  "key9": "4g5P4shiFPZbPUrrk83SmVXuJ8KWPScLYVexpCNTz6LNy5pmDC2bJLw8soNbK7by47TZSXm2v1M8BG9V8uZP2NbB",
  "key10": "2BiTX5zT3FTchi91PNTAPWmzCmswPkoA2trBBF8c92WAfhvo9cprJ6sjqAmFGSjsmE3iEFWBXXWUN2rEsrmn7nVa",
  "key11": "52dDdFmunCUDPfrzfXERtKdY26oxmUfLCXQXRqgCrVwD1XsDfhAYTbL6sDNBMcK98VAQX94iQ711PGmxaKMYagQE",
  "key12": "w9DKttbuay8DJSC3cqSeaRjxDUVYsoToH1HeyC57hF6h3dwN6nH24AjyF3itidWzVyLzQEULcQJFkWPGhqSMNgn",
  "key13": "57eP7wDjCw5csmubuwLAnn7xnGLSpSppRyFo4k7RnLbiQH4JWvnKDut7xuv5xjmnSdUrsQco6Qdb1sK3cfy66isX",
  "key14": "7Es3Fo2uyMJkhhYxfma4z6MihGUnDos8eWHMNuUT1TGaBZCzRLw3aPGbWEJFHVbJzu8V1T9ksHHEucB1WTdeu7c",
  "key15": "Q3mG7zjzrw3NKstwjvMeQ7MnUjtaiEakm5K3Y9m4SCSzFUA3CUdd3vxScZJqidXJwh98o815EgfNkBtvcdNasVc",
  "key16": "64SQRbF1i8cwHWooMsjrM6E6WEfiwRkfULs9JZvLdaAePfYyTmyDwKASQziXns2B8VTkHeU2whCiMj4GccSvUg4e",
  "key17": "4Khpqh9Qcjdgw5rMe6FSVNPV91MjCQMRNEYXPkQZHFNg5WP2ZUujCsyVuhYLAxoLkzfwD59pMJHcQhVfo4opm1vJ",
  "key18": "2gyCbGM2vVmh1FC9csborZcCMyRoFVzJdYsnz2oWWu5Yo49x4zj8eM5CD5HHXRJZMqBnwc7SrtmZdMzUrWK9wYNY",
  "key19": "2ue18mvYUaeYDBzsJd6ypyReg7W2UF2WaLgdyEzzb9Ji27bEzL1Fwsqdg9LoHwpUvECmkg6RHqWmcmaupy8SBXQ3",
  "key20": "66Wkmjbhhfez5fDGwkV4yW6cvpdVf2aSNjbHyXhjN9J4XWuYBy3TZQxJTm8ex5vUzgkfdewQUf4SjYAX2cVUWjkX",
  "key21": "2ZrmmSmrFkgDuE6HVj9hpeuc9nbvsw4VbJAEcSDz7owPjBkM3A2QPthv9CUt1uzX3qmk4GJN5oUMjTy6v3ywa51v",
  "key22": "4xbii8ZYCjEKq9Vzxgs35JpFxp4MwaFZn6UksbdJBdb1Jx1BMVp7hxEd99b148UCA84668z35LGCexfWgDTkDUiN",
  "key23": "wpk8TLCgjunAWgfUzhV3jYed1oqbATGRntTpkcZ76guLtFCdef1LAJyER2ojB5shzLL3on7RZ8BoFWnRvAmiDaJ",
  "key24": "EgWZAf1fTkFPHE2PwxbNg4ZcKnBunS8KRXCddZ8Pafx2jt47c3hePSNVana3s5ysCZiR65LjdYSNgVVDAtcVz27",
  "key25": "5cHeWW4NP2GB6qHzsJAYo7ChfayPeuMVMTwavAVGmeBf5ApFNw8Bbo9QB6UhPsZWDcHwa5wjuK4VdsiCspMgfqqw",
  "key26": "43xH3FrRktZLqhcHHNDudg3V1Sm89abeDhe65R5L55Bq3EdYco43rBqXCYi4Vr1Ch671aJvqjiT3SJeddiu7QV1N",
  "key27": "3wuJYHjG1T2qSbB7M5gPvrHqwsAbwfZzUWurPwcVzXdMjjhEvDUvvYyPgkwKyK1DCxQUaPNhLm81JJhV4vNjw1ve",
  "key28": "hhfniF6SbtJSCbE8dCirbnu1BTGc5DL5XhTGVHjnzMuBodi4ds16zk3CM7PnphCfFTV4DsjBmtpjmKjynGkuhM7",
  "key29": "3g9Fr8vNyHy23BigXUqtpC9h8ke8mgFKhywbFpHsZaYeBy4FuZcNqxJNMXn3d8AekVtkhzVAJPrREBQRRcB3vWtH",
  "key30": "5emZSArVMfVsnNuny4wuK6x8woqemWfa9htZaLyx4WMNZ8MF71cK9Y3B7ofDMqs8Ly7rpAHFHb1ALSEs6isAQixK",
  "key31": "5YEnk9ufccZmUdWRYr63gDPv7QvZQtcBcvyGzhCLKbqTd7QmaUNfJdfDvXe2ZH7wKabXeVGdhywghMHUgr7j7cdc",
  "key32": "3TQqu5CkXuCnAea3JTnqDBcSpHAcND6adcJRM64knzAxpPgK8ob4VxgF3WDZHYyNqxmmo1FMFepzTAknNBKHEgWw",
  "key33": "2texhMt2b7ttebbhV2npVa7WEQJepG3VKDyEYYYAFFmaAuzBEofcH6nEHDxmWUCbyFQQuuwCw55nao74A9DqSM4U",
  "key34": "3tNfGLdbuHVU3DQxG5wZaZA4eKvUzqxfAbHcZdSNacwb6EAnhvRrKdxnCtcR4iQo51dpchaJVPDhm1QevV1WZEDD",
  "key35": "VN9frFxUf7cN1qvKbckZzWGGBdZpTps4ceN1XLjxLurTQexW1CRaq5cbJppFJnaPG3B2xVWJvxRzvRsnaW6W95b",
  "key36": "2YwUqYTzD5kzRcqfLTZaEedv928FxFYkXq5x8JELjqYuBRS4hUS3CKYoaJCzBJyG8WNqPsfjWDNdmpJJ5C7ak9zn",
  "key37": "2UYCb4KLVGUEMRLKFfm8C2nXWbTm7Nv9F1qvRZpWVhtzr3CRFoYWV9uFHcQiUA9kkrERSQDWKqzf7uNmoyuS911g",
  "key38": "4ugrRjSTQcpabn5WivzZiE6sHuqryntZogY413ZCtdmF7RH7zJZkgxrLYe4APDw7fXKmUrJEUWU7TFuZbpXPGKQr"
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
