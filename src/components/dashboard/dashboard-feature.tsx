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
    "PYM5hpCzakvBNgcbDLYXeX6JvMLpRyApuUWwBqqK87gYwzFd2aD5nR6nNYAKdqjusihFnH4bDuLjuqQjBu8ByCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1X8qtxCqXQcMohyyh8mWCMPDpXvr6MhTt4qQt4121f8Ddthm8wpvcQupuu96aHrKj2cuiNnAQiGbawu7Ze8e77",
  "key1": "mDLs8NmrBhmECgG4dE9p1QacHycwE24qSrVewNLBSBbAKoHXdqVq7EFJNv976TnEnLEJTZaMXNCkXMsgS12aRAB",
  "key2": "61aEyY9UxT7Tnr82zL3yhj9tkJe7yp88iD3f5SBsSq6F15Lbs4GZtNErWrnm52xWV8FfGnjLsLmjk8h524Qdqas",
  "key3": "4LWjfe18BkPnJf9WMiJNWK42AU1Xh5gxKgPQacbG9tGvYhUQNuWG347am2nGZET8bByJcmEj5Vron3QtuVogk1X4",
  "key4": "5Rrw6htoFcKznfvYHwZExKxaFpfPMwfoJC4iS2aqFMaTbGiGKZYAqqcukqUZAxGtArguJU6htQXQ7hmDbeRphAAW",
  "key5": "2aad7YKNWwAh12H7H4WcM6qSBLfVqEC8hdA6w4Lphi9nZBvW7hMYDhh1xxVyjVVnvWCPRknPaHpf3xG9Js6GYpPi",
  "key6": "yc5W2eRXHucQpogFFUcWWRootPA4xbd7ZfnaZ4SPDDrxaeH3zVBdEiwcojh8GZ2K1k2KLvH7cQXmWWG9ZVPzbpr",
  "key7": "2hJ1BEPdNuJj5Uv7VJZLzzK7DgqUU4cGyKpXza2Cshm2ByCp7mk5U8HnvzcTBy1vJVuxj3R7GukePGnMSpfr3PXS",
  "key8": "55r6BXmejqUp6nVG6N4dbjySM9KjzwPYSS6fCtKPtBHV135ruTcKUwVGzTey41yrSEF1sGRpzHac4YSKYEZUkW13",
  "key9": "2Guhv2Xr5zKh8PT7M6aNrkYBAxiwbdppipWAENNHYqxf1SeUeYRKzNQxb3bHKY1tBAfxW65QNuevMqbCQe3bbMH9",
  "key10": "2HTzdZ1amZhmcbWKnoKeYsC3x61CPjehm8w41S9UhyvhpUD8W4cC5dtTinKYwEUfmEDd2FZj5DbyYaHGxqQ5sEf6",
  "key11": "Nk8KzArhprTMRmWxrpxwBhjBgWoLv9JHcqg9MYQqNucEevKCLvs6gSst3K7x7fkZ6MdwJUazzyqjnapSSGCmPEX",
  "key12": "4QDh5pm9MSNJBA82YDTnf8Proah1QFZ6L4v9LzR1BXcBRSwthQdcqxJYVCNX98jv1xaZGBvX2SCvGWav7v9HPoJG",
  "key13": "4XicirXwZgjwk3pdP1chYjSVpdDF1gnLqSshLUKa7RshAWf1WzSdmh7GzSx9rZztX2ViWVpBpCNmoFKSCxrH6hFf",
  "key14": "3VCpxEXmdZq1UnMhfPeG91841qwafDyHbQJSZqzSgLVkWh4Nf2b4t6xAQVCk3v4sWnoZSvMrLGW4HgDryBXJC4yo",
  "key15": "3WDXYjuX2BMd3BeLaZGoeqm4vZUrpCRDS4W8E7yV5FaUbkQZWNb3EARm434v7Ju6nntVHy3yaQxrCRwD55sXUbiQ",
  "key16": "4PmieMqmyCnLxXibwSwv24sttRdzpnP2xFaLyqqPVCj8NtDuuE74w8WEofeUp7d7FkVtgTHu22LSqCK3j26GT2V6",
  "key17": "3F3DCskxAiMSvPubXavw9xjntNA8osNskyWhc96Etq5fWR6LLNwf25mo2jdBt1e8XU4Hk3mRcSovBc9R6VqsdeYw",
  "key18": "opbuyYgUQGqb7Tr3JHThv1bJYE5JP6UPnaNGZDEE1Wg1FSn3eEhojAZoysNfrgcEWVSQZMmGakJAKSwEL17bJmc",
  "key19": "3qUKUxrs4YHDAGbWwHjJCdQzWB8XgyV6S4UXqfbvefxGLBGSfdbUTtGxLDP2yyh6ysUFF7BB4Vn6422uspT26gjL",
  "key20": "oYUMnY5RChA8HF3Tp1jS2b8QKTgN2chLq3q21ZT8BMeMWPqTKAjsLNozrJRCmJtTE6mVBQuHWz8G8k5AsVmjL9g",
  "key21": "2Cb4CuRKMhBVs5VvG8Yd71oLXaXqFCkuBuHbtuwGsPsTUENg79QR7pXdzHe8v4ay1EcEt5Mqg29QvKMoPbbDdJYE",
  "key22": "3dzjfbpXpYijd6irbvo5hLp4sGYkPinXJPQsqjzv9BuMDKnSxyttX9WwAAFa49H1dpj34MJCT1yQEhp4FwBNDLEu",
  "key23": "5MXMTBkYu7KT6sNsMYesMeu6tXnyP1NL9255qAdBBSKkMHpnZv7zwzaJgcnjMYdtRQFjBfvqRPLWoSEmV39xDT6o",
  "key24": "ioKnQ6KkoAdTGqYF2uSa3L4gWK5ckhiEK52R6KN63zKpLEskXHvLJSJBAZceeF8ah12NJLvKZyKzecfJW27ghfg",
  "key25": "E4Svc7i77wMbZuoaqy9uSpabh5BU1X4yqZaQhy2c3xAMgnaBsfLQw9tgnLx6raRPwaZjByJXhbZhFEUppHUc5Py",
  "key26": "4vxN37FLtCzvR7TK2MiM788B31LRNaxx8Dw9g7n7S9bbBwUTX6K5kDaGxXQA2zcecPBaCwfe9GG27iTNgfXnUE7Q",
  "key27": "5dQP9sU8FvNp3RspnNWVZMbfzrWYgqNJekvcWGZcgXvTz6cDpzVwWsFgtmJ1FN1x7wiwwZSx5no6rciMawAPWYma",
  "key28": "5sXWRkyUvPLn2knsgu8bakxg36mh9vCVoPeKRpwSEE8AwAN5wfhdnxxbNhwNpXo8tntNxtA11f8T7emPn15ukybh",
  "key29": "5vbnHEL5ybFw2eZ6zNmBBin5FtUnRZNTPezRSqW2RawjnujyNvyJ7HxV6aa97hVzzwKShufXMPvoVFGHqGgquXUW",
  "key30": "2VP6KimjXPGG68NKs6s5FFaR8eoW9CNCpvSdoZRiogPd65WfV9rNKzpwgzmNHqMWYVmDxts6mTaFpeSofMpatoFM",
  "key31": "3yi1b9aU8jk9US6ge2rZRUWgEG8h5Rz5urW27RNjYjmGZftcviviKGQEYoH4ZCQgkPJvYtfWMEwoBRyNBvTKtnp7",
  "key32": "41Cv3pBkbNgrSfQcymDdAA1xrzKKcrGRWKmr6agC8dTgYUQCMjSDsAKNnHEdx2HApoPLZy3BZdvLm6qDDFLhL6Ky",
  "key33": "2WsAGVNK8DQYEd4v7E4zo4fzK22ua1pDQqRHVuiSBynRYoyKPNpWVZhnfjofAeRC648Ext3rmVdtALXVu1qQ2XFX",
  "key34": "3PqMiwqrB5fYL26h13EqBaX89CC7auj4tJodwxDN9Ngd8kph4Qhj5sHDZH6aL9WzxbR8NN5oyuc7tJceT5sRNNvx",
  "key35": "VcCEdH9xbm63S3URSqU3B4miiaUNFcUFx4wRWTAi4w9fXXCxg7ws8k2BPepk3AFWHD9RjSnqxh2oJ6wYjm1TDHn",
  "key36": "28YcHqBWMJ35ukmPJ6seSTzswh2YmmXb4XJZA6ma4ywpETDS998C7JW8KA3ngmTj58ETCdfXqP9uQiU9MJAK8q5t",
  "key37": "S96nzVPuWvuZL8Le7ieNA5CZtY8WKpHTxmXmiEuY7uX6iAchi44AbuyB9BxYPUhjGfExtn2pyNtMm6bMPGqcb51",
  "key38": "3TxnxogHEg6ZmYNf6qAYTrRSo4YnAFg6Bt9eFx3pCvCvLLxm4DcB4x7o884mX9uHWu3YA2Q3isyx9eEeqK2KzYe1",
  "key39": "5dx5HrFJwvijCpFDiwTAxqg9odqrAkjkE5Fu6R2Lo3rxfK79H7ffk3iYxxwPZQQHY287UQB8APnt6CkvUqPm2qzv",
  "key40": "4q9GhBM6BoSwhrh7oyMDmAmrZmcZjodRdmdFKW7BU8RdpAiXbq4AHK1UhSr1MdL5kj1iHx7uRarMJx8h5KAbbEeC",
  "key41": "5e3tkVKdSJyKWhvyFaRGxupqqaGt6t6Q2TaGv4EAkmMU21iAbZwz2QCJJfz1zgc7c3iahBHxEA1y5bBs6LjaSap8",
  "key42": "5skYsUCm6ReGVui9Uo16ro56PFDupLfAzuT62BwCPqDu4A8PPKbWhEz95apg5xtMDbudvLTp8a78CGZuwm8h9AkR",
  "key43": "4mhy6ruu2qvor1G4w1eHXZobgg75Ye4z553wQh5ztBjssF59JXzajNeVo66GT1JnDHy25fiUUjm3x5eRobEceDoF",
  "key44": "4ELWfnLVjaw8tRB92PmTsC8YBitDazqnT9Djb5fpmzyiK4ryg6uvGApE1AbsTYbjnD7f1eAycsQRrTzV3hLfX74G",
  "key45": "2jcHfP7Xm57iNPSJ8CzZqx1TfxTRDaVX3fi3wqhsZ6uym4uf3GjEu7EMUdHJj7SL7aZUEVAM6Ch6KMf68bxsco3i",
  "key46": "5FrsRp3AFYdZbkdD8L8F9xVMY1TGWy3AjCqqFGrXsDH5VtDEfQYm7PerzQQLsKR1XL4bQqb8kpbhCpsbMCjCmVPP",
  "key47": "2dez3mHbbMtj8YvNV7Rvf7PZq5h4Ga4PoYEYzxM9nqaQ5J4tMiWiiJcVfoV945g2uHStBcf9MEHbD753AV2M9JSz",
  "key48": "2aggGDwHV7zT21J6ikum3W1xyDmX9gCGZwnwy2S6KofpDQPLphPGMaPuWyVkwgGyGJ2kjsmiQNiyxhNh3pMbeNMD",
  "key49": "34HV54GdDrHksRwhgqeme19VjJYtLrnHzmG9bpsheiSxwC4DcN3kvixwNmA5GQwYvQpWMfy65NEb9SRSsRTBMQYz"
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
