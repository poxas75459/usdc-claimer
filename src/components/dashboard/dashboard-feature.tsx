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
    "5zp5w1P8HJ329JSmvfEG8VD1J3C9cN1WEEPadJkgKUTaDnyjpYtvuyS9KZczEreCbLLu3YW9vVAvTB13M43DNMCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S4zr9Ynv9VjMrgGkimiScgbYHwaMJG2J3Dk6w5MshKc4VPJ5iae5ZAuAFZq18REtxsVeb9weaxP3jFNqDmSwQPB",
  "key1": "2unJTABrciiH55vh9YSfiLiG6ajSagBrxtr13u3uu3G45Fs5HjuLxFpWctSxhNXPiEa7NDoQs3n63vLY7FX2xACK",
  "key2": "4NVvTUGaTkDyUEBdscqTk8FanHHhucSsJi6HEbJ1UBoXxHY6oivvuhBF9TcW2LEYr8DiGTZsFzUULnDinrcovwWu",
  "key3": "2tRo28KMJSxNDCBi9BvpjWpJZ8BSHGc2wkY4LCwSKprstWrxXD4VE4KWk5E2q5fTfXHa3iedaafcgt5qJQpJ6cW5",
  "key4": "63BjDzGVddxt7RzJhiiDYfJN3oE2MmhNzgMYXUM1MbGCcba7qNCmbAZxbMw43fynJUGGdgBojJjuz7SmNnJzHZkx",
  "key5": "39hh4yeRWNrezUWeAjS5EcGebuVRCrjyC2MoENp5o2SFnGcAV5fZAeWqV7bu9njQfmKwgtCk5kC1DB54C1VCfERc",
  "key6": "2YqpxjfHzkrLtu78nB9NEiMouainjNnXVGWFMsxKKLu3zqLdqhg7jx6kmLD1Lj136o9XaPcvpzd7BE25q3d3AJwc",
  "key7": "ADBXBi4sfvQeQZDnXL5QovKstZzrhYs13QpXKEmKiBqQ2RZJyuSDaGxLDoCMrzfvkTVDiDS6BvpV2DQWZm2e9Rj",
  "key8": "DGyYtpkEV8zaGLwBqjJ4fwcm7jwCFZv2Pxx33UwHzEeVKed7oLkcvxBWQrkgJJj39vadbHV8TTuBLwdropSyRUZ",
  "key9": "3nYvDi8N8MoGQ2RBDguxvRrVtUvRw27JKpErnrxU65fspMi6X5MVCfxBw8Kn4671N1pDp1BSChfPKKNpVsb9Q4zd",
  "key10": "KB2wR9aQ3996cXsjVFCPLe8qVzhFJK3CNosPqhHfVdGqTbwww5pk52iZeTmybjVfL8YF3AhTNgHtqST1qZqr3Gd",
  "key11": "5VD9BYjhbFhreotyedZJwNa7XP9Rs7du1Ayp1MTHxTiFnEfjWT4wjGjyjxv41QeLKGm8eVNdYTMLCaqJrUC5HVJt",
  "key12": "46xWF9MazL459JtBhSDqtizWfWoS1Fmdyc7GnFnJpYuNU8jqwMNCWx9RvraTkJSSyk3Sr8WQwmG5P4YoyM47CNDd",
  "key13": "555MEcPHNy4pzTZnNKS1d3TpJxKeVvuxgUUBwDtiBrbFWM6iapn56j8ogCDZxNfw8oRjyYknrDMdiTiSXNXZErcF",
  "key14": "2sdfLwqS681CvXEYQch4uovLs1sQQSpCSJ9khJoYwRK6VPiTuHXa6t5MY4rWyvMzbFAKMfe6aWHDE5UoxAyhEAYS",
  "key15": "3Gw6Nb8KsFfsYJoiyGXW7HPT6X9DYCzxAGbU4EU1NiMn5wLrScgAU1uaNWHktjzvoFFQEMJvTZF4cobXyYY43yx",
  "key16": "tUQ1bVdQpT8RnbLpp7hPx36kAuPTg9kF3LHCftT8ghJJyNcDCrX2Pxye65zR4NvEGKYAumxuPsaYNJnNubyL3KX",
  "key17": "aKBTAgpirM9HwfEZ6qxFQ5fkK1iGfu3qjpiPmytmQPhnP5etE85wa9fpDN56pT3dNK88isU81Vkiy3oYYbXzA4h",
  "key18": "5G9bP4s2u7VZLo6QgLeuhfox8YvA39zsZYxzCzKdvnZFeMTXeKfv14PmiJ68cSm9ztXHXyBfGjsUGrsNZLY9qJ5z",
  "key19": "MXvN6LBoJeqRtwC1rXbyswEbkePMDsrJe5gUm5gk5JD7Nj9CovBtEcaMxK1JEesjDxgLeReYk4EULY6JLb1ntwK",
  "key20": "3Cajt5UTTVpxsZHmdVoe5cQ9kpUgL9EkJWgARFzUnHQQ4i5XuXHPWhuktvU3kWDGhWn5v8HSrqU2wUYo1E5bxGR2",
  "key21": "5qYKmvwXpxxuhN3p83FdY7vK3AkVc8FzVa7xcvDsXJLUEw2xzqvQ1phacp7rvFTSqZJLd94HEaRswerEiP9aNPtE",
  "key22": "2aZE1VfeEi4BKRvGA3949AREa9XUa7CqKSidciS4GKGDfaEViuVrb2pttRYAy6VmVwv7KdWpzZLC75ukevxucDhh",
  "key23": "4ZgyYrMJWXYv4wy85Cd6sqVVc4J6ckVLrvAwovuP3uJCPYkqTDEyoi2WaxX38kqdhagaSsuYADYuiT3xW2MNZAX6",
  "key24": "3cQiXiCn2RbQnSgitrgBQaQH5w1EtDFP1hTiYB94ybMafscPcz5gMEL6PDG9kSfJTwNmFm7z4owhAE7YyabWw2Zj",
  "key25": "4fHWptxE1VP3sXiQgkNbz4yuYkBBEn85bfBf6qoJQf1YufKM5DxzSKw2uYmGNcooHXN8ihNp2rbutemhQnSVhZh",
  "key26": "5goQwbF55CgFPahJffXNRGmN1D2m7GFH796pKJB19c1JPBfFuKbqaXsYrK2HhpbRNbqoePPcbfDy8ytRbBUk52eB",
  "key27": "5xDwCrrG2Mk1pzcoet6FQW3g5UK85ZWhqXcyGcgzeq8Et5vcfLmc1NHPZQHcgLdaikE9UR2aWPRMdNWMimU9VrPU",
  "key28": "3AuirfDHXHmP8UydiShuTffRRR7RGKbhZjYR9cyUXcx4wynnYieSJHeuAB3cjJDURUqVUqAgwgAKZsw5CoSjW9Ut",
  "key29": "yURBK2vaZFWmgNJLayCX6wxTvJ6vq4qGy2AejPSwtsrNmeCopxixESbF99mx8etnH6AWUZALWZrmTS4NF7uqubK",
  "key30": "2WUdEE89qByAryoHPRjXFsfoWRLjRhPRESgoU5pJZiTiSt7uURnMNhNAw23X1F9TGupm5LFezWBnssimr7KMt9zM",
  "key31": "3UY8XfggQX6juYdhVGngzdA68zZQgVT4FfyqZtKHakKr7hmDetwWh7HApaPRptaT6Bb5n8enSgUMQiVBJXFpkshJ",
  "key32": "2pw9EUQCL7YncsLywh91jeD18w54KQ5CnoQYVj5bxeYkzJuksE4YQKNo9vtfupWFkdjogt756eQdY2yq9qmkDY51",
  "key33": "2z2wEZSuuC7V6gubmJz27TNTeW1PMoSNcQ3cqVSGovjoYHzLXkoyoj9EAPc6yqbTZPF1RWKYAgrLuz9foubPF4v9",
  "key34": "5NCh5BHTVTiA73GB6m4qSUM8mfwBrVdqMGUeoaZzaQryFQVGf2bsippNLgp5ZimJHHnjqDJ6N5BRMnU9EfvKCMar",
  "key35": "4eATC33nwtdd77ADUciv44YpZjtbAdXsibgJLa2oSX2q2hqXka4y4Dzj2dovGuo6AofNZFupLxZ6T9RgKB512efG",
  "key36": "47dppXzXJeMBoJWYv8Yu8ysR9qkr3E1jKnkmYzAnhh6NZ7cgPMn7o6aMwpGRXDnh2WiCE51xtJKsEAEgntxviZYS",
  "key37": "5o5KLPAUck8APySRmxgXV42bLT34LsprvYzuHaCNmPdAsPbkZKGbPNmBtJvTnbFYHv8sADEkW1wEu2wfbPLdugva",
  "key38": "y7LqkC8Ux7Ws9HXQdnTpehYax3qRvpgDY1ieLbD4PpUTZKjtSqKZTBjiEkkiQkmgH3mE9315dJH8VpLKsj1Q6mu",
  "key39": "5JQdJ53vX2uVt2hhLKKnAxsNDee2xQLa4JUBHWxi8BgCH87nZt29ZgKmT3QL4pg687G7VNBJC8fuEBQVUx47ftW7",
  "key40": "2XsoRmqFS1k2RPtPiNh1E5q15FskRggfJN3ppjwjhdARG84Mr1DbpzdAM84u2wHXWoE9fBT83YJLLZgCUXhdc9Zn"
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
