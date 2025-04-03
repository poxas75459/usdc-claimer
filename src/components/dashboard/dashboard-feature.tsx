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
    "4Hwq5BK3fwsy23ZEHD9gsdGjiSFrHM56rZsn2RwoopdUeTcxJFfFCZQmXz7bhN1GvtZLvCYr6fSsNajKq4bPsPJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfCnCZUgZrdxexCdubjmAL4HLe1NtatNegfC5cLTsqMugTZzThGycq8meKbQepaeoAorYucaepCE1VbKLAMTQja",
  "key1": "4GVQuqSCCU7ydmBjFsabhiSjwQtdnZnVxVEVmzJoz2qutBiBrSiJjwBXbM19UL1zpFcAou1FnB1XEQyWb4yXnN2P",
  "key2": "3qgJUi5XFzRtAxiamtCPkie7meTpS1yMHtJFmnqfNs4ph7JHNS1qhbovWBRGDthpCaQkzapmgy14CKVvdui2NNFF",
  "key3": "2YpE4gz24muEGgS5ArP4NTRvBULTuPxBLBmL6vLFi7c9x4R2hnocs5FJLwepXtqBPZTFj5iAeuvc84YNzFzrfcAq",
  "key4": "3NZBFaymPtJBcQMZnXyCDuqqKv2qxVobq3hJVZQFnfrdwQ9hMjgbdXx5E4SLTq97RnoY9XEC66szwVzHyqtQzJvW",
  "key5": "37kUFQz6VWRQYg3otCwnrBDdCiMZyvmF3NhdwSJNUNKx12VEWxfdY47CsHfVGZDKadA89G8paVG4SpJgQaD3YKqf",
  "key6": "32Na9nSU3Zwo7HhSSFyWz2XzziTP6ta7Y7LZozhUxrDxDuGyY9aE4g4SUwua3RJbnFhER2x9Vue9MqDUc9FLBjQf",
  "key7": "4ULKsnvW6s8kHJv6CioH9Fs9Hjp6ix3vSDdY7THw1GGGT6VSjZuYxe2sYyhXGcqUKzQfseY6ppBV73wSTmy4QeJ4",
  "key8": "43vhFziGLS49U9XTsyyiHXNr6ZUiW7hkYqD5xXwnEFeHcxrhoDQB5tWoSan6gbLTGEM268vBiL4n1uTyqAN2K8xs",
  "key9": "2VzKvG4yVmAPrFdX7Tp7h5XYzaJTw6aMb4u6axwFNUeFd7AZdp1TKk9eNjDvW3KhHFzs8B1isvg7nLNVeEKNbtxA",
  "key10": "538ZYWJRbQoeUn3CGmQrcpRHgFAq2AFzxF7HQbrPKgi4Pwt12uWTtvgFdFaHZWTjzPujLhC46itMnji3GeFta6cX",
  "key11": "s65KdXwAVirAsTxDeYfVZo5BmedRoXVYU24RQXXzUJErJRntR66PEaZ3ir8dsKo9GFBqfEqeMvcjgefSbTKoZfa",
  "key12": "pQwkgihRt4XtBNCdBsTS7oeEAdrABYu8imHWFbZQoSpPM1irSJUNK1smZ2QHJS5eLF76QiZYzxZrzJF1M5ky1NU",
  "key13": "3jwTN2AHktb8V1TjtPdFPLt7U8zeKm6bNSQ8LwFyARM6G4jgJfDdrfom8Lc7MRhAJEKG4hYfJWmDfntUKoMwWaYZ",
  "key14": "2KvhRzGZ6AsuRAnAALe3KJkC8VUBVJ5YqvAK3g5rUZdp7FmrEWgz2W2YoJiPDmWEHqZ4ELg6F6sU8cGc7uZPuFCx",
  "key15": "3XYTXcAfT1QL5vR2hdqK6BfdRxeYKE6CYxcp5KHEnf84TZtQ3ewSoYUpDLttLZunLUt8PnBPnfpte3A6tHhayvz4",
  "key16": "4fsZ5M3jR6Qr1jL9iQvR96rDxFCtsmHJ6BAdgbWXDvEAw1socAhmp1Hy73C5sqJ5CCMnVqdm88iRhqpQti7FzyCm",
  "key17": "39WFYSB4tZCEBd6mWRmVqzwEcNyosdNLJbaidaB3kGDv1z7okEqYzysuRDeBA8oiuHxKc89ZokjYDi6xaT5wrLNh",
  "key18": "3YmbJi4vhTLnBxC8kPduSZV3PENptJzF9sucT1sd9KapCfrpXjhSsz316f6C6yYqqQ2qUUJ2fDowGRw9VnRMU1pk",
  "key19": "3coBxUvMxWQyoSpUUaYE4rRdgaeJhDwZHNwkWNFrVc6bBXhR8Yhvfzc1Vbn4wmZyB6rFxfAgcQTm6dueJCna3pdU",
  "key20": "4vFJgVwcBxxQiK9KuWq3evW1SPJ5QFHzX6REXatx7LuZ7GY4fh1Mf2FgYncRGboeX4P71o9Xxob5HP37zNCyBWDb",
  "key21": "5mC2zCHry2VzAyiqxDKkNayAewHghw3zRM2LpQBUSpEicQM3JRZnZP63v9fsWs3JscYNYeSi2vRwraaTPGj5vbFS",
  "key22": "6S7bQE41AJ5EwetwXB7h9EUwDVGJRUNkLaEQNVEuo8xp1H3kCryNN2qfUMxbp5nRikvkAdXT7jgvcDhBrmdTHdg",
  "key23": "35FQRjS3m52c4a7kccijdfenkatC2DWHBUGYBXGQcU4HFurAhw9FFF1ripJ8JaCsRy4icYLp1RVaD222K7eNuDpF",
  "key24": "5BSLTxu3HEMo7VP3B95yNwRLXZ1sunwzRbgqFq71W9goPfQUhCKpz8NeVfqQUWYLueLGabXJ3MUo21W12PXVK8qc",
  "key25": "5YxA37Rz7kHzk6SGfgcMwk7tP5Y7nvk9VjZbRqMSU7MA1sfdZ59KE3UNV88JdgMGeqRAuy6xThUmL4BNKRc3XwUF",
  "key26": "51yeps9KiP8cTxLvEZNZw6MZmnn1fBij72wAUHDszEup9TjngQat83TjQGocMzc9dBVuxJcWhCZi1pAwGqgkj3BW",
  "key27": "26AnvrZ3cPyQzk1LnqonPkczgxaAcBZMfXvuMqrYhhZXqcwJVFeiHkUfi3RhxBgRZ3AVhQChy2Yb9D74pMLFDHcV",
  "key28": "vm5aybgXGYm1BBay9qhRqtnLSL5F3MhHNpVwNDkvM3AJRQ6tKksPJeCTvBgPUg2wyGxtRZaaG39tBEH9f4xp6Pu",
  "key29": "5JpUFwNUGDWZyypas4oN1oAG2PkiUmkdyNarcijT6qfBsjtJsN6d2J1LwCCtF8xZVuHBkctGXaxMPw7iLzVJgoev",
  "key30": "2ccnnTA1EpBuUxaWTxducgibD1uRLG2xddsUc4pokwcAxf2coPTBJEDD3Uf7iT9TwNtjpT9KvpwM5eg8utdJ6fhW",
  "key31": "5f2K7Ja5JM75jjS1EetQK8or1GHXXPaEThQJSARkUEFjUmfZZwPDxXhX1uFmzeXoJyGyrxcY8jcwv5cMyCERXRwk",
  "key32": "4aNzpHsVQmr1iwpqiXQ7ebCbZmDhyBJe8FSyCuS8DTFaLzmp5wjqoXdrGoNGEfUKh4uonwUjx2RiCJ1pykkdtFM",
  "key33": "246SbSADkPzQLSB5K7sLbFBjuVMgtNBCnMpLuckJmLYzJ2Z5q8UcgQ6XXMzCPFisKBAZXowg9nMtREuts1hyYSdu",
  "key34": "3cvNPssv64kNpRdP9vnWN5ELdQxKagD8oeK9kiUroKEru8eh5M464mQsYYkrKH8kb7rwozCcDPy7Axq6M1K64xgF",
  "key35": "5kFaoVuWii6PKqenj7f2Z9QcYUdvcrwC9k1shjJ35EAe4yqGT1X66ue3ViDnztDjKwggqhp5DxSFocw7nbrcUX4Y",
  "key36": "2BfYS9Trq1hhCY3MoEDZERtmpHBF9UCEihJCjgXPGMsRGuMAc4XNHVUZBY44RXMejAtdMdwX5v2sN8wPRskcxEZk",
  "key37": "3mmxx3Z2z9pbSQwvQgR2Y4ngCVWg8wShNY3qbStmQtzWxCpGzxeJPeBAdmkCCFsHE82i46dqnmGoYHQ99MSEFkkj",
  "key38": "3G4xgsMxmzj1WXLu1oagEKdxbm4we79r7yVVkwxxdksVZxs6eWyFxEF8V4B6nqWHZbSgT7CVm8bFWtwMnY4sKaQH",
  "key39": "3r56QBKuJkz1Uo1KjcvdcMwi2U3G5q9BdaKBCSFt1m4ntABCheY41wJhxnYh3XKFer6nDs8TCx4XLTdynLavrsBr",
  "key40": "3hwG4pKeWBTjHbQoRhb9B9GghTEkdRaUVAy3LBCXhn4YbFfQsimNQKB32kDARzvLw5vPDEWSkuhonnPsSYmqx4sd",
  "key41": "gM8RLKU5mFMN7UV7jRPaicR751DGaBd4QVPnpWSLUxPx6ufUx99QC3txzrQadJrv6LUCgqC7FpmFcJYEThZoUhD",
  "key42": "4MKNkvp18y1KUKzR3jW5UWfoZF3pM9VqpShs8FYXSRFSfbQ8TUoZie2dGQA9eSzxHicGV4XSyydP6yusNvkP6T1C",
  "key43": "5zTerpDknS4bLbmBtCd7JeyAf92zea7pRPxiDWQARPSeuyG8G1RcPHQkhCb4P8ESfcekrcfQ2aH2fehreGBpTT43",
  "key44": "2sWNZa3pSaBvrG4wngbPPnzN5aaBMbgNug6eZwmDHAa2jEPLz9iouhjDXsSp2PbHQKVmc3D5vySU2cMMPH79QUtP",
  "key45": "xg97yREpZw3Cve7UtNWghHQCeRaCSX7Uj3jxrH6bm9Tm4yquSCJWn86r1udNXnk1jLZNa9nbzdgHt9voVv9Hio4",
  "key46": "3ZU1ycH9sQfbYaSyZhyFWpDCn4YmJTmhyutTAV7jnLP4cNZCcdbBJWk5bZVqaih3CkzrDYHMtkDBduAws2jpL9QQ",
  "key47": "4Jz9kXWjiz37uopLb3M5h2fkUwdreytADNpfC4rQfppn6N1xtGSXzEwuPcVuvU3YxLiP1MYozrwzPSgofx2o17ud",
  "key48": "5YYNDDnw14mXSbzY1kMPzykGgK1WJk8jdfzg1DQa7oebfqbiCfR9w1nj7ywcjkafYFgetM9hqvxupjTRvzixRsxU"
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
