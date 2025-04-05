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
    "4KxZhe7yvwmrCtjybEfrRGQ528Y8ruPBv4de2dTqq6L1YCa45HQmuJ6r99hU5H9LoREkD3AwXqiDiQBrdkWfzsRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUdB5gC2eRhp8u9p5yF4MMw98JoEvNZcHiz8vKHDr1cJuT9kKKAeqkx1HhrzxmAKvRAYyFbbZUz2dUAUvTuDAVW",
  "key1": "5RwEfAJdd1mEGHp1aouSZJYA93tfP6dkmbNuQxMw9xKKyU8gFxnHwMu4x4SM9bYDTJepu3UM3fjVPzE7cm5ur8XP",
  "key2": "3wEXgcsEM76tfGExpTHcCMZsT8FwYAytTQTiNwgfN6QnPgvJpxWHBx48QpMJZKQataSB42EEJVXwAaJjDB7AhBSp",
  "key3": "3FSg5kfwnVAcnxpfx9pbsugANdRAqsnUWi6kBib4utjavGY8N8Tng1o9T7foUeqwkUBJHkutC3THLtbrUVEArJRo",
  "key4": "38nZ7WmkA9NneJDiAeXWm964VEMGsEEvVqqusrVw293TUJEDqRPpnFhr3qarvdE5MNHwKDZSDpeNRkA1nU4C58Ys",
  "key5": "4Fdrd1qamDVEKGtWHCdLT57TbLaXStm5KdvVbFihdjzBcbaYbwxVyvdzQUVSeuC5hpHSGpboPaMoVYrDNzsSNE19",
  "key6": "2UxsLgfVfcxxC7Ka88oRpfhtVz4sCACdEoVntaydQjG7B1NEb5NrENFCpg8MfVNgzZBeQru4NS1s4cw5GbV9USa",
  "key7": "3Y66yy4krn9ypKttMiFred5qBWvuGdNtWhppaZP38LM6iLdaK8x38XxUyDygXZMrkDFKkf5oDpNphvZ5v2RfBYha",
  "key8": "NLx33DgKZBfnAmBxTJ7AE8DuUGRsUNwg8HM34izNfr2bgMjwZ88WSXNivhayuBW21zHUqNP8FDCV9tPsk4ERoh5",
  "key9": "3tugTJRSD7jknX76eUt8hfshP6a4WQ7Aj8CfEzpGVxpMsRmXwjxTgBdEyHxqTDcVmrw8cXZ9w8CwAxD5rm9C26tF",
  "key10": "49BuLWYbNKx24eeuTbauaQtVjgjKrbfrSeNV3Ui2XzZsfKzTMgvJe7wkfch1hxCQs6vKBdvFis4W9siec1biRpxb",
  "key11": "2hHee8NvHb4UKsmxdtiuWjNz4ap835uPt4MzLqwhYgq5UQ7Dx1JGnDuzrAHVc4Zwb589tQfLx2tCg25PqZJqAHjx",
  "key12": "e96CrYUBAQuficf4sj2Yhjv8LMYqnwGap3Q48NHyT77vFuPLT8Puu8T4Suu5V5urDbcs8Puaq947g1a8Mxn7Re3",
  "key13": "vcxPdCtZdua6n8hKVHsoiVR6q3ttuoJErzmdKhMicaHAFVTLytecK8qQD2316hUbDM6kLvan7VA6kxwosbKhYS1",
  "key14": "57mcYFyqDSXaFRMjhbUSPLZFXrweUJjigZCTYiooNws7Aa3ux4VzYsJBxxzPehLHmethcrJHnvSpqhWTFKLBQySf",
  "key15": "4kqEwyrCe5eHb5CusJW91YbUyhLQWRKzo54pheMzfmnCkjShHjFYU4jdmunaNpzbvtRLPdmrwtnotEDQZetXJ4Bj",
  "key16": "2SA3mVk2vpC1goSf7vDokHiBWjcATJe68cWXTDuZ7iBtEoCAfSAuChbdZQgJgbqtyHGNgCq8xkbMGfZbgHLnpRjm",
  "key17": "4qN4CMBa4aKuLa2D7DauD5JB5bkc1DHzbkNfsi37hkcMU8huV3X1B355Prz96rhNmtEioBt6MLuzffH8m5QjomcQ",
  "key18": "2iVsqkqcuMeb7tSU2UMvB4dVaBFrkW5BrxHxJfe2dufK398i4mW1ncu2k9Ju3N3h71VV3t81ysVM39YUFEQ6jh9i",
  "key19": "4H1G3XwgMecbEYLunYWfiF9axspAf6p1wBWPUwvWBbqaqXYg4J9qe2daQM2rB27kiCFZwuWAMUPe4uiPEuaSBni9",
  "key20": "2eYeuDQXVwQVFsncikWsgjY6qoa75Ch9w2rHxLHGyAjjSoR3HVmTwXTMpN1SV1BuwZ4rgzKz2HrAUCH9brAyNDLs",
  "key21": "2aXLsjGqezrqTk1LPuMVUAgFFXYpAsshLJmtYjdnkLNcwvi92ywdDPuJJ3ELYYbRZEKy2S9espvUp6hjaw6GtBrY",
  "key22": "2rip69v3nEViS19DHxua2U6AYjF8RrcauEudyqVobbfGW9z4VrbeQSeuhDsvXkwokwc6Kp6EBQiUa7Usi5nx5kN8",
  "key23": "3b9p5W2gbayxNuDWt4utLTsBgTLpyExuAcrvY2cGunhhAm7bgXVxV7z5jwHGQarK15JYiQDcdyHsSgootwRfsmii",
  "key24": "3upHWqQdbLzabu6T3asrkeFHdbBXWWEHMfo4wnFrWDzR9qXDRix8yFJ9ptHjPWXQpvQ4yJuFYHxF8CoGF6JKW2oF",
  "key25": "MXzBnFyv6kV1yYhthQDVjBHzekP3HCo7UhA9RLiEpmcZcPgtBM39HbWviRnVRxAuR9P2DXxt9VNQ6iuQA3QTcF5",
  "key26": "8mBgW71abGcbNKxsUB3exYCAexXjUSVZHoeowPtiyKjVxiNtdF9ZBS3qKfLKBTMFKugwC16SksyWKbBnSZRXVdo",
  "key27": "2dmdiBzzKnSyS3jSx1pLJ3HzFyHgzxigsw15nQGhMk9gjAWSPusAHVasc68zyp5GW3XNadKxMu2PBhPR3JDJmBBP",
  "key28": "2G3n5kYuKf7yfK3wQoaYxdcSLBDorYGAAM29qkFEgZ8sy7ETmUJDNNUr4hF218PD3xZ1kL52EW7SMhW7Ko4Nq8qQ",
  "key29": "eJZCZzjPYymSAiotRRYhSpxQq3JNZZvpAroJdEq18W9dDxcFrXJbdn3iotT1Y6HKAmkhnu3SrfFnA4cUFhRrYPG",
  "key30": "5g1RXg838R6oJTyzrhspbn39VmQ1eaoRvRxiLuCpJh6kUNTPV6NfeEUacUjtb3Z61PuRhNW24mz8TFqkyK7TjHTC",
  "key31": "2KjJEbHuVFvfhtfGmc7HTMMVZL5CDFvrQVdjCMcHH4nDsMZy6Wa29rYSf76iKDX2AjSg7v8w15UckjZqGNDKNWDp",
  "key32": "5x7viQFxJGaHzPZ6jtsERThm9wtrkTrD3tnh8c9C11r3nZsxwxu2LaNq6sNR4H9r9cehhDaMQmSRFPtcD5U7PYmt",
  "key33": "2MC5XyWtjmkTn56bSE2uUpk2RHCQuhiyrQLBeBSZPo1Nchdpkm4t1gDXLtwg9Ukc7E5Wz8ewP7msQE8WALxCP6Gr",
  "key34": "4HQ4A2iqCT2MiM7hxEw5eYGcmM8JfkLN5arWjwacxvA32Wbs4BokpYnGxh1r2goaKRQBJq6yxkHmcWo7SxfDUxjL",
  "key35": "4h8knR848r4KKpkm1WVSeQouAB3mqL4bn2gXKsafBxsXaaBn1XWz1yMcQfeWWjyLAkCma9DMBhAkDZKTvkNc27SA"
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
