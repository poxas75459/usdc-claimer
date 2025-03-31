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
    "4ZyJVmHfordfKL5pr2aYsk2sypeysCwdzvuV5oJgbdQEoVoskcVNNY3a4TsdNnoL6iLmavEepnes7GiEQbDP57gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sut4hnMvNeFkWqvNygbXg8mVzayJfM5QaTCbUnihLdEH1chkaPipMUhmuSn6fogdY5c2bcQ4eLAGAkfJ6rH2yuC",
  "key1": "4SVb3eJ8wEtzayiv3G9uzntUrM5HHfwBQ33gShFMTmrhsXnrn4CS3tNffNwvu5r9NE2RiEGzBxZ8xnYCWaWaJ1JH",
  "key2": "2LyPeRJwybPTJhZYGxZWdzKJZGdM7TfWF1VTvfyGutNiHzuJxSCa7cWzqRTdyiFJPW3uniEWiU4wrYxHWaz5HfaD",
  "key3": "3aMwsDVKGgVM1VQ9RaskHAPjqZvhhqzaBD629QyEkYGZhD6n22BKSKBsaSB3rbJEsKMeRChew9HxSSqELpSbaPHr",
  "key4": "2o896y9rv4VvbtGpbn6RhE5LjMrzzH7rTWkVd1A6UzAKcJriyKKVm5QtPDUoDd9pbCwhmEwrcKdder5oNh3JfXjz",
  "key5": "5dYFukFKx1tP1zmcA1R1YfnXahTFDkxKNyLkJfh6m44JFwsnWKe9WGmgd72dU5oxoemRHxNMNRSvyU98MYaC9Da2",
  "key6": "4X5EJwzt4vtUWTLPeFWecK4MsMt23eeitqkm1AL1TQEyE8v46xAqdwh34jgbRwbFkQKQYoWMQ8Z56eedDBGLkNg9",
  "key7": "2TjLbM5fBc7qTMwHtHP9tF5km7ZzmE3xenSr5mqF4LjtUjWTGS2ppMRSsjdGuKaPHEaaubp1wmpaGCjr24UbcHs7",
  "key8": "2TwTacqa4Qc9CFeVKgPwB3BbaS7BCRK6Ns79ZTWFeDx1QLjZae3eeMB2JtokiLKt2uuyfSvBYD4Z9azov61DiUaX",
  "key9": "5SDYVCyaXWYf4ctEXnhf8Wn8t7Fx6RjeSvu6girVvGdo7huL4anKr1GJxCuXvCHrDR3Q3JYVHeYqmdVZNrVYiUpH",
  "key10": "3vBFdVc24PhEu94KXHBH5LfyMrqeyMFy5tVvngAmExMDTbcD6mfocBso7Hej4LdSW3nuodWNy62zUCpfcLKEoiQi",
  "key11": "3Lm5bq8A2NjB4gWLB3kmovz1uJdB3bys8xtGFgxP9yXaD5fy5ayQiJj9BpWYpyA5LCPv49RSSMWZvUR7M2LSMj9",
  "key12": "4w1KBxqwwKjSE1bMou5dwPrZpqYZS4G45AgCHBTyasBy4BhpfEpESidpgghugzpYVEcZ9x8s3dMdFzCzLLF7gwnv",
  "key13": "5wvWGo7JbsXdWVHjLVhkPZan1n5drGR3pmNVJH64CutPtJXA7e7cJPd7uwrEoVzxnDnKCxBQLhLn7KmXZmzyaYt5",
  "key14": "5LEhf6ZhTGFVCSD4z8FBfdfYvFvmbek9RE9z2nHbbewbygyyFX1Duw8skbLKC1Ep2nrfUcdAiXzG91vvnYPfdGHo",
  "key15": "3VuD3xUWC4t1eHny4vfqj2DssL75da4bQ6DRXNZvG2Jn9uqVNRHbTP5pd6PnRyPbsZdZ7P9PoSgKLZt1RfWC7ky4",
  "key16": "4qtQEXQKa3K7oMPUX7DZau1gPGVuzpWKZYWDXpzcaCEqdGxPM95Vk6hCqx9RWBedweFqt8auEkyjpqCUCY1y7ZNr",
  "key17": "5vnoSitAze1uCx3PNrow62rgnmC6LGzR8SxnT4J9ryv2Q2UiTMqpPqdGxhyxLhEaxZY31yCzLLvSYzCGXppJJWBM",
  "key18": "3cYK84N5uds4MPek5DGhGSEWzipG6T4wBaoocsKNYAndhS8dS3N8trZwfZjv53PUy4mYHaWub4MPB4Da1LUQ6WG3",
  "key19": "4z5JgQLaMGBxo8FehDMtYz6SB39wsmimmm3h2sTxdNxtS5W83AFm2t5J1zZsFUyFtDEAYSkGYt3bY8QtkorofbhT",
  "key20": "3kJnXbYjD9WFWFiJLYUbJJUFyPzUZc35zxbEv8mUNdUPjUYXFgsPWaNv9cFnqKVegZXEfaEiPyUp7aLCUS5cyQ99",
  "key21": "24cwCwQ2VqiGrNaEk8tUHArVuxQHBvToefV9gh2efwuY7yj2DrQU7bM1XujcEJYrgSJw4yDbEoHYbhJpCQzhmxf7",
  "key22": "4S44YW8n26Q8JbZstLoYCZUJVA5YuRS3gPBFB5ikbKhX76PnmoiroAuVzZz1JwN6aokmiDLoboV47khZJRfdayWH",
  "key23": "4dGMKKn7hc6hbnXbBW29hX5UJSMQrh15cKZWPQLJvT2HC1rbfK4w9vM3Rwwp6fGkdmKtzSqtbne6sH95J5cCHVDx",
  "key24": "2FF4dvkod4sGBfNXAQ7p8B3xDf6EMrCDak3ZMgjxvwWkMKfXu899cbEZdNCMZ8gPvKEP9msns79pSyyEhWGKUEjK",
  "key25": "5Y5G95GMZoRa5MGKJH8XzW8bgapp6AC8rJJh5PoLFzjwhDaFN5pvF5mU5vi6XvzTWwapiw1oKQV2XT3gyDM5ZRoQ",
  "key26": "Aag2CHnRA9o5EqSBo8kosdRdLtya4iwnpTPmbfdo4g5vtgRHE4t8hkqdmyzXpfqBxeeTKFCrxfD8XHJQAk8zGNx",
  "key27": "5JBG8zHZAU5AKsubMWmMywuGqTeEVoa83bmp8mATkapXxGjhCVct2DCmq7jr26rKoHhd2GsTze6iECguv8W2a62K",
  "key28": "ncqeptr5RePL8dfPgVT6k6peVqRteprat771UeKsTMJHWWx5q1SXiUPMMfT7Y5V6TQTiDMA41MgDBwStEqHnY89"
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
