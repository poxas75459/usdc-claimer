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
    "4vLgT68RkYsdFqNAv2NrSaxYn3zkYhk26e2VgKsEiMZnuWr4Y6MA6SFGdVg1Nb1PMPWLsxEUDehfSPexm4bDNWHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9USD5CqWVr4iKeLatd1pbpN8utFxaUJMF4zkvVFw6ZYswCenzj6D6gufPMHWos6BzayBjH22QXo5QCYRddxTfh",
  "key1": "ter3VXgtMRXoCVDjo6DWgG8HF7kpMBStRLasWh5RfWL5p8LvGxTbMFNbtQGaxDP2pTpSKSbKGxuzk7iCykYTmwi",
  "key2": "4jDUPXHg5GnywENMTu3aw9A5H6VKisDMqprnvfDCRagfVuqZBBAnXyKnxM2fpDoWp1hcipHLmLGhHShQ62DNysTv",
  "key3": "4xtuMKZ6t3VqjGVdd2GjZYYiKGs3pBs3HL4jNQqDwAwb3AnLUBbnkovRTAZ78eHcHV8vgoRRJKf3oWsY3oLGHFn6",
  "key4": "4Nk5HovgXDMds1pAz6FJzyFMvcr51T798TQ1GSHfBH6NQZN94m9htcKTpRo612kWDZ2SKmdMZQUyqnzx3rPiXfWY",
  "key5": "5bsAGLX2Ru2iXgc71chM2eVTQTx72gUxomZDXDZMhXhzh2eaLCmK63Cz8oLFuADirVAGXf3B5Xz8sN8QUJc1V93N",
  "key6": "3omj8m9qmZdP8hh11xvRCCVExWZJKv68DgS5K4w7HE31YLTwPqNB4XidNVWDd48kCAwphhVXCUjJTVjJ9egDrrb3",
  "key7": "3PKyhvpoAhtEXLpwUiiQVL9ekpFQgjKadHDfp5sDSZAs9ZdqiGEh6aAs7r6cz79CgSRPLLRagixnYgrSEefWDf8p",
  "key8": "4jAkmkc3evawKT9BhbGsB9y3mbpT5ZJBQzw8NUBNbH9erYr7Gv7EcGxFuLtnheBWFfJa69C33UjCZNZLkico9VPx",
  "key9": "2bxK25DWZ68tnTEqCRxAz3NRG76QNKKxxfW1zpWVszwBL6r1hHVdKqmBU97teA7jFC2bTAyerNKdpVkacWjhKj9i",
  "key10": "KsJd1e15MiZiK6TUSucmvAqBTEKwPGv3Dfc4rQXAPnXfaoosrAeKYZMr5Bj9Gy2iPqfQJ8Z5tZ2rPxbqaNzneTA",
  "key11": "5qY2JHgcVvvSQkVET3SwzVFc8PbMouVvwFZNPMmFnBt6sNkpii4AZHYre4gqdLBhRemYAtKLm6beE3bouNRvcgJS",
  "key12": "3YSXCih8T2KD4qAh2QAFCGv5MFV36UsXsA1EAvMmGPi4B3aAD8ErXHVVQHDYoGwzDqcVWUQcwKRVdcwUwANeXkSU",
  "key13": "5Q37SArExRJTCbLC3ccqxwBATFtD9ueWhvZPJdZwqriEyRbthN6Hk1ycf5wqtSDjSzCQvFmXaJdFA4FL1j6jxQJe",
  "key14": "3jxHZxbPXEVCwLGcKaGGv4H9qLzpdGHsfLH4NFW3JBCpRzYwismAccbbDRJ5VNYFDskBXJDwVHp4QRYjAv6r9bj",
  "key15": "3iYPYkn2nfqkWrwXJg2evGDW2DtvdmHEBwYqiAiRtbHTYZ2LG8esDGSifnp6VFgcmATTQgYQPCU5X7Z5q5yU5kt3",
  "key16": "2ywTtT6uABhaV78AnFhmjdva9jF3BxEjMprQjXhZf1kyPpteD6uDdPHugZk6UYLUpyDmJdoyts88mXMN3juZ9qK3",
  "key17": "gWe9nFjyGxFkTrVnxcKYcq4w3zkPaQQDjwS1DwnsgE1GAzP9NCkvpWWqG63gQAV1jpLRBZVaxg3exiBcy23tjEa",
  "key18": "NdRH2qB9QzJUNV9xZPnHf34LJ4QwDQHfQg7UbD8sfPDB4p4wUL2GmqxoAi6u1waAnsTBdrke3m4cTGPH87HSx3n",
  "key19": "3NXFQ29jPpe68vJE555ikDDZyoLS8UhgTz5Vtm7VSTgGmgVKffNyahEyoBXLoRzRcEbmV4SMxnDJvzNpkzYwij2d",
  "key20": "3pYXmEDNXogj8KmCRpa9xNVVnFBoT9ApWhTei5rEFHwWNMRxSXcL4iANZECR567CyUh3brAhBVXkAk66dNWtTLnj",
  "key21": "4paszhRy9g9R1ous4a3JCUZstf6khwM69vyCtiV2AmoK67kyFbi9Jypi6sEfjir6HCSfwGaUH9MxTQVEUi1r93NC",
  "key22": "2iSoYHF7wU4kSiiLxgLrdJyuxNMJbujQQ2gEwABkxAMLzJiojRcmDXcKYoKB4wg6LbaNNjgu1z4vh9yz4jqMA9h8",
  "key23": "3SJMFQSQF7U4k5Pp7hHPa2a8qANR5WNWsfgE7ztzCK7uhHCf2wfuGQsUvCm9fE1FfXVqVrrNqqrfKfeoX1sY34Ny",
  "key24": "oG6mwkzz9MzDyNMwXR8F22jziHCBtoKL7qzFFj7g1b8ftVqJKsAksCQj1McmxZprgp3aD82WHduTDLzVdAbjRkr",
  "key25": "3b6Lwok11mKe4ye5BaYW2SVgCRzsi4GgWExsgKrcJ2Rk5ztk8necuuFpbVsGbxvkjAvYWFwKWKbgFWLCUU5fYxRg",
  "key26": "3BLJBwZVEp2otGnu2TqNu1TacTxL87rBJ5ay87LZxQat3tJzaFmu9D7guHaL8avJmeCU9DLYY6xBJUfxFA6RrfYs",
  "key27": "62cLYFEDpY1uUU3KAnBhyUexjjoch7tjmMdcVrA4FtXnJxJNTp98H7Yyo5hiJcbKm6UvVzn4fny4DSAc2nJsHf4H",
  "key28": "4pDzEUY85aUjSMrqy14TuePQDyivBwB4GVLVK8kqDAZAxwUubQT6znAwXFfH9ztX3DyVmprJC4bSjb9vCCUCQWU",
  "key29": "hiXv7QR36v1HgojVxxSehNUtwAxVetc89MzYBMchF5982qesyrejqhcbWnUHNrS7D16gisaaCBj7h1gAtUAoX2a",
  "key30": "49gTf6fn67ZduB1yJYG6HgbzbenB6bMgsa9hHpjvuw7Q5MLVF8AXEUAoiUUTkEMF7j5ZmH7TsoC5tUx1vbytMzah",
  "key31": "3emEmbDRVqQb2ABEKC96yQWzqatQ9LmJzCDr8yvJeFKH1T7uxprJc3mAbmDXNTZg2jqRZDmuEZfLAcZyVmvDbCJK",
  "key32": "5xjyG9g3Li5ii5wgVGJqLqGhgLXxqM9p7HxhJkG5dpXrSbcTUBueCynHo565c5GHrCYbucxMqmFnTEREY66wi9sP",
  "key33": "2pA7JpT9mMUyuEwSVivrzrZ7koMPTzpHp4k4tqFqV8vnmcDnL2jbHCkUS9tUBBPyB64RruneJBo6wQx9RYJtmPw6",
  "key34": "5hR7WaH48pNpjr4XJu11CTMywkf8ZjWCBqs2wnmsJSB85wYyEF1C8mrC9xXYpaK4uhEN2stkt6DTnYVAgjAm5Lsh",
  "key35": "3NMpXsJSzHyBd7CLScTxKazEJSNZ8Nu6FNv51mcZKT8c4zXLE63dL46XGns6a3zbAR4EANc8Li1gbxiHFNJAsMQJ",
  "key36": "5ptc3XkzgQCZJtbybxoctc5cBnMDnvcys6gjzfGFGjyxnbt9Zwt2MiFgXpwnbUV1ouP4D4yhJRgNP8GfLWVhsED8",
  "key37": "2KzjN8JYqqZwHZpAUmPRvCpbLQzpEdpPoT5LXEDZyNCMqyRa8kScMMMj8QaCYzAuFrBhhmq8EZHsUjzdrGfWMs2k",
  "key38": "3aSAJPoUePGcTP5GVmhdryeCvJKFrWoqDC1BA4nChF619282StbPc5GQG9m6mYMtqCyx55wMw8iVVFvTBoCeWYU8",
  "key39": "JDchfreXuAiPYa7xZjkcZGebDY3FGNvue2NFZCTbUJ4cdgE7JdgvKzmF5nUf5Wd9hR4S5KAvgN4j5dLV4txekh1",
  "key40": "5QA2yQY1iQewhrE9xtCD4Kpf4gBK98t2aqizjDH6Vx2LeexhnpzQtSzCiCSNVdjdMw65ZGrkJd4g5U9RZdw7NDvr",
  "key41": "5cE9XUgb289D6urU9GTxP8XGLKP9XCF6wVwntMCdtoxr946TYbt3yF7G5Uni1stW7nbyDZMJWc8R2GLYfisNgR1N"
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
