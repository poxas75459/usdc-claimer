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
    "2KhKdL1DF75GXttCYdv5rpsHW3BbuwEED5pBhkum2PRv68ykCy1n2vnLm28Fpv4Pj8sQgt6xaaesqtQH4mu8MaCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUyan9tCkaz6aLpqdRop8MCmporynV3v7ziSW87FRvhzMyCvxUv9tZJKaj7kAgeYm4PRgGQRwXmKPe2D6M6bbyM",
  "key1": "5sSwHiRXNGfak5ABLFx9rD9nc3oUefdemEcVHDtH3UBuj7ZgMac2Sj49ddEfoVXNHFGZERJdehw79wxGMutsM7mP",
  "key2": "4tDVGVPxZ5yzv4gwZ7BTj6SAUDr3FsisEyRKjG9Kr7YouDbESawhuCcpANsSGv2GwzWpDeXG1xEE8rkKzJUTBhMN",
  "key3": "2w8Lqy1Bzfx1qXUzSaYmmXodTXWMSbLfmFyz3gUuJGyUSUdY6oN7cdaT1VUazMLAZYromhHAMbWVxMweXjF3EDRB",
  "key4": "2UK2Z7MLRmYcxr3BvB84gzm1voTK7uotaSZUCWXXn81WbCy3KU7PaYGuNmMqeLDuv4fxHcLwcDBmUKKr3QiQX2k7",
  "key5": "5JrRhvyXtTTyV88t2Ftvei42B3141p8LUJTKamVY6EprmGgGne46zwk8CETjU6FhrqGBeVbCJD8EZeSa82xoa3qm",
  "key6": "5Pkq1JcDYLAPzQ2VxxnNeLCGXhNJ7Uhs1G4tr8VpEvctce4yWEdTzPEUZV6CVFX58kDsffFAgBgFtLcF3qobYaYP",
  "key7": "2LJfXdJ3opLbnSf1AzWGoneNeR9KihQXLfEJREqVSS5D7XtzQRY3o81ex3c3obdW5yyaRchd1QYSbWdsed88ECts",
  "key8": "56QrHg5dLpq4HrrbBB9pY4D2v8s7Y4BNzBChNmSBovBwskLwQHChUWkTZ87S7hAwP6VUbHMCwoPQVXe6FBdvXeqc",
  "key9": "41KUWQCdxnPFpHHyhtECjUgsDafext3CUCMdrmbAEakFReo7YdznYPr4Ej41gb9damTaLwVthLMMXwwjrb3VPJni",
  "key10": "5azaRsVcED4q7tkgSBJNgEKu6wPj45ovzrSMgBvAjXTkeb3BZZUZVDwQPCT8jg7ngRa5uBGraneABwEykvP54KFL",
  "key11": "3VT8ocdD2TN5zf63hanCjZZUgHibJKrwkuKe61jv72fHiAGLnNmkoRsgV5JT3fVHaDhHL89wPqCpvDV8buxWQXdr",
  "key12": "4nnjswdFeX3CpPVy5PXP94EUUqtToqChLXwFtDnvNu29xQhXkpYBUagBsvcDukyU1kpkmnf4qcR9bqiuCo9mjkZv",
  "key13": "44qVgPChsjZxyHDpSgRmZd6unN28RzMeGgxv7xoqLPVURJyrpBtDFCDPD9Gy2eJFRu3Aehy4y8ePEVoMvxFBEGeT",
  "key14": "5Rz7FXuVgcjyznKWuHEkd85sPDxQGG95tcPJnZgqa2NJajGtRWFnmAJ7MFJjJ34S6xECMf46RLDAv4img9UKYUbS",
  "key15": "5nFKmFodVMZYQW9c25whYer8kZYDHarCBvr1epxEnqT9WsoNgmT3pqmXL64PLjdR15f2gkG1VeYVvpExC3ULgKVs",
  "key16": "4avdpHTewYCRqYRr5iiBWDxXcEYDvoLTp4Wquk4HCHxFnBgHhyexg5n3kh3ZgAtVVwCBfT4uxd7WVbbgBpjDDgAa",
  "key17": "v17xcnYaVdQiK5o7UF3n8C9vLUceBMqEbVNypYTZBzXqezygA9e1mso62JYMnbYmQfudmVMx8wD2J6RcUCofg96",
  "key18": "4DjxS7zZJrKTt98nQpxm7uzCHvjBUbWK9FigDjNftjBsSEukEY9bM1bhvCTr226Nc9C9kyAgKFvcArs8sjCxNCyx",
  "key19": "3auxvaeKHnNQwa7YkWftXHdGTN11oV4rwfeKx8W5pgzNU4NqQkkhc45pePcMwPbGDQdTdmr2xzPfRiAWHjxFBqm3",
  "key20": "59JG4nwUg4iXKpxzZoPtbVKXN5jqBmWhJbVCX8bfJXGN9fvrzjGuEUK74fgDqmKFnktioHEHKq12suy4wLT5qw5Q",
  "key21": "3LvLxuXL3hqwc9TP3FCMziSmepxYWD75Xk2xuX6VrRtvhzhPL7K5rkVvgpJJBaCtXFf3DSbqee2aYztZoqfXNtE2",
  "key22": "3gFrNmU1BhJSQw7cb5HaYspGznA6XZuuM4Q2NR2Pdv7L8jqY2zevbpaPEY6XgE3cQsbLFgTJSoZr94fk5LqWBjQ4",
  "key23": "2kNguHWgSv2azPGSjiJwKYg1kcrpLdTi6jTFGWjgp3RpxAa7qBZ9u1sNk484vadv97eRj5ydVBrKKtnFL1fkjyM2",
  "key24": "4wnZajBsnKUHnYi7V6rbqHx4JcbJGT62qPuCY5QnLoFLrjmGBjaDycdSCD94Hf7BChqBxRp8WmARUEDYWhikGr1B",
  "key25": "55DXgxxauRf7U4QRx6Dh8ia3xHRMTvPiYU9SreG8BmUuBJuyhfuHMboM3EJpzCbyauXQZ8qcq6TkA1SKp9bAmUS9",
  "key26": "4JESkVWo5YZNae6GvRCHZZkstpVgVKwczLZrdV8MrjT5dPW7vTPimpkeUPQvDrdMwTkGkBLcz8RpZvhk7WYKgxky",
  "key27": "625mKf9n6uRch39LXPCwDTTepFUnEy7dMJNcaERpirUH5bJRMJCCX5J1V7sxEweKNB4hgWsWtetMAPom7H55JS71",
  "key28": "S2rYtWwa2G2QnyLNXruPMDq9c3chK6HvkKSFBiXwMM1KZWqCrHuYcULE15KGBGCqpCPVqSSWEmdnJU1QNZdk2ML",
  "key29": "4jMB8m9pSHjSTAmjA3bn8LHCS8nszCGBAESgQaBeCHVbUrgvwTdkNeBTSCL8znEPj8jvxfj8ygWw7QQXjVbcfLjN",
  "key30": "62ApaoWVJAnMC6gNGEcS34FsyFT6xUT8MVte4rUEZYaqeYdDBiK46hzuYQXGhvgZiC1CFcdrbDqicJ1u6CbTFdZo",
  "key31": "2KwxH9XYbMrVZ5ACfX2H1C6Ua6DRGM8jjJmDsjcTb3EvsFhyrvpypUUDn4uHrh6BvEGXEpnc4GBy2dZ5QL4wDnCK",
  "key32": "gcin7sS8g8Lb1M2HvkvxEY4mVGp7M5SDa5DSJYHm8BYqHu8BDYbDov2tYUGHWoVVMwUjZSqnbT4ZyLTeYotAzEB"
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
