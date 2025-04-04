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
    "26c12KnZH1uDeNPWe9ysUvqMm5UzyaVvS35gjYwKkRknS4Cm755zNhhjcCjfanG4oeRvySHgHfQ2Dg1752PLw8LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ay1TkWXir2TkofxHeZYssFU68mewVth7Ra9V6FuVRYHN1L9K97CMsYEYNmHYWueMgChTDQLGCsJdWWKEGzMME6b",
  "key1": "2PNyZRdhe9a7jX6bPCzWupgGLUZ7UNvEC57Bbrwwyvv5WYcpPd8tQAccVUpNkFzjRxyhgG5fDoQtS725mgUzf1Fd",
  "key2": "2ZDw4VuWzBt6kQehAFrTkxAFy43TzP4q7K5c93mvMLamvUeraH8bcr6RxmTdqrE7nRbf2BkVBfRqx2oHZzn9uPzm",
  "key3": "4iQLQojaHW9dkcnR5cHmSXueXuxEE4bzmQEMv9a8DM7yZ9xE4CW8ciq8qxHshmbMjBaGx7csbN6cYbUUEf58inNe",
  "key4": "4hMX172G86zz78A9SQ8HmX4dbB14gPWrMXK5MryrLB66Yr56gc9JoQpnSuiH2aitVQnrPN9uhZPG8WcoTGTwY66S",
  "key5": "4YbhE2zfgGoVzEvC2MwQyPVab3QPdE2KiFLqJv3qNBBjRuib9qD259mJvZZrAGhugSdny4647922cTCXqEmXK8Zn",
  "key6": "5q2rCQvUD1VreHecGzpAtuvypkTRPXGJeGj41U6v4mb62emHEU25kjP6iaybDum2y4tG1Dj7YEW6Cd3ZHUbSQ7gy",
  "key7": "4tf2gAhbwkU29TTR1GXo71it2hnqTid4XMKAd76jCJVsVVpwNuVEwoW3rtqZYvq72gFXSRz6ixxKHUcZ6Zww9r6A",
  "key8": "3LQB17WBPy8hPY3nto7BN16oGzF3TLBjmWqsHKs17RwmmcDKwA1hEwbPqJxojG2c9yyaeWbwz1hRGNd8YzyUz3vL",
  "key9": "5pVy1xqSsnp1B3KRPP7W2fS8Yp7fekkML6K7Zc4QtaG5iQQ9BsZktHD3JyG9zeoGzisDxmaiG82h6JuVD6axFwYA",
  "key10": "5EkmET6cFdZ6bSpynVakhxt2gQCZMRBvAVApUsmMauLf1a7sDf3gugT3qfffVaJnzax2YHaKdZ56BbhYVe7yZips",
  "key11": "enLf6FbvG6i9jUmNs849YS9XZrhg2eis6ThNFdNfeKurFbGDiMCdLwa4BxH2ek1ztxSmdxs4oYJ5rJHQpBbvt94",
  "key12": "5ijbLDihtpwov6K16ZnZCeMLm4e1zrkf2yfZVfAywFkfEG5jRdfANB5ocJgnap9eokHGBg1nkFiCPJB5DYPXwyJf",
  "key13": "dw3UznJkqsRLT5hUD7e7CGX7uc54GpVU4eYNNzDwvD8e5oFJX24YJaTVAYY4KywUqxKK31GFNossCo7UR14zcHN",
  "key14": "284ePox4tVrdottsFdtwfCZSLHYjAeC4UM5sgtfEeWnuWDvoTzC4TG9ahjS5wz6szf4Hc9NqyB1YdrbdyWNWMzEx",
  "key15": "yZ7PDdkvCxeYwFkRxPWk3AMCYyhD4pwrqjbFqmEXWM6SXDYDVEcinUhW2s9oqa5csaiJEUUnXQzrS71vwDi2pbt",
  "key16": "3Tu7VVJ8xoEgrranPjW32LTb1cTDwnSRZJfUBMLXjHobeVKxZwikEVS3oyJJny8YtZ1J7YHyLAqUNoPgFNev8rxT",
  "key17": "3pm3T1t7dUMeFSj4yuyGSDPcuvy32oADcPamgTRMuWnSH63Akmgw7fu44dPYkGgCehk8o79bLsAAp9qejTNpiPBG",
  "key18": "poYAzwpcbwL3nUKVFgWPUxktY2ShdLbKQHnq1gHbAuJhZ8pQeM3iSxaaddSUXntZDUg5F1H7DFGnVrrEgofVLp6",
  "key19": "4XbLZfQpxh4VnAbFwDdL5VySaGTGyFcdH1Kb1t2g88PWXa1QXy4TE3PFqibkqef8t8D6wD84ETujoeQEKVDF83kc",
  "key20": "5hnpsnZZsBYkSHxHzYWXkMpv6qMTSKJdQCcrUKN9LVZVmSVeuFNmUwHwpjCT4K8aGaD7WtdogN8qXwvqCZUY6uik",
  "key21": "66XyugPDFFDa4W7EiKMdd2rDRWkyHJ7eYXSnMw5ap6QkjyyKeSz9pkEkyBDYK6vbYxua8iUYuqdyeX7icHwiGWMW",
  "key22": "mwhhiJLRU3CPegDhy9JMrgmAmNtjH6drMjdEh5VcHqBr1zFxTw8mg2kggheanQ2J1T85sS1W2Yg1ycfgv5odpd6",
  "key23": "2WureH5Z5eiqpzPo95Jsrh7oK4GzXMNLY3MfYARwwX1CgaBW6UNwDvLM5BQJ4hjdErQAZ3x3LirRUcdfP9XPnih7",
  "key24": "a5Vk3R46GSspYhPUW2d6YP6f4NTwrEUzdiCkyXescFjcU3TYCEFi5HRpqsCHEHfah8bYBNL8tagzg8LRmygA9Kf",
  "key25": "5howoMvTfGxWbcaXCT2MMuALed3SM8yLQe5myR7uryqdQg5VQtFP7iCYSu7fuhiNr2TMFBFWjda4kMEdKFpzFC5L",
  "key26": "2UnWKqyb539tH1yGXBnsAa52to1m5HvwzCEygSUGEG8anLZ82WBVgCL5R9kzXddn6ogssyqQi6pyC9ZrCwaq9uBh",
  "key27": "HtuPbhYhnjyjFPru3EJT5qqp8EoPE76dt3boBJwytDfgq5aK1KMFQZLXiQfnvmADzE3yXJcbz37cnGDtHEgRPhg",
  "key28": "R2ccp66rnM4Z7BPAAUb95ZQpcwPLuDuHnqALFZaewPAboyLnqVdNKcgqNmUkWACft6G6dup3pbStbzxPpNpH7ds",
  "key29": "5m8AB6ZPnSBmaSChEn97DKeffALwPSpeDKG9XFB82hHxUJdg7xvoQFXjxM4H6JgJW38qYeorrsmnfYjk3YLN2dhS",
  "key30": "3tTy8zSvGZDxkqwmCUo5884zn3ocwTRe8Y5iEhDdHDLgM5v7PDUw5MaQ3KFq5VuJRHgoMYDr3tWqfriTq6tjzdNc",
  "key31": "62HEUcnjDfdxVWP5vDPuDThUaKD72v9mnuQJKA9TmmGwGxsdfSUCjZnunBVoexEgMZSUkpdoS6v5P56RiaXVMJXJ",
  "key32": "5Wuw2PWXmk87P6Q2ThnzEndLwxPgwnYz8xJT1QFWXrCQ1jLmGmaNL9GTZvmFwEpEByXQGbQq98fV3p1oqm7AfNnV",
  "key33": "FRvx3KvTAw11z9cwLaQN25ZrvZPHTqF3xDzhXHyCLKP3PEdVocKXmtNkbDSGCnzZGWMF5x1BVMbEXJm23bn2XCT",
  "key34": "3ycii3Tr3QqZ4weQNcHpnEXKLoB9t6qcJywEm2pf5FrTbmHN5TiXwBx9xe2QgszFgwaHie1T4LL1xkr2KfpJANMH",
  "key35": "LzcGtHyQ38zktJNT6KvExYBsZq49i1nGmKUNqyHrtgvyqWiehBLoY1dqxMUzWGDSQ45tvmQHhcuLw4ba6kjLLsH",
  "key36": "4B98rBd7x8zAcVn7VgtZiH8UGxg1pNnhrNLiGw7ktXwFB3a7A3LEpwbeRJk42xQR9CKa2vBaC5Zws9U1TCjJFWhq"
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
