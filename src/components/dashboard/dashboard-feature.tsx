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
    "3x6okv6pEs1RhCL9JpVb3Zk3k3MoKZqU4psL7KP7nBeukFaQz5GRbVGVbwRgKyPUUmA7Eww1uoDMJEL7M4Vmegn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMtrHfBJtieqCjEhfoRSRUQt7gkPizeGQgAELZTfVtK2kXPbwQDNr5LzNpBohbwWoAqcGuNbD2mTj4MCAYGjii2",
  "key1": "4xBN5GHspobthm3wRqK63bSrmSbTc8tytaFDSP7eE8fUmtx288mWtUAk8za6BNTLGuGHX6dZwpZiRU5Mz4rYHps3",
  "key2": "31TA6bcZWBQXgzBwb229XjatT8YmkeNEnX5AKN3uCctRwvFh6yABYF2ukoaMq98vxV13UzMUqDujmFXWunDZCPqg",
  "key3": "vLAJr5UdMkDtwio8rjCMAqrMPi58d6DVHD7KBgmyC944mLCbszdPBRscf4sMVJfaWmMcWpXt6k4PgVFPqbZavQ3",
  "key4": "271ZbigyP8D2tGDNnzMR9uzXoWRBweX8qcLvEuSgwbYW3oWXG4kxa262Mk4CRdHWr9nhqSryfmmozyWAyN9rTdiH",
  "key5": "3r7QEB8L5CVDYc17K4wgYuBSiDz17b6pJHB6E8ryg7oFkKowuwkVRQFSSRKqY1buY88xYCYnJsdrpyWhF7gc1CGg",
  "key6": "41KEZEN9gNfzE466mTk6DwW3r52Av7KYr2EEfNgWkLroXFtvz72AVL4w9jFmMzCwHNjyK29ZGYSoRUfyMMTatPL",
  "key7": "2BhHzufLazqz5GcuuWwFRha7cwQ762Z4K42f6qsoxvEzUQW7KEzNDgEJuPcpXN7MUWN8DJTP4LMBbsXDjZjufxBS",
  "key8": "4heUYaE2tM2U8zD8NmdwwQ4ny1CWbpZjBBt1cd15NmfpmUVE4NEvNJzGFk81mmJ5999Aw3pFbUKuSwju22yKujs6",
  "key9": "ZyCavCXK8F8aQ2icsrpd3QkPcr7AnpQeSG49dYf8A9iYfH5uzK8Pr4PhwgEeoDmaCpbRrU8M4hGUy33bYgBALVS",
  "key10": "2VbAmp7ajgFYRMWEpaAZ132wLKoPR1r1Xkwf3He9B8PzmQaFh8xRXJ3YsRM46pFsMQNWTZTdduV9tr1ZrV4yWM8D",
  "key11": "u13NyLxwDpCQ3R8bsaVWFNTE8n9Cfng2W7AxKvGToYiNdMZbTZT9yGAGP8mDUVXajvBnDNpa8bq9aJkAivFsNJx",
  "key12": "LfwXHmQ1hs7uMp1BBvmS55aWmE3ZTUUSpCN13DEEshtNjxiUhiquHR7x5t2TY11d9tYwBHRh9Dsw6wYbX2W6dNx",
  "key13": "36agorhHgnxBLjUvruEXGdikMJEcie6a7sywDvvcqNanK6JJGThoKEpFED3BaPzp6obYSZKcQ27VMd794Hc8afPB",
  "key14": "25VYRhnJ16AK1Qd58HgxXA3P9TFmiU3rATzy5awqmQ9hcVb8BZihoyhv8tuLKWB8CXBqxo5fvwBmAeNTMqqWZhZ9",
  "key15": "2pYWB4CAPamTySptvybF6t3ZxG515EPv6DRDWyv2UiTkDpnqFqeFGpCdSwE8WqFGz5E8AT2NQmg3pysDtpVniPtC",
  "key16": "3UkdkWuGjfZWuR474TK9vuC94eaiZucBAsgFRPjx42kcNJ922KTDp8b2Rak11jrtiYBtNVbpabYQg8iGFAKhJdyv",
  "key17": "zkoBiPj73knpGvkUm6tciUDtKmXA6FYtfBc4kbtQXAxFverrRch3DN8U9XiLd7avCgRpQJ8oUcphdsnkmS9N9Rk",
  "key18": "4oKE6K3QtcvGzUwCD6L4RbsKX21gzWQyi9sacNfGFiVCyh97wd1s5wb8sVN6qZrviZCin5jxowwoprHRhRQC27vG",
  "key19": "Ag38gvzjg67TP2p6LYJU67YXQxeJUArhHNr1hwfK9tHZ3v3aVENsfKBgRfRbR51hVVyN3LuGyknup2rjHVqiWR5",
  "key20": "4dn2xgcw8nuXUEudEWD7j3BghRkyULSxGKEnDDHLRSQsRT4RjWPmy66P8i63Jt9Eip6hPbtFs8i82yNwVEB4ZT9R",
  "key21": "2BE6nPzkfnG6fM4oGKQzgcrAfQmKpywJ7DzVRevBrfHSgA2YpnwxphTrkt9TLbyK3J2mPGGQvFcTggrFb9By2dBr",
  "key22": "665snUJJYKPnbTqhW6jrkjjAivP6k8xmDecuVXZH55uQUEqZKGm8EwYiGptygHXXSN2cdUPcPY4UEk5vQPQTcwVf",
  "key23": "2behN3gqQBonv1qkG9et8kzFxg9tpAov5cKzZFiMEnybkZZdkEbC5no2jMhqhXD1LjYVvj6xw4Bt9PN3kgYcMUyk",
  "key24": "5knVmjXRKVGomHVeyFfUqEnGTYm7yFkTak4h2cEM5Lsi7HNXgq4bSMsNpX5yqj9Ei5gFvxe771R6rBpqxy1PQ4tf",
  "key25": "3MiYfpYyKw5cUwhj7pTT5DfZKtcLtizhg53pBj9kjjLVyoDHYoavk8Kjt52srGJc6mm7vDWByVsZ5t8s4ya33m9t",
  "key26": "2Fe6SpRFuZSyyQKxnwRMd4mQjUcrUFjMEc2dH5XZnvkY21rQx9adpZeQ66KyyjcicKxNLHXQ4xx4SggnasCsjdX7"
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
