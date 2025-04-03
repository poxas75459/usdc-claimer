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
    "4QVcB64kmEUK9pBnhzqswWH2KitBG2gr7oYY6bB61Be85i1TaDjW731XTdbsfm1WTw3DSDsmvoBiEhMcA58AePRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgCGZKEY65H8N5bheCxaCeizhttQWLG6JDVTpUALafXiN6cjDYXu2v4wQEnGTjeJWRpx2ZDuF78ZK8GFze1uvWP",
  "key1": "5h3YZzQxFc5PwfLjaJXzpMdSbWpBdc5wMuCpvm1pxepXRfkFibDFRXgx5Yqg3b1kZEa6HBy39QvvT7ytRgy5wF44",
  "key2": "3ni9XuTuk4LkXfmn2JiHK5fMhx6DDSQjLhmd2jqzJXPrYgCbKFmofLbUKxF9VU17eejbm5r1FSV3Q8RgJeKtpioS",
  "key3": "28WcP2NEVFHdJTKtQzqVDgwoitpKeCxMLub7Kdmap7aAnmRBjY4Sjn5DSyU9yaymPZMZ2kmWFdeLnnhZNRxmMBKn",
  "key4": "4y3m7ui4tYCze5KGpGgH2uiQV6ZiZkvjR7aFWtaNs9mfnLhvgYdDJTfhhxBG8ZhCwCEjQsV1ZRc787cRg6fo93iP",
  "key5": "41PpHnakAmzjadgy5dt2DsPMa5B2yoohRuvQyN1Kg5mZ4LRr8pomWGVoevKMK6u7sbmfh5d1AivfoNQfoKAbHFNT",
  "key6": "42PaYTcC16Zd1VZ4tU6WzQGg4EXWtzUCJsCXNzFmxb79UbePjdoVwNFecMGbDHyvX6a7GbihPo4BAzn9oA4Vhmaj",
  "key7": "3onpxd8X1dcbvQqRD63JDxhyGZ6StXo9rmzfdiTNZzYMzbvd15zecc5EfV2ojBvWbHNhXzSHjtpCyEM5dGeLvsSe",
  "key8": "3uATuHxVDK8vRuB7BRUbL6MjmFibCkCRUBCmbfLSUVf4R2ks93bwShQV6B3QqMVnh2pPqu5Sp8sKtsLvwHEeUFq7",
  "key9": "3vuJR8j4VidNG7ZWTgMrZfsNh8sDHCSLJaXpykNQ39DuqDeEhqstkGZkSWvoJipALED1ZjqnbaYH2XjjXvWKMpxu",
  "key10": "2EZhoi3X63JXgtXYcCq5UZqoZUgDfvZgfM5cBBGNLG6kC4RWkFCy6Suc6AoV9Sq9riGmrrBEt5Fn4ia1FY8XUfN7",
  "key11": "3QCeWVbXaWcbyakQMC7mhf9Paxwhs38kGJFjEv5kMaLMepFsrz2Nkv7TXhxKg5XzWriAGqWBVEiCZd9SbHsLLc3N",
  "key12": "ravykD7RfhsNeJpLuZwQPbtNJMaFGZ7j9uqxiW8xFJyztkTW2xUtAUTvaL1cscTdKz2P5PdkqrwHPyy3JAp7z5F",
  "key13": "51uFvTmVaTsxxjdamga7RXr8N9uWrhM1vseJ62Dg7JKX61UjWN5EuZwPtx79jvRfeQNfzurBh3Zf3Qn3NS58ECwd",
  "key14": "5GcHsm41A77cVvusGdMULzx9LHxejpEdJHAKBYYcXUncweBDup9LszKnhYTvcbwnKJyd69S8XsFWQp2Kcw7VzSPL",
  "key15": "44XiUcMp4MTu7BAN2HrcSjSA9XdnbPwvqRqJ9snt8zmpDtRDtqN3zNogpNEy5VuqzuMpoPxx85zjRzRHVRE3pzUu",
  "key16": "4Tz3XYmebQFbD7H6A3Ub6DVtbZXzqiBcXygQGfchTpp2569XDRP2ZnjyhntzJHMKWhLZHgTeoqjBnHMqpau3Dape",
  "key17": "5oMob6QJXkhKWbHVF9kD1gSYTF6ZYeZ7YkX51GEJouBxSq6kaUfGR6h5fMoB7NRAHshWwdXWQF2CtrmXvpKWfNLM",
  "key18": "3mbaKHsZQkXTwHBvgutHr42wihFdyrqmuwJmeTjkquWztbroi6EKbSoUKC4VZStHJbYvsDmjMAM5rq1TnPmcv2xN",
  "key19": "hkgUstwDn9scLCbf4urLgt85vsARb89T1z3SVeKe64mqWM66hpSgVTRQNv4jnxnQFU5pxmoPDymqUiRW2owPc8d",
  "key20": "3d6DeVXyNHt6JcufTc1eAEkuUesJNa5NydZQK8Ec5Tan2JsSqXhX8ckH3BK45yVwtcY8jps9jqiCHJhwy66Uo4nZ",
  "key21": "ZdheDieBfoYeLwAFg6B5D7kKjHrvUDJnFbHercwbfUJVKjou18d6qjLpKnHCMDPGrE86L6VJtEVjGg1dv7rJiux",
  "key22": "6671xeBCnWz4TbDzuMva7Pf76nYen5Q6uct7W9fSjqktyHrpDcrhyk3PsumSc2BtNQptp6DuLU8ifZYswgYJiRo2",
  "key23": "2nsuEnzAD6Be9sihkME3GzT6CVUtoJzuC5ejnxPYZnPKAFwYLJGqTRBnNXVuapY8FmGdY1qhpzU1c1aV2sVyKgn",
  "key24": "5BWxouZ1WhhbxUV66ci2gomUBvCRpRqhYk531VrxugoVYem6qMV6wwejzHo5541sWnX8uqCfF7SrTbzuCRN5r7Yh",
  "key25": "3e78d16gHfBt7hhAJ5MWS5hbfuGr8gF74DGeUwqNUBFaWAJj3NtrcZqepN9AJYxU6WGuboyLHWEUtXwz65rPQVP1",
  "key26": "4Em1rn35hazjqZBbNLRDHbnRYr9w6BvvizKrd8EXYimEzD5zA8X4TLixBT5kmM55VtGEzmwihWhyTTjY62A33DTW",
  "key27": "5zgYTbCMxsCiqLDYGqAbYao8Mr48ijzwjcY2EbKGQ9KtqymbKMx3FD9beD8bxVUfBssjrCXq4548cijbDcnVDLf2",
  "key28": "5j9U5nTJp9SkUanMjT5rQUDEZUbPNrcmj4kgXcJVLGEcFuGptm8LEHCvCf8ba5JFXiACVJbvruB7UJjP2jDt2PB7",
  "key29": "3dZds2guBDkpkdtzyDUG3UyuDXSGzXic1DmQEP97ZRpZ59kAaA94ehFQ7YgPKmX4JpR9ULcymJhhGe1wMous2d2N",
  "key30": "4uU5a4dsao6zPzZXk2SHUwjdvn5Xf8wQDezZ413WYat4ML6eiq2aqzbLyxzx48SXbf5Fa5gc5B8UDhYRk7YpCKqk",
  "key31": "3JKfrMPXY4ckKfmTAhZP2cVBnD3d7ANEk7epDZKac6farcwviZQfnMNhYg3d3Y5CX77mj63fj7TzM8pcPxw3mD4"
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
