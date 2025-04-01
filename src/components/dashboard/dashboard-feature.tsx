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
    "5125Vy72uqwWSvrpoaB8PnRT851fLxoqciQcGJGEuQ3MGWHvv5E3VFGS8yvT8FMCQBHyTh6c8hK946syumwEd8Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DqTnzNtYSeLZxJPNUS3VrYq7ovCHfbBLYaFniYh4oJP4GhfVAfbegPizRMEua5yMYczxARmt5VaiS9NjAn2PtX1",
  "key1": "35vtJ5fxQRfbTSvfATUfJckXN55V3iczKuiza7ury4AstRHfq1H7nKfcjQcMxLRYMBU4cY8qsb6FmNfgp3SCAhEp",
  "key2": "4ZYEiNWJbQ21S4sTfZKJTTwPSDbyLr4sXWDpjtbywd81Xbdutt1Dc8yY3ULC75S4jvVze66XeCA2G5EMi2zNYCVV",
  "key3": "2VbdLLY5WkKKPvAm3B9d1vFhyLfd9tsHp9CG2uP865b4iEHp34mYvGgRJBykLTipQBA1VkLHsVczfptHaS5eH1gy",
  "key4": "5s3g7ExTpTRLq5bfNSHTkph6wq2KmZL2c91qhkun1hL49HyXXjSxguN4LDYvHtxPRWGoq4513c3ANq9zZkfh7SrA",
  "key5": "4oECuJJ5ici9Bzyw7pfuu33ggjg4QQ8ApRyDHXXeXmbaGXdHXxjGpKTeBmAUYto6meAe4qGHrBGMErYP91MzBJ2e",
  "key6": "4rxdiXENUFNRqPaXtqjDdcLqj98p1aoMaFxJvpvqXGoLxP6MbAf6FPwWxwgKcosU7dFH6hvBJbJTxGaprC8s9Dzw",
  "key7": "5iiWAjKXcUR4TKjXkVBbGpNG6B6JSvm278vmas37hwj7j2HanMnxJZFPgdifiXSzR5LeGgJDpVBkXS6dPAHztS1n",
  "key8": "4KbprVC7PZs91sYV5s5aLgXSYkPZ46R2UYc1GmPrB2BRiAhSNV6uDup9S5FjmMc7mWHaqs2t45LAEUXDi3WtYwwj",
  "key9": "2eCpyPZ923cp88EXvkjhiwq1C4LWtNuaMNzFCzRWTCCBevkGR6Diy58pyp6BBqk9hkd4j5FopNSDrwhvPRJCjpkb",
  "key10": "2C5oqfWpGDKK6JJwCHAmNmCgaeBhSVL54zwKv3L5Q1xQbqSzPZ8AfC6XaojgcYedCnEFTiWS2iaWxT13QirWTAkx",
  "key11": "31hPyLaUWEHuvZDpKtbbBvroVo2jXAaRUMkjuHzXH4S2mCexzmsMpzdSiSFur2T275goyWDJ81tHA1BXcDSjzYSh",
  "key12": "4sx7eS1fYnFtp5Ui9eYasKYZ99oeAPPUnmYrX2zBnzWF9VPuJX82XuTGaoKgdwNffnEtbAhMtrXzE1qnBAPWGKKG",
  "key13": "4RbdDLqcRcxYPU135J9oAmtt3VFatA349qSaZfG32pfoKGjBi16u4oRNVW7HQQmR8mw3trBMYDrpJkWfKdA5oHRX",
  "key14": "RCq1zp7gonzY3Q6UHCXCxbawMo1GcYnB31zXQBE65fiqDxjt1YkXbmvYqaacfXeFaPKiovxoZWmvg5X2Zsqkbhk",
  "key15": "4XedFrJvdE8LRuQJ2KQzTqKmK5PGpY9p9zVRef8tw4LgBqU3cE6tYadnivxcvvfdvN9RW2V1Smz5zDCvYC7Hh913",
  "key16": "5oVbhDb41CaKGvrMWUkSihVdYkw9BMWJZxQsjHjY3kVYhp33UHDJFLUjVoLdAyMyLPjYuGS9JKNEoHnop9BQi62Y",
  "key17": "9HQ1oWxPghqXcPDpazvUgYvNfFrQBvMVKGGbM5gMsNTwp8zAPWWGujYpLiBTxuzNyuhDmZ46Nf7DpX1hqWDvR78",
  "key18": "2Dv9vrCETnRUDmwzbF2yoNkDfXKGLcSi4nzmi49grNpFz3NZ5LSNj9z5sshhsSHMNxaaora4RTBgs5AyKW8n9oPU",
  "key19": "5QKPwZ5DypzGmQTYdRt1HgEHRFf1J8TsvTqnAqskiGgurzpf3CrMwfjpedqnoxF4osF9a3jZEVi6bPxmaJLjH7jH",
  "key20": "66Hq3Yw9rifZJ58UB528h3WBwnCJVFXyTup6rGGfupKeAFuHatuLCFqxGa1VBouegyYr6GWwN6N9bRv8SWdu7sEE",
  "key21": "4Ev6CFdF2t6Zic4jefBZSwL4i91WveAvyahQ3vTB9oUJH1o8DqCyJj6Fmya93j7RxG1sbM7C5zw9fSvYKQvk3AGB",
  "key22": "2tVwMUAGWQPnUektWScuoJy1Z1AvRajAvfUBmdzoF7BPtDybHaMNGZmVfLHvQ57SqY21XR1cjUbkE2LgnZLUxMCx",
  "key23": "2JyT27j1czV8tv9VXjm5HuUQSKAcpJcsJ3KkqfXXkhUgJ79F5pGoDEFt7zMMgGpWVo8BZmvenNV2jmaASb8ZFUro",
  "key24": "QVACr1A4TwRfDGMdDiFncAdzx5sCdwNL64WPsdmeTGa7RsmvavBQkDicx1MREddW55EMMYCPofkznaTdYSjS3Xi",
  "key25": "BnAjfJr4q5EyNToXdxtDvfAHLBko8TmtgSaMMdCVJrkdBLDSNbhbcVtRUWohS6nLSLNaM5XDoYazUUE2NTPY68c",
  "key26": "5a5t1iw4pXPLQiLHPbsbj1qfHHDY7BK1JeqXp8JGHh1ah8XsSzUN8RQhWSKDqpQRKG3S7xSqpzvCzRQZgYGrMYkz"
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
