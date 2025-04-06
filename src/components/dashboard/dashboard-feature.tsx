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
    "4soB8cKdWtxjPKSD3WLomzumRhx6NxQpfyC4BBvQmvcaZYith9zFBixfjJdcx5XhXr7X5K1zgaRAAwFBCSHthTtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nr6nYuxHe43xFuf2qbwwsydpKDBJrJZ2RYYoX1P8DeUG5Gth73sUi8ymL2UGNxLQ18hYM7Te2uc1eEcXn9Fjpba",
  "key1": "2dqh9cfKwxvYJHkzqiZwkTpRaHhBRTZgau5oUMwHYKoQcWZkrN3zUjcQdoHMbZkEwtQXpp2JJjzNXHa4XaWMDsuk",
  "key2": "3cCHG6hAtQzRtsFMmpQ9rjEm4Uwi7DidFiojcwrunoBeZpBEFPKf3rH5HF9DLzzXyJpuR9e9eCaUidFzFnUQ4RT3",
  "key3": "3KG9YSPdbk164z7pxy1mdymwoeLmpT2WbSGU7cJXZeVUrMQQxoartd8nJjFsv1UVZ3ArqFunV4zCo6qEGxrsJa2w",
  "key4": "BJiiVnsmcTfUS9T5DRin2r2XGKtYzNzoh1FSpPMj4XVvKn7yFLL8f393aEHEGt51NyFexUikYX87ALoq873biqF",
  "key5": "4BgZvMGCsahNwDBELB42DU9cmVEdq87NXK1VciBTvcoZPu3VtCpcnLZthW4imC3E68MRkxpFmuhMTcfacQb1r8Ak",
  "key6": "56m1pojF7cvYpnN5se27VAKcWekVcaqaB1AKr6X8NWcKAbtfzGQwFHfBVMcdM4F5MnbaFiUEbDhuFgKfsi4NbnkE",
  "key7": "jqS65bjBZ341Ad32nEAPSVvtACQFnVg2M9zFHbmr7aTvAbPNHmp6bYZHpdLSo4SaNCJBa9tH63zTbjmRpNRAYtu",
  "key8": "41Q9U2jUisUh93mAoPCZsJNPdSXkD6NJFnRKiRBYShDjrhv8tvtvuDoyhmAup7bsBw7M9QWyCo8X5gUUx99YcdkK",
  "key9": "2nUY1pXMoMxeoTUcVVKyBwRPXVFe3issTYP2YDRP2Z8gBUb6ecPppxTo67r97PxxYrDxoMDyC79Wqs55nUcoLSNr",
  "key10": "4vtCJZmcMawDV1m9dMnJa7SUzLix53GTPAmE7UBrRjwMkaWtzDCDjqUSZuBN9TtQEp2dbNabLxSCXXvQKGjkK8Ku",
  "key11": "irVAN5vkZVMeb2RpAtxyWTTa9N6QexgLtbB2ZmuoGCeWEztUkF9UXi2JaYbkxHESwVxhbZ738UYFP7MTx5zN1K5",
  "key12": "7BR9BVqvtpcwCG3JeqjafTDaSRq7AJdewxxZDC7UP3GvRi6grNvDDBtz33uRumjCxACzDmG9SQPY786YAKMVyq4",
  "key13": "UJaFUkAEFU2sMYA8ReTxcTNDc7pbuNBvYxMgFL6UAPGbPdKpQ8S1xHKt7rJRtUf3z9yJKGyvTBDYFdtzYww5sgZ",
  "key14": "67Cczh62tHd2QnwkMiFz8WN6ZEAQZoBhK1jDheq1nYucmURSdpTfi3y1ZpeGFpcW6z5ftX9AghBr2cxrYHVWWtFn",
  "key15": "3RYPU7zF6Ej284q6dPHafYr9qg5pAAATr9Zgx9nAAQzZSsVtgkhLJNanbtacbhYBXv1zNaA3mDg45wtUWFWBGdzS",
  "key16": "5Y8i9ujfFMQzqQEZDLJz6rviLpbJo23bTsxQVVSzRLvJfUnW95gpFDMQQGVTD73zbhFCAtrjA4AJm2zF62zEcxpW",
  "key17": "2AjdDNv9Ga3Fjdka3tSV7g31fHmjjQZrd6sHLJtDbZPq84TUwFCSA3FCVsz3eUHg3ZWvZ6ct44Gavz1TSCv8oR1e",
  "key18": "5N1rjGjNfJtMeRWeH4MVdmjabqmtK1y23fTwT6pRnXSdXC71XH5P4GPE17NsVTbZUWf5uhhnJLFpGyDZi1iTozQx",
  "key19": "2sSEVaLWLSKaNAYdub4XB2XFeM5pVD3oKES71f15hcHwRfNZsfLr8UmhUKa6oF5hfX5QNDsUoTiuufzceAb3Nkju",
  "key20": "22DPdTgqGWzpbtM7LwWAne1rx54GPia6xW4nRDiUCuS3uD8YdXhDD5VwJDT5VaSTdoFmS44zGrc8W5b98GGMheqP",
  "key21": "3x5vrbHWT5KKuptxhUor566P4P5X45ZUi7znn9byFLKKmh3YoiL7aGvnS9PQ1p4WCc2bpzTf3DrvWHShSwrUo84p",
  "key22": "2WzmtTeUweiyGpnd1trchC1rAqYpVsqvPcJbbUjqR5T5wVi3KEjsidVK5N2ZL66SpLNjrtSy2Zf54ZTBpBKS3Xj1",
  "key23": "2cELN8S4SjCZu5buWmZo8S7u4ULUtGnKcA8VLj1jJxV2ddeBwSnzBimCWx8oifuB349TmW13vNKmx7dRamSSLe1S",
  "key24": "56kBU19eYzS9KaWvd9fGB4BzMSVzMGKUnHvqWsgdy4P9PiTfYmysDM4ibwR11MKXfsVmBjJXX1B8XvjKv1Mv8Q6b",
  "key25": "3jzqd97tJzuFCfiPiJwLBXGkQrtPvnEZPTmagBzgok89wGRggmhsPWrUmazYto6EaFZn3JAKFeq5iKDStkpbwfeH",
  "key26": "mfNRRiJQ83LNqdyEF74DBd61xyzAinCp2XmBUJ77CoiZ2vJLi1cxweYcNzzecWuhTKJRCsPyPqskU99qr9KcDC4",
  "key27": "5p4Kau5FiMPBZaBrtD5NvePENmWPUNUVt8FFNF9TRJruRZTrFa99sm2UnE7ocbjoQXyEB49MaoXWDJEFq9rB8VG8",
  "key28": "62eSVC4eobdJpc1iQZV7jGbbQ4SLMZNcRR1thGszuHcfFAKHjLmPQNnSDKN7iikkabvmd4xh8MqWD6egEx13hEj5",
  "key29": "4Ln9okc4x6cMi9dag8yFRGNgiYqthbZH9KKj5mcXWRDu8yFm8EhQPwN3VwEX2cwZ3fEM6MmiBrHxQR8LJnZEso6b",
  "key30": "4eSc1eRu3VWr3p3fTFUt2GMWb9bocxEoRM6XYa8Ly3hgs8R4hyvQaKrWP6Jof3wqu6CmSBL1cCYF1z2X2CYyzweM",
  "key31": "42HaXaQa1hvYE6A7ythz1iUibrrN1DztUVvxFAAPEedUMgiLjVq88yBKybntqXHKJFPsUsiVXBTAM4wsQbKWa3io",
  "key32": "4csP5VEtpKTdzAKD685iAQk2pepEVuR8M2ELempYvzkx9tq4M7ZYSngV79RpgpwUAndLH1ychdbZ6mxgaA9MibJb",
  "key33": "2t61WQkPww3rtaeCUx8sEUj1MpH9gtY1DAEfLztgage318rivK4R8d6ZxahV5zePwiEse8WhGeqNsrP2iadn9uqh",
  "key34": "mN1RFLQ1hEP8UW2DL6GU13iRK7APD1FmDp4Peqwk7Cu7owtkVdziSVPREmy2Mbzd9TxqWCqmzahgGh5XQd9Qtnm",
  "key35": "3Zxz9RGoM89qHukfRU66TzVaZrF7E6TVV2EG2gMx77QjaMitcrWiqgQvrWwuZe7b2vhZJbUcXyP5KhHb3pZSS7FG",
  "key36": "2LMtXa7RCJe2nTsGmJYuHEgFzC4E9Svw6enKrkqGECrEQftaqnsyzWj4ELirjyQrtJEeSaRg21U8qGLQMQVvNfmg",
  "key37": "2BEYRQSDnBowHZ5JjPrpxF5VVFbuWpjod2nNrVR2JphsR7SSdw7NEJh4jB2Db6XJGLqYDmTJgrSbLm3ryQws3pu5",
  "key38": "5qCiwvA2f4cRPBLN17wRuoLPVLjj4k8jquDCgLCThpvTDxf2bRs2BTTtMjHhVSB276Z8dXoDq7B1Rm2mZXznC27a"
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
