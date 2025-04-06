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
    "2kfn1wRdRMvmD9Eabi26T8VzkmsHuiugUMT2HPXYgoKQRZAeKZ5urCXmtGmnA4cdg5Gzs9pcQ68qcQRbmmcpFunF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtmims9ij4tdCzJNmK9m5yAZq797vj3pdGnGsLZRSecx7E6eHi6ig4CBNS5KNjUvUfnsQxPTNB5qBTpKEWXz1G9",
  "key1": "2RVPUEqtXwv3VQKDioC8HQZ4EQSWf1wcaVRnRAEsAuUjDdfSpvKKSk9tQqWpXRGGoBiLXuivaVfk8BhJZQAeLoj4",
  "key2": "3TUxwE7Jy3Nq3Ey15eJDyMuBAfFkAUsYNc4xcUBSo9bwCXkGMAMJHewapamMWHFBiJEwupyySXMRPsb2pPHbQoiw",
  "key3": "i3my9TJi5GYAVFhoS8GUkE7zaiZxiULtm3vL977XGgJiXXV3T2nKcJANw1szZkRPUmcqAyezqcojhqpfi3XmdGL",
  "key4": "3JM9u5fL6j6K2EuevoVfidGFTcLwQ3XoT2zM91pNdgSWidWLJSuEnaehg8NdQwYT13S57NUSvDwVMrmfFrRBEQcy",
  "key5": "5kcjDfLqdS2taF8y7fFRwZRUx4VFH2BxpYKP1eFxMnCf7WoTqHcETGPpExVcEMGEDLraPwqdyAYYC4rorqNG7CMg",
  "key6": "4PV8m7fwPLoKX5NDEqCkigY4fcTjccyNRdMZwbAw9ZvB24DsPZvFThmnAqdLQ2fDwZPUi5pYwvbA2bHrPMEpVry7",
  "key7": "3P87QvcuJVHiAA2yAu9q4fgQkKc4KrczVcbuKYDJmbQsrAxW3XUwYYurYv5KPkTRH3Vby361QyRgurnxMdLR9SDK",
  "key8": "3iMTJR5XXZAwmLC88HCbkX2j7QqiyxUeo67deFMsdSZPFPQdmXCSXy94z6zgeKekasfNcJszXjmAAHBjTqNUWZPT",
  "key9": "2VKiw7AbFJpH76b7AvZwewBWLb2VDbvSekJ4PP7LxLXdA33tkAB1YbRZzjE1Sr7h98Mk4U4egiSswUM6GJLo3RoV",
  "key10": "2c6inLj94uFETPPcomAEW2B7HM3NosAMXQLrUwpVADbsqGUcWg3zRHuvgQd6zFwSNr4ZfN3yUB8zmpytyW85CYAA",
  "key11": "2b4K3aha1vayKwLymbqgkeg2qpnYjAgRm5fVHrdgB4Yb7Yf7wSCiuLshnF1LoaBff84x2ECfhCCqcteWcCpdMP3W",
  "key12": "5KMdtjoQKkaBD25LWtq5jGKx4GSargGpJrq4yj6yTrxSyPt4ixo6UG8dQnnNzvtsEyFruNkcAgNxLqwwD3FSe5vy",
  "key13": "2gWfZxRcvtUaFMuqLRNnRo7UPsDqKL3vsqrszqDcgUuYBYk9VKFRgyKJVfwMDPS5ZaSAFSZ26ByzicNARmE6VLT9",
  "key14": "3YVdCvXbVVx9pY2JbBeJSb5DNYSfxchFQwwEkKJsKbgsTn1S8UjDdvPgMDK5haS8gsmvhGzXAEcAkUyWwo6jXQhm",
  "key15": "28uQN9ZzyKHx79rqSG9pzWsd3oUA1TCviZqCTPN5Fs3pZihjEspChtKYHqJaYZihmwgoX72Z9cv6BvemdQEU8qqZ",
  "key16": "64PPgVoQoVsAat6pri7zdYBWEHJg9HZbT69FEiEgqBZFWaR71ze6UXZHe9yJ1uXvXZWTrjLsbzqMaT1hA4pu6DLx",
  "key17": "2bqh3yfji6TpkBCpKDstyhZ7xNY3HRnhkazGQ4BS7piF6bsRG6aBgG2yvqrMvfpg1DwAPKUu8AsktyyCsvza6Z5j",
  "key18": "5NXkJRT8XtU5XVFTigqnbNuBfwYNnVM3vhubJSkeT5xGRSKtWFiHnxzppDojVTz7WjN8pxGtVg3XTnKnBzNqKBvm",
  "key19": "4y7GswtrxGHTwiYwSXX2PggjtrEb4Q3B226FTXqiPcjtesqUKcshxPh5Xzy3ZNzwEjBSFusCyU2eBq4ymBgZJwJh",
  "key20": "3rBs8nsCPmfKCGo4EuVV3zQeq84xWXPGhcZCrDkF3EnVMwc7FsTmaRAtLqPyEXrSFSXyT8WJikvLjGkMZ3aSRZHi",
  "key21": "2esbaZE5sDUTUikNgh733deR9xYrVhQ2eExhXiSwUSjziHALorY9KAMfYmUBiRUS3ffvQtEVsBReQ1b3gve3QFG7",
  "key22": "4EgujTNTCK2QqvPXiXuMd7ECWcdVs4hWXZNqwXpZpr8cWv4rBTWnDGgAQZNHoR72Hm1Wi2sne2QMHdtWbHFWdC7a",
  "key23": "4Uv7jNYBY5egcx7Kok55hSp6FsNRXx7yuJEwcJ5WDA2CmaTjHeqatCB5bY1Yy2v6pLf7j8KPQciVxF4efLfiT312",
  "key24": "4AW6QKfNb4LEMUBsPm79EMKiHook152LqCh4xUYMhgPcxWMXJ5W9TAWVC8DzM4UyqDDHbAyLsGd44BD6ZEmPshE9",
  "key25": "3t1iTDApapHpAskN3APHp3J5Vtdqiti1v3XVr3dFLS7FQSFKQVU1LQHH2JQfuP8fYC4bwaDkoTGZaWfUjmjjQ2r9",
  "key26": "cgWvp4V5LcWxukQbb1VNeH3ZaTL8gAdHt1Lpb25CpsNnZZRP3NYJZz8jy8u33EbyViUtzX7h8ziH2Yprp39G4Nq"
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
