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
    "m2Nek3FGM6GNRDnCZ6z353gR4e14AnJTPqc3GyvKNBHSsdRBVtNYDyU21sQSCk3SmGws5tt3MfCWJtnygC8fUix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJ7LcsjgLP2gBsC8cgDRnw9pKt1JLaHHAYuJG5XrHLgQvoFzKBRUvHMH1bysW5Qx9hRQ1Z44MbN8xvg3pii8fke",
  "key1": "338kgqSCQKgKcyG99ofja8jcB5a4R6Y4WDDpWiqTBXJYJpAp8Dbe5HovvQ2UahmX2jY2GTb9FcnRFp83M7xRv3hQ",
  "key2": "NP7iqwA7eHRYU8J2DziZyHizBtWybecywmEL4dXtcopwbRTv8nKb6GNTUzFynb9LwNN85UC62K8sBBsHDK6t53b",
  "key3": "2akREoWNRgNSeFpgZFMQNxvrhzhdMc14AhUmx4aas8etGt5fJFDqzpsKmEuNcBWzMptt5UBvn7gwKMDaA1taeHBA",
  "key4": "4gQaMLUriZELgtLvS7PLvMkcLXvGHiFygmCikvjGRikdh8X3bMQckqiS6gVmuLexPWBXAXhMdBaEKFqCQWoNN8Gd",
  "key5": "4Lbt3j7QyAwgjuGAqWpmtbyCtvYYw8s6AEb1J2xNPEvxq77LHx1xAU76LV7mJxCKcK2AwavfcGEjMARiX4abAssw",
  "key6": "5y7PgAc4LRLfK31zdQXw7LNfL5VZYTuh6gdhUQvC2VgBvcS466NsXGRYb1Qzu992nHTkXgFsmTDALLwrKxCxtWE",
  "key7": "44tTHjBwkVozS8L4gSWor1m2ZG9JVYL1ZScgqtcvGrh6WBRDDVDc5TLDdN61ofUqR3thKVqoRHUyTEWXE6otXHnD",
  "key8": "5iqenrdJUgjKkj7TsXqucvDmZBGCmzGAavGrNr5dSS4zn34kQkFyAXRt48W6Sm36sfu1u1aG9Q3uCvtmmpNtM4gM",
  "key9": "WopTau2ovQeH9BePbJUgk7feTPTdCeEfgAwhjVVhQjF7boA5Q2ynL7WxEKNN9bu27oHR3936kSgg1p5dzsBsMKj",
  "key10": "3m7Su6dHmHWXAimJaUbfEjNvWBHYFMaKRo7WW6Pa6R4m1k9XT3hbec9e7YgxeakApVEGsM8t7FopVPMLVzurRiV2",
  "key11": "4of7ugWi2GwXgEJAy6scfW829RPt1WQ5aNUvXHmEXCDzoKoaXmyGjimvN5fC8a9JVueA4gJBApsY9m8JV8onx7T5",
  "key12": "Y3r3DbtW8GVCWs6UpqzpRkTMhzsnff4kLtfcsWmiaARzLDi7HBnU3tfF2tntkvhHiK5cVxVMdFds3t5JYPT1ykm",
  "key13": "617AQArWr7b1hBYKmVzo5j7mE6uwGGBKDYaeqFcHiwTx6PLAwxUy5rFjJWtdGD9ykXFJmRCH9njjVqt731tRpFsF",
  "key14": "xu9jx7qajsjDJRZXpkhafJdb33CHwMGjzLqUZ7XvkQPAQcFeW3HmamyCuvjHbD8fmY92eGMNrWVGYLKqwVZgf7P",
  "key15": "5MfWdhR3BVsu9TAN9eHRzi3U1X7QZtoWRXnU4VRNTjjhVszbB24urtTt97L9qrUthL6S6qX6rspBN3zr3jufpdeM",
  "key16": "421Eiyc8vtuZdTSD27kQXULjkL1TjCF1oX9uZVkvvh9zRmJjw5aqs3GLPHAf2SSj644yz5gEHSsPXY2tLPrwz1Rx",
  "key17": "56vdhebJFfpcfMnfpwetQwfEeC1SAEnhUckLFWphQ2MHRhVjXyZH3AYtTTAc9S7ztvaL1NY5Qeghj8CmpdnQGCSb",
  "key18": "3MiA6r3h5jDP2aitnVfCfXz2fRJ24KsEtjS7XomHQLM6CJBDQ9G6XeBhRpWmH8ZEX1cdw7rEbFzBvcRLoWaSPtiy",
  "key19": "3NNgQqmfrAgiNjxh8fX7CMRDXmAWrYyrdXM8Ugks2QUxZgBLUEVbbo1guf4D2EQMsGAbEz2qqzpw8Vvs5rnrVDFH",
  "key20": "5MD4fjsM5rkBroDtPsV854jcu65zSQPbbwfKQ8EGv6MTmY88KR22HBcqH4zgXUx7aJd91eGSvTJYL3G4b8vizirr",
  "key21": "4bD51v71VN7Y4n5m44wj7wXpohw823vKKGZmRkQyDy8E3gNNoVeseESbgB3sNtn3De8qAQU5fghmnJsHjPnKQ6qw",
  "key22": "2TRpQmRiaQXYU6mf3vJdSEdRYBkxjuYDNCbgGXxEPsbAvgFZotbsQ9n5qAFm8o4R6DQxMZiwzvqn4ep9vYJhX5jz",
  "key23": "5UB9M6reXxWt6XkiXHiXqEdZfnrQojPt9Jb6xNU6yHA73fcp5DJrupNwD8xN6o77WHwUiqV8mHUqnsouvBGt3ynC",
  "key24": "2ijGdkMZpjhvKfvHptV3SBE6o1exLYXPWATtix8bHGrNjqZYZSfzJK87szbEYZVBQqdt2GwguaHMbQtnzaoNERvJ",
  "key25": "2qFaVquxJSmncSjVvzn4VhYBC8wRKvZGDcDyTZ9FGoXGXZtMsZ6ZC8uWUL9sWChs1YW3phwjXjEiuct3jrRRPHYb",
  "key26": "3UxtfmfCimzmckcEdb7tc3wTxt4X8TdspdMQoktqTh7rPECGYF8N96V2QjDuV8QaLUKzLQ7ezapTKcVWzACLxLoo",
  "key27": "43Md33aUYWMwBN8a4kssVhgMPV5GxBu4JDvBvtdUZKueFYpB5ZrMftJhS5QMzcWd8iM8gyvR2ruJwQK42tWu1ZCw",
  "key28": "2EDF91HZAzynmwmj58heNwvUTmtW8GxUKThaUzgbXQcquwf5SpFDFvj6uCbzwZmHgVni1zQ7YVrHEkWjimQL9fX7",
  "key29": "5RBHAySo7acndHAfLm5uRJe7bNrTfJ1oZTu8dKhkWFmsW9ymMjnxZWnjtAAQhgebKcVTFZFrvVtkNgV2Yjw5XZ3A",
  "key30": "5uUtNDhTx19UReirHdTkA1JdXDEhqXLfDYbmorXKxmqTrPkhwhSQjibveCr5C5KWVgsHYb5bnFYLuTtcmQbrAabZ",
  "key31": "3cjFkSLyRa116yqaxbn1Bs4e1MsqjqxUao4vP5SQdKeR9pZF6pJDdfqnzaCznjo8oQ5b8Mm9bLL2SDLPDPbNtKus",
  "key32": "2Xj5gsEYD54VPZpHynpo8KrkzjqjSTVDi4BgeaHL9fDwemwfTYFDb4rv5g1a24QYz1qkctC46oFKiSBmPdt14mV8",
  "key33": "5Jdbv8mgKmYdrv8cWZyxe62HR4Hf5wBe4R5PFDkxCBpCy3eHhe88QK2PzQE8oUFdwyEZTru5uLU8ab8tKHvCTmEs",
  "key34": "53a3W6YBv3gkbomebFz4mYc33XGAQvzmTSV2CivVb35bWXkzKryExLbUtZfcrMKkiVbzx8yMwYAFsTjJLXTpHqLj"
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
