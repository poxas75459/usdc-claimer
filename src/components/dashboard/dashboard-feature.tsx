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
    "45uFNfQpUVTRRbUegmhECpd9rcGG6gbNwHKKQHyMaRWtcg6pJMoYzdh6Xk8L2Z8Gr39ZFvYHiCQFn2Pf83p9AYah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZJd2Q6vqfw7zUFZGu6oGUYCgVKYK9Cnt2cCga4AzywJktU2TaT7kUwYd3UDvhfesbSkXX2XhGcdfjiw9Tw5WyK",
  "key1": "3n9V2ScaUyP7KUvHbx8uNDXwKfm19XX7e4qF6JGMcJ4KzJQ8qBhMkQjg9rZvZ4YTguXKVbQ9e2KpXG3dJmsS3BuX",
  "key2": "3VA1mXMZy3gndBQqprsrMutJfCbn887qNXndy3jrAgRNgHaAcqCCP6QFYLfhrKwmNhBHwxkXii6xM6zbhL43WQgA",
  "key3": "4WqW7mcTCSxjnBiXATe5hwEWBLBKRUyRZDhovUjgXJbRrVCZRic6B2bTELMpS5A9yCvaNPHpcDyt6vGtTb4CmgBK",
  "key4": "4HQWtoroMKwiSds97Tgc1UqoGqAS7JjzE9dxLei4zDvS9F1XUeG9sBawPq1aHYryvGBguiRmSA3jA5CKATUQGNKU",
  "key5": "G8Bx8dTSxjT6nZim6HP469HAXkQpExA4e85zsCQCqiCuyTyooWwFVV68vXepjL88FGyNRJn7pqtAoxAkgV65HXm",
  "key6": "3oDLxx9g3K8bfjfjrEUWiJ2gNHGWH5gWBWFhYzzCpWk6VfwiXQHPq7i3ZhwuLVug4ovvvRmgy7KZFvheNahfrSN6",
  "key7": "2KXXtDeBd91DqCdmXuPTsSdhuTy9SrRM9nyf3D2Nwt8RwpfjM2TcoiKavjsUBPvEjKQBVsg9HbxVE7PbudqcdZHj",
  "key8": "WfxwWGiZjAjvFhfJCgdPpSvZZiaRMyJM6ufdtPmr7zcJsQTxHKsNmz5Ak86ZqaDKNfTz3VzPW9gw5j4bhJikUz5",
  "key9": "2pshARLDdhW9egqqo9LVFygUL8ZhvF9PnyS67Ym1fUn22zR2GRnu39oXWb2pMF314BZ46fLynEncrTAiRGVoN7oE",
  "key10": "4daH9F9jC3JgEFrBkXKt5Fc5VLz8bwKUF9ZAgGVFuSvGswJGVFk6xzfEzuVCdmg95e26MirBdDZBUEU5edi7xepm",
  "key11": "QBSgfKX8VxGiBQzKHz4wHiDnC2jrzJJT36bXtvaFPYhKVreyr1E1EjgGqmzKpcArJtvLZhSZRbKdy48vkdVnCV5",
  "key12": "rA4HD2sFLaf5UKMW3uV2VLsT9aBsLWrorxwQomKfNpNEEMt5AnGHZnh9A7hYtpSAnM5A9yLjNc66c34jfioF5x8",
  "key13": "5LYUzE37dNAQ9C6QVHQZttWKZViGEbmU2UBRttyjcNupFj4qtWyCZ1h93JKZEiPkUFySR65AKFNcMKUyPRyWmSP6",
  "key14": "5pXLDseqYhyRCnvyAF6AmHhUJbR4vAv4bwoPT83iWv4VepSrHPxYDNV6nBW7ewKXEZP2mTzboJwVsU9QX3PwBsFv",
  "key15": "4YqPEo8tuqyPSXftHL1GoVtxxANs3ePNi1yssH9WYLVwKHE76JVKpSvREGTfqQHsNipVUPaviW65Xf1fmf8SejSc",
  "key16": "4vngUNU5cxuw71fcwUZQzFVBWVddSoB8WwNfnmUTZ5N9hKofiLyJ7FP5GaZTbhoKsqEhnHqc5qtPCLJzCYFVho4C",
  "key17": "5yQRq74E6N2YiAJyvQgDmc3ZqMMmgy7uQZnxpSWfisexgEe8RxTn2EFyXivxMyHU25ZvteJP6Kz5BmmGBVgiiyJV",
  "key18": "3XNz7YwUGu5Be4qTH9GGhRhsozz6YuV9asFex4fFrwzk9YDDqvjgqMrtKBEiGRBCgavpuYSHexhXpapkgsLTCpff",
  "key19": "51HUxa4wskpjSCj7nKr5WwizY2vsXmmYMtCoWbx44TrNtGgbubhgkjbhy1inbYPjTAjhVk4iVnds8zJnBvnKF4j6",
  "key20": "2dJ6ZRvqqSifWBSkfti5UPsjKYX5M9kqmCHKk7bw1RxkokziW4pom7KFWr1bnmX3tFVUUBrFsvvuzmSBQXRDxow1",
  "key21": "2CLY5syewJHsXc92LLTXKZKpQGWuKXhQNwHzoYR4RnFwgRZiNZy2pikvNKTZCPMn4nu1YhdhEHTgaQnynXz3c3p6",
  "key22": "4P8FgmzVDn46sVic9wHgWhA9w7K8UD1dBwVg19ErqHu6BqtzZN4TWNoatECgYq7EbD9ra2NnEKrAjVuRoFksQiny",
  "key23": "5aHucbmMnG6v92gNAywV4xYpwUsmQ9Z7UYwsWjizKu1hWXKjZP4utPZAqJuWyg8pC6XGFUvukZhZgSZd4rg5nmaS",
  "key24": "56TLtfuXabkshZH7afUwdU75kXdRWJtP3UXy3uQdevVUhfYCLxp88CbaxW5SwC9GdVBZE5DJ2fVkh1b6VRy2cEVJ",
  "key25": "2Jp1EjVNWnFCGMBzfzqgR1D5KAsFW2quYGitY9Wa6m9fbfgAa69th2Q9anDRZ44Fe4272DtznQY2sPpHgtgSto6S",
  "key26": "4PugUQ8b7P8uUH95wkCsPfssx7vq2n3AsCr9jTBxtKLteKcxskyEEMwb88UzKGwF8gbJW1WQMao4Axv9UiHwAQNJ",
  "key27": "2XcbDs2wy1qmzmvko7T8hdwueH1yYrehDMMgCAH13fbQUcsCqgiKxAFBWSs6k6GVFnjKXWGBusfa5i6JiMk8LxjB",
  "key28": "PeKwbJg7wiD23ycBUACLbyEME7TiGiccYpG4RAkWVsGZ7c4izdotqXYcT4z6ADHuqDgCDYmTeCajNMTdYEACxz3",
  "key29": "2oH7Da8fwjgJuY9Q5tWYSyvuRTgxHWp2ZhfV5QzL7a5oiPFhuhq2ThLc1MLZDxubN2kq9hfh1Tyshk786Sb4qK5w",
  "key30": "5MrBhfZgAgTGnFuSHtSCoqAsBw4wjWoeUHfHktd6CGHB81KHVQCfDVJYp3xLQx9aRU8kBAXjKHmqQwNbBiNpNPdt",
  "key31": "5LPp8pYMg7qzThZcv9eNW5VNLQDvfZ6mVGNrJA6xfapAiiEtp2PDZh1Q27mC4N8JyKyFeLvK9gXVN4VDq4yWmZw1",
  "key32": "ySCnquhcFfwYeP97qMumNoUAfY2axWKCiPBVJfcu1zYQBJmwCtzQHgKSjzFoYQHwHA9bUfngvw3qUayYzVeL8Wt",
  "key33": "2uZZuPRgzm51CyzNKuasuMpJD62BKD7jAVtZuKt6Ww7E9L7knqhgaoQws2WAV3y1i6aARDZWmARUcwuFqqxHhDZo",
  "key34": "3S6chan427YbcYEtMVPKybg8DCRoDhGbVAMxVe6HnvCVtoJBYVjgewNDfGWK1Vt84cA27WmhKGQZNLNTzrBtHZFJ",
  "key35": "yGXtzHtmRb6BsbzNVjYJJBE8tLQU7N3BkWC1u7RcdU8aRUVsxpv877BgwAsVHFGLMMhKg5tvEjDg3XMBrX6rzT9",
  "key36": "5cK5FFMQirRWwe2gqbgLNMoLEWCR4M3UKgcr3qMBm4HDziYSX5g9uHJA5cQocyPnDH9poRSyN6PjgMA1dd2YgZwH",
  "key37": "4MnKLYSTxMUZ33gWnN1PojBasgwWJDDxHE2BjT8RQNq2KjXGktjgsPRfM6HmFa8XHJxdbkgArcJ2p1RtRjmyD7TR",
  "key38": "5aZ5XzY3LPbPF4ohWieVnCJRdYrbjaLgEyY5kVWgQ7tkz1ZU64KisTCdBtvqAGhyv3CZQkouVTHWDH92eha516Yg",
  "key39": "46s1h8etEu3FgPycku9JnMYnMXsYSvgZec2NvzRMPYXjch4KRwHZKU9XJsTuDSrjQfyeVX17mQFcuawARGxKU1oX",
  "key40": "2goxcVwYr9RA8LjN9hQCL9jwdkcxiErjUiSxs3WqRCapD5Xp7F4PUvmvQU8orhDmXtc3qRgYxhRMWapcL6qbp893",
  "key41": "3Sf5XmptDoGj7mJ9ZFHtkrqMfnA7HykMNR3EP3iosm4VjH58JVhDLHNHfE5HoK8Tr4WTMxevUD8imvC6KbAphNdQ"
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
