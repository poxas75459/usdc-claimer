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
    "33wvKW5Q5gMQ4GVhLnMtPvc8scDgKHMCDmZPfztupyUoUSJD8qhyHPJMcY8dm9PmkWfcd3JjSxhkJYj8D2z2nvLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lbwsdz9YL3Qha6WEXpKKMeQbPLWjPicX6uRDFgNzvfvzDnbNtUn9QfbtWkqh1B7rzhX9gWsKYcxwHN6whmcaLwb",
  "key1": "5WHsRdCsGgCFQsJSTU5GtoPGAZU8u4denkWdfubanjxby6jSyi4gftbnASrbym7ZQQN5JxThZ994AYSJ63WQaKya",
  "key2": "LXEpWUAtEmAVRZEtM5FA1Hz3QckWERCYeR8xyuRJBUK2adEYTWW7Tm6gNpDjhfT2w6mZzeFB1kvR1Co5NCopnvh",
  "key3": "2C8xwBcb6E3fT6PJVrN16WLLeVchuEF1WAXJVdR2ZaUm7aNVGhPb94yXYo2TvynwhvS4712k1aGdny5hgg8QHYT2",
  "key4": "XHRGxJMKDnQZgo8ctAaRCAeGWPKewjJ56UMhi3XGwA7sUhAq6PQgvgC4juLD2xix33H8JP9DFbCctAXxvewxBJv",
  "key5": "ktEmhfzSxpKFYTWptd2AoHukTT1diWeYXSwrPjZMDqJnS3eWUV1DZJt5c6rPko46FHGarmrm5YxnhhuXzk7VprY",
  "key6": "2GX1RPCe1VFcsMrZaibLLRr2LqAwi7ptrqqKvW5okztpBxhPBqReEL8M2vJaMTZUGQrut3uxD9BZXwEBg61knjRK",
  "key7": "3kRWZAceJGaFGPpmdvjMx5R76vsGCuJhvhhSC3N16f6PFy7omG8J4ayRc58ttbntKN98k4biPaMWmBeVTMdexxuN",
  "key8": "3kYdYRcfFGFZqQbYiG4QQPaXqqJo8qHbpYusJbaqErpjufesCcmXf5QCrMAvpN57itJaby3htDzmuoSqyJbywnQG",
  "key9": "t4Qr3REPqLzWa6DPuV2NDFEqHRFBCLrbVr5pSGj1qiSbWsLkhhb5NiTBP8QY8P2mV9i89eXDWVWLfor5KFTceei",
  "key10": "5VtfbN5M6xQ2CTKWyGnweGv7PDKUZSDGwqTyP4on9Tv5scK6wGBhrijfzcJrdHQ6r95nrZvAhS4SE8H82msgpFQ",
  "key11": "X1ePkEufxK6hhg23AH5CmXeDJVHWhwARNUc6g7bWGhwFY8PwZwahE9LJRgZHBXKimf1Ktyw5A3iGyHQviTCC1P6",
  "key12": "4XAj3BE3Pn6yd386rUJrrnxoPu6znVeHPvvuenmsEF9D9XED22UK53uW5Wwx2ehQ97XgHqsnWFPUM1BoQtE9heit",
  "key13": "2GUnm4FB3ffE97SSE6EQYF2VQQbQyHPvV9XRRKdVbnsRojTqfZCfKvr9dxvMn1fNcYFTfcKmUYquosjVdFJMiciS",
  "key14": "yhi9ehY5o23EgmJQv6j7sGhiATTN1jTawKx2VEZ4u6ifRAK8KZyGPQEx2Vq6rVnUHmvTBziiNd1pWiKotrJvvL2",
  "key15": "4YSvmEtRdg794DNih3GsVnm7ePG5ViCzH7JXyy4vGbKL9NNEHTveBJyK9FgVSQWotofqos1ZJQrwyPMyjvxqcw95",
  "key16": "5qTXu4REnKPgwKW9612unqc65zGbrt7WL2ffjFtTwpcbvT7tSqUAmDA68qgL7iEUp3mNiH6HhRB3iv22nFAyuZiY",
  "key17": "445diPq9rhRbX7MkhAaWGsMPoHetSkbeTg9dcbi2atW6LUhXPtHKzpNZyVAPmR5ct6nekXkoHgAvLwViQvjt8jxm",
  "key18": "2hV4mS76QUFWEWDvNb2iLdfvFegPHTGKeKtSLuEob47aJoPBNKRTmBYPvxpqFkric3inEo4Lrkb49ghNVXMHK45e",
  "key19": "4JevW4b9nPcDfBckcsdjkPrJd4RGdddzqK6frcEyNFXD8VYTfppbvHk5yikksgfoHQEWqmiAKVv7CVd76FNaSR5k",
  "key20": "x3yE8vsyxjken2rrPdYttaaTYxWzd48WiiUddTnw2GUEGx3U2rPSTKbp33ULTrp4crYdf6YMGFbCPLNf9qqs3iX",
  "key21": "5P8QXrd14ptvdFzycJLC64rMCum22aMaf4ZXfcVAVe5gWf4HmrTEWUMMzYQpnu1DDHKfyctjwVLdXgXof8nPpdDZ",
  "key22": "1MoMmgQXqQQrypoHzRBLPD4SUaGgJDaduTgEbG9ttVXdMz44vDM2xvpSRUCQnznEkTjvhB68q72QG6XQzaCt53W",
  "key23": "47Y4jZDWYicYaM1bvMSN1umDduNwPqzeq75xbpvXrJ1txMBwHp26J9X1vN3Gdwj8WdCJyUwfCSwYnWGkGA6BAjyj",
  "key24": "2Eep8TmYH7yvKRG42BkzGrBXamdridVGAyEfH18STwAPgRV9BNcQ3KkXeH4VrABRz4KMvinnbtsLxpn4q5u3QhEk",
  "key25": "5EXK7WKGe2ejQA2xzBaMzWrJZ87197xePjT6AKBXud5s57VHHuhJgsGVk2i2FDo3NN566T3dm1gAcskthgypVgon",
  "key26": "5jgXVLfSSdEW2HAGkYeYrFNtmnVpKorzFsqAHwBG5eYiohULmSQBLj29w6GajUMwgFeRdU2HwdrP2jGGLcvehKMT",
  "key27": "5w43QQciMTMRifUPxeXu2NqgpdNDh9CiQopmmJuGyYRZ2u2yrq1vdKmTzGHzhqMduVszLqCYbhs6EAymVBVdLcxq",
  "key28": "a5TYMNKM3qtzgAZsZwWCpKk59mvHHv6GCYKQerQBqr3YqekCGcgdtwAk6DkhJJsJBHgp6hGNR9kNUskhNA1KPAz",
  "key29": "ZyCybTYCJd3143WgSCCkYQy2tXt5tnL6m7cg1cjNdBRxqZZTUJfQJNRWWP9ohuobHXtohZUVdW1fGEF8A5rz3HN",
  "key30": "59o2Bnm8bViaSHRY9y6v9moijKvzUgqkNxBNkxDdaipq3tCbYw1LqghXcnXnjFmWr1VouwfbjrCWvXz1zhoNwG9g",
  "key31": "4PthqkisvEqgS6qST5n6cSQvmPq2d9wrQEQx32f1bsh1WYTmu5scjux1KDhkqP7ZiLgnoHSomRPWjC3rspWWYJxS",
  "key32": "DSDgSo5dJGDURYPNgdHE8DdWNbzPN7d1JFURTEnGVDAhACGNr3p2ZcaMy2bgetP1S4eDU9XnZFBTvUSak1ymWw3",
  "key33": "5Kgkgm7WKDt1WpSuAj7QsmAur4ffqspzcmBmd4vySwmVhG7QivHdrnMyufwM1JnKz2u88Wv2VWL44YNbpUWH5rU1",
  "key34": "3k3ph5cqia9rgN5reU6JELokbC6CPY6ZHaej9Y2hR8HVUHw3CL3NPNC6cigeuQ1SEMffseHyR8STwfogWYNT4sPu",
  "key35": "4ZqkKXCvT51y6aSHsXtntsjFM6iPHESEHjJv3bRjcAEkZt4NojxnkQps3RCtnS8DNo9uT4ZBbybpFVutLbbmsEzM",
  "key36": "2kKgrBA32pg1p3n7QRvir293UJhiJ71Ttcbjf7vYTMeyVFwN9LGVTfgZrcfhxcShQz8ihziQbno9rP3WGXC5ETvr",
  "key37": "4uHuEb5zdV4BqzaeCakrk8VSjbSmuX8KKCqdRm9HRQ65gdnr9xwTRQmwPHzsakmUecLbKcXZmjcQiMK2fMzUzTeu"
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
