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
    "5fBKZkkv3GYPBj85KXMKUFLr5fsy2HCWW6YGGfs9oSXqq2fYVpKw83UKXguBaYF1uMrbfJsQY3STG6mZUP31QdXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcrB2HSWq4r11U2uhzCTTMmgEm61oWE7q5vtozsmj5VGw1dc5RAUEDYejeUozbT1FaMATeG7P7BNgr3NMDczpbn",
  "key1": "66wyUAXYwd4HTCdYNHVMvb4UgNbhyGXgisBmV72RZAyBxC7TWjBcd896k9ryP7kFuvAiMggYTzsCkgM4A2oQwtxe",
  "key2": "APdnKdT1dBYZbzvvN6LiCtUngWjMRY8Cm2BERvUqpjySZNzx47MCtQS13R29VkFd9Zwcg5dfg11A4tN3u6y4qWq",
  "key3": "61qiNSgFFFKF79EswDPjdXoCMyA7L1UdqaZqd6HraE4sMK4Y46W8ezevRVdh6rkZEPmogdJ75eosBM2cPJ3UJ5B6",
  "key4": "4Tm6LukS1kdGQwEpCQQNpt8JM7fCQKCNLB9WDmM8cjupzQPGxC3EiUHNp1kHmDh8XK9QsHyEQpSXKN9sAuPRs3e9",
  "key5": "5tPQT1AdYhWxb5VoXGYVB4ksEn1gYXS1perBHAnRzPjvWkkVqJwyMdfe6HMRGU8G8sS1soR7WMWMq3LGmvxvVV2m",
  "key6": "4bFeHLaG8acMHUBJGzQf1DsGw6nogkfWuQ8NtFEmskACj5TFKKctbNrXvGx9vnKmXPhGCfBJYegHGXYRf5m3PEi9",
  "key7": "3MiWAPexEYivGVsV9Z3LTb29BrqK45y7A3Zqv4aCHVZGCmmrZ5sCY7FjrY87eTbqPw6fnxKeSE6BWSLLwVouFtd5",
  "key8": "4QkwBnCRY2XnSNsYaTLumLqsNwR5LZ1WbkwMu2zYc89FoYTXSmVMrS9coyC3XF69hGniznMj2NShocT1VbzggNqi",
  "key9": "5B4Bb3KaCuqnbQhe7MJhrbWgVDoLoRqqSfjvC5qXCNYwhA2JGAquzmD7Tod69cTVkbRfLbH8eyW9saEn3yPMBRdU",
  "key10": "3E1Vbff8Kt6xqaKJpjgchs23iuodxVwZP4d3FG4yVkrW3JrY2nS8J4EKieEJmG8fFjpPeWHJZBVn3j5Tz6bfy4n9",
  "key11": "5FHJ5Cyor7zy89d1Bd6BzX4mSSgJCux9AodqcZdJpLg1cyGRF7rq35UFqhDfbBLVEUkTxrd8wDHrusWMwrWNV6EJ",
  "key12": "5JAWWbEux5gWCPXkZzBp1PwCceoywgz4WWQjFjFtqsUgG5PjDxs3MDt1BBUpRb5EcUot6c1SbsRt7oVagq7sDL4",
  "key13": "4p8vkR9csQgJkj3mKtp9NFaDnJJdgL9XEpqX4LhkjrqMV62HXDYHninQr6rQtpGEoY18ov6bQgeck3o6qAaFrrUU",
  "key14": "4F2kXbSs8hHkJqdpJazoP3T79deuURjkoKZ6X72jd2mgPsB86obH96ZxQ1NQvupFrUACkXcQA5r2ALSrKsweeGEW",
  "key15": "4LHYZKCeGC3DVVJ9nGNqZAqHHDEmpiVDCRey42K4iAEGKwBKmmrN8xdkNqca9wqsAva78j9QXD2pW7zkJNh1Ytxw",
  "key16": "5yqJGZExjapsCtHJNLNzuAemLRa81hDZEL2b5mg4ed5aYQQF4V7g6w2wtYncJoEiJ6cD9a2kuiwHkzZe7YUa41A6",
  "key17": "2NG5JU3uNQRiArtWYurUZGcnX9hi6ZXvNrDgm2ymXSis2buSg93BCj69b2EZLA55gT6Uu2zJgofTZ152858e7KEJ",
  "key18": "3kowoftfhkqKsLNm69TYTUkQkfSQLoTD1QjMCanj8kyUnGFyHzdKodzNyrtgR1qdrKRg9hetbEuXzB1jByHu5hGg",
  "key19": "Nf6tBH8K3MyyNPCNtYoCjmD5PLYZi8Fx9qQPb2SUAnUa2tS1xCcgQKthsYmpnrawMXKLAUozz87vg5WXKTmkfUZ",
  "key20": "3H3de7eDxrcHYaF98AGahX6SDEsgBAE9hmHtWSJNJ114HRovvgXj4jzfg57HJBYgtzNUuThHs96FgVDKJ5DhceaG",
  "key21": "5gSiXu5XX1NTQtwjZzZ3GPpnPZwBkxkQBTAF9TPQmRfS6BuXQjM6J6bakHu84jDFYaqWYaKWJdpzT3tnrDwR4tbA",
  "key22": "2PFRLQg4RjPoemveAErrVxZb6dPY3kUmf9gQcVys9fJUbYp6mDi7Qt724kq3ppPJpfqvKKRRkTUvCMkF4hXK2Hp7",
  "key23": "2jSZ5w7mN81tyFbGAJQUnuyvf2CdUZv3CGo1EY1AxeLu5e9b8vaK3GjPjM8a3WL7mHTBfaSBo2HnmCJcFsnFCopf",
  "key24": "5mWRC2koaeChJnLvNzArgmTDj2jvV9Kcj5mFhTFZeek5hkedJZhdfER9X8erhqrXdK4jvANxqK1mwtdFnma5jkJm",
  "key25": "grZvFRrUkJn1iumh6uPbLbkSi5nL6MVw4hWzkpYKo2rGWWjpdz1jgX5pQJhnfqJ5sBrqLStBvw3UWxUjgsu7JTV",
  "key26": "4RxAeDe6heignDRVvgptpcV21W7p5aakEDevFbzfsv6BCjV5faocicpPZ7A8wbWXHJ98gmKoF5GdUQAA8G9ereE4",
  "key27": "5YfYfvfNzpQonX7FgQu4Thg4MZ4eMbKpdf5MAxW1HunvDRoPsfr1URknpKkEvADXkE3PLNAxUwPF1w8SvWkxDZMt",
  "key28": "5AioRGTt1YdZxsqCuAoAiNoraVKSaXhCCTx9sdbspRyqBEbVJ3i96bMSUvPtKRjY3PgVEkM8V7aGTrtFe8t863TY",
  "key29": "2Q5iquQMN9dMVGr2bATiSfHNm36BYwLmLY1hLgvY6TpSKcrMpyKStyNcJ9VNZxkZfBcZgrp1JGbvg3HEoQvDj9gj",
  "key30": "4eZCFF3neoEbGpdTRjraSHRHqwfvSEcQmkL9fyWthbVQ5Mbrz2oYrfAsMUaCxE7oh6kC2ot3snL4XUfsigG8raYB",
  "key31": "3Qbx7BV3nj65x6Xd4ou9B6FKh4USUMyndksz8wTeFNfqtEMFv8gnpSMhdvUNvMonopEQPZ3kqcnHcNvXDqEHPTi3",
  "key32": "3dnpNH7YqjoFAHEGm5Ep4K7ujbzFMGH1a6Hmkn5kSWNVd2GsS4dzwt1sP8S3siasTRQ3h2FfsExKqeCpymCUhBtu",
  "key33": "5p8qALVLHXbNZ9J15XW7PHDrozMqf4bL2bP2Tq69rkph8jDzmFuSxM8ZvgWrDPc9CfukvWdxmSTdMrtrGx8MZBwx",
  "key34": "4bmcF6T6WDHM3SCjNLjTQuZfSv9ngLTwLZPTEZpF6cTP1Va1ka8bt6YzMXcjta791SQyKEcAESkxd9ND7s6TTNqG",
  "key35": "5BYBytoSXpRtbSmrwRPhiWDjQfz9sNFKC71W7Fwn8XeXGmWB78SSL2VRjutFTxusB1HqkpTjp9sXGXACwbZfPsZH",
  "key36": "5Dtba2Kz7e9gFuF5piiifMy8VuonRuTbgCkG5Yiniy6RsQTedtMfZSFJJLypy3PfizxcHQTZU1Mjxjw4roWpuPgP",
  "key37": "5WxQxYfKwRUb54mjuaYvtWFqfttbPSXcdofkhamfjfNbPnd9DooV2YumkpmzSwqCAP7cGCMqrNX1KStsQPEhFt1"
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
