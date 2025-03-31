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
    "3iv2bZgbBDorpCYVxvu6VFUxp6RcmLEBNTsmzxSRG8vd85e8Jg9UFHNQonz9Ujg7pqs8KqpFY9isWZyTrJ8zUtoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WSyHFdC8yhVr1EpNGtyWVR3bn5tzTqftiJ6iEUW9GdtydeowVAZBBvRpXVERTM7LefsJMBgZ8wwLDafDbtTj8j",
  "key1": "3KDehtE4WnAnDhpiE9c4qUKXn9auttUUqMDdoVnnEJbtVz7PmjkyU2YU319o4ijFNaYKVp9R9WamynL9K45efszG",
  "key2": "9zZX9DHeTcjjJTc2PPwgsbk7NjWuj8DKYDnnrpJCYAtwySY9hsf86t4s4pm6oitLuYzCQ3pB4rJMmviiirGgdJS",
  "key3": "swdJz5WHZUXyLfisxwA382Mb8aKf3Qozg8TGYDDiWPWukSvA4xcVPiTyfwaryMtaDGYXUJhvtPnwSuYFB8rMM1N",
  "key4": "5PEyWoYqqNnYjVWVD6f3XDt8G6QZr8qrJFBXstunmM8fFyTfJvFcKLDR2jSSMqpZPfWzwzDdc7PdD9TQstSwDeu2",
  "key5": "52sQGN6TuXwjfnsjPvopXkKCBZ1FKkk3rTzZFqiG62HqJZtqAKMecsgNbS7C7Rquuuu6vg3xEJFo8rAqENrvZm2j",
  "key6": "4KcQ8VjeGDcnyXvKo3rscC7mz9XKAvwHCDWcxeeWYjD3YUwazDLmvkG2Y2JGBuB1rabNsR8C5qACagxgKV8FMjCw",
  "key7": "cVayDXU4gkrbCD8emBJkUiEtwSeHzA8azifiKffzBtKMwYeJN3iurDLW9RALfwa8RTg3PNVxTWviAcjevLFZGbC",
  "key8": "365FKnT3tf6o7ip3UqdQn29APnu6zg5g6LWTXePZcHCJE92t9mw7cBFjSnhvLxudNKrCV6rUi6s3t3kQbwHGE8Xf",
  "key9": "2JWQEL9o1KqiPgHYfLChe7m9o4oQaPUoM55VDtRxT8jzSBEKEAFfb9GUdHU9gGhdhvzJDGmHmWpeo6nKDoSDXBeG",
  "key10": "BNLwwu8PuhatjB2tFuEm6xqGT6yRy6UVr54dAztszEb7a3gixc9WuERtqoL9uDY7habVaHK5NYdneU2PNUrBN15",
  "key11": "5AYtMA1R7piKA2sff1YZSRakVcAmYsZRViQvrSqRbFuZfeMv55XW7p9xSpHHYNik3uwFatKtM2okYDe5XdncWpK8",
  "key12": "2MVQ4mQoiCRWppi53ACFY16cqX2fjpn5xoQLG5oWgdKCVg4ZuJBJd6pki3ssrYjniHcAe4fAmrsgjyhRCkwfYThs",
  "key13": "rKsiBFLY7MV8LUFHTz8JYPuLfpNebRDKUzdKGuDXCvR6Vpz5HWw89ypZqcLBSzccuZ1Vb6XzkcBhxKNH7DW36Wc",
  "key14": "4FZfjRm6wg4oigkV2Q7tfk2JhLAJYJ6MknpaZCSZ7VEgKqQjQGio8QyKbtLpw3ETJ8xKP12nhjgwquhkG3kfvdKU",
  "key15": "2Sf6qM3Amso19Rqdkh9v1jR21Pc3CkGSgY6WLsUddAUv8w9e36JDDjctG1dKzreqQKDLxuK9uwBjYd9gQDmAQVMj",
  "key16": "KSoFSdKc3EVVTJM6MhsNLNpE6zY5BgUQ6Vi42qdmbChAjy3REot5PtyBQaMY7yTs2jYCPSuxiSwLjTpJ3PLnsLs",
  "key17": "267RpYQqhptz7AXyJNJoaCpJA3dQQsjQKkRRaivA3UNs8HjWGXzjRP2BcLVYrFDnysfB8Giv61oSnFfHJsmyVAR6",
  "key18": "8o8SyNsdyM5otUvPdAfDRbcAmkBncEQoDwZx1s2esqNhAgRvzeJubQKn9GnkGNurMwHojYaQ5ZVXh228r67ZwNH",
  "key19": "46egcsvDpuvzZsVW9hxRrjiCFwt1YVLqsniG7LNfXZXatk3V8LbX4ZymKK9YHTA5MxLchYRPh7M9itxp8BnM72h1",
  "key20": "TEzwYSV2nk8dDty9ahDqoUNj76fgdQnDbyR2pRdbRRXHAsRiCK3sX9kz5G61TMsYpxd9GGgEQNTu9G5XvJF1naW",
  "key21": "5aQ4KiphJM4D9LyEbibV4jbTVAUvGn5MV3c6KpBp282HyiQzpcNHA5fErmRsmL1KnpbGUaXwFTqSvaZdZjebx3xs",
  "key22": "53ySo65qMPG5yi6LYnX2BCzA4vmSuribCxEfviHfgek3cxvxE61opmZu33HXBwRMek5vrZdEzBaLPVhaxveEUih7",
  "key23": "5f25wB3Y4T5a6BL8JL46YoPHJFW6emJVAYbb3QMBf8w1pTgqxXHbdguPmTb8FoQaf5fYYZk28cAFzLCEKC5yfmSB",
  "key24": "5A78t5GwZ3Mg9G17aFZB3J8LAJPdCoGXzHGYxcNqbN4uzRmPJTgDy3pFxorLzVvm9riCCgktTtqMgBgbfPjypMA5",
  "key25": "3DcHkBJxDysnAAxBao5HuuyHEC12e9D2zWvtSGFip9dzahZxpVmjxubTEwZRJWtWSv2cdS4s64MzCaDYBeX9tSxE",
  "key26": "2aDS28qzwaDHGUKQBY3ZRYMqMAEdSc97eqgxMaE1WEfAau3VheQRFsPwNC8wLixhypk83AUeTbiobBbeU9EtY2m8",
  "key27": "5k1nPDFsHMdB4WJgHDWTrb8xcUvm47MZRLKoGL6H2KoTYPA5Kxsv6bSuxvzuNucR7G2Dnmj5r74shRTkNamWEdhp",
  "key28": "5SZbMEns6XQqjGKLpmTS1mWNwoNF4iS94ubHkyV9gZu3xgdFHKe96g4goeu5NcEJd5pVp6mzbWs2hK1K3AcPXTJc",
  "key29": "44DDZKfpCZ9bTj21y1Pmdc3vUiPhxPJPDjLpKFzMPTfXje7XYfn8KeSGG1EhdE4CXnWCdg5Giaz6Ur5B1NkEPMSK",
  "key30": "2cz7uHubmC97V4S7wmhEpY3xyh6SX6pyxQ1ak6gu9rEJ9VuzcHMBo4ZdDsqmbnbkqggowT6bJYDQVfsxf1S4Q7Me",
  "key31": "2Z49mt8R6R2ZwRTuh9dNbwCL3xSPG1YXh7wxWJz3kRqLQpbzbwdBa4Zw41wRbr4mQ993pafWHHjDbPpNhzFyHBgK",
  "key32": "3kUCDZ9buHxfcf1egtvfPaBQQud4ZyErWpHNXi8SxohwH9qK48jkM3NRNGQdd8a2CzfNc9rq9YZNp49fa3GQarnc",
  "key33": "5jUN7y6eVe9q3aPC519CdCWZcejoHr5eGN7EkH7GR96GJ3xLEuQQoTCT3dZSQbqPmQTbHEUnqJ4sWQPZTfeKn8jY",
  "key34": "3oBnHZuF4A2zWYg5u1sRg49B3rhFhuzVrknDgDBbWNM7DnAAqNCvyqPb4soNNGtZMveiJLb9rKzeY6utnCTFdQD3",
  "key35": "27DFXNagEGZse6aYpA9EbZwaL3Vvyfqmufbe53YiRJEsViDG7m58YjXZaTz6q3eUeykQXP2gw9Rzh9uUnJor6T3Y",
  "key36": "5xM3D3LPKeis3U1BpGyt1X9t43L3J6zcsCrRHrLeDZCjezEX9KRPFfAbUDVeFdJ2KgUvVuYC1x5nRuteJAzZ1pLK"
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
