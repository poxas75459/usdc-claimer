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
    "3WDoMVLXHuqAmYescDrj2NFzCcEyVPm7oHW5qmnuRygNBRjpgx4ywjdj5kFueyKdcH359GPeTYAaa6y4SPC5PW17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jio1V7WVxfE2jYbLQgRKk3tCL4L4Raf8VqufYXzjHGPHCJmKxVRLrWHpvyc4JaP2hkv2ProoqQQn6jjmM4WqUq8",
  "key1": "5kVVpUKYX2fEzZaAzzFNt9AWkB436i2rX1GyzPijiPF9eDxKEJkk178NJMFw3wHDYjBo9RWf6wtFJ7kjE9k57PU",
  "key2": "52deEqnzWvAXQ746wadTSkLjdjR64vyG86U4GUABMj2q9SjpYn8bwLJKC1wVfFcRVaiNLwt8mJ8xY7HwC7aeS3YL",
  "key3": "48Hg6iawffwWN21hGhHPPuByzRUt4uQ1Bm8RtUNVKKTCvdTGks97Bq1Z5HkWtzY3erYp8WjSjCVTPC9cDxHCYSs3",
  "key4": "5cj1Y861fGRMLWJF8PEU6McbPTQxxTNSx64mUQ7dzJxL8AckHUKqPp6ft5Z2GnDw7B9uG1ypZNUWzboSGmna37m6",
  "key5": "5Q4jFF1DBx8apDmc7AWXWrnJ9dFU4fUkRcvAqptSR1zX9PopLuhdGv98FCTzDVFE5nj3obQ1ViodsD8hYai2kvkz",
  "key6": "xPmeNXS1eWQ67FvZTQonBKY74So4UbQrHw1TPMtcZDbM9Ji5mUJofBN5pTzbKtdV9idYpVCL1La8W5KHAURhsvQ",
  "key7": "feX8pwurmrJTp3HP6tH4MXWmGwrdobmcyv6ZcYcjyhj949KyiwhgfY6pvZoG24vvqYbPzaxFETGKySqCQG5VaPm",
  "key8": "3zNYtVXCDzmTiLGcE1BFr8Ld7sTpuXDaTvg5uf52D3c9WE6fsVoDsKAauv8U3BugY5BwPyLXJESKixffoGSdMtkr",
  "key9": "2YcfXirUbar1eyk8at4djXxxzTXCuKkHjMcPYkR59DK3TBxDG7hTJzfMqZkWkLR61TjKYvVFQPDLm3FdvUfWKbK",
  "key10": "4vEBR2gACyiQxNbh1YH7hgpitfvSZ7UtYjfjj11uqc19e1qfXvhjwTbawqcVyFEUwvTBqdN3H9EpPJN7iQ1NWKQ1",
  "key11": "CP6BPnNG8BMrwHaXFssZaxULVLNV8jz3tWne9HV5WYUVYuH9yNS7LcDigrnUf2s8Y94axphEbgUoxNDwLQFy6Yp",
  "key12": "4YcU3dN3peWaWF5Bxp7j4n29yH9cFzf1H7k7y1t7C28idNrAHeMD53F3UoHXhY2G9RebhdyTa5n71E69hZdnpkqW",
  "key13": "47fyRtwftqUV8RPMR23BtDJwpaSQ4U2pCWLX5BFZsoQZkbPh1UtWhf7tMibcKiZU5QVQUH6yjTfR2Y6hXiAQVmDe",
  "key14": "xScL2HGxwYqnizCYeHeRjKtpxqFVj8xHAQFfxmHSxr7MGZwYXnZhHh3kd9re43D1AkM2Udy1ARyJes3PQs7q4MD",
  "key15": "T5yQUZW4PEb9BhVXcoQmZ1BCMQ7CeA7yZKtGw1TRw3LMEHnNmYpjteeKiyhF16b7AqCqCa7T4YjbE3U4USUWLZX",
  "key16": "3ToYNx4axE92PE8mXGnsAaFC8zJFfodyhhXeqUmvFcRyRBeSnqf6NMHoPhvjfTNzPezJNKDbHhg7NGDEHvHiUSEN",
  "key17": "2pivd9d5SxJs2Zf6t5fUy3wHUgthBHcYCeHzv41862R4FsMn7YMguk2wJBTYMXME8Mo8FuDQTYNXRdsxvSs8JBGr",
  "key18": "5ayem2bXUorFSQMpcJBiJJWRvWjTfN7gNHuU996AeLpkgZB3NCYa4txHXCcPQ36BmGrsz4mkZGY9aGnY5aaTJhh7",
  "key19": "2LLYzKzccXhZjv3hAdG3FJbeiGiRJYZ4Lzz6YD4w1ZbUm4e69vmz3Y7krRjnKcXBMUHR44t5gg2hawX7qpf6FYBS",
  "key20": "V5a5worXN1Uh9YHjBryyYu2f39cNeVzYDCihzq74sGMbBvXLX1obc5nNPUZWqXmcjDZE9oqXLwLFbrfttyeaSKz",
  "key21": "2JHMXziQgNSxKNxxyKWeE4vbg6jgdMoLCiMvG4gV2JZwfDxTBxuN59bpVAeuaTCFajcoCxiuorM6hLU3kdzuDoow",
  "key22": "37hUnkStMjMEfKbgWALFD12UBNC5Zunr9B4yj53fi3jGQMR58xCRTGKzw4ub3vb2J4ex8GH95XpDTVdPpM8DNuY9",
  "key23": "4Rc3ZVuSF8EZy8ZBNcBgxnmPRHGAHZCLBV815AzhMmY3KdggzX2aRtctradQaUwbnnVHMh5MAYvE1GZK897g2xWd",
  "key24": "5nSQyF8VKk3gVvauwe8YYK8aRqkXF7GWcnMgBwW1XtCQZdDZ5tjL3UNg8nMhKhACNuMvQhrt7JEmyXBjD7HARJQK",
  "key25": "3GL1KV9BUX6HjmWUbq97Zg3PpdpesgjnfjXt8YTyfLtqV4z4NtC2FnTUeNsE1bXYMcTGq3LhsRM74Kg8Y1ca9U82",
  "key26": "57Kxdb3jF9zEmHp7fr6mQxx2nYm7FaXHjte53AyBBYmGrQfHSJwX7doqzACmyGRyXodrq6srdmcUSdXjNL64ZGAm",
  "key27": "5o3ndEhMCMSzHUhi4SuWq1HGTQW7hEhgWr4PK8n99QtpkxVX4GzYSKnXkeZ6q1jCLmpVmxFZfbVWsv9bzq4QTnFn",
  "key28": "63KHZtaLFRmzRsgqk6LpHJ5SkMiaL8YAwnsz5WDPVMKxawEwZqxSgbA42cmeEMt8Gf2qfhQnjgCQSYabuazanFbj",
  "key29": "2PCnCRFm4WnFqZjM78m33VspTFxHCtGoNonDTMmbrypcCkTCxkvaHaCS6bzNMjZap8EUHRHXHtYJCEToj2RK1ACH",
  "key30": "3AJaRjvJxmrnRH7eKLNzzvWTaCpxKKZP3fUss7Z3v94MXWKz2hE9UfYDkJndB8RxnD9mXm3qSNhtMMGqBNHC7Ahk",
  "key31": "4PmcR164YwRcGnigBVmng3VP2nM5QrYqhZGWxD1yE4n2s2GpJ26yzdCWv6cpTBjLKaTMMDqJgmMZrugCmjpiTUA6",
  "key32": "MB1EWMseJk4RzpzUgrDUor2WDjoFvtWFa6qbyMseTS5GnnFion41AWkF34Qy4FBs6ByRHStwXALeZQcGzGNE9KZ",
  "key33": "4FWFYVFFDAZ52EJXU87vbBfcU6mfYM5uFEdfnP5m6MRKCJqowdto1d9MgjiDz95jqTViUapWDyGzBj2kx2Fhovud",
  "key34": "2HdozoqER2PuqkkAGvMKVzjUe8PYoXyEYgRsaehskgyUnAjzXRSGswZfgLXiiS2xH14Zth6AhytsfeSXHNfgoKP9",
  "key35": "cft7q7be4ipVYLojBh44rfL5USsMWXaegbd9AcMHxToGxn9ZrFjw5jjcb2PKo5YGbZMg2rU6bYoVGYNCbD7c819",
  "key36": "5Q3skr6ZAQX3YiE3ogz4E1u8bqBpwMCCQNFD76QYPQnRhxNQZuRFiJ8coiL9jF4z6tPDX2Ed5x14RBbWV7nm2LeR",
  "key37": "4CqnM4tNiT7uDqaRc7ns5475JBiyUwJ8DGNnGMqQx4mfq7rbiR8EewJ7PwpF94NpC1f2XURuFsefameb2ghpF5FH",
  "key38": "2Htp4VubmwWwp6RyeHv5TQPvKN4JpAtV3tqLaJi2qSJshQKSxXHs3tEKjyC4yCX9EdYZ8ec6R6WAb34V2aSnJMJJ"
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
