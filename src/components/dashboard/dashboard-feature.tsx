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
    "3N8ejEqcsCs6xrAY46wgF4jDr9LQS8x7dpYAiC55GoZsLFhNi8iZquB5kdA5jETehCwGidUQKetGE1Ffvgtdnewq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45irp8fhH87a9xrbQ6qTqQ4iGxdGsLjyRifS7nrvRr6y4LfVmt8G3BYF3NHcEtEfJBz28q5pqYLXYGuXD1jzdsDP",
  "key1": "2mgSfsQ7wyagWzN5ojQnamNwy2hbwtdcJcQahWcCxcjH9pYgazpjMkgnXw1g5vQ7qDi1Wg1wHtPeVKDEqpfhWJcM",
  "key2": "xvW863ad2fNqKa1MYzHF5iVVqvpzQSMoFBUyi3jsQFssGzYDyw8FEwvSVcpnautYrF4G2Hz7y4V9KWESATCEdZ5",
  "key3": "5qG1PSDosMooGYywTzQzooyFGTk62jpGFVCbhxW1u8Jt7NzpQR9iq4CKNTUwwPSWZQSQ2ugttDD4h7hAozk3jAFA",
  "key4": "2ux1HYUiKa5MwiwG8gFpomjPHV8vEfyLnRSpDV13rPmeXzMp6PWJJPxQbSPLVzxJ6LGsjDrPw8rf4vyfUiGw1C3m",
  "key5": "4eaQd9bkFepgJ3P1m6J6a2Q63dAiHMRGCQ7vrVoZkWKeYcZTPmZ7JNkL2htAFpGLzDxKvbd2aDrs8CD8ewKq8s3Q",
  "key6": "5wJZxGpfKuXwu4hDUW3xQkx2T6otEb6Zk9hmTEo2Re2HeyYPhRxeETaNk3LEU2EEtdGD3MwxNMQpnJPBoaKh47ZL",
  "key7": "4nXcWWJutQ8Kn1pqFBLagFvH7RWUUjP4c1rDwUoR9dezA8kES6mRv4ZVexLXk4Cb8kMcZmXQpxdeL4Rfk2wgq6zE",
  "key8": "5SzxM4ScP44rwk9fJ3NzMdBk5j3SJtNEYQV1LG3KjXhT4xQyuZ6Bwfvr9hD16D4czMoyTMwMqmpPUWmsoDaNq69Q",
  "key9": "36dM7VHad3y95Z1QwcGkadwnscT5FiJeQuzb7Xh7iJqZUboS84G28XmgE7d5XammhfogirpnNZCvddHADJmKtLLk",
  "key10": "576ZbzBkCQCCNQvpFWBqKwqVj7RLJpN95KaCmjnrDWiHWPFTtDWf4KEAZQDZ2orVSZCjb2rDZAa3GmbbKeTyMowf",
  "key11": "nvRejSTq1athf57KANEMJEsSraycQvrCS4bbQ8h57TVtqYAKEuEUpx6MQfjUV2fBZiPaA8F5oaU2S15E1o4E9HT",
  "key12": "p9k9Bzrwqrg8ztx5v44LyeLUKHM83wkmMPkxppEL5jRb1EoxHosn2jajxTvERGqNiJ6C3vhLR6FboefGLqEXbDw",
  "key13": "5g1cx4tVtczbF7B12mpLuDHufnNVxJx1cSoyQUUfgRj88GncpMdzFdKXJXu5aVPhc9MvDrvZKo53cRsDkb6vHwx8",
  "key14": "5Grj1LMqLYRQDhthCqFBZo4wTS2avonyWs1ssPkcXrwHPyBVrMhKCCZYcLcyDVyerxcnM2yAS1ZuBpgzxdvcqL54",
  "key15": "BMCVcbAVUMUE5H1qAgSkfqZ7ZMu6E8CJtMYJMBbbxFbutfiYRmBRmyvjitjJY2wch6EsK3T2TRCe8XM15Eom6Q2",
  "key16": "4htirn2r6GBsbn5Z8rdAjgp4vfBQeDQJ9y21mBJUcQ9xA9XHcB1uBDrWWdwi43cHBJRpRaYdtPdgsc7ES9ZvKJqD",
  "key17": "4RgZ2XcB48Qzq8fWTgfLKHD4g9sYZLCsSMdXvTEoM6H3ZeD6RQ7umJjH2uAdgwnptBH1eeWPF5gYSQ7XDKouT95o",
  "key18": "32VjEFvVzcqF7GUcv3mGL9EVdQ4JaH3o3HbDdHJL1uKjF6rbo7mZ8AAjCX94nQu7KZDVae9UWWmp5A1fiA6UqM8b",
  "key19": "4btEgLu5JDmZd9igB3MhyrNyRiBHGzo8y1myceULHbcg22kDeb1sFcfRanK5Um7YN73fgzpeVu5BX2DTxrCLwVwH",
  "key20": "2v348Ju11AKNYeCniVWst4DwQfnQzBuUjWBWvYQGRtDN3oskYcUHgcy3ecbes74aYzi6CEsA1EQ79r4w9LDRnNqc",
  "key21": "3rmfdHdHnMko5sQB9CFDqhf5WrQKBokVc7m6oq22ssynShBC9DG2BaoGwuZ6Ks85feJHDz2hu796YS1Arw6GmA5B",
  "key22": "3ibpxukqAZXQBmuxKjWs6pUyHTCFX7h6rRQVfaNpr1MTEp3urABwmLwQpTSriDxwPwy6Qop6KQJSQURSFR7cQPSS",
  "key23": "YzMKsukPcbGhNKotLA5AFx43TSRF6qfSp3dWZXyR3BJadSvEKHwbcm875JtGcXC4Sgc6uSoeH8vWf3RfJpwg3ZY",
  "key24": "2Sy5Ppw2mo4QUmYVPhBrTL6wSxBe9q2F5ijCY4tLQPJGWdezHfWepX1tqYivMFWtPJAK2esc7JxFQgHSqvRR3FYM",
  "key25": "3x74Ax7Wbppu72HsSxtf2pfYaVnrMmxz7kbUibbPMQrNVsLSL396P1VsW8Mczf3Qd39M6GZqKZbWqw4sn7GfTX5b",
  "key26": "2CC4EHa9UKvpzFUFXx7dTGADbonb6mzHMfQcJnRmN8iwKJx8KWnFrN74Yfu4kKu3G4dMXU4nhKwxBWCAG7GAmgBG",
  "key27": "pkVN8sMoFacgHo8jN3s7X9KzNhrpFpw266m48XBS1mD7Y6McVWLDL8NZsaPnikXJhxNJqKvAcKdV9JGwvDHpBWh",
  "key28": "5YQDttpM6dFnHhWFL5jZP1ApWkkn3tEA7QcY4WSgUP4g8Exyac5TgpyiXeCpjjiCgDHtnr7UyC3aVuNWFYsCqtch",
  "key29": "3pPUumr6GrHuWNbqG9erEstfhb2L7sc1VQbpQ4dUXkvbBriQWXyTemv4oVZYnQD585NZMV6pSR6nD1vmfigkyuJk",
  "key30": "3LWgDtszgZv5MGFp9PgZckKcf5VGoqZmKS6N1VNC3BSMxYXec5DAGf6aPCvKKSU2K5HsDWkNksxrEgERkpey5tD7",
  "key31": "uqo3YB2NPWkVtujMPYiBPkaLQqeCcF9vBvmc848DG6BUz39L75ECgNdqWwXHVd7MhVvMhLHDq6ZnfQhxKnBcZuA",
  "key32": "5wBptYYD8aR3PAuaDA1ReSZCL7CVMToZXjza8gaMPwiSv8kbXmdbiXM2ZzUU7DHcNM4rK2wY79YMXpNdAk7Rar4D",
  "key33": "4bPYJnMXzqZsw9AJaFbxQcoxBLL6HFvY6dKAb43FxjxRGWJ9VXrqsrKTBrqq6vQAkyJrB2CJ2cfSfXE83u2CYACq",
  "key34": "5YkwULwR8nZJRamFeSK6mx5cR7Wcg1vrN1VUYRhbiVopfARnbzcoK6ShyCPFDpvKXwq4BSe6XxgXoTWWkZFeL6b8"
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
