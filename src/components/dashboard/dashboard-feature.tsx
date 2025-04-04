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
    "3BgmKgs1YX8KGhPQPpPPV9VxjQX9AnSM979qMuApEoCbqCkXwujnGRZrmQb7Uw4hGoFKcMnAAhnUhF8NsRqPZ3NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pse4oovWxdW3M6Bus34srmrBeYhJtCVadBUGj6zyLsfArqjYaaDrRNYooZQet4RYieXDzfzaUJB5TWGkXNXxzwo",
  "key1": "4N7BWyhpmiyqGHhwekffo9eo4C69YKRKFPG4EEWvo3PuFQZXCX8JpvsECxhELgiKMicMcqnc9YYAKBP8xAbXZksN",
  "key2": "266NRTAixVNNrpfFLp9iPZWBBRxhJ2HNNqsDfL7Tujs4jYz5ZaQwy3f2L11uXhd3cX2dmU76ReRMsBMUtGtsUnD4",
  "key3": "4Ro3umDJauRLYNwTKsToXKccSxThZZb8XfNRhs12mFHYiWQSzCmHQidSHiE776afbcwvyAcS7xzDPXv2z1q3fh44",
  "key4": "2XwAya4NJDQuhMYqF2PoXPvkmsYYE5CxR8jQUB4dTkpyNmC75v4TkpLtBrjf1DykNUAvcMWX8E2WA3CGhR8WPYGK",
  "key5": "533bcAyKBnZhy1qUPhxkHMoKZz5oxWHt3rKg1c8EkAu7cxN1jjozcmyywatr27dQ5QSka9G52SnEXCcGLecvd4YJ",
  "key6": "2c8VrfHGNihKLWXqSmYGts1aHdB3BrLRGuCfXzv5ZEoax6vaZL6MDQxaVqkc8rG6TWybZbcsEMRLopHBECxFUH2C",
  "key7": "5dY8KzwjqQWNdchnyP37wvFUo7DkrMsJwtt7PBwMoKNTn89p5ibCnDh3A4KFWGsXPH41Gq9UmQy8py9BWHCShz7p",
  "key8": "5nbE5dULFnrJvUjQToET7k3LNViZXk6o9Fis5bspSrgFSbAZUnRkUzJHekoxehQymVwP2EUZFTTGMHXTBLSTDAeB",
  "key9": "2kDS43gg6wQYEhXAW4DeARy7fUMcZjRbgZNgtJmtvJH4tWHAshM7dKUhcr1HXBqJ6gWsQgDPjx442UiBiZduVviX",
  "key10": "5RNTcwggpR1KU4ud4ZKvJKpxWs1HkC5YbXQXBgiVYkznEHRPVJsDwSqLLBbqHf56zgtd23A7mWxVHhSgHpkytZzF",
  "key11": "XSi99TepC5VBUWXEkch94P5QR9EZhZ3zUaiiuR4Wgn57dNocqMLk35zwnGCdT3f5Tdhdu7WugFJVNqc411vU3wu",
  "key12": "4tq5LzVwcV7Jz2Kmuffko2BRZwzcCfcDHtgsAv424mNF4G5hVyWSj9JbrBU5fL64Sq2xzdGW3Yv5mJoxikYZ7ri3",
  "key13": "3uxtfC3nvLNRewFFByjoK3TNjKvCbKiUEVWGKBHn3RQV3gN2phi3GJ1xZVbiz2HP7uCzuGagG74etvMRL3kmzDaT",
  "key14": "5dTGqxceUs3BDkNmyG7fHSXXt4DnL1NqXaeKVYCpFZsAGfFpVVtN8UbDQBa7VGJjBsbcdPKJC4wT5hxNi9SR2ds5",
  "key15": "5P3E92wGkrJa4RTHFUM4p4fNw4rvfmBEvjxPAkhdEFJxiViGDRELGgWQ7muu85NjnCFiwqkFh75EihTciEgwBSr7",
  "key16": "65Lifhgv3VjuUtrRYJcgxY1GheG6MMCwvN9PrACKVcmXM3bXiRpVXdiXZ1NNitfuW7VL4rMUnH1gBYdr44dmcPVS",
  "key17": "4TcmNdPEJHZV9EUq8DMeNFMUrpybPpMwDePhVm7FLEqmnXtHo1oFCdENMdKEZLxUP2GtkUmHVY8qSHKC5bP7GP5z",
  "key18": "5TxauFvVswpYgRQktAMEEZuC5SLs42UnejJk18Uv7gCFWvi5PHzN9ogTavQAavFLprawu2n3SDHT384zTnf6QC7A",
  "key19": "4SGMj9VsBLHAWtP9kkm69c9EQLqA9jBfDzk4b2kSuZLLF89tufpDzDsp6kKdMUrL8JSpjPkKxHoaZzk2vq1w6TzC",
  "key20": "4ByqFtAVxuZvtH1YJqWfw4bAwncn2HJwFwx8DGi3mYzionTSsWFGKoJ7VK51RvuPzBom6S3Mqi2F7dAj3r9BosKi",
  "key21": "2rMQP2hp5zcHdHbPkvGksvz9ExmyZ16TVwYEWVY9gdY6oWkgedN8c1VSR9pKf3N3o3g4uCT5vLtpMZbRM6QNUnzB",
  "key22": "31fRdjRBjpQrR56Ec9Ko55KYmfXxJhJYZLaP5gpb6rK62NWWip4abQ2uAuhPoJb9NuMg1AByT9mhJ5NLvaxYQttL",
  "key23": "P8YfmA2DqQ7B9odf3EP1MTbgYB88KfUenwPKAEHu6JdioKXpVPxXdH1a1FoRRpmwbxwZJ3BtuMHCE8SLSKRrA47",
  "key24": "33xghnztBk4XxMefG26Ky1mNqJLh2taY3cA6bKSakTrgowdFcLZH8LLJ4Lk9q3HP2kLsP5uWo5YhHAPz9it2rf59",
  "key25": "5K7LAvgzT9hkYQ4ix2sAg8iQM2cQuV9EdBaiTyTnjiuuFzhcZcCp7ruWrfvKaFwjfjLG3dcAN59PL4NKa21EwtQ2",
  "key26": "54F29kui6HaFgkTAEtPGoC62GGCMgUWbcwQtHFskrRdveRSTS3BCWuiyS7qeCUkyiANErYoZnMZ6Hz8TpvZjLBzS",
  "key27": "3vFttypZf9j7JfJg6eUtSVEjSYukJn2N8dcXi1K45fRcKTfGBH4uarDSybUtF8ZwiXXp9HwdQFRn46T6ZfSm8pMD",
  "key28": "3fRAecNj7qxG2fPYr1mHAxPXdzDRgcY1ckWN6kpUgGsrrELyWsrMVGfGJyMhBT85frnqYWhdzpcZsGYAbrLxvnnv",
  "key29": "3PQhwLfrPBU9uTCVLKDpWrKudiSNvYQb24ckuHStbuLmexGf9z3mZwC9syyQoWnFSBwrfVfBLx2X89f9V47EbvXo",
  "key30": "2Jfn53j3ysj75TiF6ceDUzkb5e1CQ9NcjpL8np5dnQGVBn267Nc9UEgJJE9HdDhcCjgVdhQzaAF9LNug7AS5Uva7",
  "key31": "5qZFAjwrydpj2N9fqGEwF6nxbAjnZxtnZPJKyRmoZ1yZz163HnjLNvrvt6H6Piu6iNhYyTnugw6pYVJ6fEPNWKr4",
  "key32": "gTMxs69JHZvb87gCT3tWVRfWyRaJGyinmDziSZDuxeLGPj6qMmf7QAomoVXjnQZUtZiPuZmazFMVzSpVL14DU8t",
  "key33": "7aqSz6zoQK8tQAWKaethGe6sAdteYk8U8JwwWv6vPKwoNSmGH6pkZcCYPhF9j6pMCKUq5JXXqpRKSns7e9C7nLF",
  "key34": "674cocbUFUtems6UNkuykczoXKwnvwDgw8cAyciPiNwWz1rvtCDs2CK4H5H5JuSsgvZHTxNAvqe1GwEQ3TjthwCp",
  "key35": "39siLFUAZi4cuMAPvGJV1exPrZmfW8PGcuRWEEWrJHbKUZFpoEt6PwvNHZmVvr7AT4Xb5axKvEVNzWszr1rz47y8",
  "key36": "iPSi3PSS6rgfBkMuA5pnaqov1RPxMt9jcamWgVWFH9JMEih2ZCq1Bw379Fg1NTbvS19JTUUqt5N4FNTL1g8J531",
  "key37": "4zBLBXzxUPZ3eBaPDGqD6kW6D19XwGJ2NfuUi3wXiC6pni1aaGwmD1VBfet4ivotQQPQKU67tR6eQoNvvNdfCzUw",
  "key38": "ptfhoJqWeXXMDs4vdrvSTi352wFZDvEsJeWZ6PJ7RNw7kKuNqBBVFgbozKfHwhhQY1wZgmUrhM4587pw8e2fz6Z",
  "key39": "4azm2C6fxhhGbAMQAmQAjUcdYbhrdfMo3B1yPHcSPxxQDxybQfwTX4gxBzknXZeHaFqEU1xKYSgmnviXrbxExTWN",
  "key40": "2iBbKW4JcriWGrqhBz4hVTcfk9jiyqEYEW3mUUJoQtVraERGYUbPFr8ybQ5NJJ3JerHeYzcaiahTGe1oUzoUbupf",
  "key41": "2gQwSjNMwykpfRFUvzLg4Y4fytV9EgErerZfeUDSKkVNSX4MSgEMMX88iF3C3DAYLYQsLGtGiUuk18GCfn9sdcrq",
  "key42": "5QehC4HenKCZJ81qUZuHXb77T5YpCjE57xrV7sdNePGc7BagzRsFSR7E8idZP3bUQCKFAhBGscoZcEY3TcnzFDVS",
  "key43": "57omQCuvw5fvyw33a22ryKoAt64CAiVffbgwTwuibAsUopA6gYhHLWPTp2VaZNa8takgw9kVepZN736RxUZg3doV",
  "key44": "5WTkBpWLpdc9L3DMVXDa4mUbHQ35Zj1iCukBmcqpB1vL9GbkLWoMEmq1gJ2hFg1GNh5nmufxod7kKUCQ4Ax9u4VC",
  "key45": "5ChHm3ugVCaaH7GPaSwzyfbHqrfTTgmbe4B7ujdHN4CxBkc1mUpTgtUoYEtzFh1XgKLuVnnk2XET7RXt5Dh8gYWa",
  "key46": "gnnLMBPSwbWrCowZ4ti58L6FzyBqvT4rULgssZKVVJei5VRLg8fxcckttnfE2FTGyHtksqQwSxQhy6xH6dPgQ38",
  "key47": "5Dd8n6CiEyHsaF7XGni6ChYe3eEaFR4cDzhZShNE6UYm2342unTp7oDWrwzcds2TCaZnTnm1E6S3HRiMuAFEydyG",
  "key48": "4BhiRKpASsULu5JYyjvX3tkRrJmwau3ZGFAut96RVbhMx7N2qHYjMAMNCzMc1kYiw38mKjtUQMw24FAsgghnJnf1",
  "key49": "3XQZpQAXpwHGxKN3KsTnEqo2XobSeGawmLGSYhkBvhtNjwvmbuFUvJgHa6BDJuMc6AuHPXSuJykafhgPEpD41b6h"
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
