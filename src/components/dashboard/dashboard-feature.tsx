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
    "T7fdR6BXYWSG2apknvwbNhh9AewWzaJhVG2WbVWMwUggiByqTWseqtAXn3UTsB3YFjzoZhrMaEHEeevmZXCB1AN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jVhFbao95eFvNEyTqGPYhymxiroE5ESdqNaRmkswo6o5gZ1kUu9fMRwdLoqdyh3R8iRxaVKUvmPvbApdYDEii3",
  "key1": "5SvMmt9afPxzv4LoyjWMeBt3XM8dQzgvFP49f2qyafX4FDzFKaE5ANQzeVkU63fJwDNYcQvYrcwSqYSu2j5eDLLE",
  "key2": "2DouXErYkN9Jqm1M3RrcKNGchEScA7ysycUpCwG3AiJRfnmuh9GKSyRJj2jtxRwS15FtfNCuza6rQrgt96ppVeWX",
  "key3": "3x8P8XK5D2jun9QzH1gL7YXjAcr3viCMbsNuX3bxNtpAPGNqTGiiofhHJz7uMi9dUttTp5hCDmWpDU3HqPpp27Dm",
  "key4": "Xe8wShbjLh1FhAc9TeGV9Sf51WBYiWdLmuS8Yu7MqhqsAgHDAhpUJvWhZK61igXZtVjiPcw2iPgBRvD5MU8wQJV",
  "key5": "5qv4KA23zi78PGqhH4z86sSzchsr5mThXvoCYYAcsBJm8yXpEk4rLchZnxfvChhPDgpsNqrcB1AHNsLph7M6Dji6",
  "key6": "4ZmauF1vYY6rduKkW3DHhaqFeYbaUKHj51kCEtwfuD8Nmd9pXG8Er19CCbo5jpWDV7mfwtGgWptbQDYwJeAr5SzA",
  "key7": "5ae6gazkzBkJEPQK6oTEnxYHpTpswUHMaRpTUTfkbDca2kQiH9PQ9Hj1YGWGMcfjiJmoVAGzrHz2D2zD8aeSiKa9",
  "key8": "5V7HdSPtbZUD1u3s4m1Y6o3SFXVZWgzFNVGSUrELnj4cbLRx7XgDK7uczf7JYyCzE6WazJTQtgt8R2UgZkmWRHt6",
  "key9": "2EbhakTNWuqRTG8FjYoWQ488CZ5j9YFomUNt2Luc94nRgR8TwYi2HQHT72TUPmWSaHcAWvp26nX1MmuNxPxjd15f",
  "key10": "5k16gzedXKyTFUSc1gfvdE4po4NWKJqSBYLfc3YdMSPmkYM1vfKnBX4K7c1hYERY1YiknUNhFiXGaUTxUcacPpVJ",
  "key11": "4aHWcvAP6wbG324G3oxM5RExwgJmTGftyXcP7GfdbbucbcU4U3EMBoTvXpvq2ChRb9kysNXn6YHNUtUF8W4naCht",
  "key12": "4R4FTzAi1kWu6yajfowdEnQYAYzMXyYLHUFP17W1vt6CuPouVeJsXjTi5o1D98Jm2HyRJxM2aCwhLoPaTDmZbY21",
  "key13": "EfPPYX5Db25DbamY16WmyQcFKdbmaJV5JJArTq8W6B4Tf15m7LbtvL8jwcZmkERTrEssPWzLRCbcoH1vRvnSMun",
  "key14": "2FcnYw36Ni8fCbfNnw9iumbYKsULPA96Ef5NEqiXZiqcSRtbAeUYhPD4U6QjobKwiw3HcV5cRhkLTPzW7BNFDYnp",
  "key15": "5ASRegvBPUCriJnqLwMfBtwC9vYsatDkhu7MH5taBdQgb9vcRWqwPV21tGv6SbwwnYqLh51FXBYJK9XRZwguDBBQ",
  "key16": "yafCJTRzc8SNJvPe5PhBaWKxBekLRUkCYfPAjgAvUFTjjciaeJL5HYoxZVvDZTENi9CJaZnmuUK7PRw8o5WCoBX",
  "key17": "62stpzg9Jaj2V5HkceTD6gnuigQawAYTsvRbCQqBGW9P1GcfBGitPy9svVh7yrKmsVVREjfyvgUtPYsCJEJcuM3Z",
  "key18": "2nmE7zrhiKSkcSC4ezTzKHKJUrt8UHa34NnkADRuoDUsxHpMA7mMX9aNoBKbfL1huABa7rokLkgdsbDh2bjCswhG",
  "key19": "4ibGUxacE5rtK6Qvgs3Q4dYvwHQzb3LGpS6RtXi8PczyC1CsdKWj7HejY2puxzkx2quDr9H1kLWTmsiyKbPBaVhP",
  "key20": "2gqi58Jib5DGg9MT5h9azDVYHhXRKCNNxZ4oU7UtrArt7wHFCerMuKNMHWy2Nf1DeJxHACpxtKCCCgbHxwEKZJSk",
  "key21": "5dAaoKKiPBZ1kMetMxMsnabgoXFKa7xvYKY8aAj2LStErR19VQkzMFXVCjPEkrM6YgPxk4nuZS5DUnP94BMsTM2n",
  "key22": "4PCcsMG5vqJbbQ6aN18dVdcnQFiqk5LxH7s9riVg6rMZ3oDysXQt9Poa3RwvaHDEdg5sWapi4M6556DK1zJ5xuRQ",
  "key23": "3X6P98sbzhncFgM57gVJTTwSVon2z94pFFYy7wsxfitUBPTYHZUQKPLZjGmZEyEmdVqAVMmR1JjamuovTT3ja57K",
  "key24": "2nTGweGVnH4ApqYj4AwZiotuL4aVd3gKnSeHQYN6MG9v1gEUBsDuuvheMVfksjEUK4HxiiajEZCnWhSX4UfxPa6h",
  "key25": "2HTtDzwzVgNpSYYPpfah4bSd4bfWDRcTAj9Ji4qeJmr8CA24uqLtwsm3NA1t2kNHvR3AnkNM5V1nhs8N9yiVoKLq",
  "key26": "5dAsabneuzDyvSmApiAJLtM526UawTXef9gJp6DKG7qFLkzzhLomdKTmohb4GbghNgCrJQ6sHKCSLZQg5gZ6U5Aj",
  "key27": "3bN7XGvwsr6hy6qk9JMfrq9NY6S8Dz4f1KeyuvfNMA48ZGqJ9D6FNzBWnTFwNHti145YADwGYxHfzbsjgYsbb3ux",
  "key28": "5j19JwYWQZubY18TRtzDAS3DcpoxF8aMCmpd7CAfmY6g6NSG7NnntoFXsrXo8xjPVvRCRHD3FXYfqmUg6gDtt3mt",
  "key29": "2inXWUpMGjRuEGVLoajovhbvmhYoUwkmVeKMZSB3ivRoDtSnNV1KRhttSCbJi3dXWztsog2wHYhr4HeNA5q9HLbN",
  "key30": "5g8BrCmxHfBx9kiUWXj24MYk8WYisz7hACfpL3YnP7AYLwK1NpHWmuWkCUBUnedZpfC8AZGybo48RYtk4oxRRE5u",
  "key31": "K77s1vPb7RzYnLJSh6yuKugSREezjKsuyv7dGKMabKDdfecEQWc29ioqpKivtUT9kjGSFYpCfbfU8qe35JHRr4b",
  "key32": "4AgGkNgWRdeqUu81ZkpHmCWwCKXTRLxsGzAKzwPmXiuLe1DNDK2yw1c2SmPPtFq5YWeX31KHaEWKCzxEpkFCdVY",
  "key33": "uFXnhJkqFAze5k7C2K2zgDSXhyr8bPgsL6jVBvZXFY5Mf6U9Jns4hnpYsBVYWhe2DWMfB2RMQQsC72iCSQPAoeh",
  "key34": "3gLDFPkApmjwqzb3mpPUuvbmau2YrgZqCo4V1o1jhXcP9rdP9ceSxUgKbRCr7iCkte8gRmo9KxMEKkhLFx8JCzhs",
  "key35": "4txeYyFbwNhZJEfwpnjqzmhia11iuhmK1QVuDqVhQJLKwoUPDQLe7iyJmGp2PZRqDTbnjfTc5qoeZ3H2SfbdDPu2",
  "key36": "2ep6MnQULQ6KJM1YWdiGVZhK3xU2yamohQ4gCKMp1tueU5C16ZibyH3xDCySSzaCdmvz8GVhpmmpGRckTvFsN5HB",
  "key37": "67G8eoxRLtT73M3iEoJ8Z1xn6fdmyh1RAkWjUGCAuw8RpCzkE4kDryTLgCRk8PZiNKxjubizod3Hep63umb2uWrR",
  "key38": "LJtkqFaKYeBNZX5okw1KcMWGCf2Cu5vska2TJvDPcJkhseraB7VnTLsSzk5G8gHy59i2znN6jPz4xAnxCtQU9Kd"
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
