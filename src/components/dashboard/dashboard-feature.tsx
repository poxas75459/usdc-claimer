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
    "wTHD9BmZ3wcGkh2WfHHWCXRH7Mx3TDogETrvutQGYJiQJUgVzwoTsPeTJrcMva3FuPBQB449S6zn1scostEkeoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ervB3Wses71uxhmwqmK9VPJ5EVJ2dezSLmUg5y8wqxFtDRTZJCFjt5VWmW5vDgLoCy8R49VfwJSxgW4uALLuG1q",
  "key1": "4T8YUPz6MiE5TzVtWHK8q8h7WpExU2dwuWgmZYJyRvXxpdho6sYQunqbmA1Xo1nsKWKbxNLBmjsxuZdw38cMjaXw",
  "key2": "djS9m28JcM62Tv6TRNLcoPusxUEajUrbDjMmSFbN5GL3qckuSNAMPUWnTuXMTxVzwtYn4RuPA9xArgJpKVYacbV",
  "key3": "5CYTHxAeU1ysNa43TPLWLUCxakbEMvob67hLuKhUE6pEmjPPnJwu2hMJb8LgMN7DuhtHZmBm3ijN1oDXxkSU1gBW",
  "key4": "1Wk5NX1r2UWVtAxDDz2MfTJFxb2LzKky9NtTtgNS8iCKpgKGQoUU2JnsauqscD2gDZTM4czbg6RNF6BXTEk6Jzx",
  "key5": "5LmeRDuEufBJVRtKPMua9MKZgjjzkAWdWopQmUEPXTwzuFffXcEeJrCJraMN8Mn7fFXheFnJw73SLVgprviCFcn5",
  "key6": "2tvFkp5TQoespfTFvbu8R8XCM9hhxHDz7xjQf7nYWpH1UAv2UstqX438hFnzqMXDkGLLbtJvYBkJpnVKTuARDpLU",
  "key7": "2SpeDArMnpWn54GNVDZiAojHwyfySRdRiJkzhuNkKsmnVjBXcNMz3EgDZe3uzEqgwmFNhxgE5naeRzVjxHwTpWFr",
  "key8": "2E7cHyR1wktjunTckUz7vNgB1DXwogKfib54mq6d6RSEmAK1MRYkfB1mDsEtDRXzxz6nVcz9bAXtrc5dcLvvdMbe",
  "key9": "4p7thrb45nwYaVK2ccfeqLU8Vrd2mRs4yAgMaYM63SH1vJSxXeEJwzMVGTQQLq7PZEFF78srWrXT29NXtE3kSKv8",
  "key10": "BdbAupQdiAutZ4QGjSqesgb1ntwhHi76M2KkMzCCBFzvYM7j3i57XGqpceEXhmKkwsFFV9kpKjhPC9BAX2bspws",
  "key11": "5yhnz5zjL7qpRsDkp9VhtsN2HurAVHSxwWPkohUongYb4FVd5Cd2CmAuThscPd8GhT89pCEgVDnH6x8Z4kNxiCcR",
  "key12": "z8osQYxDx64yjxnKkAx9LyFeqksGsKAFeL6gT7kyFYK1QxBTtSzQ2hEL961KUR2FGHtecJaajJaPXoX7LsV2zCh",
  "key13": "3tUeBDMS8y23pgaWyTJ8EpyJ46TTdoXW9GCsvnxqmrDtxfUY7EBPm6KGMhTpDVVFhDuW7XvdivrxazVqFm25qRCK",
  "key14": "2jmbx97tEydFpCA3v8BmqAmFQ1Y7M2UXk3N523zSwp7EzpRrvfRYLF1z5aS7tuYJc2ikvaUyGccXmxQSKAEw8K66",
  "key15": "2YUbwBRHukH9mz9tGs733Vba3YSsEvQ3JExxBAkwEUGw9AHy1rTdNy1YH4MTFRGwAau5WGsUTZv5Xwk2vdnaDn2D",
  "key16": "258TfK1LgUKTzwHggxBge2SPBYftc5jS7TLs6woVMTyaWsCmTiMFo8ffqMBvUxp9gW8tMGbTU4hy1ze5cYG1v9a8",
  "key17": "myj83CVYNYcWfZ3hcDwAJwxcmMdU8kQ1xTpdBACQy8n2ttKM61UuwK9vpQ3LtwBzktoX5mRYgCf7YU1boh5AD9F",
  "key18": "59tGTARMBhDAdPeo7xZFmD7kuSnUSjMxMoS9iYw6t5DBjV9jNLPvpbdM7g7eXBAxGUVQ3KL3aURzc1GViZbycEpM",
  "key19": "5EKCUdzGaiiKnrYW7zujsiHsK98cTYuQkEtuNXkzdBKFv6cekWmMdLFZEeCKoa1sCpPq74oFugCCoiX58ZJFEHpQ",
  "key20": "23PdhAKSSfmDHcu2DrKoMnJs7biy4PCdVbb41K7zsTY9uvPHDmHr2iurcUfZdbpMaKygMa83Xq5NVWLN3VDSrQam",
  "key21": "3bNk1M2SXSWL3M5pTcDzPzhdHUQ8ARvpmBJiKjqvYLgoyF1RsGBSiF6J87hC9gABkPeW57mwZatHjUGr3BV42jhs",
  "key22": "8KCuombA2aSg8FM9DbfBrpZaY8d55qUZavAHA7GtBqoWuU47nikyUtSNnhzb5Q1cek3r4b3jdXb1GshjwzYAv1F",
  "key23": "2EJftAsAw7B3Kn3da5h68S2UgdAVhZm82hnCZKy6tSr57F2n2tAYPPYWW3eFD7ZxTd8ydxxNWR55TB6gtbbEjpQM",
  "key24": "2vMWfQ4DLZALfwajrdL7tpU6KwkWuH9iNnBdroM4Gz5aocF2QtZRUk7NMNoQw66iPZfknp83Z729DoGSkzUVJb9R",
  "key25": "4hnira2i9tteGURGggfifBxdfezFfNaEi4UiPkURebdzHYpmEMfb96xKV7629EjZfU76dA2McDYnkRn7rrA3xp1f",
  "key26": "5DqV9rHA22ec8FBQukYFR7Zypbpsa2k19W7DzD6bvJmASPCdqWqAae2eP4DrrG6hLgcMxy5zvBEK197d2YZhVQi6",
  "key27": "3WpV8snkL3yV27nRLyL4a72xN2GgzDQ29HcQuiqxBSXVdGQmDouMnFHmT3f99MaNxLjqZRysG5QZLyMujeZA8jBF",
  "key28": "ykFzDkcH1QAA5SRc8JS2rjP2ZZAWerbjj2oo736MnjWM1QNTfY3DSXoXSbhgCvLwmxbvsMjPtMTKXyUdBXqrk6H",
  "key29": "2G7WTTUgpNjB5dMpHQkJhuZcRSbnMJ6xLx6b4vWNvxT9Ja2zzcjezzRmeBkKTgJBmVrH7u2gaFfi44JeXgc8LVr8",
  "key30": "61V9yDtcPq7Cb6U15xLtMfoKavdx4MiP83UXn6mKsBojqNsWuhu3s7W9XAN3FF5doHCeLFzQNufKrToXc4v7Y1db",
  "key31": "2dEekyhBcFSco4DYy3JQ2e4KHciMNrfqisnSzrFhnVFYV7wSe6iLMNp1pwTjSRqd2zPkkRMh132PdTsVJRjScZR1",
  "key32": "3GbyQuqiGVeAW2hoVjK1FGZsQsQ8L4mMWaQw4SUfR9Gu2j1ubabZLUmaAxRQt6aBM6JZP8jAiQbgnTMhBVvMjk2j",
  "key33": "28kGAAgfifPxVTLTUs4xRaFTPxauLFEXqj4pgDE5nxpJzJ7L7EH4WQcyekfFv3NWxAEfWVrdyjcBkihsTqgkwakW",
  "key34": "3dwDJLov7L2Q3QHJDg2GfvXNQk4YxAJWxKwkghpn5AMG1HtJKzDdCi6Z85VDZB1MC9osQAfYczUb6AQjkbdXnkA4",
  "key35": "5etG7MX9EsQYaAaPhpSW9UdDt68iRAj13SNPL9JoYmziaoWwHTRqKmLWXAET93UkdV355qVYMUeCSkHgwAt95Xhg",
  "key36": "4C5o2RVL4LwTkmGXRq7oiE3mfBtnSoiUssu9uEoUuG3GRhhzeUtKGTUZ8qpB7AYLdU5RMRsqtxr2JEPMeFAxFEpV",
  "key37": "SZki3mqbYGr4yPSh448beaH8FRPLpzkp33bU7NzmgPYShN9M9GJLeWeicbZBmxrkDBaJMMR18qG9TdbEHNQ6xJ4",
  "key38": "cyX7pqrzWxAWLpAaeJ9JH4EPS4zJSGKD7GCrZ32WwCVT5VCWXQcP5WiVLJF6MgJmP1QE8ESuSgWjLAhcxLmNVSp"
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
