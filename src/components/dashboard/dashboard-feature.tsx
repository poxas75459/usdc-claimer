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
    "v8ow9hcY4BwcUQDYavtvZmfmoNk7oKsANL4UErsvZ8bUE4z9uaEzTLMM8zP77Ha2zEu299Wp4w6rjeemvrpYAgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDySRWif9BkLD1XEBKpDdGQHHKW2BzQWkwawe8WyY95egvQRVT1dZxA3XfHuVCQiS65TwKZzEgiCqnHxSpKYLeG",
  "key1": "F5jKFpWUPAH2KrbptCbbLZFXDrStGn9KzTWhUNQsv4UXBip22Xvtntp4YnJQqkH9BPtCdDiF57CuZvzUXZFe3un",
  "key2": "3Jf4jWqKFr2qc1TGsYEGVB7zpsNEMhh59iL5vWxL14i4FCRAdQZ88MxX5HcxtkGU1qxXYnH1yUBXUVPhENd7cw1c",
  "key3": "4h9qYfGy2GxB1sJTJvTcRC2iy2p9u1vXAR4z34RePCGHS4rQteh4L9KfeXmkfFfLfVBxPGghwejpFr7UoXDCUU7j",
  "key4": "5MUkF45HCtZL5Ts8tbqLKR1id7it4dhuNj6qFdbc395nr7nVbXodoCY6c1PSYun6ExNCTQmTUhNtG6QNXkx38oBN",
  "key5": "3xd6gdTiS68RTRS3QrnkNWsQCnfzsuXfWFuKRbmA4L2HMR4YoSqMEbGMVydjaSGWaLyS2t5BdNa8oyu6FLXhpYqq",
  "key6": "2x4ryyEpMkQDuMD5Ch4kCRJ5DzzCQE8Wd2NqF9d5gbQL9tKsVHgRwiMN6N2cjWygv3Brv4q7qKTA4WkeagyyPSnL",
  "key7": "sD57kK2ZPmsr5zQRv3XTYULBowK3YjCrQbEeLWhcv8uphpG2ZU3tMow5v4f5arnp5HWTDusx9CvVw8XGiESqW8o",
  "key8": "5nxh2GDB4vbojUyjbcwdoWDLtBoviBkFnMKkeVBbQgmecbBE6rLrhrSSLUGB8RdXrBJp7cyJewErqwm4Y4dbujyh",
  "key9": "67XYMC2Te6Fhvt3WVnFYjx6ByhiUzDDJNRbvuZuYSRPCBfVbrAhmTb8nfmtojRELZwynTpKP3wT6YRuK8RjS8Hoy",
  "key10": "25GtUpsdQ9tbWwsvrEDHCpWYrm8JhD5Rc41tLp2nF9rX5haufxgJw2r75StwdhGPfk3gtELwQvD5qt4zhyR7sam2",
  "key11": "58QPaGaq99cJ4QNeJtNfekPdguha8idmfKY5TbkYaz6Gs2PF1PCAciqwnD8ymJAmbgA9dipAf4LoxLC1kGbJzHH1",
  "key12": "5HYSePSab8Bdau4WPSdnhCHngN37Povy2Eg9eAu1P54X5f6y5tCVA3SnzWzQLFng9hA3CS1PDo2KUcowaShCL9XL",
  "key13": "3N13w3gvwdYJVY9LsKySTYG71NNcWTtsE7Bc96n5e15BCcJsxtznc5NC8AW8487Ea3Pjwgp4sNFpMqmkNxNruVPX",
  "key14": "5SCC9m8RMFXbV33yUKswAa2gp9THscfpQt5QrgUFeKkjcSEi33T9wxsCW6TAgqQZE1LPZ9dDYqFZ7UFffHKPxPAb",
  "key15": "5wSPHDVqkD8SHhbrYwyaBSTR7uPTzSjeijGZ9jLiR8iPcLGTrBeKcNVuBh78zdjUrXa4cMERnybDtp5Gwd6FNTan",
  "key16": "4CAagFVK4i3t5uS5xsRx4rq8wX98cK7hetpAe5ZSTLTChuCkAqiJ7skxdYUef8qwwP45fQNuYqfXQEUwpVnMev3n",
  "key17": "inka9TuP3gjE9Xm1ctXo2Y5MQPEhBe5uCXLHmVLkJA2Ptg67oXZ6taQijxY4cf8VZPSyDqRYq6viStCSQEQpGWR",
  "key18": "5yVHHnUwnJCG7bHeuMG2qK167FydjAfNPZKwy2cXfexZ9Tnypea7Rmg5UuEoBh7Ah4Kn5MRQGMEEsM3pw1mh6LVj",
  "key19": "3Sp2TVDuvroyJzsbL6h8HKZj7VfmsEmVFJpgA6zr7HnhvQTm9CGPXi6k1G9XDZnuRbrBFLSy6aV2xwv77bT2xNNr",
  "key20": "3N4WD9QXwukT7ruKDiYemxcE4BNLYhdraHdfAcGKvb8ZbS7yMzdHa2R3796jEAE8xAQ8oWx2UEvu4XgTT6nDDDAT",
  "key21": "5Uj7mSYdXTaGng2Ttv57Cdej9QT7iFBrRBCKm3E7qBkiEz7eYeneUgr1MS5kQeLd78FN5AkHqChaAcPBHkK3BWJL",
  "key22": "4a7qCVgYfzFXbzkXkMDKpGMLodPWDpVU1sF24PoHMgBrTyZVksLtFPuiyhCifjkV1GvtzVZAVgCh5mTkBPk64s6k",
  "key23": "5RrhSob5WGPZbUUgBb6Jvowq1KmnZBa7c6Dx6Uyid2ASiwzmHgTibz7HNqcEhBMnxZGJt2Mx1sTEVTXUHcsDjaGj",
  "key24": "48vfKqnnWZgP3Hn1CojCQAo6jBAkNbwomVT39sMEFXRyHxR3uWTSC7nnqQDHd68qKuAootYjhZkqRmMeXmqimEwZ",
  "key25": "4qiW1MdavmVLUAVt7vu8Sk1mMMVe9rrzQC7mGrDbM41weVFBGeGZK6bAYr1wgzcQQQgNjAB5NNqnvNDj4Ytqv6bi",
  "key26": "5QXW9DyewwYMytML3rnJuj8xpBkS81v1wA7dQ64tD2rudei7tfznkJpbU55SPD1RJhwPsmxSk259H8kvEVy7TxkF",
  "key27": "4QwQJXsigN3FKusugRW16R9FEc8Kmqxpdijrh3SusYnCfGpdLnkDPBQjzZtRAgDC1XuoAvXmXeKGrYtZXEdsPVho",
  "key28": "2k7vrBHpgN8MwxRfxQpH6JTqnZ8jqkDkZHF1zK9hHTs7FXepsmu6CQPjp1CPpwrvGKhqRBKHSQpyEu8YCb9n1NNT",
  "key29": "5EsCwKg8y5W8PjWNQdAA5fNjWDFBCvkVdRzbAU2dvJYUA8iF1W2JFB3XsQsX4JD1txVDBFoPrJr6GgPztWv3cpFZ",
  "key30": "5DswacyyFNc1MxW1awos3Dra7ETPkqe2u1ncuKnRgQ29dPETdwefgZyyBvpTVRpP8tdqeo5YnYMuL5xPdbtf1xp9",
  "key31": "5qWJVwr9kyYqSuhZoSyTt7BSHW2vDEmd8EJTxLfpXjPNTfyEzU5hJLcpGTQDN2x4GSD1z6WZhyAPbhEnSyBPiYp5",
  "key32": "2WSnFAjaa3MEWEsi57P13UoXsAHXYaPC3pev4E7Z5zzzVnCRdayZhatcg5RLKsPC43e28kGNyk39P2Mza3pnaWbG",
  "key33": "2r1tQX8vrEwxJf6aTd4RHyeXhtcTfByY5u4RZRTPmKEfpjdtHgADhvtPn9rL5dprPzdWcGDkx7nNSUeEFKeVqCqP",
  "key34": "25Yd1GcPvYKRkHGmunbxjCZjTsUJZ6NuM2GJtPzqBwX5gpUsTWbmNd7JtqtRCzu9XLR6b9xCME3Y23yJ8d9iC5Jz",
  "key35": "3jT4DUDxvdu2VD5gRjjMzxwp6pTkA662rEH3mPj1mgwmrtwE9MbKj8uQi5TLiAV6Vqx7MBEJqUNVuLw55xFDQnHn",
  "key36": "56457a28ts6F7D6bXjPXuepMaHJAwoDMa2BXfB7VCTWc3kcgbJuB6N9cpXUbM59gPRbDykFJB1ys5kdMUYxVQVLg",
  "key37": "4XHp6xk1wkvviXdgy6Acmn8cSdjauRJw4qPi81xyikv5rqJ4jhCDsNDv18bXUiQzb9WqE62QQRTZUZbxoaThJgny",
  "key38": "2gmjYVraM1dXuiMcByRbUXFrEbmd39QdAifjjXoiqgPKPLpqqZbzJm9qWDq4Fe4TecMvF1QPCp67GcBVu66DVLrR",
  "key39": "28p5QwT2X6Eb53chzeGbCV2c7mDdSFghDgNDHB2Qth5LUYsQSiD1CaNP63kJd3ggWVCugwu97knkDsyF2dCP1HG2",
  "key40": "3LzYc88abR9yTiEgAisriaX7oDb2o5N34jufCSVBMtUEwMgA7tFGHijh6xxkstCqYw7W3jC5Hx2EYn4iGSpYYZ6K"
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
