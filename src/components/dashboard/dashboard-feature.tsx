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
    "5TjWeXZ4Q3nr64vuGEjkM6DypkXo7VJiqeLqvjw19WVi1xqfPmTHc8niJfAVXi6GrtVsC9m5KeRR2XHb6NYS9zVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqiwQY2XW4zpc9qxoBCvj75iwbGNVaBrUCST8WGKexGigZdkE8tmVRt8ZCJoM3uaYCqXkee59qCSHqwqbmEY5hD",
  "key1": "5vSzBj7SSMNvxQEZ3wox6rdcppW4oVzgLeYt8YStLxqCdxx16SWjMiUgWoFiBCWn42cQS8pYvqmjhWg77znFLzen",
  "key2": "51h5PA4HFJ1tebJJg7m7uK5ZySS3iPnJKGjqP2CbtSgFDpUNjmpGNkjXMyYkp11SGwd6fxzenLRFU31qcVjdCPCh",
  "key3": "PYTVWfpTfD8e7CCuwAkoQhAdoq6k83Nc1s1hAnLZkzhJPTh51PLX77VM9yR5rdT6hpyqEoXEoiutDqv6bRHi4Ff",
  "key4": "4MGLHsJD3FCXKA1yR7TpFN1i7W5eACTx3i2531hH1To2pDhCYkFRdu2HanZnyUxrn8TpEdtP1Kd4mfXLBXC8y15C",
  "key5": "E75otBtkNY7hHkmnExAJefo79f2teDp4odGPqUAMS3wkbPSUS6FLbQDNKNCWyc5z8t9brmG4rLtGdNGjjruotZU",
  "key6": "5UUSQ8NLJUtNYD2yymKov8YtUNeZb83m6tLWMxnhgyC6MZpJUDTQK4NdoLVSSNxxPah8HETf6tgntFp2NcVskNS8",
  "key7": "3tt7zVwPtAzH8byhLpysUowFC4aYBJgD7iA2ygUadPn2GfKiJhyVhzmFu264fuZvgKghemyLGE9kenhg6xW9DUyq",
  "key8": "4P7z9urjAu2PFpbdkuLypPqLeLLymX2p26opoR6zBg1XvWJMGB2qqMQ7xbhSE6fA2xtiz838J8G422b5TsbCGTZg",
  "key9": "2eyvmnSJWCeYCcyy3rJsJgEbA6BZsFxBssHF81N2CBTRC5j6yDc4agEj17Nj6syNdKp1RsxPGF7HbGLUK9fHEeBg",
  "key10": "55oy2B4ua1NSzYcsC6PGDNXDVsD9hiPbsxVnW26yzWGgbcaQysFTBr9XEkQeR8WUpxW2EdqnoUGirxAcLQhEKg7o",
  "key11": "25MHzTiEyoZQzpEhPZYnLavQ4xM4Pivpyuy5TRFhev9TkjM7ArqgjXqRxEa6ViPbQDZALA3U4NdF6UHBZgLoMcAp",
  "key12": "GYLKRoy4wiwEan4HkiHPdMMVa4396YPaS62hii1fN9k76vURh5HeKVgt3JYurMcnvHPhUeenZ8PK4Wt3y7fBWGj",
  "key13": "3ZApxepW6TQ9HCwQiS9KAfD76RFuhfzh5vTRFtQwZ2ufdSueVHEh9zAkLfZ3MrMb1bWZmxhkNTwKpDcgnkGNDccS",
  "key14": "xMQvDkSAvCRuim5qBZWGa5WUBKfQe7R7dkRudrTiP4yoLawHBCVRFnMY26MX4TLdMicSf7r49opUjzwJ22U9kSS",
  "key15": "3oGNQtpvB8n64zDgtYUdx5Qe3GEXrmoEcJzEUSTFM4Pq5gWVoTx1dYLq5jJbGsTQAhwZxD8giug7C9AteyPDw4dT",
  "key16": "5jW1ZcC3Z3EAnAkjeS1ftzr3ioeSszidNPpw4xPncXNcTMwKjY9pdnxAUNikuoUMTcWuCyesZBgPUr1YbuVvfuTy",
  "key17": "G8bcP5xTJkQUZBruoHkoKMPEPk6nWCMgh3v9T7H1q8HKgtUx3JsaKQWKsZkjqVRqjhYJ6KMnx3zpjhEumAe96DQ",
  "key18": "2kuVjxLuTHJ4t93EqNBm5LsRc5EHqrD7pS1GoDyBk3NiJKZGmXorZu33E5ZSSvvhP9Yszd9GKqoQoah8QCBNqAbZ",
  "key19": "4NQDDU6hqNwFJc6W6tESFViNR6vk8uk8JwCxiXkU5QNHsH4jog7bG61N6iWcQfqiZzcNydxwekvq4MmHQFz33iMD",
  "key20": "3GrWaZME9sH7YmKWaS39oNzaAyPHzMnXeYjky8iiVXRi3wbB7wprUUyMWPYnmi2uWBu13DuQoLMXLeaKReZEB6KV",
  "key21": "2yQfSTpGSzx9UuEqeoRUZVnzkskRzwsbpNThgsaHxdgc9H6Gb824L2e4LA9YqTKJFDrXH93unwB7E23B5YKtUU8Y",
  "key22": "3jquXmhtuMwvtN7geqK6r5EXaSoYv77tn3v1c2nc51YX4s1KnKqQeV5Bw5MKxTmqd7fFL5H1A5NJ9uEHLeH7ewqQ",
  "key23": "5STFZvu4UZo4CheXeqvcrpjvuuV6RrZKAM5JhEHcCe9piGXKvp7B1snvsuHjAb9oA288A2yaDQLcfV5oUBnoiWtV",
  "key24": "65zPLSZnmLsqHFfVSdQFqYwn8MPVoViHK3PyaUwc9qEP55NeEfqPdETqYon16sUdTMW9ewBTreRbxvWaqRt5KeAc",
  "key25": "2z8ss3vWFTTGobFrbsEtyewuThr8SGJ9QVQeESGzAKgKU3n2kCMDdLvbm5upKtyapxXJHmb1WhUMkE3pEoKtSAqy",
  "key26": "ebJjEJ2aUzd6TYgGSi9YDuBY8ErxLJqCf8Cq6zf1Wyqb3V5aN5e7BWStPtXVEQ3Bugrfhf6z9mgTbjdHjbivbcP",
  "key27": "3oiafkUoVgJF8Qiyg8fQ6y4b8tkFNXcSLVz615EnYfvRuznyzymRz3WHRxiKJkYxVgkdWp9zq8wENrDW2g6x9gbW",
  "key28": "9QqqyTdHJBptJYfLVaSxqKhxYGKDSYcconiJPnvWtQ1wThqjSzLTeoCRMVoGb2diotikMbffSDpTMqcLrcxEcf9",
  "key29": "28uxSTrGpJyeNSr2Hhys8AvwdNB94YjA6DvFnpBfGZ16Aa8RYN18kdaCFvNUZXeUbHEtvHt4VnxD4hajZ97wLvcv",
  "key30": "B7CDLYeqKmwDArEktfpp7ffTZnH12AFsZqCr9sdmERfxjWB1Uu5EkgqNBi9WzwC3jXU4k4b6LqGrSgEpyUGtaQL",
  "key31": "2CSRKcwSzTuLwZpm6jgndYs8cncECw3o32SZJQbBAQ46xUWpBtKGtD98UrPEKQ9LZTvMJq1Wm6tWQCcavAFgAN55",
  "key32": "5TVQycyWQVt2ANgc4iwC48yzQ9PMAxZjQLuynMzxczWsVp1XW4DNec8ML4dm1KXn3yvyv8LmfxueMBBRDGEph9tM",
  "key33": "3Peq1ZLvaxCpVtA245m73Qq5XCzCpguTNrEAsF942hWtjBmj7zo3Gcu54PL56a3SQnp9SamSd7ULUubWwEUGruAU",
  "key34": "5N4ryBSzaR4MXJkHZ3YkWYS2VzZodQty5pFPYNzmnEYxPtVpgRp2nMSLRu173p5Xdm9uyFbipjGXcMbTyaDZH93m",
  "key35": "2UVRN2KBTxMR45LJRuwvicUMrE5dWjzQ1Dpzj3Ry5P3c9XGLLiMx2fkkzsLCwE8aRvKURzC4vW3R4dDgpkUvcxHN",
  "key36": "5irZRrJin77T1AJMbFt9GBktg5HDVi1JAavMpecJLjSfK1X958hxQQTZ8d26oxscagHe9v93BdDyq2ZykmvkPjiF",
  "key37": "4oGR4tqkNxJdSaH2x6NsKCBRuLXYS1XJDzHKKyKx1o2YBHH1HfeFNouqHHkv8AVmRvuM1yRCUdbcAqrKJvS3bf6b",
  "key38": "5JfdpZwdnsdJsS1f7YRgQUY6FaiYFbAbxMLf4Gs3KhwBBdyf27gHtKWsBcQAz6aoVyi5cW7KpvHWTaWAezZAArix",
  "key39": "iyDGKkWaUtTmfxTzkjdYM3tWKErnm1Njxc65ndF7B1S9pkuqZKn63uFBd6PcW5gZxz16ZcwYLP2z6ungPGt9Cpx",
  "key40": "3t3mjmTYQtnRrHdL1yP9nExhm4hu2csvDEu3K8omngUeWHLUn5YXq6xnwGiBdFED9nMQ71kWyS54gLeptQAd4q5a",
  "key41": "3GNF73X3JGGyswhhLXmYr4umn45b8WnCYF7hfpcVmfTSfpLVaNukVvH8AAXunKYxQ6rYRvWqHYdAFzviwYdwrE9f",
  "key42": "2gTjhPxbtVoq3D5aoNZyuKGx5JCmUSqnuZVT4GiNKmaXymt2Q7JAbpBHamec5bShQXSLhBMy7Jj3se6tFQMozQz7",
  "key43": "25h4pzSu1ztYX7ixtNYvPZJ1heDTJD23xdaHEE7ZyJttjkcpSwQvV8XAmYVCfq4ZP7Qf1E83fpyaYK567riTDUxA",
  "key44": "27kVReh3Erfz9FTb8YpiC5j1X68NRsuki6ysEF6GeiHJByJNTz6RLRmRrpL43roaP8aajkVobHyDAEaBjuFdRqY7",
  "key45": "3g2qfLbFuFmyd5o6GskHDqy3nfZLm416AZyKu9r27kdm5NcuK4SuQt3vhSZe8V9XEwG63FXzQ8dgz68KSjY8LVw1"
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
