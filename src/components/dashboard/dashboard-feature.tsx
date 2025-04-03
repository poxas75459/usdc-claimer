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
    "4MxUc83JT8gkZtc31aHPFZ7CmG6RdesMyeASWVBuRrFGRTCC9qWSriDw7qBbSwJYpRPsCH4cwFbUUMXAmPJFiMkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y81ZMY2PreXVEuf7jpvJhhHThcnce8MeE7aovz4VCVjxVrsWD7A9fyKPK4t7qm9YGe8i1LggMfp6Z1V1D2EFEA4",
  "key1": "abFP4wytmeCMWEfh1SYqWkNHBUZvcvcnB55X9segD7TGCZrEYkSF4afURU1oB9oKbt5hDTEACjNoZR1LHME7Vws",
  "key2": "3CHvkHp61J9eRjVKGN94DmQV2xSBudf6zKtXmPSmJR8titNEDrPMx3WxpB31sRGTtJ8EG31XvbR16nxcaACdGrpz",
  "key3": "3sTsZJuQ5r5WnbqtoBGumitJSXzimUU3Vix2QRJHfzz1CimpezqqBVWNSFEevSN31mLmBexAsjsDG6VcLgvyrd7R",
  "key4": "3KwTLAK1cRVHCkved9Cy3ucP5vpqiWRtKyea9HGZ7adQQfhG6GgXaiCDT3VtmYiQuyiH3Vd6b5SrevEvHBqWmkfn",
  "key5": "61ha9Mvh3zm22vfzUrgjYwKrBhDAALTqRAfG4f1s7xWohJX3gPWc4NfW7A2Wii17Vj9bd4Hn3Fo43dToGmzhEcsp",
  "key6": "4i8EYPG2APZrjACYe1RQ7Tk6MCe9FMfZziM3ByH3kNfzmXbMxZ9SxmhvDwJCKeYDbU1AAJ86tHpxbpQ4dZsxDzwX",
  "key7": "5PzFBoPSUhohMBPhKkR27HsPNCeDwXUHph7my5ZCWmR4FDNfiuHU14RA7iWkNpNRNQ1JUY7rCi9TcCgXuH1dz9N1",
  "key8": "34fQZrdGGgHGYEDLeVD69EyNbD3UP8qFrsXTWiKFcirGhWQEWyiWMWpaHQ4965D7vQRZqfMDQjw3wrsgFV4sVAUg",
  "key9": "bB4xRFqRdq7JMnze9YwbmAsB8eCRHVNaT7dynVJyjgJzxJx2vsfwcjyfkgahZik1kR5JthBYPywgL8z3TNynhyD",
  "key10": "FqA69ns2AG1q6qm2g1Kh3sNALxhqmYiJ6wbYxkpkGapCEnLv8rNWnaZmfLUYeUeRZfzdtDpHRmtfDEeo2uKS7s5",
  "key11": "qmbSvLCV4954ueXJt7unv6ciV42wrcmp3s7K2j6jMXB6MCcT7qJAuAQnwJNeTeUQkLGY4uNDicXBRMTRSPwJr4N",
  "key12": "5iErYnB2Wd1nCszvM6qztMqmZ9iTP6GjDbV2ftF4Wu4uNWBjW7jtXeGLP5zr6YL9TnXcQuuLzwk1V5xocr7TXY9v",
  "key13": "4G4fQ85g43P247JqY5Am1H2tz5ouGqB7XrSJ89UAz8gcaFe7aGL4vRuhaqqBu5SW78MG4osU1HKJqvbSs482LDdc",
  "key14": "3cQtAthV5CbRdgBg31mkxDXLT8BvoLJFZqV9PtZMzUoxbW3bAT8121pgBDHRPGA1gBXvyd3NKUY2qjqhqp8o95rP",
  "key15": "EqA6rTSrFjSnQUpKx7a5BQHyXS4TtUZin7QpuEjgDZYtRHcD85EhJpn11kNYdrDogxjqDmUdKAnUaaSJJ8Uvjdb",
  "key16": "2oRh8cmkGVgsYHtyzFQoFwMeCoWrSVZPCDVndtvvds4R7rAqdgK2GVAGSGSTq12sxoEgH8HhYqVU9rL71EXTK6oG",
  "key17": "5TCHsne6FpJJmEC2TerF4LyKsS9wHuk8SKegEGJfSqPPzP4yM7bLBSBLmt5SqJL6xmiFM8owUuwdZc7MD9M491n1",
  "key18": "4u5kHwWyRy4bpjmkTwtGCNm9pZ3gervvVFonZavwrmgTmLvvxnbxdHMb4GKFEqgoKDL5kMFnTq3MuYDSUWvAjXqz",
  "key19": "52AAbTyPihoHAfg5idRiSoZ59HkwABhh7wLmcybfMvTyHbe55fmGmrDVq8YePoK6fgUTpxsBPYVS3RTCUGF33Dx3",
  "key20": "4hxKYyx5W2DumdQAZP6tpJF24SNWmVowW88phcy6zrX2zB3zhR8gDjFBTSNwpHMCBCQ2yojDZTMPXjo1XLAprc1T",
  "key21": "4qHS7erpg8GeEECWzBncRQuJS9GTk1Kqs6vxRNTJtj19ndpU3EH5u7MeYFWSyzWhiC811ykRpqwc19UgDQxMZAx6",
  "key22": "4yS2dmhvg85UPwF23ferwJcDSdtitDoPUdyM6nVkYMwRMfLYUyoWadvJK7oFXgudqkC767L8Da9CMFkdCfyucX2U",
  "key23": "2aW4CZCPz8onstEipAm99MdaTPVnbZAjhsTPtkNeFuaA3XZ5WUJ3QtK1d38y2ye6MMB84buVZanSzW9djE2SqJuD",
  "key24": "616kSfdUk2jNmLBDiWzFdKXactqwkRxeqnPGswu6GCzSYC9ascRDHXoBPoXdHwzRKac3SU6geP95ZUprA5SMGzaK",
  "key25": "2x9jDvP5x4s6bHGLi6oYb8LYwy7GDWyhzAF9irq2PMxDTvLD1KtDiyTxEmQbnXFr2wgssGXHrPHJSKBbwgVATaCx",
  "key26": "5mjHZjT27JXmaZ9Q396AA7GjtjBHntk4LJ8S4zCGRvrZ5FFxHJEUFauJcjH377rXLCgWk4KU35oc4P3pdcJWAhcz",
  "key27": "5eTWrGTZLWoAyWR1m9ykczAgXNhWQ25PjefmFGoH8ozBVhHqXbNK5EQW1RA14rF4GCXFwnhWR8fVKWQVT4VVLooP",
  "key28": "E5TvGHLBdtBGJNNiADdmZmE7QeYMg4NBxMgNvwR8d3BHrpNq5viQC6A9CMEYLpoJp54fKAGAP2SqXxk2kgPViUk",
  "key29": "2tiabr5NBerFsefsSzc6SH42KaYnJW6eTNyZiPUvqeKMH7czNJcwxXqKixvYAVP21TeP5VvHKGLAHa66HMtZUp6q",
  "key30": "5MTQmxFtZsTZxKB4bCHFYeA2PgJtDeQyF9dbgKdvJfHvieSBL9qb5PmPdmPDgGgD5tvLiKgW1brK83QuEd131DRj",
  "key31": "2YWNBbLFMbkUqZheYmuocTqN6XR3Ac2yVUJEoPxhepcQv7JA9cD17FF3EJhXxpgv9XdTCcG3gabYHJ8KUfENRDeS",
  "key32": "37NmpVtFg7XbxpWygEgvv16jFm3qz1oMfcAN5ysACTr3R4bW36k27whdrnKJZdi3KL9CuwRCGo11CE3hLTCJedCG",
  "key33": "5VkCc25pRoR2Bekr2RNGd3AueYVgi42PE667DbkguLonfzxAjd9nX1VgXaZvTrhxozR9fcH1YnHMoSXHcZ5bDPvN",
  "key34": "3hzr37X9zKqCYtmq2SXJzyRFvmLoTjqFvWdeU38joruyZW96U5H978ZeTrhUczu1g1jWpzuBuyGUkfbVgYQKn3dw",
  "key35": "JqfXyx8Wa1mLcUvZ95xKAXPzc1mSsuEjqxYHH4NXoiVaekwG4UCzWmusKUjLnfSbkNYsJW7oQ8MvVu74uJr4aMi",
  "key36": "4Pbpdndy7HLZYkkrmCqAGinK6KZx637YFksDovriHwMoX7FZAPJggRmw7KFUmJkGytWgxKEsgCk1S3o7YR2kqFvb",
  "key37": "5gDqmM2EZLQ28LjZJHNK45ecPWi5JQSJXnx5mWDfvUBrmFN42Z4Ccgpr2dVrBmL3hrnEyvJJnVQepJFEHUXxYTAA",
  "key38": "2HYHwZ3ARHHz5HSxpLav27LTmEtBdNbmyexmnSH4KPmbDFUnyV5oEYDUdm95vUuSxFBEerau1zJuG4WHX5JFxMB3",
  "key39": "38iKpERprEbbQwca5bck5daDRbaUzkBvjQGmypTc47EiJpu3LLKRDbHXg7HESajyhG4WPAcCUvpDYH65QCJunYVS"
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
