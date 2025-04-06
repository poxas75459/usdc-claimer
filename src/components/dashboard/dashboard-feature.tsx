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
    "5Ksj4oQxhE8meAv6CiNRXj3DBuPi3sNTWXnivhscCDHJd9iTkMBqAsa7uM5YfynYDeBwM2UrTFoLDRNLyvaFaicw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whvVtkGpdNA8WeU92m1gckZijpagj7DV1j2yTnCwXK7g3xfntoieoWu8QAiBAQj6j1ceyoPD5V7tVGTCQHQcHv1",
  "key1": "2bbLKFfEE37YkVUFeU5bBreRPohKwH6XVk7iShqaVqpoS9V1ug6fgt7KHdvYoCM8FKTdgJXzJL3VyDGcUYbzZdzX",
  "key2": "64e3eM9FScDTEAFeJjuEkPpfo3p5bh9GkSG7LBnEA6k4rwzF2763LTsgGiSeNkXB5qoLFFpVxVwKtBFYRrqFSuox",
  "key3": "Y97G7U9RxFy9Jf8vHD1Vpz1WhxNFQZTUD6ukCZC3biXFYCSsJ7uaNfxjDVHbpG6KBLq3cssMjZNQ3b6FbcBkEW3",
  "key4": "rNsGBN3aApVieM66n2mvBSo3RnxcjVjJQUXJXTvKKU2AYXPcMYNR7F7tEwv5r9MuesEjWZXQ13QyniEEREiEoCr",
  "key5": "ULQxRrJ4kRiy7pwyCDQm18UX2N5fiU9fJi6hqMJaDm2G6K2niMgWLjNB5kBhxcbGqGqRiaRoXA2sBdy1GUDmETR",
  "key6": "23SzT1v1aSEF5EELdZ1nJXquxCX5Rcocq95CwxcfSrdGNf7YbcZhqdtGyVnAKJSfdJLGVDEopCojr1Ntc5EkVWum",
  "key7": "5XXm3mHTVQtyn8KEdYqtVJDvjWsn6es5xmMkotwSGrHy59YiAYyzq3ArnvimjiK3nto8LT4cJCJ43QbWFk7LtnBJ",
  "key8": "5TocW1gnfa4Wwzdr3PBCqyysNq6j6GwbQHPgh3Nhf7mXW8VyyfKvLbYR2P9FvMHvatfzkY6GvSuoBNHdvXc99aE1",
  "key9": "QZ96JtAqYzogSNzoHL3oPZimSQzQUB6hppE3zi9S9UNWTMRE68zC1gSBuwA1CyvDrZ2tGCBxojUevcwo5uzDz7e",
  "key10": "23pr6V9S7JUCVFbVsJS5EozuiAeUaCzB7d49AX2M68gzX3WGCUWCjbKw7M7PBUZK1jgAzvaULSddy5pLGrw819zg",
  "key11": "5TNXseD1DyTCM5G53UTWZ7NkTYtSM4t9tp98Br6qTkwcfgG7qYCoD4RKKBEGmWA2FJ6ZLNhYX6diSrwp63C5Pm9S",
  "key12": "69XzaE518s4DYTsaL7ZeW7a31c1Cd3fCxyQdPexBF7RjMwnQ3MR9AbdbFJwR8zkAVDbdjqnBfGqtu5MijDrboN9",
  "key13": "5rwJxNJsqVBTwZNVTXyWkZGk4ysMs1qPF8WBnRF8aoABZBKKHDG5VDZK8vnP9uZaua49PmWqa2UdDgEXWcegVfoh",
  "key14": "37y7ntkLwAUugXqnwRPBoAUTe1WDPG7N4Z5322aHx74htg51Wxi1YdEq6DDPhDf5kx63sacQjURktBhzfUbzvZRK",
  "key15": "3wtHJq3AY9yhMfqPWNDhZMvs2mGcQGVfcXmUf3zDtD1FiDfTgyfhjWY5MBnXmfd2CoPPtWvgXFdmtPNXvTDL5zG6",
  "key16": "3xbmB7QkUfTPRVARgUcUjhj6Qz4agvBavjpbj9LRb2H7AiZMQDat15FtqgXghPzNnhFb7NX1kLAgc3TXi97PKiuJ",
  "key17": "522KadYbxCeAAtctm6LbTGwJoRh7RW4bx1RwV7umET365S1qeV6LYvrbCY8VFaeeCHff91SPGEQYVTPGzD5eKHuz",
  "key18": "4BCDU2BhF4fUiEpvjzAvf3LRpgC6feKU4XXnRMs9soRS89RxrrgBHPKYHrivjv9hyrRP9wqrPHehJwnZYuGY3Phv",
  "key19": "4JCRNP4jU86ehvNtTp7ELMMGJGsKVLxpurounfK4RyQSMgzYc8NmQR2fKTPwN81T53YyH4t2kSrMfvbUF7AxjMUZ",
  "key20": "48kWLxKUDm9xza55hxn7K44UQ9mE5xFGjRz8Mq2Cjx9HtUp8SGBgnL9zJHbWVAN5L2wLsqwrh9shG7okvBwbmxXw",
  "key21": "4438KA4UbPWBkycjJM5SeAjSnB9zma6PyPfqiNTPJ7RPAN5HGWkT4zaF1efcErTonG9XG9cHMs1DaEQzgbBBQTpW",
  "key22": "5mCUaAKiJjCVVe3cggsFEWz8jvyo678Kq8GBQcfmFxGx88STQ2dCBvkKskBFebpeyRkGJFqeKP8myJAMjjRk8SdL",
  "key23": "66APbcDgtriYDUxzDik8m2sSq8N6xVMDja6TXbJ6ajVqybyCAcAt8sk5R1bC6wY8BQRYYg81YmrnyY8MiQvksjjq",
  "key24": "4P8ga5dhdxiWdPo1oJkZH7CaLKoQxi9CSUZuvYdHs2ttcjfjeWyZ3atqspoKca4PtT95No7rvzWY9a3iApJzV3Ss",
  "key25": "3pLQkuAV2h34zaXLdxdFDNvg19FDC7jdFEeLT8L5S8C56apdt8BnQK2q46JyGKdBpfA5BVMiqDC6WEWGwcZyUHA2",
  "key26": "4EarzGUncSFJjwveUpjmrNA74oqad6HmkAihumXqMjyQHxoRhXtxPxfDPBC3YGDebZZqG2NuFVokeuaRX53AneqZ",
  "key27": "4HarWjNFqF8FJVpbfpNjT5q31egi9uq59TQ1EBpuXkvNdVY5sUHRtsQB7KpGi6vsPo9hqWnRhYqMHwd2eqB7DpYs",
  "key28": "MSv5SPHKKSKCHnTn98cgaUeyMNfsfZv5wkc2EjWH1dYx11GPD3AGnqUsDonFDkATeBZf9TXM1JhmUgNtzs8VjRo",
  "key29": "2pi5zQqGRde2h9rqQ8JbpjqTE3nBDNuWFe8BAPV1CUYjY5ofcKgE61SxDgf5h9Cv2hfNqR9A5YqR1FU3TeZrzW9N",
  "key30": "51DVRocyXZGiGXNsmD4pzMd1spyg3huFPcEdrnWdvV7ZZrTTFAa4CzrweWigEVJ5pnBtUeMzo66thcddmVdd82RM",
  "key31": "5yL7JmUHZ7zDNJZRC4PhdPuC64z2QUwHXuvpwjtVVVg4uDqBKjrPBE1a3BwoGLkgeqkJAgCrwVZUxQ6RVntCwBZ6",
  "key32": "TeX33zEw2RuJC46YVRxjBmf1NVjZPXhYhzqcDj6ThDMKFTEPUMi5Qg7hrsZFfKWAJbaSp6ZiaKxiZBxAQZi2ByK",
  "key33": "4MMRKDG69ohQPov5JFuQhNqym71TioyMacPnZF8ofWs4y1rzDKTTbW6XRuMYHXfmvWbeed9uDLLyYMcddt7qdBye",
  "key34": "33e8aFMB8cFwec2b6CYCkpmDbmRtwf1CGGCy2pPQMSUKtv7JZ6UM5AmEacqixMhNMnqCV4yhxQk7juGzz8HRGZcG",
  "key35": "3X4djavXQrX8nAETtAVUxRnpgP8pZfFxev1siAhaPyhKJ6LUzjxfdSp2z8pagmunnxyt71rkxfzV1rkxWoje7K1q",
  "key36": "5KGKEVvgsLj2Y3WcP4Wv7krQQAQwssdYMjPcm21VFmDwsXrreJX6JebvBRwmMviVqCLeY7CpUGKDax5DyrojurKg"
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
