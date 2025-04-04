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
    "4z4qqkzY4yLU3kDHRnbC7dcBhqPssgzXDk5R9VP2c3LbLeAzzNRuSUwcnrCVuoHLCNWV46B7yM9ogLRPcwe5UxM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4QZr4wdyXPMvma8J4RFSDa4EgWNCaVocPkbMqigQkTtjBq3sRqaTmSLmfmcCWW8dftFQAVog88gfm8V4X6Q5x5",
  "key1": "3MhDqxZaW4bCtuZcq143DvKe6v4Yhhg7fxWZu2Efbskna59WaZ6Ax4DMLapUnWgdUBDfc7tPzWVBad5zxwvyGWN3",
  "key2": "5iHfoPDemLpBEAtePtQsHwFg2LS3th63g6DUU4wMTGCJx91VxMXXVNWDfHNMPmRSmMPY7yJtv2UtPy6449M6bFzF",
  "key3": "2U5nLMhVR3gHgQ4CRPLHnkLSWKca5RvHZ861uGbuYkFpumZreXgHJVMGutJkfPVPDT7xfXNNFDKVNvj9EHQP46xU",
  "key4": "3Tb3Mn6FuoeL8hranvsHTZD1fhtiX1LmkjPTQCzA6zSEQAeCkQEA3Z4WD2AnKtcvUL1naCD9whLTBrcx4xJYF9R2",
  "key5": "3RoqBF1at5UD38yoatCMXyqdwvzBBeyLuJUm8YBbKEePDp4eUyUVNCyVWspPGm8CrWQYkfBCvyrXsXPGe5gqMuTB",
  "key6": "5SgD8TCTft8nu6fXcEbrYwDHyZYB6a5uYrv4f6nn7C9WNwNmRzL77gDn4vzCyXxCTxEhPvKscKmgJUd9XpFUAr1N",
  "key7": "2EvcPzryh9M76yuqLmy1sALpFdsYari7qjKV1hgRaRBKMmqUoMrKYfimTfLB7UgdP4Q9PnAdnKdsScWtLGv5LyA5",
  "key8": "3wpDRCXUnL9yu5F6wQX4hs6bAfB3AtjjKp5BTQst8LGXDxV96yX6dMStbFjVeG1JY3Qu1FnCjQdsveBekACQpaRz",
  "key9": "2j88AcvfVkQBojjcSCgXTnFdmwBvhrbTsy6bh95CqjQWFMzMkYM8m3amrAgarnmCpHVQmAjthLJiDJpodfVxLF1y",
  "key10": "aV6iZ1tQpVcrj6LqEhitFCJRwFDa2PfdDjrNM1Ufp64TtdJAvs8GkpGHUsWABbNSicSedkgMC4J2qdku7z8LYWF",
  "key11": "3Xiob6MbR2HC3BxEVnd8vNrPzqVftNXsgS29DvVCw4cpuPRXccVu13AE1RqWc9LPEi348uxxiQHZjN8RRobiBeny",
  "key12": "2ezqqdbjbU3Bakd4FSnEnToe2zk7UtKJkpqUmHsfoHyLUmwnm2bbixFMLXV4Xuwj95AojR4ApHptkp5nZnSvr57r",
  "key13": "39YQwsDyMUhLCwtUrGnv7rF49fNfHe9wPqaKJZiUcw4b19Te2Czvuw8xvVBDmoxaq2rTGkuCCPnh1J5LhbBfjJea",
  "key14": "43hfVaUZgXPRTGAWt8XD4rFs3MbuzziV9WDF53fKBzL9NTin5dRPKTUFz1GzB6c9ChhqZFFrsgMzseqdqYh9mJTz",
  "key15": "3JQeGpHr1iueF6TwravZAjT7fzmXjKGqyEvTPw6pUP9txQ9xdbmmdmYxoMWLv5ningw1WmHZtmJrsytRZfuz3XBn",
  "key16": "4Qa2TYWmETv5NNUvdfLA7FbuFYEHhUfcamby5Yq657DNTSdHRhaE98nWJ7SDrznTKNaVcuoFDo3giwim2hJQ2CYA",
  "key17": "rjQFPNhi4ke8FA7uSh1b7uvDz4W2JHArqxzBUNfYrLtLPGZjJwL1oVDjNTmr9gkDPJ1gFCPF5TxiwvyKPSGZZSM",
  "key18": "4LqM7dm2A4oeUYaQRjDmqjvDptVT4UgC3xnE7cNZ2WwT7SQHZrDJdebkX3ZGefa2t9aYiQWiMTLGaYb3ctYRUyzC",
  "key19": "2GjwYyuH8tLeTUNCwE19BrksU4k2Ri7CQWzFSH3tEjcLVaua2A3AosWzJCNzQ6SAnPwS9aKPnaHrxUeshoxz1tLV",
  "key20": "2mNnVkr55LffhEsH3qsiQi2EwTqVSbuF4oFpVbEF36FSVwKp9C4KbVtdWpgFty7c71m8F3UvCmHFPSLFfR9sfuRv",
  "key21": "5Wg2gpboHgQKYPsPWXKhHwMvGtrnHFzBEEZwuD6YjQRrXkbZsUNxi9zYggmYu2qQ1PmDYfjaofjhxxx1Cguz2rpj",
  "key22": "3oJ8jvdYGfbDjr36dcKe61RNAcEHDrGtyXCrpKNuFZ4wXVxttRvT2TY9A1jZi8wheR5LyCmyb8UCtuWFWoUU6E6w",
  "key23": "2wooJ7Wb25HboDn2YnsQnZnTzJH3xHmJKGQLMUXAfGb7CPRRvvLdJ8W8ReNoqXSR1iupD34afnCQ4aZ9fcDKHm9v",
  "key24": "4eG2p91TbN7WorvqULRvumYa1QLNuosemrhzfThKUtdG3YTqWgbRJL17bJkM7oa6pDfe3n4h5e8izzuqSFeV5AJc",
  "key25": "3KrrNHxe7CE1DsFuArW8VEZxrv6r8NNnicEy8Zrt121345fy7ptA9gFU1KESvkVxrxrR9PKhTCDEn6idmPdn1wMF",
  "key26": "3vbnpjDQRACzeta4ziLTtrAAvtmXeHqG3Nneyz5n6yNzD811EBHZtaHAsajNW1RfU26CpR4exDp2zHCFgpAQcTBD",
  "key27": "TiVcWF4AtH4Fh31sLgRkPbeV1ue7yFHBbmZ52bDNMcGtSmf165jd5UWQYGdCCzq4fsfwyaW2R4Y7aPyPdXQ2kUs",
  "key28": "2a2u7fttqoAkQLdDvyfWqZgyNazQwSnjNXhr3WKD882qiTsN8RuNg9BM2ADDbKZddgvqYf6pGtb4aNX1iQ7XKLXb",
  "key29": "cwPJ4iTtMvcYZHhs5aZc3AB6ShKyXVDzRUBtddEHbEHN8wXX7pUMkLmoDFXLUfqeabxCneMRp92T5BgKakwfMAF",
  "key30": "5C5jAb2pzReEq1Z8peycg7hNQuSiu2uELEaQSciJ8GwtjHBVGGwFSQMPq5aFtk2WxUXWfme791zcsZjQhW7PRLd8",
  "key31": "3rvQJ3gGZBtpabQW74e7tLmWh935ZCRvLRpw1dhXMJqcziibP67eh9nTUPzskg3RcBbnqqHQ9nicjgZjTffT6Z87",
  "key32": "4hJqTTVg9KmEYfPrQCXG8kZHXKcdxocYcJ1KCZog9fYf9Dbuw4CjBT6HJmit3qRdN9uCMoTy3kqKwrkq4M4EQKZ4",
  "key33": "7qCjwsPVGtEokhV4syGk8qh6KFbvBT3GDoGLz2DTXqKrufSXKpK8mELnFd2BBdwp8kThzHMdVPH3pLv61wwmzbs",
  "key34": "23KE5j8hUgCv1BsbqwEpahcWKFgENA7ydLbS4btf5GPCgv6rGnyCxcW7x1YvcptUJ8A543pMELLUVDiQceY5rskh",
  "key35": "3koAQBmfY9GYPFbfSB2ZwviPiA78nxPDNMA2jKVYzU8MvSWVKABgcsHDFbXiNa5kEZ9aebiANxf6d8LnfLYvJouv",
  "key36": "J3LWFf8HuKmBANvwBHd33S4DuKhPgCVAnCKHUJGWdv4YTvM6BNipyc6Z4vTEp5UH2YPmS2M8PzXYMryN3rProoG",
  "key37": "26ZtBCrd8QMTTHstGuPGEY3qP3pE18z2bUmk1SEqXiuMY27ZsucnpF5ADcP52YSKuk2N1ZtxQ5o6AQQcKSbSTrR1",
  "key38": "2gpcuv3yPbCDD3AGuGjeUwmFyi6sAriNKx1wgq4Vbt8SFbJ6959ZF7GQysnmsiR6jvBgTNsaaYccxGNAV9ByDYE3",
  "key39": "5wyAY8othu7y8st6V9CwjmhgFxq4GfUS8GtQpkJ1TnzzV9KdThtrgEjqeV5KKsrsXj8Hj9cd79pTjowsb18aPunA",
  "key40": "3NiUdZtvJmAUiUcQMJJvSos3TmjCjqyvPbdzNUeDXdLnSVTAGxKWmf69xN4ZYsPHSs2dkQdBsRaCkhGb2gZnJgTx",
  "key41": "4szrRZbMdVp812Fb1v7caqLzAQ6zJVGRjnsxsohZP1carCNrucVCCZZgYGd9JvBB8FesBA6CaAnWsdnD4J2ejQJ4"
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
