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
    "4Tx4k6Na6QZR7xZgtoPo1LPsQwTqDZYU3cBoC2GW7Z3GJM9XXqXmZg87EjzU8Xhuwn4T9cYGxWNe5JkxVeavEMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjrBAU6pjKppAVrQqQ5N2B4fXaLDtNyj7rpnpYE5b3bHpwT9ULzsptu53uqeZouu5gueRBoBu4hSxDce5AYvszA",
  "key1": "4fE95HiBmAYmUc5NFicEUmLoRnxDCTXugCwHmVpLjTHvmKZh93Vuu6noCyMyVZfzceUrAgimDToZSptegsjfjMau",
  "key2": "2CReXmo8tHAHrWAmbgLLX5cfv7jYXM4NU1kRywFphkE7zVU4Dm1AsUECJk5xKgQyULejJbLNMucWBTqpC9FWEBGN",
  "key3": "c1ioWTPdpGseAcitGTRVtZL1U8bdAo6hsz5kEnQWcUM6u6WG8AcFEwHkRZpQyULK8faMuCS7DhRxHD6tAjtcHL8",
  "key4": "5Z36wenQWBuhY99m9Ycy2S7kpvSouiQ6nPqDMbKo6g3e5jU65SRz9TJ1v5uaQExJu5FrXbMU1oSa19tps1spzhvX",
  "key5": "5uJshS4WKJmjtE39Ztxgbenix2qEwTggZCr5a3rjvqtLBNnN6V8BLdi7XRkpRLXnYYYmsHKQDADi9qEXiTuUNTc",
  "key6": "58kYeeo18Z63J7YHSkkk4BxqEjSpYUVEq5pSV87ZLuZqZUqq8t1qjFUYiSaRaRwGbPtn4G8svt1Q9agTupqnJWNj",
  "key7": "3A5pdFv8ZRXW1eYU9EfETseYCafkJJA2uED8BzNVqgdUT6LZvywDGrbqPYnB3UYwrLgFVLXgw3mMkBYAMg9Hxc9J",
  "key8": "5qEiWcqemfYR9rufXQy37KXHy4mUSzo4AoxkPLxdUnECs8zarrrrY8s5spNyKKZGoV3VDo1EDcD8cNC9UHGcxJ9T",
  "key9": "2qjvSE1A8qZDq1gQJ63iRZ5RrzE1Jx1Rk4drNYTo8NRLMvqqY6PvUyjyN9LLjyhHV1mo7bNAmTYy68c3Kgcf6jhX",
  "key10": "5nhwkmVbY9LrT9DT4RddSMuMGtudtWeuPuWYossqFpGY6vR6QM6kb9CLyuchSgnB4UJGkfKUs6F4rgoaEutsi2mj",
  "key11": "3mvvtRWcvLqo5AFPUU95BKv9HFiYV8tmVdFT9XbGjsMnaTEpyCwvMaWjHA7tXvdXDgFkmNhS8Xpc6xudaKbcfyxM",
  "key12": "5PmLEwpWMbE55A1TCUREXkFb1SWEocwTrQRUKootNmHPVXBHdvrez4N4dpe91j8CNLKbHCYawGVpqSxsAT9X8Qd5",
  "key13": "4nFvkdK3h48noiLexhhEvkBscJqZFmvYpf4KJWYZnk8obCHV2nGD55aNZ4jtWxixpVxv3XkFsQv9XkPj85PaJfSC",
  "key14": "2xKzwdVa4fekKW8sahFJPiRLUM12p9hZo7HAitfN21V3unSNjXo9ghtqjiJbL5RCif2FajoNzX11p3efqFTUQ1r6",
  "key15": "43KhCucj4VgXc8PVpyopzMsMxMNtGEthXiacP5fChCJvhWwM79iU3tQXF1mzrt7eWQsezQox4k6y1qWVtERPtuEd",
  "key16": "4PLvHrjU8brbHgbHckP62qAdhVR1W1Pdc9tbvBxprUzvGdVnnpEVrcXRXpWaBBCH9wHvRJMvhivc1cjV9UeaHtuH",
  "key17": "46NCSV3abJ3KZAd9PZAxUYYAKBcMuXSrvKyzPNsoUU3hzDGrTN2PsYLwRKvERCT3QCb4gwxSC7A1dmAAyTusZxap",
  "key18": "ZqSyR9DAmikWKiawv4d1hcVjUyQnaUi6t6jjVKivfmA5fa82261MhDrdTeQRMunT8tQHvJEmH4MagP1DcXjdEyq",
  "key19": "3ATE8yhsDhKVTQXULLjMewhMN8XAg5c6sbR9L9uGqsge5fAWHwdJwsJGEMpXRW3gBJTqNKHvQ6JdK7n83uoqEHbM",
  "key20": "62tNmWDHRmUrfb5haVJxLHoZWNe8YJSPrzea6v8g82Rh5y5qppm5WsNyq8xKqyyWfdTEbjrtnPQumWa2EoJTbRvR",
  "key21": "3HySiyxzis9KUJcfbHSmoXp7EX3JRzwitAntpvf7ySketuCeAyR2tRoWjfFsPHRejthDYeAnzGS6iunP8V4oDe5Y",
  "key22": "3HvQ9Qt83MCGDNpBtXY4DehaRH7j3Z4WmaUjP68RBRB1ZejqjpP2eyr3pjDnuurqJEryf2tgJbFs4idFQny6j7Ym",
  "key23": "HnxgVFeydCqfSmgQ2x9rew2LbhPFLZUhDWMezg8QFt8QsZtrG6aChVhv4QZkEnHCuvhGgq4EsjBprU4B6rPrxAk",
  "key24": "5TzK5gNpdDuLmNTXzdURkSB87GdRGTHyox5GeFtrwvZn3JDuEJQULKQXAmazxc3dN41e4FSwqPSbrKwhZSa9D38w",
  "key25": "2vr8VqE5MG7MvTmzxPyHF8ojSUXYRiuLymvjdXpip1XUKBWUeUU2SngLmZP59m9e9on1biytNTWBAxZ9mB2JxT86",
  "key26": "54Mv9EjY1L3PGfDrDFdLehscKky4DK8JkAo8pPBuwjUCYjCqG55pWp8SV2ajTgrp4d53VyTrprYDkuDaYAymT32b",
  "key27": "5nF85vR6EHu667fd7ZUU31nzaHNc9puCcgTrFCFD4AdmfjAK9RKaUSxZceZask5GAVHRu46cYfy8iAwUn4b4yRPj",
  "key28": "28abX2HQy7bpnLf2c1s4qjjzJjV8kHPodTPcC8SKtX76EfzSJVVNGKLHe9rBBSm2T1y523JyXgW8p2BjnEhNqhgN",
  "key29": "Eu9gepeskfesqJagt8WcK13XYwL741HYHsnkN2dN2wvWLAQohynyqUqW4xJZ4iDs5RTLWcnqvJcZn29ptqTwoPf",
  "key30": "4mVSJTGkLg3Mo2yiYGEhgKaeRBvDVaTY6eLEkSEnFbBrsbRzN24bMTACpU3JZZFhSsvkPHiENpcYBWKqYLPXEEEh",
  "key31": "2JaFNjH3NiCArxMX4kFDxbm5Yq93Srx1ddHop7G88CbP4VZe9Njjzk7nhcuM42LxVwu8fjv2T24hQ7Kw4gvsukDz",
  "key32": "4NmAy9skFcqmEZqgxVTrx3s2UiC6iyP89TY7EmrrtZWVQcaaoSFHdbEcsuEHR4SMyMzuHRMqCivbWkvBKHPHB6r2",
  "key33": "5NvkAD34c3UayWoGYv8S39UtZHtzRfQwCjw3Rf5Ptvzk8U2bPcKEVCF8dx4AdNWEQG6P2UWpdQSt6RWB6AChTPFT",
  "key34": "3aLrG8t1h2QuQhfyoGjjC6Y2nC9fowCLCGa7WsoG4mnHy4yPkGyQq5rAfLty9UwFeLpBvSHxps8o3r8bWe5vDx5s",
  "key35": "51Wa3uXfxc5Zr25jkpXaF4KPFmtbYWmisspyhkKz65FdmEn6X8uQvkFWiTTGtFRq7E3YaC8eWBCxD6CAcW8X3BNX",
  "key36": "5SUwmV6UhFMFbXwkG5Ug8AyexwS5SmEYrU8aLKEmDHtPDXsKkkWVybcNmYnfggR7sewmvWskUugVpBxq3ULfF545",
  "key37": "2ZwBuQJXGbryc1f2rJNFzzDw2cwNEBX66mnPCWv3wpEG54Edtz9xQBPviudKFc7djQcpdPuPyuvCxBzCvdkPLvCt",
  "key38": "2oBwG5pJq2FV5nRNVzrLGVD8PsWNDpma2vM5yxPWSH3TBL4DGMeUv2uuUEVzUETJ8YKZRmKXjbiDoAnyscH7nktg",
  "key39": "5w37SL38wkjCXPJhZRpMWXjch3DJFqaoq9y2SyyjvQRQMeNtukoxm2HUCkdKFjtMcdMMrbUxV64pJdYQpDC4vEcG",
  "key40": "4mwQzWvzTZEcrgkymNsnoYaXiuvg9WUaB8nBCzbrKXXR9VyYrfb1v8eRA4sy8wSQ4i6EK3goJPsc9BZGybgBNXJ",
  "key41": "2kbftMgEB4JeWW9jWmLdpNpxrVfAXSqvjZddU4hkZkLwugi68jUeK3c3iipZ7bGLvXuogNCVDWoXJaUhK81Jmm23",
  "key42": "5ry6oyfhqGpPQ3LVd3Wp4dwYXXZyxc6uVTwQnfQvGAMJbnuwQ7qRmyQ6oowdeQViqZrxHt3pXuQrUcCb1TsrKZ8z",
  "key43": "4N9hm69VhABrU5Tpo3Texdo839Qumstfwk4RpanN6NfYCenS6KwpwkzrpB3cfGTpKb5sFQwKjJXzNsRpmaiBMLNT",
  "key44": "4gd3gSvDJRZSKCMWRwr3z89PAPmThEUjf7ZG5CrDdLwpHqN6gtXoNzYbJ6QA6EzqvwtA6ACYvyyFHwyx4Y4QFVDf",
  "key45": "4rybZ8WRPaLw9RNUKzGfWxHmjVxEKkKgR6KaHGqrAA6BypKzKoDw7PXx1tos3W3jH9uH1UHm156pU5E21hWw7v6h",
  "key46": "2xKCXGX7ALjXjJfYn8FN1637pJBZo9iNS3cMqLXqStb1T4Z5Y5QHnmH5hCD64tFw7vDfpZ5UgNyaX6PYkzkkvRa5",
  "key47": "F9bHwdFbHGxrF6hqwJFJa3kpF6ddqRBcP8FoFioc164R9P9L8sRzCgiyHexzM8pGWyerZX9cixVMNBG71RitPNy"
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
