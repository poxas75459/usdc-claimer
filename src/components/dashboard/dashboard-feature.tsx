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
    "THX7r6oQPcfcoKJWFkSzjeyoB7frfsM2iYYpJhEtPxAsZLcYssEwMqa7rTNM7pmHwph8mFPNU5NGtqNxu3zoTgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDvSJsbpinToM5LkhPKPDLfvVZ8wfh4229w8JAQAmxLRoXVRUgEn8bFGcRqBBDiGw1kkBVKDZCcytbjFvLWPiNx",
  "key1": "nrQSRfHVnkKpjuZhSDzyKknmF8bjj8deSiGgTMcTfzkrAJtsQ9BdiEjsAHEh5LH3pCD4e5xGoDVhWX3NeWY93bx",
  "key2": "3VeXa1U6wew6hcS3FfKYGTVGEkJ1LFDBe3ScDc8cu4zRE9FRvWr2fdWYiZ4B3rSUrGd2SqWcAw3s3txc3joUe8Uc",
  "key3": "6464xPAwGZC3D7haQ4AVTg9uvASbKpxzUWtPKLZUNiqBzcrmuJ1LMqJBJNoQsiGk6CJpE2nVkd2o7QWykHDWYS1N",
  "key4": "424pySoybM3FoXJ5QSCgnWAk2YTk9U9XvZW1W4rTEj19x8An7Sr1cGfHyJdxz6Re1cq3JJpKAPv8uCpPq8XD8tSf",
  "key5": "7xCTYU4w1jSezz8nX1Asjk7L4FTWTZhCCZxBFCmnqvKfRKHaPkeCkw2vPPZbV8cqHtZeNj5yQggY7TqfU8xDvNb",
  "key6": "3sUauQdpdccTse34K9D6jJYneZS1wv5NFkP6DimWJdYghRj6TBCzyZJX564BnPPhi61wPn5nyGHfkfjTWSYuoztW",
  "key7": "4o24x2zkEWbSQXB6dWcB6xKiYh6GzX3TLxo5bcSQs5f6bf3yPyUCSSH7gQKEEeW4nTKZstESCy7giCKF5Y7kATpU",
  "key8": "2mswRjrTekDr7xfdRbZvySHrSqWSyEavM9javnmmuN4bXxMTUCS3AMSQxTpBpfM8vqVG2pTy7Te9TcB9VEyfr1AE",
  "key9": "dDpKh2m3Ko6U34NHiCuTbBaXYxYQ64Ayn914R8VjzVPTYoioVFiN2PEr4tFxDugCLSpyVRJKtU7psag6gQjgmVN",
  "key10": "2hZiaGXvzzzQWkigDfbGGDGvuAZdFRA83z4nvRmN8qAhpfDezNPdG2BYtf4RrMh2k4zFuoi6TPn8Sbhc5gwC9pxY",
  "key11": "4dv6aHLr5Qvfer5RZfJwk42FF71szHv371EnLZqhDodiH7RW4F3HB6knAcnNuHewndi3Ks6fPcQ5kQyS7K1gk5VP",
  "key12": "rtq1PCesG56sTjgJfrdv8tybpiePYhmErp5FdbVCNBfizCijWiYB4R9BJfw2Ynz1kHLjMJ5tjxAPjDfCjd16tZY",
  "key13": "2PoHCUbr3wAmHUQ9FDRiRtqfJU2kCrzExQHmwFbMVsKWkCgnvbKt8z3WMAyN1HQky28tHAL7aXZ6uXuZhi5t8q99",
  "key14": "35QPGxxSVh5L7c9Xcz34nEqok3o2e9n2oNk2YcYbQGyeZS4NokP9DA4JXv5gzjz2wVW5cNPe6xehUv7prVadPPo2",
  "key15": "56kXLprGTrGxjMqgBYHQ9fPDRSNC3Sse3FPmC4qRnxiHJVv4rLNafnS9Wg6PJQ4De9DVp86AVKHANkn1nHdAQcDm",
  "key16": "3kzhzisWeu84bDFj4VKqnXN7aJnqbjmg3BvLovWxDj83RAUXWzFkdT39BF39R6cqFuq5J9rjeetvrqTnVDSuKvhP",
  "key17": "4HgpodwqBPEfcdTBEpeEvg3mC25FoPAWKFB7De9zUCWVCSFqDNVtteGhqofVdD2oef17t5c9TeM9hy7mPp7ZwXiq",
  "key18": "4Hvb2d2iSXjza2G4coFNd5a4StfbbSCCRZrycPyALYp7bKHyXAedG2sovV4ue46TXWrDmWrrABh8GF6sELfEqhMd",
  "key19": "3BaEmfQP5zsDDPcAJHQ1D8mhCZbuE6BP55N9ZdhAYVTKkotTpA3AYF1PwtKmbzDLtYizJmst96EFQxKwpZQuCLqi",
  "key20": "eAAYgKQ8wbpKimgaukVTMxg4fZt8V9tNV4tWJTNJ5t7aDssn3NgByPEJfhrBY3B5UEunqe5JpfkNhXw7khpU6jm",
  "key21": "2Eag6JP15cHusnbwLfn1jBnGYNCncAgSAg5DxLjXcA5Tw3UC4P8fUatFBtDFTyaFHXB68pGf6zxbAnKcQa3a8xrd",
  "key22": "5ZDb9o1SreybnbiXQo92Fai5c7HhPzus2goo4dLi7pJJZwZ6oF22k6J7qxa6GqQHUBaws2hN6MesDsK2A7uvXwyd",
  "key23": "41ddNutUr2vSHvLF9Qhmwygkpi5afz6XiQcUXhvw69deZ9CAQtfztqWvd3ox2nms8EePjKVCFzYSTJW36jU3jdH6",
  "key24": "23BciHfuMoRRfRwKaax8LCXres2zDaYu56z7ng9rHupRveWpLuduUf3tAzb1JcWvwZv2J7YnnhcMJwBHfEZKCMKu",
  "key25": "2RYrfyq7E3EjbB1jbT1s5BbPReZKuTvovGSNjpiuHKmSMVhM55xwFdz16xCD2TG9wGWZtgSgKHSnVX2RH3V7zf6f",
  "key26": "5Bht1rLdhHUsH2dCfWBfcSkGHdqc94uPjj3ARujqK9pqmG68LNaBTurGDs2PRJ7T7bdU78SnNq3KShdypQxpYdW8",
  "key27": "2ouZqi9ih5PMCkAJNjSvesNmJi7ZT54R1jvfGKKT1pEPECDsKDctWTv7YmUphu3z86tCrCH3DeMi4Htrc4M1W29h",
  "key28": "4dQhWA3di6JZaReuiL6JkpibQq2WPqhzZ2ZAM9xVEeq56wW5VbXj6igVuvMicDrb8B8nRAPhq9Wrb9qPdXjmQb9j",
  "key29": "3xngqQnqqc7iQkew3psiSAp6sU58X2rJCGUXoRfhA75ACPxQMT8nk6SfNR3dCR8bydjynMEtK8RNjY9Yz3GVjKoo"
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
