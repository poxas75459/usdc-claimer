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
    "47LkxPHzp1ZzLM89jzuKqjw87xXDz7pQyDwaN1T5k6xyNrFs1eBDbcatNvXtq69i9SKQJmby4ZtWT6wGbqYUne8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqzfoQPiXG4rAkFu7DLjF5n7BpUDn7K2LtP2bSeSX395ucp3xzP8K8o2cHdWBmjqarE4kQJcZqosTuGzaGyRbXh",
  "key1": "45BHiw6YNmu38GUJs4iiLqrhtiyCurXnC96JSdGAGmnjUKgKqStbh6tE2gZYJoeonHsMeJHgQC2XbqonHjcRmpD",
  "key2": "cQawkAa6o4GBH4iTCKcsTf6HXj7ymGHNU7PmYLyFAfaHe8D5DrXPgaynRXpjp5W2X7UQY1SLPoGiyjpKt5jXCz2",
  "key3": "4g47oR1H87o4MV2FxzN39WpwNzGtAdG6C1pdnfqjFZpSqeLhu7c2tjuLdBBwjePy2Mf3UBUrV4PvKA5ZnYTWQRib",
  "key4": "3UeVat2wi8CSGXsb6bqBKRyFLv4EUj3cp9fHsKfApvmNs7ZwKTN2aitupU811Hdwx1SFthGpzFFuPXVykQA9ABrt",
  "key5": "3WXV3gnXNu1D4NQ1Yx1warTkLsTnddQVRu3uoDn3nA2zFvLs5fGGzLHStj97c1Jaygo3bwQRauNemPBGrfxNUVHz",
  "key6": "53X9PT1vaTe2bUjeLWuxxqmUCoe9t8vTFNGjW4dYyk9WeVkBN9xoQWEBNdNtQzDZuoekYv3SXEko2qZf4Mcr1Raa",
  "key7": "2VbrUzAwtjZXkYFQswi1VYNezcRaa7pmq4fKWrbys3MMFXho9YtoJNb1R2ykMrtjMgWMMhWfd2KGgq4mie8vosZ7",
  "key8": "3cdfqwaDtnWD57G7wSaqELBoePiTqEd6EnWccL8HMhAdJYjFREWGELPi9hECGZ2cmopBoEJSfthRS3BHZHivSyxy",
  "key9": "Sr3jPucoXcuSwpSX7nJVA9eUxgcw7uXGPNk1pwCqoV3khxvtsArsVRMUUptGXSPQ89b4qyPyaACdbajzTUPnGQo",
  "key10": "5KY7TtCCUHMQ15pa2LMGoZzvrk8faqzve5VjhehLxioxVvZM4WK4tCpGoQ1YfiTHzNmRTF9q6U1W4KQip16GQjmh",
  "key11": "4BjGUBHHk78zw5KmxJfE1uE5fCj2BNyLdRshSyuH8EGZwfY1hPK5hm1H4BCrwLNgQPSV6pJJ8RGLLZiwKHsWiHkq",
  "key12": "28RM4YRoKLCurN4pfSduKLWL7FkugwCuxFWhcdFfVp75gLN9V7qu5kjzhNqkuKYHdUVQRrqaudTqeB1BmHKgN9cR",
  "key13": "4Z2BcERhSq5MExuUaWmeC9ycr9jTP5vjx6hck9Myw7f4fwSk2NZvxrmaCTMsdXNULJEenqf3HHcjsuQvzwLBBGyx",
  "key14": "3LbkUPTnBeVAxjbVXtQCNVvhKs2zWS1XUG4GmYAcexLxD3oNea2d83KgFMxV5VwBDkhwHYBmD7YzvK4bH7iLeh1q",
  "key15": "3wMQUt44LLMDwrYUhCGwmrQyuuTv6Tw51QkdmM9rHpohX6oviBMpidy6ieTnMz7dcUwPn4JyXvU5HxShkR3oPWCy",
  "key16": "3b6PiwYe7Ehc7egvsUzgjs9SLYCj7jJaSeKtCQ1YaSQz4bfoYPF9SrgdV3hcrpkNmMHZVtWvzKwW47go54HQRnWH",
  "key17": "29ermAJKg66tdF6RgNzVepgKbizgwBRqtErZCd6FZy8tmToryYvsX7C7HrsWX3a97zVbnfZmEU4PvnzQBQfwGPmk",
  "key18": "532GWoqYgBqZpmzqpakdC6motG3HiqWKqfvKncUoqw8WKJfL2pzMPZaWFn9eThXmKkmSnGntnnGD5svMeHU9Fy46",
  "key19": "5HDTNNZitxpg9yWtsFnLr7o55o9Gp9u1ZbNxNCtd2T9ZyUnL8c3JPyayQu2u6eHyU2uSaZKv5ZsyHWDzXpzhQKCw",
  "key20": "24T6Pf9Vbc6RfJLK6s5nEL3W9rkpUoWQevAXhTu6RRZNeminG6D6Lw7N7963pqAfZtqfqA4a5MgrqAbX4hp2RK95",
  "key21": "3VkWs6m3Br9hb35NUU3BtQSHWb1fiqPK2AFYzgLAAYZmhqXDXtiJXUQThdhpU2ZaY9aPsU4vZ7xCtco3dktVX97U",
  "key22": "4tTBFYcEqFQVv1auLcjBAQn6N1c1gdA9Ne8uxmaXCSHDAix18ccJWxKTSCY1qJEpWXM7CZ3uhfgTssHXU4LHJfFt",
  "key23": "JDHmeLj9Ku1fTTHagY4cDEa4ptCUfcic6DFsUNryF5SApsDdWBxYVxqb8Sk5yyKXYiZK7aYwgvCqC3i8aphttnD",
  "key24": "tosfaAbXSDcz2q1KnLzHyw2izg42XkXK2QBLZzrQPu5hpTiNMkwqEK3tH62Vdy8oDarSTfsu8a2ipuj4jKrbXaC",
  "key25": "4kstingbPt8afy2SnwauAnTxkKw8HYtXyaVfkJtUMMUWFq3TBAU5pDkBsbBRysZXpBHK2P41CcHqRJjn1KuUZkUM",
  "key26": "2mva5VhwT2Szosn2TuHozevNYaCUkRQE8Kq8Evej2KavsZfzFLHLqMDQF22XBX9wDauxLdXSzC4W3zkWEnJHA1G5",
  "key27": "PgZetAx7r21w283jGCrKQsjCoLeGQWrKpYPsvhoSKfkDTqhmgNBEWsBZF99ZveLeukFhWwUpBSsDXo16R9o63cC",
  "key28": "3hgc5psKE7GZuvVss749nCJwwGsDM8rCtDiH1nxhonwV2yGhfSwTFBgVKB1kgvUpnxRUP1N3nBLSTCHrB7freJAW",
  "key29": "4z2hZdhyr46EUY6JPZU4myTjXu597fSNtYEh6ZsdEatdjtEnzMBfByBGF5jDTZzW7VT8Tgpx5vuxJv5gqC9GUt7m",
  "key30": "4tWhCP5z1mCa4EbqPSPTYMzdUnfY6u1YBrYF3wPVsRhBtLGq2DcQjxMC3p9UAYY3RXCDn8irXjXwBc1ovzWNCMJc",
  "key31": "4kFMbNkjdjq2FucGBTz9nXGGKkwCYLr7EW6GqYDJ9bG4cpAfGb6e4GfsSABzJmMbV5SmFQ9Ftj8TMdUzoVfupvH1"
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
