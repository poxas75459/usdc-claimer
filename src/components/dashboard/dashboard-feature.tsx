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
    "8xZiGeEjVEjxBKF9tUGw7qZQrKKQVdGU7zbqXdnKoj5M6Qz1zjMzs32thcAA7wz5ryjS5LiF2x9rwW9kDtiTpA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcgUVWCakFXzZReNjTYifQKHMTrX7MW9U9QLvjPBFPVsXdYu9yjma6rWPwT5vE57kTuLDDTP7Nh5PoL5sMWQRoV",
  "key1": "5PGEwyXCGCSmTFk16Y4z2hRq51Y5Tx8aqh5NNDEU3ZfBLAcPQTBFJjW4Qggn29KUhj5WhBPFaqZWmR3v8xKVbwL5",
  "key2": "5AeeSwZ4gi1QSEC3JLjnrWZrMgsNrcMyDewDMDwkBUojdRGF2PW3XTx4WBH1SYiXt7zt4VKk4a18m6zDsB5vmGGX",
  "key3": "674zWzioKPV727EpvHJAGrbCENxD25HK3JSqoJZufxQZbt8mLNPxc6r8nKxqjfbQQbDaFw9YypnDf6nCaFXzhsLp",
  "key4": "4aqY7TECzcPTqNmzcVJK88qWWQRqDqXcaX7dsu5jv4h4eRhuiyhMiesfJFbc17QHjz2NLYmEfvdvpKJmqUrSsnhG",
  "key5": "65fetmXNE7zLcVzkP64kAJWsu5XAu7dcGiqs3wR7xuBaFXegt5eDtw7hJBgkiRvSVu3C3decjA372wutURsd3s7G",
  "key6": "3tL94HHFqBeWzMNepPcJ2NZ4KhJRpjw4RwbRX5cbenvMsXYfJuepFjDhYNLKtyzpEdfBYxb97cpJ5UccccVV2YRb",
  "key7": "45QLJLqPpcxb6GRoM8C4ySPDgPJei9GqBsddRkGtZwLWNVM5Lmyq1tAexya9ndaBHxkVoGHnmpYyQJ5iseSScKP8",
  "key8": "3YusiGxk18ButgsRszJFD9JRhasHxE2MyDxN4MG6UzARB1izhL7GsNNvnQUrd4HaZtmmMt229X5L2ryyNeYpQXWF",
  "key9": "4BhCWcFQfr5SSMTfsQwdfSLjL5G2cKtYf8Ra65FGd3r2XuurgUsuiZbThhtyjwMnCGz54QqetVSNEaciXHnjrBmT",
  "key10": "2nLsZm4c6fr1UuhseGb1xJ8S2omrBmMmyh6dtJdcnRefnk7HRnmVGLjHDtcuAvyzQCNrN53QTCMKz6h5aUoSGoLY",
  "key11": "53oF5n9K1aGVVeTiprSsXaqVbUcRnNtBrAUGaFCUgSw46eSVtsU8FHR1qSoP7VyvcwoijNcmM7rX41oL23GcfJHj",
  "key12": "47NBaMbMNtrkADQoNAUdCi9SBSCSo5oowQXtENyfFNXwGVEgmJJekKdo3KbVWJSZd7ft5pY62BdFzSzzDuu4Rz6K",
  "key13": "2AN7Funtd8zHf9n83EVwSbWQXX6VBmbu3vv5JhFjNLytTHHSAXkx8VoiTeAa46JPHoVDB3UQqT9Tvc651SrtSQVz",
  "key14": "4dYLaxYauECBgnwx7Wt9pjmxpe5ZKmQn4LVpUjpbgdQp3A3ayMGX5neR3XjJyEWqp1Y6XEsntzBbtfxBqnKUgSaS",
  "key15": "2A5EEZt9tXYLnMp5tmbHtTnicsGzLme55Zra1u8vcgXssGcHBvHXyEX7dxkh3X3DvQJgCLRoRPZLSYKVXekPfzv7",
  "key16": "5ukYdDJwCMyRX1TkC1Gozb9CQP8TL8a7bb7d4UtCpyVm1C197JuVuDUXs73PMPTjJmsguZ7kD4zqNfrf2YbrbXN7",
  "key17": "5wkoo7SeCcGpfJ5QvtuQAX8uxKTAnvVmgAMzLKmNDEVmsZ1TJ8c5vdrdfFYTfrtrXqfEK63LTyBP5DkMP8za9Fzi",
  "key18": "4qKzxTdVE1hG29M5TYov5Cwn4CszKbLvAKa9rvk6tHRmfGNnRtppjfP3mq3TpFr4bFctxwtuDGvqmLcusNxNyiZ4",
  "key19": "5QHD9vrJsk4zBAy7npJNNJ7MfGUkTpVYuQ9VesKGd8Tt99EmGUntZD6iSpmrwJCdAxpigQdcakuHapa6uymYtMfL",
  "key20": "5zZNzktRGeh8RVdko32Yj7GUM2dyHR3LAvwXQmEoKwvNnaTFKoRrk3JZwynJwuZSB4PPNegomF2F3hGkuAxCdcUb",
  "key21": "3y9Ecr25cJ68XnMmWpSZYmPXRmmxYsLfzafCRqgjZXR7671pHQdDc2C9wd38nXnoeRhASwPuqMn7pkdMq32SAg5b",
  "key22": "3crZLvwbh4QC8Yn7dCnrQywMEzz3iqnXTy3RJ6RR7sc4sE9WDvmkiuuPfDe5VnXXw4i8TaJ1TuaBVHSaLTP4MJ7J",
  "key23": "2ZdF6Nnzj6C4XgdquUhEiu1Yd8BfY6BaRTzMxcckspQGLUSkBurhF5QEHidKkpxdvNxz5ZeUokp7nUbojvtiXkcw",
  "key24": "649jFXAfpCGRFPQAtFS4z37MbwPBriZUbLgfKQevNwdKBh7RZWCWRgBk7UrB2Yw2Us96wRGCBLmSUjbHVMvoDudM",
  "key25": "QWEQ21kJGFBaTjEXsN9KBzE6mC3huw4qhe8agNQcGaMzjC6DQbnnSw7vXmLphUDH1XdaresVmtjXQsR6zxSgmrs",
  "key26": "4otpq48BUXrJXYYfeHY2nXQjy24xRamPd2KqfDgg2pBisgNkcrthnGcS1843bP7abY6KG4NXhckBCURaBwPZg9JB",
  "key27": "5rSeYhqcDRDzv1mGCsciUCXP4ZYpNGSsCXYG91vj8PNcmCqwYYgbaHUsHWbm5ZSCCNhTxPDfQNhE2cBkMRSbdYyC",
  "key28": "2wkT65pW5fP2phCx6ALoCi37r8dbHGgE34p7BaCBjKri97fc9o69EANDRP5Nx7fu1QcvqJsifpRtsfF9c6CDg11K",
  "key29": "2Go45k9EVZgbxkozjuQKFYKt4o8eW7YNj49DwHFy8n4521N1PAmES7X4ksPHpZHT7Nca3vSEesRyR3QpxT55n65x",
  "key30": "KeceQPJGPtSizbmHdJusZ1bj91GnYjo21H8AHn8bPHaxfaNuorW7ySCNNmn8MsM9YcBFTSwfN8WpAXwRn9dHpf4",
  "key31": "4m4hQfhnHLeiuD3m8cNX2pqcvGwnPFAB3uSVvhboYxokSaY7YcRWh12M3owVtj5f9cXTrXxx6hxfk3ZFVobNDaZh",
  "key32": "5jrYcJvYj38TZSEx6sZB6NLrwTo4Ui3vVcE5yujPrGA1XjurU3nh5rgbjUbcSiHYAQbLeLzpdXoG49LVJMvpjmSS",
  "key33": "2rDHqz2qJwHBtg8xw9YuqmZy57svz53rVyKM6vWe6bfmY61QmLDcLt1Ks8UuSJZqv2RBrEJHAH5GreSuGWuSaMAy",
  "key34": "GeL7R1KwArmFXNz3ro6F6obWdAakws8BjTTv7wnrWWGYsD22gA4bf5YEemtsbeNu4Dpx1dHgyhpvrHMsEmzkdPa",
  "key35": "3c8U6k7trDh1ixW7upgwa7H7WJGsykT4Qh39cKUAyCMEJbVfVf2nsgZsybUZZgKUqcQjdKWgDC4DghdVN6iDnQ9p",
  "key36": "5gNWxEFRdKcBpUc6hX5v4HKH22gBmqh64dbYshzUUdrZGpXLhXjjYKYA6jWVPQhKcbry4UxHCeUxv46LFTfQyBEE",
  "key37": "3Aou2mSV3zyEF8Kw4mkqssiZKhYmjNB9PTv6oAQe41AuNoMn4o13AvYzCHuvdsSrQPJSPHAnExn6sQwUHgMnCzFR",
  "key38": "4D87LR5ZxyUt3jqkPY94Lw1sm1idvRXFJvFt7MEqFiA9YGJzKHaJRfy6a5MdrgKTQy99RVx2hX6Q1dSxUNg6SnB7",
  "key39": "3tj6wBivJt7SjdeUpwBhyKDPtT3LTSPjPJvBrUPZMAEmW3tQoxNGySPEQdQ1b3ZeqofzabQeS9QkR2GCRXv4vwsW",
  "key40": "3n1BxyKKhZ3PtgpaUxFHD8TubsLTfFWBu2EPq3fBZLtZv3yHCYCQzfZ1wvr5bRActYLduQSF6SwLup2NAjs8bw5K",
  "key41": "2qWTz1J4vruo5wtVnea9m7KFKvuUzA8Q5Sz3xsJuc2aXh1ggmo6j4sdJbEXSKkHE3zwRXrFKZHLNYSwNraZfqw52",
  "key42": "4wackZAxvC8exx5GKEeYKXGz1awcVYaBtrPMJn973pg21tiZ4Uc9HMrF7q8kHtJ4kcDzVKr4Zscek83NsM2rwanC",
  "key43": "67muhFqAd1PL6B4GYA3G6E32hiCnGkBpMwfEvp95MTfetLPhWdi8R4Eown2yggoFquAVz9sY7m7Htvx9xbSxixai",
  "key44": "5jsDFvFBwvzYuTYcecFYJ59uJcn8DLwftQ2ti1quv5XzQnc661Wyocbjf6pPaJRqYhJrmWj68My2NVWW5HaDHJhP",
  "key45": "4NCr8KHzRA41HhdF4VatTsRVPCY24TboESRaPh9HHVjEioj9bCV9vHnErvAqbqus1us3mZ8CA4xdjgp4q9mTUsJx",
  "key46": "znvhuy68C3MmNdmwEdxBRQKUofRCvpX8p9kp7Dgr2fNuLJFaACtyRreBHVcV4tfES4EMDiDWqKYcWHPsX2VVyqH",
  "key47": "3fqmP2enPNvceJTeaWnZgDVNGrXzpxkPPtkF8SMpTq5VKbeXYbNj7KMkLPLiGhoeFaPcXtBMSF2tzjVszrYariGA",
  "key48": "5Ryu33rt19iWBrW7NjtDPmXuogXbPATrPmd7yifrH3BTHQuVynevewpVcXkyFJ3r5stgpz47A7fgkgaWCRRHxHTe"
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
