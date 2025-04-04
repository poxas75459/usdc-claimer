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
    "3wqzXLMw5kS18VjJPtWztxN5FYauAi9MkdcLN2vcYvH1UxArRxEjP36XXk5ZmQnYcpcW9hWEFkKzYeHJQvyfpQWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33J4naSSP63sjrNsQpqLSavDdZnV61xwRdLuswQpCm4ZC6aoZHepwa2cmiuWAVs5cFCtLLYPWprJ4CqwAtjWsMeh",
  "key1": "2UQEArdEzPv8p6nPZQvb5RRw5j4fUQkc2LZHhCuPFgwxrhEpMF9sGefH7w2SMd7tULiPZq2XvtZgNXUQbheK6pmj",
  "key2": "wgvZUQz3Psasx4pyFEnXEcqPPf2cNSsSqvq8uWURYGnY5NUiathiRHCuMaxPncn72jfy7qPMZ5sMZ3hj6BB3ZBL",
  "key3": "3DTh659QJNqB5hS6T5BEXosbpJ61Smp5JZHgHTAVLzEdmjybtephueJC4BaVYWz9HzmxJpnGGdnUyN6E7F3txomG",
  "key4": "UxP5gcvndT57Nqw8zCFwWyhn62cd2JM7DZNHeZCsvDJSdoL5oMuRYUwZzypAd6aJeWJGTZ23peKLJBKjYdDqtjp",
  "key5": "4KmXyWFgNUxN6U8ApBmVDr9Rykg1tpkJjAiTptfNqL8B6Te9835fEvgdWQeyr1L2P1URT5iqePvFaTAQCefrRMZZ",
  "key6": "2vnepSE5qAtc4BsG5w2wsgTn34GGtq2f2Z41yAUF6qbPPSQmXXi5GZ2eMJvTGP7ErazUASah3DgJbNvSfjH8zQC7",
  "key7": "2J4FKZ6nSSbJSW7Pp36uzw8wfBtryjMGmv9emWLyXXPo5LvJs3vNFk9XRiREdQp7gioshUeuFZouKjx2oWEY9Vhs",
  "key8": "4WZFawwTLjJabc5ZpHpPgS8RwsNNBqJKCycDjRUGVYA4MsgqX3ZqFva7D8KaqsSEwkahxHhDLfwNtrC7FhV3FoyN",
  "key9": "2a2Y7eH7RjnmTmsdYGjcVjs27LfWmcd4XoCmieQK7skCNfwjSmfest67ZaHCwR9VAke25NrNM2n8TpGKzCyQj6yi",
  "key10": "5Qde7XapMY1fWZNPUrADC4gRUj2EfAAVcjZciwDVBUAifsncpQu46KrwBMSEt6SYd3m7h29PiS2LYMcDrfeoXUNy",
  "key11": "3AEtgZY7xgZvs6g41PJGDH23hqmoZeXoU2gEztweyXc8nWSSABT8jRiQPJGCDgHeCnRyu9yNqSbDmLyzUdMqAUdL",
  "key12": "2rYbrpw3v1UXv1xzA3rEJTycZKaUDZWuMURSdHAJU7oKfiAv4x1wRP94DEk5542rDzAY6w8diEqgQw8XuTAzXgVu",
  "key13": "362ZNLmwm9SEmcE862j5Yxkk4tXgZbrAwHnpQga9fmqdGsHj8txf3LYDnrAW8fwRvurdNxa9w4a41oGj3oD6bM1z",
  "key14": "478zJstqZ29o4idx328MUfD5veS9nF37i8kHLjspRPU8Kn8QDN3z9rECkNZaV5BNAuGiyE5aaLRgSaDR3Jrwqxpa",
  "key15": "4RTAwn4hoFB4MLQLkKN7rQh4NVn6jkGJG7yB3b6DWJ72JoiVFkKLPiHLqhJERF6mTFnhB5cMH1A8k1ppz6UR8HkC",
  "key16": "xn8pJtoc5SGwCbdfxtZy4UGXpWRbeM2ZTeDL8nVnSgTM3oZ2XWuL2rpdWkTTZjZuoABpUyDxeqS81EPJM3FyDFg",
  "key17": "5Y9mwiHSMc1d1xHwmUTrnFdWSdMHbMAnGpqJcBGr8ovrSeaPb7ABFF9FnYuo2DH9Ea2YQkRb6Kvyz8zdH35hpxEX",
  "key18": "wR78A6QBTFnon4eD6vTvfMaB1mHnZ7KGR82rj17LwCGvL7SGxbcHw4KRtGUYoxk14CUnzHnM19QLLEZnKS6W2nM",
  "key19": "YBu33tYn7P9g2RYYpMijYfWvACXwTHWpHiwXtM9KSEnM1zcnaVmPyVPL2eYhforMnsJyGJfq5D8rWrdSDzhKtWx",
  "key20": "4V9HQh2S61ir8suC8aPBtqAi49pjeo1nFnb8p9gEVHQfcfZsYutLYim4bFFMSPGEtBsqWXCronRiPvyGj2hwtooK",
  "key21": "3gY9Lht55z5WGvSz9GjKvHWrPMRxq6c9R1DczUsgrY1RBSNCJx6LErgqFsncHbkoj4HB7KNAA1Wo5wixn9BFD6HU",
  "key22": "4sYYuV6Pe1oXGjKTvvmWeevVzA96wr7NUDtYpuwHoZHLDbUiAAtMhyVqvYwNTJ4eQp3yJgxFrjTvFox9rQdaYQxw",
  "key23": "4Y1Sxmj3UCweWrZoLSTXakApwpY32jB5pq7LCRwrAwvjAppNtkLJYfsYzn5b3Wb8ZbiuCPLFTn4hq1HPrFXiikv2",
  "key24": "47vvSiiZDPq5kii8jwP3qdkudkw9ydDAcaEGXaV5CMYE6zh2RNqvJWjiXTv7R1oUm7RNLxmUzu6yU96AbqryBE2T",
  "key25": "2b8Y3CerNcP5kQe9PdeQZ63jST3hei9DfkVnvBRPdoqGk29dBntdmwn5o1xbeMq1Nju6puNGUJYsJ6D5fa5t91ey",
  "key26": "2qKPB8jPXkxCwEs2HhXrQ7CutrmSK3gxnF6qUZGeuZBVny92t2EPSdVAq1FRsm3MbzEsfs3eRf7P7DuogiDma33r",
  "key27": "42zXi5uz9r8vXGLE23at6pE5gB32UAB2Mzpe9y28d4WsPmcxDmLyVDvWcxEssHvq4c64yVUaWbVuzffz8pUtzKks",
  "key28": "2bEh19Th75FZtab54EPSQ35SHrmqiaoPpaN5jGWHYxeiDcPtKZsCr54sRfjud2xV3mhaPpEWKBG9m9DmpmBThYWG",
  "key29": "5Eusw7Y6mEK4v7o32Z3tdf5dRy7NPpyC6e8UEeJG15CTVGCFEhL33v6SJaML5EhEwyszQ3xgc97bFcAEcdRGB1eN",
  "key30": "3sFixfTdncJZET7QstvxNoC6F77N8pMvzWQhv35FXPh684cApHxJr3THLJTLs6C4MdWCzTGKoRtLqWJ4jC7j5jNr",
  "key31": "45wSjd9CvxCYcxWc5NRBPuAX92rgRwrV7VkNoP4KwZrrLBQD9gD1R6TKBTS5W2xSdwc79zXma2JRNE6yQNk9JGct",
  "key32": "ZzM5ob9bgeMvScpp97Weo21WDz3ivyDA7NYCv7Z9qv9jS71tLuAzKAomM8sCutnMNyVknbtBfB3YUJgnK4Qn9GW",
  "key33": "41bg39idBgJFfKV3MA36gaLHNn3u7nrBJxjhNX3MZx9XEuSwmePi6UKUHDjF8zjC3hqiZuUaocvLNn8DCSjLRYM3",
  "key34": "22VgfNVA445oTGsHcFdSHdvJTGuZ4MTF4dC7vX8FvCMjU6C9VQmoVDtQqyTxXpPuhdZcWG5sHuim6yJdse8nQgru",
  "key35": "3tPc4HjT41JkdpCocqdYHVsqRoF4nJfykb94ayfd6HpjSMn8bJfz4PQNkdcADiQAh7UckhvvPLqLLU7cEYJ1YNML",
  "key36": "5hh4DuidNZ3ykY7oYvV8BmUkmbyiDvon1nKyWfr8PG6SyqM2cz1GVxeFzuAaFrA6n7VEkxchPbMS18dQEwaVmWsc",
  "key37": "uL3V2JXUzEZ2Jjy5yG1LZRnMbSCQB2u3bp1MLcxspmuCMgv9YgQfgELfY4axWcEJeu4NfeANFYpjmXg5BwCME29",
  "key38": "oMWW9t8B2rqjXKD6CTpnWS8ikg1D8rrMELbWoFTQkSdtTeTVbGPchTKaHTRjMv2pzMa9pEkKLWBAz7vpr3ERJRo",
  "key39": "284xmBZHAfDat724t6LvFCVX61Bk4AZPkk6yeJgrcenKVHCD1S2s5HvrhAXXQHECsjP1vjvDcZngh3LxnZg9Dt6f",
  "key40": "4doWUbor5tCpaeKiHUodWCpaYXuoVm1D5XPEPHresLdTyyMGNR63o4KMdTLsSskzv6gRrjBTVUkbXopRL1EokTcM",
  "key41": "4yJfQ1e9yvDCaLbxx64iULt5SNrVbSwtuZhgb9MNjuCwx93Bjt66FGBgycV3Fqw7zgEri3jMhVyfAEC8M689Dz52",
  "key42": "5YCEimNjz9py87GACzk9PrksmGgy7QEhhVjktqJzobdP1Uvin22GmuYSvUSDrJboDv5VPgRgBfUmBqLR7xRgzKKZ",
  "key43": "4CecjDJLk3fcPmqy7vtae98tGheeavMWXLxq8n6MyeCoEtaPJbcBrkNHZkPnyoRfufW8rUmP3REqvGgDgwJ6SZUB",
  "key44": "4TUfZxA5gqq5d3SSGvWzZc6naCJpm7E5DYPME2mSEGdYwpRjVoKZZvazC9cYxBgVq3uhgsaXP9TFqdPxA8DdFTS9",
  "key45": "36pMzkFPJjUDPAwN8GGWybDL52bYTRBuxuF5C3TAx8QPntRkbVqJ1S1CnsBvbsRkdgzdamuzwvCj9oPMSPcSXwM",
  "key46": "33u68iaKAKm7h9UrkKyo9r75KQTQQCqL3ZaNuHMLUGyV7U49pC6SZhdxG2A4TfR7birkUSxuL2ZFaHDAyPRRnk5j",
  "key47": "512ug8eTcvbbD8WZSZGzLttz4A81PH3e4zVj1HR6dpq87mwhQiHjTjd7L5aNBRwPgX6FZsi8pbm7Sb3qXvQUMagg",
  "key48": "4Lm2roV3pK5StjUNt2tpB8dsFkLojSjjLHPqWgRhguiRcEwvSQRpuwgytERrz19zvKayz7K1qPTWcw3iTLDD8hds",
  "key49": "5MD38jg8v6tWiGHMq6UU88Rtqax8e5RUVfhorXkQnn5d3tABgztyXehkaXshW1acBFG8fGgYBtxfvB2tjibgHwpv"
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
