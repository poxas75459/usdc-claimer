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
    "5kMqSLYgCkmRjP35SWX3ag7om59DbyJEucGzQhJHnWvbX6rT5gqMHLmrj5uRn2SXKLqCVWFCSoRjX8ncvhzhy8Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5Wa8wCDoqfoXCaF2bcWeeVwaLQUK6e1wSqjtKZgyf8Ct5HSKotJwLxyXwk2Gg2EdrUEBsWty8kDtYy78ju6YjV",
  "key1": "23ewCPiyA9H9v3q762fGrkA7tJJCwuWZua4H67VfrXYpzeE2nAHGEw7Se1RXfkf3aL2JoJZvGn8WYTkjhyPSgWZw",
  "key2": "438MfEFee2ahE7W2mzYmqGXsnvgAPy3chEv7yh5soKz8HXPjhEkDgbYnGgtgXb1f1LBYRBVWqtL25wpDziCHAJse",
  "key3": "5agqopk4Naet1B5hAR6HygU5QrZMp4nXpszUW6HBxDM8SqNUBW7joHS2LrbxmEP9FjGdR77dV22Fd8TX2MLuHAoz",
  "key4": "4PRUgNja1vhofS8vCCqsmDKC5FWhUz2AU2kL1d2xnKti13kp7KDv88jwPfenWtvmT81Sy7ATpq1XwoGzcAvpXjFz",
  "key5": "2R19bcZjrAiQEf6rHgjoMrSBQGjWQ8LEC9BKEL9JAXz62mmYZxrQGBvdPDVF2ARocxerE6WBa5wW12xXuxLPAcVt",
  "key6": "46Rdh8FfSRAwzrJEbnQ8GB4MLSYZiPcZfe9HpxQsWuZaYZ3vQ8shyNaSxqkZmpHEoWiZNFsukqTvUiW8RswagB1a",
  "key7": "65PLqKs4TqVcNqXi23t7t8ysfxJXkaL4iE7uf1Vy7TY8a2n3DuWcG9G2f5ajDqAG2UhHHYiZeA2SQMoPQgb4yNW4",
  "key8": "3sJqQ8jcqq1mBkbnd9tLAkemjX4toLhzNUv2yEGxWK6xRKy5XRisqQ44bs3Bt4cRZhrEc7b576ePJF6uqw82AnPC",
  "key9": "sZGZH1SR3ryf8kh159m6ypawSETWSsqWQ82vNe6c3rDkNGPoinNiksbbMRzkaE1gh9AVB5yLKUnsT84GBhrHcvU",
  "key10": "4T9VJQtohHTXfnEegz3mLX9V3SmTLrKz32ZTBEvtvcC1g8K1WB1uZ9v8AM8QyZRMVPiFSuwqE2YwwJcQYBEPSAad",
  "key11": "5xXg5Qt8UBLDXhgwScqjA4ugh34rr9q5rqyWm9WXfB1rts5xtzbJNh2Hv1tMTgEUT9quKHJjn3Ed3m5aRB7q9D2m",
  "key12": "2UQWioXukDYWpo19Gyn8PiqYrdVmHYBYcqEfFAkaeHJLofkbQLmRvKdAYsST1D3K3qHouuT3GYYF6Rv1RQ3DxJzQ",
  "key13": "2J6e7cc3SzHoNLtBZThhW2ARFYXANeN3WaPwjUeQFeJRw4nKdXn8KSMAxEtSsSRcm2hCnYeoZVMZ1rgw51uukYRL",
  "key14": "4NRxyBdRDC6euuBydApyzBpQhMc1Fdq75n33YsDcgFHY7qgvbmaqiE7Jj3wDB9RxtTuJ8Uw4gPB7eFKdE5bp47aU",
  "key15": "PwoC2zjySDYLsr4ncERnKZZiz3ezA7zuKQJZF4dXd1aC2zUN7zjp7Lk87RdnySkH9dzzUqLjDpqHYe8v69QkZw9",
  "key16": "3tkhy7Z6AxPfxhn3ovA8Bk2HkYn2tr3QfBaamdmbAJSuBVo7RSaKorxJhKCywpdzwmKp7dE57HY3NYpDyYqB4m9E",
  "key17": "4jFSR9tZRZuBJyS2AQ659LJhhM1cQSXHyKo7Uv6AoPNbo1if3DvKAyDpeT4vzPzB4gaYfcnP2riiruRpCezu34o5",
  "key18": "5A8AKXJw6yk8A6F51Bgasv4rDzxqGwXbdVJFYAiTBtkYuYQmR1cQPbq8NQPxYFYGWvkyyG2xnCJPnQ1rm4tMyybT",
  "key19": "351jKA3uHJBJ7iJioYyE2X5X4x8RQ47EsHrpSu61uXvv1DDaUNUMHykvV85VH636bERnVJLJv78P6nLWDQDoZtyg",
  "key20": "3mqDgXVpR4GhXzipy7QFCqyXPp64ofHvbEn43dYP3TLZEnfcapcriQbfWzLBmKjRBX7oA3KSCBjtBqwN2bqiScGq",
  "key21": "5ULuhEMbGqNTZw4S1nvSmiBqHg4fu4taJS3x3xKRFJgorz2b8J63DGMbNQe41tznGEF5F4yxRA8fEmpi1jB4Vq29",
  "key22": "5vBLvUs8SU1PiYNjT3ztweCAL9xXtudRsRAwHr13qyA2qSCou96HeDwpTvZQG7kgQiobS5N4a6UWnxArey7uABSV",
  "key23": "26HwyAEvq19gf8KicgwtYwM3g95vHUqxp79RQogevKrrhBNaxVsHFTAqQvcWJBYYvxFY838HtxwQvSdQrxLKMMw1",
  "key24": "2ySZ3AiUzj7M6hyjigaziAippNAeCNGmMyK3Kk96puiv4f8dksuMHMxiuFXYig5N9ad1zzdiz6aryU2LPUyk7MCZ",
  "key25": "3G8aueUeapyyHSnLx7NNoZYpk5JEvsXjod33X6em2So8eiKHXayKbXsLjZXVhtg92kHir3Rjd7QBZmgwJhGpWHqo",
  "key26": "2aHNJHUwTut4ydq9iNHEFKD71RD5TDxYpdGoKC4FxmjBG6m5nYrpRm1YKJH399a8E9eWyu4FTvQhyDhXXRRLdYgF",
  "key27": "5VuSZJutDhBWhfkw8BRpgmtPj7KMw2471aXshk1sXjEwS16VBLfBW8ZhnnKs9Pv5vb3Yo96FEQDMFboz7ukkvdNH",
  "key28": "zKwrALJFDuox7JFS6iTeXiqdHutvz1yBun2iazphAihPjGzoHnZg4xA9HVnzA3qWroSBT9NqHW7j35gR5fiYqXE",
  "key29": "3b4b2a11YtQXKmpxHHkqCdEMCWjZNDsiKNgpfuWFJXaxf1k8x7uFBXrn8y8Ze76b67n4nhp8hRP43Snfc7CV4SA1",
  "key30": "5jVTMky1SNRJ6WeFLA4VNyUu8FfFcQLc4Nm2jjigxm8CskuLDC8Z6Z9BEudogc78cQsfMGq6CjEUuMF46h47sNTk",
  "key31": "3jjePiaYJryQqAseLbiH1xhet77zgkdkvw4cjHRhQ4rCuuUAJa3VHFMobUfbsjHH9hXwWGSB5ZKXwch5nZUJ5Pga",
  "key32": "3J8Y1HjPzPScD3cn2hq4sVnBAK4LovXTXTAiBQZDaNri5pgNyZRczWpKNr2BZvf6Dz2LssCgEQ6h1QLGjpMiTHhy"
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
