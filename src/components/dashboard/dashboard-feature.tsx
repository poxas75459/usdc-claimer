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
    "5E9izcj7JsPf9aahADojzdNhkn8D1heVhxXNoZwWZ9ZjE2j7WmQoef6CWnNcynGeybbYm5CnivSp8Qur49vXjJjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jiwJy6tyshSySmn76427y1ob1o5EZ7qmnYy3N79hkHKQB5VStoHhz4vrkVkfCPrDgpEHzvP7pmvVHgujJWw8VBt",
  "key1": "3WYDEXgi93GQisrJNpxVTFmLCgk362M3E9E5AVBmpLY342yaxiURzxFGMtaa2dk9ZHq6vQv2ewjjge7YAgnGLp91",
  "key2": "64u1TXEyWzuQfTAms94kUYgMmogDudKUbRYayUH3RKgBrU6Ettv6nkR1VuZuqw7RWD1dDgtnUUaBRQMXALxn6tQ1",
  "key3": "4Uk3SbFu6zdKhvmTmKm1VWq79UMZeMthaQLjiTvEyPqur9ZFWEuVEjEew9GxLcCJiNSs1xWGpPCQEsVr575LQEgi",
  "key4": "4MMvUwC3Hbi8iXvwkkcguZ5vVxR23vKBvRAPagnDuMmYtngZwemjCeN9tzKjwrfmPVpFW9vNaBoEXGbVhWT79MLz",
  "key5": "5LG527hKfF2DDdftiXekTbQ1mZ7RBTBtMPUTLQTfeYDHUXrciGMhediwvmaneYbn7HhpCkPwmA1eHhpfiRKEL8Yw",
  "key6": "3PN1XXmi2V7UFq1Hh4Z7mk6m8pJ5NsYEhoAA87vsqyS4KGE6rDdRwY22iPTsKY2v1LJG2HW8YfKKjeH531vyQyTz",
  "key7": "2VBMrPg7ZFWNALVLNgc4EWtQsc8oa4ZCqw8GNvKu2z957UWkRXBnEZ6M6Z4LtUKFQ3FzJUPMsBzhcZT4biaKdToZ",
  "key8": "TbfWGYRsyQqeeyh4fEWvFqBCzitahqz3h5hMAZiDzEzuB89QcqDwFUmJbAgmsQ6ee8rm6a92kwA9yDfGiptPGPY",
  "key9": "4G6dtqQvMiJXXeQU58xR55RZ1ALQgtyNfGGTFXMm2rssL62igzJ7wZpBEw2eGgE7krkbo5pnyTY4PydpWyt7XK3u",
  "key10": "5jQbNiMygL7Ltdvv2UBQruthdLDuEPkE3uiBNuMKxdT7vePa9K7Aagqv1FjTerCotWuSh5Zs5UiHNWVnaTEM9WTW",
  "key11": "3fVTNRpqA5q4nLK2eYzZBzXQ6eA9LrX3Ku8QoLFomddjYbmGKc6c2mV9xb2HkCSXaAJcWFtc7FuEL8AEjmdBbFrB",
  "key12": "26BbcTPaS3aq45ABnTNsDbBat2EsVPiqy67rVgdHKWbjXjFaPT59cnVmQDRfDEySwZ8zUoRmj13addbnoYJpdC6h",
  "key13": "2KxfYH57iCKAW9ceWVkSQfoiGij5QNpSff27bjss2xRYHDqfeBybbvYtYZE8gLdqLTzLppTXESWKGFcPxrMmmDYV",
  "key14": "52AP5t6hvcd5cdYQjQkF3xSecw49i9p368HVSkKiVN3STpBx1666EnNodiHgrzsMuFMUhQjPy3bGL8G3ahGpzKvd",
  "key15": "3p48XDd77JxEZaE4dsQmHjBf8eHKVpHqC5mgDSP1VJh9iE9dr2bmfvkucgCKT5P1fLzhvVPGnuWpLUZixdkF2NQA",
  "key16": "4ju6VGEiw8G6vLfME4ZZ5B7BPoLKEV3cFkXNXoc4EECYowympbDHeThCZPgToZeM14VxGtB85QGNToh5nN768SL4",
  "key17": "5udqPtSVhzngqTuRfLBR6FcCDmxgaFdPE3vVrEsNorzMeiJCSugYCciPNhaTjrnad4Yaxx44TpCJQFeQDyU4vwUa",
  "key18": "2DidJ86ikMwDPyNTizjkGQ6BFuyx6KVcENtUuAvoYgURFQykWVwZhb3bjsfGrD2tnqt8YknFQdbtdorJM1bxFxC3",
  "key19": "4Ete1amHxFbkmVP3KBDnQ4y3CeDvS4jjfryC7Em78xAG1s8Jw5bPnhfCWsLeJy7GBiTFVWJUbAwP1A2tNLmJMtv6",
  "key20": "4UR5oYeWz91rrUsew15Z6WCGwkLoKvJmdEzQpa8vH62Rq8HJ5R7MvmiR7NQedSYCB9kRCnMn1bfdozMEQyE1JPQL",
  "key21": "NmrdiRkU6Uyk1SmpTbymj65bhvD5wqLDD3yuiYgi7tKPbtbio3gUzTomBrJ55mfP7bwG86vocm98Ua15iZQ3NPF",
  "key22": "39DFCVqaQGw3htqDkDb6GCPt7C2HoJhACnrNDBMQ2iyJBJ72MUTdUvJzq6hRwjQe58NW1UZUPRaTYSdeUyAbpBod",
  "key23": "5qjc92C5Mi1DmcAhnSSxxqQNm5AQy1RqEoFYDMtXMzZdWwZH75ka4kyKcmpC7wRAsCWHwBSAryhqivuEW4Tweoka",
  "key24": "3YGDTLnR3o3XDenYuERwaVTxDfopeEn3yy9sG7cmNXgvqaGpReGyZw3SuhvtXwFfo4kMC1czMgmAbYqRWowc1Cir",
  "key25": "3mWWdfvjjjhNcW8BDms2ks4kBwBWXjq4bX2Vjy1N8q7idgMRgRpk3uRJAkbByPeus5xWqKidBYEdLjYeuKTyGCEk",
  "key26": "5wqRh4mU7W9joGXQJ7BdsoBm9TuJuXecNbdQZoJXg5kTjqFjSf9RbBBgoRWrsiBcupkegBLDe2XhVZWmiEPKmgnJ",
  "key27": "38K7VTWtktYeDxKz7Hq9VxPUcFSBtmng5GuYcbWZEYdHgTDA639Kvaow6abM7SuwkzWvgJ2gyMTRCdhzXwy1qsnf",
  "key28": "5q4MjftVqJxsPS66CoiAhcwKL5BhH2M7HoycHPWB8HUVe41NmNP1NniyxKhyKuV3G7w21x9wJR98kHGt1iPEKA9f",
  "key29": "snpwcmyLAEWNAkAQ7EYcfnDvpLaV8SLN4RXBits7X5Yy55D7zWExe5Snnb7iw5A9nU2adsxzkcMk2fDQ4ZQ4tCv",
  "key30": "5XTeTyPb2t9TjrNDSqgPWkRFfzvkpHZRbYwJt2aiwjdaT6vFcHgnCr8GgwFhc27omaAmzLADoGHMuQ3fowdxHdYz",
  "key31": "5owtx4GftNWfjFBeFpobQvuyzmFeksWyxYUaLd91TVgiCgHgW47Kzup7Z2gfSAx13uAAQdtAf9sZ6vFy9JyJ17Pu",
  "key32": "5EQAQ3Q4kSfXViBz4weWgg7CaN6i2KutaSeSXhxy5EyUDcbZGmtLTHhrs5VwDzfq8WrF3omnCCFtFMEHWFGcqexS",
  "key33": "3cujdEopqkW4X1C28YoTaNiuNRCuJ8u9aPfvif9LnyNisN1WMQ7V4P3HKo6qxsANmaEiyjVSP51qA937Yj5LwU4V",
  "key34": "5CXK3gWg13pFmzZSZ6F7kNJgfPJRqGVFEwSS7LjJBseAp3kcWZrign7XFLtcNA8U5NPUaNhSoEphDKq5RfXivRiX"
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
