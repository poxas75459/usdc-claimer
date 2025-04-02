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
    "3T9EJmUncQdMiP9iaE9unM3aSHztCooWTfTVDCL8uqPgjfc5RksuVuN8GnYhZTjXVBun1g84G3FxwqvAT1gvcqGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1ZbvFJPUJ2btQaQx91dozhVhDtbSZwWk68WYip2f37h2xV7Khqx8Bv8ZDFWQf6eg1Wit2uu7AQbGDLj6guFGq9",
  "key1": "57Css75JdxkKoj8siZR5UfYNa53AccsqRj4mJWAKbNwf7YXsTWgkk8JsPP6L8YK2WmNeAGyZ27StDNPEkTveM1fZ",
  "key2": "2NJqmb5TPonyGW4t7b81YQrPPta4iu83Lc75zXWSbthn2Qb29sFsa4sToH1sJpxapWzp8oYsLFMx6pPEMT29P4s3",
  "key3": "3MepzTf5GUvdCKXRSycQZqJ8Q5qNsrRcMs9CoP8h5szzps1Td3NtkoitVxUAEmPHcoiKUYbEhtrd8Asa5nL4Uc8Z",
  "key4": "5eo7YxtVHGmvjJupYHfkRAiKS4VEFzHrE3tMxtKNQSKcjGYVM7htB1gtqcTVkivpDhxAVZ2uDp2p9F2neczkFPJp",
  "key5": "4hiKuyykJqnLtKvYjBMTXfBEP6bsCgVF3beb4bBnudZi6Z2HShHd4XhgdwxZWNFKqr8GZ76MamPMiyCjUExRUKM8",
  "key6": "5983nTPqvFRN1NoSB9au4EeDj6Sqz1FW3pZ8ZJAfiezimYNX72Za27Bxb619EXhccXgvmBovifYX1Q6964PPG3Ju",
  "key7": "37C8LCSeGgDDBvgg8PFWygqk8roHfXKNrKWkQ343yvQDnJA48nAD3YRF5HKS7mvwZbNCmvwc8tznh5Dcn6DiPKuW",
  "key8": "4rWZxN1LUSLaY61F6sCZ7i4B149u2n3S4M69K9EdQ9aYi3oPEfyTeTS7EaGjq8C8Fcdrn1o3wpHg19p1GTtedmxr",
  "key9": "32UDuX1TyXi4E8BZsdjxffKg2SN2EFugBqgt4ZM35cYEgV8pp28DW9jn8iKQU1LiVjmmdPujXgcfbvMSvFg8aZBb",
  "key10": "4L3Sfdy6MX9jTEfWcryfyfYhhkULzq6hYH4KcP1gxaugRjN4aWd1qEwSQcnAHPFCoGw9PUKsaAFoNywUkwsSZdJZ",
  "key11": "3cJBxqwahHPMCshVh4Je3AMWqFdugnVzECdfsCCykZ5fx3QnQNmpP2wYBJFCQ4MD5YRTVtTZuXjWFPTa4YrgbSji",
  "key12": "2cVvhk3pmLzbDBWKBU3uRZnGEzRRPTSXS9aZ4S6z9TaWpqh25SjAtXgJB2iUAYmTrAeW1F2eRcUqYXxJzjYMw56N",
  "key13": "2teQWBDx2hu58ShFeqBjfty6JoQ8iva4E43ujyuJqfPBByEioVaiDy8BwBhwoKmKLdeWWejpj8b9HPSzy2N44SEE",
  "key14": "21AtEiiL9FXmmpdoJukPAjpXA16cCiaeswjJsWmqjwA4S8jsQKv3zKTmrzFvG95rJP242GTW4JLWxWfnF6WGSo9D",
  "key15": "3xRieAtdRbJ8m5Q1tkoKWAZsQUgcspqBGrAcP7g9Bg9jES6BV1TkP9pbBbbxi46QGob1ezaksPndPK4Cr76YfPCj",
  "key16": "54jbcc5W3hiY5vwr6GYTBFU5SX2GcbLK2ctj5QUD649mhQD49bFUgH5FUhapnCS9QPGR3sdDmK6EqCMb3dfHnhWp",
  "key17": "34PPojJqQoyGEZGBG7g7kosf8YsQyii2QA4jsZ33Dcrxba27j8dEJWGhSojjZ7oRYc19qWeb2gFErnaf4gcjtJgL",
  "key18": "2igKLrFr8NSZwyVVgiCJwR54S2WtHJRM9pgUdRSMRDghkJkFzKc142NTNH2NwG81qYdHZt6yzcfbDXEEYR9yiHy9",
  "key19": "5CQEb7Cpx8k3g6r8XgbEmitCYDDVfmcPhn4Vp7iin1CbwfCugXSjAVC8Jaa7cNQwPKDZC7wafBBriVWDFCeHcAfw",
  "key20": "5Z3CT3W1xjQSJYvrUjv53gEkGMwhF75w2Dk7WmCcF86zxsXgAioc2gL54KcT463gMxdEMzFBBfV1v69GGB1woMN9",
  "key21": "5eQPjrYpV4vPFkQHeHogDrsHR1VnkPuwg4SFkehkd8MXhKGyetzrNH5fMifAv9bDwwdXf9AB1cwvcBPUsicH4wce",
  "key22": "5QLVMJRuSece7moB6bSUKwNPcnZtoTSuRHXtPRJ6mtj7gGYkZiavrdQM7e2Ngaz1GN7AvPGZc2eveNYf8mYNf68y",
  "key23": "3CaT2AWCg6wXmC32EVjhEkh1hoS96w9pjfgAXFB6MMkxxxK6ahTaacMHxFDGA3nK7QCV3FYXfv9KCrQnC1uL6VwC",
  "key24": "4MnsMbf29TVGgzddX7TFE9hDAgTrgw9dvFGn96WVhT6e31razkTCCgeXqDdUp8C1QadmRAjx19wZnLr9tTaJaUbN",
  "key25": "2Tqc53eS7xPT7T2RCFfD2uzty7EkNFiCH5TW6VzZr6b3aRqcBQ3UXJF5sx8Qf8MBSNSQbJuTwStrbwGGTbsTzQG9",
  "key26": "5yd69N42Vq8p9Z1LeApwVCfCVskHM5hP552gEZypYr6jXFqFv9B4p8NtythCye3KPWD5S8BJcsDRXNQmt9SXH2H2",
  "key27": "qiVNwGUCzgwCEy1R7apbTXS9bT3qpWxGZ3XLq3H4hd81YYAen9FbYURmpGP4dzG1drzEb9HUi4K53HBzWyp2ubv",
  "key28": "2YDnqUx7NTgn5aFpq1UmjmAeuX3XhjKENYnGGvS5GEBrotbb94ukyu5vzByNjyxxHk7ywxh5EFSurQi9gcEaATL2",
  "key29": "4aRwb4DKhpp8iUpyRc2yMjCn77k4zmV2roS3Vw2zahTfsBMJgw7b2HapPyxtnkg3b9pDpFDRoDPLCYq2AKTPqzUn",
  "key30": "xUiwF5XLB78vZ2geDhA7nrVYrQE6ZtnkoTQV4WRWmYf6c9fksVFH3XHN5ECj2526VcSvKbG1G4eHtWsJZz7wmXL",
  "key31": "23VptwsktAeBrKywDTCCgYtRhXqWcniu3KwRFEuuFsK17u3BTy9yg7q9M8i7HaTfMrSMxnjvp8T4T8VSBjkRSpHo",
  "key32": "2XHxV1M5Uf5JPnp4R47DtYt4ShvG6u9bNAsyh4qzTb6aJcEqStf57ckxAwe739i3ufJYG43N1gMgpxXV1Ak34Ays",
  "key33": "5PEdby6CTgLE2FTaxp4Jayqm73Lr3AQn11QApJVg6ZWjnHifgyPYk1uDL5KKgBKH592xKmGFeuHKG3CQesjkKSrv",
  "key34": "XSVhCmwsQ9Py5R26v9BFJ9iQ1Mmvmvnp6UXFcwV5Hu1eMXjjcquTBfkeJGP39oXuDEtD1cMtrNYunfJuzJZRSvs",
  "key35": "43x2WeiyzTd9GAzsWRLrBWeXGYg9ipoim2pqBuGsCmstFMB7yVKB336Mcn5Xb9sHWgwXvDC816T8zc1zhyy3LFtM",
  "key36": "27zERwFiMy5Lw3D1VAcAzY9tS6rVvgQKyc3yFCV9VCoiaNx9Gkv27GQmpQyKk9KRxSQddQegJSmXxeykMEkzA8zG",
  "key37": "2E8ciypiR5M2fawj8P6zKd7orCcN1jpYW19tFPKQWWFpikgTijdnEiD3hHKQc46kh7Feo3L9grn7FAcS3o6GC9UN",
  "key38": "4DNphdioyuCdVb1rWKVencyGP4xE6dqeDFgEnEuXKsKwvV3bPhnhDKKsWXFewPfpezkFUE6Kx5PmqB5XYiMML6k3",
  "key39": "5haQQbkr7mpoRFkdyHfqHGTfUqHGrZaBPGPFxWKyk2AfTkJq5r6GRGmbmFfgWBm6iusYSrkmBe6u22UYPSt4fnjx",
  "key40": "4cdTEYT5zPHCpxA43NpF4KwaCUaSTdcbhb8jRS3iaSufFq2j4z7kXiWZCjMqKjauQ9xqJUDFbMWLAEXAWNqpctaW",
  "key41": "2eEtYzizEzqoAoikKMqdYS43d4i3HqJmUnMetgEThu48gMz8p1bgACENJgR19CmRhHsir7JttmWWMrc4tKkaDaF1",
  "key42": "3tUiLDmt2wCujKaiAk5XqPDCYKnrzvJpHCnbR86srZ6hBai8i3fsb6PrzEQ6uU6Bu5FKBcqGc2DgbDingkcjEWi6",
  "key43": "4W6eK9uurNhiNpJ6pjE1brzk4QhJKxq7Doz8fMDzhX3L2ZQeRpSo3fZ957NMPjV29yz5eUGJNQsMGDUP5KisQ4Ys"
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
