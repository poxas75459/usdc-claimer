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
    "3LfpNV4zN2QKMjSK2dYYjQ28MYCxXWXo65YgyMybmj6Y8AWcohf6C45NpzeWYjGZJWPih8vftbpYbMoYbujTDPzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtX8Upu6VZmJPxfDgsStt1DJp8aavi1j4qPtLNoXVJekjevPY1MhAv8rtJgAyZ819okCipR4RrLTFbEN3rJ7Quj",
  "key1": "2NCTpGt729JT5Pvt1ek8YrcDXBUvBfB7j8PvbaH5LnWn4L8AjygkNJoa8uXh6JZsnUjqXL284NScZWzTAjXCVpGA",
  "key2": "3zPaz4k7eUEv8okEEcQRASTc4zLKj8pX8oiCt3yamzXP4siXmVGcgWXVZ2UZa1scrjHYvs4bkvAjTrx5vjuM46JV",
  "key3": "3tUXoE9gUZhqP3AeVCs8fFQtg2wHcowdJd2uCRqXAQcZieVQoLfMmPdoCAVPY9EGSmL37CvpzhuACLMbMvZuwgww",
  "key4": "3CrRxJzZedDD5fKdjnq6fJwTuLtk37oWEs6p5sqWLuzKyguJuSqy1yj6CPZgaxJA2VR8bSXccYEuTkeAzybfsFQt",
  "key5": "bqtqs6CVKmimzpH9Rw6gRzem13vmYvWb5NB5AwLULrHGdy2qJgJbxm9tv2vbuSvDjrdmvDAuPPr6W7Awv5znGEq",
  "key6": "2jCWYUmhxgmFLi3HYpbHVRkJNc4umpUBgkCE8JVJffdHVdrLi51SWfCJA1dvGpC95Vb1geC3RGiioHRMY8fmBzKb",
  "key7": "3wqsXxP7sp49M51SbDvzG5n2pTm9p4KVd5xhqahL3Su8F4AJF6pK71ZUW6JeVvnevPuea4bq7F5ZdSQ7UWqXW6Ki",
  "key8": "3WpPP9dp4Ei2XXS1XXex2qbC77fAwSaxXri7wGP1c3f5sKM7Whfq4kXpUCjFNPg8cxkELx7aCocqF1CGGYbC93Lu",
  "key9": "2nMVCug6qHkggpeKy8xU7YLdGomoFqFDqNebxoqnvvaPCnUgyBXTSaSd5NCaPwYY29QgWEhTkza5c8DCvfrr3Znx",
  "key10": "4YC8ySjAgD5CYh97xRwStm5hPK3vsA7yuF5CbSSWYJx7AbZysyT4ZYYhoG9ERVGVX5rirsSnwhsCSmQnQiFben8q",
  "key11": "4TL5aG8mRGJi2aLaMXGCam5YL5Hi96LKdhvKezLspWrdohsqWnNfjJeWcbUcpbjC3WKsYAdSuiuYRimSv7T8ZcNr",
  "key12": "3rvSbJ8Faqft3P9n5CPStwnbQYsyWvVta2pwmqUsYeFfewAuXTMfAhR9TDso2CvzNYte5USkwJ3bqYj2qWjKzrZg",
  "key13": "4a8BXF5WM2RrM3zZ5uK2oMzRo678ezkMB6Dt7LQ5EUGrobimiixji7CKZ9WoMKPD791GqAE8V5zPSF9nR7AtFgYU",
  "key14": "3iGCvjqfK8CnrJD3g7KLo61M69aizzt6M1ovfC8XYMJveRwNG33qSkm5K1Xkw1v1Zgb9LgZvXbbB3bV6WBBR4ykB",
  "key15": "2YV3AEeHfVRTTD6yLa5LnQ3N7kR2f8c8WDerkC6fjQUxxJuouETFGQXdds8TSbkYmVQ9cmkrALh9KsMfpM77is4W",
  "key16": "2xGnpfL1KWSTqzuGZmvm63NtoJXyXfAR5L9u8ntFwA4qoweCJXDYc7QW93fzEkBs3RsKnG5tnmKdBoh7qXQWvheM",
  "key17": "uwgos3fpdsJw3J2iRWKhayMKHgZXWxThZRsPeyjDHUDMrzjaG74wKyWvZahArnPQX9kzMzHNCmvPY1hWTukS5er",
  "key18": "3GxHYML23cAVxs1w4oWMNkK2hinSLc5nrvtZ53ukj9yeHxKv1rEHUtw7By7QNThCacoxxLdz92aKjZkLvdq9b73k",
  "key19": "5UgzmU7hF3Lcjpxuj1Y9q1QoAS7LnGwJbBHk9KxWFdziEwkRXMKHqaeb59qjFwQaAc8J8sVrfGuM8cyLFRkY41kS",
  "key20": "563EiqEbUsCPTYKNR26LhApFZCtewSPzfkHEmXJuYuqUiZgJ8TeBgPaumJHiMkGWpMrXw8rpB76XfBzS61AoB1vr",
  "key21": "3pstYWAgdYvsvqUhEuGbGZdGFmk6pKUUyrSKZPp5P3r2FgFg3HArUHXEkUnyQ9ULb7re9LwSqQDrRcofzQVXXg88",
  "key22": "4YYwy4KQzqWABqxf2W6yRYHRkLdgmZ7nohD4KGJLWTxhBWvmqqhKQ8oj2A5zF15joVay4U9yLnhWjGASqWuKKpBW",
  "key23": "55UvJDHmdjmrUdAuUJSFJjL6pAwbnmChiUUqL5ypy5WBbZLFQRa6p3fR18QZbf2xKM5ZCW92Dkto3B3yzKkxcmUj",
  "key24": "9An28M2LvDecq6UTS5gaiqmarMyRKxa2pzbugMqt6y3T24smJxL4xaMUWSmjzz2WRmhrwy2atY7Cn5mNsMR15B6"
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
