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
    "3F4W44QXuovkXWz9oVyrGUE34zGL2nTPVF4jYraoagZhjbNedzPin8bBQG1nVbDtAsRdKxjdBmFwC5iawBi21gRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NkmRsaY3dokjxZ3N2RjAbDYZJ8GMK8K1o1ECCJbXsGhJrSCZjjFwmK2RhhgkhVakjhZy3STNEyj3kDavCyQTQ1H",
  "key1": "JgipAPdnBVWTmAT76ruyVpRuufbAyYcjjKVGavDHRTozticwpGyRePjArArV7LWu7Q387t9ZJJbhBDYYLBvW4NP",
  "key2": "2MNVZUdZ4safWvbMiEgQ32V2Hwk4x6FasNterc54BGLRSsh5r4e3pxfZw4zj4gJuHw9QkGA9uY8fa2E27f4VVs1t",
  "key3": "2FGvi8HvoyP6jsbEwzdyYJj7q1jC9GejXNjBgJLLJ7umT6Zt7pDpFXT8uJ4CHb9q52xE8Jphcm3uoaM1aaR9WhUp",
  "key4": "2btF6og3HY16RrV9xWEyiPvs5Pj1gtaNjBDcyVHRNAPRAN5VxC1GQLq21vGvCdbbuipVJ7gPM6QBeY2Fpy8agquH",
  "key5": "4akjNeLzLnL4CUyv1msgY9MKBUAusYcMEnCt2Say1MFnbvE7cs5miSuxgN6Zs2eBvVAjuLSkJshyU3to8ixCHETN",
  "key6": "3f34r1kthAYHN1AUKEqesFoCRLTWURpidQTvF1wFScdRbok5rZ8UwV3zRvtvpMzJ2rR3mAoQGLThEqhi6VCUXuX8",
  "key7": "24ffxPVnyE5za1vFAfPjxPaZgLwQ33E4dYQ834rPESTFRQyaZEKusdZ1bV6GkJEWWyCB4rPjHxNqzb9jwKjxK5qV",
  "key8": "4bQPSupmLpbqSuc3ZdSdSXDmTuEigYhX9ELZ3TXAZJ95FzZfnx7roi1DT3hLzwG6QqLF5xPjmacTrfH6jZg6rxkS",
  "key9": "2CcyCiS4WCVt7GG8s3DY7QwDasN8YUD6tqSu6gwpVHiNABaH4hXKtwqSoBDpJGiK9yJ3BhMQWszpb5iYy6hNFaPN",
  "key10": "4ZyG9VTKCA3XzC46vCSJ2wdtEJBZSfhUm6BTD1WTNgiMnS9edSwxXM2J5nSbtznSdfVJkLNi8BXWAyaXKWVr29va",
  "key11": "2ffHSMyfsbAvwL4hQ5w4hoeL2bT8DqmgLHosUW7QRW1umKYFebXFsq6fBgm1xLRJoQQTAbNN7Xf3xTiYG7GzTvz5",
  "key12": "3toekyeBScEQ7QwZwadJPd61oWYD3tjX12ioQqDG2TshEJEsqWyKJ5CAhpHmMDYvGUKqahhNFXyhWRGf3xqtnhBw",
  "key13": "3mtZwiaxmYHWG1FhsX7yCeHmHpsqjFRVY6USCCGiJnw1V5XzLEgDeHjMnsTKWBXTomMozZHUCdA5G2kudb343Uxs",
  "key14": "9ok2ND5kuULmmv1FzCV5CxaMJaJUASzfMBCTuQ6tRs4uSogLDRgno4hey7DLKhKpGnEf8CcbERF8eA7PC54bdP5",
  "key15": "2Kyxw1vFxRwUivt4x5BN7EWXAU9r56hiwni8RuX4iucmqiZEmeZKnr12ymFNk8wWcwPKXKFTdkYiGcMnCuSYtM3U",
  "key16": "4WAXQpqKy5tq68LZ7AEqt7rszMGoeY35HvDb1LFCdsovP8tAA7L3w8ZggE35Eb1srXwctnGFn84BEP1KkV6XUZ7x",
  "key17": "XiYUexbSvfjVc1kptRBcWyRfPmxL8TCHAH7pk6KBaxMDfyXaJ5BrLg4k7fPTp636qWcHwAfYm813SyQoJLtFbjP",
  "key18": "L1teZ7rdjEoCeSeKabGXfeGAxjS7z7SSBeQGFEe99uGVix8tcpaLgMtfckEbFT3WthEpjHAHrkkN1fub2SinZmo",
  "key19": "3ZMJBEvKo1eLnE7VzjHMV9nDtzfvtf661CFErdkpuGRn4yrecJtp8BM8AjDLJqt7B2UfGWzuB6moqURi6RgEtugv",
  "key20": "gUNpuGF7Q41hohQqn9fpnQiUXzYRwCcPNLs5GRKXD8rb95NbJvzL6FhAJHivYENUvUDrwqfYgumm5K7h7Vc8ffN",
  "key21": "tKBnFBLL1uopYx1mZMv9tifNsd4aKuNKdMrxWffqAEwdK3fQS9GnTyrMyW5chRL9KSjrMPNtMm1WAXC9KXAsHqo",
  "key22": "1c43mx8mYZSWrZik5RbZQR6QvPWvHc1V1HU7KPS9JvBxU1NbaELEtxPUkr7pa52Mcya42tVdEjvQTi5Hz7pyqM9",
  "key23": "2B787GRJD5rhwHnDmhxUEAswZ5M1QAKVUipss3HZLY3vhF9uhJDad25VXdyFrKLGf4ZP5kAy7qJPs5P2ao3VmU8d",
  "key24": "2heyZWeXdnuqfS4Ac97pw8LPqRTbKJk4snSt1ZpYPt8sxu5VM7BLUkjfHJ7PdBpV3nxBC1sf6hrV2vfyNHwpzFdt",
  "key25": "4pDBwXkPoSMcNkDzUBJaPQqQM84jM8UuSEpKasVrTLSywqZ95WefAicfWwDqUxjUwPHFArhYm1HfMayj1qg8kniH",
  "key26": "3MTHXYpxGCrmsNMc5YHfAChMBFELeoN2Q3QN4sAn9JQ7Yk9E5r5Q4rkkNm3G6ZNqo2uawsCqstdtVURm4LPLxwdK",
  "key27": "hpqffXXuoHes57h5zRCs5J7HpKfrCqjq6vsgxs4e7dpwL39UtsBu9QW1urX1sEFkqAYyvfeFg1XE7RZXLDyxR2z",
  "key28": "2ZqxxGfLLygCysr6RRcqsidhTZzMPguGRT4fRrK8DX9GcrxL6ZNiGAh1ap1WDGkCWjb1KS2fRKRPmRgJSHyCbP9r",
  "key29": "597vB1PPctMjiCx6bvEFXLubPCvtL2wsBk1ToJuchrg6J4dvhW76bvwwrRhH9smPA9QtQrc2wJfMnmqfuzQFvs6",
  "key30": "5PUm9ZGPHLKbRbrLmhSCn6tj3cgirVjamMmvdXQZRB1w9VjsN1QMbdB3SxqC6fu22R4rWfUzY5AuXhPnKg5ZyDtK",
  "key31": "62GSKbFXKeL7WCbZwwgCTUq659pufvJA7jqeyLyQtTzpoDigqyYZsPX66NSFfhLtMrGiJEv2ow5YNq7Jo72gAz9W",
  "key32": "RzL5gcP8cgzbtLRJV867jwWBEaReg83wHPw69zhvqBYUDnJJuBXMtssbxB4omj8cc2LC8GQMAGHaAoVmxtWk1Ba",
  "key33": "65GGSJH61xnGCVgu5grU4nDEUMh32FspYiS3uNDPHSjX5Pt8usn3D6RUGDYU6PoJHVvRnJGXXEo8GiWpzGwao7bc",
  "key34": "5MnqFNTbMvMzmtt63HkkswNbasrDjMviA7kwch8VYtUZc2n76uDs93fKoDuVBbyy11TvYbCoP6QCFk4Rbqh5a7Lp",
  "key35": "5F2isotsx98Y2dZXpjzpHQcLsRvyi61wn48W4C4WEEXf89JqnKw7UGBen4UBYquHMu9cj1qwux3UhTUtS5y2y83p",
  "key36": "3g7osdCDo96NBszDWVCb91ztiNfYjR3hDiTdnDJaSuifcotHZxZeJBRfxVpc8eJF5S79swzv3bGspJQX3RdS1Yjm",
  "key37": "33aT4qWhsFmAiLKaYmQE6ZzoxYVkwr77UGJtLVYCDRwruk5k3JQq99eo2yDaN1N6M6XTU1gpXJH7YH1LobCZJHe9",
  "key38": "52HpxndB3L5XheUgy62wZXSnLttx3dRatMSh1BdtrxJ1JprtbRsT4ctFAkMDcMhhY7F373u3jeJj1nGsxFPzkJZU",
  "key39": "bZvH5XsjV7cN9hdf3KWxbTXWGajQAwBGtwvkoCNsYM8teAG991mU2mjqnXtgFk4Pkht72Bz8kgDxKiqDDAHduNz",
  "key40": "AePAdXHwUaNDy1VJJDJCXU2WafdrAC9CQVsF5GiwvXioSAdkUcZDLre4RyYdonB7Z7bBLvb4GFRwcX5ceQBZbqm",
  "key41": "42jsTeV3rJE9fhXe7Lm2TahKRaNPi1iSs56KBvYJPEJxArC7LXkem91yC3LBm83vMWUYH68VizsY1QUDFvwTYwKS",
  "key42": "3Ye7CpJwSE7KjL2np1hdbb3hordnfvpgaT8fP2hv1YACHNw4yTRN9Gmsf2MUpGPisezxJXxYHyxzkHi8fmT5wmbQ"
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
