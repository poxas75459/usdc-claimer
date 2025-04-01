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
    "MXbmryHWEb1yn2MfXjEA7JFTVAi4fSDnupdackKcFgjRCr9wjeXMhyP63pKZmYQApZk9Sfc7F3TPu8dATm9Tjew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g7ThaVFEL1faJ7Nj8xW8SJGPWHSGmYm2pCb5C8ACuMvZwyUCDpJnSZESwihi3txJQQrdNbYoyJwn7amsaUAytHx",
  "key1": "5UqsqXMUuv8Cxph2LqmsmEFNyNsrj6ASbHrs7VWZARqmJrywkvbxSwWh4SZe6zedCLt1M5CAKHcHkuNeLN3D52dX",
  "key2": "5LmcAfqWNSBS494V9V67Dbgt3CAbM4f5hehi9HtY3mJE38v8qFgKjPcW1sDA8Q5oMVTGafVpkkdf1cWEnYC4c6n5",
  "key3": "4e6pWM3SZrQ28JNKfGPo3WLrAZK5FFkqphTbs8EMg4Mu3zZNAJyFFA9kvzkGJA7b72Rdpe8udokNrJhRMyQDjDPc",
  "key4": "5pEvNrbwZFqfwWxLnYggFEWZ244vhktParXeUV1grKAhFxzvbx2CJYZ9biXfrVrwZP8rkfSRQ38ome7uXCaUxnMi",
  "key5": "4WuJBRhHaAEwdpH2Ei5CxZA3Ju9zLfMvqy4otqFZDyGLsqWtPi89ManCNqFVuRENSPKqj4Nj2kmKtg17Daz18dvf",
  "key6": "TRft3QXmYqaCnEdnoFQ3cS5BZPR3RDwmA9huNdrzZZNT2rD7PTQqjpy5o1ebCiXGsBpvjV913ej7mrSWkFzVYNN",
  "key7": "461HJDXMVEo8XT3Zx1ZGUD5b1oTP6JvpwfnzhKPi48MpE5K1TGdkVNcVabvnH6yL4pdewTLLD6HA79HGHgpwqTZf",
  "key8": "jtHDtRcVvZpsXh5nKYBNUT36B5XbtoUiTRkqcBCRvYZSpSTbj8MNNv4hD1oacxABf7P9bngiK1B93WZ3gVgCdUv",
  "key9": "5E4dnXhuqVvaAzGEejEhoaFa2Tz9JqfL99YuwzivegkRWyTTNXgh7PEPs3i6QDJMKDzAwNqvAB2Dohm2DfbwfVXR",
  "key10": "49xp9rV825BkMZ4vsysxc2WcQaMqBfwqjwu4PB269uVTdwKj3qX9AHsDz54G89bSvfP5XoMtTaYAj2PsUf5rgyXi",
  "key11": "4HRtn9bKveoc8aoiYMLP38eEzpovpJnwLZb55oTUmiSAU3G7LAfZv8oV776NV586ZUJPoPh5Ah4T8baFES5cmP42",
  "key12": "2z7b7qnmaQv352hHDq8KhdQUeivnLHSL9s2v2Arj3ynEUuxMXDQTd6qiVceAcQR7LL7snVKkDpsYdraV8RefwHMw",
  "key13": "EQrgRrqykV8xHX16kDaiAwEkT9kcxqNiCAiF5KtmGjmxTsA7mg29B6cpThBttMpUbTk2mFujKH2ztnX8pixzrFN",
  "key14": "4nTi4Mhx7YguLSS2KTyfVPErnm74Y5Gnq32nuZ9BBcg3oA1EZmTMQQb2EYse3ziHyzufaVjAHdbXo3f9LMwWQr9p",
  "key15": "2VDUP9fXtJWGbFeDJaGS4XeWtB866heFMevu73ktsTeco7JZH1j8Kun1GVkr69YWuC9xa2CYutQiz9X3svRXwB3P",
  "key16": "5B2UPpwRGC8Ua8a5v4Fb93MysHyckFRCZgqAk9GneiKfdi8k9bJAouy4HgUyYxkkNdhuFJ3YK1YVyAjNXtQyXqbs",
  "key17": "aEmFP2ZWa3uYJnw2A1aBGUYB2cR3V1r5g6m3QqhnShXPFCTUVX2NokMfKdwJVaLpjxykxsHWLBQub5D1ELVX6w2",
  "key18": "2Nauy237u1RYQSY6EQvaXwsfP3VW98aeR9n3Hb1Fio3LbRaZavhcQQ57TRKLvHNUC5HH7HhB3dntKHQ5eHo78WbN",
  "key19": "3fCkKDYVMUXHyZUuoxF5hr2xmiZcHprp3j9pgKcBZQBi1QXruSFdubqHeGygESVaDYRwVcRtMtvW7traTNswCQnW",
  "key20": "jq3RpBxe8XGSJYY5PXY3vaARh6ZsXgA3PR8vgr8rZ6fSPPQTyk64xrJoreg27hb2fXeRZoiiXgSMKyUDzHbSHco",
  "key21": "2MuUaKBuWqShRmLmsQaksYnEBEkfhZaxFNqJnsTGTiEBcbAbkooMdrxgbkpx5LSWjAnzgGN7qmX9gNSvE9SH6xFp",
  "key22": "2JKakD9uH5U38UiNhVeW2iZe9bq6bCXLgymopXjRVGNW8SHE37D5zzeP4DhpPkSihPuHiewN9YreQwgjEBqXEU4z",
  "key23": "5xU9g535UmjLXTcLnBiD5kZSCD4qxwMDaE1XRk9d7cLVep2Wetuow9U2EwnxsLbJJEm8h1cA2qen1KF9qf8Uyt1Y",
  "key24": "41oQvGGkx8rqZosoSkyKm6aPzQH1sLs8GjRUjqJsBQFSYYsgZ1dx5siWwpkqhBXtNNr2vfLMZRQDcMPjnSX1WKFg",
  "key25": "2Tn8q6ecKr9fvpPviz4MNjrMshr5wHpun8Lix6KNUPe49q7NsN9vu6Xbt5LsP5rxegT48xkuHuYMKGoVe9F5o81W",
  "key26": "4VAWyYGvKPUtYmg6BeRUjjtpJMmedSk3CQJhQFC7XzbbpFRtYcu8KkEBY6sD57zyXm2doN6jrhJ8j4h7Uppve9hS",
  "key27": "2JWC37Qdde7pySrDTj4NkHpVq7EpjvRnQm4KykEgbo6G9peZ9WCk2ujWshFBC4FZGDc3okaq1B1681qdnmWapHGn",
  "key28": "38sSHK8yayg6eUC1JYHxLN5y6HHJo3PUYm8N8JZkF7wRykL7CYLSr3gJj3BTxsKFQK5eKtbv3cfFrCguZDhPpXVK",
  "key29": "KgGPgJQcSeSdcJPbFkhUnLFugzgNQ7gypA9d4mFwZpk5cyQfaJRLB3eH9kjcuuwsTVrqcxQ7CKUWg5y2LTx2xyZ",
  "key30": "4GTLPVE9jUPPtdE4RcNiENH2nzbebszV25PRiCr1ErSwJFbGrMyqUZGjVffebEwnW2HFuULgfWnrtuMdtqgrgbfh",
  "key31": "2r6HMSrgYey5L5BNe1fv6opGaf8zXHDbXuwC5NDqsH3Sx5Gbv5h64SWb4ViWFWwnVxgfaDTFfpSMQjgeGxf67UFc",
  "key32": "uX4hz3PMBk9CYonTkU3wiuFdrRhMNWP2q5EgqMevNyFNuojWue12qzP2SPxSFqJv43tT3MWmUMDPcS1kHoxFewE",
  "key33": "5DUkaCqV3uQUx9Hwxm32G48WeTWvBDvX3xAyw6Um4nHjbf6Exr4BcjmxovwJGPVfW8F6ZqgNZ6zLtVfREW6UYMjK",
  "key34": "3i6vYhU7TSmu2bF9hVesV5R2fLnNPpJ3JvJgLcngvg37QrKq5iWJVk53MBgbLo91bTsH2Yjxaz1146KWXm8Si5UL",
  "key35": "3TDNzv3z5erR1MtPovWV7rxrt1SimV7VCBbsNSKe91KbE8odT4RW6hxgXPDyzuTAied2PqspsSFTnGEoeVsY4fcR",
  "key36": "4yBeHPvwZYuW8Tuyt4uLCTz1HXfJNPcNo69eVXweSQ1ZjDjNFWYkA7eDqL6RJH8hHR24WnWpUSy6qHLLydYxuzK2",
  "key37": "2x65HwU42bFGpG78NLNYmKMVH4sWKMYKkvH3zBditKgnigMhgvzsaquy9n2fT1ADvBUiSLvZ4oWi7wn9ANUTfPQu"
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
