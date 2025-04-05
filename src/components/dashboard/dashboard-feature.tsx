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
    "5xCtrWYg37ZwcY7ovhDBSZwmx81n1Qg6yyhz3TRJ88hybTkiHUwgQkrYnkgNd4y5rmxNqiLidFhKAoehiS7yE7gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4ywwPF8DHVibNYGfifujWwzXyDoXpwzcwL4QoLi9HdjuxPtm2gYWavQQfqKcHj7UJQht4U9XQAf19BSBnbLdKL",
  "key1": "253No4zY2TktWiudnRLboGtXpiUhHPZ4mM97UHzehzmhMq62QLn8Z8unYkvqn6CquwFZAY4EDsx2n9M1tfmagx8R",
  "key2": "ncMnywYirbRAKgjumsbWpVAzSZDskYMzLSkcpNxpsYRLjE776g1QCwbfCApkU9GjDGjLqKsU51CKLMcPktjJgBh",
  "key3": "3NHDDmDddmu3fGHJV79pX58CWMXfs2R6iW5k9ycU9KDy6urCwU2Q7gCtKASjVZtFz7sHyZz9gtmBMfTyjAps35Qc",
  "key4": "3kGzLQDVTYgvfvqQmjgy38hHp2ma3Z1Ysp1uxBzENTo7iaGm2gHzuBKBDpwWqgpsU9abieBB3QSpAgSFpRcAK2DE",
  "key5": "5feqDMETTzDiKpB2hunqtmbp4mudLY6RXbzhcGoQQMoNFdZS8xyvr6tSrkWsNX3FzAWmQ7eYvMsB2szJ37eBGuHh",
  "key6": "3LLpZbqgxLSFnczdi3ruNucMJ2vvh2t1soxX62jga552jBSnXgtNwh7dVN2XLWMej3jRfSwQ3iiZFqSDiLeLywCo",
  "key7": "4oybHUtNDBHGELYewctkRt42XYE6pYtMYzdHU8gWfm5ND2nNcVUgTEhZmUwGE5sRiQ74ihzwJi9chT2BGK9fEZRC",
  "key8": "613xVkWMUqcnmBZVzfeRbnuquxMcMPAzGNUV44obzGaixB5PfYAmW5coNGfbYFp9Z3tfWqPfjUTvH45Mdfx4MmeZ",
  "key9": "2txwLRve3p6J8y6Jqy9WD7ngZhV9BnuUnjuBrF8Q23jvpECDXkoPFNwnzKyos9UGsu1rbAP3qEc2DR34VCu3Kg5A",
  "key10": "YTqagQo62Q89hULBLdWS5XwYnqmsy2aJp9zjmtPT1F54D68YUX4bw2eHzZisav1CgtoQuqsxQpko1CrLVQxQT5d",
  "key11": "2EnkZwP8BqU8zfSnCmdiH7f9cdKR5jpy8EEjjAZHEaeKh6MYVc1MG5oBB4gJoKXDoqUDigbyzvuVbV2D9Y4CEEvb",
  "key12": "57kbf7yvZmx1aXUJBX9uiAHUKUcBtoNzRXfosSQe6ySVMAdgLBsxoD5Y5zcbzyVkYo8SGNB2MKga2vZo3YfkdtUt",
  "key13": "3fP6AEacwjteervKYTFx82cfwkm71ZNTF6EV8xCo6bTxZrUwV6sz1p6QaSYhDzyfWe7oNdDPtxaZ5gQpMcacVrqe",
  "key14": "4CTqb6kgi2EshfVtPocgUuJSYKXY6RoMMREt9Q1YAw6U6PYM6kGcuv5ajfyj2urk39MpgJwJZUPtrrRug3G6DzPs",
  "key15": "5PqDp8z2hdFwY21Dj9r5KPbAwRBHqBrCanTBqeAg1KJTcDU6w2faBY6GbFPBX5pLB1gQMVfP2bX9eK4cKwcndNb4",
  "key16": "3GV5ViVQiNskySEydCgJu7BEhmubZWJjmDsDefwUqQ56f3z9ezknEmfngR1GCcWnLnXFdfZWK6b8dUNrDvJdiExF",
  "key17": "54kGKVhdJNygbQW1UcpGUK1J5AeM9XqdxB7TNjv8Uvsu7hVsS4gykLB7gAPoPHhGJDmBzLoqz6qfzcojkJWSLsro",
  "key18": "47puiCg55g1Gno7HAbeogDLD158QiS1HNhRctfUhYgfqjY2YKJCRXjPjBQgn3huvZadLgA92Po2uSFpyNLh7veog",
  "key19": "2JXFaGDP5MyCULXZxxMfQK44uquwdhjGXFaH2B5KjpiQNrm8qhVEx2oRe56QXiWjZA36hyXwMa5Qn4tWBQCDrxx2",
  "key20": "4Zn5y3efqcXUrsvjG8zquozT31rDeCzrq3hgngpTswjak5KnVZZebMWpu5JjNSob3ccnb1rRwV1bUfR6r68zGatQ",
  "key21": "3tDk4ChvpRBfF9SkFbaxyzQwrteyiPxSZM4TjbameJVR2VtHdTCAFmrXdVnxB6ic2Xv5qBvQxa7gwfN1zdCUSEmW",
  "key22": "64uREbqYv7zCWP3hLUoSnyhtnAB9cLNAAbKEQR9JZmnraYAnYpYKoe9RE68a3y84cK6oihdAKGnfmagvhzDJWziP",
  "key23": "uip1f39L7hFW79k46YevKZu74HErPefik5cJejQWfcQjkPhWz4zthWWMPrAuGXTNz7SJh9d1hu8dUyg97w12yBB",
  "key24": "4qjnjKE3jQ48j2CCe9MWFQRDGnKgUpMqfwQ8uFoiZUBBYhanF9taByCpRrpPXLV5psAYZ9AoZZUt2pLgRqEiuzpf",
  "key25": "3SHrmGvHcGGp6eobrZgQm7Z7G2xDaDZkQaqbNTEraCRBNrHPCfiMrQXQBUXt9e2cte2M9Tvs3BRwraW2MLyswHzn",
  "key26": "4HNjcRLb5wjjWtiYEtN6CFhnX5mM3AAmqtmuWoByHaj2MTaEzrYTM6Qji5DFaAfsytf5xge4NwuJWibAabygETJc",
  "key27": "3Ggy9v3gyRfvNTW4YXgw8wrwqeFXXuPisGk5umDqGQJhLPiP4zAjYACvYhAakjH3MTvVtezTXgxCz98kZQuut2no",
  "key28": "4JLcFxLSa8k4aRxGYKk5ep52dnw9Rm6Gzt5h2gZe9AqFLKynsCsPK7fm3bHwFUtXyvBLoS34ESjgVPC5uLJvweMh",
  "key29": "4eFhF4tQs3dbZsn2otQYMgqqUupapNEU2nSbifBo6v3xTXGKBCoi7iKbwdesBZVJBnNCs2pjfVCztmWqAhHBgvqK",
  "key30": "4ePXJ1DtfQKh798NVQWgW5USMeof6omEyZFpZh56cLy2xLe8WVtA9vg2aq72wfPyV47UvQi971kEBZZdnXKma2m3",
  "key31": "5vsgYWqGg16XGTdNgfmzw4ywVPGhbRnAd72D1tSizgztngVSnZqTJ6ipdvkdvGu2USn8495TREHDzAFvU1DJjKe2",
  "key32": "3ZqkU75msKM46PvMgJjvUKQdEbiKj5WoteeHLWVLdcDSSeenXgGTUmhNWr5NNy7M9u3Bygn81nD9wGEb2abtC6qP",
  "key33": "4bgZwEojFSc3txFR2smUWBGLJa5iTrN5KLZeCt8cRrc9mYWThmuwPebdHZJbXxnvNAnNcHiRLV7s7YmH7CKkuTJD",
  "key34": "5fVugLCVdQvo6uaJc4p85heB29uYtwJxJHviQVtF21Wc2qvRVYGYFZx82kypkMDc8GeuXeEi6BbioK2TtdpkJVUe",
  "key35": "3CejnGLfT3qP4EPNjZQe3y2698mVd1y5qNFPg2gW5LPkgqKVqf97DsVCMaMT2e5Lvhf4qhgtbpCXp3Fi47PykhNQ",
  "key36": "4EYfUKGW3zjVe9CukMRV29SC4xcUjWN6j1EK4i1xqTWyfJpKDubrEjYQPcY1LfpZNVbP9eRNiDcgzz54saQAHmHX",
  "key37": "223bEC9VzUZBFxSqmN1eXVjtwRVPeMyxsxf9e9ww6QVm1BFMX3Di8JS3B6bDD3GBDyBTPTGdfHBcyqXXkqLqowpu",
  "key38": "2Bxko5qGyDXztqpbrWEDYdBMnzaycm3CNEvnUHPyVJFRDThfhXKy2GHStayY8u3SRjhAbao8by3sn1vLCSxLvRKf",
  "key39": "2LhqwcBhBAGf3Lbos237AGfJH2U2xMFMuK3wyV6TQpiWANvKnZQ9XBHomu2utKUYAcVxTYk2zTaMwidKhBpTx6cB",
  "key40": "VD3MGPMiFU4mKgDPwGXUrGmH4mnyS2h3UWRtNBEXGXy2XBrdJjw7c9MhaCGbaQKeZi3vSe44KsJLxqPCawHUuyb",
  "key41": "59xcVJnaQvBT6Y8XYSNVgi6Z3DXzqzWwENdettJAQt9u6sfRDr6pFALPri2e811vDGtfF4bHzA745vWNqkyAysJh",
  "key42": "dR9y5cvoGACdPJ3hUCdzqiKQT1k12zxdKh3QQb1AdbHgvef25Mzczc5xXTYUXQ18miNcsDbtWeyp1SC3oBc3GuX",
  "key43": "NsUWDrZXyxsLkTUEeisERXJ62iqDjV7MTfgZrs65XQbKjaUBcBn8aVFNcbNBgFKakReqQGMvNj9DveGgaiaLr1D",
  "key44": "468M7MaGoUQAmHpaZhdDFwdxkRFpsqDwcboUawVp85Ls8hp6hnpt1jni3zmxC8vy1KgFYW4NyuPWb9SQHspmuhAH",
  "key45": "Hht5cA3vBpeferrZGDPJ2NGpqkCbxX4Xm9hxHd5qHn2jM1Au4jSZE89UZRL21bYMiSJzXAzpEjEEDT5dTce5UhS",
  "key46": "2k61QVHMGd6eA88sL6bAXAqe52hkR9vuDsjHTHuvCmbve96pWgyREgfSRWpE1G7gzwJmJU6FLCD7fWzzQzzca6kC"
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
