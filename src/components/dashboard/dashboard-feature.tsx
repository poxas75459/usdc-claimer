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
    "5i2seEA9LGjARhWWkB7sLZ2gVdXtRFaGhGT3Qbah8KLXNhxUvSmkVKnfGpkZDj67FFjGXCHJJ1opVoT7uZ2dfdgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HW9WpUybmJweZQiPhBpxawiMKuK6xTQ9Evje467cy2iPVJtLA5WxjAC8nZGZMk6yEqhsjqQ61AsyqaABqp4ot5",
  "key1": "2H1kqrwRu4PsCMxmaKiXnNgQwX9VhCd85z51gHDYFikyZEAbkLrPnDupyhiJEpoKZs3a6HnWCagRZa19XLYYNmCC",
  "key2": "3ovz5QkEVBBSyUMMCmKKBVLvtpPCVFaMiDJnaxoHZ49BPew7Dvbb4LDt8Kpo6XpW7hdEXnVAbwkg2wRktXC87SPh",
  "key3": "5jkdUVe7ouihRYmedEUxEBuNzjqXNPZHdxd4Kq8MoEYiy7qd9yVWfkfPdu2NBjgQ7YQopeKTDswB17sK7RntuuVy",
  "key4": "3HTqdheRnFVYVTeEt9Bammga3wnk4e7kTk8qFCYTWXJByLvNknurDgLcRgPyZzt8emDxHK5u14ARD6M2UF9zcv4H",
  "key5": "5wPGtcoTPWQiohgpcpvb5LdKxSQks7u7BK9gkG3yZQBi62bJW9XMn4VdDgjJRrRtt7R9snyzGTZGhoitD6jv2xaQ",
  "key6": "uZufCNM188wMhQrREvKw3We4sgxQ4tpuMXkmFafSBDax42UijugeANojfaZmqUxiC7KRGQXCbENLpebp3Li9pwH",
  "key7": "5WbkmxPRbARasVfD7iDQRUeSi6qHrCj4erLCYDg42FN2GzRZuC6Yr9dvqE3iSn5NNUoaPHP54QiGj8vk471YYWtg",
  "key8": "5n1oEA9uXByiV9qPGqmWbaW2nZrXKX4qe6muX1MLZnMyUX39SJVzc64eHbYK8AE5QHQ8DSBkoytoRKmPfgXKQ2g1",
  "key9": "3BSffaWcwk9pgAQ8XRDfR8RV7zYb6UMupurQSBR9BQRWZ8Q9Wds3TdiGGMWqTyFdZB8ck35YGC9Dq9RssSh5DQwv",
  "key10": "2mat77ksu6V2VX8gFLje3YULjnCvyNEnNzo7vd4NCw1cWeRfrCzCiNAMQWtmdNGe9AgMDCg6CubsA2UBsTL19zns",
  "key11": "5caZL2yuHC4gSdZAZNGR6ceNVNvjnrcK2nEa2KdfsW1JU4o8RvGzjpGoRAByWzKZ5t9a75Zv9CUAX1AuqPWtbSmV",
  "key12": "om7cdY3GC2QSCDt4h3ETDqPu9Euy4o8LDGUMKpLfSnjhWjTHPccsvUZj8NFFWdbgXU1H9x1ozNTYwgpzpHjxRKP",
  "key13": "3hAK7hWm1tvuNvTSWgcGyhouXBcfgHAMZXuMBPH3so36n2xtAjwadSHpCgbJKFt1oN5h3m9uUFdtcgSWMaRmiQjH",
  "key14": "5oZevF75D5ByJBu5UzbnJmaVw3HTn2B1LhfLzPYBY8srkeUvRmiUN5Dyn9z6istZnejxcszkP1fobmHNxqMGuW5c",
  "key15": "mFcDGqixtYhAECdaWJPb3tm4i8GC5KGnYiA1GMxQtC46V6mMkJSCX65rYKRb2KfkCme7JQ3azrBQLEtHJ4G5vFb",
  "key16": "5ubh94wAmxJpLfzKBjusShmTGUH95BJbyrdHWCP2LBxoVwxaBHWdzn5M4MHYvyfDpeaX86qcmcAWi9eFKrrZoToS",
  "key17": "3jEqm1VMmokYpfNpBuYrpnpmofdNR1HULdhKu1Kwjw8oMdMJwdpndjidXvjDY3HWvx9WYTB9RsynfMWKD3t2gBVj",
  "key18": "38nn7u6puCDYMz47WCgPZsviv7fiJvSqPks4WNoEUsD5Z1dB4ftyee5YRnDV4swFXHJ8msqdDxLM8p4TyiGMvE4i",
  "key19": "2t4CqifeSDQ13u1QABcASD4mw6QXuNPMxpe8aYTD1gWccqjpVXULtMtC1r8WB14zof7P1xq7PVkLyQS5zGx6wBMK",
  "key20": "5j7J17fcWoXTH2XuTbz83uGsbcoL3eeBqbzcxwZsMKYgSxg51F5UMbfFBHWY7dwvp1FzzKPcgiweWx7yaDQfSVDB",
  "key21": "4DiazDjbbPofP7Nq29UcFKqC82kUyVzjji9uUDFa9jZzuoanPbZ7ZaPAtCLQbn8EucSUSrTgKVJj2k5mdUQxt61E",
  "key22": "5FaUjhzHjA5hJMcpy2KKrJSTdc1uvdAAnWdzdVvGdQbs2vKTvx7FMTzPAjQo8oiJB5JLgEnb43KcAwMxezDYBfyA",
  "key23": "2YrACEPMm15GD1a7Cio1RvzyVtECuPAmaKYKStJoCvR5umGp4HpUQ8LkWMD8s95BbtFfMMsKiNuAtjNXmwGVreWF",
  "key24": "4ReQUL57fWgcnBGSLXwo73jpSebJ8na9ypCFXUHGAVU3HEs7vUQvnwF4hbZrL9z7xKJpAKpMWdZJk2PBXZPbLpn7",
  "key25": "5PjQm6ZHoPB4gtvPCekR77FGskwKVj2YAF8kpTtdc3AM2TxZL3s2wxn9aXewzqUWZijuwCwYwa2SG4vRQMM2oPiz",
  "key26": "4KZZGz7nF4PqwFAUVgU99v1V3T7EVThrMjmHQs12WKZj4ChwSWSeAm1j3Dy3VP32zUXs5Wy4RkW5TgxPJSPkyKHA",
  "key27": "2QANs5G28G9NBEVvc4SHSGLAekt616BWZzRvD8nSmF8krmXcW4XLcrPyW2rMrM7uqxjR8iKPjTohtk8ezbtotVZy",
  "key28": "2KjfcCUMXcKDia2UMtUKdRVZbGPeDKTKNxS64H5FH8yBBk1jDu6eoUSpWgPHn1MsaN3UZizpE7BD1f9zjpJkKKAD",
  "key29": "2ZNLusy2WvARSx7ygQbHA4NRrithoShQsuDDyXHQ7Zkme1gjVUJnaaWFtwaWwDPKMVHML8tpyAjZmoi3V3J13o5G",
  "key30": "3G7P13u7R3bfRZ24zmFJPFozsZ6tpbzfToyufEes1MksAsUs8zjoUhH9xFtEeHWWwXWYGqdeehGKHgG6Y4RgAZqV",
  "key31": "3x9pmxH8CMqi1uTVJQTcVjSd4FjW4b9dtcc1aBdE6FrQMSD7gayexXJQ2XioQ9cXekDjmZC8rzsevtrXhGyqipVp",
  "key32": "2sjrvvE3DNwLpTAjQ9kccb1abUUjRQboYefRJsBxG5f1ratC99YweoF7UoMg86YHcWveLx7b8877ZYzh29rzjBHY",
  "key33": "5SzsRNv1KfxGyXB3Hsqb5E95FCbhQM5oa6K47ia57y7eQhRMzT75VjC1f6Ybp3jgJ7wYmX4gaxJnpn6H5S5Jw8BW",
  "key34": "2DSNTqNKRASBqgLyQq3Qmfqzc6P4xrugE4a3N11YgKVXkbvXaMS8GudEzABahsGpYPgXfaoc3GLa1RjecuAN44rM",
  "key35": "5cW2VzY8Dim6exjoEZcKLWEpdKFFejp1QEXmSQTeqyBstftVdau8JszZeDUbS2tpZLnL2kP8EjnvatfE2MXvxrc2",
  "key36": "4Q1wyiJvEMDpFC3Wbw4T9fk4p5jvu2Dhi2MdJMwUv1EyMxjKNNVbi42eTvDPE3PU9JjcPShamnzQNorog7BfErGg",
  "key37": "2UzrrQybMWXj76YZGnvik1MsaVQoEZ2rs6ik3qqL8QMySCKgmh4iG36mHhJbj5boziM3naN5Zq3LyspwTrjA98NY",
  "key38": "4ZYiSfzLQk9yx6oGThZsc1raxGmETHqCZCfBYCAyio1sPv5coKrNBeB2DTBXZimCnGUVhY6ZSJN5ig5CsiTgqkaB",
  "key39": "2EyFmah27xbop44V9aPXSAjg2DpsNvkixLUMNdYi9hRy4LDCcu2uM7TjnnEgVKVd2zYuYHS3dxKdcpdegEjHctL6",
  "key40": "3mj1xeh9p32qhu5xraHocr7B92a83jSLA61rx4AY4uvNV5fWsNc6VGHrTWJbRLec27D9jqTVQcULohnxTq69jQ4m",
  "key41": "3Gp4HHgxX5BQ1Vfagaswg6KgSaeVnsv7ooCQd9QcN51uGmNW58xCzpqJrrdqhUYncLpq4rMGZJ2LNzbBtDAKkDSJ",
  "key42": "2SHjYrS1GTBFBQ12xFLHD8iBAJxHvV1k9GJMrkkaE2z7WA6XnLFYvNqGuHTpx9hSExmASaZuhSsygZYmwrHy6Jdx",
  "key43": "2DEZAg7kp37G6sxngyQkqWoNGxTPtjoyhJYGCSxxKm6bojgMKRPbL16wn7pqQixkaT4KFKiHMBqTkW3sB4ANyiRC",
  "key44": "4C5prxjCYgP3DraXhqeu2SSZcfiwSMn934iFQv41WxwUxq8FTv42dChzyiC4jn8TaxUhu1NGrfyxikp45sfhH6m7",
  "key45": "2pGVmHt6odgAGLA7e3qcP2AWFUemV4Hx8SXmfNCfKyPX3EtmJLEfPq1UCgj3ofMuAsgJYiNfhpCP4WD8hZWmD2dB"
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
