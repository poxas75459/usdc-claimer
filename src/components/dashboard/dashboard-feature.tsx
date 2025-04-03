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
    "43PsaNV4DGqy43uevtZcrUHuJCkfZjXMiCUAtEVvDtHbRybkTe1GJn2fg24SiztA8JQt8dXYeVv8hFvXdFhVyVCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDvuQd8AkCoNKwDmdhEpZBm2k7EGU82taLG9JiZhEUiDZMfGhZzuEpBRUSDgsYAAWrKMBdRUJqzogLwWYymJYQx",
  "key1": "2xUdQVmD5tDbyk7fkyHqkXCgYTPbP9v5y6LWeSWMpVGePXuiMxsY9CjUWQzecHdiezqN956t5U4weKaSZ7oVQmpi",
  "key2": "39737p1uCQPFc5qgeZ4TFWwCeBPqw3XL8YnuozRBv5xQiauYXREFeT2Tbt9oxJKwnXk4QJJrEb4SA1SmjvjLeDQp",
  "key3": "294ufNDKSWFPCDrwQJN5LeGfsNU7z3xHaVSW46qKERK3bpQgTh6nKfQWAyUPUpRFMsNrBn27isAhC7mPnHDZEmTF",
  "key4": "2gm8Apfg6D1NH3bdY36VjsbRKT9Kw8u8q5RTFZD65J75fdRkKMXqKevMNErJKG8vyaoGYZzJmYdr6M3LtjJKRFr5",
  "key5": "6qqJ4ZjJTqATjBJmZNSisMoyvSNDat5Ch7xB7mDrfWqUpY97po6zdtenSp5b66ZALyY5rFpMGtMgtkm1vkosEJP",
  "key6": "5b1E8Df14Sr5hDU23bKQzRjaz65gtNwRtaj5JZx1nZAoTwDqLmiwtUMcz7RknLB88XFs8EdgiPdvEWZAucJ7Xxvk",
  "key7": "2dMSgTxhDyrnYoA7JAZYghwVgfq5254kqxdoLBUqH6tpAvT4hFF8a3YqnhMFNHxc9MphhZBrmDma8p5aJh4vGYyc",
  "key8": "5oFVkykDTSb83pzp7P3wLujos7RzZbDzJGnDTFvHhSoV8DPiPQ49cAkXVng1F4toKskgGkVAJNLxRCx2pFKpgAL",
  "key9": "3B4c1Bf4zAPST2Uwp7qqf3VdG936apxkJeusG1DpoaKK85CVABe6aVuXJ52acMKfN2Luu6f9zmfi2VZMJN8LhB6v",
  "key10": "4tQkGuAEyRH7mpwa1Qzm3qZYQZXeSCoGDPg3VKdG4Q8gaJLYuktTiqBBk6mhRb3VDXRQLZ6B1BopjVKeJ8dXm3BN",
  "key11": "tPw8WG1w4mR8FcNCkTfDJ5iqPWYQWLBdCu7FZAaEXujfCDT4EGV1tWnhx5xbRwuiRsmunUtZUkNCWZbEdPmQvGw",
  "key12": "5UzPyWbar64DgArwP2ddphFaXoRizmV5jmwxepDRwR87BZ3XmrDNCMoe5rBQ8RgMWjXrPTVJfTCbeGrP94sDrgKf",
  "key13": "35FBzVvtSuXr1VLmcqXxm75GQoDEouzdyECnDmogBc7XDaXoNM9SRSV3TXcnwCspmJfUw7EhSHFfi5L1mmp9P4aE",
  "key14": "2mGfPJJdFDJT4UAnB3j7MmHa1qYpGcjGgVsLo1NGsGo8Y8Tizn2ggkRQtRQt55kd1UqZGeMrJNdfKFfX4JhQftXY",
  "key15": "54hnn5bj1qvNMFHJvp9SbysmHhjicvmUijD4CJQkdmPt1Mi9KVPbX9bHRPquY4ntx6xkoJGHp8M8m6xVhDsrtyvx",
  "key16": "PJ2PznjFvwn5oqT5VzqHrw6e2ZBXd2n4oBKhE4coixV1wH6hYZ7dLN3UYnSYyizdvM6qWeRt5gW9aygpor9N7PR",
  "key17": "63v6Fhsf4wv4FxiqM4wX69dvcJnkqowezSZDpDqtYkvNdNrZruQnUhck4S3XQoy4HPHGmoj5t74WXhCNj4Na9Jby",
  "key18": "5be4wJ1sW7wzxXW6MgCMhscDPs38AYRJNqbimvTbgaNus9YiyLpZ6DhfQs5gngrkaXtKJuv5jQdFJM5vZmaSE8wN",
  "key19": "5fTBPNQtWDka5wj1DpcoUYRL6XCU4mz3nYkonzEZyeaH3S2amcfDaUVs5CCKDshv5TKUqVZifVzKMwU9nGLmjZcU",
  "key20": "3LUNRxBcEPe6JLU6JkFb7ZLdr1Yg7MzB7P6zGKn9QccZFWGuhZM7F38DNvF4XgsKjECibzK8Cg2G8BWRzSMgSaqD",
  "key21": "4NU8vB5D5gybMMpPGJBxxZHCHVGapn2RRBq713WZMYKyXJzzsMgamsNxw2LdDXX6Fv3w4ocfFbdWKpghys4e9ngg",
  "key22": "4vFh2jJ8UdnRR1HngZjpzqp7b9ETqkGCxjEedPB7U714w21R9kTRhzyEaaJU9kUof1PWCVBny9kNDfkf9qz3nzRn",
  "key23": "3dkLXBXCqDwFUobDDoGrJcrCp8RXJonuQumFgMyW79fKQ92jAeuT5F96PpnrFZddUFbpzMh9NZ899s8gBYmzY36G",
  "key24": "2uzQbWnWhMrGXzuLbqiNBPXBbRMDUgNRkiQoEm8HDsC4TBidYPXTn2LdhqJ24U7jyECUXGp3fQiP1zbCEFidTDgw",
  "key25": "oENqEZdicRykrTh71ojB9yY9beqkYzpRo4NoKCcXtD2s8wT5W7Cc2Hmrw17Y6SVMTcZDmzMEUg359pU98pfpwM5"
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
