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
    "5dBWYV3cs5k3HYjUy3nSR2kvwQ57orGXQbQKp4jwY6m5uH2utT9h6LyCbs3NJSV6yToA3Ez7r7fx23CshMcmVsDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5feV6FqoMBZmpX2s1MoLmEpQbE96R9p41RSFMv5teMqE9CkGwbjAN3J7BjAxe8uKmKfwbU9YvggkEecF53FW4fUt",
  "key1": "3SH779DC1x3dLAmEY8GkWSkKwCMFyqJMdHnMdmTH1cFKdfZdtcfxTHBSXsejsHE4RaHHu9gZMP2duzHbYnx8fpvr",
  "key2": "A6uXoRLXFLRZVNXfUy7xbwozhhPxREjZZDcKKWq9dKUCzC3dRfGcrKiyyZbNaZkc81xnUpMFVDAZKnkjtgaHaWL",
  "key3": "24iW6CDgGURZ7PCVaWEWenh6kLM3QzJrbwUm56soH4pUeQ5mtcuobq8LPwgEcqW3QwgUAqX7EsxuoWn2XQyhM9Xi",
  "key4": "2922BoppXybppdog3PhNUt8xnEC23WzUxLGes6cAGcuSSiwZ9M4snJJsHXkkXLfC1CooxJs6JK9jdgBTe4e2QmdF",
  "key5": "2VqUacaFBqe1zvEbEbe2oTBux4aXgCs4FTNoZ4yrwqd6tPhqTNgeK1Jnc18WMjuzgUDQvdTx35cYerhAfdkbz9So",
  "key6": "4SXyqK5xx67fsNCY8kk36PDE9i4wBfcNc56TMKEeruPeMtyDRUaQvKkwQbL5KHaYLymXbABDdT1Q2YM8r4mSJYTW",
  "key7": "6581c3oS1kGvVCkPEC6YwbDsJogRhvWzhw7GTFqnrkdiPyCR3o5TEEjhTpHcbVqqbRrKRvFydBBr86MS1Tz2z8fa",
  "key8": "KmzVhiAUvrC1AWfkYPAsgAK9tBjKXYHwsPTwwGcZW74uvJboFQFp5ufibD5FSutT3rCMxuhxSBWDYYK2if3SxZR",
  "key9": "FLBZCEerZqm8rffKq6y8uSsM15NPb8AfwBUQETPQm32HQs2uPKE7ZkEaef5uHfB6iwgaoZXhpFx1zjVb9QdKJo3",
  "key10": "2G6LZqGPNASLJNtQWrqfzxnaG3NFBdNT9tcjytsQoxxPoja83Yg4nvaQmRqGMxDLixgDrgedTdcMenoV1pDyu3WZ",
  "key11": "3NjfuLCmhV816YzJfEaFRxCjvd2cgkpiPCKPFXzM25acU6JbtKZuzs4gUYoxyuYB6i15X859DVfbSN3zTfSfedtt",
  "key12": "UPKkfYAdb5aKsEyya456bbxkxgPqyXFSPxKqRnsECrDGZK2KKd9nGW6gYbRTmvmbCqY5UdiqLPixQYaeo6g7ftC",
  "key13": "2zMbVcXH6FdZGBBFfxyL5P4VRCcXmWRyH7qie1zVJJ1YcSdh4iYUTYnEVYYUnYZu2fVLmr26buzqtMHB6j8G8Y84",
  "key14": "5uGZBsTpthasLrzBnWeGjpV7CiH8pFHiSsypkub1qP14pxYTW6nZgkA261r3aGNP3ctsswNtyxWsmhnyEXnREbi",
  "key15": "4BMCmZkEY8swArgc9C6HcfsP7xj6V8QMgLYiPQMrzdsqmFbUvKALyXDg8YxVsvwHJqaybFirSUeq2ghA4HSYtpkx",
  "key16": "2SLjw4YKtnGwGJ486jSPuu6YKTLLZ8aNwHVAWt9Sa8VQjrHH8hGq52jrGHRybNZ2LNUuHhqRTwDqcBYjZcBmCL4S",
  "key17": "29hDah3XQSCsTdXpESHrMfuoiw5UDjVnX2xqV3EFuAVaasTK5qACm39r9y5afXWxTEqx3v2FW4HxiPGsWsfXZJiF",
  "key18": "4girWAREx5iXkefohGGFqXmiCBW4Xs6H9yDJZsWsZPfdnCZRPgLXUjSHVx93WKJbbEznL8g2KEfh5iKPTTjuPyjp",
  "key19": "4XJTfKwD2S5hHD7Vshjwr92MmWtXbdYRhRr9oAEcvq2YgMk5Z22UtWJs9uWd76MXFWWnnkWt3Nz9MkcoeGvkRBNb",
  "key20": "61hEXMLdndberE1J7y8AFdinG9rQkUarCHAR1rpsJe5p2gTNDGk3bZkXJzYQT13b2qDEfqcwnoyQkWH7UNBDfaZP",
  "key21": "41MqkhhJk1prS35XgT8nV61xMGzHKWz1jdCFkYNtXN3LR3mk9HhkF4tegqxiDCmREMyBmdkev4qZqDGbgCpgHNTQ",
  "key22": "5HzhpPiGtN4YdEb1hmwkNfVkGbTdKsmyrHJFf6gEZQNt9CAVVskgPLLUFL5XFbSeQQCXeYzksdsuAy95cc6Tzgy8",
  "key23": "2kZiphRSDzzr2EZcgzc2aRTpifcfG3PbPsPRvEbG5xmU5WoLR7aowVMTheXX7xNoAFkmbkXuJmg7QqQdjUXimGz",
  "key24": "3vAzggq2JnCcMYV53jEwewDKLfbUNHB7xcKofME1XkwhCuhvaqK3zgfrJDbXKHjBGj7y69JqrG5vYuUeREyGKyYP",
  "key25": "2usZH7gn3set3QaTHhMZ6KBqgD4J2WRawcKvbcG6xuwvM3eJut6jsacmaFSPCgqMhJv8GRznYLCR76jMEYMawNpz",
  "key26": "EqbquS4hmu63UkTseBqrkVu7PBrjM7NuZK27aZeJwCw3vLZH8McGEM4LN9yAwMuj6bdfCw2P5A3kxKtqgzBFxqn",
  "key27": "4pumXftFqFsbh89j6yt2ZFUJc1gzoh4LgNNc96qTnZAqfg7wmwe2gVSnoY9tGGSpwduNdpnPpcccmw4tJPqtn1AY",
  "key28": "5zDUNrRwu6GZUdzMUeicKKivzxP8auUVp4HGZBxCcJmQsHdg5i2HsT6mgm2hT8J3TgAWzmUqgsph9SyKbisYZ5vL",
  "key29": "3riRLN2P667K6hG9ym3PgGQhqxQZCWCiKtHgGgiokM6ARBa12ZDA5qAVZSekU8stckKmw5NsuhFk4xTg5jZMcLBs",
  "key30": "eJuHRm5PiR6HMBBH1TJoZ9Wtkc28XbgcrnAZrQ5rGGtXUyLVjr4KHavdPfwLV9DdnNjQLBEAtCMZ5EaGDpivvrx",
  "key31": "7u8jKDuQmQv3shffdPp13PkSe2LNrdfQHyt3Qa4LDwXmZQtJMdmSsWCKrTcocojm7rUVq722YcLCYcP67rWhtf4",
  "key32": "3fSFBPUaNtEnwVhUC87TX8RRg8y4Nc4q1Y7wiYhQCJraoEkegkykMJrDkea5Vp3nn9iFp97DmJbJTK7FDwkPJJgS",
  "key33": "2FsrESPicYwziBXJ959ooNazJZMKb4Q71GmY8wh8gJtVq97brZay6iXK75MTXkAx7mg9YzcbFoabSDoebkKb4xPq",
  "key34": "5idhz1KVZwVSrCiVKuXFb2AhoxNzjMVCTiKNAyXqGHNcsmxJ7KBSu784EX84qBQQRd72KGWbzSNdQ5SiZX7vhxKk"
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
