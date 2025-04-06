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
    "5ZBiyPb9wxh6bxM4mFW3mg9zBa7BZnup7Ej1yWd8YEfK3SpagsVTQnY9U8EKiYi764EQx2DMx3dyjFsYaH3zNKxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42LwWqYJ6CAHT8Fmav3SVpXtmneFz1nDTTEYNLEGYjr73v52W446HTxeRgkn1rYKKi9cfu4iCJvYC7QGKVoSCSQu",
  "key1": "4RrTLzFWeiupeLja5j2f8nNTMRX4iAJzn2v26jeygvCvu2gzr32cp1aKXT4cRqEDPmWaS2AdriLH3GsPAc7ct32n",
  "key2": "3H2H7GqBwSJp6Bb3qrmBtsgHWHEsgYLGsvNuyLP13DrPRSM8TYzQnwDA9RpeG8JSCztsh7sLKfbuS4FaP6tkBg9E",
  "key3": "47xZ1WpvmsH5w65kSqJtvaLrT2UC1mXussJTWWqJiYgQqCoCcfuTFhUdCVbpmzBo6dwQyrExzVhSL3UG2aHawuRY",
  "key4": "5PcDmyjpjXQKuMURFaUb3jVxESWqNuwkrrNdgVqLLUiKvbBU4xa6QpshtFM2dCMj7Sar97Vpq3QsL7p94r56pdFp",
  "key5": "3Yv5HiUsvNeHBDXoZXhv4EAhs2gx2HSdZnbGNJ1vKxQNcAuz4DZdEkLpyYxMDgDkmrWVStcK5hmrvarCKLsmyn1f",
  "key6": "3TYnXfmfV6DjVrM11nQNAWF5ba2QbGr5oTmXkjmY9daqVpB3x7NkUxgPafWS5ZtPJLADvg1i6rxpzcrfUTFtxqYM",
  "key7": "2oXvjufvzHxY1shdAyv6ryn1nLnUssKEX3kVq5qRQE2bdDDZA4iCoJWsNtVFTZjL2GxFgemFHZGr9pAdDNpzjJ4f",
  "key8": "3oYSDKrAVnnT71153nE45wMcxA44KQh9KPvW6f84rpmpgoH7CQF58jthNrdbXW6HT8H6RR3JqTGk5VqFNRPPTyMJ",
  "key9": "gsQWBY8JswXTcHbK9dvKyKMZADpvg9c9Khx1Gpta1rwMHFsBVjNuzhsRerTrXzUYjB6i4x2z5MbdHRv77XayGiY",
  "key10": "3iXqnaShEYnvbD4U5sTj7TQrQ9K7ooMEpYTjH6XUEG7Wqr2UzvcSYfE937WGJ5UqpPqSXsDEwXbMqecFGvMMfgDJ",
  "key11": "4ZNoW6NqFfEy48rpB7zj3EheGJ4hHjHVUsSo2BRKHJMdfJvCXJ3rTEiaEYtiWYp5SPpVckzwyuBxaR4m2UFkpUdo",
  "key12": "3gkkqrXR6ihs6f1HkpAi6cHSPPNFpqQMdHTk5ecE4hYhT2fJWMFYxurcCtyo3MW4PQ8bcxFNpXaKW8fi2qqGz3wA",
  "key13": "2Wg1PwELNhNkJY6LZuo6zkqsran5zrwGAPedKyVd6sBiSWNctzA1tqKesf92k2fUr6zhAqz7EdPrzNR6toS4G3uC",
  "key14": "29Fr35tge25XrkRkAh9zGPf61yAzWWiGLyqANAhdDk1ucqWHtoRY1ehUTkr7NEZeHvGSEFkVpdpD5fPdUV1wY36w",
  "key15": "5M2rxaRjMRGGHVVzLcQXiUGzBG3FCsMhFS416SEGVKF9DVeB7fLLa5pxxdtKjNfs1uu79r2nq1EcZ6U6A8XPrfic",
  "key16": "4iYdfzwaBQs1tY81L24ZzKmq2HyudDxQ3XWf3dWAzvjtSyevWtmWnjUYfs2JEBrSeNpgeSDvBCHbpxaU93fYRnam",
  "key17": "4sKdcLptEq5Fk5Dy55MgwRSVUNzrGfWuf5heTYjeapWKtfP5pLJCZDs2imjJmq5tWdW1NrNgdqEevq7rLmQasiHW",
  "key18": "2iCYy4uEnxtfNGDD3yvAme5aqcwvkXuLaUu4YHewUVH1RVfr2pbHuaYiCoFmTGtH1swT9vGpA9RwxJmf3sD4m8kr",
  "key19": "2wMzhSSThJbe7uiFgLAXUkA2q7PQbnV7dafgAhc37CkDubrHFADBLb6KCgN1kBtGPVNfbiiCU9ayEnnCKQo6evYd",
  "key20": "5Ka9wB5EnozsRkQk9jBwEGvZX4nBr1Ce4xyHkUvpah6oQ2fh8cUdyME5HLvp5sXWbcfdXrBTdHoTRSw3qhoSEhY2",
  "key21": "23SXX5SNaaGH47sqTfDqcj4Hz9bcHHVVVyR2G6rbE5vVYB2jRFK5GEYf15TSwaZ27zpKVJNh7ePF7ykzRGpEk1Bw",
  "key22": "NVEHJ5WnPbeEajHaHDFWdH9o8DDVtG42GMK8TLBEQgmdEKHTGkitYnNJ4nsV2BpWUSzTiiFbrNfqaG4xbfoDNwf",
  "key23": "3Tdv4nfdaD5CSgTraKr65Vr8VSEnYEePWknpG8C4z3uDspwgpW3R68Gvko6wTiLAobDyraFverZHiNej3SnFPPSm",
  "key24": "bTF2TARX3oeqre8yvxqgRXjE78dGPauFiL6EYhbXVYoEQ2N9NCKqA9UUb56dw4wLbdapP3oP19fqehmtWKZ22wb",
  "key25": "35eBwyGiCnSLVAKmz5QKKqeZ9Q1Fp5A5TwpgiHWuYf1bnNcz2DhfAxBecwQeiQtAmwuVF73Q4qzvgxRzegEPBRQf",
  "key26": "3CPSyvFqda22HQDPJhn6xy8KV26EdXKaLgVmsfBor5gUWgxsRGwhi14vceSYHCD5mn3eVg1oNQak9gPj7ueuNLvZ",
  "key27": "yyUd3nB7LbQBS5U5UWc9VGVoiE6QyLnLyjXNxHf44dXLBXQR15YPz2KwzdkzYpgdLk76ZPq9eTKh7e86HmRCXJC",
  "key28": "4BXbjLuwSj66R6CZPiMXgRm8hwJCjKmQrtLGZjMP1qWcGcmA8MFh8xPzrDM8gbxug39vt8cZiaJcP6bLVdmqavhp",
  "key29": "shVk6VDhoRHUSunHiaCyrqWq7NgxUaCBbPcv1VNK7rvc7UE49a41ReCqaQTc2gozbaSqSBqVnqyWiWzXEe2CyuN",
  "key30": "Y2pdEGB6rcvKC5SVB6pwZzujk3XeknA6Wr8zhS2ehV9GHVU6K3ZUvbxDMaFj98ph5T6ijmAifSRATaBhzhzqYgR",
  "key31": "5RVx6nAT6Rp7DUeoDKy77KYb42y58DL6KbBaVybwrNsCZE18qUny3wFM1fcqUcm6t11C4rr1Labh4nb2S3FoHSvA",
  "key32": "39Ua1HEiACCwkmFBTbz42KnJnB6kdvhgcK56o8HVLfmwTJFYsc5SN6BKjquAqXeAiqyLqEeKeaXzhqxpmsB8SJpi",
  "key33": "kyofb3tozueTy1F74sa5L3sCvcbbnWWBCXZqUbVM1VohZ3pvYTfeuUuEFyUHK9tALsDx8KMQMYw8XHwCfShaVoR",
  "key34": "2pe36tSDLyKHFazeB9c3agvhSg4QWbtuFfUZnq6KjFFsPkUfaBiHhfDwyre3DKx2iAYcCr9TuFJyKn9uGYA9xqRj",
  "key35": "3txB5QBQqaWDXMJXNM3SzrUtQ4qnFAvwwjhJUxF2GyqBbXLZQd1gwShGGX4qCDvKLT9ELr9gcNr4j3rXUHzCQfRd",
  "key36": "2HafGqTX7PmTsBacNARvbbKdYZZ6TwN9AHF7UF4qSLYiuGukFoyqoyAm7WRfRcjZiGBeKRf9gFrGTFvwsH8UguNY",
  "key37": "45Kjjj5z6mwh9GRDgEehJi97GFfui1GoCgbgu44wZy53UDxQjJVP9zDnAbLVaF64kDrHNyWTfkRFAzoXP6DKMkva",
  "key38": "49NFFZjbqEhLDnZJWatGnH1FbW7Ysy72Q9ngTmZejnQyhu6BrjLQa53wJgSfG13T7VYdW5jGneRiCJQXiTWC7cte",
  "key39": "4ipw6jkuLh8X7DXjjg5aRJJp7LAipZo3nvS6k3tju9gEfwcyxfrhibHx345kbN8cptL2GBDBVjANNCw6VK5UicDp",
  "key40": "3rKKbNeRh9ESgJ4jw4cLK5115Pp3dVXvwQ3xhoriGDKwe7aP7V83rNiqXvoNktkq57EGvQVWUuktJA5gpjNB9H43"
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
