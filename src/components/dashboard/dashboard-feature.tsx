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
    "PrMvEQU9BZcLx2NraBqtFCAQkG2Z4KXmbRwo7D5N7X9xUSdvdMKv5bNYpKj5EfBJv5Mn3EAJtUaGBshksoUsfGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJLKfdKhSkBdSNKKGhPXcQTEmQYk5nv8FWR2GQVKh4ZTHg9xof7CqVJcLiUH2xoiWtkVYEL44CbisBnDhRPKtGR",
  "key1": "3QvarwPbraJdYZMBUQufbGU21AtEawuNQvU8ppzhuwSpYPnVAwcFWqnQmjbx8C6m9Te9smaa8nqbpnhbpXXZuQ3n",
  "key2": "5Y8sXMvcizP6NM2fW1uTQPp6nBeYd6dG6FKEYWgNyUGtsQ1RU6epBjSHNPRwoyHo2LZ8aqZv9AJMcu3jCXaj7knq",
  "key3": "4iRe9bFKcVcFjihwGjxnEFKQkCr5C9fnzWzdZ9aTj4vAyYmb6AZPV5E2eTANXza9gAFL945EBRg2iXPgBgs3F4En",
  "key4": "5ou9aRmLSbm1FpNpjLdzdSWqQxCrQExkLf2mHGXJdkSqjJsWQcm6ihrNVySxcZDw6xUGqCVGdCvHMsGGFz9KCURv",
  "key5": "2XuMQywmt7kFus8Y7WLPbGa3HnMyspXRAkD6BnNgyCVrnELZLKrTTiBds3ADj9a4dYpBhYUeUpHpXKpgL6AyPfGx",
  "key6": "2Uj29DWS8V7CixYFdNTpbTxFZ7TcRnbAE7JYboFVijBPj6RNb4TJBdcHF4yJqJpFT9mdxqvNbWxvXg1vVMcPwhGR",
  "key7": "45PrMQuhCgzYmAWyfNvqbaz8ddQjQEBNCVj3XXkZ2ubKTv4vdxuDzoMePLyRZXwcVtDrRZzQxqgzG6NrdDzYVV6r",
  "key8": "2yupBDc3vTQ8Wce76Nx1BEzGeYipkGHRfFNGq2hXZG8dCtLSDF97DgAqpKndDyLJ18HnR5VJgXYXfEDdX6BmCb6W",
  "key9": "Lej1ouw2y4zAP4Yt1ZoruybYC9jRqnY7fSEhZEzWu7ddGnR6Se1uTZ7drHgmayLQu9AbZUwG9JkQ76fW8LKp8TG",
  "key10": "4pyo5pH12adVChZw18ewfnSSzwuu6gVbNrTA4DNhMRp8vea8C3uu1S3QHkDd7bhnqKAvhnDUkunx3rUrsmMNPhtV",
  "key11": "4V5tunmDYBrh3rT4V5UrN6AUGLrcSPiPKUmCAdqvh8FTQsoixNWwe3zoeMuVgQfpMXVbc3XxvXniaS8qfd2ifeWY",
  "key12": "3bPYX7mxVsP1s3ea3nXHPB8P1VmnC2qXzdjWHswiJggC2GsZk2zg6p81hXBpUsFxg5MggFghdN6SXzy2DN9SfH4G",
  "key13": "4hFiw2vYsBTE834BPHXFcedChT7h8LqFH3mqkJtwduecv9wswHNmEV4NqmrWkXXSpqa7actbGxEQKN5MKofzyHfW",
  "key14": "5zx7ZvMGW8bgmzr7Bs3ZhQiD5oMFTstZ7Pavm6xbV8E4XfU66BECDeX6VXKxUKvRBpBjzhzEhpP1cVzDAuXDS29b",
  "key15": "4ntCN96FM3EbagxeGvsiTEawJn8vL47f82K56c7Ez8kfmF9id5rwNK2TxMPRNAyYT67UiP1y6ziUx2kC1CcQMbZp",
  "key16": "439ZYdYCGgY4DxPBYvqbumat7Vk5hjfp9yxmeTdDaCQ1B51yaJhkEwWFzcqronsx9dUdW9zSJrjsPJUeLFMgXGJf",
  "key17": "45tdDzaGisyaYJe5CgSPXdyUkJm4sGUb2tMD2k6FJTt2zYt6wi8ZjTGsVRwraKg9JTQcgqUQcYAeJEh52Pa5J6b6",
  "key18": "bggaeh3ckH6yR5N1776yWzL8NAs4juT7aZiXtxkGmfh3iSkFjRPkGCAPoMRqjAybpcdi7Kbc2gDghqdjoKez5RL",
  "key19": "4ahjfobqHVQV46WKEt86Fttk8fmCVEfT4Y6yKbbvod8B8st3a1wncX6SHJ2Z5iZfcnP9UNKtjeoBBnztsMBWZtwU",
  "key20": "3JxLwmHJdRPt9YZv8Ns9ni7zwpMf6Z5bN57cAHm9vZeuQEvqWNfa4p47bvoVeZo4uEC3P9Y4HKAKwcrs3nWtkMor",
  "key21": "3eFt6qJG4dRW3GCXe4Pjg6v1oMMy93csESzForJCLiGq8RuvWvJB1QPXbtm6yjbNq8LWMXH5CNUQcjy5KvqxH2to",
  "key22": "3QzwqQUKDsidKEhbPpvGThvgdmPCVS5hSp86Xkc2itM39BnXGw2A7PC8joujNw91rUUAPpqsSj5niwC49sMyQWnb",
  "key23": "61t7aHZAmmioqSHdhhsoRJfoUHe9m6DvFoXtW46Ci6ZdBjcRbkyn1FaJRxLTJSgMznmHqfHkogtEmBehZ4ZMePXf",
  "key24": "3U3TdH7nM7euoNP7Xs4CV8tYZcyDvx2tC5W9TmgnEKXPXtExzVBU499afXGDxmiiDviqBN15u2ShRVhWPwzvud7t"
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
