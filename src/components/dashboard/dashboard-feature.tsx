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
    "3skKSAG7af7vwmFyepL5z2rypdRwhqTvPR5nmcLaxXYe8Lr5W9PvMWLaxYCY6bxsVBwD91X4GvsDubR2Vci3sXQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666A1Bvpm66rK8mCURBDiJcy1PeZk3GnyYVThQKtnFuAJsFCeiPcjUQ2WqQTS12c5mcaT12X7nF3U64DCrvbz6vy",
  "key1": "4YSFdaFunargBvuxvUqwMeUmxnb55FQDe6VaHG1SeHPuMfLbCfSHM278fptxuqrt8B86M6scxz8AdY9VJDZFeqro",
  "key2": "5TAXc9oVgZzzzakVruHZMU2Yk9xuh2Ph5Y2GGyYzAAkFhM3bqfBC5Nz8kGeb9ZmuoKh3ZumKpFkxkRimv7WSFm7C",
  "key3": "jWeFFBGQJuQtw4Y5JRRjA2C4GG9h21bEnErPvVyTHZzEVWXw3UYLc8837mW6ivHSE9ajvfSKLFWhd6HcXSki4Vu",
  "key4": "365ZgKD2NLzDMqEhuPk4VvVVcJRTAez7xbFy6mHdhvGcfP9PmuCBZsMd5J1GLngRqB9jnZnKocgEf6Qbd7i25YRz",
  "key5": "33AfLs5utexCSwRVsAqeGkz7SbmUu1ktey36T88bM2fT17gqed7KUkan8RKYs3swfeds9gi3B82o9fQNZ6sh9EpN",
  "key6": "41RHaVeAc6Qk4DSYjMubPefnVCnmuo3PerudBmngXdRkfwduWkN37D9DgfRLWTXc4WBkg89UVHsAf3mSK7tkDcLt",
  "key7": "3FeUDBHvxeAKpRDkK21eqh6sBKb7gMg53Mf1W21QrPMw5CJnVQYidcGDKKJ9QyhPX5XgCM4hVkWd3ZdMNkmYa93v",
  "key8": "5frfrLfVqSvAR9u98RG1gsV5DDPEuiKP43WRYtY95Pdbet124NSZfiw62vtFtY4YRCUVwJQS6C8aftjsqjCZ9a1A",
  "key9": "4AAa85u2TWfjM7YEHTcKzDomF7Wq9t4VWryMKbnsfRm2vychJVXTaTZwiydsgGWPaMNdy8w6rFaRzMTKmKHjgsEd",
  "key10": "4YKTFyr6BipD2UXpJoLyZtUNz6aRthBBZC2gLAK5Qi3Zp5mr13KmdtYmrL28rX95D2Lzat7Ty5417ruXCignPTjG",
  "key11": "YnM65m8qYMxCsTXryLrZ9kmGMVpWvY6zCfo2dQDHphKeGeh5gEXmsTCTfUNBkf6oNF3zSPSL9T3d7pC9ELYSLas",
  "key12": "4jQD9pwC78kDaafDn3U1XRdfDviXbvmnHxN2keoPaU2bpXep4U12LUAtVEsEuPQhMBzKPBUjL6x7Q2eZWSHFqdV6",
  "key13": "37MD51XpWyDQdAhVhatJN9ipBVi5CSS9oNh71Buw9K9cu8vPHAq29FYtqsji3erYMUHQ1fFSQSRPmeQxGTRk1jXZ",
  "key14": "3JKkPgzGAgJq3dcd3M7ZaSHPdtp4PKUkCcExAArkoADMFyMj5zG7FVqzAokFj3w8ni3pr2Kbb7Q7DGk4JGMmStqc",
  "key15": "3Rcxt3Ue1dUcRuq8yL3DCisKUNZnpTDoJrtvApwRLd1GmV8y47wGPmTuHPdjJZcFNBE1FeXXnGkJ3dnSM4sgxfrL",
  "key16": "4NLxxwTSiFuXudgzNVHVN6LouSyuHBDXchUmFzxF46YZqrVrLv88vscnHYaXHqExHjK9BgQuji2mgf3g5FHHV72r",
  "key17": "4NhVuFDsCTnGjwvxE2iu8igjbYNQAhAz69aAe4p5RCJN4Gs4Pk8Ypra9a1bu84nGJvx8RF99ENm6W3NeZANtPNT2",
  "key18": "nLc3y2yNuVpLprTgaYJ25UCpcEqtbkj6ng6bYXK2375eg4i8Vh523brnnYjW1qg1PvNtRe8j8cdbGhvr5JK8KJB",
  "key19": "5HFL4ke68YYcowJ4NiSnz6f6a8Dt2yiq2fe61iBvocy8uvG7kFD6mpfQDnfmD1uAmyk2zp5pXnk5mnaZo5AZe5xk",
  "key20": "2aW9PqJnqoZ5oyCqEk78bMECScAZQ4B8Rcphhq6K3chvxuSTXRcJwSksxoiNB6V2gcg2zFK3hVdUNMZFcr42F7m4",
  "key21": "2sxrcCv4WURGqKij5qzqAxhG4MPfZyxE5nN3QHnuDm2KPuBH2RuZZ2AVw69QUSUzr1zwRM4KrDrYASCWNR72fsW5",
  "key22": "5b1k3AeY8mGPrb54Pi3epMTcxWCj6oXAcBJaFmQwMFyazT5ZZhRrq8XgiZd7UwmWo73yMkb3VeUSjG5B3Lf3beY9",
  "key23": "4P9UJhzPuTcZmzBsVZohtEKiZAMXGr1znku6UrqiMrefnSA4NjzCCfs8gJTefJavsjbYDJEvnr783WpNLezg67cj",
  "key24": "4abNfy6pGUpERBsVY6PZa3q4FHoksa2StKuzZGLCcqCfhYJRfzLTkKUqdAivuv6gEFQ173LmDQy7VBZf5oEP1fAU",
  "key25": "542wudY1SCvo2XDWrFTW1FmjpqQxSTZJ8ZKCU1xFv4yo8tkvRuhVdnmRDENPXmEMEuNy7tKRGKKe6nuRsa6e1e36",
  "key26": "48QxfvGpktjpQMRHSJHHgHjyfcj7ubRP5tJmh9LurvH8hhHvnaomMbtmpKqXGfCbcZrPF7SAvuTnwu68QYgSZefk",
  "key27": "4fjKCbugmTorw26BGWACu6YX9WtpyHvB5F9vUrGYGRmJMLB6Y4WVDatLWYfm8VvJ51ZeEXwYcDMHz9uVm64eyc5b",
  "key28": "bRsLNapevKLuRXDL2FbrvVjQoVksNqdhnKfkdXRq4hc1DqCqRgsWeP9x1MLesMPQTkXkA6XXoMrrM1Ztshg5FeT",
  "key29": "4TCkGwP7mSXzFPjegLUTc2u3pYR4YSFLLHaBrcns2Q3ft44AsTZejvYJBRbCtARV2SLUWkrcpJe5HMmedJ9Mhuj5",
  "key30": "3SdHLHG41dri7iwjJGX6XDCraJGZeoToGbCSBma95tdFegHJbCVxFVRoGzbgahd2eWa7NKYQUQzawn1zFXj3ywHQ",
  "key31": "3Z5Vrjbaqh69EHwEGndVXyUMAUw1FKMQXGE9if5pZ2cAZoGSPAyiRAdmEMsoBkbACrzC2zhsWXghM2uniGbhBVMU",
  "key32": "2uqiDYEfptZmRKXwafiTjzV5UbqdLwA6RncNtPa1EYj7ipg5hmEwrm1EL6CSbTeGyrTtjymhjzpgPHP6zYrfTY2Z"
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
