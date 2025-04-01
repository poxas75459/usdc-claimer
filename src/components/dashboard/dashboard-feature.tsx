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
    "59GVHjXcFcAWeqKkRCxjMrntG5xbUNHr3z8huF9Ms1g5gKAG7T1SBJEVqZpkBsQ8vtFj89fyyNMDhVBmUxo9y4kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e21PtehG6dyhZF1FmQUGtUjTVQSPSBxkb4p6ZQ2dHEJe1wfgrt98j6fEnhF4W2F2HysmwPra9rpmrHTJLzJWA7C",
  "key1": "1WMS2HhUnR4BUkAhEqTeGCty7Haeh92B3YCMGUkF1HRNiGBpiqtpNM5z9hyMLWhC4CuipfGgovwffAjHkk35kZT",
  "key2": "jLWd4W6ygsaX35fs3vg34KnZHjzckoNFj3SvnQpbckjnKfdghraVq4Ee85ByaLrEq4tu2wPxHBpf2KzkZL3hS5r",
  "key3": "1JdMTWsTkowgTBJj8mnxTPChbadPTtzNb9gEN98baQJRyKnHsV1GSJfFFdLzzwWPiao8usL2WgWMgN9rP7dy9UC",
  "key4": "2it5X7hAkuTw4kYnwtsF7XejVu9ZeZznoL21pATMWZXowTbXVt2dC53P9UYbUoia7PUSHEQHvpMiYqPe2fcCD3ia",
  "key5": "4Qu28FnZFCCFuNaVAuv4bRud3zpvSqBu7H1cncMNHxZRo4wAGf6LqZNkMSfRMbtV3oU7Urszbztt5ky8HdrE8qbQ",
  "key6": "2DD7NHpoGSvDV46SExdw4CqCr2kjwx8heLtS7KfGiNf8K7v5YZ4iNF2kA7UPhMyTb8dpZAnmQdsgY2614NBvXQfz",
  "key7": "fRs5QTra2RHwUfw47Tz3cEMbwmQAFjw5CkZX7JgXX2GTiXjSvkkCZUtZZmHBaNeggBwLdY23aaFb3aqWM723Vdg",
  "key8": "22TfaqTZk6waXoj6U3sPsy9tNKQh3UeVZKGDNQcikHrfQJJMeaZinhPgqXxgctCyWbh9qrGVpSDsz13Q6AGJMZ3W",
  "key9": "3y1BACHWX3h2zBqVj4XZi2SGdL2mYWY4Z4xu7YJC7Ka7N7ZFih1ftsxHZ2KBC2HstGjVH2DJwMPWCktrXVwdB9t9",
  "key10": "2PEPs2zD27TMmh88PWWJkGQhRKvr6hnr36zTdFZukYuvwuvsYLX9dzxc3tQ2qUVkpnYD8jTM8u23yZFNMbrU99Gk",
  "key11": "wJQBhtNRii4Q6VkrtejGbPHDiSU1XeSaxgSbmNvpToZsion3Vse7nRgm7XLhzsnCa2HHVBGpZSxSXTZMmtD4opj",
  "key12": "a7mS2P2Pbh2693rEgHKhWZGhreBD8JW2MFva8AKDtx7f56uq6vu13DEsWFqvuh7dtiNchkuj1vF7k94cxkQyBsZ",
  "key13": "7A1j54rr7hGGhLw5tcfcRGNcyTwwNRgMGTdMVN5gjTTZvyVJFzhrE8fncv9hXJ2KV4M6VxBEMS78r53R6kGugzX",
  "key14": "5cn8uk6JFQ7dQKrHqbwMW9FHW3otAHGtebKHxS1V85sNsRQxGZFeGo6whwn2ua9BNqKvnueBaqRaaN5of41pPu65",
  "key15": "UrZgMPdaQ6hpxibxKfyrMR4XyidWsdThk2R8sUx4PFiSJjis2sXY6sBNHMwA9v57KwPeuaTfTnGLKGPzfcF3ffm",
  "key16": "3dMdz3ZXm4io2rSbVNkecoUqYfzMTo7SLtVG6cUPN1qVnvAvWF3EHCecccCMbePv4ZSY8BxdkdH9McVUxhpYSqiM",
  "key17": "5geFyHpTArQbfDtWrZzfRAz2pYAE2Gr237Az6xWyz2b5zvyUziuEhXqDukVZzD98ZvHxW4aEaKxDSdhbeFi5XKRe",
  "key18": "4VZXAWKtd99ohxfJry4ak7YJU8bzj3dkPUwGUCopCUnPFmQvn3dmbqJAGuYwDt7BP8kbJUU4KdoHxEERdsXG73u8",
  "key19": "2nLRntXguk2AjbZKPmavvqRMJRXaDUppyTPFYJ6vqbNZKqs5GN8qrBSNkCiyN6KoZoghjn6a96FznToY6kHhuBJC",
  "key20": "57SivbeKEXXKiDd1fAPDRRxHAejAFjFvJUgMLkx1oYfCYN7wMwkGtW2tDZPE16Z4UV6pupu6bv5ExeYBeyaLHSCi",
  "key21": "55eYCM7wDkDhf11zf16mYb2VStno7nnhj9R736FRkaBqp6U2zvLiSPbV8wxPsBciXMyar1TFHxZsp94RiMqYA8ZC",
  "key22": "2Rro4FKoijw11R5PhzRoXiA8wVXReJTTELjpr2QfJurSE45ZtSQdnsFhgouNtthP94BFckqWvG1BYm4szgCcTiga",
  "key23": "47T16hLJXCtTcNWdkGzNAwYtccv5ieNgSD864jrVUDDA7K8p53BUq2Y1YgGMg9iEUaZNBMuXLddA4CviaSUaA1Jo",
  "key24": "5c7hKKCtuYLNzuKfuLXy1yQeVwmFoComZe28sNUFsUMHTemTX4mrZnWdZCBXGt299PAE8eLC9PtYihTUEnEw6oPh",
  "key25": "5nqgtWDZxhfeK21ySccFm89xzJeRD6YmqcUzYhLRZYvgnfjW2uybUiWKUhSQ9omLYTP9UUsCEFQwLgbZb7e3qSFd",
  "key26": "4rcajYexQ6RabfEjfjUo6tUoabeZp8z3tFAaXUgqq1K797exseJpWT5bQi21KRT7nyxarCYrimqkLu8scUbaK8Mz",
  "key27": "3BdVKWLRY4C9ma7TaXLQ14RdMWLDp9jKJr8QD9ZisMRt4wEdrYP6Jay53oCN3LjuqYT5YzaAJyoJ9VEm2pktc4KV",
  "key28": "2NoWVsJN4iMb84HTiDbT9v9ufn4q4kZag8xcGFaiG3nLNZVYAEMv8HJYuQaxxzXE6FRSTtRRAzriRwqMa3oMmFkC",
  "key29": "7rNmzuRSJKDJf8NvmYbFfBw6ETVS8U5eE8ca77bfXHKg2mEAyuWazYdoAQM7YHw6ZjKuzW1KafpsSnRZwTHpmSv",
  "key30": "3QXPegxBjkLUfPPaUeNX31fjQc2KQ1SsNeYabRpUtkaqaUtCMa5Xa86rtmk2YFc7sdG9TZqwBwMs8QFSpt22cpF8",
  "key31": "369qLd21UbgZPuYhdBFcJURLwY2EUbjwG9XMSrSmdi67hVtWv6Y9Z2YJAVSMxNzRzKzjyfJ59E441duQh1K9Njh2",
  "key32": "42eXtrm6crPoRMqSAkTb7pHKeNMGnxNN7dDtkJjfY3omR5mfuGBikAwwhomnKnXmGwQrZCX6W3HTbTGHHm55FEq5",
  "key33": "2ihv95iXhcwxmAzCRQuJSzQwmmPn3UjpEd5QEwSAC3Vkw7Kpdw8hpBpFp9ju1aSLCLj67kxPNfLXas4a8yiuMEu1",
  "key34": "5u9cefD7yR1SLeRXwo1FNVDpkJ84Y1JPKuKjqJiHKiEeqNeLcoSUbRVknKA3bKSDmJzmSmTsSgeBiZzajFpBNpdH",
  "key35": "4Z5MHzbMvWa1Z2uR1sgsBFV3AwSSEvgnhsMtpzCvs5cQvtNQDk4CfPiYpDoGo4x9QbYythWac8xsbGG5dmpJmzH6",
  "key36": "2q4mVU9VcCGzfBVatBPtMebBrdTXf33hyrS3FbjxACgJGQqbPYA4inkbrAzFae5zmHz1jGxQuPGdzX79L3z2vyMd",
  "key37": "5sAxPX5xUAQYJMgbXrENAUAJ48hutRJp9GVodiDnyYvoH4WGuX72TtaABpjh8GjxChHf9ELtR47wxPbvHYGjQehF",
  "key38": "6533DvEjvqsuBLgBbYHKszP5QiAwzQBLgdyGgFE93KzY4EKjMyiZniHL7hxrz9NWuMbarZao5JQc68DXGGvCrfyo"
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
