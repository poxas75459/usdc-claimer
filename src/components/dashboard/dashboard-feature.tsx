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
    "2wxTe9WDSet6mhRVyYxfrXNbXaFLMum18nEhwXZ46zizct6vyWyUwqWJtZ2bkspt7qiw8FG67EgJZUZS5ihAa1wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkQrWCvk1ac1QxVhYZU6muwcot1G1ThSXXySVJh52NiK5B3Q7pA1kxGS4XLNrgoULNZssqXdyQz85QZDh8fWrZH",
  "key1": "63yGRwTT7wiawdKk3bPSHEEigehqhb41XsULeVh41H9a2ecWGNrvdJuKHn2iYvc35eSsGpsWPuL1BKAqHejHoM4T",
  "key2": "rG6dCgpzEetYEFu8T9ahuQAHaSj7g8oz8FDNo7C5ddehYSGTgZ15Y6dYbUXwxsVt4gnt7HSbB6m5ZmaeShdcz2Y",
  "key3": "2Q9ARL1aJTSua17x7HRYMzLXUE2Cn1UWa2DuMCDutjaGHxxYFcjo3eAvJNuoE4J4XZkBcuZ28dCixgA8dJJGEo35",
  "key4": "2Bcrhc2sjK1qbbfdQSoyZheFjCu3myJE4vnsfBduJXPqy2ZgTHbLneF3cSy3vNTkVrrjwmRewZz5vmqWWmq3MFCt",
  "key5": "3VhU8viwjXxA1f2kxBqbzkrbL2UFixR7bep9NzTRMvXVfDZJGkqwTUdmKWmhLgGwecwpxUkXu2AjqJo2VjZmSUUK",
  "key6": "27a6AhqBqSXXG8z6CMTiGnhnpDkgvYu6eArMBG51pUcNgGDyjkXgDPKs5zjFbQ35c2oEeUDKNsEPNZqjKZuDNa5C",
  "key7": "2zFQDwA2evtzwHyQud8QQCM3mSaJ8QXD9Q89xV1gggeoLSdmo33u7Ktsxs2AGMieF6Wq9EiD1QHBB72paUenHnR8",
  "key8": "5FyrUTmBn2dVbrumZ42nBvT9t6GXpHzHFfDvbqakRP4PQDgzeQ2E5w8GENEHSPtaXLXBri1X6o9nUYqvbrzuz1zL",
  "key9": "5i41PqRxwCguTcbiU89UP4Erpcr12JnswXma5DhfoUduCGUAbv6fwBEFVLkr9gMfaXPhZADN7NkeDcWHThASoNvm",
  "key10": "49raKLeq84f9xLhuYnFR3UJTpaeu16c63854wEgaRxrM2ZHim2DwXf4DTYbKzwByfJ8NCKLpZbFuczfY5R4dWEx6",
  "key11": "617wjteiYqNQSKq16t7NaAwYSbmqyVYf1fjMgT9wT8oXnED8mQbJVJD56Y4WPSej8xDj5NfETsvN1vJrYG1dexEy",
  "key12": "5KeweZNqhLuTeiqv3dnrW6jq5k7k4F4zPnGfpfhKXPZcZZYx5rzCXfKrbjknwff6h8BSyvzChYpW83rVfycf8uwx",
  "key13": "4TGjQMQmxWysU1jCN5RchLP2qeUKj3ffFzZ9aKYBrrraaECcQ1eHnMNgoaLvXZXSAVb3PedEDosvq3BLnJ4bNsQg",
  "key14": "LJj7MQVUyPUdM8FnxhJYg63mPdvKiMCwXVWVxnUscuRFs9KCC8hvXpNQKY66py67F1Z1gNNze7RrszsWKUPsS6g",
  "key15": "2ADqgTKrT2kJRu4BUzExnCMRQqRSEJV4uQDK2qaJruqe3TdrPBL1rEsFVQmuq5UbG2rU2kX8A8Vi5iHLGAo1ay6u",
  "key16": "5cuQmdGr47yejDFED1Le8FgVpvoiZqDEzxYaCjM2JXfbdmj6xFMfvNMccp658m8dCMJbU2Gy3WHtvnz3Rr1SmU7P",
  "key17": "2xPnQLYofHipJdtiCz2oaYtZYg9DsBpbbPxaQkLPJyjMToYfGLDenBjJScZ9NGL9H5iHBZnjTZYUQXyiQRP1SZNd",
  "key18": "4NnYenkpUSGMG5vkSYQSAXKaN7ALU9T8WwG2sQcF7Abf5UKuMNy8HAm2xPjCpznVp7LdqW6X2p9KnfSY5XmQUXSP",
  "key19": "5Cg6vmxNcdYfkTPXFPQWMTTCXkrBki4G5Piqg58kXZhTvWLxk1U97cUvoR5XJ8qYDeLbjrKp3pgzeHd4hPde6Zmf",
  "key20": "5RXNd4aqRS7T8zAros2wZogWNchcVsHqK4edxbvkqBpBGBDVdh1oVxPeQY3PBPnGtZ8sHycx4PNZZAHw5Vf2uyuh",
  "key21": "5ouBxuN3XbzqZEr9for89K1gcLuZfBhbP3hrZpNs3WFCTxzCckrfLXDDrjMZykcQWgpZwsa9TaPpSPvxkJkvFwHu",
  "key22": "352tochugeBE9Nyumg597vBwV5a22btnyitfweDvRyu1283irUt2rWmYJU2yG9KsEZF6CYVvZxz2PthgyRXrGTKN",
  "key23": "3d7EqZSH6MX68HvzPVaT8dziJQeEo158SdfjfpVvB4K4h9t5eo1jVAwnugSp3Dw2eKzjBDwNQqLCT4aTHDKW8wR",
  "key24": "2kRPsbmVC6nkNvL28fGjqLvM1wFzeGw9ZxWy1wibvZFAAz9aigYKtkB3kehHzqK8PYAKpPENfYQ8v4KXqsU5mCRj",
  "key25": "5dg6VCUdWdeczC7xXKCcYd6oKNQmcHT9UiBvLi619a47jfgP3nUWFf5DQ3PKbAk8fTfU4vwbJ51MeWvghrELhjwQ",
  "key26": "XPKR4zf8yU5cHWytMAwwn6W4vdw8v3wxj52n2xyRkiuGoPmaRHHKBYsDVS4MHXdGQ2J3cdU3nWvGZF52CkwRWUZ",
  "key27": "3QeHN1yoN5oz2KztyzRntL3uCSkEjLFMtPWBJkYnWmLEyh6Xeitw7ppVCJ17a2PQaFfkoRFJwm4mDFia24FUcDEu",
  "key28": "4oan3mdpXsCRcxWYetcovPMdt95mHSve3g5zdMJFin3wavvjxGYRDgVSDb5YAwZ6dc99DUr4EyUpimGjiqvAZET8",
  "key29": "4TbZjEc6NebBASVbQ7Ga1tH9EhnkH4chd8eoeQtaXzQX6QqetqTGeyKr8T8KhWzdTnNqAR1qysykmsiD6Z4KYcuk"
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
