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
    "3yEzb7fRoRJSF8UPw6jS6cCoJHEYRmZx46SUBTZpP9jTVuGUuHyvv3e91YXoK4EaZ97Cq6ysn4tt2vwShQMkYYU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTM63zfEFtPH5sB27NVZm1eMtvgWadAnSUcYJC6uAFLTRo4jqDLSbG7wbczvnYFAhnebMEb2hzkv6o8sjg9a9qQ",
  "key1": "4sEk6mGJgcvT3uGY55zk8KGP6dFfh4PqrEFTjNedVpd63mCpLkMGWqXs4EhamakJvp5AmvtEkA3A2ubqCXKFHWNJ",
  "key2": "2gccZQAVoMbM5Dr9wvbq5jw7MNHHnsoc2rF4sBv157LbUNAQDjJuBmiGwr7kxqCHpP3Wow8i7B1CRSfbiD9BmbJb",
  "key3": "4osAxFy2vDxVSeacpKqWNVWXgyT573u5RXKvpiLFMzsSyrErunJ8ssVkDKr3Qkw81Cdb7QFPRHEGh11ay6xVvwdk",
  "key4": "oHYP5mZFqEPRRVJ3LY2fpZz1GRxBdzT2wJfGEHNQXDi13HYFxrMsqkymYtRjkYBnPzFkAHMkJAo52xBaRbG7gXs",
  "key5": "ZUjPGoPBWsvNEhhiUHpEA3xKX21wvcowvji7JZhthjWTZYoCtdJVNW8cxFrvBSs2oGFv9gZ3KM9yg7gippv4wnH",
  "key6": "25NyeympcFczcKdMRf4U1w154xgZv8SA5HpzdsYyoYrJrrbGrH14mTrY5f2SzzQezmLN2ftXbcKCFBSX2JVxMpMd",
  "key7": "4gUATueKV1TybFcJ6K6vRJbaphYV8ZMvRY5HUHRxhvf3rsJeKouR91JWwzUBVf3ZBdATMZZvro2XKsej7Vor1oyj",
  "key8": "2DxbJCQnSdz1EFQMHZSZGdvZDhmitiNW622DZNCeLD7VKpDxyFHm2suRaYfWx7Gn89tudSgVB9vxjMVoGsokpUcL",
  "key9": "2NK83rPigBfxjrNNJzRrbX9S1LK5oCaVat8AKL5CNmiznKXGthRTcXntbdWZGihLbtsH69EtPLZh4X5dGYjwAaFh",
  "key10": "4PvgvZbhx9UitnKSWLLYCGwVnpLDH6vcYuBJKeQE3LRhkSgHfzYVSRFk8noG8Yjd9766hVUgvPNKWNgUHtcKEGFn",
  "key11": "4a9UrB17dqV7iXSofEiyUBudqPSqTJhDcxHWEDKjV1Z31j4J3FqGnYs3LjKwmoE8Rx8hMGEH3KDxYtBGNWaSx2Y4",
  "key12": "3o1NB5L29vtTzy1tJC4G4bkACHhagg9Dy19EXwW2HPNkUgiSjSKTjWJe3zyNCB8sSBPs9jL2vpaWznvujb4oYBFx",
  "key13": "dd6LkWhz4whXtqYCLKACcnGU5tCKo4eTsxsEqWzjSwXXfEc2zKET8ocYtkYZwZLbsPr65EGJYRKcgsVFKac8JgM",
  "key14": "3MnCA8hSWTaGaigDtKQnQe36PmcW8KVwADfSbhuKV3Z5TJ7RzYFgLoaD2dDH27i8qeBJnV2RRHsG5MvSCrb2QtP5",
  "key15": "R4JgQUdKM6pNErg2iR5k9VBaAjXYYQ6xNsoMJc1XYfjZgPF9WvgkjhRpaLacY6zNLjz1QDH76xEUvpNWiWFpbKs",
  "key16": "2a7g3p3m5qHY9upfnDXG59f4QJG6Fr77XcSsmHR1EPNhfBF3thshdo6LYjDc3X1VhRSxkbwarCjw3eucsuNbsnUc",
  "key17": "5g32mqbTj3Hnxi2F2yqnE6HEN18TWtDurWTEVCWmcomxnhqjD37wwdQigq99FyzPi4TNuUGFquSL7MFvn7bnfH7V",
  "key18": "5xptMF4UWFPJENTqUm4zxwbTFNv9Y1rZ58DYhTQbugqPzwSFW9fD17Y6bsiJHQVr6iNWrffkUf59mdij19wLJLNd",
  "key19": "28nEW4AyurDxC9Lskqkd3cexShL3gThgDbpzw8t4JcDoqcEnbXkpVcX4J3YB3CEBNVrREQDMGfhdNPFtj7GjWP8X",
  "key20": "3m5yHX5Mkqy7QqhQbqcUyiyiFB72MZWmMczQqJRLCv4fVAYbSsimZekyuRBzb6PH5kBc1Ytche81JjNBedxbZpBX",
  "key21": "35FPf2WoEnA3JtYCK5R482oeScBJvi3aDDixrn27jCFSdnx8xbw28xrKREtmD5xdbFGhN1YKXRL8JaPfDn5J5YpF",
  "key22": "2LrFoUEGqJ1ZPWQZSFpg9HSLT2t4TUAKLF4tMyoSUVwEaA7XD5iFUELNZGWfKmtwNETD2mEztSWWJT8T5PzpPbVP",
  "key23": "5w8yBYm7WDQ5vrMMR28hHxmgJ3zvKyhxqYThbtVWCQ3B8FXqZMUFGFjdGQY5Nre9df7hCwmXakyWyo2G7iNVcbn",
  "key24": "nPUdKiu38y1jTwcFUHHrC45rsqeRKxj3NaLP8v3zdsbQKgufPuNubTa6bBLJTvw6pzgjAxTTBX1cTyX2ZdwpWGu",
  "key25": "62kT78gHLhjAQcgduuGUwZ9hDqFGsv2mcuJeFBx52X6noaKdiNPTun8h4eqpZtqEU1gKi3q5anLGW74cXSkCtcSM",
  "key26": "4irw5HE7MYnAiW2G5eQPX1L69MiG1Gf9g2CwJuBR447Zv8PSdy8SdesHStBoVf1jA9bpY9EKpiqoxohSGyJ3ynMk",
  "key27": "5yYLRMER849L7kBoA3VULUv5LkEDyTXCVSowqb1XgrbLQgfGhhVUEa4WkFyYNucqsMFVo5CTgj1QAqSY2fZaQENR",
  "key28": "NAWn3gcZxC8yuSwynNzpufpQNu1naZJJ2RxvcqwY4etcP8Hoo4hkxEpqPUkP8MnrM3eXScMgxALkn9QLt8Swwo4",
  "key29": "3CtqKnj4GQ6jiq5oHV11LXpEAwkwgc9s1MK822emZQ3ZajgKviH23WSbNgrEAiNa5Vt3igQ4hfC2TGrxTfZGiXHi"
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
