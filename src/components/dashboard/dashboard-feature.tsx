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
    "5bneaWnjNartX19SG8UgpYua6G16ooowGwjQfGggGcKCKpbnTFhkdsHZy8vNnHLzXNJ5aXEVr1s8xvELHghhbCa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8SYCr3an2YwzVjogaCGoHG2t3GF7pXb9zWGoRt6GTpay6z6P9nr247XsvDDoVoqvH7qA5bXakxZEPx4Wyi9R2F",
  "key1": "41M42BrYh4AgRgAheLRHn2xUxNVwbMBZRh2dcT8Pw8ECsFf9Hk4vjb3vuV63gXzjZeHgVAxppcNHaHUoMSm5RKZc",
  "key2": "3WwS3V4MbDrRTaf3e58ujzDVZeTpbhq9Pqih9drsfJaWRBn8cEZ4e8QqNEMRRRf28yvtrReMYaHztzujm2aP8Kxs",
  "key3": "qYb2c6o5oPp791JSp9shCJm9gqvoZjtq9Cm9okp8KtpG6vxTWbKKjBQdjH1EyXZQXJWFrsjRmJDHMs2UawduVn6",
  "key4": "4gk8nGhjHgNGMj8pj515ZQ8JLgyjCBNVUeWLNpLLvpeiKGyBiMbmwFNqb9HQMAPm35QntzyjWdXNKrgfDAGxxPP8",
  "key5": "4DEcXTRPSgJZUDEHgg4uvMapythn7wm7rgULpzL1XB2SKbY27PQQJWfFFCGGnTzjDwwtrREzEH3W12Cj9HA4EYEm",
  "key6": "61ieLiyAozG1Mg4fYythyAXkpKRG3Hq9e8TiG1J1M475dAua8dKNGQFxd63z6QJQuAznwD5p7fsgcbRTW2GHenZQ",
  "key7": "4tpkoEHaX4N1f2NHeGjFGL8WB2p4TV9YwoGS4Y4wvCqQNeLJKVrNYGp6JjB4TkwXHnxgdSFfZAR7cuzXRJokZi2m",
  "key8": "2YRiu48JewBxLuawWGpDJDaetRBgwDmptvEwtCPTAuXYP7mP9VnUu5d8uMGGXZxccDspYz1YrLCqSFBmz5yuqT3y",
  "key9": "PMvDeEyRKWbsNchwxfT4VKKZSFfG3RhnZ2EvMvVXsuj7Uri7rdTueU9Yk7QF3WvVnfC479MLefiBbx2DVdcVphp",
  "key10": "55RyUd5jN9JBEPyZZqCSERX29tbuZn1yA7dnfRwHxF9Z9qC75joUDYBd7eWS8jFNZzf9Y5zorC7Qy1i5shfZriPe",
  "key11": "3NvW2NRkrEweKGRL4NR1oBPvPanNt1dgPKwNS3F4JmbYBaRB8wyHm1ikFwm4S5af3NtZ8VCvPcCVXazRdw7PsDFh",
  "key12": "5ksEkidUREVhC8fCdZ7MUJXmbHrv5tWKCW6sgckHNz8MC3ogPJ694qWtvP6umUQkb9aM97ZV8JxWgt9ZC7vzQArr",
  "key13": "YRiSJxtAxWVfbWz4Wn5bT54fpSwYe3v52kUc9G3p7913vcKyn7n8N56weM7x36V8Nrwb5nXtnbsw2EFVchYEp7R",
  "key14": "5Mrxe73WY4384U13NU9u9exydjaH2beUnBPPa1vv6t1z1VdNrFzxyH6UqpPbAkbbzJRQVWY2RvKop7e7abNoQ6d",
  "key15": "42UPc18YwK6RwcLnFKkxqvPV6cDimhLsQQQCVPJUT95e7NZNn83vdnBnVtzLBPc1dfpxg9xEhBxK7ush6znHRFTn",
  "key16": "ayfjpizQqcrp49xQLUekuzb3M5Jo1RuSZHUiAYeyp4nxrJtvEJDAWgTAu34wRYBiz6bVGTJEXgiLhYwCqUUo6Mk",
  "key17": "2XVkZeQA3wBK7GLAQuc4rRirrEPwnMsesS2xWckQKG565AMghi3qEroY2ypmxH7FKeaoN2GLGpqhCRFkpg2rodGb",
  "key18": "3Gyyd2PdXQtm45wrMFyhE3gkQcCufhTkjXxWEGoN5apzJVjViCv6RqJoDTq6B4HGQ9NC48s3FrzuU7FcGRENRKQM",
  "key19": "bRrPntMUscchYkt1fLZTcymAajVxHxPTr613TUG5Pg2wH4W23ekbKA7d8zM5x768s2TRZtqqPU3MauDecMAZC86",
  "key20": "2JP2Bi4FCzCAy9aAgTBKcBx5hKNaF9iQScio9ju9PdH9TDW5DwZkgxw2xQCotsxBrLXDHqQgqBKv1mmjkdq5AFuK",
  "key21": "3woUT6NjcYac1SibxTtxMbDbTGzarmcwwsQ5oHnift7FHJCYCW1C2prGzWPC3SvtF4dVEoyCqg9dUCewTpPY8Q6r",
  "key22": "3csK71ZEhJUfF5J1EHjgADanXeSysvBwvzsCQmZvhcqhQyuJvHHnBKyKT3NaqHEkf2P54y7LcBdMPp55EJZGe89A",
  "key23": "aPTifXGUWaHMVwGsn6rjs9WX1ohB5TZUC3Hd8kCvir3pFXhgkugRWA51EooLuqycbwCTVUC1FfyvUoHnmN8AgZN",
  "key24": "5XDARY2p37DLQdWGNjvVfBLyqp6FbEB3YzKiQzojzRMUo3cfRNXyDEKrZJtvY4BRbReGpS7NvqHYZfotfGdLGKJb",
  "key25": "5jpdoA4p36dLXW1AVLk5XpypkhGfy44EtZ6dWkoFZG17Vq7tj22oZJvaPEjyarcV3hWjiC4Bs3DyNQT4Y8zDq2rH",
  "key26": "2w8Zz83s5U65u8QRoiPRG8gJ8FAEsMdjQJGMm6Jg7fD8LMEdATTWE9qBz9p1iR5G3A7LcQnrnmAMga2bNGYyj2SR",
  "key27": "2tiBfxFi1wrZXP1bRJW4LdqPRkYFk4tdYGC3GZ765kffZJacB3YZWNhEpXpbHGXBvjZUiBTmZXVMm6FopSCadXek",
  "key28": "diRb9k1nDWVAfUnpzDygUSRFAXwHto8doDeqjxPnjtXAwMWagqZXCTQEjvj4XizTARPpApVxsqePErLP43BRmg1",
  "key29": "5iLgQdySib7tmqh2tTKHdJiMKfp2FWRVrBTKqESUXXbqsSbn9YL3t5NwV9A3Y9QXkVEtUfDt9qydSuN32qJEEm65",
  "key30": "4QG82zfuD92acMPzWaUvDaZgF3F8VZRyoqPx9L1vDVnw9mqf7bVDFRccFDqi947xhxCFfV8kVbJGRhoXNQtPAmiV",
  "key31": "5MfUtriD3PrgaezVxHSBtyoG4fLVhmqzoFdV983MsprS2F4WYJ9tzBB5996C3e8YaeyAbWdCN8mZF94UX8HqubPr",
  "key32": "GUJ38hg1G1A8opMU5JttiJnfzWzYVWGSggEjk66DDURqerjE7ejkX9h4fVRkAsXPTpAvd2abGwsHHDjKcEmWbJP",
  "key33": "6213XqZAsz8r7iLW6bGuc6gidC1U5T2frStUQ7dPsnc9MvuuEXWK8vqWrC3C5k9RpjBgjo4gqkMACdifHVdeyiFr",
  "key34": "5XxYxvumsmTbkeSxcfQJVHeEUTtvXzPtTJ2YSVTvxmQi4DpdVHsYL7p8SB5JcMHeGVQJz8HyVzH619VJvQA4irh6",
  "key35": "2p3kMk9bLEebLUvVCFwoBvSRwPxGpGp6yJmfa5yZm69qDVbaLdp1xQ7fiPaV5jc4fgLpwtRD84jy3vPfyMdMZqww",
  "key36": "295PYz5P714Rov8YVD1ahc7syYpPc9XH22i34zPW8J5wrgo5Bcir21UAYyq2CJHPsMTybd5ERgmFiibQF1bUCYiS",
  "key37": "5wUV7qWCRPs18DDJcF9rQrF4pxzZjAoPkxgoVS7xRqNL2kLtzkEnhrkxqkaTLYPbvTtt43kaexvXyGKN1jdr4EH2",
  "key38": "47QhLjj2CNrYumWXmXQim6BZ4GDTqHHM6XArZZkAmrFfAySuyvgntst8a71oXCcMXvTJRdmQnmgv18KzLvuLnDL4",
  "key39": "45L3oG2kiYmpdc1TH6jm1n4ETNWB4c73BqtdT7TFj5T18TJBtAxx5sRrZxxnkCFZe7vf3hRHjXH6AYeYyBkDPuND",
  "key40": "5vwcGr1f1LNxpN87dbQSEpUgCDFt9bYRAG2o1avYSQQWe7Efz5T8dT8zUh6jCbwRxztEZa6ybbsWgDN5NHjw49fs",
  "key41": "2AcRAA5VcqvuuiFRuxSmMaJvxJ2u78RC62ULYZ3cfV3bbaSUHi4U9khbYSYY1S4aa49o2drGo6nQ2Xz9MhXoTUrS",
  "key42": "5i9Cbp26LXCEsrkHvYsudS32EXsNqUSy5qV8qMvNvmCxSdzATnQLmKGuenfCfWRZQiirU1BSfsBRj1asc8KKM9zV",
  "key43": "4XiuNn8oFDtdnHSzmUv2VkYu2sM2apK4KUNJcrEDrqKfd6osnrFThuF1iYDDpvYeaSxcKK9NrtzugLxJqm6qFqSR",
  "key44": "43CnZ4X2XgCmzzkemvZAHjHTeD8ab6T2oZ3uXUtWqf4E4xcC6ou9zB7WyNJDN4NVoWtbTHs5qjSyFcXrePG8VPqi",
  "key45": "3G76DhFZh7zAaB9ugkcc2nbWLhfEiKpLg1q4ZCGc8gNWcx7LGXpvZHNU45nPqXGbZRsXGbfdDiS5ejucuMp8zj9X",
  "key46": "5ZHaJDjW4dMXaTikZKtXkhx323SzESgiRzK37XGBXfqTPsdWmVBvFvTTdyDkwnM7Ho53ApkzSSE9J6RtkQ9rwz8z"
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
