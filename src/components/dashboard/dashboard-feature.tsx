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
    "7tcB8sXBe8ZQ34vkMbWN4beiN3uKDXpzxViH4eD4NFgcRPwNS4PrdR5Zd9k5BXgDBUmT8bfZVqM1Mz1rCx64jip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6fF5Y6PrLVCctQzkkye76M8JCR2xVFNEmjF9Kc8uXVdBuer39MUGFzBuNhtd7noTjj1xUcxR4rTnMX3niod6Uc",
  "key1": "3XfVdxS9CLATgBP5aJMjsQDR5Dg4KAYzNPLBxhxYRhgCRy7mygH5MTWTn2ofKmeb84DeMtfjtT8TPNYoHbPbsGSF",
  "key2": "5GM3P7pSCqAqwLqKgiBhpUXe1SUwMNu7LZafEMzJqUSYjMxbWkjNob3TJmNwezFR5XMeV5P12dnVbqRv476xE27c",
  "key3": "ByQXov6dNpzgnDwaJMSHqpVktXt3dWHSe9UDGieCsramzwAvQ9QMX1JEfkV5M5D74PDYSqXN9bbH2nMEpUBWPic",
  "key4": "5wnDBU4PErpNzrCKdTESJAkP6iVi3kfeyXgb6wnoFaHqSjwEs8W6qtFaV6R8xMqyGF81UZK2otByrbBp69ZkhUAA",
  "key5": "kZxcNsRQfReJeZKUQEReTEHCEvSeRizBZti95MA5hQT7soyTw2FaE4pZPtDMNXjphfWXmLnXbLaVuYcUGHtCy6M",
  "key6": "fn5hfA923JY4Mu5ySA77D8pTg53vGK1Aqhe6FP92NjYhbLF2tB4nqRWwZkf8wCzV6jnCvRQtqvyzxqtxLok9Rp1",
  "key7": "2zLEsNKvx73enwzJoR3NzwKxRxBTMwvGrmZREcEfngukbxz5Xe5NMvo5bpHq6PyuRj6E7uAGsHDyLTbFmC6aBx7P",
  "key8": "3woynjXo3Qpujjx5NPes6SRSjyaqXQCyb32hnN7ND4D9ohhnQEUzRudjNx9ejo3MYAbPsgy3jgxQncaxTERJSbdt",
  "key9": "4hov7UEnmLsKm8rpAmYzovGRwZJj2TtkZansW6D3DAXMmhDgWTm8tZvRqttPEUGYCsPFBA7Kiub6zs1Sosq2HpD6",
  "key10": "3pd32qkPRTd3hz9jbLhWrs5ALSaFD5Bam6rJXcRTA9VAaEkGpaB7h2NTW8mTDGkxqoyVVYfX5E1bKeShq1QwC2xq",
  "key11": "5UaAPEfuALSeoazNWdpbVcQRDCcSGJsuPprXaj4DjkRZwZUGH3gKruVztRoi1bKEQUGveQBqdUcxGMMGZcfnpsfj",
  "key12": "3uVK8TFZmrmd5qk1TeYLmS5NJu7LhQNcjw8PsxgcC8atm7acu5dndn9xyts6GNZPJrXKGG4Q9QSBL26eCoSyBW9F",
  "key13": "27ZHrvte97kRokDXtkTVxgoNg9tsKs9ajt6rYXcyKfT2q1h1dEBoHGKCcRyQvxd58jRDzMAbY1wbRo1MxeoR7ReB",
  "key14": "45aFHmodfmcvASfzZ33M1HQu88sHYhM2VU4QmdDJq4F3SpgCWghkFDJVtek3YLAoTMcFZ6BacKV34d5x73ohwLD7",
  "key15": "2BzkZQVMGP34Q4uJGXiDhXqzrGNanGW8qUh7Cdm5QNGvVJmw5NuN6puMTMiDgb8tDVGBDoXHXU5R6JvKp2tCDPxg",
  "key16": "5AkvaE59VswfGU9srjwzPCCya7wH9uKNwp2UmUmNxAVZ2v9hjLwCxGGhQs5h4fcT8TAbMaanmTdFJrSwa1YFBDkp",
  "key17": "4bzKuD6dWdY7veUB4DEREo7jUxj8fsme8mEbHdjxHgUWNL8M82zUyoWgbEF22Zj5zT5kRv33SYpNsXAJUz9HBm1u",
  "key18": "5DzgVXWYhpZVgewfTrncbxwheKrGfMZKFXe67pP3NHDFwZMutawvCpznRBKPgiJyQRPBih9co3hi6AQFeoqYbYZe",
  "key19": "3WU8egpTRvAyHKkuzXxEXbwq4gzmp4UhdHZpsRVjTipV3y9EhFSqSyxs9wgK3T1WDK37Dt8Jx3rFThZ2hEoviZ9F",
  "key20": "48TR7Z776uWMtKsGYcA7viw9YXKXKGrnLG6Wk6vycZBhD4twrMhFnFVqieP6ioiAe4i9zoh7qxrAr3spW8mN6KPs",
  "key21": "2ZUFPS6CSSGZ1kKfa32zP21j9FjXLJ4FnGhxnS8mxzuUbL7b2eeWW2yKoDbgkQqsJQSEQNnGFvm76ynq1LcNh6Ma",
  "key22": "4pV2trHY5A5WJdQw4H6RdhUjGKGBddjkHege6d4vsN5zizbuUZV4Wc5YMGvMEi1dwntdqVuppfSpeTP64jgPUfMo",
  "key23": "3oqWqHxTZ786RPYnuyi134fp3RBgJbAVtRFVKocWWxP9ZCT3RAVxnQfRcZVpUuF7ES92qV7e7LmJ1cBYTRuFVtMe",
  "key24": "4hRoeuSmtSwwXC2TakDZxMcTY9fNkAuh8wnatxJ2WxcMrikFTpxxoLMqyNbNXomQ1zbJGyy2zvTXEnfFANMuiujE",
  "key25": "4p7LgMGprbMgGi4h5i7RDBX2iStXUbBhSNC1uzoPHKuAUCVkzC73SxnGZ3qcCVcLWNzWQMgp5qCLZfSsCVsP1ACD",
  "key26": "3uoApMSYMtn3SkWgtdcK6eYvHJjtbbKPHFdZKhAjVqUXc3zqmk7K3hcrTF4XTb9WBFfXbdniWXg6Y9ovMmpYqU5W",
  "key27": "GLQ7qagsjxd3o3nP8KVgfVA5uFaQWapkwzJJyGAbZ7eBVptMxYFyNxJBbnWNvDMSV8cknuA4rKLo7JeWAYbZCkX",
  "key28": "4JSkko8Cvig2ow76SvHAnmVkYRK67u3mCaAanrEg4PhCPNd5FkRaVJSyL8gZVvqj8Jzi4iV6PbRQu4x6GAesaaSq",
  "key29": "3HnkigdaVjELimaMGF38t4jLVyj47JmpgBUr7jmCs1iTUw6jnJixBx2frMxJHjV7vH1ECkV1igDLgbmQqycihm6v",
  "key30": "3TkPtyhctmUey7xxjqTPamsDofcDicjdxedFVryozsLg3fEqoDx4KbVFauxixqSnyMfpuMf5CuGA6hd3xFiXE7T",
  "key31": "pBL5Fgd6QKgtjk56a5nL8J5VMizXr5mvR4y5ZQAKzptSxjgttvicAC5bbhk1BG3SLbrG5pixEucoBBSNXrk5Lpf",
  "key32": "34gHFANGHQmufLqkWTaJStDdZHoSwq74BJoR5mGeM2FFfTw9gW7ZX7ws9JXYd7kUdMYrBKjJpvZL1jWcrengoBpZ",
  "key33": "2sXzi4k2srz2jFRKwfsycpqTDgkpCYpMTzBu19JBBSWhX5bnsLxZSumsw8xgbbM9v4tgNdBzp6jceoaY7VBs7xxj",
  "key34": "3cX8mH7uQXzvdZEy68CHKzS2yMhCCFk4ZWC1cg3rQwQ3rj1fnaNKcwG7ZsWuUSuPQp3RAzCxMKjXeHmR9WozNuaA",
  "key35": "5q6MtLYoCv9Qn4ddHZqPjqbbF6AnZq3tbktVJvuwk8JhQg7LojXtzra1zVaQfLEaSDo8SaAZANFNgxSPm2gYyLh2"
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
