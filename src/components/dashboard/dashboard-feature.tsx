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
    "2gXQhnZky94d8ezzeVHhATFGBCHMWsH8bp8A1nkUgn552mEkQXwd3NURrpX13CZauVEqfPXP83oNE41dt7tvcA3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j48cR65tdpdyz3zTJecUhaXjWgw2CSaSpxMY2Tb8iEneR1aedYtgrGohvQZaFfz7R5FMQweXNdQbQaAwJHMxTc5",
  "key1": "2Pemu686LyL7zXqaU7xJ45xJ7ncfKuLFB1EHdQnZviG4RmiLd9P33SzwLnSm4GWtDtTFSKpsShvqHdLVBZrLWLWB",
  "key2": "4yYEmfdE2R2NA4SXCirzkGahMD9SHup7vXD8hN3mQ6xQh6P5M3kb438eBSjzKYrzinG8Sa32C3SAwjzhUo16BbJB",
  "key3": "2V38ujfDWCePy9wuADMX9Bzo13zQooK3346wVMh7RnVHvsrbBBwUZcrGjgWiwEdCg1pxqapYBgvZdQZR9DQZsYZq",
  "key4": "2Y7JrUbCGxdku3Ejq1TTbaJxqLMfAW5QPae8Ww7JETJRNPBJR1KqAp9jULDFpFHHf8pu9Q7c9ogiMRoSzKLKH6TQ",
  "key5": "4XezJF6rGRfp5L36ApnoVn4y3CtVJtqnWxAKANq2rBheZJoRnKCEDdYoa3BUG6VBSJ9bUoPyXhPBmdgiVJXS4aic",
  "key6": "37pwmAPzHksXNPgrH9awGXMW4NAyaarX28mmwsfaTgfi64Z6YbHAf3tZJ5dCbY93jeFSAbVx3wEuPKUUNbY6YNdY",
  "key7": "3yp36j2hBsa1BMaFuzrnk8Zy7EccJ5ZuEihnWbGUkxA1aMo96Mog3v4hhe9LSuVmqPTf4MaCdtv2ouSXscenQDSd",
  "key8": "7qbHzCbnGc83zhnWtTri5aRQK9vX4PkatA9Wjx4Hoq1w3MYxq3QA6this5whEzmUM53XARYL5UaxPTk9ePDn2KR",
  "key9": "5kFWz36PN4TRk6dBYTT7C2RFx9aVwDiN7s8Un4124ArhGHuiXdoRqombnhd4iFb3GgvJ2NYnGtUZr3TyRzbpXtP5",
  "key10": "5NLxCDd6eewt2AER42PpAU3RBgYSe19tdVHjQzRsQdcyYun82krqw3oTYu66BabE1g2jRFiDrow7XFSz59iqiuwK",
  "key11": "7BcnYvjR9b9wjhUzSd71jL3B9K7UMcD68QJry1fpo9UWGisUxkoqiPutx1BbZcjgEavNyBB53pJGcpAmNNmXP41",
  "key12": "sECCZAzwyyEDBKHWAvAxM4FLwyvjXifNfq3sqyc14tB9WrabLYFu3BRRdZrN1udAN7dpstynfnJeobe4kYD6Wc2",
  "key13": "2K7XPAzx7wsVkeR7gHKre9ffKyaKNHPonjkppQtsgGMFgBpBZ6bZunoxsHE9G82spzXvj1iiEn3gHT8A15Lyw19o",
  "key14": "3BXXygmNBjsMSQRGG44knPNiLyqt4vPRM5f4HQRs1n8rHLU5N7bFV6jCr4iwERsAuRaWfS3tjZjtBeFt8azTtTqD",
  "key15": "23AYHvpGAMrbNp45m7Rb4c5pNkNEt8MzV8R86meB49TfVgx6QoUG7sWKQ9pWYkVsN3NY12ADsjKkh6BvqDMmqe5H",
  "key16": "2LPSCwc2vLZMLkTnMncuKCDvYkSVyJjAyskmKXNT3X19RVZWY8tQLMwR2wS88aK93iaR6e9g2cC6ueWnBiXQMtaX",
  "key17": "5TaC1gBE9VtPbL8NG7q1UfKoDSJTg95aextPqepc3ohz1rQxHVFUYoC9Rn1hhWyKEGKQqsFw2yHPdVE7L8DSKW4u",
  "key18": "34VSsUfKg55WU6x9DNj3VjsfmgRsuDBzxjrTCZfYVmiXbk7T55y1wDgKGjXfzPJQiUVizsdnpEBc8tK3qrkb58T4",
  "key19": "KGX5pn9uRLgPXbXRYxhApvdTF3vhSn1J76TTuPfNVgRqqDx2vQWfJru8FPsCfD7udfSzGzp7QTPdxZkWZYEL2HL",
  "key20": "4adgtVnC2EeCAU8iGQT7YLTfof6KJMpK9NAzkQovPMkHD74LexfZ9nNUAFhHqM88ZNi3uEzjuh3r2CNH5A9czUnn",
  "key21": "2tJcxaFZZgcSWNi97uhdLvxqDA8zJua8ZAQxE9JTj6AvPGkjecybXysRRUysSyxvTgAmYNjN6t5gqFqTdhkMuERP",
  "key22": "4s64Jad6qShDo61AwDvfm3wveqqxTAU9JUVDMSVjJ5hdBdYxgAs6dV9zpbWbAtFyBh8wbXmAeTSqTn1GiBLCRKyW",
  "key23": "2RwinJSX1dVh9vhUV37559mAXUajJyDHHzsJNUXqRLXARatr13LFEo9CWz7vxccueRCLZjgJWjtqm5s7qJm8hzny",
  "key24": "2mAH6gEq5AcUr6GMiFFmVXzh5aG2fmmjN3ZieYcvKFyXx9a5Zaxcv6Mzbgy1RuPkRSFBpxgEDWbwMRatz59EVACc",
  "key25": "3jK9oZfTNDybQ9KV44yV4JS6AQXmH18dwUPwCZEFGVSufwosS3MLzhk4D9NchFpgdheDeSY5ihWqTgBZmMRYjaSD",
  "key26": "3YWgwy38TKjsdXjkWCo6xsmnrtdAi6jNqPTFRPBVpBqAmLW1ewG9PzgbYksvPwr725VcLoYNvtdJv4zJLo6DQ3Wy",
  "key27": "67cjrw7Efnzq4p6jVKS4VY6Rg1UL4eJo2gyftbbSkR4hcSntiVQZU98LHXGfwsh7ttNbx6sAYgWao7ik1uWbTPHe",
  "key28": "5yrss8adPZ3xSaR8KC7VryFUh8akK9Fc5GT891ZrpPcAuYVevfTNhnBdSHX7x2JqmUwGwvnS2GJjVUTobFz6n7ME",
  "key29": "4dBVkDVjh5QLr9xnBgEyRRG5ska1qLo7XktgsMNWNKYTZtw55aUt5WJ1qvMCC8pQCcY5KBH4Py6datJcoxLvgb38",
  "key30": "4b2UbjFA3WeoVDteZCA7pE5S9zo3cpNFsfDWGiR9F4k8apgAMo7NuqbLh7MDqAGp5EPkZY3TeSV8MkEcP9Vf4Qwh",
  "key31": "3jHZ9NAgJdzBVcy7V3zvRGG7Aivekbs7z3XBDnbnEPKMFTWS5A9o4Wd5v64rif6c6oZGJcX3AEWRoE1CxKggg543",
  "key32": "318tiyzQ3VmcUqJptf4kF3yU5ey67A61J124hiHHJ4h5jrmBJbFPyFfdcWvu9KmmNjNq767b2SCe1EwHQVttP7So"
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
