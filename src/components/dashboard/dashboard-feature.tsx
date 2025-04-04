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
    "gAu6aEqFATYEgD3TPZTZ3oSfMW8f6RE4t8C4QCMRNjqPmmQEUdMkoyF4LJiD5Kpm6hL8DyquPhaZaZr3wZsvGy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eeo6KSHmPDKdij81gKFMa2ux1kzZ1CxmfE6WPjKx5CKxWSQSr3RTV8sme9Lzpmmd2fMwnkxitsSvBdXbVDZFWxF",
  "key1": "42QUVESUA5uKMtBDqe7J5PFFm9QFViDtZpxNqS81uLQdx1kQfZeUsZyS3gx6Q6vooCHsvRCH8ndeQuZNWYM8pgcX",
  "key2": "3Q8mGjFwTRoR54kzJ4VVx5LBttFJQvgJtNowCo3SVNJ9WtKeyhCnPYATA7R2CtT53FN9y8UDfYurQ6tbM5AwyN4Q",
  "key3": "YoPrsH5TzThJTQ8ji3nfXUg7VZEuXYiURK3Lrb1tUDNsgiJwF5ZGSWMLxf9AMdiPqCMWqAqFC2BReFnY3s4vj8M",
  "key4": "5rxYwiBtt2yW4qn9UeerHyhUSKiRc5su4nyg7GQGQRYoHQBCXnCYE3p198cXDtF5XHdY4KdoPRETxsDCMgUMbAMj",
  "key5": "QxAaGQv5gnMAbTsesg5aqonw4HiQzZyRrNBxUDWXYpVzbWp7VMqnej71kevyyxCnu4Hg24LWPuSbA8LNzJLwTy9",
  "key6": "4YARq3gJF5rwMgUH779nyjDWeo6hAASz87iPDwcaXqQjeEit1wSF5VDjWJhzo6M69ve1gnNmZcTC8RopCSRXZ1Gy",
  "key7": "gXXJwHG1YAe9fLhwwuUf9HGGtu9dEkHFQvmUoUvtVbnkh6E4bLbeUtmmnatUy3QC3zivho69x2PvMoF9c1zU89L",
  "key8": "2KKMxSR3dbA2pW5CLmYaPQTcRqQrbevJKs4RzHwwhmG6QpvDUfZrdFwDWhHmSHqFD2FP26RhPjpjbynYUw88Mpmk",
  "key9": "5PnaP5XExGJ1t6ytZzWgVhN6Xq3fzDkWY39byGj4PYhXcHopauhzFp8KPwJg6QiXPnC17p3bFdCvEvNYcJnLyrMs",
  "key10": "59sLvDd8RuTtoteMgjoTC217dB1hD3541g5ECVpSDMRfrbNecVR2kfjWPDugXKt83kE4zVw5m2jbqQQrcxHEMR9A",
  "key11": "4iL6bfpgskr2ivc1va918tabb1svhHSKkTQLjvtuXvuGFqfsifBXwCqqcGoM4ivDLC1JMAKkoQ2Fg1HiSgv1oJpa",
  "key12": "3AJdDjaTUWagBGEiWnFwTSSXcTvVVuJQBZKWxAcxypRgxPhzyidFn23sb66NWq7WeQWEMWR3qvgRjZFr8i4m5FTV",
  "key13": "5yacxzTd94NWyAwzt9o67ZKQq6LC7Jn78W5HVm2Emy4fYhfrjarVPsvqprEF3czTrVUtJbLd5bu1CW9qdKWQqEQ3",
  "key14": "onBgjGv1i7ZMLmDW5p7G2APPeRvQbKKdqvTiNfdXRrWMcnbjsKhdHUXzxnd3xyLi2n44fDadiyqrvpZHNpCyGFM",
  "key15": "4NtUp71aV1am9t34rpWnDbMLC7ehqiFJtFSBCJ5cGNnqdZNrHKER7iU13yqgTa7DYp9PTDA47Jv2dumJJZRsQCEA",
  "key16": "fEbfF116oxrbFpKYe9g2YVT5cqhzWpeVgQfr4TB48BGjQRifLDPpDJ4hwHe2EikFRBoq57z7Wjbff7tCwHMSz4D",
  "key17": "5XrfWBWx7rDLh7hGwSWLnRddWFEPUyxq92AJLAVdDeJH3B4fetwECPvZphPTv6dydJicZeGQkgCMcYKA1M92aduK",
  "key18": "4ajct5kYZkJpcaDHDVTeXWEKmnwRWCHTNsgi3BU71oKtKrXSdXzxGDNFStPmkCBMGFp3N5dMDWvtPqy71ntuDSAS",
  "key19": "3Ufypk7UoEymvqbAUYUUef1o9RtoRWBQefsoU8T39gCz7GWJJcjtgAKZERFVwUF5TGyW4D5En5kxk5ctM52KiLzJ",
  "key20": "4QfnzZP7KP9Uc5ps4YCNpadnUxxqWwEVaSJyU36HFxKe8xH9L6u84eMqyA1xuEWY7urjtZ7oYoRmkmomuGvbqBxR",
  "key21": "45L4yURVkYootyv9vmhLUqjBgb7bNdUpJzBpLatyi1tzEVXU3mEADP2aNmEPQfK64iCrNp9eEiPnsu6sATUbBkEE",
  "key22": "4TKyETQ2stsm9BAFKhSoLMNYpPpngWPmccYEjGjC4D6C5QYDDXDEfQBVThkMrwDP5M9T7u7m7TZXLxc6ainRD2jT",
  "key23": "2XU8daLJE7eQnsNxToCvUKNCQZtH5SfzZttJZrGRZ78aJinYDGq98ygBrZPRB7TecFPPunZthVJ6KMwhrPhLetVL",
  "key24": "2FGxmzxJHX9tvzs6FsQEuH2TmW9TpNJWGVDkntWkRozNpLTHoDDYSVBpyRz3AdBMKzMEi7mPTzmzWhZtGusRzeWC",
  "key25": "5Xw2NCAq1fCTHSBTXAKPJtCQVbrP8Vu2NBLv2PE3197j78zkGTgmuaq2329UUbcP6K9E2nbRZ7FeJK4GjUyCdNoJ",
  "key26": "5xr8CzUHEY5z5aEDfFb52iqEjkPMZ2BzyG7zmXoompqxcsp3RdZNGLAq7vr5NUYJLqgB9zWXzeEnWBPuf1rdNtPr",
  "key27": "3JbCToMkA3ozDRFvPxT5mWFuNaLWkotbfLxKPMWMkTW7R7S8X1EyFVe63ghXnZM4pdQU3VZyKXrJee8AMgu6gzWB",
  "key28": "2KnsT1wJFEDfBguKgipddrKAQcpYLpRsJAX7d4SkkSbjWi4zdTZBsezZr8iZd9K9TNw84aFRmAmqS2B1kBAkrtLQ",
  "key29": "4F7ykqAp24PrRbnQwWwDKxR9C2PBfwH4BCX6y4XzM5R1dncVFVhe3tQhEgkedaM4c49ap7DyeaqqjkKtPAMM4a7G",
  "key30": "2R8U4MbsRAYa9j86zo54vXZpR1t6fMUSZ7GNtNSUNH6v9RVHZ8j8pkhf7ViVaFvAG6yZ31tt43dKJSbxzQZHmAdW",
  "key31": "2shuy5cpprPNqWQo6zw65tjXCb1ECsjgXKsfT1wPtGLcocU7HVHNDnEbKXrCpby1urf1MwU7SA91GP9m5BPbZWnR",
  "key32": "DQhFit7Ct9xZnpCzzUQgzAGvagsgPrdG6TA6ZKUBwbBvYqoU4dshdpvKpQSiR6QxZ3PHUKZtBD7fohDmK12jaMV",
  "key33": "4vgZcWBfU5CBAV6yqmJYH262s4LkP8kz5j4DMgKeaCPvLztkB1LffFKuSQcXbt2NRf4tk2mCyq3bhM15YKmprzZR",
  "key34": "3dBzwS3CCZgDcD8TwQaEaBFtqAoT7GA4dJiJojAkmjVwuFEMBpWHuSLkotBnUNbFKPfoaMab1VjRonv2dLRAHYx7",
  "key35": "5FZwfHGKMM8wS8KQrdTTGYy4Eu46xqt8jcDTnbG5vVVTRU43s2AQcoP4AGrdpt1a67NzL8UGmjsNEUsad2KYWJzh",
  "key36": "4j4GLCLjiTNwLExEAkVedXKTiJMoKN1GAMd2z91xRM7SVrmbxn7WTWz1KtyoVBDofkWsfK1Aj8xE3Ax35HaK6XhQ"
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
