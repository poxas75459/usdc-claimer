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
    "2AQrzC9KWvhXCpMfq3ZZQKmZnZzVD9Ko22gyhYqBFt5iszCc4GwsUW8JgVn5nnjyTPMtH2bGzumVu8nR1JLe1B9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mQwGBFKu6wk5vUJPmYQTfdmsw7WW2MNGp6RdKmAH4GodRTCAkzwVxQQp2QxzHZKc1Dk8eHFb1zvroXFZXnXAZ1",
  "key1": "5P9V71Uq1MbVE2rEByEw2eZWhxqseQzG8My3cqyvcyxPyASK3nPU842nTq5Z2X5QR9YptntB5gTvjzxje8cEwx5F",
  "key2": "33dpXPRKHXcYxVdYZx53J1T4SBzNZDucQJxipBGdRUgfacagEBhWqJMjUxcdpN8MALJq4pXfJZydRHHCMZrtQKmX",
  "key3": "4axxVgV2d3rTGJJgo11nN3EPkze3euJr5WmtmcqBNkpeYHRWnoDzAyLAnTLK5Kqhk3reWmKq4pQZ2takmXmcSor7",
  "key4": "LSqJKdqiCunkdTtozPKbo6bKFGCWURRCbkSW1nbaSUfWr2wGBwDLSGT4hYWt8KmxNCd1HSD4M25aEotLLpdgGVu",
  "key5": "5nP9i2LHKX7fGtYYucuT78LBeCQispU2EpU6sapHiaCfqDZSBFB1oCNp6BzCVXdVQ3Jk3zoZisMZr1fu4znTorA9",
  "key6": "3B2K3sKvPaSfANqeSb1pELtpTYtHbKLdVFWxqNVtKZMPHDUmw9AbMPHqAJpdgyJfbVgm7JfMD1KS28BBNad485EQ",
  "key7": "gjLrgab6NbEMPBJ1NhFwLe33JQBzu3qznvGTCEBWRLbWknRYgTU5nfAnFoLSeDPSHkh9S2WxJCDxzXfpsgm2gxt",
  "key8": "4nJBzUxvKMboYTr4KtgGQrPMSRwkT8Fw3awPhBzc2eWmdFZ8iceaU769bzMpKeeqj4JudGYwKZ38G58L54gq4KoU",
  "key9": "336Wr3M4Yhn2AMwMY2AuegKAUuieLiz4mzeX4Vf971Ejc7AA32tqczdbwbjEuWqe9YzKdwctazBg2AfieoAkZ732",
  "key10": "DjP9TBueCpFrRcYxNNzPS2KgVKorQRjCNndjMydhT5oiCo2TwPpMyhkRamZNGC7aFGaWyriLgd8hWTgDzibjVwD",
  "key11": "2wfr8RtzaSa62PRk72R3u25n8JyT2PP9yJJpsq1JuwijcXFbSW2vX3mjpZVDtqnjFpE7dFtYnVd9BfCDpChVSwir",
  "key12": "3r1MKrJ419gUdeteRhCwPmEmdd8Gpmq5GZuKMdE2kgUXy55uRNpcMquxfSvbhaE6hsxf8G6cxEPmde7xTU4uXvpu",
  "key13": "3k5mwP115hQGYCdSpdwkkyArTcVgbSmmwtHezJYwUCiBxEMz2x3JJuDmARHQy4H9GGVXNPEqkbyi27ozHoChkpYR",
  "key14": "5mJtcfBGevpGjfbTydonmz5icfnk9K14zLfpVBXkwwAEuV9mB35ZQeECF1bDVJS36UTZaivxjK9f1n185qE4HPLu",
  "key15": "3EBSgVWVaQKiJiM2kqRNoRe2Ss8q8dEEEKeQhLTMGQNnf3ZxgEUycNEQFrwEuQdLrgpiDucsBGaXP9FcdfR6VC7a",
  "key16": "4hgR984X8pKKd7ZTSuP27tbLx3hYsxnuKbKmNfxDmZA1vPji6FF1iGSCHXBK1hvJNmjEFVfryNdHdiNArbzctEEw",
  "key17": "JEaRBCtkesEk6aDxUty9wVUB7exGpED681hF7df1agVYBBZgpVgXPChbqsyA3oanKpKwFwjqj1nQXiWKNkw3rYM",
  "key18": "3WqiBDJZa7sH3QP7eoCERAaNWuc4nAtwfwLgZwRGDzhferx1GP5f96n3iLZV1ShU9t1w2FuLWT4AUHAqjwxmAAyT",
  "key19": "WeBka46HEvVKCdGZ7ecmURovbrax2RmrZMHZ6irHQP9RgMG5eF8wzUeVW1HGNyVzHgFBaTk52jb1bpxZpw8hciu",
  "key20": "4aJrY3aUnAhfLJDbW6MfcYWUfRXvp63KYLLhjiCP2omHDfZsvFEKz4aJNnLcdg7qPAUmtexFmqAwBkuqXD3AbuGz",
  "key21": "5PYHH4BZNd6VMeGKzh5PsFAZHoDaEoLNUnYBjPLHMDDGEmwqFPy8FDxYpYU6wGmKHHSDGPAMXVyAEa9ErYNYPe43",
  "key22": "2RuMrW1KFpeg7chUjVDV3MAVfKqFyJsNKVbPRFTPmH7vxFvQMYLMuu9NUXRtebzqJJ7anBGVpLNTGeyhsoAn19ch",
  "key23": "PgxJzM7wbwnXvs6E8LBsguP2ymswNck8cAaoAHFbL2TcShg5g7jivhi6NzLPLnsqcgpXfGsCizCSj7i2p4V2dqz",
  "key24": "26dWtacLVweGPqxKvjky4abSpR294D78M14XPRKEeqiR1UDpRGUwsSSrneLqnJuhdsBoPkUiXYUgdbZBrDH1oL5m",
  "key25": "pWeGWMkQKDikuC9B1VMUqoRjTT8MNWP1mkPByUGxg68kZWNy8kt42xLEUTDw7xx8ghfa97hqJ8KckajNdQnorer",
  "key26": "9siKctWzZYyaq8Tnkqx4P7CN4N6sfvnQrPvMunCUcncYeJ2jP7Z49xhJG2QtphTVgEGzCcng3bgG64wQb8Lk2nu",
  "key27": "61Hxvf1JTuE7tkvkq6GdyNQGgKhEp9ZBHwydtGUTGFLhWN8Ufnk8YB8F9iqGFyfBiMDQLAbmwktijgonv3iLz7jo",
  "key28": "4EuxZZRKwGTEhhh2nTWKE8pSWnZT52RTg4YURUCb1X8gy8tZopzKQSptMR1AQrH5gbdV9JtRWkYMvCnfGBLaTUVs",
  "key29": "2LaZsQmyQyXCg5rG1jtvpW8Fudn8gdtFGkBUd2qJQ4r4aWxhyktJUETBfrgvxCkXmzQHyZ74VHwPaeSTWkAATBHg",
  "key30": "2hEdY9UTM6uENzvexVYGnMft1s2XoSwc4LowUvmzkQNKfuj59ftHFHxTtieqMbGEyLJ1cA1BRfZ61BtoNQsq2fVj",
  "key31": "3Rn1715iMNQwG2mFhcK3Q9GidjSBxoiM8iZEC6je6vqtQ8MHLZ7kpf6Dt1CfUsA9qeyBRAkmN3UQ5jpRKjw3rSXF",
  "key32": "3DwxuCJHi1NQuj4qAwaPDzXyKuzHqhgVMCtF2cbws6KubMBwCu4mkxDdqgm871747i545XQnRjvgdobUWsAeiANo",
  "key33": "5QwxyAM9JAX5q9puZLVuZwTrtXrcPwJQ3YtwXG5JJjvJCMU8TXwpS17cnn9G4bdfb7BBcQTrdwjmbNd13EowRfJm",
  "key34": "3dNnxdx4GCs6TBmhugPc6trGMN6MdgfTykvaYfsLMM2Vnf3fmGQA1bb1PCaoznbB8Wboc5KJKMyur4SH8jDnmBH3",
  "key35": "5rak2v22ftfizcrjsSZcHrc7snSDCST6wrH1W1rALinhZiuMmSuAAaoN2VrUEBWShh19h5Qfdk4EDziMngLLpVUM",
  "key36": "58Wf9hs851mvG4WUsTBeyJBMJS87GkCQZ7X7M7PYn6KQHRbpQRbWF4Ln38TMC3FLx7Nc64nCDuXLdyZtHxnjoUQn",
  "key37": "5ehXLF4SpqhMQdS8cAmT2MtyVkscz16i2DAKtG8LwJZVCkKX9DMVHxdjzW79D3pyTWDVaotTqZA5ESVjGirN5NcX",
  "key38": "3DDkH6PCFLJmcM5sUidRaKxNoPDW4jr1ZoYYPr9f3BJyKGwJ8Gpfzrc9D6uF2P2e6anqdfugsnTYbDnGPS5QMQj8"
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
