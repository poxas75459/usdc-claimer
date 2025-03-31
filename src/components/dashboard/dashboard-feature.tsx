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
    "4zyiUkE1idMDK1M9E55TuFF77TSbLpY5xcRv7PTwrwLQ1jsxQFRY6s4BLV7kShu7WSEnWWwaN7S6CbaoqRETMHcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QBFtBSqMmCkj23qqJpdQzfu1MUHvWQcRbZ8oRYyF4XZhgmFEXCFUinNU5z6hx6o8JgosX4JYb8RtXxWtz9dz7Q",
  "key1": "5kJN9PiFpZwxJBY3Fp1poffnCCGZbWw82QJ4fzKz33sKX9rJiDz2nuaEaY1vCqPU8W2RYtZYczfKRL5EjLT5kkGD",
  "key2": "66WFak5jTGuCeNXqfoNicusdjMWYtZxTQoC9NNeidLTjAeBMbgFXGoZSmEY7n4YntNyb2AsYZrAjUqWtbRJjFL72",
  "key3": "3c68FWWnztejy98FeJR25cAPjtWSgVTUwV3dJVK6K3zDrJVoQ7oQghwwW19gFMZGsLiZ21AGaSPaxcrdp4TXGxyM",
  "key4": "2fKZYPfVQSg7K46R2EXgj9YfKgKRmnuL164J79z65yHrQtTLnu5hsHWdE7ze7yP2hmfBYSJW7MXiKURtG2GUJrtf",
  "key5": "3CNhkuntEBjAATWzPKBmVMxXkjNJL6gmCUDmRDbXr2S8KWJ7G3Eyh233h4b5xWeh3cY2gZKjWxfpRTJUz4u3FKbQ",
  "key6": "5x2MzaFqdFjgRKpMFzvm8TQVHQoSsRnwfGfV9PpTNbWTWhfpndQbCzCY2WMQdPMT6g2qhLFRFQeY2HqeB8f1eyio",
  "key7": "2rPzSxueTYmoFTGmZEJa1JSxk6CVv7ET2vijtw3fCx38qCZAJjWtqNnGMQjLKmemAK8NKwbKzPonzQedZLfv3Ddk",
  "key8": "bHZy6K33ti1G62dWcmwqfExGezZ46F7p5wbpBzHH8Q1oXozjNqWUTeJbeP4e4RGoNkMYUpeErGfcJkioc4i59Zo",
  "key9": "5cmonjDtkt9YfgpgDGSMJ2JaRq8JBK8GbyjYtTwTKV1NpTMuoNg47LQ855iMwGPSq1JpBSqG2F7FpmwZqWMaUgQA",
  "key10": "2h1uzqGksMQCobsxK3TEssGVzPfu7Vtnbk1ENTrXZuFJxDEHMz1jnqC9V6MAqhVgHVmMXPHZkYKmfWJKe3SAMnie",
  "key11": "nx2q5fdtVWnPhQCYygQrE3GP19TfDNk2skvsF4Wvoxm7mCGs9CxNdfVk4AwzoSxYDCQBrWK7dR99TmC3vsifBj2",
  "key12": "uX1JU9WaMLCjMPWUFK9PLQDpKWA861tuyPopj4dZJQn95ccsRiGW9eZk6TeY4rgzFuwfSLG6RMRPamzhrYLEfKq",
  "key13": "4mmuVDVFnGoYpJAvZkM6Z71WtbRZVkZFQnYJHBNEkj9h1Jem4ELAmnfvbgW7WqpuB46Db3A8SAd8WMmcYCLMYKMx",
  "key14": "5UGq9d4g9f1nWCcEhLcN86PgX7tMeFmMg3XcRfwNvaq12PhefcnptrFVw2tcrLmLkgbVSrP4nm6fXjyq4BC2GHPn",
  "key15": "4D81q1rpPtcCnZLaD2r98KWKsSypdnFHQWFVJtRgff1wYMTQpWmourtvpLeUgahEg2e8hd8ZuMnDkMh4FpmsBeRk",
  "key16": "7T95AYyTtZDpQHmBNcCmPKrr8pxKUEFXDxTtT6J7kpg9o2NtcaHG8FjzugzSubRwWHuxXroGJvUarwxWpkgVtZc",
  "key17": "3TMfFXjz5DvZHkVUf6ioaJ7AknR6KogMu6X5TtxBfeE42Q5LzAbkJ7GRWpRSrBi9AWcTnU8KyxQtnLQ4nCacPjNj",
  "key18": "257Dtz4xYYK7pqs4ZHuaXN88upnTKBagaTDtZDLuL9gRUNfpL6FBEiP5BhmZa3wXcnEasLKkPAgGYmpsVie86VbC",
  "key19": "4HQ1EBspeTgeybAdjQZNkRNzuVt2NTRvSVKTarHDgab5VYUPJYDQ1cC9aKxySFqAf9eGYmcqHstr7KiMPL1dmofE",
  "key20": "47FB21Nnwipku7orXfo68svQzTqNNrf8NgtCYGbgJnM9X9GRj5ZfxJCzw8VRXeWbzWmUug7VxCuDnTin51n7wxR7",
  "key21": "63Rxq9zYtSZcHSY2AffYZzSL8NeRpEveSkq7ozs5yxBtAkPpjS6AS5T8udFJoALz89U3btqsWD8ouyR2CQwmZDHs",
  "key22": "3KPQqRYgQvK27sjUVEUTXaecUdLiBUZeZn8hkbWb8Er3vvcuBkUaojBZBkPJW9o2ssP2oGQoyojFjRQNhR8XH2ND",
  "key23": "5orXjEmQiAhx9ZY3aTcNs2YSLvZsQmtv9NLPj9KxxQkwDrm6ppW6fD4HrbJr3mSovcqxnjR8XEK9xNBDUn7mbg1r",
  "key24": "43itBZfH4Wa9FDu95Tz2y5eNrSCqx5GkfVWvmA2XoMHfdmo7xyCpg74KyhN2JoFY4sZHPPxf2Qae46x3vabMCeyR",
  "key25": "4RcW9xYDjpA6ZguGg4uKPwCgh2yjRvxnNgcNhBnj88jcAXYCNEGz1geHXtTWAdXvzeQDPTEd7zVEEAtWRhTASo61",
  "key26": "v3iBTaB1vnEStf7VFKhPjW1S6xfW8FSFLcZESX5Gjfjtr2kZWShJa2mTZjnbTQEVNEGxAncVaPcjrBenT5TScYi",
  "key27": "UcC3g1zvc5r3hysWiN9B2XwX2w7s3LqJqaQymQcBDydsXwxw2Xingjv9ekB4ZXyyLAQSd9wgKC2kKBCtAdR9e79",
  "key28": "4W8xeqUxnt8J3LcaXTF4DFPbqFC3AXcDLdhdcRJ6ZCgAo4SGepjWzJqpgoNokFu7KdPZTRyh6yezm4xUgGWzEktw",
  "key29": "dcJJsBDGcaQ4NRKYhQ2ZpKVPqmtxWVJE2m35x5LEtHZHuNbrw37s8e1r1gbn8rBGQFhpFtNKmA2CNagBWbjbD6X",
  "key30": "MbNfZGKYpWKTATUQ6GcrMSRKYD9UrQx75WQFMZrq5dHv46hcEnzJeRGKdE4jBWh4dav2ZecvBasHgmUBohcDAet",
  "key31": "2auKYRwVPBvDyNK3krFPtAvgTfJ7dpYgHUyHiHJfzYnfVctXQbyBNBHvDbx5akUZGp5noHLWcSFrkSK4W3xh5zW8",
  "key32": "KKoNiZptL982ghhPSubvAkwUQ3irchtZz2GQTR4p2H89ZoBP8xnTozX46aUNe9oR3hHEkFdCMEDcjyKRRkj2XKj",
  "key33": "3kiZV9PKmkn4Wf4NDucCYPLNwrGtZapZCdLiPLU8ndXWHNjmpLPhAJeHqZmRLzYPGQ7KtNurLKnG4wxc35JgyGyP",
  "key34": "2zeG2nQhXK4pMw433oCfuTNrCS12UXjupQ7T1UShWBLpqBtqUJSaDeDWJMubdF2b7LWp5VELBr3kqHjrxpNCRPN8",
  "key35": "216DRgWRVJd8Y3Y8tT5wG7kKSng8XKzFFZCEu9vVhcigLiXVf6HUzcxRAKddigEAcCQR8Eu8FDmP9XR6nRd5eGVk",
  "key36": "4SDp4L55bVWbBq7fugBacP6ScuznQSLa6ZvESU5esmXZaXVezTM1NihkcwcsoQ9yAECZMhiuT5VhxqpUUDGxD6qC",
  "key37": "2RoG7AfTGMKC9VK66FReupY4YfXHakNNqeSwPAcG6mZjDb8A14pvZ8b2UHJREPRfkajvYPCNkWgsV9n2FmnMGurH",
  "key38": "e3rx7EBsHrpzXc3Jksa7Xx8SiRiwRuidu9ptoDFqM8P5HiRZiKwNthFnh7PZf5R7biQbYLYHGpYqv7nhUnb7QLS",
  "key39": "9JRyMjUYbYhkKbsU3o8HQNdMyqjHPvs8rdCjZ6qKos5ZjrS3LLft2ZnPKFwmjXkzfPj2eXnHhnjfcDGabFfHrqW",
  "key40": "4GUNhCoumZiQQnRWGE2edsnQvy6ttnvwkxW95uEWjCbFe9P7NN1ogq8A7A4VTS4XfWBK43g3A1Yktnj4pLNDPE7N",
  "key41": "3ViqJ8PcmWehU5hHFK4g1fxaCFPm1YKmgkazm7kc6Cp7dQL4rxeg5SZVLnT2AbmnUdNanEdz95A2SgBUCmJTZNje",
  "key42": "3YRUyQPw4NiBz9BGXjdLBMz8N3X23VsiTmuVMVHF5dVF9VggC4N4tt8sDfY7c9DG8bQkJdsv18dpdSynoDcqWuwe",
  "key43": "3AyMF6vbkCibWdDRHSbBwUB1TF1vBUo13rQkBAtxLJYbixxK7JaBXatRc6wpQXTVwsNEmgAM6FWVc9aBvSAGTHbT",
  "key44": "62QgBLuAmfBkgGudPyzjx1bvDyceXj6absB4JZbPcemWbBdm6TbRXHCdCYewYv85CJv18TFdHUaJoyRs5Fr3d84c"
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
