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
    "5AvLVwYb7BWtunWkpLuGL9NnG3WmUDkp4kmqwaiKd1d86XtNdo5jwHkoWAkBBmQBL9kcZGWcRxEpMGjT4A4MJowK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xq8ikhuax3QSQjGEaU4GpENbVg4ANAgcL6vSAi8FXRbt4uyJKNBwULcpMNwz9zqkp1jhrkEPQFr3a7syCbWSjMZ",
  "key1": "2vq3NB88MUwo7Yj1R2Bu28FWFVbqkPbSCysjuft3dmi9mvmYGiPr9kLnyHxUFFxsCDPV6LcapyJQU9xXPmAbA6qs",
  "key2": "5W9Zk4jTZEbZLQ1RUpXp2YAbMhF6JBvXUwcEyaHmuJbVf7JEMMtDkCKqdKC3KYLScAzKUiHrTLCBwzcYVXwyToE9",
  "key3": "2oJSmzeWmjvmjFcb8svNDQg8WQEquAnqjj5QNj4XXFLvjsNt1X9cfY2NZGk3RsarCW6QN3DP3TBDot3TJu3ThNpR",
  "key4": "4Zu7AaPH8h9YV2MaHzc84oUSQjdo6WgKAR8j8xUVWrpWrGVKtReBPT7iGG6NLptJxV8p1kXcLebaWzArCuoXskRN",
  "key5": "9SQ7rhyB1RVALN68629ujgzbHvGHY7N1xEyS6By2ckjXwtxCnmv3JqVsM86Kh6quS8udPQ78qq2QhREiDXZHiKb",
  "key6": "1chDoVTFYQVAcRnxsbEqRdfbCiJgmvznK1drNVHLLS3ATrWvwGVo1XFN36W2nc7yTAF3Ncd5kQxT3E8TvVz7ytU",
  "key7": "4tuWF8S9dvxBT4V1X5p4XhuSyTDtqKzzokotyoQSfJuoC9imrHQCpnuGVCd4H6thrg9xaqiFKBnMYvtPw8yuj3rP",
  "key8": "2HukHAF4v8MBvPg3AApPShUyi3PLmoW35EgQCPZmpPEtPTobuv6TNtb8FHkqT3TDRtF554b6FGwTjXrc77pXHxx2",
  "key9": "4wGkYvBu8NYH1wkyxDZG3bASVw7ShRJMRNL1Xr8maNHGzyGQBCggBi3LWJdmx5cbb1PuhjumHiUs8q36fpiYDnFQ",
  "key10": "3yUNtPH4HbGQ88V7EsyPUo16d1pKi1fwzuEyQX3diPLpmijH9E4LBYLSJtKC9ewRb7dh6r9r2Aq9KZeQALLtq6mS",
  "key11": "5Xmv9e5E54EtqdF21Qd6QY1cF38Hg1zqmjtSpij8BJSpVhSCXSHWFPNcN9BDNxjB3SDwoMc3SoV46LtXAej1JrTo",
  "key12": "4zaDndGN7EELSJkgeDToSmQ7WVHEiXmsJrarBF3TbmD71JM93MibGL15GTmcvaRasHQGXKLQeKEVRrvbMxHfGnQu",
  "key13": "4V3P7vA9UTyNtne8ymnPABUJroU1jF61GQDUzGgY3YsXmBaLhJvzxN7pCaaNDZsXcUKA1zYjBi1HDh7EBBceZ3xr",
  "key14": "uEk15yGxD7gMAXr2mKaRm9dYQQxJUaRyNfDe75RRqUi8gY39ekQyED9PRyJyYd2QvSLgyvCsfzXRYr88MryA54U",
  "key15": "3FjvskukMr5FEp7CsFfzCYupjNzNZEKqiefSxCWuSyNypFND9F21fXwzbtgDsijFVPkLEYMcBa8SRCfoTE9uCVUA",
  "key16": "GYV8TsJKMDeft8wVCxFLUz77SfkUf4VAW4Xp6TqXZ9NFkHw5qkXZoGDC2pWKdpMPWQ18Ukr4Th6xo64CunFnWNa",
  "key17": "4DAhFaFWfm7W171SMdb66ZmdbXAdLwjgRS2aqR5RN7JeRqMeYd6dGBPQnq7UnX9YnG6pnkuQbJQuvpqKDN4HdVNg",
  "key18": "2nLJGvqp1jUNJtUCeXUFEdWJS9wed9JtxpxBH7asHPscrvExLbV83FQ7V93uyqFXDYYJetF1L4XEBsBnUs1LPWX9",
  "key19": "5PmyEEQ3TbcBbj7DY1Qj5RgJeDJA9pZD4DsXynvS52ps9q8wahnQoPzic4zE4eaFwDktfB4YgFhXWFMXiUPDCSp5",
  "key20": "2F4kXeFqsHmRAvJAMTzxKSer1aYDjLs8u8dBwHMXFmgLfw5RDyNi8i9xh9tM89gu3EKX2RBmbVdFCCStC9zfsetZ",
  "key21": "37tgQ2P2PVu37gg3MqNmzrokDcXTF8UbpMQFDN3QrehrYgW8pSysnxUTVDZStVoXhXQEaZ5Lp1V9mhF92xcPG7Nm",
  "key22": "5JTQH4ebzmoMtLveMFygN9JMmbyfVaKKtPyQSfyTvCi7VunTKwwf2DSe5MeSt5RTUUPDkgEUKRKoYPXaxHsibqU7",
  "key23": "57x6qCYADKZB6i2B8DwxUmPPxjqaDYBFSntYgjfiDdbgcfrcWtyg8FqpG9j4gPVwr4zaqrtKngN5Yys9H4VVbD6a",
  "key24": "49q1w2HKweXAE3k6WHgeyykSzgFNWbpNznDAiwidSLGLFotBBtXVZUySdn4dkNt3At1TbPuSmgWhz2ASecxKn2N9",
  "key25": "54HQv7p2WKjP1YgMfu1yPx1kB43tVKq6jaGvFLATQ28DTBCMbMxz4m9HhCBQii57QL1JYPGd8jw59K4Yo2egaoGy",
  "key26": "5abiSjMQeJPXvPvL6iz3amqtrX9eyNtV9hWwmZf7Xr2S3dWYrZZ4BHw6FCXxvzKWyK7fWa18ewtadNG6bK1aCkHj",
  "key27": "LDbg37zKGasgYtpzhgktJAk7LdKWRYAThL6XyuYZ8f5fSXoZfdcRLwER6PKZnkJQnfWvAKzkhJCovFCNysA6XvK",
  "key28": "5RN3eQG9hmyyaLiRZyXBApUjp4rjp87eVbmwrGTLL1bsyeesyySDq3dh6KfNwFnTcrbtc6aPfGX2ka4HVg3QCTqx",
  "key29": "2x7wFmHAu9zHSNx4LDVasnLLvcbuHSUvchNw7EPwT9nDLjR9LE8n8TwCCyFaCz41dedP9R2K6ZthVYPffYjUxap5",
  "key30": "45XRZhXwygqcEkKA1EDdbHQHjDVLcDM3Nw6qLpn8581bKauSmytTsCZX2SJ5hdFSkwc2do5vL4SeiKJXWKZfQ9ec",
  "key31": "38uazTnysRjaCM8wuJ8SPMg98bWjfk8ovjgiM9ymGVoxUeVMvhj7j7dh6Ks3q7dyz5mYfv3gFuZnghfYDcb5ReJP",
  "key32": "mJRYt8wqDaE7UgjVZxULQgbeWVqk7GCQnGk9ngGodA8vWW6LSyQKuho66dcQgh7niWvx7nfqcQVGFTb5LdEnjy7",
  "key33": "5ucBJg8PpDapQ85B8q9ETAXKFRvn6tr3PnfVjqaZTpZFMNcMLfXbXgtVLSPhtr4KdmWXr548VC42puzFsR292B26",
  "key34": "MAqTY2rjAPZB2SVv8wUFeiKjn6qcL94ca3RsDMyaGt1paYHcfmSHpeWivUSbncsuyMFhvwoBdBcGe2594afK21L",
  "key35": "3ZX9RShDHLuD4ajiaif6VjqbgiEaEfGpy2XPrXNCo6k4LjBhJubVQrNQvedBN5yRYe8ZHaywGd28Sm4i1NMwm4Jh",
  "key36": "3JzSPSA7f111WEE1Dvd7hFHfcf2KtfRK1ZhpWiP55MWg8PMaise9frXFXZsU7EuPWC5sBMKFH6Lf4DvzzYnyMJcD",
  "key37": "5zFwnqb92C6NqBdzq7PWdXuXT8WcRVh1X9Zy3q2Zd6H23H1YD9NJjwv6L3ArWzFba44SwN9MF2UMHfzAUB1ovZCq"
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
