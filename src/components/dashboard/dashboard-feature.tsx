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
    "g4ZrCNm36PUJxS8kW4XvqVGEUyk7BC32stdPMmWqDkP9CBnFceknXLNKhuCG1mDs4aCodQewBMU2oDPg7QJYzXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sBV9cjwATFDaPyfBgYbrHWX1ANBddAsQfYqsjtirqwJhPoR1zf5ryz5PKzTEkjSZoojh5KccBV1oBpGNB82BgV",
  "key1": "4DD6TvnzEBMr9hDhV5cwddtngw5M5W2sDQUXmk4hS2Vmeb3Jz3LTQkkAStWG4u9gkN6LzWpmHM8a7xjRxp1aEUAm",
  "key2": "2EwCjF8Usp8bUyb5VJe6m34zQU5YdnYiTHfK3T2AvCdAxj6HAnXWSpCcuPLo1UCrBACD2US2oYgh1vzFbw6KLiC4",
  "key3": "2e82zZWnTNAQrFDVaejADHhrvyxP6ZUUDMpLVUFBzaD4Y4sKmWxd5ZTJ1ggseAxtGgLas6mmEqvRvcG2Dpc75Na3",
  "key4": "2ogELDZYcGxrJXTzsFENCYeyiWmxK9SQaxKmv8PNm5v6eR8g27aqtH1C8QJ6jGiPSBkTguvQkUgSvJ3NspFV72yq",
  "key5": "2NEWGxhZGZDaG7PhKYBc1r9XSCioTGuzXsjWnM84JrTBauTNyLeULfSnneUWJTLXq3m27xF341MbeYu9obKVaK6k",
  "key6": "4RJpTUEaMhb77n6TS18GEjqFsiaj2zvZQBNpEG9GBjPRCagL2Gpb19DXud9BrWcc6TsMTwg8mhBjFRTost5MPXRE",
  "key7": "S5aVVuPsxsvF5Jukqf9PfQ7iibpm9Xhz9ZWD6khiNFaARwj53xfwpAE4QaACAoDEFhaWMTQbFwkMxC2rxUXB3VD",
  "key8": "43qDjdWZ7ac11iNMaYAkHtmex2EwEevRAGQmM58DobbEJgCobkUKR8nEQHkjsigGVoiCBBYfRu1aAeGZrsuaBe3z",
  "key9": "xQGJCmNaYvsToFJDu9JMczFD65U2EHyPhahpedVcA5ctXb3uSEVV9jepmXSTuMqfq2tYQKfKd3cJg3GaqAEE1u6",
  "key10": "2fiJ7qsLJcyH1SBB7cosGw1yWnpDYuY8w1k9izxWqXfkZQbTuBNjQivh9TmqNxLDCAms7tdDn9KUA2QhKyMaXUgP",
  "key11": "24R2pqMhZqcFtGYPAHMU84jAHXD78G87GHxfpgEqVQcueuirfPWNeajniURZGZYobXUFpNm61tnQPTGRtdrKkpf3",
  "key12": "4Jr7mJR64P9ozgJ3Ed3itD2WsiCZ7ExxXMzAKjKa8fhJWSgA6pPZWFCZey2WWYmXpH5eFXB9tCZg5yX16Swwx1P",
  "key13": "2EzGfax7BvAb8VKYVxa51GihAny3jLW1FKuxdi14Cc5fvqPoyECv2PPv1qXMtri1r6bVAsbyxbUmDN29X331xWNE",
  "key14": "4UUMtyimv2MDxHS8FsnDKQRPt6S7oXJeuvGMmuPZw3qv31cYxJHsDDzW2NAfK4S9giZfnGhE4nB4v9JWJy3KfzXg",
  "key15": "nhL4HP37kEtC6L2sZ8T5NnG5gWB1XaLEaNWP25bWf521dFcuEs5W5T3Jbi24NHVs61ZUgdkfhWxrN9JGWFrn48x",
  "key16": "3472q8ipGujunRN1L1sYrc1L8yENkmMu9S5bSozye32R7kBZdXFyrEWSfnSJCVAW1jNeewxkzyXV8GEtVxcWKJNs",
  "key17": "3g389uTUK2jNsd486wXD7VCN41rqc22ZXXAQix2mhiHfyXDwtcNNVXGLQbzhCChfCEAErxaPaBNDFqMUgioREjVd",
  "key18": "773YW5XRywiF3fP1iK5gXCB8eRE1bFJu5dSji2kLkBaBB3Y69SxPkRpyEmgkj5M6CeUA2UWvr8xKv4RZK9CQjP8",
  "key19": "21g1SiDa9CUDE8tKA8ysKWa6qai8FJhPuKmZKiHUqt3JtjtpxuNJ4u7YbyTfHqAByk7HqrNhJhSJg7BTTYm2Yrei",
  "key20": "2QvKsL8FC7T3DWLQ5ZCc5itmjkJESa2WLyWKGFDG5f3zH8hF15x1atZgUsBbHUndEfZwps5BQmaS9xATxtCtcGsb",
  "key21": "213wpxyYvPnMtcb7EpC1iPMuxbQRztRxzeJ6t6fnNvy7Jc6uupBFfmirKMTQrkvATqNmNcDzPdhL5CA4PwDHVxMp",
  "key22": "5Mg1WBzWXKHvxW7sWvkRKC1eJPViibfE29QakVMV5QAe1yaqzn3h6dpATN2emncqyE6g1TfeycXr7SfMr7ikryGw",
  "key23": "44aH6wqgwpvtNGQruy3Y2Q61Bf9tXFEYkwCUcGkZDZRmxAr2wLCJxFT4ZzYiUcSRJTPjfeB43px2ephut5yZT3ZK",
  "key24": "5E2PphLhRPmwiAJXwUyWpte6PH4PhiE7JnY2sHY3qbdesBWRehRZcjSDXvoJDM67UaEh2v33TTQBonzyy2zfBaEB",
  "key25": "3bnUctNFNNSRHRpDMFF2xk3QBr5C1kBUZMCHJrdDgMMaZub7F7b3NKtydXxwrF7dAB5oguRD2qz5mx5LZJjeSo6D",
  "key26": "36sThmeTTvcJCEbuetSA6jq3AjhQVTk6PvjBNxgR1gTTWGqhSvKx3TNLksL2EdQ8anetwxUwXCfQPnkvTKxXoTcf",
  "key27": "x2N1xNvmwD6aL9CbwCULK1D3H8oAXo9kfuRroEibsgWpETh1PcdMvGdt4cdjkox9nkLQ1b2xWCBrqZxnFtA4DWR",
  "key28": "jwdW4n8pi52HTzCwgfZyrT572eTKLhXDEeJ9PeXwKJas1CTeTtZyJcQkP3J3tgzs2TdQ41P1xsBs7eP2TnydHTj",
  "key29": "566bVAoqXvWehZ8nLrQEvnhWZgHSjfDaxk2Eu2VpMxBw2JsszEdbt6YMZBooUDiLwwLxLYDvbaNnywvNA8pW8xFh",
  "key30": "63qdPy37LEy2WPinRBXQ2rQAL2nbdcCu8XmcCx3QGxkYLG9MbvvdrNmRC5jojRJa9o48CxvZ9F7DWqYpJCSnMoK3",
  "key31": "otz6iBvYQ1XCejD6waNtYWz2kYpyB91qWGMAFQZwLpghdY51vg94hp4LR2uaFe8NBf9ju8LLpEooHP1XeToyAS9",
  "key32": "2Fyk2ySANSy5qohnpQGBbvWwLe58fUu6PKwZgQJt6XT6LDfQ5Mho2NEhMb8BWRi3yosX283DBoxAbcwitUX9BDbk",
  "key33": "4mzFFiANK5aANLq6ApMK7R8Bz9MUWPY5MNDDnmVxQeYc1REdkvMmksotVztthZvN5gWnyMxxbbxfi4TXz39v6rp9",
  "key34": "5VLhpqFXyfyZphMH2Cqcfa7b7VE5M3UtmBAYb3qdeXz4QLoKB7s5H5bTdMGKA1W94u4nF6yLYjSLpYQ8UyyXdM9L",
  "key35": "4icvAkPxG7Pswj5rvrUxkZczXXKZodCVCKjerLhrdQmGsSFx9ZQ1roYF9DDrH7KTeQv9hkHryi6Tb2iL6bKaTRN6",
  "key36": "3RVktYDZXMALsUHdP4AQobTptsFawoUrSik6yEUwc4qMECDark75DVMAQGTrP1KbFTyHY7FB8Wqfbpcerb5wbCyr",
  "key37": "5W683cW2VkM6MqnBr8ATe5BvArgcm929Jd7fnTVmk4vJ3j6cp9TvMnh3XV3nRHQrFrd8D1vjY9TvzU1tJEsCExaQ",
  "key38": "54qMgNprxQrFkQtEcXxpnz7JdvUAsRAdbapLMK4bHfWDngznHaEYjKVsPGvrb9eszzCtNDy5JFJfhJQJKiievEV4",
  "key39": "4gBumSshLMbPzPbhr1Y2UXmYr5hAcfJiTnyyqXkK2665cLbhuaz9QaUv7qdQEc6JyKA1ayHLETMSKH5UjBHW4q3m"
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
