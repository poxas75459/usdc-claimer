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
    "5AHenLF15rDAQvys85Do6P9emZHgvsPJzzHoNqaWkRyVvRxjFYhzAoZ7oHT9dHqdgPG5QrwjAgUz8W8RLfBVK43e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52QcbyPfSafs3xJit9v41HCkz8CBzKxYLkdD5iYCDZPF3GSwhTi25faacrrwgyMQDtjFqpzjfGeAXVhFVwdg6WbT",
  "key1": "46PfjXVwo8WZpA6cJ8ckU65fZtbLGxeBWMkzWkqaGaEGKgv88uteU71EGtkohT2b4zgsWnu7ETEhGjrUem1p5D5D",
  "key2": "57mAa7kJ2HxYSM7z58SmpRyerjPKU3GUjkb4iHhHzkiKFBHcroqmajFrpt8F2SpybSfqwsbrz9yT4rRBWrxU17Gt",
  "key3": "5JM4gF1sDUdUqJ8YQ44w4gSu2sMCNUhfoEgRYfNUdS3SBiDSyxK1pUoRAoPG8qUddTaXdH4WYzBak5BJZxUSJGsv",
  "key4": "2WJUxe8x3ULc7EGvEmdbFSK8knK1oXRFmdouKn1ErvRAg11bDkn6pcBa7wViv67vmPzCGWWYCucU8qKoM2UkJwLr",
  "key5": "4U7GA19S2Gjj7Nh4YRN7qMt4F8nhmb7Kqc5zwfyN2Q7JBj1EpyBnMRwnp7uyhkX1SjSNq3oBsNipH8RVj5GqhE2P",
  "key6": "p1xy34mhw53VfsT7Ryb3DYWSojAGspbdUKw7xZctUvMWtfbrc4mkaDBSsj5VFdCyXgN59aQzq8aL3YsCqo3ManH",
  "key7": "67CPQnedwiRxSuXNyD9aqDGws2vxR3JDiG3wdEzYbqRz4YA2nLPSJQXY22dh5cjcPQ8WnGdkDXwFKFxszMUG4sNi",
  "key8": "5ZThzwRDamiXkZC9LsVbxsLLp3bSP5gEmZ4EKxKsZQ2W6gWEvRXkQvucWZnyUai6VvQo9jtq8pasPhPJKW3n34Zq",
  "key9": "37ZZ159RLXZXkP1N2Qa3W3oBYXL1LbDGSnJ7RRJuQB97oM5J1yQS5pCpH57p5UE3PdJCUpCw6tMXQ1shFKQHacr7",
  "key10": "5qZcr9dTu5PKthdaQWkRRz3Da7oJK2L41wE2otgfVXqJBpTCqgczJFoWdSMxNDW9yyTLbgREoLWtzMa3ezhhBSCe",
  "key11": "2fUPNfrmro48UdY92LD8doqUCLkxUzQdK6wti7qzqgD5B17HS5PLt9EcjomoPitrn9CSrHqNqXRoJtV6Rd6jtnXM",
  "key12": "4zz8HqUu619FyTT6cV4GVueRo5hcqLdfowttvWubf1QeA6LsJMQuGXSPdgjCP3zbE6rBTBuvRMmHbwrs2pLyL8bH",
  "key13": "49UKK8fyPiQ8yAuxnxST4XwWRyxd4ZEeVcJygbRUsLNzZthDkiWuuWFRP1jHU31eBw2feAPVQuL9Rf3qPdqeN5Y5",
  "key14": "VFeVFzVtHCbaUV18pkzwUmqmfAVg8WS2VN9NyUEGqmHdPFEew1p9Gmn7noTWTq8rEXodh2coL2u3tk4AVuBwecw",
  "key15": "4NrLfYkGXXzF77nHgvL9bBUv4ZjGjCRtJaU1vu8Mzo3jdvUKZTAWrtfSzwa979PyvRUsSM3qqk7LbnDRARtPVqW8",
  "key16": "9hMcDFvyiyJD568cdD66yAEGfh8ZM5kYXE6X3gpRVoigHVDcYT1fi77Qxf4QnnWit4pTeVqkXDiABng8KV1cw8F",
  "key17": "3yKBDzDSatzUFfL1w5K33B2HBSu2eFnA7U8QrF3MTrG5fNkZibshX2HKJ7VTSGkhcCeH7bJphacSAMcYssMMux2n",
  "key18": "5gM6BauMf3SqnkTsgq6UKgWhVy67mouKHxJpPK9poMPCMx72xpGCaw4CLxUmsw1PderineFjHA52gXJ6BAMbgzHU",
  "key19": "4zpUFZYHaQxMnx9qe3zMu9RRLw8ncifwLT7s9rUAzdj988X1y2zz1kGCDitesqbPZBJ6uEikGYAXRtQvuXPprfC4",
  "key20": "23twrTj2DfZkveRQ6Ejsf7Dq7amdQ6AC91MDdSuYgkDFVdQgYkGKPwwXBmEpcfyaQkb97YudW1ZuJBKNfJWB935R",
  "key21": "28zMtcSRrMYjTdNLvKFQwgyzezRTNgsHVgMWb6yv7d5keVn7zXTaPEtT7GYnLPqvbFdqhXAxg6Wj1otyjQQmd4Q1",
  "key22": "2g2fhPBjQsvPax7RX4AzXKkUEJEQUqizhmfEsSjr6mtdpwoQU6ULLXwo6E3597es3Fo8T7iiExjGPXL1RY7c3HLD",
  "key23": "3TtGybeLcsTTdDUHW1iVCNh7sWkAPcjdY46EtAb7V7b9b7g6tVZhXsnwGor777weX3sSVDchDZAffsMf1bPxe5WU",
  "key24": "DYpzAXNsxRXwPaYYTQGEQqPphRNLs8B9q3VGDERMjLS1cun23qVyZPmYLq2sWcixQLRgyE59QWqyCCLd9tYevnG",
  "key25": "25jH66bLPN7r4CZSwJ6Xp1vfTjV3C1XYg6XzenSiKpzfPBxyUgjBD2iuMiXQKnobrr1KaKAyt8LtcXjTRKmpMRwA",
  "key26": "3uMKJHfA7L9xPEjajQyV46XJ3zZakppN8dhEuMWsQipm2ZD8g6xB1G3fXyZnohjSGVf5AhxYzHeph9hybnUT8gAm",
  "key27": "3Y9ycgUcPzzN1Tfotch5NcCpM9WDtJoG5a3mZVcN9oJ5pyXQkDHouHiSN2fd2a1HSoYBrw9Y2Wded1hq4dDjRhbL",
  "key28": "5fGq31AM5Qy7FCwwVCTVWJFVcwoTrXLSBG9o9Bobie3ijHu4AejGg3qCZqvL9nrdVZ37XoRNkVG1frpkJBLYCA5x",
  "key29": "3YeRakhM2wX1sx2jPrQuczY6CL1Z9Bp9uwUfq39zkG7xrFrSzX5hLuW2qgr1F8RLmQnUk6AamcAy83kDPnZbZjE2",
  "key30": "g7m7VXsUDG3e6QnUU7rDC7PxrAn1RXoCqsH16MgX4c68jJTb7zKxVenAZ2U7YBhZZjcFdzURdiHXVCiYQ83jiik",
  "key31": "8cTDPmvPWpwMoXt3CT3M3JySzycUgkPJM8B39mQL3ce7Gj6YZCLkydooC6dMcXeayGtbdUZhjyQv2VbLQ98rZVW"
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
