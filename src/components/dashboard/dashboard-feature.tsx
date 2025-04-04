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
    "2ZYgnFERNEwBf3BhTeorrogxn2DSNh8g7MiFE1nbeezNRTmpbm716ag5Kjg1ngn9HfYTwQ8RdK1PuXwoZRGWx7M2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRwPSCqmjyM36K3aGsEoF5h1nKj4Nj9cQ8iRxQpxqPwwEfY38TowPQkLqbXAzn7EraCfCp1HRLuK4MnWaw4aGC3",
  "key1": "49wVDjmh9SodcnXG845yC8hmSD6VRqX6NqLmCaF6etBrWBHnXJaamXoAjzuJM6tVf6KfExnTGLEuxSzxDBj5Mpj1",
  "key2": "62roXavkhvKRfqQtsMfcmRJHPNzi2HP8nYMEs26JSQGk8Db9mHJPDX3nyAYjwp4QcWuRDXBpL2NReoa4SxuAzuxQ",
  "key3": "3vqsSNCqjZ2xiiArAXiVbjpYoZagdaDXKZZ1HYmz4JChAggJS27fdDWzpJXKN7gtDQj48sZKpDmBDhYtNktabXQD",
  "key4": "4ZvApKYGb7o99cdfS5R5x6B4rJ4ieJAevYCsXNwWSJgDFqGMZL9RNbBrg3yz1zv8C5WhwtZC3RgivZevyrw2Wzew",
  "key5": "65s9EVy8jS8JMUMQpiRjk32Lsq6MSXrrFa1NJX6YLqUMcAX9h9aitUuKxN4gtTqRcBpHN4wEUVfVbYdDs51RViyJ",
  "key6": "3HSjdP7JWvUsweFyj4FTb4U6uo29FHnX9eBskjSQS4o8pcrhLLXJGm96Z4XkLtBndtLPAijL5AvMvXLSXfEmqk44",
  "key7": "4X9PLsfDQTKB5sBBWxcnbZ8rC5HTQ8VEAL4rGvDWj8ioox1mTNhgP9Pwr4mHu4sdF5KBXCkDAXr8heyAzcXtfBMX",
  "key8": "2HtmQKsh2mfvgQYteKbUELz17crocmaw46gkQyMTtc8iRPowtzegF848k5LLNV7cpfrgmqiqqgXhZbA59nLWm67Y",
  "key9": "5hpBCxfH1CHPbhwyYqZhTeRBQmuuA2PwDYdavqFdTWkiGfMUU3ZZUfKbJN4LVkbR9iXan5hSSjyNyCoiKwFypyYj",
  "key10": "3yfxmPtMcwicLD2dJiqu2Xc719EMywjWuBT8NQFNwYbNerBT3pKFsdkKBKmxdrrq3aUb4bWPkxmkkL4H2vo3siUr",
  "key11": "42d4rdii66Y5ZYMbjL1RDDR2vP3Ecdm4GXP92XRWbCMDeQyUp9Zo1UAqs7TxvAnfPJ9jfSVkg7sCR863sHh5347U",
  "key12": "4bcBcATEToe93AMtGN4kprjtT2eTvg4ymffLXpZbsx9XumHBKJwpvGSTPLcmvEfnEV6zQvM9URAfDy6Vm56GLPpw",
  "key13": "2B4Ne1cjUMjBXtorsi2nTzzePUh4sHP7eXRLXFhoYvtBcVCZSCit1S9MeFbqYqJcxdS7gF8M3gFdasFa9AS4JRuK",
  "key14": "27NwLrb2gv1nYaPeacYMSFAmhM8qRBWC7yXCfpZFek2akwcEtmoWjMeG7xQ3NkZvAr48GTgx2u8QdaNteLMZt2fM",
  "key15": "3fUTaLXYTYhVgfBLNgo4Dkn3Mj4JPDWZrKyVvEk2mTjAjVqBsqiBW6oYgRvStVQw1Xqk2FCVNM54Gi25pKXhvoNb",
  "key16": "2vNHAwoyqV8ebaLHG28BbGbtKYy4k1sbPSyNbsD6gs9x9zgky8zSvEikwTvg6uAxD2YzhZ9YSzmKyrysDr2oMKiZ",
  "key17": "5tdgswKxRSenjDu5zJysT1nzXJzRS9U3fiW1VKxuass5PRStHteb6PFGuUxkuuu25cJMXo6FiUDmGsp5mDobAASY",
  "key18": "5Srea9JzW5w97Tuh3WTmVHvDegbGEh6HerKpc4ioesk1ybT9U3ikaxdztAjVZaeYyFoPotaC8m9z71wErqFKUhcg",
  "key19": "4wJ2crzLwsSSTKyZ73NV1LmkX6YFyMpuFM6YmqR8FRtxTCY1rWj4cKZJ4tqZysnuFYq3joSnt9k3aRtQMzvqYASL",
  "key20": "56Q4H7xEJYWBqzNtEXkNiMysE1zPi9boDY6FZeht9pSt6bGyBVDQLZkFzs11FUbiy8ESdym7DbUgEaVvCWTXL93t",
  "key21": "4jbwz3bUYMCebkBuHYrXSp8M6jDQRScKmSXeQiCdvCz4hMkN6aLypg9GegJsj2C8BgLSHxM6VNYTD3XvTKj8pca6",
  "key22": "G11nHt3hSbgMTf93ytyYqbf6yR7RUf9qiCFL1LQhg4v86ZqYUh3LA3he8WiWjxBJ9PdcQKJrhovUqfe7ra4A6td",
  "key23": "2kAAJVLqGsBsxprVrENxn3KqvX2qMkRUESDfL4awwrbjC4r3JyPkXnmRygAFoKevBQzP5E3GG8xScAgbFk93nT8Q",
  "key24": "3Av775RAAHKB7s7J99S5XMBzUtWYHmFyWe95ZdgwxtDghKw2CVymLwmYH8mn9TdiAUPomcQJ2eYjCTT2yjwzQGGq",
  "key25": "33cj1QFNkRE6RFFFMrwDf2QQk6auFzydzhniLR2G63RveTRcSCM43gBP7gy7RAfcQtjv4CqJm9R8ft2odxR39b9S",
  "key26": "4BGnCXvYa5qSEpqxVL5WHXQxxEovAuBNMyxvpvfzej6NKhP4ZuJyqRX2zfK6aqJhhiBFvkkk3s3MCc8yc7Ud9wGc",
  "key27": "3e6KE8gBUVMANtBAHbShevEQJTNtpBVjASWexAFLszeA51GDYa7PVmnjuALuSogZQ6kS64NtT2MfqLdxx92a8Lq7",
  "key28": "3cF1HS9H5GoPvSxA8Xvojto8qrYggK9GGaK83SwEMznLPYHPrPwoHvgt4r6DWtVrz3PiFKPXox1dVn2AyzTpYinJ",
  "key29": "292b5m1D2sXFHatnNVYQesqYdWtYjiQEeihDB7W26Wf2m9H1unBbrGp7w65naP6i3EpTjYTUuyfchPDi3gQemYbd",
  "key30": "4dEMjxHZMkUGvguc7oyspPgVbZn39FfcwUwNhjWzFqwM4pmgExKf36Tmfr2YD3hsK6aro7h7LBAstj6GJw1KV2x1"
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
