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
    "5LwqcwAFSF1ZBXC84fZqWruLnwnbTLzeuz4yXaz3U8Dr5GLn8vRR5uGd2oNm5uvrafmfyZE23TvEELGdP7V68WVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmZRgENGqWYhrPkDMcjTbtqrETUt9zJVUJVN71ouoFXRx1w11oGXp8CgkyYVQiHrGtyhtSqys3NDmwoHxD9XL49",
  "key1": "3PAU7fu2bTuJccSio9noDjepww1tPz6NsLxfHAXCoAFzTsNUUdeuz4reaxfH7qmUpbWbDiePufRvcrF4M4gNQAMF",
  "key2": "4W7eugUq62rGx4ThJ1X1U1fsNjLpn9ZKYqHUpSWGYxhkC1FLDrpmNYJXaWhLRMZrqmxduN2o8ib29eman3pyLAqy",
  "key3": "2FcJSPLmifsAFR224xmFXcBc5TFDeXYLswuSwzq4LqJT76FFD25E7NqfLHJHotm6iMAmpZg8piHYjHqHo4FLhsMK",
  "key4": "4ycZE4YoDj9vaJf4ZYx71ba5ZJUqoPx3Ub2dWmmNFxNyxgE1J8eD7QhrwVgX4hrNLVxnJFVA1offDzZyqTQa4SDQ",
  "key5": "4TgwvQVpLGrRyK5Z64TcG55ESjv76rBXur6Y7aMGksCi52kZAmkbosMJMCf63f4jqU4DmehUXPKCvuxR2J99HADE",
  "key6": "43n2QcKemjFabUF94AJiZ96se8tGhkYAWG3fhjHUxPjeELqg36dQ7q9mJFXn8fwPAhmLfVMZPZ45TKdCLGZqX9bd",
  "key7": "5yaAm1QumMP5dbpcqcnsVbtgyr2ZGEUAJpXDKqod8qBBoDnP2QWjy87bbyz5pchDpekr1Ldt5riA3rtUtPiAaJ1f",
  "key8": "42Ut2e1nrM78CWCX4XgatHVnjcPeYB4ds3ePNCgYG6DAMauyPH8aftBY84aqpWLGUgTeXca124ZXBULogwVusZTq",
  "key9": "Pp4fgCNJG4SfLLWQ7j13k7gc4fwCg2qSi64UVHoFQ8XTWrQSXiwQokU9SCw4J29ujzXYdTW2mHuAb2h4oJvbiCB",
  "key10": "5xXkcExaAp13mPzpx6xUevURyF92xMC5Em6FGC91dPbkgcAQxG6ngquJ3Xk37EvQ44FENMnKCF2EXgmGLLY1oads",
  "key11": "5WGgxEv6H5YmFWCWsJ9TgZEkSqYbrc7LGfDULzvJnuHWojzTxXJasxMS9YWv5aj1ABXnb3Ze3LcbT41Jn5oxzHPt",
  "key12": "MTYxhjUya2md7G8U8tgRVsarYvNBNRaF9bAmHt4qm6Q75fGeBYkaevsfu3WPqwPpx3FvnnTjsmuAXG4dhUqs1u6",
  "key13": "kQMbQE7XSkcRkcSXpBYJp1JUhGYWbyBWCx47qgyyw2HxXV63cddTZs2sdkoByt9iBhTusEW83U47oGLr5h8tJ3v",
  "key14": "2mq84gC99HjiB6Q8uxrCza4nVHwnHUg6upFW5VGKJirqqfLGQHhKzKowq83mYBzxsn9MavtByVEfXrERrbuFZQ7L",
  "key15": "uEbZuDScrNLTE3BFuHV7p8rUSCbdg7pj5LjgbqYm33rrvwfiJFVjHijKW59CzT1tp2ZvEqZWWrPzNuTryrVaRus",
  "key16": "2kydKTZjbVB9UfvSc3o1AUoBf8icKg1ymGTemaD7WxH7dXejUJ6b6euchfy9aGTNLHW1tBC9m4AMLHU1KeMgMxxS",
  "key17": "4FF5toNz71zCBaY1HEYhjRmFZZmxfUaVfXyThRsaSU6iYsFo3qTN76Jboe1D5XcRHehS2wM7dQmpZBfhCfojeZQ4",
  "key18": "4bj3rcQg57xpJdtorEg5o7VUyQMarxoXMaRyJYYeLeiD4QbbtiNze6gRKFMR3UdxS9c3sDDRvaSvwZb32CnG5Q4N",
  "key19": "5hzk5YzDwtrBZGckrUvfHksgqWzopHkAbk2bYA13bWMhHiRr7tZxS6BwVpxApetLVyByLGTbmVwL3vR8hBbe6LY7",
  "key20": "3CGvhKCe8gM9Age8XwVPv9HJ8H5UomYDQo426QgmHRqSTQZ8jEv6KcyPVsZoRQrgAnFCyzH3itnQbqyKHYqTon2q",
  "key21": "2ihAh87tYxUkeQVRhgMcvY9fLvRBeLA7CtxN7gBx5qCz96Wb7RmpsZpEsio25fi6SSHfJPU6FJshVyd6Ux6DwyDV",
  "key22": "3N9NeoBJnChjNWxePqqpz2ZHsfxNFrymQYaR54WpZeMNv6idyoiL9hxWnZ52qefadZAh9WUAamuJKxGLw7ToCNWh",
  "key23": "5RRymU5UxtSDafxWAp1uLDTpEyMeoNiuwEez5metswnkCCaD1MNszk2aPy1mVrSxso9qZDa7S6bLjghEwUTYNXhm",
  "key24": "4HR9vX3SvKEENZyCAAAs6iyGy2cVvF3EANtxeQ5PsSPHKoeSNeMTmbi2zeVcPJsq9HHvZB9MgZyFMFjtTZYJjF33",
  "key25": "2FETFTxGctHZrAscc8YqWi4xJ3h9VNby6mgGUG41wFvYYbcrkL1b1Es8GiacAVX1k1TeeUnGQeni7tRmbaewoUMY",
  "key26": "XnemBFjVY7WxZ16C3BGHZw4ue7CYoHigEVu7sEsTsxqsCc5LyfSRXWkvd72LAQ75VyGbH5HCZWE5XZdLYiRBuRC",
  "key27": "2eyiN449Fp2fqafo6DHeXCny7wRhWb1q31bkV3ASWaK8xSWfJdXap1b4R3mHbMp9kN3zHXjxJSSyfxsmRkQuQ4wv",
  "key28": "3EmQPwq3Ea8oGiJXLoW49iTe1UU3cAkupADf2pEVp7A4AkLLBMmAY2uZMqxRU3TRRfyCay1vYinqm6rNCCpr5M65",
  "key29": "4w7CLMnEvVh98c2QsjPAajmkUGZy7Ygbma4TX6TFk9gBjz5TNhKxV6xATW4ekMByD8DhfZLDU57XYKjLc8KrnsgF",
  "key30": "37qs5th3oNNPZxUmmhm3165dayHXMgYkXivYS7Jgcek7tdo1hxakatr3dydXgmnpRFVCYYK75ynaE7gGoetKb9Ez",
  "key31": "WpY6jAY3Jz6qansicTMGaV5EtXgZ9Q1Mk4DN74RguPWagqTx7mS9e3V19W1ZSEEY8yTAxKKmD3JRpTQZ3dB4Sga",
  "key32": "qPHBMWNXcaM8bT5YZR8jxCYabTvPRqv5yCQJshB4BkHkYxiq1Ya16xL6TsuQi2KLwEVhACTAXfSSPSKkxfHsMta",
  "key33": "4vd1x2U2xF8Rjb8C7tuix6eqqAyQ9ddy9fYxkmR2Qi7KBLEEP1AWAq1R4p6kKWJNgH732egUeQGPgvNFXCk7fpSk",
  "key34": "5PsZBQWPXAAPEBm5hGr7LgyVzkb3LG1JxPHVBthGGCTWy7KKx4VNYm5tCoxe3to8TiCikuLh4gXmsoYsH3Hj8L77",
  "key35": "6QXBn52DCukPGCp4xUhAwyHVYBwzX3mzztSdJtodAZhD8wdYdAQ7zsWdQasNHdgCMKR8ZZf2i4usS3yW88D1wVb",
  "key36": "2FkBHjgFuAyCqNy5gN4wdadoy2HdiReY1izK3BUyJEy4bjLjtDg1pcTniW6nDA8Qzo3jNqyMdVbHnNuQS9Bxf3E5",
  "key37": "5KPk11mCHvhqLx7UnfZg73GkFAbnmmUKRe3pDtBLdQCpwbLHwEHKWtBDDsUy9dx8r7ettRed31wkskpUsdw3GWcw",
  "key38": "4vQeuhcAdK2DPNZ3jHTQPuwqe6LWQYAruptQXy9rb1SGRgWLDTgWrT52mLkvES5PD8DtLRkbdE9X8iXbe7a66Evh",
  "key39": "3nPBUyKuLAot32bzYS45Vg8UFFmJTgVekp3tPbJrGUfQ2ds8bLpmn7jMM7RJfXSiBduJ9qbpQUZmWtxoLNMbeEyb",
  "key40": "3bqzNxbDQPT6DXxU2bqXLduBxup1cTZ4Er3SYjT3MEGzEkzFgYTqgPuyhxky6xHNyucNtenBswGeuJL1CHZ6Ei1S",
  "key41": "62sV13S4gHeoQFGu1YD37Cjvxwd5PXHfhEUW9n6RYSgF6yTMfjTHCJsyYpEhJhRpMmREaGzV6snP92aSRTfXX4QT",
  "key42": "4UTRP77QkscANAYCPfwFUjW8m1GMy2jargQFbNTFfWN6ThjAEVTLMkwHWizbpxvbgq5PJV1GnL8kf1iNkJ96VXdh",
  "key43": "4RREQeYqy81rEqdAmxhaqnYFu4LGbvx6gTiKq9pLTQn73zMqucURERBoHjVbpaLWpnm8vVzi1PUuJ7mjcsRyzzR3",
  "key44": "NCPMp8WKaaAx5rHpV3PrKq2vgwJeYh9q1fvva6Py4Vj23AweXUMXcvkuVLqmMgVdxLbQDwwrPBZ48c7YPTVSqhc",
  "key45": "22kzcYaVevNdH85AHCSg5B4VrhDzJ7DuKtRwWruZ6F5d91pPbLJ5WDh7J6T4V6m5bGdrZMZ5ZqAfYnRoEcVfTGvn"
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
