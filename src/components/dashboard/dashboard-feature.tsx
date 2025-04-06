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
    "5Bw5z8fwYWWmZZMj71pxrSDLRjeZ3b9bDu32iDCBXumu4vY53XPeyLagXdLyTX2Eeq85daigbuxiqmNq4L8oT5ZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FG4RBBHQMyGWPJcKQDSpfpZestxHH7tX3ofKcRXGCgqHXAeT991XqApDjhSPr48bejzWaLrhJYfDYJV7rxZcbG6",
  "key1": "3g5qrztteN5iETwCaVDZgVHxR3VrPPEK5Y8cDKQymjbZLPKadYySFvGGZfyUJ4bJ4fdTqNtjAgLfDmNMY8oSxCuV",
  "key2": "XGtPSxgmkyYbUF8K63u94bs2K4PE1iERfx6LUNsACdriUQhZE6UqD8sgtKs3fFLxjznMCUELxvYiwsGnykz8Ana",
  "key3": "3MzfsA9vcb3wTeZ4ZvY3Ynoi3gEqhfVbmackAH3ERe5Kd95jhv9w67rYHT4j1m2jpW21Njrc5VJXskqyXq7PGDb6",
  "key4": "o6HQbA2ekSpAJPmf2z3x5ygSVxf79ghLCKeisuHE4RN2sX5nMxrVTH7BGTWCLaPLWfB2XjHDhF3wn6F274QEGRB",
  "key5": "26xM8Qfkv3ayY8A3dimdBEYNhUEd2pvGK9m345iwXL3QdDDsn6k2W5uA16UbudncEMG2hihsgLpF1GnSYPJHEtJM",
  "key6": "2nzLWpv62c25PjtyPvxjU5p8GsAwoFbJ7SSJ6CyfG2zCZXn3ZC3EwVxs6tNUJq2yzFLSpxdxeNKs9nJVtEvUAJ2z",
  "key7": "4PRLdvU7x3NfECtEmQ21iGHCAHmxJFNn5EhpbiLctdwqiAzH6yrZuooV3TDzfnsHPbpZJH5ndD4LXwkjep5bfjd",
  "key8": "ao4RGJfSWzcriuWY2envws2UGJizGcafCuEcbGaiyaTJLE9FRKZhdeHWjMi7KjZQTkhDfjAf6YHhGa7a6tPFuhC",
  "key9": "3dQ33gJkbb7thR2F8XF2V988v7sQnkGrPme82oTM7i4sYh3pbfniWFfgEDBir3nHbrvTA8FQUQwHRWVbW7JLiBnf",
  "key10": "4t5SJw4skFLcHyb6PN1guUn6ZRzTV1Squq3JzRcLSmEvu6Nha3VYWwdt2i6gKj9RtvmC7QFQbgcW7xRNAptvn26K",
  "key11": "4N6yEKZ12iLThmxGLfwbMjaPZ1Xuu8egJhupffZZZfBadVkeGMVX9Sa7z4Ysd9XoZucTA1KbY4LMxud1zucx92b9",
  "key12": "4zsidRfExwuJWBkzeBLbGRRUXeUE7wMDzLdGQnSjQ3KFFjUXpX75RU1yX7EDnUoc98RJBxG4T7eVpujJZtofzcuY",
  "key13": "2UsabKiwAqwZo71jcTSt2FwjGkDXYMthTjp4fFgUFmWHFwjYjgrD1uUmeFaiXSGEqcn5w7T4AVSm7MJoekJGGTur",
  "key14": "4282eVvZbWHpRUhgs8wAisd78r8VdqtLCUVwsJftBG8DH1CHX6UCVQ1GC3J1b36sF78gBSY3UoxEWaeSsP5Na78c",
  "key15": "57G8WoHXhzxyLyaviycAH6qxWUQWKFakQXdXaRo4kS6dQsd8qtuShdtv9zQVKSfr8h5JedRZRaYVDrgnSG5gYz37",
  "key16": "jET7fFEWy7ob7RK98KtSr9APgTSGHWh4MvBMDP7rDAYE8LrRtsreiVcXmTpCVKkAMuKRzGSvX4F5LngJ2ALi6x2",
  "key17": "3e8oQbJhdkX8QJ1yGyppCVuqqdqvwQ9AHXDACHFz2NHLCwK3tdDKKCATrvnujbZTbrGxCnouGFAiqZzBJzMVRT4q",
  "key18": "2VaEpSisKYaV17ZP4dkSRkv52oD3FBHnfCssuePWzsonmGuYNUu3pfVMJLJ3Mp7cYzipuCEFxiNHMa6merTA2uHE",
  "key19": "5gjeoBpDmgKZX15KWunV8MTAKhThhQAV96cNBRq3Qh1zXpcPZryejstXTPAZDhekRGnrj7rDCFQnQu2y87yhL68d",
  "key20": "29nkz77o7tAWGZ8iRG4y3B2xc5oxDqyMhCYrGy8r5ETQKvFJh5p2LgBcUowcQmoTn1SWqi3NDA3ExyH59Rc7ifTs",
  "key21": "2BgnqVV1nLLcdr6W4RPgJCzqPdRD9Ffch4ETrJ8FCF93jKauEFBFzukiJSCYgZZiUo2oekv7tvH6LPePd6FA3KBh",
  "key22": "2nH8vp3DcY7yYiwHJfoxrXm1ipzoo1711d6EUYHdwuUaPCQ9GZ3op1DCBRHuDQ7EpVNPDuouJw61apJfMhuQQR4m",
  "key23": "2MmPLJjwSpbypzk9WBLL6TQ4HSVotDvtUMRadJAHgpJ8UEPpGn8U24S2tvi5SewSVtK82M7RQAKYxqCiir5TAvdo",
  "key24": "13hbdMPQMoF39sSisa5H52zWwKBEtHQytJMV8JVUoL1RxnYNo22zWuKnGRGDBNWyugQwocSamnR2GThirgoK3ds",
  "key25": "3mATykt5i6ZDFV7b1W7a4CC4KXCAvbhdd9djkWciznNk74G3Q4H6cgXZGpXpAAy13sXyMnwEDLTdKKwMAyqUm4KW",
  "key26": "4etjo1NGe6gPc6TZVf7f9b9KGdfUJds4UTGQ13ZgFj5vzU1nexwWYomPh8Uo38QApmhfVRGwsLg1kDfxu88sH3zV",
  "key27": "2Yd1KUDMYtMuQqetW4XGr2ZqH4XFaazsZUj4yPMjgZDubnbnfxenKdKxQbAzxqQ5wzyZR29aaoiiZd6TuN5PFNhf",
  "key28": "TnST7T7SebJcWGLr3cngioNfS53ZkREoCJmA5wyaNGeSf3Cvwbb3zfDF8ogZLVMfbjJ5UhCC4NU47i5PLgc8GLK"
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
