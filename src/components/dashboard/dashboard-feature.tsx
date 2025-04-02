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
    "4Gj397edqm7YHcrF3kAJgoDu7roMuXCDYjpHS39ynn2H9GnXp1wUbkh4w5ZJnBYguThcUpC3papESffpZ7hWE9yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dLw7QERY1ksQoGE444bsGFyyezrRF85z4VeaQvZPE35b2S63XnjBfKMKy5g7UCYJxYNmc8G1ruc5w6FDSDAp5UW",
  "key1": "4V7R5vXZwGdqThL2hP6DZpts5CiAchvdAhr1Bq59nqLwkzFF6WN8qReqaytnE7aGCbjowZGZTPQ92VyVtaxGXDA3",
  "key2": "3WV2qeMvDCigYyHtV5VeBFFjbk47LBR6rAkv5A2k5MCH6hoHbg8iQsNQDhg37ARLAcMVyhh37rQqpbhRCXiepxVW",
  "key3": "4jZoG776FSPYtcPvgNdBg2Wy46zTkUjKrsZCPwxojZvMAB4sppGfFc2CxecAv4eB7AmkpJjMJviL1kP5zEQ28CDt",
  "key4": "2su4VfJQKn6gJWjpqzruD7uyZmXDRanuwuKRZ3bEqkhc3WvHzmxfsKKYgYKne5vyoiWqeTZG6CnwXeU5hAq5iXRL",
  "key5": "5iP9YKZKc5x9prWAKDr288uSzN9RMFTYkDWerokFWescq7PhAdi4HDcX1Pu3gUHtvqbSFdHhQC57JBdrKEVG1ZgV",
  "key6": "2XLznf5wyeWYBohv1Ky1faejXVggV2jBW1LjdwJkuy5ovsyH2vhTQDBxUHzKNSq7YoJqQ2zfm6kKbEwEqkPkFuxB",
  "key7": "2XCi9o11qkDyRXqZ26QTdTykG71KD3WTD7X71q9jvhmW6rMUKuoZojQMx5wFZKwwvqEoqRwfkdMwAQYxGXHsxPr9",
  "key8": "25qWypAst46mDJSKFDjEaVKQNN4SJ96wDcyGTQh72b5nqFMaVRpQygFik2bZEp5LnirQ5CBUbiCU6FHh2oY4MCbm",
  "key9": "3D1uQrwm2NtG4Tuw1K5pKCGYZ4MEGeXZ8oFSYGZJMxeit45XNieTGw2kBMw18wZMgpAsqhHX5wnVFqX79tcWWBJT",
  "key10": "3n4LmgKhyF7zKESNoqUdM9D6RyGcs1L4kkNvYkHeGBuq11w8dmmDh6Q1HwRqfYYhDmxxJLhoV7Qb9SjzhqoSvUob",
  "key11": "4edBkVc9BTLASB8MGa6SbmsCFpyT6tBgzvadLD5CyCjJM4zYSM78ygMz2nmZuHEh6Up28ZiZy1xNT62NnjHCcXWb",
  "key12": "4MPZpFUoc8F12tbTRKJ7KYcg2rkAehKet8uZJgUPZ3B9NwNWgrs2uqABM1gRCY9t4PVGHYhxLYmUJSvW8rAmLzQm",
  "key13": "5Jpe8iGvQHyJhK2czXHHc7mDUuKHdzusEnBp5TvKoS1fCQCRzQge5yAS5KarcubWcuKhpYwdTSacngZrnqZhGJgK",
  "key14": "26pethvB8DtPHKTCq7JR4nrX7tmxztaQQCi71BPVGE6LDKVRsK5QLe8yyQVJvBgBSLWkcXDCoc5adzyWqLx64NMH",
  "key15": "52fDZbNNDef7EGbfcFXimHXmGoAQ1mkzaBMHX7Fejeu5tP9JcZr692n7nmaDubD1wyWDUXsAwUQF3A3z9v1hrorG",
  "key16": "3R8n9SEBLckEUpHD5EyE3F1ez2Zy2eh2GW3kS4nCJKpw9vMuSg3ckqs2LQ3jnRkBXYGponpAa6JwMbfbqh5BDpnt",
  "key17": "3N1UhAy6xt8rS4aqHHM3PC6GEbNMwB8t7jZJU91iqkLmvTajWvUwnTPW4QABVy5AJwFSJoZKzqh3Czj1UofNDVnJ",
  "key18": "4hAJHvBEhbyqZk38Ri3SqwxX1sRHKPqfkDxfpZnLCwHRsQvHcDj5rJiuS5h745fb8oWZrWpHokjcCERZyXossgf7",
  "key19": "4rpQJcnazaLrsdESKsCZ4C3zzQBMZ7Dm24Zepv5R1KrtoYsMMieTdDeQXrNNqDZevjnTcGoDE3F1HkTz1kbyBTD6",
  "key20": "5h9ic1REvpphdS1iRvwdmhfLRg6n9HPec8LfiQFd7BtEM3sxzSStpH21grVUiubnfCnRzw2qim88qPnzqJ7Qstha",
  "key21": "5xHxsYz1jkp3kXUYDesQvjTw676qpPTzf175neaVLMfbnofy7CXk2dNKBU1vFDhHBQceB3tFuHF2mFragSNftkPR",
  "key22": "5kPf4nunbBMT5tSziJeDEJVXWkHqUKrsNxjQg5yvcDAXJnHUExfEsTmQXyfeqLbugJpBy745Qdkt5mNxZ2LXG1gK",
  "key23": "LuqbzNfXyiqMy77sJqipncjGB69vS3FKZhwFezMTcnAjqZsz6LosfW4s7Cd6ipgNTT1CAb4N7SpWitymXRA75qt",
  "key24": "3PZHwV2q1ujWqbVC4V5uudQgtqkNN6ZCd9WEo4geAnYTgJVfZU9HevGqpmV5hbQDcDwbcGzgy5YDCSxf6vJzd77J",
  "key25": "3rTvNbjfb7rnJRZrHtKs5RByoG7wkf9NKn4u4r4XdEtKF5UtD9f4DCj4euuG9S6rTwcmg8i6PgVQgomjA2wY384x",
  "key26": "jBmDxv3L7tUSWut8MxFYfzTiaBjSZLGQj6TVefRF1pL6vcjJ9hd5ZV5FTbji39opspHtBCwuyvMKSXRZmVCGFGn",
  "key27": "2iV31EKCf7299rNpQWTYZcz9vpfGUxoZFnzfq76fNaSajndKYtriUehQ3pZ4NqCBwtTEXw978AtkziRyS9awmhyJ",
  "key28": "4KXqJCo11nb3wfUDUVubiBsLq2fKZVwM2hWYUaA9Sosncd4sc1X9rTabT74uL1uPidcEjooL38atqhYAbr9152gD",
  "key29": "47ZM9MPqeJYFzu8pEsDQ5nR9gBVEyM8Zw3pqpKFMiYth9M7ufVbZzLdDW5g4hTgKUTBDnuDYmDaFCBWpbaLsBtPs",
  "key30": "nviUBQ7GBe5ttrnsUQWxp41e4rhs6dke9Cgf98AswZm8RqHjCh5K3G1qarvPNviVwysCVNKHcwQDTjeqUiKmg88",
  "key31": "2TrJVAsweu27jSAFb34LbV129DkDTqBzF2sreqvKRyaUuMsY9aY39iNSYiyijDV4oAD7MdRicTcHbdWTYQ4WY7wm",
  "key32": "89GiA11eJnegwohgVyxbd8PSroJApoqibTFE3ce8TM2wegzFMa7pMxqYiM2qJXg6LHpPvUJ9v7MV6j5Z2eVGy2R",
  "key33": "3ZNiVqL3TC6VTDs4Wifuq5zZ9Zt4z3s3YrEMXDCqKSUBC5f1DAFgYeB9dyZsm1TBUZ1ydV4CBi8gLrGM89JdWijM",
  "key34": "4z35jMqbL91wztVVSEHX3fx3Mr9ayGgp9XhDrqo4qpLUQ3oam7wz3R5HxziALnUSmGZtG67pvao9BL9b7RdDDWPM",
  "key35": "3fddGXXMHiPdcgg73L5pZwS7u9eC7XvHBHc1HRNWLKedw44om8feJQ6pdidMudLMKCHuYNTZM5qdPpsZ3LdcpS98",
  "key36": "9go1EWFYzT4qCFwGXM8boKdMiysYCiPzDnNhhcYPz1Dv8S5Ws5zcvxCrwg5L173VwRFSZggMw833sL638nKKKra",
  "key37": "3nZs7MoMBBogyM1H8iUHjtgEemsifNS94AKZmZbLHvFeLGs1PVEeYgT5cFh1ru28oNDJuayMdgqtgqr5Twap2yoU",
  "key38": "5eXpbzbaJgFcfKQYh9NJwsnbGQXWjMssExh1f3svKgtiWhjuddVSS5FhfPUMiGXVm6BYy5cdKkHuQoTRLFNEcAMU",
  "key39": "55XZsKs3jgJdGJonTi6FUq1z52rNeYqJj1pQkkxHg683ARDzGVFDVxNV6ruzB6h5TbbDgoQJNDBkdxjPjwTToHjv",
  "key40": "57dNRoWWfSRqD58oR4gaPjxd8zh9NbHGKE1qc3ZGvebRe1yrAhEci5wVxQAT2xaUzSBwf75JXTvaxHXeaE8r1px6"
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
