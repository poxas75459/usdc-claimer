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
    "32KRZ3CVyGJFTVz56EhnAmtKthdXMsNbJQeWdoZTq2wr2ufdRRJkWSeyMuVHr5A8kzcuTzU6mmET9rxjovjLNStd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfo6QraHdki86eceDghGDYE2EhT6DXQWGNC4P8ARpRdE44RAAM7wzf8zzyhtVCWyJCgCAzXtrVSYC7wdZnZuydA",
  "key1": "4vzdESXKeJ4Ewgd9Aye9xUBYNSL37eNEx5QbD7xAAQbbuTVoHXdbciuFUxf8evZCrwQrfQS4C9i6puBjMZ5z34n6",
  "key2": "ZrHy415Poo4N7WwGQY1Boxhpv4QPM5DtPcz8tnHi2gUxsQ2TEgNpPKYKhpWvcWBGLTpyYZi6KfnJ6TN8LFbuowD",
  "key3": "4yPbwrjEin7XhjrjdE4BYywQf6mNxESJiZYPSZUDjpwH2GmGXtJFjvPmrvN3474bPqqW9XoSmt4R33ayCZUEkDjT",
  "key4": "2AqE2Qb2mekpNYA2yiFjuktLoNvokDQP7kxjWZymL58eN5rwLb3EFRX95Wniiqxiyw9e4YmweUPBwWNvTpCru1KV",
  "key5": "fPE6PGzBYLz7KFj177cUbivfDrkH41DKzsfAfbBa4ypXcto3tEHNLz8gLZ7C7FJwUGaAVKVZTKrsGPtv8PgpVtX",
  "key6": "483YUwRrrydaCV7aex4ZPfaabnZP7NcMotdXCk4GWrRdvRhCivfDPjx4u1NnKGvJRaBjSU4xZQMK4KAjnhVzVYkU",
  "key7": "cw9tTM8jV2csCkjawUCJq65TpRavx5WtK7mzKuJxQiFNhyHfUXKHGx5bMBjhdW82h7z1zeFjeAM19EBupC5V3sD",
  "key8": "4CYQacMZK2joubB8H2QiidKziJCrnYyLegSjjSUB8qSXH4dSCxoUYixjqQq13X8nJjGKDM5kWjGJTbLNkz2tephA",
  "key9": "7Q3zZDKKQxigE8nHVJ2o4nKHDrUqokM4orJFJcZX7D6GuTxjVJSQeXh5WL6wC11DdxgpAs6nRoLy2Wx1SRrHVLM",
  "key10": "DTaL1H14yCfdoRQUFV3xYCMhSqHV3MymXLsL5HN9NaJPyYyUhM1MUNUEGqt2xYeptdawQUU9nRnpJdtRV5mtTgB",
  "key11": "28WwYsSk1RaG9ANtMEhxaA1dLreuHFr1sEFFd5UKp87bfYEbMrFYrH7uU7wv9uxikcGxFy6vJaDN3TR9sgjwi8jZ",
  "key12": "5gDfBnFw4chZNuqmKkwGhJEnfdMxNq62WK3KpZG7ESj7hDcCFENToFj9ACPvTFNxMLMdtocpJxCesEgW5eLbtFi6",
  "key13": "2ZydtGdFsfTmdkdLt5Me5fhfQ3C1FKvE4fsY4xww8fc9tsJ4fGUexJfNFup6hYBS7bgzhPCN52pcDW2ndWFu8xP4",
  "key14": "45cASDjno679RQCCMCiBxrPaSrUXQeCf97JFG5GDtyMvPRh1VKvPRyQ4uantc9gzNYP44L36A3LTVddmEEi74XcH",
  "key15": "5Mn2GJ2N8Nfu3oGj4NmHefd4wu6vSUPL6KE3pyHcuQDo5L6rk9G3ZzvAdpNaRQM5w2U6A6LCMzVkVPPRG25wvmLZ",
  "key16": "4fbSN35HfDaqhFVmXdhEuGpFhSCmyiWDUMw3xiX66We2HeRdqM37FbyLgNwJjcKtwTBTcPHveHH6Bgg6hQhGbi5o",
  "key17": "5RNK1B4iYu5KdMfAV15KceS7jkUvyd9izDfqerBHmSJp9Sy9XMuaD4siE1Q7AuuuK456KHkcd7isQtcdFZxKFzsP",
  "key18": "4NKjZtjh9esozBGUTRbcNPS6WWnmGqpZGLvggVD3usH9CksK1wwwWnkwHeDiG6JCpknC9moxgnjAk6xs6sscg2yL",
  "key19": "2fVaKzqd8K5wiUDR6jmdjR1J42t26u8tuDyYcTwF5wdmvdBsPjogVx9HPyyPXAPWvzWFQjJnjeet7ZdcpdsDujLm",
  "key20": "5KRB41DPxfVdpEUooV4BRPYsbzGW3ZD3QaguV5nz111NMdrDqceFesxAZW5DT33Bp2ywvSdZZQfJrsJ7C3awS8LZ",
  "key21": "2tkENSMSNFhXMaHZymCjrUMDZu9oHWDFGapSZETGu5xEYqw7ZXKUfGUyCMQnX3CY1xGU6ygiKbrzdtcvEf6siUNK",
  "key22": "3dMZ7Y7HsmusXScEysbAGHEvqCnqKZj8KCgVk7acCPzhoE6ZkQDVfGwNSD3yVPEWZcV1bfmGSpmuGJR8v2MbnHrY",
  "key23": "5N6JyN1WM7v6pyD6TVnPFQfWCUftYoN3bVYGZe17oJYKGieafTNE8UWZYAhnPRJV5NDkTYtFP3h9EVYM8Nrm6Uis",
  "key24": "2SysWb5aT2dFmQ3gbQw6Gyc4sCyQGs4Ktjbbv9j66zDq6h2J4LYfnS3JjDEWCcXhHqrwdAafjwipZuYA9giAd3h8",
  "key25": "2JBSsgV8B3CxFTZwnSdpofQd7xWqcXL1HASow7t3a74ZygU6QwCeUSZU8E2njbMu6ZsX3TYUMtZjpLWmm7G8Z3Kb",
  "key26": "4cjZ7krWDuaJqFVCXLE84JtXHstHxSrVLwmMi1Kq3x24Ehwia9yEGvTXjYSaqTL6CzHdWNtNeZ5HxxNVj3AVPiGZ",
  "key27": "3eyWU3AkmdGSi4UzWjAQbq2AsFkoKdrXzF7MgYhZoaqN7uxbWpDSaJ2f99UVq8jFbcx8nk1Bg8RgMMjEBDdcAn1p",
  "key28": "3xSqsdCazVQHmLxJJWftBFchCJQ1nWdkZh6ecGGhPoSvamFUtw2hJ2kTmqjSKVJq6VGRFrNzU7ZnKzCrhwnVxyNT",
  "key29": "64cWnAGV9hVRk9nnmSjMXPG3ogToCy9vFeEJNdfb1opAbWy8fsbDGLEaD5AFr8RYAKwBUp1uH2KAkrqCDKpBYqEe",
  "key30": "2TBxBonWdgprXkvGznEf8wjmgeu5cnnqusVdCYAqZmuAWUaEjpr54qCPvdxFx3r7r3qw3ywp6GfG5jkHyvit1gj4",
  "key31": "4eJ11b2YvmWt78r2mWmkWBczkgZUJiFFCeshWaTdUfRK46yJwgiBcCSvJqtLfCqEpBTS6ibvfP9ZHH5exGasqTR3"
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
