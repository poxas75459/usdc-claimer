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
    "5Te8kofRkpg9HMe3hPrFy9NKScd7RC7LxTp7soFtpspQ6QyMJXQroAuxCxNbodSCSSSw7Q66eSQZnf6tXGXiTTAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUYNicubsNyZNdWN6x9gp2cTkb6urJyW5om6iZo9FMPKVmMP96pbYtuwJwWmbDq6Ni4zAnmosG6Fq63tT8aAFHZ",
  "key1": "5EoZ3ysmjbMTrNy43YXU5hdW9p1Ko7RjYbq9QryQrDheUT6S1AgJcBeqssvt1Ae7VfKpcSYLmxKLUY1CV2YRWCVH",
  "key2": "jUpCahyncWmUKMMqs11MpuHFwiRmXAQ2fyPLCovCLaLqJqZB7hcHuJUFvqaN7CZpnuJ8Hyr4o48WNj8MGhbRgXB",
  "key3": "4Lmz11JVwS9gdvvu6CUwNVhAdU1uiSRHNLyTSMJufXxtjZhQWZRQpb1XLCXsqJRHNrhV5xUbharYAJHiv8F64YZ8",
  "key4": "SAK9GG4BvsQ8KDMKpaQnXhtSyrLcMbgaKyqpfpepkZsG2Uovh8ikFAxK6FVZvj5oru3vDHsMkiCsae8o4S9WnqR",
  "key5": "35psjhRPFrdXRD95xZAcT34tLHBJ3AbR6ZkUPfXevidEDvj5oL1BiDm1PLRBkMH22iUH8H2GPTvZzG85tjkJqisx",
  "key6": "5wULqMjMjGNCppZ75kRw42kr2JbwHwWEFR9LHmBJ8QE3q6MG2QmcebcgSbobedNHrA493S8D3dEYy3hzqiKKrspM",
  "key7": "PuR69euTLWvZncJGtkkWra4tLeKA4e6p8rQ5D1PSXpFXtCnRNQU6QGXZKWEet3grxMc4FzjghhLK4QRL3beZdVp",
  "key8": "48JjXdzA5AA9R5N77cao4uwnDHVy3noXWBPbGhjRBjDYzjX7aKe7NxnmXkDnGCwK6Zy6Mqk1XMR1aVMPFeLouNpg",
  "key9": "9cUarLdYaK7VoSyFDyMDh4JJ6KGUqCxmaFjv1c7phLUCetLntcphmVPNWXAiqCs8qXxvK8ZdsitYh5iXqtsMDuJ",
  "key10": "334NBmwgNJ3jdzYKXLDtPXFk3wUtqjAqzFjcCvGcY1d8QZbHBvt7mCHkxR9Cxib9rVqsKhCo6moW6LnDjp4y3NHA",
  "key11": "29ApX3rcYwDwWUYPTuMraTBJe6U6gpBHJh81j5ixSsuvahALuXBU6JbqAqT8d4Xq5NJteYDinpGRHrQASdNTJzkT",
  "key12": "33hkmBc4US17Vf4Vfm6Vd77QN15ASXmW1S11K3NKamFtbvjkFmg4qeYvPLGorCW1h3Gt8JMvfWx78dZM6EunvGQC",
  "key13": "4BSWFAhMczJQwMoXGgEER6D4fmpmdfBivgLWNoubzmU686BgAB7sx4AvLianPxG32hXh1AJ8Tj8nT1WvEaZhxDqu",
  "key14": "4xmp7GzWhhi38U8sYdBgWfA5Kp6rfZMZG4AZG4XDA2EKkdFFqGxqoQdhh5WRPvjDDqXFaSxrjd8zWQWak6t2ajM7",
  "key15": "3DNUpdwRKzQSSpe4YZ2VfvXaCvaxVeVTSfzDrdB8azSgRwYL3bHDB9VK7TpTDi2hBiDZ3UUhpzgKvUuCteeriJuA",
  "key16": "679pwovSmZvpMa4KypkvGqzjLnD6bkrtru6HUFNpVPUu4J497kiKzqF73zQgpETXWW9EmiFi89dPQBPn4GnjQycM",
  "key17": "5ynwTom7nyT9WQx7Juus1R6ryxbG7QPxaguScJQnSHSVuvv9MA4PT8vPKgwsFvpVTVpAjM4j821QBCfzpfGiAa41",
  "key18": "cuqcmza6cqJMoyZXE1Z4C7RmbizK57A7zWCvnceLFwtnnxTmU5k9prG8nNcHkTXwp2J52Ld8e5svoJg8C5SpC9E",
  "key19": "5rDNBonqtNUR2CpzRbSnmHcEe76Dx2GMJSLTKoz1RyT7gg6yNN2QA2ay1FYA2wySNr6jDpYnhHgEEsZcp6mcY8w1",
  "key20": "665keVtxRJizEhDWBV48VRUKH7DMLoc7M71pAtZY1kU8c9BZn7d1zXghGJpPJHmTNyLdgVadLsDeiPAQ7cUF5f8m",
  "key21": "3VrcbhJwYJ3PhX2cpkVVpcs8Gwag8XTkD94FSuZyMNVWJ4qUKxkoDhyRzTWpc6GNcakwrSGmiZpeHkUrzN6ZPChc",
  "key22": "3rswhQZoGDTztd8k6FzpZ2G8CAu4r69oag8JcedMRSccHQaJ3t99fyUoEEFq1GssCRcttxpgfkh3FuABnRr2Sf43",
  "key23": "4dygtfycMjL9PCGwfdnyZQ7sEjt6DKN4jhb5pZ71g8hCUYMprv3kbiuSa7hyJhd4eNthu5h8GQnYqVefrHoMJpDX",
  "key24": "5axnErVczk26hSLhxEAJ4hX7Y8A4xxLvaLcDgpBq6G1TXtt5674h1D1xRLQY8DjFDXV8gwjWu3GyLavYvjPLVxSL"
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
