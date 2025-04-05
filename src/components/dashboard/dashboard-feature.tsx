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
    "4mawEPM5dXwnPHF9HC51DaLB811wn9i5H5RUR5dxyL34XFMtEUGg9ts1djCmzP9zFgmXfxNyrUqi3Gg3PHbb9Avg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QuLHZBtuXG2VNrJfpo1sxC1ZBBZPJPkkBAPX1EtXPmA9vRKeLTzzBziZPr6j2owdHwGRTwNsqGaNGfsHsLkUQ7",
  "key1": "4KngZoyLAaN45KqB6Pa2WiD9JNCM1166cBqna3FsZEcKnxrRM472VcSteCkAGsbtcTSb4a21Hc3VcZEe33AxcKck",
  "key2": "35GfVsE9CYdAEgMh8oqs7YxWcxWQ9gCN8BgNrKZsnaMVXadD49GXL2oNJCG87rJhwkrJWqyMiuQjc6r5DR8vu1i6",
  "key3": "5GDXovW3PcL35rAbbswuRVcqwKP3s5Z8Rq59QrNyqhtfsnNs8uQof8QWXveVBBQkFVVf7rnk59CHzUyBgCvtT4pU",
  "key4": "Rf6nPKZhcRGgyc2pnrs4WzCGRQ2UBF5r8dsmAFFEcBnJsZcWEnSX8n9rUdw7NW6WH2s9yDuwWLZK1c6JtSf2DjM",
  "key5": "3E77VuCFttpQgUSgnZeQ1x8UbssRRV4SADFTFdyPLMrjPmaoZbSxFHYn3Th1XbXfzGVzpzM9YKJGDHuBorET9dgF",
  "key6": "5hC1JeVCaSG8zc99VBe3ZET9LEUHpPdN6nNoUbXa9RYUzfswjotNBjjbSnoMWy1AF9n4VVAMFkgJNsAggpWBG1h5",
  "key7": "5ZgRNm7XzP9xA5ie5oSjZo7VSYTMfb7a2qbsQBn5WfUevqFfs3tVQGa8jFH4wptxGs4nSsDJjXo7Mg9JnGfLGxJY",
  "key8": "3M477vU3K7ixQUd3e1KKi4qVkTCnWCzskyjTBYH88mXb2CKwqgZitAjCgo74GixsdDd2q3PdPMHKv8E56mDmNhk7",
  "key9": "2xvJ3iAebenkyzjtF8V6XigeUCQgwNFJ6PqLSWk42d8Am7jCNnura993i35SCwt7ELEeqXwekHqdhcccjqFGLoxQ",
  "key10": "3ReMfaXyFscX4WeTLa5kupfp5oEUxK1sXiKdb7LVRsAxXxhMwyz4muzRVhBsykQxpQoWsdRTfGACEXB63FuPQx6n",
  "key11": "48SWgwDQNS6mtzYbGvkA6sVpk4FBKyuQQ6Q18pYEze4MWHMRCrzLMAX3irUTiJmxXk8TUF3F8vtHb5urXQaq8gz6",
  "key12": "62U4XjtCDNuCrZF28eeNgzydNUKRfYRjkitdkwVTfJ3ffDgQNQmbc6LDA6T5FN1fydWJjKjZoiZfGC5u6ycVrBd6",
  "key13": "5FYG4W8U81YvgjzNBaw5tPe3CT3wtavKnkMLg3zSWqCnZefzdHMaGHTegVQfY7oCfJHSkVomFj7jPWm9EmC3u2CC",
  "key14": "3EpjweLE1RwzeebdjrKeAmopV9bCtS2cya8wJKSWm7Zxu273nWrTsVsqCyeUPjeVfG16vv1eTqGTqSDiSSs3bUCW",
  "key15": "5vcxkARqBRNNtteq47znbdSJw9DkcP6t6TYmJr6JmbuxndYxFxWZeaN9aWAv2bUoroQp6EPP8sv9yF4EhdVPNaUQ",
  "key16": "31fPdMKoZVP6kimLGtKMxJFkWrEN4yhdkF4axEprTXe7AnKHoyL415Ur7dVuH1HSD29RY9jQvCGzBUsF2j6kcjEG",
  "key17": "3SCnFUK8amyXsEYFkpwsQcvLEJnSCuSWXd9J8JYRuxPQsKbtKAZ7b3QqN3P1YfWuaE7hf29V5rRAtbUykP3voLh2",
  "key18": "3sXqEn2Xo8vkNFcEUMX3k27P21NyvBPgK5ftsEYa41et8r4G4ffzCjEyrxc6nc16a4Tx3nY4H2d9AuNMG62jU3CS",
  "key19": "R3arxd8tMrQefzSzvqF46XcVWMMnSQFTq2MEMiWpJZedZwWTCtMMu76KV5DvYrGQvFr6J1Nk6w1SJpfr8Q2GyfK",
  "key20": "2HqVfDU3dp9wwStvzrVPk5RNwVjzk8UpjjErCut2WF4wgmagzSUrxvhgX5rguRG2ejhPYL9KGenGRMKbUFEmhz7a",
  "key21": "245cJN253P7AKDPAbQ4pwta8RP1y6dv4fhLAAqqgynzgtTta4x8gMvMkZDMtGHtF82EKYo1WkQiohTknyPQPw9zj",
  "key22": "3HZTtW3SBECjAEFt4khJS22Gx7erHDqHBR4pqwcPv7WzbPStVKi5ET8b8ygEHZXiZnH1bogKTNuGrYZm5dUzpBoM",
  "key23": "39CjeXSFapypXtri1vEQ9VwLkDHb9W18XPgNDzWfYqQnu74J8TB1bRe3q4fUjkFbp6zsMcYS9tkeowXxkGLW8ubZ",
  "key24": "WKAinwSTqoSHRURWC9da4z1RrJtDXLGs7dLKF7pnhrANn7AUU6kcEtBMUnveAU2LcMkamrL2mjccVwxgyFrMH85",
  "key25": "4EHiKZ8NuLxLCopTxL7nQeKmsFNBZeWnSgKQgwQBfLCj1J59AYKdrff5q1fkrb5afGcQW1FB6xpE7X2SjJNREwML",
  "key26": "2qNP81zPS3ga2BNF1tKUh3vxwZ1qZjAk3iGgX1KWS2MNiSwbxHhcE1snPSK7NoD5KrU2dJZYsvMuCn4JiSdL5sNt",
  "key27": "3sxBdZ1Q8Y9FiTE9y5XRNDwW5sk5HDraUvSSQrybHeZUEN932tQkzi1b2K3aZPz5e31P2QxxpByfS9BH8Lb1nQLG",
  "key28": "hce9xzprBrPRi1vx116rzVvL4LVFagGiQXEkTVkcWjL6RbYzs2kJKLbkfmuYdFAMm3ZFtRRTTn7SH3CxAjkQDAp",
  "key29": "3zgGbGZYYXBA5D54NiKhgBHfcrpnshzHTV5SncyU1tNTZoSysDr9HWeorkvhRAUK6jGfN26pXs5hQ6TEkNtZEbG",
  "key30": "Cop6CiCLxhVVrKWoqnqeRJYAaaDuA8FBKSahXN5ovFogNdcQGezyFv2Vry3CcwHfd4oZfmCwa5CDTi3wdhsGNTS",
  "key31": "4gkbdSUwvmqkCueKDd2WPVs57MnmpYaXCwNr71ohfCrS6CKAtMUWmrfvRnDnLPyqLDLPNP1G9Mvv6G59sq9tiNGa",
  "key32": "42qfx5VJYT59ef2yTX3d5BgwP9yoqmJrQS5RXfqq1PeGy8EZvErgCGmcQWDKmqASPpah8EsLLmDHoGtk2AHx993s",
  "key33": "4Xw7Fn5yi7n2j6waH7oqLqjTjbUbM7zVKmGXXSx8xGZxhNWifmVrSvebHDNzPfsHiCubNYrhpPwfy2PNv8EkKcf9",
  "key34": "42JXgpbMp8YWxqHe4oD7RYYz1dhg4pS5Ls9J4UqMJd4SKMHT94D2h7C1DVEpdjkAQsz2zgYQxLZ4QAFdGYV3exmC",
  "key35": "2cFUAcq67t8mjqFbJTAsLhNQrpzdKCYqsYsbJZJf1KLgFD2bAkHyFzFVqLLn9RtvsRJHjgk5QsGtQeAarUeS9kng",
  "key36": "2XKbsQ2vVzAgzuDvhoW5V2aKHB31pTDCSJh2TUcd2DkxycGVsSyJCJ6AvoeVGzEZMbXVoBXyQ4PxKpbwMitra8tT",
  "key37": "2mm5vWzHyeT593BjFxPNyzsZc8rA8xR8FTsZqLkt34EoYaD7tuXjkq9hnFJ7aWSkDSrWyEqvMmXnBr36p7N2hC5c",
  "key38": "2ZsyGRA3nQ4Qhj3Ju9Lr4YbGnPT3FEniscjLuG9YGgA1vJuB86hhKY1McL28JccXCw82FJpFqXxNKTQdETryMhA6",
  "key39": "5ek6oxvEGEigL1PYypn8UvdEGErS2jTz1NCaR3MhoF4MNDQhc7Yov9PJ2fo37KQ1bZXXJA13PynMrA92VZWxuCbe",
  "key40": "3caY1NV9rqXEUrxCFHyBsTvs2mPr4RqS1SEe8N2dHsUhhkrRWiag7qFwgFcqKxViP2Bg3q3JqTGuZsTkLpcj3cP5",
  "key41": "36QU6fxYtoWpHnd65zQLobg7zC7nG9cwuRDgaNbCYiyfsWbVdCHeuND3fJSu2DkYeWei1CQQZkwYneE2pSeJvNcL"
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
