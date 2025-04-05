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
    "Vjfs62F9Vb9YDDhdNsxkeGDoRKXytATTVUPGFbeA4bH4jPGkpRe1ApyiQPZyqpSJr94EYxUgao3wMn8EArACQnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H95EZSuoFR9TNNiu6Yxy4enQQFNSduDBdRLzcU72rPFjRfphcYjLpWw5jNZLqy686KWJGGkZ5wjmsgE8GKRUXVy",
  "key1": "4F9KC8KuRP3wrWCieAUfmENmwnBwidycfa8DZ8KP41rhqYFgkQ3pgFUDMXSHa56XyTHbuG2vdT1nX7jGkSReUwnw",
  "key2": "5gC6avNrxRys3FEiAwQTmkE3gbCCrD8R4wcXYyH17r7G317oLwv14y7FyWZubHAcXv9Lrd8c9yNPxtXz3LTePeij",
  "key3": "4W8ZsEtfAe6fsJthm4Ekb7NNeH7G2QUKAReDVnQQXsiUXfUZwwDXZ88JFj8k1KgkRkdBD5qsWEqAnRVBZescdBgg",
  "key4": "3DAQpofBE9FprTeZzSC7muquQoaC6G5x2whztW1f941yuMr1ap1VV246kGRibvvMWP9Rrr5Ub1QxniojqrWWfNYB",
  "key5": "3yqSKXgcg9r8chBzqSX1FrBYXUt3iQZbj6TmwQik3DQ2wp1WePfFUcvPQDGqWfCXs9WnRh18xCnTwjn39xYe5bWw",
  "key6": "WLea8bSMJ2hpq4tR65BYtMcPCcgWTu1LwLncwfvkAMQNwG9qUZ19mCeNLL3Zm7216txsT3bpppNsvML5bwueHWB",
  "key7": "2y9v6oMNM5EEGUzth64LBimtCvCmmfdTa4tkrjv9p6rzAsufz1d8Gx5Ft7waVACpQ45at6sWNc6y3TS8RPmhUefM",
  "key8": "5tA7C6GdPKazF67oYm9zfjJab2po43ZVPKbdkouZzcivkpp2iN1dATmBF5kKa2zCnFRajPq7sC1ttjsMniBderry",
  "key9": "4YDKAwcVJdyCLY6J6btCpWyNY77D64AwyCBQBLduG7bwoMbndc7Th5FSEE7komYwWuGEdyKxVZgxCgP3bPf4bZtS",
  "key10": "2ojyyfuoFXPDWTrrAt53Z7Gappx8qURnV3uw4HzZ8Kp23oFfwfSbuKj1LRZAp1s4ssbvgp81vdaVqjfwDxbZPSAZ",
  "key11": "2btcFS6dHraSKtTyrCLEqNgyDyYQT79Lop3KFgtDkoSz3dX8jaV2UQ7nEVFdDx3aC4JmAHHiGLFgZAdAH3fkMYjn",
  "key12": "4WyGCAPjUPQQB1V7U9tqZBiNnHx48LrEHYiYdg3fy2EmNKCZyhhaM1EAMPSmKyc97TpYWuo7nkW4Y92NPyukxzQG",
  "key13": "5VAE9oajM3SDpnRRoe8r5zar7CteYCsyM8VtUt9QeBYJ1NuAF3MQEnok8U8ZURnXsv4ZSEPzwP1XAt868JyjZhjb",
  "key14": "3cG9mu3BvGxcbBV73US1kcmFP38nqPjN6BnSaPijgkUyBSn8RVnH3pW2EadTynACXjvkKowqxeuEM8awg2Gmn5Ks",
  "key15": "5gdnEygE6cWRnHJTd2NkdZWeSjJXGmqLLGt4pZyKRwDppwRGt4zbmcGcbMezhG85jA9PHrFLuNwnq7UHVQQZ8oGL",
  "key16": "2HAmDtFnuiyynje8pU9gdMzQBfTvtfBx2Eu9eCz6AgLjTNndiVY6NP4jVg2dhgAUGPhhcnZfAYJD3Mk6q58WDnXM",
  "key17": "4Pmx7E1zPfEhdWnAa8NdsD6EedcJ1bt8Nce5vzSXpRozm8F7rxE2jFYJfTPvuj2JqP5d4Wn6EHARFBGXZygZesgi",
  "key18": "vNFeUhcMG9skXE1MPUsPBVfQveu2aaKUNvA8YD8sJAmz1EXA44nDTDBGPeETz5yzRsRyqLj99ky9A5qdK5ava28",
  "key19": "3c2RkpLuSJSw4AFFyaNdLKdzKdQZNtAjnRksDBJ2UkySwa24YgkDJWK6mEoRk2W9dD6J3NWKD8Dkpwu8Zosi1y8X",
  "key20": "4JohzZv3mCA8da8s95Kikp81BQiCYWgcgxMG8QnZVfex3QzcePanjsWDdq7gZyk7U4zhb28BqDVcYmnYn6aW8Uzo",
  "key21": "Ho3LLMaTRU6HtouRWCPeVHcWsDTqaRNGHySXVun5skPn3w16s4jWJjrhBJYHUxCNhGQ8vvUWxKpa8hJKpX9Sa6K",
  "key22": "4hRXJKkKGbEE3XFFSy83X6ems5qbP6jBXL8mTQikQKaH3H5hiFBLSN1foQp7pSgF2tCjco7jUm21TRrdKwmYHXD9",
  "key23": "3fYNWWZ2nG6MSbarw431A74WzHr2B7WwBPjoJ1J76quEiPwSnmmGbU5tJFgx7N9bE7AXksaKBN3yxoFbtFBxuJn2",
  "key24": "5wqC7R67hA6ucNyu8K3Lf3mwZP14xfKMrGSJhijRrpjp9nuLm5BFJ4ZNcJAv4D6PLnW4SMJd85aekf65NU7pKVBs",
  "key25": "3oDDx2WNZUcA3N32GcFdeG3YS3DGoCP1P7aabc8mHCFWnf3zo16ryhq2wktDFq1p1o5Rq5NMb1z3iFr83hVaSaAF",
  "key26": "5q4FZaXrmBjkaCMBwafJVMBhs4xojFVuuyyBArCFueG2eiMmUaGx6T5uFKBJatwNSvZPWTuUcMUVBLcE5GCT2wZg",
  "key27": "3YJrgP8KsSBuXPj7DKyCHpbJwDnXy9WjoPsZGKcvrHLEfzActCETitZ5dCBZL4CuAfD94n28cX9DR6xhpghiuU3w",
  "key28": "5VZJCL2NhMYkHQeExCZSzyBcsXkvEVnNP8yixwGtzNVAbVeprBpsb7VJV3fY2u6ofrmptCYTbKYAw97rVcKpN87S"
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
