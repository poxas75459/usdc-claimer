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
    "5ngTCj53a5Xskh7R2a6JMuHUgUdxXJtZMfZJLYPp2yTZnQqoH8sZB4k3WQM4FxyUq46TukdQAoqBD2tYAEjLRzWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5Ts8kZiDX4RvoLfN1xmzcK8JHMu8n8gC5wzFp2j2VUZQ2zBjds3pFJnmPwrUkTTuiye81ycqt6C9KTE5Vs6oqg",
  "key1": "2mUX7EiafVDyNZQ2zURVBDosDaFdi8W8D3E4xcb71SMmzC2ibHS3NQDCGH1zof6Y6ZFKaSPcUzr1wi6D4PBAjSPd",
  "key2": "xor3vP9yTtXu6wL3Ubxs3L5mfNfH3mpAKneRVHKz5SNevoNKC2rTzyb7VjtLBnAQa1fFJugXvN3ZVfdVTtH6PZE",
  "key3": "64XYc8DpSoVw9oQmvBMFVYWnb4mWD1bFhZHkbFG82JnfxovMvkFtmTq7NHh8hNftwhuNAapxN7P9F1Lg8x3aMawV",
  "key4": "5j4TveBRKSknWm16ux2ossQvvvND5xg3fgpYrG1g7xuCXDEW1HchrFFUDPReawYefK28JKa5UiGoop5FsVpa9ZZA",
  "key5": "5KkEFBZy4q8RisYgTCB6b5xq6ZGxySnEbgXaf5hzihVEjFRaSA71iY75F5RbhgbFPKRNsR9dxgACXN7oF5DYt74k",
  "key6": "N1e9G2yWFk9YujvcqVcWqja1DmX1ZrYsUEaak98M9Cu1HJLb6Hz35NVK2BMtH5GMNWUe8pqs3ZXYUvZ7otKMqiQ",
  "key7": "5xE3kt1sHQD43USwZiKo7ERBfPktSUaRWWnZZcZQQmtQkAGB6uRJb4BHQTriNpEUQfd6cC88TvyNKC9fP5NwN6Fh",
  "key8": "vevMXtXvYDpHYYMtuZRKUW6EouuWP5yaD5NyWqAhZpBt2HWKBDnisheK7jEzas91fe5eqn6UXGKxM6WKDDzkEGw",
  "key9": "56i74Nyj3KSS2AiMwqpX1BJ1dLgpyMHogqpbprS774dgQ99nL8e7jrPTssBYP3oVYWcEQR9bnFKvvpMdKxhi3X7W",
  "key10": "41ex2xDrknpHW5PRBs1eydV8soaKPJT2q5s7JubcWNzfuw7wEiX4iK19umVsrTokNgqdAd2wLCM9aWarFHmnsBRi",
  "key11": "3nViDChJyErsVBLz6KJEHjvsBzawqEe7YxZc9yJfxByENzNDjh2X3Lpu9u4DAYepJ4hNAer5FeYC1bRzREcdg2fB",
  "key12": "5MBCZmwenNk1vyLQXBhNuGwr9y4QacFf33XeGkrVnVkzvGyywpoyQLCm98YNa4ANxyJo58boygW57XhkyGC5SpXZ",
  "key13": "4Qz1VrbhoWAMoYZzREN5L2PeqcCvXpZyH4ZKE4T7GsmHJPxgrVnXDxm8W7TXWekroi4wSCpaQoRfvoMkorbdLawU",
  "key14": "58yXuc2uHfv2oxHHg6DaPakJL1PvKifEnsHNxg2x9dttwxBVsyVFBzSFrbaLhAL4Xgpjc2vXpyecEWLxfjTxGTTE",
  "key15": "4pRLzNAcGKdHBBMqq3C7me6KaGwQYs6MgRvZ2xPEHMUz1LbfFmqnKiep2JBPHGqZbVXdCpk93ygHB1m3nNK4Fk28",
  "key16": "4PavTKiKbgiVoCUPDuUTaBv3gmw979RuCveZoJWiSJmuvBS4nN6NPaozRY9pM4YF3Fsst1EJNehrX2iC6smBchg",
  "key17": "NvYAsq1zKaRQmjuVJJd1KMm9jT4kjCqdUtzrhhiFbvPjPtRJNGPrxC5ZNjadKwmebWWb1252ukhG3HyC3tomD1W",
  "key18": "4ccX8ETgriZnesUCp5mjeGKSnQkYMNoGaajmtJJBtjNqkHmhUg1co2oMa7AcHZQqMEiPm1aqL8fQDYiWxnQNo14J",
  "key19": "2twvRJkupwA76QMNCHjnSpBP2VdwcexhyNZb7u6i9Z29MN8cxnASgux6R2v5tfXskNNcgvtMZR3Ek5eQoWC82s4h",
  "key20": "5LcX6BProbhRFJZVfkwaMZUHDX31Jyw1tj2CK9jyJHLY3Rx6yXF6Je64xJasxCqnZWJYZWj8YeXRJXx72fQQGWvp",
  "key21": "4BWxN5nVYmmQ4H7zE4rKNehvwhdwGt2w951vzShwb2wYuxMgPkFiRgyHXZp4hpFg9WdCLSJ1GbAJdz1HPv7pw2j7",
  "key22": "63B3hQ5eFisxoWtE1e7vq5gebtL3A6EJ23pSz2YgGd7FLm3bBWRAF1QKhP2kBgSanNWej8Y5udYogCKgL7HcXmSt",
  "key23": "3s3QmA3mfM6yz7gcTumFGN7AjHioMsoMPV82Wz5e9MTZjARgRqzzh3Qpq8AHtmqPma2EsJPPoXZrxSpCjZtgBwTP",
  "key24": "SKG2FyJMG2ZLuzeL44VP7U74zfptayHnRvhJpKCoBNQdV15hwFjHxGePyysRhQugZSiB3RfsDn8Fa74kibvbAun",
  "key25": "qE3eBtjC2CGqexSUJEAb6ExtLLHWLVoWU8kwKnmjpi8NZVXCjo4VjBS7Xd2PTfV8bKnGwaDx71cjE676EogtX8b",
  "key26": "5mMrsduKnPpGhEJHPgPfm92TTxkKDqCntccsdyLvyeYfRXkiDUHZqnQ9qqUaNZLzWhHNVrQBXvPX7YpZV1dUSM3g",
  "key27": "226AsqSrmAPHU95KCYhrficB23JyW6VDPVAB2u15AEMMdMbB89cTN7P2N5sxXvRAgoMWrSP2YzsMr7CvRmHrzGqT",
  "key28": "4fYrNE94GqAQc3LGWhrgn5vJUeEHTpDqxkCUypGm1CrLBQjzkX2pjWPjmNmpyUg6huNxdYLRhgP7UQZq3Dt67tn7",
  "key29": "RVropdmikYovYQMZtzuj35dJbmYAk2YaUTwuv3nFT1THXVNJQo2XaPSLChNwakfowtLVdgBwqxo3iUuH5zau2Rs",
  "key30": "UCfPwDa2oHu8QfFPsRq1pegJTvtzW61kc5BNN1A1awfn3Y7RbWXtVTc5raFtPhQbw2pxfRnVKw3zpxJua73sLxP",
  "key31": "37giLvGJwwfeXXf1CAeUFNbrG5TnkeGtmp3feVCf8crR9o3iybrSP9Ujte3XjCgFCew9yxYn5YJChgU137Aha3ne",
  "key32": "598PnZFhbV75FGNz1numcaSwkUU7Md6w2Gfz62ug7S1DvEWxPFn3udNjh2xfwGv1bmncZPydbvdTdKSuRY9WAnJR",
  "key33": "Zg9cfsaZxtZdVbpBpiBxEq1Lvr2muBV2QTVPQEdwfxyGx3qWtz4C9K8mzYg37kmN9J9aJQtcpEGZaYSoZgh49y1",
  "key34": "3MvFztYjAACx1YRjgarmaVbL9KMpdA4BY5AkoXhepFEC2zLzVFj662jz3CJtiYapyAsPy9pkCyjEFYDcq5YhJF45",
  "key35": "4AY8azVXkvT8uzH1HKyP9aYGQp8ndmQMJ1B8aBD62Grojp7P951kEXkmxy55qmXL2e8etoMBdhrQyo3KdP5KW3mg",
  "key36": "4kchacuFc6f1NddbbMv3ZJjWBNq3sc5UgAciJMbHx1jksUfToGZwdwqQQh2QyqCTyPFD2jp6yHeW3ZhXSgijdY1D",
  "key37": "3f8Ziw8qabU8KjY8sxZc1ybCMR4t23qVsXf37xhJ3kZUhki1nagiafT25ypVRXNSqpVaPNecXcSLagh3rcNEZJWn",
  "key38": "4LjE9CvPLcNJtWRBfk4qHmhB7FbvtuMQBnwbMX36s371JH6D3My53krn8wagtQcjTeVqnBhyCbVqdHtzVW2FGgCk",
  "key39": "5qmjm5qymgUXmM8wCEaGyN7bW7rTX3YgXZT1XkzgYiHZyLVL7ioEnVEKwLaC5UmWnLB3m2Mqv6keCCdhC5MwgpmG",
  "key40": "26XwHFp1u6faYw5CfHf3ppSbTRJrxztchVkXp3DqiogikADsnH5tiRGTk3uHTEm9evS7ajsNvaHEKQCDsHg5cDkR",
  "key41": "1293stXqnLucDcW1kmMpFXJ2VmQXuu23drt4qpc72Bq4SDTnXNVoZPEEKZgRXuMbqveGhyLV8eNaKFbRSTyBxUJU",
  "key42": "4wdeTeC37gbPc6qGKuKg1nCyNDUN44vsAs9az2axGx5uwHHTD1BMBNFsC7qj3auk3cQAoecgpByhRroo5naqtvmn",
  "key43": "jwMTH7qTqA5XAAUQ243ernxWWe87aCyNT7fCP9yFsEhPP43KEz2ZNeP7rVA7UypxHzLJcwJrAubfrkrE6drjV6F",
  "key44": "2WbAAF2dJYV6c2ggogy5go7pheoeUPbgfNWkchy8ohByWZ8bWR9dJr3UEdYzeSyeeic2Knrh6bzVB34qtXgfd9Sb",
  "key45": "22JXepcgBNG9BazuCcicDt9UeQGqffBJp5u3SLF3aNhzfsvm6s3QGYBKiTBmMeKzcMTBXSd8JdX2of81px2KxQcL",
  "key46": "4GXxT1CoRAdoURXgrk81ZvavW4VyJL87X4VkV5J3JwdFYCN91jHRHvPewCLtHNAH92JxrA8uFNf4aaAtMJULnWPU",
  "key47": "LQ3mgMNjv5QkpGymMGWbySpKhztaGnPGTyhB3Bye4D7EjCeWfuMhSJidKDDL8FymRJdCTx5qcZUdUgwumorsnu1",
  "key48": "5d6QHG5eTpkPA65ViqXKRHWRWTwyHbbQg6FE8VLP8gPgVivb8K4mrZNRy3GdX4ucoD9Rq47FwGTMA4tN9to78nB8"
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
