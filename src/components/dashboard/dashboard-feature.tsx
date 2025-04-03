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
    "4uABGEKNfdWHYr6UpHwqUBbPpz9iBzdPAcYRQsJbUXQMDMW56qvHCpm9ZUSdx9FNP3wPYuwgW4e9WEtZBBjkPzze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aCb7qcafEJrkwYEcXvh4stfrUgZtTJJJDgfZBVD9QxBuhX8GN5H5oVEHCPWpr37Y9KvJVPG3NMMKkLJ8vtSBiGc",
  "key1": "3ApmTr7n4vQPsh9a5bVvHzXevkKmskZhivhnLLDcyMgUHiDApKbxHQNx23LR4atZsmjSgv3APMAru5eRKDkJ8xJW",
  "key2": "TWdk3sDEWMyATwV9uXt2FNv5Uu8doxhTjwszaG8xQmdmPaEUSnSTpG7xsMSCZtjt2qCzntBAmrus33njhxSa8C5",
  "key3": "4erhn1HHykaMSaQRzQLGiRQvHF9YLc7XxRemBhK1zAjNbzJDGvvesovRwe8aZPBdPigKhte7LsxCgu4keDetptN3",
  "key4": "5nNdWJNwkR4DeHCuVRpQzFpgLZmxqisq1G5p5JhjG3UiHNhC7XFQfkrHCXtAu9TWNumWnnfb4K7h1ecRG6MYTt1U",
  "key5": "X2TKafSaQhkb2PKPtWayNgPM1HCTD7MYfPrdKuFcWYzS1EDR23xVzSSoMUdgPbx6TKanX3Uue7mKEYz8RSWxcqj",
  "key6": "5mipjhkNgPRAZz6bBuSHiPidEv6xLyoeTWE63Pd9dNpgskQoJNRiqUAWPryVDNsjRSZaz8qipM1BuRGu9NZ38Vf8",
  "key7": "4AH6ziyi94TaRftXPGg5cwmfyMw3rSJymbMymo3ENpypUgGDajvrxXtHQt8CJeDB9gTdWtMGKiXETVjaKchewVjZ",
  "key8": "3aGJeJkuUryDja9EKktsZLxFmDSknv8jwkDpVwfVobxgeHRVh7onRQeb6EXwM9WEwMaPUa3yDCYRWofVzc32DvUu",
  "key9": "3rv8q4ArSLYQchRUczLhtgY4d8gt72jjXkEcvtyU5niCa4HUbTh8VP8ZiN6Gw4Tn7DwJVBFnSC5r8AyyS17dpEu4",
  "key10": "4Q6FJtwK7vCehyKfieJChsv8SmLLyYCs2D1BN37Q3tS7EWVYzK3eKY24KKV3KMfFEXUwyTSbA1FbbQEXueoVALpH",
  "key11": "3Y9sC2JHv1ysQyovsx9bs5v3xBjgkiATbaRD3tkkVnJTd21P7ThSLi9HsCcqfcoQsRdHWGZpWdydkTa9TV3MXMzA",
  "key12": "4B6QBmA7LDNRGeMbEyHTgRSFmLxCSTQYGvYmUub2bZuPww8Jj9fYkFdQrqscQvrtVJXtVVo6nh8rArPSKswm82KP",
  "key13": "5LZBGNV69ByUaX39Fcb4YNpB9jdtUsS5pyiyQsaurCCSJRaW9gPPwocpdnJvLhguCGnXJMt3ThtNYhSzLytEcvpo",
  "key14": "RP2j8odxk8kVnf3h491PQFN9LYANSeCpSbuH1cZsXf5FCCyW1Lbkui7jiprpcV43Tt4NES7qZMoqFtG2ATVRpAf",
  "key15": "3K1CqqYM6KcWBUJAgwHNJJo2TMjVcexVpsxweoNR4MAAhcj2sdrCo8n2SWDvCtpj1kjwAd4d8toyt9fZtNSwwtc6",
  "key16": "4CszB3fTQjHrzZiJv6WTPP6w5WCQhQ94ebrQr18LTotwoWWkTEwTs2TKt34VjoZeh3rytsRy8zrjJWxFJBDtDkSv",
  "key17": "31zxuah9mRKx8Xek7JpUQ36KkhRUSPFvGDeRMVD5VDXxLRvb62bdoUdshQDdroQsd8wzkoSgvX5dYpy7HunwGcg7",
  "key18": "3tdSUCpkhBfH9sjs7AMtkZ4gXfoK4stkPEMTvA3ZBQNuUnRtPXvGrVD5YNTyw72hTH45xM9cA3YhqRXo5DanX2Uu",
  "key19": "2rxZmBWFybWWtzDobuQTwcAePezbxYBvvF7UsP2pB89ceJGWZQm1Xh1UQBs8rUSJ2KdjuS91Qmhk1wzykXQPAF27",
  "key20": "2D4gJ6R1mFq6qTLSEwpAsQXPukfrvxh5h3Rw9d7Ti3ZvteeorQtbaeirEqYy5ycG71Frg8Lsp4pZgNVAAUNCPBke",
  "key21": "wLGS8UVYqiwzQ5zDoZa49RbZ5f8hx7Gn1i9e7YzcqeE1GBSTrHfRx898UbVyNEzRgqQ8FfTyfKh3wYZVqfr6tFL",
  "key22": "NpELCHEzUjJpGC63YF45sM8JPpFiTbFFgA8pqduVVvwbkYkGUmd7UETiREYrsCFbfFeLVapipCsexKp51nxpoJM",
  "key23": "4NBR3nbwDJ6gPHBqr2FRUBdUSjPDSqTik3sqKtSXptadkyuGJ3FSxm8kErAbu8Mp6gJTUDmQAj2fNrR6XUyCUiKJ",
  "key24": "5o56eHJuQVQH6P1hS3d3hf4z8w24icasP2iWKrndasVCrJUDXt4BT1cWX9os78dAwTFuw4mfTF2XAeoWWYRDxUQB",
  "key25": "wvrP9VJhhQ7yrVt1cUYWbp8FC7f82hTuLAnaPRFGkeQ67rrGpShAzbT9EsP6i2U4PUJHiMsRcRoW6PJUjxpJ39K",
  "key26": "2vbLRWjx3UxzC5GYCVfSFYU2aZj9qcgeRpF6rny8H5nYfV26bzC2dMRBXmFZk3v2LW4HVirrAnc8hdtuBDAYMr5k",
  "key27": "SHuKJf5yvUjkX5jmHaMsu7QhAkUojwoTyAYCCuD2JiyJcCnvgJHKBHmdJ26CQqN2D8wFUmJYd88cpeTqL4d8bYi",
  "key28": "r5EKPBYzAdAWFGR5JyJ8N5N7yFPxLFP8Rb6kbWe6KKGWNtg5DeyCZetRZYyYWfbF49EMUaLKj4d3Meo7yjxv5xm",
  "key29": "4qpZMLsg2P8DHLuZuGC57kbPcrB3zwM4bZjUohp3XTMxkakxnKHmZMbUuodNHzWUY46cKLND3XXyCCTGiMT37mGe",
  "key30": "2dpw4yueVL2ecVFC3yDkfuKHbSjyZJ3kFdRFcpFhV2cFiCYv8xmUCemZeJCyfLsoyPcxwDnAQMZzTwnGJmWjAdNH",
  "key31": "2h8JZmjdE46Nc45ZrRMaM3updiYxJ1iabdmZeeWFogPjWqzVuBuFy6BJagrLPou2skLbL8BPPDtJVqNmSqTJkBEU",
  "key32": "2m5YL1UKHnubPjckRwU7fvhGqbwyyxizQaxxLvLdKj3w57JXKwHCVZcsPxeMk95iSzGo5ScaH9LuQhK7zm9vvZZe",
  "key33": "4d9q8dULjFedcofV88UqRY6X557L3RyiTAJ7cdHRqwYUobBLnkcXqMvP4sQMoAZbRsSP3mLy7kRoJNqyuzQMuFjB",
  "key34": "3aJsQ4sRoxvxqMDThUerBYrzaQQjxYAK7i8fjHYJPYdGSR5AJhx8yu87VtymKp6AUzCEnHYLqFf1dyuDrHXDANHR",
  "key35": "42vwrNbpwfsLbUk2swbZNfjSmbjfDmA768hx8VTu1cZEmqSbB87qjJUtnNDr7iU84F7Sbb82yv4rWTm1ypXPwig2",
  "key36": "mfMt2nxCuvtYCtrJNWTpxK7aQoUqBtQAsyy31HM6T3H7mxy6sE1uACuU4V1CdyS3CGNkuj4FeN1tJQFvJT5wP2a",
  "key37": "4ZSV9zfY4Vwgrh38fijhMd98fakvHqNYmv8UDhehgvMdihuWBzrFDr3G8P46j479yDV9c913DU5rh3Nhb69dxcbD",
  "key38": "5bikPZcq345Tz2hTKkRp4zNNXDJB41FcuAsZUkwQ9rDwHMXQygDZWgcHWHdQggLnvQrbTRSYP7i5JQWEMyGyNdFo",
  "key39": "4RZVKFwGt2BhAACKKH6RdiMKTzKYvd9ZmeXtnDAcQe9WJ2pa8XvytgZB8QnfRxrApqwJFwW1oJndH3LT4zZWScpt",
  "key40": "oi375hSSdjABvyZFafsUhVs19vYoUnk3AiYKYBqpKcecAgHfh9mCC7n2qQiepvqz7AUqYgoFqq4ohAEmuT15wyE",
  "key41": "5LWpn5n8YDtnsveGmkY8c8mxHMisRebavgn61NcMyUtoXaeovLSUrrh5cABmeXKwyXG4cAdRadWBmhbt2eDjhdCj",
  "key42": "FnuTSYpQnqeDEkQ5Yd9swNgUqWZhhAGtgKHxuidn15GyGYutwYxB8pnox8htigzaj77UWzSkWEnBcynN81k6QLU",
  "key43": "2s2fnEcKttP6bXXtay2yPqbcPsamR9Vug8YsHxMkSs3KeebiPNtMjWfGmhPquwb35pK57YaiK9RPU7CofMSFPpTJ",
  "key44": "3k2FesSAR2QKrYmTa5qnRk2PZyCALsxDKkve9q8qpbAqUvACuo7e6kAgBqX5dU69LUrCWgmnHZnoRjkKsZnELKLN",
  "key45": "5T9bsVbywWhpdKSut4F782wHU8YL6PDiptZ2Lv8UrH7P9353vBnAQMm7rUqxLPop5Jt1LEC1f5WxL6CqVhAMmqH6",
  "key46": "4sV5F2c6eSPQ7HXJdXGYHDumnMKe2xJR8K8YiqpLoUQ4HoFmeuKih8toSpLtZfdPEVo4mHsHoD4MAHnvXHQQFLHm",
  "key47": "5PKm8z3Ju8DHaWyEh4zLMHnmvK3kHYmV1qKMyZW4L2qgWXMvUzt8WYAPvwTtwoLHBAava7B3NU6J3yecTr5qoGoy",
  "key48": "ucocSHRqUL78wAPQRvQF3ksd3wY6Mq85nxixLdUV3EyE9iHqobzjwp5EAwEeY7JUQftfgsrH4ptsk51XjnkEax3",
  "key49": "6mhPD9hzq2cnAN5mBbcreFbBpCPWPM7ER3yJzLu5MyxeZmBshG3VJypmDzhzdwvwpWvW2phuaXxUpTHnyZJZVYN"
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
