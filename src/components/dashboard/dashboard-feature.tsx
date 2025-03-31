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
    "4WRYNXcKomZZDXX7ZBRBPAcb6Dun6Ddy2Kvwdua9Lien3MTJCJLq7cdG1tJd61NXUQbyouPqXg4P5KJ5bGS6YXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnTrXWvgu5saB4otCkG3YUG9mZ3f9UamXHFsar1kQDst6yrvSkuSM6PJwxjK5zsgN1C3wWkBpjNKUADdw5Qn9be",
  "key1": "47ye5NniLBvLf7GkJm36Cu5A9YxUk2CTddWPhe6yKSSg4AEkPTfQqSkux8CfDZyxhZsDBpDNevzx3iPVEBQpTjt3",
  "key2": "JA52j3aPL7Zn62WGpT7vg9jAYrFKGK5rc9fDJuFihcjfC9LMvuJbfH3AQRWoue79RN3oUgNqv71y93TA6YnemD6",
  "key3": "5aRBuP3ERKxxznc4k6ZozmytaVgBJ8v9hv9Lz7x5vAsAvJnk5FZ5PkKYurSCyjHep92ua8M99CdvqC2cdLi9Ywjz",
  "key4": "27TMyHhygGNZMjxUE6GiGpLuqN9RifSSni2Bo7rEu4ftppLhhyVXY3M4PtWjZQYUuJs7rSXKc99P9WQ4aYcBTZoQ",
  "key5": "5eF7RVsCeANGpqZgu7jvRoxv2iKwpqVXBn28tt8f6YQNTLS7MmsFk4G6yY4zSgLuQc7ExzUXTsrmMfzoRWHPn6MT",
  "key6": "4Nsu2br6KnZrD3oBVyrgKbb6AnxVCsnKqTqrkv3aL6vKPUxXggL2PSYdX3xQEDA3fp4uWD4KzGfgUtsZGx4U2G2P",
  "key7": "3PRCTRimkUaKfiu3ba1Acscsjy5tcJTaAdo2W2w8rfZesL4cHCBcxHvoAakQBPFRtWymZG4Wp6Ddu5kegr7p85tS",
  "key8": "62P8ccrnBCMP2n95aybUxR2pvup7gXEyLCKGYj1rPc3Va2nE7LNVYiKnH3yASoBsgLcW2nqeN1HMYMbLyQP76vF4",
  "key9": "x4TxVidR4t2zs7tGWn4uLmxPQdc3VDTtF3caDVERvktJPUcRfsURJZrB4vnNSGNDDiFDwnM5v4D45hhrfA3EUHX",
  "key10": "7nLcpAu2KJL4jmVhc6qWrqCLHAQVrArdGf9rXkAojy8UKqMUdZ7dJgLGaD8ENe5HfPbgb7isvJAokxYQBh3UrGc",
  "key11": "2bWLjLekre1edxGg52mHPWJumhbb2EQamvym19NPvErxXJjVYDorncCRSr7KTEL5LjFUDC6vp3s22xwWBHXD9pUZ",
  "key12": "qJmcuhtBV71wFNx23T4JQQDD8tqWgFyJXi9j2816ETicwA3yMZA3cR91w1zLwCietaMtm7tJy2yjMFYT2v752ig",
  "key13": "5u5uEbEuFLVkNc7NFPHcxDuHQoQQkjJ5zTuTAqbc7pkovFkEnmJx5U9EvqKkxotaVtFngdSti8Y9tixTT9dSpoD",
  "key14": "ms5oSjUt2s36L2gCpTE2NFYjpyX8HuYWggCaRkb1jUwvRUGGfuGnHemTzmT3otT1qk4XEG7hMyx2bm7AQqjiwub",
  "key15": "65JwP4Lm8d9Yw9UtS85cHjAzGW7LDFiHVYg9ERVbrxLnMVAoKvuFGTcVoc6GwtJbAJHnYv9G6qDqqhr9CAMGuFsr",
  "key16": "3fKVFzccBbi5SVTofcFrfNZXUNHLmt9PkEbmZgTp5Z1jogHji7bnRvdUN6T9kW9PKao9ibCWmaE7cSFEoMYncQY4",
  "key17": "5VKMw9htMTRzGo69YMHX2qqfCysi3wDpx4X862VJZcXYiZdMwpQ4nbD3q52TwtGivqppKBfknW8hvRZ27jgHjWX2",
  "key18": "3MEd7EPjxyMVVLGFJ1ovzN2rmtUB88Rownt8VcnNWLq77Fo1ZaXwsNbcyMZJNNhvoWxxLuEtsRdFKk7Gy36KWHpJ",
  "key19": "41gqjseRT7cJb3hzhSxGgRhMCYmqDRs4QG6GWJUjLumfpVTN3wVxZuu4zKTRn3TZS1BHv2zkESUXHe2aZHmQJrtx",
  "key20": "3HEh2q8ZPrbAxVt2i5XHCB3vQmm3BevBTGzUdNGZjrM4LCnJPiBG54uhTdpzqw53FmyW3Rt4b8EFuEo2quCHutxp",
  "key21": "3sWeKDXKb2eSs8kRJZrhMg7U5JyvmTxpXiEbwZbppqCJNHXepUu7U7CUgmx3Kn1cLBhzMsrmTESLtEoV1Dee7Gwa",
  "key22": "SsMDkdG8XQRXHKJJ4KazroDtVsiWsHS1nXfSQgcUdkJVq2RNSN443EMrq6xFjURZBVCXre7iamCLU6s7axTYCpW",
  "key23": "49VjAKNmv81VLPeiXcJxTJferV8w6yipk5pbuyroVj8vrMHp8yXmH2DnFKDisWuyYjt6YfuCqxPB5apz6Vv7b6nN",
  "key24": "3dz1xwfVstNrpCnaE9k3KSHvXtRD5XuttrsYzYBi9mxtyBngSfg9C2HrPqKsCY14PZxfRE6gWEdPtA49iU3Fau2H",
  "key25": "5F1pU2K4kyCSLomHJAh3FaUEJZT1LAWH6xjX6vbNQH7VqEdz1nc6pW6ruUyn2y2Vvq5WqmEyT4JRHocBxD5Rby8N",
  "key26": "3UrpwVEbK418UQKDCtQGk16HwXpAzifnT4ceJYpe6o69HBtG6ddXy2c8EBWd5fafDKG8J9BRmKsQMaN1jZ9GvGR",
  "key27": "4xnGbGMkzhjdmG7VDgZzCTQpft1iVnKMKHQe5ynhaibPQQSPDXWwkimuqW8viAfJPiLwNvdLzdWa8r7Gu5zsAkuT",
  "key28": "ZjcqcvMzFuBMYDPZtDVHhng9tevFCsSCt5KbWkJqFsEt9UZrf9dC9ccUzmWpRwKPVW6iamAY9W6V42hjg5fJcnF",
  "key29": "61Lh93W5kfuYL1id8EaDtdEz5eWxvfaWzH8xxxjEWsrHki3oj27NxoggHuGw1XnkPg9RAjVqoHfpzd7HNbenarNr",
  "key30": "33MfFZHXf4X6patrbu2MNY1GEw4rWLxJrVLtATgxWJZGXSbg5mBU6okHbzXzDm6eETg9LL2imCzLpNfBa8hv6PPw",
  "key31": "2eAXHToaoXANaPAdMWkGzjEs4fQGhjrMQoef6hD3gYmk3VDT69mNPvvF5f35KMQHRYpD7QxBvSswURTR5qsBstEn",
  "key32": "41xkccvSpfZNsirdVnLU7BKmRie5uP4XR4KSnjzK3y8c9GLBX62QD1quLxGtwUZvfq52ZD8E5R6Zb7Kr77ywN9yG",
  "key33": "YwbeJWTA1zQkCqX5LsamaN1utxaeoiYGBAdNmJ784MmFogLqUMtuCQb6uTXuz8zsT5DmWCUnejmzugv5xC2mKWo",
  "key34": "5wNBbQ1VK3Ypy7RuAk4QDhLKaHqthBPfXLzfGTWZP9ouk9xGDjKiPo5JBFjfgdmrtfCJmWGJkVAhEth6FGt3uChS",
  "key35": "2hEnaXg4HdqGAtzP2g19ozgRT9DFCAuPUoMFpi51NdzkZi1UoCcyQ53bBZqjWqFPev6sMxmjdHKsHbMqgHS52sHn",
  "key36": "2mkggdw9VVKFVgAMMzAL7L4sLtEvxDpqovQsSBnjDwjT7T7wHqH4x1QjTLn1PDJG4aHrxcxS7LZ9wNpicsGeVFCe",
  "key37": "3y53yWPLLuADrjMLFrMH4iwTra7LQHVnWbMMTNHxPQ6kvkP9zKRDkVRtyyDNA6HiBWv2ywFxfTFyybfg8nC4EY2E",
  "key38": "21VQXmTCZGjjVgSiy1ZrRWHP26hVw698qcPSoNyNYKtipTqSQYb9nc4ZeYJd5A33FDUgbAPzjT6t9ySKbTtBEk4w",
  "key39": "seWgvD1hpZMEG2M2cM4rcsE5KNYEx4e19AdLdGAFHLpx82JR3D2ZDfedRwDpgTUTvPShf3KFxcTK2Fp7X7aVPJs",
  "key40": "4GFkbsJbMTgKak8HfWu3u6Ga8at8UiwHAvCcSrcSreUmF3Vf9VkV4xW4Qgi8pR6kGQ9vzHBakGsJe6EcBuAeqxWj",
  "key41": "4QyxPCBMigFwgXP5a1QhJhYtjbXH3eSX4DnkVhRBjSytwhLWBxUg28wN8ErBdwV6x6aSLwa6Tz131fcnvuytGJm1",
  "key42": "4vXgMm1U3fL92WvFuAnCFYELRujM624PKBYRsPcuaaA11ba7Z1YDtD2AQhDTayqZ1DycKQJ71ZHv18j8eQ8pu5Sv",
  "key43": "4RBhBuEgmEWxEPcmWyEKXp9zdzSPnM4zv8AvyH2t1kH4DRZn2W21vCr8fCUsbrzZoPGJzGcNxiHWUMhbXEdeA183",
  "key44": "XX2gFzCvsLPFv3MQa48hcR9d62CE8ABiNLSGtotfQgyeDnWAeKUb3AsKKyXH2J6WTL7tS2hc2in7fmtHGAW94U9"
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
