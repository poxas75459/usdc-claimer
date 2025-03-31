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
    "5yuvXE9dzE7szpU2qwiNgn3XQV5jToy4Rfb9GkZEVcyg2XWsCkL1HWqiUZVPhtQb2LqXFjwLGdy2BsHyxeKDmvEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjEFiELUwBHeZim4L7VBdTmky1Sm9VwRbjMcJekZEtiUFPnzLqs8JZGY128a9uGKDupPQ5VeD5SmMkPjSwxc7au",
  "key1": "5QxXSh4QHc2Aq5vZ4d8Xtv2n1sF9A71fuKZH225Yn4FRJ1vkxtGYqUfTmtm193KJVNj5MJAqB2j2mkuZr8EAPFxW",
  "key2": "4wpV21P2bpVCAAhhTTWr22tZKcdHHmdaMvvvxq4w2CoV8XVBgmWTwttRczPT7u9AbAXBETA83iKViuJmThsBsufB",
  "key3": "4e5ETt4eowCB4gLmdajWs77xHjFtzUurWuGLgugKpZC6YrA36brDPz44WDhWJiEbKHbgdw6wUiDKzExfNdnNpUdP",
  "key4": "5rCFmBx1Z1YSKmfV8j986qcYLdni2ZzeGXtLzZ6cLEzJFhkfHKhLJ1QCeD3w2fLrR78CdYgYsKLH1EYS28pxTcJw",
  "key5": "63Ebb1i3kQm2GWd3uZKMuVBoCyLzXXGDegfDpvDPmP5FdkCH3ggggzBJPcfZpdGUs91f34AyZJa58B78LErwY2BP",
  "key6": "4udJGzM99x9GZFccVN8m8krAGUViVJYLxXoqFtBTcp3Tcs63sZ8C9jLjwtgfmKXsDZdKgQfRRDJepm9NTvTfQdP6",
  "key7": "2PjEZfqwqSiuF1gAVtaEWEsyWEnv3XHyjEjY8AaxiyyQjhzUhAsC2Ti3PkYdq68MzsBHbBaSTS7beBQPyRNSdpxn",
  "key8": "Lh9w8H4mvn9ztXPevLpkEHUehzFVeT6v5B6nE5PDGedPfqFJKo2yNnF8tyyQnayR3TP7EqmrNUuCtg7S5dcd1vA",
  "key9": "PBTmgDZEh7pg4hod6HRURRctCt5psc3TCZGfNpLvvFGu3ND4gEh2VUhyWsVCTDtdvUaoPfxQJesFbAhswLTzeJG",
  "key10": "1SosVBfqvURQatGmUNHiR5iRWWxrM1Rnu33mUDXWgdszo617QGTQ8cypB1hKiGKzQnSU4hEjyjEaFSWK6Fr2g2w",
  "key11": "44SWWNCr43Ln5EmN5mHef3jrLEpkySYDgq33aSy7ZMWgfL8LKeNTK3UdLS8QCSHBpKqc5Zr7ipJVizUbzug7dztL",
  "key12": "5hYCh3suALmgGycRPyo2h6krDt5DQYtQhSN86EFanhMumpL42RRhWWewixnSgdVe6Ph7q2ddp99Uic7VFnZJ1B2E",
  "key13": "2XUPxWFvG1sMhz5bGY89oZgbMJPPU6Uj9HdzXsBAf1TAwyWLgMGNDMmvEzfygACwzNAd8zvBD8cjm5x5ucRAv2kq",
  "key14": "4vHMLy8ZEYpW7gZpEbeUP8Rmy69RVevd7eRLUH6ZNdXwqeKxz5ouN1dwwfxZcEU2w8dE3PPHsEJZmnsRw4TXNfj",
  "key15": "23e8N77L1xtS5hdgv21cyraGWfnoN5YPnoop1fqTQpsNowYi2Z91rxheVZQvmYNtnoB4sgymTFh4bUTP1R9irjA9",
  "key16": "5wRvferzqF8UVZD3QetKqLQYURFrx4nPyRE8mYSoAFBNCnS9kgjvL95LYryKHEALBXaD41eV2qdKc2ZZTnGyHpnr",
  "key17": "3pHP225j1Rx86ftnvEpJtNeN4yUtdUqR1Mh6U7tqaAkek38KLQazRnhVmou7hSXrPNQ8yWQVHm5a5SZZ5kZ9HBGr",
  "key18": "5ibpcytm2pnrna4gLGnUWZEvoKtnsCRKNP9G5nhppxJEQf7M7f1NqbupGT1XhfWHxHqSd3tb6Na3KLaLubhuJEAo",
  "key19": "2z6fDnzH2o8z9QuqhLjTvaSBYbsMyRdhaf5hHYr53eHo6yUvNg4LAPWqA5561tgJABkDqoYuMvd9UMuVR4YnGb5x",
  "key20": "4BLdtL1LjawMRgdUogvGJBQXYXzKnT2sPgs1ESCTNpPEYUtD15znCTGJLxWewddUgTdB7sJNvHFr5BmtRfLE23g1",
  "key21": "2Z2Tkvikj6Ki9nCreZfaKdZ1Ym4rNDgZpuscw5rmgUdoBFMhHegGwdgnR5ecmgXh8ezmsU3zegEjdrUhiaep9i3t",
  "key22": "3e8L3BAmLbbM9RHnfZBPZsYUmuebYLVA7sYLTcF2Em2VS7Y4QnAmFGcyYBWMXPGn8kU9TdwvgLZZavixWJRT3SUx",
  "key23": "Nr6T5BNEMBibtx7L8VYHFAwvJnRHkMwbdr9ZJZGpYYgEYRcAbGPZHF8Je8kwoz8EsmWnUEf6axHXbPsEhuxojXb",
  "key24": "3T1Kqw7RZwi3AE3s6GgULU238zfsH4w7HWqv8sem3EY3rfNt7uF12MKpw3RVH7aVo96hchw4NUk5e7NYrYaA4tAQ",
  "key25": "oAVkoLciqLVMNVF6JqvH5oenHpaBUPahFq4KtoRJhksGDQWhdi8r6M7Beyb2JQZiELmZAveCbW3B3RuLakinLKS",
  "key26": "ViabvCq3M5Eh5R1xuhm5AGtpH2xsmFFYcUxUsqRVvzLKdNYqMVWzGMW7cVhK1iYaG27CFm6ERi4tewmN638Xkq6",
  "key27": "3MbJ8pTxQYYEYCQk85JdAYwrat8daxFApQA84czQBnYZDFTWbPFf89VD7NvkuUknQy9Z1oP4kgcoug8gGKkCQ8SX",
  "key28": "4atRSk6xJhisN3PS7vzYN34WFzTDnmuAefmmwehsVpsS1HrnJ74z9bskhwFBHxReXctrhmMktb69dkaj7sdZoogV",
  "key29": "2mnAYiiPK8YJgu5aJiQh75SXyk1jrzwN8nd5bNkyRvmxtU2cQXBNL39rLHYc8vUJLNwh2Gs5fwR1zMwCsoAKL3Bx",
  "key30": "3iFgnZkfTMnGC2ABvxSyscEXCwou44PDMsjTJu5559XiZ3KWB3hmTjN4UdAWLjjnKgt3N3V9w5FTAWv4kTmFgtEV",
  "key31": "28XWvncwNxbZtVZnqxBzi9oVJdDos43tG1mjdznNHBvmZ38S1meYw8w7NkFzf7ewoZELvFiuMoqCAg9QXqQB3f6d",
  "key32": "YUy25Y1mK8NMoj3VU4ig6PPhDGRfwNi37TPm9zQZFb3S9WZ7jasJzyjos3LRZJHYMVDHY7njqNMmPQBniuJB2HE",
  "key33": "Jxu1fheaBWbNtWqvs5ajiXVEv652BT9sr2UDn5A3d3zzddUtnanjEVtkYBX1XHBcjBvPai7nj1A9Vxgvuo3D1US",
  "key34": "5QfVeS7r7nYhnH3Uup5KTqLfX5p8dRgknT7H1p648vAf4apcYZ95QScCz8bsy6nZgjUedgAxad28HEv5SCiduKaV",
  "key35": "wdVRXVioVyp47K1sk1NMYakX9FnBYNfWjxxcsjrqtiDFjzYyCufTSB5XSY87A6Pw7YRHZKKFJRuoezBF2XF4S4G",
  "key36": "28oxkj3hJdDeEtZYPwv62TSfzdLcQjyFdkpNPieyMEibnNP3bqMdVJkLg2ShF5uXCm9B5pQucNPiqNZ5Sm8cgRG3",
  "key37": "3txmQZPEiXEibUtcqYpeHAcMg2iWAb2UMHychKt3RybCU8fHivRJgne4AL7aTsMHxFCATzfVSaaCvLYTi1mnXAJj",
  "key38": "63F6fSzetEtezk75M7Dsur1z9okz6FZRStcALQSQzARRtck4LiuepDSyb1aTC2yYe5e7BZbovNpirLKeF4YnKto5",
  "key39": "3nGcu8iKdgN9bTeEYERJPpHDMpk56ecYRHMCMgDbGNAQR9aaWkWguoy6HiorgEBPtcKWZmdsMpqcAjNTk54CchX7",
  "key40": "3FLXP1RSwSTHbAUaWQJPXqHdfwf4yLT5SrpvXZqYxZ7mjGWQ4TnXuxFfhCrQCbjwEtgvcmoEDnWSUHa4edFGW4r1",
  "key41": "2XENBJ35MDktB7kS6gEEgHisqmT7CFWbtp7yL2UNfY8F2oHs3hSA93nMiBTeE46eC3nmvkUrSGL8Z3yK3VVB73DE",
  "key42": "3gT4sAq92JWHDhe3NHYhsgLLvZidbY5XaGEyFtL5rqhW97zLijfU7W3G2NgetxjhhL6hbwzAZ2w6WPakU5K9E9SB"
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
