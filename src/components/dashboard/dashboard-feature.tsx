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
    "4JBTsh2SeqrKqnFYVtCZFLBPpa3dgna31yhpooeXM9wo1PaX4vePpi2eSFMAnsGUrU4fgHT4KkKXSAgkAM1Gfb4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQ7yrYaVWJGsw29dseG76szRet5Dwaax24MqmWsegyFqkB4srDx2Dz7JmffEXpGGFKtjRDiRMoa5yCDTdpQEBMQ",
  "key1": "57EZJqoCWjMUw1suWzEukLw7zkKAsUXNgehjWn6r4iwTVm5f621cMWhKuBHJytjcN7KcFMumjyeiSDnpKvUL5gMi",
  "key2": "3v982s8rFPNoyq68W31FAGoPboVC8hYuzfGHhg2w9ZPN98VwpajHMZY9XrpwEZWkoZLZstVpsHLzVpc3kLBr1YAZ",
  "key3": "4Cn99A6RsxXtFhz8dfrsW4Ctj99nPpGpkL6D8hgcaG21bMY5EVwvDYFCy9bRtiq66NjnZ4WfqVJX72aatxYQh2c9",
  "key4": "5P5FjKLDZR4MU7spzUopMA4Qcv7mBKManz6Uwa4DGWxPkYtvbgDD3SwRFVCX2agghQbAshXzZkk8oYkdYQg17CfT",
  "key5": "5G5QMi2SPWFnRdJ9NVuUsnvoPxd1o77M4VUcAQa9brKGXYXhRAHaDu5nNVcit6qDTBxDuScLU561mnf7rB4gLnHj",
  "key6": "4fBHfPGLhCqSVv1iTTeMJVRw8KjyHo2Roi46kzYYsXU4PuXJnLwrKXy6v9JvXa9WBjJ4tnZcrbe4nxyroRdm43Xo",
  "key7": "5i5KmTn3Q7F5L2LdoTdKNSDHS7FHuuuMWX6c31iijB9nNk8HyMfC3inE4HSQ9CVtZLayL4d14DWfgdGBL6u5JDB8",
  "key8": "2YFgRcFEnGmpmo46gWdJa2ggzRmeoJ3wS5CmguqyaM3Q2ZqfaQEsXK1zohr2RTHBcyN4fbm7X1xYGzbXS1WEzmt7",
  "key9": "C1pr9ZFpNxxvxdcGgQbT5Ziq5mYEQ3UWkrwzjxzARaBB5JUpr8WvCDg4Lc1299bjzUrnFh7nhuALPGSXA59TqD1",
  "key10": "32QscrSCfQiX6CW7Qfuxpt6k31LQcSkQKwzd7GhfzjZzpEZcVKKtS6BMqvS9uL9XsuhyocLJgctpz2T6MY8dC5bc",
  "key11": "3cA9BegVvRnTa7pZZ7ez8uoqhHCaYCXqaaenhy9dmSamsHTGfRmsX5otGiPheBxP23KkxYXWDmG6QbXhZeXfCjiR",
  "key12": "2dXLP4zd82xUGJVeaUE83fJp2bpzsWj7sQWXhRdLUppZgP1JF91bWovNoRta36rak2yDsXiBx1uvNvJyMf7jSgpD",
  "key13": "572EdyGAy7u83d6YfjA4MCkmqfeXDMSdUuVojZsRGHhMvYpHZRLT2uSWVZK8GYTs6zeUBmbSHJmmxo8FXxB6kCJB",
  "key14": "3U4Ekzb3HRC9H7gF9RTsVLwXjCGbPz5FSYAHthHc3bYGP8WDZRZ85Z71b9F44XH8SzBZmWPqXo8hSbC1gqtiQBPN",
  "key15": "4McRtatYYGZLARTRvGDDbp4EtjvpdMa8XwovuVMEnNpdXbHM4Yp5VXnGcG75xqGm7rhB1oeBRCvM6Pzn7uHbfr6K",
  "key16": "4KYNvy1AAxXDpTirqWSvRQ86wNXdS3T2ozJGVM1ACRBU4RrYu59HZ4v7xUG8JG35faXL5fni6mmzQzyx4zXnfS3A",
  "key17": "3d8M5e7FN3s4vFGPrWUKCTLhn29LQz6rtyZJaDg3fH7r4sqaCRjPFnZ8asqJx3WMUKFgGxfoosHPwenvaKhcg5Tk",
  "key18": "5V7MY2qGFKjnJD2cvn8n5iTun8P2c6xmSYJdhRE5F3oPMgRraxD5hScfDSWtrBNPgQny2PypuLvRSbKkMn4BJcJn",
  "key19": "58LKSDPR8B2j1GNzQFaXKUYGfQ1gWFuzp6tHV9hUrYGbvnDcmg1vyUaEK747EMTstq63opCgnTjudmqJee4hZWvZ",
  "key20": "PEHjGkZyQkqyfAcu8BzKbyZPW19qrmY2uy9bSodbLfQyYxCmhwVfrccpoLXnZGXqhM6nxeRiRUdv79PZusMCa4C",
  "key21": "36UWkvdQ8tzg1sFWkab43Z154XmXiSoNjCdfgsuTtKEqPgUPo3eHCQH4ipcVCNmrd3cjNczzjyNKMg24BNLigN4b",
  "key22": "a4x9roKmswKsUUukFnmLU1rEFWVyijHo7KtJMF9WRBz9Cn2ytKe5wHmPF4eeqHJyr73mjZfYAnjPKTQjCrn6URr",
  "key23": "3Td9dsjmFQCg6FzqtGrtLY4YExUDQbxiV1S4ogQCjW5QriTGDxYf54CzJG1ypAiJrjSAi2LkxCZ5pPUHAzJNkkqE",
  "key24": "3pqq2urJAdNPcF9ATe2dmKms4bGc52JftDteHmsmhNEkvXEBk522JrRXCn3jVeqyUKng4Rahh1b7U8MNmFmttC7F",
  "key25": "tXNgChAzBJTMYBsPDsGgHYBHYPVmiX7aVDwTdEBHZ4Bz6MKkJdzNnkGjRyjF9hFGgDg7Y1ggpAQJ1Vamrcy9MDB",
  "key26": "cLVhVxVbWNzoHP8JYCHAakQ2KTbCNctSv932oLsjeahhBRBQ9mnhd5CbieG3RNWRUZ6Wk3emXBQe1NMUFXuq9MU",
  "key27": "4jukDEdTVgCaBmiMcSFqLBg7FzQJVV1DfHaZCQdftA3HASQCV8Csdz2ERpAQfLxhHLDpQQ5c6KNt5LibeRjmjvPi",
  "key28": "57kAKR1eqXxYj1GvXcbU6BndHr8GozDqLYB7KNZMvHgucWbubjddpJKfmVVnAM1KigWB1Wr274m5KsU2tzoTGDfD",
  "key29": "4YKKFScE58XKmYCHBby6Kcvs54WvkYDfx3EU6RmRFsFS6rrWqXuqxP26nvmnEfTy6XTkNHQEUfcc2sp2eDhAyZeT",
  "key30": "57dqBX5g3N9p4gfcaFZJFKp1FTdP73e8zN5V8f5sndgRq37xjTeUsCmLPg3P2Be6HN34PADFq2Kes7MrWak69tNL",
  "key31": "4q1djzAMHFKiMghUhSDnuUQ2NvrUKnq2L5V22iCvE3ycSDxfeA12swAMyT66Ffg2mz12zKuyJCJhurMj8w6TbeBB",
  "key32": "2J2Pqfrf5aTGrrPDtFDJnDYgi5AuKNWWjbSmDbvr6YXtrVY5biZqpZNGZEvQDWRPnKXedbLE3agTP4Umyw35zem1",
  "key33": "3p4GjhY6kKFywBBGG9qN314NkfZsvp1df7mMiJPQUXLtE76qok7GN4VXZeFHhQ3QHJrdXAiLh3i8mGvMuj7EvLaH",
  "key34": "2ijhoyHAYMmWcdc9xdM2Ha3sqi1cSKAw6gLtnbBAGqTQ6NJniHMji4gok5Zjob6B7LZBGzpW5qezCkYKy9EToHmf",
  "key35": "2PZvtAuv2bjdrDpRh2vcraunAxdujzzpSTkea94sd8V1RdVeWG8m2Lsu7qtj5WuPNm4c18UgjoAsCzZYrR8XM7Eg",
  "key36": "4HhzghKCf7ANRfgFZ6jh2wcz65a2SUwz2iVBgwNvFGoAMQ5daN78pbmQFSRo5Ys2g1VuxRNQ7QqBtfC6pmLT8bTd",
  "key37": "2k9iY3uownuAxmMT3hsguwguqfYXcMxgYCgVJKdR4tU4pURnGsGfXjZdZWS9HbgATEJrnpKJYcs87AkM9XoA4Dvp",
  "key38": "5XmhEP3y4jC7SpshVV8HXsWzz59W68dSSv4PJrAEVkC5FiMU4LYjKunAS6fjTtXUjQH3TS76jaeaqYFoJPAvTfUQ",
  "key39": "4bFZbPKp2YkqcvKPmAQvXTY3KRUuymEw5UpqShnNnF2oSGT7meM2Vq82F5msVWrciWm9pzfJitivSLitqUSYzmh4",
  "key40": "2XzAWiw84T7B7RSJqgBfchpqbCErDKkNKCuZiZbFu2Nc7cbYehvS75m5WTPCbC4B6C3e95SDz6bL3jFh5cmLSoqN",
  "key41": "5g3rgFoKbxc7knT6uC9eHeeJbpCUD1nysipQifv3etAqr7ao2GdiadrSwdWHEo4LC5yhgKQEFcMxvKsDucoGB3Ma",
  "key42": "4yokMDArHdumME2F2RephdJk5GNdrVqBPorQwXna4Bc989DzXzpVuPkksbPgGKthjLozbLEszqqqAAL3f7xyNrZC",
  "key43": "5S7kpdq2RhNt3NEfKCtPBqprMwzSVCJtkGRJytmj7fyJLz1CKxcyEWiBxq881mfTEyj6xigee8Tw8hWiV2Xy2qyY"
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
