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
    "5J4LpKnX8jZXib4WhX5qhKYzrNnSWEsufUxs4bJ1E4jd7f395vez7jb4NdCqDWT89GbpFUPTZCpemvxnEdXDL7iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaawjCQRLuja9mhckapnnuD456cFgu29Acw1fhpaMm7pbps4Niz5Cbca7YZhPPTG6YN1813UViVQ4CVaT7UVCnV",
  "key1": "3VF1MWnaRdfxwYcyRhintnvh2nQtNgb7uzyKQUZ6Ny9yzUw1LQg9aF9DDbqLgNroADiWtr9AhZ7Z4H1d8ZyA3p2N",
  "key2": "5vbfzGs7XnVSC3rSRYsJhri9TPCzXroNpKWQ8HgMTDMKQoWsZDoERuUTiuMp8dS9p1pGadFzLMzsbLQJc1RYKXv3",
  "key3": "57DExPPPdAy6iU7BkpxzKaqXrEdpBFqtkQfGpCtjMT7Sskh1pwP1beFXi2hwZ5xFZ7qG8DDWWvddTwgC21ob8Kpi",
  "key4": "kbWzjM7pUW3m1fUFVPSQV7W82V1Zy4n1ETx6RKEWC3DDJQPriTB4wyZHn7iuZqjnTkB74jWyoyho7Ter7RvqtgD",
  "key5": "4imJ9YsuJ6C7KecLkKr2o77LfYjUvNsgyu8hcG7d2uQ78EZ42nZZNARkBvwPiVcgee8vkJck9SLiBdNrvdtR7EW3",
  "key6": "2PQTynPX47gYnELWAWjQxSN6irGHoSXoSqqV37J2QKqrAxJ9X5RecQXC2trpnjwdPX8xCRQp1mKyVzc1Xo7mEZaZ",
  "key7": "51WQWkViC2bfe8koERVcLWGqvg3DCg4cNJi2cuEtZFQVmq4y5eKnRGPimrnsAXhe4nHwiGGPEKsqyQ3BhMtV2cR4",
  "key8": "4ygwsR3FvWgsAAqnmAVyfiw4nsNZtHyptzWz9brvntRHrDWRFZNwkwYWnB5Wfvj6juwup7w4Mk3rBVSigDpVHDZB",
  "key9": "4T1nRPyecnVN2tvMbc8rfYAYzMjY6xwhLBhNbujscMtKrwm37kqBFZ5KVTVLWPiXgzR9pKNniP7DWB6V75AgeVT8",
  "key10": "4p5DUsG3Y8f8z6SoHKZE19ZF3aG453wnq8CgqXA5j9d8XTTK8HhFBby7Jx3wX9h4eMt89p2SRhW31ao53kuTzpy8",
  "key11": "5vnhWPamJemhWxc5WvUXrRYze4bLSDExVmXBi3nzUh1cb26mNzEJcFZbkHPbZEKZx74z1ickAPhHUsDVVPhKZDog",
  "key12": "2QWAdETiF6W245JQmzJwtJhCVV7kY2yPM251jxgMjBseG8MDWGg6MKMAww7riLoF5ZtJpm6DhBDtBP5FSVM71zte",
  "key13": "4dsbLrRGC8jU8dayqR4TbcCNJ5dmcnR9HQUGbZxZ4oVC7kuL7uuvYfq4c5BsLDWCVCoZ9QyeBbZi9tZFy696szmo",
  "key14": "4vQh82f4RG2ZSgjU6yuCKehxSbkNJSU7dxotMVjRV6YSX8juapaHq2mSFmVFWmvTeUh8AYNNPo3de8DBVCgjR4vj",
  "key15": "LnejGErua1riFihpvdnYVYFw38bLdCzvi3yoqhXLncR6z4weX643SswZ2gmwxiSTN2dGLCS6vD8omiYPd5m9uw2",
  "key16": "5BLP6X2yTpmLD3CJ7xDHsMk2TPXnB3KqcvTAfvZPDUMS4C9U3hEtvxo4thJBb7rPnEPnj2XdHicHcD35mPUDFy88",
  "key17": "5vNggaQXUSRQdwHFowmo23xzJeBjhE2bzCAzYwxmcJ6mGrzEhEy1mawREyK11TvG4R4Nn4z5v2i5u1BPjHHbQaTV",
  "key18": "4rkkWS6U455T4pgLihBXHAG9cwFxq6vp3cgL9Pj4q7iJNFycKPEorXo85dBi3naHyyPwGNj5Kfgb76Xz1uMdxfQE",
  "key19": "3spw7ef3d2iyevLhFqXEV8Z9EEqg8AcxxMUQtHJpYwaDXn9RqjfnpmBZBAbr3RpqBe3kM4UHqUtiLE8eMfKki9aM",
  "key20": "5tCLhsixKuSPyd4L6eSSLhN6U95vR5JzZ5h9GAuia3TYPoiA6FJArTNBjUReX3ttWuYRjSKnLd1xpPDFhPUinDY8",
  "key21": "3p4q9fdEpLnj6XYVizdmZ1x93263bcvSzByBXX3pxZAPXj5mdVB7pU2m3QSEUrXBTWzmeRwrmgDCjXGpn8hyigF5",
  "key22": "yKAPEAAYMrtKWqYgi6PmLiRrw1Vxuo2Es4rk1Vy38sDGxBYAdkbewzPu8oZ983WoU5eZg8WrpmBxuDyFH5tybuA",
  "key23": "5vqAFdWifropf3SAWMY7BePxJ8XMEJWwML9RDTzfMnrvAtSDBNQSxF2sPiLHhDgLygMqHXniqqQ3FsrUArhaq7k6",
  "key24": "5gow2TKaoisbypRgC5A2Dz3dsDwm7z7hPf2arYVcCG9TYCcF6ibpK6SYphsxrf4Yjp9KJyH9tadQufD58bY8zdzy",
  "key25": "5aQ67wyzagZfjEodSv6ktafRwQuzdT2wTmwS3va6fvKmVcfXL8HzsC3AiqcGC5kKtTed3Uad5YrE46C7U9qoekXT",
  "key26": "MZTQF1Pn3ByZTEb1Hx8DaAKoxMsCfagKAz2NbdzLyvuCNentF6V53ddY1UnskwQ7agyW215eiQVdUVgHUAExJxq",
  "key27": "FyJNnbe1sGLpKPWQWf9ATvDNc9okLiEAwJWGjjYUDHZdFh3L2oHzi9H8JUzQmK2ZBoBjWTEiFbXraJd9Gv3nv6x",
  "key28": "643N2mwrjSw58LFFGhQuwcpEkRyY94vGxSnNbgnE6od6ZxZA8AGUoAKmG5SYLhr6cHMBLStUeWC44sUqcUVtzH9n",
  "key29": "2Pxc7LUAk7oosSi3mhH46nagfcmVeuU9TEqzGBC6msKRigJNsQmnQB3JyqR8h9Fc5GDfYgu6V1HPN719vRYhnAaJ",
  "key30": "6195mCmB4f8QQT6oqAcGtMNcRbq8eSw14mJftTjTUKXW17afqD4CUmPEvzqxhEj5dcefE7MT6AiH9rKgS388VvfB",
  "key31": "4e8FM8s5QA5tGmzjVYMN548daqEPvPfTakwzcsBTzoYC3rhQiZE2KvX5iL9YCMHjbdbBLd82oLm4Y5hYShYsyC4G",
  "key32": "2UB8qqejEVNgKtKVzcLa6KB4Eui1cVVZ97rQ5GSutn7epx5xbwDYUFhJXrLAu23dUeBzZ4687wm27ZiQ3aBH2gpY",
  "key33": "4NUQuYbZY54RQzPcsJNUc8BXqxTSDrUcZF2qPALufH2LSj4bu1FkDaimswrJrSx2LpdMb8LeaW2YkuRDBaxqbcua",
  "key34": "4bG66Cb4wjx2GK36TKiCc2eHQktEr3ML3qLFrezjum1i4L7MQx1KfjMDN2F56dNbURNjUs9DLER9AJ4hwcW5uWiH",
  "key35": "5WRsAc83jGSVsDjsHY1WKSj4RDh93epGnPiTmNin1KhFDJNZh457jBbU5HB1wKnMaXdteBY2AicJm96dUJBqTFwu",
  "key36": "4ZxpDjF6J9Yf2j5ForbGvJjoj2BkipqcZ7n5JYQdGR8RqWiuynfruu8rXBNfq8b8Z3J2BhBTeAYXA3CUZr2muCQ1",
  "key37": "gaXBY5S348EeCDyMiS2JqVTidjeh2eCKsdMsZzbH3BdSVXy2QuQNpr1Ststk5LgnfbdHpY3214rYacDa4tPfnNW",
  "key38": "2UG5masrVbDQ6XxyyYhTdwnCvhvw9kk6gWyGevVKKDXkJgTwAwCS3Pi55Yw8TKA5msyJjpkoRhCprZR2YnEFAECD",
  "key39": "3HmtauqMYdJGkfu3BwXfpgQZt3JYbuo2T5DVkmaW5gQunggseL2TVVHz1bTz3Dyt1HWmTJyPHKvxzzBeF6DbnZ4K"
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
