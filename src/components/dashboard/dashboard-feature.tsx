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
    "2ieh5CSJ5bgfZENR7fvaSSgha3Kg3nohff7RBxtjV7h9YECMPopBuVUxfM6jGSnZTp75KxnNMKQZSk1pgSW1xbRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhKxQuTKZmeRmgxX3qNmdXEVzo7G2Xy5y6vockQMr39BqoxtHHT6wrmJ8uJdAvXyZyZ98fq473dVJUZZYMEJ3sd",
  "key1": "5e8MPmfx57CyhcZwNV2Fn7TdcUzZqmg5ZfVB4QKSxfceu8yrdFDvDzqTwfA6UCQMDupZZi7nk9BPmmcPZtPKbryb",
  "key2": "45ySF6HaEiteR2dhWxRA8KBa4Bwqab2FgssffzhmqZduZ3SAAi1QWEFKkNVqNT3ssz5CHohka8nbsDArjKpVtDJp",
  "key3": "4rzfeHkj918esXvVywMYAghRAp6PkHKvAYX5EDikpphLt9PSjsfENx21CtyYXHhM5GHEEqK66nCMAt8kcjtUPNvZ",
  "key4": "3edbQZzearN2zQjs6XYRNoxWqAFPKoUbMkn6BTsabitSR8MBuT1jgSz6SQBYVXVKnZ96qNNqTiAZghDuRyJ2hNKx",
  "key5": "2ph2WpXNbqmN8KAWZBQz2adTTKmJeuS3ybukMRbu6stP4gQa6aVuhCgVvLVaRKZBXxLKXsPETuziUdMgMYmWGEbo",
  "key6": "5ZUc8KNjUQ8NLSedfjSCxM3e7MHTkm4UimtVMG1Z7QSBUkuTR8GAx3zgLiD1nQt8RPYpYt2W5JDkBSaWNNMkJpdi",
  "key7": "6cc9v7BH69QRsRbR4QrpkcuLqKaMwvvTwFKQdzUYgcDFSNtg6RzjHNT32j1huTK28hy2kGi2rKWPp8fwoKAg9nq",
  "key8": "b62gRFh22JuQwbT5RKSV1UssJS999EryB1WRk5usuqJrcaV5Fv6XGb6s7kgQXHghwofMGU16LUcnnt7cG2eaYok",
  "key9": "4rZQYip68W5Kv9yVsgrFShJJS5ii1NgKU6VR2HsjvidqWcgNhNvDBkBSNYtPMapTMH42HfCr2XiKpTSxkf9wMy94",
  "key10": "4pVZRwXcGK5KEFuX6iwPCzERKECVy4ZQLGLG6xWJaKksdG2whBvFogqLSeQ9gzXAhwv4gw1PV98G3GvAERSrhXbh",
  "key11": "3xFRww1UUbcSYK7uzayQk9A1WXnJXu8PAxsveUc4ygXH9eA3jFcPRVWmmoDhHUojvBKzELHT9x4NuvXtV3ohEHoz",
  "key12": "4vwgdGXCi23uYZmREtouvbXc6sLztQ6wbNgjesHVcbqqmfAfC2K9QRGvnaJf9xE7kuRmcyDNSfLhtedYPziy5Yni",
  "key13": "vocQ5QfXxroFXfxXuTNvZ2yAnprPSS5PXAZwWZVV5Z9tVK47q5yF9XoKzMJQEoqdLfHTZHzP6Ugm1qbNCohHD5D",
  "key14": "2JuVEm8BLxhqiBWbrBw1M7giu7YiDsdqq8yGKKs5VKgm7G27Lrj3SeG5VkP42CSVqv3AQMKupid4sv7L4JGmzHcd",
  "key15": "63DtcerejrxeGepooEkjGu2VxTRxCbVjPKUbAxx8ptDqTQ4g5CyTGufWLJHY3GZJACBpKo6CBBbio7F1y7S4TqSV",
  "key16": "2gi6GSpnE5Y9mEmzSQjDGFMCnswQpU92hypUkTGUNWhRLU7z68rc6boKnNSjkqkbQPQ6jURUXwBHgmwxKbGbZmqK",
  "key17": "4XmsQiCt4Mt1igY5wDUw8PNSDKnR8UNkh6gt5rgDai2o3suMuBXpHp5mK71vaDorxFoUCR4x3aR2LASXsGLg2L5P",
  "key18": "3weoiASGh2bhaLKbg12YGpuHMqQCUtDfhfBDVq7jypVDNHSqc5j4ULVWGTUGHjLvBt4kELppsg2Tn8HEwTdD3AtY",
  "key19": "5661XfSycFMoYJF3zcKv3GgLaej8DeC178TE9VUiXBk3viJ6Lkg938BAH3GDsxMzYg7ZRnP6LHzz3qJkAbaB2kZs",
  "key20": "5BQVVNANgtvU6Mtbpz1cKqQdV5FGghPf6PxXhnGAMbzxEXDvxPxrnif49nHL1H6nBNAcXFXM2BA2cQTJLMWiVy26",
  "key21": "4F6aHWdpDn5iQdbfBn4KSP4rhy2n1cBb1zG7iAGjLvmrBVS4EKoJ89pqzFSdnDsPKV67iWH6TZ6NUmfAtWcjHpQA",
  "key22": "4NCE7VNVtmCpfx7y5cid7oCGGAaX3xG2xDKaLHwDssqpoMcV1dM3x1cmP1LcCuXmstKre8S83aQ7pzd31FSqa8ps",
  "key23": "UWNGZW9mf8nzECewLSyRVw8KPEJWAfZqhnnVsSjPZSBm3y8XBgcPRhpT5QT1s8SmNC5xxP5N1RqyhePSnCv9fGs",
  "key24": "4u86ADfn6oN4AgJgguwn3GJEu2MinbjCvtEEh2Bb1QQnGumdigVnqfe8LUhTB8qPqbCS5bTNzQY4qdVBoFJn3WYF",
  "key25": "4P68GFepXh5FwK1MmDFB8axEeukQdiBpkXUcwHsfPjNT5iW19Rtoe5bhoSQWk3fLhmHowaxiGhYWFBDcAceXywok",
  "key26": "3MsEnumuLhjnQgw44xsMUugsGrF2sieNpLFUXT9rNeNhacpjxrjLi3K4wM8BoYv7c3KswaVeFx5NXfkkPcBsnH7K",
  "key27": "377UVDgxRgMQFCUZX8V4dwWox4QZKi6PhDFwaoPE1fbmYKoPzgqdQwSWESvR4Q6g1vB2MdLKUC4N9HPNniiA8HPm",
  "key28": "2bV7N4CCjmPaFcuHCrTty7ptEavZ35BvfqWLvV4ncxRJ3uW51TcRyNMSMe6L8j4XFHE8t8uUf9Mj3LMAKKCTZ3Xe",
  "key29": "36pE4w7aWLZYcXz3NsYnozPeVEUbGSryafp41WLq9NKAn5pssyxdBWsveGuGY74o5AnfF41yn8L3UeBBKM8rUojY",
  "key30": "p5drvNq67BT4QUgPB41pTJ3GvgudkNMRu5x7ZTVt7WXShJN87SVBerNJdh1mVGnJmYZyGQbjTeskf96cfWYGzXy",
  "key31": "Uq57sTJuAgdsWizQbFbpHSmEwiC2cVbXy4ywzqZWHxsjHuYEc83AuWr4KYYLvMmWwzYRtK6t2Tpr8BQ9b8bHXZi",
  "key32": "3UK6xsMRJyWbyvCr2BpVW9pzpemE3x3dTFEKzJZaA1gCey94QKpezxMQRR4yDeEqSksMfn6L1WvwKMgNrHaN8mDg",
  "key33": "t3J5v5jkFkyMbJrRYFD81QRDzix8VUQ3wF8zM59ezBdNKqssMwssV6s2mLgfvRfUDSUJTzitaDNa5KVpzHMRZdF",
  "key34": "5RULvWGXQXCM1zrDwUt1SCx56qqcSr7bgb79mdRReiRNzKjfn2LAs7cYoAsCqnKF2vmrn18XVfeCVNjrmtV5iWFx",
  "key35": "5VKQ5MrrzbpT1N4fWyWTBQKv9Eb7FytjDu4TYmSvJHJqcwHDNNUGgqWKj6viDCyDyEHcezN8EAQLbGHbh4v5fxUB",
  "key36": "3jrpGkMW81ysAZmvq8THrKcF5DMKhzXCxP7CqW3PP3Bh93HAkctvY8sXXN8sQyXgSdm6HoAxbkNBEN7CNTfeg2yR",
  "key37": "4jDexarEWSsGg5v1QqtKNwG2cw51bDsFJDPmuJbCTExbQDNPu15f3331iuQqn8JAZ9fuVBMd8sSow2xCZwfR8iCt",
  "key38": "RDraAjqtG4gTHFfZ6gkzuT45NU8KkwTLSZjZwhBWBAtUW2yJDk1G1xXLh3c28rXEDrEc9NPrLLFYcM6kw4UmZr4",
  "key39": "5HsXtzTvRGwxkBandFzw1sELn7kJZ8nEEyMNL75jvhkxMypPTSUwGdNpLC8ofkFDDxdkftqrPZEkZmGRhxT2reYP"
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
