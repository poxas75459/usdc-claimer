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
    "5RmrQaHdjkU2u9pTWZE8qnuRrYLV5csQzF6QWubTTuH8whx7TtuqtGifWEpwtqejnqfPKP2K4cmR1F9DkaD18A7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQMVKiyQfw6minYurZ6nZ93xb4wdLoxAEnttHKmUx1FxNHnKZbJ7aDEuPgnGD5HaYEtEYiZnHjN5KdnbRy2KgvG",
  "key1": "2CKazUa4K6xUZifxPaQaz7WwCPNJiRH3GQgMp3CfPJ9yAismq43hAio1sKp21wJybG7n4CHAdVFq4H7SkfEgps53",
  "key2": "3M1Fma9TUNJAnNkAtn5smZwqyWAiQ8bCNdUTBjF3maxLqw2UsCJuQPLapmJbqYXs3rwJqhCLE5NUUb21apiJqox2",
  "key3": "3VEd1BuxeN57k3Cdm7XhmHZx4V82AMjTYsMBcfjzhosu4jVRscp7sZZvbBWfSFW6xVUAvB5Yd6cS8XitEwFqAaaU",
  "key4": "3MZB5w8Xv57UYJZn1xnTAcRCQoPATdv8qac9JcWByxEqeyxDrvGpr3htiW6Wj8tH2FG3xJPnKdFjjmPYoVmZTT8C",
  "key5": "51qwVC9TKUUHsmZTKug46XxtqqXB54gVDCswjLm7SNNvg3982oyvu1mRzGmF6T4osbVYLdDMqnVRVRkUvPshJch9",
  "key6": "5C29R9RYiHHecYFoLZmMimc4KxhFiGo6o2jJC8ofVSRvzcuHXBfXHL9FDYte48AV5BBpWzgYwnch2XU2HEDk7PLW",
  "key7": "6owKbVxrGUojZHGCcUd4U5qSoVi7641cQ1YfdUvQYNrt6wyYDZkjFG2bQAYbhYfeKTswUsWonKXnYSntMaRvVN1",
  "key8": "icvzkKRQxzLZXUdojigmeKzsEiMNeiekEkF7u8q3QywgAUcijQHEionTnWiRqrDRLMubceeFmQCiwEJTS5vi9Ja",
  "key9": "2QYnYLfjjNtEuXAzyfT1JuzBhV5T7M59y3SkHUDNzD7dpN5VYfFWdvWTnP6Ar3ktDoxaS4HUYCnUYbBQPK6EPZbP",
  "key10": "ukMgdzt8RhEZ9ZxPt26nqinASaYeHtqzvSQ4Fj258NiUTbqtgMmohA1eLK6YkwiD5kXhxU1A4AmTASWMNX7WiYh",
  "key11": "34yb3sP9BBWJCmXTBLunuNKJgMgYktXpzc1kprSEF7EiP4Dgu9hRySrnStATPEon7MLSGvG6pS9nvpJbugNyEQEq",
  "key12": "3CUBoMHUYYSdbQjVGq1KN71frfsTJFZDGUY76K1SgQPMpQxn4MJk63qL3nY8YPFVB8Vid5fL9sonKTEuedTmWLpc",
  "key13": "4ohhfK2c7aFw6kPA5rapfennjWgU8p5Jpfi3aeBLoXBhWTXxryQ87CYW6yZPaNcy1oVKJeu2k8RQUzPadCFUSv9D",
  "key14": "5qTLD9rBBHQiaeAK3tmwDfWUT75MziXE7ZpTaRX3BCanqyuRHeFT5k3a48RYAw7LMXGPz21eFitiTdVoBUPfr2j3",
  "key15": "5CSqUt3phRf6VqUwo8EoyFLpLHWb7S46Gru6Vw78EN2aAmVqAVdDNEpDDncwcS2JWV24393FNdrf95JuLDBNQYKa",
  "key16": "3zWe6YBn7GoefW9A6kwp7P9DVEvf96xUfhDtEbAS4QbbwEbVSPc12oZ8qkY6hWD1tV6KNwbhR9SkZEx3QwN18fuv",
  "key17": "2zw4nmto947fUeAhsqWUL23Y4ukXJNkN5v8qzYsWcYAtG9fz5cdjVBJxkT9Y7xQ5j5y1tAPN5F5edd3ZpoR1A8HC",
  "key18": "65KZFveYPAUWTjp45rV2LpKLaPqsSXcSdnW7NahcLgN2QHdc4uvqGz8DGKGDTpUZx4RjrVbroxe6JjKzs28aUJMo",
  "key19": "2LM1UkzGzoBMrFwFt2bx1HMvS46BqkY3FSdwDwnSb4DfGCBDh1JjYn8WCx1N3N4Mwf4gyYqC2EhnR6ao1rGEDicb",
  "key20": "4qHA5gQgSE5yDfZAgrVAQcWBh3RQY9KfD9sr2yBSSKh8guD62BMEEv34TEdWpZG8hNJECkeGouEHmuVnRvaSccqv",
  "key21": "3123LsdR8q2NV2WJnrSorbydVvNfNeE6z5Af267aCp1vUZxVYp9TQyjVE3nYDCBuQ4uEQ7GEr8P13DFEjkUBecHQ",
  "key22": "5NQgkp6ApVDKAUtoPGZ1qZFi7pG4bX3TqW61N8tZb6aSEqL823yHudjae5TyQ6RDCTi7GSc7et7TqvrMyRxLmTyF",
  "key23": "f9ANXZ8XDGfMeVEenk8jZG8pdjGzpN5pWHwg1d7fFMaQZoKDar8aNBrge7mCmWrgWnHfW3JGLgNiz1sx8R89Cv8",
  "key24": "3zk1Xy5JBbSLVG8G4cEh2ewkDaLTNeMHuZYbPx5CvzmzAcQPJ3DK8bJJwAzSmurvPbsNfns7vsab17EDsYXw3sSy",
  "key25": "4VjKcTRbxkQdABbVvYm5YQvWcu4Uewpty3kb6yL6D49VqrA6g8wGjWYwCnUNwAYyqE1PsVZjCVtDajTdx5mypy2k",
  "key26": "5P1fs8NZE4dKfMSNwKPVZXWCr7nTrDjKv6KPbkRb2qMaN2xkuRkR2oosCWkDnXGhGQunB6BF713tQD6NnyqshRrn",
  "key27": "4XB1GXVJWDk1iXQnjKbu5Yab93ykrGjPAMpZTTttXc11jZvDyp4cVLVam6jTkxtiHToJka6CfRpn7jpbp5qnfQft",
  "key28": "F3RHjeLZYYGux3swsSv48CxvUUYXz2jzb9yM6HBEZLMnJUMEkscP4WByWz3BxgnwD1vPD19Gb811VqNewkmuFrW",
  "key29": "5UnRAPr1nye7cs2Mnyg2ggPq89KYM5H4XYsxforpASckDVkxbhAsMbFjoXdjttk7C2fTixXka5L4sHbLkUKPb93P",
  "key30": "3YzhJdsRRGNo6g8vv9xWyHHgRSiAyWgtYNTQpfynDBLT7w7Wg1NhHgUkwYkEGSpmerpRsQjvSYvvAK8iu2hgUhVu",
  "key31": "5KdEKh6GSwmrMCUiAT9DbAEDtC78oiNj5UwQ9D6GVHVGTi4mPFXbAoD2h6icwJEUC9ZmAqAm42xZTL59J2AzmmTx",
  "key32": "ntAGTU5f7kM9JRnmy47WFWtZYVtSABv7FdibLiSQc7jn26kJdWDPHR7Wi5VMtjgPkgc9R1Z8SiKYLx5epoDNvHq",
  "key33": "cEjkw9ijbfw6JecfNqHpPLZkXnnp7J7UUi78hjMMEj7bPxKhToHL4ixCCghKGufJf5uXVohjian7nxsx7Tp4gme",
  "key34": "2rHvYHmY4kgrbnz9Fp5TpWuAicbGqoChBcsXLcPwwBSyRvvXHZfSDndWq81qLLVnjYMbepSbjsFLLaXKKsWtb2w2",
  "key35": "4z2QmmFNuVnqwgjzCucGgwj4SBu4rVpVJUUJQiovZt8BksDoBrZLe7SoMsDLCyMLgs9irb6ioigBdYLKJ8HkLv5z",
  "key36": "477jCdqHSHUXBn5B3jKEZbEzpYdyrRXKFWDdhRT2wAg8HPK9ewcMXpsmug8FdNQ7e2sxaaWoYmVeZG1KB8FbNZNd",
  "key37": "5sbyPaCUpAJFep7y7Wh8qS9V9kfS4VrkTWsw3nMdYoRLUXBC2fs2vShbDBQLTCygGVyfH5sXRCcKw97W32QYXiTa",
  "key38": "2sby8ExYs8axnZAbeEJGcG8JWLNkeMazVUUa6CfyNBLkzXErqLNeo5vN4TommNZmqgg3Ug4ivMrFHbvBufzAsXqm",
  "key39": "5x3wEXMS8h7FtWtgNneAzgd44tezLsWFwWm5YimE77QfWjSjKBDDQ1LFyTBHThu9E1NZixBpS3wxGGG1zTnfq5rn",
  "key40": "52RLVkgocuwhhv5R1f83Xwchi7o7ZXMC321BMgy67x9BooGotNAD1QgxeV2sQVxTnPXrPMdn5gq2JbhWJ92MbA5a",
  "key41": "5bFa3nLKfkFQZHoMKXC7mNg62NP8EukCtdned3hS8hwuRfmpsuFPrGDTnr9qGKyNjvszmzf7wBSMPN19YnPgwjYZ",
  "key42": "ynx8F1F6BVXm4wjFAjyYJZx7xngprhUj7FfFN52MgDDk8iZv8HeTSaGScByCjemm483MbwmF9PnScfyqEgy4t7Q",
  "key43": "47hFFP9N86pmaQCDMcXzKz5jasrTZazaUvYq6p85Rk3upuHR2oNADK26YEGL1i9wRJySRaEcZd9peeGJm6uw2s4N"
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
