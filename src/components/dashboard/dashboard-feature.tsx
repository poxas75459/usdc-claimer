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
    "4BaCc3HEJF73pfi2ipAvT5ad24JwF9oxycgAgR3D43DvpR9tVRy7fUYy4PDU9YAqGu9KdWRTG7n7oVCy5pe9bt4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBHfHsNfZqC63wdjFk6QuymQnN7y4ZAyb7wiBmiJkrfJrtYm7UBNXGtCdcUW5Z2E13bzLLJp8ftrBMatCUR7Y7A",
  "key1": "4GhmTtcAF3GAmCKfPfsuskiyxZiZucCxALGPf54gdpfNCEH9mBjgZ8GQBNMUWpdqRZcN8PBA22BCu7h6ThoaJPGR",
  "key2": "kCv87zr1smc9Qe247VRgZzYKh35cYYQgY7iK8jMiJ8VB1XS3y9iyFD3Y53WYZ7QdPmkzidmg5JtoLsCXvVWU43M",
  "key3": "374Qp4LYxDfeQ9AwgJwUGFAGoetQbPH3tYzGv5Mx1n3YqsdGZV2GM2AxjLCEdDhZSXVV3H8NZbdvugm1rBnEnmVR",
  "key4": "4epVRL2h3Jkso6BmDRQwTw5pG2TW9v7Kpo2aXEsYJJpqYeNimoHUieBWby9AgN2yHcV3SkyNdEimguKsVyiimB8c",
  "key5": "2YXmaossXWqja25tGRJn9UA6MbaNvmyXnkjjtvXhypdQkgkrM3WE3jfv8Px5wbUrAyzBDMN4yDU6ZjWy9Y8mftCb",
  "key6": "5kpEqNyQPW5p6MSS2f9P5445W4NrxiHQMffL3DFoATR7kBntHgnaWCKTLSo4b9dqAwaXWrfgrv8DYi9rtq5NqfHT",
  "key7": "5wMqCRrnQKzFScXLPARksZAAQHhujYN826fUebXDVRMckJM2cbHy7RihYmu3LmLYw8HeLb5xiaFZ6ayY7qHU5M5b",
  "key8": "3PLgjUtFTWPW1Hej8atsj7yeVu15bfpW2H5dL4kXpHqu2gKKdGkgpMkSTSmpDhMShg2M8mkysEKFAnGEzccLpJjh",
  "key9": "3KsXYUAQu6tBXiE1z2LTFXNLR1c7yrSXzkXJDEK6gaZ4zbCVRPp2AL6H3BaoXWUu5dNTnnKzv1ocMY7Rrx7L1FNs",
  "key10": "5WnEJc5C8NfS3ASa8sik485xs4xmhoE8j7NcqwLtTogSDnHv62mkK2BVYTpfKEtVtvZoSHSdkSEUEzv354A9RafC",
  "key11": "4FZ2t6W8w4v81yWCG4TPjUTvV94PVzVyWEzDdo14fHf9eua9H4WAof5NFTC1XtgnuebY3SniWJ6ueMTp64ABQBeQ",
  "key12": "4Tyx8Rx1jsfBXyTTUZTkrtWLEyVLmHWfbcoN6s15xnVs4KrgqK7esJSKdgVnr9BysvgnvBr7FmgHs1LQsQdaawxt",
  "key13": "4rxS9HPEiWvLeuM4QRHwj55LHe6w7ah3DqsZUz57xU3FFYRPVpStWuuvPXDtEmhuJAtPNubrkfsiqSfCdqYL6BwJ",
  "key14": "X5LW82kUptbmtXdrsYMbxBqxQ1ffpA24hhcPCda1ra35Lsp2ykTXbzv2CxuZemKGBvavcicZvNgV3vbtYXv4KXg",
  "key15": "BDztYrU4hjWXA3g2dVQ1S822Ro4ZjZ6bWLF2uNHSRMtVcU9wc1vHnjGjMJWod6zC6tABXsK8Ztgr32D8FqmQ2ZE",
  "key16": "329yViyRQBJeBGz77YrSG4wiQ6nAE69GZ7mQkVzsvTutHwTpvtQjzCqMFsNJmwLRgJMHvSxSMQpc1dXsPbmBApvZ",
  "key17": "2BnQ6bivzKaKsXU9g1j5EpaGCvBJdBJFrMxwP5ZtL5XjMfLKYHpNoELFEDUqVg2R82GEmihSiZsUY87rskQBp3cx",
  "key18": "QoQvmUNr5gYEPdzC3j4v7EV2n4hDxz5HRFq64Tm2r9SMdpbbepL7FuboLNUohJNY89dc31DPGsq3DLdXy1SYTE7",
  "key19": "5hNhtxGN1nZmqvbeBxZEPKYg3DJx5ZUupAgxQhN1MmmvosybKvCCD46cEgatpnSWC2SnKBQzC6X8guwHANd5RQTw",
  "key20": "3qm6KfYyqb9GQT6efW4THxxKBcV7tYj4MeCxiH9BTke1c7BKCQzrDwnHjbfnnkKgLVaQYnWG3BX3UxUZBbss23Be",
  "key21": "2GZjY4juoXvBmrTSSt4QNPh3xXM5Ec2y1ifGytcNAafmrDEA7oCrXof4Lqp68sL4GC6vdsnXXtsMzqbVUG9UzkMn",
  "key22": "3x5hJYJbSYi6RAWGzJNLBJFEh59jg3vQH2xweMu6ifyD8AvWxjBaSVDpGpmbpQ1MyaNPBzqkBfnF9K2rHPyipuyV",
  "key23": "4rz9yW8UmrZfpTj6MsgASTByQQHxCuEmekwxPgxfEJ8YjAtQ3MpYk9h2Eda1ejxmgb76NNbp13J6skwixPgMqkfu",
  "key24": "2TqyWKwJu8igKNaphRxARbfraS8sWUpFcwjiMCt9nAy4U57PkcMg5G2UFS8pzfqT4TdN4sNrd8o3g3SQ4TaiCq8L",
  "key25": "61PqBjkXyava2FNU75yJksLtsEpcBRdYzjRc8D2emf5Qe7n9d6UxAk21Ajoz78v1Hvtn3w6exSFT71n81QMK9BCT",
  "key26": "5Kw622qPM9EkccHwo1tsoLJ5D9QYgGs8N7frti9MJEoK7FcZ4fGwTfcD52FeFUm8TgqAcNtNfPYmRwLeiBEHWFd7",
  "key27": "4qxJm6jhSsB5HqbFw56NttAr8oTZydvZuDRBDUeHAwHgZuT7su7pb2nLWZgePxzAceoozihH9S1WEfMr4TXJnMp8",
  "key28": "5xGbY94r5bB7cmB3i1D1kot3Rs2BUwbEH57rfZUhXBsN79aZ27Kxi52iZcHj92YQLHYaj5sQhUHKrHpciBbB347f",
  "key29": "FHs6tu1q6Lubnnv3qju1T3JLSihDsb6ZYnvNJWGBPK5bSzAyDhd89VrRH4kd7NHjCVSZnQ3Z5LyQFiAWNhgCQLH",
  "key30": "4QELTZ7MwhgafmBwg31v5176jPx2iXVUKYgxPXtK47Hy5ZeTFvy9RcYUSnuJKSbVmDJFfJYh9H1HKYzonLL7jxT7",
  "key31": "4HFo4KWanzkqUSffTWwHzJ8bakKu7BR9E7UurHTbjBtWr4j1SA2P3zai3NVo6u1u6vo3ir1NPwZe4hdX6SN1KGbL",
  "key32": "VZH3i6sEpzXprdfMQNfHNue6RVS8sboN8UXhM8d1ypNx5e1e6ymq5VzaLRZhNGMgS49RNUJsfa15F4bSXzb3TCd"
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
