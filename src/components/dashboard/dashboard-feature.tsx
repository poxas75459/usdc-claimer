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
    "56ys3R8SgxtwuJzGtVQSQx8Bqa5FXTt1fuWGrAM8BXQJJv4k2vuKQ9FHeHty8ZmcmhVEJyppYSWejneGWcWDz1Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hSDDCn6bpyE1zRWJiynw61btpMAzQEz14XuYoB5P3KSeEg9ARHDW5ef5fNR19KCBDbhDEaokvdDdSrmbFh1t3YS",
  "key1": "2tXeGHFgXmSXqwHEsVuL1CxeN8so48Ko1Dv1w2Pb8fAUUigPP2MVQxLmN4JpLx9Hj9ohRvEvf7t49d3PaKjx82ha",
  "key2": "4EWoUUHRnSfQiPmNAsyzai1vahv5mzoje8uE65S6HrTBZL6qiAXk5A5ZdHjpWmQEvz3k9FaWLfj2oAmJiCZvBvRg",
  "key3": "3jBFZa4dvdUxj1K1oeQK3EdgRY83LBtJSmGfVaZ46FCLR7kLoswTkiYddRtcYAWovoHmk1cpSHSDy3XdNXDCXdsC",
  "key4": "2YiJtsQRNtUyExNfdmCn9caEEfM4c9hv5Kr3APy22Hb6bnjWzz8kfPsvyZAhqYSnPqYarQqZyRwcCszmp469oR7K",
  "key5": "5SQs1T5ZiodPF7sVkESpGrC5A9sKiZYBF2g7eZMwnK1Z2b8DUJwP3TmV7T3XwbiE6NCYQxjEERp6HMaeWoxeaWhN",
  "key6": "4GDmX9M77YuXgJJYw6XMiZTGLrVqyxp4bwiortfX9Vijv2HYTccBq2nxN1XK5bqGJJwYvpCyyZwnLHYJKngJXbHc",
  "key7": "21EK7skJEH5FpxaLiLt1AgkDv5Z8yg4cN5VHHDhzn4zWFKgtoanPG75ofvVrf2Fs9qQJWP2j47CJS3eozMunVc1n",
  "key8": "2EEcFf2KR4E4esRa7vbfpbaY4XCrad6mz2iwJQaq6FSumjMC4N9hiBin3FhC43txxrXZSRbd153owqf5Lfu55FBC",
  "key9": "5wwRHDsp4CtyJNt8DWPGsZURKVh8MRTXmkx5wjENoWj6yEP19DqGN5P9V1wR1EEdnBeCWSdJXWWyw6TJc85FoSyQ",
  "key10": "5ncxLpMZGpkh5d62Dj4rp7EbkxCFvwZRgZPu1N8c6VwU7iz1FYiDELzVYKgZU6Q9bGAmoNk5wCYiu2N6Y4ZDEcE3",
  "key11": "4sGZHHWgBTxBSq58uPNqfnc3oe6t8XoxCouEyQ9r4d1VGsWKaNT9ptbmhDDhLfG6NY1iWBEUTRoXtHhwty4rWZPB",
  "key12": "4d31YFxsWzTGodC66Agv6AeTa7SQMynu2TUeH3R3oER855BfXCioXx1rvaUF9q49S6www8AF89fF4h3hDwcRaX7e",
  "key13": "2r5enGeJHcBz6ZZJwZnvuj7gJpwXLVxVdXJt4FfkrPcCSH7e5RtvygD1oo3QJ943xSrgC7YArT4ughscSr2N559g",
  "key14": "3NdvuTw1rTpQwGqqVEVhXKF4VLQHRAAJ8tU18mfSHokAmExMYx2wysPRqctuhFh2L1S5wHcNJQqKJPdDb7UavEAs",
  "key15": "4NkeduXEk1qqnrT1EtHDZzYW22DdmSakqjruqU8S72JuLsWzb5XVtKPaVEsZ876KW24UHP1XEbSAcC8LondrNcon",
  "key16": "4ccc5btDZbiP7astExRh4AtrEncabzNWCSM6eyjzZ4r1eEWw9ybJmnvRVyyaJQWgodqBer3EHQH53KHs1s81hCVx",
  "key17": "5PP61QEU8rxaEyDD6WhjGDDqgGwK59FXqP2jYqS7yNhUsYjGBY8FhLaPWC7MS2Ar7S1Bqm7RuhkLEQGWWBnxzLjA",
  "key18": "3CWQYZTp2w978GQQ8aXp4hB2eHVPbUsM3kjzSAMJ4rYwvSp73UqhuoQ7nu9Wk4kGo7yYJqFuyyaPa8wSsuMQEVAV",
  "key19": "3TYkLFv9RW9jyR7ypKj4UxUTiTwqWXRwrUCJdJVEQ1eZ5MpXmMqsmzKHy2u6eAtavnbJ9JdgCJ2DjrZRgRMoJrAV",
  "key20": "4KMEqgLHou1tazVobMt9fiUQajzigjiifWSinVN8wmySfhaQr4Az3BagnqmDT4UiviAqGzH2fm2GYcpzbc7PwA8i",
  "key21": "2Q3APJ3kJW7qvzcnUdosBaQhTecPrQd9RngErCwVZzkW7bx5sGLWNSKpVxT2dtxCfZXakHTJqLPYQQrzkAPKMaPF",
  "key22": "2jbWu5g526AgZMH2H4uBAJN5kWDqDKf1AhxuLoRFT7yE1uB2w7fJ8rKQqkJMzp4SsXAdoP5UpcrB6ZmurXHYumgK",
  "key23": "32kVxnFZ9MSuYKXYxSdceqJdzohYu76tJmcsK76sTDGkQhrkfYu1LE5NfHdGUzKVtSe73WGHoYJ7zy27gLkRNnxS",
  "key24": "5UuLyQVsrr7EPV7kQE1QgBnLkzmwRDbFcdGQk8WnEDHjsW5UcDgMA7Ng9eMVDXvQGANg3hNHbgGV43MYFwQv75ap",
  "key25": "5Ym8Vkmau79tL9uoFdxnxxHFxvPt1pkP27XNdXsuDXLo4HTpYwwH8X8ajQ6cLbJ155R6PSeCcwjwW87V6h3F4bJN",
  "key26": "38zvu6YhABtrbjy9DGp16z2MEPJc21oDwuYhq9MyWMbjXEBJfVbVDB1ZyYQEC2k3AE754ctLUX2SdVg4GMjd2K17",
  "key27": "4raRPk4x7LTQykyvUcfkkxv1vDiVMNbV4MKiAkRKT4gRewRbMGryitTAygwvjFd4RV7MdQjmvmbMuz4bVXCx75kt",
  "key28": "Z4Xt89feqRL3LW4cCFanKUDdCEEn4j29JX1KP5aUdag3bQgmkE579HY5UspQ9SscGKc87sHVuj3ojbQMXDN73bW",
  "key29": "62uTMqEhXph17DaDhNL87fCjwirRcpBFZDe2tPsjdhvaTTRhFwgmH38bowc7B6Nx1a8xiSHLrBx6e8C6HmY6z34C",
  "key30": "5ed7u4UozbdLTZEdacAQWqRNHkZArdJKRWXm17inBkAhAWzgfjT5DKQvFFuXpoKPmA1BZEFrAtJ97JRpMiGJSnp",
  "key31": "9DJxH23ric1jNjmQCL3ruvZ9fFNNLL8nyzaq4JrajBvRNdCEsuMHackpAVDYFMWqN8spawnyeK8ReK9xEARJo9N",
  "key32": "4ZQJBVrPb8nqUChitDjLwqzypgrkzzwvJMWZGV4e18J4MmAAubcV9qHNZ8tJqVjsoqaq6cWRh2XRpeC6D5rzuZcx",
  "key33": "3TPxTZf1WppU43eedax8zf8xZ1M8RyJXraWy6Zpxswqs6AbdVv34B2qSFx2mmFrKNPFPdMTwab1jowJzLmCGPmB4",
  "key34": "5wzBnRDM3SNHumYUBiMqGxWb6pfhajwF7jwFk287EQyX4j9V4bnCQmHt7Q3AhFA1617Y6xfz4KrBBwyh3fpC6rG7",
  "key35": "5pSWD8URFnFMnb7ZcyJHVpoAVkqviMfgka2UPxfmAz5fxMixkgQH1dZUmTbEJmBYSifT6AwVpR6sWb6oqBiigPzK",
  "key36": "57o4LU7HUK71psmBsTPkDTJGZ2MTD2gG3vrsuL5ULUx1QWQL9is3VqBF2GJ4fArDPrG1gCZGoFsrg5mW2tm4sVGw",
  "key37": "5vnfhEWY7pPZiD3KqLVVeMHwFiWymH87QeXZMdim3pke5APY5acj8XsRuNi4sLMBNB5XDTJ771cUKqnKkj68Hkz3",
  "key38": "3x8tXyZ82oYchMy9JKEHPL7EGXNojJ2RorG8mwPTyoemAQdY2zeK7xGUt7iCJxitLKuGQK3g1zqFZgNPvyFLPo9G",
  "key39": "4UwenTj5Mc216734MtSPttuQch1wB386guFYgN1sxJM7EG7rqmDPyUAEuFqonyvCb8pXwvxnPMrMd5WQQ93Lmjy1",
  "key40": "5T1sdniQfG1yHh25bAhMdb6eLdsDm5UWMkqkjYpDtKwjNBKFysjNAqLQnov1TaZH65KJh4uPcruJzNxAFLr3EkiH",
  "key41": "2t1SNt6ZxHegWDvhwPhepfJ3epiAr8vfqi7W4PCLm6vVCxKHF2eZtji9uQBHvmCsBQrfgSM9rRbRidRBqcKCVj5w",
  "key42": "4ocxs3xCjYGt8uzYHFLSqWnhKzxyxbtcMw4XnDAfq7epSZ1TbyQJDZpGv2YRHbjhyAEpruqrVvQ9H3y9mTYeywpM"
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
