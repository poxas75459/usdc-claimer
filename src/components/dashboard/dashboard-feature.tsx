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
    "bJZk931vn8HG9tJqQEzD7HntQr8UyT7tZR1qUzJ39mLv8oJvsSYXMKcWT55fXGfdww7RFShYYC5iABy5pEkyKtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATXfgzpLrMEM9FrBvk7HGTZrJhmZ3viNSxEBGTPGjJiTrcNq8FsHkTRsHZxtpSK3XVcpcSFfcuJWCL7WAS1GGC4",
  "key1": "3y1BLQMshM49csEVCPowhM31U9Nznhngw6xm4FFvEqWJUym1U2tVb1p9JrL65aaUYbeDkcAZXLMnv6Nh8jZFqYg5",
  "key2": "3drMFSKPBUKJUSF6WapMasLnLWUXTy6cPs6okZ6gfw3Wp35PKmiWLZ2JV2PNRAwKokeZ4WpqjvZyttCX525mKaQg",
  "key3": "2SQwj6fjca7S7tcZeaJfP76aRDGGRxqP6txKNHTwapLHkLCWqKrujM7pNKf86Uygt8WJN9gqQxiXHfEgDbdXQ9PV",
  "key4": "4hWoAdbsfmHzEsWMeRS4eesPpfoe2sNyiuD2BvgAvcoCeJX5aymrwh1yfUeFe1mVNKkGJdLEz7uzdaNifcpG3stq",
  "key5": "wv5UuboiLP92rV7NSEYcXZXj4o4wjkGTeE1kVzgbzWTDyT9ovpHfLE2NJwWfCHLvNcK6mBopqRVwZJthjXDYVY5",
  "key6": "5hyMJC1cLo3DA4LaQnPjbmiNxtvBa3Zd7VHm7MDutRz9SHc37545SwmieyRzbvneZg3Bhr9NZuE9DLnD4FhmhZ6k",
  "key7": "37N4HYCEndELnQZcZXsNPNZM4NBymuu6gTy8RiBtMmS3UtEwnrjKDLPnmHQ33sTZRT939aBL8pD73Y5e9u4ZYBG5",
  "key8": "5vADXEdXQJicxVzeCz1FX8YFTc7VtYhxXRRAa3FqhQM2WAbQcMbMHJfW4BW9sRTFFj8d6czpE6i27RFyQyQSmG3e",
  "key9": "5G8eV4UTiphfcJtkkBQUbv4XnknJWQFSCALxciQ18soGvqLCtKuwU463XdTfty4wFPpLXzis5BJZWrcXqsYNRhWQ",
  "key10": "WuKD1Yyp6U5VwNAfHdX5L55A6RqZbsZHRmTzy7znFyhVzi63QCF7E5SRbT8AfTUYQqokeZzf8SQaS9HrvS2qUvq",
  "key11": "5ZPnASaFJd4v2XaqzXCWJa6j3Jxmzooj5E77FqJG5oV8Zw2AnPJoJngfrxyBga1yB629tfvtbReN4hqmg5p6Xu8S",
  "key12": "2wY6UtvuNuF6iGZwKnzLDyHzoPs6rN5swdB6yccL21pqCM9QTxtX6UjXzG3XrtaZx7qBV9m4XtQd1HynX5vJYyjH",
  "key13": "5CCwdgjPjpyK3fSv6TDL4aJX1DopSaQUw4hxTJp31gQeWzj1nraa7Ga9PyukaDm5kJ7Xti2XG9Svk9nCQh3pUo3F",
  "key14": "4cf1VopJpLNTRhB3isos8gUsS1kgx3tHVbHc1e9P9SwZxYGFJwKTahBUpEmTDHLZmVEGMUkqxPQDGDJ7UdTapP2e",
  "key15": "2DT5mmyb1z3Njc7o4Q4uiC87EYmC7N17w9tcbA2nKgNAZcYhtYahxUpQ7FSt548We7ngGrhxJ8ALrUmJonWPyaXr",
  "key16": "2VmsXAQb8BFRdMaTYoQ1sBat79JcjpNBCcVZ7CsCbPfZN1nR3NEp6AGQNPHjibYdnTifegMvhhquvdEhkyX5uW5B",
  "key17": "5UvUG8quLLxkwveYyTqqboNNnRbktHqakJbxnhsCNM9tWzUcC5hFMJQLcR25SB9yGENd2e99gVk2VmQQp3Uqwe27",
  "key18": "4tXtqbbV6FHXMB49JsMGnZi6VeWWVeNKeS3WDBJ74KKFEwCMqwygBGEQT5WzUNVhMXPCdP8krR8mqNcR2hqCgtgz",
  "key19": "SPLQ8S3aZUV2pPgGjzKBaLwwn6MbdgGgyePekPcQjwL5nTYVECXD9qbiU5JKuEh58to6R51dBfcmkbUoe6ZRerC",
  "key20": "61xpeYVACsorvJfncaDVAfpMwY6mwVAyU8uYjkka2uBN1wamppLQTeeMPmFqcn9gu7udytg2328EngNWh2fXk2P7",
  "key21": "tYYMoFGefhJvWdUCL8BsfoxdTYXAfh3RiUgvj8GH5VzV7tq3FZNf6jkjHoGa9kEAXNMPC2d8RXh497zczVoDJaQ",
  "key22": "2UgavSmQBoxLFvmNrWpEd6bsJHYh7EPSzQRu8feBKcPTCcM8UDv8gQvcgYZrac5d3wGC8a3cJY6xDSzAS4DoFHAi",
  "key23": "QaJPwscP29Sj2hLS4u7rXjtJp7hJgrddTKdDr63aX9HG2DmMw1JPEpqdVr26cGmsZvxqqtPtBXPfmFvBRh9Srdn",
  "key24": "3ZuExST9kW7wX8rpuQ1pbfVcWy8J5WJGm3b9RhBGtFfxaq5TBjyaq5kMwNjGoB2PzjLJpj6KajvQwrjiyv5gDfPL",
  "key25": "5USmbwbBLK3GJnsunDdRwRfd6M2vxxDJyuZ37G8BA6TBQrVN5RiVNcjfgkZVwhddBkSAav1sc5ufxY1t7iPTGMjw",
  "key26": "5KAN5qtngEVftURbvpA7bvjLk3mU6e8hK2mZPBjPTK1MZ79Z6G4iK8gdS3M72DLda3gvjdNQfMuhtsZyDvN5rJwx",
  "key27": "2ycxWAfakkwkkRQr4g9pYdv6bahrBFzD9SEVRSZ2LuckMVe9KuQZf4zfkxHQE2mWmr3uYz68h9aYMYL4EAqcmp2n",
  "key28": "2L4xcUH8P8qkHH4ZT8GcLpzkRiEnA987jf1BiKJG5aURo4YnyvraxfFLaM2K8fUKdn2DeyVjsZ5KmxnW8bhdDaLt",
  "key29": "2UXngDJ41ssbGy3iV7Bg3DWoW396ghwxQLFEvs4o8xuHhuDx5j82ZnVJmsHZWtTF95a95VHLcNWchrZmPSq9nLFg",
  "key30": "5ZuBEGTa1FXNAJLNUY3ZDeBabjhN3o33pYeAqVkeaQhokwRTDXsmdPQhuxy6YB9iaPigGYvafEwJFuAQCwjMzfec",
  "key31": "4V5DgkhdSuyFvHjcRRwycgzrqURWszQmyUfBKk7Cee4DEFuypQxsSdePsND2RiuC8WCFxjin9ZUmC1MwUnAv2Ew3",
  "key32": "5yHsAP1kyQsaiTM421khB3eWusUSWxQgrmht82amZxdbnVEUmizgEHkRpAaM2x5A9meTrVHiLEJdkGXWty4FrtRm",
  "key33": "3bBGbead6889oAw1YT6zFC6b7UKkGG67MjC8tXoBGdzeFFPwq7NZy59JrEo6iZoYvmn9rYXH4EU5Zp3Nh7hxXDHB",
  "key34": "ryn5XASHN6ZULZugeeNXcacz9P1ZWDKhyTitGmCGNhupwCcGH4UEz41Mm1Q8rNr2S5wsqQwB7LWqAKVJ9kQ3Vhr",
  "key35": "4rsybGpQEp2JxG1NgyTXMM1ngtQ4nT5pjJyTHV97qYw7QfrBvYWAF5zo4UoKeLrtUsvVmLexcusewkwaczhRVjin",
  "key36": "2KiSg6QodZD6Fwg56i5MjGq1SVFDU13EjXPqdETSDYUUdNLw4oqyHKxKZg9sUFVmDXK45w6E1zp8jJVLConDGHmQ",
  "key37": "3pHGXRJ6LRxYFoQ1PpL9enk97SaLxf5pJECVZ8hrdtJS4z9KHUs6oE6gWm7f4aA2f1gZYD4j2p76568Y56YvYkTd",
  "key38": "4g5TZZcu2aJYor63oCosxyBc1uSY3T6JeEBCP7jEsW7QLqH8jtpe2e6r9owzakV2bCwPnF88FCSgvyPgftiw1yic"
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
