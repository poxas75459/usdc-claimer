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
    "5EFf5HbWtuAyMAgS3JDjQFaR5cH7NqghS6cNBJwriwXLcsHBF2FqSiNZMxeAFY3EUMdxJw6fsFk3XJwmVmjKcTsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1X9UwBfNzJW9vh9KAphF4qDEaqWz638129n57jxAt23Thvf23YVcCLiDuGWvmSnGcUzZkzS2aFPssaNPFRFVdB",
  "key1": "3D2MKbrS8cX6MH7Q8c49aXgHffxBCCwuur5Wz5wTcr4NRu9r1x5YajpJiaBRQM7mAAP2RRRJ6d19s5NSpPvh5TuE",
  "key2": "34gqhtiaarpNz6eRH2FahZALiQ4SAXyEVsqUSerSin1STWJzbKJVH76nBn9jqrUzTJWPZ1A2yUpbZN5NcBGBgVZu",
  "key3": "4LbAhLEdQmh7ZrGkTXfG5WjiFGDJvNnRVtThiri4JtXCwfXwrGPbx71hhK9WrwW3pmNN61EfSd2JiCNXVbXnA9QF",
  "key4": "67ZDZk5Rh9UEKQUGLNyHAC9AAqLGp1vMgaTjR1LyYCuZ23ie16WTB1Svpcy7zhMnnJeGt69aT3k7hJDp7FB5VxqM",
  "key5": "4QDPFBu6cRT1U39m71oFtUkUMNCCSaYDUUCt79YmUZDtEgrhCWUzViX2PWb7DvdsZdTtEXY2NSG7g1noP6KsA9Vt",
  "key6": "5H2pg4tzk9GdgJvajVAG8SLFd4aEsuhJ7dcH4YrsFJNCADP7cXWbkXcmB73K418YcLMcP5i2xeetUCD9a8k6NgSp",
  "key7": "4PWfFB2GRUpzh7X7FddvnygKyXZfri6rfvmBYK7Cd54WUvbqoki8kffuiVuCARKcqrJm9iVHjVfU2h3SuUgFQntx",
  "key8": "4ei1jxke8KRmSYS3xCctb39D5haKiHhkyAiXqqFh2J42ZEomdZooWV1KgeBTThD935RG5UD6f37mzwGSypZVvvis",
  "key9": "2CjVktN5jjhnirFJFxziqeNqmU7ZQxwdsu5SMw8qhFhpPDDFUmTYaKT7owyRy5pifeAA9X1MzeY75k7Pm5EeatuF",
  "key10": "53V3koxKY8TNhHy7rMVkAKVnKd5QARD5DYGuRh1Uipa52NK4CGXc1A5fZQnGpKSUeUJRh2XQqVGsiYMLREpVGVGd",
  "key11": "5MvEeKVa3m9YogM92Aa6kKNw9udsNnwdUCeH3uwnp8zkQND13K4qvNfPCYRxnSi62EcDrVQnQZBkQsrmQwaHtVmv",
  "key12": "RFc1t3eNHbx6zwjWokNhk3YWFSQHRt34Uk9FhMek7Gow8wf5AFDdAaqAMVkd2TuFMVkf6sfCiUGwLEGSNZ568jK",
  "key13": "62oizyu21FQb3Du3BHmttfnPKcVJ35Gu8LzvpvubVoLRfBokhyAMGAMAbpUNH89GvcSEZSawqaHBkXXXV345TAk1",
  "key14": "2Yq4tpyBN5raT2mSPju8fEr41M7VmF4r2H1mcVryZcGUZgJsKXgi78GkJjVKDrfNyZmofvBEFxo75fxLfAyYkj68",
  "key15": "FNrGS2YrS7eCyFqmTSNti58brEqFX2NJmMEm9aymzQJXSAEAPYNpJe3RG4Aza8dvu6YtinPvoxSd3gw9bbiYGzQ",
  "key16": "LgsyyVXH2uieCH4mbDggnzySdvTCke89V66FNkNLsbaEcggiBSUcUaHRwyzhrkBTS9qc5CJUJxZjdo19FE9yQYv",
  "key17": "45uEfNAc2dqg69B9QKgSQJaE5v5q8XXAZiNSNRqfRoS8jQ7jRgMmvnnAWfXS4wV9U2UzHrxz78QtVVA9Lhyfcvfm",
  "key18": "5f6K3jn9bpvWk1zCCdwCWoqkYKYagc1Yi1Z8eMZiBHMSCfkJ7yqo8oEm4ffn36PXmuVtKFdvQUaEXFhF4mJodKm",
  "key19": "2BHgRLu3PkJmzy9ngPJWZMmMvg6Zfwwa19qc9nieaZigTkazRMVBT8CvXGi3nPkJoNxkUuSUTAw4dHy5w3PdGM1C",
  "key20": "24KvvRMgpX1DuHMPe5HwRqoRq7Xvo2Xzxcm7F6dfFH5HMZmLVMEDxK6wcxYReZa9EUp28TBwCg3vfjCdxrsAR31K",
  "key21": "4GRZXasarfT48Z78LPEYNq4hxKQ3ZZx7AaBHSFcAtijZeti8uYxJjEYKXvwpL67jwq39o1KMNekq4LFAzXNaft1t",
  "key22": "2XvdjNY9ZW2ZppwDkFo3yndP5x3eymiQnt6nzW5V43FUs6z9mYtCbybnGT13SN6b5Gr8MSkTMedBJS2BnSYayFkC",
  "key23": "2RYH69ktpfHgoAaZ2teTEiZ4vcvnmZY2LvVSKhf4NTgo2UsPSPEY5vZuaF7LvtMmqR7L719RnJGuntbDCXstQkUb",
  "key24": "hrrskr7PKoHqFoFZEz6r6L3kv3i3ngwkTx5qaxsgnuCrWG4AeRYxh1Lsh9tgi6gJJ476wao1PikjWfpToTvcH1E",
  "key25": "3AF2AyckrHDAevj3cXfiuJWosNiX7ZGJovvkwZykSbgBYgzR3iBUVZsUuhpuNr4bYhVydRPLk4UBB6Q6zxUyzfM1",
  "key26": "i6nYfRpAHE74UtQCiCnujgeqhwsjhcMpMg9Kbmg9skhaDT5G9op5bKDjHi3jTZz4bLjVd6xrw9BMCrRNJHempt1",
  "key27": "3TDJHUJQUGDUQ1yLYx2Ar12ViMgM7bptJVeDZrzBet2PS1YsgDoZ75CUtcBpY4YPSWL5Rp6gSdjJGtdTPEAqKbd9",
  "key28": "3RoqaAK2JGkKRBajxo9hxoSZrDV6J8MVwK96aiSoRLXCHS2zEq4rSex5Adp6cdczKaoEyqVSvT3rpcKrVZH8mcgS",
  "key29": "5tr4w3mBgCrYTKiR9TwXcszSE7QFMf5M5hLWxJSCV1gEjfwgxHR3jZf3Zu91hSCC719pwA9uEgqpmbiNUZJaqa6h",
  "key30": "4twzM7YqUeKUYvoqRCFSF9XbNaCQZHYNdYA9aP1EPMJu4mnahkDEHQtVSL6jPNFg6w3Hf8SqzgfFXRJEXtEtgpDp",
  "key31": "5L1XF974cSqBkD6Lqd62eRq32sNAsATVePZYw1NJAKoNpmcMRtCahsNViJGNLL63bvTBUrboMMhLCMzN3pK1dJkw",
  "key32": "2fHcRUQ1nBrgThLxRugbJMAPogumULvFffM4cYRizdaZjMrXpmf5cSzr4aSTDYVNvdtto4mFNetPgndPw4Dea2jV",
  "key33": "2fz9BsYU5j1BdFK5vx1j1WKhgGu4Xtu3mdxsxGxRZpndFSyAmeaBv52h4AoxdWpic1P6AxTYet8zKaZZ45tuLRc5",
  "key34": "42Rzv6TEWoRZJZZuicGe9Lgq1DX3uQjm679ooHjipUfqXzUrp1ZenrXq7cMoQhNNdyvCHwXufxApUHZSgbghUUET",
  "key35": "5vogNsVEh5mXPK5NGA9YNKxnfooaiazmaYMz2KkG7FsDqDtBgyHhzPo4k7hsiUCQ4d8SyotXVYUNYAEGFhmBNkpG",
  "key36": "3H479PpUc8otCEEJi3H2WgLckFePYCzjbsJDqReTW7Qdh6d47Fkc6rkMTRQDkrgNQkptcqp8QVtopDWQLCRBd9RL",
  "key37": "3jNRsEStqFk8hR2x96h5pwVC2VTq31qMdXM9NqBobhxKtDuzodsnAcuHRxP5Y9iKVLgANCSk3CTqwHW1NhwuBns4",
  "key38": "4d6vEdnfEwcBSrm6JjDBCWMGDYQ3rDUHeaLYyWsWm8cb1f5a7r2JV4gsWMjStUAekwZLdpks4c2iMzJRiMSwPnNW"
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
