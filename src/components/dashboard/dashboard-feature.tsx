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
    "4FhmfrupFtCQwqKhCaEfWpzKh9NCiKY89d5iSmK5vSFPsPT9MufJb5fCxJeuVBUhdcZtTs4NjhHbQvXComB6xF2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LchS4E76bBsWZhYChMgwYpELoJJ3MwEDBV4Uv7X7rFjsikD7KbsyaGe3LmHAUWqnVLpbHWdddhTQiTsVHoxq2Jm",
  "key1": "4uykfRrGz3Z6S8vpUgpVcHPsY7oWcZy6JGqLahpi1C1zBt7cvuufrk3tc5cunpCsJv4FKgf61C39o5cd9gkHE6iy",
  "key2": "2RTXDkxiEkhfKx9cqcNDMDsPWtMPgodUPCuJn35rVWYH8S5C9y7PiNX699SWL5a7P8QRLabkfeByfgDkXYuvbRB2",
  "key3": "5AJ83hhVzF6BWfxbtowvzwCpFGoMepYRDJMeDxEzwUkxSuMSUi4crYLKYb41qmrhxj98VRzMvzQQkEyFoxQ58AJv",
  "key4": "5V7bFWthEnh8KzFmrBn5AbHKjkKcfsKTPrt4uxNBuSfSXtStY1TuUxJ1MBoWdvc7RS3xKrNkhLpYYvj8Zf2ozZwb",
  "key5": "W5qq6eJnYBiBUWV9UfeojZ6tgoCwyVPNHY33xfLbzvPH8aLZ6jnkDecNQ8Lj5DVzZzG24aSRT4PNHU5VsXWfmQy",
  "key6": "8FrVqDZ6YavSgcneLbQAKWFdcBqtzrxf42frwh7rwxgk8bGqqfpAE69B6vpWXH933HpGakacfE7onHQe1ktPnBh",
  "key7": "4RsMFv1uF1KshDNLDeS2VaKmUztxm2JJVrMJADvpRJ43vtpXQcBN8y7iQrrFUXSP38KukuZ41TvdPENoGK256aXj",
  "key8": "5zQej6DPJHGwUsz8NvokTq5n6iGF727eQaTMfjYKcGn9gLCaP5TZSAK9pzbmjiUuVXM7Yr6w57nmAQXKncmRi1XA",
  "key9": "2fWiyQ165VN5DTCyDKGFNviGi2Ly495TomhNQHo589TLG3WDtcCWGfJ3bVJT6X33dZ9jYwPomqS1jtA2pFV9jMGR",
  "key10": "2grj7B1HXtXF4qFetfz4DEtrW6oYR22SoCYLPU4b1sb61FCzCHdqmws9HEuDXmYs5HAJHYHWK7myYmVNQhsRYoyR",
  "key11": "2kRfQfCNVZiZjHT7mWbnK2cYNP97MjLJFh2KGSxprjS5iSZHDDHGHsKmMGK8U3SJ4me3p7tnryC4YTxPcyKM3XCr",
  "key12": "5AvqtJFq6hY8t2gXWNdz894CJQK5zqsE2wxhLxUYcDvYtG9hnRhtGGpoA1M6AD4kXdvrAT2xqMs8SipPpTmtRxck",
  "key13": "3jLP9JtXQsrsEMZ3MVK5NnWx2Q3gG9DuhHZyzhZ576bM6fuuWwKueNcZnK8MMtcMsoHg8tKc1Et82Lwa2uaJZ9V3",
  "key14": "2iYjjCRaAKY95gNt9fppwAsE2yLSczwL8RZijMDB64gNNFNoWe3XvfowU2byZHWq6bMqsLh3SDS1AeCNf62DkF5T",
  "key15": "5jgQbo4EqKjSZGsg5WUX8mL2XMs3Dvk21ADAog5nKxbbZuk2NCEfvSD2V8KXBzygi51LnTojskeWL69PG7CqtmxK",
  "key16": "5SDEhmRM7WAYz8CXuRX3kznLrKEo95pcADAahvrJZEjuX9mJcKCab8Bfgutv8hqYeQY6yBAPmGPyZfN4rnaKcW93",
  "key17": "5wbg3x6gyo71sNCGPsi83QJ167RLTbxbFqWDv5rKKbo3BkBo4ith62DM6dNZkVRRYWB4DsGH9gk4kpKs5BBQirBA",
  "key18": "54Z8DmXHX6rHZC8FujnJL4zwMNwwLj6wGdhQuRXCykTs3H2o35XxRRoL6YdKtiftXHeuZuiRtqqu7QJ3qyc6wWZF",
  "key19": "7EdT3MSYc4EbP88zM2khygWEJ8NeSV9VBxbKpoY5rhtmz8pPavEHKKqgB6Zw6RgYdJPZgWvhHuGBrcx68xqbEYs",
  "key20": "24AMcKsNXk2hueevbp27cv6W6BkjX5a2oMgPcjEL5eWVZTWRZ777AUUm4z3hdyhgNGsioqazkcauB8j9b52sR6g2",
  "key21": "5sFBPy8rLy7BfEjufuTaY85b7xZBQz8KkyGQZJburxQiyXckqi3k7cw7QLtyVemyj5rLJEvZEXG1bRYdcs3bdzzK",
  "key22": "ARDUGJ36tFDqqsWAVoDTdqLVMcGBaSwoSXF43kjw5XCar9ZuZmARYmcjcL6bC835Md89U1Pe8j4MTvGhRt4D7jw",
  "key23": "5XkcEWBfLwVDsMZnssPwG3sLD86ATbQHJThAFgSoSsmqW5YJ6ouJZmPRMGcC64LLKeEcP8SyWnLoVGZAZe2XYnQz",
  "key24": "4DN59XtaU7yHfAhgBmARfJ3r3kwQQDNJ1V8xnbCLcGFRa3t5x4XRvDmPRUVFKBBqzZumNdBtQk6GyZjCHyJFDzQg",
  "key25": "4cyvYsr2kEr8z4vqnKcotJyXgVX1T4Y7PZb6RWhp3LKqyPS7JRYSfZ3gxwi24WWfdqr6FexAkNioLb9t3X6SY3hN",
  "key26": "rfbe5bRvNUP95jmwaQEVFWonmm4ZsqFvTytmHb6jUwJQ8trn2nMNHg9dY3eiZ5TuW7F3GPqEtNdTvhcc9P3pPvJ",
  "key27": "5UEKPyws3UvjqxXgvQVumXDTdQgiN2ep7bJemoLasPxNLaTG5xCnAAcdttVNqfcgGQLaySeHvHJpHqssx2JgsH93",
  "key28": "23uaHJaP1BYHg1qzTQVbCDr8eGNs1S8qZg4JZqavesW3gfRi1mxdydY3m4xRPG4fCWSBUcJBJ321amTjoDkq2ojX"
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
