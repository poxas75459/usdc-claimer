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
    "4PocAyByRWJ3DQSNcjybiui6iEZ9nWs1nuA8FxdMCHQKiZXDnBRx3gezYFNFzFuzwF7V3ZuRPUEypbzMrJz8Bim6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDYoJuhJP7q8Ev2qzNEEBPfNgeiBtgcpJtxqx6swUmJv3v2eJpYU9cN4Dxp5rSDNGyeFiURbpuvVdGcukmpxYuA",
  "key1": "2dRkGfGE35ihSFiXS2Yz1qM8hsndTfbmvkFtxgozFe6ovtapgoDQDyyJFKTWzBovRy4AfzayFroerBVfM9AUBHNs",
  "key2": "HNswohDYMmDTDfJxpjXw49xgHUBihvMTm8bmhj9RCjDD7RZxxQLrPU12Z2gY8KU3CYLdNXHhY9Hx5afbtyvvwdb",
  "key3": "2nungnQpAP6DbJ4XrQKruDmKNWkoozbFdxVSwt2ukKL1456qUGHh4AgqtB9yQgswWDXtPHM2jJPPqrDtB1ZzeXsT",
  "key4": "r7zVnnkUFkgsTzPeHxriQPtg3HGuxYtkxNPHeww3jJpdAXmRcKnTkMbhZVvUCmWjKqdegWzPwpyNKyPtErceVJN",
  "key5": "32fezwoh4eivmrXGYkVEqjwUq4UDh5KpV6hT47d1PWegknwGkJyaMR1BGCYbrpFf7byVkDkxAqbxQ1TZqH8KeXo1",
  "key6": "4R8dd4mhEft4NgreUUJCDYhP1HzYmsXh1zmCnrKcMK3pEAKMcxSbd8bRv5ujYViYxfZiMbbC6J6D4FyWjUTJZBcF",
  "key7": "3PKAN2fB2x7yRyJzYwAEwCpZSSWbz4wzdfeVTPCz2gEazJ6x3RoHM3uDEZKnnb6rJBuHN9V3MheDV1sjH2M2Yjek",
  "key8": "vLwjJHsDCFLXxX4zXgpqKfSL1LbDupaW2Zv9AJX7h17fYhJLgBXWBNXoFA3QX9DZFCKBbDmxu7MDbvwMs7rukJC",
  "key9": "kUSmtM6pXf9bQ2uBvdX5h44dCXxDs7R9irbfjGzU1vheTGTmJQ9dKoomWty2HR3pLzTpDHTtNfjExyMvyfMqFSU",
  "key10": "2mKtJEVmHcsSZC29sjyT2KrV6b4qYnk121bow7GTTmqVXtWNExY5JPHet5ZCRGn9XPBa1t8wHivWBi3bTpoQLPB",
  "key11": "45dwE17jnxLns9631bG9a9kb2iD4PRVt3dxf5xWRjvVukCbzLroEVXBzdeWpP7u9Pig4Y61vCj7vhcB1ALhxTnTT",
  "key12": "4QKS6QxrR8DxiapWTBdvkxvPZNGcrVexer7jn2M7CTaskz7pWMNxtTfU2SeptmpxMKdvw9pF7V2EcgYNqAqcese8",
  "key13": "5VoCoKs4ruzMGqTgcjKU7q8fcV5CRsKRfmYjRvdV2ZbeBD8ZWnGKt8mvjhp3V4P3MzWfqTqf5SHbay14sRt2AzcS",
  "key14": "4VXtxJfeeNBxk1mJke116HcXUfS57MTc8dSphFiY9Z5v1H5Q2KRodHKSaKsyL2BMzAj4k3YReb1WUQADCfeWegcw",
  "key15": "BXV1q7WwhXdpYnSiCci8WrxnaWSpvj9iXMkatM5BMKgvybm9vHKh1N9Bq7ZDA2hqpx3fYdvBPKjeQSYcWWHdxKh",
  "key16": "8KHQCeixrqfDE1C3K9ojEUwQHjpk48SXHKPPUtBjHzpnB4zWRq4fTLgFyN5BFNUhmFuj4WZQtY8Mvj8KnkDipd4",
  "key17": "4zCqHxjxd6yfV8TBQssK8Brhxpzs21RoDJaUSrsamWmzw4a43JdqBMTbBCCpfszk7T9rexz2rAHEAbNc5Af2pH6p",
  "key18": "5dns6ee5bqe8Vbg9amLEPZZ7rmQoBS5qEYgYrDBPikphPhzuQxRiynL8M3HsnZoYG5381LXZrPhkSikZexrxXz8k",
  "key19": "2ufxUTcJbLuiHwqBbvcq9wcQhoPKx4MuQqdn2PNM4Ha7ZKqKJWJsVF5G5ER7RWC975Aw6hUqTbmybtvS7dnr38pQ",
  "key20": "zR8coypMremNeniuGjts16QLVxtcM3h4ix8x56LRkmdgy8zt5yiGoKF8bQgNC3ZzuwhPm7fCyy6R4GbeZVuqv8T",
  "key21": "3YZoDn8M8xB51hkWpbSw1ndq8FaKHDxdzC6CfRcqh8XUTeHPiSJGTHKbExQuXpSGfSZFN2o9qMVK7RaxUfTf4Egj",
  "key22": "5RAMwSrdLskz3pGwVZKf6XeyoKFYAzpVPdfJJSTm77VejLak77vj8Bca6j84BhGWubhB2hs37RTiHzNcTAfbhoAk",
  "key23": "5sudLDAjgE3p2ojKoe3gytMi2H5M6FXnmkgNA56g9cQiCx7jtsrzPNRWPcXVeXXA2aEKsC98tzmvNpfMY6tyqAr3",
  "key24": "3U61GvTXyjaNbhfHgFukCtWjZBPzE16BaRxu7RMWmt17aoosCqS3fFgvpvBdBUrB4VhMzoBeat5omBSA7qgnftcC",
  "key25": "4bS6SyFibBCcoyWGp7eDEpoCFFeGUN3gCduD46rByNRFEvh4grsn9dZi6zL45u4pZajn2KRmrMCm5biVPxJYqeHb",
  "key26": "3BomTA6xARzjNSYT5je3nFKtatAPTuufCVJhFfgknT86DP8vGeSoqKcKJ2p2ZezhpQEVR76mBkmJ3EHcZbnBpyEQ",
  "key27": "2BZxG76Ntu4u3AzvACdZjFUjRYDXTonZdLQFm2PgTTnZdh6N3h2hsXRK9xZPhQY7WAHP2NLc6i3QuCRa7RhhuaUk",
  "key28": "2nqiAzBx7zNyEcD3Vjzvq7w5hpsW4P5DZd8bETyp9CYvM3ygxFVzpQaAp9BLyu6PxxzxRvRLGiJFHujKag6FFmEc",
  "key29": "4iY3HN2YySco2rj44B7soBJsiRRmYHtyVWsqaCugPUjaiFZybWvNpZb5E1Pbu8dLiQ2DBmkzh7YqfoHiDMQKMstb",
  "key30": "42CxXn4H5i8PWZ3vMe5ZLLV72sBDZrTvLQGqugAbGCX8CbWBRMRjAEocPFYPGbYcsjSZuXk8D8EMJCGTUzWk2WLr",
  "key31": "5Qvdp14MqhLbJNQLnMGNuAxqr2nDRWzyeXWihRPP1Wy4br6WAWD2zM7UNS8FZtYpfdBWVsYRsgRWfs7uMLwJ4W3k",
  "key32": "4Fp71pSN85KWhjsv1srpkG2t7ihfHWURCGXwK7ypyh5L158XQwrfizpHdkUadySC29sicysZURHZdP6TxWArQk4z",
  "key33": "4ApCpM3A1iiLFMgW81roNnEHTopy8CajBBLutG2jADAYuLhZQBkxV1Uaskmu5Da6YftNbJ3ARqZVh8iyqTgDhhVP",
  "key34": "4xGA5wm2Xn4d6SoroDgzgfqbqVtZb36dSRA47G7DPQ971bEBdYoAT6X3ehSC1ExsoKpKWVPmbXqhqBjte82qXfa2",
  "key35": "5yTAPi2vg9NKh9duUdM6eCZ4hLWsBZ8iRwkpFr6AtvAvouAG8SGDVZPPyifBoymqTbpVdrudqiz8LLZUJW6S4qrU",
  "key36": "5gGiy1GA24x4WKH6Kge8byoRarnxVPntcby6nxrD4rxLqt5sjiBEreUBAxSKzAZuoaoz2nFDTPXwneCD9nDEGdjg",
  "key37": "4bwnHcN76rMgyNHfUhCqnKESzdmh6xEzpFv6RZuCJFBKeCwZ4GEAE4vs6DCEMAJj5DiwPkV6gVQmQJwKEsduzqNk",
  "key38": "3QLTnRLqhj9VZXDpm1YCrmns2hSmL9pH3ikXwKFNohx7skKHupFjrrHvqrYaa1X33BhdP3XD3HwvUy8wQ9gHYVnd",
  "key39": "55tc1jvPqjvbcbQAArY5UyuuXM2xYBxMNSzoL4bpf697zuEja4rXKYwNuaE1zArX2x6vJdgXzkjdeyPGJRTKAKg6",
  "key40": "65wHU5tocRqwqv4bfa4u2uMjbUpSoL7U2xuYYTuTYUcbx6noSd6bXGkktzLQv47guXhVntcouMqbXqKJwEiafJTC",
  "key41": "oLZppmwwAYQGrEaQkXCQf1cNGqtCUrWhvcakdCdZNLkieRbHEKYTDi9sCU2A2AC4u37Gvg6SmL1xB8nM82spdYx",
  "key42": "3yaFkZoDdK9KYfJWx4t7L9quBfttjfGfR4P2WLzzEdF55Fa6hBgRbEacayUbKTK5UjdgUagB2YVEVysN38bmuBbV",
  "key43": "3atynDKHKhbKtacxFxKcWBxFCcrRokcaZfonTwp3Rq1fLSdYjtBfxchGhuyQ8u5tY2kdQWXU2ek4cZgSLPZvHUNz",
  "key44": "5kygJYZCdxaHFtzABm9v4stACxZtuuZm65PxdC6AeZVzwUQtEf1WLbqCgynSki8GsNubNE2PmCitCQSmdJnBY3J5",
  "key45": "676Wjv847A25qBat9tcVRD1znUmG8YadynXXcXZEYHhHio6jy93ZnUMo6jdwjDyGhKu4d6fmV2SfBk7CmFAkJnRs"
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
