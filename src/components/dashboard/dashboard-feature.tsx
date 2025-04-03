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
    "47g9pN6doE9CTgyvfw54wkySHT3cybLfKxooY3DxG4FUJ6gURjoxainXN67ubnGJw9gsVUy8A6M3PqBsjgKcqPrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQ2WE5BMtquqyBUns6NtESxwT3q2X9QwMLNrm76zftapdkevcxgXat1BUfwjhHvmhh2Qc6G9xSyut4gV2YKR58C",
  "key1": "25K79ZRME853L9onpB33nMSLz3D87gvLm6G43e7V8swWbKRGfvq97BpXR2rTpCUmok857CwZb7CbtD6ry81JNGvn",
  "key2": "4zZhbxNY4dpwXMGkVq2gQykbcqwZvYqxfsDANLBpDmcYbXzHUCaqNMQzhuUSdjNKufUkDCbQqhdSU2ufZjpo4VMX",
  "key3": "5vtULgV73q68NzP8fUFKL9uMntnPJZzbnfUJKGbGQShyoFGNPCdfZpomCPRj56szhkMJ5tsJLoqRwCJaEex7UtD9",
  "key4": "51tp2UZ7PyA3eBWwt1HiFmKx8h7ZLWdDcwj8XLH36j3Gc2ZhLDzGD2ofSnsVEwFnaZgW4k8yqkScJ5i3zD7d2niQ",
  "key5": "4cTWhY4xYhqL5ytuSnEgxqB8oKXirSUqgcqEsUKAGKLy79U3hVMCqC221cRiwudLCJCvv3pvb12Dyh8zmbJWppLL",
  "key6": "3kJ8XtrHvkUzML3Y6XpC9AHuWn8nukQfEpMuyBkJEhrei5B82vZSf7KFTLVd6UTqeYzA4aRq2qD4Bnd1PMX7KZkQ",
  "key7": "3NYTPw2cdnjipgNmbuMmKv4vCdaqt6bBAnyMEp5CSocMkNrihtCPA9QghzhG5ZqvsmJ6aKhBdwupqxKsAPKbDfxL",
  "key8": "5LzvNBraDH3C4P257MBbRnub9jPVSVE9c9YUoweU2sKyArCCg8dCk6GKtpUXYa3CPDyZEB1NBVY7Nb9Czs9SNvbq",
  "key9": "48TYsMMnGRMg7fFvfRuWxnrYdvXcTwqqNwjGr84rmUfMtzqT4kb96tgKixMVmtFfwYGwacgtByQZ7jpSDaifCAaS",
  "key10": "a9RhRmTjdmBrJaG4mQZ9eC1N5SKU4m1ktH4wcNBG1tHg9jaA6HayhcRvu1ezhJbW4K43in9RtUcWyJhRPHqbXGB",
  "key11": "wPk8LayfVLifmBEUhhc9ZR41BizZLZW1PkNvAeWBSfaJ6c4Yru1BYp6oNwiaLbLszVKhhDGh3168uC3WQ7pBu2q",
  "key12": "2DDZGFABTpGB91p6z6JhDL7kcoJVHhbXBRLZVVk6M6hW7kwaxifGP23DBkVhKvFvnrgKUtGgmhboYcwUir64hM5j",
  "key13": "9F4r5h1CQdNjdtHa1KBtPvwxUKK5dFz5yzPqhTK6DUr4aXXTa6Rk7xjsYuVeWkwPwkQf1VxC6wXvh7PVbyKkL6S",
  "key14": "5eS1KhqJuYgV9kS6ZFrmBHEhgHAT7ciNpLJ7tY8i7Pcbnx1wtJbiG5EekpNoDVSwEH97Zd7G5WS1wToH9cQKtwY3",
  "key15": "4HS8KFBFi3PrVA962zak7YEaQ5qtHdXuuuhaeYA4GhSVSYsnvcJmG9Cdbh2kAkoM9zcZJxxhB97hhnTF26ffKxQw",
  "key16": "5PRa9BA1N4eLW2jEcR3AfW9G2TkXSacifi3xDpzYtW9buN41fbfauSywzdU6DagZUJgdCXZeyEi3fYHufxpY9T1b",
  "key17": "yy5kxaoH8DU5agJSBfdLLPrJjunU5UHBGddrsRkrX9HNKQKmoMc4w4e9ZeFTG2rcDgQjCxHmYRrSoBBExemJWEp",
  "key18": "4gLZ6YYTCiQYhde4t1cHtwSjGoTL6Ry2u5aMJBCh9ZP9RgxeBKATvVkSGoVLUNUfEM2vWXSVDKAfdve8y1MGiHS2",
  "key19": "2z2mPupdaSSDFyW9TDziVQjewmQMj5qn2zVStLsAuNgzvnFuVF6cK88X2DQJ21LA2vfpVia5SU17d8rpius1UfZZ",
  "key20": "3XbHqHpnoGeDNAM1KGuhTzjmtK7wEFEJfRZffUH8vBkXCwTE7dPr8yiY1pSPpeZdbK9hJ5cNo5eLAQ1kPD89xre2",
  "key21": "4aUpnMhN7VbiGijZaLS53skSXgN5DC57VzukCnR3cXWMbvRe8PF4byeQyJaGsgNJJCD3jf8AopGqu5zRnzixKQ6R",
  "key22": "iQ1D4DyfLLoTCNZ8x76amhyfXSNmr5zoqqqRkLfAJYdECcGfVvPrFzbQhQF4MMg2dmbYvB8orBk25yrcPsE48Sw",
  "key23": "3xxxtk9vQFQ9nNALRfPB7XfrPwSwY9Yt4UknKmLp3MAGxGmr43sTH7YLX1eUJTM1AK4nfEvFK2QNBpvwLEnMPLmr",
  "key24": "4Piq1Yem3zMxZuBFFDc9hLb38qBotMy1xnCB2RvjZcQ3UGH4Xa645MQG6cm9vJwSZSMTnRmLgQszUZfXEEXeyKkw",
  "key25": "4vTd3TCuHgyu8DLBXBPTFhDRhemvarkg116svC5VwJcQu9hPYVJAXcwZaX6HJ5R6qhMMxDZgojrWfzEXnTkHMisV",
  "key26": "UNmP3jtDgLqgTD2aMWFqfswTiG3iZPxxYrf56DekgAUFeksDcUdFkzHDQsTj7MzeydFNYN6BSv2b7MLhM6sNkmC",
  "key27": "48Tnz1gMixpFYB6UtQLARynoHnViGCD1PGiF95GCTWDL3jcV6cKBj6NdsGHCmUjJbeBhhXL4hU3WbyDqw7Jbfysd",
  "key28": "4mzURALPSxsfUaWQxggkuFDj6X2yLW8SaLqqivkmiUp3jWxQujL7fB9g98WkeFntvrCXDpuX6Yzt6F95343647HQ",
  "key29": "4Xk4Da5oDUVGhgrPVny3BfQMsE1XtWkdr3SbNw2xNMFuTN81Z5NNCp2xFNBjwUtgFJ6ihmxCUv7aRX6FAjo57eVx",
  "key30": "56621Bq9z2dCmGJsKWCrZJ4yVddNnaKw9G9Cr85BsEVh5vWEALfCRQS9pnnnFSk1XrqsbNgDMeXypoJxtm2tHMvs",
  "key31": "4Q3KLL2QUPRwC9w86nQb2416Ywp3XzVabYavFwAztvJYWYgVTRuVgwJV6YBm9tEjcXS1Xmi4CyrCgsrumsiNh2PC",
  "key32": "615ZRa3Xw2rYgdUV7w5obp17DkbBjgWVc7gi9yiuaJU2j6sUydHfGbJzF2MNS4f42Wjvmf56W1bRkXXd3JCjDaz9",
  "key33": "3MzX6cNTP5YeLGyyAjb78yktiP5Frpxoto1ByTPmsNydes6pLCnF1hD5mpmYY8qzUtF9mG1AmkRCfrs55KPKRzLg",
  "key34": "65uF5kGNpZN1o8dX1bFzFiUtYJD47RWeipuG5rasTTb3P8Mh77tRLM4zxK4DZiPCmRyuGAKSdnAVFTAC3JC44RJr",
  "key35": "xByztDaSP8bAq4Job74yabcYNGUyqNoVUG7azavcdJtfK7qzuM2YJKqW98RLAe34cXtxv8j38E5x1TfLbkHdevq",
  "key36": "5YxB2AooS1AFKmrALX4tfcvniS7yH82x14X1U6TGy6cR13BhjxaM1NbUxwktfoqWRe18qctR8NhN7Q1p4xWi6dJM",
  "key37": "5HFQ1AwFjwvnHhczZpn6bzAsZfPK2gNtJwwd95YpjtFpe2mdBQ6GULBGrtKHEJRDpcqwvog6rqASpCmuPZRpbVLE",
  "key38": "4VWSbLbNc13jwztrczQNPBiz1KCmB5ApnU9kKa55j2gvPprjndyMQe6Qifed8Yo8Coq8fhwd3UtWrKwUGfLpB45p"
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
