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
    "2JN3A91LXF4ZJKUSsSGm5kqALVL7MMGthmsEm7qsqERH392srGh2z4YVxHKYhu7Lpt7hfNveLGUBePuRTWwQanK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJKCY7XuQHv6HoDD7REfTq5WcXHWFY6BJrcSsEKtLLaXfpbguDScCJAJdePEc4vnq6oHdWc7fNGTcwzBTYxUZTV",
  "key1": "5nMMwvrgG7ZSJjhcrDm4zSrSqVnqfufQSY7rZH1Fnse5G9GNreTw2cbt61ZQU8EYhCaAsbv5Udf9hbzEW4Az5yeZ",
  "key2": "4LSujHqQ6zo5FfS8KKoNiDev1XqzJcjryexDD6d6t7uUsc75xEtcjzosy8tD6xaKmV9U4LtPXsfKZ5a6xoHz8Kwc",
  "key3": "nqmBJJo5fM3swWeYpPGrR81FiAhYcAaQFDUHxo9a1bSUbrvLN1d875GpcVA5Qku92resr7HPDw1Teo6VoDcyYYA",
  "key4": "4pFWxbSab1YLSpjP4AeKvVfqUFxrqZGE83W8cNZVMSWpoFWQaAvUgcAwdoLJzhRUx69wMcJnhZjiJj5vd264KjL8",
  "key5": "3Ar8tNdQdoi1aXGh22PVLxuXgEPWvxNCdFAXZR4P7PsVQtUjEdv2CMhAxaLNHtaCNGLHByzw6wa3B7y2Q4tRJYJQ",
  "key6": "4m2wyki9kzuu4KugpkrZ6m7HEVM3ArCwNquTXmvDhidJFue6EMfhnRDSCsHxa5AvGDEHb3mPef45C1bjXWrhwqEy",
  "key7": "4ZNuC4fux1TT633zfEDV66d5XUXXLutYDCsRcdjRaRQcahCecDVLUENok4GAdQXHDNzgU6oN7AxExNQWkRG7spnM",
  "key8": "3FqSpMxq5EzniTdvzgJZiX4d1dgCcQuT2X6puZeejadYEvSRHdUf2ANi5nAG3hVor3G388f6cktCiXAGV4LFjDR9",
  "key9": "2bsK7PptpgUsCn412mSXxzdKizL28BNeMtsGGLFc6a7SXfwH5sXmuZmZAh1DQJPjXtuqHWJbhszTGbuDUKNWK9RH",
  "key10": "44nYh21ojoLNWCQ5sQsJj14S4yVeHKpiZQAcM8XvU9hkWLzbdgmrsFfQtkF6gt5bgqEsH4iDY26fTzcwHmhAQKUd",
  "key11": "2tT8XEMLkK64HpCMsyeAqQ3KVdBVBGqG4qyskHM69P92chJgVp7VUPpt8HU7k4GcTBoq21CoZZFikWipKVHai846",
  "key12": "NA6uPnxvyJiKeiDF98fNkR7RWZTFYksMzud4k2tSrrX9bqx9m6r6jEYiN3G9jQgMZUCjBgVZTXvGjRUYFMVqGtE",
  "key13": "4uSXkvHUWNxvCQXsLBt9hc7f5Jfce6kuSKz9ziTUGjX9cgh5HTj6FXfpZkfDNUq9Pb4CcwMHXp7CgArfbtbBQMbH",
  "key14": "ntM2aKzWrgHfKWthBDwJ87RBsR6uVeSGQPQ1nCtKgnb3RFJitF2ciBcQnVJcZGnLcW7CQBt7uwL5WBuYR1ybEs8",
  "key15": "5eaatsZvpBQQE3DWFtymBTQP9PcT4U4oLDzHNwdhonARJnmSDJKjo9MrZVXxT4tWXKCoh4w3kWTj9Cb11buD32ow",
  "key16": "35dDSeVFuPEhBmuKe3cmouNaAwxSNGjjh5Z72VYEDrEVJSeLiAY1HwXJHMHHtxe356YTaXYcaS89RFoiGnw834Bm",
  "key17": "wmsjQqhz2L6D8aKceQBJpeYZ3DyZLUxzyfuHrejRDzUq5mD1Eagi4NKuyxEy1UeBk7ZDru27E1PFBfQM2yVzFXD",
  "key18": "2bstYd5eHUCJWnEpcSGAqStCTehcvNoaUsnDW2BXtLqkb77okYWVHRqJA3hmnuz618EwhaEFnSoVtBca7KWgChzs",
  "key19": "2znKVasfDRvyPksbECbTbi7ptxCDyKojEtQiXZC4TDvtxMvMJFuAEcMPmZf8KvQmFPjtSnmUQXoAYmjkFvz297jq",
  "key20": "4wRhNfUbRXUJBA8YStBDk11bZbCvpgpqhVXzhZTMbLGhbLLRS1yPtpBdTAxPcx4pnPg2vBjawRi4H4vcqYmDXm9f",
  "key21": "4VhHdZATSgSfUmvzgRPQ7LahMKrMXhnHnBRotT9XoKF1wBe6RM9BTudnDSQeepCV7ZCVMBWxampQKmeCBqXsFh7t",
  "key22": "2v8EQW4VmvkkUyEYvg4ienUK1BmK3gwdqHcQi2aFWispFmDbL18VYyWMsK4JQiSUFiwjWBaGK9HShXP9jiSMnVun",
  "key23": "5npLGmAzRc7NwvNkXKyEXzktFMBUgARVQjESmsQuZHBsWCjyewasR93JeoRRhG3GCyVLqZzpUUJte1svTeHc4CRg",
  "key24": "4DtHut937gX8KcAYhhzGmzHPhfCk9fgE9usxpj2V14NQnsHARyFVwWN7XvAQEADLdHQ9pDJ2E9yoiEeq24FbdQE",
  "key25": "5eHtuha6NrGhkkJHVw3bwMGo1XPVsV5Ks8E3gZzNh7AGWjWD9srJFT3PMP2VMDKKSuwKm9QXX25FQRiPq6hSJnux",
  "key26": "3Di3mpgjeZzohy58zKdjvu9BuhZ2Nbaq9iGZDozyjyYkP5ftt5ydQ12bEBSVjjxpXZyEDT75FB5R1zkgtCqdvfzw",
  "key27": "5UPvBbNyRchpuGTB7KokwCxiv4juwTV46oNVJkFJHoM4YQX8RifsUbkWb124Rbis2rKW81HdRmCXhYz64KY7Ys5x",
  "key28": "4WvhD9ituP85eWvmTUdcSQBTngn8NmQPbVhFS1WqDEZbUhMYCVBDtfusM8mNbwe5tpeiddM1JxHX94rtCd9WeG5i",
  "key29": "iX4wtYDQeTRsNUJbPMGMDVr16BPfiETEFbm1wt1ek2xHx8Fiws4QjGZenB3VsY3w5WTRXakXaEGnTUscomDGoNv",
  "key30": "2ABeoX3EhQGgr3Ytp1FDwqcWsibjfHwyTi6av4bChHzWsVP6baM4fP9njWpqyDvxZe9MhKeA439resrL1a2dfaY4",
  "key31": "MoqvrZzxDnUG58422JY1AYUJw1PRUjwWuU52kCktwdEvVZhgNmwyQtPk1W1G3Uj4QMEB2S4TYMgMm6UNtcsxyuV",
  "key32": "5HuucL1gpHX2NWJFTz81VXvT4sV6UvqbRJ7FvGEbeDuvkpKhwG4p761gT3WaqpfUbgaEM35jJR2YbctgGCoUpz7C",
  "key33": "rdiXxaaSmeis8LcnGSx4eepK5ozbAKxtX6ATwCbQoXz7TpxvpMsJipHt7Vk9WvHqorXHGZ9NdG7MzHbAEWWJ4rm",
  "key34": "zmXu7A2kCpCh32AE6kcfdD7nZMRfqFxNGG6uTUka2ZddHMwZDbnwrcRZtqG8ngSbqwrGCYhxEvDzsp1urQqH5K3",
  "key35": "4refwjs4SLqSsdreQLUrCy3aWouhhT9FEmtpedN7hz9hEAqdkkdbdR5WrDEmp95Av3mCPbNq8jZWfJwyeBoQYhot",
  "key36": "W6g3GCpVH8qiZYGJKcnV5JT8QauoAQs8cPrBbDrZkcU7CGvLDisnvMzLxwqFu51EC1GFtZi3wkUPA83qR2k5vnj",
  "key37": "2yrK1EqtdjDkraamGyDKagCwgLtEUSCJ3X179NZMNyYWRK9nQ5XbPN94UJ5muY6UMfD5acMPDp74QEyTYC9dpAuM",
  "key38": "3wJtEtGMNS92mwcteXKYtAjzxq87sMBnhevj7StcFVhsRqNy6igT49gkEsRe4ogQwaFJ8LoJqXDhCR8v3JrXSWZG",
  "key39": "4YH4v3KXHEMdbsq6AW2gYk2qyChivNReFiuP1ZjpWhsLWsgynSG9M4bRocYZk22XAf6VWJtimTHhtQbhGoezNpSd"
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
