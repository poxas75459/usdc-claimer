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
    "3mYQeZCbry2sAcuZgZTaVxDKp4qZWsk2yBR4jEskR7pHTZ4wQCvF5yrRGz7thSenDRQJFEqFCfQimT3xnenNsUF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qU6WN2Tc8Gi8Brsm3h1URUB4JQ5QwPKMknh8YvK3ApmBwfpdqeb9YhoSRHdJSHbDvrwhduk3V4RTrk4d77c2KnV",
  "key1": "5zDJWktNJi8FgxRSJrCtuHLrV2SzAeWeS1RPDvMboNawvmUtXipRRmnSvTrjxFCkXquhLsYgxasexqeKFQ8umnFr",
  "key2": "4PaCDwyW37S9xCMXscYbC1RMTDgaoCie3a3H4DQf58M6A4gcK9NxURF7ev5CjBrewDv7MFwCN4FWsgZZtDnd5ZTX",
  "key3": "4mVGh59bt6F9RxWdLFn1s9qERNFKz8yU6vUPUqu4PVK5qsG7hd2Gmt53ctXwJRUZQH412ZTQVdMCmFZhbtMqimCC",
  "key4": "21evHDVHAfkNED8YruCKgJUjEFMVMNaSdSmhAarzv1L8msGT6mSaaGr4WHtzwGdif41yR5owNdRbySYhxasCDjN6",
  "key5": "Dv7JnYiZnkYQ5sjnV91XVbGWjJBqxYYQsGGQSVjdLLhAhNmYGFhT98tqRUbaMCFw4AXHq8Wfvd6qmvkvoNgFK43",
  "key6": "5G3L6isQGMNu17hnmMcpoYhgf7tofaeNAsDFX71PkUUEBon6AbLbsRdTXxr8vUx3QPWtYDzBXfYNhhnuHLuSH9TR",
  "key7": "33aGejCXenqcLpznU1QbBmLfGXqLmYwFUUtdipR2mREL6ok7kZgozmJM2eiYeEEe1Xt68NMzAqCV7FDcaDb9C1aY",
  "key8": "394XdDRPeESWYQMQzoX34tCS49RK6Y3NjjKch9SjTCfuGnjCvfY8G88nywKnaK57uixWoydi6cjVPoGuK3AeNQMm",
  "key9": "5XgjuMfSMCkxCief8ab7nhSBKb4vujJUHasvxPkWhxfJC5qnb5anhJTShBHzumQzVHV6xA4UjtiCMtwT66MwZw6u",
  "key10": "4L2kQjCrCDgHzZKxSBTJzrU8xwXg7D6KhpBkH5VUAhmEbZWUrYeeYn5ZQVrYSCkVCXj7KaNUU81L326vL5S7zaTT",
  "key11": "4E6bkZadqunY9feZVNSQSZbAWVq5KDKZ8s49ybvcJyaGr5VFTMyvnGfHBhVSgxmZGPdG7qSrV5WxadhEgtavaF9T",
  "key12": "5Rk5rCGymdFHszdzyh4rwDMLhtFBngcT8DoAgQtJmSwehMj3TogmqaQQpPcCGBBBffzcUtr5GA4AxZVWifcRDCcP",
  "key13": "bYX6dTzUFjRJWVKSa5CE6tcVgFGXJWyKX2NYCGQCWrh1SnwJfDpEfMQgWGALmPdaNXFRrag6o6UxFy4VwXMhtxo",
  "key14": "GMmzRZCPCuoSvNPZFoBn8Fstz6WFsVrA9tnHEm5WcKfkwfdPfqXEbxMUmVR9ZvYWDVUCe6X9aZpP52GgDPi4F44",
  "key15": "4ZfLnfd22vbk1tvwTo7NwvW6U99nkob4vNH82hqEyjyKzRGGTWvLU1JtnAMb4neaBnuimMjccHJoRJDz81y6uDhu",
  "key16": "3yq9JgY5ZwTyvFPzk66xoJUtpxEaazfWYnjpVMYah2ck2WEAQZvfRsv89kvM9ZaxFPLxBbFCFDHTFgg7ouSCBSmr",
  "key17": "95xDtpH4U72XuGvNxDRmMStuH1uUbsPZQHTfcxeYLsu5mpGsSwJGyYqczyS7GSBx9vLAvLTTid1fRRt2zaTimSN",
  "key18": "4hkjzXW8XfrpJJdHfcA47k6nQ5WZgPn2pV2EsQL4cE5MJE76tWrFy7u2UTQEi2VTtT3NGCCFPT2e8D8XHbKi66U9",
  "key19": "mi5pfWSM8TBMyNbHHV5hgUbTmV4DSorxGcEF8MLvnjvsrnCVvBBic8FpAAsAiuf4dyRWRsyRyopU3QPc8eSGNUy",
  "key20": "e1few88s7GADTcMy5Q8McNtVPjkiwN9fKcU7zJKGijLZHssnWvKLYB3SNFpRoyLB6VVey9CNyvzNbigudt4QCWv",
  "key21": "2vh9yXfke3T97Rjz7boNtoxMLkYK9eYThxNfdLBXX5jgeWLwqW9N6jYuFfJXv8E7ummhaVf3MBoAvdThjZDJWcdA",
  "key22": "33tYRyFYb5PrxstTQzGtfr2nAhD6NX7hLM2tBHLQYzjv4UvzYsHcxxmjGsczHmkgBPtJ68EeNjbBn1bBN5e3XBx6",
  "key23": "59XuJbhncWRCuC9VRutm1i362bebLMTu2QGS6pQhWhgF5vKqex8mygE1ZsDMjEHaW6dAjEAELaW3CPJLdhdUoEj2",
  "key24": "2QhtdTsKFkN2pAZ4EKS2ZVV8BaWwyAjFV2kbZwTF4eG3Dae7aNDwNLMyfpiWyEJSYjyuUtHHmKDceGBBtcDQ5sFx",
  "key25": "3j1LkGo4oPovyT3c54jThvwRZseQbf3Kfhq8BF2wnorsZV5NkidaMzUovuuHtRw3omREi1zBra4hpbdn98SFgLL2",
  "key26": "3oq2WKu4LZ9EapF6QpMV4Uop2oxLAvNj5TSa2PBgAaf7eA7Ky85F7gTxihhiKSiws8uwgMZJhuRecJL6ecrX4Pmv",
  "key27": "3LNkzA2E2yf3LeZL6zcDXCw8jLY3ePgjSCH8G6t9XqCFWEXrLHb8joEc941gfRT5Xg3meu1QjmCRncahbBUZwH48",
  "key28": "kPcorUF7FcHKEeiiwNAvnSpbrvbRgj57cZSgN9w88ARRCrS2LyTjK3FAFyFdRFiA41BpjWRdoD3f9vnQhNHP7EL",
  "key29": "5dgQF5tSKtEeTVdJSRBFayrz6k1ofgoVB8gDNpyzWsqg1PPpWotJ9ocokGwChPwhWQyoacn6HdUg4x7vDu3YrUfx",
  "key30": "4Ly1tFHVqy69K4h2RLocLoBr6zTwEuq7B3XZ4wACLt1J9udat1bS1jrzUD9CvN3dEmQNfjjfkgDUrUdfdBJxtAfG",
  "key31": "62Jgyip7Gi7tDCGNQrJiHVsjwVYH4KpagL9d1CcEbuiagHRwhV1M8eHeNMgYui2TbDQHZCC5fLvGBjzFeTkJWCm8",
  "key32": "8p75V2zFxC4wQsZHWvK71v1ENxj28HZNi9wsjb1F63KT8eGv6Hq69u2ueWqKvGxsN5TucV9YKpGTMkHRxwYg2Yo",
  "key33": "2nwfFavWNy4A3LLYWVdBe5m7R6Ksakw8Quf86E2d1k6gUtr1VE282yn5ZTCmDCjMbkCdNeY55cXWG3kLsCXRfGsB",
  "key34": "4KUsnFkhVL55txRWE1knw1498gBZ11y8M6qQ5XxFS7Bmm4mixDny4LrJN9PJsitfbZFAfLHabVXMzjf3dRBV3x4y",
  "key35": "2jXuNvJurfDWp6SYCk1cjhRKg1wQFtkW2hKdxJ4QHVjhQZg1ipsSu7H2NfczcQQWbMfooJJk2zbpQhDkAQRmQ8Gp",
  "key36": "3zmpMVPQ1FYNvJ4JTs3gX5j2HbR1zbHquLNA1DFR2bbKTGeAWVdArvXXCrVWjkKZWB3fqaCPGWRpxFqkN59u8ZnY",
  "key37": "KquirPxrRR9KmxGzgeYGeqP46EHFGobSyDNVVWhkiXA6hJRKQyMSD9mYT7EFW6L2Q2Fq9GPmz3AydavPfoT48Ns",
  "key38": "5XKmgrqoiqvDhYCbHW8NLLXU3rKutbzuGwfLoTKYHcjqEAKC9fMuvoZyy9J4ZnYNowzaMPYUeW6LtWwL9U45QrrV"
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
