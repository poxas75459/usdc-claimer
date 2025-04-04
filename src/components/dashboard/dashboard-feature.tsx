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
    "3nic9ehN6jw4vjDHJ4kKBaRQ9KnsrDq5354NKUEREpNjc6Ctmy9DcqmSMQS6zFhi5oB1sQ469y4qDvDoBZiEwasb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55omV6xGrwTJ7St1y99oxQFh971HAjbHWn9KGv6ShY3w7DH7AAsb9fYgK84Qe7w14s4dPdhvrZEc1P4aJLJRcvKc",
  "key1": "3DgdUf8aJgAfP4Re7Mwh9khzDEdnk5abpcB6znQxaoyemah9UjWm3mcKmgVZDxHsBkeAztWm2GrbUTPL5x2WnGZa",
  "key2": "2wYkGUrBGax5CwiEu6ZSNGUPgTRx3ktEAtnrM458E9D62QTja4tt5Ri8Xxma98CnMLUSke8vrVkJLjYvpFQGqRXo",
  "key3": "4XUTrcxdgtjJE3cRN2q13YQB3qkQdpCsVGroqQKszSLi3LqAyPatVTKJJVXeygwkS9SJXyNzZ8NDrAkSwuq25YHC",
  "key4": "3aqENu5oRLF1qNsBxcGu5jEQqk84kqWtGRUE6ezx4hhiTVpxaa6v1ZsSV5o9AtvNhr8roR8hFyYcFFjMeBNQAnWg",
  "key5": "4yeDHpxADjShxUsXHR3F77m7D6k18DoPa95NafZMDfVcTCu31R71EeXewwMmPvDKJJVsZmuA58Pu7TeE1GTEorem",
  "key6": "4NWNrkiZrmpaWNrrFZ721QSAB2wxZE6uyWX3pafU4E3u4ea8gCU8G32ybpyxJ8cM6dWDVKVMaEt5YSJT5nc3zUrD",
  "key7": "2s4qiFXCKdfWEALvuiUV6AZJGDJL7EYQ8nEsDogAGgKQXX2deop8Dvw7NKaW4R6zMVu4jAooZC9j2B9gSpzcqKRa",
  "key8": "5zkFCmMDZEZuVadEax9kVxLp83eMu66DqeZZ1taB3p3prGqYDYHU5tpo17ef5y1iDdZaJveiwdrRSjAZYpGSRCir",
  "key9": "45PcDEKS6bzxasX4i7YGG66ffPNNdXAhxcfcz1KJLXZvryC7B622sky6rebQnwya4bQhXUBLyzq9p9hXXRqv5qUa",
  "key10": "4ejwtnB9A41RjfYaDGfHN3k5CDpvyX4TPu1zbgfFaL6PAeRGR7nP57fBbHpuHc1rmuhckv6ifNL7UH8po1xeww6D",
  "key11": "Ey1TpigZzQTmesWjSVuxnJoh6DZioURe37W9yfDYWG9VGEr9kY9iJctSzM4PAA7G5tMu7ksevNY161BAZeh5BFG",
  "key12": "34Fd3oUK99Yc91wAqVb3xVUWL6dqRx6wyUPM4rwLCNTDLp8oxGeeG9TYG7D8PMqdYEnohVQbDb5vx1Whp71UrRkN",
  "key13": "25Ck4quXFh8ofWw1PoK1AaupLx6wdBnw1fLaFqo7w9o33ePpEBi8ubRFFEEqJcDJcwyk1bn1uWFKudQj5CV2hhAQ",
  "key14": "4CWQR5nHpvUPMQF2V54KfRGL3R7LWMD7CEHp2Ka9NsTDLiFySh6PCm4vvJ29eAV8LE6trixnBGrxzHEnEw357JW7",
  "key15": "5TUZSWZR2t8kr7333px7K76j2QioLgFdv7Sx8fuGm7HeGbtKKMdvTeKC13BjNZ4EdjzU37KFu4ZbLnytaHzyEGZw",
  "key16": "4WSoa5drovqR3CLmx6nzm4WRhkuM4PHmakLkMAePQvyATKN4Q4sKo7i1LdmUpdNb8p7oQPjwxo3aPmjuUzziAGEC",
  "key17": "32J69XBy2u9n7jxf3ZfYWy4utErvAQJcjWqV1bJMtNL8c15np8PCCPAwVpE3etz3yLroqPjdoGSbAQW6TirceFGA",
  "key18": "2zGQrP31eta8n8zkbJeNeAhjZJXPbZ2ZkVFizQQwCabKbXgivhpJmDKM6fmqDNRUeduGRxmH2nFFWoWfLbcnQ6sa",
  "key19": "517MrEF3r8hJcWxB6jJoqh5NxY4QThz4tTRKEtghkQPS7wJnfN8wDvSUPRbABSbVxMfZT4NSQ3KF31LYfhdUMz5Q",
  "key20": "4DWfWQbwVzoAigiVaybDtRySUsaroUf62K3ng4GGP2XuA4Af5QMwLTwxSSTkSptxfR8N6ipYL8Bm66jnfwsKv6eu",
  "key21": "mZiF8imaRw7e9DYuNgKVTGaHBeFe8P2jbnr9JSb9g88D5goUTm8NqrfuehLD5dNo5nBJEjeLUfrJMZheHeND15o",
  "key22": "4DrWrTbKvZ6waLSBJzHv5docK4p1AdAAkMDxHLyKRvUdPjbqGgmJnuzRGTeAyREKTMdmxcezrZUzJgLLL9Aa8XTz",
  "key23": "yGSxbeG4FrLwQgjacMB6EPUyT22iBbQmqcXAERg4qT8UTsswd3vojLjFot1p4m1v7LUwN1ZDMb1deeYXr3aPPGh",
  "key24": "39JScm3KH8VhhTPFJf5UsptvMWbj2HBpHs9NmaLmxiFtSLkE71Dta9tfAXuHejU18eDZ3BmUkxT62Ntdu2MnzrXe",
  "key25": "dnXzbRb7i3DoDxA1jdCitAsrcFF4CHNBKwY6vqwYMDkdBvgvWrKHW9i9b4vrQexrFEmSfdRt1VPBmn7nZaUn1CQ",
  "key26": "n2psKXF1rUeEirRpkVxR4786J71rRvwtdpoH1eoCA8UHsA6cEXLfQ3DYEKTcdo8QPyqSWyhemdFU8ReZ5muaGsp",
  "key27": "2BPgZi8uw16WwEd9H8QFKop3a2t7mVFWJoNc286JGx9fDiTboXJnyU22cBLs67rCxeURLMRYQPWBvBGyNu69JwMq",
  "key28": "4hSLb7TGBpghhU89nam7RYLkyGpNPYYVKnKUMG5CUr3W66CzkXMh7VWan4SUNQp2dnvbcWbwkuB4wTYeCwbo3Mk9",
  "key29": "5SJQsQVQfs4Q9QdvBHmF2AT5wPnGbwLHBrSFqsTsXUMRWFTckdssUkTfgV1or4yVqxVavCPnJrmgth7V5y2hjPy6",
  "key30": "RKT9uAYY8guP9KP67xwceNsCa2j9QM5K8YqQHQkn1jnRie6JBqKtUEjrsZgojkT2uQxGfzBZkBFKeE1pc6CX4bM",
  "key31": "5QpwqtSx9KFeRjDNCJ6DhgTDPxfoZz3dRf5k13te2iLcki2qsoNz7vsijANRmqjvQZnbH5KMFAmkzY7jvQ3JAqcm",
  "key32": "bvrNaesx28eY4VPcbYWKZgS8AtHLS69NY54BLKetXAr3tkK9YrDUghu3zBMBZZLUEcmAkruVGMdG9Kgk9xBvbXj",
  "key33": "2oZx8NdQmEB78AtBaqnMYfwscfhSU99pLR2XwchYTFbhEDj3Zv8ZPE8WLqbypLAVRVzBiTNx1mD6Th8PXGPiM8Wh",
  "key34": "4F9reUkPQJHkSMX5paBJHjVkAjViuQp4RaJeCgiNCqbgHjXF2c76zuKU2H8k7NK1hKt3fx6X4SVc3bcEfAWJw4J",
  "key35": "3bEQkDPz8mfQF6iytKf4EZvjH1KoePBVyrq2NoPnQBYGnhhPG5XDimipMA7cSQZF3amz2w7sqVPfqmG9VtrAu6Ga",
  "key36": "2xF9hYgDkNhMvtxQZVPCQT8UfmQ7neNyxve8ZzN24A1esDmfqnoJmE6nPeKLTE7ywtjEwuEVwFQ87E6zmpe9Rmpa",
  "key37": "4qaWdFfDYh21qPKJNcZpAereG5pdkhN7mjEgrM1aNyp6sRUVoASCZqF2WU59avRvqQNZaet4hoTrWRJVnrqGGFUh",
  "key38": "2QrkcFkYTjcvbbgb7WUBjJCnXnZswQTW2TZtCMMC5FfodL9LyMhgc1RwxnQmDPPch3PwpfnL1oajHvYxakKGn87j"
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
