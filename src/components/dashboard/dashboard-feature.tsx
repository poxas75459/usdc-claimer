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
    "4Q549VwSviWFANbG3xeT86FAAozPDjoNSqecSqNS841AWxMuVgDPUtx5bNyRDsHg7yS7GHqnNbvhqJCuXwe2Wba9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQF8nQQYfA3goDCdTAubMmc4qxQYPBbWtXUneyiANU3GoWXjPKXCqKtx2c6zHTxJffFiBQoL6GxfJPhCkGEuwoa",
  "key1": "4F99TRC3uzfqbixTcc7vFr2JMHc7Uu2uvxfPkEmc9Tae4zstFBbgC3ecRcHsJjnUbQVJ82xmUWrncXpP4Pce2t4x",
  "key2": "vMs5DeHe8jV3F11TRiibdTmnx35UmXg4oraTY8DR7FQF8jrB14EVfNbHsg1vrg2owUX72dLWwaf6y9hp7vinFw1",
  "key3": "5i55X196WR6ApCv7Tb1z6C98f2ntLhaWNWhR133VK3pMjAtSp8pFE5z3dQYTJydWyUptfCVEMGYV1QM6qayc5N4R",
  "key4": "SyUV4GJc4EgcFVRRj9FaKhaixX3nvyocf1fQyGBdP4jLdi7foneMb7GnaeL3AqPiedbPVGdaLV8NaHJBWotMXDo",
  "key5": "4vQy7dc8aB6b51sRtimzYSSUPVc7eHEAeJyvJJUNC6sYitfTJSzrdcP97gq6PzhQ5XA7Y5W4eLHVfBW3dk3hnMMU",
  "key6": "56jzPUvK7QNRZUAAyXRVmCNj4AEjhnqac3hTKU1r3CVp8CjUZY6toLRDe4uGaSkz5jjJsFvpsanLNQsRjvvZbCdH",
  "key7": "4awSq9MCLiyV2Ltbj2ZtJ6bTWQHn9ea169uTQKhQ443owf5jpPwPJ2eQgUwi3RnqZkhMUomA4g77Qjv57VQUZpGx",
  "key8": "2JXSHWAUMYcb8N7wBRLjc6ATntdQHLjDvX1NYawFQ5Po7WBbxPqtExkSmhuaSfSpVdaHP5vNYK9BcP8HjqDhAjqD",
  "key9": "3HhJCwzrXWbnc83tGi5P4kXpLdzjLMnpxRZr6t3A5BKKh6r1ZmHTq2fZD1SqWX3eWGV5fvD6CDeVqdGPmpLJnJY9",
  "key10": "Q3nScKsddxxC9UdR87xD1n6qSgA7AGf5Vw9sVBvywa8Q2b6gp81gfGHZFKTAMq4Jo43KEfx3x55f5Hry7f1N5AP",
  "key11": "4pD4nNoWe4ksFe6H92iXuXnL7cet5ngVGdgFShoBwiKrVQpvVVVxA5tTECPtbajFPbVtTNBCDrYtUvBe3zGrboME",
  "key12": "5v8pj9DqpJMQbSrfsGwr7YGKCP2h8aSEisE4bXWKAqY6QAWfc5ft4Be9fqQFr9aSkftvgRLvnVBa5UQHUk9TevnQ",
  "key13": "GeTtsyKKDQTSbWbSxBDQwXigRb5rufqsnLEKiAqJCApvo27gUzRMDvMVgBN1yZo9WWUbWWe5bVb3kp2YQ5ZwatW",
  "key14": "3cWehRpmcGPPcTumn1ys6E4yZZcZ6Kofra8qiE9D4TosuXy31QFAaFFRrNmwm2Rwkwc5DgqvdQmVDUafvoDrFkrn",
  "key15": "4LSLKByqTAjaHV4QbjzTMSsBJmQMBec5pWNxuTVKGCRu844qVrJR6fX3NLC97H4R89RFY3G6KHsMZxT4cVE9bPJQ",
  "key16": "2tfHruh1uCneydpPc37VAi7Po5b6t3WoujoKhvhTjA4uo2UmYzebA5WfpCH77poiL8742H12D1CdLnvSDmG6VFtF",
  "key17": "5yA3scfetRHd8ajtjjDbfiXdPTLvF2CVgG3kq5VHuL4dxWQjCc4ihT714GGJVSYzYpqk5BJ6MuWP1Zfphe6P1YSw",
  "key18": "5331jZq8vSo3nMsTdWiGJRKjVqvFmEvScuowk6sNp63PByjY6vBQmAzupVr5TqRUmsRBFRmHWAb5iLAbB2fS6bKJ",
  "key19": "4MM6VvD3TLup8W2zfLSbFbbdGwDDH2tmkdHd6crxyPAcbqFmHyzxZVmek5eM8sW2bk4Ta42FoJcdxP4nGpM8bjHo",
  "key20": "63PYbWhSDxQmt8VQtZVRsxNv4TzeSsFxHohxLnjvvqoEFpDDkUNaNzocuxCQF7rvGrK4HxCNSV2baJekqPRzj7Lj",
  "key21": "25UGvXdpodAWUvnpdYJyg3YnabzjU3zP6L7xCgfQnVSLsjFbqHkqCqjn4V5DhMsjBd45sahSsv89f2FLhQMdYqg8",
  "key22": "521cc4PafPtTR5rWC5xXaoYVho8weBynEU54XDyoEsTQNuGwE3MRy5V2DHmPQjDdUg3F4jKyPx2vtHyDcnRZSXVH",
  "key23": "3aWZwzpmiY1LzYF6HcV9wjC5pQamSqcdcB7WkNqQSsDfyXdZam4KoAbw1AinDuJzGa3fNtgsCw5MTh1kx3HcDDBU",
  "key24": "56PhTWVMuhdDneCGHjdwYVWWeYddXoxGktupmCW6yaEMJKstD8zqDVZpZ4LLyXB3ZnUBFr9KbQTsCu4Et93PP2mg",
  "key25": "55phLJA91mYDfG2p5wGjnJ6YJhdmTamwyTmgDPTduSP8QzDeCcdBu798LgyhavkULXcaYc4QEV4H3wNN2Fo5T9qh",
  "key26": "3RTM5FE279ZzYNkVC4KE3c4oLNm19eMau94Vpk1rorrtD4b9uwGhUQtW5cLwhtvaQ7baPdyeQYkN7C7gauAkPeZq",
  "key27": "2w4TPNUyd6Ej6d7AJ9cyvY13p8bCWW6aMsxBeRJi96p9ycvJV9vX7uh3CNYAMrCU79AFzN6fvtab1KeN4nMaVCAE",
  "key28": "4LgdaXuPChgqUZ1cCbzFrvPqczSQmokQTXMcM3kh2Qcn6iM8M1jTiggiBEqzBTnQ5EYse7BnGWyMzM99rCmT9q12",
  "key29": "4mNH43zLBiAKxZasxXzzCdqwxf9tfX6xAevdKEwRHFxEZPHnM4P7gxmjYjTNMtct7Ui8geoVZ4XEFSKPgpdvpSME",
  "key30": "3aeLsk6f5By2C2EEA9XmBh8Mnj5QGk4p5kNJzxRgzkyCFmfrxTnjSHUGTNfSgYzokyHdTYU6AT1t5eCUhY8WE3h3",
  "key31": "GVkvgum7mZVd7gH6PnX2EF1PK2uWwJtow4xpFF1C7AsXPpRe5KGWMjeQK3EUjeitSJzH2BSLPNswcxZYxfx2SaP",
  "key32": "3uc8jNSB1Hf8uWWsAUCDQxF7U3tPNDTikPwfG3b4dkomB6k7JifM5KmjT3mRXh5SkEGgKSQm2CJfZgxxkDGTRcq9"
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
