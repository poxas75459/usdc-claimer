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
    "3o5p7KdL51Tkvgwk7ZBprUY5wj2txM57NqMSgQSxaWS7j5crkJGQrvU6dhjdNHRuWVSESZb25MJRZwG1BsXybah4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1JzVNqK2uQmgSJeRc9cZ8nUQYefy9thSC113SPmrQgDdtqb6sAoeruEerGEekm2V73iN1rz8zRCxhdjnaPE2Ps",
  "key1": "s3em29x5Wc7XAD6y3ntMpiuXaQEppBDwnbzAuUhMczPqm6j1cVKSPHuhNuZhCSkEANe1WQBgYo4JcYiqAurkNR9",
  "key2": "27UAHyuokBaHkdrbXppvK5du9aiAA7xK9c6TKNXbaegvQc7c9zGgmQSQwMSokrvGoPKa8opNeZSw7Feax7MCVF13",
  "key3": "pxs7zFNxH8quKz6dRrJ5jzy8an3BjN22H8kd9oi8cCxPYschLNvGWu44xtmvCSLCi2YFDFq78v2LmcxCyvkxTyb",
  "key4": "4N69mBRnG9jWMWG76QxLoUSP8Ncmw9GJaGQLp2kwS1q21UxZEjmNym47kQbSD86HPVnxW9j8bhQsV6X9fKyeKGZR",
  "key5": "3cqJcBvnwoqnjGn7RJfTxxTe2F6vPWheAXeiXujNs1is8nxWwJ1dCwjkzTch5UR7jLvjVcpx9VuQXiFG8X4WkegW",
  "key6": "4xeZQ7bM3WhAtTmqcEcjWcdC7JU5EzehMUXjgQZWEsN99Pjz164MPCazi3qGtpVWdZ817ENT4yNXXLz5U4Gsz6xv",
  "key7": "GtMRAegGD6hSvy4qtMPC6R69Mk9EoeUekKe13Mge1ub2zeUkgHt5RZjYLBYbe6MaBSvhN9A7j5oyELV6GBETMV1",
  "key8": "9MHFV55jEyoHQjmN5SevihMwJX2zvcUuXib2tMF8Ptjf1QRF9k71sebzZZAdSpcAJuH3FXs51j8P2Q9zHjjDqsm",
  "key9": "4SwAPPBnHbYuu4HvipUqrp3C9EbLa9sYGLD4f2EsAJNKbmagrDL8Jyui7FbMDqgF9uhmJQggfBrwaYBqhPx8QBRt",
  "key10": "3bmgBuktUQdK59rLcSQevJnPqPjCqJPJCBoUt9FQyeMQA4RYEubtWk8KNM9jpdC4nuSJgb7b45mj1cupskeaeUHS",
  "key11": "61oZ3EsaxcUoz2SPuUxg9fQPuhsuh7FX5vHyZzmB8JFyxstMnfchz3MMWj96fCx5dQfEqQVYPSGaKtVLhZxRPUB5",
  "key12": "4VJvRvtLiRQTMdN2ZEpYxdW6S9dw6VdLW3P8Rpk2anwiGA37yAfims279aVRLy6ZM5xfrQwKrHv9bhZ4iFFNZQPo",
  "key13": "2HpEjEJjdYaCP27mSGT7E5BNBJw4TXyaLoH83E9AMjuSXMX67pB3RMwu7npV31YKV4yh835ANzhtnYTJDRfGu1uu",
  "key14": "2T1Y5LpTLxXgstdgZ49TooTcS7ShVKPFJzkfe4het3aRPpijcyoASbHeQFtNTvhfmHThLibxPTNwFCgQNreXvgFf",
  "key15": "S862MemQ5qbMDHMW6TGK4T3Xpdfn2zW8chjhJzZgpjPY1peCG8PttZMTn4BaW7omQGHTFDeRLHjLE4STQtV2eyR",
  "key16": "5dY8zQUha35sdJdkcEEjqnDVGVhAPx2Amq4rSEnHTxmiYzdhT8CGaTKzBbtiTFUD3MAEgKjbHkYUrCiXAdpmEVz6",
  "key17": "2NmQ58a939xfq1W1fC1FKP9XD5DfLMyrFBMHhkYRF5ifb1uaXfmppwxhhuo2EBuvNDEeySC1FV1B949TRcE3Q1eE",
  "key18": "4AmrJzVGTw7Y9dQVPgxuNMXG9eXeBfyQRw8cPRyFVpGGrhVKFUKM9PMYJTuCN5WNftu3DjAfzwHpd8dvAYauhxwt",
  "key19": "2Hr2sf1jbif2q1qzwJtjAnjUHhDhdu5QFVchztNcuHnVrNekTqWv6kBPwGjTYy5WKYsHmDupxnrF1fJygJ8aCgS9",
  "key20": "bAtMauqSUJW829qmDh3sPa564k5VNnercTkhENtQdUyFHtvPvaXWLUEY9XrTnbmpUbAZ6gYfQL2yHCksQfqZ9gb",
  "key21": "52Nb3NzntGG3pe2W58bWJTjy7cAwQSR2rfKpn8fmMKNa2Y6A5bRcj7coWQHR4xvBxfdwAq1NncHVbqsecnnPEKyZ",
  "key22": "3NfRqWZKLSwkmjFxsxzzW5absB4RFzkdUGCT2Ay4nWchMwLVf7PKZ81XL53rvaqJN6nkFcYCwEsnLJ42ugC4bwDT",
  "key23": "63HDM4rea6h9efQjyKxAHdq3fXS9dsZqwtrB98TDKDtXrFWbRssUEUn5ardMSFN43FNAgmVAPEzjEsdM14JRHtyv",
  "key24": "2kCEZxx7pQ7uupgsraaZd3FAjuvTX9KTTPouE3nS8rADwbv9rtrYziApsgJBN7Mb2Pc3sSjBnfYTb1WC9YFURAPT",
  "key25": "528NtnMpTtJ1kKMBe4WfXPo9iX8Epi8Tm6Hx4cgzhtMnrAMTuhj7uD8auCAWs7bEzsjP7n63UJ4cWjRpy853LGe",
  "key26": "WwS4sf8oxFYSWLk4dxy37aANEHSEHwBeVgmRi3ZFT3KUNPwmwCVZFvWKERskA5DoQYcNrUg1WPmQnL2omdiabCs",
  "key27": "5sXWSYcMGbE8nzYiUhxgPuMSTZZbva9M66J22n7SWmGfjJgJmrGZZPjChQ5ZQHTBrdSz1XDJro6JrpzkMWgvKgWM",
  "key28": "4yFLzQwBJZBvptNgH1nQB4vZUBM37N5Yfi7Z4Fty6eYYSQpHtXQifzDySzZUDHGPvdp9XGNvjt8uB5aZVZjw3csS",
  "key29": "3c19Hpfkv7L9G1HBA31BRzmDytf8LDPLT8G7knPz18emC6f4Zyt8UnNuRrG2QmwrZ3LopmQNZXgBtYFpQFsxYeb4",
  "key30": "2TcLtyduoWTnTxmaBy1YqUzmwbvp7LnsYUrgEJdXbPHsf3aADgY4uenQP6KMP8peh1ZkoApQeFugFjyLswde5FSv",
  "key31": "5FbMW2nKRdvi9JhW5ZdY7C1VXvpE6JXxpCxzZvmPNP8c4V72cHuNuxF1chPYAcNCRGfFHJPY5LbaU2coomJmgKeQ",
  "key32": "5m9Nndpj7vcWP3HSRa97k574kyLNUj7Fvj244aApPbpeWdAv4DaTHBwdmkc6Ey3XgGo2acdb5Dc1c8C1G2QGZBXe",
  "key33": "63zkEZFiKsqMeyoXUNYHwABPV8b1tfTT8zYkKphWnNCpMWKzhbQpmcEXsSD7nNcrfUn8sLNxibB6AxDcPt6vqka5",
  "key34": "2A1EkiL9hiGQiErToVh8GXeScWKMGH1X8Yg8xrRJRSWkni9SQTqAwpjTkUbRqVT29CGY1yXR6dhBFcbvJzzsuCXg",
  "key35": "3yktuAVtSGyB6Y6FswnEUtMdWhYR4ZYHym2KEWbsT8wa57N9S326u1mExeQxWQZ1GvtEZjC6UHJjD2vioJy3fDAa",
  "key36": "J9aBVpcSHj3CcGVtDEGJGpaWQ51hE1cmoDmy4ZuWwUeWTcK5sk5Ugg7n7Dxrob36vGu3Gka9bbcYYKCaKsWqorz",
  "key37": "4vXHa23i9w5vWRwSWJ7eFwUAyTnYhLCD44zoMA1SsEyKnjzUrK6TYEftwf4r8RbkkGDefbrPGdwhm8YQPg82vAQz",
  "key38": "28Ab45FbZnYwRYWhYZw8QN3kt9N8Lmfd77TXkce32tPhBz6aBAUJPiCX2X7Mh5EQi9RLHtNGVqTWfYx5fFE9ZYkp",
  "key39": "PfsZ3T7L1sY8WGEMsBYiugdzBYT2kMKwzEhaVLxcxvXpSssaupGo21nbhB3E7phH8c7bZT7twjLmSWXX6V7ENeP",
  "key40": "2B2v1ACdxxR9jWt7vDLRzHbvCZY15gzWdwE9roAr2FXBpRmPY8RDGoZmLHX81CSQ5gvoVBDZLjCE4DE9PJwtZawk",
  "key41": "3LfafSH5yLHSafUJCE7rRhsjLP9LtoUJ2DZWX6BHuAqJjLJjwJ1GmDwh53mgYcKNdGgiJV5bAtonkXYrjewSJs56",
  "key42": "4UbGs6vXbwuPar6AbA9v35AhZrAGKa3pHZsYQxd1FwNqPfVFwvqM7DEJ82Y9iqGMcnekaHckypMUqcDT6Jimhd7F",
  "key43": "26iSaTwxg5guAR7EcyGo2F4Ecs7QKgEzs6YdX6Ui4UMjmn77JyyxYnfucnBHAv8NhQRdoztf4qeyWXjKFviurLzp",
  "key44": "5eJ11TdcoCBXnEvUyoQTpTeS9hPV9UCcEB7DJqBAKRWqdH7vUPFHfuT1t9ZuzkQbdvS7CmgXKtMXHHBqNgVHatwj",
  "key45": "2wY2tvw4Q9PCxC6p5r1ZF77Kp7XEqz3Uq4afwdyQsfg3ngFiygVucwL1KJLUMAJcVZYsQosGMpoFRhcCBwDysuqb",
  "key46": "3aYqn82SNcYghSEqfTFXfVu49Za13WKij6Lds9TuexopxEwJ1Ucu591sNizysDP8aGnHAvpYH7GbmfAm9m8nP8Ek",
  "key47": "5TUwZ6NZEygaGTXcNbZrHds4jAQsebxsEkbNkFtLdHf16CBiZk4DojX246AZFQMpvnw8n9hHJtx5RtNQ6T4W7KkF",
  "key48": "63TPfXzr2jGWP5Mo7ZV87nsFGQBFDU6ETGMmDQieLT8SLohEawHU6bu4BxkLPWZeMc6V2NZ1pG9tHkp3fCbVoeVq",
  "key49": "mFgp8aKcK8cYTSTn8ZDC1mVaKnGkq2xZbfKjhdYjqAHpEYUMNSdAtQ1nQXN5iwfUi3eAiQS6ypdUm6Gv9C2U9Tz"
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
