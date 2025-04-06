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
    "YMEyD1WaAQe9QJ6hCzAKTdBxTgjR5JcrgGqgpGsV1Dtbmv5JKiioebKWB8iDxmvoFTwTKPTj6uVgqekTCV7pY76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzNHLQHXGiY71GTWFBpB6YN7xorDjL4Vkixcy3SqRi9cyz1qQm9FaNX1QUvpwqSHz9xtiTphJPBtBy127iHvGhX",
  "key1": "2TeG51aaWvtijjs9B1c9hRkgVtaztrEhnz3i7M3NhVjqSoDXSadKHY6fiPgyi9fuFihDuruX5spwP5jeLPs6zxWH",
  "key2": "PAZFjbCRkWwp2xCjyBpDRqgapAE2EL7PAKC98BLTPwFwyUNjMBHmTxLegDY5ncWFw3thwcDgLFC3tZq5NFeXsx7",
  "key3": "4BzZrn9mS84U5g36C9mniBw98SnM5pRPSX8J77Y3KaNAACaXQ9tN7D3QXgReYNVnc6VJzvePWXQFSvBMctQcY27u",
  "key4": "5gBf6gfg9rkCvoL3yPN4QwmxVLgdKzkaDrTUU85oRp9cVzk77EGPqWdNtuEWrYLdLGuuu1VuoDfpvFhaQy9ru36y",
  "key5": "5jVqQRctRcFaZwwHSd8BhpZRNvw7FyhK4i7XuKK8AxFvQCmpgLnsmDc5b9yT9cAaRD7mx7mBbEBFqffEa81xoJkZ",
  "key6": "2mBBtTY5hzMSWYdrY1PFNESYFTa7BWR5Tc5aA2R8FJKgKceAJpuoQenDeZhuzWsH12oq9dugLFHj8srogPpB7CqN",
  "key7": "32xKunaXHJ2cRU5v6Q1tYF4rHx45TokrhaoFonx5LPoBba8yz7w38uwp4bBWRx6CCvoJraCTWBi96uCEfVB8RUBQ",
  "key8": "5Baz9grYSYSAVXJsSksu1Lup4zpctz2BjNcryGGrvHWn7ziuZSb6iSBWssN6ZQGif34EUQT5wy4Tam4ZYjUNZAhp",
  "key9": "2KM2xE47B1AhTSUrH15ziH5mRyJcqqffVnrxKKNXEbsLhK2udGAqWjiiKH5ALcD4MQktGLFWRAeVwKLtReY7khLd",
  "key10": "3bjBKefxxPhf86oTJzGLi35zKTwGxzWSMQnLgzmmZioUWhQE8jRenHXsHsXeP6mLT8kGZM4aVkq8pH7sskMaWhBC",
  "key11": "5vNu7PicjCUVBHsF4Kq8vYW9qBNq9GtbgnjDh2Rqjmbu7e9qVsaYRvzpBLgEbtX5Z4Y2sWuoUrq8T28Fb7dbq3Yc",
  "key12": "2sTaVLicdMrL9QZo9qHj61Y3akycUSBJqKSrEzztDuxTXQUDVCsfWgjmTo3BNFzmHBCmMbwzHzKVnWYEiKWkW8bK",
  "key13": "2u8jUaSdAhnNjwuhP1uAvD3YijhJCcSrWJd7zzDof8FXBZs7ZchEytcKJBUgsTb7YorezLi1fktDsBZ4ea7Vnaar",
  "key14": "5Frowros7KSc3JQVZvFt2wUUyerGXmmQiE6deiyseNf4p66GngtRv7xu74pLFC41KpkqYv3sxZmCJF5tPq8aUsdG",
  "key15": "3mETMdXswF183m6qthjoPCmJM5W9Cs5aB2hyUemFCx2FAsTyLw62qEcST1oVGtEyvoSfY9sbRNyLePwyG7pAuQMJ",
  "key16": "8N1Q37cPtPsFRJXyDCKUsSDEXmSPJ5vbKyqMaRxx9j3Tnk6zdeKtahG8SCFSxQ3vYejQUTFTmj637FQzf8BQFVC",
  "key17": "3QrhtT4c56Gz5psuBRAAjd9FvowHPF3GogiKd2XkQuboNYLgg8PktAMz1fvfXr37jb51oBZeRnAL5skFFwL6Cq1U",
  "key18": "3BNAkNsdiw48jieD7Tt4ahfLU5LDxjnqQQrjAuYcjVnofF8qYwuK7vNndpemiBvDjtGTt3JJqdw66U2BwKLnn6Ru",
  "key19": "4D7e7bd3EDqNZACvF1w3xN2fEQEmRYe8soW9kbuCXjd8AMYeoGc4e1W2Z5yMAGmLcfUcBvot2hcFU1SQRdwEfJ5",
  "key20": "5b1NNiK55dhnMztGfmhP7frsJZGGgvZDsJ66aQtyL1ECt1VGZ82B7rY4zLFPkcLSs4YyGX4RuPpWPsr8GMpeZDxN",
  "key21": "5cFhojxyWcoJE1KV6AUd6UeMx4S6Gmfn14bJ9PUb3Y1iWtrhWft71PZBJwDu7f9oXEK7V5atmadiQGYKtvJVGUSq",
  "key22": "fdkcv9P1SVQqF69bUjAFCMyLo413rzN5H1CmTKy978Acne451jxYC3gnHK9uV2LzJKRZkSLDmfjbnWWPgXDmWND",
  "key23": "Dzerbn4FCac65Xmhxw28XQc9PAHeCiDHs8JqWm5KyWbzRjvVsp62Q3EpXTNQ6Po9KbNYCSyDPW3xSysKivAz5yh",
  "key24": "67NwXPTjbVzoURarV1czkyKbRVzqEjcQ5NuVwVuqvMfGjiGbn1D6Cc6gTVs56DMugbaSKPDNKe6yosGEmJuSEc7",
  "key25": "3DdLKyf3zMytY7aQ4DT3DCMsPwt5suHUSLebmdMun4cxf5kwmAc8gZdwYgregwN92Xpn9K16RML913EdPoWQ6LXJ",
  "key26": "4mjzq8BEABd9dvq1u1Jw7hYRcgeEjmZ7iDm4LQUgc8C9PXAabTJbfeUaa44tJT7aTyyaDFS6aZ4b3f4omGjMUWjm",
  "key27": "5QQFtaYkpsAwXXabaDsigDfmbTmBKNsnoTdvewEk3yXfb81FawLT92nGdtiweBR1wYiesrPNuXoqG6v9dAMh8iE2"
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
