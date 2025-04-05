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
    "3jEvaD6uLZQNguAq5W6HWscUKhA9jmeMKYiKgL7ATrE1B87MzGP1pu7izcGZ8YW2RfrPjsU7DBxK5du7b6BNQtZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXf9tYLHbhhimitNgSHdsSTPLEHcUVPsQPScEUU4JknQQrx737oyxaLsK2GMR8tV7DWaWrKY6ouEHsTEcqmx16J",
  "key1": "2qixn415RC1c1m5aAtUqyWNQCMVVNXAuSgKz5P2bpw7ufMFUWfLurTnozoyNSm9MRGEwmnWq95gmj8qichpSEBqn",
  "key2": "5xUGf6TLaVZZoDZRTCMxXXWp1Q5yGZdreW32LQqzWkch37n7Rcfq7KybWYvzgDYwtzh16ndeWLQbqXtFZWMyAnw3",
  "key3": "xWLHvm1DWoVboLRS1y1tFaYFzuMsan71bExrZ1Vo7XEUy4WHkyh1ygg6yq4pfxQsUz46sfjzTdPJZf4DpT7UUKr",
  "key4": "2kX6D5UJ8yW4YrigepQnhKatneuW12Ew25u2WWp7uZNzwb1pKtLEuTeGtZuo2GhdLKQ1vv3GhAZgo84cCtr9AH94",
  "key5": "ZpER3topha3dSErqXtStsP2uHeaHWkNTnPdARs7LDfSyEY8TpGzgP9sofceSXGJAnLqmTFK9FUZ37dkWTXkwPWs",
  "key6": "4omSaBqeXzvyGybGZCo7HPZ4tcKLiFNhqAbxqLGUykTk9ydjBvVe7utyRmVGSWyfWGwkqTC7DJ6p2h6nC2TyqZAc",
  "key7": "5nBmvUzhmVm2Lodj4LQmqYXRDNA9LnNodPj9R3hDrX65jA7XGZZniofzcU6RbLdzJacSyCmX9hCLy6bH3h9HRPBg",
  "key8": "4Q1ApAjYQs6Jq8KAwVKJxQtk9N4gnNev6cw8joM2t42BB5ABSbS7EHJ3CPS81Pn9nLzZGaThzKLuqVfGtkSpqeYP",
  "key9": "5rpTz5LwEPdGmhr2XAFnBMWqFecfqdX6xYDvuKxdmaDWNTrSANzccaDg18mbXJtxGot1mF2dDcQxB19x69DFCNuN",
  "key10": "b2GdPePAGHzQ5tDQdScmExWwE299ysGP8wUHtk2Wstw1DJgmzMCq8rEoRq4nACAYkBooqjUdRA8xynWh9u7jTXt",
  "key11": "gM8fcFs7RnDMz8EoZ8PHRDVxJofGNfigtZF7dvghULL1NxTJjaUTqgJaLDHE8WERMr3FzkpSf1TrStACbWv4xnR",
  "key12": "Y5wC1t1HaKqd8mC3KhGHdhuArsnEoXtBR4LgKD3QFgcrnWrhAghtNra9prB4Ypq5DXxEuzjTzzpt6gkVeYTnnXp",
  "key13": "5bsfbGBvN3GmMftU7CqoCqW4fKvCh6kowWunT9DJX3Ms3oNYYgwfv22yMqB7hkqfwZXTKRKaSbZYtJF1AhLc9gm6",
  "key14": "4ET5NhTSCBz24cpca5BK2rCBUY3QfRvQpHRkQQYWeUqVD5sNfhChN8teemK3GQW78Qbw7XFRh4BQNKNwW14JAsN7",
  "key15": "43dazJ1Y9GjL5AdVNVomDMKRmhWZcRGCJJJ26th68SjRPbLgHNcbL3y2EHd2U8wENvVdkwEkof3VtqyZWfMq3zTd",
  "key16": "2tcFnrNq1wGpZNKC35ng1DySCzYMhnREFWumE4Y8uvkoHaUvVb8HjwU3AdyRkMAdMK3Bju8HmC3szGdv61rcAFMN",
  "key17": "5ZBDDqL4FZgUgS6nTuEvcimcb1k6D2qDqNcEa6BKTzEgeJA3GEavuWPR7ARJus561yTVa3xgkVWmQ8xEvCienRWC",
  "key18": "pGJQyyVYvFZQGEXKR2vmFrmP9Yoa4uqLjgegntBnLeTeLZ7QZvAnwm65newfXfCf6G96oSzdPYExhgMTPdNjMen",
  "key19": "2Nk7Q5secEpXpWVcbQDbmvf96NmLKgxXWLsVsKA7kwuc1MJAN6N1Y7QT2oRcVFXgqGGdedyF34xVNyNrQeaofutS",
  "key20": "62eQwihKDvFRYW1uUTy8g5hYndEThnzKRGGA9k2WraPwqBVmR16HvdwXjubHGhHhN37Nnb76enU38gGGTuUrWzwP",
  "key21": "Xvd15gF6Z6ttjLa13gtQ3xraP2iQzsBc7iMSi7L66FMmxGXUVuaRDfK82n9yq1sg1dM4r3o29rj71xy7GfgC3VL",
  "key22": "4RaGsA6bs7tDPQLo1gcniEuVaJ8nrjbzKvDvwF2NqTSMjuB2NW5g78Rm4n3WuoZLD39bDBmTUdsj48PLqRQM2pRj",
  "key23": "22kg5UdDEBa2jkPZW5hgSFEPYMtzXx7cEQaiJmqQ7ovMxmsHQQyEM2dhXKUw5koReLfkkvac8NwHwGTGu8R3AVmn",
  "key24": "2EA2UJ8auYdap1i1EiErQHD5h4KRmJzsEDJobzh5U2EHHqgUvXJEhnNrPG2FWHcdVfGW4iJ8mzXz6y9Ltei6Groy"
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
