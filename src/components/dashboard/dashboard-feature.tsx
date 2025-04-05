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
    "5CR7jbZdZRrTjQ4efoxYFTVoyRYnxho3QBMRtBM2gtoux9WjFtVfKqajFvTLePD7M62fyjPXZYgmNZi3ZBDtLxZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdiGNTPzq8GeBr4RrfdWeUUKNTCkHY9sMSmnsjg85AyPHucNDqLHbEQDqRv7Ym4Cfy1M9SQM7ACaK4zjkzv4hRT",
  "key1": "2wenPXJzoTPmEnsRa9BttsjbyonXMDHsGAjuCxBR7i4iqaKhiZ6rcTzTVDg7dhtceFEHDoXQqeEDhkbqUenJpwDu",
  "key2": "4zva1W6FNSLSeHG9LBQ27FymkPcfkD2CoJSinQT4Z9bHAn75y6ZffQ3i4QUm5y2n3PDf9oMG7HPZQHkE1XYeBu78",
  "key3": "4nndYVARCCAjvFuQci7EqyvecyRSCnk17A21McyeK6bKuDfwoEQNioSgKwEBuJfGGHDbAxpHgy9mvjDKAVvR9XFL",
  "key4": "5ChhBfq8ZvhrwXZPNWjfNtartXvZivQVRh2d4sCBcd9y24zdhnBcqFyVhaTnvkVYhwPx6N3BsPNa6S9DsXJgfRRg",
  "key5": "2WswoLypB1fGrnYxm4yAmrhW6EsWUVCCj4ekirL52ZXuWyAmCqX5PJkYJCT58Q64VFHMhEJ7W4Z6fWCUceC7YmWu",
  "key6": "5yrR4sZxn2BVXy5tRaDQsWeSGXVJZqT1Bzge71GWrWLm9bS9Ci2p1288mHXddgSo7WMyyHMAPXcJ7MMZfw1zBEAY",
  "key7": "3N4Ep2LpRzLuT45WqxTmdeZy8gKzcZPeDvhJtcn9Ed7A87QnWZ87V2BZ3ej1ZzUmSeigzcKK7W73885o4Gm44w9h",
  "key8": "4LNCopLNLLdGnQabHNYN15GFXt78rhPU3SqVzHYGe8qXvfyybd9J2dTqrn2TKxAwoH86uP3n95D8kGJLixcccyAE",
  "key9": "crndk43LoYUsSSNGFMgGUopHy1kM32EhnFXY8WNd4QgJAvjii2Yupt7nTeR1hPhB4WpXsxZXozDaanWu4v8bqQg",
  "key10": "4huPhZNhQx3osPfA9hWRs6FizKqJUHLgeHeiYzZbftmburj2CZd45TmNbqmPgJyEgrU1HkgZLBqsMndtHw84pGS3",
  "key11": "3HNdki1jmcR37ar72Uvia7wodYd4vJyd21v53CuXLSwb3Bg5sbb9qVKKvtYkMEEsCezY6GPDDLQmRB9v54JLP2Rk",
  "key12": "47nLrK8HgGpt1xxwD9m8Ddf21M3iNbgvy56dNcDq8ZL5PmzdSp9EQ3jvu2LFiA9RoJ2sJmHoEmjAY8tmUwBceoxt",
  "key13": "3tbh2u8cZmF8VigDfHZZ7RFzNGetsdR19iYpgi3rXkD8MbVSfNhVGt6zv3QrqM4uKjrZkBgu8eWkuqJzXuzy35Hs",
  "key14": "KV3gHrugpb2czJLWrcEXkPeW84AhaDshDY8dT5r56vtgmvzoYqWWWKTHx34BzcxJoZz68sXo4jjZb5RQ74hVuVc",
  "key15": "XqHQ3vhyqH18PTdx2Mo8Twq7mhgnpNQW4UzpGbyQAkkQp9LhbMQgEECkbF61tJzh4sdm9ZSKDPeZLNWyRHzAMvr",
  "key16": "23Q5pdmbbSigF3tkVJmcEJ1qArW9xMq2YvUZRjbTDYiJ3tcuqatFs25S1461GmDhPvoWV5c1GpDZoqG4fmzTgNTr",
  "key17": "5H6pc1VPxtEjm6hJFyQ3cxU8YsJNaz197MDYAy2Dk1yFeTv1wJT6AuAyhzJC2WPet8Q9iKgz7zySvSSyarm7gqwM",
  "key18": "B5p9HEfC8yW716gQbUG9HZmWsYerVnXDZpPsrQaREnjBuYsNVEtMXtzMYakfarKFHT32MdSNmTn6VakHS9o81xu",
  "key19": "61vFmG8vPG3YmAZP1jRG1XWuLsH4XsLKsu6SubESfLhaBTypJeL286XZi6Sjo7Q7YN5KrKDDiGX2y8p7BD5ev2i",
  "key20": "4w8RDJUm74Y8nezctVbo2zSjyeKheXtHrhtR9QvLSY3hb15wLoMVGBcycaJXmtKuQn8aJfJtqKc2uFLA3BzSm5eR",
  "key21": "5GCATmtg54RSX2sFNKZdRL8jJy8o2cFbDvyDeQUcFtGkPVEZ2CuyW6nUK83xZpqXwYVWbHw1cfj1cidutFeFNLBA",
  "key22": "45XKPPtWJRJQeS27eCe3K3yE62dQaeq4h8U9tGf3wsJyfx5H235cT89d7Ymr6e7iYreET6YhK8pw3Lk2hJreLKyu",
  "key23": "3S15YQQ6qDWiAFF4tn17b8M8Cnknr6SxWEmZ9AgeFSbGekuYot6HptmBJNuu7aDzX4ZgCpe8hyDJep3K5wTsAvbQ",
  "key24": "FXzXjdySrYpyp3dzH6f5VnJrYtBHYbi3ZydqzfB8wqs3PnN3AuMfsuSDajhvrwFEZiLdx1fbUcQ2LyuFDKCLeXk",
  "key25": "2JcR3F38TRTobf7x5fjRt4UaZKHmTZyVxKgozt5wBWMwMw9tvboevkaZ5WZb6L7ijq4cWfWs3VV4aJ1yvmtsQsz5",
  "key26": "4gpU2hcS4FzUKQFFcsioB1o2JEhBPTutvFqAH7PVxi1p44hDucutSnYJn5xbZYxP3PgGiLVGRwVs3RTTRVYz67JF",
  "key27": "2QEBnz94izUKyYY3ncwDubbqhVaEoDyyPpQeoi4gRvH1E4Cwbu53nUxtT97uwgNgrHDNLcygduDWGaJ9CZUbN8fL",
  "key28": "3df4k9eVCb19Rsf2nMiPbpEnBQ8VGgjj5BDcybp7FFea68XGvX5kBCDWRoHm47cqfZhCLm9xrhnvDB4ovT7x9P9Z",
  "key29": "2HkhKZTMKzKRhhfTBst11ELBsaP1MYrQ5mpZUoV9xGKF2Ef8YFL6gte5tD2rdRd9wPT5Mi2yq33soNw9b1w52eKJ",
  "key30": "23891qPJeRaQzcTdYY1n6Q2uhRgaUK5VMmRn1B67EW1PcDrqeCQ4YznFnYRU68SsbYU2UTW2fxELzoaoUUs58pU1"
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
