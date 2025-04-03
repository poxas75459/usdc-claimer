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
    "2BgAGdq2iyqpjx45MoBVNKZHskpVZPwTZYb8BYdhxYjw1NJq52zg2nHqN2RnFuf2ewcgFnMPWbPKRqg5VALUSKSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f1Doid5nDjUMSQnRz3PPsfkUk5RLrTV7H19zenKp8aNVdpe6NpicfLXKj6oCwoC8mUbdKrUQ6S5aEQt2JDxT6f9",
  "key1": "WycsJE6K7gwPuWjaoitxe7ZvZPTPzjkoN9g4eTgfzHr1YDLECv5og7jyTjQCGp4KMNye6aMZXLxq3QMzD9DRug9",
  "key2": "51PZj6582tmxRrGQVfbLvqeeiAi7CF3U6ibH2gRSe5oMX1Y3VWnMSEMU41VKazBocvQj5wxxgpSLpCUmMAHpC61Y",
  "key3": "fMB6rjSiiXQC1E6jQe3yvg4khe1GVmK3e4MaWnic2EFNRJbvYecnbYt2ViUby2E37dZVxfN1UVTPBc1ovdTWBNJ",
  "key4": "5gxkXXSXp28pRQZka24dX7DTViEs7hUfgLwGcMGWLRmYKRH4uhgaQSyXdi1AMUyoDZ3sryJ7YCU3vRi19uNr3Aon",
  "key5": "bXzwRNphD4TVVDZWCKetZDexqa1vFYcoFiobqyuqNT2ekw5BcSjFMHXxnBcfVpWWXoB38Exf2wU3d7rSvrNyYTL",
  "key6": "2vfGaYxKJvyGPNz8qquafa2huQ73jgbLe1B1v5fyyvatAugSKr6o2vyzxHXvuUGa8jJC8YeNWG5sC96aqPUtTvce",
  "key7": "4nLAhBioykLmogKFpeSg56eLqTWoF1k5c6KGaTy8ZWAgsgA5epZmcaqRZQqXu5bN3vHcUDGL1XkYpFeMcz8AhbCw",
  "key8": "YxCcMfufiSVbs5SCzCU2yD2q3Q6zDbDRwMpzdT89MxJn28eVUcsw3iX3GTqHR7HWKxZdKkSV1WDaDeNMp6aPRqr",
  "key9": "KGe2AVPCnftKyEuDiqY8ar4E4W9H58K5qv5y8cHmwXuZn7WfXUAeMiqpWnHCd6zWvnKKSv2KADPhKsSrJzQhXXD",
  "key10": "ZZAJR3ckYaGmpSjKUj1YVnwo3zbhScDXujbvSrP6uonhsHYWTkbcA8NHNMMT4DpBBnmsBtKkwZUMbd5viTDjXB2",
  "key11": "3e62DPtTq1fmFXDqpPhmvGTr4YUB5e1S3LYcCPXux8NbeDLkbnTrUXD3nSfMDzNX9jowXWLzhVDiWhoyorzehvbV",
  "key12": "3C5FTJgr8sz4fFj2nwXdYyuMGGGjaG87Uanj2YgBZWJYjYtZ3JwcSHW5yUZUwSqyEs7ezW24pQHX3XmvMkX7o1vZ",
  "key13": "5E54Mh5FkQdHi7uGt3Lkz86nxmpoesLhvPerrxogLckGL9DQeCoE15YmcTHboniuyV3nDNgRfpNDpzRJaQ5ryB8d",
  "key14": "4DZFXuYzHaTpuUrUqMst6umsVeeJKUiG5woaDy6ZK1QwFrkdFyUy89a99APXUcbMQnLTULipfHBn4P7RRRNus4MG",
  "key15": "4eXULGGrMFvqAHY9bVVntB1hE4jiCFivrMkEEiwxNxw457WBoTZ2nB9oBwf1dzhsjDvHSDqL1YoYFJd3uMRnN8d6",
  "key16": "3Xh8dDoQabmHjnYndBss9F3nYsUWfxhUsAxCo3HQmakCvmvNKPfPXi3U5zUhxuNpo9qVs9S5L6o7KSsAoK4kezmp",
  "key17": "4TDidQd7rhLsZCkQFVC4zYjyEQuu6KQEykACxtrMVnHLLewzQhYXjYWxeQ5sC2Zfq3exCjW5dbMf6p9eH5MtNvZu",
  "key18": "3Y2ki9RP2SmTViWFt4rKb2548P91YdQNUygigQJAQNushan1ma4vqwzzz3Qp3DTK7VQyV7PtWGyrVbrYYhDKc6bE",
  "key19": "HEzTioDHqgKSmSDA58ypesngtbFmqJcqDo4vZH8Y65JtcfMoq6qsGWmRQX472xGm1tGP5qiVmhnBMHEHDwajpVX",
  "key20": "5i2vpJJ9UJN68F4cKUxiBcKumLbJ6vHKFuPuYJAkSkHrUqQQRUVfCiCdvnVMb4uk1U9yKMu87dvdYoWb2CrJtniZ",
  "key21": "4RjWEkURqAPiiogPyFaPLXa9bb96GQqqDBpL2WzBF8GfB6LyTXUDaB3H4HW7X1Gfxofd33jQnobibWvrVa29HV1v",
  "key22": "Q8cr9xGjW9L3KLaR4VT1LaciYwTZQWjfczeTkyEH8Ab5gyAWRfpWSYDocz3uAaGoJyrJT5fXw7TFSTxdFXqWVL7",
  "key23": "4PYHwF8ym7bxWiCxfuZFVuUy3AZc8eR39KngZ3Z4oo8qkW77a1wNYQRrJFbxShs7ozfwUKmRtAqDA2iBnucu5HMr",
  "key24": "57yvpx7hgcZBURzRMpeKJ3DmUbMGeFfcpbJGQdJeFQZzzGF6kDe6zyw315D4CN2PsGuKao4RYu3VZ3ZjhbHmQ3B",
  "key25": "gY1y5v8cEPenEsX3Hpv1Qd1yzA7NoTkfpTfScznJB3dxj6PpWnzczpsA1Fr1pgBHrhMGmSKBhit4vUSZTGQtePx"
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
