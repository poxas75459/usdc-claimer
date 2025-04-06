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
    "3N1Gz3s2ELbqXZ9Yw4RdubQF4YeSLintAhYxfA5ABqdXDsN8XueScEGHwEGAWTHbiFnJNCba5FHThXcUmpaVAL9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRFtt2vAzjxAR6mb6jhKk1ohNJgs7YhFZx3yYi9HfrKBsDXwFyxPkuXNdKrRBrykBBc5TBp9RgAchFqpwZjQshV",
  "key1": "3X5QvRKYvCBUfy8tng8WL1fctiyWpEJ4L2WP1fQPhw8oUrWFf1V3gJiuL1pX5JtgjKBY5PxTMqU8GgfgX53VcJJc",
  "key2": "3g81FFucbF3PpBzFmj9sov3Mw7AJwGQHYmYrfghYU5zNmz17fT2gXL2TwaG58m65WHz6BrgrpXyLLcJToNi5vfVW",
  "key3": "YQqaoTW5KkvwNz6NnodMJRVxKRmPwKi7gdrzUDvh6yRZhSVFRGzPKrwGSyWAL2AVt2sv2SbShzttsvpcSsBh3Gq",
  "key4": "5vs9ecR1MhnjWYRC26qn8DsxamcHGDUmM9hjojYZ13YBDgnMnEseL4nFVNvquXNb1Hxuqc6oeYHoGnUQZgzXTvBe",
  "key5": "4J8KTJCJ538hCo6rCDg4y3jMb3w8MQTT3Lb9dpwbtQoSb3LCFB3yhvydz4E81ZSpo1Ey4gpkbqRXZEDJMGeccMqH",
  "key6": "2tkQ1pkaozXSSqrbqqmPhp4z9rgQqqi7gbLkyBFnHhxkfrwkqGxLe38Z3YoH41Hu8onNhNzKd85X5j4sLKk7HonQ",
  "key7": "thMn3tYXFpwnrssEPvyZcdZcTi65HNnqWywLB1N6tpEGZ7A1qAFz2gWqJi2Hndhn2zQ1YwQYWCXFg44XR8cCQfM",
  "key8": "3TDZLHQTG5FGaT7XBNywmqgU1aeJrguwpFJut5UxJXvhVYmMubLyLdSF6EigorYjoaVCaXC1FfKMsf3qvWr266pv",
  "key9": "2wJ5zQDnC4uQ2ku1gCPk92r9YszzWeaWHSr9KQAqLqKeizyCp4jHtKgWs3YrnjBbzGkgd8j41o9gSjQwBjfPLmQe",
  "key10": "64tjYBEsmXLwfwrZg5im5FXwuMsPqESUNKtnwEy2EnSjtKsFCcuur5YXQDvxeDmoaTMLFizo7U5X6Ee4c1h9n7Qh",
  "key11": "WtaoozMv5L1eSL9DjF4bfhqYqKtiV3LosEmb2XccgEnpnLYDWujsC78K3vWJdXyUA6DwuD279q8FTB2MdvtVKTx",
  "key12": "58yccgvMEXVwCpTFoDsspgSEz85JZcgA9iELU9Vccf21MYntQqERfGyfbWE74UZLcpLcj8jNdTtpjNBwrxyFGKew",
  "key13": "ATJ4hFcLnqFLRuFG7qKjA7gjX5oMCiBZCGtdmA9cwiESw7j6QDnEqdTiC4DRkFd5eFmfYuQvhTkAiJiAkiNAfGA",
  "key14": "t9DYqMTp8ZVwRkS7BSu9JHoYEFhZjNd2REQmxfMc8vwcZn5gZra6Z79ZTyMYbbkDdKW88qAYpR93qQwtpZr2RSS",
  "key15": "3ZXVFHdM4iASAF9Q4vv84wbMWjKG9py2XyfGHsdAvbc8MurKNxkGxTKQcRQHtjcGmBaVqN3KQkT4BFVQBhcLFChR",
  "key16": "3j2yER3pXNGjZmdkfAmn6j4mRLvf9ZbiNQZsnLxsmKNVbffrSz9LSPiAg76g6L8dvE2iS5pDrNeHDhvMbReVdDXh",
  "key17": "2kgjHNiGE2oBKKGj6smweTNAezb22yqW6t5dFt51Kc2fgZNZsNPXGnYM6DwjvjxDXQAXGs3eSY4sSmXKxDAN9eW1",
  "key18": "3g28CBmi2kBDqLF5F3HuCVVwJtJqyRNazybrghQnMF74YGRcZmyRRv72ZyZmzSd95S41QDHq4nR6FBCKMfA8Qvwb",
  "key19": "4fULrQk176Gi86vq26k3XtFNLgDjibDs9qErepfH932zXkuii4nGBym1EiPRZJTrhYG9XViduzv3pktdtPbDzdE8",
  "key20": "47mTTPH7bGZMrEn4wQZwURrKtNLuUpmS4VSTSAcn8vTaduziVWbrTVWt6Ewx5DoWWipe3J1YDBZj1DYr5P6t1nUd",
  "key21": "3qqyM4bJjFir8vsx2DpSpz7i3kYBL7R8qfHGs372kjYkMKLhmfep49tS5PLzxBzXuWRsG3vTo7GT1s2noRFaKwyh",
  "key22": "2bQP7LcRUhKEKLS3RNxTLGKuMfAHS3YW16WtSKEWjV4t5EoGY6mY35jSaJk6yARyn3Fa6QFu3opNrUon5cfLk61h",
  "key23": "3TDQTU9E111tR2FSQpGSEatNVoBT8e9ejDUpv58e3pLe4VhqsFd1xEPW5DoRE8LgHSCQ5SRQABZVoJPPmQWPHRSG",
  "key24": "2DZBzVPDE3kwWDTHoZBSJ77nca1jCBMgYoFnqWo5Yt9ynxC5NNpjBeHyUePoyjyjM9wFsBybQmWWhDkvpJMsa4CC",
  "key25": "2wtNDfVm5zp7ZJd98fjfqdKJBa9WXeWPG3D7ZdxH3YdH811iTRAbXwUrwUAef6sXACUx78aLoowBxBA1jUQJ8Brv",
  "key26": "4gTUrzx5quWcDBViSSzoAxEFL2qgdAABMe3n3c6tTfb6KWQH4BbZ7fMwawKXx5SQp99p3ccYaFqBZZvmJxwgvPTe",
  "key27": "3N4A2AZSAw2jEh5fnGfnkdEnxjBJ4U1ukKTynBB5aerFfkfCaYsYDbUSnvCTN6WbQxvHRq7hszCuoCvbq5Ac1zfW",
  "key28": "31mi5XVmfR7bpFpGB7msumQ5fU7HiR5ACvaohZb4enVvsaPwj8GE1JwfBsSZqiwy11ZD9jNUBzFAWxpopXuc7i9E",
  "key29": "2CmDUXW6p75ixZN24tRFU7usyyh9cR9AeQWLQnYmDWkU6jhYUx4wR8q5iFpKr8ECTCPeZZrgkBzyAB3o4dE6jzcd",
  "key30": "2mcjkL7HkJZTJuB9nkx7YKCdKe3DRPMfSfCoL6L5yqMbei2gfKgB1bLhTBsXiup9G78RMdJzsXJxFj8bqt1BLDeL",
  "key31": "2NrxSuDaZeChYrNzunEp8grKVBCaekHZymRtSPN4Mev7zQoU4KAA6W3hqvZj4PwWWSyahatHmFE6jskvtUrkaAjC",
  "key32": "vfg5B32P7Zq5D7tejuQtaQTFDGKA3KJEquwHTdjzenFJ4VK3MZhgqC48jnX2jqtdQh7KgFb48GjGPtFGTZeboZg",
  "key33": "NpEupDp3PgRWnxg4RnNiDGbLZM9jdR1NSFDjjfnMMo8snuAkQCueNAYZN8gDeiYfwREg21gKAcXwMSWJ6CKXt3q"
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
