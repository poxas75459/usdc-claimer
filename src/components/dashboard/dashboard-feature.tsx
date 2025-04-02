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
    "AZyapspeRmMRNGizAb2bydKzhvoCEo3NGgsFZ1BNKXUwJWw8VaYGAFjNuDakqwr83qRNYPi7yFyJEMbjfguUsa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hc5Bh42mmtANu8giHMCe6M1dM8YbXoVAynkawRSH9ez97yfdMXCbgkLTV87dJcGkcF4sBYF7aH7bUhgs85vRz9W",
  "key1": "5t7TXudSqrVYpRP5Pe4tQ9uL2HtAz49TE77rm8DKYYd23gMAnQQVV9aePW5K9prC1ivNSkmp1Pb9J3jk9PHU1jNY",
  "key2": "5PNhWMFGcyaYj4ho86VYkVyq6gt4FRxfX8o7fXdZrHTQUeCLmJG24tx4mearH86j6nptD7Yey8KSEmSpfJ6QQS2p",
  "key3": "2ebUpn6APsKFtN9wNnzgSEr4pxsHbiEBhiq8wVrKT1CW847X48brFDin9fvHhz8FmjtdtMP7GJVKb2QuHNM27etT",
  "key4": "FbyW34hwRMKkXb55gqyQQB89fQBXM255chSF5gsENf9mF4yaKVNcQafi1V81ecFGC1T1mHii7UrrFpCG5keBQCQ",
  "key5": "5g4bGd96HQe9gTanmQtUPcuiLR5CfD1DpcMtsChpVhDebLC7FhPVxx8GWQvtHYX2FXwFAL9dcTHFJTN4pcbJRURc",
  "key6": "R2EUHBZcZY6TMzaHKheBo7nvxiGbNeUSxyGFQ7j4f8SBGaVAwAQwqUQwr99cnYqa42nVNhxfJp3toUtSj1u1Qg6",
  "key7": "2YWPNPfVFZvCyFkYQL8gWXmFxD5ex4E4rX7U3GvATKMAQU7Uu9p3ycoeXQJoasYb2wCtLvucae2JozY6kCXDkPFQ",
  "key8": "4hm1V3Ew4auTNAjm5VnP4puLty858vwHwPmX6h46fkEojHmmX4qPnDaCkx5gSBjiTo5TV2Bon7uS7UWoEW1bE6m3",
  "key9": "aJiN22PYhwMLdJzpefCKa6Kdu7swoPbHnayjQtrjEDXV8KX5cNCJ6M5VD3mJp7wb9tzKjbg5Dw74AjWtyPvJm9B",
  "key10": "3EjvY1yuBiaTCEHBwc8DXGgjZEcyZZsPZjgWTstc5Uh6rsQsdKqNBpysWae4hMMwHz8tuHBAuUecvjkBiCQ65kcs",
  "key11": "4aX7X56SH9G7THrtHJGhnd8Lu4xdGXaWpmSzjogse3WQzgBaKRaXSr3RXLXr5KVRJBQ9rjRUwVEygSabgBNBjMfz",
  "key12": "61kY9Vq9aJNBBD2L9q3X2YF23wSYSPi2sfi6zGxghLPiHPSabbPDgfth8xgo3uFu5GDyiqDZ9JbiYShRrzaTUiQW",
  "key13": "g2bAiBusdD2644QgAKi12MHyrPT5LSmBSoCboBY48Y3tmJMREChYm67rCtQ9EaNGHF1PEDpEwSQxT4GjuTMtjxg",
  "key14": "2fF7dWqqutoV7KNCAkS6jWF6SSXbyz2L4LJzEPUnNuKE8bAsG1AuDA9VTFNgfEwmiWAqTULdpVd4zb5Jucv5gDLb",
  "key15": "LZTbWiqrSiWSQLBGWNifA4LmsDXfk2zDN1gC7hrMiQx7a82xTjJsK387dwWzkMpqFackyMu9gWuMsY3ZWTda8hb",
  "key16": "3Zoj2vsF81BbHp81rx7JVcRiDu96TQcBfKAKUJch9kRTTyeCy6Ln5RAhiqXTKCBUEYw5pJt97nfaN8taGQFGrcjF",
  "key17": "5nL1UmMc7JgY5PdKrw9kwe9qoxWmrR6aMxexhqwD7stDiqC1HY6bZSLKM6hwBSJGKbzDENBqBWJKYg6ukGK7BHLb",
  "key18": "5W5DTjnasjhjiUejtBnCZG1GFzFhZw841Yn37VtLWqQ7d16NPEnWPvPap8NbZhPidCUYc9BpFeYhcvovg2Zswnmm",
  "key19": "5sMTtAWYUb14G4y5nstbNaejNAZzgUp9xPXYp4ceoBqKjFsGpkQX3FspiYQLzhzvF1eY8S3fgKFsCQiYFhSwwe6G",
  "key20": "YhCLXbifpXyzF4wy76FfttmZenc9XPcUehXRX14cXc3uKDmTxsEiWSfEnSUCQP6z5j8Yy9cEUyC18VhbDt2woc1",
  "key21": "52px9h28KBqtw8jV4iVqXKt7t9tYZMD9hxE1rjivKYt5VZ7GTiBiMfVFsXJSyHjQ2ibBYGeTF8mHZeH34H3qbwCW",
  "key22": "3A2QgGu7u2xyExQecjqKWxjzupqBFZQNNbhBTJv3fEut6P5APNwff3bh4cfvLoFmZhgUN354wv8zV6r3iqNAZJmv",
  "key23": "cibAvrmL78REpCoZ1YxVepPX9SCtLHXXVdX8sxVU8cQE6sHjvcVbvbr8fsqSASc1rt9iKMCbfVJbHsUEDWxm2Tt",
  "key24": "DpiSTXptJoSve5FS3khrjrk9QEjLP722n3UmgYiFFtwzQsqHc5AxfMtryh2exLbKC357JcieahKSDgxE2Qj6kiJ",
  "key25": "4v5Sw4UAWNRaB3jW8ujkivBaVNZcTB1FH8cxHk9Ln1B8Kro5Y9wvVdVfGjFW2CKZR16JYWNAxMHtNF4bNYd5fe37",
  "key26": "2fBSdRX5rRK6ACJWoZpj15e68mLt2SfJMp6n4zkcDsFXLZC5c3Rf23xfAd8qMkPMbD2rTt3zWS21PWoNtjR5GjC5",
  "key27": "4bvKmByrFiWMVc3KLaFmV2qMBwvrWaifMg3Beb7MURmVfXdHwWGrX8G9g3EsCPcV2UbtycXVnfNX96dvti9tCk1V",
  "key28": "2KrsDXJnxMZLSYDYx4KsAzQa3QpaB49e9wFxWiSKdBQKPjyJqbeghX8aXcoNA1tFjvkzL17mGDrqfeofvYKiJeqi",
  "key29": "sP79jrLjCAEGUAfQFbcaoonyyoGhVmgXv9aDHGgfqyoXJk3pYkrnd1FWf5fwE8g4fW9ehxe9KKZZdVQQ8Z2CZmd"
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
