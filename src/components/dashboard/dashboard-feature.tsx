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
    "2BUMcBSPbAmyUHm3BbERYQkzKmS46p9JnvFrHjSdsgHmkNd868wx3YRPdJCrNbhyXb12sWVE5cq4ZyvXsWBbXWPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bsYxB2QAdesN3sA93Jr8GGiHFD4EGFrV72nRqYryXvEKyRjj2vyWke9qN1DfVggqLJ6G3oBduhvKe6dTqvKwBkz",
  "key1": "4YAXZT8aALmaBuhaB4X5j3wAEmY1ibG8NSmxAWGcNpT5YTeaj8RzfpacF5AVn2vZatf6SRGxNqj8Czk6j2whqvzD",
  "key2": "LEEdm1Kmm86ttnd1FpVvdWcFzr2kawkYUZs63731ZfFNgxfJ2zw6Kbk137cLWiH53Pe27vEPVBCFJQaLRZ3Q9x8",
  "key3": "48x2TbhkbUhRKP6Hz9NQ194PpoKF3F3UzftBvEQniKAV4j1qWCA9vndg1iKFijkyNXvT1UgFHBadhfYpm92r4ioG",
  "key4": "MMQyqng1S2dz4USUQdUJtiGFEB6obQnPfyjhQRcqV2W3zby5KmaWFNxMpwknP7B1kav91ehkBc6ercCSHic2fwD",
  "key5": "qU3iyDiKXkbzoywWkPLr8U2XkTncYLBzuYLtrcb3fZfvW6st3AuvPAohd7r57BsfCbFX79qdQCZGfjraUbgfD8F",
  "key6": "2arBN86qPhHqX6aeb5oCFQeg2z83XyJgXs7EB1sRDTqpjpNs4siriAmnyPnX2m8GNJby2GH5q6z3RXenZ8aodLx1",
  "key7": "5wGTrHreH5ara56BAdP5nwkNPegDQw8fmkDtniQJbXR6czUs6eNVjHYyrtia7ckHS5zXSSstFnPJYywEzw6UmFxS",
  "key8": "56Fa4v8uv1nhZY6GVJj9XhCmASRg2y9SFSWjdyN4iqvXWCuyh9RqCpXyq1hJNmDSb1kmTup4caFZBCqsRd8cC4EK",
  "key9": "4VTchKRL4mAcnp9eMXdHMtGMXLnqfoG8qfMyQKw3jWbyTf3H3iKHVyPzyVkiZqGDZuFYjA8kBdaCLDQctHd763i2",
  "key10": "5wQbgFfBcL9TwkqzyECWmM5PHR9Fo85jZ5gQgtfbuQGX4m11tNzsdRWLH9ojCKLY2Mbq6KWFKcm3g2ks1fnpciqh",
  "key11": "3jgreJQRE8TKVG9SSBGS8FRcbF35pT2xNePPbroqHPzf2MhNW4ZPRbrUzNE1ktHwnGm1nBbWQsHv2Df6f9s6cg61",
  "key12": "U7G2qwpPjt8KGhMUALtnEHHwEYqhRFMBfFFvivYD6ZGmFjpdV1oMGf5mHahcDLoQ93pFfCPGmaJe64ZiQdEsXBr",
  "key13": "dkqQWM1QpTcmPLrm344DY2qhigc9quesTtFEDYGXUckNPvs4xZHLeY7ZPTCoM4hhsvDHgAtm9vr3CWT9ddWNCJy",
  "key14": "5vLCbjaBwYUR433ii7jzp8CPVrMzAkSUELHKKodeVL3Rb9EqbagQ56NRJnwj55LjXKXqDSCVSqsV65TK24RBCjce",
  "key15": "5Z3yRWeU9kXuxE35d7RMv72cZcsqPPoHLwQkKQD6ikqnnXbH5hpnRon6g7mVKhxiH491FXVxSRQST3kxsbeoDhbd",
  "key16": "B2iKc6RxkRYaAe9jzkMgpRjVA8XNK3BboB211z9FnEKAbmA3zDhFr2BXvdD31nUREFo6QUznA5cmyeAHH7PQJdn",
  "key17": "3fbUJZX1jMcFT7pLH1SFmFJVTonoW2wf9btKxL2MrRGUE9oaj7yC7uGyMCLzhBQeQbgJcna87pLcyMezubUAwu8s",
  "key18": "18Sdez76t7G47FbRy4CuA1WK7b1jwWshzNRCneDjGJ2LrKxKdhk7uBnd2dPDv3cQFGHoqcBXv8JRMgwCTdCWApu",
  "key19": "64jCGhAVhEEEHdKH6cXcBxRvNPynS576pxHxiQXX1p2XpHjmBGtvLWFrbcDKrZi79jDGPX3mRZphtLhpvMiBePoo",
  "key20": "aAjowZepbCydA2PbJAGszXKDuG7Fo5HFQkS6rFkSRpswgRRtP9JdSJ149pgKzaJBQX8ZpBnwg2wbeBGoFiG4Y5A",
  "key21": "66RadAReK3GKWeNz7yW66FYZGNMHgFrHzDDE7YwPXqeZAJUNmaQfPmQN2w9cP8fqVdvkGEm2iffUhx4yhPRfVkFm",
  "key22": "2HkoebdjLRt9a77EQepmd2acRB4FspLEdH1GviVC6iRPJcWftL6pndfAyr9X441HdTSreF2UXYxYbXSdhYHWb3vM",
  "key23": "4zCtUx788wCUFhYuCF4pUNjU9vf6JcFcuWoJANKLWYDX1dDPxr4namBmjUs3R1o5r6dpPjdeJ42pWGcF5EYvRNuB",
  "key24": "2zbJRXnP1REWoaR27htZhGpjDe8XRjSHAFDJzfYKQrQeCkwjUspFK5iex1esp79atWNWJYMaFWjRzFfWesYukt7D",
  "key25": "4FxoEQS9ggGw5VNDaeCxHe154WRx8wVz2awKBE3Xrbec2cQka2HBretC5keFNhzaSk7Xj5r7mdfiCz8K5VabszX3",
  "key26": "45u97ojnLpivgJDaYiQKQLcrwT2tEfRNgAY3KUM2AwjSXpHFe1rD3CE324quVXPDuhuBSRiQxxUqG2CCggMWZWhc",
  "key27": "4J1SHbyp61g1pvj5379X5GU2pkdwYpt2XmQJvUf1phcY1i9kDD5zTc9h9xN5TEypKQueSU44LbsEXdL2k5nt9Te7",
  "key28": "pwuUbLqXTWgvw9cFc72JnZWHbyMUkvpJi2A6n9zeWF9iKjpHZsRwv9hhBeUMr5iAPJDJ4vAuH8YtJZ3C5xMXTgy",
  "key29": "31gocaMohEx8ekmL92D6pSZ2EqL1u6qPCgXLpqdcSjYQyZHjrxCuuvUu9qPz7WFFofrhTRsY8AGUm1VegKhB2zpw",
  "key30": "4q9WXpbaMrrnZNMUDiQFQdY17qfZ4RjnhD69ffu24ZTCKh9AqPSdfzRGqJzGTNLX8XDoU1pusZSQdFsZ8Gx5cDuG",
  "key31": "5eRJFRc3o1dgQM1VrZcDn875Qcy2ZCGdE1NEfu2URLLHiwPC7ExpyS6GdJcVBp1d6J2DGMSj7GgDTDuwwPXCgeb5",
  "key32": "3ftVbdYCecHdMZV5WwvTEeUJfyadtYJ6hyWqP3QEDo2qpjypoeWMrYcXYGyn4pZvJbcxWNvRn7PsbV3a9dCxhxLV",
  "key33": "fK59ErST6T6Byjk1uLxva3v1c6Rx7vU5Hi7HKTDZZeDvoBNC6ucsDf6ebc1CgQRecA6DCoxZRggegLLfHMEP3wJ",
  "key34": "5DQGgkmQJVF7uyJeG1DB9wusJeTkz379V4gfTpJwFZNbZAoFRoMqF3h5WHK8WxqckGCmdv7uKgNMsinhmMAhXmWL",
  "key35": "4CPcjGzFj5MgBXeqGqKHDK2V4oj5DRKsqA21PL2279XoiCSwEwpFL8Tm4BViuALFoa1SXpesXV5J6n92ZzYzw9RE",
  "key36": "3ST11bsxfqj9feRn1zrZfzdUw9C169BMGvPqQjDERLeBsopfEnQQYmhb2YCVdjxYA3eDXosdXjqDQf8YERBV6fJA",
  "key37": "64SakuXeJn8FvW6pMm2F4XsnM3H3Ap22fos6LtevGZmtQwb1YtNTFHQNHWoVthXFkAB9K2UP75tb9PdpXu5t5moT",
  "key38": "3AP7qPojgTGBBecdAkjdWbsGXpFzR7Vu6Ao9ZPAwZZx5w8fuGsMiP3gd8v2XLJr5xanLvsVfaxS1HR2KCcut95Ht"
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
