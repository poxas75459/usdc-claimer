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
    "SHkVJ5rFqvaj7Y5uRLPHWZs59qC4AtcFNSZ4buuYqVfvx4CTox1LJbATU5oA5dxWi2SdphFnbDghySJg6EDbyfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aa8bP1fUVevgdkbc3PR2oukg7kdej7GnqdBJSZos1CBmz1UJeVbRkb8RcWzyx2gjUA4oBmBk3oDgmQowEcstaPR",
  "key1": "4QTbGq8pmxzmqPYY7xeRMDPxvrRytdpBRwd9vJGEiytc37nzwRqjsHR3sCzoT1uAuMjBrrfFeJTBEGYdU4oXA25C",
  "key2": "52d64aZBJtpCGofed7gxg6YX679xdCCnwPJNxC8HUcbLiojPVX8iLdLyfPonhgEZsxFhTC5wYt3g2VgD5RMz7fKk",
  "key3": "5pd8soyNkQg8YBMcZarKqj6rx5Yabmt47QdYc5sCTUfFmHruTGA3uD5EK9GPmFxfcZ4x2E43K91sjEmG8fXYrroJ",
  "key4": "5AjHh56WvUJyaQUffyWKrQhGf1TQZ3z5BBZKP4skySVGhqYjDqQPTFzk7wUGtXDgxJyqd1izzhinDTucU4jtTxuQ",
  "key5": "4CCUbt193MVD64pd7GZDgvaMrahqfBC2jBx7iXJYoZyRkeq36oFgCm2TiUWgLjWZ3knw4be3zDBZCSSAC4x3KJVW",
  "key6": "4Mh6ECEkZXcGGo1FexrssMt6Tg1mmMbkaqQgv2dHcmdq6J9nEt4XZ1QNkPjtLxBDN8j8Kwkmyd5ohfSpvATKWEbH",
  "key7": "43XkPKiCGq5rchx9xFJi5chqXLqFGMg3Up3YnkSqZTL1h9MXpCWNjXQcMzWN5C25b5SiSstjsKL4gTWPaBDWZfUs",
  "key8": "3kvoL91Huhvm3JFAsCYTiwQQ2UQYNmHDbuKnPxyYAgf7oDAXrTPm7RnSyiN4TZRGP9Nd5QDRT6S8y58Nsvui3DE2",
  "key9": "4soZniWfMpeBjg6h91bJNP5BQtJZGktvQLnfPpoUwMmqXbDMXruSTaWHfLjFjTLhHytJTuE8ky4cFTGo6BrRbuq5",
  "key10": "2zqCPCF6c6S34aRf2zC44CZp3LYZDCGxqXMC5Cwbnpj5NGefC8Q26bdvpbnXa5QJZdNhVGxfxUZDwkgX6hmySnmR",
  "key11": "3SeitMaVmaSy8sRvyaRmCGhb1TxCtgUci6VSiMRFnSFR8zdkT2rpm9RETHrH3Yf3c5m4RTLz7LBBz3ZpV4hdD4PZ",
  "key12": "2uBZTTJM6Goxw4XZMMx3xGxm7v6hH2b38ZEJKvbtGFZcSyEdx4FZx45Dxw8GUBwepMWf5wieoFwEgght8QknGRWp",
  "key13": "5a73z4gprMgDkwFh4LKP32szFWi1kfG64up2QYfBV6TX7kQb6eriFgftqDBwmSiwN7WA9YbGrrbjySpnRwJFHdzm",
  "key14": "3XW8xNAJheACuXyE2kfqKRDCDCXxdnMySJFgJDzTzutNTXzrW54fnb37X9ArxhTnmy7PFz4v7T6qdTvUaCkd2Agu",
  "key15": "4fSA39vj3UdXeuzwBV8Ni3pxceXVJ6jpURZs7JUGXx4AT9SeKBZDjkyPmR4CvxkYUppFz8zXrfRL67rrkEs9Dy8E",
  "key16": "2Hn2K1SejHfczumMbrrSAT7HXmEohGUVegm1aiiisxqXCLuDrLVojNEWgM6RMmvijSQ9ox4Q3FMYYhzcU1xSbRrp",
  "key17": "3ZAcm6XhGeSp5qrkQV8HQnuJ4Q1boNQwwk8p6g39FDjkBoiwi4g9AnRTRJte5GZxfguH2HZZH2rJp8dpDWobgLdh",
  "key18": "j43xB7ew3HHqkASjz1BwHtJDVnz7MUEhwCUgPEDpqdoiSBDQBb9fAsPwU2KWJKs1uJ3Wu1pK32TnVEhnE3Q9TWA",
  "key19": "4Q69zT3Nns5uJPo8QYfpzqB5FVP66CBCAU9Qg2AfWthCVY9mYiT53HEkG9htEjwFFQUpWoWatTGKjb2dBjb1h6ZB",
  "key20": "3k3MKCWNdbnVgSvvG73Rpzet3SSa8qfG6CTwQhYbeTF8Jy1xBM3FHtnDqMByMY3MuniF3i43scSb7cns4P7nzv3T",
  "key21": "2LVHenS9dGXPFbgAjbWLnAtm5MJ8mFWeUdpsYHm2BsjHJ7ew4PHkeUNDdyKfkc87SFyEqrhLHxwMwkMGMTV5mPEZ",
  "key22": "2BsMbDiy4m2rvnTu38YB915eona6k2HfLQBkJD7KpmnwgxYnjwvUZQ9CoJU6AnUDLkPGd3MPsBnN8GqFCWMJyZK9",
  "key23": "3y26kM4kCz2z1FU1zXiK9PKD4t9bwkBvuFsaS935fkEMEA8KR1yn16ndSuW5ph62wqDsiPcKyxJBnxkrnTPb5rxz",
  "key24": "3mXdPEsx6SgLmAiLQPwZrKWnfXzUWM44SSRk7kD1iKP8XaZrGcGu8uRTeRusUzz5uTRS7jS7P9btPtALYs3oF71G",
  "key25": "4UiFTPa87SnAfm5t91oYQ96gm4nW8Q8xs2f2JCwsRfuRFMxVx8Z8SbfXzAxt7UKDyUe1K3XVX1A9B4fnvTZWsv4K",
  "key26": "27pSSY2nWK5VL4zBoAhBAGJ5MadockBKxhxVU8QHpgsFrS7DN7UsU6S3RDXMps8BW7P3hwum9cU9gvc8MjyV4CZt",
  "key27": "2T7fBCbxBHVfWx3twDfuUNkRsyVTwHwDh2P7zKubAtE1ChLJF6odNecFT2sa1nP6YUvafVTboABpDiV3Emdo4mdg",
  "key28": "5uhGZsLh8MDCb5AP8JTtEQCX6JFF2qzLJ313KjmLWJ82n2ePGkiYHGrMH5BKxJFmPktL1uNNC5iixK7n7dG7LnPE",
  "key29": "4TYhbC9YCN8yGf6rp6s5endo3Tq95tGhwqLdRzVdeUYHG3W2U3NBxnDQnU1jdW2Ubg9fvDQbNQ5guZgjbU1FLLaP",
  "key30": "2DjtieeTQScU4RMELq1gsxG1PXAFvcxEaM1xrjPJcWzE6yaJ8mzGTLtWVPT6JrASkA3EQXGPJjQdU9XH4qYvuYeY",
  "key31": "xE7mgVugPhKFXvuaSXKoRXad4Yx7g8nLjE2FEiFgsZwg9Zd5srzGJoip5u443osXNodU8DWgXDZMGxVqUtc2sJ5",
  "key32": "4cZGqEzQ7QqSx1WKAeqARY8oiNceVZxztxs8jGd29Qg21Zxm5RnxzS5q4gjFHzT3GYtxcv9Pov48Kwb2XcV9uiju",
  "key33": "3CdCMt6iZTWEawWARc2D1mhLgHSGq5Znv8VAYasXktKrrKZ4TFzsrro7xE9SYfHe33nDxwPSd73LShXK99eoVjWM",
  "key34": "2AGV9Zb9WPPApPy5zraJW2cQyvpAUZQp17Pt4aza6tGhmX5chTUALZ7U6Mc2bdCDfcwEGxPggDgvDBXufsnfLCyt",
  "key35": "C924n6QcXJLzbAbhDZaojb5s1wH3EPe3y5FFq5rPU4QpxyugwvxSkvSpr1TUmVrykzo5TaFs2nCcRBwaoV6yMbR",
  "key36": "2GaRh8MkpKnHSLun542ttoWFnARmoxYFNSszZyoMzeYyzt1v6PR8fMQA2x5oKwPXuZJzG5kX4pdJK7Yqd3fiK5p",
  "key37": "3pBbfjiTHTLKkzJz6A55gbuR4tGw23iouz294gRcM9RKESAqob8NG2xHyvo88xtzJWACSHPxrZUGmNnMZnUtqa6p",
  "key38": "2Rf43wgMFZiukxKRJMc3RkLYCgWBd3tAeCbLyoM6ncMaJpoAF76vxQfKH8R1rCk7hJpavPDEg1i5qZvop6VZ1P6y",
  "key39": "suKAVnr34igABdaZHEmtdHDQ4xnCZCbZJEzLBn6QFKfqg2a2j5iENHGuQjA7rGa7ZiVkj1GhtJ5Zd1abqjn21AH",
  "key40": "nQEmAiZUXc7QLAykgTiQekVtn4c3LS3m2qsuzCEJqcKiB9yRdkSZ9adEjnQy8FRUoEgs2qqfQxt3KQASvs87W2z",
  "key41": "5CrAQUAr7DHqrjq2MUQZz92ZhHHuPvPsNBGkggtHHa9YegSwzhHinJ8dGgTc6eyaYa2GjDTiuk8BKE5yMzf9CVLf",
  "key42": "58hgZr4DsvANKUnbeNqcV7pDdcLkQwNwisytL9bx6tMCsdirRKpt8UCEJfaHBTe2FKzwW3eaS3cePSUUPARLDDbF",
  "key43": "5K3orFf1Ejwy2CAj61fSaW1YMNyL97UmuJKzjYjybyhgYHLZgk12NKjMnkH3FjorJwxxZsDbN6V6T9GPzbmLh6Yn"
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
