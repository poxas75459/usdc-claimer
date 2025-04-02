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
    "8uTu7qCcFuEHNQnq4um6bAz5HWnYoLJ1uHCUVqHfybhWpa1kKWGdjkf6xW2Mz2MiciGPi3fM7y8PzurqdZQSB6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jpgs1zMY2NwNTEjF25AX4zc6LMLwmFEVGpfL8Batw5Ho1Lk624GG9ErwuEtKoo4DqW6HxCj4ZUgbJFi33yg5sx8",
  "key1": "31YPXUFfooccXFTkZqb2NPf3CUCucNAr7usYebqkz1DHDheay66sTtRjTn5cModJonG5rhZLozjK9ZT9F4nofsot",
  "key2": "321ceGRJrfhfoinkNZg7Mg9KbJWExktYAx8HDnUM2wKyGxjhsZVytXyQZcjS6paghfz21MS6xn6mqokbfMFRT7j9",
  "key3": "3mTK556PX3jqTzKpEwidmf9pt4sgCbVU6NrZWPwDtYG3ubuCT8bMAX6fguufuJ3TehgPE72LPv6VnBU9YC4QWij9",
  "key4": "2k1Wv3QvvVxEFery99crsdtR4GWVjHXo7siynk8PK2RrmG76UQ56DgnHfh49vdiLVYQjrzVQo9VPziJsNvsMtQSB",
  "key5": "4aSSqvkwRqAd5a8pe8Yz8FByxcuWboE9Qde5Lz3TYYMap1sUehMf3UdjCuRLwZZXKixCqBitJNV3NRVnZqxjmycz",
  "key6": "5U5bes6D1f5VX6fbnTPk7vXTcWXCNdBrtTRovabGku4nRy2jsxoRyGwDPnurTq8G282Z8KbkLhUep2JfAbtjDpsz",
  "key7": "3y4kEdSjFDnC9mDcTpGR34jN11vbsM54PSU2kqqErvanFrdxETiGPa2AUJZhMvAK9UxVYkBqYDHVRjxpjSYuPx5d",
  "key8": "65idcKndSATWgGg6dqX3mavmBtkTcqft5zu4W4oxfhfkD3zaDsbhtfwMsCsKF3yF5LYmTDWqjqzy1Nxd9W52dBsh",
  "key9": "3h8MD16RDWuQ23gM8um9iKTuUcD6p87rQBXSoHRv1h5EqbXi4nGnwMHCiZfWQPJQFFxufNxkkEf68DovBM55Zjox",
  "key10": "4Vqi2Pws1qQ19UTGAs1FK779h9NhvcNHeDHfjYdgnxDS1JzyGkYMj5XSufjiKdcSvn8YPi7f6fFTLJxT5hv5U4EX",
  "key11": "3jxtvkHzPNPiXsTw6faGbEy8n68gqq6JqrTGtmHasBJTRgiBUNiH7JxxEDwYoA55nBphbLoRQmF7gUvhfY6jh4LK",
  "key12": "4uokWL66sWeFN25EDq7yL4oQJxSNoknSvqDZiYjFhFdWD47oZiywSYX6MpMhbk9TQ7e7dP5yvqzu1ANb89uwjYjN",
  "key13": "4oEz1i9V6F3NGoLfFtopuybPZkSnLBMLtp5BEWU9hizWukuCnfcWqmQJRWUHCx7ybgA9CLquwf8tb7ByRKmMEaCJ",
  "key14": "UiQg8TBB5UnWsQVs55G7sUcihRDGFqanEX66QQoumwUrXKFXKXvEK9BgsxZrKwfHbyd2eY62St1VXmTJzCtUr8Q",
  "key15": "QQyRpzbyb8bjxxMmzFBGd4j7cs8MHkuBHeRGCTmYzceq9YsEKHQqq2u8UWbpX1TFGwahJtUVC9BtBRqkp5xFhS2",
  "key16": "2BHpzNvyL5eLHZNaoGK4cZg5zZUb8JnfsnLzp8Vrq158LYMicdpmgAf9v5LDexNVqLFkkm7LMVH2S4fw4kiYs3p9",
  "key17": "3SggFoo8PCnhF4cRtm8rrcLXf456ynd2Qk16hxTG8GFVvCFyA4n7bLctFHnzC4KUigFyRyN4xQUiMzU3K1ajbFDy",
  "key18": "424ZA7wMPQiV2B8uETKsjbtzvGfoLKZWF62uzLHfR9CfPhJ37LewvtrdymQQeW467cAGGoermjK73tDBepTHZo9a",
  "key19": "2yeEBLpynPfuUokxAMA12RiGk93wHmQGF6KFtcynSRHkx2z7kN3cQYarfL36R3ou11WQ4LJr9kBfLdsemvb6K46S",
  "key20": "5sYtPXPkfLa7uXKEvQ75FfAWDQuPryBTGgvi3YAMNa1HJRBHwXZtgEgwh6sMzMuwEGb2xmwgpNUVwkbCQMFsGh9d",
  "key21": "4YJAwbfKzRXHsMX9ZkfeDtdugpa6RuoFrusYMdR3K2v35feGfHJU5ptyoTQtoFdiw4Mj5HmgDYo2BgPPjoem1eLv",
  "key22": "QrAxSwt54RjkV6kWc62hLHtGUc7LNFgJPufX87n3Q9jjQ1XP8VhoAVAemmou8qmpftoESd99p7gtht1HLTFWa8n",
  "key23": "VXM9sBwpYFysxPSdFGgXU3cCaYigJ3cL9gT1kRVFV9otcKLfQmmAMBgnpHrEeRDJb2wDa5vCaa5kXcaCRgTvy4r",
  "key24": "2AEyXrap8ivtDSdEEgzNx864m96cd4Ts7jCtF981ttP8isQEBVF6gqKu4YVpPotd7c3vqEbUdQrgMmrUkUduqDpi",
  "key25": "5E9usQ8eGbJbWtaDeqYSNxgWPqyve75eF7LA8z68NdmYtCY9k15ueQnYfCVw7H6vG41DqGfE2qB2Mgz45tDGZkVB",
  "key26": "3U9aK1xXuEAvgm6rx7NXuE4DkbukZb2NQ2xNa5NnsoMjtntsytgDhk6frcx1EqhsWiYwa4B62UuJ6JfkRPauv8BM",
  "key27": "31dL6YT73Xa5RnqmxwnVizJUvwDxC5Bc4arNdyzzyc4Fc3AUYCPB72NLr5857bN7KrdzcK3gFY5WvuN676TXhEnR",
  "key28": "RKTnaweJ1sUFtQHxaTZZub8t2NDo7Ftj3dX7bVmorZRqm7QeiuAYAP51TJkRZjzpDYh7KTGWXft2pd4REJmrMND",
  "key29": "3RpD9iPMte8H1DQZJZ6Mnp5U1UEzpHfkEiWukijGguFopZeePjVHq34PcD6osyLYSzGPTomKnZdibM8cNLU1rd5g",
  "key30": "3rVmyoi5vofE5VwCG4xmRzEienmpD99rntk94NSEDiFYuELfzFiGtcRQecjDzq1FbNfzPWsMtZhBFic1cKBMxM57",
  "key31": "24VtpMA1hrqRnsFVF6a4akJF9zmVb3gGhRhgjSYMcG3b7Y5vHJEdUvPKXT2RKi2rwgzU9WqmyxA1jNuSAqHenxc3",
  "key32": "5QiLXvheHyPDAP5eopHAp6ciXSFCqh3PKziXYwMFfyUBuScUrSMQa1vZA3AGCPKtHjKNajgjymtfJev9o95mWPnB",
  "key33": "h5Uustu8BpTwcb8YkTMr3gr6fnGYSKho86a1zak9RhCH9n2zqD7mxjuyoVTXTyi7GLgik57uWHWwDmSThFPZgMn",
  "key34": "aT99SrWFh16BykQib6Mgv6QAmgRDvFJ21HxAChpBfPTF3z9Ahfa7JJ7PariKAyXnFvX3961WoAHWyA3zR4UxBsu",
  "key35": "5NHdY1Dwro2twTUrymMV6YhcW2QQxrt6c8y31Xsjpg8WVdsdig4LUsvQzfrz9SQc4M2FS9itxsJQdJzhPqKmZga6"
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
