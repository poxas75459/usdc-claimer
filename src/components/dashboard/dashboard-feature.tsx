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
    "3thzvBdpHHBVk8sQuMX2EDNiiyEP1Sc1zyWUx4MNMkgfwF3gMx3BdiLskD8uRVZiT5D6JU8hFodPB7PFaGBp6fty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFeKXiB3qqeMMw9jF2zq9QarsUGpS7vd2fhSoJokeaeoAynB8Kpdt6Emji6BGYucyTi4N8jQcmK4jFHYNGueC4Z",
  "key1": "3ty1GxEbTwuXoGbeXagRyjEs1TUAY3mYiTLb6tDDAKPBhykhSxkyRH6eHQP2CB6JEPMuWwg2Tu8WtiG3Nr73UL29",
  "key2": "vkfVGXmfMh3vYSrbFZwhFSxycUo2qACnBRgMNq8Bd8ANYBhSY1oVjyJWvCpmAb3gmkwM2QjPzhepyVj6gvtzVFi",
  "key3": "3qoDsTUbgSfF2behKqLhqArZVH1gR8a1YXwTz5otSorG1zETzJ8RGcyQvAnzKUeEkyVaKXUwGEjPQBnsMkvfzkmQ",
  "key4": "2gZkmx8xZ9YaBr6pjhmFGG8r4jU3RsUGrm6GDsVfBo5Ud6yfoNp9eaTzYSHKVGQ6orybGxohHPJKsPSeCHmna5Lh",
  "key5": "CwNynFcogPNaZakgpDrq8e4H1MzWwxvMUMaCEiEktYT8mfvJ4tJAfQfF1sjNjdBysmQSaoumVqAXFgtMBMLZZAH",
  "key6": "5DuGnYTnJqUYHoMiWkfLQGEznAXMvvP7PbSzJ1i4gYykGewtsZfGKL7rS5H7dGKHhGkL4MKpHJRE61ritVFmzwdg",
  "key7": "ufJzHqGtFyjK3iMeLfs2JSLVTspSRLhsJJJUFic9suAt6c8jUXMcei8cTChpTE3Ge5XvpxLCRjGNGK3YzCH7Pii",
  "key8": "37tnCUu2GXdpcwe6arx5tuN1y8fYLj2wMMFGYB7JNLYXc9bDHZMBLmoMqsCeY51bCSW7JVFzTkiAZvsaatgWpZrk",
  "key9": "4x6YvWGASCQf1icfEcQ2UiBsgpN6WiSiqr78FZ5hxMmM2aerEK5JhD361ctGG2gScmkRLc3wjTbkHn4ZGG4rrd4a",
  "key10": "5TsBn86iYVL3wwDP7JQHRw5Qio565ewe9pt3CijV34thtYWVVdg8b4v6sdfauaNmwE9KUZsDdiAYgyR4jzTfo1vo",
  "key11": "4EyDfcP4Vrotd8ptPS5YHPvz8s6dpMQkBiEc8VJWftoFsRdyRwpXAkU7mEcvfYSRQ8ZJwJFsAFwbMrBjrE2NaaCA",
  "key12": "3GmnZQ5YQBp3mujHTSxdd1BwhCNpb3hzp4MptUT1ikaFKu1Q7E1Yvu3RoH8oGmcmkohPZ8AiS3NsXfUDwb1XXmXf",
  "key13": "5ZiVDeNh4b5uchwPgrnDsic6zLVzzfZkCQiMF7VN46UDUczuqqjvnwtoUcDgHh6S21LbT4PVXwqE16JyeEBE2Pyk",
  "key14": "UrA8WwrpSpUqdtcqhS1vP8wHyF1KLR9KVSKs7FJVs9S78iZpSd17M2Xe5KWKFUysBMqceW4R9uyw9uRY6ZDtHkU",
  "key15": "5N6gK98pYEhXRSYE1MYi6Rv83iiDvzyrMF2GbZGXJggmHiXky6c7V7ApJigk66Trs2FnquxD6L2n3feYLVcromHy",
  "key16": "5NERePH8xxA8BQHZp4Rh6FuB8puSCMJsGg2cFYBmreDpartPwj8ZZoBqJv9jXomwET5oJCzfATqREpgM5tVJug3a",
  "key17": "4pD6QA6aoj6zL6psc6mAJPvwx1wfKZarzDU8ahsD6vqgEUTkhq5CWpp6TPf3VJVLQG4vNScGgvkQMdwzXxYqaEZW",
  "key18": "2VPR9chRA4rhHx4WKTrC6oMUtERmoeq2wJKdW8A2Gx3RB8DMLbNVmn4NAf35yhnyCD31wngan3Hgys5RLJcEVz3Z",
  "key19": "43ihTphtDss79GeopVEKNoraXtyHsdJA3s2jobqqH2w5XFdCuXgftu2BtkKgLQQ34cDyc95YBmBHPtG2nB8dZYVK",
  "key20": "4KB1ZPC4sLehhNA3nRXvbpggGCdAsbJ7Qa63sTGSEdnNcZje33Ek9wEJfqYz1WbJjuTiCSL4T6w2STZjzMkdAh9K",
  "key21": "5jaPx5ocq5zan1JhnEoFL1pJFA1ikF35ksfXGYbrJJARgjJqSanBcYfb7xnNribtDhNHj8Cr4saMLF7bzapzATuD",
  "key22": "4jqyATzsXEPFq3EUX3RmMtYSLfNQac41Vu7jXMMXnHSPNhbE3XjrAqAinBcwG7iefALnpXXtcoJrpYREq9m5uucQ",
  "key23": "5SPe1KhNVqL7ZXiLYQq1ZzSrNGY6sGMumdxGrnZ7hZmXfMEp4cBg6sSFyAmUt3XJAMFXAbbw85k9WtXswF2YoFxn",
  "key24": "2jUj9dFbZi4knyVAeBBzLMzMqJBpviFBVY8LP5Hwyx6UkTbm26MoXVabDNJtrhMVVbranQ6M72sh1X7AarJG9rbJ",
  "key25": "vYvoU7PHMzuEE84mjnJctcBTY6fbXRa8D1ph7gagNagC7kd87cstYbFtGAuv2rgiCQ1iFxEkLSjFfFp6PW2X9xJ",
  "key26": "vzJ38p4hed5mnWABFJXgzA6wXhjPUuo5f7hzgp8TxaJLiinZCRvxCkeyDniNg67mTnUoCLR74sgwNXQsWYzU6r6",
  "key27": "5cbGcskyvoVjRHP7TMp6G9stR1t1EoZrRL4TkpjEA2PuaL9tYK8D8oe8w9jJ7XGyEWFt7gCu154QgHCduRo1YPJc",
  "key28": "5KPZCW9iKx2b6LYYRjayreUJNgWz72VmKAjuLwHByxVrauxkm4H99vUNTBvsQhGwGMcmmtf9ApmcaryVdTKJf8PE",
  "key29": "47DYkgYzavkBrbERHbuKaJ1akGBPVzkvT9TrFpQStUHyCea6LTqKLBQeeS8k2Coi4XU2bPN1N12HKVeKXHnpASsb",
  "key30": "PvUhGQPfd8F42KYz1qQ5jtHnNgdpGrY2iekTUky3YFZALQVJFW2qB4JsocQ9tJNkTyu4XRzQAPbh83pRBHbdnPf",
  "key31": "vzbn4h6k2F88oPwBWs5tqUYCU9pkLk2SYEunXGf6FwACP38uGG9EpXEJYvPteNeNZgKTzMnogZaRguzDQBJA7Ea",
  "key32": "2dx6Law9aYxK7KKChvffPmrm9r9YTZCfbim7bGqVCsTVrBaRhq1Q5a5NodUz9qsApMHVKQwBwBu2SuhXjEnhRjZQ",
  "key33": "xna73k8NnmNudPrg9HRFXA1EDwb9nRPGR7fuge2tJqqfGZQcmgBuzUQcBDFibckNREAyjNe6CYv6FHihhMQK2Td",
  "key34": "4zUvuaFfhLuqL6JYMcsgk2QyZc5BvnzX2qvkcoC4sBGLpJzTLt1v3a5fkD9Yoi9CNeKFpj2nfUrd8VnCK7YZtiDT",
  "key35": "tPuH7xZPj3xMnGWx2p6EwpcfQCQaUnTzTE4z97PovzH5dDoA6UAwstwjGf5iXQCnDH5kZxXsYRqyBfgeHLqGWdi",
  "key36": "2p1oLRUkm22xWP5S1NLt7fsR2N6b6haZHoZEiuANzNCb9TpMAipWr2YS1sZPeufzFsx91LfdVC4ksxqp5Mkn4zHe",
  "key37": "pQYLEFa7dxRt7NXKGdSnC3zphiL7dGUzNx8QNM2HRc1Rrsg5tgeKBkMP5nNkRB68z5C5bs88YpFairkgvV2oGnz"
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
