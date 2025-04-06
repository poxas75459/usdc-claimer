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
    "3uWJqt94YZEC8KZDqyAACHDbBCGrjYfBysWdVjTMUUXQb2qyHd7urKk6fj6LqYDjDwLNczzDR4KyzKrDLd8ajbv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZMx2eRjDi3S6rrUczn5Z39yh19dJa2ZU7w6b2AVpJHzR3mRrkuMtjarkGzjtE2iAWN52YEqxkAMyxsWkKusoi2",
  "key1": "5aufpi7NRhYFi8WM4dyxKCoUPkB8WQRa2JjgHqEkv9JPgtv3CYFWfGx9qJYhbMnACWFsQp7DDXNT13qEK8SvVsMA",
  "key2": "2ReAYaV4oneVzG1Mt9CbsS5Cqwjwb9r4vQevHjHtECLLxtQfuwG6zKqDq2KekzjVzDN6JEt47ViCakjYZE83TPHd",
  "key3": "3oZMw5ejssYy83FTWTnWQ1iQsAfKLxicqMZbePYRhRdczGKdKPgZtKQh9NPu9NYhDx4mBgJZL8QJBV2EHsCuKfZH",
  "key4": "5UEuWsgDnhGobw5YcR1H38478jDEdDtm69pJQ76HrBwcm4bjKMaDZG6XRHTKuUdwcoR8u5DRYiccBxe95BfJZCJq",
  "key5": "4BWiH7Kvqv4FiNyZx5D9FeXbFt8VtWuJhqDeLj5hcCb5KxWrHoDhyzg85dDCKpKXURPJtQvtNUYbwPBKVFqHk3DC",
  "key6": "25LfPzASFFRFtVD9TcPL9gvJKxk8vFCdvS7mbZHs6WnGRL8XPSRYrBdBVcEp48PYvnxuQiN4duWYtTi9BthFfnmd",
  "key7": "4KTPReHZYqdyLsPqXyARYEvnHJjMaZN2KbJQmqhLRsjf4Zg6hEXEghkRS1KzM82yRayfzjReY8Kka99Tto4thfB4",
  "key8": "55vh9iF1avpxvLXT5PNcWSHW8s5Dg1gs7mGGRNm4m3SU83QFnpVqyQK3s5J3CRqbRQZDYX7cYrTVzPeooentkaRL",
  "key9": "386NRc88LyXePURfj2L1qrRphUanGtWtnJ4WGP9VjHSegjyBZuM9VRiWMjkatFFuLehEsMDgFg4EB22dZCeZfYgn",
  "key10": "2rbU53zah48t9FSqyaT34tESUEzMHqEV2ZsbUambXEsfcK9WsfbGt2DysuzasGf4Smfqs5bkfe7SqVQt2x3AGx1J",
  "key11": "2vmXZtdQvZw2sx3svv9cGiT15XA6TknQw69ivvfacPC2e5edt3Uqgd8nFX5oLLHvJ6sWitXaTYkn8wvgjpaQPCRm",
  "key12": "5ngaZwcphqJhatmREbxqn1SSHeY5pj7vvvybWNvvPozG817KgNvsEfbdiQmQUucYDhaNoHbCG3AMswWGTakUqQ9L",
  "key13": "4bRuwmUjMSn3UUyVaGug2QaWp5cYzW5nLeE7z2pN1Hd6CU75cRnFcj416sXqzytsFTCeoDLYGuxmZhkxfTczKFAq",
  "key14": "4ZepkSfXtxHiRNb14rsbNhASv7yB8Boe9L5PCwNVC9VJvC6VayZ6UHfK9AcwLBqiovAfV7dqh72hHN36NH9AJfnD",
  "key15": "2A3HghvCsYWvcuzsMStUJKNZ2j93xpSrYv35UH6UgssPtQtmRyzc2PS9KgCfATxXtJGpghRz8Yu9Gm5YeHk4WFcm",
  "key16": "56XyjxfjznV3Sq7fytMVNYxkediyUYuerqh7YE1TypkdAxdQqtKpUmRTpr2TMXoet2p4qAv2sSoD3pdjTfnNEGQV",
  "key17": "2dYXGxu1VoGvxUCc5zFPKRj28xhvGgGyhYwkwdijuNyJ4df6d32c9UG7r6psXopP9hsS1LjsobhhoXQVAG9vTsu5",
  "key18": "3DoxVoWR77EQV6VYVcwtnADdZSoRt4UwEFQKoMp6iz4p3deWkbVDJ7h8zqS1dQMgMovtgAsAV1TSujf2bWJ9HGS4",
  "key19": "raJa2DWThPki4YPfH9hEFnTYwPoC3asV4o5xiRZ2mpMdchqdheA8dRzRWkvET3kCqL6xDuhkBfvHtSiRDiJQ4Hd",
  "key20": "4CGchNAWTCic7wXo9HbNc5bj8YrPASZHTBXrq97FixwGs3VieEgaHNNX4JpaqqkdDJNhvketAuvq3Cc4Q8WXxSvm",
  "key21": "22VeXzwgQv7c299cWpkDkUmviXnbabpeN6m93CWYznDmzrKSJsxDGSKMWasXaeKfbG6k5LzXtGupNeste66quNfi",
  "key22": "5TcxyeZGUbhxEZZdGCrsjsX8Cqn2Akwrpr3bqBRGjobq7ghNGU1W5YeKhdpoiePncFWrie36eio4jkVE9S9UeXBm",
  "key23": "22PwNS71CHNh9ZPNhetq19B9p7P1DgYkAM1VQkNQrfPMtoEgAsWqP7BKc4Pb2cPsCUsiRfCJW3N3444oQigRWowH",
  "key24": "2ygwwYUVwGnNRHhtZsqWYQ1yFXRtb7zaPYyWHBH28fHaPjpxDJnjqg5SKcCsXMbSHjvRnD2L6FgGgNrdntvtzgrq",
  "key25": "UxQAmmxswNVyqzVUCuGLz8mE6pMWeRYVPCstT82fiYfgD8Nkfb8jrn1zrjFPxUZ1BovkaQU5JeAayEjPks1zZib",
  "key26": "2PQxkWBuE8dJbLKpJQLcS4x67BiTpjyLuxXCUZ7wS6zDjjcJT54hYUBs7HnuYJmSNEbuBzBkYNAasFVV5jv92tX",
  "key27": "4ttwf3xdR76gc9WN5HyqDmaxayAszqjkPfbT9C9XSYg4JYwgym8LMtf5RuJi2rgmDXmuJGzGh8wi8b2SKukFjtED",
  "key28": "2bZU4AysCfJJSrgQuDvSeqe1B6v6uUUheYqK5GLb35kJ6zHpuvCPac9AUUSd8DETfB4cTzigGkAhQ7ii7LyGtqHs",
  "key29": "92FA59rYLfWwdgnzbpc21HE2wJCdZ1FiQ1CqQsDEkxn4xUGQP91tuLVYBxDnq4z52HK53AYBj23fMkaJTWuLG3U",
  "key30": "5qYR9p7kCZvLkfbqXL78V3FzxRA2VEbu9SHBcJK1qebrBhq89wntSeVCFsqQ41toYip4fAJLNVP7q3r5BJdEHaQR",
  "key31": "4YCg8RqHNNJbKfzqVCNQYUTKFp9Cne25x21MZGNFC4kB28KBwGwPzkk4pMAudMRw2gx4Tw4nSADemSV8BWkfbh9J",
  "key32": "5STLcQryKUjS7X9aruVW1AgK2kS4SRodq1vUExCwD8GkWE87v5wa2T8QhrrokJufiKRcr5gduXzFqRdjRk787pd4",
  "key33": "58Ah2A17yG6qkVHBememhqXAxyLErZcEEKWTwszyyXEdgjmdP6NkwwpY4F2HhVqTgycdB4oiWhbsyaEbZhUg73Fi",
  "key34": "4aCm5fPvdJzh9gmL7yHF5Reas8xMTmYkFXe5gDHVpfMkrWCgqCdLu25EGj3y4ciiPyfw3VXnGJ4P5Nuwyb23r5KG",
  "key35": "46PjNSWsjAszPKdPwdVkKn3fmD2DF7G4Q5pc7eXa3gbhd76maVCQycipr81XXPjypXCjuQfCDbReqKpxafnt6nXJ",
  "key36": "x5Mqyy54Jsh7Wa4L6jFpw6NVarCvmGGGvPh8ZsRKxYYJY6JuPuFSEmEkd2n76nQ6dTRUJigHC4cJpWd6fC9ZgeK",
  "key37": "4UqTamWbqYtuQ6PzyXi4r8HrGwrBCWYsThGFTCuVbA4LXAhRAHo6Svk2RQdCXUxFfR2PgaLqgoGbv57fjT5P1Uar",
  "key38": "5Xu9wUzJw3t3mvp1D5TD8n47Te7gXAXn6Kw6dvqce14ojE1fHJayMZC5mejVzFKFeu9J1eofpWgVkRRbkWvV7b4C",
  "key39": "5MMxZBVYfrgYe4vvSxnv71vB9fmyZE9YqynCy54AXNLL19TFnG7wBhYryKVyxdYNFxvGuDTha7PPNXMxMFgmPwtf",
  "key40": "3y28NEDSPpWkrufK7krSJ2UzgJobXsZkoXEuCJwBUASzZgdTgvPjftyTyv2GSpXQ24n6kPPML9H6UV8RkrBJarqK",
  "key41": "5kSiYozK8ovxRRN33izC6eP1X87pcHt6i8Mw7mtbudxkRUZTXzb9xrwQsi9BjkyH73mw4iDLKMkqyqCH7iYgTjrT",
  "key42": "3xLDSG4N7wUfMnKJZyCcauMMkjqMSApTCSSY2kgkc3eXxCDEwyJ3TVfeDTsy21BoHifqosweaoZcDPFvTQz3FVRW"
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
