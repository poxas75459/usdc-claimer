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
    "51n5RPjMxchTSkjGsC4uzLPLuaxKHnpuqibvrGBJqu5QYuugaRSGd7ktpghbh8x8tM2TD9Vthicqfk97GYLKy4C6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HuXoCTH26bRySjntoq9VfNCJBYvAorFUvRYxJ2MesdkEYbRJ2Eq2DgsscoGWrwTGu4F7r9pTbkxMzEvCG3yp9Vx",
  "key1": "4DZi7feimWcCFTCexcjgjkFzo2RmzfWM2r9ckJ7TtikBeSsaWojzinxEvfNiWsZhVuUbbSScHkVoxLvqkE7LZohY",
  "key2": "5c2oyjwasfUZ3CrgZiydS2xH8YfssUnbX46Ws6eAQNFK92WbU2ohKTuEsYbSx91LCCdg3yUFRSgbkiE5MimrZkrn",
  "key3": "2LuCNykTF9Qoh3BPDdrLQXxPhu1V7SMucrvgpzAXroDausNM1WZmDRio5kHzZ7ngSNZ8f2uS94Tkfpq39eFXzeM3",
  "key4": "4sQacStBbEhFQRKBsefF9F4KH1S5aks6r2PSJFJsiyWBcrDc734jxxzLEqFW9xbcNB1cax8bjTyR2HzVahCygmjf",
  "key5": "2NuHitRjAAQjgtDgKhFRJ71YAQM4wcFcMw7iqXyiyxt4nMuhhKGWprXAnfZmMS7LvVE95vKwqq27Jie8yptK1Fxp",
  "key6": "DpXfsftVZyuFHNhZ1Ne8MX8Tpa2osL9jee8K4RVUYvgFqHmJP7pZpdYEC3qLyyFiYgrYg7EcudhCm1eUSUae8Ck",
  "key7": "5LDyFkCpFLw4vpRv1bSXGL5a2g9BdvktZoXYJ8komBVk6hKE2nACYr4PvjRjxG9AUC35N4oGgUKNhiEwfqPJSS8G",
  "key8": "3E6zSEwAS4EjY99kNwgg8iMaoyUK3AABEfUGe5Mm71yVi7sNDxm99WS6jNmbBU2JPAFKguXxkPcQAGuLTU7zFKXf",
  "key9": "62j4DkMfLmV6pd9wd8jC9wFSgJPfdMjnsgY9EjM7M8Gk5tTtvyNcVpuN2HNxNTxQ91EtBxB2huWCRoKQoY3rNQ69",
  "key10": "71UA7aLnwZj44TwF8uiELG7Lm7Srwrb8wq4gN7fr4HcTYCS7JV3wPjzZsv7V1NnFscV9UKQ4WCwER9s98nbwdgP",
  "key11": "2krzpG9WQZgaaLie5SVSxjVgBddNovqMGkvpLZbjFL1jymYrmJe4y5cEobVLaz5982oNiZdT2Ap82tpkPBwiePLh",
  "key12": "2GHCQy66gUmhvAPyxYcciJ4dETwYtqYQTGFDPSw2Bd8TvYvH2yinWqN1DrZG9i8jv5k1rZ9VevKqQvFmkp8jmM8q",
  "key13": "4CPUiZUvJzNjVRnMKqnJJDuDpqBHzkgQFcqPwttnKGgWQbPY2vVWoTgiwvN2rZpakSRZzgoJzLqqapwyrRDCJrQs",
  "key14": "35nLhvtDy98a6mhDhXvgtCxL8DZKaBgp2WuNe8mSq4evcLq3hXue8X9WwQFzvjdL5d8yAjXMMUzoRqWbXM2dqegS",
  "key15": "5c2su5kTjL7saFQkx8iuzrkDMaJjNL3KRhKPdJAafVCjoS62zW69k8QpGJRqCmQM7sJH1emLPovfDmsBx8tk3UV1",
  "key16": "3nREWSnptyGc7QJ9fuJZVHmAsaEhWwRc6wvsqJepv5QWogLE8VVTCYc3m9YFAp2LoXbFaGxDnEJdLikmWnnXYepG",
  "key17": "2UAHpwUTxbhoo7tKdoScMgnR8GsdrR6RqnJehcDabJpWH1TfvFC7XTpQVAPrMh9ZfR6PFCQiKQbR2STu95RXNXiX",
  "key18": "S6UUpxyS2d5AWyjQDHMoFRyz9nAwkCLo9c6xvLNtrWYi9pyf3k4V8BAjNgDJ1qHMfxzvCh8UPuR1JvE87cqGosR",
  "key19": "52Th37xUDZn7AjYMwQZMvWF9zNNnDVZtCV3SjPvRh8DhSTPK37riWPSpv1N53RVwDerCnrrWqng956JkNNUZgz6u",
  "key20": "JZUPjrvN1otFhfbKGpsb7EAU65QDRaHpPySMx5AWTw7r9Yk2EnfB1cNzUVDk96gqPGQEWo9nhvPBkTx6ouV1nru",
  "key21": "5wwC8ahtgid8PmkCKkhipGbcfvpbzgSaETwGYu4PMevh4KpAk8wi8mdmALZY85KNuDJ3SBKoMXcsBccn8KjUnaSp",
  "key22": "2HAMMuB6TtFuaTah9bsKvTtfXe8Eua8xPQmFfiCqqRQfF18KCyMkn9cwKPhcivqfPyXmdbP4ppMugsernAhYV63T",
  "key23": "2aEhnvdPZVcW1y6WvVwXPdu4xuGwhveKJAahbBEdQkEVCLrCM4h1c52c7TajSwS4UVgnNHQi4XT7mDWSMcBZvYB5",
  "key24": "4gfv45HciXRiM2GF4zGZo9uxhXNLuCxoti2DU297QvSDQckfpiJ28otQMuJwDhbd5tjevNUHG8Yxe3aHZdSVppoH",
  "key25": "2iXExncDftzAhdjqT8hyHghjgkssaS9UJqbXEFrNvVh6pb6cq2sX7YmjzBc7fZ9J1WxwSc44PMxntpe7q8gTQ951",
  "key26": "2eXdbH8VFi3NsueMgwh6jHQ2rHCFURH8WWAXWWQJbhUe6w88NX9zCFL5JuUhE9XWYyHA1zA15xs8gJJtWDkYnUes",
  "key27": "647JKZru1VZxHKosaLS2Dj9C3skmQY2keC2vM5QoHHkvJjXBU9S4x62xhQ5WkeBxp3y8Ma18GvA8GZDuxdVGR7R3",
  "key28": "3QPqi4pdpTecbYnR13NJEPAQq2tKJ1q9TJF45butm34KhRAaHTSBAzfMwNe5FzdfY3FbvzSdndp52LSSwHbvRx4s",
  "key29": "2HWsUtVWrvRBVSnA7uSMJJTUNqXvguJj5LsFpyFt2vch6vpPK117PptJ5n15fLwocBFuNEEoMhBKscdbmhD3BRrJ",
  "key30": "4m3uhR5fYk96YHAJiyue99c7YEAViTv1vw3Tbi6hyjvtx4Yn4cyA8QBt5Kw6k3RZB15QzWsrWDsN6NyEjDR6YY4G",
  "key31": "4vxUeZAjM7NzLsvAwyonZtPbZcLjVXhUA2EcYT5NcjHZLD2HmaT71rxskE28eHNti4oms3NSvikiTqArRCGmmmjQ",
  "key32": "29iXCSeehkG5DGFnUwH4L3SV5UJPCZvjw7k5yW2LVrMvenVrrzMKsaczjip9XcXWw7JRdB3maoTAwTMz3jXKRJyV",
  "key33": "2iiJPqteujyUGZ6Td1w3LYYtnRAdKKZgwrT1ePyc2z99bY6sM4axN1HJpmqPKpmwMKMjjzgqfLYWnnCXj2mYoKR9",
  "key34": "3uu1FuiC7zYgRDq6a2bqtCw9ELk1515xpJ3WcY3cLGiAzP91H4xRxrUHhJrbuCMdH5qu6dXbL2xALbveGUSDWmA6",
  "key35": "43MDK3aGU8rUtrKh5TJiF7qVF8jSGbXoUDLsBFffe7UiZz22b28NGWKLnUz1DZSfUXUBELZuws2Ghi63WSTxYG1a",
  "key36": "GMbEbf2kH1Y7EZ5gKEACWFte8WMY1igjoMUNMtzqnqrx6uCCQawFXrntevR8uGX4GP9oJbQQ9j4cVRRZLZs2518",
  "key37": "27ww5Fa4oqQGMJojMb8jp4qT7FKVbF1vfzvgD3DQt9EshMCdoqbMZ8rFf6vkTUB7pd6sTL2Cm7G2dKMHwk7dVGaA",
  "key38": "AWLpH1Y7RS1NQTiSMRvxPXyfGRPbi7vLc9XnPyruqFov59Ws5TptgiwFjoiVVt475JW81UaqfApCcRxPXW6ghuz",
  "key39": "3SRATBjVoZQoWYRQspXdYXnQoSxKDWUFS2yMez5FxR2d2dmM5Byx4u9CDQeJbzJTdk1FSBhyLwWce2AE6oy5Sx7E",
  "key40": "5GyntYLP6JJsrEr6w1otJewTg6zQZ72X6UULMeArUVKDGudhL2wjNA6pNtTaWEtRmnvUbRwfkvQEQAZAwAwMFtHW",
  "key41": "61G4TMk6gWvugvFmVb67aHgi9pBLiuqXiijcc87qt3Xryg9nCxq6ebgdqEo9B5FDb7k99PDs7z4w61DkTLpqJ7LX"
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
