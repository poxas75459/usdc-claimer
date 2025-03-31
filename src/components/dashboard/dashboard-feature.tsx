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
    "2uMwaHo5GfnpNxGSAUs7P7DEWMtn6G3tBW5DmXXXVfimxibKxrW3Jh5K2cLgBGdExkbAfDssUCa7VVqdMYNkSzJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgJNWocD7Fv7kczRjhATPtfQ6vQLzKVNzR9BHmfscUrP3KS6gGCcVcswYdtzwknJSvX1kPrJFjZ65nwqVyePLhF",
  "key1": "s8cSmaS5QZb4UcC5Y7xgHFxyL1qKFM6cWybpHUwMgnbaM5xaEW4AYqf3N4UeVh5BmbbKGAZ63wx7G94w4HPkwCA",
  "key2": "4FynuJjM62GwzThG3X74VsLVYdSN3o9th7fApqLR9NiPTSqgyB7jAtowBV7CyQTEsEKBJHnVE8tK2ovfWZLhVJPr",
  "key3": "qnnWE1ungayCn5KfQnJugKmWAnn6EjkhHFF766bnJoTiK1SAPMrPTiHrXtobP4VDaejP7wiitxkuRkrzoyoEMMf",
  "key4": "59ZubcP4CW2BbJMAibWjSqtWrFU8rqJes9YnpcPUrVzoPWZeo5xxqJRR6T1BHrRcW1nTHWrVUHu5wM2wXYUsuPmW",
  "key5": "XTw44bevspFknwFZghRZCfPmGGsTMKXbNPPJqmNfd3iXV41bMq1Ej4H8KpePTZttSwdDJAbCyGKGodB4zwQic1w",
  "key6": "mADWeBLb17AGn8GYowQ8zavSXARdPq5QZj3jWzPFUWPGVmnTVupP9wyEorLg4qT4AL4kJxvYvoXrdqL7JGStfLY",
  "key7": "3AtLZ94ZRTsHJZE8QguZof2XrjVLpq1LGGeFTvDL2Sj67AkL4p2HYnbMQkvG5g7T5awPmT5gw55kvf1uhDBfJS5c",
  "key8": "3ykMqqtBAnnE2pdxM9ou2p3k5Eu257tyRmyh2zhupm3E3XjkpKzPiufsew4DaEKkkVCGR46HKztkd9oNS2Xip1g3",
  "key9": "5cEXJmjBLmnrZAYfa35jAXBtvQNvWBSoxZboCtE7QhphHivQBLN6zW41qsg2LsvASd8DgjnJXszSNeCnBXvjaa23",
  "key10": "3NU6DpFCPztyhcQnKU6kxXgerxkXFvTrLGx9HpKwUoZyb9DrxHdULSi4KaQLWGBRato33Mw8VybGuKJh3hGjf6Cq",
  "key11": "L7KT29FUJr7TXfVZCPpV2jwzsdS4SeDHGJ1t5GP7GDzTj9LrJXuuKNLFMcCHz9wRUPyMP2CLyyUL6iKoGGAPFT7",
  "key12": "2KMtjR9YtxBLDZg1ia8hpfDuNwQqwTuAUirYKavTtEvRAhkrU3YXY1D8ZeUUuy1Xw1fdLKgL5NyaqSKbSAKdMVE7",
  "key13": "3FFm918222LGbeyzo8ERb1iojkMcRgEErVG3TdaR2vL7ru7RJLUGToFkGnVfkUaRZ1TDkgkqSupsuCkByqW7xTvC",
  "key14": "3QuzpdWB8VskcHkoGYh38TqHZinJUtDM5Hm91DyR8YSpXz1B2LLJqEPPM335edPQxmSTFQrcfqo6hggYWGGXMFPe",
  "key15": "oeGebZfa2zq3d9rN2eqpbC3cMCGQ25qXDzz5TH7Ua65djkf5QNqAY9KotXaSVJerdRFNUhNnk1wzC5K5ovPfP8k",
  "key16": "4UnGVbrHPzNnYop47SHNgLntBinB7KHKPUqEBugJCyGSjikSpxBz7AoJaaxZNfwQa6CMom5B5rH2tTBpnqEC4ZQs",
  "key17": "3JDAHyMqb8e2DJnJFE9gZMYdibwGDjfmmDXpQWY75nj4RWBGHKxCdzhBK6kJXT3Pggye7DESG7cSeR3E6iTKYj9m",
  "key18": "aGHSt9FqECUo2nBiLVthR7KQmcQbJwAZU9LDiEzbmLFnnE3kNvPh5nGjqh8tb9cSPfUuQgJUgVeEfsvwzJy3wJ4",
  "key19": "6KRqqRRaT9Kz396TtbB7c5qxPRCMKr6umgd7rusnfb1nyGL5NA6mmzbj3PeE8EGi7hqAHF7TgWvmEs6YoykYJbS",
  "key20": "21wpx4znJDMvUEjGrfdjrP9kf2NmVWHAiKCN3EjUX7e8VVHrRLrUaJWRXg6FGGNfFunpbmw7cZe4V65JdqfLyKYa",
  "key21": "3F1jJNur4jkWwL8QwsJYt4qpYnBq3q3LapDLRZCGVTq3guTiddKjdxPdSA3dEEDYmcJMvVvRcA7rLppq8TiuDXCs",
  "key22": "2ZMprL3qo1AXJLnoGRjX7ZBB9auSnbzhvBv2avBx9i9hmEAk8tTtZAy2AozZ1Ut6zdZyxU8uPjFKwgXRnPhR5RnK",
  "key23": "5p3XqNEseXqVnwDpcxwS2PDD6ds6VAuVFBFBxtUZAjDBNWAaf3aUzRpFpbs99nVghmXnLNvzccqZNUoMGEX3SLEd",
  "key24": "9HGC9kcexFNd2fm4KCaYciMQeM932nkL8pALFqLaGaXSx7uWqh8xNY6XpJpD6x4sJBcN7TQkEQL1yCut8po1hM2",
  "key25": "4JCUJoaNDKMN2ttiitmN5jzi1TSRrPp2cbe9YAWUWLx6r4QC6drikgxyPnnpc6W8zukDRxRmDHbZrLEJ32z2V9m7",
  "key26": "3CpFBSSpWLDaFnN4VKpXtugtZFinfEWuJtFzpugF5J9aiZHNAcQRpmg6aN7qoabJ2Tcdf62CdS2YGfgpQgAwm8mL",
  "key27": "62oWTrJyHoG5aoEdqZYcbrisdCk3d6oRLUrBBc2iFExEe64GMHvDxBkWzNxuNgB2B3Rtxfe9tLuMHJP4VfairKZL"
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
