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
    "4GufRAs5JRMKkng94KDQ27bx1ii2sQz2aZyUEKctJ1yd5K1KjFE5WjTChB1XssQyUfdPiZ61MiBinVh9QzntF5PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592bF9gPjugS74GHe4fCku2h9A6nf3exw61afS4oSrxDiB7EXHostXFXJfickehYykWLBUWypnDqUJLWNehctSw",
  "key1": "5USfv8oaHsQKMdLfSC66vQvT21UejE4QvHTVnes8DUPfpaATV7FLqBEJnUtvbir4p3Ez1wwCbnC7p27dRuPSvrjt",
  "key2": "2fZffFWE1jQaP32hhu3L9fHv1bt62xTDSV1j34D4VPGvTUigD4XDz3YpxQ8uSS1myJxdA7fGzBhoQSizXbJmMtfW",
  "key3": "4uSRss5XV3NzzE8dPYdcLzFaDQDGZSfsfHDYGPXkJh9rysufE3YXVjZ5TQCQ83ZWpsEGVe51ktdcCKKsu1dHsJgp",
  "key4": "5KzouDqsojdWnCWLQ9NL56hrpz4i31nHAM8bBgS7LK4jLKX8uXDL5T1VgFwoFhterBEiejcRATmZJgDG761jLCZC",
  "key5": "3Ldog3dSi5cyXeCEZPfFBqEvZqWsvTLjos2f9StNLKVGCK2aJQ57GiBwdDKhuvf2z2a6cn11sWr9HhWT953hCGdv",
  "key6": "2cGu3WhgQCYS9Pz3CMkVW6KERzUGfyM177rvV27B4gBN2o1hDfSkfUMtrp8bPxhrxVezQZvDbguwWJrDGH3Zpsuf",
  "key7": "HxjzTzE38y9jdJzu3bkvScDU4ujGcUitp6kAN95sxgjNm6abPFm7zFoXHKMChvBAzVz6bWGZcYjfVGjaagfbHM4",
  "key8": "4xLAW7AWEqyZQnJhiq3HtDLB1bjsXfy4sy8ekQUSaNNkUAW9ZCiZqE1j83phyU2wNKaYNhNqcSqqaKU4ku5ZzDDq",
  "key9": "3czvMKAbqbtBhw1KjWuAzhb3HyuVoKfmPUm51gjx85nR18xNZqTkgv4rtkKgqJfz5aFosFpEJuf4KfLWZVQzfuGQ",
  "key10": "4tov23MwFDuuc7kfVNGemytrJ6G4JJX76yX5cXtKN7cexhoosTtP2pcVEZRAoBGmtPPMnS29bQobVANTyiLTNVGw",
  "key11": "34tvASJ9agrsQ15zfMZCDPKWbd7yWqAn8k6VsGxQQML7r8KF5MrGMBcNS7mNHnfpfhdDXXW5H3aptk5XpHne53TP",
  "key12": "jQXshZQcPeD8dt7HQNXwwZVmYhBr8Ricb2XiWmrq43sGn17UCxpeAtRU9BpyVdzBnCewU4cRA5rhgeH9YAWyvnu",
  "key13": "3oppXphKoMVUWDA8KTq7iBUTLBgwYYZFtn4rWWMw8FKpWWATx3rfsWhXLGcwBraRxJV91NgdprgXjiBfmZRfB49m",
  "key14": "rAKaYyr1FPxAmVSGVY4Bmjupk5wehTMzYYnCFMrfqMHGwaVFhc5Qe86mM8Lq18oDzKxCvMHP3dt1xEy7jLeztwL",
  "key15": "437HxJ6pxLkkar5CLedxWgquNG9xomsSy5vqeSPy35kodHxCHhGdg9HnmrBJeZ368kfaymrDHCtd18EHBcbUeH7q",
  "key16": "qAE9yJSZyyoX7NkT9PqBC1McYUh3DBzYLF8DGZWKtzSzFSHs8xxaQySjRxRpna9PeRny8GQT86rhYSgJM2QK98d",
  "key17": "4B1pfNvVdyxX4x5sBvd1tHHPSmPyXqNZM1Kd1EoKnE2MFhqgTjtscjBjxZBQDeuzETd4MxMQfRS4irShhsLT55h1",
  "key18": "2WAe18vbHnqyQGW9Mwd1CqmUKHFaUGgqSPWq26HScKsyJ7mARpNzhSZTbmrWZJmpAxtpRhU5R8nDGmCgZRYdJULZ",
  "key19": "4LZgXSQGDSH12wvAfYmj9MZTZzRyq2T8EfieCUfowa34uDgFeDiWMhxMxNpkRU3EVPsuubpHwy4cvnEAhNoqtuKq",
  "key20": "YgHHHCuDBPQ6YRA27zderU7N7TxcZzGXKcuN6uvv8wz6Tw4AFSjFkPuEcSSRebUzCQPYu7XBiwSuCcDmBCGrCWm",
  "key21": "4XfchXCpqEYFnDK5gAp78oKp3mYDjVYF1iLrXFsjx7Jaeis6fhfCivFyZ8tkc9CFihuYZenqFsXumFcv5KR2ce3s",
  "key22": "3vebhkiSSRvPmdMgvX2K2mh7MbJjwHbxCGnRX1aa9Mm6AbVQaHUNoVn1VYxaGbRkRqGZk2V8LMW6kmfTmDrE1UJc",
  "key23": "3sh1mdhJ4yAFDxo3gB3FA2XP46UXaLMvEMMqT8z4FF5iPzVwFx3rbmGjuad9TxEB5Jw1aejSco6jziVjgNCT91cK",
  "key24": "46CLHDQKVNRvMcUss1QbpDi2mQSgVe1iG43zWYZktjNUsJ8T7wUpzLxEGmazWt7kUvKUqkZGmepXYGug8MUpY2xF",
  "key25": "57m5LLhNvuJTpiKbQndS7DwJPMdB9ENDhZoGhV4EMVHdmW2Zbo3X5khwfSRXHpP96exc4Dk8GRp1JF1oKgdBzwzs",
  "key26": "648vCe4HMS2Q9u4uuaujbNP8bn4bNC8dvL4ewooVKahXoA5heueTtmpbpTbKT8ZQgp5szx3RhLUAsRPmKGce5ccY",
  "key27": "4hTiUJWGeEqfNGJVBWwmtyFjn5PuMQSoPVeU9znrfSC2t6ANLChUYADV9KhPDfzR7S3tz6XegLcaXLVL8n8PsKMQ",
  "key28": "3Xcb1rtschqAg1fCdqyB8CJE3VvWT8zrdwkssRs8oDMt5tJKX1sZScSH86V3PTLQ6EBtu2Peo3Uxz8G7gmQ4Z35S",
  "key29": "4Zrxqq15WjVmPgCvjsTAJSqPzGT8UFb7PazfjmPShWcNGR2caZV6BJeBCy7Pbf9w9RnfqxQmNq6qAv5iYjmxcG9N",
  "key30": "3gtvM5SL5Bosc6cpvk2nSXuX6UJPa5wYoxFRXbwK5pQHuqMqyguTmBKaUADTqT4kicPixFNdRV8yfLQ89Y4Ko19o",
  "key31": "4fYg2tqPqEf8NW6VWc88Yj3qC8xwKDGdbjgHZvsA9aCjN34i65EqSsikFWt4yEtEyPCfMxYtnTArpYVcDMNSUURm",
  "key32": "QGc36Meoc14Mta5oCW1sA8UTVQ9ZCwzk14WxHgs3XQ8mxYQmB1tY33Em6HZSdUCV3StsiVKQ8Xj9Trwb27g87ig",
  "key33": "52b5ZcXuNJoYWAo4rnG21PpbKMHJHv8WQuCX4hvyKWkNb23LU9Cn4J88CxvD4SbcAiUevV84MaZagoGUdCf1AcDZ",
  "key34": "49vf4kJH8rd1S713MtDFWuoC3wrVZAC8w8mszw39Ge7vXwYzGxaVPdDz66kDybdPw6AQJ6euaZueVGyygCDvRgFp",
  "key35": "3y5znyk1jSUsjaj9NmHxDhkHJijEtBjGugshAshHrJFXSH4hbLfPqusrnLkixPxTzeoGevbp1uuAZXriL62h3Jtw",
  "key36": "2tMwfbhWNh1wiLY9b44p2vnZ5rEiiCU6No1pioVSqqNxEGBooawWCUm3PFJ9tv1wdQuxjihAYjrJxCNNm8vMF4fK",
  "key37": "D5fQQJhduGGQEqZoFQivK4tot9xoATPbs6Cun43tdNsfUaGwT7awtKgEtAo5Lw5Tuhgom9JEEDcSNCGA8kW4EAT",
  "key38": "4iqr4w3APfsP3C8WfaC8RmGwbKfyW1pUGzu21rgLvAKjfhnk98ZoJrQqJdjvazex425WXPjGYc71VRjBqazPun1k",
  "key39": "2SsLesoMxxw4SyqHQwDSJ9Jz7oaK5qY4XjiyP5s75upCJxU24eQprgRkXJebAVSnY5EwmNHKriyjriTxno9iGuy7",
  "key40": "L8uZ2oqPhvfbPNNm7nWayBgZhwRCePKoYAfZnGXqXnm5H5PpJfJccoh1xdaNEUK9A3ttgt8Ke9s5Tj7AJ9Htk3R",
  "key41": "Bts2jodpAqXD6j2fnyzVkt36yNfx33zkgWbtXuKhsydwNSeBAJfPQZxebcmE3W4X5FDCswCDL3s5cbeuk4VuFdb",
  "key42": "23hy9KbafX1ztn48NgneNxW9vH6QXnhftp3bAugLi55rR53XNEZB6PW9xzbJeGT67rwbpySCfSwP651yMMm7sPPe",
  "key43": "YfnniQxMqXNEeTZpo48AxgjR7Fc6RvsTjyURsaT89aKmEkfkgo8VS9Te8SF4ERekpm9yPQ9xKXyA6x121rTWikU",
  "key44": "4JZ5nYFnpxRTQmRSAgZtgQYLKDMW1SdQ5Q3Sk8bcE9bsUumDZHzQuazZkdYmHZNBXVdicTaXgB9xHAts46w1x1At",
  "key45": "DayahkZzC2yWa4S5vyKXiMDS8YCsG3gcAYUxvJXspqynCLS8Lq3rMAS1qqtk5LJcxSoXn55SEz5kdmRM55UqVCN",
  "key46": "3UwJ43gRc2bi2zrdZmDp5Qw9wRD6KLHpqaqi7oZjsyrzc2Psg4Wn33icmXtZzBfo2MSuB4NFeCgKsJtq19BgxQ3r",
  "key47": "AtgFbagw7kYCK2Br8mhzd1j4txYeycAxx9YiNEFYWdfqS2Mugj1L61VPVEcCmkRNweHsEp1YiVmA1WeHcTmTUvw"
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
