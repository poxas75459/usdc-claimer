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
    "5UX49guxyMVgHF8ZFRNz8zejTraQBJx4Qi5PFyZoF25aXviqNZe4Sw1W8HzC4eGco4GSsu3bY1qb5v62TaoCibs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3WSKBY7sNFM5NEn4mK63tnAyMEKZxnDkv65WRWFCiSM7bwrPNJfPaZMCv6vJPP7wxhZY42xQABmESNYg8Gb8NR",
  "key1": "3SsVu6ohFCAT1hLXiitPMTkopYNpHd1r7AaMjC15M5XhPhvPTzzbCExvzt4hZ69MgmpR1ToYSJTEN9iRHHXH8KdU",
  "key2": "4ymjiCFH5WdA1qQxBmcybh32WfBx2rv218BEygSfgneLaB4c78X9EunJDaQ7RUQ4QvRAdW4xkB8B48aJU3EQgoGA",
  "key3": "2jU9w7um4DPLP2X1FXAhimogEb6gWREKK8ei7KQuHhooh9EDXnUXQg8cTKXWjpD3tZBZKa3ucExn5NZzKDoJ6nLE",
  "key4": "r44tzYoLhfz4UaK8ZwzsaohJs2hjmF9b1KmiXNAY8VgQY2FxwtN8U8ua5qTpMfBDg9dn1b8vN6WtYkXdBbgwkEg",
  "key5": "4a5RFf2CswDnebbUZ25pWpUjRZYuTyhmXAsM1XUUwRa7tGJFEXBL5dbzTy51pZKGfCnExQN3MwsmJKq8ZkQbMqn1",
  "key6": "3QsbevB9WXyZfdMVbo4aLBNChcLNQpB7LLbqSeJu8fLy5BpFJ7nRRLRXfCrDv2UJUdLVHBycb31ozAoki7jqYVt2",
  "key7": "3hFH9EgyvU5aKqctHokJHaugdB6AJhYG1rJxjMjvM1uN8EjyRjr8NjyGCxzXwjWftMaD6vM7Kjzq2mz4HZqhxfGH",
  "key8": "4JPffCHhiL7mmHybKzZxCtdCWu37aGJXQpgW4hmwRXhBX2k8kx971JoXrrwnimZT9tLkuiE42gLXcDcgc1qo1WyL",
  "key9": "58sMpkJaNABGFC7EG7t39GPczQ5X7dvJdvpDo2bQRF5yaruKyoyJmw41WPLXbyaEctVPmpqorcXLL5LwXDX6w7zr",
  "key10": "4XDZ3YSUmTtdvBKxowY4HGxidEAKyKTWcEBvvQ7sK1BH4SZBeyH8HSXf4sm43nfLp1zHzAMSDFgqChLKoRxmVJgm",
  "key11": "e4R3Ub4qsYyibS9iS9DtpekY85BHckbsBR2LWrz5qJPMGoPpw3AW6kbSESF17spBvWwB2q7v9p2xvJGLcV6L6HL",
  "key12": "67GrmT7ZWjXfYixpMyfyg29jsUL6tWd6VuNVcWHvdDoqE7V5QekgAUR9mX2sau5Yn6JkHfZSX5WdjveacWXaHw2R",
  "key13": "BGsZ5E9so6uNDDpGHQq4zmEHQpcsoGxG1ebTTZknws42592pjFFYUH6fm2Ecej8kS7zkvTjUpA2PeEQMzE5zGQR",
  "key14": "648Lp3kGK86wFkfGR2XZg3vrSioBj3P5egt1Kp13b76Z9hRdsri2S9oAy1HGba5AUAPBpr3Jf2gx5zdhFEKTMhec",
  "key15": "5wzo4JosRj7xRDSfcrhdb7AybNGDZxgD94h5ydQbqtdARsSN2oFZfzGpLZJa9wTZdxxUjj4cAAZABtNwDhuK7ey4",
  "key16": "h5HJhPRLaPm3Jun6nW4fgrXJQFgXxE48pBnQ3NmKs7FigCqCCCLe3dZ4nZbY3DxBa94M171FnBMzfx6vxXMfCo8",
  "key17": "4bRreQp1ZN84UE7yZ2Wo4zNuPp417uqRjHHvyNEi1gnEHf74RrKSiSoZBaPCBwwBhtW2zobiNsBz1rTrqJWQk6uE",
  "key18": "5iq3eEZmH2TMomJiy6u39Ur8ViiFKNSeVQf3ui2CUKAdY1R9ucAC1kTPkRZJQpZzXM5HYUzAQDHqM5ztYdjdZYv8",
  "key19": "5KkaZfk8RBZMNA8oDoJ5Y7RW1gBqkt6vyiQ8W6VSA4PSfyXQqec1k6sSUomFGVGEyM58j2YAa1ybCpwMEZLSRz5Z",
  "key20": "5SWPkTT3iVDb34rCiCopjffmbP4TqeuacTufiKz5az9kDeBeBWzAPyCuCh8FNYsDCY6ZkWYFcZNGmoJany79PevL",
  "key21": "2z3gEyts5wBj98CUpL6zMdZUTDiQBf9ER71QFUdNrMBkBc8xyjNGCBMySgBtxZyGxeCS3NVkvFHpfgNutn7KjfPc",
  "key22": "2RbdVw16yfyy17BqZBzDVHBdq4wLgzECtJ6gyWhTbeTd91XeGLcfZcbt3qgbHoQb8e5WBv9ZXhW4C8CHSiQMqV4G",
  "key23": "5UJxLcDGgF5S4GXS7Nczgnx1vwabR77ViPzhVJQWhUbPwLfDsXxDodX9JoALQsfHptRiLWcraQdnydva6ibBchKz",
  "key24": "2AbDYZFX5gKXzKvurRzzrNzQRGvAwqWCA4YNQcnAGRTnJi75XxHeP3FLxRuGg2x1Wnr9Dn7qGhMGYWittWRqxYJo",
  "key25": "4oVqSPKVHqnwLXRUDiqUKbLC64KdikhwrhV55he33fJ1WvL7TzvhFkRTrrLH49bpXgp59JF4gBd7zUVBYy4KZptt",
  "key26": "4qvxGT37Tz5viz94mdCLGfAZ6TURFWrVy7aMyrvJFnhXZjzd7wSmD5bKcXh4uG8BYCbSyo6yGu3Hg5sFN3XzGTbk",
  "key27": "Ep8b2Eo4PS9XaFEnJGUqgzviTa83RpeL8UmobtcEky9yCofsN5XwYpuLq238ef1JBRCDcsN1RPXrQXTw6ykGuKG",
  "key28": "5oFS3hCKbCVQTRQC3JQ1VDkA7M5NePR4qamrm5gQgbKnjZomMqJx6eT82HqBBrR2ah6JcozZ9iQq5FV85KuseJr5",
  "key29": "5BFP7VcBT6HkySSLJmaHxN7aSmL1urBdVBhozZjdqds7nBZRWpsGyDeFe3UjP7Gm7E4mhcDQB1WRnhWcjshfc7tk",
  "key30": "4NzphGgbAKmUUax2G2b35M5G79YcRx7vyfs7YhMeKUoxmXhcvcLAnJNaTmgH2oq59ehKgCQ1JuggQfFouN2JjX2t",
  "key31": "ZDvkGrXn1MjLE7UxkCQHQwkr8NuMRw7QGA57dW79ws7qxUrpAsuZ4xBtERh8QJE3aQeJstUPsWtamf24dWHq3SS",
  "key32": "3jX8oUiX1cAkKtXNbGNiUh1syKW4qYNKehPER8hCUEVzir3b5zTzvVZPgvhDaJnrVrXyKQJ2mBYvnkSTwxHJhMG3",
  "key33": "2G8PihxELJYY6u96ZjqSDiabEakGaaRcPG2kMrTpKoNgRoajtJndFh6ce71q1fC5CXFnzb9FfZceN63gNKLQKAJH",
  "key34": "5XFvFi6nrtJMuDVXTsxhkoStAK8iQSzguhtrghDHqBYyfbK652pB65xMLcnfZsRuaRDxz4c9LPTSWAxVxoTHthaa",
  "key35": "2qANzF35RjdH2UWhN6LH11v9BKuaUzkxangYgRRT4J5hXyV82Ae7rwX9oYzTQwbGNDtVByDzdB1aD4v7jPw4nYhv"
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
