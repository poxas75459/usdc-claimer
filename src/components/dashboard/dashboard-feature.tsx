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
    "4iXeWMkSByGcPUriYhxGtVWMpB4P9z8rnLXbZVoCt5HZguAWMRxiYopbBNoekQ9WX8RNQJfAcnfxtMW8yGQUA5SF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fS6KixuZDzVZeX6RW8FNHocH3Xnv1KPaMqfkFn2zBgHPWRK8mHeXokvofztwD43dvAt8hBqoJ8cHCvbAJwgMyj5",
  "key1": "WQsLfUP3fqgqLrjYmWhqMSJTZWvXCLGY9tbmeGochMp22v2eYw6szpP8oeqtpfrvKfLqNBygeaqcv7AscDHVeSm",
  "key2": "27ur6HM34Genprzie1gbGDxcvfmkfAc9sfBszhUC9WKf1GVQf9fNBiEeLHtaCS8RZvPVpmqwQ1YLWDNX2y26Hfhb",
  "key3": "nQCkQeXwvHbNYwFFMuCd3ox2C85CX6vqPBT2gWkuqpYBoBbq9AXaDoTfR8vfXnRafrE54pudWAyKVNdJDvthnXZ",
  "key4": "3mLG5kG93EavtSqoh3YYvGzNf88MUxsCuXikUsVJTf2hwbbRDaUgqnfmQ2osEe1B7PLhoWvm4qnKsdyCdwrUM2JK",
  "key5": "2zFEvM3hpQ4Noz8aKjaYBxsG1nHHfCMptJdd1C47bAxWdfzR9GpefQH3HXwFo1nBJeU5AYBFvqSGhH4o4uEZDr1i",
  "key6": "5MhwDNdKdyyXkc5vQGBVjsXZDZNhLgHpPhSj1fL3RUb3r2Yc6WmJM4uRxF2JRr2ULSruCkhEwx6fxi3YefdxJejA",
  "key7": "3osRugEhFhafaKoP2RzB5MieLwRpa8wwQE87Mp46vRs3z2ja5McrAtf942GDYS9Bmuh8zYE5tPpwSg6Lg915NEgM",
  "key8": "h4QgpoxW3gVk738uh8wzxtVBxYk6E1enwa8XaEKbdYhywk8dsTkxmviY5UoKzoqdLCn582SXUUtoHWZJVpkAhAy",
  "key9": "5F9i17AosdHjm3TBw3iPmmopKE9FYVNkDc1CgTtfnK1B1ThD3yb1RCxd3dbUMvz2pu4gjhQS2V5MfyCtN1cq2Er9",
  "key10": "5gQrFPU9seLumsGNN7ruc2KSWXtpktEAAvqmyfBg9zibZWsrRDHxGuZevj72jkRXSh1bQxQwDRZGWiLeT19hh2yz",
  "key11": "3g6UHeDDdnsYAyNBfz5i83TRh6aJJJKs5ea4uf9XxGpK6wBYFoVFpyzP2bNbwyeMFz2jBtCtzm5KjNY6naHMLqB6",
  "key12": "3HKTXpLYYJsHZVko6SF76ptoxwccAhvHxZiZTwdpRFcjWFACKZUCpyyHCx1a9PZgQxUSCZeoDjLgSmNcRArqyd4H",
  "key13": "DXZVUJcKqV3J22dM1EprxcHW4HmGtSLXfMPeQWN99m7YdpUro4XB59bhpTsZkXwvhzQoHGQQ7HRkLv6VD5Uf22G",
  "key14": "iXc97F2kzkErtWGAM5cnpoZzUQ1beJnyAq13Bai29DBavCxSXfvkFK2WxGpxEuR8USfxwkJp6nSpnQo1aWgLL5L",
  "key15": "2ru6TK4W71KcYHUnBCEip2AZKuqKLmDLcJwsEwEvsernw4e4Z6Q5xPH2og3Bj6nPpqmevZmXBPBpWyMDAy4sQAP9",
  "key16": "3Ad4jemh4NBTqCxwMY8Ff1VmwVLjUQNRcw1XQyixXuitVZiLgwwM634pEfKXdcyStf8ginkv6dU7WmCnzgDBtnzy",
  "key17": "5cVCQB2wSz5ZPaZAqZ6grb7qeEqFVNV7b9RffqPENUpMLTKFFi1H358PSipjjb3TFTCuw7fAMmHGQH9hcfnLXD4u",
  "key18": "5p17aSt624URq1cwRykMABW2QuiU9pjpsLqpyqD2PthMx9oy3hd1de9hH2Xw33QZL5tXqdjujHAa8LyAzp9GX48D",
  "key19": "4KgSgFbpvE3mrxZDupSZ72Es91LmmEwuwZTNwyzTfGJ4aWnfSQfMNS5Kt8pmXfZ2R7hsm6JHFoSVXZhzEbERrkM1",
  "key20": "4RefcQAkUUPZE3LuB5AR1HTNvaX8QZFRKqcN5PcVxTYp9MDdhfXdkqR899TTBHVtQR1vxxX5he5Qg9hBcygxy39r",
  "key21": "kDeuwNfrvwiW5PbNJqBpoSwxPzZypUZgoXuwsEcqEJ3xQ3scxzu6CqtbVVKPVxVdX7hTNawk8F1QvmN6XwxLXPi",
  "key22": "2vq4fbd8yXkofJCHZh6aHUA1zDepHEKdtEhCfwRWbsKvv7KLjpnK9T9KkCrPujYdDzJy5MoxcseB7cj9fNYAAe9p",
  "key23": "U9c7hPgfuMj6Mm3ncdQ3gTjR2Hi4NJtSCePUCk3ebyM6ZD8sAfyWkQ1skvxqzbahQcHRrhHkUsaN3eQ6pJHKgEH",
  "key24": "2beiZpXLbsCH3ZXCeVjkcAfao99jsXPhf6WiicPwsGMdkWvauTbuFd7xTZEuNiYTjxWphHZ6SHTrcBiqmXxC2rtd",
  "key25": "2Sez848V3JvzbU2Rzuf9krmxhP9jAsiqGEfhiXz7EYrZQuuAB8cYEXCrUrvvUjFuqzYVTtiyFQ1f9ChnBHy1zfi6",
  "key26": "3gdupVjHPPsyxCFQnSvfTwwSbnE38q4hXMsjZsEJb7W7EAsrNHZYrzYHGEicZ8p37X2sVcwhyknheqwxJYAhkUK2",
  "key27": "65dpghWfDoA7FWTHwPyqQXy612bKc2HmqBvakc3SHTiB2gNLxfMCMe9BYFpx4s2pfzbFddG6KXvsuSsN5QfZhgm6",
  "key28": "5hNBTcbb7NqRg4fjWzW5zWp4qK7n5d41WEWHGuGuYjcxDQUr12cYUxHWvRmq8hKBsetWmDwnAYHqqKXsREv4wCno",
  "key29": "7WtPLZrAMs6fUwHYMpesiFtWhcbnqKZv27nhKuFKcqCg1CaS82y9F9yXbKBwvp8aH5qxDTYX4AhwkrPWgNxUAQ2",
  "key30": "3RC6Nog9eoDjymR45PPTQwixhyUC9VHWeV5ER3rr7midRQKbbt1h3N9mnJ9M8xo1eEbrDcNF1xbcg2HWtEZE9p7q",
  "key31": "32UHXJeL7NG56sHtRFMJS1EaGYXEvadT9rhvL7h2Fn1YoqnYSXrSA7cJu8d3oXBr4ewrG5pYUThCRaQnUUrQWmZ5",
  "key32": "3876hebQPo77Jw71ZAKd9Qb4NXrdZu8Haz1n9ckpwZHrzfWCoLASc7bSBWH739Byv63aMNy79iGuZ9bWdinhArt7",
  "key33": "2yrZwmgzXTvj4poiNunYscuZxgKrC1mVkQzMBri67v1ZpB9owBRSRm7FVCMUDrcJCLHfGFV6oHDHk9tzJFZcGqB4"
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
