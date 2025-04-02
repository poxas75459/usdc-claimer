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
    "4jd9fjKRM3hYM2y5zsboDiJPsi9CY4mM5Jzex1Datz6gbX5wJzGEZtGwh5rmQPxxCHPvxWfQb4wocnRTDpPeuMSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MENRCoXixofqEpuoPamK5AcBuHVzFrdFAvFfVdd7YiSKtvSNExtY1pF9k34W81Zw5rVe5wPyaGhvM4FpDNsEujW",
  "key1": "58mcPZBSM2LECTtLA3p5WtmiqRnjA5sQqRVwpvxJmdHubG96y7swWoCotDPCKn3rvCzju8q3x7RmfqThGjXY4vZp",
  "key2": "2ZVZbK44TcBCndvF266kVN4c8XANUmCDVAGy2xC3sgha5X3YnbFSBvAvbY7xxed1YG4LaXzY6gh9gqgfhE1TXc4m",
  "key3": "3HB6DrD1jWFBjYoRioPWrFjvjbXaBEhKvJDR3aYmBQSfpijiAhdydhtBrXaHLNS3Wm6cPGFy59mSNhqUQU2Qpx3e",
  "key4": "5KbzF4L6A58k3L4jrLgqXmAHX7ybfy9mjARkueA2jkAQhPp4t6uNyWbNeVpLEEJwdwN9Pj6CFtQMt9mExknufauV",
  "key5": "2ubEZojTX2yfqrZhv6bWwd9WC5NRvYrUbuTu5WPXYQmbtGF6NchG7FYre3cknJSJCHPsE8QiD8D1uh7MiUtW9CzG",
  "key6": "4jV1wp2BzFG2B4Ujq9NeZG1RGzs2h3SaUTxFxQribxQrMB9ft29ny8rKxpZNRV1TcXHpwS8VKL29QZF7Dad7Zouc",
  "key7": "42xAZLZgamM8ZBuMgP8Rt2ujaRzFu8tWp2zezuM24Y4CKMpwE719kZWwrDxiAmJmfGA9xffLdRuDcrtvDJHG49pK",
  "key8": "5oVZ8NYtfJvdicwcqvhZxC9XKsgKXByJ8nULtyn2tE6p7YgxVH5No8wNzdJvDUazjUgCJBPoMt8DpB5gZ8vVfosj",
  "key9": "m2iLrkF4MnYwMuZh73TVxg1BTFfqU5AfcCpsJaG9Yv5GXSJ5Vu1gH9nVuSB55P6tW7nGm3Ji73ztM5ESyn88Fg1",
  "key10": "1VhZqRzxvbMp8hdwErbna1KRm1JSEvr1r7m521wkikF7YXVPEeBZRfwUYwijVFZEo9jk89ioPNNLK2urv8CZTsV",
  "key11": "4pTniMzrsPp3YmBvJtZSZCwiV5e9omvNYYJxqWoNeraA7E2scZKg5h7jMBmRLPr8NUi6YvcnAL8UVEXs635XVrTk",
  "key12": "nmNTcyXwcE4jJxKUvYN4bMR4hsbZqhQC5qR7yb298cPDb2i3tU6hx5uGP4wvCvYUQzeLML9qoHipNeJdkWJdkss",
  "key13": "5deVopFkrMZVZPhNma8xu7wwPyzzs2ZemHE9R9DqaynGjfXTQN3qDPDNLNhr4Exw7r4fviMmKRubJkThLp6hjYqP",
  "key14": "5W7ejZd57TZ9xLRL77NvZGEuuTcR5iaX4v1UFK6DRXzx9XbWy3ktUutS5dyCz9Fd451bjrq8iFT7Msjfc7EBAVZe",
  "key15": "3gzEbCbB7sSu673efLJhmWfwhMiiVtaj2dmZGaJ8cQ4kpEx5a3ry4vafNjPWQYC4Pu6fFoyE7ZonYhfjxkZ6rAD4",
  "key16": "5btAPouZ8ZdgrQ9Tz7GAa5U7UarH4jT6EYRgzZ4s1M7m92HUv1qp7jRRiqT96uL7NmHWcjX8z3G6Adh1np1Mt4Et",
  "key17": "3xEKUws4ccGskNBtG9ybBtmNdUw6yFkmXb8QgbUVmueQi7qDkzKRp76j2DwcsUnLpK1p4Xkjyy1JbdxVqdtePUw3",
  "key18": "3cwQZJY9oLniKPKa6cUkM3TR6yb3ZHs8XF1E9JLJoyU3VQGtrJzVYeKP7poAYJiCiNgM7a2SAG4YtMUVsxA6GtxD",
  "key19": "2CE6pjhnAkzqVdgNpt9X9XmXBnnDw1ouUgqCjKk1QXZhua2dETns13MVgYGkAbktV1yqnXvR3SmNFTxSp6HtwPsc",
  "key20": "2tDkcY1p2v6GQ5YAinFzBWRemamP3SagjPpnAhUabVkXyMjnr5gqnBb8U6eByyww35LiDy5awW7ZNQ7xiN3LsqTB",
  "key21": "31rxe549XfNcdWQ5NrTNuVHrDNWMxbSPvJ4SJoSy8YxYrhojXGKvtJmMgw2UQwyjftSXd5YFQDphoFf7iNLzjzco",
  "key22": "5xn4mxcyqWmTxHzBkKJbTYqszGHtFURNWCPsgpHxMmCw9gEJzzPbEpFywQnPBnceS7s4uCuAG2D88FskPBWMGg9W",
  "key23": "3EnHzVX7mQR3GkU4muVBLNHZCnoY6LYUNXDEgBY8KWToV6QXtEogZmhqC4fzNbw5GrjHG3mBE1bHqfSfYRvMKJTD",
  "key24": "62uPdAwnJ7aua7dZb4wAyWYhTJzSLNuiJPTemaqNYaZiudBXUAr3SDWuspBmSddoeD8prVgQ1eJRKgNWojAsRBrt",
  "key25": "2GYmu2kT88Tig4pH5Pwa1fW3oc9dR4Qz1Q1RhPk1AU2URAwG6tkjLsHVtRnTt7v5n8La1SjwFttxpybGVBuw1ztW",
  "key26": "UGzPvGJqpaKmJvjgSxDWQQhMRK237kJMxayhudZB6w8QuTWbi6geEYPyNkj4zeGwKRAmBvr82QSF8yqKUARxKRy",
  "key27": "4dpHdg37b5Uh8zqGBnzW2EjKjRVAg9NyTnpZBT1CMXFD7U8Yt2d5HqN9DUAabGqQS9wWrKbKHz6geWSUBVfZWu6J",
  "key28": "2ogHk1P2iRFUrpVC3jFKFoQy416sqpzrQrScYD8G3JcAnqcv79rdXyGw25Nehdb2kbQdPraTfwFseWC8xqyMuATp",
  "key29": "3EjZ2tU1A39qWA4sdXrS6Tjf1sphZSJUPjncg17L4swRmjZuJSXXGnL2aNbxEjvNWb92xz7E3nxMoWk2xTcHQgBm",
  "key30": "5exQ7jkf7jFb66GMteJJMkdUeqKUStUuo5thB2AzMNe6nFoiRgCgTNaLEi2LtCxQ2gM1y4i68yGeeqoSmtja36qs",
  "key31": "do9LM5wabfbw1vCGRFqKN3knXjKTComn7BLx9v68R4LaimoYufXTufvn7r6aCmnsHpuCBGHXAYXfVohvpeGcYsZ",
  "key32": "3zjHRrrBev2x7j5mVmory7Q2kj2KEJaqArfE711F6B57eXvjeP3zyMekBwBeQQsk6y6wAkNoNszWiYiKTG5wKbCc",
  "key33": "5DBnTMQWqaFCqw5HEqQbQYBPZGW4KC3DFNrXrFPwwt6nba6T4YbuQc25n3bSKPj8Vb3xEV8ui9KrmuqX9UY9RJcz",
  "key34": "5uGPnBhQNhD9XGVFPTTieCkiNpw3apvpW1FcDYxU9nLDNse9npqxHJ6Ds8pX5E4Zr2beombVNRXY23nj5EdeFPrJ",
  "key35": "4pnLiYc1Gxdq1JGYuqDwDLEgtm2dNg5armLXVsdrS65bPrGRgXK7RKzhqWyGyfd7DKjfSV4W23nWgXAEgYxKaodj",
  "key36": "37tEqPfcJKYiLmKHEpRURjih9PkoaSQ7bfz39Q5beLqMb9C6GUjjxGhiLSMC5cxwfKeFrEDnyzikePakTT1BJcTK",
  "key37": "2LNmJ3KAKRULfJegJygYdHSGD1ZKHTqtX5VmV5xt5iY3NmxmEQvkGGsddcpfRMxT1iJ3czCMhE1C9irQbig1hwR4",
  "key38": "Ffb8rhuMCh2BoCVnYdDhavnCLVLSJ2RefmUhrTMdaztDRRVaKAPsRxxGYohNeb5Joiys3ZdhAyvkLxmUoeW6CVc",
  "key39": "ghdwYFvad1gpWMXWDF4ptzU7HxEQB9b6AsP7wWdhCcPGJAWuaeauXRLQHTe44EoxuytRjvqsGYQLVPTjjhwEZR7",
  "key40": "2ESgcpYczgUMTW2VnXbfb8tqwqEmhTT13VPAShkJbjGRX6yJ6EXqeiinpSwGijE88rNjjENaSEQi36JxeQF3PiSC",
  "key41": "4RcYFYK2vrxAmR832VYeuwYYuXB4BFW6gxFXhZyTghnBf3Zo6SHHCRnHtkEd8J2zhMqkbiiPutPj17EMd6Frdc4D",
  "key42": "46FYgUPVo98jrCBYZwoWZ7zXC4cNiTqpFSRB7anS2YeXHahnft1xKRg4VqHj5d2i33HdcRQ752Tsv8JLmDD2gvu5",
  "key43": "3jfqpQGB7aydxbf1appMZJy3pq5VMRVwTWufZoWaVTSiZWmNoijF8XeFEMXpuMtLW9nS9gkL13JXpAdq23dyizM1",
  "key44": "89PW9nEj5HmhaGfa1LAXAbhFxi8jTQQKhzEhqhAXnwSSfzY6BBHnHpKJPos7Jj1DKbfaqtx5TMcDbxkXSMtWPrt",
  "key45": "5CNPzCSUMQUXjM717WmfEEri8EDFXUP3MFAQua2ywJrP5U2isbGAvFSx8MCAbPY3iN8hWZyteDuB5YpbEMxU4iD7",
  "key46": "54KnerMFJM4sWGZRtexozVPofW5SATU7SRYVRW2MgE6doMs6q6vYuXk6YkyGjY1FX3vnZ86hWrBiBRPx5zgPGUzv",
  "key47": "5xFdczaK9W1P5FtHCHhbvpNFYJ8715gRn2DKQhAUX1jiZnMREfVy6D3jCHvyS9C8Cncv2THa6Q1ixhEJ9AUV4V36",
  "key48": "2C6fkyocVZt6H6i9KKjMNqb9dLCP6E8xDmKeu66HHuhBCuziMKwhDgpJca7a6DkU3FRo1JgVDvAnU5QApe7PSE8L",
  "key49": "4vkVkWVn7Jb2oiBR7H4pJXfQ6XHXjJCWhmNHY6X3nzbe8YzFCBsw4gtXWPa7R6AWytnyHysJyvuYGS7gWxQjcCWf"
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
