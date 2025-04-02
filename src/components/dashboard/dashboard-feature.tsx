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
    "2RGMaWvN6zz6NW8j19obTWStxJzRGFaMMUTxUDfGUoaXPNxWSGgasStGyZNrHiYjq16numRNAUqjLGMoAwE5VqDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLBDgasWfohkDUwKSmtUjhmana2XDp1GdsLM9KoNbpfMBRY3xNquhhnFzWZTA998XxVFF9gyLe2hqkuiecQTSe4",
  "key1": "5gQXtRBwUt92ZzhRpC2RXRphk9yPEm2HkWugseYpeeVqSLLYPsAdgKGVqU2FP7hxx8YMfXgHu1ngRF1SzGunkWnt",
  "key2": "BD2rHhmngJz8h4H8UpUN7LHzpfFqVW39W6LXNNyyR6q6bVnENMC9zFZPugh8SHqPGiWmmVgfa6sc3Da7aQFdveg",
  "key3": "5sQ6BjoVoAKSh8zEq85BJRXMVuBPKcU1y73JSaVsdtf9jRZweASwscRvBzV5zhZ2XwvqtjNFfSmWNqgiBW3xaSD7",
  "key4": "3u5GChGfkkfFmtXyrNNF4diBHcQBB7RetYa3dwDmoDbwmHYtGDdVJD8WCmhJKxW4wiAa3fpS73xX8wtyjNDqAKT2",
  "key5": "26M616AEicZwokA9irXhn3exbQ3pm3QJY4zNGTKcrLXnFZYCfqiZ6wx91brqQFbh6nKuyCeZy4iaFQKYD6i5ytiN",
  "key6": "L6Jv4qjDiSc4iHgiF3s7H3sbyKUDbu3czVLAZ3vrKTMCjszEc7rXa6hUbCcm1RRdpMTMrCvaaUEbUyQ3XAYzmEk",
  "key7": "61vwikneatHxEe6EgwHoYhQmRS8zCjCXRZgQrHetQ9PSmA3vVQcG92otmWfHojL3E79964GgFmuBjoNgiietYA9K",
  "key8": "1Yt6GRj5uihkmtnpxqyGd9GWegD6Ym2Q1DP3nmQKQ4jN5pJUSXt2VKK2z2aF3g2ZthcYa58C53SFt1cTvLa4eBU",
  "key9": "4Paq8msDd6DBRmD9ALKMCdzf6GhXJWX4sUuiJ1jKDg7GCLGnMVXp4xjD5rdYprvF1FSUoPvHU9X5o5DbsPNHmMrF",
  "key10": "5xS2v2MxXN2ySJAKUhUKAvBHEhuY9RvkYYxxio6JpMGpr5RyKZwvvg9ZvnPLRrkJjrtwQSgWcBzhTzp8mCzpQ8BH",
  "key11": "UbyoqbBU8aFgtYKZjejy5hQqytK2qD4ifCd346hHneyUBAuqjDhA1HM81GdUnQEMWc8wBb9dESY4AtRnyAffSP9",
  "key12": "47FCJV57Rwo1QGWPGtTaMU1a2g66J2TmDG4bC5u9RhAEeEjkgctpwQwkdEt2wDoeT9MFLGs3xWjhMXEg9gr4ndYp",
  "key13": "RvESape7WvAs27Yv6fLCrSYfbkNX8sxw8enSCEadowTkNpYopfYEGw8cBaczJ6g7yKyeqfT5arz6y9YPTphHsiA",
  "key14": "3gs1pV6SZ87qem6ECJ5zeXBaD7h2B4xyU7kudYFW6ietqwpf41rK8qJ3S9UGDGFX1TuSCotXxsmzM2WobUb7fxwo",
  "key15": "49jo8yvCc61g6ofqrgVuDfzw9siknxE6ZMfqcGqU9V4c81wCy9UdqQnKd68WmqtiE5mxZgby6VJS7nVAR1oGZYVg",
  "key16": "3dLmzEsCQBnjJBdaAoXcBgBEvkEd8bocuuE9CVmbeKESsKVmtuEv3Vi737HS9rC4eSDBPXcsS1Z9YsoDXzMYxRxT",
  "key17": "2DDHd2tr93EAuibvnawnZZzeUgWQrDDf7yoH5osp1vTemqFMqyPVpHfXruyfdxCwqfJtFGn2soTJAL6boBfAgHZz",
  "key18": "47BrEbk2Pucm42aVau75sbBHfi635sJJfkDogyYbmxVSMRT38vZPMqgM591xH9YDZD7XgRQkaXQVq85pA3Zrv5j7",
  "key19": "4jBWA6YaDyKfsVJH7k1qiFeh3w5WvizKPDvL5ZJxN5BqmWDZp7Cp3VjTqaRDyhibk79L8ytnFxytmise2HoTZGUv",
  "key20": "LcR3f2gEdCiVmwnnLJW18xBShw9ddeJQJidun3mHT9sgsi7pQbUbQaMiQAi6ksRb8ggCXPxyBDNRz8kZ31XVMZ8",
  "key21": "4GMBQzDuM25sEoQGT43JeerqoJDDN4vreWvu5mRQzAEExaaRHknYeYsjMAv3Kicw5cHrg1mfeimJvAy3aFVxjRXU",
  "key22": "XWuHGxA3QvVXvaM7TaKrDu57ShywNGRR5GkdDDdr8sqLQUXMnDjzyNKDfsr7KJytZHF6qVNwCqsY3eAU8KRj8vK",
  "key23": "4nLeCQvbS6NVDCtgS6BHto5x38WDb72PnqmrbuVLXdPg4vaLXmvK9eLDXoMNnJJLVYauaWWTF8nxcnJiqxLRqW5T",
  "key24": "2b7jB3sqHbNLZ4bJyKMhEbLZpczMR5ZHk6gqheNxMTi52b4aNnaVc9cLzvGw77YvYGYPTAC2W9yjznVRFBZZoo5t",
  "key25": "5bhhtWMQmnQe1DbjmQsAt6bBnVD9uA4PSJHVjumxBAar3DNCnqYoDDL4EwVUS4DnYnersG3ZUyZwDLZtpH1yp3Fc",
  "key26": "5XsJ9mhVz5fg9TAi6wYGkqfDGCBy1qRey59NF7AiDBJgQbi8gu8y4bm37HfbEZ1qcwbauPj4jnoez3feh3xkqe15",
  "key27": "4qrwmXQR6xWW7KtRriepGpgyGGuYBPuVEhx3DYzhs8EahgXXX2hDrL7dJG9y82GSxcZXHLfUfbZPdS7PBgzaKeiv",
  "key28": "UCrgXHn8HP7WNSKkA228mhVsjQqE49WZ9ZTmz4r3vkmp795MGkdBJRz1PHdaNtqSBLxFtshgKCDQVzTGg92zgbR",
  "key29": "w8i9nT2cqf5CccAm5SN7PK4UdKsxmcZB7RLrmK8y9TFdd2MTCGgzqfQX9NUQTZTWd6qUUSUr2N52kmT24DFFQ3T",
  "key30": "4nWTRE6dHNZ5Ttt8x1HP5KanKdSZD472kTeLizrSL8zZuaf8HZUNMTK7HCWqHBdCpXXcCyBiZoMsKXNHJcvvUS1P",
  "key31": "5kLNntcJhJp5bM1y9DGqquthV6x99zEEGnPsx9G955qUUjfw5Vaif9AjfzuJR61UvrAFsRsu74Ei1fXkeG4zKpwv",
  "key32": "2aWwQ9yj857BCyUn6TFE8e9tcDHmmgQYRR2i53A4pWk8bdekoXiiUfGWmZCqssG9KH7CZ1MZPzzqpwLjdXchYTpa",
  "key33": "NhiZfNP6ipGCCzfmErc4NRF2usazmQfpNUUVvMedVnL4RcCZurDCEe6akw34yRwiSnhT1cg3EYYyTMsfohRAVSk",
  "key34": "624TfLbLJLCxfw7m6pPwNi436Hi1krtZ8X4zAR1F1xbfD2RY9rzDScCb9KGxDdvCAGYfA92S1uZ5o26EqmR97J7",
  "key35": "538RBYc5cLiLJKznNP8UfvcdUkqBZu29bjr48yWd7VW9gaG1FhgxNCDvT6tkXVF4M9mw6mrTkoL13Eb9ojDJyRUU",
  "key36": "45KrYSJTFtxQYms2agAkmDpcu9We2GPDVnqKHqde1idxij3SjAHmuRfTRkZ2cxEFYsij5m9VYGvMSNjB47Zrj5yG",
  "key37": "qnTyyJUMmbgZicb5aMfTxhxv7DdJruUeiGcFnAjJ23V2u5fVFDzYt29iqdq1QSR7TmigR9DdJnawDifJUcpeVmA",
  "key38": "4vWrQKEUnSRbcEi5zLDVCGdZzBAXFkii3dxLkvdt9NJyDWjL1v4QrXf6TRDsEZCk6Y8ujiesrgWeGJ45opNTc9TY",
  "key39": "4QviQxQVPFmgp5aYCGu3wY8D4bFcVANEzYntPPDoAbMDevcFbrynR1hDxuCEmYuSmfP4SHmYzZmjziDHRZnp2Ebs",
  "key40": "2gN18fuKpoWAWskwq5EjgxukcEaYpBhSGSSo42VhXGWarWNb2TAN7pjjGCJfHiap3Gw2V7UZiCt9WCrqUhr8wp3x"
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
