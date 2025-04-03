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
    "4aj6pf5Jth8SaBHUai5q7fmTmpEN5rMspyX2QkwgBBXUBTboyvS6UpwaDEYuLdytdU9ituNkdxTH1uSeEVunVJah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHRBjz1DAkhhAE8FELgoYHfe2GXfgKxTbTU5UpeNh7aaoA2LnpqrqE5T5PmsZyhMtLpBPjxQkyn8gYB4bDiVfyw",
  "key1": "5XfqfYo3RdVFATMfD7bCMCtyV6TPF2nU2siceuJXHhGV4u9wYX8tZL3b3ez85K1Pgxga9vpL9DVraqSXNkgz2QY9",
  "key2": "59aw9mjmGhKVWem8uBj2RZps3xzU2d1TWkenJNxpWZR9cHjU9Nck8M9snhhRFqD5XFs5p7sAa3hohVw4xt6Q2xa6",
  "key3": "BUZQ4SQer2yPSFehx5GYx9iszqKesRFKFYtrrZa6t9mETCBXxZC4FH7znM3FtskpA2gh7DwNQVNnxhxXKBjYnwQ",
  "key4": "4DFNixunLheiRczbuQ5AeK9L6iDMcFzwbbFGD2anaHiq4AV1nnXBHF7qCAh16hxv4hve7MtkE45uVa9aXf26aMe6",
  "key5": "2QKNc8nPuPTuirg7wbpnYcGt94rPzVc2mpWfhgKDVsitYjjFRtQrt6fc55XvtfqVCVemPSV43FxmrAPrxpX4Ha3x",
  "key6": "2KsJV1ZeDUK8DjWnbwkbZDrwkJHazBnwNbLVGcX3FKTJNrrGTZebRXgAFCmjaNEJvGZ1SMNjq5Si7sJfD4BGHEsj",
  "key7": "MTY7zJCa8M42n2cLbFqBvJ1yPnYJN6jp6d9ucCBrNpudb22ZNwGUd9TQ9G3tDjfMoR7rAoqeYsyoxdAB1cvkAPG",
  "key8": "4v3LzG9NunNW8gXRDbGVFGhYTS5D2JvDziFRiM8F65NAT8UtArwsZLC2dwBVYvXAczdcAzoxTfzeQBuf6x2wg5eX",
  "key9": "5XcnWVUQDP4zLCdWAQTZUUUzQQU7YhdhvWWbdYAj6aGrJ5oJfo4hFXxDwXgNc5TQTq4yX2VkX6ScNVniogYbjcPX",
  "key10": "9BnzBDAP5ttAMUieUmqvU7uiN1Fr6XB2KyetZw5LyAvwfoojRKnLap5UgihyadF7smkYfBW5uBbsgLeM1gtV3hb",
  "key11": "5Fekd7ythk9Z9ris2odPNaNavCreTsZP3uecsUoBPnGgaj1xoaQT67VTP8QFZcjJEWpHeve2T2DqBtTHPsJ4Nfg9",
  "key12": "3V5GTSDUijgoJgvXzUvavb2xSsbUuhbmAjAREwkBwjznGLpR51sEY65hPrDtD2HnhSmqtEbNYhw8EUosrH1fsyLg",
  "key13": "52HRhJS6n3RXdN3YM2KvG5jAiqPfYqM2D7HkFxaEiTkz82QyZQyDegETYbbobmJKXhcgjNpLiTSr3VejMgSVNb8X",
  "key14": "kn6t3CCFZm7tJnZw5abdqrSzuMscivsTi5kgFKhScJJGXRCbVAcFkVby9Y2RYUtiu1K5fXnvFyFAtR7W9EzKhoc",
  "key15": "4kx3neRXtVtqeCa2p28SmBVnq5DhBQTBjLm7bGkxJPh9Yx8ogPTdstrCJSQ7b61X91cMnA5rCbfJ5Vie6fNhoaiD",
  "key16": "4Ae3kViGDnyntMreuS2FEYHJ1cWiAkiiKKa1h7k9si1hPv3qX7uu6xhYHfdGMA8kZX7ZQQEtWKuii3NJUvSpd4HM",
  "key17": "2CZAcZY3xxSyG88GGhYgccsLG4mPEjXzr6SEueEwTa3Yo8PUzVMdcDz1E5hspWz1wc9fiLWKvXvR7tptFuCNnAEu",
  "key18": "43LWJRFZm2ipbK9HL2MXHf5W3rmZai32zmWxn73gLTEHGwYcQksFpA6PkkAPLMn8KJPHHzWn7Y9xsbsUkxYPTQ8r",
  "key19": "3s7WunJwcTwiBnd5QW4W7F9SSzdmV4Uu11NzRE2jyvPFXM9ZtVZGtv7aMn1j616HBsNvaaKv3kRz6j9nkuoBjX4i",
  "key20": "34UJWwY3wdPD4kd2S63zfgKrPGSyaz8Bb9o7qkA81B8HvJPJEhVGGsfXHqNnjb4qvwh5hBUJjkBqgLiNJFKmzQcn",
  "key21": "59CKLqu8kgQgbXEGPBNcrgJbvUbAiUVjoAEsxY2uB9mM5z2QnBpAvd7Jfz41wivv8aTQ8gmN3H3L3GESghgUjDfw",
  "key22": "4XNRup6y7qvaCPBccmj8C2BEGTft4QxgQJE4Ex3CD8dsX1E7U3mTGKaHp1UEFhuZh5QJUGScJ7C5ZJnRAjqBcjk7",
  "key23": "24wdVqm4BcdkjkUiJUbY2ZuPxFQ8T4AQtjpjaqMKTJv1s6WRmyQm27uju4qaRAN8Hk5nRuq3GELmdDw1mKPE6Wdy",
  "key24": "4TymFoDzpFgCvGwjSFs9Ern1jWp6RMPk1rbZ4kAutZYKuQdifN8wypRudKQpw8eQ2z1rL8xFhKB2an1TN7ynjNn6",
  "key25": "oaDH1xpHNvjDuEqG7mXpxkh3qHjZ39hixQ1Q68ZB3Wcho3UyS84ukqCMHTQBEToZ8YNBmtEVN3Tkweb4ifpui6k",
  "key26": "4btvqejgg4NVNRw5QAG48ei2bWFHtuwevgG4Vj3DNbHYsSppxjYHfJ1RNUvgayng6VdFiRMVmMZtnfz3uvy7qEt9",
  "key27": "4uJdGJRyJykY7bJtYAVj2Kc3UEs3A2xtdcud4igrWgLPXfByHhvEdpaqtwgyod44qH4PmXdBssng6MKBvR56opDy",
  "key28": "4Cu6549QAscfaYBMvB4VZCARCU1C65sNYhobZU34cKBUnvLfS9y3upN7nHkProLS5zDTweyyNU2wGNi7PVBLhYEn",
  "key29": "5mEjPCtCrjjFB4RabKCMMwCw3isfsiecya4ZkSa6LRZPM19E42zytL763rp2iZ4pKhVvsyaTc7zQta51tiAKNt2o",
  "key30": "5XtMNVuZR8MWaFDtXVKnj4UVjCBKgZFTYtjqEwCWSyak1RK1mHR3qNBcA82nmN3qu2SMDuWb7bR1hEHtPGui9V39",
  "key31": "5AUDTdV1iJ45CfwHyELFF9dJYmSK5w39zdMowioSsCDEDa7zJfgsgvWSYHebYWg6HLxmFhHWPWWdquXJoroiPTYP",
  "key32": "3KT8SnCm5eWkxzRya8eX3zpiYUMX2xfDkteZHxhzVQp6xKskLGqYzd3GbEDRNriv4jywJU9wNGNAjWrVpyiLtzyw",
  "key33": "3uLyHcmwckC77s7Ro4xAgrKVrcFi73Q1wZnaEB84UhV9rYLtEYyktifpjSun4cMQancic6qRHDMg68bAJhXxx6t6",
  "key34": "GN6qpQt1GjQrBXzLbaUoct8BoVjfWWTRavUJsDgab5cZgRTwu87CQtFSxU7yC92jD86h3xaeFwA7n6VCjUYbpZS",
  "key35": "4QHk3AycQHSTEbEfDXGcyY3ZaDpQ8BvXh3vy9mFWL7jG9HZM5WbwFyvA1bKrhoVyjgrjW8D23UZLqA5DC2A5GtDP",
  "key36": "2nnuwBX2YcE8HN7ndTPwaJZKkY3yxcU6YQ4CKcTBfR9dX4MSnWFZYroqtiK6bUdFH5vKhmv2eDRGjMaPiCTfH6RZ",
  "key37": "32QRbutCijNMfkfMjw1dwiuaX72TijhhqM5WxrpJpNutRQt6eatyBE3XdgvDEGbwAKXVg1AoiaphsNeb1hXshDhe",
  "key38": "3FHHYpUPGok4GUDQJk6er3mbj8pmoufDcQbQSLmyyhebUEMR91cBfQxpwRjjE5XmCDLHwCyNyU2emSA5gMe2ypNh",
  "key39": "TYi3RK1GCXEhmPb1dZPgsvkoCgfPbtTmYk8gS3rp9X5vKuvLmrWve9XmCYc7dq66X7wtuE6my42rDT1mD5Za38e",
  "key40": "21zAi9fUsDeFmQ3i7ig23841hTdET3S9hrXkyaAbGmXpctpwN96H7TAvVP4FGZyefLxBnCyHv7ufm95pnNENqsWX",
  "key41": "2dkZYvPhvLePH6VUvXuJLxaExXvF4Pu99Ceu5f9WyHpDgmirrLZyZKL2u9Kduv9XJJ8KbSGkHVaH48atmMzqTL6N",
  "key42": "34wH7WTAA6bRY72JNqSScASBtHK7gWQf9Vk8RpFKgCidEtXaygnnH47caPivi9BLgn59dJRfWqgpEZdwZnX9KdF7"
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
