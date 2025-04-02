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
    "ZMDD9VKTzSUzEwinfgiAXjUfCGZoqo23pD8jhDsYGpBTNzMwJ2iFCU8To1UnqepEkgoRwofniTp18eEc9qVSucY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWqgnaUoVY9fWmDvFpYeJr1NqYqX8huZNqs9yCCPkjYyQVexPXWaecyLmTv9GNtphbw3GqARL7eKyG9h95cvkQz",
  "key1": "4GH4fw2UJ37Tpk1aPtvg8GxpUC9VpBXsWJLtDXFsYfo6EsXjiyBDVaSXTkuhnpVez7nbWnvLYNPfHwbNEKMN1z58",
  "key2": "Qwm7DSSJTjXhi289bBWHfrVKtgy7Nm1331EnEHUQtmUiXziMTdf8KnFwz7Av7SEjm8NgUq3F11YiQZZjTzQJiNj",
  "key3": "3i8VJGqNfWL9bn5EvoY6ZcUn2VJK6QZsBhbwX6zaX9ZoYNgpvkrX2RQfqt4zkjsLzLesiLsGVw5GWDstbvYtAizD",
  "key4": "2y5te9asBHxiZg52LD3WyUAfT4EHjUMoWEazBiGjpZ8N4RZQAUGhGFZNqsEDfkEDqonjpS48V4gyNjFjvVMP1MyC",
  "key5": "4NnYkzckdV8Ja32wFEp8hYQPSRZGLPYaZFZGEARKCWkSgxyorJE286DH7C36S1dehLCJhdEXwUCxcTTM4NVd4WKa",
  "key6": "48hzk4aNJtdTK8DL3sVU7mhyHnujxfv8YhNTm8Rw8U5sxQpRqLJNKQPimRB4FNwtZ17Qsftk3iN81ezfDHgkihvL",
  "key7": "36mPNoH3Qi4tjAa9XvYDAqtiLzxSS3T1vrWZ64krmcocjiBL7rMEfYNwAcpsHQVY1fKjEfWvqLvnpciFG5D2bYoN",
  "key8": "Byud6XrEw443gKKbrDVyb61xHNdH8EqUKRFYXJvJcyqMzJAphFiN9sTzRYR64DRb6mVE1AB8PTDB2DD8ph2mmDo",
  "key9": "21wYdTJxDWUc4RZi1A9L6inufoiazYs4hxATb4Db5RhsPMwJmf63KzRGwt5nDYAY3qGFaf1ssKuVrzqhe6nLHezK",
  "key10": "jrapkUh2oTWkYWuURCEBWGuaceyePz65vkWDcjHVjXXzkmzJL1C8f7U1a2cKiShw9fUqR9gVdHaeBLcWQfk6anC",
  "key11": "A4Ha9ecz7wWw4uXB6HByiaLyBx8FUcbxd5fPxnfKcVJe1iyrqzGLUvheHibtwcQvDJExBA2tJtdaYe7GXtVvqKH",
  "key12": "4dX1dRWNNTtwpAcKW1tnBjaBjcX8iZSY11HttpmkWx5NRHEHtZR5YncsjBdXwxH4hcbgfmGw9pUsogks8rbkjme6",
  "key13": "2GnDUXuRZmb4dwN1ZsvB6fi33v7TQXC3ZZY6Wiw9SKbxYtT7pemTPzCDCWUbDhVGsUCxr9r6v1RkSYhcTrRfu7FR",
  "key14": "4m7ciJiaRb4aes6XGgpCVdnYjSpoMAdM3H8bYDpJwTuXNd2XoEutFiTs5AoqfcWHneFs2927QK1EBagm5DfDgnre",
  "key15": "b3KYd6A8S5tekiTyQrQti7NjNxZZpy4AWoHVN67MmzMbRcyifUhAyrxEedb2rWt1LVKHCADTsPH8djkHLoxNB8X",
  "key16": "4gy5k3gG61j6dCkpQXA1xDbsix3W2gow64xSu1j4XK85Me6DTHQ5ccbuJYquo5hgs9BVYoTY6yLjQnZsNZZv3VFK",
  "key17": "4Z7YWMaHqyytATFXGpFojJjcc3YrJNBiBQ1epnz4whGHyEaj7wx7FmL5eC5UPXwez5FfgKyAXqqaaX1HobkpshHr",
  "key18": "FHsG67bMMZATKEc1fiKWoCwy8QnqeQWqv1Fc8guGdRxzuyP9Z7BqZQeNNaSKtzaqwx9MsGsUPMs2w22aKNNyu3q",
  "key19": "55b6ksDRSkmxKyk8jTfPD1LECDGf5JKMPVRk7G5h5Lh4jTK8JKJ1eAqMqvcCKehBywjDgmveR2B7ck5YaHfJGbZ3",
  "key20": "5hduAor1NYJB3rfAKuvLoLKmH78L5TZd2ZgVJWUvUBS4gp7syFN2CXY9qVqAMDHjEfZYECdxcv9zahjoPNqxzNUj",
  "key21": "5LWETf2EKY5fMtT6n5VwUXxK1qB4C1QoUduTgNzeK6joXNwzRy4NzuHACpT3ULMyCb5fpMNYM6qptTsbNEx3jifM",
  "key22": "26rDGAN382wi23DzGZdVYEK5nS2XNFM6rPxqnqWCbjH7R7CJ9u4LzVnCH6bnaPGpwjG9t2qxkYqCcqmwurZj6WpZ",
  "key23": "aYb7AQGdW9oUJeRixtrsnBXHfH3g3ncjH8et6TH1dtKMDbJRh9JM8v7mKg7mBjwtZr4M5EX5wCcqdQ697RYst5p",
  "key24": "9nKe8JpF5jq3SkfPBmHsbtPPCPTr9DMJUX1Abg5Q7pNFFfCzFm5FYrFyA8yPo3QonvKgYrNktvTaMqGKCHo22tq",
  "key25": "4Q2DDeutZUwCHYPXR9mHS7NTJnurizpMtLez9AdFPHB6UC9gQUSzjxQzrRjvt7TcXV25bbgWd9oQHdQw54SCbfvH",
  "key26": "3jFq3pACZAZ1e34mw1A2KDsKpGYgZh8K3nzyn8xgkyUcB3cTNdjTV91Mo1GUw78kt8doX3Amkfni2mz9JtCPXmyC",
  "key27": "QYhXLuY9uj8XLcJyFsWY7QR1KSoXPnApN1WSdGa2GTGufQr3XSbFEwWQpYt4LNZHBqngEs3A8j5i8VcdEsW5EX6",
  "key28": "49pwRTpm72ST6UqCCXjX6ovSyMjUJeT34cFZbwv8wURj9nP7BGxhgpK5saZCrzdtCYYxhks289RsgnhLv67restP",
  "key29": "29U1rWnKXRvDbAZNG77PuBJvUyD2tu93c7AAVK19BM3Y8QnoytRoMn4d2SMVWUcJpTM6Ai12uSxSvCJNj2Nd6VFG",
  "key30": "64CFdSVUsUaqg3nEgqPdgwefSftFE1mgY6zf3f2vHc4gMVbex4rrRoYswA8dgZg4867pZbFEDbMmw88nGgbtZD4y",
  "key31": "qPKmxRRQR8Dwzh98jtgRkKsLBjLdfryBAvJNHPrwxkMX3k2mpnmiUvs99Bmt7sEw5zRXXA6hZA9EiUFG6nLxudz",
  "key32": "cDU1TgyvuTf4CA6t6s22fGUksJcKpjnsJbvLzwz8LyuChez6Bam6cXR5CZpToSAyertgPM5J7JwVWWgW2Tgq7Nt",
  "key33": "2VUMTh7F4w313qF4vW9RC4ygKQeHJm6KUZj8NBkiVWPm7nPxuCR8ZDABPkQwz3tiEM1spHDLyUi9W7pU5fv2UJej",
  "key34": "5wGCm3BxwPCCTftWiP76A8Eby9QkdRicdqQDaZKwP15yL5uotnEWCwM79Yp73zPAywwDX3AopD2tzBbUsjzkpH95",
  "key35": "2DHKvu4ZfwaesarEb3knU6ARrmS8qSTFfPZ8TfdZ6N9F9kFtTdStVnAcX7pMd3weuYxTQHEj3P8WVjgmBE8NDDWm",
  "key36": "3BxQCCBu4pMmSXRdXNJfRTXBuTpBiMahgMagtLsp2LxWnnvBi2xGbCmXDQSmfxaRkKL61GjWzLy8QgEEApJCWZiR",
  "key37": "5nviw9shXNXECiK6aAjLYp4vicv2EgV3TCopC19HA4bnUUJS2BURvCYDut12Rku4LkmnUwzqdNcDk3K86JG5Qi8E",
  "key38": "8dCvrFnjkdnkJzRyPaf7ZHrBHNXGitkB1ZP6YsAzJq2yLouhheX2ViZfVp2ra3kUyntwAvhMwHW53p2FGAR7TRd"
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
