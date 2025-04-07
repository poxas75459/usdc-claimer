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
    "5D236oDYSfsQkGoihfuT8okwSD8nAMytMPai5YgETsaLY6ytT3g9mw1S9o5cFyB3dsfFM6rAFHA8tNbeZ8Dt5ktC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9Po6pgu1skNem1kVbpCwvSuom51DHZiYuZps2nKBwSc9rJ4ojJYTG7Rv75WXQmCwGUbzUDtYQFehYE2KfApmEv",
  "key1": "3SuATWGakvLC2JWEYq2HrPA6S5bmuL8cbtDWMtceeWn1PNYhz1vLo3xQc5LuQui2p8YDqFe2kep2jQCqRNcxagJg",
  "key2": "JqKmhNbJs19iongKoVBmJtWey5ASv5WZFTXrGQua9nLNMTsR4swf7XX1vU4C9ByLgusn77NxLRBrc3Q2QsSJpK7",
  "key3": "5CuyS6WmyPiMTxciYpJZwCVG193P1HtGu3QDmdRw63JaGutBp27dbcvfD6rHAyQZ7NgPcVNosFQPrL7axtCP9avy",
  "key4": "2e6pQuSpbLm9m1uUWfMp5SuHmGLobveVeaCTqqr5xYEwyp5rfVBhF2uD555RKTiQ6ih4fbEAGQSEpD3Ha5QVsbEf",
  "key5": "3GeNq9dHvWT78jd7KiB6dRC5w1FmnybHrhcwPCQ94ZBHCmw5Udv61z5VWErYyfMh4yNscrpBHmt4GaeJVPfTWCvk",
  "key6": "5eYFe2wsdSs4aBwxcD1RULXCfd8aWyaA4apeQY7DvsYV7MugPrtgFa6rAqJYSHaaLaY8iZNARkZFQLv9XTyLVGWx",
  "key7": "4pVdvb2CWrtToKq6CMt6CpQ9AyUGxWRKWogaj8NzJYMazyS7E1NKtSgxfHWb64sgdYvXAus8upCE59fKhvqPTJMw",
  "key8": "3onXrFoxJWrzaJ9agDS9yZYfH2uSBSvdXxkTDeSPMqUXfPCchC5qxQ2dh7R4dPPCGrnDY3AoqPBoJT7UJFN4Nh8L",
  "key9": "2BiYtqMUbSGSNMRAXbLm1EvUmr4NPsoVa4JjJY1Fmvc7RV4zamm51DFFqJwHVpqvFgPKMmLwLVafakGWoCZBXCa9",
  "key10": "3JGdYzF8xSS3BghFbJR5Ve2MNfRSjnseVRPqLWTXnP6qe7pXbfTWUQcfNrHfwe8mAw5soevmN4RAPeW6FBjprkmR",
  "key11": "8ZCJ1xJEGXUxTixGX94kFC56rWj78w3sm1aKv1agPK1MB7MTtktNCTQdNcj2DKKAmgZv1pCM5Jmwvjnr9MoQ7f1",
  "key12": "3H1bbb6Nyzq5cS1Qq9ao6XiMv6y8pwwqEFArNnhkbpA4LnYN6uvbaUpQtcomvtRmXdcskTrYkQHZyU12LEG93zx6",
  "key13": "JK8rn1FLCLqUYnCQoCHEG8fuXoK6qtabsnH8erNay9w3HLm9u1xT5JqS8tNWULqKv4r1cf1SP65jCMeMjyPNoSm",
  "key14": "4vP3KS3e8mBtQrvbCbVNVVTut28wGguYYh6FJJnBtkt5Mpka47TMG3uH62R8nEQcHNE6gfnmfBa7fCCWpAe9cjDF",
  "key15": "2RCA7dwSkvtnkMtfNT7vwXPE48YWm5RPqzGh9jMq4LJjkKXsHuAqEkRKMnFRM9ZQDLRq8VS3HPdYxkMThNovzj6C",
  "key16": "Dx2WukBYmHFUNjF8cQKuEbiFt2iFLr4mzg33aDsqkfJh1ih3NbJhCCeWEqLk3VGgzf6GHDyeC3AXUvnrBUDBXxY",
  "key17": "3bcVNHhGTXSk2UFgMckEJ2qvNBCphghKPYzmw3fLKEqGAnAkNtJt2LwQkD3nN1rgDtiUi87z8coFMFCWaVK96k4W",
  "key18": "2XKwLdzbGPUnrXBVXo6PFiutvmkWwwGz3E2TopcMrYGEcLPApo3kCxJuk4yQeENcXxcpocPcQxFt3tvyXxkfZPLW",
  "key19": "5nkibVu34bYgXCfxy4Qi8F4kMcPN3Ww66gibFdK1CAFztgWBt6dVoffKDAh9uVbFHChiAYTJUsNUky9TCgPDtLvu",
  "key20": "4koe7P55KhRyCVHaEr84MHXohWHZbWHdXBeo3YTAATomJfqkGLWhnTZTnRw3AbYyZWNWac8Yqftc6d6oW7Rb6ouJ",
  "key21": "2dVA2KszZ4GYDgU4FwSi5YQG7UH1BfVc6eXqUHWPmrZupXJUYX65qAyn3f4uttgjJbtaX44K54cKMnf2XiLHkFQB",
  "key22": "4n1gC7DZwf2NhomZzNXYhat5uWSXYBTzTNxWeCvcZXWVLfmK8HKTAoRHLiJEnYjesBoSxA1CMG7enhddPhU6JDog",
  "key23": "2K7nf9L44M8CoAq91xYuM55SVyp53JH7G5ex5vV1Pv9efJjS7AY7PD2Qh5C9Tbi61vptYtcFTDkrttwUCYEtaR43",
  "key24": "VDyRjeUFFQToWAwZDieQsfYJqT9SwHVivvSLBbVYKuyYMwrzyWHMhMQxhgSqi1uq4hNYt7eUeFMXaZwNuLam7hY",
  "key25": "4ehcU4zGMb7UC73HuNH6TX7tFRQwtWiUSwe4FuqUYh2ZM1x5YsAhEpWrqK9sZw68EZRhDkFckHC3Sy6XEr2STyuu",
  "key26": "XwhLFjQAQGwJzcDahUqf8H3SFioFCk1dqUT6hXES4hmDJgb8GyyWe9kYXQJgD2s8MtRMD3NkRwRjb9gPjXsxvQs",
  "key27": "2Uze2bHR12kjsu8qFNRSdUapiFLARH9ESLY7VgjiqzFigbDvoQV9YWjCTEuAAg1ZDW6q7tujCA6gDuVig4i6exvh",
  "key28": "2nYhdhVXswPEbvBK3W9FuueRfCzRZX1SyHKypfUft4f8XVtotqtGUwHxF9k9jTwTgvU4qTMP79xQu6DoSGWTvx5p",
  "key29": "kXveCpLvNmz5Zacty1ahBhrTPwo23ZuJczRWEvdSz9ygXp5FiJKVJy95UEtDCpBTxULJ7RqgXXChLB9KF2sVzPj",
  "key30": "2pFz3aGnrNURN2etmXvYGytprAnro45RV45r7eLJzJhtfEhn6d4Mq3jfYzgfZAvsgPqgVBGpkwU6K7p8zKgkGLS1"
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
