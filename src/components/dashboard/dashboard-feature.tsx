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
    "3gQcgEWyFrmk63QTLkEm926beFY6wrZ873Gw9jEHPxJovdn1trDv9gkd4Hi66eY1QfSBmmBaptNoNK9D7oCcdXX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zk1FdbTsRud8QLWuGBRAVeiW4k56tQAW9QjT8WfTEEY8jegbmiRGe4xeJeyAXDbHDDr3tVqEZuNc7giDsrnXSr4",
  "key1": "MibdKymaRirEQ1LD5wEfL8ZR3wwy3J8QfAVMCWuTC8Dq9VKJ6SRBbQKzCw9XZ36bkz4E61G8b6pxx8hb6HihpwS",
  "key2": "31VwKhWAnvQL9fm7HSrLTtorRm23MW8xgmdPmnDFDyY51xnGDfpJTk32UogXifxUHCwMZENbbo2SGCTZ5ynDnBz",
  "key3": "2tLJGqqEiRFGFc8iBPR6ALuUGmrn1hvMK959CGLj4ieP9QzUH3bPmKaWnBRih49pHnbvgMRaxobJfk7hgrMQdBdH",
  "key4": "2c915q2qci6UZxwu2KqpQuCB2Nor1PFgQmhLyhaPTxmAxkoTqQZrgAwsrmyEXYUK6ns8PykYo2oETHpu9mE8Z9yQ",
  "key5": "2ieE7Ner9BGwtw82KSSofxCUZcXrHWsNeTWVfnezN7RoSp84oEZ6yNLJGQqsYQYtHkeQMmS6q52ZXVBmwj6WJEep",
  "key6": "42t36zZiJvpD9MoyU4FYA7HFXGeBmGuZwzS1nFvKCd6cwU9utBoUykNkfYchMJvNnkcPA5A6GGhwZ2XaDMDK9Ub2",
  "key7": "4ae3SQhioXHDneuscYFS2pskzHwiZhHUjBb8bJz6pspN3z6dcroUh9NQR4FTz3R7mta6bonsLqjQGSMrc8Qp6Qwc",
  "key8": "3q89VJitAXTxzzRhT6AboeuTe3sNExCD6fVb6K6VA3hCgxpbvpQxhDYcGapxi3aHDzr3Yx8tYAZSathkpgz4Q4fn",
  "key9": "4HmToBmb1jYjZUEmC8wtVbZU1sJqt6y4NZRq8ST8FjYHAiTZwcDy6KoKGiPjvXLJbMP1yBiteVqA1ASP7aT5P6wo",
  "key10": "3wgB8oC1BxKundftNaJHSJkYGJdfsb8nPHddyjFum8nhuMjnVKR6vbCovRVbBYyzToZfeC34EFu5SimYsBfyHQmu",
  "key11": "5tcKPRbzDVZArwvFc3wk7cbVUWi8tHoxTNKmPZLLTeWAq1pEKkSTttCuioFHKbrqJ7pBDqN36mThq6SJSGTDCCmB",
  "key12": "3rGYdrcir1Gzyu5m8CYuoA95H69tCMMCe73qufXfrxQdxe7P9i8j37KW1WckyzLiA8a8SRiv6AjjK51MNjDCH2qz",
  "key13": "5LNZoXoBiD97wQ2MAvohyjA5yKPkyLEKhy969cDE4k4fY58iGonqHS5ztmQ97YP1RAzMwE1LeJsEq4epguAdtEF4",
  "key14": "3bbH765mxSvfYd3esugvZALk7smGSVByKKqPkaS9SRbPZDDhkVsfx5VYJqRTCZy2BJHJkfZ5dmMqagRu74dnhkDJ",
  "key15": "5aKefbaebbihQuJNzfrvHFXBqL3S2S1wnND3RxvFnEoPqbgfswVdqcPXKdh7wwmbjbp1HtxY6NVZezLzXQBcNMt4",
  "key16": "44yg48WiBwFwWThfdyLK6aW98N6HQCxSesLybTvQWRtFRxBXioXVs7xiQcbWGG5q5CubBnKWCfTQrJtqxLQYBNSp",
  "key17": "3ue7r7ivSZ8XwYwtzMoDbB8dA7usNJcTgy7ffZofKvZ6rtjy4nVbZSqwinazLymVjxwZTnRV1pwKmbDXTNgYVHJE",
  "key18": "46PeKPP4z2xshey9fMyZmjgZnsMJ8yg2tBy65BswA8b3NSVLh1wtShHsN8SaV47a8i5KB7jhbKHJgqLiz85Q1zUr",
  "key19": "3mrgSKS83dDX96ao9hqHNgvBXFfgwFfasVZY3riz4mZVeBQkkNKp7NjSZsxyPstQxoYjz64qS9bdbwCqu8KPST3Q",
  "key20": "59udsccJzAT7Wskai8Zc5YXLnXD7oZEH6ZycT2epyx9M9Tk7j2gt78exm16zkwuFMuoe6dWfTJgE2iZicnbfDVrb",
  "key21": "334BJQUqCj5giUYv9zgaPtTZaVtQZbKTUSwR2YRaRkWSuMfLdaLkg8kBCCc38hPHFW1TsKohgB862bhzB9zjfVM5",
  "key22": "2fLnWJMrfg6juQMDBVLpNPHptus8f2Wyr6k67Y5LqyfWgdqvBZkQxEnyaRPicKwcYNppgzeQVvLKsexEm65uRhMv",
  "key23": "4D9zTMwr8zBAbEihNpSbPPgzSq2KgeHKt3ih6D5QkRu7WPK4NxboD3i6ES49q3UCMiMwSPAqbBsuFV6r69wb3Zbv",
  "key24": "3FBnZV1tPyRstKw8ebrFmJvY7pdjBaBkSPfvfcmtJZEYPhmDKJnFzqVaPD5hufwKRWDnaxHYQFwgybxwnCLeGMur",
  "key25": "2mvuF8Vcqgr7dQf2cdebQV74EnctsxWfWsAhJCtqV4VBrCm25JV1ctg9jnXPQYEHENAWJBpi3iibnFTnuZeL2S4S",
  "key26": "4SZoXgt7ZTQdrMa5dzP6oY5E4G1ir3t8biZN1CBxWwwyQYVy7PKtFz2HfesPek5WroGqPTYvCMh6ksy3UjTijZYL",
  "key27": "YxfWkpqJMUAAQgvFGwoVA7RnfsFmcdadrJTNNekZYPrrFqNnG2QoVRSaeKUVZqNfuC6AgwKf99i1urTSp1miH4k",
  "key28": "6ezPxE4xz9fyQ1xjTuabu1HYpa8uaaUWV86ERNuA2YVNn9NrU5dgKERMuP23SVqyJdREFJzCpRUiEuZn7ASKkhr",
  "key29": "WdNiG3Ty57Sqnwu21KaUqPQibZwdFCYoR1FLCCVhMNegVqjYgztPPTNKrojQzPAzroTBFgvf7W9djJLcv9QPgEm",
  "key30": "2rTRhBLNXUMbyS5Zrxxmm16TDNNY1Nj6i4x1Wf6bKwB5ArhjdmrH93xtsckWKB5WjGndiUQTt8ediEx38zzPNpNc",
  "key31": "2K3ipbi52L5jMdWrCai6PCadbJjERuWpSWCjx1RtwY52M6yvtckRH4JEw4P99JmJMYnXFvQtiP7mVmTz9eiu4CjK",
  "key32": "2dQFxgXS8iJq4KwQATii6KKLodyHsVoDERhKJHLuFjh53y6MegxymESxuCVdoS3P5aKbwrJeUQGnsFuCHjUJpTCt",
  "key33": "2n3QJFacDjfg62V59JzSP3XDs2KqHhshfL1RXUbWJMXhSEfvNCn6yEBL7N9f5uN51MGKQvMTsty7PFH6857SqHyw",
  "key34": "J78od6kSXYuJBjQsVxN4j6J3RjvhHzqVzyVKthBSBWnPYm6ggYDSuXhfYm3QD43SoKuV3uWVVDs43GnkcxDsi4T",
  "key35": "5PoJGo5ZZn1rcuNaVnjG3LLe4LW4KadMZuin1opHshY1rn91SHv54LKtmeiwCS9da3iDScE2TkMaB7J72Nc9Zcue",
  "key36": "4JLEWiFQ3X3vecyvDTx1VSvUV6Fp3mquZAspuczz4K3fa1hvXRi3dbgJsAhht5TVr4B26CWbKURgNeYgaSjs2W2L",
  "key37": "57d7CgQb4GDhmaXU9m8Hi2fwtHCYBodabA1J8eJeqKAygAsxd91yz4iKyAZ3htn9Z1URuLE7KTxf2EAKDfY8CvSs",
  "key38": "5jB3sTHYwUAbVSk6Ay7N7gCYhNCVBkztkjJ12At5yTNp9bdmWi5YxYvtcNScUAdNsRd58w5XcLx7VfiSs3cpM4Gk",
  "key39": "3hRf1UUxFrkE3uyEeFxRjdCYpoHzfM6qKA7rZVv7sb3YZDucWa8eMWnd7KGWeMT97AwDHemeWG18D55RYwTDTt8U",
  "key40": "3TZjtbP9coas363LmmqXZfGjCzgLE3Eosow93WEF8VEg7ueqXvfLfSfLtjBcMEBYmLw9n9zEZw5gCxywirGLzsyE",
  "key41": "467fsZ3TqLoXrKzoJkKNW1XYiLrAPpFENnVKSiabqp8sekhnBwFNREswgR9TwuettoELAHYcPuXruXtrS1XHCosB",
  "key42": "3x2k3HXr6WixKTdkUcxiMtJvY5gtXQTuXjGPX9moesMjAE1RUeP4EdZqoC7GopynSJjYKb3Wh9RoSU7DC1QpDCXe",
  "key43": "357VuzM7kqX74i98zyh15yZTpjc46ZDGVqxtQiFJP14dAJhFTGEM6TZF2Nt315H56yho1kXQxy52RrMW2RTzCRRr",
  "key44": "3DcVaJt2c9hCUkGfD1E9Syh9w8zrtVR4SJ1sfPawrxNmBAmfXZHrVSkNByLq6sLrkJ38MxuBFA6Dk8PidoTHm75w",
  "key45": "3BJREzq9f151upMpr1werVxCvDCA6jbW6RzCnECME6PU4iJCFx4SHT88nPpnftBi8UUGxd6WQNXH1rYB5USQj6Dg",
  "key46": "4GYGH75QP2DSe2rdz8QBcZZxdG6CX3XaP8p1zmWa5BB3BEhL5yzL2DJ9VbKegFr59BqwLYmv7x1XVZkJJKFhtsYa"
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
