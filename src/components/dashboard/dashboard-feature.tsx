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
    "5yeHMHjgH6PqQR2qR75CJmh7pvAXCcHkHyGPhzzj8SvGNDzBa65jACqTXmddETTMcDwsKp3DxkZQa2MXRZpDhLsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XzqexwAcVX4YZS6Zmd3G9XYBE3YqLNEzDEpUJf9n8NfHoGJ8bq1oeVaGXAdyUmmaVgJ5cqcDCdCpoYAXB5WgKfv",
  "key1": "2EPGt8NHHUpZAyEXnuNXfwzcqPMdSvzfYqtAt16rNgft6n7dRwTuTEHgh6VryYFswmYDyfxBgt73LYahyQckXCFE",
  "key2": "4NFLF75U5JJX3pUZjeJfu9zZ3sR16Qgzpw1q7kLoxv4P6A7yChKCovKJhdKufj6VVaGLsNUrhEEDXPrmsttuTz2E",
  "key3": "5PvSuqBDdULgVFLiUEL9nrFcpJUCdDToLECaC6dAbtPZhsYf6GmbNYNgdr9QFpd63VKHmcAvY31J8AvSiFLaM8om",
  "key4": "2XiZCQRMsjSG3EqiamJb9nDsmvR7CXgi1aWPHrWRq26vVodwwTAWmp535JSB8DYFDjfxmsu7SyuYLd4FPz8qjUWS",
  "key5": "29YJKiSzgwsFpp846a93LECHyGgxHK6wwtExcruADRhWJybPFWqsiuL4gTDuBiYbGVrytpvNRRsErGFqjCf3DVGy",
  "key6": "58WeuhbMEcpJHHDxnshEp249UuR1BF7DUjBD8CVgnLyZJ867WdFatzJqpJzRWGfKV94811y74UezJhU9hhVsqQB4",
  "key7": "5i32FLKTdD8cRMeMjf6sSDFppmv6rDX1CXQNRTZ9j8tfTQFzRrZmrnu33tdcMcXbWJ6peSXpx9Hv4mNLbjjhg4no",
  "key8": "Mm7oBaFQ9YekEp4cGcM3zES3sbPu56kPuvAxyEnwzAL7HdzhvLeHfvekcfxnRAcNf1g7ixjCrFTcMkZVycVwsqw",
  "key9": "9Qj7Bo5UdPX7t6bJDSGt3Z654UnvbRJbWbcVt5y6mswndoeaCpxcP3toddfAMz3kHJd7hopyMKpGt5noUKVTyQ6",
  "key10": "3Er8XnxdCB9XgNfwHHDSAwUA4Q4fE9A16RTuqMtSPnGEAdif6UxiHvhQ21HFjcg52FsHedbCZsDQGHT6SSxmvgLz",
  "key11": "2FWdF8qdgBjGsGgX1xY87bD14SZ86NNs5b7A6jA7NGgrCy9Zu7wH5dNV7AHzSggDaHDA3fS1cB5dYXEyx8cJCeoN",
  "key12": "2639QiQPngAQVvGPPidKuq3MxzHiruU8NfoPYvfoTP5YVM96MxqTp1rxpkwthwAvirHaNudnfjVviFxd9Ke3fcBY",
  "key13": "3kbkULxxd2RcCjHHgrWjUqdCPuH9bqsMP3GMf2bYAE4HstnrsjwU8iU6y3GVgem9MXKV9b1zd5wTrLuWVF7uQJdc",
  "key14": "23GUa89VTpgJWTSScCKWDsTPZQkkTjdCe4wm2WeUeurZRMCYXqXK9kobjXYTiFtizLj1pSbx5Xay8MPVtgJzaTdb",
  "key15": "4HaSk4wYW8zGuXCVp7yZW2u6x68qKJdYQwUVYeRhE5166srDd3K8miraJUdLhNecD4xRe5zxp7Xg9T7BW9yrCU6M",
  "key16": "2XKFgnWi5z3CKZb6mKmr9YD9vJAZzUCUKjTNj3bT73kH78USoV9uUrP3egVWHorCbdk2gmp5okb66pfz9rGEunWA",
  "key17": "2AusGe9RPhNMWw3nsCDmrNZCzWZNTJ317xTPwKpBrc89ihn7ZaqhwkNDcCaj5gZe8mSMwMP7UZYADEu4Enf1c9PB",
  "key18": "4xm7541VvGniCvLf1RQzo57vM8y6rm2nykDh4AsGhfD5zkcx5jmGGFm4MUp75hm9UKprYoiErSMhkks1DbmmDhgY",
  "key19": "4JYnbSVR52D3VTg1TgHgrEska57vY76mM8NnPYUPoCSeopAp17z7efGExBnf5xBNViG7EhCZQH6Cs8Xs7PxYZ2uK",
  "key20": "4ieLstQhVz9xZcWN8eXwatK4YzzM8HRpJ8VNMAiA4ks2orY8VQCfNAXnuLSDqZ7eZn88hi6nq6mJiu8UUs2pMoLS",
  "key21": "eiEsNBky3cZtqrvitq5vHB9QxyaE4rW56xpHpDypX7j9VsTxkZt5EwfFMQozjW7wf8YDg1gitLP2Fy73XxqcDiY",
  "key22": "4BvCan9r5uhZJY33Hp6B1KWSXPsogFUuim1JB4Yivd5vZFth77p5bpMVmTbCUh1haPNwhenVHXoP33FbifmH4PsH",
  "key23": "3f1sM9LoWxY1JnHgBQgNcaBuGjSTWqbh7C2SeMrhsAEc7goPag86egE3SUyFiQvwFpuyTvd25HyJAVcqBAfgoynb",
  "key24": "2n3GNyrRMo5UsK68SdW5JpdJ5bi2F4rFdU1kozSN7PiLouc9D3ujooebpty5Xgsba5Cx1p9xpZ4cYP9ZngHnGjYx",
  "key25": "1LM7UxjfrXJ99gpqifvoiQ5Cea32J2SJreQ7AxeSeZGAZj3MDqMSceNXWAkJJpU4P8juk15csrXTBbJdBpdu96o",
  "key26": "5xLGpE5KW1sAyzyTXE3peJq2HQqLUs7VqxnYPbMQyqhXmfoKyCvXhQiDTvEbx1ChviRDrezsqAsDEVemp1zLXiUL",
  "key27": "5s76v93HvEcuTwcfwEKw2s2c2ByvMHP3ZeSgFy3EnEayQTHCq4tjQN9aSuZ42RvS2Nf57yNeLZfcie7ZnD9Finrz",
  "key28": "4yHwFQa3JDQADA6F746vFqYP5P5YhGs1BUoCQ5YXdLEURfwdTe9CVXtZH521i39t2VTYSVJKhShVB51Bu7jbktWv",
  "key29": "5D7nukPxbXtoQ98cLFd5NrrPuqW9goLSJt6jJdhixttkGbpDvjwFCKtpcPKBgaD8HzpUHYrxCkXAbfL2CB6PpaSZ",
  "key30": "53WkXQBnDzjneQNk1Ejnfpva4L9Noth69wjcTCqgY3nVWuwz4fvLFchjmBLMHhPf7x8gmKJ3CJaoTCJSPG1tday2",
  "key31": "5n1Lx6gRsbG6jEJ6aCiAE4ogwxNgpAcJzyq1oNusjMdVy4AT1XiUHDWnLS177miGzsG4Usk23JUMLjH4nxitxKKa",
  "key32": "4sqSnhxoeWKKaTGsNSfhgD8E88XnrBW9kN4m9BjWq581zzKe8ECGQuPr7fcat9L5D86AWChqEkVJWCMS98bMFeqZ",
  "key33": "4oCRBB4dT8s9tJphZYMJxPVhW2uND4575j3uaC8M2nKTvyr6Bs6da5LabPFo7U7qoeoEdVKW8fNxYYJwxpmafHbW",
  "key34": "5L3igkSPvRFQHbpPm1wirq2S6jL5CrKQd3BB4kzdkWpi2NFz4zSHrMgqySE9xNACpsJ9zjXd9dUBohHHpnbKpgno",
  "key35": "4qkrsj6aPBWW9tzZ6y2TQtKcPberggFTsJMEJmUUkkZsyEy2k1wbTRftUuRxUHU9tyutJmxc8L4L2kYpa5LJHVzJ",
  "key36": "5GhyGaBRzsia5sRSq3ywsP9sJGtBst83cqAZXJMbD1geD1PMSYXFacxi1246ZxhK79khRZ36Jiq4h7SZu5opohyc",
  "key37": "LNwQD27gWaG2XGGhdATpTzTpUAzJ9pcaNo71QX9wExeC9CaKvQ5pURtUWoSDVwMojFDpQt6jGx2Xmsc5Ya8PSws",
  "key38": "41yn2c27RGdqA5MMdpE6Lgp6wA3uh2uLCtukPZLxNXLzBCnYJzYHab5acMX1SjNGChwhzZJAgw7cp73ncF9neZDf",
  "key39": "4gDDDWrm1sj4YDWubKHDQJTxJ3LgyNGjQpjPzhc8puJudHBLrWmdLNPACTJNsKPYKnzKF8ypYE5U1g6iXUDjj3iS",
  "key40": "5dv8N4gpdo6KFtSxgPnZNCvTUAxUrGEnNWtpgKDPCh2VbLMDbP8GtsogcSQKNa4niEVFvBUvjJAUrfR4fFUCzNoY",
  "key41": "4NgHUttmaBf3aCNZ49PevsyyzW8rV6zz969wf5HtGsVGwshjyuLkrwPpfyezGVqzeMmojjXX8c4Cc1gBUvNzfcWP",
  "key42": "h68DATuJ1Tw7PLokotcnYTBLERdLkG1pb1cVRMbZ2sS7UfZjHbNnuNrhC2nny55SwwoqKtMP4EAEBZ9urFT96DC",
  "key43": "wCdLS9NwR98a5uY5tFn13ftPw6RsKcTv2UmEsixNrHTQ8eqNnoNmrzatJzwhkBgVhBZVbbWQkYb6TLoszuhdx3Q",
  "key44": "67nUxCFdwrWt2nHgEhQBAJcCw8X6cMfiJbGq5AV1vdDr59dKYztx3Mr92sptyy7BLcYZUxQ58TXfYwQeQm2bki1d",
  "key45": "5Y35WcpxXF2wBHaPpCSoktfDzLmCKatW77sGDV3m4gy2VJsi4kvGcaT8STAcnmKEVHMtmQfmbq76LfDF96utMYhZ",
  "key46": "4SQw9uQ2sdRpHBzN8B4UpHUd1hn5bX8uZLyqfUtnnRgtyBcJx9MHzkPpSMxsq5eHQGsUkfaHLFt5nzzt3SwXzPK",
  "key47": "2wMw9ZGLw1Z4328mB18usuYTBMjuRELwanJqChcpMhoCEGvcU5BJcgWqzhTxnV7ngE3atPpESSzwTVT7LPhPdQfw",
  "key48": "3xroDzqyhoSoDcVf68eyhiPLCWtPTh1G2wzG2VLTMd7wwgVRx9BKDjE97XBkDNPmggyYEYAFGqBF5VeYiKsLuDQJ",
  "key49": "8FM9m1bszasWHin4WdwFHyBAFnFa1qxNUhERJWqLjYxqevUPT8Xsrd6NG1xwyZjwWPnW3cUFxTN4nrGyfgjv9EU"
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
