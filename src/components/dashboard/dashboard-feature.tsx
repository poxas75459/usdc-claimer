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
    "5h6N9yr3iVr738CoDFJ3pjK53QShsVjRyWRhTRUV715m8RPtSmJAMEALRKFdKLJ6SajnHSjSxaxqGtRtySdNd6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tb7CrEo1TutfpiZvRvunRdmFTRSYbvYpBV6ggZxqedyWiDBCEGgwcDKsghLFbZXm1PM4TjidaqZRDToJ3r9bPpx",
  "key1": "3QHbiCB28UVUtHmBCW319HFAVP4AXiPucmWfSL33Mci43yGJugaAQDmZysqKDraVMi4f3ABbnNZHGyEQAD1M1PiZ",
  "key2": "4YUQEeSaWK3h4aUpj9UDFny3dqYUYcYoGq5qviyMWsRkRojHr32bDbZVBvFNiL1ZLafBrQMn3K3TG2FznM9SAqUk",
  "key3": "3dBujSjRk37hy1RkE3NbskKwjtA9frv1sXzcq7h1CT463Lmrs6rnRHrNkTi1Qfxdi2GE51n5pY9wHtEVwm66QZnR",
  "key4": "5CqTxbySAUGubd5q8UUchYJQnN5Teh8G6FFZHqC4VWfX4uVQynhW5KvVJ9ySybDu93Huea8W2y3Rf123Nd8Xd1sC",
  "key5": "5RNYYskRaGu1okssPurSsAgQnME8ApLEveKJ6Wto38sZsjSUJf3hzTmpfWPN58zdTbqKgboiMbafZAU9o9en7eJD",
  "key6": "2oHPow2rgu41GWUERSYW48ZJXdvZKBx1Nb7UZ59Q1bWhHBShKncWmTwG24gokfKTWoMUEuDPMhRm57ofzTk5rg1A",
  "key7": "5DBxM4uMXXHKs4WBAaHkXPzjCXJ3vxtGC8zyupa58PS6H2n9WNMBKsLiKjFFGgMjrnrMFEWfr6dW7kaW8kCPcY3w",
  "key8": "4Zrngr6TPdSJdpAETmGGhzAANAN41rWGBH8mtena6vnxgTo8RtjRHZKhSB36nFdPCRvF5qHpcNYPEVHYVoXZcV7s",
  "key9": "57m48ZQZewwFtBGNsUYcHf6c9gCbPNaFKFNsSbLGxKJieWDwJxecjkCeTShyNQFgPv5ezQHTyqKNdArnsKdFgasX",
  "key10": "2uWCF5gf7HjxEqPxx2TdqLfGYfuCF1e2FGktDmbfuUWByP5hW15RYBhKJFSTCwusqdL8Y4ZbxfzCQp4SawjQ8vhw",
  "key11": "3zfKn7S1U5Z8FuaceWMnBAYdWR7PmBdQ2JtMfFFXQwxyJAvW2LKbRSU97VBwGbHRfcraWPeHZGfLPwh5MSdK34tk",
  "key12": "27hXJdfQEk7yjJb7E5ef15JJbEZEgYNZFFCR14GWUYvref3fmDhpVV6HpyxJc29GxM4LypxKLmrwHtnuh9VmCcTe",
  "key13": "4bQuWe5b8YKHuFEeRKmDAr2HtAwGLCQeGU5poJh65mVQUDhsxq5KKSBYzZPmaseqqBzdU4gVJ1V38wEf4VBjCKBJ",
  "key14": "5sfADoJtr1iMX2SS3QdehPM9C3CDNWptc8DmMAA3NUUawUasQC2fSvN1LCTBX8bKhL76ACKZeVhcq3tWfyJdSW35",
  "key15": "3H6ixASCseLmdMM87hJUUCMFbkBxTWQdWc9Wpzz2Qa1TS5csijG2r1QLJRV7kBfeeZqwGqZHWZsEq2rsDNavqsvc",
  "key16": "4iWUZKzboSoCdbJSh4d9PoXxUHxFF7qHq4ZnoXbjtZPguSkjEC9FD3hYh5NPyk3XVe69t5Marc6fZZiFsAK4c8eb",
  "key17": "5nGQ2JcYBkXQ9HoYkrL8pvfzQqAxq632iNycsnEUUYSU8WEySv83YYrSHMpjoiqyEQ295RCftna8mTpMeRktnLLu",
  "key18": "4DWY6C4EfyubrwtmAzv8QvDiGBG4gDLJdSy2xrfug5tQDJVsx3NFko9AFpcSXwQo4v59B65tyarAa3oYzqwoi4xE",
  "key19": "4KDaDktXpDezyxKQKRnSw5SX6LGWXafpWX58oaJWrG57aDKsBEeQDdHmPqmXu9oewNzJTKgMCjZtn7fTemFdNSTh",
  "key20": "5ZfYsXuXqtQqN3nYy9PLtxonB3VRAYtzR2hyhYqX2myQ4SMdjrX9CJ77ZBuHEYx4T9N4amR5eHwFDJXQtFhTi5hd",
  "key21": "538Ydn3j8DgL5hr4PWzrkXtQvWgG4aUpgGKfHg3mMc7jZjyEsgHQyRmVTdcjVr4E8ojN3zJNdFxsLodJT52j6hrD",
  "key22": "49R9mXSTkUwuHpeBEHA7fbipxLaau1qd1i8fEpu3vdSQ9iPawzJeqkrMxbC2bRpKySaEbfoZHimc672BVnqKxvcm",
  "key23": "28r9z8oKafo9btJ2F4LKFSuvVyNSjMsiAt3j1UkFjx1H1PXGMTPk72quGfgc3PBcxCbrahhtv1uUDAs4XbGvvDkD",
  "key24": "56CkVePRgeHTcCwWmv3HNt7QBQ7T584yXfbbTiJLSZJeDuXm6Wn49JW27yUN5bu7LNEQSrYVa2LizT6WCFLZZfis",
  "key25": "5xuk6MnysAU3Ke5BvoxzcuTe9C1BKuPVVBJwCV1LRaxjG9foWQm6vSaGZc4S91HZkx3gMHnvSZTRJxorjAVxBG9h",
  "key26": "5FHaXp7N1SVrVAsqSy5mG77yDXffjMRUfnPMQu7tiK8yJQEs6D1ipRqwv1tfMi62eH4UV4D9fkUUV9xg1ya3yqX2",
  "key27": "5WQtNbrpfWsMmwjBTHsaztUVMzDmmndNxKt2dZmCJczLbXWG867aRX7xxd6jjfNhnkP9X6PECGQz5HUxqCRMi9ew",
  "key28": "3gL8cKUzhsUZaeXhzh8A12PcCJgJ3oDmuXHNEnNgfMPqDsohGiZNy5aWj6No4qkH4qGoXvffouH6cCKvoTcxpzx2",
  "key29": "2wd4JkKXKRJK4o5dn2fDVxvy2m8bzdVd1wF5sqpaxS62BHXi2BRjygvazBNusKphNVk1hyJwbEYo6cfovhwLweAK",
  "key30": "31bb4UCb9TCgDsDBR2C6djBHceBaUBtqxiL2P68BotcjN2ASBqhiQxrwGLFhVrNtX6HzoDMeES27biws5vEVhWar",
  "key31": "3qG7vRx54PqLsz5CYDwmrEhSofgftdt4JuDdgw6LjbHcRjGukee6872ErXgcTdxBsxF6MSASLGTcLeH8k3ysprb3",
  "key32": "5Wa7F2fiezKEB31GRWTU2x29Sbz59vss2dMc8LYfNWrhfchG7pRr29bPBkie6WAzxtFVCeaF63mofGu1ZGnD9kht",
  "key33": "5FMnA1EGsn837yXt6hm3a8LfYLn7x1buPiu2PmcArwMLVF7TgStziZm6pU2mY91fiUD4nAEWVcJebKKEi45SHArq",
  "key34": "4zCtRXS1a8kEjY5x7LoVLexDcce2vmt2Hspe8m6KmPHZ5oRfbnDearRkdSyBWbenE4PeDFAVjPBopHS4jJeXA553",
  "key35": "51hcqkvkUAvsUT5TdMZdefVJPtX3BFWJm26q8Y3YmUwT64vJHk7qP83DvXFqMv5meaZJM5bUANPyYuRNM2u7Bxp3",
  "key36": "5YYtDEMdoBWZrZ2aARS6csksWH5EgCQYCZp4PoYYrLy8CZDonCKcLeTVQHDkJtEest8VPVAPo26HGQTp7CeR7xWj",
  "key37": "5A2aJGZuSsHSPK4fMA2XG7FPmJDZ4fZHdKXRDmrid4zFqxstHMCbjuYnFs3hfHtmKkksWg4sSatJKjGVsq3cWmBT",
  "key38": "2kF7MsaJNm2DyJFtqJskqWf8i8x8Rv9kkxoDgZqzJLpGRhiRKfoJ5YoS133itctCKRSgMSPtG6mKZXr9gyc5U2Qe",
  "key39": "XBPhEivLXRk5oSRQojbzQqk3GYqe5Yn1ffcLfafdiMWjUxRY6GibxGKY8Cqi3ktiR9AZB91yQ7pfXzWmmLBAZg1",
  "key40": "2t2A4UrEJXrEvKArR74n5CYk4jwyzoJeE5BovPEH4ocHT4zotSkUwTL1evN6WFKdGtaaHH6RbJvXaQAdriHveZwx",
  "key41": "3H8DiCfV3FNSH4dyGcg7SAxv2CoLw75hSbA46vGxzYWH4sHgCLDFvsjXxZjUqHWiFi3YPiPP2CHRgHimK8LUxGch",
  "key42": "cWMXo77EP4k8YqaK2ioWqQzWmPfLZYQevJEGMzN3yYU35yxYCqP6k5sj7ABiH5wRKESgRrWYoCrQieawvooWL99",
  "key43": "391K1MKc12Xb6zynjmCrMKaWwvxrghowvXBJqdrXmkteworo2fwc1Hh8df2K5xNPjaxdcjmodTKUPppxGhVmWSyc",
  "key44": "HGAMoPxEt2Xoy4Ev5WM5eusg6nKKsNNW7ccg4uDLiYJh6wvcsoj1iwbMZb3mxQ4hicgV28urRRpSMGwzcFdNiwv",
  "key45": "2MskJtUXoBhLaNvTCQvL6CmTZ2bCB56kHjsqT6YWQdbrW7f8AR4ncjWBD5RYt4naRZEQUth7PQ2LbJKw4eyGXPxh"
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
