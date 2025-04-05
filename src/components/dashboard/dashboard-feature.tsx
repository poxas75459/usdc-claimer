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
    "42PqmbCT3DH9G6Uj3Yzdu1L5VBjV6LmaKtKUAhWEL5vR5RQ2xGPiUQ8pUiuaWTRUtxVrr4B2TWq65bUQjjoxcbit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QVmCyh7yrCbkNEBx6aArMwCaFq55rSaXdWceFvRUAAGwR5wJQWj5etLkwTtn1j6TA5VAENXeK35GWzKkDfgJnxp",
  "key1": "3uDGs2KvEqQLzZhsrv68p8t9m6mfoJkeW6oowJnbWtnxvUbWD7ME7d3XXFFgjDsyatpFhY55JQcMXhoCCKuqS5xF",
  "key2": "nP2n7NLYGrGCVgXeNKz4XDMV6ptt7AxocuUonHowno6LaUDDmn4ozPbEgU8XoZqT6dLr53Z9jacgU1jRY54pqKZ",
  "key3": "gebDV6J8NpXciRnCqZR267UdFeaMFC229TYq7tKQRkhifJRHC59XQNAfhkN1JxGwisMzBpDLCLawa94sKk56g3B",
  "key4": "4RzuJqVPxVRJrko2mHtrj6bKgftsjEcB8JcwSiz7Sy6TrnAzobtC9bSdtRw9EUBB9LpDRLZKKVCHNpGcozVCvj6o",
  "key5": "2NTnmVywTPQfUAS8AMdfCNZHJd7gkum1Hb3b8hUf353YQCrVMSMro1GM8tT7bp2ojaiS1uU9jMdrepqo9tcnTWi6",
  "key6": "5Umi17WqAmSaLtBRKBS9tGajw3T2fsozXL64TeueMwxQpCbZ9qP56XgrCB1X58og9ayXQgGExgThFn6fBPDavVTJ",
  "key7": "5KA9t1hFBnWjxmXtuuPbRGGs7rT6aSw759kLjtUn473Qqxgu7LqR4SkYnzd6j4stUnVnU2WqsiyNXGtaebUjFWpZ",
  "key8": "2srbnnhsAYP4BwrdUc4f7yeJ7vDFDGotYimvHVCPnGfGHMLgWqtyZpCs24S75NhzbRBpzEG6wW4cMKCJQg3PurhG",
  "key9": "5dki4wTjAWYCzkoDZWfSz6ooUoq7MoFHLNPTaZ3smQhwkndzundCNwQ8SwdFQRhexqJuDVGpkjRk7ubbSxjQhQTv",
  "key10": "5J6GEbKNM3ERGjSihVKn8TxdEFeedsgHN5wGQA2Z6FC8hCFrV1gEoqNFnNNwpefm5dLCNRrnxXtcUXNx5xBJrwiQ",
  "key11": "56AJDvKswNxQ5ibhuf6fZkFarmdfG3MiqoxYLTvPYYaHywAPQfdfJwcviujHvTP6k9VcebsuV5gQ192UmL1piK7N",
  "key12": "2xp5w33PtYc19Edgy5ztqJrv6RXZAiN3haK6rAbar8V6dydUUeSuKp9aZxfsxxcCyWPzZVTHbCMFBhnvYAU257Ki",
  "key13": "4xYphNKpB9sp9MJqWXRTz1kU4kM9h1Y76SfrnpNmC4iyyCiap32ZUMFHDeeGt3Xjn5KZetBXRN7MQEdmUpZ4s1eb",
  "key14": "3cu5NzhQkAQGNkptZtgeL4G3dwDRvwDPCS7zju3PttaU2zhnixsjoou9jvaugfJSUrxwkc7ozb7Yj8aFxpMbZAZL",
  "key15": "2Z6JAMFbKoCBLXUrJUjg2awxTfUvD5uwZMzKhcvbA4zMUB1wFQKBZCmQ92G11EAHZi8Vsjyhx5evB7BRp526qNAb",
  "key16": "21AZ1TrwXuCvdEb1gdxd2zLVCBNS6Djyq3PX4Bx9JzqbFUrpb2GUFBw2uFx628wVdqfgcySB5D34ZpZjz4a1pEJo",
  "key17": "3aZk85XqJDcqvcRwnTFErz84WLQrZAp4t6cnfkS55BvExWai2E31CcBNRt3AvWW9FexK6gkLG5aDeqj3ZPnVgKKV",
  "key18": "2EkfxQaAfdiMxpxXgZv8cAiBf1sZzdnXexjAMyXb1YcJaWhs5o89qHQ6J92rZmSuehtftqWXGwBgkqVwADMVPQRD",
  "key19": "5sPivy75j8tEz5aUUsUxSyGPyUVqRvvgkir5oVS3qZ37UzwBTMrLTaG5MPWeFTSarGRjzy87xvBaKm4Lkk8kXCwp",
  "key20": "2ia8hGuxSSkgbwBiCj2o9CBV7wm6gtb4mY35dWAvusgHnAcKH9KL8oftzaFnXzhrT5ppT6BKXAubtaD6kN6whnae",
  "key21": "3HSV4j739MrBGZyvGWZnpvhAEgrn2qwtFKaWtDQSTiKj3mCrSBU9xRXMy7ZGv9r9unwb2q87ufESVgEAyN31GqBv",
  "key22": "35yuXfY8tjpFzmBDKXYx4Nr5gfsLajpuDQknJtYdFpmQZA74kBMhWRwC3Z97MCyEmdKCYbFvWiTMdkgJ6LKcza8e",
  "key23": "4WJ16Nwz62928Gd4iH9z3M6mHKmYFRUMep9MvCHtEXCDBuFQFS2e9ud7JK6vvFDZMw4uP7cEercntttsiMMX4APq",
  "key24": "kWKygERiu4okFBkW3kFixW2CeDDNwR6ppDrfGGHBF2t6jQvd4TUTvbDHYyFowzDdgPCn1SFvL4SMNVLu7ZavGxF",
  "key25": "MJRVxF8SFbAnjpdQ1DPHrWxNMRHZHg2w9LMTPUP7D4522p6VUo1p3u4wgfUBqC7fQ358Nh6hsuabNn36cBaJs4D",
  "key26": "C3yCs7oHCgNc33iLEnP1L3FskbRHAJwZLxgNTmjqW7ACBpAbUfBzb4Xa3abKVcht8343o3H1fh8gKTMDKBUub5b",
  "key27": "3Z5jSSrsMoTugsVvKFm2Zaj2thLWEj5drT461qGJxt6mcyXsakpaGxm98NTzMNdQ3RVAZkvATDKzzyJYh6hWpARK",
  "key28": "4VcR3gQikJQR2FcsVWjRt4nyZinoa8ELqMsnwbvRmFTCAYnN5HffYcdyT71zmSqc9mjZSYA5oDBdiyzz4pGwcBkZ",
  "key29": "3Domw3uikdoVCFmccQoG8vrMcKoPhf3AWoYE5xuJzCbbHYj7DTFSHJLV7ZoxRtS2D3q74Hk42w9mq5bHCUbSU7Es"
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
