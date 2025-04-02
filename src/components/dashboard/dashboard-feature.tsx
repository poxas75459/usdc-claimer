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
    "ijTyxvSSzfrYEfLxM62Dd4UY5fggUTujajKY8RyVaaLVXduWfosmsca8ZYZgozXKSAGHFEMcHbqmv2at4MdsNcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2v5p94qtzyT4dAF6SNUHHohKfTmd7HaNvggQ6vDpnTjv6CNqJNNToEYEpZsR1Fn8EqJmCJCibGaGgrG8PpYsdG",
  "key1": "4q1V7WPdDZDDKobnZgnBcnyQ1fTLbhDBx6BST9d3dWz1VWcCbzM2Bb4K9c5tfDGAhYU9yGcCeJ9YrX8rHAWnn7v1",
  "key2": "3JKBjvT38FoPcThgQwEaBsaXusa9w8He8ktVZGEihqUvacs9h7yPTcXZebmGNQAFv57gF2D2PDaVQmXzWRSCJV4m",
  "key3": "4iykk4nhCjqyZobioG9564R9ck5zDEqDSVbHXnYH2TnqpAD5dHgg4grBQf17o56s1qMB2rPmgxMnEDy7pviQEnco",
  "key4": "619g5yHqZgMHJeFG52csvcPuB8dQ7xAXmdeGaU7yLmHd9EJye8PctzakvtUDp1Ub1njkphdFRt3yn3b9nnwPLz5F",
  "key5": "55Qpm572xy3bxXyP6rG2LvwTc2FckUQsm6hAryNtuoeWLLxvDyRH7ZT3quWwcNcYgPdoyjEntPEQd9NffFdUPBPj",
  "key6": "4hLSN2RybQ6UJh6QJCa5s8uiNueAud9Zywgn7H3YxX5vBcdsL4Hqn4KzeHtXFsKiSpYEDVLKHRD2P8shUMpk9g2h",
  "key7": "FjZZcdz5SM3CuCvZe7HctaSrcMswmZ6feWVUZXbivxMhZ5ihwSjoJ4ALq6vuURW3rBmiYCcgUeYDjukGvit3MKP",
  "key8": "4CnN6qoLzhUGEypqtQApi6jfTwqr6x2nm9LtG66f2tzGfgXyvpgvkmirPoz5cQNfsWb7rTxCJhoPU7CbFzFqz6xm",
  "key9": "5m5J2dKuepWf9imwKhZyqduhTQL5kEtJi4DP9vtepMTBunPqZXYahBukMG6xR4ogyA6ZDYvx1imekLCeGzEoLuGD",
  "key10": "2qtFMUJbCozyitiyYWMjtQBXMN1isP2NfiZaAwsSuSuuUku88Bkdcu95uZMfiJjH1aonCYb9sc7wEy7m6HVxHyV9",
  "key11": "4VxgovMu4vwUvsiTMKumkCWgyVSfs4Mn57Veu9MEDQttPLawfuveWASpFVzH2Y8KoNubc9zi5mmgoVwH1ciD7WTo",
  "key12": "3jLq42mDMrf47LNuispdjMuVVzKih76vRnma8Pk3ZU5EvudX6Er2MCELppkWjPczHhVVyHgVuumKyr6e2DTuktEE",
  "key13": "4fhKiAPHjvqn28dt1dPA9y5bxX4wQHs1nDmGSjtmex64fkN2E1PVpkhg3Z3RWwQJ3FjWYbwKGeEZY4VQTLJieXVa",
  "key14": "2UYqaNHCqmvGyqEZ7XwknwBfP5DWwQyCD4ZcD6Qv2Xh2Q7hfUVMX7FLLYvJHV9JJ6S7JYKcSq53PsrZxvNhwvBa7",
  "key15": "VFZ3koXa8da71pMyuPRRXefCKZhaGoiiS63vT9MiTmtVUyXazCAAcKKrqfnETK9Y8ueVGDZaobDPYQooLFRz5Sf",
  "key16": "59qwtwP8fAQXHeqvEcofmvB13J6aBK4icrZCprr54FobEPj2AziwEnfTDwyWVkbkosPjotUDBf3fVa39gmraXgE7",
  "key17": "5PSnb7d4j6jLe8DZTxxFvfge3hknigG4eVvpAXqnhYKVegGUJ52kHtwVjUFcDE7cxxQB6CxGCSCT4FeUC14LLSaE",
  "key18": "3xrUvicKjkTiyhJRVWRRMEcurUgGnJN1KebUGXjxCyv6H9Gy4XW453zQzemfKLtLFjdVayBJJZB4xWB5aDMa5pwb",
  "key19": "4ReTpyNPniVTRE3qfDxcEo7PGcb5m9FysWkM2HhxrFuMZrcKFUsFyeJnh2jBZmeukcnXP6c8YpaqAb3mTzNzq3Mz",
  "key20": "2bGHpXw36mvqm3WvcM9KNxYG8FTCmxdMCRJmPtQ1Vd1ddVzQYdSyzFZgiZKRx34X9vi8KZx8zWF6PRzqV2tBkvEx",
  "key21": "5pJrSziKVoSgBVciJrcosaepmbDFKvH7n9r1HY51RPXocDxh5G49dQaEhcVufyvpg6DQDQ7kgF7f4MXddFcpySwg",
  "key22": "eKxVm6a1bpQ32iJK8imVdffSCYPyqaMPJgnCBXt8yXuM1moueFqbq4ciLEa1MbyxN85JQ4p8XYLEJEHgGKdohSK",
  "key23": "MesmGefHZ9wfGLfoLKuDgveBU7BV3AdqjzgujB2zpqzL7nGgyFSgniDYWjwzxzh5Kav64nBvGRw3szWGNxASLE1",
  "key24": "4BEJLbh7uHLEsa4gypa3ffTUcLSxJZAGKdysTg7wD23QTnxT4ttesjVVQNA1txWRS6eMfsFeLgwzVdc9PkUEz58H",
  "key25": "4yWmU9eX1RsMk9h3wiuk4YLsUcspJ5RedLZxzNSZVQeutUKDAdqNXzXZwzoZpsaYa1HPqb7GVA5cZQCtTASCF95i",
  "key26": "3Jjqggr3Qt15uxd9UgeKSNNjvYETQ4YphvfAEmoTeKuf1S2XqL6SnsCT8Rv7CvX4CsZ5nE7QjFRjgErHozVA4L3D",
  "key27": "4DgBckxf4oJQiE36v2Ed3eLnXYdWf5HGri7dEDVY37fNhNBMmNTUYkJveviYC4oVf1jRZTD4tdijzuSBJC3zDbTK",
  "key28": "61HBwKrrCWNwNz9N9fukozX3GyQRPaJaCdBtzjcU5Y4sdjAUzL3pBong8CqkcSjfvWzvqKpmRfytsCf7nKipbnck",
  "key29": "5wCaeqeWccE7z1To2jiZwFYFHhyWFY9adWtcGVaoT5uSJMtuDhsXfwrdXbS7J5FQCoCfRMkZNymUfPHnRJBBZH4Y",
  "key30": "UjPGieRiNmZPcpFujRPwZkfwDBKCckXZSMhNm1JU8dcYrbL8vxDmVvp1KmpCrt7qE4knxWH5HRcZiHFqFTo5erM",
  "key31": "5AKhZyXFDXX4WnvsXLUrDcW4VwBBxG7Gs4qSdotTmPK36PfbY89vmeRzkcQRAReVY6tQLi1s7TstDexNDh6eB5RS",
  "key32": "4zbBdXVWMubHcU1ucx7GM2pjFrb974WPQmk5Lbi979Sg1zRuU43sZpHvb1QyhhKczMaVUzU621TGmoWxjAiMt2ot",
  "key33": "3EUtNXtZNRePS4nbHvW5ceptMJUJhXmtak372AVpQG7QmvMP6YnC43PsL5SsXJjLGGM5BSxgriGPW8yrNMdHFxB1",
  "key34": "4vmrAGxBcpgcp2UpSfZzNehF8EgoGgHHz5pPGZ1KvYooRPATkQudCLQDaxqxi9XyoiehE5tZ7BhgnzNaWm6dTxSd",
  "key35": "2JqtLBENJFrJ7qTBxz9fEHXujFX7KWBFwAJhLSw218CQ3x6VMcnJojZp5jtbPH26KcADXQM9G43kp39zw5Jd28SD"
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
