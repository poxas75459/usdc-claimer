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
    "4sKXDVrFJdGXZeLQpRvsQjpvABsnJ87nCP4jNfJERBR5sk4FW5ygmRkgcFSSZqCXDqwwh9x8nZU6yrVeHmEXjWkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHwHzkckPYSVqLTqcixkK7jkN1wqMMxYjebVxp8ZEuhPcVzUpY9Aj28dc59ZkZe9UceeNYG1qXck8DeP7JebYEs",
  "key1": "wU3NaJqGPdg3eQXMsPPhJo82zyznwCxiyhL9UQWLVhWyGBmeDB1VmcFSemNN7k11n4SntaVv1V7rYaA6knuhRhX",
  "key2": "4Rb2g3LyPvbMCCbzb7DMesDGMkjKmzrba5StoSXtzJhuDMATwbM5mQ4oE3e3rr3UJzVRUMWeCU8niUhCcnK3Ru2z",
  "key3": "53j5ZRa14rBHPKK21tE6BahnsuDXG2y7T1JJS5bb3StSnKT4bHeTFFYz91AGF5XWk54tM1y2xCJvyErAyRbiuCJ5",
  "key4": "4haL6zXNhr2cLMp7HDkqoRTx6YsRimmrD3ayDyfoGXHG4fHvNRgSSVztatVg1nThu1JS1opnpu2ieTBmapywv6Yq",
  "key5": "27scaRBnbTKSxcF9eMtPA8GygDQcSy6bhw4noUhkzYNzawwbSdrURU9AhwfaGKZUW2Ce2cq27XpvSXQ6oo6W7M49",
  "key6": "3yzddA6Dh6X56Z2yiLvySubPvCKTgPbscXjz24eNGVzF27iVWEVGc9HETTEPMeNutBctkKg5FJcskuPm7d9rSWtK",
  "key7": "4xZh8PW5kGdH4hi48G9PmLyxgRhmiYWVhkoui3R8HDoqfiDinyBPaasehKEzr5S5a5D8u2GJFS979DPcUSVcDm44",
  "key8": "3mcpBrTbu4QMkk6x8jiqR6ofJZ7kg8T9REYCL1hksmWYZYq8X8R2EadjKfBddh22pHfeoNDXw74KNhqoFdms93TZ",
  "key9": "2Mj1spmUTyKZJ3noyXEgLHxuNfePU7WDZXCbURAXF3fKaF76XmK4iVTKbw1SnuLFLigj1WtAJbri47LuRsrj6aW1",
  "key10": "4iW9Dxr4ZfKa1jSUZRJWH3LtyKuuM4tw6unyFXAis9M7BQ7GF7ekiqihJEtMGZZnEcN6MNXguu5n2RBfMqBFJcDT",
  "key11": "BT33JQvBeTxVZ4Ndtiqwjw9HnEvSifVgiwtkYR6EAymTdhxMVjfSEWr6TgSVRj4uG9wZZs5AQY2hpt2ANzxdmK1",
  "key12": "21d9FaKhwAHsca7P7XzD4JXwJGAv4JW2K71NhJoqA6U51AdaMYQeFmDn4Sfp82tEULt3wjkCLuqpXJK6XriKMNZ4",
  "key13": "4ZVE77sFiohnJaC6FgLmcYTcnaT4gVrdSYucL2EZ2b1Xo4jnPRuWEpFXvnymzZtbPShNHUmNV6apxMwHckoV8PR9",
  "key14": "5A8LsWWjcF9mJ49jxpBfnGc1aRezLQCuuqtWEXuuJ1myD3h6QGa93bKHFGm8GTPxDitrXMcH9MmDgbSokkitkYTv",
  "key15": "2pj4uNVxqC1dCLRLM6vkyWngCe5qWEgTooHHHSqPjZMgqaEVKbiWkwzjFRCfuANJoGuBp9itTnWpmGa6RocRNnFU",
  "key16": "4LRXFDKnsj96bKzDY9P51AtB62hoV8axdMSCajwNH667KjeyXNZCTBei2VHJiNJguwAP729ZzXPGM3K26Pyk6owy",
  "key17": "3L6tin7eRGduUrjXaZcRAxnjqSi2STW8WKRgikMJRXwYRHpM3Z4cgHShbBohuUTdBAzorcVeGiAhf5NVPEtgnifa",
  "key18": "3M5WJVFgdZgYqEk5k6ipgN7NBL6rBBgzufZRC9ZqhMShtafzHU1fiDDvbSQ9H8fPjYGQTgSK5xanTRF14KnHjr4c",
  "key19": "5viMRvW5vuNfNNajbekeGuuKsFfsizoWhH8tjZW6Buyy5PQFus8keHRGZJ2PatdWFAFCyc2tYcqQKRScMhCzwJWj",
  "key20": "MsHvG31ifAN9SMnN1Lphi4Ftdp7uVagnYPBTbQshkfhFFYoxwxgjSFWBrjwwFNB5bNi7Fe1pMVcL4vMXSphw7qH",
  "key21": "Ts59djXGXMd1SgkAqj6mjash2cEM2SWGfe2vc9gJZv1CzCw1pj3HR87ic6rLQf9XA5jq3ZTrsz5HYjHRumGgENp",
  "key22": "2kPjUKsUrFpY19SUucuzfXu97VL9CD4bbKD1iszebdyUay5reHdvmQXeibbmSgKueuSfC9ewpswFBPgcaoopwQbN",
  "key23": "5zshnFELqBSeTbhxJufFBnvjuFojr9RJnZNeu8MKbpWCQRZcLuHsG51pHoJACT5PLQ23d8m5JbNHX1iqGHKVoaHD",
  "key24": "5YGVFbPRyqy7wQSVdTECdu4rJu7FqbfAcsNUQwtommLw8Z9mxG7NExuDZCoEPVBeUX99gZrfadB3wnpTKZGKUmJV",
  "key25": "29hpaN8A5JicjS8iAUCD4C8iX74empB4tzzYUPKgacEGR8D4RdyML5NtPW5hPpnX2JUdbCMzNVUtuACqugb9aHs9",
  "key26": "5ZkSZ6VDoZB4KvWeQrwyg1NwmyYSZUuJe6ZghwezuBBb278DtJh5YVGAipA6bA4NdzG5r1FMDM8TNiuRwTqy4LaC",
  "key27": "5AkFSKT2XFUVLpY9ETumTj4B4Fr5XQXRpzmQ54fnbtmJZngiEEaUXj9CYF4rtCaBtPDjGvP4cz3QxbtQ5zTDzffW",
  "key28": "29HZhNhsg4Pr6uW4sNFLz6jEX6HMEbGGwF1reHbLRZb63PSCtb6szF9VeHbMiz5qNqjVXz21BQgsFYJT4fdHuQUt",
  "key29": "45W22giyEEE11nQduGjSGvoFu1ALRht7aPRU4vMPFUjKbHhWkFwAX7SLh9Pup72KKUhJUo1GMkwJdPDANXNwytDr",
  "key30": "67p73opy1YTAfCwsVKvZUmjYvJT1az8GE9smHZfFSCWjapjKKQQPb1sVkD3Q2t9UZPqWRaAUNZz4y7PETSyFe7qE",
  "key31": "px1JnUJtoUabFTW3uw5nwrTt9zwRo9YgYGPXYhtHyj4ETa6ezCAJZP73nbmMeHMCuEnuXHiR75gzJQnkUtShQg4",
  "key32": "4BkCp2cMoRnLmZP2412obNj5rpWi3H5NsgiYcDetkXHou4X8du2crXC5feDKGugQk5XjDSWQXh2bthThgoqy9S9f",
  "key33": "27swLiAt9B8xkR4fJy2iWH9oDtG1V2PH9AMpgpqmbZ5sgk9KS4reWzUsUVjdSzqp7ZNSZ9HbiSePGvz77bp2FUx8",
  "key34": "3tcQ4Yei1HEdsG9i2xPtbyRMEFwZfpo6ij26GnmB981HAZAAuBnkHbghXSG3YW5vnVMWtvqjJT6PL3BKLH1nhDXL",
  "key35": "4TsJBs4xTfokJhVVyEiSWPT2RKTygfFYU1r9kNqbGWhy9nm8wtzuGmu86gZ1Pimhcwbku2kfvXCM4BikVkZZZLU9",
  "key36": "NA4pMfc839dXSYPQtbaSZcvDWiLSa8HcQPDirPeVU9W3s2Adut2iNYYCUFGH3g2F3hq4zLVtZ6jDE7XWfvGR5a7",
  "key37": "wnMKaKgYHw8tJvn1E2SZZYZSGb8fYr9b8W3VnmH2ukPS4x66My7k6uXJ8TjtRz217TNUyhZs6sifgzneZb8SUoY",
  "key38": "2pg4wTtpwkUKugdx1VNZrkA8YW2RUtvcnaoxFDcFWdrZwG4RzE8xen3HmNJxrDJy931o9sJRfLv9G3N9WA5JNzry",
  "key39": "MoK9d9s54SZCcCWny2bvE21obrERsmA5ZNbCweG2dd4CasiRajGxfxBvKq8cAtQ9Qz8VQNRbjvYWB4YB1nK4kk5"
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
