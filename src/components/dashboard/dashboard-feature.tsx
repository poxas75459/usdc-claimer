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
    "58v6jxTCwMezg4y9odjSmksGU76bmD6UKgBJNuRDLnmVR8g5NskLKxjEKqPLrCM6QbbgiU8becAny2wnE2v3QDrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PqjHJ2Wm8k5Nu5JL6hv9VycuuJzcHMZbzeGcUqAoVzBdYYLrkFRNoXLhsTd2ktA5RrnLtaVYU4iY9jcUydutSeY",
  "key1": "2B88Emh8dsbUmrPJJKKteRVaZEKZZDL4aVSdb8VA2M9kcJqYAfmvxP7khLFwdKhrdoW74Ksa5k92cLhLoLTr6umC",
  "key2": "43teWWmDrB9DbWSnQ5LcirkP5vC1sxXi2Ryhv9tLkhHSLQV8inoYjXx7V2kNjFrXoycQ3uxUBEPeAe5VcDLtn1pz",
  "key3": "4PcpJz9KF1Fv3NcveCWwrZny9sbWwGmid1yLm9S98HDjidgrfEUEKxfgD9ZcmozHdtXDjNkbRjG8T3RoeF1JMRvF",
  "key4": "2ffKJhJZKbPkyYZaHQkD1ghGT7BXQzwP5sfrMkZ2YDwzGQsiyizKYtTcTPGi2GvanwFc73E1VrDo9fjp3ZZh4zLb",
  "key5": "339g4RmtF9eMNBKbt7HK3tsn8kJPodtBSe9N8iX2MFCE4UVCpo3hx61DQRDMDzxBJCRcCu92TCQZBTQfPFpsmXVu",
  "key6": "3KS3pHmSJVepmc7nJ5As3FULG79oD6rvuqmNq8xMq7nmu1ZJFLt8dqVMwwrcooyFwSRbSt1nWXqs8QE1La2NbUfo",
  "key7": "3rMsHrod8P7f5PyZR8HiPmuvqnHivQf42KSmiGVtgZssVMeBFwjC3TAnBkXLH3d3StwH8BJF4xnfhvSZAdPJdnyB",
  "key8": "4s6kZyWtEuQcgXhKCAGKhTrfN4zySKUG75Pkeo9YMbUmwJutkKxkRvCV5D3yH5tLy7dVuJKarjvBh1M631hBooB",
  "key9": "5kiPcXTG7jHv9fK2Ez8ke1zSsGES9RxSr3cc2kCy6K4NwB3s2W8GdiHV74jv57x3ZsVGUfGpL8F3Etgu9P13Lrhb",
  "key10": "4t79Gd4sEdAYLFuEt9xFu7L6NuRJz5x2W1FRa4fKNWaZsYsX1sv3zUJ1TyRs2LzS9q1pTAY84w2CHR4aNJskvCH2",
  "key11": "4mHd5gezaK46R1a8ucBT1wsVHeSieD3q695aNnKq2iGNG74AKPVPLSQP6DboBVg68MpzUTQSm9HwPfwmMe9k5PKi",
  "key12": "3PUf9RwLUsMXCTrFgXtjUsoHPuqM5EZYVTNhHLZHZmSFtV21fx7v2Ccdq53hJYZi7vAe1XRircwzGtuNVpxkLT5S",
  "key13": "5s6ucahikxpqx96crgvHu411Wnza7PHuGxt3WbHFMv4c4u2yxm8eyFAncz1bTVkRw9GSU6dgsvitCiZk7xLPnWxi",
  "key14": "2naxGqkFrYrzds3pgZ3UzBq4uyij2KKsDYcZc9EkSsLBKfFdsj3XKd5jxBuxUUNe6ecHmuQ4srzAPsKZjwWD3UUG",
  "key15": "3B2rLKmJZqG6CJQ947J7fD5Vdf1ELERoP3mygJXiPfvYGXavndXnbA5YZGeYwzdLUY3JCkBFo6tcd9stg74XyrPp",
  "key16": "4BAKDyLd1Xg66Gs4E6ByCm1QkAQUvaJvWhHvPTp5iRA6X4BtnGfNy4dCFiccuXwqmRbL7KpK9fgEXfSWhbTtAqCk",
  "key17": "2NVHWbAaDZj3vktP1DWUbHuBL5LmqdmM4JmRCxhtzAzX4ypMA74mHfy8noU6MW4Co7jru6YbZjJJ4BQPTSTau9By",
  "key18": "3zgG1936sxmyMjjBQsqnHtBU6xYzEkJMP6caukE6WkqoRTS34JsQJe8XwwF3NEvyJDXGsiM1EuVqisBch8HLG45m",
  "key19": "2jziJHqdyN6M5VGA8nqCoSL32BCW1GCDHiaYBQmogecoYafH91Zd7c51CqrYVGuLaxZ2qJ6iK1nEEjSbcEnBmFcd",
  "key20": "3A8AUS7hDdAHiTpd2qP6PDCmzYbWDtqDJaahsbpqB7LQrQK83RnvWsjzLgQzY1t1yscRLQWKETbjr6Qe5cooQYqN",
  "key21": "2PuP8xbs9rQHnCWWir16c73vqy2B18T44TSpiQzisTUzBhSYzTu59WxawqF7sGX8Vqq7hHWY4XbLo86BLbs91bi7",
  "key22": "4Q75uMWeiGTt5nbGAKwBJAyTEvvffXwH2bFopzfERLS9WCZ7WkNgVXgCTv1NEqDAwGeMUwWGFo5Gs8azt5TaSnND",
  "key23": "QbzDhFCQooBi1T2EoPitVK26CoMiZfCCJVUPGkcFjLJPudCDrNw9VSgeMtGjcEQUGw2rP4g8xjawY3uBvwDE6Hc",
  "key24": "39AqXPUhjcBhWZpySeVTVwXXgm65MMbnTAwnKy3QurQtvbfQRi6226Q7RvTvF5xWV7MaBZj3DXTRbk1i9WbUzbj3",
  "key25": "2Fm17v5R1MzcoDk78DL4YcfnP6DXVG8NkcPxzMTBQfs2H8Qf9XpZA33WK2ULmGzxJNMor6tZN99Ah7VcUc42QKoP",
  "key26": "2HqpqD6RCauxVVNRhhahS5vsCz2h81nvPFiNk1r41hiwpfYa9ZcvDUEEDJ6i1wLFWw9P6qkYKchUyEcWmKzPVnde",
  "key27": "3pprQFbdYBZ4Pu73W8HaNc65yaFYY2uNZJWrUFr4eRBc32XXXQujwbLbmPG4xgTqicSMm6SnjkVYvxbvL8YC2MCA",
  "key28": "BVkK9nKneKMe7zWbwad8DK8y6Hih32MfhL2qCYjCT7f9eLahYPaXe4UBvjgc9sHgAoVfdnVf11t2TnTP4iyPyGY",
  "key29": "4sMYKQDkCcyo62s95N6k3oHQpkV66u9WnxrbLDVHQoepqckot2yTp1YMM74qegUUrYMKXgxEABxUPUtcq7F23Pf3",
  "key30": "3chWXanXYPq2YyPtRtmek3owjn1UDosG8piaSCwF3mH8EhCKihce1hCeqedKzhgncmskTwRGpoG9JYRMEH8d84aT",
  "key31": "5eoPyrrDLkub2XrqtfWdDmWde1XvG1CRF9auQuoATR2WJkuFtiegBRnc948AeUYUKFPajraWevFrmwX7FEvk5UcA",
  "key32": "jS4eq7XoCodgViRnfFE4xDPsMrUAxaYeMQLF6vQvZdpYbhycCtN1eauAA9v9vXsTuc9ZbwbEkJizF5cyCi744rw",
  "key33": "5yCNG9HCkMLdY1FeYaXsAyhNjBUFMPcygqUH6Tjqa6xrqGaSSvs7cT6DNH3iRDrWZH7ZDHKEGerHFCPTfPfReMyt",
  "key34": "3fgmyTKoXvefCJUEWfEEYxUrj3j8b928GDjKEWzZxjqZi6pRrmbqydoiibRSibxBBhx5MyWNQpeYzmWJEnMx2yhX",
  "key35": "3TNQFoePgaRCJaCReVpZWdFQhMhXWQoVquUQecbSq6PwUscnPcPb6U6fguDvgNYXoUZKNKF9cHQS9Yvef6VZcjwq",
  "key36": "4vXMhn6RaFByjbMQsGQXVQsnrrZqTc2gbZZi44DKNRHPdsp5GJBCcRubXSqxSFS44PSMspsKRGnTU8HQfQ1M1g3Y",
  "key37": "5YDxKK8dmjU5HbL7iQcinDDToh5QZnDQNY3MnK7paRT5kfywhEWP16GUtyLGvnaizCKRwGj4XWx42JHtNPRoLBWC",
  "key38": "2YdWPYgUy5VRPSQ8tah89fiqe6RjHz4xtfrZSnP3L22bB4YobhqxC44Z9Jfe3diWzfyo6buVC2HtxKbZryeqMyKp",
  "key39": "2qnxqr7nmnV1FQQbSyTQ23wHTf7ykJrjke3UBKydBAW7SQG7J29KMrHxRVvdYQB22585DCG2AHz3jgXFdpMcr2NY",
  "key40": "2dt9ekDKY3on9kYDWRtJhWqURCp1y5vLvV81kEkYmLHjCHvghEVki5RibJNAdBZUTdyESJAkdWcJPsyGb8wwgkow",
  "key41": "4gN4T8KLSwft9FPXKenyV73HXB2bQ9eUxNxsEwqZzS6Y3HQYhQD5dA2eNYuPKJjcCsx53WLWBMPzT2fSJFmxaCbp",
  "key42": "43TcpswwQh3YtAq7cQCPuQuGbMM4LCFR2cAGu1Rtg9ChD78ogDMPGZJQ2qWqximjsHXUnd452e9VmBDdJ2NMUN1N",
  "key43": "55NWvCjcSPagMuKtk5jGiHZYtQWbemjoBpm2bwHDG5j8jqkTjSRySPEkyMQjgu6yoeHZfSWyPHwAZ2QxmNFreawT",
  "key44": "cinh8T8gpZ9tsipv95q2whLHhUnxKzVUjcWK5pyhN9r2aKNX6TkSFG9qoVxpr3KP3urxR4qEHNWFREGjvrK4LoH",
  "key45": "4zKqDUKDtb5oMXEaZNSZ8ebzgw7mU1AUXoUw6MwChbYTCBhS9bX3k9skTg5DGKh1T2MYWj3PiwJv8JqEeTFzdhTg",
  "key46": "3dL3SuSEsAVremwboE6KJ8hB87qbPhoZUM4pEFzdthcgQmSxJheHKF2dVQVQfKXtKSVWTwAY3JwF9GXZqAxQ7CdN",
  "key47": "55jCQGgBmrbEXasa9LSbpszK6aJHVVJNFGM3FVZM4t5tLBuhaYb5nuF2eDgfv1c8Ctcc854heCV9BE25QQTL9mYx"
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
