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
    "3tWfbELSwsoKu5QiNwwzraJLiLv1K9KqA7GotRpaQQGs3S9RLUMBsp7ZnVwSWZVjnHvpBRuXxSzG1r4cvdXhGQMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYpuN7CWYLd3eWPh1Jv3izyt55S75dePj7bkMCXALR3WLP2boNHf43w3d8thPicfxpapwf88M1MbYDg9Cx5pow6",
  "key1": "5WWmHTT8bbruSN6MDus9r4rk2FwjnK5JWukWohJXzFQ8UeZkzHTLJEircP4A8scHnKw2F6LNRYoqw5pB2SyYR5Wa",
  "key2": "5QD2Hr2YSK8hKnY5WiCVUThUzF3if9PcFCmAtXcANCn7GNnxCCYoxTZaNi7Y6GxnXQYsNaqhYTzKyysM4kD6wjbh",
  "key3": "NHV1mN4JRydST9yxjMScMKvpVkD92VZH6r2o4D7gmpNLGAVYsJ9virfReEh33o4QLVvvMB4VQFZuw51F8PHtXQB",
  "key4": "4sV5f6zi9MFwcQuSbc3CJtP3DTa8xJiUsmVL7kf4qxxVBWDXZPRidcX628nozBh1tJGnLYFmjSfeqKxf5nAM4TkQ",
  "key5": "4zaM1q95Ut5xieuKWexnVrqufTZX4CFqfJrzVb6Yar41LG2EC6KV374QAaaHzCaV9MRskf3WW9rrddoc816Rdt65",
  "key6": "ZdM7KhNbQbg6vix2mKjQYeg1PPAYY22QRrgbfnnmL6EkcEzJogdF5YhcrRmRFSF8N4BZrLCbctMW2nFKVuwzDks",
  "key7": "Wbxz4EeENXmKSZAZSzSKHtmYAAZi9UoKiXLFSufF6TfAo5f5Pb8ZFuN4f97JjkoVe9j6Wog3vDNj44MNkQbtRf6",
  "key8": "jPPaXMr2z34GNhfkXYsNcrFJKXpXXWsxZbTtG21Ch19cbxu1x86ZRdkCavmAS2hbPxPLKJpfLVzzxLD82RY8QD6",
  "key9": "3s54xz8ShcATDKtpvcDJgYP6wW7jwTyEs6qexGbuxe7XzvrXtmZvFogVggC91FEbswC1b71fLb9jA9ZFdkWEbAw6",
  "key10": "2SRnTpENBku1XzsdCoNsdWKdExTATwiPEfHsPnutnFRAcj66t8XMiwniLm6wN3aawDB36dMNynBUJ9VdLMUgHKUd",
  "key11": "2VbGbP4otzLfNzjdwuNsgWgYhADcy7WzpfYo5pBjiJwuqCFbgbjww9VFE8CCCtYb5QyP8Eu3i2c7oKW9ivwEetsp",
  "key12": "6QVBmR3AzbM7ow5MxsUMxAdWSz5QTVHYCUjHWVo11fEbSQzv2mdnfuMjLvsYowgR4StyyzbYwJky5GE4WrWTtmy",
  "key13": "2WQDbYkqAjuuEMkEmYERCU3NAD4nofo6P454qNYVjPuY49KHPgKDB5BM1PA51SmmisEo6io8yQUgiv7PSW9j2RAe",
  "key14": "5ZVu98PQMyLko6uW1pKsHBqEqJDEQsKvHC3PhP3d7YND1ZK9swG1VrTNYc1QpSnPJ2E8AXpNKueyStqo3Sdme1hv",
  "key15": "ZXTPoU7VwzHdFbFmdnA9ak6zSko1JdzSmWVzn13Vf6DkjGNq6x11oQQSSCLqG383pvZR3Ef6qZPEasEveBTjpo6",
  "key16": "4MYNeJeDBBr1aYYgJKWqGf2qQibS5BuzGATSsgJLpZkybtTJbJ5wEaMgxWVgvbqtefcuRNqC5o7NMEGGTt1BaDyo",
  "key17": "5Gbdcu3cPcTDZvv6gepWGRfWzNQ8gLr16rnZGsLcWjwFnR2uEPzDhZf9tdoE6UHtYw46eLsHP5S6R95fxafQTAJV",
  "key18": "4RAj5DgEQP9nY9gPRkVZpsb7V4FfVVGWN3NqBMpUgJ8DoS6NqSh8uJzTtjU7HjSDn8MMmaVe1Rbda7mYpMbMaXt1",
  "key19": "2294F6hpNz9j5DVwqB73PPjw1RphCqbWxdngMYR7UHQovB7nLSjsuJg3LSNoCiQPq88MbnFReSMq2TNtXwDypGy5",
  "key20": "42kw1TmgfiBjRpRqbDfVBWF51rDz2N3FZM4qmJuHUTmo27tgG3mwcdi2sXJPYZvTZMx4eXpU41jMxRmM4WQogZqJ",
  "key21": "dvthfinkjFu2rMJJzmbSH53jJvtSoeeTPHGqvwDKEt55GzReS6b8CGMHhgXXxy4tpK2kMRpi387s2EGQS7P1TNv",
  "key22": "5mWyeNsh6m2PAnuwhcf8KKxzGj34rXRFKZq2zE3BW1kYuKaiLUE6Rz1CmWk26odp9eJ43R6bUGFaw9991W9x6tUZ",
  "key23": "3X8qCmJT9nRbunBGXuemwzJjvMiA9aK9ojLSaDAmBbrKvh8crpBHnaxS8GxCTkWpE4GDLrycf79fsortgeaAKxX1",
  "key24": "4KKCMPaNwxucaPZamGy2cgwS6ziQcakJoFJY169EvjM4eP2ZqZFMFgnvWqMC3B5pqYbiydBdy1B7KMaWtvan1Qjq",
  "key25": "D56PErpohhiajkktLDWy8WEQJBbZm8pe9avP7HVQKzRkhaTmgmCV1kgJXXbjkLbke9MNXCsgNHAXuQHy8yWy55S",
  "key26": "vZpLjoMRzdrGHQj9GCkPuZZeK5MUDedZNh7fKta8N2mhJjM4fr1uLqMkoUpW993ER7RmbHPN11J3bMX8RbJV6hT"
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
