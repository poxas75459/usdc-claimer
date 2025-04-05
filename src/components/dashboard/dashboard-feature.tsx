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
    "cY9u8eWmpSTeHnJr65jKEH6QWWXKBnZwgLRQTsoA6cNYu1SLV92Lw5PNrZVQLVKrrcKV6rSzfQeSZcBmh9H8bDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asZhF8EfaSpREj7QKdL8Ew5K5k5ftR7VyuewD77xTrjsejVuHzYJoFKaGifzXqQ3dkqyWnQ7KACrBo541FtQeWZ",
  "key1": "1WvS9iRXmmBtr2Y6jWhbFyXoo3PMex2ECdDzsCexVxptdFszQwkvoWr8VwL5PXpokHe5ye34wSFKMvGQ3XZQhLC",
  "key2": "3BbS2FHfbAtHgTfUvFZXw1eJyZj9a44DigySpDMrVBjGRPPGJiatqFPKtGxR15TBdPX2vzZApLBAJEEQU9eQQcZJ",
  "key3": "65RhHLYEiB3C96SMUWiPCb49is1w3JgN7HHLiyhitAiMfYiT7ZMbpLuEcieCf6GUozB7zHt7YwkkC9MY96HyurpG",
  "key4": "BN3SK7jbUvcYBUnfV9gghW4VjgQGKgyJLM5aaWSKUGdxL8bHzuGswwn71L8ztjTmdXADbwiAZ3AXYbmYni5s885",
  "key5": "3A3Gb3CnzGhdp2GDraq4suQsJovZjQb6G4VdUjohftZf78NjELeHBb8ssKW6bG24eKyVPfF4go6up3jaDkVyFxYv",
  "key6": "2iiDnH9XC4gRW52jqz1zmjtUzJZmGpcZE9We1F4wYo4YLQXyyJLE71TQnKZYBb5G19kUQvhsvqVRBYaD6hkwKcyt",
  "key7": "3GBxdS3BiUXvWeyT32hbB4TYWvJZMiQ93ioZbjsmznGTjRKWr3bGoeGQgTA7k9HofiuoHhVGCr5UQkxZ6ZTJ3bWt",
  "key8": "5Hos7g5Tv3Dp28eHRCnpCnnteVturmpn13kM77DKqjV7U9zQUb8cxoG35PMBetn7e3sX1Gce5HVnX4e4CNzjxk2M",
  "key9": "4phjneEp51J3d9FyDCCSn7M7gfgCxhwwyVfg3YWwxBqiLkKmNtEASpx9y3U51c5V5wF46YjkW31J55vBFdRm6G48",
  "key10": "4fWudoMQYZVC7LnWTa2L5cNyEwYbPNiUhcvq6zPww9fnX7zfhKkPF7YHceTmmqxbmXTei16USn61JfKHUd53RtXS",
  "key11": "56CdaRubSxqZfWu5eeUELvcHZoAGHmXg5Xf2bEnaXaJLFUzprkS3F65g7G6xLUv5YX6Btt5EGsoXWea4EqGtTq9n",
  "key12": "3viTAF5icUPAX7fFRrXBpYREJdDgPKgdC79k4NaY5isEbNzKQNYhw7QPZTjEtqhkYLmTtgBHHrxkrvxC4QogLJcK",
  "key13": "5eHkXZ3tQUUmjcJJJBgQT94KNYaEPw83wBUF3e3NgMnibWp3GbuczEnZiSKy6RUMrfLPNK7PX7NbGZ32GNRP2XKX",
  "key14": "243ZdZeMmQitQ6bxf3F1pC6AgTtb4QDTbDm9WUaVR4VhtUNAhH2fgryRtdKeQRDupLc41XiCxCfzAh1cn3UEy8TM",
  "key15": "3dje3JddT3rz59HXkaRpeue5xGk9Ji63hAX7NNKJGcsXXfbmguLWBk2zXkC1N192n4HYGhVbt1bjq8JDT21RdJJb",
  "key16": "1aZ8Tic3tcSdcG1v9TUJFpThuwfHKyvWxLjPpPtR2V3upeXBniqQ9Ks7qBcntecSgtYgyWU4HGP2Jfy6m1eGFMR",
  "key17": "45Dzyh4wu5aNd2MbbKcZT7KDT6LdW9TkWGVRB4foKByGTR1LECViKM82YuA9mVfS4SDkzXWREqLwDj6zWNBphfHo",
  "key18": "2A3S6Tyhk5qr1SuWjnaZNJpWghEtfmtfo9AoVhWpvhimZ2WaUvwrrPdYsPGMiNXConrVGqkyyC5GhkWWb7rjYHKR",
  "key19": "3TVQr6AXimTnKarDDDiDND71feJCVgfv6LM8ZsYGGuuNQAMBhp5UxiZFRz8XVFHuk3VJyJQsz9gLTp2YoJLxkHa",
  "key20": "3cZHFe6kEW39qe61ZMzn6HMfTGhun1nHZx4awJR91W1xd2kU8dNNRnzfAxA9zEh4mFLwNM3ae89CUjB4nCP8THjo",
  "key21": "3DQNN16stnJQxXdKWvStLwYjC3FfwndHEur7DMNeUQHiSrSB3swt9hrpbNrjM5XctRjd6Kaxe48vXCAirHqUm6dY",
  "key22": "2Uy3DzH5C7rv4Bu5BU4Y9cvzfV6MBVBSjW4jm9JGrvpHHz5iqdYa84xQUqyimXb64ohR7hEFpPBaL3rP1jXSApHs",
  "key23": "3KSNPmijJvWPmCziZ9pnaCAnqPQzmFhCeGsskTahfuaMZmhmVSkMWT5xZVNRvB8Z2uM1aFgAw4Pp9yZUPnetrRZH",
  "key24": "FZVRzPg2twioNfzAYSe3mq3ifdCXJJXfbdWn3R6rvY8a3HJAyJwmzQ9dWBAwdD9m2PXRzVkC49xRojLQgT96Fi2",
  "key25": "cXV7pkaWCipGCzuj4LZfMKjr6gPid1ZNM5HjJfwtGJxqWFUgoD8m5tn5jfAuJRQkQzDqwHtTWk74ErVKtdS3wii",
  "key26": "47FpDKQgTQga733hNkRgkEhb6eQFyRid95hqYNH6ZDStTssoPakbt5ubojXi5jSDSUGb8QRaQidkDTXxoVeGBAau",
  "key27": "5tL2UgDd11fBVrmMnUuz2LC6USN38iKjtzMEaDRBNu7jhNtTAA7AAz2S7JqvG6VAaw7ukL9qyZzaVNWVdV29fHEP",
  "key28": "2AGEmG2PqxCSDmAH1by5U6vFSz4iV2g9sctCPqjZLcUaZFQ4wEdymVbNkKPsJKpo8He5oSqfBwvD74eLkRjmXFwW",
  "key29": "qWTKpvBDG82yf9woqBofdDUL7dbVqDiSrGh5ABKRdz2QY8yGZnHurjLALj7aoyngs7JzqyoN31FKAaWZSkfU5ti",
  "key30": "4TCADs3JinEDvQwpZYAQGvRu5vdF3W77rAQDd4hAzNVgxnZ2a6xxUJWX4apm6F4MmwobhVrD9KnEQhavYyipKbZ8",
  "key31": "XbDwiXAXFxAtcXK9iVEQzg4PP71iKecuqspUQKVhpsu6SUdjKApcWow7M55pgY2guLsS6vjFvGj4ZmpVwjCtjeE",
  "key32": "4F52Tku8xHb6y9WneCjbHS93fYoU8GeWsh4NEWmfWVAGUVhn26H7M9Q86AkkSpiQRMGu9ydrECWdFnRbfg3fREsQ",
  "key33": "4DQhyUKY5hkcdiwVtcbYkz6aCZtkWnHhMYJKcYWShSERKD8MUoAYuuJZU89YpZK6Y4NcQ8ZS8rhLS8vRjznzHEnL",
  "key34": "5uVN9MqCBYpuBLZvQq9pBhXpg5Jep4RQY1bYa8SypjJoWkWtHYAmfDq2JFeCxYvEeojtV4cZFnBQi6tizJGf4DVo",
  "key35": "GjzxAZN6xy9EVdJ4HCAxziHprhtWNapfmaTtG82TCVsSRb3ZGu65afrGNjfKsQbKGyQFSuHQfphqaeGXP48yaRB",
  "key36": "3Bapx8jSHYRfN2K9gsTHTuWh4ugN1R6eom3NCTYsw75LGZz2qprcuKHKnVuWj7nNqQVeU8PLj4v7YFh5VkjkADrG",
  "key37": "5iyfbKvqcM8UXwHS5xDKERg5rqs7CKUR4ck7ynkCrHAd6BirWiRFnNLaGhSLt9swN7C6BP8q6cDQVGbwTNNsVK5h",
  "key38": "2737QFKpGjQabDNXByncjzVefUyAAcS4dZaobyNkKB6LjTnBsm6osFPf3oHnswm2e8vY2Zk49okK4RYWasnd4kmS",
  "key39": "26EK5XhA1FaHoNY9jLKrb26tCLtmr4NnoVFydUzT4oaNGKSfu36hP4ZsJ4xGE6tP4GsbqRKNNVNZXRQUhjy2ZPFP"
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
