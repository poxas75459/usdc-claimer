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
    "2MHSFxRH7P2rwBhG5ScCX9kkeuMeyR4RYHEe52scX2uvTsePzErNHU4Qe2hPpfNR3ksgYmPDx7KuEg5EJHQGpkKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kiaU3DbwdF3Ujo7PC1nLJv9AHEEZnA4VTvJcRFn1ytY8YUnzWm55U4WyTLXHJkP9x3UuLG8s33J4LjKY2NEtof9",
  "key1": "2zJj4ukWkCL1jMhT7YDNJtuZamDbY3EVdwxNRrh1qt4Qf22iPSK1cpuWbv4jRNMFEsKy2JAUYn3X798UWJDgAwUR",
  "key2": "35AdwhBF7jtbXyLy1vWKsG6UhTVnn6ErY2RRMA95KCt91WEwx53w8E8rQBvxLV3dKXGGVLVKx6PFrivPQAfbANvv",
  "key3": "3cWDKTXut5qHEfiozoAcRmK8Z3v7HG8P6z8NDMSnWyKoFMMnZFUorSokt4eBZTEsALSAgrn3gqE4XbWpdHWLMjpP",
  "key4": "5SwcWn3UKNUhCfx2p6Q13uzJFTP4Aijx9yvmtsTXeShvjocWdpE3m4Yt7obNZU4gz8q6WfZWfFJD1fHN4nT9CLRf",
  "key5": "atz35iJrG6K98rTh5oHeXft5FtwACjGW2rsUb7oLgEtZFphMm3ECAb726E3PHVuTWfhvQKYn4s12eQqqVuBzSRC",
  "key6": "3JgW58MiCtkKAzLTGkqsdciEtopbMwo24amji2uhEpakbngJoVVr5o6CibEgC2xF2atekZdz8HirSitqZ3rpvJfd",
  "key7": "2B3TDJDx9vs7LEWa9gUcvMM1SKNdGd52rDZjNmHuBBYRWz613k55CjFiGGoWs11F5PRkKAWK5GgmKq5HDMJdBt5G",
  "key8": "2TfCUSfPaSTpME7ChtzRy3GfSU1JkJTAHhLfdS4rTnjAhTMu6doXrXM4sENd6Cp9JqM2fixf1zonfKa1cCu3yidi",
  "key9": "4F1zRUoU8YEUdetzBJX2yhUyXHDKQuCdteUcyVf5pjuqeJ73bDmi7J7Qv6M2NfG3skqtX7AgKbJHDyag81WgdSeU",
  "key10": "3F9TQmuT4sQZWiSM4piQUmwAL8rW3uVn7TLMZmjHqXkVpVJcUtPDwaA7H1HPx2vCunh6Nrord1F6WZXh2E1u45uE",
  "key11": "5Gs5oCiW9VGESaHCegCeebVtnmZhSkZEkph3rai2Q1yKqLou77WCDdBcSMG1y49nVaMJmYXvnSGT8KwRGQEZaZbn",
  "key12": "5zYnzcuCUJvQDzUUK13QPygqaJGFREtb9a6x8AR75N6zehy8buKXNBhA3Mm9vUD1FUh1JRhSWNXYqm5ZxBJGNwTb",
  "key13": "5D4cKsAK9q8syGLAj8i1Nx8YiX6cZvMwH8JKHrTLC6StsiGwdxaneCFAMWa8Ft4YbhhrXqe3nuykzk7wdGTN7psb",
  "key14": "5jLN6db9dSzwJ9vcnqzoU8SnQ5rEk4TyKY6aDgR8QyiWGLeW4WHnZt9qbvEvanLEMq5Hh3fKAsZkN5PXpDAMrxMT",
  "key15": "39xVMKTmbvA7BepFxk5pLEUDAP6wT33m8o9q8p8H1CpFCCEGfYPyxGAt3xTGwRFsFmvsQAabnKdPe4m4tgja78tw",
  "key16": "4QYuNxQfEfuNVkNHqiKfKDuUW1iQZngqNyyoYSj1tJtspJ76HnY4ySkUHBXmPwhXfsLJRMuK6iCp6ZQ11hZvYyNU",
  "key17": "2Y6GBSkeb214YiEGnigjcHvEoe1CnJGQ6jEp2Uaac8QE7trYyjQNyQRwKjWxf7yddnsdzELVPLXUdeWpT9xcx923",
  "key18": "3FW8xTAWriXmG2f6WqkkMM3qfanD4SnPkR4viBbfbMq6ZkT7UKbiamNgVtUv4RnwWoTGZUQaLDyxbTJvYJsN2VPc",
  "key19": "4iRgLLW2JjUPMxHyV3GSSZYkfrLcVWysjJ2Rb4Ny4EwCxseM29Kt2LP2Gs9ubmMbDfKzCWRjVMz16PyNipLj9Snb",
  "key20": "36M2mMChARpiQyqvuCBALqi75Gb5FZcGCmPXdFMFapLZeVVEm7QF9ZEfuG8FoWRjkVG8REMVjcQkN52y2UQ12s1Q",
  "key21": "2cLpkf8yV9bSHhq8BpDuW2Vvqc1issjG6GgmVTLFT8rpcxdXPcoKN4qW83xdNLYmNkwcEK5sdXY8vSSRWqUpfioW",
  "key22": "4rMBx1Cwsf9SryRguKvLLYa8fUygkMgTcakziBCgJZuWT4DK6LqpYfG3fFQ4Vsu6io9gUkd5wVV4KuymwqVv6pbN",
  "key23": "39R7oxNk7eBegZPqt1dajk2F6nHW8487yZDqZrSydzGeCT737hcHnCR2dRWPN7pSEB6FUQTtpkdUjoVnFh87VuUe",
  "key24": "5CgjFzWtN8jhkTKMxmRBq4FUqYYhLsabTmuMg9PDP9yBhRPSVrK9PsVjVXpMUXZxkw1UCKsQigpYVj4EkAQGXAV6",
  "key25": "2urS7iic9TJZJN5iSQLRJPDanu9JmD22gj8nYg4UMsdCbT68t9QsdYexE9a4TcTRWVo1HktY59LbVeYztRo27WE",
  "key26": "hVPBYmwtGujiaoWqCGbgqmVtGVdd5bRnLpYm5eu2nqEsHGdAs8gcpphPdxMmBHDT5cmHoYsSmLPsC45TBVkhouD",
  "key27": "3EFSokWes5Y9nwN9pgeEUuADHxz1DYbjvdUpxNpmHLJenR2ExkpPUbKTN9RCCEp24uMTf6GKrTbnuo3uwqYDCMM4"
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
