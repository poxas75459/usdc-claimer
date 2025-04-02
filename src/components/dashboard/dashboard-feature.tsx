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
    "5W7yew7MyJpdyFCzB7LopQHFY2G1gz1dbETigZ9xtirufB9bxgT692eiqmx7UVZqymqfwXwWrFP3eqr5RLeSvXSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tK7U6CdmLC4vuVaKR1HZd6go2A1RF478da7qwY47ZtjhUraZCChEjfKW2LC6UUcpZMdX5uBKfpLg74C7QjJqkFM",
  "key1": "2gyH4FchmjiN5KrxJnw9wtrw2cL6wb9j9RrMomsGkdj42FLZspbzeEVRvYFwdmQJArB2qWXmzceVpzi2oWqDNaYU",
  "key2": "4SPkpDssWYNi8JFuW6YThgT7KrPZ6zUBo84Bq5k2eRFZP6N64bWx5GmbeP6NcYNVamou3BekJN15UBp5hZDwubtL",
  "key3": "2PcUj28eJfepgtvSXGT53yfkHfRctrMGgoQNtrLNmfYapzQmFiTZYx5L4n6WnseKZxeJrfSJkuQsnoyEC5oWEmq5",
  "key4": "2bpMxEzbmGRi8Q2Ascfgm1ecxPNRR3vMrQ22xNFPYd3tMAApY9saKCuYejTt7u835eCByqGBqCwARwJMuEsqgVxf",
  "key5": "4fFDBicZNeGkaz35QvHc61dgzTdXL7mQtAjtgi8CW8kJbJ6aGhrjMkBr9Cqp4VnnMfPTFG3ATJfCKUgXJhPmGhMH",
  "key6": "24LkbjH3Fiqh5MxWAYTUgSvJeGYg1aWfreY3HDviZ1Dek2GrmH92SerHx2NafA62mb4ruZb9aKKHWKLHzpuFqqRQ",
  "key7": "2Dy8N3ErWUdwRXE9igyP1mGSssQy5jFVzoAuiRr5pVcJk6CcZ9TQMk58RAxhahBdZzDtZ2Mzp5nkU53jzYT72Pk1",
  "key8": "cn2s8fNo4t75jAiMJNf5XbtpmQT8AtocxkrPFAN7D58Ao5PECskdBojv7rkrK56PjLcDRHy4H9Fxnx5WtN7ygf4",
  "key9": "5ETFbS4yWaqpW6oTRRupkfagA4g7hg8wC6RuupkULAdUHRCpqULTsYr2uTkqHhjChgvhzcKcaeYt45t2eey8SAx1",
  "key10": "5CMryVCQuJBBd8zpXaDWbrKiMZT3Vg5dg253H6fTVoGgPgwF6EzBqqEVLt8jtGaxYZ9Z5FzR2yFRijsxCAc3NW2w",
  "key11": "2ZekegnAKPAhmhhEfFfjXfrN7CQ4tZcpknMk7rEz2PoWovTZjJw96wRhkhLDvbvpGWNyj2ij7TUrgeBdkPN3CHF2",
  "key12": "32oLSzm8FJsJL2nLiYCtk4sF5Dz77cEgNDNNjzReEmJG4oHoJkAUKhDXhJWqGhKuX6tP6Q35wD3nnAwZXKz9wksd",
  "key13": "4PTLYoEk5qEQhWGPWwamRRknubnS9zQ64e2YHsyAdJJcWcSbFBUGsKaY6Ke8gdUaNQLumQgMdchr1ptpfDJaAbDQ",
  "key14": "4wMqU6nzQQmimuf1Z5SYhbaoP5t7Y26yEBwmg1uagUJij6nqu3qpDH6cWJq1RpS1EcZKhNMe3JarPPpTih2np1EG",
  "key15": "4RN8dX29xodYX6c5jzDXrEP6Nt7hJqpBQkZ3nK5b57wG8KS2aDT35eiG6MxhPq7CF59GRK7LMDeHT28LFZNBGqRg",
  "key16": "2uT2rVejXkmxwyFSPnLfbk43d8ibAn4q6SAUwMRwfvvp3hFXbm8u9W1Fy3yULEDgJMgM4r9tjW2mgyWHJkUqbpem",
  "key17": "5mw9N23Z4f88UULFtPuqFMaGmoSTYLr9V2bXh3SKbbyTtByFkCtjarAkxfPDsKrqYzjPM58jse47mX8sBrZCkxR4",
  "key18": "5TTBZQatHT7g1s9SMsQNcSzthKDmNVE6GUxD3SK9uhAR8zvtPMtGh1267wkRtsPM1kkBBYsW571cmsbVhTJQhWvh",
  "key19": "5mQHdoa3pPrfW6s72ZoNZPjdwoeg8hmMqfBSYUEp94iMt5WtM8S2eF9LWZoNPTPEJNLwmrKnrF2aYm5sB4VMr1Jk",
  "key20": "3sH3of6V55oLJmhRdQawA5RrvEeEtDcCujKjaRvhrMmgXjK7wvL1Ee4XhaSFPkqNzNXHpGdjAy13UqU9WYAjFQSn",
  "key21": "2a3pCY5FsRXBU3dFWF7BFLVMEaczbKCMFvEbXTrUd7Pc3GkGmZwwnf9zacYUta257T925jBBt8ALsqLrANV91ohh",
  "key22": "3jCcpT2mUa5QCkKGnQTYwxM8jktxZeUvbbEVJ8PyD9MmKvjPvVz1nmKWc8GYLvg3AEeLn3SD1GuEPXBMp8T1gkzW",
  "key23": "3uRuE6vEgbFXWfRRuiWFjZUAEFxg9RS4tj4XvLweee2pCqDPWMQGNSnapTryonVqghtGu6Lu5g1p43Cs54hRJHbm",
  "key24": "32hG4ek3msddPKX21jvPpYFAPrjytA1LAgpbCQA7KexKfzhP3Y8CZJ2Z4rQismoshYsJ5RKScGBgGnKYkFSpCtKP",
  "key25": "2RxpmpJok6pcYJXRGNcnqpT94rVudvUsXC72quMjaGep8riWjpE9Br623a5rLM8JAq9DJcGoxEhUxBbcNMbqmAKn",
  "key26": "k8L9TEJSDxsHdwiXK7kriu8bUhSkf6EgD7nr8r7eTmtATFF2fgREUPCdhRJxWqQ9LXj8wu1DAzTtv6jGK5KJbtm",
  "key27": "4VcZ6fw99XJ2DzGssnTmGLxYrgRpSZaA2YG6EGbz3sH7pXYhays8qTosjt2X2kboSfnPEojZyTCFGGVi7ASkbVVp",
  "key28": "5wnGUEqfwmpvGrZyYtc5mJEhs22mTDSPoz6t3EvvyjZXBZPeCr1bfFu4eX2oWoQpXKXWvFsWr4tiMaTmmrfEU4AX",
  "key29": "31i7erAWNmjbvdS81JCe5PaBUrjb49kSXxNdGwbN4Bvvw14yxuBRjeo6gDsqJXd1qCGqHhry4WTeWvvi7Rcf3ci",
  "key30": "2KVLfQJULqXMUnYUnbFMfjtjuALsZoh4nnDq8ZLiUWMJc71R6quxYnV2PGGRXqXv6ZqBjeRHL7srLhzRZvjfuzEb",
  "key31": "5jBkfSzSeUQ5i4M37PoHGVHEX3SmfgFkyDYC3yUMSj7JLodoi2pYAz1SrWV7D4SavAU21dEzzRMiNszCJ4Uj3afZ",
  "key32": "5wE9VSjrb4VnW2Zp8aoX3Q1zXX3K9frcmobhyDzWnWUuMnTZ8aoxxXLNkjqmCxH7nsRfMYaMfqR1CPKFtCxEEKJL",
  "key33": "45Kc77UGqidufnnftk4BXGhVPFdFwpoQv7rKSZTmme4ATpAYb5tQM5WVenYkuF4Mwh8DTAPJSsdesdrJJjXm3794",
  "key34": "38hPHsDtJnqgqxHdgFUHMt4QXVGZ5QKLd8pEmDoCbFFqnArMhKtM33Ugvbt2m9AkbA6iw36zMYpWjJxbexMXt3nH",
  "key35": "mUMSNXfDVH9CFJNGwxTLwVfF5Jq3zWYoF1TQpqDCQNhX47AbNefj7ekwxAMxhudQDfEFtDqskg5SBy32tdQEnf7",
  "key36": "33m1itphY98QBnyuDhxRTYpk6UzqEaBfrG5tRDdDz4opGswtUd97JtsjG19sa4Gyeby5NjqkMLk329YkpYgPJo64",
  "key37": "5VGFuZohoKMw5xvRbj4Pfw383XQxxm6WVCsn4gNphBEhuX4iZs7ZFKFydJJWja7fiKG23vnepryduXiZKGQJDUwd",
  "key38": "ZS5aJwMyiEKs3PdVBBz5Do5cD3tYUgGSABXf6yVCobmTUxVXwmbXmvZLeKwAjSWHNTAGUqySYU67aGoeH3qXQg3",
  "key39": "2MUsVCwMLeMCv3JUdSEQrLZRUsQ7kj3EcHaV1eDPEjHzbRAr2X8iSJY1zzLuDW3y4wiqhjHBmNb2bpynkEfQM3cJ",
  "key40": "4R9SxvbB3TrAWQF2mFf3VrBKg3qXfBYapYvvoMJrqKSsTP91Zui16eFyAaXpC6tYzK5Vk9epTekq8SPqFFDcUQJa",
  "key41": "4gsJv8EMTtPvpG2NHqVgfqL5Z4XC4MCutB8XCJzG3P2uA4eARQTUSKLFehjQ3bkJuC32sFieDowX2JJBPEJBntBR",
  "key42": "5t8Jf93yTvc9eatiMKKbqpJn9hARZ9NoNu74r1n1Khnwr5LBytL4eVCy6jCnr11Jo1wmMiLjw2d69t5pHQpGepg2",
  "key43": "3JtWHKyprdNSuke18w6zSM5JHk8qCxGTFTUtyB1eojYM4Hv8vy4xrqPo2HcHzpnaAw8YZurKMtMv7vJPKcp9M8Yf",
  "key44": "4zfPiBkvWeYy2mqNgq3iG49qBNFYN17Sy35up9pqepUwcn3pzSuZY7q35LWcu8Z4szsiam98uTeDnwMXaJfY4i6B",
  "key45": "4LHwpuxoNmrma4kp2TaG89tTkhpGAW5HTbrhNZxXybKUCparNLFvpQaGMr2Naq2MoeWYA2oHZDJFjZ9ReAvFtqnd",
  "key46": "4MjTEXk4DdEqUcTwzDRe9kD4mTH2rtc5RTdZ5QiWw5BtmuyfeHhnxKf9trYEvrqaKveDsgX129vqrtWFRgoftnq1",
  "key47": "63KL1qY9AKzZfdrbtpB9p5Ecg7cNWvWZnfSWz6pCbPYzxSWe5oe6dR4EeedgR2SUMn61vPxjqJ4uQzSm5TFLn47X",
  "key48": "LKWfPaKjowbrvvwcJf1fYqmQcRcmQv1C4SSM34JTivTKqhiC2ddJ88Udaj13WdGkuf1xR1CtP9HuHhyJEmn2BBL",
  "key49": "EMbBUTHoBvAYoyA1ZZ7FqhbDDbpb5nYVaA6AenmJSGvqj49Y59jUxV3iufgN9A1mgqfvp99YXqBhrcPL8mKN8kb"
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
