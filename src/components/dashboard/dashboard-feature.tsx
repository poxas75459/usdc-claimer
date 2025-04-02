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
    "4D4GgCUiaSWa8diVEkHih9RZiVEeAxGD9JFwQdUn4btsb3DdRvRBSGW2Qy9pXw2MQ6NHtWto8ZVoTCELbuRPY7Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEbg7nL7pEeRi88kVxQuQmPDynsT3FGkWTRa9q2b5mWDRfcikQaB3nMmoQZP6qZZjdyDkqb1PL2yEFrSV23axd",
  "key1": "9eFemwMkSkm8LzkxuDNoNKmUDxcS47vpaT6ksQoiNQ5dkyS5CPfTBsYVBfo7UKcm2SkK492ctGopTWRzMns9zrW",
  "key2": "3ZkHPf49ArhERMweHx9JkPhFuJTWPhqJ4vAktBwivjrk2YbZQXDoMxhAfbRy5M3sJg6xBcx8SNJLqtRTc2kNUHZi",
  "key3": "2nzRxAw14V1Fe3PAVy2ENATMfmuwuGnW5eDGNW5FpzNYN6zhJtvS5c9wvvamQRGo6Wt1a6Y1LjdVxZC7KSQMwkkp",
  "key4": "57JQF65QVD1YFiLANrzmXAMSEyntkQABL6tsMzFJs7jzqZNwk6Xwb2YCvahmpH7o1tESvw681j7XmgGDtwgx1UES",
  "key5": "74hnciLG1jvmCuoYgFRb1hHpvkZF31di75U8qewvBpnuqQpwwadcFKZ5yqpRA2KUkpGigQY3UYwGgheXQh99S3h",
  "key6": "5uaNxM93EkDaeP7ZhjhEhtCCVG7QTxkGNqhFFLk125JxqFQh9rdsj4nnQJwrhBjUA1g5HzV2xNCHHB2nN8BVcCsZ",
  "key7": "2uft6X2ru4ziATZhjoeAuJLMw4a8JqY4Z5nVUCSv7ZerMLXN8XBfdm9u3jtegzHMp61DUYAcM2TdEUujvJf5dBJ2",
  "key8": "3CDmE6CDddWsgkChtX4zoNbNQwFhjoFH7zhHZuikQ9Xajo1T2i1W3vkAfbwbBPvVtbgYXgAnrdcSxGE35GxV97Z5",
  "key9": "2Bb9PXZHwmoGyWPaoVmNuFzGEawAqRTnN2GWjVt6CwLEdyUXXCU2oGr2XVP8QbXN4CQBsF8DCrJjSaNh1kwGNwrp",
  "key10": "3Cw22tU9zRJUBHhyt3W7ufGPT1NXqdQD6YpKMGQ4sh8avuNKb5mAk6gdjwKSLAMcgoRqP3Q2Yedj56m4f2NJrHDD",
  "key11": "CqPKiBSmjRDwTq9CNoTt18DxmKrU5x4jaEBYDBtf9hB3mJxiRo7Jvxx4s5ky9sq6xAe7fAKF1BXzhnQo4zrL2j1",
  "key12": "5dtf34jSQpP4NP97YRxfNdAM3o37bMgjqtCquKBR7psaEoGiqnzS7zmk5knNrEN4KsXfjd6qNumT56hWYv9Df2XU",
  "key13": "4y3YFv6xoSuVCvZW4Q2vqJvK6vkXjwLZd33J2aAaWeYGi9KwyqByDpjE9FdmN2Hg4gK1xQ9m9Uy515Kwy1m4CWVD",
  "key14": "khrW2L71xydrDCQW11Tbz3aSmAnVr3FzydnRVLD9vUP3VfhqoskX2aDB7au84qkakEkRDbwQ92dFZHqw6aBnqTg",
  "key15": "582Z9pmgVYFDDhG8F8VwArxdNdDZd2ag541mbaGD75mJFMZr57Zx5TT7qE5zRmf9kyEappKCRX8WTfspnxm1a53Z",
  "key16": "4oKE5UYzyM8LfNEtViDimNSaNiCrGtMv4sDU2zgCi7BR2ezgYZaR2EznhfGuzKuPfoejxAmTegbqtkohrSqbYgDD",
  "key17": "4LvGQqFrWbzm6oKALYZXdxWroYnDzTYbH5XeaX7V9LipLFbYEuBrMVsHgyouoKGWZn46vgTLFLLCTDFoh6h2pbs3",
  "key18": "pdf5oBRofYEzF6hM71iGQ9xQ8xsfYMcDqWDoJKc5q3F8UopJzUUiyKXbDAcHW3Pxa9hdTo2k3CxU3VDkUphbTGh",
  "key19": "49VzwHig3EVwUJodVQiDwZTWUyW41xS4VjnhAvk3sxVosF7fnoKAEU87Y5kHHZ7RSLTeWdDCo5qCxH7B2XDZLHSQ",
  "key20": "5RGYr9QFSjeYpyuK8fAfZxienjHyfwEppjHJdYLSLtspejYnm4aAhcu4nbSyU2E8tHx6KNoXAD4VQU9aAyyDWAfj",
  "key21": "4S1jzR7JW8NWZLGYN5gQbH4qu68y8oR4USP1uhW8EPb9PemucpfCvqALVqS5QD7ZNzBE8cFLxfwmPLXVcW9XrcAv",
  "key22": "3LKuvJorqdnnPYqHjZfandoedikQtPd8o6pE1VW2bBjwUqq2oPh4hSiCrmbZCgXfKHYUwL9hd2mMUsdEt6ELryNh",
  "key23": "3qdB9NtHVwiFRtkGbaUwzTPPbF4vwD3XFT3mk9b48JZTfFZtmomGWGMPUf5fesLfMQZ9imfYRJk7sQpW21PpehPF",
  "key24": "aeyb6VnRsbEAcQVCSCAgFPDL28CUJ8Wi83eejEqPHcp4yb2DBCsiUxUoHdYF8i5brzrn6jzY9pcREUBuKW1hEof",
  "key25": "3UiiAQzh5tFKD3w6ECooY11fsLZrs1X1FDpvmkGUTDnWuU3bAbXrC6UGjxanjAfzynLbowJAJrFRYkYGRwDdtFQV",
  "key26": "hNnjqY64Peod3vkyPEQQa8uXWjioHd4Shx8ST137nn67Tfa2gzcRpPPfi5LoUVz1k1kBJno8Ccw7zB7QgJEAvqz",
  "key27": "5hzVak6MUBGUtXkAGzC5v2dyL8ocSXF2im4WewUZbXmEQHTh43yaS567ey8m3K5mjA3zUXwnBSQbJ6vd2syfD9Sn",
  "key28": "5n8X9BpvfBTn2qoEXF1WbUZZNTYYRPeSKX1S1aVTb2cJQibnDiXiAWr3cHXM8RVE6TexYFKb4VznrNyeWpK9u1EP",
  "key29": "3E6ncFARtPiVUYC8FWkgAmWHfz59msUSKhfg26wfRNigBPUppp2KyCUiQBuPnpb6Ks2nm6UpWKGEugKU5ENY9JEu",
  "key30": "531px3uQGLTxKad6TUDwZKnAyYkgByxjmFJPXadKo47zNknoJbvkjTfJ8PrBnQK5PmH8jKhDyXByzxGzehi2wRVC",
  "key31": "5DSAY4RR39LL4Dwk4sivH9LkgkxLCCrGmqTpL3n8mr6Vebi6WLg5setyGjdfCNLyFgQTD9nBNpvFwe95egGWi1t5",
  "key32": "3wp6RzrRgDPQLXistp5m4tadmCETJxBhbT64wQPWw9nK4cdYPyajzLpzskeCp1AnZgLfLZ4Zv6vbFoZ6KeNk7fH9",
  "key33": "2RFQuosvKPZgzerAUTok2CeHiH79BVLwwc89ZJFHKdUkSCRUF1n5NNfzNmcPy14fcWi3j8YcFtFwvLYfnXpDEts",
  "key34": "2VmHQXwQppan6qbFZqwT7VxAfdJV4fRgR9bhBnXq4yP76SMARF2tcKo5Tcx3k9a5uFqsofXWvSoBp3br67LXB9Cw",
  "key35": "5raAddMFctQDt2XvPSZYodDR3Zi7KbzQxSMPnCdw2s59HtYWQkcUvcTgDDZErEE8QTYhXgFugd3QLJpx3KagpuEN",
  "key36": "5udzR4Dqev5ZfHr3STQ7WHEqbEd1T8oXH4h2hJu78K5ssG8JPdF5hAKVM6Zje8ZFkWDDtG3hofYhtxt65PftW8nb",
  "key37": "2ifZWVPUPZ5hsXojTL8hcRwU42kEmu6qCtH1U2B8CuDrt6KS2tGa1bd3hKRRU9tyUdaGXk6wYS9JsdG7nFTC6faw",
  "key38": "5rLkj6f3kT6jimNyv1BehasZ2kuGkKRPBbQfk3HqTQtnNcXmtrHYdeFfyxkJupQPCpZTUQ5T65PHwJDfBXzjjEe4",
  "key39": "2bWXs7VZKm1gaqEJ4tbRjSAxnN4ijvBaxDXKrvyvPZ5Zc52qdQd6qMPJyJp2EmKgVqogfzMjZqv4it2UpfCU3jFE",
  "key40": "LCKgEipjq1GPqUYn7tR3udridvavc3uWcWihdJzhzJYoz3XDNMPu1HJaPzmHBB2aZfuPwwhEXFnZES8bozYJDeV",
  "key41": "3PnUVi6z2kAdbdnRaVCD37rcS9MNyHhuSyCi4DDwfsbQXmFBxwGDEgYdVA8ZGpi9sAPbw8zRYz8N6dPxsZwPS8R7",
  "key42": "3gm6TZe2qd7VoBvDePPLzRiHmA9QfkUuoVQAPphyK5BQv3wpm326GWZk1pARZK2G4jw3D1dU6D5Kfy1zVGSxqMy8",
  "key43": "5UNJghaAUzQfd5QCmixrC6S5rwLpDQXj7s4rPDf3Ub2u8CqciYYvuHvdMEQNjM6dbxTZy8n5RptVaNsuMKMHQY69",
  "key44": "33z8K6Bqz2uzTUNgVVyHi31HfBPdL7hRzohZQmiGWzWYhEL2w3nSEXbBmtwevv1nRhTRcyApGJWLmEu8vTY2dHXx",
  "key45": "3XYyjsUAWomqx8LRhHiq1vhZR3roqTXMqUczP8N7NftTFeNGoVurErfqNfr9dnstZRJonxMNm8XoQqsUDxC75237",
  "key46": "4yiRjKdxE47rZNA4AxeaHNMZAYHmdZjhqj4s3ADwbBLfXDc3UtqtPZp9NRDWhWPqPxebR4qCPebT8uP7k5YM7Hru",
  "key47": "kTaiCZzC17GfUcBiAUVgPDsuqZco7Bux79c2Fcwy8BdvjvLjnUYVukRpo8C4WgkkiuBKTsa6ymr5GFWYU7deoGT",
  "key48": "PsZ8TU4oDDrXYhQZiZQGhCYENg5ZSkknEkdsd3tsyjsBnCb6XBmLKNtWc57dc8HP4nNhDuJ3MP4WeEjnLRZHMvo",
  "key49": "4KqvuaDAbVUYWSMyqsbPV5YYaVHqoUudGkaTGgLeU87z4rjDwPx7LFZWKPjcg9WaDf4xTKzfkhSVUNmUVmEznY9N"
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
