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
    "21jC6BUbPbXtoFs5UkxXtqoTnjZ4X8pwzjdCZgrBcVNxVfKbnWCNi7jULrb9cvqLEh1AgzMcGJb4hpAgF8Q1Zz85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1293RXgQdyQca2r9g2QqPnrd27hMYTzcr8zkLDh1y4K5amCTMmRi8ZVLYthzrpXwmv2ZUm558g7SMJmGQuChAStd",
  "key1": "3pReGWfdn8VrQUYoqFMeebvKSvximVfTo9Er2D5CoyLyZCZWs4NHZrrw9hGoASN6qEaEinpA2BYeeCQ3UPvF1nKJ",
  "key2": "2VW71mRBU63rbC6LzXiQM86C3nEexif8q6eknT9SY5vAsodLSJbzQgh77pCT5uCjN7J7CqYTJ5RWW8Q7mRTCyZ5G",
  "key3": "2KzWJyXVaF6J7k2HkG1Gzrw4YQRQ5WbY9tmQ9rsao1pUEXfUFSGAXcS5HX7BxhGXVuUWZQSRpJMFmLptcFBUqYR3",
  "key4": "4Z7q2gePtpZMNtETqGqtqW3opoNVD4qBXJjGShvb2tMqsXNuTF9Cb8DayjosCNiMC7iwgCDsfSAxN2hrP6PL5z5Z",
  "key5": "35RMuc6ztdL1meKFxswb7t4mKXNZmGqBEkkajvSpawzLeTvSx8gAPB8ko3yrgzw2dyGTesbo3cs28metPj6893wJ",
  "key6": "24JK6QvPbubXhywo8Tpy68WMQoZrbnTcJww7SPKR5q3zn88xfcv6tQE9Lq3mifx4Tofcz81GzFcMUJoRChY267By",
  "key7": "jeGse2nZVyAL5W8LK2ZfCARh3YrNELeekwDfi4XjK7jmsyjmVpe1ybtJgwUuConb9btGqDHvWse21qCjW1QeTNo",
  "key8": "4nPc1SLZHyM4LSiRxCczzYuC41MBKmMj7nkcD8cvmpdz7TZ8EXvgeb4KvC9FXGachSiV8aWBjMGeTAQ2MTxQcXbM",
  "key9": "5kWFJMSWg34ZLeZYQtHZxWVHtx91MFoUKhcNP9TaR8nxM5SGT2HvvhMTmA95ZvPhZfxHuLfh5uF5o6PpTaBX9Mfw",
  "key10": "5qVqTigLPYUzvTVSawcrTFbHsJMgW6RixqCi7we5vTBXXxU9Np9P1Nka1ChpwsW6jQDyqMdCCsqMkF6sooq8zHpc",
  "key11": "5JnC6pw9G6ekWPGwRXrJnJtjqHdho42n1nJ3cBCC1tDaiu2GeE2kt7GXZSs46M9VqxGpW4rx8oBxz2rq2MhnbBXK",
  "key12": "voNfiunsMK4wmDdokBqhNRXAQBRrE2te5b6ZUf8BjjYzJ9JqN3nq3ygztai4gugqhFmweN2SnMNn9Ty2UnqKHVG",
  "key13": "5i5HEARMGeoFxz9ZL6e9mUvaLku73mcQhurJAjz65Z94gKyF5RF9dz5dsBRnvxAsfgexoRCCbMPMCamuAMBzC13c",
  "key14": "19mybuNKbEZy6QY1GpdzJBQpFafLjm9xFhGf6fbcjqzeJQmV9Z7JykXub8XyKcaBDwJpSWF7LNLx2674VjLLN1L",
  "key15": "4xnApw5Ts4gkdA9AMCen2G37mvMUiAqcZohDXFHdVnhC8rvSTnhJMSBLdu6dYNG7foui7AfMcZ1w5bEfSWBEPepM",
  "key16": "2SrAcf7Nj7F9Uhn5Vyv9UjMMYBcbRoqQAoLrpWs1SMdNKxysGgMWdXpoBP3vJd59GdGVR1ukAs6WgtVuHRFXWDkA",
  "key17": "5NMH2TNHZuPu6WLZfjf6b2jmCYstgUD2PSR68iLmLkn3wp1WyKD76xwisziJZTLNE11CLMBFiitDXQ5khAAkaMbH",
  "key18": "3AXV8pm8eVNjhPVUkob8MPYBeGPdmL6eMawcb1xT28LWCXmwrMuYbBXhdVvQ2cEg5gEKvVwhpaWmP2BM6ZnJbG1Z",
  "key19": "5DzvmnBs8Gb9tt52XzqeaAqdHf6qiUogD9dPMnQmSarv1XzXmdNsgQFoyYwbcMgd24PdXb4H5Fz2odQNJdtPBMb6",
  "key20": "4hoTmwwXX5kAuWj6hknXwifvX9HJrmKxZd2TVAPUPXFxPhJp8qDT8SWYBZ8giFsyPy5JRjoh5gfnGfp6WHYWmY7v",
  "key21": "4b4dXvZ8faqDSUaiRqpxbRhEVy8J86ustLGDhziLPf24aPxst4GHmSVF5hN4hkQBCH4BRwN5oczLmFVyy8NnEBUt",
  "key22": "63ifhFwYp2spfUMoznMn77yjDh5QvGnfHPvwatq8hBkLWT65QqLC9DscdxL8bhE2JM7NWscW68dad6UxopbiZQcw",
  "key23": "5HQzqriAoRtwRHkpEiCabNzLR7uqMTEwXxJ46WwRiiB93A8s1KAunGg6pQPCNz6nzuLYQfR9WYW2NiMEu6HayLbL",
  "key24": "5bMtHvKxYBA3UWq9vSp78gPhpyu5uiAbU1Seq2jUm6Lax9njdutEQPhW9T931F1DPdQnnPd24LUiWHTzq44FmNHy",
  "key25": "2c7bpUuKFnTFfusVSo1eonj7s1mvskvWueZyrL3p1GYMgcCnszUQRLb6CYdG7FPjDFTHZ7hin5BFDCowJFFFMX1L",
  "key26": "3KLkBNzZ4yqJv7Lc1wJ3XBA6yczv8mWmw9zJ395xVHBBeq4xMzM4HxP9Q2o1WNpZLQNJafE27ph3T5gdPmh99p6n",
  "key27": "5AdoiKv746vCY7oy7NcHoGmT833PSywpfp4MN1PGLLTgiJzhktuBrXdnLdkKU6Rg4qCzhexRiixkgLw7REo9F7eP",
  "key28": "2hbTaHYAJU4CxiiVmHMLvMeRurJcMkR6MWZzPQbDvJomtk2Ac9PYAyLp23hLv6JLTPUCb3PHPcaPnMEpQWcMrmAe",
  "key29": "226zyQz7kFyPqmP1x5xLQRebWSKgkPBpeXN5nJMSSt2FB2WNGDesJ8diB8jV2QqpPRQZ17aLMp3pon1RaTMkwngL",
  "key30": "3jBcFM6Z6y4qZDuLN5Hv2YfzWrKKMtkk6aQPfNXxPYDsPANdLuQ7ckC8TujVzcs9RX6inJGkqXnXg7uKY3grWucr"
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
