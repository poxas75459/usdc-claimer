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
    "5JzHx5QscJU3ZKqbutitvidWygv9FpSMae2mWqfDaPy8uTmQuZjtJ6b6oQ6fQJTM8jiAv1iLYUjYozwtv8gCWzUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDHeh1gMvp6pgcXqDgGnAMhPdgzswxQWPsgtRzwhkGYV7gTaU4PtsuXjaCFJZk1Le4AqJ4TzrcGmsysiRw5E8Ew",
  "key1": "iyLFgSB1Kv1DQkCZN9TpBN2tYe6jmqggcB2aFLMBMing97vbASvh8VfVGMxvEJKj8yGjXUuiXhjqdsP2kZ2pykX",
  "key2": "4qtxgsiHb6cCyT35s2ya1myNtzP3VwQ6RS67jwqmr9UGPcC1mrTbjrcQFNUDY87v5wTR3MjDR3U7ukJa6fz5mMEH",
  "key3": "4qECzZmoYqrYtLSUUsje2iDaBt33s4SxiDCZtjsDnyV5ReWEMa738yQyTSiUq5J8MDaiZgoFJbJBvi6KGMRjHq1A",
  "key4": "3vtZ7QRAgeZyKyQkLMy2WsZWk2tcULKvNcTRbdgfCjwzUEwiKgGqCtot853Xczaodic3ZWxtuAeSMZk62rG9Tr6x",
  "key5": "3ydmcuZB3GvKtauUsqGn98gPdkuzH2Yus2xoKmFZfCZZJtCSZYgCzn85xmLpuBtHWeT6XKoDrouSfmwyoEEnoWAu",
  "key6": "zsKL2KWV9WhWzkNKLvrDS1x9tEdQYcuo598Y4rTNXpjhLZNpFNcgnEe1E5Zsfg4cZ5AN3KELHTXhkkPFjt2UJkp",
  "key7": "wBuGNKWTXFRUvu9cT9PqTFFyZaDeXBbUfVHYr52PGc1uTbvxH5nP285wP7gsZaSLhZDQ15g32xiANPGWJkt5YMK",
  "key8": "4o8DQGSWHprvzcsFF6tJX7qhMFrxYY9nGx3kHSGaZjsVYiMoGqJ4D6FJRhAsGfGLdsqfcK7D6iSFviiKzLV2Hovj",
  "key9": "3K56LqiQ9X4RMiCFbx8Yu8PWiVb4o3t9YCwfzzHgFpEkwBuniueVB8sBbC3qD26RNxvxuxq4aZVjMY7cwoRJq6xj",
  "key10": "3xYKr9CCqPtbHCmbNExamychgSK1uXJmS48rbrQNVxPV9Sta2ihR3FZbbzRyAdA48wwHeveEo9M36tJidSVs2NRi",
  "key11": "hjSU1FRRJQGTPE7B2xMj6tHk5ZbQ6qQ1kqtQuK8DNCireQt9yEkXZz9cJoTgNmF3s1FNK6P2yBjn9dRTy6tZDRB",
  "key12": "455jx9yokzBhSWY5UfEpFAxFobL19CREuYb7nvk68TZMLWj4i4s8KBab23yQ8qrWkXPjU9ZuWWjbfN3ufPR2kAga",
  "key13": "bgyX3zGbv7hqSCbgeK9GjCPPhFHUm5u771eYAEx9fLRLfXVU1yU37fXLypoz3hj72sCsfRGrCyLFnCs5tFfGhRx",
  "key14": "3Us72hUADPjDFG58AFrxnQEYztUDUfM2urusTe6CSrhqxZ87aQx1MJfmuaNwQ3f9Wre1VzWyPrCE7h2nGmPFjaG1",
  "key15": "4MpnzE9KWzhFRdqGehaCEmSw26rKYceZMLdJT46aRTtxFGYLG97SuQBonB7E6urfD18DX3HpuhMroJZpPZNtb9iv",
  "key16": "3VmctpReo5rGWBTsr9WazwetKDyhrACjaAd57HyTuaBruoWnKW9jECdXBNwZzCtHGHqLEqr2AXu7DQYyNETeLwpn",
  "key17": "BgM6EEtxyRBpT7vhRw3L5xNdEAogmofRy2KG8gtVXXZy6PWRrDQuWn5p4fxe7RuGVb8QBWJNUezVzCeuCRP3N27",
  "key18": "5VwU2c5covukPjQGLqw4A68gE3HFUcrAB4TsydvChddy11GKxVNd8Q7SkfJ8Xn1bWQ7s1EJE6VuJZvYuDdV3VMs5",
  "key19": "5jfEPQpjSk8x1FfGQiYRrbvykRwUciUcZxMue4TzWxMwj8NUYNfQc2gPH7fTcQtLJi5vTCskqEG6G95BitonNGS7",
  "key20": "25Yu8cyQBngi4Yk23doGqCgasyGs8gJZcRGK6uVCZViZ1jqiASRU8zV8trhJaauiUW98YGATnd67Q5UvbFL2beMB",
  "key21": "17FGHZiR7q1bUyUP922dPkgGLyN4rMxnVkbZa8QuHsPdxB6KQkCqVokDkQzGBiCJ79m1w5jdAw48y47Q7ar4TXt",
  "key22": "g5nj9aXsgH99b7VezH41ezuSYsi7okUdw7sxeRqW898kfgVWfsxQkS3RnHJkB5x5cYFXUVMqkRboSi4JZM2tnMp",
  "key23": "5JxotRWEkXHpcnDCahxz91NW4mbtxvVgt791YMCPAtzYi57Yc1MJyUQY3j1MTmFWbhRkGJXWcvmhu3RE9ePaGQMg",
  "key24": "5zJ9hdtMryr5y8BMW4NpxnGhsJ41VdQACbSHeD4AGGBv8BU3yDgKTA7BuvRgD6bpZ8wTDMKRiHEH71GsCTLi8Y7q",
  "key25": "4qamrV98kiKmNefConz2cAPTcuNPkVoBqeznE1LZnicc6nfmGBUZuaSBF61G7yB9pkoWGQuBo4dUMBBJjuVYX46R",
  "key26": "3caLzsLGqakPqLAzNSx9irrWj7kkauUxgWkPaCdQbP1ktJfPMvgaUckFTRaWecqpeXJjXnSGzEwgi3u43MyxE8Ug",
  "key27": "dkvAUuypsvPq4CQc9Yr1U2G7fqpm3UUHiaeq2eVd7MYDfHHSN2jtnWoyHLwySKmfosqdmgNedhe4mnzx4ajhL7E",
  "key28": "26DCY1B2gve7vfsDzXsqgtqZHUM2wRz4Sc1ySdk3XwhBi95RdvaAmDMb34dyFpZgD3iLhfRw7wXcRf6hwQLkhNFp",
  "key29": "3GyqHDgkjMMamgVcUnZ38K261TLpp5hKyDjqbvGWvbmbwh6hVaMz7hRk4EdUjGknQTBSu8gvPea7xciDVJiY2tj4",
  "key30": "5h4fhPT32waraz1xMxfCJzRdiy5GKHwCTjaX9yyPJbYKAYr8s67umrB37M5e7ShT1kfNwikHzqBRREDqXWmB6LPS",
  "key31": "2MUHUWUYPuvjrZuVmRDWoTWDP75pUgmQvGLbXBEWofkPo2BdSscCGiekorojCPhtwSHPQxVNmrQ2WjEv2vGA8FQy",
  "key32": "KqLU7Xadvua9c6N4t8uXbsPNbdEJqnUoZJrTmyKu6C3Cf2okySxHJZN2pGdNmeejiQ7ebemfLREGWWxtAAucAqe",
  "key33": "JYH3zJtwjBgwYKC9hAmbg1P5ZWZwfJKR4y24vdsvjPs2ojTC87HgEukNYyNuKcNg238PSSLaHvj6yCh9n9V3Fbf",
  "key34": "2EoxPznWXe5x9UGrvtfpzqkCWgdXdCzYJWXMTsFvVLqgtSBzxiu52kpEAzDXo87ApPMU7Rp78oe4u7RXvUMAXJxG",
  "key35": "5jALF6RvQ1JArgA8XN5BpY35pPbea2JUE6gfKBjcb6LQNaWH4c5ikqeB7n1QENZziYvrRs5DRQWYVw6SyxAXs2oW"
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
