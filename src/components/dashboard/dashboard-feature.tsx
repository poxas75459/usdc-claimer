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
    "3GFgb8ePy7vwh6JPBqVKRvXF8yQAQ2Znkv2vH9zWMpCpJnsN4ac3hUBSZdsuUTM4Y8jbAehvsPXGcfHjwRXAvCFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaCJN7oWGKEmzp4fQnU3Ru17o5zhdmfbApYUuyTGc2MdQi1GPko7Mak61JvfgnqZGLbKoy9uUdyMGzeqaBGZVd1",
  "key1": "5hRCtJymAdJTsBTUQJj9Anetq8tdJSgDEJegg8txtiAQWPQcifhi7yXHmWZ2ykW6Hea5sXW8AdiRDtcPDww1YN1m",
  "key2": "4A62xj7BvLHRaQAtCiJBdnbHCHgppue4yAcdMKq3DfKLhS7vcKdZJGj69UNj2nFHjugHc17zPn8ZMtkYNiErm9oZ",
  "key3": "414pBudbGG4bLoVR8Y3aZ7bwcPzC4dnaJo18CnCSNVPWJ79s4r5h9TjDe3jgq6zar6r1FujzqwAek8ErqWZm63kW",
  "key4": "2NWN7LKztKLXiDR7WALqZ1hU3A7uA12oDcqMZjSkMXCvVjcwZwLCpHFF5kVpAsGjMqLRsqmT8rm8RRgf45zDHbhV",
  "key5": "JhRF3jfuJMVY4SHKaojrBanRWoMhYULXWmrVTGrrkopwrYPo2Yu29fmKTYuWztVGe3GDDxcQ5cHNziuwTcRxpKC",
  "key6": "5EUbzNBd8m3tP8w1VkEWZpELMKTAHcvpAd5C6BdKmhvyrDrZCYwrL4M7nHqdGxv88hd8XtJheaer1mTZM3UvvT9v",
  "key7": "4c9tkyBvaxF5FRqmjHVrhacX8hCu7GNmP6N4pEVhsDf7j5cJZ2DowatCFq4ap6Z8Lxyzkkny8Dgk59xPu2qN8ZaV",
  "key8": "5XLX7K8ZhsgzATS8bhqHQYnA8FbFirzACsY3voU4CvSLn1YPNY9WTuxyXGK6fEMpxAzhjkfcnwT11LeGuswCFaMF",
  "key9": "2Fff5psF7epkfX6scH4WKjdhL5uVybp8DNrsaLZfv3pBFsjvCuRdmcHNdfVNMDtv5SD9eAu4c5HCHLviGdfJ3gpQ",
  "key10": "FvuHiraeMWEMuY58fS1NbAFjtwJUjuKdtH9fZFkhux6B3JoGWWE3VAC5KmimhrBY9fYN35pk6fSqKdAv3RHPwQk",
  "key11": "2vRmxV33LLXeT3PLMNH4gXu688om3FKPicHpQj5rL8qNxSSJzxvDuo44kC2KvLMa1A6xSqRB3feDYLSQa7Zsbs4F",
  "key12": "34AegyB3huAvsNHm9vXbDivxHJBhtUuduTu1yBQ45xbJHKqxHfHriL7Q3Coj9DRATboCkReZtKkdwNo2D6E7sJhA",
  "key13": "2zYiSPwKuEwb329PBK8diexAJVBhTKFNAzsyT6je2jUa3AQRFxTJ2XvhoSR9GLHBP5xsndu7TGSfT4bczZpvvTuJ",
  "key14": "3HPnEc8vxiETkTQnLASN35XPFcui33kgzx8cc6BkWWXm3kHxv2C2BXjhNRk45R3nmaq4Nb9zv6A1GnuTuQCno2Wi",
  "key15": "2dYiGPfY5Eyc5ExV69wJJf6LBRLfdcwfMgG54w48u9CshDFLDmD3tRNSXSwseFCCb9vaGeXP4WJQ3V2473FbgAEf",
  "key16": "5oirC1ZBtCnEBKWZpXSojx7wdLhppipmq7izqz4jc8sEEgt61FAiLsVh6juSYMiK2Srv3Gdhx4iXjtgTNQj4pm4v",
  "key17": "4jtmbSZrCLKqRprehXh7j8DHea87yUKkeE9keHc1cjyCzosmjLTeKMzfEh8aaFKqgMnjXGycZnieGAGBqZXq4N9m",
  "key18": "3ZkiL2y3aYGph5M1Q9LgLCciF1iekgr6xfYk3Qe5JJtqWidfZfWH3XFycJDWHTmGi8ToHAiJWvjmYZgAypy91ND9",
  "key19": "SQdrynDgDmFXMeFZgtXTy53pAypMvJxCXrjnpiPbXVsFMzmvhB3n4MLZjwhrgzc69Vm7TjoJJdfPR5Egax85smT",
  "key20": "5rQMRgZz9Uok2pp3dfusSuj7AFWQ5yRn7HHkeuo2m3ezcjGE2Q6GLo5tQNWJJgcgqu4jeEu5fJyfVebrYhTewdvt",
  "key21": "4chEQ7nz1Qdu4vSa5QSMMpqGeFn9sNt1F27MJhSJEgXnA5kY3K18qovPcmo3Jr4R4z74aav3DaMb9Y88XoLe67vW",
  "key22": "cZWa6JCTP4mhyjTbCR3wtD9hs8K4ewzyXGVDNjbQXt2nhin6UogV4obJ84PjSHhSCBmPtNyw2H7VwBKnuWYpT78",
  "key23": "5Czfg6Lz5YNoE7uxgxyRUDENJwnT9QLxvsfVoZfGfFTPnumXqKWqGiX6ZSkRfF6wqJCRPNP1futRXVMkowmnQz8J",
  "key24": "3iYC5P8GDxNgEcb38xQynjrzJEWRD2XYF7uyFiHEmPAjArseZayUZJHzBwHptSMfeCtkEouHK7dWb81ZU2xP5Eue",
  "key25": "2FR1MFAZg6G9oECW4s5KTamSZQT5ZShh7uxntmduTL6r6wfyMDE7rHYzcySumqhypcTBFgPBbvgCyCoaDBbfwZjM",
  "key26": "2rJ78GuButLWmxhLJRzJUh71nBidPc6FXqLQFVPWnJ9qpREuYsdqYZaKqXdWeFUx6ifcpPnn5NsUaDs47fMZKzbS",
  "key27": "2Jw7CdzA8QDHTC8stkQiZuuMZ5wBrWgG8BPxvzfTNNJFLRvm9aKBS2ew62zaJCAVaM17XFbVJd8PWWtESnTcydwq",
  "key28": "GCJ8RLgn7dXbzkyz441g1ad31KCHQdzfpqtbb1ne31vEJLq5SwxaXuDRsyxU8VzmQEXjRpmXQWgV2F3fL2HLMZS",
  "key29": "SR4aNvQ47SMy9UP9aEHYvvHhqDVXGFzEfRPVR14TSfNKdhKDDUWegpRJukzghfyy1wMrR5E2Kc6UiRWGkkbhWUq",
  "key30": "2SGJry6ek7sbgBJYviQLj1okaDoZNYSUCZ9UrPEG2QG2pgw1vz5X2RbKc8QF9sNXKaAd51BVsuo3qxzjAgQazmM4",
  "key31": "3WprCvJdPvcSU4c8ovphZcAkmh6n4neWFQy3XgirhQjGgbvpWcbGpVvuHdmtTY7rgpMVD3QjoKvpZCQKZHerRmtn",
  "key32": "3r9v61Ei8a6JYjSqkVLHe2FKSQTfjHJCkSQXmWuFsb2iNkAJui6G6MApa8w7vkK2X227nuYeJRGFErdj5KndzspC",
  "key33": "4Wo9xYVFZ6nFZyTvLcTVkWJ9eTsiK378P7EDbCm3JMHPyKiCh3AejRYZTq7t5VEDduS4jCcyuKp6wt4KfofmiG11",
  "key34": "21uvvci3ZvttL2CAaFgFtVZVYwiB42BzhjNvMnLMvCq7qyiLGnTxFYygRRwoiVUphDLAiM5eQx5DgRtxUEbmfTxF",
  "key35": "4HxhxnizU4UddGf5E6QpYNBMbqvNe9YB5nuWsfJPPGRw8z2d73JPnKcokx2nmK1S8W6gZbr981kDRTP9vyJjYxMi",
  "key36": "bYW278nwHCRoGiABHZK5QDeCDvV5ut43CEGHjwrwWp4gWqrqL834oLr4589zwGCm9xRaVX8TLpDFZbEvPciXLCp",
  "key37": "5bk4CNSuoh1rariHKmxvY621UZoXbtUP7MN4raSrb4UhcUVytoDYJ2tJ9PVRCKC1RYiSc9hx9cw81jc8wQMV3CPf",
  "key38": "MN1kLtJ5JPsZmyk1hDZeLqyPR3pWsHmjx1nfu8p33Lq9pjav4nLCeDMGmbhGA3zvRj9HNfTcfoi8WwtKFuqrZq3",
  "key39": "3cTuc8LLQ78srqAcBrnNQEXwWkJA13oUR8Si8ULaxRtEXjRTY18efsUkiAk6uyU3qAJNSovjgFSFmmxssthf6Sy",
  "key40": "4MtcDPUhWyMnPE44NpWypSWoiUtkGgkFLBTyXeeowxCMhLKHqocC35nmgQxrzsAb3svJnsKUoFxi4tYqmr1q1DPU",
  "key41": "37ANkGSWc9vvn574TDhBNoPy7pbzdMHrrkuaRvpKSCssCCCwXmZBJV5319Tiz37bgySz2mEogGgEzmgfXTZeSjyg",
  "key42": "2ASFchrX3sZa3TixXtXN9V4cEvEhhdj1zKBwkiqtCTWAMJEtc6PWtyAX8rXt8whHxLB5u7Ywr3LA4GYLppxEjo3A"
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
