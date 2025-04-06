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
    "5jmHh1uR5KBcyanTW5PSE68sQXW3pegta6wR5TTmfk8VMc9YdPJowTsc9HzSds3PLNbVrz46JqUVmYNVgDHkGkj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmgU22BFGNUU7qouDG6epkCtn435bGSTEaUVGaB3XurpccVpVyuEGDdqWjTaGrNKqgrfQwBP4qMFewcsQKm6dY6",
  "key1": "2VSj1Ktc5VGF2pQhjEKZqvEjbB4hDhGJEnuFuXfh4fgN5QCsJASQXHifuycrir25ukG81qBFeM15RK67TSNZi3by",
  "key2": "3FDwqbrCNsCQWLZyVrLUXjghbQXMNJjngHgTqh4iKC5ogYbp6heJC42QVbFJfVv8gbUqeQVRdowhyvPCttiQepk2",
  "key3": "32JnG6AUSuZpD4wdfjiB8b9TSG7KbvP88aoScXLdH5UednoZYjAaX97GwwkSZipxaZnPsV8ACo2rxHFQpuwJAgqc",
  "key4": "ZtxRXdAVpz4yv3H4x1JAGJJjUwt48fJMVR3C4bSsdYF4pjd9jX9ngqDC9pZbXtjY8sYCxngPTihdnVsoYUuBfCi",
  "key5": "2y77V2Nv3XLNQkVopp2scJwYYY8UXvhsmG47DH1AMfaFavNTiTpyLhkjGCmPtrxrX8CcHVPiJyUUXk85hdQTGtYK",
  "key6": "3BJQKj2ATGAZcDzLeic7cck2ymaJmQJ3u5hjffFCdSeeKnR4fJqr5jmA9PtqUTV6vBSPwcCrMvpV3FzJLuVrefPi",
  "key7": "2F8eS1yWUJGBAfpqAuS3mrVBnd8PeK8RSiLHWw271cXcsQeKuJwBe5pEXwyeN64MKtq4UDQXFf2MJnW5MhSbq9BP",
  "key8": "BzV2VRMmPD7ZcotvcFojL2dijWJZqNa8YZqidWoQo39VCMRQ5Y7YXofk53iaC4AoaWunQgqYjDBuZ1kbzoZAsbE",
  "key9": "66RCqaQHdfTFee8GcXf3MYhfFseM7YNPY8yEqGTYsYahtnPA4Dh5LhSTXmLgnYvpQLvxpY6Tb6c7Py66hbhoUnoq",
  "key10": "MH5Xk4Tg7oRuMHAdditrcap57F96n6KRF9R8WtT5V7bjehfgeM7791bFKPXYMmU8X8WxPRFc5aJc2xCLzDFQCtw",
  "key11": "zwCGCaza7txUNFETDjGPMx3VruECaGBjkzbDs5XyT3yMUA2BVtsUvMmsxhcEvrR1qH3LDYdbkrhfExEx6HmfHRN",
  "key12": "2kmakC9qt9fieX4Mj1XMH7Bh8rF6ndFnzkVpKMi1yAUQoB2fNd6o8hHw9CdsdjLvxVvtvFTmF1XXoWC9n4qnUUVn",
  "key13": "4sifitsJwJeFETbgwZS9tEDZcsTZP3LBfVcZkhrmUAPv3CHkTb9g6MTJwbJPkE57HL9mFTNgjpEGSfsKdSzAWi8H",
  "key14": "nuScQH5vCfYNMGC6vUZRzLcC4R1fFVJaxjpkCk6whvjWpm7gcqSVuEAjJ3YggyrVv6wA2srpEKjEy5ngPkh7bEz",
  "key15": "5cshtajZx2gWn8ZdqHqNFxgPzR6ofiLEhoefzLdnvDHhJvPtED8SSmmo2kit1EDixr5yZLcJ6bQJ579YwZVwRtdq",
  "key16": "4Xh6aLRZsjsX8wE82HQmBFPxGHz3qX6F9am7NYPKjJqexVhUs4mcRCruLSKnLM9vuWa3dJysqTtdc9NYqmcDpMHB",
  "key17": "53AngYNggHCNGbyQKTb8Ft1LAGpu2kbrZHDVfVd41FdeLPq9ge6gWYL9ritGLB2117Kes4WBpFgoCVJ8n3upYDeG",
  "key18": "2HDx2FW91t4nc3ihzEE44NnR21k1Hw1uncz5Rzqg44AKm9Ed6mPQ3Yn5VaZRJmywXHNwqnws3Zfe9vdtXCJtPDKE",
  "key19": "67aZ34y4rGt2UWAKwSKhqfCoU1awRTRoTa8j2gEDWDCyFSk8guLfm1X6HdsbTxHedfsSKwK4LNgrBvwLqbZoKspZ",
  "key20": "Ab6mrFuhKKPeynsSUtkmXHtpzijrkVxwMkRSnzR3UyXywJqQwEZQuKHMiHgY8kxZi2jPD2ZDW1uFTwube63HGfw",
  "key21": "2kwiskJPciCoohjstja4tUSBmXkmJFanwLjSdyzZ4HuqJnSTVUknTG5E87qtkhJfpFcYDUQo2yp4uLekEjT8fqtv",
  "key22": "5jVNBU3rXXfmdWwkyA4eiNhcs6K3oM3cU8cVqZkHfh1ZSeSPtZet4PJpKRxytBkrDKSqFt4R8JsXCcQioNKSKkyW",
  "key23": "3nmjqKCb3PEacPHxn1hqFq7gCbwFnH3M1BcDPR2jH4MHZGMjo9FHFdXst4Bim8eyFeZySrnvvy9nNevkC2cg8SFs",
  "key24": "2vXroYRqhJw9EYDfGw616yzoGb1CnwTxqDERvdtVBMv4rezocaHEgfPb1wzxoecDofTEdmpbgFNr4GyGXUYV5f93",
  "key25": "3B1j9atSyTXu2aEEYnnXhH6QeaERk6LXyK1sVpv6GQ29iA9LWWZAbTuZ1Xz7zhu1wspkkhVMvyiKGxWvMiXVnHXf",
  "key26": "2XuxwSk8nQYdG8ZtADnpsnoSebSC82Sa2tHdwjmqgPqMCGwHpJs3LFtVofyHj5HMQjZWpfd4mMngWWxjMFCFjiR9",
  "key27": "5LfBpg497wPpp1hMd3C1w5YL27q8CsrUKSnAMxxLe68JW5n3qu58zt4pqkNeSTp2pZ6vruxE2BabFdDpRE6FWnar",
  "key28": "4kesvLr3Z6fC6dP31t6xj4RT2zaWj4P4CZPdLFLQS9uwzXTQ9ySe38t4tWzhZ2P5JHXQUbRu9uT6hX1ZXhV3HzeJ",
  "key29": "5HEDVAgswvACww3JsQY8TMH7K9CUTrj6eNL6TpUU9FxAsVegP9P7H7UxFNhDTrpdfn2VYkXqniqHULki5idbJXAB",
  "key30": "QgoPjZEg4hE8Dndzbdrp5jwfZJmEw3PgMQnxcthDNMbWLQYRCWAtnBFLwn3Z637pXv1EqqE2XxBpY5KrzH19tjd",
  "key31": "3FomSvRtHJ57uYQrDWEM2YwWM7YCtLH6qf6wCzj3G8DaFE4EDHjAvjtZ9nihomPqeTzkQ6YzpMk8zVnDcftXFNQX",
  "key32": "33QJ6qtoBxFE8akXkMtuKFwVxfJgPMpHwnvhKaZbG8oCzFNf1Se6xRN8JtNwUFBaxjscaqykQKR6ky1jM7qPs4Hv",
  "key33": "4GFgjKznpDaPAF7TkvrvbzwSNyGPn5LAfaC8BAec45zQ78ynY5MXKDSVat3QbodaQ4Kda9xABPgKUE9UREXjGh1A",
  "key34": "4UWnanNQYXgy6jkTdem356gteDMphzgPK4pvCxoJFpdmYby5pZoZr9Cfkg22GJXfz8ZowuwaLfCDFKDQc9rGuAEf",
  "key35": "REVxbMtPK5c6BUGurQ75KUk1rV2ptfPU9bWJxKLY74oK9yRYcEfqxzVRPuVaCzdTbaxuYvKybuUC8GRNd5CnmaN",
  "key36": "2UEfvTStorj7GcQZGH1W34J4kRbQnhVCaiZGyAPEDZjAxrHwpXi2Rr1DQL3UCPcbZ3AzKt44oJdFZfsZWMGTBoj6",
  "key37": "28kRnhCnhZhSnjXK3G6iU3AwzeWtcAuzrN6HyTxxMUbpSp8gKcN9SbwC82DzhJkjUfjZgJBDQtDkxtGT3hs1yz8h",
  "key38": "45EPoZ193YNxbwFMuPyRGfFY9vdenZBv3SJNdUKhCMHWfmJYKejCNEchkMH3SAqssASGvenF7FKVo3doLHiRKkKf",
  "key39": "459SnXkVh8LNbpG8DEZLuSQAWFF6LRiKrka7Biw2q2vPpYQzbJ6C7hJRM2tEXVEzbfrbo1qyx7FpDA4AUjx3PAuY",
  "key40": "2GPwrQBtibxbkWXiLCCy373FPk13VZRW2up62diJQqaeqzUV8Vu814DpFKxQKsRGDxSDR4yP6cdmZSPrEL3Zxauz",
  "key41": "4tXTsc24JrJAA3LbHftcjXjk7gABaC214aRs8tv4hXNmWKHzxUQqy1nhGWUqQDk9wSFo1Vh8feR8CAkSTGZKFnZQ"
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
