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
    "5uHhTwcGvV2YU6C538ky6BLTE35ivp9JG8qwDzeQEeyc6ggHaw51goR1JBwzAjNKe6JFEAE35jpXsBrqf5EBTzHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ujriDdZXMQ3pZ79xxqHoMJsqWhGDe2bh9utKoiiSir4hNnoSnNfaRM6UQWD4S5vr1s4DzxLPFXSUjmmZvnhY4cd",
  "key1": "63zqtKvuKk1jMEffyaqPvYWKxDpjs6mZS4pZHepybV3anPdBtmMmU88JU1RX5BnMAjEneASVPEvbpE2RhdD853wS",
  "key2": "5SwswmqMGX2oK6HsoGT3XARkUWJP2ehv2WXGKSkyJry6Lr8mgTdNC5mSUpEeV5E7dWnDJjoTaVbP9s2qCkWPCygJ",
  "key3": "5f4zie8Y1zhkyDdFtcCWyTmf8FdV5egFNB2ErJZ5TUMjMtbnryMNdG4kDcXytrTFUSB9gfXdJSqbVCbu25F1rPzw",
  "key4": "4ocBEC1B8qC5DjhBcUt9mzJQeTLQvtc3tkkyZA11wDy9GiJvpxZfLibumCxS9eD9mkbcazgvW4b3xUg9eJrwFVH8",
  "key5": "3fQzJWwYKFC6Z7oe3XPUZM7wfStHrWFsbMU8PJnsPHUP2x1uXhBjk61nLB98wXJ65MHVePkWAMxgVUgEv81zBUSg",
  "key6": "tRgBbPVhCAuhMXYH7WKHMmdEHNGvzZFXjwxtTwPRvohf9SYLhSGLmw9dX2UN9Xkt5VjzX6ta3vhuysF9UMxY5nJ",
  "key7": "3G6HKdvHhCfXPWt8KNHksxLXrrAxZoes746TU92p1jiM6pv718Ct69nCjSbvLtRQBDSiPZvx2bVaqcr5JYE36HK8",
  "key8": "425Lqjh6fWmUWP8QX1xU4GqkXg8nz1g5g6vGK7mDBhXZyjUMdVKGe77j3YRVodzjLLMCcV4kFHncGiKwHxHYAjQ",
  "key9": "3fjvQckK6tNUWpqQRCrnNtBfTKTH9RrMWVzs6vqRaDt8zyckpUtT9R7K8GiZTXmKDGiNTH1vVMPh9BXQFth6VTNc",
  "key10": "26Z3VbPiDtnP4mPbPxChjkWfDE6MDf5ERE7TVTQZJhaWiw6AYLKyrnM7eQ8gNP93BPE94HT5AhFqip9T9c3Bpvzi",
  "key11": "5tBUPwX6x2WN9WpHprVdsNhWFmBKGs3N33AhmSemV2F6e2S4tTNq9sqRdwFWaDrJZdHB5PNpFnzFWsWfkYH2XLuJ",
  "key12": "4pmmoKN2Bwr1XBqUbXGLKqjN793t5PSRXXJfzfQJoSZbqGfb4p5tR8XkqmMfrw8UieNDoBwqg1vgHEfd73WukCth",
  "key13": "4rM9D42cE9Wgev64SuC3h9GgPfb5bKEU3by3amknwXoSXSs8xAdjp8FEtw13dWpBFHkiobdBoRETa87y8vU9zxP4",
  "key14": "59JDQJmb5PKPFj9QfNtf9TnZJQEy3JqDqLHSbqaTqPDSvM49s42QLz2asGRCuXvXQM2BtU8HwTTiyeQBSyCqtdJX",
  "key15": "4dYrRM27Q7ouCP5kxUyhzAeHqKReT7S43Ez3EZ6qqqa3tWgGhT2XeswBqPWHHsiyBfgNoxpMRuSe1LKpvqgoDrWs",
  "key16": "3UrhTF4ycVafN2Co98VVnrC4h6CgVTzQCdnKJABF5kfrdR3YTEzJ171RwN3XJo8DTpbhBRf3EU4VQ8amRtvpWpLz",
  "key17": "P8BnwxAXi25enH81x9PWNjK2uXvX7A5J5yKkVgMgyUXuKgEbSwkyEeP32drBZ8SnaR6BeJAcjnk39No3zc75VXz",
  "key18": "dXp7fpD3EHj52va9eBrA7KLpv9eUrQP6UqSrogLC9Rw5iKZDae5mhNT2nHTPBSQih3DimV7115WQje8bUgBcDwV",
  "key19": "5JLZxauaPMcNiJypBiGtCqVgzTV6qohuULmgxtMdKgc1yWYLe78TfYeT4XpoTmaP9XBoWKaM86rHWuovikJ3BBcN",
  "key20": "29oSjJe41TKbCCe1pU7zDkqXdv3ep9cB3dCgVcQE2gPtkYNPcFvgGshy8QiQiuNjTceAqTgmuc236MbbjiRqXLcC",
  "key21": "2E8V6R7tTmDgPZqK5DXCHn9UZpuEqtocxYouGSnazTh5zFwwcNHqLQdzsArrhuPi1yGc4gv4Qn6wBAMQcBwWaX5g",
  "key22": "5nJdQ24FmU9t6VG8HxR8ndKXP6TCL69bV9Py8s7PSzAZyy5FpV4GC6a19Bjc5bVrGCPJHWyowGBTWQVpbiSWR5Fh",
  "key23": "pnHMenrrkPeDio6MFzYJipRo74dQPQtUL8ZNRTojAFbZcmzeRBEeBLSQEWVzVjwmsY3zYwWeNTn6fohdgZg9f1B",
  "key24": "4bD4Rr1ppUYfgDk7nKRLEZgmnc8zoSyuHWX98yc4MPbUHFKQmvHeJMQMRjDKAwRMAbMbxUQYHdg9UDJzLrvBT9zm",
  "key25": "27zB3gefCz4zQhDt8LUwpLhWnptMmmej2C7T9v5hti2i17MA4poZCsgnEMHrhLvHoH6oTx3tc2kn1t2CF7QLnRSh",
  "key26": "5YVDJn2WFhWeT2no8R8JADwjWUbTevgxHCVUz9xGTs3WyTkKYwAsWJXZDS7u3ZZzjXcVKQexRkXFYsM5KnovVd1B",
  "key27": "5Abt8miGtoxs93FTpgdQd2TduD493XSgbz8pjujyXdDuwPfy5Ynjj9e7oDubSGjiT9DWrv4GFxrU2TguAWv27uew",
  "key28": "238Cx3GZ6k29F4wZpyCFUoaabiKdFq156mzfAjMFcNNyDSZxxzVUnTN5T6wwhKyXeqkUVwU6vQ3TnMkm7cMwvgDu",
  "key29": "4t2qtjfA3CqBcHWeZa2V8QvFDC5gn9aptSrwmCjJjWEwuCdiJEgLH3LfFN7JeAfhyQALA9AG3BqRYvvf5SRedfEi",
  "key30": "ZkKTvTHmx8RfdfA7LDADD3kBo1vc9q4Nfd7d5vrEGdVdLjeGFMhgauTSWSuyBi9FpKM32kBY7mCNsdFi2z59t59",
  "key31": "4UNswEcktqciRSwcororN322QQXinH4PW4T8XKYerZH1J69JsVTdEScRPxtF8ut7Vf1jqjWbhGvZey8FEAB7S89v",
  "key32": "4xzs5QoKTAL1V5jn5Wt8mPX4f1PGqzZyRt9JtJy3EFCriJue9wJkBeoj48KMdzVjGYRC2Cbgdt3UjxnM68sys4zZ",
  "key33": "4qSkdAxTHXcQPRvtsSFFbRwcnsQRtrQwjHnkkLPwcUXPg74ZvK3WCCzmQxM9VBBvBconTkawh9qf9ytucFxquknB",
  "key34": "2ETNwTb3rbJDScaSJBkjDkRVvD6xx85pTE5KmPr5pZf81AtQX6Sx1Y2TmN4zoa62xP7iWS4EXErBukmvfowWgU2W",
  "key35": "5wySwehmsBsjGZfFNTqZBBzzivbjfP123w9HgV2txMvx2X21vDAMe4xemy3YkAJWvNdkxR16sp2nZh91rZMZy4iB",
  "key36": "43APJmUK4uemMCqo1gHCvfnt99gj94JDuK4W4LKn85DkXufVAAipBcH5BQhr5nUK944kLRvFzYm2DpFKMSvbkoMJ",
  "key37": "5uHuhJYBohYNdTDaYm9MbyxcokXLY71njRdy55GvhRuBRmgvGmrBVz9JAxAZEBaEZJNYx1Gg2doNNxeBZiGfSgx3",
  "key38": "5PyzPc4oHNt7ZoHiqZD6d3EkbiNs2GpqcmnRsdtcbB13CEPjdpvnUALXKiyyycmq8Beq4P8NaCrsgqEKQkTj4tCm"
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
