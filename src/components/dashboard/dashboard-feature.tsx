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
    "3xwzAzyAxuySvbrp9Ho2XfeE3TyQCHayL4KK8sYKCM2rdZrzjordoa9s3sY1z3fUP9Gi6WDPcSfSNTyBeSKPRhg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YXr3ndZZME6zeMWpNUx8PeVW3QnUUV669yE7KXUXaKDmJoF8uWviHex3HPTDuBNGMBMSXeS6mpZLe7LjQF7gBE",
  "key1": "29nKZ1Qe47PKinyyktV5hUhpdU8B8Dd28C6pH8VW8CH9Fm924RDbV8yCxVmMF9xYY22C2xBx666S9NPkkbX4Nf4g",
  "key2": "czXzDU6XQjy75mfwGE97k6u2jfVKYBvkUxjdjJ1S7uFaiHQ8WxcH4ed9feY1ut6tKTMWEhesffHE3moBZySxPgV",
  "key3": "2v1EmNPbAY3gL1q2MZ4CXtTPMnqSWqQh3TjgTmKSRFUBYe7pPQMabCTA6Lw5rpJoZEtDHYxrKM7WGR47UGLE8eTp",
  "key4": "4HpSYJLwN52XetG9951wmQk3DrqHcVocMNYTXZsTeaLXKDCguGC7tsqR3Kntryp9MQ9V37WCRUpQCtRtgmf8vv1q",
  "key5": "8Th5zrQK3usmAt68zEMCvCgymvehp6WGpKkyyM9ELWnGCWnZacaxkw32bzJrvcxmyKstrKJHX3Up6ejtJaeEo5r",
  "key6": "5Zj6NwYoWEfKX5WstaZbr1UMnouobuaf6XffWccLuSgxBmrt3GcwfMVr2BgWHujWnjw4gC7EnCcXexzKtsBGcawJ",
  "key7": "Eas4A51hTP12gMgGeQDL5tGN4MqFXsPkwp7xMxhkpX4aVwDiYEuHptsUj6F3GeFfj2Ms4qimSD3TzohxuVwhhuL",
  "key8": "4J8hCm2gcoeDApoQoMgviNvRiffZJpjvmp7kuZZdAbjCBuei8muWNm3LHsLWmr6vbQZnrqqt8A58bXWV3jTT2CFp",
  "key9": "4HPJ4WRfLBkCyXoyqTvqbF2eE7ZMogtJxXCm4WRwR7dX8Mo99pGnqKd5zxZX4YUTSB13jkM2ZcvLigt7wmkQTmHD",
  "key10": "3S3ByzxsS9WHB2zKiUKAwgk2QACnuqaST1JTUKQbHVWV7GF8jEbDkSjnBQwc6D9kTN7LEs4ePo7581AdcFLDtZMD",
  "key11": "34o18HHXdTGgs8F7ZEyKeoS9bCranMxKBS5kqjgXGZseNmaP3HzZmEkyT6Zu4sLaV4S6vKJmit41nmxkMeywbKZo",
  "key12": "54D5M95ndeyFfyQWi2E2jUeugwbW54zTPPfNRtyTUnDHvMm2dXzn1Q1fqa2qTBKedoo6jRgcx9Xei4t287yHePEj",
  "key13": "YXVMcRYvMecDUR6yr6nvAEtzK6NS79RDZxWYcCg3sSLnnSR7rHTqfg7yBPVhGELXeXChjmV3S4XF2LKj1oL7zaP",
  "key14": "55AeTRhLfHTmCwpvmJitbSe2uheVcs3TVcRqdY668dwcqXyekT4CH6dhKfJmHzWV6Lsp4q46F7W1wxJivib8s4Zx",
  "key15": "57GCWDvZVqfF9WociW4LEfLT5JoqaCaGTai9WtNtjQEkrJYp6QnMqo5q43j8wbTejyZWy2J1juZ6BjpAJH82nsnY",
  "key16": "5DBQJUruNRkE7schpoNtfoBkDEc1tzWQvsSR2Q9irCtg2FhiaJw6e4jTTSN5w7tzL4w5F9LcZVqfNKcxiJkeFMgV",
  "key17": "2Rn8tsZCd1weykp5fbGCfRiJ4BHWMmynxDKaJ3Ym9DSY5VKvKFxgiHTcMmBHu9gR2wkTamzMVLvW2xAadhT7ekkz",
  "key18": "53MUorFVcG8wKZHmF8y41KqWJzjaSeLPu8KGmmn9NQzgqq8ZQnCajuVks5xrqHztPHWaNwLRLa1fF2sA7bWXioTb",
  "key19": "3TmDFvDHTkDhsyYCVQpWHiEHgSaj6GhQTqqyiUTy5qPfETNT6bYiyKrfnzAb4rMjtzQ4ET2aZJodEVgHUw8ia8b4",
  "key20": "hPbnhPDEotdG6mLtpnKezxw9zBeM1MfEFuHrJNjBe1ykfzF1DS73rSkDW8zyKWLTVmgnsWAURqd1piqezJ3MsnA",
  "key21": "4jQuXtSPRBSyN1gUZ1y2kNauyKWA6q3RMrfsYGvDdtojcLoFsP4oLH9aVbhKL3kZjCtzxWmFnovpn63msJbUc5w3",
  "key22": "Hhf5qMZn1qEDsafvPRbYQpNnMwEboJhxiQsS2Y8oNiZFFHYjGzSxVqBj5moAQvwTYQB4S99nTptfDgqJRgMAhad",
  "key23": "2dyuYARMpskVha2gmsKxPBCyq2F3nRDUjg2wmFgZiqgygxB9f6TrBrhZfcFEfZSpVCNd332VZ5sbQ6hwAb4KaFcC",
  "key24": "2KJGFQVzkSBc6RVhg4o9yY5GPQLF1HpTmgs3F11o5gNNA61UbBm8M3FwNgGDDGjRwnBtGUroJTz82ayAmvpR9Jso",
  "key25": "5fVoLXMo6hhidsYk7ChicGeqL3VLhsxg89sDAr8JWRkewCP4wPnWb2DqkxwnvSniRK87PVZfFmizFwwtqegmmG6u",
  "key26": "3Lj9gwYr927qkoY2uQu64ihxh5sJchiagY7xK1n3S5ARjDqbS8PV4nW8jG6tE3QKQNwxX4RC8WrNayNR9mLYadw1",
  "key27": "5f4R4ZuiN2doYNqiDVDDqeru5RZzw5WA2EvcKSABpsrsUoUG4UbFxECMDjhMtaYs3mG7G1FsYdULVKKN6AKtcN9Q",
  "key28": "5UrQHxFA4zzVNPeBqHc8FMuqsFcMmDGrQ7QoNCCvcitYGLvWVR7dRFju2MCbJKMxJiXk8XRZLmBfqQxBXdjMaXfX",
  "key29": "5LKTPB7ZBBRumuLbXzWbcFEBxpyujgP7uHWeWnpwZ9ysKZbyYQc4ALmWL9UZsabieV7EkB4mCofbMTJhyD4oDNX2",
  "key30": "2RZHq3QPErdqrUSkCuo9nQNDt7mFA6ov5qhZ4QkQtzpBKDjtj22WEchJE1L62LJGZutZZ2WJ3cYzXGXp4E8fkTvd",
  "key31": "57xYM51eBVAUQxAna2ouDwvxdp2H4zLe9uhtLioxe92BEDh3uUnZMXtytZtYrErQerGBiVGNi3QotsTQa8PrqP1j",
  "key32": "4WBxcd2frswk3q6owjiQbhP5nKjJr4hR6HtTQQaw3wZCeqnivxiiWpABjEQ3XgGQrH9wL14xESoaSc2oGetjwVVK",
  "key33": "2ZiWooq1Q3NEn16ctxc2GfGKa9ANFvqyUoUuFjaWLgu4iH57AQpJTfW92fxoyGPodbZMwqRM1MRK6ucMPm23bFhC",
  "key34": "2EJaXYeCogBQZrTWeChUi9KiDKhjuTnXMF1aHwTDFMkQjVYmdz4zg2SbJCMfnYKfegHPPeW6zeu6PTtSAzhaJqBn"
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
