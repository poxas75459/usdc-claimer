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
    "5wwEHTUScd4AbjnDBv7GdczPbCHWwZpruuCph64cyZ2u194fsC7why3JhB8joSYPKmkefhp9beCXRNeNSUJb3uT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zx84eeGntNBxmA4jLuTGVRjhTxpQ9D8Ymw2RtRsSRvwRAhkYRKbcqjQRzHyr4HrgMRLcFZSfysgzihMzJbcJczm",
  "key1": "5NeeGviRtaAopCtKZv5futKiRuWjKwzGXZzwsRycqctZWfVwMQNUN84iimb9kQN48kN7pTFBEm8RLz38EWi5UXrz",
  "key2": "3VtgsdVSR2c2e5h3oddzwHyufbD1gbLjeyWtMK4Qju9mkXcKSoUeba5v4DMh6xAX5zPJftZa61tJpuJXX6R9f1fE",
  "key3": "w81voo8fXEGkGr99fzMmgMgSegaPwqQBnk5RxWTKDgNSL9tKnMUiVrvsvacj3Scyk6RvbSijd2W2Y4eg8eVyP3L",
  "key4": "3HhmajrSQecYVxa6ytEv7MYEWXbEppYRpkJFma2y5zDP3YxhQTSrJ5r2GBc9npUFjETech2e24kdpT9dsPZYT5Q6",
  "key5": "3KC1vdfLir3rzpcctPz1xJc3WZawJ3P1MkzgJ3pCt4tbt4p1iNqHpPVTQGvCzvF9tMLcUjC87zvVuPXEsGhgyEWr",
  "key6": "5eP6U7RFWmzQQdNYJsqJA5qud9S6mxrNmWB9WwFRwXRVtytnrusWxsvy1RK5QCVQb5kMATaatri47uyam96hJKR",
  "key7": "MPRxPCkjRHGoig98J2jQShaLFGKdsKBuhHv9xBzYCJVLBNc6CesfvXa8nSaaBJ5c8TNxuQEz4ywzxuaBwWL8hkL",
  "key8": "26bjqgbE7a4ELivHbAdDHLV5wrDF51fiXhDXo4sUpreDRsHF8ywXMEnWu8iVB27QaNYXZ3emGFsGk2yBodMWmJRu",
  "key9": "3tv3CwLzUp7WeYonHvCnTMvhDPWVuTxcdZxvCaEWRjGX177J3FrA9DsYQpi9L3ZNtStmTpG4zHdVnis9bTc5vzs6",
  "key10": "21uThZXmcWu7mvv91hptBZTymL9hnCeYmmhiCDf9R8fSKyxZPx3U5xZ4TRhquSVpa3iAjDjYEUMLk74f3nqYJed9",
  "key11": "47G4gjsJGnsMHSqaMvHL7wVRwRfBDSSdK5ATsdYYoh3sdJDFQu58WidnUd4pUBKUycmvEWmmEKfziwv79LsA2mjw",
  "key12": "NmgyUt8HJrUFEz9fTQXr4kN4mjhorcVvqGaWZqsApATtafK2RhMeRagHNN1j2wWPhN69D3GAkqufPWCX3Dzf8sm",
  "key13": "4dGbhBT3L5Fo6rUXLMnZ6x4aCvCsRSvy1dP8DkhKcBowo2Ypvwjzc8EjRbDcL2NywJoFLAan4xhLboXesLMKoGYG",
  "key14": "2e49AUXd2T6m15pXrctF2TK6kCSJkACJXWcTX1J6YVq8bNerMoSiTi4NQhUsnCVSQqFCNcXh8QtzKVaPBoJJJwxU",
  "key15": "29UKvPP5kA3LTDMmbY2LoJbyrDuAqy4LMHh1vadH3MpGqmqQFN4W6U7SV6VPPcMZqS9KjpDAg7ubL2dtdwucW4V3",
  "key16": "66yE7UysFjUW94WTqqYfjnJVPqSZwqkar9xs9UpSugVGP5sUFqg98GeWNCeHGfwcmSjqhevFQdWw5ELjRHsVFYwh",
  "key17": "3JypELL3Q9wZt2eHYBGWYWPXu7QkxyG5uFVxeoZLHmEgZMYx2bdca7AfugnvNHNYhbz4V5waXYqAKMSq7F3UAuaE",
  "key18": "2DbUBBEpXiZCssoXXHz1faXc59py3fzZsisNW2nvVsXy8LBbgAibsy3t7jFKAiMeaDmg2e9MZHaNnneiDDLxTtri",
  "key19": "43YSWqVRhu3NCBFL5CQLwL7oNs6awnzpZwfVVr9ecWDFv9hZyAXMW7rmRJzxXkoDSLc4iMEQSNCwPXfMcJXovZfk",
  "key20": "3uSAi5Eof4Mjbr98uxWq1qZeFo2oHH3MMhrWKSSJdks1rWc41AEa4LLiSPorssECrgbZXMn5NVpCmCTvySLXYsrG",
  "key21": "7NygX3EUR3fueQ6VQpz3LLm51cfgUvujkwJF82FA945ivqy8qu8g6W2VftANCfeMGiuAwUJ2J5MTQHa2VjYi3Qu",
  "key22": "SZMK2JcQ9Wpxd9JbzQWmwktqcQVdhMZ618MwzQCboYdg1fs16tHuo94vFMpsWxzJKVP2D7JpnJJhEBHSKMibGPi",
  "key23": "4r9GG5bEXRG94NKnh9TFiiF4LpBK1CXsvf1gMaqxPjrfMnsaPgtk8cm1FYcdH2YnGbSKN8Qm3oWwcNNDDuSjYCh6",
  "key24": "4S4Qu8b2ok94H2gpbbxsiKvjiPFihi9wHXsFhtwSePWnLQV4HxXeJeAx7Ssbec2LhjJknvPGbScY8DYcFPM3y7gF",
  "key25": "2wkuUbhPDjoGSMtrrnYSw3LYxxyDJvxoN2gqhJHg9XEWKvDhBcHgz4qe4g2coHVScoy9aHsXu5sZirwmVfMnRZF",
  "key26": "5hRVwPx7U2KyjWVtzCsducf9zYc7XoQqnoA2kbGMWh1k3czHuqY8uYVWY6aa1SLxFNSLQtHZDFUGUC5eJ9UVjAVJ",
  "key27": "5ThAV9dtcc9nMwHutjncVKRHUkQbSBwrDbM2h3bJLgac5DoESeqHrEUAxHb9uweYpq4ZyzfAdCUEzfC3cVkzDtRn",
  "key28": "2EwxVwPkHPHxTdrTTi4d8r4ctngPaHYoTWW6xUBqhsoZ3TaVPmfAeVG5cVKBxjK6ZcafbLGY5kJtj7c3QpaCbtaS",
  "key29": "5wsUR3EiL7WHRgG8fNFFDwXM2k4yowqYfE1dSr8UrQzbwX5VWcP6ftpqgW6fFAv44C5cG5x68yjVAiu4xUb9kue4",
  "key30": "62PRyx1f83DzXkPzQjzZaQ9yPyq59SN4BU6t2TkzLTrzjvrCeNrK3dQZP7KQZeFaA7w7GPf6AV58WeUEqhCHFhoB",
  "key31": "5tjfgcyeCynGHv8FUhyyXR2dpPsELtZLEL6uo2UdT5QADhzTPMePa4mLCQbMqVzQDwJNvuiouSH7UpLwfk7ZCUU6"
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
