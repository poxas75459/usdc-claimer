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
    "P24RNjxdianPbz1tV7aM6NerAoFLmCxHWw32QNmh53WnWncfX6Wxyzk33FiYd9hjVn4SJDoQvX9F5kwj8aYAtDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mxM82oQeYrG1p3ZrFePDvub9KokJt2eFy3FGbFFjPi7S56ShU9fMgUfxJBVoRpQobLfvFco5dfPyGrzyYJZMVT",
  "key1": "HFAGGrJvmT7AaX4hE1RvPFCijrTVKNT2HQJ2oVki3HnPYgghktdWEET6QS16BN2ekVsDVEQnBZwTDAuj56RyQgX",
  "key2": "3Q1j6q7wGLvCEyDxRWZRSQDEWeDSRyNK1hmLZubcEWAuwkGETMeq4TdjqkHhAXT4w11wRadtX6zj8qAYCn5YX9yG",
  "key3": "4G1fr4Pz35NDq9HY4GWMXLSJbx3qYoHRhMgZMZMRJggPhZwV6Fww6E6AsmoaxD2zwM4SabRU6UfHHgCWtxtmhUiM",
  "key4": "4fuqCYxiq4mBU9jFdBm6DfwshdhTPH9BK6i7ETLfbCRYZqWh4QB573H5fjRtZ5FtPuLzChQc7frWskk6FLAfASbZ",
  "key5": "2h58qWXgHjVNEtg1fj4nFCqSEGpPtVzy8W2nXcnL8UaMVWepnCJQZ8wEKYcbmq9JZzTAoVWPxrjuygSGvE6zfPPU",
  "key6": "5HRVWT2cLi8wiLEJfXDfc3Jb34gf4eDEmgq7xdc9yXt7VRtmC9kxiYcWcxbkhWraPUNGAxztQhiMGsT4cWYx1Jo",
  "key7": "E1YUBRBxbPp2Aqy6EzTSXf2WkPy7cyjvS42TqPsJfz2zKiSvETavRn7gC1UP2DPBL2QX2jc9zefGYv7SffUw9eW",
  "key8": "4Q58XBirCVnpqgd31uczMr1VajvhXiNvadwNeGyKsYFitQXwjTe6mihLd62vER14KPqutZHnPdTf9pgsij3qMHNd",
  "key9": "5cRc6wrvWYCCWpozY2CFAZKUGaLQVxP4B4EjLbx7v8hQ7EKtLz9Qk7zmvuDnG4nbrD2cdD6s4GCqLEBtirWusVuG",
  "key10": "3c31WFphxoeCg86SHVx5LBznLYMZ7UqnotfbQXT7iAx3tYFqmPZuDGCxdNSeeEvfA5vjwunmYpmsPxEJWfDgExos",
  "key11": "3jxQE9y2n8STXL5eoXmSFaXFgE4A3QzAbtHJXymmUPtRSXN2TiD7SksFrQhmV2r7sysCe93pw1688JaGvgaVbS2Z",
  "key12": "2Nk2NtdFLPi5FG7dMV6JxSSdcX9LZB7NsMPr9Hkby6Dxb3d3aoV7DT5UG1UqpCyCPEJCdvhZMjPgermsMs4hxj1Q",
  "key13": "5S12P9m8CYyQfZDkMvfarUqDgJDqA48fCmAFXzxa55qJhtuDQgjwMZstiskbwWfa5eetLV3RutPK4MKHigz35SP1",
  "key14": "55uF86YKj8Y75kz2XncVexfnxq1H2KJfeFtqY5eQtZAecKXqgRFgtksiJgNtiUBjsJm1TNPHyGqK1vSK39jSiLET",
  "key15": "4tKQwXg2D559ChE9rtW7R5k4yLwDS9qE5Kett31gRuDmKH9Wvdu4qbPAvyR1Shht7dzaVuaRUz1vapCY2cqXoLMV",
  "key16": "4CUkLzfHEzggbwCta7vcGKy7K2P8yLeVicmjwy3hGa4mu1cNoyod94LyEvsMmLDoNWLySfg2L2HoTp4JddukMstt",
  "key17": "5hxQvNjvdPQeQmtqqC6KkfZBZdsv3kemV1nTVcCtRGVkH1Jh4ErKCLzCBKGQtCNbyfcQrXUHF8GqMzstj2Csgz9",
  "key18": "5yYsje4TzeKkv8UdrQbbfCnhDDBRomAEYuXhT9QNV7N7RWWrpKv9oEw5YTM3v79NMjMqkBBu6kde8k11rSYNNSh8",
  "key19": "2kJRmjeQ8VqkxVR7C8RDMe73whsqUSCcyPGCRufEMv4mC7YVLh8cj6qEYKA2wVhn1Pb9wJ7WKZab2yqvHNprzE6s",
  "key20": "Jjo2cfKg5DKpf2ZEavsUAaTMAgasashnNc5kebM7SAgxR8Z9Jwv97PY6VwiF9RrhcbqVxHtZ7Zx7CXqiuGevYJx",
  "key21": "33TsNV63jh9d3tyt97mNDxHPyEz741W5NdYTT5ovuR5cb5Ez2Ubkf94oFyc3j1PH9sSvthEfnNQGEt75nxa4qDfe",
  "key22": "2GMApCfeLEo1B8888SSX55fxwz3MJdJbjh4MdbbZoRANuQkq7vPyYHjWwK3KQoQAYHLnpiyHNuQXYAKBQAstGdZb",
  "key23": "JNnFRd5fcyHVQizVzMDQBqzx2i9WFSYdoBaJv4WknKbibMKJxnAAhnLQemiPvyFsiD8eRHpe1yfqMREw6Y5F4Hw",
  "key24": "42A7XSk64QcoNgpqK1ygWsEr8FkKS17SYL3URRX3Q2Sfd2EjR5cb6iAR38oQa3h4rnHDvxCJyoLdaLKYN43CoUZA",
  "key25": "zEEz2f9KY1wmpDx7rUfSBX5dFqjaSa93rDeKE5NkkNXgCwqVRYSCqfwQ1uUVRqnvT9tcdBxRX67tQBkAxBr1oMU",
  "key26": "5rVvpyS7WN4pn6XkVwo7s29iHyP7EDSDzxke3aBopPdmtk7NysHcJ1ir4BUSPmRNS24oSSfNy9QjDrWGKZxF26qP",
  "key27": "2KPWVVohojzPnMaYyrahztmNNYQiXoach2QcftV55uXKi9UsBMDcdV79vCJLPxQCAAdJWffJbCN4YqX6B4Cj89BF",
  "key28": "3WAFWDh8ZriNE92CKNgF3YF9gj1s4vydoShNJKwVmYEaBEGzx37Szbgxv2Ha5iXv5p6HFPbVhvuLTEZNrbeWp7Aa",
  "key29": "632wED86yw8zPzwMDDh5a8p3zMWu5VHSzSnnDVakzx3MEbpGSd6Um2vuq4VS1sAvvEpDf6rTMrRppj2qAx8VXwBo",
  "key30": "2FAhCLqBgc2brsa45mfq8PmNDxcpxzXe8CrPCJbfD4etG3UCNRFA7xCpWqd77kES7kiEgWmxxk53vmmzZHuvH3hW",
  "key31": "3rVsnK44nE3Eea46Ee6srS8dacpKJ3FQeFiNHbgo5KVAEfMhbzoirH9bAghYjEoniiTopqoH99jmvMxj96Y7h7Pt",
  "key32": "Tz3nhKuki8yUwHMivzAz5ExJBmkmkV6mc9dBsCimJpjbF1Cuvu4GnMLNqdpE3yQRGUdMQ2nRAUG7SRMgXEMNc7N",
  "key33": "3ACScYSMUEESGJXP7nDRgAjns1E9LhHJPCkVdmsYKHnUcKFZ6MMQ1RCNuFe4rve9wjxFer35uBuLSueZvke1P8T9",
  "key34": "29jKg4a8Dh7KUbzf6pkt7EbRZBeS3UyJT3X93NNq9zPpQGdou2QfZcfoFJACHd3ckvdSn8DxHGVX7EkWNPkfKhNe",
  "key35": "2hV3SKNkebZG6A38h3FbMJFyp5P7D54L9e8SYtiBG2TYnDvPox2hZv69f9ctJ2xyoc1PAxVb8TY3LTeJssZZca9x",
  "key36": "38M4SD7wAQDUWCoj5bb3Qx3nPtCtTgXUBkD6V8Pz87pzqHargfhBc5zh8xfLs6bjAV24scWQu9psK6BB5sXz87zL",
  "key37": "53Wd9S7ft9YLcBrjeGvzH6pxLauXD8rRr2wULFXZYUauXs3GXnAJbZYXHGvsUTYFXztt6Hq2h3gTatPtusVPCmtJ",
  "key38": "5yp6URUAKpdBg3MG3EdGMPgcBpnFSFt89JmMTeJeKp7vdvLC5cBgf6QZtMtSskpqVPAppi9JwCgbHeRsRBFQCjfw",
  "key39": "5wpSiuEo4TLniPdqWBVkL1n73GWwMcXavkTf6VPunTB7TTEWsooyQdQw7Jt85KsAbWDR5J4X8xTQ81ZQ6hGw7M3t",
  "key40": "2PygBYfWURRY1urMtw6hNettxJfmPjBvED56vguAmh36CMptEuFucS3DUBxTZ1usbUNNMSRigAXarMiLVuLpAwd3",
  "key41": "2TgEbBkcD8auFvKjje2jPJMabch8ZR7c6gTfgHmHAMzCxtMR4pTqEE4xB3CK5h9jkkVWFo4of4SwtDNsnMSpkjiU",
  "key42": "3jwYMAGxFaK9XvEHJvVF9L1QFzQChE1BWosHFgLrsov6aZEsrSDjp9kfKMVq9JEUjorEkiadjv3U4DkT6tgsxHg2",
  "key43": "32tZceqo7FT5rfV6jKX2STsZKoAQ7ifonAAitUCxwscC2MvmpLrbWyd9NXHT4yHbfHxceo53UgMQJChbU57q1YkP",
  "key44": "3ZHy3RSYLpn7GbLBJYPAgftPAriBk5qPA1ZGzF1MQgvQPRJ6zS2BJC18mSxZF6kUzfUiocrD7Ep317wK9En5wm6v"
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
