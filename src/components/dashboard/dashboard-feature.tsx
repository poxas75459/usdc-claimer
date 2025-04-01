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
    "4GAw1JUood89fnELxKoiQzaDgsStxdWgbKDQWwGAYGkDdMvUbqyvTyLeNQ6Y3RnnzY95wDLuuMpoZcsZobzVABhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23iMikBy6vygkEvrJEmTPoh4yzA9kMavd6FbZoRLpozRawkR2FQyCNJ18gZXSXAobkh4WbHTyeHtzA13i7MZAqdV",
  "key1": "37VVXFi5puZa4zKGESbWFVxbp2YuzehsUaM4MRLTuc4zwbT3CdLNAVXWg2T8muDHqQAjhg7uLKUEhdZNTGwz6EWb",
  "key2": "4GFzp9ewEVKBE88aVTX15Lm9QRFsUa8W7vrDp4DS8C347P9LxLpBjDTitBWp24CMmfh8XuX2WngFgCsty1vYP1qq",
  "key3": "4RreTZAbFdXsf1SNe2ekoKJSnwQ1zEHEjegEsCYmtAWhPaMtVBqHHtEKMpZ3cKwPCmzhMgcFUgqQDswmBD9vjA87",
  "key4": "BwkWhgu3xLhbxVA6zdyQ4zfnuJEdYYVCivzDaGNK1NsdBFNpdnGyRkMjVXrwdSCkQNDoEEUbiMTRieDtrYQpUBK",
  "key5": "5ydngQn4JsDwFHgiFMbPSg32eyCHaiNeW2vAoKFqwvGvKqFJrDjYY6R1XFHUnJofByjoVsdshUqFdy4DCUxjLXeP",
  "key6": "7pTGWvMh7st6Sedh5V1emM6QbuMfAhwnaVMJKDnixS6CB3Z2nHTJjR9nMuZYFP8wdGiyLhG4h4oBuX2ospsaRvG",
  "key7": "5QqcuUaWwv466o4iDMMsEnFpQbe8twNfjhXmPRxK2hUhuFgMstaVkPXTGQsgBJnumCas9JrGF9o6Cbjsnxh721Dw",
  "key8": "5JXkx5HtqWmQ2jUwPMEYLFQ1LQd3bt9nVe59FjTi4rmFyCtvNxDcY6YyguBnQSi6Ck8rCZ3dYsHpMTY3x8Aw2dsQ",
  "key9": "3DrNfXR3sjktypdzpUCsQHhFN6x8sQMWGGj6drpJGsoMW11qA6xjdaCWeYcF2upYvYkDnkMaJvm1hSvHkhEcZYom",
  "key10": "3tHJY7FXSeBxtvvsazQ7xumSgaMjBZiXTQcMYjRvVjonjn1DmYyCdRBuJZQRz42RqKQdGf94eMkGzFcec2ujq1K9",
  "key11": "5CekA3MoVxhE6gCSkohucSkvasnC643EtQE6m3bq1h48RAgzduqVEwsca4ebaLYitC9nuQMS8W9FgyWMqHZjPk4i",
  "key12": "4hN6KAQqcRcPNjfvUR847acHNYEwX4U8BtwsRriMk3Xv2eVqymwMyykaHifKR57iRV75GjdrCpTnbWU99oopkk83",
  "key13": "2qrkfGQrgDGX3wdf4wvzBb24paabebUvkXAWpo9PaJeuMgWq4cGix3y6D31ui3XLdA9P3mL5ijRpN3tShDrHSVoU",
  "key14": "49H5nYCEygH3KL8gUz5BVF3ezRvxeJELGiZbbrpoCosHMmaHUuqVAp8EQoA51mVW6CiVoiZdBJiG68g5L7g9DAAd",
  "key15": "5vvLbV9De2nQun1G4kT2SyGPeGKKj6iJgD4Z9i9s4ECJdjZTBgWqePddsmtDaJjJdYjtFaVXreUk7Bc7H3rSP9AN",
  "key16": "nYfBfbuMSwhRtcQ9NtWHxvx77smthWpAi1MnFV7K7Coi9ahv6sxKk1WS3a7MzwXRmyJnjKnutMwxgN4LDNvffDV",
  "key17": "RxyXV9WkUfdNCS8yjDPySLJDibwMHRE2a8kC1g7KLdqJdpn7kG5NRAgzZ8iEBqRABR3NjTXfuWCuMBofB1asTaU",
  "key18": "4oTFf3P8Z3yAjHzzx2MTbfyiPzDkwECv6V2jm5pqy96q2toJmeoBfYRuoTrwdxs76faS98e46MSXExbiKEEEWUT1",
  "key19": "3XDhTUbZXQuCBr1aWxBRt5c7oc8hdSD9oVTdP1GhBvvj9JdhfEwb9ExFwm79sVRimppQGzyrgtrFkdeF4hizA5db",
  "key20": "3ox9Ax3ZW7KZKsiHohb9iYnabRV4VNVZu9SYEzHJhcKt6iAN7oTMZXL89dxJzkpX1GyixmvXKc6ZuNiDsyX28bZ7",
  "key21": "4cDoxxtHKv525X25pAhTXNQru2wfrP35FnKfXpyzLnc3GAnKBARkkJVoMRsNAJ6eee82PwfpxCvN7p2BaZLF9cBS",
  "key22": "528DpbuMFit9py6Ze4GLKaYkUKHQsH15ZbGteS1sLa6DVxMdVYnHVCZfTssB1xGxLfFZQhmetap4GpKsT8oj1yBz",
  "key23": "5R1EcJbSHCBNrRQMNYw4kwTnE4BokyDcNZMCXtij5vttzuQqf6QtVoVXhijxkZs5wRsJKyLGiKUiXj5rUwCMCtxn",
  "key24": "2KcPZCT5QaWz5TCcWQtgfc1oLqTAgLe88JxT3cp6QFAKif8wXPpmyuCBYjVe66KoxqnJ4JBgBbArYKu4WmarSbXy",
  "key25": "4jQBUD5v514LgpxfEewJDezz6ut5tNaGbk8SSv4Tm5dW4s3jw1P616vvz9mAy4HpFeZGndV4998bobSJqx7jDQLK",
  "key26": "2ahUQKNMnjaFfrAeqmAzijjLr1fskmCqngsACB3weSy94d4eeBjBuN5TymREshuBv3ffMys3gLgTUEj9Jm4BN3Fz",
  "key27": "CSdbDkvqpAoUTxEwXpwZC4KmXSz6fGHntY9dFQa7G6rfQX5ULD9rgzaZJ8S4Qb9pRgBeg8SG4DmGW6SdqMS3UYN",
  "key28": "2NwX8MpKSKYSohiVnXB9sKBNHUor9vpAbVZUCWtkd9pYapHbk2pCr3ow6P2WFx1VAGZNxWiRwdprUfBMQiE6LBeg",
  "key29": "3ZLaq5GopcMkPxKwmQUpujLMAd6VQT1mis9KDyYGLbjfdQJ5RUYZdtvEKQWVkA5EcN4ECBH2vzH47niadqCJQFQh",
  "key30": "2Atn3p7N9f6G3LATqCxYqvPe8fCPrX3S5t3eFJRk1dnjWfXwqNknFCKsATAUG3So4L1uWWinFx1FoddNRzZh4JhQ",
  "key31": "X4ppxFbutVvWCPM6CEREhFmSNEXbPAe9mGjFMJZ9LAtK94YdyBwi9nCuaFAyWGtQzyWQ6yXo12R21bJrJV8j4PC",
  "key32": "nWT2Uki85a2XrHHnN1BHqD9k6MwiCspuSnCmjk8SaSK4ppyZ8tX5rHy3NoXFFXuhhttHHsfyRnAYJKREzx2eY12",
  "key33": "3C7MntYXDM15Vw5Tz2NyaiHyarxsF7sEpfQXe4JgZECzTYNQyqaHCXbPtK89ihBtg89Jekjc8JVJ9Z1D7jQYQk1J",
  "key34": "4HVFdN9zynaFR6weFfj6ETLztr4t33Qfz4qaLzVHE6rXYeR9hN9dgMXn4EFkaFhaAHtRkrCqhsNDKZagzQfWvDbf",
  "key35": "3Fe6EQWSyxfGN9gpKT1eVqBJqCCBSJQLjgrWKGPvTm3gRJQqrNAL5tcXDLvKNor8Jd2SpTinfLyr46hvbSfc6EiR",
  "key36": "3BRmoKVrcRe5RQEyiCRfej3T9F6o8dzt5oTWcvXiFGcWrVMyGrkheHNKwu8kQiGEgKdsMSBS3xpr3jqJ8TJbMApJ",
  "key37": "4tpkpUi8Uu89dX35q2CorzX7Gr5PtTxfy3BeK7joZiDbnKkjTYQkZwAKpp3hhbGZ2aBbvpmXvqngqqcUj2aDZ4Vg",
  "key38": "5zCT5RgtydeZcfpDXYJsEsTKH4Skb2Wee93acq6Zsx5z4K87szJwLKFDmf9LLbWuKYKunCcoThwBirfhsQS2CAba",
  "key39": "568j1JcmMPzsg9pyHAeiFaFeXHeHzmmSfNpkGyGZbbepMskmQ92PhezLBKpfZEEgtsvLGnCNnjRGXG3fdPMd8xJa",
  "key40": "235zY3uGXuFKuEHRAoC7NzRnJgGV7cAQBUSAHBafvZWbSkiyEbXN7jKAnF8NZfZJh6NYQxH4Ymue7gh61SsNPks3",
  "key41": "4tbbmBv5CzxmwwtCVksUfx6X9niq6qGpGfGbYJ2x2KtPC3bwau4jkB2hfXfxkLGoZoduCjs9KAvmtdYLMw6iyr7z"
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
