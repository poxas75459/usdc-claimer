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
    "2Ce7c8991DcJfnF6CUbMTrNf1MLFH1hZWrk24KnHMhGC2ebc6QSj27QbLt9JRtxtCnACLAfjrdBBbhtmHyvddcwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwfyYqeWbpMNohF1yyMZk2RmWn73U1AH8dWE58HAhXmrgVvD1kqWWvzMspyudicU6KDDF7GJwcw4oAG4mMmLfLU",
  "key1": "5sU5n3W9miF9bRzPsYo82ni916x3CwV7zHveDmd12B8nbCyYm1TnVBseBwxDennKwby17vo9vN6LFGgc9RmfQdVT",
  "key2": "3oY62TvZLkGab9tcYdgvjV4Lwor5yYQoiuBiAYdDsZznW1wGwZpKHh4gLe6mSpBgpzRe8SkVPJyM6e69gKnB4m15",
  "key3": "2LRSsoj853YuxvyukfRA35TTTVmNUnEJiqkevEfLvErpErZYswTdrYdd9pm6ftTqyjcyomKMBx1oSzxgR93udzHu",
  "key4": "2cZSbLSFrrNyTcxsUYvNc5fFMKf8GYunf2zJS98URjUSdHdfRLEYfzUKJYgkgt3VbHg9cG3KGiU64cLCCfh3tZwL",
  "key5": "4EnRPEWWZFWapFWnZJAWgN7t2fRRdyGVmhKj5L2YpkprATwH4Kp68NzQCXqb5SZWMj1CJLAFgEt4fdzwsdBj32ec",
  "key6": "3ugHvK7qevoULprC5mpSbazwMFqdi37HXzbZhFxtgXGBwDoek4ZAKSWQyLD7KHqW7grTsdN6J1muEneWT4QPmnvp",
  "key7": "5buLVY4nCgYJrQWazRK5oHK9U4ZKWdw7QPrH14bwhjycvssJoiiMoiDx8hMQ6nBMh8oZB4KXM9F8N6ats5ELFS9T",
  "key8": "5DdZu9WFfWPykvoaMkBEUN3wBXBjRv79hCj2StJMeC5bTD3dgM9n3KhtxZ3hGenVAf4kkw8Eefvzaqhkf7DEDG2u",
  "key9": "3acnp3GxzVii2eNsAfYo4ZgDkk1SLoSQezLiZ8FyR3Zq7Q2fN6pDcjjS1BT2NMCLUfLBeY2TRLdJ5w6Piyjc55xe",
  "key10": "5Y41sgZ1wAmyQXotwANL9798sRUmuHSjkFnsYZirM1pZBYG7YBtJNgpVn12CoZG7ZRr8dBiRXNFZni6EkWRX99cg",
  "key11": "2jdMsXf89bC6cqb5zp8uxxsTQ6pk5hhT3NTWh3nMKBRJixeQvSfQMnvFiPvthwwfdXLa7YoPN758id2HffonyYAM",
  "key12": "xPjgupxr6WYYMs4u1TuHdPNChpMfgsbXNChHqMyiRUGa6c5uy8Qho2pNbE4aigydjwbaPAoo2xHoCHLWCFBEWPx",
  "key13": "21pmvNd4RujkHQdm53JL5cKVA15wrNscLC8ukhgjd3S1AJo3Jm6SywbeDAVV4FfWZshexPJBoUgtQWFE4BpmLz9E",
  "key14": "3dxkQSonQVC8UFgmB7pq3YHTA1FdwGskPD1zX7toMnFPkx2jWoLXg9WexThaohBpbqcPQcdwvkduzhLB9hgBuMqL",
  "key15": "63pnoKiY6ZCgjXeFpKyzLUSDT3k8SZg9h7axFagNi6Pqr5LUjqBBugELJhKN6DPPYruhSCPwCkuNaFL5CbYaii94",
  "key16": "bYxGpCeME4Az7z7W5o78knmBMZTjX1oHbqSPqmYrxRPV6U68iUi3LyJgfEPLeHAyoUnVG79CCwTLWbwmJQ4ch5E",
  "key17": "3JRfERkLewP6cujtb9RtvuQ3a6Ma4EMumnaYKGJXCiyUA3vf4xgsnqxbg1DJYpZjYtuvCYiiuHW7vqa8opVPiZED",
  "key18": "5PuFY8NsXb8a4FbF4xSUvdbXRYuR3ZtjuDGV1pWsCBUgx5gRfvLqchJLgEK2EhmsLyjje5FF9iveBHRAZmFcuguS",
  "key19": "2crE5nnJuKayxtYGjgKCamH6s4ZPFNWjLLgyoZzpmSGrdeDjrrgJJY9GL6Yq1YpBRX87xghLd8v981SpmPmMFaSB",
  "key20": "3Xv3uFqYqURehc8ocevE18YA81SEL1ZhumcxpBiaMr3NkKREvAiZo9BnkaCakwBiWUYeY9NJiw5QtKWErNGGYEBi",
  "key21": "2dWcWbuPa7wmJfsaN6NozwSZ3Gc9UWi7MhVwpTF3pxVBgd5dhsT1SZ8Q7mm1JJNVkfRNswxCuXpgPE6bYQrSRixn",
  "key22": "5ZwUnxzsoNaHHUE9HotL648Jjm6KdFWyYD3s9DTUK1AzSa4L6roaPjZg5cmWL6LzZbFcFEKhWCNHKpQ5D1tvWqpy",
  "key23": "63bPUfprcPjcHgFf7bAYWJfM7vS34ip7gh6nzpcFRTCZ62658pGcaC2tg4KGPv1vDx8DkbaAYGvJFczwRPiybzaB",
  "key24": "z5V7i4p65P3B7jxtGVNoTgbQLTnpkcHm6dfH19PbvFvM3CADCV6KdTQoB68dLRKQTZY57LEWCV4ogQ32jxDSmMz",
  "key25": "5rss79jkF4CEAUwva3f7n8ZjSrvVxPbn3G1HP3wJQMa9xWAYR76JCAfKeFF6XmaVWfvApEWexuCg732Q29kfyruC",
  "key26": "3cwQEdJBJWL7A13J8nPkHjRQwxSAEa45eFsRwaUn2o38oW7U2bHWchCALDs9RMxvkqCPeZDZcbYQv34E1qGALbNv",
  "key27": "3cAvnTkR3KLKHh8yudSkhrfNqc3kr1cjk7p9QQLcdaYzBMx6AQBV2r6F3YrQQejYy8eY4BvVekkbmZGVJt6Lefu1",
  "key28": "22686de1edJpFQ6TB29nrDGwox2tGa9gWgnyJs9VZ6E648UaDExkzWyT7UTsN8skdF6ALXqtATtoJBhdF85XULdB",
  "key29": "5pYMkh55oPbBs8zAsUjHVsovRtYnh3TmG6s4UmVvm8h34qL5DcG1nAcn2bsXQRDZ1oDBewqFtgJBrZFqLSD9W5of",
  "key30": "2n15GuHLRbNzYSZhMieUucKgcdHn4KzGWu3CFwKDr7u55sPa6ZhBenyQG3UZCwVkT3kxj6UubTR59Px6aiJxncy4",
  "key31": "EomrhyVjuEVeWaP3GeF4CqSctM8CfXXVoXbFPat5Rmer4hN2oX7fPXmYx986SvxgnaS2oDi7i2YHtkXNo9SmUMu",
  "key32": "3R8MCe7ZbXWRgR64iYEWV9bM8hYAhhw1qQXzaWHmQoTT5SksEZ72oNnj3rS5uMArqs8zpvmdoTD7i1mZYZHNgxWL",
  "key33": "kRRh2XRkhnEa4XEr995xyDXcQzfmDXejK7aJL9TN1wFUmX6oHdpgE8QhhEA5RyNHFkdovdfv6V7N9YUQX35hNJL",
  "key34": "7jrTF2dQqY3i8ppa6C4qPTKDZSnPcE1oeEpNj3hzQoP882PdHt9c2RU8jg2gvJSrrd3TvuNhJ4dhHE7Ps6E41VC",
  "key35": "2KYPhhbEpDtbeU1kt9gni5K8fzbbJkWemarabFc4uYXevUQLvMiadwTwZ4iRNtAwS9MP7WxstocuLg1kdHn42KHC",
  "key36": "4A7Ej3Cnx5EjEC5anUXYmrLeDmkfdS8p5jAaP1NA9B6MvLa369NkWSUA6mGJ7geF4jk1CH3xd5VL9P2wpKrDSiYM",
  "key37": "5LtQ4CeUxuWBpzUYfTZah9532ZRYoe7caZHBzir6iKGJrc2VRf9ddfo6FUmcegeth14Npsko8rm34DBmcvzStAb",
  "key38": "3Awp4akMTDYYGs78aUxGsjUdqof5yCXUpFrqi8g5eBF72PdVchrwesHjGNoZxq5VSGwChskTR1acwbS9JPjUffW8"
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
