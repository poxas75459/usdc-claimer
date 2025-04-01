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
    "z6z9zMwxbeqrK2EETSGMXzAb9TbBMYgVUNyWutzPd126GAr2P7hsX9vTJMDDj38osxNQCT26cKuw5tCj4QZ6urp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4MEJSfTUwxapqXXxWFkVgh6sDAFWguteSKTxXvkfZUiVezoG5ji7YLUQaruJqc53KBb97uPf8xsPzZBDwzpb6v",
  "key1": "4Ho6FjTSH6bNjvh8Zxzkgh4GgoueEsDx8d62VCunHjCXRL7AJuEyrppBGTyxxMScKL4EV48iqf6ZSyG5rzwsLc5G",
  "key2": "4bVVUDib2fVvjAvTPFpk6VKUQdL2roNxpHqztfur38whmd3skeSKkY3mjsZEvKX9of3CJsfNpBsS8mC872ohDqaW",
  "key3": "4ex3pHP86fpVmHkcwEJJ53kStCGyP5NwftmWRRtQZZV5bvt5VfdyG1Mp6DwTJvoyJF7YZy6xKZVJJYgc4DcRnxEx",
  "key4": "3GroSBLrR6QwTdhuZ8Pj5NpV8ypaGe8bd4f5XB33sc48Zz8JbuXKf9uq4znG5xkdMjmdQSXS1iYVL3zhpGaLYFzC",
  "key5": "3h18FyFJxChYceTcSSx8pVYLog5VG29UPrB5aX6PyScGMAn2pPDGfGN2wk5tFXDmVb85mQpfzqssEqLFo7YzNbmZ",
  "key6": "KVn5egLmv1hszrRqTqDDnyVwvKhTKr3W9ePRp87L67jdc2c9oDYmcK4wFtfFcY63YHF9QmJMZA5HGUoLsDdvLeC",
  "key7": "gwXgbDqRTdd88Qsvm7WnDiGaJAPCwWHodd1iUJNqyQgXp9JcaUhq6Pt1DuxUpDZbaTAFQ9nCpNCFFZkmtN1y1oj",
  "key8": "2Pc8v5nAkJL122eAgHXi6ssqQgCTEYSKApCnbfAxF5P36HK3Y1XN5WANEEkjMs7LhBf3rm6q8LPaALhm2GkQGWSs",
  "key9": "5ci1ptoNdXQnw4xt3GUvndMeKCECmkoEACvR8Gvy9W9vHbPLBiwcizY6Wd7xtkxdib6t7sZmqFiQ3ExwEQzxQVGz",
  "key10": "2arCoup5xgbE9554jTAo9rTCnJyiSvzxJnweLX4LzUf8HS7Jv7ftLvonCmB31bfivyPSezY2M65pH4T79wcqjV8L",
  "key11": "4xSARNDumXJZPeNR9QnheRyU3E8nYqFjSXUhx2zPVcm2jdLjXvw77MvMi3eHJQL82CEx8CCAZLY9DCtUHn7kjp9M",
  "key12": "2Gn5g12eiNQtSwVTrkbTXLXfQEdJHpBDmcKd4JJ1cDn1cbzAuqjQxpzxJrbt6CgqFru7DrXpW93u1UVAJt2fPh3S",
  "key13": "2HzqWEJxY4AP3YAqLaQLc3bG1JW6BuLKgZVsMd4QiDDqf2DN5tizZBM4G5Hq7zG3X5pDx5WmzKH5yBVAYHGx9xEn",
  "key14": "2duQqas4F15zjCmvLTASYCrFAfJH4Y5gHNGdB7xD55LSY1DyoN5UKLpsutsm4ccZL9pafAMWGTaAnGwWiawVxeNn",
  "key15": "2DKFm6XDbrYDdUY4P2uw9Jey8Pj4Mr9rBtB8z8njn8j5yud9P7KicTXmqzt6idWQoUN528AWwR4xf1uPzas5qWCT",
  "key16": "49QBBdqKHF2GFrJUsFzjYKPbRh9p52LcwrrE6A5whrbYABkZjxmAUpYByGTtA9dFz4GjfrmLdP4HVSHZaWWDb6co",
  "key17": "3UgKBiZLGWyLdBsN7tGnxVRecqhksqAUa4GtavQBggxrQfDnXZe3Ep4wTPMxJikdWfqJZHdkgi1fNzYdM5AQWiaB",
  "key18": "WuEH7xhTYghz2ZXPAsedK4964Yi5z1Ae6ZUxgq4QVCe5NLDLXpaJ5Makwor8NvHvJcwVdEbUxikVCUwQBtwGZDV",
  "key19": "s7FXxquxbFRnq5H5x6g89Kc5Vo8t1rU9txi1A5Ea87fM9SAjFkFYipFWKqSfiFjtRMzQVSgPDSN67zst91TwqGT",
  "key20": "3v9DZe4KpYZg91oSPQKft6wewrD1CjbwCbDWY3jkUpcDyFih8sGbm8v6JZpVPfSyDJeEyNYSs2JCw2iPp7DGv9Q2",
  "key21": "vdMjvW29J64AM8HwGTK5qyGVoHiCcNcdiYAkFS7cwxCy3j7gpyQdVh1ynmXYZxZ1NsENeZvy7reAZKFHjKqknau",
  "key22": "2wioTd3wNHdfEyd4tX4Sp4HkX8dEn6RXFnbUQp6gfsX9Bvyaj8mQge8ZDV2CoZyCq9oN1ZLbMtuNSqw4U1EjNkwJ",
  "key23": "3qFpzCe5JCvzW2irBGRiB5sBgpV1XuUTYwZvoUMPpXZeFpMnPW4ciaX7cJbFiuVeFb3NnHYXSLcKofd7Ly5xQKC9",
  "key24": "4kYimzJfm3tJ9SyNVLfVKUjVYUFY6bpRoYwrdZCRxh4Nk1nrdScn3aWJpZn2YaxL3pkGf46ycPCjNmyDmvWMq6c6",
  "key25": "3pvsGtaXBgmnD539AF34FEdG4TdwFoR617gw2fuz6pbJwJh1cnwZZf9BRwGQW8463ELT8tgMBYwsTcW9fAZSJWji",
  "key26": "5bjQYZtf9FvF5GwKpj8jLiUkyJRcnV8GK4JDevXYFSyLtm2ggCwK9PAqPf8ivinMsCyMU4B3QnJov8LYbPjwNKh5",
  "key27": "4LmyoBcKDccrLNo9dp2xmPJeqmSMPrqWDRNr5c4w4eE6p539WsUe2Hn7tqCATJ48hNv2dbP76T2AqE1dxeiKPCX3",
  "key28": "3i5vFB5rs5vwkoLGQfuNeHgNvwQsJgU1VcKuR9o76kRxJ5CtXq8aC1V3tymyZ5ARcnZFCpFb5EEWGFzwUN6BnNGg",
  "key29": "3mSoTeubQVeffSkdPysbSuLdDvfYYqHbLZha6deL5a4GYovH63uy3G8mp2xhqGpvuFZuCoihV9qFLArUvAjmFtHJ",
  "key30": "2vVPzb1eZpHkFwpLyC4CsXiW9LM8893bpgohAkbG93E8EFLEVND9D4rL4jUvfx5NXn8e3tacUnokMTJjKuAwabDw",
  "key31": "2r9eT7o1Ruh6AECDVzet8ABmTJxTVxhkzKRfuY3Q62cGmPoHeChexSg1oEuPZLK5cTQrEkz4nfwsyqpmfYAmeWmY"
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
