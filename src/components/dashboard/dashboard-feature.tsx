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
    "4p6obJubF9V1ymhZmzJPRoasrzPeu4s31eh2ApsMhTbhVXBA8zcN71Y3CS62uQCGF9WzQUs54em5soDRKMDiedML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDRJpuTuAQpsaCMXDG5dxZyBoSaREbyjxTRyGMwGodqjXhbyx1wRNrFWyntJoUfpM7q3kbL1LguksRuq9ZZ6VwG",
  "key1": "4JJgReixqdxxFZa3peVC6qAvXfnzrM9jujqhJ83MC5jRwG6F8Y4N3gQNVDZ8oBXD8rTmkoG4u6VV4SYnA8A917ar",
  "key2": "2sWtE8m5e6Pg1PvNneccLYsuWMVi6kdqYRbTMe6ru9eBZjad5FKZwh9desNYkWd54bGRjyxQwcwk5cuMuKHCqnJv",
  "key3": "33Y5T2y4QStgDYcsWwD9KafcQMDjerXsNytyfQXf8iVvdfsVfTCUgZYvWZ46thxnFoMoEWm85V7YaGAHZzK95F6U",
  "key4": "3PbQskwS9XqVQATaxfTRM2B7gdxdTEaK7jd183Z4uooSMyrx5Jc2Jgym5oMgy7LSxTP5aW57YswnsmBLai2fPStM",
  "key5": "3B3CjyVaUwkpsPaRkMQyZKVveXiJ2jovR5VqVmb3mVRmW7vASsLnzLH6w1WDTQApoLBb2Fzze65vxJf6BqwHKAzW",
  "key6": "A962Rczdnq7gqf5YH8sqYHawdgyjgPhHhQQqkiopZdfZyRy5y6H4WNBiFn8s1PC74FUPf8pkZNSoQJY9kXPkdVh",
  "key7": "65Biaw8Pe4L5j3Sjk5W49HRcnUaRLjEvZFHMLUZ6SZ1kHuXo1u4SufqDobcgbCRMZMWPXPBzsYGNbNiHkFDHBMcP",
  "key8": "4Tnj1sagk9yFtgNS5wGPNinHjBFaHLxg8XMwtbLd6QnwZ1XRfD7bh2K4izvx1yc2YAYJEuAUdEEDqdM5F5wQCnbM",
  "key9": "2gQfvrR7dTDfpeBvLUv7S2Hst6hZrRovWoshVBUS2UdGpD8XUu8akkKZyrvTqJJqc1A2ipWFuw2XrVibRT9bvZEL",
  "key10": "4qGZBcdte43up1zUcDVGTaLpeT4cdoVyL23KUh3TEAMFQKFuQVFVQEJ2LZuUVbDrA7KGA1CKdDTotQPhA5mBR3ua",
  "key11": "6UXzh79UAzt86SbkeAEsH5QofifYT8U6gkGbSiXJT8R95E4UuNPRfL4JpE4MYWvQGtEVDQJGFkoRr6RvuKE2m72",
  "key12": "3EELmA8mktfdWcGicqKGKdiQavcuPBgprmR9JLYCzLy5j84LKsZsrNswdEid3xdUVeMhM7D5Y1eswjdUU7hLVUeh",
  "key13": "3gEiHGeTB3aVrDuPeZ1wccTqU18aFifvt2HJKKsxDk9WoBFQmuX1mpgUit5WabCkrkj21eCfwjH5KCr18P8rm97y",
  "key14": "3krHkiYRVJ1DEJwN71ywdnPNfoPoQRvT7aaAEm1kft3EcVzkN5WzEbCfDTqbRvTggZqgi2JTCg7CPbgnBMrAmT49",
  "key15": "5KqhzPcvCFZqPR2uzeKpUjope7ogtsqZc3RRb5RuM36C9qhyQuEoResTpAmGm9cr9UCcz3ZVpxggUWhMcv6stFCe",
  "key16": "3iaud6bAd5xNVJRp4JPW7k3xiTNbpQ1bSSC2jxY71hdySMU9ehvB6WdJsaMWdZrahmDYTuy5gw7e94ngZsJBiDKe",
  "key17": "3zsr2YLtTJrrRJd1B6HtQV2eSsdXJLYY872bhw4tXiJSmeCDhjBxjg2mf6Q6Kp8NK9MJvnU6Qn9KmjbeyoEgeHW2",
  "key18": "5eekhoMvwwseygnp9SGgyxHqWUrtW8V6VGCT7J9EPkihs5VEtMrstEVDrJGmvBfgZ2WachaPotdMupvSKNonUBco",
  "key19": "2HST6gPnnsxRoFWRCdz6duVLP1NneEqjG3XpwMXTMTabskb2GNnabNsQVY3bKUEhtgg47jqDg468kW8LSMdvBv9",
  "key20": "4cEbZFVMJozN8s3cFxfVb7sLU3KjLygDqiJPrCNpY4UJsCxEdKQriggvcpSWhhHJbJm88cHGyiTGK9QoPGqiVHsb",
  "key21": "5tEdyanKA28RBDxtTBNNi24SB3yK4mG2E7nFbmrySo3oyip6xkpzyXeT1MnTAYYTcMehsGcwpT8JJoTSfwWY8VvT",
  "key22": "5fiLNYKdLYDBHtGfHaoL4YfhTxce8KF6pJkDPfnYB9q86nAcaCP89S6ReharK3PCMw6Jcu9wNLuxovhawDfwwn61",
  "key23": "49D34MB6HCzLexQ8vWcuGQLoMqC3RtEX5MMwF1bbtDEMHs8UymHcCYAbR6MLJzMFSL49uqzkymThF3NjnigKFpZC",
  "key24": "qfMofmMSMjA6eC5hWz93X2KkAJsCCGPzF4YdSnBmFezXfJPSxgL78SWZYZLPZ9LUMoq5ffu8D4BzgAwNaCkkP46",
  "key25": "3RTKSaRjEvwkzD9PNKj74FJ1wHcSaqAUi1Je4cLgTbVbgVV8TLECM39gaavatDpr1YL9865q9gkEf77pC3Qgxvz1",
  "key26": "487WBwZh2Ay1SYuXBCwKhiA554JD21K49iNqfJyzn2u2nVLuuo7JfcafWhu3zURfTgE4RD5oarBCfriQ8yEs3Pr1",
  "key27": "5WpToYTeHESMy4apqGqzSG3S35BUdAB7k1iLnNzHaEvKjxwd7k2NsHcUsmiosxphZn1pbWEwxmfTnuRe2MGELSyP",
  "key28": "4sMbcSFYFnATMNUBKfBeAhQcY8urTLV1ReTgRuSa3whLKWfzWQQa1S4P16o2R4PNZhe47iZUJ3p8BcfTErgz12gC",
  "key29": "3wFVyvHLeDwTUfyRkhHynN93trkV4H76pF5Z5NMmjoei9XPLdZMGmqXKxWjZbzdXXCBSVJX6zuQttjCHhrMTEhvT",
  "key30": "3voVtQKMmBfuVZRNypWXNDrZH86vWWNuU7yaz2YNpC9xGVMe2qsguUfmi7K4iRwYafHuYNkzTgJZ4zrPwrAsH78T",
  "key31": "5VTCvUEWDMJ3vcvNZJrPmrwF7qCi6tKdzdux6Skhj258awfGBtehbMDU1smjb6FYDHpRnRzvCvAXGCKvzeVqqTvA",
  "key32": "rYUStqVyttw2PUcE2dhGN85stv2U7D5Dm595AC8oHECo1XZpR91WcSNBVNouehRNeCif8nTRuxycRPLAC81uxBd",
  "key33": "4mBntAGYj5KYbDAzCZhcTRYyNsUFTyCp8hBZPnmiL4kJA6R2sGdx9j769dkdY7rxAyy2ymgudV1nEEpUoQUFRFky",
  "key34": "eRcPgF5eAeWRwWZBsaKy59rngbQ82Py31PGeZ2EMtH82uVrrCYhKVjdgC3L2tk3GdtprVSxgPBkrm5mBAzRbSm3",
  "key35": "64538MkR2iqvvTHyJfsGYXoLNjcLFQVYLyFdJRjLHCkfrQqExodRPcrLmR3if4KiqxtU2pbxc1ETGnG79tTmsBfZ",
  "key36": "DQcpt6uvNoKKwnEuDMqTCZy6XYL4w6NZQ2jdKH6z2b7phDdBUPy3Ka5rBy8idnBekwM2N7y3hYpPnZvkqgbert3",
  "key37": "5E64JyGgzMhZbtbSN4ydiGaU35CaLhVYTEpCB87rHs998eNdpbSHSA1ofc6puDfo66TEZueQrCkBMGirz99imadE",
  "key38": "2vVYvdUPdZoZLZj9ig5vsW5ZG9gk8vBAZRTexerMgyDbnNuNEF3CuuVtZatuBQch34XTnaAM4YYCV5FsM66EpaLV",
  "key39": "2t8rQSN8oh2xWqvsa6pryMw78ZnaPW1xsWv9ew7S1hbUsrchqcLYWjgFTPsrc6JZDknZCHZycHvytX7HJocoi3Mt",
  "key40": "3BKSZCYmCPhPAxK5vPYP9DeawJRmdKX3MhaMVYPjo3Th3huQtBitnRHrSGEfP9zvsL8qLxos86K4i3jRTzFAs3wr",
  "key41": "7Pbtixphj1KcLhnFEzMUipohNtBdYDBeXJXHo8UkdscNSjELgXjHEuwNmqL4fEMLEnGqscWEpb5XPwDgh42ButY",
  "key42": "55V8wQ7gjoDNUA5Do5RopKhdUL1bkFLcvCw5WCGDYhRPRV9xVa8r9UsEfCKLzeqTbYG5sLVhSyf8m1FvtuXzVDXE",
  "key43": "61pa8eBv6z9QZL72KjJDUoi9cCSseN7MPwRHYVf52qXZqpYHddF77wzJiTRbKdZzM4jJTfQvzJpfedEaz3YZvfZ9",
  "key44": "Q7cBm7T3xsMLDGBeDWCsmzqy7cZbKKZTJDY8jNNsZt7e1fXbwsjFBMrWwYg9T2B9ZJry1rDb6iuDj48yN9mN4hb",
  "key45": "42FqqyLg3dpPz2VVFvhYrEWyWP5vGq1DHaivJUnbr2RZfpze48kVCM4GUcZTRUjBD6Fia6jX2NzszoexGZLrgfAV",
  "key46": "siwetYQP4T4Xzs4mpAEtphctDPGswgZ3GduWVJaB8cCXj8aXnSNKyDPHzFR78xnHB38Tc7Ms2799oC3jbjUcsW6",
  "key47": "2n8hqkPfDfQFDzjz26L7Ev2ASpCyn21zPgjpA2YwXuqAGogDVE9QNqWCGHr11mXzV2H3Sc1JPq93s4PAsyw71tfT",
  "key48": "2bDUhdFzn6Um8pNLzMoST2FhfA3MZK6LMqt8YfEXFgmsMMa3QZ9PwwwHyHGNvAn8sqqGrkY2EJQntJJmdnvgM2KB"
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
