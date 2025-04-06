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
    "36EQdGtcdrrXnnSNoTis7yPg2p2p3ESm7R57ZDMFZFegwLTe2ZBRRKQaExASxGEAhd3iR4Qhj6aNMEpWhFDAfEko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErNDWqowCEzPQ2vCx8N6hAzFE3ZERfKVhBELGfpS4X7k7d11hCcc69zGdbyqwA1iYKWfdhWPQXXygLfg8fzzgCh",
  "key1": "4jSHuwiH8jdLXCjpambD56UWujtK5hwVRRtdzENCyPiezphzN5x86YAXTumMWiRho5XboVnyWSFFrpmzi9y7CZ58",
  "key2": "4xf5ipZUGPDXwG59LpX3PngUHrmPZyFR1Vkh7WwgVjAY2w3m3CrHLqiMVEUYk2njtqtY9nSxzHwdGjDCZpNnVSwF",
  "key3": "BqC3eUBPHqcp8NvQhHFzyyWXLAsP9hp9cwC3wBazY7SWiZVQQj31VzDrPhnrrsLdi1mD6WECGiGWKJsuuZN5pPq",
  "key4": "5roDYrs2No5CsP2jgCs4M1YU4ZHz5fkgD3wGYDqkrZwXNCtaq4PjysH6gJ4o544imWeAhhfmU1hBWKh8eyvFr9C5",
  "key5": "3u1cKz37D2Ntg2gxV2APwpu8UyeHUqytW8upFu9cG9zy6tQaGNhdnsE29mBKJzHQzicjY1k5j4YQcYG9SCU5xUjS",
  "key6": "4mnVMbr6Cm3cQhpAqk16KQGAbF3HiWYSet95acrBXXZCiG1menDzXxSqZ2pnbQ84GzxQGe6hV9quZmGokebuHdQZ",
  "key7": "4ackEy3i8Gp5XoZnpChaCUzB1esmrerkTshSFYU34RBLNsg9EsAvaabBSgke5hFSqWDPta87V45dydoeFwtBT9j5",
  "key8": "5B1LrjDigzKZQCPWtrc46ivFuEjEz3E9F4deYj6N6Ksv9s7WWPRiKbYtkGj1CxUZfWFUXMWQgBwFikiG54zK9m3B",
  "key9": "wG4KjP16MMbmvNAnYMvLFUcTSaeDVYUpikEYquJfDzdR14AshnuNfZ33WrYvqUjqGULMqf99K3aGHS55H53SgLF",
  "key10": "5nERa9jZ6P6NuycV118xWQ99Aj5e7A6MoNGad6oStjBegv2btrhtG2r5QxgeGw5QpaLx2kvoLrDrtS4kSQjzkS3s",
  "key11": "FDhaR3K9DggfuTrYWb9TqcancsJVuVQAM873jeud8uKkdFawB2eLFLYai8BU62FKn2CpaDYwL9e9dimnr9ue6Xc",
  "key12": "2cXuTiFQKVpw5J6eHT8FC7PoDN8fFb8ey6Gqec4qBxeVQqcKHPVWi6Gh17A2DZDsffacLiwrFX48B63DXBXtDY5c",
  "key13": "4mdk2Yonbz2YpSCswHfyAqcWNEj31ptcqQDMviqgnEKH7uUk14Cx43GC21GTK2USdDrER6nT76ScRTgmHfsPmd3n",
  "key14": "3Rqda97mAzPTxrZjUM6hWQ7YEbpLzqGE9nTgv26Kc2jdNC3ajCBKtgdwsegXsJio332CVQkiuwbo7dMMTqompyhR",
  "key15": "3SgTMuQ9oiN6pSSDDFeHu7FvNA6w5wc5YW1v9C2WrhnZzeTzpXZj8QzHUvmhFddyqNZ6Dzv4yLUFZTbVRSrn8kwK",
  "key16": "2Mkd9cGt3efex7juNJn8KZrsAcreMpXKTF3i8BZYAvTE5UcirgrrUAZi3jeJQDgR8iiDGyKEjrzKywK9j4rqkrr9",
  "key17": "5vUZgHXiHvkBy9SuEc57BjfikSNmrLnsqLpBoCcgrybDF2f3yWzGV9oUuLZzBwDWAdEpdREmuPiuHpig6h8V5gNP",
  "key18": "5RyNBYS5hUWPmBMuPTHRk9ozpqnR3Keo96gLopcuJwTD4epdEjakdf8heMRNMEXfj1bzaXxYrs97AgACRo7vXZdR",
  "key19": "27BYjG4QXCb2zhsXaB4rjLSnG8qw32nbLfRw6KkqnXFSgAHGpJfNHhqrBdHmAkXMcZhJost32DwLcaxtZrq9HkGg",
  "key20": "3WpivdVZS12puQfy6YKK2aSc1JBRZXYHfgdfMSXTY1Sf4QVku37W6gAAPijTS3cYi2TqHuExoVhNMVV1LmAxsBpW",
  "key21": "vqtEibtkdDokTP1gAmBxKWHnio6EbS7RTYqwQ2KG5ysddc1zPxPLeavWLreuUX5ow3hmFejbAktsbqzfxYKFUX2",
  "key22": "4SbRnBizbQBPrQkTd1HdMpLJf6cjEknytC2GdobTLYER91BwR95NaEuvhySC1Ra9EQwDgEG136hCni4qqFqnk4Ah",
  "key23": "38TB1uRNoJEd5vmo36gkjK9hAD8F7udf7Uhh626s8vm3h4QSzyF7fUMKjuJaKwSTwN8q4Lncc3YYZx6KncLT1P7V",
  "key24": "4V3jZ9hxeDtUnVX7RMY5PWmHYG4CnX2B4p74kpxcxFxhXXRYB37WB3vz4CUJXsvUtpRg12EyYtedP8kdopfo1Pmc",
  "key25": "3Y6Me88B961t1QNKWSEdtPQJckrpbdvzhgjPYJvY11qcGDkY3R8PgmwjwFqfhSLfACg2MUoudBL5A4MpKKtAVJnh",
  "key26": "38oTMVxYj58JjKJFSCvMQUUmggMy4MDq3fKkXcRyztXhiUxMXf72XKUyLNQEuVvdAJecvrQLEdeuwtsmi47dNBM8",
  "key27": "2UqduSojWjacob8jfb1pFbVAyUGvhJ1NkUUW6qAVAdEKbsNFh5YoS39TGbh5MLMpLPi3mmDfwDa7BdWXyqtGQRK2",
  "key28": "AVjG3QLMthePN9dq3La7NwTh9ECkFBtmusxpMfvn4sUjsgHdCmaWkDDZXt8HQLxkQUxuyrjnCggeZ1wBw4uVMhr",
  "key29": "2erSFZ5dbC3AhqKKVp5fPe6VPU8efnPFXw4B52jZvssCL3dnnX4G4ntfVtEUwjJgCMgEn2cJgiDqmC2coVy9jvAm",
  "key30": "5BfcKzXKXHKspNqjCCUMwTP4MfJKy7vNughxbYoat8AymX7ze2XfF7j5xW8p9oKGNm2VocVyjNe3NJ393VnYxwHz",
  "key31": "JpkFeQm32nti8wVxfftgFzjSAkb197xik9wXLygu6aFDE1Kv6gNRsYXhRzaGRPAFVMjoQYUYivqMA31nGWdbHbz",
  "key32": "8nrchdpnRt3YZqQFXob2NXzBbH3g9iW3cTDyWQTz6hfNqC31NA5y7jfDbJmUtQkRGCStT1v91NBGBymkyQaaNkq",
  "key33": "28BhJCwueuuuECWL3ZVyH638tjzPK7DGySymXHmiqAayz3B7JbNoLQWbttC7vZrvBCjcyQVYCdM6QM3C1S1X9yvd",
  "key34": "65ESayDMHoKMiLVBsAkD5ga5SSXFhFcHiTHd7dpqV2XeAaEE3B61TTQBAzq6AKUkYCZGn6sz2T9k1qA52Px5V4d8",
  "key35": "6rTNXBEgNCrMbx7NHMroFXVe8ZA6uTKUoqCsURz8PpcD2k7z2yTv6DHRdoEnNJRYWuHMed5HRZiwALXWyfh4EA8",
  "key36": "2BFWyeySuHwxvJ7BLga1QjppyMjhiQHbaZ6W1sxjdLRyE4vz9pF2freSB24oYuEfRPvXkXnoA1p623GTEetjfq2o",
  "key37": "4Rr5n8pcSTHhCdqApwq7WLvR5xkXaULDVEuzJ7sFJoN6SjEgdnEKgBAXQ1UHaz23MF8oUqEBuNAWKSjnEQfC8vca",
  "key38": "4pUiJz1nxe4NtgrtkCp4aNjsn7JSwwECe38Ri48rJQGTW9hwb1rtNA7Tyny7zG57kCnJ4ujRikyBRPTA7LhgPHA7",
  "key39": "4mZ43VCqWZAFBuLgsXuUanwu9FCYisYX1rUpiT6SydDujj3t6qxUjkKpr2D8kbYxWup4k79aFoS8wCCrS6SGuBWK",
  "key40": "64Kupikvd1dHmR63dprR6ef8kMvvcNkfWbn1aYZNzwWmkktrR17nRkLGr99Y9LQwRQEVNJjvfoedUS2zukxhX9eM",
  "key41": "2g6UL4st7Pj51GbnW1ya2Huteny8KfGC5uFPcgEUZQqiEZke3gHhdWWtkPNWscfA62Sfvfv6Lks8mRW71LQt8Ep2",
  "key42": "4hRabQAeXNxRkNRzd56Fd3wFwxVE2BFJSg15jpzAjQV8JnHMKprBEen8fL71LXyDyofaTynHECNMXE91zzXhd7Xc",
  "key43": "4cHAQZ628kUXBTYcEPR6P3ceexFLyU7Drvp7sJKpnhVQZzznPd9hCuMKsUNkGrRmMndfWCSx9QqfpyGL344gHTfF",
  "key44": "5tcPRkESb9mPasWngom9a6CHRAd3GsmJXwB9aGtcGH2nSKzpeQMdKc2DfZLB3JYcWdoiLmGrZohCEt62jr1svNaT",
  "key45": "4Y2YwicX5aUpVxHARt45Z5NTYoJiLUspfDuS4oTWK8DLZnQPPPDdwRT4N7xDuphCMFQ5jCGCmun2HzADPwG5xVYA",
  "key46": "2NyHaSxxx83t9k2AqEaWWYJqg97phJJqw1tpbwBEKBUJwtcgGxXXNgUeToTdhX1waD7yuSGGgnkGQ1BqfsBc9T4h",
  "key47": "2tPNbshFMvyTMfkvkDHMiEbMpUnpXZqRonDA5uafpH1mRCaPonEeMFMvUjp8XcrZ5g87nWX4SE3n4jWWofJLkHLf"
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
