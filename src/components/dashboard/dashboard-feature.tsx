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
    "27UXtvhvx6VtRTyEKZ4AW7FJjX5c7NHc67VZvVcQ5YJfwFj8cbeTnu56c4WmJyXsYbvKgrg9rjkWNZ4yV3Evzxna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tw239ej61LWHotJdaygqtnmkMB8gA2XfZwBT8n8UmzcMFG6gLy3WYcrTfLbRvkAaCod2DHXdqphozUR6FBZ63Gi",
  "key1": "3wjbEhmxmuvGca4aoDm97VXvtQnztMWgwec2rjpcaTu6fJiyubSfm4J5GXSW11c634dCKrk8xt9JFZ25ke8hqCLk",
  "key2": "4EFWRvMQBAswbZmHN1TQzm97YeYJMaf1Zzmb4U5SuHSSxUmQ7WuT2CMfsMTk28oCBuVg7ZPkAM2QiVWmGVLxQCVR",
  "key3": "5sKzJA9q5mkNoLRp1b2Q9MTb1EV2ekYyPrcmgcuh8J2gLocjNWqxPoNhhmsAgdXvwvcGs52n67acMXBjunfGH2gf",
  "key4": "3QgcMdegAJQyQ7Ejc5e3ys4LxS76Lgji6pTwKznZhvKk2T71oRTFRnXYvZSDeR18ax8BduhtwQKrqHkNiQLkbmAg",
  "key5": "4dDUnXv2XdrAF1q5TteJ4pozyNQ3oQYpKrziGtypiHT35jD4VwRWumUYfzNZc46ZcEtDQnPFzcHKop4UW1MGk8ny",
  "key6": "4dEU8KUF2SBpNXnpEUf1hWm2AQ1aAcZwSJ5i5qoCZ5xratHYdzQiBRzNV44XKY2m5ugpHiaHJgaPV4XvDqZgnGyR",
  "key7": "2Fit8ZKSvUxmpcQuBmG2LBFLyKuoX45FbYAAXAKC1pW7mFJjQ4AiKYvqwxc9PySey8iaXmeCVLALNG9K5m2H1Hgb",
  "key8": "2e6jpM1q6L1XAaLXiUFykKvvcq82KSPwbqiHVGEeeKqz9EdqoQgrsN8bYLAPB5vcB7b9VfjnuotxXdZKciVBkaK2",
  "key9": "3ArLZvDP62MXJbaXenwnjvfnt91qiqHehy6geL2wjtHGmuwEu6jH6oEX1BJGfgkctwPz6xPu3HUqNyKNkQFb5SXW",
  "key10": "2zhKEbfqb5u3RVWdXNP9nD47epK1R3qHMY3Jjbu2px4e3RS87dSFfyR383TjriXDHYcdA5NxKDw54dYLTLLdtDLx",
  "key11": "34kYcvaBahbpF7NLamoj9XWaFEjrb9QeZUrafLw9BhHc5DkagpMAAuLVxBR4rkmFQGjvbLthMqCfuJTiDuVMQTGW",
  "key12": "27FPg5chXbCfQQyw3wmBvSPDBPvW1NXtHcQgYkFJeBWxQs2QW8TBJeNFthSAW9VGeLXEDik8VyxzQ98XDFsGKCBG",
  "key13": "2Jp4fDbMdgseMrmxARK7VUyXr8XZLUfpWxGsMK5y5FKgUVdQ4wtqu3FKgZwqv6owsZ9Kw38rofNqyULCMuNvMqsQ",
  "key14": "4SNS2wSBBEAoRiYk3ZpDUzhRNBP5K8wk7JcqJqesQh7Nig8rUEtYXe9rRjE8HDgDk4KeTcR2ggTFdYqZVPaMuVW1",
  "key15": "2TksWJiwJS3Zt95vpiCsaU4xeoMGWTtwrN9yJqeyEEYySMaZuf85Z2xYBwoE13x3XUbUeQpim6TnwoqVtf6sxD3M",
  "key16": "QBRsmQGpXiguRqeZEjb2gZhYybtS7wfqbbU42g5rQre6Jp9X8ri1SJxTdoYXTevFRvAqJ3N2drbXa3vcbnipQys",
  "key17": "d9CbGHFQSuXUHYwcV3kDCYBBfNV1ofcXqhYarA7aHewNHavMMLWG5zeharuNn9CKTS4JfN3oESgF29HLAYMQrJo",
  "key18": "4VprRLV9SZ7J96EiMXcBpUzgoUhaGTzbCsqXjLAqLnYaur88HGieiqzzRHZfG4pbA6HfpbY2BQCQQUezLbpuUfYD",
  "key19": "5Q88PdkuuvjDN3rbHgDbNYUhFAqR3Crp4DrFKmHV2uUxxDFZz6sbxWyjT4VX5jWyd7dLw4nESaPgwN4yvxnjKQwq",
  "key20": "2osam7ihzsgemchRfDTZa6KZe3P6HAYET1FLXPmp59PM4EPk5v8gTraW79557F4rPMUcMUoJDie854V1AiYBZ3dj",
  "key21": "5jDybpeEdeLyCBbCQmSWXKV9R1xsGfHQRKsBsPCAVGkJ8KwYz82nyAqKRyKnaUHv1PNBsQdec3eAB5P6UEuX7Z7G",
  "key22": "V2pXWJpNpyV2G6gYxumhCfY45jvTD2hX36Q92Upv1j8gvrfLBT25wqAt6mNJ6949ez7icVhwwHYRiiJW9wxc7mb",
  "key23": "4q3seNW8YFkk7CsLoQ1W8J61GjNNw1ZNi4SieKFZQFGSVZRvSMPs1rFkdpLG8piQ2gJVKwzWtPkekpJvXo7MUxgG",
  "key24": "58wLe4dc6uDPZJ6RVBdykowi16Y5WeXZBE3UeQ4eQHfkWmyB4UEvyAbJVL3u4dpDxj5zYmiQfJ5don1L5BfPtXQM",
  "key25": "4Uz2qv4E3xYaAd3z9kYdAG6QN6pmR6vjhFv2YDak64ciNeJCN5XKJg5tnaLZeaDuBrRCChKrwF1oRtksaWSzt5J3",
  "key26": "3SJPdBTjeeZnx3zvhQJ3hjRhLwTq5rp5dEsSAbxZfoen99PfsAimb8A7AXYkrJ9kBQ45bAQi9qea8qEvr69j1XaR",
  "key27": "3YNADN6Fp8gf2p5E1yM1aR3mn2FP9VPwQMkBGucacsTKjRPjjVL1yN7MJYizWvuHeydzJGmedJ5LpqpPSXrsVvFR",
  "key28": "4R9oxrV8CDcw46nMt99WZpoNqCpgaVBZBPpPxJPU6KS36AfkTPQjES7rBoTjK6Qh2eoZ5U5QNAeYJxywFcerxo5M",
  "key29": "3hbsDNFXDAZNRCZ3w421WfU7MGr46Ejsc34fzbi4psZABqbmABttkBSuCh8bhbDXRmNUK1xwFgwrdsLQzXzEpypo",
  "key30": "3Qw8MaKafXSMqs8rUg6Mut3uy7T1dhfcvCdDELu3FTxuA5Vi9XFtpUsFAvMvq9XM9Aww5ugHjnd56MTXDV88551u",
  "key31": "JFnLzYNYwRNawP5hcCUxrspCAC18AuaHtai2Q9ZDzV64TeQEEcgzJAEWb1EqNGgT7v6uFvxrUpD9F3Jw7diRnFx",
  "key32": "FhrbYPE6uPWcZs31LyZzBwUnTimbmYUxiWJcKmGj5ajWwjpFC5kJtwxfP4NnWQPhXNbz5Arojt5Jc3Tvr8sZcBK",
  "key33": "46D8bnrPatVwLuQPyRud6Td4pweF6kChMZRjQE4a6ofzTQnULT9qgFGaBKEhPr5FCpfiakGk3zCb5a4HeSfDYm5U",
  "key34": "5SPHvHsambbqPhDn3tweaatnqYYcvxhj1ASGHZ3XdRqeLE7ftYYKskGbGeWgwpAQvUT87WEc9x92wGEUzrBMuXdJ",
  "key35": "2uRcGZHggYtbfmJ2hgVNjiSqxJ3eWBwXDe84CXdQu5i5tDmiLSFsMmwj191cbgcBVkEagajyBHH1jxjSd83AhdQQ",
  "key36": "63UCzPrmccDNWRWX7LkdzrhhDCiXh5goYfMutrXr1AXWmSovLwmn3Szs9UTSFXNXyi5ijUY43q2zmEbktTpGBQQ2",
  "key37": "h1yPyvGqVt7sip6twCTKXRgp8jghBq9agXhAXKZk6bLcczMKrvXu4TR1fni41tKx3TkHyLm8FSzfTaXzMnBGzm9",
  "key38": "5WjnebB13PNmNZZbGwpVVozfsHKTRc91nfipUgBLUysFjWnTB5JJueocLvaSmmEs6173K3jkgJyWn6sjBoqbLu6S",
  "key39": "KNnb92RR96eC3xzjzcZ6kfuRV4FMkiVkZRM8trjsRkGKY1NHFv25iCgcc4HPgGe6XkAf29fm5nVP3ytB1Q26Q8W",
  "key40": "31wNgjkLmRynvVFbhKYqZc47VAaQ9gueH3VvW5tVapUQSKvjNWgaaRhL8MvCMPGRzCL9ychxV7jQFgjCKPDRK8bC",
  "key41": "3xHA8Njjnqsd7DQmCCVX9msvCHhWJKpN7ySb2U9jJ2JEdiJZpuNP8xBf1gCJXHYQZ7X1HgLyJeY4aia5WMyTrnXU",
  "key42": "66k2bPhbWfi73DFud1MNFXH6ZoKhyVkn5FKdYbDSndxHjk5MLrn1vQfvD6yTEWPQ5UMeTNL87jiJJHr9giLGhmVr",
  "key43": "2YAmp1nqf3ZixweY4oz7Mx9erAQraCtCXoeKh1nfkVuBjqQqm2ZyLPzufo9T8LonbUvYYkTUZgRdEr1Ywyrcejp6",
  "key44": "4kNECrEYKSpaVx7U19eWynoXxD5dhhxcM6qhSZVvZhSmUM4rfNFUWizm8nD8THygheLC2NA6RAbLsXF9yUYxeCg1",
  "key45": "MuiwLdp5j8pqWgEmA2CJ6fNoKLzpgx9fcxzodLfx2BCwyx8Zi5YBnvEj85jDbNNSfQtDBv9F3sz2FWHmbprAxbf",
  "key46": "3H3T4ErKcUDqqjuHqm29td3pRS2BQamgoEAezTmmX1jcQaRxuwHdhk4squSW6mFg7Wm859VCCMihJrvyY91isRZE",
  "key47": "4cBEi2XSNRc5venQT3Aj48tmSt2MqfuAmNTj9NXKzKza3E4E6zyNTZRREJpC5K3sATnRkiWXoTrtRXfiLHjUgQRv",
  "key48": "jK2nKsVXjqKyfTrfL4fdaD3jGtar4wNnZhaAuhA1Q8QyJAoudUBMKeaSWwtsuBubgJKWoCXdp4o2mZzCjdAUsTT"
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
