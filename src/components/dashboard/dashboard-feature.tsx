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
    "4hXxF1Zo7fsQcERUcami3p1dw5uAonPKW3B2sNfrS66QwtAPTuk6Njpaj2wXjeEDm8fibXhvg7PmRMThcjLe8wci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpLNo5sDg5RLonCDbYhnXkkT2DYSHmG43pfdpRfmfvKPMiTftuZQ56ifbAddy1h67HnJriWWA8CXsf726HmBBvU",
  "key1": "61pAe3oYbqhu4yv8uDH8e7Ukk3cdZYvSMTvUA4f9emLKddivtW1Zbys7rsuQBDEZNW6boMGmxkBhFhJVT6JZFWmS",
  "key2": "2gGowB8ezAB8hX7zFZV4iX2EftcZf9BtdDrQb4oiYgfRWcw9FJkxTmNPbWAEipfmSBh3Euw1E2VCj6DCnZmGxPEV",
  "key3": "2ZLQnTzfc6MyuNcvwkYhvtndRwru1MjCp2mS2ygbyaRbEx2TqF5FAZsoWcKJx8wqc2WmmBL12mnTYqkqraAwSde2",
  "key4": "36sDpkrxrMhCU65gBWESZnCDPsngLKS4Bp2K6pDHjzVXUHub33DjERQm1rCR5ZS9iqBHpjZd3Tae8cKakB4z5nhj",
  "key5": "53S4KXFH4dUcUtbBAjniWWeF2DTphs1738KLFsTn92843dCvY8vq9dVpELQj13GAvDGaWYA8ANotUQdNwKkGXXbT",
  "key6": "5wPSYyxoZbuhWy4FB5hvXeq6wrQPZbgsEoHHETWgq9kn9hPXhyq4JjXiYQDQ1GTT392WQr8ZrNotprfLyRDdKJjm",
  "key7": "2QYJtyLN9q44osqKhLoETKCSHgBmHeXHW62jQd9ArJUEXdxWWe6BmHcGA2G4waqeXALk35cGy8vByAxunWVN6QuZ",
  "key8": "63CgnoE5fHnuCSHwmawsXroCj6PpQutCFyMUJyzeKtpXwwViFgRUQuiSKj1o29PG8YPzq4BYSeYXKZsTUd9Tzind",
  "key9": "3a7rcMECej66jD8wYxESf2fzr7U3BbnGNtwYKhmER5Qvc1tYUBjC8EtYNpFEGL1deemCj4GG1WD2aqVUJcfspREZ",
  "key10": "4SnVPaKH8k6eSYeGwL9yZJPuFmuKLccPeKaz2WbrDKm2ViYd7mUrFXHuXQpuB5qN6BGnhd9kpDbEZgmmd15fxUsM",
  "key11": "v7GBxjqGU6voXNJog4XzcfHimFvdEdeun8jt2jGdcMpMJ621ztZuvcbcfAT7jM17hgLrW3c3J73eqwVRghDBaLE",
  "key12": "4vFa7DuQvhZb9yYsZytq3mRCwopSXUJ9vY5FJAwDygQirR1cUGrYdX4dP3ivMpLu15qgTVbU3dAAe7psczRXKJbn",
  "key13": "3pt1i2UFsrXJ564v5ZWn4Mmb5VrDvB1MSENFguU2bsomhdkufJNZ49izBmDDzTBDtRm4BHnAipvpLESgedHHJamu",
  "key14": "2f9Ke8hpZfGTe8h7JJkii4nEynDtbqSnvcBWYChoGsycpdDXKwJooXZr1v6pYpGjbGi6BS2bAuhr5Zs9n24ryXwB",
  "key15": "2Zah1eTg887P3uKmZxrvv5B4UPCYhZYQrhiUWcAovi8YnFw9vwzXL8yh9ZB5c5NH8tRYnegE9BzS5np9TUYuL4n7",
  "key16": "67pcgx9Jp9DjvXZivHcJjo43zPmgaxkCdZd7K3uwsaJMZMXPQTfuQRgkNCxJU219jmBhiSFd3rf2s563J7hbS3ZC",
  "key17": "4ApgbTgWJ1jZAWhHweZNs7FA4N6vNEiZA3T3S5gNkQDy8VZdGiCAG293bidFvGMceP93rN3RKVDygkqWtD2ETZf3",
  "key18": "EZyNqFfyJKYKgULzrjY47JN9CEqYb7pe6mXFDkVTXGqvPPcq6H1BGiMZP8HC3ruSMAnDExY7n7G7eyiZk3PNbjC",
  "key19": "3uim8NJmpgGg4L8PGcFUVuxmEMUaEPusHhzuAsqAMsRgLhhGXW1qRhRHNPVCywe7wGcqEbkktinYBMpnBPYSBaEg",
  "key20": "3DFaXAr1LcrEMx9Mz3FQ2RjdK3RtPLwqFGLMAtgsH2sS9cfyaFKsDmo3xdTMiySsRpvbzvXmG5vpNjj4H7WNQ8Tk",
  "key21": "54hGgCQ2q9eDxoQH1eCLXJhZiPTCPxiSoypL1hcfN2xTrQFMZUb38VNQpTiabPetdvSwDQHK5oU3en12q6X2D4ZV",
  "key22": "2JmDZRznLiuCVuHwyxMae5UaeCYoqDvXhumuanz7WNs5fehUVtgjEfUGHmkTGZebVRuo7NFgKHjmaSHteNGPWKrc",
  "key23": "2f2UdbAYC7WgkcBBBdafXoeConFi11KVpyYnBgDHZWQUnRGpy4CzwDRR63bwz4do2rFfA1y2uJoVQreGd7Jg2mxh",
  "key24": "3D6h5QGD7RtqwumDxcWD4wvhfE5gxxBRV1QfbrM7KBaz81L2tPSgVwCpcGTkieuR9nHYzLfks35p91HFFXrvC4tM",
  "key25": "2arg9s1u4R7WHEWmH1C8vr5kKMuceexk5UfmcYdS7yADgDs2wtHNBXA5d2x8AyJaQwi8TwdT95Pdhd3kpAHFFAqi",
  "key26": "5cUsoCWujuXKzeo5RozcjwRR8ZrMqbQtB4rxwhdTVazoMZAYmLwMLTmUVYw7ts1qDunEgkw1fPjxepoA8ZDYU5hx",
  "key27": "TZ2T4KYGHjNpz9tnMU3WFjfhx47XSAQZyMbLpTXDDR6fNzTfQ3UfJtjaopjjREVrX6qVdTQB4PyRn7kPJWfbaPK",
  "key28": "5zUyEH5v1BwUYje93Vh438z2vgxEa5osf1kA8NTLksSfMiAFnvmkPo54kKt7WkQBb6eNnXY4VzBDfpZFPAPHQmT9",
  "key29": "4wJfoAsqFUEoM28UdHVrnrRtF5VAFPCg2Qxck1XWM9voj5oyJ6YAwUR2Gic2wLMyDaEBzDvoh5Tb4uq9QKPNfQBC",
  "key30": "U16aEeKnoj8kxVbs59w8gcYb23CjB6qMjvTpmEnpSg392s2a32LQoHgkvvx5SE4kxjVLpy6c5gUxRaYND1eNPAy",
  "key31": "3PiH9TSBePtbUbH6WHByC2P13DYteTCjfMuwzf4p4K3PitcwXwbiFgZJRVRTbH3Gk4XTY8c1CwqZbPWFwkSbefZ7",
  "key32": "3TKWSgVHJQNpkqgjKt9KdVbvDAd9UT8KuzUVr188rVgAjZ8JqAvQPGoLEYMk2uuZTk4UKC49PejxgmUMoscrJH5Q",
  "key33": "5iUFrw6KA3MS1enSHJ7FiBXFniGFJfbpWiXAWSpWzXNTkWGFJtSCWHEviHs4kp3Rr1TjZjxvG5XVedh2dZkGsnFj",
  "key34": "33GZTQLG4PxUmJ9k92z29n9se42Msk776LfKgR7CtwNcMWMJFNuUdpnwbGvgFhohohtknQv5k2bwBH74h5RkMrx6",
  "key35": "5V4D4zfVx2jmGfq9xRu7FjAUYkXZx39zYyequi2nWT1LGXoPdhhr8gR6v2umz8hKXGYG8RBuf7FyBSPkoegECGGe",
  "key36": "4sMnqbeHEZRjFqPbJUM96doVhGYCjAgKJrbDfCRCofdP9GbjXkkw6SgdUtGVvHxbhiBAZC9CoxtZ2qtGMJQedaia",
  "key37": "5qCMuBRvTYJCtiYFdyaLzthxPrUGVZX4U3J4aWputDMVfsSb6oqH5QBkxyg74hdkwXSNJsT4uHtgHfgTcyxRyVN8",
  "key38": "5xCoKvHeLAHyCkLruuWSNyqiFSbpjsAywmdM9G2QyppLLMM1LUVSXeuophgMnQcmYKaW4u564r9NBZG3vW5o31GV"
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
