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
    "eX2fVPaJjp3435UkZNaUnWuppWFLTSDde8fvZT22zfr7WFKAdiV9UE7sGReqTsp4w2epuHqbn8cHNF8qDoAycMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJjbdQn4Se4zrCJcqdRkWmXsbTnqs4AQLMSP5JyeuMKaHGF3U9cwahyyGV7cGqYEu9L6bDr6t9s1qnUkqUBydLS",
  "key1": "5DRH4Pw6g44uBhrMq14vHeJvbSbHrNxhbhEumFFLY6BEmi6YFCU7VBf2PaghXRXLiNfpTMquNmdiVgovnwvWuP26",
  "key2": "3Rz8eoEmE4ec6U4LZgNPKP5oJXvo4hzUcSRuRDxJcfBptVJXV1UEtxaqLWVYXaUDV1T14QzfDzRaLG9ZLNtrh4ex",
  "key3": "Eep6DBtnRDyaJdLiPbvpQAzFkU3EHCJZjr86sDC2SF2eTmQT9iD55oZ1pAJb9RK71UnbXjzupCg7uEKrxBWVYDT",
  "key4": "5rq8mpYU2jeN3XGhy8KtF2hT97GmtayCGU7JRTrMc5XPxCMc3ZHgbm1HYnSK28bpvwGWH6CWdNS2betASp953MWH",
  "key5": "4zCAbzFicPbT9SgjTKhrU2fAPnmSnEhJG9yNxp8nsUeXZCZAUEfoMMhVgPVGQy98EFAYqMHUwSoNMZv7nrZgp4X5",
  "key6": "uY41jF3Dwj3CJ1cHaQBpBAq5z9jXeh2iMPVLFpDZMWSbSwDqgXwL7LoJd1CCd5cbPHFG5AWNHQk7ddcgR3wPFd7",
  "key7": "4dpuwkwaVx3bu9Acv772QWw8vk5jJ9HjdenKMjitT2QN44GS9fFHB97SK3c382xDQ1Wss1KSjWMXvA94B9JWPxhR",
  "key8": "5oro1MjeFmaMWEnwStG46AjiCTgpsQoaDwcpFccx8d243N3qCaFdhbNdiLHuUZ3efKipaJXJhg93k68ggc9AFvbR",
  "key9": "3vVNHYS5QdLur13gcLhjUkURWJjSmYVfgHbZ3z25jw4MVZ62r3jANBJqm2KFiEQr7oEbmFk7zZGzRB7mMoyasHQV",
  "key10": "8s2JDwgp7NrzRhCXn1DroqAgmNffDq8dm7pPia48oeWJhbJ53rxxtUGXyqyrtR6RqRkEjpQjuxhGtw1BssUYkNh",
  "key11": "29yCW4re3ZXqKxmb5K7KtJKEEF2nZQKd8RPMYqsngbk3pxeNgfAWjsCFUy1Ln85Kg79HmnKDhNp1gTH6PiZ78DLJ",
  "key12": "4UaFyBYgGx2UQiRhJfyffE2Uj9aU83Km2oWUAGHZiYFZ4sRbKy5SQm2hSFxXCHRgq8B9HRm2mwVsBUqZrQhmBKQP",
  "key13": "5XUGmpWH496H5hBam9PuWZrMv7wkpsojVznpjDjGsxrMkpRYqoVsYKoNB8SgoJgQP6WEdk5uFUVWdRCm2arwn3cY",
  "key14": "5dKN3oy6V4vSarC1e9hKBAfpuj4J9Htgn7dEvBJwfDgZVK3GoTrHr2cnFQhSKRFP32PUnai8qqb9LHAnKSZfujMy",
  "key15": "4fkcnu3motFonL5hXs2eWrTDvUjopzZRwVe99aohNtoFnkfK1hoNWS11H8HuEVZ28Nobky2LJsgY7WwiXGmnZ7w9",
  "key16": "2FscKbvB9k3wzuxknzMuyek8ozdynSXPVibd9tTgJNZqEVHguJ14LMALfHveJ3jP4tNfW9f1oJULaoZ4Yt8aZtp9",
  "key17": "3czUJDXShfxdqKuZDquSSygtY4jKUQf7YNUSpmejxB3yks5NP4bNYcesWp8zGthMo6WMJY3zRWPLSLV8vVuUM67H",
  "key18": "5BWLrHo8JBpoTVhTJRaHn38eqGQhTbcJr5dXB9eLsKqW7Zo51cAbiqi7eh22PwKJDpM9jdHUovLr93Kn9p3TUrkB",
  "key19": "2L2ekTrbwFGg6oWptuXwqtMYgWbSSnWasUdtuofeiNvH4ckQHWoiJg11jkCKr41A3FKYkZoEnnTKMUK83EmoFpGt",
  "key20": "37eMRL7m2vjSRGGTBXw7pYTJxLq8TvkwLf6B77WcKhPtdpxkwahC9SaDjEBmRwXganPotUExqUxZKvtmMEPWfMCV",
  "key21": "C9kT9JqZC55z5ocNZQVoF1ETr8c8mhS55VdFTrpo34bag51BmQAL2AXYD6hmXgB2dBuYEHdyL6mbFLrQuj2aVfE",
  "key22": "5diKY2GRut4rhT76MWabHNvZP5SLt3ep4ZMtGGupBNYQHPvDqZUJeFPhw41XCRqJnxGYa6quKWdMTJxVFanb71bL",
  "key23": "67fikePV1r6RF4H4kB3cAgPEHHEo9z2gPS7i4KZHi8FrUihHGxHUD4TCmtQJMJGJpzoLjRp1evYSddHKZAscH9qZ",
  "key24": "47qkgXg5yb5P2a4ZyKqwcdGsPjaEUQ4f3CNnqvwD4xTHzXXqonA53ojgxgz4tNmpneGodhUv1SRBLoHZ3wbTE95E",
  "key25": "3UtWczD7Z2GAevzCypoD7J5L5h1sttCuVPFwovPjF25P9zTHR2QLHKxGHzHpXRN6MdT2mEHs3W8mnunn8fdx3Aud",
  "key26": "iwcsooHNJw9qg83E9xwwbMymyJwKr26YuhHvf4pUfKLgzRjTyH6NyxgQcNw2gUVWFhga53fFE83gdf4UWdxT42e",
  "key27": "1TqLoVjxAcuwWo3Wzj5TX1v49fDwx3hXoJG6TfVWezJxExaC3ErhQHHDy8RoHnb33W9PzEYyW8vZtftS7spBa4P",
  "key28": "2U1rVcSfvYH2oSwAFZSgzWTKzNv4BH1dafVy4SEuKjFPyizHbvQUgwSw9PRNnciBg4wi9N88gGauD8nmib2282R2",
  "key29": "5RhEUJw5bZqCWRztZ28FrFtyz87ahAeBwDjYkdt8dgfNmev38c268CkbjHWGeKfwZN6jt6uwqcHqSxmxrjUeLkLG",
  "key30": "3AasiPs91G1jaMona8rjs3WF6NqjnTbKPtxUL2utxqh1fgkDcV6axDEjn1RirF4fvyFdBtRqLhgzbFyHGwBDYuMQ",
  "key31": "46VGcaPct8R2WXhLD2Keyytn1gbA7Juc13t5h34LR3sFkBTCrTqVgW2JimjzDMi7k8VjdZjCHM7Hyce8EEetPvBR",
  "key32": "3hVV71N7KEtX6TedXSGWUZE1mTQE7Qx9u3EaAzazSFqCgn5m36EuXqvX38krwzg4iLs87WZq4dNMAopQ2uZRRjqX",
  "key33": "2NvxUbsRvRoNERs6hEApRk4UvEGqDxwpvsPhEUmNqr4qGLBfJoLsmLhRF3qqZZodXB84bcSDRDHRVEtrfTZrzsAd",
  "key34": "88F7ihxgrNavssCoerVc3d1Y1LtU7jgDh2qM13xt4nSb3AHBhqg3GKaT5wQZkWQ8PLocUr4fqhkuX9rAnUW5BMA",
  "key35": "3GfXfJEY8HBAbwufymAAUSasAzy8KF8eYoz54RE6HJPL2V9Ff1oN3419VASKaFRZ5T1Qrbgqyb3nZGhBttDBWTh8",
  "key36": "49hgjid9jF8dw2UoJQ6PDcGtoUCp7th2kFMvG4UKZGSLaXkbJ5YNTw7Ws3m3xFN7Hz8XCWEdfb4MHYEr9648iQi5"
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
