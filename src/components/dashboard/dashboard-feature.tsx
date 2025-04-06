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
    "3fZyr5bnZdkuew5fWLyPqSqvkzDMxgn7Ve3VSiSm99Yc7aNB7SayfNNaBv8VcbHBXgCNgYA1ofd3Qjh48jHnKT5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "128dGPJxgizpeuNfdgSsQPTaoW5rcbuSjywH69iEzhyh4bTU9psrHAjYMCJALmYJoMtGpaKMap1mJ142Zp1rYnYw",
  "key1": "3fDLHEpkbrc6VUyyHCRT4u6MZ29Topt6A6iR5sMT6JNhrKtSMyRiBabxNtyaRtFjmwLfgpkrMcGi9ofe3mmXfzN",
  "key2": "3xDAc9Spvc1usgAZR3YDbMZVWPxS1ZrEV9pab7D22mk3ERUHMwpwhg6asffmEp6nEYjTmH3tmufyyVEgN6nJEsvy",
  "key3": "2AMyFcWVzzuR3os7baoiUhVJeMcxD47unruSsDYtyX48issKFRSyGtzAzxEz1Tc7tTbWAbeTjFactTDuTAJTS2BV",
  "key4": "3yPN4nPrDBp2svDvvaLQqDMbPyyWkibWnGRmaHnpbZUvWYmgeNmpXkyGS8RNckCY7WSAevWhhWifkLQonzUijBgG",
  "key5": "3uFm1xnfagfvsD4uQocArE6rYYCSY2oK1k1TnWDpNbsWeXccjXNh3BiEtJggusxdP8577uUUowYBDaz41fs7UyNj",
  "key6": "5MbesQkiQyu7qxTA2LPRrS14nXkrkzSs2Zke7CfjA8iPDNR66exqgCRHzvK4o8d8p6k9sgMCgHEBQHsxFWJRbmFu",
  "key7": "2Ff3aJ8T1PGfkywiXs2wF7THToAGgrcMeP2KeDFaSY3rfrvVQGPSxGbdVJn4Lkuk5g5oXKAeZP59ePTktGsbVUvc",
  "key8": "25h8VJv3cURPnZ3YUPEWhn1mjAGmdzcbmmi7QQ4NVFSbFvWn5bzJjUzMYKD1a7Ev2Xn6ChYtHcbVt1TjR1oq1dAH",
  "key9": "2hDjeWW1GWYTQ45khcUDj1QeRPohnBc2f7ZGapF144FVLp7QqXkkGQwYeZKGbqPzdo8UV2CC2WvgMDdSNXQUYgo9",
  "key10": "5R8TyYcHy3g5kbRHUTue5QSeZ5Sqoej4B5sE2CM49EeatV6VXvq4V6fzfpr58q6EbA7NNXiGYBpxwEFVAUnD6Jnh",
  "key11": "57NFTyCWzxnkHqDXYcXFteH2wsnC5XA5gkUxFW3NVxpod8AfZtyQi9rKTzg5jzeKuv7RvYdudsMETx7s6MmB9ok8",
  "key12": "XiNfbZgXCcwe2iqaZduahiiCa3q3AhrdHzBqY43mbmBQmSEBcktWMm2SmSymkufRXtsDwizwwKKZ6XtvLTyNi5P",
  "key13": "ti7z27vHZjJ6sFUpdHWHLEUhzskhWXLm57vp7AR2m1gFidNC85HKgZ9J5FCFR5Y8yCXDrfd1ZFvzJEveY2hVtxP",
  "key14": "3yjjzbuo4Yd1BY34aNTHoo4GAHna1ccSdU9XsDytFZyo4yzZQcuLSvn9kNGZeH8KPmuTTMhN5uvZkmXM7TSZKKZ5",
  "key15": "2ZMcmNNuV2gwYc1XexrvimQKyzRLWjYk2ULCvDQq8FxPUDvgAp7f1x1sBr4hh73PsZPVZedGBPe7cYBKJYZv2WEH",
  "key16": "2v1RHP741xbfP5iskuYHJaisWhJRKEdgSk8Ho7ktWaw2sedcpbwN5PnjWGgvvaScnbziQxfLNtVisDS6Bw9EWGM",
  "key17": "2L1u3ZrBmVvf4edQsvVvkedN6MKi83TUw5rLPPCinJM2ZDk42vfpCccQiFvW64XKYMCHotHgTKHsNPvaPyoN6euB",
  "key18": "3jJHD7tPxMTMY1WJ2aahm8j5Zc4SEiyonQ5da8Jkc1UiK3X7gF4mbXxFiYphEwn51ieRmwiZc8JoMponjJTPkWzv",
  "key19": "dUq9F2zGbfDeCaZUaCEeGRLXa2oHP4ZNXuTegsvEVNeb1PBK2993zdTzSLFRG9fqkpMTVrdnjc7sWGa6dng4t6X",
  "key20": "2fkkTJumXa4bRssRwmnvbCJ3xvMpnxfQf5b4g9m6Qb5EXACk1NLxEd97o5o7LrtCxWNGFMYwjABxBGMzKesfAT7X",
  "key21": "2G4E4Wmnz25aPxKjzoAhqdiyxBTXVdxxMRutL5eqP2KtKSFttZnKhjPhKsLV6gLtrj5ujDowJXgpoo55ghZgA6Mb",
  "key22": "2EugZkkP5niBjUEjaTSP24BNzpP1Qqcy32f7Quqrwad8hwtQ25WgGXBsYhdSdpiPN8PpQRkMmdTNWE2iMWsTB1Bz",
  "key23": "knyoy2z2Ve59eMtU3EE3cGWB8QucCSuN8B1q4n6ABo8e2GWrACQqoAxr1Dw9WYWzDau6B8WjUdLiWzfP3xvCMQT",
  "key24": "mN6SNHCD2b8ZjDs6GzB5Y9qe41WLY4s1XBNm2gEFneJXyMqLPJU8zZZKofSvo3jtcXTky9UxF18EY3wqCuL5Qi3",
  "key25": "5zu4gdpwih6nmRurTCkBYQVrQc1zWTUxvCzYHAK1acSgj3JtLoKsqXc9bWLrsCFKbms3mvp8tdoCXdcS55XKz4Nu",
  "key26": "3jTGKRWw84hu49KVrsujqz1im6mgfFmtsn8wEkzNiH4SUkfu3eSeM9SbpGLGX6MBP4txG7eE6oHiRxL4vKLJzPjG",
  "key27": "3ef3BBwywg7VHZVXcoGvMLt48vnSuPq9ZmJfH8aqHvj8qQf55zNLgDUB8m9ev6qbYKxLTYWxaP5XBof9cw9aPEQ",
  "key28": "5awvv55uwrT5Z6hVEKfX5UX8BLuuqJtZCXY3vv44ndWnDG39XCJfPrPJ9FHwDQPwcZfwL4JxyHvGNx6XR6wStYNJ",
  "key29": "2nSobSvxVDftk9fMhpQEADV8gymq9sZpcf8ZaPCK1gBs78qZa7oc5cFrtRC7UHuRySZZqvJYTMHwgYGc45ryYhC2",
  "key30": "5NtHJYBcb1x5x6NKUuMXvFgc2FhUB9VBmmWdmiTUtBqe5oNHe8eCyc4sczizcDBwb7W2qHvzPs47PGw36o7kKJSe",
  "key31": "2vVCvRDN4cDzNXFMe3DYhPNmzv3LnzpJ2LrTPVmW9MkeoZdr652d3mVSAsazL7fCLuVUkSqj8PBRZACVpnKHZQWj",
  "key32": "uwJXmVq1HzMgYbM6aQ1TUQQhyG18GenKvpUDTJoFJdN6pXa4e7tDZ5UwRV4tsykJ7qr3NfPqWvBTBwKZmSd8DXh",
  "key33": "4TzTGwCZETBiQ5eu9a1iZQdnD7tdAeqDPjHVNZYFCXfecUeUHCWYpJPxkXnJKDywjNSyWCBvc7U2Kx4w8fCH8Ddh",
  "key34": "2q6sQhob5hHGrxnAZgVNtgF1TJL2GFDKKeLQ4hwvg2HwKt5zkSE9SpNvgbjgnzLa5nEoWwXxbxgcydb4z9zuQJHR",
  "key35": "2X2DC6mKxzN1uspenwJafizmDYvg1AU4dG1UPVEzM6o5KSB1DNSBskcCckLMm42DbjgGkiwiSHTWrE7gDLYgdTXG",
  "key36": "3U4LUB64iyWnhEFzaNtFfqPkAYb3hjbV2i2c7vZABfuopdaGHt8EAQLcwRj7PC6Pz7ReQDCNHMNPFv9QnVJv23mn",
  "key37": "2kC5phzdvK1nmJT8Eo9uLKP48iwBYy3rv8rhAZ829SPTo4U7dVapWMC5H915behsLav7hyE5L1dcwMrtHL3ypzxh",
  "key38": "3rNLjey3JQTxM39TKHXhckjkNJp25vJqTpMmeLKEfQupUfQh593gtRNF7q2wMyHNJjzCNTUtM8jPtjWz8CJJ4JQF",
  "key39": "4XgSCDobGHWh6NTmjHoecofRQk6GYA4BfQoGhdE5jQeT93ipPX98broXeb6KQvnk8rUFXS3oYbupGhV5UR8c1bvD"
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
