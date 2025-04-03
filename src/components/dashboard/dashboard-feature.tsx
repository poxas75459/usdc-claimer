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
    "sHabTGvBkQ3d3KNLw2FT6mDBS2WqnkWURqWCB3962QDoYZprQcZhsgLjLaPcvDpr5Eqd7JGPBGiDuhQxrkhKE52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HXZNt9Dk7RmLofqJpGg5Kj3yU4rYBcrhnrGLGqfvNZ2ZfYvkXttQRc9VGePSXV7WhfK93f27a93r7FoaToTFDUv",
  "key1": "2mFNu9EGFw5KG4kx4cJ73poeMuabQwKRoSZ457eXPmUKHcg1HVugZNkVP4BQoYJxx5Ve9Yrc9KjW38AUAyFqLKbp",
  "key2": "3BDQsWyoZ8u5qjH641dPJZRCdMWib2Y2TJekZa7hCVi9pYQ6aEGwFnbf63Hy7mM46ThqW1DX696hySstcSekepTA",
  "key3": "3DvFFZzRXQpsx8EfaH7LdcNqmQBZqLjBdPFkK4hBh8CJQzychAmQJsGSUV5xHEfaiwEsMB8UpbmPGHkJhFA5TBwR",
  "key4": "kdRSbcHBrGQTBe6LY8i6kXCpVPMRHUPZeixY7nVQXMRK93CaPhE963fGSM2aCxtMRwm4eKgSwh2uTa8A33RnWB1",
  "key5": "63tH6cfWa7pkXavyTkHZmaE1ewkVjTuUJSVcQLMsuD1HA9Fp8GisNMCY2FUHeEbUGyCQU5iqNfh5EjaBc2iMXiJH",
  "key6": "25fkNCqeWU7aeNbGU8niptuVFMKg7tPn4iuGUQJuVVRaPdSLCsdsdz6eUEey3njTdDf5MMdLbqhHDn2Y1XmgZM8N",
  "key7": "uhWYyAnFC25phdCJncSoUmASygQry8TTHSFpTQzZVKEXsxzeqaNAHCP4ftzJazyYe9UHRbLDcexPCkjpCqk7YBo",
  "key8": "6JFZjkBc2o9TFZ6Yy3xXQ5L1cuYWNmm8uJVi8gUZTJojDP69XTedpEo1UYtjKaCkfx1x2gjGTZ8fyVBBYAUYKdf",
  "key9": "MyYpRAiTj9vRDdqfMmTxdLqQ9Q5qVaoVQLEEAgCPP4vvEdUn8c9whjojNPyUik8iuqTMcJcreMtbvKtmWrVNfSp",
  "key10": "5iGwy4L1PFgUr48k95fhNFKGgJW3gGEh8M8nKL4Xwump2jAJhimKFZe37dVXHabEBHAvwFJvLeqo4Ytb3hYXmZ8D",
  "key11": "2SGHNWMLE8kuHKLkNDzSsxstHcwFd54hsReGnNgAxr4HP1Jke1C2MPABa5x1mqqbTFZeFojy5ZERNdTJdv8ADrxM",
  "key12": "EE7GguibrcgVgDKy6j8SGme9fo29FDYV9UeakpbsDvmiUmwkbcjSwrHkzjHk1BVCjgGK3MVjbJA5HC6Ygva2omk",
  "key13": "2zu2Z7ayzNQda5yR843AxfBnsAkYTwff36nFySPh3924Kgnm9cfDtexLQhNxV8jyva9e9qjaURzxRnTbmW56LdJ3",
  "key14": "Yb2iqQhr5RSf7CdYUU4TUoBeUVBZSDjrEv1u99u5fuUfcb2TijKEc7xUahWyfNeiYYpP8w6m4UD7Z9pRrU7tTZ7",
  "key15": "2nVRPQbq93VWzCdEGXWGgXCDdf1EDhDxSPx1TRk18NE5Fr46jUe59D67XaPbt5i9bXacNLXyWRekWNmBMVXHyrhh",
  "key16": "2ieX3HXU4HDTMfZF9ZA17QZnxdsnXcZARAB8VPu3FASRpdLa78ZE9vaMunEypdjGyHbXowmZ9ccQ39GuJwKHp2dy",
  "key17": "4ELPSuwtBWKCNzDrGqhmhGFu7JmuZGqB5tzxrjpMEvnC5h6fKVPeR6FLGQsaeLc8BD4oRJLtiLerKsbNeE4CF3XA",
  "key18": "2Z6N9a5fMYdgaNgfv9XxSPbnfBFc6tZLpEa2TodegrXqTrnPbkjyJ8utTbtmfSCeEdZxsJxiZTzsmr8PMLjCZwtZ",
  "key19": "4nWihs2fg9ewCPA1gfPNcsUWcc9W9fgtjJD8oCGrZFDYBXZZiq46gbQCqTzESWsAwP8Mtuz5jjXZ3DNBVxSAsHwi",
  "key20": "52R7yBbQeuWDu3iZSMbJ1tsSc4F9QYz2gZZMQyHQndr7gTnNvdWbm7zUbspxcSbX2HgD9ahBVwNiX4WTKkEByC8Y",
  "key21": "cHJNdXQkENoHRCb2BHp3SyyUQnu1yqzeseLmx6xP2AsWBTs18w3VokQSfK63rYZ4hhy9zJE4i4j2RL2tFTKHjvJ",
  "key22": "N5aNsxHcFkwvnEEHBygdnLvbp6pWEYnV7jGR9vDEZJoS1GRkSJG45fnEcJC8m1fixQ81ura6hhKSEQt2eRxdYnd",
  "key23": "3m4KKt6SmCJKRfpoiq5ZCNQZhQahwsQdRHvBTmzzXrFfsYcLYLVngqrXiJuyv4WVJ7a3cdhvNapdt7qPk7QEirWN",
  "key24": "5LB4GDwX3UU9qGVcgdMaYGwDuUqsRkNZVTPBqdSRPuC4cTfXwcax8MfqFyXJbfQwEhgHY545DpmEJwihraXv4rQs",
  "key25": "3jMLFD1P3voXXxzbiJATvsoVdX63QRn69oJqXW9eQu6G9pNDEbsAUqgL7XfKQEUBQ618TKSweCdhXBZ53NdCUpfF",
  "key26": "2VTpm75jmodooKf8rYFMA2y9GZ39nW3csKaGYogL1fiyHXZQV65QVLwMVeaZe5L45KAQ5wz23w1LkYhm9qdaU8c2",
  "key27": "LHuymdNmu7BfU5hHg6TLt9LefUxrBb7vu6NQ9Da9eFxFYXYoFcrvNNf5Y2M9r7hAVDRs4Rd8nzNZKxiNsKBcxQ3",
  "key28": "4Bgq9UyZ9LaZjKg5qv7XMqz4VMyhuHFppPSbDwBTRGPS6NWjpFY1ztVnp2pqwR1a3uEN7fU9CRXUazTDkoBnGhVV",
  "key29": "44sXjDHAavwDiBuJ4beBhDxStoE4Jq9hsr5HjK7Kwnc6rPxyyoQu6HS8hrwbZuuFvjwWE22SBHbaLB66yPBtaPiq",
  "key30": "4sEqhgMHZH1DZf4Y7nwehmNbH6gZ1hQHWrt3hWjL3bqyPEEJMdqTpsE81NCMPLy6xmp6xdVVXm52S3GkmcMto9E8",
  "key31": "2DCwwRfyX9HHHM6r2DZmggqsRCmWETZeavPXYXafvmWwWzE3S1BwKCGymtA8KU2dwrdZobU84sXFfwoXQD2a2CXq",
  "key32": "2Es4JPAWJS8JXfDPoYtyHJoWrPd1z5bwh1vWwbCpgEeEnNWWMrzAeCK8Po9RM1UmdYH17G61nAEZt8jHuwbciymH",
  "key33": "3YVjDFHuHryNbMwWPoPZ7wt2jRwqEJBnULFiE8QjeZZu9XGhzczBQsTaXnhMyjqsM562QyHZNCLih69sBBTBJFHE",
  "key34": "379LmrMn9xsJcfwCjgkJKznsyK45gUCX9sdohWgHu5P2htRSz59tQmKSsZ4ck6uYMgBTboymmxoxjtsN9krmTkf5",
  "key35": "g6TUQicDMxJ7WNEMgLcJehZNnFXTTHTMNecJZyMw92EUNGFYR5hr63vm4BMbG4QJjPfRm9CKwPSXn2iwPL5bxXx",
  "key36": "3bH5NBQK3RvnFFzbfCv1AqKWm7y3ppu8PLEWw5qYT3p1V8UWRxdDu5cp7u9XqeizSvyUJPn13ksgKtMrSHWexUtJ",
  "key37": "44kEBsYNpwJaCXFSe7prSQtapzFtPUPBThVnWym7WYDFoExfA3nQ2qhEY5ADgxF7VYSAyeCJhDm8WvjU1xbvnUeD",
  "key38": "4Hi6UshAP2HzUDZyiJGzK6FWqARtbwe6anWBtisdd9pb37NH3ZaS82KRfANmzFELW8zv7KWmH3aDHjp9azhARrac",
  "key39": "3uMhCDudWYnp6eg6qVPSaxEXq368kDr9j8iWHgGyAvvgH1rMQgGRziuSd3cYsf1ZPN41FYyGjLbxSPCHm7GAkwqu",
  "key40": "3FyZ6EVdJnk61VppuBMBQn2MYbSAr4yb22WFExNgB5NHGcQCQA8p3w9b73fzWMaZw5ZR5TkaT7AsGZ4XQTNrRwwe",
  "key41": "3sAguXwzynNvqjgB1WPdaRio9YDRCJavkyupo2EuLhwKozj86DErb6M274MUSCJVfkwYFYFo3ZTBh2HTvwBwCqS2",
  "key42": "2tQ3ZYwjB1gAbsBpEp3x1dKAgdkEaixWkAiWpun9GhQQgyeWbG3SKwcWWZqTxUJ9CBRzMTTghuHKQD9GsHAsU2EX",
  "key43": "3ZnHjbFg5N2AC1PzGGc9V3NoLVYW1x4c23a1gFyAFgFiThEUtFtMfyiX7n8x3jz6RH6zqNXu2viALsmVLqNtueGe",
  "key44": "uGmvTZuJtaaqex5cK1FLeeb86pYu8wqvyysuKyDQpo7RYZXC3DiPzNfpTznGDAofWQZ8woAMsdR5Lf56GNFn8Bb",
  "key45": "2bJnHS7HR6KSDzjNxV7xMoGr4pP3YCzzNf11FyTD1AyTPfrumGdRfVvuaspkDcY5MsV3P4Ug9oP7uGfgvf2hme8j",
  "key46": "mqrUGnQrcCQB5Rq8q3XzE38WHCov8v22QL3B2gHTvnBBHPtov2wHGzmm1EFdGwGneMTUqXuiwxAkLsvsQ1cED5L"
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
