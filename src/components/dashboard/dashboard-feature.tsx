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
    "tG1b8LGCfkd6D5qEuwSjbKZP1jcubpmaW1GPqkjWeYcGdCK941pcvP6bdTcMeLgh7zsgJyaZGnN3EjA5PmZtoE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZ8MHVkmgfKxCAXAm2QUNZynKXNkUgJBbKq6tFKCpc3psURKBH4Mjs1XbCMJi86wrggu8Sbez8kYNkyw4cxcG2r",
  "key1": "5jd5VMCSa2pwB2ztDgQicWqds718JRTnN8WJZqH79LkUMiwJdMgkSXD1rVRUhqdqa3U5nzGEk4ZUmTYq9ykfJmG8",
  "key2": "4FcE3uxbGDPPQqRDGTp3VeVQBtv6ACNyAyDDFWkBoj4s59gLjwg3cwBA8RMqswmrjQ9yhtkhqQy3Xavh949YPM9L",
  "key3": "3UEgu2pg4vSxDkdB23ebiL8HiCSXJ9K6XZpWhY5JsTsZDdjM7rRpeyJA2B6YePj9CCWiRvueDGJrsRxGoXywgtCo",
  "key4": "ywTLYarvnGxy3QvDGKLivyWQZrUYp5mhfG45EsmMNx3Q2HPT3ribaaKoaGDhvbvcb1gdj4PQYqUzC12sPv6b2CV",
  "key5": "jh1aJPsQkt7axtrEa7YXSq9vSGiRn9ZULwSJ3Qetg2caRDLViCtUyRGjwxmLyFw6qHeMaU4NKdsvmPFEFdpaxSD",
  "key6": "5QzjDZcKvsXjh91B6SXvjfvC73zZvyn6T5sqj1R9CKw8LLHug6Lv7gsEHGNssDcZJ42Ad589ZPMhWtxVevaZr2C2",
  "key7": "2TyBLhcBz7fU7YCPjRnWaej5YnkemBLFN2WAjk4VGBVjxQcwA4hZksXN3EPovnEah8D8AWGg4Bv9WpHteMEoNDqc",
  "key8": "43vUtCQ4cYf7RNmLU7BocEZn3YswXWxrrSzNojxswPpWrq4DEE737pedk92LfKwFfDbvZWj3jZoFmcthBhpTJzSi",
  "key9": "3LKNwJhTwpDQYXKBV4f3FE3JmnRQxr44mCcEkBnGgbtKwaoKARJtJDcwBdot4yF9xavMwECVWZcJNhpXQAn1H6vX",
  "key10": "2B2mLJzh9emsD6E2YuBo6kK81qr7m7Ao6bjD11mWAYhhVf5JsB9bmMAcH15uX3WdzGRwzWyX4PuQdeyLe3SV1o3C",
  "key11": "eCDwvebtfmsD8n3KKEeiKcSS5qhoCKGKVm6NALEGCeoj2NHnX7KrDzqHi5SS4NHr82VUdzuLdEWrm1nmcAyNzFx",
  "key12": "2SwdWLTzeJ2eb9BCnUSuYXF62r9X3ywMH2NGbPJQyeroCFcveH8gPt3JEtCB3AbL4hjwnLuf147ssWwhSfHNvyWM",
  "key13": "33HWrW5pnYaKKmqjdkdBGX6GKDDLqR7BJeTS8puEcMfGsZrKFw6KmDSarDqUAQnyQXDXcHpuLhYm8LH9aq5nad6X",
  "key14": "2X3RvjxwH69qiVTnSEV3mns7NGXurkP9ZcJpPfkuWugk4ezERzUq9rfWsAKmB6TcEbyMebi22sX4NGRxAuUj3hYD",
  "key15": "2FKGLbYTQBjk8c1knTAdKGkAPADDxwPc6UFCgutian78M4ga3hYDJhb2AotML6aU6Fq9SbidYW5jgdrBK4CW2VUd",
  "key16": "4yLBbcRdwwbnGmphWENEC4GBURPAPxm2VEL1f6A2Siq9P3iF4pGTbDEYEXriPNhRS7AwkYrcYsHtqtboNjgvP7FH",
  "key17": "5ACYzE9ABWwq8B9JVFpBkQvFF3w1DvE7BCEjkyVSBN81TUjgG2JTFXMWGy7Edc9YUHPurUEiqBS63rhxJB3ebdPL",
  "key18": "2KAiQCikzAaZ1a1Qkhv9Ax71ARmehtHFd8aiEnhr9fsyf1UCz6JLvFUq1aR9JSyZhDgptsKsxJ1ZQTqqjvWbbJni",
  "key19": "pkRTvaMdwdLBLsgqt9pbJjkQC8Q1Hv93X3wmXgQG1gVZkqhKTjiRVTNGMyWvvrZn2EfwrqftX3Nj986Rox8PgQP",
  "key20": "31CpvmHjW8mak2Pi8Wkh8Ecz8NKRVZLxBp8PJyGue7YUze9aAEkF3GP7mZxj6T4jx4avDYk66GSwXtFuxZdXtpyd",
  "key21": "6jp9tXoqt51Ec6PuZF8AsZo3exyhdZ7QNhJPvJCfSxYEtQmjouMAZyL3EW6uaom6CmCSJ2TfiBFKEL67U5XZuVN",
  "key22": "zPr2aTu5zLJ4xAtzhCFReiFBYahBqFsTYVoSBLARC7FBMnmTgy6mNbhnZjzJCAuvXcSLdfgA1BQE35F1zkY7c5W",
  "key23": "3dfCUFv3D6gCARm3rnKPJVbJXiGggtLwtsHjnpMz3EusU9TqtoLTXUUxLXxeqMejLswc44PBGtKz7eeDACY2PdYy",
  "key24": "3RQ1RLiHWBrPm34xomnYrRLba3G284bcbxkUU7DPYrYCXMGzg4C3dVLhy8TcfoCN3eB4WJZe8QMHM882XAybP2jG",
  "key25": "38y6MDeBCLnPUZYnTBw1f4RxEsK9Xqs8VrCtBoPDAhozWjwU9J1AqEXGUf6gcE8h1pnMHNQmNnPBz3Yjw1V44BX8",
  "key26": "5Q9ivoTrb7R3VZLjjTr5PXNgVBKTQFSYuwMiwTWJ9hFpKxe1EWK1NGF44sN3mB3UwRqFcVaB3uBzxU9JVG4Vu13X",
  "key27": "56mANxdApsoF2W9mcSEbemTqD62E6JrhjYzWgBWYxCJqcomp2TJxPNZ5YKsh91TNGuDdN8VXcABxUQ2Sq9bMj5sF",
  "key28": "59oGX214g2T8SS3uKarzBXqtjWhH9cZ8USBVUfJeNVrXZxMbJWW8Lo3YFdYvnMk8FCwcBvuHdPL7MLE3MrcCffYZ",
  "key29": "2CepyduXYBSjm1oEUA3VyVRSy9B3YkxETM2kzcVK3uuZgSTqyFmkfnd3PtACEYmTrn397ZLw1hK5F2i8pCgdbtjr",
  "key30": "3FjYh7ddTAzqi1ZC6ciU41Y2k4GpjXTHD9UiMnybJx5WpGdmq9ws68XhYJmnb3x4MZGwRj9ihKh1gJRfW8KjVMPY",
  "key31": "WhnszQmKR3nqoxCkRmYt7BcNh7DHDN1uEPzaNAsZrr47bwmTDNLiwGPPFrBnDZPdgZbSNko5chFUpsaJaHVdcUD",
  "key32": "MDXE6hZDu1aUrunPvhGEVWcU87pRsoq1rWrSGxjFmBkgvpdtDgnG4J91jryYdXKapZx5RhtZhQMWpCXVV33D2Hi",
  "key33": "4UvLFT3hZUEaJzraC5SgVqwJCmG8R9LHLfUvEkmdeWqUZkPKiKaQ6qHycSYbUV9VLuVrfd7ycs2ybo24PZPrsuDH",
  "key34": "59F31tkkLQHdLpuB8YRABJMkRF2NS9CZCNKyfTtFGpo5rWPWuCQ1m2u47XcRHFQyNfYsEG47GYF4HBFqMhSthGWB",
  "key35": "5WZN4DBrofR9sQ8hfAGj1imKPt9hzS197s5K1nuhVtSkMSRxkrkmhrVv8SNrWdr1n3ZFttxBKCLYLm6ssxNgsj8K",
  "key36": "2kVNdGg454MoD34BmQCwaiyKhqEGs7KM6jLg3P37UmvkbU8J2UUdJh2YpQnPAd3cu3PssHQBAw4wGgQg2qANNBxy",
  "key37": "3YoGoDxs4X3NdRb5AxRU9VxRtKsnXuSy4au8L9mSj2bd2D5UWFxvYZjA9LSbVKm8JJDsc8peH4WAcCoQ8sbxtFfe",
  "key38": "gJptFVEqrYTrgm8rvzpAhW5EVqCvwT9feYzabVFDsudoeT7DZ8wA5TVaD295fXusvFy75viTzxfo5j242PXxAbS",
  "key39": "5MoZjQdibmv6JR3ZTy7ZjTgNxJbjjFi5QMCECZdKTpDhXDqanLGbTX4x7XoP6ADudj3DXCKoc4TAb5zVfKfZ2JGv",
  "key40": "4qxGmsQy2uzEQ364nBedDifPjKoZD3VFBzP2WtRFRLaZci79dSaNroZsPE9sP12HxbVC11X7LJJQcNsSKsu1naSw",
  "key41": "3zURwHkQkwnRJMbPrFSQfC5rXBqwaSoCQErCiH8hT2G2tC8f3RiEpY2LkpLVeApGy4qx7cfdJUmrUKmgVhfRJXQN",
  "key42": "5tTyJWtLYvjC1kZunEbpxXoTo7QQgJv2AokJkWPDKdVGP1QoN4qc7TjEbrq4tpRrr4L1nX4mUENch6byhmYzy9SK",
  "key43": "5fkzinEyADorprGA9jNZjtMJGD54u9t4Ws38iRZ2dv6hXRpSTSJxyipNjYuUT47eQ4spqes54pXc9Rg6JxAqns2b",
  "key44": "2o6QJZtNnccQVYLs4b7W2T3stDqKvwrLcRHBFXZZ6Fy9U3BU3hHuBxkvLUnVK6BqGhyMp2rxRwsZue5Kx3DbFVQt",
  "key45": "5nyb5nKiKKs7JFQuSdP8bkZAbFuWBRivuVeatu9MsVXqEiGoByJsKioxky1YYGonsxsqbA6tek61cJqX1iAWLUMf"
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
