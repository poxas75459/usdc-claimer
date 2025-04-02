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
    "3egVE2rSNDgJTSJZgEG7kfV9eyY6fbSDEApAWBJ3xS48kK4bJZMY6SD48TSskYxeyZwBuW9tVfVye72KRZxToqA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUPyybj4EPmW5LH2HYeGCayqANBwFDY8M7dXFC2W14bPTuorJ8Gy4tGVg5NPeKjKKxEH8hC4nVsDqdnT5pvs21A",
  "key1": "2KknkqZ23ZttXU7Kt1HEsDV1Tv9xscGXaGJJKNphv5wzA83ahMmbyGiuF4GmJjoouQuJVg8uiocBmsxSNF6xTs8C",
  "key2": "4dMbXRm8ETJqyGXkRkNffUCxL44wMoV19iBbtwKpgxwHrEcKnSCSC6eb5LRLMgBbciQLpVgAxtc91aosj7vHgBES",
  "key3": "5t58QSMtXYabNLrRCaa2W7rFo1yzLKHjWdSiA4uFGFHCXZqXKBF6crwNCuXSWdieEZx1jpMyor5DmUiyHJAL2qrX",
  "key4": "24VYcfSd8xzUAvYFKwirbxVtyjbYC6k4K72JRXe411DAVYGkrKaozpinApkcW1hU5XDUvek1NyjbTsdkKemWQXKd",
  "key5": "4QDQ2hMw83qwhLeYGDzxXMVw922rqai1VtpdtZyHJejnfwy661pMxhQh53edyhX58vT9PVJH5nJW35SsMLirqUjC",
  "key6": "3mnK61jrfDCZo7mL3Z8US3L6Nhu5Zxom4pmVJPdw68x28cioi64yY4Z9KxsLiNfqkqfvLYVf2YqTZJT1W5ZicerF",
  "key7": "2ruVBVanh9cUeirR76UGvBFEhdDN5WjKnXWLaFvYv2U7SDNM4uHegxHZNKvQE3TnkpoMPsKP3Th1t9WB4o4UqaS3",
  "key8": "2wQkjvBRyn3jAAvrGUqqQFdx1jsBm7qiLqwrpNPZDcUpG8hGJq6VacRYR8EoG78btpFc2PmoLr2h6cYekcwDgjVj",
  "key9": "4DapfYzMcQadqNvmYQV4CFRdqLGW5hwxMGx8y7VzKSxhEoStTf3WkEGjw2BRqckkYC2TAKLdsjHCP1BFuVNSFo5x",
  "key10": "5nB3kkKPwNC2dpAsUfcBpZeJDm1zExbDkGRvdp7izYe1CZZqGTJHrfJ2T2P7ujPK8ZvjhwGcEP154wcnNAmdTN9h",
  "key11": "2PV5SDaXkYCCgVQ3sUcqJNzwK6QR7XHxpBvVELkhHP2jHN1WhPMAWij5kYQZLJ5FQHwDncBytadNdz87LNWcUGgb",
  "key12": "2Q1Hm772u6JzJFXa5nstxZD21ateiHvkD4YMCPyvo82AeKKLp1x8v5NXYQiHywFjmkPvPGCExWP9SZTWKkKTR3by",
  "key13": "5FyAuGXpv6tJVcQQcFc2AyKv94kaE9soqeZm2DY4yQ2cdqNZVFosNwa5swULP8ST3aiA9QFPPX1RX6zGpq3aqTQM",
  "key14": "5z5QCWDJdB1VWye9NUAGqBjxHNWPZDZEFPrrQkrH8SrzwFQv1yWd7MH284iGUrUoj9xNVWUJsENpaFHBGM7kn6Un",
  "key15": "3PwiQtz4d2Pr1mkBX64ej7CQcGx9pC9Bepz4YaPyoPT5wP2RXRGnt3fV3Dc2Lv6gTAK5C3HUKbEsvsHBTYjyvxSr",
  "key16": "36Rcn4aqver1BGK84DhNAnQfw4EMqJnjT4qCypUuicfe4ZTa9Lnk7wdQBuwDJHbymSup67Gwr1ZzVqdCzPRktSNR",
  "key17": "3bYjpDLHizMCfhPrpkVzpj4kgqvfiZAA7S15QTg5fARbJ6jrb19kmq8jLT7uxMLXwjku4u8Mx53DHcVn4Rz691Qt",
  "key18": "2pz7XbzaKAS8SCMxrWTh3csK9ssxtS1hnjQeHGP9s84WHs6MGPcidcx8WjQ8haFkCvUnawin9D4oPhvbkPgZJwXv",
  "key19": "3JTAH5MmgtWc4R8XXGSKsM5MYPBxPXVw9kbpuqqKW9YziZyEYm5Vri9jW5A49btyiHhZhR1Hd3mVKpEcVQM8kkrz",
  "key20": "5Mz5W2qGYH4jzuscQnANxbZtN2XtLoAEQioM8jQYjVNzT7MayMe3dDCqucn2dnRdWj6kzbR1gHjbNHmC8ckdWzv5",
  "key21": "66jDemt9gFqn2ZGmS6dFTa3KUKxef6tcXDYVjf2oDHJfGSELMKMDcxKYjZk9phCgYjCLJhBeZmkwh3VXGHcqJGMh",
  "key22": "2h6LmMoWjSnLFf1eUk6xZWYUMi1y28YtFFBnuwfky2Z1H7HDapMcoS8hU9Km8sZeG9fGmTzs5c6kpoJMDmpUuYej",
  "key23": "54vQpwgmVqUz8b7ufVwxo3Wba3FKzKQp2nhgCRtGdj6PFY8Zsy5dn77MFrcriXtQPqLJTSPzFue1B4M4BvR3ovYY",
  "key24": "4Quo1Eq29o4RK2CMeJX1Xx2MiCqgs1Jf5zsCZYtQtrxKmLfQymjbjghGYRvuraqC5tMbQqdNCAGQ92viSpzt2nit",
  "key25": "4T5a23X53v3ZCHbJFQ2wdfPYSxXExUXVqriNwFGwVHeZRERuUscLJWjcHDvRM4QEFoXkXtCszgdVmikx9hUsz1RC",
  "key26": "4DRr7M2Zct1K7QwQNBTUThyfof4YnEMGvjjkwjAuCLt7MtRNLNo2ATufwySVR1RXtu9NAf5Nm9Hfw5ZFEf1LndYJ",
  "key27": "3N6eHupfBZoUFwdnWhjwsaNBiU4bXgMHYS22HQxRETKtqUS4BB1Vjuzs7ftHCEKbU8ToY37nTzmrapnUjuo6GEvd",
  "key28": "3SnrznhXNNRmFtPZU2r8Cv97VP2YjEUwgp3Ft44W37LGpbu69evauRQKBbTvEC6NfxJ2it3SoH96xJQv2gTw9xZC",
  "key29": "3Bs84Pp6og3mJn8uzVpjhLt69a3DxHC518weoPqHG4BpT7xPm3q4Pe2ykzDKCQgeak3Rd7AhqR7qZR4N39gHzgJL",
  "key30": "2q9uuB8spYsE4ikFBznQnrk7BiBLDFLN6W21BGgHXh4Et71R7EFdJpR8YvJ5fsgmFJFJaeHCCX6eHfCusPz1Fnrj",
  "key31": "3ZwWYEouaDSjsjyENjkXhQt9soz5zjeT4516XdhbjinVdtm9xwoqNuSaHvqfr1vtBdopt3z24wbAb3tADbLEE1sP",
  "key32": "5u2KMcDjVMncqa38pUMzGgSxq35USzYYbxhrXiDYdso1JrXR77fAGs9po5a98mXTafCei32rREV7JC1PDpzNju3u",
  "key33": "35pco3JysGMBWMB53u3FfFcEZQxVy6LTNAGPH3NKiX1GZhgSBCmMGXwg376k4bC8YVha714gy5zbCBFNxHCAqJ4G",
  "key34": "2hc3aVcUnnLdSMgMiG8nyEiMB7gtw4qGxAxhJGsocy11bd3b6nMuum7CY96ZrUbJB3ToguWoX12DdgxKbXSdg6ua",
  "key35": "5HMq2ApLeyETGDJiDUwADyK5wc1qGLFdsvDfo2z9ptsXJM5TYA6YmnGmQeEy7cPHTGkTfvkoWFtCJaLiAaDo5BgB",
  "key36": "2HWQtZGmcHGkpQhgaknWzKsUNStHpUKNXQ6MLzDM85UNAfrvhbue4AyP9azzFHUpwrxYThKgi2hAJYMzHrep6xjw",
  "key37": "4dfPSZdWLYMueyFFtNk5W1NHaUK45HiQck9zo21ojnoaYmJpJwLCj2ff6rAs9tCK2WwrG7zQBVB1GZRAEY8Wj7pR",
  "key38": "pk1myhVqXZdTYeyZt2T2D59otNY5KmtkPqs3HzpR3oX9SMkncreEx5dfmGTAQK2SWJh1f7haPj9aKqQc3twu2Xi"
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
