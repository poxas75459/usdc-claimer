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
    "4GR5dVea4tUGg5vEupYy18FKfjh3pe8ePypTSnHLqoVcntsuz9ir884pSBYZireFaWvx2Eia5oFQFQb6zn1Z2JJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVKNzoon3B24dE9Xtqk6d5Afpk78R7ovQ7hkps3tFeBGxfj3WkETFjxJbPi6oUmcJ9YfESkFzox93BE1BjhmB8t",
  "key1": "3Ev2W4iYDY9Qr7qzKHuUdPG9LLFsnj33r274yvfoVa2yDHSFYFgnfkH7EqmrspcCQUzbhko5F45aFN2UbgbBE8J1",
  "key2": "5gJJ5cMBqXyoiGNDnHYK8e9ZUewF171FvMAwjD5qxmtev49RPgszriH841qcrSDpEkwRT8y95HyAbgMNG3Zvgf2S",
  "key3": "3YcsQeRxivrGHUvfHeGhS26jHFmHQf5tcBEtf6mMvaxZJ8jQ4AwthRSVx1FwMkugAxtoZDrz7GpQpaHETxd946V6",
  "key4": "55CfWnjqMxWa7CjG5s4mZgkxd5RbnRtCbMKbtsxE82u2ZCyWPc4UcEwBBzExARkdW9JXzhyQMneLA9Z5qrQDewKm",
  "key5": "65wQaxifJQfrZhQsA3YrRLaboSwfwE4WqeXuGFYbPh5m4t3Co2BcpgJJoo7D6kZP29Fot8asBMnDtwBU1r9zmr8F",
  "key6": "5qaiyVFyJgtmefYkQXn4LFQiXgWbhjxrx7G6xZE6i7agwvGbjdgy3x9fosY8wXw5Vogoeipst72WJMdqQv2yPpoM",
  "key7": "4HodhgaAnrnzTfWdND3JQ6TPyc9Q9F7ENeT4rucFnxigrz83ju5xyjNtJj48YfjEhvAaCLHUsXAaciJeynbHdTzg",
  "key8": "3LmcbfsRGtskRVbrh6S2FQcbXVZL9MfSwVcjh6wFWMnMw71DiSyn4DaxGiwCBN1B9mhSRJvines4oY7S8h5v3qCT",
  "key9": "kcZSinx1KpP3emzk8fzB9AsZSVjGhBZuZJxm7CAUsUgzbp4fqgneQhpELJ5pUVBXNphrjUDTmxJVAN6eY4FLHvC",
  "key10": "4JyMhCZ8jgRugz8pE5EGHcm9ottwsJ6mjjzqEKDXkHvRwpjmrVskS4Ug3R9k29CAd4XbYHRVYSjXAv3AXdAb3TLj",
  "key11": "2V7fQ9Y5xmnbg23FaaCxWWDWt3jYtJ7qQs1v4phFv7286JG68r3QZhpQbXy3cSQ1HNdszS5rUzzUbufK7B16QgxF",
  "key12": "36qZ246jnUcFf19bXhpp8TXnYGKjuEkLRgKLUJUBgWDkavL7Ro4Jc7eF3XAgKAEFTYtM9mERaFafxTAmhUSToMLo",
  "key13": "3NyH1U8PzRUpWfKydhCH6h48ApABsPEPLqH4qLhVBZh2mMUPyMU4W7KsXy1o2Pm8whY8ckDjfFEhmwLRquasBqbz",
  "key14": "3CJi8R5n9LFwXWHLK1WjMhdu6fQR3tvjLSkTHPBwA8xkhUfieqHyr8Z9VsmFNLSFjWLwMwthEiJZdkNrtbYbVq8X",
  "key15": "3NV2HDiaVHuswBbrA69CTr2JBNgStMuQbavLyn9JPB1ZP9jGk4FzmtzEDXtHy2X6f97sFMKHkxtDyd37B4fhYgiE",
  "key16": "4T33YurGEC1aa5cju7ntYzRtgDw3orr1pN6WEb8QdC6UKDJ4QXLZR68xcFaVu3q7xCmmpjNtshHBmZYbGAf16Qta",
  "key17": "34soiAUHMEArtH33Rmub8Y4fVnLsru93rTzEuMxdPbvdyZ6WXZN23LeEvWjhWSeAjZpFVv5snUaD2ZcWqzzHV8x4",
  "key18": "2ts21AFrCH4YxT2dVC89YqttB23ko1Qbesjj7H4B3yvwuzCdcuWfENnZSTS1EvcKzM213VW9QnsVKyFNPg77NqpV",
  "key19": "5dz32PB1B6qAQNqSHeyDPeofAU5aa4aVJE6ri2reAqHzgTAeHgNwJY9MesN4fhforThv2odifvt5qJ5e9sjZBJjo",
  "key20": "36Dz7k58XURaibdvi5NLbwvr9DvN7RqWu8xTbeV7as9KEHS9yQYGAWpRYJCiCyTAQTRidjj6weU9Qhi6AkYdUZYs",
  "key21": "LMAPYFeTM3WfVy8uKFqRNmVfiaKXaT3JLVSEZ9D52EhDL7jx4vecdXggBfy2uP5mBUb4GSQWzq3ydF9WouyJewk",
  "key22": "4hjfng3KCpg8sdSDRV8aopRuXSTeN87Jp7UEfkQfhELge4XsWE9Wrok5tq4qyJCWpLhDMAiqMx8gjG4NY3ro3g3k",
  "key23": "3AJtXuAxP6obbfreNjPYRmEVJaGBHoE3DoLCXSikZk1Xr8nCbjhKp787kUmoPyP9zyTcmEWguxC87FQVryd5BStU",
  "key24": "2HKPCTwSLy5WcW87HS9KnDgbUZLDZpUM9rfXUCTryYMGTmCi69eafXXvKTJADyNvG77sx36faf41cawWNRkPE68b",
  "key25": "35CmqpNswSqzySkCCZ6xzztpPtYGj3VPJixCyVP8U59MGP5PZrKbdu8D938nZp3nmGirhGYDn9fi5Vv4TtxkAD2T",
  "key26": "4G6kRfHFfHxMrAfNGm76hpDK8iGAe3zeahZtJF2yc3E3db5tHP98Vurst8pUJvcqhavEQx9gBni6vPcTYLMbEKeA",
  "key27": "4ESL1DrFANJp1FeUXSundqzD1ab47n9f4EYJbhjbZwDn42LiRe32tC7Gf69UP1KNBhE1EpdeoqCrtTWTVVzYUXLZ",
  "key28": "iiH3N38T78uz9J8VkzDQU2DLm4Zu3YChZsKZC8qnuyFmVV8UKmAtyZAAku69SAf5YSpP5ssiX6vAReA27d18d31",
  "key29": "3srS9Ts5DSAPuEK12M1pdyuLN1JEtR8dx8nLJxjYsUnw8RGAGypk4Zu7ZH9jt2vwW2TzwfiiFNZqpSfSNAb5DeMx",
  "key30": "3oGRLhikE4X6jZoTPMycDVpWAvLTa6F19932sETzTviJWFGSd5E6PdL4AAkMytXaPenxz8oCHPzqRubw8BCm6Jxg",
  "key31": "3eUMZe8iRrHw6fxVohmUzhhaUbo8Wrg727ijaWw31Mdn1XaFMgt6L352EEuG2QbPGtaQYFVfdfYyoocm8wNzeqEQ"
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
