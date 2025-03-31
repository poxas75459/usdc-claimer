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
    "6odRpeK1K3px2h59wgGb1Mi7m3P6CEVZfL9YAHFaGo27R3Ei6rgYEb4iEcWu52hvohUWwfQDMYXe5F4b5PR2xYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCjuEmw1sSmX2HeFzTcdQkeLvF3prkBoWPx72dxQdgwFY2sq3vhJF2esGRnFwTNJK83VT9bvih8oZkJVkAAXYpd",
  "key1": "22cns2ACZMZTs74BkU8f6ryY3JDZ9f3ktccremH4zvsmbgLs5ZsYSjMkzY2fKwgbSyuNAcMYAbtYiP9wYveLb9YT",
  "key2": "54wFNvLFtJc9MskN1ZHuswCBdnbn2B2tJeABKiJa8NTWgfMD39gEun4PR7PumMNmsC6U2R9iTps3n7RNgWViCxNN",
  "key3": "2V5wd8q39KjGJ5YuaGj4TEYCNAfhs4NxDC5wP6o6TwiVCJw51Yk3zSxLM93T1DC9FifYqHnNkDSaAdTCZkmcEA6e",
  "key4": "4odqpiMX7UYwzba6oLVCxwaq1k3VQvkiAwqnAVKuBH19v21a2zWWsmEZXNpjLrASZiL1eeYyG6d7oiJ7SqXUvLb",
  "key5": "V5aTp8ubryVFQap3GdSCErQTKninaimpr3xhtnd7EPK1LQPcf2DjAf3KB9kKc9H7DJjGYLsXLm9NSZqPe5XiEfo",
  "key6": "SYUSHcpgncVbAbjEGXrnjyhrMEQtF8EQeXstcnhkPDNsnV7Bz8AT6E1zSQUoiNuVRwDh5pjxt6ZMBveAs1jeUr7",
  "key7": "4isikEU1ydAX9MEX2L2M2EJsCGpCTnC64JsdS46jw8kV8vVoLgWvaCq46gFGjonQs3XkyhCXF4HXYFbsq1sJsDfY",
  "key8": "2xFnhSVj2o6cqQ3ABTNmXTbXUTpQ5ZCDEMcigfnfJv7jmqZG3ngJKAKrjyxqi1EjmhGYHWNwfuy4adPopmhweieq",
  "key9": "g5FVXzYtSRcf3qedKTKhT4C3LJ7795xA7kdbCHjnkei2xoGQo3fXvkgrZX914pigpyjDeF4jde91NNjb449VNEw",
  "key10": "4ZUJ98cDaNWgUNnkyLtvuUzaekqyPC3gtFeLEfutQXGxi4F45nxxpC2KNDAic4Y21fFzLbYy8WwvLZgH8v2ftuYQ",
  "key11": "4KHgPESHTy9LuHAacb8TPu4cV58jiV5Adi6MooF77dakbAqRMLbUEgafdaXHDc7P1rfuxhQ3oP2Jr9QHZ6zGGUko",
  "key12": "2gmdM17hhGZTAWBY6CJ6mrkPAUHqbDZKRA4SmMnE8GDnEkUiHHdvR35MxEHGjh21bwRmiwxdhfkfNN7ggbsJ5PGB",
  "key13": "ySWTjzyEoQ8GziQsvXjsu5ZruHnLzfmLPq52FAHSGoGkVUZNQ6fH96uEEfwFCRAhFaXGEWL9th5K1bXWoFyZR9A",
  "key14": "3F7o8xFdaTr65fcbFhA8FnrjaroT1uio1f1QQHT5s4FEXV55sm8UmbdVBp4mehUyjttUoWtVyvdaLZu4MnMhUcbb",
  "key15": "36dNNquMACDYt49938YBytxsJJpRjvEaFbnt8Mwk29YyM8YbSYhQ3gJ4NUy3sVB7BaHUPJzqBswLENqAuHPhZvQb",
  "key16": "5yMhYHHQnMAzVaUfAzcHThUyXySNTdecfyfSG84BTAX2Wud2i2f3MTLcY2ToV7BGfdYZDARisLRJFZo9qEZGFJM6",
  "key17": "5Xw9R57KT2eDFsXAyNwETpe1JumVs1MA8Uk8NUxergGLrE7MhaY8RX7nXJkUxvouK8UgKygVWVeXk2UuHvKcdq5e",
  "key18": "3Yj5yedVRRgkLg7Z6nBHQLKZ4XwVbN2StKj6FtcobF8njvPbZUiVcFDhpJDNYfi7tgHaebSFMTrwvKqMgYXPQu6g",
  "key19": "2iAyRg3UJVvctSKoexXyJJMeicv6EHNXGC7DGVZTHtL63kEa8ULx77y1pJAqUKySKPENJiUXQ36ruWT5NFttosYS",
  "key20": "4DUKpcYk3r2Xfqk677hCxmaiXREYtwqJMpNjJ4Y594gnmZNdkzwsTUaCQ5yERvor5wWJz2h74riiVVoUKMdepFVr",
  "key21": "3QaMzCiUp9kaiQB8wN3ZWxAnXK9zQZnaKvwAVCHoCbR43Y5ezwPwSavBFdNfazHZt2Zme8up3jcBZTArnY5erEdz",
  "key22": "49tH5cgjCAe4mRcsEo2Et7QxW26GwBxF5VPjFcx2JXrgCXbVYVHyisQbgeKtZCMaFevffFvwG4rhFAJeeRKd3aCc",
  "key23": "5t6Q1DwL5xQ3jGdwPaNcJ7Ngo4VsfwGNhsWETRi4dwgQ1uvp3bs7dQLjGKEnzK74RkQwizQkQVE9jTB8MDKkPwzu",
  "key24": "2ZmmFgSXiYM5xrKJxsxCFunUvEjJ6JjHSNfysR1o7MuPFPvxDqYxW4GRC2QemDjgtQuQtz8PXkEp5qnNtm39upCm",
  "key25": "3c7tRNkGeists2R6Guvg5hntKHEGDAHFW7fLYtBHGnCfhFfx5Sw86WVhCebyVqfc1PPicDaNR25M66fX58QmyY6R",
  "key26": "2f43pUeUTjzCLuSX8EbtNppGhGUtpEqH7FPM8QpWrZdUjqimgRBZ7aGYa4TzcDxWXbNkrAa89y2Ggz8NxB1mgviu",
  "key27": "3taoSewXATmKBEf4ByUqArZhVDjysubZC4Q1JiC5bB7YwNBUBWLCcbUdquqUBrJpAR2qka6psMFM511kch3TMrcN",
  "key28": "2oY3qz3Xx45oSRUdDYxH9bhUqLoJ59xnz7ZuB4WT1RH8Vx5LNrPvsQqqynK4rZBUpyddnnKopR4NVnBLQBAxb3as",
  "key29": "2dbj6NZmceXXDUnysJjy7NV2WC1hZkjVdSVC6Sw3jAwBs4xY9juRjjGWv8h6CiZMVrEiCgfXFhomEeZGFo6MCLTz",
  "key30": "5a2E6vUQzotzuJWqVTJkBmaL9gueFiamcpCja8ft1KUr1mGmvLQ7wYYnPuvPsBQ1M6eiytsUiuM5ijjM1SxGfiRa",
  "key31": "gobSbssVy3zYgwhsCggUafNrHY3d4XcKfGKnBmRMPoBya3h3zcjPqtr3FMFgdKc6qeJpfNjadnMDPF66PEj3YDn",
  "key32": "5ivNjuB3Ac8EDNikvGeiS15Wxoy3Ta3yyDffhsHW2PMaPxDL5M9yKtuZiLHTSzsH5ErCxqGJ7uU5yJupjsutE8eF",
  "key33": "4oc493q6D4zNLwTLRiv994qgdq4Dr9MtrvLf9d8U3d6J3xR8UsHfkeCS4mvyT5wNmsJ4L1ZPFz6beBKBF3Dk7rxL",
  "key34": "3Vyw9jGUcsvJEVsWY7i45AELTC1uRfDSBZQcLaQ71wMfnmMUTDKB9CXFjMoSZT8EznkDuoXC6rkp4i4aNF6Ub6d1"
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
