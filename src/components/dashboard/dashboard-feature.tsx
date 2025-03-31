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
    "7ZF2DND3Lu3JR42QCUFQeFjbSwAnpqKAeXvLtFsCm3LbymmLWkujvxTZfzvBxUXXYubDCM4pMqx7AhrvG4HXbYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pF7GQywnQAGNWzz4FyhdrukfRqqZdLzmutXMWq4dF4bJyYYFBDJq1ZzU7bMSmcHTVHg1wfW5gE8X1xGCBi2ahvr",
  "key1": "2X6NtFyP2hbeZHdrccBp8i184wsGQtdekHCxJu8u4hpvLtM4hfpTK9jwLHvFriBx2tqPL8vUbYyuQdQvN9TVHyvP",
  "key2": "5nmNJNqEAngQVwmJnWfdr4KyDmD66TthhV1eTs6abaWgs7UFR7PNyGFioKfsJCnPs5wpNVhq9wwCb1bwaR83EkTN",
  "key3": "2A61WvmryY6YvoDWKMsVcaSiCHc32MnPD38tdTDVC3pdYPGrV8rmwacY7SnjokTEbtimcnfjphmf5tBfHwEBEzrC",
  "key4": "4YQgyNzfyeigE11Mg3LM615FyxDEZBM7jgVXU6ymy72efyfPeSTW8YTXoV2sTMQJQUw7AX8CN4SkKmehwoy6MSDT",
  "key5": "woHgJaoakLpV9g6jEQ6qQeMxAmHtGWaPe4oPJ1NY6GgWaH89kHDCGwr5EQaZgjaTqN3ekyXBW3toeVffNU2h7gK",
  "key6": "2tQnEEX2gqxFxEREprxnV6A3pjVeYtKMtcPhwZdx8E7wdvAhXrzb6y4n2ApKESxrHkeXqfA9gqif2urL2bU95MS5",
  "key7": "5J88rmiWWhbL8gfFLWo5pH94NjkNrnUhgeiQR7QZ8DHmJTiUawA7eAMVG8n1Wd6VQFpn67dsDUvYR4bqM2mZns3c",
  "key8": "4JSACiXduWcdnmGShtmPrqqr32Sy6pYFxMSkvmGrvz6xmxczAq3PfWeBnmH18eV2FYQU5DZxr2LnLYAQCyhaAWho",
  "key9": "4Pd4APGbQvuEWLdDAH7FBEENRiqKRnMLPxnE1HhbNbyKJGgso7Jac5vvUyDSsfGvv58rzWn4aXqToQumjkrZPpV9",
  "key10": "5hymXLnCDVNSv145kBZRAfYiCTLvDNQWzVtQ2haSYanZgWM7xgJvv7uLGix6LHW6TvbidK53vnpN1tMAhnNUKwTr",
  "key11": "5Fq7j4gukqfM76EL4AhmwPbXbZPssJ2FePSrK7BseaGy68w6Do82BAx8q8TVZ1oddFxKjVWfWxcXtctHyTTqUV2m",
  "key12": "Yb1biNK7FzsZP49o7x1r9WrspwDCwQeEfByVQz1xs5MydnQFpkEJo5dusq9ZhWxetHenq4Yust26eB4qyLp1iCB",
  "key13": "28DpNqchEUKDhSmCWHxvvovRsQtiiWVgewYib36fQ5t5hDeXJTwSTqwVyv8bHHYzSnsib879JmoQueYeg6GCuvix",
  "key14": "31o2pQdNGaQCbJGsgHahoHWtUP86783nt7BLFnuQGWnn9LnTmjcbEufyXuS4QYjVzyB7ShZ57r9MES78pkTDXhuY",
  "key15": "39XMMGbmeicJB1wxC5tmbEJvLmFDwGvFZ8C3JaASWNwQruNyFQza2jZdeB4KvpxiHQYAMyumarnmbSgufbzsjwVw",
  "key16": "59YiYusxFBh3LrdBkGRnAgDeN1W5SADX47tkuDXDhfFsFzEFR9MPXBW8SG6MbXhNUKLSsKw5yR2gd6YKmKeY573s",
  "key17": "5kPMZYoVpK69GeLnvhApjh1Tqv61FhaF9bDsQV7GxYPrnEHiDb6QvNqMA7JNYMPcuTJzsorY32tUuwf4TTxBQjSK",
  "key18": "3fyHU44kjDZaCsKrvbgKpTDimAp5C5QgoSQaJxwo2RYDsYNAqscXZwaExSdGBm21ArFia7FhVnUYmaU2Br5icZHd",
  "key19": "VwMV4y8sDkVAWHqPQo2VYgyXQn7gV2k85oJyqmAjD9W67tcSTpLqkNLFgzV9GtG1vFtmWqEqX3pAhaJywSaBytQ",
  "key20": "4Dxk1wGowMh6Whd1TQsyhaqV3urxLtEzTiB2FEnRobr38miSziVv8nj996R2pGDeVbrN3cmfGkbW2DgFm2sEUsis",
  "key21": "4aY6PLUUyeCw9cWgaMpbQXkaDuRNcLEV6qCausTqydXjuvJvkjPM1qHD1QNcBFm4gvJ5gwLnmoX6UmJ8aTSgYHh",
  "key22": "5oEYoKY8W4nnzsARUsZ5Njk9yc3Zrnytcvoah4roXL2mD7QcXX4TTWEAdq7iAhXp6zsEJevTuX2bq4ZKbvDJTdu6",
  "key23": "3Y7FoCurwcRnECJ1ZFXZW8imcUs1jxurxWq5oRHyVcF3hobsfLe1fdFJEtFmtgWg4yVj5QeLiGvT9dCeBDfGNSGb",
  "key24": "nT7eaEPBm5GJn7hXbBAjxi1vgGspvJdDtceKZQq9h7BtCUSt5XGhKGRRDrrkqpAs7PJpGa2mufZXjhi24LFg4DN",
  "key25": "2ctTqjUu7Gty5A3e5M8M1K9jUgPKLohAsWWoVvReDS5Qh8EcaycRmZa9CVjMpYGcVNPTmTsvHx1hMCv91gf1azKJ",
  "key26": "2njRLu1RLgVbYG9FfY3DauhXaw6xzYQZxhvEoCVoMNoV48mQHjVM1piDuSuetRpRjDdJMGrsgkoEDYA79qw2mTuR",
  "key27": "2PaVYpbvHTozhNBaL1h4vTucMGvtrn66qTDuzuGRX7jG6uL5Q8UiSgqDMEKQHLzFwzQSRNdVKd5AC9x4J1Uc5Wzo",
  "key28": "44wryLvKLRRVzXEgZkEjuVsNQEbg1TuNRrRq9UeWaZ6JHUY6QV5BYe9n6kqCNuCcQapAtm4KegVRMMEdvvGFjs8a",
  "key29": "57M3qGxu3VfqQnxqxhZzT1WmLfA337oMnujpYpYayT4QeK499G2v4RqtcgsALkbxsjKScrr1tWbbWr8ZrYjNnqxC",
  "key30": "2szhSjAGHtaUkCRxAghrF77qdmS3oBjrMzHV4xHAqZdWB2DfZzTbdec2DE11WZFv3piXtPfm3wm8XdVNngZd7uTp",
  "key31": "h1SHuDnnJZQiTksiER8sxkF9hnfoUEQtaZAT8qX6mpny8DzbX6qxSt4n9x9qb6iHa98bhUHcFhBjvM1c6dUivw8",
  "key32": "5QrLscCghogcEyXooYPmqJkvKb7tJ74tJ81i1tWYiJ52ZmkKUKEUuSwQ77k4MExWRGoFFZmuZVdGRsCshoN93fk7",
  "key33": "3jAcrskZQuS4a1YmdsTbeCehwXhxoqNzM1e2aWkBqkb68wYfdQS9W2iuxxgbsgcWMGfpx5GApPzhMCvD4HSVLJmh",
  "key34": "3GhTiLLFcavj72qM6gHzCPcMdLCFJMcofoX3cGgVUiZwyWJoN3oVtwDPnQzLSZXoXgCAB2sD3JRNBdG8awYp4Ny3",
  "key35": "2P5NhnTyQtzFsodVQ3XiSVFhaWm1ssgUHdTtVW2G8qhYbJSo2DtnLYLHxikfLttusrWnNXzaY8dNN6s47ntVEidg",
  "key36": "3tcM2PiVzBdQGcxkMm2kPcgWHhwZ5g22zWKerLPfMEKAhmSMjQUL2MLUUTKfbBuK6Jeo6ktrt9pquXtp5WfiXxwZ",
  "key37": "48RKZWqooDvj4WEwUazzA1EC1reiAGuuUWjuw1qj2xNepBBoETnKskpHGuH3wrN7xUwghVC9Gqb5rBatxgA4mnfZ",
  "key38": "Z2jympiNyDFpY87YctyTQr4HYiDnk1QiosDydnX76x94x8s9pf6ZHgQ1kTjenL831GKuGm5VKMWRJ5fVy8JsTdi",
  "key39": "VWQXC9Mx2fHmiRGHbBzx3ySnCFiDcDN74fmXvkBhmCj6H1P9iarT71nBZHpwmcGNYaLmEVw4wspz8YELU7YjUxu",
  "key40": "3FBGsxHLvLrXjRqbkshQFDJRDNny81t1uNLkFzx8GKDXHvndz4XzUNQNFRPowq3oAak3WURr2puwYZbnrSFbSQXb",
  "key41": "5yXgxi5CGVtYhMmDcaoCuM8Uq6CJViamEsmJnB6UCkzktdPp6VZ89Q9Q2gqRuW1PbHJx7tCb1U66k7Fgat45DsAH",
  "key42": "5PVo67F2TPe2FPuTwEbcrQAMaafnLxqZSXXZivwpL8Vk1AH2LQ2zRnH4LSexTTU1sHPLhzmH56KrpXg8V8cBna19",
  "key43": "4EZMSPuwc5VExQQPQcXW9XaX1idjcqLg4GPvvJ2VP92Seu7Szotxvnh66JURU1YE94NFFtT4NqrPaKg4LWD463M5"
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
