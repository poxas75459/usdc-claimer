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
    "4wjJpmLTmfEoUu9VPhuKBf9BidQAfvt9UmUoChaQa773QjM9YSTTsF93pCchTewrigVAoNYpiYnSXfaYQ2xcZ2fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56C8CLxQm2G8o733jWjvPNyBpBJMS3z9AUvZD8jYoysuqFNbeUSvTgXPdVHcXsxNSmMcE6ANMotzZchocSU6ia6N",
  "key1": "281GuCFi9wtQS3svBgwUhpFiUbzRedRBgqTNXyJoBw62GEDsyS1xnznMSWLPQWFipGP2NbEeqtjSpD8m37UHQz7M",
  "key2": "KZJjDLkGfeaSxfMCmCkqpXcJm2nXZhsT6KHDX8qNAyW2w4KT3WhhBbtkJHMBgMHTDHTaTuxrUzEUhCfj9sWf4C5",
  "key3": "4sam56JJC6r7a7FcjAGnNz3c84D24jry8zy784sUVcVDCnxdDtZ8YTfv2TGUCRv55YPcdz5oFbmSdu9T1dp4qKpP",
  "key4": "wfjpcsR5mDHwnxbBiag8rJDCDBpfGpsyBnSmPUtT32VWruHAwLq1jGnyrFjuyANRdKLJ18Xrt1Fkea7AEGQJPfX",
  "key5": "V6tgXn1xZYJ2hNX1xLeAEm294Jx5xcnRNYggUuKGjjpctDS2o9Vb3WpVq9sNKcfjPeSxUV8kKZKEbxksZaPPhe2",
  "key6": "31gyaoKjsGM3nZtujqCV5gAzfVhLqyfZ2H2Nkne5q4PcNygoBvrGPD4ExBjK5fBvTAryWAABLV91zMBGc9vY1eSq",
  "key7": "241kbLcw5a3BbxLYUVWcQSUb6XuWmfFniPa1bqYvBMTCPPKL1Wo22kkma53WspmXn3yLt28M85WFCwxcNv97vMUq",
  "key8": "25sStx8AKxJbwP1KvddzZnY5uQzWod7ch3FhA1SPu44EmJqPTLhEjtTMad1vcAgSjWe8fjTrGdDJJHgMmGkCcgP4",
  "key9": "3TuFKdmJyUZgNFg5v2XmREaLeD3LzePcYuBCBDv4nhHMsmPbS5ZZmFSbz9dbLr8kJpysTtJsDbfXpiLEN2GoXCWx",
  "key10": "448oudgxm8RVVGzMZocQBcTS2NJ21MjM7Q1dLBVTAyXC5X2dvytwJXvppWUWUR5zff66hNiRRtK6dBR4QpaLzVwP",
  "key11": "PPopYVLuiewQW4Wm1yG49ievCct56wXFwvqdbEJ6fnts4xucbtfcbAEet9An2pAggxGgeNqzFLNf6yQZQtaAsMb",
  "key12": "3P814zmHv5zknhGcegaNVuQW8Vrb8D7fMZsLtSRE1MqeQ3ijiRi1patQkYGwBuEzvB852aeDLErztEvJ5s2zzkEn",
  "key13": "5jzf7sgyBRS5GCLhWS7pXgQvUrEP1JakeZ2Q1o4iH3VMSNys11rntUNVdSFZSjLWHARavyNLULi8A1LK7a2DBDGv",
  "key14": "5BomZn9dcTqGNvztTddAZBqksp7VsWLwJp8WT74v9Aj3kVGLcPtLq132u2Hw1hLSYkpyF6p21K7F6WFsodRccLiC",
  "key15": "4Yxy3uUrqwW28uTDfiXhmmXvs3cdy4C7M15b7s8eRsE3KB7eWT4m7fteTzryAmbTecz2Z91cnjEsPz4i6SHyrNWm",
  "key16": "DyvaLvgv1Fv9BofCns2ksmjcQy31FS62yHgCVnzs9JxpyAXV3Z8ZUgtTanz96cnM2LcVtwShpRvFvLgDgNzpyWg",
  "key17": "46iCLKW2Rxgg8cWywngH72uy1HUaGr94Q1kyf7DanVNcvSPPmmLDvh6nS2ZA9NHWkhcYu2w64NHnD212FaKPct5E",
  "key18": "44AKUd2Syjt1JxQLgsWePhNpJRisJEPa1w7yyshdTbLGtLSHUVaVow9LEocbmyr9E1TZnYcoDzYvDku6zVHxRcvH",
  "key19": "5RSdLP6K8vCvwGHZWNQew2ZUZHrvMzwnm51tCoNYiPzUPJmqXbNrGMP9RdFFMUWrAQZFrw5CZ8NPr8EUDa2PAb7s",
  "key20": "55rkSjwu9MoWfZc1PQL1NXjQjK9bJHsoRvsUicT6DAr97unVRwArfFkDwUjBJmsU2kT5Nzsjns3hvRH431bdTiqw",
  "key21": "3yYD82JMf9ri6TQek6UASgzEDy68DNeqtA83Rs24Vnp5cpqGH3wqUJ3RyaBG5afJzBXD39WcpdaXvcsnBXW8bVqo",
  "key22": "26W4h74wpjuNsQzEGhd4Dq9WvTfFD8xmn9Q6Wiv4VbTAFMZp3XfAqWhQtFLeds75SVUMYTR3qNobyZ1rBuvdZN9D",
  "key23": "KoffMLEXHsDWsHjNK2bFtXPDeiyNPrh6z7oDHunZc2zexQDPNCZGR3SsjfpPxEu8wzEJcDRHTJkXw5F9QRjKMr4",
  "key24": "nVjpoxhMmP47HTTGP1HXEuh7jNnTVxf9Yi23pqVXTesmf15a3B4EYKz7Qrw5u64TSjfCbDph26uKaHzdjL77gbN",
  "key25": "36e4PWrhGjuamND2GVtWpMvC8BTphyFfkAJsS8hEiS5A1YCXSvCiYLopHi3Kee46nNFX8vHMnK8yWRtF9ndcAxZT",
  "key26": "4Fg6BF5BeRrHq5xo8jqTFQHeDiA5vaBdMbjNd2WwHNNCk7vESGMDBH3cB9jkdKDA7pB3wfpyGocGLww5fT3A7Fdd",
  "key27": "4AwMFEKic94ggK7RN3UBrhvbcqPKbQkQKrhJLAmEVyhav3t87CLimeqY2nszKgGNW9gLPoAwczqz7b6WKsm7jPH9",
  "key28": "5rbuaNyms3rJ2gAbCQwGRLUJHydT9nhMdwzoD9KdjRjcfusNDFCqBP7Ch4kDPcwtcbG4EikgPaJKBmm6jS9HLcYo",
  "key29": "5NyezTkMzAJK4EiuPz5syD2ZeS3JrR89Atq2jyL5mYD3oXnLWZxNegiPWGzBBXTEPNri2GyPVgxs2petnQYpuv8E",
  "key30": "pMutLNNDBnU1F2JiYVfEUBhDxkrLon8Ls7tpmHqchTqWQ1XBJMptaYEksHhrdsKthMqNG25j8GzZ8umZasSZkFW",
  "key31": "22oxJuzbHXR1ozgmdafJdPgMEpRiEYgnUKeEm65CrP2YgFE9UytJsPmvCn2qrGh9vunEohFbvQoXRcBY2XAfAYxt",
  "key32": "2Na6tLHZGznh7N1gKPBPsneYBGN9tmeHBZavvN9JPRL3EVSSzS1fB5CX5ycjdQAXN69UvwzaMfrnTpm4kcp7fBbm",
  "key33": "643LycTCEGcpJgipbhca1PN1LfnRE1Yvkq2UVUmo1RpvmGbY5t7HBXs7JX45LM8Uc5x9U312AXLXYgh8RY6Xt3UT",
  "key34": "j3zii5AfxXiUquE2GCDajhqadohSn6cNXZxb28bG2AoBbXdU2JhbtnyuvvwUSHJLMQBo8v7tJyW7g5MYYB41RaA",
  "key35": "5kBwVWnQapW8GWpDz9FnjjfhzAUNH1J7wRfVSaXyyACZXuQyhkd2RiDKWQhxrhNg63aGwSgpSm4wsYSfokvNGESB",
  "key36": "5UiaqrAQqsjZk7VXpeLHcTMNj8WudKun8FAJMQ6inFwrBYpo574QwnHuqoPmBMLF3C9xMY9ZQZ8BuPFPdsaGUqA",
  "key37": "3HQttLh75GEPuJDGE9DVsqJsCzpX9m6sq7SyGGRrqqj95VHekxnef7FaQLJxacS2Ghm1dvDa6PmdTC6UpYhrgPZM",
  "key38": "5AWL5WEfBtsjMbpW5Up83XUm88JEKN3G6tKhKg1RQb8FbCpUM34WvVxef3HFF6CAueodRyLu191fWkw9PBX6vRiC"
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
