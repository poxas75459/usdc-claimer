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
    "3sWVNskD9hikbiE8C3BdBS5r2Zj5oGKzB8SL9YVPBz3FXWYV2Sea4wTWDQ37D2KPNquBhRZHnMKcCxBNBdeGtEm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wE28Fc6xPKEQbS4rFNpcr8vA8ZKnZ6KGgQXD5jWTC6dz38mVKL6XRqHhKyiQGnTxoZJk4P6XD1zxALhzMuVskxM",
  "key1": "2ZkJuoNt89QbXtyoyEVGPQxLmpaLj5Lh3CA2vutzsmJPLqnPNj5xZAaPTvu3ScKdhF1oLktuEztzzmYcfwmVYbun",
  "key2": "cK71tRUcEL9rcg7rybQkHzheUfSjb5aFfVcgPHiXVUMbtCsdXoKhG3AMCRRwDsGXBYvCmSYhVAvVpiMLmgavVEn",
  "key3": "31V1qYQHZhetkqrV7jjFH7Rym9RcF22kiVh48pMvgVB8Zgqd4hUuzDxwKYRqsxukCjMEEy4b7sQQSn1LZFVstQrG",
  "key4": "bKE3m4ZFnn4tg5xBUVTsPJchdbb38zEyPuaenMQHEPosDnRRhrhnF4BjWTzCGEVfwuqA3ZmkVVFhusLAiU4dH9k",
  "key5": "Gq4z9s5Rq2xDJ5WM3ZR43VKWM6yoXjYFYEwLsBuk1UzcMZFFRG2FCZJGAh1aoeBTGNUXL1C1QnHPR55db2eQnqa",
  "key6": "3L43KbZZHRM4KnrvpWdy7rCXTHLSicujfCopcDr4CA8Nb74D2H57KM955g8z5VkiDqyu3CyaPP7qqS97JFxzFvfc",
  "key7": "GqDVfKbqMpHvpHqPVcP5LxE9tstp8YhuXoKA5vpVLmJxcREtV1XExu93CC2A5wHo3MDNY93jM3xDvk4Y8g8ffTz",
  "key8": "dVUgQwUbpJPuyarByJUYuThibaKo7YZ5ENkCCBToG5TLdvebDY6P9Y47kXEPXGYtAx2zDUgYx82wEySbSCYwpCo",
  "key9": "5tGd67Vyo9ST6oYYF11zZu91YrHBuD1aVMH7ZS9Pee4z2BeHM5ps1wZiFdD9c9LE8Dnt6Jimx95tG7aE8XKQMF3A",
  "key10": "3VAv4ECo9ovaDn77oeZwirT937C3hTJfpnkceqjtAht5BjnvPBZF4yujePLTX2SJjpitmYtqxa8wwLLSv7VtVe8w",
  "key11": "3qhM8ELMPXqCFVHMtjrRyiXdqJgY2s4a6CoXrQ7SDrdX6ERYLMDdFQnxjY7NTqR8PYknbD5GxQerLEP3S6t9nJ4P",
  "key12": "nvXxQg2bB7JHdqNsSc9Tn1unbYHBx8tSdSNoEYbHor83fQMDZspEGn8dHtuNhMiWip9M8eoy7t7H9q9PASWSz8g",
  "key13": "4opHYvwaxVvKL37AhWmLrCogkWU32PF1xTBLj2VPDxL1YuVSD3yvU6xHXrYuHDHLTCNEGBPMsNZ6tg6nGWPWdyB8",
  "key14": "5T1d36HiLEh9EMvBxX4wDGEZeZMpUnH1vSPTEvp4h2JC6bSYQtACURhfjq2MpN9gwhQSuxRrVrcyoXCg6RQk4Ak",
  "key15": "5KV7uJSvQj1G6957NQ3g44fB6UtKix6zqGxDKVAMPBV1qDAs9UHV6iNXzQN7S7ZNyc5LigmoXPh4cJEo8qWTHNrG",
  "key16": "2iXHuohEC5zB4Hwk63wP3fAdcmvSKmFxFiq61hXQY3EEWurwp6YPMDAm94L6mC8FBZvPjHM41ErtmZHL9zudEPTc",
  "key17": "2KZS2g5zjuUFFXtNeBGdB2omKSoKt9Ey4hX5UrazCPviavH78XJSrj3627drUxtiZd6KCmfmgLYZ8bxCcMwspTtx",
  "key18": "3xCcwQjSAkoRRwmefqTeVSH4tNL1YsogxZLZHgrc4Rz3rTbrbwqHZEe6t4UfbG7xp4NpcnLdMhVa5FXKUGmxAVfg",
  "key19": "615RTdJSnFfjyTZqx9P1RNRfwMqBMxCNU5XdZBbcWaZzDKBHmHpUjAaDWbchu8nBpWSMkj7wFUuV8BHeQ8ksLEAa",
  "key20": "2eN8y2qgZirH9Ed6zaDnHYf3HfSPgG47kbuPgatCVZDpGmicHjVfPkvq7Zpj6DyuPXPwRSi2GinjDaNx2Erc63rk",
  "key21": "2gMYS4cxyQ75uYzUD1sV4s3VwP9AfRXAYyXpZERjZNqHMpwXFSKC8rWbyDNQr4ZiY8fX7cW6pZeiEywB2GrRFa2E",
  "key22": "54xZ9c95XCe5U81PvtVVnPWZXXmTvxUEy8MK5JfhvR6ACnou79nhM3UQk52XQfmbGmiD4KP27evJ2HCY1XHAjVqr",
  "key23": "2s4ZzHf4UMBSHptd7YduyP4tRdjB83h9d3GjVDU9JG45zkf27wqtYZMeCXxiZZ5WfU4NG15dSqECdLtryNrC2Tsq",
  "key24": "42CpEqmaDkf4hzF59GNRpii2UySgV1f1YjnZ6rtyLrBFPu9xMFvHLfWLmtSuripVSwnSgVpt6y4k8Rvo96uJLN6N",
  "key25": "nKmKmPjhoV7ZdpsmPJZLM6QGfzPntEJF6BqkdHdTKZCvEABrmaeSxqyXukGUavVFUyFV9Yj3o6GhDMNjz5EbudM",
  "key26": "kgtV7fDLS4eXLwAnsPiLq38jvJQxkYCrw7az9vCyubvCA1nHVK2cJLnJTStEfHmtFvEaifuX6bNNZoBzMXYxc2L",
  "key27": "nVdAFUR2GDdYh4e6FWeEXk8b6xApkqjmvjoFr6c4UQ8vCEi2keAY2CZEf1QrV1rddnnx7bJaBLzzGyYKZhSnQ87",
  "key28": "baZmZe3H9qQM1GPek6icuoKMaAxxaHnHPkxACr7nrPSBAHuBaCmQnqPeidzuowBUnDt1ePizzYDdUprc9Y3DgWe",
  "key29": "5z7WB4yiEAvqXiXLDxSPxESnoHKsbtJixpUffkaoXF2s8o5P637ivtuJiGRN3zNGGjfeQiF7zd5SbcrfpZ1j6dJK",
  "key30": "4Xje5qnxNsASiXu4tYQaCCnVyRqhD8sWEpDS2en4SDyZhx9jtWRa26T7CEPQLRmoesxPSSDWuWZQC3WSprM2aFSo",
  "key31": "4EHUrhVXLmK4upKCaXQPa17ZbFhGmjkJtP357QB6cg6UXe1MthikdQtRsCkCDDShuhpKcJwZMxJ2ukQjv2C4Xx5N",
  "key32": "23UFYvykqNWHJW1jYbXHLhE3xS7mxKr5FBhnqKPyXdZPa3YGaCKxDvZUkvvrGfHqBQVs7YNkh2Kf4BeDLmRh9McM",
  "key33": "5Ys4E58SVLdykWXWm7vpCh9U1TdxZPmNSYNReTsMi24Pxy5WMxLKXgh7YccjQSdW1agZh8siHscUtQYNnqHF31Jd",
  "key34": "3KV9wyGTmGyMKAhMjDNQTFBi3xc8ZtQg3NfydRaT6UpfWFc8yp8uSostnYK3JL3LYMs4zHQYk9NXcQwzEA92dF3F",
  "key35": "5M6uLNpgLhYxLbsM1DyCMbvX6YpFxS3XrpSubwdxpEY34zkZFbwE3EGzVh2eBTWHzCsiaBXqg5VNbjpdaRznA3zD",
  "key36": "ipe6e4ebYkohkKq11FBQgjfC8VpufF3945qAANvdUJTSLtiXT4wsh5EMBEE8fBPLasAbKaDxavPYCJHqCQSks2g",
  "key37": "2gPwTyxk5tX572dP87xnPCf6vV3neAZyJEzgkixfkE4MBjNkogRWRwBhwRvT993AksW1YMEKF11zRVBz2bLdczso",
  "key38": "5qwnNRz6ZBNL7bcNVtZ79aXtnR1YpAq4dUUjGiQvRfsr4917ZJ8zxz8Xsuk8STBfLFc13n6z3AiZuPCyJZ3bgaBi",
  "key39": "5PAbKsgMMCP1Mpx8B8E5ejmk8RbQ1Ubb9kq2rnuzLBToUHCWFEycpbd4jB2qJoNSKW1GAwPUodr4cG9cdmwtcUaZ",
  "key40": "2ybGkBdexTQTA4LVW7H3cBoEjfakN6DrbYHe3Ssbs5xrucR9Y3s3rNEUZJdxoghJQi8yTvwbw7PmXdPXVvHfzzVd",
  "key41": "34yzvPKF88HUzu7kyawuVtvoG2fWgtqrAyAYM4DCFAvRKt9UdL9yme9aVwRFJy44X4Mzz3WyDKep94aYmDjkfvXV",
  "key42": "3JRoSJuzzX8o7oLu2iWBA4r7h7uxnPRFEqcEhPkNyPDgKYTBEM9ZXop4Vwt6uUv3qWnH2wg5TY42kQzkYktGMdq1",
  "key43": "3mVhZpEDzkRJw9phnbBnYisv49jY9x2UrQjvAM7A936XsPhZ2XHfmCkBZ8aKZdumoRxMn9fmtgHPUptxBNvkvMS6"
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
