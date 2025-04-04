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
    "n2ADWU9XDx4yo46QJ9vTHFmGmKemv8yKz7CPk4QfJPiU8pK9krzBAdT8h5pthHH4SUntHAvjyZinnYwBL2ToHEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36n7tmDXHkeomV3setJzpD8WAKqoUQZwjbvbLpqo6jQYky32N9kSBzz7jqJ6z8A5wg3Rbxipf1abxGLERSKQs2wD",
  "key1": "3yzhYeiKAjWEup4W61T3H8a6gcEuqXiFwpPXDzLNhu8z7gJSfSFSMp7URLjoiNdK2etYwRHvTQfhEcoazQZYHzVL",
  "key2": "Sc4S6xEcx5sLKSpdeKmi2if5drMfqJXxi9gHuaqdrNGs9xB4abqs7Kwd19XH8KJkhEvLSaPSnDxP8q7u9wkwEc1",
  "key3": "3z9G4D2fG8fUhwwbC3mLTNugm8XwdpzpmUKhQqwuqV5B5w3U1mF9zG3iPkasn9aVnPZjUD7ke4pQktveceSHUXpp",
  "key4": "23hmKHY9iwZigPvjxCKcgfyuS4tpD8CszC5Mph74FGCVtr2Z3qrp5TqVAhN64pxTAukLB6kfwvtbm2Eewz2dYX27",
  "key5": "24FEXcueHodmuQqAP6A5nsDqXqPn8zChoYBLejRKWaaMnvX2econ84Kf1oT58z7LabQVLxvzsZQdymGVokUCURRS",
  "key6": "DE87WDiEczENFa9dqK5VPth7G4bFTVjraCybaQr43hG9LgE7oue8SwFtuLfLUKNZTwGs3q8M1RxGZ4zbf4VGrsc",
  "key7": "ATErDBYvcpsRhzyHr1LNc2jws5zgC1dUB5YqqFsKcXY5q8xJPXdfE3LJj32BGraBDTmjC7684YnGLLH4r9B6HNE",
  "key8": "5ouX3KWR9eFD6iegCoSUJbmLcc3KbPHkiG4iZJ7EaGkcn17HrBe83oqe4dL5GihNyuAQHJRRXAfRaopeSNKd5UmX",
  "key9": "3nVvVDscPDTaV76c1JQ26qKBEVufwsPX7yCMdyTJsTDTXchtE9ppxSh4PmTWTHKV6ni7PTzxrP7JdzwTSrFRmY4F",
  "key10": "3KX8CXfXTJhajRzjQB2Yc5YjPzU5wHzM1VoNmJhapBdBqT7BvRy82Xgs94yzmo2aQFUjxQDZUuSW1xX9Uje638VG",
  "key11": "U25ssPyxWeSt35QCtReUSoDGXLD7ZMbvjvSZDyQXwDDv7Ctcuj8NSQtNcKM7BYKrTuLHLyuXRDHNJWQJA2xS9LX",
  "key12": "2JibMTTTWKczjBqHLx5ke7n61tkV3YMwB2qQ2TPHW7Uje9iPBQsVensKo8DzrCBpvN8AwC1sr2Bj7dfjfbVS6wPY",
  "key13": "3zWRhcxm8KgJfF9iJMWYWNz6SseNenn4sNpkMhhzBp2hjDaeiRgNAG4u4GHZk7HhFvH6S8s3YmCxFD13MEfwS6FD",
  "key14": "664RnNScSe9QCKZ2rJRYW4NeF4fAYvt6M4fzcTUhjeUxjkCHRiSHrdPfV3oEpyWo6zeYS38HuD9f3j2beDRHjEai",
  "key15": "51vPWgfzH9zcYTTXJ4egR5YppNw52zka1tiZ6GPNkxjHjwCf6TNATM9QBfAr5ws477mHUgzv1hpRE3ScS8ix9YWB",
  "key16": "123L2UbvQ4DzKMgUaP95EyUsb98MJXUAuLjjKWcUqXEpGCQ3mP8Tqpvx9qmuyqPSj1vHtA7qS1DrJvYkuCGjauGJ",
  "key17": "2xgGZWCGNkfCocHxXRnJ2t49rPq7JYaPpeqMUYuQXzwY8QC1CXiNSUHqLkufEktopKbiST6LnXVJGwX5XbXuXzyv",
  "key18": "Pg7UP6nygtWm2vPVinzpNdZWVyikbMHr855EVQ2jVh83aBLk7TN5AodiHPxS3jmgbC1F7gZfcQFKTKHTg4vzSQk",
  "key19": "3tFcQUr27BzBvx2T4oXaTjpQPhogXoTdfEX9iF7mPHd4zgCzs8mRLmP1FHL9MFpRoL5easw74jDcYh8zvWMaUnLp",
  "key20": "2iBCZWUYLtFvYVq5oTXCNjgUMJ319a7xRCWSQ2ic7su1AhPeQA1y9Fy55rRVXt9HYVod1brHgUgRWunaYqB6mxnr",
  "key21": "3ydMqH5FBBbEgPZuQm2JLq8eBqnmYLQyXM3qL9USzq6BA5rYNvcpXoZFDmv1xxYAXxydnFomPvX64hweQRST1eEc",
  "key22": "4bXBN5AeusVtXDdGsmow1k4Rj3A6mk2HPPan9aS4sT4fdfzEUWAbXA1y9ZMRTTnsC9zyfhKPUkFpuBtA2FUQZ6PT",
  "key23": "49aoJ7hoJgv8nWHHt2395g1RWco3j6XmzFXsx88VGwYXnCLTfCR636spryfxvcpHWw1gH6wEsy9UQFEAsNynH8vv",
  "key24": "4SpYipaYUDTwPEAmNqHRecaN8s2vDZi9PNQxFYPqLKoh4NJx9yCfBiNTnr9oqViJFRxMUySqrxucAhQzedDHcZJs",
  "key25": "5VHunnLoKCycgdnDnVSuJNNaYBT8Dgfz67osBZsbndcGVZEMS4AY1oqjDbJCFToHC5a6nb2d7JbgexWBUdJcRpXQ",
  "key26": "2MzSe3xUEay9FBY4vxK66dkSg7ZDmcEef5Tw9vU4VFnsAHwzevRbFXVe5cw2EmZNaPM4DzvArNpPUE2b8jngrkML",
  "key27": "48i3kqrnxzLFetdArmX84gvoh57RmmEdpKbkyGL87T6zryMQizsGhsy8znp76Bn6wGtxjY2vC5m7MyeaGRUpfGZQ",
  "key28": "5fDY9WhSgTk5AfxhHBWBn5TiS8ZEfPm64pYuR7iLaFnySyhYVqRmKpDf8STeG98TfhvGXH3kPRLZQVSsWEcttFeb",
  "key29": "39Y6dKrN85myp8mApJv2PoSkvkZ6gJ7bcWnWhZAd7n7XF1auNRDUdsLQzBtQiS4MVfeHnZZAqvqz5ucfgpu5pvHN",
  "key30": "3EzqqjdxWxtLtDgHuxUnBVTRuNyxNsTXfjRoBQaTEryQ9ggdCoGFa2XZp5mp4MzHjUezE4AU2WdZ8N1oWuwSmrh",
  "key31": "2ptn1xbdgDyREwygvwcNKs49MmiX9QGbYSi1fUVaTamLJ4pJY4ESPV2JMctsKcK8xy4r1t2pvUjJbKR3uwVDTP9b",
  "key32": "1DowbNp8LhUT3hwu6stbRTEMbMemt5gWhJK7PnZWWWqvrnRGpox42FyiRsyGWvGaSPsRgtmsiPSLK1pLyZfmXnP",
  "key33": "4Y7GbvbU3bUvymoFPdD9wHpG8rqe8pupsh5u4W71wreXenb6aTegNfwbFfask1Kvd5RAvrXT1c61KoaQgfvz1ufu",
  "key34": "51X5pmBd37W6oJLmkFY53i7XPbhggiCQTVZWVJ2Q5Zwmy45GvvbYioNzxgoja8VZx2UuWAtWYGfWEEaBmPmKw5wt",
  "key35": "PK5NVCYMUSFkWo95NFpfxSffYD62Pcw8jc9E8ocWbwFVs7YrtGHHjKzbFKPRn6Njvqv8QiBGhEFmZueCDm9FL3r",
  "key36": "4VRyDZEzKCqXN9vh7KWgdCwoUMUPnR7pyViQPdThWd6hBqJoE1zwnK2DPX79YKgLAWhsoeNh8BR1Pr7a8F9epM6U",
  "key37": "51tY3BVjjCG7xkjRmcSv31ZoAm6pUY3pvK5nTxs5WTzCkHJVBZrYBo45ajVb8PeVzgxH7n92uSt2ShGkusaUSEVJ",
  "key38": "4hNFBzRwAuey9c8XY8ajpcxVdE2239R39ZppgDbdPFATeMgHhgAEuJjqiw2qkvMg6bjQUjjZX65mXSi1qUBxcNuj",
  "key39": "4sn9gdK5QxRYRm6z3YY7XTopsD6F8NaBTJKaxoe6cbyiAxejhABd12TygQFX6XnSw1xfxdPDRT6Kg96Grh9XG2Mk",
  "key40": "43wYertud7idCNUXGCVR8ndrzwCGhVwiXPGtiQecpacC3FAKkSD8TZYYUwTKLi7ziePssr7hdrh6H6P773iBovxx",
  "key41": "2iqNAojwsZ6GFjpptPrZ6a4sSFJ5GnwLW2dszL5Ag4tmgGGmaedEMLDSNf2UeKPB33DoJ7oNgmWkvJassSVepdgq",
  "key42": "3SjkXb7zNFuypMrRuhP5L5VzeCsDm7TvHRugXGCHf4iALydttHrc7SPDX1d8FLHE97zX2kX5TscCCbjixU3T715x",
  "key43": "cjBeKWajeWP7vCqW6LPG7JTMcznyxxFakT97LoLtM7shVSrXSf8dJBQ5eKyi74oweBdr3JzKj7CoX88moSNRBz7",
  "key44": "2yedvm5PWtagZKvmBV3qjTY2F3Cckz8VdG11MEgipeE6wkkmHuUgoTSp9RWTQuGLBMhhVPUzQ9j5hsYLJN772QWq",
  "key45": "55K9aqY2nFQWKtgmtEcdKJrRTPvWwykhbjWB8zkLQs4mUnPbfX3bmuJDGKUApwc7umoimhuA5ausyaJ3nXdxf55E"
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
