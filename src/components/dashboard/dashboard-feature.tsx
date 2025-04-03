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
    "4chpAXkJ8bnLSXumnqTiyfVfXa5mfDnChi7kJdhoF58MUrTZAErUkBCjGMmLCfRppvGaaCjA8dVAk8rKU4cmXnmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U9dXXj2wTivLyJffvafhdPJNJvzDmtoXqdCHh3dXGd4aLfqX3bRr9GyeubQYRHX9PQ7ewQNFyhbEkYbPvQEccYi",
  "key1": "4eb6qnR1tEwWJ3QgwSNRD9VgambzagJaTYwH5KoG6sHPTjDmpBFWqbWEnvk7qmzhPx6n4va2x3hkWXNDGJ6Rd3mU",
  "key2": "3DAqT2J7dYKQk4RvLpDEpZRu4mcqjRqsKDwbnMXHD5G5DCHVK7dXBVCTXvvJSDj1p7EmLq5sQmAyzzKbkqDZjT5K",
  "key3": "8EqEksniZ6A59yjDHPenLdv4ANFXqZvqXQ2hzJT7gVuzTNg1bKSkYkm3kjmi36sVkqM2ogM4B88VaEHpJjJzdK7",
  "key4": "9fvJ9QJQhkQft35rveV2gTUTwXtQiipFFdfqDxHZEUczYJV3nozMtsGfHsPwzP1jrgcuCaszvEjBJyDfrafKyzV",
  "key5": "GLZLLbihz1AQ8K7sE8bbXffpjhNh7nvcBdF4zsdipGRRGXwK3WVmtcibhY5WPoqigZmavdLqTmyFNZREQQPAzCY",
  "key6": "55odHYiURpvWwSeyqee9mxnu6gfxfgyZMLGf5eF9rnH8P46bzmbvjfGkkTFkfJkzyhuz4NoAToSC7NpSYRKodzDC",
  "key7": "4xAD5aUwdoRyZnN9jfyrT9aKqRF4Zg9chZ8DFWvMXUZ1SqrsZ8T2y9txmdALxoedB6i7nrq4K4UQtLWYFWGvQmG7",
  "key8": "4KvTSvJV2xWo8NbHUv9vc1ZQv6jXMqSJBSpvQrcMgjMHGyArYduhe6282m7jnihhyn46NGmvEnRWAqPZfarqKhHa",
  "key9": "3bF4orHB57RRXrLastFsbtaEjUvw93Dg8KkzRyMwR2WmLvWjyk3z8af4bvtknoDsb3yoHpwb2mvCbrWPUmJNNK1z",
  "key10": "bD72XZ8xREvYpKHssbZQvFqk1oaFVfGQFoUHHorykEGVCyYvTRZ6boJPUbpto3UghYiwBS9iKJedjb22LRkgzDN",
  "key11": "58qrxcGyQmovi33ngLiTmKzPP98CPi9tk4AUHCYbpY6PyH7rAUsBvnTeofvLi6J9AntmT9xmErn7uuKiL4wqZuXz",
  "key12": "275mXwEW6atzEV73ziw5eWTgawBp4BX2X7iujqRTLTZDCrEWuWXXNnvssDKHnK3oaNe5RruYU54tL3zSdyRvdbSx",
  "key13": "53nRBQ8gLEYdh4DhaMinuRWK4evPLxWW5A13CuBBqLMW5RuNPG8fHjtCyPU9WrqYAbjkSWKRTU1Z79BizU73rkHA",
  "key14": "49qNs5GH6ytTrJrVPx7fgxZbKcwJ8pRkv1w6jw4jxzMZSywSBVKFKcjwVmc7tbizFfZdtK8rz8e15pGiSL6NUWA1",
  "key15": "5VdAff6DtGkZmwnQoe1NKVFAVnWEYT3Q6fC1m4vTv6i1MSjaXvVa6iqPpPuLFCZkmo5Tw9C7pGoKGrV4cwzggEBG",
  "key16": "5sPFDhDfbteHL1YwPinuE4q61W2PHLWJVaJWj5F4c2N2DkusjzfexPkec8WpbrT2gJdjghSGJBCsgPThxjNz5FhG",
  "key17": "2sYAh3WqJXbUfiU8U9Tb93Um5ogb92stva5hXYBLNaQ4LZLfZJ7Yj3yWny326AEaJytfceDoyKKG9VtqqYhBqbT2",
  "key18": "24Gjywwi3Pei2c2ceBiEUtjff4XMi1z7iVeH4xD6Abowac5ynckzAHJgatYwKKsm2FvwFG26Z9GbDcAGc5oL7p3r",
  "key19": "2nmHYE2RduAqiXBZZKGzASosS57VPXj6H92Xq8KpxfjN9ByfauLAicHChVZ4dXNPSZEaPpzsZbsCn7fkKVqXkccW",
  "key20": "24xoLTweTLAFdd5yhPHosU3TizSdjDJekpp6UyMTfZXkoK9Rp4AssoDitK4ktEpy9LXxM5pHTiyspAYrcccGh4j8",
  "key21": "2qF4p2xu98v26qbiZgUEt8LgHDs9bJqJ1HoQDXUm1vCDh8T5NiHHt3WUQ1A1dV4cfG9RhKxszYceTbkrBkERsw6d",
  "key22": "3whPQUrDvEg7kkcjoSeAuTq5Qym2WYcQF7vxXnftoJYx96L2gUdeubUvMgxNdEMk5PvsiDJa6fzeumJk9GP6RG8F",
  "key23": "3NuEJvAvF2N77o1tzcsX2zxbMhbdLKM1Hvwg88twNn4EHLz3eT7UZa7pcP8p2YX867k4kNpAqovRSs5oUCGh4Pwf",
  "key24": "3YRV8Y7YUNXiaDzwyKK3mKwb3A8FAZr1ryfv6PSSnpdnAuSB2dEAuKDmFJ4bGC2DJD7hBUCsWNuHCNKwzzxxzTL",
  "key25": "3qeZbjaAjzUYxiR7MGq3cXPPMrRYkpdN5P5CYV4K63TehJafC4a1BHxm4VvhRbLwQ5Wxsjr85Lcfnof2fZ2hbj3f",
  "key26": "45dNRLcTEBMKVg3tsB5wEtPWCSoq496cPhS5gRzj6fmbabX64eAf4tSUs7fjQWUXac3kU2S1KEGUG2TX6sC9Gpqy",
  "key27": "5TGg7vpWhzKNj796r5JD3K4ZaAQMVNapZuT4c1RHyWiTkUunXjsoynbwmdnbewpiJi9Ut3keYMXPRbYYLjtSWVqh",
  "key28": "2P9o4BuPmqVZXZYuUuZFaxgBjQTaCBqVCC2kCEGdPKwZKzpru96peoKRNDGXsoAEXZtSN8GAuKMmPy6oMXSm6GL",
  "key29": "NwQZN2RrmiVo3KwNnbvjbbh16VpDX6kGMjDMuJ2Du3SuGdjKVm7pYU9RDrKWcrC9YqPvH7MQbZYBpxB48ZNJB79",
  "key30": "aMPNJA6B6wskJU8XEBpcog61WofdJCsCknAgCCDdCEXGieLA6mF9aJg4m5uGtV2eu89ubGWEmLkPh5ADRRqHvGQ",
  "key31": "WmuerbQFPB6b9NHLodhgPLSXqKyjgwQ376Qyht5b7njRqYU2CKT5VZLz4aiC1bUPnhMcuWKNzSsj5i2Wzpd1xtH",
  "key32": "2bZPGwUX6TR5iTjSTgAzha6RsPah7D6gZzr2t1DT4keHMw4VHuQZsW864iX2AozEf1cMgxmKkcax8mqpHT4XT8re",
  "key33": "4a56xmVaoPLP5ADpEpCqDNinHfDQgwCMh1gLtaS2NUMQPZaFs7M7MXhKBUwSKxeVgBLGXpgQFH4ZLCjEWomWTzSx",
  "key34": "2XtvSWKLzpDaHJF4fJXovRzYQutSNnQteDJyCG5sBG6LMdKAmkakLf3vmTeoS1ewGL3WkKEM2LxESaUDGbLbLkyb"
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
