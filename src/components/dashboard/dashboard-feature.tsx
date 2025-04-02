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
    "27YgQZUT7sRsZML7xQmCBEx5BQAgWXjzCFrD4diRPwXs3YgHDw6kTd49TbUPojyyFmqdow5twiLtYci3u8XkNh7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWrrEoQqwCz6dGuGQXXf8Phs9PTQ7uHYLfyXa1g3N15vbm6hM7beNsrK53FUg3RZbX1MmHZdqFGQNL33YD9Aaz2",
  "key1": "XBr3Vg38WECDat71GCyqEjHDQWJbwR7ScUfQXoS5a4Hw55iUSSFky8oxBNWEnT8HkYLLDm7vAgoA93uVZKQ26qr",
  "key2": "2c3KA2uqTqm3QLfWoc4XpKkTHgkVUFWe6VP9UvypEPSTQv9BCBZ1kaxWXn1kBTpGxSbABfU4nqiv2Fjh6jigbBHv",
  "key3": "5zYD6YKH3DfTqtCBmfLSy8nJ71bPdpfM5oQvAJBwajdLpWDmoo1DsrN2h6VXTbqXXmJVRYmjMCjXQqVgW1F4FAaX",
  "key4": "gMmpcta3XsLJQpUUAzaD9qhL1gmuWL24gH7mvh8sZ2ZVMegub9mosTzudsPS53kSGGyyyiYrzQRS1LLB7XwSJDX",
  "key5": "5km8irgRbNtMcJsBHGjzxJednrgvCY9PTzPxoBHMXpYyWC38HxSJR6ssQfEKJG9uDYtMbQAE7mV4rBmYyVKLJJxM",
  "key6": "4y51U7eFVvyv9dqp4BRvMAzGpj5oDjvJSdPTMNg26dcpmNdCHSUk1WoQys33N57dxcAgaEDRVtELwWRDqbSoQiVx",
  "key7": "4Hd42LHCsdqtmfyy8u7rJ7XxeZuLukFPbSxRmNphVtaGEk7whPLduXfKYbuRFQxKuLkPA3uARJVXnrE1LTtkQtV1",
  "key8": "oEaDUq3ersZwGFSj5YDc5HxxQAwFoKRHnBa7WDiotnPsbTEJ1mejUD2m7iEYZSUq1cGQ5qmeGXKHHDKuvJErXXG",
  "key9": "p9CAtLwpKZzoc6MsJ8xAqcX4EDq9Jt6XBFfAHkqTPpxfwXncmiqF4V1ucXetqtjBaio1Dwkn8FMtsrEZPkUJ9kC",
  "key10": "2T1Em59dQKUxxEoqoQiV5asWjjfXgfCkuoiiCkv68NAtsuk9UXjUqpgmnwi871DRqfPhXniqHDM7nX5AocYnYG9M",
  "key11": "PdW31Sw2BsE7bTZ4p6xU5aKyx9m4wHMyYFPAg8uxFUYrthpJ3h9tyRgnhLua1232hx1pa3AX43NEFowYDiGt8ai",
  "key12": "3BSEwBmynvjjLKAiXgEKxWUJ3VKR6rLQwHrLt3hwGVLc3taLw8HaeDkvHwxxdQyGTSCReUdHAnR3kiHMXjCdfrZm",
  "key13": "36YypXYrLxLFTUn9xZVbFGMAGiB81YFpbqca54TjFefwZHMcdioJFN4cpRnYh5zc9ZT4w24aYzrBsTbiTthQHdwW",
  "key14": "38iF6FLfBYLfzM8ST7mrpLDgH4jW1n7EBKFGnnpXVptWB6rfop6JeR18DTwtJqbeHbUuyUEysRwVrJGNedJvS2nv",
  "key15": "3VdLxiZDMknVQWspZGD5iLrhY1UrJ9r26BodZSJCU33tVXY8gAyQd4ampg7m1waXvMZBNBiGaBpWrNXjvCRtVekp",
  "key16": "5UqKWw5VUewqPtWYU91ocM7FWu7FKXvUvkXM5kbgNgogVYMzr26QFK3u3JFJCU3381DERV4HNdQHSUm4WDzinHG8",
  "key17": "26kNP8J27vXRCRo9K7PWE3EPUyRx31y7tGDqEvRW4DLZLArxgm5Ja3aYBPK2xSQxaTSr5opdeSvF2oFN17SyAZbN",
  "key18": "ktQc1ZJqh9AQZhzwetfhncQHke1HPWdtCw48EuHYWeQBijrjbwQVTBkyj6p5cCzqaKWieCPHq1vjAbZpUmR4ydX",
  "key19": "2NBDn7yJyqdbwsuhjpKC4P8wz4RPoj4K786X2aNwLEMLsCdKEhXPZ84zkTXAfN17x59eAsHaaZohiR2QrGzfCs3q",
  "key20": "4tLAHfoJZ18QsdN5amqHCoWGYD2wNrSigXXqZXzs8GjNrpTGhJ81MT8q9oATRjjLXGpkytrkTJr7Pmbe1jE1Lp3z",
  "key21": "2o1EC612SRu4bgp4zi8KWramEkNgCxxiVRWB5gKE7Na2u8UwuUrAbQxRrn5MqTi3yx1EcEWLrc9Eec4CLfmewope",
  "key22": "5J6Q2sb8myg5shdB1wwife9tZd3xrTqXumsBRNJayquz1tH1y1zwoBQkgBpr1b79rb1ZQixagJ7DUJmBhSTYDxdC",
  "key23": "5fXD9qRATh4jAm56UwMzv7bESb51R7sD7RGShkQoL2Bh25QtR9ezMmxaXyBDoViqryHzUepfosYwqqr8DsXVQSXS",
  "key24": "2hmG6hcTNqWFA76SfuW8wX3iLAc2sJSkha4Ci3K9wUAW3UJmvtRhSrR8twnyyMH65UgAbhs2CmJb1KfbyNWokVzq",
  "key25": "4pyWCdG9BjZbc3WV59nk4ga6eumYt9J3on6WCqwTM8YLqNGTvPX4RjfHA31GjAPYZcK8XeQYywyE1jsd5wQDV1SK",
  "key26": "Fa2JSLN9zT1NQYzh5JzYWeDvpJfEkQSvVBk2Ctu6rtzN8oYaRiPdYb2hYxSCY9zYEeCVjrGiydbaUaTuN637z46",
  "key27": "61DyYGqCknahXybAEqTSk6KUU7NkEw2oub8siFRz7Js7yNdW7bmDfi8NFNFX1qYBfrHDZnfcgGh1PNoJNRnCM4So",
  "key28": "MMX13CHhE28n61ocLYaD8ucmN3hZBc7mkYQNFqzaTPJGPiJCxbEMYxLuyaWz4DVLsYP15Mgz8aZkZryEEYecR5b",
  "key29": "socV6fL8UqVcr8XstyxK111SfKwGnu8YCoMhZvL4pM8WqXSLjYkbb2h5U4gm7MR8ycJnfhBuDKZ17TgZ6GUphtG",
  "key30": "2jp9ExnhVB9GwjSyRwHsuy4fdT1FvBQaidYjpKVrk3P1CuUeeExGoDm6MLYN8hrJqzZBkZtSBc73pwPk1B2novWp",
  "key31": "65TekPLsjcaPnzYfGLDQWABA6nxt7TGWyT86yDdhS1zwQqDWXMPLgwAhLAoboCYBjjzPB172vR1NaQfPxJha96ET",
  "key32": "4Wvdh14fbVrUDfWkJjZwEwH8XuvhxfvbKhDH3a1GmDJn6985mP2Erxkfs178t4HuDCzSGNuUBYCXPrTvHgDcDgo4",
  "key33": "5TvPvmkYohU84B4WGh66bXpHXvSFaE39nkitX1xa4An2TLBCJmsQQUBqwVhqNtsbQoMVXHoWxTVSSXpiwSoK5PFH",
  "key34": "u6hDwrrLJVfbQWVjamJF46TjBUwF9Nr1M7B9qYBCYq8QBfSi284sXd8qpvmTLjp1tcKnMx9KF8ZQ1p9frkELEYj",
  "key35": "5bU9pgNqCsabRWWxqjYUwStqEgHd8WhMGYakTxDv2PocQPH5A3eMbpHKAJnGx2TxdCD3HKNNagmKjyj7qwvAWwe2",
  "key36": "2YrukNbK9mpbw77Af8zGF4fyZ8Mry4BwihFbzSDUWPJ8LFKjsNcTEVPs1V1zmBeVnaMevTAHm4maddon8cpA6noK",
  "key37": "rHnvEmic2QekTTXSscNNt83XJ3pzB7zLhX3ighwydZL4naHsDRrP4pHfkcBU9QHzqp8s2JchBV5amjxXaFLwpju",
  "key38": "dNaqxChiosqn45TvSWNUqoxoBq32yWroQA9t6o2m1KWxWgt3ZxmTEPFBuexJWZYx4br4HDsvFzFEsCuWgTToHv2"
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
