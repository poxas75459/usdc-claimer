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
    "555PTwyBvvsGmqJdDPrTTiEk1pdDEsxteQMB7HSmur35QDidRigJLSit8QuEq3oQmwXXAxNKbP2dv2BCH4BqyFDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQUiMfzV1kDJY8JdsHCXiThs8jvwFKTH7UASePBZtYYMKXJoMuowChzG3jw4aLKAHNFjUn8puzqYWdnQvY59Jje",
  "key1": "UQjxgbUXXmU45yCQumaTqp3rH5XjxWupVjPEoKynLBgbsVuXa4Aq3MyMmVKkCaKioNY7s9VmS5tVHKQMm7jMfQm",
  "key2": "3WDnnTdEQAY27XXtoDjtoocaYEkiry6GHSjJqxzuNS8mAwL4jDAbPtgJFqwNeTS3qFRw7PLrxnrZhJTyh7gFSVPV",
  "key3": "4TjRUiWtAtCdAoKVqLWj7MGbaEC4jM3Zeo1AzCT9DNeXViDHMTtUtfwqawrxyBJ5ozvm7qpWJNSpgDCY6h9ZiZiA",
  "key4": "js96d23J9rq127qF1YDERu2LzcWjWveKAbeUTte29fa8fJKcHJEoURRZDZ2WQ99rAMvkVzdcK3mtN85cRX7AiD6",
  "key5": "5rE69tQazhJqB1DrBUeukV8yHzZsJybDaF5CjXgjuuQhSNMjrGyZcBad5YMEHqe2pZdMVKAcePFKG6DmXKCXbqbJ",
  "key6": "3RHrzZzWcVPAQAyUPi3HvVwSAfCa1nYQ94derBzAnRFT4Vn5t4ZXBTBE1fZhbk8G6uSGpGxVdjxAU8wXcAXR5uDU",
  "key7": "pvEvvcCEpd58GmgbE8ToahC88p9EMffoppsqnfwfvTyj9Bx1DCqWtRRqi41mk6LCjxL1cqZnRapPKmTGzQGDxuo",
  "key8": "4N5TrobQ4g9QDVU5kCX737fMfZr68NahPy36CRLvYgYHA5d9memGcnNKF3VWpUDXF39qzfP7b3rTaAiDgcGBkL5F",
  "key9": "7tvyCA2ueLeLiLg9GPYwv9CUg4qFsxeMMDSTPfw8n8xZzmMk7ixeB3uLZtkhkzjWWpxRCMnEhSBEswKwa4T2UED",
  "key10": "5PN2qwYHhnCJy3bdvDuAaCp3sEZ86xrF3ayRiJ65VD2EfzcatpNNhKZ9wcye4NmhSXpgBvfVEmGDVo6jPE2j1NAM",
  "key11": "3gzLVgnSFq2FWSJkvRg4HdRvTGMaJKakfwVJywZXWTEWBz5TWgRhtsRSmMjPcJCAzXVjNHFC9EJxrVxoaLQ3UAyD",
  "key12": "5CdUA6U3NJbRDdgEqM84TeG9qQPYeq8KMig5scYV1oMmbm8uLDxot6nsegYgcuQBX4vfoF8kUfDwjr1r2GBs4AEj",
  "key13": "2Coip9KdPXduUxC686PQww8AtzkVfLfi5nq2AadvstHbzyNvDeXs256NCJppTLfERG9cwRcpVGAcE5VbF33LeVYp",
  "key14": "3qDhZ1xjRiqnmSxBZLikhHRw4qBrquS79N17wwmKppCizSYhHu1ry94MVPYXX9SEjgicSoBRYhPkimh3jNMFyui4",
  "key15": "5gSwrKeMcQhQtsdchzbMCuCYozz15aFcw2TZ36FkkKpZhqfQfRbrUbcXqiwcQZ8CDnvEbPSFTzzN18V2yP99zRwk",
  "key16": "Lp8EyYKWted3T8hkCp4ECYNvmx7kAzAHKAWwkbZcQZGykhBh5H2knmozQMiGKtccEQy3zyoBfFpcKbuKkKw8i7Y",
  "key17": "49VgD7kLav8xWPZnCkZ4tb1YsJEwUcqJP7GhWXGKfhLRm4J4UpUkEiEuqXe1EqnyCD3UmEdqx7c9HJJuDC6Zg97e",
  "key18": "3fzi39Es3QwvnqwJdFVBKC1kWk62jTkkErynme2zZiX92dS6MLFwRhXr9msHimQ2xpKTG3vrGcZJKNcXuzZWJ92o",
  "key19": "1yTZD7d3S7idbQ9B44T84rBJiyTYEVbDYk9PKqdPVTv2Ef9LhbBrea5Pa1eeMcqcGZdxvR6yaKqDSreZAJYpFkR",
  "key20": "2AiLgStk4toxWuWwo7TdkB85wZXVEH1xQP9MniYCYBgrGLBGbycwFsdNf6wYFkNjzQAwMa1MrM2LCGLMe4fiVymq",
  "key21": "2MVXKhbkMXyU3gsnhd5sa5TdysEHhhNWxFDKZpG71fvQTmtbvd4vufmGfNCkxAT29mevRRz3pEAkx53Jf9tpbij6",
  "key22": "4dqDBErTk1XuvmsnEjxtpLTfYv85RFA6MyuaVH7DhgE4rxCvL9y2rwM4cf7HtsGM5aH7qpet7PKtWfkBe9FFMgLv",
  "key23": "aKqcqNcmnyGeEkzwgkiqTapMfPtMkJ1dURVowx1eQrK2G6gLEN7Tkf4VypJWqmefATaagbKAGWw1GqsSBLZDJrS",
  "key24": "5AAQavQEVfzDaBgk2qxFodsJaqRDtXfByKy9Yuna8E5nGEB7TP6JBXVBBW2vkRHNcPkqoofbrBcohXC4gAvhVjxi",
  "key25": "4mJQ53WwVdiEmTmYBWbdcBcarB4YtBLnfbFZFf2o7oS4m2Kss4i7yZ3EonwKz8nv8MdrJErqpjN1DJPp8n1AAbpB",
  "key26": "3hukzvLZPGdGVvyCVnAAD15xkBWH2pXWWbvFvMYr6rvweBshpCsrvq3m3CAMrTf3md35ceEryn5u9wzicjRyEwb2",
  "key27": "2YpwCcMihw6ZFWZw9ZuLYYh3VEeuwF9fcMkBUPYaS9dRBMwWwCTjBihxrWDF1TEUzZfvCQ5Ly9VgLPLpBrj86Fnv",
  "key28": "5F9kzPHE3by4xM6wKSLkaJWQb4PiWzF3Fi22Bjsnv9X8DToGeSBjGNnWF9AP6NRiBp14Z3zjrgrmQcVxyZH1VSTb",
  "key29": "zANf3J8y4ofrkYUGJoWUq6kN6ChY3NLxUhazHS7tMXTn9TK4qjUWuuNCRGZuz3TijzkrwpRdiXqyWuPuzqzSS3M",
  "key30": "jVjbjyKzfCTiTyVXSp2ty6odp3NQf9AP6XFKx5fUv8X6RvbPcisxSZAx15g3CbX6L7M837R9MKC4vnBvjv9pRg6",
  "key31": "3evUcx6Bi2tqi7TCWk1pMMEEA34L9TCDWpsKMNGa1LgxB7mKM3SbLrzgGEDEvdKbk51Kgnc4pVq7XXkGbnwT2rQ8",
  "key32": "62XbzChxwanwA5FSibfZc9pC2etb287BVP1QCpXzPGxr5cmw2PmrE7hHyjyVoDRvs3pZsY7wcp5AptJxCzPSjk3M"
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
