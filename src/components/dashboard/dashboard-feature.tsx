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
    "4Wf6YUFyBKiW7aSTkgKfFcTomVeFbaMu3rEc8o3f2grdBdZPY93bX2Md93m3ujENurjoWgGnFJnKkP1SJg4e8oah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNGaLzUKTver2VzgsMtn9WZLcqj9cebTf6hKkVaacJwqP34GLarHuKYEoNPPPv6QcsLSR7QbZmMutJ82RsEYsTv",
  "key1": "3Jq4ooVa6Gtyykcj8MjaFiB7bGCQNirX26WS1T7p7b4FDsom6RC4uRQ5qJ8zNAgh9J75UPfAo86sAcnwNuX9GnZa",
  "key2": "3KDby7N2hK3z5keQnHY29stF4nXysLYKuBFNb6gvLtuqKFNVx69mAXFk37jYdzJQHWXcErptiF9szA4G2eVTd8oZ",
  "key3": "66wqnTt3Xf77aywKo1przkukS9BsPMBboqELXkRvCgFL7uTgNkAnQBZoh27rSg5mpCHHR9dahuE3TnRLy5EfF9Ha",
  "key4": "4CZcZHYS9NKnWwNZf6JHqmtjWrh4VWwzA51SAzRNmgcFdp6goTLgrdniBkAhBXz9JQC1RhHTdNLNZvJmpHtoJCwo",
  "key5": "2utB6y4P1aovamyskf3sDhobDUBMBYngcZSQSA3xLFDjzt4MBokzneFdsnGW3S9kht9d4Vr2CvBXzXGC2iaKVgrT",
  "key6": "5RzREsEF3VbnJ3jXRPW7GZ9LR97f9Jhwcp3XDdbBpJFEQfGdSaLUqp1euTyqDXp31X32wwSgkAaPPQoa9LeLbWF1",
  "key7": "yGBRVTde7NHu7arPKoRSiXL9DqgCtyYkLPmo5Jy1ZdMRHhVpgQZ7aEU5CrvaWgyFevGhuKZGwDefmFdy6Ctup9u",
  "key8": "3GMPrBm2wJ3SgV5WDbeKZvZ4wN7KqfBn8fCGW7vdA8F6PV15K9gbKjHb6bknEcbSHD6m5o67p8quvbPVqmXsYsgR",
  "key9": "sZnvPdq8BQGEwZde62Fufti2UPJMRHTJyYQYE9mfWFN1jSidsJUA2CwFttX76iFEqefVQU57kMvj9RhGaSraVcG",
  "key10": "AXs4kXDGz9PDw5r1UAEYLax4ySN8zvmoyS1sPoyztU7ecLfbMCkTv5Fh4c5y9ms2ypVXJF7C3RVHrtG2Akkp7xz",
  "key11": "2dHf9HHiJMcQocY4zbUQBzs1W4zHeaERy6Xo59teK3Ju8RWVXhYba2LiKGVvE3JGpJ5adpcr7pJdWkpMBTf3oGF7",
  "key12": "3tT6TkMqJHaVVfsLp73D49y4rQ3tBXXsmkPxnfs2tfD8KetaYxjsDhCjJmSysQ7gBBjAUi3JtvMPcYFsm3VNdyAa",
  "key13": "3XccGVou9fLrMuQV61qpBTtGWYkzLQ8EhiLPvEp53wt2EF2nKW8UtyyH2PxRRpzCEEtn2Bxx1cTtXXAUSPa1eDoo",
  "key14": "3jf6FyRkgwjtPbEQekP5G262sYGFhbQSaEde6cYRGxgNyf8xDoPyW17gABLHtuQmtZ7iZ368YFmmXCrPUhCUUxMQ",
  "key15": "5Jnh8cFRFqY9SK8tJfoHD83jPzqngty8CwfUzXsP9NLdPRNrroqdwGBTH7zzPED7TZd5KmQ3mdRDXLFEsTyBKoKP",
  "key16": "3jo9tVLdbYaUKftWUxNWyEPYS3CoEXGwWiyer8nHU33qaUCL4d5iya4TatLF6gJJ8xYsUP7oFk7Jp2yVdSLSBSmv",
  "key17": "3xRPYhZwtx9NDWinkf6rV2rym6a3SwhFupGvsYDY9Fx6P96xMhepjfwta54jzCmMtvDuRw9tsdGQJ3WqHPYMdDBY",
  "key18": "QreAGiXuatPUmiseYTZjuAKsfgzoCbxBxuoC4jWwJPPWbkr35VAiym8C9WFYwqRtmxPNrZKzcmEX88zYscfcwrY",
  "key19": "NfDjZUHJkMe8Ki274VX3fRmAfS8PqP8XmV6tkmw3Pw8cd9NyPonujopmoJx8N4H86uasdWhMdxLFbhagzFHdWRn",
  "key20": "5sNxo6QfNJDPJL1fxL3gNUiVKtvQfPvq2fYVvd6615qmWcZYb3TJNyHoWgxHWMEP3uF8hwdPPPQ4FPDiZFwszRAq",
  "key21": "5vUsDF5AxTEwJHbNBpwEyAtWBC1zwiKaEkvCPrJWumyowM42sLJBEj2bAh1amrYNEoHfaaoLtfMGxcYzHyoKo7Qx",
  "key22": "4PdiAUNSsvoTRrPqD2vNPuB4ccShDk7Vjpg5MD6u63DvMckJUMBQonMUvBU22X7kwYqoxXm6HWm4Xb9X7653HxvN",
  "key23": "4pMKJBGi5qyVjUqqsuLUKjyeLpPWv2iHa71AaVDNyyKNp3biJsJ4btfsiFUCndy9g3uoogstnUQoBAXcHPs6hWb",
  "key24": "45iFRA5frwubPUhCbtbqrDbTxiL8FjMfFCTutbSYDvhhFv9EAACiz9krW6qwAq2z2x5it9CdmjtuDLNkr1jzouH3",
  "key25": "4mmhn7tonADbgrLCCe6RfFbL3q5SuCVYLMHJ4zodPE8u9ovYrNswv4LY4PyX3m8RxQyMhvxfy2bBHH27euqz6194",
  "key26": "3wMMRiWssifZDMTuj492zBmkftvJxB9qdKR9vHZe1xtAthH3TjaY5PUxkHu6h6sFWn5QomXBU1US78MuDuRc4ay7",
  "key27": "5N3vjQH8qPwzNZMvzMruEyGWenfuUHxdubYLsYBAJeq5jBHrNFNouYvV8t94DqetAM1Y4exM8DioNyT2LPKujTzK",
  "key28": "SqaXKRrhxGBBFnEpAfPHjvDX4KYV2xq1ZBvmcPrYU2w5SyWJEkF6NPhBfvSZLyo7Pa5KktMbRHtUGu3VqpTf3Ky",
  "key29": "42YBJzzBxc838fecxzV85xMUWR3Ut4yDFqvPZcm9NmP6XmBcf1ujdqvPoB8pFcFbSKAApnCvD4xKGkJFGobohTvN",
  "key30": "21CgAE61v4YeRf1cNGiHg49b52bwZyqPxLQjoE2JUyKjzTgmgSq5MhfvKKdwYi9A1iDu6vn5nCLLqoCHhM5GvrMQ",
  "key31": "5oGdPhAsSKjH29nwd3y9Lgxhq5rCQ9ixegQAeLMbDAFvGWJrwaLSJDEbUUj854qzYMXnYCpPWGUvhotXys3ihqwd",
  "key32": "3wZpfHpjBo2o7oTV957MoTVpDhuN8FeS5YXymhLs1m64umuL79GnB6t9Gn29EmWyq3Zksg2bLAk71Ye3nakvcDZN",
  "key33": "5mNuyFUWp9CLZT1bGA1fP8ro1yWsBja71cXqw1WaZamAJoJmbynbRTEASMCmrU5yLyYmok1JyVxy3QAFibF7Nj3c",
  "key34": "3difCKQNttWmyRuHWxZGXfXQbriQAhut9fdsZ2gtAP3vSv8XdtAeKTomckVYyS5QJ42rxhhNQUxmBzK1TDpBvWe2",
  "key35": "2XywvWWtJ9rrdL6W9dvDrdaGiXMSsu9Udd8oyTAKpF6j2Fwaafs2XMDJpFdMtpWGxykyASruNfHq9D9j4kTrfA8P",
  "key36": "3ye5qyM3F1C31ymes4wYJgCgBq187mkZb6cv3JhyMp3Eb5vpK2DfCW2fxcB25a5agPky7iHqsrkv9PxMRLCwUwbQ",
  "key37": "2sGdBsCo4Dpu9uRQKSMeJK5e9po1ebmwQ1EwRNkz1Q4G3pjKfwfM3b4W23J9JkixHB3raXwbryuVhW2eeNyrEMAT",
  "key38": "4BcwZg3ghTLMJ9bCXdwLJuXozL8V4kg6daqSV9GvDds1bw1gtjRJSxmKEXAqzZshwwMF6dBqDX5hPR7xbfC6TPYf",
  "key39": "41AVFR3csM87asrWRq7TnTcXz6fAC7DmbRgRZgQeM72RJc5WkAj395VZAeQyQKZzmRVJmNaHGaqyQiDftz8MHxet",
  "key40": "2j2HJ3C34mSpL98hU2GjkxypxYzKaEnFv9R672ggnhg6dEwmR46wG7pxSfpqN26JeW8MX7MxB1gznhzUxEvA98CG",
  "key41": "5AhQJcJiJKKZTo3yWLPP5xptJEsy2W8p5kH9irQQ4uXK6cKt6Uqbnc6BhA81Jvs58mfgckVCXgKr91SCotW4Cvcw",
  "key42": "2qbV8inoMzPm2jtXrdmpFymrybxWFQgXJZ5UA9Ly5e6as41Y9ivg6kaLgyfEnbh9uNE7RLEGzQRTFi7kHnUw8F1p",
  "key43": "5Fph1ygEsdJ9dfJc5i2oC714E3tLgqrcTLceabmM6h8YXGT1XtT8bMuqTEHeYzNb1EWgNPDaJgnqqNT76vpfDgG5",
  "key44": "2S6JK3kifvz41BCwKSC7sbecuXH3zNw6ZCKX4b3u3rCzvw1pk1UoomSDtXePf3uur1ywtDk797eQiLr8gmdhJWWs",
  "key45": "2YpVo6P3GFZr9VDW4UJ3RofQe74tuCYxzPfipsf6LZqkAm7Hoe4Jvr4QQkGS8QXvY37XNfApyiPscjgt4eF7Qnw",
  "key46": "3xa5kaN4qWW96WmfBhoDKeS7Nb4uk6EGKLrH4x5NnASrFYKBDZUxcekC18HHhJUvE1diV9bbHRmQtiRYqbNDpY8r",
  "key47": "3jwnouCQuCFe1c57SMHrMP3vNA1NGL4AMagcHebx79zVDDsHqX7KTSt2CTrBkefb1QwPGCMiNrPcj54fuQuofM6i",
  "key48": "4J9F9W1NM5F6LxtdBHW6Jei3RU5hbN6x8G5GvxxG2HnJXVFejPEBawgLK8G3iwVFCkwsVeSpdTMcWBf9KVk6eYij"
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
