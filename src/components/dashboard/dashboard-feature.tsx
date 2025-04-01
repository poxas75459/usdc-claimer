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
    "4Tk3JgGF7mY4ikVKdygQVn448CRTKc5swCbHFfbNnPcrf3zUJQNadt7uo4FRWHsQYQYEWXLNSPvAJXP79G9bYuCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6461qeAg8b6DGxVcDzj2rQGB6VsUwGSXmPG3iNN7gUXyQkrhKfE9g4mAE17s8MQuYzHGsHTHohv7QjoccFKdijES",
  "key1": "5ggX5yYzdgsHZqMkkBpZnCuVq2PAFNeAq7DstxygNkKwwn4sARZy6RFz6UemLSsPPiEVDvXdZTDxBY8zQW1FJhuc",
  "key2": "22ZyFMWafUNJU575QrhNWzwPKCDDiUwn6GGss9YWfrUG2FzraAhvsZFt81MU3gVf9VQQ7uETzTka4k271XcrUUgF",
  "key3": "2F98heVgFtdNrwmgMbhrNoKhNmTuLtUaSNo8VCnQwtCjdepRXQNvMCcUxJ93CKGnoayCdpTQiaYv6qR9WmZCjWr4",
  "key4": "3thNJo9Xar4VTmgDwCNJXTRRYjHcnUmM6qngBfXEWwbChTCpf4ov1ZfbVAD8nKr36XQzpiLYF5MXErcE5peRB19f",
  "key5": "33Q1aectKhsAhWDRee8Dj4XEzySouArkmTeeP9xWzJjFTdKNzcxxb8sgaB7ys8ChdZ7dqjkVMYZUFNmwmtvdq7Kz",
  "key6": "5cjhySbnjpzzXFgXL1paJdy4JbQXVRsHGNH8E238TTg1BZePLK6mrNsJ8ATAqgHSPYkmKdFuRwnEzc55Wr6sX8vS",
  "key7": "Y8MVSdhJKJdb1wYAPKttLEeTiLoimkytxwcSNyY91wceQ3UKg3yxENjwFKZVCXy2Pgq1ABSS7bUpyoMzcisakhE",
  "key8": "41xSPYvnFP5VHvgrSujxGL7ho9BhrDbCgQpHeRBTy5s1d9in77zGZ5DhZYT6MTYfoNy2QHQUCGGHJcmvioYD8cFh",
  "key9": "4r13SJ4rPP64LEC957Xk5VXJfG5UaEj4MjVdtTQQE8u9Q6RYvc9SUVuiSXSVMnjWTozBQ8fMyT7QK8AWA7yuL5uv",
  "key10": "4NB28uanhej3xvFiNL6K6wBpWJB2qhFCuMvY11J5p64rPavL7Zbzjf3pm15tJrdHktUa6g2yMkzKAazrWnnEa8YQ",
  "key11": "65bhvShJ34rT8xESgH3WoxZmMKsA5N5sbRxtAz6wC7iWKP5zqvMTPqLiRC4hJrznQVHpey2kcwSeS5W6oJtK93UW",
  "key12": "2z7vdGS4wFLeqLUi2AKoTvCeFu6FPww5CfQKqnJ9zLKy2Hw9uEZETbejqggyRf3KLKi6zMWe8pY3aBgboTH3fczu",
  "key13": "5SCSjXH6dpcgGKefURT3xTmG2HwsRn5WzH1BYWeVWbPgxtk46scTQnvUWsCBVDSre5z2eZjPABJXwt81jmt8eG2V",
  "key14": "3STvALY1V2FtneuN2GPLoZbShkPdwenMq6DKx5pCLMzn6SJBg79atyGgwK9j7LRjGpgdGzw35qEepU3RHdw7y3VM",
  "key15": "tUDDEXSM9QVqb9GGiLwNVDwQbLTYeEHTC5CjMXcpUk8K6PASRWr2bDHaMh1BVvFtuKDvJGQbWfd61zZ9ZTDArLZ",
  "key16": "2XVBhWoXutqVM91krHyBX8vQ8TwK6BM5qciFtQvZusZcU2uMfvLkTeGMppqMsaPRrgpQkbLWmeAVoSvX6dbAoEH9",
  "key17": "4Cie38RcYbCo9ETf5M8Nd3kzz1KUxo1s8fGgY1bS8Q6EMjrDeb9SEpVvZVmXVy5G5zeGs3LsMdGR5vCvTbt7P7C1",
  "key18": "45UEv6mvJ2dg6Jam6ETFNR8GPaZ4EkJ5xhyedu19VXzzqcvzwgAr3HG6zPMPuPFsRziVZEcBd7MtnYg5dBPHTjmC",
  "key19": "2G5BdQXoWuxauQHc7FaHXN9emww7fecDsLG47PTGT8jXFt7EAdMApxhcw6AzqBGEETGKrZ2XtBpZKbR2dPpcgR8G",
  "key20": "46eF9RhvZLtgcQmJVntXk3oPKmejg1fkNcTSm8Ahy97hHi6vHsHKyCFQjTF8C5JvRurucMqtyU3gbEwB4YCA1FJw",
  "key21": "4k8bxEVcv5wUo3fvRZrsrZigmSZ1yPo7kaW3CLVm9DU8HExhaTEatYZuty6xNcMV6Njk8YBv8K5W9Hhd91fgvRSA",
  "key22": "5F6K3vvjeXwTZHKBjipDHmBWqJShPzxwCDy3wvTKTZynBTuWxuwkCuYHNCHq6du8kND9vFHFjahhXzC8S25uYezn",
  "key23": "QXKV4iaHazdWxJQtfiEK9aRo2SWLwCi18UuaYzyjbgsVjWXSwQcH5CWVvMo1S1vLBApQVJop6dFsJmx48PNB2Gk",
  "key24": "5B8x2kHrJGrWUBsU2y5G6stZfpgX2RQRHC1wLnmJ4e5fmC53e52q61iuVU7NfrsoLvpj73TqGtaSR6XHHkepWaAd",
  "key25": "2FVS2AX59HSUojwXtxqegrxXCJnyuD8J81b6UHZb8x99LyHWGtSYVyYMK89hVHHfFPFvKKjVpQpvLW9deTdLfZNZ",
  "key26": "45u6UGXrTTNKaZ4j9eMJtg9NUhkVLrhE5UgTs5rJJgz4XLQ9dpQmCkv1WJPZrzgzywpeiXZANUS7vTprUyUbYHLj",
  "key27": "PYwFW561H8AP3qWXxjhGQB1yeAJ2oQTFnmmbuJTrNg4dwTVmP2Hpee7qq35g64sBViWJy9jEubeY46ipHkA1CdS",
  "key28": "Wi8xCkp3yh7RAyDCCJpMWkRmLpDTYt5KmUmcz8A3d76qGp6GqbJncm3PA33P7Q9oqUU311C6f7tMVHUjQxpATgm",
  "key29": "21wUzBtvuYeFXemaV1cLawFn4ERk61SRYyD8Ets6rvS4JLFW1PM1MnF8zMwpmPBLJDVh4iCA9chZotE4EQR9sPhd",
  "key30": "31rCfMi5SeNVhNHrhG9tqizpNEZqF4PnLFvbMLcxMPARA2GRkaz21ivdBjH1rs43NTvBtjeVpQU2SLnyemRJr7cE",
  "key31": "PBA6xxph6ge2BsxdbLNwqTwCAqWS1h8ndbS91pnUKE9AriNCEuuaoYcntSEk9k6qcu6X7JL1KDihdW5sXbToL5a",
  "key32": "4aC1NVzQnFKCtMEBPtjw2BYyPJc9VukajEo78JpNy98B1bz6edTzaWdwecuMf2zjj6SS6XVhEE5uGaZnVmYJmgi",
  "key33": "UUUgtkwJtrmWw8h4jvcqzEcQQtiGEfcHj3yh9DVdUtZxSrmAs7gUmt8cttiH7jcPx7Xdssdd6tScDcYjMqeoMKt",
  "key34": "Azbk1YsoGMPe5a77TadtckX2xxvr55TiDhQTHhnhJ7DLVd9oeXJX799Qmj9fMPbsmJ8ZrZTN14P4vgPLkYcysBp",
  "key35": "ZRferEX4PLZKqhDcfLCfLRUcGCU3myQGqk9oo22e6HFbC4ioexU32RpTyeinoF6JooUByU6bEuuNY2dBsFMgE67",
  "key36": "5WtJaTzj8goYd8QHZYmgQk3oa72C66Hfzk1d2E4PkZWgHmdK3WGkR5wXDdvmdpCHLPTrs5LeYn9PxRsu6eATCE6J",
  "key37": "5XYBDK3hVsguf8WSNPc1BGEWaMHyjcqnVV175vzBLzJmwDDpct2A2iGjAFjcGA3T5WGVZU8ZEwuRJyTENHFUVUb6",
  "key38": "iNeXGJNwd5e7FgdG5y4KXSwB5X8KXv6pn4uzADTWdumf58atJxetoxE7vWYJ8EXKoCcByvowGYRdq59dR2tEX51",
  "key39": "4Z5DgYuZmzP6wwqPZgCbKcB26zRFZn1ZYuVMzuq5HJU1MJUdnb4faw7CCxN6HpE2qNtX3vuMDUXAf2LtKwP3gtHm",
  "key40": "vjJrFzXC2qt3vZnH8jKgkgBXURP8pWtt5wCjngj35U8FUfiF15uC5r11V5YyNBYeLSJcshv6HrRsg9wi6QvUEbp",
  "key41": "43KkD4v21qYU1ujmLgpMik3XmEZRPn74zu2kbxXhAMBtUF5g5J7QQHFyAanakAcCjLdt5y33YjjfazcPYWZey2xd",
  "key42": "25cSnrbiVkAoPw7hUqYnKzEBkcRgL5Z4Zcu8az9nyyBUxK1GN5ZkZ9cQMAKy88g3hV4K87CBCqvhsZGBf6iRdEvx",
  "key43": "4y1iEG8VPkKYxoiPd9KiTEdhWS3Dsp8gq1RTFH95MovT6iZkWh1A3wies5BkecbQ4t9yepLNZ5Nw5S6f2gtLiG6R",
  "key44": "3qgKja2LGMABDy69mFwHepbzAwSqBSLWPzdoWbaJMgYExkfo2fKYABEjmC8SCNmsM4yf5zqPws2dYu3cJG9FcBwa"
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
