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
    "3WtDv58GzkWSKfRSE5W3ALD7KHDFvX8nC9eEf338DtUG6MrbFFJqL5sPmCCW4wRBX4xseLT5fwV7FcxTBW3EjDN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APeXRsP6z7AQwfwHqcjEzb8tVMSgQnK8FK4DxKyMfVcA6eDcCNuY4UxjVxWZoukEZvaLxiNHs6y8iEUBYvXPt2",
  "key1": "3hiAVD4ke8mwkWeQ3Q89FMnEmiKm4hHqAtBBCCPMnuCqW55zhwmUzZSKQ3sMF8rCVhv7C5kfQ34Ns4gDXSCRnSUf",
  "key2": "5d99c5kPg1xa3WkLHipJJtH4fN3pbacJfQxPwQgidjssD8WzqpBTE3tWSbtaSEWFrybygNtTxpLLmG2LEes6QKvj",
  "key3": "3GT9Eg3tuYaBpxdEMTFShYzzoNiPwPYQkBA3YaUgHBdNsyiPCstcoRKh6fHZ9Fz9qSFCQCfrd29td2e1k91TpDhs",
  "key4": "3S7kD62gTui5agZR9Zs2w533EqNQL7t3Cx3R9bQHE7164MPCvM7M8jDT6uYQEWq6awXrCWv2ueG5ayjLLJXhFsHA",
  "key5": "zo1hLurbNYeUDJ3AGhm4hbmPNsP8J2Fk6Ps3AuDeDGeKV4sbmd3yHYKsCkzuwZvLUmBka7jzNgHap6XCALn41Aj",
  "key6": "3g9SgEthxbNWRSo4qMD7ouyUjkaSKYQy6VS8AJcZ2rREaq8KHL6kuDsFFw2tYZgYbnsdxw8X9HdppcRhFXUVy7jk",
  "key7": "3RnYkcWUcZmEeCG213BYzbP7CzXCxysb37bBn66fn1eC7vzVA9SicFtiEsv1C9xdzh9TgERzekwjJTUtfAhmz9bX",
  "key8": "jGgiSeBSMqHQKjNqjmrXrCuYu9hdVgGtMFpuQwieH9iqwpTuab23dhLFboRHNKdqa7vCcmPfubEDQ2TpevGR24z",
  "key9": "4pYLD8AzU4gJxMbErzzGJqGy3WDQfQfBcDBpFr9rq3YkNrzzeS8pKfmapkAg9mAmEbU6c7Xm7UMMY3JA8EyR6wT4",
  "key10": "56eKMfvo9ZXMCGh1eTm9auuCazzTQGf8GMBHLif545ZfZbhojQwdrSs5yFBoHz9u6yPXtxG5Y7nbHGF9evcBid42",
  "key11": "4qpj995KFiwaKWgpQH2tUmomxDHTqwYevaQmW9F9wce3EsbTPMBczjU3gc4JR1pNXz4oa67hAZ5fLUFfUg11pUpC",
  "key12": "pf3tGwxPbrNyrJf2KxtnkCNRRmzEePzgSz8Axdz5BsygzLVRHVLgMPNWux4JprYA9CVcfMz7zn1mnEG87n4AWpB",
  "key13": "2HLWYGu6SbG5ByrXyh1gmJMqXhj9oE16HHmsi6gYuUtk2q7TRd81TPvDoHdZwSwgHUfW6M4Str34L5LojgJGXryw",
  "key14": "EUXZRgWhxTHR8tW19EoaiWgFAZNpDXr7Mcr1GG7opgCtQrstvW2XZoXr2gHy7amEBCYjSh4M2sKRBSLKB5WhrYa",
  "key15": "5R8DK8iPv5qzGRxk69h78WetvVNXQ6Ub66tJgtD7ZzmXCtyCs1FKDC65m3dC1GiedaMD7E8wTdqxMRv6d5QmtmaT",
  "key16": "r7V4czwDAN3D8C3pRDotm92gwJBzWDJxyoUquC9NyKR4ycLAfpoEDq7RxWEnxz2QDeciwWttGdHUtioKXPgcdBa",
  "key17": "2zruYwtkMNZB86TmGDU8qm1h78dwA9KYADTCknYoyWYqcq88xB61rKa2QnVYauLdnmj8hh9ocEhVtNDBbndX7sT3",
  "key18": "dV22kMMz5YMCdbngn8jWcLaizAkQKu8fndCNj6tbKAuACCP1MPjuH29vQyhgpDid6M5tahwKLJR6pU8yTN16Xr8",
  "key19": "48oyXAUcjRqCTkWmKhsWaSQmhBaKgHRRj6efyE7ej7Mmu1jV7qWshGmbD7XNfaHhtRoxfPACbvCUEZT6ZxMxcmxx",
  "key20": "3DwYwnfYken1S73eeqD6J8UCiX46dp5q8HipPz9bKueTQyPgpQaTPxDXab3WkZnjue3Uvr8hMH5drAyxoNeWhUQP",
  "key21": "ZYybgEFWTDZeah3F51ejKtXTczfLEFT9ecspnSHoBHoD9L169UJ4gVHqMAQXJu4ttL7adqTanK1brTFvxywyiY3",
  "key22": "3kXUYR4ia6C4BdJN8HqhxyjCK3szkXUdCBjkHrME8RTZz9SemPUH9QAQcsaJ1DUfgx2pC28STzHyAAfcbAewaoVp",
  "key23": "5Le7Gz8ExGk6pWLY6XnFeP2VAPAAhB35PsEiUYRdQuS4YiBPoWWdYasr7bF3nT787vXUUjvTaXiTLCjZ2Q3kJsQ7",
  "key24": "3zmUpKzyNRMuCYwzK2uusnzuGW23Rq4ZfKAzjNTEWYYzPfvkH5XwWURsuvrDz3sRGppoZYNbQUj5BGkEqiz2UX9A",
  "key25": "Wp4bHHiKiSCUWAbwhUusJxUU8Kox12x8DJFWj5M7n6c6G7hvfPwtZLBdMpoPNFWETyQJm1xEazpELeegsa1dvZH",
  "key26": "4unvYRcbxp1uBstw6U8UQDVbU6w1SbUTmQag7ZGKLv7KPa4D9PvKd1rXaeQHjdwrdGMy9B3o24yQaiAcnMgubmYp",
  "key27": "3g66KPKoMrQ2EK8hdG166m9dfbGfEuUEWq7Znb39BnEk2XJheYmoyRvmkLDTaCUB4TsKYvSm5Q11DHzqcrPxj7G2",
  "key28": "4hYt7iZ4y3AkJAMZ4Q6fHmj3EYY8wTTLq4bbu6KRdF9vCn9QdQfmoT1gPWJ9qvPEesMzwxFjNqKbb5MzYct7Zeo2",
  "key29": "4B16JHoc5nADVFgkQmgn83DFtyHtUZALMBP4gUhqsVfMSp6ot1t8ytA5q2uTSz4bi4wX3bpQTLRB3LZ72c8FexoN"
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
