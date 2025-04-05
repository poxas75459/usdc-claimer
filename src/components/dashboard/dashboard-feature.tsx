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
    "3oMHiKbWgnvZD6AeDM9VL2eW8jbijnSSaxaggvXjvQNYkPAnNaFuQVnfY652dv9H5Vh9z26zaj4jTqMrWWpFAQtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDKnZbTQ7EmisiCnDkVNVDydbQqSjm4XwAkuDrh9pisydJm8gWHkkYMP5vjh428kQKXFLohPfNfEqj3KbbKf6MC",
  "key1": "48xkH6PhHPK2u9hyjYHmTY343irjTS3pZRm2US3LAvWrp2vCWatC5LucqdbmRYaGXnxEZX77fmNAYbAAnVHRp4m3",
  "key2": "5z3EHLXNDh67pVF5mfrkH6amvEuHJ84sQAu3mNDrSsir5J81HdDapbmdWAWyTZM5f5Z22HkzAUvYN7jneQqAqi5C",
  "key3": "3YQuYHumdtZE4iWqLPvZszZ1WSNGocgBPtvj1mY7to5FNag2ZD3C4dXGcAxqLS1B8G2vmqfAAKTzGLPrNSB1jwRS",
  "key4": "5dvccRotFVFFQ5CU6cDSxeDjkkfVwN5vZBLcRR1aNbu1LfgzYTpmAKm3u9tVaLD6jfWH4z9okW9n8FE9qW3NvaQh",
  "key5": "4mtyPnqbapmWTomnBAzuuWA5u5EUNAyTiMFLcXEeHNizUAvL7Ck9KNaYh3iUPpwU43UZw65NSurrpa7PPz2dSeAB",
  "key6": "3kcagano154sshuMPkLJL6TP4j1UYpPsNxyhfDJ9xwP9iJdZkqKnsgAdLoDskXaq1jJEfhM668FHaGBFuc6MKNzL",
  "key7": "esFJQ7WMc7EoKi693Ukh1iDnqBbSxaX38voGKTdoNme792mzpHMGPyWaQKUw3Psvfech5hvBC4LqnmTznQB8Gim",
  "key8": "3cJHmXZfwbKagvNJW5fWCwUL3ky7euMahHDTmkWmceGTitqQWJhsAV3dM5VRLzDXHbkZNRWyHw2c8UHHbu2yozeJ",
  "key9": "2TY1p5vLNj79C736uE4ic7XS67FJnV6KikhZ7Eyy5sYoEChECCUdPjWhPnTewgTqrf9V3UeaaauYPfNz63fcMWyh",
  "key10": "2drFUgyA5xsjW6ayR2mrcgg9WbBEuENVfqSBgqfybBDHzMn6e5ECCpvnruETX2MVzyTqH9B3xxmcn1F45TRA5BR8",
  "key11": "46WNWm2GogcTM5mQD8TYv8jRMP8XFZjD7CCxSYXWwf9KurnfVoK8kZPSGpD4hDgcdYxpyzZ2AhjS2TdALHYYxuPP",
  "key12": "mDdGNT5YGjuQ97zXfTTe6gkMD87JRRfhWnXTaXDgkEg9AkgZ7a1vQug9zbbgAUAiwKLeLf6BpYuAHZ9cyRXVBR9",
  "key13": "5ahSNC9Xeq6NWQuKWh9M1GqFhgiJK5NKJvsMe9X64rJHV43LW7Ti9AosRfXudM15f5smF1coRj6h8BAj9D6DYF2v",
  "key14": "4vXpkWsavusReUJC81WvpQGWTEc1CCZPbnKC4hK1717hFLwM4q6mj1uNnXdkqSnmCMQeMTzLPC82GjU4oNR9xNPU",
  "key15": "5F2N62LjKirSmtkgW5BCjaNURF1r4a4d1C5u3uzLLy4gaxZcuHeDnGriCfodCxfEhTx6cCmxGAbFh6rvXzJmd3Ka",
  "key16": "bkACS5TdT6GbyYvp5piZXwTUXuArGiXxuC5w712YaFFqFkBfkRvgkDTwp4vvQWHjZSsRPwAazTfGPCqC6VEd78g",
  "key17": "33Uh9gQNjy15EVou1i9rZZx8w6yqHQpKhH8AyaNLsP3XGL64kXfCJqNszRZnsnDCkhFLCXbwWHSGpgqwhgsuVLQq",
  "key18": "4EbB6YXMV4vqf6pW5ud3eizfeizBvv1FKXLxxP4ETci6jU4FihjDPLUo5EsxLdtJ5zxyMLmcZYxtx2FpCYAaxnnq",
  "key19": "4nuey3tiZCD1WCVq2ZCE1oTHHdHXkL46beVs7vvZC8S4sRVsfXoUsarqx4mEhB9uAb7xoK7GEccSgwC3VKecrM2S",
  "key20": "3TrNXwbF7UnhTtrc8MAtMtKXZrohgahFFTXzk9JD34krFjKwffMWeUVpnRaZgKjbjxfBn54tsFWcXYD35oyNFZci",
  "key21": "5w26wE7VgVjpo9Aw99rPeV3QTFMBn9qW7Sr7MfpaYw6WTYsupNJBRv9oCdXPJcYPQMsb1SERY7LKa3wwkisvPVgG",
  "key22": "3C45MA1YunrLszNkS9QckVhXLsass8qtR64ye67CKjbgbuuxy8oFnjgFT8SnJiYUcpiHbUbReuqnrTrxKG122ZJD",
  "key23": "3tjzaTCaZ5Fr4c9S1eQx5zkZvFLsunHqhBFt2K1PqTyn9Q1HcWnG27ix1Ps1os3SzJAzYJ9rB8QnZrAQ6V1fXdc8",
  "key24": "5HA2nxynxnVjnktAeMbq6d3tCHiXXV4bhpzf29H9yXxWBRP4tVAoe7Rtz8ZtAqeDHodQjR5VHAR2X1dagH4i8BqT",
  "key25": "4zkC7xpmJPXf93qJkLRquECcBHCaieN1CtkSch4ikaXAtu9ZBgZZesoCht8DZyw6Xt7hwQGae3TP39mS6uAcwoiZ",
  "key26": "4aMrNsxDVSSLD3fbVrs2fa5LvhNgTaSY35MgnzyWokrwKzaDS1um8Tx1vxLqht3Er66kE9B41SMasG6GCMJQrVTH",
  "key27": "3Ao128BD6pUJZZQFFnDtwPqPcJTUqAe5cFTrLe7qNP5Q3UdUEk2ipFHhdont92nXktrfWRrzyJMHStYuau6PKzJB",
  "key28": "4pQD1Ptoud9ENqNHeYg7SdgDGQF7pUgBhdFzK4bLSr1eY1doFizuaa38ok4RTuj44R784MzApx8VAFrizNonNJ6T",
  "key29": "Nga28ZARBrti4foyriC4oF5EaSMTn1goLt75VxDvyZ5rCwZxXk4o95jo3ieXRn6PwkVUirb7ryhA71JZ9aR3unn",
  "key30": "2vGxNXfLnpHUcjytuxrWhNpiz9sSugcJGYJvF2hTHA5wAE8tfGnqf8xyiwy2wjz3zaxguYPfWz5nVeh4EQE1CaC6",
  "key31": "2YSD2AvVfmWGBUCES84uJrMhNYZDjhGCja1KisPYXN1HykPkayHYW17iYBNGHhAdMAWdfgjCoZcZZS3vpJVytWy8",
  "key32": "3uKQqAMNBn7xp4aZr2sjMYqkbz9Lu9nmTM8zaHXbTc8f3s3L2fKJXZnz8xnuZq8gEqKkpWbf4a9GgHAgjx7hx1kK",
  "key33": "3uV1BMRAqr7WKQt5aojsfDZTUdZ1nSJTHEsCEFyYtgwmo17bMSHTq4KNQh1CVFY4seGgF42uk7LsNHfYy6hxNoCg",
  "key34": "34VQK5XKn2yJ6t6rVfYs2CTcRsNfuJjUaatVYun2R28Dmd6UktT7wjqqFcbJ32EJ18X9MgbSVob6h2mrTQLfeb1k",
  "key35": "2mYuooF8yZ7EZbtEy8EkPSVqGPdhhnYkrMXZHJG1WwSPhEhqs7ygmQgAWL7Wmt6qQNS3nPoUoWzHpfywgg5Ftf5H",
  "key36": "59G9LNjg96e4u8zP2MUqAfefxtHgK9VdZ3dcWwGqLbAnHgPRHfpHQZfNfnquRUkZqJ2GfANvbbR8v4bTEHy6UhLT",
  "key37": "5ycisBsF1E3gPVUj5cZqVwhX4HMY1bVpXH1D9merRXV4qxBYNsHp7pxTX4USLe8MQmP4MRk5D2rLxWLeae5mwAVN",
  "key38": "5FMrNzt6ELGNyWq6xpAGCn2esv7BR1F1CmAHLmXtARJ8k4KfqH62Sdn4DgPQ7RpGwFfMSdVqm6XKyuiY1KVz8gSz",
  "key39": "3eD3fgYHSuQizpRFHBs3T9RtDZtWJmacfGGYqpHbKNiJJdFddFnoiakEMNBmoAV8DuCCBeJEgtnF4R8WnxAVztrP"
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
