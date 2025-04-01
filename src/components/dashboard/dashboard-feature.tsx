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
    "2bDhdCSXXiMoue8cQraEcwRQ1SLYuSnbkqffFD7U5TVLRKPJwwZuVYQbJCNP2ep4sDEb1syDpiFRn5hfcnDPQLaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1eWMGuJZzjUKJYfAtyMBZwNG9XVH4NQMekS4U7eUXEZDggg5X4muetmZ8tWXfripQyoWUR1T3EchDGShPx9uda",
  "key1": "5RF926gzT6UxsgKfSeyVuD9Qx9corLzNPUwq6TW1kR5xTXHdHtTdZCXhYXjcScyJfzYgLmAYxxLLKsTwAVrXa9Gi",
  "key2": "MioAjfz2tcYNJgYuXa9nkh3ynttbrQ68zY8yKb7MYtqiANSTNcP6DA8Smmjh4h1u5cvkxWT4KpVnj7HXerz7KTV",
  "key3": "5YrpspevfSECPXwuKEnNW9MfcfuGzEZmYymmnEPhfr3G5wp9rMeoZ8myDempJmvNwZ9V8ZqCETDNQ6Yp3naaujNe",
  "key4": "47YPuBJyh1ti3jMfWE3bJQKTqMVzyk8Pzob6H5VvWcS4Szn91UgXyg3FGsiLdrZhVZvy16uBRuicnVbvxQUcjhyr",
  "key5": "4w5Vsnmv6Zc56giwuKeuJjrARVj1Rzv9zG1EPg42G4WouCgKNQ5MA8jS5adACqUqwYapGERMfzxsYjqwdrrUtBbW",
  "key6": "2Th7BdLq1c5Xi5hvwEWwcZBQoo63x931pJqZNKiB3cGB9KmGuuqzvEaxbyxobsTNvE1x7uScmwQ6UCeEp8PfnXin",
  "key7": "12rH6ZUhN8aM3QPqceNkfdD1ZTo8gHA3VjFAs2n4qaJ2JWNziPckGbfajXeifgtqkDyNPewUorEVbk4TUEswqsv",
  "key8": "3TEL6yrdKhyTJK6XW76g5mQed1k4HeFcLiZ1LNMt9zFAJtnhK7KNXbYEFVdgS2q7h9oC17v3FczqSmzTTj9k7z1d",
  "key9": "3BunfDMZYd2AFzKet9pyiPte4t82vp8wptcKNY5UreiESUKfoTEpNQovrfoC3FxZdaKhqRGnEST1KVgbXpgfgKsw",
  "key10": "236jfzLoCSwFbV7YHnG16e37AXmmCAEcacTFCWKDkgPJwCsrxz58jy2CDtHbLBdXcTgU5FkTqCVqbhwokMBC8QWn",
  "key11": "3PpqrZU6PbhHhzuoxDssZuBxnRhSoSFqvxuBvSeKJw8EsBeiQ5S5b64kNtpxKbrufXXkb8zNFEaykAMqZ68XS67N",
  "key12": "42dxk6FG2pVAwDrUREY5gaecVPcLAA522TY4SemBePhRfHUhZsH7HbxvVz2Yfy7tgBArDEfp4visnab213Luwu4M",
  "key13": "3TJu85rNpsGKaRtVcYX9U57xGYCsNsP4uxoAX4xYskcV1oGA6VqGNphrc9c2bxb3g6ZadML3cXWXeT3Svgi39mFB",
  "key14": "4AYBYnRVp8byfeQuhHCjbJyaeCoRdR4zHVM4fKM681EVagozNdTHZ8VWLpq2FTqSnF9rZGSHNZNZ7KFJ9akkmEnU",
  "key15": "2ipVMggA7SSXMmASi54fA1TwCrFT57dxPkjbzqUR9Uc8MtYwXrieewDZqiTvPhnNhQWbvs8a2ETaMzn5PU8rWud3",
  "key16": "5oqsqiw7LSREY2V6p99wxuZULCGBs4yVteRucjmuoETVdVkUrnb6dfXM5CeAdsAjg5xkzRsWoHjEPnABD5w1e1S2",
  "key17": "EswF5ieTVPT7arJmBmRXgPVnBZKTL1MMzvUqH8euqXCoM4rpzW4jf8Yt72FwdEq4WLAGASmjitQKMERrKVwJn1o",
  "key18": "49L22zmb26hhPS65zML7aULwCHUcKyLGaW7kJtjUsPLiHjQUju3TKG31N3QZtbexcyks3WLZ3z9X8Ct5Yio2oJpD",
  "key19": "CthK2KSHfWfHsMebN4P91m4SCeg95b4LTU6pj7Uqwwbytva47DmU6BG5ztbUuvbLU2tksFPhiWoZ8xK6WFr9GQB",
  "key20": "3pTLGnn4cZFAfebsp2QiQQhaQXE92cNnJNAuzdPJdCwqNNLsWgzFyaaAZrNd1kcLfeymUDJoPcBtP7E2suVpSJko",
  "key21": "2cgSzaBDfxY52Fu9gvDxbHjQqNihd5UdGP6WDfpUDL7NjjYj5ECZA1keBewkSnjCgEPTwdWycMJ7ZnT2EdHuoqUG",
  "key22": "52d9cohk3di8GzfKUnFV6DRhsR6avzXdf1uCbmx7MFNu4x1d6KGEyALwDH6YKNcjXVTuDUPKZNGCZaMnyAauwDnR",
  "key23": "5JGfjw8ZyZtLWcCk4jTzfpAQnd5nqnYFfeQ6A5xcE8qidBpGVdSjesXYgfkRAiEwNVjAJjRhxsNYUBxKFU8An4bz",
  "key24": "4ut6ws11ULceo8Z8y2HCgPquPY2jFNPteRw6D7PWDNu67uEAbtH8a9jHBtDTQHu3aX8wapfGbMY4XSnRNsoNYjpj",
  "key25": "5PR98LZGYcpSRyaW1mTyMMgL2icetL69Z58GyjTLh56RQSFRWJZ55yVapa5mmhBR5ihvaT5jDeReLhfa4jM3ESaM",
  "key26": "UNybWkhguN3TFLz4mXezFGntP6qK5Ea6wBntUPag9e2frGHxkZsAwp5wpJKDg7zzSJwWapyM5EKe4GLNYFf3WMx",
  "key27": "2rmjidWbBZmHJnsaA3Z8HjByno6GEBPTrv5PJ2u75jQHP2ZAkY9nZ4zrjiJFkeVtLZXyJWXPzLE5py1NbbfhQX4e",
  "key28": "5Mts3X2cemm9H7ZqSWNmojXstJXVX9riSJtUL7d7JEHvJ7hsE7nc8JAEviaHPtQRG1SiC2r77CRDLhvrR9ZXmHVE",
  "key29": "2di1Z8AJgDUuwa1tenpSWUFoycBPVQnNRJrK2ThBnh96iDLGdh6NHRuCuBqDAMitcXuie1qf15Ex7h1M5BqPgmR5",
  "key30": "2V7YHoyCWkGCQ5RPZkn9M4kisnHeeEuBxZFDD9ZZfLDAxgtf1LRjx1f2StGRVgQzhoAfCgnsi4tUKdFFdBAov9xg",
  "key31": "2DshTL5dJ1JumxpzpiFLbSjQs8LrTZVFktcMBmeT6jDahbeP9x73zxizGXVXPKDHPw1nJRNBVHiJE3gWpAJMGRv5"
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
