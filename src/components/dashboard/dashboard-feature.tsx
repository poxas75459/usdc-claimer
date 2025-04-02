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
    "dFgiH2pXqW6R7D13d84j7zAaLkQQnpmfj5o5zZonVhPaWgXgVnuw3KEzPJwpuFFkpwpei9C9xN14nXs35LKx5kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooLD4dnUJaVjjY2gnnL4wuuRxH9DsbGMZugB75GhUCudS3ePnXUGLXJf2BoHDnVkQPsBzvQovSJQFSNrY7u6vCt",
  "key1": "3tnQ2eVmnZ3JFkDwD8KDwUUitLbcsrr6DmPGcoKQiKzsR1RMRrS76LYPJ2qAyUxT2gaz87b7WEQ3ajhHKgtV6Pjc",
  "key2": "3rvUFnHQyiuRypujqLuLmBGXoizKJY25A9YMYkw8CPTLQaMhWkczVZAkXfSmJuswtHiMjqmCo3wM3b6FXR7s376P",
  "key3": "5sErrWUHSXYScoBU3nAJftTREiZqS3T9d3Br4RpnMcjeWmzGkGnsFJ2PpewEjjJLyBEKwf4W2bb6sTq5qAaR4UtK",
  "key4": "Nqh69HcKXtRhzGREPoXg6V5VnFUuD2PLyVL1RdQu4C2sBg91pPqHptKLqJciU3cCnVtBvsovGMFGgmP642QceBZ",
  "key5": "2YHnYCtnUg4YKV7noUpcxjgpNp7maEAfay3xXTTt3YspnM8Hi2XTp9jvNrAbBciLtXDAh52Qb7jcqdAxiFVw6tnr",
  "key6": "2GzLnHgZjM6ifShpr7W4Xhi8zdtSoHyrRQz8JnzbXRaPDNdmHfhAKYmW2imcDAtG2KEr8j5rjVECf66X9godmjZ8",
  "key7": "5LWQy7VKXUANdvH1u3t6JNQhNsWEyYrkAgdAKyy5LZTkqFLJz81wXBhRHDUFmLbHGJhTJRVeY8sdTgQMNhT9RbvP",
  "key8": "2TTjM6nAFsAqGGgmuzzknRBrhApUQU5qtdkEJm2PLvxndG9QxwvLZhazRbhjhFAWPzhK6MyZRTFePjMkzjJEZ7xX",
  "key9": "5U9J5EHmyzXqNHBHpwK4hY9WtFKZznSPJywkudUwhg7Xh7x4SeC5qMfeyaxfcGJ5GKskamo6VYjhp6SCzA8FMVmk",
  "key10": "pn8bhUhXRrHfq2AwXvPSYhyKWwy5RLKBNUrRg7NZW9HDzhBsxPJSYQaL7BwcHuFWWHuDAa1wAjhfU2d2uPsobcv",
  "key11": "3CtK3vbmRqvVN4PMhhfPuEEQkQ786m36pFkQy5gVH27BNLiMuC3NbhTRfd2PxELVhwCrcuSRpWWJswMbXmZq7BBW",
  "key12": "3iXCXGaM5Ucqo2mqwNcn2naPnq1mJiSjQQSaRvV3q7fCKFtBxZdT63ubi5T5AnC4irMUFpQ2HkYXwgzo9agvRd7B",
  "key13": "3tmsP8YjhbEPJGi3nEdy8ngff5qTdznsmw47WhBptsKsKQTYJbTuu4cTSawAfRuyqsvrKHKJxN8XFkxUsSyDwBmj",
  "key14": "4VKP8ba6ViV3CimneCRQ9Akw5Z1JZ7XT4GHvCBKedFkNbo722BbBA2PjGwmqsUSPWCfCyT55KJevTb3ybnpLUJh7",
  "key15": "5LfCDgXceS9wEBUTbiaS74DkCJQA97yW3YRvHaymvu8JAzHYPNYkRsEauBa6kZu85ZS11dMjCG8BRaGG9MvmCxTb",
  "key16": "3L6fiG8f9vEKPN51HUgLvNDvwZL64A4MvJ2wbnfybvdbPhvw67pFF3rG7aA4weHx5z74DuGP8LHhMPz3Jst69CeH",
  "key17": "3qTUuGPVjWsfvm6LAU6CQkHf6EBHqsvXSXyF4fLrAu1HkNgAs6CmrbyfstiS8oAFz699akRKJ4CCApHp9cDCGQDq",
  "key18": "67aEGax5jtu8hjQoziqXndBqPU7rJLMmjxymNHxrroEGjKNX8CG4LNgPG7pU31DqDmCfCb3yu3FyRP6JhiBRWeJx",
  "key19": "5zKaEs6u9HkDdVGfmG3T9sWVfWAWN56xbho1q5RCNKL1pVyN9jeSGwD6MEDxh9bAS99ovC6F47K2gG5PiLiv4T6s",
  "key20": "UNepn2rfxvZLiBY1RbiWiPiYDFhCcF3NvWqfq8gwTFf27dtepEngfTgk1oEoPmffaaKRehku5EF4BD9vdPHdKE3",
  "key21": "5qsE77wHebP7wYBbpktaSnDJz1LG33RDvahMV3VnpiSiGUahpWehhtV4NVp93SztSFhceHKDr6BQ1nfjBxxAPap6",
  "key22": "2f1buzkb9wF72g3cCrHaDxhSU9EMgEEi3bhStULRSevdcGhTfkNf4stLwpDU9jFS9VnSCSRJpgAMRr2RyYGB7WKr",
  "key23": "rCTpm4vr2wK4LbyPQE2AuxQ4PNyRGk5vmZg62uT9hjrz1GchtLZBEz1ENAB8acP1qoK63hG7Lkxu95Cfuspomfj",
  "key24": "62C1in1TaxRkHtEv45xzEvye3HChCZXKn8sa4yNe2wReptPrL7DECgmN2ih5MwoKkDrUntAWgaMy2touAMt4ioRr",
  "key25": "37kqjoYw96ZttmSubGQBJdJrhqwLTyrXQiPoeEC276eiK9kATM6z1jss1uc5D7oM89i8cJPtE7e4AQRQm9axfhHf",
  "key26": "5JcPPwWKjd1Ugm7cujwWf6zqRHy41ySTScXcsEnGY93Sf9GVaFdAjVRNvCc2QBQN5zXKYcHazR1RsESUdpkLYDbF",
  "key27": "sQtqHe8vsfDAZ3Q3xLN9qLdjf4v92PmTtk4kP331RC6xCr43SGhs9rHMpXwBXbyzQHdo9RVm2WWC2YjQi5MpZ9U",
  "key28": "np6GwyowuTqRrNQTDTfpmpTRnUENHuVaMRq2smxG8MBCwGv8NtXLkbJiDvsHqpJdGXJj75TmEe6wGXpq9vKWNT5",
  "key29": "61X4qW9GDUe4ByysQNGnPbbA2UN3CW6BuwGJhYzmDfBPoeWKgFvYMZ7Lddmd4fRKp5Ue7gAzunNUnwHhk9bTQ2k9",
  "key30": "byBzVFRMCgtXcTErT5X6DKGXrPZwQUamsZia3kVLQP8TMkDkSB8e74Di6mTLnQHTzW36ubdrpcCzAgJ3qPxXsyj",
  "key31": "39GAjJm7ePNECn4wm6AdHuAHDuE7g3j8hNPNFAjPTyMq3hdiT7d1LAZMjKB3YoKREWmdij4L8MEt3amB4PNX8TG5",
  "key32": "3Krk3dh8nS5piUqbq218tXjqwTUUxH496azeDs7cy1MFHdnwNXA9WtjqtVaX9QjKKyHvjBykqypXZVZUwrjxQXQ7",
  "key33": "5BJUqmvmpVXQPLKX9RnZDBJVt7h2qwqHWq8DxVjTeE13xTdd1FoDczPRwxaJABDdCA3qGRyVuugmVerwTqaY9BqF",
  "key34": "5ZcW4niHHtRuryBWaZsfvP3M4Xt69pDQGgKJRFWqSwASzUjXZsDu1mCzRB6G7YMqJdjmxao7dYoaDkbTVbZHi3Eg",
  "key35": "ZsoEwzJyHGEP4P3sFGgigtjPfDERLW4WYkAMCY2rnt1m3uZ5cuxdhAaAR1RmPfE4PsiF9LKD4MAQ4EwvVWw4H6b",
  "key36": "4y3qV6gJY3XGoedMTBcLVPiomEUgtaJid3pY6tonnmVuqYgfFQkaAuonAdbmyFqx99x2Gb7advGqFkoKYhNQaN1r",
  "key37": "3MhYnTtoUZ81YHdcnpaMyZPR6dsZPzd7drpbxHwALd4niBC4XCUbjxpEqTaM6VfcCR4VFXM9aCnNJ9xu9PQ7kQSK",
  "key38": "41Ggmf3XyhxQrDbHZ4rN8Nw77YchaavZ3oqrRxamrwf8gJuqjiFTP9bS7tyx9nLV5ChZ3wdJosSPvCWR8nz3m2ui",
  "key39": "3g4xQkVBcXVmdEhcn6tNLH9iciXqxMzoLreHoMtiQUP1XYHCqHbXPM5PRGJfnnuqtj3scUNdUftA758EovayMWT4",
  "key40": "jmi5fEsPJB2NGqgmsh8zCDsNz1DV6JUh6ZVTBSE8jUkdHsEzruSHDMFL8TQad5AY2e5HoHdzJ6mPDy2QfDupB8v"
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
