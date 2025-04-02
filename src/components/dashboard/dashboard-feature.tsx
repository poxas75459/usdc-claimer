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
    "62EKF1XEwkL3D5F2G58nPbk7w6LqiuWnCmwuXFBSAequfCtbx25nQw7XUuuJKbAuF7Yhi8L48YL639LYKuAGMF4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Yg38zQ5GVEADJ5EVpTzutkBfgtN48MQSaq1g1yVtgoLeRZJTM7wxmD4bqzjrg98u5Shc3qxMhRpZo2n6iWBtCk",
  "key1": "3sLqwNYaJxjnqb78GFvL8rPhZgyMPLfdsEZTQPMCAp7xqKZ5fXUdJ1qSEJVGsX9jqsxhj7WVg9YB2UB1SsTke1kc",
  "key2": "3Sq1zFUXUMmhSRkE67RgLCAHvAL1qjyvVMno8qKvpi5Yq84HtwaBGGkM96nfZoJZYSh7a8aP4L8CMF9nGr2CUdxk",
  "key3": "465WHbbcDMyvyy85Y9y8JYbjiAir6GFSRYs2rHLUihY4cf45wiqFyvu9h2c7p93Nkg8EaYscqGwXXWzxvfYyWRBW",
  "key4": "4yL65qfxRt2JGVcJivsxD4pCFbUJgKRNJKTU6SYiJHGmmLVGUUiELybqUqQ6GAHYKCLrDw8vXnVpnVFE3dDy6uJC",
  "key5": "4EX2XCw41R2HGRDsLhFYpHkp8htGtyLSnDNRFYA2LFRwYhxNsdpMEKavDa8H8wwbebtCKYTVZQSYMCLK4u8VvdbB",
  "key6": "3YbqYztibnX2V1tsJBDHjKV2u8HXUvCs96DZjiJ154XzRWVhzHFEGgybyGjMzkGw9RC5eNPvzBWnSVr5vDKjEDRG",
  "key7": "5AKnTC5rdNSuoFvz28ZjFj4DW1eDRS1JLoHD8whsZYQorj83a7hjKnkjdDLbXAV9y6Eb9HSEBRVUiJkWyLU2Zt1s",
  "key8": "64yNew3WBtMxixYfj9s6jbVPNRaFbeVvgqHyyZiB3hsMkn8ymopZjjEpVC9NmzVs7ej2N4G4Bs7Xw9i8zkwYqsYa",
  "key9": "scR7XA3gFdbgmjBkpKezf9kbXUwpsiNdKLJjzpPN5vFo3eeEd5H6AGftsv9M4QokTPqb3hzDMU33X2yCTjEREhz",
  "key10": "3GKEJD9DPpEi4fdtijNCUQyjVv6jeis6p7z3vqhX3ndvezHcSmSRD6YZUHD6wwX5N7g5ped7sEiMozivV56JQH9C",
  "key11": "67ir2kmdkRqMmK5kAGBHu7QptLKPTQQvpzpQbnax524zAbsUSainAdpPbH3UVMEtrX8zXZVuYb5PbrVwSkPTrevd",
  "key12": "4EpQEEVJAmStnae2gnGMKFvUDCZaCE842oXa1kbCXmtzsBzKGj2i2AZWPxE9x4HesZnCwgRR322KqRDHAHDT9Gyh",
  "key13": "35CbHEkESPn63qGboR6ufTTC55sKrVEi4tXiG1f8LmyADaYRqDJHRKEDDArpKx7sBW2MWi7GDqfw7KDVAFvJHRmN",
  "key14": "3KcRJnVQnywd1QLUmNGZcpSNPJrRGwP3fuQqPvw8wGX54TH2hmD8RhtdLPazu3yfpD2gz3DTgjrYYcSrhHfdv7qw",
  "key15": "4hhcAPRR7WFFASSAhqerGXBzVNEzn9Fg6M813E6siZFDYWhPtY4RgpBdkW8BkvyVGENbfveAVg5erpPT9omnHLGy",
  "key16": "3z7A4T8Qm8VPRkKhDuf7iu3EY91V7nB1mhdBbK1VebLGbqFXz2DHCk9XzV3nAVswLoYHDmKNG8mWMWUy1Nphb8AW",
  "key17": "5pD1Y2FMyJPqf42QTfixRG9DRn9X5FvEeRXDNXbzST2rVWMCDjhMBywQP3Mod79uVFSc8qA3k3qqdayc5MC2sQy4",
  "key18": "3FNXgKhjswAicvGUbfmChwT6THR7jE6U11QGDsF1Qhrnw4yTyzypzs5u6Hf83btLmrqaiUisohKPB4DVqVP9akcK",
  "key19": "C3nuupRfWYFvQNmPdrddShaBZZZXHwGj7AyV6E2ZCpPuXTw4BWsr6XyqzoGJHNkTBLss9pv7oGiqPainQzf678C",
  "key20": "kv9ov6cEhrCfSSnrLM6Akx3aGEVoJSu9p5pzyCiLTekfDN4P4BoexGu5WwqKcRvnQpTqJ4vbuveZC6kgPzKJ25E",
  "key21": "61WJEyXmqbYvV9DeTLXwEUjVEEKnTvsLUTQK7yu4SyvTVTuKe7CvfxmTLVB6bBhNRFApCi3oiFYwZgwxKYNbmkPm",
  "key22": "4JgBRWJfNg7SRGVbX5f9jd5x9x1zyQd5xKfaKrxxipEbLcQQB63vahzToWsA342aghuE6S82Zvg317BDDYsfk8JK",
  "key23": "5KTtT2j2XDzkiDnzfx8o5rexTxrGSuVenu5E8fn236AhgJ9jkUAREzrS5V77DTnNhENj9E9W1CPqWTZA2mNm1TKw",
  "key24": "5PQMSpTRo4JBbJhqYMvB1ZMLzWzycxinRet34GCcyh7FCBV1u34jk49utrJp1tnzXeytYGtWVZCqRp9psy1ieX9f",
  "key25": "5xmDcNyLK4amQyGeBFJyf4ffHDURJTrsR96r6bP73nzrBbdBUwGFzWbkiqpkHfienB8R9VVHNiTV59Ef3Ysm82R2",
  "key26": "2G5631xC1UuMKhoGbDgWBj9CRgUBo9dJFbb9ihkBe2yvFtwqc9uL7cZUB5NDTwKB5kAcqewZauZtfFjrA2vFMwQD",
  "key27": "2xnLku1p64LVtuyZesWeQ8xwpUfZnsoW72Up4HPUptvKfXvd6wjnRRwZ1BBt5ku3qJpDofYqebbxPVdXnZ2475Kw",
  "key28": "2eqAzyjupYFhwzcFpLWdT7a3yFUbZds2jmKYxQuT9qaa6qkp2qsEc693CoPLHVczqeWQ6AtFHJjXE7e5CfY2Dgag",
  "key29": "2j5UYK1f26niNa2XuLkANoiXMCXYa1qnfvRXY8qXEiqyzQo3mr5uLZBZqfVzQDaiLDbS5ioLUaiYYNVBHXNXK7pd",
  "key30": "2HVwYzwskbnFKZYi6fjZcpjcWqQBU4ASPBFwUWcyzqyR3g8wBmtrZ226QHvb4ibgoVtPgAbF4RwZgtfVpSdeoySM",
  "key31": "3JnYvHeoEXQLCW4w9mBJLekossaKwM5KpDxyHX4T4jAwdFCEW7yR2Mbw8A7E9ach1NQTqSVg51o4S9gH6APWpCGG",
  "key32": "5oRS7i7URcNVpQLQBbubYt7Yvt4itgMdigJ6gsbV5zUZnrv4RRTP4Y4TC4S4PzR2GuyevCbNmutzAgC6xcb3yTNW",
  "key33": "67hY1m3Z4FvBrJJrChd6HtSVh96P9JC8zCVKens2AFMfBFFa7ykbgpnPhnmkhNRD6GGYsVrczCnKLKKxtjYtAQEG",
  "key34": "4ntuQtUASerJY2WLL3JvhfsUQzBvnpefceR3uapKnc4tjsNvr74YepXkKuUHSLJMpZgJdxpeZ5Jncduzn7k5uUxA",
  "key35": "2RCsGes5qPYqCkXdTq8CVF8xMwvzK4HXsGSn5C6DRWM2NVWu14fEd8BamrjmUNNRFjviMGxSp8aLgr3dKFZ7Q9Yb",
  "key36": "AkYKy3qb4jkP46tpHLTH8jsFXbxdkERRq5fCSEvoCQoCCk4ESGu3Z1hzNGCHyHQJmn4eBGTWgpPU1BoLdVhv3kK",
  "key37": "5tA4oA6F4hTVif5jAQVBkZpNdxYYM3JNigCqkaoA2R3h4jUCAcAYvtYmNJmHv22RHmaTNb9vps8avj1MttNYfmnU"
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
