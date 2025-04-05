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
    "7RJNy6joJdqwdC46GEarpoQNDA5ZV7cGodQgjqKZDEfU9jwjnwMQxr9A472fVfoHoBkiXRUVkyX6JN7SCThGtBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LHWUU6eaGSvr76xBdQTeXCkjrizbnnbC4aEvfnqQYuaKEGgijKeGrqAj6phSG7DQCFD2ngAPpbXhJcT6xZqy8ZQ",
  "key1": "4xJd1fHQWaC1m8RVDV6krNCqAkV7pNymnuV6DHX83mreyc7T85PuqHm7dqV2GDv7oQArcnynPPdjqDPhQKMNf34x",
  "key2": "2zqh7TfbbNWQwvBxo2cnVkgTaQuh8YMkMZc3qbQBW8Tw1cSx5RT19DGqDvVvtNkFCF66FDRuByNZM4xDeHzmBMrb",
  "key3": "2Cc6BqqmccdJm4FArwFq5tugDNVKu68P3NNRhwHxXiVFUja95H36S9UMS9kJfVGNfZUfFadBW145SVGkeuC29kdD",
  "key4": "59GRwFJg6XchQXmvHXvq6swU2PPPUW9B7PhmRY2mdRgdDUEFCURs612EFRDCja3tV79KNjNbBzJcSdfAceZW95qE",
  "key5": "5fbh2fBdAE4whhNYsbQLSC6St4UR43DYb8i8j7em8rqs5PyAQAeJ9CHtH4q6LAqf5YXkMj2LAuBm7pasQov5q1qn",
  "key6": "2t9gKNQ1sEDDK1zWr1h58EyusPVQWvnsBDA4VCK7b6sfvd4rRuuq8M9s5LvNZbb2vV7TEt92xmpeSawwr1uY76mH",
  "key7": "23zLbexdNaVUsbsbTMTVripbkUpomrzLrEHqd3eckouJw1JsFvN9g72bLo4LxfLSASTp3SQFKG8vpVpaiw8h5ZBt",
  "key8": "58km7emfUtPn9SBsqcxZT5AKrFWpAWpCN6dcU6ijTthd97ZVnFkKNVc5AtwjMwHijkLcMcqFXiQCy6tVxKTsPWzN",
  "key9": "5UreUyq8yg4GKk8jCDnx6ZZS94JYTBbvtb2ts2m6S8kAcS7Gm2UPLZiGhzDDCNGPEhyuNKm4ZtJRAbssZk4ksqAM",
  "key10": "4TyGYzWX6wBeiKHNAzBR578n6SFYfL7t6Pad563Nze3qAhdDJsz3VPyPsfkh4XZJDzR3ssVquWU5VomDzL5tCxms",
  "key11": "2skNN5DAzW86LMw4fTTNCNyzhvjDrrUrMYnxwNcLmMDZK2HhWDzgQHfEqNwyD3bxuMX2qcyLo7QVCSSPn44i58dU",
  "key12": "A9Ss5vXF178CZQ2KTREg2YoPKgnQy3PQbzduX3sgDErX2n6kejMxwdFN1k4sHH4AJ865Gi1RdhMNDevR9cpsDpm",
  "key13": "3H5yibfq5FtyWRQKiHhGiF8edgHjTNeMgw7NgWRAyhaeEQeKoetDcwukXaGx9ASDmqFPayKpxEC3NFmdqWULXDX3",
  "key14": "3VxgbikxMkovt3FVKUpeuzikwuMvvoy4ygiJAK8m7Ee8aJAFRH7g4mBmVUfHCK7skD4nsAi2XhnXiLLc6W9Z7Gep",
  "key15": "5NXSmjkC3ciF49F9F4s4q4bTTqxUZnZPjXKmrviPgCuz3JbkqVHkZYZtmLcETEdLA7YKwgpwU1hKvYfsoNEiqNA4",
  "key16": "581dne85t4u8GHrYXFepHzcH7LceoC7jyhUA2GJM4WY6wxzah5CevML4p3Z5wDX5T2NxPghxiTHJseuCcffGfdN8",
  "key17": "2a8RPN6j7czqL9rbgL9rLRv49PACvmyDGvZ5yStXKrJ5DbcvXQiDXWEC4PUZzcUXXYJ2S6ygKpN1CBAsmyL87Etv",
  "key18": "4hg3hb55USC8fWk3UmJh1sZzNCMXreq1djPy3KsiE21ohY4dj8ACvHYYt9F1BgBwoRErwrPsXCnaQLKqvU57ESUo",
  "key19": "2Q7yeFZFw7RTxr3bVxu7Vsdek5kwDjkk7TTH6jr6jUyPhrjE3AigryMyj2dtKa39pczQPfaa2qiRvRJcNGUR8A1e",
  "key20": "4xGYNkLoucPAipq2aHqgBpBB1jwd7sXPk5RBusCCuVc4Gc1iUmebq6LyqPR1VQHcJAxuYxHF69erKsFCdzBBwZsG",
  "key21": "56o7UZJDU4ybzco2T4QGvZV4YP64ckmDqRcc3m5BYYrbNJ1z87VxsLw2LBF4JxEGHdm8dEG6STiXksPUAqm6Yzsx",
  "key22": "ovcxqKR3YtQuG6ZeaH7YzcZPJhMyHjSKyLc2aiCRdetJMtKT8oxqKFg3BbtAUcKNj6qSUgftC8fdY7FxQNhEHSf",
  "key23": "5yHniqArm981xnJJRMcirhLVWjxsULG93169v7retEZexdmcjJggye5VHeY9E9PpFBoeB9ZuXHvxCRZLkF7Xsx4e",
  "key24": "2X7Pt7n7wfLWi7rfZkxBDFNAVbv9K4mNBzko1WzKkr9NveDL9R3AZr2uhG6crX5MXMLj2abwZZdcEQbSd5aa81ig",
  "key25": "4b4SCvXW4sZPDEnbacnqZLpC7zcYi9Nmo36RGvgaZ4KEXUgpAYDxxV5kXFjM8joWggG6rwzVnYetCUH6RSDSCtMF",
  "key26": "59BMdSmqSUSiSTaqqMr1HzXeSQ9SE8S3c5LeNsEZbg8ASRWKVTyypyGeZQt88AMx3dw4m6MBPT1z2S6LP5kJHNcG",
  "key27": "65CHJtyJrNh7udCcH1mhCMS3oDpyDx9cMWySqaBsyXYrQdQ6DeFt4JQ82KMn9NXUUY7QPyPA9e93rCBLuNchm5yY",
  "key28": "H1ooQfn6noGXfxrGkWJaRQmQm2sa2LWtqMcWZvvrcSCNScCAMDbVERB76V3gkLsB3czretn6y3vKeQWzHRCpopf",
  "key29": "2grPiFsj1P1cYGhrmtoYwFAhvmqFYKJpaGqizMG859EHzfUVyfEK4KtAnGHARXZBzXgDHs6B3KFRDAKY3LBYMGLB",
  "key30": "53SQ8hQJgJJkwaaopjFZ2JpwitkfUPRW1GWnVAjGbgb1SdZC2D64GdTv3MyPfptydgHY6sW2yNAjgBbb5qLXUycS",
  "key31": "5eWAt5DqNCdB6Yq8JqC2XTUTeeMA4YUrgaG4KpNyPXC2GLszALKGtEpxbjpS7Zh1xKEmvocmNdWyXC4p95mWu91F",
  "key32": "Pt92QFSxSsKBCt6yX5Tb4jJvccvSVPhkyjQKsxs4ogQJKQmZMzCqTxAyrenZ2Vosy4N7oLUeajaKZrvDFGfzcu2",
  "key33": "2ZY3ZKctgLfUds2DQWWZY6Q3t1DhPSVg4LiGhGmaw497AUE45j6Yd1kJPNmQ4k2wwps48eAS7nGiFRp1PzM5DNz3",
  "key34": "495nyDYsex9tAeuCSYWPHRUAD1y6s5KbGs4yhruky7DU57nJS7yRUmXqNY4SRLDq6h9h6todbhERaSUbRypizUfd",
  "key35": "4dJz5VY46oSrsykt5sbHsr7jznjAQcxJbc6cSqSVBGXaw1pYgZG155gMJU9Tae29iXpf8J18b1q1nRq1A4ASobev",
  "key36": "3YwxoVHCsxwweLuQMYeSLeSsXXfBWPhXG2LurA944Mc7WaR9P4DqNnifwGiZCX13AeyFhe6ZoFKNeeREqkonWkr8",
  "key37": "2Ff8Z4v1B71ACKgzssBMGtKX6X3rfFDBw92kmgK2NtsMJhSjW6JwJHDqRAT9ijBezKFg7RXtUbo8WMP1LRjfFkhY",
  "key38": "55Z7ySTSNXmmLKv9mKEz9w2ngsJJ7TUkjxGs24JDsYLyd8Qjd5Nxj6JgXhxw3QRhcWQrLXKvtxztNsGhLYVcSder",
  "key39": "2NmMCGqAY88d9Azwf964e6gu1aUtK1sbjXeuNSSx4URnSscSxZTpLBJfAhoX6B63ag4kvXErnDxm9rmHH9tqvowK",
  "key40": "M1zBQ5RNaceX14nnPQxurhgKuH6j8gFgJyikXGaTE1XDr97aGWovgs5wfdozANoLCEn2yd6HDWjbNqbbnX3HYNq",
  "key41": "5hNz6RPvQZjd1JC9Ntw4AMcz2sWpgQtsofkX1AaPxkaZgvNguTbRf6Xu8HpnSZHedaGf6hrEnGFCwiicPfLfyge",
  "key42": "4ofL6kw4WRK67emAVGFYBaTJG3e97Foc19CJuYnnx73huhDBbjYJVpQHba2EJshSDmbpqrQVgnhqRic5SZeMidBK",
  "key43": "3Hoer47aw64wg4u49U9hBPFuqxXSo4hYXCpUM3Hpv8NzUDRCkCfSivyacLWm2bhSakSQ7o1RfmkAsG3Dq1ydvoKp"
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
