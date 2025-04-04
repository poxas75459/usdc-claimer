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
    "4i6s976DDx9W6hEjkNx1v4P3p7sGeXgbmR9y9jxnAkiC9GNE6G3ZoSHQLgUbX67J7jWSux8QfM8TcCJLN1GsgwR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVjxDpCmbG9G5EZXWEW2JrodBoERT3nPjG6yyNbzNnLfex7DL64SC6G6yQ1cBuzqcQhN33rVxc38csNL7EXaVso",
  "key1": "3zsY9P5rA89G3zAbLphgFNDPvnTgAwEYYnCcWwAFcALuawxjuNoszq2KdYTWgx2cGD9NroJm9yYvgLV9jCHqZkdo",
  "key2": "3Bj189G5PqLVEm5k7GvrN6TaaH62THma1zimtdCxheehN9tqUocLhEngXsSKLeX5L3wNXySu1pEqPu5E89v5aUs9",
  "key3": "5iZcHbuRoFWZGPh42imFuVGPNBa46RMLftaQS7JA43zgmeikAXZsgz8sNEmt9pdswZzXhHQ56m478gJBHxa42WoR",
  "key4": "5U9MEkWtcGPn4KCvRrkYhLebkzTugmh7qdcfdp5FmKscJT5KDz4nQHXZohstZYCwn7vDe3Ha6W9PuxUbzsGWUkyD",
  "key5": "3ufrNcw4nP3oLDzzZ47xTXDB7fcspNEPc1oVZceTxozc6tmYNgMQyLE1yj1tx83rpoevzSrBHgNbTGTkmSNXLQL9",
  "key6": "5JPvs6ijxfLw5xXYA9T6S9wx8kaifZCeSKTY5PaVpfR7vTC69EtZg6xiqxeFRb4DeBfkz6Uq3fA3Fh8nyro1yGtr",
  "key7": "55k36cNtVM5DjkEiJ91dm37gmRrmFCf64yWixjfLr1xY5quj7tc9WUPx37Tq1BaqzFNSPZD4kNW89Xat39Qr7CoQ",
  "key8": "5xjjEdcVe3vsEPkr5vv7KTtC7XzRjysTY2YwK7hdyNR6jAzMUzSVZBAKnbuKXcJrjMx5tcwqLenxakAK5pMzAwiL",
  "key9": "2i7q84iVCNfLzQNCtmmCLsc9HTa3EXrNAyXYjcvq1ArNLFkodZYwkpvuspD5RuQnbZjxynA5y2vMoo3fmxhumy4M",
  "key10": "fxpV3ouDGmDdJ98GeRPdZLFNM5GrxVBMfcpSTDfp6aTZnwx6NNDLyWAErMfCSjbaHzCt8eWMU936VaR3CNfpy8g",
  "key11": "5qTovMtsF4QmCJwV5wyJXgjLBrebTAJjRTEYosFtBqFT1Ri87a3D9J8p8GuCLRujBdiF9cAQgJvyHsWqNveqzW9q",
  "key12": "4G1wLBY8Qo819Q61w64XMfPifmBkNCKFcBGuPs8ot3nnkWiCtzW2rbZzFLtBGNh8dqzDFku4NiDJjXJmgcgp4kb5",
  "key13": "24NXMMoYke1hDP2s3vLRemtuX583rcFikr79EdYY8MEGaAZpv1GRfwxHnDm53HJdLHf9ujZw2bWtwgR9ZoTZTKYi",
  "key14": "LWoDS8zCmBkKnFnCDf9ursG1ieLvkCQsL4zZaCCS2eQfinnMvA2zUJSb9cv92mEVbTMoT6oA3NMj4zqZgHCBq6h",
  "key15": "2H23hsMnDRPRBgbNjdKJR95zaeRBuVsUhVFNWJgGSruBN4JevhoVun9nKDZqajGGg3qDqyrwnpLeXmwvujKn4xN3",
  "key16": "4ELU3NHSCbwzfPoiXyrEuV7YA7hoiX2BWJFRHRdNm8gW8KJuaUDMtqMpgfUuCb39DYpfkav8NQrA5pJU8JFYSNr2",
  "key17": "2wVQvTkZT5UWdYWsjeZ6evzePq5gbgs3fB4rYQ1F1UavsAFYQ66sK4waX8R6uSADzZU6Q767XL4eUMPGa1o2PXWA",
  "key18": "3cBWz31CQbYQqK28L7fXGZBDVB3B9fa58WAAH9k24ywM5Aoot58YoSKQ6r7ezj9nm1KKiUK9BbPHwSQFQXvfVCgJ",
  "key19": "5gGcw84T6dWqt8rvntjrAwruW9Z4DL51avZeQH4qguH4BTwwTDKfyXSFNVJSGkntfQz89GqSsNVWunYiHgVGX31c",
  "key20": "4tKh9RBQn7WNkBRndo7beDNMRtx33A8LtRfJ1uGSLU1hDioSrBm9TFsf7oKar9TmuEUTLkTbeanfyDBbEUmfWUu4",
  "key21": "5g6qYrsaKk7D56JLaSopz127iFyzM3RfC3ENMcCJVfyX384N7CzV5tVuG3QMh23Ndn3RMFp5cYnpbsVNpC5QUtoD",
  "key22": "3u73BCJYRRpL9cH7DCW4Hb7HX5zSmyVBXwHXjgZpsTYefPjF5F9gfkhL6RxcNV6scpoNa48gdr2Ky6y1jkQ4TN8i",
  "key23": "4VHRQh9MJ9KwB7xstaz9vWnxfZRCUHk47xWyfUoXTZzZJe2ryD3kraiQ2fmBd2WhQQNGNJTqoChToM1Jhv3MHgxX",
  "key24": "5oB8SWmfun4PppRu4RMari1pgT7ztGMLnXVAHQLhVfHpjc3zE4nTBXyuDgWoMnWAXHSBpNmxoaVS1uyLDXSJfpMS",
  "key25": "34dx2N2dF3LMvmWQJCbRFpACjUyDUmMHqbL97mGtkfBMsahSgMiuUBbx3p36DngpYMAona3UpJL9P4izr93hayA",
  "key26": "5BzysFgn5c2Zu1tzuJiT9nfkT54y6ig9MVPq5XZvk1FeeZtEVnKNmqmCwZ1UuYEmhJ2UCXiVc6uq5GSE4HdBRZua",
  "key27": "Aggsyo8Lw4tVBPWMpcgZhoGJUGoqhXCzGWNAz4VmsrNP3XKGR63LHd6seQinD2PLxuVPYpzgLgUAQAqPXkbHNdT",
  "key28": "29QECUd6tgP4KE5tDrKf9R185eg8EH7pMLzTtrkUscX1ZTpojrY5dRhCc1gLR2XgBcGfPRAdKKSFdKkvkEK9o194",
  "key29": "5Zb4RBuRJuN4jQagqr93Y1SQbcvr2iAdrENLTxBVnrLzQgYvoUPthDVer4CwdZfF6MHiD8kn4fw3ayiSNUMB4D85",
  "key30": "4C7CQmcVzdW1kkFHFPpcR9wJ99XoKNFJU2kuxf5Y76ko9omMeE876DqQvRAR1CyfaQBKr59zujPcujhvK3NQF7RA",
  "key31": "1VzjJCpPo7xSeNu6y7TvHWHXK2KMTDRDZkxTiS9HKzEadDku7pCcQ962JW824pUsYbQfypPZwDtAC3SLqEJy4JY",
  "key32": "55gcjQraPw9UnStXVEBJwQtRFeP69Nh1PBxiEwgEZ11T8JbHC5z78tefBsxVqSCzD8RoWziyPWLvS8LnC4YYAd2o",
  "key33": "4f6njZCcUCBFYZEEb4s5xWhu4ophkMxt7YCCJRWErtfpzRordcoMUKRsaDWRHBDADtjxgUcxdHArWhhpvALD48bj",
  "key34": "2XH7LufeSKuWtGS7RzPw8zCy3ZFraxjkjQDYgxLHvrCYyZCqYaQvoeM8fGji8WXUJ6LrF14jwXLSHhW2Zvi6zkhG",
  "key35": "2V77e5PUwhJAxhZysKC13LPt3Uj6T1nWwdDG8egvqub14dmq9J4Y37dokMZj8o7BXj4RVPVHNvhqj2N4UMN8MUQn"
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
