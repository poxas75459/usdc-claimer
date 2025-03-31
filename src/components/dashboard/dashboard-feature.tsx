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
    "5eqpWdcFQFuFEXY5H7FncGzdWsqja7a8bFvy1P8ZQVjHr2rUv4zd22UREiQXS5pFNNBYjRbjvd21fpJJ2rLt8pnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbb1mWcnvpqRZqQDxVMEH6VCAkLcbwaFcpPkBuUyFmpPqevQ6hsq9JHqiDic5RTsZY2usd1taTy7KFfrqAXFisc",
  "key1": "3Nj27qA3RLX4vLn6nrcFD13s7KiaLvSaXkfdTj8yvL3tNHGZScNMNRUpfQ5FPHZdqQw5othcqbEmb5hy1JmiZRsk",
  "key2": "43syFd26JN57ASJbRTxvQLEoFmb64WBhQNzGLHuKQSWUVxLMWMK8G2TAXkc5uDZxE9XbvSY5F945p7Ee4LTLmprP",
  "key3": "5yKUMqFZneeTKz7M7by4D4L1vFszazcWu3Hk52k9FFQsV7g9xyBdAzbQ7fpEUqVqeV9LeWSBYcVajWJEr3dbgLyQ",
  "key4": "56fGy2d6RPsG7U5NR8c4BFaWoFaKsTWTfWCQRtB8MDnamSmK3eBEdk5mXngFfSs863Xt6nXqEAQehkPCai2gdubh",
  "key5": "3ixNFQx2oMSr5BjcvAuqtMirtu9z8VvzBxqaACRb1PvmRrL23ZGpv1Jg3z2ytZaxEC1jZtufefkcZ4ZT2N4dhoBe",
  "key6": "2SyDUr7nQkXkp4DY6GUcj88Fe4PxE4GUheg7Y7L3YYoxWD3nkJA9e4xu1RHCc66EiKRCAQb8TN5Huf3SvRBe4v1Q",
  "key7": "3qrr4f96PpXMGGB6LNRL95f9iLKHGFD2r6ZqeWEg94Ewb3vjqogX2H8aYWxGEyLpzZ5sZeipciL1xB8wLqJkQvfD",
  "key8": "KPk6Hs2jzyPLvV6j8YTwcwNTBhKhzLTVyn58JLihrLXQ5owXLt71DwMASC4zgBJxKnt3h6yfU5X5aECUDdjv26x",
  "key9": "37tCgYnJnRCfQ6gPoKNLDiLCtqEDQxQW98a7SRHpng9vjDtUnBioa3XAoyCJpG9XyuK8CvieLoUTFsa9UqpRCYfN",
  "key10": "3dAk9avzLHDvMPaa7hi4Gm7M7wQTcSCDewGXVvHqua7APAm4rwPGUFsZcW36bPNnFtJCrtXgEo6NsBQgN4a5D5r6",
  "key11": "62AyhznyZCr8DUUJDnZm5sZ9CzBoEiV7Bzmvgat9Fs4pWrY4mNqA3PfnJS5M41gsBnSTbw2YoJyTyNBSQmew1dPQ",
  "key12": "2bGqnP531Jy9nGWceG1UEF4nEaJWapdhwGDhZ5bFbsiN9y7wMmf3YSe3My5x78WatkT99cufESXUDW4UHdW3ZoxX",
  "key13": "2TuCRKq52D175H5813SzdvRmeFiUTKJ6P73ofwAVE2cjb7RHqgyR89PrSPD3g4rTfUCuKCcmD2921TGyVamZDsJ8",
  "key14": "WNwdWaut7VNTpwAHaS9ikRwd7ARByBpK2Be7riFKYiRiXshX2RExTiyYdBSqb8m457StXzAWMxH6AVugYiCH2qC",
  "key15": "9UwKRQjix72NpD96x43cMCM5CrjEXZBSwLZxPm3dJb3ZUfRyrEqW67kWwMcSVLCuwR87bMApnHG6Bo5cnJM6gwM",
  "key16": "bsJnXiCrQrHZAFMaxkrTWcTTXAE9AEufqiRhbwSZZ38mjxUj7vn5KGiEWFzMCDTapJg3TfSctfLyp5c2nfLdxpN",
  "key17": "4GUcrx8LEzq16V1PZTY4pSuRLFdp3ADaKNnzgzVp5FFA2gvvbu4sq3dqXNYwbywBbm4H5BsobA1urWfCYfkmpVrX",
  "key18": "3qzvwL9tipVFWo8dyZCL1e1P4PL3tvb8HeQW5yrAJPysspUR7zMv1ncZVWmgh4Jwgf2MjPfsQoWp1YYkbYqn1zV6",
  "key19": "33u9fG5EqHBeRkgKneZ2qDF9H4kSVq8d1tXX3HgX8ACvQfzaysq53oSBstYwrUVxF9GvaKZbcC8dMSLQGXkZ4aXT",
  "key20": "2awsZaBbAQy8H9YXBvYPHpDR3Z2EsJnXPFBss3d5q1NbRMPjeVQ7GmBVmBTeu2JfkcBmuk52wneAoPxM8TY5CYcX",
  "key21": "5qUiuFQxD6YGBzh284HKWhiYVMUwc5fkBb78hgU8UqG9i3uCWiWuBWsseEuqep5WSkiXBBmp4raTkr1gH6hZ7H3J",
  "key22": "2C7VKUFX1XP2ghZyMMQHBDiHCrvjGPMoZWfZopRHHBeqiizboiWuLPeXQbR3KdjRgx8Hga3d3hbdt67jvRDG96Hq",
  "key23": "3xxPBYBToZu4VdHpr6i1uJUEwq6Y4Qi44J2i9bmX5znn9RyqwhdQUVsAS9ezzu46bERhYeaiX6pWNVWs3xJzveV6",
  "key24": "2BEAfipNgEj25pXgyrKXE5668g5CHEE4XG3fzpVWJ6RzrNxmGVnht3y7exXY4P1SCxTiY2GyMrHqg47c7pDBq7bc",
  "key25": "5y2e1y7uMRod6vu8uTjjrspHsTb5A18xPH8F9PpohEEq1NbbXfS4McuqaxFUiR8H2U6s2C4YSrZWWwZ5Z8RNwLD",
  "key26": "2gD6MbyxVYJjFpbcMkUe2FKg83iKLCMoRqP9wb5vBJzgJoSUTTt5GtFzEzAqY3vB7TWXEJALe2XWiQepuphBfZV2",
  "key27": "pcqFFRXUvxWtwZnuHMiDXgux2Y6NNuBNU9wfXeQQKksLZJLt1Gkistw48FYaSB7B8C38fSqLLMepnMo4sqRzToh",
  "key28": "4KBTiPAV2zXraW69stNUSGZHK7KiJSfAg4nBET1M5hqExNRBRaM3rNtUU4VGCS9xoQTRY58RGHVdDAb9f7JTAQSL",
  "key29": "2sq4BUSBbL19brL3DJoiPkaH7i2tH3ct7sKA1gK6qFuDbca3KR3v6rrrbsAhsww4ES6dzFd7AMCWcfsYRtqdYSMB",
  "key30": "4VbHmyXoDjYvtw3gP5GhA3Y5FbjRx2YYhcTsLah3Bk6yGAH9jSsUk9yfQbizcwwDHc9onVmVwh4PY3s3QY6zbmLr",
  "key31": "5YRg6p1n3JpYhoX2b9iJnF88MKKcNz6crS6ePi5j3GFpgv7amjesKnSWpoK72dyJy8W6GWbeyx6GFnbCgfAwpGyR",
  "key32": "Ta1bD7anF5HvHTkNBStsQaArDd9124SMmo34Y1jvcBUiAYNFETPw5SEZcnbc3Zqi2Fez9D4XvJmt6CuYiEvNKgk",
  "key33": "27Bss3giuiFDAA5uDoUdSXUg6vSMZNmA9A2iurepTVdbSoe869TRK2LhcnmbPJVdHdGWojJAL5d48DUfW61yTzUw",
  "key34": "2k8bVF5f2jUckFZkD1jDAxzomy7FCELA9dNqTsP9M5BvbkYnJP8FrhBetDrpLjYpsWNfBx6e2ASSLxFeMvdcv97A",
  "key35": "24WqgpBBbsrLkgy3WH6TH6urcCTr7KTs3V6SevkrPYzeYwyuUvpk2aVFDJix1XcFwvUXucvrq23R7eQ1Hq8P1yRe",
  "key36": "34F8L8zaFyPgGS9rNu7WvZ645sCAnGHaWNsKnMoXZPmP8fj1v6gTmRUkyStHYekcSJa43dJE6qAG65qPriHKRwdU",
  "key37": "36RbU7JAEprsDC7oSa2CmQDUyXgzvna27wsCNGZTrti245FdVikWSaxvVzsfLSuE2knqEQcRCpfKgRryKG9QxWca",
  "key38": "2LJNib9NTKj7y2teZt2jnQF6ZwpE2Sp8Lwye3gDV7nv9r9gvroCFrPci5VbKJMrAUWtwzS7co3r5fRtw9xZvn7vf",
  "key39": "5Qjwctkc2q12eieDgN9oiHxL5N2HsiTd1pVmH8cMmZxWJjE2yGP771ywdVHNYYCSUdRDU5CZ7tSbNDegrdJoPkWp",
  "key40": "396QHD1W2D9t2cgcwij3mnuqsE71YA665VbTuyooJmQjPnRzQDLgRTxb1rSZCjntejnqV7HmHBU6Frfe4v1V97cy",
  "key41": "23UvsudBw7jQLqmyzS11oB12pTdPE5mqs5RroJVttv8nK7aoEt4pE8EDjuBVaq3ukJBErkq2dAYHFd8DP6S2JSbj",
  "key42": "Y5BZosLqkCbokuubkKJYK3dfs8qgXf5Nhcw4VYmT8qzqpgaCHwKFja2wMcB5wjAe2qetfi8Yp5y1L4Hh7NjGkbs",
  "key43": "22wrTPMV1cTEVh2cqHERZYAAFY91gJ2JfiHQ2iXog2f6qdnRao9cjsSiLEQDGq1KTdWzxVKHqwHcF7qCtYWAzS4Q",
  "key44": "5LsxHsfLvkhgouxEghBLv6GBUyAjahv4rX2D3R88EVkMfuC49nBm77d6hb1o2235y6gbHNwAZs5kKKvsGvd9853D",
  "key45": "2zCr5JU5heMyaghjL97bYLJfTdsLu5pdVVt8N5JJPcEUQ8hPnAK3228sr4YLxuJkJU5ZcCDqouKri8rSW6kRES8i",
  "key46": "2PVwquoRqLSQpzroWFnaFizeQMbunSA3YA5xPzQwGL8VJz511ej162mrEgFebY4UvYpuQdkHx1fee5PZLkNRCEpX",
  "key47": "WXQcddoYNaPzX12PqQ9ts449NpCoiDjcATHpwWHGD2tWw7R92GqjTQGLBXhTBKU7jzpBvvTeZuSNet8Yij6QftJ",
  "key48": "4VdvKcJh2S25iZEcERMiGUP7cbbgwmH2z8E6DrCCrgwPh8ZFKPabaqoufzFadacuZAfjww1otLs9dxZ9SKEUTeDj"
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
