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
    "5FUTYpyDhtz5eMMFNsiz4NCF18A8ghGM9eRNQjJaRZfnr1bS5Q7x3TPdgwnuG6vRU5TdjgYs4PwtcgrBvPW3NstU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyEbeGZkMGLiXRrEChEYRTDfxLuhQrwmyf6QFGegnGKAr2nFEpgYKiWGA5vp3FtumoxoDVeBykdmAqieYs5U49",
  "key1": "8KMxnc9bWgRtfALbUwpHgCuiUd1drLpWJhGrGHxiDjpCvc2GKuSrwMeQh6Xbj3QkgJ2xiPZYAeFWdWep4tp1hwp",
  "key2": "59pvePLeM4Hz5wG8fmk8qdCYNhb3uaxBSpTPUNvhEupunymGhgUCtguqFC8fFuaKM85f5KG88gC4WypZZW1N5G6q",
  "key3": "4ErLBEsGMs2ty3C3N2W2qx8hnLqwv6UCFL5R7nPnWSsYn9v9iFVs2PcxRyzEjduLaGTyWpyeNNeDmVQ4JZ323A2B",
  "key4": "476buGxGDCL61QLYwmzkycCEbhrWcid5EkhUipGX5639Gx5Afs9t6LfcGAG59baKvvcm6o5Y1qKMASU865vvjVy9",
  "key5": "2WscYTb4Nwh2pjJ9GWFZKJNiS7uSQLPP6A3iQ9VBFcdnKfm58KDaUu8BtAXsdwAmfUC3Mdk1MXDYbSXEz5rsC3gj",
  "key6": "yYXd7xxQUbbJkk4EV4kAejBUWCpqZuqRR9igi3y3fpTsxTijhHjCidGftbtjCbygS3317dUKby1TDZjJscK2JCd",
  "key7": "2y1STYWFnZDUj1MtjGRxxFjZp3t7wXjzNADf21Fuf5ALWhYxe5pjznSLnvar7ju7e6VpxNWjMALNcnWHT374n273",
  "key8": "2KDVRSfjCf2PYt8R2rQv3nrqsVp1YbjRV32cVktv2cwjRpvxz4y218Qw8LLDcxV321X3w47QjNsZgPvror7kXfgd",
  "key9": "5Cb5Q1ky17TZL18u1QHweqBCUPtGjaBtmNXwUMEeeEPYiG86c1MrYiT8r29w438LNGf27tPWocySRpq8hGt5bwGV",
  "key10": "3RzuuJu829dGdxW3GyCBf9ZgCyNBiu3XqAex346SiCZd5VKEWBowHDNUwVJDo56d9NSs6EcNBNeowDb35tpVrSLD",
  "key11": "2thfE2zz9YnT8VzVfoFr3GqSHWzd8KnBpzQ6Frkap6fn1Bn5LLS9Zp7PacANDXHMgdyQSHBhJZ5uWZxypdAhG1Ne",
  "key12": "LxQJMjieDbu4ANMfra9esym4RNpsFqrYF9WM8TZn4cfemPpDriZBZJbecbY8kRbQ8NB9zn5snDzo21QM5bwA7Xo",
  "key13": "4dYi1HQ5ZF4PKtZbnXH4nRuw9G98tqENDaNbaukCBHdRq4TRi3QQeu26xDAKe8UvFhRJdo7y5shHPvLxz24wKZRG",
  "key14": "2cs9HYv9TYG2iN73P9HPgkrUd2kgbELntXSvKwDSdponTdTwKZyfMWUroNVLifQkn3Y1iCh6vo3HBBZAakEJUtDf",
  "key15": "3opkm8WWNxSxSWVPnW4UuPXNgJx9nqKU9TrZowkwsCiuYynQ1Cj64yYBUbm6eyFDSXufbtu6CLfeSpoAqMJJXZaq",
  "key16": "54AAAFAmFj9ikD8WAydxZoK4U2WeGHGypMvEv1NntRztf7GTms3bGQ4aaaY7d2TZqty33vLgVGs3DyUkamzGB5PT",
  "key17": "rXEuZRgawGgEAYYdZrye2RUEk27NvrUYdeYfGMx3NBtb5AF17y8T6yfSB6w5aH6LfbKgfjUceDvTUbtVTx9WXnA",
  "key18": "4aDF8iLk99UKWk9x37jMBMs2JVcKej1Mkq1hwE4ksCGYERb5vBgDJt1rLbZf7tYoD3CBE2tN3LhA477MoEQn9mCP",
  "key19": "4wvAjrCpFM4CnxAoPX2Y1KGWZzKvAAEDDHi3Lp2anRgn2as4zvrFTJLjkAMcrQiCX8cqA4BrNmjAi9hWTBKuHbqL",
  "key20": "67fMo2tso3xiKcRWA7syqbupJE8yhxjvCYiB5HTAXQfvM42xNATZpcFEFpf6S9mX7wFaa4eDYuk67rqqUjb3KQur",
  "key21": "2D2VSx646GtssmRvNwVbQFgFmhRpnTNC2G61xP9bPadSwCmn1y6WY23zXxhiZsjW7DaRxJNNuFHDVv2iWAi68ViH",
  "key22": "27g4exQ7Pw6sT5pwWUiLmTCWSHtxJG9VgroCyR5VMGLRqzJMbAuiZMv8Ph7ioKNHsg3ycN8RrZyPPSfrq82tHSoC",
  "key23": "2CVJYCRhtA8ccqG4oqEH1r1pemx4kNKwGHBizZ15CkXd5UodqJbcjETVsAxvkVr18vmC4B7V2xgxa1PEzBrvu6wE",
  "key24": "2ERz15KZqUYGqwuuwJ855ehqXn1FHiigAxuuFFnXC5LxG5WgPx6QqnfrXsfYigWRuWbc9vh6eKeiogbjs6GY148u",
  "key25": "DSsJ94nTyawoEnE2U3R2TrHGNaYSCs4VX3RRGzkSxVAQFYPSy8WnZrs581f2epxN9GYCKrcWf1cECub1zzPogwc",
  "key26": "4rxDSdiGeULShEtsf8VJmX5pGDbj7nqfwhy6DRTagFQdf5d22uv5G4xRWAVuZGQcf2YXQWBJfQg7ayG7QpgUX4fJ",
  "key27": "3TDgeQDYR5tN929jv1x9RhftUFXWBEuMAEcCfw9wuexwygw3vMUdmnSm7qPBRuB3Gy4jyYCiwpom3SftaTbVUwtK",
  "key28": "4EkQEiBUgy3DBnzTAeJxN8LvquZYuWSnMCPHL1wSC5HBV3y6Dh4WApQkzoPbq5B9GgLYDQSSjpMK74aQWZbpHb2g",
  "key29": "5p59GyJt972He12KyS2ZnmdGUX9UubQbf7rYUgbq86sPK1ZSGdFPt4FLyMfBrpkXX9puoX8U3oSiKHDD7rxpUHmC",
  "key30": "3eCbLNmxt2VRvxfzMW7HhSmk8dVqYmAca4QLteK3iT5BdTKDb9waNwCR8YWvk5EPh9omj59YdsbtJ6Ma2Tq7TGnW",
  "key31": "4V8UaYizrEcnVmm9V96w7WV34vnr3iP45Cj2cHtbMbK77S3Ycbyk6u6tx5Pw7nZFa7nmTVuQatmFrANKsYySn3Cp",
  "key32": "CaN6oZuZi2PWd4rFfDF9KLa9oVMJzUw5d5wkXwvv6QXF111sVfK29BrBnHGLv9V2Xvf2y11K31ZsQcDCUD8AZ2y",
  "key33": "5txpUSpJaVXKzfLkuiELxwZMqdhhSYMdDL2izWAX83ckojc17gBepgtiDsGvzBGPhCEooUVeQC6qfapXYmhi5SUD",
  "key34": "2AVQtWzK66Fjmi3CpXMLhcu1ty4ckNAQ8sthnKsw1u5ZoCt5pEpW62kgKWLzpE7hyNWpBEWW3TgYLGXs9X7ykpq2",
  "key35": "5t1r9cM4tuV9FkTWZ8kXseex12dyKAdeQ5TmqqDDqQJXsYBYpPTmyQWWXNgiKazZoGu1WuJQSmHLjHGthPjWF7rS",
  "key36": "3nYxJZvGCNa61QzRyBzriaAxDgCEWu3Zc81n7wBpozsih9UhrMtRsKLaak61MYepAZJcm8Lv7yiVt5nKkySKy3ns",
  "key37": "tEkFTzBGK5EiCxNS5qnU2WtxeEU8PbPNBRuwtLoYXwN5AxyjmjskFbi9WbV4ZMFN31vkUo5dwiPkMNWKVkupB1a",
  "key38": "37XhKuJE8CHfRfTzYPa5Cf6L4oZVr8qkoHEGB2hgLMErvyJq3KF4B1wZYt4aAEwC4rEKw34m8tQxfjD4PqBV4VRy",
  "key39": "53ipuPLwiGvw43Yq2JjDUaADqYdpjoiC9YuvAuypMmSVtapJ7ZDPLJXhWTAUFwYUGk2ToBXLGB5XaikJJ5S8pFBR",
  "key40": "4EeQY84yfV6TYsr2kPLThYWTRKSfyDNhZFYJnGAA3H7gK83Fd8f2w9hYcxDrADxgvs97FToeEVFbS8d3gtkb2Azr",
  "key41": "54yq54mz2axVQrhxp1ZXHUfpxnLdb4ZkQcP4VADtfchQMHxSUMq6yKycSdti748mjRFWasjKdtnw88iVUQQR9FVe",
  "key42": "2DDwQygR1WGx9FXp4ZWEyLP59w5wDFXkAY8xBxQC1DKvT3rW1ioAoHfGu2NaaovGoSMitG169CB8euLfmZLyXrWZ",
  "key43": "3YSzyWFdgQUCv6TuCt5bqm9Gb6sxaoEzJ6p8dFAxk3chWbQYzw2xWgm6wVKSJXi9pPkaM5b41swUtHnLdbKRmSZC",
  "key44": "3C9Wq169rueMA4gUjx2w5fM1nC42ygJBguAZFqaPC7LXbYecf2aNTy8JrcoSefzxk4bHaXrRKhnF5vKoSzTuAfDu"
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
