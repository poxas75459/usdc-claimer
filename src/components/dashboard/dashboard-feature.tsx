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
    "4YSJpcn8M1LNzefCg4ghcvc9QNNnm9EGa44RecMCKmDkker8dYEZzHxsxsLhL68tsvscBfbLoZDjybA9umPgya94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62yHaAazv1T4BxurLFDiUEfSE8c48YtQo5fpUhVDG62BPjVTV2VJVDXU4bmyz2ZGszFKa9idRjamEbRMCqmNB8KU",
  "key1": "CAd81QiHi4vBpKq8Tf5kNrWZWh1B6AR815T2aysgzNyJrC7otdFDuLsS7kGW1hEoWT4bBBPJ4C567wmvFNSwZbe",
  "key2": "5vo12gxXU27drFeVRiNSbveBH7g27YcsyGafGSjpmp2xnSLJqSpEQMZQGWyFR55nBtS7ReQnTomhbMd2trzbMNnh",
  "key3": "RVBxYLAzDpNm6zi4HvuqwR1gKdUcdVW1jkgvkqC4unD31hHap3JfmikfjUuv2ikNQGecJ7cik4WKnGMcUCtwPrU",
  "key4": "2xSYY1i1eJRi7zhtcsSJKaoZe3Jn6UmjoaJM6QEbMK6CxVgV5vz3q1HZB1G122NP1CXsS2Hh4Hh84yd5zKKXdgyr",
  "key5": "5e1tKA4KHWbikWcbZgMDinMVrrE9sc47PrV4CuJXifEkoqVBEWYSYYLiM3VZJKFkBCjvMG2dFAqz7QTfjaWGsKkL",
  "key6": "2VLCjfJdKatTi5cQjtQMCFvbL2V5r4ti3Wqca1QfJ8fzn7mmS7zF7EjFomYzPnZu8p5naKobLBXNAunvHzvMBmDT",
  "key7": "649AVjegEcdPby3SKjZ1mL51sb49dui7Vh1Rm19fSAmPKzp82y9Yj2fCCZ3YH9Wzwjf9ZjhLgrNxszqJtunnF9ee",
  "key8": "62Y4QNYqQMpxg6v9XPs9Xs9fYxpMH9R9FFSCzpyZru6qMzyV3wyKamZ4M1WgM23XTsEBrEfSnwiwd67vcYYcy7TL",
  "key9": "4WdUJGWgezM7piy8Eo8MFrG3rsHPALr1s1Ck5d5PDzUCNUPqx7BU3zgrkHw8wuZLX4kPKq2k3pwKc4ggJvqR3QHy",
  "key10": "4tGe7eqUTX3EQSreuEzMphLK6aP1aA5nfU7dHJw3DCbwqPfskp7QeEwv8pyRtBNNYzhEkdVQiVw2AY9kd9zd1auH",
  "key11": "kopJ7czcHPevgR6uvon9mWjk7X1ZJE4WyKJBhGMzQf8Qtdt8XTA1XTs1ryw34NcDbYqBuddzMXAkYswrD9vew5a",
  "key12": "4CoMgcA3EXq6hjT6u8eXRemzmN5Sa2rqX98cesbZUT6MKDB9HSDeQr6FGcg1cV6FrJYd5fjJv63z4rMPTtBahmhb",
  "key13": "JLYckG9naJTKQmiYWQSnHeFfLbTF3wrmcpToXZdnhMedJRUv1Ey4Jw3dKnrKLuKznAcbEteSib7ZVC2rRmEdQk6",
  "key14": "2UWWVQcRHd7jvxXsteULWF2bLBdCLt4dsfJ7bm1CpmyPv9JmB56s1LT1s78YJc2NwsdrdFjJsUay2G2FauWf6TPr",
  "key15": "4VoRJoexS3Sk1Q5DPCbNuAShR8iH8B1czht9VrvjkgMG1ToRLVgziegE3ZbHb1hncZVwdi2L4p7VDMvAeKt3kTrC",
  "key16": "548ywx5XWjHJ2EXzTM1BVbxpcnzriXVcb97enYtjB2WqXxSdDiCdCSmQVxB724XZBcG9D29jfmuLYbJxSFVv8Rra",
  "key17": "67CrZKTDAfVN7EhDs94K2KSj2pHgM1W4zXY8QULQs4ocNfPbP7M4okJvBnc1RoEm67U5P6VLk1YyBcssRzApwwK6",
  "key18": "CpybLhWaonBQdbS8ivSDMN86C1xpeU6QXKh6UjrUbn3t2icKFvW4cgRajFtVEKa2MoURUvUjnK9M95rGA7YWBKG",
  "key19": "5J6Ek1MJY8ar4zrvRGMo2CGD8kcxu4CZKrJRcS6Uvcum8H2NzF97ipohcY5waZo4bFU3hDZEPvqeWy3HDLWh6928",
  "key20": "N1Mt7QgREEpeH6cm7etHWm449dGPjNyAeoaFAQKranASMYEExZTGVWudQEA4LMajd2CrDTRj9ANKBCWfD8VGTQr",
  "key21": "2jxtYBdqswCCtnLSd53pqc7ctG38FdNAscCZN4UETPaK94LbdKz4Er5VUn3r81F9fH3iKy7P5ynCR7SvgrVMWvJh",
  "key22": "2cjAifzYA9YGcDa8jmoMGYXZjh3FHKsKLmZKExyaeEfrpfHE9mG8xtccjttRRQ1o46gxW2bF1vVTdsRtzjjkEb1m",
  "key23": "5Qb9iBBaznyaCDom56QZqM6ZsMyMM66XhbKQfa85WwNEASzFy67zt8r8KszkL9nnGCuYFSfj3UNovZKm2fNuMbSF",
  "key24": "3M6rS2ThsEBDpCcVvcXg9qsTdXE1PjHy94JRfr78yv8etJvm4Gxz4YbgFytrGrSTcfCKUVcC4qaHHq2cKHpLFMDZ",
  "key25": "38vXqfvV5w27ng52uYunKDK4E4FrSzEYHGYLjQHCP5s3FpVASt2g6yRCH3EzknZuPWzpztBhwA9ThvpXzQjdJoKw",
  "key26": "5ytzBzSEM9kxLtfYskH5UvftvhztA5EmKxuvT5D46hthTH8thrX354DaqmSFKsYvQ27SRrfA1nEuW2yA74eZgXEh",
  "key27": "5ffegQMMAqYwFueCmFy8LBcpEhHxXf4zoGEjQDQBDVBkv3RD99szQAjApJM99TvW3jJ3kxRqDEmiP2NoFEvo2QoU",
  "key28": "3QGz27c6To4d19igUBEyYwC4AgQ7g7NzHYkL8x5DecV9wqQEhrgqVj9mLQj1A5Tu48KA557nQgm1neVWjrk2Y1BL",
  "key29": "37P44UnGHbMfSQmTjqdMppwJTK4ANdK9tokVweoNRHcwFs6WPo9bFKitGaocRa8nvWRcvVHDFDRjQgtmtQYdSe2f",
  "key30": "KYc1gSxyMUWtbRMRvnVkRoAwGCF1gaq3kVtXEwtMCfsa9gWSjXFtpTy4nULKDxXgqbxgWZHccfqhZWYqV5PJ77i",
  "key31": "QFdwogyFv6dXJPxVyjstPmCYydk7P763p6fj2RcY2MnBiKmk14vdXrcWCS8qb2BWdV3PsnKAaf6vgAGYaYB7Ee5",
  "key32": "wTrg1zqYED4ReJUSq6ktzWn189V9bW4gDy66Gho5o9SJLjbXkPrJNujFbFixDYiBtLq3MkF9Cxk7jZkn7V9Yue1"
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
