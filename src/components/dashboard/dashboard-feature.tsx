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
    "3WLAZDCEiQPHiVzaRVaJktL64rfh559k9H8wFZHTnF6W7qqBbX4cVrVurrRvDJ3BQ1RVwizwmEBzURF7kovDcpdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3jy1jzawuVXZTZLvaMw9jKC7HhcbSoZukKatBabEajDBQ5EM2gdmgisqHksgmBxyws2M5tSxsjgojpPsVpwZri",
  "key1": "2t9yqNuhcvLm6FKJvmhBryVMExK9UjNCKXvnWeAPhBL2EkwCc7wbTqtWdu6uFHymnqUVJaUtkBv6wDWKhVdaeTnp",
  "key2": "4EsujaV5k8e8NZKEWZMb3buCsNuV4Np2edXNBxZRY6JM4HoEWTvvaBRLCagzxdi8HHcvC86BWyTw9gvxW3an18Cw",
  "key3": "uAW4DZL7XaVLmkmvdD9LstyyuLaX49e2WGn58cyPr3vdToWKbdTqVMc4MviwPQZhkcjFJdBS3UDdKzNVU9APdig",
  "key4": "4pRGF9FS8b26HFuU4XcEyjhCKAWRzuRwvnVXvCB9FnKpkPMdr2hG4ofWrGoU8vhZ8RcyFVTGTEh6Md4xBispCzhu",
  "key5": "5cY9UuTTZv22QmYEzTEoJCwUdncC22LdAKfowttGzAnKo7pMSGoCs8NtzbuhaGBi471kzd5hNT7CnUFUKKepMo5m",
  "key6": "Vy8StMKxy8HvvmqJmqyu58uVKP7Ju4qbvAZDU7rrHXK3ETrQ49Ni1fwRX5umrX2puK79V539txM7CZpbPCzhMWb",
  "key7": "3jNBgp3cBHbPkNhFNtEbA2q52Waom8D6Xucvr7DPDwzf3fuuYSRvyJwz1iX3WdydpKv7jeRLnoWUMdk2MNunzc4j",
  "key8": "3E2esCcZDfmY94MoWiJde3VwyXiRsEjQFr2fYVEaDfBbWAkpTccjUH6psuFvvqAPW11RnXrpHCwx3heSfEZCMzfj",
  "key9": "5EYkgpJ7zZna4JHzkyTeeV9JthXRfpm3xnRndXch9fi4SZt7eMfHSxscTo81KSZWdEhr9vUb12Eiq1Btip9nNRDW",
  "key10": "4V6qXcpMLSjcHUF4sgEWUiCKqaxDRZWkGyjYbwuGvzHjoiZn3RgeLRJzTXt8qdYDCpTXyTVtPScH6WrsYSd6xn89",
  "key11": "5fMtVzT4byVNjFC3A5JPgCu7mEADsorNpsTZUbJekhm1uEnLWfmK9C6v9g1icgtf7o515kdgb5FUPXzfwaaicokd",
  "key12": "bnEdh6g7ALdyyU2uyThcMs6NswJmHdEzbrs56S4ZonNmT75wiUDzJUxpXrKDzVzBixhCp9jUim7Pz6dvfbiAn41",
  "key13": "292sEDEJ6xDdHwccfmSJP4frkY3fAsMjRPQzbc4BaYvBcythBQGVauAPmCFoA1JUtYnCnkNFjZgQXJHqFmREp55L",
  "key14": "57k4oiUvHni6zgp9jodcFcYxJm5xTnNJtSjov5z9yEA1UfsSrsrfCteMxG5qaLdRzLTanDgszAPyFbRtYh5EUhGX",
  "key15": "4rn9hP4xzk1HRyY3sisZsa9gkhzZ7DjmvA5Mkhr437KVSFo2kU5ssjGMkachtKFfeAaCataDdP9ziy3SrHNkiCkb",
  "key16": "GAwYQ1wd9SmtGkzMeh5vmFEwVhvrC2DuH6op8ZxpoZnKoBeBwLCjFwTzoztD7sZC283PKHouCV6kdpLKReUNuLC",
  "key17": "5id7Kv1qDNBAfuqWeaeuVb8z9xBgCHpBpYpTfqoE4jLvRzKXG656tDA8Gm2AwsR16cExZbUXMoEju88Pe7MbcCWK",
  "key18": "23qz5B5i6jABQ8WZt7Nxa2RUdzqnhHnC3FUPFmAtspBCrcjDPMZuBzhButmt4ob2gBDFCCoFqGZj1xXfQRK1Rgzu",
  "key19": "34AAbvPZJL9UDACzswpH2dSs9khyre7qnKDCWVeFVXGPUU6K9ULv13LcCb5tdpLKB4zW4kmuTgsTWBPULwu4VpX8",
  "key20": "5BGYWcoukbRoHByF4VnPbyRsUJ1BbFdjncntdmwgHq7hc7xoZQvBLWGqacnwpU9XZftkgjr95nQytb88AbAsK6bD",
  "key21": "2CeDfgBvLdM9P6BA1WfqHBwTDH8QsyoqFWwKqHn7NEtQFt2fn8uwexMLYijzvPu7wUdAWTDFqtGT2ZJSSRAGqNaz",
  "key22": "5kPU1siEoUGgKkPW5uWy5VYKpWavWFURuTp1FJPQUkvUYpJX1ndSZzUyCq8tYmPk9am2wQ45zhnPTNegggSxEc2G",
  "key23": "2wArsqyGP3qHDZoBMKvmwUcqhTUCoq2qPKnG9XEVcb2wNs3UYS3BfW8HuM87ry9pM36ZcAnyDWHFdj2LWPTzPWuS",
  "key24": "4JZL4C1KUdHbtokgZiyDjkpPexmHHFxYGz7hhv7komv6epQYtMvzicMdfKsTCx4qRrDyx19ueUbeLaRv45EFu6rA",
  "key25": "5mvPERG8bnNK1H7SCF4cyM2mz2XArVKHitobjNs1z165o6nxiAzxe46ScaeLzkjYf96KgVNQ2xEPT6tUJJWe4ofo",
  "key26": "2UazHF5LpCpXRJhh764CPktG63pvPkqUgTWLS8Wm3TV2BUEQXufku4hdk8UWXx4qQekdnvvvvBZjcsbbSKXbiAaG",
  "key27": "5HN2prvDRb3WCUcKFg4nnJVYuBmXJXUfJFUjVRnj7ETeXyTSaTArysbcyU1EDUxWfCSDgZCsJaUMMWk6oR9Wy5Ec",
  "key28": "c3gKdJ99ftJVBLiDEVvG63VrzRfgN9nMm1c2UubTyqiz4mbuFmoA3oc4N4aWfqKxMKdEayAMMBenCZfhuJiWg5T"
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
