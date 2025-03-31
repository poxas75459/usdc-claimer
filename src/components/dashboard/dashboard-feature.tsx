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
    "2bWWcgLkY9DfpRro7sjz3Ucj3oEqodywhCnamwJfpQ4pgWmKJ1ySEh65ci7SyiLGH5dy5rjsCNxYcdjGaz9nP3yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVK1Chg4jDK3VUGiAT68R5gJ2NWKXY5mT3MZWMQUuQgDLvc2q3ZQMbSWQGpbQhbpwHAnCkX79DFizEFSGjXiGPP",
  "key1": "27TA3tsxErYudWnPNcWTP2T6TiLrH6uvqAtc2xavwukk5KLuWDDoGgN89ymURFautjgJeD5qST8eoCtSYkoBAd1Q",
  "key2": "5FWne5FLsdDbpLThfWQdXxaMr58poSzDzDBhyZagv5K4JZGPztwtSLpyP2F6QUKPKcQ7BtZe9aLnfNbybTv5E5SG",
  "key3": "KFvm7Uvuijo5zwtvy3eoagt4nMDfyaxgn8CZecXgWDEBKb8bhZyQAZMdteUdSofcqhugfFCjnzstaSQnfemdGDN",
  "key4": "5nr8NxQLYrmuUr86ScPdn6AD2ZcTyJXoKPYqMfqBCrvAp9oeXrPdUYjpNarNxvygfhGvN9A9YcfrsbzoCNBzBZAv",
  "key5": "4ot9GKBxsBKXUH3qmUzrM8Y3FKhoEaVnKLniYxy59vw87J8sD862BiZRLUZhjYH3N13aHdkyLAQuoQVHXHUjmxEv",
  "key6": "35DKAaVUZvTWHCsmMwBDUB5Nq8str99zFbKTrMSzqG7w7oqTvyWZ7qWh4kdjSW8CAo7zwQhz2FmYTNX2DJ5hQzun",
  "key7": "4gg82m6RFs8ms5j4apNyMMykMpNq1XBQ27iJVemMrf7A24HGHCRfe3hJwhsL3iCXtTunfuEjEdY8MLfMJdhR5D5T",
  "key8": "4Nk5Fi9p5GiKarjUAPyTYSUjrMvq5GCng2fwhGWSU15jmiWtwKpvZ5DTxAZSRFw8J1t894EeMH6RQR9XoeeXFGMZ",
  "key9": "5fzKpK4jQVBxdfJ88EbZH1pstQoMqsQeSpM7NPrDfUaMd2wNWHsRA8xQz4dthK1mFjWsxsbc1fsUpFAHq2nMQxf1",
  "key10": "4WYUijhP2bihjdWj3nvsGJxc3ZG3bEPjovD4ebxJLTAGJQhJQU7DxkWotxj5gX4fFtgXgJGnxpv2udHzE7wRthn6",
  "key11": "BbVxGyeEmmhzMstsfg7nBEepL4XMw2qGGRjwrqSGBLLfLcJ83GmAcRDteL8h1uyA5LfN8fyhYS3WNRxTWKvCrgq",
  "key12": "tuNCgKq6gz3Zcff2SgpBq2ksPP5N5RFr98ozq5Xr5fuQhE3MiydxRb4pimEzbSErhcTRZKcpifUKfUB6GspL6Qy",
  "key13": "5qG1LAkooMk77nVsCkioFvFaHZSUc7CsFBK2pKKj3Fev4KTbrjsYJmEvMgE4U5v8ENQTvPgaYuP1p88giZotTVZr",
  "key14": "SMCttVtBdjiajvbNk4ors1xroKovsgWDrpYzgSopfKN5ucDCD4tmWt2HGg8X4uXmQELAGNCUHYATb78HeqpeUco",
  "key15": "4iVXAkGt37SS7rD5SX73uGJ9ezakYAuwoP9AkvNLFF8CNTM5YpMhYWTJ8TsP5MHifjnGKPKf4MAz5jnttLty8uBJ",
  "key16": "GrCqAmazUuX5B2THcLyqkts3Dr85xrpBQN2NMSEha4pndhghnK6ytwpC5RgUDRYtg5JBe1Q58VWEPWEyZnoTRS4",
  "key17": "3EJAP7fjyUpWEvkFHuWn8eGzczWeYA1Mn76gAAyJ2zk18UW54YrPQk9V2CpHrRUyx1htZ5LTeD95t2GwzxY2xvtf",
  "key18": "5DcLmaXphqG87Z91enfrdsXKskmB8LJi3iEar3mZgS5FynQb9hFiGFxyTyNyxtY9sbgVbm5pteDuU2vHsbGCxFip",
  "key19": "5TAW2PEZH318JmfsFVwN5AqYg2xdJdGtssaMSoCnrsqwNnVrLezzV2X2TjNegDo3UzaY4ZKtKHzjwihnDt8i5mCm",
  "key20": "ZFeWqZQj2nZCgkmTw8kJGgg9ycfH5pgFU5iidvM3sxXXeSxQc6o2Wc5KpH9AL5kaT2CX3aEd8Djvh7akRGhnF2U",
  "key21": "WSHAaTxzPWqPnufrxVXVrSuuXRoX9VsMwff7CbsNwjGUTUZAJKdq2PvfQ9hQRwLKRZb1aFHQXDJrX77uuwJ7YJa",
  "key22": "61TncZhSzGjqo19hLMtdBe8A8aiqGnCJtRDGJRxi33ywuNeSYLGvfDy7h1KuyQzc4dCPPyVzGJn2FLFKto73TtGX",
  "key23": "5D1chNYHekB75FFoTGvASKtRHSZZLEhHzDZwP4BjBHFd5rp5HLStBvZCXF4jY3uuPk3GYinxYZC8LEJ7tVLMDEdx",
  "key24": "2RQDYAXs9W88DoQBNokL97EH9EDCYEB7NMGE6GDkJ6Vb4cUMm6YRyxuurASmAT4QtRPWVrpfRY5RBMU5HRgTk3aX",
  "key25": "3v3vButHc51fazRP6NZxJvs3gqNjZLvq8Ryo8DXAepYU4ah7Q6Zs7p5azTt4DB8CALyafsXJwUwjfJVqmypGxmaM",
  "key26": "455Uuf9Bm2CHVLhnzAaSuv52SMP29zC7ykYMzde92nRquNVqMEnYnuATeLzb62TwR9beaLVXFtuqHCcAsHY6JYAr",
  "key27": "4t3HdUeq8no7h1gGVZhabmtxxteE6uDhcYxb9cHyD7z5jRrmLQ6RD19nxGehZgiTxJm3HDEzcumkqm45boYebx5u",
  "key28": "AVvpBiDt9CZCJFqEChk3FPp7MEaJ3GDhm2znPS1bKP4UxXJR39fAKAjMAnyKRb5v11nsi5EMfERD1zFeJrRpuNj",
  "key29": "bwAcLHgKgv12ZS2QLDPuKLQ91ZQcUZzu6D8SCww7uzcAGGtM9C25kr8taAtRgq1TeiCsqYgar7pPVUXGrSpCYU8",
  "key30": "4AwBgiiyuN6putJNCVGU9JDwdxb2nYwY3ntatwiAWYnRidEDoDjBoJ2kYK59mTruYKPUoDGyHZtRsmZ3TN5c7VF7",
  "key31": "mXzBrAHNkFDwKY3LieYBTjiSLGRy3b5YaLLS3DzYEfNoiYY5As3EdJpyuUcMVgtUKub3FJSfrjMbYGVJjHdi6NS",
  "key32": "3nmtAFoHE1uSaAffn9z8hqCzEyiU46xgTbN9caN17ghzYVz3ERyhVSeX41qLLc7oxmqakLfnJEbjwNBzhfbf8puw",
  "key33": "5p2LuZfPFQwJVZkKH6Lh8KDgqE8EhbcYAKUHz7p6sHGqKnKRjyRyFmu5vt4paVc6yzbzf8Aqdy181jRLZXv971Lr",
  "key34": "Es8dbyNnqV2u4smeCbpDmeuu4LX94rnNvt9v64woFw2fgfW6PtrJh493bfVxff2xp1u9vsruoURw3GsiVwRSLR2"
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
