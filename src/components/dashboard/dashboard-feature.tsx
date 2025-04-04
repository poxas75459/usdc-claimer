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
    "3dPeQfhBuuqXCEQqdihrMAoTX2dgEWKjfqtoavpxVmgQT4BVoKnjyie3JuDpTvDLthox6aopJn9NYW66r9D24NcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ARWu5r7PG57r4yj7gxCuWj3JQoPZE2upXe2cg6hdouNJCTHqjTm2JJyMn4vvhQr2GTmxCPjrKx6YJzWBPRgmUU",
  "key1": "2FpQjNshLVWnzEmHVM8ivFKxkdyFE9THC5cD16zjmWXtdCeovdFqMBxtmAmYtatTXQFcPRh1APD4RQHWgvrPXPL4",
  "key2": "37QP72HHTFuqL9B3G1NpqpRTaPf3KekryXm7FCMktbrRnkWJF3JrKcF8uCXQD1hiXXaFNPHzTX5NTG14onDkJAxg",
  "key3": "5tn7fYxStcwEYoeCmdw1iBrfoAMSz3LNnpeKHkGKoVW8f2oy5UGEAcHUGTRrP9opgzaqxQkVw2fvy4JMfrG1arhv",
  "key4": "4eQ1zJRmWEYxJxHL96vdAU3GLm9FLCZrcuU6X9cZBxFjiWp1t7Gfsu5NRHA3vWcjgytTraPXyA4H85GEYTK3q7hd",
  "key5": "35RCVoK3ttriMsd163AdZ2bdbTWUZKaUREXbo7jkUniFq5926K8p3QR3byvzexktCQWwRSzn1vB9DWEZBYovPmF9",
  "key6": "241zpeMp9V3hS4X3AKLx2XJstdP3nNUxy1JvvcPsUehod8swynrYEkAAfU5CRyR7fGJ7vdk7iWM4JyW9jHUpnTNg",
  "key7": "4iqUVFiuipdNQXJkZux8C6yBPWoHKmLtff6NjcC1CXUjkxMK23x49bDJ5TPxAgDHdUEfiZZhbmRYWv8SKTM7DvkJ",
  "key8": "5tayyA5U3GeGZ6k7EAmU9puKY1sH2wKiMZQqgPt6twbVJJJR4gAa92mvw78ZX6vEzksRsTFHxYRzDfmM8hAh6oNH",
  "key9": "5TFtJeZcWA8cMBd5nhU6Wf56rhZQEYUYTTpc8ZA4oJKBz2fWbMDukuvkqrDjSDtn5WHyghSZgzQm3DJgQabET1DF",
  "key10": "4BaRJAt57koyphgibsCUcF7GZtJ6L9rYEZQYNjtuP8gTx2rWbHKSKP6aSL2usWdPDkkqMHU4z9u1p4oPPM46sMuH",
  "key11": "4iFBubSnGY3beA3xkEmvzb5skP1q6rLfu5iH8mgxbQ8mBbnZHG248WGcBQWuy68TC2AghzJapTbD7kq6yfsCYF2C",
  "key12": "52DS9h1PHeobyudkMWauumCEKvoorDprsyxHVSpaAYzkre3E9LVDPJA1v8MtZuSKpPVypCdu6KsCQx4gFQhqeGDu",
  "key13": "5ezMQpiZn3EdDDZ7c3zwK1gT3Sf6paS6uSYdfW219s9B16EfNd6spamiK6ferLkdMSAWy9kri4BePHNZQPBGThjz",
  "key14": "3NEeihLc8mDZF4SroZeRsaYf7Cd6vUU27MK7zEXpobJtJ3usD528eo5LwdkLGKBxML7TLCei9tKPjDUi6zmiFQf4",
  "key15": "Qe4fhwwAcwLJTgeVYKz52KTN7UtHkXnvUbMmZ7qYHe1AYBZsyYvoggGm35PzgP6BLS1GRQM8pkCQQqrnSG4mDuR",
  "key16": "MjFiGtTAuotXbEfA1rrovfbNDtK2BZVw8xme2zFtB1uk1ssQyDPsxD4TEb5b72LYhZyQBXD99t5T5sSKVWmUtE6",
  "key17": "3LN4mu7ZQ1uAsHZRhiQVkWuBaFat3t4fxWPCLWL7tjPhsdNwkaDAxqJF7WDZ7jchiuzDqFzvbrpoJmtDGBznoE9",
  "key18": "4EMbkfFeuCVzhP5Robv5ZQVnPKwfCZLzMrHqNx9xeBdQ1eCA3biTDdesAPkJ56KFSxZCy52oEVV2CChMfRVAPrsY",
  "key19": "4LtApPhRfeL1FqTpXybQ4XrgRM8y4gSpTEghPFGkfxt3fdFnUBQufoauHGAfAeoSun53kx9tAnhRHMNxdaSN8P2c",
  "key20": "2SjSUYAnVg7zXAdtNkU5ozaEiKFfaY19he4QPpqmruYpYyPiy5gCuNMrzBZTP6s5tCowbvASCzsHTSEuweSN8xQh",
  "key21": "4CdQNaSns5ezyVrUb7uGjXmydgjc2CdcvEevfXBf9BTY8ZNFgWbnashiicdvEu61Aq2gvjvYzS2jNqvjRGyn3C3g",
  "key22": "2AXKwNRXMbiqGyZNGUpvnPAjKnS8ZRKhgFJi6ahdeRdGmfveBd1abkWt4vGTJLh5Cd5ubeUzh9aZTG4Wo7vdyWd1",
  "key23": "2pYEHCuQrGj1rH98Afy7yMZPLjBd76ZE8FLe8sdokHwaQpigFhaQMVtosA6vEQM438SwD9m5AY39EcapEUJSmwgx",
  "key24": "2MhJQCrMfHLTfgVVdr12PCiUJJ9PEVtvpTtfcbAoMxGrVTJnNYL6crj117M6Cs4wnrz476t6cbRpHfYbh772jCQi",
  "key25": "26Rp3y2bK4HcwioHjJoSNtwxRa4HLAyrLjp3xBLGQMKqr1KY2EvQk6cq6wKSu4ESHB6ks5tZ4WktxQBN1G8DwHSo",
  "key26": "2zoNUY6TEWHjBSm3HBByumpkuAWtVC9A2QV9NkM1VF43ijidzszCUu2xjYeMRvL1kEKxT6zkdaZAyGHGa1FYDUvd"
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
