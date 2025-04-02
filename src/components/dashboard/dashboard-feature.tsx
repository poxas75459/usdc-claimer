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
    "5xviNXGYfzNPUrQYLZoS4oTLJ7JnANZsFg5VvEmZTczBXNoiT6wC46ocvRzkuAo7E4LUAwvgKdYhGTWTT1xLhiFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aU1rHqJcukgnkhVUmksmJJPY1BZtviYrDCjsW7q4fEbC4qFr8ST8Sb5vpU8iHuBKve7wy42yEQThMTj3sS1PYh6",
  "key1": "31EXf8M2keV6197Z5wMkzUhfbr9eVLc94yfBQ9YyT5N9221QZ15Wa5eqR7qJwDG1gYi2oK8yM92db9pvHhKVhq9H",
  "key2": "3kRLDG7F2B9cpxbdN1GVQJdhT11vA3u5nMXSA6q1BPBaDW5rbktExCs4Tobrd3MPUk7KrYHMARCUNev8CTrdvipP",
  "key3": "2RR1ECCPugFtfQEdicYStBMjRNJiJEeJ4CaGaqmUU3moaFrn7UrxkZysohf2mH515rprG1p8EwNq3u1YqQL2nHWL",
  "key4": "3eJsdUyiSDFUHn4gtAA9MVGDdisdMeqkv9BQnNMXAWzhF2SCQjHE12pQTGDPJr2YR5s9E1Sj5Pc4ELPZeko4UQZy",
  "key5": "7NCaQVvPyLNMWGuiZsWJeKzhL3Fe2QWbsY8nCu4YUV2aLhPN9eJPu9iRxzCqMHJEmzzftKnD1UuP9p9qXUMSCFF",
  "key6": "52FEHUTGmyM263pRXrRcEi6vEvCSK7j7uQEJaswRvzgLNTyY7rjd5KxRhaeSGPqrZjsRPVNutbnLqTRpoEB9LfCH",
  "key7": "3whTubaUHnvAtU72ybSvoke8QrEkZY3JqSjeGmePTyW6mbEEE1kDNvideBJgnXSdFP31GGGssAL2vJNHUfQT7rWk",
  "key8": "3ChdYmgckyhstZZQhRYJtZbW2K3KqLMKUAWQ7o3aDGdDhLGsc3CpnzWBF6GNuYFY7UnUPq626cqs2JucoYTmPDKq",
  "key9": "d4uTgdnnPignteAUYHYkJYx637tTpZ4zYR54rKT5VZJ6DTDtki2tVxdSzusyRiCZ7tQ5hpFNpFxHi2BqCuUGY4K",
  "key10": "RvWpw95A5k811cnwNu1xd5wXLLfJTQtkgeSk33WUJnz79ayJV1VZE19RkhUYrET84r59Kd7Rs7SueQUDoQvPwJZ",
  "key11": "31iCR3h28y7zGVtHAiEGaG4upEdhvJ8MPeEewVehJeSFu92RzATTW9W7Z44cQN2fwg7dduNVcbLMqmuY5tVJS1yN",
  "key12": "4KLtPLc9DAgFQYwEzWB1BZeNk3xYSPiTKgm2P7Sgoxh6WpchYFVZe5Bog3HUfUCTPziFkHhec64LdzzXVtpnuvZN",
  "key13": "3huii69A3sjkaNmPFZwocDd91ssMdhjGKDq9yrVDXrdNCipTxQj3i9MZBHH7mYpDkXM9fY3diS8d4Y73QXL5iV82",
  "key14": "ivQ7MJmDtsanPfasYGfLUsLwAnTR5DQAGgq4DWpQjGXmu3h14UGKryotB8VXxzUDWH9gRAYn5fJbMHgJGYoFgaa",
  "key15": "3r7MHHt5uZnxJU8hoqEZjMsyA2fmsKguQ9tvGPDBicnBKyF52d1XZA3SzK5Nm5Aout18FQtz5UW6TetDLTyCjuqA",
  "key16": "4NyxbJaKcVypxmsnYFfvvDXqx1xneswuzH89xLvgZag93EoCrw9FJSVzBuMVsFxdGkJcEa4o59LgK56AAPy7aWYx",
  "key17": "4KNZ5kkuekqbKweWWMEVaD52PmJpL3KSFrTTQzoJkoLsH6SuUJsGwyERWbp9qhVEzggsuNevz12K7QkCvd5tTyeF",
  "key18": "u7jHNEuextVcXyzUJsYDiiVEeJZK13Rv1Bga91XPKy1LWF2dabEZTECwNe7cRQ5XcXV1QyEBZpDPBWuDYeSQ4KD",
  "key19": "247zz3yBr7PNACh2jdt9B7pHTSjdCJsrdhkMYFRBUBXD8J4qpgiqw8QMMFCH56WTFLHrNHAyxAuXPP4pdgVHq2XN",
  "key20": "3rPf5cSmqJ2dtBAhx3qQuVi8xuXmSudpjjqdovChJcfmTgj5Fx1nqYHH7uL45aYco8QKGuttMzQdqYkpg2K5zFts",
  "key21": "3S8F1wVJugF8vjhA2DDSsjQjWePuBMadUjNvg95H8o12Gw9eoKhuJXmzYGMfnyLg4z1Curaxxj4F8AjWFhEcMhSX",
  "key22": "dojU78mNXbXYoj2khted3ijtQiMg6CnB2pnunAzFUcfSvGngLDM8qRZxHrVRqS96nnHgQ4Sc7ZHXcsearQLMpAB",
  "key23": "44FUdEhNvK1udx15vRJRXSwB7qoNmHV4SwX43sfbes6uUko8nVV6iiWwgMvTZLyoC9oBghTQcTv5Nivp7rsCB2Ei",
  "key24": "4PDkrU5iRKWAiC23DyteR9bKxzkQAjCUnb6fWEiKFComwgxK2Dh7fmRbwwp2S4Zem5xv7eGxmNcb84mcy8k48fMv",
  "key25": "z3ZKzvKtVuWPKXxX8UPNxpeux5sAYkYqvDMUvPJw9jkE74UFhdVzKNy8jqNUt9pHsEMps4GrnKChHTFG2cqcYP6",
  "key26": "2Gg3uDUNNdYH5xAqtxTox8bP38LkqgXbwbDbsd76o6mW1SDe1maSaj6pGjRm4HxTXYy3XhPviWssiNohF1j8GJKe",
  "key27": "5vANeBSyib6FAQdY7DTQM9ZhSuDMjDQeUKPU6fm19aHDucBWY2dSQ6sQv64TWg2RQ1qVivvE7F5BPPDZoKCDg676"
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
