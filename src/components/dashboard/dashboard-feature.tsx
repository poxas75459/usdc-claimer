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
    "5wfNSFTTVEjALx99hGD5BNmB4bYB7vgK1ufeuy6SRzsx3DnMkdZJLUirtYAWhrxGdH93qWtUycRrDCHbE1w9aY8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwfYUXfiywzWGxrsPo8bVBC6UKS2UdVq9Ee7D7BKHGW9AQbLk4ApZpNhx4Fo9vtDGocmGTymuRQ5nvde16hoiNk",
  "key1": "4oMy6jzmqgguBm9DfoezA2yT32fBxa9oaSFJd6hEnAWHcK29Kh4HsqDDuspkN6KvB7faT3Dh4FqYnhNYpzgbKQ6a",
  "key2": "2xMU6e6oYfi975mmegNMpG9UZJymmSr7vc373J5VuVwiobKVmE9ErGw2L4UK5cL9u83cxhxTDbtgy4XDcJ2amw1d",
  "key3": "3z9XReXrMGYQQLtfyQqGwB7fe9wFv79r5QG3mzMJ3BbycJWjp47WMpcWwz6e2N1DNYa4Ym9KCuEniQJwMnH1tZZc",
  "key4": "2gQYAWtB3MZ5Yyweb3QfAitRLYphrNdHsKCbGihYbV5x4Qj1h9jby5TyNEeUkz5xxrvphtCxTpJiQsDnPWtPvDRG",
  "key5": "25kL6XSDivTtasABFVZmgHy9n9td2Rwjceo2Gig8b6wnQBNYxrCKGSxh825oxcDPhDkoW57oE8kvpDA6jWs1GYXE",
  "key6": "2ByM5HYYEz7UpTPQiVPFrLiaFLZ6h1MhJxbx8sK72dAiQwapYVPnPKWFg1Kv6oC2z94UpC4yd3ba2Uk8hav4rjNo",
  "key7": "5S3RUN1xzuWheFDwZEycFiet6hjxbHsCXqxWimUdeiE6YiwAYg1frZpykH3eNo6XNNv2fXWoeP46ptHsijSz8wJT",
  "key8": "2seLP59ANMybqxGikU1X8Xo9zXU3wi1PkmXPZaswHYJwwVJxmLnhfX1HRzN44Jmsw5pNWVqta84ExujwTfE3iYtV",
  "key9": "bLkjUfg2nE1ijRBcbRQGWdPert7BRzd5XKDTqyr85ty6vNFfALdY3GcbhF7FGQBMmnMVRqA4yJuqrKwxxUSaebq",
  "key10": "3ZgexwjiRgpcWYjL8rw4BzeEqLrcpTD92eTufSUmbjfs9VVKHJgQgyJM3YkWayboMhyGD4dnZsEU6pavqEjGXrSp",
  "key11": "2gwheTf1rccGc39rn5GWJckGKsbbikGxmpceta2JQD9tpeqynndJvX3jkVYSt8jWVsqHVktFxVvS9j5HLudwg5fo",
  "key12": "32AhkQb1vm18RibxuoqX3eaPnwkRq1igyHyDgkCjd8E34KHBXP1WRszC6uHPSC7j1DkQtb36gmJJBHKtqpBhSmzv",
  "key13": "36fDvvChKLcReY6gKPQ5i2AeW3Ftz4hiGcXe6Wu6LM7S27iveNbiSBbcGamt9kJnzGsFwPaDnAXnJHsKaaodCwUJ",
  "key14": "3URM2VXuKzGGDdK3m5fXHuECApQxzhBRGJAQojUWKuaai9vRSySgyWa8rfdpuVgtBfCUaQWzu4Sm6YkeLBiGJHcE",
  "key15": "49oxp6CQ8VJch2Xh6bfqRMGwPx9Vr2FJayBLLeoBk8cr7v9ku44UqntsEzaPbi1djqSu64sgocMSNoqyycKn6adJ",
  "key16": "5YyUGrya89pgqCvsEasXNofgwDQDmViUZgdxcsboS1cctLoztcFJUju1LKbWmz4wVYLkwR83MVcPTY2Ng1jpHkvw",
  "key17": "4d2JHvruYvqycNsDZzUcHVeKzatv8tfKrLeyKsiMuG7s2t83LKSNo9Gp5biNqNVa3o66pGwv7GnzHqr1GxvBWwCp",
  "key18": "2LKuqqF1j1G9tMwZ6BvhdJ6nAZWmm9dqA7gbVy5QiTLXN7feWuvfXkqCqt7WSgACX6VXh5o44deTmBgnFjWWmDM8",
  "key19": "5buvPvDqxrKjnbbMQVGSv16ny3cqCApUKWKrKTJvLfKoMYvuXtjrNoAwZg4dNvRDzoQ5KcCtmbntn7unMLoeLhjp",
  "key20": "27eB4bqu3pg6U3gYKfHBaBdYQUn4KLMKo1rMRNTfvdud8QJDRm3Dd6RYND9Lgx8SLRihW7jY5v8dZAHLvtwTMtVh",
  "key21": "YPVjt5XNwTduBgbeo8EwZJhp8xx3vyCeVjmW9H8GZxH3s1dK8yUcioBzgQz546L3ZANEvhMnKq1fwsU6idCK2Z8",
  "key22": "5b41Xjpmm6NvbHKNErzByfTSZK8befTiFM5Kd7JHcpjNJLCVnEV9DZoNWLWAGJi7oyruQidj5dNjgivEnXGSyVzm",
  "key23": "2Q2sKSrHV2cB5QWKMDXgZkfwNY6usy6a2PfSnGUL4M7FHXmmGhLSicJvjL8ePs7UD1vJFjtjdAc2bBuiyVoN7GJ4",
  "key24": "pBshyosu1GWUrMgqvvqoaQKaok7UMFduXcVA1PF3tseof4EPfhTULPCAhvLDicqjBK8TpqaxjPMSwC1vbHME3Je",
  "key25": "45eq7Rk8Rwf11dKgMtn2Cd3D98suUhQXZ1RV4UkVKbmGBDRrfmizz2H7V55zvBNujk1uHGf3GaCPCbsUGrBATHdm",
  "key26": "Dk8XGjDaisg4T1dEuqyJgNWEjEoghJs7rCSUAR9XXP3RHzCfXkrVtA6hGTpB4zkXTYTvLAg7NWZbMb4kB8N33zU",
  "key27": "5bMKvL1MVjsifttHyKRiEweWHqzCdcxnbaTXPLBTgNiEpvThKjUUHPg7q3c6PqZWnAPkECcJJH4sWWQCadiyiaAi",
  "key28": "5JQotyHGTQpaDHsNYBdPS4Lg5KWR3r1ZmbKbmj8Jc4XRcxb1TZhJwaeMoMWWmPX66WnQSrSgoj5JXk7Dh5Bo5P7r",
  "key29": "4jLEuTHvMrW5YSxbs3PUDDR3aCqLfTz3zbKFjEW3eQGr2nMuG2TfTWu4qeeiU6k6mLEXyMjJkznGywbYnw8uC2ju",
  "key30": "5wStAeZYnDFweK6aV5JfRLRYtkDm96xR527EsisP2tpk1ZKb7Aq8V9WuhshnvrjAhQvJSE8PXkAoyxx8BSRZMwkP",
  "key31": "555D2FLm4kVskBtQ2xXT6WEK2t47bT5ZSHzHiMm83iESTad94VhPxfg67rSpTRAoeNPJy5MBibv7sfcsyyux5dRx",
  "key32": "8jqFobEFPUzEjGLCFuU7HmawxCYvEm8FfNSsSoDEVBFZmoTeKRwVYNvzBN5BdQdwmQmhrYaz1iEDKzdH3qBNcp2",
  "key33": "4YcSuikMAqsr7nHtE5tNhNqHtLaWCcteBe65qBRZTkv9XFSS8VvPMyipwfDtucJSSpFfckQqNVCcoRHvbgdCyMwg",
  "key34": "37YqkdVbD81z8QXLyvPE3ytKJmZ5KEu4t6d6f18Ug3vVWujjWkvJGyqTSoR24zyF7zq8qcF5hVPgZKoA6gxVTu4k",
  "key35": "58uARDzX4YqBqowUjTNLusAbmYqTGUu4pQvCHzkVD3TLSUabTSm8gdDfFuf5XXWXhyGBp6iwerNpaWZZEmQr3JuR",
  "key36": "2hJAM8xhV7RFzk8iM4Kjq69yQtVxv6CXEpXTVRTEPs26jNJ5Wm33t5hLsPuM4cF6TWZmFSmyFpiq9LxsMSp936HM",
  "key37": "51QVKySFqE7KUmMKpLjh52TjDKH2qWgADWz8D3CUgwgi78pm7y46k9QkYFErNiafEXXRPK3dyX9xKWE1YJ5FPi1q",
  "key38": "57jbiozVagZEtkqsW618j1bNZjc8mEc29b7iPGJ28PLWemPVseK9pz6Q2dF2tP6ifCa3uXoPNmnhZCzDdFDhbGeC",
  "key39": "3vcE7zatBiiTYn22vcQGzDsskP6MgLXtPnEvRYYeTnFzsXMxqVeqe4uN5rYBEVvdWVp11X4CEEP4w2WioCtSXBuV",
  "key40": "4F2Qrv3MA6rAwtaTA9FbxRYHsggsiLg6JAjiWG3fhw7RkATfy48MTR5kGyYpFxBD4u5eF8eW4WDxfrLg7Ru9GhN",
  "key41": "5N8eaByZ5YfjRc5tKvTkwqcRPgnn5RZzDxbXXzYqS6bRWZEaKEKXY6wdMV1SbxroZCvJ73UPCBR4KBVDSocFuguQ",
  "key42": "5ed9jb67kWuLti57rNJ17PHFxfg55sE5U6jYhewvqrgMzpe53k2TjGRkXDHd6fLxrC7VdrnaubUWQMNGY1vorRzg",
  "key43": "3qqmYyFtdFWTsqG923N8mauZTZv2Xw8DBETUMcZ2punsmswqCqqhcow4ZnqZotLLheX6GYfzrZLrs36QLERMRJSE"
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
