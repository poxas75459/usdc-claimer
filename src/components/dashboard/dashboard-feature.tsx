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
    "4wqf57RjCWzkjKEcbVQHznd6UqUTyDXNXor1bMBE5SMKRyhtqcReSmCTrwcPeD8o9ZvhV3K5fLKzKhjJMSas1yCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ty4JfGK7wpbxqpu4eFuFjzsxawvQoTafDfgbCWQLuiufMUF7gRHktwfLvivcc2kmyGRDXPKSaKefeiAE2RDLLGY",
  "key1": "4eEbNTVE28ADHFQmxMJunaJ83fN3uQ1TbPWr8SowNwT2S7srWF91vnDdQXH15e7twm7EQNn5Weqbfmpjo67CXvw6",
  "key2": "tVRAcpZHY3N7wishgnbVWBXJwGhPxh4rtYbkPinpnmTvzJpL7PrrUS9vQ4L29BnkL24M6r8SbMpmdRCXv3HmBc8",
  "key3": "4LS3SBVgjcYiUD81tCzwYjWdLJ7hcFn61bc4mdkszBVZMdk6vMVLHsrWftTWDiVb5AvKvSruRCFymhPZCUEjyMAr",
  "key4": "4DFYThKMwkYo5zBBX2r9x37uvpviNUmDdxsuZVy3KvjDskpSPjxXjZB3KT9H6kuNBhYffjujTc4vwzPBd1CKdMQR",
  "key5": "bm4ZwyjUScBh7ZdE1QSUbsmnezhvuxrNVkW8qvLmHzkN5qPhxTGU6A3b5tLPjLcR8ZBwcvtvTWWRfAbdPHhgHu4",
  "key6": "KsSzbKUw8b8oDRCZhq6hciFrcTrQ3ZbgKQqdpvMxmKs1RSD7eYcpazMB7rhhvguuVa87sbD7HMhQhzS7pGYfWDz",
  "key7": "4FM5zbRzWANh7TtsLmdDjDwHFU384of8i8HvXqBLzvWyLyioa2jvajm5apS8G6f6zaMbU41reZ7RfpkpjNM5xExF",
  "key8": "4CPNMQZs6BnP7z5W6XrtgpWnH7Uwx1nDpMMU8YmxZjBLx9gu85S9CAbKqsPkCW6Hq4ForQdfxmZN4WXchVNzMFP",
  "key9": "27XT53rFARRGZGe1w2YvyTZFoo2CcSvpHjovoiiGSJBvMe8J97RL2Ze7DLvT1TmgxKwumrg87NgPfUx5oWyYkLXT",
  "key10": "2x1fR6iwHjGHp2Z6r5irAonGqAAy7Gs8sErrB8kzLUvavFLQHAeLvj3cCNUa8moab3QG96LZnNXKHGvqTtwmah2u",
  "key11": "33NhLK8HepQv8SBUJ6p9cwEdcE6uQV2M87rQoqB6nEvH7t9WTQzcPaeJBW2cNyEBbiNy5bPCjS8vUF8bGBWsc3HQ",
  "key12": "2fqn6Y4A1mnt2GQmmYm1tqfm1j44caMutHM4NnYMHvP1WmkwtjijL32rwcqkAqYt8hJDAwSNTSdfpd6tBbgHP9e6",
  "key13": "3WywT6bxvLpPuDJ9HK56KMSAgHgyi1xUuy2NmPQGnoSUgvAxHbiv97Qq6knECpk8GFawuwodbayN5FF8KF5PWR78",
  "key14": "2jfR8cFd1QkTw66bjUZh3bxF7aj4o9MCk8D3an2BN628UhMaXaLBE9VcFpwFC8NVHKSpZxryiXptTJ7DurPgTrxD",
  "key15": "3e3ciaTPGQnJs6DeD9ZJsDhZqwZneiZiC8w4U5ZdvNPx8xTrMQNoUN3kjzF3SykknomPq1smr7AqDDLT31aFVfyG",
  "key16": "5N5MG1joZwFi1Hw6wxxxt457Xr3K14mx8RsrfBY8gKgcB2m9aPQHKmHuvXymz4z2sppWCXHB9QfiqrN6yJiNNFPP",
  "key17": "7vwnSUsAreSzepE5JsniRe65GpPSy9vkgE8vv6Q4n3zK9tqkx6dfs1hWmerSU3L1ATRgaaWkMkQxdWTy8UofYtt",
  "key18": "4YSdoezLvtH5ecmUkWRPTnJH2Ehif6qZdRmiyx4iZM7ctTijmE51oAvXWtsKNz1Ju9Vtv9by8mk43m4sunfwU5EL",
  "key19": "5ALSquNnb7PNA6UvYjEM58UY64UVYWTEjg9rkgRTw6uZLboHimoA9vS1fVz8xsq2UqrsjsfjWtH7Yhrz9oZ5Wc14",
  "key20": "2BVGhc7ZLbucthCCRRjEb5MFH1XR8p1Yyr7S7RHMUgth46AHq6tGbdssZ9Aw12cDNUjR8E14pUV9c5jiuGvZiFH3",
  "key21": "3nciPTxBP125GtaAFK4VwcHbMAPzZCmNsUMCSG3jYS2voJkXV5X1fS9TTNbbJ9Vtzzomyffx1i7imtnJQmrqpsXr",
  "key22": "2U8Nxwv4SDhFPbhMDHajKatcViFNVt5zSWavc2NPAwPc6xKHH9xfbcLFmijwbY3LcRSQdUPGcWmZVZdxRQRtikfi",
  "key23": "5Ly3ca86KcFqNQi8vGEUyDXAEvbM5BQbicXf1n2t24yhfzmFAQzsrogfbGbvPdn6TyPMsVoNyraFwDjt6Yz1AcwD",
  "key24": "29SuhAE2V6b2wdZuomApJZNu8wfquytv2pZwfkbXvRa7iXJvWoqpVrVpAwsctEVLLAMtsxDPKcTKEEAwgP2Zcsvf",
  "key25": "2dcoGLQKKCsrxJfkq9YUTN3Dm4woGHXJrSorvVAW8SazX5TLnJwzstSnQaTQKbzZr1LLyy2R7wJuikKpmnfejbeP",
  "key26": "4k7x7kkNpaoWoA9kGPMZKwxjGfVw9dDpYZwzXoL8MYewviSr45g5RDDsiEwiLCdow4fkv4A5GyBeVNVuwg6gmdRr",
  "key27": "9HUmW7L7RgXjb2sG4TYNEhQdpgHA8qjHWeuwz8GE7k1Mz5TukBnsa2MFURsY5H5ZxzAvcqXLvcWF49heUEvu3Lq",
  "key28": "2HVgm9T4tua8FwUVQnsGc58Q8ADYkLof6ZSp7tuJeThNpocbuEkz7Zq4LX5nSPAiqWNmqGwMXFTPysmS5DQ4Ta2m",
  "key29": "4b6tTcQkNAeqjsQFwrFJDjVM8wSPKLmgC5ypdzxfaLLGqBYdVF9rBrD441WANBWBBYhCghGUsvEyNDkPpxhMgroS",
  "key30": "3P8WLFuEcQExBRjnB8cYW1Ji7cZoybhnSab2EC3XXnhbvLHjRhVNDbutrHKDfXDteXNRVUqEp8ZxL3anGRfNAZQT",
  "key31": "vjbVXSJ8zXh1dX2BBySScq62hfWer7yaageHogYQ9A6jHESFte1qpNdbfGXt2wTBLAwKEVXfFucBfE8pm61cKZd",
  "key32": "4Wo7qw8vGQ1nTfcyHUVP6QtVAMyKw2AdE5zv9m7wgZoLVFMLP7bDbYDMK8MLKs35goXyhqHQXEQrmDhFtaFN8HQf",
  "key33": "3Kj4vBSC8HJVwFHfE9HqrFHEbgHHAwkrnmdoje7fjLH1Ez73g6mptnB2sgEFpFwqcZ1hDQ7gG2jTv1cE8S6rw6aU",
  "key34": "53WmtDW8oukxjcHFxQFoBWNM9p1ajL9d9K6VZ8pBkY3Cf6SkSqiU8TEMbkdSGNb2i3ZjiEzKxv9ZocXjEcNSGbCN",
  "key35": "66idMxCp4LUBxFMQDA214rfYr3PwXDP9hMgvNXv6YvdRFA6GXh8tX6dnvaLa5NL4jJm3AYfFqRkkXpoXjYpNyb1M",
  "key36": "3bFJ3mu2gr5Ntr4LkpHVzjfGyu78qY61ybMshPimvsMiL1iupSAY6WEyYqz5vQLGfvUKM7agZMcrryZ6K6pXwfZj",
  "key37": "4tu93kdwB8BhJFT1hBEAdtBZDn75HPhqPZa1hvaAbZbh9Lwb6f2CVi1jATX9P3yx224zi2bVTWEXR7wyfeTaYUeS",
  "key38": "44ET7JWmPD92eZQJjxfZ1Gn34d9gwsi149MfcbW5u7geEAPEyDjBg7NuB5Ffois7ZA87RcWcm6MRU2QiFyzbFEVT",
  "key39": "4QuqL4LYhzsCokKahb8ZJpaq2NUFXWkzrFSeSKzts5b24i11yFGAHvkpbNvAiLbe4E1yRNDnSJg3VpNa22bEGxgG",
  "key40": "5LJEvZtBSksCgVMx77Wa6JDPrXitt4whxwCmpvG7pyDVDMkESXQMJ6rqUZRMZ8hwZj86e8z1bRmraXMWj8qDs5Mt",
  "key41": "fugcAjkpyPa59SeFvE2YohFeJ1aSuVZFnoBvBLcwNg2nPxBaqQeUDBFxwJKHGzYPcnxjXVercx5ZtR2zj87jJnv",
  "key42": "3PGFHdkqhzpm4ZhtqxB6qQyDoWX2wJkc6HE6SMSACRvwNd9mFLxqfwKPJjigPp45v6KdU7cizd4qxVGbJZFXES91",
  "key43": "4A7FZkdiwP4AmZ2FJjadnYwYh4aphW6c9J3tr4CVxr6dPaRy8fjoPjQpJEiTXzDwWcFQAMtt5hp1So64BQsokKkA",
  "key44": "5Ht5MXWcCkAsDaUYW2UfsJURZG3sj2iNAKz4FGJmwyb7E2ZFe7m4PSptxomHrYFNr5iLHA7XTcuf79UGgUA1ZPhv",
  "key45": "42h5BwoXnQ6WUgUbhhiT8hFq563XLke7qoyrx9dRaCDCsz1ghm6JY9LeQw8hvA5Ar7rPxJbGHKjr79J1gGavcpxM",
  "key46": "CS6JSbR7WgucopfCAk2b9DUnpzSbXnVbQpH4XxmGYm64A4W2HvVkcFarXTXKJqpgkJ5uMPwXf2bMHhHJPW3H4pm",
  "key47": "4tWzeNGfcK4Mdnp1WspJGoSQu63zSmuPZb77n9S5hiURaWfSivcxXJNmZHHem6wJir4nYA1vmPaRzrto88UMAscD",
  "key48": "3QqEi7PSCq5Q1TLAftHvugHhwnZ9PXdxjzzm4JaP1GkHk13edq4i3AmihnucqAyCEjjsx66oMr1o5d3r9cf1Ln7y",
  "key49": "5asNV1HVoxw3CvpSzXdXmgGHhmKVgCUsYVqJeQhJLAQw88gCVcZjGxhQx5BQQLak9Xmat1Pen56u6qTPc4xz6wsi"
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
