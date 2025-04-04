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
    "5g9shmvuk5aR76oufd6otXyFJNzSpXpRtNYdtJBUadr2gi6hXvMvKuHv11JN1YxZNoNwRDuspyyE7u5MQyfCkV3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579udbt4uTPDr6kkyfkB94nG7nefTcG1K8onK84Jw1r87NcGuMstsoe9Mydh9nVLpK3CeaLJmub2iWkuofSjnRuB",
  "key1": "4L5Hc4LpLTpKhZwMZhadqj6vBzoZssXjjMnLziAysEUqEcGMkqUbsAyAKgcpFWmPVqz1pjmS2JaDXx8Q3HBMvXyD",
  "key2": "24XuxKjQbycehGCmkXRMqS3nWva7Pc8sqtLadhwHgDQ5dPw6KSj8Yyf534Kde3RvshbToaNB6fABabz7wnUUu4M9",
  "key3": "3c4st6Vet9iihhL5jrGW6goq5kZWKVigi4njtM8d1dapm5JSTAbr5dj3Kq6FCJeHWUb1w1XohqEzav2iELb8HWKs",
  "key4": "4iqBUu5kSgyWnwhjk4PpSp7C56bAQW6PYP972L4ix3r8ruskEct52NfoVcZjAumvCGofu2smmwByr377tisELnsy",
  "key5": "XZ1raghiJnmFBBygrQqbDecnptZ1mr4MzDAXV2thVqQFUbdGtfuSrWkbT9ZxQupaHpwywnRvu7J64zePGA21PBr",
  "key6": "512isDiC5LzaeJdSy1yazCVQq5qNHDmrsMYdX81pUzC2VMR3eccfYDx3cqjxxALVF5cEw5EhV79znLYMhKPqKvSp",
  "key7": "5B4fPv1UKo9SvuBhumfjK8yHbFU9ESHmkoksiKPDncxuHxN3iTE4L9qPNGRRqaf89d37Q2QfUB2264Dq3dwRm5ix",
  "key8": "3N9NFKLUoKfrAgLVt1m3kn926nBpvZiTjykqw4cvptHuzA7XJHvHCUffi1v3hq1WSBiWBsQ9Xtt84TirEhkukcqM",
  "key9": "beiZL6m1kBwq22SWb8UyBnas6upE4QTJohmwzsLNo6v4hnpyBCj4Nq5Pv3EiXHjQuhYQY4kXo8ASo8KPXa9XJCJ",
  "key10": "3mXk3MimbGFa3TvDRnZK5W7zJBQbYxrtBU2QESHmFsB7qUEPQ3CpuBGy2x3U49oYWocWy23AXxvJUuXNzL9XAw6s",
  "key11": "2qhRPBMSStNe1G39B9zkCfRTNowdueEf8WmScTcUVmd74bVu5bMZ2TLMctrQsqPzCoMTDdf3HDceDaCdXqjHbeuW",
  "key12": "bovpPHoUwTaQMYCZsZcdy7uiCfcHTmv8NWdwakfHjfxBWpeK6enDdGygrC2qVXaU4nSWKbb9wNeoe3v4WYnmPGB",
  "key13": "4pVUAqVKwpr4cHN8uWJvxEWB8nERqEiXjq5gPzHzyMB47uneL9Zz4yX8Y7bL1obTt9XCEab6eYHthmCB5G8BkQE1",
  "key14": "3ijVQzmjcHtUHPbf2c6oqme3Vse2ehpgXYFcWm9yj46F7uRVz8AyUNC9RKzbu7FQ3a8bMpdzvcTD3WbSQAFnfDnr",
  "key15": "5EbMe4oYjSKyBGhddRAGMHKHj7cy5jdv9hnqazHvN2kJrLL9PMcQa5Y16uKMz8eq447iQ66c5banJniuL4hTjGYm",
  "key16": "4wKq2tfJTYkimD3nptUzrakBVHoYYTWCuGG9At2fRpLATiKtN91Ua1ZJhimZcqVUfBzXPFc9qwB1M2y6TAbHs4qh",
  "key17": "3bNoWtbsNgJf2BZ1WrFmK4U6oNAJAVuTQaA6KC7dbYXzrRUxSGz2YMMowT1sYfhtTKQQtiYiK4EW2H5uvz4X8UCw",
  "key18": "Vs7x1hhbf8CYWA9R47dsv3JE6t9z8cB66mVwi7jSvLC5s9ruunpQ2Y6GpeKQMxDgKVvbjhSVghKcZWvD8CvLMbD",
  "key19": "5cAXikcfTU26czKuMy9gkk8XK1peg2wgpA2gCKtGWURUZ5ffQM8A5HxvDmT6ya28yJhUQLLsfAxNtYpATsXC9Cxt",
  "key20": "2USKB8w8XTLjsKLdd63XWWFRksk8VUf3URxtTSzgT7yNSkByLcPgcTm25gdy3ABENgzVRhdtdVboSMy9t2jujhU2",
  "key21": "5V7Fs8msiizhTLUgNycDabkMQcuiDd73YjzUWdodoy42GxxzbteGeuF1eaDa5qxhz1uqBRwKh3HQbNNEC7S8xg5S",
  "key22": "5D3WQ4FEEMnY6U8ndN8CDrovkEqsF6URzZ7DbYebxHbw83atFRzecRpeAshBQEhTSBt65GsssovCGYt2HMUq3WxU",
  "key23": "48kdy3NGom6jHmknRUGzSmqhDkLNB2T4wcZ7ZJmQns9VL8nptHP9BXSAdd4z2DcufCnyfPe7gvqrSaQZS6J5kzVQ",
  "key24": "4ZBJNSRtqwTYHQzYJ6ggL2KVfzXG2QE6Wwe23GztADTsvDiDuk1GJhzHNLfZfmXAUnFunGAM85SiaanSPD7P7N5V",
  "key25": "D1uNopRVgb49G2EmiuSMNSGVLwpRKDB12nc8TnKNownMgvPh9cUtBqjJvC39mRBEUW3j8MtiGrhQBCxP1QVhwT6",
  "key26": "5rk1i6FSsjxTtNEnTZeNztqFQuKvNs1SsdKx2FkwVW2rcM1hQh8YTMYbFFohUSWvwB7wXFUJdBB7c6dtf3VxgCF1",
  "key27": "3CjKhkNhNZ7iPjMRgm7qbur4KAE8HxWt5veoW6RQ9TnRVz4JUZtXsT2Kwn9ha3dceJ857bqPjRWWV3mC4U8hWxGJ",
  "key28": "3YJMgd24ukmbrKhGjVnVLL3PA1YAT1N4BpFAmPC3PuhZwFRjKemUd6v6LBEa1GGrXjCWp87iKmQLbFv4SsrMG5u9",
  "key29": "4agLTrgzeNdmX6jQBZGsqTPZrnW2AR4t9YgcN2bLSMuRFakkGt5ZHqpdpMGSNToxGZCwRyKhZ8dzZMzgFEVwcE5Z",
  "key30": "rFuxjaio2EF7hs759V7DNUsET4KjGsYmwLprrr3mddwgcWQCYdXLZrnYQBC28bAkLVraFoESVVQg15oz7ciLED4",
  "key31": "5CqUQcZrVzascjUbyqouHobEWTZBonDbBJocY5S3uXFJiArA3hgdiJcXeKKQNnXWEb7QKCdErWn1xdDC7svtMpVA",
  "key32": "2xhkX3nukYNYBX3PdpVv7Fnwg185ihBQPxUMCHnbhh2VK2WZz59pSkrgJ1GdXZdES8noLm657MarcgWjRweFmc95",
  "key33": "5gS8xi9BTAuxEBDLqxB4tUeLg2t18KKhtX4TyQTuQdAAa3UeRGBxTEHZswMYpeZsynfjstS8ZhBNpfa1mvxCuH9n",
  "key34": "5zzqotzRVrfotwNP2EiZh97GU345SahLxSnSfUpZtcPRN3bDWZdd6q2qhrZDgWp9ocwjSZ9SYVUGbdPdH5DTfNGX",
  "key35": "3jrvF1Hu6yNvbf5mb57JVxqpUuXnMEKxkWtkzz8Qktwt4msN3VVGqp7uVSPyBYn7zrcTMd2JtRc1ZAAwdkpnDoNS",
  "key36": "2LLaPV8GZyQkxeahDANcQSSHtRacSxKERzjeLbTgCoiFSznW3tSSQ2UdQWab3F8HikBVB9onP4EdvrDL5muZRhWx",
  "key37": "4DyJKXdjAmK94ZZixNM5Tbv84vzVK1D8D3p6ZEc3qbtwG7aKA5x6ivsdRnct1qauvPLhYWNEd1o8i7GNiTg9MvFQ",
  "key38": "4LGFrkcnoHAhzHqkpN5yVGAEMA5UPuNeGtnb8DjAFQNgrF1sPTPn3LNApr9AvkP59JuPRB3vXbJ2H413cSjsLRQP",
  "key39": "3abkrWhUKtxy6mDUmpTzdqx3xNE25eFj58t3bbzDN1iPmkEvS2aRK7fTpLwrRrQe27ex9oJn8voJXQZyKe5VpQsQ",
  "key40": "5CAZ9UKZb3b7439DcCvy4Pkh8aW7eNwjpDiqAJBKQzF7S6Ym2rkUmn4Kfzm6eKdxv9bkRkfjNK9qnBqACsyoBYbY",
  "key41": "28ZkdjVfR8TyB7hkuz9z15LVmKRW2yQqnZJvtG4w6GFGMaFevshNEKgkKiLwm6D1hV9b7AonHYybAa5GEWcCEHQv"
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
