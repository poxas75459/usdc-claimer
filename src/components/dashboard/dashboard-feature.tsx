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
    "8udcuTjW16njWikY39ouPUUmg5qe2tWidbhiTS1179z5Bmp1DNmthbDETfwjTAo8D8Ue84Rmgxr1dYGzzCjzGV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57R8JP27ZKF8TG6LVsVXK4nDw7fsM2Zu9aHUNZza2H4XeAAPij5pcivFNYtDRQYTVRw828eRh8zB9kx5MStSAtpN",
  "key1": "4WLEtp5a1hiqvtZdJC5XvZvDEHuq91bMDWAbsrigTCtU5fspnwVBWW4gpPACDFUmHYkUNpqrsLqwBE43bxQMY77e",
  "key2": "4xbbTPENSVjf66BUqpGpmtuUmofUJA687vDiEcQQwxcXicM9dbjwUs7qqT28tJdXnCZyu12BuJSWPanqN8WnCB9p",
  "key3": "C88UCN5BtJzBj19qCc6wXkRnDd4ht7mLSVe3j7EXXKWGLndPoJajV8Ur5hEA1jzp4HKc2K6gcxyDVhJqBTWNhHx",
  "key4": "2wAgxNwNAQshdwJXuWptPUHbzdJbfLkLqhYAc2NNsSMhkvoMcRjrD4Gaqmk6Ja8siN3bvHKcZJuMi9i6ACYcRxMV",
  "key5": "47LNiu5yJydkbJ5b76uwGuSqhHiUwyKjNafB9zLPMGZcbqYgyWAqheXTPrRa9o49Q3c7EbJytdyidubPtt75Lasn",
  "key6": "5cYNWBAQEGQTd1TrCV4NQA2EnW3yayqh9BiKh6LP598cqR8YSm9EHCr4sASpG8dX6s3wB5UsyDf9jTBjARTfgdfB",
  "key7": "5R9Mrnrq9aFQaxeCYMSiGZbEyfBpin4eKpQSHmCH9ZgdV9kh1GUx2MgNsLGZmx7y7oTYz3Tif8jn2H4JS7arSbgc",
  "key8": "4GRmazWG6BpU6R29r1zdcpTJVe4vH7ZmgjkUjwsKQoCC651h7jqTtcRRWGDC8PYAWyDsnuy9uPaBqGEJdXizgZCr",
  "key9": "5ui49qqx8WxjztVSvhSheEBDzqFmncVSHm5smUZ9Gaw9FGVLU3F7jyb5Rc6ZMYh6RrvKxuraxrp4ir2K5kSrqoo4",
  "key10": "5iBpj918cX6pd4AWK4Lcy5zzTtb4Gx3VU4Ttoh3RHfAUanKTGt5q7SMvsfY5vLESxeFVEYCE8KLfdTLTtcyQyBCe",
  "key11": "2spCyVjZDkcHodpUJEF6S3C2v1h93X7darvghd2UguqT2g2hqh3x2TxBqPJmNwVKNt3mPJ17gmUYZ6BsQXaXFZZ5",
  "key12": "5CdDXXdnWBx5TipxhUbYzjuVbG36N5cxR1pjtecBCGQh14qV569QJUjjsz1mu6Dz2wDb3eELqqQhduvrmq5vfGBY",
  "key13": "33REMsoQkSa58FXyfSCwfdTGqVJShrvnStUvFeGCpogH4tbahPKxEeX8XcyUzt2PV9SwmzP32sdKNGqiz1Dt9Tad",
  "key14": "3HUH9d6mmSgW6jL6wh95du7EexBdPpS7BRmw1erjEJzbo7ko3UtBovVgzk6f8KQGgh3ziNurxKQfacG5qHfdez8w",
  "key15": "5waRfPSWvUBcCMjBLSDxVbEPSrSmSyWy7La5ANHUjper9YMcvRk8PdwAa4LAGn5EX6G8sdNDrQbDFgzKGcdA8ihA",
  "key16": "2Kn81p5bxfs5ENhtHc4ebf4yp7S2PS6K5VaBjVZaT5Hz6H9PEyrbW3NFJPYcfWybjDHH9F8NpFwtnDPZZzZVmBFt",
  "key17": "4aEV6NofYz7gULfFL9n9uDdExCvDYhtbfUFznN1hgD6iXzcq8cBF97XQGLDAJqkFh6i3yrEna9so5cQMnhnYLP69",
  "key18": "44axpmKVqekyCzGyQNCcYvFUEhuta3Qi5DKaZaBLid4jsu5vF1u3BaTnM6HJAMP86T2EJF87nEeg2xaYzpgU1pJQ",
  "key19": "3uK7QmNuvMMrBG45KW3DZkjiJ1QHM3vRxCuTLwL9y7ib5mMhtzBaYyUn8Ma3azNxhenHXMggH595eZfdRsHriNiY",
  "key20": "3zoPgvZhFWMXuN6QvnwQsFRXBxD1xkZ4jMwLvR7FkcE634r2yWbyFjeD7EgZ1r7845pH6XgAKds2jm6p5hdgeg6f",
  "key21": "32hQAmamtCMZDsQDrRbiBMhiq5d3yCFJvdXYyv5MoqyxfVj1XNfaWN2qpJa89Bqw1tfWgQDkPucWMz9wRhEaNDaw",
  "key22": "4gN7RTA3x6n4BDraxJf3oSgUvQgmDLmcmBxD1nMu2FgqAYSCadPqyJWBwbGzZUNAMD65rrM4i6eCTpCJqLLQ2JF8",
  "key23": "5cVeMwq6tEpWTCWtsStcoJRH858dkWRyzsnEJcu8wt4WVEth6aqMzrjLgvFdt6Nb2SCZUwcj9CFQbchq23edat2G",
  "key24": "Ao3DLQoHyAeFbjraT3BFUeKm3q26Dt8ZLi2nhzF7LJwtEbT5DqfJNg3vjN4LvHsTpKVS5FEk7awc3Nc6kZH6iK3",
  "key25": "v9XWfSv2VtkgABxm7PJFFwYS4573e7PYt4xUKFzoyu7eUrxjR4gK8HMD8bEqMBKmg7zzja7uz7QSFtLjJmqdQhJ",
  "key26": "R1cAoksdYbLRiZWuybb52owArsj7zqBTnSjdQvMmrkRHnXhStMFupmyLMsURiTW7scCxHpMexFgFjHCvZfUSFvB",
  "key27": "4XeSPUthgvWBcJ9SQd4aESZcPG9Ep3qE9rCovTdGizovJnbnPg4fPzy3a8xgn5AMXohHkVVXrtjcBgwWDrUeJxng",
  "key28": "Qi9ijzhgg7syyKAFF8PxnLJKxhBQu4KUAJUcLFDGyyvanNWwoGWh77WrvEvT2BPcFCGA1q1KNe48gAfLcM3JQhx",
  "key29": "2i8xuuTb32ZJL9YASztqd9zjyBkws2Z2xnHYvdNBNZysvPYLDQG1Vwgft8mmR1LcCBT8VL7V8Bw8yGCXgchp681f",
  "key30": "2v8d7FruEEUrEPCr9pc3HVs4ydRj9mptR58HpFx1ZhPxQ87vVhs8sFhwrQqVjG9LvAhUAVrtvAG6BfeWgwKXZg2M",
  "key31": "2LFYifq4AWM61qdLb3Ea6CvHXG3mb46AqHFC6Xyb9pMzVkAd26yGhrh9BqQQDzgSawtcFfDa1cUvXNonK1naqLNL",
  "key32": "2GJjrctBECpjupQjuohWr3mZhqmugLeMT36QHnjf1QLN43Zp6bFQJurKCYKzxAD4qEXpxa4fAfcaTjPZNTD6g9aB",
  "key33": "3d3uysNNuaqXXn6ggfjRqKuSoA5LrrukgVb57rfPotWb2tuDvozmsmrBgZjbpLJD7Po1GEMYNqtqpXYHSSjrENRB",
  "key34": "2p6pxmk7YDPsPMS3L8NoZpFNcwWuaBZqqoBFLHB8uU7yR5hbQiP6KrqY2Bein4bhNDwT3G8wBEeVRwD2GhiqfqxA",
  "key35": "4E3cALuEvqks2X1ucQFzkf21C8b62xYvt5Mbrnvoj6UueSwp5JG9NxWwzqaNUvDxDXM8QxNwTdnmLJXZPiYckT9e",
  "key36": "4v8KyV91H65eKfdmyxbWTPLLBNYzjAbCwe9bA2kuL6UPWNcBRCRwuM15kSVN2tLA9iruJYGgWJ3wABLudq64HX4k",
  "key37": "5uFD2885eLTds4SsGzR3tMNZXAGrFiaMHnKQy85gMELsR1rGjJG1HSCcaJSsd2yyKqLsLyGjc9SnLeCxKiq3Yzw3",
  "key38": "5GaHrmqhzm7zhY6JuvTCQDtj9e1mjn5zMnAy6QuiRRikJX6wJ6hWCMC5yQaJeZgxhJTEC8r3p7FSTXer1aZTejRV",
  "key39": "35kWrTRqYKrBdF1rfxUSkDEGe5XfdRfxzautKWFgguTRq5fZwaUB5t9RjN5NHYFkzdBeDAf1CpRd2UZiub1Eedcf",
  "key40": "5Ju1mv9rBYmHyDtLpRtYD9DY3rrpUudMCWr3bzqX77PghoWcihk26AVGu6eKuFbCU4djZT6jtyrVXmdXNyiw6Jc",
  "key41": "xUWoDu1YCLXd6hAkG738HnsxJuG5y6FXtLu87n99hrAnmEQL5m6ZyEsyL36PupSnURm4X9mDm82eGT3ByLowi9U",
  "key42": "5SdJTfue5C8wjujoJ3UxaQfUJXnS9WJmgmFhKS4mEgk1QnQsJhj8pU3i2BesdwkUXnNaKkGPjnhvw68YwwBwJXMz",
  "key43": "4qphQiJpJGdfvmd5XkFD5SBi35Tc7TibdDBBdyQkqz7SPYaRb8kCCS1X3729GWjAJ2rxAN9QM6auyTr5rMNBkbab",
  "key44": "5TxpdinJU8g4qHLSdymsS6mMDNWwK9fBGWxCQa93fQ6HJXQLEd9C5oavs3FVYnJBGYBTsyTva5j3kWYfy9ASJete",
  "key45": "24C2K7d4SCRXiqx2odNkbEVB9CuJH6w6yZCpN5xJwRG6UrdzgPEvq8HLyXr1WhMhWoYsfsGiUgbjBWNgbhCEhyDv",
  "key46": "4JK8k8WeCfEZYCLujqodfoKS7GqNdV6UcSDZ9Ys4eA8aBwaF19JJyFCJ6dhvoppYjHB7Lhmw6dZvjznizJ2WAUK5",
  "key47": "yEmgJoE8EZjX558kKLprTcoyK33hPEnXq1MqMQhXmgFtprsrvMGtnVMXVJ1wisQpG61WnxegvcA7QKq27Md2C8m",
  "key48": "5TdCSAUiMrPtCaUftPjE7gEtERUcQ8wppceGpZjrMDiaAu1oeCdnJRnDxbpuPaTjjtnthoXGfWcCYqJ8eyxi4Kbj"
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
