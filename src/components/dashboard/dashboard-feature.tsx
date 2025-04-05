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
    "4tEjFkZLyGcBFzFwdfwgS1yoPJBGJZDPqqBoxJVAG8RDnxdSKCGizGGPToy9T2L7mZs2JX8oXMAFiLgsJZuquGVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEbovk2rhcEs1arcADzkdFJjSNbnEmU6rpCaLLk3ZxF9SvT6pLAVVVtiLyCTbKZ4ZHwXExQAUeW9ENkion12zGU",
  "key1": "3V44Z7eLrtgszDfUeMCSJCeS32JonTEa4qvmEYr98LWLXZqAHAvCz5Sk3rMuwDZyovp4RTwXyWn2GduAFxva332z",
  "key2": "2SfpHyigkXDkY5hvVTQkLnvByuUm8oGoD7ioQ8gfm4gg5Vhn5g6ac96kwLoFMWUG8NmexucYUJJ8qQtGFpC9MkSb",
  "key3": "38eJNZBFf3bfvp6BxeZhSbZ9FUkUi6kcn2gbrGaZB77ttBanAqSwr3MW81fWtMR68FJoZAMKtC8qtuYLF4Xm5vso",
  "key4": "28B1y6kTihn7boMdZJ6PWs7GBZLgJUG9KzXdwu5dFYbMNbBpP5re7QsYE8UgFMR94VaA3LYpnHMPJd6DHmtFKQCm",
  "key5": "5gDwhf4uQdFgcZgmcMJGQAFLdpzkuRt25BHDq7g4mPW3iYBYfS8XEtBq5XB48j19FhtBpWJfufbsTTCKD5R4i2zg",
  "key6": "5jaAE4ZsSmm2153wtNgZW2cT1KcVWH9dMqrQ7kRQoFbE4ZoCwNJm26w6pPq6i6wx83dchWp5mo1wrQc1hNB6b31F",
  "key7": "4cECYP6X22uop1NxKBtovAAo2eAM4X4gCkrPU81ew3iJpR21MLnocFJf7WpUUdcb2N6aHbX1RbsE3pNNTNX1KdLW",
  "key8": "5ph8bnGEjYh2wwmA8XLf9fssDpz67hHsKVhmvzq9zYWco5DKxPmxoqP9ijZnQL9UqMPicdqV9Janv2uMXHiT51eC",
  "key9": "3wW2746xbBvfMke3TeoP7wu8wFrHkPzq3QSgsKbmBNGVDwYfjr1W2QLqMmR7KTAc5NkBh2Tx2yQXjnZCCqf1U3CT",
  "key10": "2EMQw3yDHbJntVCtCPCtDWFJaxPRxTGnHszkb32RMuyygVVCTFov196SNiKd7nX8QA9ZdmxW6nYiv18fsb6d5RBo",
  "key11": "5kTss6rQiCzcY2C3U4eJdb2s9GhBov2H5ECbvCxfQGTAPGY7cqyEiyBkxjAGdmn3KVmJ4a2cbSP5Exyu1xijtNjv",
  "key12": "4pucz3vjeaFrrcKXzdp6yisJsy1FXZAUaccDi4Mw6vvTMZecsVPsg7BnX3FJqBs6DJ99uQLaNVoqW5Zqyaq4SAcY",
  "key13": "62TAPJ7i7sGX4Qs4yW7EVuKiGD2ghESrdx5WMrJCYpepa464RUiYj76KR3u2FUpfmavHLAhdKEoCvQiaAcW9qf3V",
  "key14": "5tuWtwawpQtU6uK6X5uewRDsRkfKB21jVGhMpsXKtvLxBu6zU1dGMVTFko2aJjJ75CSoLMk7a4XWZKKRFZXeSjZ6",
  "key15": "5okUJRLhkaVAjWugGWmAJ4UgXcUmv8ukBeBjNjsTfpjUXxci4kZsTCCWKAmnaPFH7vZHCFnz7fPnSKnTU2ZfmRRY",
  "key16": "5k2jtzPduZikU3ShyFMNxVQLp65eD8iHNva3w9LwiaWMAEiLn6bkf6a8yKxcd2SDGHzDtfiSgupdQg1yZp6dvfeN",
  "key17": "53hudWY1P2E1newDD88V1RPDFzQouCqPRN6W6pzZL6q1yNcfAaVfH9F2Mdbefbu45qSeFZFujMA2XmQQjqw1qpcg",
  "key18": "4dv8jo25sPJ4M34ri9GL7r7ymnYVAckdaL3kujiVAUVYnnTAoHFkMdH5otDA4NGgqbm7szSTFSWwTpjqusvoyV6F",
  "key19": "3yz8rkJ6weEajVYyojdSfHsixLAtRkBrfJQLxSatKJHTRHdcG59iBokU5vsUSLKuzLUSrHYvkMwsfho2R7j7gRE7",
  "key20": "4nUTwSrNeBy7ZDPb8ZzqUMTZp7QbxpDWxjpErT4hMULEEG9U9GZ7hemWym5X89Toesd74sdhQdmuW3i7UKXvu7cR",
  "key21": "3s9EiBBF7yhBjjDDMgHUxGw5EgmWpBh1mQbbytNkNj9cW9Lu1TWUdPytEzgETJudv9Z2e4zv5LhzHNFJhq8juVS7",
  "key22": "3Wz81fnFTs6nfFVeoP5Ap2jF7dipLdSyGGhaJWU8TyVJHX3NmvbGDiAynaifjmodSsm9ArVUAJ8PvCFki3s8JFwz",
  "key23": "4Rsfoq1Q4YLXfZmU3qguvoqosim9ZHqtexkYq4u8dbuh3rU5iccxcB34gEijnnQGVE8Ej2n1HuTNQujevPcE81m1",
  "key24": "3ZqUgU2ZE6SjBb6qdw9J86nhSsiBJWF1MKqKJkoZqYAZwXaxhjhgax6zyFL68AEmoGDJpBBiDFA862Vk6R7WwC26",
  "key25": "qPNrNCTuj1HMQoqEJZmwsUt7fJgoi1djch4qAYKNp1kv4FsFjtHSXGv8ANAGGGPdiDAqPHBdykh1nQ1iXgkeJDu",
  "key26": "63bh75piZP2HLnAP4NvZsn2sTL5R2midgys9rN8SAxc6QjaRzs49eUBGu7LuJR6ysHyDprygDvz9NAiSLsuw42Jc",
  "key27": "2AaYe3L81AKavuBZRLFgdxwYXRYib2FW2By1oJRSAQHMK7h8qjeiGebV8R8WND39StPzLZZ4Y3Fsb7YQGFGXopfc",
  "key28": "2oEypo7nyHj6VTvz5Bg71Kk6MtMmNhSLjT5GjgbHPVs7tqAqzrDsZxUmFQPgKhUJT7UQjdznzRn4GbxVwVPQUJQa",
  "key29": "5EJ5EQEHjWLyATpa5vXPnUyFJADNZHgKuNzZ79fbzvpM9eMc9PJJ4kYU9nCGTKUfoQa8dzajjxxdJUUEzY37FLeg",
  "key30": "4kcuM8B3yCQcx6YhESX7U9G2fvDugtK7yVqV6KvN7UHbS39DSDq9oG1GqLJ5XMWMPjVZx6H9dssmbjiXM69dYy4Z",
  "key31": "3cijM2XEx3jB4wkMjqE2UttFYekoPZCCz1a3Rby69XaYktiLMEJKMfJ9sXrVKfDyK6ex1nUz8rqLESjtT2p8Cuh6",
  "key32": "ADhiybhfUyXsd7A4XCWNkWthnDjK3jEt673MVtBSjizdow4NkS5gJasJAkBheiu4aX5X9gagCwREXZvQnkDaDpP",
  "key33": "2wwgaTbiZvTtPSKhFpZhFf1RBsGDL1KCAtxCYwDKjWsR8NtXuSKEk3Uxoci2uCgKj21KgooUVdLy4HYSZ4o3CxMn",
  "key34": "2tbzTtN441frRb7So597d8dhNVwxof6vDJuD8E3GeAxDE1hS33Yj8d9x3K5DJNPQ7c6eypkrSX1TnwH69Ug1NDoV",
  "key35": "3fP9aSxctoFHUYrD71xhTLrdyDjUBoxZqa38B8KTWCfLvi3TSgkbZQrajwiU8ZArgsUQ7hCYfgXVfr7vfLZ9VYJu",
  "key36": "4EZMjnYeKWHZgdaWYGLsEsCa4cT6YfMa7zzMMRFUdRgLndzW9Ad41FURGW6Bfbs8FwhNDhFe593TxqqT6R4p2paB",
  "key37": "6ZtQ6tFeSHrHiv9xDoZtSgK12FgEvUMXjX1GANLAK8n8mMz9cCtUuCj2DnBwp3kFCdMLemxDZsPiyWxaudo8uun",
  "key38": "448wJ2HCrSu36HZz4t48B8BmWouNApxZVcBPUw9Mp7Cm7qpAUNheToUFUZL4vGx4ohcqpkmigifka6xr7781agEP",
  "key39": "2ZbeqmkHCA7XUhaxQPaBimiDbkzG3GKYiwLaeTu3MZ5zCYEuFG87YMRTD3KLaxxHwKYRCSUYLoiNfqgeJeqCyqcB",
  "key40": "5tiHEgx9GEA4UBKBqeRpJAs4afV7CvYf6vKF4oUxb4NqMmSexMxTrwR8wV57HLGHqy9BrmGRjE63mcoFLdGwSZS9",
  "key41": "4i7Prv9KSAKBNCKtttSru8JG2N5t37TK9d35GumHmXhc5QzZCAiGW4ksEJHkFNzH8ZKV2De1wge47qsHXGx2HQfK",
  "key42": "Bk2ugejiAcKHJyCZdohurg3UWTE3UpXtCeLUKeRUokdZEv5xu2XWcFbtgHy5dby5q9sTNAsY88QoeCZLUWC6EhB"
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
