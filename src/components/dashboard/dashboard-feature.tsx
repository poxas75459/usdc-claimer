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
    "4dNuswxn7NVaT9oFuB1YEXsku4DKn3sBmEjmGBe59Zd7EUQtShQH9vnYd8HmMtkqUdHF8dq2CGjeF7BwNJ2QCEEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hc559LY9ZPcReXK6MyvkXyfa8XRY8HxD8nhFqfetDH7JhKHMf159q8wgqK1HwyrxiVuuTGA1HbQTk63XoRo6YHc",
  "key1": "3EJF6T8pJcXkLabDnwaa8erVRejZA3koPZg7KT8VpsouK4Tokb9YSgG6zQXbAoKcC5oYs2T5gGdFHYuwj2grZNU5",
  "key2": "5TYxvSYN31AJbxaoirGxoLQQt5bCExdMSyggtekdc6iycVtfJPX6xg2drFBJezz6QDKR54xniQdzERbigi8JxSrC",
  "key3": "5oitHY4VXNxF7a95H7X5vJyMxR5Lw6tpNxyZcAfqQPtsTaAnitEDXTeVUbVZrwiFCDvvH9bjjrsNquQ7qSQCgWiU",
  "key4": "WSTtUXdoDcXP3d4ENx17hEjJaUjoBx8fjNJz6ZTcDtarXjL1iHLRVuqr2TNJq5Gq2RiQ7KfCvayQ2UsKF1ZDw2n",
  "key5": "5ZaGygV1GTzRVJqQMSk5ThBe4A5CDZa52S37DMBqNzYsMaWsp8kgDXa6FMbqHfKznSTWxzRd5tJzyerYJccPCpt7",
  "key6": "4c8Y5BhdtAeqLEMMrFR3EfYqUStu6XDp2BEn83t7yxkNgfb3gvKBE3STweHWw31x2Q11GhH2jRrmXD2BAdsF2Sb3",
  "key7": "2oZ4EYH8DDqYXWv32KsbTpszEc2qrMxDRPH9KawHBHiW2GeC7jqCrkGN4CKBhNdd8tEC1AonCidYCZiy4JKreve9",
  "key8": "5AB4fKzbrhNUqWeh3Bex85ozfensnh1Dycdz4v9JzQWvcuUXBZYHVZ4LELSaK9rqAKJPU3pcZLhyk2MyfQzPvAwR",
  "key9": "3MAMcVHa5R6P79HMZrx1jPgEkHAemDVLGqgJcJMam3YSmiYjgLqJMgHvAGXPLtuqruVfuTdVz4iM59zvWjdjHm2H",
  "key10": "5eJraDATFtFG6URkWLCYjDvcwtu5ELHU83MwbtxBTdgbs9tqYASzuswa8V9STnRg4wdXrJ4GmYP46aL7s3xdYhTp",
  "key11": "2tDN9aszaLLvwoXqCexGrDwUKHL3tCjePPtGmj96ZwXThkB7Tjq9teJjgE9SfaN4RxfTYSo8mufRCDjR4nZovPQ2",
  "key12": "3exGkfwV3S9rk7YMUjEFZdRH8qqTgaj11kkfHUj9ozTf7y85XBpUTYkL81WqacyLaqMjmBsfNPy13c9PhhAVx8fi",
  "key13": "2eoMWdnXrPAy3hNG7EAwPDdwTanVqWrViyAMEwoX26ZZiaWfaF1udjLzzdoi4nWn1svgEYMPghEhQoNKmeNMWges",
  "key14": "3TSMg4FWjhU48ctEEdtfwCMu1CtpuJaGDu922XD5X9jDAoB1wk195meNj5P4T42yYTej9Z85nzvdeJ5MPwy4QzBs",
  "key15": "2dxf7eMp5js3x5x3UTvQ65N8ti6enJcPQJ6CDhsssCuT6a6JQZmhc7DBJyj498ZnHzQF5XkE5TXmt86fFa4zXa1X",
  "key16": "532NqaCc3sFaPB3yy8LsAWM22Sve9CkJ2yxc4UZQ2iafn8Pt2HwCShHk9nNJXsLUNUL3QQetT8b7m5VL8uANL4cD",
  "key17": "5cmiDP3gXVhb7MmwNoo4BUoDMhmunXnf6mzFokG43aXcRMC1pfVymGG7RihYFFyAHmnib59Ybg6NBtTSohJmYDD5",
  "key18": "67Pd6RKDqTZj5rBzwGUsB5dBdpY3KJiHsazQWSdtL41BRD6KoPnWPjDvvuuZ9z5QtLeqocLnVsKJiyMH9nQtFwfh",
  "key19": "234JgfgiujdNAZdh5cgsjmvhaCxkwtwCUEH71nKCW1kr2ubpNK4UpCz3y2z2KxBUVRsjjWYFn4RiFWt8dAV6tznB",
  "key20": "4o8G1gAEr96FuRy6giT9TsDUVMr3vNBBy5CyFo5TAStABCrM96EUbYZNo7g15N8mMRAJMw9BTXrneEMhzwiouoUB",
  "key21": "5vvjrANxsuZtTWVijqo6fMxG5LG8K5G2y5YEAX7ArGxYhVBNYHJVEQAdygULtjj8zSVfUtQY8PPCTBNQMEgoEVBX",
  "key22": "gADh7rA2dCY6VgvKfyaHsPSwPfXxJLda6aWTbu2gPhm4TRBkM3Sgii7TzD8cpoBU3vR6pNPxL2GBrKmtKjBHxBu",
  "key23": "K4qMmcW38zMscrbwHqtTdiZ6eMJN4eESyxBHdyLQJgnoSv226eYPT8VQo5Hvo6QmNutgJSmQR4DuY9Xhiovrk5e",
  "key24": "2EoEeMa6f25D6U58J1E1XC4bhBatAfKtg18696oHCZZf1UdLBLs8HgBe33UTdMXqmTCcHTrzZs6RbXZxuFDk5SMD",
  "key25": "QxYGLE2YhQhLtcYMaypvKoxfuFJgYtYKAnYnWqgm8NiMJUcU5fRihUyjGnyYJUG2Hi845NyT5tMfPezqbZAWwKR",
  "key26": "4KKZLo6z2A9hqK2h9fnd8hp9xyZG8gCCjcvVM8HrsVkpQK7DFGGapFP7Pob2DR2pccisf9wqTvN6ydPULytvFnrj",
  "key27": "4C4tez69m9Nn8Mr7ugsLpGH7WPz45BFx4fAXagXhq4SiJ8XGRERYDdDejtkYA3wHvJ5RUgpzczFTNCYFoA9awMho"
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
