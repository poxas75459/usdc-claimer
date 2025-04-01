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
    "2w8xLSUvF8h89ersNP9cJa2JGkfX282cgktLnXYDxbM4Xc91aZKW76orYFw2p8Jo35pysUPTZjQFV8wpx4DUvGGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21QssWvmhV31YYgE9NCxNLBtHccrtev5KEk8SnFBuiSkBJpSY4ehG9qn4wb7u8LqC69XQnmBEUe7NoZv8cXbsZED",
  "key1": "47NK2PW64YBLzHRnQzsM3KmVe35AXsrVLreYDi28shqA7XTHxEXuCSie7ujesGhgEkUDfHJ6A9gWZCv7Cc29a2hu",
  "key2": "4XjA4JRLsjX6pSF6SctJRw9pR1RaWF4YiNXtdnWdv6pFGd7QaD4ZNiofXdXJTobi3uiUNr4o6HS3fnbmqp6XTn1J",
  "key3": "NyD3TQzQ4XnW6dBqpmDF6cq9tYgHgbBjhYcSjzaMWpinq4DGPNzp8YZoSFaMd1mA2Zrei222EM4Tih1rSxm9MyT",
  "key4": "42TkxLReiWhoPTJ3V5yre2bavkEmeu5y624pX5b5APRiXpnRwsvZamR6D3pVYjUNihNCRn6rcbb7jGB3yBwoKzcU",
  "key5": "63KybsBu9iY7AuLDBX46YSerKd7pK4Xa9ZUH1kfWrHxtY2EV9sQmEdZTRaLE9j6r3rskwStCfJnu1fFHoUvfUqFc",
  "key6": "4VdVJJbVAm5W7YwnquY88t7DNunnbYADG79PZWabj2sxf441SGowwdLkhwUB6KRZ4qoVyPGCPMy5gxtGAhnCvKgC",
  "key7": "3t4qyw9NoX7QSM37zjLgEJVycUR6XJg3XfvVDYPFbw6nioq3yNQvD2CrBnbthsLsMBRvKjz6FLoY9xQxNHfkfgEw",
  "key8": "598A7vq5thmsmP6dDsyi6xkorB6CJyUcxhwCDA4Ntvhsa7cynm2WZ5c5oHM6JDCbATwdXojNtyu8obPSpoydhtGx",
  "key9": "4TCfNvR3ezQm5zyGd4DWxgfW58e11roLXpmVd9e5RFyehvLJaXsUxYcpuF2TRxZB925Cek2V5RQz86YVG5kkBjpR",
  "key10": "jz6enGuPdohLHFf84ZTCgCa4hfEp8U85gfnaQRcNFPvRXuyb3VjA4zoXqqFVgbkBExLmFGXfpHKS2scESCPrBsq",
  "key11": "5VbZEyL84oa8CxXycFN9YU7szKdGvGAoz6yDU1ZJ4i7xUaypKjKCD6bR9yNoWq4gePMor89T7MmYJWVXF9UGvfNL",
  "key12": "5GoGTQtTtazoTBy6iUeLidkXhBZLV4vboyKtfZXnzAtzao5QVA3XemaPChjmcZSAmYvnj6wpyKB3PdpXp9tkbdsg",
  "key13": "21cUzt1Q6tzh3N7HUL9QV9WMYdf7suwff9AMnf6Y8dESsWcWQTkduVjgxdFECxXsfinBJbYUgAaGpjn9aJvv9hMp",
  "key14": "2DTjigTEYBFrKcvCtijDXZBtTmE6hcAQkxpvnwSUTjB1ZWwbZU7s7xxX9aRAnEpSox6Rook6pFnVEqVutfQ5dA4g",
  "key15": "2bZ7a4Y5t5hEziJUbJy4XEnmrLkYiHRVVEbwfMCF4mXzRVhRkaARsAfP6z1iEQraBhBmfSViGLih4MMZdfWCarks",
  "key16": "5GMRwgEw5oPbUnuve8JpkTrNDD36PM7W6dQxx16PoCyBdUWY48rV8DUHGWcnrXWEt6QdBVR1sHE2gDS3uQmramqh",
  "key17": "5y86xswxSVnfxeYts88rcRyyBQkZ9rq9KqmpsyJASKacXTjuCtUBR6wpwpTKsve1GwRVfRDx6RQUFuxoqaxzVwqu",
  "key18": "5jpdbv4Fza9p8jWryJGCBcYSfNN4c4gx5kZN2Bf8NuM1Z8hX4h9gfU89rcUf1f54Z2PLNiigXQDrHWBZGdpPieWP",
  "key19": "3anqRTHjngpvXqBG2hga5xrbgRsoTuJJHpzsY87iiZRbi1dcHUtMxeQe7tutoNUjYM5ZCqguBhP3pFzkprnzsoVC",
  "key20": "5oCGFYLX8wGHepCFkNCSpx7FEmnRSZ4cheKGYWsy6jJQiK2XfiPgG26u3RZ4e6LEzoAwiy3zVJGNEAkocfgBnwJB",
  "key21": "Kc6NLLVZqZvhgcGDbJ38YTMfwwr2h4ZC8DLZjXL9KvTjMngNT3R69gsyUPnBYe5Jq19o4Mt2bBygNCLh3JTfsph",
  "key22": "AY8CxPd3rkjwEacKF8My1Z1iHeaR16igNEwrdpfdVpgy4cKQH1UWYaxo8Hj5Psnfn4jDV34F9uYpL3kprMTU36Z",
  "key23": "5YuHt5FzfVokqeg9FJwaSSqif9NkvgAFvtnbJtLYRVTbt7fz31GEC6vNHcdfRPkWESEbLZPpntp1DMu41EeXyJah",
  "key24": "NMSjYwCL2Yq8vkDeptjNejtiCrfie3kRHduesWH5FA1R4jJHkAyMuarTTeQQ2prCFreZM8FshpsYKLVzkHMGJ23",
  "key25": "52GMsKb7bGHskfHcVpm9MRQGacY5dnepbhKnsc4Z3SA1ZfoeZofroofVnhX8kQ5NwQ5EEskQQXCJQ1DEh2vnHXwd",
  "key26": "2XQJn3Wbatj5NKYVf3QwQmDGtTwkyppwfZ47y22cBnHAWqwQubCM2GKqvMSz5UDrEKRR4b8T5aufVx5E1ESbYkqZ",
  "key27": "5Cg4sVNbM2NKZE4U1SqM471zLznUMARD75pdpEPgNog5ZyPVW6w8ZpHepadYzRGkMmW5AVQfpnf2G2USeYGPdCeE",
  "key28": "bNW4wzyJGqPUj3sMVfWsKsRtVMn49q1LCU6s4uG5CXJzJ8vThNY3XMdBq4SwA2MboDBGfiZTSeFPrRCBTGeRL52",
  "key29": "5ZQrvnGwmQ6BQqPEkUDaatsZEbaHRoamaP3Ynp4RmZuCuSwczPReGVu6bfLxxA5RRi5iufE9gU15wPLyPTAihxqH",
  "key30": "2CDcLX5ZA3QQn3gigCXgat9CVVcNMzvczo2nN2BYb55en8bRLqXF25zFUiZUjguBEHBJrpukcJ4QjnVXLyUzUCyg",
  "key31": "249SdPqPNpJ8jwrgQ6krJ97TRiKVnUURdagXU2pbj8QCv5kYTPLzw2KuoJkPH4nGU1QbcXBBt1SCiMQPZ79g4SUg",
  "key32": "4Xj5CWMUP6tXsTC4TtBLC2BpGrDsYP2CyMWE6xqW8YuB6kVqjMtnnBapEP6MhYrs7yZnHB3HwgcyAbuDsRxd2gXz",
  "key33": "2QpZRbPyJMRDuYWCeQFB4iDx1eQpznBDjdceuuec5mbFN22Aif9WRAx9sayFJxsQu2TBtNuJEkps2C2KyyueaQaM",
  "key34": "4g5A6pTepsMVNzW2oJLxzTfAKK2nTRjTzBRK9apKhEq836dcduHeFCJneK65YDDQ9i5BNhtVcYUzXy8nubsdetmi",
  "key35": "47LDBG9z3tvP5DG3FG8YcESW6v2fUcuzZCEGHDFBq3G8HYLKtDhFeZ71mbUjiiummEA8KxN7myY3LEPAptC6ciUg",
  "key36": "3Nn9JiKvpk9mv2B7u7ZPwtZQjJy6ifLASLr4aWW4EZfsSZiwzLwY9DrUt84PjZsRvAyJARPsuifV2m1eD9xQNhry",
  "key37": "34VJvHNw9Vz219NNgYGbo3vZ6icH7myW23cZVjuDsZXJqScYj2of9UusqToXeQbeEKS5LjSQfJ2f4zLreBvd6nGE",
  "key38": "4z4LCyJvhaSWY8HJVrB9eJ569jvwVPc87g4G7FE2q2mWZLQVqRBmx4epgFcjKbsNGoccA9zQuDVuveStiGeD1aFS",
  "key39": "a3NPjR3wmeVmdAo4g2tvXnCuy6D5cveEkN7CdFpwEnhtHFyt2Ck3AqLtv5KnWs1SUqiS3m2BpYH8RgwAydNdxK7",
  "key40": "5g3QDHPst3MnGEUdx9RoAiCSuWC2FwSnsGm9GoW2NjX8MXtv9NfVXp1ZEMju4y6Usiappn632K3V3eZ8fj8cXf5U",
  "key41": "4dbPvgyFUGvsUWAXDDvcYrhdZM8V4neuCq2xtKr6x9kQaPWSVT9W6xLLrGkgKGRDKAs7zze8d8TQjS96LaimxL9g"
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
