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
    "21n8wXBprm4TMpkh7Vdaco2iGtXaqDi3rpSBTXVwtM4Cb51MdMTeQt7gW8CWYzfNCVkhtscPuPrdUNSrJoBcMMYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9ZCTfSKo4qk9h8Q8UKmEtNMxrWKCnGJrXUUGzhjtJpmMVmr5BFfdfHVy2u9RcU1EKhJKrywsGCx9ZvU4P1gGZb",
  "key1": "a3ixJPB6VKsfXPfZxNVhkycy4S3XmvNih59GdB4tQY9sd3NutxtJhDWM5B6GxRGEJQXopXSHndrXUCoA3LRQaQq",
  "key2": "2ng31gFNn7jf8jyYWS9eqJfLZPRyVXuKEsbmAbKtgu18KLv2QW9TL8uKM7ZJh7nhmVnDNPkbE5R3g4nyXQJzyjUM",
  "key3": "4Sut1XkBTxpEPqgmyiG2SCFSQGdiLTrrDCs9VQc4BisKTpxDRgfTeMazkvaYQTV94AKFAbScE6KvEGvMKL8dbfW6",
  "key4": "2eaM7Uix2LPVfcUwEnSmichbxr8nu2HctQN4623qUSxfRZRocMRgutJY8zruE5W9rZn2nJuWv1HFgrntj4SPYhmY",
  "key5": "5qD6f8pqMcrJU9Dz2r5tQSmLHTnbGtDyPqZvU3R1TTQLas6A8iiKJqeiNZTbFdDjFdsmymnqyYigAzQKgLZXmeME",
  "key6": "67Qmd4VVRoM5CCJVs6VjCi3ZAiGisktjSQYh2zQUdRFFD1RK9rxYMwu47BzrzteuauT5TkY7NLxfbFivx4eS9QDm",
  "key7": "4tKC4kr8gbLT4zbGHdgaVmFumkpA2uGsMmdvtkjcYU6QgvPhRonbKvnPpWZw9eVeB1JALCdXai9zyUw95rdamXsH",
  "key8": "5p52erYJqgPbVG1hiZtBqUo4JcjPPDjLJT7SWGomEMWoPq1Ht7hptDXTKtBYV7RF9MJNckJM8oammB1uTpv5rP61",
  "key9": "3kixXDEQ39jXfRTcCbVTZVigx7b6ZJJBimTVoYUmhuXj9SWTfwsEY1AB3ZtGr9eCuetLNejSkB6BKoqtF62ci6dT",
  "key10": "3gQr8FcSGrdpUEzNb8uivfx6KjrLtqZZk34eWE2pjZzXArjmbnEAaVBbkAucpnNT1DHxgebkVKKfae8RGaA6vmpJ",
  "key11": "5TXWKKPp72XmZeMM81Rr9RtvcnrKExQdroUHaFwAn4CC4YhysPUs8fk5Jvb56DvyzvP4Bf68PGy6pNEZxVA3qfeW",
  "key12": "3F89pMGcP6jd3JLgKBdPC7a8v9ZWCZda4bU7UwLY6UkicegwBenKCTUQYx78QdnApJisqEU4j7LcqDFUG7rhyFJK",
  "key13": "2EjyRH4eLtK4zSpjVnx2vrVmzgY5cMurvQdwUcM1t5GFfhGH1wd2JjRcX3i6Hwa48XTisNxbXdWdEAQqsHc6qD6k",
  "key14": "5BZfb3MPuvzCtKnxt5wKgaSoaG7P1st7qcyqtVSdmfwmzU2zKBm1rjFtKyjmrYo8s5JEBQQfsfwpzaojARd9QjDC",
  "key15": "5o5FGSxWb8kJBGTWBgXbQkf71pbTeffXSymtxbAwxoPrv8fviTH3KiTwsj53awCgEEjPzLa19iQKW77SDnz3JjxT",
  "key16": "49QEjuQjsab1VAQHz8aW3Dzcne53RAE2bKYtRUevfKHNzo9jyfUSx7Q67EqsMe4v2zTF53BByRPxbpbp8fM5aJ78",
  "key17": "4rwEtvNCL6qBcz5pZAvyyiSYzDECUT4HGww4nibjrJfMUkVVtQVMmdgE2wXe4SkddUGBCwEx9koXrHV3fJxs8bwm",
  "key18": "5x1PEt661CcMbn95gJhcYdU6Lr1Sm5iey3PupXGJUcuk7LJVGT3QD51imsxcnpQWimA1M7kJJDroR8jC7TMofCGW",
  "key19": "5ippi1WbS1cCwxCN2qLHM5hLg5vQ6wqfEGhVdmKEdFMv9NXRzphuTqGSQiEhYy8ZUZPvNreXAZP1zEZed575cRNa",
  "key20": "4gUjpzLv8pBRtZmnzpHs3nvZtHKERmfRasxK1LgPTsvN2yWKHNn94JwnnMfPuympzuCemv15JtYHuvPegvxfGbPG",
  "key21": "2dh7SndcF8z41MRCor1E4euWmDBdfvaYgF7jjAQDEU2rPLHEcibu5HKUuM1Hh19ZqovqAeeNTkbznySNZhd5aoJs",
  "key22": "sw4rU9h5ow6t6vuJuWUJcNuPzrEgSwqPuA7YQVwCZHhzRNTHPTYqGuNNBWTJgvRm9HKRh9C6YDS5A6gnw8sFrWx",
  "key23": "4deSirhiRPZVKy2YFqcxu4BKyuoNaPHVVRbN1nsP8hcR9rToiLAsn2JDzZtU4NnDTQz8hBqYye711NLkGvwcYVm7",
  "key24": "2umBCV1EUHPjH6X4d3x1ZsUpFXayMWgffZ2vdep1sv1DepSHCFPWX6j2uznb8MYfScah5JnP8CjRFXq8hkzJJ7xz",
  "key25": "4yd34yDU59CtuFhb7dgk4g6qqXc5i7g4v3kA3wjgfW4vz7t8ag2MtNkSRUrUjXKSd9u4h5wHEJbyJZ75xzQu93Bz",
  "key26": "3tD2y9E4hF4qs9zWxfQoifxBsGu94bMUHFEuTDWfkWS3TiLK2Q795FE6BqLMxJffbDMF75fxkg5YJn7j5B6mmrF7",
  "key27": "trb1FS1hC4K2ggGPTuFQ6DyEosWaUYGF6fwJmkZmTa7PxrDqjKish5ayZGVozmJpcRgSEgQuW8RuVeHhzZ3XUHp",
  "key28": "3wJTYp8QwHZPmNW6ARUqRXKTf7aAt5v2MCYzWSWQQa9xj42PfcmY9ATZgUxpCyJvpKgTQoeKbnrbcVJM4NbqCEdG",
  "key29": "4iERRcromxRcP8TvaGpjj9A7JhyZH7xGRoC2yn1KxdxjzSswiMDNDPGhjAeMG7tA8LAWogk6m68BZP57z9gnUMfM",
  "key30": "3e7FhveuG7M7efuBsophQjpnSQMkUwAnSHxe9XkwkGp7Frs224GHsXcVRUBQzG8ssM5Nt2VM4z34PCJg1Wo4eBqb",
  "key31": "2FnBip75UU7rwrR4vAy42g2fbohkUj6C8waWHAZo7grgBoJHxuGkVx6GKNc5gUYvxWYQ3uUyYnVWzzBkomHkCrP7",
  "key32": "4fDjnnB5WFDjdgbM6h9v2nVXKorfKCSXiQKQx1cYgWByBBqdGfKjno7cUPqmZfLBk2y9kCv3BDw7rJDUZwFZWnHL",
  "key33": "FPyJXVQZMAAJ1GADxuGw5ku7Fh7A9ezHt7KyAtFvvN2xY5zZCKChRpTFe5Kk1dm4ip4SaFmeu1fD1M7W6u5Bet6",
  "key34": "51rdaCA6i2Qua5t223cWfgiuYVD4qJJC6BDvuq6gHnKdZZcLeQra9maMvnoqjMP4sUsxSnsq8RfWFVrfB38Mc3rC",
  "key35": "5taSNe1YfehzpB15KDXRYM2w68nX6pmUq8RAb294zEyYLjt1usZeajDtVt9Fc8opbGkZ5ECxV2nzbjGhakHz5u5R",
  "key36": "3RRaLpxprWNU8mCCHjJhaGQYERyas9jcod2XYTAfVHrKmLNCftRXD8B68w9ULoDF9kJCnjnsgQ6KKHhjzjiaTqDy",
  "key37": "ad1RXKH5CS2VpcYNChzKmVKgewA7Dt4A9ssNTj1hZhgycfpZdqaB5vT4YkAhDfFrB4Fvvz7rbC5URATXTHTmv1P",
  "key38": "5ZPpowNZhUXX2mwiJHG539MvxxP7yAE1jpUUNke1HMkfvAFLfgv6HfjoqWq8FwcQbEnb8TsMyDjK1FpmnHq1GJ5j",
  "key39": "exqJ3Njd6wVN7kF7uR8PSU8wdP4T5X6V6GET725Sgh8QAeC9mkPL5bhzHY7DZMzL17a9GTo1LtLdAKFCZhCWgdw",
  "key40": "4TrDfGvd5XDZFxkugxFP39TgFSbzxyZ3KhvPge7mcGq4oHxCqEpZ87yLr8EVYP6rEP5hrEqx96LR6vkXN6S3UbbJ",
  "key41": "4vpckjNXG5NSWqPCrXkkwT66xafTi4rByv4dJwwwzVyj6Q9KsRqvvYV7L4Wpp3CtZsRUYzRsUKi5ZRokR7w8cX4q",
  "key42": "63jNGLeBH8oxL5k3PPt9rQu3ZuZgzQZV87RSq95thCVjPYXAynaMiZdeQJhLdiLLgbETFRuiVzFn9jHF2RhFLfWm",
  "key43": "4DmpoNxJdbzjEv66gXDi9GkVzHCeyMmMrUwCtJtD8CKQfJQixpX8VcR1daue2f4pKzEwNqHwXr5MVfB9hUBFE3oZ",
  "key44": "2kHcb78Bx9JovhnjqNSrEwJrFjHcNSUHwsvCposzowqsbyEgtWLBznPzuNC9GARs4NRqx7nMtiT4EmEMARosmybZ",
  "key45": "2xZspW9vAaScXR5ZERVg7ULiQsqc82mpyrLm4Tu44pFUNhp2LNarB3E27Lg7ykk2ktLmACACN38EmgMs9gaSC1yZ",
  "key46": "moDq14e5hbUXyCVhytaYjSzSZ5BaC87BtTCGeRkjxfJPZ9ePLqyLo7Rp8pQSS5hNJXjvn2jv8LCWfV6qGUFhugh",
  "key47": "54on7Kxy4raZd3euSchVVFeKjzgDAixW12uZM1aZpvqhvsZtuZD98N4ywjbin3M7PELxdpA6SWdALKP6v5vjDvKT"
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
