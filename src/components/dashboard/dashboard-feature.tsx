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
    "5iFvaKjTdnN91oYQK3PNkWU7v3pRGBSUqGMqWecjmyRaWUK2iRj7xWZk4JLQLmF164whDyc9tjMaZ3zz3F3GX753"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ty2PiPngrrNhSwtrn87eeH618xtvBWKgYzdsiqMmm1joxQUntpybNxFQNgS2Th8X4AXvj7euTNcEowpr15KV7Zi",
  "key1": "455csrxrHafi1bWwjgA5AUGiR3WTi2zNm8zmm5c56qCmajSUhhiBWVVptCgPQhSEAQqk9ci1oDijPR82GFNxLs6d",
  "key2": "3bAQEy4pm78wt84LoBko52zE3AqwcgKf1kLT45g2ZW66WEeFiYCpaZd4qGhpf3dCxyApKoLpx4PQpUUKxjXkySuA",
  "key3": "66unKAezoXHMNzHxUMWf3HrChq46bFDxDBTc47YUpASs3sDzykvYZMTHhsJkZ489spvP9BGzXuGZ97juXWmi2HRE",
  "key4": "hdbmDBw7ySzLbRWMCUXUxZ2EJJCJ7jRV3KfLgKaZF9RBMeLULrTWsmoczZbgChpn6MW1eVzQbyAWDy6JYcXfLnt",
  "key5": "3EcAfMPStuU9YYNvJxG4Ncm2gfoA72m7HTVHSwzr3P9RrTydfHgWUVZiZGfUcW5gmapUHqcvBacv31XibBGQNHox",
  "key6": "VKdBTxDpVrYnTK88iCx1zT59vQ9QxACkLnXDwCgyw7dJc4VPiiNfYyS1qob6HbSZdK8QzHrxMtY4PunjYB2BrcA",
  "key7": "9iPzfWAf9WFhNZdCCMB4w4ka7TC6cFgFtczn2XjetrCodpQdir6MDecRtLkJ8HE62Jkkyae9wMY2RSWdAAfE68u",
  "key8": "67nG3uUPHk7gABZY5qHJVK1seBJCzLgrSyYWYwAjQSPBHYupQss2DhN4r5xAXsSXQ6iH1G5DyWFKz8fHo4KaZUcC",
  "key9": "3NQH2Px4TuAbhWXqwu51xFP9ahqPwErruZ4K2wGL7iCRXq1YtjrVhBhptbnsXPp6f8NYK1KcU4imMpkLbyNfpgud",
  "key10": "F2rajDZNNvGgCnLypyToqnQrBSUMErmHq5MHdgG3m6Yf7HhL9jPnJDuYMpFd6iKqridqAxErfrV9y3pC6iVQUC7",
  "key11": "Zonz87SCtDJSs6fJdKMZcZTEEXQPQwSnYvyq7PNzWpfuVvj6mtM4q5nrE4ZqYh3aTWAi9LDtoqcbLufDU7ETyPx",
  "key12": "2v5NRoAm7bodaqPKbLPnjVPDh3z8Ydw39eywWChaJx73FPDA5Ns6KfpYQeohLefSFWpA7x47o5w74L2HaZcQe7gh",
  "key13": "XPPuqBsWFYwVJicu7DmmVqL5hGsreTi9AtzkLhcfikEev8d34EgD9Lh9sA9f974hdoAxFNG6XEikzukJGsPXiJ1",
  "key14": "4CT6rdBh9b8bzF6d2RZCwgx8oPEnCwwMC1VpNTzp48EEaurto5mbxZyNXJh4X7pinURTbe5JQmzF4CLdqgBsZqHG",
  "key15": "26GRnpZLBRv2xvfejGKQ8Q298EoV1T1wQKqbiuw3xvKxQLPKqRzfGps1Rdu6jxhC76A8PdtbGiUQVVPMkqp9s9Zh",
  "key16": "3EsJAASdEX6ZVKXHd4C5hP9fF9Vbgss7Eo23E28WyWo5NcKtgjdnQP4YYEZ82L3H357MBdCwAaStqKSbEpbtt6VC",
  "key17": "zH7jAPcJu1GhHbFNmwBgDSYjbimNUtTGc7oXKPUKhkYM6dabMayJx8g5udRqeocas8CaPL9XWqS2CwLHckNo6jq",
  "key18": "2Hm6cJmZdroDTcs9QCWsp5b16hpB7pAKx6TJGUZF1ZF4TgdM3yXy5sWQWsCG7YbFD9NjucgFJZP3Mj5A7zc4xkCx",
  "key19": "3Q9vHT2WpoJuYn2yDUbgsfei8u1EpqAFbKSH8puciSsTHT1HExM5SBvTrkYzvwrvGVumJfzqE9QeLs4UgmMrCdho",
  "key20": "8ZY3ZSWNXZRfh7dK1cWuxyQ2gFL4eqD55F7bSkyGAH7a5Nu2LDZ2vktKccydgDKwvukVY1Nayvyqf9ZzDhwg8uj",
  "key21": "2KEBqU7gnMN55U1ZDxraSBNtSFj75WWX48ke2o1K5BDUyF1Px1meynKffjS6BXGKDKnkZjthAL88PDvvkemASuDY",
  "key22": "4hRnTf3M9An6o47bsgjJCNh3pAZ9gpiDyq2HPWzQA9ukhoeETfdkmqB9NHrn5dMR4Lsibi3fg7KGt6yRViYtJhUp",
  "key23": "64YTh8bhdrDtKSVRfU2z5yRjdtpb8BbGwLkVZAVo5csukdUr8qrZy1jWVKzYd2L4KqkkGeh3cvBF8SmMaj6zbMXW",
  "key24": "5aaD5KtZZKMer1Ln5CJrvCLWmzju5b9sfhsru8sw2EebCJrsxYdjSUw9K8sPP3n8FRwTRAHbYjdW8oE6uMJDN3DL",
  "key25": "5RpGweNVSiWJrj7Nqfy6aNCC9bq32gdy67rvLTDoQCuZaJjFjDFqUGD4YBw6PhuSaYaBaZnGAEwhPPxnn7YHJLwt",
  "key26": "fDwGzfUnGPSxMSU9hBG97X6viHdm2S9TDQtkgukwqVSoxRB1V9m8fngpr9HETiEG6exZwaLAoxtyGg6qRjwL1sT",
  "key27": "RrYmC6FKMuadsEJCQv8LTt7x1BsqbKmurw93RvcwQ3UvX5ASgyZpHLwHzVxsVrSxzuyhwUToogND8Vm99fauqrs",
  "key28": "2sBKXaJmmj5VixVxsxwXb3pnJtt6nMj3BAtJts5drPxBea67cqD1vNMM2hAEXRxSugJ9DCD6yp2CF9DYraWdDJod",
  "key29": "K81dKaJtY7rRgt8aBoBQidgpcSFYEuXUi2s98gFViffaub5c5RF2qber89v8Mwj14qEZYXiKo6kq1pEwbgVdNsQ",
  "key30": "sorhtmGqPqXPmyYTgNUtqndV27CjgJy3wGsu5tcjExaisuaYfy8f2qJ5kfxyY2t4dLjiKfmrKF6bNYutBUzt7Sf"
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
