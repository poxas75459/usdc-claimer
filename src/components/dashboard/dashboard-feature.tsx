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
    "5HZKdPzwTKF64P1VhE6RjjZZgZoQfiz1TMFn3a9uTWJBmfGMyUHmPzSKxy4YJb5AdtyaQKDuqXoRAtw5JVgT6GMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rKJ3wEHNAmzKpuWLBV1zkERY6YJzqFbaFFZvVsF18XjZ7d5cFHCk2xLCi8ne71FXEswqr3vKZm8CbDLMM7Wqku",
  "key1": "4DU921G6QsVGLtLTfXuaBwyKS8NUiKQof2i5pUACvAvYgtb5B9kQuPixsTm29bfu7mg9ZfaEr6L3YSyX3sCEBvmQ",
  "key2": "2Vjiwj36TSujSuP3M3cqrJ9c8WzjaqhvsA9BRtEJfny4zyA3qcQkbQQAPHhB17QFA7mbipoU74MtG6yn5cFSH8Tv",
  "key3": "2FyqPp5QWv84gMQfWDwsV5x4PusFTxmgqzr3utN9AVPZhvpefgRPtWGuLdAgouvZ8BAiqtvZsgetxubLg8YjdszB",
  "key4": "3Qh9EHLcizJi3rTKnzH4kNyD9aZzatS9MyRSP4eHi6r3YTnHEziiug24ENiqzp6zy1zG4hGvnVenMmbHmxEnvc2j",
  "key5": "55FaC4X1RqVVDmdXYBAQxTJeT5rWxVR7xVfYnXPjkbFuZzobSFux6qYUaLTpk5muWeJHYYB73S9P94H7H7tBFSDL",
  "key6": "596DWdNH4oGqWtfELXc1epnzGNB3yc2SBvp72iHTeTpLrCTkHaR9tZbvSUaQj8wTMRMpE9tjwXN79ic2Dyc2JaLo",
  "key7": "eFMx3hLnWsEHKLKfao8bLfVqfy4LceBNkZ9QSVNZbVyEbwicNj2WZTuAsTK4N2ZPhMwk3Sy3X5uVB2T3NzWFD2K",
  "key8": "5DvRzq1kUfwFAX4MwdN43pPpV1LqDqrYuhEtqG8kSTGG5h5saQykoWxMskMa4n3KkaGRX1CLLcbxQbqYabPTQX1Y",
  "key9": "46LgXFtkVbrFdM5bJG6hTtWVUQVNF38eegxcRv2XycuEdNj9rMJTU7RRQ2aeBxbofJgnnWnXravVHPeDLjixtiWc",
  "key10": "2TmvrJToYzS8RG3oXeKcp7nzTAv8Dq8GXVx6TdwHoXcbw4XTGsyowhtSsgsTMRuprDmYHyV4oy74WGoULouj3w6y",
  "key11": "a1GM2PWNP3qd5hnssqznW5rgCW6dMBwG274rZgESt4gUegZCQLPiqkT1CFV28m7APjYtzrqfU1ApVqo9bKuQteB",
  "key12": "5fSiBe3DqkwntbY3dGXu9YboxHztJSMVS6wQfeCAPmRLZvmr1unr8rSwJ2h1gttvrfsR6euffyD6aifnUE513Y5v",
  "key13": "VRpabVUoXSi3iNjovVU3sWTLq7gthxYtCUxUCHbwp1MwLLLcYrcsVt7cxXjPyX3knTVXGBQFyGyAQQZcZ2Xrirc",
  "key14": "kDHZBSYPtUoTwt5X7xhtXQfptKooFv5Wqj18KGFEZMAArTG28rX9FAg6bVfQnkZfHbca4e6pERMucSKbwoakfG2",
  "key15": "4WYdH3tX8CsUyoZW7aJBMrtgZZTguNKapCau9Bt6ZHWC91gyw3wPhWFZwbtiSq61ZbC2gyP8kKDWCWnaDi9LXuMZ",
  "key16": "5Vo3HMLYLPVUQnTWpK1VuzCMLdYwg67Hvub9WSKc7B63Bh79HAWzjojj8DeVsGvHRfpSwUVDDtnZ5ux3MoS1iZAA",
  "key17": "2UQLRWTcbrW9NnTX1ViaAR9scFvN5wE5MRJhKFR9dG6p5byDriaXuVu69EzAPCZNLdLKmjnq2QbhzJiCxf3eg2vW",
  "key18": "XgRGcHqvaNaaBZW7k9SNrLuCCKN7jhXH4LkQy7bsYJdWwQ4gwrnNMdYeq6xjV4gpvFAsE3EQyHwVAbRQagmwWcs",
  "key19": "2Mz5pi6357KJYeS8txjYTVJWzmAfsTKDmM4GAmx8K1DtGL5xs43zt9R7TtrYpKSj7wwWu6TckCYfQZcz8mAy23fY",
  "key20": "2SLJfNmnNoL6dJnAMk21yWkhTkrDDj5qH2T82rARERKyFZwifaHw64XYv8YPtVUXHm1fZdryqjMb1nHZhCFqZRpP",
  "key21": "3pHRNmrSvYzHGPcGdKEzTady3jnqoxzzjmxoHsCMCmzV8RDb9jLmPZWSSFq5PsFohDaHS2W5S26Duf3GEbkkZ7qF",
  "key22": "YVA5LGMjSiCFggh5V2pK4MyLq4tEC2csHyRx2c3DyFEui51N3izMTzs9yXYq3S4fUYLJ3eBWTNsbL18KUq7J9zF",
  "key23": "ettTK67ZqjSAdRkFELHmRC79HEN1qXpaHTUegmRSSdE1wj73bKNi6zQGV5XMyo5QV3yBprTzvemZoPMB7HjhhhP",
  "key24": "5YqJf4U5xRv1HtCQFCciyXeowaN7yC4doMKBTH4Wg2J5SiTKSy6ri1MLw1Gaua9sMsC58i5ACaXDZbSs29kGD7J",
  "key25": "5x7qJzX3Gzj8uyMCEUPqJYEw4nBCJf5ochXNpVMG7h9Tkd8vc25jisKj1xRqd7FYEo6qFCPLo5uqVj58TEE3h197",
  "key26": "DKtYnpYXZQ7R85gPp6W1uDUk4KgtrhDAW8Rn7ma7N4jAFvKoG4vEjHDJv3jQQ9CxNeKqBF8FuyW91zyy1v4aKYG",
  "key27": "21aHheqYP6qyejkBd4fLcZsDmM8V3ZssaiWhweEyYV1UqUXZraFEeXrALt7wsFp4ZxTFjh9qhbe7Pa99CPbwza3a",
  "key28": "4ucGBLiGnjFZ5nWyo7YdBGJKqWGu4GPpHu7cP8R4QW6X9s9ZKHTG8VjZBmXUCcdk8krBv1ev1X5ENF3VqfLN7DMe",
  "key29": "2H7Grob61C4pWz39BPxAsegBAXRyYR3MaXK8fT7tHW9Pxx6Wy7FTnmpEbtsvpe8PaVZE5r55VDBBFUii9vet5YB2",
  "key30": "4nSFu9xUvJfnxUm5Q4k8N3EMuwsQNHRzHNYSze3P1WBCaYEcebYoVJRF1JUcaLSD6vjfVJCZkpL9QZ4YgtuxDgvc",
  "key31": "5an2KbN7k6vHN95gv1o3HrTkDWhAcxbw2FC1gMCgCTxRcNJTXgsxDpWYRysJCFNYqh8XLL3reY4WYwCEry8H3dAu",
  "key32": "2wUVXUrau5XdPuiXK1AMUgdG4cTiqy9rAG9dZxHXaYhAxAH8fUBh63zTtar3Wu5jX1YJpcaPHRMg4Mr3AK6NXTKe",
  "key33": "sqekFMiaBZsvPgmJBTujKKYZkgHHKjWPmL482eab12yXYeArFyqpuYJDXt4YDv6baTJLpTVUVs7H68aaSaGnhCs",
  "key34": "4j8ueHAhGF8y5UuGBAK9NKfUKgLKGV7Wgsea254mrNiSjxYJGc1p3hbNi3v63piH6RD2h2zE93RmcHkmBKW9v6qb",
  "key35": "61aVL67J2HL82KjoRjgEt6X4HJJM3AarCvsGD38LkwyCVJCA6AWaZwdF2pkdW9RTZZRKr2oV3m2yWNbcuP2V6Aqb",
  "key36": "4bk3HmDQH6fMkQgdDgqQmBV2539SfiMdQZBwZYgbgsZaPz9HuSQtd4cWPTYqVLnULTAeo9BYsnEb31KzrkDmLvKW"
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
