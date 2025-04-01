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
    "3dbzTUAwaooGE8GL7kPUAsRo8ArJrAiEZSTcaV1FPVpVGcB5PDpr2iN7dbC66PYQBGmQ6CTJ7YoRgwyARGnKJn46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QwJhdoiRGpqkBimrngAxJEh8sBgznpktgKu9as88ML5rSghkzJmr6hWUpQWMJXq9BuezXNM7n2JL7Y7t31muPFi",
  "key1": "22DsWtKxHLcntjC3Gjxq5UzkFNKd3WLQb9JSRzkUGGpqgDzkDoLjXJaRgiejWopeKmhDxALJuTaHUXFkrZEBqdQa",
  "key2": "2hvtKAg79makktGn12tfc1emoMtuiZn43Amff5gziHtMEQm6umJDGf57pi4rHEmiWKEjsDSE7R8vwBRo4w1eVXb",
  "key3": "5jvN9mEwNm2KJ9YXv7HzL1NpPPhksGSPS6fzhf4m8KDr1PVBAW9v8tYMZ4YxHXragHTxkH3btqbgzbstuT6VPpbt",
  "key4": "5RfNkerhR3Li3UVPkL3RMQg3t365L6iin8BQa4V3hSjNbquFjnLhxgWypXqQWgnuCpJ5fcosVekLjGMwbD3Zk3pz",
  "key5": "5kCJTH9Cs6Y8maJMnjKFcyRa3Hs8crYBur5WkuYhZRnp34p6Gu6qQWZUB1j465jZ3k4qSthYSmUAXZ3GJdW65c7c",
  "key6": "MiqP8DqE2qXPcsfGZ4SrBSjhnGuK7M6GnoUELTHQMHaANW1S7w3Wh97FVi9FcWgXCZLX479U3dRZwThKg7assHZ",
  "key7": "2CfW7D5ujUJcWLKhMKpjQ6dsp2nA6jX64T8HNfCHeC7cwwx7ybRduERooGoHoMAkoAp3zK8pQz3fYivhexMKSgNU",
  "key8": "2d3zSkFnEAZiW844Qzc1Fj9wWJ2h4b8YsuoBbqsjMA58G8EXSw7ZoAHvHuWHdyMyu4SvRzuj5PKwjxpnPP5PPqf7",
  "key9": "7vmWrD6jSSEf3ZJ1E53Qa53pDAKespVJDz51qcRFg6qrmFw6q7cEZjrMZJyakq1o6qjxDUEv4Y85WyFFPTMGTfq",
  "key10": "59GgArWxaXCTeBeeoL37a1gpEf4m1UJM7J9Zzie2Simy8X6eyVbiJZtb48von5BKBa4mnEuivYj33gko5S1ZDee6",
  "key11": "DGZWkAUjkEwKvNdWGXHBdyk7Ry4zLytNGcbF8hYeaCLN9V8WCAt1pKhFztQCEHh2RJZbySzeoKuxCJ4yzehps5e",
  "key12": "42S9L3y7ebbwtCmKgSNcfrni1i13XcSVN8psYy4A7w11b1ioNC3GBgBQyikLkKzofAeQrxZH2mXGrmwdGwaazWC8",
  "key13": "3ZAzsuGyBc73FHAcn7TTDD36VUzKbvJsdYkc9GGxKb5MHPUSMrVr2BNXioXVaygfhL8Mti7kvwnYJKVGW6WysJLa",
  "key14": "7XvW6u25uRwwuWAc13SF11cXAaPhzrU9mnheKW4j72L22LDfE5C7MM3RKmjG2YsC2aaboDJYVCYhWQyRbLgzG9n",
  "key15": "4jRA6BAm7BXyPxVEXZaw642s8PXjak2GQomZ98g8Gwzj2ZLbpTGP2iJJCPjeL4hceywciWQ7F5mjkojDKN3cV9St",
  "key16": "38mZ2cry5jyMVbWkPxtMPpHCMzWMcNjX19nr678YWiortZBMcnEvWRjaqcFGUo7eZN1JiBJwgZMGfXHi3mNSBJyY",
  "key17": "2WTbgWcSt5MjDrkCWEr2XLDD4L2n1opZgXF7Ttgm9HvHwfxZSeFzwupCzLrBMg1ukpjRqUH4Egbf7Ms9Kpm1xi2E",
  "key18": "4WKtMtAQfPKSBn7ptcRMepkw1QjBSz2V164AJCcEsgygMCLKKDpTcEoEFb4ANd1Ni2MBsFSCHFurp3pCf9Kzf7wj",
  "key19": "2VH5XprKGtr1Xc3Z1KZLVppV8j5pUYbpp7YnoQiqyxRXWePKm4XAQnA3v9hqiCJ1LHFwoRMAVUQEd6qLSpRLTqYW",
  "key20": "4aXeoQ2Lo4g1PWYTXxooh7mn7MVaHVn7YpwaMsgBcRUXo6UQ4JRbLgw4YVQV5EURuJWvm9ruhmrXeKt1xytnPPvZ",
  "key21": "62USTcehWqKQsro5PybRmV1CaKg3bPDHyUBYE17JxTKSdRPQkPtz4gNZU4otGn6YWvSsy5viuB7Q79c1UMd48Ema",
  "key22": "23AL3mESbPfuEWywDx3ymErPCWJ67HjMQpuiv5JvGbDgMyyPFbBArLf31PyT8ZBm9SmLDJptoxd1yWKYVvodceHd",
  "key23": "UwUayyTrPCZ2y4tQMftdiAjjRjLgD4g9oY4gXD6JwKLAom2MwHHiNxi3E7LYDGQNVKujh6H51NYVC4g9ZurYKA6",
  "key24": "4dsHNPhBsGsqvnUW8JpEjqJ9ozeJ9RSj1tijqqoSBMnE78LA15VPUcv8B5gTNnA8EHrat7koJPS8Cze3cvBHNVrF",
  "key25": "4DNCeSUrcG8VnH3CHctSVwWvKpuVXJVrX7EkDFnPknKiEqD2pLhd9sFjVBCBScqrNkB7ARn8TgmZbkdZR1uTzjFm",
  "key26": "4q12gc4LDZS2uFMRgGmQQEyRH5xpAovs7bzv5sT6fPmECjHJ4h1gxc4Bk282Crj6xadj1jYpFAmGwBAxAvJfddjt",
  "key27": "rqo5Wf9Upbn8i5mMonXy45ird3szB5NF531UEFLkezZz8MvK2YcJghwhzcb6ckrCUxSNAq3fzt8cXwnmHkHtB8a",
  "key28": "4zBL7wxsaKxHcs2NM8jDQt23mTr26MNqkperqMC3QkwSXeMbHAG7eipFtDQbrtmpDu8VyzTsicVNu3iKG3jEPPGQ",
  "key29": "4SF4x9auL7j3KgZz3FdE2zapH4KQDQcSekpr56sipHVdrbSQNDbKVnxsau9mbrj3CTtoZ3GQ9L8gb2FSWgRXXnCW",
  "key30": "4tCaEzRYyQawC4ogH6d2Lf24Kk8Hmf4EcSZuvatDL2DAmxAGkwUrUG73QZ7t2zePhCvEkmAZgbn1nC72UtasKbCT",
  "key31": "3kdgSUuVELjoNZGesTXQm9s5sewNBJu6fAKH8c7fZPhESub3WSMg4HUgwVmJmEZ72dz984gj5pqU5ZV1mjEcmgk5",
  "key32": "4AR7x2JhyS5sbcAz5fzMDnXQ7h7b2RzM8wppR5fyFFP9H9sqbXY9Yzt7tAYwGW2aaQXkHDiWMn1oHuNPuDJhpZsv",
  "key33": "4LgMJ2xZtQAiffZeZjsL5C5NNh7YnAT5uDfuoN3TXEzPXqt12RBZXEYftuBkFc7bMfEWYfcAaNJWUxiX2fNgKkfD"
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
