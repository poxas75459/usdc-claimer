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
    "4wpXC3kx4h4it6uTjSqZ5YxJ7xcR6PPzeKz5nHwTRLic7c8oSgJnAiLi3Ar17EHSk26sQT6Fwm5LRFbJRSufVPuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qk2CuiPH6h6uBeDFXA3Tq1awyndDMGpvdGT2sg973urT7LiFieCGL6Unucpqixbn6uqSB4KvRGw3xjHEvzkjvBd",
  "key1": "4VqAUpmMBkz2TZPexZM1yFdzNhedJf4VHMLj31AZbQNtuMnZQt6TBwejH82Pb7dxrTyoJmakZH58cZMur1Z71Sxx",
  "key2": "4hrUsfQKrdghmJLafmTzgvZPoCFGm2ybaf9LWtHJZx4bQ1hqPhTXa8PF9EKhLoWtGkAqToV9V7af1b2uBEVmhYqF",
  "key3": "3WA8rqNbxzpYA1cfmDhiSzAwPqjjVCfR9cuNgCLnwdDdNXqHRMphd1eGBMUCPZG34YV38FJGuriYtkwbJm2f25dQ",
  "key4": "5UYkK3e2JVLXB4G7Rvpp7LRXJXn2xAmDUAy3oosgLVkmE7S2cPziExyMqvWcmsKrbVj1SEmQG8SdtH39UHrvUHzG",
  "key5": "3S7gsrPnbqha6VyFFF9u5GUpoAEt7fVq6ooicZRiojL1qqca2uFB6B8YvJPCrKJudgYMLYRpoMEPwiFceajLWSdQ",
  "key6": "kzReLANYsWN38GacVuJV95Y4CeAW6vrgiiDhBqW4SkyxurGvcvtVP3ipiLoHeWFnS42YyjgvHebPQ9KyiG5WooU",
  "key7": "2XmFmxptP93LVvFJHLSKiXcJTEnJCcCsWD1z8R8iMyTX7s3Z8uVyxm79gjCTdFqfNAY1excVvq3bPdXu3sLkXzZE",
  "key8": "5fJov2HKV2TvEWf18ycod1BbHBdskyi7VJq1QeymaaZ1FGESd6YJZxPkPt4eCX9dsBUSqRDNUkHfiVw9kuhF1Kew",
  "key9": "2rSUJtDPH5wkgsQep7Jboxn5piRVmKGhJ55y91tRvg1SXVBhjfwSdbV7Ph3GJsA11qSZcGPeaJEUcsKHanRGYXuZ",
  "key10": "4ibejotmEFqKNBBPLq821khzNM7BoPvCoLwm3HjnUJjpqsEsfJxS3aZYUEYa2TqyQggGj66GfiPjY55Zu3oQm7Fb",
  "key11": "ATSSGNLjvEQKYFu7VBdXfkgoEM68XN6n54RwSyENZoXwi6EkegZnUShLLW4fYWkPEsjQmqZKZbJRs8ZDQcPeLQx",
  "key12": "41dW2DKcW94vKUtU7G4NRtCSUNAt8W2eNk2KifRbvQci6BimakqW8MicVPJPPqgKRZ9vpUyyurH6kkmWnYg8tU88",
  "key13": "5qN3Mqg3CTKAsh3U1vUBrgcRemhyUJYUHfxmJLbBR8SaPLXxpTu1X3XVFMCWYeQxd7hj7eZ8YGvckQLidwJNgfSz",
  "key14": "HbVW1vBHVoYLEBs6XxFiQUdkxknBPEADSBjHXcCdE2kjnEUPrtyLompTdY2t6YGfXWn7n4W2T4d19PR5LLmiDn8",
  "key15": "ijgA4fX5g7RfzWdGFWYudFALaq8ek1N8CYYseCpT4Vr2QUGJeWAxnNP4kU2C2rAUJhx7786nfSBMkNWgZFoVZkm",
  "key16": "4r6sM4YgJz9ctJMJZXSnvkdpPr7s1RUZJUZGZGxsMe9KvbPHkMFhcm83jS1tKVm7vbtXcE5uyvesFZFTs6fRVdvp",
  "key17": "2GtUddFyjkRosibeXgYeRy4VNApD3BvFDJZNCmzmkT7h7b3K5m5iQ39PbNfyDybgf6z4BRf7ux3rjVWfFjTiKiHU",
  "key18": "4idzQAhJrKkpYdsajbyAMib575cwVm5XJBBhfexKWjz6UKVWLUeCnkGMY3vbKXLYmnQHnFhz1X8RqtkCBDgegvfw",
  "key19": "4GcgCtVQ26gKb7XCWoDebiYYSjofuiCtQLqtkPCvRyxaLHUmKwKmhKJs8hfzepGiRXt5PeA87me5E8jWbFQygT88",
  "key20": "2jVK3vo18W5wBGWwitQQQbwwsdNwHjajZz65g3Wvp2EfESoW7K5aExPW6AKk5BUJyCQ3QhZoZwp52S5FsDV4KFEa",
  "key21": "56mNueksCMdgTtyPs2CcvWiy9h2MmuZB1dsH3xsvQiPrEJAz5WSvS7p8Fq9VzqkFtn4BRUK24yRVAA7SrY83Hmcc",
  "key22": "4Qvxi2cLnJaWzvcwWKiMZYRkvFC4CZKqpDAuugeE1e6sFsZ2JYZfCmGoCKJz54ZSPtiLqASE9oQPv26YN38YqYuF",
  "key23": "z8jx36zyvhzp3UZCSBYhBJvsLUCT7tRyPhRByVtncNaUz3aNKre1kL9oGdLz91892AA9XuiCeVG349zyepEAUX6",
  "key24": "2TymEDz5R2M53JQ5tCt2ajapRRz4wU4xyRXyyWGM9WE3zgTUGabjz2WWdLUzBPhgyWvDUFqwttCYcy88WNyE8eAP",
  "key25": "4zVLbcNQpe8GTzJGSvjwUXxwyr2FyM8EwwbDbwLKL9H7ChWV36Bt25GKc5PDJq4pj3WEAKhYEgYeFbviSEQ1q4RK",
  "key26": "3i8QTZgknUbLjgPxK3wUta8F3qJVtMYWBw6cZxgWPJT52SuNGQQEvcKptfRsrHHH7pufp8wmzVEhNV7grbroY7vv",
  "key27": "3XdopUnP5nZpnVAvZffSQAZc6eF7uQPLYfh1gviMacctL2pBgsFK1KwbCf624RtHgTyWX8WA2r61YKkqvk85wr1H",
  "key28": "5t8pMSnbBBNx54w8aMB7dkibwXVzWFN5hfvkFB1wksuKZFmkVybg7PCeFksehxnUmaAGtxMxiiAskmQHP3x7CKBj",
  "key29": "45dt51drgVXoddJnKCJ5ctaV79Xmc8Tu5SNAZuC2bHgnmLrupJNVVsYRc99NkhJSjgPhTHW3QzidhhUtnqGf5G8d",
  "key30": "mUhy626bsiP8NpqnTw6ytne3tAjXM5NDAwFLRyebPpv8GYzne7tqE98p1MZiE6JRTaoDyRy1EKZ93beeF7feQWd",
  "key31": "45TyoJPHSQpQuUxTvsxtuQ7r1fEWeiejdXPAe6uEVU9yPPksgT8yGgwNjiQqSYcR8nRaxz3PU1BD7PkacPitrJ1h",
  "key32": "5So7YASij5bBC3fGyn7j5w5nZmv42gD5nq1LPTpTj4UFcy11DjFid7gtJxfBiDuzZjFXL2LT3okDXsZEJjmJtisi",
  "key33": "2PLozS3xDByuoKVHezqUWujA3c3fPJJ3uESV9jphPABNSdjTmqhW4w4XS1dw1F9BXPTrW89s4dis7yXufcGtMcJm",
  "key34": "5KFsZUrfu9BuNQAaoZWUe8WNmNg8XdebEmUXxvu1h1sa9QYrYunWs3xQoJskG9qg6U23bJof3n27eyLtJJoTRuQc",
  "key35": "4TXn7e5wwsWBoNPCGxmXNonVB41skQvD3BZcm8DpWubBFAFHkXZ24sLt5FYU8QdECY1Sci2dnfdXXLeyMwrPNyfo",
  "key36": "WFfyTE9dmYudzPGd5SBU3NXb2dzgHkTcAdg4bj2ZNTQtGEkqfnD2zTc2bKE4Gz3Qnpi4uqDDwKnsSeQxQj9HNak",
  "key37": "GnFhs3E3iT5EcA2wo11nDBGAPvE4VttXqe3fqKj1jUdjGeigQic5kCUACY2YbfYbnJhZokcc5PH6AiRSaQhng1w",
  "key38": "KfWPQ7XHktLyX66WKLsW22EZgMZfAnzojhmqxCXghrWcb3JaorQ4WXCScU4ye3m7dDZBMwMZnxjdNDvkY5rfsJW",
  "key39": "5a37ddCPToMo4uu5xWvbdM2971nB7fbTKnra3NgHqq8NWjejY7iHHesrtBPC6ibWv4whpShQkvkrb5otnca9GZTL",
  "key40": "5NdbSJ5mwZ4nVAjGYEWcSBda8agKfZhkeZe28LAhLeARZcTBNJEjuFtvNpAPkJrhVbxQxEGQk9PYnvTQqnwzojsD",
  "key41": "2r8qsFJU4SpoR91RWtR1AYXwJBo3zR75gpByJdUF7hW41VpBuHrYFEgieEN8mZzQ4jD14JqBJy76Aj6ike7ciUE",
  "key42": "46nMDAz5XWctxTK9pA2h5UazVDgxQP3pHBdo7nZknMpp3KFySojAhoAdRPKwcssAyxR6zJHAXRHgNtDsrDwqjw4M",
  "key43": "4bQaLTFHy6S19rt6QtzBbXARGbKMLV75mrUQyzhXDZgv2Sy8Lr78BrrMEV8wkNMR5LobuNY3RbWtAmJr2kbFsaiL",
  "key44": "2e67yG27phepnkP8wziv91Ev2skMa6QRU182BBC1WghnDFr2SGEfgjgWbrqPBnBdyazG8PmgiKnRGnhf254S1czW",
  "key45": "cEBASd2LPVDvuSuMLmBxg2aXTjGzy5f5azzbVhiKRbH3mY5qNCdbuzvEZ8kbqiyudjpp3CPzcqUHomnub6S6aHG",
  "key46": "3bUmVkYiDFtyyARrD1ZgpdaLWDdL5eH9ADjXEdgtX3b4BMTPpaZFKtkYvvbysEwLcA66KApzAAusK9Noe7AcstMY",
  "key47": "5Mfibkno1LsiJBsu4NahgYksonf84SFbyY7C26b8gHT3rn41cRvYDaFoG2arLyhYABckqwLPtt7pvDm73dxfZinW",
  "key48": "2GJnnXXqhuXmxNBvU4nPqR16HKuF98VcYA1qVLLNHwJQQeg9YVTK3sa8dVa4wEBLb3vtwakh7MQMdg683xXEhkLS"
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
