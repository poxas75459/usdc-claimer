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
    "2h9hACpxM9hUGVub5LKTSpXWvbhSgtZK8EocgAwmb4tZRaeXTszfFNsCcD7NRs3ifGZL83tPF9XNaUfZkawLfJ2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTV1fhRwQN48kWgbm6CMjEVHEysHk5G5xthXeW3xH3zsi5YNKfnqPgpQUuJQaGGTQRgGmQZp1LpCiGpSaRYntxt",
  "key1": "3fAsHDuqqA8jj4skgUTAbYXgvGTs4rHK81VBf9XGjRV5NuDixUFsafYj2XS9nhte75KbGfzadzPqtphdge4wBB4",
  "key2": "3V5f6nfiqiCsr3brK1vhsNXsqDykjuEMJepLyMVCT7oJTxHFCkWuu1CXNcYNKoAQg5VmQpQppGVuR7wzSVMMfT6K",
  "key3": "qEvjuZEQV3Ut8etEhK74oMVfye77ukesG9iJGgSBbyLjLeLFNg87eRVkeEa2VQ6U8PQ38QS1QV6DXnW2rXwaaX8",
  "key4": "2YfuDyBd93WfstCfF1iWdWoMg9GBF9s57K89VeNochDUz5Lsf1z9Z9mBoFzVT8TmMSzimMBrQYuxLGv8LUogQq8M",
  "key5": "NEjS5y7GprNXRrQMJmwuYjTHiYtZQyHGWckzTtaVFvcNYDdGKkuW9wHDnpD12cbsZ2RrGoKt4zoYhWQpDTmkfBn",
  "key6": "5tLyLMeNVrB8DMAsnt7gAZxq6gh7idsUxyD7EUTEaa5v6bT8HZ3kTa2uMhbSt5a7n6J86qo3DpQN19MgxFc7vmx2",
  "key7": "2iju2pVbqTwb87ZWemkxg3ecQ3NdN35498vJVbLjkokFmYtLLGpQBgtrkpo6nRCrcCAnfRf6BpNsAh7pNNfv5Qyd",
  "key8": "2e8sVR1fUEYEV6n4RAxrsQk4paSLMc3iM7QAZmXdy7o3LfMu3DnbqqGfFXFY6YN9nEM6BjPJ1u5q332t8mcDPvuu",
  "key9": "63qbToVwr4Tn4ZkVAbcPn7u8To8xWjsLzeqFFigTyKnaYjiSyqSoUsHSukKa6WdySnRwW5e6mwPpAmZZL2GkKiSN",
  "key10": "4t7t79oZNWtGf2XvHR6D3cxohoyfNsqbdr2xih4Hyv67LWNzB6vmEaQsBcSW9MLkrB2YJDEnG5MnfaEGopmNRysV",
  "key11": "5VkGGqUrkwsoPzjK2afdSmfMkMukVEqGxvsXDJ2ZqJBe8Bj1zM3S1gad6Y3b8QCHZKyi7DMbP8jAB9atJBWRUqgA",
  "key12": "59N6YxMLMRoPKTVQg362QeXBB9rBopR3KNCNoiPyx9VPjKd24L4QJ9JTddcRFan5VVUaMQhN2xokFrkwdGtbdpgD",
  "key13": "b2sLnPM2BNNrDht1oV9ysQYqNGXiJzdDkeXe9932bCPD7DSa1czchPGbvx6Q8FkTzDZ3WeLGnLL623u1cNpaPap",
  "key14": "4ECWWH614DbSNBNhRbKWp4WnSjGYz4QKrVQLz8PFNUL6xpJyoQ6gibaKmwUwjtkddmgmTgTEzLmPf2FSRB2ZExKb",
  "key15": "3RLqkXfeSac1AZH7rG5QzXrmaTfSPdgNYVpQQ19vnyFoNR9Pzn5uLaMn7oy1peQDMT6YTJR5GTpWNfgGiFkon9wh",
  "key16": "4wh5HfFawJvNgychWNDXAX6VCknvnoTDHVnczRoNRqGRGtnHb5NrN1FVETXJ36JUPN5T6FqmDYTjAWGFs1BifXFs",
  "key17": "4iK4HuEzzJYrxxnwhb7J4MYF95X7s5Hv3EYp7A1ugo73jqozkBmSsEjqL3jh4yLKtMbXsLRtW1kFYVuBsU9LU1PE",
  "key18": "4v9YMWWx7gCTy9U5NJMUkZjkswZ85uKhkLXEFiTibteVio2xSAkk3RSvJY7zFopucjNooA4KER8iE4yFA6k4urvp",
  "key19": "GRBupnJtRwYXiZyZAombsKB3T1Tvqk6c49Zycktd5ApsPd2QogkQhK8ZDekXCV7or1LoV7Vvz35nKicvX5ozQfP",
  "key20": "4kABHAsP2vBYMTr84hUQLjwbBXQVfdaSALoVkE42At3Ae825irWA9pT7sNitd5h6cC5nzAgk15eJ9gdaabUjtLPz",
  "key21": "6aZ9FhAXkBUjYELmKFgsUPFWwgQbCUod4tpt2XpZzSB48nRukCijrbgcwpLt9kdpJf1PG69gDx33gvK8dMvUPwM",
  "key22": "3LSHC6t5rNjbgQ8PytmaDm3ydvLRZ7xmxmwd1BJARF3J6FzzzsCKJtWcmGq6oTujJrVXAZXTm2MYW3e7axRUt31i",
  "key23": "46GGupPLR54gzk1K3b7ihD9RTGMdPnkThMxQgyrVF9CDuVEsJD7XSUWbVtimvyET34fAXic2Xzto215KHVL11K5",
  "key24": "2DKChV1Zgc9XwN8tbrQUrqensZdYpReT2NhBzAVj6iPP9CrjA2ktwuCnzEnr7b4N5zR491DcCjcXVJPFyPuxnQKR",
  "key25": "iaSAc21HZy467N1Q564Sb5A47pzbcK78cA8VhJbdRAU4NDJcPRyKdRFknZu56tfjApZJYAy4othvgGT53vz61xn"
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
