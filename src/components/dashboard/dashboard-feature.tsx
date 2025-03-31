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
    "5G8vMTzfwnSVLyDj8VSCdMgnDM67FDkzBYGoFeQ6KDZfV5q3X6Uw8Tdo54xtmP1BkbKaYssijADPPaV87LTE3Wz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHhh6dtHBTJjduZTpYvqoVNGV29b2t4FRW1HFJ9rqCmUpstoHcjxAnMy96f6uTNMgaZtAdRDH7taPKSRE9fvPNe",
  "key1": "2hXBS1weqa42JN4qs8WJQiNCyeSH4GqAtdJyUZHVBGTNkmjJ4aEQvGwFkUoUNzadFpMSNTZ1E6YVL39GkhYig7T8",
  "key2": "5qMPwABD1esqd2h54eeo69RoX9bQLcKAYYM8bBs57jqgYv8A1x8HHJvKoBqPAdiphR486GeLg2TyTkDYqKN4Xeef",
  "key3": "mpWM3meoQMRdU3xSGrUGQrVq4wN1k7ifcX2JrCexJkTC2SK1WUqPgG4mZRudbusqbq9jXTSbrN2i8jSU6qYeDNj",
  "key4": "5jnMmxxazfc1Bd65AKdvPSRJF2vqU7WMAz7wEMzCic9s678MJheLccagCMzPH16je7Qc4d763FRsmgKiw31gFK8W",
  "key5": "WpTJSnm6mxaobyTUsUNZZ9Fgo4w8krnJCScNpWdRyEsgWkimUgxpCxSxUjdZTf3cAk1jjptVuYiNK6guPMT88ee",
  "key6": "4boSr4JknCLCKQWQcLnjWkxXddj6EM3746gtFGwhBs5it8gKVUR73RMPyEr94D1ucmxr8YXssiea79Djj7rg4gkH",
  "key7": "4mzz3P1BHE5rQkpLxPL96qWuHYLBb9ywoGLLqgwReGLC1AHN8sasT4qztxFi94qp5xBHhmSXJjVqfw8MKBvvF595",
  "key8": "34SLdwXKqbyYqRGbnkDAeMUZEAAb3qHdbFBSGegtf8NGAbfvPCFxMBMMqbe4QWRy9pJc533hCoSUYe2M66gF42tb",
  "key9": "3Z925pn61HHv8V8SREEVsy33Rk7CwbMQt9pyVNmSGavcRSw4c2EQ51K4w2XppytRVsgjtx8uveTguoMiaSGsvzRK",
  "key10": "2T2DLLyFvkjBARk9M2XxnAyJjLeuY4tRv78r5sUED27APBVtFk1Ump9L1o8MN4ZU6U7fd1cceE9jDXqNKHwAvxjV",
  "key11": "34awCc13aVVioY57LMFPBrJgNgDc8USAB8VtccFEPUQdh3WGgBmcZiKLJjXBJsKZ8hgydegmy5yqrFgf5NPoj1DR",
  "key12": "4dM6ch4V4aQgTKAXjpTMpegD261dSutexJYPtgtQiPDQN9jAHffYr9EBep4yTbtc3JSuqD5ReAS443LPweiHzaRE",
  "key13": "2Rf3vhPJxtF3UQh9YLupbFqjgUwkGpBF7ALbgoDeBMNZYW6wehU4PreXruSvEPjpPCMb9QoaqjfHLEJqi1CW7C4J",
  "key14": "3tPGfCfVhvFxUURDySMCZ14tgAYU6o9PbYQNnCwXKYu6PR5Bs52wediboh9psfqWH1uXhs398itXc4gP9Vd716Np",
  "key15": "tXjrs6S82wHbs76cJfQz3bp9YfQYYXvYBQ1SMhWf422y4VuZqujqzYEBCkGT6Htm6zKMufygLo7GAEztx1UdJDd",
  "key16": "5oKnHhVjzKgu8T5EUC5BnPicNbEmnZZwNyK6YUe5vrvY1WCSyNKJuvqGt4AdrPc7gRaS4b56x5JDyjCe4BtVW7Aq",
  "key17": "5xuFFyYHyKB6G7Fa34HUKtzpZrjpK4TEvZGNasWzpKQ5x31yFsRhjGFSRb4nSRUeKfdc6kfNuUEWKFSU8xzEdMkg",
  "key18": "3ZisCg7TvsyYe8dwTuTyiz3asTG5KDrihbaAL3vb2fuqC6ip2ABfM5WvkTrL3nuzuMEFXHCXkMRkiQMqbxUzQTZX",
  "key19": "4BLptq6Mm2ihGw8f1DpWZVDuEFNgZPuiSgnm2uJbdqZt3o7BJFG72L6tuhJ85AbKYfBJGhFQ4pYmKYiJrJTSsMcA",
  "key20": "j6e1WGmw2j3apGGCQFdYS7zMqbHuyPgoehqAXdkA6cs7JqU2qh8QUMDnr1s5vz978fJLYp8jTjKU1K8UDyA3MJY",
  "key21": "22hMRb7ioiBj8mjrhLSGFztGPQ5x4KpTtfsuXKbRxMyNEKMGvfDSgk87WPsUbQ13uEgLWLEFLVYzDVVmTd66vdDc",
  "key22": "49z8fzV7P17JtE1SvfW2G6G1qcnQATWdaRZwkTq6mq8LsT4Zex85MsgPQP7BLgdxEKRpX1Bzznwry2V4axLiHF3s",
  "key23": "4PfCocFeYEcoT7bKyWv7g7WzysJZSNogrzyaLZSh7MvHGge9ZfEdTAgSQTaJ6qmzUThXFgo7B5WmYMLeoRhiDU1G",
  "key24": "2p8siBDjDgutCURGWZhAUzz33tZ18BUgsP4CwfQ6RvfpUevBgoHfEySaz9RkprGCCaZJ56Ys7TcPBPNDtpTm5e2J",
  "key25": "WQz66bwRaWxQrE8AG932KwA5feYKZLiGPrwiavRgo11HwCmVzvka8vnbbhLi2R5MtsjG7aaEqMW6DahHe9nSaHn",
  "key26": "2P1qbBGs8an52ekScKEVNjxUQze516bbBKo5ByeAU5PMntnVNAiSPKFJ5qLVrMmLuwBnfZRrMzwHtfbAPzQXRwCz",
  "key27": "3bcxAfJ7MV2Dzxy4DhR16qP3Cnm6cZAJfHuGiSustibfZBo5ibbYMcPoJWsNex8qG6oasXLRFkpP2bHWZfnxRZ3N",
  "key28": "66bSH3A2R87PeheMyJrEKth59ke3Dh2zH1SYPzGPkTmRcPJJCufPhL3NmwJ2d71eRSvB7XiE3Uxk9KmHuHvDUoUy",
  "key29": "5dC4tpigTvzKzvV3eRZ8qwiYiNQW4tB53c6A3pbKEbp6Dki5HH9D7KTwb8QxeibXZXV1GoQT7MpUxoccLYuKv9ar",
  "key30": "4J27chuYKJktWPQrFGbKGtnHhLKEBCnmQCamjWjaUkJr8kFmCWuGyu1Ar37tPAT2ryJCyz7AgXojq4eTe57pnRPP",
  "key31": "m4YApzATjNEn4iFS8hUR2utHqCU4c8RnXMCzo97Dby3QosZqaqosUju1eJCB6RbNAAvTovAECxCUqbAkDVEtoZg",
  "key32": "3hK3dYtnSdkGiZWf5c7bRAyjQCDyACvCULhRe4UaWh337F3VuQw33wyD2XwM9qMbNC211XKnoKALjPSbo34HVwjJ",
  "key33": "2JAQbo2fkZZDWvire25sVCNV4qBGcMdCSsX94BS1QYrBNhozAfoKCrhAbwFc4S6tZrQCQxz7FN5Gk2NFipH5h5mB",
  "key34": "3HAiR65vQmAKrfEEZQeNXwgbjLJT7YzSBrVeydQaY2kPCHxCYE5gXjHKgF2oJdUG7zcD86is7S1DLhNheBtKF2eo",
  "key35": "5aX6XndYnxXESoNJWRUygohNWTeRkgeFx4RSG6BfMtuzHfDNwvbT8KshqpvLJoRvWVuxhZHvYd6CX8e7rccMadwG",
  "key36": "5EWdzDsPxAwXZyXQiLCQUuMKnqdhwVVkMn1bBJ2ZKcjjGHTQMUqoa3DCq64v7wG3RfB5ssb21T7R55s3kCYxRyQX",
  "key37": "5WqFM2ZSZM8zPccnq9FG9fxEKJFJMHxh5yaRALT5y8FxSk27Nr5qZ5FJD1HjDbFcd12RHtwmBo2gcHnUu612GySr",
  "key38": "38EAv4odYfmfTFrU59qkuDuo8YU2cxmfxYMP5CL62b2LWb4wM8x8ZDRYJ9yyZsTVG4PWVXMdbxhxihMbSBGe1zrE",
  "key39": "nb3NgWJZt3XeMHwuuyrBeXSjoEsUofjETq12xcDTifgtBgZzzSnkFg54kdfyvu25qELT4PrFr99NxYaSzP3jvhp",
  "key40": "465TF1WpoGmdsptbrbfgs2mm6RgkYDunv4ibjV7oLMNgdStPRuw9CdFZu1bMoC2oaqZdtHbaDLEVrRp3ePFrSyzG",
  "key41": "24jKjGQivV1r1tv3SVxH7LaAakU5fBnJ4Hu7jQmSt2XNybSbgY9rWRDVPrmSBAW3jq9Nrx1hDqM3cFRWU4waqL9t",
  "key42": "34WtqTpxn4sP8FZLPufpedszdL7jW69ygDEoRkDUKZEXzwzBbbrGJT31htS9FDrnJjMS28uiXL4MfqzFdjrLpsds",
  "key43": "3JWsfR2MJicn84WaKKMEBjCtoAsCi1A7kLvwZq7Nc7VqCfGPtYuUCUQ68dCj2n1rA9G1k5QopDYVtvKwtxJSWtRm"
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
