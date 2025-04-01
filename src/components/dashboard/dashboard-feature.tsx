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
    "66XL9jPVhdqGEmcU5JdifcnUnTfSGpMY72xBjrPVKJkLxVVb259tNKHnmU7MA1EnV4mHj2WpYdTfGxniBNTLXT3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcN66VP5A5zphFax5xCSoKo89CQQ5fYkBMHSSdtvnTuWTU8v3Up5ACnvN8DVHGcNPzojy9B77jcQsxhQDa1ki71",
  "key1": "263cWdPAuJ2LNb8gsQE6Ge56VbpaANrqUesxfZJhGcTpPPMhnjYph4SMYDTVzSQd8ZQc7VzuwK6xb3Wno6DCCs4m",
  "key2": "32SKok77VdCoBgwMfSGxc17HG5JuFLs8PTiJ5E1X3PCa4rmTbaRjyN269UNrttxtukSMAbBGghNuS32vfUnvvhrx",
  "key3": "5JGrrAke1MwxV4wzxoxMHVbp9TCCJNsqBL3wskcbwy3NbFMRY6kGZhaSwyhnGhrWq7fa5f9Aaj7QDZ7KZwXmkCmV",
  "key4": "2BXYUb8Lcof9ueoxHTsK31EHUD7Bdiim3WdxnTEPFA2GS8uaPbJwDK9fQHtGtBmRT5zfJt4tokB8poFZ7BvQ97Um",
  "key5": "5HzhTJvb5AuKdVyp5Axg1RNG3dFjgT3UvDQGCYGXCothZaGyR8idNEWb9dTqqJTJhFHeutjaz1u1nWx4ozePWmwP",
  "key6": "23pvBZ4hZyeYYBBMByCB7T7Y7hy6SFvvDyX9JTJnoPP2yEy6TRHMHNzKMNWb9qLWzEEr5tHAPksMMAjufPPVKMHi",
  "key7": "32dXrmsBwQDeWEEytfRCKY8ndbXgffg2AEkeh6REc3oY1tPgVzxofKUeJM3ofP1poH2QHEBA7SMfAGDkFVTfgykE",
  "key8": "2RH8wDZvt6AsipFYd5unijBzB3Sb4rpcpipDEpLon4mNpsPgr3tqx2bMJAhqJoTVszdPQtogVz3SRMDQJdPHiVSX",
  "key9": "65U2YGWk5h6aeCNZwYhVnduPv5tFGRRaAPF43QPNJZLEpqm91Ee6USkBPKAtETZsVNaDmZ862huLxiE29SX5Sfqf",
  "key10": "AE41o9YefuhzxUmZLtd14SNx7WqRYRLLN6DbLX2jPFkKPu99vQ6h8uT2ZWoXCcR4QR62PHKA1K4QkewK1pqpp1E",
  "key11": "4TMWcLqKUs3MzvYEJxAa1ydofwDtzbiGya9i5NzQJ7JRcjj3AKYpVRRjyQh7354qJfqaBHvf5pTs5GKUBG865rtM",
  "key12": "C5oVnwUneNN81dxBAhGr3Kxadvy3EA8aq6yzSjcRExzUXY5GLvMm3ZQYXZ6wb48NMgBccENconabdhXtaRdHgJJ",
  "key13": "3FFRyjhbH2x98JZEUDnwvtg3MbbypaVSN2hBeEm9hAMHSPHVksjHWmXrTCTQUkj6jSNf3ZAz7AgD1FUiWv4tkArx",
  "key14": "5pcuy1Z1icVcYn3SJmCDEqqzCxdyqTVqoZWpd9KGQcHnWyfQDvPzfH1wxRkNbLYspMMmA5HvWRznftvWJH3EcZpg",
  "key15": "2mTeazE6fxnPa53SiDMjaLtCSj1v7sWMvixgNsLe6JxpPQ2yoX61U5dDc34evt44mB8V7DhgRdwkec58uMSM9ML6",
  "key16": "64Zz5fkfWZ4f8S5K7yNbzpBPrG6Ud54KLDNXepYqp4k1oqyUBVRdiXoknbTD5in4hCzugNLi2Si5VSjz6DVNwHJZ",
  "key17": "5QJFT9WDHcgDwP7JQVwqW5Hcxr2sbdLSkbpux76MprLj9jdLHfc4YCRTkq4m3ZcoZqKLttwEmBokGWQxDbPb4rwX",
  "key18": "CYJTKvbFpErwbvFJsJQrpfeHaGwxDrJo14sKpKJ6cSex6cYf4jg6YM4WuATb8Jkr4aAyctRXXFChiAQXkVn6mxy",
  "key19": "5zZNZVTtafQLGyfbPs6UNsHohJt7JLmMfpNW1uraRZnmqaS7AXLdVtLH5BwtWpgUA9Z2zLmfje4iwHUGsmkvpzXd",
  "key20": "3aCi7deEjeCpbxe3u5nPx7v2FkzcnnfbjbQcAexqh3Nizvc7L9oF5a7sxUHMKsHi1YwUX163BBZSUVMtC5zN6Qbi",
  "key21": "4hz8PW6o52bNUoLK5sxcZKnr35L8AkYmVp3p7bZYi5et4Km9k9noGxrXpVruQqyDW3TXocQN1dFw4KMY8D82VW92",
  "key22": "D4Q19Kp2xYM7UMUFN9q7DJtcFgaE8ATHfUhc5MdmLc93sBNXwYVuojMAbUy59zVGbkYMJohVQeFvFEbgBqqXqwf",
  "key23": "4BAyAACdjzGC9DyUq9SRXcY18QESziQ3wvgEjcne99vcRDoQ2o1WPhk4Cxi8TWsr3FvHavKkCB2LJgyNZxabnMcE",
  "key24": "5K19anoBucxwke4frVtXoyPtX9VsfrQzPzW7p2iPPQRLH33fG6qzU9q225ujJFKKpbohN5zYE24W4q7BYd8WpQoF",
  "key25": "2MdDdmxYD3dYGYoDeL8ssFC9E8fz42P1QWn2DUGsf9f43dkz4euos8rmqRLM8mPicopbnmZmwHhs5s6aVLuGHT8K",
  "key26": "ErNZ1YWNsa43CWFJCcGYeRbVrk6vjZWDoeRbFRa4dXUPNaKq8gXHX6rLMxFWA793mc3QnjF2FKY8kC5RoBXjzys",
  "key27": "2Vt71NepVsUWL9favmGuP27ko7nTSjWuC6pU99Fc4od2DcgJ25pJKLPSvDBxvahw21DtcdmnkaGr4Fw3HjgcmxhG",
  "key28": "5Mjki1Td7CbGZYgFaQQbS2bwWhcQQaJodhEcv3o3U1GctvS2FEG1nAwnhRjNZiLzqJJyiCZDiQBypLXvGoadYYyF",
  "key29": "53DsvvuLDhqqJSUVYtkfVRjkikSUZjVGv4GVDiVYFNVZSXYBewWdMTbz4Gb7VQaa23dxjFdAjPHy1cbzsLexk1We"
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
