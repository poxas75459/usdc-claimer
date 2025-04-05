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
    "5WxYhaexgScnMmKETtfWDt7FCek9UjjwapCgRLuchASYWDdHEraRibcaqSRNQXv31sgVhU3n7gE2s9i56KNiEkfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65fRCVMn8T17aRiPoh9JuMNM5suCsc8nur7QPdWUhBRmddyXtLc3HgYdu3ersrYWi5cNxkDtsHUPtdRPng98j2Gm",
  "key1": "5yJ7z875US7DtEYadPHM3JdJwZDekFbHd5o3hQex1THtG4weX1fcfAJRM2xHtWyjiN9Rptsncp3rgYhPSrPcmyM2",
  "key2": "7VGFFjb4rz46P68xpDnK6vKS4u2V9eUfF9xjqi2b4pyLJCrGYnM9e6PfRUESjyrbLhLPwrY9sE8nRtHfoz4Soto",
  "key3": "2ok3hzV69LEw4Mfvps9K58DZNoNrczRXuoAgFEpbYryZDCzcDqzqgjbYdNLkeSbaejSS1LU4QMBoHbbVZRfahcyU",
  "key4": "4NgywPNbYs8jNiJePMD97ohrBUAKACVxwSsTzq34ukg6JvuYL4Q2SCtC49a21mQxJXMckzqr8fGrjJ1tiY9SZiaB",
  "key5": "gFeQFVUFZVyiLeKatE2Bj28N7f6ngHkYySESpSc5KtcpcsrMZZTgCpQjEp4GkA1sTVW3zz1QPLdwVq9wbVntRpY",
  "key6": "4GrcCYUwBJV5jEwYzC2nURp7fJVvzqf7xMv3AXBJeRf6eZ7JFcXgLDnNPCnuPxVXf1wdA6Bd2TRCtGRzoiLiRv4z",
  "key7": "4kB5gSrLrtBermvmFM3cT279zQT6ihgNmP9B8v87t4B7idDthpXb1VCs33UPDimF51ciwZGi3VpR4xXMcagzCDv9",
  "key8": "334yaNpgrcyQsTNyz3GFd3GLgJFZTEUfeTA7ct5TFHoViATceq3SBAGS9mfxVtqChFkuKGZe9J5CMPuuRSkJ2PRa",
  "key9": "37F2R7Jij7WUd4ADkhrXqB79DNdxRQMSQzi8hMWfMyYXwd2QUobQaLa1UeTomNjVmhDz2uQQTz5jbgguH3MEW6Vi",
  "key10": "2bqQFA3PPLhss12dYtFFmWW3UjHRKiJWZLjbab6hvCqBYAuCudURDSjDAuJPdnXDJzHbVMkyjQgsBvf8FJzpVnpv",
  "key11": "o4fWjc1AWzwZhB6wtynQeGyRpZHJx3nTS4fTroASeMfmF6DzX3c6WbmxCUPsGWUKVrBZfYaXEViKmC3DExqvhhe",
  "key12": "2Af5geVR8N59zz23rw7qEe6eUUKb5SffxyDVMHaYs4VeoojXDEf5Wg8FCkj1qm6J9wjeyqY4rVe2sikt7WeKy5MA",
  "key13": "64RPBhS8hs1iU2R3Gqi6sh3nY3RYf8wSGHibtYnBpxZQikM7shmB1qA5TmTefLEGiEZmLcKXk2P5KeWD1M2oTTNX",
  "key14": "4E9S29GphaRU52yn7133HKsJFTm9FDHEJQ5BkV2VM5hYToUaiVy2yAS2G5kYXgts3JprNZsidL5e5nvCSmZrvojf",
  "key15": "PuwgBQFHvrd52jRd4HTRJTxu2a2Eh4ZvGiCqZBZT3P7npgGAY9QnA1gjDbPR1mg7Xx2bp9tMqaDumNase3yKWEu",
  "key16": "3mjciW5xgT2ZeRCs8hRVta1MkrppDeZYFNpQtKnTNAi9oSqssuXNRA8C9wQeAssMLfbCL4nCYpexXXpthMCLWTNX",
  "key17": "648Vp4yepBu2YBQS3oNNwnJ665VSWKvgKPjZ28jsy9vPzrhriujkFQcMABU1GHETQLUZMhp9CnoyFqTMcYm7DdK9",
  "key18": "iZ2fg6QChSeqhGxWUXRaUzsSg6gHfHwaPRLeu3G6L3Xn8VjpW6xECmZVmyMvRptJLeYhxMvagtr7MsmBEnAriLY",
  "key19": "4rUpefS9NFyXmdxWbaJ2xYfqwnLgdp9yfMXhq3xFBqL8j45KmMiDVBc4Nm6F4NFCwx9ebA5HRZRn5Sjit8j5hBet",
  "key20": "4pyXBxFWbMpXr5WczmgM4UfodtsP6k2hRrnL2vydMChVHTYL9YTXnMzjkxiTaRPg9mEvNsQ2MMLSJLYtGrKm7RJ8",
  "key21": "4ftHAvYC2FC5zvLY4xnhrf3GVY5AFrmjj4jyHJCejZieogAYk9JBaJZ26YBUVhoqxoVYZCaXqxGLihhpEYEh1o7V",
  "key22": "yFdYdorJVFZkzgaQksj3Tb9nyyKUwjiGFrh7PjTz5by1E7bxw1AnmJyPhRTiqvCT7oG8pEZg1Y9enK2dNWgVnH7",
  "key23": "3SU9JUdQbZhyciqaQ3RDnQNtuYkGUMzTVpmaSZxcp4QhrCNb3D5drnTRScTRCDs6DHSEVHXxJrxqvDLHnQeSRbUn",
  "key24": "3R4LCq5gV5kPfnYhqVDgNf67nn2o99mbkDHBbZgdhns99y4oHYvLAVNCLc5WVYKmKtRWfSuixiWe54VohfmBiiuk",
  "key25": "32yPstFYbYWFyPAEEq363GqZQybtHrUzURuxfxLFqY13xoB3CUYTpY7tcLdo7dayadHNoPYJamPtVnNWgFPNCejE",
  "key26": "4tZa2avupgAPNvgBDzH2JMqxE2Y5uUXBoFbhFAwQsXvR288BE7Et1nc8smoG8cU3mJeaR6p2kTtj5cS7AYoMd3tq",
  "key27": "4QCUijLFVgnFD9b5PvBUy3pZ816ui7uuHuVdPScmrPYEV98Jsy7r5fMVPa7L2xTPV1DKZ6XxcegExnqimefWJNHd",
  "key28": "48yhGbtA6i1UJLLjiYr5Do1gHrZZPNyZtjKj6YDTsuT144wRuFp8UEjoJ2Hwfpvirjz9UpEyAm37p8rBfwxfMCBg",
  "key29": "3yeAjn1kSB6PTkmdvcR1ADE5Hi14tYBXa5fwowFC1MvdGFJ4nyVLu8hw2vRbSFbn479xnbkp3WYfrZR4XjpevM53",
  "key30": "VvZDW3ui2b6wymDwYn8GuTxuUjLcHCR7bbU7v8CeJibW3bNLkKC8xdDTkQa7DykSb8WTiC13FZD3154dELBdkR6",
  "key31": "3svuf1pTNqyMFmxWuaF18pXupAVXFNXiA2uEcWADULjJUPEwC7ESuF8tFD9YGpdTTfsHFBKtAGHoNnZJi9L5HHwX",
  "key32": "51VjCyeV7QGUBk3xVu4iB5rSPqTer1hUxKbEYk3dbLCC6m8tWGymVwFHf23Wd2RkGZd8dkkZJorvgXcovLZYcQhh",
  "key33": "2RngAd4VyjXHZAKhkabPNyTUpZxaThPttsmVrW8x3wpe4ytvYdX7ABt5cA5xuDVfXyrFZniAHVwZi4q5LDtUKu9b",
  "key34": "2XeKrgp5BLBiHySgxjT9yfX5JpMMSfEKZYvnQ8MHBYGg6csTf4ZTmd4n3qtKeNnbhXHFkAAqvaaEYL4b5iBJDcnG",
  "key35": "2NqjxbLnZfEnDksVaKuHSwDizTqMfjr7ZfVdKpxboszqoTbpkivCKaPBd46UaSSkVagZiQFMNDPCEqahwEGnpRAb",
  "key36": "GjX5aMaFZG4EmDQBef899YyWUfonnzp5AHHERUHCUcMxzcL2HhjGHwnu6cPSf7XAun65HnYeGL2NUHneDE6wG83",
  "key37": "2DPHfKaNrvYxPD4zXJ3ZRRH8Dpj6wRAnMtSEYMZtig9fiypheU6npRqSbvej3k6ZHAYYVm9dF9nrz6MFVaZRFdmS",
  "key38": "4nKEhP8wNsSVHh8Kus1PoahNeX3qqknpRQbkRRZQGeJAEhYQ1B4Co39SLZGkezHdhPewuNDWPXUJgmLyTevAqyzs",
  "key39": "2X67ZQH3xCi3uC31FC4oqY6KvrU23mpbp9hSbqjubzASf8XqWvzx5T1V2TSq2J5UGRg3XSYEF5eme5jsadTadneb",
  "key40": "3BjQ32Kz5hpbWKfZaKL7FLctzS6eH3RgLJwhpjUmhn7x2Vumnqmd5Kxbi3sd3xwZJER46A94pR4spZWHwXzGLp1R",
  "key41": "5mhAbZk4Q6bwfA3kJSbeHCxEPimtUNKenQtbiZJ1UQAaDSLPqmxzYtHHvpmdW6HH9XKGv4kpPAj95cb6Eic9TNSB",
  "key42": "2L9QLtoWVnwGGQ5d1jPoDcFCiHQhemzBBd4cCPYXae2pnNsofkbQgH4irPgcpTJikkDpeZAGAokciijQ8MDtXx3Q",
  "key43": "BNsvxH4jWaVBecfKmjRUsUynUQk5VeLW1o1NAr3RT7WQ6enZV1cktAX6CTFSKNyyxuH75zX4oeoVzQEmWbF3APi",
  "key44": "zj46mk9DCvMQRrRdtmV6doMhZJRs3MyYmF8hmrbg9CEzHXgHd4Ci6U9mrzrqC65Qa1BdgTJbUjH2YkT74N6oAFt",
  "key45": "2CG6sUbypVPW6Lu1o7LiNbx1isy1ApiAid7S15v4KHdCGZSb7CKALk6wFhyXQhrsLH6twtZrxDbHq1Z6DG7rrGsY",
  "key46": "3DnywxZwawXbQym6Eb3KaMANxUwPN8CDyGDyJUJgWdHpJVjhUt2UNGRzg1bKqM5vRjTBZNqQgCMgZUjoACYLrLSf",
  "key47": "2mcN5n9kUZzimWHSe5wZL9XJ4aBkfH7suUyMTQ6KZgVQk7xDf68MhhfjtTUDS5s8RUe9V8EGHq4EnUg1wSFDKov1"
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
