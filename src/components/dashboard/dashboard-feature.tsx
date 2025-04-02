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
    "2xFRxQ7fw2GpBwpDdbY5nJ3n4pWUxpgZiBd4bkL8aQPyjFwk4fUt5e6ZdxU1BJaN6fKLC8rGJ5Pjh6G3PQ46ypZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myqTaoWvcc8s3GPHB2MSmb7uwPw1YWCQi2Qxn9ZsDR4hDt2f4CMs98qETwdTnvzRwvmCTR4Pu9ni7aVWJNhEc9D",
  "key1": "21t7EqKW9o7pXYvuabJZQVRRfdruLMGi4NNTixH4viWq1CqqT1xt3GSAAJTF1Swc1rQ8BWcUZwr4hWJn8LoWaEix",
  "key2": "42cjfreRjJDQEEKSDWPznsyWFdEpujBMiVaBggMsXzNuZAFHzcTBZ5hzY1QUfhja3xSxdKgHAiQnPMx4zaZVsjqD",
  "key3": "2vte6gEWcHrSTk4qZxeJTptttXhCBpMVuzgD1LM9RjWnenzLizS86eyhT41Xif2yAH2muV5HLFRP5GikEcedumKv",
  "key4": "5bhSi1GCRMGrB4kmRD8pJHf6HNJsfGrFnCeXqQRRpWaZ4dL4hnR5JBnQXMgxAU97qz38VtoKrnphU7THDw9Y5wwD",
  "key5": "4pYPh55SanLL6Ac5JQT6AsDtPnXbov2dTwbCNSoHqrZfXicQQC3LToaaW8MvU92TRzEV2AoMH1efifQJG1C8PVD3",
  "key6": "HnRL6VL6a8TRvHevtpaHoduzzLEqp6gsyXv5Xj1cd7fHcXKPt2ZvMZFztLktcUM6m6C9UXPKThrcvV8aUhgccpY",
  "key7": "2wGBQDLQPv3wZfoq3vp2o8MX4s6LLmKrjaJnVQsr3ytyB91kTQHMepxa8kwDJn5H1Zs4xhGbt4YmQ4su4uKXAa71",
  "key8": "CBX2z2NLvmCNrKD89iVkP2ZZ5AH1sqdVbaHnzatjxRhHWqr9EMyN4hvND6Mkk14SkQ79FRHsNrCvg39oMqgV3X9",
  "key9": "2wyAmteVxA8TBbmHpcC3C2KfD4phDZz69iK42NzrG9Fb4hgeGdZvrmue98hG8aDKK1GEUFUVRfcyS968Hr577mJW",
  "key10": "3QY2KBwAEPvMvE7vbTCHR9zoanUrcHrnJCRF7FiDG4j4K57gAEt88kPZ7zPSK4yhzHWqDGNqbTCbA6sVfkS2KqUE",
  "key11": "435paXWhcTxbvHASNFSw4wxpctuboMCSvGAANxRoySfpri3ALVazojL8q8KdMRLFHxmhK3Urr21UHRwc9JJaTbtY",
  "key12": "4ivxXcxNiu4cJiQL7eadbKGFdrDVc4TyXdo2hrzVA2n7XEKSduEunPJXWnFkNW3ackKy49UeyfAVmVMe1z3Ki87F",
  "key13": "4DELRvxXf4DgZezTaKrRtbiMTnQu59zASwtg6sLm3YgKpGqvNmooRvJrKGxAXyUtpu6SjXNy8qQwbcGHdmP3psdi",
  "key14": "2UeRYHxmbYvNBHdRorfLxaQSfjk3ufbrTpQ8VpsB2YQGG7Mb65dLisrf6Vitr6TVT9Pbwv7V5VhXHGJ5yy31NwrT",
  "key15": "44JQtD4ZDk8wDBctcEAF7N5tQAwNcmRrLWsXzWmn51pYgahxuYxXMfJZfVghTf4xF1fqFuYL1VdcCX7jK4SquWS4",
  "key16": "3FAyNkXjtGQLC8iJ4B6dWj1XSsYLv4jYmrtejUt4uXBxT2b1toNruSZySyhcgcQjK9NtPCUDPnSqzS3mJ2wuNrX9",
  "key17": "GPBiRcmBhz6f8H3rQuD1Rh8jCZBMSg9FZ5RYuwEZ3c7efHwFKGTsd1qwuvQbxdRMvoL6GEdXYefSyQaZd98LLsq",
  "key18": "3of6TttjpvqCnAevJ9zpjbRoETzZsfcJVzpmRLgmKh1AgTk8RNDuGX8ni3iKqAtERYvJQTeFHyeBHZzeh1Pzcot4",
  "key19": "43rcZgk4mUyw6udsc3c2Rumx4d9WMJ62Yh2VTQb6dBCp7unE97KKqMKWjR9hVyc758BiNxepzQwAf8TYyySe8Dq2",
  "key20": "33gXNmc1ssgo8NkSc2cLaKz6PWMsoLyv1ZxGH9FdMkfEm9R3fMSRy9aa9BAXEmVpry768gU3MM8X4N9NXCv6B3uZ",
  "key21": "2pqpDFMdER281g9Z3B2ks84R6eUBTMAEKUeg4Dm6q7JN6KeX7mH2kPTQXHpwNg8bqTNw7zB4nNUDLEqraB48HX84",
  "key22": "3fWK2UNZ8EtKPCK3qdCS3vyUCUuxkkExv3EghPpnERjLxAbQ15Ayo5iEjjkjQ9ETgTMfJ6vCkhP2rrkNrK1a1sVG",
  "key23": "2RMxXQsqKE79KmJ1opP9CsFcfno6RaMHRGHfAd3J2TcDNUg19EyvVSFE6QK4s1Xhu8Vyp7i4MgH2CVo7tq2pwb6a",
  "key24": "3VKcJBFqZSrhJp9b6Xr26tuoGKp2zCji5TZcxZsR9CxSKeoLvxbYbzh38tMJ8FwMNiry9tXmk19YGbz1FceLmt5s",
  "key25": "gGmmcEJtTfQhjHcLnctqjwzbJGb2Cpg7iVr5arzbK7LxDxB5Q8BbtNji2bNnYMbgZLwFSdLiFHCfCQHHETN1ys1",
  "key26": "29hKcQ51EjLmyceGtoZphVUVHGu9jeTmLrYK3qcoJ5m1FXdnYAFjZJhvkDM1FEPhicYuuX5tugouig7cHn5qr5yn",
  "key27": "3GdoTaQ3f2qZuxiGQNfF3z3M3MV9y32ddkLwyPaBtF5obLfYySnWBDiBiDm2jMpJgLYWGyc66fcRWoxbNqwVSTaa",
  "key28": "2kNjsXcfNuULbwmuwrGNxuzn8P34yURhsPDahwq6coZCKmP1CPX7pA9tiZ1XLG9j1VX5SfC7Y9fVAGH3Nib2CAgn",
  "key29": "4aJ3JtSsT7DuEzoUv2hVi19hFYAkRNAKmQeuWZj91JFf92NFhZoadQ12iJj2MnhURGSvyZjX6LcHZEJh5nhvGVoQ",
  "key30": "3KDjJXinMNMCb3LPoYCWvhtywCViMJdHAuQRicYLFxypW5b9EsKeSVGH8NR2x6KNZQ37hE18zeYnq7MmHVEHqUbL",
  "key31": "4jY1KpVxGzfFHJGuSHHsEMeTH9TphMc4cEpEzYyUzgh4KZKa9W8MVY4vkTDa39xy5UDQK1R2zECV9CovrsiArqvr",
  "key32": "4H6y2ZFL78DsAhNUy8ACCpaQTgUxXb9hpYu2juszpuDSmaeFghREPrybBCwQYL9Nn34onKqFAdBJwEhL6hwsRYyN",
  "key33": "45JCx3eX3HHtRt5myHJxrAkPc4xsQWcQkt83KWpn8bGZC4NyyL39te7koH4JCDsMkENWzx9PBj99fit5Q4epT6Af",
  "key34": "55trYx2rE64YHGvRb99RoA4BpATg7isWE8uYW7DVmapiPr3dyaTkGx56otcE1tADCDWGgcR9gnEtiwySLUpuzQtg",
  "key35": "52QX3PuhZdVVpSt76jcKujr2ngr1fEg77nbszWf8rMoNoUpezTRhVpsdtoo4fNbMb8ucb5Bb76dhDm1NhBcvcKBM",
  "key36": "2tizrFWLPyT1XCiwd9Q4mPvVgwBRPUzQAD2vB26sivfVKNpvobFA8fmgUAP8ECugscqXTDRQQsvffPCRK2Z9CXX4",
  "key37": "4Aqb6uLEGBXcukdesBQG6KufnVwJseAG2c6ht2K66zfFc2x7dqPbdbmVdQBWviphLwKF8idqkaULXgAFqon4fDpM",
  "key38": "4yn8wBCUmJgctqVxxfV3PQwUhBGc3kqJb1JHbzXqQXXnfaGGgNfpA5nahu93JTKorg8udhpKizP9t5fi3ZuW1kHE",
  "key39": "2AXVauzF8E7x8KHzUDmLQZ73tWb14mvYcq2RUBPPAnnhACdH5wP5g2xrfxVXGZed7wb8ojSqPHuRNAvHar4jzjFZ",
  "key40": "tDwdyXc7JNAYNMt2kyUZC7Qso6pmtRGwfp6tfFKqxt3hze4DEbG2oL9x7jZsrLHVSGJGe22Max8REcBtvYfbTSj",
  "key41": "5sGYUYjbGKFMhqfSNhH1VMexQ3Nv2DRvqwRjaPAhygfTGB85PoDUC7kBhCi2mEBf91PXFuSUf87ePdmYCxAKDpAw",
  "key42": "4yfYeUiBGojKWmAfmnY84HjZbrX2NeapcF9tQ3aMbNfCn17w3dDqjPoPGMnoVxsQXmjsb3Wk9eFjGFooR1xsWuGt",
  "key43": "SiQ8YPEYaEMLJ9y6CoGt5Qydy5fsD5MM4WWNpVHhoJshk4ueHedJUFw8VMZMzsjQhTNCuPkwcmnqZfeVCZpy4QX",
  "key44": "5ryY7ynK6rSGYdTxryF268MuMbfMahMCqgULzMQiXLwahr4NdT1XooqD3sV4q6WBqNTMYMk34qX8T6hzwsR4Foui",
  "key45": "3yyrvSXM3v5jkaJwnC1DS1EVHZMR333mY5gkL9UmMoY8i4fwgHkhyd5NqfpNVHyb7TBT9kocoJyCvPCQWwsZBDh6",
  "key46": "4VFUiERTwFWqXMMF1VDQMzqwexu7a7v4MAPYD3PU97ifaW8R5tYbk1QSyPHRvnSaLnYEmwE6GVyamYeuRU6FbwiH",
  "key47": "5HiZPzQB6DMFixYbJia23QgBeEYfn2gN8x1vTZnM4vdvPXg3Toqbkw6BXzuPeig5Fg33uTh1gpbHk5B7HYPf5t1V"
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
