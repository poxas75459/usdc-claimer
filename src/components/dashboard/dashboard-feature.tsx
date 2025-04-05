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
    "2C4bfdpatSBfdtrFyh4soqy3LhCoyzjaPr1jdJJMXxcUh6gdPo8ykVXUAfe6UTPcrAMkNYbWTsiG47wotePJbJqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uux5M67x91FscLWocURtKuJh9FAMimAkKAy2TGxW63Bk6WM5yibgAyuHcH7YMEDBQSzRkEsPfHqjUkvMooum71Y",
  "key1": "2iKgtSy8ui478hGNCBv1NatQ6sGNu1zr8ErZ58EM8TTf9i6uVZYjAcszkMyLxsq12dduVJjR91amWEa9pAC2VtD7",
  "key2": "2RwkGx1zQbyFf77YpqU6Rk6dpSXbiZfjqkHPFiq1hMfvZKj6EYry6qf9f96QESQMn5r6VGgEi7jtiJRGYH525aRb",
  "key3": "4C6c1vcg4s1fbEQXxL7xHH8ht73pWeTnDed2f9XMMpBopTY93336jjxTc2VHr2Uon1uKZ3sorj9qVJ6MdbaLRuF3",
  "key4": "4ECGXmAm6AM42LTtgtJtdruwXaAaFKhogwFQFa8j4xZh5LKPamYyod4WQ4afvWU2REB1bindCLVasv4Rp7xhDqxp",
  "key5": "5k9nmhT2wH9TtGbcE2wTqAzW9k3Mir8qQfJi2Fq7YRJWftzcbodqPEPkWbrLzpPPmATLRYe6TyBHkayJhfVRFpzt",
  "key6": "31Vh71Xri8b3fHqHicXpnL9pqKDV8W4gPkTg72mmXbRwUSUsDwcTX6fuvuSvqGvizBzv94vmzaLvNJofw5Jsi5Hi",
  "key7": "5BuYNMUBzs2edrAAzvCLxha5ua2CgjzyuWAakxvqu7JbABY2u4SDsT6Qve8nz3akeWPPr5UQP3wk8uYsMMKsi6by",
  "key8": "KG7K4CXdT8phjjeTvXKPmM8mjnAfuTWRKMkrmhrzkpGJkHxEFYBah48imzEYBQNxtZ1krqdmgJx62Tdm5rdBvcy",
  "key9": "3zMwPxdTjPxa6Jsh6fJAqqBDDzEpnQZrtr5QgWvh3CPsmbK5Qc9nPtcF3mD9FQRSq6GpbEjrJYjiCcEeuqsWTMtw",
  "key10": "5aDGycKbbHEbJ1o51E2nNqPi5ikJiA44rhNp1na5N7tCnEKKURok9RxDsjt63bWDuXaejmdGn4zLN42W8SWj4FT2",
  "key11": "4SAxDf7MRyrWQkc1CeCDqCLaUv2tJMVYQYAJtVPHWV3yg9DXadsWxyPYqXgZaz2HTig7MvynqAuEHAKjUxEif7ng",
  "key12": "393DzdCY8JYeW58twtMGVFfHph14UVKUAMaVn67QRsSjQV7thKXwCKBzv7jxaYXacQr37wi7WVzYMZvn3NxcUkGd",
  "key13": "52VrVpXWQ6F5d5o9KFggZdk7SmSAoJMy2HqHC3zHYccw6dHyrbJpaAwwjq1oSqLjKEnDQjuo9XaXiUF6aB1pF9TH",
  "key14": "3hGcGut9DGmbwVYe7T1fzctjme8GYZiNf1q9yCQDk4aL9tKdYQfVAN8KfhDAG4Pzk8PWxLMm3Pspu4PtXK6eAc4M",
  "key15": "4KBDXZF3bBShYFz8uRGcKPcHA2tjt4jN6feGDksL9ZweyHyhka93DtiYyG6sEUbAnxp1SKcpxnWxk28ZNnVpGybU",
  "key16": "4LuYoLQELFeyMJi3WwMb7ft7wyfyarLtmE7LKZ6CpiD1LESUPb7YcHQUWvfHJyoPxHEFo11DUaXsfLmRWFD8UzwH",
  "key17": "4USCsuWZwp6ZAmGzNfHyxKxZqjJf3dntw1YZHDQcAy8tM6Tkg78Wci6pZKGiwkshbuAiYUoArEPv4MWxFphgCwH3",
  "key18": "2mZq4iKzFmSL4zhKTWL9sDnXMP94og4LgRqRZZvJuM6e2ahzMW5LPgSJzcMowZYqGanqHNxpp3BF3svtgJ11Em79",
  "key19": "66KJpJb9Gf3zjbCa9fLvwWWUKaP6kpNjGzS4Sv7k9sEhe46v2sdZf8vmBUSoJbwQkF2AAXMrXKtmX5uk3SJCDep",
  "key20": "3xrartFmUsqCrpDSkXffUheT5GswkrqnikYTpesXhwvJEH2baauntWm98JUWsXStULk4MQZqq6Tk6TNe4qRC6sar",
  "key21": "2XLr39PHFP7ezTktv9uimcZBQofVhuSxJCguif8y1z8Yf7VhibGCVnA6ArTwao5RmYEMTvcu4sQPj9Ymk9rus5CN",
  "key22": "4DNHL5jEgnxap7L3KWnVVTqMzY1BnafQp1YF5wE3mdbGEcxARw4P9rRGjPyWz9cZLLywS5v9FEZ1TNfnfoxynqXK",
  "key23": "3jye4KuBCSyuh2Nuv6siGvdAPxGPs39nPkh4S7zZKcetoprNqivKGr9Txgiq7QZGitXNvzVAMqHcYs9eEh1AMJe6",
  "key24": "5P1iE4SPFhRvUt63Ncepqhji3hoV6zp19VBwe5eJXUdnRe989Fu5iyV6icYoLrpiejJHadvTYAVA8dMDeFLayC3r",
  "key25": "2dxqYiEAycBL1BLhkwBZdyEkHRAiVdH7XQkMkQmNt12CwuK2cvzDQ6xDiGksvecLYQWXCaeGaWCYMXPNjnd6b9zs",
  "key26": "2c5PiRHU9kzrpyMzQpuS5DBS6W9yVWzTfi3ZewFnvgKrpSoKSdZsGsMqN7dDqj4W9xyexhXAxkExG1YCiU3JtoTm",
  "key27": "4aC26LQ1HzvGGcvzP3i16Eh84V69QzuHy6PdcrEsHbZ3cwQscbQRs9mYx56c18U3g16gQX85ZSAG1HpcQnUqd6Vt",
  "key28": "5MiEYhukPzoNiwyqaZNpKgiG6nnbrbLPzmfTneJHV2k6e5fGrNwFU8Z3qEYrfJPtvjxirUz1CWmtZbHy7GUjuqTQ",
  "key29": "3V4ShTaAb7qozcmhxzqTDtnv1x6yiDiDAdbMd8AwGXRmrFz4cuNYnvW9unqMC6cDUdqgBC9RXTErTqTqjWKH1PqE",
  "key30": "4dSFuc6mRbHdKhWTjanjqHyyxPxPKi9XeP34EGdvYLQ6zwP1qkFbmh374Jtxf5WN7AaUxTizmLUV6mGvN5tdU4wF",
  "key31": "5V8FeXHgDcvZGAxwVW2QoeBbzrxEgFj1Doj4jzydEFuo8YGo1iFG6q4QJwC9uRfNAxBg5YYB9uSpFPuzUkfXpRSD",
  "key32": "2y3WEsEkkx8nbAf8X6opn5xhCDJSYgMncpP3MhZqfNTnScaChkYmXAUGS1M8QZf26NFhmEySX1XAyKHw2dHV74Yj",
  "key33": "wvhfQQpsxG2FSLag5Umx3tGzShGq2oAowXLqBRfDnW37ivJ1Efareg7Aqrf7Zr2cjDczSDwMaELfFKuSv1BQnYb",
  "key34": "47eiLKJRqGuJ6zZG2MyuQU5WcAe59ey7nGAxX9hiRwN4fyHpnRvEFka2YpfVUzoEVAqeqeDrjkgDo6EG6Q1S1W1C",
  "key35": "4JCNqmxxt4MVDPYyJcsCUwk3p4sT1zoeFUSySmm7JZGxXKYap2mxAbn3pyfb8D7H4sqoLeBb5xXysmxS5UMV6W9M",
  "key36": "5t3LakgxZv1TpcPoyD3KAiQcyG3oMrPFM8xyWrZno4mo14NJr39myPbW1eiPAw1VzgwUJ4mzEptWeQkkwavLyX6Z",
  "key37": "5fSB8hrQhDbDGRGJSckiajUpUJbY1D3ZB4MESKPGynWYzbTuMgctnY7mU2Z2vVxEVosUvszmCBaqepEaTSNuBe65",
  "key38": "2xBVYpesHR3rSt6bawxXAsjmwEhTgE7eeAV4yvvmxtwdAns766eZ98fbL94MmnWgCsTzPifbCb3tVEbdC6Sh3xVa",
  "key39": "4j14XTrPX8dWG4qdKhc4xjNRzAneYzSSTV35gDHj6kqtio4fCa5aUUf7TdR85Ncqpkx4DUiGdhCrdkaccSffj12G",
  "key40": "4apw4v83o6Wet9WtUqn9RdbV1kVAdYjPQW3urmqGkRrHQdcr6PnuMzuLy4CLEfAt1n2AMEqgqco5RvBiRdcu89D2",
  "key41": "4s3YGCqWXgpAcNQw1PLSsVC5Rij3rnM9c1qjA3DfNFAeryBrFFabmZfvGyK6t2nSbRuE4JqUoRSxBxRbNWjVcCWG",
  "key42": "61E6xkuvpYbqeHbSFfsaDZNS9KWPzeuaTYpfjvKPggSzHBEv1c95t4SKZUFoDZrpzGWq77rTUSQq7Brx9PD87McW",
  "key43": "3N63gucEHtSVpb9ybscVe1oQKQqQUf5VZ6VcZ9FHiqVgWRh5NUEVV7r5nLWY9ucwvQxfUVLdExLqfYckn1GaKxuf",
  "key44": "4T1Byop7U6sz25Hxpn7HZXfkwFLVTzg7bxrnhiyJezbfv96QkdSe4vd296NVyzZGtMFwBwurnF6Swr1WNmqHkopf",
  "key45": "pUe9cTnYhSbjGUmcaGjCrgfMKTsnxjkHhQqmnpn98YoMiaBaFNDHfLZ78XhoQ2RwbFFwXJo55EBtBGr7Hs7Wfuc",
  "key46": "2AYisT7AYpCRz8bFSyjGBnrwQ5kShsSFPcYcHMjJ1hjrFHTPXJUzqBP8zsaJvch19qc3BXH8vT5yD4mF1t8awEnJ",
  "key47": "2e84Zh5JtiFJVQX1MMRrbFKau2iqdfSkendUt8yMSjZQHoE2Pv5qQa4kgy4NetRsBsDjYZnQJFtWyf1NzLJvEon1",
  "key48": "2sKKeYjMeGMybn7nD4NzfF7cBuNgk9LnLjF5tJYksqRNw2yaK7Mq626euew3gyPbdiw9kQ9EuBiyjr6z7GDqk3WM",
  "key49": "39e9xnRqvhWKC4kvcwxUVSEsk3hy9iujbM9jPjMgEuGTPcF939Nn6rha9WCXNvkmWA4ARj3MoFzQCdDbVNdUde7t"
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
