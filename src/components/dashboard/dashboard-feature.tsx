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
    "5tVYYoN84GtBTTgxe8RMKMGHEjrGy7k2s955MnMapvvvzs113PZBd9PtPxN4Tds7UnfUQRmUQWHYW8xd7a1Qqh9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N7Qszn6xAePyrpqYcdUnjFNasua6R8qajTXjtsZMcrkvFnaCwsQeuKYdY6GPk8cqjaTnubY4h2KinxtX5cEyw3E",
  "key1": "49tj7kA78uHtqFR461XNR6FtE82hA8mWoCFEWX2KhH6M9tCwCteFKkZRYwPVGAE414oN9hnBMGH9MX4KpdFQbkj4",
  "key2": "3DzHef2ZY83Jf2TgnWyCFUf28Q8J2zkiMjLAs6Bk585BMLuHjbQNY5zq2wFZpptpsuA94z2bpCyoNo7HWeSPMTWQ",
  "key3": "WDBfYazqwZYcF36SJo6hGqNRZwWaTJb1MrrkGo2YRtpVsD8ApStxVAjYqtCUy5XNqebkvuev61kt8qix2FJRkEP",
  "key4": "4dzxKgjh8XdT5t7H4YgX4k3jMNWdCJVBqQZQN8tRsQe7nUUZDkEtVbtKC1bJ74qJKm9uqjrUviYozaLbT4cX3ouf",
  "key5": "37k9pNtgzjLu8TFDFXPkVaunqhDqYcjuNMTmLDSmkcxEfHx2TvbX6H6nQz4VAzDzkj9p8fuz1aQaLNYiuH445rjZ",
  "key6": "4GqREJhRgwPnBRCzuLbXLmWmVLtbYFdMC6NR7JotFE9GbLBQSqepptHj3TdLwRJJLgCyuBAiSL3naqPqLP49KGQy",
  "key7": "4YfU7pA3MNcewv7u5FWTJAxgSoDELjRJXJGqEwq3BmXoSFDbnjLcbbFcqCTyJGiUA5bRTxwNv2ajyjzCWdCXhWci",
  "key8": "3wJu9LBt4fHn2Y88gKrAyGGuW13dDziLhcW5Tf9nqKu41Pari9szzvnq1qKvt27TqJug5KohZftbJwbGyuB7cqeq",
  "key9": "2XeeYjZ6dEhWZt8LU6sHKT69GFkwZtdiX1DpFpRowSFR95JXDR2dm7hDyGqji44qXWLWUDBdzCDPiwuimtHR2E4C",
  "key10": "3GdfB347xZbt413DrSsaw378feo16HciwC3W5mk8YVCCejcZTewwmpTfH7iYDrkV5h8jVXmTeZEmb3Asa7vNVCu4",
  "key11": "3W9fAdUDuzW2vaCw7XjZitiwBJd9negJ95WNGWWNXebixtT5Ghfj82nresDQ4sptFGkryNX7A433jrwLzD9c4uBV",
  "key12": "38EypZwExyFjRXgi2LaT4sRKwUFrJ5JHbrWgDDcrHYXmnZmHSG3bJfPCSDGPwKB6cpziBjNhY74QQ4mbCrfc49Jq",
  "key13": "3HJdLi8TX7gr4J8jvmWZrQFAM6tcCZwdxdoe5NQ1C8xQ5wUSZ323BscuwzybQ8CoV7j1YRwcb9ye74LfQEJga5Ro",
  "key14": "2sZWE3PJYDjc6okThz1SLGCdoYTftBoNmBXTTTLs9WL3vWgtTA1TBNN3TgH7f4o5wyY9YYafHwqDoZE5PGtjGLxt",
  "key15": "66Ei9YJdGAirYHtvKNjGyDhodVTC7hHn2qv8V2jTWK1qUDfWjDZ7zS8fFkSiTWckyMwkQDBTNRjNUXoaNEiAzHeg",
  "key16": "4ToedcKiaqgyvFfdpBT5ahNNjUi5R6fZVhzXx3kSxsDDNvspfJkGPiRCcZsSZWyrwyHqrEKC9t43tkAGbJjoEg1H",
  "key17": "656xaFdex7JzFzk1cZDpA5cUk2Kd68Z2wbrWrNSam5TgAh9GKEgzKUZ1pYtPJWxqTtzs7b3SGKt7oS973tpZ3Py1",
  "key18": "rSw1eLwGAAoPBxB8LqvPfL2iKpy8rsR9VC9xCVTmDB6uCK7MDHFE88wfzu7fvh2wj3K86oUi2fWM2Pi1dg5MTFk",
  "key19": "2witHyt9x4vtoKbwKwYSovzsbHNzBkPAwZEdQqGWU7aQhGiJx8Ny7Uy1eDsB9PmtvVJJ1u699vMQwkFQvFbegDGK",
  "key20": "2ycy4tkp5hKx1oH4reKMsrdpFKFFJn7tnQt2VN5Q5XYhzwyQTyQR3zaQmHpdorwXR5Js61GbVyLLmxUyiziAtgmf",
  "key21": "2GuwrpN7JrrbwSDyNbQSfbw5qLtANkD3GSgVLLe5MhWDZZhBHMV3Kh6oK1DHvJLs4xc8qHW3Rt8Z8NfFunn81Mnm",
  "key22": "48djayu9xYijk3jJexmhpi7WJrVkc6xp9jxsqFc6WXPdX7yQGZwjQZTVsnMfXcKw4mPK2BYLB3WRH6Kz5p6m2pE8",
  "key23": "2vrbLXjwiyuVj7ftLVCdFMPL5WyFan6WAuttCijwqvWX259osbAVQmtQzPUsP5Z7hYCX1hPniJtL6hvwp5k6AcVS",
  "key24": "2iUArKABpcgXaPVMwYVGPGTm24dzUAP7Rs6LC3a144dbG3SuhpGxjZJLCP6YJEskRzWMtxAPnaqymvFi61fbH6s4",
  "key25": "2uzsb3q8Fo7oednnkUj8MjjFsoTLQfnApwKQAEpzcz1kW3MdyGeuTGz6qGxKKhQrSEUYMrrj3Ezy7m3jeMmVdBP8",
  "key26": "268wKDC8QbbENcnwBgCFRX349UbhTkSeM9Tb2sB7Rgqnns7ArsUiyNKh5kxpXW9n2xCgpV365QAWdn9dp53neptt",
  "key27": "af73wcpKH2nbBm8jJr7SVTbiQURP4gWdnmZ5yvGKZk19yWKfPY1hUHo7bDEkiuzVHLkCQwhiFdr9RrUKVNc5Q6Y",
  "key28": "5eVCWXMcVHTSPtMSyEfzxa8RAdHL1P2RArz2oqVCDcVw9PBdUuechamkXLJsPaEfo5Y8bR3CreXjDmSw2bnNsXSy",
  "key29": "4T75B2R7bmbWiqeWtiKZhfs78xj6U2wyDQ8wUSrUg5W2cTGvrXL39oJSsrAgQKtLdJSMsjjfYGm79nRqDPixcvyF",
  "key30": "4pdhF4XxRVY4MjB3jFFJer182mX8RFzjXgoDnHj2LEcUXbpXcoTY1UT4pwovRVWcq1wQnQDBYzWywHQBNyerHntE",
  "key31": "4SsqXYzVHEvkvp2G1t74MxoDJWu2SbCLp8n9UMp9GG83nqMeJQ1G1kcoCU4Y6tXTgPVNZs4MG5GKKgjzeTXZZNyC",
  "key32": "25eMfk1TD3zSxzKTfffRHXcwfJmxqenNMVnvpBMF1m64bWbn5TAzShgJjVacwcBvavzVwf534429YieooP5Fs1v2",
  "key33": "5nHXK4JLosWKTLwFcCE8PfynLPYadeWr2Zot2ACdHPqDGY9AyFREDAHehERPk9QkobxWSvLpAgprMdJczzcfoPDm",
  "key34": "5JriVNVDJ7Nccnd97G12LcaNXi5Q5LgdsQ2RLNHEVLGTiGKXAftakUViFCoPwLrkayHzzVqLnoSEKH3fKnXqb6sD",
  "key35": "3QBqxMen6DVwgya4vC6iNJNWV1Z3obya8P3tBjEjruQcDXdTcGRUunyNCKwaZsKKxjn8P8S7pfKEWXVEoMftvbrV",
  "key36": "3Co73vtnbiHvrX9TanmH4vEChJVjpDFdVDGMZ67TxMuek9Rkj444ubLwzo5YhbvPjZ91pKrJmmDW4w4qLKH662yM",
  "key37": "28Li3UPqf9MfAn3NKoEwdtw5AJr8JuREe2iV4TQKmSx7TggKYmgChePHVwURXpGah3dNB2pZGRZ2xK3CtnQCeMtK",
  "key38": "2ghghHKhdkjbcRPUuhdtDhcPtdnoKTjLZZEWrNd6PVZYWojJFmNnjkEQBb2vzFBstoAEEqcxQr1EMQZEbwxJj788",
  "key39": "rcS43RR1JD6vCJcezJfFGzSPmmbikizfwtYDCmXr9h43HgKrzdugEvUwvzfWHYM7VVRkRfDRuYbXjyFexXufvKh",
  "key40": "5Hy111s3FHBUSXmBYGCsRhEAxqtHabv6MW5caVFxDukAC3ekF74241YwZ2dxddpcL7yhdwV3jDco9Uh4fCn43VCv",
  "key41": "3C7pxVwomPATuKdqgLP9fZiWugnQMLQLT9t4GzVsm4oQ5vKP9ytwVhBxfwAawjHYgMTNnVuXUSiux5UKwkxVkfUa"
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
