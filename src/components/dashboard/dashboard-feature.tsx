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
    "3B6rcqMMTvdZPv6pvKWtgYgJjJUT1stjx2mTeH8Tu2EJh9anKoh1teUQTfact1gkgXXuhyWMesp94DZG7hSy2kJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3xkRo4YgeJUFFrQcUdKPRJqdp9vs7DuSFPtcrsh4MH52BLB2wXFV1aH3PkFtmGiL9z4huQ29PcKATPunBLRYgr",
  "key1": "2Wh6Gw4XTPVDr1LzJFcmTTHqkzqhU3U6eERJmZSQK8Cg5ZRxodLL2wRCtWCmuJ8KJFR8XX5HZyfHqnafqY75DpXH",
  "key2": "4zVtqLSVsUXg8WxAyLLDXPbtizVLSLEXnUMkwAHKJy33g7bYqHQAp2Ty8mK1geg7ahnuZmBqCH6FMK8g5x9VZiNE",
  "key3": "3y31CrfrU3NEfdSt18LA55rhwwEf3M7eEWEZpJqcgvCF85eSLJ3qcpLEwqx5wQCTPWcPXMs8vhuux6soWaBxN5cT",
  "key4": "412JEiqbG18bpqzyHX3aKQ9u1TH7zBXELpVPkGu1dRpPeGAKMX3srUKL8JtwAwrFUrqPQzuK7x1cR1PRAWyJtdhe",
  "key5": "4g8E6GbrP9k23AK8foaet1bEybJ9KiAYFypbjEZW6dQo8Nfk2pJuvAERHgfbXcZXH2a2RU6jvV4RdHkM2ZVLefP2",
  "key6": "2d1dq1xzXNYNELLAFy2pCgVLDt13iAM2LRCNRi7VJzMAk7S8XnGsHmF9zRkBYA9EDWfpJDNGUvZJzj1ziJC1PciQ",
  "key7": "6ACwUUVy7CgPoCQqoCjovpJajZjA7MdvqJPm1scZvLBJhrXMbDuMj4oorFKCmRX9Ajgp9Hm2qM8PMui5DyUH91n",
  "key8": "pTHmvMKPvfvC7yX56QDA9PYimwmaiCKj18v3mGvxDnBUjYT4TtBtrtpFgyT44tXcMq8dbfNRyEjpF7fZsCvhzfX",
  "key9": "4y169q6XCViuoJKnA4NBfcb5qksN1pyXpyZqrrRNbgHes86JBGDWZ6dhnPQpSXpCPxXHjhN6U6oFvD6KwPgeMocP",
  "key10": "2DdnoV7tmv1TssHQBWLjk9eCx6Lr3LYBBs6XUW8fmNUbin7YHcxxnccHpR4coGhNXNwdYzh41jxaJuTAmdEN5fMS",
  "key11": "5ZgeMZgrxJn2VA262LpgfuhtSCfgqd94Mqq1y9BiGsJQZbcUUZZkWagN1dwjdczT9WdzAVo8mQ2ucotznhVuo16U",
  "key12": "aVkmqQJ2S8F9MV7SzzwQy5zZmqAhcEtA65ypfFzgovoNN22HtHemfKS9oc27H5QUduPNMRQ2WzM3tf776XBQPW8",
  "key13": "37ict8SMTDag7ANbHQ478b1Nb2iq9SsivSaB77chBgG6gQeFxoAhSe9shuJeBuvWyBwunDJvexrUXY8NGLPmTMGG",
  "key14": "3d4n539v7W6fCHYLbC3GpMyZg7ERRPwButMGwT4adEggo1kEJjLnbBwvYt4uRJT7wzxdcZLGAhAQ92QaZEWddeuN",
  "key15": "41LLXyNjzw6cojNFyD2TubUFqska16Z7rpiKB7YMEHAnp7b2D8cPtaEra1sDwcqnzEwCvziqKC3qti1CuLW8TzFc",
  "key16": "DJtd5RrEYUSojDWAKz3bRYWNm1vDbeqc4jejSiX3PzMcHcqi4F5C4UE2ydwCHz6Kgy4AWAvPR9vKUchvvAFftUm",
  "key17": "4r2L1xJ98bwjHGRpPf2PCuMztnWacnp5coDnjh8PUCaBP7nTmwstB9cY7pMae3D63BaC2A5nZbg3Eu6BNr86gkUw",
  "key18": "2iqkQm8y4oDmm5TZh9yFiFWmp2iAy6BrSgxCzzwvyyiAunJBqdy6o56AsLZQenhX5sxRN8TRgAwgSK3FwwBqjAwr",
  "key19": "7tKtzCmwBs1xjRDAm6AaR7yvYSPNADzKdZpHY2xLP5JhmGVVsjdPmC8PPWYXSb9ZHFyHM9xPxodqKgdZx6bnYMG",
  "key20": "3wH1ocifHiCYVwgeFTpeENWYmfWNm2DbRKQNEyLXqVgV4RfkZAMNKpgHLnzWFq3DdVWHAhuB78V3gydWKA2CBDKT",
  "key21": "eo3xe5rWsKjFtZKVs4PRAqydHU7XZHgSNFRvvJyjiH2rSeVVPSdkkBnfRJSoiTVuaoEitsY847CbwAWRrzeZCK8",
  "key22": "5n38bsSKhGLuYNSeaaNfiGZ6Ly38L2yd3sZdwsjQzJK4BoJCM5SUWASYuZ23aoufhokmBPURujVzMjZmbEdQwkfy",
  "key23": "4Nj4Mz33GTw8C82dkxpERYXotqmkEeuZ5JRdkhDsN1ZRANixtKqwvwkVysajsk9qof74RxpBxaPMWNzyQv81Czs5",
  "key24": "JtgJWJjUEFVqUSgWj6sw5xJzBknwWjSoEgYAbtaWiAwq7XYrDvupCNcDAd7Xt8poXxpUYCL4bHZX8CLUG5fCHCe",
  "key25": "3yDBuiYBFqGAvfg5wudftzZwej34pCgyFniDNfsqTkrgT8bLKFxA4HwQiWG9GUbDuneW9tPGYrSF8CoZQVUKmr1F",
  "key26": "4gSsVByBPE9GE4u43Y8vmtT5MVNhg3hAjfpAaHVWvEeimYsKHnUzsena6r6Pru3XRWXN7rGFxSkYNZVrnLYDUNcY",
  "key27": "G9ZQhLR8U6MWqXEQS9Zo5K7MNQjAZM2iHRzSqh68jfZJzLDHizBgYyhQGk3pvM7Ruwen8sxvhe7y7wJajMNSm6Y",
  "key28": "tn44xBsxEJaiiqA5hCmgN3Mb6JT3QHFvnQtMEsdvBm7ae2vrSrM1K8PKVy2mGhr1VSFhWd4WQDSsdD66ceKg7YR",
  "key29": "wBbA4VA16Rdf7EnKPgxkc8ttnoowLePmZJBfoKSqozMYDc8JH2787A5MiRsUazARH577bbzVdUX5g59CRCZ44eg",
  "key30": "zwH7rr6GVRJMa53gixrghgfgMer7Qx8HAWgiUa1SaCFHnnPhgJKpUtrNTJ6n4eAktYb6sRTuyd5U2SoMr4aFQeU",
  "key31": "4ouH3MF8spP7ZSVkafFbj75sCaTpBr3HoAvFmeTb6LzALUDrsbtXmBz4rT1BFYSJy1ZcE62SL86fyM8bb1LsxfQc",
  "key32": "2BgVuyvKQoTs2RWUorRAW2W2EjaEsSoH1kcT6R6LpViZsRXPFyMszL4NxtBTQF8afNxicy9LAF2ixCeh4LagCYt6",
  "key33": "Pu6ckhhrHq3nfdixAvWsMqKAxRfHwYpBaQSN6dcrqoT3EwfBFJX2QZxFPPYs61DVys5xUS6ejx2nbJeeZPJ8BSa"
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
