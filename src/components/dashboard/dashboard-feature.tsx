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
    "3et2k4nUiGWpRvMjFbRYwCyqd6KDdcqhkNRVKfQA3SJk3akDgRP3iYEE8AmVo4NN9xdciiFmbPP4BM2TU7pQXg6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wREUWCFrZNa35ZoK3vDFbEFcwND5dYLn78MJz8UjtxqXhhkNHR5qVcZzyRd89YgxZYmYb7z8ghjD2ZuXuco829b",
  "key1": "4XnA4tXJuPKaYneGeCh53yHznWrLR8moXRnvhgPTdtSz2is9uW1rCJV2XZZKqFbMqjsnojroBijtMXqUqLwDRJgP",
  "key2": "3AG4CkhgS1Bv9j7zjgZMzx79DwivpGf9SA8xD9v5fkz8jxjbygimgbEbyKA5YxHBMMSNfcxjbrP5EA5UBejTUQe3",
  "key3": "3SC76jn9ew6mUoFGH78Wu6fFzngWSSeFfMFFFdeNVNwVonFygfBEVhcCMQ9KGossMjXUyvxfqEpj5nQejA6rAmxx",
  "key4": "TDY74y8RXqQhtppUDtmPCEXtAtXA77uco1NWEYAujsWfqVHCC3HvEkv3rqKD1rrGUy55GrUJrqt9iSpa8o6faj3",
  "key5": "4xYhWeMhnaKUP32aV9kadyNeycJpFgEfuChShF3sF96tvoLK4S77uMC8W4fXwcnJT79mKp8dAkW8M4rHbkiKKbUg",
  "key6": "39Wes7nn4UhZjwMFnueqsdQzX2DzQuaAWzw6caPdjqJtweNBtHFbcJdGmCQoRjB3N9EGKTeFrRqJvvo5ZG1Nvvbz",
  "key7": "2NE7NkbGycCBmBfnLL18GKXCna6BdCKFTLgq8fZg3ewwZUexi4yD1qwoTF7oLDLuyCFQfxvnf87WZtRuPhsTTdBr",
  "key8": "F5Foyd4dt4WpioGQpDrVe2hupFovFVpNx7ahRRk7qg9uFfNAZDho1FLC3xvU8JG26ANKRAtNHMEH4tRKLeqJ8Gu",
  "key9": "5Q6Lc1WfEotbjPeukk3YdxRtAALV1sKzgQxEbSZEAyphmjTV99a6KaH8rjoFAV1vfLWL1NcNwBozqE4gHMRH7vpA",
  "key10": "2ikdUrGhJLhJLQJ2UY35BoJje481oByjpqawYD9DEUeWJbNb3Z83tZ7nxwJteFrsUqfrFK3wnnatmZRGqK53hRSU",
  "key11": "6pJzxFxysUFNxa5omEMHwrhzyNicZZQSkkBiLubtBeFwVGJ8YZzk6P2kPDDidXzXxPNRP4toTQuahsBmos8GjHe",
  "key12": "ov5hKAbr3gqKeSNSppdxnnYy5wooYZtNe2T4R47nBQm8BS8MVZrvBVEXwHfmY7wbWMVXGFUTEMTE1b4rAnoDDBG",
  "key13": "5Gk5vYGBeqoDHgjefXLwTZkUdjHqBeoMfRiyMAXLwELXU7aQdXtdmeD2eMVbfP9vkMPCGL2qayMd9GcAN5tmDEMy",
  "key14": "4pnHtk6GUG159U3FVsQVzhz7FcH8LXv4vX77fGsd1dd5TGWZGwxssUR3D4JHpjoKUaTBp2jUQcCEwH5A8mW4cVQo",
  "key15": "gr3DGd9wQzx2ALJ6brVodrZ9UTC3ZoMTKGPF1o6wkUXiSQkwzbKhzZXKiJgHLc66UgXgvJGAhNmcBDcxg5xK87n",
  "key16": "67SVMcSRxAxTT8VqgRQRtzNTUHyKNrLWuH7sHQKhswzQ1vcB9nQZqDNswaKXsiwErEGGCbnvDEj4Q143xV8UU2RR",
  "key17": "2xxgVyp9Z5WP9k2uU6449GjA1dTkwGxZnhmmKej4prQBub7EKHhu8x7BzLVv1VWg4wyKygq8Et5mieyvyWB1fHZB",
  "key18": "5vRJVRMbhfbY6BH99Ym6xeYA9ejb1PNeh5ir2eCZaYbGSu1zwo84ZZb8aa7UdomAmxBafWhD5yGQRDFnPfhSD742",
  "key19": "5EzxUkAFfDqMHaoGZ6PJ5TjdVNuHdkiiBtMmjz8DegdbVjdxYjkgu16vuA7mGExPgZbsK6H2w4aN6ZexRtV2hYdK",
  "key20": "28F6TPSBp9neTUA9zBzJebeqkDHqQtPvDTutAzzFPmkezkM75AAHaz4Ty1ze8w7pChFfiCfuSnR1R55hXKPnJu3j",
  "key21": "5jiYCJTr5ap2TAQ7ZoFLRhGsJeyz8hKRBzyL4h7aJQepTgTCg6og6V8UbGoteuCi2tJ7BqEYDm4FCosWtKCvcm1v",
  "key22": "4xeVcnYuHxx4F2hTcfvTZUacmtVauVNyf3GDTzEAgkuYJ3DGyGUZF1V1T5AygrCAvgMPzvJFsoLjCqkWxK9YLtpP",
  "key23": "61L92pB2M2hH5b7hwwfknDWBN1rTMBEi9rooKY2ZSLQgHqZevptJantuX7rzWPPHiUh9Jr2VZ8K2DHAtV6Q46Lw1",
  "key24": "qXycc66qsAkdenMa4rxpVMaSzSJB7azs8E6VeNvFW81N6Sau2Zmr4xKQo5RK4HHg4UnfMmM1qVNXjX8Y7hPeqAF",
  "key25": "4iMSpU9DsUJgCs4H6PtBHsQWJGRGHUaYp1mG4yXDH6rC1ctPRxQKZvoHRLq1YnkpidNbbAQZmG4uHKQoJoNwLbxt",
  "key26": "3K8AKiU5L6YGpqgUyNG335DDz6G36QWvSitABPz678jJKE5fFTig53Stsf8nutrwDeLqvUMudttzgJdxq2QhYoR4",
  "key27": "3aPWBvcb14jBL9LwEpopuVcbGoYi4raaRQA6WedtMF4rJdMgHbgMmXM5dJTiMAtCGipSJsz8snbxkXLym7nMursR",
  "key28": "9z5ZXcm8zJ5yherfhwdVphrD5wX6niQ7SpadMntcb3U76eRaJCFcc5wenKjQEFrameFaF8vA6u4o6t36y6sXiwX",
  "key29": "532sQd3EB947wmd3156GhZyHRnVuNwa3uLtfHpE2XqQi7ATgJ2948jUhYLzKLoKUki1bzCDLJBNEKBkVSYJP3e8B",
  "key30": "2Nvv6csdVo8FL4mQjC2w1UAJX55465n4cL5wWy7f1CfPGwjhmYF1gMkL5ic7ARQXKFKMaAJpts8pgeBuC8LmEbem",
  "key31": "2yhjHHPyDt7iR1o86tLdzQWwhwCQUbko4omhPz9jXCQDCfevWvuAXxtUVu1WwQo6f3aFzfsBiQdy1D7AJHZtEZsS",
  "key32": "4KZs5m6Z1Lx4ws6yLHZHzApMkrkZ9vzFZMaBRW353dJ1oHy2aQ9kMJ6fuDJZq3MntWjxdofRDL5wzU2KiCdtUb4P",
  "key33": "3eT8cKQWW8SnmAzKKZsPNoqQ2kQGiecFRxD6NGkfY3m92sBvXVrcmmAnKzaC4BV8vQ9MGFsVr4YD93rqHbfzVuvy",
  "key34": "3kxKmHw4YBD246HhAW7QQfNbH4HTUGJifuT7eBnSR1Gk3PD6Z1t7EQRUQRPwkK5r4hEuYDkWJHyxFk825hspDfBw",
  "key35": "3CApSocwhoFWxcJmJdKrRoNsTPLm7BjUxyaWofZBAWJ8i5e8RzCwHFpAhqC8uoxQnen8uqoLe87BsCByaxvqNNms",
  "key36": "4brKaiEuifF819V4dmQCts285L99zVaMrKKP2xPEJuZmMK6BbEZDrEqdh6Us8JaoBVPa9ySyp3tnhCtrkHyUPz97",
  "key37": "5HujvX26RcFU5w1Rrq1tbCcUSbbu1K9NH36bHDG836KRKZqZBNJHfFdsgyQe4rJs9QXg1FsvAjRFEYPJt8mmw4o5",
  "key38": "4AvSRqFrkEns5bMHbBuXRp5nT8hUg52zxC7CZvdzq1qFnJ77RZocr4FTM3eABg79DdPuR8CYTHK2587WRiCYt8BU",
  "key39": "33QbWSbKra39cYdVndNxvRx8x943Jv436LA4mdpgcWUib2LqFyeZGQd4whgX98BreEFMU1qKFFT69NacJw4T228y",
  "key40": "32xLoFJgdwFMVL9Vy5434oL2T1Zg3w3pBuAJhUDzMHSGSzGCZdpfCQ8rPMmtUiNsAABk4WkvdH3wAxDp37Gp8BpQ",
  "key41": "3qNr13f1Vy3UCSo8odAwNQEEE8m1fAtjQ71JRqdaperoh6MjzMVM5jTqQmhK6ZMY4vejdPoShptJtrej3rGhReVP",
  "key42": "2HTaZxu9cRca1AQT9Ek5chrTMJmULYtyUpsomCcLrvnxKShqmeickfbEicvQNcmd3yz4h4tChM2zWogAGvp3Y7Zi",
  "key43": "6urNZGLuzrv4kHSsAR4THPc7XSVeCmwrpBp694UeusuhaH3LJEQm3whgH748iUWipKhLzk61Gn1FFb9YP3YEPhy",
  "key44": "5U3Ve5HDbbSMbmA4sVbtBo1yFcRFQWVedpCwcSUzrbPA4JTi24CSoZ4pBe8P5Hz5MwwZ48u9bWHF1VmqoqbXZjZ6",
  "key45": "3QPu67NyPZqjuGSvdFumfuBjZTE15Dpz3HpTv81LHqBvCWPsKzUY5soshv5pf85SF2joxq1nMo6fZJkGK8FVmbw4",
  "key46": "TBR8kjdhuHB2grRW7Yj5gERK4ij4MDwJahgtb2HGHN1KsqEQ3A1TJXEbuumhQoPVg388XbYQeehkXr5tRH2Mgfk",
  "key47": "2s3pcMA5SbPk8nMnxnXsvbX8HMho75XTKiXozrDvLv7YKRxpx5q1jrNz3caV4gBE27ye3iY2z4XPSWckQbWNy2dq",
  "key48": "5KHrAGRwUgPqFRYRCXcDM1EP8cvrtAjhupdoMWdLG3YZZEKquFX5SCi6CnJcffmND9basnDJRmDGs6PZdcbtf9DB"
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
