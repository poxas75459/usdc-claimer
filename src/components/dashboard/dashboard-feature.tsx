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
    "4joEEyXTAfGV99KAiZr6EFGRzU9URDm6X7irHrqNxu2FzR8zyL7KQRjpTLEY4NkBvUhbgu88iSdLoSP3yMBybxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWw9RTruVoWeaiVLsse4BM1shAjMhkUvhGVQRScwnGuEALjvGJKVMX9h2pxYym8wdamH5aijb8AYcTSNCJ8a75G",
  "key1": "oqCf8M71c5h3ZjxkS1PstJLwBT9dy8rE7BbRQ5jcbtiukT2VKqW7VVcorxR5uxjGsFzeX6YvW8RymhBoZ1EtYw9",
  "key2": "46QpP3LauyUCZF5fUirHeBRfB86tUkGv8fY7pA7msKrCBXpAeTCSAs5r3WGLDuaBasAmo1GHHQmn5koP1qyjNUsL",
  "key3": "2xYgtA1MSSZ91N62r3HD7ehSyAqjPdJCoRt3njNH9ouuYj8gn8zkSPQMbefqjJh936x9g5UVKwhNr5QBtAcSiEft",
  "key4": "43dT8pvRx7ae9RFhuPxpBWD13z9Wfb9Y1QQHV4w5hARE1T8vtvUrgeJF8oHbvrcBm2QAHKRWaK36VQuXxKeWP9Rw",
  "key5": "28LWeoxWExkMe7rrH3vs7q5vbAPCZeceAPMd3mDamFhShXn5G5yixHcLtjYJ15tG7zxYYS54BZRniMfrVcowUKT3",
  "key6": "Pd6qCd5YC5jm3C87qQLgSHGEEdyG6XvWWkyM2PAKUZGqkomJCRXJico1tq265cWKEpdoqJXgUbgLWAoPDXkGZtZ",
  "key7": "63XGKkip5HBBQWRmbLLaz7wdbcEpqjB8LRTJYsSCfFy517Y71EQVkEv9d2n7i26sbhGEnmy612QCbUhWD3upVM3M",
  "key8": "rLqCYaKbVczjTaib45LawaSvZqNsou4exQ9o92bhnYKmwsLiQy45vZ9so8GDejpH8kzx58FzoPaPz7SBQyENhgg",
  "key9": "5YUes2NaEW5TJofAg1aLwTX2dN3FVTGpGzUkY6oc2pQRN21V1PrCCtvQQVMo9gWhUqksLBm6TVaPcc1XQExZCr6g",
  "key10": "4fhv5VNLQBAEPKFhUnAAQmdKMEcEpx9T6f3k5pixf6ZGg4Cd6JbD2MZDbNHUwCxPWEcrmPHPnFNWzZ3tZzoPrJoq",
  "key11": "mMHXAKM16WjosobPQdG5bojhbmDQfFBzEA4yCEdRyqn3p1i6kNLC74CfuVWmdXKSECoysSE5jEA1eXHxabnzmiN",
  "key12": "2uJJ6VhRTsid9BUrsivBUyi6yvf4h4JwBHnfZtiF74AGChLiX6Q9sGoZq79G4jeS7vbtjZEcqWUEyeYR56UXtBRt",
  "key13": "5gtwrqvfpipjv1FBCuKkxyqcU5odfHuWXz21EFrFx7WAsSnqzJNrNksdx3cHTGWGS5NxKf64hM8hx922SzMckUmp",
  "key14": "5N8CGrFMP3tAAGC1tnBHpsbYq4RGiTWBAad1qG7QyjBrFsUhhgHA8uYCGbB1pRJ5bY2RNqn7fNA364Dc3RqmHJPr",
  "key15": "35kwCD71FBnMohtAdVTioGXdyzzkwWsBUuVWKaGLuP3yWAAsd7hLZivfBnQv3pri5Z2jv4ud7m4dQ3LsekkbDJHB",
  "key16": "44fkHHzSW2rqUVmYKpNWw1JazJpS6Zr5ngC4TfXtwCsTRuVUkR4EmcDRFZbkDbjuSUtEgPkYr8SQjnCsNu4GazBi",
  "key17": "H3oFijMec4txgPy2Zpwg2HewEHgpmRVaFmK9cHuqBd9bL4yeUDYFmceXfsG7ZfgToaHZhqaYfMsbxyroMLYrQAt",
  "key18": "5dnEroWqNLjWaVsHoB5XspVtMYDEwmA2gHdreN2iKLXCV1ySQzz9bFcLVVvQTQsrdcbCujje5r6a6NBJ9wRGTHdc",
  "key19": "2NJt6s8TeweVeq7rZ6jd3cMCY9w45PQnXyHt7HtZYyorMNUhypxQ3yVhix3YcGTCAJndA2gZTmhjFYvzUvcV5MUk",
  "key20": "3UZyjBwNTGkepnHcf5YQJyTnaxnJeMnsUnCL4TKi5v7FgNswXQ2BDq6gexzFmh6zUixPrmJBGwV2fdHRuEBkn6xx",
  "key21": "58uZ15N4mkYVAYrBPF379idkrxSF31Tjm5WNwAzhxVGd7JytJhi9HpM5cCPV5MLsMDoRNkxHgZdJ1xPWueSdqHVZ",
  "key22": "4bruc776s2vnxSwihNjCXNfg3RatqZrWSp1nLcKJevGDgGY3SWUEFd8UxtSWgFQAXiGYEruQPUyXhS6hVRhM6zvz",
  "key23": "5NCP1N9Q9FrAm4V9jsJCb5urvJXVrFRwZFHPf2Qs52LaQrJbfqfRu898RDZWb7PoPC87nXjVUaqut4n7CLsn7pEj",
  "key24": "PVC93FhWo1GPyJtYmCvqaYZ2295g4v2yBUuxHjoBcLRTjauavHxTKtC3pogGCvvX1vurF535us3N8rQwghGkUnx",
  "key25": "WSTfnUWY67KtGGsp1At4pK3R3tcaTrFGR6SUQtc9E1fSwwmn8buUyXJjgvDutopkSzHmnjLjrFjKjnGgLTcVQmi",
  "key26": "42v7938MwXjhW73CoW2bYo5tBSrRGRawrHyZj6QB6NUeoqPXd8pwvZwyt8QQcZAyRrFdDZyfTCHGrtTUufy6fZ7W",
  "key27": "2qZABsF3KmLxw8j8xNY6MS8EcZDaFeKvDw8mKcmmtthKKdYKxZpVa9wrhn9sNr57gXL4gKYYrRJQzxjPvshubDU6",
  "key28": "3HCfWvJqf8LG8N4XTbjekct1sKC4uCeffLDx7QXLvZgq7HpyD7qtW93oa8WZG2GPho11FQ6CnRQ2Qd4wCgVpRg77",
  "key29": "3RCQUH8iqjB9HuwrZM3fnRNWkmssiWDY7q1taFfxmWaQwRqSrgjNCStG8exwkopQ6CvLrCGWcN4LXpn8y2j2g2ee",
  "key30": "2M76w1EiiP3tCBKR7BPTGh2eWkGgdaNSz1ExVtQwSYfkhTfFGYDiqPKveCu9USJpw68LJiYrBTpFm83HooVzYrSH",
  "key31": "41W1tDhGQJmkPZFSf7yPbtycbmkoRFAYq6ELGLND4NuwtubKqSJFxuxetyVWEr25KLD7tJnMbjHvaPhah2SQ2pGg",
  "key32": "43vTiMX1HzLEWbsY5WygS6mpB6bWdq8Dir3jpxyQHp4uqyekKr47VhfLAqupkBsys184v5PbFJW4AWiKz3ZyattB",
  "key33": "3ZrvKxqGRu1Ugn4kUQRBqjkkTxay4QAekEJtKAmoUB395c3qz4oqybs6hgWXqy9MbUBAtEivqVz6TPLKKfKWSkJS",
  "key34": "25tykN5g1Ww1ZDKRa96dmSp3mhA7D7k9M5MFhbHcGrqKhxuuZ7ri6FEfHQfhvohTrXdxDWhwxfyddhi1sPij775q",
  "key35": "3Mjwaa2iRDh7L3XkkrRMbpQziAwrsZcB9EqEVxKyW1eSBczZRvUpSXZTTjg4qtmsLApjvprfbCPisoQxdRfgE3mG",
  "key36": "5r11cCknTCym9hkrPXsN7e1eVzd6hBrt4fqag2mcCF4BbYCJkYmbbhB8r7D1dgVcxKvYrjAiru11sM8RaVsaMQUV",
  "key37": "2x7GnRisvLbF76cqcH2oazM5mcFkAhq9LPu6jZcszk4QmvDx1TLsB4hCRZ54ummyXHgDvyCzKD4xNEAapwUc9tb3",
  "key38": "3ABkNKckxNe5kv6inEsYjzKH8xWSBJ8VmR2tf2urCU4cSF37AJipqwGAMgStiQXryHSHECRiVg8ESSSHBYe2MZ2d",
  "key39": "5PBFyKQMjLcG8Xmah3jogcb93tqExPtMHHsNeA2DDFuDWiQuMaZouU9Ka2LVHjFN1UPhAfpUbUNgpLXqZSm6XMy3",
  "key40": "3SX7xiJrNrwH1YGwH8NRnXTbip7BFjcVGyLBFQD2sMai8qoBE7qSM2xftAniC3npvYXdHVPQQwXSuuk7PFENVG9M",
  "key41": "XAzRLeW5EXQSoW1hY81M8xodPFaYQvr18ZycJnodoFQ3FGY42kSYQzgMxoKDT7sxg94UAJUZUbD7WxWG98tCtAb",
  "key42": "2m24WrDiot12wrHAa8UPRi8MG2xpdzGctrh5u2kjaMcdaXmWMRDgF8RqKQ5sa6ZkPYxrdrmb9MiAoSEsjsjMRsZC",
  "key43": "2LVsMnZCcg2PUnbfdH9AwhP6rSRYm6eg3nvVmXStWKrWMU3u4B75WBtssGBdAdJBTRv58ATYJ42McPXjpT7Yk3kA",
  "key44": "SQfW19ktoHKvGjp2NCFPZCEfaQ3SXZSW2HoQA9AWRkEgwZgEARMXtsviYcxXk4aARCfWZj7qQAyxSBEa5i8uTJV"
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
