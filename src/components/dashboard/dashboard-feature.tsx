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
    "4WApkJssphAvTb3FE9w9FMHvWBxaAdwuDC8N4PCdv5iJDsA5TCj7fgc7VBXEGRA8Zz3BsyVp6S3krTkbCnMZz8uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQkicstYricf1HCC3JKdANt1UJEELJfyFj7UssvJjWwfKPH7UpqvfpaQzuAH4jE23opbm2eWt9QXycaSHTaxzqE",
  "key1": "5xY3ASTGFehDNfJEaS3rNHkF5uxrq3iKDHHoqXwgw75LrUbdBatgSkpF3DtX1B7TUaDzsUX1DSj5hGpJBuPFFHGr",
  "key2": "3zz7C3DhAqWyAz7mE3iXjEmSjqgYv6K92u4pCyXv9cu6cfRf3CNaDgSuSJZjKWydEoasonYsvosVJP8zXz8vUENb",
  "key3": "BKxYDPGh6z6cgRrcBu6KG6Prmim9ktwsCvnDJTbQdAJmumti9W8wf5WKk9qibLJqhBnrBH3xmrjdiPrfas7Z1HV",
  "key4": "3C7tgfmDQASuMS2cNekLd9BPiYqDmkran1Kqp1yhWvjqjWR3RFzHzs3Lhkanfj2BUK9vWXEk4MB1qxfuWYsPbrZu",
  "key5": "5jYDpnhwF4zBjkJTzHCYjtMKNsW2SbkKXf891MgHEz4KaPbPSaUDRUeMN3Lzi5bj6BMgLo74YKKX8nbQknEox51R",
  "key6": "4z9DFmG3D9f25tkwHMTUzwqCLKfCtDqwrDbqNqrhRZLtcRUxk5byjDE3HA7Lw5cE8QLo669e57BLy26n4Pf5dfSW",
  "key7": "fSoMi9xsdM73UeFiyZVwTPqarHZG7onYM8X69Km1LGdfkvv5MbGAzWywM36fm5RWVV9M3VtaB9pLjAZZmTy8KzZ",
  "key8": "2CfnnJPq7PkBPvLdgLGnJ2kjugPRzGH29JDWKbTNRCVuVqbZgqiWLmHzDX9YCNt3Vbpz4y82F4cHhHZVH99MnhVK",
  "key9": "MPhevwLHRp9zLfKzz488BdNJ1zo2Smr81751a1z5qaqy2LdxjBA8WXn6FGWNbY7uDCp3CV2veozWjajehrwQVqd",
  "key10": "5Bzdu7f8dec2yAU6ChhtBdpzkRfF7Gp4QN9zhfPcqtf144XcbLR7aSTgsTw9maGSFESY9FSBycXyCbKswDXLuzv8",
  "key11": "GuyzfBzL9FjXUxDGZCDSp5ARSVLwkQj4RLLPUrGKgNdr8kgPqjzodq8oLuYjsrn2eWFVZQDDmKKBzEK6efKFmBX",
  "key12": "2cfuZqgJKLg1ZK7HDuaxcpwEQzyiFsDjBAZRtjWdT9zH4gd7SYXA2VgBv7dRGzr6USHkx6uAdnYy1ZiTZ1WnHjJa",
  "key13": "4ZEkPZvQY6u2Vkj3nNUmVykkTX4g5WVuaiinSNbBWJrGtPLESDXyx9cRR1HtUg4mAftGrc2CVfPJpUgVFfUeo2CH",
  "key14": "3LytuNMCcn5H35MgZgL4q3BuNcvKrY1jWcLRZDiY1RvV3yAz6w7JftrivvyLQLesSDixs1BFUDQ47xht1HtgS61c",
  "key15": "URTJq4GUv1Cn43ZHqm85mtfxudFXc5KLyy7FDBSZkCpGnSN5fkxaQaFwPJgNM7TzNgrjxEzsTHb5oHYXL71fhst",
  "key16": "2RKXQc9EFEGd1Y3BQd2LuiShq3F6r3ZvGeX5k9fiGfFbjXVZcF4BmtFJhtV4bzxmodAUdcrxmkSEg9JyGkgvZnx9",
  "key17": "2BQtZ23RrQi4PhzdJ5SYzugsJVGw28rqvFfN5URqFmdDYhLbubBF9pP1j6PhfXYHcooERxVPDUtXwrD2n5HUZomQ",
  "key18": "HPKoSqnFcZJbaNSNaghR8DBANaHE6pPUD9zYYBw1oLtBsna1gHQ8nqXDf6bVDXEseosMWSHB8decKfNE3ERyGMi",
  "key19": "47sLmF36DrSwv8FGSjEWNnhVvtnXaFgFHSng2wGR6u7kzHU3b14H4SzMZamQbJLz7NMRW1TgAg2mQ9aP8v3ANSxV",
  "key20": "4uP7bi3cMXBH5GzdAW6UCNuobDUk5j6gDU7AS24ATjHUWPfPKt7zpjpqnQ8AKhfzCosdeGHcyfcNuoq9KpTmKffk",
  "key21": "5MKYNigRtMbXxL8FnUzqZWv9YYf2RPhjC9GwKgRpAVfkVvu8gSVjq4MiXHJJqJMVN97nqoHaGcGc7827Fuyw1Sgd",
  "key22": "2zr73XNPXFA2y5fRNjevdq5g2JgPFjMHYbhaEUXgihWeuMRiAqY8JYM9A5U9VyiHev1EMHMfcAeXVUPdYfxXVCbc",
  "key23": "7cHykewFJ5wPZMVbH2e6EFvQ1phcrGH8mV7vfExXwHJtU77bfytzdjFrVuKci9Q97FjpUyTzt7aJDGqUGWQ97Pz",
  "key24": "7J5JgQZcrdmKvjGroj3TULr7V35vmRvqQWPnNwVfR6bJBh6VmyWm3FQygPGTHtagikJQxLBWd86aeKUL9n5DeHx",
  "key25": "52koTYLrhh2hSZm9kg5MEriPARwuaUP7sGAUgiDWN9CSfbujGfYGv5hni31K7GSdsUMMMDxyAvHQVSu8yBphSwtM",
  "key26": "BtmyawdNCq7rznHJdDNMBknawTGjgnHhqPJE4iXbhvGXnSgwAxxEYwEUy7kQWVVqG4RpnDPzgiUnU8jdMx3m3Uh",
  "key27": "3ry7v8CfQG68ayGk39iWRTczDkkt9SUQyNwrBC9k2kRAmAVF4ViBzLjAvqbwrySwHXgyNYJD4HZCaXbziiAsF5aT",
  "key28": "54BnsEtkz2FtnHCbtgMYRGvJbte7aZJPf58Z7SEgJFS1zgSsbC8G1ZFG3t59NpxHiEieHVz6kCr7vEEbRjDjEVia",
  "key29": "4vwMH6eKNC2mZ6KC11rsTqeXRzVHxDWgnEHKy5ha88RmG8LBCF7VdJHjj4RCJLhmzyXWzGFbvwdEuai4Xfx7bzSn",
  "key30": "455MgapVEKU6y18zWYytEiPUe4XDADB67dRJ4QjNTPtJgc619Xes4jvBqtBtw768UEM15KNCNBYNSEJJgP2NmVmq",
  "key31": "55exPtYuHoPJzvU87yg7WLewS7B9AEoahC6FAF7ZAUrWJNCYfnKDmobhF9Hy4CYJ6BPziHHYAoqkPtAjDtbmfQbu"
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
