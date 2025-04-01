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
    "4BYaStLMm1tfPmYNFR1NRtwnmip6WVyuwnNDgfq5eZs75QmZtpcg4MHndiyiSs64dZtfVmET4EKwqYKU7kzdmpGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBvHSzgwsUY5hiBrTHCn1w2Rtv2nWqiCXbk8HefPJ32825xfJrWiPbzYbSkDwwr4xTjXCQ9AT74rQWKLnbJez3N",
  "key1": "5NXENJzZ3nQg8F4MNaLPSMxy6suXPrbmVVXd8kd6yXL6mWLTgfXYfwnvaZiZRD1iAHdMwQoYSsnvZUVPdrXondzN",
  "key2": "aNEzsCDfsfytHbDjcVSHEd3iuqzPYSwV76UF3ZDK22Bkx9oQENA8HpLkAHZAmEggmc1JL6jPYHVr67n2JAsUCL2",
  "key3": "6y1u9y87e2KjL6isrh8SxpGkfAhaVqryGoKc8gyCP2wqwoe9yN6zEHkhWBzHGRSoXVxJqcH4XtqM1GafqaZd7wT",
  "key4": "57mjomHa3PzgLuwNsiyN9DFEuA6ryKT9ou8LJPEZX5GByzUzD7nk3Acdg3oq44EHFtriybzxrPr4uvTfBFgEiNA9",
  "key5": "5xc7yz11qNtJErn22R9PYTY5ieyUrDfKSeybH3Zr3w4eaVWYPHsJWMREZddoW579bRtGvbNpkAm9aB4McvoiSxxh",
  "key6": "5sbURG2C89pojh7KS4jZZHf1rBKuuUdyZLQwa9gcbSsquFSTGWoXSAc6c8jv89HpdnCWNJPPwZaJUCcKJhQetD2H",
  "key7": "5mCaixmBBHZQWyW1iGbzbG38GFKX6usD4S1VFXjoRuoeW5qrLNNvmnXumUNV1So5cXJBun5S5zMvTxqYqaA6Tfa5",
  "key8": "yUv4qZJbQ9idMPgqpvPFB2xEcyJ3Mgt1PRNfFTqpZwFt11rhUfVpc6iwu9ahNH7Wh8n8Ee7CKqvsev3Gu86f8eX",
  "key9": "2HzmbWbZtGjwuzcQyyNBu9ZCFSt1pvcCXZm3UTu2PswxkFA3hYyf3gPiCicHijydQhRPvUjsHKCQcGDPicRjTakD",
  "key10": "3YmHMcrydgtxgr72ZrqFKJ7JJeSSuBzr4k1n9wheGy2NQjPRUK5b6SFd1Yx3i5bVzSaR4wvR7DAeemt2BtZxrTMJ",
  "key11": "4R77cSkcdSPLKPAwUcX9DeA7go4CQcg8HnLfud4b9aoBbxLy6r9bPwTzRH3VUg3jaQCGPF38JkMfqTvsmUWV5sat",
  "key12": "5tU1PjQJBpyyTyqJggou275ZyNbZ6NDsTgkmbGWJf9xnn7aDLrMWhig7CFp5GJXvkcV7VYpEyAwLY3CN2uscTcyP",
  "key13": "59dHtcVo4Cny2aBGvjTbdnHxC7MzM1q2scLSWGv61ymyv9RFUE9jNAqwz5nJjmavmjt9mSQDBoEs8QwjP9EMJ9B6",
  "key14": "2He5QpvoRxxKX3cw1g67G9cCcdp9t3hRsxNcW24eBvgBZm6AJCCKmj4avDwT1Uv8rq1FdJndXshMQSM8Hjaddb1m",
  "key15": "3G5Fc7VzJLCVhcTQfgE6uq9iN6z8aUuvDGzCexC7smYtzL1z1ESWe1Dfznnrkw6K2tyKPH4r8UwWNFwkj8WhWpx9",
  "key16": "5FgN8ykbC3tSMP4SKyGmY6U5vCBH7Sjy2YqgeEYU1ZhfcHiXNAmP5MB8wCW2BwPGinPUBXHwhLzY5UGVnFfRcNi6",
  "key17": "3Q3PYrrahH3MA1hkgLpdgva3AWiuWHiKL9fr9XSdjAGYAZkMPQwMfCvSGfAsu3uSQLm1Nabw2J3Ap65tuhuPMEVt",
  "key18": "3jCxjLeNewP9NaE1mSRvjzQCjnEqdypQAXumgNtryeYCkjE8UAHzhouyqfB2yGyJGLiHbezACEeXyhydmTHF4BKn",
  "key19": "ABN7eFxtrboy1jZJocwZxqcieffLJS6tPCqQBSdB34fDcU1YRXe8FSCpGVxaR7BzyVAz8UUHfQ8RaTF9EGwY7AE",
  "key20": "2WiQSfQQrrHJ5WtPcazKpzsFnsDhhqK5Zqkk22in3DRLq8NXxZFXLRezmUJQCgsL4jQzCstao6aMNaUUQ9JgHNLi",
  "key21": "2oygF1xQSmjdNX2SrWa8HuqZHgTJfp3N6VNU1g6CXcjoQ2XQcM4MsJK23JYGeSEsTVJDCNAEZ9F2dZ23EbPedyhA",
  "key22": "2b6PFNZ5iZiFZWF1szRJhkaFrD8F9ap2Lf6HFZttgMKggcw5J79HC3mjTYabPexZxnWMcs86AbHdDqVJ6J7xcfh",
  "key23": "HDin6ynLjgj8sRqMhFoM5Wp2N6FrPjd6UWkn6dGq68PAPC5SpK3baZ6pSgDrBwcs1ywUdmwdLUjk1YLLrbBcE85",
  "key24": "2rGecdT433vrBswqrjpGDzR4eB1JJGKtpAc2T4BnTaANrHarYs6GJQB3SbtRJmBBapUyU9AsPcnHRdj4o9oGtQYC",
  "key25": "2iuSD6uPsTBZnsVWtbRxAVyrre6Y5p3VpnTT8BYojwTXL7PHgEBWSEKCJsDnPjYnYbWc91t7CNVBNmp2afAKUtmq",
  "key26": "Z3wEXt3VZFXH9by8Z8nEKMZt5AMMK5mWgvTR3qu9HxpckrHUWB2bTcgUSmXZde2fVtLkoXywE7PxCuRLFCt6D1b",
  "key27": "Q8DS6hi6LvcJBVz9fbhCFKs6HLMdENhBmtJw7iKi7KBxaU1HWpB1xduxXZWs7s3SBw1GFT4YoRwjZHNFiT4sy1a",
  "key28": "28i5rjDEMhDyVNGWRCE1C16gb1Msi7g2drYDWJF4UU5Bje6mXEizAtPKLbWjjCex5ipbnwi5UGmPQZfzoBTqHxs1",
  "key29": "4bPyVZ5mGaEtrHEaxWcahDBiKRJDf4ovyK3XzjG8Yys4ZzKPzohLJZbVWboDEKWe88J68pEf9UqHYF7QHTVFE7Ns",
  "key30": "5UnciNaToke41ecR5p6QMD9T8UcZY2em3oF9xNZ8qjkK3uSxa3Bc3YwTcBmEzuQafB4JYuSgD86hS8TqwtF9NTp8",
  "key31": "3LU7yeEP5uTwM4SPPcvGpMf3DeVPf1ZpgZDoVFnisnd29gfJy9iMT6D6Q1HmEBFyDwt2RA1mG1vvjiASGRDDqjyC",
  "key32": "259SsrKfnKtuf1adegeymNeXDoPV7RLb5Z8a9aFsf93yDJkJeHTWeyzVTRUaL2LPDkWCkBbfeotEHZvuQ3A1wnfV",
  "key33": "4We17Qx2VyJRRnFbv5YTzau32bAbHM7nrXacADqnk4RKmHwk4XPcCBUrJUJ52LFCturY7gYWU4NCWLzw6JMxVGqs",
  "key34": "3iBjCGfUtW56g8mTZvgS2xDthXTKQPxMHNpLkTJBQwXD3A5RWWgTwCHVbwoXKpTUpo3pFDcn8K1yUbEDEji12bGx",
  "key35": "64E7zXbCiSwyFJaD1ze4SXmGaWde2rQ8DVhQcg724vak3Mhp7626AUmnvUVAfCH2opc2PR3RhHJ9vru1ZE5urLKq",
  "key36": "63X7E1AASjbCpue15nKUrC34kyvtiV9PY3nAFs7fwKjy3gSSzAW2NH7jpMxrtVQAvEdVRa9aWFQSEydsnmajfnMX",
  "key37": "2zwbfWFijFdk8dq5GXUUXNNbq2tUDdfSngyCwxYdUaCkENzc2nsu44sFnMcVEaxNwEDJ7aAqwMJZ9JnoN1dMkSt8",
  "key38": "312c6dghu3pmZwCDYh4wneHtEFdQdfmz95cno2MrMMdMKrcywWQzceNUfwZUxqMpCB19BhcQBnr2v3bU9o6b6kax"
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
