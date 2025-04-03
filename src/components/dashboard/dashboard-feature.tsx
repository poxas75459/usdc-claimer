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
    "2qMbwZcGPd3kTRfwR1B7Z3SHjavgTBrJgP7yFPmMcx9sUpZGzzKLSWS8pjCt8wNzKyHkZ9GpZrtgNw6kFEEHJWXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeVphpu7GE45ge2KE3u9EpmxHyzFeuedBSX2RqvQo41bTD2rn5Mp3ruC5j6faWUNva2Q3bSioVnxsAuKbbDM8mr",
  "key1": "2ZTW79J8g1WUNAYmvZtrXUM8CPxwud5S2pojNEZUvZZctRrEtL1bZzrHAMtAuABzjnXBRwYYFdsTxRyzcqkT5ttJ",
  "key2": "3j1594NddrCr4D6BaCzVxECjNKijbMjqfSAoufce2axTLVzNxnup7Qb4DiXngZ2X8DHuyGDGaLPVbH37oK3YWMSa",
  "key3": "2HztEnreBH3eUeD9J2zfVb8GtBpkRHonyyGXtVUaw4ZN3aqKoqGEX737HhXMw2BV8JqRor1spNfLoB2ZZjYaKY1j",
  "key4": "VFp7dRm4BNwESWnyScwTLfFosY1Kfmb165J6eVnksUuKnQt6cRUwDwYqrzpc1capWUP2Cth6soTtXKZEp1p9EjE",
  "key5": "5oZTJyZsDiG3rmACGK3n6v1ofocnVNWvb3SUsk6u6PyffYVHMv8ZQuNrRB53h7iE683hAfj4h6f1ZqNu3Be8jeC2",
  "key6": "2X1BaXnXNgjLwJA7mqmX7FjzkjefBKSjiPysH7LZKcNEiuVQt89QUHrKSVFE9GziFzrtLRxF6wmc8uRUdzuZPgEg",
  "key7": "5edXkK3nAxcwAKwh4dasrLydV33LvCDEPvTK9aef3M16MQRH7Ra6Q61q32QfDJdtwyuk6UCH7AST5sx4ipNLyNFA",
  "key8": "4HQoEj6erLdifEkfpozwmB5PdjBevtyzNuWzVUb6NB5WHvh8pqhCMcwXdwP3K1diqLNsHuJSG6Dz37jfyURbPL2S",
  "key9": "2P3X3Q5gF1YmamPc2H7MN5GqxdLgDKhCnfkBtbwB7CUdWBRcTDxt5auk2PtLMEz1XWikG49PpGbdHWmw6hsLJqao",
  "key10": "2jKzy6MAf63adKchc3ozS55pBa7qCcvewZ7CsLcr2FEpcweansNcLUQ4Bg7bpaCXm86EzsS4WYp6mAhhTQJmBBUZ",
  "key11": "2VT12Rs7zQcBDxdCNsJaCL7Qx8KjsQhmELM82EkCPregkv2oVWbFcC53vkqKdF6tr14w1fuJg139jG4NJ2Sg4uo7",
  "key12": "4rdyG1o68ui6hVT1wBDBPh6swD31HitJouQehAKeBUjhjALWF43HFDWFAzYJAiyvo52vrtR4UQUGpvGtUEbfh3vX",
  "key13": "3HxKoTGqkG6ctyfJkmk5VUNze9JcnYgtWP9zKs76bgLmv4dTDLYHDwLDL4NSucVk7EEJhDBK5ksxg3gMz8xvYp7x",
  "key14": "3c6FobeSfpomGn4DQ4QyYBheJfDrSPaJEmB4ETD5X6oKtpq4QpKDbVgfzQnPfzKjq2kyxTB4UwAMMkJUXQ8fScn8",
  "key15": "4K8AYeBiKx9w48SRKxJnJU9GUkXfZYfwS16L8TbmBHooCfM7hbMtcz3FPDJXg1CgpcKg7HDV7WaUd3b7vmttVnko",
  "key16": "5exQzMWvQtXrdJfY6fZi1RbGnmnnsG9Bh7yKvfpgzqZkFUVagaByDsa8YnrmimvCRtK2D1SExD2wLEwXXZ76GD4D",
  "key17": "5Np5gzMQwxK3goAe4LFhdNRJSp6mTUcZvBKgzTh5DXz284SAHQuPTemci75tmU3EjG9zxKyGGFEzYuw7BTRUdFPX",
  "key18": "4FPwRFFuPLvbTEC3kgRWbCcXmGVHL2LzhcpQrnV2qyQicmtoCKeyx2tiEDCFhi96h1umoC4LupfsCBtCBWX2nFeT",
  "key19": "5ZpwMy8PJYS4ahx9M2EmKgsYZiy6x1LqK2iBLcW44Aov3nPDh9k9VXRjhPajC5PCcWGSEx3pevmxcSpBUyXKdWfP",
  "key20": "4bYcXaB48MEU6q5C7AEu3Zbq51Rkk312K5DHYA3Uohfb2Z83PvvykrM6SRpqiYjWpH3b8hiC1wQAvpm5YT7LfgQP",
  "key21": "3ncywjSuShYiXhgqWFXvqCW8RP9U4YL25KnD5VFCC2UNYpa4USBNa5N8a6QN8L5vC17hpVXMoZFVCx6SaAxfUrdY",
  "key22": "56W64fWmvkhHRgCLksr7aGbA6eYdfc79qrNPWj8ZkcRknnk2yPUNuCdX6x32uamtFGz8KSiTgqDi3rp3hxNNk5vQ",
  "key23": "3yrjjr5f6azEfXFcpkCiEuDoJGMy7p8YXH2ZRQgPE5hEhquB5wfRFZcNctRZhHqoqFKQcd41pRfgVzMVJ9qkzQTb",
  "key24": "26EDwP49hRYS2Pq9NcGWN1D42LZ2fio8FKKBbW8v6hbKkYKGKVEyqwyTpR76uRRbzDwuPrdT8uWDdTMWhqccUqDj",
  "key25": "2yfctGanftSZ6gSPoWDPSf4Gmkf5z6CdczjKt7cTPYfmnwmMoxpK5ZrMYhFZerievf5ho71NzYfoRsF3UcZVrRQ1",
  "key26": "aoHwdxx8E9EajRQPRbLqS78NE9Qt3wC55MGpxmcF6BEnEHzF7Wanq63jzRsX3Se2gCAJShA1zJzgKQATGL38YKP",
  "key27": "3dr9qEbdL9J3iamjAEbq26YruDwVBfDYLSEzWAKX9jVemXEEgMskwY4EtAKN9ngLKiVHBqc4e2uKbAsnNXZpV8jS",
  "key28": "2sBxG7UyNTaLvSmtPny9Xq1DNq2BzHo3CRADP4AQYvoae87AgfHxQ7iDuam36PjC49gMBmW8yCKhJDxiPEo34goX",
  "key29": "3nCiFAvASHDomZ7Fb4zQe8Ym6esFkgeXWPmdTnDSe9At2z5mTH6ZPEe3fGopiKCqzZA1LDKZyApdXgwy8mTXKXXi",
  "key30": "h3X98oeV5fNf89BGZmqUjuVhP1Zgnq8i18xoBwucL57UeuG1Rb9ZqbXnydAE6qQiBnpsEjBhbfmBzz6njMfFrHM",
  "key31": "4hWBwmgWvfHDmZGqWtQtQ4tXxPJjrWXTgQeyTgLuxskUdf15Nj8wXLCLJy5c9ouS3RPGwgYMQgL1gc6h81NuJALq",
  "key32": "s172V7AdzhBnKj5k1Dj5pkA1iLLB9q3h1V6L4GXTwxfNkDFr9U3c4saFAMD7AujyEZ8p6EPvrFfKqmZNB9jWosx",
  "key33": "31BRLmwyu2pLRDyiWJq8zaL8v23NcpTUiPCkPCAcNCXxpUXVYppRGsv8WaE1XLsMUxGjtxsLRDHERwEEZQGzphab",
  "key34": "5jATcAfe19bqsy9zFCBXboieE52umSEbTf5N3RgVA3HdfMxyHvGvGjdTQhAwFrYnWo5HgDSnZCjB6EEzRpNm8oBW",
  "key35": "4duQT719KXtKyrYXqTRNvjWHc7jjtHekCgUkvjJbcANtKYEYhG47kdjbn7A2tx5NZhTqrTYhoWFxhj5n12idZWFw",
  "key36": "3HSRgMRh41d1JC6KcPFfv1wD53NJn6pBGnzD8378guqn8kFxwbtpEV8VqQNZ9nzjB8Cn7EQAyG7chKvVgDSxNvW1",
  "key37": "5z1kMMG4E1dE1dAusbKK1exC3Qzh4gbSqQDDT9sLYrdfVBBAgS1iHiTjz3rYVmaiBwyTW3SMjhUsNosw6RYqNqXt",
  "key38": "3TcuJ1LaDWkuik2A7xvmUQ8sikcjmQdSsVFNb2owSCphdorBvAHdytvJVr9goUUMtL6Uht1Y51NtzYwg3JCM6ePc",
  "key39": "9zjXXjDJshSfpYFobHRUhFXVQdDpo6h9oBeiYH5Y6E1NsX9L3eRxWqjA9uGdqSnasWiGeiQMFLBmj5hevv2WXqe",
  "key40": "4GyDY1R3PctxUaRSsxR26KvwLUxSYTedP4nj4nijVK8P2bStWtK8mADu3DUE2B2kXRyVew11wbqXaKdo2L7gqXri",
  "key41": "4rRv5MS6TU35rg7bEpD5BtiR8RUffEuUn21BTtYG9MxvJwAK7pfTEb3zXdtLbk4YY5twC2hA5GBJvFKf4oztsgh3",
  "key42": "JERHGe1ouhR2YyDbzDVeP7UUuDtcCucDoQsxAWMD7BGB3ZxGLbQjDL1d8LVCpXdoskY4uSXpCix8h8XupGgdnJg",
  "key43": "twbCHMiWqitDayv2cKi8bVKPZT9Tma2uTLLxDD9SMhWCxXGGf2rUifuHCcH9aXa1pVsHrFq3wBtr1LXxsdi6kga"
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
