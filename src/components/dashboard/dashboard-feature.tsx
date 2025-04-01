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
    "4ffYZZgAxgkKUJ4hUL9M3reUyPVeRg6sfCUdANmHsN6eKdryWnv8xJC82Vw4vD7tVEgGAkjNAJofUNtte2tuPskE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSR9uvHoH9B9cvRpSDYdxEZyLfck9eoRUz83XYY4Tq3aetNgFoHEjZfmhePW8ncv4LgtKkK1zCSpQ2zZwWFc3Mj",
  "key1": "3yJsiMnwSj7a22omvWAPTHJ6pbfpkByzEU2DdFNUz5fPJnqSiVKTqHWM8USKP9Sfs4bPX77RQBMYTbBuukEEyumU",
  "key2": "45Xw2pnAUqeSrLFAwqFj8QnsFFhfVTp98TFniQ5aX5RKNhNjQ3Hc9kwXNB8NvgCV3iW3m6cFLGLtSU1Qp6VLgnAi",
  "key3": "5GBNtABBpYYWfDZgDHi2xbcz1ZmBGjzkf1G1LhhiqKQ31wrsBDy1iq5k5yFTye2HtRysq9WkCaLAzpH7S1ecZi8m",
  "key4": "4cXZr9UxvkSz3rh6y89WccYhMjq4zWvZhWLUW3pP2NPjPFrZ8ifiJzxcrNNszGQcSUUrXWkbBa3Jj8CtFSgc8s1T",
  "key5": "4nUpHS4RK9nDUUTLJCwKVXdfBVSZ49XHEhLyaLm6qev7wK4Ra9vz9vBbXrH9RKymBWMW1776w2cUzPPKVQsHcraL",
  "key6": "5aacU15iZAdU5YY4fuw9wv3VMTT37gzPSdPKsTUDrGmLt6T18fAuVLXRbzKTerLfYdezAzq729ZiG6kFKLRaxHDo",
  "key7": "44toWMDFzGTVYmtGy34fkK2m5TCWJQ2XgGFzaGEQVknTX8xkaajGQ8VN2Fr6fun16uXgokDdQor9VswWeTJqYNbV",
  "key8": "3HLTT6qe3SKnKziNm9SCBH6kDUhKCZXYwTnXgR7Cip3rd4pnSbnyoKoXWSHfJG8ota34kGnMDLeQyvN2yCP54rqC",
  "key9": "2PjLFmjmz6JXq1ApMY572StVrqZwgYx3K8jMQABxoeBwrh3xCU65AqDPa4E5qUaDw1rLZkahbABWefpmwTPzgFeu",
  "key10": "2zYZnu14upswfLoYoWsZXroqoTw8a9ZpFTE9qDgojqHqiiaSK1UNjmZYr1pSimG67vgkt8QaQoGVK8ZKNw5SqQDv",
  "key11": "2qmMeFR5a4D3c5TY3tQ8upirYcCyzzwZQrdbabqUWr4tpx7vFEovHAHCa3Y4bKRDsZRHhA2DpHBEiBRz62SNi7MB",
  "key12": "2X6x6C6txmNgofRdtESoC9Kd8PHG56X9NXVnx4kskTMi9YAFY3xvUGxdiFivASubDZDc9ZjomLJAmNB6GqyDcLX1",
  "key13": "s1XezngSukjzm5RyPuxikogQrKBq5rEgbX8Je8E8Mezc5p34SEeuupv6XrBYUKqcTMwaNtKz8BzWLds2wg6qF48",
  "key14": "2a2XLBmmRFzdQxbnn33We3YpndbH86BEXppUJBHmpUj6U5vgMYkWWqXvS1zhYSE9noTY9SFdYD4jGiKp2ZxH62pL",
  "key15": "3JdeXMuEvrP4rKyqKPSheai4Gw1rLB3zMJ3kQpy3LfD8xjPMvUbq1endNxbvRtGGq2GNoThRxPSwTjmo3N8swSXi",
  "key16": "4DtUmRhhFfWvJWc6BibnexqHDFG1yCn76wfygDXWDDxFMVDKFNNi6qjDWcYHskCTyQGUrXA7ph2eHkpWce8MetQw",
  "key17": "41w6N6JqmEY4JC4uGvXFBZHXeyBExUnLNRPWaZRY3G9GbQ14yKtKqJbugPtoivdwJoTyqnsMbjk3srTD1FNmGQnF",
  "key18": "2wDDHwCkYXs4jr2eeX2UmKTTh7EFhwrChKvFQrfLtktSSAUnB3kfCGFzQXFmTAuSHs5dfsbgHCbfQ1HY1gLAGSWi",
  "key19": "24TFNdjziq34NnRHuVx795df9aziei2TXd4HBaj7Twj7wAQ3HnAxaNjyeBYvMhSWdDgQsgxoBMn2o9VczjnjECsf",
  "key20": "4cYnEKoHeqStv1q3vURBiRUsJjCWKEkvpUhSdLYuoakN48B7edyHmF4rhdi9jJwoJr3nvdvHXrqtNFmUJDGeHiQk",
  "key21": "Ri9zuihTHRvAszXXc99FPDa7RCWNT3FVEh4D15WjJ7FfcZeqfhf6grc4AnjedkRqnwA7XbFHpDcAtjWgubLAK5b",
  "key22": "4uPrwoPijVHuNuPhwA6rjJor5odfKNBRptH9ENta6ZEA4YijMQ9UUaJZGyBNj8vPr8c3FYCHEPoBN5TfV7mjQwW3",
  "key23": "4N8vFHyEQoPHzxExdGgwZqev2B22mbhuWi5LU4mVZgbkMK8HMpb8ZUN49qz7N7XYJzzFAeKHG3vBFHUbzr7XSjap",
  "key24": "ytSgawMr3k9712cBog2xRY2EAjTWKCDkbCxNt8acHVuiriGPhkPJWc5RSTAXbpJG1MNkZCYwaEap2wyUtWyY57V",
  "key25": "2dU39R7jXjXCsZ6egxPuKgx6HiFUwt1dHh9r8kc82hKJrAYiR9KbnsgCVz1LgrScRdg6yiofnGmhAH2AzXjzNbnL",
  "key26": "5HBUSns9cPJzwg6sV6skPstqexHAU9nEjfNJ25iSaRp9eYdR39z2jfneTHgVshXdYwhn8a4V1uNAiX9QGHXGaD12",
  "key27": "6ZdQmEQd8PAePhYzQR8p67vQrDiTf4mvTHcK7TX5knJ2GRs6QWAqkzeX82aDNV44M1YLbA9VesuKKc18uCqeLeu",
  "key28": "3gUfvTE7GuyZGhpQYq8V5YUP1iR2HTBCrjbaMEhS7eCo2UzCHRUgzUt4UXZS9cHGrWMnoQwxwrbdn7vvjrGh39Yi",
  "key29": "3uMEziP5uHZntndUKG8Rsq8x13q3XLtSxmsMTeaQfVMtuXeLtcCg8MQPkquJFus9KNGykKiBiYV6CJ8Lw1nTdNd8",
  "key30": "2zF6Fvx9UboweAJPh41APrd8nyfFU7XadK6Ny9KdCAfyirRTR6HTxYa3zyu8uKH25thbxiyG9Q8WWBKpvDRUzzou",
  "key31": "5bu78hpFHZJcEkdri6Q8tF3ZuTJ3R3hdvU9NtPohTVuKkrKTs42itidPh5qy6jFnPRfXsQ2PPxuiTjYBoqaXwgVA",
  "key32": "61n9tMniKzouDBhbvhqiN7BF9tfaa5FfNquqWgGanKLwgxq96A6BHZkU9yJfEhLZXcCee8gJJehdSX8NZXeMR7Ms",
  "key33": "2YLpjQooYM6eeSLF4vpzzDdmeLnU8schwgxNGy21A3ueDGsGMkCoqwm6MTYatHCn8ZCtmtchSWHabw9SwMSH2pdY",
  "key34": "5B7WVqd3Er6NToEYpFEJsUKDsBD4xf3ZmxM5eFWur9CNvW3f1NtBNeKLA486GCSJaQtSCiaVZNwRfDmQpmnhmNqi",
  "key35": "4SZogMyfFP24zZLwqaE6ae5UUv56rfanMbodd1c2zxH3vAuedBZTXpHvdkRVfcgm1u6KomuMQFMMiMfW258rqUVR",
  "key36": "2EKqXCtwRp7LArd1oDB3oU6q3GPaw9hKACWH1FZ2Z7jSKZUHFxhXAE8R6kufCcfZiH9c34ByWtGPsp7nNjSQLLRE",
  "key37": "GnVt7RdKYUYvbhCMu6xj7iDVVxvvauuzNBogxDoZF4ibKQAA66X8y3qESgX7FGcUe6ChUdeNYF6ibqEn8uh6kq9",
  "key38": "enEtYuX7qBiAd8J3erSdSP2CsAY38Cw4v9WwXWyEi2q4aFvt3vYKGpbPzMBp8rwqhxAipiqZd9gZvQYQRATXzcE",
  "key39": "5dKtHdUbrxB4nRxzggyqzazJZJCuEBfN9SvPqWcd2Mb9djFtLNazgQ8KNKNEZY3v3tahStrCCu8yo6rMeNnFRDFd",
  "key40": "2SKN5aFnzgigsbns5WxxTXnHGgLKAvSijnD9TN9cgx2Xai7Yy5rcFFB1QjoeP6ufxEgnTMuTdRjzQ9bT9iBcQxyQ",
  "key41": "Zh3UHJZDYWcEyGahqXEsfceP3cXKeogCWrdA77ptNDKEmtsAy5z8AJ2UyjRWRMUMEhBt6NGHqtGFFpMytR45Z2n",
  "key42": "Y4ojyJxsV59aZtQXC33RWzP1M2HeptUgLxCtFebagWHcP2tyNQqovXZpphr3z6TdfKyeA5ZXxLqHi7Wz9Xr1znh",
  "key43": "2Xb7bC7UxSB5H1kTiG3DkfaGivpnwm3hLHDk6f8xcqv8TA7sKM6J3xWc1YJcaCuzRB1J764Qz2C8QRpGjB5ZRpL3",
  "key44": "4UZM511LpNvdSzUDjK6gwSxAFyuPmcgczgNUn1F3LrUBf2KgKfAh8UZjeFzek8GCTNcoUgoDHDa3KBbwChAUS9Cu",
  "key45": "2mg5jqiFrJxNhwwukq6VDRbkuerZp753Q4dAaGW196s7gdnERdNgCtgVDS4mZqnK4zTreAb8SnWdUm7sFfkAXwtm",
  "key46": "Yi9eZm299UgpvXXd6yYJNC1mtLATjojzHpDkK7ijzNAMxLXyx9LJc47PX384VBrJWWw2zzqk9paLLfnNLWsFuy1"
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
