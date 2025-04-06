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
    "2hkqnTCEDC5S1oeykseFx3XJqRWmvMZeDrVXcTUgpJ5MQV9MZe1hHDwkEB1jffuV1bJvyVtjRJpS1feH1V3W1BvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGGGFu3ga4EhDuEqvmJQfFn6tpPsjVZAT9BcQSE14HUia6H73dQ4t8iikggJqgJQmSFwQ1NCq3ceuXYmDuN7h2M",
  "key1": "53aLwJ4VcXEjSzGJyvwFQgDCcUkiwgTAWZfGesE2MnvP9etKWqDisHNVyRFcTuGeyERRkbT4BJcBmGGT96ak1Ni1",
  "key2": "h1fiGsocUMXUt5eh971LGVEXWpHk59NsFKajSUxBA6L96HHDBbU1g3ssreMXPyXVfLfyLbaW4TUtLiF3CxiiM65",
  "key3": "5WpXXKHhAbJDTgpXzv9Ut2syYPo7jpuJFZtkW87YaurgW7eBP8nuKUcWQH2sqa111UgSevSg3dhWPSj8wRQhCsD5",
  "key4": "4iUvXa7vPBphnVeJ3Gv78N4AGj3rP3vB3FgbFRKGWd6XGD63MgaxvTRkE5x5Q16kwDy3EfbGg4cAjnWK7MdaMoaH",
  "key5": "21TUkqxuxJFoKyBKNZHXiPhDL3ok89FVA2Bvm7MSjKA9Hco5xyyKRpvrTuABixbGuNpsYq5Cb524ef2NQTkp4U2E",
  "key6": "576NjXUBqPqW4abqvTvv8zQhe1AwtuaAcgDhM4dhKQbRszNMf6uq44AuiV9tEMk7cJMmsBMBFmMdevzfErKWLo4q",
  "key7": "3ApvDS5vafZH3GTZ4SwCYi4BsJxpSCURAfj4nCPNrvndMa5TdvSAH8bgnUVZUKAW5U46D8tNHXAm19bJcTPcHAh5",
  "key8": "39AgQMxXR9ZvVU5A8DFQhZkE69bJxiHd9BD5LkvufWcXy5b75V1GESuUyH9febTWTipc7jWzSe8ZzSw9fekqi4tX",
  "key9": "crd139dSnZyYTGYN4HdmthZgAFCDS9GAuqFoLuHFxMcNhenGuemwf7mfHHBp9CsZk4fWXaRak79XgyrvUs8oHTT",
  "key10": "41MQgxtEfdZqH79E3cc8CbfVRpaYJNHpewbRwvo1riD7pGLfL8EBwZ1NgdPN6J1D3PRUNhmD1P7ZeHhDgUe92oq9",
  "key11": "2LJTsE9inJd1aJzd6nxj919LyHfWy3eiDgaghh8yZfhXUCD98cRZypHBH4eVgcfhAFo4798Lq5r7ZWAvTE3w6SuD",
  "key12": "oaas6rKY67Ny97nszKdpncMi1jvx9Q5d1MNngoZcdFLd3ed3L6fzDYi9HLxZ8yHgGZD4hFZZV26L5RVoP8GvrDb",
  "key13": "2YJooiXuM2rAJQ6UiMaR7wHfq9HoGkc1fM5uNiGWGBLr3BwFjowjQZTJfTbJazLUTvbH3vijsk4AvpmWnA2KpCBx",
  "key14": "41cwzzqLkQGoSNVPFqseAEyAHpfdHgdAmcZQD6Xz65bZn9f4fSz9VYwm2xCa9sHdVc5ah7LLxkEQ9pywtKuzJJno",
  "key15": "F7RXSPNPRVx5DYJoaTuUeTwYXzEtLNqcENdHJHbD2gAMqgkCb7kLwdA46rXp4hBFzsv6cXb1wJubCY242tXEyas",
  "key16": "64jWjPUnNySqeLKBV1T2YK2fvkAyDj3d8h2s5pgbfBKHzwfCshYkog8J6DShHYRH9c9rNDrg2TYZxh7qaEFcL5kb",
  "key17": "37LjxtpkaUVFBRQjKfb2KN453LeRSc1JRknFkCSmYqf5FQhMUvZiB7YFchZSxubnfJXR7w5Yw7NJEFj1GyggMb6M",
  "key18": "FSJqMSd5nv2QX27BdF2GcT5dKJ1cxB3jT5BSZ51RfWK75ZouT5qG92W7MF8tWtjHc2jYGTAFRNEoVpwWZLt3ZP2",
  "key19": "3so957LqRWAxNwpzo9axRFaA795kZVGyqLJze9Jy3WbF56jnvU68TXoY86Kv262BtcB93A8RNxsMusCLSZu7eKcn",
  "key20": "4yqk5psZDeZuc3xbcpWDRn5kgsJCLdUXjtkFNL6mehuLpPzPAYzHQ2AzEoJSYLhQTXtwvKccGHXM7rYySgM7dZq5",
  "key21": "3upi2WcAhLqjoomQSLSx6Hb1d82NxkKxKLFg5zSSyqJR8oQCuLSLJib1jtrwFT8fpZ4T8bbhZsjp2wyYRJbAQ4N2",
  "key22": "4Bvztv3guKMqvc3g8qzgQQEmenHuDxZpH1hezE9Ch5NnqTxjJY7wXKMukKLZ4wt2MLvFtukCU9EgtBiW7rtMiTXx",
  "key23": "34UdoAV9G4BZi1zrTLLLbWe631w6TxnYSN364vfhSD8AhrwfvBboyEzr8oYE7VJPgEjRvkuWtZpxWaKqMXLGrzS3",
  "key24": "5smmi1ZiYJXFKtho6UvyJUeeTcBogeoLaDTc4meTAdZ7FaMY9UdMCa6RCNZsFAnoS81FE5rkL7N6s53a8YsJgZeB",
  "key25": "5VKkBqaY9259dk9bkZfAjszxwixxbAyaQAm3aZRLfXjTRr52LeBnW3BtPGkMSLoC36JY97RkPV23cUp9uiESp8yH",
  "key26": "ibX53yFpbc2E5WPFoUDHWWBnyf2RXUTKvYRfPZJEhVovMonZbF6shnv9zVR6pgao6ixPrVjf2819JKbe1xBoLoZ",
  "key27": "SngKDd9TwvrArecUQSFsy6gQs7ZJwgDBJareqaTLpikFqMZQQz9KT7K5rGEoZQhuH4S178NZ3VhgR8omrV3HiFT",
  "key28": "2ziXz7YWY5WsorPTyJQ3j7gQg3tVKnzuJbYM3HMGRFe6qSSeaMQyLsCPnbibaBDnSe72CfWq8Rr25NWAP926vfh4",
  "key29": "3eECHQmc8FkC3eSaQmGxx1S4chRWsqXDHfQUSadBYUXHbHfPKkksKMQxcq7ccJgi94QdPd3v7xJAZzCqGtGSqy1Q",
  "key30": "3C54npouY8zfRf5FFF1oLNiSehp7KXUxuxTEYFVH75XDh9XqoVf2KL15a9z2H2eU6az8KDmcBsXYfh67GGn89DKP",
  "key31": "3KkxGqfqepbcUbDEYRk373f4LpQFuNgioqxmvxsqcVG7RKN2o623eRog1TUDhKfMjCWzkxp3FsneNXyo2CHbGctq"
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
