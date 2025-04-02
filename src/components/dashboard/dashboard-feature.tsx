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
    "sSqrWaffNq1ijsoK5KQFqxai5oduWSTHu3hzQmg3cjajoBzWAs4d2xdkjvoVZe4qcJoNf4JEfKoY1nvtMiwhcwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEbmuWFC7JMKGmGtvecHvcgMvYPNBqUn9etBhPH42YxkPj6FU2WCaTtvFVsYtPQQNewk4f3EDTFHpUGACCoAcYW",
  "key1": "3fWPdToEUm9n7wmnZoVihGLiS1icqpeqTmqgS4ZhtE4YqooW5dHrEFUSE67Ai9yHSEn9JsZCpQ6gijzF1Vv58e6d",
  "key2": "NW8eahpaYdUbUdkFGLQGHHPKJfspDTV5uKPKsMFxWdJhynrJ9HcjUYdw429LiKNLRe4dYidyi5ARh5UDFujp2wi",
  "key3": "1Cyyy6NSYiXZwUqi85n6hXFWgcBUDNygbj8aCQa2h6xmtAMJsSaAwkTsSMUJBqM4BSYPs4P6e2oHLvLcrUWyAgs",
  "key4": "42n7kj6ZybAa9wkbmMSz7EYQGu3HMZ6kQCf3BGaftZW9Uk9ovKZdN8VYKH1YDRatVFqwjLx5wAMgQnVhsCYshgmN",
  "key5": "633rDciyRE6xptuk2suMy21CrYHaFA5HM59EsVPAPCNVohz5szfhCD44rE6m5JxPJYHS5ERzeZfDg7ZRoUjL4KEL",
  "key6": "24Q4CMUmHnGiFVFnBQbBdMrAzw9K5oKauJg2RZUsyErMWcC7XDRbdz8VgkCbL8rfrNomZFut91YMqten6MAUB6xg",
  "key7": "AgNKCFyRvf4CNwJR3mbnZrCQ4cpjKgLDLU42BaEbctTfpsFueFopYvAPXmiDWDnyS4ymLjA7d5jHVY18bUgtQWs",
  "key8": "546JJzkKGNNSEWK1pkPG9GCutfndUFjNpfwVUDTpRAoTDxPrSdgAYCwq5DYJV8AiupCjHUjVQt7HvEQVNNjEAekB",
  "key9": "jq9VAU932rSYoZPHY9mQXKnSnoP573E4xgRyEhaK5XjPPMsCN7YKSTiugajnuhXvVkPmR4YEFBaPdQq7Y6Cy2fy",
  "key10": "2EXRWjM66KDthbxLYgyET9Tamqv1UVnvDZNZw9t1djdSrQ77BnxvwqEQWFKX1sAPpZShdbt6LmNqW8fmTe7qqGTS",
  "key11": "245ttKPcENLKRrFXRnmbpMnQFU98KBT1giwc8YybfmTpNJX8Qf7E4ue3wNBfNf36RouSzhdpfsjaQcF6FcmXVFAQ",
  "key12": "2NbZoGMEyiBxymgZjcX51P3b7EvV8eruWY4tWKxvDRhaCcf7YCpodJp7V4ntkuoHonbKwnB6cwbhdJpeAhej9cRa",
  "key13": "4LXpyM33p21tmkg4o8Vddwvo3CXa94FBuDUYMTgghzcDbQYLDtZtsfA5mZ72BoQJWqH97WW9LJ4gS765UxCTzCi5",
  "key14": "4rDJev1u6vMGbtqcasNXTRbPYFDM9eZcoG8QUq9NojNNt6y93SomrzLYNYDj4h8EAJjSPfKshVDghnu6yvJ1id8K",
  "key15": "5eC4MJGTGgNRZvSY8psq9VYRfGUvEU4qA9ebfoBbi6Bs7qgRQmpoi3fF3SX2qA4apqNS1NSS8g95VPKyxiREGS2N",
  "key16": "3YxiHEPyq3eAxVj9mmueToeR1uXUwDnSwYe6XzdDgNTUsbksK2tY1fSFkFBmthjNVi9TgCk6yKEd2X4tTKaJxXTw",
  "key17": "1nNSUHodCTMDzEEyoCfMushzRLYUaJ7tLhhSC5STcpGS3oZb3tEwVqSeAXTefTEFUbLVfZpe7Pqc6mCowSdpfW4",
  "key18": "5s6HnzqBh1zYm6L2W4xpF6FFZdr9oGvbTScLAwUydE87vDcNjQidbpxxbnnCSWshU5bGaabdLcRNwVg2dtR1sFFB",
  "key19": "2sZin6bqX2UVN4NS3Cjk5s5GBPsC5vE1jYrQyzy7Ne4EnH3hhxjGspRoaZVnuhyiMED5pftfxnPmpMd9t1qKf4m7",
  "key20": "41oFh4gQwMVjEmPp3sA3HaQvpsbWbDXusCN4PAVrQFgH1ZJTjrRbPc766K9Skz9gcTqeb3HgRarwUAA7uSdNf2wy",
  "key21": "eR4JfShwkJx2DEDCij8gQFNqouhsVnAy3qiTSfdoDQL3t3H1CU4GWhFTV7WiUroLjbDWnZUTF8byXZ2nrQFF8do",
  "key22": "5CbgXmoEfq74ZQofyqASNYigqJWvfv6LqphsfbfgeddKhRg8VksCexLemqw69Gs4RoZv1WUSNfvGYL4y5QvfXnJt",
  "key23": "5nEGKKJyVEDHh5si3r4dWWz7yS7ap6YcsvpiAG4qmk8rpY7dG7D8BvXSSFhkKoGxSmcAASxU74ewq8QvqAARdjdt",
  "key24": "2ZVPCq8ZRq5nNonWyA9dYVRW5wTh85EaEUdmNd8aCC9WC3WnMrdvQFpQbRQdDXjkowaA4qSqhW1ZMLcfMPkKCm9f",
  "key25": "3z5r5uSn2DABiAoh6Tyn4NJsnEaCxewgV5zzhBo6s1QkEGAtuAfxUhsECuCVnLLG9gTsKsX7DHFsqsCdUh5vb2SB",
  "key26": "5FyxFrZdWGBWr2N5kDE9SAULbML77e9rvkHLdwCzmBqJmecqXRAtg2rNHXDWe7iE1AT76Ls3Wm4zo2tyWQjjBvVi",
  "key27": "5AiwdDoi8B5CDoUyvkK5BN3jfxcvy13xyBJMkRoWC5XmCADQZjVEN839MB5pRyMnRvK581zxwE6u5Qj8CpC8EKJf",
  "key28": "6pzYzWqAkJi3F4v5v8uZgtK9Mqv6G6RvSMYyg9Yo1f8kYsXboWxZtmPc4JJe3txr6YUsQ43mWVBEB2L7ReuLW6K",
  "key29": "5wXyhC8w82AeBcWBzHTrB9LkkXnxEb5kYx5n1c8DYVR1CCHi3SYzbivhsn5wbg3iMmoUQbedzVKmuVQnRw8rFYrq",
  "key30": "5bBKU477WXpDSmjiNCH1sHcjaNarf67ie5YNA9nseSiv1BXWQMmZUZh5M6zK5sgdzVrcPjNihxyiAuB5d5DY2UVH",
  "key31": "2TuPcuEjWzzkzq4QGtAprjvNDkHjzxAPq2pscgLWCGSoE9rZBzGPPn6H2qXdymiE4HJnFNW5hj59r9CihfkbyiyS"
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
