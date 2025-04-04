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
    "SPCB2uUKvMiYMvMSHJd5BJKTw64y9YKDFfZRtLsNcwp5dRgMfH2cRi5zdCWDscW9soS7FCueoNTjLbfVwScbgts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHdPwvberbkxPW8q6KjeM38E7zNwvBxWA9KaPqZVPpCqAewPXHtPoUC1sUwT8opdNETmaWJGuEehhwMQ6snESur",
  "key1": "2MEa9eq7zxXzuvFwhc8PZCrTEn6mPHNCiFH16kghTE9853cunPGy5YWGM5pE6zxNpDNhZYxies1nE5aSzaW6LhUt",
  "key2": "41vpVTpPVQv659L4UwHPgZZVg267hzYQrhTVExkBkeeFXVRhrvHDcj7hVgziBNQtQVDihrdxqNiopYutechcXB2o",
  "key3": "3d2JVEYb5kYJKG6QpiDWhnKewdoDx13b8eHfPWVBmHUqX6VS8nJN3cjQTAuvbXzsBBqG2qebEvLz8c87Rye26abV",
  "key4": "QMF5TF6NrDS7k1EUGJzFWx827rCjbGsSkRAbJTZN2suGJfwK3mvuc3gF4gGtKhfDPmNeyMbAZ5Jyjm1QppkhVw2",
  "key5": "5L1vKpwf5QoA319tTKBD7aYGnRfYzHEpSyTprWKeURCcJGJHRX1XtdvLCTP1oPhRTWLBYV3Em7ivcJ5JGgWxieDV",
  "key6": "6udsuzS6JxZQz1uBHYmYmcy8bwC1gRGMqF3caFpLAg6VqD7fscSytypzUPV9Zey1nPRzzusVt4jbe3BavMcKLa6",
  "key7": "8e8hf6iypE1xWSJqE8vTAV5YZYePCibWtnfrke4VDYTFTxD41AALqjCCMLB4Tcj9MowFK9bvDgPkmqnFcyUqujc",
  "key8": "67UKUiQPkywaxf8xhCdYnGaL3awckP2dJKHhUAE3ioakS74wmBfudRB32TGhLhEfQrdGguXGNP6HtCCFBhdeFiyi",
  "key9": "39TZpvmL6Tuym6TvSpvVyPm4Fk3hh6NBwXfZtgrGbqnrxMXQwotw4E8a5W3hHwAeLYLi3cqB9oQasqWQG6SKRC9f",
  "key10": "4HgxxQ2sriLnAubZCeodKF9TV5xcX8wARgiz55Hh5jSwEFUyMhrNpswre1asNuVvcWBbZD66tyVRAD51rAtZqQh1",
  "key11": "q7qQgBGtKp4DP2J6TJbnbPSEbunxcgsZ7Gn7fuDAD8fdavzAx7pXbyp6NFfxeysnYDGmjz1hNGPKVgBKR3KnAe1",
  "key12": "2gyaQkCu3PfskBt3p6g4FZckQ4gCVFrLZi6YBJt4D4NzijQey54uXgcQcpVwjeuhpvCz1dDVBuMperpjR9ybgFJj",
  "key13": "56aWgKRrA6h2G9gNeiJahBYegKaUw1BgRPdpM9E844NRMhYekMBru3Jd96JrAzkUVEdQMhyCRC1MsxnMWTC6NJ9C",
  "key14": "3XvN5dxySDxJhm2bPhp7xMSrMhVgaFojPxifZktcHgcTdmwSJCetZoZHvteZY53QXRycxBiu1GNDQ7FaeiN4J1mx",
  "key15": "4fBXJchUro2XDJ4d7TE6TCogi2p5pmsczFHqBenW2qm8ZK3Mk74KcgyQ8XAzPzEjFSUuhxszYDv4xCabt98Gv33j",
  "key16": "3sjmwHyzGEciFw2egHxZKHhrUbw7Y4N1qhEp2Kifz71hPibCDrwNLSTouNXBHAvQmS9HhMUmrHxfGdxXbLJgapmm",
  "key17": "35TyndLLHkuQAubEHbSpu9NW2TzsNgRBrK1ysVZGchq5FGsZi2mhvt9D3hhMdtXEcbF3qG9wLBn5brFpzD6moUMv",
  "key18": "3RvVaHwftnXGhRyPzuyrsGYLS2J3NFLSzoUmA72pHFZbRTuYGc492LVvNbkmwcSLqHn1pTM9Yp7gpC7r559Qnjba",
  "key19": "4iq7ajdVXkrgUpzWdL83AQiaP2BQNdE1Z7Tc82TK6tqKkF3qGK9P4W4CvYWqRoBcfS5vhNQV7tBjFi2CtqWkfngP",
  "key20": "46wXCkGqN2bA39Gj7qcSFN2GdPnAbPz4EA49sWiyFqCZCVcFyjEP8r6bRRUCg4wxxXnvE6wsFY78yVqiNhMtH1cN",
  "key21": "4fBdS8xSCMs114NCgFZc33bQ6AYL7TkYYJ6xqFGRbYG5S5YKcwkQMM1AFJ2Vc6yhF7u7PnzBpDFNzK1dWgeA2ScV",
  "key22": "45BvsokbCxVqrGaUg4RLAUJszwPnVE8NgbxQDwhozM8Phkmjp6ep4QzKevna96FmYVxegK2T7C8AjveGcnUqnrZV",
  "key23": "3MveTfKKJtDRL5k2qU6ymS8otYZT7xmxf6kgBMYVbUySthMbK9JnN2cP9xRh2b9PzLE8cAVcGLVSdQpV6ZdvP8vu",
  "key24": "54jPng6SRJdT4NXmMw1MtYv4iVCcEjSLUbHgKzENQarezAWJNmYh5bkRDww1TqGxKKhw4D9uLwEqJ9s1NdA2i7R8",
  "key25": "5BW6DLED1jqcJpPuBnTzuuu9RPcxR3CL5k7rdUb8k8uWQaTLmsmu977AGsvhfHuChpZj6rHm2Zs7oydhxaJuPTdf",
  "key26": "2zDK8ZFNavGDv21NxQ3mtCvScWxwDC5eahDeoEKnZXaLeJ1KeD4LZBom5nSorbuD8wFfALokvVCRKetXR4BLdV7z",
  "key27": "3oPDoBDX8sreuMoPbVmaTBFqPrzX1YEcbdaTjxeg5h9mcMCCGQrNvkJHDQGqEtHkSTrTf15c5Q8zMfagcE6VXvnt",
  "key28": "47HUmzJfitcEPhsoWZYhrXJB7rJ8vRqi5jxxEpdrEFj1aAa68aVtzgY6DVjL9E8Y5qYMXQfAos2o2hPrxU21L3PN"
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
