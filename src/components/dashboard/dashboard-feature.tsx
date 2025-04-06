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
    "34sWR8Wp1jw8zmuCxCpBVoCsoUEJ9HS1Q1LnJCos9pM6G6MPERvxCgcezxmUbfpoG8exD2TPE6ucjikmJmudCzii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GqgXVzucnf6fRP4rzi1sMrdCpXRHFEJRsme9UHz6rmm6xYY596v6stYECMyszt4n5saJrDmdnFBhZq692wvgxZ2",
  "key1": "CSaKnnHwWBdMTaXLL3sRdmaNspGdjGULMgJKnoaWj1rhBoyuKe8A2DrV7EjFss2x21ftUNYgct4KMVwXKT4UBRX",
  "key2": "4wP5pcNAoewCZYhkeXmrjhiKskaDM9QF6oQ4pQZfPLwDr3rANG5T5TgQHNLs5UAtksocHYqV7EYJcfBdk9uYkBob",
  "key3": "tktAYuR7MdEJmMZHNbtHm3jyQTAtVSfQYoC4YCMNqNo3ZmM7kFeMQkvZEkvkGEgu3cNfcQf5B57fT5BsTzm87NJ",
  "key4": "4aahC3hAgSqhiqVhcpNyU7G8eKnRXV9L3Za4M2THzhb4i4vjMSqhgZ5BiHfsPNc4K2jSiUZiKiEzk32sSUbY1yy4",
  "key5": "5jx5Rvd777sTwSsmjPtDz3FE4vQdZynqp4QquKErjDzmpNdnvqWVV7uef1hYKwbTAKR1hW4meXhTGkhbEEzdvhmA",
  "key6": "GyDGEg2yoBtgPpwqqRixBQgeX9VHYNiG6qRSmsafzs2s1m4VSDjHwsJP9VWL8PLWHGDxzGvbsCCnNe4GVKLsbZ5",
  "key7": "Q9GSWNMEWCrBmGtUfhJiTxAmgP1QhoCs5gKvp8PEYHDuFaKQcHjQwvCtT2Lrz8BWu6B4paoBxiymDPXQvV53jtk",
  "key8": "5n9mVC2Cp9cGUwpHrsuQGSx2oVeuH1i8KdAvrPqh6hdAuAoSsudx3k8B71a29wppdwvLyZr193iWRdBqCMBaH1SX",
  "key9": "5Zx8iXRLF2KwDb5nQ3R7duEJtaaXA4nWZmX8CRNrnscK9S9sP3Q4a63DbC4zM8SjCHGEvnyrjWAdk3nkjxfPt4ao",
  "key10": "3GzMet8gLdACV68pbdThGWoH4guJgR9guLoGJdem2dAPMJMFUpkkoio3pREc85htBkLbx9rpND9Ff6TADCF4afkq",
  "key11": "3fUGLR1v2qzy1SsZHJNcYALY9Ntri6ps5su34BnN3MtNEnoBNXQ7sGZAwn2inV8edXgs4ne7WDETXXfaJGVwXRYM",
  "key12": "21GB5BbJZRoEVqaidULknWufc5w93Tiujg3AkGXf8kWuF1iE4EsW88VmJR28XoHLBozMvZJgQaPpmopKpZbTfsV2",
  "key13": "LMpVaCHxj4sArQ31H6pYAChDHnviqtyhpkzABt7TJH4N9EUicMUwBDQnNtB8HxhAzQ5jhLJuzqLGLGxp41wG1Jp",
  "key14": "5bwge2zekYWYNqCbXFsS7vzBjEdGEhZm5XqiuHXfDeQEGaHWQovDnKBJf6tKBGYW5xDEji2asGFJvafUyFRvs3Qf",
  "key15": "4pdp9kXgPQwFxJHuEp7m9gba1VzCnseXK5ZapuL1raUqmugDJfyvJ9YR3cwzRvuzQ6ZoRDkq7EbDidtsj3vxiZxF",
  "key16": "ozhv8JBRb6VTQ5rS5JpTTePKG655o5GCZFWSfF9RyHjyYUaAieYnMbPZtZ7AZF4zGXgrGeZpTvW4sqdrYs1nYKV",
  "key17": "54LYbDzEwxGjkkK1dq5TSXgSPp8W4RYqq6te7wd1sS2JcWjsyEAvWEiq8q9nTS6Zch4uu9q7uL6SeTMxiqNn2cBe",
  "key18": "3D5TiHZ1yTvaXTecZBcLLd3p8pGDBquZEpzZMburSrGVJuSjmS1T65DB4XfTKFUTmDHLHfSMsNLzp2oCkDVpC6jR",
  "key19": "4GUaMzyG6T6zzj52wToTYue4BS5hSwT7GV8UKzojAzwNZGUJ89zbW2duk2EXzUmizs2j4ErZRGe9HdKSqJcFi1Xi",
  "key20": "p5PbAP7APkuno7U5gSPdSzSMc8hGmqLKtGSUAKepsGbj9QarzpUUX1GsjqcgL1n2HkLFdeR1JeFRynyhoni8cmd",
  "key21": "37g4Xc6AjZZVVPP7XEmb5c5vbWaF5yvLLvBo6HVR75Uy25JU9KYRz5P4zdt9FRSZicY1e7Vd3opjYS3PC2Tvpj4u",
  "key22": "2yQdwm94U9fek4vQqHZerzVXrdBAiJqh3YwCMB8dckaWdkmN3RYHPH8swKTgMPGGPh7eswujDcyr9xJPRvW9EMKB",
  "key23": "62PA6QmjXW1cweaXHLpdz1nNtQ7Tazpc5yv4wfrMuXN9EKJgfnv7Mkk5kff2ZPu1NntEx4MukDqNZSmJEHs3EjHr",
  "key24": "59YePdXJtFm5e79xjeDjnhyjHDrtdAzEmyQF9mR31VUw6J7XAX7CxdkXnfZrm9xghGXhidrAeaPybaeijf5dC7Gg",
  "key25": "2yEkd6823BpuYesTaPPS6MeN4Y9w2B1m7Vu5qyG4aKPLvWi2tRgoriq3QmuZqQ98tsx8m8iY858tDzCgbkCWudD6",
  "key26": "vYQdgFzpYiMJA5FiSANV5pfKVB3pEZAYPgvtAXZKG5rxgZhc8ZtCdBMW3jSjDkuZfkEzvAh1weVT4hKvXLU8AKF",
  "key27": "3fwSAd7vwTSSepmMzmFGYeMVfy8BkSAiHWZNfZoZPC9AhtEoqoiPCHQSR9jKBQZ42deueAQKBjYVLABgy1g74fgF",
  "key28": "4g1L18d2mQ7NrCYk2tMKqub8wP6pJHwK4rdHDfBcWFsA5rifxpU3J7dufYz8Gn5ZkeWfATg5VjEzt8niNxULbwGo",
  "key29": "s3TkrUB9seybqngcg8AZMjxz5eQbuDm6nB6xA6vWT8xTD1DwJDKoEw7rQ64QJ79aatF1476u6pMjekFd8RXitwa"
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
