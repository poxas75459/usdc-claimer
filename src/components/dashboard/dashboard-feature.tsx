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
    "3SuwKdNy1yWYfCPJRqerR3UEPakqcjPT5PnVYQGxgi45gZfX8Mdg1QTmTLY1scnVmQTmM6Vx3YaC1yxm1jR4Tjsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTEokeV1tmia9coSwTZiq4F9Jt7nzTjGv3Lze2YPykZ4ZFXou5nXjd2ABYmnmBggenL426vnhREUyZbwq349DYz",
  "key1": "4kxtLG1omeSUi4zpVaXjgyiisWQg437zbp2mASjy7R6nL2QiX5A8A5cxb8a1hPr7AubaGw3ED3DCX4rEbEjKVFin",
  "key2": "4hm3NXZKp5LHZonJCCQ52iZ7uPEF5PZRo78vwNp9piKFYL9U6Z2Z3aaCHYqmyjQxjan5NDJv3Rn3qDfjtNNuXW1U",
  "key3": "4fjGo6PcEF86asWWE3NdD3d3SajU19H7CSmxr3wXhWrsvNjv8GVggKZrbhNJzTPDct7ufyaneZre23k3siwcMo59",
  "key4": "3GUQkBSQWrKftg4FhLM6XxrX4JN6QJjMBrL1ui75so42VsKckw8pWRvoSnJBStg1ViekgUpphFiiKXLELTWJBK8M",
  "key5": "2WQbcoL1EU9rhx544FwEkQADLFBr6gF4WpfdwZjZLGX7KfABhb6jyebCV5P3DUiXfqeEVcZJfxpcb5gZBRHTKLc6",
  "key6": "3Dm3sazNYyU9MWVrrk7xEDvDLvSLzeo3u9kiv7sBjAa6okq9iQoYxeyd5MJK5PhUb9fLz3W8Ex3z6wjS8VpyfxFB",
  "key7": "2Agjcz9LtsL57ChkdrDtF9e6ERfq89LvjBeN2xMt47uDVRqERkseERZe4nLXnz8ZU5uhAwDHHfvpVYtsbo3Am2av",
  "key8": "rBJSF22nXNnUEEYSLcJtgPqRfoNxg5xhnACmtidFZqZ5aAg7xCyocWHcrjP9C4VdRMHs2i9Lvm2edkbSYaedmoe",
  "key9": "2H4xSNSdQqH9e6ZNX5jCpczJAAggERaV9dVS1bH7g5f6oBZmywAUcxjqZPuNZWhLjoVKmcKqP79RzNgHVCpteN3j",
  "key10": "31hQVrq9XKpgnzoMgNesZjBvWbSXU3FEuC2J2GkQzcQZvDwdAXgfw2Gjh1PkfFTGe2ah9TXHavBC3xhhRf2Nux1x",
  "key11": "5HqALULnmPf7jc4xoEw1zWkV3d36gC7QN9zpk2iE27xaNxvPcVikmqoevL7GXjsuAW7bmbVA1yraCMkBKSpft2wE",
  "key12": "2fT48L3cjpq5QGMYWcxhpTycK59PC3eYMKcU1uuoi8z1grtxGrUdecDz91LwC1SrQH4M7mASxKNgTUxi25wkfJME",
  "key13": "5XoSEagF97bUpEwa3QvfWYnodhDNsQ2Rcd4zVXSqBvn6Mvcuf48u6xUoDAGrCxzBaXGiMEDYdK6paMvk4zgtjFpH",
  "key14": "4F3WscQKuAVrfj1dBDMGjVbeqD3hHWZLN8gQ6TQ4ujV4d58Xdk3BoQ9uJ6Ya9ptnFJVNv9NV8GtRPGEPkAgdzyYM",
  "key15": "3qayZ4Ln42PGCYddqTtYEbRsCbkjbB3zezfrnEn3mebgfHYu8i17viuouR3BNvVzkAJWxHMTe9odiShsZKsdHeR6",
  "key16": "4vMbd9KoY6sc3ZdSA34RANp27w1jY3GKFmcPWyjC7UtZWy3RAbqATDuJbG5771pWawEr1yhLGkE7AaYgK4gS8ALr",
  "key17": "5sivWarAdBsaqADUFa9ewR9jEUZDZu1ZAF5guEW1zzaYJatfou4VsLkBky6DBmQuYt43bcqqmZ1ZEZHJsyX9DRme",
  "key18": "3bsJKdnYv7EMd1PHs1Bv2Q5BMVyP3kB5dHkgX8sMso2i9k9Bp8PUfZUKYWX7oghiYvkDtgJ4dK6Hcne7MPGjusWw",
  "key19": "2NbHUAdi5UWsQJfQuoJM4Lh9rUTqFDBiF1ThsF4gVNfaLk5i6ddkjbSS8wCxZATKCSpBsFRDR79LdZcUa8VtY7Rp",
  "key20": "59mTdR6TGQzWuzEkgNpwF41Hx1B9eK66MjW7uuprzUFr7j3TfeMY1iRy8mAMLtQ61dc3YCRXYSxsjLgXjua2r8t7",
  "key21": "5NzvX6nk3XyfczrFWgUAHhmZ7dGsmqCAfkbUWnP3XnVgZiJ61bF782NWaNdrJmAbwNgFWA2PuTnzXgnppSD7iRvY",
  "key22": "2B48BxUi9HNAdMKbcnGreVNP2do3AKw1H7JvT4GVnwTsEaegnaDTd9rRq4i6x6XTdDp8HYmWrjQJiRy4ciuaBPLz",
  "key23": "5YNHiDEuWdwbhbpH8ToZ5HxWw5TETz6Wqpa2ztAnpEsMHreNvRD1z22wyDrefeU2Z3oSDYnfbYbg31XG3Wv8jpF2",
  "key24": "35kCAmP8KxskEfNX1V3e2DLB7WSPG3bRBvebRs8Hm8GgwJ9VK2LDVxBHyiXyZtNQJW2wFMCzTEAFHtVR38H7WTpN",
  "key25": "35oeJqyJrQm3dMxkDma3vpYuKzgba8U1iKBc4LXduBkdHuTqyVRKBqWZLRgjqgYoNjegxZPbLqNkREE7JzyRT43H",
  "key26": "3u5N9FzUUpNUCR6sVKMN1ZPJ81UN6YqRq7mMDLZGvU2Vzm7qTAJW3w83SLX9fA6eJm3LLiAGDX6AyU9dZvekiSN",
  "key27": "3stwcpQfPQ7AeFmoZAXncbdV3fWCuvaoX1xNXFL9a1FHfUQMB8TR4NN6RKDb8PaHNDtTiyKRorvPkhLyELbhKMH5",
  "key28": "SmhwqLmqQwqrAeAvQz96Hj6TCYZZFbH6HeLGiV6kg3RD7ZpsPQX8D91nTX4croFJ6qy13UyRPQUNYti2iGmoBKj",
  "key29": "4XxuxNaPmt5pjcaaSSxDRepo1Vuxsb1LzzB4CT15pJpdrTfnzVQpyRe6NNX8cRLpnusgyW9gTJuTUBMRZAR3CjJV",
  "key30": "t8NNMPwzxuNvU5QKN9H6eZ4pFBFAPieMwd2Ho5ns87FqAeAAovWkKAUHr4Cwcf1fPeGfZV8d7bdqvv1Qbci9qim",
  "key31": "3uA9PrjRQUG5iZ6S1szh4ifvNcWNWT5BTQ2vejFm1fAR8JjUeAZixtghvv6UxcdsZ9GSFjY3gPaqG77ydri2t3Ed",
  "key32": "3e1r53o5hf5hLPWL1DYqMn6mHwW8Pi9rzQ4wzPQtJsajZT2g72QKdySEi1NQhuiJJS2xKVQQBDHeAJY5iuiu36cB",
  "key33": "21uW8JHR4NfMXbxUnGA1FT8BywSYwrAWNg4nwbL8BzkYkXfcyiPMK7tg7hR5aCBWu8jV7VXhqkKfuTNVV42zHhgU",
  "key34": "2RTW5VM2Tf3pxtgBCwqvmu8KoX2hcK3pq2ZrFUaEWCBpktPVUi6SJrVVHjCgFjbQhZpDMdE1NLtWyV8ucDbH6Fk2",
  "key35": "5TC2zWuZcsfaJ3xjnDf16TpuvsDY7ptSbMVvQ1QmZ8aqpcWCYBCveQHAVCZkaqQWYxS7obdkVqth1Cnq8G3pGv7w",
  "key36": "3Ep58qNDGRWpS2yUMpTU1TW9UvUAWWKiRyeA3A2taxL2yriNPXYt6JTY6Ji9HMuFVBwLPCmB7fAQ8dWCf3PxeuAv",
  "key37": "3HneJcyMoyETkoQTcof4wqwQQxvRox8nNAd4v6iFhn4ozxePhyYe9T2UEf27siK6UUZufH62JxQw2tKaDuW95EWm",
  "key38": "4BqABGAgT47HLGtmzLVo4bQ8pk9c1dG4iZYett2wuig28AYVNZm26C9WWyTe7Kdxd7zAvm6dS7LkhqGcY1KVNVUx",
  "key39": "4Re2zAiwvtPhURAycJafjWSm4QzZcBaEpMaPjPJAmazC4DN7NAygL2xCigaDPG37B8pG98fbHgiuHZx3Z3652fTP",
  "key40": "XCaYQovJ3jDxSoNFiXs5Bfc4A2zscTX1T1aQXKrdL7d7AugvoLVNV3P1yzYQtUknfW1f2paqYf1WHFhsdQGo8ut",
  "key41": "3ZRGnzGWn1oks83jQZqUxTvdiw2P4ii8v7GP5dvwjL2fUnkW2sEeE6dm3LCXFzu6LGoYVTadrJcDMb6pFcJo7aGS",
  "key42": "3CYTFGFKi5hGwiqTe73jxkwqrQwerzxyLrk2gnGfGu73iH8PWi2qNLT6XE4Ktex2kHgvTXDYPHyNUhkfxrjVv6Fo",
  "key43": "5QgJiHdwfn4cZQNyHSZJ8AV4DJ5FAN5gP8JjSw2rchdoCBMaTsC9xfhiTpHiDVzavqwyEjwztJ2ZUw47KMqVffGA",
  "key44": "5v8rCVkjE8xNDUid6MzR8RdsWenGuZ4mbJBrxMHHRDMNhdP7k4thn7Q7g6PAuicXcXw3kgvpQuKXoNckGKtj9erq",
  "key45": "4z1vBA5afkcsWwtqsFW5Chme7Q2XGyQF24ZmdwVLZNGzsSJyw1LR9Dfg3wY4uWSCf3WDoGywMud82poPshZyfYC5"
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
