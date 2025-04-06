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
    "21MGuWzQ442ESYxiDhsqfYXvZRXjhJB26LuZmeiZjY9fYYFP11LuCe7biNkMfmgXXuFqaYmPcC4DoQed7Kij2fw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McMcZsEZSPVZ2RYFFYDRCeUunq42MGRoxGc2som3ZqHjhQNoXEvjKyBzezyUbxZ5Q9mtfn1ykQWM5vRuaVymxmD",
  "key1": "2zZE7ZYaj7bD4SnoNrkHhGKidGqYZLD1f61U7hyn6MdcCA5bprPR6Gt9wtEpaodCbRcVS5S1AGprTCKzQnUP8qjy",
  "key2": "5xJzCBapDNZansJuK42hicuE8TNuiLFdqVg49jn9hXhXnQaqW84Wu9HP3iUaF6uumsQw91D5GuebMRTMMqepXi4H",
  "key3": "4WTquLCcRxzd8LNbKyPDaZCarTusAD55ah8RZEsZL6VUsCw3v29j8Ad2oQT34LennKivyebgjHuXGhjFXowCpgUm",
  "key4": "5Xhjwq44o7sFvcnnHTt8PAVd9CKMSBsEh9D3A5RgViyK2vkyBtChnh8aEpNp6R8p5SGmX324qnm8YXzAjFRP5t7m",
  "key5": "wUZFpvfHkn2rt6aLa6vsE7sMdBVoCPgwhKTgMHJocEEQ7ZLRFJjYkhdt9SjXrfNjJSvtR1HLzD9oouL5LGXJYGJ",
  "key6": "3ruPkaUCV7X4y54RFjk3ysVph5QLwavw4tZUj6d9E6SUUkQhtTAXVP68eaFSTAzVHWCEpyRbUk4NNuzHHiJrWXFC",
  "key7": "uBJFPvFCjyXLSR2RpWnaqhCKGLm1JXGqC3AexWFqp9zQuYsBD1XNc4nPxji2gcjzyP8m4Lk1GxA74p7dGvvbvec",
  "key8": "2FxCjGHgk3RrdeUgr1cZ8dmHL4oWt4Kq9u4HEEfPi1Uph1zzEetKnKp78AX7jXehRdXe5JF3NiiEwEDucty1jD68",
  "key9": "4J9yUGqd7BNfymowuwAKagd5xFpqnbAzfnaPmUp8VVZhWTSdrK8B7wJFHtVyJWgweGbGBvtmrPT3AgVXZuLFAHDe",
  "key10": "57sFtH1CKnoiPL6C79vLgcgTfGLzhPyPp4KRgpYqzeSETXsizA9awa8SHvzp37mTYSCzMBYVKFE4WSbbknvn1ENz",
  "key11": "2fzgSwvu7htd6BuFFaDsouw5N3v4XtRnx4utnkfZcppADK8ZSwX1PM8wnFy2Xbr1ujgds1c385xS77k6fPUKraGB",
  "key12": "4nke9gNBc3JQaqV7k9yk6KCWpZ2iEqz8sRDMbkK5F8rpJFHQdgBmNQb33CyboMMKabxeAZL6HqnfD6F1iZ1ZRhGx",
  "key13": "jvy4aBw7PTBoHsUUmhUSZrEybT27uPksYTCFMsrDwMfeoEk1UzFu1fbZbJpfrCP5FNRafmnE38h3YMx2iVGRC8P",
  "key14": "5MMQzjpbiUYq6vcBJvr5KkiXiTZVgGGtsroc6DAZ5sgTaUkWjzcaQJUo4NR2LgP6g7BXdT6V4DeMfZGctXYs6hFS",
  "key15": "2gvTnvoiCpB9KytxxSFvn76nwzLPK29qKDzGCAvTJrJLoBP2zpYAFP7zX7941ELE7GagBSHZX3pqVvGafuFATYMN",
  "key16": "5oXHWhcy1rFQdxsA3qttqrgYDB3AQDEq4hDZyQVHdctMnevTFzLuEY5tD4kGyUa7U1Spwuud7EBnmvsYRKKxBo7n",
  "key17": "2Fe1um7mzv5yMxBzgN2TnSLHoxRj8GH9kEBgdDhdZUBhkGGepsjZb7ggE3gKyCHvm2WmEgvWH9nC2C372dKUjss6",
  "key18": "4X772oUau3m9kdYBmV7CdmBAtHcz82xv7DUmhMSZ6dRkHxqTTSbshMbxJ4FxUZ8yF4w6fEZagBtuwkBvDqsxtgoR",
  "key19": "5UK7Jwoa5RKSB665BHtdCiGSY9wQnoCS1d6udMr55JBJqDViVrc29NfD2VTSs3HJm7Q91ZpgfKjQiaxUgEmrpdbL",
  "key20": "4RBLZbNuKkw2w1QvjvP1As8o4NKCEK4MkyqnkbQcfYq3DBLGdtsdYYRgSNBJYv3hRTy6H6Frqr76AgrsoYMWN8xJ",
  "key21": "NjxFeKd1ndtFGEyXhjB277cZ9JY6m7Mbp92YEMYEVn8kcvipdpx6SdHQdDSeRjXrSE8HuxFCQTYfJf1dko8bc34",
  "key22": "3VrkxG9UKEXm5X43A8MbSibYCmY8MdxwvQFnJVekk758yKTgugvNqezmi52hQWdNYujqSQWqXUN2vkb861D67y2T",
  "key23": "6AyogxBQwYb6DUG3SgyYeu9nNtTzW3hh4U3GE1Lei8aWYXJREjooCMgZUWy2DsJK1CnpJSrDMShYXQ4Dr8AwfZY",
  "key24": "4bhBq5EgWWhHWwSgWX4op3i7uBa5ZkVJ7sbi6uWbeWDmrjZfzPRAMYD5AAgsQAtYqubo4YXNav91W8aLGFbwDiPd",
  "key25": "32YaJXS8Udfe2dgjZeWHsHHj4S2bHPVsYdT1vxAS1NHMsv76eCd3fqotjT3o67XQiqGUZMDgDUu3q3bCYwzJG9GR"
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
