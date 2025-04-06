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
    "4keJ634Ta1T8YayAHRQQtjQbdz3JjH5gNPfA6E1XUGQLVsTQPBTGMg1XGvQVvHLzDgfMkg8qNSe4oYqY7mQXXGAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VfhhKLhqURBtnSPwt1Af2ahb1XTiN6bGGLTp8qFypsFzWsxH6w1avbF3YSLiuKrKfHTPDoF5aB5Z7hvv6mtMJdd",
  "key1": "3sQNf3DFjqVq7pHBwUC6wUxKVMpAB5xE81tDAcJDhddgEdcms3afTiTTAfWpgXX7iS7NiWot8cTvxyM1EeTtfkEr",
  "key2": "3PSfRWsSdFKS4ZfdfZh9JuDQC4w6hqDyVpw1cuAdubreeoRzJ9xoWg56fcPUmoEknsneEJGxeuURYUc61JtnpVw7",
  "key3": "NHt2SuhuPNXVFs3rjLvv7pjvRG476seiRjsC4oWCYNWDFmLh7a3hyju93AoisHaPnRvJiy4u5LyaWo6Y247g6p2",
  "key4": "2GtA5qTAJamZNTrUaFxQfd9qryBsesrL9riduD1SDiZmUAQyCpu4VZKJCQg5jbHQXkUTwur5pbdY8iD81gMiXuQN",
  "key5": "2hMftBmQxpSSzd7VxrsnScK7RPqsy1ii39dN6hy6d6Y3ry858Y8dLyF77DKQXDKBngwv3uhZSdy9xaVaeWrTjbYK",
  "key6": "5qherRRLqwxUju156roPn4NnDoUVMV9H77Z6ie4rLauamekkhwN8L5ieFgntd4cSk1KqgWP2EBNAJSnrC3PgNsbU",
  "key7": "DSeNbkUZbFjUpJQEPs19Uh4gDmYvLbQxCh7r4u1yUvZMsw6avD7KsVGVvEaW8C6azqrg3jKVrMwzSJAzNf8V5WX",
  "key8": "2vVraCqz2C3ijfZq5ESL4rt8jKNHBs3zMXi3wiqWpkobWo9C6d8Nw9geL3DaRAA3DnNMHZ3WN6kxF2CfLTkTqCQr",
  "key9": "2UfFx3U2t8RQWozu29T3Rwdc3mxVEeyvQA3XA4oX9XLZwTA1z1jXTHPadzxm4ioMpjqHnjtanWypqTnuBL8sVjHY",
  "key10": "5tGEHVavQuBJn2wwtmPuX4pbNxEaJhFuKn9P23bGxgzpoZ2NKCEjZBcy1LQUxo8Mgb4Y9o8Ni8dBg5ZT9okEot9X",
  "key11": "3HHthAyCfKxtt7mPuXFJQYY43D6Kcy2rscPcz3Ld3WfSPJmdzx7tBwEesnFqhwG7C4TgvJtdsx3HVpfy1SZdihTR",
  "key12": "bCF7HUPzSNbhNxSQh79oXkU8ERiRT8NgdiheW1R2ZEDpctjc2Knsdf46vBkgWMnMVZYGWYipCrb3ugsvsL1SFZF",
  "key13": "4GopvfW3vEGFXhCpSK3pE73RZzfag5aEZsqBzZHQfayd65ezYHbvKZBw68HKhVxHw2cY2Q6BwcVQrrkvcYkCAhaX",
  "key14": "3qwMYmLTNEUWnH4P4r2p4CCG38FVGU9M1GmVHNzfTXzUwxUmD2rRzgH7Z1f6d9Lorcs9ohGS2pVJ6io3p3ptgBQq",
  "key15": "3yggKCwtoFUwXEUz9qxiTj48AJvLV9VJ5NkYaq92KrNs7bjdDeNvbcf1Y2y4wnAh8tHtcBfqtJto6icLuU92KsLE",
  "key16": "5FwkSHKynVJcRhTcrveWafBW382eERi9Kf8Z7CRC97HFuX3CZjjEF5bezKSsJCV6CStLxxXuQ5ZYCdEuLW3L8jSV",
  "key17": "5T2wsWDhwnfPitTiaa6c5jvLDCmQsX8uffUGiM5eAqd1HjkcApyAAkfDdHfjNsVhNAMcVXY5N97DQZ7ysiUV95Ng",
  "key18": "ZVnmvJcxNW8R7V9hvX7MX45JLcFo2UAhfw36AyQvaC5QeKijv6Yo93MHQ8ELyzZHtbEweFLo3vEuqL5pfW4Jv9Z",
  "key19": "5kUUaG9MafvQSBwEVhLuufg2zuqFfNpXQmswmZLtz5MNeNqh4ajZbBnZbTk6jvn8RBZVDHvsCBnzjYoqvrwGG4bZ",
  "key20": "5Ke1mzqWiN36CVgRbe3rXLF8DHVoPXEbieEQfY7wFR5rTn7FvGHdVC1bC7gzfrmTc77RixSNqjBkfSgkh5TqrSxZ",
  "key21": "4yEpoWhJzkmfQnZxHnFQ4U4XgxLzXiDQ5djehqLngs4TQFpnseEk8dML1QW5MmQWnhgNyvQczC6uP1GZywwi95t3",
  "key22": "668sc7j7VgUqYMspRKwXNqaRBHpti2T8C5Zg4sMsyDG9xHZJKdGnqpJ2FasGt8KjH1KFSghPRfUUBPSuP9xv1b6K",
  "key23": "29bQRa2RBR3WjdQWrMXmpXjRyt8kSMeVwwhc5WtPxLqo7yfqpE1mRudU5UFrnTSFrHELfYnaQ1VXzzCzwK23ygbr",
  "key24": "2pyTJKjqN4LAzdSJR8LPhu21h5aTCHAi1ZVt8v8QWB7QqBvSaGhAsWqgzyvocP4Gpmh3kMvqeR3ojL4a2g4kQKT7",
  "key25": "ef6qZhgrToax7E4Jq3L9y6VmQFk13McY9y3ydW3YmDwjqGNxv52ie13tEpZww72WEjWkobiJpNxntWHrzXhHcpk",
  "key26": "62ddnsBErxqgKK1rfojQG538MjudLFa6yHz8L3KBQumUY5WcTTJ32M4bxdsRdHMZnT2w6chkRFVqioo4n2uBkCWA",
  "key27": "4VSmvAwdQ5pY1whnLP77AqxtcEA4ktxucMew4imiohqAYxUz4FUjUaKYLHugxdFAxkWovECQugD3zdpSCZ7PPh68",
  "key28": "5H7ZZWr2xcca58SdnKRWKWd5mGb8b5b9xPWwS99yN9fgq5WFrrUJzsAYPF2TTqnagP7C7mGH2ndeEjfsSkUKc5yc",
  "key29": "2tXCErUStiZ6v57RpP21TfKGLSNC7uwn4VXW3RB6aJSogGDrZ6orHLKkpnBnBFv9aDYp663xhh8pZK9muFiJ4hQF",
  "key30": "2T9dD2KP1PefeRuncXRWd5fEQhVQxnedSJXGuBWpHLtCe3WqDV2PTBaajzYrVysyojCmR3FnJCsHVmXe1Cbuu3YQ"
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
