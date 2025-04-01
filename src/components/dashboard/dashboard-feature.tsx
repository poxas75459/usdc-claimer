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
    "2EmnHraRAN8DhqodNf9QzPDky5joiiF2ry64DL1QFDEaN7TSsCwuWpRKKLE1DH9NU129xy5oSucnTNy22xf4hbQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zECsoxGzrnz9afoHhNiCc2fjfNwfEbCcFgRCS1mL7Ga3qaSuAZvyKEe8kmVwFu3qJ8J3itRAz27Kh8st86aDzQA",
  "key1": "EEyAHJgdK7W5fBLhoEYb9jSpfRs7YeDdkEZTgQR1mU3gKLQ4itAsKSr26w8imSQddVSr5MSsNE5DLkgJJ5zJezs",
  "key2": "4nMtKzoXHcnv79NiE7PP2LhQUqHRdYs8oUxgsTYJYLRrn4wNw5wNvCPn1L6AXfCMhBZL5x2TQKE5uyjh9v22HNKJ",
  "key3": "RyEZ39Ja64aa1F5NydU8AUdUu3wAqyKJykuuKfKgczjviZZP9TpaoygTjmjFdhigyCb74gwM1HE3VKdCXBfVtqU",
  "key4": "nR8KWNnZwAMtPJwrsEtzvn3WTnas8YZygfCNpiGNhY9tQV1esdtFaUWNpSbVdxE5qAdNFW9QAzDU2VM5C6VkuiJ",
  "key5": "4V17TQi5bHE7pVmhq9e2HCbYyuqe7tDEUvhLUDs9Cv9u2G4pkD1gNrSaYub7XnPzTsqhjGffh5R2yKfJ8xBNLHAB",
  "key6": "32eBHPGVcyReFCWaEAtqdaYHwa6QfaG9p2EkijEXX262ejZfvVzpyVvyPa2hFXvvLYYQ3nJVTyNeqR838EnrQ8JR",
  "key7": "TFDLKVaLMw1shpHfRh1DkoHDJTAWPXvqeE5iUHX2gX9sqJdsMdcAMifmoaVPSgr8mEXUmM8GrWjQjeQmkCSBYt2",
  "key8": "221eq66SN9buC79vQYgZEvKpbZiCrnQk2CPwHcDRYjPBRXoxx3ffsUw6BbqXVGf6cEptPnKUbdUo8DS9Drdi7adG",
  "key9": "2yDykjCr2HiqocxsuUGLiHWVnGag9xKiHMZEw53dNuQgSpQCpSC5xsvifSnowiB1ijwcdnvDTrS6wUwtF1YrpzHP",
  "key10": "3hrQGemKcCiA6e2zBrZ72VkF13ysoXv55XxdSd3AFZKnPNf6ioexCjWLJpXvh5pgnmXZnTXpeWeXUfgnfAp6TZ86",
  "key11": "4FKWiayvusAhdPxeNnvmrTKD5mn1HgqzwMXeb3pxcZVaZXKiGDehCduwW6abLw2XBuW3L2pW9xn8i7QnmqNVQWCh",
  "key12": "4uShDdq5SXFyXn9a4sWWSuQmidxrEmEid16EjhhJJNZLXpSYU73nbsCVRBnF4NyMJsqEUPqwsaDjjeVyTEqjeeEq",
  "key13": "UnKXXCeJKumkXzhk6frnMwWUzUBuxfAe3HkxtnNPdMXHn2MrTgN1eLoX1cAKz6ef15GauhDBvqyQPmVMJkG8oxp",
  "key14": "5iPrV5eDD89a5FzJHfmjmUyhEWnSJuiAUgHyMU9FrMHnytfsj1xysJY4WEzHYPP1gnseJ8CZGvj261143SszhmnH",
  "key15": "3yHEp61pJ8gDF5TsCMkx7DeR5J3jNtr1r6fCnt1pJTeme7Je8PTBobiH3E4UtcfftVfdTHqSH9ExSqoVEGBsnvPL",
  "key16": "14zJVk4yQpukTHiJ9MfyDb4QGwj4ELQn7aFkWU6z6aSq325VD5skJUHLXrS6pcFCP3a76mRAt6fd8HzaeVNVxQk",
  "key17": "5CwzScqDP94asjp8W6mdJrKHJrZGnxiMHmR1LTpr18yTQ2FxwBoo5fdyP7KN4gpYe4zr15hExfb1sk92pqt1jUqW",
  "key18": "2z5YPi2d498wm6cqLb1ndX5XuiC51jNFpKPU1RwW3fvu27UvYxD8k7pggihhiLD6DivTmNAnVNstBNCXyXUK2tYc",
  "key19": "2vDzxb8qCPWYZG5u65yWtCikAMXTNvruT1neFmcvj7ZKLCcqktTm4WQv85Aat4BrN8ifTMNRhUWUkdySgY53KuQZ",
  "key20": "XQziDP9WQDgZDd69kazjnwts2cWMc2i43Pzk43fK96uktYWfQr4kPs9fCTZLrgfF6wdCmxNwLcUbTcPDVceicoq",
  "key21": "61xhGGVc5hYVyjkLWDDgWAvu96dsPERK8qX7AcnEnkoteamxydSqSXNSHwUzP8D1xJ4PyimEmTAcxTk2cg4a97cY",
  "key22": "5aJ8hqnUTW265EvxDu7CS1DzgtucXm8DqWNDfk7iDtdfCgFtTX7kvFvtKemQT8BuDuZNmTA3axfW8PNivdauv5FB",
  "key23": "4veEPdCJzsLHqvwnRKaQZ3LrHiZUbV9SYu14yDEBDZuxFFSb3ku5ebPZCon5UZRPZSHMmRRDmFwyuLZ9yUSuVYqg",
  "key24": "xsV9AZqFwbzeTzyPhyHXWDyUAfoYqG6ZYenft4UT9uxadUbtEDq1Lsud8joecgKropQnsYXKyJM7C3KPjmpPWpv",
  "key25": "MfSFdC12cxdVTeVGt4pdmyAHfRie4sGTg8513vRNNdrWz7rRqem26Loubs9R3EuxzGhpwLdZVyQbVkC6bHGc9MB",
  "key26": "5rFK2CFgy1LmJ1A8hohybxaN5FM51WrXyYDfH2eu34tJeqAH4MYr25RrwvoEcuLRGstMe3NmYHhq8KTkB9Dd5wNi",
  "key27": "2WDdRgEY1me3tBPGiXK5RA3nGGHpspog1SpBLmvDdP55s9UXa95BkcyvcKH5ncQ7JGrEUtsQkEWz5j7NNgGnw1hT",
  "key28": "214s2QdKmQE38BhxwCaGGADwNiXmbA1XsmCxqYHQh3SQciQ4LXGUbbgAdPUuqqpopBC95a1baR1Z6Cke4CCzBjiT",
  "key29": "4ou7T8izqgakKTCq8zWuRqGht3JhY5ZQovcxV69R7CEksCeXPpuBs5VxYR6Hf52Kn3P9DYtj1r7dcDCUp8ewt8zy",
  "key30": "4byzhdGGkgHsJ212u1EYRDd43XnCaCcgR7jkC7VR1d5wHC3rLmGA2UzZjxzccj4uXE26y4mCpjpTYx898UJ9rug4",
  "key31": "5CQbJiWBvoZwpE19sAqLax2ds1gfrYKPV1UtdEEpuFBgxobz2acekHGtwJWohiu3kKL9DxTdRGR4rCRkSV9ghwPr",
  "key32": "5X3uh8ug3C6bM4zRGV8CFXEWFanXf67J3KYKep1nYH8LBVgUEjwP9v9qn9wqQAN8qHwqzH6Jz1xK1MhvrnMKepiW",
  "key33": "wvMVUfMEgGscMsayBeLPhUHo8eHrnqqMxNd6StLjpQneXVt3tZxx1oBv37VDPKwMuignTfkFQh9LUXjuXeaepTe",
  "key34": "4xETwtphaWr4Uh5n18gpfup1XU5BDzevaJW56cHNt2ECeZwn4Nqesrv6FFgyc2npywt2C3765KCwfCRvJh7Dta5p",
  "key35": "2FDwqngYuAqHoGPnCsMruk9wHVsbet8CfUYUa6V3Gdhtx4TyKkTJsyKaAv5jQ9zR2zFWY6XUNTGM7QKnYzYNMhFk",
  "key36": "2wdA38fXB4FYA8pXR2EtCqnWREe6SWpuBAQDEkj6YkExejaiKeAQtK49xanX4ScD2dvoQGj79gU6J8MART3W4Jua",
  "key37": "2vz5kxUqHZgmaAGxk1xZRHEuLS4ZwPvSxP5qFHGDGaNMTF6xbCzLQ75PmiZUabiGcuuMJPXyWuD629VWn5mFZxDZ",
  "key38": "3L9PxmZkRV6yHpHdpYeCGScAhzsnnqsqMeqCG7EdSaSyFi7fCUYMBLrBL7m8nyKm5oQz3n8wVqDhp8FgwFtexuaK",
  "key39": "qcsG3wyrDmoWoNj5NdVsTbWsDxPZgS9ddjd1xfjibEDFPdR5wVMxrZQ15apV3u3iXFLJtEq5aYDWMQAwP2KF7oV",
  "key40": "28dL3J6cHtDyJUrh8krdra7Jvi5m8Eag5f5XPDRf5idjtVjSu7zeHrVUhE5d2jxCun3WH7AELz9S1D7nS4BcCRFu",
  "key41": "4RJGJN9Z6xxigoBN3kdf7jhK3vXJs8kgSfQuM95E7q6bbWfRXDxdc66Ck8XgvyEGev7iz58AENNtqvys57GLJCUW",
  "key42": "Dx6ATbcLGkPNft2YpVr58cLPbYWzY42EM12cwGr2odnC8iqAZNA7L4mE1bVZbbayUAXixmQHNm5mq1JUfHpQG2y"
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
