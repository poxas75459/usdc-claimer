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
    "34pQH75Gaf6Y1ooG9e6ET4E5HT2k1poqV3xxZ1bAs8CooBMriuUkSBkrSPEj9hjJHvw53w3WPVwp6iikJYTuDhnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYuVfZV7Zydz1Rj1vYCt5sibgxNQm48yhMKbM9uGEDBSDDzKTxe6wsX8kFg53QUSX7NJKd5wSDniqhvk6Ro9fzV",
  "key1": "4cLsJ1xMhCoqwgbkk88nzfDnPPVX9G6KUf2KY94mgJoJTjrwTLH98pz6MmAivXuYQkdYR6hZ5rSjtUkefPemjPZ8",
  "key2": "jQVAruuKb4H5AXNH3dJB65rvFs8fRAkhcB1oisWZ2RhciPxgUDypVn6tUAJuumnyfQvvF6bxrjXoEkC3frTFeuN",
  "key3": "3HcpC8Dej1ZYsLDCfArPEdsbqtd9CGZ8tKsgVeYRmMbYAva3f4uyMNTwVB7F2kqy5i5MVbTLToJujkBSbem7ZEm8",
  "key4": "64kZ7W8tH2uWB4FjaR4PC9BXeXJjoZmWf5EY6ANudxLGEJCTe6pZ1wCK2ZWzUnT5PgpGzmuGLCrBFRtmq2FsdqvF",
  "key5": "4DVKkFeGfHkzLjDgRBh4ELs8svbUDKWnXHDKh4YqFGefgX3kEVE7uDkUnWrhuN96fQcYTYLHqfeU5qHhCmemCf6e",
  "key6": "3yDx9HZTCC7NCTsHA8kqv75D7GTxjeRNnLfQV5isnfQDyshEqCtGiJBdKb7FBYNJ6kQkMTGFMwcsChA1ndGYRMcS",
  "key7": "4XzJbc53LnDbrcnn49GvmKUH8MVfAvurdzZaTrKqG6h3GSd838ssDgu1wsawaXGXggkTKdjyQLxxcLgeB7gQbUVf",
  "key8": "2Ej5QPbRH8aaGdpD1mGjBRWFugWPs7r4YWhc1DYnGAeokxiGAuY9S7WcBWM1r5g4adCfxb4QZs7e4we1vtADrmqh",
  "key9": "mvd4YmAmL5pAzoBo7RYeEEtoFXoNxekrYbZTECoNoV4G61fhsMNFnZNDNDo9yNR6puQ9kmNRsbYEZxXhPxYQzoz",
  "key10": "4Veeb4m5kDQe9h2SC1zsv9A8u2mXFh3brVSsZGba5RetVYurcERbjiRxunPv91iVCAogZEAJFxa262JUSvUVKm14",
  "key11": "1Xuiqz1mAqSJAmbkotU72iF1QW9gLHirSJCKZ1LT5NTQuuU6oRr5SkjjAMyHStpefbkRYFy5yp4UutpGPwzgZS4",
  "key12": "39NmjKq6AoLL8qHS88HBXxpMm9L13KGj9MpHGdvuGv2iy9aNSevWwUh6TNGhQkGbr5xjUKmB4NiHccrr4jE1bE4B",
  "key13": "5SkUxc7krUvz26uNWcjWQKCmW87ebaRowcreGJUs8wMRDUpAaP38kNYHa9gincZjQrB1b9rNeLRtz8ju8q58Vabh",
  "key14": "2JKaunVK8Yg81V34pojmVmtXKLRQNcemEW2N1YXKUn7okbX72CxdCb5wgWjpPczfgBwwH3z3J5rvCCy8VHveExPJ",
  "key15": "24ZeL1jhtPvfS5jnsHiXTPHxdsHj85PAiThoyDTrr8Cfpfgho35oNycLXTiN6z3V5Z4foVgX5pWcSuUfsBiVYqMy",
  "key16": "5bcEacTKYpTQHFKngkYXnNVgJhR954BonQPPLmQpHDQowCok5XhgpW83GZDiozaj6otHQ9YE8H4xCFQQjsEvHZpY",
  "key17": "FU7H6QiUTxoSHeBvJfxYpqs5jSJreHJiMs9NPY9dZnNTsVCVAYtK7ZGnUr9gTEzedgZyLH7eFJSM1nocdZ5Knv4",
  "key18": "5cGvhcG58oSdoudSDhDpmJAj8J2ebgbCWryJHQ7MxYq4kL3qsm8opJ6gzDiv7ArrfCRkFoSHRZkmwsKTiWpm2bkM",
  "key19": "4YMJRLNsPKDtgrn4HKCwFNLjH2SNuxBdsr6QvzfABDE4vXFkVcgbzxoUmgqKx3jqx8o8JRoDeJJCbrqVsc8Z7jjD",
  "key20": "5Z21SaZLoWdYWKaseKf1taEiaCQnWXqN32xvo5DkPMPFLFEgjgwWTAwu9m8ms9S8tatsq3nuG3psSbyzNVmAzdk2",
  "key21": "2idtwL62fhCfUgLG18bkSgc2prnMBd5TBUwFPvTdQhVs1Cft8GKKADtBg5AiSejdLfqs7j2Q3cqjhuGTkmbb6dXG",
  "key22": "46Qr186wYmbBDegBq6qbjaesbvc6uccGpTmwpfXaRvTQjLXMRJVh7apwT7Chb8S6ASNwPsTrCqUfx5pTzJb88HFn",
  "key23": "5UuFjhWTkdzRXZngkwE3YtroqH9vwuMETpiuikAGPeAKLhJMVkFBkQM9LsuzBv5oMiA5E8svnFgWdTNgJPzynvQ",
  "key24": "3rk71Z8rrVC6BrENRDnh223qKcrHzotV9Cxusdheay19CeKJbVH6BeA8TzD1WA17QXEzf8t1mxKcMRRz3BJ9TKnQ",
  "key25": "3b5VYmJeMSY681LA1kZ1mqX2cYuBJQsoPPvDGYRMN2boS1GbzFF759du7SHXYWBNUMfZsi3JjuiTPwJDWdNV8vx4"
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
