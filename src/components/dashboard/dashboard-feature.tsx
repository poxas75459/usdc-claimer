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
    "WSvrHtQG8vkQSXEcXLpFnMw3LMWgN7kM4JCMb2hh1Bsm5UZyL4fyXpC8tNh65qM4sKCWZ3AjHac532BJGSz4kSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FNqHhs9HgjTYV5z4HuyxSUYWoTeRaciA1zkw9UdSQECsNkcPV1zL9LSBkHsk77L1eRqTSVhkJvhMRieteZu86TL",
  "key1": "61mbwKmsnKarqpVdL7ZXd6qR59LaVc5kr7dEpC2nZpRiGHN1jB8H7qpCB7kKF4Z9QZYYTpARschwqAqmWrj22oGU",
  "key2": "2ttNirXrfVDZEsXwvRry1gUUj23L8PhD8XmY2SFH9ZCsJBRXCf7UVBZ8DtfrDc572Rbn34FXJzUaxCWXSd1JLNy2",
  "key3": "4iLTtFEiedDKZhzXPyWZ3KuGc6eU719a5oNW2PdwzcqusguoVxvbgaLL8nhXwHdMAXWhbHjDiKUHFnyJEvN9HicJ",
  "key4": "uMp9u4zfysTgjYtYcL6F7YrXjFv6YXwQdsUiEy5AEP2vvvN4gBtx5YESykKXroru4EwGVMHXBwATQa7X8CwTwQe",
  "key5": "osY5LdZvnRuJURVY7ADPxNsQMnuTvGxnuFnTZKaNQtFpn8HLSYa2ahhCJzAJNqotbsVJQrfwKysqMC9BbQShcn3",
  "key6": "4ccqXwaeWxdwxQQEg2qhv12HEUZZc4u9Ap6LtVUx1nxZkEKkjCfmUHLUWhzrkSG2ZLb2oHCn1n2BAPYD6d46h6of",
  "key7": "4biwbG7AXZBeeZHY84gzWg73qceU1yFxqWzNC7D9GBbwv2HJxJ7ztwsrLsWhJbryxHzLUipLA2aKbwqTZqRbGhBh",
  "key8": "32aPNBmqozknMbbnzG2oa1kdYNKeTXFptQs6N3LBjtDDMAmJJQ46q3bXeCQYURw98j8WFMYPegUFCNMKy5WaP1BH",
  "key9": "2LJFR2jmUvSNDAXRpAYk2BYtZDdLWe6T3MvwcUneWHeX6p4CpzuTxhxcG7KPgnbCbtzev3ujv7VDG3hWdqNYRRFR",
  "key10": "2YK1DTHJ1E3DFnQ9S97Xf3kqZjSVcHCWx5Bz9KA7BbzpCrwH5AH2pPuz6rSSNPtM3UdGRHYh1UMvusYoeeU9xxk4",
  "key11": "FPoqF9eu3F65xWr1NcJi1ewRg6xwTaJjfqGh2cw4F1gPqB3wEgkrkNUoxMfuas8j2xby89qmtEqLE96iQJjw75j",
  "key12": "5rvRQsyH6tAUqZ38Q8U2Dy8oNh8BEhvN9mHAR1imejCkyVDGsH1wxDmA8MD229FECcxQdnR13rmKxxyEdyR4ZKCN",
  "key13": "3Eqi5vP8igPjVxsUQN8TF9eoEdJVLrZMs682qpva6rk6kZthFGqLtqG6jGidh1LeFdetp4GdsDzHpZ7ewqnHmEPt",
  "key14": "4CEUkfuR4PwyGAGcuQCVniikx78MVpRtQd4h11EeSH1EMQnNFEo8LbzxnJvUxG18hQc6MLG3XYjp8tY5JiREfu9g",
  "key15": "hRWVxN3fJdzTmt6uXY1vKWHdBE2qNYjmbRrofW9QxJjWz4QpSVpStGYBE2JdMeiroH4NA7B7sBpeewX6hUjRBAk",
  "key16": "58RsQ1CKiQniH3pLQPsZ3DwNevK7Ck2JiCpyyMC8Px5jALcaKBKQMWFHDrmtdujRQb8jHCJaeKTtiTduXexibqhp",
  "key17": "5jAgWJ8qB8QdBWArnWGgXQt2aHTNDg2d27xHfNrZxw7xuoaU3zvVkJwPvzpdL4bspCGSM181AHZ8nvgbKeM4nvS8",
  "key18": "4JUcj1xtK6aGW99hxsMrXuFwR8k3iym4yn1BXkiFhjzdqwAVmWF7MAUBQT13nWp4asHVnSd6YcXZypuvshkpHDyq",
  "key19": "bVwg2M1dikV6Bf8E7VEfuut8MrW1CtTzVCVubJXg7mnMJzzGCmpZqfLCDePYY8v4uVDmTpmTqZbpo6opVQgGV6s",
  "key20": "RzgLzFA675dJdDqkhvaN1JBVEixkifJGzYFbUouvRoPN2GR2yFkNupPd3Wz6V7aveWaiuy8hV3D9Esj5uDugkUm",
  "key21": "2rAFBFC1hfBWyYnpxFALm7ccoceYJ5aCz8gY2ZqD6MSY8Fi4fuZBVQqhoZ3be2xorreGBh3orWgRrxpFsEobadoi",
  "key22": "51n64PP5EpwSXafucnJazREJJdxVUUpMoFZZokDwTs4K1csqkRuypwN6fGMNYJaokC7e28BVs7k73bTFpP9j5XBj",
  "key23": "9STdJ4zxh6zD6qTN88pdeTGWmtt4Sfr2FYdC7fBWReKN1TYJRnAHhj4eyAVtPqLsLifj6phtj2YRedB7ca4dxsH",
  "key24": "4ptFfkPQLnKVdDzgqASMzADGHY6Wfwk4X7VFVM199PJtrEpt7hVwoes69mU5YvkxztXbz5yB4X3N8mAk5AkRVnnD",
  "key25": "2JATi1gPpFufUo2fzX7qN3fhpy18pq18m5MKCYkwYoZaySgwJHuPKHAUjkQXY2AjTnZc39nxGKchtzryHB6Jv8VL",
  "key26": "3fhYNRk3s5TsPXgGM59pF3SheUUxDpqahXtQXhFMUSbkGTzRmoAy7Pvzm1fa3AkicGw7NcJ4om6oGCWjeGUn6tPh",
  "key27": "BtBteU1WFbJLjET5gaQ1PnVESJW2aGMCoD5UY5BmwMoWKVBS4QUK4s1qKsMPRNPWCXbjyvKARhd2LNzanCTiZFQ",
  "key28": "5b15v6rUvNzh44WASftci3dHxbVeNkcHDmoGxnGZP1GfqHwD9XxVbRiAJPuzem57vH6yEgmZwUimvVtGTFLjHdRj",
  "key29": "2WF4qfRHaDW41LT2kyRaATBRNFoJrfcTrn6Fv3QCvfw8ng79USTMDY3hymMc9855L7aUB82sXDMQ8LUyNe6HggfB",
  "key30": "37SvZLLXQNMo4FGDK6fGPWBpMMMzn9KG9fRm7hSy3fcWBxoQ7Tiskr7h82cR9BF9QD46Epdnv8vTN2t3natpLVJy",
  "key31": "3LNLej3PkiPk5Y9HAapi6ptysVHNer5ZKQs9pK47vsaXrL5tDukqx2yCuMmnnY7NXnf7fFgd8a74u2XBAVh77L4K",
  "key32": "3nqAaJcsY2w1T3tw7pmDZQueGMsbuHrjQWnEoJrFUaFg749JhdmpZiTVY4Lc3HDNafinfMtuTeTrN7t2VAvSKs8N",
  "key33": "bUViTCCB5Eh3KFAuLJ2eg4wbCN1imb69cHRL6LCuM7GLGRAaVxaMtPxeJ1yjyNVb1stxrwQiBxVDHsARUjj4wTk",
  "key34": "2wzQqpoyWygxGSWng6WRfmCcGokaHX5xUrBXd2HSjw1BKuxcKxZvJQadVWNkRPcJAqYXrbqJGXZX63LBNP2qJg4y",
  "key35": "58wG13jJKM1xJ61c76Q8yenJSkyLaPBmescSctUhPKj2J4wtdWeTSZZwCbHdm88wS8irmkR5y2swtfbKQWVhwBHi",
  "key36": "eATkWDwmvR3ouzBUQHPLieERiB7FAzfMmG2KZp9LaP7aGswXeviTghjACug8ZG7Y7fhq6DWnbxyxSjzWzZQTERc",
  "key37": "3uFRMe1Nazvd5amx8M8uVvxMxA1KkKHqi4fCCYgEofcCxTw7Nvqym6DivLXchHeReENCsSew383EiUwrBqnXT1qR",
  "key38": "2aVGAZUG5FZ6mCejiVx3oXRY7MrWAmJFMX8JE1LnYMUvQ1XThsz2sA7Js8vuZkBcgHo6vwChpktTvtKPxDi5icbX",
  "key39": "4UXshpCjquy4hC1w6N27Vvg9WF2SQLpy3dPH1izKrkX9TfvAVW369UXFscETQKacGcqKYZf37qtD4tYQXG26upP5"
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
