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
    "2UuEBdNKhewLGC59iTBGBbosPBnK5c5jm1tyMCbLAz1ENkgjZktw3FV3mU6sz2iTo4tXpEgRLQorKPRnuABeJDPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5oU8uKXsYYNHCjUVhoaRKBuWXnbje8dCSgTcbRwu5fFbafuZnkHAMfYuSW7RNTgLAzbXFfoj6ehoyLs2FcgHzU",
  "key1": "2uC3CrT1ZtFsrutYYmxwcWcGTkTAGi2AjgcYCvekVn3tz8ynm9V3fW6Cj61vKJqY6mHZwywDpoz6rUrTqeByqvBW",
  "key2": "376f2DH2BHCdH3gEGPLDf2fNzfLwGb3reRyAi2sDnkz8bfvfgqZTsyWtXFQ3urqTyREUAUYhHxuv8kxVaXCTqujN",
  "key3": "VTppUFUTFJcTzX23Y4G2i3NL9YtTGSLBzMZccCtEjudc6bF2YnZgTzhcuoxhbPEQckz5tZquK8BbqSvj6eZxQjr",
  "key4": "5CXrqKnQ8EaCV9PEy3KLxWh2Up5efifSa6PuCY6aGkRwXZhADL9wEzdi7Qy14p3rqEb7hAX6UmACm57qpketyE5i",
  "key5": "5c5QJWSr5s5E8mgeoFAazdokz2VT6JbzMNEpAEM3k9tmhNyYwrJP4Q43zRXhHubEYysd2d4tscJGuUPmutKmNBpm",
  "key6": "4USSeq16Bi6DZWM7tq5eysfpGqNpHb75PTP9rMYXecaKNkdZvCHWcQa7LBYR5nPE3LS1VwU7KUwZKdPGxDiMbSjL",
  "key7": "3MqJErvVWcRwbCyXcdbprrgnd7XeRn5qH5LPWamDY561aX1AePLttpnoj7hDYZZSoVSj4afxzZx4CQ2HjvKxHx1d",
  "key8": "5ZJkZKRChrQ1HoCJ5VU8JtUqSMZennyrByEeXnxqDjNzV8CXgepdsgrwYbFTy9zF1voQq2UXs4tor6vifm8UBH1Z",
  "key9": "25EaqmmpHv72YdULUPdiLESMJyXViRs8UnyrTgLbGjVBLYiJ9zYognshc6TDsxnSKUw8538PH6M5M8oMKWXmEa1e",
  "key10": "3zrhbGs86bJEYqWTQxuvJrdgJKhRVib4bB4LLHeGSNEK9YLsLc7932peb5tBWi7cpMB8sEFvjpxhmnTqS59vJ2tR",
  "key11": "4o81i1Z7S7Am3Ysbj4a6EqiU6mBdMwmTvuHQvy8rUacCgd6xmLb1xuDwwGKtquUMxq7dxcnGCtDBnYfa4Beh7PB",
  "key12": "5SsQ84ziifhoQ1jPYReUK5aKd6XL4YwsLrnmiE28KVPKszUJ5HJLrfynGRWkCkP1rRbM1sCvM2Bsi2fmtEVtM5Qv",
  "key13": "5dEbMx3XVUFENfAecVQZyfTid35mftRQksiTjYpEu8ZgLRt2h4mss4UT8uisYccAVKCCdDL3h8dEJhBSYDWz4w8U",
  "key14": "LtG8vyiSayjf87YDncrTe5xN3Queb4BA7STm4BvWDpPxzTF7XkbRpnVeeP9hsaaxxwKWfCsD81PVRmDfikE4L6X",
  "key15": "5yGbY2Zt2khYq4W5N8cenA2yehxMuFvGrJqX8ys6K7LNQ4seZPB6Ep9cpAcwspGbcidHY9EZezL93iaexWxJwZsD",
  "key16": "2txfru3RxAMfeW1rdfHVx5cMceRfKh9M1WqoFvjong6U6qui8ii44UQVA9KwAQ5rw6zwEHwYL87Py8Hj1TsjiRW6",
  "key17": "2GXgXDscShtwfLvjEfVpHrw8fJKxB3FFoJXGBJf6JGbGRFNv5f2zSbhKh9EqxapmavnncJn5VsLE872otS7YKZVk",
  "key18": "5iLSXEN128vsq13P8tN1XspYwzGGuKxXpBH2y8Hwpm1DT6mTDywFHTrz8MWBhu4sh8RhHixhWDnG7bXKoPSnU7g7",
  "key19": "2s8Ctjy7nC181Eg8XKpSBDf8L4fih5L2jx7knD8zRmEyNshLQYFim45XaNUFZx47kBaUX6JVwkMQDzhiAziqzdbC",
  "key20": "2TGXp3HpqChCCKEybMCpjHJQSz5woMqygrTmguBcyuuV7widRTNKejLjd4aZQf5zrbr5BscxoejAGSEBziE2ruh",
  "key21": "5Wa2yjqkYwwmrLxyQaNjvu8J3uiebWN1g8UZFGuAzyct7Mz4RvfJz9vJeB2i5h3PmSTPVTmZrHK2Kq2bJi9gYsff",
  "key22": "5GnGHcKGvWKmAqeBNsgnJ1gAvsW6C8Qq3aDMZj4AtmE1MNbnazpmaJVsCcrgSFiuAr5MEziPQx3hrPmC9DZqc6ix",
  "key23": "3uZo76ZQRKKbxpmrjhpjive9VTXLo4K4hnco1rYEstqmMZ9eLeequqtwJNHquvM7CKULL7R3pn2JNPUsD9ioCRVc",
  "key24": "n61LRqH8U7sPZ7gQojZF2E38E1EbKqfzdWuqWzAE69bBT5NKrM2oE74uHLdEsCWnuhpm8HpqVudFS6cmmjk228m",
  "key25": "21grQrHTC9VvSywxhPndDLdJsPNHK1VvPunRZgTq5UR5EDd5UcxyRgqyRE7NyCRfBLFqQ5vck8shAu5gizWxB1AP",
  "key26": "3M8omQiTPUbubzG212VGeBDQwwDpGpuwk7tWmeSfzqPBMKL5C5N2fK4nbQQjBpCBRdA8SimiPxa3W3xq7nZuK1fK",
  "key27": "3QzckRs21FW9FFF4jZnoLuF95Fv9V5G87cT8zpXnoonuSKPtcGQvVMsEKaRHFs4c2nQARaNTViZsvdVvVYh8ENQx",
  "key28": "3ZLjBYnEFrugtVR2Qs5hUQkkmJ9EWf5FnenX68DjEZDAYmCxnYzHh8WYpUaHXzZUmJ4JV8CEzdgHeMRFAXSGeqRN",
  "key29": "3duWFC9vU4h3rYfYVJ2S5MLtVJY1x2ZZgbqwutontHRu3LAHcQ4cFDTYmMbqt8eYtZNsyXybE9nHJj2VYGKrdsvX",
  "key30": "4ApgQZyFPSsy23XFh3izSR8JRPoaBUoPXX3DyD2NtCnHxL31PbNbVZF3h4PEdR9Fu6ukH4yUWsKZNLXVLVh2TBWq",
  "key31": "37e8Q3udJR9dvXGeyrh63r6fBZKfG5H2exiJTAyNyiAYBU9sB5CX4xkYkKN62xUv8mB9uonWvjJNQvwiwanBMy1T",
  "key32": "YgHTxYJZL1NSRorRcBKjWbySEjn8WRkftXv7Z1xy7PLiMfHE1YuZvX4HbruoBBoR8cv2xjodbPHUQUfnoEpR1kq",
  "key33": "5YNCd3wvcZX1Z3wmMfzraqcNjD4Tj3qWW3nAK7MZEymtrTRaCbJrFTrTvdHx4DcjcXAgR9PWDp3sHEEcaZaLuuqN",
  "key34": "4vh5ZmHK14ozgaWyCr7u8SHBkCkcQcNMiZKMJUMVX3wpjYXB3tC1mRLWdSnbc7YmUFT8qotf9RpoaMbQ48d2HxLz",
  "key35": "2PVqRCQj15mgKwi36gGBuv4SUuzq6B7oHnTAbKuZQPWrYbWcwt1K9HXukK1MB2AwWnWz4QvCFU49926GYmdbuYfT",
  "key36": "5NRFnpnYFiEL9ppEGxNFJBkaxC6YPgm6Sd2pu5zKaNFkFVwthvjN3JFXjjBw4pJCEEddfEwJM2E4yY9CQmqk433g",
  "key37": "3iey58rHvrue3z2UseyMETLKGYhnoeTSA4sQ5MSNNDdXHJAG2zPiZDzhhre6TDHySMpKmZyyKS8bJCCUCCNZuBsU",
  "key38": "5XQHFGKtfbGWJ6kMiMy5SD9FNp2jM8C5bgA4LXxdXhsaXj2qi8ofoUtwBhm5PneZvFyW6WFqcmBbPHVXogBua9aP",
  "key39": "5hE4UKzJ6uFu4U4onpkqNrnsbW25VB7EpWhDokGeJL8sbcJHjC3Rt7hGkNdHzZ9mzYHcsH8qYBwfwogNKzCpcC4J",
  "key40": "43MUY1oVzBnBW51bP3shxEizAAdJyqa3YBhdWeZajxrKAjGiWo4fhtGr16k4zqwXofqJrckesLCyeLuc5G2c7Bup",
  "key41": "4uQmmRaf6NJZMPgQWYVRPPK7wdeQJJePyZgABPU6ZNPfJLT4i6xmKsg9JNzFYbJ9u21LkBMcKh4HE7ZmVkxDmjTQ",
  "key42": "4VYj1KaeTwBurz51nKQwsrPMv9qA4DcLQ5BY6s84BwYRU8F9EctdmQYydcf5ffwJsMpy52AoJHu3mGPrke5HisAh",
  "key43": "272MLyPyixXupRgdMeHQ4ckKtHKMC4pyFF4ACRgU44Xcv34JN69Jxg3JxtgE26SiGLaXKxh3RnTsxdWkyh7wg44m",
  "key44": "3HR6GVTRFPH4BqpjnLXo1c8ZJnxYrbDX1wFLh4GiUDS6R9QgG8K23xcCdcmK7QLP6YtD9AS5QHuqKRywJDFE2vmV",
  "key45": "63xrEuqQf7VnA9W5shazuEvqpfb5tbW8Bc8yrE7cWWEQDgxM9PpKVihyAtXjBUTYh4hLTjNHLUyy4zzSjtXrPLFP",
  "key46": "2BsqHZTtR3CDzAxx4dHGQtMvgKFh856u8kqqEHjxq7AYJRSCzz59wzA9pQTKd4yogGyGMZF5qV2e4ZTkZY4Upvby",
  "key47": "vCN47cvwMnwt1zeSCkHTfRvHErMAxnaAKwcPDz1ksAbWEzogqE4LqMmauuUfSpfYJGfjtzB188WZ3QNSTs12dw1",
  "key48": "ckenQaX7KjmL63ubQRyxTwgu3432uC8sSvMLbkN4B33uPyXFPugnprnrQkLgCcFDLQyNdGYuxUff19Q38isQxES",
  "key49": "5qkKHWvKndEvAECCzG1sEYtCZpPfH61YJvrax5HGfzSkSEhChgDKuaPWZSpAMyUVzwEUHihxeaJgs136VMrVW5V8"
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
