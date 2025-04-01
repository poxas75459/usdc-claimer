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
    "4hTNaZ5zaZgvwDqAYy95btcAePjXCzHa94d39HqxxuiKW6bCVcjfQ5e75DXpdaRK9Fesx5mr5wnCuvshwqoxu7YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxup349pkkhfZQt8R9wCMJTZM3ye2AUVLsHE2PnVgTNhd3H41neNsykopCueJt9fCemYnE3TkdLFhB38cNJNpdi",
  "key1": "4qmAdahoHrYH5T1WaxYViP32DJNSvzB1mR4RqeRvbFkjtfrxLyd78beERdXj7u1r8fq9zjc3GG92buJiikv7a1os",
  "key2": "5nyyRZzhzw5VgWBrndpdM8ureyE3zMKouHSssLotNUEmNToii8NVC8eyYrvNCix5SinqL2FqbkG2fBHBBrXAHydc",
  "key3": "3T7RcfZAQ7eBgKb9pppygBx5pwjhxbKPXxrRxytwtcnMmVqSWGPq1HR3cRNVitHSi9tdnqK6Egb9SHzpbpivjSGp",
  "key4": "5LPmiXUk2adiFTRzmz3JFePEm2KdbAqSsGeg8h8EtphLnsfotPXKCDqYr1BPzbJmQud3hkXi7odzJLjFEQV1EFhA",
  "key5": "4cyVWWFpgx3TP5ZpqYEXe5nZEe89itQBfdSEpESKj5pbZMHudUPsXTDtjKBBLr98DXM4hkcWhSfMdbTtsc8QdAee",
  "key6": "4U4VNWuKuTMsWVA9sbRfS7urHfgnHWQNW6gH4HpMeWiwmELYKsNAvGKbnknDcGDFXJ8LpZH5AbLnKREBCnSMbYrU",
  "key7": "5PDZuZDtUxxFuywFTfCJH584Ux6iz8zAqvNAnVxxeGi5NFz4Xxq3o3vQQku2z4o66KWhhVBqmGj4gHj8EeaAqYdE",
  "key8": "5L8FoWV7xasTwD49WeDxet6BJA4fjKJVKkU8jQ4cYVCZDovpsVFh5uQk7ChTzfAfwA55uJkxXmX6ftE4W4srXoxw",
  "key9": "2w8PCi2E54V9LrTgUFSh1kazy8ZWjJvQWeFqGVHgiEcpGJM1n7LUh5EP87oNHY827r1QSHeAQE6nTqeemvq1NUyk",
  "key10": "2ietCtezo4RcvhKUkAaF2DohJcLNiWJJGFxHmDp2AazpGiPoHnFQVM1PrFSWBqxMKHGYpTn6pFpyfcfMpuwQTkkA",
  "key11": "5Rg8jPHjxj5PEX4ZB96PXvmx3WReBbbp6waNz9f593siDBmkZqjhvE4GDg1kUNqzcNRcVwtgKpkeeVZyfMFF5tZ7",
  "key12": "2zL2XM6D6J4RPmgAa94jbGvsYc8FargZu9nazsQYqGSy6TvYz3sfA5u6gQASDyaifj3DjP37PQPjSN77pokFxv5K",
  "key13": "YBnjisWXdmGxvkjAn49K9EVj8gfsGLZkD6a3mx1j85V3DvuoSTAUAQpTdSuTFLgx9txkKmg4w4hYNjPY6QsaY8N",
  "key14": "3FfXm29asM3Rzwcpf46iBGGgcwCbpNKyfB1ENY4m2HevuJtNEKTEhxTYjMxJXfeErh2uFnVBrcaKTKvfdhp3CvXz",
  "key15": "4981AEhFZft5uo2zLS44vHCAw3D2Lfa9RksRLiWnsr3cFSSEbvv59RGBhsYRXYJhXj6E656tyH223mxaHRsRNCk2",
  "key16": "49KPaWaPtkTdmU9tRiZoM3BJjKsfMomoLSuHD9b5537gEPRMW5zE9H8MLEoN6pFdWq5sTW2XQjNqi9rBYEZ5PpuF",
  "key17": "4PdfSmNDw3ZEYiZpCXtnYTLeXndvgQCZMiaXQUoR7LuYDrne7DfYF1Zb354c5huFHVJUN4kwmCH2jZtQ6GWsta7u",
  "key18": "5UcBBTcij4rLgW3euHMFJVK2KqH6MYZS68et7BzbWxY1jC4rS4iS1YpWSvCWkf3rf6ucBfoiCAec2WRAox9APRCA",
  "key19": "5uUyWwpovhbJdjmCXVwuZTiVF7nY7WjDboGPzxZArkaky4kZ5ZY8muKiZxexcD2nWPtkMggNKtTf2vZfaBiNGHkb",
  "key20": "22KKeedZcb9KZZ8epcFXEUMjrsjg5UnnthGzpRrCz2vUhqpdMSC7Hy7jZ6ext6D3ETQ2AzzzWZDdvFXUktywSjmr",
  "key21": "cUovyRfcbXUd7w6pHGgqwHEEfNRLZVZhhgEZeTLEFDZbfpRKYZdqbJMyubdCvpZUUnuQnt6ffEqix1EEQjS7siH",
  "key22": "5EsAyW4WxgeTDTPxzMfNCPDfte4DLcvxWkq59QmRxHPY8KmxNUNNiWRakcqnjMc9s7taJqZRx6zidDiRcneg7WcZ",
  "key23": "3oUQkRQYgG9TwbKSx7z8fjo2ZNswdwHLwY71SqxFmDKg6LbHE2cdFA5JnpKBCp4wXS2ZYjrNTHSnqZK71XZTEgGv",
  "key24": "4W94XJ8t9bv9iAuXkcueBdCChr2CYR8qHq27hz4Zhu7ifc6gubME64gfBwTDDQ7CHxLxRLU6cZBiFVaW9cohVz3j",
  "key25": "2wkaGp5JerEptPXEVxzpCvwytPsTrZ1JTjKHcfA4m2KX6Sv73Ub9uWknauf1yDWN9qmrisdGjhq3JiX1bfeMxFhz",
  "key26": "2DWJqEUdvBvXkMgM5xEs3MX7HDg1Bb6dZ5JgRvDHhezSmUVMTPcPHkoSiQHNNgsYiu7P2QhC2KRYoB8cqjFNceCK",
  "key27": "5R98iMDrfs91NPiowyTjurWVCQp1DXK3zeHRP1qi1daPmbniucM9qskFCmugiTrWw1914eSoN4UZAVHmEto1PWLz",
  "key28": "4GjUN3RDWDt9VSU4Ej5tkCCiWAGCk4DbeNE6mZJtTn1dzdFysxrKwyumzsNTV8ZF8VRjKveY1DqnB1gJBJwu6P4V",
  "key29": "2FQjX2ksGjSTumVqDpkLKimycb1VM5TGhvCZJy4YGLS1enjvwK28PtkQ2ksSWrxQEaFRWNrFfxsMkXLDc8aSccxT",
  "key30": "3Vn5LiMKifEnA7rdoqxjDvPLc8ZgD8zNmtnPizxwN2BvKnQuusAFb8iX6dgJG3NBM8e2yH2f1YGYoyFiVXLCdrd",
  "key31": "4LnRQoXRN4ApgUM6nrgodz4wWZDf5rXD9CGVUGn524JJwQdUw2FZqYbYGsBS5RvaH2s8FysPbrKFgVU4sYnrtsD2",
  "key32": "3hWRxzVvaJoT5Zj62mTQ89Kmja3cCdgZc7ALA3nthQWkHbLTjMkmBwFfmLaxx2DktDdAu5jmPUqk822YgBH74SQ3",
  "key33": "hiAqvnnmHRu6N5aVNsEmEnuq53zgQjHbdAzADjv8dcwCumg7bT2kGxrcRPPJYGuLxH8c9X3P9xY4Jz7DUronf9F",
  "key34": "DpubH2oghdYkyvnqhKgwLkBqWrof34zznpwsfGmH3GgzmDqdVQX5fhdswh6FG1uAX777GQ5DoujrzJ8HZfoJBv2",
  "key35": "5tF6rbPq3scBYubSizGdUYnqXhhHCJJBuozZRfNJ5jrU1qQ65W7NUGRcQ5zMkyhumePVrwgZGpp7NZcoNqPdmNJG",
  "key36": "67JQh874iaMeMCQMpV7J66wmY3W8y5NqciPerCuxcqNzgDoKjP6xt5ddfMLRPE2DhJ8DV4cCDW4PmqonusAaL8Pk",
  "key37": "dZBT5uWvcvGNfWXZTo7BskaeiKAkcoTCdmQ5UkMTaSCG6W2NwHRVJcYFuB8tF8GdJF3zRQmAe87DSMMSwTp8T2b"
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
