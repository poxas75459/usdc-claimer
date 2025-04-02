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
    "436aDHMcG1scmDYWUfh9JKcAWmVVMNJxeD57yh9ZgmkKqqHvkSwQ24LrbDsYJZMp6jN8aotsGF4Eox8zAkAL1msH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyuixEa1Ra2ovUHFMXvZc1yeRttG1Zpg7HDAuEasTAn8bAyZomxRLLCBw8LXH9hL7KGXWZhQdzWTbLsS4uQUx8p",
  "key1": "y3Te47BFQ8zC3R4rRmkvi98pNzivRViYsoqP4kmzzsLzZfFR9HvJApxadf2cMhiP8vBnGzuNaMQMU6oYJfUR6BF",
  "key2": "5NHZupoed69VP4ThtMR9Rey2grBnrhtYdYgnSSCYdcDuM4zTZLprZwma18AFG9gwHtZ5UNULcDZ4XEaq5FPrMrrR",
  "key3": "2qvDeMWhFtpXEzt3QmNSteFCgdqjRfRFvdRpteGEAmCvchboBZV3RiQGLhWgayoNQp8bTLc44rCKXiWD3RCMBSHh",
  "key4": "23tgzaPp1yDKw1zuAFaNyG9deAroPEfsv7XJcC7TKz5oNgWVK5hMe7KfPyUcuuThpy7QB8c3hBPu7gLyJgJBo3FB",
  "key5": "4pcF61PM7PawSAfJYG1jQTnY6Smp6YtqFLTX2MjM1wmRRBK2ZnZgRRZVeAYtH5uTKVSDdkiXNjUZ1CrxtQMwQGmh",
  "key6": "3VDwdQzZ45N8ec6pvX6MKkmZ155HV1eedeWbpeTZrT6g8TnyB6CH2nv2ktMkHjNoELHzN2jwWViV1a7PJcyMU824",
  "key7": "N36RKvLr6KvvnevuhRvLu7tmAtFTHYVqsAy3sMZ2cg4chnaQMq74eWAHmx6gaFqLPohGcGcvCxjyKmBGxte3wVr",
  "key8": "3G9FQP1Euftoz6ij423YfQX3tEmAV1b4mSHMDoffP7poASQk2kbmTNGJRWpxtHhzf2Ra5GhSDojgmmaWF5h9oqnM",
  "key9": "2Zgimny7mdUqAnV8Kh6oJ9DZdLgqj1JyUtcLnusyErUtiL2Wj3Q8sFwVJKmA1HFBibFNchngvNCFWiGQeSa9fapm",
  "key10": "5Gu6BbZ6H2LQjLxcsmZXoiGz3ntjrfkZhAEg4Nr6TotJWAqNKGpZtrgVxya63e4oUZvpjyKqpJSmFMdkHo9eoNjD",
  "key11": "4H7WRanC61LK2pi3KHa24x5e3e7xncGZB8eVYTnDpqrvD6QN3EHeVDjcWoCYef6D6QTjPj5XzoiA9EqPXcCJ58kD",
  "key12": "5sDNok4sFVwkWaZU9i8RzADY19QvR9kGB6bJJ2GSquTYktS4pJHWV31yCPn2frEMsAcDMrETiSaH9CseH9oS5HCE",
  "key13": "zsxMpkqGRGvoqkNf2bodvWe1uZsPQPqfgwNuLb5iP8ycNteojLcksePX4S2euLPkTVA5yu8gEMND3KBoDiAC6Yu",
  "key14": "vNTeBy8hSQKNDycpBRaXdbQkvgNXuAD4m6WHFY3AP8d2kzxkHen2hSng1T95VUmYdAzS8M2RKcFrkQckWqDVjSH",
  "key15": "afCupMTjR7ZXHW9ysN9vrYGjoR5c8q5VDfVjSkZimdKjPiQJVKPvSExXkavSWntYX5sSp7RnzvdxogWNgmSkBGt",
  "key16": "4UotDLuCNFFnuUccFMSAqCVCLuhBVhv6dJ7Nj7ZdhkGL3SMk3ztMMs1bNWi1myZTXFw64LYke5yXck6y7Wh1wFFy",
  "key17": "2r23z8wQfZVgoQY25pD294UK2BXj7tKwxoiJTkC5bJsxyLh1asvVZ23PMM9irEjMFAcyAa8PRQvUWh7YiEUpJRru",
  "key18": "4RcUfA912fYiYv4icfSwNHHPzo5H9w8aKPxDxg5DCTznZ4M8H4EmjMMZKtx8KRJGUTikPjeohPgYvkEvZnAhogxt",
  "key19": "38xwJ1X2g6rTfkfX2cG9JnSAuUh48EiPZ9pYDqWoBbx458wfdHiw64raMBpzA5be1heKazy2qSEYYkmAQmXoWxpU",
  "key20": "25Fw7a8EhQ4x6TRonsi7VuYqEp6x9Bg9H4hrszSPXwam55LyszScUa2MWPsCFZjePTfHpEqjRVnar6S5pbGdvfqy",
  "key21": "5Zrr5tuF3xtRPaaSTeugmHaXartiJkZu1NMjXprHWuyVmV78qVqbAn35L6qbsEwpPF3jfRUpvoHwtvyHPNAJtaZn",
  "key22": "3rB2h3sPRPcUfy7sTZfc3z6KvSrwgEfeZgmMgXKT5YntneRQga88d8k8TnKgDavR284FvQEQswTLqoXSo3u9EFN7",
  "key23": "47wsoUNstnVfWKa7ReZQF2yXx8QCX8XjQQktawbKs5SAs7DAuPRAbuTDCUCj1zDsEp4a9QNhqLGHsNuSstH9vE8i",
  "key24": "5k3ezW6dqJwBntUGhSsoPG2YWfusRGdtMsYTZZfswbzmMt5k8gaeEJqnizdXSbk2wJEi3KGK3TAmpU6TCeqHXMHC",
  "key25": "2CrPKuAvYf6nVUpThtPKakBp4QKdYjyfmYmNJGBAGNx4Sdn3zvpU8mJ8RJXYX8CXYK3px9ypFGsDG8zCYu4ktXPY",
  "key26": "5mTe2njW53nMcerF78X59CLquh7wR2iTYvLgZtYxefWKYsh7PYsKqqMCnjE1ocW5r1K6rVJsqqeBmMtAYXz5rjno"
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
