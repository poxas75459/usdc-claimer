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
    "649LmoXsBsT2Dtna7QoCCUThdmdwYLy4kSFNtsK5JYpQ5uHxRtHx8PDigpcy76k62mWVdhymMxvqyu2dzWQ4jNyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWrBq4CbhepcGSp5aLvePbkaJ1Q4fSjbgTz1XmfBovzHyfBBMPMVT4FxdRvFWunTjy5zCroxae5qLHsvSBh8FPp",
  "key1": "5QwhfV9chAiNt1yULCPmpx2pPu7z1fs8HTSdKXBXd2iF1fUvG95RUKcK6Trb5m8m9hwh3B5zeC4kREwHjw1sEDNh",
  "key2": "5zyHufGHmZ3cSYudxXkaaZqGvJ5mmoEjMaHbyFsyy4A5c4MAPSUwE5PYMDJ8o1Vab8nDByNr1LFaV5dQiFo2FGyU",
  "key3": "2jokkza8QHyESBzurnZqBmzE1yYw574bqrKuWjMou7LB6h79obdfxFEbt99qMyZK9RnL1Z1dWkaRqqiHR8FmE3FE",
  "key4": "2wsSs2XWYfdmmngFLxcfvn51xz8aRDkMQ8od6qNgZ8AW1jcTaEtrgbT3jbdhvCFfABmJJtMyDHaJEmcwMdfb4C5B",
  "key5": "31KChTYJRaLQVU6b1vTZMeBDoXN28vSzGo7pZLY1UQ4aFimLWiXELtCWcRkw14ujzkXH5wHsqVCFZAnz4LW8WkMp",
  "key6": "5fDiFiLnaEGRyDh5wJZEfdWvSLxsXyuquKfUfk9VCaZfXtU5DKsUMSbbgFc3ueCWGFGZ6EBT4DDRka5UihgSC4Cc",
  "key7": "5JhBDFbxJXFzxbhQDeRrf7vjQEbCSxeeAzeurZcAwG6bCkMYsUzgxKFroYidwLykdTrnrDGm9ptUj1RVKVUp3nrc",
  "key8": "5LjfdDKVFNMEUKJeXmRX5Y6Si2XkmmYxopLAJMKvgHpqmmiZuYmqRresTMEPhdcu8mZ26GfzWiAsGTDDMfLhmeEY",
  "key9": "5zeRafQhkCf27MftpHfHRqf4pCuJvQw7fNKs7jJv6pWUSKyQbLFthStbgNXcKhEhU1LALctoFsPV6vV3gfLsQu1e",
  "key10": "2T7rKrmtgnxvMu2LQ12xBjGffm2UwNGAnoWXn8XL7nXcgPCQ4xRqXyWCPn4srbRbUgRZDsf4p6MiYCp4mMfdHKqP",
  "key11": "3KLxy14BiDbJbntQdX8XdUMDrt9NqFNTP7iCqZjLyzQ1BtttdHeb9YXMrcL8KyTqP5qbA2sSdQZpv14QYvZHVDYT",
  "key12": "8e1BeiBya8mwhgfso4yeHHSGPdEcTunvoQjHRaXnVVBqcAmy9d73LjU3iv9p5rKa55snWJbnurKVFMoPdPk2G5N",
  "key13": "2SuHEDSuhQhgvt4hqfAN45mv1QCwxSXJhorctApDEBecEDsMJnHeiSaqy9fTwZx9VyhWKWGC3HLUmRzC2xQwKvyj",
  "key14": "4Yc9twSHvvuu16wWwNQCSpKBc572VxnRLkxeWRWFFumwyNxF8h4UTtAy5BxLSkHzAVbJvrSGdm8HK6S1ZzAfW9Es",
  "key15": "25U9oyWqan1h81iZLmhMtv2H4ASkJbCQqp1RaUzuYoma9bqwpgWp9w6yoW3FL6snEyDrChQW3ixwFfACmdJtziuP",
  "key16": "1YwsY6ZgV7tqwtSz24nMgeNfDLGDe9T8B6brTme3bfMcgBFf6v8LePgnRw5x7fJPQJ61Av2hvg8sc6GQvJx6UCc",
  "key17": "bGCCUZPJaNseMrHGTGrsYor5Uz7GxgZtevxzkQ9cFZ752sgiV8C2jdCZp4JJhaJ5SAfxkNCwY6HHwqhwX6uMbE1",
  "key18": "Pw9a3s17PsD88YzY3ZPhxN7x8HxHkyZs4VPJayVD5m147D2iJr5ctUg6kFNUzMj1Qo143XqqBqaVnFD4WnqBULY",
  "key19": "3q64HRmNipYmqE2hduWm237WKsR55VM6SxuFpD8d9uXNBfUsUVnUHr4mNnzXim4jgEaFNsQMKUJT7b6XFq2jtybb",
  "key20": "5cLSfS6rhnVuXUoPKxSx1cj2u5EkPL9thouxQMxQtPPHaidvPooskY9vEDs67Zh1n5hA4ZHEuPgzm1eJoAEDBocX",
  "key21": "2PpRmiEjRkehvt7b27qbxhEPuMJcki8EUPXZ7snVUhHBEwLKiFs8UbP55NSrXHJLsoz1BqbzoJ4WQW1miEsyLtX6",
  "key22": "4U7vq6uVioKQH313jyNzUg5vcmdxhKCm5SiF3ivo3TXDD3SzNy6bq3kRkCSw2eqniwxvYNCi5QunRQLTXEtoAnZx",
  "key23": "2TZFhY2tYW9XQqSXmySYpaJAvvb93r5C4JqnWAvqJ5YMwarJJwxmytp7Vwo9td7TWxpvvphKrEs8V52WE66JT4mr",
  "key24": "5aAUaQbz4LSck6jUUU1cxBFbv5xts5pvbRAAPLGEdiQUAbhMXRgzcqrmef63cRVWR6u7N1qLiTZ9DGPxj9Pb1yYY",
  "key25": "4VztHgRRLLP42a7hNmfNkmNY16sCBEFXYswC1Uw2AHy8ubzyjAqi4nKsNQvuhacZKxSMZiwXee6NLTE9bn7SWKcb",
  "key26": "5ZXyKCZZs6ZSuvZPTdrza1ZvVMoxEWQHHyEfpf41SZQPi3itnZZ4BE8Ni9v2KbYKqVh1M5iupShPewxdZybA4uix",
  "key27": "4nySEQhZsYVBoNhsFsBVZAizhWGkcx6jpaNEgWpNXuNwPhZ4tHSRFvaL21wgWP2sYrfi4cxN9XQMNF246kvHDupx",
  "key28": "3Lb47WviYJApmYcNY2vqQKDTCsfLt3uUapAQXKe1vDKew5oHHeawsWwG8Q3Ky6Rvy3HgZQGrnGcsbeUkiMaDy9Bv",
  "key29": "5XhvoHHvWML9xdntBaWSY6Xyn87kSjK1oBaKwhEx4HeLnLdRsh9ZCM6rbqcCKfRyGzKYzNYufEYBuFz3rBuAYgMj",
  "key30": "5WofCTsFynNWMskyZGZ1C6kcHWdY2r2uBKuMrD65HLYMzvesQsaHKRgkbG3Uu7rMztyDyyxqHk9ZTYzHBN14etLq",
  "key31": "4hvXU4WvBCWZbTVRYZiFcQEbvKpz3xbS1dk3fpjDcicptWLpWRzfqrZNZJorj2M2KegJNHzf5eSJRaaFvwNe1oYj",
  "key32": "2yxe1bEZviXvYTdMpCgK41MoR3TLobdeNgwkQhmtLHuoJ1WcXAQHRmdn3K6wQn9Vjcu1Eefddtc5yTaSV7jDcXZS",
  "key33": "27MZy4rBfgZv5pk49WtyiDLeNcbwP8V4558C3xzStzicFkQKfYYdtbDEHjYNZ6WLbro3nL6K7MUuP5rUNSLwU4mz",
  "key34": "2p6VSnuoLC5y3zkbGVQRMJfwoDDavQh5TKvFJBYzZLAKEp9GeTsHiKcx6MzjC59bwK3BzhRZJ3ruTWezbLHuiKKj",
  "key35": "5f7numQXMUeMfAkAJAoBUUommVimwSASr2SM4qg6aJB3rhzpHjMBfZUUqwimC2HRzYSGBDg1XASYa9Havvk3yhre",
  "key36": "v9kkkCg2mkYygvi7xwzmS6bWzMiemskSzkVu6gvDqMApxABJ3bAUmsDFhmbzUrV6x81yXg8aQRZ77epTTQQ7YgW",
  "key37": "2TiLB35aVdbUUp4f5NSmMoVRD5jCRXTpwzt8qw59gYuKr9WdyVcCJWSrrxHDhkoEdVpFTrEeT4niZdaTE2kqeWEo",
  "key38": "B89mW14XQJ4FJN24cvJVKEydsLwDVXUeBt95xktvrF2stHTuCA2K3zJKuFNVCkqG6kjf7eTTFCBRC3UJToA3Rc1",
  "key39": "3LKj6YLg48GHnHA3ThLY9BqwA8qnaU46A4tTvbdqvBB9kVM6wSpuwobU3Qt6FCaps1wnayMDVKCiJtLJqoX71FFb",
  "key40": "4e1j1nsgYNY4JU5TcyBohC7rfJgf7jyLTEb8ozzz9cWjFnwUZmPCiHESchauQrDYEL3GQ2MGAbDBwzQgcuMkUvVc",
  "key41": "4wHB4xPxYAYJGGFCY9AcZJwms9Exdg9osvRPabifiawjPpruxxzyaW3TmiA9wsn1oaWMa9DNYGKVeLNsxXmtqDi5",
  "key42": "48rFVxGUXdTVEZW9HhfvDdFK1XH7iYU2gRgqEL5TMoN2W7r5Uorh7L37rULaP1AzF5Efz3XGo7eckAbimnaBBRme",
  "key43": "2a18hwcNDB7NVTNc6qEMFw3CKbxU8inbUF9uYwvHtFJkwYc7pWuKT7CYq3zEq4Wv4aKyoZ1sxL8rNcGvmzaziaC3",
  "key44": "3J3iZ9SyxEe4SPTPWasAQMRfBjJZ4FUgWFY2VjbWSf7pGTbedPaPyhKsyw1NEgvT74PG74D3cP6e7LGAXjcEFU5R",
  "key45": "4uqa8QHuepUbMbNFpzRbh565gkJ5W5YJvrEvybJDsWNLB863vU37mvS8mUDZaJQUBySfFW8niDpB4qcLpCyxhyoD",
  "key46": "2AYyYPVWUovDinzUM51fHubVVbEDKksATk4dLzbLyoJeTs41kdsP4GkGeVaABYuc5HW4Jh121Skdumrku7NFcMzY",
  "key47": "2PCZwJxkXn1GuTW3FmQi8PVqvQmfnnb2TuSueApSm96hZ5PSCxvxppWkDwhVZFVX4XkfmQoyAHwYRm9T3NFTz6dm"
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
