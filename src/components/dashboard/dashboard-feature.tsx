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
    "4QBfxyUXHzy7AfgjvfE8mmpDGWWVb5eV7MUwnvY2BY6hY76WvMpUCmbpUDqpJHgzvBXZVvm6igpZ5cGxJZePUKmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHnCX6AzVPqCLkzterGkSmSgMxHHbknJ3HgHa2P7X1Auuj4ucmTo6XqaCoJiX3YyTNB7GpfeKi6X24JUmi2aqLJ",
  "key1": "4JW5MUnB3Xv9D6BFNKT9cQdC78kssFRFgHJF8kTnAvGdNHGbKAHbfCrfKYH5ZifftJsDrorjeKYSThQ6pV4XND3E",
  "key2": "5pR88koLJ3yJuScSBTcNo676DxAC814D8q5mapvedSixVFLkZo8uTyAurHR1mLZ6Cm9MGHo9gPneqt23ruA77sQb",
  "key3": "jeGJ3PsdExp1Mr3UrxmNWDTrJhNLxhZeUzzt7ZaGGE7Z2S8Nqtc9QSH9ihYesJHZEhUr7NiutxCjpfdDGGX4HF8",
  "key4": "42Z4nL28Wxg8ehnvFNTjLjappi3noQhrNheDF4s6T4KPdanYMMAWzY5LJLF1JMF4zod4NfNPZQ3rMr1Y6GN1rbyT",
  "key5": "5ixXhscJ3oDeXtGx9eF13czDoF6CE11sVVDhg6BrAsKWCLAaXF3Ah1VwwTgGPA6X8mXbGmSEm9iaXwCs57qG4Fdm",
  "key6": "26L6zRiCQBjn58azQRw4vV1QS4f3R8oBq5DgmZHHhwzS236hd63g2AhmwvXGXGLTjWnEmpB35T7qYYxwGwZwtXt7",
  "key7": "CJBiKejTBrpaxzXSt414p2CrMy4zk9TQaKZ6MebJqVsKxMTAgTHksTtfVuwGy4m8VCW5xjiZ2RSkLzAAQZgM1TE",
  "key8": "2YQs6qJNJGWdF16J3czEQomd57jWp162C4Fq46QRHdJfBX3equQJHdVKJ7PjCMRx8HQEgy8ARgKBQ3HibBTwrYiP",
  "key9": "4GtTXeGM62ge7BPwmbG1UXKHNTMRgJkx5gzTH6xy5m2kmEqoDHYkLb8GLBNahEMEQ6wqQMpucrQ1dTjKZdRffhSH",
  "key10": "Cw2QW8Tp4DysyvbyETBaoixed6E1KP6LREiKeFhDqyEAdPQ3TfVyQvbQ5psDETCACJr5oX6TJpN8XJ6c6riC6Xp",
  "key11": "5CqxhS8jDw28Lrdb5QsDffUVdRL46K4sXWda1sPk4qWhVLcr4iNEWNWptvCQ9j9BG3EkafrSxTKroqCjR7WguMC2",
  "key12": "4Re9waihD4zJY7wFu1iFWLtRKct5S8EzdpucSsMLY9gvFnxi2BGPEbtPXtCRmH16em6ZiCTUA6j1YfGcwzKuQTvh",
  "key13": "hRWc969rPRWvWMok5qa6roComzzmEHuTF2bgUwBETBVzqaCC9zEGxcYEhXPbF186XMhd8nq7avwxEry3AmLXXYA",
  "key14": "5VksvwcmqSyYKRrL2Qn9EyZ8VEy4AHX4ziqdQK345u7j2UBasem52kD5dEjVcnJAbKqfLYWPmVnuetPXjzTgBTJU",
  "key15": "5TPNnhduPRu6YL13nTirB4k5sXM4J95zwB3BZ7S7owr5xKrrQME8Sjzsf1uLdeSLGvn7zNqXYfzgjD5oy6aiM3Z2",
  "key16": "3GmjhY4HrtNyXhKRDwrgKnRVqojX7Kj9ajeAQn4bK1e6UW3uWkuaAtLzXRXRmNmjwtnvrkCmoqBqxjSrJKjGWF2K",
  "key17": "57m4KsLQDbxWNez7U5CznZjQ3i54146pr7ZoypWkijWH1dZLCQ2zijYhf9M3dZ8gPGQDEV5TuDRBnvcQt8y5MhC8",
  "key18": "4aiXWMSbLQKqLBW6TALqYzMjuWX3UtiWuJ1dGkzcgDhVyTV9SgLFXFSwuCanpTqS7pgsxzHWE5qyxpXasvE9WBuj",
  "key19": "5Jgp33AsWrUU5fVXLGSj74S4ai3YuGjZJDLyD2xZjbiNFUyjWWuzceTJdzYeCt2gJnrkwem1S1UYFjM3xnNnBGgY",
  "key20": "54sp2fYGiVyrK4hDvppPTSc8NxyhseNjS3qkzJD4AMkSi9aKVHgLXm8xPZLzzoLzMJxqc6oPzoobBbVDiP5Cu8eM",
  "key21": "4t4qfm7TCHJmjZ5wKr8x8dZZ3WwntpZFYh3hvYWxw18jrg5AD7XDs3mppTwokRveZDrurgBroDSQdJw5AumY5osN",
  "key22": "39WsMuUCzAMUy4iU9BjsYa8VriNEUDZeFFjVUSyC7s1p4YXeMyGNnG3R2LcAVvAPxSUfT4LnwNsFY5b2ws7ioYM7",
  "key23": "3Y69rgAWrDQZqJ2bhKrd44DkM1nB88gejzJS6SCPG4c6vCc9TaXAPCjzewErfoqrSZoMbMTtQhT8fFWoBizm8SJv",
  "key24": "5fK6ofAJjTe41pe8oC79HQX1xEj7AZhaCsg2FXYNcdnor6cYzFWPZDyiy2RDb5tykkLiGvd6G2xhq1DBVsyQgCwE",
  "key25": "f2uzBZLA98D3jX3pqtQYFrZ3FMUC9E7G9MZ7KwLVnXBoyWEhzagmSx6UzgQApz74Ms1Jo3yXx4fSFbPKPKLktPD",
  "key26": "4uxeQk1bEBHkASVC4bLbKUbEGauQLnBpTEXu4UUawTFBsVifGMQRhht9wZm5FSZkqsL5EaKEkhqLDgi6QWRzMsE5",
  "key27": "4U9hvTcv1ddVsukyBzHZNPTkByF8vyuLCgpmxeB95RBpe83JCu2DMeUt2NJGNwYAXoXDWQKHnaeFBeSmq8zZTtEX",
  "key28": "2Xoryytc5tm1PNfBmPFFJVqNhjX4K6iZKpZuks71ahxNaGxBVKxdNNgMEahTN5gGPfuwJTbw82mN53T8weu7Mv5o",
  "key29": "4XterYSaJL621Ju4ikvKqKiCHzjmKbwFS93aWXqBs4vG3uEwWYfGfNiQRGG6YBckra1n8wWBjP68bsmi15YiWn4c",
  "key30": "7aFzWDC1W1ZkG6ZcYWzZJ2R7wUBbA64BGgXGqSLQju7EKcVTLdAcr8i2PmGiNvi1WQdiwC4RshKrLeR1X2n6Fpb",
  "key31": "2zKRabPDATNWhRpY6uhezGsLKCJ4zQS1b3ntsKZvRi9L1TSgqMYSyQ9s8mthsNJHoLE66Ytj8Q7nSfMXgXytRyRr",
  "key32": "3bB3hiHKtaoYfLDyH5tcpUthqGmDPSfD7nf6egHNUYtX6KiuqZLfG69zbMszda63LagjuuVgThVbs2t6AfzsJnRy",
  "key33": "55kxjCDuHxcrxbuHqy8bzfQX39EZpNw3BSXdbgjS2ZLGgiFr38vrQPqVjms9DszopLpu51gCgLJBnyCxTcLmRej9",
  "key34": "3AYtFAYA8BECX8wtW9E9Hi9FDCC3dVdpppiNGKWqouQv2PGzKGavnmzus8NGwYnSu6ExQKrN7EKjxminFdUBwFSi",
  "key35": "3AdbZc1tjEeUWnAXFjuaEWe6a6bS2gAQmgHMeYCJo2VtfREW3bhrE1Cg9iwyfsWNLATWeWV36Yb6tskBzn639T1b",
  "key36": "4Vo9aYdaAG1t8MDRJzwgx2NNLe7xYgXCWYNLnXezprahzhZFpNLQDoecquDCxiHnwh3ZHXmH5WVNwHAZL84HeVvU",
  "key37": "4LyaPMaazDcBhP7XcJQF37YFLFgqaeHnaq27FS2uMnLPfeEEnLaBrRoYoeVLRfYZruTa49NjwK7X7RQV57YhYioM",
  "key38": "4HQjHyQS6oUcCMFJyVpQrLvefjmrfYmGa2oNGRcsaJhe8NTjwwU8vYA7NHB9ckPh6gTRKmLHXqKxfGjqT9jobmp7",
  "key39": "pvr8DdqCvfDifLJzXpdw4EbE1k7wogXCxq8QgGa1vWsanNFBV1unsB22gN2z4FsaGVtGF2fFm4THRrvtzTYTtMX",
  "key40": "4RQoTENpMFgxWcGzwLRS2w8jv77dWwRa1jLn7JCa6992DvSxXMxRK9VhSx1wDSzLzC84Dp2TAfe8u4rHaCgqaJ73",
  "key41": "3EqsX72s7rNMtsAnwr4jDkkiMZ9SBGmrzNriGjtNzv295EVUMauM8LLc73XBmyArkgoyb1bupH4jBLggcBVL5Tyy",
  "key42": "NLavujudiowGnGcZ52u5E4RAjpmFLK3JwB1WixbH1touD13LxoA97m65KdMFywrv5SZyBLSrvRKq5sAnMkUkdPe",
  "key43": "4Q9buRH8YqDJ8pFoy1tWK5PSvYJ7DaGpmQdicT3dk6prL5bU1SanqP1VeHDVQyoVPae4iHF982y7jjx3jCY7b3Ez",
  "key44": "5h4qwNZ8ujN1EpCmFRhk1uCPXHGbys4oWrqS881ZtvPkeBnng9pGp7sfBwubGZxhXr6cNXHpJXCgZVsMm6uiJXxd",
  "key45": "45ns39oK3i31zu8FDUBDdbqT1KtuHT5qV3eU9cqmF1Md26vW1puChxvYrDZP6tjzBPXNaR4j98XDp8c7Wvyduv9X",
  "key46": "3oD57QzQfpgctjuGSLgBcqoFMbQbwnM1sdJn1zayhECJfVystNUrs6osfccEVyWX8RRqjpDY59GSEEUvUVsvw9TY"
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
