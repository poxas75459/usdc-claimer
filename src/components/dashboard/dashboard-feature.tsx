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
    "2aVbmNtC2sRJAUxwAQr8JursHibLC1xktxWSfaXkvuHNF7ipBLQrEi99KxEDrJj4We5LfqDeBEJhuCzLZfR2SeRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LdVKTrJXDFGr54deT5C8aMuiycKWTBk9CFBQJcwBbX8hTbausLY29h7r9qweRDbfXqjsZJpVwtS8ha5xqTwSrt",
  "key1": "48VLdcNDJFXieGFanR8eLQVpNgzqgCQgWMGbLuLoNFPPLK2K1658t6efG41nBDDQdSE2MqnX3CNRu6LGUwcNz6Cp",
  "key2": "5kDPWgV71PRCVpsmHejimtD7wM9wNwvj6wDRcsS94k8MJBgwzEMJPuwp8AU6L3ow7hhJBNP5EJbzLpgT1ZfckDtF",
  "key3": "2KRALbkBttfftjRcZ5SYpSUxJEP6JRhQMDHnegEPaPQKL574XHLXnoetQPFVY1iBCxr5wyZFcWd6brty4gXkfEyR",
  "key4": "5rmbkvvj9K1mwKo3hKSMhnoyzQZCtHjmR7ksPH6z8mQibpMrqtnDu9U1VBYNARWd2vj3vAkLtao1qRJxL9HNgJWX",
  "key5": "5jcG7AkeQwgadEcDsg8iRVS55baE4RQ7Hr9XXnyRt7MQ4XswfcF9PrZS8BgwFBKbsombz1uvBTKaemHT5ePy2BuQ",
  "key6": "3NghGeDCLuAJNucvBhUrtJ4jqVAevcNQ9bnrbhnnevt3fmPaRRsyro16t9hyabNCA9fVZH1iDfkeiaWtoctjCVPY",
  "key7": "22kmf8y8BqKu2SZ3UZJdcH4DZCxiYNE6utXscMxVrY81Wqnca4mweJgFgG8sE1UMaqDPrpbEjVbB6gLr6gzNTmss",
  "key8": "3LaY4c5yTkAqwuXfwQ4GJJc72YBePr2RavxqxCAPhjsaWWcMG1pKR8JDjzsNVaGScdYsNDf2DVnVRLpTLijAZsCA",
  "key9": "5AEMqopMCRmGCMrb7mJwjBzqc3reVcSpSXg4xZkbVFBYQoUQG8u2owmB7QMbtfsUVEbTSZYFEfvXxo7RpeEczP2o",
  "key10": "4TmCWMicSRbEEgN7KQMzdRtKqSjCwsi82aGrSgLeATjJpsPGjiDjP4VE56aHEoHoh2BCj28XDdSFSKRbTmBbQnHp",
  "key11": "m2a39mQvoNQZuB2uCqh5UTPzSiuGWCwNQ8wQSqUyPYRkQudZ43h68CtNo83NNb8vATfs3Q9QQtj1KeA9cDke7tG",
  "key12": "5YPCXEQCw8agYfF2NQT8unCTkB2oXQY3xw8xR5KQDcsNJhbAxFfGeLtSzQ8akKD22VR17ix3Z5Aj3PhdVhj32X8F",
  "key13": "XczWBdiRSxn1CRz3KM6D8ti7RRVnFYe2dWKQEno87nxaxHrL1oi2ULGgahjp8vVYpiUfdgDHaPGcmpLGWn7bR5i",
  "key14": "5CRzFdksdDHb9aRWhhrqS6uo53bmcujm9nF2HRBwuKQmxDmg3C44hxSXfCWWvhj72LcvpUsKDSBJXRJfzpnLM2Zx",
  "key15": "541qu28VGCDJ9cHN2NW3C4xYxEAkc8HvuknU5M6wrCQpyq62KRFfj5himy5WtpEKVCrKCUgSfQWUPiaQwoPpGenV",
  "key16": "4FLNTEjMGvgk24xtroNDMYGbHsQJRW2ScSzfbN7QfNoAGsaHRFHvP6xr2GpMCdb5Q4kutzi2ucRgiuYxuPdAQbpc",
  "key17": "4fpjGox6AWaHRxt51Rmx9c41feL1yuQojHz6fr94hq8f32xee8usztsL3jEzJvuieuG3xsmbVU6ws88c5M2w9GJa",
  "key18": "A1QLs4NvYZyrAwoEu1qGnjDUawJmeLsYEAFEpT2JdNtE36iVgLq8p26R7hyC4mJ3JWoZodqKz5JpRyxKxMxZ6zx",
  "key19": "2mSGRH8xvZfJa9Lob1h2hFzi915VotC9kmC6bGTbkDnLptujKFVCnMABYk5JyT4J6Lc9mmbDhvYRQcocqeMxj4U1",
  "key20": "5FhuoRqoveRC14tXdE4PPDXsMX4bezhhyU7wfRCVJSw16FYURGgAEPBsfpKrnHEYF6zEFwJZJG1tJB1rA6Lac955",
  "key21": "3oZtDtbZmAiWCHo7VjttFa8XjQqLjXVdHkcsbUmYmWz6NxKxnjPFnzfhjr4TbuaujnBuEi5SrEuX1MJoTT45tzDF",
  "key22": "4tA2zzbGdn8ftmN6tW1shkuX3F1pZioC8GnfKrQr1yyZJVr4zxyuEr3dQotwVwXTJg6ekmV1PBQzJECKVzaFqW6P",
  "key23": "3G6XWMLkeqSypfietM6o5oP4ezLJEneh2XGB21o9jrAAudzMBXnAhP6pNtGHguC2py2ZbjViumeQ97sWq7gaek8Q",
  "key24": "e2qgiw5rZDUWdN6xtDUurN9hB25V5pmamDA18JXoRqRuU8DTZsCvi3nCeqpvgc6owN9fSwSQHReLExbzhAn2kyo",
  "key25": "2KS2coHTJu2rCHKPhGA6FGr9QduU9zBn3T9uU1xQTjcYJg3jKruJooyZbzXTTW3uzL6R1za2ZTaTzWdaaDcTD8JS",
  "key26": "5kzdweqEEk7F1rp1aHPyWk9781zQbDxyVBmPj1e7WtYLoRFfHa9bNwDwbas6WWa8js1SsJCqDk9z3eW9zYSn9Yvq",
  "key27": "2kMABhEz23mzFrY3sMbUNjdUVo3miuXwabGkYLKoMyLjhRPGX9MDcfeuLQqMr2m7jW3jd3ZHhU8eUUZFFKLCQ9KJ",
  "key28": "42wAziMCccz9AMTxRfSNg2T1q5vmoNggiRoG7qxDQ9DahtJECdqYSNxN86Pqm379KnRQ5LVmdZjFBnVsNgNSYHu5",
  "key29": "28Wa8f1oGBPFJcw2L9q73mC91WECnWBb3D2bqzJTM5YuTi8HUrpkZbnEgn3p4MsGKCVGaSiks1gfTEqcuU6NB7nT",
  "key30": "5iMCioXrKfdah9QVwpuRXDuDtiGCmrJ9TL2Mky1L8ibemEwn2qpPW2rUjJLnXjWxKB7M9Cd1zHs2jea1BBpqG8cW"
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
