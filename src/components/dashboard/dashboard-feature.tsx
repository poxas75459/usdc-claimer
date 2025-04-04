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
    "4abeNoUeFoS7SnySQ85AthGNThu9rpkUNMgffjQnvYVxe5zRY2DS8GgwwMW8BVumWRqHNtJYiTnXzCbJrpE7467V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZfDVqNFwoqimsKiVNW1mkyJmGZ1hSYMbDW3wizt93vgNUuaM71d3WLt5cLAAWv1PzPbtj1CUYtMtibw7AGecai",
  "key1": "55jxADNSQrneDqV3UznyhMjcehdsXcxShyuForpkKtn9tQXEefxp4xeW9MrUFdh7BTjRzwEyXgPZXxM8y99MW43Y",
  "key2": "2sSbii7KGVujqSXPpa8SiG1hsoCKboR3g2wnAe7BnrrnwoXWZD3dazYjaycCW1vR2AhCe34s1x1dTXodxgh9to9J",
  "key3": "3MF26A1AHedpfsL5PnkTgpBvDa4QsK8QUvAWnBjD9GHoxfsLJpgVjohf87G7JMdbeZFPqNKEeb53a9GAciz3GWVg",
  "key4": "4Aj3eRDyV2zPc1JVc7agUe1SmZNULnH4nkoeWYbzAJsAwxDyfTMnutPavjzuUtx2ve4MKj5gryoMCw4PGwAigrGz",
  "key5": "2nB7FTgxoYg9qudcYRPZnz5k6BBDrAY5nbotfc4T4ThsVW86vZMmpLq7MMBuDZkuHrRMxNywyNxmvi1ztdZgWCh3",
  "key6": "2FTzp7d8LQBZTFJwAtWtroYFdLGbQCdDuvJd2RR9LxvC32pbPoufsajMbX5dWnDjrdCwoLZJi8p6j28ZDWFtphXu",
  "key7": "22hz1rRfjBgQgm8jgiWXCLZhR2QQGeUG49AVCaRMRX8msY1eEBmCEqgSYxPCZV2WJvLeJs2hpnfe29m6pbinBe3T",
  "key8": "4uTNZW913KD4yho1iCqEVN6Ya7ssNtx3LKxdkSpgZkk7tzthPLqPwoyT9qGN5odYxJ1E2CPDhMZMTBsVbZkqp2jR",
  "key9": "2HmMocbb31pAjbgXLv817LbE9uo4Td6MK7xEhBsm2uy9bBUqJkqkDWujyR9uuEn4kas4T5zipAGUaTukfQkYH4z7",
  "key10": "3UfKJZctESNiGUSdi8tM94d3RyknZGVeua7f194YwipWmcUPvm98dCERvpUfr8qy7nhkvjSLYhcZFzU8Kf5uKNUR",
  "key11": "7KZm3pvZGmirv341eENy3BkA4ricmgGrJfTkB1WUUaeK7ivvXuBB5gceeBQB4f85uQszxxdDC69o9kmWhSa4oH6",
  "key12": "261UATpFy5qM8S3UgUeCzxuiyengqQvfPN7ZXeGbMETX9Cg7ZJXAPkZBJud3bSakX1wkY4Gy25VGZM5P77bmmpqJ",
  "key13": "65pekjGM2DiLhx96LPfupEod9QePbjx4swdm54Ds6zBvTMfUzHGMjXRofK4w9XtPRxeKo3mLxFQHeDrkzCMdowUW",
  "key14": "3dYP1Dqc5XqDxh88WDgo5rHkmrLWGFZZFRvbaoET2E6hCR3Wq4rD94xFLb3f2kZWgyVMzmv3bpohQYauaTHZCNhR",
  "key15": "5be7ZQfNLrQCpYSPZTQsKMKVg4AoCLQNenixA9JATsqG6jv22Gx2R5RdHEXHisBrbbSKWkKh8ncJ5SaL2VqcYvw8",
  "key16": "5xGVbrfNDeFUGrB836EcCspcdmUwM9uUXq66UwnxGPbXMonq9XvYPnu5yGNcxYqBicvoa4LitkJBhWzBZdKzNr4y",
  "key17": "61yUadTiHS9WyC7n7ipeSsNsrws4rF2auXgyd8sqradVe49Nw4iBqDmjbYVgPYiyQTLhfbeQRL1n68DaBTYzg629",
  "key18": "4XGjXBQiBJQdS2jAYXdJpwWHzNsfdEaspDPRS7accQoajaHNwRHcnP2kafDDbmez8xjnbEUjkTBhFuWBzDrwwFDX",
  "key19": "5HsMW9fwLDnbkTXSkttjcbDEBXpsFfLQi2hZ8Duti6wqJCcv5MGrJCJ8pEpnWmT5viSLJbUHnmGBwFjQxWMkNMin",
  "key20": "2fw3JuMAfzBqZL9aBi5gk2YtjkWaun3ps9sNq82hV6RWTE6mXFCPZDa9dzxT6yFu9Srzm9goWFRmsAi96tW8LEdG",
  "key21": "4rvrXXddWm8yoRtarEeq5mdctgjBtNuNiDt5g9SRtjofTM1LCW4r1a18XTgePvWth9BKL5ykfDVSbHGYxKKxMpYG",
  "key22": "4boQrVps5yeUQnbszFBUhfjVriaRWSXbWHrsyhRNrAjzimEEqZRPGJ2d1V8p7Nd6v4AWqKeSzs3ZtRBshcXRuo5k",
  "key23": "5Y3hd4EgFndNFvwMP7hxzzSXpVjSq8JTPpoKyKtfMwvKAnfbGXE4zqHSWwNzY9FSxhkLUBpaLmmfN8LTG5u9F6Be",
  "key24": "4Cb9vfWchVJfJpfy1fdAh1nNB3Y6fyFx66kMBDoGV8piQXN84s4RhtwLS2Cw8ZQ6c7N3jPVCXNY2HmvNTHuNAy9M",
  "key25": "3Nq9BfcV5Ywuvdxapcd32TTkmKd5e6RwPems19fBt9kooSt51Bj2Ym2D39oWw2gPTgVwfeQfbevNxLv8511nvbp1",
  "key26": "4QsxZ5iCdo38Cj7QsjvJ2WLy8LHmbh3Eb3dJBEc5aAPm2xBRbejbxKeghDeqKgujFRX6FeDdi6ZvWNDhuQqrqbsG",
  "key27": "2FwgQdCC9r8WoPCNf1buzWnNAuoYpmSN6fNz6NeRDKFbq5fqLBq5jHtcBTk7W2czQZ6Ly3FtskgUXxFARTG6erx4",
  "key28": "5eSmcbnVE5T3zPRt7squ5za6sojTHMk9EL1sR629fLtrKsfLh6TpXNs9GdpVAk7mFGPcgNixsXnCAqnP2NzMxSJR",
  "key29": "2dZAzHJ5qRMjKGdVtfzzmw9SsWGfZ92Nj4unVY2dJgAbxCozwHA4qHqg1wgmrF95LhNTDhgxHRvrbuYmKYUFTSHo",
  "key30": "5EyRbCLD22HuhmwoRcwwusREXTdY4HpPthCW3ShKvppq17E45aoVndugG5fyuy9m3uhjXZrWXRPVX64oz39dTsbG",
  "key31": "5xSeMDPuBXKsSr876sqnsLZaZ8iXo9A5JL9dzKMURnhs45QTN3KWoHt2ujZEqzLEuE4uv7sWPjVHBZTi6mbVG9Cq",
  "key32": "4jiZeQEd5X7MhDkYxGGWebViu44G8Gq3sfBjMCxRZXqhh1ViQsYjMsVrbfMStLuA6jc5aivsUyiQaXw4fW6NmS7U",
  "key33": "64kUd1tQ4sgTWQCuXVVuUecTYBiY1MKqSuTg8ApjydnLvA157m7Dzm5Cy7UNWvehGhMtvasASPKmWVQ4DuRczpZq",
  "key34": "4GtvhFbUSMkjajuouikRLNzSwM7wQqQcAVNY9e867bT52KTQG9vSd5CKJFXHR4ssmu3646FSUfxNvnc6LwxsmjGu",
  "key35": "4w25Jai59XcYUkVSferGRiHLK2oxdj2riywBK8vtsQMnUVRNp9KY1BcDcR8U8NSN85Vx9Y7hec6nQKM9MVy6cSH",
  "key36": "5Jh9kbjU2YdyXnKHRLhW91Awzn1eTYBqzbxprHR5acsZmti6rcvg8uXfxaCvenPAD9SHWy4kZ4vfkzZJvVyL453W",
  "key37": "4SKCghka3Zu3CfnfDrhCpJhx6LddmJTUHHDyGDjr3n9Dpsep7GZBGLBxs7yUewM3rt21CgwbZnyHqk5x1dK17RFN",
  "key38": "66zewEuKKhfZBfqFYVxQzw3mkQTCDgP2qxMpSP9RfE2MoCjPh4rbhhGmdjhzWiGDT488sdAd7WpAbSi92PzLuQES",
  "key39": "5dVkrra6Feb1JFCW9BVbZRHnFZVn9PTLC26BZhazbYkq574eoRTa7D9NGQXBwNBpdE2xhLaiv76SQKLfKpj7WAxT",
  "key40": "4kbD2sx1HMoqzc6MzYPUAqvy1coCFLkzvaCAFtKBGRh8pnsG8KBk12477ghmHYuzfAuEDiSWEoCqaLFhmsxyeTjd",
  "key41": "3uHM2oNTcd1QE9dvC6tYA6w5KuctetkYM93stM6sGgwktPZstZ38zXJmn47c1Apq1kVbvkLxzwHhz9BsvbxbAS4h",
  "key42": "2Gh4DxXMBkPSnRM7TXwDurGThB3YMoMPvDxjZvctkkzmEQpz4dLx1nATKCbZNZeW1r9AY4qVJjdMxjkVAbeMwnBr",
  "key43": "5uL4PsNQy3a91Uo4faDaUL8BJWEetMp48czsSoeG8ctDk5cN2C9WxESVtddZbnqJN2ELAhGt7Ca651eexMkh1jQi",
  "key44": "5js4oSh6m5AnTB3Ci7SxpEgN9aB6RieDrsgRM6YUGtGDQCkw6iV5cZGjw3UodZr6ZVMuCBjbkLUThBh7qN5PQ9VH"
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
