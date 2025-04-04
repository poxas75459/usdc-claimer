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
    "6635PgsvQdEK4gknWKYhdjPexBSsmLZFWE5sanEetqERbzyph1CWTUb8buEDs1vQGM63axCXRg7pkfe62DvuA3BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwvf28gidhMg14iMZMmRSEsqHgzv6VsmrCrLsnVeQmPc8ZaMT97QEqLUg3Bn2w3fDYU1ABdD4X6kGBNjdUGNFYY",
  "key1": "4kvvTjmegxiVQdsk83kXXtqTm5xE5F3W86m4BAGxTZ1hMEFGkaDpKFhVP4vGmypBc6PktyL6JTVJJoNPUNVPaPAe",
  "key2": "3To53QSXeqRkLEK8c7UV7451m1nohMCf4iBwwzcPSjiHgjCteZWM8VLhDjBH7iUXhtzTPT7XQf6XDUXhg4JtdwLF",
  "key3": "5QEHe795iGYLctKkpbZuSzRXEPwSWEdHbCiZZ4dBYUW2qPvEhAUUGRWKhsyZzfDkND6a4oDFf82xM2bf5Xc7gLeK",
  "key4": "32Q8Vm71q6AD6fGFEytgmqLnPukvGoC16DskVjerCSqvxAixyd3XWYMGmGv5gEocVMv8cZcaJR5xxPzB5GreFRmK",
  "key5": "2JpWbRm9RgRbskZAEjio1zqN7vd7R923ZgkgkGqjKYqXMoJBoL5PM2kcWvrR8vkqaGhWdrAQrPwPtxuQYe4jqGU5",
  "key6": "4yGDBMauUqUzMskzQQCkxZ5TSP7e51P5rqPbCvXHKN4gv4u3qy9w3uvnH6EMKo2XbUNdnBvReEA1w2k7QkyAbUZy",
  "key7": "Ev11CMCy6SVHdyNYy6mhL9JpHH15mJsKxETxaoiyxwYYFShZoV3VSb8yFWY1pSPLf5cUCW8G9h763RUyjTtNE3N",
  "key8": "4rF9mDpQtpiF4F7ZbKY1suu4zBcd4xpa6gx48XTuGKPXETdhQSzcdaR77ihuMn68mLSNbXCrXz2QXJZpwb8QvPuw",
  "key9": "5L7MaV1u6u1mR3B9UaRXLyLdHGWdehNWXvWEVZn5ZVMcW7WokfKN8Q9q4nnwfpVFUzQML28mJEJPnVrVbWzxTUCj",
  "key10": "4pFubsd5TT2mNWH3FxfxNQZhnXzWfqhyrS6WJgYvta5CPsrNw7KJFkEGWZmoanL1bNCpGsjvoSvEVqNWpdi7bt8Q",
  "key11": "5GYvL3dgdcQrTywWizJsim4Ht45f5sE5Kj3vXwhahUfqVn6Gaz279m5zzn9pFfSsGWukzRkq89d9Ldezp3zE2Ve3",
  "key12": "5TdPrHyCBA3kRczw6zxoaMUS64UWvZv8CgPpF5whF4z61NxhRULsDpUYduNgMKuDtBcAiJb8ppait6owewYcD7qk",
  "key13": "4LYg887zvLa2Y7BNy7fP5pBCNqANQp9hLLAu1hqpjxTVytppRGAwy35dnzxcZQ8JCMWGSktK4bVLPVbiVEBVfXyU",
  "key14": "3Vo5Rc3g1aFrgCnubCmCjwyhp18bR7w46HXeGfx36M7N4F5tYkr7mWLVWxtCvMLyrEJYNsBP7oeD8c8Kwgii6oqE",
  "key15": "53kSBz9p8y1dP7o3XdA69V8oRXqz63fweaJHrzAN1vFwNUEry69TmsHY3Ds7iaaXxJmSRnxVsiwoCwtbMySqEhzJ",
  "key16": "4LYttuju36q4Lz3qEET63F1kiSb569S89cUHw7jXcBnqaJgqnH1n7tbu2o5yRUwA3iv5XLJbX8wFUCsCPeJQ51YS",
  "key17": "2Gt48in8XZzACFiN7szk1rbjjfVLpeZfWaHSUR9TtLX6hfpiy2UJCv9CAuXqNvtCAffG9kL2aF9cXd7usis1jvNa",
  "key18": "mjQE144wEdr4oUqj5hP2a75LyAX4mWnajQgSWsR45UkCnuURwSTQuxhEvrRLmue3YnbPPjxW35uFYVmvQV1qhwY",
  "key19": "DDHNDCTn7kPcreVDbdLFLn2qx158VjMdw7kZCkpsKeFR7tX453ryxVmdcbRQzrwaq3kdATzejyy4VWrBVacD25J",
  "key20": "38B6jihRLPXPK5Cu5Eswrq5vvG7VhPhkqsigb7ZAaBvYbtp6qZQkTnGVqqYCcC2u1rdZxQaZZWNs6gqeRdFE1f6A",
  "key21": "3UwSM7Jf948yyT6W4aS1SUtKJV3ZTKZcXQuMC7qH2WPTBEbNp6kow5EpvrreNFZc2h8xgUrRv4FpMZdKu9EivEj2",
  "key22": "5aSBWCLBZzTYzyjV7qqiDMohbSYJvPpJ8djqsgPL8Bh1WHHrWHzMEpZDuV9EQFcm89zt8RktKC1qYMXpQ11Fvsp8",
  "key23": "4ScgKXPrd3ARJ83DR4ixuX5A6YYFkGEdg824BKvZ5pxdD91Fx1sQ7EJGTHMbQKhj5cpvZdStgwV8AZEPNKgjt8sc",
  "key24": "5fD1oDCQYMH2N2kDXMVVdLfmCYQ1bqTrwixiwCvgxzMD913Pb8gNt24S8JEaaC9q4UQeniSKDSSb8BFaf6WWDWM",
  "key25": "pooZL1JVVKdoGg1vaDbjhznpZqL6ptGgSXQ573k34k47YmHiUhwUVdN1xU4dTK3wJbc1MPG8Lo4LsYM3yJeUFVy",
  "key26": "5TnaugFAexrgGgAANT9n3aB94LoCiH694Gem8mz4b6EGEYHwb57DY6EMd2daMuL8cbb8hz6b2mBCrFE4D2KNp8NR",
  "key27": "3y3EG2uftau3oyuPUwcvex9jcgrEaRA8CZjSLK9J64Hj5hnBbaNP9GnEG6HXg2Eh5jwP4pXkizje9VND2bNnx6is",
  "key28": "TDxpQshbSYaz6JuFdjfv94c4pmSN9HBE453W6v6EbgJjCwLCsihgreUBmSfn6cAtePg4Uv8L95RukvmNM2EeMsv",
  "key29": "4vAGLZSk1RsVh4j1rvJgQ6DEr7mAv6o3Eu5bi2ywF6AwPssmFUQ8kHQ8jsxGiQzYKmwBygBnuhq6AypqHNgf5Srr",
  "key30": "3fm7NjYMt5iZGDPr4mcTQGr3ckef7ThH34xtiCCQFGoHyq1QWeuLaHg6bZ4KCy71mAvAbYVan9wsLAjDvmzQ7JUy",
  "key31": "5Xa7usHnGeTnnkfcZa2dsVM24LjQu8Mrqbpc1yPAfmRs9tZ5GhL9w51BYaRDkZwyQaZL47ZXmb1bfeJhrdmUYVk4",
  "key32": "43mBGXocc81ZgB6dtRLW9htTKdxGqDuWEKGgnoeFQCauHDFN4SYbAiYQFFBpNmTGiTHiM4G7dQUzEHYSnZ2TB6z7",
  "key33": "2JrVe3z6d75a9rW5U2twYJ2wmFtn76cwCHbo8kB6wnMsMGt5uritpGrC9K6JvWhT2PotKDpHsxG7zx8B9h5SQoxQ",
  "key34": "EN9vjD7ABEvNYziXUxudTtYbgfxFAX74PVjkX5Tp8Wby3gkMVhPRqLrpvMva6gjyYa7eaE7ih8stfavuGJfVbmM",
  "key35": "5hMMRfMGck7abwJffBSdTcRs7yKwjkZsTWrRDvTvUPfwd6cSeWiuuwuKXsernQp4dWrYuPr6Pkbv9AYEVNeS1f62",
  "key36": "5AbRF9R8bdLM9ZgUpquL2ypVGM8uPT5c5w9kQMmmGbRZfpTeaDzvwGfjdXpgYV67oj3TGiRxq3FrviRnrCwTcYfQ",
  "key37": "3orCqtY29JjEH82QVtys5RYdqu81pA1K12tQSvWX2UhiqLmHdX1wpzwUDcjVoPSGj45KcG2M4NwTFfwJEEhgZSse",
  "key38": "NQxpTQK7GmbjQ7iyGafEUYa5c7zihnyhYU9GL4AYwFVLT9Kw1Zp4YhRYJ67126g11PmdoGTFRaGxapUZUpMXzW4",
  "key39": "2iVALBuRmWahQnKgCuAQgexaTdycJ4q9viMCfZCU4rN3LjvPWZFF3WfSuz6GvDiCQCHJZ1pJZthNv5qvht23TPzM",
  "key40": "2dSe8U2E9Nzs7iLGunwTdHeQsUrjqw2F7zmUAS7YtWHGuxKvza3nXEwCEB424e43Y2y5GEA8m7u2CgFzva1kAW2U",
  "key41": "5YoKvVLve8AaRAiWaAV2JPaEXHJxxhB2hq39KJeaQcMKALycjQULDWdtzwQYwAaieS3bMqQBJWjL9coJp3cEcfU2",
  "key42": "3nTr87okEDSMnAQoTWwvcJJwXMcbPydw84WukSxyogkgaywWYRxguRfezrzRwuifUy3ivTRA2auX4NupgVgf6a1i",
  "key43": "536YnaBkiUH77aUDK1XqaQ3yLSVyHHTee96xZiLAQdC9xurhQFfp5Lmb8RbMm2NQx5WQuuGU4e9N7burh7eFuraq",
  "key44": "54shxsJUEJensF4rjWXUFSYqaZC1V6YfFzqdUfke871JRXE69xaP3pYLEeAvvy8pYi6A86B8zMu3vDo9VY2to7sc"
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
