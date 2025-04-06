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
    "3U7ji7eE67GfeB3WDhVkWrGffMqaZ3LijGu9W1JXjACjLCewZUbeDBmsaAE2bso8nFayqbVtPrdbVzNq9TJ4sFME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5TrcqUL7jkdvM2kANsW3qgXwaMhHefBGeR5JT1w563Qx68Gr7zkDos8QuiJ92NE9duTn2W2cgk6c3dHSMfsu6S",
  "key1": "3xUaX5k4LHB1CT28Aav2L4UFQwTLv9xgzZF6HiEyJzCjmUR4Z45BokyyUey7DN7c5gEZwPwhv8zdysBYBctowtjt",
  "key2": "33Zrj2f6HnHZs9TQZyGEgwQm7EzE9WRZSb5uG1eaEYsZTf48bJiEXoQFZot3Ekf3ZgBwwQeCGy98QHXfUTos5ewY",
  "key3": "FqBcBag17DHFSbQCMcydMaePLVgKnawWdtZr7SxfGJzjiaWh3yT89RSvZ5tHqTZbQdPs2dQbHgHF4tmjGAw4VjZ",
  "key4": "3J4jT8fNL1F1tgyPyLgzv1QbvUpr5iqPxfD5ReXPUhBdLLVfMwsuZN5BRF3cJCbRkS9roUuD46QgUqNnJrz9hnXJ",
  "key5": "NxAXopVHf7rMr4QLPu6ZLQYrajo3aGmRxDXTaBN22DCpYziackBGy2eSLYEeXSNfGwhZZ3fmc2kJUHrRGSzQ4DJ",
  "key6": "5vERYqYa41VjU5WebaEY4tnT8SFKe1Vx5yaW9iiYSXKw3svY2AcUYFB3HZX6dkc9FVEoTHnFXX1JWK2T8hHecTTE",
  "key7": "2tQ5Snb91mRSwrNWwTxBbEBcQGQKtmfcbBricwZTTnhmoV7TfrNAuiFx5FHgfLFmKJmTaniYnpoMWozkpuenNMs4",
  "key8": "3NdtcoCrjwtQ5UAAyaCU1bgF9iVkcqpBj2k8doUT3Xd8kpwEen6GP463rgzq2gqsXmGtEQHeG6go3akUfpHN2pT2",
  "key9": "fNZNnsXrVxy3JDRtr7vGSEKGdHMNzauKZ3ZLZ9yusMMy6eAroBKG1frMc4eQacVSd9tvJ2r8F4JdWRnxwgExazJ",
  "key10": "Gee4eXnH6WzPbBmqnd7RFckAKuzms7LX1VZ6Z8C1HtrFJmnXpxu7AcAtNhyvhT389vYEqSE2vB4djRUgB71PT7h",
  "key11": "2ystss8bgmx3PRvpNmY8ybQ9A3E57RZG6BXfzPt9HEXeJ9XjJ3fFUis1TJzxFDyUX2Z8a9ob1kDG6osKB1sH9Agu",
  "key12": "52NP6MHvqcxVXBFGr8yr51Njv5fYFbCsw4TSLAcHCKHu2HMpvLGVnPDh1GwLt3DWSHprZUZLZRsqhDdBMKLjm4t4",
  "key13": "3RvDevT4EKMxpUWcDmR4WmrUhAN54yHAMJQzH3voLhRPP9dXDLrvDw91YkY2A6TB9ZW2p4Y6oqUKHCtC4foNVxSS",
  "key14": "4QX7n6fcqSu3Xo5PV1Who3V2TyWYpoi2HJ5CvU69giRuPnHZKewhz4oSudPiJqVUvmDZEM3bm16D28QnrqxjKCP3",
  "key15": "18doAbrxu6W66751poMdyMqJzDDzbvKCRa8es3VZ9bbDtTsfdb8tudyFkKqtefYdpdezfUx1viS9UvLEqLof8N5",
  "key16": "4E5D7UTegKS7bpkFSqYPV7xX45bU5iFdYZ5XeZeCwBjBvfUQkXjKCv8yvtRj75otWs74iqVZQm3u84x3vdRtBJXa",
  "key17": "4ZS8dstJ6KWg9bFU4fmjBqxNvNyvYea77CtTJ3N56qbGXigbHFDuCz7K9XfnTYGPZM4rNZGTK9JDngz8VrkHiXRu",
  "key18": "PQ23ZtaoQnfdx1CTAUFxB9Kz6c61V86g4sjYVWLjHYPvz1xdeRVVaiu9eK3qYuBA1on4SSY6HJyYqKGpRCyCbmV",
  "key19": "5gznNTcprm2GSu3tWQVUbjW6WnGcNsLfL39sgNwqcH2jH5vkhQUQrai6vvNQcxhntbPeDA6HmLaFMUbFrdGPVYMk",
  "key20": "5VKMJV3nUSJC76puKsVdAzLaLATvReSYFVY3VEg1v7oQ3MLHLL37EZ5DcyQ7Ce3sddKn2sXnsFHU8ti66pfnJdTM",
  "key21": "5BC5ua9sd8aTUKfuFk4ZHPVdnjEjFebVGM8a7QRxiSL283k3EaPvDzEkwppGRPQmR6EmPBoLbyZQ5DNVFLZw9j3Z",
  "key22": "42jtSNRxb9ooQw5f656ZU7bnL6PcD7DsyZkFnnaP9FfY2SFChUGdq63jUz3avcNzFTussUUkvL29nhqaF6pje66i",
  "key23": "3zszQrEUqKhkBFhFTV2SM3YBY28wd2gCiYKk3f8J36DHkzwgALtazH16QfWyEBy4d8cimd5X37R8STCAh4FwNem8",
  "key24": "4hbGjqhrp3TStAqGEdcdVA6bKGkueh1BC5KR1qYceZ22PfEeZXPPcJCWJStAP5w8TJLT5N4fex7WBpRYS5L51oim",
  "key25": "591bwarKy6p3NPW7VhXALKzb781YGEadkFu1FymKcWuEMjjwSmLWLGiBCSRvHjZqmejggXMtATbqux9LmcsYmRLf",
  "key26": "AoCkeFj2cqXqF5nCEfrftzkTGJz8ZUj5kgNXbdQQihGL7WHPX42g6qMh5EzZHWyu4kRuf9Uc2sXbGUxodAhj3nX",
  "key27": "4w5GtpLwTVefGu8iqELwrE3c7G1YwS8oHLkF6HheZmT44xkRznhMiTv4zWeuCyezorPyBuHok5P2KpYXEtgxv4vt",
  "key28": "66pw481Qtbxa6zXQ5BtZ6dQmS1mz2AASx5xoAhn3D6MqM4gmPDSobg5oBCQZLcZe9xWQrLvY5isMfKQ23TG4Fak4",
  "key29": "2P91NW6Y5MGiNcD14my3QmbNU88zJQSENRRvgBr9rfKDfknNR2FC8UF9yjGiDyLNAtMoAF7zN9yswRXUd1Fy5URN",
  "key30": "4UgHuqerVT6bX41Kc9nAQjA4sdZdHU4ifS1vcWaExw4z669ZKeUMmetuXdLfb2zcEy89GPD3162kJPYHrGhXa1Pz",
  "key31": "3JDsBdVovTyWGPYiFVJqJgfX8JupruzELzSSa1u8KLXChGX3L6WzbUsVHnDChYiUDjiiSu246x2yZcRxhJEs6UK7",
  "key32": "2zSUiCnKh2U9parV8pPK9kyzLb9gjZKtQV7YtaokWA2TjQGCkpfLFpcuwc3XSNvW4djSkNKJ53BDHgWzoKNQhbCx",
  "key33": "4BmRK3w3KyfxUHnT2ysJ5WadLTTwKCURp3YqJdyZdhquVnasox8Riv2Hehdb8xQcg5V3MFvDREXp5AFWconcatAH",
  "key34": "n1gCHJfCFcwSRpgFQ4jDqCvPdK6FQh6i5EpoNZiqLbSFwf9PQfo3Pw3tndqMsSfUBKdc8vKSofJknPPTirLrgxv",
  "key35": "ACEc1qiQEAgCSB2qEgMo6gDg17NCsKt2VoxQB66VCFjkoqQ7rcJkDM96QUcEcSLGRPDpiAUK5wgQej4oYoj4h81",
  "key36": "3L7VdTQGmoLphuM87KAsKvNDXS3yjMVhnsNqvVRk7WXghRf3kWEWKMh1DCWPSrfbNXu5cYELPgjFAXkv2rqjzmsx",
  "key37": "uoUZ8RVmcVLaBNfvJR6MYA2T65m8Wtdd5gvks3B8w7P7fSRnU1fRXe6CcGh7ZWEKQVC3iodeFYAcvaBWGcFrzPo",
  "key38": "5273sSk3UpLhqXu5uKfoJsUnEGVK5TS485114ZMdX7mZSy3t8cwdDJN8nQiC9p9qYWDYf6u8S28gPSd3gyKPZ8Fm",
  "key39": "PTZej6Ben8yhkMH8KKZA87hYVVUz2wfJpbUaiaR5TRkxNH1saycCD3smCCuywr4q6JXsfmxSo26bCt5YREZQ2mC",
  "key40": "4qjPZYELW1TkAFKoZHiHqzVEAPqXbDb1235kdTRz2So1it18g8DQKdPGzyAGhZRbG8abMEi4NBWk4jJhRzZw1wSa",
  "key41": "441Xbo5gYxVTd3agBJPKqBd15Rk6EjUbzsp1DAkgpmjWuv3omHhzzqM6arEksfR3rshePSYabXhk9Dq4D7z1yqpr",
  "key42": "64sePsRFS2UeswNTh12ZMJsdu9paxLXWbKFDAivL9Gs9FGEXLEUpDYGGn6bbSqRa5GfwN2iCktCJZBJQUP1uTHBQ",
  "key43": "3i2peZXdQyzoJKxszZsruAzNqhKzbgUELkprYWvN9L2NhVKr4p61MURsbxYAfMiCukCmHjdGnt8bj75yY3pF8W5a",
  "key44": "4odWvSZe5Q6qYU6LsmTRe3GKgDR86s2rhRuVU9FWMM3WTDrS2yaVAmF6XtQBYHarqFbxrmYWmwK2J1VnTb8CLSjn",
  "key45": "CE6DZ1KFsnivL7SKYiV41ht7sUqN82J9cjebiMVvmG6quKe2R2JAP2waphRmGjCWSu6TPbMaDowUQXePQxEym9J"
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
