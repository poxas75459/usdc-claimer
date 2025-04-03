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
    "NBJ8iQ1VBazxW4C4DDCEyJPnGjrtsfP2q5DtTwa44ouPLyYMhqTSgg3tiFVmDYjFjwpdULZVJM4utu8s6WwSztM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hE8jPGiJNKSFxxjDWqMdKUvXSGjEWdhSwbdkDmhsYCn3k9d8oP1ytDEQ8NpBUtPVjALa23fcGTXcCCYCZSccyDM",
  "key1": "3VExJuBSqBjpyQ2C1gvv9KszcETz3Su9w3TB2RMYsnP1sF5y6buNmoQkBGdBtYXCXHUtWMHkm2fRf6Qsmo4sT5zP",
  "key2": "mybYiDbL98NcbNyzfTPQssiRTudL41fzXuvER1MRmTeiT2CePbFTPRLSHhS6agTSAJQZARXrPHqSPcfJ5L2Powc",
  "key3": "4rhJphrdzSJYayhBoUFfRXcgfvBqJgnNuFgejTWmvhwfM1YtSctd4FM4aS6beNzAf7bu6b3Ms65SBVNhayKz4VDu",
  "key4": "5feNzgvgszPeWVX2bbwDVCWzrhoMePr8epzSC3spgCydwG1Sx7fuuLCx36Evx11yA6xxgjciMAdKQAWzT4NTFgB8",
  "key5": "43AbsuzZwQy7g5B5hifDrL6avrjy3Df36v5CC5PcdHuRxub9NUvHmBZSN4uWFgYu5kmRWoNjsErhr5HdAbo1qppo",
  "key6": "2kNXftm5YxUxEk3bHM1jWFkR8tKc6GAjfy7rabeZn1T91eKFSkFjnf17VTVH41g7Vui8wMnS3hZNEK448zYYg8iV",
  "key7": "2iJEQKRba88bYriNLQedQjj8HpzFXMaoFDvMxr4un4ZZMqFXY1MNhxHHGVPeZZsTa7khS28iqUFuRKDTX9auM5rh",
  "key8": "2pHLH9wSkDZTCXbEmQ44YahqL9wuRUr1Z94dusejq1ByMgkxHGbDYABKMpCbonsXKGaLsHFHWMAsfbPv8cFz23VC",
  "key9": "5Utit3xj9z3B2wC2HMNQNfw9pjVaEYgxELRL3JktWpFDp64W3pgSGi3sK4SGt37ra8nxysWAPTn3wL2NdYqNEami",
  "key10": "38T8RBoBKWU2w9zcCgo4ax76iPt2n5Mt9AMJutq6BALqkqrStEzrQCUxJVHccfZpyMS7n1rAbtAeqm9CNseALGTw",
  "key11": "2GApAErsTxpFJJKftHRLQJfiEZxwyzTcuNjYaJHQ2qKBfvKjYHbD1MumbJ3axp9HicCP7o57MZkavfGrXYuE4w4J",
  "key12": "4VEN4pCeTik8NRGJff2tSaaczctpWGrUmVQrq4KABajxiSNkLeH1xNo6MLmyEGb6xgRofmzeF6t7V7Pb78Bmopht",
  "key13": "5k8Ybj5aEGhFNzQEypGdJTYS9RLqqBZYPzPb8YPioS5ptZfEhfwY9rBC19vGKHkoqEE6rb6jBS6mrAoFSpfLVFw6",
  "key14": "2ZMXajkKUSPbKiSR5TK9SZ9awrc5Jc2A6WKZBJ8G2dpyzQZ5sgQJb58uMTocaXQt8Th9Gcr6o5EoXJsKJjuzqxnU",
  "key15": "3xeD7aHu1VQw9RqZn8Dz5Bh1hHcEDvrdQw92fTefJTyC139tWDB2W9GUdw81f8whNs9AHnx4F5zAdWWwFmQMPqua",
  "key16": "2t3moGTGLDToqYxkxq4AfoEvoKnZe51CSfXeNBMPLuDKVoXahQJBAKF4B3Z8nXuCEGdQmZaPQ8qLzKBP3j2oJS39",
  "key17": "3PbhRWmFeEaZe5ggaZwz8fij635XeUkfKssU1aXtfpAUNKRKnaEdq7uVRes3EUokncW1TWk9yYtEgqAxzkkJCAgr",
  "key18": "2VWwnTtX7m8TPmFoiinxZYogWgqJ8xsU4qYB1SgADyG7y8EJGxJ1wW99wn3zKX2qrPwtqrmwXzjtYLe7hEGx9tu",
  "key19": "5cC32GNNCiqofZ4eM5B1q6z7reUw9nG2azQ11VoHCSJGBFyoe6AFS8uUuLhQb1KkDe3aaJk95LBPKNUws5LZZLRR",
  "key20": "4a6svje7naWnki5eHAEiDuoKXJPRGBGW95wh7WjDp8np1YLzsTE9FfbH3RKF3JmGL74ZmJY7c75vphzcGDnu9vWW",
  "key21": "3fzAYtecEqJj5dZUnjdqMhYgNp4Loewmwkf2xqTGqVeJuScRRwbe2FgCmpTRoNAfmH8dFHwft8myVikR4MxU9cW4",
  "key22": "28f7EfsXqChikQZgwh2JQEJKkqt2ukmfvWFYgnsKyGvNw7S7c8ZgPehmCrpfhdpNhTiHiHn9T9DNrmMLoXn8SXUf",
  "key23": "2VvhLHt2Ujbm1cxWwi9XTbzKYQVzd2soyEKs66pF4aMvSmVB9DnnDwNvHHKrBQ7Xw7AEKLisc6NfUiDJRJzkUf7N",
  "key24": "2bAYArKDg1n5xrD2JReF8uEUvVvAGthyVAidFoJao9S6QtAWe6VmS4JZTAHKLRsy7JYRpKEvgYwfX1EHYbWp3nKa",
  "key25": "5Pz5G3SKH2PLw3WDo1px5hoZZX1zvQhDGAYTxeenyBzvwkPfXnMWF2wu1MdxnUKr2xyjP1p8sCgUXswVHS5TaYs8",
  "key26": "5CZkHkNgJTAkKdvVsyKaRUyKtXA4FMyM1dUexBKV1eUxnXqJx5CmfM5XPPZFZP1gLvHPBJrKwTp21NircQxwWgHu",
  "key27": "jcBLscRapy8zvyJwP6m6xduZZT5vWq1rAEgScVbJ2BnWZ6b8gJ3SfEza9xjbPEm7jKp2Ha8o6QGuygBo8kE2UvT",
  "key28": "2b38Rt5v3mEBj1tYUe4gurc53SAMwZXvtVtLG8fUJWhgQio2hHkvDux3ym63cYAUDH8DGFTh8rH8XHeQJYHztQ66",
  "key29": "5Vp3qfHoDbgJJcBNxS3wGf8kLsY1RGax1jE3zjR7gWd9NVo3YSDzqLZprY9Gd68FdsJKQZVJAYCmu4epmf1UagB4",
  "key30": "XgaJagUf9LXjE4nvuQu6MSjbHoyNpQkuqhyBssXQCT8YDSUNBcfeMQsFoCw795nuKzAiyVmzcJyZbgLd1PBhiea",
  "key31": "2xq2DtfY4YfPoeyYKtA4vpziqMEhfLmtAeg1dPdPPjsHPYdpombmBVg2WVRppw3X7M2a6iMRdSewu8XAnT9NFvUk",
  "key32": "3oU9W3BkydFZdWkqKTZmpNBnKiTQ7E63xaHAQ5aSohypuUAjJ6KaFcT8Pk8Z5ahd1L1y8tnNsBL9WQHcgezSMgxX",
  "key33": "4TxFoVtWXkQxDsGrNWr7Gk1SyzktEEmLLmRa5ZusyUTqGZkHeQo1cT1ZfqabJ6nKNdnVMdSHEZnbFNSTTgCv3Tvw",
  "key34": "kgMsavAcxdJ4rQiZ6HJ63mtXrFHzRVDBsgG8R5PfV8JNRkR57iYAdvfAvydTypic8kdYDt5jgSrVsW9sYE646Qy",
  "key35": "Hdr1z6yqgB8NFRQoavV1BUpikTNFcEU2S8jivEbLg3B8Tk7HUeDvXeYuHHskBHwncbwqKxh7AvsLREq9haf9Qhw",
  "key36": "52pzLP1d7ncQQjVKYMyAM6BEdV1HMJnP9efCChy9VpQ5XML5ASasVEt2foUedBr8gDb8d1PVPWNa9ezbDtCcJWTE",
  "key37": "58ZrA2iUEjapKvPo7MTrfdxvubRWjF2L3PRpGSy1tY53PPG9WVug9UcfHBAsiKYBDcZYZZim3Ye3t8DHAWk7ddqC",
  "key38": "2UwwVPQVxUYAEJVjHtVRCwNb5SqRQD3YtBhnHaxYd97y4jRH3L4PULCwakx8tf9FS969pxThKvVa3JyU3RTk6Zh9",
  "key39": "2z8NX8dpwgN9KqJYp4Zg2mucLKAz1GTXYwHKuGxahTTbWTrQkgsTnQaH695zpYD5bY1nLopuRrQSVAGmqskEGd1g",
  "key40": "3DV4hd5TXz2QhMXHErAzJyEcAr5y4PLvFLC2A4UtZS5MLvv9WboDfAY8k9tVL6AqDrMjd8XvXWreX7sqMmAcEovd",
  "key41": "5qay9FiTQUMn5rmA1pweiQWhuaqfRM58UftYjfSWsYthMJum24SLcJWAg143nJpkXQaWZGPfvUTxDaD5ZRtzCPPL",
  "key42": "4rQdZxcqNSA4rZP8PUKV12vkPhJPmhd8KCEGgGZZ9rvY38XQPydSBAADap6dWYhqCEWeyjimyAGduAJbdug4mAfR",
  "key43": "ZCFppRfUvxVkW7K582mEvdQjiVFd7hD6eUp1Diuhis7QS8JgCHMX8M75Swpq7Q8n1prk9ru5L4VUbPxwmdWS89K",
  "key44": "5u7WgD5cmagR5wqic3Cha4hy8JCzHNTA7M6QUbEVRAvEPHeRoAZboLtJQCyJ8pMWQnaeGtzowFmeTQzFgW2Amw3j",
  "key45": "4SzDKfm9B2ZAck9Yy8kbcphzS2JNMaT8gnjErbYh5a57vv33E5fxxHoikXfhLriaDSeKrRiozSYxF5FVnMjVV1q3",
  "key46": "2hGyiPQmYV5mRkR8yQi2UdrtD9Uakf41jVGxPvtADc9Brc7ysgKJ7pTAvU5EVFzAZQ8gxjvyw7Asn8ZhdWmmeVAn",
  "key47": "5Y3LiFrzrZw4SmYJAsPoPTjzYBDfpEWmdKqHBSDwxrsQcv2dteBNDujMg1Z5C3MtCwyH36GPyZdqRjyWzjHX5HVt",
  "key48": "4wENYUXdVAbNeusMUsdCn7q9a6NtjhunhHu4MRzEYQzVaxqHzU3UZ2iXtQEfU6GgvPkrwQPzHjFZA6C8DQCSAQjY",
  "key49": "FKph4zatsPubnbCeGoR3RYjG44qLbVYdBhhqxSyxJnjapv3iiJHy3xHcvkBAzwRnTvdgb27eutKEizDt8UQmqDo"
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
