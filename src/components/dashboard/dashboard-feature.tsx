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
    "3AsWGAdGMy6L7t3AtCoBRuYvgvHhwCVkLU4wTM1bZUJTPbdRtFM3phZEyEXr2FrwaeMuMQcGV6CBs8NJ2z9uZ82j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PELHEEscpRaNL8SDneU5BVx2GfRQH8jHrcE2FfoJfY6ft1yxgrtwfRYBVCQVoJ1Eu5Tp34ES8xX9nhn6Xjuzuzg",
  "key1": "2Tf8SCwYEBwLWQJtKraU1Zh8cgmwdEx4qUCBeTQYpo3LPtipWQBWo8pJKcAgc9qV7iGGNYW4JAd4p8ajArQREYQY",
  "key2": "4xtgo1vfDUDkFi4secVz5c1BDT3WF1Zpy8vpKzGb5BstvdAByUkDekYyV8ikP4DXUWedJTMy3SbdTynswtU4tGpu",
  "key3": "3bjW7q3VZHDccdSaqPW2y4D2NB1wxWFp8ksowm7sHNvabWJ1usy4FfAy2qDWVsnyou5XhYP3hJnUDaZipEiRbWSE",
  "key4": "5iGKqgrkmDSMduVEPzQ211PR6m4YBeA2awHoWTPpRTGAbTbQRzo6T4ryXjryEMfPbLXct3QGzjTqfLyhPW4u1x7V",
  "key5": "5w1HUXak1g5eNEP4rxN1r9ZYYrEYG9gbAsugKKmP7Ru5iuHyCHRKjp4a39BYv6Uqf8NbcuFhrUjRW8eYpZu3RL7S",
  "key6": "248WM7hJzjD6XrTuY1mHNVBDot3CyFyZ9yZmc25kapzswYiNzhbzGWySM2A1kRnQYJ4H7iiKXhYJLBSYjCchpcg2",
  "key7": "46W7myVXBprYD1SmvivLWP7cwK8T6bveW7Mi6yEx76WhxMcqMyRUhCHdcPDLsJZutvEZaYetKc61SjnLx2CkbWe8",
  "key8": "2Akziqm3zzuAeFu7Wn57SfMKPixRCpGK1sCPf2aCo2S1tYNPjUkNgeF59wabNgc3DUgUnRDnLirJq8JpfW3nVcam",
  "key9": "3PFCxFNmGkagVedsMQeLbe6Xwvcgc3iTgiCSTUyva7jZyWMaAJH2WnASLBLUoqV8TYd5PCF9ZrPjgwJQ9XnBoukV",
  "key10": "3gXNrR3SnVzCR2VkEjEx6UBBeQvswnugAfKKVx6BwFTSrQBzJ8g1JtX4ggkoJRCRZvTyv8zvUh1vsXnwoXerLRxT",
  "key11": "4Bot1fe9WBAMr4FvMKbMMnDSMnbR67NmGjridRY3ueGZ6qRWEBveja3vmy1Kgo5Zba3yGrPdjMf6KQopaPNVopku",
  "key12": "22ZxidVYw8UfmL4tizCKt5cqXP6uaS6DBknXhvXLCjcfo6P6aogCD6jGVtc7uExgutdga5yfuiqxBknSbaDFYFdx",
  "key13": "3mLz84xSf94iR5cCfpMFvkeKJrBK3D4ouJEQmr2PMvY11vJug3UybE1vx7MZcndp4LSGNzqt5PxCGXUNyhMVEyfZ",
  "key14": "4UgLx793kmDfb82nHG3B3yDqhadqW8Qse5YJY98m9P6Bvnu9XSoooSQf1jpz1r6gfJyqZiY4UuDhqnfYzD1Bz99F",
  "key15": "t85qGQPqs7VEcZuYbN6z1LK8yQuPJ8LvWMZnpfpPDxPD2yK5SKygumo9wtt767mM6NSEyPxaMgGj9Ge3TEiNwwp",
  "key16": "5Pzdx4Q4P9i1sjcXK2fRpa98qo2umJbfvGq7YkagTZNWfKqLRhyTaoct13UHvuAxPYFbzhtEtHZHYAcUY5CxYB81",
  "key17": "2ThFjibWvtn3tMBnSwEGqoPvXGLXzsUPsmTw3vcFzhhTRLxcCDC4tvezmQHDDfaBTbjeXMic1sJqbsTDNcdVh6iT",
  "key18": "5yinJVPT51izTuWN6oNTpH9TfmePveegpPHNKUURJ45kb52NH2xBWC7jEtw9F4Ud5P25VkYht5xP5Q2tBiYSBm9r",
  "key19": "5DC7y4A1oEYN8GQ2x38yXNWUViQK8wzjPzvhmybbRTArEbEUUuXzRr32oWCmY7JWmSN7DYCU5aGhAkFAUk3s9iDe",
  "key20": "32hAR8vbgyMrqHrxueA75K4c9zSEctTpNErgMzQUZn7Dg7G4xuwbysAtK3Lt7adTvNwiC96cSeviaY86FSTZzBoP",
  "key21": "2dpxJ5xgd3xVvo66voEeUCKbQLpHXXpUjjdWWSuavAZSFh9gqz591PvtC5usR731eM5jzFR7WvCxCACJ13uK7sRq",
  "key22": "3zmVpDXCvzMFkbwHx469Lc1QAjqJSdYTxSsnHRBeVgSfrByNACe3sch12onsQnvGjffPsm2hFsRZhDAUMV2Vt6Vy",
  "key23": "4MYxJojB97EDikFcCUKE9SLkx5yVueK2SjtTWMzGsnepgBjd4Bj1H9SsbERptX5XoBF4VXwW2ErNqCYtRykkaNLS",
  "key24": "311Dic4H8avbn11fKnkLA6xbV42sM1u8wuvms2BPKiricPBfN4nbznAzLmVJCNn1pHFMGkab3LCpTTTkW3CxPNw7",
  "key25": "3wcrzb8ykX1Y5TSV1odfmyqCgSSNxETU4w7bjBYPr22aAfdYaZCbjnxYk3KETHYDB9V9yyR9hoQhC3ri9axwea3w",
  "key26": "oHAdVQRmFsoJbDbVKg1a2B9JTM5vaL743j7ufEjnWX2rN8vmu9PR7oKFKTHYdAqumZZ8XpdWNDM9t3mFAj5nwP8",
  "key27": "67KmSpvb4WxEoUGezEtuVetVWXUjxNaf1WMM2JH8zkCbm3peM5RVU6WPxofnqTTzjx6Y2PZfxscVTy4egZC8m3KU",
  "key28": "2hNNp9YY88dfpdZtixD9MVeytLyWxLRCahRrwgnfjkoaVPChP946woGviWiSnNbNKcLf4tGvczpb7LsNRjvtERqr",
  "key29": "2ojHrvKoPJLpUToSwXNCoC1DbiVAxuE4FbpwbcrBmFco4WFPMiW5M7T6ij6f1ggNzXWeaYo49p3sHeyXdj5mqczA",
  "key30": "39f247yhRtdDekKySdNZupda8EU1Vzsgpd8FGmDXU3vGujQEFBzt4Dn7RLXLQrf9NhrbpgCqmmrMJUSJGSWMfHqK",
  "key31": "5JkTA9guv83b84LjDMfFxrfL9LnKYWDChy7pNKzS3siemaJVutcTtEztSaUvJ1DBkmQX6e2YEvUpasqXXaJrFuMQ",
  "key32": "4uoP9bvgGYV55Qu4pGmv7NJV7vCMgoyiHELTRgpbDrhtw1Vqd1Jp4wfrLophcp4LDjim5BxjDsZXhywoNaRykVSv",
  "key33": "2gcRbYtUQMm8K8Xr64CRUvj5DPMSKV5CDVmWqgN8Ustrw8GqUS6hHTqsBDm8wzVBZBYTV6hN9sSEnEqG7JTrLQ9M",
  "key34": "qj5xKJMFQwtrq1BrjLmkGusqrU1hheYKH8TdwwbThTUzTi5pRxBrp4sfS5mRGqdCLoQtz8tc7c2RCWw5obZq2i4",
  "key35": "2bKS9iNpmbNrQpb9YxJMPyZcV7FRmsfxs8vv46YCmFL3maMSHUf1UCv1ctoKFLr8ZnKHWQEUb6vheJSbcVVcpAMw",
  "key36": "59kpwBCH49jCbWhGUQ3wMMreuaVoFWHwdnzQcvpLfKRzFg7cWy99j8Y3Xr9XsbXMGK464C8tCKeddpDnRbxt8w5v",
  "key37": "2MLx7BEszwHjGqcUt3K3gL1jNPL59fBugRA4G5ornwSe13dsRTyHiketax2bisyZ7YmdmMYDjtTWd8bm41Tci1bG",
  "key38": "4uJaMkfUM7MGmQQVDx1HfWipewhwApvXgu1YJBQ5HQBHs6GVMJCVfwfFzgzDAW6FJWC91Q5DST4v15pu181m19fq",
  "key39": "3HKXxet2QF7tUJb3RBnHwbFRdbq2J8QMXVLgRXzEfP4T9apQtvCGNpcN3n2Ezy7RWH67RujAFJmaWLeGdh1WNJqQ",
  "key40": "2F4o9xGHf256etbBvLh9chVEYeMWbgEPwe4RbTYe2e88JegSnMJAUx4UyVgsUgkNcd6Upf8hjJmpmXnZR9zFybqx",
  "key41": "21bxURbhePNxVtMHm8gzhDpn9TbTJ8KCieqw3iJCABH8qpgNES6S4m1r9nZ6VuCBRhu84AW2XKRLekQhzYZiKWhc",
  "key42": "2xVHmTmFE8uCLBgAU34mzG1zcXKhacaZW7gsU1PjfL6nHutzcAoKzJ12kex2iQciDeStKJVrMNycCht46UUpJFBg"
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
