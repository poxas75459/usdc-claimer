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
    "4d8AXayHjdQ2iEC5pfdBANatJDhRHMew2ywAxcoNzqtFGL51fwi6AwchQJtoYtYmJcTvYRMbBy8zJKochkS3Up8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssF1jn11w9L81D72AmiGJD3cYVNqxaFGPQcFWd8im7sRe5WKB3kS6snsQow1NHuRgpL1w8ftbxLpYvHfV3sA2RT",
  "key1": "4e1spATsgvdJbycQg6uxDXpEG7wQWsPC5hfgiGbVL1C88axhzr4NWsE5xktaUEK4E9CYox4kNZaSEVYvsQDP2494",
  "key2": "XdnNHDf1ABjtWfoYC98UTNGMwoMgrwY4HPLn9YgoCAAQaBbTtuwrVuauqnADuZMKM7jGAfyzjmS7LJtG5rtEQZn",
  "key3": "5x9KvVkSKY8HAZXeSw8WBKb49fYHuMnknXPi8rDmZGYB8SrQhu41wtKRYofqznN7qfuwZy61oV9x1jpQH6VUHUFn",
  "key4": "5eeALtyNLddpZk7jWwGYUSSKavWybtTLP6PfKofGLRuv5nXuguSJ1DWCgj4XB7eNfqE4ei2pgbzjmy8En5ExrnGX",
  "key5": "22fusLpbSBPD2w4Pc5V8g5Yu4oRsF2nnwNCEBqPYLktL456ZR2LMeeC2tELjs74bjWvjrqm77zHZnmVZTYAeytoc",
  "key6": "5ZGtrmYUQe8LY29qqh2e1N5ZRqf1dfMN3WTncFMTotuAa2jePJFuzQpUjLnPCbw8PiDhStujsxz2LRqq7LQAmTqY",
  "key7": "46Bzb6GcZYFyiYADhkCKcL1RbamcBDydeWz8tS8Rjtr5sWz21134pRSw3JsCTTmKsMDJiKvoqrx4QzdVGZHzJQy4",
  "key8": "4N7LreGqtycZaWDAhtbET3J3Zb2HJkzq8SZiW8tGuwg4MoJFTqsNGsKTzdLeLGU4EdZDwJh9KgRm2smX8D3kZc3h",
  "key9": "3oT6WhJBUqtyVNVUem9XUP5RnpdKN9FfYUBD1b3Wag6tHVwrmuuNpQknTMPMDdusKae8kEMXFJkULueV6fiu27f9",
  "key10": "2eKw9gt7XFkTPmkuf6Cw6mtzy9dE2LbaLvWXRyM2Sh38UDzDYPFah7o4qaeJGFFw75DpAsWz8jqC78coQiq5CWzx",
  "key11": "EjxgdR1Ry1CzebLGjkq32eNE9p43jPsMSfPzmDGPCvGXNBHneCKeJhXxDzhhGsfNXP8LRYKicWzv7JuCD8Z9X79",
  "key12": "4tgDdCQRSSomLZ8wj7SMSW6yM48L3sydq18dBmptjAUmSMyT7zxqVXSpY7UrDv781qoGnu9dTur2xwZ5oNf6y5W6",
  "key13": "4z47nYzwULYowDDmTZ3UTR2MP9uWfGxu2V48Tty5rTbwaNiQbnMZRm9usMoBN2L8gpMdNQP6HGTTrZwfyidZiwoM",
  "key14": "2pbSgpEZXKmCKQGvBB74Vor77bkvHFZyRFchRDnqWjs5Up97vRpZFivGZ8ytmNYXLZsrZ9pPxr4XbYUETkmFHbzN",
  "key15": "5MTeXbRBkkp4c7QKnaLoZVfP9U5qfzvq8a8t72bZhnTAr3jBXZBKuGfeCJ7emadr33oGkvPztz7ZwfVb2b6gzJgU",
  "key16": "4H3zaWJz5uLFu3gxs3g5t2PFEpWoPrpkFx9u1MRmn137J9UMUUG4JuSQ9EJzekh7fj75qRJorQ7DTGs41zRHGHa7",
  "key17": "timsTMpVEXER5rw8DbTHSwzGEMDaFNhPd7sWivbrDkB3iqtPerUn8EaQ3anqaC3rRB8RvMsbBqrCCUviNjrgT2n",
  "key18": "4p9LdjzUpVVWsk5DAk7erwRD6utXrd6aNjy9DJKQTGbpJ6bB1Ya5sGSU59SfKC4FsKAWxRkQwWkxrKLJF744JmcV",
  "key19": "2ZB84nHmciRrZqUtjLDZXCNAxYV9oHz9Bf5vrgAHvasgn13sCpzExY4R8hmZsrfTckHqGqv8D1jEAp4KBaQyx7Cr",
  "key20": "3ShAuuZm3ETD5k8hEiJBtU65twwn1JGGYvNKghMSR9ccxJLYjf756pgBN5KPj83bU5dLE5y1rpYP35Q5VcFU83iu",
  "key21": "3wfx2aqops7LN1upahwYEpefnRKzjLWGSmWWtnFgMg7xsP68Yi5KhRWsiMu2TgYixerfZqhwapegMhtMLNZrDMYH",
  "key22": "4haLvysaoqtxnHXXndtqP4CcHaXtAWd3FEWhN6vtUrQqJPPLpYPXGDvDzTVcYhuLGwBdxAcCwcSmf124RJaGLSvm",
  "key23": "bjPthtWqhGq82m9RW1RBimqxm9shyrJuw7FLjReBsLpZeAmfFWA41pJcND9Fxh5A9QoEhqhZxxLpYdjnbkUvuf3",
  "key24": "3Z86pK882Jn34ZGXb4qdhTS1ZwnCazyBqB3y3HfmGiPTYMZy44zh1BDxSvRUBFgPRe7761hNYg68v6AmdKvCkyTL",
  "key25": "2Y3Yb3jMs3oFBXzRrPNE8yAaBQ3WLLBxSvSYqHBoBNM1HEV3xWt2FNNddbBPtR37sxB1GkV2yto5CVRrFygJ4ouq",
  "key26": "2GyJNuCruMCkRQwBoyJGA78QQKKChuYgPd2CK6TZ8K1SViysMK8CrGrxQdqrERcDS4s9zF5qdgLCsPdWpB89FW49",
  "key27": "Gt956wSheJwhWezNe9zgXjJCQzk3MMftVPk69fM97XqCWoq44LTjxEDs1QZTYgZShPKZeMNt2wq1LdLjSQpFquK",
  "key28": "2Cg4pafHGdx5UjZrpAWzw8NMTsmpkL863nXEq88Tzn3VjzCF3cK7MiexhcTgxURKFd4xTumJFWfNVKMc7Zqh9ipv",
  "key29": "ZsPY7rLfaLXmbtx1bRhWL8CqCNXu3KmanBbQv4CoQSqT6LGVxWqMJizffmN6rXn1tyKNuijzFcjoMXWgyVUz7p8",
  "key30": "2BjaG1BARCDrvy2zAgVEJByWBzr2Nzutirt4oU3mEuNg4qM15fiyvSWoYEi6fTiAnWCnPnwF5p5VUtKisv6ZWb59",
  "key31": "2tByPm2sv4Qcu62xRcdaUQEQRisXHGeY53bkHPkqSw8octJnrqC9EwGJueAZvjFehb8DnJvcPRCvidaBtRuD34Jb",
  "key32": "7Pq59R1oac8VyEr64aK9ZUpNFv8eexMwuRdowwUQffsUxfa2FJEmLGzej9MjsqXzAdR7Pkkp67UH44zRazr25ef",
  "key33": "3xJKvTxAfZZX3fqysZZqeYvC5pta3Besvb14yhVsFS8RhUvJkTh2wAKvKCM1mSz5GKvsMp9CqBYVdpUPhtDfu4KH",
  "key34": "5JB1MgUnA21p2XcNkWW58ScKYcM5J6WXXdgYAZqpcdoHEHh1Cfn77oi7qPBcA5n9wz9CNkRgUSHfzbAz9ix343DG",
  "key35": "6yfix4jddZ3bYmsAVcfNArjzwGvEV9Yb5EthqxrRMdDQ5JRnFAX4Wmyq5mkxewnZqx8XDWxtnptqvzhGXWx7VCc",
  "key36": "2C17nS2CsYvV2rcWjobU5N3rz1JwHahqz8U4tJ2rqbMitLsxWAKRPx2w95UthqSLkkmfLquQGbGVeBwoC35mkYSp",
  "key37": "4i5suxxSoY8j5qXB8C8gfK9ZHYQ2UtxF1UKN5G9prav18SAE7jEahVcz5gYaCzaRVYv45CSLKoEq5oCFoFvziLEg",
  "key38": "5vjSefc6W9bH6eJBxfE8PM2NQkfEYjq7qhc9K7gVoBQJtTrwk6PeuwYEaQ4jKR7ShaHfum2qSf5sVhSPXyvpKtip",
  "key39": "WYHhx4E3kThv6rGNGYR77DQvAC73QJcEtoz8oZdwffRCEZSNt9bWLtqCM8RKp2cBpjQKAD4ytfFsxb4ffvvoAs7",
  "key40": "5gAkR2jaDxWMmvKa3JX5zvYDdS6FrN2tvEtUSKTi9LW4E1PneJnh7AREAeCjTbUjMCQbrUhUT5gdvSSKdTFqGekC",
  "key41": "8wdLEGKv2XyLAiBvmMsEqJkj3KtcFr8h66omf72ZwgjD2U6Eb96cGxxDUzLnxhhb8NTEjZbi9S735y9A5pUePW4"
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
