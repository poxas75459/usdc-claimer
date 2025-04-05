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
    "5yRscW4dyA6yeNcrp53U8bzifkoWNda6BBCAWCyJttLQghy1K2ZSCSKfEnDntmfgUN5emnLpjFVFoC2RxJ3pDKpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAmJwAqYBdKWN4qpzdnsV7f7Uz9Zyden8FFNzdXN5mnwZ9LMRCWoABzgzEqEuPmpNaGWVekPhydqNYZvUH1GuUw",
  "key1": "5tExsBsynYS7Tgb5b1xaxejjTPiEbwTsnJeCSwfHGD3QW9N4sBkfTqUBQuuxzeBLDxbbWub6F8G4BLXRbkZQcGDF",
  "key2": "hAK9PTxBc9dqhLrryVrnpHJoELbJviCS9NN8WS4te7PuPXEEj3eyKCd4378DUhdjy8jZ1uJV8ox85rD7tXBLtHF",
  "key3": "5mQ1gvqwqAAbTeuwDMGgKEL6mcZCBCVyUAQvDnzsUbS1ohiJzf1yPdNnwhsrQiXptdscmjTnYwdDrVxHq64ZSDAX",
  "key4": "Y7XXmXjk3YpyEa5bsbr41gY9dWinAzyRSpBDQgUGNYXdjAqMqXyeQhXYGJvPFWPhFPt1gfDf2natnDUmUoEkqoj",
  "key5": "pSczLZWjQoGkqtg8YixexTN4SoGA1SWsNGjrFGECWdE6WKNqM5EtSNmr5GXt12c93m6di7fH7d5eckrC1kfM4k8",
  "key6": "4DQxDemcyuspdTwfJZAz2Pe7ma35Vqj2tUtdRmm6a29VtTTRSqeWWjWtGNB2nduMJmfYBuaN3RkH1JbmxwGeirYC",
  "key7": "5VeXeX8v6Zk4rB6oXKFn4hw4VXXHd3KUoV4xbfdR8akZoE5EDpoQ1htsx94pZUT1bxaxqcR99BnM8raZq8UHdr9Y",
  "key8": "3N9TRM2ws2nH6zzH33RKXjP4VzLBkZ88Nrgz7ZSqrJKDnuPHo7HGq45BzPVS9pyMSwrrjBkv8THdGoDB3g1YajoP",
  "key9": "7rVgqFn85PEX2QLFFNz5ob8ZfjL8LQsWcpWtNPWkcvcMc4qRxcUJyJ6catceyjpgcraABMX5awTTakdXFh9idFu",
  "key10": "5Sb7ZxDG7G4ogxeiy5skzK5bdMnTYurZP1hMzYTCRxYxDF1zzmUEWmztopsaKziN6jhqBVCLsLqJ5pqkRUA3T7US",
  "key11": "21jpAiZrKtaKwbr8sEsw7YFSGwjBuNf76ZUc6rCWDfUqwVzHURzT8p3ViTkQF5bwkxPHtR9qdUtHbwUyGyuySapK",
  "key12": "4offvVrj53Zrx81tsGf2GZqxYuspzAqGK3WhEXSEqMb2RqVhcbi4sYe29jQDRpVidYMmZbU6yt7Bie1Uz4DHgVYh",
  "key13": "2RAibkoDHpVtrMFLWJirsYgcpETCKjokmxU8CeLYmeob5rYwe5cJaTxAvtBRBKwEcgLtpqqFvGu2degkLzJGygeM",
  "key14": "3g8FvAepog1kag6u1o8pWA1gTZ4get75jriArcmfttgAFhizoUqDGDSdF162cRZftaL1ynXRnnAbw16NMjAZvnek",
  "key15": "nwN5DCe36aWL3e8qS1VzTSF1pvQ1RVwMAMhrCE1onXNyh8q1rGxg6kXs8VBiGBH7XqQN4WtphtXqRF1NiEnSMVP",
  "key16": "N46FJDjL47o2Nrx5xc1Nz4a7Xi39CM5sFxCgo9CT5NQH88ZmrzND1jko6Vjieib8bfuRivz4oRsdT7YubwvMk6G",
  "key17": "464zHxqnX2Zp4xFYkce4QCJAd4WDNiTzG83UTBUxGTzvrVGKeFmDVJDowB1acNKgKH5w966FJtYFxMk3S34rmqPx",
  "key18": "2ziWiFMBigxmisRWvKAsuRcFGdJFAPzq237aS5e6ZdAZLNjcjtksga7yuvMqZRSLZQ7f23auiwJXeacK5CyBBy77",
  "key19": "5ry2KpWJfZN8D1KCU5YUnKtmHYAqwNCYwjEKBdWQ162kuXXcmPcDAkog7kxRUTdufSue7r8G4WhERwqDviCS8WXA",
  "key20": "5SgEqVE9n6UMSUS4PzYygBmnhK1jbRKnVAQcrGYWHhpU1XFjDRDSJbWRD99KdrnatCTZzfhV6mXmarcCV1uc54Fu",
  "key21": "5v6sTTgdLgJzpHfzNwqRcQZA35ACzKLjHbQ2wbMcExQZzSuW65ddonEk6NVCFgC2FcuPKW4cKirp6oiydSyxt5TP",
  "key22": "RA6NzvFTJQ5xQPtaxJeyGVmpzKguid8SB5hPp3hdaBa2EBuy1gAAZHL5RYE2vomKFrWTxSWHov5HcNKdHsTvuyA",
  "key23": "3A7fbyjBjfThc4fLib8gsEwh5kFSeWgRXHDXZomrdGo9DPLRa4PxTcbjQP9smXKJqn3srjSukdkX4acGqF8KAT2D",
  "key24": "3c9jSRpjM46UgkaBqyQEwuv46kWn9xqCuTYEJRftqMtFGE95oUEh764AFUPsLpDeJnujC1b8XSCaMzchjV3Wb7UC",
  "key25": "3LiZfrvqKZyHFKBqwei5Qx6rDBT5UHJW81NrixxSHJZmQzwRVgRdBdymzdMHFwQve7HgvSTCZD1CaDKsGJUxboDE",
  "key26": "3AzpqetJ99GB6N49YJ8NaDNrLaf5tfQkPQDYCvTCByMuReYxqZ1DPENsTZEDyjnUCy8DSFTZ6yLkm8uxoGAnocND",
  "key27": "3Lh25LwLBthUbN5VksxdH8Mc9JeigiGbDcYaEzmU6fEVy9JPSAmHYu2kMbR51FzPEPkAs6BmDwmQ468npZ1XrB4y",
  "key28": "siJnTom5uj4hf7EdNePwZG1D5Fi6cnXrzajXt9Wku9B1EPaWP1SfU9Xvqq4kGjof4JfanWhKB7gmDhDyT2VjJya",
  "key29": "55e8L8hDtBqQgv2APpMWwrvcQwKqADhBUkVhDQRv9e2ikY9MWNvv1t5GDvqqp8WQVpJ5G9sVj8GA4UHNPNspXDbW",
  "key30": "jXgVrDnv9oryBCYNUusdbKEkZVRuXyuhxEVwatYikWKomTYnyauDdzNeBP1M3bf6bws7n3iiXL6aF4j3YkBYnA9",
  "key31": "zER8U1Wji2sugxKKRXcjN2ZcZA7iUMjWkMV28oNCPr92xMPAnZ2ELhYiUdngL2Ue1X48XWHaTWkkNBYDB5JK9Rh",
  "key32": "3zeY6MdRwgQJNWq1Jaa59g5ttYbqbUUymSs1TYe892n7rQ3ieNQeLVGeCERroky841yRrq8ZZR42CMpQY53ts5tN",
  "key33": "BBw7NVRaEsgXTLzcStCUY8RZBG8ZhyFrtWEKJaZKX9i3qmvbLSv7ADfxHC4FVRsBDW6KCwootiDY5tWbo19StNv",
  "key34": "5Xn2FWkE2xTqirctrMq6fkzJB9ezAyQtVvHqMdq2NPyDrs1TVHgVcHRtvHaPtp1Y6xTcgCafSFnZNNHLrnaeSAf3",
  "key35": "22WNyAhC8VpUbvUk7M3dQYzTowMGczgxBvXjbDDeJMBbVW3cgnCVP6vHpk6FWiAYnh7Wj9v2STrH4x6Xrher1v2Y",
  "key36": "4VsEPD8V2PUqy9DAp9aFw8m4782rPuSqr2hKbrp4TAhNvd4whtoVdiXRevXRSSTtESJWYSuUXJ9SF1EmTSnF8qYv"
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
