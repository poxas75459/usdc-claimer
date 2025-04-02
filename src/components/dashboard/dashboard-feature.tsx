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
    "2JnLFmbSBwaBTEasqkLFn5UZR9YCsXycVix6pZH6vtay8UTekQa9WBsTFCrWDBhDk6z53XasQ8okNcT2SWEfwTY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEiDHQs6fUeXSSw2cjhU8MXrBYNNDjrqNRgg7wqP5iWAwrgPrvBGaTyYHwHMKeEEVQUKWW6SZSSLQY1gziM2LcG",
  "key1": "5HB72CX5dMkJSsCuiHnq6uKzoKzNvwCEtG3kZaSfdTq54ph5Gbh6HZn7HZmWeWFyPYNbpTo2F3nSw9wefraUF2VN",
  "key2": "51dSNvdDhrH4Rc4MVhNG8nJR6e85HyEjf7ZZ13bgMZd3hzfdeMJv39MQWo8zxK9axnWyErEZQBgxFNZLJKDMbLrL",
  "key3": "57Yrxx3VUprEL5sbQv2YrW5LBGheh9UfcLcDz8nWM7N9AWRsc89wAyNuzoHxq8GU2gYhumsg7obWFh6YmZVgtkh4",
  "key4": "szAJsPryW4k5CnWvLdaGBKCZsP28EbbyQ338EAMbi4Nq1HNs62k8ZPGDH2Fx5NyQg4S8YvpiZ5wGRTMtbapGmuL",
  "key5": "442LotLqDHn2kn8tUsfNoej7vVMbM6FYrJm6KJs1ZUBT9xv74G7BvKNYXxHaEKQQNFMLLubPPu4UtWR9ak7fVakA",
  "key6": "PKn5FssBhWTFRU5q9x7PAiVN4ywzw1TxTWCsSN17r3qNmZfWJecK8TFkyK3sgCVDYPXMtZbHuRaDW6LVJUDZje8",
  "key7": "287Uk7mKbyRic1D7835JMhELnEkBVmkdmaUCkjCZNufDgsPFxqaBeKFdkKgEDhCdUYcdKWCv5P5r3NQdMrVpJUok",
  "key8": "4LarpNc7joiNjn1Xh4JzLtFRecGV664ZT3ycRP7MUmDwKqNv2VuXLmpPkJT8s2httP759UfbSVJWSnpd4N98hxPB",
  "key9": "4j72yesLy42Z8uBwGAb4VSFMCBfwfzkYnA21ZCgNPmu2QACDUitoC1geRNVVWpTc4pwW7M3tcwJ6h8vpsyQnvX7C",
  "key10": "67Zzgt9We8aaZZQDcFzXESoPduK2EUqNqu2nVjAa3zgCb8gYfAAc4CJWQsotBoj1z9kPrgkTGxYhhJa1VeGaw5K7",
  "key11": "4ibEWBBWCbs5xKMmukv8fk8bPT8Nynxp8FBqt85s2NLCrTx3XEHHxr48Nzs68SMfisfgYqmtC8SHFTchb8pHaXEm",
  "key12": "67MvicF936kDDPCuzhDtGE7bvFVR7vGZSFU9LWiDSALzGhYFgcrDQnBwXQkurJx8YMGAfBBUJX5Yf42nFiPSGMzE",
  "key13": "5TqhYBHbQjDnS8r9RdSFkHAc7xTJzXZGyrtDYygPn543KaupLDswrdnbPFHTyGuD2NYQ1zWtbW1VjJDDFMjfohTg",
  "key14": "4WK288SrVEQ9mWTNtKuunUzsJD5pX5QXbqMp9EdexeiPq3PZzYsCtKQGASwTSD5vVdLHX6qu8BwrQ56Y1CTYWN3J",
  "key15": "5YE9wWto6CfS17Lu6YC9Pz3jTmqsfhZta1TaL196oGroxYUpLrwN3yNb6A79L2JZNz7mKVhGRYZF1vte4NSm2uTV",
  "key16": "5amFwsxnJzD8rxuETwUDpvLnj53cf9ZiXNDWUey5A4PhxQ7yf1YYE1HwJ5KaYeRu4ENuKxzTVMgUUPrwEj1H4uyZ",
  "key17": "2b7v5Hzvovr5JNafL7osHrJYRAzeDdzarDZc5WJ3Vn8F3JD5SFbyU4Yvn1B2AcRBeHNeWz7L9w7qeqwa3xZc63CV",
  "key18": "4z7Hc48yCrrdfgoWQ7dZDCYVgesdnqL2Thwy9p8abCqxap3TEMECzU7mi8MmKcHcARAJGPLGHHwqKVmLAnLYKExi",
  "key19": "5ZvFas43YV8AwEJ9sCvxhhECgG8edWPSsXdFBRCCMjw7Rk5HPEihyfyMneYFtKjZ9sYpeoABuwga99kqtZAMDMYZ",
  "key20": "2h8cASJqr5QqtasEVhUVxhr8ofdiVrqesB2V3WctKXdQgsett6jfjbqtoH3ytuggE7GWqyC3x3kepsYWwcsV6hhs",
  "key21": "2CSZViHWTwy75u5cTrUCJLkNxFu2ehQmQSoGHaBqZavwXWxrDN5okHQdgk75yUKUT6GFmDe1biEXCVeock2SAPyf",
  "key22": "3GNw3JohWUt5w7gzQFgcYNvqWRaPxjA4jVahc94zzHBocgk1QeK44m14RTjCfrd5kUvuPaZRxgEpd5mCBdC3JjxS",
  "key23": "3AX4HHWHyEuANQ6jMKGfweKFb1ExqoLvRt6TmU4S9dFoXzGnJK4AoeAB7Gq4S7XXu1A9o4Kkam3HSjy7XGVmQgLT",
  "key24": "dJmZUXUDyYbU9fkHVm1qg4pwr9Y25HKJmernMNCt5KSwguBL9hwBJwUGBTHnJR4ju1sZYAfeoPUTPF82c4gb8vf",
  "key25": "5cYCmBpnjKHY21qpzQa3qmMwfCU3qwaD5PWdfXcxee5DdtM9iMBeM1wv5amtjYnsfioNG2wXjxQQKK84Nn7dERVR",
  "key26": "ssuJHGpxBEGpzJhbEmCG56LHgj5sq9TbTZhrXVf4FGwZ6SYHkgX2TKh5GBmeRwjyQfzXyefeHWACs1WEVzHB8vx",
  "key27": "2e9hGPBc9RGT1bNYBMd1NsoUB9JA9H2eX7AuLB2wKAQYnuVXACKLzj2kv9U1TM1BPfrC7yMQYv9Y2VDV7cpXZCyR",
  "key28": "2Pbu79r45BqDZr3rLL7cY61AZxRMP1fm3nU4QLRgswYp5nSoxVd8kecATJsD8NWaoHEpyxuZEG45nKopUwn3nJiR",
  "key29": "2TNigVyMk77xbhd43vd99rEV34Gs48NJNvkuhEv2Lm6ZJMscGF745BWFuikZsM2KnRtsN9QxtWAmyxBCxDWNYmiH",
  "key30": "3onq3ZzvKVfyEr47kdHUzWb5fGkcSgBSXgoh199UN9o4BR8NT1KrVCebzqggQ1xvEWg8vuftDgrV9cwfgy3Ze8jR",
  "key31": "3cR3me7HrdHwQqWd8UxBgYxmdW8TRrVZrcgKtww68xK9zF4VPWUjWwvc5eLWoncj5RZqJtEm8uP2isZp2LSHZyQE",
  "key32": "3D7FLfesT6tWPAUw3MsJZ7ZcKjk78g514uhCye6tmngLJzpJF8DKjf2aeabzWMLFUC1pkCzk9dukyDAbvxsNpQ2b",
  "key33": "5ALBXUMyVHYJTEyqozT7LtrBWgANCZ5ULTaxfX47HAGYu1M7Jxw9DZgTRhBjrM3uGckN46dHfKuLTHhkEToXAKS1",
  "key34": "2tfQ24LCjah5kNRc4vLQ8bcVVPbA8fSpMKm1nxnx71EAg7vRQsxvQ5KKYcs9oQmHPERSekvSPL1WytNTPWm1FCup",
  "key35": "2S6abknMUVRyqizx14deGrTKT3FshZ1UdWUB1DnRWG4Tsmp4kz3juHk7mbBVpNbpVGG6dY2wyYWHkujXwJYUiNyV",
  "key36": "46LiMieai1TytZVKHmDqzdiRFVBUevzEfL2qu9DEMuDBdnF2Lx3hcCTp2bN6V5Ks9ccVr8PPvSU5Rpbuqru5s1wJ",
  "key37": "vNcgxC2qMHXsmsZyyrSnDig4bzAvrZa6gYGEehwC8uLsPRnaXaGe2f7xGHNT6PdpVER9NLkc6Dda4jmnZasB4mF",
  "key38": "5YXYpUVBoDAtZ9Rr5VzHmATLDjzvmwBc7AXedtNVw8KeFsCDfSJjXDSRp8um7exds3KBntTtc58SEi67M2u6s4NX",
  "key39": "628QJLkMoLdQvCLSjowiFqQgm2rMVGaBu36fxQazppQiKmkBnZEjD65XysEQAuVJFriYR3A3Buzgs5ncTBUbGnzy",
  "key40": "4Y2cdS8wrC1AsapomUH3H1nE6JwQrU4e9o2x8fLnpTamDNXkGKmmZngoUYkuK4gcRzxo8C341GQQMKrLHre7Fhvk",
  "key41": "2ZGhjscXWy2C2u6ssAwfrpKG4b6FKtzyJ7vTr1x8CY9DMMkRHKdzYewgdo5RDZN23zkoU4JeJQHY2sdewzDRcoL9",
  "key42": "4JQYkHr6MNEJoEW4ccK1NeZunNJfsnDbVwHZMNb6NvG5Z7qpcqxP3Dn9H1TQGNMDnwApJWQk9yc4RuMbJKwc9Vfg",
  "key43": "5caCUvzDYjM8wp11Rp6je3tAwxcfgeKbEDB1Tzh5qZFuGTujBAnhJa42bS7ugUZ2gP1pLtSmx8YzF4qZLvMWeDi9",
  "key44": "5TwCq7yPoNVXmmZVMcqBbEan2ueGowV8wMpWUWgD7KXyY78D14XSKhSGjafQAkw3HCuuvdwQ1iaKCNia4dHFd6eS",
  "key45": "2PfcUHhwsGsbKFwbfLnkfF1tcXEyYWpumpDBJaTRp4LtJmvEWWLsupt5RU9NtiZoNAYdLw71Xn53sgjZSPow9P4W",
  "key46": "UyNpMuUM941vkKnB7qbd3djaBCqwSacGa45fAqwAGK3HWLRUAAB497emigPreRLUuaBTLuHP8AmmhR6PLRVNY1T",
  "key47": "2PPCBM41FL8ESiPCvc1gm1ginMjJpAdwdgRiWvhNi4Ebyy1rCrqk8JKutuSTVgqyxqJTVHNomvtyiZAsQgfBoKoh"
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
