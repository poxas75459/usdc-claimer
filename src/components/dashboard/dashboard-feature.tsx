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
    "4XGZCngHyEaQcox7yC3xRxkXQ3da2PfnUnNsG1F86bqoSPM6fVcMJ83ELWh7tMi6MpPK2UpNrPdKa1VC7t3u4bZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RpbgQt6HbakJZYzMukpCosFEwnXDidXAg67xVCQTweKeXzhyNDNgJEVc4Pv8sqDgSTCKK34ku8mUTPj1YWphX4",
  "key1": "3e1d2VnPVsYhkrhkpzCkVcra2BQRoxrikLaz3nE7Vctde6fmDcaxgqv8YRxN6EYHeGBFofShWoX8Mwc8BZZtpxAe",
  "key2": "2s75pu5ZT1LNk1zufG72UhzNkZBJZRyWhA5kfNcV1o5pjt5h7ChmHiLRrRmMn79Fg2bTdbfESGGvz2jtRmGTZVuf",
  "key3": "4KR3yKF9CcFZscwqcykGpqgRJVQREpGekJTU5bbNwZpjAE5sPWSQzEQA7eHhDURoGn7n7yGz5Qwbx7FR3DVGFhKm",
  "key4": "34TrTNoxcbYQ1KnHKkZnCg13oDkfjE9Ud273U6e29uTQ6H4D9vnzFe2ACFyionAujteywkNoRVWHWNU8eTHnLmXQ",
  "key5": "3F2zUj5em6EoFaBRfT6oegg8XRRFB34z3tjQr5L2SfyhpA4xACtjbVNr5fyggGwbPpPozX3KJtGrk4LQaHDyLHtJ",
  "key6": "2DBM15dbBScymLQwZUp5qwi9K19LMHJjiHTL8DRJbDV692sznFoyYUQFNuAKYkc5sQivRhSueA1FfgR98Cw4NX8q",
  "key7": "5Y4k8HBtT7nJEMnrm16qHJn7oFwM57MspKsz8pym5GEPJuuLaU9vt3Xjrmt332179koRQzuFGQQ3BUrPNidxA8br",
  "key8": "61BhNU8omH4aLDaK2WMy6qMRh2ibQbTB9RVS9GQ8paRC9CPR8NWPMR6DYejj66s2W8KE5C3aWkSZs3oan6VdMRFB",
  "key9": "2xJTJhpvCPUB1fesxCNChMjMv28wbNSQNApPav4Q9p7iS72N46x2XJzGbHSDfPre6x7iDkR7j323CFMhZaua3Ysf",
  "key10": "XkppHiLto5phtW7mW9Ki8CwqhqGiAia2B8tYoKcXfbycTm4P1bsqLMsw7ARjtsrYDSFoSPibSdJaQXy8DC1Yihw",
  "key11": "5P4N9b3yn7CXwCcEeGiRZ9R1Q3yjvZfS9G68xziRGxUDrW79ftZ251kCUkr5KmbsG6K1pDUH7xGFg2GgbWeCze9P",
  "key12": "aRziDw1hUjzLrvBJcGhogdAruuedfbQiAHWvpmjWAzKrDiJ1m76MWgEteT5suEdGtpjZ9QxZ5GoRBBweUSfTQyX",
  "key13": "4DJDaUZYSFmWaryq3gsbPwZWXdfLcx9dQLUZRKi7xTiWxCQZNNmiMJvhC3vvZvWQLtJYeKkxZdvs14V8fauobd1v",
  "key14": "3ActK4p3cz8PcG2YtMASWBvtCFA5FUsJoMkSkniA5xBjwqsfzJDK4Qr471gcdcW7iqzpsnzitx3bjvH5brJHpZg7",
  "key15": "5fE95zeubDHgpzG9g3TvGxLHsamZXnqGxh1BsEaJxjRTNy2M2ShkrK86EVteJQpDcHs9ULtBxoGAZr3SdNt2EMCH",
  "key16": "5TCGeq1sVYPSW6CQKx6iKLu5eqK5P2n3vuQQHEMZdz619H6cnPot9r8qsjgyKUuoUyjVfzXYmQcrVXCLVj6CxVuV",
  "key17": "2M6qJsM7oCN82mFcTjHySyTXeRT7fAu6Ef41scVSmsFThjMQccaJLHj6f8gwCmMBLQWsBURmn4MwCUTXxYhE9Xiy",
  "key18": "579i8njF8mMgqFV6HKYDBFddnks5Jr7gXJBsh611TDrvNoLh4SrFBySHWRN1iwyLnJ1iHac7qXks2PVfyXYoMt4t",
  "key19": "4tX1yB2xEvm9ESiKBbYGw2HMCjXExqrTWKy53UcGxFSu6MrABous1EQY5jVxVizKeQL4NC4H1nDEARghreVzXMWY",
  "key20": "2iHmf6j278rdiDEMaFHgoSqQuv4uf5FRuAr7McMKKSRhnsJdHCY2uZ3fJPrpBiRC3WUjDExNbdVs3bsxVpHvZzuG",
  "key21": "5QFXvD4yxTDBdEQE6Rxup77PnQFTRkyoJaA9sNAnUJafymoCsbShW9DDhxEdDCpJ2QmQsdYW8qfxGXnG4LiHnzoN",
  "key22": "4J3axXrUfX8Ygycto1c2xpBCL2PfXV6f4FLZg2niFLGCE8vdVchBQLdBXuuVzLqURZpwJjqnLu4toZF5JC657zTt",
  "key23": "3AKXEYjaZxEzttAq2RMePb99uPFdRd4qdbVro5YLCfsmbyKLXtJCy9ePJgvA3oKyGZhF8HbQFLANLNdRH93JUnpp",
  "key24": "5NjbxvyKPdgySqkFEQmhVAVgnTV8zgs8af9vNCo9J1oy8sRzjMjvUG7T5iQ2uyhVCmdaeMEstKqm2qifY843YX6f",
  "key25": "Z94JozBUPEnSo7QYUPbgYFasp1QLjc5AWMLyZi3njFBkTQnogjarxTf3rmbNeBWAkyLaRq3T9UkYtEGqsgZRcor",
  "key26": "63dvFt5Df54DAi4HWQjgYwvPpEMC8xu7PwYSWCZ5J6d8bfZSnwR4fYMdNGzskDjPd46KYLnh1kn8V1PifVudWm4n",
  "key27": "4xaVqycHM2ahMgBmCrVW9QkL69DAP2iBvZTKDGHcaTbsqoHBMGvVwm21qWZXggQJcnmJH3TxSuVWduMqJe8TLiw6",
  "key28": "4d3a2cNq4iPUUoboKgnfsuhTEozSV1pYHG69GELXMQm8sSAegHxrEH5AMvt8qHSZiK4TfU1QbUkNJsS6t52LkNY3",
  "key29": "cgLfLdcTfYhcbPhLwYwtBRMsHzTgRKgBGSuicXXggRXafPF5NbcByKpGyAX8kH2d4bwyU6E9n23wrSBBhgRwZAz",
  "key30": "65UsQet2SiVnmfEvAT2vwM8FAXAXv1kNXb3wYpXU6M72aE7dZALxFKci7EUBP3AZVsUJVLgphHMP9VS6LMUWKSvi",
  "key31": "2Q8rVPLDXnaydEB5F4sC6ZE15NBtfjJYCPfrRGaFVi4K68AZfb89SZomEFTqcQgmodRj7RV5ikFMSFpBhbeWABPW",
  "key32": "3wz2vdXHprb4BMCqBavQbXtg75D36JxtsQfdDjfkXkVgJSXx94bHZFwLxyq8ALS9i2T6mwnq71FrJmstKqHjFfVE",
  "key33": "2wyET2JeKNovrZpQbhcrHynUWtqAbs9hZFXrxzsBDHWHSF6XBPfvXdbycNMwbnmSXJhNBUq22MGLWneYrHX5AhyK",
  "key34": "2v4g3VZD9TT43uHWPx8NXufH321WqnLxaBB8B1ZsLEzujXHkRysELvRgdPz3F2YDJfAQ8efRvVs5UAyN7BHNQuGe",
  "key35": "A61gqFvqsJcELJbCQvNJVM16nXU3HBCJ6QJajLFaiFPKbf5FbxsqKPWwHNisG7h3RjCWLWsYo9268xXcoZ4GyCb",
  "key36": "2WZgxeRVQdGPgJ1C48R6abLqMCAWiNMq5TDkgjaiCDKnQzAWWoAeLL1aYccigZaM3KYSV31pPRFVz8bfMPrgapYH",
  "key37": "5YMecvUnQnDYf8WTwoLh28ccJBRAHEDi8qsU7tN7FQ1hRnHo85tGPhEmpu1vWTKEgB5NRQ1sB7Q6wbc6CcrotKA8",
  "key38": "51MprfgQjjyHnNhBsEjXFEHrBgphxxcwE4AafZtCQwhLTFuZTYcP4u4ph7EAGdMCi1dnFtUfayNT2wceiaChoP71",
  "key39": "5M5RAFNLbrvza532QBmkys2vtbqsufyua3ybJgVCEYnJ7xujUeWqSGa7EPpJqVuFakP9QtceVohhK5pvoW68xesU",
  "key40": "2LuxcTNkVHd8HkVkBRxPjVPi5gmvuctyVr7pzyWzqjKzx7FNkBwbBdFACMJYuF1RSsrCWjbwauAKqnoMPHX3fQ8V",
  "key41": "2ve1wAwAeGURaS44t4wmWkV8W5PvuCEQkXhkVHQhwErjEPeoLuYXuAMxE65m3CCAku56RifiYip8fWrG3sXhZCCz",
  "key42": "41wRUbc49o8hW821rTXGswxNAcysq6zUypJxtpMTZVsWLFH6Me1iwVo7vEv5exJPT8R1gmH3Rur57YHsFuA5LPyL",
  "key43": "kFfyp3hazkJRhYpJSRYTP59WXyHs19zqdhSbbiMzbNZm6WQxVQNn9Zqsddv4UFjuVuftgM8bE4hzBNX33LjTHud",
  "key44": "2oMP1U98geBmCEfrR1jGFPmkcqdJMSaQhiqYogA6aAaqWrnACpoGqnixjR5NKikKTeNEb8ofCDZYEmQmMwfBNfAT",
  "key45": "4zmvTfboR8EBR9jsqW52iarBuSh3MU2KEVPbpyCwf38MnGfAo1fcvYNhSuajLWF8rAHTU8jfE56xJTG2yYk7VdVv",
  "key46": "3PUEvH7YdhsLXdWAqyhYCthJDFWNGMWpKZ9MrrRgfRXrCbCr7rvv3jmGpgmRTBkPMgCcByuuubp1zTLT3SViKwHk"
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
