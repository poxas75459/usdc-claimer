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
    "3ZehfGgWsbevXzZBUnRs5cq1jG1Dnz8uANoH794Ax4uF1BfSaFTj1rmmshdGw76CWLnFPzLhbZjfzst258kg8vgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzPxYBmAdMnJQRksfmUESpppXRF8AhHn1yhajRBfMg2KKwyG62z2zM58vYZ7zk78WdVtgNynAShpuBh7KDT9D5n",
  "key1": "3GC38QzF2qgBtLvWZWA11VeiwjYxPrXYnb68RagN4JtRhVRPZnBBXp8eeYeLJVcxqgBRirXPiexDC2jhGK6WMh3D",
  "key2": "Ax5TQveurBSVoc9yGC3iZ66nHdVAUbYqRNPndUd6uRznXek8nsweAEnhsfcUGdQFKsWVNsoNwgHpBzvYMrJJ5Kf",
  "key3": "5yekKkPZ6hgEjWNHVZhV1gDyVxWJyZ5iUoHP9MizhnbUjTh72WzBfdk5hHMpfMHueF4ePm3G2krpK4jEw3NZEeAW",
  "key4": "123tvkYmQjS96XKuXSAhpf24rU85LeSnYMg7tkE9uNL61u64NGwywsqhtRADJUACRzzAwnGrfK6TeuZCuHqbSVBb",
  "key5": "5HqncQjpBBrTGyiiY29541YGE7omWfXvAtMT89kqXcVM3SGfpUdk8gPbP479QWbWrKuQUv7wERFopBoHuJzZh4im",
  "key6": "3RadZxKmNyv27g7tFWhS4kVc72DxCEEJJR6SeKT9xxxdyDVvwcZ2EkW8AyLiCgKpR1vVkNCYTZ7cvXW2EMwRH1j9",
  "key7": "4heEp7FHA82ewYdd18vaLe2FGSQ5wgT28q8vbvXqnWwNRtfBV7zbW5MzJz7EQueENvbDfcDExDAmsSgs8zVw36bc",
  "key8": "4rQeTPpcjbRextC66C88hXZRafdSznp6SEeYGb8T797LjDFy4YftUXvAZ25jD4SPb4e4YAGbza72Ks48JuK7NG3t",
  "key9": "5hqbXLVS7S4Ccw1cZ3gcShovvBhf6VVhn2ktesVud716fGK9mJSVJEEaDRzCDXtwxXrjLCt6kfmkBavL3FiiKgvZ",
  "key10": "2adyXsvYrRNe8mZ4kuKMLxLCC6pnWmTpx8ZyqzqcgZg5WMCbMiqE52LfqUjBvpTwJFQPnQjCRo1TJJG6sj9w5vXa",
  "key11": "2hQkEcNiXNw1RFzEfhqLxQdY4b41f2dziTMygXLss1rsMj8UUDS4gbc5qcjtJCkfQRFA7ifim7w27vq4sKbFM8Ci",
  "key12": "55ZHXDW9qRgQES4xZrDybiSxTp2wCs53j1qzTG867fU2J1nKKKK9kySWo7ejkpVEFteVoEFce99oUwwahXTaBhpz",
  "key13": "2hB4oqncnqEt7yKwXACPmyij46qSE2e9u2WPmG3rFJmGsJggYKHCyX1AH7WmR8Po1Z8w6oQT1vfPMdpN5k6L3dz",
  "key14": "2bDe8bTcMbHvVB8AvTRuTfgwiDj2TEuVJVJrV5TdL5d8Jyo4FD6tbBF9XtYFQdYopR72yjUaZUXjGLYYeTdQJ3oc",
  "key15": "2ZrsX1JHz5WSPqrTuFxeiUrVkW6creEYbpsh5FuXCu2nBPB7c6S2NqirGzw1EMyR6cRFXhFUJtBWWAncMceUg5hH",
  "key16": "5LZRqb6WJSjuBiiQsHG9VYkz964u4ojVrPAgs3fj7zJciCpp1JJs93fhSbium4bd8ax94YnmAZ6T1GSKBeWvvqEe",
  "key17": "4L8nq6Wap5gYuWeU2BH9JpjQweG3CEXDi2pZaSgkL19Wk7sjN2C64iv2yMA9tfgJN99qpD5GzMGE3NVLdCgUmUFE",
  "key18": "8hwE4vB1Ex5inETnQaQBN3ateNzyidwLwtveJgwnYSK47QeWCWHRLtkyaizY43Ge5jw7jGMi3RP2CaauS8DedyR",
  "key19": "4n5KBoRVAHrVK3jZcGK8HcdZTbzbRxPZCwPmMdNWCSBQbp41CFfUmQurtE2F4W9Cq4rbyWeBff8V4GDrYxFmNr4w",
  "key20": "52TQzYWmbfMJCUDMi8JwLGk5fjGq493zhCg7wPqy6XjztRdNkYjFZE2zhnZvvpmnf8a9kMGiyWa84MAYUCdcXY9o",
  "key21": "2SWNnoMdY6VNtV1nGbPa15CJ6o1jBJQdZwdDtytZpMbZ9pkkG5j7kVpcEt6HnNaSkKLKyS9zJyh3FwdpmshvRZ3S",
  "key22": "2NqvRioNVT1p6bH3MS88XYa6hToaftKoL4a6EVYD2x55JWeqKJcTReqcuw7uT4XTNhYato8S4uEqPd5cWNLrp7L7",
  "key23": "NBqEJCR2ZYESwwVdhGzSgFcor3bgKRwDrXd1ZS2hUCW5g75CMp3jTd1biG1SgKrDvpx2nSQH6szUibsFY9RJ5Rr",
  "key24": "dwsPamtuRUTSSXDVuBnW7aGGYHJMgLeT7YQG1K21DUWnzd9jLYCAMhudm847eLz3tJGwj5LNLggZGjPrKscoSvJ",
  "key25": "5EVDVadcJhjk4M5Puk2sEVZXsEd4Cdtbng4opT4XgpA6atbVx4FRPmVFYb79NH2U8DgLGU3jqNVotMbHUSiHe1di",
  "key26": "S5TSAHGtzHTAE9dntTmmFeKXR8oXNt8Y8aAFALFL1vUCyU1jNws1MSmojqXN3kAw82KUW8EkLYxarRtMP6EVrYP",
  "key27": "5UsmRgrkpPBT8zWiKH7BnkenwjcgEDbsZudBbgjqzADHaEXf1HdYy7qH5M2A1vNSVs8nDWPzWHJMWK4uMqdzudDa",
  "key28": "47A5bPsYWcGTWw7dHdPgrU6cr4kocSGBDiTPw2vjMzAC2QxxXhLDiUqLjeBhG1ygw7v7Sf8nxrtXRngw7GatxzWV",
  "key29": "2sNELwTngd42bqjHYtbB5tXGTEX4DECbru2RnwbgXJkeu3DRqwbpM9k1MYh6sePB532Lxx5endxGMMd9JDin22V4",
  "key30": "2JrhrW1nFYSBgqstKFKn5qNPPmZS3mm9pTZ5JMkhtCvos55r2Lz9g4bH9rL11gTCfPM6nqBhjDiLL9DV2oLbipsL",
  "key31": "2vCGkzxuQWRVRtDpgjMN62d17Tb8PpY8Dzhwj7tctAw7GV4CLsBTA4EmwvaoVmxwydDzZkUHVnVbe5VAaUxV9cHa",
  "key32": "3ijMAx6oK6pAMQtQSnr48o6xYBkHFbg3nZNErros3YtznVaAR4iMcRMg1oeXU8cCu7fNpWusSBHYEyj2BqqySXf",
  "key33": "cAvV57xjvaKLTRMgz3hD7ksNzrAodQv474TctXbTZ88SUQ56aCtNHKuAshxqgiY3oAcstFthjfmn4fDg8Vmz5sZ",
  "key34": "dyRE1V8xemSRfMy9SQw8zeAUU6fruLbFu9SzgoGy7us8cWBMCsS6oLt7yy4n82Am39VgZPk832QAy56Z5UrSkrn",
  "key35": "36W7KDUiPVK4vZRMuQ3QpcLtrjgNaZBGDyXsJJyXVDh6DRsbyWDeB2kJfL7KqBGdqBK3j4hc6bFApTChGCVmAnCj",
  "key36": "3o4SaA7yXnphVHAbWSs8fTS6r42m4y3cZvSemWehUowz6bmSN2MqTYSeb7GDvaficVka21rQJkAZu4v5FM6HtaJ6",
  "key37": "2VHu4iN8vDtjgUdvwUSpQuriYbFESxcL58EXizU3PVjsGXbTeUCRBq5g24BP2rNdkQV3LCrYq4uHhHBqUBP58XAK",
  "key38": "5CMr9Gj9EHDaTGsuFinvPXu3gtTLmoBoDHH85zJfN1HkzjtgXcRZh2g7ttC1Cw3LpRAwM3JidnHML6xpQ9xJAxko"
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
