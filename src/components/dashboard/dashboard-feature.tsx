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
    "4boPGN8Aym1MYtAEYQHU3osrYoAdJCa1224dseAB6SRSkFMPRhZm4CpYodgKgvpYdJ9fJVtxKnfhCqQqWsDFdDDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2267cvDo6RXyVydzfcjBerTb7rj8DaJoWPCmQ85mvTujFBU3eopBj8EWUctiG242o597vm6GokTcyGCaAUShpZH6",
  "key1": "3eAifHG5sbgjQZ6WPXZH8SeHNyKSjJSQbGcMii29AvqGMNPet2Xm6z98DGS4haCxR9bFRu7mQGDUbfjzs5i5JzL4",
  "key2": "3h7T336qu6LkL2pLxyv3JbX2cPEeSmdCtHqSzw8vp1mUtkvbGu2sfigA9pJoHwpy5JibjsdUfmCeKSAk8YvjLqp9",
  "key3": "dDiMgTvxryWWzXbyP9Rkx4hoFXazEJi1bFwBebUczGNYmdu2YHpwGxMBbFZ4LzCNwtzv5GM4zqXDXMrFk6QuMxA",
  "key4": "39dmmc7ab3eoFAJhyDn42jb9Nwtaor1oNmLfwNVR2PGykids7C9t1AVatgGFnUD7EVZ4cimnVN7kFrnTbzXpzYYM",
  "key5": "5ty2LhPKSsZP4zsVBAUEZ1xQqNYDs8F2Yzo3PNnEy91k1roo4KSKQpcCWjxZMhnaykDHj7aFtE71zzxz94ArcaFG",
  "key6": "5ghtTJUaoKixVgrx5LBBqkWLYoZQk1xHCEogRDEhgKkfqrRzEi4NGK1DCJmAct7RsxvS8exSc9rHuyZppXsCph2y",
  "key7": "4hD4wp9DKD7g4GYL5bwRoMqFVRGWs1t6ZWpxmmSZVPnDF8Bb6LDZY6D4sR8eiqYncyjJ22nYdajABazxGgoQWwtv",
  "key8": "s1oQkQjvEW8oGTQCP8atSrUGQDbhd2YnPu4yjp2AEAGHgFED36bAtiXWua5Lx2daoEQCmVpa35tEP3K2QFZbHjU",
  "key9": "4YnySwSp3zwGoPGp1jdmT8iSmn4WSXXYgid1TFAYiJ4ZDidkdLh2bbd5sPXQbLEm86SpFrQFAFTu3QbUjk6pPgAF",
  "key10": "33CnviUNBTjwxdJzDKTyedHZPWuamTtHbTe9ETi34S8N8b3wrWqZe7mjfYUBC6nPvKwMRbhSrZRz6W4ooQGzSs6x",
  "key11": "5zSz8gvJTXpYv6VMnC1UhANKFGcCCiqZJK1icQAqiHuBvoRBJJWGdAErx6zsXZbvkE9yae68ZxQubsubB6c1WwgA",
  "key12": "4LDLKu3pHc7Cos6fn9RVBQaT6B9MYZzmTLwdfzQhs8qVoHgE8i18sf8CYs19LqnGe6qUo6jadCbLTnAY9uJCE3Di",
  "key13": "5ntYzh1UFKtdcrmE6hxuegZb3w5TA71J9cuysaRmV97qieKz2KcA87XWQCL188NbDMgvRKCJzKnscvXT3LtEof5r",
  "key14": "377UpgmJFg6dMMyXmyT931QEQhnifqsfvw1TTdkMMSZFccBtBpoS563BjE6WkJZLF9wbykk5hfJGdNAKLrQC6FEa",
  "key15": "42koPCf1hsqeAzonab8WMsRQqPf1FcNrCQ1BUxEvkpKBTw1UPQ3U4uKddbeRxPf4Fe5gYAtUPBapJ1R6ZcFdikNJ",
  "key16": "26Skg77EgLVPhRKwgwJKFrjh1SDzodeyyz3mz6cNRUakJ4pzbn9pqmCXrRFX4m76yy4Z5rhFS8NFbgvBHcoUV7ky",
  "key17": "42iyLey8cq68n8bVeBXWF9sNFSBxEY6e8U52Pw7fM56x7Rm26LV4eJ7Xg4r8Y1GssmSwBKmXGrL6vcnqcRHdbhuG",
  "key18": "3RWBVBiKW3Vm1cAv2RxsbsMiuVhn7E5BjQRqnRwNitfrmFjWz1hL1WN2B4zqtaxdFNCayBviteQUw7dkhuQn8qE2",
  "key19": "nUdHNkKsV1KrU59qRvA8DNgdLumWtK8cAX9tdDwMYdXU863f2vtanH4q6BbKdLqQLQ7UHwo44t5bg4LxU42mfqg",
  "key20": "5mpXw2sbSfEcKbdUZ5Cba9tSFPramF2WdqZXLapPKynjegvJeuciA89JQj4FT4rL3QuMmgsP2q2xEVxiZ2wxkT2K",
  "key21": "2tDNzZ1hmgT3Wkq1eeaknBS3BKhDraTEJebRx8hpnH91sv74cZcMV1pzr8dx2JRrV31JmtnFJujJVnEK8qDMnURJ",
  "key22": "wRThM74NHxqVbdEHhZWyGqPkGoPhhA3QjNfGP3DBv62Q2mh1h6XUAqZw9zSnXHuj8yp2QCXwcbHAdSFQH6AmEp2",
  "key23": "44JYvaHcYLzxDZpZ61cDAvNdrYAgoFXug4ndx91nvz1ubJ3fhBy8VzzHmJQ2JR2YeCLTKtVfPe4N7qrJnVwEajuz",
  "key24": "22wokJ2YYtwbQbxyxC8KGbqvuR3LswV48cw8MvRF5q9LhnCJGsuy9ju5iBF21TLNd2c3t4ZqoJVc9e8NfYae7Lv3",
  "key25": "sxEYb26wyFM61p2epkB8idYvn4rHDvcXJxuASCcsYR3ncVwJ2oKo68BRRngnNQeLEPDYCzdqC5qN8k3ppeWvKSB",
  "key26": "45uud8JiX4URTdasR1JKf2NA42K6XTcYXVpNDeg4KEUXMSkj5QcGYk6Y2567dhWGxsXxY3AfCBmkrbugiA9MqxKn",
  "key27": "5B2D9S9uqY5SBqBQ6T93kAeec9pn3Lv3fL5jNLFabmqZLtYKr6zjPZyS5KfgjWuDxiHAK3bLtw4RBt4fHasv8WaR",
  "key28": "2PggMhPe5XKQpWjwY6CwJ2reXHHktyTCE1FwkCofrMj3YbKso7kR79kYEeXf8pfEfjyGRjgSpiJQa7FDNLTqncs3",
  "key29": "487rHvGQk2VPJ3YyBxH74Pd9UZ27gYP4LDK76MhswVPngUaFVY4S2DC73LLFh9tL9d4TSFQFrnyx4AhJCMTZeEkG",
  "key30": "4QqLqBywAqjaKhAe63R1QwFg6e2XKjVWQnwWWrp9ahr2HjETwE4YHs8i9jYeqe6nrczWQ5RAcrNJxqwaHFecK3sZ",
  "key31": "2ZcPQoFCBHSVMXYrm9mSBZDZaxNDXk6x9kjifeuSzZYnD6WNKGTC4rcJzijxh1u8ur4Zr34p9N7mgd3PTE2kY2xH",
  "key32": "4awTG6qNo1svKRhVLF2u8EDJzUYy4hszG9JWCYobwr4XkKxkwGKZd5MP1kRv3y4DVHvLVpkympU1SqK2YkBStP1w",
  "key33": "4DXcSACisjYhHxoqyuxU2dkFiMMrJLr5xB6xohMz5tEQGKFCoJpHvdnHybqYTfU4qA7n3SPVBSjFPzDtb88r6LK",
  "key34": "zyijN1BfVZAyA2qpJzRvLmmRx6zX4d3u2T4fKdyAEhHwwN8Pmb1FWN2FhTBnezNabiC8b85gUZyKxnMtfhWmBhj",
  "key35": "5ARZYHR7zBhUEaphftsFMMQyeCK5q3CnkbLtbuyTZyg1YHiNRpgVbXwfc4UTHgZqy3eUGxQBd834cCg1oxua62g1"
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
