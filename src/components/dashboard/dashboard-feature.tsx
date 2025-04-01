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
    "3JraQpZceLRBZhdu9hXA75fGcs9SAF8Dm35hQmUdLexWK2s5R2jxaY78U97whbBf9x8pHbGL6FJX6fN81mn8BCtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wcSe4Ytt4t4kVsttun67iZ9ir1oAbjRQNRMePfoUxffUTPQC82Gfs1mjPcedFoTy9eG9jJjQJhe12kWojySB8o",
  "key1": "48FXcKcVrGAUneCWR1rKrj2vWxEyuBDbrhLmaCiYG8jGEA9wLhs1WDSHECgmrvWZ6TFdYFqU1bPGWSBZRanDoFpm",
  "key2": "2tE4E7PquxM6YrejtX9RxnaNcVqoACiJzMS7uuchdwTWWsTaBV3awj64bhRDaFUZmPkGRbZn67oB94SC97C6SWBj",
  "key3": "3aDeUmCSj1Nmvv6ww4eGTFEJn33aRvQaEgJFGQkBCroj6P4r2762SKu8iNYoyrAL71uqj6WMQiXDGr6BKt41W2vw",
  "key4": "22tBgNU6PtUaTCipJ1EcAwqQT8JmMFXbeuKEbU4MxevPm88MKWZ6BWhXiwMJzmndowYXFGjzwE7HE7dBwFqkX2yz",
  "key5": "26bkztrCivpLJRd9sdn84Gnu3im5HXx1S5AVGw7mqmKugSyPW85LfVpN5iU32s2fvNKL99Gn9nF263RbkxPFT5FB",
  "key6": "5Li8Bb6Zi4gs5aG2fvuhZtJuiypFuVse7RneQz1YTmyLP2CSHURKgqHDBXoMzr4jQ8ivRwdLxJmAAhhPFfE2zYG8",
  "key7": "3ns1KbkhQTxCUo94A7cRPtSadGWsNQZ1pfPmxxstyftnmuAGn22DY5w7kwTNr3ew7xQux6fRddY3qHp9mB97Bp9A",
  "key8": "5wTinqBw2VVKJ27AxnNQN5DLJc8972RsDUKH2XwSz8nQohLmA4h3nBbViXqxkqDdtvzRTqqBbzuud62cswJGP8Zf",
  "key9": "kY9Q55G4pQvRce2p9teLNg8BmU5MFMpvCopbaFCMfjd3oXt3nyU8hP9uM62pN8wwHUMMdrH9PVV3Urfx3Bj9Hvf",
  "key10": "3cby5ZDKKJrCpEzRCKGCPjuszbY7GBPiAe7L88hYRpKKxyx9wsLqu5VvHNMHasmkuLPZYLRJ4ETyrW9ePBZBiEcr",
  "key11": "2EXeU8iZJfc5mUJnHFKZEmoYpiMZ3jCK4DXEq8DPkUjnPycxB8VcBDpbSHk6cpmxvtomKA92PcqbYigr3xQTmk85",
  "key12": "2izYbUvWcoopAd3e5JZLCfTRKsoaPRC697MR4E9EkWHd8FDccdi1VBTbs4EKpk9LhntjxFK8M9JjSKc3UEvYEPUQ",
  "key13": "kCqAHcJg9iMkUTnyGXA4dPkpXZGE4TjCqHZjkBJWiqWf4EKwueofS5ffVvaDpUW7vzJkWqc52QEAjrpoVkWRHd8",
  "key14": "5pPhzZVkcSGGJdWucKhQ8QUh4RpAbF7UVdwJmvTx93SDFQ9jRjP9YEYk7sKSiFCLuRm4B5YpqUdDTeKGspEVCSP3",
  "key15": "3tgXKeBTMutXv25TMLQiSvyKmPpSkveydFiytq7EXjLwYrqgCSdNBPcg7epEwimw7NKrZANmr6KjXaegwbuN9x7v",
  "key16": "5WRtWzkdq8RZFzjJkdpxzpz3qtz3UCVsSVi4ZXsL8e8obpfswaybibg8S32JcQAumLa7J9THNVZALPd8Dvx1qS3n",
  "key17": "5hjSRMYEKTH4NrraGN6tijDZCe64y3xydwFur5BRwa4fetaANpHLXA8Mso652UrFVbMksWkoqfMZhQzU1eeCwj23",
  "key18": "2QQQejMasKF29hHtpNbgU9E7EqvxKtmH6vSjtvrJPcLRsH6N9uHFqtR6EFRdTLiMc3kPSHUKJfwxngmNdXmBSgyZ",
  "key19": "3GNVE2uUweCfsCAWRm2Zd19abnjh22yttQX9YXgQyS3JbRxdjaUmGnncqtxWbTKQueu4c2QubAPJQb2mUNggHb7E",
  "key20": "3TDn4aYPKUN83uHBBAcW4TGR9jHBc4n7YpS3PnYFqNSuKZkpLNvtXumpe9SuiFFNYCajGuzbf3eF8isNAkaZcbXb",
  "key21": "5hEU8d6jJLuPb93ebZkKx4t9WKP3GmfsKBfn1uYqsncvZMdiWZH5pid5C6nm65Dd8GnauWcTLxhPmoKdpZmDvKjV",
  "key22": "5hK5RM998gRGTVWpXrZk9YYN3xBxL9ffjMJ8qFJEggoAFcEAedGHnZQvZCumY2SSydYaWz9vKoMvL3qPRdkaEcym",
  "key23": "J1WVBhxMtdKpYqUo49z38jSbbvtTPFARAjwHQ9NyGX4w6ntpyX7vvgr1fMDj5gfiK7KXJAMLGA48srr3uPQrbsm",
  "key24": "BAAFy7bMmRc7rp1BBCkcdtmPfRWvjhzFn4tWfHpmz9UuJEeKNGzvgvsBRwndVxpDc42n2mpFnR1p7fcMQdba5z9",
  "key25": "yr8ZJPRbzqp1cFA5D8BkbLGzu6xhdsXjJtyBQCnp4vruDuY2coMGMAYm5Q147TxjWtb96D9GwuUg5cQyAf8CPaV",
  "key26": "TPQc6meVZVWeKFmZmbqc5CqyLAT3bsF4XHf78K3H29b2NgcQFGbbWCvYu3okdHagQkVUJfQJZcPwaXnpBs6C8Yo",
  "key27": "2vqnT6gPgf2CtA32p7FhyssaJ1ZkmYuf2VnboJpYHRNFTnfgu6zyBarWTzY4bQuoLr5t5c4Fd7LGRNN52R1nLaj1",
  "key28": "3bJRGaweQXkxkdJuzBhVqEXGCk9Bqia5BP8B5S9dnPb94rEfybqgAoU9g2TBjeFAkZHCdQQQuVZN8KzHkH8ghSTG",
  "key29": "41dio2nqy6iQVa6nhHYKvv9SoA7nLFPbBv2GFxQvswEEgQ7YUYRyKbdFTPRqdsei5vGCZRTZiRMFR8TJ2eYCHs9P",
  "key30": "4SkbHs8akDLbRSKebVYpdWor1oqpvpG4fRtwS11SRZc7fL9nGMJhJ5enCnbRNvQ5xEWBTdbcUFmwpuod4WNCh1w3",
  "key31": "4yiuLCkn5tLFdDy4mMQ6XFt4crq9qqw6doFywd8Dtd4Kxdr4TWbpPJmWbTLnf87tYbNgCEo1UsRBX93NkfWDHoCW",
  "key32": "3NmDGQBNZDzveVLBVP7ZL47vCn9gXsoU1hAQfnmStRMf1VtjDrPVU4RHWyjX1ZdEd5fv8Jv1czdE2ZCD94kgW8na",
  "key33": "j4i2qJ9t9273sopwNXBW6gGMWfMNyQqiZYoHoAfEjQmtNgmAjBsoCgcMuoQMWbjaxpEbvAmpCBfRLkaeaXBhMda",
  "key34": "2NzzCgvna9okRRfBaDB7h5EdDnCH8PiDHJ2zmDT78HZ3RzdV4BEJCYimDJoMnx2e68GwkxfkcvBEXSDkyUMY8dJk",
  "key35": "3dJqoSX4pdotcdXatKuzdyfRXtVAMTSWWBqAUnt4bbNpnAWvMMxtHPfyrNFwposhrT3BWVyaRnB5VoZnMy8cho6H",
  "key36": "2wr5tmeySbs7w6CGfrQJgDsUPUbeskwpvyn3vRv1mwBkG8q22pL6hf7wYhkzYmwzvMbiseYTtVLn47QN67bsdtzL",
  "key37": "2P8jbaptA7CVeA7akAqDDdaPJwj14YYvWTqEkE1Fi5LShprRPCgoVZcF1ZWWNKphDbD2yWyiKSArxScFcFy8qfTL",
  "key38": "47eXGKxoxxgfXcYByBa3dS6ZQY5YfKtkPrpLfUKcxvRa69A9hkyVvEjby8fVc7ZsmZsNAB1Gu4F9Br4ou1s5HCHB",
  "key39": "5thYmgdZVMyeT22WmNVnCUNmjnKYVN5y8BoKGfBTCDTe36qaF34GvMtnVXezt8LnUyGpVUSJLNc4TvERBkQ7M4qb",
  "key40": "5rKMKyUFAzaM3DDBci7smdGpXFdDFef2Mx9mPJDjTnvp8jpFZGbCmz1RaPyqjs2TDXic7hZMrMmLiSnM9UEs1cCn",
  "key41": "5yhVSv8yHKGJDEsHGWmH5gVA33Yb4N1fqQ7kejUDZ54iYtvZoBcTKZcNiF97QnZ5p3nciCx2bogG8WtQQTQvPvGH"
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
