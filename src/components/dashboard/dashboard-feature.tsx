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
    "3fN1M8cundECsJ1DBbyonBpaaVkKAWmMsXTeHLpVCHAyfjqKQBrLS9vspPM5SDjmhfevE34gZED4TBW8irqBrx2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhyPFVi7Z4cCoicBPoLeiQc82e32dnactFxdnmZvTn8FoimCANbdWrDQ9BLPgmw3mhWDLxjhHMQ1zG6QhYTVmH6",
  "key1": "5CYCm87X11YpBb5h6e4zR1xRAWxNByeCUK5fV8WuTak8DLhoucSFmafQjta8nD48duWfDwQYpgsCXQZUH7gAaDhV",
  "key2": "4LUE5ndCWVrw43HmWc9XcKnKjsUSDCixGZ7t6DoWHvZJg8Nbi4kQRUWLax3GMCGbK53tJrW2NR22nkP49AUgy1JY",
  "key3": "65R7NV7WcZnx7c8ceFiH3tmHxXxi5GWGQt1GS5RG7dH9RsBGA78ZJSL2kTFonoC1EnybTbb4RAoskb5sFkPL9Prt",
  "key4": "5TnKudNPtSv8hHACrzkTkbmkQPa4QE9Daip3VYjNrScxKNMhRfeFp6GRE6uZtpJeDcTvmEYmPFeJohNk7NxqwYug",
  "key5": "6RTvWtZ2YmXWAb47iR3KYQXEAnB8qR7VzhRq279cMMiAhYEecZ63g9TtzbSUiKEvYpJseuyYsbUkv7ULzwp73hC",
  "key6": "3rG7rH6JtCYhetUbMS1p1zVDRzhqDuuykA7r5cAFDvimo7ncE5thZPk6uVF2ZK1X8tRR5Ziaa436xPJnGtWADaL",
  "key7": "2vSoQFtDxMg56v4pDxRjiPZfKqiTzqPwZVcwD7UnE8qkBzuLmcu7BG4iXQUhek4bpQ9ChA4RKKhURfDr1GeGLd1R",
  "key8": "2Xv8btgF7cZaNYrQqXsbK7eR5DXxB9NdtjDxddDBhLngePEAxFi7LiWF8BcqVkHL3UJbTo2yci8iRP2mBRn3ZV9T",
  "key9": "2JvQk4sUNg93Va9A9SW8g1eBydTCo9Uwh3QtGSxpoi9ZHmm5qeBGmAPAnPXT3G5WsPgmbqYhdLt679EAtN4aLqxi",
  "key10": "2XvLbBBqtVTs4Gk1bmBKEjgZmRTbDcBCStG7Gu7eqawFo8eZCwZgcxqkDpsMzhzztDg8AoNnApZJ3xxkLKMxShxD",
  "key11": "XejoxFH92sRnF3TRhfQjZ26eyB4SbXbssCMQZyKPabvxR2JsxxcApk3Sqwgqg2ERZAZbRvwi6eUh7Wwry6grT8o",
  "key12": "4bFMXxbwX3xmoR7QYKECwSTGRbRF95QjQAcETJQG2aWpaPeZvCMxq1PCiJiAWrHAV3yDHTWahkVfYnfPV57JU4f6",
  "key13": "2sQYyaZ41nYTxDNYWdn26DNkYXQkbEn5HsokkgPxHUivFfcsrYQaLKaaGT7qLxQPvvLkTbF8K2WiTHQZt99QZqLq",
  "key14": "46inGyBgYETVNwfNUbss5mo323F6RoqYM56KyPV1rucgV1aWyp7d4pg3RLe7grwbQGszkNWBAdZuKjxQ8Bbb6WuJ",
  "key15": "4maWNBsb1QCNnfxv43zBPCSZJGghycrZXwrGoPvJTmXfLE6hQnerVAupZyFcRhM3pTEJqGvVnNQRo1vW4HEVyHiD",
  "key16": "53N3iG8KacP91rXR8nYsUJw8kfAWbZmPD7D3WRnzSBc24EcLjbpA5uSKupifEBNfrc6A64u1HVnJodP5LjKywS45",
  "key17": "62EMSJn1SxNKSnMmx7DRmnfKF3AAQK7xxC5DpTvpd8RK41wzcysWhMcXn6Roj4TkRrkzEzdAPLgT94LDMouk2kd1",
  "key18": "2pT882WJyH5cFdNyCWQ8azhaiPQLtguo7kspWYtLm8Mk1TynPe9YNbEGVTPs9adQqGR15xy7h5v5NhhEzpMrmbTN",
  "key19": "4nsvskVvMsf3qmZ8SynEGo1xAQ6DobEVoPge86qgABttqhw4WuPAd2EZ4q14hTVdM3fAKebW2JHBjgKy7C3CetTB",
  "key20": "3r6WReP3NM3rhfFaqp4UsECjBrUNcwHKsxzgP5bovwvPrWG4uL1Jr2GaoKMfLWWKgBzLzq4xTTbzZxqVc1DSXbkS",
  "key21": "4rJ4QMkriMxtrWvbEz78vkDjQE3r2VQHqWWSuPsCGHKWfsaFxv9SoEBg8BT8sj5h2mNt7pkhswtDBALYeVaHeLZP",
  "key22": "3QYTyY1NZK9pX4JMHVaqCMp1TMYjFo9BSMYFWPctvQZHmwfmeRU9fdnZBA4wPfQVg5GEULPYuN9JeUnAR5W1PM8u",
  "key23": "iVeiUDXdjugUdGwMTk1SDCEPc7WRH3dWZQd5MzVSxX8gZypu9yRC3bu8fVvU8dyRTuXd6YniVeGxdYBNoiUGhrS",
  "key24": "5F4si9FD33L2Q5ph1phHesmi9S1F61orHTNW3gtMfzLJk5XJ9zKCqcHH3rVCuUFHk23zG4qFpZyXazsDUxHmLpv9",
  "key25": "4NzZ9LMy1TTrf8HzZjbupgzk2uRdzakyUshMtLoRkfDYju688ZiSZNHXXyoMFddxuS3FnB6LhD2eh3dRiHFTkTm7"
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
