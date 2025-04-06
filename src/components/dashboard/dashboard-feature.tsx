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
    "3XoUqgzpADugucNdhS3mrdEqjiSurJ8dkz7kmePDHNiYPQjv9mWww9YLdSaSD93Q6PXAtzYAbxGfDuxA3w9y7eaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YgowdMdJ9ZmL3dUSgkqnRJD5hTcMBG2CiPnLzmspRSQ3mUpS918peoDwqu46RS3wpFz2P9sFSJbC9LhjfSiYfaz",
  "key1": "5qZJJuZcNYPTvYgJe6v3RKN7GTcxtWZwBwqeX8EsmFdrjjZuLgjCdGP9YNTpTqzRBxRqn5kFiSP2GZiEd3wskxT8",
  "key2": "2akSj1iA8wXdSBPGsJoUaY6E226TMK5AR8sewGUbTBan9c857w8FzdUrXfGthBGtjq9iM3ALnsnu8GKft7WTqqEn",
  "key3": "5UhnsectY22yfeMtZAG8SCkbvC2jTrG75g9WFZSgMeZzMqD7QLVgi8NAwRTKURoDx2VF1AjRU6Tj3a23tfUKF5K1",
  "key4": "58NskH9Ew1iywZXYKPB3a4Zt5m9xf9W9cWPKc2gpujgmgWRx4xqDY74n9h6YJ1WQ23XBcN7gKXPN1R2zgr7YMZsc",
  "key5": "2E3xC9nCRXJEmKcoSGtVENx6ofvW5vPcUUFu5QyAPHibSq8Rd75tvVYu3kUFDbaMfAYotDo1fVpZrwL5roKAGyC7",
  "key6": "5QMpNQia2v82y12vjejQy3VDGEzoHdxxQWqJq5LQnfmfaSXwrWcwQ2k72tSHdsEhDHpXExZDRP6kftdpUYWSYUbH",
  "key7": "2Unwo75hZV8d8f5HuzzZoApApi6SbuFVqfq176jWMapcZL2RXJ4WeV8nnY6Q2Ukq5G9xrmr88Bk428fc7DusXTTz",
  "key8": "4mLLvNYNKNV4fouk3NJV9oNQHTKDDDEh74kKp4dCZvn88pLtfbej83BUmsPcYqFzwz49VbzgTv4UgMMNQrsodzgK",
  "key9": "21MfXjHuMViJ7im8wuJv87fuQhc1BVjE1uUpLJWECgCjK6i8nZdUntCmc54QdHdZ6REcUvZuWg3vMc4McUNxhACc",
  "key10": "4B7KvwoqbF3uNJKkRpAuBz7nNXmtGgevJsk36jx1M7inySWS6R871A68xPiqSEBESpGsNjHSYt2vMKs8b94HQRvo",
  "key11": "441GKr3hsrgBwofsQKqxGWsaUhzGAoqEv8wt61ouAARphsSBzcPoxUeFU3hMhKZ8hoAHmTLTFxBR1EQaUamHHew8",
  "key12": "48RRKQ6V3yW16iLqrkzCW3pK46mKyHj9TChfE4SBWJXr2D1776X6WwJqdQb3kH3B3oPRm1oUFXcPLcz2g9VtbxA5",
  "key13": "2vsZF6W7VHWVdp7ejamR637QcEd2Y3Y3y3ziEGbJLyiSFpmN73cMLWTVJje7QTFkoY7njNW7ULGesNkvMM9rF9Fa",
  "key14": "4JpUJVGsG6ftNJqpAY7nx4danpr9Qh1tkwCpjKEGHLQ35yRhZoGdYhityS3G2qTyxxEPgP4Pev24LUrxq3H3eqK2",
  "key15": "2aBp9LvZmAbrcAG9apAvcXhz3akCaU4pKbQCg6v7Q8UMTPE2iQDV2tFbKyz8S6PHNLi1SZRmTqiahch54UgbFwYf",
  "key16": "2Jr4iYgaTTUpAvgjVmpGgdqvQrnhLwtMDSoPy2x5xoi7DyGki7iL8RVY6kgfAQGEp1Jcwy6yUBEmxxka2De47yBB",
  "key17": "2s4dHbwNFQJ3HnrzbjcLFzj7xumntfYcUqwMbJJRV8z5cDqwA5NpC8FPdQgMftgSBHJHQTqjYVnwNtSxHpwDLLwC",
  "key18": "2xh36s4nM9g1gP9RTmehLTTN59VcGN9315biuYPHPHYUvqqbiaCgxwRvEnMEMtqRjxxXwfcAYVEhDM5N8Tpa4nNe",
  "key19": "3387RkAGmMz5kkYtawa2ghM7D1LGMNmxFGapxvgqNop9WXHyrGfTLK34BbJatnoYMVypH1A7yZ9gtimSwE6UWaJP",
  "key20": "2A2LMqR71ApFEUk3M2Xy8jA6G3fPwc17dF9JbjJV5jtJUhcGoLYC41B5xEiwxr6R9hAUUNPowfjCV2VviKaucwfy",
  "key21": "5Vcr4cC8wQ4yjhYxbnE6VtsAtudCschFM91Dq2PxhwDwbkjBedetesTjBr3uMqKtAh9jEDghPzRp7y8W9Ytg6YcQ",
  "key22": "3VWDu4y2M7caXE28tcjizaBC5q95Mf6zGi8ftDxygW7DuVsjg1DAr7ER6yAdScxTb3TwwYrhemx9wVAkPvT2QQSR",
  "key23": "5Zp7YU2p97zkjvDSvbPc7SRFkuyYrAjHWj4oz2j8zrZvLvg1QPP7YqJXETvCXaXhV43f6QRUsEZZJ2TXnUW5b8F3",
  "key24": "48xbDzzYXo43KnxC3wjxzk7gJ8JBFjAZRwtGTbr2AJuARULbpS5gP2odNmpNFpYuP9Wei3xdzpZE5xLExe96Tpgg",
  "key25": "297NMCWr4BV8W1GHdChW9WfdiXNQ34u4Wzka7uWV5JPhzeAMdo4mCp1YsGQfnTbrfAMrqcR63WNU4aGbqgWRmEhG",
  "key26": "33DSeqvQoYYU2y17HpfmBSw8q7YEd9KeBD6sYfrjioGrMrCgagdc2ZeJYzTUUk6fjSn9TzYQfmNDH24uMfxHnGbP",
  "key27": "4EEMbx2tmGixnGWDhVFBdwPrFFQUCZXQLcgMSGPcmmAAWymrvvYJHmMkcCd7ECk4uwM4vEcrXcwRJHbUcfksNZ6t",
  "key28": "yHcUc1uWnx7VHjukk9ghYkpYhvxSDtBa5V8387NwKdZckcdPTtnSsBjYGWFRD2T4VyMEvdMezJnhgvWaLvW4iJv",
  "key29": "2vKChfVBQBkvKR8R7H5ZopCvdXabz2wPpiV1BCwptyi1YuS7Jbyo4BFn2C41UjCMbofu2AA9PxN4kZGNes9h7tZw",
  "key30": "4LYdHeiWtAVpzxDkewU1rDVoWH78CAKdLEF7BBQVCF8ck75bNxe7bChJbkdarfuA8awi6atFa6XvKKgJ24yG62ey",
  "key31": "3kXqBgMHmXVp4hzhkRLYaMwgoKajT96ne73XqHVcgsJsURWFe2SvWB7iTgLfhyPeXgicpjhh8QDCjSUyHAG5N6fv",
  "key32": "2nBKmShbDFh7km8ByfKLixHUe2hk1azYE712GZ7Kashm7MvhE282me4UStCUBqzHWkrSkavQwtSrTBEdC1vxpzzc",
  "key33": "21E8Xxbbdt9YkJiHU41b9bevptWgfyKxiqRV9eNrpV3cqWfeAcBdhDzCeQp8nnatH6Z5DWsxV2P9ApoAtVNWwASh",
  "key34": "2iDBcJp5ppn778y57C5wAZmWWM3beJBNe7pivryTz3DmQcJWqXnXeVBLK9T3VqWmfzHDM4PGaJn8We5aru7jXmnR",
  "key35": "42GK55oq4Z8qhY9TZASGjoCEPjifgfK2v9V9xVv8exkwCLdc6dLtHmVzxGYgWXSvnM9J2BA9KNnmdJtrBt6ynSgW",
  "key36": "4gr1s1cWXvAeJTXCFoey2jRhXgNjzX4nvnDg1hZZaZs1Z1kGf3UDZ4Tz82oqpqz9WUJjpwFDAeG4k8XScRG9GC2F",
  "key37": "5FZDfGdfS6cBoUjarjisgAQKATEsG4YqjcAmdDAp5FLT8NMHSxVRDjt45YFFP41Gq8sQwv2bbVHRUt8YvsTjSzUw",
  "key38": "4uD3Ka1faXXPE4n24Mw7GvnckYdzxL5e2rtyiwGk8mKRgpRLNxCjhd3vPTstskPr8QGstEuQQkxfCSY2L885ZDLf"
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
