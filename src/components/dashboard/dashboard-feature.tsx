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
    "4Dh4rH5xHnA1owi9NNfcD4pKxPHUiJN4EK3r9Dr28R2kgjpCX8W7AL8uc2itioRXLfx7t5q9uRQZ7NwPwW8xi6hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aopFZ9d55kVLEjeDTsACRZRpmRdqGfCzjbAkDTNoFYqZQCxaErSyunnhJF1iGycpzdY31h64eeBY8pAKyimJbha",
  "key1": "4swB9TkPDp21mbXVqHFDRTA1sj3py33KohjAMmasjTjoY2yP2KEHjYpr2m8rLgi4w4DBs8pqDg6CPN9VFBqtUucV",
  "key2": "3hfStPYR4DKe9hKJci2KwPvM9eXrkV4JDgXUznPDSNSUFFPdog4ujZHGgn9yacin1JkYMwbWwDvCXjNe2v3GK6nB",
  "key3": "5YTcE8Jvvt9nYwvfcAJi1XWFnFuZRDBtDedMCpN9CfH9XH81TZNqVagB9DrVZVp4Pt58KGvEA9V2RULUyNwa5Lie",
  "key4": "kSPipMYWPSAZ9XeWStC9qiGBK6n4yC4ziceJzpAQG7bcrvAwDMqbHaBj7trUoyVZS4MZU2Yuih8nhVbUEvG7oJo",
  "key5": "29g9yAXet83hmPJsQG7ynEP7GniEWMBeW8jRAZRDKMxYXXz2mSX3xLbUHnhPhod8iYzLuCTLSKz1qCjjiUguXwYu",
  "key6": "4QALQEbqSk3JLoVby7gojNPBih8ci7LK7QcjYYnpYstsheKzHCQxHNv1wCzi5toEtaXc6rWUkRRUnk3i8TbXv5E1",
  "key7": "3RyhCvFHSQ4pvm3Vh4TjLRcVM8W6ieFRHAz2GxnwT4YTz6gQN3yNzq6DZd8Nwxx8UJ7nrcCscVBHurRAoZvt1bRg",
  "key8": "5xvqEFACtkT1X54wZKQMu6qh4tjqvtphq6P3knJiS89SDYzjJqpFnH4zpnm1PD6tKEvnxZjzTijrv269gMhFGBV6",
  "key9": "2jjoo5cb5c4KuTJMv51tTqSPPkQFi2kfEprE5WbkY11Uhwqq2jVLZZULqFvJ5TeEFfoD2U4JB1dSFsnUvW74Q19u",
  "key10": "2E1NFyReZe2Kdd2uVRp9tTPEaR7Y2m2DJ21D5Q3JVFDbNtGn2UFA5c9qMDQAaPT5BCfThhsMeJ96F5o1Fx76rFYh",
  "key11": "5NmXYhBb5tMp7VHa98souJxPFkawHxSWA16pyqc1zL7rg5LgvMciJQBmuGiRGvY8rLY5krX83CXdmcK5LzA3h8Up",
  "key12": "2BAfScuhP1Sy3NTv4cHx9pT1goysgP1s7iazcDVc4DVGK2o2xNSPrMfhYDHR2F2c6G5BPMiyS6AmKLAWEUBSSZRb",
  "key13": "2dMgYJNFvCQguiQAuD3vGc7Ncx9iBDSa4pusRm8XCLy6MDxrnbd3u391yTUA4Jo2Vp2yF4fS37k6VkBuPvh8A4M9",
  "key14": "5VhWoraraciewM8q4DMAiu7kUZx7xmwjtEDw94TVQxVuRZT3s8Uwo63LAfPSp5MoL52tQcgTv1kwE5Dmvb5GDuoE",
  "key15": "2EoE11XxqzDLnMiV9kjijP3WoBjb8LQHXR5wuEFSdEnkrMJoUMKGywBBNYXLw2NpkY4zRYrbJtLQdZbZBtZFmmiA",
  "key16": "vvbS3FA7g7k8vpqU1igPgAp519Xxsg1nvezqoF3os4z26XT6WTVGdh9XAqzhV79GS2VmskJHtM5t7qkckU2zUKe",
  "key17": "xazQvmQKpGxqZv39u4z3bPuTxHEDr3925gTjwgmjGDj28NDhp9FRg1pVnfwthdtHyBN86ydyFEbz9tqDFVd87Et",
  "key18": "3NmFmzBfEyh2nMSYiRXsEy8CwqonzSy26NW7v4hmmo4tH1CuN4DQGCBAFPWSHomLpA18idU93xzN45wQY8p6ERch",
  "key19": "43zt88hrfSgFzF1bvLvPHWh9KGnKjE5VGGG2Q8Tmkpca49AnmXL9yZeFS16taSz1wgXuAgneBXmWKgPYUZbGhgnf",
  "key20": "4SRfj4ENFjsSKwRRZJuDq4t4vtYCNP3nDx92XpY6GXkj2g9r9vFdN5kNuBFNpeigabk9No3wMCyTavZZTL37j9ve",
  "key21": "29zCdKKVmipuQMJoDbX9BKBzpaTZZdo4i781K8RPye3gCYLarTEP23hXtLhfAQHpudZ6JaJJjGW7Ec9SQUEuY9hB",
  "key22": "5jJfLLsfTAKUMhKjoFZVXNwug3xBTmmUhqpfU7swGgmnibk2ezWJbbPKbKvS8R6ra9pMcZEJZTUGnYKiDMqdQwFW",
  "key23": "5XBSZEs5kJhz8rHDMu6SCLL2n6jKTM8YqZB1QMcu1KpUiEejcjnjYqaK9ey8kw43DWpZvCxc7Hxk5hvS8xQj9DHu",
  "key24": "4DUFNHTxHNS7kkEMey2jKktLNGityZvKNd3ZfAHfsmHAhZZqdpzoEdvxSbGXcxN4Husggeg3jo43ZZWotUPneVaf",
  "key25": "5UWncVW6TSRJGr3igNxbfnYwzX5nyzRq6gM8UuMGg7EnxXFLbz1x7WRSkgjNWmYtBu9kz7U2o3Gx5qFsuhpwfxUM",
  "key26": "2wMrrSx7WYK4m5KzeZHfu4F9xkrLPeeQiQPWhooyYwxdS6kHM8MjbnxmDybkmhQzUoHM7CohiGgrfyCcZfa819YE",
  "key27": "5hR4ro5aUqPb4CZMc4EyF2YgWoAE8MkGsndyoVSkFDvQD4N4ohaDkHL5pe9E8v1pihSKfqRgb9tXvTVm7cdfSXnp",
  "key28": "2opMozCu6tBKrdk4f31DsV5qRSjw448r4UpGFQnSAksE9AEfGTv2EGd3W9cJUHU7CFpsV1Gwv7hyr6b8aJuDDgNc",
  "key29": "5iGDLjMSdi5aRjkcWUWB1J2SWLo9wJMYdc1KhW1avJbYiD8mfr6vr4UJxPNT7fJUjrE4dmzP9KLmwa69Jv5qXeR7",
  "key30": "tyBfdgSVrGopNRy9kknDu8E4YV8DWiAJBDwvFm4wUUEDsLPuzYfqcCrWyeg2eqer9dGKG7vuERqtx87j9DH9Mus",
  "key31": "2mnQxHg3NWRwU2kuVyPaKGSdVBZFWAzwkUBBVK91M1VgvZXiWPEzVrTjbV5wSaHYMTPi99XX7MpRVHhrmGKGBhkL",
  "key32": "K8P3uV2EiFdgmq3GsBposujFyjkURXXZvq8Vto875DNkEDC3JkhNHGeLoCPWpaTxbPcbto9YhgHHSuEMgy8Co2c",
  "key33": "2diwnpCHHrSTHUpNTWUuFA25XYrQsS5rPcweXw7BsSCJ94Mk3WXdGznqYd6wtyCZMtDKvD6jw4MNg9MQYp7AVPn9",
  "key34": "4cyG2MA2yEoDHb8pJgAT5nE5BemjJqnAcg31qonj7uywrnScEm3y7ieCW4WxdZyeZbPvqKfSvVbKksRoT7E91MKi",
  "key35": "5ZZ94hRUEuGNVwYTy8chcdaKV9qS4S81S9fp396ZXiK4L2sf8AT46kyGDtrL2rTaHz9t9t9kAyk4G1CbHPhKJULu",
  "key36": "3Xt3Ep9fDpDPfnPQwrv8P6mHg9y3qcNTSdMdpN7Cq8vHePGS6eUHSZf2J8miLcx7m3vT55bjNpKBdo4gENVkjKYe",
  "key37": "5CewfUnvFJXuT8fVvZa9wnKbUJKXQf17U6MuZ5D5Fa4TfDioyb1cDMQ2uDsCmYKaPUjXPcw6snwtnujrwhc3HpA8",
  "key38": "2yNAv9k1wrbyaXSRi6kNFrPGjjQCXBY85MLJzGyVcxwjUG3bsJV7p84sgUKSbAGfnFFei1G4jTj7LKzZ2reU1TMu",
  "key39": "4vs4Q5EXrc3VnFBFJra4seQk6aNgGpvM4egGsAeD9TjPrZbyVCyAJRsMxYJadUWfqHpfBt7naLRSFt4aiBLYvBAt",
  "key40": "3dxku179ipRA69TKGhpbatCnxdCkSxG9j3ea6XeHLTb7fADkrdvT7RQ4Chznpaa2LAxNGGrECkq5em8STbX1QrcZ",
  "key41": "5duReGUmiU6m6pqywSbVaE2sghVfH9TPFGf2LGEk5qhts6wZuN7RYBSunALfvinnGkDL5YdqGs9CRufngfXhP5YA",
  "key42": "3uTif3kvPn8FnjkYbi6tXkrWKZV1uo6CfQ5gcreP2h82gY3fjYmnKXRdrGwEFxW39aSdQwfwy2bMKDD3G1cn2pw6"
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
