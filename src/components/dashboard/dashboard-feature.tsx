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
    "WF4Lg1Yx56rYh1LQFGC3Pj2UZqfBaJqGzGQGako8EucQE6SbRxBwr1M1uMu6oi1PyHyN1cLkQuJYn4tNjDuB9pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLJYAaBVQhX9Q7RnB66fC6YZsbE16xCTLfER7n8oahDGzNrh9R7FCM3HjtcqPqS5q5b99TbitgM8Y1TtLk3C6QU",
  "key1": "3kEtrVX5mQFVUPTAZAAxkfBjpbsfu7kbhDXUUASLeF77jC9GApFk5RpWnJSgFZvBqd1K41LLJycxxnKHpkrAE8kC",
  "key2": "5M6moMDZnQetsCmLbPua4NjoFdk611TYPtqfiieLfGqnSnREimjqrAELnDm7UQHNyCz5mxTyMCX4bgeVr8C3YvZR",
  "key3": "sm3sU7FBGSMCgFEfpkRhdHWaKN8fLSZX627J7sJcSzkmFhtov2ogLGmAXr6XN4VWfGMREgYUXkZgCLrwverEBGn",
  "key4": "SK679TDcvMLWzo58TmrpRrp13ijE7GqZoqC3c1CmbkKC2MM6FSDCGiTA5bBLsTfm9F7rNcaQLBy6FQCSPRAY2k3",
  "key5": "2bWXX5ShRetmRCR73dqKa7PLHfCANDc4okniRH6ygjoNMXC5LC4Er5HUpsR23hpsysLxeZucwVN52AczrjwR3SG",
  "key6": "2gWHMpF1xXaZdSyGpBdj4mGQ797tSquJihxGbYm8hSf3Kztu9PNpjmRaj9spUSW8yYg7wpjJAxme6zRFTGwfni2z",
  "key7": "2x3d3QoJGALEpZC4CakZXagJvhcfxkXG92fvxJDrgyuBdbmJjkNJdGvQLGEqbD73KCZxx4REGEDAqSYTihWCvarD",
  "key8": "VzaNAtDTKDHz6MYHPhqXq9rmQQqoYhRxLXAWvT9Ae1zuRCYKfst7fdTZKfs5VTqsGaNuzviGsUch16MXLX17dsJ",
  "key9": "2P2W3Zm2bLhe8Ach9MXHA3NJbkC57sAKxtXBs3f4S5vzka8u1ejdvTtXzZwYeFaWASdZux4BzGkma8aPu8TwrnYf",
  "key10": "zbHH8ngg4BEauzWrC7J9jXV7tLDivWumJ19PRxBs894ZpnYVLwNz41QBoYyLm9bWsxJ76GzprxVCGrP7r2g18ma",
  "key11": "54jRp8GZgTrKYJtKnzvEFsP39e6iZVwN2b4ivb6Dz89rc3NQVcHBtsiY6XRRHsupARcSTuvM6sK9tLjsqCWv9YsD",
  "key12": "4FjvnFxmeMUtVx69aWEPWd6Tm2MWRxsVzSAGgKgbDfg5caQnSUWjuCunoxPZGev8FAmNBbvLvS72Y1TXogu6u9zG",
  "key13": "5iKHzsxp2FiZiXnkymA53xXHQJXGuDPMHM44vRdQpbeSLwR4Gue4rSnmqVtMBGEdNQhpsWHFcG7fgKaNL5Uo4Xjh",
  "key14": "MxrgvYwkgaw2iWbVeTZYLMn3CprB5EC83ECFgsBtpF4zsRFADT1WAGBt4M7cootSKKE3UujWjshuXSsQntSHsKG",
  "key15": "2vAwEDKWy8yBCQqRBgvoevXpyyJgGcBrt9GdQqPs2yZhWzCVc7WcwXQX8xjkRDb52jtj1HPcGk9puwV1PuHoS2rt",
  "key16": "5GnaqpTKZsWWwiWevNrSmY2yJE3cXrhANj6naUkcYKFqDkCiStqVw6chYaasTKEpq7Qhj8M7L5eVFNsiQ8eEFPae",
  "key17": "AQiHrVDdCaUbJkSybnyABydcdTpawDtZeAvryFK1miQQf9VJPmUNUHEQzaZrhbZR7J2yqUM5PRnXCTWxWXX4afp",
  "key18": "YQXDYbqC3NoZiTqpWkAuJ5agwTL7ZBPyGohNVCcbaWPvVLB81Tw3qbd8KuYAQB1vhFdWCmHyUcCeV7L1CGKEA7r",
  "key19": "3j8KhPtC5CkexzeToRZAAR6U9cGZZ1ZAdDEL53r2fbSQG7z7G4oBLHKDVTANNXxK2sC7D6XW8qC65wstVTfPvNs6",
  "key20": "gEQMvdxxxXCC64ufmogAj41bRp2RVfYqLSpkYintizDbwNX89orM1Huefiz1eSNmzxDhWJFUn1ZgvPWsqeyvRvK",
  "key21": "2ZwcBVnQAGe3GqAyJ64WBRTvL6iwC3QFGRwwSabpip3hbe64UsYnZUWy9wcSDRBYDPChm5AoToZhPv72z94JgJdv",
  "key22": "4R5FvUwpsk5RDcqJNyiQtXR7ahagFdgjx2R2f26rYQoKmbUorTthYQDUsUcX2EPCWRg7GK1dSYbJ7CYUns3D4pRY",
  "key23": "57W3xSo1DDNiKhjJdacfocQFwVet1FTS4MwStoe1w6C25H2SWD9c78JTHhguF5FGuX3MMEQjkERU7g6Lx785AxNs",
  "key24": "5wZ4JmkZc83uwE6xUXtYj1UUcWndmTLx2R7iBk8iaeFcFviHPz2gvwQeXRWcwFfxXhSuMLYB6F1GGGsDN9XJCT8S",
  "key25": "5vp1cpkgyAfMSqJd6EQ6HJH1WdotCtHcQ2wxBMkgaZVXgagfqrVdx2N2LroLf59PJ6LLM2GbgHCT4YxT7hN42C9p",
  "key26": "4P22hyz4rtq9hqCs7poDtn2J4kBQXUgRotNae7ZhRimnwfgynAMaKwsxNfhD8vAfWWgfSLVK9JZhhWHbSvBLTDrS",
  "key27": "4pcFBWXVN7JjtQVjAkpEGn4ErEA6JJH1v1dJpE5bibu3rYEqD5zgCLrhzARtmpCGV2A2HXKJRZmJV4853Pr7X3D8",
  "key28": "2sphNMCcf7CmiwdimGRsq6NRg7aug8tmihwRNzXDAmqo6Ywwhz7pZSxuiRdEZzgk3JtQ8LiHm2FmQgYbEc7yNSaW",
  "key29": "3ZrpkVEujfweF6D9vc5kTsjZBjCZU5iL8aBKG919TG3oLmvw1mTqtQSZcmjUx6ZrekSS7JBKnQDbvvX8aJadMRkn",
  "key30": "4MatBmz3E62VAibUKkWWxv3EFyWHtdymVQBTvvGgkz7ctdkeXmjVa5y4DvhmmA4gTuZqGKtPseoGSdWMJCngkhCQ",
  "key31": "3h8EM2v1h9H2ppwP6M8rj85bGCpSDT6NRAmkx2SwTVDbxDpJ1jaszMguBZDUy3sbCkaN1sbRqEopXTn6dHAwDhTb",
  "key32": "4Qda7GpmWLjSbvdHEDYB8i2Sk52HeBikZF6sdfP3MASfCPj9pZQ1gJdErTh4zsgowSwqG4PbLtVpwMrXGpDPp1dL",
  "key33": "4CSJYwb4VMeiVLJ335dVCr7BcRBUp9SW2FXvVgvCzeJDeNKDsvHvkTVtWKEvcakNyZup5xjVk6AFxzQjpmDPDw19",
  "key34": "3bRas9UGjtYLcp3tmNTEidgZyj5zBnqoZdeR4WF4fK19om7qoBmigqizvM4gwvQfoa9whH4uW9tSQTLMHgR6pyzD",
  "key35": "2UNUL9H6p65ieh9Tiz4Pp3Rs5PsQS2hHptjXFfSkP2W74cqQVSx3tquNPYupUS27hkYHAiu9P21fgE79BNveeUHj",
  "key36": "3UTKkuLJpwReKtfpZfJtJdgM817tJ2LBPVG14hQLxLjM189awc741wyGvKowVU33VT1ksonnihmv24mURMyi23q2",
  "key37": "NwP2mivu3hbKEN1zJDabaCjZ9sh8U2GYVMkS194aA6166CzJ68AsUJMh7WQfkX2pnfZMzskjN78xriQKeWBJRXk",
  "key38": "3eTdumQWVQXFgaRwCEzoGQRUatbsW2yRbqHvYQhtYAjhBcdWrGrC6MngZybWSBpCokhYrQ1og4n8V2X4z7uNx35z",
  "key39": "3ascqipizgjhoncGzi23PExPz8c8T1m92uQMmr8GVtorxna4m9FEEUB9mtGDamMN7izgfPi4BVYd3yiQtpfv9xpf",
  "key40": "2ZFNZ72dzt4SbBPeTLwL1JQNMiLJq8LHU2iXB53NXYbTigKYTz3GCR8Pvo7AQup7znFXV7DoxgJEW9HtECYNYrim",
  "key41": "2qRjNQ9AEDJ5SKbPCfVgAZu2YA91u7iqA5XuwvMDo8MLTA4wfye5YtMivYkDsnJkndeBXP1ZLmfZivnkGYDSAueN",
  "key42": "28bEhtrMR2twZCzwmGHGQRMKcedac3rwehv7bwaAL3zHwFRsbvePYAeNDXgKiuSHUtVuZz3TRFGPk558UBb3ohoN",
  "key43": "V7WnP44KhuRJmz99ygaTkYW44A5XHXBMGpz2GAuT5jjaDY1KQfp61PgHNGqocauhoeMbTqEjCtWTSwjZjgeTzR9",
  "key44": "Mi2vy6hjLGkp5PwPi3oP1NuX1HTLLxetTXj8W8QgeQZJi1K8NTN3QqPQcBW579NYUVu4h8v2dV2x4sVD4YVNzgF",
  "key45": "5BVarhpSpFkBa91Q2usgpmMMBdnj7JF3zvnDF4HZp7DJpUBfKtdM1rtYozgZ8n9W9ncVPHNmFMwYVBRkxyxBPkqK",
  "key46": "3pz9iPgepATQ8GH9CefaqzHttcnGCtsG64ZxXM2BGs6CDBMVDPAqnmzwJ8H887X5kSZD3ZdZBDutpGPtwUc1Um9W"
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
