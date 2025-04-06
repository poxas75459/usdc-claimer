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
    "5BG1iTEkE7agEf2VFJBYhzMtuWu4mjguV8F6u8Czm1qy7hm3dwa1i6bMEgqAL8L3rmVoF5z3okrsMc2sUMmN8Dt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUBwVZozGGdqiQyYvmqRyNoiRX9ty2XMz8Kf8j8cPfGbvxWeiDeY3FYHWYDxxKoD16fmedhJF8Q7C8CWFuRkoH4",
  "key1": "WpxHk4B5ZKH756vi78XSfKjTYapgzDk9svqcPw4Yn4z9ZM3FVcgQq6hThBUuLEKZKVAWeQBJhSy2PcxjADko6do",
  "key2": "5KK7qGTiG4XtFfvVHJsA8syF9CtCBa4ThA2mBiNLMBsQd7Zq1BgTZXsKNaTXwAv4y72Genn444W8NcgJBNPXg8PV",
  "key3": "2ee8bf3tfCgTomcH5jLdxD7vRi843VrPTthVGC5zmMGZNorjypKdDCFNAtxr8ApWSfJi8Z3di6FCGLeDcKDfJ7LJ",
  "key4": "4pvoNjX3khaTAMX9bTnXJzwmGTqDcZ418t1ZT8EE34P9GLFNsZ6ZuAdS4LTtfwx38hJZhxqZjhk7QFygpMhsCdW5",
  "key5": "3622zSyo6Pn77zC45N2FdB4tFp8BXmRZKMihjGZRzJRALcFuJSokBvnSFvrXAwBd6MTQjsKFrpiiDsXoFdN6XT42",
  "key6": "3uAgcCgg2x9KFAKDMfPq6XPozeRH5LEydgyDK9L87CRSUXhDDKgG12JfqBg3zuTXkLuNs74dv8LENDG4sP394bfX",
  "key7": "62fx7kFK77oaX1mKG1wwhKrtup3NXQZsToUrL7nxN1nTbnTyiATyTTmUZBJ7NpDeN2VyjxQoC7Jg296NNqGFs5cv",
  "key8": "5QNtex9FWVaM2rjMfUrz3SBnrtyCbYEZdEM5c7VKK8L7maBwv41tBiSUX8xFad5hEFSo4n7ugoSKMdV7TVWqqoPk",
  "key9": "2HckMU2AYBHBau7aJvs5odgugXrNyfttGAPViM4MnToFppoJa912E8B58B3niTgUujZ2stfnxnudiPVMoysksYkx",
  "key10": "4YN2NxW78LN9aocy2oK7ZEhndcnUDwGtb22sJ58BS44ZKL9q5aJtZ87ccJNtY7f5zbsaHcyDGXm9SNuPArH9N3eW",
  "key11": "5ZZhR3Ed5nonaPuzMfBrihvX5xH3ZQCpHZUrodQbwAsgeJQxS83eodsCtcMVj8xwBytm9ojfbjqbvjA6Kj39mfNm",
  "key12": "41qUmiLwCx1LKDW86GcMKVyB6xRx9HUcQA6CnCyuT7rQAY1cSBAe2S41eZL3WC29VwJew3NvTbZ8nukGi3HzRTde",
  "key13": "2vUiYyi7N99qSb2vEgEhudXwZuUohY1tTrGmvkzKr9tREpUPrmhx3y67X2jot6gAa4bnBCJ64nawMeGGHQX7p6GL",
  "key14": "2Qa4bmdNbqYvRoFthHPy8BWqAhewKrEWJVhbETa1e1gYfRE77DEUDqTiDPtXx3iZ2YzdxUJKgnUka4b6A5AYafhK",
  "key15": "4WEbtu5gTdKjyoRnQ9ZHszmiCvTfd1zns8cgRih1L2Jdc3PWQwf2gC1abeGQAV6qrKhGRAjMXeHYwp3sdJDYLTPL",
  "key16": "5h1y4JhYsW8jbn7Z6YR3MtRSkWQ6hh3ajfKJPZYvHCQNsDoGToSEzuygXqyScyR78dXnJoKtusME1Xa5tFaQvhqQ",
  "key17": "aJvtuGGWGQKYjKVPhTET2wom8XhjiL16tBSundU91smhxjgYwy1rCSZAy7uWxbeHrxmEDbb9V35CQ1wZQDBkWXR",
  "key18": "3LfrHSJWEmzV7LgD2aH8RHi3TpQVcoTP8ijc56ATWunsh9sDoQvLa27j34UY5XDpaqedfKpwUjoPHx7CJvEhJ7m3",
  "key19": "41efharfzY97ZndUUq6jeR92WEJFqKnMPRvKmcYEtHs7Bhjw6toKuEMqhYAqZyBVUf3s82pP6yPq13DmPtJTEd6C",
  "key20": "2sAjN1FmqdTp7R4gBi8edkt2W6RtWaoo2uc367jyQB1os1hWmHMQk4uHhvEMZQhpRHkusRNE1DPH5ePrfVsRDjtb",
  "key21": "4YQDJ1PMwUEsWKPesdqUGQ7Auke2TmCbgFDFVZfmxmKbpnBkdtWGv5iSp714X3uW9SYuvtHfKGHHEWoL9d6EECbY",
  "key22": "5u29bgJgXFptLu8q2EuyG9XduX3nfo3AePgwnSazk93DN7zaFbv7zyd1xC2Q3Mfw6KeVj6fWrJPjXMax5erCEfnF",
  "key23": "5hNc2ufVpLAvuJapW4WN8DME7ttLkX3SJWxoR9Qz5vNNU6xNC61myzwDcSrBjhKcYGKdJmWWdDwnRWdht7jTPYaX",
  "key24": "42zfAGozjsqZQTFZUxxe9ar9tmXE5PAM8CRrY2zMLBKkQRAbo9FEzF2qa4yDcKhHs1swidxXYFY7qnAqpccFuZxr",
  "key25": "5bffREFYDjcdXoRr8szKDnDXiBPD6ouGyTxCQemw5WjqKysmhCqxzfUV8SJXL1sNa5DPeejeGgkB1UFn9iuFhNnT",
  "key26": "GxG1u5yz2RUWDVa7YUeEY5xYBMMqxvzRtH781p9GQZMqrwAsuGCD2YzYLyGNkvndK1eVKpZ1dc5FqmwXC2TsNuY",
  "key27": "5H4xsTbhYfGwxP5u973trf79QkXGPeaem9reYCXvnGMQi7vdKEZTqwtbkpePszpwdEixL7zKhfk246MrxEsqxGuF",
  "key28": "4Q4QiqaPPcP96Md19SH7z5kH9YbKesGZpU3CNiiENUYC6Mv4c1TJpU9ESKKP5o5ZjHtcM6KBKyJvxAX6mJWKycnY",
  "key29": "4EfU4UXNr4oLrLxeXQRCBKjUNFvKSfY6S3k6373pqFytckZp5peJHh8P3ghy33xVhzaHWY36An4HttzxF1WgVTek",
  "key30": "5X1utnko9dfCi9b96Q3paQeL6pFe2LSzJHKXYbBLyZ3DXJyYC89oJXj7Mvni1RxmhKma5wJEaFbNYpwcSio5AqNw",
  "key31": "3K5VzXEEvwNivVAvuAtXAPS4vbEeB5Nxo3KBvv1sPdEg8Jyd4NLRu5tTKdfKT9pU4PGSJRZWsWdcKBm7FcA2dveY",
  "key32": "641mzjwM8SAmRgngM1ii3CG54Z3dJk4nWgHWzJgSyG6sZojw4FYmTBJn6yqVncH3ckTGYxSEeRRzjxHeZKKJEXKh",
  "key33": "4FFLBKxaFvK6G5kPojBQUjFt1JV91wSpUGHuCJR1JDtfM9z6nBMKzHyXYJF36zJeKMz9V4hkAB1GWL52Rv1cymjs",
  "key34": "5bvxffvEa922adywVPW7mYT1SsgCaRD3XdTs62m41PNZjtx5PPMsTTdwEzLSDhM7Y81bvNacXutphWXjGhVpznjV",
  "key35": "N9eRmpcNZaso811HGPbdVRS6SG4x9ArDgcYGrjqibxfqeU7hkxCtqALTfhHcyzJ9yVf9zvpxnfwuh8Qu27KxBzM",
  "key36": "24qKcQiXoiY26xr5xa2k5AG71kBySRAtbQpz7EBdpaGeAnKEYcaekmc7Xze8q2oKM61oK8ynUB5Uh2KEPFR7EXJh",
  "key37": "u8yaHxru6Lfba4h6NfYfp9ouM4SZTJBBUn4sN5krYPo2GuGZACNNaZBS8eGURNGtXr5ucDjFvwKsMAB86KVoi68",
  "key38": "GqwfbPN5AzkZVE3Lnn3K6894SjWvSBcxsYAxMny8qdZN7Gz1wzzmNVDtm3FZ75MTHi7JGcCq853PdB5RXCJ1iRE",
  "key39": "5zP477tmfo7yfhU2qmcioTJ7zzZ44d85SFPFYzsAv98yokWtNTsW98dJgEmQ2J76byzdxX7LJN6QBTCn77TRUnce",
  "key40": "wFepTLN2CtL8mCiUanu2XhB8mVSQke3GNP8KM2oVmJ9swkBQujDgKMvkr3ubthHBETTgStXFVd5q3dRYfrGtWEA",
  "key41": "2cEZ3gt1DezQLPvrLUxq6NXsCYg4RhuwN2srWai68h7D3uRVGd1hDKAgYjHoezvChofKC3J5pKgAJJcMcU7pTd87",
  "key42": "4BbrGnrnP5uSirmqHUiYqwHS1eHXMLBX6rak6NK7Tv54iXZVXUSq1EbWPAiN4rhR6T4NaCYNHPnT1BWnL8onKqoL",
  "key43": "5DGJsvpXvuCwPXcCbSztMTuEVfUDJyTQTgxuRkb4Ff2g3a4C9YdeDZbvTXkXfbSyVx3WmANS88tsdun5mg9oBwNT",
  "key44": "5fwtjEWMf9p2NoxCmCPWUSeR42MhsWZahWasbpM8rsnYi5ab2uHvLHHeqwri8rw6vsNCE2c54VxCxTaUtoAD25kP",
  "key45": "4R5jGRHR7XjuScs2UdUETi8HTQeqcmZ5P6gVPJHCGG6PqB5EDtrctneqjxTiC9um4trMEiWAdHeZYecXzmutVU5W"
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
