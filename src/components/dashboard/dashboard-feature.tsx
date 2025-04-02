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
    "5S9mQAozwLE9gtjfjbZmYL5x2SWSXLHi7sZGyzjsRfmn98S4UACckaAaA7RhUKPHiETWSckgTVej9PDm3mgLcScr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nu5CLbpYaxgov49iadYh2dnKZyQwtXJdqYVMMuGLZUYqS6df5etout3K7Mv6yBQaybGQSgK7UHUpTXVTZ2mqLUf",
  "key1": "3zEQzLjFaKtkGsS2eCLvi77YBVDb6FRarAkGQWdNGyN8vFCTsF89vuXrz2LWRswGXSSZ5Be2R5D6VYHot8NQcDVQ",
  "key2": "4vnpLDZZ4ZJHXMMiR9tfkNXMzUfgiTRLAvQfCsHrDUygdaB8wc6YHakMGSNCAdFhrTnzEaY5LTTS9mWz8gVkuKTj",
  "key3": "2sUtmrss7v5Pfk6puD3LijHB3MagmvDbt8kAkCLggCoC1xrgysoCoij7xkjJoMMA11Wypo2oKQZAaMDntMQjoYzD",
  "key4": "3iGPbC3pNKMr941x5YVjuB2VfSdPnQZc7gy1LoDshmcjzMqbZfnMXbTrayekmdAJwiatLNzkn2KPNKGohqnGVMur",
  "key5": "1EfFFN2C6FgwQpR2BnV74XHmQJbiSimU6cDAvTTYFCBZFusoudfSY3zdGFfsykPu9W2geRexQJhBNyVzWGREXXh",
  "key6": "4GRcCprLnxfQjiF8PK3rRcgkTm2fCriusugzm1JVrNwkyvkfudQXF25DfievGTUacJ3TKgBCfL4VXttPsYxaYCYs",
  "key7": "29vZq6QFGsEeHqbvFut5UCugaWFrNgCWuCpBKTxreaaaRLqrah5NDyKRDxLc6rs8YSZLK27h5SayJquxPPEfZ7bX",
  "key8": "2ZrFrbyjV1CT2zKArMPzbocRaoTK6xjcPA6voDV1VkBYat4T42UCUbM6esBcSx5LbWPwZoEw2YjbGANwfB3LJr57",
  "key9": "5sZpTuLPNpBKGpSS6W1STMJ7VDbRca3RPtN44AEECP6ngZ5bvXjcgKwHsKqnZYXbiLv7gCa5DD1Ruj33HzwKScuw",
  "key10": "4XaUcn41bGWwTo6h9yf3dpJMvYSzrHVkm5UiTkaLDnYbApchyKuKt44uP4VDGMe6Q23BV6oc4UjsfyQS2XiCdUXj",
  "key11": "52osv1veMSV7Argm8NPfNbMnt9BKax8Mg7bZVMe9qQ3Vzon3iWNzw13oderfJ21WSG7Cub3jSszMsbmYoPvnVL1J",
  "key12": "2HUUdxK34XxDDzJUW2FjdywAQChWy7SvYH1bjbP9ohdtZ9JaG3Jx8pcC3LRi2PqN3Bt1NpWzYXS4o9sXm6NZJgJF",
  "key13": "tU7AGEFZBfQ6UpduDLqvN2v824Fp6hC8nE2gfJHHiZoAKxHPiWTjFDHwQdnvuXmbVHgN9tFZTQhu1XiEEgvCEWa",
  "key14": "5vf8VPfTqwudxu3KFGAynUFey43VsnCad6MjrvvtQ1UHQuXyUtQXZ9mbyFpBoGZgvzeY86jxaaBwiEEn7JwWFxEv",
  "key15": "4EKe56BetSTja8Byg1RLBJSJBMFs6mskRbceWypg3ELon1kxeWqKi3iA7sQPozsm6hsp7nCEEytBUZthACfnuoxE",
  "key16": "5exksz7ucaaHYKSy4UKN6KEPLVRBGqBxnW1wsxbN6wrPcFPsPUzojWKyS5TH2Q3nTSxoM1VSTUcVfbRGGFhU5RZw",
  "key17": "99tVu54AXysf1VBNzni6A5JfSFBHdiEVo4EG7L6LwSNzJFWPoqijFKdCMRmzddv6ZBDjFYqEgwTzemeEw3NX23D",
  "key18": "SiL9wGjn1GXHiqrus2hbduqwRZUmzzPJfpeaedzwgbAy5axD38qhumiHC78hA4af3QvS9DTs2y3JAAju49urmTR",
  "key19": "3MmUZKXuZvoW6y6PHM1S2Z8f67pUbhJ5fyZVqohFk7qBeT4cKUFtw9rYjU2cqnjrPddev3qmvmabYRY2ZxQW2UmB",
  "key20": "66cteeMStfp3rgB2QSbCyoaKC9wcBJD83fGaeNem6h723YAnTEjRLdBRusbBzct3FxmMMr9akhEPMKxi83M8o9Er",
  "key21": "5Lo95cjPnsA9cspPHYBDbNLpNZjstrQvdhvcztczf5acfQUyjSFu2xTeJ9YSUpnrLmHhv7cbMRTQHy3dNCzvpVR7",
  "key22": "55Hm6bG9CfNVR5pocX1aqoj7RptC1SEVcHxVBGuEPoSS75yzywxA1qcTWdaukcj8pyiLx7dxXTAZYodn1uGDyKk3",
  "key23": "MmykF4jcyFDhqNRz6fZdSTCygN96SzJkr3entQvMJn3QqvxefTxct6Rjjo5K3X3tseQyMUrD28k8FkGMCpJ8TXG",
  "key24": "6ytYN1SxATGCgqgFcrC6UNMkKqeE1oEiTPs8YKX1rs8ZAMhCZVgxWyPFtPd8Mop8aKSGB6mVCKPZ79Vd6LdbHa6",
  "key25": "3JvrpVrjVcE8zj2UHngFsqVTJKYNUKvQk6WZi693r7rbeAomrJjRKjphL5hkrx2i3TeX16eKzjxhzuvfzwJA9paL",
  "key26": "5KrcFy225LAzv9VCJQejfeNBq59VQqswJj7MFPqrgfMe18uwMZbstMwDbQuGKWAMDS3Ha6y9rHPLNNWjxLgFyzoR",
  "key27": "3sjhihqX9GtpdS3wheLVW7wpPgSXZPwDLE9LTuoJNqLhHVRpjaQsnJdfb9utt3mCuqa8gCYRgZ4AXVi168bYnmUg",
  "key28": "2vvzqzrg2kEoEWdKCQKfSYc6zUHapaqQPim3XtoGhLmWgqf64vzyGHG89FvbPAWM1QoFVrvLRNzh7W1o6v6WCpVE"
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
