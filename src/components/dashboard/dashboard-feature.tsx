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
    "2XHqNBnQ5gduoF9hFcfxdrbQWpUXqTqvCdxwjPz1La92daR2b1moWacpQgE6kgTaHzWuGuF1VU1dUZMCxHDMkt5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3ed8dq8kmaNa8hSSPBuvR8uGYpKkcQpzpJe2pUUcN6G8PVkx2HsSjoyZAvWHFxUvgpYGuZgHcfGhKt8RQYuK8i",
  "key1": "5ofsFmTeyox1HX2gSp1ZQgErxc6PspwDv8iQofMtiQmbNuRzabVeGYWEDNGXoFHLuEqMfRLrCrv9tFbrjdjAgjv1",
  "key2": "o1ZrQPzSaqEhao4i1RsFpXsJh7htJQwtVtYaf5qyEE967kd3t5wFBQgLykVK3tgf1UYYeZt5LtzTtwvCAhQmBKN",
  "key3": "iuKxaUaFZqCcUnCWuuuD1U57t9S4FyzN68K4HkAVLMAgxgDtWrsa9Ff6VLvCjnKjBKBUpKT2vcqx8WeLQ6FDMJb",
  "key4": "3SvXjugPKKEpEaNLjcJHx4dqCRkW8ceF64kGCbt6EB2bAVY1zusSKAdRUTKsaSp8keFFRTdK12fUMK5DJex7Ld5D",
  "key5": "2WNxmCvTTSzTLrVL8khSSwtcu9qBrz4jkd9WDuhTk3gaMWaZg9JzoaauuVHangRGa1RMzoXCEyufqiq4yJDrAseF",
  "key6": "44s78NYD6sVY5s6FuYebuwob3XggK88BmXeVoj98Gth39uLAMu6xU1iv8Gns25DFBMUGUVaab3LiM9GdWREc6NVk",
  "key7": "3K6x42MiXDLJXnfMHmwQRSTXo6A8KsJ39LE7QkWAJUAhHWoJxcA1JMmU7tVmH9Wi8sA3QmQnnrGooHDc3drHZ5ym",
  "key8": "1SDq7RFRbudkMM589oHKDTnYykL4p5cE4bYUst552HbetB4w4ZbaRUgTi5XcfBkL6EKf27RPU4fe5tTizMvq8xP",
  "key9": "TjjMUs5XzSvAynjvMxQF4LujJCg988XUvTPS4xEcVK6ZnWSvj7q1k5dB995QdtpuU1XG7beK12p4G73m3NZJwZX",
  "key10": "H45JHMW24UfZD4Y74yb7hPtz8opnam2oQGpF8xomvp4iv62HPfqAmLwwhYFd5P8Q4z7jRihQ8yQzM1wuSe5cupU",
  "key11": "nKgUaG1vgdtHsHxzpXNsVQTe8Kenqp88v7c8K9oY7BFzkEmfwduCf77U2yzAsxH7pPjx342CBYAgFP5EKP8CaLC",
  "key12": "25zK1M3kaoC95t9i72Up23eQhtX8GQcNxXp2iJaAbbdgjZGsPXGHU8N7Mddc2th2NPZufrUw24VwaD57KZKSVmu9",
  "key13": "4Sn4RTuuDtVXTytgM723wVPp5sW6DG2pqvXvJAmY8kzPLsEzWypNNA4rM28faohvcDxJPncuCechcnYzJDmRBCRp",
  "key14": "2YLPKwafF2wgmPD8f2cErkfLHRDHoUUq3KSYkHjxE19wtDtF8ha68MmVKUmReGymhFvsXCV1eaVA4xWRyCmqh1qM",
  "key15": "5nocKFBehqf1QSxcmXWe2qx96ZSUhBoJhqyTQvypR67tJbeFk9sjwfoGjMhdpyD8zmFysvP5wd5zw2arGZhHTzE6",
  "key16": "4p6NEJ9ecWpL7PVmsGcYs81bwgvLr4i7xYY4a5ipS5rHh63JASt7mueS2t6mJ2na9C3i7Res5usQwE5pa3BZMagc",
  "key17": "3udWAzuj6pxQtjV46TQWME1TJYTDhGzFGwDGSVLy4KQ3A2YvZsQze73s6D64uRwbmiA3L5T1WAS4uvc29XwV8u2s",
  "key18": "3XQYMzNy3ZFWDuLMH7Vz1DSHPnYUR6vJMN3RyMeJ52nQTR47R7vzQDCGnxmJTumS3hfhFojkYB7cqymGGGR42q5g",
  "key19": "5MmUFG9k6AR7tgoofpmTxExiRrPph7Hz4UoFEUqbf6Q5aqsFgz3o4C6J2vW4c1ho7pM2Exj8ZfEFRTAm6ZKBjTb3",
  "key20": "5iw43vErXnNn6ga3NjEMBPZVDUjD2VVK84DVRXskMRdMJuCdGj95xi7qjCQVq3qudjaxmPdMC1ajHyn5tpdt7gc4",
  "key21": "V9w14eKenipjY9BF6NnDs3fXuQCHonFR1QuwebRZwiic8hSSX2fYyNcUqyvtjGDqobVnxqmQfuvRiDo4vy49avj",
  "key22": "3ecDLDL1Aptrvm5e3BgTp6rg6NLdzjr4KpWvZuBmKMciFKJUEvmGRdxUAEqWFWbj47Wx72kSjBo7JqaJcCQXzdiC",
  "key23": "63WbgXnJTKwVcCdXnJ1ufDtfP19skzJbZQyJcmJfVHHUgueKfEd1qWW345YqijKhAztfcUYEsBjqE3f1TVSXonSb",
  "key24": "3VjayUdFrePyAYTAeBEZRTf8HTC4Y5wXbQo28ySqkBGRR8Kg3YGwF7Ci17f2wkQQ6R8Kvnim3vi9LEXf58cLTiFk",
  "key25": "57LQVJMyPZAEMkPH3h27TB2jmiABFonS7BhVBjNxXXLbmr1sMEJjF9yTSrrxpYkR4e5PKJNpRr7tEaTaoHSGCyJs",
  "key26": "3vbfzWttZnk4Jz3NFuPbhRcd2t8bXyaNZNWmPJQ3ThCnPQsMpYf1imoKQM7cxczYjLEjKqeu4aEPcbLWsLwrxd1y",
  "key27": "ionUXvuecxvSpsqP6qSb73yGNFgcCz5LSvUyXN2tGvVTfmH3FA84Qn6JHfnCQkSwsFuf3sG5QLPngMwqq6s3dZ4",
  "key28": "2mzZaoh5k2BL9HQPMt2cuv82nX8ZcTTqsJfm5h82Puxmoigov4hDuhJJk5TCQKKBLSkrNgf4G4LgXmvAEk98MAQB"
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
