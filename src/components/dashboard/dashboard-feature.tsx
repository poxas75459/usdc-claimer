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
    "5QHJM2VhTURhUpy2mXZLrbzpq5TDGPk3saU9KHhxZMJD9StyeFiR2hFXWFf55J55qESTCoirvUn6YkzpMHm75QC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c268hcs2fcC6TRrKp9FfzVnJ12jFEjZiFnbTspnijMhAVHUvTuUL9yhCBwmrjvcAtAGxbD6zbHRWwWj5f6ct8yk",
  "key1": "4d449X2ENr3jdt8WZmi6peiF71NRde7GZCqBmAVtMDgEuTznftf5AmgeTWLKpshrPJDF6KJThKxrxg67VeSHmJEE",
  "key2": "447gY2JzhzLcSLyCHmbrFDyLhhYh6GwS1xdwoC3UpVaWsVsRnKkrFJ4MXaF1d33cruAwpevR2QTLMVZxV9XREL5u",
  "key3": "2QxYBSiSUDh1GcGSakRz96yr4vDPDs17PDXHssSmu7mFPJGEMUErgJVrUBK3qjquMo4jW9mPH9rqXMBL69T8aPRd",
  "key4": "xS6LwJJWnGiCAn3jaoNrgSR7yYuq9HQWQuXkredxRd5zVFZpVYWFuVNWS1XuAAL34pacMXjnaBnhRvv3CzFVoB7",
  "key5": "4iMvbzNGEyw2QChKZkB1g87JsJFiyYFiQaTi6phHhrUdtAvPghttyV7GuhxneyFjwwjRGZGzmyfH6j3YqUKW3bX9",
  "key6": "3GRCjKdq1QBCFy8NPWwtvFe7shhZwmt46pmQr8BkMBvHMB77NfpMbBGtJpM1KuNF1ExvbbhwM6VjdxDH4ER2GWK9",
  "key7": "2YwZCsrMGFjcyR1pJjzLZKtsvomFnXvW51V65AtxFEtstt9PZdC96mFNGBXe8vvq6ENEX9rSfEV7gSdiCeRQRLhz",
  "key8": "4F9XtbC7sy4xArFwBUCrikYubKbhuXGyqY7yjjRjJenBbTaZAEPQnYgQpkzxjwCbDBxfxyBbxxDjYsEuSJWyiTgB",
  "key9": "D7ZYMKEAA2QM9ZissMGngeUaQHCfNfmyVcGqZZ8WsTj41GzjbEE5cDTHDFobm4ZaqD7wvPExWyTSg89U5ypVYvL",
  "key10": "2GvYyXt5pt6u3nmdbm51KdDJom9gq6V1bNTHkr27dbx3rfyrH1VMV4qoiA7nzfehfGeQW2A7FyNgNXVXBn33H85M",
  "key11": "2WcT38XVtqdX6stERyg9JGKnxPzftr6BYFxhNszfXAFMkJ5VAPdYLnYzaY5YuPg7CTv8G2GcvtRRGLtE5kgLyuuW",
  "key12": "PtXa9CZBGBuFKjJmDwYKJ5DgxrzCZWwBMLSy2HgJJWDYTdj9bcak4M37VB8hFLSBCjbEiobky9VaARw8DVZF7Fa",
  "key13": "64vQmy2CXKZuBrHAZFX8ysJFP3uKDBzHwgL2ew2B2Ytia9cAm7S2FfBDZtc8iT4pVE5sVAdoUiyA3vV51Tk7zo3n",
  "key14": "5j3KC7L2biPA4B43GnsoHreSFGFf8UX3ZwiuwkGWXezdSMFcGTyeg1hy8ikcv97oL3S98vZAz9Jzx2xj3xBx7Gst",
  "key15": "2tPKxuXMXkSfA4ysZ5FVuQBVPShXThPAGKegr1hXH4QJVjDraNvJxQNAGFJaBbzHrnh2P4EHxCCujhTuhsaE3oEk",
  "key16": "5EQGxEuQq2RpHbP9e7D1h9fvQXmyVP71Cw8cFgYtWjMJzxW2oczgnDpQ2Gtwu5MYqZ7YKuTJyxMALqA81QnjamvP",
  "key17": "NPsycdEDYAa8UGQGXSo8icujsdYut29Ux1dxxm64Pnbx3vnuwc7J1EL7x15s2Ut2hFWrGzMqJKbjxvmKT38kGzB",
  "key18": "ofGkgJMuEiNbkb2NhXWJUaFNd9DMf34V6jEQzkMkVRNU5WTEa1MWCBx24SnsVYgFx7i5TMBsf19q2AA3tSCE5aw",
  "key19": "wY2jrsvxLUx2qqzRJ1T26KKK9V3CLU3pbqF7ou7nJVaK3eNoaAeJmcxH1L2PwdkXxHZEAPPGCDSzkSmpvdhgpRX",
  "key20": "3CWJLWVWg3uUXVP2NyJLtjLegE4PJdDBdHMz4vZ7G7mBWXoEmVG3taoamxJ6hBGx8hExkVuXfMWWcM8kwh9jLEJS",
  "key21": "nudDUQtbrKHxCg2RN8p11EcCYzNKFikJh9vLbarwAubagKaXKuMnfYLr6VmgdA7gtPDAnw5ubq3M89Lhp8MqzYc",
  "key22": "4uFmSwhLCkFnsjvcq1S4r5713S91GjBe6SbmZmsqcd7hPdsVovh3uRGs2UccvHchH3HWkAbeuW3sjkjzmTgE6jPa",
  "key23": "4w5PbCuthfveYmZ6XZ62ZncZMfNhfQdHFzfop5veuBK2JhdZB799xby3zNba5ixFTqtRMwtkdhtdVAfKfmCx5fr2",
  "key24": "2PG54jbSGRBjPYCaWnsDdHHETAGTyTFuLduHKZ9puhfj8G2bBdZUoP8UJHPG4g7NPf4HBrLXqn6wyXUBGt36vGy8",
  "key25": "65qE9v6xbwLUSPJTmARvKKa8HhRPomZ6PNpK2Zv1X3f2YNu2YK8G8y9M1Ms2JsmaTiVhB6NKxZq2d3CDrxCPRQNn",
  "key26": "3hvfVwpn1WNXoMpBbk1nVWphPNBVkB4Qv6NWSQZNJRdSWpa4z6ikSkMi1doSaQxEcwQkDNfQf3oqNsJyxyE5G3xV",
  "key27": "2r1212cnCET5PtDmqmxGZH8KxCSfwZ1EsG4tHK1oabAz5WHGABkjn4HSMcTunqN39uK5qSwaoZrQxBSQ4e88vVn9",
  "key28": "4E9gzG5WRZ3hffbeJfPV8BVaQQKRFzgT5WN85okYHb57787DtvVbCYgw34aQDDEZdxnemhW9fhYm2vHhZuqNTeCq",
  "key29": "5gwuz8wy5a7pxKs1T8XR37gxgtP5mv81oowseWBe9G1qyyo2V8q1skSkmkqjbTSpZuK1K3md54CahpDZ6Hg6BFNA",
  "key30": "35TJxY1i7Q3kfX1b4YaEmFx6rPgU7iyqeevRK9w5DbKiFrFp57MZHw646gFP8H5BR1susa58YQBEoKc7LJsqWGzp",
  "key31": "534pofR8HyvRDLQZPxB5yrotVX7xjnqgrDMwmAYZtZ35EStXGRpPhHjS1hjdFPpX7qGFQd4fMm3fVrPvL2JzDPAB",
  "key32": "2sKGSa2QHaUqH7yApYWm6boazEMH1vUpav821kdvkR5X14xJpDXdsYGo1XBu4MRkDo2zy4j2LhoNcW6XNZPUjRLS",
  "key33": "4Gr4WJj9qYWjs7U62DCHxs8oWz56GiaEP4q5LV1DXGJvTKQSQmHC1pap1L2kcgF9uMuAQHczStVLU1ErnQBsiUGG",
  "key34": "4nxaXhsVxrHKN4izKahdXT1cDZSVRZceRwLVwb1HwzFW3NeGXU8rJQGL3AR5cLCymkdxhRn7ubU3vwD7BjYXWQ8n",
  "key35": "4kKBnjyca9rpKUfY7dJbwp85inPXAqurk8SjBjEgZeCuYvoaFWZzy5of4GpeAacfDAoULWu7gZS7b5BtknAebYas",
  "key36": "3ne6JCdTWyvmEqWef2wrt8cwCQ98pyLb1WoUvEhskmbwoUPcqrKM8QmCFdvkwAY2XB5xz8JZzd9Qibgj6Vsz2yKA",
  "key37": "2PZSTrH5FtBvvwNkQYUELTcumebc3boppiBhjycb2n4ASBrsg9k3k9TBiYRjQD4wJwCPAwHA4WZytHiE6sQFsGgH",
  "key38": "24GpqWs8eD1PkAvmqHjFqhbVuJgachdwYAJyPaBS9MijU3v2GbNgJMCHjuRyGhXtY6ouWNhAetbJCRqoBvGU3Xwa",
  "key39": "2Czn4U6ytggpqLCVP3niqZxnnztjKHoUbCiA6iLjkZzJkNzHj777GS3y6viPHo9CtfkpUpttWZuyPHTReSGurwMg"
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
