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
    "32GETkHs68Z9hXk9xgWMR4EuXC65n2T2uZtpYUdCWFax1uSqXzBhXxAowi3u4KvKAchYNHdRhCnQKHXR3Ug7jFw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Y6B9MJftPsk6FY7YSRWyaUfbVddbfFo1bJonn9gtWE2waEt4ZtHTkBCk5vkSDWCFPypx3sVNyjbyC6zQTpJFCp",
  "key1": "BZTPsDinBhBSib9eamn9rWdLJ7urTF6uwghJGs2LPQddT9gV3pfto2egk7tBzTpjg5CKqrPcTuUneqMSdfeLvNs",
  "key2": "2fwSfbFqMJrKBU59hR9Fje2DDq6RrBsjRahXfJtf7NudY4breVrQrPakuRYNi4w9wj12Ma9tpMFpRYnLYoiu7PPf",
  "key3": "4tyE6WAKXFtAtZQ5UKjTJoUKLiJsLjsiTxz7g1jVyWPRzGkYfM1e7XSXn6Y7AkfEgTpVTin6aM6ktZmXfDxGxLAw",
  "key4": "3dMfSEGuLATHCSaJwmHJgpTaqnvLWBZXLqZtE2sCeNAv7uGPt8GLvWoi6K5PQ5tcTMavouaGU2u1kqmffN4U6fBY",
  "key5": "5FRy5MdwaJdsg7Dun6Pvigs6Fr6pELshD8H86s3md8H3aGmNdD1DDBVdqAAcExJ6wvYsh8Yqv62yoRUWxMQevcBf",
  "key6": "47NKwm4wjq8r59tSS7kSEr5u8Papg5cWk9JpJfkjoPqdDAZuSKBF8uPo8KfGp4gkpUYSnb1f4NWyGJHQ8HwcA35Y",
  "key7": "cADp6fJNDgVcHpZW9cTveGJXw5SmgiU7hj89YWgSHTULmTAydunza1qUHFLaRAHGxMabsYivGUY4EXruYXR38Jm",
  "key8": "56VSZzBNfV58T39azqx8TYRwJsGdhM9jjftpigqdK9kzDpkFdwQkmCvM41Nb9TxxZ5n8E7vcbwSp6USfn7bf8Td5",
  "key9": "4oq4sj6DbKk4xtCTmjLjhVzmskdrUY4tWTzaePcQgmK9GzXssAVMrXNJxDpm23wFRRJ4Mq2ifQq3MihZqSdfjBTy",
  "key10": "3exCWmT1n3TVFZvaoRxPZwJHmFEEtqUr9fRaBspJqkkYn8Cr3bHcDdMjyWyW2i1MEz1nDVSFQBPvhVyiX384KQcd",
  "key11": "531fgp7U6xhb93qdNDD9yKhtHahqY1nWdQzn1xUxdxmK5SsTYEoymXhacdznr65ayRcqJSWLQ9iLMTsbzFx71m2w",
  "key12": "uK5zjrG2NfJZgrumKf5NtsWb3KUc6xuWB3Gd6GKWLTwG65tp6EMeCHKdUv4idGc331yeiNpR6QhNnuvYJ2WcGPH",
  "key13": "5TfDmVSVQRbX4LkiY57JZENgSFdwg5QCrs8vpUAcQwZGzxYY4m8AWadxn3ztEMRaEKizzDrCqX8BxZ9HYT265xUH",
  "key14": "5DpupJ5vnHNLtij1vfitQwY14FtFncsJ4W8Dn328XGFt562eiUWNMFtTCzrw6HoPUZrB114QkPVQGsbyfjyHp7EJ",
  "key15": "3PD3BtR93jjPnapnaP5BhQBCWkBqnm4ybebFuAXFpLBYvBFSjdGKM1MBHdGzNJhsPnmQc7fxGZP8QPzMrtDidX5c",
  "key16": "5gbztge4Vy4xp3eQhbRR9JPA7DBo3kEJhZGmar5JZ7B5TjaZZEdPn1XYpGT4oScJHNmUBhCbUKqiYVvPD1HeDojs",
  "key17": "ta5qXmvap1U88joxiBZkRPh3tbea1bUHycQL2ZcQAK4AYpdsAftjE42uJVdb2enBVfUWzSeAyiRm9bLnEFJDz2c",
  "key18": "3XQ2eYcsqxkZcXJJbhzs1RNHMDktvyEh8nFe9mWV4B13L5sK8oiU3WPZg7ZdLzkqvrU5yr7om5xxp33JPfScNPQq",
  "key19": "55Q4hLCoC8XKBJTy553LFVFm29SbhkXsvS9jzid6tkVbRtUbjbpEd6kJBaDjLxjaosAwQm9Tq7mNnhWT7Mw4Jfkf",
  "key20": "4A1eLofd6KNX1xFgLhbsSq12nKFUSPXGYcxPEzM45yy8c8aoCPzKroY9FLa3dYn3dUXtRmrSZHdiNC4ms9Gpe2H6",
  "key21": "52R4YQR3NGAkPX6YyJPUKr7n7EQ5UYyRtGN6jkmWJAQVsdH2y3iCQdoKL8b4sSuA6hGA34rSkWAJJ4pYsHgRK24x",
  "key22": "qsRRwc36jTiVnty78qWLt2HD9ETk7SErhCmCSVJPMPc7fk2tcrnVj2oZfJwZW5ammwKr8cjh28133xcM4NdYfGA",
  "key23": "5Y6pqoABQ6pua3Mr9VjDPMowarTrggUgp7Fk9JmbgaiEFu9j47MG3Y9xq7eetptfRe2gMCvYdZU552U8TpiWetmD",
  "key24": "5MDVXZRmdP1MdcY1v13wmhZKTWSsWuPE3crpm8yALhrUPBL4fEEpnKQYtFD8FhBYukxDWymT9L3aGXNHGqaQuXnx",
  "key25": "3zhTZoUcZQonsFJXaq2gvGSNojg6tXsf3gibSSLbsCTeoEspyF86g81jLxKgm8QMEfhPmqvhjgiK3C99xXK4zYF4",
  "key26": "4M5A53zrLBwFeuqu1E5JmpMiSB6TtFLHc2ZWitYWsUuMaJc5hqXxFfNCSnYVE8uj7qREb4ZSrRkXtJKjWG9m7riK",
  "key27": "4wurDGUhtNPax9AFbt6kzgdQ6YpD3RtQ3iNXYdphB1XR3Y9ArGGR4xt731Fp75cFMRyvQ6bAaE5AAYqeeVDey6D3",
  "key28": "RnQmMqCWA3UbZrAHnAF24qng6Fw6EJ8Ee9veCE8BvWmqXjpnzmoDp6e1WyGJvWBrK7Macqnrv3jucfPuerizq1Z",
  "key29": "5et3cUapPBFTTyLNPXexp3NhNhZ6p5RnUXmv1B3zub1uHMbHL1q3LWWGF1fbo9svvXbE9frFv3NZPTN2Ca8B58mk",
  "key30": "LdsbCGWr2Gmr89c5Bys8aYcbgGp4pAuacVDq6bGVrjb489FCDhwbbxCEEkqtQ8zEZ7Po7Rh1xhjW4gJmweNt6Da",
  "key31": "5JmGYqLXuRJGU315QX296DyBFPVy2sN95mjTnK8zvjSrevkBz8r9VvuUXya8VTnE1GfQXRfFfK7HDkjD81i6mcJq",
  "key32": "npSHRKFDihVsUqvuC1LetBvMSHMde3TAhUfhpDF3QnkGJhuqv8viHL3ERSqY7y1WQwbHW3fM3k5ZHoUWakys5bL",
  "key33": "5B7jEaT9wr1wrAoqB7PycADz3B3vbiNkuxsBdjYX5oFpY2YGNDw1EkoRm1pFkC4GdKpaHfcCPd7YACiAUsBz7efo",
  "key34": "3mUTaeGKCvCDga8wEym7WA5TJwVykLTpaYPK3eHuLdej7vsscvmk6aip6ui89tkaKZus48CjHRkz4xx6jFduzk3U",
  "key35": "3QhnGbYP6hNtJobh3EG7qYjSnhwHhUFZin6ASxjQ89dFYVWvMMVxejYsSYR6mtRZHW8UKfu83YFcCHhBSaYUvneu",
  "key36": "4hNxiVBB72NHgMY21gRPWanPm94bqnU69HEguUSs1QvuvF6dHm4UYdNh8HY8jG6CtD6i22rHE1oT3jpXfXLLyWLj",
  "key37": "5MPRwgSF2ov3iE5A6kEc6WhNjf46t97pyTVTjJEQcqumzrywktUJaK2hiHrxJGnkwa5X9A3ba2P9d2HpzDpFFMwr",
  "key38": "4MEFASRx2hrdC8sfoAGRXmAatiAPaRocHD5csnM71rQ7xYLnh3W5RcpwTZtiroRv8EfF7tz3rVb1KmMAhXip43Z8",
  "key39": "5vPJ6SpcuLU1QEFzsQ3pihP7vtQWx8taQVpB7eFWKYJBhoNPYhxRgotPEQjqBsvsFBfJLB6aS7tS5xrDqFDQuBkB",
  "key40": "oXBzZSoKy7BUjdvkebhSzTuJrxm3SaCPzzWsJZjYT9SZPN3NDZWmjEX4e6xQTfDcBcJEP22V6CjQt31GUYJeBNH",
  "key41": "fEFFqYeK1UriGPTGxgEJpvfoRtdhhZKNx1ffVfQQXaQYmv3s6k19bwVTEwjrpePS79uCGKPUE1MBWcdBwNE7dMq"
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
