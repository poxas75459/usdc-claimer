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
    "4SKt5SnYS2wzad9Dcwf9MNb21gnh6NVvkpSfybopgsMG3ecfEr1NHz72RiCMM7qUf9YB8Ji9ow7Wdtf4gGBBe6E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRQRNJWLg7cNgpHvwSKuxEMorMisnff83jaBvosJdGdvSqbP8usN2JfSAuGWu82x7k9MMWJXBUKyBZuUWHLzp6h",
  "key1": "5bKnkzUsFebVF4GE59aRUzSibwS57c8r9V3qgoRfyhQYipoGGZWLKJLQA9VDCAzfTQi3dM2YnCJCg3wHcbJkZbf5",
  "key2": "33NcSURi3Vho1HXDYQzrjuo1jLxksd65BwCPMAk6UB5cD567MacSFUYGgJXwTa7ZxNwG5LhDQoTMM9LgZ3BySM9w",
  "key3": "4NnkvroWytVc6S5KnxuY827XyB67Ut5nNJxE1DQaKLfvXL352Xfu7NRTT5bXaogojBNSiYzHjMk7PkmheYzUndXx",
  "key4": "4fn681j8SvxkJUKAkAg3oVX4eEUbSzJFckqZcU4nMnGMTLUiDLxH6HD5wPV3aymc5eWq5mxQWeADRZuVRpidxUyp",
  "key5": "2pdXphUJR7hPTdGFrQpwarKaGpp3mgqEiAZDsYVWsNUJvaJQ21jGL6hSivRmNRRAyLpS2FAqv7gPoNeGMPF9KRc3",
  "key6": "3Qmod7KHF32Wr1vkzMQKjnTxdASVBSR3ehvShWQPu19FNj5RR3Yd6LUvHZM29nXfJPvqgULTikSsUdpY5eeYMYPq",
  "key7": "xA1UhCXt1HqN7dqfn5TUH3GWNAVMCKsii2iCGsFjiMK9qrcFE2NAgGttgGAnJpKkA1cTBKoBbWuPhX5JKj1TG4b",
  "key8": "44mT2kxp2JemwcdvMRkmwiLKyaRXHjMAVFESopdpqnfADy4EgsWiELjmEdhhKNNnSXsV5e6jL9ncEynTVJvred5f",
  "key9": "466BKNfwELA434yuBwGp7sZeufSgUchpMWXSSJMBcRnCNurNDiNzqLt6rBEzgtn2H7kxT5dqcfUobtyzbMQcB7kk",
  "key10": "4HytTrD2Cn9UWbEdnVnG1yt1gXwXXiAgmhGvGzTr3QZpTjrsWnLreSBMV4mohtJtoiCHX3hR8eFYN4mH3g3LPbKW",
  "key11": "2GL1XNE1zMZXHatqh2S9VHGpRbDGX274HzYmFhvN3cLiZwexFWsNv9YtW9HoDKuyo2PjSvFqNZ92H5mmtrs1WkKd",
  "key12": "49kREbYr8BPf4skMLLYaGnRGeLSFYg2NRiR1DqRoN617qrSQR8KeqUrNyQmaUqu4ugPxM9jCwZnSZifALtqqwT25",
  "key13": "2vPMU97rBPFCHGto15aRYms9BKbdea2LNjWRgMdJ49LbMebtgUXn8zomET3rWwsoFDiwKetxHFTPhtgQeUQQt57R",
  "key14": "2ZfGKmuP8nNwECpiHU2bzVVUzQ393uZCyAV4RE4ghPYjiKTDhpf9Vsh926XtxdJmqboD1a5trj4Rx7iswkETPsXb",
  "key15": "4Dv9aF8GXZYGtBwsXiHYWLxKnkyjgFrp9pedSZHXYpYyXnB1duU5iz6yoV4YuDG6yVY7WJ4HxMZ35pWnBGiHfxom",
  "key16": "yxEHA9wcH23gZGwZCZZTnZADwv16pRecCPGsyaWmezRRFT3aDKsRP74UXBiv6pozwufDhohS1KFY3qHJRBvP8MP",
  "key17": "4GmAt7jFfBx7jG22BK7UYyZd3Bj2TRcm3ja8ahTbw1aWKjmk7s5f7Uw2L5k87FBiKN5PSCuQUDmxpB1Wz9Tbuk4y",
  "key18": "3mEgppsru7DdkGTQLim9qbZAfWdzmm5QvMx4goHP5H9QjbAa1jzYBy6M2hWpoFhDGrQUZGaA6xmbzjHJq5grUSmg",
  "key19": "2wtQ7VAnz4TXnHPuzfeEscgRwXVDnEqYn5tY3xUVFzdS2RXddhiEJnNcymSLAPiq1BxQp4xCrYnob14A4nS39sPR",
  "key20": "3PzMUA1MfJZLQyLGHUAX1VqbS5MBEtFckkiUK4GwaVFrgGxmLbsTN2mfX7FxefJ56n5kpLGBKhy6GTuc3pXqfvP7",
  "key21": "3PCyfeMxK1FaUtVCFz3ZFV2EMC728d8mEAYFhJvs7mQTPCWFfToM2gmRJFwVjg2QScbJNyUAV3gLMFnhXLVJFZFe",
  "key22": "5C4L1tfr7v1s1tip6AycwpLvVtrcEyGUVgohKL5xeF8xh662Q9fpy2okjjRoSqEXtXjaH5x8eofAK9WKZSZutvSw",
  "key23": "5hFaTN23Lx4DaWtXA36TuSvWYxHnobPGzEJa9ri7CeepwLwbxyXK8VyMQymu5eypPUadgW5gnFrN7ofSnUKDMLt6",
  "key24": "4ZuNCfCRgLWJZCeksggmcZ6VvdQ6JaAjPxHBe5dR379kMQ5Q5Ns996hk97kxHraN2aJbWJVBoWPP3JusXkwJvy7p",
  "key25": "3dbPDAT9CKmcg6oRUmRR2K8r8Hq2zapxfjA9JmdThR4fdpFAYfUmdjicSoTRBZ4G3ooaTZ7w52QcCmYmvvoxdT1V",
  "key26": "2VGKGscAqV8CW9ot84RWHNttxXrSCKQasew3UfEW44YsmpTb3EPnnJLbkKH5iairZaE9tcx5zZATNjPUWokU9FNK",
  "key27": "vAeEGzLbrnH3b9bFhFXhCXTH5ELhxN1u43WJLBX4kXFYvWsZhDYVtdHGJTfbpJ862rxdpDGvXA97MLVrdj7NSN9",
  "key28": "5YGZ3CpmJd91UbsfNWmECPueRYB5nwQrAUGjyDFhE23ADKaHjweorTwdVjf47r63VzQjugHDhTMsHZdSYDrPNNFF",
  "key29": "4MYuKQVSqnipKzxKBS2qtTaUH3BQyM51Y5ebZ84Bcm33RTRYSztwWVsqtzvJsamVPpf62oYwJKGtycKTPrKQkAeC",
  "key30": "126Z8TH2cV5DpjFmxXRqoSNSyo79ZH12DPEGr5Sk1T7yCdgdD54uT43g19thSbzmX9oKCdi79jRazNdc4XdsdvU5",
  "key31": "3aV53HeHkGh4zmvYD1oQthxhuBNVD3sS3xGiu1S6JW7XVXrAySKr4LXPRXuy9Xba2MPffe3vmQ1VnwJVjaypnnPU",
  "key32": "2MWi1G2rnBMzX3wU7d255GaZLtEQwgik3Ea4YfTaGgggrZsVxDi2UoJnfx3LY7UMpiRNdpmvPqPrkfd9kF3eXrv5",
  "key33": "44y77SzhuqU1rPrXoZDtxTB2G3Am18JR73L2zv5fefwCmigZ5eXudBH8B5Hv5G8w9V76VsScgnrBx7gfLg8PqHse"
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
