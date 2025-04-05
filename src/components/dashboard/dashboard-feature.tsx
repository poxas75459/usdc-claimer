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
    "4dEbbmVXJFDSDFWWJ2vCRS5HCSaNoBCkjQhJX6AA8V8ZXqujJgp8xSYNJn1aHAmicADXFmBm8zLwXXECbXRuada9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gJE5cBaZLDse5Z6TXUDrbgn2FwUZ4YQs69bCcZbD26jdkfAGKFNaiTyG1VLHAgA32LU9KJgxwVYGgwRCApBB9W3",
  "key1": "4oZed8GHXpwDSVHvr4YzQdUpTYSRq4kwupVA5ZnsrCURBTfzzbzWGmwstRbmjz1jEowf7B3eEyVPWXt8K5kYJHoT",
  "key2": "3KuJgB5Ri4vEPnVao3xFsn3k1pJTKQrv7ippCdd8MmtWabUJM1J3tHARfYmGoGqqyVH1JUVKnCbB3XpmEiEpjpZX",
  "key3": "5gv3j4WLrLgbmm5RiwA92Kk3Xpt9taoKRnqhsh8m4pv3rmP9aa4qpsMYEZSNEgBUuTB7FgaXUW6rCugPnPUyoTyp",
  "key4": "5BxZPZG3nUNv6wb4CfNpjHjjz9EzGo2g23NovmX6a5Dy7GT1LmyhNQ2TKBpm4gSh2F6HLoZK2v6FZ9qibCyaAV2T",
  "key5": "5na9Cb9R6VaLGL5GeqjMWqJDUyNfTJhYHvnUFbvhYA1xATWUWf9HmEY5JReMXnM2JfU4hmZCnojz4g43SB7cf7Hx",
  "key6": "49S8VA9iz3b5XHKpfrY2CUyPtDsp4GmncNChisajawZ3LRFFX6vM7kTiZH6i6iAFcHV8i5pe3n4S7BwTG128eiah",
  "key7": "2JGK9kbMWncFZwva5Pts2ppWayuWyXWLmYRYuLC1CMYaCV2vMEzXFEL1E9VMYKSP7Hb7ccqGVFvG6jy4jcXbpAht",
  "key8": "4jU3UuggaNf2fxTxoUb8oakSFqdcE16DVDFEFXp6TeEr84WCeLeR3tVDeHwWxZwMid3RYVeJq6MJNgVz7v34vD7D",
  "key9": "3VK6AWnq84TsGVRaQQ7mNRk8LPpTYYbUxHadb9BhLWpAL5EGLmq8HMUREP2hnb19uAm8UUuoPfhuGSoAWUEZwtBi",
  "key10": "2ccvS1GfNYhdqMBSw6Betk6xo4H3PVJFs1uA8YHWTDcb59ePtx5frwrfh2LfiuvDCFTeMnLX9qF6QqGbfMc2YHJv",
  "key11": "5ACbwfrKsMRtpRvED6WZBf1o2BwanwubsvyUbTbqrM3r7ebZC8EMRXdWhZp3s29ga89SB7q5zoTbZGM7bTaoZb2C",
  "key12": "5QJQDYEMWZVa5ESYoE35PX947Su3SMJ6YvWHhFCkshtKZRYq11mNeXUHRWwsnEux3hxoVDa7XK52dtnMktE7Gi2D",
  "key13": "3nCkah8Q3N7yNTa6gAXVFcuPTY4suWktzDg5iRyf8KK49eXQ4VzjKSLAACGKUd1gqLi5NDNKLsd6DBf9BawSPVCt",
  "key14": "4Nfa7SznnJmUMVgkx6cNBiYN666zcDqDQ1Kq8kMSrfB7SmnnT5fgWwj8KcK5ENCh3bCi1bpu8HHTiVFaPbqYtKHY",
  "key15": "2QCJUx2Qv7YtEGg4TSNZNKZvXXXsvab5f1vY5wXZieDtu37Aq5GUSJ5iG7jhmwfaFzRbbCv6LHmMLhDZUscvi4Zi",
  "key16": "2GgR9mtZ63mNeF87xbAVwHYPADy8tiSCXUn2gdLKvhHBcJaoL1QVJwZ6uuZL6FAf8vxe1pfrhpapeLNdd7uJFcZ9",
  "key17": "5v17A6kovqdMBTrmmfBrYgvfV2w71QzmRgyLtWt9fz64YFY9hms7ZNrbwJ3emkDjFD9MrroAULSMN5bdUu1FKKvK",
  "key18": "5PdNXCCYAADHtKDQoYa8m396VT5QWhsmGSRfY3PBB23zV6BGnQNijXfLGVhSsEJL3nZg3vyRmUwiXoTr8mbsmnKV",
  "key19": "3Sm6ZAX9Xw6XYWjfyWA7FLM9nFvA5jvFykaKJJaisdiwVRtTJoGrtnc1bS2gioHRAu8jv4RFurSzZsK9wntj5Tgb",
  "key20": "2S9SVbUxRRTFxzsTnuMGPqfcW89NuKvX3s67VuvgVB88roG7ddESxSWjvudUzv9KSnrR3zVccoWidyq1awTfMaVn",
  "key21": "2nD5Bxth1fZSpMWfC7C9ESBTNuGdXmdx6zwoJkAo8BwFJJFCT9NQf3epJ7P3EFCutNCtSWiRx7jbWcMf1Ww8Erby",
  "key22": "WPRwEaisksqtQFfRJ9Qfesjncnk8PXqsWVDmRYXXdhNN1TQtKw1KsyeLJiWxb1gHDKqrEVutD1ZXyGpu5eePEsh",
  "key23": "Qm2ezxY4HvcaUTL312LPPLXLNRp3eQkLx8cCJN1f6Hco3Xa491KhXVMQ2NhwmhZwTKTMTBsFTZCjsQY5z99iTxi",
  "key24": "2LzEbRCc9RdbCGyrjduKyC9CW9d3qadanzMx7Jfmpw7w3dkUYsfr4ph4JsYqqu6uXwgcH12wcskbTJQnm3g1G2xJ",
  "key25": "fk4RfKxnrsMUHnECJxKx8FrvryjcSb6VcSiprLA3ahRhEgM9da6JSmHodXBDVSR3nrg6k9qQsA9KwrzCJhaqkFn",
  "key26": "3njyu731TpHeVL6PcPqBUMZMhoCsMx9rqMz5ybRPBqSvxq1Xgx7pywn5oq2i4AguRMThq41Us35KbFutTrVnWLoV",
  "key27": "3ih6dw9CLrS51fGtfftFEsvMhZBBTNbKSja2bsjSpxiUMYUH1bmzWtxEDwDDyU5k9PqsVFen3Bh9rmQXGGK1oMtK",
  "key28": "53jtxoezngqh6a6gTpSjzAqtxTwrf1FWpA6uiUU8tDXEevT1greEe1RPKCeuXXjwGK56vpWKT8LYZTuHNop8Laex",
  "key29": "64e4yhAapA92MoctsELJXU3iY177GW4C9jCHyhAoh39dftqaTYrA5HPqtkXZZutZSAsvAmxodiMitceinan9Kdnp",
  "key30": "2txzZadyjM3AHVVTqD7p7HMdXxqk9pmdHQwNdHZ45B9ukuEMJf3AAh7ByeqPf7H8Y9fyEEL33e4mjNQUEV9nRKkz",
  "key31": "5uCGVWaB6bvnjJYMZjgZcegYk24NuYi2NDNxypzoypNNWHG6FUZHRnrqXjASFPKAWN8M1FqAgbyZo9V4FADZFaBw",
  "key32": "21wUhteDNzRhY4mgxeuDNuNpVvH47UGg34eYY8Xab9ueBSx9UfLiVUXYR3ybJBhyHHsJk5188rkati8CtFa7W1JY",
  "key33": "YEd2gjHi32eJ1ZHkCC2xya9sUHojrrA4L1Z8CNPDiZnnTwmWRuqrPTwdmcDY91i8SpjetfQAvFV6RybATvx5LTg",
  "key34": "4dUtUDgEJt2o8V2uAXJJSowzzXLuejkyihH2Zz5yhxuWNSnfhmoKFTceAdRnRa9QFAGsRfEdsrzDTNVafsyHKQJy",
  "key35": "2HGPDESnSH4u1VkAUyZm53t3Ui9J4Gmyq7v57d79vSx1UW46MrNZ7von65DV9MZXuSJmkqpLuA8Fy9kaPFSAptbS",
  "key36": "fMeW9uYJTNiz4KLmGDqgvpbVUtuxfVkNGAaQSqJpehG9YjHC3DqrqWQRiXF7ubdiJxpSxgdjWPXZATyBUC2ZZT2",
  "key37": "2sJ2NxboywNTFgnow6qiu8SqaaViqLdVpGFHLqA2CkkjQp3TMwzswaRoGMq1u9Nr1Ji3d8A7SjfBB9Rp7g3PSuc2",
  "key38": "3MuRz4RsSza9p7Ft61v7rLCy3Ef9MM2aFJvTEdyJvKi5WZxCGACBfmhVrqTfKWv57Pq1rsHk34fWoHtS5JwAwmv7",
  "key39": "2GfWGgM6Mgup4UxNVfxZfz25GKczbvamRk3jN4P6ffQcv6Eod8J7yD5oinFqFeAZbnrQuuSbZoNT9EpYNjesVCP2",
  "key40": "2oUC4QD84uAQ1UjpHhgw2QbaBZajkQ39cMBGpNCsoc8t4S9v9LARUPJbR8XcEThMQD5XYvSdjuucXCKpqtxEf2NR",
  "key41": "37zxUjtKqfKnXUek6rZ7SCyXZf13Voj1hMjgoZxGkxHCwfw2FFn9s5phsagGZTYExJjRQo4Juo8iCgn5zdbQvASd",
  "key42": "3qW8rN2wYhz2w5yaVXSDL8svAxCPXgH3bshZVkM6goew6TNSaZAqLHiEDwt3XhokYUN9bvFBUkVxbAn8uc4ejTEP",
  "key43": "MYJdSVTWbF1RL2P2ieHZ43nf4eeCiAmcEeZf9V1zNemBeEQftMLBa3gpnmCHNkLYciCQWzTd63t1NRQnCt6Spag",
  "key44": "452cFowvKND8aDtxHTXAzq7mghwXPXX3NBseuWk46iG4kqrQEePcmiRLReHazkfAbxg5gnLzvu9Tubmk9VF7CfsR",
  "key45": "5CaEj1K4PLraJb7dRn1DzDwwVUreLo4h2FkcmHu8TxrYCq9vX3SnAhuCfDneAVWV6LyjEHu6GWdoBU9MKtSyCKJZ",
  "key46": "b5ZKU3xRKbLzD2UGeUwsZVkwGeWxaiRt44oifhMF7bmUKa3ZZQXSF3HyTAkcEfVnaahUksCS9rwDq5CvXkFZDUu"
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
