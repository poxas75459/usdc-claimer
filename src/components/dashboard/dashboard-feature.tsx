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
    "5nBzoZFeqWjaRAzSPmf1CM2mrTCZKtYzTh6KpiB8NrN5pKRAit3HnP1e5P76uMcwKJWbJLRQrv1PK4NSBbQJ81Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPz7Xn5hG557xoYxNcHS6NGgo4ajyL3pijJrCpLvPZjHRfqrGWsuiDH7sA6nkVcvxJWSMuQz6sv9mDCJyp2hMzW",
  "key1": "S3GbYXW74k7B8Qie44i96QwDP3HugDaqUywm32nmRd39UCrUzavQX3EBjNEbaotX8mXEpLrvbbACmEdNo3QjbuU",
  "key2": "5vPgeEpBFKwDuMrgLbemfJzikVx1cKNJsWe9PNMyrXMv84QEJa4jVaN1av5U7EbQiy1caD1Lv2MM6eLoYcgQu2AC",
  "key3": "MjB8oZSvp5EXbYsXPQH17ieNUPb8ivFSzeGh8fk3r4hJWVeo2nYjgHR9wZswgA3PF6C9WprXSv3aVsroGk99cCR",
  "key4": "3g14f28VvdATR9wym8YLLFozic6hetD6VczPAQHVrFLnemdZPT3CEm3BwsEpFQBx4LenMSBv8UsK81WTEkoxGZgi",
  "key5": "2ttscF3swTxq4Qw7x7C5U8K6GxXEz63VTfoyUDxNJkFDKKPLWa7QJgxEDUVg7Pp8a5yNvwGNi37bjc2WzFVNn2WB",
  "key6": "qqkD7VJ68ukAtZ1e2xLMubNu21kyKhSRsnPnNhTZ953wQ3jAyRgYWMECaD6GP1Lo3Hq6BgL5UH7BRWrV8sgEdwx",
  "key7": "3EkQE2pVvjn9Y8kUyuTfBKgTQDffcQJC4R7dkoWi1qXGPb8yM4t5BtTzmadf2rH2YCBb1F4VLsUFjziQMiv4cnFi",
  "key8": "RaWSugiNd2aVTtbxKQdAV49GAU1KT43fM7JVTVGiB2TY72N27bv1pCWVmkXdi4x1i5GvBZ5Eyw5FABtWoWiBS1k",
  "key9": "5mApKt7BZJmWfk7pEpvA97jzcM2Bh4GVsAJWewpRaefx8Q7AWkh7HFG67USyy77xqFF1xpopfGcJLGphaqT5swKn",
  "key10": "YMzVcimdPQUefr5ebjpgXL7GD3Y1HcKhWQwuKyoy38KyC4HLpEWKMePoFjERQsNWJkBCg895TN2nDhNceT2FtVz",
  "key11": "YHBHAJRusxJJoJyV3jhT3kx4VwKSWjJC8cYWQPv259oFJKJrsNsDye8ewBJi5sxJeHhyGd6GnFeK6mmxXkTHVaM",
  "key12": "EEoLddDiy2P6x1XzxEaEDnCcJt2W8LMZRATBZDh7t6dgL5vmv9JPLro9EVvgVxg7ED8A2txSkz6MonWYCewZwRo",
  "key13": "3zFb1nhZrC6U3nGwAEYeAwjd57bkq4iRYjgVHJ23NpVpuBTuS8aM5hbHLPEMSR6VNWe5FqN2f5ZPvCBU5ezhG7L7",
  "key14": "3FhyMdAuRG9SVLkaGfrEPNx4T9MsydyPizzGqZ81RdrcLpXqZt7NeR6WAXC4Ti1LbBEx5mGwm5Jh2BNXSM6R84ZW",
  "key15": "nqT2ihV6sSWaSgG6CVfrCFVEZrM4ZNktrMRYKeKQEcyZSz288mmX6ynwT3YHUtEyDrsXdogR4mgN8w88Aew2iCd",
  "key16": "5RkwFGhM4BMyaVb8Ui1A4nUdCHvVHxJHPP1qGBVhb9hA8TLPptHM5MjC78iCRiSRHZfytAXydc65Fnb4Z9JBgQ3R",
  "key17": "4sWV8eCKgtb6n7GbWM4porYWxyNV4vbJWfxeSWH8PWWtBBA2ViUZ7VGymZR1rhZ89u1kkb47GE633L17oysK1Vnr",
  "key18": "5xv6tzRDxbd4X7PXdP7ktmjcMhPCvwoySAp1U3E9MfggBMmPR5GBJaH4eGATKJHhGTgAcVjZRE6XqGRdAsBYsth",
  "key19": "2V9jXanzssDjpp1KDgeoEfAshT5Gy8f2nssVRNL1E5Cz6zssjcxAse36ro2qWUJd7gofUJ6NYTBTXBbTrNhsSx4o",
  "key20": "EvKkHDzGCn1pU2WB9GK5R64fziQEt2bMVkLZ1xMWkUkWTsbQ5V4TG34ydh2jWjTqF8wrM8KLk7LVccbjoqNUniu",
  "key21": "5VsdMzmX1qoexsNbvDXwK1tR4BQwj8R284cu2dp3gtjpBBXnGo5AFfJbjz69quYLeagcJAUqpzqTiNofeHD7U2H7",
  "key22": "5Qcka5FnApnM9vr4gmjTeqBBk4Xi87rT141BDzRZTJUsbD6GYr8n7LsJXuF6WpnHqyUehoJoktCooj6zKQYtmcws",
  "key23": "47zziyBqt56yrVwxT3mB7BGnPDuT5FsbQEJGmXHKGu9GKCDgjDT4n6WdHVZczq8q9yYKdXouffE5T6YWoAXhnH3L",
  "key24": "49xANcj8KpHTJegx1MR2hWKsytNRu89FcJLFMGAyDyYm8rVP4FFJBgfEZZrNRCknau1uFCwtexjvgGSBF3pSoRQb",
  "key25": "3QLEuqtj2eT3QfXw8Y5UygzNQCzZ1nQT24yRBgB3a1mdJMiVv1d9FcWzhBhUUy3J7BF2FsRL4TcLvjm9HwNiAe7T",
  "key26": "2FWezPDejgtaVDrg56iEvKqe4L1bqXjEmKpiU6wU8c7AArkR9mGoNmAQ3grHCePd1wktiRKjNmJKbKRBq67v3F6J",
  "key27": "54YFsPQRsAfFDXMsUWiXsBVQjxFE6Gs5xEyy5nJh9qojHHk7M5hB38RAck1jF8Pauxr65ZcnVNQALFMdxfAhRpHn",
  "key28": "Dtx1GSTF1p1ojnKDM3J34nc4oAYEQ6mkBPbCW3pJr3UCC7ATnqS38ZqHWNe51bd84SzFszP99s1ch5Emc4sxaik",
  "key29": "4xMYy7Tpo78ng6g8YrscGpL8ympJnpFXcqcfMQaq1DSAUSUwrYesCJ1RRnsDDTkrNdirhEvQGWkXJZP4aMHjpQPD",
  "key30": "21wSfcnhDzsVW9akUL6ymJQaPZenMssUPLJyEuVqWKzTXsY46GbHxSWvrMARmYPc5LMFmQEoogJt2kkaAnQAagWV",
  "key31": "551jdkAQ6N1i5MTLo7dZeSQ5bwjx6GvSDCqyoe2V2nuuH85bGGjruhNGs94humVjFkWMtnaVFnLtY7qCCu95TrLm",
  "key32": "4cK3GTeDQR2EYiYqnEgbdfVBAj1XmcYy1Ug1NuaRD7b4VDnFC4LS2ShVvkJK1bhnpZymjmyjESetZAscorJB6kwE",
  "key33": "3UfmZwRb2t3SwonAnhLt3sZYt2fK9aFTHPfbDNzVu2uQ3TuvLYFUFPkELJXycJMWSUkVq2R5K27Cm1Y4P32SwoJj",
  "key34": "4cnDxZCNSkTwG2nhnLuSAekNuQ47pUwkzTr7pyGJevi8s2cr4DSEyJP4gsvXqkQ1d13xGsxtHW1Etq1rXPbHiEJr",
  "key35": "2WncpCXMzcr2mfALmZtHEt1Yx8YqDttMgnE13jXQ9eWjPGS5e76tTvptzYapZdXhGTyh962dAkdQGDQy8ToDNWxK",
  "key36": "4Z6GD8QjLMbtsBDNU9yLxUESnirYUraxPcj3HkewkUQeH7vxHn2aW7UPkjiQFcoPdYMb9e1t6dPTPo9QzkNtN2yg",
  "key37": "3KXhn82hYc1sgsimM74iJxvAyGFJXymdoN9uAXw1Qm8sFUxSYtc9oPaMrSVcDhHFRtGrhHfrxUMEDBKQ6eGLa4C7",
  "key38": "3o9kcCFoCk4w4jEM649H4HNbqPJrMLxis7yvWUVFU3NsMK3tbYgjnzWDJsJnT56417n8PUMvYfhL5wg4p4KK2Tj6"
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
