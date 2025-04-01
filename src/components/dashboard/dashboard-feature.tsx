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
    "5zUgfzi1aN3ybuFRvndQoPsp8PE4BaKqCtS6pgP3iLPDdAuZaMixDupkqKkFQk8VjzpAXiMy17XW9N6ab9cJ9Ajm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnEYgXWxUAiFKDGjnRCGaniX55evhzcSusc3Jwci8k2DfmipNn1yfqCEWHdYuQCVNBAM39zjEJm5CayyLhHcox",
  "key1": "qz58rEgU1bSkx5BCHTH3WUxnaQDWv8MFAGdMZ7Xs9ZVaCa5JMjRtDtxvejGptTJnVdAd7TCde2fG4KpMEZoWP2M",
  "key2": "3JJboEGkGdU83RpdEpyjZh7f2SAhkACzkPYWC3TBeN16JPxCpRbQzTx8ddGs81zvXfea6CEoAAYCLpS7TSn7EhWh",
  "key3": "2xf6KfMyzcSGJ1RNH2UQ8cgCrH8FSURaDMtuiPJhG7VbTp1jCStSH7tyFrgwR2xXZkXvqKMvyTxDScvaQD23KLEM",
  "key4": "2GUpMKyaVSevWDiPpkEvyH6zcxH4mvVBjuN73ZxHfgHKE1tHiuFjvXyHtu4dULCjQkspeEfw9NEE3MZpciMpSADe",
  "key5": "2grcAFdcRpz7MF1RmKwrmKAoFqJonwaC1UJNVTCmHd2Q7hifSn1EDE3roocyxjU5DFNfwDg2oQufYCuMtzYGr1Ei",
  "key6": "JHzB38cKezFARKiPb9XgmNNe7SZUnu5DJvTjV8yTDeuE5GLFAC9WPDJh4Bnp6mUCHx7jr27Mnkgem4e7dDmwcYR",
  "key7": "3uzGxnn5v66KANVQdYfm163sDg6UXgDVs5CAJP8fmkDcXu4RecZQ8SyWxaizyDCNRaFZSk4d5d5GE5A7PMBnweqo",
  "key8": "3hcou3a5SstzHrVniqvjKRvc2FjFxUcEsHqHoWygdvLYCpp8KJfgowjUix1ZMMBHCqFJThc4pLxzhqvyBcqUtXRv",
  "key9": "29uj9En9wrQsS589SLtVKp7QE2PxQ2E52g5jd76cUiCVJoyrxDGNukQis2r1xT2UNUQT1iK8Y1ADa11gNS182MEq",
  "key10": "5GouKPNn5utN7bSzpFF2ukr7txm1D8EcsqCHcUwLVWHbxRAHWPL1es6R4fgCp83oc5d8WxUHpAXB37c6dpjfHdMc",
  "key11": "2VjKfuAMCumL6AgfKQSAg68vMWP4kHjCjMxMweomuk3SyHGBbNbc4vCuAQiQb2po7ev7DvxrVsGbQ84Th8FUEwcD",
  "key12": "5TMHKSbVFjhhQpDE3obo8hVxricP4K2KBHSJT4j92SoowSG6sZ4sgehWfPqqK41TGvFDYEgWHBRhUg1RUGStPTa3",
  "key13": "4QZJrmQnThWyTXfzhZnLHkWHMsbGSggNjXpDnotxNiza1Q6cwPNpVW4h93kumHzUJfU23eBY5qYzA73eKc4ZporD",
  "key14": "2oqZMKBZ2Fm4WhLVmShWeBYuDSugAAQSam5YU9GfpL6Xyb2dzKpXuSKKv4wJMAiR1yDP53rmZ7reuZTno7hoKvYU",
  "key15": "5kiyCq84YSjTtk8tX56RNCad4JQpNkRKSgPjnXNLG8rX7Jpov42AL5nNG1nHH7qBim79Z7z8wNftw7BB8bZQgD2W",
  "key16": "2qwj8wvSju43kaT2u6rHEfAxYDMUauYmG5czFAPgtRLhXnVaQFc64VjSjrjSsayFoPFKBamcFXCbvPGhHJkRXqbg",
  "key17": "4nwD7mKrXA8mGdU74WVyXYEdxJ5isHyGeNX4d8Lj8VSCiJzT1Z795toyE15wmeUY4WYZd4wHBFgnoQVZNFzGMtFQ",
  "key18": "5UkXvEXtrhqeFPehVLS3f1jBZdyo25dh8PxRmPEhHFm294qQiBHDx4BEs2fymAHr27GMd6AT1yxNiNkgVeeK9Rt6",
  "key19": "3VVcAga3Kzk9BLbUECRf65UxQb8yGRcfJkBQGSGugjzywmB5pHtRDRxrqjhLmCv3eRhbFgi1Dtaes2bvVWDFhkEC",
  "key20": "4cuyHpu7tGGpLbsBHnfoRCd3GiNw6hVRkL5s2UjNkNFZoURDYNQhapfY8djVZ6qELoLRetrEkENXQH9z2brNbPV1",
  "key21": "J9G9nPaGaRza58faRGpwv9tmbGsKAN9SoWN3zp27GTFVTH5ANmGmG7Q6PNkbtWgPro3J4wtMMiPn3r3TocMcHYr",
  "key22": "3benpDDZeYXV2mZVMD1kYQenbuVCCE2W7iKrTjLWk3ZCJ3dxmnWaMjDGZRBrHX3ymBjof5NThRZHogpyiPx6bqgA",
  "key23": "e8jKSRdBrHd9ihnX573o2m8zUqSf3N3xqJousMkmeyu4bM5a6Xe35RE7QjzEHxBhkABiPCThLFgSymGXsmtDbzM",
  "key24": "MbYapeiqYxTg5Q4VCaJEVkJhdEF3o7eTzphT1Qgk5H1fNnaCThcrzh8CQY3qvH4quykxeJdT9XEQnM9NPqRn6MZ",
  "key25": "2WREEd6gwqXzi92KYYBRXJ2m3T4QL1HrB7fgshTiNZjqg8vtETXdteqdURx1iyHKSzvQoAdRufJrnMbECTfsKxf4",
  "key26": "4Y2eATREstTb72UF5QbKW82a6Xqd2zxUfp6pdErddDefC5XuatVHsgA6KvYbXjZDMNDPLbC9KtzAbWNYzDpwENmh",
  "key27": "9tgsQuVFD6TEQGK4VY5yQM8hm1wLSszwYpcyrLtCPcuPYJFyRRUhey5qhAsvziRtvA5wBEacbzgBvpE58fLA2aK",
  "key28": "3vLT37tzY8aEMJXdsskPbnzkBko8GBhVnqcGSW2NXRFJ6ACRp5GYCiL2t2P23x4hQrmfbBmFoaU2dbqGkHL6h62t",
  "key29": "djaQsLQ4RTGPjke25An9QZzXYpZLT26TN3q4F7h1RtTVVA5jpW2mzrVC4yGex7CTqYQR7tSwB8xB28EXmgYkeY9",
  "key30": "3CLcBULU6qDfJzXCCgfjGUnTnst5PNvXBYnd6SjjbSj77kGZbHYJ5zn4v1wL9TfXNZZKYoQpYUZugkgTrb6dLDdi",
  "key31": "3Df1ZJX25L9nHT24Q1SwcKeujs2SxovtT1WypycikKuQ15bgGv76U2cRLdJPLXWXaWCqKuCwk5HMXxXZi1JLVUFG",
  "key32": "2kxpFWRJABMox6pe95aGU5aXRHFjnBmMtNMeg9FmdxtGXtjnj5XeKvZmqUpwkQrW3rxpkx4PCwcG1r9griLL8ZiT",
  "key33": "5SteKtM7UMp9rQTv6TuNM8QYmPtqo5ipH1M9SRKkxkN1V3TvfA1ypTQRX9ec3nGNUts6u9n9YCNbiLyTDFMN13jb",
  "key34": "4Gxq4ZEp1NCCCZcCDXgts1PDrUxxMEV3q5qtRmWAuSvFUnzyeuKauLuk2s8qeizRoNo9emZ6cxhph4PN9bg3jpFu",
  "key35": "c83D5VhSbiKCbnzRTyXqtXNaWZruvAbH1CsRHG9WZ7dtDBeESxfpenyQ92EzCuxVDuUFjYX4ejAiJCbRc68mHmE",
  "key36": "5Qw3Yj4Gy4EJEb8EhzdModH4F2KpCjpywDPULQyXpc42yNbAcnZvpgPhjJg5pebcC7ETuHg3iEQi7JY6UD1wgdeW",
  "key37": "2pVLb6f8o2eSyZixrFsX1Ku7oT7ayeTW8hrK4ZKJPnvj3XDVcEU363grrz7GKUvnHAjRkVbSbQ2zmQRuRGNdbo1t",
  "key38": "2yp4cuC3zziaWsCsHRVwhKsqk2cCqu2WHDmJjSSKmNqmszqjoDBhiy1nkh8XkSzXoZd48aSSW2QrH65yAtzdDXAk",
  "key39": "4pjr2JrdFx7HYxS4wiekqeMicBJyACxAi43Ja53kB9awyZMRk2ky8Ch1rMzuZckFsCy1R2c11gHVPq11PrgXcLd7",
  "key40": "4Xfq5DKyRqSuCFuQyR7pcARjV7mmNn1ztYkMAnor6w2KLR5pkbF9SQTAZxtVvQ2qPWCVoY8vrdzKqGEt94aDwFfv"
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
