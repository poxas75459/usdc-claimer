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
    "3rg44GD5w6waNh9w6wcYrzGjLvMPF7SWzzgx3xnZRS2TQnvKPrfRy9wmt4T2F93yCbLtNjEq2475F2iXii2YTdBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EanggCqbwvjQVZ2xndDTE8RdiPAt3DnVCBa9WxyKRWStq6T2JAAAFzsPVoTuy58xchYEzecWjKymvXD5PQGGB6M",
  "key1": "zjQoCZXS6KviXZNcoTxaKMM7rKvXpptXB4WnYkFGa1pCSgqCqrVwr4umDkn52sdsZX9KBHd26rtEPjQN8D9DdTq",
  "key2": "9xfBjgMr6Uy16oVpMRkswxS3npPfNMxks9nP7LcyPrpZGYRmsovwMTuhQe7PbrNGc6sQokJEPxicwWNQsxhm7AF",
  "key3": "42yCkc3NBzhYFDHs1PBgkWuKMWdhqRNHdgsst2T9RSKQZtvV4HDUENb5qNDj4HBepy5YycH8DbB76qbxwgSWupdZ",
  "key4": "2ZhBytQUNyAB14WhoLo6strUGutE13j9Sj97AsWDfvYNA28kgMMY2ATVuyCeFBhSie5sXyFYhs3oQ3MW3kbN5xZo",
  "key5": "4Z1bbmhQA1pKwepR84GikRgRrUAAvB1RFJTKrrgMq987ZrCGaAypP3TCwsBpBq2MZkzWAG6myKcrX4x9WjuncJmv",
  "key6": "5MnPRoHTs4qa4UjYnmansi2jZGz9QNz4o5huGGbEBpFtMYy97xa7HeWcdznePdycNMFf9oFhGhe865PnEXmkrYaE",
  "key7": "2LSFoGoqsaQAJ3JP3ee8cWZn9knHL9bj1eNnP5doEjrfZH8LaLN4Dvjyrpj8JFEagaa2dNwEpgch3Q2pyiAqdqiw",
  "key8": "55BtfCXnyX5uPKvLmvxY1yLhmGvMfxfcqpgMNv6k5NavaYzECvHqSoo9Ux2t4VWHv2TPcoXhQ8da1L1nCqCvmGDV",
  "key9": "3o39NVgPqET5BnVNJiuGxoPuqwoyRrSa7VCFEb1HYbcpX4udqo5McSHsjj81M5PKvhnnXJm9HDyk7JEu6DtB2QRY",
  "key10": "4XZuD5yEM5LGd3Qdym7G3Y1w1utWD5L1yf8Q6hDVmgM7gQuAtHvS8sP8Ad3kQ9RYKAveYRYRvJ6LSAbSv5TiiHMG",
  "key11": "3XwZrDtkTpWMKBcDG1yzkoSaDFq3FgCmW2UwKK2EbiDbb4cuF9V9yHNhUEA1ne6Yd99SLpNgKGydSbeRhMnjrob4",
  "key12": "5zm3vkw9nJZMi2xPan93RQXGAxQgsBirNTrBn11wg59LUmv4pXdEdHfw6TSNLZmm4MYXdMqDCxqLeyVGz4nXNdAd",
  "key13": "4sCaF1FHsUxjVo1qJnyiPErrL1qXgsNayG1wHbzvWvbjbiXoJfvoa9gB95GG62STDhWSZUHABmPPe4R9JbdEx78P",
  "key14": "54N4nfkJECYcYAiDBtdtufbMJrRqKJhiG4tJwZFiCLRGodeXNMAuJN9w46RzCgBN6kqCRRgKcfN8CcSdY9RKskaQ",
  "key15": "3cmd3yXTYh4KrNL44trwV7Ymb9dqsfwZhRt6Y9S4Q5bBxVqWED7kSuuFYESG1SJeyaDdtsE2hpX3ra3UryNtmPeV",
  "key16": "4JYnRgQnjBMRGDM5rwuS15uz6PVEYCGXPqdB1Cs1xsxzmXTBb42pzn6TZD8iWnmRyitv9oXz57K1AuVopcJYWMUA",
  "key17": "3Vk162ryqhLqMKZtuEuEb3vSc6YzSkJaUVdSMWTTn1EyghXoi32zbaWLXyG7ioncRW1Bxs9kJG3AKbfsaBuErMdE",
  "key18": "4DRenuDidguS4Hk54rmJTGENJ7fiQ9bkxLB4vgJjN1XNxzuivNPGRT5oF79fu28YZA9qCnefM7uwU4DuYAQgjrU8",
  "key19": "cWuPQT4xtc3hucajZSLFot3Wis6JNpTQqAeKckKdKLRnttYu3a4oHw7s9A6KDDCY4TNTitJutN51rVUCkcTC4UV",
  "key20": "5y45nbfqzFVs96mAudCynXieQNiJW54RKu5Q9vydThGvdWy8aA8ojpugr4GsptyRpuZADvnfET9zTwvNVK4YfPve",
  "key21": "3mpfQEsWTRcd9MfC4VYeRJiJPC8osFRGViJPTXWq1o4Q7HxVZcsc4nsrYzw8QbL89WhxgkRkxUutcdY3x7PzQkPn",
  "key22": "4mCPxUpXq4idMGRRGchUsSbJAH9wvF2VLJX6UETCXiw1HKsqn6r7pSS4UjLiBeMZCsb4Gpis583d1Y7uLqUc1YCE",
  "key23": "dEeLDqhsQkMrYXQ8DbenEG5BfKwY54z928jYk2iYuGPvN6Xx8YW6yLtK721pF4Ye65ZJ1iJpPpYH3Vrnz7nznhn",
  "key24": "62nBdWgBysWsh18asFt1oWB8Xne3ATuhyv6Tn3SA1JyKoSUAGYgEfbVsMM2mUtWzfeuzbjz1G3VoPdB6x9smxpRr",
  "key25": "MKYvVLYRrpKpWJ8Xrjo5Zivw6oohYzYWBEy6tvKmPtFGcJW1ucZJbyMCipYHje12jGNeQh7S5kMaGS7a5Em8M87",
  "key26": "2rZSRu92BurkJQMHJcY1APBFqAnLu1wouqymSG7o6S9wgDaAxzDWstLTV48fF5Sz1Bs6gkKeotoBxmP6GwrVHGPb",
  "key27": "3oDK3dEz22yigZrxWZgY6RoGxForxq8ov6M3671gCNyApi1QveAEQGK8kULH7BmWakMfDYybhYcuwK3uPisrNSm2",
  "key28": "xsX8YYcmU4N9kr5ma3Mo2VPvf4aznt1wHgSpa3T7NFMmakanmCWhjdEApe4sXgsqKYEyryTGPb88cnZB1xkU6j2",
  "key29": "2eGjYxJFvhV4i9jaGD43VvPkVUbLmAT6rVhf7ZMuQ5Q6opw43cw6VhXnxhbhC7KHcR8SPFyLDoVr6GesUZEaGhha",
  "key30": "2phtMH7A3z7q5FDknFaDUyXfFFdyvvZTPB7ooQXvPGQVqxPHY4B75xkNnUGbMFecWD1qHQnaNa63qVsTThKapwko",
  "key31": "3x77VAmpRAKpEQrJUYqwrionbP378ddV3gWCDVinNEwyA5fju1JjVRBcmAnhmASDW9qLGzZ1UWjB1cLXy6E1xeS3",
  "key32": "3cF3czf17wY8GGZd4qKUdeJgWvRkV4JkQgyXcARvqKNTtvfwPnzH9s5peL6pVsxzp8gZEvEsHDyRZRkib92H7LYX",
  "key33": "2NUSipX5zDxpb79zCdMTXfwbHrarL5GdrvPSf1Nvjo5tbJCrvLh3RYVJPDxX2JZoMf8yZWU9ZpWFybDN1ZCc3W4C",
  "key34": "ZwkAaWcXfSjyJuvEZmV555ALK9ocsYqrWC1B5gVXDycxUQp8tzT6T8pW8Qivt3aP41y12S7r4BXCB8urHFUqZwQ",
  "key35": "2w2zxdHwfoC5hquNejjzo137HwCZK5C8xKxgBNzBsXMByAFpanozju7fBa3bDkqoWZwzm5gKKRypDu8zNWcexP9h",
  "key36": "5JzBnKLLm79fvXxT8PyLYa5ksNuR2e3yUWAWyABR5zN7cQEY7p7AVK85PvpHRNuJsEsbYoSVaCWcVX69kMzK9UHG",
  "key37": "2AMn7a4QMgJZmrHyueLgKcETXt9tiRAqra7T8xXp2d9tUiGECb2NEk6piKDQcN3zTVuuxZvQJ8HMXkCtFv1jW4Wk",
  "key38": "39ypSD66FrcHPST3rTJENgUhPP54xiYRD77pQDMWPQednnnKk8GRVXc7rTXz21DE3urAsYS71xG8KvENE6dBkfFi",
  "key39": "4cSnAi7ebegEZB9qgZidvpQHAxEyDVTTLMNbBJjx6D6jipS1Jy4MFGcy4gzS8xogyTbRXjzQk4Tk4VPHJYoMyoc7",
  "key40": "5KypxubvU9RDTwFGUL5yZYkt3GFbaL5xTzULE89RgTWP5f96vVTTTHKQE4qT8JcGGfzpDh6pCvZXpL123nxBiy41",
  "key41": "2HCgN7PVsQUWJPeug99EF2u2qvNxU1zHDmrYH6SAt7j1ZAof5NTrnLvnXWZ2E2dVfG6a9zQChnexU47F82WmySpt",
  "key42": "4wKkLWRSLvSytSMbDBejNzoBNqyYn96iHUaUfUcd5NXfu3KYB8hRNgajo7tUsMFikHJMaFFanQw6eC5yVoSuZGWt",
  "key43": "526BXDue5KR4QcD3vbMyUxppVSo85jFMGj1UuCPNGKAU8FTXasQqiHrA8TBFy5vco4UPWWeTHtrvnb52kqMgcW39",
  "key44": "PtTjwdutwLEDAeA7j1dmjUU8G3VxKJu6VDUDWzeTx7eDXKiqA8v625PUY5uwnUNtyYZ6a1p4seXVPpAnSSsrPDU",
  "key45": "4mSFDoQL9N54Hg84gREieVCiiLvmP5YXyuWWcef4UQcEy9PALZGFWP5q1779GN2MdgcxQjJsmRFymXL5o4P5jj92",
  "key46": "4WzR7aL2StTagzfk9Xaqd2AJZzNvDuK1ybWg5f2QpefZWwQXuC2FkcXzHazY8TgYmBiBGbVLYg864NJuxLAAnUi3",
  "key47": "2ExeyeT1YEnWMdscUf536RZCudPus8WhmeZZhEn4T2MesuaZD4dwqW7ZdNZh8z2atnJiAVbeEfCw2EZ5j43bv4op"
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
