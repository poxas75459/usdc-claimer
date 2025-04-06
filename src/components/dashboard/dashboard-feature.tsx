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
    "2c1c9d61r5Q4SDojDR1wqwzx27sfuQAgJHAjsFPTA3rA29RAqvp9UmN6uy69jjpsCm2YpLHTM4A91b4uTdpkFyxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58msRfR7jnYWhwv9HMdrBKmFfEFyE2KKGNRNrx64of3ueRxf9d1Hkxjbm5nKz8oGYr5X7J8uPUriMfbFoG15BsXo",
  "key1": "jsHVfSq1TbFHjoi9kW7ggfvw2a5mfNL5X3oSwKznB6gFVg3TWHMsCB8sz7Kc3n5rMNAXiWqTL8FozFAf9CocYRh",
  "key2": "t5kQ9HXAfHLCZsetLoTLAVVGkAnapdRCqaqb9V2iKJHjeJSF7QNf7VBpwLVPsbQMgFFT7ktXYafRVYz6Hc5XMri",
  "key3": "3XULTAP3G3Fy1Exo9dQCankEQjBsoJyMDKmxC9JftKaRceQPZyE1W6oqPFnfyvKSimnCS6wjAeTEkakarXVwzCWn",
  "key4": "26VSURMjbaFeygP5mZJ6p2CnG5KfWDrdNej5PKz6tnGU1bAPAovGuSMCeV6qMqpCNVKY4rD7LwwQpzJRUncyg1xi",
  "key5": "m81zFJtEf41FLCuFNpiK1NyKTGvduXuYU3VkCyPkDfJVScN7WicZGeiqin7p3nRNi8aUzcexp2xrhVKeMedn3iR",
  "key6": "5vtn7h5DBprDkZM2zLoE1tgTpatwFmrKXLFYcxTARrwqFZk2vndRfDdzNDVic9CTJF4ME8iHppLYtAfYXYExzCeq",
  "key7": "2D7BxrQxdrR8RJXmodfQR2WuwvvqQFByLBbGeQPrrtihuT26sYfHkAgwCCMCxRqKvTzR3sZgUucMJK4VZ5CDXeFG",
  "key8": "vDMg6mzi5VSiK4Dhc3UjzaEv1JS4o51SNVbbuDnoufQqvDhDePhym4XVYHZ3bWYjVd4u3aADiLSFCJDFoLGW9MG",
  "key9": "E42EdYxhHWvRUzm9get3MFHuYmQ9kJ7Y5W4F1wuB2jTHv5eqjNJPti5baeyY1HbV2Zy9HxaaKb4KhgyJpXaMMK1",
  "key10": "26pMdUXQS6hib49Lv4mDhk7NLvCrAJqrB3hBynTwL2okX9eQM9ynEaDsEHSpPvn5ejQBCNuSf7uVpq2GqnmRT8Jt",
  "key11": "5pPQN7qASdy9ez1apQ9ByStKdn7sgdn3h2oR1X8vZoQPhsQRpyhjB7HpbFxaLfGnQxxN3GEf4tTShqQQB1KBM8aX",
  "key12": "3cFVjKLDneSGXssYMekHQn4rZmvRJu6nebr9huho3Z1PEkn87Hxs5X4EdYxFwQhDyBdoimAZ29YevQFgWuioN35C",
  "key13": "583pMSzv36WLKNPutgMJjMPjsY9gVdBAEhc4Uij74KLB5NkFHM3S72dDqsfbgF5rvtb6g87kVWmJdrosCFF6SGFm",
  "key14": "BWnwmhNDfu4Gh8FaGRSpWUDZP2s7BKCa8x2hYXHJLPwBkZp8Niqpvv83dCDyCVqjdxCJHomBQxZzqP7pc58PyzZ",
  "key15": "4T2RPjHegF4SBm8Z33cyKxSJ6ivkyF9jPpi6SdfWK1mhvNBmfrJMZ5ogBJWTciqYoHfBJ7u37PNyqPqpjXCrPnt1",
  "key16": "4x7mCpq1BPbvrPc584dSDoKN7ssXdTpph8zf1D9kjW9nV8CLPinNwJpt9fMNPdwTcNFCcpte2Bb21WDwwyMCWDju",
  "key17": "3zrPYPaHPiRRtHWhdABF7CBJtUoiecruqxqHDYAD8VH1Eqd6iY51t6zN3Ma5CEd3wCBTdvkpSC3PPStytoQ9fyWZ",
  "key18": "42YPJrqYsRq6LYkhNMjDYLNX2f8YX7haRkd2WcCT1F7u9a65Qv3RLa9mWTGX6Ftbi464msWwsk7HTcHjLGSRKVib",
  "key19": "545xFLqgzyg2vYk3Kb1jceP7C4BTPbDupuyU4UqC62rk2UZosKbMDqCMwaWwjspJVBdnqpZ2jMqq3JqquD3pmceZ",
  "key20": "49WV5m1nn97xH6BhbUUySZ9ZCyApqWocSee1AHvpcZzbVGu9Gjn2pBoKG6mMhDAGcGKaZH4psqGG2gUxJsp9KwXz",
  "key21": "51iUhcRAFCa4GEazQP7TaxhRZEgLVUaDuy15PhRmUfzVm5PUEtBzTQ6Gkt1pMVZ42QETiwBgDRoXXefkdcmMqzwp",
  "key22": "3C2dHmnUYMduDTNixViSE7BJBWnguzfhBWCbUFTgvJ5ma17mbXREmUWJcvkaPLReph6RhwCLS7WwSzu6Uj9cHLsZ",
  "key23": "4F39cEyyX2wjeFxvy7HhkBWSVrPxs7jn35cWzcjdLUpekcvUPxfyJagzSLK9oaBc7B9HDL4yexbhSyLqXYbHM8Ya",
  "key24": "5zrHihmHXvhhZGvMLyXXFwaeeNahEBLg9GQAdrsm6QticAjnDN3RYj8kktgtaVhnwTAFjSFzDuGiAi2HMXdfjeGo",
  "key25": "4aqjME3ZHdBXRfY6FMqsWA6KULMA5CBa7mZiCHejrELPG6Kf5e9ApfP2K8ovwYTk3CytwNcR4feXA4bcHc2yqqVe",
  "key26": "4jadARfTqxTaL7y6QkhBqXziVqqfCDH5MwZQTEFmEgM3VkksBXQWg7bAvDynAdj3vbJHYq8M5fh9fzeHE1jdUxhf",
  "key27": "28hopo4gL7vJLQVaGru4AELZRa3RQPZfza3wGG6nkifwmF2nAJfcsoVRyrezyh9iH6drykA2rJc7huhbor2WX2D8",
  "key28": "52pAr7dpAVaJT3fDxzhEM6VQNYbwqiLns2k2xHV3GXUqKsQHi73ZTgCcJNqDDfzRmY7ZbjK7jaokohgq4JWqB1hn",
  "key29": "3j871YFpbLv8yRs4EvedeuN96bHvyzJJDnmb6LLHWhMt7wsbbTLW1WY3M29FciUziBPf832jEQHEcXS4y3yQncPV",
  "key30": "4frv4tgLaYxrQCyihtPjQDvsxjGizmRAEQUFS2FDtzYSmLR9qk7GZFRtbb31QhRct8go5B1j96EunMKbdnvGpxvB",
  "key31": "5UBMV1gL9RCpXBSvBckZU1sQDN77uYFdQJg8S8h4uD1Tf7u7kbHp1ZroxZuvvkv5LY7kcWR2pN7Rgivz2cQ4up7Q",
  "key32": "5oMkbNRGtKxHwCsWQRqCo96DCtJxSZrEcAvQ1CUo67QqAsBjr6e51cejcVK3z4P4F5W741BZLArUZGdadgZNLtxv",
  "key33": "5XViM8RnMy3cjhYpyCeeir8AbiMTSHKFhECoX4RyEtSg3Smq55H2XTfGfM7WhDTKbRxRLekebeh2K2RVJauiwC2g",
  "key34": "4iFaFZTR5T2Kqt98dMLdMWsg1yFxfp922VCmxvTFdGs62WzqFhRPDpyqf26C3pFjCZC4Xk62h9UmmQy7rvgjpbcj",
  "key35": "37BJkKQn8wyBeVFhWPACrLYkP9eUSvcX2ZGjCUx4w27aysGNaXH2G8hSD1xosfhkvoQzytY7p9wwLdwk1f9MbV4X",
  "key36": "3UN6fSGqcfvzPCr57xv8xgfMShBQB2mZN3fFgxXojYPEvpFjovqwcZesiXtCdKvemNWhAEiPhWMkjrwiBwg1ySwE"
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
