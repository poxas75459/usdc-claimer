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
    "tJyQkXk9BnAQNRPwpMBySN81fhXMZvHYnYYjcGZ8v4XkabovHqrbavqFPawAozcQDofDibECje8GwMVSr5CC6QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JE8H6QLYZV9csTyBT2Pi43gf6DvQZBkda3UuB7BRoTaCqDpXTRvbox8iUcE2RYAFFL7SAPMTQ7YWn1bTjdC3UBv",
  "key1": "5UAJ67tsp3jkiB88cezsMzPsVYfZ8HtrQNESpbwNHVajPvoNmJSfghj6fKbfa5SkqT1JJpk2oHJzRjoigXwp3rnv",
  "key2": "4zHUvpkTVPnXiLUXVPJQ9QWP2YXdy66ombGpzpDnsM99v53sRNxGwcHpyLc4HVrcogU82KaeZjxrcvRH9qxqCnn2",
  "key3": "47r4RvRxx28erGfMbMw972PbqM1APpRNeAqbXJjAT1Wz7cBD7VjGQxPwEojWrtJ8QQP3nDG6u3GfDu5dCgrvp9oY",
  "key4": "uRYbeyp3dHkuLh77houzUe1hp92TWJS7syZ9aM3WVX6ZVFB1hRE6RgPTix5ebqd3oVa5xFFbdKy29xwXkAzN76T",
  "key5": "2XasmEj2cZvhy8Jo8MZZQX4cHge7eeKBhdpfZzgGb9XDoFq9q8Q2YeR2VzPdbCsVe4zEf1t2ELcj3Gi4wE6L99em",
  "key6": "5adqk7a5tMqT2fqVYB94dFiBmmE1L9iMFXoq9ye9JmxfFXEPtCsNoAodbZDtQ1ASSFAB5dVoeJRn6jDpT4zGp7Cy",
  "key7": "2D8CYMFUWCMTNuE4QoJ5ekv997Hasp1i8NGqhu3hdKk13EzgGe7KZ9yJvuJGNfmR4jnyJjQCJbLLeinjqTMJP56P",
  "key8": "ugFuUVgfu4LVbP5ppFyhMedFuKAbRAjXd644mQDNQBFbxRrxMVMzy6KSjpAcZWE8ovHxQAa1cSRseShqQdyqwR6",
  "key9": "Mvg1BEUqTWXkhjufSEJ6ERy7naV2EDp9xo1hjbh8ueaNpNhWaEMEBLpwAyx83qLVyoaasRapVEeFhxrdVkJjMeX",
  "key10": "ATQv4LQCPdrrfAPCjsz5cjQ8GNM778VF2cNNMQBc5dFWRT1U8GA499NQupZYbwDCXUe3ZeAxvUnzbLrAVdtPoXp",
  "key11": "2Lx2JQoRHhEBFgRPcEcq5ubZK5nyZyWbQBiMwcJHLGPXoQ28kSM2CR8D3xKW8Sog5jouEJLgskTnRNjqKcSPZfG8",
  "key12": "yD9WqHhPHLWzoL1bXa7X7Vpk5EjW2PVAARE4zLKmgUUECZMJf3AQDBYdzo143bamsv5a5P6LwvWPRnckwcGRHwv",
  "key13": "1i8ZKyHx1Xt52XNwgwYWeDV5m6rY6UAYcu1biAXPHXaJNmUfKBoXqRiZUuUr1NFiJ9wqAqZpmGDBjqUmZVGasCP",
  "key14": "534YbpHuHV5hcADBNLq3UGiaT4hcFbgwku9AaYALDo8DBMs3y5V1YaAHWoQnkziVnMuWhzzqXb7pLfzCHWS37cfR",
  "key15": "65Jv5TFpbb7neKT1aQUCaNvRrTE88ADbbARAJJcEhWQ7uqzeY83NMkzvnDrQwg9iam4MqwSnzbfrkro9j2Bixvyj",
  "key16": "5pCfXQ6wAPmUDC4HSqrATJsrHHy7yP8iXqxwLeg7jiLhLKihDuFQj2B8C4ZzzFkYbXL4yNcdQY3xqvUKmS3bMKRa",
  "key17": "4AwjanPgFXWmgBi3e86wvK6cVYJAjTWi4iMCBbFZV59xUoyiy7JeX9H7P94SQQXiF2uTaDyRsocaNFBbUuy3EKiJ",
  "key18": "5vToemeFYrCoop9Xc3UASv1pTPEHRLyK5H9rQLVFV44j8XvUBJNaWCv9ysWnyafS7HuNtZy7gkzhrYcW7GfR3XJH",
  "key19": "5GRn5dwuAnB95ZbKbuGkn8bPVwxuDtMm8N68dUi7F8V7Wb4RvaYYXnhkxnDQBGan1J48mm5VVdmfjCfwcu5iGArn",
  "key20": "w36Rwnv8EupbthD8253DXEQKf8Lm1uzdgyukDNHDDB8yqzyAh8bRsbSXZ7R6PviEytwwZj5aiTRR28RTbmUHFwu",
  "key21": "4SijHKEVh8hK3gwoCANbmbZDgFuNkP3mBB8mB81eMLALFgdx9jzyeGZH4e3nAMVChnNAcPjioRuoCNuuvfWUuNWn",
  "key22": "4Xf35QwDMV2JYo1w6kjZx5HnzCeRCc8Kjb4fKDhJgHHnbrwy8F8JXxL7jmcoB6WJp3NkgRzpvfLW2cgegS4S38T1",
  "key23": "3oG2th9imfms1Rm4xuip5k8tqTXtM78sbyVGfuRAq7JEY65dgDEUNVp8qYY7tLvjDMidif191TDAdjyfrw5Xudky",
  "key24": "3sPinkgZPFPD98LzH3Ak6fd8jMYC7CMyg8FyFqUWXuKpgeJuKb8iD9TSF3jEygqNxfgrnpa4ucDoeQXWsof9ULwL",
  "key25": "5gV3keBXjExxx1dNr7MahFRaKmoCEJUTKJkZeG8v7xzDpVyGBXZirhBUSrdEkFSKpf9HGmthXfbpLyKxWZcMunN8",
  "key26": "B85mEESNZmDM7sX91cDFzifMKEMMbzWUdL5Ho72mhJ3hHT2QHXDUgDi5d8sLNzriWwpVWoMq3XTwVwcd6JLMD5a",
  "key27": "5BGQ6cC5hkVYbQKRkJekMCfp31LqJvUo8gtHCGkFXWhXrYpkjE3mRJurJdgzvXHGtNjDCzitxT3tPyVD5JQjTDMq",
  "key28": "4trJFp8smML8YgRzS4o8dF2oCbnpDqX7186uTWLqrk1yhwigmD4ewEP52VdmSfAsmMPqWc5535ZucRJoAo1kosqw",
  "key29": "4dx5r6NnpN59sgwi98GUkapCMY2nwLyDMhSWQewiUYQyYxvHGEL2NzyVXg5cxaPeXJQ7jHxVoCTF4TbBBoryjpZ8",
  "key30": "nAx9u14Uwr5b4anEKkzxx9bqYdxAdNeJCivfexRv9i7Sd5m25Mhoucv8sADudWuRsQBmaSjjhLNJtFt4qZrAjWA",
  "key31": "3ezEpvbRWo6iPVU8MZw6mHfw9eTKvi3TtsEvq8VJTR1FgqP2p6trPckdbiPYUBKgmwcTCNqck7jzv5Lubv7Y4WiK",
  "key32": "3DXNpy1XvQTsmF5c6VEBed3knw7A2X9yZqomEbuQpvsAsXEjerKZkYqGuGrmEE5M7czfc6HnfDUHbeUzCx5qMYUN",
  "key33": "3djF5XL24jn56SnrkVwt9PgwXXRYUB9zTVGZZzzEkHLfxwkuup9EG7Q3ZX5M8xVXBHTkvNKFjDFBAGT7UesEfuWK",
  "key34": "3biwfv3CogycNYSSUQaXc9NiBpXp3DxSMgkSe1kxSJKNvfkP68KkCsZWayftAuVrVesucMC5taK5uDhyMuZMHMAu",
  "key35": "3KLzTRcKnEQeMVzo5yD8TLqsWHBjFpuUu29zQsT5b3GcfKJdd7eSZn7APvivW177stefRAdBhXhLKFs28HZPaC78",
  "key36": "3XAbTx4SvVP2QeYfNiMvaMTAfDtbQ6FpR4QmPAF4oToRmCqZecnrS5je1csZSYnNN55YvWUo3Qmi3C9GbFoEFJ55",
  "key37": "5XnrPRdDV1L9ahoBp3m2tdZD3nW5K3bPsSM7irD43WUnJK5bkNq4EvXMbKtE6ec5d8XQ2uBGgKaXaPHWrK1SpwVk"
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
