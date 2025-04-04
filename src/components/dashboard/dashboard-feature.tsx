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
    "ELL1Dw1H3Px6uS7o2BHwQ8nvN6Dffg3Av4U5R86xUfMDNhzKAFvGpUYnNjxDRKkd4D4hh11hK3BC6WZDEmp2Hic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7WB51vTsXaV5hoUE3e4k8jVkPQfJ4z6KzCnEAkmDtTu48b9DPnFaA7SroEUstzUyZ3paiA3ivjWX42U4qMUWVh",
  "key1": "5hGW1ES9xV5t4NMZzMD5ZeWr7HPMpDVhtnPeJ7VYb7p7Ke5M4P1Qss31eFzbT6JLczK1aS1FLN4rWKTE7zaTeyvU",
  "key2": "3zwymmvDHKMt3ubVpDEVQUyDT1aTt1ZDaiCBaBQFks1K9oznH8LwXAqbBns31Feq3WxVd5RE8D8W3xgEcJfMkyNf",
  "key3": "2NCh2rPhEUQjEM3o2sGeNmPf5W6knm8TB8FZ5hvQiX8evtFaWEQ3Q2NekcUsLpRhwZvQ6L2SsNXUMjPuKFDMpzZg",
  "key4": "2YudDpcj78wACUDKUZVByxcqCHJv4QQmqvGHsZPFPuHXCA5M3nQiVwELYEa92g5RvKnT6aji7tvB12GWx87evFn7",
  "key5": "4GskJ6q1bDrW8jtLppDNQTXhz4iBfVWfyEyuBZZdQzYb3xBHrBBUiBfqSSCxPusFZBwR4bZKV2HjQ49oAsyVYmu7",
  "key6": "2yooCe49XzxdUna8khq8TCKjeqgbSiJwBnA25oVgqKHawXeBzXWFkhRnnsPpGxRCEcvHyHxyR63yiNdrBXzJsBac",
  "key7": "2QFuuyL2nSU9V4D4fdkC1NuSYFZQ53RfzvGjRscMcgbVAXSKbTNx3Tit6MjNF2CfojH7YzmpNSoY3HEfSXBrcs6R",
  "key8": "4hWeMKdNLsNTB3CisMKDiYypBwwTuqG5wsaVrGoAPUjYhvra3D2fGvQXq4fu7Uvpa89Z8sbKjoPP6bx3jLNhJqsy",
  "key9": "2tdt4uHv25BmUEk8tRdmNhEEdZfUB6aaQEjiNj1LQ4YthQLXkKdDUeWdNvDzbrwXDfyMTYgWAcNuiakGyC8M4K71",
  "key10": "2tVK9Tu17qkcQypxP1XPToYHsTeXfxytbZ2Shw5fVRTeMsqPTyDGySx1t6Liew6Ujp2Fyj2LksFknQKhTuTvMP2w",
  "key11": "qV5uvxkFZr67ZE8p3Wr1tR4Bt5dHvEAQ2wiXhmAsMkaPdgzXsFiGJ61Cf789u7QEPJBH9nuf4Bt8eb8ej9FJshT",
  "key12": "3mCEcTjG4owg7uij9G78au7BoFTUuPp6VK7Gh7SfGNH9HBiJMhuVFnYj83zLhuHSrhKN37EHxxonp4sjsh536VzD",
  "key13": "2VXt8qwzRVdQrBKCZSuiZKat32tWxTi7cs8HnHt6zr5Hkh9FMSeLVUQqeSES5PJBtf2SzWGNxmLDtZoqHyVbNE4g",
  "key14": "3mwN2JocLvbmLXgLNayQTpEWYuurV2hnU5JEoDrEzyK8znhFJYYX4Wc5E3Qihkc4FzkuNPG9WG4r37eYZaxMtSHU",
  "key15": "CnuQGgBx5csHWn2NK81yLqmMr9mXdfRRct5f7GKhT1c2c5p9qFw2QardMYibpuwfuFPSQvr5FmtYQXzk9qpPTuD",
  "key16": "5QrDawvostU85svEPXN3w1VFrYac6HZZTygrBhevjJ84QhXUE9aqWo42SU3jzQu9Jbz4wofwgnhGUbqdbMrN8v6j",
  "key17": "3f7oYw5QUHdhZaCWa4pdaGZEDWbiLbkqiuJwKWcyqZPCPM9f8a4HDbyGKYmfF9QzAS96KapdyRoc76zhtUxhqL3N",
  "key18": "UtnUTRqr3BVQXjDwQjhZBT3gzFHip113c57JAnFTDMC2tsCiTUeKwKccFAPEEqqj6FWaZsUP5ee5KHRKdVGaf25",
  "key19": "4XfCehd21Zc5gtKKPg1uxg8X2G9fgCyWbdk53JmjZvawkJG5zMn3EcRpw4VN9QWzsniU7xAkNctZiiH3EZ17MtWC",
  "key20": "39q67RonAV1EFyMKvLJxoCBs7YwRCQPxbytSDmuVjH9cZtincA3AJFvZs8t6sfG3QQzRYpv8T3yNCWoZHMUEL7wQ",
  "key21": "2yKtihYshKj9GSL5TiNWfE2PuWmJWGeRRDSrBExPDUaRVkYEw4AdcB7AkYLsd9GMVYfob3gLkUzZ9Z4VgewDHkRo",
  "key22": "2SQt51pPeYjCseeKB1QKnAosH3Mq5fjwiiun7kkAUYarLg8oLxEDAhEnD9oj9iVpK1N7xGv9P7kTn975VFbviRA4",
  "key23": "4ZEkqxQASmg8sJFSCa2GGvs7JtjhN8tdTd1CXNf3kdCMkegkbMas8hja7qQ1bqtTE6ofQdRyqcEcRs5T3uHwj118",
  "key24": "3cj3KGxGwVrmAjMUEoz3tLdhVoJVNZgQDKSkA3MALuFZV9ouykib6CdvZekJRKqWkCPFGceiiXRQwwo49hCMAKDa",
  "key25": "JN1UnnZxXnj8g8KMkhqD18FkJvMQNcnWAyrPswMns1VVBcjUNRpHpJenr8RThv1JcgU3yBbqAYkyYxLXoym5y7X",
  "key26": "4Epkk8eqyQFEHCMYTbaj2YYGPVtHW4N8FBzpWTJZpFfZVPxkvtrtEB5X64EtkKQNx3KHEeukuDGYLKbWmxRQx7Ho",
  "key27": "5sxJUcbmfohjhZg27tXExeQnFzmogCExgv5YnannBDss9fhbg1CBtXGj8Zom7xjVY2n7CZ5qsQf1XWHJM7QXLc7",
  "key28": "3aCsM6LiFPyAgMcMfrSwLEcoY4t5PHLJkHpw7cuot6PKrxWLZ6otEfLoxdC4LpfdxXjaRmvugsDtvucQFoiBDu8G",
  "key29": "3Hek64sY39Co2KzJxoXADSonAeJxWQxQkq4RFWmtf1vxFfP7a1Pcsu953NHgef2Zw1aPY9N7xt5kjS3FMAUHona",
  "key30": "KFxLsJkyJC8vgKntj5oTP6Koir4oELCf7WJGRLNKiRb4hqqSR8WbqinbUCso7PYrUZP9YbApdkrNk5Xop9WWqi3",
  "key31": "2iyYHQnJiScb3PshmHKnBJCegr1ACYhqzgK7Uwo1n5wqQKoSfQPUG2TyCEmRRjvrhETgFSEK4FUC27P3x5EdCKcR",
  "key32": "2HNrhDeBYisuL6z8DDxTQJ1S77DPufmcfiqakufVRyvSz1Ra8MUpRdbP5DfLjkKJeezzggx5bWWUgXTxa5NQiWLo",
  "key33": "u3dTPNVR3Aqj8goCkMdJQKP5N4oLEHiSYNZwf457RysFn88ARpuqrCnXMwT5HJrSi9n6BicR1mGMCBT5FfkBNWY",
  "key34": "2DrJdTQw2SnrM4748FduZeXRLyYwmCj2iAqoSpjHRGp7wXgZERoSvphK8r9CRV2wyUckokTDNLXLjfnhX8qpLWEi",
  "key35": "3ku8pVwAcH7uT5EqF5omrGrZyi1mFV7HYeUAgFuCin9FfZuXGGmiK2fjJGdxAp526g5LJJxzcvL9BTjpwTSLZ45q",
  "key36": "2SviJk6rPJ9v5YLmdwZXpFjnUoovMJ8Kr8bS1MG3ysQPo3pXCiZSRPQA7Ypw3ePxTJVkJV1YQw9ZaTgRwLGPWJjD"
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
