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
    "5w1L363GnPNRMXnHAzyBNtNyxHmMsZqT8AybBwk56eM9Vno486oebUPevoybkSw2SFRUtYnHTfqB3X7puKYoMdVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3euGuc5VmWqjsDDbrWP8K2UAw4VrnfQMefGbgf2rFBFNTPj7YSecWvAeCXbCXqptskzfW69gZAbRnaGVbZbJXW",
  "key1": "NwYVAkt8stcQWLhUFZEps76bhSFJrZ5MGWRXiBFneBLarJE6adE9En4xDL2h2QvfpRvoug4iVeyciqxC24mkwPT",
  "key2": "kiEpMXw5477PaenF3sSWqbuvz1HsVxft9wUDHRy3FJhCB2yTQVMS5Mn4p5ScpfCrfzekZrhvYikkqiMmBu58BCF",
  "key3": "64RJNJPHkPNk42CXCyjqUsPR1pgvFqQv2KkhUdKSZysZcKLjVz1rzBxaY3ZqskvnKHtC4u7xz1jJ5cQUQX51sg4a",
  "key4": "2vbr8pxH73YpQrfkZJoHhGmVPF3UzyQCLJgxT1Vhu3u8s4uci63yLAhbSUsz3T89MmNP5CJUE3ojwhj4jDw8LYYi",
  "key5": "3c292fntQfmq7UAxrzva7fD9wWw8iFbeS5dLegN9VZXGx934DCcUUr2DJyUXUtGi7QxE1uhkd3bV2WMPtxpx9SPe",
  "key6": "fBHAJVZrQaTHbSs7x9tLg2rhuifxMZWGb5p1SpZJ7BsL1vKVpLyzzvue9cvAKEPLAzwrHAQRy2TUgx9BpsXBJYn",
  "key7": "3eQy1gMLjN4hiExFVtut98pUTyVyhED9M8fmxJTG5EMPjCQo4mFkjiMKfFaWzTcCb14425Gy3sS56aMkrbJTTHnj",
  "key8": "3se3GNmgSDNF62WrzLtQmSor4bVioyMHMdnUea46KFMGoHSLTcSUCuntiMz2ce3QbcpQKWDZbyWukH2icjqkCcZr",
  "key9": "4PBVtZe7mUFLCmt4uDB2iLGnpZ5C3gqudUMEY3svHSpYrgqi9RS3wWwy212zsFcT7shYFmWAqbRZp1XabvCGwDaA",
  "key10": "4ftn5iAfkqFUwimoYyPhGNmQy9V7vRo2Ub4WAw8fHv1XibTwMgrEZ4GoVTo2AN782K5TPYJZZ4pg99hcP7aGeDSB",
  "key11": "4ME81km3sJm3Ydd6zFU6y8NhoCjfmTuFcx7kNGShqWuf1S6wQg8hyJ7LnkXz18VDNPkHQ63LyZwS29TTEfoc6YzZ",
  "key12": "48ZgTcyNgCdamjvyrDZ2ycoPQsS2ZAeaXZAMA8cqpwpfuVgta9e8q6xRDNukJ6BfbsdhCnu3sJbFKauBzZLP8JDE",
  "key13": "2tmkk8eHV2m6MYSEpphkg9KrkZR1iaYq7KwL923mvFd17bcSf2Mty9TdNuR8W1czThAqZMLLXoUNgNp1BvMr8YWw",
  "key14": "3QBoowqf1BZrvwYxXv6t4Qu6NA16AksXmmuV3LBPQ9kVufF6Q5i1bDdbQMiD9Q4eNVN6sn7zTqGB2TJYBckt5q4t",
  "key15": "36xaEZL35AHK6uQDgkjGTYY9SwLsAE57UmepUWdhXvJRBxQuDJPLXEDi51hTcuyFcgFux72rnd9GvyxwhtrAp4b6",
  "key16": "3tabpn8cpXYY1M78X5EaD7hh2xc86LR5CvwK7R8yyxFdov9CJ4pSqkpj8tdGMHR3nkcJhFTLGiDc8xi7eTxXKYmy",
  "key17": "3agaJwJUkcR6rt3QnN23E5tAaAoprJHAYU3k8z8AKemVyCfePy4kgxmv2uQsNCPDoBsfvrR6gp9izgYCfjkMXMuS",
  "key18": "3cKhyu652qTvha6vSr9p9ppDp6sYKuupCNqg42enxQkEXM2v4tZFtL56Amf63z3wUru7o5Ckx6ED78UiVUKvEmrK",
  "key19": "2RRmQKtNhhFh7K9yn734v4znc9erE1VZeECWsu76TLhRqCiY5YjTcYMwYW2BEMvxeZ6LJ1jwZyJRuJwrszpWyejh",
  "key20": "3jh5N9GnD5zgj8cYNbUvAGdgzTDSEqJJpe5MwhGKu2GjGCEK5Hx38oCLpMVC23WWgQt14AjPpPXrY8m5DBg4m7RY",
  "key21": "3m3KWY9T2bXTMqJcdM44T9r414bWjbZJn1JknxZo17B8Wm12Wun9kFA7N9dCKKMLVM2k1obN63YFcXBh9Sa6LQwr",
  "key22": "5ahJ8nMnmAtpqQSMg4o1cE2DvvhvoQPRZtwQekqXWeogDQXN4GE7eZcDKEC3fs4pQ4tcC7RTqG6UV8DgmvZfHK8M",
  "key23": "3BEfir7XBvZjG3fFW3VsDGi1ozbphRaQQTLxNyZq5hYguoTAWyMPfg2ZJH6zEa8sfB2Lk5zDu7rSvYW2txHLeruA",
  "key24": "53JHBoQGb2ATtiH8fwwPmwZrSvbP6JLwRCJoS3NEtu4hfu68x8Q5cprkgMToMAJZZUpRLL6X4Gi3CmN6Wrw92X23",
  "key25": "3S1EJ428Sz9rz16vdgGMQHgRWrvWgjZMa4AZsp9vF7FuCUHqf5JjnaRWmXKKDhAQBJgHkqtgE3yM1db8tNsFM3d5",
  "key26": "3VLUzDPSt56Qm5ZLxaXVDxSTCF5S8m8PAHiMw9aB2EGjsec6jncMLSJBCKgm7FuBYDCmHFm8q1bfEk7bZmdUQvHQ",
  "key27": "3HokiW1EdKdi7U15cJSiCLLtLvf9X3c4UkmBkCZ69pwkgiTNK6UeAGL26H8eKiKnJHi3fH7xVZR3Lrbd9knVu9gK",
  "key28": "5bzSVq7CcTqY7iuqHoRUjW45xNRaZUL7UTwvcRDBWRmZ5DPpPVuznJDsE4P2xLWWzN4AsW8yhKRKDhFkTFY9MZR4",
  "key29": "6zx9tuBYVeenn2v8cA7ZfZF2e9TXWirf5mtZ6suryRUGdq4cwrCzZB88hoCuTaNSWFaHRuqpyMXnCxnhvsp7r3J",
  "key30": "45tEDzKDX9qzZ1fSuTs7jVQbFsM7qufMdA8sTxdfseWQJSLx22t2XXfFPCvKjpWvMKt8Zf5F88WaREDCKC2gXGcA",
  "key31": "43sSDt4DA9bZEh4PBcNgKGiJoLRncoE5tY635YxtNB3Ds3SnmTJb4G6iUwpBrqwaQ4crFoXwrvVTUy3uRh9s7euE",
  "key32": "2QDEEKiyY61xtDozs9Pk7sZ9abqZEMDkNNwpY6L5ST6mzmcbt8MrnitzdCfyxuaXKngthTkYAodmLoeDo95WQUWV",
  "key33": "5HUizqp3n2TAjKvDgTRfYADfLoQUtbEMDCreK9wRkT9PtMmKz9B8Ns8NSpraz2R4x6ZBoewcTLDTztcpZt4ZZmsd",
  "key34": "2iAVPmu2ecaFmkNsULGCHHmaBNYFvmmEzBvjPe8N43Kq6DsXBHE5P1nCcmMsYhENFAs1HYSStCURTPMnEweF2wAS",
  "key35": "4XkSiPMqzxxnxfv7ZRYWaQ2tae7LzumYmyJkLkcjQUL6zoFRgEth1m4Tb1uxQ7PLL5m3j4s6z8UgHHvN2hmrntYx",
  "key36": "3C99DZdJAi1GuCgqAtxzPgqPHFwtdhCzRky6DFw8PaGT6C9phWzNUpfEzu2NCH89CGKAwDFdvUhBFYUUUS45mX7C",
  "key37": "5QnQrmrZMJGUmqWhyRsbuJ1mvs6z1wv7wSfzTggYMC6t88jmMtre75Jpvz8Pxhydk8y6kJ2q3pbNWLopWSQuEJJm",
  "key38": "3KTc5QFi2W5EbegwWK1a4ZYxukH6Qj1gVqC4TCZFJTcjuHRvCg64Kkc129ThCuca1swg77GPdwVzW6KrinKWKzag",
  "key39": "3kUKCE79QRg9fXtrEbMczg9aKDkJU5Eu1SviHHzJsvxKbsXyw2bNf9g1d9Ria9ZiwXcdhvQc1G5SGWeTCRpPJ6BA",
  "key40": "4RA6cjxtf2HUqqjVFfPgdb22FZPKpNQyyyZDN3e9vRuNScKjNxx8iUzjnkhZvh2sKf2foWxHgQAkbzzFDgvrwhSD",
  "key41": "5zFqDJKzEe4Nsb7BzEaVt5kFJaSQx6XzZPgtE6fBFLP4yNt5nN6rGiKNkjF2LZjd86fCUDenKXbdnKxbxvSpoMJi",
  "key42": "532VrHgTCRx2Ty7tenRFS7pb3FbD38aZ76LopZB9Wmzx9kGd6c6XMudodUT8jCG49e5ZXxq5r96awW7GKxvy4ik4",
  "key43": "2R6G5mJHYR7JeAaubCXEn7L4tsmM23MkMYokKC3MjXWUfyQdetZJkhEXmHvCv5HNSHzRbURjauZPqbxUbfUTRrVu",
  "key44": "5FetKaTfzHw6xwQqNWKNJQhraBARqU9miTXG2qeDyw6t7mjevqaXk6daw6B5Ud1u2xVdVWWQ3nEwQH6r21Lc3ypM",
  "key45": "2sbpBbKQGouxW6k4RrhKceWK86zMAjDxh2SMbSTN1caER9pEoHjuPxjn8W9A8sp6KfhkpBXoJCWVVJtefjX461N8",
  "key46": "2gQMiUcrB76aYeEeydfycEeSa4h3xXg7yXrJjAvid46mh6NuQ7F42A4PifS6aKYmircARhe7rRdfpmLZqj3ufWvd"
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
