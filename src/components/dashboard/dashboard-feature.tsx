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
    "34LHdJ3UPLR9Lct2psV6jiYHzBLx71uwRooD7ghsLW7yj5YzQd6YCZRyRmUnnwKFEW5BGxQHkyXETzYDXrTofEn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8Ap8wsfx55kXxEKewQAaqNNfFwfYwLdxxLsXk2suzmx7NyNCh5r2SwBcxGED87JtKigSDvNqNSdMWHw78Jw2tf",
  "key1": "4CwJinzKopzY3roL7dHXrhY2yKnVMg9gX3WxCggKPMS638zNBWZjyfNZEZ3i2FitypayPDTCNnHSFLiRi2AbHgp",
  "key2": "2aUj3Rfyz9SpLWeJqsTWfY4jEWcPZDmmRKuW78wPBjk9gV5UE8XHonUx5qehnmBuAyqZsBJgZauiGpzUw42wHLtv",
  "key3": "22RNND9YX6Kiz9rnkJyTqdMzTL2w5P3Ri5wESLKTXYDqeHUYHSgsTh3DAvKgRtbpQybSSaqrSZqurVEN3BgjKY7b",
  "key4": "4eix13UuUuQ1nR5q1uGHbjkuPwnW4sHQKWMdWhYQhk5pmacJQcQtTVzWhYD1yEsay39yNL418yYZnGjyNG5zN6Ks",
  "key5": "5sngbLiX2qhqaK48r1A3kzeFRD33DFerdK9CJBkN2VwNjRSCRQJw25ioPuHGae5bcBe3XL4DHBJSaxfXV7TZYzAy",
  "key6": "WBiCwnT1XSJu1sxMj4sGsRM8Gc3rWBRTQhUvtwViPtZCsJX89Dq3bVqVfqWMSTUHznRGnd5DG2vfAyX4NPYUvoN",
  "key7": "empP6RdwjoPHqLCAvxvpnxcRH2BHA8NceeEHWWPUWkPBdLy7UQUbuiZVcJGULNApkd5UgWW1xSAeBJCCEV8o3R2",
  "key8": "3j16tbWakJm6NyQR52yD6hqVKeiehHU1J4fdwJyJsRjkMEMepMTpyZCzYxFETGJSKTSvgBvvyi9dkz31TMgzJJPg",
  "key9": "4mzyE1tFBWAnKkjEkkKVWXcXhk8SuSgNAMQ44Wq4xMAdAGhsvpLUDg71UW7dYG6xAMz3u44F6E1YLqLn4c7hzwLg",
  "key10": "2bQiqtwbspaWsXMimh2D8w6LUWeQLyGM2o2NSRSddsg57LzU2eH8vfWqf71hQnQHVrgTVm54ky4LfsxrLnVkincG",
  "key11": "3BuS54igMB1DduxiUU1RzGCNQ27TdpqPJwJaW83yWLnXk8aBLJPhPPpHy9r395GVFjPjvu3CpJqj6PzNro4w7iZq",
  "key12": "3pYuyLgsmjc2H3EXyArvoXJ81qcNBn9zCXyHMaH7tDnvAFBnhJvRgHrQXMbxsuny246VbMjMD2xr2JtPGudeJK4C",
  "key13": "5wQLCwffCbnm3iMaaPNDhRRoCkK5AH6g2DibuUNbJj7FfAHd6NSyJwLid2TvafthXRamK9QucBRvwm1Z3E3S4Dih",
  "key14": "5nuLqAw7fnnRE5ftGxifhYqU4sFzCqEffg1ATFgCXEWr23eTKiUPP4Wbb4Mc1urEdGSApPdMUrspwWKXg969xoPJ",
  "key15": "29zSY9B4tmBXcSicAn4U3kUr1ZVMoDAhFRYZUTNWm3YvqmUsTtjQDkvGNyHBV33MMkS4xFcW19ZXhby8dC52Vtw8",
  "key16": "58JSmKy9svhZnCYu9ixAvPTxnTJf3pXPWNsLfF8Qn5BrpQwEdXNP43qbxqbLrbi5dBs8SrMZmhmbr8QKXusAMtzV",
  "key17": "5McMFfJYwYvEUC4yYsMVkKrxGzQnmErNRKQTBjRkBg4n58yzXgPDEcJdZ8PKQyVzcHiuavmj6wpV9Vvtwj8hZ7s1",
  "key18": "3UTeSs9pga9RZ6onx6ZU6U97cjDXJpKHHQECkFLTcj3ngtEPxV6xw5hXFpHe4FqYmLCmZ9n5JmpJUm4JpfmtA8uL",
  "key19": "2V1DqUuwyByA8MtdMtkFSPkG4hCPHfNU3LmkQW5ZzeRDn2Xos5JUX1ebLiBqUQNJpy6nbLDvSo9hDF6XdGeTSeVN",
  "key20": "23bXhpEw3tTdkPLHukckFaACK9aVEssceghLTkdPyw1tjrDGBaUNR17HYEDkSJbaaKNec3NjNZkwsz32GT5qdrkL",
  "key21": "2CjHJtNmxcT6GuetGbZh5JTHxHX8hfNonQ2bvZTV139asjm3zjsesq54qwhRdyPnVoLh4CPgzq8uYZKrt48mDkXr",
  "key22": "3ZrKcwMQNsL7UrCndzzLftiyqYFXaZt8dDhXpGFpnF7pymdXtoBLWUZex6ajSLGqdT2Qa95fNNJ7KwJ76SRoGRip",
  "key23": "ufTV3UkUQUBSN6WpWUR3QCi1VZNqtyPfj8Cro9YbzBEQA5Wf7t53KRPbxdJcQB3CUvnyeLomvbmvqwMwEAFG1EC",
  "key24": "nFCuhdgoKiSYK7m8Lmece4c3nJQT4Yz6Jbgp1VYkNCvZcMAQQbDi8QyVj1qLuLy3hmv6PicyxT3xH2xRXyTwn2x",
  "key25": "4MGpH2DtmaqwvtKC9sPWHSq1MRPJALJNqrjiSs3v43mZhturjyTm2LMKZdwKV3s4s9UqUZ6hmV4w9etYtmy6HbVN",
  "key26": "2RYXmcQyX8c6FzNsAnSgURGkYY7ULb1GtzeXmRU5xLyuycGog7hBS3z61sf5qHxmdE6sxW7Djp2B3cfDXUitmBko",
  "key27": "3t6FGaPEQFVE8htV5d56AqcXXUphmQyn6DnQisVGhfpunhFiCNEC4yQAVgkW2khXHxMATGLLCkSSwEXv185GLHt1",
  "key28": "4hVfE3kbVZjVLvVhHAcjHtk6wMnKhKB52qjDbNHwQAL96pBkEHm4iSASBZoEtGKbVi14b4Mv8dS1giPrbYbPknXt",
  "key29": "2rRyvtVuQ9idCyzpQp8HZnVtP9X8mkWwS3dgJXvYBNZhjhW126QjzVjx3acZi6KZk5JfNyPW4zVb7sRDfnX8zsqP",
  "key30": "2Tpj5zThhpyZJsEaDUcWhH3V59XZBDazqNSGNuwotRpgDu7EsyhnKdc5oio1mAGj6mkLXBCrtNjZF4EnRtXzts2z",
  "key31": "4RRZgxLLtfPLGx3D1JU7EPLFgMJ9myZEmwPjGWtvGxp2HNmz6ju1oRYXtQbb4jbNn3DNvDQeW1heXfYJJRxktjSf",
  "key32": "2Nc1Lupwg9s8WkZJEbEgmAQ8apmmsrm9o7WrZFyCUDHaiZLL3u9fqrBCSESibBPZBZuUdwAKoePLncjAZH4ddbGf",
  "key33": "2Y2sF1M9dU1Wak3xJE9fnwTKF53C2QPTzgg8ctdQK49judub9rMHhaA9UYvLxcS2wJMkatkdCZErARFU5zYLTqaX",
  "key34": "5czw2kvvpYwuXs9xntWoxP2SgPAYsDcFBsmqP97V8JTXJPaWkkep7748To8yvTgpQ5AFrRTgHxEnAcjVQ8DaGfQv",
  "key35": "66Y6xruwFqxiB84sV4jZqYTo3XmEAWKYA1q3qwCkdQzW3K8LVy3m9geqsneE1QYjqRooiyc7MLCVuqh4nnrzoruK",
  "key36": "4hNo69t4uMszKkS9uzWPztDifbz6PtmNftpVZxSQ2W2qqVsn7ADUQZKWeG1wwqzsrh5uUiPwKvUu7WSut3p4ZnNa",
  "key37": "5TmixS8j1RWHUzB1aY2n7CPFj6uPgAieo6LGDyzYEpBnWUAP5Sgtk6KmZirFDBcQERCfpX55peZV5hjYUGDkmJ59",
  "key38": "2ZVrqzGbq1koSYAGi6W9rp1KML2GtGG2HDUMW7X1aUaaa97hgPCuRjuuGHL66pTfN4fqKC4q6YSjxiG4gw5j5vQN",
  "key39": "5PtGkTGjv8HpgZRwejHPADT7dhKgoUxiBbsKvH3p7ap9qLSDoLEsaEAawSRzDtNSVcHSUizcFyguxzcGDMKMpBw3",
  "key40": "37hXfH4HyzB1YcxDkUSHVzik5Wu5R3bCSfnWMburcey1c62frTv6bJg5NyDhpNmBBmvtYfaUPTR74bvkVqrmkjZb",
  "key41": "5t99uSRZnNr96eKYRNMGsrZnsSCTr8Wfe6Je6aePXJyMH4xGERZyMRx6HrbKR6AS3n9TTh3ZRWhHYsosEWvvjwuD",
  "key42": "2rZ863i6HkaoqSC93eXRLLGuMMb91vQ7R7Gcetn82i6dgVHsYjmhtpTjtfdLhyPP1RJXZfuPJbnUk9FPje8KSVUn"
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
