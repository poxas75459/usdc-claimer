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
    "31N8ipUvJaZzJU62bDQ9tMPxgPXnxHuLytDNvaTrCdnKq7s79rQ33kdNmXbvegfXcyU8GXBthNGt6Aqeu4EEXqw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZYg1kXRZzPy8NpwfBiv1RCafSwSRK3NtCzSaPF5KuJXZqNvQGFx7JAqcFFFxXZQbGUhVDRGbSLnCRq1nSB5aoL",
  "key1": "2EtWbqZKzcjRLZBLQFyUar7AUeveSRhQKdpzPw1mfZHXmufTuowPC8gJYgSAQobHyvCeuhs5kWxpaeNVhwbueNTW",
  "key2": "4fGFuZg2EYBMEMwvV62Nw8pTQofLwgikKv1LHtRdGFAzd5TkKN594W6yDTLTcrFo9T7Zv3ST5x6yi1ip7cL1RgcY",
  "key3": "4Q3yEM3ZBt3Gt7vybwXsYVs4bNnsW4EFBsM9MQGQuz3CZh2v5Hk1TZfJzuiu8X5GEdUhaguJVjECHmH7e88Qcgf2",
  "key4": "5KucR1DmD1J61pQvRLHoSJ9H2fAyv1Skfm5fuD4w4BLSLuSeWEKfCAPSh697r1JoBzcBXZq9SRtMGNj96SKo1CB6",
  "key5": "4uFrGai23ZosNZwyH1S7Vuq6MTq73N1awszSKLzcWkJWAU5iBZT3tKUZbBfMxDehUBHsLkkkTkvDq6SoRXTcFSjx",
  "key6": "5989hdr5EEQGKj57dawD6gPnu2L44hMubkPskYeVuVTStw5J1PoDYAL1x1ZiNzChPqXhoRpL9W5iEGpaaqJ28owM",
  "key7": "dBZyVEQAFVykzC9mNGwCKamFX8SWJj82LSgSfSpE8N9wKc45JjLd6jMPBY51aNeu69vWiV5HpDihAgbT9iA7oWm",
  "key8": "35AWBCjn5WQ8WKNiVyMPg48o29ffQu9WeTX482nuKd3M1ZYkjsM8wSAEqn8nGq5uizBNi9vzVGELctfLbJXiY7im",
  "key9": "4cZFG9E9apqXHqU14rxGLQ1xaWwAHnQ9ufpUgE7Mq6G8UMtevWMPL9RBRWacMxgycxhSHEGEPv4gMgFkmWj9EeXW",
  "key10": "yWLQFc7zETH7J2gYZFEcAYuACY7p5sZUvvCjvntumjjEuiR7617iqQ4oeNuQSkLhG4hYFpppvUHxQzSv56vqAqm",
  "key11": "vQgFqvUGzhJeBe4zYy6Z1cGsG92acsmvsThCwKqnXH9m3AdRuZXcFxdndNmd19r5eVPa3ajisAGaBxi5givDUy5",
  "key12": "3nTLZCBW8hQRrbkpQsa3tPs4oNiTzrU4BZahMimmJwN6Ahh2kCfRrub9Zr36Japz4gVSaMgc5gQuFhbGdpEuu3i9",
  "key13": "s25bJBZwtDnzFzaymmdoyC6nKZqrH68dyeWLppUZbpMY6hG1dm7x8nYFBGHb8d2uKzVetSKV4NVx4nRxguYKGua",
  "key14": "3gBzDGyogVDDY93qyJY9aQ6T8PaG7DXeirR5PrMhgGTCpeHNsdrgNZpYQJziSBwPXmphSkv7Tba2mRFG8UpypQAj",
  "key15": "3GaCsHynzcne2WyJqeqwDVFgqievfdhQbqLZDsLFrotef8YQpT6kykm3pk3GJWuz3imUG2sVFNF6DrtMukLZZKi3",
  "key16": "5HSpLk1LxQLQMW6Ao7WgQwGodMQTFcrYgb2RN5vyuBPMefKjLe6PPYpCc5ymky54aqBSQWagfdz3HxU5DLWokZH",
  "key17": "5ygekko4RE4EksiFcJccfQsC8Aehzjqsk9XfWxqW5WtgLkJ6Y5M1dAWscpnkqrcayKi8hiuemXgQHfbGHovGU34j",
  "key18": "4HmmcM3bAY5nM8E3oQ2M5B1pfY5i3rAsUSqdDVjkL4Y3re34KQNqcrdYn3zRsKswP9zYBrrfGqWbHw1ybfN5AZnc",
  "key19": "2etsVEkZs94tP8UeMQ4H3xfLSY3x1sL6LyZEUzBTsEXrHorxTFnHu5BBMdJY9J9YAeKntV3PAmgc2CSp8as6XGH6",
  "key20": "2nJ7sb2TRYiwEAuwNMPirxo7a3ePuTyibU4wxh1awhAvGoayyb5kaei5rDDev1at1LYJkGj53VQqqs5kFpfjxia",
  "key21": "TpRqq6mnNWzFTUcxR3BfWsZZ7WLH5bRX8XEpgN9nS6BwvNqJpmBRJ2rWRXsH8QNZaTTEBv8CvksSwK4xkq5ihKi",
  "key22": "57exF9f3vMQNR4zmMbB5QLbE2vqU1YPkU2KRoGTvejsUS5SUfcPdDmWjGjHCcTwYHwNmfMNwhsaRvc2GF2thHKoX",
  "key23": "rzta8hdJ5hBZqeXTtjzrAQLfvcAcSnZCHiRbAnzQpvYX9UvToy1TXQ3aCwavWV3BSxjR4HBZFe8SwkUDWCqWuST",
  "key24": "2vK4U7nK8XZLY7fDLBJiBzTuJoERz1iH5TxzoDnVV3gJFDMuvL7neMF8c64jmLRDppHkyPchaKhLBaRaX8zHao5c",
  "key25": "Cjp4i6vKWehsByvxdMotko2B13angLDz5FqFPb1oteJ4WBHfkgLysZaHaPDdS3HQgmXhvqc3df6XwVb4Dbr1Fey",
  "key26": "c3fcLA79RsjCyfBbTfxDDz9Yq9oaE8wMj83mDzU4gZFm6yx9Hjhkov5qGqxNHJLn4NA1FV67bRQFDUCWPZC4FUu",
  "key27": "42BNg5CVxmEbaCj9uHLkvgML734S9BGD39ro91SCgJxDY6hjDaevoVMvHByKt3tu9VbSqsz7u9BoS1YpJ1rPMMKz",
  "key28": "5HHKG4YCTGhLbySbQ5XnQYumTPH53CTGFw13jye5fXkNRgcpRMrbEEGiEEjVwdUuZhN9cm5EHTCdtMzMePFbsHga",
  "key29": "4Px21UwNqHppi3f9LeUCUpdCJC4PCe3uQ5yKdwFkfWPr7kVA4NTnqvZ9CAbyFkJGEb3s2U3YJPbSNpciVVwLQ6H6",
  "key30": "5MiSxbQaW2W3Nx3fuYfyFJqZNCEpkvRGo7huKV6ZTDsUtVHT2tP7mEavY4ehsdWNqM96vE6GwZrbsiNQhvBKu7rx",
  "key31": "yt6fyRQu2J5cWrKFjEdnZpymzvZvp51GwYyxBco6ihjuBHB788gMqcRqSzRbyGAdioDBCMeVWDUDie9kpkQRfDw",
  "key32": "29jtcXyMQudsmT8kKLz5wN7ViJAFGmUsDsmp7Yvfyixx1T56K2xxY8vzSEeKWKmVjYGmMBwZHxrQNeDd99KN8BM1",
  "key33": "3in9xqJHw3wVjuo5SpJCrXEhRKiHkR1dd2bdweEzugFWjem2T7PMiwwjjgkPVuBmtNr6PnQpbHrt8pasRsef4P8M",
  "key34": "4EBKrH1pimJEJbvcSh4xEF1rNi9UzSZASHXYgmTqYBuMtGMrbMujjafkYbJG4YtZieFxHkcExeSvmHfRmnPq1yCn",
  "key35": "3KQaYYRNRyvvhZRqFfjDxJ4e7XosUaoEgSRp2RwmXQeoAmFuMtcdQwPjqVptrhSaUTkhfgS5MiCGAGSVJ14B1iuy",
  "key36": "iQn7JSdr8uedjXKokV1Xm8KCXwCnFyJPNi1CwvHeBUEQzVpSvZFZrq3G97SLqdwYNxUnnx1nz2eGDkFMwBxTa7i"
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
