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
    "3ibTK3VZNTCwZdCj3SVMvnpBLRb7w19KJjUZd2edaittCbFwGc8rHhNi62X2WFB6dKHG4ra4acBirSDak3F1M539"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYDw12X9T8qBRw15nAjJv95oTTmTik14ZKDJuhqfvvQezjPJQ91ptQEtXCh9kRSEnJtcxN3tEvwsymhLwtVvW8w",
  "key1": "4YRbgZwsbrbKvJgfXaP3bimzgZdG4XFm8Kx4D9NEX4ZCSVpxPdf9BCoH23MLRGk3NLjhHnQGMtDW9pAnrZudwvvt",
  "key2": "28rR8KYSRjP4PdQnR5JzjSaNmN8YYxi1YpfhhhFT2EgaUJb4WVBf4Q9JatiZx6jMeK1zFQjukV3sZSToZVTwUXpK",
  "key3": "3soFHDyjvKhrV5ahd2YLMZ5HuCe9UrQchMbb8tE2xS6WM3zRaXTbRkrBUJg4uvpXBQAgGAEcVUvdDWCfKM7Q4UkT",
  "key4": "5qirCad2hG2UGAHosZrFabAAmq4rhz1ncMfd8RyNTKtrMtM7WHrZQkunL4tnjc1ty6CHHyQNttuzciwcQ3EdW2hU",
  "key5": "8gnMKFGRUBZEZ7dFqtSGgZ67ARhHExd7bDkU277R4Rp9vweENSNCDCM7m7yFzPVn4HgVrHL6jeabLS1SmushMu3",
  "key6": "nVAhZWXm7enwL56TbPAoPaUNgQeASPGPYSEcKJ7h5MqASvRap34Sx2CpR6Z6eTVSYojv859DkhjumdLTvbcVRYd",
  "key7": "VStu2gVweVAicc15si5DWVQanBjXVWpqXK2KbEQWQpegtPTNMZhE8xpgL6EBFSnfqRcR9PfcMvN6zcmqVxPu8Uk",
  "key8": "4uiJ15fMde7SkiTawqRcvx7Vu1LjNvwsX5pFiMyTnbQKmd6scDiypjtKftZbruz7r9Z4iWnpMKmAL3BD7ioUb682",
  "key9": "2NPU7rXKF3WhaJoUFdD8jcuXqF3vaf8v8KZ9jrtykYFaNkGhE5BqNKaVm2Zxk3Xn2vVH1w6NXaFhvvGRPQpo8P27",
  "key10": "jXQDpbgwAEsXfysX79JBqdqjpTAmKfEa1ks3BRpLQxrjQNJrio7dkvuKSo7ftyrmdojF6XyhCddA4BA693vnhH5",
  "key11": "5fsYkztkmigQju24WnEBKtw5wtdP6BBWZB4H7msdfomyhGhgy8iVjqjZmcxpS7KMEW5Ze8dKc6SLGEhFNfXs8ba5",
  "key12": "4z7KtrXceMZnQrxuHMwMpra4RgBAakjNxV6AuC2nzefxbk51rBTRhsFc9HVtDTTN7eC78CfiEZd9CLBj5zZ73rYD",
  "key13": "5QY2nyy2rUbHUYU63pjnmBfaUaRwLWPFYe1aDNjAKpqqPw45YEX9UTFMPwqv6DGTKDr7rkczuu7RCXoSznEKyVcY",
  "key14": "2odXQipYUYQUZ4SYDCBa6T5YB6VM5ofZz5rGqVN1X1QBkqdSNQkwPYxSCY3yrsFWeUs2BskLcXrMmWUeweWGCH9r",
  "key15": "4T8EB6iEtDVhp9o7s79n59RonvCKAHW3656rT5JcFddxbjgY3D7ehDUJBJqHnTauT5VLbtvZBSHFvJdwFyv8m7BS",
  "key16": "5rAu2HpqKfYG7wmgwAdmwDVec8VWWhbhmvV7AHSPK1rxv1SDU36AuJWPbN7oFBMgoYDZzB57y929rXv1vdWmDMna",
  "key17": "3y5GqohUPvXpi2MZvPp4q3FNMNBJ6v4gvGtkn7ZddEtxzmi6Auw9Np7p8ekVx7QBvvRQcqTxPVPQXAX2HYtJeRjR",
  "key18": "3azocTJjrDEzG2nv8M5X42job1QP7Myfa12LUrGsokdrTPKB7iK7DhVvDsJaaGxpcDEZdVWxbFfZ7mWUMQwkdoGF",
  "key19": "4HMLMPK55FNo8WSGLdo78FM4nojwLgejqMfZkgKLspNBoH9b6BFKtxTgW3aYZ4jQzUTcnwdanrHEXP4EuB6TB9k4",
  "key20": "GC9prA8ENkVu32u9PDhAG8ZdD7PQRquzL8YXzaycXVZoEXwoZPZzHFfszvWZUyLnqryUHtZqn1TkYMTjQC9vwFD",
  "key21": "xkr8SoLaDFQUEfGXCmnAffjdFZVXW9UXRziQkH3fAkZviC8753ipvbeKjt14SEhbq1Tbq2a1rmQUZhomX2eEnZs",
  "key22": "3jhMSdeARFaHRFi6AmuKioZ5HX7RHa7JeAdBe1yfuKMGNWZP74cAJXVcyYGU3NW6oxrxGAx1t37Qwaz2LUWkQhdz",
  "key23": "5YvcCK6nwZgo1Pci5aPApveDCAPdQ2Mja1wvDa3KrzNNmPCdW7cpstReEWWdofCeR5pb8MMN42Bkz15koCSSQtuM",
  "key24": "phLqQYterrL5tCrwd4EVCtWwD3jotzcqSeYL2jDuVydRTUpxhpYrEUM6R3snYdVzUsQJ6RSAKsKpexoevzCBb9t",
  "key25": "2mkPGeUN8NVdbP1s92pE6R3M1P68RGy6Jn4pC6KneGm41NPtT68mRd5vQ3v71Gr8HSmo4SwtqmLTPfzhhPBVsmV",
  "key26": "2bzbmhBExKgT7paBvR3GX5dNiVwgF9esQBeMbzvC9TaHP1sY646RYBWZqGR7FY9Mo71wLUsfZgL9gVGavgCrE4zG",
  "key27": "2E6EyCi3aWUFjuY4MXuMxNpzUZo8ehVaxuxrPoVSZinXe1QouDL6QvdA3YzSGnwdj52gSRDFHzTSNuErE6frqy7z",
  "key28": "Z3XZ4AootnQysojSp3oYqWsZftnNcoDrGP88bDL3PehAjMVNPunmAdrxqneE5p6xmCQTKBWu9c8Yun7adsrmfKK",
  "key29": "5xUdBUu8ELLC3R2qcfiTMLzTSep5g4MQ85Ahkc8kQqBjeCdhExyYn3w86mPm9gRboLzEQPCfHUDJ3a2uzv5GHkVz",
  "key30": "3MoGfjR82Yb46dqP7aLxJRkRhibPrCWhUppE5esjt8hSA6V6j5xxLGT2mRaHJhTiQqwbmH7BcJvwZcwyJUTdT8je",
  "key31": "384yWpT7WnsQae1PwZyLgvWHu6FSXn5Q8ctNuXv76rNVAjVMdxcq9zdmJ7ct4dQNajUVYyKAZgk9z4k6ZNtMcGJu",
  "key32": "5cDV75PqmgFq7GStGV7bYXE35qu6NaCR7mD49Wqq873zXp5m7X73umbN9X3LYoy3v8kDt8kBYRoqJuuh8bGJDn5a",
  "key33": "pEpq6KDuCkof5FrCzAqhioovkEPQydGPxLruFhp5FDpiCC8DhdsyhcBFmrwFpuJZt9495qNU6b4f36RQYMigNtb",
  "key34": "FbTVap5SR2V6QxQM2BPaCi8Aas1DuxKAzZ61dm6ZUvsPjKrZvDWjSK7R2fa23abiZqC6zpGrggZBSWZ2xwUYRtN",
  "key35": "4Yx8XEBxihc1Fdbot9BuW5d5Fd1t8VMJ9sy8uA9iSBFxDa8amPyJfodC6yBvoQkadWxJQG9dcucabKuiGk4kKzij",
  "key36": "2JC3BkvQnC5wpAphh6QmGj4VdnykSriBYtJMHALjTtzPxS1NYF1bZKoPR2VM25fsLyS8X9U3b4mNLqMsyhsxCnQG",
  "key37": "3KQmiCgaLeQL77pdJYarX8PfvFmS5HEXnMzrx7kGyyCa1DB6726e4wLTeku2ZaxezWv3JJbdHR6qMEecHHTbN7PK",
  "key38": "66e6r9xNDTnCYZ7TexhnXypMwkBXWcymBRbSpFWFzhQQkGPSuK4m9ZBbhJJag8UupJayW9hn9CrdJPU18hF5JuX7",
  "key39": "3RfazCsTf2rWhjcB5azfvCPR89JsrUGvLfGDjWdNL2eJNUUdzWqPo646HB6XNgeQWEjLQ88Q1m18ZNxfY6BkU5CP",
  "key40": "4MJ6NxzzpYBWpjafqs6PxgMHEQDfJHr5A6nvNmr6KEe6LPt5FeoZrce73DR46gz9o5oaHeEY5aMMfCTuuYHtdY32",
  "key41": "26EfuNV4ZEDomkJi1W6AXFuwCwwnQEQgLviW7N9HM5QB7BZ73mZedADP4fafbK2FjZAeRtayFQny1jE4n4BpzUsm",
  "key42": "2ifcAChWDmABoDiUqrabUBeaseBhyESUd3jaB96Zq1YsVYDgycXVevehTRP3VZ9uumXnuJKjeeBpX7xeHFGBTsub",
  "key43": "3zGhM5jbW7evfLDMuho5Ci62EN6K7Zo7YWjmWa6u9a6dHM6S7Lya92Rpt7j6FhK2oKzfXbXjKjwTeFUmBUv3JECz"
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
