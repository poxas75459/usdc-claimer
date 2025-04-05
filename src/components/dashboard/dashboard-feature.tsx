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
    "2xfYn8msyjh9LWfFDGV8dtxrKDefsxGrUseUPFKyqUPPM5xPo6bu6GDMkFSWa12NV5A4GnLVF8A1pduLFBj3D9PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYJw2m4DUgccvkJ8wGJXHxGzwfjywd3JmF9Mj9oAsvNtjrbW4pskh9nDdApLokLm19gLSZBQNw3zmWvQbfPQ7kn",
  "key1": "3VybM8nLKws29BdVqixnr3SKh6PhMNqw7AhwkC3Cy7Hu2JcdWYcMRYFNuykawWsGtFFXmu8rydn9pAeH5JGLr5kY",
  "key2": "455ZbFu4CgarTE4LuvQYzUVL656Ke4PSQadMGYuTBoNbRANAEyJWWkLqidsbq7KFHsSAGSii2NbBbKQoJod92QWA",
  "key3": "4e5i7APmoJRwvB9fb6Fx25SXW9aV5F4UhWHfVjgSz9ME3wHkwqGKkPTu44fAKpJg9YPJkWCv1DP3oy6ePaRWrjk5",
  "key4": "5GtX2Yv2WxhcXLYnm6bH8xjot33MJjctzdtTBn1nTJPN1EHABmEAK7pgLuJFJcJsUkzhJjp8t7hzB1NYbic4r2CH",
  "key5": "4rnRPntpGyYzXZZsDGB6fiYjhDzWcHpBgTk3eXz6xu6sYyTaABu5PSU2YY929u9VcHneMYFkxAKtWPJA9ruSYPrV",
  "key6": "62AdfgEjqnUBBmYxSTJYf5kbXhAuiTkAxteTqo74gfm1qyYbmG8BHMDJCZ7zf84iFdYyA6AngJbLfuBtm89yAVfH",
  "key7": "2ZdngCfiC98Qhiv2C6tn2zcQszHoUmtPmmxSRedJbYdhf9W4Txg1tyaUufFQzHLvAUEhLyZm257jLpik8FxHrAVC",
  "key8": "bWtbiTt5heThivT7uChFaj3LuTBjFdgDwWjnXn54osaRRAXxZThWKokpyXWGDQg3LG4K27Zp9qBrEX5PawtV2vQ",
  "key9": "2y6RRMBCdbggaqSfDYkTqLw6VM81CZsRPVM2bVUurdAwy4SukrByJh17zzn4Y3bbk5YCsAKQygP4FZ5t9ULFtiid",
  "key10": "4N1fB2Mg5LDZt4P2pvdcmfGqGygw5qnBtwdmmLdTuFSkjuYWFPXH8LrSXbDMFy7kC8oPTS5tj2DMjx9PMezpz4fx",
  "key11": "5r6kGQtPZPEvmwMvMakaqftchzHmLRSY3Z7xwWpufqNt2ZAQk2seT33ZJJdbDhXqGTbfkKzekeiET7v2ENBJcW1Z",
  "key12": "2bFoMvkzDUDV8ogBNnjbugpdeLZvKe63qJqHnu6mLa4bwadsD2Cp4CFr9MLvL3HLtoVnpmPjmf8LLozLP3M7nFkt",
  "key13": "5kUV1JvLhggjubDKXVVciWzTx55wNCLUHwtSy8pJv4B8YRWyuBwx8hFnRD7Y8g6M5JVqYLgXwo7CyE914i7EYTeH",
  "key14": "5K8nP2HozDavLuSNaqeR46cjPzHMvybDRYb71b18HWwhXGHkmjkSLzQmLZzJvSrXnhr49pnmWUnegCkUB3Fng4eY",
  "key15": "3RPjrjWpExhTSB5jKwBmtuSrVscWPag7zUrJfXbq7e3MUo2WJBNefyQagTxANaU9b13Lag3ABigicxi73qnEgdQK",
  "key16": "3ikSkMVLc3BqXipVfSfybQchf3UxhjEaadhhCHJ66LaHu5TgWhppFCkunnELD8MZEmkZHXhnwe2BoJWSqtzCRagR",
  "key17": "3fTpS9FD9jVyCpmTi4xgWjoBeioafQ99MBNLU8uQgpKW7KY3NK9mBGwyk2vuhFTou7Qv8pmitWrBnJPAtpoKFEcR",
  "key18": "3qifniJpgYtAeZrcnjyoH1EfqmSv7YVbw9CaJ8EV2W6GiayCoBive7MgZs7CvHKVdgdpjK1D28qVU1xbraRgqFJT",
  "key19": "3CuthxN83Cr9RQmEfwGsqLA7iPjkJaHqKLERyApqw1KgDXzzxyDcegGArXtN6vKiHgShMDuMWmnjkfk27ZCso3JG",
  "key20": "azkg7LPCtRKg238p8MxMp1pmT8y6PprNJNGJaLQra9CrioC6qzn2XnB3omEaLUhx6VMTZzGi7LddCyViHsbC4Np",
  "key21": "4mPM1ECnNkUkRw42KL1c96o9egu8mVbtQNb4ZqvszkDmKF4gsZCcJhLikwMdxi8pcT2ya9uhFU3nUZoQUqc2rujU",
  "key22": "2q9nKVUdFrdCiAJUveeoG6UbGBATEsGovEMJYMaAzHRuq56SKDadBEpR45ZE5YXbCpG4omuyCbqckBUBh3rsgRi6",
  "key23": "3jszkUQbGysLkPicj5ADSd9PvGq3evnB2BAFX3sB2ttQwFUrrVAuTYexFoXgau9mEoHJB899Wa54RoWoMGMQjZYy",
  "key24": "3tnQ6gFh1RCdRNPMJu5vucvVtfVhypyC7WSYG1cX2d2SoUpM2V1TmvLj8LVNLUQtgH1TWByMc6NX1owQ2ZAF6rGn",
  "key25": "3uxTQxu734C2ZPzCJTs4yJz6yecvqaiZ43eYqoSkvsjmEzRJ2qNAeXc335eHW8pMUMrf9ebyy2UhvjVNeSgYoz7G",
  "key26": "663S7dJ6wN39YVDCCDEQ2daxtHuzgVDX4PmmFFpsn6ZWqHF5DhVj21VhKEKJbnNCCY7Be7RL9y9wyFWf8ohBwhLL",
  "key27": "36YtkJ8on6H39u6xZ1mJFzcL41wW6Jpanp1NJhSbMHd6xUon2kFVhn4qN8i4yJzJ5KxNvTwGu2LcyZfFuai8x723",
  "key28": "4NUmuKCMCXg1AkBJpre8V4LAG21V8vm8UqkAqYiNPZNNA2ZSmRD7MPW37stbSz8adE51zkHWhyHu5gvY5mw86tq7",
  "key29": "4U36VPfkJkWumbAhG5TB2XHY2aQZv8TWw8dUYwG8iYUwntF6DYjdmSRKheRh81vdrYojRLfuupEKdhBNEMEPM9kE",
  "key30": "59Cg828kfLjL2gvhh3ZEvg9CvRMjMJ8wPecLo5eYvcTerg6UsUFdhXKJA1ktVL3V2MnBYtBaYK5yot732DieUTJa"
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
