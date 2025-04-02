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
    "5piJqSJhxtBC6VsgaR8VrkPJVuVY3ERNcNWwhndhLosozkXxu2vbE4q7hqB8trZc7qVyeXxmc5QnwM62wESJFiYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQy2sdoidTKfk5gBtFr9doHpmSkvuBHgNyquKiQzr5VXPnzahxJwALYRemtmzNYvGenpr1cxMBs5LszKxDpJLTg",
  "key1": "e2f1zHp9i7F2F3JP9iB1hFe9AC7UMmi9aD7oM9MyCikUorkz6Nu6onV9eHC25B7uhTn1qTjoetzr6BoPweefWaG",
  "key2": "4D9S9QxMG6coj6eJvzjH9H6jx1VNBpjeii2M5ZpZt7hJwj5x3ivhHhhnUoUk8dhzSEznfiZs2mpy3kAWgpXgecVx",
  "key3": "5AKL5o6Pt46W3MGGpAEFNKsQrBrRAVayZAppZqk3ahLLG5C1EbvJCrQKs5Xx7ujBb369sdsspr6CYP9ryukDSgwz",
  "key4": "4A29D53Y7jSY8rUTzVqLcLKBKZRNGfGmWfxbsmpun6kSkyjbDGBzzVqK5cRsBG1W6inWC41VQJatsgJLcU4v4kVo",
  "key5": "3e6kkJMxANsUwxSVzANuAvZeWh2f3FC52Gy3JQq9x3b4cqmLqMQQg74G5REqvj2JkZ5cP8ABrz67PitjZnUQqA9D",
  "key6": "4KKV5xhEEoncWquASC7Xnm78WrMpgeAQjVyQPY7bNPmLhZENZAaB7etX7uzbapEkxDoQvWg7cN8kuQafZoqvDzzi",
  "key7": "42AwdDdHgojAkgx9RjqAjWGgy6XQMaofSdyXLehQXDwkCXQNtt2cafZcZqA4E1fMcHsDvszuZdRAUjCqRnixYs1c",
  "key8": "4omhu5me5woLkbzcBf4YVfxttjD1w5W2mzwhP5Z4oo7QeJRo3uQxfdq8utB97eEmyB8FFDhgobmWegxUFwJ7MNxc",
  "key9": "5qvBAPHgYFmomMSNFa9Ea9DGPNFay1bXqoevwaztqdLFZGS6XnLX2TjZExxfjPmNuczMMMTj3z6Z88kRAW724Cid",
  "key10": "4oJBEdW8B6zkobdA2pm53hn6nz2cKB8kW6t6evLf45mnyqwvr1kk7BbZ6pVmhrXjYnpo5ErbGqK8apPPFrFPnta3",
  "key11": "4o58UQay9f954BsqwZpDvuHi6Q6asLJpdk1MJ3n15FuiZYpu9yFdzokdkjj5gGyWQQrwpGz6anoty9apqQi1uZvJ",
  "key12": "3HnrqXHPm6q5oJ17X9CP4xXghXy1gSNsTT4Hbfn6Xy4bkvja6M8Z1uk5jJ58hDtaVv1eAAtZsRhVqNkzxygze8ys",
  "key13": "5YN7Gy9sqUFiNwzZsxULPRuGeHxTMshNtWeA4iRxbtpbKV4mum9bWXASxyfjQog3vAcdh11F5fK4if6gQgxG2j9V",
  "key14": "4zbV1x7etttxXD53dLRNpvLGvEQQm1zwMXq3WYzBjMh7tWk6ynSjbxG33hpgJ6cCthtqGVFynefXospd59VgVdcj",
  "key15": "3PTbvNVe9kYHQUb1EVQFj2u4oEB8CDDAePZRsS8aD4UWk9FZ8UsyqhBrnKwB2yQjMvfsZnTHncdGyLueHsFkqbV4",
  "key16": "2fwbhGn7GfKpYi8bDfKsfEzGkkaRUCTwZpgQ7CeZ4jQivP9raDeetMqi6xvh538MsfiFcTeiG4xVqixQ9AHG8kcF",
  "key17": "33d87tStks2RRK5xk2uankteYafJH3A36FS2SFWdyJjeLfEtXifF3T9dg3Bc5A6oWRDNd87xJQ8auUMtsdVSZuS7",
  "key18": "5XvMfZ3WVQw5CweksVb4AwK9CHUiWz82eCmpePTVqTz1dS8ExfBXFmm7kFbMKZFUMS3gMY6Wrr3euqATqxay5UrC",
  "key19": "2MUV8dmkSwyrwCXFQeF22FArbQyvwYahAUDNfbcRwdJRBiehRwY7iABoSwPvoaQLx4GB5GE855MUhcNgN2PMuCK3",
  "key20": "4JtvuzWWLTiL4794SAkDLcdJCcEDX2RoMSqz25AgNq1RM4oBHw624pRregBMSLztWbM88XqLzAcCrBmDV8VxQXa1",
  "key21": "vuSLhLHSCRQqE3LW8BFqvUYmacr5w6PqymSTw9y3XnUPrF7doKfQhqtz3bEonMQ7xNoDNgndT7g1EPidDboFPc7",
  "key22": "65MhTMgxebyidYD5pZvW1ETDdoCKXsDPi7bedUWq9RVFUiwC7jMCx2AhYZcu7kH3wyeGUHuKfrRiRVf5nJmKtSxY",
  "key23": "5HeMGUn8qUpVKf8FLExDSdsrGhJpHRV6fLzLy9JVQBdGMRFtESnEnL5Kugwfmj2bA3PBuDfD8YejUiv2qHgx1b22",
  "key24": "rUkY1dfkXrLNRRYS5vPsYSxQa6jLw6dQ5i5yzzqxvv4pTqRoBYwykusBvVegnmLe2f1LsAVe3m6FhfCHNHZoBuW",
  "key25": "2siEG1jhWzKJY7mgCseusT8gM39R2EpQPEcyb2Qyos3ZF9XmePqbuks52kwU8GHshCKnf1a7pLycgNDSXU7NLqDE",
  "key26": "5aELwdwxyWrbVAxvwpmQFc7C7igcLVnFQtQUvuhyXWp5FTtSQ573nXEkS7WNi5tfbKnL5sw26BdYx566BgSUvRKU",
  "key27": "4dtKAcqG93ambczqoaXKvmuPrJ1Ry2tyGJkBXmBvw8aHwu8DX4RFgeQrYz6d2qnB8HQp91GM8PLZmigGthipxPt",
  "key28": "3kUF1BcMnVXPzxWzVYL28ttyrYiFUWMKgWGT1oWkjkjEHGwUjtK4yqEwtzhdEyaeQXnQH9ZLrGLnXnbkF644vAPr",
  "key29": "4fBMD9SWRE5238mTtcS9fh1N5YjAeqMVrJAUEAZb9m5ggFQu4ajic1ooSDQNMNXcfujvpZbAGZvwWgGaVy7XVoc7",
  "key30": "5iMEfiYcun4YWpUi8p8mH1cYKBw8fweAUZMHwD3mo3CeLugZ72w9pFrFgRswGVmTj9qrVqdAn1RXGHqSnaL8EseD",
  "key31": "3JQ51FY5R2tWeWVb27UFohDZPW7o5c3AgPq34jLEtBQuU9x4SHTk2yCgvbX5rbyVKcdA5CUd8ScV4Y1iPyabNs8N",
  "key32": "5xiktGtMWG4JaQGeWseKxZFUVQhiN1UjQva7Wt5fNixcryKbQaVbxpanKZ7NUNRtj7KEHKm1NLZ6sRBxAV9BeSwi",
  "key33": "2TRyGKMeAKRP47zj6CSTgqwL6oHaAQm1qYnUDgzuJFqt41161HLreB32XHgGSQXiTKgERMM4SKVoE38NNCMv8Zqc",
  "key34": "F4sQPfofjfaGY2QDHn52E11ovLt3YqjvZC8h5BJ5c4s4K2ZvFhFiD7SAQ6iTXVftv6CCd41JLmsirb3PyqJrmBf",
  "key35": "ryRFbFxqVkWKedFLsfZJDpyvSNWs2PCMo7XfkdgVRuA2orjYxakt1YpnH4Ygtfc67SnuXsQGUdNjkR6Y4wTnmJb",
  "key36": "24xht9P9tundFDLQkLXFJ4HDMgo2AxXUtxeqFHrEi1FFaAvYpeWtBpkwV5rsJW9LRQAXjiqLbgo7cHupAx2DijiB",
  "key37": "2hpsKCajGq44WKiAcZEVFJmr47S1de8HeC1BR6EbWRP7VjrdcKA2fWV5eqW4Rr6eLMDX3AskPTZ1HHYn8PzwusxD",
  "key38": "4uxfrY8w7D5DUikg6u7jBsjsP52LEj9Rfyv3AhJjuWzNk1w8jey3n4hq3dNnQp5maUyz8DMZvc2yXHkDAMWEmsjF",
  "key39": "3EdGKBa9axVgVqrutdV8b7K4p8c4RV9dcVf9WhLtSLzAREtYsktTUjn7FYmxd6LdcebyGZNMxTjwnigfrAY4QYah",
  "key40": "34hr7PRs2sq7uJHmziz8BGDxXsekv4rqtdDiPuAtMShwuXzpfrKK2LzvakL3HSaQETr4R47AJmjwq4pSteWuic9E",
  "key41": "4VNiZZtwizgUmZZiHBzG5oR4TSW9RfQrEQoret7vJmZg7KKpTm1igC6bLdijrP3v61VTCg7x9FCZg5tUZWVwTHhf",
  "key42": "4Dx6yYBHBkHmodCfopxQWEEDXTESoBEsixSrfJaJ6Ke8Gw2XzDZMa85P98YZKyn3qKB8vjjCGWjq5GXp7in8as85",
  "key43": "61NJcLEGfmE4bqyzNpKA1TXh5eUkrBGgWP8oDZbuoJNzz753NGgaibfegofcZtVr2A62gLRJMRHCnQ5uHqyKwWT5",
  "key44": "4yA3k3VuxocCuCSLZHH5aEJNf523F1R2AatceFcPZnNYXtC23y9DkUMdPbbzBmubviPCcrCDXfos5DuLyzqbNs31"
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
