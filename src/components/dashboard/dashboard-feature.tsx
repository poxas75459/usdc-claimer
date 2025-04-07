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
    "5YHLLhaZJUtoQn6axSykCbcKcVE9SMPmW34aVoQ9uyRNj4t9DtWmwRNnLTqGYu9CFZ8ffziW5fddZRtHs9sCaj65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VGVTxQ15GwfA7yJ2goXGtA16VB6bHvQfoJoPt6JFrDmvnFKoiTt43aQsA9AUwx5bzjqCPHzk6DaXg7ujRsYb6Fs",
  "key1": "4ZiAWr2yEVYq7Sgejr5JsvjDnRdtwh8ndFYxYneTXXKYZDDVgCW6fxVgtMEtFxs9TPx6madrTACNNfE2sRnEuFWv",
  "key2": "4oXY7ZQyUpUhHvW1ptuAafMkZwQgHexic82eCsZ1BEQYMd3d5zP1ffcLwFmNP1UdRb9jZLN8f4E55BCjk9fGXUyG",
  "key3": "4FdKKJ6he5DXfwP3rfMrNLBHSPbpV3SGFoGskDcQuRg4pYyPdYQdJALr7zbCbkUtey87zYGJvrGCcbSZPAWufKTk",
  "key4": "4VjFFKij3HgAGv48gDXoRQ7GT13x4YuQQFY59hcouhyLPBRXNuAUkTbzd1DZn5tDEq8Xo9SkXdzic46eYhpEAXhL",
  "key5": "5EkMeGqtNmffQrLZsfuX6v8QdiLxuYVedPceEgGuhQ9emEKZUPSWFiYy4Ghgz4tzVBejyS7gkyAgsLWwvjqMD1W8",
  "key6": "5r3Vmbst7Wmn2HFJhaPuaPWB6wevPB2xEB1rT41u5WcLtdMKM4NZ48jRE93JDMbaaqZjQFzSNm6wpe6kqcjynF8A",
  "key7": "2y5pFCjovP3Njr28udW8zZrYbBev27A55fD2ySRJokAwE9N9cWJ37ZDQTiJXZAdi8gHUFcknTAHuFfqypZn1ddhW",
  "key8": "62tk7d2ukBcXB8YBt2e37pNUx92aVDZzoHGm3cTiGfRZtsdhXygRcydvkD9AD9fpHQB3c8KgB7yQVQZbpPuu8qyk",
  "key9": "UsrEA8SCS9RwkkZJsiVMLvpkgADfnSYRGW434qntvcmQi5W2wHjqgphDZPZCFDw8DvSsBWaEDUPCBJSKKGQByY1",
  "key10": "cUL9UdwHi8TdUuSQbP1ubtCcVsXomQbmfd6gUohPTsi9BYycb1SC2m4gZnNNv3V7PBtVKc3mDpf7LGiDJG4bYLP",
  "key11": "52ZgmvFvw5gGS6X9tA7fAuSvRPJFCdGWq35Hbw9NMXoY4jCPMS3btPvADPc6AbaLe4TLLG4N6Brz6c8rJUS79jhk",
  "key12": "5JpFEF7wAZaB8EefMfTkirfzmrVHgjzpFBRCpQGxBnD4Lh7kQeh6zXJkReHLbx5vBrhrqfQZacbWaHD86fNvycV8",
  "key13": "4zrAmrGW1qL6RobokGk6nGuHzWKdkKPfP3EyhXRuRWwzNGkXu9ovsLZ2wY8tcNwTC9aSwyEytT1zUr7t8czrcyFb",
  "key14": "2NR2s7B5MGMTYCxHkxe73LtMp3YL9HCN2VLsSBmABvaRGJLkonSFwMGfsgMPH3ozegQDqJ4w7U5CUNony3VSnV2g",
  "key15": "2VX6nsUtNxqC5EEydRg6wGBWaciezoHXf7FvewTUMgewWTnoRtsoqtemdyEDv2mjDvptWYqgMxwasL7wTKqsL4QK",
  "key16": "47f54obAJfS1P1y7y4D7DEBaiFnf4ex9SxoP1cE7JLPrkEnfwLk3dSqnEWnQCA2Ur8RPWLbr9FZ3BRw66z7q7bmE",
  "key17": "tHZ7g7RJ1pNH5nae9oWwrbcU4ABbEuxxqGH44B3F4zrR6ZwThsGC2E6ThTp8XhP3V6T6wwzjDjyyB7EyHMF6rw9",
  "key18": "5icNtvDtpMU7u9ncx8i75zj52DcHwVhgXxVFDDk9sbv5snYZok2tLWZabBoqEy915n3pQ6297mMVkYMZevp5xAvF",
  "key19": "5PJAVvKLQMgV58KVUCrK43Bmp6SbpU9bzejf1zeBmGGGz7ob1t8KShNbbPuuZZZKdS3hVqJPwRrbbirnKygbxWSF",
  "key20": "3pWuSMZSiQso6gHJyDQPXuzb4Vr883dDQPxHK3mpHFqFHagBmykmMfuvjZJYcRCbdjsvACLHVr2wSQi4zeJ4t8jJ",
  "key21": "5aRWma4ynZJP8PVmWgSdXHaopP1FSndoXrU8eRbva5PbbiY513wY6wBuHw9V4y2ZrNvtB2cZWeeDMycH5RcawDgu",
  "key22": "4jeoD5AJsjNsLVd6hm9ZnPw1pDpXryjDy7HDfCjCjWub4xEsKqdEQcq2yGANHdars5CaExc6jSN9iNiWBAB5urtm",
  "key23": "2RL5FQP6SJ8XpafafVuVTLneraDARAS5N9fBKQWsf9Hd4ZVk6YwMK8cGY9hjcYNrT7ZSEE3CzejnH3CkAUxYWbbc",
  "key24": "3LFiCZT43LouMNk7YfGxQVXFV46FSv5SXt9nCirc9FACfjfDU3J4kCACuMeC7NM3yPLThnGu54yTVEn2nXPR2EWR",
  "key25": "4n2WhC2Cm9RESCjtiX5xLvxzqCfY3RGf4ycsfQipg7K4u8FjCNdqxReD8TS9SPrKpZ4zcVdG9TYvC7NM1dqwpnMu",
  "key26": "4qajEKuL3p66vEVcDUnigB3R5ifRpmU1K7KCa5BZ3piE3tYU8W1vzsTn4WUQFbajosMeTsyiVQHusvmu6xWzbJBy",
  "key27": "2UNvGuMxJB7RzYyxC4R2JnekY1MvAHwD3yPPZAUEdCAF8pLTc9aAZ6vzvpz9DHyrsfydq8JQKBFd927VbsCH9cky",
  "key28": "44beEa1jd5yFJEg4fKxSMrNpxTcVvoDz31fe3zhdZtU7g29gf3iuUdzeTy4MEELh2k5cS364CK8CnxYv3giyN4x",
  "key29": "35MGt19MGEUTx8uu5D5fnRn3CWMAb3XaVjwD84of51zTsfnz2boEotGEofEi76MdQKfSpFRjBQMo4MLaShtv6BvB",
  "key30": "2SK3EZVM3aD2JkeUiG46SvSMQVek3v8w6WoTLcyndtPBSkCbGQjhv1DX3z46HD5TAm4o9TAexnysnUSCn3ehFR1d",
  "key31": "5khnMUto1yP8togTC3pRAjhhJCqhrxVQ4YUPak6pHStQzkmLwc71RkW9Ezp3DZenPVwty9KbmWrjGnyTDiDsnhZm",
  "key32": "yhr3X6R2Dg9YGkc24pTKEDR8HaVTudZM3Znp33p2s43soTQ833YcqKatMU4pShNCjvaPj4thPNKhEszvXiaFLQq",
  "key33": "qWcytEMFiv6GDJy5ESBdU6WZmWUD1HbjWxUSXZFyqsJLnUwt5tyPn9wuM1uhyaMpDugGF1m8NnJQLYjXVNkbhpz",
  "key34": "DLYtsg48J4kLVzqeYs6brsyrhyymcmZ2QPJyFdv5JmqMqBAjTBxUMdXC2PeWKLC2zmM4jvBzAMrB3JtCQWqk9ki",
  "key35": "3pA3SP6QHNvP7is3htXWZet8V5kFa1o6dawqefRNUyhwMStycuab3DHdHJBpX4fYXgnDtdZhW2e8pawAANMYWJq",
  "key36": "3KcZN8N5FfQugvW372JHPbfSwiLQ2TZSWrkeMm5QWR1QXwKejfMDW3EHRSLxdHHxQQsig7F15KujoA2LDXFwfcap"
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
