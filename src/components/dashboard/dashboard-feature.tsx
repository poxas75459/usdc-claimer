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
    "5eNd6z2uBLM8US4HwR4rHuhtGJQaYSQHmxWpSqJJKBJodUWUCBJ4k4Tq8dYtt8mrwYPnB1vpzfoqNFoEyxeW4J9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i98EbbRWHdtKW2RgXeay6n8q2neXLfL996CEcvjzPjK54xxyGnxABiGbriLzdJBaHT4bmb63uXzChxk8febNB9w",
  "key1": "5WeWdYT4v8iL3H38qDZSVwHLfH7dn4u9ZSCydR16XrJDvgSs1sWa8x2CFESuiVWSggmtix2WdmsZ63G3RCY5iCis",
  "key2": "HxYEcRHvPd5wf7xTmZWpYm57ML8erBiXGd4UAMvMWRXjwY816D7VTGM4auoUhpJMULWeWr6sQLfYk3wByzYQUbG",
  "key3": "JQ5gHca9QYjaf4RoLba53E2eSbQZfddC9LRiJfMcXyrgjQ8XD6AB7tV2jQKW3vD5yun3DAjAkUHeUmLLbroWsnT",
  "key4": "TVPsp74ixPp8zNoPsK6shdCmrL9h3bvewuxX2o1Xaz2VoKjdGzXxmGSyeaLPkfoEh9fKygJ9U5cxoc1VMetGd4z",
  "key5": "Wn35nGLoJST6BQQaTtHEWrpgdf5LTL9DQyNrvYicFc65vMe7SuLZjTYAdhkozuWV6KkrhDXZp8zXfztp25tiHD7",
  "key6": "3mib9PXtk9EF41oTnUfiAqUapNaEoGAE7kh6jd689yjfM2suhDuhb6dXsyYg5ezDtLeQqoLGTepibFwtGS8yaDME",
  "key7": "Kr5QTPWAJ4vxuEa4KPPGu6icBvt2Gf3BAabwPfNizdSRPmatB1H6B12zY7iEYmWUtiRJsy2Yd9QC3UzvH7sGHn8",
  "key8": "2i2ieemYvPqrRWStN4R53ZKKPCCcDuHCs5yssi6WqaSXHrVeEayuxtKapTKhr1BKsujxbis8srNTFJF865FNuXfC",
  "key9": "5pfNwCKP9nv4k4VEGPjesJbmjhdhdqfc2e4sPCbqihJ7QZePUSNvWss6comp5z4YZ3qzCijBxCBBnkgyCiuqdx4q",
  "key10": "e4LA6bxovYm7zksFBYLyXvLuBfW3su6bCXAVCGDHZ8C3iYHYQZkSks2bTPk32SCpozAD7YTNo6Fyz26yCHqbSsQ",
  "key11": "3NxDtT4dzC6cLtAu4LyBa1hCqRCLci5gyoKdKwySvc2nLkTTvEzuKbZzmqvxCNX3ktJHtMZvKJzHQEK6uEhi5kEr",
  "key12": "x6kVdHERpx1fXBG1J3Yooc57aKCUiezzisKLgASUAfndFgbEU5mVS3nXe1EMxHZ2azRbL6YbRNQC462EsV2HHB2",
  "key13": "4JWqy3YMTNuzENZgPaHHaaNx6XM6tuvG4Qvgtw6ETqFHkxJTzt9b8xv4ZKg3TVkxMHnvJAmjyeHnh2rvSmC3xZG4",
  "key14": "4yirXD4k1Jf4wg4zBb81hSKHM3aEkVNKrgGpWRrXzZchveinyaKs67yXxpSyPRtNtg2Ybjre5kGhSJKT9jPkT3US",
  "key15": "62tjnbdbnAT4DunUSvx9AB1vo3AcSPy3GXZpLpGoTfoXCuA61EW5TzajkZGnwXTWzaM9kXVrJsuXFkYpzHtbndYs",
  "key16": "pYEZRs6gdNepkj6sMyz5QUeXoYX5hgZBQYKctGy9aWjxmz6jSTVjYmMSaFh4zQykxmqXSAsnQw8GPtTBx3CpQaR",
  "key17": "5a5HFj6uFypmeJ7cnTRW2jzPkGHuyGuwAegurta5MgiJsYnJNpjZThcfid5Hu7kdrUVkToSnxum7hYsKDhVeYTFA",
  "key18": "2q1GQ2JTA7nuasPmMgDNwm8F3M64pwRVjpHqqBDyz794wUYRqgcFRxHDqybLBqqQF2TbY8ys4EFWP6cWouxxCkM2",
  "key19": "s7FqUAusugNejaXwAVGNeaVzBxMk836oNgrPLD6SKMEDUje5o2yXH1BdBjVCh9YkDtyB5fhnXVGigUWtPn6Uppa",
  "key20": "syp5bjZMTioXcKHt2VQjew4SPAXXvfCTFtveYXhtbFqzjXEkv1ZX5TE6nKb3jwzXEVgDURnxxEfnGuQQS5emcBt",
  "key21": "2G5tnuA4iazJGkVbun4C6yWxRqwU9GYNNonjJ1KeJMS9RunpCNigWUxgAjbopssHVwkhxwsCwa4KYeXPfcuFwaid",
  "key22": "4AW6cVYkmdo1B6XrixrG9oFvLhJmncXGJ4zUwtUTru5vsbX99BXjypuRAqWxpyvXwr2GpzNWPAMYb1DSMDcD1oAq",
  "key23": "25EmodfqXbJtbTzzabfFxgCT4mVdbrtBYTGVrrBB3JS6CLx5GpvarSkSLLaXShRKuhS1XFf1Woc7uGk8t5xrbDXY",
  "key24": "5tV8xuPDca6o8KJpMsYUJNhJu5y2vTWuxenvThQViv3DFFcjtEtkAS3mh1Jgwf3rdnBrH7kEdwio5NpEZrbz9KPv",
  "key25": "3Mv8JVa6FDdfRJtQXdEyBC76M52FCsABEYMJZJStCpW5vzoM33EqF6FXNuvUzAtctPBsi2i58q9x3YT3qK9Bkcuc",
  "key26": "5XdfbqJ13cZodfUMxVy8otsB42by1S6ecupuRiXNUnmr4uaDPoAuCRPFDd8B9tFFVtt5zt8jTCYqxmYCuxtpNdzV",
  "key27": "34oucA63vyGesWosAyzBzjzVpm3gRZuZXPnQChnFFZDHVdxMheRTkXhcJXTUSMPjRQXwVwVZnjzmd2prKboGZ5ga",
  "key28": "2nB9agzzp9xKhRN8nK7XkqECCwoEFhd5dXrycnydHJLnGVvsjZ8pCPAy4LfVYgR7dmP3B965hicDUMnvizNbV5do",
  "key29": "2n2vhLhuyfPwFx1X3iu91einp6hpDVo5uQrUgNZe5mfePhaHi1mD9jzvJhckKASwSgUMhnEoQZcP97ZUGeexsZDb",
  "key30": "5vDQTnVkyFgjRJUJ7WebY1EnvdJ1896s7mHtXoJdQokmQCZ7Ppk8iwziq9DUEox5m5uNfgraqU6sp6bZZfcMYvv",
  "key31": "SN1NqviPy1MFa7fwbEJqRJZwjr6rKeeiqoryST2E6fy3MuzJyeC4eXuEEGcPHjvtXqY2wJSNdVNakdqXKLoz8F3",
  "key32": "5CeqWonXGGpZ5GioXDcsfu2hq9G2kBrNCz9EuLNPd9pga744jbM8dDkSK5Z9LZCXsFRX3DDJGScHFQ3hXr3mNv8N",
  "key33": "2toNHKPwpHdzB9N2CNUW5pS7gGoNNe9FASn4TQd4y7YzuopFF8ac9naodmWiteJyH9Vx26f11b7F6uvjSaTL1b7T",
  "key34": "4Ft9UTDMB2fSnB4WA3k4khEdtkkZ6vLE1cYcZDU73n9W8GS3N7Frb6A9nyeHSgPKoVJWctwEshDxPSTy8EZ2FwxL",
  "key35": "3Ubdv9LVS7ejwUfc1i5jYnCkiM5T9yDVNAFxZ19FMfmfyLA9ibHZVVFYsVpiSqGtQkoLVXDbPsQsavpSrFyKANPa",
  "key36": "K2tNX2j4ywMXk3hYEnMu3R2tEzdQr2EBHyaNqMXahk8zqgJh2fhj7QYyqkzKnmr5JKqLWujqMF1D96C8q1m8woW",
  "key37": "2cEAU82mXS2dqYrinMYBAVP2mcj7tWVMNNGFUPoJX9MPSDAb4AmKe8LxNwWnUr13TCWg6P6JGSuUT3pcHJDwJvmF",
  "key38": "4Qn8vxQJptZ6TaQpuwBKyqQ2oBy6x6CV5gZBCPyTUPFCYBELbnZG5xCDFu1SH8vLWjLFm66iFhPqx93DLLN2EfgH",
  "key39": "p9ki7xEhUorbt41sAbpw2Rv5BdtF2zBdLeSRY8tU1jReqgogRFUM8aut9vxpTDk9F7X6FqrtpkXR5xnJfr9RgZv",
  "key40": "3GQyuXzLBeNPDzLo4tdZDwFLvAxvyrSZL7312FZQDhzRGhJh6mScKL1MjYctDfNNPLfTo7nrANMnxsGJ2Qv2ZXhB",
  "key41": "39tLsczjMAJvVHPP66b4zTYwRRFDPAiE9scxCip4FgqWYdwqDr2ziCtFuXuHPpHqqViaYiSAUxFs1T8M2KM48rHz",
  "key42": "3RqfFFF9Hf4pdciKNogosZGTHTmDGSUkgqeja4qtRMDEit2hnw1doT86TyDyLEmMw2AKdVLECJ7T6WfrnJp3WY27",
  "key43": "3aPB48tuc47kEdCrnrb1L86cBSWpE1xdeM95bqq2uhZkcE5pA8RET7XvWtCrjTQ2KGPRJGJ6znnvEiJhXGyJ5jT6",
  "key44": "2PCnSzsZRq4Pccef5QDj24Te7yATxfhCp7QtSaSXKRZTJw3q3mFFWo5gK1mFThCFHRMKVrnHxkZMTFPhnSMpPe5i",
  "key45": "3xw5EYXWpFf6DdZB3WDbacSayYy5f35aEMN3yiCm3d1RUTiBi7e5HL3XxBrx6oRQojqzvgknVMinzbnABVM3Rk98",
  "key46": "2HcDqNjMnmYMHSxA6ccWugXBqvExuDY6fynTPayFdzCZaVASsYwMjkpHdmHfLEw52gu212YNQ7ugmTddeQY5PTn3",
  "key47": "4ZgPnyvTY8aA13VtSi3XrN9Q5v5uCHVcPEd6JZpJ1i2cd8eUtvgcfnDQ4tyX6FBeBfLZQQQQjrfAi994pXLMmxKB",
  "key48": "574p2PqzwiKBFFF4AqyuFi7vQodZeKtJpuKjvb8zQYm5HdUeSWujZuvE4CPYbZfwkrJB4biw7wbcy3ufDEyKmJyd",
  "key49": "49DpetK4x7bKnVEtCX6uKgE1akPubJr3Xwn9igJU8s5VGbtxdaYee6584ZiHdbMfxN7Pngv4hS98BVJamp58gQF2"
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
