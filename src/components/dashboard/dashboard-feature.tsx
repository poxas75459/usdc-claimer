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
    "UYVe8MdMQaUEvFCEweqJgzFCMVbJemV8NfcoMr3rA417Loob1fp57u4CB5MR9HyjrzRWU1yKZB68951JMQiuA6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223M5JYsC2GBM8fT1ShAhDeNzE8MK1YXhX1kEocJX6o1ESswgabCmCAq6JzVRaiPxnvTJyznwmVECFAK3jLQ7n5A",
  "key1": "3o5rD5RgbbkYJoNykuRBLNkL7ZT2xwmVPyJFEDzn9JwTsRay6MZYRShAEQTDSXXeWJneG34sXKXiTpdz4Tu5Mjf5",
  "key2": "4FR1p71xiBHKUCZSDsXQWt83qCJ6Gfiqyw1ZBu1GdZxTn1XifUcjdc8RaCWFdKgbDcaW8HDozXru1Rrn7gSJNYt4",
  "key3": "51ZXG5uCdVf15kbLqcCCikr4QFCBvXko2W5KqjUWQQm6f3ZJKDzyLLbNx3GuA54aPTE7QqCy85ean3zZx678u6Cm",
  "key4": "5LZR7EaDKQoyD4TJw31Z4MGa8eNd25XPt2Xu2wkQRokjxtAMnbTsQhSfeiXPC6uagJPGVXwdVBGvhogWjrRhBSa7",
  "key5": "mToEKC1Zkkqy6MqJmWQ3WN7bZxDFQ1cnRPbCURuNVs6YrABijzJtyeCkVK4paRfYseocigiyY8tQJJdMGZdx4x5",
  "key6": "4U2KfCpPGhEhSPJtBfe83bfYEQ56XYs6XRyCVo9VZEWKaxbnntRxyn5rcrig3VCC8emkmyhhL1kuBPTgAB4iYhax",
  "key7": "2JCL6DEh3zVAQpLEyKG2M2kSVoXnKBq57TzpTUo4rPiTuu8dL6412jCaok6N2STk8kxn4mXFqPniponMtkLze3nL",
  "key8": "5gGtj5iB1aY5j7Mc5mZb1kTLEP9W1fHiapSRJK91dkNTxV1Af7GJgSq6jikmGhfxAcyHkDS5E3FAvRoiXAca7Cs",
  "key9": "5gyUV8bKkwPBXVMrPCmnNDYZFbrf4Y6nE3UJbU4s6WaABuXqmj2dtfnLAtJkHvSgLPhqgy21gMa2bZR3vDmTQBM4",
  "key10": "36XVeKEyiFwrgfDDFCGbUSzu5rxYaZbHVrnE4Ez5Gsu6M3WrFJbFdaAp9395nT4AjfSfn7SSS8Atdq8PMBRXTQqW",
  "key11": "3kgRcJWBLUR4cMXGrk2FP8eRSS9oQCEBmBV4b9sxBy6x94pZ7vztDE5M73qbm99ugkxLAEfkvpPBSZARFXiJsSRg",
  "key12": "4GzQVHVPECqqGU6wut3ihDRaWqzE7RZn2cLigpfTR2c6xojJRp87xMdJmQURXG8BC4UyVkd8sGX9Ycnbdpq7en3v",
  "key13": "2xxPsY7AjUY1jEegVYy8f1L49YJe46ZsyZEDAcySQfYfup6dxqpaUBw7DHES1obHmMn6Hihf7JaQtahWcSz47LKq",
  "key14": "646SNLqCSW4dahkrZ6eRYp8gzG4qfKGeNeaTL1143wZSPSTbRhmmBJ8sa7RrSFKZTQ9z1DyCX8zZTVeVjWuapKPs",
  "key15": "kragtMwAXHciy1ECYSdcSyRJDufaytAcgf7cG8gkqSvLbaeUe1Nt7kPM5KfewkQar4KSVCqtn6XH8ZxduWqfKsG",
  "key16": "5sivoLgWxeqia6xuprQR8Z7XUAioo6DoGcop4R94fejfRpWHWc5Nt4qTJSoETifcc99RLNiMN75afok17e3G7Yux",
  "key17": "4thraBcQ99C3N4Sg1kV34q6YVbN46n7CinzvN5qnjgiKSyDHoGG7DZdub5vhqr4anMbZA7UenRBubCWBGr5Ys3QY",
  "key18": "2V7Dq5Tuta5qu1KXXQfSmBHPRqto3FrsB3Bwbj3K3BThDMf73umCfbANCWyXjwDy7m4K6Wk2tQbLMy1DMxLFZk9t",
  "key19": "5CSzgUzaF8C8og2bDsVNjTUZJPMLp8sgYUC7rneEaVzXCHvR2Ps8NDe6TY4TQXJdT4Kt8rCRxpyQQuopbZwGTNv8",
  "key20": "5jJBwUfh6zFeh7J1MNjbs5MF5BVanhJmmRY8brBkr3pQJSVbgF64eJgxqKXcZDf6fAVT1VxZnj94pUJc6m43sJte",
  "key21": "615izmaE93xXVP4W7STE1mvQRhCpfK2ktHFgUCcFWnfomqAkVRBRhLsg17wWnDNKfsbMCNuN2Tb8KSDgeAGjK58Z",
  "key22": "BxGASfNYayPXZYM3cFqHdTcaMU1UZdQ2B8aJxeEdYm3r58ndVyRQ87LBVDzjZu91XtxsegqLsoGoQiKPVx46ZKy",
  "key23": "2aqExQxgHxo65thKnb3WUZc32L6bJjwrZXVqB7RZk8pSaqzM4CjGg8b1KCi97ynpMwZ2MdYmTDggzG74PJEz71FL",
  "key24": "2456sg7cy2RmJiH9zS4RxghvzhKK9D2NyPW2VjJF3uxKEWGnsTJg2vCd7ScrRYYDjyX1dwoKTGZ1n8PryfCQ1frq",
  "key25": "2x1LVJbPvi7bZaQzozrtZghEojVR3c57n2hhzESC862usdrjNTnp2i9zjh2MT97Wjw2LWs9gRpwhGjMdc5kEf85U",
  "key26": "3fvYMTcqmsjV325VEYvY5dzc3M7AzsSVEWT8kj3Z4beMvLzpQx8bh1HXNqW5H9xE6LRa1mY3LEXs7xyGTggyFeD6",
  "key27": "3BXcndBr3N2a9dnFB6NcX5NhPegDyDEZ9PCYqyxJg5AyDxuksEahm1ipGvMW71VAKvdXet4iZyRUDiMicD7tMnHz",
  "key28": "2UQkW1TEnFRqurwQEQaogJzSrU6C5T1WNPbBEb69EGQrXVZYVDrbnTqAcCrpEVGapmjdDEaAmCz82TopLc6t8Tzh",
  "key29": "iG6VypAYtAiyW4NqgPZd5o55MDjEdbkc16QDdSf43EcSoytukxdLJDAmbT97ejpNuy8fKKzqyqAFBfN9VZhDPbz",
  "key30": "64FSuipqrfCzjudXEpUqyrPCkJDYpsaBBkveNdzP13YLePGX6QmTtBGJKRxuPaiR8ADS7aSDd9PoQvbKBwqAveCk",
  "key31": "KELuopzVwGuWukxZsCNSWniYUQvyGZnLiRJri6EZsVDd72zWRkuVjVotzc73VEqhiB3h6QWQ9XXyGxkBDTfjjsZ",
  "key32": "2GQvxUjuR1disntGx6ZDsowbRHJQNY3kT3Dbvng5WSoqSV6BAGZ9VwhttD6xUqvLEmtnRE1UtmLHNbzDomEL6oiz",
  "key33": "5TzMJpq4MoWKBL5gvQisDa6PbpokeV5e6F9ru1vhdHAjeyfpgpvEhDzNgJrCVxMnJ9yVf6URzb5q6KGspRih3rD4",
  "key34": "KQKogKoMCKGHSxdJwMtcPKRimGuauckEsCps42rF2SGiU9FWAinBdf8duThKvqGriW9LiDccWYvfnNouY2nWqm9",
  "key35": "4V2rD8JQBJCKtaoA1fGDTahkxJAWFN7zxytSZog6X44LSLQ5d5vPqEueYWacEpLKuqqtbJUFc58ro6wDHdvGjtKE",
  "key36": "4UTWRYPMnA4hUdgV5KsZrgPVqnKkT14S6HXyV8samMY9esGLRHvbSDVQiqTboDNTWwz9LWQiMmqPfAA6Ln1ZHorW",
  "key37": "2f4ApthYwRijGKek9QzrGETuSBQVc7cwZVgZfFbDwfwW3tyEqcmgAdbcSarmtGEo8NHx4US8buY4tTZQBZnibD8f"
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
