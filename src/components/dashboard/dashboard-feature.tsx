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
    "2jFyEjFgKYuxPrTH5z2eXbPjNsjpoGFhSoXHPaCeRkRm94qMg1JVC2ZKJ6CnxWTx3bjEqR5DRcREM4CKryqXZVAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjJHGAy6DV3YfDyuVkegvHETMikBVzgBFotqaNRkdpzYGjREPDE7SFm6Y3oYUGKNoPUuLYSyL7T6pkkzD8B6b96",
  "key1": "3HX6uAeokphmSo8MCVhFiq4PueRF28RbLCP9AhjCuq4qFVJanwfGpwb25r7Aozsniean3SnEisVMCVG4ormdHP2N",
  "key2": "52FjLpw2F338P7fE1mgofWANSHdBegugaqLSjK3R42HAfTisYUMVG1jzwnpnWEcSHXxJ2W9JT7wPWd4s1CUmua3P",
  "key3": "3QuVCSxyEzvRKf2jns9wqQMVNBUfxDsK7MKz7auxMux2WExRVBcSnbornxgkbkVCjjR9wRNjfLfFyyshKPAykD4a",
  "key4": "3Wv2ZwxE7BGH3qYAr9cjpdVXR5NYCHQ6tJ7iMJYwMHNGHVuHFayqAvhQewmkVr4156MWbBCHMrry5nsDEdqMLmqT",
  "key5": "5bJ9fvBrCMYDJAUcGQ6pNkwtFKPuCdRE2GReDW6UExiYQ66mRhzNjPFvFppJwaaExa6yFmbVzANGLTrbinVBHiA2",
  "key6": "2H7ezobcLpN7igGopTEaaaGKMAWRpVjv2WeXkuq2Ww2iy2u1PR3yXCYtzeuKveeMQJN9GGJSZ2fMxTVCA7BroKBT",
  "key7": "3EX6k8F3ffE2JD8PkE6bWXno2t5bNZ1w4Wd9JUGtcrm8mmLapHwgzYr3kHN3z1yW6ZtW6hX9fqMP43Zu4T6aoLcZ",
  "key8": "4QGnkgj1v9Yby7ZETTVXthtHwPqnqZd1Ds8Tya2QUf8myUg9oAbcRqioUf2mpMAvZJTrxXKCCMCvbGKGugLYrTwg",
  "key9": "5dVdFyYUiGqBsHuHgYSd8TKKPfSsT92u66iRrJqh5zzvnw9JdVWWtkdP3L4Jqt9NqsJ7PWR5yh9yc9A3y8umV1jZ",
  "key10": "namB7PXasHmU5aLfu6573LTLwV2LBCd8jiBHRoVPDoNjGRDsPDeVmuxkfv54Vwu1Pq9WQJYf7iENxrTZYQvJskX",
  "key11": "rwRTwUEeEUmh9pJaa3SX476pj8574E1LoUZaJ3axEw7BY9RsgaCJAVDFwHs9sRVXLganh2wWGidTnMMAdaAkWVk",
  "key12": "38hHf9HJpq4KN9FM6pmqyYb2Pbt2PkGz7hr3NGkSyBdLaJzntg6CZJjP1RT15XmKJkDRkcoGjKiJQRWWNv8m8s1z",
  "key13": "s2vR7U7P6GxLexh2xuButKx1mzWBmx8sudXSqC5Ja1tTXdEicv6pWFRaQQCriuqPU2Pyzmqusc5e1zMrcVzHvRd",
  "key14": "TvFxW81UXEPRJ4W2AZc2gGBH2xkaFVJW7aDeNinxpYVzPfa86ePgS6NXV6foDvR95G2nkz6WYRHUoqk3GBeHtHp",
  "key15": "39xNSVvHYNMffGLgn2Lig1Hx6nYqa72tiFpUWb8vGktx9g68vgMV26hugzP7Uk75ePcSx9FMCScs38sDAHhWSbJ7",
  "key16": "3M7YpWKdrioPKDdHbtVjG32k7s38jVkjJbo2sYB34CXHck4YkRZiiNCFCEQaMJCggUwuJrpAR37K2BqDKGtpzfsX",
  "key17": "aHaErh9zwGH6xgNzULdF52LJtvjqRmD6PAKENSsgyVPEKZHcQgbpnEQkf8cg1EUJWRL7pDDUCGPGWao6wAsoWUt",
  "key18": "2bUfaLPdiXbbaLsnUUHWeA7KQCpoARoCS6MYBmi5Yyeq7MUP3pJLExGaYpsHdHDtCKh5mQS4s4pdfcvpw2Uhw88s",
  "key19": "4TNL8fPrfEhV9dTarxQ2dwJWCqfWtRb9j1Xku6pKxgKq5yGR7mx2eGQe9rfFHVWaAyRVRQkw43223kxdYoEg4ebF",
  "key20": "5qs3TojhzqeGgWCnRZZScoo786ofDiDJoSXvwSwhVKAhZS7SteChJU1LC4xUaPBPQATdLGiroe7SszgFf3WXjhcP",
  "key21": "4uRmRRNtKTunSxdhNXjP3qT2i8uy1Mbqa2xBEPRfeRsDF1bnszTWqZ7qSMbbRQU6vn8tLBpHaC778Rgdmd12MFoE",
  "key22": "2i9JdRb8yq87ZnKF7qafDWCSxeVdvMpyfFizPM4Ty1vq9n7UfjyGMHkCnnid7e77e3YXtkznspq54C5xSmd2LmEw",
  "key23": "56fdCrz4MSKKmP5Azfyges5YsB5d5akoPviwcWF2ESPtqY7mfcLZGJffHHYfHu4oLAudqyCGrWdNCoz9Qc1MYRUx",
  "key24": "3GNAdNTj3yJCv6VpZN5dzJviczxT4u6ZVG6M5YwAQA3JJYru9B9vEbhZ1F1W9KWuvE5qSKsiGntXWAYKSRG9hDPv",
  "key25": "5rC19QygdTrCvfSFWeCPqY6M9xKyfHiwx7KUay46NQkB6HDYDa7cpXTS2zFehSqy1YJT9RYu9p8zxGaSQZVHntBv",
  "key26": "648UkqULzcouuwNffCFWc2Ajc5Yx2CyP25BCsyKg2x38SyGMxH8zrMPdjyct16FcHXHmFUphnHwAnnkYG7UDqXAa",
  "key27": "2FaVBuHzWWDoUWMGMjed2r4aqQqqaZiKnMLoNMLj2YKc41vuEyieidYN78Cnc98sAahkCEZza9f4XB9C2bUdWxiQ",
  "key28": "5n1v81x5if6utMrfPtap4FTGoWuXHNgXbAyTwLZnMrZwpVopHc22ktqpitNfBhCTPJzG9AQwm7osfAJZ3vfaasd3",
  "key29": "37a2MdwRfKHk1JcBHAzKCtXzuV8bMsKaJQ8kwchw5MmxruC8eWkL6RFqHhT9qhj8Vd6hey2JVKgmtGGGjn4EgBua",
  "key30": "49ymwc7y5nbVhEqck1BUVkQeK7AbPUroeDZnnLzZ7QnjwEaaX7CC1r6of56dKb7HkVDaLWMaQtWg5QXR29n2jWwH",
  "key31": "2VPrJb4DEmDSmkf17QhNRQPs2QcCWbKsd6myN3jmzJig8Gm6CRzoRtFG8vze2uZuY2SyYdSaJvrZE4F5u1mY8EU1"
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
