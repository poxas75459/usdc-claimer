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
    "5PDPDEZcrWghr7BiJZ5VpMCcmCVDwXDnv2ThLzu4qXp3FVZia9Fdzv1GjSZku2QiZckJE3YWYkTiiFKHaeqLBRAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKKgJrkBbLZpmLzPhW7TYAUFHHv3FXLoLxEscZf633Vzpvea5P7C1TSrJqBr4VLWpzEZwNUkvhrghDJFdB3j8m1",
  "key1": "23SLBwbCZ4smH44CTGxNE79R7ArnpAepG7aJpRp8HbtySoF6D93m5tsqcgC65PmzLHhMfiydrngdD6CSmvh2LSkJ",
  "key2": "3wW9Z9uZybd5VZFonoqhkcCsUhU85DbrpFeM4EYR8YMbUHZLZmiKMgm2NpiprGgDkx2LaL7a73d8ZettTAiZxCXV",
  "key3": "5mXBJJGUsr3Cp7QNpE8CMnNyernxFcCxD9EHD9KzSqZUv7cUi96xWgirSV6kAUfCiZbFtnvrrjTbFmDqUby8aHcJ",
  "key4": "2X8Se8wYUw1hbDeXYe5tUw5VnDip5whBxJLjGerwDvrgak8EniTnyvPWA5BGpHdb7fAAPQqP7jTTZvJMJ7AUxKFG",
  "key5": "4kWSvBrNZ4xVFNcxiiv2gBVHzBeemwqFHhb5kjPLVzX34NKr3Sbv3My5fr5Pofd51sSWTkv7tUfJMhNfuUmEsy7r",
  "key6": "4kc6jWdZbzqZzrKWTjaKYDgrSM4x61ABtsi6x11spuqd3qMZV3QABs3wFVwaqiN2oEEmdQgGxtfqxc5Vaxnnnh7Z",
  "key7": "53A1v3855D9XGvAqBEfFTKc5BYCJw9p2rEANWXUhMCBgxy5EdpNYbKernr2APmT8tRYrnw7TFgFfZb36784t8kDE",
  "key8": "49TUiWn96j4E1GAxNEmiitNHubZwYW1UbM2ur1bXazSf8bj7fRWxgPhwtSFrrTCviF1ePVddTPgFe3WQUtRsNfE6",
  "key9": "47NK11JprQAioEo7rEKkfje2PjbTLihE6PEfQQhRfw874MSvHdGqdwa6q11DuQYGs8YM1JVQWhHhvgbb26hiWhZf",
  "key10": "3AaBVM6v4PcEwy5hVmPG6F1sBQx3FsHBfQNc1YYc4E2SCsztAkoeoR4dw9SCvt5N7rUonD37stWCMqBcvweHk3Ss",
  "key11": "SyyPtGBwSwjvnJyZEzGvTZsBAf5aaM1Tx3Hn5r8oWVbH5D9L6ZkxcX52gQjcp9sBwBB5tSuiqvhHy781D4Md3Vf",
  "key12": "4KgA8NzwwpdRPXJANBt3cqBKmdPBHbBaYFX9UF3yH7L2NtiKjxUdv9KseETHTQ5q5fPBsP4SY9XxgSaGzXTqV1hQ",
  "key13": "5HKq3Kzfyk4ad4paRbz8BDH18LpVXqnkgbPr8FbCHFoXa62ccEQR1st5y5N9rD7rX6iiTHGXBNFV7mcytNwpaLcK",
  "key14": "3u3cYTGfRGN6xHbZmRA8YcUyo6JKbxoeTbiGNoozEnZFNroQmd2aZipeuJiwuUXEf16q3RmZt7pLQtTeRPdHDcCG",
  "key15": "5wGd8AnRU2uAFA1WnP88qXJDeS4DS6F8yKuLthVLGy57gwpksgSZmesPZioVw95XJHjuhkdFh3caUMhkSRW1youa",
  "key16": "4KnuJVsxJd6G3ZmeT165dcDSGcxnQzj5hZC96qPMrCf1Cp7AdgmKyEPTFEC1hS12PqQngdMbM78nGNBC4iRoxqwF",
  "key17": "25KqLx4zPgYv829zp25iANZGp1jxiEc98UzDMtLaHuyYMDPiioh4MRdoFPmmo25DYtc9LAz1eXJtu4swfhZXVtF4",
  "key18": "5JGv4Str7RaS2VCSXd1BwqEBLG72D1AR3a2CcGMq7QqF5D4eYhfg21tZoqdAJdTvimREp2vBNKvfEp7zq24U2i9B",
  "key19": "5kwwyp6JnQZHkYam4LurXEEXmojbr4thka4DAS9dee9nM5kqX3bNgi3mRsEPWWVab3hm4buPQ7ujwcM5kzzpUAn7",
  "key20": "4Yo2XCFbpDi7FVe7uYW42aKdZhcaBW5mKATPBTaB7u7DXnp3VzGJYYEG6YEyraBd8S4KjPRh7yf8Pv3w6Pu23s7M",
  "key21": "5ZhzvxT2aN4yXxWEQq7uWsA7pfuZdDYszayCjPm8bmoVeP8UJpkhbLqGLudKizDF5n6xpnebreEP8H2DdQv39aAe",
  "key22": "5GLqMRC49A1Hkohhg3jgvZq3qvg9Wcufsw6eU2Qh2XjcNWS4BAofWzfewgXwNTj9KuP1b1Hx5M2Ky6WwDujguT2m",
  "key23": "2Zt2CY7ZeVQY3cxNT914ipueqEnDisqAwuAWgScAc74X6gsTatA6ZHNnKTvaaykiVHVM3WtdGiCkC9P6bqHQL7ZW",
  "key24": "4yApTAdAJ3EZSzynpjbgc1TGgkSXRjowtQ84kCmw5C3SKhb3Ndyi2MH6Dvgw1AJS3zN4HKabXdWf3EzbCjRQGqD1",
  "key25": "4NBt22R5DjbScJSS2be2C4gjhABSejL4ZrF4TMc8b1EXyf6VyTKgsgXX7WtwqAh5EVXAgoTDuLDXEbhAMX1Zc5RL",
  "key26": "54zfp7pKqQdwyWJnvHizsQ9q66NNBBSw16qsyzZ9ZQmpYVfsohim2VcdWgGJCuS55o3xR5cBVu4P3bhnaumy3SJ2",
  "key27": "3YgXQ8jx5ry4bxenabMUFvHa5dm7ze8sMrfySxG7j6YebEy5EBuFhxk8sBvmPBTukvtdrMEL6d51dowp1pJFaqMa",
  "key28": "2pmNa9saqDdHFVdzrsj9bHx1wryHmQwnDbivkWddU19aaBjn2tF842Qxf3YHuaBZr4AZ48S7nJ7r2xU3zEvyYvqM",
  "key29": "27n3PEmNmxRFjtJYBG7zfzv6Wdj6pZdzmktCvKLQbRRz4UdHCpGBbkvrHzrcdCEDUWCnuMU4MXxfiR373CryLU4G",
  "key30": "2mCw6YosjqNNs9f7hsicbZTPMp1HspwWPB9QzS2fWtSpn3hzMod2Pbbbv9Mvi9aQf7a5cvZbvoTVJfqGYu9rPn7Z",
  "key31": "2M1tSRmYpPf6GDNvBgZiVmZ82QkdPf4WmeedqbFcc1QXDXe9T3Rhifit6U574yt6asiQngJDgpLhv5E51eYi79a2",
  "key32": "2F8zVQYGJ7mCS7Ac5eF4spHwG4okMukds6dExLdCpyvrHim9Ptp5BeGEBsCgSj3teLnHz7pxES7EphGiSiPnDKxN",
  "key33": "5A4iv6iA1rceKokA5u8h2FAqXcgAPwQCi3VHQqGtnXKWEi7HLVmBMcXvr8VNcss2nfhqNj6XsQdoVKyhNFuALuH2",
  "key34": "2Gm3zgYtjf4Foi9TtrJY1BvVMfrjzFvhkkLbfGg6s5qHBDk45xb4YuyiERoF3j77d7V7qX2DFytCd9bXPEiznjhy",
  "key35": "2Rq56fKFAPYppnDzMgqNp5AeUStAGA4v1gMa9AxYzqFB9p2ux5gwxqfsvqKvsgdYSnyJXnkt2L47x7pUTi5MCef2",
  "key36": "5EsMK3KpuvdvEiXgdZVV6gUbM4EjRatm5a2Xu9m3Deggu2UKWUvG4K4ZeiKRKVmKvCcH3Fphif9LyAmySfYmPgGn",
  "key37": "2Gy8wWFNDEbUNUvd7C6ALfTbw2RNqJM1CR4Cett1Y9yb5ZF4LyqnQE2tdwxB4hz4VMYd8S6ZnUawK81vszAcWjDx",
  "key38": "34PLNFadrfKcyC65MwYgaB11CiMT1ut5FnMyqx9L3MauE4J6pX85VQAW6GHk9pCAJZkmu4VVN8rJ44XgGHEo3p6v",
  "key39": "65Crn6eGSUZk6k3XqjkFzU7aZfx6pHyrbwfjhz8A7NihxsqkQdLSrbH7FZ4fjLMA3xG5D41ACfLSmRhaJaVkiaS2",
  "key40": "RzC5iaApCzqEWLKbWeq567zwdv2FvsquBfzNwatiq2BsXGnfBZgiJfmrUaTjNxLtizXs9AWRpp5VtW3L4uMtGpm",
  "key41": "4ov1KHcZhRmBBEnPfH3vpX9wc6PHaeDqRcmdb6yQuM3UdLJRQqWxFMmUxCwSYvPj8qUew5xzPmWMeC68jYe8gW31",
  "key42": "47sywSHzNuZgpomEeyWKMFvhZtj9qFq94xv6szUp2rGjrNJv1WHmesy8KzuXL8bqSncYCQfmXsTvvpEQGrzHDKzv",
  "key43": "b7SgSqdcEQFMzhvqfa4npw74AK9WCmiH2uBCEbZzsR3AQZ9eVS4o24Wdf1fhX7LokFbhKqhKQvuqZ18bMvZbs6j",
  "key44": "4vebaoVFJcRrkoQzhJmA5fQDsZ8K1z1bxKjsYK5iizHta5pQTfehNnqHHqp8Fz7jQ5naqNVLEDQW7NYDFfhmEcTc",
  "key45": "2CWVLmc3Gbky9QMsu4hkcZTBk88Ug9itpFbdqTzb2PQpBTbuTcD3mbcQASGX7mJqkVwNBi6ZRkSKXmSLefvmKmaB",
  "key46": "2UTNNNxJJzNB6H5PJC5JgSBqpCuJTgJEEg4f51yVVbvFCGWPDkknUdaNDUxwccS2gDkTW4QXfBPwHEcCZCq4BgLG",
  "key47": "4qCcSBHZfyGTv1rmU8QP1Yu6FHBJJiSbUNJnuXSkD3xEgPC1JE6a4mfL5ZQBoqJw2bbtpyHWBdGtRajUgF8LcN2B"
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
