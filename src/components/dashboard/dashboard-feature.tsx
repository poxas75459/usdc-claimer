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
    "5XbaP49zkcN4Tsv95rfQ94oENLJJmjabsFgZZJaApmMUHYPm2uSgkXDptHoV5wQyDYWxzg6PMKCSQ9HoMmorvxFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWs7fisdccPGrQkcG97WgYLiHCRJyir9D6vxCMyin1oUwmZnmA6fd3EvVsN3FbVz4u54yDkdJ5Xi7tp7aum5GzB",
  "key1": "Wk65Bzym9DUfFvj8chCkmfeanrLUXvGMdLfCrUuEHKun8hGnkaaqtrRiozjgi62D4oW6itmFWtHqRni4ezhfokE",
  "key2": "37m6ZqeDTb1tvmRLuz4Q6R2M5CxzCG4FeedScHRZwtWKJZ4rdzq4TvLrDnJE4c8zKRu9oz76wiNisYfqAMjaK9b5",
  "key3": "2LZa8HMk83fwVGG7sgbGTcjjnYGfjPicPqzLh9xkqjWDb6ZHxPRdF6JGk9Gz5jGZFq8TLJCK2R3kVPBLU4aRKbgR",
  "key4": "4XtFMQtgdEfddhJx6B5JBrDErM1vivBcqFmPTqX5D9agyt7Keeo3EMDM33W6LcrqHDdkbA1EHBZAvf22c2vjeAZG",
  "key5": "2tJakjxXDDG8ccFSHf9fefCDLqEswQfuRogU8Jb1fL6fTpa3zHjZA858prf5J1qAeUG9psx954vAab2j6LThgWsY",
  "key6": "2u8XnfpbSuTmwf5zTJntpmG434aSn3GdkJPKXixqPXgzAYsFZhRZNyfHSH5FYKEafyWQPND9AfFSq1oo8D9XZHcP",
  "key7": "4CpUFpPm46HjaPMCYBeYGe2u4Br2QzBqDezxzobUjY1khkRh1y8pR3qJ7PuH9gXKke1bw7j5Ek86jzEtrpZsLy8h",
  "key8": "3hmrPP1qeojxtUj67ddBmQox76EpdKDyBknbKfo3CBMEyveFtzSkKUcoLoTwEUE7DNyobJNRtQmngud4G8mThsqW",
  "key9": "35h17JYRKUakYT9hGCtVdaWnXUVnTEVR4AnCHZXrREXFqJFpY7yAKHjSj2WCqgZkAGaDaiFsyWQe6jG3u4qQ4qx8",
  "key10": "3zWHzmy9rcF82EerfL6cwzZpMZbonRhp3gsYhBMV48W5oHmLgyBaSinqQyccXfAoBTbsEDWRoCWArx7L97GXWjsG",
  "key11": "2Z2ZskdWz7QFcuiti7rBEVDrET1uT9frNcHcY6rNR1gvzKzxtPgKDKDbjdK9P9xSNEz1KzB5aMhF8aDzrLRt9a77",
  "key12": "3A4UGRN3LT7dhjz4YoxvwQ2QiE71f2B1sfjJEpCCAunFH6gFP87keXT2cogNhsMb9YJYZTTtDZSYiuj2WSGWqbh6",
  "key13": "3XurqNoEHJBHQ7vRmSSzAVmoD8uXoz1aSY7NEhVwJhj6o4zBdKqS24TKVFETcU9XiqAKgHsoHxWqKDTa7QmhXupa",
  "key14": "5PNkqArmxFhiYSj6cqgnsmP97FtaeQnDN72kanDX5EmCwJbrrMgBRTimZESMwGs8be7LxjE4Lpj5xNKfDXZ9LGQe",
  "key15": "37hrnPLGQTFjYLJbesw1Ck6X3kqXHFsQHCgj5cAdS5AzK4iGoTzwzXGhFN7N8z2WRf9GgSzg2aizr6FGnt66QTPL",
  "key16": "5mCzubApyfpukdyATN3ucYV1nBz6xxMUjjZ3nSw11Vp3WmePmpWbVdnbVHxzb8hX5VyXcASv8FmdchGdR8BBP5Ka",
  "key17": "3EMmFDsr2ZXT3EdjUq2LfjhMoBc19BsHdSfjAqvQbgvH4ropwhaMhf4qSqV2D8rsDHi1bUg6vm3pWEkbkVXb7ynm",
  "key18": "2m9DxLWpfNVVwuJvTAF7fbqE1ibNW3gff8Dv4du9ryX9HW4SBX4GgVaDAQjiHtMKDibnA7dhiELqRRJmHoYYfXTw",
  "key19": "5qiZLKJ38mQArkkLNTx2bSX7dPiNDEE5Nnt2UpqKAkhfJCWA8fR36upeUMi6fB2RrAvyKounSw7qAs4tiza2sJU",
  "key20": "sp2gUw41TnZV5Qkq8yhmBGKqPKa7oUZKFkWdiiTukFe2ZDWsFHZhH8oTZF42xFrYfXArRW2r563pRsjM7XkA99r",
  "key21": "KtTHkZXz4vqdqZBfVyg47FL4yYMK77QrQ6fTy6PxLTi3RW7PSZMpzWUAfofuoftuQcRbXLCZzT2ELFyw1V2unMH",
  "key22": "3vxPKZXpND6wTuL5teduktfr3fB8UizvAcVEqEY8DR82MpEgMrtWBrkjT8tsbqmQcsUUhNJo7xfVtwRqjoUoUr5M",
  "key23": "4upnoARS871YEXrALK3RYudBg6qRseo5DN4gkCMU2Ge6YdNdsr5PK9sBxNDg1uibsL8aNKynXvjhvoTC5mnYVCLQ",
  "key24": "5g7Aht67HUaHaJpCAGTPdB4hapszxyMKkVrSuX6ogGPNFNe3XRpuejdpTDYaWEfmweyniM6SNVhcaqzCeSh823xh",
  "key25": "4RNs9eYW4ZgcxybeS9hghGEDF6Y2FSL1wAL1f6f2mzxBapEpMR7Yf2tFwo6CeR1CEiKeXSTzU4KUTyfiuZ9bQ8Q1",
  "key26": "5fmP7t264ddeyn6zyfLUoqnf1bmu3k6caWWVGnPVBX8mV6dWFppd4Mk5GhuuER5fFTHiuQ5BPTev21Fi5pWevi3V",
  "key27": "3E3GBJxa5gxQnEjs9YiempSZAwAEjCkLE5xhx558qkRHKdYjdPRxguNTPC8YL6QEPDUZfyzq1gR7c4zyTkKkLkRJ",
  "key28": "5BRzmBdMqiCEL8xmUWq46ovjknKuQYqi54wnQUEjhLyWxTMAYaqvdQLmKSmbDzMgu8jMT9nynuyuFFJ5M2otkMc4",
  "key29": "Jd7R5qm34YLT2dAas3MPrFn4RehmxdMLgUARfiho4ueN59AnX9HymUp9b6ERfgi8MtEqiLLqFdoYUaXerwKFRA7",
  "key30": "5ZcVzt33H9BCUPs6JPDoQxWac8CZkW7Sdkecxo5ZRhRD5mswoqd1ZnQ4jAefce4SaifoZzC9nXSv29qpLGAZFPRt",
  "key31": "Bog3ooGmDyhcYPaLXNpeTMuJgozAc5CWWPnxjPEogYDizPn2Y4ZCWmajx74fSvHzPmQKGLriouygH1XAxnZTATF",
  "key32": "57UtumXusyp9Xc4qmRpXXm3AcQ3U5xU4pNuYDaNF7fJdaHw67Tc7G2syoZ2Emcam6wY3pVmqb8naCrQvpXTM66zh"
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
