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
    "3Lb9F75YiiJAK73wQhqP3RYebiud6xjmNNJufwia3KyH5aL2MezEoHGyB7soCHj4mdJWkW1N156u1Bgw65VS4VWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48SeLVd6F3LqmVsymhfhYjrmribLvx1Js4pDhQso6KiU1wBv8iywBdQPMrefbgQ3KF8rmvE4fhCFXficRe1icrvE",
  "key1": "3EjHQLdE9LH1BSETyg2FVvW9s9TNgLykcQgT6Sgz6bcTDPF51qouEWhqV7o62JRbFu8uctAHhw9WxAn7SsZa1qcX",
  "key2": "3g7hfiffe5ojV3Yn2V83XQWXUdRtM6ut3SiHGZTCDvEBsJeon2YjAX7i4irTdZg416woyQoH7R3d5LnrUmPBoovz",
  "key3": "32TMWiRqhkAjarGMTpiD2qk8tkeeuknH2TJ2VA24xpSGyNdXT1WkFpBsNBXr81dyGvoyks8KZoXQArTonfkNfcU7",
  "key4": "2GDxNKki3hGooUs8vu4icT4sZ3xxhmXA2MYXk3xX3Kady8a4376DnXq95jGsjLZmctfnC34mtnjyrtRg4LF4SND5",
  "key5": "5E9MB2zrhJCrtskWMEET2WVHFSk4PeaBUTULbdVStqtcnXdyXwF2xh6ZVXQNUhzTuH7s4SwKmTQRxG9uTKDLNzFb",
  "key6": "wM6MQqJjVHGNcBA7LBUGA6SXhZ9dsGdrWJ46puPv4jL487edryN9MDiLAg9eM36DZPrTTgkS36cb5U6QgtHXqWD",
  "key7": "66wPKMDErF15reGNRg14tfueAB9UZypYg7bbtqn5StBMR1UTk3XA9mhcwT9D6TWtd6wfb8X57amYaVr5NwJfsyeQ",
  "key8": "gykkTPkyVHkZs7o9juWesi3ECRCJFBTHFCnABxio8C9e1CF4GxffujvMn3gAKXSafkkWBTtC9ERwZWxjycc7xj8",
  "key9": "4vQEdpm7NeQsUgPwzqWdeXwKRBrtHgToM5c1btruuo2apaUVR2ZgoPRSjvRJ9zAnZMLFdEFCRoewJZ7z78DMP5co",
  "key10": "iPyuuePgGAM36AsSTp9bkUMRhb4d1swZyKmdJr6mVGoyV8pojQN39hs6x9FHzYJmxeKBvYwgZWo1AURRXrfAcpf",
  "key11": "DWDfuEXaxPBogF5wrCURgpFRmjybUqfR1o9ZPJCP2mLwto6cMvxuoHAs8vb6a2Gqn8Zdp93HEUMyHn2Tj9kwjsD",
  "key12": "226xTnF9VGEyBdVEeKjHQUJMQrUH5k95Gef7jhu3mEBqLpQw2bEXBgRS5Vt15Ds6sxXUDGXxZ3NcZxN9DisZxScj",
  "key13": "5UUGEz5NDQPn7Y1nPCLr6RaLRDTVrvsiVE5D4vfHuKcZC8of223eLkLk7kCjrU9a4EA3Ba5zEqfFCi5V2Mc3xRAR",
  "key14": "8rLg7WvRGoKZ4VHJdNJYZ6s7wr8PbZve5dGhPF2ApWZuUn6oyjrN4T992eiwz1G9rhjYafSAVPg3i1EPMchezuw",
  "key15": "4XGwstAZJUoJZPevshn8KrQZ5b15JW4MNTXix5RpWX2idDAHQ4Fo8X3xkgqJXGQpfwQboELGo1tcLyYdP2UxTjyd",
  "key16": "3sZyk2fHmkUZobccKBgYPCuHuvjFhLbRVKMjBFXWCWQgheRsgca6jSkGttrZ4iNSeB6LB46K9dyZaFRkiJVBWNXz",
  "key17": "57oiY4iZxcnBZ2XZv3iCWLsKZsyHUxAsb7pKciifgXeCsDthAe6pbds6SiyE9XgabEXqp5JUcFCtj23HHxuHvQm3",
  "key18": "4PkEPpUqCX73sgdYFTb5YS6VH24spZHnCKRcZ4YbE7woMhXtT6X4iLrfKHBuXLgkSVdRM5PahvwMPg1BFt4G8QhF",
  "key19": "2ZqTwcM9QhRCPhUnmU3Q2GmmPYu5hXcMwvAHc3MWadLrvCWxHscM7kGPKkpEApXXPNzBvgizPeCV9tj2PMfEUtDw",
  "key20": "3oR3Lv7VPrePrFnsFsdycyjqYbFCwwV2uaVi1HdvBEkJteBePbdhKXs7cTRboL8h1ZDYQQQzQYN5WrgsZHTY64Sw",
  "key21": "3hFg9TjtZMLyr2RmLsCxsoKJjvPFNGU6DERRPojnU3UiLgNn9LZxcfAevxx2KvGjnjXwEn6FsybZeXKSEP6CeuHQ",
  "key22": "4ZgcWydjZnL5pnL2CtUBKJ8xde4wDgmESeURh19LJuJhJce42mPmMLj334n1LWbWYPpHjRHFRSuccMSaLwBXkiwX",
  "key23": "2j98u3EWRTAVNjDH9ySyqUF7ePwcBLTNuoCare1kbqo8WCMiiH7Qwv7ceK6KsUV1R2C9f9nRcSvjFZ4c7Q597hi8",
  "key24": "3gt4BNR1WmFiPvr5M4BeBz7bFcnqyMUHTivBEAYePCUu5jvyrYLohrQZ3Ldi3wms2Kzbt3x6iNSKRrEoUy17HNPi",
  "key25": "4txHUKv9GqtDHn4b2YX1EfC3u7dAnRb1CTe4TjSLNxmo8Vwbr3nUcw6g3CRMESwtiPui6xEhmZdeQa1SwdjL8Zwm",
  "key26": "48EFRTMAeRj2Y5RrZ9qidFtNhRpHftPtdHfcx4Q5Q38RQeEAAppGHSSx226p3nCRD78xfVmaahrzep3FRUJHJmJt",
  "key27": "zri5At2x7uTkQJQqqgP2uScxT71dHKgbMDGP2QPwu2pEW3LNwbJco218jZkJginiKc9z4GmLaJwjB1t5XiczNvg",
  "key28": "4Ze8T9L8BoumvJtsAaJ7TWGP3fCrFdSG5yBqLs7qLQJAp2V4Z74k1XHGKCnM3D6oBjHMMu7XCZ7sF5M9sCpcaSNz",
  "key29": "2hp87y2PZiCnBtUnS7shJc8SRaGLHEUbcBm27hmcxgYfjP5KQeTG878JAykEvb2HTUCWF7QQ6zRCPqDxs3GdeTqB",
  "key30": "mjv7w61nZpYzQYMFfRtv9j41nJ5nFvUdZwCxZ7PcVUY2tiQ3Bbvu1BRL4YTyPE5GQYGC6mbhkZoeNnAtnHiw4vZ",
  "key31": "4jmjUj8HJyPmjCe6ziziB2mVGSThZMcVV9vmWK3YTd7jVLQrvsMTF7WwAL9SPbbonTJUAebp6HiZuFzechrh5tUF",
  "key32": "3bZcMb1W4bL8CBBA8bNQgbmUUicNdgyDGUmWNuMT6YywirGEU9ofhR4xLQBSucggFLDXfKb5imYQJp5wFZ9oSQe1",
  "key33": "5Y2bZkhccMvJygUMeeAXD3dGzXDzym66oBNDvjMbgMJNGyk4xgBE12p1KTv7HQEXYgBu9Ws8WTTBd269uTe4R3tw",
  "key34": "4BKNoMxAxTH1qF9fh5JvepmLkNsoUBwCtmSG9EtZtBtBd2m43Xi7mQDPHiKZmnZupUKZqMBeNQ4E8ti36egpWQEU",
  "key35": "2ymjz9bkJhVjMdapNeMXUbk4YULyHpqNqgMMcveYfUhnfXNDxSVQEjpbNUi1KcDKBgNaknv4DWAghi7u7AoBpyJo",
  "key36": "55HoKkqNmYhZFckKVsgbRvWVhRXdXe34rR5YSoku2xPFMHHQs3GK5Pzghi9YC6UdFeHTHTwVkQFVPJnpa5YfQ7fn",
  "key37": "4NdbY47xHu85BFsq8kCGQdGPVh7JJBWGgnpPt1wqGRpZWWpk9vz8ddkLfnBTBwRNJePVHDb2qrDzMko7fpX1WGuE",
  "key38": "5nm9DGxnyj89wiAT4z5DBoXJfCZ3c5oFPmHU3uskbgg72gLRf7pyECUZb3Zbm2rcHxhCPQMfXsh36ujShG5Rf1TN",
  "key39": "6cKWsNCYzPRqF4FLAnsiLnkR2ynQv9jYxq39F3koFp1aW41f9YD7X79XTJH5Z9JVMDvbjba38i1yfkY7mUmSvws",
  "key40": "onJRjrxkeVf2EYi2NHkUgYuju7pDXiDGQTYogygFxbCiRMmb1VMKPqomYKJNVLTSCheff8Wbh6fZgYX7PDF6tyh",
  "key41": "4PZC6tr8JADBf5Jo5JNX71szE2gd1jPmYjub7QxKdBTxTdFf8GJxzWi2onSQpP3VgxDdyvwTFZ6fuaHVf1kDSPAa",
  "key42": "3xAWfictNUEzSZkpY3S9r82nGQXiuPA5TgYBi5uzRuAm8dWMzC6JtCyaDorKTeErYgiUWnGBcaxdqqLGPePQ1Hm6",
  "key43": "8GxmKuyzDmvix5aqhvMaCoWeUrpJioGc2jhoiodjKkG1TATLpWsyHtZBNspmsSMDxNb2AAKfDJnizZjk9B7bP6L",
  "key44": "58NBJgeTnF3o6hEYfSU8bqkYgdwAeQnzJkbJ8ETtdrsjz7Av4cPehPR5y8naxN2vkkAB8nn85dHXtCx3skrbubvL"
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
