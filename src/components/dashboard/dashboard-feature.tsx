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
    "tyex41wSk8QU8vy2Q4DE6v6Ex9huZQcv1fLMn7aGR2B7w4aevyXnkooVh6uu4mDCNLhvmMbwqFpbEe2873wXPv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nScAN4hEGHHuiZD79sr63f8wQb2Rio4mpNwbWrMMvs6sHzfKWkprFVikxgSvGnijzgCu7ge1PtW4q7Dycs38fs8",
  "key1": "4sM2GucK3xkUGeMzNi1CteCQWYsdcgVUScaLBVBNTcjyS8pt2wQycLdyEuPXwceWFdiWFA7sjayENwRxij2MTy1q",
  "key2": "2rTxNMCNj4e2Ebt4cYbU81SKsNMjYzbRrMPKL3aU1EJGUGkWPvvT6YN1b5sYxKsnazYa8VhgNCNrVBkNnttc2jWk",
  "key3": "5gPv5BDE15pCnZAh7JchpPFniexc5akUTo35GYLQ7VfoNY1ddEMWc4nM3aaGT9HkV8GV7t1fez8Ga15Y518TCsSa",
  "key4": "5rin7rgNNezZmhFeFmKfjQQqG3G1YpTfthBeJp8VHySmTSx5WZgbFVjkdViBqS5UZWjpFAeNYZvCxxgYhdVmB3iD",
  "key5": "3Q18EeV4wcF4JVBwG1Mo8gZZZZDnqvzsFFKSrUdnPkEJzk9okEaTmUJm11qJwzvPRWtm1L3vMJymAZ1jTJ1AMkg9",
  "key6": "5tkfgg6iq9jgJAMrwK6SEoCkAkPBwM4phGADJGH3csseavEJ87bhK23HpoKeRDQX6WQg5ocHpE3qxgZG84Wjzd6w",
  "key7": "231jogbeaU3s4he4wW7sg234fjiw7FBe9BWpVH4kjv6NaWwMWkW5TrgySdW8ntAs6mqGoLFjggFgioPP3pzbTpSk",
  "key8": "5mY8JWZLJ4eSbp8vGoZhYYYCCn2nTh7AphBHfrVADLRm5GJqbRkd8aEdFbdJDEDMRfWB335Gnzpx4tmtSu2afsop",
  "key9": "5vbeQoaG3bNQT2b7Av3W5qSf86TLCZzjdKrizL6wwhoB1JzkADDFYyAbHCRCuZkoKFhSDXjo8qcueq3okm7JvxyC",
  "key10": "5NuyCQG3qNVhpavauuHHKL6gJKCpNCnjcC1uzd4XEezZnMeEuUayRMai9UZ6SVw1emKNdR6zurUgmMSQyn5YXhH",
  "key11": "2yBKdM6k8pz1KQunDhNQAehuz8yvGr7hoHZcwTf9JRCuRGJn9aAjGYXcaDE1f4biuy6iRJJKtbBCWF5iDKBktA4K",
  "key12": "Ns6VQvkxqFauph3LGVc7qLxFKUMR7rYmyQWuZLCPzPBSujJYgnkL8HDdqNyyQZ2RxnQXqB3jxVsW2B7WDZZThfu",
  "key13": "pfKXZsXWY5gkw7xmGRNW8XdqedUWwQ8D7VpeGEDAAvQj8fNZH5m3MoLx32NnrLRkh56vyMymoP2ZCFWUZHEGZ3x",
  "key14": "5cE8zgayZitmjHuysNncXSRAUH7H8mTVaQwTYR8WRuKvSknnkLeoieQcq1N8HrqgNB1JmPpWSoqyt9aPU5vEhUaW",
  "key15": "2MSHMquAZgdnQFDhG9u5fFEwSPiqRVWCyQtymchtMiqHVLxEvbSVZuk1FwwbT8e8ALjQGwTbcRcBVatsFNXcvvnq",
  "key16": "5wJ1ZzFds16Zdqc2bsyrkSkzcaZNjMUMB6w4hfg13DkXSvHdYJvATh4CgWgpdTBfu2UTThBUmXfQTpsi7hg1aogo",
  "key17": "4T6R6qhbf4QdBnBm3NpxJ1cDDHnpWrEjHae9JF7F2UudE3MU8EhqXzEjTtiLxGHLWFzhH1oF2r83RWBCvtWfvMBS",
  "key18": "2uYBL7F9bKB8P5vcwiXuaxYazReTeriuZiqVRAjjcWLKMwohnnGwJgiMiUw2v7NhJYbohDx3m8eNi5QZcEwsY4p2",
  "key19": "49sSvrK4qDqnfiv2fXTVdFrAeiH1qiz3JJeZ6TPyjE33wPA6gxNwonj3rCzvusjZPaK5RsKFH4oyNvKmPpVqEPTp",
  "key20": "5X736fKFFyMvj1EinGk3fs2jKRwEPmK1A4iTitU1Mm2XqHfsmta1mspAjzNVrFZPQfo7KDKVr45WpxSvRuuFh5Eu",
  "key21": "277RfvV8kRrmvqCyZP8U4LQL62foXBkxtjMGCF7G18V2MUVAfFqXqgcZStkyEUuknmpxaRsbkbVBEhFUUXyXrKWi",
  "key22": "2k3ZDwyDdNNoGydZkwhX2cXfumnaFLJyXToajhLqLVZfCwHyFwFFxeF1PUrgPPyax473eVrzjrBgYJeF94HRNBnS",
  "key23": "3JfNHiMknYVKKxibxbDPn5LJmMj1mKfGjZinFLfLsbU3k44GJYAiqCMYVKCSAP4vncBSuZKPY9CcweyBPz5PT312",
  "key24": "5AnbU1hHMchoa7egFJPfGtFkfH1gsXCbjEb6HgpZmmsLQLULtqnijEDPL1gpS7B8imgNuPRX6YYPfv6pL7QF7z7u",
  "key25": "ytCYqZnd6TPnbWm53iEGF4vdtxdZy7tebQnmdo4CBbdPBr4ZZsHFA8QLV4swnfLd4zwFeGWCDnWGELTm7jNzfZL",
  "key26": "4dXDrBK9LhhVymg1i6s7za8QaK8tsC9tndhxeZhBvoQWZQaj1ZgY5GkiVSeB6kaRa7iNSFcrwwMm5jno2QP13rMa",
  "key27": "61ED1YJXPTHdavEpGShSE1ykSdkXGwbNAFcwL47b4JQnE3gdxbeHbbPSzvkoH3FCmTVGjFAVnjXVMJtYi1FbQUTv",
  "key28": "4Gbmheie2FzYs6MWvJEcwMndVcZr779nckB4AFFRbR2V9LU42hDsuerTLkdzcpEVavPP5yLQXSvCpBXoMGXHHa6H",
  "key29": "3YMVkNmZoqb29xR9sLHzGPjkS1rVa587Wg8Td1RjLuoJvYtWYHrRe2C3Zt79jNfn1QryYDPRMWw2DpRP9nAuZo2X",
  "key30": "4caoyyfCs7r5jf87NiTr3wW7tVcN5ztMTXddNY6UhzPLLv5B8ewhk8qY757sUn7rNuNY1US4Vd2Kq4yScWsc884g",
  "key31": "HZKpFhdLa2PhrjA69dEAjJqo4pvMGHHrwde9nba3npKBrEr2kuukCaGRdjTkpnRj5N92nVRo71hHy1raqwT3i3E",
  "key32": "5CpspZwG5hXLEdNdUqU2JAs657uXKSdjHoMe3uu5NrWFmv8KtmZhBDTU2et4ea8G8Zk5NjcJcRoP9u7viBtADMVS",
  "key33": "5XAQUPpfvxYwPFSqZsidogg2v1AAPbdefHByk7WHYdbxPJtYa7ZPLvA6Jo8FCJyH1s13NigMhxC9zqo29BKQKTE"
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
