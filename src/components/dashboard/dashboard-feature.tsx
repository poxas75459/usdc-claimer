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
    "2KmKaFktftmz1sRW7oR6wUiqrachb8Gm9jpSkdZVxikvz4c4VXPxGUYy7RXQpEvgehexeqxcwhYfoxpApCNi5LJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBdxhLLcvvR3D55LwWSqjRsCa3gqpYupMJBRwhWJvnHyGipDHDghRbk7EWbBTeFeVzr6VC2tYJkuSWfM2MnSuVp",
  "key1": "4UFwPumctZvPrdEsjpwhg4w868kZW1eNw2xb9diXLf9fq5PedLwZspSLrh2pr3mM8AmPRkZt2vW7EbWuBNwNYQWZ",
  "key2": "2nBbKsqRQLWUQ7i7joMjFtVnTt3CksrnbsjmukFjitKxS4C23WvLjLDJuKE9xbufwH7YeKYXo3jgfGMPW9EADzc3",
  "key3": "5E1wf5YHi99ybG4oQjmNEDSRdk2QYV51KnZepsDbvjyRJKWn8HAmv1jBZWunp5hgELvWvJcfnBzaykewcqCE177J",
  "key4": "2Fhgg1gLebxDaMXAs4FUV5MXiG5mo4w53zx5odYCXTRd9bvXUr1vpexPjkTHpv9oTjmT1NtF7LGPPcXp7VoQJP8p",
  "key5": "2s496JW8PDXtY37KTxQWVi1bveYeWVTQS62Az2cL2fe3NffFVAjELWff5W9VY79KDQPcZGKPsm7o2F1Ff2wAQdc5",
  "key6": "3soy35q2ToVM5GyoCNd1aZe9xGwpHPCDh9GcNUfsSkB8cWmUmrHomTaSxjsjNGswrgSoMWRzzxBgNHAbioTRUCk7",
  "key7": "2FUmrJjXFGF5RmkYTCUs2Ws8pFYGkajSRUqbNzckEqxTF3FbK7rAmjweRgRpsDgpt4jKa3hndpvmaeLVXGrM6H8b",
  "key8": "5hguJSHtxPrYEwsfVKBMXWq3rhJZUofNXhsRC96osV5pp2ugJLu4qF1s34USmVgV2Fy1B9vXFSzrH3T9SkYnxN7d",
  "key9": "AwqngdaVLEbLiBNj3QQ7MZXqZewdipX9cJ7rbFWU34A6cfxPaxvDdT4FKNJqPWqoxg7RvGSkdVhPgyzr3dFsRx7",
  "key10": "31NYXA9qXUPZePCdnnC1qTHaASRyRznov5cgGfKWdHcZs5dLD3KTsNjNPBsMX4nakVB6rHiYiBZUF8QPRc9MAyYA",
  "key11": "41iEae5fVAvT4PmJhSozmjc6RdwqNppMAyAYLzvBB6V7ZfCWXdL3Edhfk7AH5gQAyqt6n7tpNk2TKp4GzgxfKhGG",
  "key12": "47EdETHXvS3JYrVBtkcYP3P1k2FtwamZ2nguMXaVuGhkZ1adGNHoxMCjHP9X7Yzyt8vSuDHZEMaJxvrmp2zg4iu6",
  "key13": "2QSDVjezh4ZDURpydaNdTiWAnidv8yuFWNyX8qejjahYN7ftjyvXNhMoPYpNWzdTX7MZPcmUN7zGKB1iiUy1xoHr",
  "key14": "3YZ68nG24EUvqwVygRosjKZEu2Wz5rRHe6r9wQjpP7KC4dP4AWxsiN4j6KVqcbo4DnREoyZH4SsGRxHSxZ6hqyi3",
  "key15": "Q9dGWYUkkpnFSMqwmQBq38DTm4YkoeyxgUgbJ5Bnzn6S8anNuHemPBqAPkWZpEhX4wzsytjdzzicPWV3mejXwt2",
  "key16": "JphwcpqsrvQgsHSsVMyhGHXWw7ZhoD4CxgT1tSe7Jr5PtC2u16uTQS9X7CC2tPnyDi8vuYauVyH1VqUCMN9ETFc",
  "key17": "2v1fFRZtF76KzuvkbwQezwwHCrbfWPb9x8QFQFZRsZ5ZedrrDfcgH76EUthBvckdnj4kAXJYSsRzfDeGkQdFCPnN",
  "key18": "2Fez2ceGMCMGYfTKYdcLEtoSdtu8fkmGFMErhRqNBERm2EpkvHWJDeMkrPUqS72QH71AGxRFq5WqhbvKMKjTp69H",
  "key19": "29MvYrsYNctDs4sciYQfD8W4o9o6xGRx4jptw98TYsb4bRQRmPcg69i6M53aZBpDz8WLAXqf283bmYNnR5GKMu4R",
  "key20": "5kGuht2RkzU823YGwY1oWin5oUiwRwwkPk7prXmmLX96ED7kCUXRAZS2QgJVDGPAJC4se3Zy52aA6d8ERQCynwsA",
  "key21": "MKjP5xyMrz46omqdee9ZvJJVMUWaMLujLjzFR457aWCrpuTamsazyXn5NThYcWvK1zebvDSoPrCmYAVjdWpfExq",
  "key22": "5gUYU3zatXpKLfmD1M6jZMrjvRE2yw81cxn1D7uQWWzweGTZj6eW3MjSfeJ3LuAskCdccX6SLkEKxH1s2qP4UQMn",
  "key23": "4wtJCji5YLdSEPt2HHHnHw74mcTwkVjhTnS7CByn16KDGp2MyrMNPAM1qvY6ijr1FXBShRyFnQXHw5qChVN1nP6",
  "key24": "3KGRazMwtjdTNLE2SJHciXLQTU8iUkZohCmaquggt55fqKTB37CEAVKZFDq3uZkHAUhv8Ayhd1GMVAu6dHPUv996",
  "key25": "nrQcU2APwisAnj5KMHghRWXkevrqa6T9hHP2MJ5Emwzo8oYfQLMDQyTXhCnhT3kJZcfXw9dkTfnVRFxJmsJwNop",
  "key26": "KunLHdkGp52CEUZFXgtx6GkzMd4DRCECAcVPwKtfgB9uvGz168e4yBQ2X1m5oiQm7M4Ly4y5qmh3rjD9UFnWVjy",
  "key27": "krbrb8tWnbC16EB6gKkjVdzZSvjUukRFZdqGUDs7da7FR5PoLQh6GwjjUjFkFB96CkZ894Mu6QtRYx1NzSFx89B",
  "key28": "3gsjA3hiyChZeEEf9yh3vwC4NMy4TJu78dpjHovdh3261VtWSQbVv6iwPRzsB4rHB9oNA5hhA59ReYKfnD3uS8UG",
  "key29": "3va1JgdZRf9p9SzxBVLWXSHtznAbfnWDoRMvn2WimkRwnXVHaeVg8TNdwqYs9GjaPtnxvxtPtMVia6igH1czvZND",
  "key30": "2XUP2qWd6rY3Et5C1xe2qtvVcbUCtW6JZtwLgiaVuqmLvLuvuEGqzq71Gzkb3QqjHut9QvGLF5UiLu6Dn5DGo9MF",
  "key31": "2nWnt2d5zyhp7GJCBCnLzzWSucYsGczY9gEVLSxmR9vutLBodBLSdJPV3cLpcdQWJYoMko8iRyJXzKvC22jGESQt",
  "key32": "4VrnNtbYWWN6jmz4cn1GXhgwWnDHrzNqUdQh4XwjyW1ECa5jHuFP8CGA8QjFVMfPuYiAGCxddCBwDyC2Xg4qoSyB",
  "key33": "3YQSqrzUEGvPyKPEiYfHHQf4MpM7GwYPPCV8ve9WkaS75DzKQZn7fi1uBNeHzgTDaVniHYsZM5yePbtDt3H46ZW4",
  "key34": "45zoEqagaTv8LGC846N4FuajegVptnbewvhX4QWfttr49yyZZ7Dn1zxEuarWCY7b1Gac3XZu5PUhqjHnZHzraXoU",
  "key35": "5N4gNG8sKPx8bZmC5vyaqEmT5q95J5haxpbNiBVnwDH46sF1TjxccQEWC6eZZvbXxeWvH8JsA33jhrhxSB34bXLT",
  "key36": "32xq5XJeqSy9nGqLbGvQkAE2VbBCWEefkhXc4azQ9gAhTudXnLP7tsVtWUMQUKB4NHQaN4XGn1rrGt9CLWxh9Q7r",
  "key37": "4o7iuAGj7vNWpKRSPJF48A12DurkWSasfHf4dQ6dkERSx4ALzdKRkPo2jJkkh2yYkz3nTvwLaeZrLzXd7EPKko9o"
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
