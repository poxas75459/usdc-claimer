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
    "4PzKoitC3KNAGLq5Buj4P44RHF2kw2XbEyJH2fcVpsoRKjZsJ4GonAG5gyhPSFYrBzLSFbYmdLPjCa1NyvmZhKtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JEthr3NqgTKq3LPjMCxnbRYjKoSUPqDoaDJsahBvJ5r7cCpgSFX1mziHXfYNLKE9rafQjxPxYwrC9HEFRVFkqgr",
  "key1": "2Re2SCojowY7atYNSCr9ZHscjieChbJUHpPZQXxa6sAzkDTqQwXisq3eR5suQH9gQxrCHEJhL1VA5b4UrTe89Nec",
  "key2": "4wPcj6716atRhSU1sW8uAvyrLuEhykdUcUdj7GHXyZRzQMzJ5QeTWeujYw4mZwUF1WRz8PLNnk7qLe8SBBpmM9CY",
  "key3": "3GZ3uUFSMwf2frFN5wYJu8EtEHAfrmHYumtJEujZsuYTfTwntrS1KmamM5dnF2iaxuPKFpq2yb24XezHbwqL4eek",
  "key4": "33eAq8oS3eMxELqFx7vvKM7EzBzcWndnYcW4tkQ4qrVFUdBqCMgGZtDjWU96ymERipnSRC3FBsBf3RU6chZjzuzu",
  "key5": "67m8mhk7EvpTg1Qhftsz5cGrZMKgAcpDEnjkJWTjswccpJEekbfRQNj5emZVxDoBJa3hWR5iQavgp42dQMKPif3T",
  "key6": "3sv57fLDy739ZcMva9fc7KvKFcvdWMcuYApEebRLV8BQBy8MmQcAwNtJy3SrjT5S6m5DSSn9AKfKy4WmbCWGqxCT",
  "key7": "2ryLX1dp3gLWWY8DofY1xPb2y3TU3eS3w9DVmHdbpZyYoTVng9v2KsK9vH9tDERDMAekRCHmp4xcFWPrYbgCwGgd",
  "key8": "pa3RPSfNUwcV6Sa9hpZ7Ci3ayhndVZsyQCjNp3RVWNQoRyYzDkdoXUYGBwrhSoR18zVER4DwZvUvPxw6iU7JwAc",
  "key9": "3w2WxWcPH1ND9r5gd9rwV5xyycDoLEt5ajjz4DxwFkLF4xDkvWMy9btd5XM3WKNHBASsgrFn5QYoqFHJuR89FgwB",
  "key10": "5kDqMMQoCiJZsmutWw4cpJbqNkwj6AKdSBbY858gdtip2dnjj8hDdQjHQS1pZBKC3wLDdqBuZG4ERx5HNVyUnuvN",
  "key11": "55Xrgs3XQ58ixWVgtG6AUwgk3y5iLGis1EocUtkmdjbamGeJifyRJsG3TnHsDKYdom3MPebVHGK5mVgkrJs9C5u3",
  "key12": "3smhwk9SY3QiY5HjphxND3zr77nSPdtSgJ5ZqpuDBYbNAPQm11cVrWdowqofa4iBcZqfuxsTCauMvQDDi92Vx7UV",
  "key13": "5WfduHxXKrYbMEc3bqKtrFKe46vLe5Kw63VWTpxnyf7u9HEYx2Vis628BJvSNCuVLvLmD5N3amsmabRwtvggAUs7",
  "key14": "2zsSkocbK1gMA8cHDdpMFUGYQV9ngdShGbX5vVPxZWYKBiuDZA5EA57N7FAKiorg7eyY7B7sd195hFM6wR5Zdbzb",
  "key15": "3Ywx6NPJpfHFwF4aAF9T7NTTBCmhiiePwnsobaaQ1SW4ZV7sLaBPUa5cVuAw1obGBE8D23ZpK84qKbmt5DJ54hTM",
  "key16": "4gtydUr5r6D79sf6RinhyM43Gdw6N3iKznwaXkA9Ru1pc3WiVRPPr3D13nvMniMLVuBbLqvFj9hLQnsmrWBnXqEx",
  "key17": "3E2KwTsUqcToMyckrAAfSkbCA6iFm1nhqT5M9ZNFfVWfgWWg7StoxUK4gfdsY5cwdnkUmC5HWch4553GiobHHMgT",
  "key18": "2gqzJFUjN55EJF2hftybqVEg2UqsG8E5UGraEnfxaJcdpLXrJiL6Y5Pw31Lg8Dr8Ld1XRm421yh662ZnergaHChY",
  "key19": "5qvYP8xvY6pH6aia7Ms98EcHP3fQ1AQsjRMHUy1JHTykivdKazgpmGHRtAHuucjgfdCc7JCvTNTZ7he3aC8DVB9T",
  "key20": "5L6sedNrgH16zKixnfeYHddE8atsDsQ4U4SQ2agAzm7jk3h4mimggN71br4MMeWXzryYi3BdF2DqfS1LsiQMgqNm",
  "key21": "28ohkR6oj3JVXwDBC6gytvS2xScjVFQ1LaR7VzA8sS84BFA9AFRaewy3eD3s5STmYXxrr4HPiBUtSZL4NzzqdmBk",
  "key22": "5L87BPVF96GsE2XPeY1h2NmZUvZbt7A1wRmZoiw45iXUNGtAm3AxhoKvp6agEZrXkgaAEJd8nNTeWbdkyxydHUbz",
  "key23": "3jShc7sdBbTDMtBSR3JeVjP85LG7bb7ky6G1mMKEf8K13k3Rq1HJdcV4bKvSKdTGqaW3ijacHUyemHvRxE6n5Pwn",
  "key24": "fGRP2KBQAtvT7QZH1ebKYaEYB7RbL9HUHp82fxfPeyresK6nVvc4GawSnaVdmdujQoT4U78tEmnG88pmghppxUc",
  "key25": "ezgX81XTMtDLNLXKzWw4CGHPDi7mw1C9nedyQSchnVYPPzRkz5GqDu26nziyNFesNGUyKRYHa7fzNqM6koSyEoE",
  "key26": "4vu7BUat8i33MbppJkfSbp72ffpr4AFNWw1z8UCxZvyeLzrWcdzLuL9B1q3CwPoDUPxrPQLApw4kFimtDmBc7SUV",
  "key27": "41fMcw5naehK3F2PRX6b67P5LkpsDf7SxCzCH1gBfkqPLQ46wK1sy9irX9LmhCrwGV93fKfSkR4DprgYs2HSjrxN",
  "key28": "2Bhhdk2YLFFu1V78xGrqsGArCHgwkFewVVbafJN9kTskHLCVL5XLuycAJiNPnRUGwUbQGgv9WA1vojixet8X8wxC",
  "key29": "5npCt5xMSZtGUYjVJHVCWMpMdc7g72bxX6YUCdyALAHpc1WqVpe29QFrAjuVVaYnAPiT3N9akjPirjH4XhFQxVUC",
  "key30": "54bsRhkBjaGFiZoArNKsgaG6zisqEkqMJ9WErt5uvoo4S7LFmsbVApSyWDLLobYZSLJBY8pBPetTTWaVgJJoM2fP",
  "key31": "4XT3GY1uUiUKXgTkn5nwZcjUgemmPkS114tijGSEd6kuk15LbyuSHv8XeyAiw4hkiKmZrnHW9cPYgBPeX1d2v33P",
  "key32": "3nyuuSNRuSnq1JTxyeJs9WB3bzQ1GXxnBaeSLarRFUbBwcdmK1WvkcTQpp4SSDGyGFaq3eU5WdQTVYKq9dStjhJ8",
  "key33": "5sS8zduRm4Dx5BLsJSrbZnguCU6u6LLJViQLHq5ZGuFeFex5EYYUBFFAqzDgWhDB8mTs9E1Qrvspjx77Xqr7P4x7",
  "key34": "58dKzaNYDjDW7Cm4HB2vXN1FWnXYGa3ZQFXxsqTfNQDxcwgBevUyDCfm99eGTDR4qZbDSLJzzb3fkDr5dxRBJYqN",
  "key35": "4sWDxuFvzUbDZkzk2kkEroKDLm24dpJXYtEiSua5qgAfX565AqV6U3bubs2jfrYQ12HtPMsenitzLCSG7KBjZath",
  "key36": "657BzBVKesjPbKvwSc3m2XHa4tZmgLh6WsSt8b8PyR6g1kcRVwhT5tr7cXED3m9YUWuJ58jpF7NG6p1Mdz3a8MgA",
  "key37": "2qryYHxv9LtsvmWGVs8sYAKMTUoyjReEcfBFRXKPAAEU1AtwT5KZ1Gq1rmkuKrV9BhAEHFGHEcEqPVuVh8PEGKzQ",
  "key38": "2PphdA2isApiw8PHoLPtCmoYHa4p7PsXpbK8Qk1peTsTwnpZ3EjjqrajB7Xf44kC3rYuoJjXGW9E5NVfVxQmJv39",
  "key39": "deMNMFBEVJ6zcspWSQSXYronjEkckJr4MZ9vefgSmfX1fTbbsoXucNKCD5QdXpKw5AJ836MmfHS5tKsSHvwYyyn",
  "key40": "66vtv5upUdCTvLfehkwqsGba1bNJ9mtLjTGQ4Rqf6cXMtjexJrZVMrQuCuMVUazVzyM3MvjcWbfKVJWpLTN7MQ6T",
  "key41": "2LrrYqiz4oB3DxRG6ofnwSF48nUyeodvkbZPFGgmoapJU9TdXavL25XgiiTcQt9KhgG8J78WTUPayC4kAc8WursE",
  "key42": "4GCstoMve5N7Frt64tuihy6NqHpYhftkvBR94fGA8yvUENCcVGAxib1qKmYyiGs58mJrPmJyRngGSQoiXSRxb5T7",
  "key43": "24wEZWoYLp5cP76ju2smJTiVAZ3tq5Ro3ZLASaqwg7M23mk4YnusVHH5bjXQH5gxM2hDdSXurA9RSTgJ71wc3MSZ",
  "key44": "MFdmEdP4xBn5hWHVUCySDoJJwyfK4Dgf8jQUVXHqQmXZg2r8kRhGjSFDUcWyNsjPXaceTqm9VMNYgvZ5LGzqvsK",
  "key45": "4zSBGyvL48uvBnFZA6gw1NBksDn4vrUef2oWjtkEvbsLSxeq16NhGcBNpmK8UADYUdJ9LzYLphchVdToJUuuutAx",
  "key46": "3gu7Cg3nB9KZ4eDf1TRqyAB7FUdDNJJg7vzgmCqFXDEnz2LZTmYzUVM22p6AfHbz1nqoJ8RXtbLtt9xDpQHHXyhH"
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
