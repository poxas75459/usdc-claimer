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
    "3pbuJd4CPvkqcyx56GWNUsD9q1XQ9z5ahy7F775k5RyTixoj27UbuTP3CD4U8CaRQ4jKPE2gYXdFZQjzpriGwpKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Rf34sMm4FNaRhsSTRwuoZXv7yzHgf9g63hDYqMAJPyCFkFUQwihaxxN4CrfERjdG7ZAXJ82UXgXFCuXMiVSgUn",
  "key1": "5ARfH56tSvEYdT7H2Sk36AJD9RUo7xNwkBRwStHer8sz5B9TRhtamtavxFkkzGSb5o75HR42hQTzK3hknMkCkJtf",
  "key2": "66vyxE7BzApy9CDYioxUSzM2Qa44c7eJtzp9JtTD1SCkARpqDTf6PdpNbZLB2ynHPBiNkf67NFEzusga6mDruGNt",
  "key3": "2VDgZLX2umo21vDu32ZDNJwTtfr33Hv3Eg5J9WZ2wyxMRpChe7uBuKMZwo9QEswE2dyooCU1MuTRqKNt3GtxuPHM",
  "key4": "5KiksFr4vqhEbFt1L8yf4kptJfdXvSK2em75NwGVcwJvkJzP876CBuPujZynkmAHi3o69EQg9ZTkPLH4HN6Nqjo2",
  "key5": "3aujZhktb9Bi1w8f5Ey9DzyyeYRfdks5LDJqN6QiAha1n6ituqT9DxG4fDTcN7K44fXU45QLegV2SqvjUXCFyAoc",
  "key6": "DDDAvcNzAA6AuAceTEvQVNxHULk4oyBvktoGETRwPxwYPAxTPbN3DtdZ84GZWCwM9ooMtF5qQEfTx73NSz59k5F",
  "key7": "2AEDAQawvGVKUfXDQmSuZiC5HBwNsBMdWSFgDpBXZedFiQQWgnRrm5X9sJQgYE3YEVKZ7dk7SScDuqPAwwhaom2x",
  "key8": "4uA6njkbg7djB67sWtq1ivapRzRdjoapSmaAoBiHgY5GDPgVuX5W5DjqG5yc8Tg76RrzvR7WUf85G6LXVThNCGVh",
  "key9": "2mdpUJ5fCPWguhLHhU8tr2EnAoQoAVXfJuRyX3Uudp4aytZKeumhM7XcrhEUVYSqgcX4uQZ3tXuvSM6fzxpB3uqC",
  "key10": "3XyShXBzZLE2rsWbFkym1nKmYxU2RQnrRaCAK5TfWhUtN8dYxAvzUk6DkvpUUmN22H6R3zBxzJXsBk7rucazULLY",
  "key11": "u6iVbxN892kGFxECvmSUK2ppqGXZNcZFewuZjH3oZDLrT6SNJfpD4iCE6uUket2rv9TBiJcQcfboKkrTxgnZnvP",
  "key12": "58QXsRThtpdbb4qc8Gw7HumBxyq8FmH7V4qwFBig1STL16qGhXfbvU7ogoadFDygmgRpK3BHBpp6ZEv1YRLLksKh",
  "key13": "3x8GyPFnvcPxgDroru3jdYLJyhnuPxeK4WUwxHqRkTrPHinPBciB6nEGrjy1cxtT978vR144iZEXoWBFtCjARURb",
  "key14": "4oBymho32Y6wSD9YLyKo9RnHuyhdyeysErxpXAvu66bdiDEjpQoXyxGjkRcw6D7Ridw8YkGn1k4SazVnnnE2DxhC",
  "key15": "4gDm2mPHQ9SgRyGH1qzHUQRaqC3NedaDDqaG7iUif45NdugWk6YbJGw4uszZTVyQrymDoqibez5v3A1rV5Ftdq7m",
  "key16": "24r3HQKvgMwiaLoBjesT6bPtXRZHcUjPoGSqjCTdz5ueDWwUkpT3cU8NdxgpX7bFJ6sa6Zh4oitiTyDhZwA6XShw",
  "key17": "8vGi57dgK77hwNdKCiE68DvW4vRbLcAMrq2z78S1w7Y5dVtUQ6qFACRUejZ7XA5DcJsmrcsGgyGU7CSQsnXMtpo",
  "key18": "3QbjcSV3nbzfHu68Q7Egr773L2DEtbUHvauRUR9pQ2CNPjGWTJ7hpJHc8mrVKYifx7gVup49YWMfce7x6F3sez96",
  "key19": "htZS3G5VE89BT9dz1nNF9JnspgjRA6KK7EBQPHQzdxLkBwBdacaCWPTnmqtyqhnDpmx4Gzo1r2WHbkjZhQdifAB",
  "key20": "4aCpFW14rVxN4KfnKQbz5w3yjS8pXvNzb1P7u9a6YtZ9BmuNVj9kPYEHXRhB1jFjraHdLexdGWMaLaYZ3wsQ4qNe",
  "key21": "5nPJBSNrd2ywPDZrcmCvLT5tBFxtGeixd23xpzDwLn8u7FsYh6y2RSN43X5LFgpE27H2XZp9dUYanW3wgHhm8w5f",
  "key22": "2fJA7YtRTuxcJACwWrrSAwo6Ziyg4zJW5J4K4D1nvu3tiaL3shrZ71yNTeT9Dtxh2Hrscds12YaYytXHeujdHFRc",
  "key23": "2wqZH6i56YqajZa4SFHvC5skgJ6N3AUPu21LYNvJcJ3pFL6aXJFkjUzpCWNDHjqC4vhxi9SJfLDQhDoQHL5WKFvU",
  "key24": "3YE2XNqn52NuTNFVAfMceX7PiYPrDLcPoQHsxYFwDhbLJ3yFnwf7WusX2SepJWigHYjoumKocVMU66JszH9zhSzT",
  "key25": "5zXLEKyoy74gSxhjQGE77yh6eBL93KcJchsSWmH8HNFsZdt5dE8vd7uzvfAiNVDNA213v3BgpdbeE2zbyoMWQpdq",
  "key26": "SmssSt2BZnqaV7Uw2mnx5nXzbYWzFX9xh1EXSv4ncBu1y2EmGsAgnhUKDaUQEz2mELaFVLrRxMWCYTgFyKA5m3Q",
  "key27": "4xzpJ7tZxo5gJsDq1uibDLsDyaGzh2sG81d8nd5rF7DZmJftdegLxDzBJRDrDMPR2vNGEt7qi5NThHP8gkyUau6s",
  "key28": "VHc9e4M9Fq9cv1SdKoxAKKi8rsHPNUPSk1R4h1YKne4i7KQPxbkDodJBj7sMiB6HKwXcWFibWRBxUgsX72XZk5J",
  "key29": "5f4iiZQZm7gaAXHsQu6tPumjVkqWMv55suCJpeP83wBpoibDTwdxQK7aQGhMSs2MzrcDnkXQNjRD6W9eyzX3XG4u",
  "key30": "31AELJhPNHr8ZHUeRK3Z1Zv4CnMe8ux6a6omGkVKrLbhRJGKRoscpEfzvtAHLx98qDKm2aD22YbPLPyemnffy8oK",
  "key31": "5GNavhZJKbg8KyJPqpYjWLSBjHqHaR1eDDFxXfT3sTnUEpozEYKjvZG3uz74MNtZSv162p1wftYG13JvkerKhTJt",
  "key32": "3Hvd6S7SW1TPnJGpmkxGLrbcL7UR5oa5cg9rcJFSLGyZAK6zhtMjenpRAXap5444zAwodiepn8ZLtuw1RGa1bCBf",
  "key33": "5rhYCoYMGMr2uPj2M3GPGpHBTy6Z2ZQFMkmuKFgFPyJYaSj2D2LtgKCSsaBm35frr9AoQ7tLvAHsEX9PzirDGZk3"
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
