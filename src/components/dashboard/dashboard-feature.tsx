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
    "5HZtTgqkanR6EBWMv9jBq4j9pgxtxyLmo4wVbi8EBhnTTQRZLPbxVL35fASyaKuAknk4NnsiTYuoUoj5mnJTKdiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tr2LtPYTkUgTSCZcZCQCSUmNpa254PN2zH4XQ2dVbiG8dZj8Pckr53575uiPi3YF7kVP1YszMqfci9fGihgpz6U",
  "key1": "4DPkncYSVKywkhYgz6Lhsp86AitrYP8Wpjg8jqgEBkzY836XQ4eEqDK6w95m4RjjFXzgDmHfvj5n7V9ThBvzGPzT",
  "key2": "263Y1w1Vdzbn7DqETUKyHcx74jYZgEe2KNCBxcZYHi7V5xfsSFcPNMbQ639GkBXimmVExaRSqyZg8KEUXV1eTncN",
  "key3": "JwW71PzHdaFtVwnxU1c7jVgszeqwf9XfqHXB2PqAtibewQ5H2hHcNJBzmMdMAM96a7LYJBSTqQrLyJEUDd5iMNf",
  "key4": "5796Bj9RzUpARDPfTLcdJRUjXkMjzCYd5rmDndByymoy2LyJc3BUPTCfd9kTmUVaVxcqqZSe7eXS4ASUWjYpMtLH",
  "key5": "v5v9kEnUdAYjXaaYVqa817hbW5qwXQTcViZjd8kz2cGm54LoEYVRVoCZqnouLFVQjLVfyH334THZ3uKqiSmVcRY",
  "key6": "2Te5Q9xuLd5qggcCEomH7musQvaUJ7s9tRWwzmUVgymwpdk9gPmNKgPsGEtsSAUBfvfJgKGj2q1rRzwB7N755rzh",
  "key7": "5tGJ3PYD4r34UMK4jSftnjh8U6tWFaZu5Vnh1x4FJmz3GYAC6WiJzWjnaGg7QXXpb252XBwyVtnMV6tcpXgeJibh",
  "key8": "2e4RArihBkrNVZa2Lef7j22eJvnrhjMjduW2Zvs6W5ik1Ttip1V3YSNqLA1VAb1KFaVqo67B7vfdTmkmJJ9fRA7t",
  "key9": "2jTDytww3ZqajpV5mK2HZYp55sDNDPRGV4KG435FYD7sJtHkmM6c9759GUdac9DFo4LESVyBYMZAiPzBXnCxWRzf",
  "key10": "5W6cqGKcFpxULS2X2r1EBwd1zWwFqcRwqb4zk1BNp6Gm7bpwj2QrR3cofQuD3WUZ7dQvCWU9UgmUmHFgDJCFLgqF",
  "key11": "3h2afPbkmjTbxBcBYjYvzNd1w8vnvWZbZoNwYPeqq8KpPnmsx6CcNvveTNDVjKPcFH6hD6NBaCQcEDjB6RvZCXtk",
  "key12": "4gtZm87JLtwa7Vq97DZtPDaufgkmDYMBo6WXmhfdqhbevo5k91GJpMGNRztgBKn7XpZeFCJwknf5bBvoDZVW186z",
  "key13": "2Wug2CdKZrfw4bWkSZqqo6aWrsUu7jixwyDLyrLoAE4KLkQ51s71JAupNaaVBJqxxUtSNbnF6nkWWFoiU5FPu99E",
  "key14": "4e1xmys5VkWcrNy7VoY6QvSyhFqV1cZoW15ZNfH7bkpejuPFtu1eESQ9ikcoWCiGVWo9AuhNMPN6WN2ke8r2EAzP",
  "key15": "3K7Gee5fedmg9eqkkYPTpHVEkKZkYHkfMPuNrM4Ry3nknAgbXBuaNXqk8YUQcoSMkk58GubsVK1HttXeQ89EKTs7",
  "key16": "15qxK3wQFYCKUtPMVN2hgpbPwe1rKZ7krPgE5bgsJCoLzN8QU3ykWKQr1JaBJadfp5rs56dXqiQ9TyBSCJ3BCcQ",
  "key17": "3FNSLmZqmDtTX9oefVq3cPAj525xQpvfbV86VmKsAawy9vc4apQstJnvoXqsqB1FV2kmdVEJRSX1pseXi3gpVvRW",
  "key18": "5yZDXZumj2fpddYg6LjEFbEi3cQtWhzTAVtUYw6C8yb3taCtLkP4E4eRWvKsiRj8N1ebRvPDDZg1X37dZCNXTTcN",
  "key19": "4A6fThTNB1d95eHbEvK3Upb9cdSbj4fJrgHra3yDJ4Q85Gwb6VuFVd4EsnqytK7y1AYbHfsbXnRfz2eWvPBFPwYP",
  "key20": "24Cxq7SGog1i7SghJHUeyvRLJbsS4Zqf3wYt8dpcquYPJzV2iTBWnoKPQ853hoVZrHtLgBHR2bi2Ww1iQrMhLiMd",
  "key21": "4jDsg8da1yQkM134Bu5p32wKemSfpyPm4MR3MFihHtHAEPG7FXhikMuU84MUPSEQeJ1PveSCtSQhjVWCNMauG1jL",
  "key22": "5EiuZ2HZoFfeQZvhnHxS3mYBczNUEhwryrJxLoMfoxK1Bg2661Swkgxy6c1goz668qT3txFaLyKvw1ypyLD3L3Dn",
  "key23": "2SSrXCmQdsqFJC5uvdQxPr3js17zRfVdV2oey1hFt7P3uXL8zUDC4Cc1spw8Gyj4bohgL7E6F55ehHR77gLjMgLB",
  "key24": "pLjRAyPjgE1VGC37FFjvL6RGAisNgTwR9mo6iEwJdmkP3RY3FboV8eZviMebhvpmNdo1c8WdL2qfu1vpaeZjhzR",
  "key25": "5Z36KoNpm1g1sFMFgf4SRQTRCd8kGk597BAeGy59obr76ndtBJAm5MYHGgJ9tH5ZVF7Xd83kFTTxH8kRphoiFKL6",
  "key26": "SRm56vcE1esQrp5mLtVF9M4VjCuVSDcHCVZ79cPPEeS8MYez3YFeve8WoUE6AUEXB5eBJbs1tv6KoiH62q8tgFZ",
  "key27": "4PccvhiHXEXz8rHrPW1atcaLnqypVF1tjYpZnMfAFB1F1YzDQ1yqQy35CkZbG6vE1tWPLcfpFZnFbdChtfgTuaDp",
  "key28": "5QFhKvQ5bypmAbu4hoaR6YjdHo7bWomqMKvJXQgLTusxPF6a1scvpjfeVNgZy4t8PMwgdbaqee82AuBDmh16qAb6",
  "key29": "4yyYVnfizwLcyvA9KY9w1yxAcM6G6dDNaC5bgRttDJETCXqXZTQb9e3ZykXxitT2CMLyo5vfA3YR4cdbHbM9G9eT",
  "key30": "56Y4hJia1ooGiiJBUjZ4qj8MdatDuecEtn6DK3HNN76tMiYdK6zGL3nus6GnW6UDRh7f9ywswombc4Beh2UwSEkv",
  "key31": "2RchVVTuAiLgKzS2hgb5PKM5Qq3DYm65FDdGvxE9Pq3PvsHcZwJKTQka9ewZoTCQ8bbvKsMSsoC1w4hqudb6gBR4",
  "key32": "38fu3EUKiQsgmiYUwbuJxXjuiryY2LVvm3vEz7abS62ZUsBiWWrrfeqcpL11nvHWsjdD3TVe1tV7GiKeBTCyVYLi",
  "key33": "4WPgHXtn7KCGkjyuXwrr4zeaYe8aYRwx5Kf9igX5po7TqMKKCrKghrgttjGgZY1T4z4PmevBwK1vaxUwuWWkbtQF",
  "key34": "3HVJjGJ3cxvJFYR25KE44YG5NRPZrng8KUAiu4bGhzxn6qdXtGd6gFUkMojP1CAb81s5wrLz9wuoASE3gPQc7wyY",
  "key35": "4K72kNDaisAa4TkAbchEkV6woVY7YXvsaqbJTD7awVj1t4VxM2E9cz7VhrQYFLa6mx5Ghu9s1HTCoKQkNzVynr47",
  "key36": "2NQewQLrMMt9ononrQ6kFTvVqoAU14sTy1fQVvDV3NRyNao7AhhfELtUeHJEApTvS4p9CvzR7z7scSd1MFhfVFJh",
  "key37": "3rfMEz3oBx1KxC7zVaVfp7pbDs9E6JHyzL45PeyNziMwic5dDBJbGR11MAji4p73oqdZSLCBYsFQEZWaqLRYKuP9",
  "key38": "2uX3iBCeoVtLNXSSaRbhAaFz13HAbaeX2C3Z24wyReTBic23EMQbT5mSQ6kVLUcYs1BiWkLEUNWZVE18Q3a4MPeh",
  "key39": "4UqxC3zUWfTfrM5TpnR1gG8nVUaXGnLQaJS4VoLejNDqU8rviSKkXfwGqgLtKqGxPVQZ5XpvniMhutftvVzxEXmK",
  "key40": "3jiKuXL5FJo3wYRF8XqW6qjcbEpjSuDhNvdY7kXNtCh4Xz6rNBa3qQKMgYH4CAJoqxMyNXsssQR8fcMePheErcxq",
  "key41": "2mZWcbLvNnRqDDMFTaewewvQbcff9j7GvVAFn7uAKTAajLEWUQnRyNWMFcCuqgiQkPrVF2bAtaX9ka4JH2eYMCVa",
  "key42": "3yVRZ7tJMmXyU8qnmZQ5Sr73zZ8QaRv9xhwe4xQZ4Uc5NiiCnwHTXVyLfpa8gxKBGoGSWBUGs9S3MNuB6sZ93JMx"
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
