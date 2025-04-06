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
    "2QXb7z36PdtEZYswnhKW9hf5yymf71xarGYvEBaaJoJ92U644q5aKKbFVVkNzhbbdZrnmNguv1bA44LKm6q23Y8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KcYXpDWCrAbiBk45ahzJ7szwjZ3Y8FwuM2FPagt94azo65hyfS5CuYHagkYxsxEkZdnnvUK1toYbBQtV8CbNTKn",
  "key1": "4Z5Fj8Udm5kD2Z2a94stmR6Ri6SeB9tqRL1VNVF4DbXEGyx5UDSLgSfCAVrW1zpHpxrsnJiz31aEh57aAcyaFPeT",
  "key2": "2uDpYwsNUJBAFS2kznYUb3BccjzHTmTu8ZFmayrvzM7EDK67CZWokKX8juGN9axLtYW4at9XBpKbFfSrBHDGhMCN",
  "key3": "YFbHza5a6zeq6QP8GukFFwvAmkKjy3FBWn1rZonhKdTWzeH6Miv3iCrcm6xMk2zN8aBHALAwatCy6gSZkc9tr8i",
  "key4": "3okm6BsC638oixQ1CVgaBdnqNuysTJaSrChwQT1j12wAUamCup7KGaj8rE1JwrKDixHrUr9o2oe5nk1BAZ57U2S3",
  "key5": "2gNEKZ7jtsKFvPfPuBeuD5kUQiAcZUbdEYj16zZ98q8qdaMGT7pCH3XBrtCbuUGbYy7DmpzYXbeHtEcKviKaCZXH",
  "key6": "5nyUVnmU8rYxwQeWgbC2nXdzNx1YJQivQf9pXCNnMVDS3NBPTW9tLAhdHoaL8cbouxtVbKLg7ka38H284BkmoGoR",
  "key7": "39cCMHWCA98KG94TqeuPsNCd6JdcLePUmCy6uW3pPDqE56LTES1UpyiFkxHfjcirD8Rke7KX9cSoNGV8pXAtsuGS",
  "key8": "25qxqoY8YRNbV77ERvgiykGvq1tyPYgLviqoYiDbfT5mYezwLTkjz2wmpBCBUJhLtX9NC8N2cXsQsfw1J2xuNf3w",
  "key9": "485XWJFavgxgSSw7t4jzaMKqRtpWCENR5cRu2U9Zgn1Q8MS99JPom6tUbW1ktpQgwER7AP4jTMBmzVJ1USi5bjVy",
  "key10": "5s9mWGtTxJyPjUoqtMkaTZn6KqyPWeuZsWZeZQNrbmiv2oSWPvaznTh3QUoXYGxxiJmDQa6vj7Piu3HcSc4ExF65",
  "key11": "5JJQcvF5oDt6fUN2q14vWmjNfBM5Mx91uPYFc1XmjcduAinFQW5fuhBRY5GckeQbSNcKqpU7aZadzP3438Wd74Hb",
  "key12": "2BmiE6y1xrSXLGte42rE84z9BNXR4ct6LW7xwmYKRMnBxhaTNUmFgUzD6h7WiGnYntTPRXL7rdYtPp66GxCQpo7i",
  "key13": "4EhXronByuoAakDxfhVF7juRP4CBmX1b2ixVY9VqQ41FNaWRuJHd9wpEbBbojcheXz6JWhnaUkAGMrFbpzKVE3ba",
  "key14": "TuwsLhQSkAhiXHpRezz84aWdoAuMBmGvjWkHTvLFVSJeUSRV9VX48wznygxEPkD3Zpu2a7eG2TLGcbjZZPRpNrx",
  "key15": "5rrdHW1Y7W3zojswRnbjDYZ21heo5vFDUix2AWnJm5wkCKmfnnZ7LDgNERzsnybQoe9PnYjqqErJqbahkzno63zk",
  "key16": "4sNvFQRkmNVg2B8VcHU8ZrU1fD3mioqRTdv12n74L5sMJG1ZNbW2uwaCqYD7SFdxT6jb9FM5bGC9XC4aYmLyNyGe",
  "key17": "2WVcTJFiFMRQ5qEw2KupLdbEFdDnfzH4ZSFrBguoi93Y3VkTtLLY7ha1XLBmZxsfba5voawWnyqKbrXN2zcZcdjb",
  "key18": "4jV1wPzDHQMYCGN8sPizqxQwGdP2ZsH4mkW9SayMhwLLdDbJ5DcaDj5HX4vEoCtrBFPf43rZzDnC9LPq5ypnNXw9",
  "key19": "2D7ywMLLWPhDJFGxVf4cBhm7fvmZBoraVkb4Ud4MJxH6Zf3P15xQpZzw6DoEYZTLrN4msqwq6LKouF4aq75g52gH",
  "key20": "2Y2kDuhMqKPTEmUKX2tiHNyML7fuxugNvJdAT4hUnmbKAUtHgBGxR3LjUMNjDBv19mA6mSxG4K4pGSv1bZbo4pDT",
  "key21": "2YVBJLhE28NLtFs1FZuMvAfnJWKLtYw9YyAWGNV3GSRyPYY7ibfGo8z1t9byKReRF1qJ16dJjPHF8Z7BZS2GzeoR",
  "key22": "5HTqn1xCwSswuj33cRPxdCcwUrxjJa6k7Rb8zJ233GvM7MMFE4QUp6oqTKcfGhcy1A7eJvzHeUtkmWf3Tmij9jMh",
  "key23": "3o4puHEKsnn7x1M2YwvmyPb2PpsSoB7WDrJj3ABJMES3KpfXCYF6JpJyHt3zJ373r7F55wCDcKLiZJpt1gTNQoAV",
  "key24": "5E1VS8gYAsqcdVfVmtG2HYtz4L5HMWguteEf6LcaZi7AXimwN7CcXm8LCjLEvD7EWs2u7A75gKJMk6FuWpcqjVMv",
  "key25": "2cexhCbDxF2ZLpxuRb2u1riFB2xrgWy9jE9cHP5Pzmc8DeDij72KcB3PCu93NGxexpHp6fKJvms9xEbUCYF87uVk",
  "key26": "wvoiy36u9o46ARcihVihcbWRQxov19Djh5pKaazeJ4D8jMxCK68AuDpcc6jkAGjtK3AhM6oAD8M2zeq7pSQaXuf",
  "key27": "8saY78qhk2aG8euZyhRjbwrvWABSHwQt6dmc2wG8hGKENTCiL3ifEgHAcwKRPrnW62zgmW1nTj39J8tmbGS8KZA",
  "key28": "uK4JdTDCh44KxU1oBXAv5iskRGA6bieWcKAETsuZS2jbUkLnH6e85EgvsZxSSjFDVkrZJ8ChWEhHWfrcyZAVYWN",
  "key29": "4wmaKWE3Th6iEpVc7R1cb9ueHGCEgbA7Z3G8FcedwjKLd5E4hCVdn1BDdsfdPqSpRDeXUPx3scEBz66nSiLQEftf",
  "key30": "5HjFu3t2QLNhgKP1U2TdnebyDdaHuVHsevktZC6ojJrK3um5Y8URjnXq5LPPeukMPPVadaof3Q9q9PoswGCb3Gb3",
  "key31": "45G1s64v8Cf2WyHULRUWfNufftDVS7BbRN9KMMud5fjkVCDUCud772Y5m4dZwpUJgkPZdYC1uF96ye6x7wBUr3fM",
  "key32": "3mMv5T1rK8SFHNBP8jX67F5iyMDgEPSsRbmbYRsY3UTbXdsXhcm8hZLUfCYwQNDdcQ6xCjjwxYDCPmCQWeZsTSVg",
  "key33": "cVGyzyZnkzU1yt5gP2pUhFDtyKc59XyWEjzYuzQBqAHS12YWjjpxUBCjCeHsR9TGMzVv6Gp33XJPy8zJbzYvgTd"
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
