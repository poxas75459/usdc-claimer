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
    "2oMKV5Rg1rE8Rnco8pb6yaCvNUx2PSaUrQz1v8AUkL7au9ceTXjiRLjsLfQ2cCTHAiQQLWD5AyxTVERWxeZX7Le6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQKn1VSEP8EnjAboWxyffupdqGu4nRBYjCj1r1kLwgWDs3PFRfCRn5goVZYTcs1utbFd8gT5W9t8a17MRxYj45L",
  "key1": "36DwnUwH1fVQXPN49ixHkcevbrLWj7MCx4H4gXUCHNbjn4qtSygwmJdqEDVCKVB856W5dEwZ3QTWYop7ZDnp7xXx",
  "key2": "VYgAPF2eychGXVWhMpk5TdYoW7QQZFGCwSfoXXZxZWC3hrPn4f8nd8mrSUE41s6i8AuFryhh7gHDSsk8xMESFjD",
  "key3": "ty26wn6CeB7FbWHmgjoG9jjkP9DkzfMndEkmCivH2rucUFj3wFK7j7Ktu5hhsdeTyMJ6TvL7t3nATqMu1Cfyps3",
  "key4": "5R5i9T5jCWdeomfLNErjGdgVNwPwWN34sa81VvoCqKxGEiWrVJ9Mwsj1s97u6A3FBXMhCdFBEoAwUTktJK92HfV1",
  "key5": "3Ta4vxEfkAgnkZuLqnNyidDJpTSzArZA5hoJQS1ShQLZNHhzN7cyxjmqhcjS1susAJvP9TynMwwEGXGqVBzjxgWA",
  "key6": "2RXnJKLepiPhudkK9FBtL6TL2Xk84KYkB1Fp6JMxmLvfiDcAzjNSgeC2uwC9tpAYPQBB9HFUk2ksdvk6AhXX582",
  "key7": "5bdiw4scT8d3i299SYra9NMs49VViiidMbFktGrH59xQBX8uPK7Y4rnv9WATKrzBHngx65w8uBBongsLgzGFE375",
  "key8": "6T1TTpdaaWdFnkE3477s6XyQPaqwJ4aMmuFzKFFBjTybt9DLfVQX3emMBRx6MxD5frAxif5ohG2rRLgKHuDELNU",
  "key9": "3gK6YMxLMGWwLsSEBAAVeVQf9SVJDmmed9vWbfeuYdrsPu8oTQPGeCngYQfFQkm1aEtycyfEpEWati8B5guGPxHu",
  "key10": "5tRY6oFsq83cF6HbLwwg1auWXqZt5xJpmQ2LSJMDx32gioAmagT7sH9sECx6LdCznZukAx6sUvBm6moDbXoN9WEA",
  "key11": "2rkjhMtVLbs6iUMaUssx6m8L4Xfe7CBQCn74eQ7xnEXZms5jbS9sFFTaT4YhnpRg5gMVHAz6HCc9AcP4XqTnfn7g",
  "key12": "2UenJveCGfFRwyhDAC3iumrDfwyFzhadx3AToNPERgALMHBgTrH1DKwt7nKyxN8KkEqMJdgmyFegyb2wRUayabBV",
  "key13": "4awxJHcy85JBnakyBom7JWvbha9kqiEvH626mgMTcXR5CWQ69DeKAikwTcEhDqjHC82gRTkkYm7PfCBxNXCn8zAo",
  "key14": "4vHfMdNsCLoo4eSCM1ZeUvwE8N1sAEKFnsDodGNfmSgTe21iFX1KVgha4EG37zZeKxywPnx6FYEacmvPSjvPriYb",
  "key15": "5HgM3tEziWSsasJTaLg3HPXyDZhgNyC4aiMccHFFD7QfFQs5Vw1pPM2geTtx4qkc8XTCTfoA3Xb43vpLdHWmv9iF",
  "key16": "4h39HvABH3dpJQfjtoovpYyjEHQnLGy2nRULCig8KT2ZZACeqbW6hg1wtTtTStrftrodvjNJL8pHifBC9wjX9jh3",
  "key17": "4noZ74Ctecnx6m2GSaXnqfTPV54ZAtJ381FWsW76S5gmZCVPBVx6xjTHfhWWsGUntBwA67k6zBduQwL9kNgVffbn",
  "key18": "4nxFWaPsm9EMcBWiMqZCobZ4g6cqPkQjjGwNeLt1JtU2JEY7tZXVxEvRdzwh2By2atMETfw3h3pCjsHPaq6xkJuW",
  "key19": "4ajAPpmHRrUuL85ggbq9JnxWpbLPxESm4AUDcz1MpoK45kAH8q9J2UzQ5StiUvBnVDJtf14Qa9ziLpTX9QPqCzrZ",
  "key20": "5q8XofpxMHtLxA8LKA1ZYJwM52vTa38rjCnv9VuPww2vPAdKWZDcnnBiU1oEcq7qTEYiqhFPTVgdivf7EuGEhgt8",
  "key21": "3uaCsMBdzqyqQoL8Srk3JtxEsZth5Tfoe1fNvFANPW7DLR6MrxnXQbUm7oeUGYGkbxQndrde6MYMpWpmwNMtAx51",
  "key22": "3GunWwVeGWGTsiuoy2LTELAMWjFsGwi9TmTDQpdVzBeSPymdVnCPmQb6kR8EPF7KP4GhmwiPFzqdjGzYFigFA7WK",
  "key23": "4CanffQDvq5vzsshff1puSisZ5muB68bBtiouX6GbnQwmepBJXtcYfGiDv1ieg7Nd95ktbrCX63yUBUcjcnuQMpT",
  "key24": "4Hw82qFxQbxg5JU4yjToxraXCRHuHMyAr6ircGq6TQ8BzNFkcnpE2B5dH1qKZfj39AjfedArWQxhQLi6AUwkpMXu",
  "key25": "M7eqZLGbhSKzKshqZjR7JGzK5bwSVVBnrGBD46KwrRvcDGzTAiJFJhuf57vtVqq2L5btMpVSuZNRmcfRNZJyC3x",
  "key26": "3iZQABwc6wEbf68Mx6koWQ6QMf5SCWwJpqWU8TKGDVVGha4LtfC6WfWBz6o6uCWboUKwdL7Wrp1Ve5SpCT4JVXcb",
  "key27": "3MSdDkhQ5ZXovUhwVUpXvEkyb5mz5LpLVhdQ4i8nhMGtUUCN38CFPbcPrgu53X32wY648egfotdhWWr4xEkEpNCp",
  "key28": "26XB55g5uDfH8io2y291nQe6kKb7diZJQHgX2fwAU5MJ1meGuJdLAT5hyfWjoP1c4ot4WsvRaaDWyXVL8z1Yu2Bv",
  "key29": "5CKm1bsSpY3ofAWu3Ae5jF2nWdKgbhSFj8ARc8Nj2v5NYyWJqLsCK642VG1ThN9oZXyfUyCtBnZ5PP3gFaqRmwjU",
  "key30": "2VoWbFJkzQaEuvvPHVB8LJj1fvUcBKZMU4nN3bwQR4vWwKNqeuvhm72crznEVqBUDoxHFaCmRG7YB22xmiHoMuHp",
  "key31": "4KAppkmXifPdTVRvHy9uCzMJSWpAVKaroM1gG26uDqUR6r568wGGdxYnD7amjT8KKJ8gA6fZnfZowXEU5RGtyeMp",
  "key32": "4JNkJbjdSUUtDB6t2DoHnKDBCuUCjrJADWt28sXy1AASjD8ZioiBwJ8KhtYpXTjmpD4DAQDZv5UiNFe78Qd15sUz",
  "key33": "7Q4jYG3dn9ZeYwHKJVoGGbbfST9epZQjnE4xjTo3Y7PGoSJfsj4i2s9Yv6JnqrqtHHnLXL5nPBWt4K1K9HLW8wo",
  "key34": "5KDP7ZzzTwunCw2uLQPpt4s2JhNSjWS3y6ut66qoyQAKVu1gB8z3oHpZrfXgkKJLA77hQ629MrXvS6a3LVYqc4SC",
  "key35": "sZjWyQZAgXmUYqFb2RZv2y2RFeix5H4kuXy9hiT27M3VzDKMkea19FcfayfNTmmYxyzhgZWw3KuTqsHMycm2Hdk",
  "key36": "65v4Nw838S5YBNYH1HW8SFd3zHCcVhen6kELqzY7VsTbzp3wjNf4vKiFbzH5txv9WWmcbyndFpQXQ9aMomZXyc4Z",
  "key37": "SE6iWJYXBintFbmXf6es4mB2eJcyg8Z77Y2m81hohBUAjZtEp6knCScS7dqVyQL6vRP1Yy5HAzkrMEpufsYM38b",
  "key38": "65vFeoyNbRzuPhWCrrZ6qv7fePw8qrJpnYPTUeHf4mjKJZ2ijpQCCBcgRwwB5Npfh5ssfMgsR9rgynA2Tc1htJNs"
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
