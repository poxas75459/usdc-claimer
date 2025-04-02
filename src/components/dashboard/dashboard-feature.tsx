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
    "4K5NEDnfNSEFG3gNV7rVUehT6PFhEGDCwRspwZrAw6WqAAp9FpAeBbkDUPD6BCZUCdLTtP3uDFxMZ4q1iMd1Mgjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7iX7LwyRZ8jgthmKdYLSjbqSXTgAbipzENTS9oPBiVEACzVrU61g7zoJhfEX2JBUpWe5x7MCutunzTEbsUcQ36",
  "key1": "2YD5z3SUC3LufUQFE5vk4LRfVwDLf5wxRNZdJ75brdMY6oXCkLyv15qYxuL2ujNBUxUYPPGxeVwbu2Ai7MuNNFDU",
  "key2": "2fnQXAWYq7HUwoYmn7PSv1ExJoDontQzpQb6XSBYzGvxfYRpXaAXtC5vx4iLH3uEPx8ZmmjEvpFEnZpQwek49BG2",
  "key3": "4DRyWdAuoGBNB5aKBrqy9tWn31f4Bu79NXU8FzywNCrCzwj9otWHxCiR44e4ZpJJsLJQvX3ye9T4PA31jZmzE4Mo",
  "key4": "2x6GbzgCRcqLT9ccvLPxCNFrQ4J5hJPu9m6DpDnz3okVUyydVeCMfXcFmmeH6g2zAChWXb6SQZxrBiPM2rx8C4GJ",
  "key5": "4qw5ztMmA6TDgiw9EgbemPp4AocMbosRhFaTXXBHBL3wXLk3M1EwsfcFjDpeVKYQ4EMtjriPCB1T9VKFA2vRau5m",
  "key6": "2B51ztkix25CVA8XnqpaX7Nd9rCbZsZW9EAURxU6uL2uWeZxyPP9XkKkiHYBw1sQRHXA1iJ65U2sjFNTwv5a2SWY",
  "key7": "3KsQ7WpoGXZrMWxVfsezBVA7Y2yUg4pRPbkC2wQqmv8kpmwSgxQDiQG4HgqU5yjXdhRn914XNvS2B9rRhiHs7NRN",
  "key8": "4TV68pNuMmiUSigW86wYrZJ28oB5bBVxBWbDTyaJNqYDno7ihtUuPuipEQe5vr1Bks4uPdDjC9rB74DTg4JkEWif",
  "key9": "js1LTsgSABAbGQ986fi3ZFEdEqo4niahyvrZLVsR7TSSwFj2fZpyECRvZRzmxbCQseuKmJyYtcUjdtLobkVedAe",
  "key10": "4Cn5YXwYzJdRKbbunpyTuXMrHVtFzxRTSjBd8L3rJujWwCxBnVV9Te6VwixtNHSVjYcUwpUZBRxXvKzH2xCADxsi",
  "key11": "5sQt3ppCRpDghpJvsuFdDMAjXP7vqFq9TeqThtLJ9tPRkGVmcqz2ZMUVCz91v98jeZhVMACL1De48N68QoBFz6sL",
  "key12": "5UcYx8NVQtBRKx6wENxtSUp5Ryg6rFmnyXBRQEcNuFHyYxGqx86A6MNntuDt7udAwVXrQ1QvLCz5e7S42UyDzpy1",
  "key13": "V4qpxPnuKxjupzBbcQJ1ZyGqRuphmswWPgP55kVrXNN3RJPfMjtPp75gvC9pqBUoohx71KUFqXawqVwK1ayLys7",
  "key14": "3Yqdoetfuob9vU8NqkhLLJxd3uV7U45xaiZZG8RrP8aKDFdgseLN4Zs2hRwZbXXdeHtJtR2DBrBz1ia4xd3kz33X",
  "key15": "2b2YuiTvSbPJzR3aokye62x4XvVsKvQXRJdFcWwNZTQ4YPrdoBLzF4UvEdkprueh5XxPMJag7vK6FDNJyq3Ypo1i",
  "key16": "4VPgdqiaHe9qym9Q3ttRqReF9D7jB1NkQVjoCnws1xzq4VMLocAiESfN1TuPauxFW9saYLmcdLMgzm7pguDLw3dx",
  "key17": "46vXpY8k7hnjgecsvU2XKuhhHrb9eny81QKiAL9WJocXjKUU1XjUEPSecdTNy4q4pYgTopA47oVdAkNadKWeiz4v",
  "key18": "3bz6f2ATsJcWCsGdu9LcMMp81bxoFTzCJppK6RfNXihRaBz2W9s7Y7rw6XMJEmeZkPc8qFCMjWjTqphEMGL18pAB",
  "key19": "3VD9EH7faA8zQgtsm7FuRaU8iqioVBKyXwNT5CWt4ZPyPgCqyi3Gyjd8w6HHjXGkcB6EAnJiW1kLFoQ7XbcKCVcT",
  "key20": "3ZeqpMmeDpkhzKFHENMko4c7LtqR1cVkzvacLRnnXRdPp253xpvR7USQyzeyCLB67AFdvBJtNVWTsTgj5EvuBFkc",
  "key21": "5ehV4nadheeh26ywZT9sA5GZfHcCUwjrAfK4upCRTMWPYc1ArgAvMzkXbsda4i3hc1cSgUHDD7pQ85Xmxp5fWruf",
  "key22": "3Uw3sYoyb42VVB5T9K318aBvAkPT1gBhtZF8wLuGHwtBZoqN2uTQUDSVgRSmDz49eezoDEqZypJjTKNqKTGN5Sns",
  "key23": "eNQQWGVaetuQBgMryL8LUcFgJs6iFDgKSX4GsYwBRfNFL9Br6QcP9L58qPMVm55omoeEGtLD45ndskRzrpQJg3N",
  "key24": "4xA1AS8G8SXeyhqMvEV8AYb1UDeqXne8AMa9UHzhnQBDS7GikhvTfuNUA1qhyZDrH8HiSoZ1PencwGUzaocUT3Y",
  "key25": "8odApyxKApXYjztvDxiMyfjYTTdz8r4qGxCm5ZVFDL498DqpfijEdCoLcpqCU29e3w1njpBcjYHjM2qSDvi7Jqr",
  "key26": "2Pnr7C3zHD1fc2GxxvHwukDS58572JXzAAnfoCBvQ5LEEYotr4Ej2jfW7Hj67KJ9XyszzvxPCG4GR4fBiJRExsaN",
  "key27": "5KUdaLkJtVzXL7fCBPSTxhJix8MCXNkNfujFNh4CFRw6uD6HEotoj6mVaVXLQAfuCjpw4pjBG8w4mMFeiyjZ6aeE",
  "key28": "3uMiRbvQT738wRqcTkKYYyF6TszGcf7cmVoytcg79pUNH8z6FxNxYwysZuoW12xThWQ9NedhgbToXAuokLdR7ndX",
  "key29": "4t4Vt1rkybptBPqVb4jsJm2thqN6GgZwzoDE5opGcakmVKswxaB81sZkwazbQnLynqB266E86P33cU8NMFL8KDBf",
  "key30": "XYXunPK8xxmEyGvtRbVKAfZBYZjTfKATGXc2dB72Bes3beUhQ4U2Nsjut8TvsnStZtjXAMwDJAuPDkg9Gco8Quy",
  "key31": "TLGJEfp7yPGkHATdoyzD8fT8PAYUbZYfz9J7SA6Rs9ZidNi4knuYR4KruqDyJ7q4YHNWUkVYGXoxTb2pUHwUNKV",
  "key32": "johKWvQvFtv4bf92NhL5T4Y8jkrtSw17PzTqCfRYgkrKwpmG2T3ST8XmpFCyRsT9Zo7pPRj126iuJHTzBUVLSAQ",
  "key33": "2gRS27NZjUV3vBMpbJcVnj33FgCpAd34HgFSv1Vn3CiHuGznP5gp8KXRDP373biYTHuXtsjecf7bZi8DLiV84SYL",
  "key34": "AgSMhdLkFHM44Ms3qQHG9eAEeoFpL61DvjhBEqK2zQqbVHdSw17EqLySDyMdckHjVcbsAqr3g3WeHiwCEyWyVDH",
  "key35": "2G7jvJ53QnDMgzPsmuyXfiHXtbvqFinWFtxbpZERQMkiSu3WTjzwiuJbDH8HTuE4gN5c1rxG3ThHg9GCpsv3YMnp",
  "key36": "mT81HUmaEV699ntNcBJJCV5Ap9bnBdCJfWqHVS4KD2mbQy3sb3yVBerxevEtZRiugpzv5T2nsunKdtvwjwNPx5p",
  "key37": "3TJMQdzoAWQggj53YXsA6aYx3uMgdo7UX4CsvvEaszQQnJimQf9WBAnYW8jk3UcAFzGT4r7nc4Pedj2DMYxf4BaJ",
  "key38": "3TkTTGCLKv4v4m1bRAoi96hr33kpghgMgU6z2m57BmCzB5im8YsWjtLLvTwgEG9C4Dn99g6ZauZFpowFPQ6GS6a5",
  "key39": "3pERoMnzbrW5SK4jJ5TyHkKC5Lb3cHAdxJFvzCZdrkMhYbKGtP9EREyQm1TWFSPqLyY5vgpkgRoo5rAtLFPHZ2aK",
  "key40": "4GJsthntp9HWT2hpkVB498eqMfXTSMk9XeJimodTBp9NqvPeQaaKD7T8FFjSHERF7KqabE4NLXL7q95EZ5sBP9Qi",
  "key41": "4cibSctvQKaHrt1qZgcdby7MZarP71rsJDgAQMeTDMu78NnBZuMT4ZtiUA7aMsjPkKanhnuvTdkXXU3XwntnVbDA",
  "key42": "4DAps75wNSZ3hc5QdKtQfhvG3CWqcCkZ7gqqpGbC1AM98RzbZ9SPPvhA2iWQhuvAf25rzd8tJg9rEHfozgUiBNZr",
  "key43": "5wHEwQiQhvah7ejj9898AKWB1n99gYMqsUNoFbwzqNPh7RvrxzyNyBR5HwfufyUTuxb8sfxjX67e19KPQAVmdukW"
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
