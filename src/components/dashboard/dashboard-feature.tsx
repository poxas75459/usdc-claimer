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
    "2Tma4DdnYy24FqBwQnZL9egerUpF9ApLPyD8hyTScFxsoPQUAqgEy6ZTPmqC3GQcABBYxNfeeVnVF8LgYheq12hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GK19NWz4UacuvKnZVQLyghKbKZRvN2LZKhEagBHgAgATtfJ3mfMYCG6GJT7h5pGo8AMjyrstR971epEqg7FNJ8h",
  "key1": "5YExfabz9gn9PuCFfNxg1XqP1ABMtRqxy9HhnzSR5W39qQJMTcShkFVyLp5hM4rZ2TzVrqcH8KkN6c2TMLodps9d",
  "key2": "6R3z4TLwm9pVWX6akiDdYrEbky4fCPn9crvSiZJFC5e3sMRRyhE6VBRMJK91bfNJNVs5PERJn94pFgpjqLnDqpo",
  "key3": "5jmoVUvrJVLXf2kkp3Pf2F5jZbrmdy6S6FSUuthYuis5mvqomiXvjMgG42iJrrKbfjCXjLtu4uTDm2ajtqnrXtEc",
  "key4": "57NZUmUGbkNVDsZKbGJJKquB1jkKcrhXsFy3GxForqpat4VpDQuAP68unboDaK5TiYH6QQ6qQPD4MT9fXKrJC74D",
  "key5": "GDz4Wbqo3CWHTY9x4G8qnnD9mDvYwifQof6GpUWS58SqdAL5j4y6AJQLdV9Kqa7TDV3G5DuYUYAzQwtfEQMKTQR",
  "key6": "SNTzK6VqB2ChmUPV1Q2CEEpaCdWj68zyd94p4dmiEbinrRWJNpGAqJ29sNPZD2aUyuLpbDz79z3L2xpRSBexJSA",
  "key7": "2rTChVuQCY55Xoey6qCdxnDpoju6tqto2uxQSsjjLxJ6uPP2FuSohahKeitqT1xK2dwPpEjWUQkWuJKySJtJsw5W",
  "key8": "3coaqVhMmV3CUfyXvutKr5vc4GFFvVUUWo7tuD8jCLUiTfQDBsUboHmcDwgamzNo6kW4xhEJwG5vvh7d9MdWg9cp",
  "key9": "hge2v4X6bZN3CQ1CCdxjEvp2WLxRkxzaP6FynQAG21c4GcDoswkzgGm3FP3KcCYUFod6fLLBwRPs9Lm9CQH3gbn",
  "key10": "5WsLdjvHeGRk8qVnHz7rgg7S9o4TG4pMeMKXuNnJ17K8FbbMJ3UpafpAmG6J1EBZydBskTXFYTHtgJuMYPwdXUbZ",
  "key11": "VLoAtywWt5YtfbgmVrPeRkJvyY449uV3REgiWyWrcR16J2m9HgPhNwaqFxnUjhCo5YuZ7Zzbfbyt6EYWvESdZ2E",
  "key12": "JZjj5sZbovMuRy9x9CHkY19K146yVcFrZFzeCPyiCdsy4uhmBn4H9D3VWBeM2M4KTzxRcQcfTmWqy1JWpWHha7t",
  "key13": "Rw9C9gjtzZZivUK9w1CMso5cDdBQreRSbiTyu6cQ2M8C9YZo4631a23MpHoiyjfeCvTjJdLXXaA4viCkpL4fks3",
  "key14": "zdS1qeZ9vnbacuPv7NeKf2nCqVHxQUf95mr6zbxFSnATFPtjdEsZ8ZL3CxndXj4STddUzWvDKSzdsHHVU2dJCFt",
  "key15": "2y1YmLF8TwogdmVVEHhXU3zEn1pUvtqLDk7u6yFpYw9MVuLYdXEfZ2iQWZB7g6KecFKM8gnmFo7GzUXN5TLWBtmw",
  "key16": "63L96ivRJbvYvQd6bFutXZFTujjd8g6x9wP4PhpRU2j9Y8VMj3MS5ngviw3jPzMAgyACqSh8G6yJWGkEx1yeXHgD",
  "key17": "2aadQtu8wZbxASpSg6A8hymbqsrFzfdJw9DvEXo1ufKSsUAAKBSbT6cvmrPH5QPQiVgo9qZN2m3VwMw3grUprcX3",
  "key18": "LBWTXBLhSFYEatdTt7U3NNB7UxNr72niJmCCnnxnSFxszvdmWic5T25ga5bHTF7NRD8MiedZ8XyPZ3sPtF6bPZa",
  "key19": "2BZE633dqVyG6t5sSHVD1TTK3xF6tNR9PGHLhs89HU5J5eV52gGJRDfdxrVGqxNqjvcDPAxhpEp4Ly7LD2Wi5hJh",
  "key20": "kw2zA224s8cwo8MhyiccusFkx5NAz4pNAfPq4Hr2ZqjsVPvmF7gX9WB4F5qdF1TjK4CPhCvCQx4TszaGVRcVaAM",
  "key21": "2sLweBNjqRd1abHYibgiFY5H4U5fVxMwBHi26v19nqVurnoD7Jjzo7kVwPSy2sTgmZ1x8grPF5sbCVP3NrHS111v",
  "key22": "etyFLKfhoRHtPUXCLqLfTvGL8LvrhTkKHF6S6qYzfBU6YQ2kWX6kUXGKMVeRRxQSRQdSTMSSvrYDbhGzrNbz3VE",
  "key23": "2Z5JVN7yTKQp59F2KKph7QKwhNiqM6KrnsmfSaGhMbRe3Mp7m3ovE9XpaSZVDfgtPZ6E2oMZ17arVK2UvjchB8jS",
  "key24": "3ibA19rdi8m3NxKK4ad2sbjAfQnGeydxYJQvD47K8sckPFKoiUc4FKEkzEFE8Tyiw92BkffuLHHbXXGuyz32zsVd",
  "key25": "2F9sqEiV1Q8zXxL4htDZ7RBEmM31gtHx7536gvDTtRFz6r7fdQY6aUgUQKcp6MHADVHzKKZwF1rGcrfhzNd6EmVf",
  "key26": "Jf3b3KLkYGCT9zAeZPukrE3FKXC3QYi3tCfEmnfw4vcToeHpZEzXu7Qe25Wfh7E2TceWNTxR1bx68MW9udGSoC9",
  "key27": "5STbaLfzotmWArJ86uCReS8FKpNSTXVTRkJaKbfFNVpqkNPuqCLtofRM5bWDqakEP2BFVhorSTBew5mSror9ocoW",
  "key28": "4S3SRDoFpXCX1Xap9fWQSLhKLEzCJ1bzeVXZ7Hh9uULVJBtmrnaCzxQ8AzvuzpTzerLwcvw4gXhv1uH1Y2r5rVqE",
  "key29": "4MyVhRPTXBLwsuh51DfGsVgUdAKFhX9Y7hAyyeyEDLkGzNZUpUXUKSTNzRYw7Gkc3kMaz5CZucMXx1BnWTBjFfRi",
  "key30": "3uBw8KiVhZfC6mTYu813P4KZcAG1z9ALLHq7RPLy1Qhv6wzvBG5LQgbC2rFR2SSgh1ZmsSRAmasbxbLpeTunioct",
  "key31": "33GemUn9hz9Z6DtdcNN7fhfadfvFy8fcTVJEWMLyvCyje6yojAb4WB6LNkQdx6so5xyCXncSVUNUS7wn9jv8mP7j",
  "key32": "3gHCYiJejJY4mYKyWJSXpVZARYU9Cxg7gywWynorJf4tAWZrfUVmsTmudM9P2iRQ2wwvAkMkeGULTfTeVSCur3EF",
  "key33": "yv8G4axdzJvkq2x2cgKD25Sr5iwHoNCzPHXY8sGXn9sUgLCFoTc256ikiVsrzzEZNVQKAsURApiV74GGzzkxVvW",
  "key34": "3gNqUdk7Ty521ncBth9T4auEtsnTisL8w2ya3PqKLQsdrVK5uKFWVaTA6KKMD3CTm1ZhnYEWxaXGcz6Q7Z3PK7E7",
  "key35": "4dhNc6TiHSzzWZkywy7QoUHiGp94eUay9WAYY9mfkx9ezqRRNXUfTmJGD9472rMNSEJrbXZwA1fKNTYc9v7bLie6",
  "key36": "38LgK7kL82TvkfJ3HBKS5UfaxLdS1w9WaBtnKAdGSAzmuuMbi1CiQJmX22uSDBSvoawrECd92tRkgg5W9qwictHo",
  "key37": "4p4ebQvLUwobkaowJnaodKywyMGSJpdkBZRZ9A9wrXjmNqmPqGKoLHJQBjiWAwYrX6F1VvnRC1WaNYhKzeRrd1FY",
  "key38": "gRf6scGfe5vMhZarg8Yfjxujhkz2qnAB6A38kvmEpHvpNxSSZb2XSFREuBTv1fCc4DimrSy8J22koPV99fa8JYx"
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
