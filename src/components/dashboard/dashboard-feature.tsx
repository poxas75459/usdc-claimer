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
    "2jpLkwgcPJZUKeMYVDqrwssMaGrT1Lw8gch9kDq3yVFVmamZ6VNf8VoBv48fF652ZFKfUVLZpdi7Zc7dMULFdgYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhoKN3MdYegHCt2W52aC7CF3WQ8GNM3qpBm9whjT2LFCTWbA1QDmbAj7ewSSFsWyhgfYPWHn7Rj2Bh5pH88SJ9Q",
  "key1": "2fApEn6d7Zq9MC4omSF6mZ5cB7LTRw5Pja3HaQuSTLoJgtbByVbFBHhDjM4u4bNEfWxneypMeNJcsqqrRhy32aLa",
  "key2": "3jTCKrLYQjRAAHfzKSqbg47XQJnWgr6iaiwyZa53L4V894hMnAh3JiqXJLaa4WG1GLErzSnwzLLvqWNiggW66isX",
  "key3": "3bzRs3W32YSF9jwSTnZbRVuodxqfwcjY76coZKoFYkU3DFaEeVB4vnEtmSAmzb4WWShsjsXkkoJvPxEKDrjo6Yxv",
  "key4": "4tKwUfh9jBKc3jzVV1igjkv8mFJkJ9oPyEm4pnrcvi5YwddPfJapkSmP3Q6uFfs2Q2dzsERn96ezXQxHCk6qBbhv",
  "key5": "5FAu9NCVVh9QbNKLvkDaTVGm1UH3mCwFTe15bth6HCqtXEVPGKhyUYPs51vKFBLyKzsdhMUB9f2SaF1UQgpiAEpF",
  "key6": "4AyA1kHQwJbPXyYcd7ioZ4Wg2MigMCCaocn9x4TV9acqQGnU9cj5rD4MJ4iUHdg9sFRYNr1uwyysV7otAqqoncUg",
  "key7": "575RDEnHTM4uDHaqSdRJrrgU9PtZPrUidpxbXSmZrqGJfp5Th7x9YiTCwVrUKjpFcAm5Rojrh1Yh7cp89VfqPB2b",
  "key8": "5EZGNfaPNqqtycDoneJFPNsYjagjF8NNJSMi7b1MEX2JkpDKkUHq5nDGNLMUohw8yA8675EfqZaaM8toFTyYvnEJ",
  "key9": "3DhMwhHkss4R5yaaVdbVbGDxZKPVYTuHRs525GyCF6RkC16hPU5WgRiXYyF94f7G5PCQ1GTgc3rwCNFVtoVBFWud",
  "key10": "4534yGdvV7rLkchBaGoqABUf9kGMNh1AGtYq4AALVTRKKi19uNJ5HTN1VLVGA4BkRXFvJjN2VoizmcPRYwszYHHS",
  "key11": "294HCxeYHsq86KTE71pE3UXVmFvSq7afQKA7SdgTxhQn8fA6huGcgsGJYC3wDKgGzPs2zMBynFEdycLv8ZsQ2yyV",
  "key12": "53EoVdECVu6MKUNzvRiifs9s3Aoa7c3WJL55kkm7NLZPeAzvmLQjz8eVYsZRTvdhyMDeZxFaDrdDwddFPMpTp3hH",
  "key13": "4SpxocFdDi8EPW5oCjLchw6d1qVcSLxgYc9zDWqMwZ4SRXCrCriXL2X78qBfwsQKhssQkGQ7wWJLkh3ASupUi4Ca",
  "key14": "4gGnvvtybGyhFPHL9YQ1FYXLf5Fh7YTLGVkVKoF36bu8H6Gf52cjGk5x74Heva522jSJkEifTHA9587JPZkp3U5V",
  "key15": "371WK2JwUqyAyF1GDFmcqgsDnQ6UWu1bWiERtbGJdmLQJkJNFBbKY7n4TeQtBNEz9JYRKMx5e4DBvh4HPtEGwAta",
  "key16": "2YCZUj7FXATxcN2g8UV4RiLk5U8XZ8LbkdVuuYkDKrCGKmGXqYoEhWidfMfNqonPDkNdENBRx94eWqaTgVhQJDF",
  "key17": "538iHgCXzSqrNUN3aM99xDxEBnoUvcoF7tURDxv1SbQi1QedDkj3uxgJrHWNoUxNVYr73rkZ7gsWbrKWZ9QPa87n",
  "key18": "3Gb14QsKwCZYEBswwdg5tEQFyUUz7Qwgen3kirZcsipZwXw1LorRV6cYq3VXEAotK8h4d1eZ7o9dGRapK2anMi74",
  "key19": "5g7Tus2LZsDwpYA1ZdEw9qaWnxuhCqg5L75GwEjivDZRXQUHyPrW4KqfnAJMksF7oDSZKxAcRLCGFQKiqwesAA2U",
  "key20": "2zh37mYGyRYD8PjHJte78kqcUTBTGRUVaNPri76La5gHTpnbkV9VPp7aUP7XPM2VtpD2G1bgdEfrDJa5UW6VQSNR",
  "key21": "4VZKRfQCBwFcHZZT5WRrKPoqxEo5Bj5gY3JphjmQCeP2JH2N3NKFbE1rTPYvyp8QCY42whTLUghvLSNtZ2nJiLkz",
  "key22": "5Re2sd3BchrxujzSGgs2yEECeeQ69Fej8pPocsvy5PZbzkWT3JGWDbE382fbuNjZphSR4kH4ugQBbEtsHBuezHSr",
  "key23": "37AKyQwX9SLzQ6L8KtWUv6SyQy2NDWM37oe9fYrVpCvgofrX9D6KZ3hzw5ANQErXAMue2ubcsRJ3XwF78RSS65TQ",
  "key24": "3H3EyERxEi5p2wUSFijeqEMdyymiT9ZqQeXYJgnRLLwWFWswoqwRXMxxJ6dzrafHK7cbcBpvyvtB9JoDNQGfFbCr",
  "key25": "5XrrWi8krLn2VHrjzyfRayE4oQJodWiLF284rALGAUWLn3c3G691JcFbp7qxzQhvktQNijr5FQvZxhabUpJWgEC4",
  "key26": "St46c1vYEkk1jGnP9C9z4aJCbKMLyLN8Qj25SoDYjU3jqXuhFLWBoHztbTSEydXRVRYia6hWexBcnPapacWD81f",
  "key27": "3yNsKcdcoAAhVnRsKaGWiaHjcXxmPGZrtC7VAmNLVDQeNj5cUVieuxKCfe88k8Lwp8fh78Ra9xzb1gavf27WG6Po",
  "key28": "3GmhswjiXZbsP6uzMFggBYMB3riQdn9vZ38EQKEzhKQZpbE68QJuvrksccrjScdf1sbvvfZB47WnbREcEPE4DuUj",
  "key29": "x8ajyVJ9tPx5oXUzPFJb3dgrXspZn3ex2yaD8NzEfp3JpWcmYGHEeXFgZZuV5qbsRfbKdi4LipB6F3iz84YbwZ2",
  "key30": "P6qaLAFk9FvLttWBGkke5sZjMa1RRmemFPxsKAf7C5fj3eiNumePJtHrfwDMbsV1BEmuAiNUfcLorrxTi9yEseH",
  "key31": "MoQX5VLWhrVSPZdqgMfJrCV5M7PqG7sWnQyq7LbyqBU2Q9pE5cYr8qXjRSd6Yb3barTu8ayierR5GLDaxkastB9",
  "key32": "2FCdJVJUJy2CMTUq3y6cJ61sCcfuFWXqPhAYZXjgMtxU1NziRFM5XXAH2fAj6ZcXH4vbhBLxU8wJFc1EzvrvaoTv"
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
