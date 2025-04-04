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
    "4Lo2maaQrv6WAZgCiM7gByxocNiwmUrnsBDWZTJFHHtuXw9YCTQYy3SYPzPSSRpekVxMDwGaFo5dTefjqGzsGXHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDSjgqha2PMesseWvfY3syqYMTNFzf8trHH4fuK8m7EFUpetzdFNQDX1GkkWUNgJx82K57MrqDoTWkKPpTvuh3D",
  "key1": "246DS88DgYRBx4dRgXi6Jse1vY41pRXUtSnjK17n57CDM8KHZ4sg4mDWokkiYFjsSZLmcCkZzRnRqtRm7j8TrGvk",
  "key2": "5oGxHS2xbVMwZqCDcvApe3ZrEiaLccc1ZV1TK7vA7tW4N9KPjWUwMwSb3oBw4momFUGwnhWNMHnihBWqrG2P4U2",
  "key3": "3u58fBJayxNKYmjzUg9r2ynGSDfAK9BEL2uPH2jZYguQBrz2jDT3hytZUoTQqTdnbBtRi6aki261YxzyBTerX9NC",
  "key4": "3UesfRkNSkJVLwhvbw4CPVejb6Fsu1PHD8A2ks1B66yoeGRL1TjCcNsNNwkhTnTw2TaqFwHJp1sf8m5dQdrJCXDt",
  "key5": "5MHwTHgstFWr4f8tvu1WBJ4DWHxesPvesCvcXcMdrB1cKSgDL26AKzgiZVL1SnGkh3zPdXKrgfJExqS5fB4vQnj2",
  "key6": "2FG8hTaVx2mNDbbWNX7XRmUYAUPGRLrWuLgvYaKHdJXqurHKaxuwjG5w8BruhSReVeShYoBTWophLwkvBMwuV9ZX",
  "key7": "2ekjuNNfnRC6WyzcrGnmqYMXCPBW4r8bTP4WTJYR6hGzjLAfxC9PbZM8sKPKtjm2SUyyqdDGtHbS6j34vb2hAafu",
  "key8": "5ahK7aaeBY6b8tGPeEyae8L5tvrmmoNEi9affvc1fqur5odCTx75uSJmfQZjT3hGduxwgwmo7vt65CjqHPDVVgqx",
  "key9": "5eTt2XNPbugm7VZWVovZY4PZ8xVJ3tBuxqhcdRcMKWMrps7GRmy647J6AEqGpdbtjcEsWD1HghXCAEbssrbm6qRX",
  "key10": "3N4f3W9k9tB6ReJqn3tAq8yNK9GpLxgf9F2VtQnj7uYfSASBC7a8CWgRk4LPz9dhPuay8eaoFEEfHmuGwJPd2wdE",
  "key11": "3nkP8sfGiNGp2aPb3bCqzQTojgn4m9KMoy1MHR9G6rYrxyjwGeBS3HLW85nJTQf5zSSM8uA1Je2oewwWWHSKhy79",
  "key12": "5NCxzFn2VHaWHbBbk9UMeh7PRc3VDNUPYbZXDyxU7ErEDZi5xAw3qjbMbNd56vzynVf9EYFchqL8hKY3e1zU3aXy",
  "key13": "5LWY8unaWCNTsBdUAdG6Hn7XDkeiKf2YM8963dGZCTFsgYiLT8uw8GL4gJHvG17PuM186KoBoSNh5ak3pyjbbN9j",
  "key14": "hw9u4d1qVfqNTigXcFts77DqR4fjmF1FUQ7oNybv2ukzeKMqNMmysapWER2v8iRWTQpBHGBSN1SitNTxW8uP3ny",
  "key15": "hhAFe6UHkqo9abhhDWPmD6q2BLD1XX2YqHhmxDn9jtYXkxV3tzqjGn79buG6jt1L8v1UbareQrfvuienoZVrwMB",
  "key16": "3sbcfsx5A6MuGsiLtkLRAkYzDK8viQDouM9gKy9ncbqF3QwfKtYwEuABDr6e8gN6qGYeieDRk2PaEaV4TCDpAvJQ",
  "key17": "3m8QgoouE9aVgBD32drWYMP7hpwbK4AcvUoT97YNN96MvnA4GwSZPGA4CbvLFftncR1kEVMtDzJ7LyRRfqqQygVv",
  "key18": "FA2mDruygNu3wXCRho5Yh1c4VwwQzdHLUNgpsj8eBwoYaV2UkNbjcPHurVLDqgs8NwP91qJRLdzkuMTDugszXZe",
  "key19": "5oVfPfzC4rrU6ATkB8vruMv7LRxXFFPXnPcfcUXijqqQJBHMLyTYEo1mB7igiRfDPcYA3yTzpdBzHd4MDxJCJY9",
  "key20": "2ai2q7ZxFuZRXznZwiFC6VT9dWJi56n1Xkd7bCcoSQP7w4dmb6329uKLLQ8dPpymM7df5XcPSZFVGR2riTeKBgv2",
  "key21": "5GjgVPMmVaj78NrBXVtVntrE1SR235LTS3fSdZZF81HF5sRtM2PcDBRxrWy1TJypTrUFhx2TsWrUtcBKJCywE34E",
  "key22": "5RyLmqx9zLPjrB4vYeFNWwZdNmju8iAgRN2GpvpftsumH7Ye5BxtwoErz2eYyYUYPUuKwWbvm3xcpGtFKQvtzX82",
  "key23": "5EjqQNAZbhL2oy4N2KsQFdUNvvuoJThE1E9XYLuLUAbwS1gBmhEodNF78WFrieKPUT4o15ALAwoXDByPM4mpM5xg",
  "key24": "3xegcNbJZM4fNPnEoj746VNjcbXVcfU5nhoMQHcXLztHd5maF7bGxEQg4VNV5aKq2RJD5YMq52BpNYEqhci28rRJ",
  "key25": "mgFHQC1aTSJnqsjMqUvKuiMH86yfaE5e37ii57vxA8WnQcvKikRhNmKJvtKf8kua9A6aLVw2qCkkxmfjYH25Fbi",
  "key26": "5qhmr5megMzfPwgiHimK2iZkapJuNJ2CVXejYhV8C4UgDzKK1h65AbfJ1MxUg8nvkTHEtgwXhZeb22rq67HY3k4i",
  "key27": "3qcErW9CrDb475SfmaPpmomN8ckPwnxum27kMcfhBxmNCqkeAikx9HrC7LprToNcKBJ6hjwS75gAqimnTqipo4aq",
  "key28": "53XSRCbFNJ1oZhVaaL2Knzcdty9cZiNRMYYdgxsEZSGCYADutM1xX1hHkXoXhEpzs4yKaSTEKZs8wuzX79raTmmP",
  "key29": "2X1WyAdFbgLivMUBP1r8wjZxDyvUGddWi79Tn277H95FWsEna93g3WR2GpV2tNVDdnptVDf9uJBQmsP3RA9XVRyc",
  "key30": "4G5RUxCXXhPM8iQNPUjnDEHNp4x54mykffmWbaPJ9PdNW9qhcaudThBhQTV6uXzNRoJKAF7UAVdYkTCeCmy2sbPg",
  "key31": "gYXjgDCVYonrVZpF9q9r9Kn2pCpTbbMzKWTTcgsFhfA8qe7VuFuK5mq7CAAxpY49tF224HpLos3RGG2o6oJ7vPG",
  "key32": "4WDEf3BTsQznewCGyzBMfxSeHe4u4q8jmXVHPYZy6QRHeZLmrPCNuzkUc8S3XbRdxSJfxcL5tdwsWXMAciJ7fQxg",
  "key33": "tQt2doEQ9T6QyF5yjgcTLKCSg5AQ9sipamJbcpFW39W8CVZ2GtvnsareDk6L9sgWiXmBLUYA1idiNeL3V5R6hdT",
  "key34": "53CLaammLoHzjfEj1xTF2jqVWXuzv4no6vMqH25GvrKsa8RJgatWX1j9w6yGsxErj4xbpBt2niR2FBvKeNXqS812",
  "key35": "FJoK1Dajb32PzdcV659yryPvKY3963zSjmn2L6nyzRfKzcy9xqsBeEPXxLw2ntMijr7yZHgH95d6gzgkMUAvUgU",
  "key36": "4rn6NB9CLSpuzXpxihBFwiD5s7UEurSpCK41ZnPqjBB2yfLKzzabMdwVZW1tN4KS6T4MAhrWb8ypj6o6KMDM43eG",
  "key37": "3BDDMPU41bpGSLsVE2yUZmkUaNEhLec9euL1SAwPYQRG7zZhuzeMf4Jdqs5T4PNH6f9RmXqatHi2ffkCZumzGNmt"
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
