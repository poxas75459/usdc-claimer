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
    "4WL9KLniwykrbt2BpzskuLmsv1c39Byp3V6HP6M5T5mb7mui5fD94F9VdDpBeQmTrFphyGKsLwiRmS4n1QgbqmnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCWs59PiAZDL2dXA55Frv5tMC65cLKRpyqnLANga2zWyPfkke2pix3usUrj4wfDi3WWvXFmbzks4KcEqmkbVCkt",
  "key1": "U7WMzynEo8QUg7B3NWfk78qHCErF8ZDHFUL6Gq3SoeWMN8pFd7Ghh3yfJjGhoYxdGkmcsE7t2UHeBfgLEyqdRat",
  "key2": "8rmFuXui8vJ724RrdJ14QT5Yz93swFceqSbgdpXNn4VGpzfkajsb26tpTypUwVagLKvBXWdLyasej57bg1wc6zL",
  "key3": "RhQixGDB5iLcXYcBQtrarFVTavNCd7WrzJoea8YMwbjiRMMEmqos2WMQcPhXFCfgEzDV54QdMA39BJFLZBkDHHz",
  "key4": "2XoXo11BG2oAPwPnZoHv7FSQWMU7aR5W5WaybrcmcHqfFEib5sNZXnqAXaVu616A1B9F1uMfhqijNQv36BtKU68Y",
  "key5": "5Xf9FTXsVn26QQpfkevNadDfS3MsPqmugvANRYyxzVemRNnX4tFuJsyxNuGb8vctcriXLEPBtFpLQwRBxCgdFqnA",
  "key6": "2kvmjfEfEg7YqoMA1JHNAGAJdB2GFPQRmMToH2eTnwqBMJRiXaS1cSPNb4RT8QkRZziSYwYDpD3szQRvZ9BeFzHU",
  "key7": "T5Yz6iaYN62P8HaPvz5hVEBxMgkCeLbmyyTAZ7agij4gfq5GUg2U67pDCrCWe1NxepMrjr6N41gAEEnz3MzVDnx",
  "key8": "6afa4oCAesiyCFcSo21C4ogdHfj1Xf6L4GEe7j9sLSZNitJhrfgTe2Vk19ETH94BiLD7ryenJqkMDmNAuP8Qngu",
  "key9": "3GyNmC7bWCv1jQDmG3FKArCNUoGFFNtBmM24itNVVbuKptGTFGCDprZXPiNCf4g7fJyA3MmuPEMZPpdKhGf3bctC",
  "key10": "5fmmgp4JWXAQH69RNWubNpreTe9VZFytE1wsYYwYZYP7bQmxqFMGws1pMJWjcm9rB9j5VvZodgKySCC4q6y78VJQ",
  "key11": "3DACwppMqFiaLEhDzeGi2fXx9fdspyHXmMtt6gMW5vnygVZS2r8QpCgxPe7XWVo6tLbRZ2Fjs8uhdqas8ZDV1A9D",
  "key12": "4qJmXph81RYtN5xcHMTLDAvBrZiwZqrVjUTcbwPzGpgsmBUcta9p4rwwiHAUqL2V2TAFQaT2uoUnwqbfRoC1Qmh6",
  "key13": "3fPMG6fvA5jVk1SwwR2nGMBzrzXUku1jYk2dhg2TWYRLCkjnxLxgS23bhZQV752qeKZjHx29RSCif8JJGKHGgqNY",
  "key14": "5zFadttpTz1QZx2TffzZ4Xx9nzkpd3MLfGxW4eYPuUyYLxkrRxqX3jSb6aFB2r5Xa8WP1GVGTL8p1ysjX9NVEMvR",
  "key15": "HTkgzSrX5nAXzA2noHQhor9W9sSkqwQruDUHCQx9bnAK7vivuMatGSzSvwjo1pkWKimbCadAsCKkNyGNNP2bXRY",
  "key16": "3scbDMDcKrpWZhjV2V2aVwKc3TAMmGLLUqNbwDcgRzfsYZHXimv4Cr5ezi6xUyRVyn8MWetbktTqFFS6SrSXpECr",
  "key17": "3wedhnMe6XFXKGCrr19cW7ygdf4TQG2dFQRncMAVUew8HNcCBCeEgR1QeJV7Dp5D54PdRRxjcdgXBYPGN2UMWayf",
  "key18": "aRwPBa9L5ed4TuqSxGvD7EwJf7Ux6nY5PBWxAj53g5hwPWkRECXpfUsb5JzxRS3nfi6pgDRkyYzdyDcXLm6ZWEB",
  "key19": "5xLxpd3GhoCUnNp4yv216rQUrWCKGJbgdR1J1PGGp2pgmoMo9VuuGu4iDdrrCTdBKvZfGoTndXnhbimiMQHJTHH4",
  "key20": "5jYMuaZGFzT9bRmmAfT7UFSZWSY9YXnSi7zHXUs2oEaoGWSspiUk1mh6e2Efa8hKM4UFRPg5K8XLzwckDSo9egn5",
  "key21": "3PJa8GvabqDMNZeFR5k4wLQyLyUzNGDrQuw8G5R6QjMrKcdENEVmjTDBduzHUtqai7K9sYQB3YHb7ZmQmBwtHhs6",
  "key22": "3m5pUHQBFjgFZQFYhuJ4MzqtE9JQ1g8FbZasM2wjX3xa2AZxLGrvB3PuBQfsbe6jZSiAQaz37vg11NVkB5MUW9WZ",
  "key23": "zWK4DBKj9FyWixKWvzLAzBh96k5o12uSePMejkLKHAgAgfugAmGHVzxXjciSVuDvURMmgzhHeFTBMvqMg9pebdF",
  "key24": "2iZ5CQipDgZ5ggZRBZ3PF94ANQAfTa7EpNauVdKkNtHR495gkm5DauZicdRpDgEhL6UP5tomQrRPSdr44NPUVjst",
  "key25": "A89wUCAi1pyosttLP6TxnTf9T5kW8bn2xsKVhN3VGuD3n2vnbouS6rPKoSFqDJnnPSocmRBa7ASuEUtz81Re8a3",
  "key26": "Dw1DtGsQzk98skqQWfSCU44TgRbiLnskstpmzMd49jqNNN9hw5NT1SpJkJvQnTi9ERnVw74EWwHADasi4nL9RdS"
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
