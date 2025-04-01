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
    "5JpJb92vYaJQ8VqkiWQkVmhDynfpAyFdZzpCBCwjFDpVRttzdMddjnm796aB4SdSePad6LcJLcg3Dhp2UnWSNP8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52DcQMaox3skTv6WQxX2x1DEnL8EggLT8QqZD5xEzWm8etL3TgM3SGeyu1eUy7XjGWEyjRKhpnFgGJqF7UgThDBD",
  "key1": "2HgNuBCUxcs5ZbFLfYNRRX16Dsw2SU4f8HmoTQcwH287YmgyVT9242eAPb5capjLPuv6XCyByvcNB8pxK9cxNFWf",
  "key2": "4jPo6BXutfGmookzLhfwCviTWYniT4HLGEdvNnMYtXYYAND91i19Epd7rWvLo2kEUPcVwHrUkQAoes71wb8GDrCU",
  "key3": "2M53Y8mWtSGw9XYi5RPGmJEFRhiRU6WKnMay3aGuMb61JDdTVaudss1MiPy9QaZkJxSCjCnQKotnzw5RVQ6oTFj7",
  "key4": "28RfEh4UhpvsAEDMyDcKTDpyoSDAq36HkkgVvLgoQgGtsxmTgYJVGJHAGWufTcgthnMHsgJmXQYCZu6EVJVmUYxE",
  "key5": "671KriApCPqjzRZTaqQcinowJyHJ49siUhFBNRpQKDuaBLvqnRrcikUxazCiHFMtima6D7UPRnEmUF8GCohJvazD",
  "key6": "5eDEYsUAUcKAYwaxWH4wWtnDEDqi9BuyhanQsYk8piUnx6mJHGu7rae9McsGv7qMT8gi4qCzf3Y8tu7AeWqz839p",
  "key7": "iPhcKufmZVh65DC2GwjnRv8fJmTLewnt3kAgfseDuHdJzHBYfU9njGraKoxctvAAhdsuxvJwZzY8rJuZu7iC3iS",
  "key8": "5jY6G59mFdUTC8xkvVUhN5znRwA6xYcpqYY1VpTKrCURttuRBcNcUkSTZAqb3xMa7Dopepdo1gtzhhScVJFes3mP",
  "key9": "2cx5rnwgRDbLj3eu62Z338WBT8Na1hmw8F2rH57M7fSe5BzaxpsA1Laq3sxuU4S4tyfDiMiWxSVbMmR6deL9mr4i",
  "key10": "5r7jnDp91bHFsyYtSWVBv5iEZX6c4xQodNLvUA2i62Ha8L3BL5DV8cPqFMm9DMGFimxciBB2TJHZRzuAtQLC4Rxf",
  "key11": "DcTpKxMf8wr1zUUuD1ZpaHx9SYkGK5DcqFqLVKKV8RNbUHQNJtmdRqcMANY6dKBLC15RqZaa9A78PZQjpVbF3Y6",
  "key12": "5aQaz6ATVGXfSZZsqXuE3nC5TKrpS4vNJHnPymJMwWgzL9bkH2j8GSEZvoqGcyFkmbNxaJ1NtzuKN4xoQrSLw4tt",
  "key13": "3PnWYnguNf7ZDNnH43n5kVCp3WX85MUGG44xunVxsoUbafuDuM8SV9WJUUAL2GyMGDxGDNq5gSXqMDb5QJ8eTgr9",
  "key14": "5rVqcehvgPYWxXucyoXaJjabcbf2QSaQLKGB3kN7FVLFkRCbmoHz1LQ8KEq3Cov4VKNSzMwC3mE9uQtNUdeVVRYh",
  "key15": "4bwt2x6k16TaRdwqfGEnmygntdAgTH1DjR1wBbJ5hYXhC91J8JUiZMKy6HcPbo6NRWLnhFCA9hZZ7GyBfefARSSs",
  "key16": "5BVphisviegN9gK82LdecQ5fR9UYVWhunYMrs6uEi7cwdkB4MfPZe2ANdYWegUxZKj7w1UB1Sfrr6bAh9PR5Wyie",
  "key17": "VVvg8ev5fvHwfdZRZozYYQ1XRbpya1vJNQLkoEYMwFuYMQi9Rjfu7cFZAv2s74EH37yHrruHR2b2AWHvsFtU9VU",
  "key18": "4P922dvjG3kZuX6gnD9bJpwDYXZQo7j2SrHPwASGpwb73XDHRGpJWZzAWPCmoPhBUGwNzdFCEPSS2qrCr4LRh3Gv",
  "key19": "5VM4crZYMsfPeVqqEezV8LvqXVTQ5RZdcQTFB4LpLvzLfBXBTJbzroDfodnaSrFLPEKiGCor7iAAYwoNzQfX3Csd",
  "key20": "3X7ySfCoCxKxS8xcLcYSp6zsQewcuiwReSLdF2meAQpCwQX9KGKaV3g7k41sdiSfWep21fxa3TGX12RWhNjZXjoD",
  "key21": "31Vh2TR5mmaA2h9pzdGZkSV31cYq73RBgsQJTMp363BwQcibBWxro6x5LF4AGdCDn28oexDfsayhqXzXxsop5Axo",
  "key22": "3dExsNoto24VzRgbbBf322EH8P79VW7A62hLhLVdArqZQadaZnqaCRWHYLzmUD263QQT83R6xUT5v6RvCR6ibLEt",
  "key23": "24PbtFpXkMCgBJxm4sktREZX2LDejvci1kAu6nYjYhq3h7vKr1xsJ3kTonVAaobNukRvUNsD5ZVG5LdiXLyJuSRa",
  "key24": "5yZ9R91FfugTh2HuYPPTPX5PaWg3hGA4H4EnMrdQJf5bSAajYwYGHk5Sz5qx3UiiafFfbdv9BJ64joVdF2AVdYVC",
  "key25": "iRhb5Rw1HE5heHTWUCFPwTgbRuDkpm8c8UBEwDCkhXCJGFhzPZ1Ykm6v21fnXqRxrcCtxcJPcDcwtosVb4pNDHu",
  "key26": "JWqGZAULmExznsYzvYgycSuf9HRc6PL19EDYDQaCK9E12q4RNiSkonMrmAczkgx2ZUoD4tnQoYqnBxGLeBrz2Bv",
  "key27": "4TvNE1SKt7h4fTeA4TAfK59BVMXjsMGQCgWEps74w2HztLSj736etgTnq6Ejsxm2m4WT2W16q24sRxiqYxyrhYCk",
  "key28": "65WoWZBnmLujxm6EV1TNPc9M7AonGfrs8dP4SZ7Uz8c7YmcYfrsoKQSDfZ6iM1QZuu2FA9g5cuqprkiRpb9cueVF",
  "key29": "3LBJNRZ6QqMxBJBr71yUdM6rcBsxe9m8n546wm5fLj7LBfPLvySubX5bH11KLB6yM5LhfRoYAe4ZmeDUi2oiLrfh",
  "key30": "cU1EmMKUEyCXLTKXVrmLhXuANbjXLpM4UW2bztkBqWTnXPg2PBamLCToU264SaUn4Ek7DbdzsaMeBDbRogDANcy",
  "key31": "3SUCpUqSCTmYx6pbSSqWUaoMbJt5SfSdq6Cgkni6ULnJBa7vwy9S3bnwim6xztPwBf9oJxqwdvW9qZFrWyLL8jSi",
  "key32": "3MfyCHAfri7gK8L7CTQYf5BUcbCAYR6WWuLb6Xog3EMnbuU8hgj4T2QE8YSXbYFT1DGH8uMnu7SXw1NzUaHfdUHL",
  "key33": "44Zfua1erQzUDXXCegute6D7D98yXLW3793HHAniJwEqCQh2H4HMMmtRcExd1WE7rkRBGwDHF3dMZ9jEQqAREHcM",
  "key34": "2d4D5jH3R7XNk7JQ5LTzgguKNXHXpMSvpirizAsyNPzYtCjdZ88Y34tTzPojm39vNSwBqMHhakevAJWr8Nzim6CM",
  "key35": "g5tRrHnRmMfTrieU269FbDXQFsC2BmnHFNUZsnwZLPP9crKCe7pRHJgA8BPzWgT8mmfSqLJpYQqPD7w7DU9pNMp",
  "key36": "5jW8TBGByXfNoVSeJuNK8fwm7Ae7a5wKb6SArHnvFdmQ3fW4TpXibV8jNxqFcf7n3WYqyURQcDKWCryVsj9iQex4",
  "key37": "5i9rrqAD5eVZWUMXJq19TJyFPLxZB6GeKREGZUcSq37Ys5b9ZtFA6CEAZJji2Vqq54MTfShu8YvoQP5nHHsJ3Y2o",
  "key38": "2QaochyxhDfFWZBdEkm8cb3hVu2TuKKLXGFGVsnFevjwKcqdF67aJkaGJ4dg5p7kSocKYi9T6LABK1dzrXrEnY3S",
  "key39": "eRLpDaa6Xgt85h632EgkKZh7yYibvXLfvTruM5NdeEimwTCGeiMprEPs1Byzk4ugM9V9DvphvZHFCtwapda93iC",
  "key40": "36YWq6y1LGLwS42bKhUwhnj5U2rioHz3HSTJgmVL6zL9nuqsjP8B5Es96di6NJ9v8jnuCzCu5hzeZ6reEacMh9Uh",
  "key41": "2fayRuyDU9LD2ugBJcHGVPeq4RrKLnhqEyJF8fAvexWuZXFcptwUe3fY8gQbo1MF2yYKeVPWvF6Ss1gqvX81ZHiY",
  "key42": "5ZNduE3osFAzNSVLvLo8p89xJqWfSWyX4DDrMfCmSat8Shomj8mhZLotzDmETH8TzfDqGNo1pYMTf9NWAs9kHM7w",
  "key43": "Q4NqXAYNvMArXeLVFtqQ4LTDHrGikqJvsLgAGu1Du9otBMXnSah1HVF9cA2SbazXY8pFprwCuQPiVNPMT6TRqRt"
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
