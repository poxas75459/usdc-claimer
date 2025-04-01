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
    "2RVC5NGjN6gmqQvLTFACWRq6LW7zTNrKUiSfznLjgWqjjGsCc3Q2JMsYBgcyHPgn9bxDMogo5V4KsHufJYB8ses2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4yRaP4WsDPD5F8HoKnexfb4MA5gjBidgfuagLBtZ1goqnumLQuUnKENnEaAyG8gdJLqFuVJ8pt3251ZuhgwwPZ",
  "key1": "fr6KBX449L2hLLzkJP6REHv3LS5GbJN1i53vRqabX6GcvNVTnVHJ31YTPeD2rhQqJS9r9KUojdCMcg4raC9PGjJ",
  "key2": "5e8PFL3isBqjBoznKJCAc1VXjzhd98wACbRTgAvU4y4orQybJ6xMZezchhfBK7dRo7HD1rUzRAtUrQwJSoQ9SzzK",
  "key3": "56DmXQiiHNCWyzMxmVbnNHe34a4DWudqRfwjRM6j3Hki4wM4Edhsru6B9LZfrrDeMDdf5WFuSWyN1cEoFgh3DYhg",
  "key4": "38gVGTZnjFQJbava7PDrsuVpmasch85opiuzSdo5hm3f4rrBUkWjSc4dJ6SRtZNtfvFnU6qTfQ7JQjHgEvY1FjjL",
  "key5": "2EHbKmFTN5ybXZUjY9MDQiMCCvoQn1tPLMiPpjwxgGb7rVAeSHWb1DKUh3BFeyCsroRkEKckKDXatKeUUqAM5zaP",
  "key6": "FhgdgzA5fW3oHgqBoVdgoPRYQQbovQ4yiLXv3iZMVQUcrZi9ANwBj1EHb4MGqnrETfHfRFkZQT2yCywR5NeVgvD",
  "key7": "5pnWp13EDnW93R4rKRd4dM9CjbvZJq9W992RQwSWLLWWRB5xXyDTKJgH5XLaQ3cXUNTQj73pj474Pev5CvTmLLvC",
  "key8": "4Lj6iire78xnt998agZhvYDkXYLP973D3uW892LXovFgnJpu7VNpxBGFs281kHK5hn3WLVwmdeLY3QWtnrj47xAq",
  "key9": "4v2Z3y5XMUQR5dBhYEEBoKFaJ71T2DJLFoGMKrGpyn56vvYCQBfRyjgi62QiPtvTV88XwcaBjoU5dUEx6EXBWLG7",
  "key10": "2DdNk6sszFNFXnfVQwGMxZn82VJS74p62mGmXHiL5NaBoyRYZvBz2FpAKoqznPxjBb2m195saeXBggnCV7B9Kq2v",
  "key11": "22p62WXEABvsBGnK51qaWH9d3BAVJnD9hxiL78g6PCngpEMiit84nWjKYkvLdCxfwRKgGvSxy2s8znQt3q4mgzAC",
  "key12": "3YjFiRXMdpGWUDLKjVPAAE5SzYo21dsoiTHuYfdicRQ5savGBhYom5foQnR1XUVn6NHeCipDcx4x2B9vWz1ynLMQ",
  "key13": "2JE1qmCDgjPaE5qcGKF33CtEYSG6BkQUfdBAjkFnj2WfvJieykVZEZ9zvpp5ZfubkdGLkk7PV2fJeFiRX4sQEjhG",
  "key14": "vgZetnTA1sYY1Y9GPH8nbzV3MGVJqxwKbJTQHMYST8VLLR5gq4sYKXs8dDXgx9yeQAsaB5a1P94h2QB5QzheX9D",
  "key15": "3NgoPUDW1G73F6RNZ2KhAgEy7Zwto4qPmvoFj8by7EyFyb32HeKWYKNkhuKEaGPC8ceQRudTRmDWzQ21VMEQnfCQ",
  "key16": "2ktPeV6Ko489uZGy3ZYWXbv2yBYik47nsFjusm5FALquxyScA6gZGoz82YUnkDS7ZrJgbhwN6QYm9aE9Tuedfwv8",
  "key17": "2zRJj1U5EndnoYenpCRPoaZgnMjaZQd4XVqFTRyMTo54WoZLge6iskWHRz9nWFWwU73NwxYXyosQGvs3KjCZbK3E",
  "key18": "4qCvj8daNykYvnvhPKy1A6Cyfi62L9BSdAcJxNsNJ3pACqYYKKgpbVVQQ8yewAKyEWTphoTm6qm7LmTqQzsPP4M1",
  "key19": "373wrZ43C9pfqwSG2GrTcvGXPJSqxXNUAsWA7nZ6RMdXphwDRkZHszPGHmvmuuLq6fGeYP6XaTBjcdxZUB6FVpNo",
  "key20": "2kaCavrzyeGWb4BLTW8CywMUTcE2xLvVJkWKFJNN6itKdgE6WQNV6Z6VFnGefRYQ2ZQhZUPp4nw18eAP15yz48zR",
  "key21": "FshVLsPKypCGDSGAgTMTxCZWrmdzgqbQ9vkVZWF4pozUGUrwabpRFV5Jw5YVZJ6YvdmPCFcjyXXBYcmkRmqgdhm",
  "key22": "3cVdeJr3o4uWJSwcw9KgNYX3qPSTtAETVLV1T9pnHZPXcbLKe1EcNgJ2YcY5wqM5m2auTtDU3xNHxREs5taSrRx",
  "key23": "3uF1SophgMqtK63VYRG9J4gHMUURnwwW1dowqFcTzD7kHDuwQ5L8jR8CDneG2EKSX6HvqR77mx91EWomgV28QEg",
  "key24": "5yQesYpq3UnM2JacdG6kZrP1vvxxc26b8St8v3RrHjrZAyLfeZLwNNZymvhnDf5nX6vUNix9cjV78qs1rqCc1H9C",
  "key25": "15EkVxUJMfkFsNMDJ32LtyKpUcBCDY1k2XMKJU2f9Z4Wukwjzi3gWkZYi7pnQDnF3NoCufLmcFVPypVmTffLmbi",
  "key26": "h37Gaf4VXfFWThZ7yCCH82iFe5qYLsRv91mev7qBo8vx4XwDc93wQcgQcSRFD4yqiq7YXR31ovBXbUfzekfHYhd",
  "key27": "5sFt4GPrnRmEDvcyr6UEVdwikv5sWVs66p6VxSz1oDPQwU73pozhHyi3FSwRSB3KyZXKi6J1wkXwYfYzhxt9RL5G",
  "key28": "qepiH6a3m8bhPDdyHyfeDhaZRxPvB7WYUeN3cVsnvJVp5tziXFYoqZJ2qivhEsMYX6iLmEcX3rdX92FmJnokTVx",
  "key29": "3rveoeTZCFDAovCPY61zKTmGDxf4cLwZ1UH87zhrjdbV3sEgAoraFbLZiiTm6bfUsQ2k9Sz7mTic8HPhN5CnawHp",
  "key30": "L51S2rDeomKQvKyDXtfT9vye4s88Sg8NARQGys1weXavyPugbSEiabDhtQoNwabmaxU53a5Jp7A8YBKwumzQHKZ",
  "key31": "3zgmWMzNv6nDoZVhfEma2uRkCGikzPdwrri9i49C3m6sJ6wgFLqYj43BgYk83k6KuZjksQwixn5uaVUEg6tZULXr",
  "key32": "3XZksfMBCF7QkNYJxE4fuQnvP6Aq3XbSP3nRypwkRFf4eMxonAfUGEbVgvTYkMnsJqDkfqFLFydnqjv4jcZMES97",
  "key33": "3YDbhmg4uCpLRk7x7eeJmvGBx2252twKUxf18ik4qxYxtNiCSBqJTZZpNYXk1YLRprwfCDwZDxowngU4Zt9LAxTq",
  "key34": "3aMBEXjxeWHxwdjzpoX6SGQNQh4nZqMHpVE2RDqQ8ZnLukRNFGPa6twjbazUvqt6jmQb5NQEz3DwE16YgBfRHPBm",
  "key35": "2P7gfemdrLqHDVDpy7ct4vDUbaFNHyrbQehrRGgDTPxuvcma4DMT3ygWEFQUtPyEzSkTXfv6yXVps4rU3NmCTfaK",
  "key36": "3oQpAnK359DuwntdmNY7JB4WW41knqBdDM3EYrJPJbvz6b1FuoyjNKGHWzCqQijzNS9C2n9HaJXdfwmh7956zNNj",
  "key37": "2kKLRStgMajAqCAVkKfJrFwfHzcFpotT8H39nTWLjR7sMF5AVyjYEC9ta2FvCEHUjF9BsjcfnfSA2jhncvozoytE",
  "key38": "4yfPL1kukGghsnJbKmeW9xwQgbDHmeoJHjGu9UVE1n1GBfoXZ6nFHRzmw1hbv3giwiRSqyjHXcJGF3TVPYRK2XJr",
  "key39": "5766J5QKBzq3UE7wGAEqfv8dkgBoUz3GEVMfFQBcVvCDsXKULUTB9ibyZhcGAuZQKciKfDFCXc9Hrs2R5byXfGp7"
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
