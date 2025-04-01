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
    "3Z2NkmNExtkXMWm7uqC43BskSLJomxPj7HW6PPELMcL9BRS24VdAJBQKtnvtYn1UnX6QcwJziUgDZFhfyXiBd7A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BwifqCsPVF8PttnaBZxAdjFnAZ5pUn8pSt9X4u5bXPqyjHPWwH1iUrYarygc2epoUa8rNZEAJaU5pngpYzvAEF2",
  "key1": "2VTc8GvDTJzKztfTFfs9CXtd1PCNUPCLcDFKDdqfB7M3wmjQSATi8fSwyHBJHkTdZKyQ49eje2oHi8coEcj7T4tZ",
  "key2": "2nuizFiyQXroKfqLtXAmFZtFR5kdfknpk87tbxzmChJaeZHv7CUcLQ66kcPvMMy45e7yEJEPNY5xkv7Mj7Amk4YU",
  "key3": "2FEaHdojQ8Ss4tiYVQqfwodFZ9x5fTcVwjoWMo6TCKQYupZFXzeJpdoG5a92zcsT1QriMhCmKfCBYwy573KphTwQ",
  "key4": "26oMK67K8q3ez8jCUiDooyDSxHAuMfwF2n5SAy8EKmWapVmBxoCxnYMoGQbwLdKzyEpvCnihyEkcogUv7CFWL4UW",
  "key5": "3JzwCPkNaEAxjKWUq2o5XTMgtQmpcBL7Xd7zYLapYPj1yFFAjubt3ozUiKBcGYh94hpkoYm9W7pzS18NYXDSbpB4",
  "key6": "3gAZjhrwbQpKQWRabLPYAvVRRhoGvUSC9PmbQ46mWuasvwqdcXzZPv1mmjFdPPZUeon4HjCiCU33KELu8k9L62nW",
  "key7": "2KeeD4uTCpu1BJMzpta1r6v4d8TYYRKbrJ4bLZVJZkaDadSm1KevVdycu1fmFq5ayyLKA6rd3wh6333R8dmkTNUB",
  "key8": "3QkxR48ehHvNAHDWkcPf9WcE8Sb7bHhruotthTB97LwtCNNC9KgBVc5mFSnvriihh9MMkMC3oC26d87jLjrn4apq",
  "key9": "3fgyMKFPekBcQ5Jv6reQXgXmvks2oyhMM56jALgpyvn5XrNqD5uMQCop7RHdRmN6CnEu3DYcpGTMC48sFRb3kSUa",
  "key10": "3bLkTFcnEmdEjBTUg4yBkeRX6RXgx7XecmgQCuSyfeuEVYdzXeuLJ9AtYUX8tFRfp3mCDTpASsmAoCBCYcegDhMR",
  "key11": "mEbsAwRv66YjtioS31iPovspZTmwbNJtEWUif6LveuMotXcS3e9yhnT2LXNv2UcRpwNGCK1h2vKQXdJ9jEHKz3J",
  "key12": "SDp3x618uafNrtC8XDQ6EoFtaLVo74PazgFKVGqHdwr3yrtgz38MHZFiekMwYjeLhigMd9bEzGZntGwvZq15UUW",
  "key13": "4W7WZANZXua6ARzueR3Vkhrda7NzC24L3WQ6NQkvmfR954bvhDuzF4SELbtsQZ39FZf2XHg1GY8PTUZ1BCz1bZNx",
  "key14": "4eoXNfy6ztHYF4Eg2rBwdK3eSyxGWHyZZKAfXGZSB3tiT7Db7veoFJVi5u4HTzR4gNKkc1MRc9uqFVyZNf4wRR2W",
  "key15": "41axkM6XthwhojGGyYhDzU3wX2DCADgNZVFUDvWoNk1R7nsZgoMjnDMGBzcPmmZDWeqtaLvB4erRxYB4PDjEtyKX",
  "key16": "2aLGdw2ZocMau13eMBMDYHsfV9MSLBXUEepEjr47nFrtj2yUVapkZcQ5b2vAdgLkCBDpY7T1crPnNSKHNQaf7XGo",
  "key17": "2dFiZrfeY6ntUw44vnvzyk6Bxor8WUs9jQ9odHXGektkbco72ZES4roaGt9Gqw6FboFDvuMoG8Aq43T7aKSxHeQ8",
  "key18": "2R3cJH1FDQHgGUKvGbg5dMAZTU1LsWnvBSP9KNKifKd1GVxUPS6AQoGuNCLJ1P2VqGGBfTPaXqWpChtd1Cgybdvs",
  "key19": "7Envmaym9UbBA9bhFzV1u7hFUKTfy44zpC6gj4fvVr7kb1do9vA6G2kLyXjSuJnkNacM2JdJC4j14KtrWwx2n88",
  "key20": "2pi9WXRDSQnxnKh3npUynZhK5QabfoeHzWchUU91cTdK4DXgxPqSJVx1sbU3c1zrxbRX9Ku6iuYEXEpm9rNhxraU",
  "key21": "SXh1H4qiKWHedZieVYoUAXVW819Knu45RjLZo29y55HPxrpm3Woxxei7QBHcrPZNdUsWXdaNfdHBUuc2B4Ms15x",
  "key22": "4ECfN1kkAX87gAh45R28DYtsArpSBd6HHKUXzK69Ca7USTHydD3ZgoeokhktT7fDCHkzrgAMT5BMyvhidRsfrxRF",
  "key23": "HMgd8fWC7Fkhw5XRgYkQ5DpAbf3RMT7fZ4UtWdW77Vbdkm9kaBDFE12cVDS8ky11JpaBDwvdG76WD2uwMcqspJJ",
  "key24": "5Lhfa4F1Y5veSHwgiTXcRYE6A6UMedSLhL6ACVwZyMKWtNF7C7mdXnHZvb81MLPBR6LzrEC41U3FuP8YeBGixx3u",
  "key25": "enqfhWav26JvKV4eRsbKfaqg8mwsw2CkwhPqSMbfinEGk8Yte1yVnWX8fGo5sF3LfS1zLY15Z6BFLpkepEpyjJs",
  "key26": "3VTeLdWoQ8sUTQp1sWPGeAMAowDViczPYi57PnodGqkNCuPWGT9svSXR1HLZAgKh8Se3EV9iqfgeRV55epGErEAa",
  "key27": "nBkjivK71kTdnyvCCEggxW1jjcJMrdw45mdzSCsLqXNtswNjcAjnhh6mLXNaKUnKchF9EQWgJJoUz5kwHdFAKkb",
  "key28": "23xLZU3tBmwjeqcKfs4Vpa2VDWvWo9MAM15z9FbGUrHMRVkpbGtNjy7ZJWYd5r8E3k1PArtKdKGHe7yHKGpXfhLw",
  "key29": "62xyu4pEivQytCdLJ7DAvgXNBVR4CBQdfUzsAPV2t4sCJnz5RBSMDcMwZMvTfQLbx9czd8q5WabvVueVQDezaduN",
  "key30": "37putU5MxAADbB2kae3DhAq7EGPX9Qw9mcyTKqLoPCdGTSSfXJ4hjf8ANRtQgc2K8hHyZGcRJpYSrLiid5n38NGg",
  "key31": "2Vr8c4jVrUmW5pmSGCkTKnQdRTpp6dfaxepmkY9AEV2GVsuJqddt2fBaq79bAYpYkEWLsnB4yJQpCH2ZRXtAQSw1",
  "key32": "2s78Y4a1zEWNLujPnncprJNy6RDPjHdiM5Nrujfo8KWGeodsDMvoZZteUHc1by1CAe31pvVj1dHij9BVYjQNxR6s",
  "key33": "2rseizmJipwBK842w9SE97ox2UP9FS5F1aRjUJfD1sJwKdcJb34gbqq5TY1jPRRnghyYXpHxQ4rYP9BLT1qAQXBN",
  "key34": "5DR4y7yfnyV3zzdg4Qi6s1tpKPbwmNnBoPdq6Y1siyE4TPTbaggcFwzRkuAAHurNXsGfkNKBy1E9hMNPRSsU4EZy",
  "key35": "C481RaE7EqmdpGpxwLGTLgu2mj5NpRQQ4ihk8fWsEYF961cgtnmLHmj9PaecqkG3xoQGcVEp5CfWEkDRKZcuxzM",
  "key36": "4wFDLpaSig5kxhanr6CvVs7bMmWy4igKUEM6bZvpoQXUr83KnzVd3S91mxMkqxPh5LSzKZbMX96vL4peRQGsoqY3",
  "key37": "5fsxwDgbkXgpU6ZZALo45iM4r8RR1f5h8qekwh5Ds2EF6GB6a4isGfQK2txaLdQmqUMdt2pLPxWeFmLUF9UCizEA",
  "key38": "2yHdpQM4aiD4DBf7R1ucS64UkRrJRXWTeSLGwcYAn1NnPMPVdsG4zWzpBtAUUHGRC2TvNGZBr4LREvx5PbCJu7FM",
  "key39": "dAMtfEzWsvcM6HZ1QNxztAXB7co6ZqTBWuLKSDB5azytyE3Y4SpUJ5uzKfwdpih8S3GtQpAYDCcQ1gdXpFXt3Vf",
  "key40": "3sg4Ufj7bwB3FhNnXFj2PKGH2SmH83Bt2UuRe8ceMDQYHNiYex8F4J4Ru7ooGhtwgFrb6HtUaNakaxtVNDoXuaqR",
  "key41": "4zXM5EkufDMpbyex83AxRoDfp6r2AWmeDTqKHuwtdhjxvgTQi69U3EeCGbhGRbg7yWzemvGRps7f6ce5GoiV8c5E",
  "key42": "2DxyyKYEAZKhPynvWSjNyYdUwryuShnS4AkQYxejoZfNrftMurYNR8Lsz3Pc6kemPEfV9PLzKZP7eBiQZt7fc4s",
  "key43": "4w24cJF8Gq4L2YT4Q3g69XtTbd3ZdRmBfUKhG25VDfpEqgynGzRZHfTekiJsVGsSn3mNJez4uqqUrxXAcAeDztuL",
  "key44": "4dgN1hnMUUWsSTdG2BcVnECSmnQYLAJfWoTqedm5h6jfoGeeDvSpXXxes1Nbf267gTYtYjGaroZrcR1us1Kui9Kr",
  "key45": "4jBgNRdaoAR1sm59f9iskwwdyWqbBhANvx27DbwXRXmkuBfThc9iokaR5fRZToZ5zXqzB2MrRjhp6Sb6hnPe7EbS"
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
