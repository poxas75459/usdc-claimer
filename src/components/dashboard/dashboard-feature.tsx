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
    "GpEtiiyzP3hDZ2C6sFxB9SGsVYamWbtFipzjSEE5DW7ANTAr5ctGQFT8F9rx8uGpeB7nJMXxi8uKArGgaLRj63A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3spyahxMw399Mssh54wKyfH6AxoqiamPxpCEj9ARDVnpCjU9vSrECyv5oQ7fzaAJ6L55BGK1HQFRHMNf134FuRui",
  "key1": "5k73W8ecHEFpDCcpgX2mcKpEyMp2q1xkvZFvVUygKv1DitFXhLXKQQwGDb1Fi1qAv4pEZAc8UiVU2E6RTqrAADQi",
  "key2": "2wvx3GjC2qJ29PtfTwdJCjGodLYkSujDiE1xDR1JwPqrrQN1UfBi1canc6SQAipt5xqDFtNn4xESAxuWiLWdTnBr",
  "key3": "2ABZYnmQmVQ7tmuLB44bxVLNbScR5yYtk1Ta8BtqgJwoh7xfyouo9poJ6zs9RMrVxJV4xxLreefxzVyqTTnwxjkG",
  "key4": "o8zULhm1f24ygQspd61XFPtEuu6BvbRmm76eKs9eiP98pw3zLG1owN4F3NkAvAQnAkn6CcevSTvgwxzLuY9hatX",
  "key5": "EmmCrPqFyArhk7DwfdQZZD67CpDAoXNYEppZEEuywsntSgcwfbZjADq91SwBBuYeoAG3FDsdZZT8yBTz3kFHie3",
  "key6": "HdSXe8Q7hTHcg3uYxviZ1Gi8r1uCcphXaqFaVdGVTxZnpubvfvzLjtnhaBzm5HyFhuBUdwLHCS8zvV5hnApVt1g",
  "key7": "3nVPsVgvhgC9fsE4o746ZmzVXomuvgWnfYUNrKcYtNHkv3AZAUXXQTfZ3PJ8fxDxeBUx3R8J9zHBoidcNhLHzM3a",
  "key8": "2uvjmoSaMGxbLQ88c65KAKRcUxHWWBD2yiUkipBtq9oiSwY8wSS33BFgwYn5LRHSgsPkMZdUCgUrz4KjKoPGEM9P",
  "key9": "5D8ZuFHNPF7nuJu5mGDdtHcUwK6pZWAzA54nmBYnwSCvujq4eQSYsbdiRcciwcUBqPRBAGBFAf6ws3gMWV818wf9",
  "key10": "4GFTpcoPb78XFZUErzb3u3yCggMsbw96f1AvZXyJ6f2QjWizuArqd8FBy5F1P1ubiJDvvgsNbf3JEmTvHVBcnD6U",
  "key11": "3w89zCXgsFxjxPr48532ehParcbr9VKfSLY2TgimQ31GKbJtrEL24CGQpqZDayhpYECPvzmjKhbfTrZiKXcPYdP2",
  "key12": "52TCaLtBkwArcChpHohcsqqHXxfnzgv7tWZNsThBTjcJBgxeoSi7WWsyMkRdNPvJnmHptuNDKQLZrFYQAedjztoe",
  "key13": "2V8gFnJaYgEzZyijd64MFGvKM2jHTPe4Be2sKjw66ite9Q7BLtSYTyaZAQPsVUzehBPQtZ1jZVkrkE2x8YjEjno3",
  "key14": "uxJgPrBcrUaKVq2BajcZH6kdyVukCAfBNa99nN2PZRv51Y1zXhEWJJcA9xza2sjCDqakgkzBf8eAUUXwPkL6ZS1",
  "key15": "53sZnVUDKd9MwdWnm1YR42Wah6LwHFYJa7JozC5gVaC4Wf8Y7iXDZPp3yLMHh33EryGV22EdUBTvTv8kJFd7oGNt",
  "key16": "5DkKGrEQ1QsfrtxW7QjFdmeQfs4YmzvzvHrcc2ahDb9qihZaDWn1cxaJZWsp3tvUKRRMCJ4GoSdngsC1Zn23Gx3G",
  "key17": "3KrtGCorvSmUCz1FfaeS5h5u7bUkQnmi8oNCss2BsMv1TS1CpYJppu7mEogdXBNRkTA3jQS1wRs7zJWLYC1zKrAE",
  "key18": "5WanJ6Yrvc1AQXNpDnKNGuBbb7Q9JF25oigAjinA5qyRZsqYZaWvFgj1C6scWg8YyvKdfdDp8tL9M66CVKTU4Uuy",
  "key19": "DSHhGQs91sviihgXjohhUFoqitadWe1Zqpx9VQAGxvS3c2UsbQdSXgw8SYAiTrYys45LZQU5hKZTq4detJj2vcG",
  "key20": "4u3xzmtpQdTbazy26dqvKvMqPbg5TchfChPaZrthNji4APjb4SVeUgjvTwFXWvgHRZh5Lavt9yCkYYJanhhkAQGy",
  "key21": "8umrCUcUbT4ymkMfmtHukn4vLNBSuyBCr4o88teA8zQD46mUnuJqR5tAV4tBmTMazXju2WriVREApxTZDNVfaKo",
  "key22": "5ADsC1937GdUnzV2HDRviDz636HV8GNPstbfd84EMHaM3dbsLHcoeNbXY6rsV27g97aLqbKSBSvb8grpY5ZfmUYU",
  "key23": "4WyU3mdoQeWhLzef5iaE7BP7BdKDgf7XMjCsXcJM3gbTCfKapkasN9FyNR2vhySQFwdqve2HtXQLgPMLf2ypjLtA",
  "key24": "3N3Fd6Yw4oUUzyLzxikcCaW7UTiuFauJUMYiDkKGSgND5MzK8WmMrcYs5iCnp8bx6o94JyhE5nVURNCzQ7QnVLtw",
  "key25": "5dg46ChY95dM284uSzSNiu3iZCUzocxNG5PNtXtzLJ4rndQ6hJmPyuV7ru4rz66i77JpnuZ3scF3Gqxv8uhtfp2B",
  "key26": "5NbZiXZjvqv9MUHVTzRfz7M9LpM5t2VbDJvJvbrgREE17k8VjHGNxipTiELY2eyjC6j9vNobiVM32MrUvxg29ctK",
  "key27": "3snqKVvrLq8itmmmb4tFNrdPGxFm4FccZEwMvAUs6Fz3ow83d235D9jQgCU1fW8LwURnuLj4Ab1sgWyQkTC92LBe",
  "key28": "576P6gtwR8fFJrsX4ypzJ4XxygCZsX8dNSJqTBURVVg6su6t7W3nV2XSRJNzFtr6VG97b9MMckpuvBf8XL5uBNPf",
  "key29": "2gqgDove9mzSLnEGWviaRQRG33y5sK9RcjzTwrt7vpvRKczRbFASH9xmgv7kjQn1PCCJNjzLUHbVwTCPH8sWE5pp",
  "key30": "3CSzyeu22aJtT2GMMwk2NtD9icpPUfao9igxzwdjGxpBRXap6kbcUgcs9Gr4uu5pQmqrsHCEvhLs9kiWHAxSNeG4",
  "key31": "3ATkzYqn6Ve5AepzVYepRjEEbffeSEsCCejiGvcEkAwt5e8fZ1RnUJKpiXWhZq2ePk44x1u7F3Yjfkg8nsAnD5Bf",
  "key32": "5xRax6DeoezpgumqdEjUjb533Q6NMx5D4FYqLa7g9tPWM7LqZHCE63s3bC1fmbyJXmeAcEYZigG6SbUy1audYGvX",
  "key33": "47uu3EzSQM2n98CYr1FNEy9QtBV9UoHu8EvLJRFNTtfBmFASgS6tZqusDLACLD8VHDt4WknTt7neyudcUzy8UcLZ",
  "key34": "43pK7ogXLRUZpePbT27MrN9k88VrGk9Kk9yhYeCus89j1cdCnTH5HZL9LF6q57XGgxtZ51JgcwHzxEGextwjds4Z",
  "key35": "kSaqoQGGe6duWAyVFsmotuDRkqtJddy9rADtMUARCuFYxyeeEmM7zAeeGEj2QKT5hdxy81SvCnsGEo4Yudnb1sX",
  "key36": "zgRdgzbaWsCDp4U3oU2wxXi5GBSi1aGHQ7NCJgJCEDV9t7bf2gqC52a3JQGwvuwA3nxAoLUPSTLhX5nXVoZrZQD",
  "key37": "58txjzEwVVHeDeecMTcTzMBJgBYoyjTeqYrwJCs6AbRdQ4DRn5buG6wAv5oCBXNYZGJp6eZNyTWFEq2sB4Gfm7gf",
  "key38": "5AX3rHVZtsx19eU18SWZe6ScmMqNHk5HZRZuctWGpeFHVaPyewmCjwUtSVJ6omN4oLLBUXegVNgY5RRtan3kB4bM",
  "key39": "oTKue35j9fmjtX8FSvXZwK9swZzEbY7p61gzvxFUvm3TZhPZD8aXML46xu15NM1n166JvmbWeshv7EpbvZQmsLo",
  "key40": "47wpMVdiRqQo7CNT538UwcvxH588gfgjk86QZvSVuEztKES3nYb9gywXuxPipwtaxkiWd2wDMYWwVV9V1qn2iQGR",
  "key41": "ubJc3bcZ2XEgtkH4MT1ogVTWmktGLB9RrrESALJM16Ked4icq1DD67jp9RvmKcf1bGGFjfxjP7RkPGjPwXCuqoi",
  "key42": "ypGL14Thst5G8SUDMPBYVFRH36wxjWAWjyoVKjCifVHyWGXYCV4RfyHd9mn8HEs4pJXjaRQCFXuyuV7BfC2v73K",
  "key43": "5Yfe8i9MwieUDUuFhKpsPWA21ReB6poi2VCSzx7WuHYkrhSn7vinqBMGjYbRsZ3dWFgwbQNMK2nZpGne6odG7snZ",
  "key44": "5DFiEuGfCqR8jqJrRwuRBQRW5Nsia7VqHdEoYoBQWJVMPzABEXJBBrpvdqPojD79mGrVdexzbVPbzjELZWHRiLDU",
  "key45": "tQ1F3uGRPV1XuvTEND9jiCDt6QDzWwLKhtq9wGjivWdGZXWZJnZkwGrkhghTee7HfTEtactCG1HvTM23vbziUNL",
  "key46": "2HP7yLpWGt5P8cSQcgHUofbvfVCCUtJzKZSYXYSKkvAT6Yd45Qz2uEsktXSfKnp5DM1m9buqpfqYR6muBhxTeC2t",
  "key47": "2gtV71gFwTLm8DQacPpL6AHCKKKMRhN7pJfyt8miBYTgDQXqijsgGYr3adaMGSYDYF8DCsZjcJBuAuWn8ApDJDSB",
  "key48": "44sZsPFLovAZPPm8LWHtBJenZ3aVRbChwEhKvs8CUxWNFLMs1KZBfRZA8ZbAWgEbciJzTWWLTigktXWizef9VBUh"
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
