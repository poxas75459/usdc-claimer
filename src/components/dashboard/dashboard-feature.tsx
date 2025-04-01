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
    "4gLhLgqvm4Fus7YGQAMZwUFjY11FYA5d9EJ25wGbkmUzQnsSj66Lt5kaWG5cFXrx6BrXsBrwd4Xf3PD1E4fxWhy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJ7sh7MPX8WabXwaGuogbbSZvG4EFrc4bxQGxmD2ZkZqpFcVwdL1KCR9orRsTQW3jd4Zh2zCaiY3FbRmaCP29pV",
  "key1": "5FVE6EA6XcjQH4g9rwdAerHDrdxvm7qFpJPQnUBqbRaaJif6aFMnh2FeSvFiAzhStXcnkM3eRyuyyqt3UorDimjD",
  "key2": "41HWCQZLsosmpMZeu9AZtAkyETZu6FrusutmK71iXKjQE69Ngz9DG5WCfdmZSvnYKPtMXgfEJjzPBeooaznrq3hC",
  "key3": "4yo7K7cNsXp9XawnrSUnYrsNANw3Ph6oJuKq5U57stvqw6KqW8jRbDXKsj8wKECK67XFoGh7EUWh7yyLq8ymf8sq",
  "key4": "4amTNntqSC7oqKD7APS3xDjbLcqxLGWU4Don58H1BkjsbUwYokXxHtAVfFRE1oWPhX6caTBfUwhzLH4BHVdCNT3m",
  "key5": "2YT88rTkjsgJ5m1yYWfcKoeCykdToXv71pyMKPtQb4saASQTsQTnSyK9j9gBJHUgsKfRcDATaHgXc6YbBQftn5p5",
  "key6": "5XjhtojVdHny9LsngLTaDT8bbhEKaVWRvs1GGK1DUhRLEfD8Jm5x4GGPuEre14mUaH4GtzvV21BpHtKJ3nQGJbvt",
  "key7": "2gteGibpFM1mjmMbRTCvwUoLRsTgXtCE6h1DLo2syqm7TZWgkC4xyp5QgvjZHbE18fxup1R5u1SJg9SPmR14MCBH",
  "key8": "67d86oyxpYZMGK6Jn21wTqYauXNNnb5oYMY5goWc6b33w6zGwa9JTkyng1ttLBcxxq2obN3a7LXbVbHFP1qGp81b",
  "key9": "4DDJvoeimF2hKEPvQb5CWidjUrKVHTWtuPN461aH6GbqbdKk9A47UhQEQG75JhHvzdWLwaqCcLCdyC8mYcqkw68G",
  "key10": "3L8uSQFYKU4R5oYGXg3HNAMaEB6FUJHnWiH83aJz8CLTwFSH1P2PFTa3ctBzyzxAEjJNtDuefwboYUF1cLDSVbvW",
  "key11": "3Fpfp2Zf28cRG76m7dKcgn6BD2QU1P333irV7MofxkhoteebSba8ePsMVUkNgd4ZPf9MxdXYNzsQAaBs8D4S5pFd",
  "key12": "5MYJjfa9m2CbdXDT47BHXZLMhg1yEtmQuekrWghvKqMDZriCiQm7YhSPSimUFSJWFyt72Ps3x5yt6njYVvJr7Bav",
  "key13": "3SE4a5iB9apmXNejyMzwuPTpZmWWPKEKGKm4CcTw4EtbMKaE98giPmDFJ5fRdDfR2KTEu83Km3J7JxbsHWmZtZjw",
  "key14": "5A1gvmm8jqJxbmJBgCLkqhZPrAA3qhwTtKqjR9u8ZPmVZYgxv63XyXr35XcX8gwhyjZkh3EsLktmivyvb1aVP7wR",
  "key15": "2iehMujzNUfb3CQciqK833tqYEWSw19S7KKvaAnJRkSxr16iiysJUYt2Xby9pbSMmGaA28AWwGbYEegzDwnNZr7k",
  "key16": "53pyTWwG4NjryqzUq2RxYo3Ra1R9y4MwSsA5AFRuMyNWs23CcVwUqGAQrmJvGzid4qqJEt9QbQP1FU8TXtVVrPsj",
  "key17": "3FzK6nRJGqGV1cNhYdryDxfPEguUXa8LVtrS5i3TzSgcXmFbVSeDLX6J5Rpop2qBRGxM9s1qXdHctQ83p8RV9Uay",
  "key18": "2izSQYK2a2X2Miqxki517mPf4opLamiGnbyzRQhAhwze9tkoXqXYkMYkuiSBhKypVYG8DkPD38Ws5yBum2Xtd811",
  "key19": "5hvy7FSCxgHgXejaAz8LVPp3idRNjjAMkttz98jeE2jeN4eEFH68Gk4e9ppvtUhe4VSx3vXXq8rbTnNXCuQW8rma",
  "key20": "2rMz5csp9VZ5jdiQsAPXpfjsSYmwxJ2DzyDaFhH7zcCdwKxJqiw8DUvzbXrsV8rj4FrCyzvW6FckjFPN5QLA2uTY",
  "key21": "2DtKz3xtFPzesULXL4NVfvKRjADqjbWVwBJnVvtBZ1hem7Y8Z3yQmHzvSR7MoFNctaRWrqXXLhrGQCiFe47StxyD",
  "key22": "4GgQTm8zUBya7Q4iw2EVLWaA8bi2AUYG1iNDJ6d9k73NAVtsnuri3g1kkjjSfVigntU6SCTtAXENSk82ibu5LxSb",
  "key23": "2bsigEA1PFrxZZc72ZJJu7kQNYDszAdVRK5tzgsh3hVXp3Pb6GLEgaxwWXY63UNMXnvRFSwFQ5TNoTuDtnm4BMyA",
  "key24": "4fm1p1VdVB6TgNyjEsM4fxiM6s6oSZT7tA7KoiV7Wxk3P6wV8uj98uNgF1MFey8c5qk4uG71XuzjJRDKQz3YEtgF",
  "key25": "5KZ9dK9shmpnF15M2k8cdcjdPxGfAfA7ymo1N3ao3FwSk3G3mCBvU9MauHwL342jwVZoaBoMA6kWkzGyYGhVEf5D",
  "key26": "21ycuH1mWoHQLmjVJ2nqKAufQ6LJt7ceoQL5RShSrTW9oNgHw8Qq73m4XDZHHJyjm1sAYt6bVBdbFzFkwPfTRrM2",
  "key27": "4RxmhJumevQHCND9e19kjbSQaTUmKCnR7qwsbhrYZ6zGKscdpFzAGqeG9WpxCvr16RozXDXPSYLrUKiMofQnZsnZ",
  "key28": "5PNZ8Yf1KXoSereav6kaM3tq4ynyNewncsWxPHv5C77gjc2vMpFYnEhi6teKvNPXeYJfQx5Sq5BuQ4GLrAaNdJL8",
  "key29": "36YSKuuw1xd9r2zb1k83qLNvquStpUCt5hNUK1EipmWVdvJYGkmX5CYQrUynC4guiXRbPeKWigijwjnA8QQJmcLc",
  "key30": "hivBb2dHU2b7sz6LUhpn6JzgrpU9R42fhtN3fsEW1EAmJy4YQPJjov49E69NWHviWoSUvFkWWy9evN5yrv7hx1Z",
  "key31": "1qMx7GCpzD2omqzY3BjjJ5bFHkeVuLXci9e3g3wsrGenKqB4HY9UJ32JRoHHnYsPfMDoN8njEdtFeqKqESo8Hku",
  "key32": "3oSjNNW9kKjiLnUQ952AJwq6e31Jgwz7neESa8od1gHrjVtrJfFFGPzTHJJ5SxHuMd4i3NXNCkKtbwU6JSjgUEnz",
  "key33": "2ZZ88dY1RN9DcETYGx4Upr3sgwciCJ6ExpAhiSMx6stVuPbgGYtnhuy9uDr6E3aPv8oRyQz3t6CEQGwu7hBdqR8W",
  "key34": "5dmA97G96KNpGRKDFdHZXZeiEDwoS5iPNQfLh9SnpW4xrEMbGp9z4XwbQLdzY53TtkMfj89o8zKgfdkZu4xUbanp",
  "key35": "5edKME5BBKPob9hdwwiS7JZ9WSqUJePubhvx3G6fUsfrJ5utAcB3dsqQg4zMFkJcJCMMgwYc4mW72YPKo8tEzuUX",
  "key36": "3uZVkGFjAr7kVNw5Y2186WnqCminK32BhWQUhWqu55ACaQeqQGCRrHwQ7xZqHhXDxPUonZeMKPZ4gebxeqRYmqWn",
  "key37": "Y1xPoi3sPtN6ofbCUW27BN9kS9qpcDDxqjqHCrCftgzcVp5cBSXv9jydL6GL2VQ7cBkSiVYsALB35yyDny47Bna",
  "key38": "3L3pgxirxAcGFf6nrYxLrXV3yTn3XxmfRjnEfm3cgaqkDNEWZbeLBaffceYCwHyyTpSPwoSkZMi7vJpBCF6occ1i",
  "key39": "2VEaqKSvGf2Ts134QLsMQx6JsZD6DG6u6d5zRNf2HMwdceUHS8idDCt5EHR3PoeEd8yDEU19AouH6NgTxKbwd9fn",
  "key40": "64Kqhh3euAQPzkuMPcgV7ASCH8Hwr9NhGamFybkuhET5CUsepYVkSsCNSJvydPdFTb4ZrorDCRvqCJT4BtuMFfNb",
  "key41": "uDG6gqwQ3b6WB1DFV8gPNmehLdf1nJGUHFukkmNX6qYBhhah412MyfWQDMZrMHqTRp9EpvBk2D9XZvaGpiubrSH",
  "key42": "2DF9zEYZnADHtChFrmyd6d8sfRfzveZxZzxqYCc3kWyVx1LQ36ewi3DYADMahdqxUNyU9DwTSWTYPBntKRsxWRLR",
  "key43": "5XiEUVAyxjShDgFLVFvyi4hoE3QMEKVNm2y1wP57XGRgCBJoXF72Eoj1LrpX9rfo75MwfQ54sukhcqe3dUMeRssZ",
  "key44": "4TYHcHVu2CvqPUCVLwt631dxAw4hC5k1iZDnS23QZqRrNdFVsGJBzgRESHrT5NPogmL7rHnXPwDHwkciVG5FcNma",
  "key45": "3nE8YRyFzHfpUyzDfrWdAm8ZzEhSx357je7W9ScJhaJj1TikohK8cvDaqK99gecQmRSRZHo5PSijnPjAA4WZChs6",
  "key46": "4SjZse9P89ug5ixz9inaK99Eixf4vo37aLs2Vrmqq3tvqzNyqWjfdtQah5GBbmaBvArgQEPCC2HkuRt16872ySb1",
  "key47": "21uEVM61ihEfEMW7vYecgZxZ1Dsv6DHZfLB7xTXdQZDEjmiMHyReVeKHdQLiT3ffxYtDLExiJ8BMb2cpWRQuzjeA",
  "key48": "52wLeVwLxHKKqFyYhCuxRPxabJaXpEZ2h6ixGPfYTwsiq9PokcfYZbrbQtczxfxj1Qtkp9NNJuTWgqSpTycoQd4L"
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
