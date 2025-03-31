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
    "voEYDxXWoNwhCMACqSX44ier7NZTt4iJfk5Go43nQHxwMZX6v18rjqjm8BSQk8uqBbHCKKdFH73tFDZ2K3qSVLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LT4uBVEtdztFGvyBuXZH8mASBCzr6CxSZzyCaYaa2ftUdjwoFmQqWYt1H3diCvqsuAWep9k1evNe2RyhjZ4ZMn",
  "key1": "5nTJa4ZHKAxR4BQMn5fx5Y6F9SGKwdHQV4517VQCA4sUcUkZmKQbqrsYmc8AqzXQbErHPHdTCmTc3hDuoydafwbG",
  "key2": "E6X7gbZTGuT8eCUCPZNwBMZVdZF3nRHrHDbu46PWSmPogxtgyUvT8ZkJowEaHQXdVzVe9D5JCXmbRy5VMfZ1o1V",
  "key3": "2HWK4okv4WHJUDLX9FSGBTVtwzABHrz7Z1VkPai7E5TBYZ6hAercURJVsRCoR7cjZXgxoMXvjhZAn7UwSZNsXAZE",
  "key4": "5AT1uKU8yyRbeacV9Jv6gpBBynQ86HrF7nyvSWDyLckDaMmqhbUYQuB1gc4TEEeJ8nziBV7FSdyqrC6dyF5KcgDV",
  "key5": "43xGT4LUSrLrYxnyAu8ZwJiuf15MuoyKNEfnCQJVuHHywnJ6pR8qoAJ2rAtutgM4woEk1mTvGrD9TiKH6YGnacPp",
  "key6": "4RxEf8QqvNwbpFRVruajJ5MnQh937c8oeTReXGbWCyZizbo9FWjs3C7tzD9ZF9DEHvxtU5eKCrMyn91kFjQH18Q5",
  "key7": "2cSmDa78BsAovCchxFnSxb2nFaNJUNyjTDqCLtbT23GTpFpLBHnuSfFfWMr9Vqz3ndMeqXrWno3x9oBon6Zo6BoB",
  "key8": "5VEeo2aAH84VYmkgm29sF2TW4Cy8oii8gY3pvxyCAC714uPdnoYvUqeype2j3zvxTzyrHrpo7M1NCNM3YqCQUEro",
  "key9": "5AWfcDzZPgAETZktAvY4tfGPnqEeZ6iPEv2zMeeeQLYsqUYnZpduCrdJFSGd1HPvSxmn2BmFtxXb58ocgeDGZuSP",
  "key10": "5JnpLNb6nM4hYVJP7xcVy8NgFSX97Frq9eDhKEEDZdHJGW6KiiSAKotvYbk83aB2dnoHEpUePGj3paQV2ojgxprR",
  "key11": "5zpRBMVKps6nbqeAxvYfniFoLqpFsrJPwxEiSTV2xJabvJTy3P4ZgYDxEX8Ge3MWdxmB7x9wWhb5U7P617htBn8T",
  "key12": "5icsreMYFygWoDnnnDNMSbWt5fcvjgyGr4TaQtjpeePBfW3rdXUJjL1TMnFy4eYAzqrgkkLouGiY4uw8kDAQ47k1",
  "key13": "5nDpeFwzc1ty2h4ZHdQEb67bVxQCFznNiDxyNTm5Epb46jnELjd3JUMQYFudQL4m1g8LSXnxQWLeCZ67373MsDUL",
  "key14": "4h8yahx26SEdzCBtwGLubQFUxnkVEMYaFPAQHoohTK4pdg9qbzYiPXYktciPPeMjDerkmSfFSgrfTKo44Q2jJvf1",
  "key15": "22tZAHmzVdmX2Ub3J18BfNBxExmNYBQzxN8vefYkditha8BfrU89XN6bSwKjuUEW86BMKwJ4ZrQNkfBhzkaUVhcY",
  "key16": "37rCkxH3eMxNVsALjnVsgB5KSJdmCTTqgQ7c78X5qXDSmzBuUNE8aeEpzc73m7qG9Az8TBpeoFYtjTY6B14PKSZZ",
  "key17": "pZzPsV4AeKCyzPuLYLPxiwweb6stPc2eDQ4H5vGMuSaTWRiH968Yo3jCQaBqwWfYecTquyiH1w2RAirkuRLwXF2",
  "key18": "49Qnc4HLnEd8qeZCiQ8ekWdJt3z761FDATqSApeVFqV6eSzvwy78RKseUoZ8nmnfkgLpTNEHReFUod91yxdxqMEM",
  "key19": "4BsSeej2Pss7qGVjtkj222JHqtAa719QgoRKFsvStx2YXaYyEasbiiixLgxXk5M9YNrwgoFZVKMVAyaPPUmq8fqD",
  "key20": "5jizRLyy5Xr36YBuD6JKsA3KMDhm2bfXTinyivLHx13hKRHTgPUioivZt8ZhbE52oRnkmzxu1eMxsfkvaUv9pwrs",
  "key21": "Gbe2BMMGXm5pQ2uMknNvFTr65RHfE1xtszPLPxioVjNmAuuVrRy18ko66FV61tAMhasgZxVB1zXXmKDeh9QMoAM",
  "key22": "4TiLbZ8UGnZuuERqu9cgrFkLPQREe92FthUqvdz1g4GZaJEZ9t3HNPz8riRNHy6jvM8Fzv2VumnpjfRNbS8D8Gso",
  "key23": "47ip2zkycgRKoSTPVEsRCncRi6mhQqtoXoACzeomvgP9Z8NfZFwkqLEyyevA3j5bJVvL495ivy7A87ZBx2ebjaoj",
  "key24": "2yLxdWLfDKSAxvaau3bVJAsZNn2MKVkdc8dvhBjTraCFswomY2uqwpJwHVkWRUE73q1f6DrWVC9zXFXgSv31Ve57",
  "key25": "4v4zCySybtP8hmbGu1ubKm9hSattz7QgjKkDzSLwnWqozQfCLUbkVhZLtXWHNER9gYoARh7VnHPvkc6iS98eeEbC",
  "key26": "5FZVqhW5d8mxKMT3pfCF6Xe1jZmt9rHA2N91TD3GXkMoqWZUxYHdRGPaiBvZcRQAconwoGWnsY7sTyXfSQqGjRAj",
  "key27": "2Bh5bz4FPufNFuyigUNZtLZffAYdHPuzUPkuibScjbjWJBfbEmcNZY4po62z1pCXR5Vej6voNbARPqK3YiyySnn1",
  "key28": "v85Z2DfLAQ4dS8FqXdSyHQbGTMtqcZGfm4uVkErFinwgQ4fydxCB6SZeqCfKPNpSHd2cJG6GUsSwU9TjWjn94tu",
  "key29": "4fyei2dQF5F9z3ZBvH4fntTkzDE3ZE8BtoJ8CWLeGgGYrEYkv5zMhKTLyd4zyTzomdnC8TigBTKR9CF1B9wLHNhV",
  "key30": "2t1bBBQ5EFPMouKPnyB7U85x9LEbom7d8JV5Ug4rZjqzzaigkTEsZfGz2G9VJkqiQtWRLD7wxQeriEyAJUFStQ6o",
  "key31": "3sz3t9NnL89JSNoKMDMuU8RHGnXpnYDun1kbdHNoqadYFfLL1fayLMaxLWnLiZZatG15kin2aBWibEXPSxzKTQdd",
  "key32": "4JGrbChzQ5Fw5RPrhLtWhHR7Z99hMEw9c56mMxGxHVBtpCTzy3oUEGRmWtL1pDWVXQAs7TREUDmrsitEexuW3oEg",
  "key33": "5Vziu1xhkrbHVub8jn8G2A5rwtMyy3Ah4CtmQM1zDKxJvie5fECkUW4mBczqEv2ze3TMSrXTPgtsSM13YPdPPaE5",
  "key34": "XYZuFrxVw73Fy6nfzNwirksAjspcfKHfEJ7JKiv25gX9ogJtkDEqEwnm1Zs6mDKipTS68wckT3HLo2xZVLsqNBL",
  "key35": "5pP8gpjzwL7v9ZG2G62TDjBc2RiKWvv8AqjxeSx5sz738rqvoZtVLSGrCvdNB7XxXyyTxjBt2hAGrzB46xavz5BK"
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
