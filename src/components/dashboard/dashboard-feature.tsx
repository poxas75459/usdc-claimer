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
    "4qFxwbaKswjDLghToKc2GwLvRdEdG2ub3dQ7cHCyDcjaUAxKAkhRo42FLLcXohiUwZCozT42ZGU5Hx3mHHfYCA5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHLEfUQXoaXFiQWktSxrxaBroVwJZFQ5KJEWsPDei5rPbxhGHs3tybVyqBRx4xhMk2sBiQvqJEyFfPxcxd55RJW",
  "key1": "5goNSYFuoMAgy5V8hVQ8eZ7gwHTPA6wzshH69sS9h326jYHq2e7aCwx7gNVsJNw9tcJ9UsjksudeMsaWvVsqrDLp",
  "key2": "2UWTn2Z8P1R7dqF2QrkEcPi3y9D3EyViVHKwWZT9Rqf1rEWeBT8PLUXzA4RJZf6XrQSybnr8uJFqbp1SR5rNvfR4",
  "key3": "BVAYPi33ZhffoNwvuTr8fecKfeJ2UT9XjaRqxDQXYcLdHqUjjwzL2LCAVRC5uAJH18rQYRDczLeq5zXZg1TjWxt",
  "key4": "54YQbU77WZZ9oStBrMxvjFYHt2BzppyxKJf7EzSnHs9fPd6qqmL4YSB95n7bbrsKGiM96JS8PLQhSN6s8eYRWULY",
  "key5": "5ATzTMyx8eY4VqJT8wpHZHReEwHF4eAHFfJSRJryjN99s5Uad7cXM7rLBYqLDjFmi2mm4JX3rQucu9Z51qAGiCGV",
  "key6": "2iXa9kCSShh4TQvQL94vYsM5dELbnpj8C6hAMpN9GJA3VFaEQt43GHu31aJzGN9sesYMPnE7V5vMZsnhAosnJE3f",
  "key7": "4WoKuCEtGyGvKPx65ngnauXJ11HnSkvp1GditFE4Rw5z1FY982P7hiavN38YsqbcnLZduhrCr9WJHtLaySNW1pzG",
  "key8": "3fzA5yB5FFrYqgJ6VVPkvfgPiLMuAdY8gHmpTD31xwRgrPjiLGpfxCTBhhTxuzeNAFA1UwSX5m7tSSDr8Jt4q5sT",
  "key9": "35M7zjbEadyQj25xtsi26HPgJ9YaGvjpzvyMifm7nc31BTBD4hQaGVN7JrqzJANAmTZeQLuqX3QF2WF7FznxStwy",
  "key10": "SKLSgJMrC5WtTrc3YLoSC51ouhNF7e4Vimg3ENcrsoeR1mbU5mDbiKDU4T8FRWffmdxQ8UfUR1Cgw2Zq5e3d1fC",
  "key11": "5ya7iPHvYkcVaESwBD5JSr4ZEo4gXf952oFJn1w4sCZXaZjiM8bsXFBLfrdDWeR1HyPPYvRcjSUowKsU7Rk1o1oT",
  "key12": "2D81RiC4JTYbBpKnaydKQFuXnR3zr86Kr7f3aMCNfcdcj6ZumnX2KDr3B9ix1jxa7LDsfYdMom9nyK1Es5SWeVSS",
  "key13": "48eZZgd8Z7zb7uzBu4dUtKHX8hXy6GbiENEHb9JsnCvrRbtaAhYyTTnHivyF5PEq4zaZ2wv5QyZvBrmzE6r7cTsS",
  "key14": "4SnUdn7a9LdT5L732LpZEFEAcFL1dFPfTAzNFzQCM4G5DbWK3CQuLThBuFbcPHfHPLzar1rBkoCBXp4SQ2a5QYRG",
  "key15": "2xfbNB8XyNienkepTD6hZ5ejCrc3Qr38TcfFXEmq6BS6nfDSHLRbuYsFsTCUce6CaSY5VnrgNnTkGTVNLFVKS6p9",
  "key16": "23SM3Vgpw8PyKMk2nHgmbUb3od5oUvrZJHN3yaG3z8BLMvPkmz1Wne675pdED8RHYHj7bZV9XFYVknkgLe9qXs8s",
  "key17": "5azreS3k1ZDyaevNVKCJw1GZRo5Hs76EbxgcasvUXv1wMvAyk2MMkh5HdymWHGMnJrBa5BgSq9v6sFp6USiJuttz",
  "key18": "5TfKswehHrC9hE5rAFvaWvpnzY9RBa9q8okU9qHmoo63qbGm9EZkNjMDG36wiXb9DoNNgQKUY3Ry5yidZE5QAKoS",
  "key19": "2LDRjp6EZ6sgSpvaPVGwhsKxeS22LTSwS2qvKQvKpHe9LVnfjAa69LTmdkQwNdAy6dKgN8dmx3YV4WLRso3LFhgp",
  "key20": "2Npur3cwMH3MP7cbWL4NjHXhpsayG51FWrBVRC2Kmn5Ddb4yUsJUNKSLwpWLbpiVrdQReXsCBg9WnnGtHwcUz66",
  "key21": "w3QR7BpfvVN9tg2SdDJLSaKCeA43VfmkPRfTRojeM3SyhKpYAVVBHWfgNnWAYxQFcmCPLzgpMJnDbPmgkE5iFaa",
  "key22": "3aNFCP83HeYbwjqCZSk7kJT1x81X3EzfpzC6qW66CScqe7BB91KPmoHv3YWh7BmCQEZ5cWNNWUdbBdJRS8idPbwL",
  "key23": "4NtAFm9AsXnn5BrvZJvpiY6a8EnuFHrHUX2MSqTZzCHiShpWnUiAHiy5ADGL56HuK1DQU5rEBzs87rBbbEjnuUKC",
  "key24": "3uZhoXUTX7xmZTx8DMLwqzcCqG1gsTLiSpih8wsP4tksybzyEBDhztZaGPbifrJsUsgZp4G9zyRqTzhfC3Q1otYi",
  "key25": "4iSByfasWHWcqx9wEeYJPPkEKDg9uEuEfCYnD9fZ1dD7FRRKNjD3ZCrTGxcFBuv8aUiFb26HP59k7zMQWZyc5AaJ",
  "key26": "5PsfdMFeuPYgLr4RnMSSH55b1WznbrTwLSPVBfEwh3HcRepTxwKbdSiv7yCS66hMmVqM2y6vSVg8v3GWuNLH7YVk",
  "key27": "4DUsMMRVf4AGiGiLSZTTXjmRv2nWzZ4W9LbNXoKmQQ1QeBmVbF3JqLto6fgKgHT1do1Pm1W8rAMHGJHCeWQyxMwu",
  "key28": "4KL7ZsHP9e1HQn5Lpr7o1iR43fRtVKWfedYb54dDwY32TFti77xPuTELhamg6Gkj1WuHPP61bqreaY8PUPjxjAHm",
  "key29": "4FP3TbwLwysiS5XaEM7CwS653MXQQdcwkDfsNMFkAfryR2mGYi3BQpKUm6G3Vmnpn8TKoCfBG1tRRYRZTaM736gH",
  "key30": "4hvQhSmEbte513iy2XhbF6LVDLUnG4r7w6CYagH26QUuKtAXKSL3tgQPZbAs1LEJX9Gp9pCHRwTZfybdChzDu8kb",
  "key31": "5f6Xt4TEGPKDqPxhEHcCCSQeAPVx5FSpihYPyBJdDJVF3U2tY7BWV6Har5dZ4b2H1oZcAywQJzRvMyhAGj4p6P49",
  "key32": "yTCqd8gEjwTh3vW2tv29HFLtKSMcV6sYY3zQ86p2eG5eJFD4p8mSDooV7gx7M2wVXCg2jB64KrZnNcRQpWKPozh",
  "key33": "4MRMo3MeHPjoQcpJzyqbR4LgmeuYmYxNzZDfLjqfS8VdKwJNyKfHpcGK6NyvtL2HAvow3EYSJRQszAKtGmiK8qVW"
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
