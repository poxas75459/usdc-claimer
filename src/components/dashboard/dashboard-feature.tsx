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
    "2YanZQsuh7CQLVzUUuJxUm6URPAP7NcgzNNqpqppEVdAhGshV49VuAvgWXua6zLn9jzEtic1cGTLoStZQpjD6bpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgUWCZJ6imdPdGSB1TkBj1WM6yUJMd36kc2z1J5JVR7brDBvHkfd8DupKSCY5G5v1xvzjXG3WzoCYbPoUo2boWX",
  "key1": "4mzPvBk2PuRAcfR8Qn4MafmjxpCimekdpnviFmJ3516BwGD6yt6jwcN7u73U773oeLrKo5dV8phDQqZuc9dGWnSU",
  "key2": "4woJ3pHiGiX7xkgdVrpFQBj5MfJo6CsYkCni9MJu6Ekyv8hLxFoQeGZfsJemQsySUSDC9bffYLntu2b2tVzRamUZ",
  "key3": "bywwaEUF6Wp2PqDnF5SiRRHVDPWxcDQe9HU79uC1sNsPvKTdk7zyJc5babBr7PEFomkDefmWMq5iS5YxFKapXH5",
  "key4": "2N4ushdsBjXNV4eWUJN7zyEwNGK4WHFhGCU1EMoo7T5c1T5twJYMhhSrqpPbcxXcC8aWnpzD6Fy93N3H5MKK6Drg",
  "key5": "dDBcWTsmk2xm2JkkzsidLmuGpkDh6HsHkgJKBnTRCxkCrBtxYF9TxqyLuVKdJaTcraABs9cVRSHaATdFVyc7oGw",
  "key6": "4CvrNpLsxXPm6A8rV6KKWppwncsduNVQh2pkPfmpFXoe4h2MxYkMJ3UdnDcXqpuYhJ1AQwtw7NaMGSWYj2ETTnKf",
  "key7": "3vj4x1ik4c5XQjDzHLF8PRqjzuR6vCbMcPoqg3BNYhfSSjyC8TJLtVRhyD3k1bfXwkjDTWLVZh4ZM7s1KvAHFNYT",
  "key8": "3wUY7gVnn8qrLCryd1AWe76NiAj9sSTZqMPkXMynedBUTP4deiyR87R6ZUwo4Ay8Tqgke5cQBE7Es6dxBg2dNoDW",
  "key9": "eV25dtYDKFSr9oAfT18TXE23ABCxWkthWny7Zs8UEHtimybLQ1j6sjac9RLL75CPhoWC355KeAadjpB578CdWSf",
  "key10": "pzRg6jrApx4rnMUy4CgEBcrMy4R16TuBq5VXHJpitWHpoDoExTwg54nADfmGfmfyB7RzsA343vvszNWZt8tATyH",
  "key11": "ssB7ZGvXmmTyYHEoq4Q4ALSi5h14KRs4EUE5eU78QNcmUdG4R92WRr6a9xCesQW28cyNZvfmZCHKmMjxr51SGJN",
  "key12": "3HRKQeoFYsYFT5PN9uPjBeYo2G9rNv9vxucGLkgftx5JUhYAh2xLAVT7LYqEvQSfufHnww98uWLm7m3a7QngjQAo",
  "key13": "3kw4Shaukzj5LAzGKAy9jtJccT4pAkmaJhtrkLEPaBjVZCXUP3ExyEkgCoAfktjRYAPRiAHty7YNdz71CnM2PwnT",
  "key14": "3a6W6krhGJkaaKJLAUnvknTaQHCca4BVP5GZiQwviwYgYLN9Uf7QMGqWjxFCqBkg9wMSzcSui8o5PV1RZmGP69YE",
  "key15": "L6bSHAeDLpmvphewy7S5b3qT52NdfcmqGtpCpE4BTffDNHwNCA94gACtu5ttqXsi8v7RqYdtX42JFxPCQ4KK7jZ",
  "key16": "2TZK4ML9V8VnSLcGuTW28r5wKYGtTUFMyVdYjMzxfk87UdTEZkVphL33kbHYi6d5iscjnkgnwEL31bPMuckhRuTw",
  "key17": "4WUNfXVF9xAjBLjieqksyV9mxkAbp8pWu951rAq7fSfPyaKh8WNGB9xaeZWE2hZXbsLw2me6FD7z1emvgDygha7n",
  "key18": "3Xq1LAvrVu4J6MDLQ8W8z1XtqaWniodFqb2DuZmGwuSqruNRD5hdKpru5Cy72oh1cqjk3BQLfK1zQtZovA9X7SiG",
  "key19": "5qwG6dDvHGoXyWdcGVRw6e9ifDbnePg4V87ZUpjNLofG6WLnRRBSKVZTVvjFYLeiim8ynGhCtGK8xEyVRCgjYKkR",
  "key20": "3NhPF8bJsGiXDhxzXD7qtHGxFhXxQMgxKALYrJ8XyaycvTkbmSYpbkoXvrnguzQ2o7wvs8irrV7ivwxGAWiZDryb",
  "key21": "4uzzwqzCs1PmFGyW94PDmQVv18S2fw93mS1MydPTA7wZ9gjNNnQqibHs9c5m5sDticqEi4yc5Y858pRqWdbVadz7",
  "key22": "2pyUCGjE5yGsZFxWf2s8aATxvaZkKanEL3D9XYvxqqfdMCWcAEPY8UBobRzix5Ce4cNG9bndo4FY4xrDcpcthaNC",
  "key23": "47UJdMW65ScBbZEYCJW4S5LSgHSvXEn1RaxxLvLQpZRjD5cNxSwuhPERDKidySi3F1ZNazWd7DmTVUc2pyx8TCZJ",
  "key24": "3BjNi9Z9zR2o3JfeuhbDfagifSrVUrhUAkXyTbosWCL7dvMmTZuM7hCf1LUYNjfRmoC9ULvFBYa3JX1pEZxCGSbu",
  "key25": "5JHBuiBt19MD4Dj4977CApqTa3nTWx8MmRDRWas78vZBZzCQuNsjvm3apzbZBuTCBMGTnFQPkU1wV65svPf8nQ7D",
  "key26": "2bW6hmNyffs2yVYk15XA1rGugs5EfQZyL2Xp12p1cJDLzsMaUbFcnkgnqMwkKbaNWr1DWDXLQpp8awwToiBPsm3c",
  "key27": "5bJbj1Fd4Ps41w8daAR7jMQeGY2G761zkF9PkzU6NGKeqHMqxRXLpmm7m8kKDU7e7xUPpvpYTWiffT7t63JFhCx5",
  "key28": "qV968G1NUZACt1JPrYMWLi2WSpaevxbxBdctzLLjBWpP4WNkqeZsdgXr1QHwr8fGLF7SkUKhsNhCsgpTmXSDVn4",
  "key29": "5nYuCpUSVRUysUuWvkYmkEee2GjHnYYpoJ16zTMiNjvANvqnWCCXHig2tmjXrr46bVjQdEAg1UVTTzHTgpUqWvfR",
  "key30": "5VTKciCECs3k3NkstQFWJQx2vYwKNZQZkwCAmFS8XvdZzvBvCnxJnd8yx8WCc98XYMif3NgyeeRaN3hcKsprgLgN",
  "key31": "21HNcDGtQgJRvmow48xoPjZGVmcZHbfff3TB83GaBsXs92LzHYsCcVEWaQtRJZLzZ4ztJ3aQteddUsNsh65qcWma",
  "key32": "4m9f9wWcq4DtozWydDXwe4qSG9SqCkWQjTiqR2k2UFmiG2g5s961QBcGunfLmXJSSENq6RpE53TKghz2h4gvczRL",
  "key33": "2h1zYgqGiRSRc3JGSC3y5MbJYbcUQXzu368XqfRGAJc8eZF8Y1CbqbQErN98eBngvkYN1ugJpcuEtHTfAvKrnLNv"
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
