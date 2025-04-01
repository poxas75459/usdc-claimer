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
    "5US18h8cwraMabCPYidesEGeYMt3mR7q4noArdQtckzf6hs6WN6yxJwvPCHYzg7e6KWxvd2112rgaCUQ5bmUcV5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vWCWhy4oe2PqxWJq6b5RKTc6ba1SUSshojxscCvTnZ2c7ScyqYqYR672kwGG7a1B6t6RknVkwmSmpcJ4cxU3oX5",
  "key1": "3eza2Msb6EDumPCZCDFmnLchn6dh6dhtK57Uu8nPSZJm5GECXTzdCUSA8R4tcNfv4QJvw47kWWrM8464so2R8TrM",
  "key2": "5UqdmMWLuMHE4kYxa8yo87V1nVyqkTbcBAt5D28Y1hPz4x6a8uEpSqv33LK7XLnBZJH47jGzgKCR26XJ3oUJ7koa",
  "key3": "5MgVJnia4CPjtyG6MLcMsqZcQuwxxo7zMd5f85PbW3EzhjAa7NbN8iRkrbgEzbd45QL7CvCkws5ee5376hBfDJ6E",
  "key4": "28EXSWDitYARRZDFM2cmrrENqvvN9bzcKxR9uZSnWRuAMdxeJd1w8dSb8SEtQAMxQ5Nv3eTVZ1CGa2JDCsjw1aQ3",
  "key5": "tk2HtMkebx781MpyGT5DTNrQjLbUdP9XR3egmyGRe3VECZH5A862pbrKmPPbEiCYrmfhbYAYrQhtXmuJsSZ7cFa",
  "key6": "5Hg1mEihZtwH3nraRk8hFzdjXnhCYrxvPYBG17qrUmwbkWRc1DTLW8Rfv2eNBRnZtyEjmYA6eTthZUgPLKNmenrA",
  "key7": "5wLszJj1Szw2fG1E7iLXTyueGMSvaGCCAKuRsf6oXkzwQfMq8MzBHrdbhwhdViHCiVKQ7MEQ8QAEC47i9MBRXLYY",
  "key8": "4HRPH1Ea9E2fVkC9ZgUbzSoZvdSUBPnHvPXcRowy7eaxKDAVhGdMcWMbRRKd1v96P4pgCYAYxerJPSZqPgEuZBoU",
  "key9": "uVncajKBd1E5iLBPBeQix9vqLWhoQjFd4H4nHTK1cbg9sPx6a37GwGP2EE2GDJDuBSeqL1Nx2xKPxnUmFqAjr8b",
  "key10": "3fRkpSPXBFRtd6LC7ZqxVuv66jcHYXZHqk9NALEnb3X7gBEYU1QRTr3Pk2SQ13MLRTwwoFysJBtTYJsMJdH7a3kU",
  "key11": "5kz4t8E5X4kQb4Cua1Mc1rDoNkhdP6pRy6X6cWijnkANZxo9GB9BoGQsgUaccPjse5VRKrLzSrTLivQ5G7EYyMkU",
  "key12": "FtuLWyB3SyhWoT2KhVWz452LU4QcRpj8Jkp4ts696M8dgXVSwGZ6qDUsNq932xrWhTSKgVZTWBEnnN2ftC9Tfmn",
  "key13": "CicHuTF82Hgcym6DztmgnotU1wW9Cmn1HW1rd5FLSAoDsLvuNVmbBTaAbda6aqZ7Dq9ebHLrSzqHmjiF4EQx9Qr",
  "key14": "x7AJitLGf7CDcUjmFnyerxMctTp6ZZvUxMCNcSZ3yqpzG8XKmCykYbx5YtQeGo5W9cXp2Wa6RqKk3UueKcgKwKS",
  "key15": "5xrDkJ3RhoBS871atyNYZ39q6dAE4UoTtNTAQuxGQ5B67G57BR4t8w2UhQayE7Tmz1uuJWwH3LMCdcwKH34wz7zk",
  "key16": "2a8siS5v9fmptSmM5DNRVUBccmu54yS6G2jrDVEfFDecrmJ2NN8kCpVJQZg8XYs4P54XyPgp5riGbUYD9KXmMEx6",
  "key17": "5VVhvs6WD11BB7U3SxdUemfGN94qXBSTs6mXbVDUzVZr2UXyv2D6tr1Tu39gR7QXTp2tRzMTUhJkS9unkQ87nW8r",
  "key18": "4PQvsRmaKoJ1oR19r6Z2gTnrky5Vt6S5CvY2pq6YvagS3HNfJejJUruv1yvcprazdaVrDB3KuKEfhpReU5yUWKNZ",
  "key19": "5LPVhKUrASUT1iPaqZcoicA3Xpx66Fm4tEQZsiBkVQizhAKZCPjPx4Yz5PGm7Rd9iikZUA4yA9QUSviYYP2LpqMN",
  "key20": "4RnehdbZtYvrfm2QYQJpCjBi6GMMpJ88439ZWZ4P1LtD4d8v2LtYMwJNGx7faH76WL6iAXMgSREGztpNoMejxZTw",
  "key21": "DrHF2gPxpSMxXYQt6ZBqXgiZ9FXuRMfVd8bCFzrvXR4CdFtyJ2p8w1sHS1z6a3PUzpU97XkyAmqA4pbvTNEZG6o",
  "key22": "dMPvCUaiRryACQutcgf1TmqKu1Hpoe1hRdG7rVeydXZFcuUKNNEPgreQSM5MzuZHEAJ72hJA4ZrJCcBF1Dm7tWU",
  "key23": "2R2ow1LijJ49kkf3uqJnyhpyZ3h7sdZo1omC93WfEMqj8UFeHv2rztnyKrZ8xhMGmYvuQC2ohsE3HkwyaoPFyQ3x",
  "key24": "WKeZwETRfuEGyYPixpk7KU2FeKvsuTP93HCHqyVfuwFjZW2TrvHvvd8A9oTLQQgj1wSF3kYQmJyAFj99oCf9MMa",
  "key25": "493k2ape5WB5fUJgtN6UMfECen7qHq72DoZ2MCqK29e9BwuhqimR3DqUqx4whuVZYLTNZ7woUrYk2Kp1BZ3xYvYQ",
  "key26": "48wmMUZXGgEX6Hkww9v4t3NNxbx1zuf67kgARqAdVR9ZPoe3Rzog5zeQFV4GoCQPz4LcwtkDxP1ApV5iNg54QmRR",
  "key27": "3iR1XoJXwWiWpq6WPTaBuNkKdRZyy7KxCjTtJQVQ3JGcjTy8AH8bPBBgrSKcp5NiT71JkaZY6RYhZBHFssVAAggW",
  "key28": "2mTgjxRfsLg8yXogRGPohgbificPJD9hoeeK3kZhcFXhbvdXXUGhuyuG7q3MdUtFfWEj4dLejNFwpCfA8m5g3W6p",
  "key29": "3dhokqSWm6w7BagcR7yAF8Gpg5apebqz3qs8WN83t61VtbhLSHYNACj7ysXjBaSyuHT2JTMCZ4gmcfJ7nJvL4oL3",
  "key30": "2jQu5SwHPaxae8VNmnSvm5dA6kgMNw32ECDnX2SkdGQxcat71BrMJBtJA2oTVUKVonjio81w8CQ2RXZ4RN4mXma5",
  "key31": "5ayyRCmV2AhvLpy1qmTALKMUUy7FwKG4nzyYkJHweSqoiDbCcjJqnJpuaY8LR6xy4cRw8vAbtm2NKUKkN8PaXcH8",
  "key32": "66JPHoYPB3x6Sa1RR8BEooJgv8bSiR7YQ9VJjApuvPawXLitr2aWrJ54hX1eKJWw2vakucZ5P4YixBk7sDXKUJYu",
  "key33": "2DjfhXjpSU35tJmYNp28igD1qN2A8EdYBJD1ub64FCTzRjsngqS4mMYDrAAwY6buvJeUQaAz2GTpmka1Q9fvHzwU"
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
