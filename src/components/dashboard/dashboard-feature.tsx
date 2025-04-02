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
    "5ULYnHxtdNrTruqLD8FTTWXbvAtkrTSd2XoNKGcnZJbchEUKybhbcKiCepnx6hNnP8aiJBPyZedWLnP1StPs2c7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ksQfLv2F3UAV3wt4eFVp5kyUbg86LKqMStABMpXRSLqoBxyw7ijsGaYnywRarJdcjUWZ9kBwazikakRTw1M37En",
  "key1": "W9uJeLV43K5CT2ta48HAKQVMHYnd9yNXLCCHq81UsUrY9dhXtanU9PuVaBJCY36M53bD8a3A4utYUy2VRHDK78r",
  "key2": "wJyGExYACojXB3i1XF6oxrSfmQBd5bWepeZDPbtccKLtfzXQz8kchGjFyv7Uda2NjhFKEgD89YUCneXH8e7eJDj",
  "key3": "5LUhJuS7RVgqPEVgKsLL6rQT7TXpL7wR1huxRKWc2T9QTL6SuydVtbUsbxxQTSq8ihG5bfn37P91Fe7itX23dczd",
  "key4": "5bSNYzhdctxC56U65ANV6LYBRLMF54NCTs8QCMqBRHUUyjqvN8DAtaehzhv1ADdmmWaNXgbLZsZNVuhEMQiKaeaj",
  "key5": "2hYmSTDnCmtBfAgi5GchMD2TivsYoBbNoDVvkg83GqXZcqMcEXTrBMrxvG2sC2wz8MjKugg9FSuW5oD92uei1RKY",
  "key6": "2cByuCU8UqVYBogq6tN2UWSFB93UH9HhA7H6eQ2hEp3HVni98dQMqtSe3mm85b9oFJjY4qJDabhPgFx6NDSktf4t",
  "key7": "3zhB4o98T18mWXQwHRTidb77jAPoBT19Z2JmBv6sQBFZu2Y4rEwwVvK3myGYeGPw9tKkXJGsqoXAAuGXgN4JEaCm",
  "key8": "wtcx8sULNa7nLqwtZisUrdjiQ8925nWfG4RWAv3BSE2at5ivJ6oze9zPyrhjymmyok3zXHQgYhRXgNSSPXNmsJy",
  "key9": "4ga9tvfunxUvC4LjpvMqvjH1YAdVv3nJ5w7R85cQsDzsif6AVAYMjztQ5HQ7QqwJn19ufajWVmuLqacZ88czVNPN",
  "key10": "4DLw3ZWLtSiVbkahryyyvT5Yfm9bLqouuip6rQp1ufSm3YgZ2xESqqAm4bt3pmDzeSUwj3B2BzkDZ1isxsbdonJ8",
  "key11": "Y3iiNDbp866tvXYMf2qPXPF9w3fpPVZaXAV66TSFWWF12rdQb2C3CY7FrZkWcLGob7MUT5ZYdjuGVsSwwcSXeUw",
  "key12": "2SnRyiFZJhWV2KNxDXZCKYtY3GfHSTxfa7VPWuj1wHb8murbu9LBh4UEqodYaNCskBfJv58wpyBba5qvXdwTTgue",
  "key13": "43HuGqpvDTgH6andx8Uuabqdius7fQRDUqKEcxwVq75hqf23HCAp1cKaVG4g6PAa3HJFnW7VQmE2RDBHo5Jy4STA",
  "key14": "CVwP5HuoJjdBVgWCunzpt6oTKGLxk4s6edEqk2qBR6p5wDHhZXcgEiww177DmcAwcuVW7RBKCdunVn535wEjg99",
  "key15": "Qt8atX3PZDjfYG2fXNkdo9jJYVNiTDPPjnWGZWZBx3QiTDWqniZBnmLx1twhmEyCq3Rkpi9nHBt32Lr5AUnihxa",
  "key16": "KHGJ7bHHk7i4uGra6hCwHqsvSsfWbynTovvTiGVWAyxB1WtPJmbJXKnywGteqjo62xL4HY9ye7sn8ojaBAupcsG",
  "key17": "2a63psTepq9VxWBftujep5K8b7G5sUN16GUCn3ZhEkvShAXTG5jhQ9eSzbuFJCr2GV8dp1P8sbX4Nu277SB2sVmN",
  "key18": "4TnAD1M21dfK5iy7hW9sLfpBfbbwRAoFygss1YzNEgpZXuvribAukQhpcTJPFwFLkRMi1RfkR4qnY6TXge3kTyhk",
  "key19": "2HHb65ydUjeZ1gdkDVqN16RDBHBrTKs3yQRbbBguMYaJYrWzjGXCZa4kxVcw3grKbB7yzUe919fCZb3DP35N7d6y",
  "key20": "3vUtc15zeYTFbW7yFiG76J3w9HzhW1kqHdi9yFCz5q612Jknb9AvE3FoTkUVzML86eDSANi9TAmpWXJiQVmpYwQr",
  "key21": "5KBDHNCaWNWMxMeDvz8YHqdSv3B59h68V76GUctPNFvseEG6eiwDUtVn7aNvKdAbSY1TjxCBo4iP2aWPq75Yodwr",
  "key22": "bWh27vaSEBe7cf4DAS2Lad1M3gpki91x1r2YpCcmSZViJSjUrUdWd8p5f5DiiCX4P8ogo6dzF4ajdXMHB7hPoTc",
  "key23": "48FjZgTMUumF5X9MdbU78wWsL75A3J7VrTVVWEfcgGWQzuy9oMc78ktvrc2kqZZqwB2cM2oxF6QC6rrXymUetXUQ",
  "key24": "3b1g3UVb2uXR45PzFZfsfBtzzaZYBaRdXEFg35b6W1iCLoN5L5faGvRH4WqNvzU9dLwz2pJUyL8dpkw8YuM1UhnK",
  "key25": "udsTLXbWJgnX4Foj2vucrKBMpeuFKPXH97w8HJhCWw66qoWguxoW5jJw8eSe1wkrBEXfipYAaBjjhSe92qoQLWh",
  "key26": "2ypSvxJXwDagF1z3w7Ay4RM5ZgEjxo5XKW8ynhkRBGQmGFuboaWnsPUyNTwryCWLWAxmHov1rubp5TzGN2HwvQd4"
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
