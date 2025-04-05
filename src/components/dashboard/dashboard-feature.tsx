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
    "2Fy1gtm874iNpgtLG7w6CpiUsRbz9objLvSEohzq9aoRfAogdk1GFH4dBHfC11doyfVFmKF6xTKCJGHgbTXsd4ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDfmJ4hhxdoHm32sRNCTV7TYhwVaT1cckmyN9ahmpnEcrEiMJuvmRdoPkAxt9WMiixRhw7HN2N9gdxDaZsx2ooL",
  "key1": "5GmvAhECg22uiWCPdcJkVMjTqDUdWeg1FqjATzSteGQQbMdangTReZ7jMaDjzvcQHyk1LLRdPsMVoTGopa8KNpE8",
  "key2": "4QJFF3XS3SXv5KKdJ1dBXyPYp5rvR5KfEsi7wF3sm7iMvVuGCSXK1DnHoss5N976sujV14HyxyACBEmMBxL4oMpA",
  "key3": "4usfLTta9g6WSgL571gqhyWFCj3rDDHTt5YwCS4ak6Pa9jUe1Drdvv3vQZN8Zi7mdX4WXExfmaB1fbsZJWc4pVdG",
  "key4": "gAisovgnLL2ksr7gZBCNtwXRB1Rckj4w7BymwLSKMjECXYGFnbbyDAD9Zf83vK7bZnwicxdUY2goWRYk8BNymra",
  "key5": "4D3tTF7P5uSGM5Mp7SqveTfD27J5pdq3TpvmxNqu2MmK5bMyM8vHKd7qYRYrWkUBGpJJHLPpzC2x24vsZEDbga4b",
  "key6": "2qdqNc4j39sThxoYmM6ELu8Kn4fxAsiuwN3nzZ4TPUGhXdc7k9b1xBVFud2hTU6JqZum42LRXkU7ADeEEqMkfZZo",
  "key7": "5DTrWws6HD7aykun7Zq1SRwS55Zb6rS6X6wqHVsveDHTdFpw1MbakzLoHaD3WAt6D27fTaeFtZJ3jiiW1JB2fRex",
  "key8": "2YvRLqg4HWXufnsTkbKLRiuSpmi4r8KRi6PyLVywU1YEwiJ316d2XM98TGKvKFeUkWxA5V3ptvYMP4YBzhmmh6Z",
  "key9": "3ir1HzY5TQgkdCb9pEeswRFV75xPTRAYNyHSNWP3C3zz6bAv1ubqPVt8PhA7Zf8WhBghXw1Dc9Y5MuJzVDAY6yEP",
  "key10": "3ctNdLzU6iwTF6jRFMTTHqwxCgsNifQ8yFGwRuvLhDK1ZVsssQ4MFzyVhxAX5Jk56EJe1usqmwfSws8hEeUDfm4R",
  "key11": "4WznmEJ97p7DVqJRbT6rE1RmgZU9jy2MjDeSYMHBobwCGc3sPJ3EnDDNTUqnqLJWToGoXUvWF2neEcEiStaKAGZ6",
  "key12": "4mtJELS23bRP85vpYr9LXkVRAq2cKwMBu6UTyuaFWCcnU3x2bdBcYRoHPu2whFeBWm54XtmbM2oSaH15MNGwtrxp",
  "key13": "2bRfzWKfA8hhpQURYnaRmZZuGN6iPPjyzYPX3EG2GgcA1XwHwLAay5uaoXamgDavhvzGaJGuzsm6XKmkFBAMBaDB",
  "key14": "2KPoo3apdHURxaF7YMBqcL4pX5AdHCPZnnSdfiYuRZz1CApjB6qwfTYz51TSKCHRyUiYcSEf9f6woqjyJAxFWBxB",
  "key15": "2EVa7yVzfo3sWwtzCQ4SkyMPepemrWFzSB8DTauN6eYJwYL8UbhWBKqmYueKzBQE4Z9WJUUrKHEATgQzWMKzFEy8",
  "key16": "52Bne59KxhrtZtmm9r4kc38VcTixpYxijaiUSQ3ZKnstWXYNb7rYP9bH1EeWS47cmg6P1AzPAs13BEzjaKodK7mR",
  "key17": "4QgJL6yT3hdxtPFkdCZy1rcaw31a38CFvZVzwKpGE1SG1VWnEgys9Jevdi4vxkp4m8eNpvDwXBNXZSsphzy615co",
  "key18": "56gNkZzffB3ZewihpGrfXJyvxh61rnBnguRSu62WGb5U484qE3BXaML8iH6GKf4ZCE9ZPf2ix8bS9MkGbtJwKy3W",
  "key19": "4KdqMJsWYfrvZr9KmhJQfYww72gWkMVhiLohTBEtCSQeeZ2y5DEYvt8ZB5wEbRw57XBDFUydEjtCMttpjy6XYtjr",
  "key20": "3A1278xEfob5K7fjMXB126394BJbKboZihHRRjrbd94a469W6nzGWQgt59GzMJBomfXn6nR1aLLBVCfFgLa9yuc7",
  "key21": "3cp7DuruZZoK3h5fQEQUuKd4R48cdofn15TsHxniGaBzqamF97zuupWQQQ4PLBfhgygpvDeFgnKtdZHMAPCgFMje",
  "key22": "3cuQ28ocrRvpuuaDXMuuZ3Gngp9a17Xxn2CygAmasnucoeXP2U1vSH3d9X2woEvDsnVtNMbHm1B4XUYb99h64zzi",
  "key23": "66knBNkacFRCbexrCqfvKj9RBuw2u1dDyFheTVMkmnrwXdT7ZhHhVAHb2rNPw6dq6j5ka11mxXDdsN3LzVjRa26s",
  "key24": "5Qypp8aHf4e721mPjJw1ariJHWWLyRKUZgmWQdtaLaBWZnzUCKifgDLQba6xBt4dNX3qYcDMvsjnfeLUxrYw4fcT",
  "key25": "3uaqvWN8b9q7Lw9uXXLTMrTYU4dnAxb3FEiGnKgJP69srxhZFVEsN2aK8RWWiXtu9abqr8dtRqABZzUr9RujUSeV",
  "key26": "r7ayGjWuhTi7HHukuBghqhdwh4DKsJnpPYCGSyBymK6Tih6oDromoyXugo2xaquLdNKYFN7kXKbf2aydrgzW2m4",
  "key27": "5ZfSdwF4jdherSRoyskMDUHcrsuz7CdxyRA28tqqd1GyXyq8QgM3C28QMTigKJpWQFDF3s4PZEGhhN9JkrZDUi9p",
  "key28": "5vSpcE4tDBQ5Vs1FwrsoAANTeLDb1nHkBUp7wijgSpmEbqdJXrLg5jVC7t9tibBMXmEhAN7ALp9zD8EyHC1CQraF",
  "key29": "2rzELqyHgBfQkJQtDhPnYj6daiy1jUvRSGL1TQft5zNzBhHaYTdPQ9Lqd9bcmU8vo6nbR1P4tfBndct6sRbrpcdw",
  "key30": "2Xbmdw5k5zq722tsHdUBTjZhicNeL6MBx4iN7uN1tM2rerqALsm3SkVC6xyDn1AfJngbTH2q285ZdgjpH3ZTx9cb",
  "key31": "3WqF4u9U6kTpoy51ZptZC9z4HEpP84mtKT5qFFa52rNxMad5yWhbG8TFzfZUmPPkpEPnpFzFVNChKJTegmPdTGBv",
  "key32": "4CJhyKwx5ywUMwsMKaT6RpppHKiRSK7oXFnBLGcDGF4ykNMYpQvc1GEptyWwReWZ2m9Ug6x6fbtek9KCkK74fEdS",
  "key33": "3reLnoH9Ter9U7tnSkHMWheH3F2VZ6WcX2srtLSa2di7Q15Ny6sYE6EoS33Y4h5HGgwSmDf7WrKj6gAbxmH6wppm",
  "key34": "4BsKdfaSxub2dxTLjZjumwq7q6WrFgpscUvMxuA5iatsHz6my1FQffRPXWXiCxCF61eUSyDp8xG7exYNgtapA8qP",
  "key35": "67o9GiSbuPENGiTRB6LonZMX3GD2rZgT4cMJkGnrQVDer8QvR6zK6jJ7Kbpazk24gipuiiwbYZGigcLVbjxUw5xG",
  "key36": "2JFkm96XzSsuocrCuKNfaNRNeH1HqfLq9gCgyWxnXFk2Jg1MK5AnTmY7WukiAagpCx8G3gta1Tcet1cB1RM6vHm6",
  "key37": "4z1ZjKSV5GTUWzxAZreehZsj1pS7yU4z5xiYroQcruxZzXE9uVNFYo8RqZM5mgYNdRHfcEY1dMNu35dR6g83gwMR",
  "key38": "4bv5a6MQJ8y96uEbNvH3YjqDeB8f1J3SzDR11uRtbFQnLqZn2m9gbMHdsPGzE8S1646ELDDPapQ5VTBeGED1XNiy",
  "key39": "3VHHmRedgBVot3YredDW9yXXa29AwYPhyECBcTTkHqnSqbz49k83rhs2gXD3RZdAoqADjDgS8QLAoJi9fSHRENEv",
  "key40": "27ggWsxZGVeZS8LirER37qmqKkFL7YNi2yXjP1Cfw8cFbSBRFGcXaLpNjc7TH87pY85umotiySEFEVby2FRs7G9a",
  "key41": "QiZusCfLGm61vEZqp6RD9rq9H7gJjiKLgd98uqGhedc4f5EpiCRxpZQpuS1qxhBZvdMJ41jWBLzTAGHnM3qkv7V",
  "key42": "2aTocHXJGd48TEegQp1fJt1567UnjgBHHENMFHWG8HaC2YpyvTJ5xnVMAVHXr9bukYSSXNAXB9aezzFeZ8bkPeke",
  "key43": "3Uaux9MhRH24kCjqaCT8mpvnuJibdPUpchtq1a6AixfoziB2sd9pn2aVxLg8mAfp4z7iWhCyfsQNmtg972ZsJpBc",
  "key44": "647HyBEtAiDLj43rDdHU5QXMLLctygBLWu5awy4eBxQD3U6KHXoTAa4jZ73p42JF5QLfXYCHRZ4TMGXVPbX73Cww",
  "key45": "2V7HEeCQSLxRMwchwyicsdjFZYcYMvBFobg4xBLzYhU2RnLYBQJAa8M7eJYuJmtcCiFcyq84dvXVZox6rybFN2FT",
  "key46": "3x4KrteEc5izpqbCoyc7a6AJPXAXJ5vmAEQcMjPptKksiCfXsskaPfGUNYHBv7zNsd1234hT9pZEDaKxbKnuLxqS",
  "key47": "4z23MWzh2HEY6u9N7HXGRHDKC4XEUsdiKPqvUXj6AzmNWLmK2vYQbQApo83vkgyAXJUnJ2Udq34FkDykkR6dnHfM",
  "key48": "5zb3fYEr8JUidUNaEmZGVbLHqYphxn1mKrwc9cGSvex6F7e4fBGcGh1pSxLQnVLiNeJWuHD9X3oeytPj2TMoVmm7"
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
