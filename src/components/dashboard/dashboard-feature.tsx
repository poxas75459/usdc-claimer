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
    "2WbwWsU4CuVnZMR7aG7Wt2Bs4LdctMKx8j23U8EpcrTCS6cEZsAJwAXcuyUinV6UumehDdF3pfiV9FzjyDqKiFUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ASBFeJDjsVuNzNr9TMDQEZTtj2KyjWZc87dh9ZSkJgxTgjovpWHgurAW9vZd8dXnbgRrZou9m5kzwRDAEKhk5qg",
  "key1": "5X5ZdZPj5g8xHDLaUkKdSTs5V2sjqiVxQbH473PmNKp7qErjeqS2xbuWvsvFFSfgWySKjpCYokyhzLPAdnPH1EDo",
  "key2": "3ZVWBWP2EfVjYqMNfmFc1PunTrznN65vE8VTzKzZTPNvWQ8W15e9n6DeeL8T2QyHPCdjv84NgUfwZ8S48egL5huR",
  "key3": "2dJ8Fp7Kk3r5dkE6pPuVprvXTi4VfRTdi4tWAbaQ6V2vg35FNtPWTmCwBJbrUxSwD3mUBGU483YcjY6hSVRs7oLV",
  "key4": "5eJutJop7JErtk2dPCaGjY81aN8GjKZFqFvptRWDe6H5145ojFqWfiBCJCVyUJXyntFQgmXHF91RmHMJMHcP5pXe",
  "key5": "7ensRFCcfuJFDsjLeQT7AWV2ctmBQx1PFvAmSMFrTEBnwMYDUNDqo2XWc9ATEuPrT6PssPNM6ZWYzvXnv5J4fdq",
  "key6": "3rtpy6tFhEZpT8PhJ2dgXGNEycNxD9H1u6WdDQP7FQrN5TKNKS4NDK7uhVBBxKNrBjm9Ujgymm4eWYDzRMYpLz54",
  "key7": "3op4YVLEVpdToiMPj8ou8rKMnaFb2Fk2XVXGhwtWZN6abhFVVb4K9kPi4Gmgu5cZSpUr7QXunMPCbxavwHTWszr2",
  "key8": "611Ra7vUQVfXtzyzRawtx2RF8wm8gsQzboEeA1cZHeTRhMdLW1mkHEf9YEHppEmrsnFE4aKMUX2whLxC6a2bYHHm",
  "key9": "63ADaVzCZ5j1xCRVAwTMgGGatrNybuGnDaWiV3m27mSB3c4rwfTjF2JooksY8J577zAAVzqrvMUMtV37wiotGKSa",
  "key10": "Zqde14EhCvdvLuxWCLPuYjurR2DESQRa8UthUTAXsQ8Z3MXaWnVNZDbSFLWmK6bJ98AcFYMKnAD3yuL7a33BSGh",
  "key11": "5Wfjg5MCY5g1M8bKtdb1v1KGzHgb6u9DLRpdgVheCCc9TY4J2BYnTQ5S67fwCeSEWP8gjjkADeA71u6GvvjLxhQ7",
  "key12": "4k9yeCnzANyLgfvCyQhHA37tLR9WMJcPXgwAbjUP5VKRgPsi3cSNm43hTq4EKb7hGRYG6pRuDhoGmXz2NxGPk3HH",
  "key13": "EHigbg7nyxfMyuLUgypHw1Qtp2JU2UMcDRQXtf512Forp6bTYAy6zue7mUMbztceLLaDz9CVUXGZ6miTGFkCyZy",
  "key14": "2tfXencuAy4ExEHLGsEtYzZPKaLCEK3ktC8hq16f2nWd9KJ15NGENAwAZeXitC2r5TzitSPChM5RBhb4Nre8N8df",
  "key15": "3ePHBf1YVDx5DXXfBJLWLv5M18ZtNSPs1Grnh3HWRkfZdy75G36XH8Ror5NGVMSGLyww32fqF74G9APptjZEnSWe",
  "key16": "2vTEL8Z6npLe9sovtW8rG2FZdmY7DDsUH2Lmnf3PZJKF6NhXiRq863YVcdyBtQamixBjgndgu3kU1weEQzupGLpS",
  "key17": "t5uSBJEhzddnfXJHYi8H6S6BmLWWR2WxfRvACrho57j5kAnJ7B2U2FfLVUZVRHYYqJpE7NkmU2TjYMvUUmi1WXS",
  "key18": "zFadEY9kQyGPWkA9zFkDvdKsxfrmQcBMF7cyS75CCK7y3u1AVyJcb8WGKT4V78GkQC8e7CG2oiQgHrBSkxqM6NQ",
  "key19": "6jNcpbZjDL73mQs43Ae5QFPZTNuyvkbUxMsfDtsqCHNr8iuQ2uP5YDkGrMfeLgP3MFWnsK948X8zmDg7PJRRiip",
  "key20": "eEAMWWqGKyhMntBcoJ9P8u3ZgVKrBVW8xixJGjy3td6Y6WUpsUhNfBQU12WWxwiSmHiD4ECWkRZKwpCC5uReAh8",
  "key21": "4FWnnEnndumKHz4QhTBTaAASf7tMRSaDCvTGLbmBTRyPrnPj5wErZ5QG2bGDegaAJz4a6wq3TrxAXEihiu9SaYai",
  "key22": "3rE92y7pAuP9gmXJTr1RLdzwS7WkM2NEZWhwB5kopfe2zKadWh7co28Fpps6SsfEV59JUDAEovMniX1pRGVCCZyc",
  "key23": "2gtJN67KTTdFEtaBJMxuMEpcQVQsdQiHmKquqZ5gWF7s5GakNDXxa6AkjJ3DcUWDByTYcGNpJK2FwEDkGd4A83As",
  "key24": "VYdPj8W7d1BqLxDUaryRsK7a6rLERStMsRvWppBhFsiQsdnfJ1mwUK4FDcw394o1CCXZ5KyngdC4sfW8LyRdHeC",
  "key25": "2h1KVpzrR8v4p1sfYA3HvRktuwJWwhA4gcmXTxWnG8Wz4jMREouD7rZR4HFF5qAkybwKgkdqTXRV9SST8htjh1Ub",
  "key26": "fTCSh7CKAUbjp2aMqWAW9KSHmepojR2fBvH2bcbqoguM1kNhUQLwEBcGYMNJDHiDf8RPssG98iyFLqCokqgkYKs",
  "key27": "4H13zD8NYFXxYpBknaFYqpzmMfF1443bS9U93NtPpfK9ApAMwZr9fHwmqyZy24snzCnM3fMvAEYf3ojN73YpiSay",
  "key28": "2oDozohf6Fhqode4mfQaxRqxwZGz6TQMaaaYxW3qZCJ4vNzdkB7hYCQ2HW61q8phYEPZTSu56J9NitHZ832Sp6M7",
  "key29": "2FKGLWyxGb6LtyfvtxXyA666tW7B6S1DLdCGtbgtUhqRfTbdWUPUMBUVwBLxrKTJxwSyY6o4boFe9zTS3PL8fPL8",
  "key30": "5rkf5gNkodS9hBuvZbo2jBv131wjVNP3W1ch2kHqMvHsRVXUwHufUD4KkYUZnudsmurqLVTBaKcCctygDdjuxdJx",
  "key31": "3XzFZSqgb6wAnDAUr67utGX6fAD1fWnSdMh8eQPRiMSxjj8rvhnTJumo1bs1MdmfyUyM5CzCaHfJzZaoNcafDKP7"
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
