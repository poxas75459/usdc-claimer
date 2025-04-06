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
    "5e6yrs7NhoCnVLcezH6Cut9CYBrEMAJRrLqB6384QLzhCjUiPHhJE2KXod7bLCm1UdF9CYbHhPeq1E4rXsurziqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542Ra5Ss6xcxptVgdSvFFf2ydPYhS1dqxCrpdYmuVzc97c1Dbn5evegBfaPnToiJHBZ4aQ1NFwgaq521vnjpsYNR",
  "key1": "57Ce2VxJQLE6qBqTL2pWzPHBbgPgiUrSVrhjP8WKkKWjijM6F2QBS7TUChV4dBtRXPYhjSJKxXvjB8bzpUKq7noK",
  "key2": "3RADhTrtSL3MNk44eFHPCsES8nhozrBa5ZvadHnku3hconTXercWFoCgmhLD6KA1V2LyJx1to6daA7rAbn4b44ux",
  "key3": "4535njgWwerSYAwMBnjjq4VXJWRMtEEAspUDpcsrNqxpfENYXymE959yeKf11cQURPCnZKEm6B7NK78HAGUTswt7",
  "key4": "2ttwxJDPh1Jjo9bihEPTopwZ4tBNtgjhDyAQEQaRPYwf9vMmR9oqVF8gwNhZVV5rcRiBWXcWqJJQ2GbT8AN8aekk",
  "key5": "4NnAsJqpFQJMTr9gyvnpU24yg6RCdbhc6tZjX8BJWd2QTy4NpgzfiNY5qPKuYXJWsKJDCmcwo3cT5SzeRzxdpG8k",
  "key6": "5jUjmK4srzyjmYPg9yojjVfSJcVX31hYVoyQrQgQaPutZJYUbJfucMzQD7Jrtifbi9EJmXTALCk3X7CQfB4VnSd8",
  "key7": "ovx4Vns7m6KJ4tdj61rBn4UdW1aUcZMhaFAbMENaW3ojpu6ESWWi93LG7Zp2NEm8MCnQFTPMxCDTuTSczP8MxGi",
  "key8": "2Ldfo1kD35mfRb1JwCA8BLGYQcy2mGzyhijUbSRijyGJztduHfo21d4C1QBZ5xVhBm15dZo4Ztmvj9EoVpBNeT2N",
  "key9": "35pj3mUrZvGxgxnh6pTmXCxsBaCeTKNzvZSJ9RWF34RmRtHD5Gtfk4bhu8W9hWFAPMadAx7R6xxCNQuCg6z5Ve6x",
  "key10": "Dh8CFHEJfYHqWot7HNBGDu6mjN8x7xnq419guGwHNXjnncbgKnget3sbra7suciQqwwtKp38AJ14k4bccL7J9i4",
  "key11": "4rChxKd4WFnTx5yNpTR6QdL8UD4swDEVUFZdsGHi6eTFcbcDHVXorf25fuitnGcdX8PmfaWcaCkwc3BtXZzzWLXW",
  "key12": "3Vwc7CPSZ6Qm7V3FXgmChzu66tnELXBvw6pSiHaA6ccu4NdvfLAF8wyMqQWsCHQMn4DYt1gs4TvgCvpKeX6Wvvei",
  "key13": "3frjw118aCtPuc1D6MJfMuet34Cg43KFVSLA2jMU4bfUCPd6PqRK4nu7LXKSfX7fUyURjcdjb5wCsMTcn76GnhGX",
  "key14": "3Q3t6EJ6V7fA8NvAcCdQJHpCfnaQiR8oPUybo6EJEw1NsPZdwBTVA11Yn68js85W9hWDxTACWTXLxa1WBPsNw9t4",
  "key15": "3FgrSpwmrAZJNCHg9ErUBeuMBD7uXTCKa4Zx2VBDBHofj7uY4orYUj1JHwEwE5tEEF8PJV9gUM2Ytpx49rahEXAV",
  "key16": "2aKdA65Hb6X2ShtKK78SfC6d3PMdgvfrdx6L4aYMtYAXLfBNVWaPy6sMajx3kZucvmEJ8JXePfpEebHRTPcRHjHf",
  "key17": "Tw97kfPVTwbDDy1FcMmM98vLorcCmcBMTX5Ct8PWg2oY64H5itGxBXCfcHZRVnbJXJvLQtmraiZa1GbAchcrQtJ",
  "key18": "unhY52e1ZwP8q154MgjTsK5Yi2KrjEG2nqf7sckQAi7cpAgiq5Bv3HMted1NChHbmHBCNQbHxSMngHGA9a9J5fX",
  "key19": "2ZRSnCGqnJkrRCkAEtUAChDTJDEeH6fU8n3zV2M3hzGRKg33KKggkXsK9VDUDXmkFrSeBEGe11wTW29TFRnTjHX5",
  "key20": "YyUvEpPpwP2B3hjzAXRBHZoifXVr6kXFVoidEsfyHQLw8EwB6EnVPZk8LGpEy4AjAK3AAz49FiMJZtvBhvJR9im",
  "key21": "3A6dQcmpgC7wzS3UF68YjSg3YhEb9Xf87M8aHuLhKoW3UMd5wvYQ3umxTAtopHApYCbwGpxAC5Y385NHxzW8MFMZ",
  "key22": "3MDVSnDLtcjVwVeL7D7j6wGYoCU5CZVR5A7vVCukoHPG325urNaQxcU9UYykpNzLdJRs2FUmDr7g8ghNEBpwyjLw",
  "key23": "5FoRtFJT4mZop7b6LNtVjwtmMQj1Hc1kkp8up8ThADX8LANUKmBmL3S6KtXfXLjPP7rqTpsmLCEDbTocCovb9Q1L",
  "key24": "2rfTEwhoCXqqJWA4GSRF11P6SzzKUvTQvnAhAxJgJAcygmrhyhJvp2szW5fa77dvqjhKj3vokeZmP99ae8USAkAm",
  "key25": "2ZEjXkVQjs7S9kdCEDM1YFj1yn3tFTz9Wy9NZR3CHzwATjajfJwqN58w7bGDvsPiqBckS5MJPvwbzRNGcpM1qgGH"
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
