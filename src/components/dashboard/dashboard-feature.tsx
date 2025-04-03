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
    "2FNm9qyx5jytp41vWHSk8gKMyxsYmgkDf6z1sPVgjDJRsu9nBkxw52BhJNyP4V2rooFgKwgLqsks7kLt9AUA2Jx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eh4E2mL3YehLbDWhHsNnV5kzVQriTv1dWpFy75QQdrxxdhd37ckUMtgyn3yrKCZ7jzhmMHE5i4NrN1WiQ32Xy2o",
  "key1": "3K5fLKGQZEUgL9km9p15iEpJsXj7VxAB9RKDyZXHgseYLU1Fh2Q93wcqRVtiHTTmSYMrKkAVQBewtR6ujvcFECDk",
  "key2": "6547vj9sc82BkkeoZ2sQYQbV19yWeAK2tueYDxJAB87i8G8h1xGdTt3adFstrPg6SmeyuxGfYaPUnhzTd8g1HTWT",
  "key3": "WtvMoDQcVEDSWMYuZcHgg8BXYUNvDJmGgTne6j1fLgZHVMiYbLHQvddGEfVxddsbS99MPx4o8mKSq9Yrf7XV838",
  "key4": "4dzwk3x4v55vmMKMN7PqoG9JaCrJU1xc3KDJ2EGkDWG1vPcpymHgrtBv1KerSS7Q9drSk9x4SqSm1xe3L22YQ6pU",
  "key5": "67pcgjYLBtjxWUoZBrV3ChHUmNRWBsuXgQXckG2VXqLUMQyjbWky1QHAbJogGymXTeT64tFJ3wMkjbP3gLREhbVT",
  "key6": "zTiwQBmMnHijUHQZ9qLXfYVA53BJ4fE2AUAE6TiEk2JqbnSgigznuKPnBgo9BBjsbdNwHbA6k8KzfWPECAu932f",
  "key7": "5nDDD7ogzbxkTcNL7swjm113tonWugAC7KdTyXTuZbJFPBWn8LH9VJYXLMhxgQrrK9bSDtK89sj6kwFUUcN7pK4D",
  "key8": "4rK8S8kz7ufmKKkJ4JJrtCGXuyRsmrve4s44QBMmprp1dPxnZqwdXjA35FoEp6tcVMvFE16z3WRrrgLNd1LrNm2t",
  "key9": "3VVaXHvKRkPE9xFrdc3BikqVHSafuTYLwevYZEWFuzYFUMoEYNKMHGZ4rro5CZYwBCJHduBFUUGgC57z2s2fbaZw",
  "key10": "4szH5jstw1Kw4JyT2XeCvgWnW2XMi2jnH1fVsHbcCmtawVPVwdgaRWz1Y1qaSQrVhWcBGiELodRTd2WexacLoZV2",
  "key11": "3EpmvZEQ2nKdpYcms1BtqFpVqzVRJtsc39MiMV3chbYC3548ZcLxppZ3g8mM3gmupEkid4mH3dDTNnysnDkQBQvc",
  "key12": "5nKLMvjxgNEPCCn3myHTvSQCCrJ58g5padXaKf6EHRpthF1NW3mqTCtTnW262EeePFPic9vwMeAWFDDEtfkpACR3",
  "key13": "5KmrYncwz5NNawEzusSkefV49PHyk7JPJ8X8uSde8gurTgQFf3xP8oS4emWisTbD7631QKzitG6L46Z4QoEtpzDc",
  "key14": "hkJXzkqnRBKaMZ4GHqm9pPb9dg4oaXySooevN8FFfQ4JW2pJ5JnBcNZJ8SHL3EN28JGb7hAou94kFezhWehKJY1",
  "key15": "3iMrTPB4eJK8GfB69j3c1MCYsgijKq4VRJ1CtHra7Z9XYhAcr7aZ7UHbgZrxBWSGULATT1ah6DC1WVqCKzLyXtoW",
  "key16": "3pC1KM9Z2DE9mWrH53ixKhL4bHwoWTtCLsFWMkyqyXXc4qV3xNskPGXX52cmnqU7ai8Yb6tSVSg4qXNRWFTYzE5F",
  "key17": "3LQpqKs2mv8RAHaaLG3KG6QWA7x8WYg2QjgeJ4AjiR39wTHLR73mUCeRieTjaJJBWpJkvcb9Btj3Ti6L7TxFcm7a",
  "key18": "67CP4HHPZPqgZrKw3xPJYXSZkTHKw6jRxTgik2EtXKiRMJwENxqCNeeWb1rSX5ERkNuNomyQbFRxJK9y5i7JeV2q",
  "key19": "3sNHHC6cjrqjjZxgsNsM4nhKkLEcAvWLGK6SdUVjz663kfmzYg4D5GiuvPEfQYb5JnPSXvxqwXoDjGmaYU91W3iA",
  "key20": "4N1mXpX2Pssi2Kt3UjCPE2doFKFgYx5CgHNNppyGe8eAwBgoC8wzbDzPCMRc1XSuAAAKy7EP6wauvD6ZP1bBq7Fe",
  "key21": "4amx1H1TfX2X5Q2Coroyxy1nDhsVpPcRtK5MX1rzGbghw31oDMhc4RQsKfTKa3mRQBCY1GeSY3r8TkkuYcDga8p5",
  "key22": "5TGDT7M4T9Tc2RzAKcVXCLVyoezTnFyhKnPkLdZvjdu9Smdao9VAbBAhNWnZXT17LTDBerDnebMpH21KhVEXa99x",
  "key23": "5XVDzyi8jvYdpQ8NrDjYYuubNPnjzZsLn3uLjGtnZHb4gDs85Tib1r2NzmjcYVbWkk9s5jb4TXF6V4k4BFVoJsjY",
  "key24": "3JVkzZinai7NjD2c6eFh7Z1sSkHU2kt9zSB5S2GcbySVzwCoKAFBL6LmfJhFMPmms81xw7HQMaK197va93Te6YmT",
  "key25": "5ZZBSmstr5uB3ypaL9MqZP1mDJ8eu3sj4A9zjTir6uVgyHwRxZkoTSMJP1X6nXMK95KZCWM6F3fePbBhwdb2Zk2K",
  "key26": "36FQ1JwHohaccuYyZ173JQseWrez6S7M4fXZmaJamX7a2rW7WVCoBdGqAE2vx4rqMwLag32E7QyvaQrD8Z3WTHQ",
  "key27": "3JjnwdUfsgBYB2pAjFsuD56aJ58Huht39knbJ9bCRNCtZr8RM4B4AtWe8gc34nPxbX25ZafJH4nXtoie2J6Au8Zf",
  "key28": "SmUrUJZgytWTBrK3ctxc65aSqQ9XTpBujis1LyKb5mQyEcsYyCbNUj6yVv1aPXQHBKrMbiG2NgNp57Ny29vppHs",
  "key29": "4zJu4TKRhGR3E6UmwbVPGEgu5g3oRidpefZtES5yNq7vCfHQW4Hag3LCDyhBK4k1TmBu7Djvck5Lvxeyv4CpbP1i",
  "key30": "36ESsuMVEQGuFe6RDTYK1PBeVY9fJft3wQRab44HXksqZ8JDns487W4qAqj15VsqkmVXEoiWHZzwk1E8RYz1Tawb",
  "key31": "ZeWhpMH7wGxoir1VcVrUi48EDUwTe8StRz7DDmj6Wm3iy1khnSdgVs9mRxvRWugMKyFKpJ3nz6KkcUxFducSpEZ",
  "key32": "5pQzcPXZYVNFT84vVYbnFxqhErfy8jx4EFxDw3Pr5sFrA13CMzo9mqSwch7WUbbbNJyvpptTG2kyDm9L3KJ3TVeY",
  "key33": "3CETpZf8kxbn6seobgbEeHYjKSNa2JZAMYFS6NsUVxMrXWPKHM9V3WPRwL6BaPPBeMMuGaYSjqeTQ1P9axShn8K8",
  "key34": "5eTcapdBuVLGaPEch1yaXQENZpxZsPUGje2JmBFyeMs8dDMFgtizJcneKpwuCdDQ37mjBJrCkvgKPFfM1LyF8FGS",
  "key35": "4s5W3gkc2dgYY3BJ9svQdoXVHRE5RSnaj5S8quLbVSZRCQ1uSGBHz3bw1Nn9R7Jvchq64W2K2ND7b1P68jEexzvD"
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
