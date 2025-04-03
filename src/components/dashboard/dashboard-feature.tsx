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
    "3BbYyhn9pvMJxxxTkhnTY3gHWDrB7GagxmSPGVCgBN4H3pf7391YbXgujPiGJmBUVm1qVpE79iVxHmzHmarUoX97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMR4g4KhaRsoEw8pPLoUoGyuWtYWDHA19Ma4ei5Eoxf5R332nMinDQ7X9uMMRZCPSv1Bk9Kyiy8qh7bHuqKDRVs",
  "key1": "2apPReThShszx4zKa6E6ZucbHwgyv6rVeZtqVjRiKZNLkJW5ZTUQZEWeG1rrvBmzVf7FAoA36wHRmGWxQSL9Edwp",
  "key2": "4Y3DyA7iBmdUaxZvpAh9LnimbXT8BdMfkT87LY1foN7J5isNjUtqThaKyoTUUQ83v8u9x4ZUJ8uw8fnX7aRQfonm",
  "key3": "5gHKTZkmVxHKAXRZyVDYSQc3XpHGW1BWbVgMSCrT2yNUL41G6BNcAYsteKQSW1ix6koNnATucucsbPZ48Mtcqjm3",
  "key4": "4kwMrz6dPLzw93UN58cLSvGSdwxz4dLdacqUXEGLPRp3vfpLu6ED4iHNe7rwENt5C2rDAa9PGcaEdV2Zcf9CDKFj",
  "key5": "TsVpN8ArnwMfWcZDv873idohf84u92X6Dp4KGvVeDJfTUVGR7vBaWYrBs3y33dnAMPiqDh6NLrxcFKp1A3Fygxn",
  "key6": "2Xw4dBKpiGztU6bYoR29ZkHy6731stV5QjFvi3aw13pgGJ2kRsCb3DKRbHnEWP8JoNB5fKMe9vPQZD6rLPj2Duqy",
  "key7": "511rBL96AykmFwi87KqQK4q3fsgowzbgkgkc89i4zakWwxofwcjDPsLh4FWy5mBrqJP9pDANjGHFsGVu7bMqp8Te",
  "key8": "5ne8DkUytF2FKrYpJ8FPoNBTKJfywmqvAFaPPpSrRYawrCK7Tgd791YfUKm463XtE37yVvQyi4gUGDzTdB8G6TjL",
  "key9": "5iW1mTkkeHWtn3o5RPxzb4oghoQrVtM1aiEZoBcbJw1RjeUSQUmjzafGRktYiT1oRqFDfL24xGvRUdnZnCo155cY",
  "key10": "4ntY565f5ouo2mAUdEEJG9GViTjRJ59RPcbVdpVk1iMHbohwxmg8hdUoDeEW6XqgJ8MqiJoyQxChD3xKjMa7km86",
  "key11": "359ewR2Gq6YdwA6CtRhithtqiiAUq6fXe9otPJXgHYopHbmTkuuo9N2maKzrAyLRdpGBDvkbXhpnMnMf3nZVFfS3",
  "key12": "5183TqBzxXVSUPUXa3FiK2XHDHYMfPubQrHxkZ6T9JtqXgGfRaC6yznXsPGrYPZPYz5TqbTBXe9woDSLozo4Ldsm",
  "key13": "45S384AxnPtRXQUWEkevDRqr3L6FpGLo62aZJNocFs5BWaxn9NA8r6pStam2HE2X366XcWp5bytinAPB9HTHybht",
  "key14": "3foy5KCkdiT1N7uxwr7TVB86tHvBSwWfPgFcArdeRJsWiVaNSSnPa4HqU38Q1C4xhCHBzVJ1z6bek5azMUc7EfJE",
  "key15": "3Yak1d9YNeXGYogaWKYpR8scnyJH9uZFeYCLMtqUtKV5DTWdTBj78GNdbSyqcRy2JGEEbb1eqWbZUQwwy8946FXX",
  "key16": "wccD8BwrQcBBpTHMaePgQBH4jwPDjQkmEz6puy6xURRtcVjuTaQSCT7w3HKnkfWJvPgYbPp3FKC4YUBn64n5yXX",
  "key17": "3qiDyJuLmBTsLdGLimH7rEZ9Xfhndx2VxeuYDbVobTwVTLdoRomNhENM7SYLwiqaLZ4vY5YFDqytCs15WiVKLgys",
  "key18": "4gUjV1p6dnpFc23Z3siyt6o4Eg49UKmvUEK7TGxDb1rM3hCwxHvtqaBWxQWQuAcFa3vv54ckEV9TqxZF4y8PM5Ah",
  "key19": "2HBfba55mG9dvnKYorQ1nWTgdrMPUciJV9KPWUpnWSzpRQcuyT79Qith9Zbu25QEZT9R4cTdn3Zmo57Td5YnSgEN",
  "key20": "SY83T3CTEFHMairEkutnQxi8VkfKfN9X3RvJRDfQBGRjJDSLSan5mUJ6d47paw3nVY3W2MVaF3ZmiZq12avocfB",
  "key21": "3c8nho5BfL2wcYVjxj5MTYX1QUYfmNZG4DpqR9L9smFKDa8fah4M7RhvhUmQ8JNC5t2DuuCwU3HRShETJqz2q6Hq",
  "key22": "3s8ETw3WYTKDcQfE6ypnhT7s8zKqFwcivxqJ1ZYEHcEpgi2BfqhUGD5psTYQCf2vQtT9E7z4PaPBFVsaB5XFWYtH",
  "key23": "5xUekAyDy4gxdhnjLv5B8CH8Lhs6BysYRkjQvSTJHWhwZ9W19PqXzZxDrwsXQ12ncGNvJiwukyb6E1hFXEZjCbsn",
  "key24": "EDPaNBuzWTKjVTyWJKThcKDXJXkRsqb6DMDQi5r8oNsYBnSHPXkHxCuhtYzD7oZGbyFxfsrrksbDvXtd3Ca8bVr",
  "key25": "5CvbDTYTnkJtTT5m65tRYj1FRRcGJ2hAZjMPEYmsdeqBpZKfxf1xYwr7X9vzw9i9zStirweoF3od2gHYPEBTGbyj",
  "key26": "32jSLEF6aAGF7xDxJKxcPGCC38x3dVr5Zg9gDwjM8owSoUdZvRZbdDCR7p1VQsbbefh9WhVB4w82ahfyGKZbqn9L",
  "key27": "per7EjWJdEc6YBie7eDKEVHmd2TX7Pm5CbKepq7v1yfEsKvFRWtcXvv9U4ffX3wMKQGvHWqRb8ap1A9ZnLYeHCv"
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
