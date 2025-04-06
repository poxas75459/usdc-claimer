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
    "SsPuUQkfaECRD5wzn7VSHFZUswsy85VQcYUyQ2iYjcyX9FMa4Bet5pM7MumHx93uJtyoJJDRVytHiENBgWCrnyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVttDUcfN8oYSWYPxXooxAJifzN1B1rpT8UFxXSBb7xdtjryM6qDafxSdbVepGiVeRALKsAzkX9FMvBtSizxS8s",
  "key1": "2Cwn6uNWPop3BMHvB5J5vKNiRwWT4GQHL1rHboAXp8PEgRYdMbAXRoMHQpXaxLT1R84DcaYPnaurawy35f86hN7s",
  "key2": "jK4K3LWH7JsA4BXwdgTcqyWYnurnGGQzvGjQK6Mar75VdG8SDhzjrdf41zs6cuFwMxpMEzPYZPiZH1cwP7XswYS",
  "key3": "5WBh2BfD7RjkTjTgoY5MfJJYsW4B7yiKMkdqXegKrCjGXz5zoH1jCBGWK4fFMJ3g7cYVLuBQJDGf1nEuw9atQzod",
  "key4": "qWpQotrLpT1edjwfy27JWeUMZYRziFRzLJxLWHBkrBTcAtJtLz1ZAYYW9tqE9ZBAb41sNpqYQeBGXxiULCBDrwL",
  "key5": "4kHukRmxFLWspLHLfcmJgyfqtSkGUDDoFuWSyt9qeEBnGkensEuhEnHp4eyau6VL8rEa9zXxtApjUxZpdt5v9FGh",
  "key6": "2Bd2u8jqTFzXPC8nAS65QfkqpwVdEJDaNxAdnqjm3UFzkqSry5CtzD45HHXdE6Fq1cBh8H95BndZXZ6VctXW9MKD",
  "key7": "5m3uSeFeU2hFu4FdebWf3tuoprZ5S3PNJT5tNyX4D4MYeC85rkpssN66VEJRqCvy88jFRs4Qgo2ia45RrvdjvVKT",
  "key8": "2yvfRYNTkATeTBfnGWymWgeWJXiFZwRdymuCx5DqFbaJehW6cYbyhBfUNiXRPzWbie9NiZg4J37FQLfQ7oZA6BZe",
  "key9": "3JeqdxHtRsBGhYvamMKcQvACPQwXsFzwUr2nwAJuF8hZTh3ZwKQXdcACx62W85439xbhqJBZm5cd9h6gEWBjXGtZ",
  "key10": "3qxziVCkZv9eK6P6eST1uGtkukKV3LdfauAWAv1L71mBNmCSXnUKUnziUp7PyuASnZk4MaSzXUxJhAbDWdDzbdri",
  "key11": "3QhRDgc9YhqJuKR11XvwtD5PfqGLBediyYkf9Z5wXnjbJ3o3GJQ8Rkmo7HtiMbBZxN4n2UiXFceuY99XVRTbYt7a",
  "key12": "2kuL9f7dv6zaKMb5EsADTQpraxJDz6PMTdJp9FQbZyNWjUNGD5y9oHDPvjo13c4bNhibKjfNW35h6VS4ZUpuAmVJ",
  "key13": "3DCTJPsSGfntDmDeoMGKKM6frZWWk7KQpfxqkVLrBLE5QfYUWRHrvjizk9HaDBGxxq6MwKaaHyTCP4WMALWLabGK",
  "key14": "vJwakJKpUnjPg9svXsr3ywHbroKyBjdKvuCZ7dmdvuALnV4GR42GcEyjVJmpX7YDTYoJMLgYAj85Mp7yThnQ9ug",
  "key15": "5DutPeGQdJyvRJTVemjetsWNE7wpqQJ1zHXw8ZmvFvWKAyoZyKv3jhfUmbZasASf69hLqf3SXh74Nav2bNr6ese5",
  "key16": "4eSuQxs4tvZnN6gqVRGTR2PFSWeh9sKhdvJU55bbdxqMqJNfxfVAUA6E9wmLCA2A5FmaSMcPNrfA8zJMfG9mGkA8",
  "key17": "3UpcpnA54EbWu5DtXuP3ij2AxvYXAkptwN5kzRWqjcPfWK42N4hi7TYtMGj8s8r5E7PDEgE4LBcaR3WiWup4d2y6",
  "key18": "3EwpkcJJSkT5XkyAuY1WM3bR5yEeiRLZFLdounaG1yB7e8H6h5CfzYyExJ8oX6Zcfz2zn7ww2p3GYQPqzWN5KwHt",
  "key19": "SrCMmmFLtp7vKJUZNQYCwCYCnejknJBcUkUtnZtyGhY5bnXdnkKjNaeqoaKWCKFPErQyFUcBEVvBvEPNiU8kgex",
  "key20": "4dDrEYHKnUSGkRSTrcqaeqt2oo4j6yDtiF2M9xig7ufhaP8ouKAGUccKBaYNN82SJLxnGhornrr4Aptnz3mSjh3k",
  "key21": "5V887CtQFm48vN7AHHjZib1gGKAaUoUdWNRCgnFTs9FYwbGmzb19pSaguv2Y2TKyUkPUzfiiiwLRTrdhKPuzSKpU",
  "key22": "4AFSnToryrP9XbpcNXGtnBbdCEKQNFdBnuNFBWoUcCPp4cS8wB3GMTgBunfxRhDMcTw7FU6fw5isFhoMxAcChZjN",
  "key23": "2r55WqzzPYUMdKSr7HkLGTcVNjP47jaJFfq5Gqa8Cz59XJu9RScEbiwoNqapACZ4MeofWbhQCFH7smmhTtt3uAqJ",
  "key24": "355uLy2kw5bf1mma4DFPMGQsGdnsSMJMrULa7HnyAqioAnXLCzsjBrYpCNzomQc2kGaDsRjfBobt8rgf5Pttqo1g",
  "key25": "cWnvvNhSuxomDQrV6byEznEdR2MLvAWfyrESVLLbTffdkL2TD9ryHMSHcVfZmnroJ5KM9UTn39z8mxhqgZrqpkE",
  "key26": "37kpBeWHhAhbVQ8KDPpMCc2knRvSBH6c7aSNnhv5JtJruH2mn9bWiZviYCxVRgdqXArxEMZdLRTVh826Zgyok49n",
  "key27": "5Kwe3rH9tHyeLrmA66R6ErqzQsxS1x6sRhT7MgTtFDYzXKLDetxoDggMQFTUSDwGYNnyXPEDCYMKtYpbAn1b3e6E",
  "key28": "zvXupELnQ2BqU2NDB4nki4SGHX6oaoFNxJnF8MrnAqWSoLBXFoxuhyBW1zf81b6cuHRMwmnExq7UTJ4LsSQmJHW",
  "key29": "5ZLrJkgwiYKPAabikhgecjguLVxr3YZvLpeiv5BR6nbjZJSaFvzEYWmjDanfe1tG4DYu83iHtYBBojkNQ5QFFt79",
  "key30": "52gQJgBKp1oNqnTHi8caxjdYPdAFPRBdhX8wSusQVc2AsCz1ZgGJepSfNgN6CZqw8DZEymT6p723ZrXsz4aqhJwq",
  "key31": "24zMorSKHjCPvoax1PM7LemUD8BHwFZYM6CVyFvMGR6DUUcNBLu4zSgb71fakXofyj5GmHWXUsaPLJYibe4BULim",
  "key32": "5F1DZMmmPBRPk1Sh9joxb8sp2GKkLx1dMyQziiGLJjbmD1ARJE8k9RqySPoZ9M8nizBEyxqNfrBfaewowc6kBaQD"
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
