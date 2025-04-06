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
    "5VfR42FbBXicD9JDoFP5FerEbfR2jtp5REQUgRi7StAQtboG6gscb7yRbRNKVAAuHQSn3Z2K9KZPEVrUJGzV3MTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uhqGYirff7PPTheq6Tk72UzuMUqs8PZ2FmpDi98a5F2oY1zF4UheJWCuveb7Z9DLjF2X4AAf8vgodDqVBwSUJDq",
  "key1": "5wmKW64uXSa41dTs68pRmMsoNwkWY6gYFtAefgX2BNM94R7PsH4mnXybCyde1mbL9aHxaiDaKvpsL8xzN3aTfewq",
  "key2": "5oYfbT9y6WFozQp6XdXM48kYk2VjzTmVcLC7h6xAF3mhssk97NZTNArnmoj5hMYQgDGxJc99Hs1ySWtSzTSS2KzC",
  "key3": "4N7g9tNDxvQ1P73xvHtWwKSChUmbK3fb3m9asH6doVXZHcXhJqeAekNGDUMFCmcy8fX9uKAEBf3wFeqbLEu63vww",
  "key4": "3w85wMix93ipLHeNNTtjQxVRLxFyjUb9JD3t1FyJF5xypeo6pEG3EunmqogreDi7GaipVoDkdUvStXEAbTR8xwoe",
  "key5": "4vV5wvMUkWpfFsJUd2DKQnLMwtyHrhewZFnHUXdKK2JAqniRCdasCDXYFoYLpw4SE7NxvTnXE5pFW5xp5ZjGriHr",
  "key6": "334HzDf8Qjsv7QD1xNzCpS75ccHZxqgwRp9LRXE2PyvvSYUYFMj1HkPT25aiW2tbbATMADNDDqTQY794XrQi1nUq",
  "key7": "XvHT35QMcfQWMBx39LnQV8yfNP9o4Vm1ASTBirU2vCTKQacPnVR5vwdNcGdNRoyxG8dmTMBzecud8apwon3hxkm",
  "key8": "5doFYWk3JXCG1xnF8pcjymV7iDfYzm5gBU7sCA3CaVQdykyVnyPqHEAvaJfTNeGH13hBCrJyTHgBH9ijXynnaQ5o",
  "key9": "67TkVAPs9SYXuRKPVySzjUMJ2aAfuZkf3zCfVQhCrbqoM8vFMqUnQdPB7VNCMLF3K99CFGphXzkCUvP7jmRqYYwM",
  "key10": "3VqX2y2zdUSAvXq2ogeTgsuN17D8bcfJmoBhkYxvBV3zyLk7PpBoNcyKnvMAatrnS2uNFZoLCZmGrCMz87kEZPCe",
  "key11": "4yLvjm6c1MWU1XpJVzZmjXEw7rQEjR55aoKfRkTsd9qfoqJSXLpv8KgiPiqii8eNJ5krUWvEJzAyAPxoXYqv5C8R",
  "key12": "o91heKFk6pxPeJVqecJQx2Qj1rAK9rDEhEK7WgA24mKLsTwEm2mUxgWiQDXVj8jg3dcdUe1a4s7KKKXG9YiJ6dy",
  "key13": "41tTo9mtvEmXpMAJZdrhCeYv8uiHPymE74BKbNZqucDHnhMzZtrMVYpERLHTMiXDCTXs7PMApQ9JGfFDqS3vkN45",
  "key14": "2rCkqdKh2javwHuzwfquRt8t7mxWyS1ix5a88K52ppJzUsz6GH4awUdX1vCWNUT68D5JsqHv2HjURgtV6GC2RmoT",
  "key15": "2L85iy3CiMTM9jt5yzrbXDuUmBHddjBN9UCgX7c5Z1umDpSMyKQDHHHsEfRywYJsbfZHkdRMw4TkAzsRygUpoXSm",
  "key16": "5BxvuPaMjYp85w8KhC24ooxDWCUTAezh3G683gFjQZFZupnEuVcqq7PRyBjxWUuUNZTZYwkdasfkZk3ERBTj1kva",
  "key17": "qPhNZceRaBVqSpdLUPo4rnF4WHWEDvYsCFCo87JbinuQPztNYpQo2EBittkTw1Ujfycsbc1yAsadKAbgUZ9m4cg",
  "key18": "3V2xgF1R292bb3H7zRCU2Qn1cs9X5tpbmj5ZYczrqoYMvtTrELFbt5zx1XTkaTXEv7PEEWHUt42oheh1zECC2mwX",
  "key19": "32uzMPdYpbwUfpxrcMMKtR3tb7canxBx9sR8yBA3rmTkJt4f8UhZsEoy2tNQnnGVdyqDZ8hzazWXFpbpFaBxJqAd",
  "key20": "23PhZRfNWt4YYWsPbEA4bZHPHMjJeyqZg4MpBXenmZf5UFFDNMEShYd3muwYDgjCvfZdDFw4RV4CotrXdwetWR8P",
  "key21": "4RZBceABT8kA84ZFebTAVyxZVYeZkby6MnN3zpaWJvHZDpvixgpCMnvucUnXzLucPT39mwTt5nTn9wDxge4htNoX",
  "key22": "2QP6YWha9vXGzNBvf8Qej25KmdB7PUEw5YwJCNJadMtYpV7RCkEA3Q8cuJrJ23RYnCxyz79BSvDD34hFCwbMzBAz",
  "key23": "bDSDK5efaQBrEYmK3M81zyWgjMgvvodFJaLhVBxTkNKzs3MVwgrAhZHEpf32eLbXyaKBJFLzovNVesUEh2Ekwkj",
  "key24": "3ccoFTvVxQ3SVcRgmH9962T1aMwr6CmVPXvQLwNW3YR3EwJXTW6PJmopmejQfxJWFy6RAPdGvr9MgR7r593ALQah",
  "key25": "xtfPzCUaXxu3VkzrtzvRgiUn7EsxNmtC1zBtT3tiQRqWaNS7FEQThiA9koGGVWP69QfNwKkaiyWgTHR1gKi5Dkw",
  "key26": "3eRJTtd5KP6gHPM9v6ZmKrc1U5LqLVawa7oLmNwmFiqcqPj2CtMkRkcSpQxVEhNRGpXUx5e1eDkBwwEx5iTQfb1b",
  "key27": "3y3bs7cdnoUp2xb8rKnJxBmbWPCVJk84xmKUD8oct5n9vs3t2KgtodGp6svcjseYtjPVVv7XQLWvu5LhD9D6UsY5",
  "key28": "4qEhob9iodYoS2Whb4czDfvijNdXQEkSDguLKvCZBiPX9PZE1NzsgEHnfkjV3wteLD6wHZDZ7uQ5WewMD74DPERJ",
  "key29": "2VRVFVxUeWfmi2NUfyc5cnD3hMSkLDq3z6Y5prnjY9tBkuFkRWaBWkgAB8EM19tM9RvQCJBjPkUvf29xketUzBCz",
  "key30": "K1YiPPA9GAdke3vFi2DfHrgGazmCzyrnfNbtf9vWfcSbuJ8SbeNRmreezmkqpyaSccoo4eaRQKdZTtWLyaGmjtw",
  "key31": "vWAvohaiK4TdXfcUypQ2fjWXtXFzvobahntaLaV8Sd48V9LQo7MfMCoQ3JUzJg5kxgiHJHnN7ug3eGDgqnGNoBc",
  "key32": "85aJgqfUZEVjS1EVFXL9UCuBpJ4KnZWkC8gueSdSncW1QvAWzc2FX2R9ZyG2o6ZDcx1Sk2yTqtXB164CCSXof4f",
  "key33": "5nytJwEWQXa732Zv9nrhJiM673U77Q5mbKhJY5qjnMk62ho5P4zwzTtpAxVcUeWG9u2kYbgk8CUuEQJA8s1A9DuC",
  "key34": "2EdDMwKAQRkVNubycbHhXok8NiHJ8aYHex6mGXVNuD4ZamsPocd6r1pEv4teqZeYJKBESt7YB9AqokjXMiCnBbFs",
  "key35": "2kkMEnc2mefLyATDSiA2yMTYSohshPKXMn78s1L1Wh9RL6yPP9v5PMFEf2AR1d67krVensbwhinbjdsfnxQF8Eoe",
  "key36": "KH5i1Mj6JpVEvTQZMbceE2tc4oXN2UAW8bYK9e4PW4AwaS7C9ZgPthPNj8VYuDhx9wCGfQPHTzXGfjLWskMCs9C",
  "key37": "2fdoUV9NbE9LYQKfZLQV9QxX24f3KXXVPy9scU2tdh3CHy42YHoE5Xd9YRtv4KQFtccqqd3tT3L9b7dDZ98HuXGA",
  "key38": "497ZgufpmgyB9C7UDfuX3pHUNz6FVcXBm8D7jfrZJ9Q3hSzghASNCS4KTWKMFG367Fc5jkNhFapMHR3NgZmDDe6k",
  "key39": "432Uo7rcfpWMqJZNHKCHdQkfbXKyTrTBFdkQ1Qd86EqBVJAPKhhunUfA8WJp1gErHwSTcteqU1taGJXmyQ26KqQ3",
  "key40": "X3Xy77uCSqS5cW2K5SgFtKAJgzwZpSio8nJvUx6cLAW9ntEkkiY2DHsCpArimQvdtMjCT2NqTsG78WD5rUZcmfX",
  "key41": "4vpMopQZZeVLg3rd9BpgeZ8UmdpenpSEEnrRpJaFpiEP1azqLmxKnFYBJi6hv9UxzWhEzz2dzYCVcbyZowLEf9dk",
  "key42": "9pn2w3LArkAvu97HTGmEvaZdvBWQG3DJocKBxPQfC72m3daJrho9znr3ZbuZ1cruAnZhDHfotPLCQJsAatngRMy",
  "key43": "D66uyV7DVFBycoMfZBJenwYVmw8gUHe5QLmhPULbBdBEjkKh7PF5v9UZizbf762gyFxTFyMcLbQad2QD5XBhAyM",
  "key44": "618WmaxiXMHFmPgEoSPGFuCaVQJxDbjvF62UsAUMkAuCKsadA82MyPah1yhJHAQYxDZSX7tm2aFMRuYc8npaH5Xi",
  "key45": "55eZwvkwmw6QeoduptessbPTEHvc76wNo5sj3P4pvpz4KA9cLFAn3o3QY1ZABqRiXgTGDWn5HpRqWTuKSavuuHpM",
  "key46": "uHnHyGcT42eopAMWmzxkgk4Gj8fQs9m8qZjHSaBnwt61wiaYzfc4RuG3X6iYNgBpU3kmQyU91eUNAiEcRdVdgwu",
  "key47": "5ZYM86PtNvLmvdkcxWUMtgXZNfkg2oiDaQfvMKfexq9MdGbGXg8guupoCnWmnqQ1uKSXGXAudKrs4Xk6PSfTHKvt"
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
