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
    "4fXx36fiKq27gs5iZQ1wTfZXiLQ4xHApbTVmSvfkHhzmAvyRcwkzBdgNakoUpqByFzgXYtR3259tfkDiZ7gsNvEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMEofpHSEZfBNyy3aK13RNuDJmXqN9eeK2WPyzpmSNz69D7H3yb3F5W3X2ujPfkw8wygUu2AQ2pHXxMnmXqftm9",
  "key1": "LjZ9wVtaqxmvGrSf7NdeME2kUsu8QtDxRa7ofD5wvurMegg61cSQPArLHKEJkvEAd93eagqYBHhrCDp1rgSxkgG",
  "key2": "22pEchz6BNCz5SvHWa5Rp6gKHe3x5xYoKFckNgDBUChz85tCD2cqitKV8gtLbASzpLnCQxdrcgJmDTVGwn9H4Hrz",
  "key3": "4fDAbXeDpNqerybgXH8wA22fYtmiSt9CvQKSSBuHgqypzwBywvW75PxSr2AhVt9q44GFuGcAVN47MdvU8gLikLVz",
  "key4": "2AgUZhj3VDAFkgzZz4XGCkNeVKHJ9WWLo5bLQyrtfsYuYTdTsnM6Qdc6Wb6T9HUqiKwCrPUv42sezVFFH3AZx92f",
  "key5": "3HXrL7P3KoZjJpG24awPVuT44gANmvAfEVNMZoyBKRBvmVoX3ydnHym79KxoYJDef6wDs293TyS5STyVxo6YdsnH",
  "key6": "4YjBrzh9vgH8WDTGCwQEWrznVREqFqf5tryTQRvdLCJTGiw4VPrGQcx2cV9cuz5WQXCAp4NQMH2FigWM1WcBbwyP",
  "key7": "2vge7NS9DGz1HgS35dp3K5Cbj5n1ZnmNnJAeAvY2W1E1MoQg3bJmRo1CJyULY6keDjDTeHkK7tCwf2pU1ASecncj",
  "key8": "5D6dgH1ueho1XvnwANx1eK8FC1rV28haZnG65zZUymdjMMmX2wJB8jHwg9mPuh8S4xYNhb2VymAB8gybhTdtdQsk",
  "key9": "4wnV9RHmGGrANZ6FaTfNupfqCS76PgCURSzd1cU2DiCFisgrPfANQi5cfb4icqxsgQY6Xt9QkMS9nmD2Y6ki5jfD",
  "key10": "4Edr8G11G8Du8iq81K7Mf8Vtc4n4mDzC5wq2rywq6sgwXZrfkKx7wfAPEfhBxVZhKeKDhoTwUpCtbJnJJL55gCgU",
  "key11": "2diTKkiyJeY9bhN4qrKsJoZdaWc8YtpMn1ePapQKUy3bYcvPYWxaiTV9x9FMWm7QgWKQSpMHiegif3ZFwpXh5Lbh",
  "key12": "hFDNfMS9au8AsACwm7x1sbSQLh6g9B4DrWDJA7fqisML5SdFCK1R7x39Yxsv1vtcerDjP6NxrfUdA8Ya6x2k7qZ",
  "key13": "4p9HRmd7qakWJ8ULVnaYCninyaV2HXEAXQzBmbuggeJcbGs5Wj1UiucadM3NUcKQegHH48XG9emngjkUejc8EUv6",
  "key14": "zkaY815zSG2dpatmf8uVvmjefCUGfYGu7zo1KFscdJAVXcA9YqdYjNe3NRnYWhkN3yUJ6QP6qYsqxj1Sco3E634",
  "key15": "5jukimdKj8NsvgarG1F61iGLufJBeSjepUQ7M6CrzS4GyZEfN1rJaUExETe2X4agrBCzuQXciTFYeiTLufdG7Rpg",
  "key16": "3LKpvazA7qTRnZUBSgyF4zkE2ASwq5heygH8NjGDiGRAVsTJBpyy39oBJKp5zTQH4rbxNfMBmPMaEEdiUe3EfVHq",
  "key17": "2zmt4L7aafFSySsjDkj6nojSeUeuz61qfPyMTeo385Kn2vbKNjdwZsVzH25ddRnD8zCmgPFN1JJZfDsJJcmTJfvB",
  "key18": "33pEpJtrNi9FMEDnpPM8GhqnfLx7seTsNNYuLRptbbrGZf5qTjt1jxdBJrA68qFCtp1X1V6Uf36GQWzm5DATBV1Z",
  "key19": "5hzgZtGZ8VP6361j5tk2uqNdHhQjGz7jhJqeGVGuf4M4eWPBH4d8BBkbEevn3VcNiBMP6eNcTaMnmwMNAQBEauyY",
  "key20": "3k9qpMbBUVgTyGi8zj9kQBmCsCWczDtTauELFdNPd7rGk9KN339LAMGeiQB2fJ292iM4gqpvyq5dKVxcoJG3cGe3",
  "key21": "FiQqZezj5QJ4QRk2q7mNGj5eiBgQiGXr9aawkhJEVqoPEkTn5fPWU4jpYwPRsM5kNCLPb7zofKuze8aCXgQtzxr",
  "key22": "5P4v2ffw7Pf26N431NTGjiwWtWuL2PdmorrfLSx2P47hDGHUDZkGMC35HUuqa1EHvxgvnmvdVuAvYs8CDXvwfWH2",
  "key23": "5PmcfnEKHdB2ciAm5XWhXDVCbEt2CVjwHz374e11zhD7WS24bc4uC5UqTkNSBtw6JnjqHbr9ZzJt1enz5YKDjW4b",
  "key24": "2yr9to9UYu1vFbRLwYBGhxzxHjEnrXsCTGPWpRDixiySM5XUgLf3RPSh9nFvdmsw7Y8N6m4JjkMa3KeYAdQf5s52",
  "key25": "4fgyWm1zhRHoiLvcSGGk9s5ZaWEPB4pCJLAZLtTNgzbL3Ui1nnAqXU3Bo3uiHmY8o8qBJs97J5zrcb9Q59w1oYmz",
  "key26": "GM6ts6vxMxnTAGvhAiacU2RVZxdMUcpizrkj2emznUeXk6FzrnSdQLj4a4oNQkyPyiqAxNquT6zBCyW9DpV71qY",
  "key27": "3DTGWXBChP82VNGcJ7Gz82w3S1TxKcmiMPbUMzwNY62WqHbANxSEGo1dbhczcZ4SeZqwSTV15WfRvsF8o8k4rx4x",
  "key28": "4eeoPcZyZQVmFJqHYWUFMgrQu9GNL6rGhwbuzQeLvgUCiHvYpyJ57YekaMZ9dd2z9Cn1Qh35kZRYUsLXNgxp6NTR",
  "key29": "4vDuB1sY2ft4iiQygtN3UufiaGuFzzV1793a2j9DwM4tkuuvQTxqPFjgQfZf6fq8Y5fcUBZaBRGsLQNUWSnChEVG",
  "key30": "5PHy7n7m8rJ5vLN52mHhZNbsprJu7NU69N9sHRziGn8JUsuoD3U1WzHFTfBrhQaRZmmw7wzvcopHxp4uApQcqjjX",
  "key31": "hPRYbGZV2UEnLc3vjYhaBSW4oZms48rEJKqFnuhpnJJCdzZgLxA2LD925bEiDeyWsd8tSZMwjCBoGpyFDPdrgBN",
  "key32": "foUx8C2QjAMwNNm8JxfXDPRWAoQ8WDKFFJYGJ1yx4qQGBuKoVEPoyjr56EqorVuCPuAJuUnUpZzvwGreWHpbfp4",
  "key33": "46PnXjvju1KyoHqcFGmoofgdUfF7GaJqTCqmvytUXfUY5iheg6N25giTVBbXhdz8d5HvVHtujKmgboBVEKSU6zHj",
  "key34": "5518FRPpieBcD8k4E8gXcL9Yx2qciEdUpKKMMvnY4fyVJDUduBEpMEggsuxfot3HeAX3TmeMQNEFXJyukZk8G6ZY",
  "key35": "4SasUNNfcQfqYXGedVHYdyzKykmKqZSPwhDDsQa47UxfKL3AHfQ3ynGxdYxRp6DL5WpmDci49JXiMihhXdC1WPG2",
  "key36": "fTSEN4aXZ5JanB7KBV5KoDJM2M6d9h1KfEpa2Ri6P9xzxkuUNagEy5FLnvK9FYkTf7q4wrQE27vrxjWKj8eiHHz",
  "key37": "55dEmrcEN5n5Qvi6Cp1wp7Xgmix6ji47eMMw841oNZxduwuhwunHJEQ8cviRUmZoBw3RBfGcjQU9CMhjCYFwFxnR",
  "key38": "4ESNf8rngoufCaeHx6DnpX5HvyKPDFzpEL4m57PLhqCuWdRJbkfT6UySB5QHFda6k1H5skoFpdAtXLSc6e6pq74U",
  "key39": "DLG5mevG6RYyt4G1Y9pqyNijRLqsQ9kXK5VDBTMVKyRxtdfrfvWkwRCqJUCagsbpmL4Pbr7VoKsURApjWVjeTPy",
  "key40": "UFLYPAg9WCEkbaPsaKsRQJB2Z3ysQef2mt7vDss85BnkeYmmPkhQcwtixw5cW2cBdiv1UVNWRX8QBqXDVyCWLZA",
  "key41": "254DGGHoePmTjiagHPTPz2J4gxA5fX2BwrwGGj87Rw8H88LbMj3K3G2ubNMSCMX5RWkdKx2MvEVgsJbm3RjXTVyL",
  "key42": "61zVddRHa1LXEngE6WEEeuGxSrFanGLSh5HQ4MmCq66GZUKkFqcts4KsPWRFdcrfz6zYptzxAaRkZE45iuSQj114",
  "key43": "6mFxnTFXehVZxnSvgzddk3kPYn9zNBfiSuiRKefywzUZi3xWsTszxycdcJukqgPiFisSBswuDGy8r6HWU4ny1ut",
  "key44": "iBeNc35ouJCFKvjhnNRNRUammXMgghsbmnPBGLEUws3uLdd5xteSWq7EHDLXR1kDBU2yjgG17voNwq85VfXnx2q",
  "key45": "33tQrLPBHojWgJHA1S6Z4CdSJgLpxu3yQoQrsXgoDCumYscMbdo3FAfDcn38aivwhPPhhWr9UHCZzqBZFg4bs3sT",
  "key46": "9H2RMHXUCSnNvkcCpWYYiBQY3p7yDb1gfQwZoC3t5eQd4YPsdzMUTJoK4LxGxM94ZcKSwoCU4NUUvr9Qf7zv5nh"
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
