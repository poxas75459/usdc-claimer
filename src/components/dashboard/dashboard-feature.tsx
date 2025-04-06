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
    "3PE2Mb3uG7A3Dhzs1Vt3hFnMygygRprFntJhhT9jT6gjeCd6jPY3e4dLz2ENryaTGrsp88FhHHsdZS7TKcscHUQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X66YXPyxEp9GT6BmYv2sp7Er63DfTbYWrwk5KmffodamePxeJbDhhJrSSqr6vtDDaPf4i65BsNmTxtRxgqVJN8i",
  "key1": "4TdDVQEtWatrtJNKtjZMBPa2RbYcJzYMbefNduHaaL1gcNgLr66UVnXD5mDW2Kd1SfMkskixpQznKXTua2iJdETW",
  "key2": "XKAF72fhi9U7Y8Mxm2P29iF5dv1XRv24xt6Qni4NKPAy47kj3kc8oajUfE8xemL17UkknUzC8bVHWqvnCt8iXQQ",
  "key3": "5oEnENz1niamxyJxB8q8WmpLovFvFGrjkFZY9v8XtAQyGWGQUTDZXG9fadtUs9DwaKjT1Ca1xk7Y1VJkBvdUaCaa",
  "key4": "238KunaTF81GaRdY3hryxXMNKBmPowCmU7xCRAXa3c5rSLbJVAE58TYdBtEuPxzPq3x3Et7uczuVtaUyoY7ELdoW",
  "key5": "4DjJfNvRYV7QcF46kAxreHypJzeVGMYm7XtYhHdZdpWwc52rn9bajKeDo2wMBoYsbCSKyZSnNyrrkPbMmQEYxrwZ",
  "key6": "dtXoSvS7CcVUgWhc8cron4fczkw3TXM4GxGhBUPGCM7rFS2oe9C39b2pSY8gE2QHazfb3rhk7Ds7fFk7C2g14KA",
  "key7": "4DDehGM2Unyu5oubuWVGnqRUeTFMNcvcQ2SLj9gaJxP3F2Eymrux4M21qdZn2MSAECiR8qfsm7q3XhSBLi1JSpJZ",
  "key8": "5n2V5s715z6MgTJzMS4RnEmbGUoARhMHFxiPE7E6NnkAsrmHR7ZY96GMtfaud2gjzcWmQQjMiEMSECx6yymDDW3G",
  "key9": "iMszLb8s9ovemhCq2u5ScFKgGgCZMLswPEpjwNdGLNzaK56jY3Pim6KhuY9Lctd7tSJPC4wwC9F8vNJFn5hbV8n",
  "key10": "3r7NVsQJmpx1xCA4kwxwWJcTYq9i5QemJygqSN6wCs5v41igneKiJo84NvcJnm3ZKmQKYAi9h5Hyrnt1onm2Shza",
  "key11": "3q13maiDe2x7jintcbxx7f41ZXqDKPi3wrc4DpfjkTdguUSG2SSVVBB8ye6mAQXjid9HjPWydPBW2vknbAa7GY3K",
  "key12": "2s84xdz7NnmLk7kgv7PbdKWdayo9GkTku4kdgpXwRcAnqX1v2uX8Gk3fqmGFkHpCqUBNRs1mGhqWXEouEJiSBfmj",
  "key13": "mN61HVKPA5eSeH35ShvyQfoC698e8JmyJTMw6Ae2qcx1PnJxwhtEugv3oCw8V1MosBh4CqSiQLMkEXeUGKjLuy1",
  "key14": "5pcg6KN1XM6KoWjJF9mt6chjuyNSMUcntN7ARKuqAAAj2eE3meb9x95Ze16bLnpAKCZm8nhiympp4iiNuqDBYxD7",
  "key15": "4BCUz6YaEpm6RYubHT725uPeLtrqKK3qQ5fdieB685gKvan1aC3xurU4KsVAMwYJ7unAXKsusx31PBh1sobDbA3y",
  "key16": "5ViZ7DjRXucf2LcnrGykvPxGGUkMracBqrx7A9cne79xoLYBY1XwyVWkKKX9iDhFhR9MzVQ8R5rUiSjUxDhdYC29",
  "key17": "3XoMvZxwUpBqEv4ZyPTu7UtyacvNDmH5SVKsjY7n7atK48mmTA4vTK6w2jys3jinyjS4oRiVRkwCPp7pL47ujNGk",
  "key18": "sBYeC5SB9WGf46HMbfVvgC3uPbuh4bbE4sMewV8Rk4zCcUb4erDkw8eRU5GRPZBWEoRbwgsKthvqcuAmUBK58FT",
  "key19": "WfXXmDcXmG1Qs2BNz4xa5sZDjbqxU9LA3psKYqDuYU5vPPZFpzKsMWcvCAMyMvSFpF7g9zp8sppFiFYQVkobYew",
  "key20": "4ShJEMBonQaCG3mCxSCKbo6xWzhs6dpb99MZHCSH4xXZH5YbbkzAMsDeUfcCasHPUxno8PXmhWNzsC4k9CmcGFSC",
  "key21": "5VtYJY3P7R92Zx8FGkoxm72LhNNy1JCivCKFkr18Mcd9Ugfr9LBYoSPyR6vgva97rYdNmi7kvGjTRTn43f6792n5",
  "key22": "HVCrYGtV7GPwLmPYAExDHpr4n4vFPyHirgAix31hG83HK7BHTpW4raixuVUL5oS5xWdnJ7wi5NjqkNoRzhtf6GS",
  "key23": "Z4an7zEQZ9JMVVL1GYpv1Ty6DprwrMB1kKpPBFgLEKCM6DYYNzrwQtg5co8dnYPoFr8qsck78zW2SbhdunmXmQ9",
  "key24": "s7qEbNbKaiLdAGGLUNJCa52aUP3FoA5ctZfax5kT17hx1hfMarvp4S5d6JWcpes5soAf8EeoUeEjaSfABgK6uZb",
  "key25": "5wvJR8KgcDND4riG2fVx8mfzWbytQTWM56PMNPBgmT5U76GMJYrkF5bFGjfhiGtBocq5AkLAzuo3BVv4KrQ4dSUW",
  "key26": "4agqRVNbWRw9tMeEmXu3KkYqQwvP11P7835HjxVANmKsCQ4bL3LLKjZwnHPSQp222BhmCfnqj1R9WE6HaCnhUPLi",
  "key27": "4RjHeYr73N8CcBFPdJiN99tuaLgJ3WUstg647NZgjioowbfrFyHFdykrmHj8bGdY22oqSVM92AVgmAofTvi28TRY",
  "key28": "5hg5wcLTBWsy9jLWKaZnkrgAYbmppksFtfQrgWApVFY42pFEWwnz2RFvsze48gvf6jEbgQSRy9FJARTLTTWibi4F",
  "key29": "4JW6GkZ413ySnBNMeKyxMzqGyC5mw99oaRvZdzH1Xur4bC15HKCpWESgk1jL2H5ZfxMZP2dPyyPfo2HHqr8EFe7V",
  "key30": "QGkdNHYi7crpwUGQoSbNZFpyzEtYhu7nGtVFxmnNvnHczrQUTwaCLerFc1HSzq5V2n6cA3UwDGDd32Mw6PZbw8m",
  "key31": "5DYW36aKs5HUgpoB9uhZq2qcvUutc9dtjU5ADReNX8bDwiMTBDyxuDqhesWwkX4jx4GKuCM4ucEWj4FvwKd2aNbH",
  "key32": "66eKs4yaDpSCfkh9jyRvKiDXZSbCUDqmxtzc24FWkc7QYjzDo9hJoUXtuoJqU6QVPCupEXPo7t57J6LqeXgyRsUG"
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
