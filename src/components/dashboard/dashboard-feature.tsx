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
    "2jzrUBmA7CoUAFysSQYeU2n55LfGpCJyNvDbs6gsi1DpQbTetLLyNBbRh2B6FBnCNxmBM4bbjvFe6DDWsGukhmE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umM4YFcDKKzx46TXA9QbRt7bZerbcX1SUq2938rSCMZkL2JwSt78YKbhacS2sMrsVvjmkB2vvu3jh1MW2sZSEuP",
  "key1": "4tJta8ZwqyXdqh53ZMNxTe6z2FrKxiQ1zxH2NwXkh8ZVbW7zhyJSF4MTLVgJSYwy12LEjdDUq3Lk2t9AYYV6oHfy",
  "key2": "BgNnJpz6NQQL8WYTfnJbz6e2w7sMJwWpx4iUiFG4oi9HSDqGy9bJhqAufYV8knXe73vnHuZMyLb2f9bErCAm5RM",
  "key3": "4AGZFyzEFoUomeG8RcAWCxpBe96ydcYWwNbrQdza8REbXF4d71rp6gE7QJ6VJf9qhE91AGizeyjEg11k3HYKAGfb",
  "key4": "57hhuh1yiRA7rtLqP41io8oLpsBKdbQBXHBrbicmJeP2eeW1o9FFJ2w5JQJQhZCG9DsnrxwqkDhKNa7sHLirjvdD",
  "key5": "3QhxMMiuobeP3WJtVpUA5NBDNJgWCFKFNNsSrBGJBYHDjq75z4ExQ9Qb9CYsB3zE2ihxuv2ZChCP1Uyc1GazPfg5",
  "key6": "5EXmWv1VakPLskBniLtWv4bQXvSeeekSkSrd6oEsizQUXF48KvqBThEm1xDAUut9x1zK8gziHZtgFqPBFxqDqWN",
  "key7": "PnWC4vGCh2H57ooNUihfvEZRs4D7NgDMrhS2m5Z3sAh4mncMFH8FgJ6rumCJJhqZv4udbVzQPRJEEWWq7urtJax",
  "key8": "G5zQUDHU3aNTf9RQj2qGc7tD8juoJ3w19NtLFdVCMqknas2EE3oepPLKFADNaMK1EW7xaBfDnxM642qWKytxLiN",
  "key9": "QNBeMeYgToaVoeHXcihA6t8FjpgK9bn1No3KweKK4qQLPy8bJwsc5Bax2A7osQJSwK1mVosYkdd8Saex4xCZWRx",
  "key10": "3cbqm5k2H6q1dcGJ7NwBwTf1qKLSaqyou1rmpJxs5dHFVXhUrwqAeZ6suj4naMqDQZj5PqekGL6PVzf5TnwhrXWd",
  "key11": "237WnQ4QYWvM9v6wtiqk7iMmthpQMWAvvHtp2vQMpoC1bGi9ivma69yHsn1r5NimDPVZih7bji98cpMq8XwNcg6G",
  "key12": "5sywpLTn3ztwvs5CSjN9YMMqMLBsaMMnpakXAmbfHjYGro52jUSEarzWqp3d92HqkuDt9pkWBW1QTzLfM5wMrZci",
  "key13": "4FMahXtC9ef2dmdGgYuMwGMShbRGfbRNKUMcDv3hcdcqq5Uustkd6Wn5oLbzsp7W4A7WSgn1QEfnr6nFateHnAnM",
  "key14": "419vpXordg9x7W5vepjhxz3DrKV99sFxPL62gEcForHw7taBooyD4ebEAxZ36xw1fJJHW53xK3qBfYdN8BKxfygQ",
  "key15": "qwV553qAnZyEBnJWLuakzUX36j8pnEWw9TVKyU1e9qA2NLHKza1JzJR6w9UrCWe1XDRWBiuZ1xxiohb3h1ZrHPF",
  "key16": "3FC9ALeMHrCwP3jyTYzsbQu3WrouY9ZkpsEmHbrc4wkPAuboifGNTPK4mLpagb91AQD9L4RZ63S8bXAzX3FcN5ub",
  "key17": "3vntErN4svgtfYe1er8QEJuoA3eTVi27jdRA39FucBsCaFs3XLqhrkpvLHqLA4uNsMbBfwogMhC842tLcSZayc1n",
  "key18": "ksrLMSXPpZDNgwRxh49d1vGB4oF9ZWP1NrattNB4HJ4n4D7Y7Lxic2RJzDQrF2T1u9sggEec1K9g4FB2DFuygoN",
  "key19": "UKL46FkqmyBMmoD4QsQ1pSVuJ8Hcvw5XcW5x5TpgjddzAt7ezPgXN3WRARS377jkLYv8oJk1KuqXhz5pCUfrzPS",
  "key20": "4ccNqh5vSa2mUkhbRWpct5kXcF8xWSiNC2hENmqsMErQqhQUmm8gnKZJbJHSomcssTR5nngPx2N97u6kL1JtsHDd",
  "key21": "5b1raKsSFtwbXbYMPqzq2KtKXrhQrmhxwwqHDTPPi5skhSPz6WsDGsY57kH2x4DvwdvWqfVssGVzxdR1UWNTZvWZ",
  "key22": "4gMnKgVVKeEgHBKXuiYpphsQafrkfLuFJFPFSLuBn2mRuZ4oxs6TfTWE3PqE4NQKJseyW1zmwXZ3joTPVzC6jLs1",
  "key23": "F3zoqSynG8gcU7DcuPhVj1Ni4xRwkRWCbHZB4N77m2RnDc5PRXAbXpkdRty7LdJXAFJLUFHZoZjCjPD6Z6P3Fqg",
  "key24": "5oxuXXNAN8Y5Q33sTbECf5JZ2uWEZPVdQm4z1tu3b5HYDgH9GNmkzS3fomeR1qrat5mAxxSG5cze2N4hsqU5TjEK",
  "key25": "3irHSQJRwwqLe2TXR2Vh3PWLkgfphXiZHiRWu9FP3GqTrSo9K1kyRKZVnpMPUH9JLmtodriZ8VeVyB4Ccp8Lp2aC",
  "key26": "46goHEZDoMK5bvNtdcgCuZ2UJN2sJWPGm8iqtrVGVDqjbocRt97tbcri8tFx1GXSZJvFRBucSdwcaM2m6sKbwWg5",
  "key27": "5Hoxcjf2owQT5NgDXqLT1qkMj3SC2TmkmNDSdUXZVjjwLrmAdTnXkGq4MpRHEMa43vgFETXRsxv5UxCsdCBXZkRG",
  "key28": "3F4Q7VdskzXfATRDwt1G5eKDwUd4CaSQJe9wGG5vJgJBkG8dA5FiS8z4qcKfAJGxcrcvaSYTU11yv1d9kQ9QS91w",
  "key29": "59urDEq46hvgs5GPeUqSN2ts9fMzcSpbB4yeT6J3vs39BkewtkDhwrgLUDH8dz948xDDeGa9v82cyXJn1QvSunJQ",
  "key30": "Qfz4ywuv2GNKrZFuE1GgQSFdhEvGQ2TB4z813c9gKJZELnuXujbuERg7kJB4fhm5gvDvrBhYhKnGN1t9VENPjLE",
  "key31": "3HM5j6D9xaQxSgjjZqJU5VpZukzGru1MTGSEnM24XMZSk46PSq25kaiPuQ2xGxa2DXSWkTu5o7Q5fJjPfdQ7AiBD",
  "key32": "66qqXWkAasmvQW4efCFSgCVz8PJzJniUt799TNwxoDnsMgXrSLE4X2yENuKEZUjMiSvN6Zwum8p2f69LHhES9q5r",
  "key33": "2jJM7z7YQmHh3AWzh7o7kKNVKuMP1fAym6VVKkmv46VPBWUrbJcxtyXuSLzYWpmrUG5H93gFUxnBvyYWnMjkj4pz",
  "key34": "f7ZoqcsXehqKXe2jWJVVqx2beAcDqe79EjTkotWRNULyGzHLiBAKWTsvQFiL1tACDktzxmcVixSXt2knbgcz5ZQ",
  "key35": "LpBK9Zy5Gy234N6u87Bk5HdABNzNTmSAH4afsnFg7QNzCe51qHzznJwvAuB8SGj86fF9qzwYmdeiz9u2g6XGj5K",
  "key36": "4S1KrTTKD9eLdzcd95j6XBxkt9r1m1YerNDGHiCZ84gEoKEcHraCuvmCfr6E4rtqUrjkYD8feyzMtryH7u5eLQ45",
  "key37": "4DzPkcsFFDieVD4JXnLpAN2sDSZDBoVg9sW48pJDpnrz2ea96EWuhUHr1nSB3ZEGJ7mduNgUuFZdPBNebZpLmwAP",
  "key38": "5Vcf2y5yA2HBFqT2Te1Da7GsbxVXVtcPZkFEq9JcW8M1EfJoJRPqnRHiUgmr4s33GPGqT1YxJ7B9LhSLoLBuDP4D",
  "key39": "ccf8cTYgtqHdVUArRe7MG1TP9vuWXv12rSGsY579TSsL1jxF6Tre9AU8gQHgEkXscQxQu6e4tCSs9cmeaVxkE31",
  "key40": "5braBCTkdRE4PSg6hXhxb7dHCxSJXSDnHvtqRD6XqevF414bKevvnXLysgEdyjQcN9EfXDjSCZY4WnADVhLVQ5nU",
  "key41": "H67VGPFUjdAiNapSZMdb7Yp58T1pMPWRwpJ5toHK8B6fBRrAMDfteEJEz7KSzNGwjHWDPxmF87QXwZevCZGkRF9",
  "key42": "5r8gbHD3VEVJHHd7akwDTfaBykUghZuFEgtRHUpJZeCuULCgVQCK4EgWc3PK4mpNn2o9t7w8aXNpGBYjeBrQSJ3V",
  "key43": "4d6PN6TrCtio5b5siUSaTJqTzDjSLXkSS6mZDgKVZGFnnu6RCT9L4UFoj5CC9J8hLHmXtNXAPaDdt4scx8wfAvow",
  "key44": "S258KYJPycCPLZ4rLt1CtSbS5BsG1h6YMYCu5bSFMUAey8yCTe7Jw1TCQri7erhRqiAPr2wBisngN9evpxviE7Y",
  "key45": "3j2927xWB1JZo428hmRfzFKp2Jjm42RnHhDkLxMowRkKAeUAHxh4ZngK9Zw1WuQ4mv957BbfQ2vzpmrzo44N9wLm",
  "key46": "4Zg82R2VnEtWe63Jn4u1gBkcXdnjptEQSMSWFc85GHaxaXYasDPa9VxeNwD6Gv2gxPZSH7SvJWHvdw77NN3RTY49",
  "key47": "3toVQ637hjp4c5C7XHhDDEDX3KHnBhrAmpPq2ZanKZSqJvum5HuQySJxbyVpT3pBvwMmowok7FtLH9ueQenmWETu"
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
