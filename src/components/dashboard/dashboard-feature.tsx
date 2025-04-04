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
    "NBHjEMJ93BMaxmY9inuhdwpy42GULTwyjGKeHyTE4LEuaKVGjxd8MMyKDXNUzYHECSfe46nCkqDcMHXxidNYK7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqNqpPWnwZpYnMAQWKGGaRbvew4DkGk1ZrmiZ6GNauBUzsXWnyftJhmvzEtx7cK9BYsdpvTiSHs8YTYrbB7bxuP",
  "key1": "3huBDhXa61Mu4bBmMe52PNCAAN3RUEGdXJk1pQG61yJPXL8kZtQDUAyRK4hEARXLzgyCigU6qWbouW2Q1nsfaLw3",
  "key2": "RTgia86WFapUqJCvhe7cccCiJfHZQfW2W3cmRAWRp9QLYfeYZwTVja2JS8rF653hHD4fCJhpsu9XMYz1QGt6HKJ",
  "key3": "4JuxURpb4a4GHTHTAXDa3DckJrgsjzKB8BDj1dcqtivGMoTL7zh5DARzLt8tcVde8Vqhssz6HyTDrh3nQEeEoH7L",
  "key4": "2f522EEazX7s3W3t97o8iyzwdZom8cAKSNfHToKJgzLGQz97Ghg6haepbtnkeoBLUeA15v8D98j4L34v8K2C9JZd",
  "key5": "3wxSm5aq2MsQaDnm6Gn4BBsLVakVL8h1ZaNJDy2L4F2B5PgvoJcvZDaC2ZzbAEWHJkd6gphYvnKXiiH6Hop9vtdE",
  "key6": "4CrfRqLW6S1TCxj8rufhEHTQUEHHzaoYvPzr2ejjyqHRHUN3oq22tjjT9jXENYrwYqdHUkFYWfF95qhHd4r74Ud5",
  "key7": "Jw3HbP2jYEm6NQyGNgYu9xY46JvzSQV1sFowzXjwWy22iYt3mPTnXG2nXXkmnnrbR34SuvVfqzJFdG99hiJ88AS",
  "key8": "2cTS9AXcJ6dv2uzCmggu4c5AChzaTstohNRPazn5Wj4ve1ch79hn6QVhc63ExgcqRjty4HVeURmwZaBzzWByHXzM",
  "key9": "4sJesVB7ymzUiRZwPU8auk2HCqiBMtxytcwuWk3wbN3eEVu4FARtD4Rr22e5iq4KfwesQ2PKmrBwkbNmfFuJTaCe",
  "key10": "5P99PZgW6RnjzpZeQsbdvQVQUwJDmdBZS9wiXVpyVw5mvm21KYBkEwPaGpkHNa7dNFkRsB5oBe9nWUmuikrTWpv8",
  "key11": "hqfxC2CxtVkHSwULEtSgsEfvZCHaN336GuSadGYtWp6ESSFXuX16q3vGU4Lc1BRdfGSpXZTV64fU7AdUwNzVZ3m",
  "key12": "5Gx1mpezRYAnUW2eEHe8RRqWkAxULdtRKzHor5HiZ2qQczDgPvbPkCnTgrG6z2GJA22QPCEM9sPgbYu3QB8t7Cbh",
  "key13": "yBeVjpNzXYyd4gmDuGL9eSDS11BY1VeD9h329QyBwwrQxvUMmjmYiur8dFBERX3cgVKqUTTC6LTPnAAzNnS39Td",
  "key14": "3T3v6rNJyaebtX66jYDcTKVciTrezPk9nUCaJVKNDxTJ4ppQBm7aMrVr7or6f9kfcpKRAWmDFM6XBhhaidrXmHHH",
  "key15": "3bCGZLYhN9AGkqScoj8U26EonzddwbPk3MS2e9SVKVDi5GntizPUHXUL4G9KAUY1F1t3Q2gs45hJ5vMpjf2bx498",
  "key16": "3zj8Vwjq2GkZnUCYb2DTZnWd6EvMaxThjQbBTvWSHCGLm22na8yUnvtQHAZsmn4q3RDjfpRpic2c4audu6fi73zo",
  "key17": "4ZfAzCPzM6NatVNLeVdDNazFLM2NVXEsVjkGBmZDaXEbxrgA4pxEABecMLaFMC3cxh4mREQFsMs9rtfmQpWgx7wg",
  "key18": "KL5qY38iG1RgqZFL2pPi11o9xY6kJXqhniju6upkAhB948MSfCiLA3vL4zsh1TB8EgZJFVS6Ev42aCos9pEyopZ",
  "key19": "4QpVbQVWzVmKirXQSmSW2riLjqUhz9Bni5yGc1AVrkHCsD55rm8HuLTm416222TXs9BhpNgXrWUuqYtAiY63TfgA",
  "key20": "3buKiCWiDiD9vHUSviSnPhfGXCNDE3Cfkwt4YjZFGTe29emEB4RgRxiq4JwBc4hBajXKT9LgKs62CBUKUpyx4FK3",
  "key21": "iegFtuvaYL241gSVHQCvQ6deEUTJeisvibaK41qyigpWTVjNv2R25U9xKsAXzRffFPR8ypxigJtBiLZcKoqJUZZ",
  "key22": "Jhbqjtgt3nWsYuNoiNrBfovoEqSnQAao2ifPjaTFjmmnLkHr4FwxhxppZJncCFEr6C7ftsyLfTBEqns5HhybZpL",
  "key23": "3gREQfnHtAxZLSHy8jZoa6xFxGy7zQWzNbxAbVgqHcnpodLC2KvvL4JxKNPNe4BL4UPY6p5EiRpDpt9cxnmwaHh8",
  "key24": "4NC27XGFzPCDGjDo7qPgmXvzqqWMwTadHiBNr7TRadju9ZMvjspin9ngbLjZ6ayXeBGScyLEbU1w4CKfomqaNQ3w",
  "key25": "2FUhdMGwk3wgyMV11184m3JKpb1adXH9utwLGUVfbVbx1QGti5nNQfo4YM8J1MK9DtQyCc8d5e5YKSsuptQAy5F7",
  "key26": "GBNmUWxK3ZG9H91wG9L9sgxsYhP8veFprYzfTivwjmPJi1GeCBHML1KJgJasm1DYHCEWhQSKYApauopFdPPYkF7",
  "key27": "2HchbAtofmfb3LPAE3Ywqqw7w1nZVVrtycDgiCt3E5StSR9bEMCCVF82Ui9yBq2BbD6Zcn1G27uAX8bHrGeTka39",
  "key28": "2txTr3StqUcQHHzhnWYfwt8gz69xzsCv7xZSEBcxkQtezoYqyrPVGRAZ5JKDhQjrs6P7JYSViR6VZs5cYdaNwEBN",
  "key29": "4xshdGu2gurBzvxBzMemca4FYSKVcv2qKNCx6jBn6w3m6tgedLzrhhim8WTfTfypUvd8JMTUfNnihnAm8UyeeHQv",
  "key30": "5fBvtus3HnbttityapgbBKd4dEAmCkkgU3VGEm7NUFpNKqVChusueYNx4TU5tXCSoppM8ftFMgeD2yKTVFvWDdmU",
  "key31": "LoSkz1bVKY8dqEfiL9SxAxBSXGwFhwYZ63UXVbR6XngUxoWb9a8pvZAAkSJQy6EkaLRgwgYMu6eCSPe9FbZwPvn",
  "key32": "4SV9jtZSGzvCpsk9toYGWzNE9QxGwvuXzgCA2wZGkMasHKgxTe9eVNH2HzKptEAacMZ9p6rUXZ6xrs4P8nriWBJz",
  "key33": "3ZMmQF9TPkqTPKiPmZcTKa2W4NNidQn3xyi3VtyGLAAQV84rgHHSzXD4MqwvGGxbzdYTwBTcXiZXjC7dQzVx8EMZ",
  "key34": "2nfn1jtd636r9SMQsaqA74LAoSxzAs523pyymDGJMFBPfYRuM2E3BKWQxHc2NTdvryuLE77UZ8yLnsvLXPorFVM3",
  "key35": "4bewpW5jVUFHXu81XwU1SrtUMzQ4U5MWz2ghTA5ykm5ZGLCyrSUYgdT1Y7tZtCxijVzKpxvmLWYjdn7wDdmHoENs",
  "key36": "3TxkUZBnExrxvMqqwtXxXfNBbSxpBw6n9AaqjiSacgDUBMSszfZqcFQuXoXYjzN6UsQm9qbHSBAfX41NWb5sGmD1",
  "key37": "2hhzWBA2RVD55QoXL4AktDcN9h4pUEFFrmYjm5rNakBhZ9YdTRhgvzMQ3BrEg5A9pc2p364X8zk2YNUPz8kfUA3D",
  "key38": "65a53e22nj11zbaKW1247FmuuDXqAudFrpjEBG2buPbPLp1yRburmdWDCKod3rTBqp36bi2JdCzCLo3mCanrEwV2",
  "key39": "4pnUH2suYJoQTb9XiA2EUbhEpamga4Mx3BmLZLTQTRyiKB6aWw4kSTqzdwuBMz77xLNX2qrFkt3RByeyBrUi7bJJ",
  "key40": "hq3urMxiWfjhZPXyRvAf8WiVffPXtU6N4SufPCF1CQHDuvK82aZjqn1dsVnoJ73WqL8JhfxdrN9tW3g5B5ePXri",
  "key41": "32Yh2KAhoJ5nYWeP1xDTAmzS8zuNmRAfY9rBLsjgioNeztqg3CGGdfvoZ3AC7gPaJWfT5Tz3gy8sLoMdxt6rZPQj",
  "key42": "4c7tqFsVVRC9YC3YERXFgXuZdXvhSttBgmfbfy8fviu7RpZSzUPtJD9kXXJLcma3fwuqQ5WcPqiMGhSDRv5x3XG2",
  "key43": "4wRRhfQr3jKkoX57xdCEqPKHheToyDuDrcj8kQCCKHgKThPxHKgZJZfTz5TeaEcnKzVQcMRZc5CCRRSsvikmdFvx",
  "key44": "2wDrg4RgSZv1ZiqhGoNWLYY478vwk4qVg3RgGaVCHgavKmHVCNBjXRSzEx5nrwYHKMmAzmY9xKmfkMvejzxEN5C"
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
