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
    "2DfFXhaH9oP6nayyK7965Lu7TTUwNGCwyPw8GAuXyh9Z2nYTBr7t49DNNNpumn5SKuyYmV5e13LU71A5nTBPRrQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L28GMkrwdG9qmaShiiZsWwXkKSqWoHUya3FwjXXHXNsxQQumBgE47YbMgA5XZZj7GTtMWZMhCGtvbkEyo181NeK",
  "key1": "3dWK36nynVWtd6rhJykXaBYzKRHHEEacdCgHe8mULLDAoqPMWSKMwvPkx3geWJrWhwshXQK1ATLqVwJtZshGhyTw",
  "key2": "2rMha7Cwz7ASaZ1qQb2XBodus3BSf8Fir6kWsbWAC3A7sJfQmbya2ziksLGQaKE1kuDzZtvghHcNeorTBLW7ys5q",
  "key3": "3eUrLj4qVw85kyuLX4SeKjnVT84KCfqVQyw8ZoS3PfmPfsQXqA1dh6u7Y4YPaiWm2Tcw5DmiwEL3rhXdo69ZmLnh",
  "key4": "3K1iWr6VMYEFMZxaSYb21DxHUUsgfEPDYwaUtnXfKeDCeUFa7kbdTSQ76Kfhkam2nUrQHPCPaxm8m5BkNFuALT9t",
  "key5": "29FFrF8EGsqa5LRVueDgujP2T9LaQdeqqcRcmYfmLt2ZjfibPfs8wfbqoXLZPcnCfEKCkyEZrkiPENNSEWYZ3SzE",
  "key6": "4THkRKKt44Gic6u8zA3TrEhM8YnPnQCVNqjxuRcfXhARHrgqGT6PdHa6VCx3xZdgTDbcSMJvm7jEvA48ZmscGEEq",
  "key7": "2KMGQYZYKQ6WfbAaBgpDSgU7kpU4BiKXBrn3Z5AGeHpvnvRFM32NTQgfGQkEnvcYxFAg8FRDywzcpHzcxn8Z1WnV",
  "key8": "2wHhahoHn171fYy1tgACHnk1DnTcFoD323EadryKEFLkBCADjg98Vkm1Ef2q9cvDQ6MzjPy2iAdLmCWSge8LMuDC",
  "key9": "4xQFHiXazCntkccLJh8AgWJ6KsC36bEYQwX91mXA4t6BER9FyWhxjhRdPg6FFJAeo1no7xPBTxCY9AUeUb3omK3b",
  "key10": "NePQ6yF4ddhWApDoDanGvzWiJteJBj9jGEAgk8dzoawzs8NtjL1rzRPfVwqZ3NiNeUunjQbW1AyBgQvMnoABUzf",
  "key11": "44eQzg9G3F4N4kPKmBeT8i8wQhjtC5nhg8tvnMbJuSxEgX4ASQd9kVJL33kW5vKQX6psUHzjn6RjRRMLUoocWK7d",
  "key12": "2MAmdmWTQGJNZuKPKjHAvTnBNRiBbefBwjZ9Nqvfe9NZvnudRxKB9aykg9EUeQvfUuZMDvATgVerjH8jdnaJGTXP",
  "key13": "2TUqQxncd1QyutC5W2aRtqgzwy5kAAqNPZHHMXhkWFyiVab77i7PLKW3cRQCWMBWgvxmtP5gchTqbuMuQQcGeLFy",
  "key14": "4vT4NyQJYKqynFVo2GVXiLxWNe1wxmTnzYnpAb3WauETFrvGCGw2qFxqdCunCpi6qtgpshYQ12ovnp4TRSDarxca",
  "key15": "wALCuzcSDGABXJHP7b6FWDNJJjL7cPDLxKrrfHUTJnikPWLvEfto3J2ALzqWdNqhBffdE7pauoLi2bD2XMo5b54",
  "key16": "632kKjiqhnLyeaAB3YTFC55AgNCmDWQcWVfZBfhDNhRK6Ws2BQuKJrbRejouHhf4FGvyvR7GP37PP4V4AvS2EDi6",
  "key17": "di1cFbazhbcdaSnR5vS1nuWnTbHfdNgjK37449qE7YstLmYLydJTaq3CBQU7kFbe6CkdYv37K4cMw4oWawSgQv5",
  "key18": "3teodLF5UNr7kVfgVaZcSjkgXJY8RAGPR6rvbagC4fBtqBKNS8Ma2TYydAna5G2iBMDs5ERCUvNrTfFZm4oD3v6v",
  "key19": "3Uu1pe6JMdhA21Yd8oerwqESGC9pWTthfZRd8aUEvK4shT1hcASm2djzeQ1iCq2oAGr11s3WgiYvotHDtSzh1S9N",
  "key20": "5xe99uhcG7SwQ1y2SpWjvhYivwKqPv4F2cZRDK5vqciK6RcF4y3A6QNKetz9pcBW4JKiFW34uvkoje7EwXhJt2Md",
  "key21": "3k4oKGiqbgnHe35JhcYi1SNUqB1W2LPaQ4bE7N47tFxDvYsL2FJJEW3oi3148uo6m6Gmz4HmLUgNLhuR49bduGmX",
  "key22": "2nW8Peuze9v1d1iLqcucLhT5PeYrruL1CEjjBnTqB2N87iyjvktCQUqQPaK4XvkWiesZ8jztfj2NsPyUaKXJQgbb",
  "key23": "5kNdiy4JL1WvooaumAWnApbPtHgngngZV5dffCmui8yP2yAVR3dBrSj3b8dinjChZcgSzWkeiVBcg9Gxe7gV6nAE",
  "key24": "2uNzuRxBCoiwyeH3GbJxq4CNXWWtmone8oMJ3ZgEV4xPa1Mo47ZbhUmavXTriNQSuxmheP8XfWGrsRUh84K3C8hn",
  "key25": "Y56Fge74swDzoxjgfzcE7s5XgXN7AoudEzcxhNQfRoE9yUeC2NJrnxRbk8TtGam7FG3sCe2bDD2YqrgNfyMaRYF",
  "key26": "5rwoet4MGBKKmSer1x6SqfMnCkeu3SqGG1VJfV2BNSF3U7pikEqCoDMbhFfzB77MGitMU7zqBLkzFmFamUTeZX7s",
  "key27": "pmX5u4YyNQXAnbsXMmN161XDiQyRqFfaFZ61KEwK6FMdprDecgEZaRofz6LE7zUqj7BPwhUxt7d2eAxtPa7R8ks",
  "key28": "4DAfTnvYG64geKa1GUJMLbAuEgguWEvwpS7Qgu4N37kssMsrskuBGjiBW7poJGN4zskyJuAnkhnxdN1awrBXruyR",
  "key29": "5ApT18ZESB1V259QDaJ47DvtaLw8RN8uQmrykeB1X4CpyVYSkC5TuDjPwXkefUYnNFPcutMLU3G9Yv5KbA3fybJ6",
  "key30": "4e4zLHvZfQvvL9RviiycqxeiZJhuoskmPqNFcJxDSxrimwxhAZzayezeQkifY4fYLFk7bfCDRE1zL2hpjinQLC6v",
  "key31": "WXMTxhqhBaNtiCLeg7PZePgprnFazGjQBRcaAXYJTLeQ9hygDDpSNyvuKStugJE61tD2LYcyhSZFENMt7MaNfvU",
  "key32": "4Z7NTiDP81xbp6bS4nv4UspeiWKmeuri4XnYkiSKFciiVYgf7g8FD8q3F1weHzrYghtoXaCUtKDbNVZyv6RyVKB7",
  "key33": "5U2YB4eTZwjG79Nti1uth92Eo4zfoN4ooGpEoAbXmggNgmr7cKcqiUQYh2iM4i1GxgbN9YwGh9DJokr72z5bUNP7",
  "key34": "3gUd6vneYUSwQD1mKBugntyXUGuFu76QkiHzZJk7AmXdLHfdcoQmKtFWsE51EHt9XgqA4kRLrZs9GvDCN2H3fnXW",
  "key35": "wg7r2JwE5aXZ9o99bTRHYJ3yduHUzH9RZ9uuo9ZamHjQjrHYVfxt66nGThdHA7KmydgCn4onrMdSH6c7hMJ6E6v",
  "key36": "5k3n8Z7pic94xF3NpDuaxmW165vSoHGyXnmaLgmtyVrq8psrZXSaApX36pb5JMAxmMQRbB4ZER5SPTAPQad8bPou",
  "key37": "HbSmW88RmSMGxpPwv4QVLiVE3LJC8R2kKJijz312ieJp1PvHezb1ker34WvmgVm4MtJ6tRubsFYCooKPVfo4ip3",
  "key38": "FoqVhUSD6EW2GYv2QCKLqEGJ9f9Up7TFb5jm5TVT5vhB6DM8Ehb3RWN8cn2gTcc2kavxD4efVtReDXnghybjymn",
  "key39": "4bKSqjCkKckNsfecm2e9AfXWFsgqzwskXvYDyGS5PrzEJtgjEFDCrfxfUQSqMW9kHkTEmATpAtAN4RsKPjttLpVC",
  "key40": "5VxSzDN641qTC6xm74dJ1CcYEpchUC4cRo6bz23rBYENe5c1WJT1apVr9wL1CTSrHXBVGUNyvRt1DGbvNuYFFoD4",
  "key41": "4q11JcZPwF4XDWbm6ubsrEBBzMDT8NG1kkfxTfgpGG7mKEQueVUaucprsWSFn2inwsUDVAUyDW1KxcsDciKvsdbY",
  "key42": "nMDm2M9o3Z7TQuW97vPMeKmQBN14vs1tt5SqPZSYvAGA4WdEQg29z4d5nr6eWorr9GkQ1AuFDPSGNFf96ZPd4Fz",
  "key43": "2ioTS7VWXLzn4GLRP3X1YHZqs5sQgkvqEsw4sEBsNX6QGQjbKq7dyASptKsVPwo4qsXozztiA8pFq9xUx14dfdsK",
  "key44": "LD4AxpLQxD4E8L9jUbCRMaegUFXpEuBgtGUYthT25sqYCU63pfMRy22wZG5f81QbQ3tBo33bhxaashGzRVTj6T5"
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
