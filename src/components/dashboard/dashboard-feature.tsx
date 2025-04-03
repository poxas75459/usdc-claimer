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
    "5MyhznUfe5Lr7RpR5MCa1LsDP5ArSQyWjwJcdN8NTgXN7Q6ZBqwfFPwKe8LMjxoCRW7MXZs9kKxBg3hmuao4dsye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tp7XR6vqPBhanhqHXbgwka8mR4TTgtrP8eeCbmwQd31pazXeNv6owsWAxrDnHjQp73ZN46ZZu9nLKCQrqr6VVSB",
  "key1": "4R8h5WBeHv5Vu6rTWo5TktZZxCNMYmcC2KosH78L2oTgKuM35eTqVUTEz2Y4ZxBjGSdXrREppT14J1BptZWoo8S4",
  "key2": "5e2rXFCo7Y7na6JKN4QTg3wQxcCVtqobX8M73WxQjvqMsXDdg7LPUx4veiDBM16zNE9E2VqL11QPYoZnym5e5puq",
  "key3": "4JnDAwfSu5p7GDGNerp7XVSDrv1TmszjoKJbR2CJtj2tNoYban5q63vFuXAaCc1YcMAL8JSpPv73Qi4asqyKbkFj",
  "key4": "27oXSWAkgr2nZmsvAebkRV9cjqb7HCRXH5PwgbjKck4dUHTAuQMiB4r64woRdY9GpSBTF3W4tMBts2h3yVJqPFGu",
  "key5": "3Q732RMAqHcYenEFKJWg44MqccpJxjTuCxJ8LgmVoFRy5SW9zkipdAbC2iPqy9cKVp4unNvXrSQuypjPaNB91EaN",
  "key6": "329CgEmfPL8bgJWNj28FDkADTuDmnYQB2Pe5uHoatq2ixYCWuNDDBQn2Wnd2Y5ZLZgBMm4KmM2Gp6Pg9bggrpzKJ",
  "key7": "2HVUPpTfsQmwvcWS5Mbgz1wnqFv1cggYqdGbV5GE8AaU5jHv5WXQ7zsWxHMvbfGYdLM2ZjcpjCWFuNPVhE6UTTPg",
  "key8": "4raMybVqNXhGXX9Tjp3JeNvb9yu6bhQ8Z9nYL27tbqF13sdg4TLzb7UKyF8zVeo3vXdj1n7fgst8ma7kKUGNLo4s",
  "key9": "2JbY1dQSsbspyPVt8KPaukiCbHxfsM9CQVXFbuomGLsY66KwQB8MCaFyWB2Rs6wV3jnUVSAfUr8eMaw7pkXnMxrx",
  "key10": "3mbcqY1vFtkJhEYpFR7j8QMRUXzsfha3FwdWMk7prm1fPUN8nAr76xSZ4cTjBKYxe4b9mGjie79ENp3DF7WovDnk",
  "key11": "4cfBPww4J96kehozpvvu2CnpAYphsJE3zqm58jkLqiHucdCLsNouyDh5G3hMPv6sTnX73CULkJy4zjUqMUV6gC8R",
  "key12": "5HAKFh34NbvNH495YpRVW2B6fJpN8aAxAFNNVHsJkqk8Y11GvuYZcRj3r1JoxQmCPmPMWBgvRSrfEvnFkEhUe9EJ",
  "key13": "2swWvoGPcQ7kBJ5yCkNLPsyrs7k6bUUmGbmzKfbDMSZSMG7AJTZQnEFABeZNEAyPfFsf91HuertunKBsiWsdBNn5",
  "key14": "2eaMvmdtFsyMKdzvQnWHR2WQUEDdJ8wjQ1YjRSRs4ewPydRjfgD62fDjPWqJHKHRTtePp9h2hUQejMKbkamKwkYt",
  "key15": "4dmwXS1NLbkaqCuSiHwmt8hxXm52umGv6BRhUGRNw9WTUHn9keNdULuE56ZNNXGVY7BCxf6K7MvkyhMa2kpeiLXd",
  "key16": "3J659ncq2hJGndPHwxug6GY8LcmVUK1rca3RxdMHCsZ2TEd8G8UMwP2EJr1U8vay4GiwJKJTjwCxfoHqgEv2gitx",
  "key17": "5xMpb9PkgeMD5Mh87UVJQDXmL9tirrXR4fXUrLsAPCgtdLLDKRh8UkaPU1FBGSoyUetspN3dyz1pGDW9jB3TLV6j",
  "key18": "2AeprjU4Aewvay9UFSFLoSpNDuVfU98JmwQfSr9dVraojG5Fgwedyfohs1LjoMNKWFsTfuW29EZyPsnjnjvan6ns",
  "key19": "2C75Auabnoke455ziKyJRitD6p3KhjymhNES9YfMKGuuaqJamm4RbHiZFafPvwWFecf9FeRfRHQ8RjhhQfC9LXE3",
  "key20": "3Wj4qhQf7tnjzEXfKGzK9QUaeLKeCnfkSYmeEUgUrQwQz9twj3BwuPnHK6KptLgvzPMeTqApZnQaKUREJmdJ82wV",
  "key21": "5D2SQiBe66J5rGPpzGa4aHgH3DTW1CkZSr61Cn788Tghvk1SDr1VtzGQjfzYP2wfzumoSaCwacLB9QnxLmaDDZbn",
  "key22": "5h7ukBjHdaTRVufNo5q6wG82Y4Fwgshq2MCMrmKbZEnhASmAGNFNz9cqXvcrYGY5SYfSnDNnVSYpUz9g8Nymixuy",
  "key23": "2biStJKErbxBMKsb9Pgnpg4zaNgMeqodkJ8BNWiKJ6XwBn4a1GWPQUQLiBvcLvLL657jenW7kW1rCTzaua2ddx7M",
  "key24": "4X9TCQAR2QRRbC58n5ffkpwFVKafkdovDYcBytjgWmye5HcHtLDNApH7CSW9fJjKFigXtXgRUzkJ5QCWWZ92x9ZG",
  "key25": "56pjR57VjmX15WHgnTL2c89whSsNZFMBgRnoGmyzpNyz4r4V3CbhwogTy8FPKs84UourCZp2s1UmGanbrpBo9gMG",
  "key26": "2YP8YTmmD77QPRCoT9bi6F5XPWzqS69XdYvy5q4tZXwpDJh7JxuSL6S2UGCTwfsUbkKuWRHNRFhpbdYXuJN6FqZt",
  "key27": "2wc53kvgWdDhQG8hSwT9hq2ggyU2N7R5NdbvvqvH1fAUZ3Bvp6iAkwrxFxRjJX42qrg1HuGAcgByXZBa1UNZvmvf",
  "key28": "21UecxXnpJuUryem8uSruy4EEiBj5DbEmLdYbaKLztuCTBqZXmaA2hS1NXEw6DNJEVApEhMqAqbpq4j4ohnSpVBu",
  "key29": "7bJjbzbkS9p4UZSHJZdQv2KriifUeo54MD6aH2MkNMFKwz4cs3stPAAv5w2EpMK8FZpgwfHsqE3xKbPodYXzCde",
  "key30": "rNMQSogqD4D1h5bzXDHahBgAmn9DxsnGDJ75MCrPMV7Z9PC7WBvyQJzxAzQXT2fyKTPiFQtGwLppiEcyjPt4vXn",
  "key31": "5uQdfNnYSFY8UiG6YqMz1US3GGyaDLumFUaM8vmxwuoCTSQrScDk4uodQfkpWtStNbkBADQaFzd7WQYs1Ps9MYGG",
  "key32": "htwqDWRgmNiVfTVfMFqgdHT3By2fA4bwnGYv1zB64Hy956p5ewTeYp2FoMoJSiNjofxdLhNPFBrur1v8VUvTca6",
  "key33": "i6DnnuRkkWcAXfZTvkfneQfq8sSr72Rb33yQM9cHMgpRGVdhBZmpd658WuW9XoxB8nijyyqorHfBfnYyh6u33AS",
  "key34": "3DosFf8wMohe9BXNjFA6T4qohdH4dZQZaAsuzNinmN9oZNJBg2P5Y6g5zHnYFAwkL8CnwrnpVFHArXfn6a9DF4bJ",
  "key35": "39a9S7nvUXq7XQT23LUmRfxtgG4bvXLQqhaqT1HbaVFWzjCiyttmWvwq6V6cQPhoVgFn9spKM8sVcrfZS6anstje",
  "key36": "46tV18EBU6Fwv4Z2C5kpZeBwii4NtxxsoFo3Xa2NAQ17YiHFmYHtD8tBNyStQ3HSfTa8gDGDhunwHxgnk6gbqxPt",
  "key37": "2Bc6VMW3CcdjPCgRfnrbnUiM7CGzJfEMZ38V9GVtJv1MncUXgZvoicto3mG646ZhSqCTZVbQ4YUigARzfsotnAnM",
  "key38": "3PsGm6rzaLSWr4fJTxH9cXzSyMPrvGd54Vpp4tdyeCnxriKhpLNDFTS7TLrte4GD5qLJybMNCmpAURfdybhAUZM9",
  "key39": "2PxoKpQziuQRUw2DNPnKVNamxpXMrhUmWpmCKut4drkTi2GLm6X7CDA4T4uTV4GJ1pRwBX9U29uuB7avmdcFSTEB",
  "key40": "chHo3pTqMKcicwFQYkh1vzswyVrnSkm5BXVrh8VGVV9Xwseq1aJPXFmQ1in6nbxZFNe7Z7hTn2N2hKfy6b85D4D",
  "key41": "5ky7snu6HPYwDq7hL7pHazX8469KF9xznur6tJ3NpqYD35T6UyD648kDszSSmuQUEUNAkpqu9k2s5s9dnoKiDS5j",
  "key42": "5evtebmAKFDpdcERBwf7mhv8xuG4isChprYCHVjFySwbYdDB8gyoYvnJrGzsnCQsWd7uhHmCJufoj3nr1pb9bxdG",
  "key43": "2EMugo5fgAMzaajQ1BRREF8VpjupdVeuEAjQLTk6rKKZK7soMgbi4Lv2uVVnY2WZGnKnpgzbv56EJqbjCNCzXgZS",
  "key44": "3XZck4VSR15iBivDsgDHTqfjeZHJX51xHL3PPXJemAvGm8J5YP582MbCZgLMwPuX4nZUEwxPadRXZ7WAMC7jo5Kr",
  "key45": "vsjEMuqyuC5U6cZ4ReXEnbgNUWjPxbPn7XpkFqGszHFMBKpuGqdmqnTGb63xa2ijpWjv5FtVFD7hWZo8djp8qWN"
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
