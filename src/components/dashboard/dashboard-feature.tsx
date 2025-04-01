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
    "61YdfdoLz3DGYZo2vyUs1Kqpyu8YSwN5yUtRxNFnBsefur81xAmkwpcEu2QWKewx9brkyGTEq5WafijwsiQLncvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Es4ahEBMSKsLYj5SAc7zpkGwNVod3ZKLkvCJS77Z2nUGY8XiG6CQ5p3gU3yfuyqpTAajMuuTwTtKpEhw58MjyC",
  "key1": "4bMYKZHvbz2HMRxSSrRSwJmorPu84xourCWAt8yn1z2NzN7nTnjEztpyubev8yXV66BNHmJQCC7mrBfVLFRLpJrE",
  "key2": "zRH2rg3Q73VYDd1ZEtt7vQ7aneQsMYTWi5A4PXS5u4Vne5JWrVsZKn88DwGBCPPiNLK6igV9yafuoD9MXi2hVmx",
  "key3": "64N42NKDU4VzcMjyPCSjEBwjq5swLsfvRgygBZGch3qh7VEUYaPKwUZtqdYworzN6KTZij9XWCwcJrg2i6pSPvyz",
  "key4": "4wfNuhd32DSn3ZUhiLWL2zrTe3mp3oWVFUn2rZSZH3KbYjWPj1HewqMNQPAN2qXagpEMS5X4rRcRAyLi7YvqDPXQ",
  "key5": "3oTppiW5X87qcX6yxwExnnuMbhRYy5mTLSuJ47ie4RkkjtFerKrNXfTd2FjUf7Wq3iRDkiU5BwRZyaQ3S2Byt8bt",
  "key6": "LnoFEgeh3RxMhqTnFMoDRGosUL4JHMDRsXkpy13JUgbx75m7mW63Nj4PG68JAkwrB2UR3qQgn8g9DioF3vZW8xL",
  "key7": "2dm7ZPQ6d2bRaXcCs9EqtKaJFtoo3jC34vjfZ9FdhiETF7K2HCi5nB7NKBtzgzxWozb7HRsN7WCw2utAU8NbLUxE",
  "key8": "epjxoGe3XzwuL8CSFNXG53CKRhP1eNc1QLsTksd3zNYSn7KLoBegLzYhefQ2JeAShF9C5zHJkjXLtwh1MYq8qhA",
  "key9": "61BViYuBqJJBs6kYR7h4B26bnDkZDJ5KGxBBGEkKL3kjsJEenJ6r63pjmHMYmnm4rWzFJxPcvVckv4rEV8cYuJWX",
  "key10": "gbJ61gKrrvgATgMshVm9TRy3T3qsy2N9uLSCMQu78E6YndUfopny58ZTv3yTrKVJdpHVVaRAHVH4g6kZDkcSaLC",
  "key11": "3iPd5ABZJ2KfuNzPLUGNAui7myWVkic4K5ydVh7EX11XhNannvkQnhaa46Sn1nhgQFNSSfvfSo1mFe8sJMEnLKMb",
  "key12": "3n11ZvekyMVyysLjrprCnpLHT5dnqPeC1QkPoxm39CVF5JyhkUzWgwrGjpqohhbanx3pDP7vmLLoYEFhbQmVHzP8",
  "key13": "MzB1zVgZZBvr9agBQBjrSfXbBNpEN7D548S3q7BpGsvyhGZKSpyB4BDAdUjBWubwkZiqdo6UXMyaX5TJJ58CXFu",
  "key14": "PTidg8TMZuNXNDpFdcGd55cFXYWPgej3EPkth3VeUQHPjiCQjMBfqPCFecMUmbhfa74UvU6k6jx3SE79XuUze2H",
  "key15": "3kYQHxu8LjjGwYaAtGuX3VKEVnN59n2QQ3W5xcu5xcW2E2irkNxP9tj7Ly5bZCsURtsySSfR4RL29oTsGx95nrqn",
  "key16": "4JxktkDBfyAGx9y6uinciihhAT5YGqPHewTKZa5QM2go8nSb9mDErrNsMGCPCbrtfuwDgU4xzxm6p51iBMCYT8Jp",
  "key17": "T5vnb7b5jDHE2oewhF8DMVsYAPYwHKkvnxa4htHstW2RhhE2oXBDwPZj4ZDV9YNsN8FxcuLzYMjxv98fgzgPnPa",
  "key18": "222uMunRaHMbHck94vdo1ULjuPmVwdH6S6Z4erofgvonPpUfvj2epDi7ShuJuX1NzUk7HZLvgnwWCuoCjQxXwg8J",
  "key19": "4ot2LuCM8EaNVdYEsjLUMmsZyjaHxSGJ5imH7bcXoPdCuQBLTuEgiXRfcjKoVVohZbHCDAMgxJwrvXPgNeRNYPsb",
  "key20": "3XzwphjW11uDvRSHJZYpmBi14Y1HhRPc3G8RrM54yS9B9dHNa8XMFxdVWfzJ7T3UxBnRv5Sun7FE5x9xE5RkLf3B",
  "key21": "3WsJ5YsJR1vx2rr7do25G11pTNBrX1dBGrZTDcBgzNcquqwZz8DYp9m5zt49YMCv1F9XZgJgAg5pcAqLWVjxC1N9",
  "key22": "5DZ6hmcawZVcoDNwAhDbVag3ihqUe8DdoJC8LihnMugRu5f4fMFQkB5iQbY4jy9vrKQJk2afxVce9mKKK2bU3TPR",
  "key23": "56FhLCBy3Y8W6Bf6odZ24bwFnkt3vmkeg6GDaKJL8TYTdvtSL2h5hBSGcMXq2p3J1sc69LVdbqZUXb4BRsjg2onU",
  "key24": "228Gt7awSzqRjyn4E87RXmt9foxzXpa2qoNUdUSX9ai3biAHmBAwXqyX2gBSkQ2sZ623jtSVPkGgHFRwYSVbBvCw",
  "key25": "ECBt8ST5o4EytinY3qQEeaSTWKjBToMF78wpTkGDE3FvszRVdKPcPhwyEXT2zhq9PTAqtK1jDuRhaBJYFeHVBmJ",
  "key26": "EqwVxG2UwLjagHCJMwhBrvSajwhBqkh7ffEGKajcYsDJ7g7Qej7b66718WJYujm71vPZCnXmr6Cx7xysssRiDQj",
  "key27": "4CQ5JuYK96gA6oSaK2R3jn1Uwvy72pAPwG6KP4UmThWPLLGsmoZsVCBKX1XX47mUinbjcwKGa3fDqri5TbY6RtkV",
  "key28": "3BG4qMBQu4ruB34k1H5mkxj2SD7zjkvdFNbzvgGvruVDo4Ab6ppMwBQwjDzPU3bq8ho2LbnHPEKpcDKgwaPAeKcc",
  "key29": "4cDyjCqm6LLLi38syQz2Dv6GcntUQhHkbkpMySo9JztyiAcxf4gqYFk5TJ9nPvP9a6fumfFA29yqDotc25otXaVB",
  "key30": "2SiHxfjt1w8Y1koZ1GE86yb7Cj7ZQgbhwUN9vqNxNhS48SEe8bmQZGhpGmeGuscshLh1AARCD47s2JgLKNWRnotP",
  "key31": "4tiM2FKCUqw8Kn1nm1apMFpbmC4YrcBNcfcHJ4fJSAo6DcqoaKbQKFVc5n7p4UXuw2nGg5GVoX6wokMvXdF3XsQq",
  "key32": "xCTRFJLQHCNQ6wpr8DHEVZav9X8heAVPrDRT36usiN59ZqNcayNQtM7YxcES1YLwT8dzuL4W6xVpoy2DPpFeZNC",
  "key33": "48j8mATKaxeRer4pKGSyboGXiL7aTUSKacQSBnERzh4iXpb2AfaUvtgZa5umptZnxFFaryFZWPrNU9rBdG98wqV4",
  "key34": "3PdjzmKCLoGZn6u6YzxRZsq6U7wt9VikgHH5ewn6wePPZsKf2qUGvd4kkXbfvYasT48aAf4MXcMxj69ytdHsr6Lz",
  "key35": "45xXwMf876TmkU4miDsKVZmMWciJRZAu9AC7QNmaUhMw5nNQbeT9PNeKNSpR8VmhSX7M6bzSKRsD9wPkJTW8by3j",
  "key36": "4ohSv65NtFH5CKo2KPF5zcfJ3CGPvZTHBNFCcvSKtFWeTZbQvfwjXy5E3qWGb6LZgYriHk5b7uHh6BWFgEhpyKSH",
  "key37": "4nbryfoFbKHt8gbW6DuHWyC14JVrnMgdjUvKr9REzfaXWT4mSjSK1WadbGkj6QeBJdonRQj7AaFqf9uCPNWmu7vG",
  "key38": "2ex2qJNiLQxjbaKboqYRSKhXHdjHx6MtpApPJiPaMdMtSYoAk3QwxdWgGtPNTRzYgY7k3zeHShbZnW4iYzCqtbih",
  "key39": "tMornuKauTqWphVqyCq7RZa2EURG1TqzEKj1cZE1jXCBnDZR7pwhvCGvaNvPGNRE2LkrtPRBpWvUbS3bHY2RYrm",
  "key40": "tURsHg8USyaQaR4mC4hXCTWmPyzuCctCvJUq9nbMwbzMjhEXrWubYDyjtPyEM84m4Go3xAGtHyBQsm6Y1Wynw8a",
  "key41": "35Gbp5eZKjCBjTyMdZ57kWnmpQikYm7dJSrHQKaPN4prvn33G69UXmejaqB2NgmUEf8RD1y9QtmKZGxFpbeZymQj",
  "key42": "2orBKkzaaWtWNKZPxgS8SBuFnosxtqa4ns4SJbBDFRD9v15bu5ruox2abNFUUZYyiAcAY3wyW7fku2qH4Gw1JdDd",
  "key43": "5VjMmpgvUZymReWjo1paE3G9LptG8xeG2ndprnDdVBnk5kgn92nAbGRbe81c87zdP5MxB3gebPdiT62NtmrJQku2"
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
