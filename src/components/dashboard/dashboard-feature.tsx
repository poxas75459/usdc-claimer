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
    "4udnnAW35KiyiddEnCoZox8r2QAFVzQHfKFTka5tkAbGzErZs4VM4faofcGqTQowZNUfKojbsahb4JfMSHSxTvpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQK2866pSeapPq4q2yRH2zEeuugS2oTq68ep8b1hfXWw5dS2Be9kLSbiDik6YRJNAgjassDvrfhd1Ymu9ZXehJJ",
  "key1": "4nkQgQ2DupRkzE3iKGU5JiJSKJVQfs5sSMoAEVB9fGmFPquVB4zAArJLAFLhdpg8ifphBq9f4UCpqk5ye1qV8oji",
  "key2": "5e9cCa5y454szJvbe7Y1ibRwtYTDukUYVzRykJpD3VzRJhSpCLdskvPkyXRTDYiH3CjwLKmZyWhAgbTVGuGNYMNx",
  "key3": "4kvEjMndsuQSFKsSifvYQp8FDmWX1aH4sxrPSJAH5XGpomU16RXCLGMoJSzmhMdg7AWs823R1unM9wswASvPTjo5",
  "key4": "23LPR56hDtRCKUpUibTeJqrWZoWfrLXbA8SwdyaC2AtFGZfLAYRfqQLJjyTWj69R1pQpmr5bXy3LSrNYaXockPBT",
  "key5": "s1SLauM4X5bLcJDHJcW9Tgud1LspC9osuW84kyxAvJX5tC4LE2TjVDLV2NhbGwEmWpHxZjBmiPAdQrLVc2PVUBJ",
  "key6": "2KpmjBDmguwgqw3aSSPtbVajbwERjpddgvFnqTMMM6cMhT34qbGbaYzrmELxkkE3Wv4d1Nm8fQxLSaDGGNJjcfXy",
  "key7": "4m4M9zNz1QhFPJGL9dSwqasTWHiStZrszM1iWVCXuUVbKuf8erHzvnNC2ndPNFkDFfSY1G696L7PtteJmhrwMfcv",
  "key8": "3eptmi9RKRg7Jk1zsxZJXdAVA79UdkSD4Zbx3rVbnU6wUCH5AbtjjYpTQFra9JFWF7hrSHcXB6TLRY9W8bFrmz5t",
  "key9": "JxubtxSggfeMrFReBcW7QmHDoWohmHmPXBM9MCqg7rbVm6LhhwPyG96phVMR1UHVrKAPj9x32XeRHb7GnyEiFXu",
  "key10": "mWUf4hC2fz7FDpT3Be9izvzhxZz5tMfJ4m9F2ADoP68GBjkCwiD9v5GyjQPGy8whgp9fYy5ngLkS3odFE4MxYQE",
  "key11": "3PjTxjWzJS6tEjmRhGuksTCTsrexye5L5AszxXhG7iA8oL7GuShtFVK9ginbXiTp5zWXAfM9JpoRk46rdqYndZcS",
  "key12": "2dbq6DPsujkSYLCz9sNf6nFetx6fTpn8uxdjdvizR84cK6PSeyLLfmnewdVL1y8arMPBqq5DgzyEkpLdvTecB1Rq",
  "key13": "2snPWRcw5yYqEtCq9hiCfziquL6maFhSsdzx98VAF2n9oe8pas35BaJizQ7ezAPEgMeZNqt7jN2UG59d9UP2rYSx",
  "key14": "51dMd784EbkV4x41Wj79oJD6Xb5djkRm2XBMhwfR4RJSn8vZrJyDNnNYWduzV6Jab8q3JzFYnLRXRv1BwKTtU12f",
  "key15": "4m6w69k6BcLTSA1hyEkWit9wqArYCZCMXvYDdcrpioPcdt7Y9heWASp2r7XVo3C91ES8eJtAs6iwaewiiPc74JL2",
  "key16": "2hjuBD6fdR51D94mCJ4RiUm7iH3BdQMuuatkN7yvbnZjGESRj4kXRpzBVVKkaV62BXZ1ZTxukifTfcTbA6mCUJs8",
  "key17": "3nkn9YhWw6eDAoYrrFsWrBFqwzcohozzoVMWLbsWoUeib5YzueoDVu2sgmWAPSnC7maJfmSbMSrZP1af79Ags2Fk",
  "key18": "zd5pVSXRSDkpYzVw33KtGtNPjcTFsJeKmyZUYkvnURgFwDCuw6rngJhSM9UGQaqB5db8G1LQj64UZLdrK6Tuq5x",
  "key19": "4DafzuXG1WwpQfH8hFzQAvkEf3mRoCTD3idBfzRKCavHKye5r8qRPB9AnfJJHJWsAtha72VQtJ5LrRbf5gzZdqkj",
  "key20": "2W5rycfp1ojNu9B9UV2eR5socv59BPKyGBa6WVQ2QCo155uYZypACKo9bHUANSHJXW8zcDNH6oCWkcNnp62Hhpy7",
  "key21": "2RAmELbBoqmxYdZBxfTYBnDWPdFdstmG4X4v8ABYaYVrpiZ1s1Ja3QDvyFZUzkNfKeEsAhcUq332c9LBkWwezLSo",
  "key22": "j1PBs8vTRgobiwa1LXbpwcJj5jpCmH4Q3bbWDvGQveYm91LXt2qc3etkiWxKQofxH26hx2gFXjW6QCghVR7scjo",
  "key23": "2aS2d4Q3ADCqA2YTKwFNgs3FCwqb4HJwVwUBDwqyKJJakNsopWRs28e6XTy3aTPd3Gt6fKCLo7rP6Rbsqd6pdmc4",
  "key24": "2jAzVMRziCmUsBi7WDAYgJxV6ZphnpNttEkbnBAV4ecRXJepWo1AT7aJoNBPX4us34W4KQaghgV3gGxuqaFT6pSg",
  "key25": "4VYVvWdfjbnaDnEHxSRfBVZefyp8G3gPVRTjnimcoBA5UP1TPpXAG5VWtGPEQK6eikCgLwppAD6nNUpZjG22VJVN",
  "key26": "2qWgZ66KJUVKoNrtdo7mQqpjDPkpJjJDwWxJy9fQYHeRyqM3kmecfCF5s9JhDoNRh4ZmNm1kwUoGd9gTZtaqM44W",
  "key27": "4C1B3EGDpzkz9QsbQmWxqa9DUhB3GSMJvcDFiGAFDFreMV4fFHD4GaAkvsokHqcJisM4CJ4DQ9ekYz6PFuQ4pPya",
  "key28": "2xKSt2rcyGojBuPRBfBNCk1LQx2y52vJ7p1JJuKE8FBy1GztT1EKd6jDpzT6KpkYoDp2a8DMvRBqihsQRaRHoE7r",
  "key29": "3WY8xaQh7fxTPbV8TvCourngQ71o56BTsn1SoAjRhdErKzU4o9QKQVXvNb3PnQjGoFJqdtgFUF4dAfkqCursWn5y",
  "key30": "3bgkHGtBDiY1gAwi6M4HeKgU6cfmTrCPQYKdCetBEwBb2wjmWrPY2VqNtJ9PsdUciWTEXibifZyQdAze6D7oQAmw",
  "key31": "4ffEPJRA8JFEiWyQ6YW5usFWbM94S87VAjJR8c2CzWTqAkBWivMxcFHtDPfQ2HHQQHcYvhFUjG2fZYuKqTb3Jhxi",
  "key32": "1bQ4zrwz7u8HJxsSGbTizuR3Qmq1WUuPpHReRBFKPVnvC4BVy9DxZr1J7SegcjrSkivXcTGkszmbpqLKcCspsre",
  "key33": "2XafnoLo8QRnpqtnGXAbxmY4TniY53rTgjnw2sPeLoX2aLtE1wigwz6NveFXnheLrKW2ixfZiaXBK3CWKpEuRhhm"
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
