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
    "4VdboQZc6fDcmjDEvr7ghJ9Ub3a51CcvzAgRfLTjWDZBW83LdWniepp8eVrPoY7HCmZjnn7KqeeJx9Y15RbdbGKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tJ3MtX9tsJDYMKmKA9tkeYYw8epTp2dVaYPeePr56iCcY8jJYH67DkQx3JYSY9oPv7Q3yGrzRhyvTnqsU7G5ZdW",
  "key1": "3n8Zvc1AdbdcWenbGYytHGvbexyL7LfuLVSG8KP5PXjUYMjPjm3MknXmNhdz5wRx9CBjoZkwAr3xMzJCY4CSMU7",
  "key2": "3D5677rENjZ79AGvTkE9T8rPaWX75qrpmT28DQNwSUxhG2qZwCREEJbYiJcRw3SU9faAkoeqfgWXRyibBvB9bZqZ",
  "key3": "2P7APNb7Q6xgvp8hiwqo81zxG4YDpBqCRwxTAgjbDHyERH7zzktKp7qvNNnA4qHGX6w1KnaKXAALvYNnBgsMjLWW",
  "key4": "3E7jLsvLquQF5xkWB7TLzf9bSjj3QwzGA8StQ9M6Xftzp9jcsw7tKxWEfWqbpp6hNzosKQchSQwKi8uvf6n8P11Z",
  "key5": "2pZpEsRFEpD8FzvK838SgxsRKKmgBFH7eAHUkPtrfeDwXEsdNEbxShdCf1JAPmcbRxZAvn3whXAAE6HQLuqXJwU7",
  "key6": "3CGhs3ewLTqvdDavU7QmARsuH6MYFmUfMoF1PvH9GfokVd3QvECoMQHW9RBpaNGG2BTCXUxBYi7Ui6YYzbFdXBwN",
  "key7": "2EYnWbB8jJ2whBGJjN7KWRGo89GodxZKdNLByM5Kq6qMg3DkzTehDfpQn2aYRgSKqL6KdbuW3nNWYR7aXV8Gqcji",
  "key8": "Ms6cqrxnWcZrzBf4MmE9WEGpUBpjhPVFgg3Yb2nkStFTKFmmTETx7sjxbkyBw2sJPHmEcpJDDrh6BHUQc6y6RAT",
  "key9": "42ea3LGXT16nZwph2uCndM2wKdDB8tzo23TtafHNZ117BQqh971ShHFePNdfmdLo6Ukb12kaGKkxKyvhb9c6AekY",
  "key10": "jbMgFHfrxCxK7EtfiskFzs2MMB5T13NX2TNRdhaettLzj5EmTLPefwnp9rGJjzf5zQnXWJRp9dH32kssFqH5AyY",
  "key11": "ymFu5z3SuYr2DixuHxA4UM1G2RfTZabV7Qs1ufDCeCrmrC3ct3Biv1UUuok7gBTGppMt6jUqWTftry6htVmNmLb",
  "key12": "3d11achLZruT5LvTJRwgEJMxd2xPWWVBKbj3iXa9gNopRJUKzxb7CAPpcdG52etuHjXt2GZZ3iMxATMVeRc3kdn9",
  "key13": "5TkjCfaNUDiEUVHhSGkV5pBDqhDDxDC2c17YTdSkBxbVycfkbLZLNnr35ybvNcJHmJr7D7FM2T8rZAKpQiA5N3wZ",
  "key14": "2rUM7eSixm5akneR4ad3YMaHmAYBx3CCR14s3ZPZ2qFFBE17fpgN7PnSF7VUqXK8nrLzpgXwT3AUqXWnFHBpZbWA",
  "key15": "pur6C3EoNFaMGGDEtZaQVJsX2Vv4PnTqGC6PsjZ6YqTNXufp8YD34kogLyVEhnVgbYY98mpwuqYK2wPhBMnLzQB",
  "key16": "4qUXhX71G3a8NBzrnv8mqZkUFNGvd96BTYViPcRjd1wbEHXXegBXPJvYTgA7YAVZhYpme5jKoVPi4LFDaXNYQLRF",
  "key17": "ndpUikrPfNokeruDgvwXYCue1nM6mzecqmNC5GEsEVAwARQbuGUpgSxwdTaYuC9sspuqYBvgXkBq4EnqgqzfAtZ",
  "key18": "3CxD9ZBUaBNhiscvnVtnN2PmkhJgBdDQfswBo1zFnj7gw9mbspesbYqfMBmX5fLbUaT47GTiMYBifEbn83fmTuHM",
  "key19": "5u5DTcU88xBfShxossgdorvveDLbYh4yGBZjkrYRpujkGj9551Y7cz2LYQgF3EjVcEyfmqjEVv1vWWAN47Cmn9Lv",
  "key20": "PfdrBv9chiCtRbNqAj42SfJ8XDXFk77we4sxf3iSWF7D13YavD6mS1SKfheTZYRQ5vPXDZA64Gtq2dG8JrDuwsS",
  "key21": "5QwqkYeWLZRZ5iQtpgCxNp55dhcutLD2cnSYX5AnjUWSsLWDrfRhbiqpvQpND33EeVSgkyiSB3jMbxbFANYViz4g",
  "key22": "iFN9rUokbNiYntQydwkHaJXKc77duVaZsqJ94kphVBNHiPLJEYQ4zrNYLskSoCWiQoaeK7wFPxJJxhnvFzemgcn",
  "key23": "5xWgukomUN9MjeeEmqQustVr9LXc7qe6kf717Lc7hc754wydYFyiboSvQDCenRLkMJ1uaYLVfP6PKo2mm7pffzsA",
  "key24": "4KqquVPwhYtLczc2f8FixccHP8BmZBEYNGNgzE5vKafvSJibXLvWsBHaNVheeYAi9Vo1FC71udyDVopNTishNwdH",
  "key25": "TpgsbqYgdfaq4FBzhTb4LSARLNqcp3tRcjEBFKWi8Jjz2H64Z6N3wpLwSsUuBxtud6BzbZEsxkjkU5hSSLj97WC",
  "key26": "U2CN1Svwbskf1mxzjjQXbGaWKizyJzqPnCkMHA1HT4cXBfyACBjLc3QR93aSh6EuHp9yJAsfuH22a8PCRSaZBKk",
  "key27": "23daJvShjwR4ZB1e3e5H7MJrEsaCGsZ614hXLFPgW63966rWeUHMN8H1aApmG3y7v5aELDhogrGRJZk35Ay6pd3P",
  "key28": "2U3PYajLFkiAhpdbAuSWmkRYy1UXw85z8ZnQLxfMsrvSwKbkuVeo7aspAfzkTWPTfxoEAqcbD4FkhiogSZo5d1n4",
  "key29": "3xruSLLfYA85RJT9saZNtFubPQFUjzw8Xps5sjCXpKN8jD4hk9MSrzdJ4EQj1UDUqVDS9UoKvXBXFQpJn62ovrqd",
  "key30": "4T8qPvsid2cpGGwJ8C9SDjD1ZWdPqi439eBbdPSSSeuhrEBwpLUxW12aWKiDGsHjwSFqj2w1TTdNsTRgfuwRoGxh",
  "key31": "2NTahAry8QAAYsskNZRc5fPtTf1XBA7QthoTrCGrTW87aiETrqDSB1tHvtMK1aBperazVKVjuwXH93c5gNSZ2zgt",
  "key32": "2Yt7PSTKZ9hPxyqanXzhFur5UkAbM9QJY4pAeEqhGjjYpDmu5C3fTTqQQiUFiDWWsGRuCKwE6J7XygoinKRveiBX",
  "key33": "b8fdFX1YiJzaQSZwAcTaQtiiRWoGkAVBv8U5nEbDcg4bxGJzeTfhCq6CNhtRaj4d7vpvDALsp4Jpf2wfUd45NpX",
  "key34": "2h7BBtwzrzQWgT4t28RMiEo14GbKbfkCRfFy5EgzPELZLanswB8Luj355sEXQU9uvpkE5hxR9rT4gbnP2f4CABWJ",
  "key35": "87h1fpEwy3smGaTT2WGcbWrf9nTU2FJKvVpGKoCZ249SRufvmu2wKVk9XzMBfXqgaAcCvtAnKshYyHVEjxUVhHi",
  "key36": "3MMpPeMZEs4uzFtwByz28zGySPjy9ZRYwV2gPpF251dwjNkgiBX9adfBC4oP8DujuJK3tH1znHeNpcryW6fFLYLZ",
  "key37": "4a5ge5RQJaCbECm8wGi21wLWZSEfGUfNbTQKJM27Xb4VTkbG3mrA9K7B9dpM4go63vkXWvTmkorDbY74VG7QiYvU",
  "key38": "36zMTUzWw8xKd1YGaeA5o4sYBnaHUcMzrVjJL4BbsFn7W1hpnBSrmXubRh9m1qC7DjB8FmAAhGvRLwwYenhmTVVg",
  "key39": "5o7S7SxdQaicj6uvTBkbcfo1fqzyn2kB2QEj8MsjGaWrWWyMFozPxmVbqn438MpjGnB4JMSMfgHb5NwtrJMqM3uH",
  "key40": "3SosgBi11z73VYxdipk3SVncGJdHAnwA5TGjmH8rW5J6p4urUkufxfd7811X2pczNNd17nJyEgEP6PKWqcmbYCWQ",
  "key41": "4oQA6Sr9k6J4xNxRFTVzTyFod8nHDy7H49rfJVt6fwVp9X4D1u6Gwq4VSH115TqQ692owszSikPzBkwvpuHzo7RN",
  "key42": "4uuDozNDhZYUDBc9XPAbJr9RZTRFZLDEnSmtG7L6xzWWNZ9itUz5dvNjZmnvSV58bARBGVWVf2YVbR3jPSm7dLC4",
  "key43": "2hpkqS5uzSLZvgFeFVeLzc6K6wxz4JQQBypLnAi5FNxuPs2rMTDJUdsRMeByYLEFYvTdG1yDcTFgaaafskzD8BnX",
  "key44": "3QGFX9afeMBmvK5zNFjGhPj4rX9hnLGY2gSuaTHVftL4o38jBr67jTKf8NSAw49Vg6tV8PivpFAZxnPxCQVKDami",
  "key45": "4BLypWuFnzVe9RUGcFRKzXPu5h1VaMUtJGsU4JBZAsJ2c4Ysy8TE4w6q8gma59k8PDdd9SPaih7KpaqowYjq6c1s"
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
