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
    "1knt9Zu1CCtj4arVXw1xBknqkcaP91Qg83EHU2v2Wxkgnf5K6zAdPBkHCSiJvofjUSik2TzATyBzu2y8bXxWjqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEBRn4g6R3npfYf9iFpJDhWnCDYfnjtEvABpMNArNRTdqSs2LYjYTwhn5vRarLGzQrpqpPAVDrppGAi8jBLWKiu",
  "key1": "3VbCMLLZ9ecCQN1CvbVwVzf4VSTXxxjdaDCDxQXCEacsvVaFMqfR2QtBWxyxbzXEuqciMNhwNi4FLBk7An2pnEpJ",
  "key2": "2dFeenAgXG4LEUymB9JeB3B4GLBLMqUUboJJ1KyuBB1jgYK3184FSwA7idocx5Kn3THGpQxq3NqyueA5J3P2suqD",
  "key3": "53TjfsTkXVMrUxJYYqmUwXt7iQFyLmbdCgv7Vi2C5prFGtzpn6LotyQPYXhG6crMc6F6NwTymcTgHEsUR3aVwCdh",
  "key4": "3z9YYZGmK1JoWzFDNuRQpQEu5CiWTwLe97tLf3ydn7neWY3pihrAcaVNWHG3exsQGNc2TcPmA331KqxdcZAFugr6",
  "key5": "38RHEDeVVBYHwi4PvLJH3P914SrQwikds16rkFt18oqiNqCeXmKK5MwHhUwHZr9Sz5eDbEHUd7S2ySks6NvwoWov",
  "key6": "2rSBqPwC3UoFRgHSQRHR1NR6pQNPEpFBTkBt6F1PiQ11aHUjvrdJUejoAMy4RXkJwrEfv76NBKFJmB834dAXLkcC",
  "key7": "62JYf3XHmzRiHvYhWvo4BEUEF8h2rpawsr6bg5oWtsGtR1FS77ptysusMpYh6GLy4Ec2YQcpQCiyqz7p64nwsMpr",
  "key8": "KLMofwWZGqFMfFb3weGR1dmCUf55RTL6BCoxs4KoY5tQ7bk2bKqUSEC4s342tYFX69PaBAJnDen7gWysA6nSV9f",
  "key9": "sZjUTNfCMFRGcCBPiQJjyp533E244uduwQMwzit1boDbWAKE9fkVjsLpbjm6j1mJVEjkQSUxj4ZySxkL9QDkM1s",
  "key10": "Gu7Ge9E45VZSo8EtfGL9ZHd7QJZX8cxTMvj7pdhRcTC23GCntE5tZJh5Fa5MTKQMPR2VJemoYT3KMuNyaqQjpau",
  "key11": "2RHFgxu3rNpQPZz48GY85hvqDx6GDbpLAyi6qkqaP5NRcEJ8tKW3sTt7YHL9XTb5xydGqj8z8nYApJRGgsFfxXs7",
  "key12": "4QF2FaA43x1SXLL14ZJh2qe2vVmqzMDNbajN9M3gqikzJWCV8AoWdkM6VpmaHe2EzirxZg6B8UfqHwLW36gaSk1u",
  "key13": "27cTRQuvvTRQCKLAcX9NtzykVG7bPdbPuiGenZYMnHe4f9dnYFXrXk9ftSkamncmEVou69ygdBBcKaLB1JQ5yUdf",
  "key14": "5bpDXT11fDAQ3T9D17jRpPCZ7vWzW9ZwmiFPuKCC1KPhMtgHgkZKo5TdCuu69N3hEwShRVYoWJb72Gd4TnyTkUYq",
  "key15": "2KyqJKhj1awVpQHYLw3XwaeUo4arPnB3JcxQnB8YyCLW18bCcEj8cxiGt7sPDuLRr21RmHbBFRHdUPUbg6DYJ5AX",
  "key16": "2ZmZxce3SCnJQFdVQxRSvqjbEtsuYo6JJP1XjP8ysDWv9N1vcgcX9ccfvoLQBsBHSxp73i5QB5uryNrWpJzDkDMw",
  "key17": "DENeJWptwEoXpT2oLBUhFyQ1TpRMFPK4nzB15BgwJynZiWPuSLoxVrNmHy1PtBHdT9iscjkQNdVpBGpB4sN7r6s",
  "key18": "3Rg6vhChZ3QCCWQTWAzAKCoiW3fGm7UcpuT8FaLy1bd5aqWkd9vc1pzY31Rj81qB5qiVp8s2xy9i3M37YvoB2LUh",
  "key19": "5L2ujRjtHDke8LPnGqYZswUos3VyYSKWo2YjqwgCnEu1Qzp1L4J6jfPHf7LMPrkUTkHoxXuqAet2YDoDqAK5DExY",
  "key20": "3M8rvXA3Mton9UWfwLsZqmi3BGDzKrGdoLj9ApnwjmBJbggw7pU9s6fV7nXHTsqZNzradtKK7oB2bt1sMAbwGbpj",
  "key21": "7sGSugPxXjF4jgqdZTr6azJV2xAL1rPqsc5LcjVyCfDe7Yq5ULTQk2S2Mq1xrZDV7ccDraiQrFQGjLz7mzhaiPS",
  "key22": "2865aVhc7fJdD88SoCkRuDGngxeifqTkUQmzHnSJFAaLo1TzJYAr5QxgiKM5pGPYqmSb7d7E6HRy2g7S8DE9kNmP",
  "key23": "4u2MYGBwc1XVdFi3BnZDdr3n6b88cEY6D3s4Sq7PWAsyu53hcSotKuuisLPkBizbB8LsPqAnTeedjaZj4wFMDyb3",
  "key24": "4RSnEUhW9JyuJsfkQYmiy7DgtLmVhgTfNH51tiLdh5NAJTW7zrTNrvasLiqjFZUsAcBJpYVFRSohMUag8g8Qzytp",
  "key25": "2kSYd62AvugyukKCfncz3DHErpUvHChQyYhM4MQ7N3NmPkwpaV2ytPpd11ZgqTHPuGLUmfnWiPdRLU5AgGpHfN8P",
  "key26": "3a4JTUjsCx35RSBnwT4Vrvq2TtKBea8ATRSQydcbBk4Jd6zCygU9EVMCvJ7KeTTpcjFdHwxfidCiV85G6cXskXed",
  "key27": "MUoyQowpR3NGVn7cAQEA59yrgtWXc1LvvS2RztDcivkcRb25hjZcZRyTfCRVhzMPatNRjYVLvmwN66JZhPMZZAm",
  "key28": "5VUmzuu4q9bRteoFAheSvqjpLfkD9ZQKqGb9VAHo8gPUjWgkURVC5Khy3CWFBwCgVCRjjRhbDr3QzFCn3Z9EJwoJ",
  "key29": "5FCavUEjs6JFv5GbPLib5dCULoRdkpycJ6idNEsZ3xKfmW9yr2DmiRLWZfd5KZBJNDdwLxAiZGJDhVYQ6zcSQzRg",
  "key30": "34gxwBUQRaFD4TDU2Vpt7RwaXHPMf5gBaz7hp6VH6ecwdgZdwKd2RadC9tesHKSTVLZsPmCeynN7L3v4kPyYNPx8",
  "key31": "393hsQurpU64H65rcEUjGN54rRHywRjdNuzfmVBeNz8uctfg2mqd7VaJtffnqxxBqTQ31CDFERYtpTneayd2smr7",
  "key32": "2VtzDQerZBazSytNdwNTDZWZjuLBZtMpoy7CdshQA26rNdTAhRXnL9ynP3pjecVmP5YYarnukRZYsGuXVu49DywL",
  "key33": "4GRYPXGizedLvxxqsqdPQq73TCP6tL3K12FfyT3dH63vTZneisFig5YqF4hMHCjQy1pCnikbxLwiddcmKAzgy7gQ",
  "key34": "XpB3uKqcvWspiaWg3Ysuhmg2XUWutdzHmoUYXygrWw2d8PPoTVm6rZzmcZJ4U9ELwE2tP8EVs2AJ4koJw8XXG1e"
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
