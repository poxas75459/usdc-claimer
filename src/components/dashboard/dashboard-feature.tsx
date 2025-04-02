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
    "5tXC7v8ReM6vJbgs6YADP6PzfJodUvngQpxuYXxKLVGzDb8PRmcjNEbMQdvVo3x3JS8rCN6Zg8p1iheubuZXyRz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGe9xDTY9nJ2QiRUUbcZubuXxuJDb1Aw9jWMcwZZ8JwK5RnNU85B3JDbxGsfd5ARunNbKbbxhzVntfotwovmoHk",
  "key1": "4dGX1ukKAafKTrAUPwaf6xWPUVRpmkfsoYujqvNWQ8m9NxTveikkcGVugfQAMzvbCupy1FLgqo8QYzpCfT9CnnzU",
  "key2": "stgP8WLkGPC3WgRXy4WQHh44nocZELZjr1rZR1LJgwoENvVVR1xUZtuXq1f3DUSeJjwpWExB8BJJiZZGD11sirf",
  "key3": "4MAkTSbsjz2vzoALu7fV8mzFaUs93nm3FaFgzSVmyCZBUbp3ZGvHn6XzHSbDNMwSVxxnZs7wnbQFeumWeqku5DHW",
  "key4": "vtTYRU5vL1j93WLTW5ojynSCRj4hQxsWxdDN1qpztyaCKANFRYwsMT8Qd6mXABxwGLeCeQ7njFsbwrRnBJCUZeA",
  "key5": "2uUcfFCwHr8mSztNoNU5RvYoa6rVLqK5NR1VQNHVQdY2hNZJY1ebUrBD96omep4r9q18LG1DLzuSd1YfVMYMyEXL",
  "key6": "5eqY58c9GcGY6Ui6dCnf1L894LhCmk4keMQgLYiQ1RZZBR7xmTCcE78LDJ4FVFLU5a3ZsioM1xT9mA4KozfmGwGJ",
  "key7": "46eGtctLa3TzYpYjxsGtD6pQt5cX1tWCSaVK3MCQZm3zLWf3kJxV9Bb25yMmrtLimdJ9CEYaV64diDp4gMjrrZXM",
  "key8": "4WRVknryhD1zhSwCVHviMzNnGDzsGBp4pjYndWdEgDU4y97ed6YkUbLKc25BNaCJxprvBhQcaJuq5K4WHppfX6sy",
  "key9": "5DBvqqByiuwz4AmsvanRgkE5E3GkFYjduN2oFUtRERpctdTWHDVb3inDf1pJMLKJ73aqRWM2iirmxvb9a99pSaNC",
  "key10": "4VM2FZvXmXhgJ1A37rab1pTMCsQ4kWuTJ6HXmoBZFhRgqbue3Rt6nYLYXxvXVcjqEcFYjgchokoytJiXXynKG7Xv",
  "key11": "2GD4fMwsAdg8NHp87b1y8WH2A9P1AdA7ysbo2vgWFZtAAwEgRLkV3Bg5hxXEGRm9546GavogSwK9ugKrczwdha5g",
  "key12": "3ZNEWPy6oXnhE1uErA3tGDhuxSt5PP3BtzmJZYoUiuQELtAQEWwdAvS4oZ4BYth2UPrpduim5TmqscdUGS2CVaaG",
  "key13": "3gmxTxSNr7qDVDbRw3NYj4Rm8m4L8at3JKzfW6zXozJSzzNuWgNf6HsYC3UpuNkaD7h7DMM963WpBTiUPbV1ZYNK",
  "key14": "5uBQ9fyng9BLAF2dXnnVmyKrvcuVE1LzBNDUBjr21CDkDrPyFRVQec2XUk3xVqCDsezCcSjbYkPPXZKvZWR3AHvg",
  "key15": "eHppjP2r9LDpduHaYa6wkuRaL1Nr7xgyhVNfQe4k1GKJKmFkq5PvYEwoVqNzdKdUWFc1GDdSRcq5GGbewSWwZ5z",
  "key16": "4yzXFLt59A8EDK5yoLHhCVYbD8VUoNRExc1cSKzLM9tYpmeYrSXUZw9fXjrT81vS5pcoGAA5viGUqsJwiaYA4zsZ",
  "key17": "2UKfY18y3UzHSpBDu5Qtwu5vyDAUTXLAu3WD1SzvNsBntsrFFQpsAgh4Z31KLXwewjF6F5KGE7rpU1RVb3SkLpwo",
  "key18": "4ahX3jW1DeF2xZMEj6FgsuuLRh49USerzLh4bWWhcj8dwGh87mGTgYU4BtMhaqJMovv9oRXGSmsKLAgmhvys4Kaq",
  "key19": "2c4snxbb8B27LQjg8rwvVVPnycSrBorp9eUB37TrB64MXKzU6RtXULhQQ4t8pK1n2tmeBtM9xRzuJYkAhNS2rq8U",
  "key20": "38MMYfQgrEkoEQWFXvRaRtGyzurxmraa555qv6x9cne9PxB6dEHpwG8UycfZNAHc59KAAQwyBXp8CaBz1Vn8FmYJ",
  "key21": "rP8t3hzqZLRoM32bUx9SDXasM8UBHg7NVH1jCyQAB6m2qYUjyyZeMHpf6YTmA8d52BsFs7QRxxKY97BtBsm7Fzo",
  "key22": "5yXgpqvcSNCfq8pt5WBT4Vm7uDu7UUMSyYSvbqT35tLVcnVZ5vYTwfiNQKfoQjqJAfAHATyTJmpdUMmywGLyVZEE",
  "key23": "4LBJAvRju9mouBbVCvu27PZD1Scp5TYYSXiqQEkYe1rZiyRVzzvkWsbhFwAgzvhCuWgVVrKKbt6YxEQGR9nkM4Lg",
  "key24": "7XrgWtNrxew44hV6bgCyEse7VFAS4L9vy3PtvLkNjjovNvTRVZ7z9id65ifdJEcN93iqz82gpiKg9V5HR2Qgj6r",
  "key25": "3TyEQeH36KxhNFfrFAMg4gvfbczAZKmj3zyMZGGrhY8uNJDTMoA9Z5AaJHAmdDatV1S6dTkLyoX7GJCVjhjQ2its",
  "key26": "56SgZts3KeRUbF3kHZkjD8rSk5LXYG78TGhSk74VHKTfdwYHYZVFMSc39JmkxqMPk44XhHpkzLCAk9XqaH7g381P",
  "key27": "5H1jawdAE9m1dnFbVjPnPy7YMQY5Hkf72RCEZHJmxDUkdmKcJz6Va6Woy2QcGQqfW8DPrqFbqmCr2Ya4d8v7Xbxq",
  "key28": "3ntqUck9gsnK4M4N3yx6VMFYZjXtzKQk6bZMVLex66pEqNnQEg8fFGQX7L5oEBstXhuVMtvjSVQ1AbKztXwcGpLE",
  "key29": "3ctm2j6onkRpA6oiCT6Z3uepHawBdtsuLGwijnqoPAZUu7YVY3K1FgzJaXczQDEG64mMPBenEH7e3FVMDG8o1bzv",
  "key30": "3cB2XJARwNHM2iVS3StrmMaJh4NWUzXmP92AdycuTuxTKoHx6jUzuuBxrgDLdMt1uQuRYf3HPH7ZSrQ9i3bk2F96",
  "key31": "2u3WCstEAj8SixzynaXcgfCSsBSGY2GgYvSsiu1jnBL8mQdWpXbjvHKmksfWDNPYaq5oGuDK3ZzfsVC7anVh1Hf6",
  "key32": "2GC5gzYjv3V1aTSw6262EJRvVQ15Hupa5NrNAG2SBn1jqDfcfJGL1Kqzj78uvxhaRGVwgWnh9YFAzaVfZWe7VufH",
  "key33": "3oGoHtRvMvUPAFARE5gU6JvWbfYVzS2gqM8Yb4fSbmbGxTUJB5boSS3j8hW6vbM3qFQq2bDXuZSrwDtgvXAu5YsR",
  "key34": "4UnyQokhWWcxecy8FRTvouFFdG3arSnitmtpn25UEuDYAqHQjzm7e9SkQrF5p4HoZvS16FGVJE4i7Y1mWH6q5Wzw",
  "key35": "4VF9ZnZtvBam41MVucM1ferVdMgyngLQCeVUJZ9u9HGYJm1s6so8ugwsJrHsdfAqYnkNeVzTx2t1SzVzxYg31uKb",
  "key36": "4yLvjDGWJn54eCEbxrEhVcE9PgkSQHvBqaN78gQZwRAN5Tq81NRggVK1pK1T6PmnEJEZN3m4691dS4jiyj4CUrW2",
  "key37": "3RuXnn8RCDBQEQVY9cavuVuQLGMuGp8rKCaWbNjJzivk7KDnDaRHVZbjEQAUs8SPvAYyL6Gum88DugG7T1EBtZ62",
  "key38": "4fnMaZ2dyBGfB4NWyv1GCvgjRKXNmX1gbZ2jEwof7GxKqbsUKCiMJj2kaUXqxtw7LbCqaXEYJ6tvshYNy611ELin",
  "key39": "hTwWBhHKq1fLi11HT1e1UELCrw9UMBBpAdLtgje2DxdFrf9P1NxBcNxh4ZrmatunsN1YknSrhm492TEVT6iuWNc",
  "key40": "5F7oy4HrzLmfKKZshtR266RqxoBG8KVoZZUaxzidtswqyHFykAsAYexSK4pr1oirgcnWTy4j7Y5PTzoa9NErfLPc",
  "key41": "p7is1ifJVxD9WXSxo2t6KjwA8ei3JT5b5RkXAorU6pFpuuTVAiR8WqN3BBKMePZBpcuVM4RfHgJr4vQyCBS2vq1"
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
