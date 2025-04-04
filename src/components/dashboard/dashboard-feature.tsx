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
    "3kpNbUAeTNNd9xYhWY4eNh8sqKCFxsmePPojReXyMwmVk3C3GBp47uG7zdViLa91SaFiZzENTvcyqecE7sdLjrwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eywpp2GpwLcNTrVYD81sVME38AhrwJYpDbjTX6KejnaSVcs89Sos83kNBs4RaBmEoNsM56tEaMpFs1QqQgwrTkC",
  "key1": "gbLUjNFPqJa39fUYTkehnzyyWV5JrGzY9HGuUMnvUXV3j58TEZ5437sB64id4X2twnDuZe4rENmbpXzU5jrR4XH",
  "key2": "4iW1oovcqmLEpebTNDp6XTLRuXkng3GJM7pZADhnKgQYiTLWBbp5NKDwh2PsDZWatytsXZ7k2kwSZ3ez8rAgFGRu",
  "key3": "iKPtnAVueJzqmLtnxu93H3HHG1K1M3QRFyoKZvNpgJTxbeLJdyRVrxqU4dNmCu7YaPLEH752WD49TjfVcb3mhLj",
  "key4": "vVWtzna2pqsERVqb93wqZLfiN28GFBJcJAw2ASxtrCFzby1v3DaPxZeTYahppnxQhcgV57DqJerrK1nAyThhmJo",
  "key5": "3psxZwC2aFz8Voq5kjM22EM4ddpMUsrLhBCGCUGu9DNWLpByb933F2PSLXeQL5mscDc5V77g4sqYHKS3Ept6EjUh",
  "key6": "3pRaQZurWyg92rkZymqa66tdXYK1UQhBc1LWiZNY9di2zwmEpgRpJv9Xz9fMDRsAYkq6EX3dj6yUH3UuR7NkAVWC",
  "key7": "3GQb9ep42XuoRBqYxQ2CBUHGu3cBPve2eRtxgRaaWZ1qk56KqQS6rnDkCZ1sLQsA8z6aDLdhdZZKzwokWM4pbgn5",
  "key8": "gWFbq3mik1JZFkE4aWWzQ6kVJst83FPQtwZatnXCKeqHwp8GsUWmEV1L7apUnXwLrGqfSLYJ9ixUoyebKePVxDz",
  "key9": "87gJi2wLevQ4KN5d2z14equ9TRzmqSEu8nR4TDNSgsB3oGCUcXDtXcrx6Ups3Tr49W6diNsT8s7c8DGFfrr1ohS",
  "key10": "448Cj8zMXx7gwStne1s8j69osTod36b8MZE9SEsTMRDgQkhwJq6nTx9BXdym1wSzhZbCDZD9gUEXCsrXnTPCnVmP",
  "key11": "37TGPnFcuq7zY4uwKZfswL6Ne11FDkJH8kuYmd3QdF7VwGCrif9jrfXj5eHHMaKiYQEndxH6F547hKNai5fkiAey",
  "key12": "4RDUE3qq1gzpJH7eSwooqMjeG9tzafDyQ5pwo3QL1HiXZdgGC7eWT6nxMoyZqnjPyrHKdrAoXcj4vppowX51nM6Z",
  "key13": "2T1de71yrvriTofkNJSoP22mH5zyUP7oWQ5u1SPDbvUSQicTWrXPfJ1b56ujnAH6m2dP4YCVra4Ybr34AMkYmqLG",
  "key14": "4iADq5McFWpCAnPiRqxwAaE3CyFn2e6UUPKoHkan2Pe2ddixKHkt9fmFK8xesKiUaFupSuixuCMkuLdni1f3v6i9",
  "key15": "58tyRJhfsgBNDEDcwt5NaxABcq7XQqcFPuDw8AWUNaYzdAMDe2Xneddo2vvt86QEfHMLW53o6UDeZbXs8q11BCvp",
  "key16": "eTP9XBobouLqEPX5zrExAGgUotz17wwkuMUuGNALwVLnBW49wZSx61UEMPMZ8YNQMh5KHBd3MWywGtCaFtREtZD",
  "key17": "4wvpk6WinXEZBJkH1iuaf5LKmpwhmuro6CZvtcHYKvN6WUimfoeDM514zSHxFici7i5wK5T7VfbRAcaKmw9DZeqC",
  "key18": "3tqbUXGvsvps5xKw2mJDttkhqXYmU1FqWPhu3GKMaUkehuJZpfwLkgU2iD8VmhUBHn36AoPa1P2rBx2NX5suNJTF",
  "key19": "5e8Ryo2gT8iFgwgtX1UrCgL53nTWKQtLCbt4o1nQAFVBFwNS3hsbPdt2jZ9frmoiwnUQ8d6rVLiLxRxBJUNHu9MZ",
  "key20": "4n2GYxmqSnucbfhidzF4zxzLJa8TxokTQBeyyvnK7vziYpvD5WhnQ211W8gmyNHUG167zDmT3a4P6CzV3NhUtHhp",
  "key21": "qAFht8pk2kQGpHRogwScprxYCa4axbcyB9dBVFH7GwnbTbiuZADMkzZqmunFxKeoT3fSL3qhSiducAmWhoFgHxD",
  "key22": "3YNJiccAoH2QSGQVA1ZgtRsbseKZuCuA84XvmWRy15Erfk3dmmBRkeH5NxkCuKQnuETU1Gy4TZRqe4rQaxAhE4JN",
  "key23": "gvmSqtmKsfVXkkDYfMLX6ASCh6asQorqEXZZa2GunHcN9WVjrWQdkNednBawhqJk8U9CogEsqj4Y9pq5SWCNRsE",
  "key24": "4h6L6DGhnGvebEbdb8GeNAqmZtvqUFDMC51M8sMkQegn1xtbLhTt8kNoMNqPQbUyHbSa9V8oFxr6nnF3g5H4Xc5n",
  "key25": "24vAKSr6srQhHs8SsTpiZkuBcFMtRXdjxF88ze2kHzqLNWCVz1gARUy5PCx3NFYMS2Do7YVydJDEJgBTaL9XZpPA",
  "key26": "2iVQ7qysEqANfEmB6NFD34aYrqpknNXkPXHe1A7E3q6Ci1iCkkyWovwAmwMLzZyBT6wtiohQKS7BYnLSuHPapD3g",
  "key27": "tvBrsBU3UQq54TbtdRxcnNJQW4sVCNZS5FADpdmAcZneTE6T3TGEGa8ThLop8LnZu3USRgRcubRX2ZMRf9epti2",
  "key28": "3J3AShDMwCBFh3xeuyW8uTa7t5Dn3pQ7c42TVPtDT1rgJChNQ8f5zspXyTHL9FwaaYTM4w3WjaWrwheFfLnzpZuP",
  "key29": "5P8UkNxJhGfuUXd3PcEnuQ6MRUvcZQUm1rB3KfACvfi1PnnCrznEQx9LZKC8PsQKpXdKSuBz2yDwDSsdQFUxFHH3",
  "key30": "4sRhyWmStWJR8az93AjCjMkhhoFrWb2bykq7ZDuMJH2cmaJgeczH7zaMDMc6aA4Vf1o6XwgrmrCoadHWLA9Zy2CL",
  "key31": "TCDbxyEomQ4fEXE8Y2GkKQJKmYiNEGXhFVbfH33eCfNHNXxybcfwfbhBc1V7Frn894akMhGhRe7zUxV3gnN2np5",
  "key32": "5rEtJbtDwb5c8wRq7eCnpSeHPtaQjNwtBNmbbJzqcHp69hmhgN7G1J8bj6C51W3Aqcw9pBdsNJUeED7ooYxmyk8W",
  "key33": "2yQRtEZ9NFgCgxvap2mXUu3dzpvt9zAd4wgL49sfGDcPDCPSycrcQay9hwHAo8wsP52KRBQNMWMafM5Jg52cNhNh",
  "key34": "2mHahj5sex9a89dLJRDMGcg5EhXdiRt5mD9qaJbNTLA9t8WJgzi7R2Rf1hX9HERRjA6tkg9SuX5fwYE6jTvpWcLA",
  "key35": "3RxrAc9iVh9bbqqwyj8S5QR8MgfP32ceFzBcVr8kyxkUMjrnpbBzhPvWDtfuBvRiHa2aK7HThPrJcvYbtiE5MLc5",
  "key36": "g86g8fZQYkK9UX6dhMAE6txixXhgB2mNeP1HCrpkNCjxtdWGdN3fECAeyzbWjNchXnzWzPiKrN4WmmEer8o7bXN",
  "key37": "VFnK6xspoQowrnsMAZPgtsMSHNXzW6F7wdneGR2uM6YVVhDwV9DSoRpfEsA67uTMBpkMMkLfZvHrDm1dU8uPFWo",
  "key38": "woG6TapMMFKKFf5wi39Rw2Te4KjaGBHbFDRgFtA7WZRpZYFYUbH6YzkwcXAGToVeHouk4jYv4d5W6zZtLqKzUta",
  "key39": "4XGy4Nh19wWuNU175fvbhQpB4YNdjdsEDLzjrufgyCBvqiGnrzvfbdZBixGqDp4fRT2GM4bjiMu9QjZ6FxL35KjZ",
  "key40": "3VrrAh1rg87jKEbMus7cV84RUixtAABs1QYddYad1HmSd6iMzjXPZffuzXkt5v2jU5Ret54PeK3pNFDGaCJ1fe1n",
  "key41": "424jyhYnRMpYphd4GpVyPM3Dka8GSyrMcPeZRhKC4bAJtLtBVh6TJzHUXfRYT5st29afviitHfDmoSnbaS17g9Cc",
  "key42": "QBS2UYB6w7hkAcQYk4G3PZXDjaxuDdM82N834WjcTw9km7PyPbe1L6kCTMwXos95NaD5xwBieN2BCtyRVz7Eux8",
  "key43": "ZefrCSUCR7dJHVdzErvWiiu5ieWX5Zi32v1H3MF9EwQMofrco5hndccFNpnrH6L153TNRtZ8qxq1iX8F4MhJZyK",
  "key44": "2dgy2DvuukGSm6WakPqr2tVveps1uigioqeRDsq17Kcvzs7EgTXGvvdeStBXbdMzmQ3E4CvWywFYLN7H8hWduGU8",
  "key45": "5MqLgB6jfHocehDUkdosB7GyUe8RRWmxVMKNaMjhJc2k6nwUNqdhtDHZkt1mGM6RwGrpL47SsEecmubrZ2gZkzv1"
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
