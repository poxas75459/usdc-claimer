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
    "2pnZLMwGDE1oxLzFmT7cAmfWXwwZq3yr4vfZajpfBRMmgxVum45CUjXJVi4F39jMzWW6nBT24SsgRFyeeLuwdgun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35tZU8t4Po9HjAvnjvAwg1WuCFzrRfChH9YChYiJqTcQQhiux9umih9JPLnTexrbD9VaoWpv9tzoDBzJdikDRWjy",
  "key1": "5eJNECDJDLHS1DMGfZ1ohZFpX6agXVF3baqjGXyasEY189cePymcZZXuqSKEsUoyzW7yc3zuAbqTC9WrjyhiZC6a",
  "key2": "4gySukW8jXXJHd4tqqdJm1Ta1rFjvb3HacPgvWTUGSYPDVjVmWV5VBVyraCfQKgmnxeicBJT2LkNN9FomWKk8Xsg",
  "key3": "52GPAvKaGHf1WExgmi4dZ9SK63rdJg6cv3uAfRfaMivw8ZeDGAgfCQygbYZbJ4P3zN8rGZZvYGwCQH6WK7skBDCJ",
  "key4": "kawhpxQYY8NTWKBaChmBaFiHrG4mMN5PgWfUedHae8buvCQGLg1B8DeWVQHYhF8hosWCLvSZWQyYoSLkqPWgxq1",
  "key5": "3GfV7jTX7BArCP1nin2CYBG1P3TAUW1eeBXdk3bD4w8LtSaCja98j6Xc5HDmYCcZGzKX88Jvq9FCw9FcHEmv8iEd",
  "key6": "45h8nmrUb7jTyUGiUmw14cTotQkVw9HQXMrurEWdgQMV1cSBZLHxFvqTmKAbHVJjC2KWwYU6ryYfZ3oe3RXABXtU",
  "key7": "4BHyT4td8BRABDQPqjLCtTTywRW1L8wAvA63SUe3iwGcFuKV93tBL5pUpVWrKvZX6JELVgpEpDWj6C5LYp1KbSXV",
  "key8": "2x7SmXa3DKXrHqAfQ5FHVffQk8dp8SwmUCVyXVBxq8QzVf5ncXNmTZYSzEKEruvccuE7AtfRYRH6tfHCrG3hbxEY",
  "key9": "55TqWhg9dcciNryfhbi5AWes1F5LJWyXmpBw1FDzLyrFcffH1oUshVyFdHdvC3RwDMRxV2d5BWpknegHhKKMTF8N",
  "key10": "2TW4QhbPMK19xfey2ZuRHybR1Zg4An9PrBWjTdkohNPKCCbaaNzJ8YBYVWJL6Rf9JJJqrZzsKGedtRzjPc2eRvJ9",
  "key11": "65kt4RDe56icmyWGLq7MctGXhcv6sNB8Fgg6zp6KQEpmNc2fQFPaBQwRVxdpKVCZZvipVwQkYTzfygTgxbgXLCYr",
  "key12": "2estqX8PdiPJhgLambWwZoakiWetsRbvCzyoGzEHSrCc366pTPZDYc5jZjJKtxFEi2shWgEYcCWjTUoLHaPHtPmm",
  "key13": "5PLrLSwLAxQ8i9mw9ZzJiZomp5srREdBNohhGPzWwuAaj5mVnJ3PafruoZoRDovhaRDbDUAoHXS4MxbDnENrrAww",
  "key14": "3Tdgt7orUwJTmUeAdVjU2VoAXfg561iSdAj6dwEmSixQUhQ1asH6pEJCeKw7oxoZcHysiS56P6A71d4qZu7Vi8pC",
  "key15": "31f5gSzNYxQQwWufXUS8ejvBmQJbPSwMLjenPcZwWMt8nkbWwvYcn3rt8hch1zYXnweRuwDvy3L62S97rjmrfe9c",
  "key16": "5SXmn9jcwGy45ayJ7A2MPMW6MXP6tDZQRM4kTEq69nKoZKfDutHThVho6ryriE9i2N88ZyXbuxa4nCAo3gXo9U4R",
  "key17": "7eUgYwuUo71g9UQMhPubw3VhiTYekLAU1VQCnKx6MDYJJzXfvTMn6JyZLBxmqwfmRvWm2aEs5XAmSc3iNr26vfQ",
  "key18": "51wNWwcEjZPdjgQVgax8QwYprvXWqRzwNRUKbBB5YGZY8xzvbLse5KQdVaY4KDeecHRTRHi9Gky5zQ5UvkbHmcZ1",
  "key19": "2LDwy1BdoPKCQPkG3dLtuBEsHgm57bW5s3tgVfPrQ4YPrcePFPyTsEtBFnbWmXYWswRkCo5ieQVoHzC9Wz1DreDx",
  "key20": "4wYfj52xfdX61ZwZ38CAA2gz47unjV6J7VutuK3Uf824Q2op7MhtZWRWyNxDFgERdhqM3RMx1eAyadLnGEbi35qj",
  "key21": "4exKeVHFuX3d4zMtPE73zUgTHU4Ngp3j42a8UmBjEm3VuxAarh9Z2DfiMbWGQ9QTL1LUezpdqqqSPY42wUXTSY3j",
  "key22": "54Wx5kMNV1LezMXxqpvakVBjxJjWYPpKYQJi3XGPge8hGuUZTPgdWpURGbiHzgR4HhNYAPRYEEZMpXGRuWXkpNVW",
  "key23": "5LJYNvzCksxiM1W6HwN1QXGQPsM62zq8PtqHGcHQ6XCGoL3karrVp6dsmR9aZZJTWk2BwQgCGUE7eRphwEyhnATu",
  "key24": "564c8zCpjqZUcd1huvkhc1yheBvSA4FR9APP1XYiKfSiyaviQws3edmkdgm4MB1qfuMYJDNDNAWgcDH3zoh4VbqD",
  "key25": "5kLK99AaHkTWE8hY9agWWpMtArA1xKxuYad8KSzGx3aQ52btN8vhELH4LCb6RR5cmoNmhPbsZzcwDHVuL1dnYrUS",
  "key26": "63wsLLssLCYqsC5iQxejSPEd1YsxL8S6GgjynXFBPWNdosB2rWDkHXh7m5mDMTUxjFP1a4YdTYzqT4Xt7sYW9u1s",
  "key27": "3FpssHbwn24ihLoMqC3ND4ghbv4FKuPAi25F17Uhg1RkHwuBNXTsymNWpYjF137U3o1pkjvg5Emcu5Tni2nnDpD1",
  "key28": "5uhTVsjCNYmHf1U1KwHQDoG9joKWVzcmXt9eYdfH7vt6DGK4d95h7av3NMUZd6XjMQ7EQzkEEsMvddfNY9ydWNzr",
  "key29": "2zspcMrd3WzVuDiScf8GHm2nu1GQAYV31dWNNJfc9fAm8LeFSzEuHX26gGDaERGuSZGT9W8nkPjSZ41MubvyLfSb",
  "key30": "4X6y4Lnvac3kyjDRYmN2dAu5SWogQfwQcRafkttzTgJ7uwS5fYw46mm3tS6UukHBJMYBoAdRPuTBDK4WBtiGkqbC",
  "key31": "3R9WkzdueUZwC4ZP7UQrUHhVAhh8Z6822NMgCrQ7uWUeosPT8qK4URjFPFT9uURTgJTEnSC2MbgbwDyGq13a97ws",
  "key32": "pcy1doxDSH5amDtnq425fQTpFN5Nn357euFCTN3HKjamM9hWd7hF7fXxBnpCnWz7ammeJcCVCXSztTh9bcwJA36",
  "key33": "5fnkoShRKd3R9XthdymGuJUF9e1py6i9Lsy1X22wE7VZS8ysMtXKFMznq5LQkXB3QfS7Vj5KSRNe1bQtfNKxtUQr",
  "key34": "3skXKSQ1SHJosaneKndYyHDCzeeiJUUy188mEVLSoutZqkZm3WxAfKXCuf1wHnmNWwiy3poCymqdyazJgW6h44tS",
  "key35": "5zQEQrH6KHHpTpXCtksubYqjbwKY9t2TxyjGazv2p8VKVSku6Y2DEVWJKSEUcPtdtk2ouFNJhd5VKoRU5Xp1CkWh",
  "key36": "3pJY4cvKVkQYha4vu8YXCC9yjahzwe3t8L2oWKqcco82iR1GTFM5DXwcrEGYLWD7udiKf1xRPJKhMSY1hmCNPZeA",
  "key37": "5QuJAEHR5vkpbU8ew52hYXE1G2N5V8n1pAHeQnQqEUrV436GrWZBVMDWrCD7hGefbmCKrpabxwetCoS7fyYwK3XF",
  "key38": "5nthrGc5t7XvQv7Mw9PKUoWHegib7AkbpA7dVKMUiWdTgCdZNbG4hg1fYxpxV8qCcZ6oZPe8WWzfSP6Ze5bY1SRZ",
  "key39": "bSsS8xSU5ywxqwiGqL2W9AfAFHiJfG4hHPFwoSSWbwhjLZaWwBq3zQKKBEjfytTDp9z2V769zMHDR3JkmptcekK",
  "key40": "2ViaGS9x6DY3y2xFBA6KXKGqaa729cU9ZR6M97HL4x2tNWPxEhu1NaE5DZAhZZ4S4VSrWHNFNmyEqEbmnm7w4ZFA"
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
