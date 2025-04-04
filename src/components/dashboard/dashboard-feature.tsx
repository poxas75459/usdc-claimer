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
    "4XSxEfQgD7D8aMEBumFaMmGQFYqXwuKDtubqdrjJNpzodFZ2DUnthSeHuq8qavSZ2BMUGtFvNMR53TWrVHAMh2Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GoPqbKFFPtR8Xvx4SYcoWkrvQSZAGP2J97hRJTvXgykn4EzcL9FCTnyZmB3EQsD8j2Aejsf9mBp4rg8ty8J7dK",
  "key1": "2B17sCjJwsPsZ18JJQE6x5JQYAjZUct6ESYmqnZ7u9BS8SzTnxwrWiBhGmKTGs6ioFnwPkk15CNDtLVG39cmB64h",
  "key2": "RkS6FxcBa6Yu4sWYTuJ8LM7PKkpomj6TVsuXs2coLaXSR7bPnpvjaBSGjKow9CZQG2P2aNJqnt7ULBvh8osDSER",
  "key3": "5YGEe5a4UNfude7KLNjotvSsmgyYbKmmYzKS7PT9LEzhU8PQVQiZX4WUdokcLHKfRAzzwimuYSegmo9ZwR9zCYZX",
  "key4": "5Ko3faxm9TwUFKM35FVkJ2oPFnzj6vrNEqSRH6qFU5Mg4yPVKgtA6VPcqfQcQVnQkbbT4c2i6ooBzvFfS4PrRTQm",
  "key5": "41c9AqbpWgquHeJhCqT77RthNWbqyQARk8L9PsshxxSpp2Q5rJTCxavbG5zs7kF4K7QSZBtJCb9e9yg7UsYXetFB",
  "key6": "2d9QgLpinWpXqkX78gLJf7EQSqWnWSYnoRLsM1RDNDcVQnQxSoLbjoAY4pJSDXZE8iAwzqLSWhHCvqdmtrHRkGee",
  "key7": "2y9b8Y5Wgza3CifFZCnHK24XynkEa7SqpKHkgaUdB5E5vkCVadkEsxzMPpUGijb3xDKCSFLvpWWiTRbNp6KGfECR",
  "key8": "2bsPo91iZGRPHmXFR6PLRtUJmNcpgd4fUSzTKq9BBG5mQ62qeQYQ794ketn5BYRJ6Qw2hCrHhMSg2w7dNLBVQ5gs",
  "key9": "2vzXyMph8x3q57f199pitTFUoKCAiiQUNvfYBwUNcZzVLocZwKLmMCyroSMYendePWCp53okgeVY4aNuTHUQw8sb",
  "key10": "xNPxGqggerxG7NBw2oKuXWSSyPumJYD1c4u5RyCNNt5Kav1LoN8XXY6Nop96VcKrgv6m5s9Au8Th5eg6g8QLTmn",
  "key11": "2X4iKQYjE2AFeAndy9YbbP8wGsJ3ihAnx7PFHvHgJ5HddqMYYi1yAvFjjvpcuQaeoM453UgZPsvJJoFmjem1Dt3U",
  "key12": "TVSQrUsqgiQGVKQoxF5AnTC9idg1PhZJ6reRgaXs39uWXoZMrnZvPyGmQCj1K5FNMaYvEdoWYrrYEZUnidTzwCY",
  "key13": "4PVxkppyRYnFhB8uK5Cbyj2BqXCc7nYEPowFoL5qTM1p38czhTbtEhmULWMDFHsxRj7E1BPpu8p94XDZrKUcSBWv",
  "key14": "24ZXgbu47Tiy9AkGVDa1XVZKvF4pnchUVp3nS4fyXson8W6GArXTPpKUqBeDexWncNiGiDugG9JeB2PVoVtAqR3Z",
  "key15": "48KxxuRGe4tYsmLKTz31hzzuw2MP4PAW675wAbwcbQXnk8izv5cA4WQQu1Zw1ziBn9hkGutXTzMG3vJsmduybih",
  "key16": "Xar39WYr5HsjbEBrd9hYd2fKa8FqDpESzr7HedSzBBiFRrxT25ALdapvybigD1uqZXvX6421WPHpesYhzX54kU4",
  "key17": "5x1CJbYXcdLp8vmbrcuJav4LqQ4RbfN3Mpjw44QqPanyNbkrXNKSzzEwJm5HSL4nBbq2wKP8Kzq63GZPr5XiAaxG",
  "key18": "eGkx47TQvJM5m7B659dAGSECZFLV8ffQioTVH7BCeQCcxihsxKe8efcruNQxnKS5dPbiqymmZzMF4gH2ZMVW52x",
  "key19": "3epkFpq7X96qg674Eu8H7cvcmkS9ZQEJz8Z41Ljj3JeZBdECRk4NAvDExZHDzcP7Pcd5ktVYeri8Buy8cdyMRHWK",
  "key20": "3bKUfqA6wXq35Kt6Av3LLdCJoZnD1f1LT8chouPQFi9gBGiUWQzRUDY5ACktadp2tEUHqZGzF59gwQ2zqvpm9y1r",
  "key21": "3R9rfFRdiDVRQpfk1hbV4RypcuphncTMsibhb77NMeYRfUZyvUDqmqpryYFWPnJSabMN2uf1jSND8aRwB2AyvyjY",
  "key22": "4oBGBPkfCNa3EqXhL9B5AXVo9ZWcYiKRPcGtRRzYNczL8rQVxJeLee1q2rX2xvdbBXoAKqNMiGYFHxCHKgnaz1Bm",
  "key23": "Py24dmgKN5q3WUCMYY9NMdGmSPxu3PdchztE8HpWYPwuHdxePcgUGUhNc6uwCdyR5Nrv3Ez8G8NRhrS6E5f9eiF",
  "key24": "25GYnRJwY4znLxcd2AyVqsKZhiHnWA7QF67wkBaKLpazVPXfkxuZE8jPL2axr2XTKp8Xp3osFGS6NeyHieSiy9WB",
  "key25": "LFnFjm5RwFVps6bi1xVvRiCxyu5YTaAidsW8eGrQY7HcupopsknY4bjdbbtUfYFeRuvkyc2diAv1D9ZjdwTT4Bk",
  "key26": "2piMrUopBkNvJoHWjvu8E1p9BAsyWQJHdBzQSasCyMbXjnQJa6Yur55H6YkNd49j5w5ovJKXeJUBU149aAMYkfkX",
  "key27": "4zwM7K9mh1P6Az7S12Zbh9onoUChQXma2JV6awNrY5AKSgGgWnQeR453XFXXJTDoLJGABFaUVbUaqvB6P3yMKx5v",
  "key28": "5SouZqRdzDt9EYqsyxvk329dfN7CUagb2NUw8d6eijpE5Jp4BU4ZZB4KdqhmdiCfFSdjuRhMkhs7PLG9kUYT39JY",
  "key29": "b2aDAMbFEXNNPP7ZkFhHSXUEDfvSSMGEFPbJFQC2Xu1Wpvmr2EjB9Y5zeKuuw5LuphTfWGshKQdKfzkddPnd1ja",
  "key30": "2jFGBjxueFpJJqis2yAcMUJZgHE5D56vr7AHzY8adF77DDnvauaLefHWVts16BQK8pMtwtb55Trm5jDbUSm2YBi1",
  "key31": "38UTv9AEuifLoVWqN4zyhWGGCAgkXoiH57aGmnoYihEcXpro4pkuupugBYKFpyYM5HRVrJiuMUFbhX4XFPEgpYoR",
  "key32": "taem6y6sZx1x445zi5Vjt9fLoAPsGFjWS9FpyQNna1uj59vJijG6CzL3fE5CTwktbVRTVsrtPip2VWFpvbxPJYv",
  "key33": "4Gm6NN874YjVtz1dwVtktYyPTCa3Fb9n52vYwJ729zcpFYSTorm3RanDZzHoXE4VmQT3F2xB2yH5LYhtYgEkP22C",
  "key34": "41SR3oqtgu55JZQmxBiRPRBijbUWmz5Pbr3x4vunXz6tHJ5P8hujdptiCVzwAvKP29tPQLkYFXVaETB1UjzBXeRt",
  "key35": "3oYUTpWTPbkX2c1KBT9d5maBbi7pip3a2GDyFvW5XgN7GA67LzMjn99xXEszMnudmcZTZTTgS6UFF6ePjfYhYxmc",
  "key36": "4FVUXUr2yMA6gkgQHYcBbkZFxwnU4ofuNgpecayUAUmpLDjvpXY7qB1aRzut4iHN3MTm9wAoiihJNYNxRD4m2GKQ",
  "key37": "41W7MquQbHEfsnbk4URFnrPBykn1v4i9YyV3LL2fkA2HCtkn9TGDVB8eXZ392XMz9HRXR2eov4fj3raWmEPzsDhM",
  "key38": "3AST5hrtyzLRd8epsrRTkDNMW8aZaS4q7gFNSf8Ur1YbwsvoV2wZd1av79mPMdpTfpvxRWWgvaXDsBzQHGFLFmNK",
  "key39": "2kMpf4As9ZcNfcuL7rkdZv4aLs1DgVHXUM9aeYHEfyMnwighXxCAyCbts9bApQ1r9BLWMT5cQKTLs57NpM7YjwmD",
  "key40": "BWSgKkA7HT8rr8Gc9NmM6gGiU3eLcNt8LnwQktenSbDHKw8RhUoyg6LF1kFNLavGWZkwXFfjR7BUpsnFaBkuAB9",
  "key41": "5nKVDDT1KWgSA18EfiXFh4AmPv7ABZ9ih2WXQ4GQshMuf1bUvzMizuKVQaNiv4iLxQzJLZstWYMb6bdsDjJGr8Ay",
  "key42": "455CfAa4yaMtkQteyHvNkWXCAD1euJZTc8JWi96ytfDWQXgCJvZ2onv69JkUTTRfFUKPyGeQqPARXC8pSAnGEqz6",
  "key43": "7H6hGrSY4ij8YRv1cBDNsb2gxQvYYajdKS7W5tVpDEasDCpf28beWQaG31uw7QTv4sBw4VqKfMZpDwcRNe9pEkJ",
  "key44": "3REXh5EQ7mieLdRsntjExZAQMRiTEFURMMw5nULiMoX5mUHPXsHMgbtjjwYhXKbgrBHpmTTFdaFkuLh8SREYUMft",
  "key45": "5oJ6NH4jKBqMzUoYuwnS18TpWFYgAz189V5FDbieiedVAuTqX1rzGRufP7pQvGoMeF4D9gTP2x1L4qf567xfg1sq",
  "key46": "2mx7B1LZBhm6N7pbUESC8hBRJLtmbGxqMPdkXNNCjpqHvWEKvHsgi3qrCURwFzTCcgiGPBK34uZMhHnJGuPhxV6h",
  "key47": "4EqTuXTZxYy2VNYrEbmuQYScf74f6iER4uUAWF3VexAUaDkgJg5hBvyc1AP5L8LfuLjWxx45Fqip3oHE59WGMiZe"
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
