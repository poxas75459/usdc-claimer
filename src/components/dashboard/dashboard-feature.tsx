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
    "4pwmfoXXqCtsfSuQbGzthdeN8BB9YokuCuRyZWx4bBa6n5F2cWsh88y8AuFYiSwt3pey81uGnjPh9V5fFg4Tzku4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oD3kdutkCwX335E2wh8EBUWKyR5Xz1nJ7k1URsmQDEJHXjQLeRmYnus5UtZPSoRfhHHf6gsMyksNmbT1kB5q4vR",
  "key1": "vErKazLczrhuvjEsMyAukcnSAcGDSX2a7EwULLEHDbDVTBRBfyZdJEXEurvWzeWWbUEjqmu2QmhAbLGjEXCw7sQ",
  "key2": "64jDCpXUknRNFNLkVEqhRPaXX2P4D2MLKvWYMWXWsarexGMKaXZt2V17QfCUdH4PhpCiXoqhXR7wu12w8SxSqwLQ",
  "key3": "YrHz8WYNQ8YuvbsWeW7Rk7wE3SdwJWbhz7YNpuDRjQWxnmFnjACLegfcGsRiBPuxbW8nHJyMvt8NvK5SnPpxGGw",
  "key4": "2nceJrYJHVdxSij2iUwE9zjxyKMWSnGMRhK4JasUFj2Mq16qyepv6mJKv4sCf3Ha9gAqUk6sR6bWvuoxHYVMKGcA",
  "key5": "3V1FXBaXhufDNn5ADTV6FLBoafettFzpdpRc9Nu9pEP1Py5VMHt6nfWxNhTjRe8tmAi7GdrEvsK6jrYKYkTeWppD",
  "key6": "2cppm7xLB7gP75o3KSCt1WJZXtJQEnNPwFqfxFDCKNgJMzUBpApcvfkQ5EjJHmrQdZG7kVb4YG9c96JUbbZT2cGN",
  "key7": "3EqkFcgPAN8SaZ5Vyh1CCXRGvfHtUpCL5CCY9BN5HTi6rhS5YHixoQhjviRMwQvQVvs8amyNJmuAoJcf6cUTjYko",
  "key8": "7CZQGuM1m6xyH9odEziTBWekY1QsEqe9A6JmcVTAodAFo1VB4g1tPdj62nDxDtAoScQbtSiQvvVYRgJxKDx5uBW",
  "key9": "me5EqtS7NpShrvgLE11u9vRVd4ASVk6TpSdiiVK9bFxgVf9gfaPD2WTrHKktmwmaKsotMo2ELmFP1wA4FTahAhc",
  "key10": "caj7Q1t8Mcv2Gz4LRPBtKHvUc2FrdxAi1oxzQXtFt5WSqf83MQZ373CJB2fPJqGt2QihA4nJK75ign2JDJN2hek",
  "key11": "3yVLshVvyj3pR2kzegNcUnjJ4enGwjkrcXv7Y1UHXc28X9jbpYiVF7onAD7qkoL2547p3juXbhZqW1Qwy2AqqPMP",
  "key12": "jn9sCeMtpXGvwMtwaFRptJPHbgE34MFxSJewTvsrFG5mzqa4QwuD2YiYhHxa37FM63Y8wQtRM97Z8A9FvHAcy2K",
  "key13": "4LBdyPact7XWnDQoZgri856HKA3EUkyjkGjWimsaTBr3RKHpKh97g5nzeHRseEpJogC8PcRSQhpWa3baqEEGAAGQ",
  "key14": "2uG4PeUTFeRUYYRWtsWHugbxQYNohSCLHsajUHXsrrRNKg7Q7LmCtFUxMEPUAvxXEX1iHofELgMPqqJPWuL7ExN1",
  "key15": "3eTitXhJeeSjYbsGrvrHj4NSjNYC3mZN4r1opmDt1CButjXXvoFhDpd27T1MWSNRcg9Y2DvyfvA9qrXsTsmhkmxM",
  "key16": "5TvWrFbW3KPMfVyn1DS6vUfHnfx9F67goTAY1kmM8gtenZT9toowB2bvpdWrm3BFaQjrjvb6kncJUcJz38Nzo9ro",
  "key17": "BvSPgKmHTcGCFdYDisvAzq9JctrYmhhzizmcPzaKjHiSHKs4NbmhQmBNFYkKyvxh3rmwdWuBvAS2yyvjZ7SEnxm",
  "key18": "3sjhjEr32LCyYkajJcNPUDibPnW3LHk8WvofNKu5gDMBBngirqRs3LdDrQqy6yVCTDxYxGCVN4sMCeLhpcR8zuBg",
  "key19": "478m1ns9YBzs1JpfpVaKmVh4R2hUbB4pVpFZuJVzxdfDqvCMGj8mCnznwbBSt5VH5CXBG2ursuNQKjwGgag4gNoW",
  "key20": "3c9sk1oBZppX7Csi4JLj7ZwigaCpaUuTnYKjAqPChBz22EAhCNLWXQuuhmQhxEu6yiUwgvRv5ZvG1xpdXGGxqcJz",
  "key21": "3Az9BJ6oCRQfQ74km4u553uHaY4TfKTWPg5XjsYWcg11mCeeVvfnPmE3GuhWgtt9wE63oYrrs48aJr5mAbt3WQ3J",
  "key22": "2vRPVbt6juyXmMjZmNfGxEdfs2Ti2Tgg3oGWN6LP58LWyaE2w7umoiwggyoFCDHqpge4qgch6z5FFZLbh3tw6PHP",
  "key23": "59Bn1eVsDuVpDZkcTaX3ayiHq79WGbK81yKCnsG9Z8hWNRrfeECCdyCsyaGq2sHG9fAhCdzgVyQXmhoAEyT8CkK6",
  "key24": "3CVMRYnPmrKMG61DfYbpwxE6b3HEGDaQfaLds65fPXD5JwdqAtA6JV7crXouXgVbdBR8v29hZLtBQrVe9gAMTeyf",
  "key25": "PwaDN2Btx3nH54wzAyypdBQHfmziEiNDCVGQ7ypTN1mo4KbHSttpbfh2yB7PLRFYedk9SFoNsKUL31wNbRkU9ZH",
  "key26": "X1uaFZ2wjSjQ2WDRWkhSSTMSnUkL1XspqM4K5UuznV8toPRZpvYU8EbfyFhCFQF7GUtfoZqV7pgrznb97igqyRw",
  "key27": "1JB7yiUz7rRZGapjZFnPieTszxUT1fVt6NvoShEJdjkb8yMre7WV6V5qGxfqWvRg9uwd91ehEoW3dYUwBj9iX36",
  "key28": "2XsVJZJFaifQ5vqkqRP7eqrWnfvwKMU36mLM7BH89CtDY7gUykhGjY9ygpy2bzBN3nivwZtQjUcMnzqa3YbYsjtg",
  "key29": "5TfV31tck8GogENcAUzTKAbMMNnJGcSjr6rhN6De3rEdsDRW3cVNX5dgs6UtxoL4B2x2QRNtK2aPbNfLJ4dsUAx7",
  "key30": "3gvupDhK7o52QAZegv8r8sU4zpEiSxNxR2rVRKis8K4NJRDNq6MLNuaDKcVf96AxQGVdpCzhthifeMfx5evixxSX",
  "key31": "7m6s3fTNLB23zDZETkaiqTWvesg5Up3fCSwzzg8UJ1kVvgvyd2Q7qjhPGW3HBmuhV2Qm48981KHLFFrRcLpSEZH",
  "key32": "JuGwzBVoFhHZBmRvQXNFzYbtRnhqqiZJwBywUAutnSa69pC9ZKmw6h1EmZnbhdcmUyCMS4BCRFnMVfmzSsEv2Wg",
  "key33": "5dt6T4bCc5yfGos5sFA8UCgCwJ6kWUyY93ivURwbP5btP91y1Fu4VM7G6Vpy9ksMxh5iids4hip3mbZhM2KzdZgK"
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
