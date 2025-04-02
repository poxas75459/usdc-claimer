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
    "2C8TwFGMkfS6wzZNDx1DpMZjxHNZztgTC2ter9FvwCEG46hKG6SC5rSZvQMm55bxDoZTa6LpMkkcprkK1MRpypfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Szju4r9Bgdp1S1CrcfdjiwghoVrzwAdvLMtk1CyRpYibcgVdoCrPYZF6r1LMKb6hH7pxzzzpKX9F1sW9SCh3h5i",
  "key1": "36xekisH7oB3xHDSLaskKYtVQJunceSoSJxcbVTqxX7UD3amLqMjToGazeKeq4Y5wJxbrA6eLLLKwAczwCuVphwP",
  "key2": "3Xorp5P1Xx7QboaZLB7q1ygrZKYecVVRCRuiNsgSviooZFLP2S45B2dQ32iDUuQaaWg92LkNk3UzRwb7YxRAmC8j",
  "key3": "2JHPXRPm78WSdEXpaoJdVcZ4zNVESRwniGvPZzHaUXmCkzMWJ8LfLEoNc2XmwBGsusyKcV42ennMnxmXkQWNmPX",
  "key4": "2ecuzr1TvE7aRuYqffBx8P98Jiurcq957DYRLfbKKsWvdfmjte7pWzG8ooxTFyt8n37zDWG1TSvnAxLZNiv5fj1g",
  "key5": "urLaedLRGHtkg8FpGxMyxx94SJt5Hab4W55ETuDKDBsuRzxGSGomhrBsmrK2b26kNTod5XFPegafuGK6VLmjTAE",
  "key6": "5cFwiSwUP7xsPq3VbpTRAEf8T8orxjsj6CdMtV8CfvVatapiX1hrCFAdJSRvAE9LZvF14kaU6oMcaxmbkF6B1zML",
  "key7": "63YDN5DxA2NcEFLPdiuGaTz7dhagp3SqHc28RkNRJ9noDYnh2xtBskPJygVN6Jgfd7GYUS5eUqbtWG18SFMjizM4",
  "key8": "3AGEH5rD1r7pF8We8suxW6dX9wkPdRPvJLQxySK9K2dws5ogZz1GMgEsVL6wEGYGSGBQMJ6VDjj843iKLGYM4RvE",
  "key9": "et5n4WDT1Kjpt4Li7aFkhyLd4dUFqG3Ukh1uKHwP7xtruCbfUZauyvEKGLNrc2QFYJWakXCtMzS1G8TmWNVguFL",
  "key10": "4iGgebUsQoCbfdboRp1qVjKNLU1Z4T3VWRXJRsA8in8ZsZQZDa41Fx5kheJKah6QLCW1E4awYBmVeS2JhbZ6M9yV",
  "key11": "tKob9ZR9TcvZGKZ2ELNPScQPkuNGaEydQUs6udPzhZkKaaxTM9y1c21Mpb8G8StYva2Yv7vB2d1BUK4Foj7q4wH",
  "key12": "3GpSZDYTjWavGRcuyWKpXyjnaYw3LtAP7N9gTBDXYigTSmrE8eZEE2CoPGUZ5u5nohS2AhHCznFp1KSaZEh8fB9J",
  "key13": "58UgHXFYbjwqzyAYc9iRGiKVVo9hqaFwLXkBLoYbN7YUs39Gxtja6fZ7z94YD5QWyP4jLrGMxyrWdTje2TTp75uh",
  "key14": "5dwdUfwAFAdrN13CNLwfwWEBrffNqYxAg2FzvbesaoV8n8W2FCqVuq8GCGthXUFD8nngVMJj34v9wiXvpBVJH5h4",
  "key15": "6msPWJJzVmMPSZYARE9BYdHmscC9bybuRHSp4QCdvfXW9CWWePcBKoykiQ4xDr1jtxeUuVVe4sC7iAPpCJmQU5S",
  "key16": "2NTx3UUanaQas9do4WkqKmenB7UWCYyfuSS7jneK9jwUMUmrKs9xs38PbH7fXbZ7R8rzcHEgcyNaAPiT6WfmKCy6",
  "key17": "hpMd4UjJ7fo9YMwbRXkTaVjFxVCfPEuiSz8NPHGXbxWnchDAaJ2c1HKGhDCNboEf2iMABitjUfztDySuLGiPk4N",
  "key18": "2ZbtDPfsrukXgxuxf4Fd41F9SQntR65ej8sMNrYLTq37o6TnNUCShzz11JaXbx4oMYkMhtJDUWvsTN6Wv2YXNQxT",
  "key19": "3uKMT3F66eiwzX6h6JMSLZu7hnLce8MfGZMcDfnZKa7FKaKDg6XZzpVVwA6e5MxTXUaHK4wkjsBXok6wLhpwBuMY",
  "key20": "3BVYJxNT3cX4FNk5bzxEUqjibWwtZy9eY2UqcbRDohCFjMfBhxaPBrycrWhyeWoNqs7PQkWKkDbWdVpBdbuxtAKW",
  "key21": "4W5848jkGL3PF4TrF7Fr5XDMVAxzybBW33RVgGKGUzQ5rCXoRAQf4C9pYG4uZgv5uQFN98SK4dwHYMqDffMmgw48",
  "key22": "4yt8AP9Vvc1w5JQsBBLm4ivsE7nGMNxYXf4apCpkvPKBb8ENkBMZ1x3vSFo6FBVtnUwjPpew3jGjQYNTB5ahSRbf",
  "key23": "ZxiLQjC1ib25yuyev3tM3qFk4YrreqcX3aM5qJBsssz2yjEgYhpCbgTEUEJgHTXaaDWxCi3kKPqm3xQVKTo1JYz",
  "key24": "psmqRbyk3fNgn9e4pPH6HV9uFDtzB2xQT7CxNrFUFacQzEuZmq1puRDLSjP8xzLnJJPSfLg5k3fmFNMbGkuoybL",
  "key25": "3Cg64bTZZB3JUi49hoa7gj3JSj5CixwmSqWtzjAHTiioq8JLuBHa5TcTShLfayafwiJKZ8o9gXgHCs1gWc2JSy3u",
  "key26": "5fBJEioxak95pwxTVhnDEtsQZnLC1ckKmSrgwrY2Rn8WP2fh6BWNWBfsLSxdfxZ5RXX9EmZaA9nY8e6iwyL9oFii",
  "key27": "28fWecu6jy2m2koiuAL8yH7EoCaZfVpzPeySJ6SaCymMTPJEfc359QfvZMT9iBdd9VdtsmeknYayKUcLPQdEdLuo",
  "key28": "22cKvgfGVbmDnvm7iMdKq41hS85pNYF1uf3EjRsUYxygtJ2aJ4uiZLyApUQXeWoxAgH8mfL4RgmosviJZaGjzjjm",
  "key29": "2YCrEod9GsYQVW5z9KJKnSEUq2WCGn2RVB2BZs3s8xsn3UHWJt3Kc5Tpti93HkAz25jPMwCnieufcQ4DHq7S2DKz",
  "key30": "L6Q2gH1MpDiZ7oSEmqLYC4jXoJoN4e6XY2SeuBnpM6oXMpjC9eSN2uwJP8FP3QDRJhRR8u9dpFmNLYE59EXoECp",
  "key31": "5kJx9Vd8d2iyyfZ7hnXSfM3KtiLkE1sJPyX2sDakRhZKXfdvJT9pDNZayc3pmMsxhxxCvjQQc8JnjgDUehVTiFPc",
  "key32": "jaE3KmvyD5ZHVsgbsutGy4mHPmjai54kV7fjoQS8GrjkhFRYsrw7xRmGeFZGR2KnS1y6d32mjHSqFA8snwCtQ8x",
  "key33": "3J1Jtr2gFCsE7DBx4pUJHNfGYztkBD644pdb4ywLkbbkueCGPb4x19WGhGJP5LfxsDbLPr6yySDEpHDJ18YdDLXY",
  "key34": "44mURDaozywU2vRk32CCUn5EzYWYuEuXzqKENnB7bKAfno8BDDRYXTKpvY1PBmXDL77w2m9ruG3enJKa5nzsvEuB",
  "key35": "3jUG8eTkyHRjh4HzP46asvLvzRsCWjwJk6wNFy9fFmVZ1qSZqRB6oUHgFdPD8JTH8SkPzfu7bN2iHoUkB4Lx65AU",
  "key36": "3tPf66XJgtEB1Lcma2To5jvLB8PE2MXZaaH8TtbY6KHVVi74ryoWhz8zPeuREA1Rj5EConCrJFEGxH87gfcLPsXX",
  "key37": "4PTteGyyf3WE2ErfZgKpK4idogoHaP7oWXt5dMxzrdNyA2ZAvqZy4RbKQQNyjoc7bVQpFFZKwDKv1UHtsvQ4aoWz",
  "key38": "LjCGUNmVCzNzFztNhRMgqEPUqwhVqY8bn9ck6swnAMduNPQwcBKgA7RJT43eMGtAxm7Hmqt3X3jjNVs4iQYdi2T",
  "key39": "4vvxNqXV2t9Rn2BK4uL5Lqh44SGhmMJLTqkiJ2s5kigBACKoaS5FNBArUjpqMqEEmkG85bWrpcw5yKyuNSDQcfUv",
  "key40": "5tf8EEskyvTm1gmTy5468LycCXxbnVLvvkXzRiTeRL6hcEbigkMctbLmMqxRSnbARLrNTprej8W3hkPeHj2hTvLW",
  "key41": "3AZTMUXQRgGgp1JBUAgEt6Qp2vjdad2GqgT8T8ZCLgs3p61ehqKHgstqFzX7HUibGKpapxXMePMtHBa6jzQ7LYw3",
  "key42": "hCCnBi2es8C6xejaT7ydD2xThZ4prfJxY1tsRjg4MuPWYagE72KBviF5zo2KwFWQMF95kYUW68k5ZPJ8U9HbjuG",
  "key43": "3QLN76G1tP961iUrdyjycJ1V9oLtsh1PCsTnjfrNDH3GjjgtR6F8NgpwaZAe9i9wbP4Y3bRZwwbSC8EvZ5QxHaAF",
  "key44": "5Tee17CWbELxfRH4SGnP7eLL3WLnYxQQvsSqNh6HUQeew8JrDgj9GWbqyGuiCdegFA6Xcb3CFcZnr9VbtM2hU4zq"
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
