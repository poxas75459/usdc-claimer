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
    "rfnyRzKGaqzi5F8Z4iPH842DjNbyjrMrMMXtCNML42SYAv2GMkGSzzgY7SBVbV8qExLe8KVo7ZFQXf53JWHaQBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7NcEZ86g5tebiLYCHzh7W6x7gQZxFJqHzfAPRodjKjuoVmuWbrrFibNMmtyBMtLgRC3MczAVtj5Bm7u5d5dvSp",
  "key1": "5hVBFVfV6ZmsiX55RxALgsMShvYWGY9rZVUc2z5i5MmVhQwSHzJgRTXRYS5doGz2F7YQBBWjKupHFFSUpMw1QHS9",
  "key2": "4mXt9uiACNvML9umhCdWkauFdkF6AJBk19U98SnZ3E7n4CfJCZsALCX6NLRjBCVuMP5ydDDTLzSWV9ATShUts3MQ",
  "key3": "5jUFKR5bBe25FVhZdwnqAvNzhTghrWRRrn9uzzSRrAU59BmcAa6RGKiARwLKxyXX7mMrzsereL3QmThar1Rrmkaq",
  "key4": "5eXjpCAbDa5Qox4xWT77UhEvbRDHu8fCD61fACiLczcVv7oboXF4ru9MGq7b2Qmhz5kD4rJcdNAe64bGKnrFkGmj",
  "key5": "4SQip74Bp6HUpsnzu54aybNz8vCrxC8stbhn4JX8Uc1YiVReNdGwxG7V2xWvCJfPdVNLhorMEsQkbTEacr8pwQMG",
  "key6": "44KeDtNBWiqcs8yYXkJryU2KrbsEuTCxKbqsejZjqKLjdAfhPkH7RHT5Y5tGx4KHa7nVRRyHMnwe614WJbe7p1qC",
  "key7": "2dfLfh6VkngxHgaRHJruUEuCqrTSKPdSgF4jRHDsMLdGy2jufYTV6SMGUqeW5DicDKa2cmFAD1FUwne6VzuSpqbb",
  "key8": "2RfJ4D6K8fWkTBrueyGJhQ7kmGJDMzj1ZkknnWyr7tRgdLKAtev8Ty6zU7LSrQjncuS7oJvRwyD5Lfn5QaLqLgW5",
  "key9": "4687vkZVrVGbJM9ie2QA7P45L7rzqVjM8P9BqZmzM2CFCuuJXevXYkKw5GPXcNv9qxGtsLeetCcGDFeAeagGCjHt",
  "key10": "2RHUWya6XvpuPzwWxpNWhdQJYT5bXDxVM14idy55bnp1JccJfoaDww4fcy9WuLa9mjJ8DR1f4YK7zhUAKVn3yfqM",
  "key11": "2hAFFZYdJv6nY7XqmZgETAAdytprm3SYoN5Dridu5vCh7xZaJSbYTn7iHFuBvJcsQFT24JRadtFG4RsTfKLxHSZF",
  "key12": "Jka874p29ypc3NdBdbofUH8s4xJyZaF9g9onQiwv7iyiAKYK6WXzaxeJXft8MxmhuMaYtrSnXDGJLhGvvE1oNoV",
  "key13": "4znMZDwoW5eBrFRnYVzKX7HzfYMS9SXZDDSXcjzY5NMaeVhKCGpWtrHBFHa6x2nLo4pFACD9YNAp1bRTJapbmQdD",
  "key14": "51uFpRuqnGpV5stjpYAdMroztkfJoEwkimGLZFEmMdqZFkkdGxo1PjxLC9P7bPWRUkR5G56LdWgxWKPyrXVdEZX1",
  "key15": "3bfKXagNNnBj5ZCuAQdCecDSN6V8F7vQs2Zs8AeYgRt1eYtRpC3qZukdQhqNWJTwe5xwvwEay6FLijPwt3H4Mrw3",
  "key16": "58BjpHg9KxhESNEDcTDZPVeu858FEjK9E4sUVgzLq4xpfQN5FmxmAjKupb2KtBaEkyckiMmnqEMA35riGcZ1L2nH",
  "key17": "3b1tQFbwfiiBqTDgRRkPhyHmWz2stA8cs78JUaaF5hwpKvM8xuKGhT9N6gCnMD7CPu6mvJd9qiaZkxZ2ABpAeH8o",
  "key18": "3PcY9Fuw2VDiuQERBxvLXyy6SeV9B57M4wanLB8MyYZM3QH8CH3mpHb6muYgvyXoLCKoAsMEf3rZXQmjzdapfW7X",
  "key19": "4avTVMm7i4NaSycVVegUJEgcFVKeBiMkScjK8eWrsu2g2Yiq7F5ihonmwVCwWLC6ZdqiMDksL77uCo2kWfo3kBD3",
  "key20": "iEWesQoxpDSoKXjs3aFB7Xg8tbqXNq3992tw4vTkFywTzpSMmutb21STWWAKHRjFFKj3GMAD51TALRSJHVNJdpt",
  "key21": "5AzqGtwmfRnoGwSWXaFFkF65hCjDTRNZBCzcdVqhoCf7JWhZneNoaW6qC6zSzxhvBjUXqwoTNxm7s7A1Nds43dM4",
  "key22": "pzWeRDsgqHk1ZTmBKR2LeZ6V6jr5HtqTuuB8HsZQqsHdmsbgyoRghfCP7cg2BrMdDGANsWSjk5nafEDaWXGFqKU",
  "key23": "dpDU4S8qv8mEFj1Fnomx3svoou3Sn8AJ8vKN8w4639aPYpnsu19fsmyx6TGQFwafgVkLyNYapDEuDrNwFEfvGzN",
  "key24": "5vQk1SjxifScSjiUFDEJzkNWzA5ZfxF4KZZLC4w7Rg2TR9TpXsNdEjWab7Jf4NVGs3ieQ6HuT3bp3XpVZdrmf6yX",
  "key25": "3XrnvfzzWNuqkZNiYjsKUoRpUZqAJMQfune14TeDnZUdcGnPZ3P3UzFzfP3JxKbTXWcvswK16K6ggVw4heqojDEw",
  "key26": "3sGeSNpEziiDupYbws53UXAH9VfKjoS2JQjHqyS9HM2TH8veANuANGz3rUhU2DYEfgjqt4CYUkvr26ZvfGvhPAj5",
  "key27": "3van3Qz5HGivaB5Dpu9Skrkvt9kT9pQHEmDY7vdRbKQ8GXPdWZYAiKjEPvXSZwfxHky4nG2VWuoaLZJH5SvJdRoG",
  "key28": "2SU4m7MWGQ4hmARe7JAFA81acRjpzFANtQ2gYi1hz4yJfaHyKvGJ1nswvLeNeRQZBxNpcCnhTB9WkYeddpcs5Dt6",
  "key29": "5S1oCNDGbqnQ1kJRMpmQGgya5LhKHsx1JhTEwD6PDeadegKRZ32aP5SY8XURmUjTEarCfQx9mdeQ97xEuoAteNqa",
  "key30": "RZodWieyqycQhMYDK88wpbquGpmN9N2T2E5Jmm2MB6Hpn2KK6sTZBRv3g3qWaQAq4VVwkENt1xQ2zYaUJToNnyA",
  "key31": "2GwKAbf4NtPrWXUZkp9hXBqYWwwGEHzYxfwpdWfPpPiUUc5oPxGGtsBrWLPPYQUh6n277WZw2mUYMgYcnXkGn7GF",
  "key32": "5J9gx21MBgLpN5UM8244kb8rNvsCFhR1bREUQa7c6urzKP8if7tvT7M2PzATujyARfGKukHs9jyVL1y2rXsCwuuR",
  "key33": "2QLXnYDuz9pVjst55EpGgEHNwBuz33EeCHBoMY4H92XWgaFQTqFwwuRgzJmSfHwUF1QeiQLoi7GmkiSasuiLHk17",
  "key34": "5tBCCwVfKrfNe7U6BpVpx8gkXLfZJJGNBMaA7SiFcgmmHhhvzTbsqAnhURyEGx3S1xAZQWtpDhYN71TKN5tB6dan",
  "key35": "4DqHizUwTBqBnptfSbcKJAU94tXsestyM6trwcqwbPfQxVWHVo1CSuaUi5QziaC7eSF1REBY4tc251vHSTZY3E4",
  "key36": "2BbgoojsRwGSm8QKdR13Z8DauHLmoCDjbCjrPo6Au4K2q4VJrAnEZPFgiettJFCfvCwh3iqEtJTV4TzLpPyTBfns",
  "key37": "3A5nMAEmFgXL4bzCfho454cz4cgCEamze6nkYLk9Y6sehSJXmGiU5AMikWoocjgiNRbEvtos1snqtDozypXqHYt7",
  "key38": "21jJQ6TrWdjRLYdnvfqU6XBJQLD2VWibjEXf51PcTveqKUw76enqJg8HdVa8g9MWdvQKGAn81JjukUqd4WEYJX2H",
  "key39": "7xvLuWUobqa4KiWwSGRKcW8KisCTki83BLeYwtFwXYUrDNjwEGNDG7GVo2i6ePeULBfxc3Z8mgfgEruadki2a5S",
  "key40": "3dH8yJNtoVHpeDgWPTTyqsAqCryj2EqxZbEsiEaZSL5dVaFKVZjMqjvQWnbbKjJnpvs6mRLUveTV3UG3bRYB525h"
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
