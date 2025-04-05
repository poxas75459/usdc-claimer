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
    "3M9BxhWmwBFHe1Ed2NVY7vEWVjsawJXa1mWapoLXQWCgkWscgQS9JDWHQAnLPXSxFa8cujSGjJ32A6B6Dy1YoAzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xdCiT26BBJeecnnVS8e1iwFJznyK59sUcgcCj4crnB68v2Mzgnh3DhXDybC2RAbFTLX16N6JF5i5p2d2gYSiob",
  "key1": "41b82TirvLBB9MtKxXcdWZ7mFLzMpG9Gjr6AwUpGLr6ZmyVmswq5UsrLW3AsVG5RhKxgB6MZfYwNLK7jMU37vCEj",
  "key2": "2mZwrWBuKG8cQquZErHLBvAvD8inBLoUXrNgYMMkW3k51nxUtESWhcPRRLmommRqB6QrR4kamhAsKMchoo6jm9mv",
  "key3": "WKpg6n9m6enf4ALPfawrjFtCd2niQKZGzcQG3G3wrEFDpAXZwqgXsCYFzxHH9AzHEZ95yZkfr5mnTBtttp12VLB",
  "key4": "wzyzSaLGp92iV1rD2vWSaDhWn3jMsf71ka2NQSEMAvDwuUjDMCxfVUvchB4LwaPaGRHTkntgDEpfih485XSBFEi",
  "key5": "htH2FBt81niH83JLw7uuD1vmB4DPyJe2NbhDhZzdBret6Cpx1Lp3Y5j3LQJNVAd6LH84QwpnhTcGaGhBtPQqWeh",
  "key6": "5D4tqCar2TRy6VrDc6DdPnH5m3WgmVfG7woBvATjgck6UtUTdJnAe72Jak4vR3UkCMbNpz6chQXVCkzd6ubnVauy",
  "key7": "4Wbtyqn36jLaoXyHfZ5z8RdMLzKsvGrKWXR4jDfFXgteDeDSGX1NmCKWsZ5GEob1vS8j1uDkub1vBJxLeGGPgEU6",
  "key8": "49t7L6YkWN6vtHCtKYYJzQxoLtZy6kx5s13gwgZfzqh2hmEUGKWyF3LXGhfzAQbNRgDKghyKY1LpyqUiqzCyCYUN",
  "key9": "3fMR18wPje4JZxQgYy3cMexQGQMoBLTDt3Tyrv3FEfETMAqLVaeBCgynZsVP4f3Ymxr2hbfR8YddYFHrdFdFFy5G",
  "key10": "5isBWMzGtYoHGAskCSvsLgMUWdLT226Z6kMbQjrGuWPVGVjKkS8E8T3vR6AVwJRWjDJ6wC6ABkRcyf7La2DmNdY7",
  "key11": "wW82AJMrvjumqm9myH9VNx1DYDwma9voBe3zMT6rTHDEfAkVnGo9JY28iN5MsLqfkJW9BAsM2MSWy7eGYzc9JDn",
  "key12": "4UBaWkjtBUpjAHHDcEqP2RRgQ9phHQWN53TAt2QMZ3ERvcTV7DnVHiVowm4TEFh5JNedWrrDPayFGs7mzasVB92L",
  "key13": "AWi5WkzQdyj13zy5cjrn4N9RwXyW6C3DdFZW6x44bGH3LX6dVZ7D8jvA1XEqkKaoYPoBE5D8xfZVTvrc8mommrF",
  "key14": "2UbaY6iAQbx6Y3Cc36FiV2L29x1STnoZfb1H6sqoRiVVkLvPGiYueBQxuYEUy6mm44Y3QxvxUhUtVsUXUxHqM2DD",
  "key15": "WZUsoNhF5uHK49BwWR6qBBfVShbQBCkigY8QkRH62sLEN4e1QHMMwKQPXC55cuShsitWbokD9SVof7YxcxbeGao",
  "key16": "2pSPN1hsAnaMUgWfUeGjYEDaugMwNZg4FkxqZdMDyxS7KQw583bi17pa7TEhKCKcJHLk1BCmRoL2vGoP5smjyHDi",
  "key17": "574GnH1tum5EVQDes6RdVzjyD44JGEXrMmmz1oJxUq8ZxkJhPA8UHFZRDefZa736c291DiVuDNryfsNBbBcVR389",
  "key18": "UjzwUZMgMefPFTib8ii3GZcdheD3dqYXNjMhHTYJ7Wz9FFEeBT4FebS9GRx19QcBixxEAVDTo9UyiGA4isWzuDf",
  "key19": "55WS1yBcmKGD4rk8UMwhXnvCcJVfpGitAAUjE98JkfXaevAyWZwyT1TXLaYxaS551LsAgFWn6jLJnDQ8mnqF6Wb3",
  "key20": "JC3KxVuQrqHyff7QxuLM4YLfDiii1WrVALcgnDk6mY8y4yTBJ94nd71eSUbEu8EvsUEvjyaufSnzqvLyGgtyvVQ",
  "key21": "41pmSgeQdT2cCd7aY8ubE79ceyZ2h893n2pQ8BVHaaJZkKuM1hrihrjPgQRBQVoTnxsQWpYuFfm5TgiiJAU9jrrT",
  "key22": "5Z59RAJigdzefckEWFZwwHSp6XQgj64jTC4f3KYSJbrtgAbcvT6hwbpTSMf9Wrc3B7WNFeBGYz7YS9eGXTmPgkT3",
  "key23": "26o7TGVdsLKyXxQj6GzohxNr8WDrr4D3314EWSSbt4jcg4g6iRpmf5KoKntU2yXDogX9LK5NvhdaDzsgB1CEb4MD",
  "key24": "58hALXM81rwxbCshrZyABwc2KdHbwLnzrpapWhLcDG7pdxsvk6wn44grG1nT7dPFDT1vrHiTPr2FGeYwoC8h2GRi",
  "key25": "6GNrSZ3oW48H4i8UDJX4s1URzbW6vZDxf6M264vo7gxKErZxi8F9PcpawTZwVod3kSqQqJXrDJQkN2dVozTamGR",
  "key26": "3bYjSpB44aKNviyxXQHVd7KJ5f7oWDRArBcpztnAKCHxNVsJ3cMa6L9oYwx2Yv6oUg6AEgT1epV53xktCvA2zHnR",
  "key27": "5weCFrRgwgCUTXSrvmZFM7Wkj5otsRUev2dyPoTGSE1oBVQQgg73RxKV8R7wvpDg57vRyfTYHD1HTuf8XJPW8cz8",
  "key28": "5WGswPS91283WG7rKfAyWErNX52FXeKC4suj6tFXqgwCQWM8fGf5zcCnc2sHNfHG6t2mF569atp9YXiF5F9edCQQ",
  "key29": "2vSbdBSKyCwXMMjAYD5skadrwCTtpbwz14KZrt8qMt3dqZ75cj4sJrRrWz3d2xjsk8u6dpDcxTJ7qe9toX4ELZPs",
  "key30": "51vSEQbRTW62fXYG2T3g2HRFmRKesCfvoFNRYkZtgibHhrQTeqtPwASoPMZcUnMnLYdjiBtuqFx3XsNoFq7Pahtm",
  "key31": "b1CGFkJKXETq6kd4yhNMXkBUv3T6sE6akB4R1PBUXA42L86kipywy3EZKCubqHyikQHZQ52VY8FmusLWLZj82rG",
  "key32": "4aPYhkbNEMCYtD3DUiW7fZJhoSz8d2eT8CqjuEtSGL6b48eFyx4jA3Ugr5aYNdMSzzR9NwQ4YuLEqnkkpPcBeiME",
  "key33": "4JUwUjGCC9Lf82askqEDiA4VHs7bAZhLv2Tc29cR48jXgipTSLP5Pk8hwo7fcZ3odANnx2CLFnnWNaZiHdYyXygo",
  "key34": "41bhtJq6u4chZ4sc6FqiQ1TC66MMCdsgq8tucnpCvXv4qW8kQU2mcdtRK5L4c2oRXSmvJfQALiEPV1DyJy48imfT",
  "key35": "4M4wo4vYcYRtUWH1qAuL4e2XYL1sp6gyPFdBjf4p8KZ1giQzCMp7YQYdVokCBxruk76tUvTavPiCQpPkTj4wmUta",
  "key36": "2ThyJNha8Dv2xvVe3BgQSssmsTcqSusvmPwUrEr9ZnPMCBWTaoqMxymia2gEfa6LwTpjB5c8W514arfCUhcWdUDL",
  "key37": "RxifubBHWEWnDZDYWuqMWUi9MSthkDpHgYZkyw1x4xyoamQHjixyaD2tztpVSKXvohJgozGXLAC7347ggSRdkH5",
  "key38": "2Qh1fXiPrSHcU68rhsWVbmNpQFLvfb98oXBCQiWme45XHvGL8vUf6BSPNzQXAW8g9dNXgrgRLhcnrJuTDt3s2qdT",
  "key39": "54wSwGsi3FRWdN81Jm9K9CbTApkbCdFK4M1pE93pfy3G65MANqZnXZpqMnSPfGLLGN36JFPGLwPsRJfe4oZtmEbC",
  "key40": "5A76rdVgqR67zAQMcQXewrg4TZNrpwbEZWVYbzawyonpzBNN3VvXd1Q9Joj7gEhF3ozMsudpkVcSEkA44xXa4p2m",
  "key41": "2Qq2DSDCVyaAfJgbM6YDZyCdUqtLSiRee1ujwun9sCttbk8hWR94RtEy9NDwtRv3Qr37FuvhM5EndeKk7Ebhessd",
  "key42": "yvv9vNEJih4WQjrf7spAq2YpVZPjSW6N64Bq9MA1mcyR5HbqNtCvwC6CpzFwSrQ8rVCJM24Va55ZK9MwZssAfZD",
  "key43": "2VVSTaS9TxPsw5PA2Uxd5C79PG11eURsQigjCTR7c7TKZBSCsRDtYWFFXCkQXwap6KXuJZNu4cnqjJWKJnZsrgAr",
  "key44": "4rHqsMeAc2G8wb2pJQMMAku5sDD6KCqiW5rnhxHNcWjH9hHv9smeprZBKYfumXg6jyHauV6yaXnPf72aB84aAUky",
  "key45": "5aeujyWPpbkSQhqTLrtfJkpfiWJv11My7RybZ78KrigS5FKPac3b4izkANk258Z2zchmxMDT3JgSNc9nciG2tZgq",
  "key46": "24in4wJMEj6NaKhhYZeLGmVYcrbccLf93ZhBcz8SiEke5VzAJfzrzEyiM9HkexoBqE2ut1VZL962nYYvHrvoiLxZ"
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
