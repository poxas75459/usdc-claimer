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
    "5np9cGcP93naxp7ayHtq8CFugNNDXAgbX53jVgeGC8zAMGtofttn8HP1sxcpSoCFMQSynrVySfmPQAHmW6EoDV9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5ZW7igWDMyzUKKmZ5cvxdotoEughnE3PNjb3EyERm5KayAzNoLVqVcVj1TQFSKwbxTWaigcpsZvyAJXMFRkM2A",
  "key1": "48mREpNYzLQrd4jG9KVgPPjhiAuk4aipvNYDZZpUsFjBQ3nWhC2STVDryXsBZRPUSg4tq91iHFQHeDhJHyJVkpGS",
  "key2": "3BkPFYsks596ZmH953edKyoQxz6S4RhVk9Vu4vU8ZRDEC4KNAYLQYaNWUgx1fuR4STyeYfaff9s5XNUyudpp8Roh",
  "key3": "3KEjD7rFXwVAcUaHhikQXGTydrH1f9U5ers8e5yHUitfjQYQFmQPLLasYSA8UsaQKYz7AXDJKj4iDmChHcfeatQQ",
  "key4": "2cRDEw9GKk5P7Ej7edc2QGqGbxfCe62seAyV52jeZ59pJhtAiwpCAhyLDo283XHK47JFtqq8Sc7DJixxovcXUc9e",
  "key5": "2FzDj25hgJXua3u4QE72kH69NvBd6kuqqCachb4PqfcjyCWjxP18ksS1BixF29q7gLiLJdvpH5booeMmuttDT6DX",
  "key6": "2gQ4WyNLEX25A6mMabsG9WviuUWkGyJCs7TXSiCL1r22kpyCDRbzCxJpiuEXhAKMTmjgELEtXjgBgmRuUsFwK7Y2",
  "key7": "32CYgKv1LymcDHDmGNT8r74AyvX72QEN4BjGoqGkrGgDfayyWupLGy5Lru9dw9aFA8T3eZG4YVxaSKQqzqQnQHrM",
  "key8": "3YHTwXGJE1k85YdesthKksMeyNYQSaKvpJL6MvkRPmENp1EVJQ5gcTcDYA4rADrN12sHgB1sp2ot9udGbk5QWR4R",
  "key9": "5sa4cxv5Bog9bjA5raMEKi2eLKt7nwMbDJcHLmvjGsMnMdcKtAqBQaRh1eQY7TtUFFwU8hqsCJaXxAC9HvdDRYx9",
  "key10": "brq4n6Cxr2W6ZmRfYgk9scRHiTc1BDV4BEhGGao8nrQxfZrS4YCEe89rHxfFiMyBCD1vxeVGFoZrW63qkpWLGrn",
  "key11": "5qSWsnKnMrLTVX2vzUR6LZztqSuuQ7E8NNDLxJUpwfGZwEJwuFX75cBeD1RByY3ZdPMc7Uf9eJVJgx12st2JL5pT",
  "key12": "sKM3DEzE666bC4qroDR6amNemGTJUTt4x5hhdSF2TfY7fo7GDrsWMvWp1n8JL11RDt32RERbzSVEVXeKLYdgHRm",
  "key13": "49TDk5yeiPU1tct2GRRTnSeqdNwQi8RuuT6LJD12QEmkGtbp1eot92y6AodGiZcFrC6yiMe4kbeLwkngU4h1Spcc",
  "key14": "2q6Fp2E8uUsUzy1NfLEiKtDK7zHLqBCf2pyj38DfJDSM3M5yh1JuzftHTTnmffUfqgGppCJLTmGmgK5RvhCkpXZx",
  "key15": "36KKqhx6dweN5TqDKaRgJwcne9Dcjvb78kYNyQN24YHH1q67fh2pKn2GJ2Bsev9F6jqDKwXnGaDtG5oDVTzhwR8b",
  "key16": "5EzcrqVL9pJRSmskAkeif45PMzusW8t3ZYdDTrYhvSVXJwtzhe9ePMLfC7ZezksbTofJMt5BB611yoxqHau5f71K",
  "key17": "29LpwRprDJBETRzfwC9aLssBStr5HFJNMiQF3F1so4tQBCZ1tawfwAjVFsX3mRUed9fxgtn4UB3bAmm8GN8XPUd5",
  "key18": "3uqHviXMwpmb4GsXfauZYG5JLUnHKXv21mCo1ctqVFYuDgN6EggbUjtTHviU1aN7FA6aXQARtKokPVDz9vKMKA3x",
  "key19": "VyMKdpRKzPHNVfMi7DQe8fmGmAYoAHTcm5zoTracP3PD4UA6gAuAGQrV9BCpgmnor4dyVAnc6tr5UfobUhJM6Dx",
  "key20": "3zWMSgs1qKYZd7TJ4pkzFugLRJ5Ughz2WdmFs98E9Q3M63Q7834QYeKg9E13tEpsf7JsZKQjjRi1DE6DCW5H7PoE",
  "key21": "2tAAv2AkKBDgpnDFMQgrtoE6NewcG53C7KXvgcE9gZFHW2rhBXSbzdkgfbNFvSijEEyuuc51tJsB3UEhBqvRr2Ui",
  "key22": "5x7kAk1SATtdq4yteknZFmR6d8GGV8XXfV73PcgQKeHKvCKXKCw8AsytZc5uSqA7S6pozJXH592CzDhtsUFGTQhF",
  "key23": "656gKQ7kCeNwFFQxUeaTE2a67h4ixrVgNAA1fJcY2qki8dhVoTCGAob5veJwZ7fR7UUortvUefHqcJxAkhghAybi",
  "key24": "2CpwwPjvXfdMuCtruhCVcMhxEGDJAKTETFo6GKEFo9XvpvaSVNS2HzjFbuiyRf9KQDQXNDUd5VhBJ7jodF386zZC",
  "key25": "3pxAn5fQPE5qsJCtCmcVD1HM3nWH2DPWQNA8n1YzqxpkWQaHEdm466gq1iRo9FE3uCFNXzSfEtJy8sdkWg8owjgq",
  "key26": "4Pz9LjxKkBWCWfXNTfSWBvXoYiTH4rquBctjDh6hLrpc4fZehd8HwYK5jLYZqmJ5Qqrgrn1XWs9wq7APaKxjvWyT",
  "key27": "4rYxAhofnPvHbadCNneDJ1mmH8dCkEAPDZeyB2e99eDWzph4fUY9cDeJV92ekmrbCfNR74uN4PShJcuAPBXtuQcc",
  "key28": "eJndQZgr2CELDpJUpBQkL1f9oKSNcnVDFfKoCW16Af9tdNXTSgYW3mcLuMCTtjxxXDAjeBtF8n4bQHDvWyzQ1F5",
  "key29": "4ee9XWCzdQDJ12XZJufxhn12kXx8k2WgDw8FVxWDJwGnkxtYZBri1onTnVwRbyKQhTFCSR6T4qqjsD8xCseQBA8t",
  "key30": "BFQLKsXD1CGZgBcFbMxK5nV3Fn6SWgmVjF8Tjiq5TPBE3j8MetJCyvqQVy3x7CKnbJKrU67GLMsPd6jyAaroKpT",
  "key31": "3rHbykEnx5czQVaCFHQpD1uToqcKafdRUNf6PhZBdzL3Z6Zz9QNRC4kHjX2byCwCrwiTof97py7QpwY5DxeLv3gY",
  "key32": "4mqPHPuvheoyd8H2BgJNmiiNCwxrPBo2yLTC16Ym8nemKjGUfJhczSqvjGJuyCY6xFguMpToZ6nP3n5kvdqFa5ko",
  "key33": "45X2FwHUx9Yqd4pMNCC3ue9wXF4E7CyCqAh9fVwTTUoPskV5m5umH9GeJDw1NNmCCXaL8LFwsg16V8WwrwkbR2Xg",
  "key34": "34sRKbkUwEWyqiJC7xa6ctPjZXr3uKPA3qTpHKVdtRu6YTityHGB83f4XD3y2qFHAffaSiu8HZuAN8b8di36arqr",
  "key35": "37YJa9ZxDpFBXH7UZa4CbkSBDCrS3R1jucUs4WeZZZvC1WyKuoq3XW4Gtbgk7K9n7qPfUFW7wMiCkCCmHnV47cDt",
  "key36": "2WbPrzaG5LiTiKHAPafiQrtJTpKGchz7rzsHEWfU9rTkro32LGCyMb8NogRxjcTeGzmmAAi1wVEkFosc2741Ede6",
  "key37": "5C9VxZEG461wDpa3cvFpmcPuK1qSV1aCoQcvdj7rzea3pE9oZ3PzGV4XvvMikiJ8mRnUcAN4sgA55i7o1ndmoRn5",
  "key38": "M1Cas5Mr4FBCdczFWFxsSqoFdBe95GQVvYoWaA4nQdejCqPSBgtqkYMvMSSecZFQKY8nQzFCg3hUjEknuSnyjmS",
  "key39": "38fuEfCojmZtXhJ6uV9nouPhmN63s3wtEQ1iMBNUY51Fx9XPzASniYbu5XceWz8tDAnBd1tSUZM4xvofmQEnmB9x",
  "key40": "4KUs12eV8w4JCiaoApZyLJLHvYEsTKqgr1Yb7R8U7pZSAtMnfGt1KJRBQQZGxigaJFdF2iReqamAJcWnNbxySDHr",
  "key41": "4cg9henTkxS6QSA5uAqyGtMmNFe21GkwTJdo2KqQ8BTiGQc6fXePNgVmkTUpq8Lg6c6uar7HxC65MqFv9Vi1kgne",
  "key42": "55qHn3RRRdTjUz65ixiPUcHZiqtupjDsgz2T72C95hE8Fm4V4YGwtC9CkdAPVXKp21UsfVygwWWoJEwPMLtKgoJk",
  "key43": "3y7Tc6JYYktUFSTJHnBA351ipGLcPkavso4NmrCJFbEaTYsvi4hmah48sqSr67vKVHzXvWCw4WhCUhu2Tf91feto"
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
