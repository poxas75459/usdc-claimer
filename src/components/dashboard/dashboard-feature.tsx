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
    "38zqMjHbPVftPEjSZNPj7p5BPCuQY1p29R35jyJ8uNweyzfU5mYxUu7m7q2jJZ4dqHM8uGyXdDt7SUNK1DDE9jva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEQoyDZkBo5KJjetoKWj8HAGtrEGrCNaFm8JQpKQspiiPcSohWTrHe9wRKtiPUG8jcJ35D7VzgKSkM2mSky1bEs",
  "key1": "4VPcG3MgfarjWpob6mA6nPsxUQ6322PGUUqyrQPLDnRevK9zY1n2StfCa9YjUQT6ohVr9GwPQrKduhV2BP7CQAGp",
  "key2": "3SU7xhiaVexMJ4iux4UxfSjsxEiwDga8tKJNDggPkMJtQFpRNXDx45qgRKUMgTcS5p6uQXtt3F8w7kNevgDaG68N",
  "key3": "kByKbJwkUX6ykz9sgNQE1ZEDKvNjsmM2kXhPedpDjWJuTv29mm3ZDwtGuLsoUYBcoHYFJupNJS7ttXhwUtnWmwu",
  "key4": "2eH3bC3Q76t4Rr5XcwTJwm1mzm9WWyS3E5aVTi5K6CcrJSojSLL5NpVWraxTV5SZUcZUb5U5DkGBLyEzbFEehTEZ",
  "key5": "2qb1VQyEoUmPxCpQFbMLSXy4v9npo7zbLf9DthWjgPMGcshe5Pwdz3fz7WQTf4J416zBKSb2iDoGP55JwxCuF8HF",
  "key6": "562Z197DwUBJAdnBwoRag7LXGR5audZ3oYmDiC8ZHPETRCvKXxcpHdWwFAASd7SseCvpwpAVgWG7EMkSR2pzLxYj",
  "key7": "3foUc28LhixQQ2Unub79BaiyWCLwPa7zxUKkChq69wZzxEtpCgnYAHfJuNqx9MHT8qvSyJsrjVS6Yi7k6pkhStFm",
  "key8": "5qFQdSshuuw4a8syN2n4HSUTDs8dPic1AChpqh92UKMmDwCdWUWkM5m5WVyZa1pgzAFBEeh2T8Gvkw5ge7ru1hnm",
  "key9": "jZqGLp9bLfXkFqnnjyUGJVuPrMuJT77dJJjbSbTbb3TeYkyk5kp58yaR6rEsjG95BhVz9hYCqRJFPs6ALNd6ZoR",
  "key10": "5G56Wxdure31Axn7e7gdUkXXYFXTH2fjv7ttZ1o6HAHWj5raANEvQx1ESY22qm6WEqhNUwwExiKSU3wjmCiS2T3y",
  "key11": "4C75DnTNn8YM4eJgEWFum6XTDQiG2vsLg88jBsnpzrQSHMxFx77PMCsws8rDU3vDyGrdgr4Wz3LHGLaoyTJfPTYy",
  "key12": "2NCSKgzrSE5yXfj1mjdGjrweVoPqhYof6T8HizT1cxfr9VVbdxoYmLBvYiexmrTMzcAwxKps29aS1ju9FAERwjFi",
  "key13": "3pFfEEJMVW5kcxCK8CNUVsQm642hVbEgrtz2eeXn6xj5WwR1jJyMGkPvw53bx8759XLe6YRFFMd35eAgU79y89p2",
  "key14": "Dnp1HR8AFiyRiMEfo83m5bnSfRqmoGV82A2ktAAXP5QosedmaFLed5kWBwgD9r2L6nhEnB1Dt8f5pN77W5J4ZqJ",
  "key15": "3JkcR2unJDBT9viGcFLj2euqEJnWdqv7KBvD2z1B3YUJVpuj55aRTNz3M1dyHJV4UrdMrdaHz2h4SMVUFstkmYDx",
  "key16": "G898m2PVv4mKjPM2dhoZ1r5ng8af3CQWZZ986NWmUfYTzAYYgistspo8oYA7MNrr4kwLjJ5jX2RUzmgV3ihLv8n",
  "key17": "4biEQVKecvXqTyzxg3UNQKBPM2EXL2JWDmsC3doVq3Lfv938PDTJHsN59TBgfZYLZwxikZxEhPsTQBAU6DMEEN86",
  "key18": "2DqHL85V3KxwMaLB3w4u9VBStjkWMkG89H1JLQWWPRgHPS5yrViu1htrxiwBAUchXPS6Gm9ti3WsTgpeAUZ8nmte",
  "key19": "fEBUwJMrNPfYvaqvUfBTnH46Kx9miVfnCy3SbtHFkSX1KEDC4xH19rixYQmcDzFPFoe6YuQVGUbkgQDy9VTHe6h",
  "key20": "gFQkSJxupywj34Bvggo212BoAksXjvbb7FYZocraAymJNkC99jbNifABmB9bXK8EofCCmEJGxsMUhR2DK2Xpjbx",
  "key21": "4zTjENcDWQysepWFFN1o3BJXRZrm3iwXV2kDF62hYuAc35L4XNNBsZGzG6QERsoMYZAggQU7cdfmY5ssdTZYu5zM",
  "key22": "4MPXFevsEjQ6JJpJfY6qtCNSCEfGDyXH5AgQsVThwzyVtAMnBrgS6YDvmfgLHEgvyfcSjfRGXKZuKFiu1oiF4WjL",
  "key23": "7XRn4hrgVXQLigcSiZC9hVPnvZ2QM1CmJtyaraqdizGEpNkkBUsSp4TJu4Scqr7kLSotWYyqek6nGVUB5H5nhix",
  "key24": "rEtdJDNLQnFC1GPUJfZ87coPTRUabQGKnbKWV7xx98kB6ep7KfM2DrCGBz45nRqEiS8ttNvV8X4zqB6tDbTeyCQ",
  "key25": "43KsjETQfW6Syhf2ZWLCpqWMCurt2RbPNBQV7AsguGowRCGCWpECrPjwvvaxP5QjQet656ih636McU5ye2fTGYw1",
  "key26": "PEUNqnyuvBSPUcezfGwBCncpB1sBuDgBh2F6WNeLKVoX14kL5oZjf5BtWXhNboEa6Hj1LVUdtHSEKRPBYcVWgW8",
  "key27": "3cpBvgkGbu3ohcebfLNE6HNXYjWgUQaKKJD4YH786RriDrFSd4rffdLh2MxYCp4PbuNAmdPAzwUm4gGciKzq8Hc7",
  "key28": "452nhEgsba8uqReC1gqPcFgUPkvxARoKNmrofAr3LSkwVUzxC3gUU5Tt9MDAicHFp5vKSHPUtQtV62m1JzKcZUZV",
  "key29": "2XGJXG5ro54ENXjrNFWA2VW7akcJRe5PtkPrJYJuyeXyqyrikabC9ma4v19gPKjT84QNhjDkK8dacSozxBerjR8G",
  "key30": "mUDUBjsuV8BeYcjgNSeUp3CFEeCeRvEKNXyN6PqWLXNHsiAasbzYaKdWHdu26jYBx5R5v4idHf6ejyw3RqPhhEC",
  "key31": "5DP3mpTDtKxneHKHgexErtTt6vS8mCykSMfnAHRLbzthnYPPUHoGcH1qMkZzzcWiEqcp2R9kQhbabv5kiYXiGjPX",
  "key32": "4HG45J31aqZghPLUKdWdRzDZKNY4eLF2v5ZGPgbhmpwuL3iim6nkqjA2xHMobvVfXBLjCnU6S2XUVPRv977JX7X"
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
