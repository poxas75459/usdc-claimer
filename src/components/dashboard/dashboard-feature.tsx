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
    "5JHNvD3DvFWvFn7GkQDTBLBs997WWfXEuDmaDK3LnZKRx5jgFe9N9u5EaSRPrNy7YYdsU3kUftUvgcQXG3DwHyC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJ9QuGc58D2nooCmhiahXJogEZ9uRSRHQAxDAHNEdYshEP2FqBjsBrgpwg2q3DpAA5PJbyZoaehgr4zHFtPyrr5",
  "key1": "63TabfWiXqaBuLS7q6jJ5S5hVQTCsGXQdbNNpeTN4GWEQpFNJxXYw2krY3iJfcijrD2VoiWm3r2vTiQGgn7xLqRi",
  "key2": "2nnTswpVBDrcDpMNmA4fRaieZxsbxy9QCdzPGSDv3cikRScu9dQx9VQEyRQZy79Ln3H7DQdMcWDbnNpfFqcf4pfH",
  "key3": "5cHDY1jBH24KBjV6zzjpyVCxSDJjfAn9ymYh1S7jc74VPQ3m1DTf2ZKp9PLJcE7kNYtus8VPXZY4cNZk35Ti93U9",
  "key4": "2qnxQfVCUeCS4vfjjtJdcmQVSyrSVbSfXbTppEG5UGw8aX38dbqSPxCfBkjF2B7W6jLcwY9sF3ZouR5jxk2TabFb",
  "key5": "3RfYsYh72YucTDyY7sXuTAB3qSPr2ifiaDfZuJLXrGAWWhL2EnK9D8P3ACjTZ5ZVk7dq1uoTFM2BKiDKTECKmqJL",
  "key6": "Ww55pdzfonPTARcFWTLGqCuS5c1me9Nu6YkF8XcG8CbZzxofJ9Lq4FZXjNu5tzvjTqantcBKa838rfLVhCbqbyE",
  "key7": "3pQ6aGEwsohnvKvda4egyeJnjSGN8zqVFzAo9o9kQbz3tiq7uQaJwdtWKiNrvNmKHWh7niM7FA1FibgJioi7BSdc",
  "key8": "3SocRaVX7qP7BqY8cTj52v3GVfzjftaDoz5cGtCRdSSU47enDusZiy1GBLKbTzi757kXVZfJTWkDBtkqhSmiqdWz",
  "key9": "44BoLxLqTiSAuRVdYU4ic7QQgHLWP7npmXSWvBMQXvogBufBHvmL6KmJpy7assVnWZXhCXbYmPmQmNh7wRQbnL6R",
  "key10": "4GakhACGpJrkakpGK6wfFrStpVxJC3sHyQ2VYjgEQjedhfJ4ryZEvURdSoRMnqg27VdKSBjJw5y7Zw9fqwHtLRVq",
  "key11": "vLjZVrjp4Lu3wooFUN3GSrBjm3hyw5vr8oMAJBxmrMtM8JH2J554n7eDJYiRi6XzDa4pWx6hdjtenH6yRk1BXPb",
  "key12": "395aFPzVp1eDdVYH1BK96oFLdNtRY7vSZsQYFxQuxcFEfBHyjaSTPYwnXbqpJC4oDdczd7TSwTGdFmMRUMCTQeMc",
  "key13": "3hNyqm7AzxNFLZnmZnHafmyNBdpM9kuQV9WVqtYfd5j1MHtMnDSfaejiA97ZExC6EsXTsixehK9L4id2Pen5BAj2",
  "key14": "3Zy5ea6JrQZ9QxMjHUHL7G3CoBgqTQLan7Wjv58yZVHD5t3aNeEjGn9W9G5xcsahYxaB9i53am24mVqVpZtZT3oK",
  "key15": "4jfbVtn7Pn17FqUJJtsSnJpw7yeJQFR9TJnJKhq3Y5ciFFein6zLQZ9TzcwsYNo5pRK5WkSjtxRbDCG15Xz7CdSy",
  "key16": "dxianvwjmqWURWySjvNWUoQWEY9hiXb3HCBBrx4CkqciiirJcP9i7CJHYSqCCVmADDttq3RCfdcFMmbBRNqSRje",
  "key17": "3ef7YrEoe8k86GayvKC2yvK9aMZJinnas19TmJCzp1qgM7QnsiH1vmZMXrwAcnApsgUcMVM1dNDrYEzdSmCuxwDp",
  "key18": "iKT6iibjGPDGXHrwJZqSiZv4uCjcbC1YZEoTQxKxWoXk8zsPgcQDQZ8mXVv6pq8ym9Mjn9EFbptAcGqtnbshc5o",
  "key19": "oazxfGXrfApk2WYGX1coxbuF3uo21LMz4Ew4SCgzZsJuYFQijAqKWghfqU7dnYFr45RKbeSzDosksMvZoEifKav",
  "key20": "3gfqaj8qQjmCvPianfKrowjp6r8N6dpAz8NdTAwKo9d9Th1TuDfiQH1aNjGPvcuXwyTA1TbwNjSDDh8ToVKTkvww",
  "key21": "5m4f3ZgrB9EEGXW3cjLJjUsiXdyZQ9tqqEzrvAReitQuLsbMTaVa9dqjCd3uXdR9dDHnMCeRChuMTPJcw7BWtzmM",
  "key22": "4rCePjeuNhDTj4WTqvgkgg3s6G3tRGckcb6j8CUxVMjRXkPSnv2zuiNc7afrjTcSaBhEmkimHHwVLPrznRRM4tbw",
  "key23": "CTaoEQxEfrmZ4kLsEH4QXps5dQcJcT1X1QWyCtohAXmSctN2zwYPgA4je3bsKEjStsADfByzDe59Xn4YwRnNfTV",
  "key24": "3DKDyxGnUnnfQzw3cGKafXQdJofJT4zxGcYmuTMsTEFcaNXPRbjqJ73QEbxN35xHQmXDf7VXPPy3QDeSV5kxAv9B",
  "key25": "3d6dcbhoQKqpWjEaJ8wNacidbcdP3QDWc1AVsvG6sfPahGaW1B1CtXhnbUwbFa4Khdf7vFgFjQawrFbSwVQAMDkE",
  "key26": "drx4av59MRip86ZfPWh6yz5wa5Zkp5XbyYSnjKmFqGoJduDV7PjsXAG2oWQsWE3YihWZqZ1YjisxmJCndCeXwV2",
  "key27": "63vU7ft4AtRmxoHrXbncQqqwMWmKQp4rUkyQRiWRLrU4GPZMbUgtJpDTH8ZL1hhZsqCHGWbngP5gvhRa3dGjPf4W",
  "key28": "4ry8KqDKj7oc4Z5rzdP8aBZ487zfjbfEVbVmmKTNmi7AYncYjeqPwKCcLSieQQ5F6StFL1zUZUGnEjVXcdkrKdHk",
  "key29": "2pkZXQhqgiQuzu1sEF3Jxxrt29jheHw1w1aUYEvPEzNkPmA79j6Cv2kvrCXXoCBngLvShRoU46nLAHdrXyhSCe56"
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
