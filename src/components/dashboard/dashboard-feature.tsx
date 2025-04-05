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
    "4xdb88HGgPkgPUepfKM5ZxZH55wemzWRfjYekJXtFSzGt68wZHwHHBYQRem7hfVmb8TieY4ctuNdudBQdS9K7jKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZyjFezsHnEzxbXmgQhoiyuxC11Sg8c2VNnH2PmcWymmb81gsGPTrLa5knahJNzng8YcS9ykSHmY4MnavEqdP1V",
  "key1": "2R6Pj1SoLdjN5j1BpoMS3rh5WoWJP7FRba2iB5bxQYWrjkPKrtU4QbyVcGGwXk1DoNrjExbVaEB1VWnjgo19zL2T",
  "key2": "qcqphhX9eV1kVsixkGbZ62JCT4G5obVkYQBSKmGVi2bUUDQzaxFujDUL4XcfE2TkD6KSPnHzbf4EzpPuWLBNeWG",
  "key3": "4Yb1Swy4KSiHfGKjKQx9WFWvTSmRaTeBRUUKPwFNPmV6gsPDRxbsd8ZmYHBEEczN1NTxmRezC5fmn6kiHgN8qraj",
  "key4": "5BemSZg63bwjLpfqY5AG2q7SKDe6u7nBoXoerdCQoQLp7ZJFUiREjec59EDrpHA4X8mybQjCmbWgHHumc8nvUkRd",
  "key5": "erw17LXqiU2N7Ls7EiSA2DZYLEM1T6weDzA5Ugk1h7ERhXvEvxJUwrPM291fFHLtZrgetHioEZhU9ZZBWq54JCU",
  "key6": "4ca1f2tM7nBbhmGhiJBX9F6ZM65hJLyMDGUqfK3RzVzBaQb8P9ZX8UCiRXeSWemPZbEio3qmZ2SkeZd8uKxWptKN",
  "key7": "4rpAwuwDhJeGuFjzcFDPPTf5mxDbPFP1ma1JHpJKB9YsmchomgqwFMnY28jj2pw1FvTocCyx65P5SeLX6nQSDZbU",
  "key8": "3Kzrhs8tMmuSqqhqk2ji4xaEfLqzBHkAibEfVag67QDRtiXbhA5PWJ7srDH2YZypMHNSt38vjosntnrDaQvqrR1s",
  "key9": "221EdhAfsDwqQTkXCxx6HTtg3cDMq1GU6NLQY84hmYEECibtJbP9A6nKGHNrnMpTtNm6i585FpNKRiCSnDJxKjhg",
  "key10": "31GLb8krCnfcedLnKd1d1Ac9AZwPRLu1gZ7A9BeLy5SbJ44AtcxSnwi3AYB5igm16eu3LkSzNUv9kuFnpqd9Py7B",
  "key11": "4RdMANRwUe44MnaPv1eNZ7eTAsfLgwxFS7wWj4buBH3kF59fL4AeDCdLbLm2kErg8SdVgqg4odbnMDFAKjFnyfWg",
  "key12": "45JXE45hFj7NyWZ7AjmuZHvwE9fCJn1MtkNgf6p8KyEviigbpvYhqkETfj3hJSgBDyp9NuYeyCGauH5moErAidmh",
  "key13": "4uGfY9k9ywUfS777d3w9JfYYRePbf2yo4rwvpFwi8hzVK9mE6ytRBRruFds3ubNLRiH6JFQyE64C9Y4Bs69qzRbm",
  "key14": "2tyZ48XftTE22YYZLt5TrenhaybSQ244sPjd4TbJSvWu9Q5nis7Nr7BhEE5eAoU6fArP6cWun4Eue6Kx8yLaD1xE",
  "key15": "Hty1gBMcnYmkkKDfxjiPp298U3h2kgDhVxnCueEK7zVPyGTZ82cn4qfZT7aDhXgFbnkcJCYKVquAWdyro7ePphz",
  "key16": "5T6oATnA3ND1XPfS1zyD5hPHeHSqa8DbgrFLjdhRf4WFhAUVEeVMj74r4zFx6FVwuVJkqJtCHUtW9pRaW9uFzvSG",
  "key17": "2AXFNuzce57J2vuaEq3NZSewjzqx6oLAcRcB2TFdzjEUWdaybKfPpZY2sbZfpjkhUbc9q7En8Er3zMZXBZNg8Ngv",
  "key18": "WzXU64MUSUuiwtXrhrV3dFJnR82WCu32asxWCZ8oHEpDaf1SXGAQEDwxQj48UMqjfMqA16AYYdK26WQBW95MFpe",
  "key19": "4qVc6oSWhr7Uv4uR3NEySedj9D1iFrCcfiMqpL6JFBVg1tFuYbS1HQDvNoM57mxqwnZZEweetgJ3L8uxotUWrCzz",
  "key20": "58wKr219RmwpoJTY3o48zJW9AtMNf2L8gq8Kj1Dbk3jJjFC7rZgV6vrc5qnrNgPV2gog7GZ3e1ZShcyZKC8SGDHf",
  "key21": "Na9H1boa1gMwz4iSsMD1hbYHLfMeY5AgNMTD7qtiJ5A7wdxPTtWrabGA3mS8HD36a5Fg8oVgLL3QMaF6puzjGBF",
  "key22": "2c6WUYYJe9xJeu7HbvS54W3TxSos44aYKRVUyFCZ3U98QKW89ZZHRefiBsbVFTTAuqvj1A8LwS8aCpjySuYVuKbH",
  "key23": "2zdZZfTZ476CMgRhR9JhvyhKcX9uDsZ69syp5kmtFLFyGYx51Ek2Dg6ePJ9gGTBgFegTQ6tUFLG2JR1yqTvyszfT",
  "key24": "2BJmKTDoBA1sew28gtGzbDdJ9VmoD4siAF8ATRd6UXr3GdaDEvReJdE2jnSbxWCQJgZ9x5icPC8SAiEKctZJoWv2",
  "key25": "65L1r52G6TPKtQxHhfLvsLu5eQLPn8WHyUg3yE2w7f544wFNG2wdXExoZjfefMd82wdEo4gAwoQkifCMxG3rBThv",
  "key26": "5fuS6ci6GsUyyTcaqsmcWyNqpyU2qtEr3DxhAg4n3nqtpyG7smLLLs28M4dURAALfG1wiYxunKi181KsTbMzcYiB",
  "key27": "57ZGWrkZz9yRuJBY48dMD9CXSDNZQWe3f1JKmGzeqnujqxy2Y2wBrdwQhpeSEnDtuucgbbdCtnRtYip2Nj6Hg8bN",
  "key28": "4aBK9A6nrJjxmR89yCdLoC9djPfXcAstasVjix2K4p3MLq243QC2LgBg7tG8di69qXivNjVvxVGZzdCt1Zii52VY",
  "key29": "4tr5MuVT6ehFzndVUYEMtpAQCs3aM6cFA57Bf6ac49W1RHamJHNneEnnKErVtWduu57Hjoa6u65wBRLP4WT64SUX",
  "key30": "45jyoQpjtJw73Gxypqx4RRb1Tvria8vy3U12s9pGYX6D4jHBDPXxhgYVXgXoJ27wG8BKanYWCLRzi5TehVQBMjGu",
  "key31": "5JHrdxECESPKKHUaJ7xEjhUL9VLVtWAHKMC5JJJjB5jLziCNKnCKUyDJV6gVYFz5GxoS6xAGe8hZVi5W3bxQMfBB",
  "key32": "EeaXzQKB3pb7UrKJVmS2fxof2W4Ypunfjh7P22dGYS63zdn2ujPhARh8UrEJ5eQJdJ1rmzxQz7eWS6FU2XQLpyd",
  "key33": "5emFSNWrWzqwNdfnrH1i85bD5Dwwj9JwRHrWkuneSfQ1nAESY6peptE5AediC4wTnPzU8RvX5yLWXxVSWm1THz4R",
  "key34": "4n9Zcfv9TN9FFerupJfu5xHLpt9Rzux4YiHEw4JsAqYmBXdsyiQQnta9174WgGMJS1U9qmh29tFmPpThkc6engrs",
  "key35": "hP4Mo6Rx8THTySPt6h95JVmkbBSNxr1LPbKgdT2D1DUaNTCLwRqdGhZh6PJ9msHEwDVWFYtyYV7tMGwsLhg8hGd",
  "key36": "4CL19RspCBvjvNnT65ojWCQRrEXup6UkVTR5nNLyx4TxHEpK3kH74Z82rP9pHsvfNfaTkhAcJ5VNMzyMJEt6fJZH",
  "key37": "dbWKziSgTvSksAakrPS2RPvNkE7CnFbZfrYZJbKtZrTeYFMFN1tGQgy5hQ7WacFsAp7Jy5WWYPxC4r7Jhgix6q5",
  "key38": "31g48b3hY5QJ5pbGaRj1Ys8vEsGSkBUd8wfA4ELzx94bg2RfTu4difvxQvzmV3zLTLeCko8i3JUx2DSw8HicvgYk",
  "key39": "b11aWR8BnFj9SVrJttKQ3kenobBGVD422q49cQNxCVXRnke7145xhhtNVTDZe2aBTqNAHbQJahbi3ugcG1k25V3"
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
