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
    "3oEYZ8b1hW7Y8qg6WHLqJRDT4d5HAkgff8mQtSqXZvDPZ2xCT8wo1MHJr9zvM53wZu1Egrgd1mE9ooRuBwoH4opM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XaypU7RjVfYVjq3nBg9vd4EMxWaR6VfrJtLJKEb21HxfGJ2aBbHxxffUVWAgZezUjVXAtuc1wWQPJWCYcNrBcd4",
  "key1": "5YN33wjBF6pV9B87qMFp8MR1PVAsDzpsJhhxWkEWak3HEk3SRg8aqcxBqhjVQUMB7K3oT3ftLapL6K2YSq9TqUyJ",
  "key2": "1hqN2uw84Qya3d7ycUBb8AMsac6aNpJEGzkpiYAWrDa4SjMCwmNaSBP8xWzgzXi2xwnMUJsqznsGkd4wzWbMiym",
  "key3": "VGDht1FtQnG1nnnXKzCEGZSoFs8yy34Zbqu6SkN8Bc5wCWdtjWt3Dh2EYUu7vWawkJp42TtX55jdCyk4E5B42Ld",
  "key4": "5FntBhEe3oZ1eFa2PFHpjmG8hZGLDKxy3XtKJrn1kWCicGiiJRZH8xEDavceU5oRmcVKMgS3fcak1BQpMDoNCV2s",
  "key5": "4wHw3csVfbvqsxzW1aMm4anhXwcnAPHMwYAbuwtvvYvyvtNGQNA3Xz5V17GNgmQKRHg1FGNzSqNtGD1eHuUjYB6K",
  "key6": "4ZKUcfnpQQYc3EQqdFSg59NdbyQzwjLCy21dpYtKsFiZmYrQ3kEztF6zDbJUdmjdeKR7XmW9c2kcEuhbWSHFcQe7",
  "key7": "3ccMYKUjScGE6qVstULNvdXFaTzRUo5ZBmNVKHPPrTeJUEMpay61AjjsZbArWBAuoUp78DtX7PW5BbQJ64xn6dwc",
  "key8": "5XedKN5QoUkE1mtUEWHgPWmeKp2iqjgu7t95qzCC7rJWg4c9hSVf58RBhiLs6i8e6K2Kqa1aaG1VJtajAJGT6kTu",
  "key9": "YotYQbiw8gLJ3FuePXnXRQrCjcWe44xhA86wSWoX9BTL7BQS9o9mqGF2SYjNezjCdiisYMAb4b3muYU99NNEUNK",
  "key10": "xc3PCG3VvuNq9vSjZZrL1WwqgCJpbSS3QB5U4G1MowNfyZ2s6Zf2hTDoUgaUxj5jGqHLDvcegeFpLsA8FaZKVio",
  "key11": "4vLYEu75pGPHRLQwDtMnVcT1pxWzCMZUwCSrn1wZ33raEgvXYb29NpC2NwSd4XYw16FnssbsfSRHMrZKjGh6hQcv",
  "key12": "5ZNjmmniFDDKwxf5fCTZKu5vbtrv77hDNSJPVDSrH7hPuE1LypgpEHpHizgWhMLMGLTxUrFj3AgNsPmx1TzPZ4z2",
  "key13": "5Y32aAKGXRpcWzLBhCxnBZ4AubSVWbxygQBZWGdxJF16PE4KjzbiAv3hVt4KEgUZ5KbjZ9rLHmwqgsPrpNyE5CDW",
  "key14": "23xY3D1Ndbb8n3HdkYqaRktNjH3JbvN2zZGhiSBtu978y5K7wnDG5kBTHZ6b1L1UTNReexuFgcGuaK1ScMJ3t66w",
  "key15": "49MsvjA1yp4BbnkH7v5kVE7xobR8apSQtf7ea7KoU3Tf2spi3XVXmzgS8o48b6LQC2mMsru5gzTvPjPHJsTFgA1e",
  "key16": "2VmdbPTinDyLhtSywjVdTpzQqCzziiMKpNha5QGzCavcgzaMs6E38pfHkEJgvNNd4kD83tvveWbYX2je1eXuUNQW",
  "key17": "3Nkzz4BJN8HM1AwCdHNsSzxHhFuAcJ3eWuRJC8SbPv5o3cKEXHWQtukDuLVWNv1KkysXAkEAC1SiKgwc598Hf45F",
  "key18": "4V2Fn96HyXe13kaiy3cV213CWjrc73Y2Q86yhzasnfhThuftpD1ExdWUtpR3g4KftKerzvUZKPpziKDCLPWSEahA",
  "key19": "4K3nEBttiL5FaL6U8ES9CH5RwJfvJZWMuYkcrbjUfW31ww8JA8tuQiCNzaArFc1GHJQDMoMpMVwVfUv93V9mSUHM",
  "key20": "4NyGWuupGgdxw5jSk7S1wXBQVWHUG8zbkGnYZuof1TqD7UNtsKdxhU1zw1g6AH7jwWz3iqfYeCLGqXTttPF7ipHR",
  "key21": "26muzCeA9EbgDorE2wxyzBoLx7NifCoUd6y12uUdw3xfYUAnnUXDYYSWjD3wXpVcNft6MBAs6eK7rdsiQHDDzTuA",
  "key22": "2BsfkF8jsrwNUY1KwyNzyDLkfdMoFuj3HdrTfYJZKWacg8dJd3pZ1XEx2nSAoFrof1FfZjY3A7UDfcaaKAzLs3Wq",
  "key23": "3XuMF11Zmx77nz9EkSKxheajuZDnofdNLARxyJ7xfJhRhpV3PL9ci3q8iaRXvS857qCpm9i76gGXMpjaUAaf6u1Z",
  "key24": "45Jif6vqAF3Wx5bAjpi2jMdyepsRuJnofqQ9mEJNzxfHDBCzkQ4vstfnGhCRTCwTwZ85px1VyEVxZDaNT1L6QmbH",
  "key25": "4rT6VrKh3sMGptuzRT4E62cQazsWQZssJFiWnTpwQMEFV3BtmX14Fibc8xUcNK2HWJeDvGcPZCyAiBmeKczcP7jk",
  "key26": "hbmERF2foYcSY5xWoWh2HF58JifuqAdtpjwjRxLtSEyB5u59aYBjeW1fXr8Jm4Q3RfxVoyYtawdd6phAQbKgLLB",
  "key27": "582XcLufnqdAQLyMgM11db2WG52nPedNPBTjFLKQf5Dm2R22LKsUG9TSmmtwi1LXip3MhwE8N9UVYa8qzc1uh3fk",
  "key28": "23NqjFqoiqEfro3VeRh97evm2pwiNrhHb4mRFV8r6qGKAXFxncPRnkiQRrktwYvkD1neHdGcv8uWbB7b3oZR3uW4",
  "key29": "3U4YskLyHjSGKZkps6LmZF7mVAPTg1Ls2jkC7CUM37fhGvVkpCKurfmwYNDuq5PeEbhQ4iN9xj2DhhntXykfY5tV",
  "key30": "64mwXVoS9erJDfK52GRT5dfzr4KyUFJm6srPB63o96pXcMFsvWvNzRsMKvJj8FVNqtkNuq578WfmFWxFrGojcTfN"
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
