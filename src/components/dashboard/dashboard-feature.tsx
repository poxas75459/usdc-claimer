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
    "4BwaWsz6Nh4zdqpVM14jPGp3F8ysVz3UxrooJjoAUac2A839MSSPHjdAAyZN4e736vMGqbEsqqVPVhcSKtVGEyRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBH9iPE3aJq2wLkpLMLRAfcdRo4XLG397X3Tmqft96ttkeif4fsxQ7VgBrhbtJtmXzFgVVtqs1T2zWUEfWziPSB",
  "key1": "5UjvXpUYRipUFJoBuGMnE4G3TGBK7M7oiMVXze2uon5SgYnBv2s3X3VP9EHsCivcGR6c4NY2JmNpoY8H9HqwziKB",
  "key2": "21brrdsaWTCvZFuJvzyPb2LwPeWRParLw3vRivdAsgf9wferUS9fHFUXE6LUNzaFKTYXhx4JV1bYEhu2cGnuJdAJ",
  "key3": "5CUGdFfMV9eZAXSryA5TN8SPUoJVKugFwwto4epgpvDMRfXWDMX92b496QSMAfKaV7jkmZXj4SQm8i6YWod2C1rD",
  "key4": "4Vt5zz5PiNeH4UEBWkpaPn2yGEzekGUHwsMj2MwKrykvphYrZKHXsD5f25u9Hh23QddCkRB97nmHpF8dp6MeWeFT",
  "key5": "3Avnk21xs2NS4K8R6nqqx795dfPVJqet5RNCJwyt16cQ4wcR2vdxK6E6Y39WjEU9x5YcooXFrGggozVzXXCHVwqv",
  "key6": "3SWnwJo3rGjGJ9Vt1Hi4sKszLQv9FGDsrM6TJ3zpSxBWVoyE3sED6wW4atWLXsUdZBzbvfwFnhqnmd6BRpJzSif4",
  "key7": "4vwgr8zRqa4LsJVJErHShzp5mmMaShmhxafWfrkJnZVmMbGzbJNdhGvUygq7Us3XKtVZUowmRHj4qasvLYprpsSG",
  "key8": "3QXu8yR6jNzFQmXXdedv8ugbRTYQFU53HRrpQJKZYfUMnVRymMACE7GAyoqACh4EsMdgjYaMuuYWQeyeDkzhCdEm",
  "key9": "53HXxmEtNvDGQB3gAzJz1kwd1Pa23ZFF6HJbbnqJo654h4vzPc3sjVwnt983S8Hr8H1Adu6daFbKGxmZQ4yQAHnk",
  "key10": "289zrF9LAConwSBs8i2zsjWunsJQfWq2juDY6Na3yYqWz24dMcjbkXXDJJcLP6AfGdqXYeGGh8HNBbptHxFeSHRJ",
  "key11": "tUwRyYn28zhHbBn5aH12BhsiEXYFVtCKJgpoUTQWzptgR4744fycYBrELK7e4c23JxZJsCtK1BchQxjFMr7vrke",
  "key12": "1gMHAqL5MJezKo2kkTZLp13aKKhvdQQd9tyTDQKg7qzizVDzZjihFzWKYDYfctimyEoRVXuyu9WmQYzBzGmadaj",
  "key13": "3mzWuhiXotAAfvin53AnVwassF97hXysaGYcyzEQtV5fsHe2V3MYnyD6W31nG5HMCp6N5xWMBcVHV4wXVpZdnNmm",
  "key14": "5GbuPTR46CYop8s4qDtqAgBLQMzF7scuuWn1LAxfDC4d4RZmyCJcLWrtvpZUajfmtNBSkv1PeyNNTMCdEk3kB4qF",
  "key15": "yQbKRpe7HktzJifZMWbYQi8kyryyPiMXUAjfkDp2t6ZsUoq5TtwDdgDbZUv6SfR6rrSBvvkGRvD9A3fNA66k5qF",
  "key16": "44wrjTtm68iY6xqxqBBTBfm5YcZ9KqBruJ33VNWZc8yi2R7TzXupzZf6iRKUW19E6SG73MR7HqZzSmtZu9Nj6AWV",
  "key17": "5m6ndb8buyatLtcc3Fmzsz7ovhE9426G5vbCESCvYbs5AAgQvf7cr2Bb2iYoNymD5tmUhFtka8w8Qn4rJLQcj3nC",
  "key18": "2xhMzmQ1k3LHFaaArjA2h9e5Jvi1WPQuzeC7iAsRcmgxeCuM6nFe5hFufB5RpXoJsrjsUfYkqP24Nbe2fEtd5Wy3",
  "key19": "2ST1mqvHe6LNvPimTipQm6uPYhSjJX3dPbosKCUa9A4fcn8amcq5qJ51yL2dCN4Sc3zb7AmofC36FH6H7AGDRjyo",
  "key20": "264t2nXyHsEdUyo87YQVZw8wPRrfKkoW9Daqux5ZuUjGkoqCVUvgLrDpUzPKrjTSEZePF2kkX2ioL1rbYFM9dfXx",
  "key21": "33unF5Q7UNL4BkQYCWPMaARr9nhykgqMXAXkbLggqMeKVZ2XkYjRCfbcKnGYRv1ibVsmFejQ8k7B9Y57sWbnmff3",
  "key22": "2iFVKtPj4RunSWMV6GDpj6PhdyjFNjDYwEJdW12J6ZXq8uHvpmcGcspDuiuEQMUGdPAbEgQL3nHdntV9u2tEsjF8",
  "key23": "5sopXVfin8vUaHHLUH3Xe4WMZYLQYkLicGKoGrySkfFu7hEBK94DP2EugTPeQf4EtgqvyZ5T22GxAFB8qBLSqX2j",
  "key24": "AQd2z7ARim1aiA4mG3dyCmMUsgoMfR95fLsS6XWu869jta6xqWL8sYignag1tCnhgD3i5bBhpHtSZHAirXvGqMM",
  "key25": "2Ed4wr6Pk8KSppo715NJJ9rSpnRCH4eyY8YJ5SQF6WhasWYDNPxCxfzt3w7y861AyTHDGSAupjvj89qauv9Eq3sH",
  "key26": "3qaBS2XJXBYfZa22Vp5h7KXQ3ksTaLNMv2tAQfjBLPB3gYqMpSDhz7JK8Yvm6ZtduS2PseMJeMLCKSdsqrUA8PXv",
  "key27": "562tgAQbKsp72qK1VJfE8qzK42SnhyvXww1zvyE9xbPTLAm2Nj7Z2kdfDDhALY8pHnwmtgzmLJEvxzpnmkp3Au3h",
  "key28": "55qs8Xu9Y79HcxnLypYypXYar7XjEVZnoqEmfqWasiCnoAsToBWkqXNzBJxy2jQyZmkXYdavabFjX2Jqk9U8ALby",
  "key29": "4YZx9498X4tda3dFEhSRi1PTJqYHo4Y22jvGJtabpmrjaAXkqeNbZzk6qhxfYpD4L9TfMvgUtpjKMPUrCUie12YZ",
  "key30": "255aueTNfgKcknQ12f3WZLxiKqPmavguzC52pG5JfffUqgWrTh4oPnwGsCG1dbRkL4VrSYM7UwdFM18Q7rSNNTPM",
  "key31": "34y1W5qPyseStQzNk7cZkSTp74TpLNLCCnTLisJCkcSTJXrb98apWQzD82Lug4FJ4fWMiJnRXxwuwAKGpBy3o1tQ",
  "key32": "4gcBTjx41XU8MgAiprsiwryJcoXbKonJPBQgrYGAtAQc5Z49qRM8AqSyYJgSqQ29nmKbAsRcNWXVRka534MU7xLX",
  "key33": "4sEneef6Dpuu1rF23M93fhG8XX3GRd7EA7iSzCPECcE2CwbKzTCC9HCSC98Ku3vuNVkcrGQ8DVxcQvFwaVWFPg3v"
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
