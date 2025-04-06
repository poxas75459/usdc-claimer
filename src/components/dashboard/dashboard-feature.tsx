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
    "2rJbEr7u5iTH4cJ4JNeZePAGt3E2pW5JonrGpFcLSuAizkioPHW87k9mcAXmhmXNem1bAFoBx6TyxRo5yF7uBYkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jq8YrsFJoezE7pCYoN13duHkezZ6nU9XSti83RYK5SD9BErsBpoRdvBE6RbPNcHA6hzaCDrVvEg9SdqiRzqDHa",
  "key1": "5M5Hog2cJQiXDtPNUZTY3p8NcHZzp3kZvXYKTgLQeW9pjKnWXwTkTL2BayAUFDTQSdFaqCqjxQJbo2B9nWKvvcvf",
  "key2": "2RTAfrGj9ihXPXDz4gcKFutym4npcnRCocUacenxXWiMEmMj6xBGv3YzV8GkC1GRPaY6decNWyGAGRtgdrDEYkMw",
  "key3": "3Huj68waXof5nmAAdun52kaNrFLAdH2CJzQAkDj4WNEng6v66XZtqBWfZZzu238ej67sMKDaNEVxrcjRaaa21CrZ",
  "key4": "3Avv4bijYc5V1kqvDz6uH9okjSTXbxWdAWdyV2i524yZyAwjpUYH8bd6WbEjYEECjUoam2h7FbGpaM1YhbZggMnH",
  "key5": "5iResGjad1m79zE1MFBQLxxQFzrS5BChMBATvoGi9YxqNmh1CUCcW9MGc8zSi2kKXXCxb971MkSZ6E2s6MTfDqHu",
  "key6": "3aFi3CTDnL7c8sRgo6npRRfRTPeZgrHB6EzpushHCTCiMpZTNGeEFryjL4LACtocJ4EQC3Moz5Xd5SwFjsTUqPUf",
  "key7": "UMWY8Qve3ShixK3cJ7druR2XcAn5VLq3iNDjXjk8x7Aa4TATweSt7MmeJx6B1QBtScfsUKPdeRTxSZHhM5qA6tU",
  "key8": "5cYPZLzx8h88RDxAVL5poqc36LazkFBQ1RnnZHGgioPFPw2wRnehBL1cJx6i2mxFyT2rtXLHmMetm6WfMvaNZPQp",
  "key9": "4p27psLrTfGvLrP9hEykvYZHZP54ryBExR3KrLXNarvwUJidz7fjzEfoZnbcLiNqjst9o33VyMzNaoeSLHFCDv5V",
  "key10": "5RRtBSSBdukQBGrjSJkEAHVeTjLz5RB628CfQdaYrSB6BQuBDoQRsDDw1iNZA2VFsNJdZVLY1nvRxLLazeSi47xM",
  "key11": "K6gQDhQ9jNQP4kwjsUe3gMG24QUUdsHDF7VdUHzp8quLTZtWEzpBZ1SHVwp3RhpMM2pqP7L99Ac8kcwCCmpvEyx",
  "key12": "wNGPZJQMhGU6oz59DKNGouaKufBzbBto8pNTxx9N2pfDcN3PEnJ7LnHGGtUoH56WSuSUp5Ta3fRbBsmMdqbMTw8",
  "key13": "27GdB6zBGWQGecZmjFr6eMd4vhaey6Et8v7X2r7a612peMzfk9HuCM18Ch9AcXBW29ns6WKFPc5cFbDLDq754NoM",
  "key14": "3BdcXzQcX4dFvQZ9kPSRaQ7X9h1R3W1G7sE2ijbK3xRyn6ZNQAtukRXFJR7JMq2GaNRy7VUB9k8XobxPfTzmbEkh",
  "key15": "25hP4pL1yuEQBXZWC2NoXhpu7T5iSW8KaAvxEMkQUwBjAt9fFutF14q6jSy8qWRevd9AEE5u9i4NGuywCGiCxq59",
  "key16": "yxQWnAHcLhhoqUun1wbrKS6avadnJiFyfNvY2zaNDqE5zyyqfXs1r6TXMWePb9RDFnEQxT4xLZk1GHRxevc6myd",
  "key17": "5EEV5Xm9aytx5SSXSC65QaFWB8wtcstcD3v8ZPwQc5Z9nDPatd5TU7arMLdgv3hu6k6tQ8tmgBxKLbZKv7c8SFDF",
  "key18": "26s98LGzwRHwBfpRh4nZM4unnWwGBULzBVSkhMWgj2KSwpQcbDcF5gBxiypJg1dnvw65fveJZX1xDUTu6KkmyLza",
  "key19": "28mrDm1oS8B1ojvmEKak9VvKqvgWQBsFpkxHd23gZ2i2Uzs3h9QC2PJueRmCKuNRdU6CzyrSxeNnuWEuXhLZmbYL",
  "key20": "DHhei4ihJLpYez8HmV2qMUQwHuUD7aMtfRjfymneHGbpnBwdqBWSULgG43XunkPykm4YfCb3eur4tLS3rLToFaC",
  "key21": "65QFZi7ArASCgdf23iNPUqX6fjzbGrdddYuLGp8QoWbLSiTu2rdfXZ229oKECbqqKs4fMo8K84mqkkavCeBtwkaB",
  "key22": "2zPx3FJfh9afp2b1dzxBr9tYdZtAKsC6CPsZGgJSLz1nHvApq6kvAQkwwfdQS4Fa8rZ7JJGFcSrsGS9pWbPVMfNj",
  "key23": "5rY2vUQwcbbSqU1xN9a99x73arGrh3JyB4DneYKzMZg8am3eio2nzcicgGtTweNEy75ApFL6jVYKo2J4ZJXkVhDw",
  "key24": "3RpLrGXEq7JhywcQFSXjX3Y9MoQrn9AjiCj9U9uaaR5qR82962VYVLAx1ys2g4rs5UKHkW7JgU6ntvgGpxsti6LA",
  "key25": "4C3Zns74xjV6cPVpVcvi8gRLzQzZ9sE5WtR7q7fieqdehKSwmJFHjgYxRL1AHmD5cxZMvHqk1NFGs5G4DPe5UL6U",
  "key26": "3CzZ2teUXgTbRRcTZi1y3HZDzM3764huZyqSQHhJEvfJwEDDwzRe2AnwPmKDXes3judkmSSBowVigJfn7xL9Xyv4",
  "key27": "5KyUv98VYfugjuDFGPyYHUveSnYdnEgsY4RY33oiRLkwkiAUWu15xshbWV7nH7jCKMSAzfAfXjgThuBv6BfF9pYu",
  "key28": "2crnVUcktRgq59Voe19x3e1g28C3N5MoFNAjhBm7JVZUVMkXY6CAqbaXsSka9uZbG4Pvor4UNa1NnPUVWXDdFkgG",
  "key29": "3dFgVZEGFa3UJeQwib6vbHff9f7C4D5ZafFvo8Ha8c9bgmtGB5ohKLw56peKdjAKd7vNY4PXsKc1qeDE6tciL83B",
  "key30": "ddJ7ZwFe9Bd3Evf28Yw3Qz2MM1puzfLUrSGdnbf7g3bbLEJt68BRdetJbGxwbR4xkhRoiu68W2LXjVCrmwTbr5y",
  "key31": "64B42cWm8Rxic5tdyoX1qFsEKs86do2NaA74sZgAfC7BPSEcWfgjRBPczdsKyGESdQwStsKSwDHnYqTGDWwFu1bQ",
  "key32": "4G6MWEALxeZDwGHLnEHnRhnTiHRgyZkcLBg7P8qW5QkKwkqrK9Dx1Wcnxzmn6XUhcv5HjGRvmMQgdzNLxrjc8e4V",
  "key33": "2XB6q7r3ybeR3YDHQMaJ3roZdv6HQzFN1NkwTFjRVuKMSRLx2ZixfwbqaSnYVhET53AmbRcuDoefiP28xthd7n1H",
  "key34": "4ro9Y31c7HBRPHdCiUA2NCuSu9ARSXKKXGmAsh4joBwNi2tG4A4UtfT8vhC4wVES4SEtB59oVmyaz3JomAZowVZz",
  "key35": "WweRSoriHJm2vkM5eHKJxCrjTJi7CDLU6MkKhxpULDmFbJEt3Kq63k8rcvqdrmEJKTaiVVhWZTcHkkRCx7Vtxoe",
  "key36": "2QUpA4VoL6jAQuPLDiGqQbJJbZidM6ey9tMkeSSDWyjY6Tx51kbHoaD2tqXTnyu6pd6zso4WoLwkiPCT9Dk9vw34"
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
