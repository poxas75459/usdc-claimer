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
    "2wM7ywEtsT74jCsabvBtBjHGLdQzEGgN6t3zxh5TzSH5F4fUf3LKcvJiP1AqrrywTLWDvvYa5J74issPKSLSYRZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XL7gECUX8dpFEfPK5eUnUfeiC1ki6BdHzxidvPhSpeA82YUVLrQvQh9n45hzhzYVaYtEe7juNvBqUcgEpXYcWaZ",
  "key1": "5EcRuhyDxnSEgm77QXKkMt84LMjLvxusVFmtvhxYWqDYerFj7pxrctL9CHj9s2JqTsErK7knFh7dtZfxRCQRssaY",
  "key2": "9zGQ7BiSSFUoDSDAb6zok4BAcivgmPZhv9m4drTpFpJJvcv5zZG54jjqpJ1hSeiTgZCK1P5kDHjyXDv4FV188eu",
  "key3": "2pdaW3dTpcTA4d7fyWWBM3UpWsBqF2XgZo4giqPUPumDTU6t1GR4n74f3n4EgmegnLBN2XxYz98ghFoo1FDe1h42",
  "key4": "5v4Rt7fbgsdSnsSk7eiCvocxWuGDxLw631eF4fWnXkKgwtmHnf4kfeY78676jzmXXkr8NeVXBcgNvVp1vLrYd6pd",
  "key5": "4BRggep6aw6BBA3gD9PAhS582hivwCVMcB8CzTXjBxxVXzFwLnkYSwmEpR8f3E3bJWUT9N3SSSMwrFgdwozwgpSt",
  "key6": "3xPRS4qxmje5iRoMHyySevh9wvSYA2Wh2U76qEGCKbfAWkFkd8P1AwF4WSMevkiBtZrKjyNMtnZnvLZuuYiTTmD5",
  "key7": "5neUqPKR78Z5nNe6eNpSq88eXCmu75X5YoVzEnhJAhWYEaTYdpqbyb6uJR2TB6xXaicqLB2pj1wMWHPPCcMcDwGQ",
  "key8": "4sr1rMcgHGJeJkbiSRwoaZQZ9CrnT3VL8fxXyeEWAE9gCnoqBUY1w3JnFFuj63uhHURjxSi3QchEmWkuLsxPnbMg",
  "key9": "K5Jmd2mtAYLBkXjP5t3M4kYaPbh6tGkKkLeZmczuKCMtZfjRiztERbZTH2pT7jbwTwSe292cGkYJ29kuqu3Bixa",
  "key10": "4H8GBZGX5wBxgwFDe9GtLJ1EsPC3omAhavehx1xp7djvbJWr7nBGnEwXjPWJarm8ujg21gRbVLCPVtrhvXiXqgA",
  "key11": "4sCeEDuk5jy9yQJq3LjptbgW6bpZ29oNHhdmk9UU6qhc8ThUKEqzzrtf4uJVBLi3qyS7DweS1Pz1KTBQfo3FerA",
  "key12": "3kngvKrJ7w5TBbCJbR6v8eqEpwAXFmzUEY4N67DKwvsTJcCTFRt7dkGXfTDf9HatpwLsNiisjMboC3WFayAVg8Lm",
  "key13": "3rJNWPwzb5dNtMamF4xrkoJbYpVa2x57NPVNkiSkN9YNAWssJmM1xgfdqQa9nDW99vnwvffkn7BBCRQx5P3HLXJL",
  "key14": "52U9HcPNoCU5sy8j67ahHEZ64SXBoe9UrNut1VgdBD9FZ6Bw1hDpe6LhbrqtaKyQT5jdAWyG44UvV3X6j6HGVqN4",
  "key15": "tesw1exAG8vdi81UKBPVtgujQnF11uSXyEbdxNdXfXeDyWDWQb55effQovJyaWKLSwpU4w1Ee4btHGhpEMmmpVn",
  "key16": "4NUaoUEf5PdNs6atMia9j7Q219LrZtKXacqHsu29C2bWUoC9cYSDxT5fUsTNwdcR4qtA7No9L2ugxWHY9szghh4S",
  "key17": "3acLSMR5fHitM3eu1RfoMpZL8uh7KUGGzFY68s1C2T9t4af73RCz5t8C3wfnvEkcwRBhqUvqTdDTZPhB2kYJ2WoB",
  "key18": "3awk69La8B8zHv9kZeMTyUBHqR1CCYqW2QHkvRrLhNfhYkuoDQjC3PK8DTWSwBdjZn3LSegvALzihCkpGSQ6Cny8",
  "key19": "3wXfzB2JSHY5izMZskjerLBN5VUmL8wteGUVggBumeoJp7RFzF7FqAg8zMwKHaiWWM4krBghV94i3PCJUffCqAXK",
  "key20": "5yxAr3e3KC75gLYky8GdaZsnjpRrd1a79Z6gmdxvEDbXuL5T1ZaDg4h3bKLfseijp2ZQLAUWewGiJDNwBGDvQA4S",
  "key21": "2h7piY8mPiW742yZEoma5agauhykqaMxjfS59QKFRKTDiFSngJ5wFNPKickcw82BTc5Cfs8v1K6Ltf2CjaWstNCp",
  "key22": "67f8cHSsQxni3irV4svcQuV28JHpZsq7KsctXB9CXMPidzkxJeY66wZCmuFzGnkEVXP4QAxnxevooqPUha4iEzis",
  "key23": "Cv2g5johziNj34P2NArGbdXrMBFjrhmuaYt1YCJxrTG92XXDBX4SF4Wt9G3aRL9xRdnfYCGJeTzTLcJuMJL4Gsv",
  "key24": "3pKU9pT8YQT5Uw4bwNmur5ZgvXbg3dksX8oYZqFsC1FxFJRc5bRviiFYGVQzG1LmdS8qRDzBVGEuUxvWyigf9kA2",
  "key25": "4Rjzsbut6C5AXAggMjshBP5hhViGSp6zwnPhqWhEJUvahjRfRrGNqeGan1fyyEGAGvTxRnuCNaQVrHvU7WCP5jEV",
  "key26": "4ZrKShvgVn5jukEqq2uhu5uXiR17iR4WKHxcx8LS6v3icAmtCKMFMxgGBSnbkvRSe2oRJdNrCu5Josjp7dp572cu",
  "key27": "56ugsUuaVaxUiWSJhx6w5Ujxp9vUmBFrvJjjQrPMaWxGfoi4rSKKu6fGU7cq8pcCG4YBuGxZPvfp7oQhwGNJ8kda",
  "key28": "37uuiHDwbeTpTN7dKQNvMrytFCJ1iMMiUa3QAt8aMi2zy13Rrd3vU8daNRuQUc97xrzb9dmevjbWe23ryLQjduYc",
  "key29": "3F5Sx5PWh9Udt5xsL3Hc2sX7JjNSENCEvGyqmWz8DjUHucRb9iK77DZPwRYXNsEEWK6WgcoS4iD7y24YrULB2u13",
  "key30": "5EiWNmcdCM3u5N7yg8khDLsS9Uzsw1RJB9cA37adUPEfkmdeH6BPCd4b4GGCQnCdGXjUqsrALbgGUwr5LBjpghRj",
  "key31": "2dYwjRQPjA4hUFdrFe8A6hHLYi7W17t7kzi6PdUtNsWUj9LP3Ff8Kh3LQMCA2sFNAgifGvwPKbnusvCr8FUbf8LU",
  "key32": "4CzZBXudBsTV2eva3zUge9FbwvMAnta6QvZLuryLKPS6zVepr3oS24odyejPtrj3eKv69MAhXWtidPi8u6d54yjK",
  "key33": "zeDKEoydJ1ofP3LpYhtY8w8m5GHUQzyACypVjmyAg4jRDorLkDYJTexrWBaEnANcqZVPqzJUvAJhvtL2xvczGTg",
  "key34": "2ocvv4iR66sYp9zp6XGMQ8UczMbJKuZXFf6xJHza1RcrrTnMVqV24kMpmppp6xbo74wMKYDgb3mMe87TT8JrAUyn",
  "key35": "xWbd7x9P2ioKUZMKRJKeH8VpetMqFSM3apgJnP2wBqswK3gMn9zm7vV8JzwedaxBMp8doEt5M5pmuhrhKppHvVE",
  "key36": "3LeaHSQXB7R3nuMrVHmyit7x1FKcwUkCaFQsBtbTmpyrESERZ9RUyUXJfwY2WDBDuJUQtiLfuJfm2s6NsnDcqsJ1",
  "key37": "s1vf26cLvPkAkbsg3Qs3JmRemcZNVwQ1fmTyNroCPqgjr3nSgqRmrcSyGTNHrrH1Ea9Y7hvpLYtmQbk78Ea4A6N",
  "key38": "2Pey6Lo5pAn5P6JcHENAAf5baXREkdTdQ1jehWQcDFrRdyHom1Vbcs2jcqfuUnKCgcsp37NUKMkmPcPUKvFT4rEM",
  "key39": "2rpMh45erah7hxVPzPmtceee9Gm4FH4goXp1eCQyMk6YaMQKRjqR3qCxbav6KLDVQC6RUyx4wqcrYnByKx4Rk3Sk",
  "key40": "3CgEwhR5sBLETbX9rX526BLXXpuay9DBmEAvZ5CHKnrRKC9ocKasbakdY2KTzMnYFsixHjBfnRbxiCMGp5dmikee",
  "key41": "2BjZtz9Vrz8ngujqRNb19Nfc6FfUphr9BtDEvF5sv85FSjxY7QowCmawL5CAK9NozhUXHUfV6nAmS2NkUqqjKV1",
  "key42": "3ts4B3pGrwD1rUPUv4VuCp89MNne1gmfwAixBNmRnWypjatZSqrmZZhDs8Jh43u5wn1M4AQZyu8tN6ZXWyJi4CJd",
  "key43": "J71grqG4yvCCmjfYzLRQXZkbDYby16669CZF6C45PK5EQTiYxdCH8qK7K1PZeapcHda15pY5ebWpoFkvFjQZTRW",
  "key44": "2C1o3mhpEFMYJbqJsmQAUsVowcsSytLviF2ac9X1vTGhUsptWjdoNTf5yGhpzZzAGVkAAVFaCTiRyxYzdURKBVSy",
  "key45": "5KhQSGURudM7KW2Jsa2pytxUCawAwXiAAQREVwvaewQYU7jLpiNptn8oubSoCZWnKmbqXWsrPcimntEVZRjSVuoK"
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
