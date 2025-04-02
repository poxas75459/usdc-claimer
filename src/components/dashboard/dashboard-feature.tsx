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
    "5PfNBdKuFWJiKpcMMMUJRzLeq6Nk6S4wnJWMX5GrQ5SoNyr3Gj2MEXPzLrVaAEEqvMh7CjLcBsgyPfocVRwkPcC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGg9KkCvc1BGBigiwKXJvWJzGvVFyrcGQ8XYskyAhhQwaASgT585dayDd4RzgHUHDnMpinc45NUBckQUGGrJay7",
  "key1": "q4AzqcRwFatZNG1NsaTtA3W21wjUZHcqR7X8LDKfNkJ1gji3iFUQayrhDpNmwiFdoPTmBDnivyadoC3mbgD3XZG",
  "key2": "3A3CfPzfEYaZ5YSnEBSePBP3DeUuGiG8AgBGwRscfSfumHEfTBrwV8qD8vyrphz3m3AWN3wPFQVAoyKMKrMxF7V",
  "key3": "RiaJun76V32aMsUfUbMeXbAEa8a7B2jrr3y1AEdSL1ZUFCkSTVzAZ3JzPRRJVvYpF17u3XMQRCwVfKnCTyB8Yv6",
  "key4": "5kdmwdxRkx2ADg2ygSq6LWydKGwURoxY5K8QnQBxucmCAtF3QwjqbphifMtBYJU7b21vWXUx23oqpoMq5LTwCPs3",
  "key5": "4Ehq8f4rwxfPy1ZgZYsdevV8VHXGQKC83CgYvvSrQn72cTQS4RjBu8VRdstc1HXuqpuzCgBqCaaorG8sZku7VMXn",
  "key6": "34TREP3mYEX1cEC8vWiX6oenG9Ec9YMQadjXPMtjSJU3LpKEhjaAQNZKBNZmWhzzKiG2Dco1bU6do2EgVJA2pjVv",
  "key7": "h1beeqwwMoFWcngLJMpuyzyuZqqGFZgzKDtJbHtFC8L5FLkvfvJDr5sNEd3H7hC5KobgPDdX6kctAmSXwbLhJPZ",
  "key8": "2u1eYmLKbEnCwTNYx3gY1cKDCFWiTfxcgBtyEewdFunCarCy9x2hZTWdypQdmFV1RexNshi6Es3uH1ft3Kp2HU73",
  "key9": "2h4UXQqRQ7m3yCKdGmMG69ZeBuoBb5kto3kwGjXQ7fDKcEWaGE9hN8pRnAZMLsrd5msJpGx78KzgxpSB9NCV1uVA",
  "key10": "5EfVSNMhWHP5BRcz81N35jWRhwSd5DjNru7Yy2xWNvsGVk4b9yXNNzVttDg5Ur4w5tu1VmWYQZoFT9WahhHrBhRp",
  "key11": "4Ece6B53w1XArRVG5RdoNDXiTMYXz9c696XPdbX8AJK8pGKqCFtSdEBrhAT8ckH9fZdvS3UVJwejEcsP8kbKCZ1b",
  "key12": "4YrHj3SJEHiqx2bXXugX6xtPL8e5ifvYXcVJ5GfUn3zzAuSM5AsKRs6HqvrBwDQN8yDKCC9Qx6VvCE5VravCWzTq",
  "key13": "5J1Uz8HNV1fm4gEFFfkmtzZBjQcMeR691VpKe6Ki2Ly7SFKoS3gzHEccpDgHEjVuha5xAF8ynBBh2q8Gh54Tf6TG",
  "key14": "2zX1pwhJfHt7UmzQZn7UhpGvcAXc8ihdLxeKx6SGYBf5hZxBnTTnU1Uczm8sVnzrAwgA3b25UsWCC8bUMHfJZpRt",
  "key15": "5TuiL18smAYK2v2BaoqZVnbqdwpzBipAEvk9tMRt39R7kYNWL81jKxtP1oRDVFCJfR7LuPs9rBtdvu8yeBcxrH7H",
  "key16": "39V6UFXDM9GzwzxEN3SUydaZnt4ninzEUjem3gVSrC7YUbs6ZdMAycjHAfXdEukYAznyDuH2gaeaLkYrEzM2tyDH",
  "key17": "Pu1NyeJjeCyBePqbhrYMZoW1NqDjxNHJ1mTPwELGyXPrmJ9VTmvcrnXUCj5FHHp831vGcU7123TBdHt3LZCqcso",
  "key18": "5CkLNBtHWb9t1Rd6rToaBvG953qSEYpGuRNTTzRbqK1pX3vN5XCwvyHLt9sV6GsWaRa7eoqeNFvpTSJdQECGEBat",
  "key19": "5MMrqUvFqd6uEikjAMcrp6xmQnzVc4F157QAcD7tuC9bKY4WwPj6cJtycGYMuGzJDa44ktMrUZ55dRuUjAauSM89",
  "key20": "2rBarqdpoofc5HmsoM5okTkeP2gGi1Kb3CwF7RRk9RsnJdjvvTRfCad2nS8FfBbaSBfm5Z1Fnk6vNSELhfG6GVfS",
  "key21": "3tej2p2GcH8SDPDKxMUecLkq5431kgeveAamVBzzrtZUGFJMD5L3jPquHKBwg9NsRMgyM3Wi6ni1JEPQduTLSjT4",
  "key22": "Rha5Jjho1YxqUrrBKgrsETYfKiu2p8t35Ve5AA4ha8KrtdRuocY9kqGDyrrBBKWzd9xgRaMXPBtBAMaDdnPnvZp",
  "key23": "3k8uz3AYBVeuKcbtW3daWwXjvpFwPRGjnbz34wBwtPFBqYQMsnJzuzcLmAfRmd2DYZCVNvsHaVbMRfkH4dVYj8ak",
  "key24": "VVN5aDyyqdPt82GtftvzyJvdWBuRa666Lo4GppH6YxeoyihdTt5y3pADJ9N4ZsHbyjvA8Z5ntL6kc5qhsiJEA6A",
  "key25": "2ARkxUtN7ib9RNTiEzmbXfQGa6NXmwHpXRoeD4yXvsR7FCaXbiquWLPDcF1eUvsuis2ofiF6sQ8mK75ZRD7eXam1",
  "key26": "5Vsr6F7dwC3A7ZkGZ3tqcvooLzxTSA934AoyxWGxkzJ6zBV7UfJEbg2Lukrvc5Z61wBYh7p5HugxmMrjbHB2uXwa",
  "key27": "1VRRSaGDJzQ6RbhPg5xoFUS1GdAfHLgvgEQ2yHhSWqwTmXLMgPTF4WVUujKZbi1NfmCuWqy9yynn8gncWkLwYic",
  "key28": "2ovHbJvasQLqR7qY8C6Nb6F6HZy61WJUXbxdQ95G3pXr7NVnxGSFZpfVmNAgq9vFp1Svt8UaWtyrmpuL1g1xbw5a",
  "key29": "3W1q1r2i2R4kXSsGKFxU682Yk892D2qEvd56j6bV9EBvJXghbU1w1auhyAFVGJL3Z7zjp8JNvZpEa7VD2YbpE8dj",
  "key30": "GMefRDCH8DaBMaZnZiRBBBqjEp8fDZJPzTbf7uKJzg3Cfzbou7mXNY2fKhfVsZgZPp2Yw95pmKZKY3N7CqodhHV",
  "key31": "3XXoTgG9vd4CG7WtULpVJCbCJ6wwvLzyZ49VyxmRf7b47fpb9LSuoBKbUNNQ3YgQHcP5dBSDmUq8EkENq3QBw9Nb",
  "key32": "4EMpwiDgnX4YcjnFUvFWQShx1XywzNQSg753Q6wAAyPmVuddC7FyDvpzrfw7iAuEDpiaZGpsdPpngF4AjrmFdxTt",
  "key33": "NZo7WDxvD2ek1JEK6fEX4g5efX4ZRAYwdxAG4VE4aU8oGqbQmqok4TpcLSfs64MnfKpu9P1e272LzvZQGjzuAo8",
  "key34": "2KdReiWW7GVr7FANbyMvBccpZHhevS3kdNhaC9AjnVHdXxP3P9Zwd8qHFGP9V3NZZ2y42Z57H5okeeVj2xyFUogT",
  "key35": "XuY35xsoDSf4Lrd4mB2WfRRcD4WG6YfxG8RxBRZD3KGppDLr8DU4LpppjCY7Jy2TXUSxjZNa6GyVxT9KPjKF3JQ",
  "key36": "4h9yhLNzdfBNFX9hhVxmcRvxgoezvKwZFgpFF92qE8EvrWvr78uAjFzECxtiZmWDVA2QhNrrqPmq6HYDGsZAswbf",
  "key37": "2CKrzfYCSoqSr5oJWmXoCnoV494bu4ssyQfdtJd9svfCWTdS374iZyqDvd3Csc4phYpm52NDxdJZJ1tRYzfBWoqk",
  "key38": "38icg1ce92kTjVZEocxQt1FELMjjaQqLvovMffCmGXdJE6HoVcz7vhuKWr7sXsSEgmKxjMcvn89fme1UWdnhhXGS",
  "key39": "3wDGzzVA6MxAEQ31BhepJY3F2PBfARrMahBKUfBzM1XFwNVSyBBECzcZEHosfUQkHwJY7N634SAjhrun5mQYnc6V",
  "key40": "ftiMKBda5cwN9ibrxVpZsfNsbzyYocFgr4gYT8YtvuG8mG1EGsaJ8Vwo9dZorp1T8nBJ5fSufChHvvD7MRSknr3",
  "key41": "4W6fgK74zYih1mkbcxMePJdEojtngcoJkUYGP29zXkLGokWA9KWgrekHGWd6f4pPv1u3VzYxn5ZjH5LY3fkd63K3",
  "key42": "57dEcAsKrhEuZ9VxPmvVDdEQr7y25Ye9Kv1PkNCcFfepy7hAN9xY2X8Nws5ALtiFLdhLVHTSviERgss1AwvuGWAE",
  "key43": "Zy5EegcgcoAW5RG5efZtXcRVjQ9p66Ar37Kb7V7uRcpSX4C6XxoC9sznWAesUHgnXgdmAiHNkKUXGqPDh7RNZyr",
  "key44": "fXgwdzkVyH5B827nHZVEu2q9yD5yk73YDYS2WQiUHjuxzeUYciUUpFkCv5Z1wKPES6DpWWXCTJPEGgcibcCQESH",
  "key45": "3YysgjctB7hTK6kbE5rLsqzmGmJRbiHn2kgLJir7adUj8uSrfQzSu7EEos8GcMZ4CnzBCxuFjBmMxJ9XhZkWjKE5"
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
