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
    "2YXYe97dcP7YUnG36dnacbHnMLUXjM1cMQv4A4NgqNGr6qfd9Cf6yBZnWrNvju1A11wiqy8q7viCa7i6ejitYGfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tx52Hao2m89JCeQ3y64Vk2DgnsdhWvDBQLSoSb2KoVSSp5GrmZcjVJAHfMETBzGs25WuRhnpdVEx3VNqYMQRZLS",
  "key1": "2srhA5Tjj5NZ1K1o3QvTNb447Cqyqbh8vqHyyeS7H1BgyRHEt1dYywx3Z3zXc67B6ETL2XUdb6DrhxDHYZNEWDnn",
  "key2": "4wAgtZbzZNnu3JyHKBczwKcMdfDC5MGmxGSXjfhuT7r7dfoCopciBACXBM3y9qDdZrk6hjkYiH8u6qmsb7Yy43WU",
  "key3": "2oaNTLnaqC8pNhf8kEguYn2DaoecfdBKpGEdMqTvgPgA1ododmhk4MnGa9C3rLLJpAQFwo1bTTdn63rB2xAedsjb",
  "key4": "3Up56DPEbdHxdwHF6SJiPsKdc4zYeDPBDbkDAQMzPeEQtUjpQ1Qp4CjbCpcj83wzHxkXJxj7S7bMBD9cJvZkcj71",
  "key5": "3T96HmtjJ4pXVct7CmpGoQLGsP62egZ1bgEsAbRKqyB4T8bgoGAzkpu2Vq5txAGn7SR3PVahkekLFQoM4uF97ZRN",
  "key6": "obpSSQKweEQ4keoGLfCfcYFof4NTMrCgm31mpsAbCpnVhQfAfibJcSGzM1E6VFxz1zfLKdWgauteBB9QfoWto4n",
  "key7": "37YEHGJYWSDTkUGravm66m7TyFvVFFKK8yUdAm5cfbiA5BfSdvcbTtrDQCZ7md4LP4R5EDrm2XtVey7L2QHQEuTk",
  "key8": "3RaabthVk6SdkgVdoUKk5TadShmEgWQR7ricKzDLQizFVWmQSLaav964ePz5rnpTgHrJm6MY7wb8dFJRZv4V6szY",
  "key9": "4ijDsXCGPu3U1AYZffCun1W6veSRFkcyuk17juuD23a58jzNYFecnt9ZDUT8N6QARtUNJdHK4vheWTsnbs1dJCdj",
  "key10": "4emEKumYfPQaeQSAJooxTGfNjjzyWztV8NkFfwixbGcRLhY7eTWVSfKZ4eygsnUaRENDhQYJa8Tpf6qDjGejLqEP",
  "key11": "52gyqH56hVa4zm1tC7c8B1VRdWNBw9sGq5qmmSn19k57xoiUU6kJx79hGWB5Py3S2C5s3wpk3ST2KSwgsuVEYJs8",
  "key12": "4ajUdWHXqCdjvFbi9zSUxXvEimr7AutXqSt92d8xMBqrMoDhTHfWbVuWmoceU6prmXBLvZRW3pGRnKBYmbUKYT9K",
  "key13": "4uixXiF1SXGi7BGXGFDByQtndTByTBeEoS7puiSwNGi6GvLHfu4SpRpXBUriv64zAfXJV3xV7Y9DrCM1WjRQ5kHr",
  "key14": "4CKUV1nmM1cBKwPzn7J5Y6Kko7vxu4otBHHNp49GiR9o3nWCBMpo9qJeByDw7esgFKhWTbH2vKt8zCwhGQ3uZGhz",
  "key15": "5VdJpuGbWTLHu1PSGWGqZeQhyrzuoBycAwcBvuuG1iQtRH4Mq2k7EPxahxivcTq4Y6rcd6mT3avg5JgZXz2EJt3q",
  "key16": "3FzGE7DSWPSdnhM9PaN3xSHebCAWKkRhqBLC6kVU8yg5eH8w1fxYQdKCzS2BtTgVqQK7N9Vib9YWwEqUZo4Y7Zcg",
  "key17": "2sbtWrFouHtme67ZusZcpQRZLuLHSoVVfDuJ6WD9Xgy2zz7gw8XpSY8U6oGZzAw3Re9qoDozrYgEDXW6eN5qD5xv",
  "key18": "229eL1B9oXtj6TWWyL5SuQYcCquYBW92ZhKUx9KKSkbaRazeLiXTyHFuay1FG4EphUokswVU5CJHw3P5Fwvbu659",
  "key19": "4BsrLZ3bZHTmfyNvMVcydMJgtvBFjARkiZzJ44PsQXoNFV7gQcBSAHUnDkPfYcfQAHSmkL47rtzB1TtPJvCdHK6b",
  "key20": "2FNzocqMEx3UbmkA1fXCrbWozfNynEocfL9vm1UwseJ4M343Zmwre7BtV5MbMZs5qkFBUXcp3fe9QSm37WygKGYr",
  "key21": "wqWKmM2fBvqCorctKtuxYks5nLsXT9aYhQGsuBsf1uZ9WFuYSpeaYuZJJjDgU4dRjDQfa937DVYCx12dx7Hjutr",
  "key22": "2o9545VmX9mRuJ23Q51BFTvKHUwMDB4hbGQiGUUY64yjSwxaNDzGSnzPtgmJ5Am6pMDcJSueih3US1QtjKgkED8n",
  "key23": "2W6yoS79mwYwjQXUkVD4uUhuQfAo9o1BLAZ2YKoAeUSxnVPiq7Q8Z2tb2rvRrbvUk46ToPMJq6vKbLASecPxVqhD",
  "key24": "3qUz9obMjPGyriiKxdgjMNKWJC7sgvfTeSpbpNueTgq9qPhTiTouTnMfhEu3ncb6vzD9n8AnWtgC1uDDHvUiAity",
  "key25": "4T4bR8UZzHAyBS7zQTiwXjCpypm3y6SFyxiMvK5Cc3hVY7FMfgEg8Ar63SLBQ97tdsmzuc48jrVUezaeYKpJrzqn"
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
