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
    "5Nezv56srpxToUeP7AB5UVXHwT1HVAwRTmBbC1db2h2559iTQEYb3yLhbYkDFP4xgqoZLjbe5eG4qWJCAZf9H7Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DcceE6DgRk4rekrwx5HJaRfCLxLyb3BFAzWdYjVe1bV1dkFb67NKSKFpg8jXCSPBqB4kvm8fJC9SMmVLJpJSJwH",
  "key1": "2b8yBnHJcSFM6WxP9KVVvc8snEHq3K4RPcNVmEeS82E5oUuCry5a1tDv7osBM8G2HTm2RFJJKAeD37byDw2MHP4B",
  "key2": "3gGwbvjrUaYpGzF2QKVz5iE41EiFVc34YnjgYapSNFuqncnk5jfM2qa3jaqv8jCzTggRS2asceqoy268ynep3Zkc",
  "key3": "5qm8j7gQFRL3V5jxZRsRGQJyUvNSM9Vjy4eCFm9tMcduPmFAixPKJYuav7a8RgdAoTkGLxevuB97CeDBJwXxJz2s",
  "key4": "3qu7YKJyb5gmFuweGBSEDWmortiHjSWpBYg6bMVd1ZAyRemxi8avpBjk1oGDFFNfi8E9gKXiaZbJNLceALNk3tK4",
  "key5": "5ZpsDnpEzcmtqKpeQ8tCj516KUDKwanEzdKQQw3fvEizQZQrV8DvDGM6M6GF5y6Nsfww8aegQpKxr17sf8gJfbQF",
  "key6": "DQCXAvZzLzauP61DMyTHUQsa54SCWcCYWksmcLcYrTpxAJWEVVh5AbQVn8Ru3k5Red5fy7UvWhVRPKkkKvuV5iF",
  "key7": "u1Rv2xjF74zd2h8ggiqHen7cjYZuTj2i58dBFJ4ieTN8UqX22KkmBERL5DmGxPJ83rLaVoXbPKjHspMg9i8gu1p",
  "key8": "CcfQKWeZ7xgysowZYRTvqur6Epqp68M1WmeCqSFzr4ffft6P9CbxdYLgkBugxQjPuZPRq6tGtFy1HfyKQTm7MUs",
  "key9": "5RYQAfVKudv58LUjaiBKgvbdqNGsKGNWD2mzkBxBt16TdKhyU2FK2D7xySnCc6o6sotrzkWPbxi88Q5fzNfWJNa6",
  "key10": "2FyLPmr8MymZ5AGL8SPS2UfeA7Ege4jWroupwFrVjxPAcvg6KYd8YWdkzSnoTPJ51CWkeYVk7WN5hLCnxeQXT1BG",
  "key11": "5nPDPPnv9tRS52tmP3yMHYwE3EPBoiAgeji8AdbjK63ZKt4DFj2Km7uLksk479eNvY2MLuhrQ8Tj9GcHWSTQmzQb",
  "key12": "5CFXSsuke4KsqEdK6xt2V8xftWf1Yhy4AYYe7giQMUr7E1DXJqPopvzhdQNQV7z6vZbBqzy7LZsFxyFK66mw7wfy",
  "key13": "63aybUFo9AnbmtXdmhtFPy1fKDUgGmzC4AR1XGJpxzfHmReEYA5AKfsdavYQ2hbgj2bDbzD5Y2pgbXmxfi7rrdtS",
  "key14": "2jCpX4bSu5aDJx9u2v1Bpp3reqjcLWTntDsgzm9sayEadbwH9VCEgUySduyMjq5cZm27tRor7msAJsNjorwt8QnE",
  "key15": "2veFmPhKvanGDdrRfWBXuPAcirvYdeSjyCqV4L8GF4s6Sz54dvveAriXD4r9pYGjjobWixAYDMpcUZ94qTa92ibC",
  "key16": "5jvehN1BtBjyBBuy1Ea7pyQwne9nzMX2D5YXgFv5N4VyW9maRGQ7yRMCxW9nQGDgRPGj1LyVyhAqcPbcHooHJAMu",
  "key17": "56ujr2Td1xAPtXvaeNf6fnvY5rMzgphir1eLsKMkwZa4gdMgK2AuxveLYs3X3LhKof7GdfCq4rvhs1wME6fts5G6",
  "key18": "3Wac7cMQrzXsuKBsZPjihcqCxmqPJGVSo61Uo6SNobnrLTw9BHkPA52aS2DTWjE9MqdqUmpPANVKEFCuB9HJMMRm",
  "key19": "3Pt6xVx3K5WasyTme6pC6um1ZY7cMDmyU67iJAzZZkwU7ZqksHBjrdVCVDbwBxERwvTVoYCT7S4huArjCroFyZ1v",
  "key20": "Q4FwhinkZcy8eB7Qb5L9KUDQ8MgxLUmMxsMZZqByCoecs9irXpzBkNzbJp91k3FFCtPdG2ckdyrqs4R1X38DEjK",
  "key21": "HKq61rYYRy6wLgZbAPCYQzF5ZUTXcZEG5wGhRHbMEa84oB3mq8AXqQriQo6Vg8eXhWScoofarYdPHC45qEmW2Df",
  "key22": "3yzk7cEpt7QYNZHsUoXNZWLuNbgmdF6vrUhDiNtW6ndBUMg2vyHSTNTYrZAxPZwbhGmo1qCSgVTrGoBR7ggfuJHo",
  "key23": "2AfjKPt4tQaGz3W8pAD5qHg5sw3Jsk49S5wqGqDBCH4WYzM8QqgoiMpoYuDtvZaeyGcSy3xGgrDyJ4MFL9XNqeCn",
  "key24": "2Ezph69H7M6cT6Erhc82TkFFWrEfTpxr1YoJnBQvZHuUH8XrkRotmJpfBc36GUUL4dLXXSQke3a6cPbkY29X6JRn",
  "key25": "42LrTBojt2NHQiYFxyGMJo8YMhdA8z7ThKrvSnqHkqxxV3qttHddb84ySBdW1Q86XZ83xUUdBoTEdRAcmQhwQ4KT",
  "key26": "2TeAi7Z6WEjHavDkC4UZYBfu53Q8A2CmSE5NL6ngEi79T3U4gYWh6rYjfvkasoQc2EDkxuK2sn4avXQqkMfeU5oL",
  "key27": "24uZ4jtt2FRdcRTfjTtHajDB9otAZ9RCp4K9W3ggKVUwQ6bxoDctvi8mhd1CCVBQbBSSD3vpj2P8nadMMN5RLqhd",
  "key28": "5bZbKcZNF6aLwmDq4xtJAmxVed6pwnpJVwbknkVR3ZasA3rZ6Zi9Sm9huvU5rr3khxCDbAfM4NmcZkkT2rkMBaM3",
  "key29": "5rheAZ1kihRDdxotLo7zVFFegW6hX2R2epkFyeg4vNAZPKbSn2oQUz5caNVc97m1G7NHwbQ6SixNd3h2Xvy9r4b9",
  "key30": "2BPTjiLnHHphfcgEzGWEHjnLH6RgG6LasGDF6g6Uk7BdZC2rtjijwKcYkTWjM3kiBjkrSSRD1inSqLdVi5o2MZEQ",
  "key31": "2pSb7kbJYv1iudX7MRAgPqJmg9QowpsCrXUdei5heX9mSB598jVUfMfqwjKLqrQGWAgYuUF8AciCKEFvW6jy7jah",
  "key32": "3KojhjRYE7AP5YFRDbT3kQ7mAutoQbdFWyU5WRpuT4xeF6BR1emJCyyBuVHTySWsig8u29wH31FwjcANdsEDKQM8",
  "key33": "2Fjxs5nnAkcin8GBRRPoXajA3zfrWMQbCKcE8rfGABRr52Z2jyWXgRLs2yKujNrHMnrbHkX7p4pGUcGFnEWcu5UG",
  "key34": "5YtnNCJiYpf7BK1LmJZtSZgo3AxVWJmzd47kZ4Ffn5Exkeyvroye8zdUmKVvLCJdMkj9RzuQGdHdL9ZsMj3xUHuh",
  "key35": "3hfw4FuDPmFXZbQMZ4hoqQ6NppoFMCBU9wCnt6KrkpsXKUj9WJWMG7bjf9y86zH4A5LevYVB7ZiM3WvA3JFe7TuT",
  "key36": "4M8qGiVreU3gQ39SozNEsgFeoQ9LoQ52VogLpYrCx4eLCH7Lt58USAFvL5rbojAPGQNb2uWWyEWXYK19XnJFzxps",
  "key37": "4PF8Zh7PTzCMzLKPBKGosrarX8S5UmackJxZZDBb36whNfB4cUAEgLHbKa4PtWzpQZ2eoXKc1JkyqoZiwuCeyeXq",
  "key38": "3KBCQhTQfmAai176kYJ5YBToSmMnN2jRnh6cPGSfmEB8VYkcAtvhd4oh1wQ1vieycVHEuDN6XR1wtguywssc3Av3",
  "key39": "5FMpeZAAqSXVdfGjUrB6cQ3wiJpH6WEpCaPahwKvjTM1Ks5F8DQfkmresVuYH417ZuE8ifU4oYWZ18FTT7EsGeMV",
  "key40": "2CNuJ8FKQhJGDrqn3iHD7BADnvwMF3uGQEhyjjMYygnyZ1dcRQcB6Cp7uiR6xkjgpu5C2AGGahDaCaq6S5i2Lbtp",
  "key41": "bB9MMNG1EL4NyYeHhXLucS2VuHipQgMVHtEJKDfabwQ3AaejWPkjGJhKGAH6EvkToxbprpKo7ZTG7d4UyB4n4vK",
  "key42": "4PTpkwy3T9n31fJHSMrmfibURYjueeAGdeUpFLT3zZeaqwqZAjWgC4Ysy9J1ma6EnmE39sxhzQR12LkGMgFJShAj",
  "key43": "54Q4PeGaCJMG1wkEhhFZ97p8gY78xbf9M8Duq2ADUv4nqiLDDZp32gEHKLrZd84mFBmszrhWXPfNvwXvLj5rJofh"
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
