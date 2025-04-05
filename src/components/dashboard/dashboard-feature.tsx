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
    "bpyQUQoKtQYYNwdYahugX5JVYo2sZ6T3u43zSPcgfQTwb24R34dv1TpD9NG2bHLsHDqqbK5KPZ114CTRVg6oRDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SCgiyDB3AHxjFPuTn9rRTXaygDoffCeauV9bGTgjUqNMjNzcW5y1D8Zf9V6yRwGkdhWzFCuqcvscCqpStGBHy8",
  "key1": "2k3Eg94fHcneCMF32symcr5SbdJyUinbunDAGL1ftM7wRA1jitJ9ftXLSbX9LXA8UouB4EG3tJNiTBF33FXekDRq",
  "key2": "36yGqtUPwGX9inK8xQJpCVcHzMrtSbELVpCgLbHsZfV3oa6BQeoYUzpwhz54P77L5PABDCKXNMVGt7HxVdt87spL",
  "key3": "3kSdiwGZhQNN7JDd9XiKBbQpKgM6Z5fMdLyLjUrfu8ugZ1irMyUY7Bs77pGpad4mou9jBdVEoRx5g7PyAGrdY9MX",
  "key4": "51SfZj1Pnw3Rughwgndvc6Q19NVSc2PRtUcTu5zJwWfkqcVoUzZnSU9gr8hpDHJ2nw7Rb766Q5zWLBNW2wZuWTLf",
  "key5": "32d6HtZYfavAzuVaqn132XSqTjJhExUomm8H3EYVQ4Er68SGz95RUJsr6fDvUbkGbWQGAequjd2pZDaA16E2ixSG",
  "key6": "64f6YdCv25RAqpZuRHHzMbNgSqyD1Wvf47V3yDcHdFFmHnFKiqwN1KShMsZQA45eG7gBRkZookJgLYHEEeFwudvn",
  "key7": "3yJsKH6nwiNSABPsvQUtQDvmwtqBj7Ua18kqAbgyh63ZijzjnsGDwCJFJwe8YrNbDFMBWYFW3JodxubxNdvcMLk9",
  "key8": "2GbeRWzW1rmgnFXCJcZF3TQHTwcgsajGy2EcZc9nyyVLKw7zRb47fgJEh52bLvkaWTueQibR3aBmsJ4mw8XGtQDs",
  "key9": "bB9o2fRH9s3YpnhaTHDcFbNvzbqJLjiEaDenEBkw7vy1fbAXAkkgt5hTGiYNHhNJHt3nqC3aG4TkfRpczBSkbyC",
  "key10": "3pHBu7YxhDZfCWjBB8eQZumGLW3evFnMq33xKreia4ojRJjx1VX2a7FPmB2K7yemzU3BEkahSQbVZ3zrhHuvCLeo",
  "key11": "2SB56SkMT3tPGkc6ziBqGUvoP7aFza9s91KiH9if1gFNstoWhiecejaKJ5Jun4ahrHx7C864mndA44KAkdw7fzTB",
  "key12": "3EWfcGB9vc7J5AzpvDy1jeyThfU7AY9vZugVQFmRD1XAhFwDFVARj9KWbmGZr7zUJ2yNe6bfmzrH3trNH7thHTtW",
  "key13": "GnL3Y5n2JtRiZTdXxNWi94pCPPHmcQrmXR42gbqfwTW5ANdS9DXbgwf6SLGpEQCwCWVum7mmwJSamo6SGsrnGz1",
  "key14": "kZ1nw7oiC9SpARmNJ6EL8euGyFpSuDe1yzySschtZ6Y95nM6QCyyLhtP5GSHgFCrLjxtocqcC5L3RtReBETKqmH",
  "key15": "2HDyqoDKyYnxnbbMkGB15spJWcnUddz5vt88QWenXjeKxtZUNFLYGcvUjD379vMwAVnzwNx9TwZYKZXdhzhKiwAx",
  "key16": "5jWRRUteafabiyapZjP6Wipg86tcM3hHV69mmVMTqy3LZKqJYtABhdZAXgtoGfgmcNuhnEshgYDs1oNLnUDaGAgR",
  "key17": "3iT3LpRNHoei6aYWGqbMejz1on69DY49diXHNWR9WXH984wMeCher6rYDKAvUziHkfcHsVeecrdKvd7xkpkqh7wh",
  "key18": "4s67mN1opfZVoMJdjr9HMsNJa8LsgpmScWaStyheq68Kx6xSv2YbpLpVV3HBGG1oZ71A7E8CZwQmJFBv71a7SmTP",
  "key19": "4D63Ax8Jxkv8U6vo7ix7oXJG6GznmWVUrsERdq6iXW77ZQ2xC1cyFNsYQQTJUfiLDrXdpJoVDn9xEKww3YmPgruF",
  "key20": "sS7NGyLufnW9YBiGkCNVhubzWrB7GXYU4QDxgiYiRk8xWJB9uxnxH1e2KCbV3zRV3RtmAjReECovGK84ucDAtyv",
  "key21": "3uQFuSa5mavS2KYjLCku24JGhMmKx4X1t1ZA5LNSMveDS5VUUZuj3eMSQFBAqCZDqXaz5TJh7JuWDkC24D4e7Bbo",
  "key22": "2DGfGZk7Wdb3jbG1STjvp2aoM1YDcnsi9eah87GDrqv14C8qVgrTj6KGqvsianRJdLein6RNahhnmSK8axtngeup",
  "key23": "25WwVhpiAiza9X97zWE2khE8hHktPsGiFraGgwhWj5Lxy8yx5kN7P3AKTVPZ3kLBAEWU8fGoYFTtaxiCxXrh5vjS",
  "key24": "9cBJXwzEpwJPfKYb1nWbAL6ZAUZiwJditcLbLeDVtJQBkSuDW5eUbBeRriLWw6WTRNqubwUa6aPcGQsNtvSWo88",
  "key25": "5u1XNCk7VfCVCE5X7CiyS91f4Kfh16K46hbZPegxqGoPnYqVJpVU5aGDc7x1VDar5SuneHxrVLQbVKEdwv36kYrY",
  "key26": "3dRDwVCmnMHQFXnFcbDJn9YrVHkgGX8Ji5RtfLhkj5Stqme2CgjnzQ9fY41WLmRqxSNgsZqHK2mj16j9TQuDcdvN",
  "key27": "34jhGLn3ZFLDMz7AX5mZhrsrfdVmk7iLyMaDDxMqXbpEtrwxazJFFat7k5UDMoqRr2MRyLBPn5efHQjNA2EUQ6dJ",
  "key28": "4f9drvk32Xj68iAHacWvDdHe6Q2iXVfEWQDDdi2qaNbbpvf77s9Gk4e64gxTZhRcQu9ChwXpKUYXryVQUH46iZh7",
  "key29": "Kc7rD72RMDk9WjZ6E29dCqaGGoeK4XBY7GRZJV4YcuCJz23GAcxz3uamLvAnBEodfrhXVQPVSB7NZJPN8pkLGin",
  "key30": "2upEmARE2616uMaNQg3qHJTYu5D3eR9rkBLXT8fPTJu34c9vU14iBGJaWr8KL9PrpoKkQnbEaJ39CfaPtdUAxQxr",
  "key31": "3quQSGaf4Pe71AVKzYhiPM7ErU53LoaG7b1wETgsio7pHaMBtgJZxYPswKwzqt5PkkEfn5nnFBLXa37c1pRoDJrF",
  "key32": "4jQ66HGYDd5MFk5qotcr5t8E26TdpGcpJUAwmQaBtkaibWPVBTQ7d5cdvTKpZVDt6wyy1dMDeVLv5wCQnBQv8j69",
  "key33": "4dXkWjZNmVReq82ybk1tkZsZWCmxLiEy8Rt6p5cRDVP5FZfYVfPfm7yksTc6b1NWkenxwUuyFSptvJT6oqVPed5E",
  "key34": "3xEGnAJDj8mpAxbsnGtNFpBEpL13YTRGWTSxqBRCJUzg18Kx45YUmR2UDQaoxNTrBTiHESYNfYJ9PpCuvLiXcdsb",
  "key35": "djViciQkfz76itrQB79vNAoUvTAG6Qo2bPCrho9rpypvCh83ycquYYr3euNJ9nHmVAqmwRn39tojmQaxYuR63Tw",
  "key36": "2BEFXimARRRqtbVrL25s96QnsJx1YkF3QzWDRYQs9m9XQ9zQRSJ35gwFKLkcYu23ap2XAdH5YrDHVxZnt91PHN14",
  "key37": "2eXNhiSuAzg2Z6B5nkWPKq1sWebcxm4TQSEEEANnghJ8Y2Gt8ykeLMuHCS8onJMYUJZvUzXiPNYtpWSUXnLDx6xu",
  "key38": "4paXvs75H1hJqfGKgoXMppcW4RyugREa3x4f8PXiiwv6DyR84PYBenCMhQTKnPxvvwjftCTMWBszfNGf5MjQoaER",
  "key39": "4jFJi68SKgiQea7hZa9R34yAc9Xk7JjcMHKZgAdv7sHKXPBvtc6tRF4q7GHW3BLqhdQCcAjrayaadrYB2dWt4wQM",
  "key40": "3AQ6y8ix6j6MYqwQjPv1Y8XL7XbUMXRfbTbCjvSUGboP5mjeTde9VzSCdnczD7P845AdKq738VK1Mccdq4gJEDN9",
  "key41": "3GUF8yJ89sqY1oxsZVzpTkm8hQvu7jgHwVj6pHL4dNvNwPEZJ2UAmu85Uz5xG91A676CgiZgC8zRdH9kKEwkvwNd",
  "key42": "54A2HcDwRNewtMXZHN3HS7QsdnpLi6kxQPxVJ9kYHj5Kp8RaF9RFe56XN2QC7pbVF4P62WEHkz5uMqZ3NYZL8bWw",
  "key43": "f8Ps9mMWa6tacbG6ns5s6bbWkmrJnax9Bi9eHiys2giHww69L7dAoKiRX1YgdLc6MCAo29MgDSgGf1ES2QXvwRa"
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
