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
    "3BFXGhfWybG6w71f8HhXAQ7eaTFMKexk1JE5GiP9H5ntse4QGfR3UghhBb77TGriAQB2S5t6VY4JwzmQEFhF5fAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35scCnQBHRF3A9DuGy9z8Ds2LaNAQrQEiHTUjG9XQ5XZUrio3uaDob8TKJK3mdRTH1hikrM5wivzEbWgYxJqcshq",
  "key1": "3UiSVsSYJNdxTRmQTEQxKrtL7u7ycjst1MTQSD993GzpJ2t3QU2gR3xVSqb967Pv1wDSNPwcWYoPB47Ei3R1Ufsk",
  "key2": "425cm4UvDfU6zRoaxR2396r7C46Y97b9Ys4nbA88m41BUfdtGgv78xA8Tqc8JtKQpG7JPna8LuLR1zbqsx2rrE5Z",
  "key3": "34kghuzfsLgDGUbWu2wmoajFgP2eEeNWp6rMRMXSifoMzNNPsxiHgAT4iMh9ke9rSbwxXSoVHwyHSvSwu4rgcwHd",
  "key4": "LcVtRZa27XcH9epxwdzVUNCahNqfLHSHpb7z9rK9tbdDGreRva6qiQzewZ33FUV9Ag77t1jB5qy5tR6py8MKsQN",
  "key5": "3bG6CuPzh6BcLhKcfYGzTakyGnsbiXFzDu8Kwavux1VBR13bRahpP9wPsyvhuXWghB4JuPCscoRp2aYjEvisqJny",
  "key6": "3DZMQ3ED51UAtGpMBAnRXCfnDbKavpfoij6xjSzar4DVzmd9tKpnNkqoQ27W8fQs2GWiWN2VHKf7Z3YtyP9taAvG",
  "key7": "3vPGcmQ4eqwxW1d3E3FNqWtQ9ose9j6if9HosRhi1Pfb8Bn9WEUZJDovf7JDjHebBbJWVAoC6KC8Sag8M8AyshvX",
  "key8": "3KqCn7QiCoFPbEnLaJhstMK65X8qr2LsENYAThd5pVMcNh7ZAhgoqqkJ9LW6tSLcykhvqpxsYHgW6rq42zw13vti",
  "key9": "BmM5BM1AUd9pdkdt17adXKsauTzuZUWKzGB1FKfyj3g2no7Ghuh4PPGoyy1gT7SSuXDNKacxUug2Cdia7HWpdPB",
  "key10": "4bKKsV8uqBpQgNcy8GZxyudcZQRENVKGBedsgpsKrab23iQzyUfPUCUYCokVD8VaMfvU6vxJGCqXv6XYEq9QCjj6",
  "key11": "CoimaspHq1vSgVYTx6LUm1azStnuNvN82GianSFCnKwEuAGG6shb2gCiuKge3CdXjJMQvCes3fHY53VsV8VxJPt",
  "key12": "58U5b6p492SKogreCLs8hHT1jDgEopXpKi8eavRJNjE4LcNJjTieFEN6TchmSJMK4omJd88npxnJ22CN1gCeWwJ5",
  "key13": "2p2pSmqwo1NmnpiGRKUwppLm6GXHcbrSQj4EtKXb8a4iKDjqGkZu63ajwoBsSAPu1k8zMeuVAdWneeG9accZLe65",
  "key14": "1hkSKN6dNZ95QGic5HkWTAqhSc7GycTrpMhxNXn2dMMesDaLsauLfUdKYZdHShm7x89XtRvkvgYggkEEPyigNUX",
  "key15": "fDKPTNkgVDfq6ycPLA4rA4dAjJkJwBX6g3DAw9FA7hTJmJJCF7MaNNWRbcbPo7LrLicJHzEsXRuEfANFGuJigeU",
  "key16": "kQdeacWQZnGHwcUsSdYYybPRQxSJt67pHX2UcEAdzhbF5jeRm7ebFjECiXWDC9ULczTxySAP9mJ2V8YsyxdcXCY",
  "key17": "5NPCqtS9XNhEDDwyGN5wAN3YLP8GM1iQJEL4Z2nrdLoHWsiejsKkKnMqEhmP6wDE6SEJWuC14x7ZhRfdauh5AKHG",
  "key18": "yCaQFv3vQZXqHZo8BHQ5nKkzbemgHL89rJQLsdDK5VnV5gAmmr8FScdvRPnU18iW3NQmcXrNnj2sS1JyYC7NHSN",
  "key19": "RgGhxTQ1wTVXqevMdd23QWEcH7yvfwd18FZR6GxknLjf8vX3XvtQ3PqGPM3Ya2aQRjXCKHfwnGTnixNHWSjxQXx",
  "key20": "4PpGYokXQvCmFB3nak7EpeUuTdc9ZBfpGr7nFWETzD4nD3Zq2F9h3BGrpABM9DfTNknLuKTupWutyp2Yn7kga58D",
  "key21": "3ZUybiCKWqZAKwuokx8biqypceNVfGu2K2c9pGfuyy4kYd5JTLLwH9V5THL9Rsjkd1iWsA44LMJPBSD9kZYr9yrL",
  "key22": "5111uctJ9yq9pE5gqe4gLbfEG5aNBSYApLD1dinSaDwgsR44S3DKzRZXiY9E8DmvHHVdWNqtCrSzcGEvLjJfKTeR",
  "key23": "4R3J1UVTBpb7eDswi44UDEHfN1zJfTq7N9Q15GXupPc3Lt4gHHsg36ChQJb9ud1ZBQM5jvJxVP5Uip1z6Lpq1btb",
  "key24": "3LW7mfkuiB3d9P9wNPL6hwKQaCP1hkPRGGJVwEmc7zJBovciSv5K8vh8VCA9oHihJUrYAsqA9rSD2E3HJP4ty7sT",
  "key25": "t48To9FAvzct5ARykpvAx5AqDfxKwHpEeM9xvs2CRHHntAQPJLRwUyW1s7JzZfKsdvnqiQ4GqUyrNEYSVjzArrV",
  "key26": "28jwq6igCqjyjsxCH2GkrWXoZnsFJXc5tTZyW79xVbC2s2HVBqxfy3He7WV79w3cDFkQnAL8b7ruKEJNJm1PQPNU",
  "key27": "cpaYxF9pGmZQxEoXb7TNHVwKSfhJ2P6NBfRWDBGVRaycMATE8ECWm9A7Zv2jU3zpwRZurXnZvHXN5aNB5r1rGaT"
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
