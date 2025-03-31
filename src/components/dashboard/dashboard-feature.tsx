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
    "25pfPBo7uh5Y8efUQsKmvpSZREasNsQQdggTgmEVrYzPJo6SNGSykHa7ePchwPGuL3fMEcobR67qFStNWkcqqdw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvic4y8dBv9ifLsQfXr1UrNPtMznDv5W6Pa9eGuLCiHgKoU3wuv7u21KqkJ6RC7atjX1BfC8pDEKc4m7KcStUYK",
  "key1": "3gPvkLdhuk1eUB9eF7ECZSZhPCVepZ1zR7LvzrnE9o8e9StveuuUrJNkPvTnsKP4GvPdAhL2K3ukHWkmyXt75wfd",
  "key2": "4GPTyh1QkqHfWJeXED4SCQCqbHU2t22UGGn2po5EeYAuFZoh9VhtDh9KjnAhcD5N8WcodGmrNYpqkaGcqLoE6Uwf",
  "key3": "3Kw1zrpPrJ4n6DuJJMN5xVsY6NWLaJE4MPjMVAwsmsYe5DMhxkMKt73QskoP2PeYf4ukDUx6NYVQtnkZHmNTWemX",
  "key4": "456F2yewA3bU7ArUFL3ybjGbwWrWXr3fVTtDep2DvKGGCnSh2oUKtnzrtRtjrqg84rdKrysezmwAJTqWay23WGFf",
  "key5": "vUQebJoiL7PXLoZieqvAZeqpyqqCuzG8FnUsgsmQDcx1TQrNjfLN7mSGGGGJmcjYNgafmBLzCusb5eVBsmdKvkC",
  "key6": "3AWC9F77Su4ftzLquuwKsnttbx1TN7QN1Qx7FpXf3c7QErv8BksurkPy1GyrbV6xhNdZfNiijNBReN44GsLAVKH5",
  "key7": "3jQg4KZN5gYgv6ny7rCPYw8BeSVpHEL4X9ZG5o4nMab2d1yiZ7iXsHbSWpxMFcqVMNCip2kbkgpBym2zC6QseuDL",
  "key8": "64Jb5YrMVomQwdM4KW4UG1pyqzQRhcJbeAXQ8PB1X7WqeqyC2Noo5hXMCbXkzmyxwfq99sYU2V3ijwEFWShtneyU",
  "key9": "5GicTyrbQCLNd9v1nfuEJo3fYyLfqvTXVdSsYRt2BvXuj7PEb1XXAT4P7zL69jrYVQFUduAWf965B7vVGo8X5vJf",
  "key10": "5C37GbfBfzyKR7p72JpFv1dPH91WEd2t8MkdmPoTuTjpWQDb1t94AngF4XCWjYPGt1Jf29grVaeW6mGFCraxAFZL",
  "key11": "33bbQ24qZiYDUedm4wP2gdW2dRDEaYp4BRgMsn57qFkfvFbGPyDW5p5H7xrC4Gn8SFAY6mtB6PBLaWMpR6wWPBzi",
  "key12": "4VhqnZCJMSFKqzCaajknCoLpzMibCeF1hBbG3xefLSumR11Auk1mh9zv2BuFHbdA3mT7rpziMWLLZ4LHENsnsVNV",
  "key13": "4212RufByfrDfKqCBfJYPcm7SCtZ33fms4D8kRo6YRbuB5v7XbZDYexxHrsjTuLNspZzeqkjRwjfJrJruiGTR5sZ",
  "key14": "5aLvKHQyR82Sxp9qjibTyAKMhj2eLgRMUtHS2Sx8c1eaevLmZFsD6Z82TeFZjPFg9eBCxFpQy4pHoxqRqYogtu4b",
  "key15": "3ubBVohQj4vHDqWjyjbFZyATx9gcBmnVbRjD2EoR7Lj2R3MYbNtFJNDYpvZBNBHLRp29ZCkBqwRmjA5NDV47Y8Nz",
  "key16": "y5Z1pS5nxkKvNNJZxGWfyrioNmRQ7D9PAKMXU1p9qt1eB2ct7vJe6MNrcEUqX36ZqTHnwqbKd1nHsWiqz6XEcRm",
  "key17": "44EMYf35qBr42PZHVUb8jTahPPMvT4sG9L1y172nC6mmLc3jCXmxbuDhT9d1RgoHecCzYBMmL6eCCjftzhyCXpqT",
  "key18": "5J9x7hcctd5bJTJoZ557UR15drv4JVWzGPra3kM2DBisZGMMTNDfSDYa5w2Jy6KQDC9hYCmo5AurgTenuJSmUW6B",
  "key19": "5MU5iL2Qdp5kuEFYuxAhRkGgz8WnHv1NnXkZR2aL38kFyXF61crfsHrmr4VpYn8SXnmUGk2tHGXsNgmarb7PH3QR",
  "key20": "3e1tPfTCh7KJn64XpBANTEEAVzuh8RjSpRzgxLZavWNZ4E7bkrLpfc9m5fgLHasVFPmKCTpN2yVpknX2D6okJD9s",
  "key21": "X9QZ38k1YnY2ppDPWRLa1UefCt1GsrFN6J4NB2QyFcStnbdzrZighAPgBsig8CjKh2rAy4krLDznEcTtrKV1ZDD",
  "key22": "3S32pHzAWLPgNc4ACgWNSw2BUuuAtrNJN361RAvfWVmS3zhy98S7DuH1YFHPFVMmsQSJqsz9cZtWEX5WU5ZaZDU5",
  "key23": "3Njcj2FgaxV8W5YCLyLDcVFab5tCFx4LLfPStFMLnpohsomYnXvjgMUiFZgyppsFwgne81paL6deV77wZ5XgDGCH",
  "key24": "pKYqTPTMSj6J1agAXhU94En6okFUMyjqXrTixxRfwsirC8ZtfVirxERPemt5ewES7F74DcNL8iZaA4jEcCwni1M",
  "key25": "Lkee4jgUgYmetDKC4qZHnsbqnE8uBXVhMWj4KoGvivdzmSNnf9yJjbaVeJTVQCyPuiFZAfXDxU6J9ACsFJgysk7",
  "key26": "5uhmjTGyfJM3NFjfEed34Mdnsj4zgAoY6npZ9kTJ3m1o3c1BjFAx7F6zvQHkqf5YnuNqdXrMYK53M29PBSsf6VNM",
  "key27": "3Z6GtxjSrcPMuaVxqhjHFFbrDVgtGEctZxjAZutcBnpThT44cCS5eZ4XNjSD6acVozdXvwMaKpk1vf6JcStPpp6i",
  "key28": "fKxQyPpUxrTkTkDLWXwkR4tsNAQWHLJUxi9x84YiHmieGQ6SZ43ZjvW9XiHRgr4tfPGaEnYrw74Dp8hZupKXuyn",
  "key29": "4cqpGg98xqbbue7Y7qPMfuXTKHNyxC96qhwpkVjEMwoayf7cXLTeDernZtBoVxdYDXnY84WYsxTaX828FRixZx3o",
  "key30": "2t53cbmXixU4fgVYoX2kJPJmbLBhuJFTB2f9vZJSSLMWMwJkiTYYCzXKw2sqTvnHf2KT3QihD5KAE4Upr8279TR5",
  "key31": "4wpeSbXnZaXct93nhR7Asr8t3WxTFA78T5wKXgvfbs4fatm1pPxuMBh7g9im2rjRZJzGdWAv9ri3HA3Zav3NwD3H",
  "key32": "3wviDFLjSvPQpixAtsZDCRYhYwEXiExDf6HaLTthCsekvybkQfp84XL8Lfz64UpE8FC9aMcTo8jU56tBBqX2DkrN",
  "key33": "hgHZSNpFwWs6QdkCToZgBLK5tj9k1Rxcxc712JL9KEiGt2zGDwJCHb61RxEUMztDCmwrZe8W9R7Lii2xekaWGbK",
  "key34": "3D2azKQb7yqbBNFv4CWDH3VGVmoQoJtq9LAF1BJryGeuTwqnj9p3nnsDoxon1cEdNqMLJYY8TUrp4ZHKxhKP9CBk",
  "key35": "1nzxepUHwMaT3bQic6SMTWZbYXBPZA9R7QvfDAQi7mYcahLC5UNMc3CmFeVZ5j1N8q4gmxmztFxF1ZnydFeFpAa",
  "key36": "2Q3MgqxR1hbqj25ZCYAHECk5XBj5iwUWSZenRoVQr5Q4bMzVNJQVLng1gvMErY257CFWw4xytgqYqpkBDffhZEPC",
  "key37": "37CDznfyU1L7yYxoFFY8sY86ZZvniS5mDkLoVE3Zrm1gjcAEB9QURn1pVsDNss2FSwiYKBArrcWh1GJRipCoeA4t",
  "key38": "4WZ2oBWVcxsHaHFnCzhEykZnTJpJt2wa5x8LSAhN34B4ihd1xNrGrNbaAzPL4AgjWNa8JKCz3868BGSkujEqfKsj"
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
