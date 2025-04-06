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
    "bVpCkAyvVTiGGvhaevr5JFP7Y7DADtVZBvrXRgvmu6g7rNvnVPraWsb2FmbGAshBKiR7xatnEoQNvpTYhzkg4iy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umycAkcUYz91ipyV6G5NAUbdwnBQUDoKAfnH92Mt93FibQnmhxSVbCKDgETjX4KW6fwapdE3E6R8DorCBNzZK6v",
  "key1": "5BgFwrp5idqJhy5xxzGn9whYpQMqc4Ym1VwU5Sj1tDRn2DLMj1UP7wNijqjNPj2Wtqan1oDEaDSrNLA7CvEin4i2",
  "key2": "2byyQ4bUMiLLfxguxJ9U2z33Riuk4CippAY1D2vdJzkayx3eNj3NEWm41unhtTTB9J2ZfxJgcunmyjHhpoFcS9eq",
  "key3": "cT4UgQ64RjFUgPD6WmVQg71aqAvFHZCefUjCNNc5D2TqjJLjPhnrHarkAA3VHttjyUi6JJBis7zh6Xor1WtBYBw",
  "key4": "J4NE3B29qotzGgFV8qc7czU7niohCESBV1TJUrksiSLbQ1y2KFgUvT4qxQwD4D9mJvVdb8gemEh4p2NuaedudhW",
  "key5": "2RPeEUKvMnGZXBJoZRywR8hTiK3NUvzxCneLiVhB7zpV5V6D8mdgqfhh1XAT3643Un9rQfVVLB3gWBG1C1STnKkA",
  "key6": "66XxVj8xXKiCxoguExejXMAMbjjrRyovg74TdeZ3X1KtRva7DfPD5DGSh9dRpq6DyTNZ2eadYrkWfBvt4CbY99eT",
  "key7": "66Ccgh5j6fFjjhuUpYhhkitHSyxCKaTTAWGtwHPsiYmarA7fosrj1T8iGm1dJrHDK7bwQW3ks1M1EhcpazuokZkE",
  "key8": "2FrDuRRKHaJx9BJffXgHbPTCxXXQbk5aPd1U1bpLqrk5D93Yvgo62WpMzS5AbDzJpbLiHeAN2k57vnkeSbMobqoY",
  "key9": "46Ya3vsyktuvf9D733rsvzVNBchFyEeFzpHCK99N5CR6RzUsadixfoK2shnoKptFBCf8ReGJAiDTqwPAkhrrmbLq",
  "key10": "2H8EDazNeqXf2WhjwcHkpEtkGPFFpUz2Sr7JmdEjqdP6y7jKXNmDNHcsYryrrUR87ykLqES52oxdscsW85d4TbjG",
  "key11": "4oAKgH4rKadTECd8Gc1Y7kSWRe4p3VRDtC6niV8rT8qGPMqbqAEyNTTw8sCsXaRvBhCgEJCfKtz587oM26qqeokx",
  "key12": "jdXr2A4YgjHbXNZYektmLvCm8sB6m4DkAivuFMYb29P3TVpm1uUWuufXTWEtDoMPD8qCtZJkvhKwzNS5QvUudNi",
  "key13": "SBY7CRsJhiXxCXMtaXiaMmKqMNtj7pmnxQbjmGqmKEwRMZXEiCTAVcbzwtCcfuuP2aKo91ceC4SkscxoEKhbDGN",
  "key14": "4mWf2aQQT9UR1RKQ68daVjXPdB68UVu5sCzfpTMbL2ReqS6uXY8pKX4XNTdo8BamRPFt9gxVA9TDjcFeH3cKiYy9",
  "key15": "5XZzwG5m1C4TpH1zyCqLGd4nEpRgbHmyJKTejQUyAGT3RWhYs4oUSkBw5qPewHKec3enqjvSYLCqwZ4mxPCnHfwn",
  "key16": "5jM8GcXP77mxHMHcfJBAYHnhzCMZgdQ2nGnySFgzDu2fNqc6pdbGasHWyYzb3TXYFGEUTCgdHuqxPhpChjfbkP3x",
  "key17": "5VzMgcAGFE8HtEuuyh5gWx3m3DvDtpnHwnCBHd4teTajpsCM2dwBwqUk2UHtXmrh6udztAb5QfHiVZik2YYDhRGn",
  "key18": "2Eagfj2pAYYHyBvye1uWCPvmJk7R38WEgWySed7y1WHMMgXpRaR77d1UnTCdacuep7MYKeyhwKL3cMtqxyExaJbW",
  "key19": "3ZL4g57mGadyQTenscWs9sFBMZ8DABBrxDjCUdokBtD24tFFjfswn2ygbmDEorZXCDaL2RxziBB5BoVmCzmivQJv",
  "key20": "5a6fSM3NJksCNRxwTuZdq8NnZ8KUNCQJapH9re1tG9mk43HUcjCHkKZCCU5YVQyL5x1ozz4uJ9aFfERKZZAJBsqT",
  "key21": "oKePagvVtBtLLadzPjkg3p3egFJhRnJKzweeoNjHr1vbzJzB4i6X9ADtibXpW5pVurHm6rjdQtkS2uZQxAabcQ9",
  "key22": "2DFCMojvpxoP7oy9142T39HacRJz2NELZGN3jbSkJvunmqZCWAeCxWXKP7T3AikFgrnXNdEqzVdVwZhsrqs21WHy",
  "key23": "Vz2K5YrXN5UpucXZWKCax7UtJcKbtzFyw57rEEg5nGWyhXHQ3xL3F5fd7Fn2qq1wRt6S7xYbRrV6NMcXLsz7dfA",
  "key24": "2gn4QSvWGGjL8q3ei7MmTfoMj5EuXGdx5YoygtmM9tJLhiJk7iwQAigjYg3kWudKpKuYro3ihW3joZEgoNwzzn9",
  "key25": "wq6RsRaa4espq7MsjNysQVyyGNhTR4Tg6tjmJ1R6mxoeWsQUUoKDUiCCsqKDvFAy8ys1s5ZahR9cJuGcZkBMkai",
  "key26": "5RQFBvgKdCsT1YkPMHvpaU1AyZswJb5f3sAmqmWgYbkUi6fcsPCS1VgPN6hgPe1E4w7TwLs8NgS4mZvcQw3kcXjL",
  "key27": "2Xv1FukFrojXmVZmgRzvHz79Deh7HMekeFzBFQoC1egYhgHmfnmh6XzfrJJBfJZePVa72va4QZm2Qy8rZ1oFVLEn",
  "key28": "5oCb6UnyjM98LnHuGGhDuC7Rm2ChxQnbmrop9oNiFAGGRASN6AGBLu8u1RkEHQc18wHzkxz7Pr42B85jQZMsiVQa",
  "key29": "4XafBnkyh2dLaDgQ6x9S2hVeHU7tud5arNhx2R3PRJ6hxxYK4Prz1SFF8GCrQCvmwJbZjRMkH7JeKTRxxdMpkzJW",
  "key30": "65s93dDQq1WQYQEtY8Qp6dEHJiD1bdCGYWpPhQKmVoZbeK94MaQvoA93VwD9TcSWJ4NLc1cgmKKvguEHfREoAEjk",
  "key31": "3XLNrrmkL7BNZbpXAxWtSUJCpHBoYxccAjY4852TqfAyXuv3nN7VdTjjMNMVP2EnZcHXgHfi9BDeQYSmHvXiR6M7",
  "key32": "3SpqCZteM2FXYdjSrnw5Q7LsVCEvpWEAF6KVS72zrozvZVZ42ae75CeioSskMWzPwDu3ZcbSkLmoFRQHUyMYzdLd",
  "key33": "4nJmW3kV6Kh1KM9Gg28xGYfwSRJsefgFnv9i4A1TrjDoAPecQTKRFmfxJfGznQjY91icjrEY1QhaVvuukcYvvQBw",
  "key34": "5hkTGK7wiPGEr9LC6DgYs4Fb9z1svpFdEoUaf9zBC4PEoJVtgT7X62qBGojaBRBKgKZsH5WaXdfXw5q5LyBK7k15",
  "key35": "2xwFSR7ukKzDaTnTEfaB1GYRChSTNsTKfCJvQjjGorJQogXGCKR8LVo8SyrR7FDAFS2n2JCP9pzjUK5wH8Tuwvsc",
  "key36": "662MftLqLDbrRKNkPS4EwK5yMGWDNaWdhPDyUzHVF11Zs7ejksYhhRS9PkftvEJwtrXFdHsYCFChkCxorgf3XvNT",
  "key37": "DPwveM8ACKPGih2hbb3XxKHj5KnbfaifkD97F92qDgbuEQtjzQaJhbvrkktvmmppfMYTAcsqnyipRFp3bDJ3LX1",
  "key38": "34EUUNt2FTdoxNS1shS1qZkqzqfQVbhp5PSwmsApwDtSbDb8PXSn9DyZXj9miWFFhKCioLxUrGwNqtbLuYqE9bbP",
  "key39": "j7pH3QwWr8eirbocpDtn9vkmsehAH9sor2rHkRziURRMGvpzBN9SnPACsrPYNKmBmGGPUzZLBzoant1zh6kySWK",
  "key40": "53HuYuz8kqUyfF8attFwJRiZ41k8Sd3mCwfsRQ3ksRYiE2Vwn1zYUtCw4ta4Rt72WbhyS68MPpVhzDdau7TzsPFi",
  "key41": "5nXuDyWqG2xVxaP3tx29dCN5qaV3zF6jf7VkyYVfJqqpyUhn22cSZLwcorXMLSPhG5CdAD9urcRDckJW7NWqJrZg",
  "key42": "ezDwBsThZjLjFXcLDNzRMwsRBDUuvnY8hhmv8HKvkeLaNwupLvTjEbK6WneFXiBm8LttQjX1msHeWaPDsywtyeT",
  "key43": "2F9T3AqZHnhc4LKNxymTcQ37vMj15riANxuqQjkga6Kv2ALv2e3sKwymsKuzbjLsNGmreZiwHWptLg4kt5afFSSo",
  "key44": "5XCUr4UmUxLfnQYU21B35uZfK42JUvFQrJmo9ZEbFhteFSe9sXb3sjTc8NDi3sDLk4DUBwv2JMbJUHfQYevc2Ws8",
  "key45": "2rx7mHW94JaGi8mrfSWr9DELzHYw2er7jMiYtqzhEhEecygPPZzG1su9SFnp6YVmU6ygjZGnLpYaYSPfosv2VRTZ",
  "key46": "5sGisvvtCrjheF4MjdUd1r98cUY6zU5yphRfDWNY5FWJ8ZpBJRmuFRuV1B9cDZBC5okppxuGwB2qK8xeUM17ZvNa",
  "key47": "3A7AN4A4He46yCdmpMSz734RT4MJGkpHZJUAT6x96aexPo2x3GyR2CJyXARZBev45hRbG1iPgJu8R5ZqzHaUXNyP",
  "key48": "3VDKGndx9drM84UhfHGRTFCAnsAnyQaQRXAhkJrMyZRLCt6wruq1xMXf5wsVaVwMRHjbLEhKSXbseCBiBgkwukTb",
  "key49": "wEgKZYAuAYbaoLWtGc2ky4b6ok9xThuxDevvK5Q9wNdtd2Rbr1PfBjnQtyknUxcw8zmRBDjGr5ApKgouhzB1yHx"
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
