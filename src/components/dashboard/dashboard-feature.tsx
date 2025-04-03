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
    "4gdfM5SEBnBMLoQ3Spd2dVndgQcTQhfvcMAkKwbgXb9crCjcqNJd3StaUVSAfzbRTWw1pPeex4qeUPV85nQZiXv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sm6uTqkZjqauQZZ8SDgjDrMn7h9Y9KaYtp4jpmdgiZ12LukcTGWGgFiBJQ8hJcfPSRv1RBHD5btU5a2g33zHA6w",
  "key1": "2A1Dmu4CtjpQ3PqLYz4EFc7djfTopJNb64AmQtifaA1zs7eBCYTPWbGfmrfR7Z8kAtu31yP9oMa6bWYZop7xBRXQ",
  "key2": "2hMLSEU6gBSnUNCYMvaw1Y44NwE1VhhHM8LC6T7iwi57WDXZKWMwZsa9K7kD5fUrYcY9gdvHmTujuS2poqYqwGAo",
  "key3": "3MzWm7hELShETtER1ECe2mU3GFsNvEizAdjPZy3uHVtM24cqgTxaF4YuCaKBDAQZk7afH3LR6r5Sb8paiWoeApNH",
  "key4": "2sxxiXEqXUZZsQwzWq3YSWBkLhknTAqwfYzeCQpHLz85QwiMfMtj9BrjXeXNuQToHVWgadW9vb5Juj5JBF8JAzSn",
  "key5": "2FpDCaoJBt7YkMXJnjJ3bfWttCXq6V4jgd5NWTepqGRK5khXGVWeXS2EwxjsgTN7cdj5jdGSXsWcDgyvU3C9NHAR",
  "key6": "3QrLBMVdz19f3Ptf4x2kUZ4BtqRbtT4ex6SEd5dS4jY8StNcK3UWQeAsxh7Gi9fMPvZ5CPoRD3zpUaxhzAN31jKy",
  "key7": "PE53nvug3iSNu12hrkgBYZ9YVqxZJQB9v5BNRmqok647cFZnJcvgh4wvZvP8GLVkaN269V8zCCasdvBh2x1wbzg",
  "key8": "2bKu2kSCUgxzt49CeZdNuDGDMStonXJAfV8QakzW1Tu4vShQtm1SnXDeb8K3umgwxT57kezshz4MAoUyphyvijrC",
  "key9": "3PngHHBAp7ttFWfJwq3sECWRSC35iWxb176qg42FWfmdp5GXjowrvTQ2yWmkegqnTmrgwUxi18gQWU7ga7pKDSFB",
  "key10": "2tHztHwTzFhRSFJKnJyHtPpiF57Kwg3gzUs7ykEfyGLxvpUWcqUntpjZcB22FeLELJGSrPknFxMPRDMJPc9KxruF",
  "key11": "5BoKcpiCNQXYtebdrBMLmiwMC5qQ69oWZRt2aWA8Cj9zRTf5rsgq3wiebPr5RCh8JooMT5tdDmCemhvxxw1fG3Ea",
  "key12": "3P8bKhx2EVDN7DcgjhBL958oCSGWQ3MCmqRPrsoABGTusufAtHMAgcQzPLkDGvE3TwDsgf8S57rG7W2Jo33ZMYG4",
  "key13": "4rHeRm4PomGptQL8tEtsJNeew5WfFN1Uwfkj7GFDnTMVxSnLgtVZbjiwge1KucVktfhuh2C2TNeDR7Hzni9a6iAS",
  "key14": "2VWHgMq2MQSFgZU8qM2JRLHBUgqj8tBqDqyuvTPM2xgb7DkDAVVq9g1CLCQ9toSUy2U9krhEWHV3AdnujYyrF8Gp",
  "key15": "5pVJvJRQNPsdGxxbhjSrU44YBnq6ajLcqeBDj3VDWFmmHWiLxNRQjBczuxPtN7u55EC6jw1H7cxzggZrk6uUtHDt",
  "key16": "4LKfQfy2p2CNuZB8pYeQsA7XS3NPgp5J2m5SLHfViQqGKZXuXinCsf4FHzTnYhb9WM7byXgvh3nTkGuwM45zreQ5",
  "key17": "24CbaiRznMa8bJGZgPNFPmkvpPNc9zvxhaJJGD8B9jpQwwW45RHdJD2ihhoT6MmwaNHkxuj7C2pVufu29wUpATtf",
  "key18": "2GMoS4TtKRs5NMpeffhpFZuJQ5QUnSpjahe2Jrcb5nGust2fhZHigpe8bk3T42U3CqBq1umzHXk5viALiCKDkaLb",
  "key19": "4JPPLXH5RNExPXkTtpuTQsaXP5xQk1vW3uPSLGgta1Dxymt4Zym1s36xg7wcCXjF5xanywD5MoU8azsNYvE8QXzP",
  "key20": "59JiUd1xKmGxpeSYefkYvPYZk62BoqRiCjMpaUCYqfbnjy8aQ7qRRxNbYtaGeyHPbPykjLsE9pWp3dqVz635Ss8D",
  "key21": "1RndeiJbjHxGzNkKXrRCwj9NVnfimRoSjUsHe4KckGfDGGYMthzL33XnCAY3m57iSXiHhiXbjeQ9hHCX9VesR4M",
  "key22": "2TLbhVczHBAowfYmjzZLr8uCiKncExwz4joNqWVbtMwTep4jBfFaySTBcTjntcuaDUDcMJE1Sd2jEwAvz2hcc6uk",
  "key23": "4LJCpQpNbpkS59GrKYPHgWq8gJgfZiNGwpzuG3jHWmiTyCjz6JkKdBX6fYQs3VDVr11oBHjDyverKSQQoP3gsdQQ",
  "key24": "2J1CxQ3QspDpuqR3JWQ32CP1KZZp1uubt9pXxnXAwutv8TVRK65JHQk8EczGWBCR9T7MsrB9Ae1mwyx8oFsjDi5z",
  "key25": "5T3mnUxfTc5vKe4GM5jExLa1Re17RmHs1YiRs7DqFaFmpt6DVYS74bUd2rtwk1cW5GASkvaRAHarEzax5h6Wbx59",
  "key26": "3VizsS4EAs2BqdUjx6iLPGdhAYZ96vhbPAFjsQvbj7R9fMocbcVmyn31zZWB9E2GPQScDvqdGoijwRUigunbdfTo",
  "key27": "2KkQAgzWYxkBfiKCePqxHnkkP1ud4aTmvNp95C96p7KvUtbDGZvzZ7JMzT8W6hs6GkgJczkwX8NHNZAcN1WRWLYm",
  "key28": "44Pt7uiNCiYfqpoAhy3cNRdVMpkx34q1EUz99L1sPxPHT66y3Mhhq69xuDZbFMPPHc7zp9S6JNzBcyHQmMdW4GkZ",
  "key29": "2RtFgP3CbVXpiawShGF26pPGSTgeHdkL2M96RUHXXY3sfeq8n7ziYZizbGKEZdh13UgUN22b6XQKKr13gjvvxf3L",
  "key30": "4hJRSAzW8twdiJfhCHELpDvPHqLxACNAzv83p6HexjRCwmyvMZyk8gpyVLQ5o9ymx2i7649nrRXDqikyvEvZpv66",
  "key31": "3JdeZYdzL2PT9dEaAS7iT2J2b8awPgXaZiKt7iveaNcVm8oVjcomJ12Fyb5R2e6T7e9dZvnK33VCJ79dihim8r1p",
  "key32": "2GEuW23xsUWngPtSTzi23bjBphw2xMVk8Vh8B7f1BsgFY5qGzN5KmpsHoyHoUHxdfTv7b42zsVAFikXWqzRT8AMh",
  "key33": "2tem9imPuLLCw7sjX19xydPCjLgp34YLLNkmaj97KPFGB51MocxcgfTeAnJbgDK2FgoJdn4QPi5BGfCqWKog2QnD",
  "key34": "2t8vW3sWtW8WDEQDoVcY7TQp6s1qcWM1NRPN3VuAi1LpPD6d9w8RqzJBHXdJ1CXAVabqcN7PSZCVc1n4vdqz8xQf",
  "key35": "4Az1CPKXN57xqJhGq5fmNCAWRMsVFGMjpeUZDxShUk3kPSqRX2Cci3W4D1xjhms18oWc2VWr9oGc9swb6BaCdTC2",
  "key36": "3VgWUjXimTyC1KwwzrxKgydx2eGZ6YEgFSbiLQPdToFzzpS3HPVAoVAM71oypz7aVrTBPhSxsn3fgiCnakmEZEE2",
  "key37": "ERetQJaZjH3h2Su4QejsWQBeSXuqjhYA7w8Ts1d8eRZFZzjyLz5zZxbwr93q5BQKW1n9P8zMfwEfgHjmwLH6dUr",
  "key38": "2MCV4VCM5M1wuA5VygMMomcWNDSUqQq7B2gK8iXkp9Tv39iFhuzo4murwafHVJvnitLf7zjwbUWnDPv6iMGVWS6s",
  "key39": "3geGqkz8nLJcuX8QX5ABUdTH9msNHxSkXwRmchyeeJdSXtUpS7gYRys1Pxecv2E6B5MAoBuxXkkcuCb9xwMFPb7n",
  "key40": "4eRSMy3woMWho4kHFymSopdWPVUrAuzH6Vwn28ccKcewPSXMnThZpmjSyUFsGgydJePKdq5SsRWjhoJkwJ5efemh",
  "key41": "2YR4WrYox61z4TqNkDC9WHL6LeDBevbL8VG1N5BpqQawU57sTGJS2sX6CSDonAcUcKZ58acHCxcbe3nChe6i9ErV",
  "key42": "3LzNNRqm3rL4gg9ZHzwFBkMTeWiGt6sXxixjqiCPTvNJCaV5HL2N34ktLhaSFHeyPpaDAQ7GpWPpG9bHXyK6uenH",
  "key43": "5oUkeENttTYGzQWZA9JEzJA3HnVtN3BeMQphwz6383XiV9GGkrGp1CBMLEjPPYMQQ2amvNes5Tv5mWziPf8AtTpA",
  "key44": "3qyyZe6j78A49EwaoiU8abEs6TBp2pexknrk9v3bwLwEUGzwhcwz23ih36u1PhYdUXCkujjXuLdj7wu7DS5wyJMf",
  "key45": "5ehEtWeiXg49CDoKnXt4BGZ5hx619zw8pkpVQ3zorr325zTc1hhXF8W9CLky16NcSPTpoChwBCFxwieNXpoNYrca",
  "key46": "3zD4mvK7Zg3yw5t3ew7AGekDh4FhWFvoqUZxkJSj5SgtZMMCb5aDeG14zUp1Lgxhm4M1U7tAMD1Y3jFwKvDMv2rc",
  "key47": "4gG3Zca9yHxrMWg22rz6nBe7VvapDpEx7ebE6x2LyuvA71f59Ni7FSJRETnaHeqjjSDm8c1cFsWFfHvrrGist2ap",
  "key48": "4bAJxvsEmdbdGSNTQ8U6eMVkhGEGGaV8fuCBFHhahDdeXFJzjKVfk8kantkPKRX3NCxA7UTdB1qo2gYSexWEuUoM"
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
