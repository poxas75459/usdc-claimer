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
    "3xy5wHaV8SHcdjbZtndpa5Gu4Q9L4MiHJNUXap8Fjv9HVjEAGZkBSm9zrgNFnCvzjgS4bp7Sy8EQcbbBXFCnNLTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrTHZqxMyVMedMTfPruG7t8bLrYfcSxyfZNyJukXXpFi7UHK1gnkozDnx6mdnjgaN5fxHxQUQJ346VdqRmCWJ6c",
  "key1": "3QfqEKjqRijafjmvCeAasXxRvXcPuRtVCRfs5ZcdZbvwNEopo394THPHaQovn4qgRjfvQodbkBi1Vyc6qkU7sceB",
  "key2": "5qs5tymRrAVE6rMJ8aNYxL2F5Ci9kS2jWsrddRgbbZNe3Yu4cG5BDoawZPhrEUFZaxaWWmH2H6GmSarJgtw1Bjqq",
  "key3": "33kwgxt2pPGUUqJBB4W4Fmne5RRXax7LofjooCwEqMgbSpeJLFWer8JXK5C54H7p9NA84a8g39mu8TJjMvK19Dxt",
  "key4": "XRqayF7ANdp9MbkmnrooYKQcgkfYcECNkvhkBKrMcqrqUnFqgS2YpWp1hMnhTwydz9thSukDH8A8bUyhqsfQ8u1",
  "key5": "2w3GPmLTuD8DGv478hNzTaP8DWXJzxRJsghr5hS3oRPg9s2HcmtiNr64G6edbyZLuKYPNstaHYTH6CCdwKvSeh3Z",
  "key6": "2S3mx7qboepztSKPYtPyGu8MwYQRYEppytXUBC8PWBqCsKohs5R88FDbc7npFhparRmAZXyMFjiRqArjZCx5Kq1K",
  "key7": "5rdbtA9LvHTDZrrodUsAFR3Uiz7MpNfU8tJGqPthGQmzLkJZwkn7z3wSi16ieJqt9VdoBH4bYAPGhvEBFpGPrFZL",
  "key8": "3nM5e8jsFD6bTW3Ug2xmJwfWKrdhxyqt2bwuev82Ex2qWTZnbhgw4xySZiiGyWbp4gHNndjz2MDyagoTM4nHgQMc",
  "key9": "3Ysr9Jnk3XbrZgieif5tAne3MqF1BVSxHamMVEqECbEUgfBXJjXYJoGyiiCD4uG6acR2bSjFXDKcfmjFdeMF6GHo",
  "key10": "63Sc6Lcmmg778xNGWXQ9Xasooub9uChmmd18pW9EGEatYQ16xQLAAa7QzVArq5fQm3R4dSBnELhBgXJZYuL9K9Pj",
  "key11": "2nuKsemeugUF8ZTFMLzRi3it5cYVMFQx5S2JhQUXDCHLoCqx1HLRsVezGjzZUmoRhkgvhpnbNro49otbgzQX5JRr",
  "key12": "5oLZ2GJkTUPNMF199zYiS6guSuFRq7zmwrYigqcFADMkxmMHUWzgpZaCSpGPex8fe979fgTKmyvvYbzHPT2RP64m",
  "key13": "2vmFi51XRCB6QTrzdKsFEBpUSoroUrnJ5N7XU72g5Ma7qMUWzjvqtmR7yWWAJWQwUEBtSZJpaZTAy5a2YgtvSjmt",
  "key14": "5xGtioWRg8UoRGAeurJ5mCvhieua9WkjzP7EYw15EF22y9YuvM4oRNr72tiYdHCsj8LSvrN6kUZ6iEb3uiWvEYSg",
  "key15": "53MhyT9foyBKakVRpGZUneTkutNxGT42gLm2NxN623Yk716HRAWYNmd8qYB75CdAxcWX7ntyJiRLQcHCgUAvEzkm",
  "key16": "5DNsg9UFu61kHg59rCzwKHRmPXZCHsJWag92AZ76LEjMEp9bbDGgX4yp2KEuvNYV9vYZJtKytAMSw5MEwTng6mfM",
  "key17": "5UZ6apVzZvF8yY64mzdwReTKgp4gGiNsykgBG3UuYniGVJNv3ZnKkFVC4Zyz2WqkDiUTBz5bDvAhqqq4ATK7WjwP",
  "key18": "3Z74YnKWHZRbVoKUTQU6FLuBQxLCT4u2ydEHRa3KbQHsTZP7ZCsTya6BUj271wB6rnzvgjvQNEb29Zr8At1gQD2X",
  "key19": "3NnR4kpT7RCsYm6vGvYx5C5h3jaK18okkWfWMonmQgYMHQQ3jfuAiBtfWQ4TmkkrjLQBtj13jFye9JEc6b3QMXM8",
  "key20": "3zE5kWgT8rZzoDv9UKQrNBUMRKQXBx6G4G4fR3EAUQEapirsk8RFbUUwv6jRcbsqr38MrSqCLkKABSiY7SogeW6Y",
  "key21": "4Bdh8TTaMKFoBY1NxDfBrsMVBL1oUKScCKBrxp8hsyEQvfuoRM35wsbyAVphRDm5NB9KYRHv2xQ4irhEJUnd6Gcb",
  "key22": "2hdZwLE2jo17Trckact3KfUc1xL9RZmeVPnbVEKCfwNEhJEWm776PwHppVEG3wxMbHBXuCUcUeETVmXF1nnECZiP",
  "key23": "4K4BwFbDYJWevBfekjMAxNYGaHjrnT2abdKmMpXTQhsszCUyAVr4zzfhSDdpGGgfjwMQTRNMJK8PwNveTefsSGCg",
  "key24": "rexpdjiuYXDhrES48zFVqXekS8EKnEhhLxmnkUNsSBMVbUUtkcS5tgogbPRs7ZEHzsyjwsTuMESzNEjFV4d7XJN",
  "key25": "26TcNVTXgQ9EvWTtSiwvxYkCNeLdgMkXQtPEuEfZv5qtcnBHiJrSEacMd9cjhWYUUi58zUqRH6Sgvz9PjvZuLRce",
  "key26": "262rp5yGcZRSfKQ9d5GV952m5HQDZsWuxKZba8pQES7gShesbvZ4Koav4J9zw4krQyBgM58yv3FEfLigqh8zixK2",
  "key27": "5sbhK9jLaTp7pYCJ4ZxsaErmeTpxiRfK1DU7LwWuppJvQxCse6WgwkAnyQqMNCvAGg37F3u5zE1jk5GK5Zgh9rD",
  "key28": "2Zji6XUh6TsUEA38QxoCuNxHwnxQMs5HsfdKsMgT6oKx5Akqr2oeu5NpN1EwZapcfqAWmXVyyAz6MWFJ5sJjmRQ9",
  "key29": "FEGUvetejBQQ8vNGpCDKKpkfgYdC56hwfUzKZPMCzkK28vbpJ7T9Vw5qvjXUawkycqJ4V3j5CnJsNzdu2z62SfQ"
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
