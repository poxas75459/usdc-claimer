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
    "3VpAv75ezpLx4F4qAeEBhn5w94eh4EZCmV2LRqENiRcSyayMjMhyFmB1iCys5hnTABV5xeeFRZfZwpppzmQSHcii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GJr7kJARmxa86ULFBPGaPjpTGEfJrndkv3nW8ATpPcYpEStbfFfftHtJ63gyyJQcHWUGmKfYeywnNnPkR3UhJNK",
  "key1": "2yjWmYcmEXJdRK3BGGCjRJKEFTznuQqEqCJKHqA56QYbcDHhZthN2Ef44Xf3eemK6ZDnxAvgkZ4SRdRcfe5AJDx6",
  "key2": "5dAyiQpdD45A7mVWZTkV4rxQ8K3ePj1YJtMKXge3iKAjX88RgbgeVnJaCh9X3Cq5zLLPM6oWoch2wHZT88eNjQBJ",
  "key3": "E6webwcEB5yHbEnY3VTpBUp9zZK6RoXB9YiqnVoLucXguYiVg9VNnD6XW4Xo4ZuSD5DNZ1Q4Ui8KZ7oah6thQYJ",
  "key4": "3hEogahkYN1NKngB6ia6X7s7MyxFaiBQ8rthkPHknDhGzydeRLkQ2brmc95NKxnv3TA5nFrHfvBX9oiyz4k88Lg1",
  "key5": "5ZSHj5dMzEEgHtsQGT9AX9M4Gc6zitgxk5xieNzace7QP5KmVx9mPLADhA4kmywSPjbrEjDxQAuiCARHRuP2YTMX",
  "key6": "3JatxYqHHvf3DyP2qvYd9oAtWQ53N9vkFz7CSgi6FdSDQc55RDaaELu1iQ3RAZEP2XMABwPUuTeHEnBsFKDnJoNb",
  "key7": "4tU4nmba8Z8yxptnfHsMy3nL8uYMf5uGAp7b7buraNdbysU1FqQYHBZJitJvzaN4ZDJP7PWCsXCmUuU2ktWtRimM",
  "key8": "NDke14dr6pE4LA9mrJ3xDHB8bpXgn2Z7RPHStEwggF8osKqcr8wnEQAD8T5y5pAt5Ccmw1NHGUGdb91ceaYVnwr",
  "key9": "363tCxFCxPPW2TuRW4gX1A57TJat99HVfRVAu4Kr6geF921AmCHUovx88EskJLJEhDSLCANHt6TaLeBEwSwFhqsz",
  "key10": "2vpnTJWrrDMJC9RXVC7HsnzwjxVFwcfvtfGvfcn2VbfF6Hva3YgUjknaxXpVzEhHyEzRUEQeM3bcTdxuW2NsUNfu",
  "key11": "2DPyJNm64wzZi7fphdv3zuvonhxVn6iUH5v2F3bcMrCCBpJQ5abcg9jWAQ99ZKz67CsXXrAXs8pV6rtdHVABzef3",
  "key12": "2sdQkGzZHigPZe4yJXjGJ9SSeYY3ykZU9cPH1LiNz4N99gB5g95v9LABGP7AnpChRe55Yd5aYXED1Vtpb7zNS99u",
  "key13": "4cQfJrdr7TDx2J7qfqwk1fLrc92qqep5FJxAUt6m2UH4skFcK2bFcbAHYFqeuBGK86MpUnmBzGda91fxXzA2MUey",
  "key14": "62RfwG2tikVrgQwM7U4G2PQEUphAJ6iZh5hmgsrJ1cyvQmEeqmXMu1vQhbJ6fEBBxsV34rE3SkYf5suCtM1Hy83Y",
  "key15": "3T1bchKvkJ2epmXraatMsUuqeVzQ8Qw866CoTmYpSoE2JCJqPNAvrbdMjWf7ouvrrkJTcx3Mt3FBw6QRiuvZX6w7",
  "key16": "39jFWCpf1YWC2HYDFVHLQs2rnsN2LSmC6kmDwd1kya2gZ3RQY75sz8Gyf59t4HWVBMBiEcRVAa5yWRKJcUFhjpMN",
  "key17": "4KLafo8T3F2ASbzKsjgWEtDCPK8RmWgPbNtCxvrnd9stm8QPd6xkKSppHPr7nXkENwTikY9SHotnZ3vMoKK543dH",
  "key18": "4VxJT9xJ9kT6sTDPpcDBZFs1xrwQszw7W7MNqc4yjPn1a2JhxdtEKCuEkXtscAW6LA5oQYc2nMfSh8jBKhsWBxuX",
  "key19": "3p4KtKb5tpkbMZmbQRqcLh4JuGjhYSY5K1v3qjurTUrGUbkdYaLNNKioAeB4a2qFqTtynC96148bSenrCLMFZkkq",
  "key20": "5Gj7UYGodNvV2WJYvgiFGg7KtLzZr7SAh31c4fwgnr7p7EXi8PZX41eZqQ7fJbGhm7R7eg7yRQfnXPnvqdhSV4fd",
  "key21": "4mcJeuBNdDeaqaZJgiu9R8K5hFNnrTorMbYWg4cvcZUXa1K8KsmRzBVXuP5bAyDVQDV1pyoTcrCijuMdN1jszMGi",
  "key22": "22mSLja9E8vvZ3AwSxuFWYjMyn3aqAnaLScGwUAextM1UP7fyGiWKw2UPoxAFtXgm3kYUsszmhemQxhrUVPEkTer",
  "key23": "54wSKtJvEvUwm2whThBoQQH9XEwHGgQVSj2UArqbBdUxAfMqFJsFFPFMsRkQbuUF5n61vBdPYV8juGicmjuG8dpX",
  "key24": "3dgDoWhn1w6ZtTtwFvxA8TwVGCEaSvjdrPrvenbaA3P4GmK8f9rQkSfumP5TnRGmZwrCy8kfJ4f475kxUa3EKXfe",
  "key25": "5S46CceYu4ytKkP4TP2fZt1ctCMuvWq5xZKjDJtWrueVdxC8NsobAyFHmHMcSH1KpTZsfQYXVXj7TLsX3Fu83r85",
  "key26": "iynKmgLCih464aUXTeWDHRhxuNH5h5oYJNQK2bTCLcEwjsH62kbaChHD3tJNyVzg7U7QCFxeMEYPLPbxXeVh9RB",
  "key27": "21P8ZjJRAiEUag15NoKdPUqdpMY3Hpj8tqmxnViFrhSf21duqG9WZTkbiY9ognYgs9YGsVHps8My3tii7zkdGpAX",
  "key28": "3vG2grSstopkbtJVc9urJCBLyErtJAGM4GTJRbQtGTpABUn2LNuYAzEnKxVnKBLLwZiM4rhxFD8fBgkTgYH63tB4",
  "key29": "4wAFT8LGD43HFm4rQo7Nqc2suAVjGLf5zUcFHAtujc1uBSqGZTJ3nQs4S5ZHzbekv2Djv31eePnkPqXUtRkcG81o",
  "key30": "3swKm6f7Cmz67Kvob2PgLc5PraKqaQA7GSqDY9yEjPEGHdfjwh3YYSrMAiRxzX5eJVu59zmve88tvpBxg8ridbZ5",
  "key31": "4tvBZovwSry1KN6QG8DhTXxevfpmV9pCDzShfYVag1PK1rsGZeLQXShfyMN56kK3CnRxbjHDwomnSfWHhAAf6HHn",
  "key32": "4foiDULruBStV85uLWrpX8bkCmEEnZbKBo1kEaWjLgeQFardVcnbd6PDgkmGxi5d7MAj2MNGvCBZcupYQBiahz6r",
  "key33": "3VKYovMfiYXdLBCng4QAYJMSSfwNjXFXT3KJath6LQtK82Tuyr7T3Kz8nXGmatb8Sx9zrsWuMci7vZNAxkta48ge",
  "key34": "3GHZkN9fZ1cQhMVYXMwaVtemiDj85PGhmtitBiizjSEj5iVgqXBB9dbUpEKKREXobTHg6X3ZMYqmFwaDoF5qgyXg",
  "key35": "29TT6kGicqwgWTWFEMqTeVdzBGzJPEaHaLaVXrndsgDAaavrFCTRGbcSahgHjvP3q25tP17WGGNJKtkNY3cWyn8w"
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
