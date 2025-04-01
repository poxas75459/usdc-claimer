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
    "58UTJzysAkT6rG9fQnwuDpSt6HPsogCzz4ypnBt4CZrGbmhekXrpYX2YhrKFoj4AEk6Q8pDN2AQBefkUyUb9p6bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opU9dDYvaXsR7ZanoX58QaEMEQaJJ11WmzksgcKk82WgDpNi2pseqGUd31WKixbyr9AJ7rPaAcWrAApCZeYRHbs",
  "key1": "5ZFQtS9y2naC3SRxwy4uN6HmU5EB1Rw54fynGUaMsCvFzoux6qkYhAkY9fVkjg8Gi2Z5ZcpvFoLn7F4K2vSbWDuc",
  "key2": "3WGk9D51fnwc5UcZstK9dwbjXuLGK81y5ub7Ed26uC9PAeJwMB66G6MJH3oqRu5zYzGYASrFxKQhAgEAUmR9J9QR",
  "key3": "4f75x15VxTELdzfP98AKtNpfzCyAh4UFeojxVgGeob33hWGQuygcZdge8V15VQpsYzE2ejmBdUdx3Qf9JAcvFwKR",
  "key4": "Wwnt6GCVvUbYNRmQ5jY2AkFj9JtYT9PYrihgACfiNVtgdhTtUhD5hgHL8cJoRtdpvtkSNov7kCdxscqCS4RmUoX",
  "key5": "5maPoh8b6yvdn6gm2fnmpt9L2LFZjeMRJVbEgPEHgEjbAekHnRfzuTHsxwWdhaXKLCMLhSHx2A8sg8ehe9x2LSqZ",
  "key6": "39uUEtsmbaNyMXkGnDdZ2YSqHLQv2wfYigd9uhHPT6QqignoUw4DGNPiGYDKpwsaMuEuvDWUq36opgvCoy71SyMt",
  "key7": "4CYHS4gTqTuC3Qd2kFFM8QaZaSYWGmLvvEVt8feM5ZHqyG9LGAra5ZNGYA4B7CQARWUjiiyt8nZ7D5TWHWNAkT2S",
  "key8": "61ET7S4Jbkkiw4nRtDVcm32Q6bVTMezXXPQ72XeA7Ryrwa3RGHjb5eNzHQs8EVBGLBHzswWwnwSuVZrQEZ7EVhRo",
  "key9": "5c1mknR9JgFSLTzctpvi9uNFWx58c8Xsm6ixtLmF47TS963vAbSoGCQjt7zTRowDZJJfbrcu3McqL13NQwT3Zw5m",
  "key10": "4MDZ129TtLzrrcY5KqggxaHJ47y2DTiZNRzjwShsrskqh7MqpCruhFx5GaNyja8LYtME1JsYWagHpoRDkoAYFZwb",
  "key11": "3X37ho8kj5fKe7kEZpT62FviJsUs6aQBLrTb1MvQ562oowztZSBuGfEgGH8bPVKzThPWK68NyGEeVA2dKQgLenGg",
  "key12": "55yF9pRgLSUeK3UcDEydn47HthDJscwVXRjNgJViiEav2inWFnDiLtKgCNNzAS4AXdYPLmF4M2AinyaFphe3BW4L",
  "key13": "4M5b7hxAq2Zdpz11EGuFqibXS19k3J3oGFGXG46orUnGAed1vVGx43U34MY5Tq1FJTbNsKUivgeeJzNnoWVHa57N",
  "key14": "xExVmKJ3DmeQVJi6YGvfBCYQUTZX4abn7WK85eo4ZgtQ1NzfkjpDbXKWocXXKqgb6ZJhFABr77d8YVRCnpPyHzd",
  "key15": "9Px3Caevcb4ooEYUY3nnQ14pK5wjsBkeUuJbGZqZsX15EYV4CTuoWrVDdCfrwsN4XHaEGJEfq6mEBiupjGW2zBA",
  "key16": "5kUjbFP9pNNLWriNnbPz6dV2FrkjYe7DEiWxjT9HhUCVvNMCAJWdCxhUz2q911pQzJEDp7GQdKPGEebWrTbQ9WWx",
  "key17": "219q69nMp4rokVcHiF6eYjxwHBDbzFEBGpFHtqoUd9b3aDaW8bFCwko6HzYLtvYAcHz2yk6zkhmeRWwbenDVGrjS",
  "key18": "4oHoVzwQRkr1bc9ujhaMwomzDD1mkvrW3X5VsEfcCwQizFF5RCCzrXnr2WXYpwEosNXaAnh6q9Exfq1B3q87Ct2p",
  "key19": "5H8nMN9AhARNnS4abXN1u18fFQ3wfphNRY12HCeufYE519Cva8hM4yfH4bUQQwndH9J6iUWRTkxBsjxdY14GX3jg",
  "key20": "KF1sH2JUJqBBPB9NSqgwJXHQP7Q22yRRbVvmZWDgTemFQSchw1ZY2RLvwFA3MAWhsx5xz7NCiPtXp4pQKp7kXiH",
  "key21": "3qXA38Qi3kG1X61rzKEXbcRAFktJSwBvDCtWUK3V9NXe9kRg2owTdZxFvrbwkzKLXMMVJSJWAiRFfyD5juDMoyUj",
  "key22": "34PM1DgBANZw43K39WViCB5P5H7cqBy5CzXH46RgN96JVH1iJwYg8xLYvzFj3XkmmnnBq91i5dZBkiYEwRmKUyGy",
  "key23": "4PKLKhvpGRUaoCU532rHHVnkQHkDJMVwggnU4ZEQRkHGkUsPwtfg64EjyQSCSEV2x9dRCjwK8AszGaFB4oPFtWJJ",
  "key24": "3PvLF3VnB1KJrnkNMynq9bcpacAgJ5wJmKUBsAW3BXaknJnx2Fbjgjbgfq6fPWFnt7reEXBMyqHkQ7gSGjj6cech",
  "key25": "aftfGjFLCv2Q6AATnZt9BTVWKDuV3zmWt9DSMd7tCzMfci38FprQ7nBLc9Xx8Wn91CzhPRZLsVSmMQZGXHnVmrN",
  "key26": "5h4eJSBoSo89XNKVMFtWuHD5z42Vx1iVYTAdueNLqG2JF9KDSG47y2Jc764kCVpiW2fsvDysCKrVn2B5SqGSW3Ci",
  "key27": "rAQBoFk31A4qQY115AZLQK6ndtqAxSE8TPoYfWQPLY1fC4p6tPFvSsqwAEbvsorbGohWmHV1vSwKeqZk8WjisHR",
  "key28": "4CjoT4MCTu3xHx4LaDqxucqrqxbpVutffiBmdLsHYGxpu8TnabWiY1sUt2CqCEvnL8eFYbXR2vmyzcZfY5F1PrtA",
  "key29": "24tMFLdcB76anwoAtS51vUmNmeQxUBhgWJbiv4ntPvaropyGWVFpXdQs41VhgH9fwt2Bxx3cXKm7s3qWP31KT2Aj",
  "key30": "4SFVk1AaXzLkkqNZNYf7qirk945FyGbC4tyexLR2z4p3RWjAJZHa3vdgt9jUFnR6xPaNwoj1MQtb753RHuPTmV7P",
  "key31": "3wEPHzz7t7vczZsbMELvbP4ko2vbUwUzj6C7Uf7hXuwnFTmzSPQmFzPCjMqnDWncCGuejLV6131BvRDcwpREZspo",
  "key32": "4mB4jq5hC8xTDTpd2rhPTWF7PQXHuMFKV6m2YQ53hDxvFW6XBpQ52tBWMGGYSom41uuNffx3dRaARi1ay3PC1GP2",
  "key33": "5WyiDV2THuboDoozvyrYsAAcpfVgQwpbrwNBwBKvQDZuFyGjYrPa1yLaabCjNJCYPYhFL3CceePvSfUV17KFaDgi",
  "key34": "2iTcbtVrzxMq2EUxwZxo9JMgdr2QZwjtqnGvYi8nwoumEtFW8qw24q4MJifumuau9FPeG199ZoKRR5FTdRgTeJhz",
  "key35": "tHbKJTiTvjsMgPhScHGPxgG8WUuckbcFBqxiSW7q98kZbfetyYmnefoKDbsjy8nnsL8ipMKrSZk2c33MSfDjrJt",
  "key36": "27yFrS2BXBsBgMJp2H1wCUSQJWFS4Kjvy5321dpuEbtvrv6NRE9hvSsnAL8Sh9ys1zxkeeh51heKFDAKhxr9A4Hx",
  "key37": "2sSguMgJpXDYXczK4SThvxnnqvT7Us8txsuwYiTewdvrzxWWgUtawaB4TZ18RLrHdW1VxgRDtAqWEVww9dC6jnmB",
  "key38": "2NiUnaWhXnDQtZyFCPtQS1XfcvFSCnpSDqukZqg95HCc3ahDvLdeadJE8iPL2oPqSb19r7JUyKW91smGw6ysNejR"
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
