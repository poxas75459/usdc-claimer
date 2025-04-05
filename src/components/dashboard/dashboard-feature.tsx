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
    "2JNDzrCFMxyu7J2Ui3FEpyPAquBMDmq64vmpvpsX4vtdPezuCbqab4ERbvdRun5sXGWWA7yTij9vHpFWBVTmnHFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQ8YqqivAxaKUMaYKiz7zCoqrzip6nbQfKqiH5EQH63kTw1u6nnbWeJhjSb47gmsVBgEJpLMxaZTeenZSQLfoHs",
  "key1": "2Gw3QqoXSQZskTyvYmhMdwDigk42Q3KaKceV5eDtFu8tUDAxFTWjcDtdMzWY99TFWMngN6xXSdExFmPLgce5hGkR",
  "key2": "3wyWWZj3V6xuhegWuqxQ9ZxHne3ZHVrAgVVajw91b1LK5ztVrMc9wQZ94oWZq5E6KHpfeshf5DBRPtuYgFsTET5E",
  "key3": "66nK1JfyDZUApWUJhm3p38sFK7dwEn3pZrgk7a7mWKtTR3TPUNz6W29edLc2vCKdR1AJJnXXicpahwNYR96eFvMn",
  "key4": "5Y1WL5fTqcYKNXFLsNgGSkGb1thcbYgmhaHxPHg5Aqg5r7wt7ty22scN7owSQ3nXZEkdoXx6cUAAc8VvYReQCnLV",
  "key5": "yh5VipLW5GYxG6EfdvHMgTh1sumEE1EJC1aHqCLzTEhSCUgwBvie3yPXDow4bYCTgeboxyUK1wcxhkTtkcWj8dS",
  "key6": "oVf5R91P3DexitngepnxmjXsC3ixdkrLDWFH8vz9De3PK71qUSoGA9zPtbTFnxc1p4Bmd4piTWjCVEJs36KWZd2",
  "key7": "3JuoBQd31NfNRggaRXmYHXgENLmumqDiXb3nd4DkLuscQsjM5iKspZePNcuUzU8MtcGv5oc15cFV1Guz8S4CCNzt",
  "key8": "NRMfwGuR1WPqdPdLqzUeaKnxJ8uLo8RG3RBZxWEzBnTHAbv5shojATJXM8h4nSFgZaaMF87XGGR8ffN4FWQgSC5",
  "key9": "3i7b85uQZa95pWENNJgAcW6PZPddoQmURd9BAg8QoDHTiuqkG9bstzkkVJfvynHAtYdnbZGsecigUYZ8nuGNJPm7",
  "key10": "5HfGW8YcNcmFdJht1YimNe93n8SvxHKtuer4FnCRraD9Qc7Xwj727YS7Uq5ZUqZPBf8FKPxRCWQumoRu9A82k639",
  "key11": "4W46GXqc2VdRftE1uALptWG1LD4rsfhDC5UQVZYx62pk3bQ7MmCYTG4srn4Hns9pzcMZ3FZpJWWujoym7qeurMKE",
  "key12": "3iy8H49wDtLadkqxS4ARrYkaPd8k3ZE6pHhiX7DYSqz8RTKqU38dVaMASbnmxgB2vFnQTZ1BeyxBvSsvGo7rjRVc",
  "key13": "2u5KSDCfRKX9aDqwxoWTtAL8BfTSvaY7xmw9QyBkGdp5zfFvr2P1FtgW68MWcGRPD56zGNzNGpSiKLVKnyzMMPJs",
  "key14": "nMySSWLpjsxAMqESHbntL5uCe4r2WcATZctFr4vQhgb1nb6uVd3dWaqiFYioiSmbcAs9Kxs9H8QbvCxvdRYTrJD",
  "key15": "5pdtP5bq2t3vFLG3JSA89XDkDrnkTL7VDEJGagZ2MeANPHfdoxaCwxncHEDYU5cErviDMJ8J8v3VFyT27TrvdS7M",
  "key16": "528qCdNE1mvTZFs9TVEHVabtzWwzx1jNQrph2BKhpMoCi1St4EJYsNvSnboLZkHv3qkivMmygxqNpUk8kGA6cFMC",
  "key17": "44FBmxVJ3GX2jaHXvwkvRbUisjz3ygExqZhsd2jExdPsq3MGtnH5G624bp3WMttQTmnRuonzem2KH6sBezPHXceH",
  "key18": "2678WKfRtjHJHkS1XFPPK6G3cbHtbBRMRSiS3kfyGCKaSWesdgmegEqHJob9FKXEWMnMncDLayiHK6Z7qbjm1ps3",
  "key19": "5kGSGhxUbaMztZCr3SbtYj8uaZK4T3nkpjXqfJNqzjS56sftUZNSG5WTBkpdWtXZYadNAkGMZM2NhYhHjbzgzvRv",
  "key20": "6bg3tZNsnHkj8X2zcj17iEhfS2DicmaWpov7aCrFafDsuGL4DTyuLKEYEzn1hhvTEXqiVc8AfLxpWmphssUxBiZ",
  "key21": "3E4ELyGpzZeRnFMhaJodsE6EgzCvCSWJ5XzWKc3uvyVU6RfLt5XDAjeyCFx7vLfadZjjHFaVvCWnf4ibg7y9q4e8",
  "key22": "66ZJ4EQBAYkh9JmY62MYr9ZwRmmSXtDjm9zduhgHfKd4u5xVUm76dLvrBtfs9qCj9tnbhDNxckEcVQjYGM7kdnJy",
  "key23": "4G5qiaCNLtSVNbGXYuj7mYBntxU3VaRqFjrvbrpqrF7xUJsL132kVM5Y5t2uKEA6pEHNxFBoLvhPUbDpDvt6n3HP",
  "key24": "3GfUg7ZC2pTSS4fbFpbRSwpNQaT6ugKJE9WLdRufYDXnoYiXE1T8qcgNKoJ42pS1tQpPiwvK5EJ1pQWLmTdXULxn",
  "key25": "25Noow7pukiAjGVt5THweRDVcfSgBUsaWFc3nBX83TiALKn55mUZ9BVJJzDp8QJF7JsaGBvsPW6ZhvQeJiFiuRsV",
  "key26": "WifwGhUoAkBuVtCCou26LAJxJevjABB9EjpWd8fsrDhmekRR5ieLjzR7HxtoGT5ZbAyvUatnXDmKW7GbiTA6DLN",
  "key27": "5PczPNqhWkGJ4iBnBGgVwgVsF29ipBy8FgqrKGCMZmvQZ3iBi1gCrAcX9JSgTosar7sDDaeyxQMpCqWafa6QRcvo",
  "key28": "Cpq1Vttph3AURPkgWfbMbUDEf9ytBay8GxdnvevczLxwQQ4PafG2ZgMPNzZ5f1y9rTs4H3FMKMtKLkyAeTP1oSA",
  "key29": "5imBhLrsCcnnnm6c52ZzBeTmTuKh13L15fPxsedtQHT2VBAagLchyEJzUpXvHovXGJPSySYpbPb547yvLmfvuxVg",
  "key30": "Bdq4GDRhKdUT6HyZNXbs33USmjyceDkkRSE3ENgrXDhdzQJhL2VJptf72fm2tfvVEbgxTq5mue7ZuC7yZTjHCQo",
  "key31": "5451Pe9MxuNiVAe64rkLVNxamvaudCMQpGKaFCGspLVBgqEeNCDNiHfMvvqDpBL8xuoathyH9ZQFhNUX2BDmdmGy",
  "key32": "2kZC9Kn8JpX7yqegea3grqcTQaT8GTsPKz2Yn7W5UyMADbfQ573WMu1dTsAv3pQXjqwiVRrt1EhJi6GZgxXBAMcF",
  "key33": "2ae7mckqmjQHx9eBkTG39rbXcYRWbX6msmJUK78D18cZEJ8DBLzgK5MiCHLtBNsDfgbZ1J5qz6uyuaGQ4Fq4We8b",
  "key34": "4zQ2ozhCUXKzojtJpWNSu3Ekcs4yBC8Q2q2CJTiaWxZHZBAUtHiN6ebyUj8xequU24MNhHxpkMW8F43r3vo4yo3",
  "key35": "3LRaUXr4FYWz97ZMnumcuJUp2KA8m2nuJiYwYHb1h1WWD6GKp99vQbrS4nZ61d89qnRvqqYM98gbz66BdHtzxjdA",
  "key36": "373Yqd1WhMFQaUPuaKo7gAVogFXdc4ZkjGYZdxtpcUVAnFtnwdaErK7UELtKTaNXQ2VEVMS2Y3thVer2uKhA768C",
  "key37": "3QwBnHBaDMymaCZa3crZYdkaRr5k1eKo1ezVaruiJgdLAYd4yCz3y4m3uaBiKEsAnYQ764BcEwsb7UnD1cwH8Rt3",
  "key38": "3Typ8CbdrTqCj4YxZXL9VymTck9T65bDkmncQRQ2zC2tVhhgACZYqmd5K7NqJCYQGE4EhNCSMEVEMYpHEUNnqPF7"
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
