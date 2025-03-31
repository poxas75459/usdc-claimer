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
    "2jaxKKHZk5Z5ZMb3qK7jjwuBSiPnqH9QFtYqkE8wtiu9PwfMbCk6Ryvav61Vx1pio3otBUQ8CkqZohCi4zpF8GGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7sRnPASMhiejDwYxy3Dev42n4tFSWiUZE8DHbXjTMA9qCdixL9ZVdr8YWZU4NbsZqo5HHsYVNLiNZtFiAPM1G2",
  "key1": "3ddWFQpqrmsggE8c8x7r5toZKP31fXqUix3oSaLW28hEb3Dq1UR3VnTXRDWRLi12GATzfXcmPg1Pv8Fvj4Sp6QeE",
  "key2": "2YCa78ppeBhXMqNJVipjqfQ8nCN5FTAQcjFPzzsxD1hdcNnsTEMpuNamkvRvyAst3r7k1Paq7ULg4QpkNAVaSGQo",
  "key3": "4VCgZpJXLJ56UHRGBS4nxVpozzKRdQ6VtZ9V4yrcVv3deQ8Z1bs4zqRyhkahA539RDLvUufH95a8YGKuHDpgECmp",
  "key4": "2jJq8fZR9jFFYXkitRmhhoe2C6HNkGRxhKEqLHa5GUbThXDK3dgKTW7MvoGhHKc1Ey4dy1NBDpgxf6cFx3fVnHJ1",
  "key5": "4VoRpbAa5v1at3mLxAcESx7nqc67ariyW2kXQxt2cd5uaLkTwCCYjmejiWNUnyoCjskmbbGa1ncqqTtKe88zrD3y",
  "key6": "2FT95CBx7eiWqys7pYyCviJsJQqo5GZrunf5XDaWwdpXVHhrYYAUAGgYfeSwuzkwTWwgL7bFNrhE5aD6GjJrKmSd",
  "key7": "2DxvPym3Lk8TDKaDU3zDPgXQd882x97hr4SnMk17JqDSDoDjgXKQ85FLkgns8ViVR9Qn3GCCwFHNJnKxWnuxpwLX",
  "key8": "5mmhfFJdyUnoh4i9EYtXhnnkDTAnd29BXVMAWuqjXt7aQAa2Ln7Hk9YBXdfjDBQfYn4TASVaEVDDC9yUyirU9ZSN",
  "key9": "4Bq5GAYEN8AECnJVVc7JuvnDFuTdFfA5UEugXZzCeG3vaR6jt6juXYS4XDYznJqG5vN1K8rYNZZ8GqTB4txVsKe7",
  "key10": "4LJ8LJJUf6REBjESZpgzQmb9x5rvSRpf9Lunaji482DgnkSgUXrmsa96b9iAeGynp3HmwARdTQqGEYRGvr6oVh9X",
  "key11": "2H1wZdqMupatLooPbujjU8TRmJS6UHNpht1pUapah95j2ieRcx1HaMtunVLZHp5HU9xgTZjWacHphYFo753yuhyN",
  "key12": "3ZtkT1irkpReyauhwb6Qkrvp6Exm3FSxvFyKcGgP1M3yBrvixcK2a4qgh56AqjeAVzTLsczQfhyZyQHxpgPzUQct",
  "key13": "3TFYaQBUTjxG4GJbR1pNVxKBwj5bKAXXXsZw9r3yyHkVDfvgpaMuFaRqibGbzsx374evR3qEqGJHVjAkNzi2XLqZ",
  "key14": "2GDon3FAHJPcCQ35dL1is9c4f7xSu5qXb8DVPEUPLv6cVc4GxJZt7jkAEBbs2jYDiVKFpruti7oNRbQew9RSTg9G",
  "key15": "3VNEcVdVqY4pSyt81t2n5wUScJ2rn2bBYr9EZw7uQn4bzVzsoUU9a1UG4MpKxKhQhah3fysdhDGBnq4HocBsnsT1",
  "key16": "2cSP1mhMo1x47FZ3Ekg6tCLYtwzZgJFdRuPGZjPzpFCrcHjMgzEL8zzgijjrtqkmG14fszjZW6M4UYs62KBQbVQr",
  "key17": "4TPCkmyeHufAfgpCN7pBHF6CAqh55hzhJk8Uj6mFy1oyDx2fE5272kgoLxouA4YJsd1aLPe51Xxi6u59myWeXyfu",
  "key18": "2Tg7n4MKpB7UBAZMC2UiY9YXRab9jCBMaqaoD79eFx2oyctTQv1iE6tYViPRbFoB8oY4ivdzdsHYcRs3QHpZBnW",
  "key19": "3gDHhiWeL6brwUKtR1umXcYr1Fbcucg54SvgSpr1Fdet6eBZmcstFKvQh18oQhN26Z8q89BU9o9McGndRSJk2P2z",
  "key20": "4pKowrQL38JeMwHzvQzVsFZHvEd1UNsZ9Miumy63DeKKW9FFmvoYBHaCBpBT3hbdbGJ6u7xaYVrko7HuW4hSszmL",
  "key21": "3cSe2ph9gmkppVftokmDc3DptjWpn9auQN9tnP3k2F7RhYWkrtQMv8nBNi4rQX5jWdo6AGrX6DQH1vCfYLhzcZMS",
  "key22": "5YKc8wsqnqTRALeafSY4kBc6vv6CkDkoUi9idECf6LS9ZeDTp6jvmTwNaYGeNrEb7PE348whUEpSsaW1RERn51WD",
  "key23": "2VV3k6jpdbAbD2o9WE95NZPyG2hSbeXrUjvMD64YhLAYcCo1KHL8PmgXFrdH1ehQyPFQmr7Zw8CVa99r6UekE4Hw",
  "key24": "ypu8KZevEvXQbXckKP7R5m3VZF2VT1pH45t3dMJ9vMTyr1S8Umyf6b128AidkHAGuJCNmRhXqwzoPJNhiNoDMmJ",
  "key25": "4H63EhTjqAEzf1myEq8Nzgj8Bs47VQbSf7NzB8eXSzD5oT6JKF1nioxGbSQHPiMHmgPqV656r6EiZaUQTpW5uLaG",
  "key26": "2yGFDB4pN9LGmVcDexe1ix7P1tLxGQnYHqxftzbHmP3pBsu7pbDsp8iT7T7Z7pwBJKC1zsU7X3f5nACcg9XMXJfK",
  "key27": "4sXHcLmhF6CJZ72r1xGY6FFWX4CTQGbvEfFFUyHaEt1sVqajFt73vK3uywLrhRTcwcbi49bYzHjwo7DSnQJyPjHD",
  "key28": "2GFAgNLpETqMiuBcZy1fZGi9SmxULGQ6hPwJhCcKXAYiN7CJ9YgVsNe4RetMtkHs1dvQs3Lr12TLN4rMbBa4aWQ3",
  "key29": "2B3i8QvMYkBttCKdhLhD2BCwc5wntQgccuZvfSPtmhihxgYu5msRVYYcMfca2ZkdeAA4vQLdtRLPTY59agXZEt8T",
  "key30": "2F7j19ioWZ3pF5S1hXtCMJfVNu3vq8PCbndPENj8XqGgfqqkUwGdbbrnYED7nCr1MPrYScaGQ2ctpmFYitpS925U",
  "key31": "3Yv6cUvgU63Cz1FBKgN6xxo9CoExGLQgbv9xQfFhcTw8eLD2nwroF6vBiaQFpjtpvAwst7Tz3HTJUk8GY7J9qV9R",
  "key32": "4DkcMpeQEPRoBJdHUNVzbM7nXnYmi4i8qg9rS3YRCDiKjkdt4hgsmcNkiaiAZaqFkjmhgAa49VnsfqFKuiWq2MmZ",
  "key33": "4SF5hb55ZDPHP9xtuBYwQEb5oSWe747GcfTsa7D9FTAFNybz6ndGCWSiFZJUAXB1kTmp7nW2awbCXqbBF8tCYrXg",
  "key34": "2zLkkjRcQuqyryc5dodUMXcvQHAPWrNEeKKP5e3r6PxqRfPPZpzAKqZndbGbP6YUHLeYg9XxnK9CBjVPcTncDJwQ",
  "key35": "4TQZceREgHhHx6fKKvFePEb2ZCS5niD6C3wJruCHjkyUfMvCBFQL4KxUeEqMtPkaJDhRQCQhfrwpF1GeLEPXtBF4",
  "key36": "5HfSL4APP8XuvxBo7BJcnacraV6345fcjoNYgSBr13JEqQmNG4Cy4rEWorc92F3787B5zxpQLAjYB7viNsfLznDb",
  "key37": "4tSGyio117k9xhbq8vueh5g83dUpiu8rcxM6Q8WxcD8sE8KKZHVhD1P8rAELBstA5SydFUzJN1G5yDbaB5ConzVP",
  "key38": "4L2eVbUg2d3LAm4kV3fdvR2FN7pYSkmmJnKSTsvvjMPti8FjhDpfygsZfnePeHMNxrQo3uTQ9RrxdweNWTGBZ2pN",
  "key39": "2EjrWLvErT7PB7abqj9VuQAJ37cHpsqgLfrVHQns2h3xhyDm2YEjw9xvMERGCHiowkPf5fGXC5AebXnYrVEt2Hrb",
  "key40": "5N2TqPmAfiC89TAzbqpG9pFBXsTKaBy8LecQqL4Yu2ggFZnmchfgwZS72Tj7VkPjDPF1Jn42x35AQdugaRuX4p8o",
  "key41": "5j7LsQnx8BgntvdRr4paR82rYowfeVbua421nr4QWQhE5rfNXjs8d4F4HtjPQTFmS59yXTDrR4GaoLVYnfGYgwB5",
  "key42": "fR1CcNnH4X8NDN3SXYXraNhB9pLHWVnTSbopkRTGMYXakuZHvBHCcgivx5iXkEcsTEYFG1bYeatWNeqssaqLg1P",
  "key43": "5JVo14DDbzpMhLBK51ph21hssGcySKpTq9m6dG75VpF4LCV42xDc3uBKDEvXQUt276C5KoABDNUJJ2RshkR1h1mX",
  "key44": "5w9kUPmf6kXrnunL1AhGwCJfnZCxz3uCR8MMyF1k6udPKtvYiDCJcNPTtSuP9BnKvtwFPLaD4F1Pbm9f9mJQcPce",
  "key45": "4q1gSb6TCUzuxtYHBeeYCwfELhKnQ6FEEb62cQpgqhbr48hdXt1xGUyDwDhLK5wEo6RFzXBNmGuSBoXMe8xpQp6t",
  "key46": "3MG3vXEXVhthyfSa65epMzAWFHhk4WsjEUqXfKhsJSnCw9LUrivbUPwdYKVhuJhpHrm5m459z9Gf5iawnUBS3Fgn",
  "key47": "4K7Qciv49Ltfi18LRoCS8gvcrmncFHHgvkkF4AbtFXCVLCZYYrfSTjvUihEUppRnC3h1pwP1cQoB5f8XoKDzW8gC",
  "key48": "49sZc3xcW1UGbEETeGmaVfpPpyKq3Yo3hztJfkcjmay8gvNtEehuf1yM1GvznvirMooZzhRWYMmomGwsp4qyLBqR"
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
