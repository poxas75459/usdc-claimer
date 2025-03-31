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
    "5M6ND9xGcFnYta9Geo2TEzux2Pfo5duUHKm2RxqjPDYvQSJA1KEw9omSFkK3YeMwyGzoTy5484gYDmy7ZxeUzq2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DWkBcEjT89E2Zb6sz66VWj7CcfejYX7C5o45ySwYTXEcZSPbQwdUPkiQVe44j8RPATSi1pVU96V1dofQWqYbZE",
  "key1": "29kR8qebrLcsX9RNsneNfi6zmoEoundJ6LRJPKuuJsvCmuVicUsTFqceFNMwMmnqTLMUuY6UtAX4dHyDJfbhsq2f",
  "key2": "4cqMK4Sy5PHzf7Dbpty7DYUR5sfGFaZd91SV5pPx1D4eQh5nZTXCLgnWRQrcGK4bNTr11SmWEphcA7YjwuDx1Y6S",
  "key3": "7kjmSwHwgzGQNigwkRPfghC1fGA4N6wwoxfpCZPM4Zf6noRvtCLvdA3eBgWgvtvzX5bfNRCuu25rP2rfTxWWEYi",
  "key4": "gRa22e6p6SxztHG8a2woXpCr7Exq3eLuTbhzFubF4pQfq1CbzGLpxWTHmSjLktiXEEGgPr8UpZpE4K7MeVXaSUm",
  "key5": "2Pmh5ZAywq2ePj8KiuKXjonZJrqLAWXaP6F6bXgwaXqLp9uruPnbACpjBM32JDjonTnD6n9bt7AnrtBm3x5298xh",
  "key6": "2uTGxdTHyd86MnzU9gKCp7B6MNy8XKdestRa4XCi6MPGgfj498vdXjetvUEkJiEjz4JqZGD8D4PiS5VF7JSpVTqe",
  "key7": "4CjW9vVdbvrr6Jenow1uUHWNMCYB2rS285Fq44w6kv8neHMwC2NCgkcz2dsYUDUfAJYtBxV5mAGB2T9wt7FQExJa",
  "key8": "5oUdRraoZN8ATErdv2y8xbdSfi8zMmNGhBVtH7bLd8A9Rc5in95pmrd4oicHS6RFpxB23bTekBszXpeoiq7EgvUq",
  "key9": "5WASwrZKSNLJ3yk6VdKhzU2vcdM9NE6gjniNipWKSCbPWJifDAPcGWaUHTZzMkGHwMMnGpaEkVd2HGTgmNi2g8PB",
  "key10": "2rMqdbg9T8em9TkmiAjEufB5AHuvXia9zatmtFawADTjyBZ7sj5fLKtBcSgv4eePZC4w5g8EZyL2sVDe1xfc8NLg",
  "key11": "2pLmQrBbSTgwPeZRagvsPPy5LncEDpZ9vs7UsErLh9s66ATQmSWDbKYrFYVGmbq8AJ1rntq7frKkQaKPhDf6NRdy",
  "key12": "bXUyWUMmqtsdpnWgC267XUaz8ckgVuEp7TzHGJaGQrhnyF3KuoCA5xikzrdruwKD2tmM3oR4TwdTdZ5nkXVE9k7",
  "key13": "2MLhX4Uw43w5H5tKHDmPgb89d2weRtMQJmnFPvxevV6QLFMwAKpwsQQeBJfiaYSh8FH2wUvPnCs1CbeDLQJoHAVD",
  "key14": "3W1XcyQaWVYdjSwTjy2sx3g4zLtvFJjusyLKRkTDvuVBoi4dR3cVBJyDVvzJU99zLrGpWUmcYuHWMk6DF4SRASHd",
  "key15": "2kKzj6jk4SPJoz55eZ37Jt2BNA9ZUCHRR1fLSEWt4JDchatE9Ucgv4GiRFxuNEeTaYScfBqvzJ4TrFg1fNe9dsPi",
  "key16": "sr3C9a613Rqm9obj9Mx5hoAQgzPkCn4FmXBsbo52EKXfUAkU2JEjf278YPmDsMjseHjLYD1VhqenWJJ9eBAR5SS",
  "key17": "4YgHQDaKHUxjsmQ6iJ2oFJ784DpoA3ZPcm9Y2ehJdHi8kYcSs9jifXiVJMdbbfDFTWfj9cqYL9NzcwqGTT9Qr9hF",
  "key18": "5SSZ3JZxUUP8oQaNVdLnbJvvpmUMRxqiU6muWcFLhdt2D9RaauPyb9om5McS1vZGiYYK2PeCmNa8xgMqQAGMYqmm",
  "key19": "g3TVYKgdjq8FpVAJBAm5MqFkxit8Lr4LH2FES4X2N8oZFmEUAAxrdnrkzGKQRQQwvVHUT4MLQetkmeoB7J322De",
  "key20": "66DDfKtf1xxCEK28xEnJQx6jX3kP95kNfCqSFcmsaYXn49LccjBHhuRQbCKCb59gY5PV9uWb7AkvKxV4AQftAdjB",
  "key21": "JsNfjM63NTRgh6hDiqwH3neQUfRS6Bi4wwu7pJ9CTtrYS4EsicfB2REu2omih2ys6ErcgnTtY8wP2KLJsVAjd4f",
  "key22": "52Azja7oYtsjqgZBD8YfxB1nns5q7V5iTsZQnQ2xmwd6gfCJyxazjfWoeahMrmDwfD2F1kAmy9ujWHJiPdBZj1WY",
  "key23": "47mACX5pnvvV3V66MBnTSxkBfCVi53k6Ntc7zxB9czfPwTKDbd151K5kNtuyiXnzA728ogN8tjTZLyKxgGLbnMV6",
  "key24": "4c89it4nebZ3E6svtQqHijNDaTiP4HduU756jzyuipw3mvfEMCqWUwvzgHgCGYogMQyeKyTXguAFL2D8G3bPshg1",
  "key25": "2ziGg4nU1rHVajAStrjFUQHAQDsjagz2Fp6Q65mubWMCF1gRu7mWt9jQpQpX7MUPT3uWih16BaHxF1FoX1ojnjpd",
  "key26": "43udASHCdvUsH3WZBtep6ov9Pr6BRJ4UAB6HrCsVN4LwsetRdWLNHEqt1Kr4NCBgC9mn3FmmaHBqW6kh36TB2JaP",
  "key27": "518oDBpzTGf6Vmpj4YDYBHaRcDz8wSCu9he8yFwHQ51XBGzS5Jcdst3U5JqfTSUMc43ZYcPALy611zbkXLwRwPSF",
  "key28": "5VhXvPdtjjMF8KdcGunHHvF7Xtgop3Yk1nomZLwr3U8VRYz36BCTC1agqAhxuoTgb8YDFjZAYEZrhcbmgX8VGEho",
  "key29": "2o9p9Eh5LP9mMHvAenKtXUwEUNizKjDsc7fUUJpCNXCAvp9io2GZSYJqv77z6rtbdkm9pP3d3RzUQfJX6zmNRBur",
  "key30": "4xERHkzKUdVTiNHhbQW4jipFF8v6uqj483iHwnaXp4WNfVFqNC6V9HRYFL7kwD9S12fqVe9Az3HeegBnYXAM8Xtg",
  "key31": "5Gp939TKUDzM78szbDKHsm7VfBGcXH1NC7oBUjENtGGSFAKpw8Ktbs3zoymncDRn4CVx3y6ddbMAciE1fkCnkwc3",
  "key32": "5EUWQoR5qADEHRNdCqDcdxiuC8RaBaXWw24Jetav92ohFqYZEbtGTtcrV5Gmf1trAhSV7Qvppu2JMDcmbidfWDTa",
  "key33": "kXdxbgRTQ4rs4yNNecAEAW5VdFe9UoqgfS8LGLKSAZSSuF1UCoSGkRRLk49SL8pFRAMcFQr19QEzZtk3bnAic69",
  "key34": "31H2i2ujCXXLzLUXqFnBTAnzQQyRKeFt8MipsDDyXMuoxXFYVzPwEcKtMrHgmaQfsAUYeGBVFLdyQ7MYXVK2x3MY",
  "key35": "4sJZDyAoeYDkWwUkhZ12LHAvsQ3Qo4TcWUxsSZxX2JBAvpCSzbAL2mx6HPeoini15JBnZsVip7K9zX7bFkXMRaYy",
  "key36": "3V6TVLwgiDku57DTzMw1AFJUUTRZDou6B79YPUghMWt9Jn9D5qaXdPcQr8ztJ9JL2QAZrJHxCr5x8P3zUgzcPSd7",
  "key37": "4Xiyc93GcsZejgGajCQqHFMBsQtdmWvhEbxH4JB6pRFZ8CfXGDeTz7yrFK9b6QfY75q1RtJN5jce5Xkdos5AgZLS",
  "key38": "4zV8CEfHXSf9GARHCNqb5wdJSLtDPMLDbNG1Q6Lib2mTAjfEQeMyWkBf1KdfVipxsjGndkUAAe2cszPovzENo99n",
  "key39": "5u6kJcz9iDBjGc3X9PHJHUULY87UahmyWZJ9DCg3pNSsWz6eodTLQG9YJF8cVCqMoHGvNxaPBENxEeU8guoi9Qcp",
  "key40": "3iP7idnPj12c5r8qHdktF1xt8iTVTqogdJtjYaufTN4vAYzTx3dajktAApTfMoKZr37yzxRSvYbL6gv3sSUrhWUj"
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
