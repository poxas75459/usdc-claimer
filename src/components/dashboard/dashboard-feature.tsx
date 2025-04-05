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
    "2VBfCWPJVdzbKvsnJSFjJWRcPJxsJFEtjxtuAUV7U8zJRp9whgd71n5vA9aK58PSfxComyyZq9tLfJf8fw8MUif2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhB1yWfME8CmnH4hfCPe4KyJ2JVY2wQyzGdrSbK7yad72kRf3WmJAG7VjpHN2eytCv2w6NVtbRkN2TXmiZmovG1",
  "key1": "2m5EewuhanHMpSC3nTa25hmH97YPWXR1ZpeSc8cQif6UKvvkcaD6cHisQrQfZsF2VK9RpTR1d1Z1pwEoWTzk1UTr",
  "key2": "3k4LFkoQ32pgYdK2gw25wG9NLZYJaV4nE7tDQ5BfM5fQLaPJKvJva6wrK6JNXf6U4FHw1NTrnXs5Vo5DmczbPGs9",
  "key3": "66196h2EqvMohxwhTR6pY4oixbXGQLNn2LTKhRC4bZ1u7b7bkuZbfibVY3o1LZEbnLe8tHWq8HcJgJstf8yRvEFc",
  "key4": "566WcPTqc4w1m3Lzcdyem7Lf2UgoZq6o7hRgmT3JT7btL6A8o3LYwxEWjn6qAE68XttkY1JFiTyJp7cPmAn7eRYD",
  "key5": "4t9ZJXYJXqcfkMryRdsWaWTaWCt1BejsUC44NCTrMxLWLneZ5vAU2aeYMcPiife6d51i9FQQh34jH82pHabtjbTN",
  "key6": "4792KzFeX2GhnZt26WDkGEQyewpprmJnXjHU4e1iMK7bzHn9CeJNjaE3V4qLss9jT2qqxSn7FQejiZJVzc8zCJh1",
  "key7": "5o5Eno5FtiXST3195wwt8js2k5QyLYsLiH9st97GVvZSRwkjjWDUomhieuF5RQT3DQ5BEUbLY8ofzH9nyWqpWSHY",
  "key8": "5SZMWEiLHEqhwMrhwrEnPT55RruWbHn7ZiXHkXddXEEPHuHMazeUWnLDxfqAHJeja8LNppiPo6TtyjRznCTuktX8",
  "key9": "4x3UdPY6DeJgzTggmr9zNYfF4csM6saxZNwmZkepnVBPfJkzHkR2b8Z7RuHvGg33gdSwUU8CCkkvZpfCzLhaZx4g",
  "key10": "2QQReCQJeFzFsWNgGhi3dEveSCPkec9N7wBD1Wg1gsLH4AP7rDMdoRgrNoWigN8dKC4wRwkAWG7vEwwsCdN1t6So",
  "key11": "v5BfJCT8XVtTLnXx3rYftjf6jA2NiXTzay6P9s8PAEUgRAFX1u54KrCskzqRVMMJoGZCeXrFKkb593nAma6aLcf",
  "key12": "4ty3An32H29DPoUGhd8ssuvTsKqxdDrqerove57wRQQyExgmt7WVqZFG9KKaxqUgQyskc1kSE4m6S3YAHGV23hTT",
  "key13": "3EJZheMxoAnf8jo6myefJ55duLbKYJ2N3xp5WdHa4rwdwtnc5iGHvRkGkEtqUjKFHQLx4oK3ryabcY193YdnWEco",
  "key14": "hWn4rRw9QsbdM5YLRep2nXYBEdwhyW3MQL7VG36buq9ssH3KJMVoMcFdnUU4FAE9zk3yVYagLtmkPpwjX1RR9ps",
  "key15": "PgRhp1BLpeBSe9wGsykp5qfWagBpDe2WnTp8RSGDiaGtg9gWF33Liwq6HZ8atCuCuQcQTUoC2YdxsFi8oexJeNP",
  "key16": "e4RtFrYKw6wgHeLhyTMpwtxr6UF4wDebKXtMcte7hfX8QcVvgjYNSm4D1fWSzpaPhBeYBgdeCXq4313Y1YHHnfg",
  "key17": "3XqeWMBDzGQ64UkBj2WQYD1eiArjEFEfgeQjyUqMfcLKkTmeF1CZxnrepz9m3UXN9jWXQ9rtw7HETgPFERNAsaGG",
  "key18": "3x9eHak6LrLNZimvtEzRN3Bw6WmY9VUD7PV417dcH3nYZ3Sm6cvMpGArN3GcKNG7Qs7hwHkfb5PtrKCgWwNaZczJ",
  "key19": "3JJCQVkA7YwDewk4dJcFeMKgwafTTKLyWkRgPFdmxTadPZvy5CB3h4emNjz7JokgBZWVau1CnEfx8tHj6H7BiS8V",
  "key20": "6173tcU6PEmPG7fhDidcT8PJnJT7KifmEvrqHe3HabcUzqoJf2xPYThchmznu1h2EJVdGJMVghDGeMpkoRmfd7QZ",
  "key21": "3c5G26kD3csNshaUP2SeZZVmquar2x8mjyDL4nrNLJcrBX2ehcUivnKr7Nh2rSxoM7nMbvZY35XaKM19bQscVkRJ",
  "key22": "3jW8y7MisauynV7n4BXh6b5z7RZwusUEYqnyz2osYLpW5hMDjbZsnepV2REaX1Jeo5LTadqwRVbtqQvVudynFTUz",
  "key23": "5MzDPSbzLp9s4dLijX97UPB1mizcD5KWFuwL617D5xbt1d7hpd39mPnFrqtzPGYYn6ygqzFN83XkRfn3poBviky7",
  "key24": "5zXEn5VM5wWAg24fPADLV2kf8ex2GW1igUDH24V4LHV3RnHLjjge6q43QGdUM599TXu5zLrkdPCvE7PowrkCqirj",
  "key25": "4dAjjSHmXYWuvPSbYmWxpxxzVbNSavTdymqwH5KdHKBxXek9Ngtz4r5kpWmcPrt8RijJYV6MmBUhfZ8FKACc1P2E",
  "key26": "4ycEB37ZRwoXdfmGSs1vJYMBAT51ybe1Mg2w2can7w9BCk9WMxn8tCyqDASpqa9MTv6v32BLbCQU7HVbCUULnSyn",
  "key27": "2SzAqDxnUXZLRL2jobHJCBX3cVEK2R9kPxcVTBkhDNJ8D3oLMueuDWQq5NZVJv4C2DVVwWxRMGviPN2nSPjQKQWE",
  "key28": "BNJoPwQmW6aHhwTvKzTE7WawFWx5QDdMpKqAKxVwFhFf75RqA72gb7DjFumrhU1j4qyjMkebxhEpVRzJH3RneuZ",
  "key29": "5oY7ZGfvMpW8mvNNB8qa2J4271bQszT1BmkSUriBQW3qhgn8gntLpimPZQYoHnkXhqDjHSpsb9r3VbnC7x35kj7U",
  "key30": "4bLdjtqUwaBb2Chcf74f3do8KHpq8d3VZYqVWXsq9Zu9gyb3tFjT5vr1Yvc4SLG2mqzm7hNiE4CPFSzxpJAEXZvX"
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
