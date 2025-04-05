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
    "21zLc9RCjHWm5s4ryAKnmarHDqCePFDWWqjRn11DZTDbmzTHLpeVQqyKNzy5d7iNP4Lwj4fYZ8nvEoHuHKj3U1A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYEurW4c6PfG1m8NcB4jiWkTqP81W1r3BsdJQK2NvzwnKf3aVRJGJvqkJqtiUPRf6otLhyvjk2yBbu6DogDhBLS",
  "key1": "4V9JYStiEEU4rQ4W2yPu8WysYT9M2kFrWz15ZiCDwmVmjKsAK6atQphMniVZMNTV7wb6zEk8hnjbZ52c7CvWQWeh",
  "key2": "2Z8q86JUUBuGUUUjK8dtqrSBc8j2KXbH8FpkZFKLzkr4GhVfoNxoWdf22uvZ7toymRQb5GgqGEPBTjyn7tQxC23G",
  "key3": "2WS26av4XU5ywt6ShVAn3vxU3yANe3yFHJmhxqdhS29i7m8Sa3pNupn515AZkH3GCTZjkvTnZWYxx37YKVTVjPEY",
  "key4": "2yP8WP5LrTqTmaTwy2t2QW8G6EuggGxZ6d48jeW3Tpow6ciAdg4YGYkqFNVnrVqYYzjeCJ21TSd8EWp6xspJWTje",
  "key5": "t9rNH22nG5SJbXDFAkn8ZS9kfbTg85EDR2m4fkuqij5a53YSV9yzSBndBuDu6WeakeGpvo42fnMu2HerDGv2dWX",
  "key6": "61BUPkJurDFQQniJg7EwNkiTS8w6rChA56uJVPGH3xaFLMzLoUY7PrTvtWPoZZwh5W1wgDCWv8xaoxBCe6hxZQDZ",
  "key7": "5hyhABn818a5ab6q7PLywLkSRg2rbxV4ifwgDHjDNfTSXk9GeQkYdxNJqrB15KXLDP41gNy3rHVNLaHTwDAcjXiR",
  "key8": "5wsjUrz1xL2BezgMjhASYb3kpjJboVkT5BQATp861DSQ92PNqZ6KkdPc3eQL8E97ALNspdx5LH1ySbx8MAYLPk3z",
  "key9": "66KtcvPgc7y5Wd31W6JkKBuv2xvPQ7wC8ao4CCWcSLkvpo6tz8x4aeVt2WU4fKHDqfcq3wh1EQ6zyXocEaU3ZyBo",
  "key10": "63z8bkBCe1dWNbaJAogqbdEBJbb9jjzKAv7DSQggjRBqr9otiAzWUCujeQdfSJhAhCE7WqFSXiFovqePNujA1rYK",
  "key11": "3KZY5n3SuYENAq8WcyWezZeF3dBBpZr67Pp9EF8g1vVeQ6ZpCmzQEZArt4KJVsXv8tgcrgLvoYKSxR85xNXj2WTk",
  "key12": "2Ke3se4APprcsPtJCVb5hWCGHUt1pzZihzwnn3yCdPv1j2fLFmRToGUj8L1twkHsATFq5uR5HtYN3FYzaWANkLLf",
  "key13": "tYuM72Psgc4fXeRZ5Xsfkeo1grCQJWBqtNf3XRv258XtYJK9s9necHdU5GVKVgAB5nZvrbjx1RQEzpeyPYtDiU8",
  "key14": "3uyX1Fr3PP4T8tn8QEmivDmx6WAFvsbWosVR8Rfh3xHHpGRwwvBEHWNLAt8YSR9pt9gWk43uBBSehrDDMoMnf4dH",
  "key15": "3HSMgD66YuZiWxAhHfy38aBoXAtHK1ooGkZmLChmSB4Cry6TiNwdr987nZWxT38g2qKLEjH8n4x2Vvkp7RexjT4f",
  "key16": "2ZqYNtBxhqBQTGJ9WuD3DwqnWGwKbmGfqZoFfHK8T976nLL7JER3Ksb4kjfft3HFkVkLxkb5bLRTTTq6nDnXZEpY",
  "key17": "5NPUjAZYk7NvLn6m31kiA7f7NzkPn3hg3Z2SY6USKHsH8UkbDj2cJa1JtMjJV5c19WZakiV2p4SS5NriBaGD92E1",
  "key18": "5dnztrJLuL2beYT1zwDisNipJkSrfXKwrR3fWVgSWCvPBmuAnoiuqEoifVfvq6SxDBxJDLi6zFz8xqsSMAfeDwrs",
  "key19": "3eMKu9ZgNhhmWq3sVMJNgowYyi1qMUHyVJfp4XSTCDFR7TVLxqnsQ8L28V9VuLQ8buad4eubrXScXJH2yWSGg5RW",
  "key20": "4i4ZDYv4zmgAXenMfKiPic4XKYErzFxjeovsdR2sSiAQW2RVSKJrWYhLeB2w8Xm1i8GBwNZMCpPzoJLcNU5wFVGa",
  "key21": "Ct2J1GGtwr4q12VfpGzWCET2FKmB4Ch1iD6pEbLnxV8nnN9LtNELxPeN8GWCff2Rz2kJiaUeqckCyb54ZDKq8FD",
  "key22": "2hk4mjkTH84po6fmFCecKVQmRVPJhCALTtMPabP2fYY1LH7J6BoVh3XihE98MvYedziKS3XXDbv9fDP2ZPtHt5ds",
  "key23": "5pLtDRhpxDyvXiE56gUE2xZxf4BQQiV7NyPtVABKQhvt2WjurgWjwkxNBnTfcygTXFGs5PuuBaBpqD7zeb5USp9b",
  "key24": "gwq4hTtG1ZrgkUViC5gBheMfcXJJDDLZReuuPdhdkndNJo1dGBwf6GeJ8Tejc85ihKXnnC46frxstNY5RcxrWRc",
  "key25": "1oNY83Ymn7PaX2mXFWLQbZmd6ojeLAqY2st3bfk31VtBYLi7e2RY8SUTs9fediYMhiE763pkJTQ2G7KBDN7cr7y",
  "key26": "5LpMW4U37YmTJxHMkArALtzxVya8bJcu1MtZQNCfLhVGyYaPJpzRrqKtRyJKAzX2Kkxm1wHt5QcZCPvR7UsnvFJQ",
  "key27": "5XcR148NWrpqic1iB7WLc6dWLj7z5gGkrH3mTkDhN3R9CoEn1JVHo5RfwJkVNePj8PHn5JH3yh3nUKQB4CGUrCR8",
  "key28": "3VAnsjESD2dCBPA8aorYk48TW7mWXpmaTFx7ufd6RqF1hgtVShe7QBgTKc26ZbJ4wWiuYHE1znmtDnqnifx5k1kx",
  "key29": "2p1rgMZoioYt7YBF8b7Gk7p9r2rRgtuyRhZh9K48iEsUpMEaMitYQwC45h6MTVQh2fKraDZbxL9RNRypFDj3HuXM"
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
