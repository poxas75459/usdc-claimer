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
    "62Tqg3oJeUuraaRZ6sJ28rV9xPLd1WAfoj3XFonujDmJh5WWHUGiUC1LsiNVtGW2uQNZTUabtgX6HVRtxXGF8cmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5DsnTajv91jzLPw1Rg9uUkSTbh3T627HJ583jmGMLUi538i5ZnaiHWqqR4YNvqCGejFYmYQMEeRXyRqhR5soNM",
  "key1": "2gWft5MncodYKbQEsyRKnpbz3jbJZwtHizAj2CVBPxpC8siLLv8aEq41DrhnzobsdpW8z1S95vahjNtfdYVTRwMb",
  "key2": "UUBDC3J1p4HodD6iBd4YE8HcgW3jH5n3js6iwquPwF3M7VF7LjcFqk7dDuBN52xWJRCjUXw77vCHBpoDntkPNjy",
  "key3": "28B8VPXq3XtrdcJihHQeTj4tn7W4SwPvtQQ6RwHTgR4tnLP52uMawJpf5jqhyGch7H4zbFAsGhYYgLWrdd8BMRMb",
  "key4": "9hLeLgmfVbvkzPnUD8d5zGMvNhUVzxYCcEQHQwoSiJDptE8vPbByZp5p2aDQEqa6PRbeUesqzUEnKBqhP2RxDCJ",
  "key5": "3Y65uEqAaEsib9z3cHnJ1MfBqbiGgLrKLhubkEzrTSMzVFDoChfhY3A7RRPfsERKyJp8ErQryuHbngw4sp3njCSf",
  "key6": "4DU1TFfJpUCMBjy7qfrKrw2wLv9ArEUa6H3QxbaEd7EhRNzzwRedSHsZyT25hjJ6egQkwB2hTB6NthGETiuXoidU",
  "key7": "3NjmNpoPoPzux2YBXJU4nczuhP9VAYxkWDDcToKrJQ5zdyXQF5ctWbx1pCkn9arYu6oBb4aWpofbK9xsGTdFvp5r",
  "key8": "51UnQAbcGvpyhFhgZme5pzd8e313MmGsqpN1Ew8NN7ycdhwLNt5aYLpBXvUy4VLTLGCvtaf93QX4gnC8s3VqMQyB",
  "key9": "b2CsDvSmy8sCwweGvbBdzfRgA4HXX8NZXJAmGaPFxmKWkwE78Tg2m65VE9PHWh9LpL6j9r5kcceEWd4bhK6JmM5",
  "key10": "2rizqtoTLniP3n5pjZ1QNuc7idkXGV4zvGuJ67i7Ju9QhM2wxGUjJoPMFKgmcL1AhBDF3aDkdjMqRL5aLbXzJYvr",
  "key11": "gwdMDYH6D9gtUo5qaJMCR8WsXUBUZcnG6LbDkVbq7fDfoPAY7fMa5vJDytJtbsqPovtADecwc9EYnp7T23g5bgv",
  "key12": "4PXwS5NSbKzfFcmfFCJz29UoH89BUXo5CMWPnHLv2gtZMkcxpErvCwpdtiyAcrZKe7wDjm8YFX7ybjqWtE7iL2nD",
  "key13": "4ambwzAWRK9kmyYmpEShFVz2j99EWPyCdcZ5C2pJ9E7VV8mq2RCBPDxqXui4QC8XZkNDafT4AP35gaDAi22EaJjV",
  "key14": "4yFdsmemRXKBxLP1CzDz6NbEyCvm6pHauBySQydycVUfA3Z3Fau6HozrX3K8GejuCc2SQB98Egzds7qKmMNZA8Pz",
  "key15": "3TC7DKUQQkjLg3NcfncF2zK574RYTQ5iyahNjQNiiqgAYtwQq7V6ss3AZAcXv8Y2qswBBxp68XzLwHC816oSjEcz",
  "key16": "M8wKrkz5pHvWkqFE2WEEocMwVnBvBN9dMN6a4iSg5w2ycrYn3SFDp27K7rDwQGxfRDXtMrn8WSRELGksPVeBHEU",
  "key17": "oPX8d13oQNT4bzYvt6YecmSWqxhsQBC6AyPodnUni2J3RXRhAXYvoGU2zWXkGa92tWj9Kbd1zp3hL49BRENaYBu",
  "key18": "2dPyHZXBXtmWYDD3VNUDTpyX44yZB8FL4vPxyv4GuHanmBXtHoTqU8vzshVm3EXGxY8VTXtn2Gd9cMQkQPK47CHo",
  "key19": "26WHpmgyKo3uUQAwe1UNiptGCE1XFEYQy7bDJqEMYzJmBVgrCtw7TJCD8yam8rLMouGG6XESrstbogcFgHMQZYEy",
  "key20": "4yMshPksmrpqGpaUy13uzyj8EoG4i8h8g6gvb26SvzZi5QQwyTCNk7KiJUtDocH9LpTQU6gxFC95nqxVTb4sNYCb",
  "key21": "5VpQPQ8BtyfFKtN3H6ZoRZkgQMGafZp5RZSaKVdm5aC14k2HtabHcXVETJwfZPQPFsDXZVsGZz1Gu8mpUXNKDzop",
  "key22": "2tdztG7wUnFUg8nWp8ik2d5CwxFF8Lrhmu1vH8jtm2CDooaFwSghbrC2BidpeqvZN7jEZkHNqVaJCYeVRGuDqjLb",
  "key23": "3jg574pFkzpXTrTg6qv5SpPHeay2BHEMS5rD4S8z2ksZtKSLjUPSsqGkxkG6xCsV6vchL7xVQvY2EvBfwmkoh3HW",
  "key24": "5QzA16Ff9wTnnhhYdMhF6RKucaqs53VVrjbkDLGvTd3h6wCCiq3UoXouE4xfEjsHaoxuS21NRxnfceo5fQTH2u6k",
  "key25": "3aLHJAZhX9HEgPEkjEXioz3hXYiHxW6cDhVWgqibcvgFXAG4ttJdEfA1sLqg7QLEgqtHfV7BxPfkAfHL5wEGkXFa",
  "key26": "caLCDwgS2mEB6bbBY4qAgLatSYGfMF37JYzsjdmr7Exr2q2rzPgHqbSWNpMCNMcZ3aHkbzjPttFYVQVaF1opyEL",
  "key27": "TDphWUb2PpisDKs8F6mWn8WFGkSdhXBCFWNYYYWHEiVyVQewJJaSmjmauj4Gz5TheP76mJvUTEf1U7dUrqa7LLK",
  "key28": "4XGXk2TRdHxx1Dmfsk534VKtFLakE5W6BGHUwcteCDrbr79XUWXFvruU7Eh2boDjTXWE3JMXSRC3LBUiwgtTK4ta",
  "key29": "3K8RgzXaRAjLiregXjf6yiBKxMi4Xvfejv7Up7h2X6Wu7BTvKD4mWhvCt16mSwQh6A3AkP81Jv3NSYuT9QBDd8x4",
  "key30": "4LCtHXP3gp3PFAVVz9pjDQWuW8trmSQ62Zgk1gktYokLb6YQwr3fU5YgVR8eNGuow4sT63rGV4Nr14mQL3i7gbFk",
  "key31": "2ytWs5fi8AS2ZaUfrNy4meKzDcmpc6WEdwAk4zzGZChK4m2cuEDzWRcuYa8ZwsWA5ZXDBsFZHpv22hSEQTH89fLz",
  "key32": "vCbNzqUh6yjvPL6nyg6dVZbcR8bcrcUfmtzXee9gQrj3RPyzacZ5gWVj1q9gni4F67GqREqTcELeNqiZ32MHabx",
  "key33": "QrnJWeiXwA17gDA4btFgJHVKRpMJZL2RBqu5q4ZXjyzTkt7HrLffWt4x5nDeftPkrcjfX1ZX6VCCDA7jttnhMyY",
  "key34": "4vSyTgC4CWyn3UiiEYWT7ft5Ykc9fuwnfBr7MftxkfkQCuZezGEUsSMpy6QRC52z6HQbmH4yPuUaLtEtfRW9Ngcq",
  "key35": "57vsZ8tf5xxM37TvswWa5T49RTBDF1grqSUJLypMvZ9STUqEFJ6RqQCdj1qTeyoGCx2tD4KDiKzotm3z1hAi56iC",
  "key36": "3rS5rtobCnAj9Ln8CfaVcLPUMFDCZwSqYJJ21BAwhzKeACJMywtNDT7jJHEdbdZRnFpdcffVLc8cJziqD2BRqXuP",
  "key37": "5j8cVUL9NEGAJ4k8bGUpFNak9Jz9qeWnFqhJqkS5kLR5Q6sFnSgNwEx5e3KRJ7tWo97pargViR5LzNgP1QMhDs7F",
  "key38": "4WDiuaZLFfCUApoV7K9HEL1RsEyduvXpRHz61GUyoZdNADDwq9ZCQPZNG6Dvj4XLP3rSbhAfJ4v1UeKqdKuvkogv",
  "key39": "3cdfr12Hko3koPfC9EKSsQsHgnmhKGUkzMghkzhhT7aFzaPwPtx9xyz3obRLPZ1f9y1Pq3r8aEKBYEkYiJJQhyaW",
  "key40": "3wnjoewnXnLAGUzPwvSGY1ujfmGtc7Hjn9eCmwSVhNGyt5hf75Wp6yyrjyeZ6QGJiunEx4zpqqNH3VA9Ez85ugmw",
  "key41": "334avyNcCg6vxPzhnyb6ob2r3HvjGQS1jB6w58vW5EQLEevcrHWh7iNvNhf8DgezF9er1NtWkqS4CJYKoJ62fjfW",
  "key42": "4dcciDk4ZNxtGs8AP8EuM1Qt6XKALVh8xEgDYt9F7uxyo7LBMfQDG7uaSPzjLtKkjN3Go3mbtPSA4pjdzRnExS9v",
  "key43": "5aMDFhkja3gUeXFEJtp25N698xFrySHzfLNMAVvcXZpkJ9VLyBA2sfUUfnQUMGMizpMLjrrzUBU24znDGqGiR32c",
  "key44": "2iojrmSgzJSpkj2piZ8r4iaabzzUGyDG3t2R3CCgsJFfZ7tjzynVRLuVh7hQZdxzQ2qnpBVuEKZiPHeqkfMWfUj1",
  "key45": "5FdbPhdJbPBY2FDfVqTTZJnReRmKVfmT9unG9ibAWxc7P7LhiEeNnDhEJU25Eagki3Ep11YoYqTEmdSPQ4Qb74Yy",
  "key46": "5uj2jHEuPDPc2GN9FKGvuNrMP9KiusNGTqiQHY8Ym8i51mTzZQ2xwCRH8uDPfUf8Q9hy9aSNarLmmcMagNXsnAwF",
  "key47": "5K3TwYmkXpMeB9pbLf8e3EHMqNwopKN9z9uSiGUp3Ei516HKKdXYTF7Cgca3GnAbMn3JWDbvpMfkPUEkR2jC4xjE"
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
