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
    "4WbeZVQnLfvhFw9MbhZdN9Gt3B2JrBSViy9f5pv7fuMghTiYxb7zSrjvBasggdu4Crk4m2ZFJ1SSTg1AkvHBTW7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5enV2fxTHzhQ9DD23NDsVxdvpJ8asJkDuqeiQ6zY1nkuTLttnLNjrbX3oqBWHAt7hLMn6FETrK8Jy1stTZM313",
  "key1": "4N8xuAoP6U8kduFBSX7ys8Zn7sgrUZ2X8woPJko6koDmusdPRpX4LqdkNuyY7Kr85suo4StZrv3mu3sbuSjB5uL6",
  "key2": "64kYFPnN6zf3aruve5v6kvJtq8LJFc3pbtk7Kg9k1G9YgV722gtjchdqhbGNNTmEmx1XFY87HaffMbCwzPpwuw7m",
  "key3": "5MDET7Lejc876J94soAbRThJN7WjCbvWgY9ZV3WFmaVfdKNZ4XGqMXhT5ffsxJCKC9hz9rCWbP5AYtAUTGMd4So1",
  "key4": "3HbAkNb7gfNuR1dsN7Hb8WBVCu4mq7aFdER4PkzCdyeBcb7wpaFv54K3sXoU5DQnturxkPdknM5CDTZsrRoErk1a",
  "key5": "2cr2DXJmcWoPo9HBirV9h9CGTqF2YzcVjd68MUzidJsE4n6FunxnvKRKWPxe24SDbfQ4gcWwvSSps4S6J7TFZXck",
  "key6": "5sKXgxubC7itKHYt5CLNwdKKi8mvr9nyU3uSja34QbUBWBQ1vsaBP9hmABK2ZcHPXSd64GKxDDQ9nE7N9QktYANE",
  "key7": "oWD5wTZcS7x36rWEVXi7uxp7CevTcLGjsruT2MoMcZaFKpjb3WTVTWd7b8p7Yc1QozUcCEyDvYWTKyBRyd49BBB",
  "key8": "H1fafj7GCgsTbAL54Guko7vk9Lu4XW3Vnpc9LoNRD1GqTKmVHJXfduq5voavZEHxKY7p1wFZspbETe8zqFmXBzU",
  "key9": "26VN7Y5VC1gbWvmramNn8K4uEP4GwS9zC5K2K3JoTTqRVW8omYGtJ3V8DMMgQGhjSNyGvuaam4Sr9T5zLKK5sH1v",
  "key10": "5Hw5PEURuYRA5iwRmmDAf8ofSmks6yJUWUvaxXvPz3Tv6e5uZJ8BSQrLtGE54fHWYmkQR4XatNRUefK12iBCphoJ",
  "key11": "gJXFsTmaQgaRxjxcHMvVPnRtAjAEtc6pJXf3SKKzXJTPbTuwbFFx41WD4AovkkBUTMGNGAbN58ZfhgBJYun2RFj",
  "key12": "3ruStj63d4atwV44uVnUsuesPtgjsof2SmrjcwPvrgnuUrGRrf2r6YjPpoob5YhWSyhgTVfxsBVfjX8BqaNJraBU",
  "key13": "3SN8u9jw1mQBcGKj3LDdGpn1uC4szP5XDLh6xsgMGtDyiNbRs8AE6ZDWBBUEFd36p3PN1Ss5iTTHCouLtCMJnEU",
  "key14": "ARUPUjNQo8ZeUwKG59hZSrspNd4qUWtDSoisXAzTUxAwPhWJwoxpJvxYowsMJxR5R5iCRTkHmgEQ7nXzQgS2CBi",
  "key15": "xv5gZNchXR1bngofwX8UCBS3vMzfgHjJ8zFn7vpcvnRS3akk8QLn7F6QBsGGLQZMd1zp2byBDrdedogLyBPSNx7",
  "key16": "nZH8YT9cp7FJRiTzAkJAE55pKsKqv5ofYqGFzkiZFkVmUgCHNjJdw5EzCNXSbdcnv1GfmGLFHpPEYHRN13Jo7tD",
  "key17": "3C5vnFuk68fqwVMS1QNH2wucetfnstPEZxQHbznpmWCHLPt9ByeUQeN5BM6jrycG3ZFUFfJhpmPzRMHyasUS6yzY",
  "key18": "59PQCszQ4eqA813kT3PgGy5C3KFCu2a2kLgAA5yHYxKdNYTYjr11DFarJvD3RHPodS1qYDNAEkGQV1np7LaVF1Z9",
  "key19": "4V5oYrjBVBvoXrbCE85A4qMFV27gsuSDKxxisRgE6naBdCaviBxEtzEgYb5EakEMauYb1X2QHXFQRYjQ9eGeGbfN",
  "key20": "tAbmSQpu6pekTn6bkPf1ytMgQWTFhvVUTvmwAZT72ihydJfSXcrywtUUBB325giKmfDZUSsXM14krvabChB62QW",
  "key21": "2mpxcCFGKX7r5xQxw6p9dvdD37WQogESbrRo7fBm1gYbdv6k28tbkyVeoXHPMDt86Kmehj8dQfhAM1pynmmi9b8D",
  "key22": "5axU513sWvWmt9uk2B16KbweYzdcUBH7LMjL2ypmPSxnS54kYJjgEXfMTmLeUwHzeX4vdaz1VFwtr9Ad49X4gQs",
  "key23": "2HeVagBzgnmq5wpR5pbT1JTyV8m6Xx4EXjX186VWpQt1SodkaRuDgzgQaZ41xtzkWt4v6k4VMMuv9YUtSuw9L8Ro",
  "key24": "5Hu3BrBdBQbrtQNkQVymVg8zb2mdqAVxPMq3RgWSAsUCWwzpw8zeavx16cTK2A7SPkHvaaJBrTvMZju5dCptN7JC",
  "key25": "3PsheTev3PguzDCSQgJ6A1LbuAr3V27dCjSnNgTt9Rxh4LsDBkwHpSK44CpdSpDQoErfZc5dDvM3k3pJGQArugb7",
  "key26": "L1xNaSYb4kXndWSfEQoWPdC8K6cVZJFDnujHATek3Bxb9xizQLSSG63WV1Jq6uqtSpaUhLHhYmq1Ea4Z9cXC4d1",
  "key27": "qMjc4ALSBTC1UK5vA2Y65QLcokmpQ4zFH9k4XUVNQQummBr5ZnuV3DomuLRq96Ji4UBc4ur8muuEC19g59Y8Ssu",
  "key28": "5HfoWX4Xo5KzpsY9uFzPGKL4CUhWKkYDGuRRz6wibEA9XnR3nsc3vCd2fuciebGn83EPfCYEUxMUjPwNDUMgByaM",
  "key29": "47PAFcRKmuzGySFSftUcVSz4wWU3UNqtEfynKKraXrRAxXHm1zcRMz1GXXNEyJRUvX6JMDpUV8zTRGPRuz5Tm1C4",
  "key30": "42cEeNRhTxBLURhjsXHZQV3uGT2mbAmxCAgUk4LiWNkJjwhyWGYguAN1hUT9sqmVgPeQqQm5X73K3eDPqpHrvsgo",
  "key31": "3oaBR9rfAvCyvDjZU9J7xa79EQrNBvzKsESjGhw748xRZ9AREBsdyZtp8SDH9UmgxvjNpG3YWKMDcVaV7jps643f",
  "key32": "38xcNJFFVEgpUYM5tXb9NupHeRdXxBPcYGqJ8yD5k2SXMR5BrLnRDN1UKBEJwcXZ98PkWtVsefzu9RskSSK3fvFq",
  "key33": "3F2RLpbbs4zLDBg5W9NogA6gRDFfHAwCJAaaVp52FvedcAVPKwFoHidQ4s7MG2S7Z83KHgXkpj5M9NVaxBxtnXdf",
  "key34": "4nLy2CasZ2myWLbnuRxgjVVbqS8HiipGXyAedRMNTQHXC8hsnC5wRZxPe8atMUrDizAmEXbVWQRsYbxHjyxpGxLQ",
  "key35": "3gw5LgpJBomY4VFMfujGWEHqjafM2CAGNYmK2TqjnsUuNNkHgFdL98vyb178TDFmN675VCUKh4FobrB4RJnjmwBA",
  "key36": "2xxcN4nLo7zUkDbpXoGAHB53FyB9RQSF1eyKdn5tsMhMH3TURhrxfWpSCCkK2LXLJ4zEJJ97u89bccyAjVCUWxL7",
  "key37": "2BN7QXe6JNwWHzm8tQAfvf83ybrKx2tFahegy4bpZgLmyKL2AjmXqy68hHnEPjupxMxRJ6BScaF5K3kLcieSaQvi",
  "key38": "36R8j6DqP3ER8bXe3j7kmXfKviL7BTqtPUQJq7jKJBpsst8pJ2evwG2S7rFU5gy1PfoJJ41spW6WqUDgHfrE1p5k",
  "key39": "5eg7REryCJsSn3Mwc6f5uDR8gUf5GjEX8wTrUhL83QmrDfVCoWo7XMV4eACutsuAUd2uXxzFmbyFtd5izjVD6dJC",
  "key40": "4Qtq5WcMKPEUDZ6RRD5jycWM3UWpWAqvjHzDad5hDXDB4pweDLnXGERNWjwLBTSQWi8uH4VKBv6oMVLAD6ChiqxB",
  "key41": "567Gshn8x8DNcSmRR6NkTyeZk9KoidaBh5jeysij83rRz5wxe1sDDwVRWuvpm3sYF3Jt4rXcAq4H2s7nXT9Bhhwk"
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
