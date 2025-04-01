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
    "2iv3zosL2f1y8YAUs3nHxGDX2KaDAmT4VVu1zJoBLLvBNhHUBZvHQkc1cCATT28w7GQ4c3QnUaST7xzt5m8o7vcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BZsndi69rkW4kKmuXEDyYwDy7rphWXSnW2e9QRxXyoNDpq9kYGjRjRH3T7gb6v34shy9JP9MhjBNcczMVwSuyk",
  "key1": "2CvKrnPAm7w3e1zTib1mhPN4CLBV481nyitbJJBp7Zth11heGrFnr1iVgyMFdLENXyCFXUuyXbK4fVMF9tMYUkjm",
  "key2": "M5oWKnY1SEevzfKFLp1P198UJ1CCh6HBDn9U4mkw9dDGtfu6wywTSuDFb3dZD4Yg3XpueWMdtmT1EnU7wGMD3K5",
  "key3": "3VR57G9aJTR2epv2sJyUuq5bvwrkuomZN2eL3ExDFJAH5BPoLNqT1Yh24P5SxWPiAFxp7BmjkCHUGxU2cpTL3d47",
  "key4": "yoJZo4PRnZ8vnVrhrvPHGzbanCLPzfwmpa1zatkQ27cEHnSfCVFUiGGsaU7r1neGidw56KZ2Cbku9jP88wkFhz7",
  "key5": "31vTG2SZuXspdH5LoPgQpYDkZ8W7up4tfPWJZyv5gUE2wxFgHLExkq6BumZd3R9ZkfqyuhMg9aJUne6AjTcocVbE",
  "key6": "4e8YRoXZogpz6GSbg5V8b9c3Ddj6fYL5peCLLPEQbvdLR1hBJTGNyXuotm2Qpws4z5BTKqyDsodwxwDvrSr2TWha",
  "key7": "ys2sn9TtgzQUzhdXniuZbj9ZQaPDB6LEowxMcY3ztG2vBLxabRBw2xUzU64gCjJv1Yk32WQSyPe6wMgmswny5WA",
  "key8": "KpMZLNtJet3SmMRHEdcBzoH2gYXHZnpiq8JYciv56JY6wcRDQdgdAgt5fnZ1CdKk2ZiZUBPjb1xixp9bdKavfa7",
  "key9": "5rrNdhyvX7NUR6DuNcEYLZfToFzVunymjxYxajuPB7x5Jfy7TcucCE9hMjNJDS5kjt2cv1HqViMsVA7oPvGe24Ec",
  "key10": "PjPRAZrhkq2jykQtzbXuLGJGn9jkVhphi2G1XB5KjDdzZQEEHDGLxPFU5oZAJ7u3aYbFemWx9Ffw6WyuNq6SzEG",
  "key11": "5PmNHwCUCttcT8GPVVoB7d79Z39skcqTWDeC8ofmkWgBXcPttQBx258pUXQtgesxv2nRdXudjv6k2WYxRheBiT1G",
  "key12": "38zSnJ1caExGXMK6wrwMZe83ByUDGysN1oYwoU48pwEMY7gWKQCuoVizjxMRRwGwRYAy9XnRnVk5qznexXsQ9B2y",
  "key13": "59SWGjG9ije2Bnjo2UUyR6Sar4Ft583pL5v4SmHYEASEmLwhuqQzUzSjrMi2Sc4GHbmN1xfbK7dbMUgC2rUo6bpH",
  "key14": "3jKz2aQGJgHZvWBdoFepeuAfRDoLQbmFGQDc6yYTF9BbPrWKhCRaAoKagSsJgDEns53n6KA7d4pSuRo5V4BZiMSv",
  "key15": "28YswUtmWhb4xLyeA67bsFGaNGpLmLZR7JjZhNJv7HKJfQdiXSJ8q7QjSrfY8faijuEDBbK6v9jK1C2JffhbdnFd",
  "key16": "2m2FXjCjy59wuAZ1fuGf2UhSSAjAsMutH78efnb2EmFxW8HE2ducJhJKzCPMSFgtiaY2xuR7n1ARE8fksFHfeA7J",
  "key17": "31fX5c8t1bnrj1cMeLcBGBzCj6vUHe35y7WSGDwRyfM3i8XqnTwCBrya462o5mX6cjtXNxauxBmFJRBDu4TTQJ5H",
  "key18": "4tUpqMY4uRc2cmcXMFn7TuUgLerZ7TuzvVVCQ2eXaG6QYp1UjVX1yivLpT234gNz4tQRJJd4YteSa9KpNNUEzYBJ",
  "key19": "5LgdDNDkJSmSiipHBg18LSkoXRNWTamK6jwcfJJ1hFL327NnBXRLPunFKqCvV95iN4q6wnspDtuTMPVN3p2RBB76",
  "key20": "65R5xovX7CYNzTtJsiM1tnsUbYik6n4Mjj3ArzmT5f8ypzfM3Wa8v3Yft7d21uL6cBRXr1r8VabuUp6YGoiC54Hm",
  "key21": "ZHCKw71pacx6tkXzfdkjrR5GhEbAM8shAFnWgWNqpsvWrsh1VkX4Js5H3K2SgrJ8riS75286kBYHzXyhuNa1SvH",
  "key22": "thT7y9UjoYgnnJswcmW89eUnJKenDYwePbuF2E8kGUpMZQ3rsHiGJz25t5MCP7BQJ7jb6RitZYBRxt1cEUTrM2w",
  "key23": "2gjuWRPmW1pWk7CDuRTVREMYgYfTgzWcKPT9mRpgDQTCgrcwPdJYh7V4m16omvv6ckmjNbdVgZxapXysZXrYwpbL",
  "key24": "5xYNB3JG5NSrhKtJpCiWSLJ5hJw8NEwmvGFL9tHGKnRobdoa87Lg8b2wjyfZWJXuFuUyRhXdQGTmFfwvmiQ4aQsC",
  "key25": "3y8EnepTAEQd5CFpgsdHq4K37Txag3saC1d57U2QTBGx5D6jgUoisMsE9M9YczjhPuzDSTBtdMCzuL878ez6nifd",
  "key26": "3n1nznmtUi9neuB1RWguJPWzbr8Qagy6kKtrBLgcHraJ7d3PvFy3qMaLMeaMgwsXZRF6KddazhuWC2WzwsKKXzUM",
  "key27": "5bL3cJ2bBTsuC1fwx7vCC7WunrEYaWEtHD2oRXVAx8XEQj65Q6fzf3xGZmCePUsAKMC81Psrxr2brLrgEgBVw6y7",
  "key28": "4Ybodu75ZtLvN3NL6vSga39AnZzshAnwQDJaMgyiPauhMNQfe2fwMMnqyRtN1iDpkWK3uHFCZaYYQwg11xkcsPjm",
  "key29": "5z4hiNhEgaWyxdvuiXo7zzDgihZqDak4UrU8SEJho7951uc6ouxug35atoTHXVLHJwWyN5D7xBawgo9KZ1ARD3vc",
  "key30": "5vBRFAKWS3NppHyyXytEZ85Zuv3yMz7LmdwBBnVe7qWBrxdRzA4tUw7L4mMqS2ZPnrbA1hqivfyZ8QQT6GJD7XSD",
  "key31": "2fMoqWVUNFEhFJ38fW3NFV17dKBZ8mHCQFwTxt4xhV55ma3qFD8oMw7twifvfDRik6j9CX9oJjC4rU64KZdBVubn"
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
