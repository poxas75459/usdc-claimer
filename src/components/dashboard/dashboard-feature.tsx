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
    "5wABJiRK6R8LMYFuwiqtDyQ7X3zsCmAHJwQ6ArzWm6EWriXGCrKYtnZx8APJeZY6NcbnGtC2jRitGA5xiRp48g1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hwEwx54m72P8CCAVCNLcfmaw2KYquqWoXA6Sjiw5Q99TkvdwpcatHTB76iZ8yu8s4S9xcKxyz5wrxYciywm7ka",
  "key1": "EJNXayErbGwSmQsRvG8Xxq2z5ENUF2QEkonTxJbtZkvEKnZXSdYTcF2PNUHKPwFt5ZG1UsjsVVY2Chic56KPnpz",
  "key2": "5CexJAaZjsusmpDEcF59nHUDXm3x2bmq29ERhP93PPGVixai7caxbKFLNskDbqXRjueKJ416fHuvXCRE4wBg9Fb6",
  "key3": "66SgC8H5TnGjqKZonT4cCU9Vj4t4NASH3S6iXTm4FdR3yzkc3CofQf7v1MDQZ45DqkGhPN2sC7KXZCEf67m9F9Q",
  "key4": "3MeMdgoaiu6XucyC6Ws9xF57H22rnp5LnNSMBSXPKjtj5nhjwT1E85zMzLcJ1HHkokig3aBtkBo6PMMUYuBxjDwb",
  "key5": "27KgDrsRd5ZjTgJcEbzTxeD4xaptD3un4h117c7UknP5quhLdLuZtKXi1hz6pPJWJKJgQcr6A2FJX3siU4et9BYn",
  "key6": "4a5temULaLHpyWk6AAmVFZQHo576qkQ8CybDKdeaB7TUdF6VCtVVm8FntiE21e2UNnhiAA1iUCS5sZvmwaRh8e9F",
  "key7": "2KVTuCdJQGmehrJxiS53iAmX9AwWtfjDo7QH9twPnFBDmayuYaUR8EeNU3SubZEBy8SidG1ZzcNtt9AAdGtjfEgU",
  "key8": "3a1UdpCVg7hw1i1g6jhAdhqMRtqf3nBbkusHWSzvbrj4yz6Pq7Y2SWQfyFC9rfNc8gutF17UTb32pEbJYTJyQTEX",
  "key9": "3bsat7JnFzj5Art5jaYrUwGQRWs7LZeusAuS7domdYqsPBwPe3vPVBH34hiXdibu1VuCQ9b1Bj2g9DbaeRUNPnjX",
  "key10": "4Pcs6pis2eHvMPaubpFgEkr3RpMuCsJZktJKZcW43nYJvKiWVT6XGwMzoeFRgPei4Fshdq9QyGPcCbdLdLez3sgi",
  "key11": "5dKz4Fjkzuv8rdaSumacpfCN13WG1hDSBW6zHcwzFcPM9wmM5FDpgSnHSCe32b1djN6cibeGZ86YZnjfoZVGkPg1",
  "key12": "3pW2eLBuB12uuT14H2AdKHzojtgnrKJt46jz8kS3bP71D6E6iLv9RRAvgbKd74QsJ6YD1UhX4f7CMo1a8VsMhS7",
  "key13": "m76So5EdxzEJ9JpNHTix3ruEyfU8EJG5P59VZ3MY1p4xK55vrLvYa2WGF8WbocfHdDQDaS9G5A2jajW24Xh7h4Y",
  "key14": "2iPABG2mrYyq95FpqNEfNjT3oezqot4EZVupfMJEvhDc9TeVpT1F6vjD3XFvkpiyEFabeRycXrMv91h1FoRUimkT",
  "key15": "2qP6PsJLEk9KLRaQdU89mGQetukDf6JtLkr71h95t5AWMKvLNyC7ffpNPcvAhNFHJqim4WNLUqgPQNYydPx7Ub6y",
  "key16": "313Nryc2zuEprbSB144vRigd5s5Zxx9b4qHwMEcqckYRN5DJiTEyjrNWD7FmqTycp9jtmwzDZfPLktUTzF9rsFsN",
  "key17": "51Wx9pkURJq7xq374HS3iKiGNxGFQWdHZVtWFj8XYmC7Zpe2mDuw6uhy9mtHeggxf85peV5H55nWBZHxQnfVR77R",
  "key18": "5wzj6L2F7yNRQ9QHqkBcEtaNgqLDUtGc3TVFMALHgo5m1ZdURuM4Bii5n1FMUwJU7iA9q8FPBEPzSgxef52p6z7j",
  "key19": "3PwQPfzBVRWEGUs74vbyJy8itJyYLSP7rhQu55r7eopbb4iNQVqzJufnWqfpQBFY6No1niPRmVQyXUt5vKDX5KoY",
  "key20": "5dN1oYGkJUtmyRncLxeJ5AWx2vWUMGGBjkPd6jXBoQtqLnDxR33w6ttG9B7Qk3744FaHQnCJLXcHyzFvUt9vgEZ5",
  "key21": "4aioL7sTgy5yWu4dw6q2f8jbHn9BEiw8gCsHWPnYHiLjpHcN98HtwrAjHRkbsbxwUdJDBppmEtmaianUAHZZw1Fz",
  "key22": "47anULv8t8qktJSJo8HeYzYMdQpf45tnxdjaJFeMJmjefgshtBEZ93rJFny6wKoJ73bh1nipRfDjfj3tPjZ2NMRJ",
  "key23": "29HFuxL3DT5Tu1pW3V4fj3xw3TKxJ2zDjhG8Ht3RHwTvq31MbjQcQxUe6uDErMxPaZCW16aNtgc5ny16qzjKZh2K",
  "key24": "64URfybyZRvtfdFMUDWcufrBCe1b32d4BmFqwePKvUguhfY8V4YZR4NjJXmSWESvCbfDQbFbsdXhDDq7yBtM8Xxc",
  "key25": "5TPhqfU2Z8d1HrQZLAYsJ7r6qnmAahu1VZcHLt4VKgbu72o86wyKWH5rzoPX5w9HsJUjHJW5iHhzKcgaBBVCpu4k",
  "key26": "5hfWpyuPfEyd5PNfvLZBbJm9bNtwxZ8JBMRFNBuZGtEYfuuDfg88buA2in7Qfma273YiFzy3kibQobPGnfSRzKqW",
  "key27": "3yLiE5yG5e6MADPaFYj6odtutcFpPtRwJqg9S2cbcHVBnvqJEXDLSJLgEimQ4S3y523TC5op4FPKzEsfeJaMvvfL",
  "key28": "2ymz8wC2aUqrbZGsF1A3xS6DJME13U9PJBDrX3mgc7SeQy6DrNSJnZDk8mForwnJCcomXE9uY3XS1wAL28XYyEGj",
  "key29": "4Wid8PaVqTayVsrFG28gv6eTejtnAr7CNvZ963JU3FeQdMwg4yQCy9caYjYjsAyJx1ed2Sd2MD3uetxt1Fpy3qMe",
  "key30": "3zn7vpFtYyrnYZZxwrFrCCcDiUMytj5fuMTdNUmdMxugg2ZFGNqn7LLjgoDo49Rw3UGvgxtjR6DHp25E5WPa94Uc",
  "key31": "23sgv6Qym2JjbAW4qYKWnQ8ZZKadeek7WVniL3Q4BhjGWcxpYA5H16a9fZfumRZMiUBX7QhdB2ZMeiWYTd4w75VH",
  "key32": "2mTvML9ivDR5vH4aGr2vHYY8dQtJXDpWqZy44VS5hzUXd6PH5zqBqSFQKDDPejrUHm1F9R9xCQM4HkdxTWLEHDrx",
  "key33": "5zxyQDkCKB1njCujZXutuW2Z3rUGc5nVfsD2RvK42UbAmgv3LsfqKoSa79SrB84vW5z6U9XKQpnfUPtq8YD53NBA",
  "key34": "3tgSmRwNpi1b2RNA4wLD8uK7at78h616n8GVoUVCoXDhi4WvESSL8Z3T3NaVQpo9DzXU8rR5HsEpAKKCqqFNmHEf",
  "key35": "3SYfFrSzi6BzH2PtodWBj7kcFCeELonJLRhWWgJZ5oiZK9Gmr5qYbhzhXpVZCdiYRujzJuPsUCobBxrNfnuY4xWn",
  "key36": "4er6ZXb69Ey65UtK3XAHXJ9eeq73Ecs88qV5Lc7B6bgR3WeDp2aVhHasV6t1wfHcpVYBg47xiL5mkQHSEq73djMA",
  "key37": "4KRDcJQwyjAkvALcukVrRedpD9jVHF877gH8Vbc17V2qZGZZ3N5oGV2Jz4cCDFgkxwJccVmfZVLun8YHXnZiPFic",
  "key38": "2JMVKccbmWRcm2yS9AHZxWRpKctDALadG3kUzac29ohJbDVfUzt6bFkL1UVHLXo5NSV5caiL7KsGyr2J9MPWSqqo",
  "key39": "3cVKgMTWKp4Ng1QoFEXBvvZ3s2TWr6F8TiaNYF43sNceBwbpZXh7Vh6EApkQmW1e9xbnwxTPS2EDGNwc9s6AxEFQ",
  "key40": "4oRc9ULDKUJgKpTuHuqqyC21fnyvQbqYhMkrH2EAFShTiuzXoeAgenfGBt39HLnjBQN1pLguftEJHpzwZvrR6aQe",
  "key41": "3J6JPpvzUSrUKgtV5qW6WnkbiDBU3cYEfciWXopJd5BHWBYhcPoQ4Kubn3EszAg8mXPML86U7yxZSmKf2tqNmaL6",
  "key42": "4AN1DaqjcCtucUuCZyfRrE5Q1uUEaHsTzJgAyqJquSkMhJFwyhoAdbfaYHhjmfweC5RhtQuGknw7EtCGCgbTwx3x",
  "key43": "2mp2ihAGdn5FaXEnsBWCx7X9jPss9rUKYKtjySTCCA3AZJoTNzqBtFEmdQus8Fe2ps1JXDqX7U9zKV1AxMK35fhC",
  "key44": "JLRSLVnnTXFm5aLwjqGRQ3zr6Kf1dNgSn3fTYHVReWurEhTxZQ37yVUMx9fX8CoBXicCtxutTCnhcEm6VabzR12",
  "key45": "5uAXjveUZfYRQMuRXaB7Z7jbyJUGmCZHJGJFntzntbprX7dL4iUc41J8u6Y22b7wLr3Ue2D6JS4uCoCB9WjPZDJ2",
  "key46": "5bWtVP4ksJVRoPaw5NzDah9egQCdaCtPTUtR72f4RCT45qMBiCzWuTWqAHeo5wbYtG2S3kChJpVzVQ3rkoGvU7s3",
  "key47": "uq4Yy2Qy6G7E76KQ2EpKnzM2fUSaVVpfzny9pCYBpbxecyMo4JZbANe4cBRqD7vW7DM5R8ELRmTMXt1UG6ZcYU7"
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
