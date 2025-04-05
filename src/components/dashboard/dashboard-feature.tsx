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
    "44qJVpwduP3N2HBTHDEtCP2hmKPCbSjY4KyxJeYAWGuZY73sqNET1XmwdYNeMY2jLmAxRiUS55mafFxmPbZwpPfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHwgqA8XK345aMotgsNJmeF12D2wzaFNEjLe9JDUm7pVCs7VTCZSaa6qxw38V47aAPFTXHo3BZ6PETuLWYXqXrH",
  "key1": "2hs1voYeXThUy1kzYzzjWX4bqYFJx3qQYefGsK1oKopC6DywftieWkTYjLBHDyTGtXShybEgKb12tXkWFHFHF5h2",
  "key2": "3nakD5jJq2QLFjYH45MYBjzR6cQTETPkucpMprq1vqsha9nw7HHsUdPPZsZnX8zzZqbm9MjeeaN4EquegPzNPKwz",
  "key3": "328Bxf76rNQ1Yj2tGTaNcWPBLKYaWGJnjoP9dEcBpj3mw4T9bvML8EMtRCwZcWsDMCEeFxMqVyVq1PKB53FBg7TS",
  "key4": "pMr9BsPsCn8cSPNPkSHv1CYcezUcdWQknzgQ9dsR5K4DhSdTLekmLJwL6YLsETNU7v4yXvjuWXyxEAaj8cC6kEu",
  "key5": "3vmZ7fjhjHPxhs88iqfHjq2524M6T6YEm84T39yDqzTrEVggMsEnbmU4RBD4fVeAryfq7HdkbkL9fWDH1ZtCJhXN",
  "key6": "tXd6KamtTd2XNNDVwJEGjGGVrCvAJ8QGfg1rttAuCzR3hbLcfhDe4aC9p5Qfib4bWjPGrbKvy9fWRqbMHjKzQ7G",
  "key7": "4eKgPcnZVfRomaQjZxaC4X8zMMR3jSFVYQ5c5enbALKF566KnVZhZdfQ2B39HD8rMHWLyCPHouBAnx86SrYjKX65",
  "key8": "4Hyd1yH9xSjUhT8ueFYm3xD13dzUC5vNzuS1c6RMFiKGiYECgC4uwkAGgZDqx1qeXiz3D2zXgtAQNTWn1KBtF4sZ",
  "key9": "5ENA7N3KvGWVJeHPFE35AFVdjuqyaTn1NqvsnCdN8w7T96o3pRvoUPYXJ392tFh7y8Wkij3mPYW1KGtTPsMK4jR9",
  "key10": "3cSBkcZch2WiG8zV82cNV5MWoHS7ZepJKzRnLTRsTG9hHGo2d1hUce5uc47Wm8kfutcD6Sb6N7xaxVtwrW9moEVE",
  "key11": "4mwW4mgRw4rGMAfofgNYwqtuNRoz6ai1n5jvixZc8MSt3ngpBzJacLdjdJif6cgSrSGYskWRsTnCxdb8aA21FCik",
  "key12": "522wiKrYxMjtJWuuTvPKYk9BEXrjLxEdvjCxhTrZm6zzNZhGaagQo9A76XSfa2mfHAHHjNB3KA2mssz7ydotGrP3",
  "key13": "4XcoZPBKTwAiKmGXpWoPgj7XJ33Brn7aRHWXY39mz9AiCCTmQ9qFfhBbBSz6U4Vzgpjaby8cXtrLovhBz6K8xeyg",
  "key14": "iqcnua1RHR9jwQ8LfvHWde1CfWA6KHeg1bAxXTH88ewT9Xx43m3b3PWagsKY4URek1mqBBqHPDJLRAJxt2MtDzV",
  "key15": "5zBAF9dwVoyoPtperafVoeE7xpLv8HWyp4bVrJbJAnnHvY34zYwcKoJGXXtHe5jxisMER7X1rQMKU1kBVThXTAgN",
  "key16": "3XcQo8z3FG8Wa37sn3BLP3hYBbjS6TuStNGb5TdaGmjH7hfSJtSzh8CdxN52eZiKny5toxZs4BBCKMnXV3TPzKUL",
  "key17": "39kKdGU4m4nX67F3UGKMTH7PMATfqXgSqUve51ZVRqEjMRNCPBgZcUKwsQwSiqKMnoxcBinBESnSSUM6rNXkufVw",
  "key18": "AdMaseQBRJuVQHMZXBzftUbfMEBpkyVycLRrKeHsADxwQ4BKYbyExXkXgG157rypmFETPDRj9GiMKJV9WkcVvHL",
  "key19": "2QgHKttReLJeYvkfPA6CkwEbQ4ZZdGkkwxW7Zn8Z6NsRQK9SkBc2tEPw6MzJ5aKiKxBmRBv8BwMhXGt2hq9cdB6M",
  "key20": "4Y73eu26Du8d8Kgia67M69j4iT5VuL7yNeDzreN6kFJq6yXa8uCGM5EsFx6n8Rnh3mPGcM5ajgeWGF1vpu6mAsQM",
  "key21": "5REYywwYE1q5MpGa8h35PziKF9zauYbsL2NKu1CrNDMEn1EfnGgLnSMpyfnxb5cJuKih1K3snpEvyyYk1EN2TFkR",
  "key22": "7eEjHgcwCEUuXpSztr3TdAccRwCZANBXU7FqR7v1tHjt3tWiXXTSJ5NyaxZDJ9AnzmhW4erDLdepGzKCgsXnCoH",
  "key23": "4baYyumEKwHLWAfhq73J422C6w5wNiZrL8KrPeJywgBNELb9TGonJQVbymgeQ8rWdwKGan4FUNCbK8d2bHZ75QY",
  "key24": "4noxej9kVYRTKbfpwGeJjgoX5dgvNWR8gsvkjXbBbsirgHWCk8NcTQEtoEDJsrxvignaye3shTPTuHSgMdfKbdvk",
  "key25": "sJLDYdKCLNd6eQVT4WGeEhJj919E9wwiUYRYS5qYK9LRzGprN12scDASw9h2rCGzVMw3JCxgBUXnebuocMfqhLn",
  "key26": "GPh5WE5NJMyt7JdqRhUAc9dXqGvifb2j3kVgET9aeuznABQq1EhMYyQnNGdpiVEE3VKGnw31dCCWXgqvKVQz49b",
  "key27": "uiYBmzaifs1unkENUcuJvAFFNXnkHm8BxZTxJtHoquFE3ZFPuoCaodGki67sgBXKw2zyp8AyqvrdyNzWL8iuFTT",
  "key28": "9tT3JeuF5Hin18FafGfoJPghfYuXPSvt5aRDJgSYcKqErJZ297RREf12PNMFX6aGZmiHF1ev8mwj63TSScZkAZY",
  "key29": "3yUuwqSu9PRyaVbPQFXTyksKapYN1N3E5312ZVNccenqBVRUTRSUSCAE5Eh5TYVfk8rfzNbJLjzcoAqDd2argg5X",
  "key30": "2cuPT5AqijAC6fmR9aiBKNUgYcYfVDWDD8JWqSPvbTY9yjaarVVECHZdvXCu2HevjynCp2EQta7W9322yr5nEH84",
  "key31": "2KVDxpuYAZnj52UCWPHhGUoLFgDBuc3pjpKUQEQuyMQspe9nFs8oKfmXnpWch1bYuZSo1dYG9i9xS4xqahdCw8wm",
  "key32": "4yW8LPZZF69cUzhEDQvTNXe8BZDGant59P1DCMk4b9U7AnBFTcH6BLhxprBPYM4KkPyAnNj3KpdEbuSidmphLedL"
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
