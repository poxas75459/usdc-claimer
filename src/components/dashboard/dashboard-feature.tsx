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
    "5S2voSWukUcnNgVVHUpd1qts5L5otmyjQpqeQEVJSBSSerLdXta7ExCEAbcsZsLWofLAzTdbv34Kp8tdvV57oxuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56x3iih5hyhspcsfLk5HhR3SXmpBNtqvWKXwR4SaLwXPNfx9mdMBTKRaqKVzJyyUWZuvCBU1X5v8DahvuGt6dRez",
  "key1": "5vQTQeQLLwgHGHfpkcaLAR19bseqyGSWP738BmiUoCCzUh83tztznw4EnKKwJeohHZk5R1y41AzjezMGZedpCw1S",
  "key2": "5E4tXy7C2h6cxCB13X4N15p34aUEuJLY2NTVyJQ4ojp2yiJmLCtXih4L2QqiDJnjK3Qe2wGn9TxREnpC91HM9j1G",
  "key3": "4xvoqp2DvsNq99ViyLJE2foA97fdh3gzTK7UK9GVhTw6P9cCGErzsdAkCYGtGaFvh2M3yHLyxwfegJZAL7Kc3KBx",
  "key4": "5FLRpi4a2SzmacGeKEveaiQ9aJLWgLK2sZsmK5UYaLtadJvWfnase7KqtSbfYhEkdCX3reY76RtmD5ovZPmvh6cZ",
  "key5": "5NP4Kruk5ZZAuv2vYohZ2fTvDfRwK9MxtcpiFC7FqSrBximKujRZNaebDEf8Le7PYao9xK7EZwFcxvoCJ3pp9kxB",
  "key6": "2nffrej7pLszEFyLYTK4ZJkK9y2c8LPMKgqXMaoQtvJpHkhJVdVTUmd3pM5M43EkbQwu564EBt5yNYt5GmcAQBsd",
  "key7": "3yV69dhRJqqw8w1MaN5CfdDFQqxn8BP5SqQsdWAMjSeHJyFDZk2XfRN8zpsrgFFH4XBh75HQ4tgF6jNM9SFG1Rea",
  "key8": "2KFKYAfdqPBWWZnRzfsavrfwUCYiciTtm3N91aPKU5NSm9DQXER7TcGBqWS93EYKSQ7Yw74sx1aDNWiMmTjzs6pw",
  "key9": "3wpiTdXoL3tWWDpbYcAeP8YV61o2AQ5ZqwciBjsVe5rRiAoL2AAzSpRf2jueNfRz6fhSwzARhaUm1D8KKWUh6oP7",
  "key10": "3HfqRyoiP4ti1ft8A9w16FeHBNSjGP1BR681YWP8cW8bHmp23BthWf5p8ZeoQ2DFRQGWVN3wBhK8UujiaqdrQ3mQ",
  "key11": "2U6wczy1uF5PDcvqC4mvHtBkYCgj9oi3Snt8gPo19uEMBusfBbNwnLyiNEodW1YQVMYpnA3iQuqVsumV8JiVoS6Y",
  "key12": "3b726puaoYp1fWUC2w9mirMg5D2RVHR3vq5x5oi3xdTc82LqnbRJdeUbpmSME6WvkoGiFGXuv6hAFnkYowEG3wab",
  "key13": "5t9sWsqL9wTCsxMHN5b8Mhr65Jf5aiNqMAeUpBPMkCpnYsdZ1pa6oEdtCBvkZrGE1TFtBNZHAY8GbzhX8qhGg3MW",
  "key14": "3fjj3Ci9vdknXvdTSkJEG6xV6gdabbiASKfqakprBucgvwYeY8mPA8KMw4NSd3vjrcUzEwRE6Db5vfQHVg3iiH5p",
  "key15": "zQ6d7CkGKFjdupYZWLpP3ecYgP5W1uTYEbMAQqrRUvhqvK4CYqfFxrEwQZB7FD2CwS4tRDcbF9j9hQS4cNVFyF1",
  "key16": "4yawbk9F8HsBRLsWTUH9gwi9Thm5z4KM9xoiJFED3uAe4L8EYYJbJmLhwZqHGtZGuQffEfx5xSyiSvuhS6gN8son",
  "key17": "sJYRf5nBjf7shhVg1GsVoLvmYSBLSDjvJux27puGK8rcj2qzfkAbSgHBMhgzZU4T6dcR218E4fqhrKYUUNJsBuT",
  "key18": "4CiYvgBjrwY6f3C38Ptffb5QbPWdSkaLnLq23v4epLqcK7jxpkTJLauUfAZBHAxihNwNKh3YFWit96GfAx4t8Vbi",
  "key19": "5dQoWDBudjdRCr6BocnAWmVnRqgUu2fsMRifbM9cmqmoQ6o292CdEVp7Qj6RUjExLJFwMH6WYDTMa3w1uKgAU2Fy",
  "key20": "4ZdeyoMAGEBUGqbkWoUPPT91wai3TepyumHBj9KUC1VSUvdzkeQEbH4TVQb3xjZ8pjDTehUpqtcX2wtMaoq2MXpc",
  "key21": "bw2nrzDbhiYSRJEAabVsKwmAeJ9p1a8veUhBKQmwQwzzj7B7N3g1BqKLR9Ye1eYpejaXFMgkXp22fbgfwysBePP",
  "key22": "4Kqjmm4XafVuYdcxZ9jUD4DfftYKM2Gcx1juCJAgrqKL98Adb3WHiHUR1vVLgVfT1eHVfW2gvttWfBYoau1Bbp6Z",
  "key23": "5p3E5pmpbnZSm74uoMNofQ8ef1RzqBM27btFNaJteAJcptsF5g7a1Qmyzu6pbaaMxp5kP5xh483XthcAnMo6XqKm",
  "key24": "55fhkeqsJPSeEGSQpuMMWomY93cokoCDdz1iRHWnHbMuSL2E3DGa8Yo4AM96nFgP2NpWTXRkXo9wNZCegDnpujWU",
  "key25": "2ATQvNU8AiW8qhMj2Ar9sbEryb95j78Hj4StDg7js9GmwwFiygbAcWe9qcCcYVaWKqTF4tqsG78VZBeASza1i4AB",
  "key26": "3QNTxSddAjzeY2u3wKfyJBhHEryu3dPyZeBMt15e2GvvqEckMJdyikxDvk75Lko979eyx2NNEGQzYz48sJh4kDvE",
  "key27": "4GiLeLPVV2bzeJDx9QypjwnTbu858pBHfKddqRntjZr1f7uapofpBYyT5H4zcCE2ZNBH7p8mUb3fKqSaDaYD5n6o",
  "key28": "58p9i1N4YNpVXZDDaC5gvXcv3HUVAaUAtq6PWK4mxVKkPgxyrQpV3qofhBD4Cti6TCr3etmVuFG9ngVVs13FaB5y",
  "key29": "5x1C1SeEmvdMEs6X1hUHDMcF2qztSm9FwW8fHknXw2RkYwe41vDkeyL8H25FKjpWD1DBrnboKESuaiKzuPNBmC4G",
  "key30": "4v4dgHQq3nDiiDRLL8jgbxQRn3W6vU6yNyqUSPuQZB6zFaftT2vFdXUh6WPHQC85SFDCT2h42JSdTbe825vjuQwQ",
  "key31": "2tjS4c4eEjdUW2suiogL1PaCsedCRVDF5PBVQPesedgAx7UJGJHK9NiDffHHcNFBgLiJVqmCug9RXoLAUNjo5rco",
  "key32": "eGStKTeXwde5ruivamyb1D26WnioNnut7BwmUjQSfKRveGyjW75qM6RmpM6ULW8ETURRCVRQDo3pHfa9CJQxqUX",
  "key33": "5utJyfNcXCFonumFzJB7bwy9XRpo4SGWcXtDRTbe9kiqeXLNDPVhqTLiU3MNBJsCk8PX2brxF5JpFJTw6atwN6Kt",
  "key34": "3fCRU8vxCYAdLGjPPdke7kueyGrZ7EBciGXDp98pZCwBymY7sF1Epv7wmu1G3Tf8uqjbGipAkqMYXhg8vjatPTMf",
  "key35": "5kMrQdqMvAVnKQpmHx73by6ppyMiwWd4feGT8dHDYLrL69S6R92fRo5T1FtNT9DFh8kTcmojvj2WfxucdmxWj8MG",
  "key36": "BSvDB4LoWgbvowSYicPioWA74s4aksj9MtDZTZ2UVG6cYdBybee8jCNCGzAJnXGZ6MqWYH1Ze7HuJEzHEgpEDz7",
  "key37": "4qkJdRY3pavLxidYrKqX3tiWRgKnZ4Y2ZJePhWsr3zCKqvH4wLx5YpV3CntuQXgqnWfTPATv4bhxaC3ExTcDb8uu"
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
