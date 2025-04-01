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
    "F1oQzQP7UFDMihsoyFHcUj6KntvtCsBaenXhZZ3PMUthEGqE4pJa6TjAV6n7RMJ34eHc6AKT6k5PrYPjGKbFtXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vnxi7WQDVkSRPieAYvqtmfmn7wpXyvtdociggyJxdBsVGAKT5oeS9nnCzzpRWGxFf58VaMKe6uYHQpjPy2NcHX2",
  "key1": "2Vuu8bL6vrDLL8vgkceHpguHPMN6QZTg5Q8Ne7qBezZrqGZ9xRKQzor9H34TE8rQwqBcNBkgLzXq7VjfkRioGnSk",
  "key2": "5cooqgALvuTiMoR2daBkFkLtYvdvzgJCAaTzdfzmozMYZqVWxfPyTmxtEPGFKS5BNTjV4xCSvRVzhfUfFQF3o8E5",
  "key3": "5arEbwUUvY6sxn8o5gechzZyddpaDcNvgcG3PYtREmchVhXMGAdgr8ruNWWVN2GUX2uKzPFKBFP9kN2E9gJimwp9",
  "key4": "5jtY4poVc1b9kx6nCafj3UUgSk8f4p1MM5gW9c7CvLtrC9PaTKczrT3qZudTsqPAwbWMNwrfmCpv1fQoFc9ACzn2",
  "key5": "2rJ89eucenn4vLHT9ay94RwzwtFaMWX3DNPJo1gmNrV5f38ZubqYp29K2QD2RvK9wWdHKgH1c8WbTkReJAfpHEct",
  "key6": "4muYNvpfBAXsQEGBBdybVUrNaiBojHHRCFTro64eZVwKZLQgkSA18VErpmLgezUPwQpQuGWV9ZyA8JrJUQju7mm6",
  "key7": "PHABbCYTEw4tEzbYQFxGrMxtXLPSYvsjSLZHpk4Qwa5HLqVzvxbmTcCMXfy2a22cc7CfaST1L1gaKFZVAHv6Lxp",
  "key8": "2Mog6v8grThEv937WFTvn36t1J7VXumUh2o1o1UBx8hqysbCkC5sBT48kyonAEg14peUUi4XpJ1vz4fBHj7e4pDy",
  "key9": "5iwk6YzZKnQs1hw2RLvJiUJAZ7wh9g7ieCkeL9jhzRnCiiPzW6LJZLC6Y3XPJx7KLEN9MUW1EiF8Hyp6DthpSm2a",
  "key10": "TfE3GDo25miFsS6pDrfEVbADwy1pUbMrahv7F5GU9Y5zGCGaKsy54NuUdG22g4mvzc4WFTc6vedAcF76XvRWuub",
  "key11": "3hhhChQEK5j9oL9d233dEvMzAturyGZ2RuJj777TMCyCoN1bvAvqw7fRkf4pR8wpbXvZLk89NEooTLFtpcx7zAfU",
  "key12": "yZ5xqBK22j4zyDBt79RX1ZCmy4gfEe4gG6wPWyor1Yue7TbctnEcn2MWtckjJtcgYp3mqzJ76X8yWxnsX2yF591",
  "key13": "5DQFNA4wzkfgNqd1cEhmSHp3nXLXZaDyEhrQokvJg3KkfZn33hzzaKZ3JedpZtyDkPSEK99JHrGZNdU86SwAS4nL",
  "key14": "5BTYrKGL3cMWqeNJW3DcPnVqZKpfd6XPhZ131Mja6u3V1tTaHzKshUQFpayQCdtkr5UPeawjNE2EWvcZTxUeRWYH",
  "key15": "4K3NZSmc6xoNNYHNusXpQEt3AEdA3yQKshkKxEjDmWq5iVn1S5c6n6HHdXGTSTyzeWicdWJYFqzuehjVCqi3iuFS",
  "key16": "2Yi7Gr4B72Bi43H9CZVZ7xJ84NUkZdxPMScxhbmbDg2xG1QRiCxyhU5Js3c8upL3jaoVHUrteisKXaNoaMWsNojk",
  "key17": "3SQHEwQSvtftyopdh41ATahZ8MFPF3DGWyzZa4d8m6rvdumVCmrxqEaHZw7AA4tXW4LgXf15fjsTtqLZWAjaE4M",
  "key18": "3vjxnRf96dyk2XM4anXWxpcgBTyWYb5Foks3ShDzY634hiiL7qRHSaAYrZxjinVxY2yeFHpnZqZhjBwpsDGWfAxz",
  "key19": "2EQ1yUgq991VboGYWmvgkPdi42drEtMcJHDuhcDtUyRUYqLUEHj7QNJPTmcUPcQE7bAdoT8gTBMF4Bx8pHsYndf2",
  "key20": "4iksxZm5YZsDcFYTDVYcbrbL1zE9rGLtEtBw9svmpqzDt3QpzqiUHHy2sLJmL7T4LVkhJahAZfmU1asyuAtJTFgZ",
  "key21": "4gVbmSfZ6neSC27hvsMZQYLfja95JQ6Zv9jQryDX17Q1G1p8kSvHAfEERkofNecJbmiJkgcGieW4xxrQtU7g93Gr",
  "key22": "4dD1FYRE5goqb1argtEpEFpcYu7RNC9onPWQ4L1sCfjb7go4zP3dDtXhZCiiRkcg1Xr6tbE5gPytTYiKpLV3AKp3",
  "key23": "423zaPZctjXrxcVSVNgk9tdyuNYQJ7Pe1b91qtDppptNabjukaF7ySq2vM1mQLoEHFok6d6X2XQsHDNQNbzV1ZAq",
  "key24": "BHZV7MKWCVDZJTziXQsd1K9vai5WytSLAUp6rAKg1CuaTCrvq43J1J3KBNADGQFG72natYxpskS3v55cvoyJmhu",
  "key25": "DPDGbNmWH4J7mmjHERsDQT9xoSzcTdFKesnFG6LfU23EcebTot6JHaqYpRDFhHfh1vogn1KmUsTiRrjpap2JWQ1",
  "key26": "5FELH1q5HsH4D4LoSWL8TJezPHAKXa6g3Yjsw4u4PdLewxD3WW2UTvC5NQJoaub41iKaNFzTbNt6vuHrB7LnET8P",
  "key27": "qVmFHmRF9mQSdHxVezLEPX2wmtAkAySoZtQpd74RDWvrytAfaszPqzJ9eK1DZJuyhJgh263Gk3D1oH5wumphN35",
  "key28": "3bbQV2pjNajDG3JtCdkk8PxVbfD7tPyh4kDmfQEUFtePXFVBuX5VSfu8H71kYeg4mna9e6imRjT954Fq1LHcNpNV",
  "key29": "3Gxh175iALZC956dBpEdiXvnx6QnLmsEMxQkzQA8TiqeqnLaFwiLd6uFMXjEPuk8VvaTCa7Xk1v6wgWRuzjs1qxu",
  "key30": "Dd73hjeq8jqJCACDH52ZsYu9HtGeP5G4CGXepbKRiNsq5UggutrAng7b96Psm4g1sok7JdritSH5AGkQmU9zbog",
  "key31": "5ogQsS7PXeG1HUxB9544AmJARCCRv6SzewogEojsDZoqzC9QYya8kD1BxNxhBbE9a7aHnbNCTJfUssEvm1XsNuYd",
  "key32": "4nuMJWhgA52TmRjpPM2SzqQvqFVDsJcVALZ2S9id9Zfgn9N94ZwRBDNoeh1Lq4m3sGRfNSN8bR7tXQM5GS5gartn",
  "key33": "66HVo2H6zHD4fUMNpJXZvcemt3jYYyMF8F8nidzNKr9UkgPEqmxWRtSFuwAaCeHog7knTkb34EqbkoL7yj4bjwYq",
  "key34": "3gL6YtG2F2zR6uFybSQ59su9mDMax7iFfDMZs9P2LhNXd8TRXtRaovrGMV2wYSJHVUfPFJ1wY4y3MPwVCvs1xmon",
  "key35": "4PW8Nzg8poBYsgFk1fTHDHeh8FqLk9S1hbXj8pAyjJraXQgipDpLQaRtD9Btdr8frePtdAFjkCzwsU1qq8v1ded8",
  "key36": "3dU5CkEAvD7gidydSKijTakZHzUaM8ZWg2UhLSRWAt5bGSCuzqYZhEmGaFhwmFizf389RfiBuUVXZUqx6cqzkmv6",
  "key37": "5pK9BXVqiDtgeTHbvSxsU76Sv6P9Yrj9PoN8JoLisKR3J2Q6LWeMEVncheL5RQUmHJY5n9my12fsrnLSK3N1thQv",
  "key38": "5P1ma3WGvj5isJb8hWenPtYu5ESC3GapNARBm8FuXvEKT33cpZwgiegZRoYLiAa9xM44zCEjeQi61m7Fuqp499cx",
  "key39": "nsDUDoVDnokUvyUVxdafRQ5HMnth9mR4cxnEPhg3WpmWbagcw7n4GnVq5Hjnc6J6yo5ha1v8MMYjdkGHuZP9cW5",
  "key40": "QdhvAHGESCo1MdkBkttkz2FjxJ6hZJ7SorZVmG8xoneqRDfTdnzk6tC3LaYvQwPfgTWiKRHDoYcNu79EMhsB4Cn",
  "key41": "3gum19dqi97GLatbhBuPQMvYmmt3JHDbCZxbP9Tg8dPWGmvsVm6gAJA6gv2SswoPoQnrmwDMvG3AwfnfTZJSLDVJ",
  "key42": "oV6zPMgbDcG7diQLaaAVZ8ma2i4qh2d4cAukFpN8Z9YPdy7MXj4VeFTH16MQsHs3rGKAj5RqHUzcLTQ9KMadesv",
  "key43": "3hh8yXrpFU2cCQqCr2jyBCwv5jWEgJqesdSNCBdgDfmwCX9YoS56v6uv8hiGbozoRb2YkydVtMAjtjh3bpPfe1VC",
  "key44": "3MqEtephAWTxhh4K3N43ynuLDiMjwJnBXv7xJF7qwHeVEWGycJt7uA3aCY4kW2QftTaHyxMbZpwVi6e2ErzWnt98",
  "key45": "4XU2BUnEa8GmyznjeZPPNNQm96SiqmYJDm4Qu1naUYkL7KPsZohk9E7rZrbzyzR59bJTWTevDnv92xPfb1UERHXr",
  "key46": "5QA8PxTRFEAV6XZSH8puRnv4pZuuSt1YRUYtUEQj5PY1HJciaccWt1abfpb99pnuNMECZ4SueFgoicZsBSWZ3uvX"
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
