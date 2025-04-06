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
    "5wL6Tr9ZMLfTeejLQMUDcpftcQcRTyjNc1esXuS4uNE9BD97rDm9WuJynPHjtDUv1BxqfrNPYafGcmb8p7aeBPtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9jqrcLkRUbu8eTBG8352PvU96UHdDpfCcpjGfUjbqBdtojuPws6AUM8ZfKvqxdqrevcv164jTkeqagxXKV9n9A",
  "key1": "4bYnuFqtTjbCsJhEfUSbNLbmhjAygUPYjXjA3iTDEF4L9iu14McH44m4ndJkkfGwGwCivwFSH7ZPAeAxeWqACNo4",
  "key2": "2LRKX9CZh2XnMai3zXvBGCuS1jEp8duP8BfBHUtohuN98mEms1G2QGLVC9r5nsjVDscaZFnr2BNPv9CruoHaUxtx",
  "key3": "5XY9HKzttgDi5CHrd6M2VLPqaADtMHKtbdj6CoYhuEQh8PPAhdj2zmnZaaeDWVn58nZxrbpVmHVHd7hc8hEm9Qh6",
  "key4": "3B1xW4qcbVMxQH4ixSacE6nmf6x2LKMSeiJCRUTqyQ9mL3AXaUm9caZJdziFnEUWzmnmPZ1FFduFrHDRoVTH4pFK",
  "key5": "4ALEeX8qg26uVkPvggkCVeuThXnNEd1E7cax7gczyHSJ5Emro9oZj2Zy3h3HPnvpEBZzCXyh8D2HpZ9Nhb25KsS3",
  "key6": "3rYk147FUSZrzU2BZPsQewhwxVJ3MqTMXZSuRSyCZaFDz1C1Rvy2RDzqqjqxotzeqEaqEk2UYCsKYTxEaWbsLcce",
  "key7": "2bsgK6biEvjd9vHNUppP1kFy3HfG9Wp9Q2KAjwDJUDpUQ7mwQHHYC2eqJXw9ezBNE9HAeqAj8G2EMtGCXTt8sMch",
  "key8": "2vijuRuFa8aZqYz654NyKZMvwYeLqQgpurXHR77vtf3iJ7fjswtdjLHDS9fpbqrRMiGvaZDzxRqz2ruAk92qvCpS",
  "key9": "5J2RRSjhHvk9zqsdXx4JxFZYjAeT5LMerfixrukcjvXzVUV78xkTdYE7HZw5qXYCDidAL8aV5mk7S6FSGh9NDMVo",
  "key10": "18V9g7bxHzU8QGQDHYd2ocdoJpyoVwrrtaDt6btWCnfV9mSkz5cUYeEburUtWteiiuy5DCMjEebjbz6nRtEGcHV",
  "key11": "5wm3BSGYSDjLe7MJVpoDarHfhjwNV6J8cWG6b7fRWn1jwCqFVeLjWHy6Yv7KpuCr7iSanf22UBaB4V5kuWDFkKxM",
  "key12": "4UaJFxiK1atHAxVeJA967rkBCnYZt7bsCY2ozTBY6cGZGG1npnVXrzkicCqaHn7eSqrkzrvJX1o7rRqVJS8akwaY",
  "key13": "4UBdzRd9s9j8rU4cuxRQBi5hZmZ86612uisYdzYhKaYzczGiHRAU6SbuKTJL7Y5NQ9iwwbuExDXtU6KSqthnMbTr",
  "key14": "SqCxUjbPWf3DKv8WXqTTqgjhhT7onKxZFkBbKKxVmwC7qkMUm21oVwJWbyYEUVmKRkkvTzcPADkSvMDLW78LTFd",
  "key15": "4wpvapjZEuJQqajzLnMsQ4vQAT9J7d8273L7u9Fz7w6qDssU7QHvfbeRrhSMGhvEGwWyeYGc76hQcdNvsSkXgdKL",
  "key16": "5ERuRwHRa56nRSBhCYLuNYgyqQ5Mn4bv75ikj4e2DZATLvvJWGUE3orbjcnFGKdwfi7parvnaLZHWBf9dBLNXCp7",
  "key17": "57EYs1qDnL1spHG5rQNFa9v3C5LT2FbQ5FdivTzP9theFkuzJRYJjdC1DYEb4gSEVYcBhyqyAnSpEbGwqmfVByrU",
  "key18": "5uYyTyG5GFFKDhTbGFhkfRAr1khS9oFiTb837YrZUPFgrGTRERU1e3J5Xv2k8A54v8C5ffbpnWHVGtGPRGyQro58",
  "key19": "CJVFS2nwsza7kM9pW6mnp7KfC3MuHWGECwejwPgAk7Wge8qShXvsHPvWduKEFTad3kJLjSbWwWN1af6PpzFFDyF",
  "key20": "JcZApcF9eFPnLJoMVtchXkC2mSsHGvcdYwqJYgjk231a4zEreXCV68P7i9Tt8uCFfP1YgbcDjbg4MTGpiThqRMu",
  "key21": "eM94q9z5ShxFg7Lc1KhfevSxuqsTkPPPCGatXcQubTq4HYJrgmRwg1pDiDdmvCbr9pVAFuFArYcJXS57fPrTjqf",
  "key22": "4CdSqwDzn3uW2aYRT3B2sNPPGx2MDNdpPSQtNvA6kDquJ41Axrpb4e3tYjSuG8TJ6xe7LDzDrNE12Bh7VnRvfUha",
  "key23": "4biJeDBewxr7Ra2wK4dNYeCe7szYMSog6t8sKgKNSymNyBkPPtXqjvP8HEKGqQfGLB81pgob669hSPMsVMWbLHAf",
  "key24": "4twHpgnRjYigVvG8V3NcKSjjPGnZXwfJ5LKUWHBK6tgsByE88TatjpDgM7QPJVdjk7CPUpGviq93tGhEhnany5n",
  "key25": "22RMQHEKyEG4Cu8Rc8dTaL7sdeLG9wUCaCvmn9KBwWmmB9NfqsgHuLewczxzwHQxKEGGWrkrpEK8kH5jcoeTqGCA",
  "key26": "62bZwXxrG3suiF8nWKwL9ZNtn92xeScc1JvFtWfTtaufBQTvyEjchT9CAF46uCUkx8UsyBgCc2dF1228EnYnfQXk",
  "key27": "5zz3oSh3VBLYC2qP2zRtxoCzgGT6DMHF7xVmcgATrkEEXBzJeTkxSFExwGx2qVkJ23mMAT17S7ijYHXhET6HfZAU",
  "key28": "3hYWQE1GkS48vs6YZbx5zuvM9vUT8WYqpoNTbNmpUcCLXobEyMAvFD6zi2MPEvc5PKynZEm9MW853LzWKweWcprH",
  "key29": "2a7qCt9KTC81wQn62WJcsfmnWkzQJC6otPneAKNLAz51QofRjUeQ6W1DgkdFiF3rK9fMjR2FEVuTakkbPzWd7Cb3",
  "key30": "66sc5TpvHzGiAgasQx2SoBnsb324a63H55YPChvXZvhbnboqtVrX9tt5u1sCu2W665Pij2phjWkroS7q1R1ByHra",
  "key31": "3S4DnA32A1KQSsZjWi3RwTgmUe9KRhkBG65m2PiaXHye8vEijeL2fi9yt1ZkAtG8dnP4mkcMA2ehk3jVX8Uf1yqr",
  "key32": "zhafGPRwv3CAewss9gkeiiKaT4zzptRzThSXXgfbRx6WCPx1oEkTsWbv8ZZdKVM1vSrN5CLfRYJ6p6b2qfumtDh",
  "key33": "2J3Bk56v7xdgarspznQitdTpsk1HBHoYUA2uF85QSuzWSxYoFa8rnna4PcSLtV86WccBfZCRKaqWCZ2cA3V4FoMW",
  "key34": "2uqmk7n1u6j8JwsZrbs5cPG8GdVovQzAZw2kgVneQ1ShhmfcFof9njZjxQp5hecQfLnAYJ9zppifW3shZuqJdYAh",
  "key35": "Y8DuGZNBAemDqWVDbCsttQmSG3LB1RpSUoFJZw2Vf8P3mJnkCqKhzy8H6jUPnjrNAjqEwJTG4praBD7RrRtJaub",
  "key36": "2d88QzpKFq9qxUZXmZpnbZ38g4AQho6Gy6kX1Yh9xop1XxzbPoMhfZmC6xe3oPcmX6Q7WQJk1Wm3qhMNh1GiKyDk",
  "key37": "3RTARM5jJtjSr3krj7C8V9y4pLutZB3jtkrpRXQESoeE8fqo68FLPtzT4wbAjBBDPkKs8pgfAj5Acj5vPTX9dRdN",
  "key38": "ANjzcBdpd94Ge9GNxD66QLicwSXiE8jidtK6yhWCVco8d2p9Nx4tiUa6s9yVx2mEEnSHLG623NpVKz5G1jJyAW2"
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
