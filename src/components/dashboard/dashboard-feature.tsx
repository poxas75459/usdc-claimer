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
    "32E9NBm2ePDZ7JqHfBP3dx1VssZzswLyNG6oKP4ghJ2LkxGir9mDZrS2aptGBMm8kBWfHEZJCRAarDrFMv24sN42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLsuEYgJJGhoUo3rj4ukMZ2KMapTVgFBzYKdKY1hV34KErYQmgTeNPc8WuHTeA1XfgYF2CaMer6gVdWU6PwGG1m",
  "key1": "4EPTPcKKEKKvmvzeb6MtKiZSdvXWvNeJK1V3uXuBCQYG6jUkbCpuxFjHNS7RMdaX7S6pjTphG67wc7YHuCw7FwkG",
  "key2": "bjeFbPgG6DnVcPwxXWDV3eRBmFngQnQQ5fXT2tpbuAysqVBZBARQyvcXwgEVQeVwEHA13MB2r3m841gJmg4EfoJ",
  "key3": "3N3TrnQ96gntjiHa1zQFVB1moX8PmuHJLtzT36jqYCLLcfNHyJaMqov6rUkh9vZxNiJD5XAjpHSiDJLBQQkPUzMP",
  "key4": "X6wv9NdENFSRHgfd2z4enqGRqtiRF6kmWe9Z3rvruh2LLq3KZ1N6rbBq5wuFdAYNppAqqE5Fqc3yGXF9HtVRHbB",
  "key5": "3dB9ocCeCgG8HroPUNyfpDky5C6Tf2pyiZhWTtDPy2PuRBWSzYiuBk7MJ4FHKgBZLbA5DV1B1gMkumn7Mo6xgqLd",
  "key6": "QzkpzuGuBMLy3JkGQ93DxtWxcDqnadNkVnLETpopiDQz6QMUUvKznn6Joy9W2LDPCSWoWeFX9Boah6waozjYDLd",
  "key7": "4cFyBWjxueQvrxWt7pV53hNPkXFBZEpEhT6XxWTNfw56Hc3QcBQWjG1Gygp5BaNJgkjc1WwXrzREJKiYRNPoaLk8",
  "key8": "z9ELwdxp4xRPoa8ZFyk8eCiP3GW7LzYbrYnkKG9KbBu1v6ScHqgcWtggkHsMzUXrT115NqyEooT6MJgp3wVNYEX",
  "key9": "53Q56c5BuJVEFqYL6y8ANmiJaCcEJVzTWXngRyQGGHHttmc9kCWn2LNxikhGx68zCVWZ585Mx82CPPmdiTk3XSf8",
  "key10": "3RQo9TgaKXWkEuxcAoYyYkiJLHuKrLUhrgUh645zBye9nrKbtbMbP7zjWPmrmaFXXHiJgD3fv1uQv6Ji9vWaRcYB",
  "key11": "3LvcyULptB556f7sJU11CcmNqiP3BHs7eDjhB3mq7S4oAZjGwgNaPKgqEVmWbhriZi2GNjutFBJnnWD9sDxwepYi",
  "key12": "3YAUCr9ES2oXqyWr3r9W7u5fhRTBU36chMNxcgYT26L7Sc5LGHkhnTnRyR6Nhq53NmifmPR2X2PaAWVN9GZFCYqH",
  "key13": "2sLvC7SFHM7REjTmtgqyYFYYTH84n3fdmkfJZoURXGULUJTAXbQhTVsor7eNV9ScfAXZSLosAAZ5YiRkMLfoY2K9",
  "key14": "5htHgCDf2USuMUuzzKvzJ5Jmq4eQ6TFoS2bXoSp2GvQUyuP3ExCTFD6BnWZ1Jxct6nWVHiWeimkMrst9c91wbKkr",
  "key15": "8Ccd2MZRSCZx4quQcGZow3n6E8Uj5dQtfbMpJQFEQ1wuxwPT34bKJhpwneDorZr3fy4EHcz3bBcsCpcBk7ZU5ZV",
  "key16": "w6CTXtB1cGhaZbBWiyCWrprg7hzVVPHS97ikz8aYo13cJWJjyhLye4YXZu3MHpqKcTQ7JM7dsJbmEXxRUszMYFj",
  "key17": "3P6kZJjb9ke2DM6sYCYJYnH41BZT5GayWw5m8Pea9ACyRXi37EW5Yh813rocyYqTp8gB55AMvzJM4V7eTUuvAyxU",
  "key18": "63Xani2cRHjkcpyEC9vwxfV3WVNdeRbfpPSQsH3v9meCrVq8Ne7HBv8DorFEqHnL8uyU9dpefFf4GNhZif6HwbqN",
  "key19": "2NPFkRzjK5mdvnBmGyyAPpAHGQPnTx4y8fdtaWwz5C5F2SYF5AN98biZPNFyrUAVHwKZejTbCNPUFZxaZjMTj25",
  "key20": "33gMPbJj6k2fDbct9pYmmTfRoRk8k1zZHqZt2PWNesT8pTcLdSoYEvo9w5CY2UGieCzxXijMtGFsrRJosLnitgVb",
  "key21": "2NkxV5jEZWeViA3ph9Si5CBUSBMMu8kf8jevEd6447tntHuphWHmsw2HZbP5e1nGtRyJw18hQywzRDZABbWzY3jH",
  "key22": "aGWudJnYvVFdTRjpB5YMZ4UYpJmdQ5KZkcUQSH8dcKvGsSrtHNYKeJ3dYMuqrEYFq4EyUGvVXUugfwcASmPJCXW",
  "key23": "YBWJNC715SMpnYsrA4tviWdEAGMDLqpKZcpeoxoAxguuBwFfkGL4tzbbTR4yBBujpMT8xTt99YUNrGdRjUKaQD6",
  "key24": "53qJvCYYX8y8VkJtK7egwsAGP6CM5XpCRBqd1yLb4mt4JchzsG6LYk5eacPgSAUhQgGdNgtTFvPGvvuSXBR4cDKb",
  "key25": "j9oFc2ZFEXbLKTLicby2KdApVybc481yxbsno5PbWk284kPyHkDUUh7P1errVA8w9XTQ3NNRfXQhzUZCj39nQuY",
  "key26": "2F12p5FbcAThp4bqftZFTH3SMSnu2TE3ptGzYPgHUex2hpir9aXPDpf9PCgWmXq7CbejrHsYDkuyJjfT6GoS1iDX",
  "key27": "3vTDevtphuxJ5bLajB7ZvC5uKjVMgamrpDZ5WbUyaBPjrfyVmUw7Erc5RiLN5FCQpjZsxu8NKbiQngDmtzFSiYT7",
  "key28": "39mGQo6rTpYKrHBU91zvuWUeA24jcWdhogUSs4SeaLQHBzjWZCnoGhm2AmtenW873k6s6t6UtbyhNvqiU49is1Qm",
  "key29": "2cB5KZrR1zaHb8jENMtEj1io7exkYNQxYVkU6r1hrgvy1QBn79BZBxETBakc7uBRQr8xUpLC5rnhbhfJvciAfezT",
  "key30": "4fnikCCLpJAP44F1vsKvsjzsEL94jTbxDiXtC99x4BzkyKZV15pauHGKen4dxmE57XAA6ZsxKXrmmgnEViM54qz",
  "key31": "4RBjJWHFxvUBuRfSoADaCZ3HdnJdm76vMTST9DSf3GBt9g8Hc6oAwteCrmv8jaEcnF4QApqmQDGdDiZJSPbma6PR",
  "key32": "vHZuFKYCXPST1EEsZKoZm3K6GbdpJ4yo1hX5eoAXt8s1ktgrtcQCafnyTPR1DkLXZvnEmMpX9DFd9Tz3yY3NtMZ",
  "key33": "5fHjV8XyLpLc4NYfBDJG44G19eUqeD4s1ux4JQ4zTHKzb2LZXEjuW3gRpeKsthsfAb7bsar1nqBQqrqKiApYr6bP",
  "key34": "3k6a9VjyVhUJF8tktnjNgvVdGiEy5yg2qApRJ4oKyncYHMU9356oFrfVnhTCBJsWokWT4QiZ41GhDNHgQ2LyXoDX",
  "key35": "JSWdhgaptBMh1QgHZzEJKKwV3oNizz2GTRxSyKWHXymTg3N4TqmXicM6M4mtmRWeo6KLVNTKFKfeHTLBbaxDMpY",
  "key36": "5TZZCkapLSQf5qRoH9EE39foVCvaBnMrhxn1WSHy4rr5qHrfEjxVW3ymUnW7vc9vxom3yBqxwV34wAD6jrMUUJgv",
  "key37": "3BhmfWThTuub4LNxTaMDc9VsDTXtoFVVwv4HyCAiPxcurhBXU8pVW63ALAC6LNPtY8pEtYiHEHgzivzxuHhKKKtA",
  "key38": "2bCrRcGy9NLe2sMBBkdcGT3Y1RbeNUyGcEbcPTiZUGhBXejVZGK2aWL2Q6VzCgqEVm6hXAiqnV4SC5t6hz7GKsjE"
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
