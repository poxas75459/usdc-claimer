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
    "5iXjiGtZGYJc3ViPRA1GuHMMynXSrLv7RzAjxgALbJELLrQn3zZRz6Y1S931XwnqYD2X7Ftw2QAwEgTFPuXXf3BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkFbYftUhGc5fyhYMJaMCk4eqZ75kTNZe1oLJQ1cwvsqsmhpKRJeCRvPuVPQ78f4qhcEwb7Fdu74YJWTLjyibLB",
  "key1": "4MCoR7gDcSLFQbDGisMD8PTzWuzE28CNntyiTE9o6MKoxbKDgVyfFsDFrNJSg92ponaKgf5edg5ocxSQSzRVyHxB",
  "key2": "4PzvbkQvM8W9TurAaLwoPBArBa1Rp2kYaUiXtiLXuPqSQSvSPsyaZKsynx8Fsff4xQUdUoB21YTkpfFJ5597A7eA",
  "key3": "3LRB9zD4KsE2pEXBgjdpPDtC5Uh9cXbyJHxDtq5jK5Fnh44fgHQAPJQFhoM8XjsAe5Srac1SJBj6w6M19bpXw6ei",
  "key4": "4tQE5nCJrfBqw2m8jJqL6xwtsekuJH5jdwmPYeCvsVJbH2hMZTfepYdTqJcaB5LLYuxLk74CxJaU2V7bmDTmwPoj",
  "key5": "4xvQ7h51CVibxsm7LPBKiei92845XB6MPyeMssLZUPvRGLGRqg2VoWssiqALbkDA1YcM9UMHUjHTHYnobN57dNu",
  "key6": "4wGheMYCQwR2rUVgkoaCYBfPQbkFPAxEMgS8LkxT7crC9nTng91fPSHuGAXvLj681m35x36oN4Umr8bfqdegDbsk",
  "key7": "5SJf8LRiPc5AngsVHbWM6yVHPqBcs2dKBsHxNsuLTYKjJ1wwo6JXhszrsTU6G4yxhbjNzJH4AY4uM8vRfvzBPSeU",
  "key8": "2fXH9JqXoyRXZkNJmSpnzKQ46c9fAPaPichnWRndacknVjLDYTPmJ75yFf3EMes7SjLRXGzpB2pt634oZ18bwJyB",
  "key9": "5iVcr8b7aJ8QZvhpWK8cCTcX1L8XfX8Rsc9SvcAKVDiH2b9WkQWHH2gBTscTuFPkBrsevnKzDyUjX8d88CYo6N7N",
  "key10": "4c5CWE8r2B9svDTvdMkiwGC5JcU9RvmbgnKLbadpkgd7WDq1gyC6rfq4N3QvXRqgycmYrdPEPbsVi1EYxNPsLpZc",
  "key11": "28hMgwZK5jcLYE6m2swsrUVFqB9F52V5iCsjvAaDA4aShquJeLa3bbrvqAX4JeGrEZ5JbzTgH28yvmf1cuLQRFhj",
  "key12": "3LDEN5TMbFT6wKvSxbHNenitSUQiZa3PemM6FSL27tFzLzzBnaX7Dty2Xe5QFRCvEVdxH1ZtZ1tANx7ZMKzfj65i",
  "key13": "4Pk8zS69e5yBL4VDEbaFNYULHXwij9bqiEEgmeN9EoC4skCfwdKiuWrNqE747BPzraMt5WNfTXrmC1GvLh6afh6m",
  "key14": "265Gt8Cjw6YEP5eetcw7twWGQuSXsuZRfRds19jpyMG73K3vT2jUDQGwkJNHBir3SdHUjBkL4EtEicAezB3Tmo1N",
  "key15": "2V1FCNc8564aRcc9nkbadPRB8XQHQJ2Qfv976rVCv1P97fXzAL2wacZMd1BhmGHYmTxTCBGW8bD3tMYvMK1Kocqw",
  "key16": "2anaHpqa818SaDWzjLae6jz3VfJPGvWiMFmyQqYEMmNSuBj9gmDh75kRMQHDrkUj47ftxWWasPMKc1h5wy1gUpAk",
  "key17": "4V3GMrR7QU1oSmjHkb2aaM37JWZL3JALmpn3t58BsHhB2wo58c8NAjvmFCzxy9TGLciQk9ertFAsyb4a3Cqu5Jsd",
  "key18": "4AqpnA1HXMpA7UfymgXykdxdeaTs36vyTr61cTEV7yyp1ktCjHhHkgxE8mVEtd3w4EPAULnRkhmvSzcZ7aH9RZhQ",
  "key19": "iSN2ZMU7eJ3Tah1Sig67HWC3oahZNDEd3tM2PosS1rSv1jj46xF5Ae9MVUycbpmEpSUs8zSpazz1Mex2Jqc7qeL",
  "key20": "omyQXu1maJPsrbrQrtd8GYvTUbQb2WvsG2zBm6nm9htuscVysAgnj8udoYnCsh5iymLU5WBBh2KZKL5YoMTySFH",
  "key21": "2Q8DXLYy7zPqqZaiRgjyttN6YDm33SwBfaGzvze7R1kRiiCinWeaeW6wcT4VLMnXngqzGEP5NeEEm92rTujq9hyj",
  "key22": "4XwKbbKyQyfE8QkPptGVpP2cCwR4zKJYsdxS8gbJZ4yLuC1RHBPKUeLC7aMac2eRvSKw1CsewQVDPUzKfe9ntf3M",
  "key23": "2kfjqvwWbhd4Wk83GvmVYGVMDhtuuCsuxG2Pz1VXF57vfzh8tCGeSxH1kWdRRvMzWvx2k3xPGuD6F5b9umZTFg5u",
  "key24": "4G3JdhmpCnEkV4FXNkUJYi8uGz1NACrjjLRycKhahHbxMVyCunvnFCnY1XiuXqctWFG6oCWRbmgXYfqvskFyGsV6",
  "key25": "4cYxDM6MpNF64ERyjZRA3mTHt1CbatxdfTs7ia4qBz1Z74Lhh7133MnxyMvykMrEGUmZEreLbCXP5ySwZ2aD7tCX",
  "key26": "HiGq34DLt5u2K5nVPdH3vMNCCdbuzbQWPtdEXCbzuGMJELXoFAmBnJ7qM2VZtNiqjFXTj6KMA7zXSvR5ZJ2sXr4",
  "key27": "2dYyFEh4KmS1qz8Lw5gszktbT5Smxp3aiNeabzgoNXtKHvuR41dHUx8r2miYjeG2GVEghFi5LFce9ghRPuhUWt7a",
  "key28": "4FJQNky37AspxWHfSzoXMN79Yzeaxxw75FeCkRyDiJDjvdMjTrHpVUznFTERkY5TcFS83YdQxGYei6KU9fW5p9iG",
  "key29": "3qPo7CDSgcz7s2hyVqWw4VjdSSzCZvTuDxD7vUgu9LrNy9fbKPHjx32auGpYGVudEqu1G2fhztyQpoqtwmExQEoe",
  "key30": "5EMQwFTYcpd81gVrzQmCXsMm2R2p578HSLPmPiYMRwNNLhgCxiCBb4cpf4oyL8vsvBKpChm2mqemY5brNQHspirG",
  "key31": "2ogmButbYYHQuRD8BGDz7d3n2sb42rLcXwrgpRbAH6mMShHZKa6AKpbskYEw4vLMmBXMqEd1qvKuSbtJWvvo3A5K",
  "key32": "JiN7fvAiJmSjMa9xVbKwSz8bmkuh4oRaBFi2ToTDLXzoge4xYjngEeUJN8ago8xLVymkh3v357r3vhu3xCYHSmo",
  "key33": "4NBLheyYqzaQe4gWovBXyQJaepweBBkvPVbcgyXFaTavZvYxS3XeC6LotDfGiEViTVkUK1qeqK5gEXBLbbBZQwQw",
  "key34": "2RywGZjau7qVH73JUnuTwnqERjqUqpUPfefZM6ghk5b38TVsioyHMhJvxk8VhUSYrt5HP7oPPTPzyBREv6wE7HBK",
  "key35": "ELWBWK2NppaneMxi2DFZpYPm2pE5d4E7bpm1abwbmmwv5ynWvqnYsS9B31N88SythShCWyUnWvAkXF6ax8Rpjuv",
  "key36": "4atSqroUwxht1TmVJMsxtLo5ZG2LQdhNvtZehZkk3RDh7Abh3QHaDrDKKvbf1BWDst2uKL74vFQAhZVD6n6fkvWP",
  "key37": "4SbaSovsobUruqxHSVSb5C1z9Rchmvzff9HAzsXWd8C8HtJmnptqyP4cPxX6jCkmJ3dBGSBLE1Lt91itqnLkZryJ",
  "key38": "2BXyfZF1R6886Xf8fG9zVK4CbvZrQyLpHje8jyUNEjmDgyp7oNwMWmougxxuDbx5TMD1PfLVdHduqfr879RQo3zM",
  "key39": "3qUQCTiTLuNP6gxzdCd4Q7C1Ys7e3DByzSNddbD7AcsvNrzqXYjLjCjbrJz8Z1GnbU7epwbRgNoQH3jL37A1Xikj",
  "key40": "hRAry7yh3NZuQCwdthdZ29wtD69RdWNfjnsAigFYEExSY7CEiVBMNqTkoumDUf8omoGwSxdCSbgDMXNj2ppA5T7",
  "key41": "2xzPwY38oQtZ7NMyu5nG8yNf13X8gFpKmBW5viqKnozadNSonXFKESFvi2CmZX4YrKoTcg3AHFRG7ayajKUtMuQh",
  "key42": "5RxGHTUVjU9TVt4eJwdKooHfqYpwxmc8tZUdVuMgNqdbxnk7JbqWqE4MTiL3HD4ThjRVUzJ1tnrVGozFryw6Qxpk",
  "key43": "4GZ9aEUPVbTftAxCUX5bAMFhjuFqGsRDJPfuDgQpJcm5nbLPpMKzafhJ7SU9mVR9kazuFUT1EG53Fqdw78WLb2UZ",
  "key44": "4MqhfWm6sDFLuAS5M5MhT3NESaM4HVt2VnB1sgXj91EkDioHhCiD8mhZ2AmHJwZf62X5PB4YraPcTY86zTgJCjjd",
  "key45": "22Yz3j5MCD2iwihgrpra7diDmcF3iSu41xeiJYQah55iuscMCFhQmfjUJ3HxZc8mHcVsK7Vq8jBHhwzQWnhdUrnB",
  "key46": "GvFeR1BqhbG813GXmTHjkNYCtD4LTRFzTcjoQgYczuFqkJmHgMeADrcmzy3wUhzrMWUYtZCYeprgtGTG4Xrw5gT"
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
