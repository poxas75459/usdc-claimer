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
    "4HCiqWmAASvzFrJ9svpNrFL31TKCCGByPywyuA323gQ189G3YRoDLTt4n6g4bPAEerrqvbgNEzsR8rHqmdJ7J9jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiHs5jUTHfj85x3Es8P6McqfYcUeab8mg94qjJwemejcdkNWFmJdQUzxVAWYS3AdMJQcZTKGZWd9CLXJFvufL7h",
  "key1": "5vfzDeTDPWVudw9C9AYQ6jYjxDDCQUp6as6BUYsq36uJF5HjsJUnhmJt87DtFgvGnT6ei7heH4TQLrGvpc7S8Pi6",
  "key2": "4RQc6Z6Q5iJR3ugS5U25YCJg3WehYtzDhKhw1KzSWyCyitkjPntuNH9uLZdz4nCokXn5jBiBjAFPo5bYyLHRnnmR",
  "key3": "5LzWhyTAWBNcqcUG96Mk5fnKsWakWtrFS7DG62WeRuPDBPzkpqCEqSgiW88S6MQgnbAibmWo2VczJuideiQE68mi",
  "key4": "2jXZELyqWgERDvg5yBbcA1D7quh5H3hqiJqi4eCD2WiFKSdVmyczFkAbmWqMtkbYe7oRtarEoRsUNkxMXxizqzSf",
  "key5": "2GHRJDrAitRxSy4tBLwWeWgozYjE8KH11L2JD4Ka4vRNhPCxwi1ivSDuJkzjmxm3vD7oSiAoRkctWb5csse3kszc",
  "key6": "4FkS2Yw42vUg4JwysJcFgEK4JugboFK99pWQjVeFqFcaMw8CuK6W4jhSszc4x2eSf5U4iFpwTsUrhPzizkoLUTx6",
  "key7": "z44e9Xf3FcYfBmvk7nBKezgE5oG3fX2pSsaPm3AnztphfZg8zUZ74SVmjpBJj2t5SPC1qx1CYN55uPG4DzBzJmX",
  "key8": "3zBCHAMUf8DXaU2kTch8DDs6FkVnZSQsgt7pG87zwuK4cTPaaFT3wV3Ej4iyJ5gfyEpV3ema5maDR8tYF1QPTiBu",
  "key9": "PY5QU2sEnkH49CF8eCp3LoREuXoSsdVYSSNhmgJ2txqVRr1oEkMfkoa5ARYxBZJ2YsZSULGcnkXRqFJsvfGsfAN",
  "key10": "4zSFvFDzm2ti7pKGvuJiwGeXoE11ZKyjqZ3MiqZHLYQXsrXEFbMLLH6HGKVwXkh9ubXvS6e61RtEEFPzSVtUBEhd",
  "key11": "5GPzedwWscT8VEtRWKWSCaaHU3qkMMpn628DcSJ3aRw2YULxmWMvuBNiceDVdSJDUbUihPK87YMPTkugf8CQLE6C",
  "key12": "BB4WaFQqvGTfA4hRnXdgXxW8GXEtndfQqX3WH3j53Di8tiKcBZ1XoMs3m9TC4DMZCSjPE4bMxU8uqXoLzNCSGPo",
  "key13": "2XW3Xs7ZgkjqhbHF1gFzDnxcS7aN7LfC916HxemXpHvE4iuacS9jNgYPaGE1tRndn9ktZC8rLfuRYS5VtTrYqNZu",
  "key14": "28kmcYxBEksszhoSBqYppYhaCQ44wzdh4r8FgQ7pmFp8MgFRcPYeHg77sSUXYnNeth6nKKGwGcagAnYiRyvZgrxm",
  "key15": "D7PAP9tYRZp4yViHv2vdVjuHGnHTwWw1MZA2vUdtNpvE3aD8wCRCVUYNdCkP7XqtojmGbfLSFxWmSCLRFdcuy4i",
  "key16": "3t3r5sMq9EqpY5BtMNWfAmQET8XpZkoG5yNRSTx8dAxCx2DBSU8rF7DwxYFf4Gv2RHPf8V7TPast4yNoHB3CeqqP",
  "key17": "2SA4JAb6cYdT1SyMssbMLjXrqPxoqt8YHK9suhtiGpameRfCgiZ4DxKzV66C28TRPDTbWzHurMgJHZYrMtE69Xaq",
  "key18": "53wvh59w4QAYk35EkXfc1b9QcQoVh8QabEF4ozeemZwF2pd3rg3i8MGLjXk8S8mjRp48WChb3k9kdGn5NpUD6NFi",
  "key19": "NsCtC9fFHcTbvsNieknBUWd53CWRmSQXNsqUhixSxaGDMht9FyzrNGKrBWKr9u2b8D195bHU1Sg9fVJhNrQTgE1",
  "key20": "2a9apXu56n6QiooBE4uufyxxgJt6Gsv59xz9zvMk27bUKVe2B8EyoZb9wwrenrcJJgUx6tYi7JajMddP6piz5Xki",
  "key21": "4LuQCayHB1RQAcYkJn523vDx45HD4Wg956RQ4cBuivTPvDsy5MsL2NSmJj8VBMZZv3H8jP9yK7YP4JMBsJgcFhkr",
  "key22": "2x87eBMUBCwM9GiDPwSSSDo4dssSu3ZU12WceLDrYZGfwnJ47neYnETpS3k9PDgR3fAxgJ6kyq85EVD5GipwbtKi",
  "key23": "3F2Ac2TZar2oBKLudrfDDDMVXWLCR2VkRKYDYnuKXnRDBRWYGd8mXmZSFfuKU7b8jPJEzebkwSCdiWYMeSCRXuZk",
  "key24": "2WyFpWoqzmxhMx71VvEEK82p8C62miQ2yt3UHAeWmUG9Mnnh5TUnA3zyH3YhZ2hktju6aUH4AuQ4rYzDp5x7YtYJ",
  "key25": "2AJ6Mgx8mAqEG45ot1a5DPZioAzign6LGY4Pi7ZeZS5WvZa3v4ats35qSi9uavnyzxLsBkdPxv1Ei7ysHQSycvnz",
  "key26": "w2wUbkLTitZYarbZQTWj1MTR2Jn6BV7Ys4GZFAtzvE3tebN22bpnGhhx5BQBb4ZHPAY9ugUY3n6hNFbmca5MD67",
  "key27": "4nFic41Yd6EiiFAgGBRuqCuJCfwVSDYpoD5Pabe5R4SCmpJJkHUGheAcHMWS5jePoD89NL4LTHSAV2heGwuibSit",
  "key28": "4v1ck2rP8VCdHwSAd4sZfeGPAz8fb6PzKGnpG4keDv7JtbMma56GXTNy6cGyMxwHHmvcBBXnYVCHasFAkHBY2hSA",
  "key29": "5L8HyEcqJrQThxnkLmRNuKDBCVEXbrXC2iZUyLFmWEJaR66pJj722wnV2pnT9jJ4aBRwZ2Uzw87comg8WmTYK1Zq",
  "key30": "Y5x3jDh82XzkPrHeGznUTRX69KbHpsXv7967hsWVykC42cAkEvGDCY6Ditpy1KRYT7UL7wGrks72qFwtJzRSFb6",
  "key31": "PYR7DRcWuMp1UQG9RF4UhqSacaYN7Kvh3H8tX35woE7tqdGCCZnGDpdGwE28rvPuhDHmFyr2w8r2B5dPhrqRxAG",
  "key32": "4RQNm3AFuLqa63z2uvFSvq7m9UeaKgHtMeDAq89P2BiLrFpqVZjLch1rVu679vGhSnzwcvRdUTHd3A8wybAHoWgB",
  "key33": "5jaofcfK3gt7aXk2b8Kupuai9iYqK6F4mc2qKXtwtkmz31jyj8CtZ2W4HBVhMH4ABhTuJgKPe6CiuyTWgVHqah8G",
  "key34": "2KcZXAZhrfCo2jsdzJs61J34DdxLLgkYevxUwBiwFy1gY3zb9Wj9SjWvjEEzqfYJZg13NxYpNnMPNHSefZHDk2LQ",
  "key35": "4psbssqq3uLxegb7ea747GZ3cDeiWqAy1QCMRwxvccuUYTxN7UffRDsNdgB2u7udfWp8LhcEDdxEUvWikFzhLWui"
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
