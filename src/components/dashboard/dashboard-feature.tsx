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
    "4j22pkLkEbfkcEP5fPpgu6kbHJyJ8JyrRzf1EDJqt97F4QMkfrhLLN22pmVAhJUKh3EceokKn7Uo7amdcSAwHCSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJfesbWa8oNt99V4okVDztBwGprGieYLRKyuJ1EaVTQkBdmy3Vqm3rb9wUerNrv7Psj8oPkWiESN9N2Epxjx2GC",
  "key1": "2QwNzZjfH2TdUtUpvGoY38h5C6LrQpkF6ydvgyf4k7JzXD3eCWHbLefuTaxat4Pii7HEtYCG2e5xbNE3bWQtU5cV",
  "key2": "3Yh5BvgU3w83uKCaYjHd7U8HjFLQr3zC7YHfrLrLc1ompgXGgWgJBMHhY2TpUgJYBFpSAe5HGHvim1j7nWaKtYYj",
  "key3": "2NWWznc6J98n2bBJQaS9s7P2HYEbvMLceSD9n7aeh93JE4yhPESu8RRuXnwakf2azWAjaxK9utw7HDeiCerMEHFB",
  "key4": "3sSCZ3syQcYpHED7y68zNk7WMmzLjeDofGo4HitSuJcqBfZqELh8sG4VUZVnba57FHokNEMnELDy3mpQNMEwGGKN",
  "key5": "3FSZaZTGxdt2Qa1KML5Mjexypvvif4Qqs9nhbYukiQnx5N6Zpw6MA8UjH6Xs5P2zasC5Da8m7R1BNjtMaMj5tqXS",
  "key6": "5s1fowwkBDVy71AutcVwWcyRqv8MzyR4GrBFCUddX9sqSHA6KHcK7YTAmck1zdL6oKf9Ux5CgWykfo3vzk9Hwfxi",
  "key7": "5iSuZLxtAFBXYvbVLm6W5Ln8Ppg53RBf6BDh24j3xZLJaz9xWVXKYt43NNB9zBHnzSPbc3RnYBXT7DM1nxT3G6J3",
  "key8": "3sRcctKDdC8grHnhyUbRbx4SG8qpAeAUoGekCJqWrZ7CkMvAvf1AjanDa1yNPDpQsv6iRRBq94Rwh25X7mn5UFQT",
  "key9": "2HbJ45Vx7qGF3NQYiktdB1u2oz25ZykuSfykpV9qGqj3mYusavkRe57L1m4Lrif97cwbhys8f5TRTtyrReRmiTUB",
  "key10": "3GdV8bnRZ8uJvBMi9GtgcNY2tp69cMoGX1qsYQN7RUWj9AAoguPK9Aw1DXP1afugazi1dJmyBa9AgpbLheovfbYU",
  "key11": "YjvcnwcM5mtv4BDsjrY9VYPkZhwrykfih2P5VmGT1qNpok37usG1sGB4qZrsQF1fnaJgyY4u81wGnHVnN62oKU5",
  "key12": "2phnYViarj6iZjqsmjomxuTvuqvcz7U4PL7iUsPvaqCkNUH8bDDcfzNyZLQaxBV631z3fBL4pofg4TctZEy1A6cH",
  "key13": "4icbjGTpGaNxNs14bDaXmrF475sFbt4GfhxK74o6Yp2z8j3yotUDMUerDQPnXXvc7LUhjre4tRGWiN3UdF81uYpv",
  "key14": "5REzKCQqPzmcXC7W7Pfw9N4SKh1VbT7195H1SerxwL34QWGTVagJqV3gFHZWHqR23SL2o6xFEavMb7rpczkxrMCr",
  "key15": "3LVSJL9eysWFdqF68QVjJnqimeNqVsFp8ffrnJknbtovFV7URUUDWfS5J8SwnFpQMYThAZ56w9AErrhCmgyu7tLQ",
  "key16": "5GMKMK4TWppUYuuzkKxteD34okiiFQtq5WRrypPXQgveyf3Dxou9JV339a9DpnMoACedYPq61jtqbV57cAakmELc",
  "key17": "Nq9mP2AW4XogzsvnXYTy68AYrxd2ST2Ec6f6vwgfBFFyVNBYL4KthVXdQBUo6J16zMFsHUpSRucLAh43H4ZpmVs",
  "key18": "4nhjnJPTGtj9xWaFPTwPfE9K3NZS7RjSLt5vBz6RzphoDmQWc3SjPFYf7HEq5xhDLaxF7tkR9YDfQKoDL97RMMRy",
  "key19": "m3Y6B9XQduJSf9dXtinAp1sSAwpT8hS7t8QQL8qkqspW7hpjChJJ7DqqgQYQtSNobRJsupufKfxwaSYhuzfG6YT",
  "key20": "9Y8AUCr6kc54J8gWn1BYcr7ZEbsYB4xcupXaFAbroNwRA8XtVtwjy7TypTQa5SoLNxauMEW23LXEs7PJvJomsoK",
  "key21": "2m6LG9JCKTCfKEikeP8ptGQYP9q4t5bGTP7gCS3Mzc1ku6db9UuoWBddQi1SaxtNgRpx2YVZ1mf71LYNzmvvVqAy",
  "key22": "5LTEhzGyPncKFfW7s2W4kLRWN9yrvyghBnvtxygvzooPNRxXP3Gtu2gu5x6okPhtJFFxsmf6CfDuNNswNSs4uhWf",
  "key23": "3Y6WEF79QsXA5r3YQokR6dGsHSNhtAVoT1ccYCQXsFP6s8cfKMyZecFakvpN9v7XEhhKnXjdXhjxwFSVK568xieu",
  "key24": "2HsPMJoKJXUFGxajxxRQYFScL8artBRetq9WQKeG96pzFLyyPXTHmtJUPGA4pGjKewMkAQZtFHSh9mPoDoxJEiax",
  "key25": "519SW8r8uFjY6PTYDR5xmF8G8a7hMPZyWN4iZketeAYmjq15xbjP7RY39jaHH3Ui3jwLopAeRKcaMwLVrHvYm8Ta",
  "key26": "3bwP6V9RfzSnh64QwEwYvgHTgNHaT6taXtgdmhnCKUBZSKGCjk42pnf6ShkyrcDiJFuuAmMTXHHVAFSgzCJji7Zd",
  "key27": "2GmuJGkRUAKuYazqZDBJrqgFKKQ6V4qPhsCMvEcQgR5hbf83hbwnwZ6rvzVBWZpSJ3Lh53VjS8n7Ygm1iZsLsDKx",
  "key28": "5vtXf9aEJuQVTPdG8bPeravnWUSsJXefHSpq8YHCHUxZTHsCBVswXARZ6S8JdgxrLwZXYbLHgU2NaTLJTPUVdmLk",
  "key29": "4ieRGnUmcVLigAcwgDvSo7fAb1GFU98Zh5u67fakEJ8S4u8EnemSYiRDEQwWnMU6cZS7TJEMKzpYapW7uuxkS8ai",
  "key30": "5wpw1JQYnQTag8unvUcKQrUjpM5Nuhz5PTgixSt8t7sQ7f1fy9itxbjXXWAHTv2HMV2Q4jXeUUGfqcRituEf8yJH",
  "key31": "jJsE9WPybFoZtJqvdQzrCJeo4F2LYzdn9iptZYg6krUh3XYf8rrRTBVHLKtnuoBiUPtgKvW4wvHRfVxGRy5P679",
  "key32": "3cVn9NgPSqrfGcjFV59rGz5CiqkqehcbUkbFg9Dq4MPj5CKsmWXyN9PRxqrYVpGybiVf5Zn4ZQmWQ3TgbVCDxzZN",
  "key33": "jwSnHXrFjQmCd8n3uWuxbkNupGF7vWmh3qPo8YULvVkeJGLDA7yyxhmEdzangdGzteA1UetFChgfePyxXYm5TH4",
  "key34": "KR2LsaicunaqYAmornZZatfDe8H8Pp66ZQpwvmhQBUN2TaNSC2VWz1dBBrwpy1R9No3pZQFmrAG9DgbP1aoxQcK",
  "key35": "2rggfgBuXs96YVnkEBo3ckn9s65xqj4aBmBEwbLTXXyMQi6ejWHzQNTtzb5zpdVFjzXs3oTiefXhea3pc1N55JEE",
  "key36": "2UuEg8jaUbUeBqT9ATz452GVp5365oq3DupoNgJsyqq6AT4DY96LH7WTZHCFVQTsHHAp33wL25F1ukcKVv2LqM4k",
  "key37": "2HC9rProzkHvSRwEGw1k3rX4EsyHQgC1b344LzuSvVsYRML4ehGayR1cwZNeDX62uADG1Rc7We8w9eHNgqj5Smfp",
  "key38": "3VgsKZwqzbgQnKEgYu3QsSuQgmAyLSp4aqPb9xnW4vMUtw3fvKAJ4tz9q9LaUrEjGTydZSQqfoDxBs1duDh689NQ",
  "key39": "2r9cbEmPzHkoUFHmmTBqSZ96BdMZZNkv9jQdYaBJxHJGue8dBu8Ffa6QguJ5e1szqeFztdDTA99hKbtXV6ytB1CV",
  "key40": "eknSqf7pGrnP4dwKfetUzpPnXNeqxbJc6amMsWQHZcfycrzwQq5vRYgaMHedgGncKf2oq5VEihLP6CdkCQoZ8ye"
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
