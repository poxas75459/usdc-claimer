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
    "4ZEov6hz4R4GAQc36GozsezuQCRpKvz6YTmvwxfMLjoVMWjsVrKRKBBoSG4znyWkH7TidWJ2iq983bGbj4bfRH9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnDi8UrtX5DyRpuGPBQX1uxgnojKRE1jStPAW4GLoVwvuUwBAivcJyLkazrS2AbRj3QVkfCGE199Xeinqo2oGoz",
  "key1": "31cFg537P6QM3FmBiFz3kEZDkvfJT9emwcMY6Fs5Zw9xKEBCoB4xbuy21eHxyQRKyye4irQK7XMjWfXs2BGsPQRN",
  "key2": "3pRftXxMhZ248hFNPMLgpDX5wAtg5LbshUsjRFRUy7rb5ygDjAqV5RtXoEkdqnGx2DqBvMvLFgkwj53wwTNY8JHZ",
  "key3": "839F66EhJhsjcXfJszybnWb2siyVBtzQpw4bsKPE2kL6p59aas1Phi7fAdzUsYCyz6AWqwL4shya6ugorHRdNBy",
  "key4": "3y5PXez5j1NNG7cHyS5zaTgKv9hoh6jpQGghNZpqQg9DGBTXmKHbEBcZMriiG4f7zSJHmgqQPFN51ttowik6Q8a9",
  "key5": "2AXFZoRNjBTYJb4BuvWvyRuLPwBDeCHizhK1TrV4vpdLHgZAcokL4pRfdxAG7sdhqSWpjgnRK2aRGjqn6QLTUfkw",
  "key6": "3i9xApbbEEr4YkmZ8VHRYVqMpScfsGqq7uNSA51Hyqf5oN7akr2MkngAaLWw4xgstDQg19gg4FNe28mmuQFwk377",
  "key7": "aMMiTb4a6j3frQkkfjtWSxgxMbQBz4xF778abFZToTjY7ev3ML4KkrB8zj64VA2htHPk8QhDAZ8QEduasrqaSAL",
  "key8": "4x8qA4QbLnDW42gC2aNo4fHEEmkyrKfFu6ih98hndYsoURAkqZLDCMURutcRPQPokvedxSbFFYgxxDvaSzdbaEXZ",
  "key9": "2f61x5P5Z7GS85Abv9bEV2wDbJBALx3THwWxpMq6fdyHKipe7NRQXrN2JatzdnsZK6DPBYDoo5xR29oMFtUPiWBE",
  "key10": "32fjdPmdSiW6wqd6s1uPkX7BQk7DBwfuhAUw862oA5MCpn8th3PjpWFyZLKzkao6DSMMUdbXwV5JMTLgM6VdryDR",
  "key11": "2rw2hfAYb6ZEhT6xM9NURyFxaVEtPuD3i1ZmjyKER9qd61n5qxEn1kMvxR8PVhMT411eAHcP2DiqVvpB7Y2dUUk8",
  "key12": "4ga5Joo7GB3hyawdoiQd9A3rBLKtoYKshuCDhvzs4nt4YCMC1BdpRNMK6zkjcp7snLh2G9oV1efJS7Pd5B8SXpbc",
  "key13": "4iR5mG6T9jQ1VY4GUgg3NT6LNGEidz7opYqk2qt7Sk5zoDngQR9UZHt2NrMiF3zq4c9RwdEeag6zPKLMMw7HRSmU",
  "key14": "5DJKKxKWu454AXFFupGqS8geTGgpidVeaLtd1JysxZCxJqE6SMMoJLUAskptQs68HDyob1tZFfKxdLs6FPYV1NuF",
  "key15": "66Fom3xJzXXH4j4CpPSVbZT9LwyieNJ1nteX2kkVApbzYuJPJtMQQEzFRv4i62svfQSu3sDrK8xCLqWVPR19sXz4",
  "key16": "2jZG3Pug5ngCZSAKRFaHWVVvkKeZPT5fk2v3ybABM4u4vw4z8zcRFaoW5w8kPyth641coKYHGH8mCc5yVc9cxMLW",
  "key17": "37vPwsVc9czUKgb8aUZS6VRd3rQ6Z18HSBy8kv9jczrd7wjFiMRVj7MJsUntS2umpiWr5AstTWnBnB7dHPaVUZ2g",
  "key18": "oGNaFiUXgYnGstCgRNrR8Dp63D6fc4HrL7iHg93YBmsXRfYF2TYoNQShkaW7WLWrnFuzhJm2So7UZSJtH4DxvbE",
  "key19": "5r7XE9XF9JwMmwKaULv822iamRjtba2PXg3WAD3BLiT9TWYzZgGL1CWSeEXLMjeb1GiDwRDNWu2Et6oFstJ7eY3v",
  "key20": "3Ux5iV6NNin9qeRUMvzPDTj7pWdtkPCAXYfQSkbzczG6wKQ4CtW9jfqbftPQYFCdLBui6tzGZSPr8bbrNYfh571f",
  "key21": "5vrnSdDqRF9GVUj7VPSRVhQWck7q3rs3PyzdYC9mAHMuHNEeSAENmRFssQtuygpo5T9wAzUhNKFhLYbEiNUbowYj",
  "key22": "27tkTvmCvECxk6ngS2CPXiVSCyaMJS8w2Piyaf13916gM3fJUgd85Xgp7LTAvRu26vzbjWScEgYbueWz2TyABmJF",
  "key23": "3yVohUppHwZQLHJs3icdkupsu6o1asCH9nPBAfbioKbwBmKAsC8yR91uC9XiqwiNBrW3EixzfipZPZ1VtUcsn34j",
  "key24": "2W1dUhpApoCEKpearyi9ob1JkU2TutAQNbgpLrNqT52p45c2ZJo8AaLjUqNPwbGXPodqGboo3b3wqLjL7N4SxFha",
  "key25": "4ztSR2b5nMyB7Ef1fecWqTLEZXnULWJcdbDJ9jFGKLaJWKJ7FbL7y8F9i1kaxYmyF2VSXzwrnL4mUF7rBubYXjxU",
  "key26": "3CgatrDmPLKfAxpVYfaBj7aadmLSyTdJ4a4jqQ8PkmLhSfUKLjiNSkMNYqrAZZbS3JFHWDdnkpccPga8EmvrNW1W",
  "key27": "5Ky1nXN5dxTM1PcEjTEWs8P1B7b7fGMJodK9pgVSM2Z6jn4ihZDDCH9EmqkZPixTr63TGDTuoFJJ7bnmWAxdQ15r",
  "key28": "3d2wbbVvmcVytKBbB7Mo2VRj6R3utcE1mrrhwpAnzo97nxm7iZF8y1RHVNxBWQiZGEtMjEBzZHV1mx3sazCWvAGy",
  "key29": "5dNyX5mDkPTpGcLaDyys8GXMzqbCMwZKU4BduFxfyURnNVwX3A8LqnKF2Bu7KLRJqaVPm6Qpo745zyf5kjott2v",
  "key30": "zEWQTFQUcG3Rz2raZzjjrvrJX7DzxdBEKKNPQwW2txayLtJ3R3sVktuSC67xyHaUNrLm1EyjS97vVuuUFJKxLFj",
  "key31": "4S7eGfHarx5PUyuEVqMjRoaWKL1CSWQPphvP2YwQeSbsCPYKFu4gWJ9TTncbXamhWRhnuHEbsYf5douUKwUVJd4N",
  "key32": "2jSfVJ3SeiRQEdpS1haLNMktEwXSXam7sUNAisfEggmfFPnZtiePYBM2f5dcM8xpkJEgfFboQcDo4iUL1JdGvUib",
  "key33": "XGM6cfnaWfVLhRwH4EUUMXLQj5h3zkMcmazG6puT8DBq5YWYv5bpvaVp2CWUFofsDohvQ2vAGteaQTL9sXS4ieN",
  "key34": "4ipt31sPfBqySYXDqGcuqFPud5fUQjBk26G1irBohaoJHZgcCvNC3CgEHhw3rp8JDDuAXvoHmRR21nxpNFvUENxo",
  "key35": "3z2a6QcLXtV21etbw2XuMSjipVpZ277CiZSBVZiKffnLSRzxQB8NFSShYPPawhvUzGXKjctREPvZawYgeewzRExF",
  "key36": "YLqNgaCF8TMrk5EbvUUGeAVqYfWRMYMZND8CtiVb159gzkCb2fNeNgd2XV1Q8Eu1JEbtWam9nSZeQbPpCFmheE5",
  "key37": "4eMaQ97Dj9UGaSK5bJhBchyiodfQmpkC8BPF3TVTddeRmWzJMZ9aNSeETXAGNYYH3KDAPPYQurRhY6JmmbUVrbsE",
  "key38": "4Db2q7ndMz92oyzX8h3EsYZD9cKtzwixNRVvvTzxfKdnfA4f5aB4LYpgvYESNh2xvQ7cAr2YZoFb743U8bocxBvz",
  "key39": "AsPn1E2MSCzniXUR794JqMbrgrJNeYAuqntkSNi7SYzCWh9KjN9SyhgbubfKbX7QG7fX4NpwvtFC1i2xYSeZikr",
  "key40": "94jk8rQSYS3zzG5Wweba8QAHRUkHDdvv2StvyiRNpMRwrGS4CsLpxvaCwDQ4o5sAMSUEHsnrCJWC3Yzg6ceQZod",
  "key41": "46zzPmMCs6d8wNqgrAQHTyRUB8V6E4KmLxvoHuVgmNYL7ukwMj35RZjzta7pD97iMNMmWqUmsWtifR3x1usaZt6G"
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
