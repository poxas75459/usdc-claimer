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
    "3zpnkL4DwHrNT67oxYBXFciGSo7E5aAPH2uJH5w4yJzA3A9jsfMAkc4hFET8cLon3Mn9tu2Q95pXcVvq121CT2Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GajWmkSUhSMoMicnJT9bnF8xnsKBcJVT4QyKjqiY3EWfDqpncAPvoA5UfFVadEdTqqUBwR45g9xE2RJAbg3aWgY",
  "key1": "3BKZG8GvPEdm4g8cAQmHEb5YG8K928vbKwD69eA741KEfFWDEeY6ZUv6jCJsH6bxJM2gKycHbJVnKb9HVnX4z892",
  "key2": "5JP7hKFn8SJNWtJSbSDooM4goRBeEA2fCfUMmmx7xzjyUxyKrpKtHnS6UFiPi7TanCf3md5hW9YypjJ8Yj5YKrgN",
  "key3": "jYZ6PGEV2tfcKPXaaby9D8KDx1kctVBbBxeMQLPGktogXLrPTipegEtfDJPN5gxan6dAT77kQqeMb4PYUUxApNn",
  "key4": "2MiVSVbfgEPQGfFdHcRida8tQEFUxYs1RtZqiWMBaT5ydckdeX5vU9GkJNAFdso9fEotR58bXpaQZmyGMwNHr7V",
  "key5": "3Go2EcUmX3tHx4ELqJkfVoWr8aY6M1qk992DWPBd2qfe12Cc7GBTwWXtSMgk8WQiQsLyaLUShyETRUhQr8yCm21H",
  "key6": "2omqefkW35LkdzYU8qCFiFLJB435HpT6GRQJ3VLtMZSzBVJ6D5XgDA2ZzFVTWRU8VtB3UXU9uDVfrDCpmTAEmpq9",
  "key7": "2YFqagejhfYdi7TENXC5t3hXRqQoY55HZxzzxjCzNdc6SGfoj9aaHgrDKdfZciytPvNKywRVzQhvHNJtAigb9dET",
  "key8": "3MXZ8xzpm7w1myu9YVWsaqaJKAphhP1GoGtDNK4iDMJ4UhhSpx38wCBB2rnJn3K18R6JNDJJhdqbWKT17e5gPGR7",
  "key9": "5ifFddrL8HHXQkJKpbJjBHZVzyFNbhYuTqvVJy6VeSB2qUDkHzYAapZiif6L3L7pSBBCduowVAovWcPAr1xi7UHc",
  "key10": "55a9f2mUnDoKsM5dBefCVHMrHaJA8KahDFCkoWHByQYzruSEGudGf9zCSHgYWjPsfiDcZ4RHdYT4CqohfTciuJ1J",
  "key11": "218U9QaHThnhAv3rphA5c11rwvVRHPgNoybLncvunHpTQ1k54tZdguQd5mXejSF7KmSwvp9pGnRRQrCTj1UF2TEJ",
  "key12": "EJvjgABroNp9Qq7JC3NMwA9FhvLjzJYygaaFA2NYUqnJNN2SAozPSynnjnvDjDQQU1ctCkVF9n7NERb45RjCUt3",
  "key13": "oHDULoRjQKMA4rPrkUk4u5hGXWaJ7AFNMrqDmn63hoa7ej4axzMHL1BSLuwJkrWsJRiTAK73JCbKjB42ysRxXDP",
  "key14": "4dEz3rTHVcYcXaF3XEkChTUJvMFgP5m9gd3gAhiivUoCpgoZGG6CoXLvFqpdRkHYSeWfZFwreonG8x8kjtC8zmAw",
  "key15": "5LMnjKcfMUEWUer6kFovCWa91hp63T26Wm3xmWRc8k8dbbFUcog97zfdwRatFmUefmtgdQa5YT3eDwoT1MAA7ZUx",
  "key16": "EhwqZrsX7qimzkabC4MtwsK969w9vqstoVufRpFQFcgbY4UnMzLLdpVyfWDSSiN3V51SdUAkevQfo8RdNVWXr2e",
  "key17": "4uSYApGzHt9tvYsSZEX91RXah3GEkdiZJ2BTR7bpBvBCBwRW4RXw4GjJ4DJHiGvChuteUmBBshLGoyWtucWsqg4k",
  "key18": "mVYso4D9CHxFDdgBXo9wKWSnmkkwNh2oHi5prRcqd67Fkni3SRPBbVvh7L1hJX5t69GbxaNrBvzWKdnPfN28mWx",
  "key19": "5cAp5kCU95851KYvdnJc1Grk3TXZE84FydFZL4zKmCjWV3T3jye2gaxyC5uCtoMLKsweqZLA3uuHcKVZWDbBvmqE",
  "key20": "5TM5cmfHMQ6WRK923q2gAXJ1FRY5naqpwPmLCN67jHN48YTys8Zz5CaKTpKsJ8dszm3yARThPzjYK92J7ceUaGqH",
  "key21": "sGzsH9PXfMj9YBPfectacTzSuPKeg7ZkNPEimW18Gxkb2SushRytXsRxzmEcGbMNYdYRrcXV8SF5WitiRZT5Egt",
  "key22": "5p3hmCUJW6Zosjqy22kNmqkSF2HL8v5wUq7e9dbYmPEV1Sdk8MKJvhkVL2C1b9VtiHnE6rX7V19AHYYYHxZKjELf",
  "key23": "2KnVC66z9VmMuZTKi5GsZu5suikJiyBWYMUCg1h6YPU7szmM7NwUggqCzrzKccnAyd1mZN3EG7pQr9p9fQiUJTtk",
  "key24": "2Q24DKAGr8cY2LcbknfuTNYJ2tC2wCZiarwy5zFs6QfAwExNYdKFAxYJum9sFZQGstobbSVSSe4LWFa1UWbyeW8u",
  "key25": "2sM56SPuQvJgUZ2f4Bvnz2oDpoSQPEqBoTtPVJnG9yziAhjXXj3SLiit3US493CY3nSAsoR5GiBS6k5GvebM6NCE",
  "key26": "29uMNukua1YA2uSpawfsSqdUd4fryrpuX1C4msCu6c9PxbU2Vma8EPFdXA4kqQjt5RRLyzZBiVakUpaXwuYms9wM",
  "key27": "4DFvAvWEr13oWkkpX5bsHMvVkayMD1RAVUPCue6G7tc6HYrudVR6kSTJVYxgsss2uyE1M1KYfwnGm9rPB4Q6Nt4R",
  "key28": "5Viizv7zj8J4J6YxZA9QmLBFayjqFAh1yiLStETASGJSS1B4MFuFvGwgKqVVBkeWz5cWixQL8WvKmSLhDP38Vgos",
  "key29": "38pTVtRTyo9Db6Cuit4yqGX7xAkWPrYimxDVvShgJKwjEVtjkn4jSN9ZyqyRX6qzpZ2jHhPtYmcverNDxiqmKWoQ",
  "key30": "3aSBeympqwJWBgKGJifHXaVTkoZtxXLjnQoKiMss2BG7sQYWo2t2R5kZPFBLbnZBU4RMTQxMNH9P7MZgUwsZ6dnc",
  "key31": "4RrfpiRjGWKdb2Pj5qwRXcxNF8pEuydmxUjjnvRbx4CrQAb9gm9EJyeSppYA8JWRFcjXj4GmnR3wd3MqsrNdT4if",
  "key32": "4egCxbueMj4Botd8GraqnC92Ub6QV3sido2j37QF9XHNJJJzTuGpLe3VYtRQns7mXR2TxmTyjKqrzFzftZWv3Fk6",
  "key33": "t6CaBck2BrEjh85m4B2LL6mAh1vagjeJ5HqAdcJH8eaet6jf4F4ZGatVFAJKkQbWgCdFSBCRc87HSPxvCdm1SYP",
  "key34": "vde2Yx3rmNYroPa4zgRMeUcbyGMGjKPst46uCymgELQRwMbR7cHYnz6TtSaYfR6sKyjfJcYbZfvccJSTMEi4PgN",
  "key35": "yfe3Y6BA3o9ye3kepCQgWshSJRjFoSBQnm2nh7LrQ77JKqdwzHE68oppbUTjmcsT4z3pXEV6YDh4LhKB3i4jp4X",
  "key36": "2M5AmwhqdywKSWhciKG2mzJf5Mx37eTcRFbtweUqgLC1gZHjgc7Fa6cpfWFLBYJc8RHtsQ9LddFQyvePiArQQh7i",
  "key37": "4rhGFGZE5NAhctJZgCtJmyhyZLrsDqRcPh2WLeCzQ3bTgsB2webw3i9vJ9ibofgRvxMbtwoTkuaCuciLUfArWQpA",
  "key38": "aRq8193q3YUadw2SnAQzM4UqnFSu7N3aabMTRWf42SmRZuc7BjuXXdcpad7XjVirxJvCwBivou8URuyBcSMte6f",
  "key39": "4pH8DAFjhgqsMgVXt74ycDDGg1ypqVbyJqm8ZY9ufgVBkLkgvH72AvExMmJ6s8Un6N5UpfqQN4MW5NLkr8rcKqoh",
  "key40": "2TnWJG1hPNbEZzVC8nPoi4M7GWs3EgzY7HHDhDVtAKAoDAtSuA7G512h7PxBbgGTcWor7RAPv7fZwwsmH9gPHcP5",
  "key41": "3rUsFJfyojYM3PBnVcxQmQB3tr8Gfcg3AxEWv1XiXqEvX5ircqYskCrBTWEqyVpStR54V75fNiKhsW9RTW1wmTt5",
  "key42": "53ufQ7ue9M1ZYKJV6u1UWddPJJq6ak9FEVN7DbDk4qp7phzC1tcvB5W7ikVby74Xwh4YX9rrkwgJxWW1BtDerNKu",
  "key43": "hUy7LPAU4ikkmPJnRfmUcGCLB45xmh8N66qyZEgT17iN8hQxFi2A8AGYRs72dwAH4x4oMHSf1cUQbXRsukhK3Yz",
  "key44": "4dgPAajD7PCn5uhNRVLt8PJDSuyTkvZ9TUHWWrFWdxf6UGj55BUiUcKxxQwBe6CKGoXaToqzYrDXxm5SvzGKHTB2"
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
